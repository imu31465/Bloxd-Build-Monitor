export const id = 620;
export const ids = [620];
export const modules = {
  45019: (ee, ie, He) => {
    He.d(ie, {
      e: () => Xe
    });
    var ye = He(37931),
      be = He(37917),
      Me = He(41593),
      Ke = He(41256),
      Ue = He(41044),
      Fe = He(39467),
      Je = He(41238),
      oe = He(41269),
      Re = He(37925),
      ke = He(40995),
      qe = He(41216),
      fe = He(41301);
    class Te {
      get renderList() {
        return this._renderList
      }
      set renderList(ee) {
        this._renderList !== ee && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), ee && (this._unObserveRenderList = (0, Re.j)(ee, this._renderListHasChanged)), this._renderList = ee)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(ee) {
        ee !== this._disableImageProcessing && (this._disableImageProcessing = ee, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(ee) {
        this._disableDepthPrePass = ee, this._renderingManager.disableDepthPrePass = ee
      }
      get name() {
        return this._name
      }
      set name(ee) {
        if (this._name !== ee) {
          if (this._name = ee, this._sceneUBOs)
            for (let ee = 0; ee < this._sceneUBOs.length; ++ee) this._sceneUBOs[ee].name = `Scene ubo #${ee} for ${this.name}`;
          if (this._scene)
            for (let ee = 0; ee < this._renderPassIds.length; ++ee) {
              const ie = this._renderPassIds[ee];
              this._engine._renderPassNames[ie] = `${this._name}#${ee}`
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
      setMaterialForRendering(ee, ie) {
        let He;
        He = Array.isArray(ee) ? ee : [ee];
        for (let ye = 0; ye < He.length; ++ye)
          for (let ee = 0; ee < this.options.numPasses; ++ee) {
            let be = He[ye];
            He[ye].Zx && (be = He[ye].jMe), be.setMaterialForRenderPass(this._renderPassIds[ee], void 0 !== ie ? Array.isArray(ie) ? ie[ee] : ie : void 0)
          }
      }
      _freezeActiveMeshes(ee) {
        this._freezeActiveMeshesCancel = (0, ke.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, ee)
            for (let ee = 0; ee < this._activeMeshes.length; ee++) this._activeMeshes.data[ee]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((ee, ie) => {
          this._freezeActiveMeshesCancel = null, ie ? (Fe.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), ee && Fe.e.Error(ee)) : (Fe.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), ee && (Fe.e.Error(ee), ee.stack && Fe.e.Error(ee.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let ee = 0; ee < this._activeMeshes.length; ee++) this._activeMeshes.data[ee]._unFreeze();
        this._isFrozen = !1
      }
      constructor(ee, ie, He) {
        this._unObserveRenderList = null, this._renderListHasChanged = (ee, ie) => {
          const He = this._renderList ? this._renderList.length : 0;
          if (0 === ie && He > 0 || 0 === He)
            for (const ye of this._scene.meshes) ye._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new ye.d, this.onAfterRenderObservable = new ye.d, this.onBeforeRenderingManagerRenderObservable = new ye.d, this.onAfterRenderingManagerRenderObservable = new ye.d, this.onInitRenderingObservable = new ye.d, this.onFinishRenderingObservable = new ye.d, this.onFastPathRenderObservable = new ye.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new qe.f(256), this._activeBoundingBoxes = new qe.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = ee, this._scene = ie, this._engine = this._scene.Nf(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...He
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new oe.b(ie), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const ee of this._scene.lights) ee.getTypeID() === fe.c.LIGHTTYPEID_CLUSTERED_CONTAINER && ee.isSupported && ee._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let ee = 0; ee < this.options.numPasses; ++ee) this._engine.releaseRenderPassId(this._renderPassIds[ee]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let ee = 0; ee < this.options.numPasses; ++ee) this._renderPassIds[ee] = this._engine.createRenderPassId(`${this.name}#${ee}`)
      }
      _createSceneUBO(ee, ie) {
        const He = this._scene.Nf(),
          ye = new Je.b(He, void 0, ie, ee, void 0, !1);
        return ye.addUniform("viewProjection", 16), ie && ye.addUniform("viewProjectionR", 16), ye.addUniform("view", 16), ye.addUniform("projection", 16), ye.addUniform("vEyePosition", 4), ye.addUniform("inverseProjection", 16), ye
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const ee = this._engine._currentRenderTarget,
          ie = !(!ee || !ee.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const ee = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${ee} for ${this.name}`, ie)), this._sceneUBOIsMultiview.push(ie)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== ie && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, ie), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = ie);
        const He = this._sceneUBOs[this._currentSceneUBOIndex++];
        return He.unbindEffect(), He
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(ee) {
        this._refreshRate = ee, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(ee, ie) {
        this.prepareRenderList(), this.initRender(ee, ie);
        const He = this._checkReadiness();
        return this.finishRender(), He
      }
      prepareRenderList() {
        const ee = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let ie = 0; ie < this._waitingRenderList.length; ie++) {
              const He = this._waitingRenderList[ie],
                ye = ee.getMeshById(He);
              ye && this.renderList.push(ye)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const ee = this._scene.meshes;
          for (let ie = 0; ie < ee.length; ie++) {
            const He = ee[ie];
            this.renderListPredicate(He) && this.renderList.push(He)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(ee, ie) {
        const He = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), He && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(He.getViewMatrix(), He.getProjectionMatrix(!0)), this._scene._activeCamera = He, this._engine.setViewport(He.rigParent ? He.rigParent.viewport : He.viewport, ee, ie)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const ee = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (ee.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), ee._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== ee.activeCamera && ee.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), ee.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[ee], this.onBeforeRenderObservable.notifyObservers(ee);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(ee);
        else {
          const ie = this._prepareRenderingManager(ee),
            He = this._scene.getOutlineRenderer?.(),
            ye = He?.enabled;
          He && (He.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(ee), this._renderingManager.render(this.customRenderFunction, ie, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(ee), He && (He.enabled = ye)
        }
        ie || this.onAfterRenderObservable.notifyObservers(ee), this._engine.currentRenderPassId = He
      }
      _checkReadiness() {
        const ee = this._scene,
          ie = this._engine.currentRenderPassId;
        let He = !0;
        ee.getViewMatrix() || ee.updateTransformMatrix();
        const ye = this.options.numPasses;
        for (let be = 0; be < ye && He; be++) {
          const ie = this.renderList ? this.renderList : ee.frameGraph ? ee.meshes : ee.getActiveMeshes().data,
            Me = this.renderList || ee.frameGraph ? ie.length : ee.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[be], this.onBeforeRenderObservable.notifyObservers(be);
          let Ke = null,
            Ue = Me;
          this.getCustomRenderList && (Ke = this.getCustomRenderList(be, ie, Me), Ke && (Ue = Ke.length)), Ke || (Ke = ie), this.options.doNotChangeAspectRatio || ee.updateTransformMatrix(!0);
          for (let ee = 0; ee < Ue && He; ++ee) {
            const ie = Ke[ee];
            if (!ie.isEnabled() || ie.isBlocked || !ie.isVisible || !ie.pW) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(ie, this.refreshRate, !0)) {
                He = !1;
                continue
              }
            } else if (!ie.isReady(!0)) {
              He = !1;
              continue
            }
            let ye = ie._edgesRenderer,
              be = ie.hasThinInstances;
            if (ie.Zx) {
              const ee = ie.jMe;
              ee.edgesShareWithInstances && ee._edgesRenderer?.isEnabled && (ye = ee._edgesRenderer, be = !0)
            } else ie.nMe && ie.edgesShareWithInstances && (be = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && ye?.isEnabled && (ye.isReady(be) || (He = !1))
          }
          if (this.renderParticles && ee.particlesEnabled) {
            const ie = this.particleSystemList || ee.zW;
            for (const ee of ie) ee.isReady() || (He = !1)
          }
          if (this.renderSprites && ee.spritesEnabled) {
            const ie = this.spriteManagerList || ee.spriteManagers;
            if (ie)
              for (const ye of ie) ee.activeCamera && 0 === (ye.layerMask & ee.activeCamera.layerMask) || ye.isReady && !ye.isReady() && (He = !1)
          }
          this.onAfterRenderObservable.notifyObservers(be), ye > 1 && (ee.incrementRenderId(), ee.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = ie, He
      }
      _prepareRenderingManager() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this._scene;
        let ye, be, Me = null;
        const Ke = this.renderList ? this.renderList : He.frameGraph ? He.meshes : He.getActiveMeshes().data,
          Ue = this.renderList || He.frameGraph ? Ke.length : He.getActiveMeshes().length;
        if (this.getCustomRenderList && (Me = this.getCustomRenderList(ee, Ke, Ue)), Me) ye = Me.length, be = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !ie && !this._engine.isWebGPU) return Ke;
          this._defaultRenderListPrepared = !0, Me = Ke, ye = Ue, be = !this.renderList || this.forceLayerMaskCheck
        }
        const Fe = He.activeCamera,
          Je = this.cameraForLOD ?? Fe,
          oe = He.getBoundingBoxRenderer?.();
        if (He._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && oe) {
            oe.reset();
            for (let ee = 0; ee < this._activeBoundingBoxes.length; ee++) {
              const ie = this._activeBoundingBoxes.data[ee];
              oe.renderList.push(ie)
            }
          }
          return Me
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), oe && oe.reset(), this.renderMeshes) {
          const ee = He.getRenderId(),
            ie = He.getFrameId();
          for (let Ke = 0; Ke < ye; Ke++) {
            const ye = Me[Ke];
            if (ye && !ye.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(ye, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!ye.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Me, Ke;
              if (Je) {
                const ee = ye._internalAbstractMeshDataInfo._currentLOD.get(Je);
                ee && ee[1] === ie ? Me = ee[0] : (Me = He.customLODSelector ? He.customLODSelector(ye, Je) : ye.getLOD(Je), ee ? (ee[0] = Me, ee[1] = ie) : ye._internalAbstractMeshDataInfo._currentLOD.set(Je, [Me, ie]))
              } else Me = ye;
              if (!Me) continue;
              if (Me !== ye && 0 !== Me.billboardMode && Me.computeWorldMatrix(), Me._preActivateForIntermediateRendering(ee), Ke = !(!be || !Fe) && 0 === (ye.layerMask & Fe.layerMask), ye.isEnabled() && ye.isVisible && ye.pW && !Ke) {
                if (this._activeMeshes.push(ye), Me._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Me !== ye && Me._activate(ee, !0), this.enableBoundingBoxRendering && oe && oe._preActiveMesh(ye), ye._activate(ee, !0) && ye.pW.length) {
                  ye.Zx ? ye._internalAbstractMeshDataInfo._actAsRegularMesh && (Me = ye) : Me._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Me._internalAbstractMeshDataInfo._isActiveIntermediate = !0, He._prepareSkeleton(Me);
                  for (let ee = 0; ee < Me.pW.length; ee++) {
                    const ie = Me.pW[ee];
                    this.enableBoundingBoxRendering && oe && oe._evaluateSubMesh(ye, ie), this._renderingManager.dispatch(ie, Me)
                  }
                }
                ye._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && oe && ie)
          for (let Re = 0; Re < oe.renderList.length; Re++) {
            const ee = oe.renderList.data[Re];
            this._activeBoundingBoxes.push(ee)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const ee = this.particleSystemList || He.zW;
          for (let ie = 0; ie < ee.length; ie++) {
            const He = ee[ie],
              ye = He.emitter;
            He.isStarted() && ye && (!ye.position || ye.isEnabled()) && this._renderingManager.dispatchParticles(He)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Me
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(ee, ie, He, ye)
      }
      setRenderingAutoClearDepthStencil(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(ee, ie, He, ye), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const ee = new Te(this.name, this._scene, this.options);
        return this.renderList && (ee.renderList = this.renderList.slice(0)), ee
      }
      dispose() {
        const ee = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          ie = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let He = 0; He < ie; He++) {
          const ie = ee[He];
          ie && void 0 !== ie.getMaterialForRenderPass(this.renderPassId) && ie.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const He of this._sceneUBOs) He.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Te.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Te.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Te.REFRESHRATE_RENDER_ONCE = 0, Te.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Te.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var pe = He(40985);
    class Xe extends Me.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(ee) {
        this._objectRenderer.renderListPredicate = ee
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(ee) {
        this._objectRenderer.renderList = ee
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(ee) {
        this._objectRenderer.particleSystemList = ee
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(ee) {
        this._objectRenderer.getCustomRenderList = ee
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(ee) {
        this._objectRenderer.renderParticles = ee
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(ee) {
        this._objectRenderer.renderSprites = ee
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(ee) {
        this._objectRenderer.enableBoundingBoxRendering = ee
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(ee) {
        this._objectRenderer.enableOutlineRendering = ee
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(ee) {
        this._objectRenderer.forceLayerMaskCheck = ee
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(ee) {
        this._objectRenderer.activeCamera = ee
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(ee) {
        this._objectRenderer.cameraForLOD = ee
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(ee) {
        this._objectRenderer.disableImageProcessing = ee
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(ee) {
        this._objectRenderer.customIsReadyFunction = ee
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(ee) {
        this._objectRenderer.customRenderFunction = ee
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(ee) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(ee)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(ee) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(ee)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(ee) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(ee)
      }
      set onClear(ee) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(ee)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(ee) {
        this._objectRenderer._waitingRenderList = ee
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
      setMaterialForRendering(ee, ie) {
        this._objectRenderer.setMaterialForRendering(ee, ie)
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
      set boundingBoxSize(ee) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(ee)) return;
        this._boundingBoxSize = ee;
        const ie = this.Xx();
        ie && ie.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(ee, ie, He) {
        let Ke, Ue, Je = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oe = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Re = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qe = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Me.e.TRILINEAR_SAMPLINGMODE,
          fe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          pe = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Xe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          ze = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Be = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Ee = arguments.length > 13 ? arguments[13] : void 0,
          ge = arguments.length > 14 ? arguments[14] : void 0,
          Oe = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          de = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          We = !0,
          te = !1;
        if ("object" === typeof Je) {
          const ee = Je;
          Je = !!ee.generateMipMaps, oe = ee.doNotChangeAspectRatio ?? !0, Re = ee.type ?? 0, ke = !!ee.isCube, qe = ee.samplingMode ?? Me.e.TRILINEAR_SAMPLINGMODE, fe = ee.generateDepthBuffer ?? !0, pe = !!ee.generateStencilBuffer, Xe = !!ee.isMulti, ze = ee.format ?? 5, Be = !!ee.delayAllocation, Ee = ee.samples, ge = ee.creationFlags, Oe = !!ee.noColorAttachment, de = !!ee.useSRGBBuffer, Ke = ee.colorAttachment, We = ee.gammaSpace ?? We, Ue = ee.existingObjectRenderer, te = !!ee.enableClusteredLights
        }
        if (super(null, He, !Je, void 0, qe, void 0, void 0, void 0, void 0, ze), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new ye.d, this.onAfterUnbindObservable = new ye.d, this.onClearObservable = new ye.d, this.onResizeObservable = new ye.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = be.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(He = this.Xx())) return;
        const Ze = this.Xx().Nf();
        this._gammaSpace = We, this._coordinatesMode = Me.e.PROJECTION_MODE, this.name = ee, this.isRenderTarget = !0, this._initialSizeParameter = ie, this._dontDisposeObjectRenderer = !!Ue, this._processSizeParameter(ie), this._objectRenderer = Ue ?? new Te(ee, He, {
          numPasses: ke ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: oe,
          enableClusteredLights: te
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const ee = this._scene;
          if (!this._disableEngineStages)
            for (const ie of ee._beforeRenderTargetClearStage) ie.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ze) : this.skipInitialClear || Ze.clear(this.clearColor ?? ee.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || ee.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const ie of ee._beforeRenderTargetDrawStage) ie.action(this, this._currentFaceIndex, this._currentLayer);
          Ze._debugPushGroup && Ze._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Ze._debugPopGroup && Ze._debugPopGroup(), !this._disableEngineStages)
            for (const ie of this._scene._afterRenderTargetDrawStage) ie.action(this, this._currentFaceIndex, this._currentLayer);
          const ee = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const ie of this._scene._afterRenderTargetPostProcessStage) ie.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = ee), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Ze) : Fe.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ze) : this.skipInitialClear || Ze.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Ze.onResizeObservable.add((() => {})), this._generateMipMaps = !!Je, this._doNotChangeAspectRatio = oe, Xe || (this._renderTargetOptions = {
          generateMipMaps: Je,
          type: Re,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: fe,
          generateStencilBuffer: pe,
          samples: Ee,
          creationFlags: ge,
          noColorAttachment: Oe,
          useSRGBBuffer: de,
          colorAttachment: Ke,
          label: this.name
        }, this.samplingMode === Me.e.NEAREST_SAMPLINGMODE && (this.wrapU = Me.e.CLAMP_ADDRESSMODE, this.wrapV = Me.e.CLAMP_ADDRESSMODE), Be || (ke ? (this._renderTarget = He.Nf().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Me.e.INVCUBIC_MODE, this._textureMatrix = be.b.Identity()) : this._renderTarget = He.Nf().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Ee && (this.samples = Ee)))
      }
      createDepthStencilTexture() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(ee, ie, He, ye, be, Me)
      }
      _processSizeParameter(ee) {
        if (ee.ratio) {
          this._sizeRatio = ee.ratio;
          const ie = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(ie.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(ie.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = ee
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(ee) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(ee))
      }
      addPostProcess(ee) {
        if (!this._postProcessManager) {
          const ee = this.Xx();
          if (!ee) return;
          this._postProcessManager = new Ke.c(ee), this._postProcesses = new Array
        }
        this._postProcesses.push(ee), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (ee)
            for (const ee of this._postProcesses) ee.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(ee) {
        if (!this._postProcesses) return;
        const ie = this._postProcesses.indexOf(ee); - 1 !== ie && (this._postProcesses.splice(ie, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(ee) {
        this._objectRenderer.refreshRate = ee
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
        const ee = this._size.layers;
        if (ee) return ee;
        const ie = this._size.depth;
        return ie || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(ee) {
        const ie = Math.max(1, this.getRenderSize() * ee);
        this.resize(ie)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(ee) {
        const ie = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const He = this.Xx();
        He && (this._processSizeParameter(ee), this._renderTarget = ie ? He.Nf().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : He.Nf().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(ee, ie)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => He(45032))).then((ee => this._dumpTools = ee))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const ee = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), ee
      }
      _render() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this.Xx();
        if (!He) return;
        void 0 !== this.useCameraPostProcesses && (ee = this.useCameraPostProcesses);
        const ye = He.Nf();
        if (ye._debugPushGroup && ye._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let be = 0; be < 6; be++) this._renderToTarget(be, ee, ie), He.incrementRenderId(), He.resetCachedMaterial();
          else this._renderToTarget(0, ee, ie);
        else
          for (let be = 0; be < this.getRenderLayers(); be++) this._renderToTarget(0, ee, ie, be), He.incrementRenderId(), He.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), ye._debugPopGroup && ye._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(ee, ie) {
        const He = ee * ie,
          ye = (0, Ue.q)(He + 16384 / (128 + He));
        return Math.min((0, Ue.d)(ee), ye)
      }
      _bindFrameBuffer() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = this.Xx();
        if (!He) return;
        const ye = He.Nf();
        this._renderTarget && ye.bindFramebuffer(this._renderTarget, this.isCube ? ee : void 0, void 0, void 0, this.ignoreCameraViewport, 0, ie)
      }
      _unbindFrameBuffer(ee, ie) {
        this._renderTarget && ee.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ie)
        }))
      }
      _prepareFrame(ee, ie, He, ye) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(ie, He) : ye && ee.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(ie, He)
      }
      _renderToTarget(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const be = this.Xx();
        if (!be) return;
        const Me = be.Nf();
        this._currentFaceIndex = ee, this._currentLayer = ye, this._currentUseCameraPostProcess = ie, this._currentDumpForDebug = He, this._prepareFrame(be, ee, ye, ie), this._objectRenderer.render(ee + ye, !0), this._unbindFrameBuffer(Me, ee), this._texture && this.isCube && 5 === ee && Me.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(ee, ie, He, ye)
      }
      setRenderingAutoClearDepthStencil(ee, ie) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(ee, ie)
      }
      clone() {
        const ee = this.getSize(),
          ie = new Xe(this.name, ee, this.Xx(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return ie.hasAlpha = this.hasAlpha, ie.level = this.level, ie.coordinatesMode = this.coordinatesMode, this.renderList && (ie.renderList = this.renderList.slice(0)), ie
      }
      serialize() {
        if (!this.name) return null;
        const ee = super.serialize();
        if (ee.renderTargetSize = this.getRenderSize(), ee.renderList = [], this.renderList)
          for (let ie = 0; ie < this.renderList.length; ie++) ee.renderList.push(this.renderList[ie].id);
        return ee
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Xx().Nf().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const ee = this.Xx();
        if (!ee) return;
        let ie = ee.customRenderTargets.indexOf(this);
        ie >= 0 && ee.customRenderTargets.splice(ie, 1);
        for (const He of ee.cameras) ie = He.customRenderTargets.indexOf(this), ie >= 0 && He.customRenderTargets.splice(ie, 1);
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
    Xe.REFRESHRATE_RENDER_ONCE = Te.REFRESHRATE_RENDER_ONCE, Xe.REFRESHRATE_RENDER_ONEVERYFRAME = Te.REFRESHRATE_RENDER_ONEVERYFRAME, Xe.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Te.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Xe.prototype, "noPrePassRenderer") || Object.defineProperty(Xe.prototype, "noPrePassRenderer", (0, pe.d)("RenderTargetTexture", "noPrePassRenderer"))
  },
  45006: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      f: () => oe
    });
    var ye = He(41247),
      be = He(38919),
      Me = He(37931),
      Ke = He(40945),
      Ue = He(41446);
    const Fe = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Je {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fe;
        this._fullscreenViewport = new be.d(0, 0, 1, 1);
        const He = ie.positions ?? Fe.positions,
          Me = ie.indices ?? Fe.indices;
        this.engine = ee, this._vertexBuffers = {
          [ye.h.PositionKind]: new ye.h(ee, He, ye.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = ee.createIndexBuffer(Me), this._indexBufferLength = Me.length, this._onContextRestoredObserver = ee.hf.add((() => {
          this._indexBuffer = ee.createIndexBuffer(Me);
          for (const ee in this._vertexBuffers) {
            this._vertexBuffers[ee]._rebuild()
          }
        }))
      }
      setViewport() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(ee)
      }
      bindBuffers(ee) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, ee)
      }
      applyEffectWrapper(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = ie, this.engine.stencilState.stencilTest = He, this.engine.enableEffect(ee.drawWrapper), this.bindBuffers(ee.effect), ee.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(ee) {
        return void 0 !== ee.renderTarget
      }
      render(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!ee.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const He = null === ie ? null : this._isRenderTargetTexture(ie) ? ie.renderTarget : ie;
        He && this.engine.bindFramebuffer(He), this.applyEffectWrapper(ee), this.draw(), He && this.engine.unBindFramebuffer(He), this.restoreStates()
      }
      dispose() {
        const ee = this._vertexBuffers[ye.h.PositionKind];
        ee && (ee.dispose(), delete this._vertexBuffers[ye.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.hf.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class oe {
      static RegisterShaderCodeProcessing(ee, ie) {
        ie ? oe._CustomShaderCodeProcessing[ee ?? ""] = ie : delete oe._CustomShaderCodeProcessing[ee ?? ""]
      }
      static _GetShaderCodeProcessing(ee) {
        return oe._CustomShaderCodeProcessing[ee] ?? oe._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(ee) {
        this.options.name = ee
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
      set effect(ee) {
        this._drawWrapper.effect = ee
      }
      constructor(ee) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Me.d(void 0, !0), this.onApplyObservable = new Me.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...ee,
          name: ee.name || "effectWrapper",
          engine: ee.engine,
          uniforms: ee.uniforms || ee.uniformNames || [],
          uniformNames: void 0,
          samplers: ee.samplers || ee.samplerNames || [],
          samplerNames: void 0,
          attributeNames: ee.attributeNames || ["position"],
          uniformBuffers: ee.uniformBuffers || [],
          defines: ee.defines || "",
          useShaderStore: ee.useShaderStore || !1,
          vertexUrl: ee.vertexUrl || ee.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: ee.fragmentShader || "pass",
          indexParameters: ee.indexParameters,
          blockCompilation: ee.blockCompilation || !1,
          shaderLanguage: ee.shaderLanguage || 0,
          onCompiled: ee.onCompiled || void 0,
          extraInitializations: ee.extraInitializations || void 0,
          extraInitializationsAsync: ee.extraInitializationsAsync || void 0,
          useAsPostProcess: ee.useAsPostProcess ?? !1,
          allowEmptySourceTexture: ee.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), ee.vertexUrl || ee.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.hf.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Ue.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const ie = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, ie, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ye = arguments.length > 2 ? arguments[2] : void 0,
          be = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, be && this._importPromises.push(...be);
        const Me = this.options.engine.isWebGPU && !oe.ForceGLSL;
        this._gatherImports(Me, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Me && this._webGPUReady ? He.e(672).then((() => He(63952))) : He.e(662).then((() => He(63834)))), void 0 !== ye && ye(Me, this._importPromises), Me && this._webGPUReady && (this.options.shaderLanguage = 1), ee || this.updateEffect(ie)
      }
      updateEffect() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ue = arguments.length > 6 ? arguments[6] : void 0,
          Fe = arguments.length > 7 ? arguments[7] : void 0;
        const Je = oe._GetShaderCodeProcessing(this.name);
        if (Je?.defineCustomBindings) {
          const ye = ie?.slice() ?? [];
          ye.push(...this.options.uniforms);
          const be = He?.slice() ?? [];
          be.push(...this.options.samplers), ee = Je.defineCustomBindings(this.name, ee, ye, be), ie = ye, He = be
        }
        this.options.defines = ee || "";
        const Re = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let ke;
        ke = this.options.extraInitializationsAsync ? async () => {
          await (Re?.()), await this.options.extraInitializationsAsync()
        }: Re, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Ue ?? this._shaderPath.vertex,
          fragment: Fe ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: ie || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: He || this.options.samplers,
          defines: null !== ee ? ee : "",
          fallbacks: null,
          onCompiled: be ?? this.options.onCompiled,
          onError: Me ?? null,
          indexParameters: ye || this.options.indexParameters,
          processCodeAfterIncludes: Je?.processCodeAfterIncludes ? (ee, ie) => Je.processCodeAfterIncludes(this.name, ee, ie) : null,
          processFinalCode: Je?.processFinalCode ? (ee, ie) => Je.processFinalCode(this.name, ee, ie) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: ke
        }, this.options.engine) : this._drawWrapper.effect = new Ke.c(this._shaderPath, this.options.attributeNames, ie || this.options.uniforms, He || this.options.samplerNames, this.options.engine, ee, void 0, be || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, ke), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !ee && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), oe._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Nf().hf.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    oe.ForceGLSL = !1, oe._CustomShaderCodeProcessing = {}
  },
  45032: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Dispose: () => ze,
      DumpData: () => Xe,
      DumpDataAsync: () => pe,
      DumpFramebuffer: () => Te,
      DumpTools: () => Be,
      EncodeImageAsync: () => fe,
      RegisterDumpTools: () => ge
    });
    var ye = He(41113),
      be = He(45006),
      Me = He(41203),
      Ke = He(37938),
      Ue = He(37929),
      Fe = He(39467),
      Je = He(41172),
      oe = He(41121);
    let Re = null;
    async function ke() {
      return Re || (Re = async function() {
        const ee = Ue.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        ee instanceof OffscreenCanvas && Fe.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: ie
        } = await Promise.resolve().then((() => He(40936)));
        if (!ie.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const ye = new ie(ee, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Ue.b.Instances.pop(), Ue.b.OnEnginesDisposedObservable.add((ee => {
          ye && ee !== ye && !ye.RZ && 0 === Ue.b.Instances.length && ze()
        })), ye.getCaps().parallelShaderCompile = void 0;
        const Me = new be.c(ye),
          {
            passPixelShader: Ke
          } = await He.e(680).then((() => He(64008))),
          Je = new be.f({
            engine: ye,
            name: Ke.name,
            fragmentShader: Ke.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: ee,
          dumpEngine: {
            engine: ye,
            renderer: Me,
            wrapper: Je
          }
        }
      }()), await Re
    }
    let qe = (() => {
      var ee;
      let ie, He = [];
      return ee = class {
        static async EncodeImageAsync(ee, ie, He, ye, be, Ke) {
          const Ue = await ke(),
            Fe = Ue.dumpEngine;
          Fe.engine.setSize(ie, He, !0);
          const Je = Fe.engine.createRawTexture(ee, ie, He, 5, !1, !be, 1);
          return Fe.renderer.setViewport(), Fe.renderer.applyEffectWrapper(Fe.wrapper), Fe.wrapper.effect._bindTexture("textureSampler", Je), Fe.renderer.draw(), Je.dispose(), await new Promise(((ee, ie) => {
            Me.h.ToBlob(Ue.canvas, (He => {
              He ? ee(He) : ie(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), ye, Ke)
          }))
        }
      }, (() => {
        const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [oe.h], (0, ye.i)(ee, null, ie, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: ee => "EncodeImageAsync" in ee,
            get: ee => ee.EncodeImageAsync
          },
          metadata: be
        }, null, He), be && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: be
        }), (0, ye.l)(ee, He)
      })(), ee
    })();
    const fe = qe.EncodeImageAsync;
    async function Te(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Me = arguments.length > 5 ? arguments[5] : void 0,
        Ke = arguments.length > 6 ? arguments[6] : void 0;
      const Ue = await He.readPixels(0, 0, ee, ie);
      Xe(ee, ie, new Uint8Array(Ue.buffer), ye, be, Me, !0, void 0, Ke)
    }
    async function pe(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        be = arguments.length > 4 ? arguments[4] : void 0,
        Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oe = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Re = arguments.length > 7 ? arguments[7] : void 0;
      if (He instanceof Float32Array) {
        const ee = new Uint8Array(He.length);
        let ie = He.length;
        for (; ie--;) {
          const ye = He[ie];
          ee[ie] = Math.round(255 * (0, Ke.Clamp)(ye))
        }
        He = ee
      }
      const ke = await qe.EncodeImageAsync(He, ee, ie, ye, Ue, Re);
      void 0 !== be && Me.h.DownloadBlob(ke, be), ke.type !== ye && Fe.e.Warn(`DumpData: The requested mimeType '${ye}' is not supported. The result has mimeType '${ke.type}' instead.`);
      const fe = await ke.arrayBuffer();
      return oe ? fe : `data:${ye};base64,${(0,Je.j)(fe)}`
    }

    function Xe(ee, ie, He, ye) {
      let be = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== be || ye || (be = ""), pe(ee, ie, He, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", be, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((ee => {
        ye && ye(ee)
      }))
    }

    function ze() {
      Re && (Re?.then((ee => {
        ee.canvas instanceof HTMLCanvasElement && ee.canvas.remove(), ee.dumpEngine && (ee.dumpEngine.engine.dispose(), ee.dumpEngine.renderer.dispose(), ee.dumpEngine.wrapper.dispose())
      })), Re = null)
    }
    const Be = {
      DumpData: Xe,
      DumpDataAsync: pe,
      DumpFramebuffer: Te,
      Dispose: ze
    };
    let Ee = !1;

    function ge() {
      if (Ee) return;
      Ee = !0;
      Me.h.DumpData = Xe, Me.h.DumpDataAsync = pe, Me.h.DumpFramebuffer = Te
    }
  },
  45015: (ee, ie, He) => {
    He.d(ie, {
      d: () => qe,
      e: () => fe,
      g: () => Te
    });
    var ye = He(41593),
      be = He(45019),
      Me = He(41113),
      Ke = He(44998),
      Ue = He(41141),
      Fe = He(45023),
      Je = He(41121);
    class oe extends Ke.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(ee, ie) {
        let He = arguments.length > 4 ? arguments[4] : void 0;
        const ye = {
          size: "number" === typeof ie ? ie : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: He,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...ie
        };
        super(ee, Fe.d.FragmentUrl, {
          effectWrapper: "number" !== typeof ie && ie.effectWrapper ? void 0 : new Fe.d(ee, He, ye),
          ...ye
        })
      }
      static _Parse(ee, ie, He, ye) {
        return Ue.c.Parse((() => new oe(ee.name, ee.options, ie, ee.renderTargetSamplingMode, ee._engine, ee.reusable)), ee, He, ye)
      }
    }(() => {
      var ee;
      let ie, He = Ke.b,
        ye = [];
      ee = class extends He {
        get face() {
          return this._effectWrapper.face
        }
        set face(ee) {
          this._effectWrapper.face = ee
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(ee, ie) {
          let He = arguments.length > 4 ? arguments[4] : void 0;
          const be = {
            size: "number" === typeof ie ? ie : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: He,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...ie
          };
          super(ee, Fe.d.FragmentUrl, {
            effectWrapper: "number" !== typeof ie && ie.effectWrapper ? void 0 : new Fe.b(ee, He, be),
            ...be
          }), (0, Me.l)(this, ye)
        }
        static _Parse(ie, He, ye, be) {
          return Ue.c.Parse((() => new ee(ie.name, ie.options, He, ie.renderTargetSamplingMode, ie._engine, ie.reusable)), ie, ye, be)
        }
      }, (() => {
        const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(He[Symbol.metadata] ?? null) : void 0;
        ie = [(0, Je.R)()], (0, Me.i)(ee, null, ie, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: ee => "face" in ee,
            get: ee => ee.face
          },
          metadata: be
        }, null, ye), be && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: be
        })
      })()
    })();
    var Re = He(37938),
      ke = He(41178);

    function qe(ee, ie, He, ye, be, Me, Ue, Fe) {
      const Je = ie.Nf();
      return ie.isReady = !1, be = be ?? ie.samplingMode, ye = ye ?? ie.type, Me = Me ?? ie.format, Ue = Ue ?? ie.width, Fe = Fe ?? ie.height, -1 === ye && (ye = 0), new Promise((oe => {
        const Re = new Ke.b("postprocess", ee, null, null, 1, null, be, Je, !1, void 0, ye, void 0, null, !1, Me);
        Re.externalTextureSamplerBinding = !0;
        const ke = Je.createRenderTargetTexture({
          width: Ue,
          height: Fe
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: be,
          type: ye,
          format: Me
        });
        Re.onEffectCreatedObservable.addOnce((ee => {
          ee.executeWhenCompiled((() => {
            Re.onApply = ee => {
              ee._bindTexture("textureSampler", ie), ee.setFloat2("scale", 1, 1)
            }, He.postProcessManager.directRender([Re], ke, !0), Je.restoreDefaultFramebuffer(), Je._releaseTexture(ie), Re && Re.dispose(), ke._swapAndDie(ie), ie.type = ye, ie.format = 5, ie.isReady = !0, oe(ie)
          }))
        }))
      }))
    }
    async function fe(ee, ie, Me) {
      let Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fe = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Je = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oe = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(ee) {
        if (ee.isReady()) return;
        if (ee.loadingError) throw new Error(ee.errorObject?.message || `Texture ${ee.name} errored while loading.`);
        const ie = ee.onLoadObservable;
        if (ie) return await new Promise((ee => ie.addOnce((() => ee()))));
        const He = ee._texture?.onLoadedObservable;
        if (He) return await new Promise((ee => He.addOnce((() => ee()))));
        throw new Error(`Cannot determine readiness of texture ${ee.name}.`)
      }(ee);
      const ke = ee.getInternalTexture(),
        qe = ee.is3D || !!ke?.is3D,
        {
          width: fe,
          height: Te
        } = ee.getSize(),
        pe = ie ?? fe,
        Xe = Me ?? Te;
      if (Je || qe || function(ee) {
          switch (ee) {
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
        }(ee.textureFormat) || pe !== fe || Xe !== Te) {
        if (ee.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Je?"RTT":"compression"} is not supported.`);
        return await async function(ee, ie, Me, Ue, Fe) {
          let Je = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const oe = ee.Xx(),
            Re = oe.Nf(),
            ke = ee.getInternalTexture(),
            qe = ee.is3D || !!ke?.is3D;
          let fe;
          if (Re.isWebGPU ? qe ? await He.e(676).then((() => He(63985))) : ee.isCube ? await He.e(677).then((() => He(63989))) : await He.e(678).then((() => He(63995))) : qe ? await He.e(673).then((() => He(63965))) : ee.isCube ? await He.e(674).then((() => He(63972))) : await He.e(675).then((() => He(63978))), qe) fe = new Ke.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: ye.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Re,
            shaderLanguage: Re.isWebGPU ? 1 : 0
          });
          else if (ee.isCube) {
            const ee = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            fe = new Ke.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: ye.e.NEAREST_NEAREST_MIPNEAREST,
              engine: Re,
              defines: ee[Ue],
              shaderLanguage: Re.isWebGPU ? 1 : 0
            })
          } else fe = new Ke.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: ye.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Re,
            shaderLanguage: Re.isWebGPU ? 1 : 0
          });
          await new Promise((ee => {
            fe.onEffectCreatedObservable.addOnce((ie => {
              ie.executeWhenCompiled((() => {
                ee(0)
              }))
            }))
          }));
          const Te = new be.e("temp", {
            width: ie,
            height: Me
          }, oe, !1);
          fe.onApply = function(ie) {
            ie.setTexture("textureSampler", ee), ie.setFloat("lod", Fe), ie.setInt("gamma", ee.gammaSpace ? 1 : 0), qe && ie.setFloat("slice", Je)
          };
          try {
            if (Te.renderTarget && ke) {
              const He = ke.samplingMode;
              0 !== Fe ? ee.updateSamplingMode(ye.e.NEAREST_NEAREST_MIPNEAREST) : ee.updateSamplingMode(ye.e.NEAREST_NEAREST), oe.postProcessManager.directRender([fe], Te.renderTarget, !0), ee.updateSamplingMode(He);
              const be = await Re.readPixels(0, 0, ie, Me),
                Ke = new Uint8Array(be.buffer, be.byteOffset, be.byteLength);
              return Re.unBindFramebuffer(Te.renderTarget), Ke
            }
            throw Error("Render to texture failed.")
          } finally {
            Te.dispose(), fe.dispose()
          }
        }(ee, pe, Xe, Ue, Fe, oe)
      }
      let ze = await ee.readPixels(Ue, Fe);
      if (!ze) throw new Error(`Failed to read pixels from texture ${ee.name}.`);
      if (ze instanceof Float32Array) {
        const ee = new Uint8Array(ze.length);
        let ie = ze.length;
        for (; ie--;) {
          const He = ze[ie];
          ee[ie] = Math.round(255 * (0, Re.Clamp)(He))
        }
        ze = ee
      }
      const Be = pe * Xe,
        Ee = 4 * Be;
      if (ze.length !== Ee) {
        const ee = 0 === Be ? 0 : ze.length / Be;
        if (1 === ee || 2 === ee || 3 === ee) {
          const ie = new Uint8Array(Ee);
          for (let He = 0, ye = 0, be = 0; He < Be; He++, be += 4) {
            const He = ze[ye++];
            if (1 === ee) {
              ie[be] = He, ie[be + 1] = He, ie[be + 2] = He, ie[be + 3] = 255;
              continue
            }
            const Me = ze[ye++];
            2 !== ee ? (ie[be] = He, ie[be + 1] = Me, ie[be + 2] = ze[ye++], ie[be + 3] = 255) : (ie[be] = He, ie[be + 1] = Me, ie[be + 2] = 0, ie[be + 3] = 255)
          }
          return ie
        }
      }
      return ze
    }
    const Te = {
      CreateResizedCopy: function(ee, ie, He) {
        let Me = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ke = ee.Xx(),
          Ue = Ke.Nf(),
          Fe = new be.e("resized" + ee.name, {
            width: ie,
            height: He
          }, Ke, !ee.noMipmap, !0, ee._texture.type, !1, ee.samplingMode, !1);
        Fe.wrapU = ee.wrapU, Fe.wrapV = ee.wrapV, Fe.uOffset = ee.uOffset, Fe.vOffset = ee.vOffset, Fe.uScale = ee.uScale, Fe.vScale = ee.vScale, Fe.uAng = ee.uAng, Fe.vAng = ee.vAng, Fe.wAng = ee.wAng, Fe.coordinatesIndex = ee.coordinatesIndex, Fe.level = ee.level, Fe.anisotropicFilteringLevel = ee.anisotropicFilteringLevel, Fe._texture.isReady = !1, ee.wrapU = ye.e.CLAMP_ADDRESSMODE, ee.wrapV = ye.e.CLAMP_ADDRESSMODE;
        const Je = new oe("pass", 1, null, Me ? ye.e.BILINEAR_SAMPLINGMODE : ye.e.NEAREST_SAMPLINGMODE, Ue, !1, 0);
        return Je.externalTextureSamplerBinding = !0, Je.onEffectCreatedObservable.addOnce((ie => {
          ie.executeWhenCompiled((() => {
            Je.onApply = function(ie) {
              ie.setTexture("textureSampler", ee)
            };
            const ie = Fe.renderTarget;
            ie && (Ke.postProcessManager.directRender([Je], ie), Ue.unBindFramebuffer(ie), Fe.disposeFramebufferObjects(), Je.dispose(), Fe.getInternalTexture().isReady = !0)
          }))
        })), Fe
      },
      ApplyPostProcess: qe,
      ToHalfFloat: ke.j,
      FromHalfFloat: ke.d,
      GetTextureDataAsync: fe
    }
  },
  44998: (ee, ie, He) => {
    He.d(ie, {
      b: () => fe
    });
    var ye = He(41113),
      be = He(41216),
      Me = He(37931),
      Ke = He(37917),
      Ue = He(40945),
      Fe = He(41121),
      Je = He(41141),
      oe = He(37949),
      Re = He(41e3),
      ke = He(41044),
      qe = He(45006);
    let fe = (() => {
        var ee;
        let ie, Ue, Re, fe, Te, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De = [],
          Pe = [],
          Ae = [],
          Ye = [],
          Ve = [],
          ae = [],
          ce = [],
          xe = [],
          Le = [],
          Ce = [],
          ve = [],
          ue = [],
          me = [],
          le = [],
          Se = [],
          ne = [],
          je = [],
          se = [],
          Ie = [],
          he = [],
          Ne = [],
          Ge = [],
          re = [],
          Qe = [],
          ei = [],
          ii = [],
          Hi = [],
          yi = [],
          bi = [];
        return ee = class {
          static get ForceGLSL() {
            return qe.f.ForceGLSL
          }
          static set ForceGLSL(ee) {
            qe.f.ForceGLSL = ee
          }
          static RegisterShaderCodeProcessing(ee, ie) {
            qe.f.RegisterShaderCodeProcessing(ee, ie)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(ee) {
            this._effectWrapper.name = ee
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(ee) {
            this._effectWrapper.alphaMode = ee
          }
          get samples() {
            return this._samples
          }
          set samples(ee) {
            this._samples = Math.min(ee, this._engine.getCaps().maxMSAASamples), this._textures.forEach((ee => {
              ee.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(ee) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), ee && (this._onActivateObserver = this.onActivateObservable.add(ee))
          }
          set onSizeChanged(ee) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(ee)
          }
          set onApply(ee) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(ee)
          }
          set onBeforeRender(ee) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(ee)
          }
          set onAfterRender(ee) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(ee)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(ee) {
            this._forcedOutputTexture = ee
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.U1
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.wie(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(ie, He, Ue, Fe, Je, oe) {
            let Re = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              ke = arguments.length > 7 ? arguments[7] : void 0,
              fe = arguments.length > 8 ? arguments[8] : void 0,
              Te = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Xe = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              ze = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Be = arguments.length > 12 ? arguments[12] : void 0,
              Ee = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              ge = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Oe = arguments.length > 15 ? arguments[15] : void 0,
              de = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, ye.l)(this, De), null), this.uniqueId = (0, ye.l)(this, Pe, void 0), this.width = ((0, ye.l)(this, Ae), (0, ye.l)(this, Ye, -1)), this.height = ((0, ye.l)(this, Ve), (0, ye.l)(this, ae, -1)), this.nodeMaterialSource = ((0, ye.l)(this, ce), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, ye.l)(this, xe, void 0), this.clearColor = ((0, ye.l)(this, Le), (0, ye.l)(this, Ce, void 0)), this.autoClear = ((0, ye.l)(this, ve), (0, ye.l)(this, ue, !0)), this.forceAutoClearInAlphaMode = ((0, ye.l)(this, me), (0, ye.l)(this, le, !1)), this.alphaConstants = ((0, ye.l)(this, Se), (0, ye.l)(this, ne, void 0)), this.animations = ((0, ye.l)(this, je), []), this.enablePixelPerfectMode = (0, ye.l)(this, se, !1), this.forceFullscreenViewport = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, !0)), this.inspectableCustomProperties = (0, ye.l)(this, Ne), this.scaleMode = (0, ye.l)(this, Ge, 1), this.alwaysForcePOT = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, !1)), this._samples = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, 1)), this.adaptScaleToCurrentViewport = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, !1)), this.doNotSerialize = ((0, ye.l)(this, bi), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new be.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Ke.n(1, 1), this._texelSize = Ke.n.Zero(), this.onActivateObservable = new Me.d, this.onSizeChangedObservable = new Me.d, this.onApplyObservable = new Me.d, this.onBeforeRenderObservable = new Me.d, this.onAfterRenderObservable = new Me.d, this.Bx = new Me.d, pe();
            let We, te = 1,
              Ze = null;
            if (Ue && !Array.isArray(Ue)) {
              const ee = Ue;
              Ue = ee.uniforms ?? null, Fe = ee.samplers ?? null, te = ee.size ?? 1, oe = ee.camera ?? null, Re = ee.samplingMode ?? 1, ke = ee.engine, fe = ee.reusable, Te = Array.isArray(ee.defines) ? ee.defines.join("\n") : ee.defines ?? null, Xe = ee.textureType ?? 0, ze = ee.vertexUrl ?? "postprocess", Be = ee.indexParameters, Ee = ee.blockCompilation ?? !1, ge = ee.textureFormat ?? 5, Oe = ee.shaderLanguage ?? 0, Ze = ee.uniformBuffers ?? null, de = ee.extraInitializations, We = ee.effectWrapper
            } else Je && (te = "number" === typeof Je ? Je : {
              width: Je.width,
              height: Je.height
            });
            if (this._useExistingThinPostProcess = !!We, this._effectWrapper = We ?? new qe.f({
                name: ie,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: He,
                engine: ke || oe?.Xx().Nf(),
                uniforms: Ue,
                samplers: Fe,
                uniformBuffers: Ze,
                defines: Te,
                vertexUrl: ze,
                indexParameters: Be,
                blockCompilation: !0,
                shaderLanguage: Oe,
                extraInitializations: void 0
              }), this.name = ie, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != oe ? (this.U1 = oe, this._scene = oe.Xx(), oe.attachPostProcess(this), this._engine = this._scene.Nf(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : ke && (this._engine = ke, this._engine.postProcesses.push(this)), this._options = te, this.renderTargetSamplingMode = Re || 1, this._reusable = fe || !1, this._textureType = Xe, this._textureFormat = ge, this._shaderLanguage = Oe || 0, this._samplers = Fe || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = He, this._vertexUrl = ze, this._parameters = Ue || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Ze || [], this._indexParameters = Be, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const ie = [];
              this._gatherImports(this._engine.isWebGPU && !ee.ForceGLSL, ie), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Ee, Te, de, ie)
            }
          }
          _gatherImports() {
            let ee = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? ee.push(Promise.all([He.e(672).then((() => He(63952)))])) : ee.push(Promise.all([He.e(662).then((() => He(63834)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Nf() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(ee) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = ee, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new be.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ye = arguments.length > 3 ? arguments[3] : void 0,
              be = arguments.length > 4 ? arguments[4] : void 0,
              Me = arguments.length > 5 ? arguments[5] : void 0,
              Ke = arguments.length > 6 ? arguments[6] : void 0,
              Ue = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(ee, ie, He, ye, be, Me, Ke, Ue), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let be = 0; be < this._textureCache.length; be++)
              if (this._textureCache[be].texture.width === ee.width && this._textureCache[be].texture.height === ee.height && this._textureCache[be].postProcessChannel === He && this._textureCache[be].texture._generateDepthBuffer === ie.generateDepthBuffer && this._textureCache[be].texture.samples === ie.samples) return this._textureCache[be].texture;
            const ye = this._engine.createRenderTargetTexture(ee, ie);
            return this._textureCache.push({
              texture: ye,
              postProcessChannel: He,
              lastUsedRenderId: -1
            }), ye
          }
          _flushTextureCache() {
            const ee = this._renderId;
            for (let ie = this._textureCache.length - 1; ie >= 0; ie--)
              if (ee - this._textureCache[ie].lastUsedRenderId > 100) {
                let ee = !1;
                for (let He = 0; He < this._textures.length; He++)
                  if (this._textures.data[He] === this._textureCache[ie].texture) {
                    ee = !0;
                    break
                  } ee || (this._textureCache[ie].texture.dispose(), this._textureCache.splice(ie, 1))
              }
          }
          resize(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = ee, this.height = ie;
            let Me = null;
            if (He)
              for (let Fe = 0; Fe < He._postProcesses.length; Fe++)
                if (null !== He._postProcesses[Fe]) {
                  Me = He._postProcesses[Fe];
                  break
                } const Ke = {
                width: this.width,
                height: this.height
              },
              Ue = {
                generateMipMaps: ye,
                generateDepthBuffer: be || Me === this,
                generateStencilBuffer: (be || Me === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Ke, Ue, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Ke, Ue, 1)), this._texelSize.wie(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let ee;
            if (this._shareOutputWithPostProcess) ee = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) ee = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let ie;
              ee = this.inputTexture;
              for (let He = 0; He < this._textureCache.length; He++)
                if (this._textureCache[He].texture === ee) {
                  ie = this._textureCache[He];
                  break
                } ie && (ie.lastUsedRenderId = this._renderId)
            }
            return ee
          }
          activate(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              He = arguments.length > 2 ? arguments[2] : void 0;
            const ye = null === ee || void 0 !== ee.cameraRigMode ? ee || this.U1 : null,
              be = ye?.Xx() ?? ee,
              Me = be.Nf(),
              Ke = Me.getCaps().maxTextureSize,
              Ue = (ie ? ie.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Fe = (ie ? ie.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Je = this._options.width || Ue,
              oe = this._options.height || Fe;
            const Re = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let qe = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const ee = Me.currentViewport;
                ee && (Je *= ee.width, oe *= ee.height)
              }(Re || this.alwaysForcePOT) && (this._options.width || (Je = Me.needPOTTextures ? (0, ke.h)(Je, Ke, this.scaleMode) : Je), this._options.height || (oe = Me.needPOTTextures ? (0, ke.h)(oe, Ke, this.scaleMode) : oe)), this.width === Je && this.height === oe && (qe = this._getTarget()) || this.resize(Je, oe, ye, Re, He), this._textures.forEach((ee => {
                ee.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(ee, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return qe || (qe = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.wie(Ue / Je, Fe / oe), this._engine.bindFramebuffer(qe, 0, Ue, Fe, this.forceFullscreenViewport)) : (this._scaleRatio.wie(1, 1), this._engine.bindFramebuffer(qe, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(ye), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : be.clearColor, be._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), qe
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
            let ee;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Nf().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), ee = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", ee?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let ee = this._textureCache.length - 1; ee >= 0; ee--) this._textureCache[ee].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(ee) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = ee.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(ee) {
            let ie;
            if (ee = ee || this.U1, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (ie = this._parentContainer.postProcesses.indexOf(this), ie > -1 && this._parentContainer.postProcesses.splice(ie, 1), this._parentContainer = null), ie = this._engine.postProcesses.indexOf(this), -1 !== ie && this._engine.postProcesses.splice(ie, 1), this.Bx.notifyObservers(), ee) {
              if (ee.detachPostProcess(this), ie = ee._postProcesses.indexOf(this), 0 === ie && ee._postProcesses.length > 0) {
                const ee = this.U1._getFirstPostProcess();
                ee && ee.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const ee = Je.c.Serialize(this),
              ie = this.getCamera() || this._scene && this._scene.activeCamera;
            return ee.customType = "BABYLON." + this.getClassName(), ee.cameraId = ie ? ie.id : null, ee.reusable = this._reusable, ee.textureType = this._textureType, ee.fragmentUrl = this._fragmentUrl, ee.parameters = this._parameters, ee.samplers = this._samplers, ee.uniformBuffers = this._uniformBuffers, ee.options = this._options, ee.defines = this._postProcessDefines, ee.textureFormat = this._textureFormat, ee.vertexUrl = this._vertexUrl, ee.indexParameters = this._indexParameters, ee
          }
          clone() {
            const ie = this.serialize();
            ie._engine = this._engine, ie.cameraId = null;
            const He = ee.Parse(ie, this._scene, "");
            return He ? (He.onActivateObservable = this.onActivateObservable.clone(), He.onSizeChangedObservable = this.onSizeChangedObservable.clone(), He.onApplyObservable = this.onApplyObservable.clone(), He.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), He.onAfterRenderObservable = this.onAfterRenderObservable.clone(), He._prePassEffectConfiguration = this._prePassEffectConfiguration, He) : null
          }
          static Parse(ee, ie, He) {
            const ye = (0, oe.c)(ee.customType);
            if (!ye || !ye._Parse) return null;
            const be = ie ? ie.getCameraById(ee.cameraId) : null;
            return ye._Parse(ee, be, ie, He)
          }
          static _Parse(ie, He, ye, be) {
            return Je.c.Parse((() => new ee(ie.name, ie.fragmentUrl, ie.parameters, ie.samplers, ie.options, He, ie.renderTargetSamplingMode, ie._engine, ie.reusable, ie.defines, ie.textureType, ie.vertexUrl, ie.indexParameters, !1, ie.textureFormat)), ie, ye, be)
          }
        }, (() => {
          const He = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ie = [(0, Fe.R)()], Ue = [(0, Fe.R)()], Re = [(0, Fe.R)()], fe = [(0, Fe.R)()], Te = [(0, Fe.R)()], Xe = [(0, Fe.t)()], ze = [(0, Fe.R)()], Be = [(0, Fe.R)()], Ee = [(0, Fe.R)()], ge = [(0, Fe.R)()], Oe = [(0, Fe.R)()], de = [(0, Fe.R)()], We = [(0, Fe.R)()], te = [(0, Fe.R)()], Ze = [(0, Fe.R)("samples")], we = [(0, Fe.R)()], (0, ye.i)(ee, null, Ue, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: ee => "name" in ee,
              get: ee => ee.name
            },
            metadata: He
          }, null, De), (0, ye.i)(ee, null, Ee, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "alphaMode" in ee,
              get: ee => ee.alphaMode
            },
            metadata: He
          }, null, De), (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: ee => "uniqueId" in ee,
              get: ee => ee.uniqueId,
              set: (ee, ie) => {
                ee.uniqueId = ie
              }
            },
            metadata: He
          }, Pe, Ae), (0, ye.i)(null, null, Re, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: ee => "width" in ee,
              get: ee => ee.width,
              set: (ee, ie) => {
                ee.width = ie
              }
            },
            metadata: He
          }, Ye, Ve), (0, ye.i)(null, null, fe, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: ee => "height" in ee,
              get: ee => ee.height,
              set: (ee, ie) => {
                ee.height = ie
              }
            },
            metadata: He
          }, ae, ce), (0, ye.i)(null, null, Te, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "renderTargetSamplingMode" in ee,
              get: ee => ee.renderTargetSamplingMode,
              set: (ee, ie) => {
                ee.renderTargetSamplingMode = ie
              }
            },
            metadata: He
          }, xe, Le), (0, ye.i)(null, null, Xe, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "clearColor" in ee,
              get: ee => ee.clearColor,
              set: (ee, ie) => {
                ee.clearColor = ie
              }
            },
            metadata: He
          }, Ce, ve), (0, ye.i)(null, null, ze, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: ee => "autoClear" in ee,
              get: ee => ee.autoClear,
              set: (ee, ie) => {
                ee.autoClear = ie
              }
            },
            metadata: He
          }, ue, me), (0, ye.i)(null, null, Be, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "forceAutoClearInAlphaMode" in ee,
              get: ee => ee.forceAutoClearInAlphaMode,
              set: (ee, ie) => {
                ee.forceAutoClearInAlphaMode = ie
              }
            },
            metadata: He
          }, le, Se), (0, ye.i)(null, null, ge, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: ee => "alphaConstants" in ee,
              get: ee => ee.alphaConstants,
              set: (ee, ie) => {
                ee.alphaConstants = ie
              }
            },
            metadata: He
          }, ne, je), (0, ye.i)(null, null, Oe, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "enablePixelPerfectMode" in ee,
              get: ee => ee.enablePixelPerfectMode,
              set: (ee, ie) => {
                ee.enablePixelPerfectMode = ie
              }
            },
            metadata: He
          }, se, Ie), (0, ye.i)(null, null, de, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: ee => "forceFullscreenViewport" in ee,
              get: ee => ee.forceFullscreenViewport,
              set: (ee, ie) => {
                ee.forceFullscreenViewport = ie
              }
            },
            metadata: He
          }, he, Ne), (0, ye.i)(null, null, We, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "scaleMode" in ee,
              get: ee => ee.scaleMode,
              set: (ee, ie) => {
                ee.scaleMode = ie
              }
            },
            metadata: He
          }, Ge, re), (0, ye.i)(null, null, te, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: ee => "alwaysForcePOT" in ee,
              get: ee => ee.alwaysForcePOT,
              set: (ee, ie) => {
                ee.alwaysForcePOT = ie
              }
            },
            metadata: He
          }, Qe, ei), (0, ye.i)(null, null, Ze, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: ee => "_samples" in ee,
              get: ee => ee._samples,
              set: (ee, ie) => {
                ee._samples = ie
              }
            },
            metadata: He
          }, ii, Hi), (0, ye.i)(null, null, we, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: ee => "adaptScaleToCurrentViewport" in ee,
              get: ee => ee.adaptScaleToCurrentViewport,
              set: (ee, ie) => {
                ee.adaptScaleToCurrentViewport = ie
              }
            },
            metadata: He
          }, yi, bi), He && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: He
          })
        })(), ee
      })(),
      Te = !1;

    function pe() {
      Te || (Te = !0, Re.e.prototype.setTextureFromPostProcess = function(ee, ie, He) {
        let ye = null;
        ie && (ie._forcedOutputTexture ? ye = ie._forcedOutputTexture : ie._textures.data[ie._currentRenderTextureInd] && (ye = ie._textures.data[ie._currentRenderTextureInd])), this._bindTexture(ee, ye?.texture ?? null, He)
      }, Re.e.prototype.setTextureFromPostProcessOutput = function(ee, ie, He) {
        this._bindTexture(ee, ie?._outputTexture?.texture ?? null, He)
      }, Ue.c.prototype.setTextureFromPostProcess = function(ee, ie) {
        this._engine.setTextureFromPostProcess(this._samplers[ee], ie, ee)
      }, Ue.c.prototype.setTextureFromPostProcessOutput = function(ee, ie) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[ee], ie, ee)
      }, (0, oe.e)("BABYLON.PostProcess", fe))
    }
  },
  45023: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      d: () => Me
    });
    var ye = He(45006),
      be = He(37929);
    class Me extends ye.f {
      _gatherImports(ee, ie) {
        ee ? (this._webGPUReady = !0, ie.push(Promise.all([He.e(679).then((() => He(64004)))]))) : ie.push(Promise.all([He.e(680).then((() => He(64008)))])), super._gatherImports(ee, ie)
      }
      constructor(ee) {
        let ie = arguments.length > 2 ? arguments[2] : void 0;
        const He = {
          name: ee,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || be.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Me.FragmentUrl,
          ...ie
        };
        He.engine || (He.engine = be.b.LastCreatedEngine), super(He)
      }
    }
    Me.FragmentUrl = "pass";
    class Ke extends ye.f {
      _gatherImports(ee, ie) {
        ee ? (this._webGPUReady = !0, ie.push(Promise.all([He.e(681).then((() => He(64015)))]))) : ie.push(Promise.all([He.e(682).then((() => He(64018)))])), super._gatherImports(ee, ie)
      }
      constructor(ee) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: ee,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || be.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Ke.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(ee) {
        if (!(ee < 0 || ee > 5)) switch (this._face = ee, this._face) {
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
    Ke.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);