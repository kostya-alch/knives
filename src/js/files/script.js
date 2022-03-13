// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// логика открытия меню в шапке

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
   menuBlocks.forEach((menuBlock) => {
      const menuBlockItems = menuBlock.querySelectorAll(
         '.sub-menu-catalog__category'
      ).length;
      menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
   });
}

const documentActions = (event) => {
   const targetElement = event.target;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent
         ? targetElement.dataset.parent
         : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');

         if (activeLink && activeLink !== targetElement) {
            activeLink.classList.remove('._sub-menu-active');
            activeBlock.classList.remove('._sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }
         document.documentElement.classList.toggle('sub-menu-open');
         targetElement.classList.toggle('_sub-menu-active');
         subMenu.classList.toggle('_sub-menu-open');
      }
      event.preventDefault();
   }
   if (targetElement.closest('.menu-top-header__link_catalog')) {
      document.documentElement.classList.add('catalog-open');
      event.preventDefault();
   }
   if (targetElement.closest('.menu-catalog__back')) {
      document.documentElement.classList.remove('catalog-open');

      document.querySelector('._sub-menu-active')
         ? document.classList.remove('_sub-menu-active')
         : null;
      document.querySelector('._sub-menu-open')
         ? document.classList.remove('_sub-menu-open')
         : null;
      event.preventDefault();
   }
   if (targetElement.closest('.sub-menu-catalog__back')) {
      document.documentElement.classList.remove('.sub-menu-open');
      document.documentElement.classList.remove('catalog-open');

      document.querySelector('._sub-menu-active')
         ? document.classList.remove('_sub-menu-active')
         : null;
      document.querySelector('._sub-menu-open')
         ? document.classList.remove('_sub-menu-open')
         : null;
      event.preventDefault();
   }
};

document.addEventListener('click', documentActions);
