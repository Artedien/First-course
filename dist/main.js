/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/header.js
const header = () => {
  const nav = document.querySelector('.header');
  const navOffsetTop = nav.offsetTop;
  function handleScroll() {
    if (window.innerWidth > 768) {
      if (window.scrollY > navOffsetTop) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
    }
  }
  window.addEventListener('scroll', handleScroll);
  // Инициализируем обработчик скролла при загрузке страницы
  handleScroll();
};
/* harmony default export */ var components_header = (header);
;// CONCATENATED MODULE: ./src/js/utils/constants.js
let bodyLockStatus = true;
let bodyUnlock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    setTimeout(() => {
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    let scrollWith = getScrollbarWidth();
    body.style.paddingRight = `${scrollWith}px`;
    document.documentElement.classList.add('lock');
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

// smooth behavior ============================================================
const _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideUpDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
const _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
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
      // create event
      document.dispatchEvent(new CustomEvent('slideDownDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};
const _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
const modules = {};
;// CONCATENATED MODULE: ./src/js/utils/forms.js

/**
 * adds actions to form fields
 * @param {object} options object
 */
function formFieldsInit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    viewPass: false
  };
  const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');
  if (formFields.length) {
    formFields.forEach(formField => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      if (targetElement.closest('.input')) {
        targetElement.closest('.input').classList.remove('_filled');
      }
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      if (!targetElement.classList.contains('_form-error') && targetElement.value.trim()) {
        if (targetElement.closest('.input')) {
          targetElement.closest('.input').classList.add('_filled');
        }
      } else {
        if (targetElement.closest('.input')) {
          targetElement.closest('.input').classList.remove('_filled');
        }
      }
    }
  });
  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active') ? 'password' : 'text';
        targetElement.parentElement.querySelector('input').setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

// validation var
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach(formRequiredItem => {
        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === 'SELECT') && !formRequiredItem.disabled) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.dataset.required === 'tel') {
      // formRequiredItem.value = formRequiredItem.value.replace(/[^0-9]/g, ''); // Оставить только цифры и символы +()
      if (!/^\+\d{1,2} \(\d{3}\) \d{3} \d{2} \d{2}$/.test(formRequiredItem.value)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else {
      if (!formRequiredItem.value.trim()) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    const error = formRequiredItem.parentElement.parentElement.querySelector('.error-span');
    error.classList.add('active');
    let inputError = formRequiredItem.parentElement.querySelector('.form__error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML('beforeend', `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    const error = formRequiredItem.parentElement.parentElement.querySelector('.error-span');
    error.classList.remove('active');
    if (formRequiredItem.parentElement.querySelector('.form__error')) {
      formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form__error'));
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll('input,textarea');
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove('_form-focus');
        el.classList.remove('_form-focus');
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll('.checkbox__input');
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = false;
        }
      }
      // if (modules.select) {
      //     let selects = form.querySelectorAll('.select');
      //     if (selects.length) {
      //         for (let index = 0; index < selects.length; index++) {
      //             const select = selects[index].querySelector('select');
      //             modules.select.selectBuild(select);
      //         }
      //     }
      // }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  }
};

/**
 * adds submit logic
 * @param {object} options object
 */
function formSubmit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    validate: true
  };
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
    if (error === 0) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
        const formData = new FormData(form);
        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        // in development mode
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  // actions after submitting the form
  function formSent(form) {
    let responseResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ``;
    document.dispatchEvent(new CustomEvent('formSent', {
      detail: {
        form: form
      }
    }));
    // show popup, if popup module is connected and form has setting
    setTimeout(() => {
      if (modules.popup) {
        const popup = form.dataset.popupMessage;
        popup ? modules.popup.open(popup) : null;
      }
      // formValidate.formClean(form);
    }, 300);
    // clean form
  }
}
;// CONCATENATED MODULE: ./src/js/utils/form.js


const form_form = () => {
  // form fields
  formFieldsInit({
    viewPass: true
  });

  // submit form
  formSubmit();
  const mail = document.querySelectorAll('.input--mail');
  mail.forEach(item => {
    item.addEventListener('input', () => {
      const inputValue = item.value.trim();
      const parent = item.parentElement;
      const span = item.nextElementSibling;
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
        parent.classList.add('_form-error');
        span.classList.add('active');
      } else {
        parent.classList.remove('_form-error');
        span.classList.remove('active');
      }
    });
  });
};
/* harmony default export */ var utils_form = (form_form);
;// CONCATENATED MODULE: ./src/js/components/burger.js
const burger = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav-wrapper');
  const overlay = document.querySelector('.overlay');
  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
  function openBurger() {
    let scrollWith = getScrollbarWidth();
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollWith}px`;
    burger.classList.add('active');
    burger.style.paddingRight = `${scrollWith}px`;
    nav.classList.add('active');
    overlay.classList.add('active');
  }
  function closeBurger() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    burger.classList.remove('active');
    burger.style.paddingRight = ``;
    nav.classList.remove('active');
    overlay.classList.remove('active');
  }
  burger.addEventListener('click', () => {
    burger.classList.contains('active') ? closeBurger() : openBurger();
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeBurger();
    }
  });
  nav.addEventListener('click', e => {
    if (e.target.classList.contains('header-top__nav-link')) {
      closeBurger();
    }
  });
};
/* harmony default export */ var components_burger = (burger);
;// CONCATENATED MODULE: ./src/js/components/scroll.js
const scroll_scroll = () => {
  const anchors = document.querySelectorAll(`.nav-link`);
  for (let anchor of anchors) {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};
/* harmony default export */ var components_scroll = (scroll_scroll);
;// CONCATENATED MODULE: ./src/js/components/timer.js
function timer(id, days) {
  const deadLine = new Date().setDate(new Date().getDate() + days);
  console.log(deadLine);
  function getRemainingTime(endtime) {
    const diff = endtime - new Date();
    const days = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : '00';
    const hours = diff > 0 ? Math.floor(diff / (1000 * 60 * 60) % 24) : '00';
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60 % 60) : '00';
    const seconds = diff > 0 ? Math.floor(diff / 1000 % 60) : '00';
    return {
      diff,
      days,
      hours,
      minutes,
      seconds
    };
  }
  function declensionNum(num, words) {
    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const daysText = timer.querySelector('#daysText');
    const hours = timer.querySelector('#hours');
    const hoursText = timer.querySelector('#hoursText');
    const minutes = timer.querySelector('#minutes');
    const minutesText = timer.querySelector('#minutesText');
    const seconds = timer.querySelector('#seconds');
    const secondsText = timer.querySelector('#secondsText');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const time = getRemainingTime(endtime);
      days.innerHTML = +time.days > 9 ? time.days : `0${time.days}`;
      hours.innerHTML = +time.hours > 9 ? time.hours : `0${time.hours}`;
      minutes.innerHTML = +time.minutes > 9 ? time.minutes : `0${time.minutes}`;
      seconds.innerHTML = +time.seconds > 9 ? time.seconds : `0${time.seconds}`;
      daysText.textContent = declensionNum(time.days, ['день', 'дня', 'дней']);
      hoursText.textContent = declensionNum(time.hours, ['час', 'часа', 'часов']);
      minutesText.textContent = declensionNum(time.minutes, ['минута', 'минуты', 'минут']);
      secondsText.textContent = declensionNum(time.seconds, ['секунда', 'секунды', 'секунд']);
      if (time <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(id, deadLine);
}
/* harmony default export */ var components_timer = (timer);
;// CONCATENATED MODULE: ./src/index.js






window.addEventListener('DOMContentLoaded', () => {
  try {
    components_header();
  } catch {}
  try {
    utils_form();
  } catch {}
  try {
    components_burger();
  } catch {}
  try {
    components_scroll();
  } catch {}
  try {
    components_timer(".main-hero__date-counter", 19);
  } catch {}
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDM0VVLFdBQVcsQ0FBQ08sV0FBVyxHQUFHZCxhQUFhLENBQUNZLElBQUksQ0FBQ2QsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztNQUNwRlUsV0FBVyxDQUFDTSxXQUFXLEdBQUdkLGFBQWEsQ0FBQ1ksSUFBSSxDQUFDYixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO01BRXZGLElBQUlhLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDWEcsYUFBYSxDQUFDTixZQUFZLENBQUM7TUFDL0I7SUFDSjtFQUNKO0VBRUFOLFFBQVEsQ0FBQ25CLEVBQUUsRUFBRUUsUUFBUSxDQUFDO0FBQzFCO0FBRUEscURBQWVILEtBQUs7O0FDOURFO0FBRXNCO0FBQ1Q7QUFDUztBQUNBO0FBQ0Y7QUFFMUNwSSxNQUFNLENBQUNNLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDOUMsSUFBSTtJQUNBYixpQkFBTSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ1QsSUFBSTtJQUNBNEUsVUFBSSxDQUFDLENBQUM7RUFDVixDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ1QsSUFBSTtJQUNBb0QsaUJBQU0sQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNULElBQUk7SUFDQUksaUJBQU0sQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNULElBQUk7SUFDQU8sZ0JBQUssQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUM7RUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNiLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2Zvcm1zLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2J1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdk9mZnNldFRvcCA9IG5hdi5vZmZzZXRUb3A7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiBuYXZPZmZzZXRUb3ApIHtcclxuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdmaXhlZC1uYXYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC1uYXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC60YDQvtC70LvQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICBoYW5kbGVTY3JvbGwoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiZXhwb3J0IGxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG5cbmV4cG9ydCBsZXQgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcbiAgICB9LCBkZWxheSk7XG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG5leHBvcnQgbGV0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBjb25zdCBnZXRTY3JvbGxiYXJXaWR0aCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGxldCBzY3JvbGxXaXRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG5cbi8vIHNtb290aCBiZWhhdmlvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjb25zdCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXB4YCA6IGAwcHhgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBfc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5oaWRkZW4gPSB0YXJnZXQuaGlkZGVuID8gZmFsc2UgOiBudWxsO1xuICAgIHNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xuICBpZiAodGFyZ2V0LmhpZGRlbikge1xuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1vZHVsZXMgPSB7fTsiLCJpbXBvcnQgeyBtb2R1bGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLyoqXG4gKiBhZGRzIGFjdGlvbnMgdG8gZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybUZpZWxkc0luaXQob3B0aW9ucyA9IHsgdmlld1Bhc3M6IGZhbHNlIH0pIHtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3BsYWNlaG9sZGVyXSx0ZXh0YXJlYVtwbGFjZWhvbGRlcl0nKTtcbiAgaWYgKGZvcm1GaWVsZHMubGVuZ3RoKSB7XG4gICAgZm9ybUZpZWxkcy5mb3JFYWNoKChmb3JtRmllbGQpID0+IHtcbiAgICAgIGlmICghZm9ybUZpZWxkLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlci1ub2hpZGUnKSkge1xuICAgICAgICBmb3JtRmllbGQuZGF0YXNldC5wbGFjZWhvbGRlciA9IGZvcm1GaWVsZC5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICAodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2ZpbGUnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdyYWRpbycgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnF1YW50aXR5JykgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0LXJvdycpKSB8fFxuICAgICAgdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICghdGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tZm9jdXMtY2xhc3NlcycpKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19mb3JtLWZvY3VzJyk7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKSkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgIH1cbiAgICAgIGZvcm1WYWxpZGF0ZS5yZW1vdmVFcnJvcih0YXJnZXRFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgKHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdmaWxlJyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdjaGVja2JveCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAncmFkaW8nICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5xdWFudGl0eScpICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dC1yb3cnKSkgfHxcbiAgICAgIHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICkge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuZGF0YXNldC5wbGFjZWhvbGRlcikge1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBsYWNlaG9sZGVyID0gdGFyZ2V0RWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1mb2N1cy1jbGFzc2VzJykpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XG4gICAgICAgIGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KHRhcmdldEVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnX2Zvcm0tZXJyb3InKSAmJiB0YXJnZXRFbGVtZW50LnZhbHVlLnRyaW0oKSkge1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKSkge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKSkge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAob3B0aW9ucy52aWV3UGFzcykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5jbG9zZXN0KCdbY2xhc3MqPVwiX192aWV3cGFzc1wiXScpKSB7XG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnX3ZpZXdwYXNzLWFjdGl2ZScpID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JztcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jykuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfdmlld3Bhc3MtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gdmFsaWRhdGlvbiB2YXJcbmV4cG9ydCBsZXQgZm9ybVZhbGlkYXRlID0ge1xuICBnZXRFcnJvcnMoZm9ybSkge1xuICAgIGxldCBlcnJvciA9IDA7XG4gICAgbGV0IGZvcm1SZXF1aXJlZEl0ZW1zID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtcmVxdWlyZWRdJyk7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbXMuZm9yRWFjaCgoZm9ybVJlcXVpcmVkSXRlbSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGZvcm1SZXF1aXJlZEl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsIHx8IGZvcm1SZXF1aXJlZEl0ZW0udGFnTmFtZSA9PT0gJ1NFTEVDVCcpICYmXG4gICAgICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uZGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy52YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9LFxuICB2YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICBsZXQgZXJyb3IgPSAwO1xuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQucmVxdWlyZWQgPT09ICdlbWFpbCcpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUgPSBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICBpZiAodGhpcy5lbWFpbFRlc3QoZm9ybVJlcXVpcmVkSXRlbSkpIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQucmVxdWlyZWQgPT09ICd0ZWwnKSB7XG4gICAgICAvLyBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlID0gZm9ybVJlcXVpcmVkSXRlbS52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpOyAvLyDQntGB0YLQsNCy0LjRgtGMINGC0L7Qu9GM0LrQviDRhtC40YTRgNGLINC4INGB0LjQvNCy0L7Qu9GLICsoKVxuICAgICAgaWYgKCEvXlxcK1xcZHsxLDJ9IFxcKFxcZHszfVxcKSBcXGR7M30gXFxkezJ9IFxcZHsyfSQvLnRlc3QoZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZm9ybVJlcXVpcmVkSXRlbS52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgYWRkRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBjb25zdCBlcnJvciA9IGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1zcGFuJyk7XG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbGV0IGlucHV0RXJyb3IgPSBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2Vycm9yJyk7XG4gICAgaWYgKGlucHV0RXJyb3IpIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnB1dEVycm9yKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtX19lcnJvclwiPiR7Zm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yfTwvZGl2PmBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICByZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1lcnJvcicpO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1lcnJvcicpO1xuICAgIGNvbnN0IGVycm9yID0gZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXNwYW4nKTtcbiAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIGZvcm1DbGVhbihmb3JtKSB7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsdGV4dGFyZWEnKTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW5wdXRzW2luZGV4XTtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICBmb3JtVmFsaWRhdGUucmVtb3ZlRXJyb3IoZWwpO1xuICAgICAgfVxuICAgICAgbGV0IGNoZWNrYm94ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQnKTtcbiAgICAgIGlmIChjaGVja2JveGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveGVzW2luZGV4XTtcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIChtb2R1bGVzLnNlbGVjdCkge1xuICAgICAgLy8gICAgIGxldCBzZWxlY3RzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XG4gICAgICAvLyAgICAgaWYgKHNlbGVjdHMubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWxlY3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gc2VsZWN0c1tpbmRleF0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAvLyAgICAgICAgICAgICBtb2R1bGVzLnNlbGVjdC5zZWxlY3RCdWlsZChzZWxlY3QpO1xuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuICAgIH0sIDApO1xuICB9LFxuICBlbWFpbFRlc3QoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIHJldHVybiAhL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDh9KSskLy50ZXN0KGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIGFkZHMgc3VibWl0IGxvZ2ljXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXQob3B0aW9ucyA9IHsgdmFsaWRhdGU6IHRydWUgfSkge1xuICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LmZvcm1zO1xuICBpZiAoZm9ybXMubGVuZ3RoKSB7XG4gICAgZm9yIChjb25zdCBmb3JtIG9mIGZvcm1zKSB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgZm9ybVN1Ym1pdEFjdGlvbihmb3JtLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgZm9ybVZhbGlkYXRlLmZvcm1DbGVhbihmb3JtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBmb3JtU3VibWl0QWN0aW9uKGZvcm0sIGUpIHtcbiAgICBjb25zdCBlcnJvciA9ICFmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby12YWxpZGF0ZScpID8gZm9ybVZhbGlkYXRlLmdldEVycm9ycyhmb3JtKSA6IDA7XG4gICAgaWYgKGVycm9yID09PSAwKSB7XG4gICAgICBjb25zdCBhamF4ID0gZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYWpheCcpO1xuICAgICAgaWYgKGFqYXgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtQWN0aW9uID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpID8gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLnRyaW0oKSA6ICcjJztcbiAgICAgICAgY29uc3QgZm9ybU1ldGhvZCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdtZXRob2QnKSA/IGZvcm0uZ2V0QXR0cmlidXRlKCdtZXRob2QnKS50cmltKCkgOiAnR0VUJztcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdfc2VuZGluZycpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm1BY3Rpb24sIHtcbiAgICAgICAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGxldCByZXNwb25zZVJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZW5kaW5nJyk7XG4gICAgICAgICAgZm9ybVNlbnQoZm9ybSwgcmVzcG9uc2VSZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KCdlcnJvcicpO1xuICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZXYnKSkge1xuICAgICAgICAvLyBpbiBkZXZlbG9wbWVudCBtb2RlXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9ybVNlbnQoZm9ybSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLl9mb3JtLWVycm9yJyk7XG4gICAgICBpZiAoZm9ybUVycm9yICYmIGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWdvdG8tZXJyb3InKSkge1xuICAgICAgICBnb3RvQmxvY2soZm9ybUVycm9yLCB0cnVlLCAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gYWN0aW9ucyBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gIGZ1bmN0aW9uIGZvcm1TZW50KGZvcm0sIHJlc3BvbnNlUmVzdWx0ID0gYGApIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdmb3JtU2VudCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgZm9ybTogZm9ybVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gc2hvdyBwb3B1cCwgaWYgcG9wdXAgbW9kdWxlIGlzIGNvbm5lY3RlZCBhbmQgZm9ybSBoYXMgc2V0dGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG1vZHVsZXMucG9wdXApIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBmb3JtLmRhdGFzZXQucG9wdXBNZXNzYWdlO1xuICAgICAgICBwb3B1cCA/IG1vZHVsZXMucG9wdXAub3Blbihwb3B1cCkgOiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gZm9ybVZhbGlkYXRlLmZvcm1DbGVhbihmb3JtKTtcbiAgICB9LCAzMDApO1xuICAgIC8vIGNsZWFuIGZvcm1cbiAgfVxufVxuIiwiaW1wb3J0ICcuL2Zvcm1zJztcbmltcG9ydCB7IGZvcm1GaWVsZHNJbml0LCBmb3JtU3VibWl0IH0gZnJvbSAnLi9mb3Jtcyc7XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgLy8gZm9ybSBmaWVsZHNcbiAgICBmb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiB0cnVlIH0pO1xuXG4gICAgLy8gc3VibWl0IGZvcm1cbiAgICBmb3JtU3VibWl0KCk7XG5cbiAgICBjb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LS1tYWlsJyk7XG5cbiAgICBtYWlsLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpdGVtLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmICghL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDh9KSskLy50ZXN0KGlucHV0VmFsdWUpICYmIGlucHV0VmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZXJyb3InKTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm07XG4iLCJjb25zdCBidXJnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtd3JhcHBlcicpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gICAgY29uc3QgZ2V0U2Nyb2xsYmFyV2lkdGggPSAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQnVyZ2VyKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxXaXRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxXaXRofXB4YDtcclxuXHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJ1cmdlci5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxXaXRofXB4YDtcclxuXHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VCdXJnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBidXJnZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGA7XHJcblxyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA/IGNsb3NlQnVyZ2VyKCkgOiBvcGVuQnVyZ2VyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIHtcclxuICAgICAgICAgICAgY2xvc2VCdXJnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci10b3BfX25hdi1saW5rJykpIHtcclxuICAgICAgICAgICAgY2xvc2VCdXJnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlcjsiLCJjb25zdCBzY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5hdi1saW5rYCk7XHJcblxyXG4gICAgZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrSWQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJycgKyBibG9ja0lkKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGw7IiwiZnVuY3Rpb24gdGltZXIoaWQsIGRheXMpIHtcclxuXHJcbiAgICBjb25zdCBkZWFkTGluZSA9IG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIGRheXMpO1xyXG4gICAgY29uc29sZS5sb2coZGVhZExpbmUpXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVtYWluaW5nVGltZShlbmR0aW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IGVuZHRpbWUgLSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRheXMgPSBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgOiAnMDAnO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKChkaWZmIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCkgOiAnMDAnO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkaWZmID4gMCA/IE1hdGguZmxvb3IoKGRpZmYgLyAxMDAwIC8gNjApICUgNjApIDogJzAwJztcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKChkaWZmIC8gMTAwMCkgJSA2MCkgOiAnMDAnO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaWZmLFxyXG4gICAgICAgICAgICBkYXlzLFxyXG4gICAgICAgICAgICBob3VycyxcclxuICAgICAgICAgICAgbWludXRlcyxcclxuICAgICAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlY2xlbnNpb25OdW0obnVtLCB3b3Jkcykge1xyXG4gICAgICAgIHJldHVybiB3b3Jkc1tudW0gJSAxMDAgPiA0ICYmIG51bSAlIDEwMCA8IDIwID8gMiA6IFsyLCAwLCAxLCAxLCAxLCAyXVtudW0gJSAxMCA8IDUgPyBudW0gJSAxMCA6IDVdXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbG9jayhzZWxlY3RvciwgZW5kdGltZSkge1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgZGF5cyA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNkYXlzJyk7XHJcbiAgICAgICAgY29uc3QgZGF5c1RleHQgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjZGF5c1RleHQnKTtcclxuICAgICAgICBjb25zdCBob3VycyA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNob3VycycpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzVGV4dCA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNob3Vyc1RleHQnKTtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gdGltZXIucXVlcnlTZWxlY3RvcignI21pbnV0ZXMnKTtcclxuICAgICAgICBjb25zdCBtaW51dGVzVGV4dCA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzVGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kcycpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHNUZXh0ID0gdGltZXIucXVlcnlTZWxlY3RvcignI3NlY29uZHNUZXh0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcclxuXHJcbiAgICAgICAgdXBkYXRlQ2xvY2soKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZW1haW5pbmdUaW1lKGVuZHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgZGF5cy5pbm5lckhUTUwgPSArdGltZS5kYXlzID4gOSA/IHRpbWUuZGF5cyA6IGAwJHt0aW1lLmRheXN9YDtcclxuICAgICAgICAgICAgaG91cnMuaW5uZXJIVE1MID0gK3RpbWUuaG91cnMgPiA5ID8gdGltZS5ob3VycyA6IGAwJHt0aW1lLmhvdXJzfWA7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gK3RpbWUubWludXRlcyA+IDkgPyB0aW1lLm1pbnV0ZXMgOiBgMCR7dGltZS5taW51dGVzfWA7XHJcbiAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gK3RpbWUuc2Vjb25kcyA+IDkgPyB0aW1lLnNlY29uZHMgOiBgMCR7dGltZS5zZWNvbmRzfWA7XHJcblxyXG4gICAgICAgICAgICBkYXlzVGV4dC50ZXh0Q29udGVudCA9IGRlY2xlbnNpb25OdW0odGltZS5kYXlzLCBbJ9C00LXQvdGMJywgJ9C00L3RjycsICfQtNC90LXQuSddKTtcclxuICAgICAgICAgICAgaG91cnNUZXh0LnRleHRDb250ZW50ID0gZGVjbGVuc2lvbk51bSh0aW1lLmhvdXJzLCBbJ9GH0LDRgScsICfRh9Cw0YHQsCcsICfRh9Cw0YHQvtCyJ10pO1xyXG4gICAgICAgICAgICBtaW51dGVzVGV4dC50ZXh0Q29udGVudCA9IGRlY2xlbnNpb25OdW0odGltZS5taW51dGVzLCBbJ9C80LjQvdGD0YLQsCcsICfQvNC40L3Rg9GC0YsnLCAn0LzQuNC90YPRgiddKTtcclxuICAgICAgICAgICAgc2Vjb25kc1RleHQudGV4dENvbnRlbnQgPSBkZWNsZW5zaW9uTnVtKHRpbWUuc2Vjb25kcywgWyfRgdC10LrRg9C90LTQsCcsICfRgdC10LrRg9C90LTRiycsICfRgdC10LrRg9C90LQnXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xvY2soaWQsIGRlYWRMaW5lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGltZXI7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vanMvY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9qcy91dGlscy9mb3JtJztcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9qcy9jb21wb25lbnRzL2J1cmdlcic7XG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vanMvY29tcG9uZW50cy9zY3JvbGwnO1xuaW1wb3J0IHRpbWVyIGZyb20gJy4vanMvY29tcG9uZW50cy90aW1lcic7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGhlYWRlcigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0cnkge1xuICAgICAgICBmb3JtKCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHRyeSB7XG4gICAgICAgIGJ1cmdlcigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0cnkge1xuICAgICAgICBzY3JvbGwoKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgdHJ5IHtcbiAgICAgICAgdGltZXIoXCIubWFpbi1oZXJvX19kYXRlLWNvdW50ZXJcIiwgMTkpO1xuICAgIH0gY2F0Y2gge31cbn0pO1xuIl0sIm5hbWVzIjpbImhlYWRlciIsIm5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdk9mZnNldFRvcCIsIm9mZnNldFRvcCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHlMb2NrU3RhdHVzIiwiYm9keVVubG9jayIsImRlbGF5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYm9keSIsInNldFRpbWVvdXQiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsImRvY3VtZW50RWxlbWVudCIsImJvZHlMb2NrIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpdGgiLCJfc2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJjb250YWlucyIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJoaWRkZW4iLCJyZW1vdmVQcm9wZXJ0eSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9zbGlkZURvd24iLCJfc2xpZGVUb2dnbGUiLCJtb2R1bGVzIiwiZm9ybUZpZWxkc0luaXQiLCJvcHRpb25zIiwidmlld1Bhc3MiLCJmb3JtRmllbGRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmb3JtRmllbGQiLCJoYXNBdHRyaWJ1dGUiLCJkYXRhc2V0IiwicGxhY2Vob2xkZXIiLCJlIiwidGFyZ2V0RWxlbWVudCIsInRhZ05hbWUiLCJ0eXBlIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJmb3JtVmFsaWRhdGUiLCJyZW1vdmVFcnJvciIsInZhbGlkYXRlSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJpbnB1dFR5cGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJnZXRFcnJvcnMiLCJmb3JtIiwiZXJyb3IiLCJmb3JtUmVxdWlyZWRJdGVtcyIsImZvcm1SZXF1aXJlZEl0ZW0iLCJvZmZzZXRQYXJlbnQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwicmVwbGFjZSIsImVtYWlsVGVzdCIsImFkZEVycm9yIiwidGVzdCIsImlucHV0RXJyb3IiLCJyZW1vdmVDaGlsZCIsImluc2VydEFkamFjZW50SFRNTCIsImZvcm1DbGVhbiIsInJlc2V0IiwiaW5wdXRzIiwiaW5kZXgiLCJlbCIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImNoZWNrZWQiLCJmb3JtU3VibWl0IiwidmFsaWRhdGUiLCJmb3JtcyIsImZvcm1TdWJtaXRBY3Rpb24iLCJhamF4IiwicHJldmVudERlZmF1bHQiLCJmb3JtQWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwiZm9ybU1ldGhvZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJyZXNwb25zZVJlc3VsdCIsImpzb24iLCJmb3JtU2VudCIsImFsZXJ0IiwiZm9ybUVycm9yIiwiZ290b0Jsb2NrIiwicG9wdXAiLCJwb3B1cE1lc3NhZ2UiLCJvcGVuIiwibWFpbCIsIml0ZW0iLCJpbnB1dFZhbHVlIiwicGFyZW50Iiwic3BhbiIsIm5leHRFbGVtZW50U2libGluZyIsImJ1cmdlciIsIm92ZXJsYXkiLCJvcGVuQnVyZ2VyIiwiY2xvc2VCdXJnZXIiLCJzY3JvbGwiLCJhbmNob3JzIiwiYW5jaG9yIiwiYmxvY2tJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpbWVyIiwiaWQiLCJkYXlzIiwiZGVhZExpbmUiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmVtYWluaW5nVGltZSIsImVuZHRpbWUiLCJkaWZmIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImRlY2xlbnNpb25OdW0iLCJudW0iLCJ3b3JkcyIsInNldENsb2NrIiwic2VsZWN0b3IiLCJkYXlzVGV4dCIsImhvdXJzVGV4dCIsIm1pbnV0ZXNUZXh0Iiwic2Vjb25kc1RleHQiLCJ0aW1lSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNsb2NrIiwidGltZSIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=