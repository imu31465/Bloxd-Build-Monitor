export const id = 289;
export const ids = [289];
export const modules = {
  40299: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ly
    });
    var Uy = Wy(35893),
      hy = Wy(35861),
      fy = Wy(38989),
      Zy = Wy(38627),
      cb = Wy(38405),
      Py = Wy(37350),
      oy = Wy(38607),
      By = Wy(38637),
      Ky = Wy(35869),
      ey = Wy(38354),
      qb = Wy(38587),
      sy = Wy(38675);
    class Sy {
      get renderList() {
        return this._renderList
      }
      set renderList(yb) {
        this._renderList !== yb && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), yb && (this._unObserveRenderList = (0, Ky.h)(yb, this._renderListHasChanged)), this._renderList = yb)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(yb) {
        yb !== this._disableImageProcessing && (this._disableImageProcessing = yb, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(yb) {
        this._disableDepthPrePass = yb, this._renderingManager.disableDepthPrePass = yb
      }
      get name() {
        return this._name
      }
      set name(yb) {
        if (this._name !== yb) {
          if (this._name = yb, this._sceneUBOs)
            for (let yb = 0; yb < this._sceneUBOs.length; ++yb) this._sceneUBOs[yb].name = `Scene ubo #${yb} for ${this.name}`;
          if (this._scene)
            for (let yb = 0; yb < this._renderPassIds.length; ++yb) {
              const bb = this._renderPassIds[yb];
              this._engine._renderPassNames[bb] = `${this._name}#${yb}`
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
      setMaterialForRendering(yb, bb) {
        let Wy;
        Wy = Array.isArray(yb) ? yb : [yb];
        for (let Uy = 0; Uy < Wy.length; ++Uy)
          for (let yb = 0; yb < this.options.numPasses; ++yb) {
            let hy = Wy[Uy];
            Wy[Uy].zWy && (hy = Wy[Uy].zKy), hy.setMaterialForRenderPass(this._renderPassIds[yb], void 0 !== bb ? Array.isArray(bb) ? bb[yb] : bb : void 0)
          }
      }
      _freezeActiveMeshes(yb) {
        this._freezeActiveMeshesCancel = (0, ey.c)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, yb)
            for (let yb = 0; yb < this._activeMeshes.length; yb++) this._activeMeshes.data[yb]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((yb, bb) => {
          this._freezeActiveMeshesCancel = null, bb ? (Py.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), yb && Py.b.Error(yb)) : (Py.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), yb && (Py.b.Error(yb), yb.stack && Py.b.Error(yb.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let yb = 0; yb < this._activeMeshes.length; yb++) this._activeMeshes.data[yb]._unFreeze();
        this._isFrozen = !1
      }
      constructor(yb, bb, Wy) {
        this._unObserveRenderList = null, this._renderListHasChanged = (yb, bb) => {
          const Wy = this._renderList ? this._renderList.length : 0;
          if (0 === bb && Wy > 0 || 0 === Wy)
            for (const Uy of this._scene.meshes) Uy._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Uy.c, this.onAfterRenderObservable = new Uy.c, this.onBeforeRenderingManagerRenderObservable = new Uy.c, this.onAfterRenderingManagerRenderObservable = new Uy.c, this.onInitRenderingObservable = new Uy.c, this.onFinishRenderingObservable = new Uy.c, this.onFastPathRenderObservable = new Uy.c, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new qb.e(256), this._activeBoundingBoxes = new qb.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = yb, this._scene = bb, this._engine = this._scene.xh(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Wy
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new By.e(bb), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const yb of this._scene.lights) yb.getTypeID() === sy.d.LIGHTTYPEID_CLUSTERED_CONTAINER && yb.isSupported && yb._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let yb = 0; yb < this.options.numPasses; ++yb) this._engine.releaseRenderPassId(this._renderPassIds[yb]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let yb = 0; yb < this.options.numPasses; ++yb) this._renderPassIds[yb] = this._engine.createRenderPassId(`${this.name}#${yb}`)
      }
      _createSceneUBO(yb, bb) {
        const Wy = this._scene.xh(),
          Uy = new oy.b(Wy, void 0, bb, yb, void 0, !1);
        return Uy.addUniform("viewProjection", 16), bb && Uy.addUniform("viewProjectionR", 16), Uy.addUniform("view", 16), Uy.addUniform("projection", 16), Uy.addUniform("vEyePosition", 4), Uy.addUniform("inverseProjection", 16), Uy
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const yb = this._engine._currentRenderTarget,
          bb = !(!yb || !yb.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const yb = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${yb} for ${this.name}`, bb)), this._sceneUBOIsMultiview.push(bb)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== bb && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, bb), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = bb);
        const Wy = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Wy.unbindEffect(), Wy
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(yb) {
        this._refreshRate = yb, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(yb, bb) {
        this.prepareRenderList(), this.initRender(yb, bb);
        const Wy = this._checkReadiness();
        return this.finishRender(), Wy
      }
      prepareRenderList() {
        const yb = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let bb = 0; bb < this._waitingRenderList.length; bb++) {
              const Wy = this._waitingRenderList[bb],
                Uy = yb.getMeshById(Wy);
              Uy && this.renderList.push(Uy)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const yb = this._scene.meshes;
          for (let bb = 0; bb < yb.length; bb++) {
            const Wy = yb[bb];
            this.renderListPredicate(Wy) && this.renderList.push(Wy)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(yb, bb) {
        const Wy = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Wy && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Wy.getViewMatrix(), Wy.getProjectionMatrix(!0)), this._scene._activeCamera = Wy, this._engine.setViewport(Wy.rigParent ? Wy.rigParent.viewport : Wy.viewport, yb, bb)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const yb = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (yb.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), yb._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== yb.activeCamera && yb.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), yb.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[yb], this.onBeforeRenderObservable.notifyObservers(yb);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(yb);
        else {
          const bb = this._prepareRenderingManager(yb),
            Wy = this._scene.getOutlineRenderer?.(),
            Uy = Wy?.enabled;
          Wy && (Wy.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(yb), this._renderingManager.render(this.customRenderFunction, bb, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(yb), Wy && (Wy.enabled = Uy)
        }
        bb || this.onAfterRenderObservable.notifyObservers(yb), this._engine.currentRenderPassId = Wy
      }
      _checkReadiness() {
        const yb = this._scene,
          bb = this._engine.currentRenderPassId;
        let Wy = !0;
        yb.getViewMatrix() || yb.updateTransformMatrix();
        const Uy = this.options.numPasses;
        for (let hy = 0; hy < Uy && Wy; hy++) {
          const bb = this.renderList ? this.renderList : yb.frameGraph ? yb.meshes : yb.getActiveMeshes().data,
            fy = this.renderList || yb.frameGraph ? bb.length : yb.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[hy], this.onBeforeRenderObservable.notifyObservers(hy);
          let Zy = null,
            cb = fy;
          this.getCustomRenderList && (Zy = this.getCustomRenderList(hy, bb, fy), Zy && (cb = Zy.length)), Zy || (Zy = bb), this.options.doNotChangeAspectRatio || yb.updateTransformMatrix(!0);
          for (let yb = 0; yb < cb && Wy; ++yb) {
            const bb = Zy[yb];
            if (!bb.isEnabled() || bb.isBlocked || !bb.isVisible || !bb.vJ) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(bb, this.refreshRate, !0)) {
                Wy = !1;
                continue
              }
            } else if (!bb.isReady(!0)) {
              Wy = !1;
              continue
            }
            let Uy = bb._edgesRenderer,
              hy = bb.hasThinInstances;
            if (bb.zWy) {
              const yb = bb.zKy;
              yb.edgesShareWithInstances && yb._edgesRenderer?.isEnabled && (Uy = yb._edgesRenderer, hy = !0)
            } else bb.NBy && bb.edgesShareWithInstances && (hy = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Uy?.isEnabled && (Uy.isReady(hy) || (Wy = !1))
          }
          if (this.renderParticles && yb.particlesEnabled) {
            const bb = this.particleSystemList || yb.YV;
            for (const yb of bb) yb.isReady() || (Wy = !1)
          }
          if (this.renderSprites && yb.spritesEnabled) {
            const bb = this.spriteManagerList || yb.spriteManagers;
            if (bb)
              for (const Uy of bb) yb.activeCamera && 0 === (Uy.layerMask & yb.activeCamera.layerMask) || Uy.isReady && !Uy.isReady() && (Wy = !1)
          }
          this.onAfterRenderObservable.notifyObservers(hy), Uy > 1 && (yb.incrementRenderId(), yb.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = bb, Wy
      }
      _prepareRenderingManager() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this._scene;
        let Uy, hy, fy = null;
        const Zy = this.renderList ? this.renderList : Wy.frameGraph ? Wy.meshes : Wy.getActiveMeshes().data,
          cb = this.renderList || Wy.frameGraph ? Zy.length : Wy.getActiveMeshes().length;
        if (this.getCustomRenderList && (fy = this.getCustomRenderList(yb, Zy, cb)), fy) Uy = fy.length, hy = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !bb && !this._engine.isWebGPU) return Zy;
          this._defaultRenderListPrepared = !0, fy = Zy, Uy = cb, hy = !this.renderList || this.forceLayerMaskCheck
        }
        const Py = Wy.activeCamera,
          oy = this.cameraForLOD ?? Py,
          By = Wy.getBoundingBoxRenderer?.();
        if (Wy._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && By) {
            By.reset();
            for (let yb = 0; yb < this._activeBoundingBoxes.length; yb++) {
              const bb = this._activeBoundingBoxes.data[yb];
              By.renderList.push(bb)
            }
          }
          return fy
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), By && By.reset(), this.renderMeshes) {
          const yb = Wy.getRenderId(),
            bb = Wy.getFrameId();
          for (let Zy = 0; Zy < Uy; Zy++) {
            const Uy = fy[Zy];
            if (Uy && !Uy.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Uy, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Uy.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let fy, Zy;
              if (oy) {
                const yb = Uy._internalAbstractMeshDataInfo._currentLOD.get(oy);
                yb && yb[1] === bb ? fy = yb[0] : (fy = Wy.customLODSelector ? Wy.customLODSelector(Uy, oy) : Uy.getLOD(oy), yb ? (yb[0] = fy, yb[1] = bb) : Uy._internalAbstractMeshDataInfo._currentLOD.set(oy, [fy, bb]))
              } else fy = Uy;
              if (!fy) continue;
              if (fy !== Uy && 0 !== fy.billboardMode && fy.computeWorldMatrix(), fy._preActivateForIntermediateRendering(yb), Zy = !(!hy || !Py) && 0 === (Uy.layerMask & Py.layerMask), Uy.isEnabled() && Uy.isVisible && Uy.vJ && !Zy) {
                if (this._activeMeshes.push(Uy), fy._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, fy !== Uy && fy._activate(yb, !0), this.enableBoundingBoxRendering && By && By._preActiveMesh(Uy), Uy._activate(yb, !0) && Uy.vJ.length) {
                  Uy.zWy ? Uy._internalAbstractMeshDataInfo._actAsRegularMesh && (fy = Uy) : fy._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, fy._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Wy._prepareSkeleton(fy);
                  for (let yb = 0; yb < fy.vJ.length; yb++) {
                    const bb = fy.vJ[yb];
                    this.enableBoundingBoxRendering && By && By._evaluateSubMesh(Uy, bb), this._renderingManager.dispatch(bb, fy)
                  }
                }
                Uy._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && By && bb)
          for (let Ky = 0; Ky < By.renderList.length; Ky++) {
            const yb = By.renderList.data[Ky];
            this._activeBoundingBoxes.push(yb)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const yb = this.particleSystemList || Wy.YV;
          for (let bb = 0; bb < yb.length; bb++) {
            const Wy = yb[bb],
              Uy = Wy.emitter;
            Wy.isStarted() && Uy && (!Uy.position || Uy.isEnabled()) && this._renderingManager.dispatchParticles(Wy)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return fy
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(yb, bb, Wy, Uy)
      }
      setRenderingAutoClearDepthStencil(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(yb, bb, Wy, Uy), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const yb = new Sy(this.name, this._scene, this.options);
        return this.renderList && (yb.renderList = this.renderList.slice(0)), yb
      }
      dispose() {
        const yb = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          bb = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Wy = 0; Wy < bb; Wy++) {
          const bb = yb[Wy];
          bb && void 0 !== bb.getMaterialForRenderPass(this.renderPassId) && bb.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Wy of this._sceneUBOs) Wy.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Sy.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Sy.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Sy.REFRESHRATE_RENDER_ONCE = 0, Sy.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Sy.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var Ey = Wy(38347);
    class ly extends fy.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(yb) {
        this._objectRenderer.renderListPredicate = yb
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(yb) {
        this._objectRenderer.renderList = yb
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(yb) {
        this._objectRenderer.particleSystemList = yb
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(yb) {
        this._objectRenderer.getCustomRenderList = yb
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(yb) {
        this._objectRenderer.renderParticles = yb
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(yb) {
        this._objectRenderer.renderSprites = yb
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(yb) {
        this._objectRenderer.enableBoundingBoxRendering = yb
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(yb) {
        this._objectRenderer.enableOutlineRendering = yb
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(yb) {
        this._objectRenderer.forceLayerMaskCheck = yb
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(yb) {
        this._objectRenderer.activeCamera = yb
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(yb) {
        this._objectRenderer.cameraForLOD = yb
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(yb) {
        this._objectRenderer.disableImageProcessing = yb
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(yb) {
        this._objectRenderer.customIsReadyFunction = yb
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(yb) {
        this._objectRenderer.customRenderFunction = yb
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(yb) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(yb)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(yb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(yb)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(yb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(yb)
      }
      set onClear(yb) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(yb)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(yb) {
        this._objectRenderer._waitingRenderList = yb
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
      setMaterialForRendering(yb, bb) {
        this._objectRenderer.setMaterialForRendering(yb, bb)
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
      set boundingBoxSize(yb) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(yb)) return;
        this._boundingBoxSize = yb;
        const bb = this.kWy();
        bb && bb.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(yb, bb, Wy) {
        let Zy, cb, oy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          By = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ky = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ey = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : fy.f.TRILINEAR_SAMPLINGMODE,
          sy = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Ey = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          ly = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          mb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Cy = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Ty = arguments.length > 13 ? arguments[13] : void 0,
          Vy = arguments.length > 14 ? arguments[14] : void 0,
          Jy = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          gb = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          Gy = !0,
          Oy = !1;
        if ("object" === typeof oy) {
          const yb = oy;
          oy = !!yb.generateMipMaps, By = yb.doNotChangeAspectRatio ?? !0, Ky = yb.type ?? 0, ey = !!yb.isCube, qb = yb.samplingMode ?? fy.f.TRILINEAR_SAMPLINGMODE, sy = yb.generateDepthBuffer ?? !0, Ey = !!yb.generateStencilBuffer, ly = !!yb.isMulti, mb = yb.format ?? 5, Cy = !!yb.delayAllocation, Ty = yb.samples, Vy = yb.creationFlags, Jy = !!yb.noColorAttachment, gb = !!yb.useSRGBBuffer, Zy = yb.colorAttachment, Gy = yb.gammaSpace ?? Gy, cb = yb.existingObjectRenderer, Oy = !!yb.enableClusteredLights
        }
        if (super(null, Wy, !oy, void 0, qb, void 0, void 0, void 0, void 0, mb), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Uy.c, this.onAfterUnbindObservable = new Uy.c, this.onClearObservable = new Uy.c, this.onResizeObservable = new Uy.c, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = hy.n.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Wy = this.kWy())) return;
        const Ry = this.kWy().xh();
        this._gammaSpace = Gy, this._coordinatesMode = fy.f.PROJECTION_MODE, this.name = yb, this.isRenderTarget = !0, this._initialSizeParameter = bb, this._dontDisposeObjectRenderer = !!cb, this._processSizeParameter(bb), this._objectRenderer = cb ?? new Sy(yb, Wy, {
          numPasses: ey ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: By,
          enableClusteredLights: Oy
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const yb = this._scene;
          if (!this._disableEngineStages)
            for (const bb of yb._beforeRenderTargetClearStage) bb.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ry) : this.skipInitialClear || Ry.clear(this.clearColor ?? yb.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || yb.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const bb of yb._beforeRenderTargetDrawStage) bb.action(this, this._currentFaceIndex, this._currentLayer);
          Ry._debugPushGroup && Ry._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Ry._debugPopGroup && Ry._debugPopGroup(), !this._disableEngineStages)
            for (const bb of this._scene._afterRenderTargetDrawStage) bb.action(this, this._currentFaceIndex, this._currentLayer);
          const yb = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const bb of this._scene._afterRenderTargetPostProcessStage) bb.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = yb), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Ry) : Py.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Ry) : this.skipInitialClear || Ry.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Ry.onResizeObservable.add((() => {})), this._generateMipMaps = !!oy, this._doNotChangeAspectRatio = By, ly || (this._renderTargetOptions = {
          generateMipMaps: oy,
          type: Ky,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: sy,
          generateStencilBuffer: Ey,
          samples: Ty,
          creationFlags: Vy,
          noColorAttachment: Jy,
          useSRGBBuffer: gb,
          colorAttachment: Zy,
          label: this.name
        }, this.samplingMode === fy.f.NEAREST_SAMPLINGMODE && (this.wrapU = fy.f.CLAMP_ADDRESSMODE, this.wrapV = fy.f.CLAMP_ADDRESSMODE), Cy || (ey ? (this._renderTarget = Wy.xh().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = fy.f.INVCUBIC_MODE, this._textureMatrix = hy.c.Identity()) : this._renderTarget = Wy.xh().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Ty && (this.samples = Ty)))
      }
      createDepthStencilTexture() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(yb, bb, Wy, Uy, hy, fy)
      }
      _processSizeParameter(yb) {
        if (yb.ratio) {
          this._sizeRatio = yb.ratio;
          const bb = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(bb.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(bb.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = yb
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(yb) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(yb))
      }
      addPostProcess(yb) {
        if (!this._postProcessManager) {
          const yb = this.kWy();
          if (!yb) return;
          this._postProcessManager = new Zy.b(yb), this._postProcesses = new Array
        }
        this._postProcesses.push(yb), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (yb)
            for (const yb of this._postProcesses) yb.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(yb) {
        if (!this._postProcesses) return;
        const bb = this._postProcesses.indexOf(yb); - 1 !== bb && (this._postProcesses.splice(bb, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(yb) {
        this._objectRenderer.refreshRate = yb
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
        const yb = this._size.layers;
        if (yb) return yb;
        const bb = this._size.depth;
        return bb || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(yb) {
        const bb = Math.max(1, this.getRenderSize() * yb);
        this.resize(bb)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(yb) {
        const bb = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Wy = this.kWy();
        Wy && (this._processSizeParameter(yb), this._renderTarget = bb ? Wy.xh().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Wy.xh().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(yb, bb)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Wy(40309))).then((yb => this._dumpTools = yb))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const yb = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), yb
      }
      _render() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this.kWy();
        if (!Wy) return;
        void 0 !== this.useCameraPostProcesses && (yb = this.useCameraPostProcesses);
        const Uy = Wy.xh();
        if (Uy._debugPushGroup && Uy._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let hy = 0; hy < 6; hy++) this._renderToTarget(hy, yb, bb), Wy.incrementRenderId(), Wy.resetCachedMaterial();
          else this._renderToTarget(0, yb, bb);
        else
          for (let hy = 0; hy < this.getRenderLayers(); hy++) this._renderToTarget(0, yb, bb, hy), Wy.incrementRenderId(), Wy.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Uy._debugPopGroup && Uy._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(yb, bb) {
        const Wy = yb * bb,
          Uy = (0, cb.j)(Wy + 16384 / (128 + Wy));
        return Math.min((0, cb.b)(yb), Uy)
      }
      _bindFrameBuffer() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = this.kWy();
        if (!Wy) return;
        const Uy = Wy.xh();
        this._renderTarget && Uy.bindFramebuffer(this._renderTarget, this.isCube ? yb : void 0, void 0, void 0, this.ignoreCameraViewport, 0, bb)
      }
      _unbindFrameBuffer(yb, bb) {
        this._renderTarget && yb.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(bb)
        }))
      }
      _prepareFrame(yb, bb, Wy, Uy) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(bb, Wy) : Uy && yb.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(bb, Wy)
      }
      _renderToTarget(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hy = this.kWy();
        if (!hy) return;
        const fy = hy.xh();
        this._currentFaceIndex = yb, this._currentLayer = Uy, this._currentUseCameraPostProcess = bb, this._currentDumpForDebug = Wy, this._prepareFrame(hy, yb, Uy, bb), this._objectRenderer.render(yb + Uy, !0), this._unbindFrameBuffer(fy, yb), this._texture && this.isCube && 5 === yb && fy.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(yb, bb, Wy, Uy)
      }
      setRenderingAutoClearDepthStencil(yb, bb) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(yb, bb)
      }
      clone() {
        const yb = this.getSize(),
          bb = new ly(this.name, yb, this.kWy(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return bb.hasAlpha = this.hasAlpha, bb.level = this.level, bb.coordinatesMode = this.coordinatesMode, this.renderList && (bb.renderList = this.renderList.slice(0)), bb
      }
      serialize() {
        if (!this.name) return null;
        const yb = super.serialize();
        if (yb.renderTargetSize = this.getRenderSize(), yb.renderList = [], this.renderList)
          for (let bb = 0; bb < this.renderList.length; bb++) yb.renderList.push(this.renderList[bb].id);
        return yb
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.kWy().xh().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const yb = this.kWy();
        if (!yb) return;
        let bb = yb.customRenderTargets.indexOf(this);
        bb >= 0 && yb.customRenderTargets.splice(bb, 1);
        for (const Wy of yb.cameras) bb = Wy.customRenderTargets.indexOf(this), bb >= 0 && Wy.customRenderTargets.splice(bb, 1);
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
    ly.REFRESHRATE_RENDER_ONCE = Sy.REFRESHRATE_RENDER_ONCE, ly.REFRESHRATE_RENDER_ONEVERYFRAME = Sy.REFRESHRATE_RENDER_ONEVERYFRAME, ly.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Sy.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(ly.prototype, "noPrePassRenderer") || Object.defineProperty(ly.prototype, "noPrePassRenderer", (0, Ey.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40281: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      d: () => By
    });
    var Uy = Wy(38620),
      hy = Wy(36794),
      fy = Wy(35893),
      Zy = Wy(38312),
      cb = Wy(38822);
    const Py = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class oy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Py;
        this._fullscreenViewport = new hy.e(0, 0, 1, 1);
        const Wy = bb.positions ?? Py.positions,
          fy = bb.indices ?? Py.indices;
        this.engine = yb, this._vertexBuffers = {
          [Uy.k.PositionKind]: new Uy.k(yb, Wy, Uy.k.PositionKind, !1, !1, 2)
        }, this._indexBuffer = yb.createIndexBuffer(fy), this._indexBufferLength = fy.length, this._onContextRestoredObserver = yb.onContextRestoredObservable.add((() => {
          this._indexBuffer = yb.createIndexBuffer(fy);
          for (const yb in this._vertexBuffers) {
            this._vertexBuffers[yb]._rebuild()
          }
        }))
      }
      setViewport() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(yb)
      }
      bindBuffers(yb) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, yb)
      }
      applyEffectWrapper(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = bb, this.engine.stencilState.stencilTest = Wy, this.engine.enableEffect(yb.drawWrapper), this.bindBuffers(yb.effect), yb.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(yb) {
        return void 0 !== yb.renderTarget
      }
      render(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!yb.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Wy = null === bb ? null : this._isRenderTargetTexture(bb) ? bb.renderTarget : bb;
        Wy && this.engine.bindFramebuffer(Wy), this.applyEffectWrapper(yb), this.draw(), Wy && this.engine.unBindFramebuffer(Wy), this.restoreStates()
      }
      dispose() {
        const yb = this._vertexBuffers[Uy.k.PositionKind];
        yb && (yb.dispose(), delete this._vertexBuffers[Uy.k.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class By {
      static RegisterShaderCodeProcessing(yb, bb) {
        bb ? By._CustomShaderCodeProcessing[yb ?? ""] = bb : delete By._CustomShaderCodeProcessing[yb ?? ""]
      }
      static _GetShaderCodeProcessing(yb) {
        return By._CustomShaderCodeProcessing[yb] ?? By._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(yb) {
        this.options.name = yb
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
      set effect(yb) {
        this._drawWrapper.effect = yb
      }
      constructor(yb) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new fy.c(void 0, !0), this.onApplyObservable = new fy.c, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...yb,
          name: yb.name || "effectWrapper",
          engine: yb.engine,
          uniforms: yb.uniforms || yb.uniformNames || [],
          uniformNames: void 0,
          samplers: yb.samplers || yb.samplerNames || [],
          samplerNames: void 0,
          attributeNames: yb.attributeNames || ["position"],
          uniformBuffers: yb.uniformBuffers || [],
          defines: yb.defines || "",
          useShaderStore: yb.useShaderStore || !1,
          vertexUrl: yb.vertexUrl || yb.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: yb.fragmentShader || "pass",
          indexParameters: yb.indexParameters,
          blockCompilation: yb.blockCompilation || !1,
          shaderLanguage: yb.shaderLanguage || 0,
          onCompiled: yb.onCompiled || void 0,
          extraInitializations: yb.extraInitializations || void 0,
          extraInitializationsAsync: yb.extraInitializationsAsync || void 0,
          useAsPostProcess: yb.useAsPostProcess ?? !1,
          allowEmptySourceTexture: yb.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), yb.vertexUrl || yb.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new cb.c(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const bb = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, bb, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Uy = arguments.length > 2 ? arguments[2] : void 0,
          hy = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, hy && this._importPromises.push(...hy);
        const fy = this.options.engine.isWebGPU && !By.ForceGLSL;
        this._gatherImports(fy, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(fy && this._webGPUReady ? Wy.e(344).then((() => Wy(59950))) : Wy.e(333).then((() => Wy(59697)))), void 0 !== Uy && Uy(fy, this._importPromises), fy && this._webGPUReady && (this.options.shaderLanguage = 1), yb || this.updateEffect(bb)
      }
      updateEffect() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          cb = arguments.length > 6 ? arguments[6] : void 0,
          Py = arguments.length > 7 ? arguments[7] : void 0;
        const oy = By._GetShaderCodeProcessing(this.name);
        if (oy?.defineCustomBindings) {
          const Uy = bb?.slice() ?? [];
          Uy.push(...this.options.uniforms);
          const hy = Wy?.slice() ?? [];
          hy.push(...this.options.samplers), yb = oy.defineCustomBindings(this.name, yb, Uy, hy), bb = Uy, Wy = hy
        }
        this.options.defines = yb || "";
        const Ky = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let ey;
        ey = this.options.extraInitializationsAsync ? async () => {
          await (Ky?.()), await this.options.extraInitializationsAsync()
        }: Ky, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: cb ?? this._shaderPath.vertex,
          fragment: Py ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: bb || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Wy || this.options.samplers,
          defines: null !== yb ? yb : "",
          fallbacks: null,
          onCompiled: hy ?? this.options.onCompiled,
          onError: fy ?? null,
          indexParameters: Uy || this.options.indexParameters,
          processCodeAfterIncludes: oy?.processCodeAfterIncludes ? (yb, bb) => oy.processCodeAfterIncludes(this.name, yb, bb) : null,
          processFinalCode: oy?.processFinalCode ? (yb, bb) => oy.processFinalCode(this.name, yb, bb) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: ey
        }, this.options.engine) : this._drawWrapper.effect = new Zy.c(this._shaderPath, this.options.attributeNames, bb || this.options.uniforms, Wy || this.options.samplerNames, this.options.engine, yb, void 0, hy || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, ey), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !yb && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), By._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.xh().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    By.ForceGLSL = !1, By._CustomShaderCodeProcessing = {}
  },
  40309: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Dispose: () => mb,
      DumpData: () => ly,
      DumpDataAsync: () => Ey,
      DumpFramebuffer: () => Sy,
      DumpTools: () => Cy,
      EncodeImageAsync: () => sy,
      RegisterDumpTools: () => Vy
    });
    var Uy = Wy(38464),
      hy = Wy(40281),
      fy = Wy(38576),
      Zy = Wy(35902),
      cb = Wy(35886),
      Py = Wy(37350),
      oy = Wy(38532),
      By = Wy(38466);
    let Ky = null;
    async function ey() {
      return Ky || (Ky = async function() {
        const yb = cb.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        yb instanceof OffscreenCanvas && Py.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: bb
        } = await Promise.resolve().then((() => Wy(38305)));
        if (!bb.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Uy = new bb(yb, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        cb.c.Instances.pop(), cb.c.OnEnginesDisposedObservable.add((yb => {
          Uy && yb !== Uy && !Uy.Koy && 0 === cb.c.Instances.length && mb()
        })), Uy.getCaps().parallelShaderCompile = void 0;
        const fy = new hy.b(Uy),
          {
            passPixelShader: Zy
          } = await Wy.e(352).then((() => Wy(60001))),
          oy = new hy.d({
            engine: Uy,
            name: Zy.name,
            fragmentShader: Zy.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: yb,
          dumpEngine: {
            engine: Uy,
            renderer: fy,
            wrapper: oy
          }
        }
      }()), await Ky
    }
    let qb = (() => {
      var yb;
      let bb, Wy = [];
      return yb = class {
        static async EncodeImageAsync(yb, bb, Wy, Uy, hy, Zy) {
          const cb = await ey(),
            Py = cb.dumpEngine;
          Py.engine.setSize(bb, Wy, !0);
          const oy = Py.engine.createRawTexture(yb, bb, Wy, 5, !1, !hy, 1);
          return Py.renderer.setViewport(), Py.renderer.applyEffectWrapper(Py.wrapper), Py.wrapper.effect._bindTexture("textureSampler", oy), Py.renderer.draw(), oy.dispose(), await new Promise(((yb, bb) => {
            fy.k.ToBlob(cb.canvas, (Wy => {
              Wy ? yb(Wy) : bb(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Uy, Zy)
          }))
        }
      }, (() => {
        const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [By.i], (0, Uy.j)(yb, null, bb, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: yb => "EncodeImageAsync" in yb,
            get: yb => yb.EncodeImageAsync
          },
          metadata: hy
        }, null, Wy), hy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hy
        }), (0, Uy.l)(yb, Wy)
      })(), yb
    })();
    const sy = qb.EncodeImageAsync;
    async function Sy(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        fy = arguments.length > 5 ? arguments[5] : void 0,
        Zy = arguments.length > 6 ? arguments[6] : void 0;
      const cb = await Wy.readPixels(0, 0, yb, bb);
      ly(yb, bb, new Uint8Array(cb.buffer), Uy, hy, fy, !0, void 0, Zy)
    }
    async function Ey(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        hy = arguments.length > 4 ? arguments[4] : void 0,
        cb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        By = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ky = arguments.length > 7 ? arguments[7] : void 0;
      if (Wy instanceof Float32Array) {
        const yb = new Uint8Array(Wy.length);
        let bb = Wy.length;
        for (; bb--;) {
          const Uy = Wy[bb];
          yb[bb] = Math.round(255 * (0, Zy.Clamp)(Uy))
        }
        Wy = yb
      }
      const ey = await qb.EncodeImageAsync(Wy, yb, bb, Uy, cb, Ky);
      void 0 !== hy && fy.k.DownloadBlob(ey, hy), ey.type !== Uy && Py.b.Warn(`DumpData: The requested mimeType '${Uy}' is not supported. The result has mimeType '${ey.type}' instead.`);
      const sy = await ey.arrayBuffer();
      return By ? sy : `data:${Uy};base64,${(0,oy.k)(sy)}`
    }

    function ly(yb, bb, Wy, Uy) {
      let hy = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== hy || Uy || (hy = ""), Ey(yb, bb, Wy, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", hy, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((yb => {
        Uy && Uy(yb)
      }))
    }

    function mb() {
      Ky && (Ky?.then((yb => {
        yb.canvas instanceof HTMLCanvasElement && yb.canvas.remove(), yb.dumpEngine && (yb.dumpEngine.engine.dispose(), yb.dumpEngine.renderer.dispose(), yb.dumpEngine.wrapper.dispose())
      })), Ky = null)
    }
    const Cy = {
      DumpData: ly,
      DumpDataAsync: Ey,
      DumpFramebuffer: Sy,
      Dispose: mb
    };
    let Ty = !1;

    function Vy() {
      if (Ty) return;
      Ty = !0;
      fy.k.DumpData = ly, fy.k.DumpDataAsync = Ey, fy.k.DumpFramebuffer = Sy
    }
  },
  40293: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => qb,
      h: () => sy,
      l: () => Sy
    });
    var Uy = Wy(38989),
      hy = Wy(40299),
      fy = Wy(38464),
      Zy = Wy(40273),
      cb = Wy(38485),
      Py = Wy(40304),
      oy = Wy(38466);
    class By extends Zy.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 4 ? arguments[4] : void 0;
        const Uy = {
          size: "number" === typeof bb ? bb : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Wy,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...bb
        };
        super(yb, Py.g.FragmentUrl, {
          effectWrapper: "number" !== typeof bb && bb.effectWrapper ? void 0 : new Py.g(yb, Wy, Uy),
          ...Uy
        })
      }
      static _Parse(yb, bb, Wy, Uy) {
        return cb.c.Parse((() => new By(yb.name, yb.options, bb, yb.renderTargetSamplingMode, yb._engine, yb.reusable)), yb, Wy, Uy)
      }
    }(() => {
      var yb;
      let bb, Wy = Zy.c,
        Uy = [];
      yb = class extends Wy {
        get face() {
          return this._effectWrapper.face
        }
        set face(yb) {
          this._effectWrapper.face = yb
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(yb, bb) {
          let Wy = arguments.length > 4 ? arguments[4] : void 0;
          const hy = {
            size: "number" === typeof bb ? bb : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Wy,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...bb
          };
          super(yb, Py.g.FragmentUrl, {
            effectWrapper: "number" !== typeof bb && bb.effectWrapper ? void 0 : new Py.d(yb, Wy, hy),
            ...hy
          }), (0, fy.l)(this, Uy)
        }
        static _Parse(bb, Wy, Uy, hy) {
          return cb.c.Parse((() => new yb(bb.name, bb.options, Wy, bb.renderTargetSamplingMode, bb._engine, bb.reusable)), bb, Uy, hy)
        }
      }, (() => {
        const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wy[Symbol.metadata] ?? null) : void 0;
        bb = [(0, oy.T)()], (0, fy.j)(yb, null, bb, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: yb => "face" in yb,
            get: yb => yb.face
          },
          metadata: hy
        }, null, Uy), hy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hy
        })
      })()
    })();
    var Ky = Wy(35902),
      ey = Wy(38547);

    function qb(yb, bb, Wy, Uy, hy, fy, cb, Py) {
      const oy = bb.xh();
      return bb.isReady = !1, hy = hy ?? bb.samplingMode, Uy = Uy ?? bb.type, fy = fy ?? bb.format, cb = cb ?? bb.width, Py = Py ?? bb.height, -1 === Uy && (Uy = 0), new Promise((By => {
        const Ky = new Zy.c("postprocess", yb, null, null, 1, null, hy, oy, !1, void 0, Uy, void 0, null, !1, fy);
        Ky.externalTextureSamplerBinding = !0;
        const ey = oy.createRenderTargetTexture({
          width: cb,
          height: Py
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: hy,
          type: Uy,
          format: fy
        });
        Ky.onEffectCreatedObservable.addOnce((yb => {
          yb.executeWhenCompiled((() => {
            Ky.onApply = yb => {
              yb._bindTexture("textureSampler", bb), yb.setFloat2("scale", 1, 1)
            }, Wy.postProcessManager.directRender([Ky], ey, !0), oy.restoreDefaultFramebuffer(), oy._releaseTexture(bb), Ky && Ky.dispose(), ey._swapAndDie(bb), bb.type = Uy, bb.format = 5, bb.isReady = !0, By(bb)
          }))
        }))
      }))
    }
    async function sy(yb, bb, fy) {
      let cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Py = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        oy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        By = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(yb) {
        if (yb.isReady()) return;
        if (yb.loadingError) throw new Error(yb.errorObject?.message || `Texture ${yb.name} errored while loading.`);
        const bb = yb.onLoadObservable;
        if (bb) return await new Promise((yb => bb.addOnce((() => yb()))));
        const Wy = yb._texture?.onLoadedObservable;
        if (Wy) return await new Promise((yb => Wy.addOnce((() => yb()))));
        throw new Error(`Cannot determine readiness of texture ${yb.name}.`)
      }(yb);
      const ey = yb.getInternalTexture(),
        qb = yb.is3D || !!ey?.is3D,
        {
          width: sy,
          height: Sy
        } = yb.getSize(),
        Ey = bb ?? sy,
        ly = fy ?? Sy;
      if (oy || qb || function(yb) {
          switch (yb) {
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
        }(yb.textureFormat) || Ey !== sy || ly !== Sy) {
        if (yb.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${oy?"RTT":"compression"} is not supported.`);
        return await async function(yb, bb, fy, cb, Py) {
          let oy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const By = yb.kWy(),
            Ky = By.xh(),
            ey = yb.getInternalTexture(),
            qb = yb.is3D || !!ey?.is3D;
          let sy;
          if (Ky.isWebGPU ? qb ? await Wy.e(348).then((() => Wy(59983))) : yb.isCube ? await Wy.e(349).then((() => Wy(59991))) : await Wy.e(350).then((() => Wy(59993))) : qb ? await Wy.e(345).then((() => Wy(59966))) : yb.isCube ? await Wy.e(346).then((() => Wy(59970))) : await Wy.e(347).then((() => Wy(59976))), qb) sy = new Zy.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Uy.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Ky,
            shaderLanguage: Ky.isWebGPU ? 1 : 0
          });
          else if (yb.isCube) {
            const yb = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            sy = new Zy.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Uy.f.NEAREST_NEAREST_MIPNEAREST,
              engine: Ky,
              defines: yb[cb],
              shaderLanguage: Ky.isWebGPU ? 1 : 0
            })
          } else sy = new Zy.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Uy.f.NEAREST_NEAREST_MIPNEAREST,
            engine: Ky,
            shaderLanguage: Ky.isWebGPU ? 1 : 0
          });
          await new Promise((yb => {
            sy.onEffectCreatedObservable.addOnce((bb => {
              bb.executeWhenCompiled((() => {
                yb(0)
              }))
            }))
          }));
          const Sy = new hy.e("temp", {
            width: bb,
            height: fy
          }, By, !1);
          sy.onApply = function(bb) {
            bb.setTexture("textureSampler", yb), bb.setFloat("lod", Py), bb.setInt("gamma", yb.gammaSpace ? 1 : 0), qb && bb.setFloat("slice", oy)
          };
          try {
            if (Sy.renderTarget && ey) {
              const Wy = ey.samplingMode;
              0 !== Py ? yb.updateSamplingMode(Uy.f.NEAREST_NEAREST_MIPNEAREST) : yb.updateSamplingMode(Uy.f.NEAREST_NEAREST), By.postProcessManager.directRender([sy], Sy.renderTarget, !0), yb.updateSamplingMode(Wy);
              const hy = await Ky.readPixels(0, 0, bb, fy),
                Zy = new Uint8Array(hy.buffer, hy.byteOffset, hy.byteLength);
              return Ky.unBindFramebuffer(Sy.renderTarget), Zy
            }
            throw Error("Render to texture failed.")
          } finally {
            Sy.dispose(), sy.dispose()
          }
        }(yb, Ey, ly, cb, Py, By)
      }
      let mb = await yb.readPixels(cb, Py);
      if (!mb) throw new Error(`Failed to read pixels from texture ${yb.name}.`);
      if (mb instanceof Float32Array) {
        const yb = new Uint8Array(mb.length);
        let bb = mb.length;
        for (; bb--;) {
          const Wy = mb[bb];
          yb[bb] = Math.round(255 * (0, Ky.Clamp)(Wy))
        }
        mb = yb
      }
      const Cy = Ey * ly,
        Ty = 4 * Cy;
      if (mb.length !== Ty) {
        const yb = 0 === Cy ? 0 : mb.length / Cy;
        if (1 === yb || 2 === yb || 3 === yb) {
          const bb = new Uint8Array(Ty);
          for (let Wy = 0, Uy = 0, hy = 0; Wy < Cy; Wy++, hy += 4) {
            const Wy = mb[Uy++];
            if (1 === yb) {
              bb[hy] = Wy, bb[hy + 1] = Wy, bb[hy + 2] = Wy, bb[hy + 3] = 255;
              continue
            }
            const fy = mb[Uy++];
            2 !== yb ? (bb[hy] = Wy, bb[hy + 1] = fy, bb[hy + 2] = mb[Uy++], bb[hy + 3] = 255) : (bb[hy] = Wy, bb[hy + 1] = fy, bb[hy + 2] = 0, bb[hy + 3] = 255)
          }
          return bb
        }
      }
      return mb
    }
    const Sy = {
      CreateResizedCopy: function(yb, bb, Wy) {
        let fy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Zy = yb.kWy(),
          cb = Zy.xh(),
          Py = new hy.e("resized" + yb.name, {
            width: bb,
            height: Wy
          }, Zy, !yb.noMipmap, !0, yb._texture.type, !1, yb.samplingMode, !1);
        Py.wrapU = yb.wrapU, Py.wrapV = yb.wrapV, Py.uOffset = yb.uOffset, Py.vOffset = yb.vOffset, Py.uScale = yb.uScale, Py.vScale = yb.vScale, Py.uAng = yb.uAng, Py.vAng = yb.vAng, Py.wAng = yb.wAng, Py.coordinatesIndex = yb.coordinatesIndex, Py.level = yb.level, Py.anisotropicFilteringLevel = yb.anisotropicFilteringLevel, Py._texture.isReady = !1, yb.wrapU = Uy.f.CLAMP_ADDRESSMODE, yb.wrapV = Uy.f.CLAMP_ADDRESSMODE;
        const oy = new By("pass", 1, null, fy ? Uy.f.BILINEAR_SAMPLINGMODE : Uy.f.NEAREST_SAMPLINGMODE, cb, !1, 0);
        return oy.externalTextureSamplerBinding = !0, oy.onEffectCreatedObservable.addOnce((bb => {
          bb.executeWhenCompiled((() => {
            oy.onApply = function(bb) {
              bb.setTexture("textureSampler", yb)
            };
            const bb = Py.renderTarget;
            bb && (Zy.postProcessManager.directRender([oy], bb), cb.unBindFramebuffer(bb), Py.disposeFramebufferObjects(), oy.dispose(), Py.getInternalTexture().isReady = !0)
          }))
        })), Py
      },
      ApplyPostProcess: qb,
      ToHalfFloat: ey.k,
      FromHalfFloat: ey.d,
      GetTextureDataAsync: sy
    }
  },
  40273: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy
    });
    var Uy = Wy(38464),
      hy = Wy(38587),
      fy = Wy(35893),
      Zy = Wy(35861),
      cb = Wy(38312),
      Py = Wy(38466),
      oy = Wy(38485),
      By = Wy(35909),
      Ky = Wy(38362),
      ey = Wy(38405),
      qb = Wy(40281);
    let sy = (() => {
        var yb;
        let bb, cb, Ky, sy, Sy, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib = [],
          My = [],
          Yy = [],
          Xy = [],
          ny = [],
          uy = [],
          rb = [],
          Hy = [],
          ab = [],
          Fy = [],
          py = [],
          Ly = [],
          Qy = [],
          jb = [],
          Dy = [],
          tb = [],
          wy = [],
          kb = [],
          Ny = [],
          zb = [],
          Iy = [],
          xb = [],
          Ay = [],
          dy = [],
          yW = [],
          bW = [],
          Wb = [],
          Ub = [],
          hb = [];
        return yb = class {
          static get ForceGLSL() {
            return qb.d.ForceGLSL
          }
          static set ForceGLSL(yb) {
            qb.d.ForceGLSL = yb
          }
          static RegisterShaderCodeProcessing(yb, bb) {
            qb.d.RegisterShaderCodeProcessing(yb, bb)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(yb) {
            this._effectWrapper.name = yb
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(yb) {
            this._effectWrapper.alphaMode = yb
          }
          get samples() {
            return this._samples
          }
          set samples(yb) {
            this._samples = Math.min(yb, this._engine.getCaps().maxMSAASamples), this._textures.forEach((yb => {
              yb.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(yb) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), yb && (this._onActivateObserver = this.onActivateObservable.add(yb))
          }
          set onSizeChanged(yb) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(yb)
          }
          set onApply(yb) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(yb)
          }
          set onBeforeRender(yb) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(yb)
          }
          set onAfterRender(yb) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(yb)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(yb) {
            this._forcedOutputTexture = yb
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Qhy
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.vcy(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(bb, Wy, cb, Py, oy, By) {
            let Ky = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              ey = arguments.length > 7 ? arguments[7] : void 0,
              sy = arguments.length > 8 ? arguments[8] : void 0,
              Sy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              ly = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              mb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Cy = arguments.length > 12 ? arguments[12] : void 0,
              Ty = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Vy = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              Jy = arguments.length > 15 ? arguments[15] : void 0,
              gb = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Uy.l)(this, ib), null), this.uniqueId = (0, Uy.l)(this, My, void 0), this.width = ((0, Uy.l)(this, Yy), (0, Uy.l)(this, Xy, -1)), this.height = ((0, Uy.l)(this, ny), (0, Uy.l)(this, uy, -1)), this.nodeMaterialSource = ((0, Uy.l)(this, rb), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Uy.l)(this, Hy, void 0), this.clearColor = ((0, Uy.l)(this, ab), (0, Uy.l)(this, Fy, void 0)), this.autoClear = ((0, Uy.l)(this, py), (0, Uy.l)(this, Ly, !0)), this.forceAutoClearInAlphaMode = ((0, Uy.l)(this, Qy), (0, Uy.l)(this, jb, !1)), this.alphaConstants = ((0, Uy.l)(this, Dy), (0, Uy.l)(this, tb, void 0)), this.animations = ((0, Uy.l)(this, wy), []), this.enablePixelPerfectMode = (0, Uy.l)(this, kb, !1), this.forceFullscreenViewport = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, !0)), this.inspectableCustomProperties = (0, Uy.l)(this, Iy), this.scaleMode = (0, Uy.l)(this, xb, 1), this.alwaysForcePOT = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, !1)), this._samples = ((0, Uy.l)(this, yW), (0, Uy.l)(this, bW, 1)), this.adaptScaleToCurrentViewport = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, !1)), this.doNotSerialize = ((0, Uy.l)(this, hb), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new hy.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Zy.m(1, 1), this._texelSize = Zy.m.Zero(), this.onActivateObservable = new fy.c, this.onSizeChangedObservable = new fy.c, this.onApplyObservable = new fy.c, this.onBeforeRenderObservable = new fy.c, this.onAfterRenderObservable = new fy.c, this.Nby = new fy.c, Ey();
            let Gy, Oy = 1,
              Ry = null;
            if (cb && !Array.isArray(cb)) {
              const yb = cb;
              cb = yb.uniforms ?? null, Py = yb.samplers ?? null, Oy = yb.size ?? 1, By = yb.camera ?? null, Ky = yb.samplingMode ?? 1, ey = yb.engine, sy = yb.reusable, Sy = Array.isArray(yb.defines) ? yb.defines.join("\n") : yb.defines ?? null, ly = yb.textureType ?? 0, mb = yb.vertexUrl ?? "postprocess", Cy = yb.indexParameters, Ty = yb.blockCompilation ?? !1, Vy = yb.textureFormat ?? 5, Jy = yb.shaderLanguage ?? 0, Ry = yb.uniformBuffers ?? null, gb = yb.extraInitializations, Gy = yb.effectWrapper
            } else oy && (Oy = "number" === typeof oy ? oy : {
              width: oy.width,
              height: oy.height
            });
            if (this._useExistingThinPostProcess = !!Gy, this._effectWrapper = Gy ?? new qb.d({
                name: bb,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Wy,
                engine: ey || By?.kWy().xh(),
                uniforms: cb,
                samplers: Py,
                uniformBuffers: Ry,
                defines: Sy,
                vertexUrl: mb,
                indexParameters: Cy,
                blockCompilation: !0,
                shaderLanguage: Jy,
                extraInitializations: void 0
              }), this.name = bb, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != By ? (this.Qhy = By, this._scene = By.kWy(), By.attachPostProcess(this), this._engine = this._scene.xh(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : ey && (this._engine = ey, this._engine.postProcesses.push(this)), this._options = Oy, this.renderTargetSamplingMode = Ky || 1, this._reusable = sy || !1, this._textureType = ly, this._textureFormat = Vy, this._shaderLanguage = Jy || 0, this._samplers = Py || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Wy, this._vertexUrl = mb, this._parameters = cb || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Ry || [], this._indexParameters = Cy, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const bb = [];
              this._gatherImports(this._engine.isWebGPU && !yb.ForceGLSL, bb), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Ty, Sy, gb, bb)
            }
          }
          _gatherImports() {
            let yb = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? yb.push(Promise.all([Wy.e(344).then((() => Wy(59950)))])) : yb.push(Promise.all([Wy.e(333).then((() => Wy(59697)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          xh() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(yb) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = yb, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new hy.e(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Uy = arguments.length > 3 ? arguments[3] : void 0,
              hy = arguments.length > 4 ? arguments[4] : void 0,
              fy = arguments.length > 5 ? arguments[5] : void 0,
              Zy = arguments.length > 6 ? arguments[6] : void 0,
              cb = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(yb, bb, Wy, Uy, hy, fy, Zy, cb), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let hy = 0; hy < this._textureCache.length; hy++)
              if (this._textureCache[hy].texture.width === yb.width && this._textureCache[hy].texture.height === yb.height && this._textureCache[hy].postProcessChannel === Wy && this._textureCache[hy].texture._generateDepthBuffer === bb.generateDepthBuffer && this._textureCache[hy].texture.samples === bb.samples) return this._textureCache[hy].texture;
            const Uy = this._engine.createRenderTargetTexture(yb, bb);
            return this._textureCache.push({
              texture: Uy,
              postProcessChannel: Wy,
              lastUsedRenderId: -1
            }), Uy
          }
          _flushTextureCache() {
            const yb = this._renderId;
            for (let bb = this._textureCache.length - 1; bb >= 0; bb--)
              if (yb - this._textureCache[bb].lastUsedRenderId > 100) {
                let yb = !1;
                for (let Wy = 0; Wy < this._textures.length; Wy++)
                  if (this._textures.data[Wy] === this._textureCache[bb].texture) {
                    yb = !0;
                    break
                  } yb || (this._textureCache[bb].texture.dispose(), this._textureCache.splice(bb, 1))
              }
          }
          resize(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = yb, this.height = bb;
            let fy = null;
            if (Wy)
              for (let Py = 0; Py < Wy._postProcesses.length; Py++)
                if (null !== Wy._postProcesses[Py]) {
                  fy = Wy._postProcesses[Py];
                  break
                } const Zy = {
                width: this.width,
                height: this.height
              },
              cb = {
                generateMipMaps: Uy,
                generateDepthBuffer: hy || fy === this,
                generateStencilBuffer: (hy || fy === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Zy, cb, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Zy, cb, 1)), this._texelSize.vcy(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let yb;
            if (this._shareOutputWithPostProcess) yb = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) yb = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let bb;
              yb = this.inputTexture;
              for (let Wy = 0; Wy < this._textureCache.length; Wy++)
                if (this._textureCache[Wy].texture === yb) {
                  bb = this._textureCache[Wy];
                  break
                } bb && (bb.lastUsedRenderId = this._renderId)
            }
            return yb
          }
          activate(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Wy = arguments.length > 2 ? arguments[2] : void 0;
            const Uy = null === yb || void 0 !== yb.cameraRigMode ? yb || this.Qhy : null,
              hy = Uy?.kWy() ?? yb,
              fy = hy.xh(),
              Zy = fy.getCaps().maxTextureSize,
              cb = (bb ? bb.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Py = (bb ? bb.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let oy = this._options.width || cb,
              By = this._options.height || Py;
            const Ky = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let qb = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const yb = fy.currentViewport;
                yb && (oy *= yb.width, By *= yb.height)
              }(Ky || this.alwaysForcePOT) && (this._options.width || (oy = fy.needPOTTextures ? (0, ey.d)(oy, Zy, this.scaleMode) : oy), this._options.height || (By = fy.needPOTTextures ? (0, ey.d)(By, Zy, this.scaleMode) : By)), this.width === oy && this.height === By && (qb = this._getTarget()) || this.resize(oy, By, Uy, Ky, Wy), this._textures.forEach((yb => {
                yb.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(yb, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return qb || (qb = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.vcy(cb / oy, Py / By), this._engine.bindFramebuffer(qb, 0, cb, Py, this.forceFullscreenViewport)) : (this._scaleRatio.vcy(1, 1), this._engine.bindFramebuffer(qb, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Uy), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : hy.clearColor, hy._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), qb
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
            let yb;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.xh().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), yb = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", yb?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let yb = this._textureCache.length - 1; yb >= 0; yb--) this._textureCache[yb].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(yb) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = yb.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(yb) {
            let bb;
            if (yb = yb || this.Qhy, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (bb = this._parentContainer.postProcesses.indexOf(this), bb > -1 && this._parentContainer.postProcesses.splice(bb, 1), this._parentContainer = null), bb = this._engine.postProcesses.indexOf(this), -1 !== bb && this._engine.postProcesses.splice(bb, 1), this.Nby.notifyObservers(), yb) {
              if (yb.detachPostProcess(this), bb = yb._postProcesses.indexOf(this), 0 === bb && yb._postProcesses.length > 0) {
                const yb = this.Qhy._getFirstPostProcess();
                yb && yb.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const yb = oy.c.Serialize(this),
              bb = this.getCamera() || this._scene && this._scene.activeCamera;
            return yb.customType = "BABYLON." + this.getClassName(), yb.cameraId = bb ? bb.id : null, yb.reusable = this._reusable, yb.textureType = this._textureType, yb.fragmentUrl = this._fragmentUrl, yb.parameters = this._parameters, yb.samplers = this._samplers, yb.uniformBuffers = this._uniformBuffers, yb.options = this._options, yb.defines = this._postProcessDefines, yb.textureFormat = this._textureFormat, yb.vertexUrl = this._vertexUrl, yb.indexParameters = this._indexParameters, yb
          }
          clone() {
            const bb = this.serialize();
            bb._engine = this._engine, bb.cameraId = null;
            const Wy = yb.Parse(bb, this._scene, "");
            return Wy ? (Wy.onActivateObservable = this.onActivateObservable.clone(), Wy.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Wy.onApplyObservable = this.onApplyObservable.clone(), Wy.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Wy.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Wy._prePassEffectConfiguration = this._prePassEffectConfiguration, Wy) : null
          }
          static Parse(yb, bb, Wy) {
            const Uy = (0, By.b)(yb.customType);
            if (!Uy || !Uy._Parse) return null;
            const hy = bb ? bb.getCameraById(yb.cameraId) : null;
            return Uy._Parse(yb, hy, bb, Wy)
          }
          static _Parse(bb, Wy, Uy, hy) {
            return oy.c.Parse((() => new yb(bb.name, bb.fragmentUrl, bb.parameters, bb.samplers, bb.options, Wy, bb.renderTargetSamplingMode, bb._engine, bb.reusable, bb.defines, bb.textureType, bb.vertexUrl, bb.indexParameters, !1, bb.textureFormat)), bb, Uy, hy)
          }
        }, (() => {
          const Wy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bb = [(0, Py.T)()], cb = [(0, Py.T)()], Ky = [(0, Py.T)()], sy = [(0, Py.T)()], Sy = [(0, Py.T)()], ly = [(0, Py.t)()], mb = [(0, Py.T)()], Cy = [(0, Py.T)()], Ty = [(0, Py.T)()], Vy = [(0, Py.T)()], Jy = [(0, Py.T)()], gb = [(0, Py.T)()], Gy = [(0, Py.T)()], Oy = [(0, Py.T)()], Ry = [(0, Py.T)("samples")], vb = [(0, Py.T)()], (0, Uy.j)(yb, null, cb, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: yb => "name" in yb,
              get: yb => yb.name
            },
            metadata: Wy
          }, null, ib), (0, Uy.j)(yb, null, Ty, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "alphaMode" in yb,
              get: yb => yb.alphaMode
            },
            metadata: Wy
          }, null, ib), (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: yb => "uniqueId" in yb,
              get: yb => yb.uniqueId,
              set: (yb, bb) => {
                yb.uniqueId = bb
              }
            },
            metadata: Wy
          }, My, Yy), (0, Uy.j)(null, null, Ky, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: yb => "width" in yb,
              get: yb => yb.width,
              set: (yb, bb) => {
                yb.width = bb
              }
            },
            metadata: Wy
          }, Xy, ny), (0, Uy.j)(null, null, sy, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: yb => "height" in yb,
              get: yb => yb.height,
              set: (yb, bb) => {
                yb.height = bb
              }
            },
            metadata: Wy
          }, uy, rb), (0, Uy.j)(null, null, Sy, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "renderTargetSamplingMode" in yb,
              get: yb => yb.renderTargetSamplingMode,
              set: (yb, bb) => {
                yb.renderTargetSamplingMode = bb
              }
            },
            metadata: Wy
          }, Hy, ab), (0, Uy.j)(null, null, ly, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "clearColor" in yb,
              get: yb => yb.clearColor,
              set: (yb, bb) => {
                yb.clearColor = bb
              }
            },
            metadata: Wy
          }, Fy, py), (0, Uy.j)(null, null, mb, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: yb => "autoClear" in yb,
              get: yb => yb.autoClear,
              set: (yb, bb) => {
                yb.autoClear = bb
              }
            },
            metadata: Wy
          }, Ly, Qy), (0, Uy.j)(null, null, Cy, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "forceAutoClearInAlphaMode" in yb,
              get: yb => yb.forceAutoClearInAlphaMode,
              set: (yb, bb) => {
                yb.forceAutoClearInAlphaMode = bb
              }
            },
            metadata: Wy
          }, jb, Dy), (0, Uy.j)(null, null, Vy, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: yb => "alphaConstants" in yb,
              get: yb => yb.alphaConstants,
              set: (yb, bb) => {
                yb.alphaConstants = bb
              }
            },
            metadata: Wy
          }, tb, wy), (0, Uy.j)(null, null, Jy, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "enablePixelPerfectMode" in yb,
              get: yb => yb.enablePixelPerfectMode,
              set: (yb, bb) => {
                yb.enablePixelPerfectMode = bb
              }
            },
            metadata: Wy
          }, kb, Ny), (0, Uy.j)(null, null, gb, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: yb => "forceFullscreenViewport" in yb,
              get: yb => yb.forceFullscreenViewport,
              set: (yb, bb) => {
                yb.forceFullscreenViewport = bb
              }
            },
            metadata: Wy
          }, zb, Iy), (0, Uy.j)(null, null, Gy, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "scaleMode" in yb,
              get: yb => yb.scaleMode,
              set: (yb, bb) => {
                yb.scaleMode = bb
              }
            },
            metadata: Wy
          }, xb, Ay), (0, Uy.j)(null, null, Oy, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: yb => "alwaysForcePOT" in yb,
              get: yb => yb.alwaysForcePOT,
              set: (yb, bb) => {
                yb.alwaysForcePOT = bb
              }
            },
            metadata: Wy
          }, dy, yW), (0, Uy.j)(null, null, Ry, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: yb => "_samples" in yb,
              get: yb => yb._samples,
              set: (yb, bb) => {
                yb._samples = bb
              }
            },
            metadata: Wy
          }, bW, Wb), (0, Uy.j)(null, null, vb, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: yb => "adaptScaleToCurrentViewport" in yb,
              get: yb => yb.adaptScaleToCurrentViewport,
              set: (yb, bb) => {
                yb.adaptScaleToCurrentViewport = bb
              }
            },
            metadata: Wy
          }, Ub, hb), Wy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wy
          })
        })(), yb
      })(),
      Sy = !1;

    function Ey() {
      Sy || (Sy = !0, Ky.d.prototype.setTextureFromPostProcess = function(yb, bb, Wy) {
        let Uy = null;
        bb && (bb._forcedOutputTexture ? Uy = bb._forcedOutputTexture : bb._textures.data[bb._currentRenderTextureInd] && (Uy = bb._textures.data[bb._currentRenderTextureInd])), this._bindTexture(yb, Uy?.texture ?? null, Wy)
      }, Ky.d.prototype.setTextureFromPostProcessOutput = function(yb, bb, Wy) {
        this._bindTexture(yb, bb?._outputTexture?.texture ?? null, Wy)
      }, cb.c.prototype.setTextureFromPostProcess = function(yb, bb) {
        this._engine.setTextureFromPostProcess(this._samplers[yb], bb, yb)
      }, cb.c.prototype.setTextureFromPostProcessOutput = function(yb, bb) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[yb], bb, yb)
      }, (0, By.e)("BABYLON.PostProcess", sy))
    }
  },
  40304: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => fy
    });
    var Uy = Wy(40281),
      hy = Wy(35886);
    class fy extends Uy.d {
      _gatherImports(yb, bb) {
        yb ? (this._webGPUReady = !0, bb.push(Promise.all([Wy.e(351).then((() => Wy(59997)))]))) : bb.push(Promise.all([Wy.e(352).then((() => Wy(60001)))])), super._gatherImports(yb, bb)
      }
      constructor(yb) {
        let bb = arguments.length > 2 ? arguments[2] : void 0;
        const Wy = {
          name: yb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || hy.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: fy.FragmentUrl,
          ...bb
        };
        Wy.engine || (Wy.engine = hy.c.LastCreatedEngine), super(Wy)
      }
    }
    fy.FragmentUrl = "pass";
    class Zy extends Uy.d {
      _gatherImports(yb, bb) {
        yb ? (this._webGPUReady = !0, bb.push(Promise.all([Wy.e(353).then((() => Wy(60010)))]))) : bb.push(Promise.all([Wy.e(354).then((() => Wy(60018)))])), super._gatherImports(yb, bb)
      }
      constructor(yb) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: yb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || hy.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Zy.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(yb) {
        if (!(yb < 0 || yb > 5)) switch (this._face = yb, this._face) {
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
    Zy.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);