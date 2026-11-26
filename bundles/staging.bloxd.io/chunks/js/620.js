export const id = 620;
export const ids = [620];
export const modules = {
  44717: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => BV
    });
    var JV = xV(38296),
      YV = xV(38269),
      UV = xV(41738),
      yV = xV(41398),
      pV = xV(41190),
      QV = xV(39870),
      nV = xV(41383),
      wV = xV(41413),
      ZV = xV(38278),
      vV = xV(41145),
      rV = xV(41353),
      kV = xV(41458);
    class bV {
      get renderList() {
        return this._renderList
      }
      set renderList(VV) {
        this._renderList !== VV && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), VV && (this._unObserveRenderList = (0, ZV.i)(VV, this._renderListHasChanged)), this._renderList = VV)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(VV) {
        VV !== this._disableImageProcessing && (this._disableImageProcessing = VV, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(VV) {
        this._disableDepthPrePass = VV, this._renderingManager.disableDepthPrePass = VV
      }
      get name() {
        return this._name
      }
      set name(VV) {
        if (this._name !== VV) {
          if (this._name = VV, this._sceneUBOs)
            for (let VV = 0; VV < this._sceneUBOs.length; ++VV) this._sceneUBOs[VV].name = `Scene ubo #${VV} for ${this.name}`;
          if (this._scene)
            for (let VV = 0; VV < this._renderPassIds.length; ++VV) {
              const eV = this._renderPassIds[VV];
              this._engine._renderPassNames[eV] = `${this._name}#${VV}`
            }
        }
      }
      get renderPassIds() {
        return this._renderPassIds
      }
      get currentRefreshId() {
        return this._currentRefreshId
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      setMaterialForRendering(VV, eV) {
        let xV;
        xV = Array.isArray(VV) ? VV : [VV];
        for (let JV = 0; JV < xV.length; ++JV)
          for (let VV = 0; VV < this.options.numPasses; ++VV) {
            let YV = xV[JV];
            xV[JV].JC && (YV = xV[JV].XUV), YV.setMaterialForRenderPass(this._renderPassIds[VV], void 0 !== eV ? Array.isArray(eV) ? eV[VV] : eV : void 0)
          }
      }
      _freezeActiveMeshes(VV) {
        this._freezeActiveMeshesCancel = (0, vV.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, VV)
            for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((VV, eV) => {
          this._freezeActiveMeshesCancel = null, eV ? (QV.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), VV && QV.b.Error(VV)) : (QV.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), VV && (QV.b.Error(VV), VV.stack && QV.b.Error(VV.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._unFreeze();
        this._isFrozen = !1
      }
      constructor(VV, eV, xV) {
        this._unObserveRenderList = null, this._renderListHasChanged = (VV, eV) => {
          const xV = this._renderList ? this._renderList.length : 0;
          if (0 === eV && xV > 0 || 0 === xV)
            for (const JV of this._scene.meshes) JV._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new JV.c, this.onAfterRenderObservable = new JV.c, this.onBeforeRenderingManagerRenderObservable = new JV.c, this.onAfterRenderingManagerRenderObservable = new JV.c, this.onInitRenderingObservable = new JV.c, this.onFinishRenderingObservable = new JV.c, this.onFastPathRenderObservable = new JV.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new rV.f(256), this._activeBoundingBoxes = new rV.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = VV, this._scene = eV, this._engine = this._scene.sk(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...xV
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new wV.b(eV), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const VV of this._scene.lights) VV.getTypeID() === kV.b.LIGHTTYPEID_CLUSTERED_CONTAINER && VV.isSupported && VV._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let VV = 0; VV < this.options.numPasses; ++VV) this._engine.releaseRenderPassId(this._renderPassIds[VV]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let VV = 0; VV < this.options.numPasses; ++VV) this._renderPassIds[VV] = this._engine.createRenderPassId(`${this.name}#${VV}`)
      }
      _createSceneUBO(VV, eV) {
        const xV = this._scene.sk(),
          JV = new nV.b(xV, void 0, eV, VV, void 0, !1);
        return JV.addUniform("viewProjection", 16), eV && JV.addUniform("viewProjectionR", 16), JV.addUniform("view", 16), JV.addUniform("projection", 16), JV.addUniform("vEyePosition", 4), JV.addUniform("inverseProjection", 16), JV
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const VV = this._engine._currentRenderTarget,
          eV = !(!VV || !VV.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const VV = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${VV} for ${this.name}`, eV)), this._sceneUBOIsMultiview.push(eV)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== eV && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, eV), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = eV);
        const xV = this._sceneUBOs[this._currentSceneUBOIndex++];
        return xV.unbindEffect(), xV
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(VV) {
        this._refreshRate = VV, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(VV, eV) {
        this.prepareRenderList(), this.initRender(VV, eV);
        const xV = this._checkReadiness();
        return this.finishRender(), xV
      }
      prepareRenderList() {
        const VV = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let eV = 0; eV < this._waitingRenderList.length; eV++) {
              const xV = this._waitingRenderList[eV],
                JV = VV.getMeshById(xV);
              JV && this.renderList.push(JV)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const VV = this._scene.meshes;
          for (let eV = 0; eV < VV.length; eV++) {
            const xV = VV[eV];
            this.renderListPredicate(xV) && this.renderList.push(xV)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(VV, eV) {
        const xV = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), xV && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(xV.getViewMatrix(), xV.getProjectionMatrix(!0)), this._scene._activeCamera = xV, this._engine.setViewport(xV.rigParent ? xV.rigParent.viewport : xV.viewport, VV, eV)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const VV = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (VV.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), VV._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== VV.activeCamera && VV.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), VV.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[VV], this.onBeforeRenderObservable.notifyObservers(VV);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(VV);
        else {
          const eV = this._prepareRenderingManager(VV),
            xV = this._scene.getOutlineRenderer?.(),
            JV = xV?.enabled;
          xV && (xV.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(VV), this._renderingManager.render(this.customRenderFunction, eV, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(VV), xV && (xV.enabled = JV)
        }
        eV || this.onAfterRenderObservable.notifyObservers(VV), this._engine.currentRenderPassId = xV
      }
      _checkReadiness() {
        const VV = this._scene,
          eV = this._engine.currentRenderPassId;
        let xV = !0;
        VV.getViewMatrix() || VV.updateTransformMatrix();
        const JV = this.options.numPasses;
        for (let YV = 0; YV < JV && xV; YV++) {
          const eV = this.renderList ? this.renderList : VV.frameGraph ? VV.meshes : VV.getActiveMeshes().data,
            UV = this.renderList || VV.frameGraph ? eV.length : VV.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[YV], this.onBeforeRenderObservable.notifyObservers(YV);
          let yV = null,
            pV = UV;
          this.getCustomRenderList && (yV = this.getCustomRenderList(YV, eV, UV), yV && (pV = yV.length)), yV || (yV = eV), this.options.doNotChangeAspectRatio || VV.updateTransformMatrix(!0);
          for (let VV = 0; VV < pV && xV; ++VV) {
            const eV = yV[VV];
            if (!eV.isEnabled() || eV.isBlocked || !eV.isVisible || !eV.hT) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(eV, this.refreshRate, !0)) {
                xV = !1;
                continue
              }
            } else if (!eV.isReady(!0)) {
              xV = !1;
              continue
            }
            let JV = eV._edgesRenderer,
              YV = eV.hasThinInstances;
            if (eV.JC) {
              const VV = eV.XUV;
              VV.edgesShareWithInstances && VV._edgesRenderer?.isEnabled && (JV = VV._edgesRenderer, YV = !0)
            } else eV.NUV && eV.edgesShareWithInstances && (YV = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && JV?.isEnabled && (JV.isReady(YV) || (xV = !1))
          }
          if (this.renderParticles && VV.particlesEnabled) {
            const eV = this.particleSystemList || VV.lT;
            for (const VV of eV) VV.isReady() || (xV = !1)
          }
          if (this.renderSprites && VV.spritesEnabled) {
            const eV = this.spriteManagerList || VV.spriteManagers;
            if (eV)
              for (const JV of eV) VV.activeCamera && 0 === (JV.layerMask & VV.activeCamera.layerMask) || JV.isReady && !JV.isReady() && (xV = !1)
          }
          this.onAfterRenderObservable.notifyObservers(YV), JV > 1 && (VV.incrementRenderId(), VV.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = eV, xV
      }
      _prepareRenderingManager() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this._scene;
        let JV, YV, UV = null;
        const yV = this.renderList ? this.renderList : xV.frameGraph ? xV.meshes : xV.getActiveMeshes().data,
          pV = this.renderList || xV.frameGraph ? yV.length : xV.getActiveMeshes().length;
        if (this.getCustomRenderList && (UV = this.getCustomRenderList(VV, yV, pV)), UV) JV = UV.length, YV = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !eV && !this._engine.isWebGPU) return yV;
          this._defaultRenderListPrepared = !0, UV = yV, JV = pV, YV = !this.renderList || this.forceLayerMaskCheck
        }
        const QV = xV.activeCamera,
          nV = this.cameraForLOD ?? QV,
          wV = xV.getBoundingBoxRenderer?.();
        if (xV._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && wV) {
            wV.reset();
            for (let VV = 0; VV < this._activeBoundingBoxes.length; VV++) {
              const eV = this._activeBoundingBoxes.data[VV];
              wV.renderList.push(eV)
            }
          }
          return UV
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), wV && wV.reset(), this.renderMeshes) {
          const VV = xV.getRenderId(),
            eV = xV.getFrameId();
          for (let yV = 0; yV < JV; yV++) {
            const JV = UV[yV];
            if (JV && !JV.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(JV, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!JV.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let UV, yV;
              if (nV) {
                const VV = JV._internalAbstractMeshDataInfo._currentLOD.get(nV);
                VV && VV[1] === eV ? UV = VV[0] : (UV = xV.customLODSelector ? xV.customLODSelector(JV, nV) : JV.getLOD(nV), VV ? (VV[0] = UV, VV[1] = eV) : JV._internalAbstractMeshDataInfo._currentLOD.set(nV, [UV, eV]))
              } else UV = JV;
              if (!UV) continue;
              if (UV !== JV && 0 !== UV.billboardMode && UV.computeWorldMatrix(), UV._preActivateForIntermediateRendering(VV), yV = !(!YV || !QV) && 0 === (JV.layerMask & QV.layerMask), JV.isEnabled() && JV.isVisible && JV.hT && !yV) {
                if (this._activeMeshes.push(JV), UV._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, UV !== JV && UV._activate(VV, !0), this.enableBoundingBoxRendering && wV && wV._preActiveMesh(JV), JV._activate(VV, !0) && JV.hT.length) {
                  JV.JC ? JV._internalAbstractMeshDataInfo._actAsRegularMesh && (UV = JV) : UV._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, UV._internalAbstractMeshDataInfo._isActiveIntermediate = !0, xV._prepareSkeleton(UV);
                  for (let VV = 0; VV < UV.hT.length; VV++) {
                    const eV = UV.hT[VV];
                    this.enableBoundingBoxRendering && wV && wV._evaluateSubMesh(JV, eV), this._renderingManager.dispatch(eV, UV)
                  }
                }
                JV._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && wV && eV)
          for (let ZV = 0; ZV < wV.renderList.length; ZV++) {
            const VV = wV.renderList.data[ZV];
            this._activeBoundingBoxes.push(VV)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const VV = this.particleSystemList || xV.lT;
          for (let eV = 0; eV < VV.length; eV++) {
            const xV = VV[eV],
              JV = xV.emitter;
            xV.isStarted() && JV && (!JV.position || JV.isEnabled()) && this._renderingManager.dispatchParticles(xV)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return UV
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(VV, eV, xV, JV)
      }
      setRenderingAutoClearDepthStencil(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(VV, eV, xV, JV), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const VV = new bV(this.name, this._scene, this.options);
        return this.renderList && (VV.renderList = this.renderList.slice(0)), VV
      }
      dispose() {
        const VV = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          eV = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let xV = 0; xV < eV; xV++) {
          const eV = VV[xV];
          eV && void 0 !== eV.getMaterialForRenderPass(this.renderPassId) && eV.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const xV of this._sceneUBOs) xV.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === bV.REFRESHRATE_RENDER_ONCE && (this.refreshRate = bV.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    bV.REFRESHRATE_RENDER_ONCE = 0, bV.REFRESHRATE_RENDER_ONEVERYFRAME = 1, bV.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var EV = xV(41138);
    class BV extends UV.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(VV) {
        this._objectRenderer.renderListPredicate = VV
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(VV) {
        this._objectRenderer.renderList = VV
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(VV) {
        this._objectRenderer.particleSystemList = VV
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(VV) {
        this._objectRenderer.getCustomRenderList = VV
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(VV) {
        this._objectRenderer.renderParticles = VV
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(VV) {
        this._objectRenderer.renderSprites = VV
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(VV) {
        this._objectRenderer.enableBoundingBoxRendering = VV
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(VV) {
        this._objectRenderer.enableOutlineRendering = VV
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(VV) {
        this._objectRenderer.forceLayerMaskCheck = VV
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(VV) {
        this._objectRenderer.activeCamera = VV
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(VV) {
        this._objectRenderer.cameraForLOD = VV
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(VV) {
        this._objectRenderer.disableImageProcessing = VV
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(VV) {
        this._objectRenderer.customIsReadyFunction = VV
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(VV) {
        this._objectRenderer.customRenderFunction = VV
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(VV) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(VV)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(VV) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(VV)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(VV) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(VV)
      }
      set onClear(VV) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(VV)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(VV) {
        this._objectRenderer._waitingRenderList = VV
      }
      get renderPassId() {
        return this._objectRenderer.renderPassId
      }
      get renderPassIds() {
        return this._objectRenderer.renderPassIds
      }
      get currentRefreshId() {
        return this._objectRenderer.currentRefreshId
      }
      setMaterialForRendering(VV, eV) {
        this._objectRenderer.setMaterialForRendering(VV, eV)
      }
      get isMulti() {
        return this._renderTarget?.isMulti ?? !1
      }
      get renderTargetOptions() {
        return this._renderTargetOptions
      }
      get renderTarget() {
        return this._renderTarget
      }
      _onRatioRescale() {
        this._sizeRatio && this.resize(this._initialSizeParameter)
      }
      set boundingBoxSize(VV) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(VV)) return;
        this._boundingBoxSize = VV;
        const eV = this.dD();
        eV && eV.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(VV, eV, xV) {
        let yV, pV, nV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ZV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          vV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          rV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : UV.f.TRILINEAR_SAMPLINGMODE,
          kV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          EV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          BV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          jV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          qV = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          tV = arguments.length > 13 ? arguments[13] : void 0,
          FV = arguments.length > 14 ? arguments[14] : void 0,
          TV = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          PV = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          AV = !0,
          NV = !1;
        if ("object" === typeof nV) {
          const VV = nV;
          nV = !!VV.generateMipMaps, wV = VV.doNotChangeAspectRatio ?? !0, ZV = VV.type ?? 0, vV = !!VV.isCube, rV = VV.samplingMode ?? UV.f.TRILINEAR_SAMPLINGMODE, kV = VV.generateDepthBuffer ?? !0, EV = !!VV.generateStencilBuffer, BV = !!VV.isMulti, jV = VV.format ?? 5, qV = !!VV.delayAllocation, tV = VV.samples, FV = VV.creationFlags, TV = !!VV.noColorAttachment, PV = !!VV.useSRGBBuffer, yV = VV.colorAttachment, AV = VV.gammaSpace ?? AV, pV = VV.existingObjectRenderer, NV = !!VV.enableClusteredLights
        }
        if (super(null, xV, !nV, void 0, rV, void 0, void 0, void 0, void 0, jV), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new JV.c, this.onAfterUnbindObservable = new JV.c, this.onClearObservable = new JV.c, this.onResizeObservable = new JV.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = YV.o.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(xV = this.dD())) return;
        const XV = this.dD().sk();
        this._gammaSpace = AV, this._coordinatesMode = UV.f.PROJECTION_MODE, this.name = VV, this.isRenderTarget = !0, this._initialSizeParameter = eV, this._dontDisposeObjectRenderer = !!pV, this._processSizeParameter(eV), this._objectRenderer = pV ?? new bV(VV, xV, {
          numPasses: vV ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: wV,
          enableClusteredLights: NV
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const VV = this._scene;
          if (!this._disableEngineStages)
            for (const eV of VV._beforeRenderTargetClearStage) eV.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(XV) : this.skipInitialClear || XV.clear(this.clearColor ?? VV.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || VV.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const eV of VV._beforeRenderTargetDrawStage) eV.action(this, this._currentFaceIndex, this._currentLayer);
          XV._debugPushGroup && XV._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (XV._debugPopGroup && XV._debugPopGroup(), !this._disableEngineStages)
            for (const eV of this._scene._afterRenderTargetDrawStage) eV.action(this, this._currentFaceIndex, this._currentLayer);
          const VV = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const eV of this._scene._afterRenderTargetPostProcessStage) eV.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = VV), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), XV) : QV.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(XV) : this.skipInitialClear || XV.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = XV.onResizeObservable.add((() => {})), this._generateMipMaps = !!nV, this._doNotChangeAspectRatio = wV, BV || (this._renderTargetOptions = {
          generateMipMaps: nV,
          type: ZV,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: kV,
          generateStencilBuffer: EV,
          samples: tV,
          creationFlags: FV,
          noColorAttachment: TV,
          useSRGBBuffer: PV,
          colorAttachment: yV,
          label: this.name
        }, this.samplingMode === UV.f.NEAREST_SAMPLINGMODE && (this.wrapU = UV.f.CLAMP_ADDRESSMODE, this.wrapV = UV.f.CLAMP_ADDRESSMODE), qV || (vV ? (this._renderTarget = xV.sk().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = UV.f.INVCUBIC_MODE, this._textureMatrix = YV.d.Identity()) : this._renderTarget = xV.sk().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== tV && (this.samples = tV)))
      }
      createDepthStencilTexture() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(VV, eV, xV, JV, YV, UV)
      }
      _processSizeParameter(VV) {
        if (VV.ratio) {
          this._sizeRatio = VV.ratio;
          const eV = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(eV.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(eV.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = VV
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(VV) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(VV))
      }
      addPostProcess(VV) {
        if (!this._postProcessManager) {
          const VV = this.dD();
          if (!VV) return;
          this._postProcessManager = new yV.d(VV), this._postProcesses = new Array
        }
        this._postProcesses.push(VV), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (VV)
            for (const VV of this._postProcesses) VV.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(VV) {
        if (!this._postProcesses) return;
        const eV = this._postProcesses.indexOf(VV); - 1 !== eV && (this._postProcesses.splice(eV, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(VV) {
        this._objectRenderer.refreshRate = VV
      }
      _shouldRender() {
        return this._objectRenderer.shouldRender()
      }
      getRenderSize() {
        return this.getRenderWidth()
      }
      getRenderWidth() {
        return this._size.width ? this._size.width : this._size
      }
      getRenderHeight() {
        return this._size.width ? this._size.height : this._size
      }
      getRenderLayers() {
        const VV = this._size.layers;
        if (VV) return VV;
        const eV = this._size.depth;
        return eV || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(VV) {
        const eV = Math.max(1, this.getRenderSize() * VV);
        this.resize(eV)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(VV) {
        const eV = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const xV = this.dD();
        xV && (this._processSizeParameter(VV), this._renderTarget = eV ? xV.sk().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : xV.sk().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(VV, eV)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => xV(44723))).then((VV => this._dumpTools = VV))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const VV = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), VV
      }
      _render() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this.dD();
        if (!xV) return;
        void 0 !== this.useCameraPostProcesses && (VV = this.useCameraPostProcesses);
        const JV = xV.sk();
        if (JV._debugPushGroup && JV._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let YV = 0; YV < 6; YV++) this._renderToTarget(YV, VV, eV), xV.incrementRenderId(), xV.resetCachedMaterial();
          else this._renderToTarget(0, VV, eV);
        else
          for (let YV = 0; YV < this.getRenderLayers(); YV++) this._renderToTarget(0, VV, eV, YV), xV.incrementRenderId(), xV.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), JV._debugPopGroup && JV._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(VV, eV) {
        const xV = VV * eV,
          JV = (0, pV.o)(xV + 16384 / (128 + xV));
        return Math.min((0, pV.e)(VV), JV)
      }
      _bindFrameBuffer() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = this.dD();
        if (!xV) return;
        const JV = xV.sk();
        this._renderTarget && JV.bindFramebuffer(this._renderTarget, this.isCube ? VV : void 0, void 0, void 0, this.ignoreCameraViewport, 0, eV)
      }
      _unbindFrameBuffer(VV, eV) {
        this._renderTarget && VV.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(eV)
        }))
      }
      _prepareFrame(VV, eV, xV, JV) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(eV, xV) : JV && VV.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(eV, xV)
      }
      _renderToTarget(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const YV = this.dD();
        if (!YV) return;
        const UV = YV.sk();
        this._currentFaceIndex = VV, this._currentLayer = JV, this._currentUseCameraPostProcess = eV, this._currentDumpForDebug = xV, this._prepareFrame(YV, VV, JV, eV), this._objectRenderer.render(VV + JV, !0), this._unbindFrameBuffer(UV, VV), this._texture && this.isCube && 5 === VV && UV.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(VV, eV, xV, JV)
      }
      setRenderingAutoClearDepthStencil(VV, eV) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(VV, eV)
      }
      clone() {
        const VV = this.getSize(),
          eV = new BV(this.name, VV, this.dD(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return eV.hasAlpha = this.hasAlpha, eV.level = this.level, eV.coordinatesMode = this.coordinatesMode, this.renderList && (eV.renderList = this.renderList.slice(0)), eV
      }
      serialize() {
        if (!this.name) return null;
        const VV = super.serialize();
        if (VV.renderTargetSize = this.getRenderSize(), VV.renderList = [], this.renderList)
          for (let eV = 0; eV < this.renderList.length; eV++) VV.renderList.push(this.renderList[eV].id);
        return VV
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.dD().sk().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const VV = this.dD();
        if (!VV) return;
        let eV = VV.customRenderTargets.indexOf(this);
        eV >= 0 && VV.customRenderTargets.splice(eV, 1);
        for (const xV of VV.cameras) eV = xV.customRenderTargets.indexOf(this), eV >= 0 && xV.customRenderTargets.splice(eV, 1);
        this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
      }
      _rebuild() {
        this._objectRenderer._rebuild(), this._postProcessManager && this._postProcessManager._rebuild()
      }
      freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups()
      }
      getViewCount() {
        return 1
      }
    }
    BV.REFRESHRATE_RENDER_ONCE = bV.REFRESHRATE_RENDER_ONCE, BV.REFRESHRATE_RENDER_ONEVERYFRAME = bV.REFRESHRATE_RENDER_ONEVERYFRAME, BV.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = bV.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(BV.prototype, "noPrePassRenderer") || Object.defineProperty(BV.prototype, "noPrePassRenderer", (0, EV.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  44699: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      d: () => wV
    });
    var JV = xV(41394),
      YV = xV(39240),
      UV = xV(38296),
      yV = xV(41101),
      pV = xV(41577);
    const QV = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class nV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QV;
        this._fullscreenViewport = new YV.c(0, 0, 1, 1);
        const xV = eV.positions ?? QV.positions,
          UV = eV.indices ?? QV.indices;
        this.engine = VV, this._vertexBuffers = {
          [JV.j.PositionKind]: new JV.j(VV, xV, JV.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = VV.createIndexBuffer(UV), this._indexBufferLength = UV.length, this._onContextRestoredObserver = VV.uk.add((() => {
          this._indexBuffer = VV.createIndexBuffer(UV);
          for (const VV in this._vertexBuffers) {
            this._vertexBuffers[VV]._rebuild()
          }
        }))
      }
      setViewport() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(VV)
      }
      bindBuffers(VV) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, VV)
      }
      applyEffectWrapper(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = eV, this.engine.stencilState.stencilTest = xV, this.engine.enableEffect(VV.drawWrapper), this.bindBuffers(VV.effect), VV.onApplyObservable.notifyObservers({})
      }
      saveStates() {
        this._savedStateDepthTest = this.engine.depthCullingState.depthTest, this._savedStateStencilTest = this.engine.stencilState.stencilTest
      }
      restoreStates() {
        this.engine.depthCullingState.depthTest = this._savedStateDepthTest, this.engine.stencilState.stencilTest = this._savedStateStencilTest
      }
      draw() {
        this.engine.drawElementsType(0, 0, this._indexBufferLength)
      }
      _isRenderTargetTexture(VV) {
        return void 0 !== VV.renderTarget
      }
      render(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!VV.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const xV = null === eV ? null : this._isRenderTargetTexture(eV) ? eV.renderTarget : eV;
        xV && this.engine.bindFramebuffer(xV), this.applyEffectWrapper(VV), this.draw(), xV && this.engine.unBindFramebuffer(xV), this.restoreStates()
      }
      dispose() {
        const VV = this._vertexBuffers[JV.j.PositionKind];
        VV && (VV.dispose(), delete this._vertexBuffers[JV.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.uk.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class wV {
      static RegisterShaderCodeProcessing(VV, eV) {
        eV ? wV._CustomShaderCodeProcessing[VV ?? ""] = eV : delete wV._CustomShaderCodeProcessing[VV ?? ""]
      }
      static _GetShaderCodeProcessing(VV) {
        return wV._CustomShaderCodeProcessing[VV] ?? wV._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(VV) {
        this.options.name = VV
      }
      isReady() {
        return this._drawWrapper.effect?.isReady() ?? !1
      }
      get drawWrapper() {
        return this._drawWrapper
      }
      get effect() {
        return this._drawWrapper.effect
      }
      set effect(VV) {
        this._drawWrapper.effect = VV
      }
      constructor(VV) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new UV.c(void 0, !0), this.onApplyObservable = new UV.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...VV,
          name: VV.name || "effectWrapper",
          engine: VV.engine,
          uniforms: VV.uniforms || VV.uniformNames || [],
          uniformNames: void 0,
          samplers: VV.samplers || VV.samplerNames || [],
          samplerNames: void 0,
          attributeNames: VV.attributeNames || ["position"],
          uniformBuffers: VV.uniformBuffers || [],
          defines: VV.defines || "",
          useShaderStore: VV.useShaderStore || !1,
          vertexUrl: VV.vertexUrl || VV.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: VV.fragmentShader || "pass",
          indexParameters: VV.indexParameters,
          blockCompilation: VV.blockCompilation || !1,
          shaderLanguage: VV.shaderLanguage || 0,
          onCompiled: VV.onCompiled || void 0,
          extraInitializations: VV.extraInitializations || void 0,
          extraInitializationsAsync: VV.extraInitializationsAsync || void 0,
          useAsPostProcess: VV.useAsPostProcess ?? !1,
          allowEmptySourceTexture: VV.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), VV.vertexUrl || VV.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.uk.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new pV.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const eV = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, eV, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          JV = arguments.length > 2 ? arguments[2] : void 0,
          YV = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, YV && this._importPromises.push(...YV);
        const UV = this.options.engine.isWebGPU && !wV.ForceGLSL;
        this._gatherImports(UV, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(UV && this._webGPUReady ? xV.e(672).then((() => xV(64421))) : xV.e(662).then((() => xV(64298)))), void 0 !== JV && JV(UV, this._importPromises), UV && this._webGPUReady && (this.options.shaderLanguage = 1), VV || this.updateEffect(eV)
      }
      updateEffect() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          pV = arguments.length > 6 ? arguments[6] : void 0,
          QV = arguments.length > 7 ? arguments[7] : void 0;
        const nV = wV._GetShaderCodeProcessing(this.name);
        if (nV?.defineCustomBindings) {
          const JV = eV?.slice() ?? [];
          JV.push(...this.options.uniforms);
          const YV = xV?.slice() ?? [];
          YV.push(...this.options.samplers), VV = nV.defineCustomBindings(this.name, VV, JV, YV), eV = JV, xV = YV
        }
        this.options.defines = VV || "";
        const ZV = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let vV;
        vV = this.options.extraInitializationsAsync ? async () => {
          await (ZV?.()), await this.options.extraInitializationsAsync()
        }: ZV, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: pV ?? this._shaderPath.vertex,
          fragment: QV ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: eV || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: xV || this.options.samplers,
          defines: null !== VV ? VV : "",
          fallbacks: null,
          onCompiled: YV ?? this.options.onCompiled,
          onError: UV ?? null,
          indexParameters: JV || this.options.indexParameters,
          processCodeAfterIncludes: nV?.processCodeAfterIncludes ? (VV, eV) => nV.processCodeAfterIncludes(this.name, VV, eV) : null,
          processFinalCode: nV?.processFinalCode ? (VV, eV) => nV.processFinalCode(this.name, VV, eV) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: vV
        }, this.options.engine) : this._drawWrapper.effect = new yV.c(this._shaderPath, this.options.attributeNames, eV || this.options.uniforms, xV || this.options.samplerNames, this.options.engine, VV, void 0, YV || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, vV), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !VV && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), wV._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.sk().uk.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    wV.ForceGLSL = !1, wV._CustomShaderCodeProcessing = {}
  },
  44723: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Dispose: () => jV,
      DumpData: () => BV,
      DumpDataAsync: () => EV,
      DumpFramebuffer: () => bV,
      DumpTools: () => qV,
      EncodeImageAsync: () => kV,
      RegisterDumpTools: () => FV
    });
    var JV = xV(41257),
      YV = xV(44699),
      UV = xV(41341),
      yV = xV(38303),
      pV = xV(38287),
      QV = xV(39870),
      nV = xV(41315),
      wV = xV(41263);
    let ZV = null;
    async function vV() {
      return ZV || (ZV = async function() {
        const VV = pV.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        VV instanceof OffscreenCanvas && QV.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: eV
        } = await Promise.resolve().then((() => xV(41095)));
        if (!eV.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const JV = new eV(VV, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        pV.d.Instances.pop(), pV.d.OnEnginesDisposedObservable.add((VV => {
          JV && VV !== JV && !JV.iN && 0 === pV.d.Instances.length && jV()
        })), JV.getCaps().parallelShaderCompile = void 0;
        const UV = new YV.c(JV),
          {
            passPixelShader: yV
          } = await xV.e(680).then((() => xV(64476))),
          nV = new YV.d({
            engine: JV,
            name: yV.name,
            fragmentShader: yV.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: VV,
          dumpEngine: {
            engine: JV,
            renderer: UV,
            wrapper: nV
          }
        }
      }()), await ZV
    }
    let rV = (() => {
      var VV;
      let eV, xV = [];
      return VV = class {
        static async EncodeImageAsync(VV, eV, xV, JV, YV, yV) {
          const pV = await vV(),
            QV = pV.dumpEngine;
          QV.engine.setSize(eV, xV, !0);
          const nV = QV.engine.createRawTexture(VV, eV, xV, 5, !1, !YV, 1);
          return QV.renderer.setViewport(), QV.renderer.applyEffectWrapper(QV.wrapper), QV.wrapper.effect._bindTexture("textureSampler", nV), QV.renderer.draw(), nV.dispose(), await new Promise(((VV, eV) => {
            UV.j.ToBlob(pV.canvas, (xV => {
              xV ? VV(xV) : eV(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), JV, yV)
          }))
        }
      }, (() => {
        const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [wV.j], (0, JV.i)(VV, null, eV, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: VV => "EncodeImageAsync" in VV,
            get: VV => VV.EncodeImageAsync
          },
          metadata: YV
        }, null, xV), YV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YV
        }), (0, JV.l)(VV, xV)
      })(), VV
    })();
    const kV = rV.EncodeImageAsync;
    async function bV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        UV = arguments.length > 5 ? arguments[5] : void 0,
        yV = arguments.length > 6 ? arguments[6] : void 0;
      const pV = await xV.readPixels(0, 0, VV, eV);
      BV(VV, eV, new Uint8Array(pV.buffer), JV, YV, UV, !0, void 0, yV)
    }
    async function EV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        YV = arguments.length > 4 ? arguments[4] : void 0,
        pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        wV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ZV = arguments.length > 7 ? arguments[7] : void 0;
      if (xV instanceof Float32Array) {
        const VV = new Uint8Array(xV.length);
        let eV = xV.length;
        for (; eV--;) {
          const JV = xV[eV];
          VV[eV] = Math.round(255 * (0, yV.Clamp)(JV))
        }
        xV = VV
      }
      const vV = await rV.EncodeImageAsync(xV, VV, eV, JV, pV, ZV);
      void 0 !== YV && UV.j.DownloadBlob(vV, YV), vV.type !== JV && QV.b.Warn(`DumpData: The requested mimeType '${JV}' is not supported. The result has mimeType '${vV.type}' instead.`);
      const kV = await vV.arrayBuffer();
      return wV ? kV : `data:${JV};base64,${(0,nV.h)(kV)}`
    }

    function BV(VV, eV, xV, JV) {
      let YV = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== YV || JV || (YV = ""), EV(VV, eV, xV, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", YV, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((VV => {
        JV && JV(VV)
      }))
    }

    function jV() {
      ZV && (ZV?.then((VV => {
        VV.canvas instanceof HTMLCanvasElement && VV.canvas.remove(), VV.dumpEngine && (VV.dumpEngine.engine.dispose(), VV.dumpEngine.renderer.dispose(), VV.dumpEngine.wrapper.dispose())
      })), ZV = null)
    }
    const qV = {
      DumpData: BV,
      DumpDataAsync: EV,
      DumpFramebuffer: bV,
      Dispose: jV
    };
    let tV = !1;

    function FV() {
      if (tV) return;
      tV = !0;
      UV.j.DumpData = BV, UV.j.DumpDataAsync = EV, UV.j.DumpFramebuffer = bV
    }
  },
  44714: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      e: () => kV,
      g: () => bV
    });
    var JV = xV(41738),
      YV = xV(44717),
      UV = xV(41257),
      yV = xV(44697),
      pV = xV(41279),
      QV = xV(44719),
      nV = xV(41263);
    class wV extends yV.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(VV, eV) {
        let xV = arguments.length > 4 ? arguments[4] : void 0;
        const JV = {
          size: "number" === typeof eV ? eV : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: xV,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...eV
        };
        super(VV, QV.e.FragmentUrl, {
          effectWrapper: "number" !== typeof eV && eV.effectWrapper ? void 0 : new QV.e(VV, xV, JV),
          ...JV
        })
      }
      static _Parse(VV, eV, xV, JV) {
        return pV.b.Parse((() => new wV(VV.name, VV.options, eV, VV.renderTargetSamplingMode, VV._engine, VV.reusable)), VV, xV, JV)
      }
    }(() => {
      var VV;
      let eV, xV = yV.d,
        JV = [];
      VV = class extends xV {
        get face() {
          return this._effectWrapper.face
        }
        set face(VV) {
          this._effectWrapper.face = VV
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(VV, eV) {
          let xV = arguments.length > 4 ? arguments[4] : void 0;
          const YV = {
            size: "number" === typeof eV ? eV : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: xV,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...eV
          };
          super(VV, QV.e.FragmentUrl, {
            effectWrapper: "number" !== typeof eV && eV.effectWrapper ? void 0 : new QV.c(VV, xV, YV),
            ...YV
          }), (0, UV.l)(this, JV)
        }
        static _Parse(eV, xV, JV, YV) {
          return pV.b.Parse((() => new VV(eV.name, eV.options, xV, eV.renderTargetSamplingMode, eV._engine, eV.reusable)), eV, JV, YV)
        }
      }, (() => {
        const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(xV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, nV.J)()], (0, UV.i)(VV, null, eV, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: VV => "face" in VV,
            get: VV => VV.face
          },
          metadata: YV
        }, null, JV), YV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YV
        })
      })()
    })();
    var ZV = xV(38303),
      vV = xV(41323);

    function rV(VV, eV, xV, JV, YV, UV, pV, QV) {
      const nV = eV.sk();
      return eV.isReady = !1, YV = YV ?? eV.samplingMode, JV = JV ?? eV.type, UV = UV ?? eV.format, pV = pV ?? eV.width, QV = QV ?? eV.height, -1 === JV && (JV = 0), new Promise((wV => {
        const ZV = new yV.d("postprocess", VV, null, null, 1, null, YV, nV, !1, void 0, JV, void 0, null, !1, UV);
        ZV.externalTextureSamplerBinding = !0;
        const vV = nV.createRenderTargetTexture({
          width: pV,
          height: QV
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: YV,
          type: JV,
          format: UV
        });
        ZV.onEffectCreatedObservable.addOnce((VV => {
          VV.executeWhenCompiled((() => {
            ZV.onApply = VV => {
              VV._bindTexture("textureSampler", eV), VV.setFloat2("scale", 1, 1)
            }, xV.postProcessManager.directRender([ZV], vV, !0), nV.restoreDefaultFramebuffer(), nV._releaseTexture(eV), ZV && ZV.dispose(), vV._swapAndDie(eV), eV.type = JV, eV.format = 5, eV.isReady = !0, wV(eV)
          }))
        }))
      }))
    }
    async function kV(VV, eV, UV) {
      let pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        QV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        nV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        wV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(VV) {
        if (VV.isReady()) return;
        if (VV.loadingError) throw new Error(VV.errorObject?.message || `Texture ${VV.name} errored while loading.`);
        const eV = VV.onLoadObservable;
        if (eV) return await new Promise((VV => eV.addOnce((() => VV()))));
        const xV = VV._texture?.onLoadedObservable;
        if (xV) return await new Promise((VV => xV.addOnce((() => VV()))));
        throw new Error(`Cannot determine readiness of texture ${VV.name}.`)
      }(VV);
      const vV = VV.getInternalTexture(),
        rV = VV.is3D || !!vV?.is3D,
        {
          width: kV,
          height: bV
        } = VV.getSize(),
        EV = eV ?? kV,
        BV = UV ?? bV;
      if (nV || rV || function(VV) {
          switch (VV) {
            case 36492:
            case 36493:
            case 36495:
            case 36494:
            case 33779:
            case 35919:
            case 33778:
            case 35918:
            case 33777:
            case 33776:
            case 35917:
            case 35916:
            case 37808:
            case 37809:
            case 37810:
            case 37811:
            case 37812:
            case 37813:
            case 37814:
            case 37815:
            case 37816:
            case 37817:
            case 37818:
            case 37819:
            case 37820:
            case 37821:
            case 37840:
            case 37841:
            case 37842:
            case 37843:
            case 37844:
            case 37845:
            case 37846:
            case 37847:
            case 37848:
            case 37849:
            case 37850:
            case 37851:
            case 37852:
            case 37853:
            case 36196:
            case 37492:
            case 37493:
            case 37494:
            case 37495:
            case 37496:
            case 37497:
              return !0;
            default:
              return !1
          }
        }(VV.textureFormat) || EV !== kV || BV !== bV) {
        if (VV.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${nV?"RTT":"compression"} is not supported.`);
        return await async function(VV, eV, UV, pV, QV) {
          let nV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const wV = VV.dD(),
            ZV = wV.sk(),
            vV = VV.getInternalTexture(),
            rV = VV.is3D || !!vV?.is3D;
          let kV;
          if (ZV.isWebGPU ? rV ? await xV.e(676).then((() => xV(64452))) : VV.isCube ? await xV.e(677).then((() => xV(64461))) : await xV.e(678).then((() => xV(64467))) : rV ? await xV.e(673).then((() => xV(64438))) : VV.isCube ? await xV.e(674).then((() => xV(64441))) : await xV.e(675).then((() => xV(64450))), rV) kV = new yV.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: JV.f.NEAREST_NEAREST_MIPNEAREST,
            engine: ZV,
            shaderLanguage: ZV.isWebGPU ? 1 : 0
          });
          else if (VV.isCube) {
            const VV = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            kV = new yV.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: JV.f.NEAREST_NEAREST_MIPNEAREST,
              engine: ZV,
              defines: VV[pV],
              shaderLanguage: ZV.isWebGPU ? 1 : 0
            })
          } else kV = new yV.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: JV.f.NEAREST_NEAREST_MIPNEAREST,
            engine: ZV,
            shaderLanguage: ZV.isWebGPU ? 1 : 0
          });
          await new Promise((VV => {
            kV.onEffectCreatedObservable.addOnce((eV => {
              eV.executeWhenCompiled((() => {
                VV(0)
              }))
            }))
          }));
          const bV = new YV.b("temp", {
            width: eV,
            height: UV
          }, wV, !1);
          kV.onApply = function(eV) {
            eV.setTexture("textureSampler", VV), eV.setFloat("lod", QV), eV.setInt("gamma", VV.gammaSpace ? 1 : 0), rV && eV.setFloat("slice", nV)
          };
          try {
            if (bV.renderTarget && vV) {
              const xV = vV.samplingMode;
              0 !== QV ? VV.updateSamplingMode(JV.f.NEAREST_NEAREST_MIPNEAREST) : VV.updateSamplingMode(JV.f.NEAREST_NEAREST), wV.postProcessManager.directRender([kV], bV.renderTarget, !0), VV.updateSamplingMode(xV);
              const YV = await ZV.readPixels(0, 0, eV, UV),
                yV = new Uint8Array(YV.buffer, YV.byteOffset, YV.byteLength);
              return ZV.unBindFramebuffer(bV.renderTarget), yV
            }
            throw Error("Render to texture failed.")
          } finally {
            bV.dispose(), kV.dispose()
          }
        }(VV, EV, BV, pV, QV, wV)
      }
      let jV = await VV.readPixels(pV, QV);
      if (!jV) throw new Error(`Failed to read pixels from texture ${VV.name}.`);
      if (jV instanceof Float32Array) {
        const VV = new Uint8Array(jV.length);
        let eV = jV.length;
        for (; eV--;) {
          const xV = jV[eV];
          VV[eV] = Math.round(255 * (0, ZV.Clamp)(xV))
        }
        jV = VV
      }
      const qV = EV * BV,
        tV = 4 * qV;
      if (jV.length !== tV) {
        const VV = 0 === qV ? 0 : jV.length / qV;
        if (1 === VV || 2 === VV || 3 === VV) {
          const eV = new Uint8Array(tV);
          for (let xV = 0, JV = 0, YV = 0; xV < qV; xV++, YV += 4) {
            const xV = jV[JV++];
            if (1 === VV) {
              eV[YV] = xV, eV[YV + 1] = xV, eV[YV + 2] = xV, eV[YV + 3] = 255;
              continue
            }
            const UV = jV[JV++];
            2 !== VV ? (eV[YV] = xV, eV[YV + 1] = UV, eV[YV + 2] = jV[JV++], eV[YV + 3] = 255) : (eV[YV] = xV, eV[YV + 1] = UV, eV[YV + 2] = 0, eV[YV + 3] = 255)
          }
          return eV
        }
      }
      return jV
    }
    const bV = {
      CreateResizedCopy: function(VV, eV, xV) {
        let UV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yV = VV.dD(),
          pV = yV.sk(),
          QV = new YV.b("resized" + VV.name, {
            width: eV,
            height: xV
          }, yV, !VV.noMipmap, !0, VV._texture.type, !1, VV.samplingMode, !1);
        QV.wrapU = VV.wrapU, QV.wrapV = VV.wrapV, QV.uOffset = VV.uOffset, QV.vOffset = VV.vOffset, QV.uScale = VV.uScale, QV.vScale = VV.vScale, QV.uAng = VV.uAng, QV.vAng = VV.vAng, QV.wAng = VV.wAng, QV.coordinatesIndex = VV.coordinatesIndex, QV.level = VV.level, QV.anisotropicFilteringLevel = VV.anisotropicFilteringLevel, QV._texture.isReady = !1, VV.wrapU = JV.f.CLAMP_ADDRESSMODE, VV.wrapV = JV.f.CLAMP_ADDRESSMODE;
        const nV = new wV("pass", 1, null, UV ? JV.f.BILINEAR_SAMPLINGMODE : JV.f.NEAREST_SAMPLINGMODE, pV, !1, 0);
        return nV.externalTextureSamplerBinding = !0, nV.onEffectCreatedObservable.addOnce((eV => {
          eV.executeWhenCompiled((() => {
            nV.onApply = function(eV) {
              eV.setTexture("textureSampler", VV)
            };
            const eV = QV.renderTarget;
            eV && (yV.postProcessManager.directRender([nV], eV), pV.unBindFramebuffer(eV), QV.disposeFramebufferObjects(), nV.dispose(), QV.getInternalTexture().isReady = !0)
          }))
        })), QV
      },
      ApplyPostProcess: rV,
      ToHalfFloat: vV.j,
      FromHalfFloat: vV.c,
      GetTextureDataAsync: kV
    }
  },
  44697: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => kV
    });
    var JV = xV(41257),
      YV = xV(41353),
      UV = xV(38296),
      yV = xV(38269),
      pV = xV(41101),
      QV = xV(41263),
      nV = xV(41279),
      wV = xV(38318),
      ZV = xV(41150),
      vV = xV(41190),
      rV = xV(44699);
    let kV = (() => {
        var VV;
        let eV, pV, ZV, kV, bV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV = [],
          GV = [],
          WV = [],
          RV = [],
          gV = [],
          DV = [],
          iV = [],
          CV = [],
          aV = [],
          oV = [],
          cV = [],
          hV = [],
          lV = [],
          LV = [],
          fV = [],
          mV = [],
          KV = [],
          HV = [],
          uV = [],
          sV = [],
          SV = [],
          IV = [],
          dV = [],
          OV = [],
          Ve = [],
          ee = [],
          xe = [],
          Je = [],
          Ye = [];
        return VV = class {
          static get ForceGLSL() {
            return rV.d.ForceGLSL
          }
          static set ForceGLSL(VV) {
            rV.d.ForceGLSL = VV
          }
          static RegisterShaderCodeProcessing(VV, eV) {
            rV.d.RegisterShaderCodeProcessing(VV, eV)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(VV) {
            this._effectWrapper.name = VV
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(VV) {
            this._effectWrapper.alphaMode = VV
          }
          get samples() {
            return this._samples
          }
          set samples(VV) {
            this._samples = Math.min(VV, this._engine.getCaps().maxMSAASamples), this._textures.forEach((VV => {
              VV.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(VV) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), VV && (this._onActivateObserver = this.onActivateObservable.add(VV))
          }
          set onSizeChanged(VV) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(VV)
          }
          set onApply(VV) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(VV)
          }
          set onBeforeRender(VV) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(VV)
          }
          set onAfterRender(VV) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(VV)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(VV) {
            this._forcedOutputTexture = VV
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.U1
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.FeV(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(eV, xV, pV, QV, nV, wV) {
            let ZV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              vV = arguments.length > 7 ? arguments[7] : void 0,
              kV = arguments.length > 8 ? arguments[8] : void 0,
              bV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              BV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              jV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              qV = arguments.length > 12 ? arguments[12] : void 0,
              tV = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              FV = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              TV = arguments.length > 15 ? arguments[15] : void 0,
              PV = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, JV.l)(this, zV), null), this.uniqueId = (0, JV.l)(this, GV, void 0), this.width = ((0, JV.l)(this, WV), (0, JV.l)(this, RV, -1)), this.height = ((0, JV.l)(this, gV), (0, JV.l)(this, DV, -1)), this.nodeMaterialSource = ((0, JV.l)(this, iV), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, JV.l)(this, CV, void 0), this.clearColor = ((0, JV.l)(this, aV), (0, JV.l)(this, oV, void 0)), this.autoClear = ((0, JV.l)(this, cV), (0, JV.l)(this, hV, !0)), this.forceAutoClearInAlphaMode = ((0, JV.l)(this, lV), (0, JV.l)(this, LV, !1)), this.alphaConstants = ((0, JV.l)(this, fV), (0, JV.l)(this, mV, void 0)), this.animations = ((0, JV.l)(this, KV), []), this.enablePixelPerfectMode = (0, JV.l)(this, HV, !1), this.forceFullscreenViewport = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, !0)), this.inspectableCustomProperties = (0, JV.l)(this, SV), this.scaleMode = (0, JV.l)(this, IV, 1), this.alwaysForcePOT = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, !1)), this._samples = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, 1)), this.adaptScaleToCurrentViewport = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, !1)), this.doNotSerialize = ((0, JV.l)(this, Ye), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new YV.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new yV.n(1, 1), this._texelSize = yV.n.Zero(), this.onActivateObservable = new UV.c, this.onSizeChangedObservable = new UV.c, this.onApplyObservable = new UV.c, this.onBeforeRenderObservable = new UV.c, this.onAfterRenderObservable = new UV.c, this.eC = new UV.c, EV();
            let AV, NV = 1,
              XV = null;
            if (pV && !Array.isArray(pV)) {
              const VV = pV;
              pV = VV.uniforms ?? null, QV = VV.samplers ?? null, NV = VV.size ?? 1, wV = VV.camera ?? null, ZV = VV.samplingMode ?? 1, vV = VV.engine, kV = VV.reusable, bV = Array.isArray(VV.defines) ? VV.defines.join("\n") : VV.defines ?? null, BV = VV.textureType ?? 0, jV = VV.vertexUrl ?? "postprocess", qV = VV.indexParameters, tV = VV.blockCompilation ?? !1, FV = VV.textureFormat ?? 5, TV = VV.shaderLanguage ?? 0, XV = VV.uniformBuffers ?? null, PV = VV.extraInitializations, AV = VV.effectWrapper
            } else nV && (NV = "number" === typeof nV ? nV : {
              width: nV.width,
              height: nV.height
            });
            if (this._useExistingThinPostProcess = !!AV, this._effectWrapper = AV ?? new rV.d({
                name: eV,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: xV,
                engine: vV || wV?.dD().sk(),
                uniforms: pV,
                samplers: QV,
                uniformBuffers: XV,
                defines: bV,
                vertexUrl: jV,
                indexParameters: qV,
                blockCompilation: !0,
                shaderLanguage: TV,
                extraInitializations: void 0
              }), this.name = eV, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != wV ? (this.U1 = wV, this._scene = wV.dD(), wV.attachPostProcess(this), this._engine = this._scene.sk(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : vV && (this._engine = vV, this._engine.postProcesses.push(this)), this._options = NV, this.renderTargetSamplingMode = ZV || 1, this._reusable = kV || !1, this._textureType = BV, this._textureFormat = FV, this._shaderLanguage = TV || 0, this._samplers = QV || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = xV, this._vertexUrl = jV, this._parameters = pV || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = XV || [], this._indexParameters = qV, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const eV = [];
              this._gatherImports(this._engine.isWebGPU && !VV.ForceGLSL, eV), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(tV, bV, PV, eV)
            }
          }
          _gatherImports() {
            let VV = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? VV.push(Promise.all([xV.e(672).then((() => xV(64421)))])) : VV.push(Promise.all([xV.e(662).then((() => xV(64298)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          sk() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(VV) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = VV, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new YV.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              JV = arguments.length > 3 ? arguments[3] : void 0,
              YV = arguments.length > 4 ? arguments[4] : void 0,
              UV = arguments.length > 5 ? arguments[5] : void 0,
              yV = arguments.length > 6 ? arguments[6] : void 0,
              pV = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(VV, eV, xV, JV, YV, UV, yV, pV), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let YV = 0; YV < this._textureCache.length; YV++)
              if (this._textureCache[YV].texture.width === VV.width && this._textureCache[YV].texture.height === VV.height && this._textureCache[YV].postProcessChannel === xV && this._textureCache[YV].texture._generateDepthBuffer === eV.generateDepthBuffer && this._textureCache[YV].texture.samples === eV.samples) return this._textureCache[YV].texture;
            const JV = this._engine.createRenderTargetTexture(VV, eV);
            return this._textureCache.push({
              texture: JV,
              postProcessChannel: xV,
              lastUsedRenderId: -1
            }), JV
          }
          _flushTextureCache() {
            const VV = this._renderId;
            for (let eV = this._textureCache.length - 1; eV >= 0; eV--)
              if (VV - this._textureCache[eV].lastUsedRenderId > 100) {
                let VV = !1;
                for (let xV = 0; xV < this._textures.length; xV++)
                  if (this._textures.data[xV] === this._textureCache[eV].texture) {
                    VV = !0;
                    break
                  } VV || (this._textureCache[eV].texture.dispose(), this._textureCache.splice(eV, 1))
              }
          }
          resize(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = VV, this.height = eV;
            let UV = null;
            if (xV)
              for (let QV = 0; QV < xV._postProcesses.length; QV++)
                if (null !== xV._postProcesses[QV]) {
                  UV = xV._postProcesses[QV];
                  break
                } const yV = {
                width: this.width,
                height: this.height
              },
              pV = {
                generateMipMaps: JV,
                generateDepthBuffer: YV || UV === this,
                generateStencilBuffer: (YV || UV === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(yV, pV, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(yV, pV, 1)), this._texelSize.FeV(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let VV;
            if (this._shareOutputWithPostProcess) VV = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) VV = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let eV;
              VV = this.inputTexture;
              for (let xV = 0; xV < this._textureCache.length; xV++)
                if (this._textureCache[xV].texture === VV) {
                  eV = this._textureCache[xV];
                  break
                } eV && (eV.lastUsedRenderId = this._renderId)
            }
            return VV
          }
          activate(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              xV = arguments.length > 2 ? arguments[2] : void 0;
            const JV = null === VV || void 0 !== VV.cameraRigMode ? VV || this.U1 : null,
              YV = JV?.dD() ?? VV,
              UV = YV.sk(),
              yV = UV.getCaps().maxTextureSize,
              pV = (eV ? eV.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              QV = (eV ? eV.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let nV = this._options.width || pV,
              wV = this._options.height || QV;
            const ZV = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let rV = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const VV = UV.currentViewport;
                VV && (nV *= VV.width, wV *= VV.height)
              }(ZV || this.alwaysForcePOT) && (this._options.width || (nV = UV.needPOTTextures ? (0, vV.i)(nV, yV, this.scaleMode) : nV), this._options.height || (wV = UV.needPOTTextures ? (0, vV.i)(wV, yV, this.scaleMode) : wV)), this.width === nV && this.height === wV && (rV = this._getTarget()) || this.resize(nV, wV, JV, ZV, xV), this._textures.forEach((VV => {
                VV.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(VV, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return rV || (rV = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.FeV(pV / nV, QV / wV), this._engine.bindFramebuffer(rV, 0, pV, QV, this.forceFullscreenViewport)) : (this._scaleRatio.FeV(1, 1), this._engine.bindFramebuffer(rV, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(JV), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : YV.clearColor, YV._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), rV
          }
          get isSupported() {
            return this._effectWrapper.drawWrapper.effect.isSupported
          }
          get aspectRatio() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.aspectRatio : this._forcedOutputTexture ? this._forcedOutputTexture.width / this._forcedOutputTexture.height : this.width / this.height
          }
          isReady() {
            return this._effectWrapper.isReady()
          }
          apply() {
            if (!this._effectWrapper.isReady()) return null;
            let VV;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.sk().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), VV = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", VV?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let VV = this._textureCache.length - 1; VV >= 0; VV--) this._textureCache[VV].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(VV) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = VV.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(VV) {
            let eV;
            if (VV = VV || this.U1, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (eV = this._parentContainer.postProcesses.indexOf(this), eV > -1 && this._parentContainer.postProcesses.splice(eV, 1), this._parentContainer = null), eV = this._engine.postProcesses.indexOf(this), -1 !== eV && this._engine.postProcesses.splice(eV, 1), this.eC.notifyObservers(), VV) {
              if (VV.detachPostProcess(this), eV = VV._postProcesses.indexOf(this), 0 === eV && VV._postProcesses.length > 0) {
                const VV = this.U1._getFirstPostProcess();
                VV && VV.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const VV = nV.b.Serialize(this),
              eV = this.getCamera() || this._scene && this._scene.activeCamera;
            return VV.customType = "BABYLON." + this.getClassName(), VV.cameraId = eV ? eV.id : null, VV.reusable = this._reusable, VV.textureType = this._textureType, VV.fragmentUrl = this._fragmentUrl, VV.parameters = this._parameters, VV.samplers = this._samplers, VV.uniformBuffers = this._uniformBuffers, VV.options = this._options, VV.defines = this._postProcessDefines, VV.textureFormat = this._textureFormat, VV.vertexUrl = this._vertexUrl, VV.indexParameters = this._indexParameters, VV
          }
          clone() {
            const eV = this.serialize();
            eV._engine = this._engine, eV.cameraId = null;
            const xV = VV.Parse(eV, this._scene, "");
            return xV ? (xV.onActivateObservable = this.onActivateObservable.clone(), xV.onSizeChangedObservable = this.onSizeChangedObservable.clone(), xV.onApplyObservable = this.onApplyObservable.clone(), xV.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), xV.onAfterRenderObservable = this.onAfterRenderObservable.clone(), xV._prePassEffectConfiguration = this._prePassEffectConfiguration, xV) : null
          }
          static Parse(VV, eV, xV) {
            const JV = (0, wV.c)(VV.customType);
            if (!JV || !JV._Parse) return null;
            const YV = eV ? eV.getCameraById(VV.cameraId) : null;
            return JV._Parse(VV, YV, eV, xV)
          }
          static _Parse(eV, xV, JV, YV) {
            return nV.b.Parse((() => new VV(eV.name, eV.fragmentUrl, eV.parameters, eV.samplers, eV.options, xV, eV.renderTargetSamplingMode, eV._engine, eV.reusable, eV.defines, eV.textureType, eV.vertexUrl, eV.indexParameters, !1, eV.textureFormat)), eV, JV, YV)
          }
        }, (() => {
          const xV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          eV = [(0, QV.J)()], pV = [(0, QV.J)()], ZV = [(0, QV.J)()], kV = [(0, QV.J)()], bV = [(0, QV.J)()], BV = [(0, QV.s)()], jV = [(0, QV.J)()], qV = [(0, QV.J)()], tV = [(0, QV.J)()], FV = [(0, QV.J)()], TV = [(0, QV.J)()], PV = [(0, QV.J)()], AV = [(0, QV.J)()], NV = [(0, QV.J)()], XV = [(0, QV.J)("samples")], MV = [(0, QV.J)()], (0, JV.i)(VV, null, pV, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: VV => "name" in VV,
              get: VV => VV.name
            },
            metadata: xV
          }, null, zV), (0, JV.i)(VV, null, tV, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "alphaMode" in VV,
              get: VV => VV.alphaMode
            },
            metadata: xV
          }, null, zV), (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: VV => "uniqueId" in VV,
              get: VV => VV.uniqueId,
              set: (VV, eV) => {
                VV.uniqueId = eV
              }
            },
            metadata: xV
          }, GV, WV), (0, JV.i)(null, null, ZV, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: VV => "width" in VV,
              get: VV => VV.width,
              set: (VV, eV) => {
                VV.width = eV
              }
            },
            metadata: xV
          }, RV, gV), (0, JV.i)(null, null, kV, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: VV => "height" in VV,
              get: VV => VV.height,
              set: (VV, eV) => {
                VV.height = eV
              }
            },
            metadata: xV
          }, DV, iV), (0, JV.i)(null, null, bV, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "renderTargetSamplingMode" in VV,
              get: VV => VV.renderTargetSamplingMode,
              set: (VV, eV) => {
                VV.renderTargetSamplingMode = eV
              }
            },
            metadata: xV
          }, CV, aV), (0, JV.i)(null, null, BV, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "clearColor" in VV,
              get: VV => VV.clearColor,
              set: (VV, eV) => {
                VV.clearColor = eV
              }
            },
            metadata: xV
          }, oV, cV), (0, JV.i)(null, null, jV, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: VV => "autoClear" in VV,
              get: VV => VV.autoClear,
              set: (VV, eV) => {
                VV.autoClear = eV
              }
            },
            metadata: xV
          }, hV, lV), (0, JV.i)(null, null, qV, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "forceAutoClearInAlphaMode" in VV,
              get: VV => VV.forceAutoClearInAlphaMode,
              set: (VV, eV) => {
                VV.forceAutoClearInAlphaMode = eV
              }
            },
            metadata: xV
          }, LV, fV), (0, JV.i)(null, null, FV, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: VV => "alphaConstants" in VV,
              get: VV => VV.alphaConstants,
              set: (VV, eV) => {
                VV.alphaConstants = eV
              }
            },
            metadata: xV
          }, mV, KV), (0, JV.i)(null, null, TV, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "enablePixelPerfectMode" in VV,
              get: VV => VV.enablePixelPerfectMode,
              set: (VV, eV) => {
                VV.enablePixelPerfectMode = eV
              }
            },
            metadata: xV
          }, HV, uV), (0, JV.i)(null, null, PV, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: VV => "forceFullscreenViewport" in VV,
              get: VV => VV.forceFullscreenViewport,
              set: (VV, eV) => {
                VV.forceFullscreenViewport = eV
              }
            },
            metadata: xV
          }, sV, SV), (0, JV.i)(null, null, AV, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "scaleMode" in VV,
              get: VV => VV.scaleMode,
              set: (VV, eV) => {
                VV.scaleMode = eV
              }
            },
            metadata: xV
          }, IV, dV), (0, JV.i)(null, null, NV, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: VV => "alwaysForcePOT" in VV,
              get: VV => VV.alwaysForcePOT,
              set: (VV, eV) => {
                VV.alwaysForcePOT = eV
              }
            },
            metadata: xV
          }, OV, Ve), (0, JV.i)(null, null, XV, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: VV => "_samples" in VV,
              get: VV => VV._samples,
              set: (VV, eV) => {
                VV._samples = eV
              }
            },
            metadata: xV
          }, ee, xe), (0, JV.i)(null, null, MV, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: VV => "adaptScaleToCurrentViewport" in VV,
              get: VV => VV.adaptScaleToCurrentViewport,
              set: (VV, eV) => {
                VV.adaptScaleToCurrentViewport = eV
              }
            },
            metadata: xV
          }, Je, Ye), xV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xV
          })
        })(), VV
      })(),
      bV = !1;

    function EV() {
      bV || (bV = !0, ZV.d.prototype.setTextureFromPostProcess = function(VV, eV, xV) {
        let JV = null;
        eV && (eV._forcedOutputTexture ? JV = eV._forcedOutputTexture : eV._textures.data[eV._currentRenderTextureInd] && (JV = eV._textures.data[eV._currentRenderTextureInd])), this._bindTexture(VV, JV?.texture ?? null, xV)
      }, ZV.d.prototype.setTextureFromPostProcessOutput = function(VV, eV, xV) {
        this._bindTexture(VV, eV?._outputTexture?.texture ?? null, xV)
      }, pV.c.prototype.setTextureFromPostProcess = function(VV, eV) {
        this._engine.setTextureFromPostProcess(this._samplers[VV], eV, VV)
      }, pV.c.prototype.setTextureFromPostProcessOutput = function(VV, eV) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[VV], eV, VV)
      }, (0, wV.d)("BABYLON.PostProcess", kV))
    }
  },
  44719: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      e: () => UV
    });
    var JV = xV(44699),
      YV = xV(38287);
    class UV extends JV.d {
      _gatherImports(VV, eV) {
        VV ? (this._webGPUReady = !0, eV.push(Promise.all([xV.e(679).then((() => xV(64473)))]))) : eV.push(Promise.all([xV.e(680).then((() => xV(64476)))])), super._gatherImports(VV, eV)
      }
      constructor(VV) {
        let eV = arguments.length > 2 ? arguments[2] : void 0;
        const xV = {
          name: VV,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || YV.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: UV.FragmentUrl,
          ...eV
        };
        xV.engine || (xV.engine = YV.d.LastCreatedEngine), super(xV)
      }
    }
    UV.FragmentUrl = "pass";
    class yV extends JV.d {
      _gatherImports(VV, eV) {
        VV ? (this._webGPUReady = !0, eV.push(Promise.all([xV.e(681).then((() => xV(64482)))]))) : eV.push(Promise.all([xV.e(682).then((() => xV(64487)))])), super._gatherImports(VV, eV)
      }
      constructor(VV) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: VV,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || YV.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: yV.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(VV) {
        if (!(VV < 0 || VV > 5)) switch (this._face = VV, this._face) {
          case 0:
            this.updateEffect("#define POSITIVEX");
            break;
          case 1:
            this.updateEffect("#define NEGATIVEX");
            break;
          case 2:
            this.updateEffect("#define POSITIVEY");
            break;
          case 3:
            this.updateEffect("#define NEGATIVEY");
            break;
          case 4:
            this.updateEffect("#define POSITIVEZ");
            break;
          case 5:
            this.updateEffect("#define NEGATIVEZ")
        }
      }
    }
    yV.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);