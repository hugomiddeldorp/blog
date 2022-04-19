---
title: "Comments"
date: 2022-04-20T10:00:04+12:00
---

I've been programming since I was quite young. I've always been quite lazy, so it makes sense that I took interest in learning how to make a computer do work for me. Now that I'm writing code for others to see, it becomes important for me to write it in a way that's not only functional, but also readable.

Before, if I was writing a program for anything, I would try to get everything out as soon as possible. The result would be hacky solutions, poor design and terrible variable names. So if I ever had to go back and add another functionality to the program or go back to working on later on, I had to figure out what I had done all over again. (So much for being efficient!)

So what's the solution to my habit of poor code structure? Comments. If I can explain my thought process in words, not only will my code be more readable, my design will inevitably be better. As I've been going through the books HTDP2 and The C Programming Language, I've combined ideas from both books to form a simple design and commenting framework.

This is what it looks like:
1. Begin with a comment at the top stating the purpose of the program, how to use it and the author.
2. Variables should have a clear type and interpretation. For the most part, variables names should be self-evident, but sometimes for the sake of efficiency in typing or for clarification, a comment describing what the data represents can't hurt.
3. For every function, begin the comment by stating its purpose in one short statement. (If it doesn't fit in a concise statement, it might need to be split into more functions.)
4. Write how to interpret the type of inputs the function takes and what it returns.
5. You can give an example or two to illustrate (if need be).

The framework itself is quite comprehensive and can sometimes be a little too much. As I code more and more, I find that well named variables and functions can serve a lot of the same purpose as comments. The balance between what is self-evident and what needs to be explained is something I will become more attuned to as I get better.

The main thing I need to do going forward is not only think about the program doing its job, I also need to make sure the code itself is logical and readable.

