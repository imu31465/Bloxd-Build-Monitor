export const id = 302;
export const ids = [302];
export const modules = {
  41125: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => iv
    });
    var hv = Pv(36618),
      Sv = Pv(36594),
      ev = Pv(39798),
      gv = Pv(39449),
      pv = Pv(39247),
      dv = Pv(38209),
      Nv = Pv(39435),
      lv = Pv(39459),
      Tv = Pv(36602),
      Wv = Pv(39204),
      wv = Pv(39413),
      av = Pv(39500);
    class sv {
      get renderList() {
        return this._renderList
      }
      set renderList(vv) {
        this._renderList !== vv && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), vv && (this._unObserveRenderList = (0, Tv.i)(vv, this._renderListHasChanged)), this._renderList = vv)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(vv) {
        vv !== this._disableImageProcessing && (this._disableImageProcessing = vv, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(vv) {
        this._disableDepthPrePass = vv, this._renderingManager.disableDepthPrePass = vv
      }
      get name() {
        return this._name
      }
      set name(vv) {
        if (this._name !== vv) {
          if (this._name = vv, this._sceneUBOs)
            for (let vv = 0; vv < this._sceneUBOs.length; ++vv) this._sceneUBOs[vv].name = `Scene ubo #${vv} for ${this.name}`;
          if (this._scene)
            for (let vv = 0; vv < this._renderPassIds.length; ++vv) {
              const zv = this._renderPassIds[vv];
              this._engine._renderPassNames[zv] = `${this._name}#${vv}`
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
      setMaterialForRendering(vv, zv) {
        let Pv;
        Pv = Array.isArray(vv) ? vv : [vv];
        for (let hv = 0; hv < Pv.length; ++hv)
          for (let vv = 0; vv < this.options.numPasses; ++vv) {
            let Sv = Pv[hv];
            Pv[hv].zK && (Sv = Pv[hv].hhv), Sv.setMaterialForRenderPass(this._renderPassIds[vv], void 0 !== zv ? Array.isArray(zv) ? zv[vv] : zv : void 0)
          }
      }
      _freezeActiveMeshes(vv) {
        this._freezeActiveMeshesCancel = (0, Wv.g)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, vv)
            for (let vv = 0; vv < this._activeMeshes.length; vv++) this._activeMeshes.data[vv]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((vv, zv) => {
          this._freezeActiveMeshesCancel = null, zv ? (dv.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), vv && dv.d.Error(vv)) : (dv.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), vv && (dv.d.Error(vv), vv.stack && dv.d.Error(vv.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let vv = 0; vv < this._activeMeshes.length; vv++) this._activeMeshes.data[vv]._unFreeze();
        this._isFrozen = !1
      }
      constructor(vv, zv, Pv) {
        this._unObserveRenderList = null, this._renderListHasChanged = (vv, zv) => {
          const Pv = this._renderList ? this._renderList.length : 0;
          if (0 === zv && Pv > 0 || 0 === Pv)
            for (const hv of this._scene.meshes) hv._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new hv.c, this.onAfterRenderObservable = new hv.c, this.onBeforeRenderingManagerRenderObservable = new hv.c, this.onAfterRenderingManagerRenderObservable = new hv.c, this.onInitRenderingObservable = new hv.c, this.onFinishRenderingObservable = new hv.c, this.onFastPathRenderObservable = new hv.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new wv.g(256), this._activeBoundingBoxes = new wv.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = vv, this._scene = zv, this._engine = this._scene.ma(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Pv
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new lv.b(zv), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const vv of this._scene.lights) vv.getTypeID() === av.c.LIGHTTYPEID_CLUSTERED_CONTAINER && vv.isSupported && vv._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let vv = 0; vv < this.options.numPasses; ++vv) this._engine.releaseRenderPassId(this._renderPassIds[vv]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let vv = 0; vv < this.options.numPasses; ++vv) this._renderPassIds[vv] = this._engine.createRenderPassId(`${this.name}#${vv}`)
      }
      _createSceneUBO(vv, zv) {
        const Pv = this._scene.ma(),
          hv = new Nv.e(Pv, void 0, zv, vv, void 0, !1);
        return hv.addUniform("viewProjection", 16), zv && hv.addUniform("viewProjectionR", 16), hv.addUniform("view", 16), hv.addUniform("projection", 16), hv.addUniform("vEyePosition", 4), hv.addUniform("inverseProjection", 16), hv
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const vv = this._engine._currentRenderTarget,
          zv = !(!vv || !vv.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const vv = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${vv} for ${this.name}`, zv)), this._sceneUBOIsMultiview.push(zv)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== zv && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, zv), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = zv);
        const Pv = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Pv.unbindEffect(), Pv
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(vv) {
        this._refreshRate = vv, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(vv, zv) {
        this.prepareRenderList(), this.initRender(vv, zv);
        const Pv = this._checkReadiness();
        return this.finishRender(), Pv
      }
      prepareRenderList() {
        const vv = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let zv = 0; zv < this._waitingRenderList.length; zv++) {
              const Pv = this._waitingRenderList[zv],
                hv = vv.getMeshById(Pv);
              hv && this.renderList.push(hv)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const vv = this._scene.meshes;
          for (let zv = 0; zv < vv.length; zv++) {
            const Pv = vv[zv];
            this.renderListPredicate(Pv) && this.renderList.push(Pv)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(vv, zv) {
        const Pv = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Pv && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Pv.getViewMatrix(), Pv.getProjectionMatrix(!0)), this._scene._activeCamera = Pv, this._engine.setViewport(Pv.rigParent ? Pv.rigParent.viewport : Pv.viewport, vv, zv)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const vv = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (vv.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), vv._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== vv.activeCamera && vv.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), vv.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[vv], this.onBeforeRenderObservable.notifyObservers(vv);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(vv);
        else {
          const zv = this._prepareRenderingManager(vv),
            Pv = this._scene.getOutlineRenderer?.(),
            hv = Pv?.enabled;
          Pv && (Pv.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(vv), this._renderingManager.render(this.customRenderFunction, zv, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(vv), Pv && (Pv.enabled = hv)
        }
        zv || this.onAfterRenderObservable.notifyObservers(vv), this._engine.currentRenderPassId = Pv
      }
      _checkReadiness() {
        const vv = this._scene,
          zv = this._engine.currentRenderPassId;
        let Pv = !0;
        vv.getViewMatrix() || vv.updateTransformMatrix();
        const hv = this.options.numPasses;
        for (let Sv = 0; Sv < hv && Pv; Sv++) {
          const zv = this.renderList ? this.renderList : vv.frameGraph ? vv.meshes : vv.getActiveMeshes().data,
            ev = this.renderList || vv.frameGraph ? zv.length : vv.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Sv], this.onBeforeRenderObservable.notifyObservers(Sv);
          let gv = null,
            pv = ev;
          this.getCustomRenderList && (gv = this.getCustomRenderList(Sv, zv, ev), gv && (pv = gv.length)), gv || (gv = zv), this.options.doNotChangeAspectRatio || vv.updateTransformMatrix(!0);
          for (let vv = 0; vv < pv && Pv; ++vv) {
            const zv = gv[vv];
            if (!zv.isEnabled() || zv.isBlocked || !zv.isVisible || !zv.sF) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(zv, this.refreshRate, !0)) {
                Pv = !1;
                continue
              }
            } else if (!zv.isReady(!0)) {
              Pv = !1;
              continue
            }
            let hv = zv._edgesRenderer,
              Sv = zv.hasThinInstances;
            if (zv.zK) {
              const vv = zv.hhv;
              vv.edgesShareWithInstances && vv._edgesRenderer?.isEnabled && (hv = vv._edgesRenderer, Sv = !0)
            } else zv.Phv && zv.edgesShareWithInstances && (Sv = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && hv?.isEnabled && (hv.isReady(Sv) || (Pv = !1))
          }
          if (this.renderParticles && vv.particlesEnabled) {
            const zv = this.particleSystemList || vv.mF;
            for (const vv of zv) vv.isReady() || (Pv = !1)
          }
          if (this.renderSprites && vv.spritesEnabled) {
            const zv = this.spriteManagerList || vv.spriteManagers;
            if (zv)
              for (const hv of zv) vv.activeCamera && 0 === (hv.layerMask & vv.activeCamera.layerMask) || hv.isReady && !hv.isReady() && (Pv = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Sv), hv > 1 && (vv.incrementRenderId(), vv.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = zv, Pv
      }
      _prepareRenderingManager() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this._scene;
        let hv, Sv, ev = null;
        const gv = this.renderList ? this.renderList : Pv.frameGraph ? Pv.meshes : Pv.getActiveMeshes().data,
          pv = this.renderList || Pv.frameGraph ? gv.length : Pv.getActiveMeshes().length;
        if (this.getCustomRenderList && (ev = this.getCustomRenderList(vv, gv, pv)), ev) hv = ev.length, Sv = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !zv && !this._engine.isWebGPU) return gv;
          this._defaultRenderListPrepared = !0, ev = gv, hv = pv, Sv = !this.renderList || this.forceLayerMaskCheck
        }
        const dv = Pv.activeCamera,
          Nv = this.cameraForLOD ?? dv,
          lv = Pv.getBoundingBoxRenderer?.();
        if (Pv._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && lv) {
            lv.reset();
            for (let vv = 0; vv < this._activeBoundingBoxes.length; vv++) {
              const zv = this._activeBoundingBoxes.data[vv];
              lv.renderList.push(zv)
            }
          }
          return ev
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), lv && lv.reset(), this.renderMeshes) {
          const vv = Pv.getRenderId(),
            zv = Pv.getFrameId();
          for (let gv = 0; gv < hv; gv++) {
            const hv = ev[gv];
            if (hv && !hv.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(hv, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!hv.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let ev, gv;
              if (Nv) {
                const vv = hv._internalAbstractMeshDataInfo._currentLOD.get(Nv);
                vv && vv[1] === zv ? ev = vv[0] : (ev = Pv.customLODSelector ? Pv.customLODSelector(hv, Nv) : hv.getLOD(Nv), vv ? (vv[0] = ev, vv[1] = zv) : hv._internalAbstractMeshDataInfo._currentLOD.set(Nv, [ev, zv]))
              } else ev = hv;
              if (!ev) continue;
              if (ev !== hv && 0 !== ev.billboardMode && ev.computeWorldMatrix(), ev._preActivateForIntermediateRendering(vv), gv = !(!Sv || !dv) && 0 === (hv.layerMask & dv.layerMask), hv.isEnabled() && hv.isVisible && hv.sF && !gv) {
                if (this._activeMeshes.push(hv), ev._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, ev !== hv && ev._activate(vv, !0), this.enableBoundingBoxRendering && lv && lv._preActiveMesh(hv), hv._activate(vv, !0) && hv.sF.length) {
                  hv.zK ? hv._internalAbstractMeshDataInfo._actAsRegularMesh && (ev = hv) : ev._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, ev._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Pv._prepareSkeleton(ev);
                  for (let vv = 0; vv < ev.sF.length; vv++) {
                    const zv = ev.sF[vv];
                    this.enableBoundingBoxRendering && lv && lv._evaluateSubMesh(hv, zv), this._renderingManager.dispatch(zv, ev)
                  }
                }
                hv._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && lv && zv)
          for (let Tv = 0; Tv < lv.renderList.length; Tv++) {
            const vv = lv.renderList.data[Tv];
            this._activeBoundingBoxes.push(vv)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const vv = this.particleSystemList || Pv.mF;
          for (let zv = 0; zv < vv.length; zv++) {
            const Pv = vv[zv],
              hv = Pv.emitter;
            Pv.isStarted() && hv && (!hv.position || hv.isEnabled()) && this._renderingManager.dispatchParticles(Pv)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return ev
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(vv, zv, Pv, hv)
      }
      setRenderingAutoClearDepthStencil(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(vv, zv, Pv, hv), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const vv = new sv(this.name, this._scene, this.options);
        return this.renderList && (vv.renderList = this.renderList.slice(0)), vv
      }
      dispose() {
        const vv = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          zv = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Pv = 0; Pv < zv; Pv++) {
          const zv = vv[Pv];
          zv && void 0 !== zv.getMaterialForRenderPass(this.renderPassId) && zv.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Pv of this._sceneUBOs) Pv.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === sv.REFRESHRATE_RENDER_ONCE && (this.refreshRate = sv.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    sv.REFRESHRATE_RENDER_ONCE = 0, sv.REFRESHRATE_RENDER_ONEVERYFRAME = 1, sv.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Cv = Pv(39190);
    class iv extends ev.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(vv) {
        this._objectRenderer.renderListPredicate = vv
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(vv) {
        this._objectRenderer.renderList = vv
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(vv) {
        this._objectRenderer.particleSystemList = vv
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(vv) {
        this._objectRenderer.getCustomRenderList = vv
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(vv) {
        this._objectRenderer.renderParticles = vv
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(vv) {
        this._objectRenderer.renderSprites = vv
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(vv) {
        this._objectRenderer.enableBoundingBoxRendering = vv
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(vv) {
        this._objectRenderer.enableOutlineRendering = vv
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(vv) {
        this._objectRenderer.forceLayerMaskCheck = vv
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(vv) {
        this._objectRenderer.activeCamera = vv
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(vv) {
        this._objectRenderer.cameraForLOD = vv
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(vv) {
        this._objectRenderer.disableImageProcessing = vv
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(vv) {
        this._objectRenderer.customIsReadyFunction = vv
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(vv) {
        this._objectRenderer.customRenderFunction = vv
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(vv) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(vv)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(vv) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(vv)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(vv) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(vv)
      }
      set onClear(vv) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(vv)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(vv) {
        this._objectRenderer._waitingRenderList = vv
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
      setMaterialForRendering(vv, zv) {
        this._objectRenderer.setMaterialForRendering(vv, zv)
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
      set boundingBoxSize(vv) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(vv)) return;
        this._boundingBoxSize = vv;
        const zv = this.rD();
        zv && zv.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(vv, zv, Pv) {
        let gv, pv, Nv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          lv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Wv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ev.e.TRILINEAR_SAMPLINGMODE,
          av = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Cv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          iv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          cv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Gv = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          mv = arguments.length > 13 ? arguments[13] : void 0,
          jv = arguments.length > 14 ? arguments[14] : void 0,
          fv = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          Fv = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Yv = !0,
          nv = !1;
        if ("object" === typeof Nv) {
          const vv = Nv;
          Nv = !!vv.generateMipMaps, lv = vv.doNotChangeAspectRatio ?? !0, Tv = vv.type ?? 0, Wv = !!vv.isCube, wv = vv.samplingMode ?? ev.e.TRILINEAR_SAMPLINGMODE, av = vv.generateDepthBuffer ?? !0, Cv = !!vv.generateStencilBuffer, iv = !!vv.isMulti, cv = vv.format ?? 5, Gv = !!vv.delayAllocation, mv = vv.samples, jv = vv.creationFlags, fv = !!vv.noColorAttachment, Fv = !!vv.useSRGBBuffer, gv = vv.colorAttachment, Yv = vv.gammaSpace ?? Yv, pv = vv.existingObjectRenderer, nv = !!vv.enableClusteredLights
        }
        if (super(null, Pv, !Nv, void 0, wv, void 0, void 0, void 0, void 0, cv), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new hv.c, this.onAfterUnbindObservable = new hv.c, this.onClearObservable = new hv.c, this.onResizeObservable = new hv.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Sv.l.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Pv = this.rD())) return;
        const Ov = this.rD().ma();
        this._gammaSpace = Yv, this._coordinatesMode = ev.e.PROJECTION_MODE, this.name = vv, this.isRenderTarget = !0, this._initialSizeParameter = zv, this._dontDisposeObjectRenderer = !!pv, this._processSizeParameter(zv), this._objectRenderer = pv ?? new sv(vv, Pv, {
          numPasses: Wv ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: lv,
          enableClusteredLights: nv
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const vv = this._scene;
          if (!this._disableEngineStages)
            for (const zv of vv._beforeRenderTargetClearStage) zv.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ov) : this.skipInitialClear || Ov.clear(this.clearColor ?? vv.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || vv.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const zv of vv._beforeRenderTargetDrawStage) zv.action(this, this._currentFaceIndex, this._currentLayer);
          Ov._debugPushGroup && Ov._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Ov._debugPopGroup && Ov._debugPopGroup(), !this._disableEngineStages)
            for (const zv of this._scene._afterRenderTargetDrawStage) zv.action(this, this._currentFaceIndex, this._currentLayer);
          const vv = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const zv of this._scene._afterRenderTargetPostProcessStage) zv.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = vv), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Ov) : dv.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ov) : this.skipInitialClear || Ov.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Ov.onResizeObservable.add((() => {})), this._generateMipMaps = !!Nv, this._doNotChangeAspectRatio = lv, iv || (this._renderTargetOptions = {
          generateMipMaps: Nv,
          type: Tv,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: av,
          generateStencilBuffer: Cv,
          samples: mv,
          creationFlags: jv,
          noColorAttachment: fv,
          useSRGBBuffer: Fv,
          colorAttachment: gv,
          label: this.name
        }, this.samplingMode === ev.e.NEAREST_SAMPLINGMODE && (this.wrapU = ev.e.CLAMP_ADDRESSMODE, this.wrapV = ev.e.CLAMP_ADDRESSMODE), Gv || (Wv ? (this._renderTarget = Pv.ma().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = ev.e.INVCUBIC_MODE, this._textureMatrix = Sv.c.Identity()) : this._renderTarget = Pv.ma().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== mv && (this.samples = mv)))
      }
      createDepthStencilTexture() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(vv, zv, Pv, hv, Sv, ev)
      }
      _processSizeParameter(vv) {
        if (vv.ratio) {
          this._sizeRatio = vv.ratio;
          const zv = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(zv.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(zv.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = vv
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(vv) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(vv))
      }
      addPostProcess(vv) {
        if (!this._postProcessManager) {
          const vv = this.rD();
          if (!vv) return;
          this._postProcessManager = new gv.d(vv), this._postProcesses = new Array
        }
        this._postProcesses.push(vv), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (vv)
            for (const vv of this._postProcesses) vv.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(vv) {
        if (!this._postProcesses) return;
        const zv = this._postProcesses.indexOf(vv); - 1 !== zv && (this._postProcesses.splice(zv, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(vv) {
        this._objectRenderer.refreshRate = vv
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
        const vv = this._size.layers;
        if (vv) return vv;
        const zv = this._size.depth;
        return zv || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(vv) {
        const zv = Math.max(1, this.getRenderSize() * vv);
        this.resize(zv)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(vv) {
        const zv = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Pv = this.rD();
        Pv && (this._processSizeParameter(vv), this._renderTarget = zv ? Pv.ma().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Pv.ma().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(vv, zv)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Pv(41139))).then((vv => this._dumpTools = vv))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const vv = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), vv
      }
      _render() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this.rD();
        if (!Pv) return;
        void 0 !== this.useCameraPostProcesses && (vv = this.useCameraPostProcesses);
        const hv = Pv.ma();
        if (hv._debugPushGroup && hv._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Sv = 0; Sv < 6; Sv++) this._renderToTarget(Sv, vv, zv), Pv.incrementRenderId(), Pv.resetCachedMaterial();
          else this._renderToTarget(0, vv, zv);
        else
          for (let Sv = 0; Sv < this.getRenderLayers(); Sv++) this._renderToTarget(0, vv, zv, Sv), Pv.incrementRenderId(), Pv.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), hv._debugPopGroup && hv._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(vv, zv) {
        const Pv = vv * zv,
          hv = (0, pv.i)(Pv + 16384 / (128 + Pv));
        return Math.min((0, pv.b)(vv), hv)
      }
      _bindFrameBuffer() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = this.rD();
        if (!Pv) return;
        const hv = Pv.ma();
        this._renderTarget && hv.bindFramebuffer(this._renderTarget, this.isCube ? vv : void 0, void 0, void 0, this.ignoreCameraViewport, 0, zv)
      }
      _unbindFrameBuffer(vv, zv) {
        this._renderTarget && vv.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zv)
        }))
      }
      _prepareFrame(vv, zv, Pv, hv) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(zv, Pv) : hv && vv.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(zv, Pv)
      }
      _renderToTarget(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Sv = this.rD();
        if (!Sv) return;
        const ev = Sv.ma();
        this._currentFaceIndex = vv, this._currentLayer = hv, this._currentUseCameraPostProcess = zv, this._currentDumpForDebug = Pv, this._prepareFrame(Sv, vv, hv, zv), this._objectRenderer.render(vv + hv, !0), this._unbindFrameBuffer(ev, vv), this._texture && this.isCube && 5 === vv && ev.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(vv, zv, Pv, hv)
      }
      setRenderingAutoClearDepthStencil(vv, zv) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(vv, zv)
      }
      clone() {
        const vv = this.getSize(),
          zv = new iv(this.name, vv, this.rD(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return zv.hasAlpha = this.hasAlpha, zv.level = this.level, zv.coordinatesMode = this.coordinatesMode, this.renderList && (zv.renderList = this.renderList.slice(0)), zv
      }
      serialize() {
        if (!this.name) return null;
        const vv = super.serialize();
        if (vv.renderTargetSize = this.getRenderSize(), vv.renderList = [], this.renderList)
          for (let zv = 0; zv < this.renderList.length; zv++) vv.renderList.push(this.renderList[zv].id);
        return vv
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.rD().ma().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const vv = this.rD();
        if (!vv) return;
        let zv = vv.customRenderTargets.indexOf(this);
        zv >= 0 && vv.customRenderTargets.splice(zv, 1);
        for (const Pv of vv.cameras) zv = Pv.customRenderTargets.indexOf(this), zv >= 0 && Pv.customRenderTargets.splice(zv, 1);
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
    iv.REFRESHRATE_RENDER_ONCE = sv.REFRESHRATE_RENDER_ONCE, iv.REFRESHRATE_RENDER_ONEVERYFRAME = sv.REFRESHRATE_RENDER_ONEVERYFRAME, iv.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = sv.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(iv.prototype, "noPrePassRenderer") || Object.defineProperty(iv.prototype, "noPrePassRenderer", (0, Cv.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41103: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      g: () => lv
    });
    var hv = Pv(39441),
      Sv = Pv(37633),
      ev = Pv(36618),
      gv = Pv(39157),
      pv = Pv(39621);
    const dv = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Nv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dv;
        this._fullscreenViewport = new Sv.d(0, 0, 1, 1);
        const Pv = zv.positions ?? dv.positions,
          ev = zv.indices ?? dv.indices;
        this.engine = vv, this._vertexBuffers = {
          [hv.k.PositionKind]: new hv.k(vv, Pv, hv.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = vv.createIndexBuffer(ev), this._indexBufferLength = ev.length, this._onContextRestoredObserver = vv.onContextRestoredObservable.add((() => {
          this._indexBuffer = vv.createIndexBuffer(ev);
          for (const vv in this._vertexBuffers) {
            this._vertexBuffers[vv]._rebuild()
          }
        }))
      }
      setViewport() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(vv)
      }
      bindBuffers(vv) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, vv)
      }
      applyEffectWrapper(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = zv, this.engine.stencilState.stencilTest = Pv, this.engine.enableEffect(vv.drawWrapper), this.bindBuffers(vv.effect), vv.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(vv) {
        return void 0 !== vv.renderTarget
      }
      render(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!vv.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Pv = null === zv ? null : this._isRenderTargetTexture(zv) ? zv.renderTarget : zv;
        Pv && this.engine.bindFramebuffer(Pv), this.applyEffectWrapper(vv), this.draw(), Pv && this.engine.unBindFramebuffer(Pv), this.restoreStates()
      }
      dispose() {
        const vv = this._vertexBuffers[hv.k.PositionKind];
        vv && (vv.dispose(), delete this._vertexBuffers[hv.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class lv {
      static RegisterShaderCodeProcessing(vv, zv) {
        zv ? lv._CustomShaderCodeProcessing[vv ?? ""] = zv : delete lv._CustomShaderCodeProcessing[vv ?? ""]
      }
      static _GetShaderCodeProcessing(vv) {
        return lv._CustomShaderCodeProcessing[vv] ?? lv._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(vv) {
        this.options.name = vv
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
      set effect(vv) {
        this._drawWrapper.effect = vv
      }
      constructor(vv) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new ev.c(void 0, !0), this.onApplyObservable = new ev.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...vv,
          name: vv.name || "effectWrapper",
          engine: vv.engine,
          uniforms: vv.uniforms || vv.uniformNames || [],
          uniformNames: void 0,
          samplers: vv.samplers || vv.samplerNames || [],
          samplerNames: void 0,
          attributeNames: vv.attributeNames || ["position"],
          uniformBuffers: vv.uniformBuffers || [],
          defines: vv.defines || "",
          useShaderStore: vv.useShaderStore || !1,
          vertexUrl: vv.vertexUrl || vv.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: vv.fragmentShader || "pass",
          indexParameters: vv.indexParameters,
          blockCompilation: vv.blockCompilation || !1,
          shaderLanguage: vv.shaderLanguage || 0,
          onCompiled: vv.onCompiled || void 0,
          extraInitializations: vv.extraInitializations || void 0,
          extraInitializationsAsync: vv.extraInitializationsAsync || void 0,
          useAsPostProcess: vv.useAsPostProcess ?? !1,
          allowEmptySourceTexture: vv.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), vv.vertexUrl || vv.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new pv.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const zv = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, zv, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hv = arguments.length > 2 ? arguments[2] : void 0,
          Sv = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Sv && this._importPromises.push(...Sv);
        const ev = this.options.engine.isWebGPU && !lv.ForceGLSL;
        this._gatherImports(ev, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(ev && this._webGPUReady ? Pv.e(357).then((() => Pv(60814))) : Pv.e(346).then((() => Pv(60587)))), void 0 !== hv && hv(ev, this._importPromises), ev && this._webGPUReady && (this.options.shaderLanguage = 1), vv || this.updateEffect(zv)
      }
      updateEffect() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          pv = arguments.length > 6 ? arguments[6] : void 0,
          dv = arguments.length > 7 ? arguments[7] : void 0;
        const Nv = lv._GetShaderCodeProcessing(this.name);
        if (Nv?.defineCustomBindings) {
          const hv = zv?.slice() ?? [];
          hv.push(...this.options.uniforms);
          const Sv = Pv?.slice() ?? [];
          Sv.push(...this.options.samplers), vv = Nv.defineCustomBindings(this.name, vv, hv, Sv), zv = hv, Pv = Sv
        }
        this.options.defines = vv || "";
        const Tv = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Wv;
        Wv = this.options.extraInitializationsAsync ? async () => {
          await (Tv?.()), await this.options.extraInitializationsAsync()
        }: Tv, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: pv ?? this._shaderPath.vertex,
          fragment: dv ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: zv || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Pv || this.options.samplers,
          defines: null !== vv ? vv : "",
          fallbacks: null,
          onCompiled: Sv ?? this.options.onCompiled,
          onError: ev ?? null,
          indexParameters: hv || this.options.indexParameters,
          processCodeAfterIncludes: Nv?.processCodeAfterIncludes ? (vv, zv) => Nv.processCodeAfterIncludes(this.name, vv, zv) : null,
          processFinalCode: Nv?.processFinalCode ? (vv, zv) => Nv.processFinalCode(this.name, vv, zv) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Wv
        }, this.options.engine) : this._drawWrapper.effect = new gv.b(this._shaderPath, this.options.attributeNames, zv || this.options.uniforms, Pv || this.options.samplerNames, this.options.engine, vv, void 0, Sv || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Wv), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !vv && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), lv._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.ma().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    lv.ForceGLSL = !1, lv._CustomShaderCodeProcessing = {}
  },
  41139: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Dispose: () => cv,
      DumpData: () => iv,
      DumpDataAsync: () => Cv,
      DumpFramebuffer: () => sv,
      DumpTools: () => Gv,
      EncodeImageAsync: () => av,
      RegisterDumpTools: () => jv
    });
    var hv = Pv(39295),
      Sv = Pv(41103),
      ev = Pv(39399),
      gv = Pv(36620),
      pv = Pv(36615),
      dv = Pv(38209),
      Nv = Pv(39356),
      lv = Pv(39300);
    let Tv = null;
    async function Wv() {
      return Tv || (Tv = async function() {
        const vv = pv.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        vv instanceof OffscreenCanvas && dv.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: zv
        } = await Promise.resolve().then((() => Pv(39152)));
        if (!zv.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const hv = new zv(vv, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        pv.e.Instances.pop(), pv.e.OnEnginesDisposedObservable.add((vv => {
          hv && vv !== hv && !hv.mzv && 0 === pv.e.Instances.length && cv()
        })), hv.getCaps().parallelShaderCompile = void 0;
        const ev = new Sv.c(hv),
          {
            passPixelShader: gv
          } = await Pv.e(365).then((() => Pv(60869))),
          Nv = new Sv.g({
            engine: hv,
            name: gv.name,
            fragmentShader: gv.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: vv,
          dumpEngine: {
            engine: hv,
            renderer: ev,
            wrapper: Nv
          }
        }
      }()), await Tv
    }
    let wv = (() => {
      var vv;
      let zv, Pv = [];
      return vv = class {
        static async EncodeImageAsync(vv, zv, Pv, hv, Sv, gv) {
          const pv = await Wv(),
            dv = pv.dumpEngine;
          dv.engine.setSize(zv, Pv, !0);
          const Nv = dv.engine.createRawTexture(vv, zv, Pv, 5, !1, !Sv, 1);
          return dv.renderer.setViewport(), dv.renderer.applyEffectWrapper(dv.wrapper), dv.wrapper.effect._bindTexture("textureSampler", Nv), dv.renderer.draw(), Nv.dispose(), await new Promise(((vv, zv) => {
            ev.h.ToBlob(pv.canvas, (Pv => {
              Pv ? vv(Pv) : zv(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), hv, gv)
          }))
        }
      }, (() => {
        const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [lv.i], (0, hv.e)(vv, null, zv, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: vv => "EncodeImageAsync" in vv,
            get: vv => vv.EncodeImageAsync
          },
          metadata: Sv
        }, null, Pv), Sv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sv
        }), (0, hv.f)(vv, Pv)
      })(), vv
    })();
    const av = wv.EncodeImageAsync;
    async function sv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ev = arguments.length > 5 ? arguments[5] : void 0,
        gv = arguments.length > 6 ? arguments[6] : void 0;
      const pv = await Pv.readPixels(0, 0, vv, zv);
      iv(vv, zv, new Uint8Array(pv.buffer), hv, Sv, ev, !0, void 0, gv)
    }
    async function Cv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Sv = arguments.length > 4 ? arguments[4] : void 0,
        pv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Tv = arguments.length > 7 ? arguments[7] : void 0;
      if (Pv instanceof Float32Array) {
        const vv = new Uint8Array(Pv.length);
        let zv = Pv.length;
        for (; zv--;) {
          const hv = Pv[zv];
          vv[zv] = Math.round(255 * (0, gv.Clamp)(hv))
        }
        Pv = vv
      }
      const Wv = await wv.EncodeImageAsync(Pv, vv, zv, hv, pv, Tv);
      void 0 !== Sv && ev.h.DownloadBlob(Wv, Sv), Wv.type !== hv && dv.d.Warn(`DumpData: The requested mimeType '${hv}' is not supported. The result has mimeType '${Wv.type}' instead.`);
      const av = await Wv.arrayBuffer();
      return lv ? av : `data:${hv};base64,${(0,Nv.i)(av)}`
    }

    function iv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Sv || hv || (Sv = ""), Cv(vv, zv, Pv, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Sv, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((vv => {
        hv && hv(vv)
      }))
    }

    function cv() {
      Tv && (Tv?.then((vv => {
        vv.canvas instanceof HTMLCanvasElement && vv.canvas.remove(), vv.dumpEngine && (vv.dumpEngine.engine.dispose(), vv.dumpEngine.renderer.dispose(), vv.dumpEngine.wrapper.dispose())
      })), Tv = null)
    }
    const Gv = {
      DumpData: iv,
      DumpDataAsync: Cv,
      DumpFramebuffer: sv,
      Dispose: cv
    };
    let mv = !1;

    function jv() {
      if (mv) return;
      mv = !0;
      ev.h.DumpData = iv, ev.h.DumpDataAsync = Cv, ev.h.DumpFramebuffer = sv
    }
  },
  41118: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => wv,
      d: () => av,
      f: () => sv
    });
    var hv = Pv(39798),
      Sv = Pv(41125),
      ev = Pv(39295),
      gv = Pv(41097),
      pv = Pv(39312),
      dv = Pv(41130),
      Nv = Pv(39300);
    class lv extends gv.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 4 ? arguments[4] : void 0;
        const hv = {
          size: "number" === typeof zv ? zv : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Pv,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...zv
        };
        super(vv, dv.e.FragmentUrl, {
          effectWrapper: "number" !== typeof zv && zv.effectWrapper ? void 0 : new dv.e(vv, Pv, hv),
          ...hv
        })
      }
      static _Parse(vv, zv, Pv, hv) {
        return pv.c.Parse((() => new lv(vv.name, vv.options, zv, vv.renderTargetSamplingMode, vv._engine, vv.reusable)), vv, Pv, hv)
      }
    }(() => {
      var vv;
      let zv, Pv = gv.d,
        hv = [];
      vv = class extends Pv {
        get face() {
          return this._effectWrapper.face
        }
        set face(vv) {
          this._effectWrapper.face = vv
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(vv, zv) {
          let Pv = arguments.length > 4 ? arguments[4] : void 0;
          const Sv = {
            size: "number" === typeof zv ? zv : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Pv,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...zv
          };
          super(vv, dv.e.FragmentUrl, {
            effectWrapper: "number" !== typeof zv && zv.effectWrapper ? void 0 : new dv.c(vv, Pv, Sv),
            ...Sv
          }), (0, ev.f)(this, hv)
        }
        static _Parse(zv, Pv, hv, Sv) {
          return pv.c.Parse((() => new vv(zv.name, zv.options, Pv, zv.renderTargetSamplingMode, zv._engine, zv.reusable)), zv, hv, Sv)
        }
      }, (() => {
        const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pv[Symbol.metadata] ?? null) : void 0;
        zv = [(0, Nv.L)()], (0, ev.e)(vv, null, zv, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: vv => "face" in vv,
            get: vv => vv.face
          },
          metadata: Sv
        }, null, hv), Sv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sv
        })
      })()
    })();
    var Tv = Pv(36620),
      Wv = Pv(39368);

    function wv(vv, zv, Pv, hv, Sv, ev, pv, dv) {
      const Nv = zv.ma();
      return zv.isReady = !1, Sv = Sv ?? zv.samplingMode, hv = hv ?? zv.type, ev = ev ?? zv.format, pv = pv ?? zv.width, dv = dv ?? zv.height, -1 === hv && (hv = 0), new Promise((lv => {
        const Tv = new gv.d("postprocess", vv, null, null, 1, null, Sv, Nv, !1, void 0, hv, void 0, null, !1, ev);
        Tv.externalTextureSamplerBinding = !0;
        const Wv = Nv.createRenderTargetTexture({
          width: pv,
          height: dv
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Sv,
          type: hv,
          format: ev
        });
        Tv.onEffectCreatedObservable.addOnce((vv => {
          vv.executeWhenCompiled((() => {
            Tv.onApply = vv => {
              vv._bindTexture("textureSampler", zv), vv.setFloat2("scale", 1, 1)
            }, Pv.postProcessManager.directRender([Tv], Wv, !0), Nv.restoreDefaultFramebuffer(), Nv._releaseTexture(zv), Tv && Tv.dispose(), Wv._swapAndDie(zv), zv.type = hv, zv.format = 5, zv.isReady = !0, lv(zv)
          }))
        }))
      }))
    }
    async function av(vv, zv, ev) {
      let pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        dv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Nv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(vv) {
        if (vv.isReady()) return;
        if (vv.loadingError) throw new Error(vv.errorObject?.message || `Texture ${vv.name} errored while loading.`);
        const zv = vv.onLoadObservable;
        if (zv) return await new Promise((vv => zv.addOnce((() => vv()))));
        const Pv = vv._texture?.onLoadedObservable;
        if (Pv) return await new Promise((vv => Pv.addOnce((() => vv()))));
        throw new Error(`Cannot determine readiness of texture ${vv.name}.`)
      }(vv);
      const Wv = vv.getInternalTexture(),
        wv = vv.is3D || !!Wv?.is3D,
        {
          width: av,
          height: sv
        } = vv.getSize(),
        Cv = zv ?? av,
        iv = ev ?? sv;
      if (Nv || wv || function(vv) {
          switch (vv) {
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
        }(vv.textureFormat) || Cv !== av || iv !== sv) {
        if (vv.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Nv?"RTT":"compression"} is not supported.`);
        return await async function(vv, zv, ev, pv, dv) {
          let Nv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const lv = vv.rD(),
            Tv = lv.ma(),
            Wv = vv.getInternalTexture(),
            wv = vv.is3D || !!Wv?.is3D;
          let av;
          if (Tv.isWebGPU ? wv ? await Pv.e(361).then((() => Pv(60843))) : vv.isCube ? await Pv.e(362).then((() => Pv(60851))) : await Pv.e(363).then((() => Pv(60858))) : wv ? await Pv.e(358).then((() => Pv(60830))) : vv.isCube ? await Pv.e(359).then((() => Pv(60838))) : await Pv.e(360).then((() => Pv(60840))), wv) av = new gv.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: hv.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Tv,
            shaderLanguage: Tv.isWebGPU ? 1 : 0
          });
          else if (vv.isCube) {
            const vv = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            av = new gv.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: hv.e.NEAREST_NEAREST_MIPNEAREST,
              engine: Tv,
              defines: vv[pv],
              shaderLanguage: Tv.isWebGPU ? 1 : 0
            })
          } else av = new gv.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: hv.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Tv,
            shaderLanguage: Tv.isWebGPU ? 1 : 0
          });
          await new Promise((vv => {
            av.onEffectCreatedObservable.addOnce((zv => {
              zv.executeWhenCompiled((() => {
                vv(0)
              }))
            }))
          }));
          const sv = new Sv.e("temp", {
            width: zv,
            height: ev
          }, lv, !1);
          av.onApply = function(zv) {
            zv.setTexture("textureSampler", vv), zv.setFloat("lod", dv), zv.setInt("gamma", vv.gammaSpace ? 1 : 0), wv && zv.setFloat("slice", Nv)
          };
          try {
            if (sv.renderTarget && Wv) {
              const Pv = Wv.samplingMode;
              0 !== dv ? vv.updateSamplingMode(hv.e.NEAREST_NEAREST_MIPNEAREST) : vv.updateSamplingMode(hv.e.NEAREST_NEAREST), lv.postProcessManager.directRender([av], sv.renderTarget, !0), vv.updateSamplingMode(Pv);
              const Sv = await Tv.readPixels(0, 0, zv, ev),
                gv = new Uint8Array(Sv.buffer, Sv.byteOffset, Sv.byteLength);
              return Tv.unBindFramebuffer(sv.renderTarget), gv
            }
            throw Error("Render to texture failed.")
          } finally {
            sv.dispose(), av.dispose()
          }
        }(vv, Cv, iv, pv, dv, lv)
      }
      let cv = await vv.readPixels(pv, dv);
      if (!cv) throw new Error(`Failed to read pixels from texture ${vv.name}.`);
      if (cv instanceof Float32Array) {
        const vv = new Uint8Array(cv.length);
        let zv = cv.length;
        for (; zv--;) {
          const Pv = cv[zv];
          vv[zv] = Math.round(255 * (0, Tv.Clamp)(Pv))
        }
        cv = vv
      }
      const Gv = Cv * iv,
        mv = 4 * Gv;
      if (cv.length !== mv) {
        const vv = 0 === Gv ? 0 : cv.length / Gv;
        if (1 === vv || 2 === vv || 3 === vv) {
          const zv = new Uint8Array(mv);
          for (let Pv = 0, hv = 0, Sv = 0; Pv < Gv; Pv++, Sv += 4) {
            const Pv = cv[hv++];
            if (1 === vv) {
              zv[Sv] = Pv, zv[Sv + 1] = Pv, zv[Sv + 2] = Pv, zv[Sv + 3] = 255;
              continue
            }
            const ev = cv[hv++];
            2 !== vv ? (zv[Sv] = Pv, zv[Sv + 1] = ev, zv[Sv + 2] = cv[hv++], zv[Sv + 3] = 255) : (zv[Sv] = Pv, zv[Sv + 1] = ev, zv[Sv + 2] = 0, zv[Sv + 3] = 255)
          }
          return zv
        }
      }
      return cv
    }
    const sv = {
      CreateResizedCopy: function(vv, zv, Pv) {
        let ev = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const gv = vv.rD(),
          pv = gv.ma(),
          dv = new Sv.e("resized" + vv.name, {
            width: zv,
            height: Pv
          }, gv, !vv.noMipmap, !0, vv._texture.type, !1, vv.samplingMode, !1);
        dv.wrapU = vv.wrapU, dv.wrapV = vv.wrapV, dv.uOffset = vv.uOffset, dv.vOffset = vv.vOffset, dv.uScale = vv.uScale, dv.vScale = vv.vScale, dv.uAng = vv.uAng, dv.vAng = vv.vAng, dv.wAng = vv.wAng, dv.coordinatesIndex = vv.coordinatesIndex, dv.level = vv.level, dv.anisotropicFilteringLevel = vv.anisotropicFilteringLevel, dv._texture.isReady = !1, vv.wrapU = hv.e.CLAMP_ADDRESSMODE, vv.wrapV = hv.e.CLAMP_ADDRESSMODE;
        const Nv = new lv("pass", 1, null, ev ? hv.e.BILINEAR_SAMPLINGMODE : hv.e.NEAREST_SAMPLINGMODE, pv, !1, 0);
        return Nv.externalTextureSamplerBinding = !0, Nv.onEffectCreatedObservable.addOnce((zv => {
          zv.executeWhenCompiled((() => {
            Nv.onApply = function(zv) {
              zv.setTexture("textureSampler", vv)
            };
            const zv = dv.renderTarget;
            zv && (gv.postProcessManager.directRender([Nv], zv), pv.unBindFramebuffer(zv), dv.disposeFramebufferObjects(), Nv.dispose(), dv.getInternalTexture().isReady = !0)
          }))
        })), dv
      },
      ApplyPostProcess: wv,
      ToHalfFloat: Wv.i,
      FromHalfFloat: Wv.b,
      GetTextureDataAsync: av
    }
  },
  41097: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => av
    });
    var hv = Pv(39295),
      Sv = Pv(39413),
      ev = Pv(36618),
      gv = Pv(36594),
      pv = Pv(39157),
      dv = Pv(39300),
      Nv = Pv(39312),
      lv = Pv(36631),
      Tv = Pv(39212),
      Wv = Pv(39247),
      wv = Pv(41103);
    let av = (() => {
        var vv;
        let zv, pv, Tv, av, sv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv = [],
          Vv = [],
          Uv = [],
          Rv = [],
          xv = [],
          tv = [],
          qv = [],
          Iv = [],
          Qv = [],
          Zv = [],
          Av = [],
          Lv = [],
          Hv = [],
          Mv = [],
          yv = [],
          Bv = [],
          Jv = [],
          Ev = [],
          ov = [],
          bv = [],
          rv = [],
          kv = [],
          Xv = [],
          uv = [],
          vz = [],
          zz = [],
          Pz = [],
          hz = [],
          Sz = [];
        return vv = class {
          static get ForceGLSL() {
            return wv.g.ForceGLSL
          }
          static set ForceGLSL(vv) {
            wv.g.ForceGLSL = vv
          }
          static RegisterShaderCodeProcessing(vv, zv) {
            wv.g.RegisterShaderCodeProcessing(vv, zv)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(vv) {
            this._effectWrapper.name = vv
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(vv) {
            this._effectWrapper.alphaMode = vv
          }
          get samples() {
            return this._samples
          }
          set samples(vv) {
            this._samples = Math.min(vv, this._engine.getCaps().maxMSAASamples), this._textures.forEach((vv => {
              vv.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(vv) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), vv && (this._onActivateObserver = this.onActivateObservable.add(vv))
          }
          set onSizeChanged(vv) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(vv)
          }
          set onApply(vv) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(vv)
          }
          set onBeforeRender(vv) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(vv)
          }
          set onAfterRender(vv) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(vv)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(vv) {
            this._forcedOutputTexture = vv
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.jy
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.f_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(zv, Pv, pv, dv, Nv, lv) {
            let Tv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Wv = arguments.length > 7 ? arguments[7] : void 0,
              av = arguments.length > 8 ? arguments[8] : void 0,
              sv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              iv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              cv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Gv = arguments.length > 12 ? arguments[12] : void 0,
              mv = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              jv = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              fv = arguments.length > 15 ? arguments[15] : void 0,
              Fv = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, hv.f)(this, Kv), null), this.uniqueId = (0, hv.f)(this, Vv, void 0), this.width = ((0, hv.f)(this, Uv), (0, hv.f)(this, Rv, -1)), this.height = ((0, hv.f)(this, xv), (0, hv.f)(this, tv, -1)), this.nodeMaterialSource = ((0, hv.f)(this, qv), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, hv.f)(this, Iv, void 0), this.clearColor = ((0, hv.f)(this, Qv), (0, hv.f)(this, Zv, void 0)), this.autoClear = ((0, hv.f)(this, Av), (0, hv.f)(this, Lv, !0)), this.forceAutoClearInAlphaMode = ((0, hv.f)(this, Hv), (0, hv.f)(this, Mv, !1)), this.alphaConstants = ((0, hv.f)(this, yv), (0, hv.f)(this, Bv, void 0)), this.animations = ((0, hv.f)(this, Jv), []), this.enablePixelPerfectMode = (0, hv.f)(this, Ev, !1), this.forceFullscreenViewport = ((0, hv.f)(this, ov), (0, hv.f)(this, bv, !0)), this.inspectableCustomProperties = (0, hv.f)(this, rv), this.scaleMode = (0, hv.f)(this, kv, 1), this.alwaysForcePOT = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, !1)), this._samples = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, 1)), this.adaptScaleToCurrentViewport = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, !1)), this.doNotSerialize = ((0, hv.f)(this, Sz), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Sv.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new gv.j(1, 1), this._texelSize = gv.j.Zero(), this.onActivateObservable = new ev.c, this.onSizeChangedObservable = new ev.c, this.onApplyObservable = new ev.c, this.onBeforeRenderObservable = new ev.c, this.onAfterRenderObservable = new ev.c, this.uD = new ev.c, Cv();
            let Yv, nv = 1,
              Ov = null;
            if (pv && !Array.isArray(pv)) {
              const vv = pv;
              pv = vv.uniforms ?? null, dv = vv.samplers ?? null, nv = vv.size ?? 1, lv = vv.camera ?? null, Tv = vv.samplingMode ?? 1, Wv = vv.engine, av = vv.reusable, sv = Array.isArray(vv.defines) ? vv.defines.join("\n") : vv.defines ?? null, iv = vv.textureType ?? 0, cv = vv.vertexUrl ?? "postprocess", Gv = vv.indexParameters, mv = vv.blockCompilation ?? !1, jv = vv.textureFormat ?? 5, fv = vv.shaderLanguage ?? 0, Ov = vv.uniformBuffers ?? null, Fv = vv.extraInitializations, Yv = vv.effectWrapper
            } else Nv && (nv = "number" === typeof Nv ? Nv : {
              width: Nv.width,
              height: Nv.height
            });
            if (this._useExistingThinPostProcess = !!Yv, this._effectWrapper = Yv ?? new wv.g({
                name: zv,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Pv,
                engine: Wv || lv?.rD().ma(),
                uniforms: pv,
                samplers: dv,
                uniformBuffers: Ov,
                defines: sv,
                vertexUrl: cv,
                indexParameters: Gv,
                blockCompilation: !0,
                shaderLanguage: fv,
                extraInitializations: void 0
              }), this.name = zv, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != lv ? (this.jy = lv, this._scene = lv.rD(), lv.attachPostProcess(this), this._engine = this._scene.ma(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Wv && (this._engine = Wv, this._engine.postProcesses.push(this)), this._options = nv, this.renderTargetSamplingMode = Tv || 1, this._reusable = av || !1, this._textureType = iv, this._textureFormat = jv, this._shaderLanguage = fv || 0, this._samplers = dv || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Pv, this._vertexUrl = cv, this._parameters = pv || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Ov || [], this._indexParameters = Gv, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const zv = [];
              this._gatherImports(this._engine.isWebGPU && !vv.ForceGLSL, zv), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(mv, sv, Fv, zv)
            }
          }
          _gatherImports() {
            let vv = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? vv.push(Promise.all([Pv.e(357).then((() => Pv(60814)))])) : vv.push(Promise.all([Pv.e(346).then((() => Pv(60587)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          ma() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(vv) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = vv, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Sv.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hv = arguments.length > 3 ? arguments[3] : void 0,
              Sv = arguments.length > 4 ? arguments[4] : void 0,
              ev = arguments.length > 5 ? arguments[5] : void 0,
              gv = arguments.length > 6 ? arguments[6] : void 0,
              pv = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(vv, zv, Pv, hv, Sv, ev, gv, pv), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Sv = 0; Sv < this._textureCache.length; Sv++)
              if (this._textureCache[Sv].texture.width === vv.width && this._textureCache[Sv].texture.height === vv.height && this._textureCache[Sv].postProcessChannel === Pv && this._textureCache[Sv].texture._generateDepthBuffer === zv.generateDepthBuffer && this._textureCache[Sv].texture.samples === zv.samples) return this._textureCache[Sv].texture;
            const hv = this._engine.createRenderTargetTexture(vv, zv);
            return this._textureCache.push({
              texture: hv,
              postProcessChannel: Pv,
              lastUsedRenderId: -1
            }), hv
          }
          _flushTextureCache() {
            const vv = this._renderId;
            for (let zv = this._textureCache.length - 1; zv >= 0; zv--)
              if (vv - this._textureCache[zv].lastUsedRenderId > 100) {
                let vv = !1;
                for (let Pv = 0; Pv < this._textures.length; Pv++)
                  if (this._textures.data[Pv] === this._textureCache[zv].texture) {
                    vv = !0;
                    break
                  } vv || (this._textureCache[zv].texture.dispose(), this._textureCache.splice(zv, 1))
              }
          }
          resize(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = vv, this.height = zv;
            let ev = null;
            if (Pv)
              for (let dv = 0; dv < Pv._postProcesses.length; dv++)
                if (null !== Pv._postProcesses[dv]) {
                  ev = Pv._postProcesses[dv];
                  break
                } const gv = {
                width: this.width,
                height: this.height
              },
              pv = {
                generateMipMaps: hv,
                generateDepthBuffer: Sv || ev === this,
                generateStencilBuffer: (Sv || ev === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(gv, pv, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(gv, pv, 1)), this._texelSize.f_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let vv;
            if (this._shareOutputWithPostProcess) vv = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) vv = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let zv;
              vv = this.inputTexture;
              for (let Pv = 0; Pv < this._textureCache.length; Pv++)
                if (this._textureCache[Pv].texture === vv) {
                  zv = this._textureCache[Pv];
                  break
                } zv && (zv.lastUsedRenderId = this._renderId)
            }
            return vv
          }
          activate(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Pv = arguments.length > 2 ? arguments[2] : void 0;
            const hv = null === vv || void 0 !== vv.cameraRigMode ? vv || this.jy : null,
              Sv = hv?.rD() ?? vv,
              ev = Sv.ma(),
              gv = ev.getCaps().maxTextureSize,
              pv = (zv ? zv.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              dv = (zv ? zv.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Nv = this._options.width || pv,
              lv = this._options.height || dv;
            const Tv = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let wv = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const vv = ev.currentViewport;
                vv && (Nv *= vv.width, lv *= vv.height)
              }(Tv || this.alwaysForcePOT) && (this._options.width || (Nv = ev.needPOTTextures ? (0, Wv.c)(Nv, gv, this.scaleMode) : Nv), this._options.height || (lv = ev.needPOTTextures ? (0, Wv.c)(lv, gv, this.scaleMode) : lv)), this.width === Nv && this.height === lv && (wv = this._getTarget()) || this.resize(Nv, lv, hv, Tv, Pv), this._textures.forEach((vv => {
                vv.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(vv, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return wv || (wv = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.f_(pv / Nv, dv / lv), this._engine.bindFramebuffer(wv, 0, pv, dv, this.forceFullscreenViewport)) : (this._scaleRatio.f_(1, 1), this._engine.bindFramebuffer(wv, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(hv), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Sv.clearColor, Sv._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), wv
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
            let vv;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.ma().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), vv = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", vv?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let vv = this._textureCache.length - 1; vv >= 0; vv--) this._textureCache[vv].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(vv) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = vv.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(vv) {
            let zv;
            if (vv = vv || this.jy, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (zv = this._parentContainer.postProcesses.indexOf(this), zv > -1 && this._parentContainer.postProcesses.splice(zv, 1), this._parentContainer = null), zv = this._engine.postProcesses.indexOf(this), -1 !== zv && this._engine.postProcesses.splice(zv, 1), this.uD.notifyObservers(), vv) {
              if (vv.detachPostProcess(this), zv = vv._postProcesses.indexOf(this), 0 === zv && vv._postProcesses.length > 0) {
                const vv = this.jy._getFirstPostProcess();
                vv && vv.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const vv = Nv.c.Serialize(this),
              zv = this.getCamera() || this._scene && this._scene.activeCamera;
            return vv.customType = "BABYLON." + this.getClassName(), vv.cameraId = zv ? zv.id : null, vv.reusable = this._reusable, vv.textureType = this._textureType, vv.fragmentUrl = this._fragmentUrl, vv.parameters = this._parameters, vv.samplers = this._samplers, vv.uniformBuffers = this._uniformBuffers, vv.options = this._options, vv.defines = this._postProcessDefines, vv.textureFormat = this._textureFormat, vv.vertexUrl = this._vertexUrl, vv.indexParameters = this._indexParameters, vv
          }
          clone() {
            const zv = this.serialize();
            zv._engine = this._engine, zv.cameraId = null;
            const Pv = vv.Parse(zv, this._scene, "");
            return Pv ? (Pv.onActivateObservable = this.onActivateObservable.clone(), Pv.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Pv.onApplyObservable = this.onApplyObservable.clone(), Pv.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Pv.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Pv._prePassEffectConfiguration = this._prePassEffectConfiguration, Pv) : null
          }
          static Parse(vv, zv, Pv) {
            const hv = (0, lv.b)(vv.customType);
            if (!hv || !hv._Parse) return null;
            const Sv = zv ? zv.getCameraById(vv.cameraId) : null;
            return hv._Parse(vv, Sv, zv, Pv)
          }
          static _Parse(zv, Pv, hv, Sv) {
            return Nv.c.Parse((() => new vv(zv.name, zv.fragmentUrl, zv.parameters, zv.samplers, zv.options, Pv, zv.renderTargetSamplingMode, zv._engine, zv.reusable, zv.defines, zv.textureType, zv.vertexUrl, zv.indexParameters, !1, zv.textureFormat)), zv, hv, Sv)
          }
        }, (() => {
          const Pv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zv = [(0, dv.L)()], pv = [(0, dv.L)()], Tv = [(0, dv.L)()], av = [(0, dv.L)()], sv = [(0, dv.L)()], iv = [(0, dv.p)()], cv = [(0, dv.L)()], Gv = [(0, dv.L)()], mv = [(0, dv.L)()], jv = [(0, dv.L)()], fv = [(0, dv.L)()], Fv = [(0, dv.L)()], Yv = [(0, dv.L)()], nv = [(0, dv.L)()], Ov = [(0, dv.L)("samples")], Dv = [(0, dv.L)()], (0, hv.e)(vv, null, pv, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: vv => "name" in vv,
              get: vv => vv.name
            },
            metadata: Pv
          }, null, Kv), (0, hv.e)(vv, null, mv, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "alphaMode" in vv,
              get: vv => vv.alphaMode
            },
            metadata: Pv
          }, null, Kv), (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: vv => "uniqueId" in vv,
              get: vv => vv.uniqueId,
              set: (vv, zv) => {
                vv.uniqueId = zv
              }
            },
            metadata: Pv
          }, Vv, Uv), (0, hv.e)(null, null, Tv, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: vv => "width" in vv,
              get: vv => vv.width,
              set: (vv, zv) => {
                vv.width = zv
              }
            },
            metadata: Pv
          }, Rv, xv), (0, hv.e)(null, null, av, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: vv => "height" in vv,
              get: vv => vv.height,
              set: (vv, zv) => {
                vv.height = zv
              }
            },
            metadata: Pv
          }, tv, qv), (0, hv.e)(null, null, sv, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "renderTargetSamplingMode" in vv,
              get: vv => vv.renderTargetSamplingMode,
              set: (vv, zv) => {
                vv.renderTargetSamplingMode = zv
              }
            },
            metadata: Pv
          }, Iv, Qv), (0, hv.e)(null, null, iv, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "clearColor" in vv,
              get: vv => vv.clearColor,
              set: (vv, zv) => {
                vv.clearColor = zv
              }
            },
            metadata: Pv
          }, Zv, Av), (0, hv.e)(null, null, cv, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: vv => "autoClear" in vv,
              get: vv => vv.autoClear,
              set: (vv, zv) => {
                vv.autoClear = zv
              }
            },
            metadata: Pv
          }, Lv, Hv), (0, hv.e)(null, null, Gv, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "forceAutoClearInAlphaMode" in vv,
              get: vv => vv.forceAutoClearInAlphaMode,
              set: (vv, zv) => {
                vv.forceAutoClearInAlphaMode = zv
              }
            },
            metadata: Pv
          }, Mv, yv), (0, hv.e)(null, null, jv, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: vv => "alphaConstants" in vv,
              get: vv => vv.alphaConstants,
              set: (vv, zv) => {
                vv.alphaConstants = zv
              }
            },
            metadata: Pv
          }, Bv, Jv), (0, hv.e)(null, null, fv, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "enablePixelPerfectMode" in vv,
              get: vv => vv.enablePixelPerfectMode,
              set: (vv, zv) => {
                vv.enablePixelPerfectMode = zv
              }
            },
            metadata: Pv
          }, Ev, ov), (0, hv.e)(null, null, Fv, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: vv => "forceFullscreenViewport" in vv,
              get: vv => vv.forceFullscreenViewport,
              set: (vv, zv) => {
                vv.forceFullscreenViewport = zv
              }
            },
            metadata: Pv
          }, bv, rv), (0, hv.e)(null, null, Yv, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "scaleMode" in vv,
              get: vv => vv.scaleMode,
              set: (vv, zv) => {
                vv.scaleMode = zv
              }
            },
            metadata: Pv
          }, kv, Xv), (0, hv.e)(null, null, nv, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: vv => "alwaysForcePOT" in vv,
              get: vv => vv.alwaysForcePOT,
              set: (vv, zv) => {
                vv.alwaysForcePOT = zv
              }
            },
            metadata: Pv
          }, uv, vz), (0, hv.e)(null, null, Ov, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: vv => "_samples" in vv,
              get: vv => vv._samples,
              set: (vv, zv) => {
                vv._samples = zv
              }
            },
            metadata: Pv
          }, zz, Pz), (0, hv.e)(null, null, Dv, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: vv => "adaptScaleToCurrentViewport" in vv,
              get: vv => vv.adaptScaleToCurrentViewport,
              set: (vv, zv) => {
                vv.adaptScaleToCurrentViewport = zv
              }
            },
            metadata: Pv
          }, hz, Sz), Pv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pv
          })
        })(), vv
      })(),
      sv = !1;

    function Cv() {
      sv || (sv = !0, Tv.b.prototype.setTextureFromPostProcess = function(vv, zv, Pv) {
        let hv = null;
        zv && (zv._forcedOutputTexture ? hv = zv._forcedOutputTexture : zv._textures.data[zv._currentRenderTextureInd] && (hv = zv._textures.data[zv._currentRenderTextureInd])), this._bindTexture(vv, hv?.texture ?? null, Pv)
      }, Tv.b.prototype.setTextureFromPostProcessOutput = function(vv, zv, Pv) {
        this._bindTexture(vv, zv?._outputTexture?.texture ?? null, Pv)
      }, pv.b.prototype.setTextureFromPostProcess = function(vv, zv) {
        this._engine.setTextureFromPostProcess(this._samplers[vv], zv, vv)
      }, pv.b.prototype.setTextureFromPostProcessOutput = function(vv, zv) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[vv], zv, vv)
      }, (0, lv.c)("BABYLON.PostProcess", av))
    }
  },
  41130: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      e: () => ev
    });
    var hv = Pv(41103),
      Sv = Pv(36615);
    class ev extends hv.g {
      _gatherImports(vv, zv) {
        vv ? (this._webGPUReady = !0, zv.push(Promise.all([Pv.e(364).then((() => Pv(60863)))]))) : zv.push(Promise.all([Pv.e(365).then((() => Pv(60869)))])), super._gatherImports(vv, zv)
      }
      constructor(vv) {
        let zv = arguments.length > 2 ? arguments[2] : void 0;
        const Pv = {
          name: vv,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Sv.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: ev.FragmentUrl,
          ...zv
        };
        Pv.engine || (Pv.engine = Sv.e.LastCreatedEngine), super(Pv)
      }
    }
    ev.FragmentUrl = "pass";
    class gv extends hv.g {
      _gatherImports(vv, zv) {
        vv ? (this._webGPUReady = !0, zv.push(Promise.all([Pv.e(366).then((() => Pv(60878)))]))) : zv.push(Promise.all([Pv.e(367).then((() => Pv(60885)))])), super._gatherImports(vv, zv)
      }
      constructor(vv) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: vv,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Sv.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: gv.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(vv) {
        if (!(vv < 0 || vv > 5)) switch (this._face = vv, this._face) {
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
    gv.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);