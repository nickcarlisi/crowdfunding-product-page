# Crowdfunding Product Page

A modern, interactive crowdfunding product page built with Next.js and React. This project allows users to back a product (Mastercraft Bamboo Monitor Riser) by selecting different pledge tiers, tracking progress, and managing bookmarks.

**Portfolio Project** - This is a frontend challenge project built to showcase modern React development practices and responsive design skills.

## 🔗 Live Demo

[View Live Site](https://crowdfunding-product-page-nine-lyart.vercel.app/) | [View on GitHub](https://github.com/nickcarlisi/crowdfunding-product-page)

## 🚀 Features

- **Pledge Selection**: Choose from multiple pledge tiers with different reward levels
- **Real-time Progress Tracking**:
  - Dynamic progress bar that updates based on total amount backed
  - Live counter showing total money raised
  - Total backers counter that increments with each pledge
- **Interactive Modals**:
  - Pledge selection modal with detailed reward information
  - Thank you confirmation modal after successful pledge
- **Bookmark Functionality**: Toggle bookmark status for the product
- **Inventory Management**: Tracks remaining stock for each reward tier
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile devices
- **Hover States**: Interactive elements with smooth hover effects

## 🛠️ Built With

- **[Next.js 13](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with hooks and state management
- **SCSS/SASS** - CSS preprocessor with CSS Modules for scoped styling
- **Next.js Image Optimization** - Automatic image optimization and lazy loading
- **Google Fonts** - Commissioner font family via Next.js font optimization

## 🎨 Design

This project was built to match a provided design specification, focusing on pixel-perfect implementation and responsive design across all device sizes.

[View Design Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/nickcarlisi/crowdfunding-product-page
cd crowdfunding-product-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
crowdfunding-product-page/
├── app/
│   ├── components/
│   │   ├── AboutCard/          # Project description and reward cards
│   │   ├── Card/                # Reusable card component
│   │   ├── MainCard/            # Hero card with bookmark functionality
│   │   ├── Modal/               # Pledge selection modal
│   │   ├── PledgeCard/          # Individual pledge option cards
│   │   ├── ProgressCard/        # Progress bar and statistics
│   │   ├── RewardCard/          # Reward tier display cards
│   │   └── ThankYouModal/       # Confirmation modal
│   ├── styles/                  # Global SCSS files
│   ├── layout.jsx               # Root layout with font configuration
│   └── page.jsx                 # Main page component with state management
├── public/
│   └── images/                  # Static images and icons
└── package.json
```

## 🎯 Key Components

### MainCard

Displays the product hero section with title, description, "Back this project" button, and bookmark toggle functionality.

### ProgressCard

Shows the current funding progress with:

- Total amount backed
- Number of backers
- Days remaining
- Visual progress bar

### AboutCard

Contains project description and displays available reward tiers using RewardCard components.

### Modal

Interactive modal for selecting and confirming pledges. Includes:

- All available pledge options
- Input fields for custom pledge amounts
- Stock availability indicators
- Pledge confirmation flow

### ThankYouModal

Confirmation modal displayed after a successful pledge.

## 🎨 Styling

The project uses SCSS modules for component-scoped styling:

- Each component has its own `.module.scss` file
- Global styles are defined in `app/styles/globals.scss`
- Mixins and resets are available in the `styles/` directory

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 User Interactions

1. **Backing a Project**: Click "Back this project" to open the pledge modal
2. **Selecting a Pledge**: Choose a reward tier or enter a custom amount
3. **Confirming a Pledge**: Enter pledge amount and confirm to update progress
4. **Bookmarking**: Click the bookmark icon to save the project
5. **Viewing Progress**: See real-time updates to funding progress and backer count

## 🚀 Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 💡 Key Learnings & Challenges

- Managing complex state across multiple components
- Implementing interactive modals with proper accessibility
- Building responsive layouts that work seamlessly across devices
- Creating smooth user interactions and hover states
- Working with Next.js App Router and client components

## 📄 License

This project is a portfolio piece and is available for viewing purposes.
