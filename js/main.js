/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/_components.js":
/*!**********************************!*\
  !*** ./source/js/_components.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select.js */ "./source/js/components/select.js");
/* harmony import */ var _components_spollers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/spollers.js */ "./source/js/components/spollers.js");
/* harmony import */ var _components_spollers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_spollers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dropdown.js */ "./source/js/components/dropdown.js");
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modals.js */ "./source/js/components/modals.js");
/* harmony import */ var _components_sticky_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sticky.js */ "./source/js/components/sticky.js");
/* harmony import */ var _components_sticky_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_sticky_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion.js */ "./source/js/components/accordion.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_replaceEl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/replaceEl.js */ "./source/js/components/replaceEl.js");
/* harmony import */ var _components_replaceEl_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_replaceEl_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_switcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/switcher.js */ "./source/js/components/switcher.js");
/* harmony import */ var _components_switcher_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_switcher_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_check_all_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/check-all.js */ "./source/js/components/check-all.js");
/* harmony import */ var _components_check_all_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_check_all_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_autorefresh_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/autorefresh.js */ "./source/js/components/autorefresh.js");
/* harmony import */ var _components_autorefresh_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_autorefresh_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_uncover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/uncover.js */ "./source/js/components/uncover.js");
/* harmony import */ var _components_uncover_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_uncover_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_pagination_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagination.js */ "./source/js/components/pagination.js");
// import './components/sliders.js';
 // import './components/burger.js';


 // import './components/tabs.js';
//import './components/modals.js';




 // import './components/poper.js';







function initUI() {
  _components_pagination_js__WEBPACK_IMPORTED_MODULE_11__.pagination();
  _components_modals_js__WEBPACK_IMPORTED_MODULE_3__.modal();
  _components_select_js__WEBPACK_IMPORTED_MODULE_0__.select();
}

initUI();

/***/ }),

/***/ "./source/js/_vendor.js":
/*!******************************!*\
  !*** ./source/js/_vendor.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./source/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/picturefill.js */ "./source/js/vendor/picturefill.js");
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./source/js/components/accordion.js":
/*!*******************************************!*\
  !*** ./source/js/components/accordion.js ***!
  \*******************************************/
/***/ (function() {

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');

if (spollersArray.length > 0) {
  // Получение обычных слойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  }); // Инициализация обычных слойлеров

  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  } // Инициализация


  function initSpollers(spollersArray) {
    let matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  } // Работа с контентом


  function initSpollerBody(spollersBlock) {
    let hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');

          if (!spollerTitle.classList.contains('_active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setSpollerAction(e) {
    const el = e.target;

    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollersBody(spollersBlock);
        }

        spollerTitle.classList.toggle('_active');

        _slideToggle(spollerTitle.nextElementSibling, 500);
      }

      e.preventDefault();
    }
  }

  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');

    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');

      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
} //SlideToggle


let _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

let _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (target.hidden) {
      target.hidden = false;
    }

    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

let _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/***/ }),

/***/ "./source/js/components/autorefresh.js":
/*!*********************************************!*\
  !*** ./source/js/components/autorefresh.js ***!
  \*********************************************/
/***/ (function() {

const refreshBlocks = document.querySelectorAll('.form-modal__autorefresh');

if (refreshBlocks.length > 0) {
  for (let index = 0; index < refreshBlocks.length; index++) {
    const refreshBlock = refreshBlocks[index];
    const refreshBtn = refreshBlock.querySelector('.filter__checkbox-name');
    refreshBtn.addEventListener('click', function (e) {
      const refreshForm = refreshBtn.closest('.form-modal__info-block');
      console.log(e.target);
      refreshForm.classList.toggle('active');
    });
  }
}

/***/ }),

/***/ "./source/js/components/check-all.js":
/*!*******************************************!*\
  !*** ./source/js/components/check-all.js ***!
  \*******************************************/
/***/ (function() {

const checkAllBtns = document.querySelectorAll('.check-all');
const warehouseTables = document.querySelectorAll('.table__warehouse');

if (checkAllBtns.length > 0) {
  for (let index = 0; index < checkAllBtns.length; index++) {
    const checkAllBtn = checkAllBtns[index];
    checkAllBtn.addEventListener('click', function () {
      const checkboxes = warehouseTables[index].querySelectorAll('.filter__checkbox-input');
      checkboxes.forEach(checkbox => {
        if (!checkbox.nextElementSibling.classList.contains('check-all')) {
          if (!checkAllBtn.previousElementSibling.checked) {
            checkbox.checked = true;
          } else {
            checkbox.checked = false;
          }
        }
      });
    });
  }
}

/***/ }),

/***/ "./source/js/components/dropdown.js":
/*!******************************************!*\
  !*** ./source/js/components/dropdown.js ***!
  \******************************************/
/***/ (function() {

// dropdown
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerHTML = this.innerHTML;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      this.classList.remove('dropdown__button--active');
    });
  });
  document.addEventListener('click', function (e) {
    if (!dropDownBtn.contains(e.target)) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

/***/ }),

/***/ "./source/js/components/modals.js":
/*!****************************************!*\
  !*** ./source/js/components/modals.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": function() { return /* binding */ modal; }
/* harmony export */ });
// modals
class Modal {
  constructor(options) {
    let defaultOptions = {
      onOpen: () => {},
      onClose: () => {}
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-path]');

        if (clickedElement) {
          if (this.isOpen) {
            this.close();
          }

          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.modal-close')) {
          this.close();
          return;
        }
      }.bind(this));
      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }
      }.bind(this));
      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('.modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;
    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();
    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);
    setTimeout(() => {
      this.modalContainer.classList.add('animate-open');
      this.options.onOpen(this);
      this.isOpen = true;
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');
      this.enableScroll();
      this.options.onClose(this);
      this.isOpen = false;
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);

    if (this.isOpen) {
      focusable[0].focus();
    } else {}
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }

}

function modal() {
  const modal = new Modal({
    onOpen: modal => {},
    onClose: () => {}
  });
}

/***/ }),

/***/ "./source/js/components/pagination.js":
/*!********************************************!*\
  !*** ./source/js/components/pagination.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagination": function() { return /* binding */ pagination; }
/* harmony export */ });
function pagination() {
  const paginationBtns = document.querySelectorAll('.pagination__list-link');

  if (paginationBtns.length > 0) {
    paginationBtns.forEach(paginationBtn => {
      paginationBtn.addEventListener('click', e => {
        e.preventDefault();
      });
    });
  }
}

/***/ }),

/***/ "./source/js/components/replaceEl.js":
/*!*******************************************!*\
  !*** ./source/js/components/replaceEl.js ***!
  \*******************************************/
/***/ (function() {

let sortingBtn = document.querySelector('.sorting');
let formParentBtn = document.querySelector('.form__btns');
let mobileSiblingstBtn = document.querySelector('.form__info-block--sorting');
let breakpointSorting = 768;

const replaceMobileMenu = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth <= breakpointSorting) {
    parentMobile.insertAdjacentElement('afterend', element);
  }

  ;

  if (containerWidth > breakpointSorting) {
    parentDesktop.insertAdjacentElement('afterbegin', element);
  }
};

window.addEventListener('resize', () => {
  replaceMobileMenu(sortingBtn, formParentBtn, mobileSiblingstBtn);
});
window.addEventListener('DOMContentLoaded', () => {
  replaceMobileMenu(sortingBtn, formParentBtn, mobileSiblingstBtn);
});

/***/ }),

/***/ "./source/js/components/select.js":
/*!****************************************!*\
  !*** ./source/js/components/select.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "select": function() { return /* binding */ select; }
/* harmony export */ });
// Select
function select() {
  let selects = document.querySelectorAll('.select');

  let selectScript = function (select) {
    select.forEach(item => {
      const selectCurrent = item.querySelector(".select__current");
      item.addEventListener("click", event => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        if (el === "choosen" && selectCurrent.innerHTML !== text) {
          selectCurrent.innerText = text;
          const inputHidden = selectCurrent.previousElementSibling;

          if (inputHidden) {
            inputHidden.value = text;
          }
        }

        item.classList.toggle("is-active");
      });
      document.addEventListener("click", function (event) {
        if (!item.contains(event.target)) {
          item.classList.remove("is-active");
        }
      });
    });
  };

  selectScript(selects);
  window.addEventListener("DOMContentLoaded", () => {});
  window.addEventListener("resize", () => {});
}

/***/ }),

/***/ "./source/js/components/spollers.js":
/*!******************************************!*\
  !*** ./source/js/components/spollers.js ***!
  \******************************************/
/***/ (function() {

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');

if (spollersArray.length > 0) {
  // Получение обычных слойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  }); // Инициализация обычных слойлеров

  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  } // Инициализация


  function initSpollers(spollersArray) {
    let matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  } // Работа с контентом


  function initSpollerBody(spollersBlock) {
    let hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');

          if (!spollerTitle.classList.contains('_active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setSpollerAction(e) {
    const el = e.target;

    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollersBody(spollersBlock);
        }

        spollerTitle.classList.toggle('_active');

        _slideToggle(spollerTitle.nextElementSibling, 500);
      }

      e.preventDefault();
    }
  }

  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');

    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');

      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
} //SlideToggle


let _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

let _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (target.hidden) {
      target.hidden = false;
    }

    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

let _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/***/ }),

/***/ "./source/js/components/sticky.js":
/*!****************************************!*\
  !*** ./source/js/components/sticky.js ***!
  \****************************************/
/***/ (function() {

const stickyBlocks = [...document.querySelectorAll('[data-sticky]')];
const activeClass = 'sticky';
const stickyOffset = 350;

const stickyElFunction = (block, activeClass, stickyOffset) => {
  window.onscroll = function () {
    block.map(item => {
      if (window.pageYOffset > stickyOffset) {
        item.classList.add(activeClass);
      } else {
        item.classList.remove(activeClass);
      }
    });
  };
};

stickyElFunction(stickyBlocks, activeClass, stickyOffset);

/***/ }),

/***/ "./source/js/components/switcher.js":
/*!******************************************!*\
  !*** ./source/js/components/switcher.js ***!
  \******************************************/
/***/ (function() {

const onSwitchers = document.querySelectorAll(".table__product-switcher.on");
const offSwitchers = document.querySelectorAll(".table__product-switcher.off");
const extraEl = document.querySelectorAll('.table__resources-extra .table__product-item');

if (onSwitchers.length > 0) {
  for (let index = 0; index < onSwitchers.length; index++) {
    const onSwitcher = onSwitchers[index];
    const offSwitcher = offSwitchers[index];
    onSwitcher.addEventListener('click', function () {
      const parentEl = onSwitcher.closest('.table__product-item');
      parentEl.classList.toggle('available');
      parentEl.classList.toggle('unavailable');

      if (extraEl.length > 0) {
        extraEl[index + 1].classList.toggle('available');
        extraEl[index + 1].classList.toggle('unavailable');
      }
    });
    offSwitcher.addEventListener('click', function () {
      const parentEl = offSwitcher.closest('.table__product-item');
      parentEl.classList.toggle('available');
      parentEl.classList.toggle('unavailable');

      if (extraEl.length > 0) {
        extraEl[index + 1].classList.toggle('available');
        extraEl[index + 1].classList.toggle('unavailable');
      }
    });
  }
}

const singleSwitchers = document.querySelectorAll(".table__product-switcher-single");

if (singleSwitchers.length > 0) {
  for (let index = 0; index < singleSwitchers.length; index++) {
    const singleSwitcher = singleSwitchers[index];
    singleSwitcher.addEventListener('click', function () {
      const parentEl = singleSwitcher.closest('.table__product-status');
      parentEl.classList.toggle('available');
      parentEl.classList.toggle('unavailable');
    });
  }
}

const showSearchBtns = document.querySelectorAll('.special-table__search-show');
const closeSearchBtns = document.querySelectorAll('.special-table__search-close');

if (showSearchBtns.length > 0) {
  for (let index = 0; index < showSearchBtns.length; index++) {
    const showSearchBtn = showSearchBtns[index];
    showSearchBtn.addEventListener('click', () => {
      showSearchBtn.nextElementSibling.classList.toggle('active');
      showSearchBtn.classList.toggle('active');
    });
  }
}

if (closeSearchBtns.length > 0) {
  for (let index = 0; index < closeSearchBtns.length; index++) {
    const closeSearchBtn = closeSearchBtns[index];
    closeSearchBtn.addEventListener('click', () => {
      const parentEl = closeSearchBtn.closest('.special-table__search');
      parentEl.classList.toggle('active');
      parentEl.previousElementSibling.classList.toggle('active');
    });
  }
}

const filterAutoBtn = document.querySelector('.filter__info-change .filter__checkbox-input');

if (filterAutoBtn) {
  filterAutoBtn.addEventListener('click', () => {
    if (filterAutoBtn.checked == true) {
      filterAutoBtn.closest('.filter__info-change').classList.add('active');
    } else {
      filterAutoBtn.closest('.filter__info-change').classList.remove('active');
    }
  });
}

/***/ }),

/***/ "./source/js/components/uncover.js":
/*!*****************************************!*\
  !*** ./source/js/components/uncover.js ***!
  \*****************************************/
/***/ (function() {

const coverBtns = document.querySelectorAll('.cover');
const uncoverBtns = document.querySelectorAll('.uncover');
const coverSecondBtns = document.querySelectorAll('.cover-second');
const uncoverSecondBtns = document.querySelectorAll('.uncover-second');
const warehouses = document.querySelectorAll('.table__warehouse');
let value = 0;

if (coverBtns.length > 0) {
  for (let index = 0; index < coverBtns.length; index++) {
    const coverBtn = coverBtns[index];
    coverBtn.addEventListener('click', function () {
      const parentItem = coverBtn.closest('.table__product-item');
      value = index;
      console.log(coverBtns.length);

      if (parentItem.classList.contains('uncovered')) {
        parentItem.classList.remove('uncovered');
        const sublist = parentItem.nextElementSibling;

        if (sublist.classList.contains('visible')) {
          sublist.classList.remove('visible');
          sublist.classList.add('hidden');

          if (warehouses.length > 0) {
            for (let index = 0; index < warehouses.length; index++) {
              const warehouse = warehouses[index];
              const list = warehouse.querySelectorAll('.table__warehouse-sublist')[value];

              if (!list.classList.contains('hidden')) {
                list.classList.add('hidden');
              }
            }
          }
        }
      }
    });
  }
}

if (coverSecondBtns.length > 0) {
  for (let index = 0; index < coverSecondBtns.length; index++) {
    const coverSecondBtn = coverSecondBtns[index];
    coverSecondBtn.addEventListener('click', function () {
      const parentItem = coverSecondBtn.closest('.table__product-item');
      value = index;

      if (parentItem.classList.contains('uncovered')) {
        parentItem.classList.remove('uncovered');
        const sublist = parentItem.nextElementSibling;

        if (sublist.classList.contains('visible')) {
          sublist.classList.remove('visible');
          sublist.classList.add('hidden');

          if (warehouses.length > 0) {
            for (let index = 0; index < warehouses.length; index++) {
              const warehouse = warehouses[index];
              const list = warehouse.querySelectorAll('.table__warehouse-sublist-second')[value];

              if (!list.classList.contains('hidden')) {
                list.classList.add('hidden');
              }
            }
          }
        }
      }
    });
  }
}

if (uncoverBtns.length > 0) {
  for (let index = 0; index < uncoverBtns.length; index++) {
    const uncoverBtn = uncoverBtns[index];
    uncoverBtn.addEventListener('click', function () {
      const parentItem = uncoverBtn.closest('.table__product-item');
      value = index;

      if (!parentItem.classList.contains('uncovered')) {
        parentItem.classList.add('uncovered');
        const sublist = parentItem.nextElementSibling;

        if (sublist.classList.contains('hidden')) {
          sublist.classList.remove('hidden');
          sublist.classList.add('visible');

          if (warehouses.length > 0) {
            for (let index = 0; index < warehouses.length; index++) {
              const warehouse = warehouses[index];
              const list = warehouse.querySelectorAll('.table__warehouse-sublist')[value];

              if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
              }
            }
          }
        }
      }
    });
  }
}

if (uncoverSecondBtns.length > 0) {
  for (let index = 0; index < uncoverSecondBtns.length; index++) {
    const uncoverSecondBtn = uncoverSecondBtns[index];
    uncoverSecondBtn.addEventListener('click', function () {
      const parentItem = uncoverSecondBtn.closest('.table__product-item');
      value = index;

      if (!parentItem.classList.contains('uncovered')) {
        parentItem.classList.add('uncovered');
        const sublist = parentItem.nextElementSibling;

        if (sublist.classList.contains('hidden')) {
          sublist.classList.remove('hidden');
          sublist.classList.add('visible');

          if (warehouses.length > 0) {
            for (let index = 0; index < warehouses.length; index++) {
              const warehouse = warehouses[index];
              const list = warehouse.querySelectorAll('.table__warehouse-sublist-second')[value];

              if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
              }
            }
          }
        }
      }
    });
  }
}

const showAll = document.querySelector('.btn-show-all');

if (showAll) {
  const warehouseLists = document.querySelectorAll('.table__warehouse-sublist');
  const warehouseListsSecond = document.querySelectorAll('.table__warehouse-sublist-second');
  const productLists = document.querySelectorAll('.table__product-sublist');
  showAll.classList.add('modal-close');
  showAll.addEventListener('click', () => {
    warehouseLists.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        el.classList.add('visible');
      }
    });
    warehouseListsSecond.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        el.classList.add('visible');
      }
    });
    productLists.forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        el.classList.add('visible');
        el.previousElementSibling.classList.add('uncovered');
      }
    });
  });
}

/***/ }),

/***/ "./source/js/vendor/focus-visible.js":
/*!*******************************************!*\
  !*** ./source/js/vendor/focus-visible.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./source/js/vendor/picturefill.js":
/*!*****************************************!*\
  !*** ./source/js/vendor/picturefill.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) {
  var t,
      s,
      r,
      i,
      n,
      c,
      a,
      u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) {
    var t,
        r,
        i = e.parentNode;
    "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
      i.removeChild(t);
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = r;
    }));
  }, i = function () {
    var e,
        t = document.querySelectorAll("picture > img, img[srcset][sizes]");

    for (e = 0; e < t.length; e++) r(t[e]);
  }, n = function () {
    clearTimeout(t), t = setTimeout(i, 99);
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n);
  }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n));
}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function (e, t, s) {
  "use strict";

  var r, i, n;
  t.createElement("picture");

  var c = {},
      a = !1,
      u = function () {},
      o = t.createElement("img"),
      l = o.getAttribute,
      f = o.setAttribute,
      d = o.removeAttribute,
      p = t.documentElement,
      A = {},
      m = {
    algorithm: ""
  },
      h = navigator.userAgent,
      g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      v = "currentSrc",
      w = /\s+\+?\d+(e\d+)?w/,
      S = /(\([^)]+\))?\s*(.+)/,
      x = e.picturefillCFG,
      y = "font-size:100%!important;",
      E = !0,
      z = {},
      b = {},
      T = e.devicePixelRatio,
      C = {
    px: 1,
    in: 96
  },
      R = t.createElement("a"),
      L = !1,
      M = /^[ \t\n\r\u000c]+/,
      P = /^[, \t\n\r\u000c]+/,
      D = /^[^ \t\n\r\u000c]+/,
      B = /[,]+$/,
      I = /^\d+$/,
      U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      $ = function (e, t, s, r) {
    e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
  },
      k = function (e) {
    var t = {};
    return function (s) {
      return s in t || (t[s] = e(s)), t[s];
    };
  };

  function W(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
  }

  var Q,
      G,
      H,
      F,
      N,
      O,
      q,
      j,
      V,
      _,
      K,
      J,
      X,
      Y,
      Z,
      ee,
      te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k(function (e) {
    return "return " + function () {
      for (var e = arguments, t = 0, s = e[0]; (++t in e);) s = s.replace(e[t], e[++t]);

      return s;
    }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
  }), function (e, t) {
    var s;
    if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]];else try {
      z[e] = new Function("e", G(e))(C);
    } catch (e) {}
    return z[e];
  }),
      se = function (e, t) {
    return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
  },
      re = function (e) {
    if (a) {
      var s,
          r,
          i,
          n = e || {};

      if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) {
        for (c.setupRun(n), L = !0, r = 0; r < i; r++) c.fillImg(s[r], n);

        c.teardownRun(n);
      }
    }
  };

  function ie(e, t) {
    return e.res - t.res;
  }

  function ne(e, t) {
    var s, r, i;
    if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++) if (e === c.makeUrl(i[s].url)) {
      r = i[s];
      break;
    }
    return r;
  }

  e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () {
    2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re);
  }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k(function (e) {
    return R.href = e, R.href;
  }), c.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : [];
  }, c.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
      return !e || matchMedia(e).matches;
    } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
  }, c.mMQ = function (e) {
    return !e || te(e);
  }, c.calcLength = function (e) {
    var t = te(e, !0) || !1;
    return t < 0 && (t = !1), t;
  }, c.supportsType = function (e) {
    return !e || A[e];
  }, c.parseSize = k(function (e) {
    var t = (e || "").match(S);
    return {
      media: t && t[1],
      length: t && t[2]
    };
  }), c.parseSet = function (e) {
    return e.cands || (e.cands = function (e, t) {
      function s(t) {
        var s,
            r = t.exec(e.substring(o));
        if (r) return s = r[0], o += s.length, s;
      }

      var r,
          i,
          n,
          c,
          a,
          u = e.length,
          o = 0,
          l = [];

      function f() {
        var e,
            s,
            n,
            c,
            a,
            u,
            o,
            f,
            d,
            p = !1,
            A = {};

        for (c = 0; c < i.length; c++) u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0;

        p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A));
      }

      function d() {
        for (s(M), n = "", c = "in descriptor";;) {
          if (a = e.charAt(o), "in descriptor" === c) {
            if (W(a)) n && (i.push(n), n = "", c = "after descriptor");else {
              if ("," === a) return o += 1, n && i.push(n), void f();
              if ("(" === a) n += a, c = "in parens";else {
                if ("" === a) return n && i.push(n), void f();
                n += a;
              }
            }
          } else if ("in parens" === c) {
            if (")" === a) n += a, c = "in descriptor";else {
              if ("" === a) return i.push(n), void f();
              n += a;
            }
          } else if ("after descriptor" === c) if (W(a)) ;else {
            if ("" === a) return void f();
            c = "in descriptor", o -= 1;
          }
          o += 1;
        }
      }

      for (;;) {
        if (s(P), o >= u) return l;
        r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d();
      }
    }(e.srcset, e)), e.cands;
  }, c.getEmValue = function () {
    var e;

    if (!r && (e = t.body)) {
      var s = t.createElement("div"),
          i = p.style.cssText,
          n = e.style.cssText;
      s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n;
    }

    return r || 16;
  }, c.calcListLength = function (e) {
    if (!(e in b) || m.uT) {
      var t = c.calcLength(function (e) {
        var t,
            s,
            r,
            i,
            n,
            a,
            u,
            o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        for (r = (s = function (e) {
          var t,
              s = "",
              r = [],
              i = [],
              n = 0,
              c = 0,
              a = !1;

          function u() {
            s && (r.push(s), s = "");
          }

          function o() {
            r[0] && (i.push(r), r = []);
          }

          for (;;) {
            if ("" === (t = e.charAt(c))) return u(), o(), i;

            if (a) {
              if ("*" === t && "/" === e[c + 1]) {
                a = !1, c += 2, u();
                continue;
              }

              c += 1;
            } else {
              if (W(t)) {
                if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) {
                  c += 1;
                  continue;
                }

                if (0 === n) {
                  u(), c += 1;
                  continue;
                }

                t = " ";
              } else if ("(" === t) n += 1;else if (")" === t) n -= 1;else {
                if ("," === t) {
                  u(), o(), c += 1;
                  continue;
                }

                if ("/" === t && "*" === e.charAt(c + 1)) {
                  a = !0, c += 2;
                  continue;
                }
              }

              s += t, c += 1;
            }
          }
        }(e)).length, t = 0; t < r; t++) if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) {
          if (a = n, i.pop(), 0 === i.length) return a;
          if (i = i.join(" "), c.matchesMedia(i)) return a;
        }

        return "100vw";
      }(e));
      b[e] = t || C.width;
    }

    return b[e];
  }, c.setRes = function (e) {
    var t;
    if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++) se(t[s], e.sizes);
    return t;
  }, c.setRes.res = se, c.applySetCandidate = function (e, t) {
    if (e.length) {
      var s,
          r,
          i,
          n,
          a,
          u,
          o,
          l,
          f,
          d,
          p,
          A,
          h,
          w,
          S,
          x,
          y = t[c.ns],
          E = c.DPR;
      if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) {
        var r;
        return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r;
      }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++) if ((s = e[r]).res >= E) {
        a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s;
        break;
      }
      a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t));
    }
  }, c.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s));
  }, c.getSet = function (e) {
    var t,
        s,
        r,
        i = !1,
        n = e[c.ns].sets;

    for (t = 0; t < n.length && !i; t++) if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) {
      "pending" === r && (s = r), i = s;
      break;
    }

    return i;
  }, c.parseSets = function (e, t, s) {
    var r,
        n,
        a,
        u,
        o = t && "PICTURE" === t.nodeName.toUpperCase(),
        p = e[c.ns];
    (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) {
      var s,
          r,
          i,
          n,
          a = e.getElementsByTagName("source");

      for (s = 0, r = a.length; s < r; s++) (i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      });
    }(t, p.sets)), p.srcset ? (n = {
      srcset: p.srcset,
      sizes: l.call(e, "sizes")
    }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({
      url: p.src,
      d: 1,
      set: n
    }))) : p.src && p.sets.push({
      srcset: p.src,
      sizes: null
    }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0;
  }, c.fillImg = function (e, t) {
    var s,
        r = t.reselect || t.reevaluate;
    e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) {
      var t,
          s = c.getSet(e),
          r = !1;
      "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r;
    }(e));
  }, c.setupRun = function () {
    L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em);
  }, c.supPicture ? (re = u, c.fillImg = u) : (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () {
    var e = t.readyState || "";
    Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z));
  }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e, "resize", (j = function () {
    E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs();
  }, V = 99, J = function () {
    var e = new Date() - K;
    e < V ? _ = setTimeout(J, V - e) : (_ = null, j());
  }, function () {
    K = new Date(), _ || (_ = setTimeout(J, V));
  })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = {
    pf: c,
    push: function (e) {
      var t = e.shift();
      "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({
        reselect: !0
      }));
    }
  };

  for (; x && x.length;) e.picturefillCFG.push(x.shift());

  e.picturefill = re,  true && "object" == typeof module.exports ? module.exports = re :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return re;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), c.supPicture || (A["image/webp"] = function (t, s) {
    var r = new e.Image();
    return r.onerror = function () {
      A[t] = !1, re();
    }, r.onload = function () {
      A[t] = 1 === r.width, re();
    }, r.src = s, "pending";
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./source/js/_vendor.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./source/js/_components.js");


}();
/******/ })()
;
//# sourceMappingURL=main.js.map