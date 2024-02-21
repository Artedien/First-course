const preloader = () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        
        preloader.classList.add('preloader-remove');
    }, 750);
};

export default preloader;