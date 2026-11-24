export const id = 311;
export const ids = [311];
export const modules = {
  41844: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => CS
    });
    var tS = gS(37144),
      bS = gS(37117),
      XS = gS(40510),
      xS = gS(40189),
      NS = gS(39968),
      qS = gS(38687),
      uS = gS(40169),
      IS = gS(40196),
      fS = gS(37129),
      kS = gS(39937),
      aS = gS(40144),
      KS = gS(40229);
    class jS {
      get renderList() {
        return this._renderList
      }
      set renderList(SS) {
        this._renderList !== SS && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), SS && (this._unObserveRenderList = (0, fS.k)(SS, this._renderListHasChanged)), this._renderList = SS)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(SS) {
        SS !== this._disableImageProcessing && (this._disableImageProcessing = SS, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(SS) {
        this._disableDepthPrePass = SS, this._renderingManager.disableDepthPrePass = SS
      }
      get name() {
        return this._name
      }
      set name(SS) {
        if (this._name !== SS) {
          if (this._name = SS, this._sceneUBOs)
            for (let SS = 0; SS < this._sceneUBOs.length; ++SS) this._sceneUBOs[SS].name = `Scene ubo #${SS} for ${this.name}`;
          if (this._scene)
            for (let SS = 0; SS < this._renderPassIds.length; ++SS) {
              const HS = this._renderPassIds[SS];
              this._engine._renderPassNames[HS] = `${this._name}#${SS}`
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
      setMaterialForRendering(SS, HS) {
        let gS;
        gS = Array.isArray(SS) ? SS : [SS];
        for (let tS = 0; tS < gS.length; ++tS)
          for (let SS = 0; SS < this.options.numPasses; ++SS) {
            let bS = gS[tS];
            gS[tS].qY && (bS = gS[tS].MtS), bS.setMaterialForRenderPass(this._renderPassIds[SS], void 0 !== HS ? Array.isArray(HS) ? HS[SS] : HS : void 0)
          }
      }
      _freezeActiveMeshes(SS) {
        this._freezeActiveMeshesCancel = (0, kS.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, SS)
            for (let SS = 0; SS < this._activeMeshes.length; SS++) this._activeMeshes.data[SS]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((SS, HS) => {
          this._freezeActiveMeshesCancel = null, HS ? (qS.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), SS && qS.b.Error(SS)) : (qS.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), SS && (qS.b.Error(SS), SS.stack && qS.b.Error(SS.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let SS = 0; SS < this._activeMeshes.length; SS++) this._activeMeshes.data[SS]._unFreeze();
        this._isFrozen = !1
      }
      constructor(SS, HS, gS) {
        this._unObserveRenderList = null, this._renderListHasChanged = (SS, HS) => {
          const gS = this._renderList ? this._renderList.length : 0;
          if (0 === HS && gS > 0 || 0 === gS)
            for (const tS of this._scene.meshes) tS._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new tS.e, this.onAfterRenderObservable = new tS.e, this.onBeforeRenderingManagerRenderObservable = new tS.e, this.onAfterRenderingManagerRenderObservable = new tS.e, this.onInitRenderingObservable = new tS.e, this.onFinishRenderingObservable = new tS.e, this.onFastPathRenderObservable = new tS.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new aS.f(256), this._activeBoundingBoxes = new aS.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = SS, this._scene = HS, this._engine = this._scene.AK(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...gS
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new IS.c(HS), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const SS of this._scene.lights) SS.getTypeID() === KS.e.LIGHTTYPEID_CLUSTERED_CONTAINER && SS.isSupported && SS._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let SS = 0; SS < this.options.numPasses; ++SS) this._engine.releaseRenderPassId(this._renderPassIds[SS]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let SS = 0; SS < this.options.numPasses; ++SS) this._renderPassIds[SS] = this._engine.createRenderPassId(`${this.name}#${SS}`)
      }
      _createSceneUBO(SS, HS) {
        const gS = this._scene.AK(),
          tS = new uS.c(gS, void 0, HS, SS, void 0, !1);
        return tS.addUniform("viewProjection", 16), HS && tS.addUniform("viewProjectionR", 16), tS.addUniform("view", 16), tS.addUniform("projection", 16), tS.addUniform("vEyePosition", 4), tS.addUniform("inverseProjection", 16), tS
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const SS = this._engine._currentRenderTarget,
          HS = !(!SS || !SS.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const SS = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${SS} for ${this.name}`, HS)), this._sceneUBOIsMultiview.push(HS)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== HS && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, HS), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = HS);
        const gS = this._sceneUBOs[this._currentSceneUBOIndex++];
        return gS.unbindEffect(), gS
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(SS) {
        this._refreshRate = SS, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(SS, HS) {
        this.prepareRenderList(), this.initRender(SS, HS);
        const gS = this._checkReadiness();
        return this.finishRender(), gS
      }
      prepareRenderList() {
        const SS = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let HS = 0; HS < this._waitingRenderList.length; HS++) {
              const gS = this._waitingRenderList[HS],
                tS = SS.getMeshById(gS);
              tS && this.renderList.push(tS)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const SS = this._scene.meshes;
          for (let HS = 0; HS < SS.length; HS++) {
            const gS = SS[HS];
            this.renderListPredicate(gS) && this.renderList.push(gS)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(SS, HS) {
        const gS = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), gS && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(gS.getViewMatrix(), gS.getProjectionMatrix(!0)), this._scene._activeCamera = gS, this._engine.setViewport(gS.rigParent ? gS.rigParent.viewport : gS.viewport, SS, HS)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const SS = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (SS.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), SS._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== SS.activeCamera && SS.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), SS.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[SS], this.onBeforeRenderObservable.notifyObservers(SS);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(SS);
        else {
          const HS = this._prepareRenderingManager(SS),
            gS = this._scene.getOutlineRenderer?.(),
            tS = gS?.enabled;
          gS && (gS.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(SS), this._renderingManager.render(this.customRenderFunction, HS, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(SS), gS && (gS.enabled = tS)
        }
        HS || this.onAfterRenderObservable.notifyObservers(SS), this._engine.currentRenderPassId = gS
      }
      _checkReadiness() {
        const SS = this._scene,
          HS = this._engine.currentRenderPassId;
        let gS = !0;
        SS.getViewMatrix() || SS.updateTransformMatrix();
        const tS = this.options.numPasses;
        for (let bS = 0; bS < tS && gS; bS++) {
          const HS = this.renderList ? this.renderList : SS.frameGraph ? SS.meshes : SS.getActiveMeshes().data,
            XS = this.renderList || SS.frameGraph ? HS.length : SS.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[bS], this.onBeforeRenderObservable.notifyObservers(bS);
          let xS = null,
            NS = XS;
          this.getCustomRenderList && (xS = this.getCustomRenderList(bS, HS, XS), xS && (NS = xS.length)), xS || (xS = HS), this.options.doNotChangeAspectRatio || SS.updateTransformMatrix(!0);
          for (let SS = 0; SS < NS && gS; ++SS) {
            const HS = xS[SS];
            if (!HS.isEnabled() || HS.isBlocked || !HS.isVisible || !HS.dD) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(HS, this.refreshRate, !0)) {
                gS = !1;
                continue
              }
            } else if (!HS.isReady(!0)) {
              gS = !1;
              continue
            }
            let tS = HS._edgesRenderer,
              bS = HS.hasThinInstances;
            if (HS.qY) {
              const SS = HS.MtS;
              SS.edgesShareWithInstances && SS._edgesRenderer?.isEnabled && (tS = SS._edgesRenderer, bS = !0)
            } else HS.BtS && HS.edgesShareWithInstances && (bS = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && tS?.isEnabled && (tS.isReady(bS) || (gS = !1))
          }
          if (this.renderParticles && SS.particlesEnabled) {
            const HS = this.particleSystemList || SS.zD;
            for (const SS of HS) SS.isReady() || (gS = !1)
          }
          if (this.renderSprites && SS.spritesEnabled) {
            const HS = this.spriteManagerList || SS.spriteManagers;
            if (HS)
              for (const tS of HS) SS.activeCamera && 0 === (tS.layerMask & SS.activeCamera.layerMask) || tS.isReady && !tS.isReady() && (gS = !1)
          }
          this.onAfterRenderObservable.notifyObservers(bS), tS > 1 && (SS.incrementRenderId(), SS.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = HS, gS
      }
      _prepareRenderingManager() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this._scene;
        let tS, bS, XS = null;
        const xS = this.renderList ? this.renderList : gS.frameGraph ? gS.meshes : gS.getActiveMeshes().data,
          NS = this.renderList || gS.frameGraph ? xS.length : gS.getActiveMeshes().length;
        if (this.getCustomRenderList && (XS = this.getCustomRenderList(SS, xS, NS)), XS) tS = XS.length, bS = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !HS && !this._engine.isWebGPU) return xS;
          this._defaultRenderListPrepared = !0, XS = xS, tS = NS, bS = !this.renderList || this.forceLayerMaskCheck
        }
        const qS = gS.activeCamera,
          uS = this.cameraForLOD ?? qS,
          IS = gS.getBoundingBoxRenderer?.();
        if (gS._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && IS) {
            IS.reset();
            for (let SS = 0; SS < this._activeBoundingBoxes.length; SS++) {
              const HS = this._activeBoundingBoxes.data[SS];
              IS.renderList.push(HS)
            }
          }
          return XS
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), IS && IS.reset(), this.renderMeshes) {
          const SS = gS.getRenderId(),
            HS = gS.getFrameId();
          for (let xS = 0; xS < tS; xS++) {
            const tS = XS[xS];
            if (tS && !tS.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(tS, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!tS.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let XS, xS;
              if (uS) {
                const SS = tS._internalAbstractMeshDataInfo._currentLOD.get(uS);
                SS && SS[1] === HS ? XS = SS[0] : (XS = gS.customLODSelector ? gS.customLODSelector(tS, uS) : tS.getLOD(uS), SS ? (SS[0] = XS, SS[1] = HS) : tS._internalAbstractMeshDataInfo._currentLOD.set(uS, [XS, HS]))
              } else XS = tS;
              if (!XS) continue;
              if (XS !== tS && 0 !== XS.billboardMode && XS.computeWorldMatrix(), XS._preActivateForIntermediateRendering(SS), xS = !(!bS || !qS) && 0 === (tS.layerMask & qS.layerMask), tS.isEnabled() && tS.isVisible && tS.dD && !xS) {
                if (this._activeMeshes.push(tS), XS._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, XS !== tS && XS._activate(SS, !0), this.enableBoundingBoxRendering && IS && IS._preActiveMesh(tS), tS._activate(SS, !0) && tS.dD.length) {
                  tS.qY ? tS._internalAbstractMeshDataInfo._actAsRegularMesh && (XS = tS) : XS._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, XS._internalAbstractMeshDataInfo._isActiveIntermediate = !0, gS._prepareSkeleton(XS);
                  for (let SS = 0; SS < XS.dD.length; SS++) {
                    const HS = XS.dD[SS];
                    this.enableBoundingBoxRendering && IS && IS._evaluateSubMesh(tS, HS), this._renderingManager.dispatch(HS, XS)
                  }
                }
                tS._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && IS && HS)
          for (let fS = 0; fS < IS.renderList.length; fS++) {
            const SS = IS.renderList.data[fS];
            this._activeBoundingBoxes.push(SS)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const SS = this.particleSystemList || gS.zD;
          for (let HS = 0; HS < SS.length; HS++) {
            const gS = SS[HS],
              tS = gS.emitter;
            gS.isStarted() && tS && (!tS.position || tS.isEnabled()) && this._renderingManager.dispatchParticles(gS)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return XS
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(SS, HS, gS, tS)
      }
      setRenderingAutoClearDepthStencil(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(SS, HS, gS, tS), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const SS = new jS(this.name, this._scene, this.options);
        return this.renderList && (SS.renderList = this.renderList.slice(0)), SS
      }
      dispose() {
        const SS = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          HS = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let gS = 0; gS < HS; gS++) {
          const HS = SS[gS];
          HS && void 0 !== HS.getMaterialForRenderPass(this.renderPassId) && HS.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const gS of this._sceneUBOs) gS.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === jS.REFRESHRATE_RENDER_ONCE && (this.refreshRate = jS.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    jS.REFRESHRATE_RENDER_ONCE = 0, jS.REFRESHRATE_RENDER_ONEVERYFRAME = 1, jS.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var GS = gS(39926);
    class CS extends XS.i {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(SS) {
        this._objectRenderer.renderListPredicate = SS
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(SS) {
        this._objectRenderer.renderList = SS
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(SS) {
        this._objectRenderer.particleSystemList = SS
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(SS) {
        this._objectRenderer.getCustomRenderList = SS
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(SS) {
        this._objectRenderer.renderParticles = SS
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(SS) {
        this._objectRenderer.renderSprites = SS
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(SS) {
        this._objectRenderer.enableBoundingBoxRendering = SS
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(SS) {
        this._objectRenderer.enableOutlineRendering = SS
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(SS) {
        this._objectRenderer.forceLayerMaskCheck = SS
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(SS) {
        this._objectRenderer.activeCamera = SS
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(SS) {
        this._objectRenderer.cameraForLOD = SS
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(SS) {
        this._objectRenderer.disableImageProcessing = SS
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(SS) {
        this._objectRenderer.customIsReadyFunction = SS
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(SS) {
        this._objectRenderer.customRenderFunction = SS
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(SS) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(SS)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(SS) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(SS)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(SS) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(SS)
      }
      set onClear(SS) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(SS)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(SS) {
        this._objectRenderer._waitingRenderList = SS
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
      setMaterialForRendering(SS, HS) {
        this._objectRenderer.setMaterialForRendering(SS, HS)
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
      set boundingBoxSize(SS) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(SS)) return;
        this._boundingBoxSize = SS;
        const HS = this.lL();
        HS && HS.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(SS, HS, gS) {
        let xS, NS, uS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          IS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          kS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          aS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : XS.i.TRILINEAR_SAMPLINGMODE,
          KS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          GS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          CS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          nS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          PS = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          QS = arguments.length > 13 ? arguments[13] : void 0,
          DS = arguments.length > 14 ? arguments[14] : void 0,
          wS = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          hS = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          ZS = !0,
          JS = !1;
        if ("object" === typeof uS) {
          const SS = uS;
          uS = !!SS.generateMipMaps, IS = SS.doNotChangeAspectRatio ?? !0, fS = SS.type ?? 0, kS = !!SS.isCube, aS = SS.samplingMode ?? XS.i.TRILINEAR_SAMPLINGMODE, KS = SS.generateDepthBuffer ?? !0, GS = !!SS.generateStencilBuffer, CS = !!SS.isMulti, nS = SS.format ?? 5, PS = !!SS.delayAllocation, QS = SS.samples, DS = SS.creationFlags, wS = !!SS.noColorAttachment, hS = !!SS.useSRGBBuffer, xS = SS.colorAttachment, ZS = SS.gammaSpace ?? ZS, NS = SS.existingObjectRenderer, JS = !!SS.enableClusteredLights
        }
        if (super(null, gS, !uS, void 0, aS, void 0, void 0, void 0, void 0, nS), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new tS.e, this.onAfterUnbindObservable = new tS.e, this.onClearObservable = new tS.e, this.onResizeObservable = new tS.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = bS.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(gS = this.lL())) return;
        const OS = this.lL().AK();
        this._gammaSpace = ZS, this._coordinatesMode = XS.i.PROJECTION_MODE, this.name = SS, this.isRenderTarget = !0, this._initialSizeParameter = HS, this._dontDisposeObjectRenderer = !!NS, this._processSizeParameter(HS), this._objectRenderer = NS ?? new jS(SS, gS, {
          numPasses: kS ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: IS,
          enableClusteredLights: JS
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const SS = this._scene;
          if (!this._disableEngineStages)
            for (const HS of SS._beforeRenderTargetClearStage) HS.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(OS) : this.skipInitialClear || OS.clear(this.clearColor ?? SS.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || SS.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const HS of SS._beforeRenderTargetDrawStage) HS.action(this, this._currentFaceIndex, this._currentLayer);
          OS._debugPushGroup && OS._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (OS._debugPopGroup && OS._debugPopGroup(), !this._disableEngineStages)
            for (const HS of this._scene._afterRenderTargetDrawStage) HS.action(this, this._currentFaceIndex, this._currentLayer);
          const SS = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const HS of this._scene._afterRenderTargetPostProcessStage) HS.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = SS), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), OS) : qS.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(OS) : this.skipInitialClear || OS.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = OS.onResizeObservable.add((() => {})), this._generateMipMaps = !!uS, this._doNotChangeAspectRatio = IS, CS || (this._renderTargetOptions = {
          generateMipMaps: uS,
          type: fS,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: KS,
          generateStencilBuffer: GS,
          samples: QS,
          creationFlags: DS,
          noColorAttachment: wS,
          useSRGBBuffer: hS,
          colorAttachment: xS,
          label: this.name
        }, this.samplingMode === XS.i.NEAREST_SAMPLINGMODE && (this.wrapU = XS.i.CLAMP_ADDRESSMODE, this.wrapV = XS.i.CLAMP_ADDRESSMODE), PS || (kS ? (this._renderTarget = gS.AK().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = XS.i.INVCUBIC_MODE, this._textureMatrix = bS.e.Identity()) : this._renderTarget = gS.AK().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== QS && (this.samples = QS)))
      }
      createDepthStencilTexture() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(SS, HS, gS, tS, bS, XS)
      }
      _processSizeParameter(SS) {
        if (SS.ratio) {
          this._sizeRatio = SS.ratio;
          const HS = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(HS.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(HS.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = SS
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(SS) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(SS))
      }
      addPostProcess(SS) {
        if (!this._postProcessManager) {
          const SS = this.lL();
          if (!SS) return;
          this._postProcessManager = new xS.d(SS), this._postProcesses = new Array
        }
        this._postProcesses.push(SS), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (SS)
            for (const SS of this._postProcesses) SS.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(SS) {
        if (!this._postProcesses) return;
        const HS = this._postProcesses.indexOf(SS); - 1 !== HS && (this._postProcesses.splice(HS, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(SS) {
        this._objectRenderer.refreshRate = SS
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
        const SS = this._size.layers;
        if (SS) return SS;
        const HS = this._size.depth;
        return HS || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(SS) {
        const HS = Math.max(1, this.getRenderSize() * SS);
        this.resize(HS)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(SS) {
        const HS = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const gS = this.lL();
        gS && (this._processSizeParameter(SS), this._renderTarget = HS ? gS.AK().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : gS.AK().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(SS, HS)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => gS(41859))).then((SS => this._dumpTools = SS))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const SS = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), SS
      }
      _render() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this.lL();
        if (!gS) return;
        void 0 !== this.useCameraPostProcesses && (SS = this.useCameraPostProcesses);
        const tS = gS.AK();
        if (tS._debugPushGroup && tS._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let bS = 0; bS < 6; bS++) this._renderToTarget(bS, SS, HS), gS.incrementRenderId(), gS.resetCachedMaterial();
          else this._renderToTarget(0, SS, HS);
        else
          for (let bS = 0; bS < this.getRenderLayers(); bS++) this._renderToTarget(0, SS, HS, bS), gS.incrementRenderId(), gS.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), tS._debugPopGroup && tS._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(SS, HS) {
        const gS = SS * HS,
          tS = (0, NS.q)(gS + 16384 / (128 + gS));
        return Math.min((0, NS.e)(SS), tS)
      }
      _bindFrameBuffer() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = this.lL();
        if (!gS) return;
        const tS = gS.AK();
        this._renderTarget && tS.bindFramebuffer(this._renderTarget, this.isCube ? SS : void 0, void 0, void 0, this.ignoreCameraViewport, 0, HS)
      }
      _unbindFrameBuffer(SS, HS) {
        this._renderTarget && SS.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(HS)
        }))
      }
      _prepareFrame(SS, HS, gS, tS) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(HS, gS) : tS && SS.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(HS, gS)
      }
      _renderToTarget(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const bS = this.lL();
        if (!bS) return;
        const XS = bS.AK();
        this._currentFaceIndex = SS, this._currentLayer = tS, this._currentUseCameraPostProcess = HS, this._currentDumpForDebug = gS, this._prepareFrame(bS, SS, tS, HS), this._objectRenderer.render(SS + tS, !0), this._unbindFrameBuffer(XS, SS), this._texture && this.isCube && 5 === SS && XS.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(SS, HS, gS, tS)
      }
      setRenderingAutoClearDepthStencil(SS, HS) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(SS, HS)
      }
      clone() {
        const SS = this.getSize(),
          HS = new CS(this.name, SS, this.lL(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return HS.hasAlpha = this.hasAlpha, HS.level = this.level, HS.coordinatesMode = this.coordinatesMode, this.renderList && (HS.renderList = this.renderList.slice(0)), HS
      }
      serialize() {
        if (!this.name) return null;
        const SS = super.serialize();
        if (SS.renderTargetSize = this.getRenderSize(), SS.renderList = [], this.renderList)
          for (let HS = 0; HS < this.renderList.length; HS++) SS.renderList.push(this.renderList[HS].id);
        return SS
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.lL().AK().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const SS = this.lL();
        if (!SS) return;
        let HS = SS.customRenderTargets.indexOf(this);
        HS >= 0 && SS.customRenderTargets.splice(HS, 1);
        for (const gS of SS.cameras) HS = gS.customRenderTargets.indexOf(this), HS >= 0 && gS.customRenderTargets.splice(HS, 1);
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
    CS.REFRESHRATE_RENDER_ONCE = jS.REFRESHRATE_RENDER_ONCE, CS.REFRESHRATE_RENDER_ONEVERYFRAME = jS.REFRESHRATE_RENDER_ONEVERYFRAME, CS.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = jS.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(CS.prototype, "noPrePassRenderer") || Object.defineProperty(CS.prototype, "noPrePassRenderer", (0, GS.f)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41825: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      f: () => IS
    });
    var tS = gS(40183),
      bS = gS(38134),
      XS = gS(37144),
      xS = gS(39890),
      NS = gS(40364);
    const qS = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class uS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qS;
        this._fullscreenViewport = new bS.b(0, 0, 1, 1);
        const gS = HS.positions ?? qS.positions,
          XS = HS.indices ?? qS.indices;
        this.engine = SS, this._vertexBuffers = {
          [tS.h.PositionKind]: new tS.h(SS, gS, tS.h.PositionKind, !1, !1, 2)
        }, this._indexBuffer = SS.createIndexBuffer(XS), this._indexBufferLength = XS.length, this._onContextRestoredObserver = SS.YK.add((() => {
          this._indexBuffer = SS.createIndexBuffer(XS);
          for (const SS in this._vertexBuffers) {
            this._vertexBuffers[SS]._rebuild()
          }
        }))
      }
      setViewport() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(SS)
      }
      bindBuffers(SS) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, SS)
      }
      applyEffectWrapper(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = HS, this.engine.stencilState.stencilTest = gS, this.engine.enableEffect(SS.drawWrapper), this.bindBuffers(SS.effect), SS.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(SS) {
        return void 0 !== SS.renderTarget
      }
      render(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!SS.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const gS = null === HS ? null : this._isRenderTargetTexture(HS) ? HS.renderTarget : HS;
        gS && this.engine.bindFramebuffer(gS), this.applyEffectWrapper(SS), this.draw(), gS && this.engine.unBindFramebuffer(gS), this.restoreStates()
      }
      dispose() {
        const SS = this._vertexBuffers[tS.h.PositionKind];
        SS && (SS.dispose(), delete this._vertexBuffers[tS.h.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.YK.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class IS {
      static RegisterShaderCodeProcessing(SS, HS) {
        HS ? IS._CustomShaderCodeProcessing[SS ?? ""] = HS : delete IS._CustomShaderCodeProcessing[SS ?? ""]
      }
      static _GetShaderCodeProcessing(SS) {
        return IS._CustomShaderCodeProcessing[SS] ?? IS._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(SS) {
        this.options.name = SS
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
      set effect(SS) {
        this._drawWrapper.effect = SS
      }
      constructor(SS) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new XS.e(void 0, !0), this.onApplyObservable = new XS.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...SS,
          name: SS.name || "effectWrapper",
          engine: SS.engine,
          uniforms: SS.uniforms || SS.uniformNames || [],
          uniformNames: void 0,
          samplers: SS.samplers || SS.samplerNames || [],
          samplerNames: void 0,
          attributeNames: SS.attributeNames || ["position"],
          uniformBuffers: SS.uniformBuffers || [],
          defines: SS.defines || "",
          useShaderStore: SS.useShaderStore || !1,
          vertexUrl: SS.vertexUrl || SS.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: SS.fragmentShader || "pass",
          indexParameters: SS.indexParameters,
          blockCompilation: SS.blockCompilation || !1,
          shaderLanguage: SS.shaderLanguage || 0,
          onCompiled: SS.onCompiled || void 0,
          extraInitializations: SS.extraInitializations || void 0,
          extraInitializationsAsync: SS.extraInitializationsAsync || void 0,
          useAsPostProcess: SS.useAsPostProcess ?? !1,
          allowEmptySourceTexture: SS.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), SS.vertexUrl || SS.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.YK.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new NS.d(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const HS = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, HS, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          tS = arguments.length > 2 ? arguments[2] : void 0,
          bS = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, bS && this._importPromises.push(...bS);
        const XS = this.options.engine.isWebGPU && !IS.ForceGLSL;
        this._gatherImports(XS, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(XS && this._webGPUReady ? gS.e(364).then((() => gS(61459))) : gS.e(353).then((() => gS(61329)))), void 0 !== tS && tS(XS, this._importPromises), XS && this._webGPUReady && (this.options.shaderLanguage = 1), SS || this.updateEffect(HS)
      }
      updateEffect() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          NS = arguments.length > 6 ? arguments[6] : void 0,
          qS = arguments.length > 7 ? arguments[7] : void 0;
        const uS = IS._GetShaderCodeProcessing(this.name);
        if (uS?.defineCustomBindings) {
          const tS = HS?.slice() ?? [];
          tS.push(...this.options.uniforms);
          const bS = gS?.slice() ?? [];
          bS.push(...this.options.samplers), SS = uS.defineCustomBindings(this.name, SS, tS, bS), HS = tS, gS = bS
        }
        this.options.defines = SS || "";
        const fS = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let kS;
        kS = this.options.extraInitializationsAsync ? async () => {
          await (fS?.()), await this.options.extraInitializationsAsync()
        }: fS, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: NS ?? this._shaderPath.vertex,
          fragment: qS ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: HS || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: gS || this.options.samplers,
          defines: null !== SS ? SS : "",
          fallbacks: null,
          onCompiled: bS ?? this.options.onCompiled,
          onError: XS ?? null,
          indexParameters: tS || this.options.indexParameters,
          processCodeAfterIncludes: uS?.processCodeAfterIncludes ? (SS, HS) => uS.processCodeAfterIncludes(this.name, SS, HS) : null,
          processFinalCode: uS?.processFinalCode ? (SS, HS) => uS.processFinalCode(this.name, SS, HS) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: kS
        }, this.options.engine) : this._drawWrapper.effect = new xS.c(this._shaderPath, this.options.attributeNames, HS || this.options.uniforms, gS || this.options.samplerNames, this.options.engine, SS, void 0, bS || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, kS), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !SS && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), IS._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.AK().YK.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    IS.ForceGLSL = !1, IS._CustomShaderCodeProcessing = {}
  },
  41859: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Dispose: () => nS,
      DumpData: () => CS,
      DumpDataAsync: () => GS,
      DumpFramebuffer: () => jS,
      DumpTools: () => PS,
      EncodeImageAsync: () => KS,
      RegisterDumpTools: () => DS
    });
    var tS = gS(40041),
      bS = gS(41825),
      XS = gS(40133),
      xS = gS(37149),
      NS = gS(37138),
      qS = gS(38687),
      uS = gS(40105),
      IS = gS(40048);
    let fS = null;
    async function kS() {
      return fS || (fS = async function() {
        const SS = NS.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        SS instanceof OffscreenCanvas && qS.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: HS
        } = await Promise.resolve().then((() => gS(39888)));
        if (!HS.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const tS = new HS(SS, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        NS.d.Instances.pop(), NS.d.OnEnginesDisposedObservable.add((SS => {
          tS && SS !== tS && !tS.Ow && 0 === NS.d.Instances.length && nS()
        })), tS.getCaps().parallelShaderCompile = void 0;
        const XS = new bS.d(tS),
          {
            passPixelShader: xS
          } = await gS.e(372).then((() => gS(61513))),
          uS = new bS.f({
            engine: tS,
            name: xS.name,
            fragmentShader: xS.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: SS,
          dumpEngine: {
            engine: tS,
            renderer: XS,
            wrapper: uS
          }
        }
      }()), await fS
    }
    let aS = (() => {
      var SS;
      let HS, gS = [];
      return SS = class {
        static async EncodeImageAsync(SS, HS, gS, tS, bS, xS) {
          const NS = await kS(),
            qS = NS.dumpEngine;
          qS.engine.setSize(HS, gS, !0);
          const uS = qS.engine.createRawTexture(SS, HS, gS, 5, !1, !bS, 1);
          return qS.renderer.setViewport(), qS.renderer.applyEffectWrapper(qS.wrapper), qS.wrapper.effect._bindTexture("textureSampler", uS), qS.renderer.draw(), uS.dispose(), await new Promise(((SS, HS) => {
            XS.k.ToBlob(NS.canvas, (gS => {
              gS ? SS(gS) : HS(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), tS, xS)
          }))
        }
      }, (() => {
        const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [IS.h], (0, tS.j)(SS, null, HS, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: SS => "EncodeImageAsync" in SS,
            get: SS => SS.EncodeImageAsync
          },
          metadata: bS
        }, null, gS), bS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bS
        }), (0, tS.k)(SS, gS)
      })(), SS
    })();
    const KS = aS.EncodeImageAsync;
    async function jS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        XS = arguments.length > 5 ? arguments[5] : void 0,
        xS = arguments.length > 6 ? arguments[6] : void 0;
      const NS = await gS.readPixels(0, 0, SS, HS);
      CS(SS, HS, new Uint8Array(NS.buffer), tS, bS, XS, !0, void 0, xS)
    }
    async function GS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        bS = arguments.length > 4 ? arguments[4] : void 0,
        NS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fS = arguments.length > 7 ? arguments[7] : void 0;
      if (gS instanceof Float32Array) {
        const SS = new Uint8Array(gS.length);
        let HS = gS.length;
        for (; HS--;) {
          const tS = gS[HS];
          SS[HS] = Math.round(255 * (0, xS.Clamp)(tS))
        }
        gS = SS
      }
      const kS = await aS.EncodeImageAsync(gS, SS, HS, tS, NS, fS);
      void 0 !== bS && XS.k.DownloadBlob(kS, bS), kS.type !== tS && qS.b.Warn(`DumpData: The requested mimeType '${tS}' is not supported. The result has mimeType '${kS.type}' instead.`);
      const KS = await kS.arrayBuffer();
      return IS ? KS : `data:${tS};base64,${(0,uS.h)(KS)}`
    }

    function CS(SS, HS, gS, tS) {
      let bS = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== bS || tS || (bS = ""), GS(SS, HS, gS, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", bS, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((SS => {
        tS && tS(SS)
      }))
    }

    function nS() {
      fS && (fS?.then((SS => {
        SS.canvas instanceof HTMLCanvasElement && SS.canvas.remove(), SS.dumpEngine && (SS.dumpEngine.engine.dispose(), SS.dumpEngine.renderer.dispose(), SS.dumpEngine.wrapper.dispose())
      })), fS = null)
    }
    const PS = {
      DumpData: CS,
      DumpDataAsync: GS,
      DumpFramebuffer: jS,
      Dispose: nS
    };
    let QS = !1;

    function DS() {
      if (QS) return;
      QS = !0;
      XS.k.DumpData = CS, XS.k.DumpDataAsync = GS, XS.k.DumpFramebuffer = jS
    }
  },
  41838: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => aS,
      h: () => KS,
      i: () => jS
    });
    var tS = gS(40510),
      bS = gS(41844),
      XS = gS(40041),
      xS = gS(41822),
      NS = gS(40068),
      qS = gS(41851),
      uS = gS(40048);
    class IS extends xS.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(SS, HS) {
        let gS = arguments.length > 4 ? arguments[4] : void 0;
        const tS = {
          size: "number" === typeof HS ? HS : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: gS,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...HS
        };
        super(SS, qS.f.FragmentUrl, {
          effectWrapper: "number" !== typeof HS && HS.effectWrapper ? void 0 : new qS.f(SS, gS, tS),
          ...tS
        })
      }
      static _Parse(SS, HS, gS, tS) {
        return NS.b.Parse((() => new IS(SS.name, SS.options, HS, SS.renderTargetSamplingMode, SS._engine, SS.reusable)), SS, gS, tS)
      }
    }(() => {
      var SS;
      let HS, gS = xS.e,
        tS = [];
      SS = class extends gS {
        get face() {
          return this._effectWrapper.face
        }
        set face(SS) {
          this._effectWrapper.face = SS
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(SS, HS) {
          let gS = arguments.length > 4 ? arguments[4] : void 0;
          const bS = {
            size: "number" === typeof HS ? HS : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: gS,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...HS
          };
          super(SS, qS.f.FragmentUrl, {
            effectWrapper: "number" !== typeof HS && HS.effectWrapper ? void 0 : new qS.d(SS, gS, bS),
            ...bS
          }), (0, XS.k)(this, tS)
        }
        static _Parse(HS, gS, tS, bS) {
          return NS.b.Parse((() => new SS(HS.name, HS.options, gS, HS.renderTargetSamplingMode, HS._engine, HS.reusable)), HS, tS, bS)
        }
      }, (() => {
        const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(gS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, uS.M)()], (0, XS.j)(SS, null, HS, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: SS => "face" in SS,
            get: SS => SS.face
          },
          metadata: bS
        }, null, tS), bS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bS
        })
      })()
    })();
    var fS = gS(37149),
      kS = gS(40115);

    function aS(SS, HS, gS, tS, bS, XS, NS, qS) {
      const uS = HS.AK();
      return HS.isReady = !1, bS = bS ?? HS.samplingMode, tS = tS ?? HS.type, XS = XS ?? HS.format, NS = NS ?? HS.width, qS = qS ?? HS.height, -1 === tS && (tS = 0), new Promise((IS => {
        const fS = new xS.e("postprocess", SS, null, null, 1, null, bS, uS, !1, void 0, tS, void 0, null, !1, XS);
        fS.externalTextureSamplerBinding = !0;
        const kS = uS.createRenderTargetTexture({
          width: NS,
          height: qS
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: bS,
          type: tS,
          format: XS
        });
        fS.onEffectCreatedObservable.addOnce((SS => {
          SS.executeWhenCompiled((() => {
            fS.onApply = SS => {
              SS._bindTexture("textureSampler", HS), SS.setFloat2("scale", 1, 1)
            }, gS.postProcessManager.directRender([fS], kS, !0), uS.restoreDefaultFramebuffer(), uS._releaseTexture(HS), fS && fS.dispose(), kS._swapAndDie(HS), HS.type = tS, HS.format = 5, HS.isReady = !0, IS(HS)
          }))
        }))
      }))
    }
    async function KS(SS, HS, XS) {
      let NS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        uS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(SS) {
        if (SS.isReady()) return;
        if (SS.loadingError) throw new Error(SS.errorObject?.message || `Texture ${SS.name} errored while loading.`);
        const HS = SS.onLoadObservable;
        if (HS) return await new Promise((SS => HS.addOnce((() => SS()))));
        const gS = SS._texture?.onLoadedObservable;
        if (gS) return await new Promise((SS => gS.addOnce((() => SS()))));
        throw new Error(`Cannot determine readiness of texture ${SS.name}.`)
      }(SS);
      const kS = SS.getInternalTexture(),
        aS = SS.is3D || !!kS?.is3D,
        {
          width: KS,
          height: jS
        } = SS.getSize(),
        GS = HS ?? KS,
        CS = XS ?? jS;
      if (uS || aS || function(SS) {
          switch (SS) {
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
        }(SS.textureFormat) || GS !== KS || CS !== jS) {
        if (SS.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${uS?"RTT":"compression"} is not supported.`);
        return await async function(SS, HS, XS, NS, qS) {
          let uS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const IS = SS.lL(),
            fS = IS.AK(),
            kS = SS.getInternalTexture(),
            aS = SS.is3D || !!kS?.is3D;
          let KS;
          if (fS.isWebGPU ? aS ? await gS.e(368).then((() => gS(61492))) : SS.isCube ? await gS.e(369).then((() => gS(61496))) : await gS.e(370).then((() => gS(61503))) : aS ? await gS.e(365).then((() => gS(61468))) : SS.isCube ? await gS.e(366).then((() => gS(61476))) : await gS.e(367).then((() => gS(61483))), aS) KS = new xS.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: tS.i.NEAREST_NEAREST_MIPNEAREST,
            engine: fS,
            shaderLanguage: fS.isWebGPU ? 1 : 0
          });
          else if (SS.isCube) {
            const SS = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            KS = new xS.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: tS.i.NEAREST_NEAREST_MIPNEAREST,
              engine: fS,
              defines: SS[NS],
              shaderLanguage: fS.isWebGPU ? 1 : 0
            })
          } else KS = new xS.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: tS.i.NEAREST_NEAREST_MIPNEAREST,
            engine: fS,
            shaderLanguage: fS.isWebGPU ? 1 : 0
          });
          await new Promise((SS => {
            KS.onEffectCreatedObservable.addOnce((HS => {
              HS.executeWhenCompiled((() => {
                SS(0)
              }))
            }))
          }));
          const jS = new bS.c("temp", {
            width: HS,
            height: XS
          }, IS, !1);
          KS.onApply = function(HS) {
            HS.setTexture("textureSampler", SS), HS.setFloat("lod", qS), HS.setInt("gamma", SS.gammaSpace ? 1 : 0), aS && HS.setFloat("slice", uS)
          };
          try {
            if (jS.renderTarget && kS) {
              const gS = kS.samplingMode;
              0 !== qS ? SS.updateSamplingMode(tS.i.NEAREST_NEAREST_MIPNEAREST) : SS.updateSamplingMode(tS.i.NEAREST_NEAREST), IS.postProcessManager.directRender([KS], jS.renderTarget, !0), SS.updateSamplingMode(gS);
              const bS = await fS.readPixels(0, 0, HS, XS),
                xS = new Uint8Array(bS.buffer, bS.byteOffset, bS.byteLength);
              return fS.unBindFramebuffer(jS.renderTarget), xS
            }
            throw Error("Render to texture failed.")
          } finally {
            jS.dispose(), KS.dispose()
          }
        }(SS, GS, CS, NS, qS, IS)
      }
      let nS = await SS.readPixels(NS, qS);
      if (!nS) throw new Error(`Failed to read pixels from texture ${SS.name}.`);
      if (nS instanceof Float32Array) {
        const SS = new Uint8Array(nS.length);
        let HS = nS.length;
        for (; HS--;) {
          const gS = nS[HS];
          SS[HS] = Math.round(255 * (0, fS.Clamp)(gS))
        }
        nS = SS
      }
      const PS = GS * CS,
        QS = 4 * PS;
      if (nS.length !== QS) {
        const SS = 0 === PS ? 0 : nS.length / PS;
        if (1 === SS || 2 === SS || 3 === SS) {
          const HS = new Uint8Array(QS);
          for (let gS = 0, tS = 0, bS = 0; gS < PS; gS++, bS += 4) {
            const gS = nS[tS++];
            if (1 === SS) {
              HS[bS] = gS, HS[bS + 1] = gS, HS[bS + 2] = gS, HS[bS + 3] = 255;
              continue
            }
            const XS = nS[tS++];
            2 !== SS ? (HS[bS] = gS, HS[bS + 1] = XS, HS[bS + 2] = nS[tS++], HS[bS + 3] = 255) : (HS[bS] = gS, HS[bS + 1] = XS, HS[bS + 2] = 0, HS[bS + 3] = 255)
          }
          return HS
        }
      }
      return nS
    }
    const jS = {
      CreateResizedCopy: function(SS, HS, gS) {
        let XS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const xS = SS.lL(),
          NS = xS.AK(),
          qS = new bS.c("resized" + SS.name, {
            width: HS,
            height: gS
          }, xS, !SS.noMipmap, !0, SS._texture.type, !1, SS.samplingMode, !1);
        qS.wrapU = SS.wrapU, qS.wrapV = SS.wrapV, qS.uOffset = SS.uOffset, qS.vOffset = SS.vOffset, qS.uScale = SS.uScale, qS.vScale = SS.vScale, qS.uAng = SS.uAng, qS.vAng = SS.vAng, qS.wAng = SS.wAng, qS.coordinatesIndex = SS.coordinatesIndex, qS.level = SS.level, qS.anisotropicFilteringLevel = SS.anisotropicFilteringLevel, qS._texture.isReady = !1, SS.wrapU = tS.i.CLAMP_ADDRESSMODE, SS.wrapV = tS.i.CLAMP_ADDRESSMODE;
        const uS = new IS("pass", 1, null, XS ? tS.i.BILINEAR_SAMPLINGMODE : tS.i.NEAREST_SAMPLINGMODE, NS, !1, 0);
        return uS.externalTextureSamplerBinding = !0, uS.onEffectCreatedObservable.addOnce((HS => {
          HS.executeWhenCompiled((() => {
            uS.onApply = function(HS) {
              HS.setTexture("textureSampler", SS)
            };
            const HS = qS.renderTarget;
            HS && (xS.postProcessManager.directRender([uS], HS), NS.unBindFramebuffer(HS), qS.disposeFramebufferObjects(), uS.dispose(), qS.getInternalTexture().isReady = !0)
          }))
        })), qS
      },
      ApplyPostProcess: aS,
      ToHalfFloat: kS.f,
      FromHalfFloat: kS.b,
      GetTextureDataAsync: KS
    }
  },
  41822: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => KS
    });
    var tS = gS(40041),
      bS = gS(40144),
      XS = gS(37144),
      xS = gS(37117),
      NS = gS(39890),
      qS = gS(40048),
      uS = gS(40068),
      IS = gS(37164),
      fS = gS(39939),
      kS = gS(39968),
      aS = gS(41825);
    let KS = (() => {
        var SS;
        let HS, NS, fS, KS, jS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS = [],
          vS = [],
          ES = [],
          LS = [],
          YS = [],
          AS = [],
          yS = [],
          VS = [],
          iS = [],
          WS = [],
          zS = [],
          US = [],
          pS = [],
          sS = [],
          BS = [],
          MS = [],
          FS = [],
          RS = [],
          TS = [],
          oS = [],
          lS = [],
          mS = [],
          eS = [],
          rS = [],
          SH = [],
          HH = [],
          gH = [],
          tH = [],
          bH = [];
        return SS = class {
          static get ForceGLSL() {
            return aS.f.ForceGLSL
          }
          static set ForceGLSL(SS) {
            aS.f.ForceGLSL = SS
          }
          static RegisterShaderCodeProcessing(SS, HS) {
            aS.f.RegisterShaderCodeProcessing(SS, HS)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(SS) {
            this._effectWrapper.name = SS
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(SS) {
            this._effectWrapper.alphaMode = SS
          }
          get samples() {
            return this._samples
          }
          set samples(SS) {
            this._samples = Math.min(SS, this._engine.getCaps().maxMSAASamples), this._textures.forEach((SS => {
              SS.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(SS) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), SS && (this._onActivateObserver = this.onActivateObservable.add(SS))
          }
          set onSizeChanged(SS) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(SS)
          }
          set onApply(SS) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(SS)
          }
          set onBeforeRender(SS) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(SS)
          }
          set onAfterRender(SS) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(SS)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(SS) {
            this._forcedOutputTexture = SS
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.jT
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.I5(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(HS, gS, NS, qS, uS, IS) {
            let fS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              kS = arguments.length > 7 ? arguments[7] : void 0,
              KS = arguments.length > 8 ? arguments[8] : void 0,
              jS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              CS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              nS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              PS = arguments.length > 12 ? arguments[12] : void 0,
              QS = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              DS = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              wS = arguments.length > 15 ? arguments[15] : void 0,
              hS = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, tS.k)(this, cS), null), this.uniqueId = (0, tS.k)(this, vS, void 0), this.width = ((0, tS.k)(this, ES), (0, tS.k)(this, LS, -1)), this.height = ((0, tS.k)(this, YS), (0, tS.k)(this, AS, -1)), this.nodeMaterialSource = ((0, tS.k)(this, yS), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, tS.k)(this, VS, void 0), this.clearColor = ((0, tS.k)(this, iS), (0, tS.k)(this, WS, void 0)), this.autoClear = ((0, tS.k)(this, zS), (0, tS.k)(this, US, !0)), this.forceAutoClearInAlphaMode = ((0, tS.k)(this, pS), (0, tS.k)(this, sS, !1)), this.alphaConstants = ((0, tS.k)(this, BS), (0, tS.k)(this, MS, void 0)), this.animations = ((0, tS.k)(this, FS), []), this.enablePixelPerfectMode = (0, tS.k)(this, RS, !1), this.forceFullscreenViewport = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, !0)), this.inspectableCustomProperties = (0, tS.k)(this, lS), this.scaleMode = (0, tS.k)(this, mS, 1), this.alwaysForcePOT = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, !1)), this._samples = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, 1)), this.adaptScaleToCurrentViewport = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, !1)), this.doNotSerialize = ((0, tS.k)(this, bH), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new bS.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new xS.m(1, 1), this._texelSize = xS.m.Zero(), this.onActivateObservable = new XS.e, this.onSizeChangedObservable = new XS.e, this.onApplyObservable = new XS.e, this.onBeforeRenderObservable = new XS.e, this.onAfterRenderObservable = new XS.e, this.bY = new XS.e, GS();
            let ZS, JS = 1,
              OS = null;
            if (NS && !Array.isArray(NS)) {
              const SS = NS;
              NS = SS.uniforms ?? null, qS = SS.samplers ?? null, JS = SS.size ?? 1, IS = SS.camera ?? null, fS = SS.samplingMode ?? 1, kS = SS.engine, KS = SS.reusable, jS = Array.isArray(SS.defines) ? SS.defines.join("\n") : SS.defines ?? null, CS = SS.textureType ?? 0, nS = SS.vertexUrl ?? "postprocess", PS = SS.indexParameters, QS = SS.blockCompilation ?? !1, DS = SS.textureFormat ?? 5, wS = SS.shaderLanguage ?? 0, OS = SS.uniformBuffers ?? null, hS = SS.extraInitializations, ZS = SS.effectWrapper
            } else uS && (JS = "number" === typeof uS ? uS : {
              width: uS.width,
              height: uS.height
            });
            if (this._useExistingThinPostProcess = !!ZS, this._effectWrapper = ZS ?? new aS.f({
                name: HS,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: gS,
                engine: kS || IS?.lL().AK(),
                uniforms: NS,
                samplers: qS,
                uniformBuffers: OS,
                defines: jS,
                vertexUrl: nS,
                indexParameters: PS,
                blockCompilation: !0,
                shaderLanguage: wS,
                extraInitializations: void 0
              }), this.name = HS, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != IS ? (this.jT = IS, this._scene = IS.lL(), IS.attachPostProcess(this), this._engine = this._scene.AK(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : kS && (this._engine = kS, this._engine.postProcesses.push(this)), this._options = JS, this.renderTargetSamplingMode = fS || 1, this._reusable = KS || !1, this._textureType = CS, this._textureFormat = DS, this._shaderLanguage = wS || 0, this._samplers = qS || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = gS, this._vertexUrl = nS, this._parameters = NS || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = OS || [], this._indexParameters = PS, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const HS = [];
              this._gatherImports(this._engine.isWebGPU && !SS.ForceGLSL, HS), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(QS, jS, hS, HS)
            }
          }
          _gatherImports() {
            let SS = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? SS.push(Promise.all([gS.e(364).then((() => gS(61459)))])) : SS.push(Promise.all([gS.e(353).then((() => gS(61329)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          AK() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(SS) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = SS, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new bS.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tS = arguments.length > 3 ? arguments[3] : void 0,
              bS = arguments.length > 4 ? arguments[4] : void 0,
              XS = arguments.length > 5 ? arguments[5] : void 0,
              xS = arguments.length > 6 ? arguments[6] : void 0,
              NS = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(SS, HS, gS, tS, bS, XS, xS, NS), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let bS = 0; bS < this._textureCache.length; bS++)
              if (this._textureCache[bS].texture.width === SS.width && this._textureCache[bS].texture.height === SS.height && this._textureCache[bS].postProcessChannel === gS && this._textureCache[bS].texture._generateDepthBuffer === HS.generateDepthBuffer && this._textureCache[bS].texture.samples === HS.samples) return this._textureCache[bS].texture;
            const tS = this._engine.createRenderTargetTexture(SS, HS);
            return this._textureCache.push({
              texture: tS,
              postProcessChannel: gS,
              lastUsedRenderId: -1
            }), tS
          }
          _flushTextureCache() {
            const SS = this._renderId;
            for (let HS = this._textureCache.length - 1; HS >= 0; HS--)
              if (SS - this._textureCache[HS].lastUsedRenderId > 100) {
                let SS = !1;
                for (let gS = 0; gS < this._textures.length; gS++)
                  if (this._textures.data[gS] === this._textureCache[HS].texture) {
                    SS = !0;
                    break
                  } SS || (this._textureCache[HS].texture.dispose(), this._textureCache.splice(HS, 1))
              }
          }
          resize(SS, HS) {
            let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = SS, this.height = HS;
            let XS = null;
            if (gS)
              for (let qS = 0; qS < gS._postProcesses.length; qS++)
                if (null !== gS._postProcesses[qS]) {
                  XS = gS._postProcesses[qS];
                  break
                } const xS = {
                width: this.width,
                height: this.height
              },
              NS = {
                generateMipMaps: tS,
                generateDepthBuffer: bS || XS === this,
                generateStencilBuffer: (bS || XS === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(xS, NS, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(xS, NS, 1)), this._texelSize.I5(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let SS;
            if (this._shareOutputWithPostProcess) SS = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) SS = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let HS;
              SS = this.inputTexture;
              for (let gS = 0; gS < this._textureCache.length; gS++)
                if (this._textureCache[gS].texture === SS) {
                  HS = this._textureCache[gS];
                  break
                } HS && (HS.lastUsedRenderId = this._renderId)
            }
            return SS
          }
          activate(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gS = arguments.length > 2 ? arguments[2] : void 0;
            const tS = null === SS || void 0 !== SS.cameraRigMode ? SS || this.jT : null,
              bS = tS?.lL() ?? SS,
              XS = bS.AK(),
              xS = XS.getCaps().maxTextureSize,
              NS = (HS ? HS.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              qS = (HS ? HS.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let uS = this._options.width || NS,
              IS = this._options.height || qS;
            const fS = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let aS = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const SS = XS.currentViewport;
                SS && (uS *= SS.width, IS *= SS.height)
              }(fS || this.alwaysForcePOT) && (this._options.width || (uS = XS.needPOTTextures ? (0, kS.g)(uS, xS, this.scaleMode) : uS), this._options.height || (IS = XS.needPOTTextures ? (0, kS.g)(IS, xS, this.scaleMode) : IS)), this.width === uS && this.height === IS && (aS = this._getTarget()) || this.resize(uS, IS, tS, fS, gS), this._textures.forEach((SS => {
                SS.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(SS, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return aS || (aS = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.I5(NS / uS, qS / IS), this._engine.bindFramebuffer(aS, 0, NS, qS, this.forceFullscreenViewport)) : (this._scaleRatio.I5(1, 1), this._engine.bindFramebuffer(aS, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(tS), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : bS.clearColor, bS._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), aS
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
            let SS;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.AK().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), SS = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", SS?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let SS = this._textureCache.length - 1; SS >= 0; SS--) this._textureCache[SS].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(SS) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = SS.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(SS) {
            let HS;
            if (SS = SS || this.jT, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (HS = this._parentContainer.postProcesses.indexOf(this), HS > -1 && this._parentContainer.postProcesses.splice(HS, 1), this._parentContainer = null), HS = this._engine.postProcesses.indexOf(this), -1 !== HS && this._engine.postProcesses.splice(HS, 1), this.bY.notifyObservers(), SS) {
              if (SS.detachPostProcess(this), HS = SS._postProcesses.indexOf(this), 0 === HS && SS._postProcesses.length > 0) {
                const SS = this.jT._getFirstPostProcess();
                SS && SS.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const SS = uS.b.Serialize(this),
              HS = this.getCamera() || this._scene && this._scene.activeCamera;
            return SS.customType = "BABYLON." + this.getClassName(), SS.cameraId = HS ? HS.id : null, SS.reusable = this._reusable, SS.textureType = this._textureType, SS.fragmentUrl = this._fragmentUrl, SS.parameters = this._parameters, SS.samplers = this._samplers, SS.uniformBuffers = this._uniformBuffers, SS.options = this._options, SS.defines = this._postProcessDefines, SS.textureFormat = this._textureFormat, SS.vertexUrl = this._vertexUrl, SS.indexParameters = this._indexParameters, SS
          }
          clone() {
            const HS = this.serialize();
            HS._engine = this._engine, HS.cameraId = null;
            const gS = SS.Parse(HS, this._scene, "");
            return gS ? (gS.onActivateObservable = this.onActivateObservable.clone(), gS.onSizeChangedObservable = this.onSizeChangedObservable.clone(), gS.onApplyObservable = this.onApplyObservable.clone(), gS.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), gS.onAfterRenderObservable = this.onAfterRenderObservable.clone(), gS._prePassEffectConfiguration = this._prePassEffectConfiguration, gS) : null
          }
          static Parse(SS, HS, gS) {
            const tS = (0, IS.d)(SS.customType);
            if (!tS || !tS._Parse) return null;
            const bS = HS ? HS.getCameraById(SS.cameraId) : null;
            return tS._Parse(SS, bS, HS, gS)
          }
          static _Parse(HS, gS, tS, bS) {
            return uS.b.Parse((() => new SS(HS.name, HS.fragmentUrl, HS.parameters, HS.samplers, HS.options, gS, HS.renderTargetSamplingMode, HS._engine, HS.reusable, HS.defines, HS.textureType, HS.vertexUrl, HS.indexParameters, !1, HS.textureFormat)), HS, tS, bS)
          }
        }, (() => {
          const gS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          HS = [(0, qS.M)()], NS = [(0, qS.M)()], fS = [(0, qS.M)()], KS = [(0, qS.M)()], jS = [(0, qS.M)()], CS = [(0, qS.m)()], nS = [(0, qS.M)()], PS = [(0, qS.M)()], QS = [(0, qS.M)()], DS = [(0, qS.M)()], wS = [(0, qS.M)()], hS = [(0, qS.M)()], ZS = [(0, qS.M)()], JS = [(0, qS.M)()], OS = [(0, qS.M)("samples")], dS = [(0, qS.M)()], (0, tS.j)(SS, null, NS, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: SS => "name" in SS,
              get: SS => SS.name
            },
            metadata: gS
          }, null, cS), (0, tS.j)(SS, null, QS, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "alphaMode" in SS,
              get: SS => SS.alphaMode
            },
            metadata: gS
          }, null, cS), (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: SS => "uniqueId" in SS,
              get: SS => SS.uniqueId,
              set: (SS, HS) => {
                SS.uniqueId = HS
              }
            },
            metadata: gS
          }, vS, ES), (0, tS.j)(null, null, fS, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: SS => "width" in SS,
              get: SS => SS.width,
              set: (SS, HS) => {
                SS.width = HS
              }
            },
            metadata: gS
          }, LS, YS), (0, tS.j)(null, null, KS, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: SS => "height" in SS,
              get: SS => SS.height,
              set: (SS, HS) => {
                SS.height = HS
              }
            },
            metadata: gS
          }, AS, yS), (0, tS.j)(null, null, jS, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "renderTargetSamplingMode" in SS,
              get: SS => SS.renderTargetSamplingMode,
              set: (SS, HS) => {
                SS.renderTargetSamplingMode = HS
              }
            },
            metadata: gS
          }, VS, iS), (0, tS.j)(null, null, CS, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "clearColor" in SS,
              get: SS => SS.clearColor,
              set: (SS, HS) => {
                SS.clearColor = HS
              }
            },
            metadata: gS
          }, WS, zS), (0, tS.j)(null, null, nS, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: SS => "autoClear" in SS,
              get: SS => SS.autoClear,
              set: (SS, HS) => {
                SS.autoClear = HS
              }
            },
            metadata: gS
          }, US, pS), (0, tS.j)(null, null, PS, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "forceAutoClearInAlphaMode" in SS,
              get: SS => SS.forceAutoClearInAlphaMode,
              set: (SS, HS) => {
                SS.forceAutoClearInAlphaMode = HS
              }
            },
            metadata: gS
          }, sS, BS), (0, tS.j)(null, null, DS, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: SS => "alphaConstants" in SS,
              get: SS => SS.alphaConstants,
              set: (SS, HS) => {
                SS.alphaConstants = HS
              }
            },
            metadata: gS
          }, MS, FS), (0, tS.j)(null, null, wS, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "enablePixelPerfectMode" in SS,
              get: SS => SS.enablePixelPerfectMode,
              set: (SS, HS) => {
                SS.enablePixelPerfectMode = HS
              }
            },
            metadata: gS
          }, RS, TS), (0, tS.j)(null, null, hS, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: SS => "forceFullscreenViewport" in SS,
              get: SS => SS.forceFullscreenViewport,
              set: (SS, HS) => {
                SS.forceFullscreenViewport = HS
              }
            },
            metadata: gS
          }, oS, lS), (0, tS.j)(null, null, ZS, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "scaleMode" in SS,
              get: SS => SS.scaleMode,
              set: (SS, HS) => {
                SS.scaleMode = HS
              }
            },
            metadata: gS
          }, mS, eS), (0, tS.j)(null, null, JS, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: SS => "alwaysForcePOT" in SS,
              get: SS => SS.alwaysForcePOT,
              set: (SS, HS) => {
                SS.alwaysForcePOT = HS
              }
            },
            metadata: gS
          }, rS, SH), (0, tS.j)(null, null, OS, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: SS => "_samples" in SS,
              get: SS => SS._samples,
              set: (SS, HS) => {
                SS._samples = HS
              }
            },
            metadata: gS
          }, HH, gH), (0, tS.j)(null, null, dS, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: SS => "adaptScaleToCurrentViewport" in SS,
              get: SS => SS.adaptScaleToCurrentViewport,
              set: (SS, HS) => {
                SS.adaptScaleToCurrentViewport = HS
              }
            },
            metadata: gS
          }, tH, bH), gS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gS
          })
        })(), SS
      })(),
      jS = !1;

    function GS() {
      jS || (jS = !0, fS.b.prototype.setTextureFromPostProcess = function(SS, HS, gS) {
        let tS = null;
        HS && (HS._forcedOutputTexture ? tS = HS._forcedOutputTexture : HS._textures.data[HS._currentRenderTextureInd] && (tS = HS._textures.data[HS._currentRenderTextureInd])), this._bindTexture(SS, tS?.texture ?? null, gS)
      }, fS.b.prototype.setTextureFromPostProcessOutput = function(SS, HS, gS) {
        this._bindTexture(SS, HS?._outputTexture?.texture ?? null, gS)
      }, NS.c.prototype.setTextureFromPostProcess = function(SS, HS) {
        this._engine.setTextureFromPostProcess(this._samplers[SS], HS, SS)
      }, NS.c.prototype.setTextureFromPostProcessOutput = function(SS, HS) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[SS], HS, SS)
      }, (0, IS.f)("BABYLON.PostProcess", KS))
    }
  },
  41851: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      f: () => XS
    });
    var tS = gS(41825),
      bS = gS(37138);
    class XS extends tS.f {
      _gatherImports(SS, HS) {
        SS ? (this._webGPUReady = !0, HS.push(Promise.all([gS.e(371).then((() => gS(61506)))]))) : HS.push(Promise.all([gS.e(372).then((() => gS(61513)))])), super._gatherImports(SS, HS)
      }
      constructor(SS) {
        let HS = arguments.length > 2 ? arguments[2] : void 0;
        const gS = {
          name: SS,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || bS.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: XS.FragmentUrl,
          ...HS
        };
        gS.engine || (gS.engine = bS.d.LastCreatedEngine), super(gS)
      }
    }
    XS.FragmentUrl = "pass";
    class xS extends tS.f {
      _gatherImports(SS, HS) {
        SS ? (this._webGPUReady = !0, HS.push(Promise.all([gS.e(373).then((() => gS(61520)))]))) : HS.push(Promise.all([gS.e(374).then((() => gS(61528)))])), super._gatherImports(SS, HS)
      }
      constructor(SS) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: SS,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || bS.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: xS.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(SS) {
        if (!(SS < 0 || SS > 5)) switch (this._face = SS, this._face) {
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
    xS.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);