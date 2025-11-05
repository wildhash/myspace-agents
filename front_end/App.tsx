import React, { useState, useEffect } from 'react';
import AppShell from './src/components/layout/AppShell';
import HomePage from './src/pages/HomePage';
import NotFoundPage from './src/pages/NotFoundPage';
import ProfileDashboardPage from './src/pages/ProfileDashboardPage';
import EditProfilePage from './src/pages/EditProfilePage';
import SettingsPage from './src/pages/SettingsPage';
import EditLinksPage from './src/pages/EditLinksPage';
import PublicProfilePage from './src/pages/PublicProfilePage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        // Check if it's a hash link for our simple router
        if (href && href.startsWith('#')) {
          e.preventDefault();
          // Manually update the hash. This will trigger the 'hashchange' event.
          if (window.location.hash !== href) {
            window.location.hash = href;
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    
    // Set initial route
    if (window.location.hash === '') {
      window.location.hash = '#';
    }
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/settings')) {
      return <SettingsPage />;
    }
    if (route.startsWith('#/profile/edit')) {
      return <EditProfilePage />;
    }
    if (route.startsWith('#/profile/links')) {
      return <EditLinksPage />;
    }
    if (route.startsWith('#/view-profile')) {
      return <PublicProfilePage />;
    }
    if (route.startsWith('#/profile')) {
      return <ProfileDashboardPage />;
    }
    
    // Only render the homepage if there is no hash or it's just '#'
    if (route === '' || route === '#') {
      return <HomePage />;
    }
    // For any other hash, show the NotFound page
    return <NotFoundPage />;
  };

  return (
    <AppShell>
      {renderPage()}
    </AppShell>
  );
};

export default App;
