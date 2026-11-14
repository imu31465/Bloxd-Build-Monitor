export const id = 286;
export const ids = [286];
export const modules = {
  39754: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Sc
    });
    var Vc = nc(35783),
      Ic = nc(35756),
      rB = nc(38493),
      uc = nc(38197),
      sc = nc(37992),
      Mc = nc(37191),
      Pc = nc(38182),
      qB = nc(38204),
      Oc = nc(35768),
      Tc = nc(37963),
      fc = nc(38158),
      mB = nc(38232);
    class ec {
      get renderList() {
        return this._renderList
      }
      set renderList(cB) {
        this._renderList !== cB && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), cB && (this._unObserveRenderList = (0, Oc.i)(cB, this._renderListHasChanged)), this._renderList = cB)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(cB) {
        cB !== this._disableImageProcessing && (this._disableImageProcessing = cB, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(cB) {
        this._disableDepthPrePass = cB, this._renderingManager.disableDepthPrePass = cB
      }
      get name() {
        return this._name
      }
      set name(cB) {
        if (this._name !== cB) {
          if (this._name = cB, this._sceneUBOs)
            for (let cB = 0; cB < this._sceneUBOs.length; ++cB) this._sceneUBOs[cB].name = `Scene ubo #${cB} for ${this.name}`;
          if (this._scene)
            for (let cB = 0; cB < this._renderPassIds.length; ++cB) {
              const Bc = this._renderPassIds[cB];
              this._engine._renderPassNames[Bc] = `${this._name}#${cB}`
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
      setMaterialForRendering(cB, Bc) {
        let nc;
        nc = Array.isArray(cB) ? cB : [cB];
        for (let Vc = 0; Vc < nc.length; ++Vc)
          for (let cB = 0; cB < this.options.numPasses; ++cB) {
            let Ic = nc[Vc];
            nc[Vc].HBc && (Ic = nc[Vc].wqc), Ic.setMaterialForRenderPass(this._renderPassIds[cB], void 0 !== Bc ? Array.isArray(Bc) ? Bc[cB] : Bc : void 0)
          }
      }
      _freezeActiveMeshes(cB) {
        this._freezeActiveMeshesCancel = (0, Tc.h)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, cB)
            for (let cB = 0; cB < this._activeMeshes.length; cB++) this._activeMeshes.data[cB]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((cB, Bc) => {
          this._freezeActiveMeshesCancel = null, Bc ? (Mc.c.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), cB && Mc.c.Error(cB)) : (Mc.c.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), cB && (Mc.c.Error(cB), cB.stack && Mc.c.Error(cB.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let cB = 0; cB < this._activeMeshes.length; cB++) this._activeMeshes.data[cB]._unFreeze();
        this._isFrozen = !1
      }
      constructor(cB, Bc, nc) {
        this._unObserveRenderList = null, this._renderListHasChanged = (cB, Bc) => {
          const nc = this._renderList ? this._renderList.length : 0;
          if (0 === Bc && nc > 0 || 0 === nc)
            for (const Vc of this._scene.meshes) Vc._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Vc.c, this.onAfterRenderObservable = new Vc.c, this.onBeforeRenderingManagerRenderObservable = new Vc.c, this.onAfterRenderingManagerRenderObservable = new Vc.c, this.onInitRenderingObservable = new Vc.c, this.onFinishRenderingObservable = new Vc.c, this.onFastPathRenderObservable = new Vc.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new fc.e(256), this._activeBoundingBoxes = new fc.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = cB, this._scene = Bc, this._engine = this._scene.RV(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...nc
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new qB.c(Bc), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const cB of this._scene.lights) cB.getTypeID() === mB.c.LIGHTTYPEID_CLUSTERED_CONTAINER && cB.isSupported && cB._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let cB = 0; cB < this.options.numPasses; ++cB) this._engine.releaseRenderPassId(this._renderPassIds[cB]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let cB = 0; cB < this.options.numPasses; ++cB) this._renderPassIds[cB] = this._engine.createRenderPassId(`${this.name}#${cB}`)
      }
      _createSceneUBO(cB, Bc) {
        const nc = this._scene.RV(),
          Vc = new Pc.c(nc, void 0, Bc, cB, void 0, !1);
        return Vc.addUniform("viewProjection", 16), Bc && Vc.addUniform("viewProjectionR", 16), Vc.addUniform("view", 16), Vc.addUniform("projection", 16), Vc.addUniform("vEyePosition", 4), Vc.addUniform("inverseProjection", 16), Vc
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const cB = this._engine._currentRenderTarget,
          Bc = !(!cB || !cB.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const cB = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${cB} for ${this.name}`, Bc)), this._sceneUBOIsMultiview.push(Bc)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Bc && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Bc), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Bc);
        const nc = this._sceneUBOs[this._currentSceneUBOIndex++];
        return nc.unbindEffect(), nc
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(cB) {
        this._refreshRate = cB, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(cB, Bc) {
        this.prepareRenderList(), this.initRender(cB, Bc);
        const nc = this._checkReadiness();
        return this.finishRender(), nc
      }
      prepareRenderList() {
        const cB = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Bc = 0; Bc < this._waitingRenderList.length; Bc++) {
              const nc = this._waitingRenderList[Bc],
                Vc = cB.getMeshById(nc);
              Vc && this.renderList.push(Vc)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const cB = this._scene.meshes;
          for (let Bc = 0; Bc < cB.length; Bc++) {
            const nc = cB[Bc];
            this.renderListPredicate(nc) && this.renderList.push(nc)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(cB, Bc) {
        const nc = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), nc && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(nc.getViewMatrix(), nc.getProjectionMatrix(!0)), this._scene._activeCamera = nc, this._engine.setViewport(nc.rigParent ? nc.rigParent.viewport : nc.viewport, cB, Bc)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const cB = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (cB.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), cB._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== cB.activeCamera && cB.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), cB.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[cB], this.onBeforeRenderObservable.notifyObservers(cB);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(cB);
        else {
          const Bc = this._prepareRenderingManager(cB),
            nc = this._scene.getOutlineRenderer?.(),
            Vc = nc?.enabled;
          nc && (nc.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(cB), this._renderingManager.render(this.customRenderFunction, Bc, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(cB), nc && (nc.enabled = Vc)
        }
        Bc || this.onAfterRenderObservable.notifyObservers(cB), this._engine.currentRenderPassId = nc
      }
      _checkReadiness() {
        const cB = this._scene,
          Bc = this._engine.currentRenderPassId;
        let nc = !0;
        cB.getViewMatrix() || cB.updateTransformMatrix();
        const Vc = this.options.numPasses;
        for (let Ic = 0; Ic < Vc && nc; Ic++) {
          const Bc = this.renderList ? this.renderList : cB.frameGraph ? cB.meshes : cB.getActiveMeshes().data,
            rB = this.renderList || cB.frameGraph ? Bc.length : cB.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Ic], this.onBeforeRenderObservable.notifyObservers(Ic);
          let uc = null,
            sc = rB;
          this.getCustomRenderList && (uc = this.getCustomRenderList(Ic, Bc, rB), uc && (sc = uc.length)), uc || (uc = Bc), this.options.doNotChangeAspectRatio || cB.updateTransformMatrix(!0);
          for (let cB = 0; cB < sc && nc; ++cB) {
            const Bc = uc[cB];
            if (!Bc.isEnabled() || Bc.isBlocked || !Bc.isVisible || !Bc.rD) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Bc, this.refreshRate, !0)) {
                nc = !1;
                continue
              }
            } else if (!Bc.isReady(!0)) {
              nc = !1;
              continue
            }
            let Vc = Bc._edgesRenderer,
              Ic = Bc.hasThinInstances;
            if (Bc.HBc) {
              const cB = Bc.wqc;
              cB.edgesShareWithInstances && cB._edgesRenderer?.isEnabled && (Vc = cB._edgesRenderer, Ic = !0)
            } else Bc.Wqc && Bc.edgesShareWithInstances && (Ic = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Vc?.isEnabled && (Vc.isReady(Ic) || (nc = !1))
          }
          if (this.renderParticles && cB.particlesEnabled) {
            const Bc = this.particleSystemList || cB.qD;
            for (const cB of Bc) cB.isReady() || (nc = !1)
          }
          if (this.renderSprites && cB.spritesEnabled) {
            const Bc = this.spriteManagerList || cB.spriteManagers;
            if (Bc)
              for (const Vc of Bc) cB.activeCamera && 0 === (Vc.layerMask & cB.activeCamera.layerMask) || Vc.isReady && !Vc.isReady() && (nc = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Ic), Vc > 1 && (cB.incrementRenderId(), cB.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Bc, nc
      }
      _prepareRenderingManager() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this._scene;
        let Vc, Ic, rB = null;
        const uc = this.renderList ? this.renderList : nc.frameGraph ? nc.meshes : nc.getActiveMeshes().data,
          sc = this.renderList || nc.frameGraph ? uc.length : nc.getActiveMeshes().length;
        if (this.getCustomRenderList && (rB = this.getCustomRenderList(cB, uc, sc)), rB) Vc = rB.length, Ic = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Bc && !this._engine.isWebGPU) return uc;
          this._defaultRenderListPrepared = !0, rB = uc, Vc = sc, Ic = !this.renderList || this.forceLayerMaskCheck
        }
        const Mc = nc.activeCamera,
          Pc = this.cameraForLOD ?? Mc,
          qB = nc.getBoundingBoxRenderer?.();
        if (nc._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && qB) {
            qB.reset();
            for (let cB = 0; cB < this._activeBoundingBoxes.length; cB++) {
              const Bc = this._activeBoundingBoxes.data[cB];
              qB.renderList.push(Bc)
            }
          }
          return rB
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), qB && qB.reset(), this.renderMeshes) {
          const cB = nc.getRenderId(),
            Bc = nc.getFrameId();
          for (let uc = 0; uc < Vc; uc++) {
            const Vc = rB[uc];
            if (Vc && !Vc.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Vc, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Vc.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let rB, uc;
              if (Pc) {
                const cB = Vc._internalAbstractMeshDataInfo._currentLOD.get(Pc);
                cB && cB[1] === Bc ? rB = cB[0] : (rB = nc.customLODSelector ? nc.customLODSelector(Vc, Pc) : Vc.getLOD(Pc), cB ? (cB[0] = rB, cB[1] = Bc) : Vc._internalAbstractMeshDataInfo._currentLOD.set(Pc, [rB, Bc]))
              } else rB = Vc;
              if (!rB) continue;
              if (rB !== Vc && 0 !== rB.billboardMode && rB.computeWorldMatrix(), rB._preActivateForIntermediateRendering(cB), uc = !(!Ic || !Mc) && 0 === (Vc.layerMask & Mc.layerMask), Vc.isEnabled() && Vc.isVisible && Vc.rD && !uc) {
                if (this._activeMeshes.push(Vc), rB._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, rB !== Vc && rB._activate(cB, !0), this.enableBoundingBoxRendering && qB && qB._preActiveMesh(Vc), Vc._activate(cB, !0) && Vc.rD.length) {
                  Vc.HBc ? Vc._internalAbstractMeshDataInfo._actAsRegularMesh && (rB = Vc) : rB._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, rB._internalAbstractMeshDataInfo._isActiveIntermediate = !0, nc._prepareSkeleton(rB);
                  for (let cB = 0; cB < rB.rD.length; cB++) {
                    const Bc = rB.rD[cB];
                    this.enableBoundingBoxRendering && qB && qB._evaluateSubMesh(Vc, Bc), this._renderingManager.dispatch(Bc, rB)
                  }
                }
                Vc._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && qB && Bc)
          for (let Oc = 0; Oc < qB.renderList.length; Oc++) {
            const cB = qB.renderList.data[Oc];
            this._activeBoundingBoxes.push(cB)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const cB = this.particleSystemList || nc.qD;
          for (let Bc = 0; Bc < cB.length; Bc++) {
            const nc = cB[Bc],
              Vc = nc.emitter;
            nc.isStarted() && Vc && (!Vc.position || Vc.isEnabled()) && this._renderingManager.dispatchParticles(nc)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return rB
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(cB, Bc, nc, Vc)
      }
      setRenderingAutoClearDepthStencil(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(cB, Bc, nc, Vc), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const cB = new ec(this.name, this._scene, this.options);
        return this.renderList && (cB.renderList = this.renderList.slice(0)), cB
      }
      dispose() {
        const cB = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Bc = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let nc = 0; nc < Bc; nc++) {
          const Bc = cB[nc];
          Bc && void 0 !== Bc.getMaterialForRenderPass(this.renderPassId) && Bc.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const nc of this._sceneUBOs) nc.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === ec.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ec.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    ec.REFRESHRATE_RENDER_ONCE = 0, ec.REFRESHRATE_RENDER_ONEVERYFRAME = 1, ec.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var tB = nc(37953);
    class Sc extends rB.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(cB) {
        this._objectRenderer.renderListPredicate = cB
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(cB) {
        this._objectRenderer.renderList = cB
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(cB) {
        this._objectRenderer.particleSystemList = cB
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(cB) {
        this._objectRenderer.getCustomRenderList = cB
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(cB) {
        this._objectRenderer.renderParticles = cB
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(cB) {
        this._objectRenderer.renderSprites = cB
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(cB) {
        this._objectRenderer.enableBoundingBoxRendering = cB
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(cB) {
        this._objectRenderer.enableOutlineRendering = cB
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(cB) {
        this._objectRenderer.forceLayerMaskCheck = cB
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(cB) {
        this._objectRenderer.activeCamera = cB
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(cB) {
        this._objectRenderer.cameraForLOD = cB
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(cB) {
        this._objectRenderer.disableImageProcessing = cB
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(cB) {
        this._objectRenderer.customIsReadyFunction = cB
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(cB) {
        this._objectRenderer.customRenderFunction = cB
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(cB) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(cB)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(cB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(cB)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(cB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(cB)
      }
      set onClear(cB) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(cB)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(cB) {
        this._objectRenderer._waitingRenderList = cB
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
      setMaterialForRendering(cB, Bc) {
        this._objectRenderer.setMaterialForRendering(cB, Bc)
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
      set boundingBoxSize(cB) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(cB)) return;
        this._boundingBoxSize = cB;
        const Bc = this.knc();
        Bc && Bc.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(cB, Bc, nc) {
        let uc, sc, Pc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : rB.e.TRILINEAR_SAMPLINGMODE,
          mB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          tB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Sc = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          yB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          zB = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          pc = arguments.length > 13 ? arguments[13] : void 0,
          hc = arguments.length > 14 ? arguments[14] : void 0,
          aB = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          lc = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Yc = !0,
          Lc = !1;
        if ("object" === typeof Pc) {
          const cB = Pc;
          Pc = !!cB.generateMipMaps, qB = cB.doNotChangeAspectRatio ?? !0, Oc = cB.type ?? 0, Tc = !!cB.isCube, fc = cB.samplingMode ?? rB.e.TRILINEAR_SAMPLINGMODE, mB = cB.generateDepthBuffer ?? !0, tB = !!cB.generateStencilBuffer, Sc = !!cB.isMulti, yB = cB.format ?? 5, zB = !!cB.delayAllocation, pc = cB.samples, hc = cB.creationFlags, aB = !!cB.noColorAttachment, lc = !!cB.useSRGBBuffer, uc = cB.colorAttachment, Yc = cB.gammaSpace ?? Yc, sc = cB.existingObjectRenderer, Lc = !!cB.enableClusteredLights
        }
        if (super(null, nc, !Pc, void 0, fc, void 0, void 0, void 0, void 0, yB), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Vc.c, this.onAfterUnbindObservable = new Vc.c, this.onClearObservable = new Vc.c, this.onResizeObservable = new Vc.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Ic.p.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(nc = this.knc())) return;
        const gB = this.knc().RV();
        this._gammaSpace = Yc, this._coordinatesMode = rB.e.PROJECTION_MODE, this.name = cB, this.isRenderTarget = !0, this._initialSizeParameter = Bc, this._dontDisposeObjectRenderer = !!sc, this._processSizeParameter(Bc), this._objectRenderer = sc ?? new ec(cB, nc, {
          numPasses: Tc ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: qB,
          enableClusteredLights: Lc
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const cB = this._scene;
          if (!this._disableEngineStages)
            for (const Bc of cB._beforeRenderTargetClearStage) Bc.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(gB) : this.skipInitialClear || gB.clear(this.clearColor ?? cB.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || cB.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Bc of cB._beforeRenderTargetDrawStage) Bc.action(this, this._currentFaceIndex, this._currentLayer);
          gB._debugPushGroup && gB._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (gB._debugPopGroup && gB._debugPopGroup(), !this._disableEngineStages)
            for (const Bc of this._scene._afterRenderTargetDrawStage) Bc.action(this, this._currentFaceIndex, this._currentLayer);
          const cB = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Bc of this._scene._afterRenderTargetPostProcessStage) Bc.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = cB), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), gB) : Mc.c.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(gB) : this.skipInitialClear || gB.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = gB.onResizeObservable.add((() => {})), this._generateMipMaps = !!Pc, this._doNotChangeAspectRatio = qB, Sc || (this._renderTargetOptions = {
          generateMipMaps: Pc,
          type: Oc,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: mB,
          generateStencilBuffer: tB,
          samples: pc,
          creationFlags: hc,
          noColorAttachment: aB,
          useSRGBBuffer: lc,
          colorAttachment: uc,
          label: this.name
        }, this.samplingMode === rB.e.NEAREST_SAMPLINGMODE && (this.wrapU = rB.e.CLAMP_ADDRESSMODE, this.wrapV = rB.e.CLAMP_ADDRESSMODE), zB || (Tc ? (this._renderTarget = nc.RV().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = rB.e.INVCUBIC_MODE, this._textureMatrix = Ic.d.Identity()) : this._renderTarget = nc.RV().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== pc && (this.samples = pc)))
      }
      createDepthStencilTexture() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(cB, Bc, nc, Vc, Ic, rB)
      }
      _processSizeParameter(cB) {
        if (cB.ratio) {
          this._sizeRatio = cB.ratio;
          const Bc = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Bc.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Bc.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = cB
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(cB) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(cB))
      }
      addPostProcess(cB) {
        if (!this._postProcessManager) {
          const cB = this.knc();
          if (!cB) return;
          this._postProcessManager = new uc.d(cB), this._postProcesses = new Array
        }
        this._postProcesses.push(cB), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (cB)
            for (const cB of this._postProcesses) cB.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(cB) {
        if (!this._postProcesses) return;
        const Bc = this._postProcesses.indexOf(cB); - 1 !== Bc && (this._postProcesses.splice(Bc, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(cB) {
        this._objectRenderer.refreshRate = cB
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
        const cB = this._size.layers;
        if (cB) return cB;
        const Bc = this._size.depth;
        return Bc || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(cB) {
        const Bc = Math.max(1, this.getRenderSize() * cB);
        this.resize(Bc)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(cB) {
        const Bc = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const nc = this.knc();
        nc && (this._processSizeParameter(cB), this._renderTarget = Bc ? nc.RV().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : nc.RV().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(cB, Bc)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => nc(39770))).then((cB => this._dumpTools = cB))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const cB = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), cB
      }
      _render() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this.knc();
        if (!nc) return;
        void 0 !== this.useCameraPostProcesses && (cB = this.useCameraPostProcesses);
        const Vc = nc.RV();
        if (Vc._debugPushGroup && Vc._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Ic = 0; Ic < 6; Ic++) this._renderToTarget(Ic, cB, Bc), nc.incrementRenderId(), nc.resetCachedMaterial();
          else this._renderToTarget(0, cB, Bc);
        else
          for (let Ic = 0; Ic < this.getRenderLayers(); Ic++) this._renderToTarget(0, cB, Bc, Ic), nc.incrementRenderId(), nc.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Vc._debugPopGroup && Vc._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(cB, Bc) {
        const nc = cB * Bc,
          Vc = (0, sc.i)(nc + 16384 / (128 + nc));
        return Math.min((0, sc.b)(cB), Vc)
      }
      _bindFrameBuffer() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = this.knc();
        if (!nc) return;
        const Vc = nc.RV();
        this._renderTarget && Vc.bindFramebuffer(this._renderTarget, this.isCube ? cB : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Bc)
      }
      _unbindFrameBuffer(cB, Bc) {
        this._renderTarget && cB.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Bc)
        }))
      }
      _prepareFrame(cB, Bc, nc, Vc) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Bc, nc) : Vc && cB.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Bc, nc)
      }
      _renderToTarget(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ic = this.knc();
        if (!Ic) return;
        const rB = Ic.RV();
        this._currentFaceIndex = cB, this._currentLayer = Vc, this._currentUseCameraPostProcess = Bc, this._currentDumpForDebug = nc, this._prepareFrame(Ic, cB, Vc, Bc), this._objectRenderer.render(cB + Vc, !0), this._unbindFrameBuffer(rB, cB), this._texture && this.isCube && 5 === cB && rB.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(cB, Bc, nc, Vc)
      }
      setRenderingAutoClearDepthStencil(cB, Bc) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(cB, Bc)
      }
      clone() {
        const cB = this.getSize(),
          Bc = new Sc(this.name, cB, this.knc(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Bc.hasAlpha = this.hasAlpha, Bc.level = this.level, Bc.coordinatesMode = this.coordinatesMode, this.renderList && (Bc.renderList = this.renderList.slice(0)), Bc
      }
      serialize() {
        if (!this.name) return null;
        const cB = super.serialize();
        if (cB.renderTargetSize = this.getRenderSize(), cB.renderList = [], this.renderList)
          for (let Bc = 0; Bc < this.renderList.length; Bc++) cB.renderList.push(this.renderList[Bc].id);
        return cB
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.knc().RV().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const cB = this.knc();
        if (!cB) return;
        let Bc = cB.customRenderTargets.indexOf(this);
        Bc >= 0 && cB.customRenderTargets.splice(Bc, 1);
        for (const nc of cB.cameras) Bc = nc.customRenderTargets.indexOf(this), Bc >= 0 && nc.customRenderTargets.splice(Bc, 1);
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
    Sc.REFRESHRATE_RENDER_ONCE = ec.REFRESHRATE_RENDER_ONCE, Sc.REFRESHRATE_RENDER_ONEVERYFRAME = ec.REFRESHRATE_RENDER_ONEVERYFRAME, Sc.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = ec.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(Sc.prototype, "noPrePassRenderer") || Object.defineProperty(Sc.prototype, "noPrePassRenderer", (0, tB.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  39738: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Pc,
      f: () => qB
    });
    var Vc = nc(38194),
      Ic = nc(36675),
      rB = nc(35783),
      uc = nc(37919),
      sc = nc(38356);
    const Mc = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Pc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mc;
        this._fullscreenViewport = new Ic.c(0, 0, 1, 1);
        const nc = Bc.positions ?? Mc.positions,
          rB = Bc.indices ?? Mc.indices;
        this.engine = cB, this._vertexBuffers = {
          [Vc.i.PositionKind]: new Vc.i(cB, nc, Vc.i.PositionKind, !1, !1, 2)
        }, this._indexBuffer = cB.createIndexBuffer(rB), this._indexBufferLength = rB.length, this._onContextRestoredObserver = cB.onContextRestoredObservable.add((() => {
          this._indexBuffer = cB.createIndexBuffer(rB);
          for (const cB in this._vertexBuffers) {
            this._vertexBuffers[cB]._rebuild()
          }
        }))
      }
      setViewport() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(cB)
      }
      bindBuffers(cB) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, cB)
      }
      applyEffectWrapper(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Bc, this.engine.stencilState.stencilTest = nc, this.engine.enableEffect(cB.drawWrapper), this.bindBuffers(cB.effect), cB.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(cB) {
        return void 0 !== cB.renderTarget
      }
      render(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!cB.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const nc = null === Bc ? null : this._isRenderTargetTexture(Bc) ? Bc.renderTarget : Bc;
        nc && this.engine.bindFramebuffer(nc), this.applyEffectWrapper(cB), this.draw(), nc && this.engine.unBindFramebuffer(nc), this.restoreStates()
      }
      dispose() {
        const cB = this._vertexBuffers[Vc.i.PositionKind];
        cB && (cB.dispose(), delete this._vertexBuffers[Vc.i.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class qB {
      static RegisterShaderCodeProcessing(cB, Bc) {
        Bc ? qB._CustomShaderCodeProcessing[cB ?? ""] = Bc : delete qB._CustomShaderCodeProcessing[cB ?? ""]
      }
      static _GetShaderCodeProcessing(cB) {
        return qB._CustomShaderCodeProcessing[cB] ?? qB._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(cB) {
        this.options.name = cB
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
      set effect(cB) {
        this._drawWrapper.effect = cB
      }
      constructor(cB) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new rB.c(void 0, !0), this.onApplyObservable = new rB.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...cB,
          name: cB.name || "effectWrapper",
          engine: cB.engine,
          uniforms: cB.uniforms || cB.uniformNames || [],
          uniformNames: void 0,
          samplers: cB.samplers || cB.samplerNames || [],
          samplerNames: void 0,
          attributeNames: cB.attributeNames || ["position"],
          uniformBuffers: cB.uniformBuffers || [],
          defines: cB.defines || "",
          useShaderStore: cB.useShaderStore || !1,
          vertexUrl: cB.vertexUrl || cB.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: cB.fragmentShader || "pass",
          indexParameters: cB.indexParameters,
          blockCompilation: cB.blockCompilation || !1,
          shaderLanguage: cB.shaderLanguage || 0,
          onCompiled: cB.onCompiled || void 0,
          extraInitializations: cB.extraInitializations || void 0,
          extraInitializationsAsync: cB.extraInitializationsAsync || void 0,
          useAsPostProcess: cB.useAsPostProcess ?? !1,
          allowEmptySourceTexture: cB.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), cB.vertexUrl || cB.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new sc.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Bc = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Bc, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vc = arguments.length > 2 ? arguments[2] : void 0,
          Ic = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Ic && this._importPromises.push(...Ic);
        const rB = this.options.engine.isWebGPU && !qB.ForceGLSL;
        this._gatherImports(rB, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(rB && this._webGPUReady ? nc.e(341).then((() => nc(59314))) : nc.e(330).then((() => nc(59093)))), void 0 !== Vc && Vc(rB, this._importPromises), rB && this._webGPUReady && (this.options.shaderLanguage = 1), cB || this.updateEffect(Bc)
      }
      updateEffect() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          sc = arguments.length > 6 ? arguments[6] : void 0,
          Mc = arguments.length > 7 ? arguments[7] : void 0;
        const Pc = qB._GetShaderCodeProcessing(this.name);
        if (Pc?.defineCustomBindings) {
          const Vc = Bc?.slice() ?? [];
          Vc.push(...this.options.uniforms);
          const Ic = nc?.slice() ?? [];
          Ic.push(...this.options.samplers), cB = Pc.defineCustomBindings(this.name, cB, Vc, Ic), Bc = Vc, nc = Ic
        }
        this.options.defines = cB || "";
        const Oc = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Tc;
        Tc = this.options.extraInitializationsAsync ? async () => {
          await (Oc?.()), await this.options.extraInitializationsAsync()
        }: Oc, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: sc ?? this._shaderPath.vertex,
          fragment: Mc ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Bc || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: nc || this.options.samplers,
          defines: null !== cB ? cB : "",
          fallbacks: null,
          onCompiled: Ic ?? this.options.onCompiled,
          onError: rB ?? null,
          indexParameters: Vc || this.options.indexParameters,
          processCodeAfterIncludes: Pc?.processCodeAfterIncludes ? (cB, Bc) => Pc.processCodeAfterIncludes(this.name, cB, Bc) : null,
          processFinalCode: Pc?.processFinalCode ? (cB, Bc) => Pc.processFinalCode(this.name, cB, Bc) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Tc
        }, this.options.engine) : this._drawWrapper.effect = new uc.c(this._shaderPath, this.options.attributeNames, Bc || this.options.uniforms, nc || this.options.samplerNames, this.options.engine, cB, void 0, Ic || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Tc), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !cB && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), qB._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.RV().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    qB.ForceGLSL = !1, qB._CustomShaderCodeProcessing = {}
  },
  39770: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Dispose: () => yB,
      DumpData: () => Sc,
      DumpDataAsync: () => tB,
      DumpFramebuffer: () => ec,
      DumpTools: () => zB,
      EncodeImageAsync: () => mB,
      RegisterDumpTools: () => hc
    });
    var Vc = nc(38035),
      Ic = nc(39738),
      rB = nc(38146),
      uc = nc(35785),
      sc = nc(35780),
      Mc = nc(37191),
      Pc = nc(38111),
      qB = nc(38043);
    let Oc = null;
    async function Tc() {
      return Oc || (Oc = async function() {
        const cB = sc.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        cB instanceof OffscreenCanvas && Mc.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Bc
        } = await Promise.resolve().then((() => nc(37911)));
        if (!Bc.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Vc = new Bc(cB, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        sc.d.Instances.pop(), sc.d.OnEnginesDisposedObservable.add((cB => {
          Vc && cB !== Vc && !Vc.nPc && 0 === sc.d.Instances.length && yB()
        })), Vc.getCaps().parallelShaderCompile = void 0;
        const rB = new Ic.d(Vc),
          {
            passPixelShader: uc
          } = await nc.e(349).then((() => nc(59366))),
          Pc = new Ic.f({
            engine: Vc,
            name: uc.name,
            fragmentShader: uc.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: cB,
          dumpEngine: {
            engine: Vc,
            renderer: rB,
            wrapper: Pc
          }
        }
      }()), await Oc
    }
    let fc = (() => {
      var cB;
      let Bc, nc = [];
      return cB = class {
        static async EncodeImageAsync(cB, Bc, nc, Vc, Ic, uc) {
          const sc = await Tc(),
            Mc = sc.dumpEngine;
          Mc.engine.setSize(Bc, nc, !0);
          const Pc = Mc.engine.createRawTexture(cB, Bc, nc, 5, !1, !Ic, 1);
          return Mc.renderer.setViewport(), Mc.renderer.applyEffectWrapper(Mc.wrapper), Mc.wrapper.effect._bindTexture("textureSampler", Pc), Mc.renderer.draw(), Pc.dispose(), await new Promise(((cB, Bc) => {
            rB.g.ToBlob(sc.canvas, (nc => {
              nc ? cB(nc) : Bc(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Vc, uc)
          }))
        }
      }, (() => {
        const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [qB.g], (0, Vc.g)(cB, null, Bc, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: cB => "EncodeImageAsync" in cB,
            get: cB => cB.EncodeImageAsync
          },
          metadata: Ic
        }, null, nc), Ic && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ic
        }), (0, Vc.k)(cB, nc)
      })(), cB
    })();
    const mB = fc.EncodeImageAsync;
    async function ec(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        rB = arguments.length > 5 ? arguments[5] : void 0,
        uc = arguments.length > 6 ? arguments[6] : void 0;
      const sc = await nc.readPixels(0, 0, cB, Bc);
      Sc(cB, Bc, new Uint8Array(sc.buffer), Vc, Ic, rB, !0, void 0, uc)
    }
    async function tB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ic = arguments.length > 4 ? arguments[4] : void 0,
        sc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        qB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Oc = arguments.length > 7 ? arguments[7] : void 0;
      if (nc instanceof Float32Array) {
        const cB = new Uint8Array(nc.length);
        let Bc = nc.length;
        for (; Bc--;) {
          const Vc = nc[Bc];
          cB[Bc] = Math.round(255 * (0, uc.Clamp)(Vc))
        }
        nc = cB
      }
      const Tc = await fc.EncodeImageAsync(nc, cB, Bc, Vc, sc, Oc);
      void 0 !== Ic && rB.g.DownloadBlob(Tc, Ic), Tc.type !== Vc && Mc.c.Warn(`DumpData: The requested mimeType '${Vc}' is not supported. The result has mimeType '${Tc.type}' instead.`);
      const mB = await Tc.arrayBuffer();
      return qB ? mB : `data:${Vc};base64,${(0,Pc.e)(mB)}`
    }

    function Sc(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Ic || Vc || (Ic = ""), tB(cB, Bc, nc, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Ic, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((cB => {
        Vc && Vc(cB)
      }))
    }

    function yB() {
      Oc && (Oc?.then((cB => {
        cB.canvas instanceof HTMLCanvasElement && cB.canvas.remove(), cB.dumpEngine && (cB.dumpEngine.engine.dispose(), cB.dumpEngine.renderer.dispose(), cB.dumpEngine.wrapper.dispose())
      })), Oc = null)
    }
    const zB = {
      DumpData: Sc,
      DumpDataAsync: tB,
      DumpFramebuffer: ec,
      Dispose: yB
    };
    let pc = !1;

    function hc() {
      if (pc) return;
      pc = !0;
      rB.g.DumpData = Sc, rB.g.DumpDataAsync = tB, rB.g.DumpFramebuffer = ec
    }
  },
  39745: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      g: () => mB,
      j: () => ec
    });
    var Vc = nc(38493),
      Ic = nc(39754),
      rB = nc(38035),
      uc = nc(39733),
      sc = nc(38068),
      Mc = nc(39761),
      Pc = nc(38043);
    class qB extends uc.b {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 4 ? arguments[4] : void 0;
        const Vc = {
          size: "number" === typeof Bc ? Bc : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: nc,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Bc
        };
        super(cB, Mc.f.FragmentUrl, {
          effectWrapper: "number" !== typeof Bc && Bc.effectWrapper ? void 0 : new Mc.f(cB, nc, Vc),
          ...Vc
        })
      }
      static _Parse(cB, Bc, nc, Vc) {
        return sc.e.Parse((() => new qB(cB.name, cB.options, Bc, cB.renderTargetSamplingMode, cB._engine, cB.reusable)), cB, nc, Vc)
      }
    }(() => {
      var cB;
      let Bc, nc = uc.b,
        Vc = [];
      cB = class extends nc {
        get face() {
          return this._effectWrapper.face
        }
        set face(cB) {
          this._effectWrapper.face = cB
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(cB, Bc) {
          let nc = arguments.length > 4 ? arguments[4] : void 0;
          const Ic = {
            size: "number" === typeof Bc ? Bc : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: nc,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Bc
          };
          super(cB, Mc.f.FragmentUrl, {
            effectWrapper: "number" !== typeof Bc && Bc.effectWrapper ? void 0 : new Mc.b(cB, nc, Ic),
            ...Ic
          }), (0, rB.k)(this, Vc)
        }
        static _Parse(Bc, nc, Vc, Ic) {
          return sc.e.Parse((() => new cB(Bc.name, Bc.options, nc, Bc.renderTargetSamplingMode, Bc._engine, Bc.reusable)), Bc, Vc, Ic)
        }
      }, (() => {
        const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(nc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Pc.M)()], (0, rB.g)(cB, null, Bc, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: cB => "face" in cB,
            get: cB => cB.face
          },
          metadata: Ic
        }, null, Vc), Ic && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ic
        })
      })()
    })();
    var Oc = nc(35785),
      Tc = nc(38118);

    function fc(cB, Bc, nc, Vc, Ic, rB, sc, Mc) {
      const Pc = Bc.RV();
      return Bc.isReady = !1, Ic = Ic ?? Bc.samplingMode, Vc = Vc ?? Bc.type, rB = rB ?? Bc.format, sc = sc ?? Bc.width, Mc = Mc ?? Bc.height, -1 === Vc && (Vc = 0), new Promise((qB => {
        const Oc = new uc.b("postprocess", cB, null, null, 1, null, Ic, Pc, !1, void 0, Vc, void 0, null, !1, rB);
        Oc.externalTextureSamplerBinding = !0;
        const Tc = Pc.createRenderTargetTexture({
          width: sc,
          height: Mc
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Ic,
          type: Vc,
          format: rB
        });
        Oc.onEffectCreatedObservable.addOnce((cB => {
          cB.executeWhenCompiled((() => {
            Oc.onApply = cB => {
              cB._bindTexture("textureSampler", Bc), cB.setFloat2("scale", 1, 1)
            }, nc.postProcessManager.directRender([Oc], Tc, !0), Pc.restoreDefaultFramebuffer(), Pc._releaseTexture(Bc), Oc && Oc.dispose(), Tc._swapAndDie(Bc), Bc.type = Vc, Bc.format = 5, Bc.isReady = !0, qB(Bc)
          }))
        }))
      }))
    }
    async function mB(cB, Bc, rB) {
      let sc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Pc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        qB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(cB) {
        if (cB.isReady()) return;
        if (cB.loadingError) throw new Error(cB.errorObject?.message || `Texture ${cB.name} errored while loading.`);
        const Bc = cB.onLoadObservable;
        if (Bc) return await new Promise((cB => Bc.addOnce((() => cB()))));
        const nc = cB._texture?.onLoadedObservable;
        if (nc) return await new Promise((cB => nc.addOnce((() => cB()))));
        throw new Error(`Cannot determine readiness of texture ${cB.name}.`)
      }(cB);
      const Tc = cB.getInternalTexture(),
        fc = cB.is3D || !!Tc?.is3D,
        {
          width: mB,
          height: ec
        } = cB.getSize(),
        tB = Bc ?? mB,
        Sc = rB ?? ec;
      if (Pc || fc || function(cB) {
          switch (cB) {
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
        }(cB.textureFormat) || tB !== mB || Sc !== ec) {
        if (cB.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Pc?"RTT":"compression"} is not supported.`);
        return await async function(cB, Bc, rB, sc, Mc) {
          let Pc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const qB = cB.knc(),
            Oc = qB.RV(),
            Tc = cB.getInternalTexture(),
            fc = cB.is3D || !!Tc?.is3D;
          let mB;
          if (Oc.isWebGPU ? fc ? await nc.e(345).then((() => nc(59344))) : cB.isCube ? await nc.e(346).then((() => nc(59353))) : await nc.e(347).then((() => nc(59355))) : fc ? await nc.e(342).then((() => nc(59329))) : cB.isCube ? await nc.e(343).then((() => nc(59337))) : await nc.e(344).then((() => nc(59340))), fc) mB = new uc.b("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Vc.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Oc,
            shaderLanguage: Oc.isWebGPU ? 1 : 0
          });
          else if (cB.isCube) {
            const cB = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            mB = new uc.b("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Vc.e.NEAREST_NEAREST_MIPNEAREST,
              engine: Oc,
              defines: cB[sc],
              shaderLanguage: Oc.isWebGPU ? 1 : 0
            })
          } else mB = new uc.b("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Vc.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Oc,
            shaderLanguage: Oc.isWebGPU ? 1 : 0
          });
          await new Promise((cB => {
            mB.onEffectCreatedObservable.addOnce((Bc => {
              Bc.executeWhenCompiled((() => {
                cB(0)
              }))
            }))
          }));
          const ec = new Ic.e("temp", {
            width: Bc,
            height: rB
          }, qB, !1);
          mB.onApply = function(Bc) {
            Bc.setTexture("textureSampler", cB), Bc.setFloat("lod", Mc), Bc.setInt("gamma", cB.gammaSpace ? 1 : 0), fc && Bc.setFloat("slice", Pc)
          };
          try {
            if (ec.renderTarget && Tc) {
              const nc = Tc.samplingMode;
              0 !== Mc ? cB.updateSamplingMode(Vc.e.NEAREST_NEAREST_MIPNEAREST) : cB.updateSamplingMode(Vc.e.NEAREST_NEAREST), qB.postProcessManager.directRender([mB], ec.renderTarget, !0), cB.updateSamplingMode(nc);
              const Ic = await Oc.readPixels(0, 0, Bc, rB),
                uc = new Uint8Array(Ic.buffer, Ic.byteOffset, Ic.byteLength);
              return Oc.unBindFramebuffer(ec.renderTarget), uc
            }
            throw Error("Render to texture failed.")
          } finally {
            ec.dispose(), mB.dispose()
          }
        }(cB, tB, Sc, sc, Mc, qB)
      }
      let yB = await cB.readPixels(sc, Mc);
      if (!yB) throw new Error(`Failed to read pixels from texture ${cB.name}.`);
      if (yB instanceof Float32Array) {
        const cB = new Uint8Array(yB.length);
        let Bc = yB.length;
        for (; Bc--;) {
          const nc = yB[Bc];
          cB[Bc] = Math.round(255 * (0, Oc.Clamp)(nc))
        }
        yB = cB
      }
      const zB = tB * Sc,
        pc = 4 * zB;
      if (yB.length !== pc) {
        const cB = 0 === zB ? 0 : yB.length / zB;
        if (1 === cB || 2 === cB || 3 === cB) {
          const Bc = new Uint8Array(pc);
          for (let nc = 0, Vc = 0, Ic = 0; nc < zB; nc++, Ic += 4) {
            const nc = yB[Vc++];
            if (1 === cB) {
              Bc[Ic] = nc, Bc[Ic + 1] = nc, Bc[Ic + 2] = nc, Bc[Ic + 3] = 255;
              continue
            }
            const rB = yB[Vc++];
            2 !== cB ? (Bc[Ic] = nc, Bc[Ic + 1] = rB, Bc[Ic + 2] = yB[Vc++], Bc[Ic + 3] = 255) : (Bc[Ic] = nc, Bc[Ic + 1] = rB, Bc[Ic + 2] = 0, Bc[Ic + 3] = 255)
          }
          return Bc
        }
      }
      return yB
    }
    const ec = {
      CreateResizedCopy: function(cB, Bc, nc) {
        let rB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const uc = cB.knc(),
          sc = uc.RV(),
          Mc = new Ic.e("resized" + cB.name, {
            width: Bc,
            height: nc
          }, uc, !cB.noMipmap, !0, cB._texture.type, !1, cB.samplingMode, !1);
        Mc.wrapU = cB.wrapU, Mc.wrapV = cB.wrapV, Mc.uOffset = cB.uOffset, Mc.vOffset = cB.vOffset, Mc.uScale = cB.uScale, Mc.vScale = cB.vScale, Mc.uAng = cB.uAng, Mc.vAng = cB.vAng, Mc.wAng = cB.wAng, Mc.coordinatesIndex = cB.coordinatesIndex, Mc.level = cB.level, Mc.anisotropicFilteringLevel = cB.anisotropicFilteringLevel, Mc._texture.isReady = !1, cB.wrapU = Vc.e.CLAMP_ADDRESSMODE, cB.wrapV = Vc.e.CLAMP_ADDRESSMODE;
        const Pc = new qB("pass", 1, null, rB ? Vc.e.BILINEAR_SAMPLINGMODE : Vc.e.NEAREST_SAMPLINGMODE, sc, !1, 0);
        return Pc.externalTextureSamplerBinding = !0, Pc.onEffectCreatedObservable.addOnce((Bc => {
          Bc.executeWhenCompiled((() => {
            Pc.onApply = function(Bc) {
              Bc.setTexture("textureSampler", cB)
            };
            const Bc = Mc.renderTarget;
            Bc && (uc.postProcessManager.directRender([Pc], Bc), sc.unBindFramebuffer(Bc), Mc.disposeFramebufferObjects(), Pc.dispose(), Mc.getInternalTexture().isReady = !0)
          }))
        })), Mc
      },
      ApplyPostProcess: fc,
      ToHalfFloat: Tc.g,
      FromHalfFloat: Tc.c,
      GetTextureDataAsync: mB
    }
  },
  39733: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => mB
    });
    var Vc = nc(38035),
      Ic = nc(38158),
      rB = nc(35783),
      uc = nc(35756),
      sc = nc(37919),
      Mc = nc(38043),
      Pc = nc(38068),
      qB = nc(35799),
      Oc = nc(37965),
      Tc = nc(37992),
      fc = nc(39738);
    let mB = (() => {
        var cB;
        let Bc, sc, Oc, mB, ec, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB = [],
          Zc = [],
          Qc = [],
          Cc = [],
          vB = [],
          Dc = [],
          Nc = [],
          Ec = [],
          oc = [],
          Wc = [],
          wc = [],
          kB = [],
          Xc = [],
          Hc = [],
          Fc = [],
          Jc = [],
          jB = [],
          Rc = [],
          iB = [],
          Kc = [],
          xB = [],
          dc = [],
          Ac = [],
          Gc = [],
          cn = [],
          BB = [],
          nB = [],
          VB = [],
          IB = [];
        return cB = class {
          static get ForceGLSL() {
            return fc.f.ForceGLSL
          }
          static set ForceGLSL(cB) {
            fc.f.ForceGLSL = cB
          }
          static RegisterShaderCodeProcessing(cB, Bc) {
            fc.f.RegisterShaderCodeProcessing(cB, Bc)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(cB) {
            this._effectWrapper.name = cB
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(cB) {
            this._effectWrapper.alphaMode = cB
          }
          get samples() {
            return this._samples
          }
          set samples(cB) {
            this._samples = Math.min(cB, this._engine.getCaps().maxMSAASamples), this._textures.forEach((cB => {
              cB.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(cB) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), cB && (this._onActivateObserver = this.onActivateObservable.add(cB))
          }
          set onSizeChanged(cB) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(cB)
          }
          set onApply(cB) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(cB)
          }
          set onBeforeRender(cB) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(cB)
          }
          set onAfterRender(cB) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(cB)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(cB) {
            this._forcedOutputTexture = cB
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.YIc
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.puc(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Bc, nc, sc, Mc, Pc, qB) {
            let Oc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Tc = arguments.length > 7 ? arguments[7] : void 0,
              mB = arguments.length > 8 ? arguments[8] : void 0,
              ec = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              Sc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              yB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              zB = arguments.length > 12 ? arguments[12] : void 0,
              pc = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              hc = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              aB = arguments.length > 15 ? arguments[15] : void 0,
              lc = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Vc.k)(this, bB), null), this.uniqueId = (0, Vc.k)(this, Zc, void 0), this.width = ((0, Vc.k)(this, Qc), (0, Vc.k)(this, Cc, -1)), this.height = ((0, Vc.k)(this, vB), (0, Vc.k)(this, Dc, -1)), this.nodeMaterialSource = ((0, Vc.k)(this, Nc), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Vc.k)(this, Ec, void 0), this.clearColor = ((0, Vc.k)(this, oc), (0, Vc.k)(this, Wc, void 0)), this.autoClear = ((0, Vc.k)(this, wc), (0, Vc.k)(this, kB, !0)), this.forceAutoClearInAlphaMode = ((0, Vc.k)(this, Xc), (0, Vc.k)(this, Hc, !1)), this.alphaConstants = ((0, Vc.k)(this, Fc), (0, Vc.k)(this, Jc, void 0)), this.animations = ((0, Vc.k)(this, jB), []), this.enablePixelPerfectMode = (0, Vc.k)(this, Rc, !1), this.forceFullscreenViewport = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, !0)), this.inspectableCustomProperties = (0, Vc.k)(this, xB), this.scaleMode = (0, Vc.k)(this, dc, 1), this.alwaysForcePOT = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, !1)), this._samples = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, 1)), this.adaptScaleToCurrentViewport = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, !1)), this.doNotSerialize = ((0, Vc.k)(this, IB), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Ic.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new uc.m(1, 1), this._texelSize = uc.m.Zero(), this.onActivateObservable = new rB.c, this.onSizeChangedObservable = new rB.c, this.onApplyObservable = new rB.c, this.onBeforeRenderObservable = new rB.c, this.onAfterRenderObservable = new rB.c, this.XBc = new rB.c, tB();
            let Yc, Lc = 1,
              gB = null;
            if (sc && !Array.isArray(sc)) {
              const cB = sc;
              sc = cB.uniforms ?? null, Mc = cB.samplers ?? null, Lc = cB.size ?? 1, qB = cB.camera ?? null, Oc = cB.samplingMode ?? 1, Tc = cB.engine, mB = cB.reusable, ec = Array.isArray(cB.defines) ? cB.defines.join("\n") : cB.defines ?? null, Sc = cB.textureType ?? 0, yB = cB.vertexUrl ?? "postprocess", zB = cB.indexParameters, pc = cB.blockCompilation ?? !1, hc = cB.textureFormat ?? 5, aB = cB.shaderLanguage ?? 0, gB = cB.uniformBuffers ?? null, lc = cB.extraInitializations, Yc = cB.effectWrapper
            } else Pc && (Lc = "number" === typeof Pc ? Pc : {
              width: Pc.width,
              height: Pc.height
            });
            if (this._useExistingThinPostProcess = !!Yc, this._effectWrapper = Yc ?? new fc.f({
                name: Bc,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: nc,
                engine: Tc || qB?.knc().RV(),
                uniforms: sc,
                samplers: Mc,
                uniformBuffers: gB,
                defines: ec,
                vertexUrl: yB,
                indexParameters: zB,
                blockCompilation: !0,
                shaderLanguage: aB,
                extraInitializations: void 0
              }), this.name = Bc, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != qB ? (this.YIc = qB, this._scene = qB.knc(), qB.attachPostProcess(this), this._engine = this._scene.RV(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Tc && (this._engine = Tc, this._engine.postProcesses.push(this)), this._options = Lc, this.renderTargetSamplingMode = Oc || 1, this._reusable = mB || !1, this._textureType = Sc, this._textureFormat = hc, this._shaderLanguage = aB || 0, this._samplers = Mc || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = nc, this._vertexUrl = yB, this._parameters = sc || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = gB || [], this._indexParameters = zB, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Bc = [];
              this._gatherImports(this._engine.isWebGPU && !cB.ForceGLSL, Bc), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(pc, ec, lc, Bc)
            }
          }
          _gatherImports() {
            let cB = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? cB.push(Promise.all([nc.e(341).then((() => nc(59314)))])) : cB.push(Promise.all([nc.e(330).then((() => nc(59093)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          RV() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(cB) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = cB, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Ic.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Vc = arguments.length > 3 ? arguments[3] : void 0,
              Ic = arguments.length > 4 ? arguments[4] : void 0,
              rB = arguments.length > 5 ? arguments[5] : void 0,
              uc = arguments.length > 6 ? arguments[6] : void 0,
              sc = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(cB, Bc, nc, Vc, Ic, rB, uc, sc), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Ic = 0; Ic < this._textureCache.length; Ic++)
              if (this._textureCache[Ic].texture.width === cB.width && this._textureCache[Ic].texture.height === cB.height && this._textureCache[Ic].postProcessChannel === nc && this._textureCache[Ic].texture._generateDepthBuffer === Bc.generateDepthBuffer && this._textureCache[Ic].texture.samples === Bc.samples) return this._textureCache[Ic].texture;
            const Vc = this._engine.createRenderTargetTexture(cB, Bc);
            return this._textureCache.push({
              texture: Vc,
              postProcessChannel: nc,
              lastUsedRenderId: -1
            }), Vc
          }
          _flushTextureCache() {
            const cB = this._renderId;
            for (let Bc = this._textureCache.length - 1; Bc >= 0; Bc--)
              if (cB - this._textureCache[Bc].lastUsedRenderId > 100) {
                let cB = !1;
                for (let nc = 0; nc < this._textures.length; nc++)
                  if (this._textures.data[nc] === this._textureCache[Bc].texture) {
                    cB = !0;
                    break
                  } cB || (this._textureCache[Bc].texture.dispose(), this._textureCache.splice(Bc, 1))
              }
          }
          resize(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = cB, this.height = Bc;
            let rB = null;
            if (nc)
              for (let Mc = 0; Mc < nc._postProcesses.length; Mc++)
                if (null !== nc._postProcesses[Mc]) {
                  rB = nc._postProcesses[Mc];
                  break
                } const uc = {
                width: this.width,
                height: this.height
              },
              sc = {
                generateMipMaps: Vc,
                generateDepthBuffer: Ic || rB === this,
                generateStencilBuffer: (Ic || rB === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(uc, sc, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(uc, sc, 1)), this._texelSize.puc(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let cB;
            if (this._shareOutputWithPostProcess) cB = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) cB = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Bc;
              cB = this.inputTexture;
              for (let nc = 0; nc < this._textureCache.length; nc++)
                if (this._textureCache[nc].texture === cB) {
                  Bc = this._textureCache[nc];
                  break
                } Bc && (Bc.lastUsedRenderId = this._renderId)
            }
            return cB
          }
          activate(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              nc = arguments.length > 2 ? arguments[2] : void 0;
            const Vc = null === cB || void 0 !== cB.cameraRigMode ? cB || this.YIc : null,
              Ic = Vc?.knc() ?? cB,
              rB = Ic.RV(),
              uc = rB.getCaps().maxTextureSize,
              sc = (Bc ? Bc.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Mc = (Bc ? Bc.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Pc = this._options.width || sc,
              qB = this._options.height || Mc;
            const Oc = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let fc = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const cB = rB.currentViewport;
                cB && (Pc *= cB.width, qB *= cB.height)
              }(Oc || this.alwaysForcePOT) && (this._options.width || (Pc = rB.needPOTTextures ? (0, Tc.f)(Pc, uc, this.scaleMode) : Pc), this._options.height || (qB = rB.needPOTTextures ? (0, Tc.f)(qB, uc, this.scaleMode) : qB)), this.width === Pc && this.height === qB && (fc = this._getTarget()) || this.resize(Pc, qB, Vc, Oc, nc), this._textures.forEach((cB => {
                cB.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(cB, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return fc || (fc = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.puc(sc / Pc, Mc / qB), this._engine.bindFramebuffer(fc, 0, sc, Mc, this.forceFullscreenViewport)) : (this._scaleRatio.puc(1, 1), this._engine.bindFramebuffer(fc, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Vc), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Ic.clearColor, Ic._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), fc
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
            let cB;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.RV().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), cB = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", cB?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let cB = this._textureCache.length - 1; cB >= 0; cB--) this._textureCache[cB].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(cB) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = cB.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(cB) {
            let Bc;
            if (cB = cB || this.YIc, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Bc = this._parentContainer.postProcesses.indexOf(this), Bc > -1 && this._parentContainer.postProcesses.splice(Bc, 1), this._parentContainer = null), Bc = this._engine.postProcesses.indexOf(this), -1 !== Bc && this._engine.postProcesses.splice(Bc, 1), this.XBc.notifyObservers(), cB) {
              if (cB.detachPostProcess(this), Bc = cB._postProcesses.indexOf(this), 0 === Bc && cB._postProcesses.length > 0) {
                const cB = this.YIc._getFirstPostProcess();
                cB && cB.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const cB = Pc.e.Serialize(this),
              Bc = this.getCamera() || this._scene && this._scene.activeCamera;
            return cB.customType = "BABYLON." + this.getClassName(), cB.cameraId = Bc ? Bc.id : null, cB.reusable = this._reusable, cB.textureType = this._textureType, cB.fragmentUrl = this._fragmentUrl, cB.parameters = this._parameters, cB.samplers = this._samplers, cB.uniformBuffers = this._uniformBuffers, cB.options = this._options, cB.defines = this._postProcessDefines, cB.textureFormat = this._textureFormat, cB.vertexUrl = this._vertexUrl, cB.indexParameters = this._indexParameters, cB
          }
          clone() {
            const Bc = this.serialize();
            Bc._engine = this._engine, Bc.cameraId = null;
            const nc = cB.Parse(Bc, this._scene, "");
            return nc ? (nc.onActivateObservable = this.onActivateObservable.clone(), nc.onSizeChangedObservable = this.onSizeChangedObservable.clone(), nc.onApplyObservable = this.onApplyObservable.clone(), nc.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), nc.onAfterRenderObservable = this.onAfterRenderObservable.clone(), nc._prePassEffectConfiguration = this._prePassEffectConfiguration, nc) : null
          }
          static Parse(cB, Bc, nc) {
            const Vc = (0, qB.b)(cB.customType);
            if (!Vc || !Vc._Parse) return null;
            const Ic = Bc ? Bc.getCameraById(cB.cameraId) : null;
            return Vc._Parse(cB, Ic, Bc, nc)
          }
          static _Parse(Bc, nc, Vc, Ic) {
            return Pc.e.Parse((() => new cB(Bc.name, Bc.fragmentUrl, Bc.parameters, Bc.samplers, Bc.options, nc, Bc.renderTargetSamplingMode, Bc._engine, Bc.reusable, Bc.defines, Bc.textureType, Bc.vertexUrl, Bc.indexParameters, !1, Bc.textureFormat)), Bc, Vc, Ic)
          }
        }, (() => {
          const nc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bc = [(0, Mc.M)()], sc = [(0, Mc.M)()], Oc = [(0, Mc.M)()], mB = [(0, Mc.M)()], ec = [(0, Mc.M)()], Sc = [(0, Mc.q)()], yB = [(0, Mc.M)()], zB = [(0, Mc.M)()], pc = [(0, Mc.M)()], hc = [(0, Mc.M)()], aB = [(0, Mc.M)()], lc = [(0, Mc.M)()], Yc = [(0, Mc.M)()], Lc = [(0, Mc.M)()], gB = [(0, Mc.M)("samples")], Uc = [(0, Mc.M)()], (0, Vc.g)(cB, null, sc, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: cB => "name" in cB,
              get: cB => cB.name
            },
            metadata: nc
          }, null, bB), (0, Vc.g)(cB, null, pc, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "alphaMode" in cB,
              get: cB => cB.alphaMode
            },
            metadata: nc
          }, null, bB), (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: cB => "uniqueId" in cB,
              get: cB => cB.uniqueId,
              set: (cB, Bc) => {
                cB.uniqueId = Bc
              }
            },
            metadata: nc
          }, Zc, Qc), (0, Vc.g)(null, null, Oc, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: cB => "width" in cB,
              get: cB => cB.width,
              set: (cB, Bc) => {
                cB.width = Bc
              }
            },
            metadata: nc
          }, Cc, vB), (0, Vc.g)(null, null, mB, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: cB => "height" in cB,
              get: cB => cB.height,
              set: (cB, Bc) => {
                cB.height = Bc
              }
            },
            metadata: nc
          }, Dc, Nc), (0, Vc.g)(null, null, ec, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "renderTargetSamplingMode" in cB,
              get: cB => cB.renderTargetSamplingMode,
              set: (cB, Bc) => {
                cB.renderTargetSamplingMode = Bc
              }
            },
            metadata: nc
          }, Ec, oc), (0, Vc.g)(null, null, Sc, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "clearColor" in cB,
              get: cB => cB.clearColor,
              set: (cB, Bc) => {
                cB.clearColor = Bc
              }
            },
            metadata: nc
          }, Wc, wc), (0, Vc.g)(null, null, yB, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: cB => "autoClear" in cB,
              get: cB => cB.autoClear,
              set: (cB, Bc) => {
                cB.autoClear = Bc
              }
            },
            metadata: nc
          }, kB, Xc), (0, Vc.g)(null, null, zB, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "forceAutoClearInAlphaMode" in cB,
              get: cB => cB.forceAutoClearInAlphaMode,
              set: (cB, Bc) => {
                cB.forceAutoClearInAlphaMode = Bc
              }
            },
            metadata: nc
          }, Hc, Fc), (0, Vc.g)(null, null, hc, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: cB => "alphaConstants" in cB,
              get: cB => cB.alphaConstants,
              set: (cB, Bc) => {
                cB.alphaConstants = Bc
              }
            },
            metadata: nc
          }, Jc, jB), (0, Vc.g)(null, null, aB, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "enablePixelPerfectMode" in cB,
              get: cB => cB.enablePixelPerfectMode,
              set: (cB, Bc) => {
                cB.enablePixelPerfectMode = Bc
              }
            },
            metadata: nc
          }, Rc, iB), (0, Vc.g)(null, null, lc, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: cB => "forceFullscreenViewport" in cB,
              get: cB => cB.forceFullscreenViewport,
              set: (cB, Bc) => {
                cB.forceFullscreenViewport = Bc
              }
            },
            metadata: nc
          }, Kc, xB), (0, Vc.g)(null, null, Yc, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "scaleMode" in cB,
              get: cB => cB.scaleMode,
              set: (cB, Bc) => {
                cB.scaleMode = Bc
              }
            },
            metadata: nc
          }, dc, Ac), (0, Vc.g)(null, null, Lc, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: cB => "alwaysForcePOT" in cB,
              get: cB => cB.alwaysForcePOT,
              set: (cB, Bc) => {
                cB.alwaysForcePOT = Bc
              }
            },
            metadata: nc
          }, Gc, cn), (0, Vc.g)(null, null, gB, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: cB => "_samples" in cB,
              get: cB => cB._samples,
              set: (cB, Bc) => {
                cB._samples = Bc
              }
            },
            metadata: nc
          }, BB, nB), (0, Vc.g)(null, null, Uc, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: cB => "adaptScaleToCurrentViewport" in cB,
              get: cB => cB.adaptScaleToCurrentViewport,
              set: (cB, Bc) => {
                cB.adaptScaleToCurrentViewport = Bc
              }
            },
            metadata: nc
          }, VB, IB), nc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nc
          })
        })(), cB
      })(),
      ec = !1;

    function tB() {
      ec || (ec = !0, Oc.e.prototype.setTextureFromPostProcess = function(cB, Bc, nc) {
        let Vc = null;
        Bc && (Bc._forcedOutputTexture ? Vc = Bc._forcedOutputTexture : Bc._textures.data[Bc._currentRenderTextureInd] && (Vc = Bc._textures.data[Bc._currentRenderTextureInd])), this._bindTexture(cB, Vc?.texture ?? null, nc)
      }, Oc.e.prototype.setTextureFromPostProcessOutput = function(cB, Bc, nc) {
        this._bindTexture(cB, Bc?._outputTexture?.texture ?? null, nc)
      }, sc.c.prototype.setTextureFromPostProcess = function(cB, Bc) {
        this._engine.setTextureFromPostProcess(this._samplers[cB], Bc, cB)
      }, sc.c.prototype.setTextureFromPostProcessOutput = function(cB, Bc) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[cB], Bc, cB)
      }, (0, qB.d)("BABYLON.PostProcess", mB))
    }
  },
  39761: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      f: () => rB
    });
    var Vc = nc(39738),
      Ic = nc(35780);
    class rB extends Vc.f {
      _gatherImports(cB, Bc) {
        cB ? (this._webGPUReady = !0, Bc.push(Promise.all([nc.e(348).then((() => nc(59357)))]))) : Bc.push(Promise.all([nc.e(349).then((() => nc(59366)))])), super._gatherImports(cB, Bc)
      }
      constructor(cB) {
        let Bc = arguments.length > 2 ? arguments[2] : void 0;
        const nc = {
          name: cB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ic.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: rB.FragmentUrl,
          ...Bc
        };
        nc.engine || (nc.engine = Ic.d.LastCreatedEngine), super(nc)
      }
    }
    rB.FragmentUrl = "pass";
    class uc extends Vc.f {
      _gatherImports(cB, Bc) {
        cB ? (this._webGPUReady = !0, Bc.push(Promise.all([nc.e(350).then((() => nc(59369)))]))) : Bc.push(Promise.all([nc.e(351).then((() => nc(59373)))])), super._gatherImports(cB, Bc)
      }
      constructor(cB) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: cB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ic.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: uc.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(cB) {
        if (!(cB < 0 || cB > 5)) switch (this._face = cB, this._face) {
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
    uc.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);