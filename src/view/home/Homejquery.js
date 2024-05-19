import $ from 'jquery'; 

(function(){
    var words = [
        'Website Development',
        'Logo Design',
        'Social Media Management',
        'UI/UX Design',
        'Digital Marketing',
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 9000);
      
})();
(function(){
    var words = [
        "Sculpting digital marvels, we metamorphose concepts into flawless websites. Amplify your digital footprint with our tailored web solutions.",
        "Forge a memorable brand identity with our bespoke logo design solutions. Our expert designers blend creativity and strategy to craft logos that resonate with your audience and stand the test of time.",
        "Enhance your online brand image with our expert social media management services. From content curation to engagement strategies, we craft compelling narratives that amplify your presence and foster meaningful connections with your audience.",
        "Harness the power of intuitive UI/UX design to captivate your audience and elevate user engagement. Our expert team combines creativity and functionality to craft seamless digital experiences that leave a lasting impression.",
        "Maximize your online reach and conversions with our dynamic digital marketing strategies. From SEO to social media, we tailor campaigns to propel your brand to new heights in the digital landscape.",
        ], i = 0;
    setInterval(function(){
        $('#changingpara').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 9000);
      
})();
