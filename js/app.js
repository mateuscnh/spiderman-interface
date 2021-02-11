document.addEventListener('DOMContentLoaded', () => {
    const tl = new TimelineMax();
    tl.fromTo('.bg-loader', 1, {width: '100%'}, {width: '0%', delay: 4, ease: Expo.easeInOut})
    
    .fromTo('.bg-video', 2, {width: '0%', opacity: 0}, {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')
    
    .fromTo('.logo', 1, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    
    .fromTo('.nav-list', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=')
    
    .fromTo('.nav-social', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    
    .fromTo('.item-1', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-2', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-3', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-4', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-5', .7, {y: -50, opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
})