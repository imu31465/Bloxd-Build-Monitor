export const id = 316;
export const ids = [316];
export const modules = {
  41960: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => vT
    });
    var WT = mT(37219),
      zT = mT(37188),
      MT = mT(40602),
      gT = mT(40260),
      nT = mT(40022),
      HT = mT(38800),
      kT = mT(40242),
      jT = mT(40270),
      lT = mT(37205),
      LT = mT(39975),
      pT = mT(40215),
      BT = mT(40310);
    class ZT {
      get renderList() {
        return this._renderList
      }
      set renderList(TT) {
        this._renderList !== TT && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), TT && (this._unObserveRenderList = (0, lT.e)(TT, this._renderListHasChanged)), this._renderList = TT)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(TT) {
        TT !== this._disableImageProcessing && (this._disableImageProcessing = TT, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(TT) {
        this._disableDepthPrePass = TT, this._renderingManager.disableDepthPrePass = TT
      }
      get name() {
        return this._name
      }
      set name(TT) {
        if (this._name !== TT) {
          if (this._name = TT, this._sceneUBOs)
            for (let TT = 0; TT < this._sceneUBOs.length; ++TT) this._sceneUBOs[TT].name = `Scene ubo #${TT} for ${this.name}`;
          if (this._scene)
            for (let TT = 0; TT < this._renderPassIds.length; ++TT) {
              const UT = this._renderPassIds[TT];
              this._engine._renderPassNames[UT] = `${this._name}#${TT}`
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
      setMaterialForRendering(TT, UT) {
        let mT;
        mT = Array.isArray(TT) ? TT : [TT];
        for (let WT = 0; WT < mT.length; ++WT)
          for (let TT = 0; TT < this.options.numPasses; ++TT) {
            let zT = mT[WT];
            mT[WT].RP && (zT = mT[WT].czT), zT.setMaterialForRenderPass(this._renderPassIds[TT], void 0 !== UT ? Array.isArray(UT) ? UT[TT] : UT : void 0)
          }
      }
      _freezeActiveMeshes(TT) {
        this._freezeActiveMeshesCancel = (0, LT.i)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, TT)
            for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((TT, UT) => {
          this._freezeActiveMeshesCancel = null, UT ? (HT.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), TT && HT.b.Error(TT)) : (HT.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), TT && (HT.b.Error(TT), TT.stack && HT.b.Error(TT.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let TT = 0; TT < this._activeMeshes.length; TT++) this._activeMeshes.data[TT]._unFreeze();
        this._isFrozen = !1
      }
      constructor(TT, UT, mT) {
        this._unObserveRenderList = null, this._renderListHasChanged = (TT, UT) => {
          const mT = this._renderList ? this._renderList.length : 0;
          if (0 === UT && mT > 0 || 0 === mT)
            for (const WT of this._scene.meshes) WT._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new WT.d, this.onAfterRenderObservable = new WT.d, this.onBeforeRenderingManagerRenderObservable = new WT.d, this.onAfterRenderingManagerRenderObservable = new WT.d, this.onInitRenderingObservable = new WT.d, this.onFinishRenderingObservable = new WT.d, this.onFastPathRenderObservable = new WT.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new pT.f(256), this._activeBoundingBoxes = new pT.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = TT, this._scene = UT, this._engine = this._scene.eB(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...mT
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new jT.d(UT), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const TT of this._scene.lights) TT.getTypeID() === BT.b.LIGHTTYPEID_CLUSTERED_CONTAINER && TT.isSupported && TT._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let TT = 0; TT < this.options.numPasses; ++TT) this._engine.releaseRenderPassId(this._renderPassIds[TT]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let TT = 0; TT < this.options.numPasses; ++TT) this._renderPassIds[TT] = this._engine.createRenderPassId(`${this.name}#${TT}`)
      }
      _createSceneUBO(TT, UT) {
        const mT = this._scene.eB(),
          WT = new kT.c(mT, void 0, UT, TT, void 0, !1);
        return WT.addUniform("viewProjection", 16), UT && WT.addUniform("viewProjectionR", 16), WT.addUniform("view", 16), WT.addUniform("projection", 16), WT.addUniform("vEyePosition", 4), WT.addUniform("inverseProjection", 16), WT
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const TT = this._engine._currentRenderTarget,
          UT = !(!TT || !TT.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const TT = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${TT} for ${this.name}`, UT)), this._sceneUBOIsMultiview.push(UT)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== UT && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, UT), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = UT);
        const mT = this._sceneUBOs[this._currentSceneUBOIndex++];
        return mT.unbindEffect(), mT
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(TT) {
        this._refreshRate = TT, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(TT, UT) {
        this.prepareRenderList(), this.initRender(TT, UT);
        const mT = this._checkReadiness();
        return this.finishRender(), mT
      }
      prepareRenderList() {
        const TT = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let UT = 0; UT < this._waitingRenderList.length; UT++) {
              const mT = this._waitingRenderList[UT],
                WT = TT.getMeshById(mT);
              WT && this.renderList.push(WT)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const TT = this._scene.meshes;
          for (let UT = 0; UT < TT.length; UT++) {
            const mT = TT[UT];
            this.renderListPredicate(mT) && this.renderList.push(mT)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(TT, UT) {
        const mT = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), mT && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(mT.getViewMatrix(), mT.getProjectionMatrix(!0)), this._scene._activeCamera = mT, this._engine.setViewport(mT.rigParent ? mT.rigParent.viewport : mT.viewport, TT, UT)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const TT = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (TT.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), TT._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== TT.activeCamera && TT.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), TT.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[TT], this.onBeforeRenderObservable.notifyObservers(TT);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(TT);
        else {
          const UT = this._prepareRenderingManager(TT),
            mT = this._scene.getOutlineRenderer?.(),
            WT = mT?.enabled;
          mT && (mT.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(TT), this._renderingManager.render(this.customRenderFunction, UT, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(TT), mT && (mT.enabled = WT)
        }
        UT || this.onAfterRenderObservable.notifyObservers(TT), this._engine.currentRenderPassId = mT
      }
      _checkReadiness() {
        const TT = this._scene,
          UT = this._engine.currentRenderPassId;
        let mT = !0;
        TT.getViewMatrix() || TT.updateTransformMatrix();
        const WT = this.options.numPasses;
        for (let zT = 0; zT < WT && mT; zT++) {
          const UT = this.renderList ? this.renderList : TT.frameGraph ? TT.meshes : TT.getActiveMeshes().data,
            MT = this.renderList || TT.frameGraph ? UT.length : TT.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[zT], this.onBeforeRenderObservable.notifyObservers(zT);
          let gT = null,
            nT = MT;
          this.getCustomRenderList && (gT = this.getCustomRenderList(zT, UT, MT), gT && (nT = gT.length)), gT || (gT = UT), this.options.doNotChangeAspectRatio || TT.updateTransformMatrix(!0);
          for (let TT = 0; TT < nT && mT; ++TT) {
            const UT = gT[TT];
            if (!UT.isEnabled() || UT.isBlocked || !UT.isVisible || !UT.rY) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(UT, this.refreshRate, !0)) {
                mT = !1;
                continue
              }
            } else if (!UT.isReady(!0)) {
              mT = !1;
              continue
            }
            let WT = UT._edgesRenderer,
              zT = UT.hasThinInstances;
            if (UT.RP) {
              const TT = UT.czT;
              TT.edgesShareWithInstances && TT._edgesRenderer?.isEnabled && (WT = TT._edgesRenderer, zT = !0)
            } else UT.ZzT && UT.edgesShareWithInstances && (zT = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && WT?.isEnabled && (WT.isReady(zT) || (mT = !1))
          }
          if (this.renderParticles && TT.particlesEnabled) {
            const UT = this.particleSystemList || TT.EY;
            for (const TT of UT) TT.isReady() || (mT = !1)
          }
          if (this.renderSprites && TT.spritesEnabled) {
            const UT = this.spriteManagerList || TT.spriteManagers;
            if (UT)
              for (const WT of UT) TT.activeCamera && 0 === (WT.layerMask & TT.activeCamera.layerMask) || WT.isReady && !WT.isReady() && (mT = !1)
          }
          this.onAfterRenderObservable.notifyObservers(zT), WT > 1 && (TT.incrementRenderId(), TT.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = UT, mT
      }
      _prepareRenderingManager() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this._scene;
        let WT, zT, MT = null;
        const gT = this.renderList ? this.renderList : mT.frameGraph ? mT.meshes : mT.getActiveMeshes().data,
          nT = this.renderList || mT.frameGraph ? gT.length : mT.getActiveMeshes().length;
        if (this.getCustomRenderList && (MT = this.getCustomRenderList(TT, gT, nT)), MT) WT = MT.length, zT = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !UT && !this._engine.isWebGPU) return gT;
          this._defaultRenderListPrepared = !0, MT = gT, WT = nT, zT = !this.renderList || this.forceLayerMaskCheck
        }
        const HT = mT.activeCamera,
          kT = this.cameraForLOD ?? HT,
          jT = mT.getBoundingBoxRenderer?.();
        if (mT._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && jT) {
            jT.reset();
            for (let TT = 0; TT < this._activeBoundingBoxes.length; TT++) {
              const UT = this._activeBoundingBoxes.data[TT];
              jT.renderList.push(UT)
            }
          }
          return MT
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), jT && jT.reset(), this.renderMeshes) {
          const TT = mT.getRenderId(),
            UT = mT.getFrameId();
          for (let gT = 0; gT < WT; gT++) {
            const WT = MT[gT];
            if (WT && !WT.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(WT, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!WT.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let MT, gT;
              if (kT) {
                const TT = WT._internalAbstractMeshDataInfo._currentLOD.get(kT);
                TT && TT[1] === UT ? MT = TT[0] : (MT = mT.customLODSelector ? mT.customLODSelector(WT, kT) : WT.getLOD(kT), TT ? (TT[0] = MT, TT[1] = UT) : WT._internalAbstractMeshDataInfo._currentLOD.set(kT, [MT, UT]))
              } else MT = WT;
              if (!MT) continue;
              if (MT !== WT && 0 !== MT.billboardMode && MT.computeWorldMatrix(), MT._preActivateForIntermediateRendering(TT), gT = !(!zT || !HT) && 0 === (WT.layerMask & HT.layerMask), WT.isEnabled() && WT.isVisible && WT.rY && !gT) {
                if (this._activeMeshes.push(WT), MT._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, MT !== WT && MT._activate(TT, !0), this.enableBoundingBoxRendering && jT && jT._preActiveMesh(WT), WT._activate(TT, !0) && WT.rY.length) {
                  WT.RP ? WT._internalAbstractMeshDataInfo._actAsRegularMesh && (MT = WT) : MT._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, MT._internalAbstractMeshDataInfo._isActiveIntermediate = !0, mT._prepareSkeleton(MT);
                  for (let TT = 0; TT < MT.rY.length; TT++) {
                    const UT = MT.rY[TT];
                    this.enableBoundingBoxRendering && jT && jT._evaluateSubMesh(WT, UT), this._renderingManager.dispatch(UT, MT)
                  }
                }
                WT._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && jT && UT)
          for (let lT = 0; lT < jT.renderList.length; lT++) {
            const TT = jT.renderList.data[lT];
            this._activeBoundingBoxes.push(TT)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const TT = this.particleSystemList || mT.EY;
          for (let UT = 0; UT < TT.length; UT++) {
            const mT = TT[UT],
              WT = mT.emitter;
            mT.isStarted() && WT && (!WT.position || WT.isEnabled()) && this._renderingManager.dispatchParticles(mT)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return MT
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(TT, UT, mT, WT)
      }
      setRenderingAutoClearDepthStencil(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(TT, UT, mT, WT), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const TT = new ZT(this.name, this._scene, this.options);
        return this.renderList && (TT.renderList = this.renderList.slice(0)), TT
      }
      dispose() {
        const TT = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          UT = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let mT = 0; mT < UT; mT++) {
          const UT = TT[mT];
          UT && void 0 !== UT.getMaterialForRenderPass(this.renderPassId) && UT.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const mT of this._sceneUBOs) mT.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === ZT.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ZT.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    ZT.REFRESHRATE_RENDER_ONCE = 0, ZT.REFRESHRATE_RENDER_ONEVERYFRAME = 1, ZT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var cT = mT(39965);
    class vT extends MT.g {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(TT) {
        this._objectRenderer.renderListPredicate = TT
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(TT) {
        this._objectRenderer.renderList = TT
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(TT) {
        this._objectRenderer.particleSystemList = TT
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(TT) {
        this._objectRenderer.getCustomRenderList = TT
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(TT) {
        this._objectRenderer.renderParticles = TT
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(TT) {
        this._objectRenderer.renderSprites = TT
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(TT) {
        this._objectRenderer.enableBoundingBoxRendering = TT
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(TT) {
        this._objectRenderer.enableOutlineRendering = TT
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(TT) {
        this._objectRenderer.forceLayerMaskCheck = TT
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(TT) {
        this._objectRenderer.activeCamera = TT
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(TT) {
        this._objectRenderer.cameraForLOD = TT
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(TT) {
        this._objectRenderer.disableImageProcessing = TT
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(TT) {
        this._objectRenderer.customIsReadyFunction = TT
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(TT) {
        this._objectRenderer.customRenderFunction = TT
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(TT) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(TT)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(TT) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(TT)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(TT) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(TT)
      }
      set onClear(TT) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(TT)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(TT) {
        this._objectRenderer._waitingRenderList = TT
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
      setMaterialForRendering(TT, UT) {
        this._objectRenderer.setMaterialForRendering(TT, UT)
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
      set boundingBoxSize(TT) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(TT)) return;
        this._boundingBoxSize = TT;
        const UT = this.KF();
        UT && UT.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(TT, UT, mT) {
        let gT, nT, kT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          jT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          LT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          pT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : MT.g.TRILINEAR_SAMPLINGMODE,
          BT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          cT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          vT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          fT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          qT = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          iT = arguments.length > 13 ? arguments[13] : void 0,
          bT = arguments.length > 14 ? arguments[14] : void 0,
          OT = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          eT = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          YT = !0,
          JT = !1;
        if ("object" === typeof kT) {
          const TT = kT;
          kT = !!TT.generateMipMaps, jT = TT.doNotChangeAspectRatio ?? !0, lT = TT.type ?? 0, LT = !!TT.isCube, pT = TT.samplingMode ?? MT.g.TRILINEAR_SAMPLINGMODE, BT = TT.generateDepthBuffer ?? !0, cT = !!TT.generateStencilBuffer, vT = !!TT.isMulti, fT = TT.format ?? 5, qT = !!TT.delayAllocation, iT = TT.samples, bT = TT.creationFlags, OT = !!TT.noColorAttachment, eT = !!TT.useSRGBBuffer, gT = TT.colorAttachment, YT = TT.gammaSpace ?? YT, nT = TT.existingObjectRenderer, JT = !!TT.enableClusteredLights
        }
        if (super(null, mT, !kT, void 0, pT, void 0, void 0, void 0, void 0, fT), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new WT.d, this.onAfterUnbindObservable = new WT.d, this.onClearObservable = new WT.d, this.onResizeObservable = new WT.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = zT.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(mT = this.KF())) return;
        const xT = this.KF().eB();
        this._gammaSpace = YT, this._coordinatesMode = MT.g.PROJECTION_MODE, this.name = TT, this.isRenderTarget = !0, this._initialSizeParameter = UT, this._dontDisposeObjectRenderer = !!nT, this._processSizeParameter(UT), this._objectRenderer = nT ?? new ZT(TT, mT, {
          numPasses: LT ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: jT,
          enableClusteredLights: JT
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const TT = this._scene;
          if (!this._disableEngineStages)
            for (const UT of TT._beforeRenderTargetClearStage) UT.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(xT) : this.skipInitialClear || xT.clear(this.clearColor ?? TT.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || TT.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const UT of TT._beforeRenderTargetDrawStage) UT.action(this, this._currentFaceIndex, this._currentLayer);
          xT._debugPushGroup && xT._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (xT._debugPopGroup && xT._debugPopGroup(), !this._disableEngineStages)
            for (const UT of this._scene._afterRenderTargetDrawStage) UT.action(this, this._currentFaceIndex, this._currentLayer);
          const TT = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const UT of this._scene._afterRenderTargetPostProcessStage) UT.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = TT), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), xT) : HT.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(xT) : this.skipInitialClear || xT.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = xT.onResizeObservable.add((() => {})), this._generateMipMaps = !!kT, this._doNotChangeAspectRatio = jT, vT || (this._renderTargetOptions = {
          generateMipMaps: kT,
          type: lT,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: BT,
          generateStencilBuffer: cT,
          samples: iT,
          creationFlags: bT,
          noColorAttachment: OT,
          useSRGBBuffer: eT,
          colorAttachment: gT,
          label: this.name
        }, this.samplingMode === MT.g.NEAREST_SAMPLINGMODE && (this.wrapU = MT.g.CLAMP_ADDRESSMODE, this.wrapV = MT.g.CLAMP_ADDRESSMODE), qT || (LT ? (this._renderTarget = mT.eB().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = MT.g.INVCUBIC_MODE, this._textureMatrix = zT.e.Identity()) : this._renderTarget = mT.eB().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== iT && (this.samples = iT)))
      }
      createDepthStencilTexture() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(TT, UT, mT, WT, zT, MT)
      }
      _processSizeParameter(TT) {
        if (TT.ratio) {
          this._sizeRatio = TT.ratio;
          const UT = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(UT.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(UT.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = TT
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(TT) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(TT))
      }
      addPostProcess(TT) {
        if (!this._postProcessManager) {
          const TT = this.KF();
          if (!TT) return;
          this._postProcessManager = new gT.b(TT), this._postProcesses = new Array
        }
        this._postProcesses.push(TT), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (TT)
            for (const TT of this._postProcesses) TT.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(TT) {
        if (!this._postProcesses) return;
        const UT = this._postProcesses.indexOf(TT); - 1 !== UT && (this._postProcesses.splice(UT, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(TT) {
        this._objectRenderer.refreshRate = TT
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
        const TT = this._size.layers;
        if (TT) return TT;
        const UT = this._size.depth;
        return UT || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(TT) {
        const UT = Math.max(1, this.getRenderSize() * TT);
        this.resize(UT)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(TT) {
        const UT = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const mT = this.KF();
        mT && (this._processSizeParameter(TT), this._renderTarget = UT ? mT.eB().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : mT.eB().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(TT, UT)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => mT(41976))).then((TT => this._dumpTools = TT))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const TT = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), TT
      }
      _render() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this.KF();
        if (!mT) return;
        void 0 !== this.useCameraPostProcesses && (TT = this.useCameraPostProcesses);
        const WT = mT.eB();
        if (WT._debugPushGroup && WT._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let zT = 0; zT < 6; zT++) this._renderToTarget(zT, TT, UT), mT.incrementRenderId(), mT.resetCachedMaterial();
          else this._renderToTarget(0, TT, UT);
        else
          for (let zT = 0; zT < this.getRenderLayers(); zT++) this._renderToTarget(0, TT, UT, zT), mT.incrementRenderId(), mT.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), WT._debugPopGroup && WT._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(TT, UT) {
        const mT = TT * UT,
          WT = (0, nT.o)(mT + 16384 / (128 + mT));
        return Math.min((0, nT.d)(TT), WT)
      }
      _bindFrameBuffer() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this.KF();
        if (!mT) return;
        const WT = mT.eB();
        this._renderTarget && WT.bindFramebuffer(this._renderTarget, this.isCube ? TT : void 0, void 0, void 0, this.ignoreCameraViewport, 0, UT)
      }
      _unbindFrameBuffer(TT, UT) {
        this._renderTarget && TT.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(UT)
        }))
      }
      _prepareFrame(TT, UT, mT, WT) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(UT, mT) : WT && TT.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(UT, mT)
      }
      _renderToTarget(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const zT = this.KF();
        if (!zT) return;
        const MT = zT.eB();
        this._currentFaceIndex = TT, this._currentLayer = WT, this._currentUseCameraPostProcess = UT, this._currentDumpForDebug = mT, this._prepareFrame(zT, TT, WT, UT), this._objectRenderer.render(TT + WT, !0), this._unbindFrameBuffer(MT, TT), this._texture && this.isCube && 5 === TT && MT.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(TT, UT, mT, WT)
      }
      setRenderingAutoClearDepthStencil(TT, UT) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(TT, UT)
      }
      clone() {
        const TT = this.getSize(),
          UT = new vT(this.name, TT, this.KF(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return UT.hasAlpha = this.hasAlpha, UT.level = this.level, UT.coordinatesMode = this.coordinatesMode, this.renderList && (UT.renderList = this.renderList.slice(0)), UT
      }
      serialize() {
        if (!this.name) return null;
        const TT = super.serialize();
        if (TT.renderTargetSize = this.getRenderSize(), TT.renderList = [], this.renderList)
          for (let UT = 0; UT < this.renderList.length; UT++) TT.renderList.push(this.renderList[UT].id);
        return TT
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.KF().eB().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const TT = this.KF();
        if (!TT) return;
        let UT = TT.customRenderTargets.indexOf(this);
        UT >= 0 && TT.customRenderTargets.splice(UT, 1);
        for (const mT of TT.cameras) UT = mT.customRenderTargets.indexOf(this), UT >= 0 && mT.customRenderTargets.splice(UT, 1);
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
    vT.REFRESHRATE_RENDER_ONCE = ZT.REFRESHRATE_RENDER_ONCE, vT.REFRESHRATE_RENDER_ONEVERYFRAME = ZT.REFRESHRATE_RENDER_ONEVERYFRAME, vT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = ZT.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(vT.prototype, "noPrePassRenderer") || Object.defineProperty(vT.prototype, "noPrePassRenderer", (0, cT.h)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41944: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      h: () => jT
    });
    var WT = mT(40257),
      zT = mT(38229),
      MT = mT(37219),
      gT = mT(39926),
      nT = mT(40449);
    const HT = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class kT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HT;
        this._fullscreenViewport = new zT.d(0, 0, 1, 1);
        const mT = UT.positions ?? HT.positions,
          MT = UT.indices ?? HT.indices;
        this.engine = TT, this._vertexBuffers = {
          [WT.i.PositionKind]: new WT.i(TT, mT, WT.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = TT.createIndexBuffer(MT), this._indexBufferLength = MT.length, this._onContextRestoredObserver = TT.OB.add((() => {
          this._indexBuffer = TT.createIndexBuffer(MT);
          for (const TT in this._vertexBuffers) {
            this._vertexBuffers[TT]._rebuild()
          }
        }))
      }
      setViewport() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(TT)
      }
      bindBuffers(TT) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, TT)
      }
      applyEffectWrapper(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = UT, this.engine.stencilState.stencilTest = mT, this.engine.enableEffect(TT.drawWrapper), this.bindBuffers(TT.effect), TT.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(TT) {
        return void 0 !== TT.renderTarget
      }
      render(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!TT.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const mT = null === UT ? null : this._isRenderTargetTexture(UT) ? UT.renderTarget : UT;
        mT && this.engine.bindFramebuffer(mT), this.applyEffectWrapper(TT), this.draw(), mT && this.engine.unBindFramebuffer(mT), this.restoreStates()
      }
      dispose() {
        const TT = this._vertexBuffers[WT.i.PositionKind];
        TT && (TT.dispose(), delete this._vertexBuffers[WT.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.OB.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class jT {
      static RegisterShaderCodeProcessing(TT, UT) {
        UT ? jT._CustomShaderCodeProcessing[TT ?? ""] = UT : delete jT._CustomShaderCodeProcessing[TT ?? ""]
      }
      static _GetShaderCodeProcessing(TT) {
        return jT._CustomShaderCodeProcessing[TT] ?? jT._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(TT) {
        this.options.name = TT
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
      set effect(TT) {
        this._drawWrapper.effect = TT
      }
      constructor(TT) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new MT.d(void 0, !0), this.onApplyObservable = new MT.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...TT,
          name: TT.name || "effectWrapper",
          engine: TT.engine,
          uniforms: TT.uniforms || TT.uniformNames || [],
          uniformNames: void 0,
          samplers: TT.samplers || TT.samplerNames || [],
          samplerNames: void 0,
          attributeNames: TT.attributeNames || ["position"],
          uniformBuffers: TT.uniformBuffers || [],
          defines: TT.defines || "",
          useShaderStore: TT.useShaderStore || !1,
          vertexUrl: TT.vertexUrl || TT.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: TT.fragmentShader || "pass",
          indexParameters: TT.indexParameters,
          blockCompilation: TT.blockCompilation || !1,
          shaderLanguage: TT.shaderLanguage || 0,
          onCompiled: TT.onCompiled || void 0,
          extraInitializations: TT.extraInitializations || void 0,
          extraInitializationsAsync: TT.extraInitializationsAsync || void 0,
          useAsPostProcess: TT.useAsPostProcess ?? !1,
          allowEmptySourceTexture: TT.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), TT.vertexUrl || TT.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.OB.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new nT.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const UT = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, UT, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          WT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, zT && this._importPromises.push(...zT);
        const MT = this.options.engine.isWebGPU && !jT.ForceGLSL;
        this._gatherImports(MT, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(MT && this._webGPUReady ? mT.e(368).then((() => mT(61270))) : mT.e(358).then((() => mT(61150)))), void 0 !== WT && WT(MT, this._importPromises), MT && this._webGPUReady && (this.options.shaderLanguage = 1), TT || this.updateEffect(UT)
      }
      updateEffect() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          nT = arguments.length > 6 ? arguments[6] : void 0,
          HT = arguments.length > 7 ? arguments[7] : void 0;
        const kT = jT._GetShaderCodeProcessing(this.name);
        if (kT?.defineCustomBindings) {
          const WT = UT?.slice() ?? [];
          WT.push(...this.options.uniforms);
          const zT = mT?.slice() ?? [];
          zT.push(...this.options.samplers), TT = kT.defineCustomBindings(this.name, TT, WT, zT), UT = WT, mT = zT
        }
        this.options.defines = TT || "";
        const lT = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let LT;
        LT = this.options.extraInitializationsAsync ? async () => {
          await (lT?.()), await this.options.extraInitializationsAsync()
        }: lT, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: nT ?? this._shaderPath.vertex,
          fragment: HT ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: UT || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: mT || this.options.samplers,
          defines: null !== TT ? TT : "",
          fallbacks: null,
          onCompiled: zT ?? this.options.onCompiled,
          onError: MT ?? null,
          indexParameters: WT || this.options.indexParameters,
          processCodeAfterIncludes: kT?.processCodeAfterIncludes ? (TT, UT) => kT.processCodeAfterIncludes(this.name, TT, UT) : null,
          processFinalCode: kT?.processFinalCode ? (TT, UT) => kT.processFinalCode(this.name, TT, UT) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: LT
        }, this.options.engine) : this._drawWrapper.effect = new gT.b(this._shaderPath, this.options.attributeNames, UT || this.options.uniforms, mT || this.options.samplerNames, this.options.engine, TT, void 0, zT || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, LT), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !TT && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), jT._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.eB().OB.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    jT.ForceGLSL = !1, jT._CustomShaderCodeProcessing = {}
  },
  41976: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Dispose: () => fT,
      DumpData: () => vT,
      DumpDataAsync: () => cT,
      DumpFramebuffer: () => ZT,
      DumpTools: () => qT,
      EncodeImageAsync: () => BT,
      RegisterDumpTools: () => bT
    });
    var WT = mT(40095),
      zT = mT(41944),
      MT = mT(40201),
      gT = mT(37226),
      nT = mT(37216),
      HT = mT(38800),
      kT = mT(40165),
      jT = mT(40102);
    let lT = null;
    async function LT() {
      return lT || (lT = async function() {
        const TT = nT.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        TT instanceof OffscreenCanvas && HT.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: UT
        } = await Promise.resolve().then((() => mT(39922)));
        if (!UT.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const WT = new UT(TT, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        nT.c.Instances.pop(), nT.c.OnEnginesDisposedObservable.add((TT => {
          WT && TT !== WT && !WT.bJ && 0 === nT.c.Instances.length && fT()
        })), WT.getCaps().parallelShaderCompile = void 0;
        const MT = new zT.e(WT),
          {
            passPixelShader: gT
          } = await mT.e(376).then((() => mT(61324))),
          kT = new zT.h({
            engine: WT,
            name: gT.name,
            fragmentShader: gT.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: TT,
          dumpEngine: {
            engine: WT,
            renderer: MT,
            wrapper: kT
          }
        }
      }()), await lT
    }
    let pT = (() => {
      var TT;
      let UT, mT = [];
      return TT = class {
        static async EncodeImageAsync(TT, UT, mT, WT, zT, gT) {
          const nT = await LT(),
            HT = nT.dumpEngine;
          HT.engine.setSize(UT, mT, !0);
          const kT = HT.engine.createRawTexture(TT, UT, mT, 5, !1, !zT, 1);
          return HT.renderer.setViewport(), HT.renderer.applyEffectWrapper(HT.wrapper), HT.wrapper.effect._bindTexture("textureSampler", kT), HT.renderer.draw(), kT.dispose(), await new Promise(((TT, UT) => {
            MT.j.ToBlob(nT.canvas, (mT => {
              mT ? TT(mT) : UT(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), WT, gT)
          }))
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [jT.i], (0, WT.h)(TT, null, UT, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: TT => "EncodeImageAsync" in TT,
            get: TT => TT.EncodeImageAsync
          },
          metadata: zT
        }, null, mT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        }), (0, WT.k)(TT, mT)
      })(), TT
    })();
    const BT = pT.EncodeImageAsync;
    async function ZT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        MT = arguments.length > 5 ? arguments[5] : void 0,
        gT = arguments.length > 6 ? arguments[6] : void 0;
      const nT = await mT.readPixels(0, 0, TT, UT);
      vT(TT, UT, new Uint8Array(nT.buffer), WT, zT, MT, !0, void 0, gT)
    }
    async function cT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 ? arguments[4] : void 0,
        nT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lT = arguments.length > 7 ? arguments[7] : void 0;
      if (mT instanceof Float32Array) {
        const TT = new Uint8Array(mT.length);
        let UT = mT.length;
        for (; UT--;) {
          const WT = mT[UT];
          TT[UT] = Math.round(255 * (0, gT.Clamp)(WT))
        }
        mT = TT
      }
      const LT = await pT.EncodeImageAsync(mT, TT, UT, WT, nT, lT);
      void 0 !== zT && MT.j.DownloadBlob(LT, zT), LT.type !== WT && HT.b.Warn(`DumpData: The requested mimeType '${WT}' is not supported. The result has mimeType '${LT.type}' instead.`);
      const BT = await LT.arrayBuffer();
      return jT ? BT : `data:${WT};base64,${(0,kT.j)(BT)}`
    }

    function vT(TT, UT, mT, WT) {
      let zT = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== zT || WT || (zT = ""), cT(TT, UT, mT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", zT, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((TT => {
        WT && WT(TT)
      }))
    }

    function fT() {
      lT && (lT?.then((TT => {
        TT.canvas instanceof HTMLCanvasElement && TT.canvas.remove(), TT.dumpEngine && (TT.dumpEngine.engine.dispose(), TT.dumpEngine.renderer.dispose(), TT.dumpEngine.wrapper.dispose())
      })), lT = null)
    }
    const qT = {
      DumpData: vT,
      DumpDataAsync: cT,
      DumpFramebuffer: ZT,
      Dispose: fT
    };
    let iT = !1;

    function bT() {
      if (iT) return;
      iT = !0;
      MT.j.DumpData = vT, MT.j.DumpDataAsync = cT, MT.j.DumpFramebuffer = ZT
    }
  },
  41957: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => pT,
      f: () => BT,
      i: () => ZT
    });
    var WT = mT(40602),
      zT = mT(41960),
      MT = mT(40095),
      gT = mT(41939),
      nT = mT(40122),
      HT = mT(41969),
      kT = mT(40102);
    class jT extends gT.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(TT, UT) {
        let mT = arguments.length > 4 ? arguments[4] : void 0;
        const WT = {
          size: "number" === typeof UT ? UT : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: mT,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...UT
        };
        super(TT, HT.g.FragmentUrl, {
          effectWrapper: "number" !== typeof UT && UT.effectWrapper ? void 0 : new HT.g(TT, mT, WT),
          ...WT
        })
      }
      static _Parse(TT, UT, mT, WT) {
        return nT.e.Parse((() => new jT(TT.name, TT.options, UT, TT.renderTargetSamplingMode, TT._engine, TT.reusable)), TT, mT, WT)
      }
    }(() => {
      var TT;
      let UT, mT = gT.c,
        WT = [];
      TT = class extends mT {
        get face() {
          return this._effectWrapper.face
        }
        set face(TT) {
          this._effectWrapper.face = TT
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(TT, UT) {
          let mT = arguments.length > 4 ? arguments[4] : void 0;
          const zT = {
            size: "number" === typeof UT ? UT : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: mT,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...UT
          };
          super(TT, HT.g.FragmentUrl, {
            effectWrapper: "number" !== typeof UT && UT.effectWrapper ? void 0 : new HT.e(TT, mT, zT),
            ...zT
          }), (0, MT.k)(this, WT)
        }
        static _Parse(UT, mT, WT, zT) {
          return nT.e.Parse((() => new TT(UT.name, UT.options, mT, UT.renderTargetSamplingMode, UT._engine, UT.reusable)), UT, WT, zT)
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(mT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, kT.L)()], (0, MT.h)(TT, null, UT, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: TT => "face" in TT,
            get: TT => TT.face
          },
          metadata: zT
        }, null, WT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })()
    })();
    var lT = mT(37226),
      LT = mT(40178);

    function pT(TT, UT, mT, WT, zT, MT, nT, HT) {
      const kT = UT.eB();
      return UT.isReady = !1, zT = zT ?? UT.samplingMode, WT = WT ?? UT.type, MT = MT ?? UT.format, nT = nT ?? UT.width, HT = HT ?? UT.height, -1 === WT && (WT = 0), new Promise((jT => {
        const lT = new gT.c("postprocess", TT, null, null, 1, null, zT, kT, !1, void 0, WT, void 0, null, !1, MT);
        lT.externalTextureSamplerBinding = !0;
        const LT = kT.createRenderTargetTexture({
          width: nT,
          height: HT
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: zT,
          type: WT,
          format: MT
        });
        lT.onEffectCreatedObservable.addOnce((TT => {
          TT.executeWhenCompiled((() => {
            lT.onApply = TT => {
              TT._bindTexture("textureSampler", UT), TT.setFloat2("scale", 1, 1)
            }, mT.postProcessManager.directRender([lT], LT, !0), kT.restoreDefaultFramebuffer(), kT._releaseTexture(UT), lT && lT.dispose(), LT._swapAndDie(UT), UT.type = WT, UT.format = 5, UT.isReady = !0, jT(UT)
          }))
        }))
      }))
    }
    async function BT(TT, UT, MT) {
      let nT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        HT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(TT) {
        if (TT.isReady()) return;
        if (TT.loadingError) throw new Error(TT.errorObject?.message || `Texture ${TT.name} errored while loading.`);
        const UT = TT.onLoadObservable;
        if (UT) return await new Promise((TT => UT.addOnce((() => TT()))));
        const mT = TT._texture?.onLoadedObservable;
        if (mT) return await new Promise((TT => mT.addOnce((() => TT()))));
        throw new Error(`Cannot determine readiness of texture ${TT.name}.`)
      }(TT);
      const LT = TT.getInternalTexture(),
        pT = TT.is3D || !!LT?.is3D,
        {
          width: BT,
          height: ZT
        } = TT.getSize(),
        cT = UT ?? BT,
        vT = MT ?? ZT;
      if (kT || pT || function(TT) {
          switch (TT) {
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
        }(TT.textureFormat) || cT !== BT || vT !== ZT) {
        if (TT.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${kT?"RTT":"compression"} is not supported.`);
        return await async function(TT, UT, MT, nT, HT) {
          let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const jT = TT.KF(),
            lT = jT.eB(),
            LT = TT.getInternalTexture(),
            pT = TT.is3D || !!LT?.is3D;
          let BT;
          if (lT.isWebGPU ? pT ? await mT.e(372).then((() => mT(61295))) : TT.isCube ? await mT.e(373).then((() => mT(61304))) : await mT.e(374).then((() => mT(61312))) : pT ? await mT.e(369).then((() => mT(61284))) : TT.isCube ? await mT.e(370).then((() => mT(61286))) : await mT.e(371).then((() => mT(61291))), pT) BT = new gT.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: WT.g.NEAREST_NEAREST_MIPNEAREST,
            engine: lT,
            shaderLanguage: lT.isWebGPU ? 1 : 0
          });
          else if (TT.isCube) {
            const TT = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            BT = new gT.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: WT.g.NEAREST_NEAREST_MIPNEAREST,
              engine: lT,
              defines: TT[nT],
              shaderLanguage: lT.isWebGPU ? 1 : 0
            })
          } else BT = new gT.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: WT.g.NEAREST_NEAREST_MIPNEAREST,
            engine: lT,
            shaderLanguage: lT.isWebGPU ? 1 : 0
          });
          await new Promise((TT => {
            BT.onEffectCreatedObservable.addOnce((UT => {
              UT.executeWhenCompiled((() => {
                TT(0)
              }))
            }))
          }));
          const ZT = new zT.d("temp", {
            width: UT,
            height: MT
          }, jT, !1);
          BT.onApply = function(UT) {
            UT.setTexture("textureSampler", TT), UT.setFloat("lod", HT), UT.setInt("gamma", TT.gammaSpace ? 1 : 0), pT && UT.setFloat("slice", kT)
          };
          try {
            if (ZT.renderTarget && LT) {
              const mT = LT.samplingMode;
              0 !== HT ? TT.updateSamplingMode(WT.g.NEAREST_NEAREST_MIPNEAREST) : TT.updateSamplingMode(WT.g.NEAREST_NEAREST), jT.postProcessManager.directRender([BT], ZT.renderTarget, !0), TT.updateSamplingMode(mT);
              const zT = await lT.readPixels(0, 0, UT, MT),
                gT = new Uint8Array(zT.buffer, zT.byteOffset, zT.byteLength);
              return lT.unBindFramebuffer(ZT.renderTarget), gT
            }
            throw Error("Render to texture failed.")
          } finally {
            ZT.dispose(), BT.dispose()
          }
        }(TT, cT, vT, nT, HT, jT)
      }
      let fT = await TT.readPixels(nT, HT);
      if (!fT) throw new Error(`Failed to read pixels from texture ${TT.name}.`);
      if (fT instanceof Float32Array) {
        const TT = new Uint8Array(fT.length);
        let UT = fT.length;
        for (; UT--;) {
          const mT = fT[UT];
          TT[UT] = Math.round(255 * (0, lT.Clamp)(mT))
        }
        fT = TT
      }
      const qT = cT * vT,
        iT = 4 * qT;
      if (fT.length !== iT) {
        const TT = 0 === qT ? 0 : fT.length / qT;
        if (1 === TT || 2 === TT || 3 === TT) {
          const UT = new Uint8Array(iT);
          for (let mT = 0, WT = 0, zT = 0; mT < qT; mT++, zT += 4) {
            const mT = fT[WT++];
            if (1 === TT) {
              UT[zT] = mT, UT[zT + 1] = mT, UT[zT + 2] = mT, UT[zT + 3] = 255;
              continue
            }
            const MT = fT[WT++];
            2 !== TT ? (UT[zT] = mT, UT[zT + 1] = MT, UT[zT + 2] = fT[WT++], UT[zT + 3] = 255) : (UT[zT] = mT, UT[zT + 1] = MT, UT[zT + 2] = 0, UT[zT + 3] = 255)
          }
          return UT
        }
      }
      return fT
    }
    const ZT = {
      CreateResizedCopy: function(TT, UT, mT) {
        let MT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const gT = TT.KF(),
          nT = gT.eB(),
          HT = new zT.d("resized" + TT.name, {
            width: UT,
            height: mT
          }, gT, !TT.noMipmap, !0, TT._texture.type, !1, TT.samplingMode, !1);
        HT.wrapU = TT.wrapU, HT.wrapV = TT.wrapV, HT.uOffset = TT.uOffset, HT.vOffset = TT.vOffset, HT.uScale = TT.uScale, HT.vScale = TT.vScale, HT.uAng = TT.uAng, HT.vAng = TT.vAng, HT.wAng = TT.wAng, HT.coordinatesIndex = TT.coordinatesIndex, HT.level = TT.level, HT.anisotropicFilteringLevel = TT.anisotropicFilteringLevel, HT._texture.isReady = !1, TT.wrapU = WT.g.CLAMP_ADDRESSMODE, TT.wrapV = WT.g.CLAMP_ADDRESSMODE;
        const kT = new jT("pass", 1, null, MT ? WT.g.BILINEAR_SAMPLINGMODE : WT.g.NEAREST_SAMPLINGMODE, nT, !1, 0);
        return kT.externalTextureSamplerBinding = !0, kT.onEffectCreatedObservable.addOnce((UT => {
          UT.executeWhenCompiled((() => {
            kT.onApply = function(UT) {
              UT.setTexture("textureSampler", TT)
            };
            const UT = HT.renderTarget;
            UT && (gT.postProcessManager.directRender([kT], UT), nT.unBindFramebuffer(UT), HT.disposeFramebufferObjects(), kT.dispose(), HT.getInternalTexture().isReady = !0)
          }))
        })), HT
      },
      ApplyPostProcess: pT,
      ToHalfFloat: LT.j,
      FromHalfFloat: LT.c,
      GetTextureDataAsync: BT
    }
  },
  41939: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => BT
    });
    var WT = mT(40095),
      zT = mT(40215),
      MT = mT(37219),
      gT = mT(37188),
      nT = mT(39926),
      HT = mT(40102),
      kT = mT(40122),
      jT = mT(37239),
      lT = mT(39982),
      LT = mT(40022),
      pT = mT(41944);
    let BT = (() => {
        var TT;
        let UT, nT, lT, BT, ZT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT = [],
          tT = [],
          aT = [],
          yT = [],
          XT = [],
          IT = [],
          QT = [],
          sT = [],
          FT = [],
          PT = [],
          VT = [],
          uT = [],
          CT = [],
          rT = [],
          KT = [],
          ST = [],
          GT = [],
          NT = [],
          ET = [],
          hT = [],
          DT = [],
          oT = [],
          AT = [],
          RT = [],
          TU = [],
          UU = [],
          mU = [],
          WU = [],
          zU = [];
        return TT = class {
          static get ForceGLSL() {
            return pT.h.ForceGLSL
          }
          static set ForceGLSL(TT) {
            pT.h.ForceGLSL = TT
          }
          static RegisterShaderCodeProcessing(TT, UT) {
            pT.h.RegisterShaderCodeProcessing(TT, UT)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(TT) {
            this._effectWrapper.name = TT
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(TT) {
            this._effectWrapper.alphaMode = TT
          }
          get samples() {
            return this._samples
          }
          set samples(TT) {
            this._samples = Math.min(TT, this._engine.getCaps().maxMSAASamples), this._textures.forEach((TT => {
              TT.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(TT) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), TT && (this._onActivateObserver = this.onActivateObservable.add(TT))
          }
          set onSizeChanged(TT) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(TT)
          }
          set onApply(TT) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(TT)
          }
          set onBeforeRender(TT) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(TT)
          }
          set onAfterRender(TT) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(TT)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(TT) {
            this._forcedOutputTexture = TT
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.sA
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.J9(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(UT, mT, nT, HT, kT, jT) {
            let lT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              LT = arguments.length > 7 ? arguments[7] : void 0,
              BT = arguments.length > 8 ? arguments[8] : void 0,
              ZT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              vT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              fT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              qT = arguments.length > 12 ? arguments[12] : void 0,
              iT = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              bT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              OT = arguments.length > 15 ? arguments[15] : void 0,
              eT = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, WT.k)(this, wT), null), this.uniqueId = (0, WT.k)(this, tT, void 0), this.width = ((0, WT.k)(this, aT), (0, WT.k)(this, yT, -1)), this.height = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, -1)), this.nodeMaterialSource = ((0, WT.k)(this, QT), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, WT.k)(this, sT, void 0), this.clearColor = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, void 0)), this.autoClear = ((0, WT.k)(this, VT), (0, WT.k)(this, uT, !0)), this.forceAutoClearInAlphaMode = ((0, WT.k)(this, CT), (0, WT.k)(this, rT, !1)), this.alphaConstants = ((0, WT.k)(this, KT), (0, WT.k)(this, ST, void 0)), this.animations = ((0, WT.k)(this, GT), []), this.enablePixelPerfectMode = (0, WT.k)(this, NT, !1), this.forceFullscreenViewport = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, !0)), this.inspectableCustomProperties = (0, WT.k)(this, DT), this.scaleMode = (0, WT.k)(this, oT, 1), this.alwaysForcePOT = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, !1)), this._samples = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, 1)), this.adaptScaleToCurrentViewport = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, !1)), this.doNotSerialize = ((0, WT.k)(this, zU), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new zT.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new gT.o(1, 1), this._texelSize = gT.o.Zero(), this.onActivateObservable = new MT.d, this.onSizeChangedObservable = new MT.d, this.onApplyObservable = new MT.d, this.onBeforeRenderObservable = new MT.d, this.onAfterRenderObservable = new MT.d, this.SF = new MT.d, cT();
            let YT, JT = 1,
              xT = null;
            if (nT && !Array.isArray(nT)) {
              const TT = nT;
              nT = TT.uniforms ?? null, HT = TT.samplers ?? null, JT = TT.size ?? 1, jT = TT.camera ?? null, lT = TT.samplingMode ?? 1, LT = TT.engine, BT = TT.reusable, ZT = Array.isArray(TT.defines) ? TT.defines.join("\n") : TT.defines ?? null, vT = TT.textureType ?? 0, fT = TT.vertexUrl ?? "postprocess", qT = TT.indexParameters, iT = TT.blockCompilation ?? !1, bT = TT.textureFormat ?? 5, OT = TT.shaderLanguage ?? 0, xT = TT.uniformBuffers ?? null, eT = TT.extraInitializations, YT = TT.effectWrapper
            } else kT && (JT = "number" === typeof kT ? kT : {
              width: kT.width,
              height: kT.height
            });
            if (this._useExistingThinPostProcess = !!YT, this._effectWrapper = YT ?? new pT.h({
                name: UT,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: mT,
                engine: LT || jT?.KF().eB(),
                uniforms: nT,
                samplers: HT,
                uniformBuffers: xT,
                defines: ZT,
                vertexUrl: fT,
                indexParameters: qT,
                blockCompilation: !0,
                shaderLanguage: OT,
                extraInitializations: void 0
              }), this.name = UT, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != jT ? (this.sA = jT, this._scene = jT.KF(), jT.attachPostProcess(this), this._engine = this._scene.eB(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : LT && (this._engine = LT, this._engine.postProcesses.push(this)), this._options = JT, this.renderTargetSamplingMode = lT || 1, this._reusable = BT || !1, this._textureType = vT, this._textureFormat = bT, this._shaderLanguage = OT || 0, this._samplers = HT || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = mT, this._vertexUrl = fT, this._parameters = nT || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = xT || [], this._indexParameters = qT, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const UT = [];
              this._gatherImports(this._engine.isWebGPU && !TT.ForceGLSL, UT), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(iT, ZT, eT, UT)
            }
          }
          _gatherImports() {
            let TT = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? TT.push(Promise.all([mT.e(368).then((() => mT(61270)))])) : TT.push(Promise.all([mT.e(358).then((() => mT(61150)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          eB() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(TT) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = TT, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new zT.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              WT = arguments.length > 3 ? arguments[3] : void 0,
              zT = arguments.length > 4 ? arguments[4] : void 0,
              MT = arguments.length > 5 ? arguments[5] : void 0,
              gT = arguments.length > 6 ? arguments[6] : void 0,
              nT = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(TT, UT, mT, WT, zT, MT, gT, nT), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let zT = 0; zT < this._textureCache.length; zT++)
              if (this._textureCache[zT].texture.width === TT.width && this._textureCache[zT].texture.height === TT.height && this._textureCache[zT].postProcessChannel === mT && this._textureCache[zT].texture._generateDepthBuffer === UT.generateDepthBuffer && this._textureCache[zT].texture.samples === UT.samples) return this._textureCache[zT].texture;
            const WT = this._engine.createRenderTargetTexture(TT, UT);
            return this._textureCache.push({
              texture: WT,
              postProcessChannel: mT,
              lastUsedRenderId: -1
            }), WT
          }
          _flushTextureCache() {
            const TT = this._renderId;
            for (let UT = this._textureCache.length - 1; UT >= 0; UT--)
              if (TT - this._textureCache[UT].lastUsedRenderId > 100) {
                let TT = !1;
                for (let mT = 0; mT < this._textures.length; mT++)
                  if (this._textures.data[mT] === this._textureCache[UT].texture) {
                    TT = !0;
                    break
                  } TT || (this._textureCache[UT].texture.dispose(), this._textureCache.splice(UT, 1))
              }
          }
          resize(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = TT, this.height = UT;
            let MT = null;
            if (mT)
              for (let HT = 0; HT < mT._postProcesses.length; HT++)
                if (null !== mT._postProcesses[HT]) {
                  MT = mT._postProcesses[HT];
                  break
                } const gT = {
                width: this.width,
                height: this.height
              },
              nT = {
                generateMipMaps: WT,
                generateDepthBuffer: zT || MT === this,
                generateStencilBuffer: (zT || MT === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(gT, nT, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(gT, nT, 1)), this._texelSize.J9(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let TT;
            if (this._shareOutputWithPostProcess) TT = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) TT = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let UT;
              TT = this.inputTexture;
              for (let mT = 0; mT < this._textureCache.length; mT++)
                if (this._textureCache[mT].texture === TT) {
                  UT = this._textureCache[mT];
                  break
                } UT && (UT.lastUsedRenderId = this._renderId)
            }
            return TT
          }
          activate(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              mT = arguments.length > 2 ? arguments[2] : void 0;
            const WT = null === TT || void 0 !== TT.cameraRigMode ? TT || this.sA : null,
              zT = WT?.KF() ?? TT,
              MT = zT.eB(),
              gT = MT.getCaps().maxTextureSize,
              nT = (UT ? UT.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              HT = (UT ? UT.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let kT = this._options.width || nT,
              jT = this._options.height || HT;
            const lT = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let pT = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const TT = MT.currentViewport;
                TT && (kT *= TT.width, jT *= TT.height)
              }(lT || this.alwaysForcePOT) && (this._options.width || (kT = MT.needPOTTextures ? (0, LT.f)(kT, gT, this.scaleMode) : kT), this._options.height || (jT = MT.needPOTTextures ? (0, LT.f)(jT, gT, this.scaleMode) : jT)), this.width === kT && this.height === jT && (pT = this._getTarget()) || this.resize(kT, jT, WT, lT, mT), this._textures.forEach((TT => {
                TT.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(TT, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return pT || (pT = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.J9(nT / kT, HT / jT), this._engine.bindFramebuffer(pT, 0, nT, HT, this.forceFullscreenViewport)) : (this._scaleRatio.J9(1, 1), this._engine.bindFramebuffer(pT, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(WT), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : zT.clearColor, zT._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), pT
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
            let TT;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.eB().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), TT = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", TT?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let TT = this._textureCache.length - 1; TT >= 0; TT--) this._textureCache[TT].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(TT) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = TT.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(TT) {
            let UT;
            if (TT = TT || this.sA, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (UT = this._parentContainer.postProcesses.indexOf(this), UT > -1 && this._parentContainer.postProcesses.splice(UT, 1), this._parentContainer = null), UT = this._engine.postProcesses.indexOf(this), -1 !== UT && this._engine.postProcesses.splice(UT, 1), this.SF.notifyObservers(), TT) {
              if (TT.detachPostProcess(this), UT = TT._postProcesses.indexOf(this), 0 === UT && TT._postProcesses.length > 0) {
                const TT = this.sA._getFirstPostProcess();
                TT && TT.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const TT = kT.e.Serialize(this),
              UT = this.getCamera() || this._scene && this._scene.activeCamera;
            return TT.customType = "BABYLON." + this.getClassName(), TT.cameraId = UT ? UT.id : null, TT.reusable = this._reusable, TT.textureType = this._textureType, TT.fragmentUrl = this._fragmentUrl, TT.parameters = this._parameters, TT.samplers = this._samplers, TT.uniformBuffers = this._uniformBuffers, TT.options = this._options, TT.defines = this._postProcessDefines, TT.textureFormat = this._textureFormat, TT.vertexUrl = this._vertexUrl, TT.indexParameters = this._indexParameters, TT
          }
          clone() {
            const UT = this.serialize();
            UT._engine = this._engine, UT.cameraId = null;
            const mT = TT.Parse(UT, this._scene, "");
            return mT ? (mT.onActivateObservable = this.onActivateObservable.clone(), mT.onSizeChangedObservable = this.onSizeChangedObservable.clone(), mT.onApplyObservable = this.onApplyObservable.clone(), mT.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), mT.onAfterRenderObservable = this.onAfterRenderObservable.clone(), mT._prePassEffectConfiguration = this._prePassEffectConfiguration, mT) : null
          }
          static Parse(TT, UT, mT) {
            const WT = (0, jT.d)(TT.customType);
            if (!WT || !WT._Parse) return null;
            const zT = UT ? UT.getCameraById(TT.cameraId) : null;
            return WT._Parse(TT, zT, UT, mT)
          }
          static _Parse(UT, mT, WT, zT) {
            return kT.e.Parse((() => new TT(UT.name, UT.fragmentUrl, UT.parameters, UT.samplers, UT.options, mT, UT.renderTargetSamplingMode, UT._engine, UT.reusable, UT.defines, UT.textureType, UT.vertexUrl, UT.indexParameters, !1, UT.textureFormat)), UT, WT, zT)
          }
        }, (() => {
          const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          UT = [(0, HT.L)()], nT = [(0, HT.L)()], lT = [(0, HT.L)()], BT = [(0, HT.L)()], ZT = [(0, HT.L)()], vT = [(0, HT.n)()], fT = [(0, HT.L)()], qT = [(0, HT.L)()], iT = [(0, HT.L)()], bT = [(0, HT.L)()], OT = [(0, HT.L)()], eT = [(0, HT.L)()], YT = [(0, HT.L)()], JT = [(0, HT.L)()], xT = [(0, HT.L)("samples")], dT = [(0, HT.L)()], (0, WT.h)(TT, null, nT, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name
            },
            metadata: mT
          }, null, wT), (0, WT.h)(TT, null, iT, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaMode" in TT,
              get: TT => TT.alphaMode
            },
            metadata: mT
          }, null, wT), (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: TT => "uniqueId" in TT,
              get: TT => TT.uniqueId,
              set: (TT, UT) => {
                TT.uniqueId = UT
              }
            },
            metadata: mT
          }, tT, aT), (0, WT.h)(null, null, lT, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: TT => "width" in TT,
              get: TT => TT.width,
              set: (TT, UT) => {
                TT.width = UT
              }
            },
            metadata: mT
          }, yT, XT), (0, WT.h)(null, null, BT, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: TT => "height" in TT,
              get: TT => TT.height,
              set: (TT, UT) => {
                TT.height = UT
              }
            },
            metadata: mT
          }, IT, QT), (0, WT.h)(null, null, ZT, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "renderTargetSamplingMode" in TT,
              get: TT => TT.renderTargetSamplingMode,
              set: (TT, UT) => {
                TT.renderTargetSamplingMode = UT
              }
            },
            metadata: mT
          }, sT, FT), (0, WT.h)(null, null, vT, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "clearColor" in TT,
              get: TT => TT.clearColor,
              set: (TT, UT) => {
                TT.clearColor = UT
              }
            },
            metadata: mT
          }, PT, VT), (0, WT.h)(null, null, fT, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoClear" in TT,
              get: TT => TT.autoClear,
              set: (TT, UT) => {
                TT.autoClear = UT
              }
            },
            metadata: mT
          }, uT, CT), (0, WT.h)(null, null, qT, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAutoClearInAlphaMode" in TT,
              get: TT => TT.forceAutoClearInAlphaMode,
              set: (TT, UT) => {
                TT.forceAutoClearInAlphaMode = UT
              }
            },
            metadata: mT
          }, rT, KT), (0, WT.h)(null, null, bT, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaConstants" in TT,
              get: TT => TT.alphaConstants,
              set: (TT, UT) => {
                TT.alphaConstants = UT
              }
            },
            metadata: mT
          }, ST, GT), (0, WT.h)(null, null, OT, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "enablePixelPerfectMode" in TT,
              get: TT => TT.enablePixelPerfectMode,
              set: (TT, UT) => {
                TT.enablePixelPerfectMode = UT
              }
            },
            metadata: mT
          }, NT, ET), (0, WT.h)(null, null, eT, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceFullscreenViewport" in TT,
              get: TT => TT.forceFullscreenViewport,
              set: (TT, UT) => {
                TT.forceFullscreenViewport = UT
              }
            },
            metadata: mT
          }, hT, DT), (0, WT.h)(null, null, YT, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "scaleMode" in TT,
              get: TT => TT.scaleMode,
              set: (TT, UT) => {
                TT.scaleMode = UT
              }
            },
            metadata: mT
          }, oT, AT), (0, WT.h)(null, null, JT, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: TT => "alwaysForcePOT" in TT,
              get: TT => TT.alwaysForcePOT,
              set: (TT, UT) => {
                TT.alwaysForcePOT = UT
              }
            },
            metadata: mT
          }, RT, TU), (0, WT.h)(null, null, xT, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: TT => "_samples" in TT,
              get: TT => TT._samples,
              set: (TT, UT) => {
                TT._samples = UT
              }
            },
            metadata: mT
          }, UU, mU), (0, WT.h)(null, null, dT, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: TT => "adaptScaleToCurrentViewport" in TT,
              get: TT => TT.adaptScaleToCurrentViewport,
              set: (TT, UT) => {
                TT.adaptScaleToCurrentViewport = UT
              }
            },
            metadata: mT
          }, WU, zU), mT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mT
          })
        })(), TT
      })(),
      ZT = !1;

    function cT() {
      ZT || (ZT = !0, lT.c.prototype.setTextureFromPostProcess = function(TT, UT, mT) {
        let WT = null;
        UT && (UT._forcedOutputTexture ? WT = UT._forcedOutputTexture : UT._textures.data[UT._currentRenderTextureInd] && (WT = UT._textures.data[UT._currentRenderTextureInd])), this._bindTexture(TT, WT?.texture ?? null, mT)
      }, lT.c.prototype.setTextureFromPostProcessOutput = function(TT, UT, mT) {
        this._bindTexture(TT, UT?._outputTexture?.texture ?? null, mT)
      }, nT.b.prototype.setTextureFromPostProcess = function(TT, UT) {
        this._engine.setTextureFromPostProcess(this._samplers[TT], UT, TT)
      }, nT.b.prototype.setTextureFromPostProcessOutput = function(TT, UT) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[TT], UT, TT)
      }, (0, jT.h)("BABYLON.PostProcess", BT))
    }
  },
  41969: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      g: () => MT
    });
    var WT = mT(41944),
      zT = mT(37216);
    class MT extends WT.h {
      _gatherImports(TT, UT) {
        TT ? (this._webGPUReady = !0, UT.push(Promise.all([mT.e(375).then((() => mT(61318)))]))) : UT.push(Promise.all([mT.e(376).then((() => mT(61324)))])), super._gatherImports(TT, UT)
      }
      constructor(TT) {
        let UT = arguments.length > 2 ? arguments[2] : void 0;
        const mT = {
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || zT.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: MT.FragmentUrl,
          ...UT
        };
        mT.engine || (mT.engine = zT.c.LastCreatedEngine), super(mT)
      }
    }
    MT.FragmentUrl = "pass";
    class gT extends WT.h {
      _gatherImports(TT, UT) {
        TT ? (this._webGPUReady = !0, UT.push(Promise.all([mT.e(377).then((() => mT(61328)))]))) : UT.push(Promise.all([mT.e(378).then((() => mT(61331)))])), super._gatherImports(TT, UT)
      }
      constructor(TT) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || zT.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: gT.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(TT) {
        if (!(TT < 0 || TT > 5)) switch (this._face = TT, this._face) {
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
    gT.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);