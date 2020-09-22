import { writable } from 'svelte/store';
import { Routes } from '../routes';

const getPath = (path: string): Routes => {
  if (path === Routes.About) {
    return Routes.About;
  }

  return Routes.Home;
}

window.onpopstate = () => {
  navigate(window.location.pathname as Routes);
};

export const navigate = (path: Routes) => {
  const newRoute = getPath(path);
  // TODO will navigate
  window.history.pushState(
    {}, 
    newRoute,
    `${window.location.origin}${newRoute}`
  );
  // navigated
  navigation.set(newRoute);
}

export const navigation = writable<Routes>(getPath(window.location.pathname));
