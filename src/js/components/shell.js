'use strict';

import  gsap  from 'gsap';

$ (function() {
    let clock = document.querySelector('#clock');
    let show = document.querySelector('#show');
    gsap.set( clock , {rotate: -90, svgOrigin: "137, 146" });
	let i = 0;
	let n = 15;

	$ ('input[type=checkbox]').on('change', function rangeChange() {
		if (this.checked) {
		i+=n;
        let b = -90 + i;
	    gsap.to( clock , 2, {rotate: b, svgOrigin: "137, 146" });
	    show.value = i * 20;

	    } else {
		i-=n;
		let b = -90 + i;
		gsap.to( clock , 2, {rotate:  b, svgOrigin: "137, 146" });
		show.value = i * 20;
	    }
    });

});
