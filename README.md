# LynxLite - Fleet Management Dashboard Prototype

 **A comprehensive prototype I developed** showcasing a modern web-based fleet management system with real-time monitoring, analytics, and multi-role dashboard capabilities.

##  Project Overview

This is a fully functional frontend prototype I created to demonstrate advanced fleet management concepts, featuring multiple dashboard interfaces, interactive mapping, real-time analytics, and responsive design principles. The project showcases my skills in modern web development, UI/UX design, and complex dashboard architecture.

##  Prototype Features & Capabilities

###  What I Built

#### Multi-Role Dashboard Architecture
I designed and implemented **4+1 distinct dashboard interfaces** tailored for different user roles:
- **Admin**
- **Owner Dashboard** - Executive-level fleet overview with comprehensive KPIs
- **Dispatcher Dashboard** - Operational control center for route planning and coordination  
- **Driver Dashboard** - Driver-centric interface with personalized metrics and tasks
- **Accountant Dashboard** - Financial reporting hub with cost analysis tools

#### Advanced UI/UX Implementation
- ** Fully Responsive Design** - Seamless experience across all devices and screen sizes
- ** Dark/Light Mode Toggle** - Complete theming system with user preference persistence
- ** Modern CSS Architecture** - Custom CSS variables, Flexbox/Grid layouts, and component-based styling
- ** Accessibility Features** - WCAG 2.1 compliant design with keyboard navigation support

#### Interactive Mapping & Visualization
- ** Leaflet.js Integration** - Interactive maps with custom markers and real-time vehicle tracking
- ** Chart.js Analytics** - Dynamic data visualization with multiple chart types
- ** Geofencing System** - Visual boundary management with interactive controls
- ** Real-time Positioning** - Live vehicle location updates and status indicators

#### Smart User Experience Features
- ** Interactive Tutorial System** - Complete onboarding experience with guided tours
- ** Feedback Collection System** - Google Sheets integration for user input management
- ** Advanced Search & Filtering** - Global search functionality across all data modules
- ** Data Export Capabilities** - Multiple export formats for reporting and analysis

#### Technical Achievements
- ** Performance Optimized** - Efficient CSS/JS architecture with minimal load times
- ** Modular Code Structure** - Clean separation of concerns and reusable components
- ** Progressive Enhancement** - Core functionality works without JavaScript
- ** Security Conscious** - Client-side data protection and secure API integration patterns

##  Technologies I Used

**Core Technologies:**
- **HTML5** - Semantic markup with accessibility considerations
- **CSS3** - Advanced styling with Flexbox, Grid, and custom properties
- **JavaScript ES6+** - Modern JS features and clean code practices

**Frameworks & Libraries:**
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Leaflet.js** - Interactive mapping library for geospatial features
- **Chart.js** - Responsive charting library for data visualization
- **Font Awesome 6** - Professional icon library for enhanced UI

**Integration & Storage:**
- **Google Sheets API** - Real-time data integration via SheetDB
- **LocalStorage** - Client-side data persistence and offline capability

## Project Structure

```
LynxLite-main/
├── index.html                     # Main dashboard entry point
├── styles.css                     # Unified stylesheet with responsive design
├── feedback-storage.js            # Feedback system with Google Sheets integration
├── login.html                     # Authentication page
├── 
├── Dashboard Pages/
│   ├── owner-dashboard.html       # Fleet owner interface
│   ├── dispatcher-dashboard.html  # Dispatch operations
│   ├── driver-dashboard.html      # Driver-specific interface
│   └── accountant-dashboard.html  # Financial reporting
├── 
├── Management Pages/
│   ├── vehicles.html           # Vehicle management & tracking
│   ├── drivers.html            # Driver management
│   ├── devices.html            # Fleet device management
│   └── vehicle-alerts.html     # Alert management system
├── 
├── Activity & Reports/
│   ├── vehicle-activity.html   # Vehicle activity logs
│   ├── driver-activity.html    # Driver performance tracking
│   ├── active-alerts.html      # Current system alerts
│   └── closed-alerts.html      # Historical alert records
└── 
└── Backup Files/
    └── vehicles-backup.html    # Backup vehicle interface
```

## Exploring the Prototype

### Quick Start
1. **Clone/Download** this repository
2. **Open `index.html`** in any modern web browser
3. **Experience the full dashboard** - no server setup required!

### Key Prototype Demonstrations

#### Multi-Dashboard Navigation
- Start with the **main dashboard** for overview capabilities
- Navigate through **role-specific interfaces** using the sidebar
- Experience the **responsive design** by resizing your browser window

####  Interactive Tutorial
- Click the tutorial button to experience the **guided onboarding system** I built
- See how new users are **walked through each feature** systematically

####  Feedback Integration  
- Test the **feedback collection system** I implemented
- Data gets stored locally AND sent to **Google Sheets** automatically

####  Responsive Experience
- **Resize your browser** to see the adaptive layout in action
- Test on **mobile devices** to experience touch-optimized interactions
- Toggle **dark/light modes** to see the complete theming system

##  Usage

### Navigation
- **Sidebar Navigation**: Access all major modules from the collapsible sidebar
- **Role-based Views**: Switch between different dashboard perspectives
- **Search Functionality**: Global search across vehicles, drivers, and alerts
- **Responsive Menu**: Mobile-optimized navigation experience

### Key Workflows

#### Fleet Monitoring
1. Start from the main dashboard (`index.html`)
2. View real-time fleet metrics and KPIs
3. Access detailed vehicle information via the vehicles page
4. Monitor driver performance through leaderboards

#### Alert Management
1. Check active alerts for immediate attention
2. Review alert history in closed alerts
3. Set up alert preferences and thresholds
4. Export alert reports for analysis

#### Driver Management
1. View driver performance metrics
2. Access individual driver dashboards
3. Track driver activities and behaviors
4. Generate driver scorecards and reports

##  Configuration

### Feedback System Setup
The application includes a feedback collection system that integrates with Google Sheets:

1. **Google Sheets**: Set up a sheet with columns: `Name`, `Feedback`
2. **SheetDB Integration**: Update the API URL in `feedback-storage.js`
3. **Local Storage**: Feedback is stored locally as backup

### Styling Customization
- **CSS Variables**: Modify design tokens in `styles.css` (lines 4-29)
- **Responsive Breakpoints**: Adjust breakpoints for different screen sizes
- **Dark Mode**: Built-in dark mode support with automatic switching
- **Brand Colors**: Update color scheme via CSS custom properties


##  Mobile Responsiveness

The application is fully responsive with:
- **Adaptive Layout**: Flexible grid system that adjusts to screen size
- **Touch-Friendly UI**: Optimized for mobile interaction
- **Collapsible Navigation**: Off-canvas sidebar for mobile devices
- **Scalable Components**: All widgets adapt to different screen sizes

##  Deployment

### Static Hosting
Deploy to any static hosting service:
- **GitHub Pages**: Perfect for demo and development

##  Development

### File Organization
- **Modular HTML**: Each dashboard is a separate HTML file
- **Unified Styling**: Single CSS file with component-based architecture
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: WCAG 2.1 compliant design patterns

### Customization Points
- **Color Schemes**: Modify CSS custom properties
- **Component Layout**: Adjust grid systems and flexbox layouts  
- **Data Integration**: Connect to your fleet management APIs
- **Authentication**: Implement your preferred auth system

#

---

**LynxLite Prototype** - Demonstrating Advanced Fleet Management UI/UX Concepts
