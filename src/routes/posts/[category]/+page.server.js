import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
    try {
        const { category } = params;
        const dirPath = path.resolve(`posts/${category}`);
        const categoryFilePath = path.join(dirPath, 'category.md');
        
        // Initialize category data with defaults
        let categoryData = {
            title: category,
            summary: 'Default summary for the category',
            htmlContent: ''
        };

        // Check if category.md exists and parse it
        if (fs.existsSync(categoryFilePath)) {
            const fileContent = fs.readFileSync(categoryFilePath, 'utf-8');
            const { data: frontmatter, content } = matter(fileContent);
            categoryData = {
                ...categoryData,
                ...frontmatter, // Merge default category data with frontmatter
                htmlContent: marked(content), // Convert markdown content to HTML
                slug: category
            };
        }

        // Read all files in the category directory
        const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.md') && file !== 'category.md');

        // Map over each file, read the content, and parse the frontmatter
        // Also, parse the table of contents if it exists

        let toc = null;
        const posts = files.map(file => {
            const filePath = path.join(dirPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            let { data: frontmatter } = matter(fileContent);
            const slug = file.replace(/\.md$/, '');

            if (file === 'toc.md') {
                let { data: frontmatter, content } = matter(fileContent);
                toc = {
                    frontmatter,
                    slug,
                    file,
                    htmlContent: marked(content)
                };
            }

            return {
                frontmatter,
                slug,
                file,
            };
        });

        // Sort posts by date in descending order
        const sortedPosts = posts.filter((p) => p.file !== 'toc.md').sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

        return {
            category: categoryData,
            posts: sortedPosts,
            toc,
        };
    } catch (err) {
        throw error(404, 'Category not found: ' + err.message);
    }
}
