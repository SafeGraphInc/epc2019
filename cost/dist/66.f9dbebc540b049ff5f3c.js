(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/engine/webgl/enums":1493,"esri/views/2d/engine/Container":1539,"esri/views/2d/layers/LayerView2D":1571,"esri/views/2d/layers/VectorTileLayerView2D":2447,"esri/views/2d/tiling/TileInfoViewPOT":2448,"esri/views/vectorTiles/VectorTileContainer":2455})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1493:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){var i,r,n,l,a,s,o,h,d,c;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.WGLGeometryType||(t.WGLGeometryType={}))[i.FILL=0]="FILL",i[i.LINE=1]="LINE",i[i.MARKER=2]="MARKER",i[i.TEXT=3]="TEXT",i[i.LABEL=4]="LABEL",i[i.NONE=5]="NONE",i[i.UNKNOWN=6]="UNKNOWN",i[i.COUNT=7]="COUNT",(r=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[r.SUCCEEDED=0]="SUCCEEDED",r[r.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(n=t.WGLDrawPhase||(t.WGLDrawPhase={}))[n.NONE=0]="NONE",n[n.MAP=1]="MAP",n[n.LABEL=2]="LABEL",n[n.LABEL_ALPHA=4]="LABEL_ALPHA",n[n.HITTEST=8]="HITTEST",n[n.HIGHLIGHT=16]="HIGHLIGHT",n[n.CLIP=32]="CLIP",n[n.DEBUG=64]="DEBUG",n[n.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(l=t.VVType||(t.VVType={}))[l.SIZE=0]="SIZE",l[l.COLOR=1]="COLOR",l[l.OPACITY=2]="OPACITY",l[l.ROTATION=3]="ROTATION",(a=t.WGLVVFlag||(t.WGLVVFlag={}))[a.NONE=0]="NONE",a[a.OPACITY=1]="OPACITY",a[a.COLOR=2]="COLOR",a[a.ROTATION=4]="ROTATION",a[a.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",a[a.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",a[a.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",a[a.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(s=t.WGLVVTarget||(t.WGLVVTarget={}))[s.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",s[s.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",s[s.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",s[s.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(o=t.CapType||(t.CapType={}))[o.UNKNOWN=0]="UNKNOWN",o[o.BUTT=1]="BUTT",o[o.ROUND=2]="ROUND",o[o.SQUARE=3]="SQUARE",(h=t.JoinType||(t.JoinType={}))[h.UNKNOWN=0]="UNKNOWN",h[h.MITER=1]="MITER",h[h.BEVEL=2]="BEVEL",h[h.ROUND=3]="ROUND",(d=t.EsriSymbolType||(t.EsriSymbolType={})).SIMPLE_MARKER="esriSMS",d.SIMPLE_LINE="esriSLS",d.SIMPLE_FILL="esriSFS",d.PICTURE_MARKER="esriPMS",d.PICTURE_FILL="esriPFS",d.TEXT="esriTS",(c=t.EsriSymbolTypeKebab||(t.EsriSymbolTypeKebab={})).SIMPLE_MARKER="simple-marker",c.SIMPLE_LINE="simple-line",c.SIMPLE_FILL="simple-fill",c.PICTURE_MARKER="picture-marker",c.PICTURE_FILL="picture-fill",c.TEXT="text"}.apply(null,r))||(e.exports=n)},1539:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(1528)],void 0===(n=function(e,t,i,r){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ATTACHING=0]="ATTACHING",e[e.DETACHING=1]="DETACHING",e[e.RENDERING=2]="RENDERING",e[e.DONE=3]="DONE"}(n||(n={}));var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=n.DONE,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=0,t=this.children.concat(this._childrenToDetach);e<t.length;e++){var i=t[e];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=n.ATTACHING,this.attachChildren(),this._renderPhase=n.DETACHING;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=n.RENDERING,this.renderChildren(e),this._renderPhase=n.DONE,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=n.RENDERING&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],function(e,t){e.delete(t)}(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=n.RENDERING&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=n.RENDERING&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=n.RENDERING&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>n.RENDERING&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=l}.apply(null,r))||(e.exports=n)},1571:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(0),i(14),i(2),i(1532)],void 0===(n=function(e,t,i,r,n,l,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()}),n.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var l=!r,a=!n;!l&&e<=r&&(l=!0),!a&&e>=n&&(a=!0),t=l&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([l.property()],t.prototype,"attached",void 0),r([l.property()],t.prototype,"container",void 0),r([l.property()],t.prototype,"moving",void 0),r([l.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([l.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([l.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([l.property()],t.prototype,"updateRequested",void 0),r([l.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([l.property()],t.prototype,"view",void 0),r([l.subclass("esri.views.2d.layers.LayerView2D")],t)}(l.declared(a))}.apply(null,r))||(e.exports=n)},2447:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1),i(0),i(41),i(17),i(6),i(2),i(1571),i(2448),i(143),i(473),i(474),i(2020),i(2455),i(2022)],void 0===(n=function(e,t,i,r,n,l,a,s,o,h,d,c,p,u,f,y){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._fetchQueue=null,t._tileRequests=new Map,t._handles=new l,t._invalidateStyle=!1,t.container=new f,t}return i(t,e),t.prototype.initialize=function(){var e=this;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._tileHandler=new u(this.layer,window.devicePixelRatio||1,!0,this.container),this.handles.add(this.watch("layer.currentStyleInfo",function(t){e._start()}))},t.prototype.destroy=function(){this._stop(),this.container.dispose(),this._tileHandler.destroy(),this._tileHandler=null},t.prototype.hitTest=function(e,t){var i=this;return this.suspended?a.resolve(null):this.container.hitTest(e,t).then(function(e){var t=i._tileHandler.getStyleRepository().layers;if(null===e||e<0||e>=t.length)return null;var r=t[e],l=new n({attributes:{layerId:e,layerName:r.id}});return l.layer=i.layer,l.sourceLayer=i.layer,l})},t.prototype.update=function(e){this.notifyChange("updating");var t=this._tileHandlerPromise;if(t&&t.isFulfilled()){if(e.pixelRatio!==this._tileHandler.devicePixelRatio)return this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio);this._invalidateStyle&&(this._issueStyleInvalidation(e),this._invalidateStyle=!1),this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();for(var i=0,r=this.container.children;i<r.length;i++){var n=r[i];this._tileHandler.updateTile(n,e)}}},t.prototype.attach=function(){var e=this;this._start(),this._handles.add(this.layer.on("paint-change",function(t){return e.container.requestRender()})),this._handles.add(this.layer.on("layout-change",function(t){e._invalidateStyle=!0,e.requestUpdate()}))},t.prototype.detach=function(){this._stop(),this._handles.removeAll()},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&t.currentStyleInfo){var i=this.view.scale,r=t.currentStyleInfo;if(r&&r.layerDefinition){var n=r.layerDefinition;n.minScale&&n.minScale<i&&(e=!1),n.maxScale&&n.maxScale>i&&(e=!1)}}return e},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!this._tileHandlerPromise||!this._tileHandlerPromise.isFulfilled()||!e},t.prototype.acquireTile=function(e){var t=this,i=d.pool.acquire();i.set(e.level,e.row,e.col,e.world);var r=this.updateParameters.state.rotation,n=this._tileHandler.getStyleRepository(),l=y.pool.acquire(i,i,this.layer.tileInfo,n,r);return this._tileHandlerPromise.then(function(){var e=t._tileHandler.getRefKey(i).then(function(e){return e?(l.refKey=e,t._fetchQueue.push(l.key).then(function(e){l.setData(e.tileData,e.client),l.once("attach",function(){return t.requestUpdate()}),t.container.addChild(l),t.notifyChange("updating")})):(l.setData(null,null),l.once("attach",function(){return t.requestUpdate()}),void t.container.addChild(l))});t._tileRequests.set(i.id,e),t.notifyChange("updating")}),l},t.prototype.releaseTile=function(e){var t=e.key.id,i=this._tileRequests.get(t);i&&(i.isFulfilled()||i.cancel(),this._tileRequests.delete(t)),this.container.removeChild(e),this.requestUpdate(),e.once("detach",function(){return y.pool.release(e)}),this.notifyChange("updating")},t.prototype._start=function(){var e=this;if(this._stop(),this.layer.currentStyleInfo&&this.attached){var t=this._tileHandler.start().then(function(){e._tileHandlerPromise===t&&(e._tileStrategy=new p({cachePolicy:"keep",coveragePolicy:"smallest",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:e._tileInfoView}),e._fetchQueue=new c({tileInfoView:e._tileInfoView,process:function(t){return e._getTileData(t)}}),e.container.initialize(e._tileHandler.spriteMosaic,e._tileHandler.glyphMosaic,e.layer.tileInfo,e._tileInfoView),e.requestUpdate())});this._tileHandlerPromise=t}},t.prototype._stop=function(){this._tileHandlerPromise&&(this._tileHandlerPromise.isFulfilled()?this._tileHandlerPromise.isResolved()&&(this._tileHandlerPromise=null,this._fetchQueue.destroy(),this._fetchQueue=null,this._tileStrategy.destroy(),this._tileStrategy=null,this.container.removeAllChildren(),this._tileHandler.stop(),y.pool.prune()):(this._tileHandlerPromise.cancel(),this._tileHandlerPromise=null))},t.prototype._getTileData=function(e){return this._tileHandler.getTileData(e,this.updateParameters.state.rotation)},t.prototype._issueStyleInvalidation=function(e){var t=this;this._tileHandler.updateStyle().then(function(){t._fetchQueue.pause(),t._fetchQueue.clear(),t._tileRequests.forEach(function(e,t){e.cancel()}),t._tileRequests.clear(),t._fetchQueue.resume(),t.requestUpdate()})},r([s.property({dependsOn:["view.scale","layer.currentStyleInfo"]})],t.prototype,"suspended",void 0),r([s.subclass("esri.views.2d.layers.VectorTileLayerView2D")],t)}(s.declared(o))}.apply(null,r))||(e.exports=n)},2448:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(0),i(202),i(466),i(143)],void 0===(n=function(e,t,i,r,n,l,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._fullCacheLodInfos=null,t._levelByScale={},t}return i(t,e),t.prototype.getTileParentId=function(e){var t=a.pool.acquire(e),i=0===t.level?null:a.getId(t.level-1,t.row>>1,t.col>>1,t.world);return a.pool.release(t),i},t.prototype.getTileCoverage=function(t,i,r){var n=e.prototype.getTileCoverage.call(this,t,i,r);if(!n)return n;var l=1<<n.lodInfo.level;return n.spans=n.spans.filter(function(e){return e.row>=0&&e.row<l}),n},t.prototype.scaleToLevel=function(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];var t=this._fullCacheLodInfos;if(e>t[0].scale)return t[0].level;for(var i=void 0,r=void 0,n=0;n<t.length-1;n++)if(e>(r=t[n+1]).scale)return(i=t[n]).level+(i.scale-e)/(i.scale-r.scale);return t[t.length-1].level},t.prototype._initializeFullCacheLODs=function(e){var t;if(0===e[0].level)t=e.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}});else{var i=this.tileInfo.size[0],r=this.tileInfo.spatialReference;t=n.create({size:i,spatialReference:r}).lods.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}})}for(var l=0;l<t.length;l++)this._levelByScale[t[l].scale]=t[l].level;this._fullCacheLodInfos=t},t}(l)}.apply(null,r))||(e.exports=n)},2455:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(18),i(6),i(36),i(1539),i(1493),i(1523),i(2023)],void 0===(n=function(e,t,i,r,n,l,a,s,o,h){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._renderer=new h,t._tileCoordinateScale=l.vec3f32.create(),t._orientationVec=l.vec3f32.fromValues(0,0,1),t._displayScale=l.vec3f32.create(),t._defaultTransform=l.mat4f32.create(),t._displayWidth=0,t._displayHeight=0,t._pointToCallbacks=new Map,t}return i(t,e),t.prototype.initialize=function(e,t,i,r){this._renderer.initialize(e,t),this._tileInfoView=r,this._tileInfo=i},t.prototype.dispose=function(){this._renderer&&this._renderer.dispose(),e.prototype.dispose.call(this)},t.prototype.hitTest=function(e,t){var i=this,r=[e,t];return n.create(function(e,t){i._pointToCallbacks.set(r,{resolve:e,reject:t}),i.requestRender()},function(){i._pointToCallbacks.has(r)&&i._pointToCallbacks.delete(r)})},t.prototype.renderChildren=function(t){var i=this;if(0!==this.children.length&&this._tileInfoView&&t&&t.state&&(t.drawPhase===s.WGLDrawPhase.MAP||t.drawPhase===s.WGLDrawPhase.HITTEST)){var n=t.state,l=this.stage.context,a=this._renderer;a.initializeProgramCache(this.stage.context),a.setGlobalOpacity(l,t,this.opacity),l.setDepthWriteEnabled(!0),l.setStencilWriteMask(255),l.setClearDepth(1),l.setClearStencil(0),l.clear(l.gl.DEPTH_BUFFER_BIT|l.gl.STENCIL_BUFFER_BIT),l.setDepthWriteEnabled(!1);var o=t;o.displayLevel=this._tileInfoView.scaleToLevel(n.scale),o.requiredLevel=this._tileInfoView.getSmallestInfoForScale(n.scale).level,o.renderer=this._renderer,this.sortChildren(function(e,t){return e.key.level-t.key.level});for(var h=this.children.length,d=1;d<=h;d++){var c=this.children[d-1];c.attached&&c.visible&&(c.stencilData.reference=d,c.stencilData.mask=255)}if(this._updateTilesTransform(o.state,o.requiredLevel,this.children),l.setDepthWriteEnabled(!0),this._renderer.setStateParams(o.state,o.pixelRatio,o.displayLevel),this._renderer.drawClippingMasks(l,this.children),l.setStencilWriteMask(0),l.setBlendFunctionSeparate(1,771,1,771),l.setStencilOp(7680,7680,7681),l.setDepthFunction(515),l.setBlendingEnabled(!1),l.setStencilTestEnabled(!0),l.setDepthTestEnabled(!0),l.setDepthWriteEnabled(!0),o.drawphase=0,e.prototype.renderChildren.call(this,o),l.setDepthWriteEnabled(!1),l.setBlendingEnabled(!0),o.drawphase=1,e.prototype.renderChildren.call(this,o),o.drawphase=2,e.prototype.renderChildren.call(this,o),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),a.applyGlobalOpacity(l,t,this.opacity),r("esri-vector-tiles-debug"))for(var p=0,u=this.children;p<u.length;p++){var f=u[p];f.attached&&f.visible&&this._renderer.renderTileInfo(l,f)}this._pointToCallbacks.size>0&&(this._pointToCallbacks.forEach(function(e,t){e.resolve(i._hitTest(o,t[0],t[1]))}),this._pointToCallbacks.clear()),this._renderer.needsRedraw()&&this.requestRender()}},t.prototype.removeAllChildren=function(){for(var t=0;t<this.children.length;t++)this.children[t].dispose();e.prototype.removeAllChildren.call(this)},t.prototype._hitTest=function(e,t,i){var r=this._tileInfoView.getSmallestInfoForScale(e.state.scale).level,n=[0,0];e.state.toMap(n,[t,i]);var l=e.state.clone(),a=l.viewpoint.clone(),s=a.targetGeometry;s.x=n[0],s.y=n[1],a.targetGeometry=s,l.viewpoint=a,l.size=[3,3],this._renderer.setStateParams(l,e.pixelRatio,e.displayLevel);var o={context:this.stage.context,drawPhase:0,pixelRatio:e.pixelRatio,stationary:e.stationary,globalOpacity:e.globalOpacity,displayLevel:e.displayLevel,requiredLevel:e.requiredLevel,renderer:e.renderer,layerOpacity:e.layerOpacity,state:l,drawphase:3},h=this._renderer.hitTest(o,t,i,this.children,r,3,this._updateTilesTransform.bind(this));return h&&0!==h.length?h[0]:null},t.prototype._updateTilesTransform=function(e,t,i){var r=1/e.size[0],n=1/e.size[1],l=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lodAt(t).resolution,e.resolution,e.rotation,this._tileInfo.size[1],4096,e.size[0],e.size[1],this._defaultTransform);for(var a=0,s=i;a<s.length;a++){var o=s[a];e.toScreen(l,o.coords),l[1]=e.size[1]-l[1],o.tileTransform.displayCoord[0]=2*l[0]*r-1,o.tileTransform.displayCoord[1]=2*l[1]*n-1,o.key.level===t&&4096===o.coordRange?o.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lodAt(o.key.level).resolution,e.resolution,e.rotation,this._tileInfo.size[1],o.coordRange,e.size[0],e.size[1],o.tileTransform.transform)}},t.prototype._calculateRelativeViewProjMat=function(e,t,i,r,n,a,s,h){var d=.125;512!==r&&4096!==n&&(d=r/n);var c=d*(e/t);this._tileCoordinateScale.set([c,c,1]),a===this._displayWidth&&s===this._displayHeight||(this._displayScale.set([2/a,-2/s,1]),this._displayWidth=a,this._displayHeight=s),l.mat4.identity(h),l.mat4.scale(h,h,this._tileCoordinateScale),l.mat4.rotate(h,h,-i*o.C_DEG_TO_RAD,this._orientationVec),l.mat4.scale(h,h,this._displayScale),l.mat4.transpose(h,h)},t}(a.Container)}.apply(null,r))||(e.exports=n)}}]);