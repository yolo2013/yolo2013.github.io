<template>
  <footer class="gl-footer">
    <div class="footer-widgets">
      <div class="widget widget-text">
        <h2>About Yao</h2>
        <p>The Obsidian theme, like the naturally occurring volcanic glass of the same name, possesses an inherent
          allure that's stylish in appearance and practical in purpose. With distinctive background options and various
          customization possibilities, Obsidian makes it easy to create the ultimate hub for your online identity.</p>
      </div>
      <div class="widget widget-image">
        <h2>Better late than never</h2>
        <div>
          <a href="#"><img src="https://img3.doubanio.com/lpic/s27289592.jpg" width="1000" height="1000" /></a>
        </div>
      </div>
    </div>

    <div class="credits">
      <a>Powered By 七牛云</a>
    </div>
  </footer>
</template>
<style>
  .footer-widgets {
    padding-top: 1.95rem;
    padding-bottom: 1.95rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
  }
  .widget {
    padding: 0 20px;
  }

  @media (min-width: 600px) {
    .widget-text {
      flex: 2;
    }
    .widget-image {
      flex: 1;
    }
  }

  .credits {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    line-height: 1.53846154;
    margin-left: -20px;
    margin-right: -20px;
    padding: 1.53846154em;
    text-align: center;
    text-transform: uppercase;
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
