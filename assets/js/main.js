$(function(){

    //메인 텍스트 효과
    gsap.set('.sc-about .txt',{overflow:'hidden'})
    gsap.set('.sc-about .txt span',{yPercent:100})

    const mainTxt = gsap.to('.sc-about .txt span',{
        yPercent:0,
        paused:true
    })
    
    const load = gsap.timeline({
        paused:true,
        onStart: function(){
            $('.page-load').addClass('active')
            $('body').addClass('hidden');
        },
        onComplete: function(){
            $('.page-load').removeClass('active')
            $('body').removeClass('hidden')
            mainTxt.play();
            load.remove();
        }
    })

    load.addLabel('motion')
    .to('.load-wrap',{opacity:1, delay: .3, duration:1.5}, 'motion')
    .to('.page-load .logo', {opacity: 1, delay: 1, duration:3}, 'motion')
    .to('.page-load', {yPercent: -100, ease: Power3.easeIn, delay:1.5, duration:2},'motion')
    .set('.page-load', {display: 'none', delay: 3.5, duration: 2}, 'motion')
    .fromTo('.sc-about',{yPercent:100, opacity:0}, {yPercent:0, opacity:1, duration:1, delay: 3.2, ease: Power3.easeOut}, 'motion')
    load.play();



    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
      });

    
    //메뉴 열림

    $('.btn-menu').click(function(e){
        e.preventDefault();
        if($('.btn-menu .line').hasClass('active')){
            $('.btn-menu .line').removeClass('active')
            $('.side-menu').removeClass('active')
            $('body').removeClass('hidden')
            motion1.reverse()
        } else{
            $('.btn-menu .line').addClass('active')
            $('.side-menu').addClass('active')
            $('body').addClass('hidden')
            motion1.restart()
        }
    })




    //사이드 메뉴 텍스트 페이드업
    // gsap.set('.menu-left .gnb-item',{overflow:'hidden', opacity:0})
    // gsap.set('.menu-left .gnb-item a',{yPercent:100})

    const motion1 = gsap.from('.side-menu .gnb-item a',{
        yPercent:100,
        stagger:0.3,
        opacity:0,
        paused:true,
    })

    
    //side-menu 링크 클릭 시 효과

    var sMenu = $(".side-menu");

    $('.gnb-item a').on("click", function (e) {
        sMenu.click().removeClass("active");
        $('.btn-menu .line').removeClass('active')
        $('body').removeClass('hidden')
    });



      $(document).ready(function(){
        $('.gnb-item a').click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1500);
        });
    });





    //서브 텍스트 효과
    gsap.set('.sc-about .sub-txt',{overflow:'hidden', opacity:0})
    gsap.set('.sc-about .sub-txt',{yPercent:100})

    const subTxt = gsap.to('.sc-about .sub-txt',{
        yPercent:0,
        opacity:1
    })

    //메인 비주얼 이미지 줌아웃 효과
    gsap.set('.sc-about .main-visual',{overflow:'hidden',opacity:0})
    gsap.set('.sc-about .main-visual',{yPercent:100})

    const mainImg = gsap.to('.sc-about .main-visual',{
        yPercent:0,
        duration:1,
        ease: Power4,
        opacity:1,
    })

    gsap.set('.sc-about .main-visual img',{transform: 'scale(1.5)'})

    gsap.to('.sc-about .main-visual img',{
        scale: 1,
        scrollTrigger:{
            trigger: '.sc-about .sub-txt',
            start:"top 30%", //트리거, 윈도우 시작점이 만나야 실행`
            end:"+=80%", //bottom top은 기본값, scrub있을 때만 변경 필요
            // markers:true,
            scrub:1,
            // pin:true
        },
    })
    
    //썸네일 개별 영역 줌아웃
    $('[data-img]').each(function(i,l){
        gsap.from(l,{
            scrollTrigger:{
                trigger: l,
                start:"0 50%", //트리거, 윈도우 시작점이 만나야 실행`
                end:"+=80%", //bottom top은 기본값, scrub있을 때만 변경 필요
                // markers:true,
                scrub:1,
                // pin:true
            },
            scale:1.3,
        })
    })

    //sc-work 텍스트
    gsap.set('.sc-work .headline',{overflow:'hidden', opacity:0})
    gsap.set('.sc-work .headline',{yPercent:100})

    const hdTxt = gsap.to('.sc-work .headline',{
        scrollTrigger:{
            trigger: '.scroll01',
            start:"center 50%", //트리거, 윈도우 시작점이 만나야 실행`
            end:"bottom 70%", //bottom top은 기본값, scrub있을 때만 변경 필요
            // markers:true,
            delay:1,
            scrub:1,
            // pin:true
        },
        yPercent:0,
        delay:1,
        opacity:1
    })

    
    //sc-work 프로젝트 이름 영역

    ScrollTrigger.matchMedia({
        //pc
        "(min-width: 1024px)": function(){
            $('[data-name]').each(function(i,n){
                gsap.from(n,{
                    scrollTrigger:{
                        trigger: n,
                        start:"top 90%", //트리거, 윈도우 시작점이 만나야 실행`
                        // end:"bottom top", //bottom top은 기본값, scrub있을 때만 변경 필요
                        markers:true,
                        // scrub:1,
                    },
                    yPercent: 100,
                    opacity:0
                })
            })
        },
        // mobile
        "(min-width: 320px) and (max-width: 767px)": function(){
            $('[data-name]').each(function(i,n){
                gsap.from(n,{
                    scrollTrigger:{
                        trigger: n,
                        start:"0% 40%", //트리거, 윈도우 시작점이 만나야 실행`
                        // end:"bottom top", //bottom top은 기본값, scrub있을 때만 변경 필요
                        markers:true,
                        // scrub:1,
                    },
                    yPercent: 100,
                    opacity:0
                })
            })
        }
    })

   

    
    
    //btn-down
    $('.i01 .btn-down').click(function(){
        const scrollTop = $('.i02').offset().top;
        $('html, body').animate({scrollTop: scrollTop}, 500);
      });

    //top버튼

    $('.btn-top').click(function(){
                
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });

    
})