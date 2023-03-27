# Grandpa Games - Designed for C S 260

Grandparents like to play games, but they don't like to do anything on a computer more complex than web browsing. This project hopes to solve these two issues: a website where they can play games with family. Simply have a more technologically savvy family member set up a room and have them join. Multiple players in different geographic locations will able to play the same game with only a web browser. While only one game will be available initially, the website will be designed so that more games can be added over time.

![Start Page](https://user-images.githubusercontent.com/35751007/215210299-f8a44c61-6d55-4dfb-bb90-b0ac26fe0f87.PNG)
![Game Page](https://user-images.githubusercontent.com/35751007/215210103-5f9cd2c3-8579-4a32-8475-94cd59d660f1.PNG)
![Host Page](https://user-images.githubusercontent.com/35751007/215210208-8d61ed0b-e443-4cd8-acf3-71257aba6cc9.PNG)
![Join Page](https://user-images.githubusercontent.com/35751007/215210236-c4b2b3f6-ba11-4746-b30e-a3176d24024e.PNG)
![Rules Page](https://user-images.githubusercontent.com/35751007/215210269-d0cb36d1-1d9c-476d-b340-0d90e4cc3f4f.PNG)

Features
- Play common games over the internet
- Ability to host and join games
- Modify Rules
- Intital Support for 1 game: Farkle
- Ability to add more games


boppagames.click
18.116.207.14


Simon HTML Notes:

From an HTML standpoint, websites are really just a bunch of HTML files with links in between them. I knew this beforehand, but never really saw it firsthand. The addition of subdomains is an interesting concept. I imagine that this functionality is dependent on the server program that is hosting the actual website, but I am unsure.


Simon CSS Notes:

Flex elements, particularly parent divs, can control a lot about the size and position of elements. It can be useful to have similar class naming schemes when you need to apply a CSS declaration to multiple elements of distinct classes. This works becuase the "." before the class name doesn't require an exact match. Also, I tested naming classes after colors. This did not appear to cause any issues in selecting them meaning that classes do not appear to have restricted variable names.


Startup HTML and CSS Notes:

I've learned that many elements that are traditionally used to store only text can be used to store other things as well. I also learned how to expand selectors to cover multiple groups of elements with one rule.


Simon Javascript Notes:

Debugging JS while trying to deploy a website is extremely difficult. How to attach files to website and load them.

Simon Service Notes:

At least in terms of setting up a service to send and recieve info from the server, using express to do so and set up the requisite APIs is actually fairly easy. If my understanding is correct, this could likely be done without a service, but using a service likely improves security and overall interactivity. Simon only needs a Service for score tracking, everything else is run through the user's browser.


Simon DB Notes:

That took way more time than necessary. I learned that I need to/how to restart the service to update the environment variables. I also learned that, unless there is a different way of using environment variables on windows, I can't rely on them for testing in my dev environment. Other than that, pretty standard stuff. The express integration makes more sense now. Still not sure why you would need a database if the server has local storage. P.S. I also was able to confirm that the LocalStorage variable refers to the host's storage, not the client.

Simon Login Notes:
Learned how to make authtokens and apply them to cookies. The authtoken is created on user generation and is stored in the database, along with username and an encrypted password. User logins take the entered password, encrypt it, and compare it to the string in the database. When the user successfully logs in, their authtoken is stored on their system in the form of a cookie. This cookie is referenced every time the user makes an authenticated request. The cookie has tags which let the browser know its behavior. When the user logs out, the cookie is cleared. All this is mediated with the express handlers. Also, code 204 indicates that a request has succeeded but the browser doesn't need to update.
