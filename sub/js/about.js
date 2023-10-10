$(document).ready(function () {

	var scrollObj = window.Scrollbar.init(document.querySelector('#scrollCont'), {
		damping: 0.1,
		thumbMinSize: 10,
		speed: 0.02
	});


	// GSAP 스크롤트리거 호출
	gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

	ScrollTrigger.scrollerProxy('#scrollCont', {
		scrollTop: function (value) {
			if (arguments.length) {
				scrollObj.scrollTop = value;
			}
			return scrollObj.scrollTop;
		}
	});

	// SS 플러그인의 Y축이 이동할 때마다 발생하는 이벤트 리스너
	scrollObj.addListener(function (e) {
		var _this = this;

		ScrollTrigger.update();
		if (_this.offset.y > 100) {
			$('#abuot .scroll').addClass('on');
			$('#header').fadeOut();
		} else {
			$('#wiBox .scroll').removeClass('on');
			$('#header').fadeIn();
		}
	});


	setTimeout(function () {
		$('.visual_box').addClass('on');
		$('.wi_txt').each(function (idx) {
			let that = $(this);
			setTimeout(function () {
				that.animate({
					'left': 0,
					'opacity': 1
				}, 600);
				if (that.hasClass('wi_txt3') == true) {
					$('.wi_tit').addClass('on');
					$('.wi_tit div.big_font').animate({
						'top': '0'
					}, 1000, function () {

						// kv 영역
						gsap.timeline({
								scrollTrigger: {
									trigger: "#wiBox",
									start: "bottom 90%",
									end: "bottom 70%",
									scrub: 2,
								}
							})
							.fromTo('.wi_tit .wt_1', {
								top: '-4.3vw'
							}, {
								top: '-1.3vw',
								ease: 'none',
								duration: 10
							}, 0)
							.fromTo('.wi_tit .wi_txt1', {
								fontSize: '4.89vw',
								lineHeight: '4.89vw'
							}, {
								fontSize: '2.9687vw',
								lineHeight: '2.9687vw',
								ease: 'none',
								duration: 10
							}, 0)
							.fromTo('.wi_tit .wi_txt2', {
								fontSize: '4.89vw',
								lineHeight: '4.89vw'
							}, {
								fontSize: '2.9687vw',
								lineHeight: '2.9687vw',
								ease: 'none',
								duration: 10
							}, 0)
							.fromTo('.wi_tit .wi_txt3', {
								fontSize: '3.59vw',
								lineHeight: '3.59vw'
							}, {
								fontSize: '2.1354vw',
								lineHeight: '2.1354vw',
								ease: 'none',
								duration: 10
							}, 0)
					});
				}
			}, 1000 * idx)
		})
	}, 1000)
	// 스크롤 트리거가 인식해야하는 기본 스크롤 대상을 SS 플러그인으로 변경합니다.
	ScrollTrigger.defaults({
		scroller: document.querySelector('#scrollCont')
	});

	gsap.timeline({
			scrollTrigger: {
				trigger: "#wiBox",
				start: "bottom 95%",
				endTrigger: "#wiBox",
				end: "bottom 85%",
				scrub: 0.5,
			}
		})
		.fromTo('.top_text', {
			y: '0%'
		}, {
			y: '-50%',
			ease: 'none',
			duration: 5
		}, 0)
	gsap.timeline({
			scrollTrigger: {
				trigger: "#wiBox",
				start: "bottom 100%",
				endTrigger: "#wiBox",
				end: "bottom += 2000",
				scrub: 0.5,
			}
		})
		.fromTo('.bg_visual', {
			y: '0%'
		}, {
			y: '-50%',
			ease: 'none',
			duration: 5
		}, 0)

	gsap.timeline({
			scrollTrigger: {
				trigger: "#wiBox",
				start: "center 20%",
				end: "center 10%",
				scrub: 0.5,
			},
			opacity: 1,
		})
		.fromTo('.noborder_text', {
			opacity: 0
		}, {
			opacity: 1,
			ease: 'none',
			duration: 2
		}, 0)
	gsap.timeline({
			scrollTrigger: {
				trigger: "#wiBox",
				start: "center 20%",
				end: "center 10%",
				scrub: 0.5,
			},
			opacity: 1,
		})
		.fromTo('.border_text', {
			opacity: 1
		}, {
			opacity: 0,
			ease: 'none',
			duration: 2
		}, 0)

	// sec01 영역
	var tt1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#sec01',
				start: 'top 50%',
				endTrigger: '#sec01',
				end: 'top -=2000',
				scrub: 0.5,
			}
		})
		.fromTo(".top_text", {
			yPercent: 0
		}, {
			yPercent: 250,
			ease: 'none',
			duration: 5
		}, 0)
		.fromTo(".top_text .text1", {
			xPercent: 0,
		}, {
			xPercent: -100,
			ease: 'none',
			duration: 5
		}, 1)
		.fromTo(".top_text .text2", {
			xPercent: 0,
		}, {
			xPercent: 100,
			ease: 'none',
			duration: 5
		}, 1)
		.fromTo(".top_text .text3", {
			xPercent: 0,
		}, {
			xPercent: 150,
			ease: 'none',
			duration: 5
		}, 1)

	var tt1 = gsap.timeline({
			scrollTrigger: {
				trigger: '#sec01',
				start: 'top bottom',
				endTrigger: '#sec01',
				end: 'top -=2000',
				scrub: 0.5,
			}
		})
		.fromTo(".mid_text", {
			yPercent: 0
		}, {
			yPercent: -100,
			ease: 'none',
			duration: 5
		}, 1)
		.fromTo("p.img01", {
			yPercent: 0
		}, {
			yPercent: -200,
			ease: 'none',
			duration: 4
		}, 1)
		.fromTo("p.img02", {
			yPercent: 0
		}, {
			yPercent: -150,
			ease: 'none',
			duration: 5
		}, 1)
		.fromTo("p.img03", {
			yPercent: 0
		}, {
			yPercent: -50,
			ease: 'none',
			duration: 2
		}, 1)
		.fromTo("p.img04", {
			yPercent: 0
		}, {
			yPercent: -300,
			ease: 'none',
			duration: 3
		}, 1)


	// sec02 영역
	gsap.timeline({
			scrollTrigger: {
				trigger: "#sec02",
				start: "top 85%",
				end: "top 50%",
				scrub: 2,
			}
		})
		.fromTo("#sec02 .txt1", {
			opacity: 1
		}, {
			opacity: 1,
			ease: 'none',
			duration: 2
		}, 1)
		.fromTo("#sec02 .txt2", {
			y: '50%',
			opacity: 0
		}, {
			y: '0%',
			opacity: 1,
			ease: 'none',
			duration: 2
		}, 2)

	gsap.timeline({
			scrollTrigger: {
				trigger: "#sec02",
				start: "bottom 100%",
				end: "bottom -=1000",
				scrub: 0.1,
				pin: true
			}
		})
		.fromTo("#sec02 .circle_img img.cir_img2", {
			opacity: 0
		}, {
			opacity: 1,
			ease: 'none',
			duration: 0.3
		}, 0)
		.fromTo("#sec02 .circle_img img.cir_img3", {
			opacity: 0
		}, {
			opacity: 1,
			ease: 'none',
			duration: 0.3
		}, 1)
		.fromTo("#sec02 .circle_img img.cir_img4", {
			opacity: 0
		}, {
			opacity: 1,
			ease: 'none',
			duration: 0.3
		}, 2)
		.fromTo("#sec02 .yy_cont .cont_list_wrap", {
			y: 0
		}, {
			y: '-27.0832vw',
			ease: 'none',
			duration: 2
		}, 0)


	// sec03 영역
	gsap.timeline({
			scrollTrigger: {
				trigger: "#sec03",
				start: "top 50%",
				//end: "top 0%",
				pin: false,
				scrub: 0.8,
			}
		})
		.to("#abuot #sec03 .sec_wrap .sec_tit .small.text1", {
			fontSize: '1.9791vw',
			lineHeight: '3.1vw',
			height: '3.1vw',
			xPercent: 28,
			top: '10vw',
			ease: 'none'
		}, 0)
		.to("#abuot #sec03 .sec_wrap .sec_tit .small.text2", {
			fontSize: '1.9791vw',
			lineHeight: '3.1vw',
			height: '3.1vw',
			xPercent: 23.5,
			top: '12.6vw',
			ease: 'none'
		}, 0)
		.to("#abuot #sec03 .sec_wrap .sec_tit .small p span", {
			top: '0vw',
			width: '0.4166vw',
			height: '0.4166vw',
			ease: 'none'
		}, 0)
		.to("#abuot #sec03 .sec_wrap .wiabout_list1", {
			y: '-29%',
			ease: 'none'
		}, 0)
		.to("#abuot #sec03 .sec_wrap .wiabout_list2", {
			y: '-32%',
			ease: 'none'
		}, 0)

		.to('#title', {
			top: '98.07vw',
			ease: 'power3.inOut',
			duration: 1
		}, 0.5) // 텍스트 나오는 모션
		.to('.cover', {
			height: 0,
			ease: 'none',
			duration: 1
		}, 1)
})
