# Employee Directory

This project basically keeps the list of all the employees and has a search functionality using which we search any employee by its name . I have also added pagination in order to view all the pages available in the dataset

### Tailwind CSS - 
Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined utility classes to style your web application. It focuses on providing a low-level utility approach, allowing you to easily compose and customize your styles. With Tailwind CSS, you can rapidly build user interfaces by applying classes directly in your HTML markup, rather than writing custom CSS.

### Axios -
Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It provides a simple and intuitive API for performing asynchronous HTTP requests, including GET, POST, PUT, DELETE, and more. Axios supports Promise-based responses, allowing you to use async/await or promise chaining syntax for handling request and response data.

### API used - `https://reqres.in/api/users`

## Steps to run the code
- First you will clone the project in your local computer
- Run `npm install` to download all the dependencies
- Run `npm start` to start the project
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Responsive Breakpoints:
Tailwind CSS provides a set of predefined breakpoints that correspond to different screen sizes. You can use these breakpoints to define different styles for various screen sizes. By default, these breakpoints are:
- sm: Small screens (up to 640px)
- md: Medium screens (up to 768px)
- lg: Large screens (up to 1024px)
- xl: Extra-large screens (up to 1280px)
- 2xl: Extra-extra-large screens (up to 1536px)

### Responsive Utility Classes:
Tailwind CSS offers a wide range of responsive utility classes that you can apply to elements to control their appearance and behavior at different breakpoints.By using these responsive utility classes, you can easily adjust the styling of your elements based on the screen size. To make an element responsive, you can add responsive classes as prefixes to existing utility classes. For example:
- text-sm: Applies a smaller font size to the element on all screen sizes.
- md:text-lg: Applies a larger font size to the element on medium screens and larger.
- lg:w-1/2: Makes the element take up 50% of the width on large screens and larger.

## Screenshots to demonstrate the responsiveness of the website
![Screenshot 2023-06-23 174452](https://github.com/riyav5363/Employee-Directory/assets/136462279/1a776791-676e-4e4a-b99e-430527df402b)
![Screenshot 2023-06-23 174528](https://github.com/riyav5363/Employee-Directory/assets/136462279/e2ba4f63-8890-485f-8403-b6618654ef8e)
![Screenshot 2023-06-23 174659](https://github.com/riyav5363/Employee-Directory/assets/136462279/55287d02-309e-4ac5-9a06-0c8c87a2d85d)
![Screenshot 2023-06-23 174757](https://github.com/riyav5363/Employee-Directory/assets/136462279/b4b21cac-e8e7-4ac9-8e16-b573045efeaf)
![Screenshot 2023-06-23 174829](https://github.com/riyav5363/Employee-Directory/assets/136462279/0005bff2-3f8f-4cda-ac69-c38fcd41d74b)
![WhatsApp Image 2023-06-23 at 5 44 27 PM](https://github.com/riyav5363/Employee-Directory/assets/136462279/c7fa3787-e9ea-45f6-a3be-00acd3b21dd4) <!-- src = link#thumbnail -->
![WhatsApp Image 2023-06-23 at 5 42 23 PM (1)](https://github.com/riyav5363/Employee-Directory/assets/136462279/e8cb7131-85ff-4f77-9936-e7179925df5f) <!-- src = link#thumbnail -->
![WhatsApp Image 2023-06-23 at 5 42 23 PM](https://github.com/riyav5363/Employee-Directory/assets/136462279/f4660c1c-6d29-42a4-bd7d-9dc1fb780975) <!-- src = link#thumbnail -->

img[src*="#thumbnail"] {
   width:150px;
   height:100px;
}
