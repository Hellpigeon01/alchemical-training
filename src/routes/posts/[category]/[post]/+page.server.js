import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function load({ params }) {
    try {
        const { category, post } = params;
        // Construct the file path
        const filePath = path.resolve(`posts/${category}/${post}.md`);

        // Read the content of the markdown file
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Use gray-matter to parse the frontmatter and the content
        const { data: frontmatter, content } = matter(fileContent);

        // Convert markdown content to HTML
        const htmlContent = marked(content);

        // Get category data
        
        const categoryFilePath = path.join(path.resolve(`posts/${category}`), 'category.md');
        // Read the content of the markdown file
        const catContent = fs.readFileSync(categoryFilePath, 'utf-8');
        const { data: catMatter } = matter(catContent);
        catMatter.slug = category;
        frontmatter.summary = marked(frontmatter.summary);

        return {
            htmlContent,
            category: catMatter,
            frontmatter // Pass frontmatter as a prop
        };
    } catch (err) {
        throw error(404, 'Markdown Source Not found: ' + err.message);
    }
}
