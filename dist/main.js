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
;// CONCATENATED MODULE: ./src/js/components/preloader.js
const preloader = () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('preloader-remove');
  }, 750);
};
/* harmony default export */ var components_preloader = (preloader);
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
window.addEventListener('load', function () {
  components_preloader();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO0VBQ3pDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRnBJLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVk7RUFDeEM2SixvQkFBUyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9idXJnZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL3RpbWVyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgbmF2T2Zmc2V0VG9wID0gbmF2Lm9mZnNldFRvcDtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG5hdk9mZnNldFRvcCkge1xyXG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLW5hdicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLW5hdicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0LrRgNC+0LvQu9CwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YtcclxuICAgIGhhbmRsZVNjcm9sbCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJleHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcblxuZXhwb3J0IGxldCBib2R5VW5sb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIH0sIGRlbGF5KTtcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcbmV4cG9ydCBsZXQgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIGNvbnN0IGdldFNjcm9sbGJhcldpZHRoID0gKCkgPT4gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHNjcm9sbFdpdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsV2l0aH1weGA7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcblxuLy8gc21vb3RoIGJlaGF2aW9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cHhgIDogYDBweGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuaGlkZGVuID0gIXNob3dtb3JlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgICAgIXNob3dtb3JlID8gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVVcERvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1weGAgOiBgMHB4YDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlRG93bkRvbmUnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbW9kdWxlcyA9IHt9OyIsImltcG9ydCB7IG1vZHVsZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vKipcbiAqIGFkZHMgYWN0aW9ucyB0byBmb3JtIGZpZWxkc1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtRmllbGRzSW5pdChvcHRpb25zID0geyB2aWV3UGFzczogZmFsc2UgfSkge1xuICBjb25zdCBmb3JtRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcGxhY2Vob2xkZXJdLHRleHRhcmVhW3BsYWNlaG9sZGVyXScpO1xuICBpZiAoZm9ybUZpZWxkcy5sZW5ndGgpIHtcbiAgICBmb3JtRmllbGRzLmZvckVhY2goKGZvcm1GaWVsZCkgPT4ge1xuICAgICAgaWYgKCFmb3JtRmllbGQuaGFzQXR0cmlidXRlKCdkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZScpKSB7XG4gICAgICAgIGZvcm1GaWVsZC5kYXRhc2V0LnBsYWNlaG9sZGVyID0gZm9ybUZpZWxkLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICh0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnZmlsZScgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnY2hlY2tib3gnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3JhZGlvJyAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcucXVhbnRpdHknKSAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQtcm93JykpIHx8XG4gICAgICB0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1mb2N1cy1jbGFzc2VzJykpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dCcpKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgfVxuICAgICAgZm9ybVZhbGlkYXRlLnJlbW92ZUVycm9yKHRhcmdldEVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICAodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2ZpbGUnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdyYWRpbycgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnF1YW50aXR5JykgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0LXJvdycpKSB8fFxuICAgICAgdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW5vLWZvY3VzLWNsYXNzZXMnKSkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcbiAgICAgICAgZm9ybVZhbGlkYXRlLnZhbGlkYXRlSW5wdXQodGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfZm9ybS1lcnJvcicpICYmIHRhcmdldEVsZW1lbnQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dCcpKSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdfZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dCcpKSB7XG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChvcHRpb25zLnZpZXdQYXNzKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tjbGFzcyo9XCJfX3ZpZXdwYXNzXCJdJykpIHtcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfdmlld3Bhc3MtYWN0aXZlJykgPyAncGFzc3dvcmQnIDogJ3RleHQnO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ192aWV3cGFzcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyB2YWxpZGF0aW9uIHZhclxuZXhwb3J0IGxldCBmb3JtVmFsaWRhdGUgPSB7XG4gIGdldEVycm9ycyhmb3JtKSB7XG4gICAgbGV0IGVycm9yID0gMDtcbiAgICBsZXQgZm9ybVJlcXVpcmVkSXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1yZXF1aXJlZF0nKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtcy5mb3JFYWNoKChmb3JtUmVxdWlyZWRJdGVtKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZm9ybVJlcXVpcmVkSXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGwgfHwgZm9ybVJlcXVpcmVkSXRlbS50YWdOYW1lID09PSAnU0VMRUNUJykgJiZcbiAgICAgICAgICAhZm9ybVJlcXVpcmVkSXRlbS5kaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICBlcnJvciArPSB0aGlzLnZhbGlkYXRlSW5wdXQoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH0sXG4gIHZhbGlkYXRlSW5wdXQoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIGxldCBlcnJvciA9IDA7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5yZXF1aXJlZCA9PT0gJ2VtYWlsJykge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSA9IGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUucmVwbGFjZSgnICcsICcnKTtcbiAgICAgIGlmICh0aGlzLmVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICBlcnJvcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5yZXF1aXJlZCA9PT0gJ3RlbCcpIHtcbiAgICAgIC8vIGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUgPSBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7IC8vINCe0YHRgtCw0LLQuNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0Ysg0Lgg0YHQuNC80LLQvtC70YsgKygpXG4gICAgICBpZiAoIS9eXFwrXFxkezEsMn0gXFwoXFxkezN9XFwpIFxcZHszfSBcXGR7Mn0gXFxkezJ9JC8udGVzdChmb3JtUmVxdWlyZWRJdGVtLnZhbHVlKSkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICBlcnJvcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnRyaW0oKSkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICBlcnJvcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9LFxuICBhZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xuICAgIGNvbnN0IGVycm9yID0gZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXNwYW4nKTtcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBsZXQgaW5wdXRFcnJvciA9IGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKTtcbiAgICBpZiAoaW5wdXRFcnJvcikgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGlucHV0RXJyb3IpO1xuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQuZXJyb3IpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgPGRpdiBjbGFzcz1cImZvcm1fX2Vycm9yXCI+JHtmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQuZXJyb3J9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgY29uc3QgZXJyb3IgPSBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itc3BhbicpO1xuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2Vycm9yJykpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgZm9ybUNsZWFuKGZvcm0pIHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCx0ZXh0YXJlYScpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbnB1dHNbaW5kZXhdO1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIGZvcm1WYWxpZGF0ZS5yZW1vdmVFcnJvcihlbCk7XG4gICAgICB9XG4gICAgICBsZXQgY2hlY2tib3hlcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dCcpO1xuICAgICAgaWYgKGNoZWNrYm94ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hlY2tib3hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNoZWNrYm94ZXNbaW5kZXhdO1xuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaWYgKG1vZHVsZXMuc2VsZWN0KSB7XG4gICAgICAvLyAgICAgbGV0IHNlbGVjdHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcbiAgICAgIC8vICAgICBpZiAoc2VsZWN0cy5sZW5ndGgpIHtcbiAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlbGVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAvLyAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBzZWxlY3RzW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgIC8vICAgICAgICAgICAgIG1vZHVsZXMuc2VsZWN0LnNlbGVjdEJ1aWxkKHNlbGVjdCk7XG4gICAgICAvLyAgICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyB9XG4gICAgfSwgMCk7XG4gIH0sXG4gIGVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgcmV0dXJuICEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogYWRkcyBzdWJtaXQgbG9naWNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybVN1Ym1pdChvcHRpb25zID0geyB2YWxpZGF0ZTogdHJ1ZSB9KSB7XG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZm9ybXM7XG4gIGlmIChmb3Jtcy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtU3VibWl0QWN0aW9uKGZvcm0sIGUpO1xuICAgICAgfSk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGZvcm1TdWJtaXRBY3Rpb24oZm9ybSwgZSkge1xuICAgIGNvbnN0IGVycm9yID0gIWZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLW5vLXZhbGlkYXRlJykgPyBmb3JtVmFsaWRhdGUuZ2V0RXJyb3JzKGZvcm0pIDogMDtcbiAgICBpZiAoZXJyb3IgPT09IDApIHtcbiAgICAgIGNvbnN0IGFqYXggPSBmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1hamF4Jyk7XG4gICAgICBpZiAoYWpheCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1BY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgPyBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykudHJpbSgpIDogJyMnO1xuICAgICAgICBjb25zdCBmb3JtTWV0aG9kID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpID8gZm9ybS5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpLnRyaW0oKSA6ICdHRVQnO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ19zZW5kaW5nJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZm9ybUFjdGlvbiwge1xuICAgICAgICAgIG1ldGhvZDogZm9ybU1ldGhvZCxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlUmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcbiAgICAgICAgICBmb3JtU2VudChmb3JtLCByZXNwb25zZVJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoJ2Vycm9yJyk7XG4gICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VuZGluZycpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWRldicpKSB7XG4gICAgICAgIC8vIGluIGRldmVsb3BtZW50IG1vZGVcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtU2VudChmb3JtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybUVycm9yID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuX2Zvcm0tZXJyb3InKTtcbiAgICAgIGlmIChmb3JtRXJyb3IgJiYgZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZ290by1lcnJvcicpKSB7XG4gICAgICAgIGdvdG9CbG9jayhmb3JtRXJyb3IsIHRydWUsIDEwMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBhY3Rpb25zIGFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAgZnVuY3Rpb24gZm9ybVNlbnQoZm9ybSwgcmVzcG9uc2VSZXN1bHQgPSBgYCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2Zvcm1TZW50Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBmb3JtOiBmb3JtXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBzaG93IHBvcHVwLCBpZiBwb3B1cCBtb2R1bGUgaXMgY29ubmVjdGVkIGFuZCBmb3JtIGhhcyBzZXR0aW5nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAobW9kdWxlcy5wb3B1cCkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGZvcm0uZGF0YXNldC5wb3B1cE1lc3NhZ2U7XG4gICAgICAgIHBvcHVwID8gbW9kdWxlcy5wb3B1cC5vcGVuKHBvcHVwKSA6IG51bGw7XG4gICAgICB9XG4gICAgICAvLyBmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xuICAgIH0sIDMwMCk7XG4gICAgLy8gY2xlYW4gZm9ybVxuICB9XG59XG4iLCJpbXBvcnQgJy4vZm9ybXMnO1xuaW1wb3J0IHsgZm9ybUZpZWxkc0luaXQsIGZvcm1TdWJtaXQgfSBmcm9tICcuL2Zvcm1zJztcblxuY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICAvLyBmb3JtIGZpZWxkc1xuICAgIGZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IHRydWUgfSk7XG5cbiAgICAvLyBzdWJtaXQgZm9ybVxuICAgIGZvcm1TdWJtaXQoKTtcblxuICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtLW1haWwnKTtcblxuICAgIG1haWwuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGl0ZW0udmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKCEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoaW5wdXRWYWx1ZSkgJiYgaW5wdXRWYWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1lcnJvcicpO1xuICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcbiIsImNvbnN0IGJ1cmdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbiAgICBjb25zdCBnZXRTY3JvbGxiYXJXaWR0aCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5CdXJnZXIoKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFdpdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgO1xyXG5cclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgYnVyZ2VyLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgO1xyXG5cclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUJ1cmdlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJ1cmdlci5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgYDtcclxuXHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gY2xvc2VCdXJnZXIoKSA6IG9wZW5CdXJnZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xyXG4gICAgICAgICAgICBjbG9zZUJ1cmdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLXRvcF9fbmF2LWxpbmsnKSkge1xyXG4gICAgICAgICAgICBjbG9zZUJ1cmdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVyZ2VyOyIsImNvbnN0IHNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAubmF2LWxpbmtgKTtcclxuXHJcbiAgICBmb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2tJZCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignJyArIGJsb2NrSWQpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbDsiLCJmdW5jdGlvbiB0aW1lcihpZCwgZGF5cykge1xyXG5cclxuICAgIGNvbnN0IGRlYWRMaW5lID0gbmV3IERhdGUoKS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlbWFpbmluZ1RpbWUoZW5kdGltZSkge1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBlbmR0aW1lIC0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBkYXlzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIDogJzAwJztcclxuICAgICAgICBjb25zdCBob3VycyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcigoZGlmZiAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpIDogJzAwJztcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKChkaWZmIC8gMTAwMCAvIDYwKSAlIDYwKSA6ICcwMCc7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGRpZmYgPiAwID8gTWF0aC5mbG9vcigoZGlmZiAvIDEwMDApICUgNjApIDogJzAwJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlmZixcclxuICAgICAgICAgICAgZGF5cyxcclxuICAgICAgICAgICAgaG91cnMsXHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWNsZW5zaW9uTnVtKG51bSwgd29yZHMpIHtcclxuICAgICAgICByZXR1cm4gd29yZHNbbnVtICUgMTAwID4gNCAmJiBudW0gJSAxMDAgPCAyMCA/IDIgOiBbMiwgMCwgMSwgMSwgMSwgMl1bbnVtICUgMTAgPCA1ID8gbnVtICUgMTAgOiA1XV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xvY2soc2VsZWN0b3IsIGVuZHRpbWUpIHtcclxuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGRheXMgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjZGF5cycpO1xyXG4gICAgICAgIGNvbnN0IGRheXNUZXh0ID0gdGltZXIucXVlcnlTZWxlY3RvcignI2RheXNUZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjaG91cnMnKTtcclxuICAgICAgICBjb25zdCBob3Vyc1RleHQgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjaG91cnNUZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlcyA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlc1RleHQgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcjbWludXRlc1RleHQnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gdGltZXIucXVlcnlTZWxlY3RvcignI3NlY29uZHMnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRzVGV4dCA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmRzVGV4dCcpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUNsb2NrKCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gZ2V0UmVtYWluaW5nVGltZShlbmR0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIGRheXMuaW5uZXJIVE1MID0gK3RpbWUuZGF5cyA+IDkgPyB0aW1lLmRheXMgOiBgMCR7dGltZS5kYXlzfWA7XHJcbiAgICAgICAgICAgIGhvdXJzLmlubmVySFRNTCA9ICt0aW1lLmhvdXJzID4gOSA/IHRpbWUuaG91cnMgOiBgMCR7dGltZS5ob3Vyc31gO1xyXG4gICAgICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9ICt0aW1lLm1pbnV0ZXMgPiA5ID8gdGltZS5taW51dGVzIDogYDAke3RpbWUubWludXRlc31gO1xyXG4gICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9ICt0aW1lLnNlY29uZHMgPiA5ID8gdGltZS5zZWNvbmRzIDogYDAke3RpbWUuc2Vjb25kc31gO1xyXG5cclxuICAgICAgICAgICAgZGF5c1RleHQudGV4dENvbnRlbnQgPSBkZWNsZW5zaW9uTnVtKHRpbWUuZGF5cywgWyfQtNC10L3RjCcsICfQtNC90Y8nLCAn0LTQvdC10LknXSk7XHJcbiAgICAgICAgICAgIGhvdXJzVGV4dC50ZXh0Q29udGVudCA9IGRlY2xlbnNpb25OdW0odGltZS5ob3VycywgWyfRh9Cw0YEnLCAn0YfQsNGB0LAnLCAn0YfQsNGB0L7QsiddKTtcclxuICAgICAgICAgICAgbWludXRlc1RleHQudGV4dENvbnRlbnQgPSBkZWNsZW5zaW9uTnVtKHRpbWUubWludXRlcywgWyfQvNC40L3Rg9GC0LAnLCAn0LzQuNC90YPRgtGLJywgJ9C80LjQvdGD0YInXSk7XHJcbiAgICAgICAgICAgIHNlY29uZHNUZXh0LnRleHRDb250ZW50ID0gZGVjbGVuc2lvbk51bSh0aW1lLnNlY29uZHMsIFsn0YHQtdC60YPQvdC00LAnLCAn0YHQtdC60YPQvdC00YsnLCAn0YHQtdC60YPQvdC0J10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENsb2NrKGlkLCBkZWFkTGluZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpbWVyOyIsImNvbnN0IHByZWxvYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkZXItcmVtb3ZlJyk7XHJcbiAgICB9LCA3NTApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJlbG9hZGVyOyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2pzL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBmb3JtIGZyb20gJy4vanMvdXRpbHMvZm9ybSc7XG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4vanMvY29tcG9uZW50cy9idXJnZXInO1xuaW1wb3J0IHNjcm9sbCBmcm9tICcuL2pzL2NvbXBvbmVudHMvc2Nyb2xsJztcbmltcG9ydCB0aW1lciBmcm9tICcuL2pzL2NvbXBvbmVudHMvdGltZXInO1xuaW1wb3J0IHByZWxvYWRlciBmcm9tICcuL2pzL2NvbXBvbmVudHMvcHJlbG9hZGVyJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaGVhZGVyKCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHRyeSB7XG4gICAgICAgIGZvcm0oKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgdHJ5IHtcbiAgICAgICAgYnVyZ2VyKCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHRyeSB7XG4gICAgICAgIHNjcm9sbCgpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0cnkge1xuICAgICAgICB0aW1lcihcIi5tYWluLWhlcm9fX2RhdGUtY291bnRlclwiLCAxOSk7XG4gICAgfSBjYXRjaCB7fVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHByZWxvYWRlcigpO1xufSk7XG4iXSwibmFtZXMiOlsiaGVhZGVyIiwibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2T2Zmc2V0VG9wIiwib2Zmc2V0VG9wIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5VW5sb2NrIiwiZGVsYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJib2R5Iiwic2V0VGltZW91dCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keUxvY2siLCJnZXRTY3JvbGxiYXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2l0aCIsIl9zbGlkZVVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzaG93bW9yZSIsImNvbnRhaW5zIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImhpZGRlbiIsInJlbW92ZVByb3BlcnR5IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiX3NsaWRlRG93biIsIl9zbGlkZVRvZ2dsZSIsIm1vZHVsZXMiLCJmb3JtRmllbGRzSW5pdCIsIm9wdGlvbnMiLCJ2aWV3UGFzcyIsImZvcm1GaWVsZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImZvcm1GaWVsZCIsImhhc0F0dHJpYnV0ZSIsImRhdGFzZXQiLCJwbGFjZWhvbGRlciIsImUiLCJ0YXJnZXRFbGVtZW50IiwidGFnTmFtZSIsInR5cGUiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImZvcm1WYWxpZGF0ZSIsInJlbW92ZUVycm9yIiwidmFsaWRhdGVJbnB1dCIsInZhbHVlIiwidHJpbSIsImlucHV0VHlwZSIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZSIsImdldEVycm9ycyIsImZvcm0iLCJlcnJvciIsImZvcm1SZXF1aXJlZEl0ZW1zIiwiZm9ybVJlcXVpcmVkSXRlbSIsIm9mZnNldFBhcmVudCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJyZXBsYWNlIiwiZW1haWxUZXN0IiwiYWRkRXJyb3IiLCJ0ZXN0IiwiaW5wdXRFcnJvciIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZm9ybUNsZWFuIiwicmVzZXQiLCJpbnB1dHMiLCJpbmRleCIsImVsIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwiY2hlY2tlZCIsImZvcm1TdWJtaXQiLCJ2YWxpZGF0ZSIsImZvcm1zIiwiZm9ybVN1Ym1pdEFjdGlvbiIsImFqYXgiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1BY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJmb3JtTWV0aG9kIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsInJlc3BvbnNlUmVzdWx0IiwianNvbiIsImZvcm1TZW50IiwiYWxlcnQiLCJmb3JtRXJyb3IiLCJnb3RvQmxvY2siLCJwb3B1cCIsInBvcHVwTWVzc2FnZSIsIm9wZW4iLCJtYWlsIiwiaXRlbSIsImlucHV0VmFsdWUiLCJwYXJlbnQiLCJzcGFuIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYnVyZ2VyIiwib3ZlcmxheSIsIm9wZW5CdXJnZXIiLCJjbG9zZUJ1cmdlciIsInNjcm9sbCIsImFuY2hvcnMiLCJhbmNob3IiLCJibG9ja0lkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwidGltZXIiLCJpZCIsImRheXMiLCJkZWFkTGluZSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdldFJlbWFpbmluZ1RpbWUiLCJlbmR0aW1lIiwiZGlmZiIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJkZWNsZW5zaW9uTnVtIiwibnVtIiwid29yZHMiLCJzZXRDbG9jayIsInNlbGVjdG9yIiwiZGF5c1RleHQiLCJob3Vyc1RleHQiLCJtaW51dGVzVGV4dCIsInNlY29uZHNUZXh0IiwidGltZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVDbG9jayIsInRpbWUiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImNsZWFySW50ZXJ2YWwiLCJwcmVsb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9