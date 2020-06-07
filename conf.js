jsproxy_config({
  ver: '111',
  static_boost: {
    enable: true,
    ver: 62
  },

  
  
   // 节点配置
  node_map: {
    'defalut': {
      label: '第1通道',
      lines: {
        'throbbing-mud-3a87.lettenbweija.workers.dev': 1,
      }
    },
    
     
    'defalut1': {
      label: '第2通道',
      lines: {
        'https://dry-wildflower-f814.lettenbweija.workers.dev': 1,
      }
    },
    
   
    'defalut2': {
      label: '第3通道',
      lines: {
        'https://dawn-rain-e2b1.jeslynijcrtlx.workers.dev': 1,
      }
    },
  
    
      'defalut3': {
      label: '第4通道',
      lines: {
        'https://dawn-rain-e2b1.jeslynijcrtlx.workers.dev': 1,
      },
    },
    
   
      'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 
        '': 1,

      }
    }
  },
    
    
    
   

  /**
   * 默认节点
   */
  node_default: 'defalut',

  /**
   * 加速节点
   */



  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  
 
  /**
   * 
   */


  /**
   * URL 
   */
  url_handler: {
    '': {
      replace: ''
    },
    '': {
      redir: ''
    },
    '': {
      content: 'Hello World'
    },
  }
})
