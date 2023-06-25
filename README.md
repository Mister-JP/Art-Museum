# 🏛️ The Metropolitan Museum Project 🎨
Live demo: [https://art-museum-sand.vercel.app/](https://art-museum-sand.vercel.app/)
![Preview gif 1](./public/Screenshots/themetgif1.gif)
![Preview gif 2](./public/Screenshots/themetgif2.gif)


This project is a dynamic, artistic application, representing the massive catalogue of the Metropolitan Museum. The application uses the Next.js framework and interacts with the public Metropolitan Museum API to fetch different categories and objects from the museum's collection. This includes a variety of artwork and artifacts, represented in an aesthetically pleasing manner.

## 🌟 Features

- ✨ Custom cursor implementation
- 🖇️ Grid-based component design for optimal visual layout
- 🃏 HeroCard component to feature main artifacts
- 🌐 Dynamic image integration
- 📁 Different categories fetched dynamically from the museum's API
- 📄 Detail page for each department showing the department's objects

## 🚀 Installation

Before starting, make sure you have Node.js and npm installed in your system.

Clone the repository to your local machine:

```bash
git clone <repository_link>
```

Navigate to the project directory:

```bash
cd <project_directory>
```

Install all the dependencies:

```bash
npm install
```

## 🏃‍♀️ Running the Project

To start the project, run:

```bash
npm run dev
```

The project will be live at `http://localhost:3000`

## 📚 Project Structure

- `Home()`: The main component, incorporating all other components like `GridComponent`, `CustomCursor`, `HeroCard`, `DiamondImages`, and `Categories`. It serves as the main page of the project.
- `GridComponent`: An aesthetic component representing a grid layout for optimal visual representation.
- `CustomCursor`: A component for a custom cursor implementation.
- `HeroCard`: A component for featuring main artifacts.
- `DiamondImages`: A component that renders diamond-shaped images.
- `Categories`: Fetches and displays categories from the Metropolitan Museum API. Each category links to its corresponding department page.
- `DepartmentPage`: Fetches and displays data for individual departments. The department page shows the objects belonging to the specific department.

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 📞 Contact

Please feel free to reach out for any kind of queries, suggestions or discussions.

## 👏 Acknowledgements

- [The Metropolitan Museum of Art Collection API](https://metmuseum.github.io/)
