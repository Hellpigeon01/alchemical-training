import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load() {
    try {
        const postsDirPath = path.resolve('posts');
        const items = fs.readdirSync(postsDirPath);

        const categories = items.filter(item => {
            const itemPath = path.join(postsDirPath, item);
            return fs.statSync(itemPath).isDirectory();
        }).map(category => {
            const categoryPath = path.join(postsDirPath, category, 'category.md');
            let frontmatter;
            let htmlContent = '';
            let postCount = 0;

            try {
                // Count posts in the category
                postCount = fs.readdirSync(path.join(postsDirPath, category)).filter(file => file.endsWith('.md')).length;

                // Attempt to read the category.md file
                const fileContent = fs.readFileSync(categoryPath, 'utf-8');
                const parsedContent = matter(fileContent);
                frontmatter = parsedContent.data;
                htmlContent = marked(parsedContent.content);
            } catch (err) { // eslint-disable-line
                // Use default frontmatter if category.md does not exist
                frontmatter = {
                    title: category, // Use category slug as title
                    summary: '',
                    length: postCount,
                    slug: category
                };
            }

            return {
                slug: category,
                frontmatter,
                htmlContent,
                postCount
            };
        });

        return {
            categories
        };
    } catch (err) {
        throw error(404, 'Unable to load categories: ' + err.message);
    }
}
