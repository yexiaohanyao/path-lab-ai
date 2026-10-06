/* Fixed entrance story: two real papers share deep-learning segmentation.
   Their research illustrations animate; the selected papers never rotate. */
window.PAPER_ENTRY_PAIRS = [
  {
    id:'segmentation', method:'深度学习图像分割', kind:'共同 AI 方法',
    connection:'研究对象不同，都要在图像中分出目标区域。',
    papers:[
      {id:'paper-bb1d71774332cac3',label:'视网膜结构分割',visual:'retina',caption:'OCT 影像 · nnU-Net',context:'OCT 影像中的视网膜结构'},
      {id:'paper-15e03bf8ed6e92cb',label:'纳米颗粒分割',visual:'particles',caption:'电镜图像 · 神经网络',context:'电镜图像中的纳米颗粒'}
    ]
  }
];
