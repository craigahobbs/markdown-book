# Getting Started

Markdown Book is a pure-javascript application that displays books of
[Markdown](https://commonmark.org/help/) files. Markdown is a human-friendly text file format that
allows for "pretty" rendering of text content. You can include bold text, italic text, lists,
images, links, and more in your pages.


## Hosting a Markdown Book on GitHub Pages

GitHub Pages provides an easy way to host a markdown book. Here are the steps involved:

1. Create a [GitHub](https://github.com/) account. Be sure to add a README file.

2. From your GitHub account, create a new, public repository.

3. From your new repository's settings page, enable GitHub Pages for your "master" branch. Make note
   of the URL of your new site.

4. Next, create the **markdown book file**. The markdown book file is in [JSON](https://json.org)
   format. From your new repository's page, select "Add file > Create new file". Set the file name
   to "*YourBookName*.json" (replace "YourBookName" with something appropriate for your book). Add
   the following file contents and click "Commit new file" to add the file to your repository.

       {
           "title": "Your Book Name",
           "titleURL": "YourBookName.md",
           "categories": [
               {
                   "title": "Introduction",
                   "files": [
                       {
                           "title": "My Page Title",
                           "url": "MyPage.md"
                       }
                   ]
               }
           ]
       }

5. Next, create the **title markdown file**. From your new repository's page, select "Add file >
   Create new file". Set the file name to "*YourBookName*.md" (replace "YourBookName" with something
   appropriate for your book). Add the following file contents and click "Commit new file" to add
   the file to your repository. Be sure to replace "YourURL" with your GitHub Pages site's URL from
   earlier.

       # Your Book Name

       Welcome to my book! Click [here](<YourURL>#id=MyPage) to get started!

6. Now, add your first markdown page file. From your new repository's page, select "Add file >
   Create new file". Set the file name to "*MyPage*.md" (replace "MyPage" with something appropriate
   for your book). Add the following file contents and click "Commit new file" to add the file to
   your repository.

       # My Page

       This is my **page**!

7. Finally, add a link to your markdown book to your GitHub repository's README file. The link is of
   the following form. Be sure to replace "YourURL" and "YourBookName".

       https://craigahobbs.github.io/markdown-book/#url=YourURL/YourBookName.json

Your book is now live. Try navigating to your book from your README file!

For more Markdown Book configuration options like setting header or title page colors, see the
[Markdown Book JSON File Format](https://craigahobbs.github.io/chisel/doc/#name=MarkdownBook&title=The%20Markdown%20Book%20Model&types=https%3A%2F%2Fcraigahobbs.github.io%2Fmarkdown-book%2FmarkdownBookTypes.json).
