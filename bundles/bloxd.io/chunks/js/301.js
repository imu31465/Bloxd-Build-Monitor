export const id = 301;
export const ids = [301];
export const modules = {
  40879: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => WY
    });
    var FY = DY(36552),
      AY = DY(36524),
      IY = DY(39596),
      RY = DY(39277),
      OY = DY(39065),
      gY = DY(38040),
      aY = DY(39255),
      vY = DY(39288),
      uY = DY(36539),
      sY = DY(39037),
      iY = DY(39231),
      yY = DY(39319);
    class QY {
      get renderList() {
        return this._renderList
      }
      set renderList(YY) {
        this._renderList !== YY && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), YY && (this._unObserveRenderList = (0, uY.j)(YY, this._renderListHasChanged)), this._renderList = YY)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(YY) {
        YY !== this._disableImageProcessing && (this._disableImageProcessing = YY, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(YY) {
        this._disableDepthPrePass = YY, this._renderingManager.disableDepthPrePass = YY
      }
      get name() {
        return this._name
      }
      set name(YY) {
        if (this._name !== YY) {
          if (this._name = YY, this._sceneUBOs)
            for (let YY = 0; YY < this._sceneUBOs.length; ++YY) this._sceneUBOs[YY].name = `Scene ubo #${YY} for ${this.name}`;
          if (this._scene)
            for (let YY = 0; YY < this._renderPassIds.length; ++YY) {
              const rY = this._renderPassIds[YY];
              this._engine._renderPassNames[rY] = `${this._name}#${YY}`
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
      setMaterialForRendering(YY, rY) {
        let DY;
        DY = Array.isArray(YY) ? YY : [YY];
        for (let FY = 0; FY < DY.length; ++FY)
          for (let YY = 0; YY < this.options.numPasses; ++YY) {
            let AY = DY[FY];
            DY[FY].XT && (AY = DY[FY].vFY), AY.setMaterialForRenderPass(this._renderPassIds[YY], void 0 !== rY ? Array.isArray(rY) ? rY[YY] : rY : void 0)
          }
      }
      _freezeActiveMeshes(YY) {
        this._freezeActiveMeshesCancel = (0, sY.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, YY)
            for (let YY = 0; YY < this._activeMeshes.length; YY++) this._activeMeshes.data[YY]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((YY, rY) => {
          this._freezeActiveMeshesCancel = null, rY ? (gY.d.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), YY && gY.d.Error(YY)) : (gY.d.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), YY && (gY.d.Error(YY), YY.stack && gY.d.Error(YY.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let YY = 0; YY < this._activeMeshes.length; YY++) this._activeMeshes.data[YY]._unFreeze();
        this._isFrozen = !1
      }
      constructor(YY, rY, DY) {
        this._unObserveRenderList = null, this._renderListHasChanged = (YY, rY) => {
          const DY = this._renderList ? this._renderList.length : 0;
          if (0 === rY && DY > 0 || 0 === DY)
            for (const FY of this._scene.meshes) FY._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new FY.e, this.onAfterRenderObservable = new FY.e, this.onBeforeRenderingManagerRenderObservable = new FY.e, this.onAfterRenderingManagerRenderObservable = new FY.e, this.onInitRenderingObservable = new FY.e, this.onFinishRenderingObservable = new FY.e, this.onFastPathRenderObservable = new FY.e, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new iY.f(256), this._activeBoundingBoxes = new iY.f(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = YY, this._scene = rY, this._engine = this._scene.ky(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...DY
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new vY.d(rY), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const YY of this._scene.lights) YY.getTypeID() === yY.e.LIGHTTYPEID_CLUSTERED_CONTAINER && YY.isSupported && YY._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let YY = 0; YY < this.options.numPasses; ++YY) this._engine.releaseRenderPassId(this._renderPassIds[YY]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let YY = 0; YY < this.options.numPasses; ++YY) this._renderPassIds[YY] = this._engine.createRenderPassId(`${this.name}#${YY}`)
      }
      _createSceneUBO(YY, rY) {
        const DY = this._scene.ky(),
          FY = new aY.b(DY, void 0, rY, YY, void 0, !1);
        return FY.addUniform("viewProjection", 16), rY && FY.addUniform("viewProjectionR", 16), FY.addUniform("view", 16), FY.addUniform("projection", 16), FY.addUniform("vEyePosition", 4), FY.addUniform("inverseProjection", 16), FY
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const YY = this._engine._currentRenderTarget,
          rY = !(!YY || !YY.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const YY = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${YY} for ${this.name}`, rY)), this._sceneUBOIsMultiview.push(rY)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== rY && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, rY), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = rY);
        const DY = this._sceneUBOs[this._currentSceneUBOIndex++];
        return DY.unbindEffect(), DY
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(YY) {
        this._refreshRate = YY, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(YY, rY) {
        this.prepareRenderList(), this.initRender(YY, rY);
        const DY = this._checkReadiness();
        return this.finishRender(), DY
      }
      prepareRenderList() {
        const YY = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let rY = 0; rY < this._waitingRenderList.length; rY++) {
              const DY = this._waitingRenderList[rY],
                FY = YY.getMeshById(DY);
              FY && this.renderList.push(FY)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const YY = this._scene.meshes;
          for (let rY = 0; rY < YY.length; rY++) {
            const DY = YY[rY];
            this.renderListPredicate(DY) && this.renderList.push(DY)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(YY, rY) {
        const DY = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), DY && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(DY.getViewMatrix(), DY.getProjectionMatrix(!0)), this._scene._activeCamera = DY, this._engine.setViewport(DY.rigParent ? DY.rigParent.viewport : DY.viewport, YY, rY)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const YY = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (YY.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), YY._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== YY.activeCamera && YY.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), YY.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[YY], this.onBeforeRenderObservable.notifyObservers(YY);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(YY);
        else {
          const rY = this._prepareRenderingManager(YY),
            DY = this._scene.getOutlineRenderer?.(),
            FY = DY?.enabled;
          DY && (DY.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(YY), this._renderingManager.render(this.customRenderFunction, rY, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(YY), DY && (DY.enabled = FY)
        }
        rY || this.onAfterRenderObservable.notifyObservers(YY), this._engine.currentRenderPassId = DY
      }
      _checkReadiness() {
        const YY = this._scene,
          rY = this._engine.currentRenderPassId;
        let DY = !0;
        YY.getViewMatrix() || YY.updateTransformMatrix();
        const FY = this.options.numPasses;
        for (let AY = 0; AY < FY && DY; AY++) {
          const rY = this.renderList ? this.renderList : YY.frameGraph ? YY.meshes : YY.getActiveMeshes().data,
            IY = this.renderList || YY.frameGraph ? rY.length : YY.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[AY], this.onBeforeRenderObservable.notifyObservers(AY);
          let RY = null,
            OY = IY;
          this.getCustomRenderList && (RY = this.getCustomRenderList(AY, rY, IY), RY && (OY = RY.length)), RY || (RY = rY), this.options.doNotChangeAspectRatio || YY.updateTransformMatrix(!0);
          for (let YY = 0; YY < OY && DY; ++YY) {
            const rY = RY[YY];
            if (!rY.isEnabled() || rY.isBlocked || !rY.isVisible || !rY.qm) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(rY, this.refreshRate, !0)) {
                DY = !1;
                continue
              }
            } else if (!rY.isReady(!0)) {
              DY = !1;
              continue
            }
            let FY = rY._edgesRenderer,
              AY = rY.hasThinInstances;
            if (rY.XT) {
              const YY = rY.vFY;
              YY.edgesShareWithInstances && YY._edgesRenderer?.isEnabled && (FY = YY._edgesRenderer, AY = !0)
            } else rY.aFY && rY.edgesShareWithInstances && (AY = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && FY?.isEnabled && (FY.isReady(AY) || (DY = !1))
          }
          if (this.renderParticles && YY.particlesEnabled) {
            const rY = this.particleSystemList || YY.YV;
            for (const YY of rY) YY.isReady() || (DY = !1)
          }
          if (this.renderSprites && YY.spritesEnabled) {
            const rY = this.spriteManagerList || YY.spriteManagers;
            if (rY)
              for (const FY of rY) YY.activeCamera && 0 === (FY.layerMask & YY.activeCamera.layerMask) || FY.isReady && !FY.isReady() && (DY = !1)
          }
          this.onAfterRenderObservable.notifyObservers(AY), FY > 1 && (YY.incrementRenderId(), YY.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = rY, DY
      }
      _prepareRenderingManager() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this._scene;
        let FY, AY, IY = null;
        const RY = this.renderList ? this.renderList : DY.frameGraph ? DY.meshes : DY.getActiveMeshes().data,
          OY = this.renderList || DY.frameGraph ? RY.length : DY.getActiveMeshes().length;
        if (this.getCustomRenderList && (IY = this.getCustomRenderList(YY, RY, OY)), IY) FY = IY.length, AY = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !rY && !this._engine.isWebGPU) return RY;
          this._defaultRenderListPrepared = !0, IY = RY, FY = OY, AY = !this.renderList || this.forceLayerMaskCheck
        }
        const gY = DY.activeCamera,
          aY = this.cameraForLOD ?? gY,
          vY = DY.getBoundingBoxRenderer?.();
        if (DY._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && vY) {
            vY.reset();
            for (let YY = 0; YY < this._activeBoundingBoxes.length; YY++) {
              const rY = this._activeBoundingBoxes.data[YY];
              vY.renderList.push(rY)
            }
          }
          return IY
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), vY && vY.reset(), this.renderMeshes) {
          const YY = DY.getRenderId(),
            rY = DY.getFrameId();
          for (let RY = 0; RY < FY; RY++) {
            const FY = IY[RY];
            if (FY && !FY.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(FY, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!FY.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let IY, RY;
              if (aY) {
                const YY = FY._internalAbstractMeshDataInfo._currentLOD.get(aY);
                YY && YY[1] === rY ? IY = YY[0] : (IY = DY.customLODSelector ? DY.customLODSelector(FY, aY) : FY.getLOD(aY), YY ? (YY[0] = IY, YY[1] = rY) : FY._internalAbstractMeshDataInfo._currentLOD.set(aY, [IY, rY]))
              } else IY = FY;
              if (!IY) continue;
              if (IY !== FY && 0 !== IY.billboardMode && IY.computeWorldMatrix(), IY._preActivateForIntermediateRendering(YY), RY = !(!AY || !gY) && 0 === (FY.layerMask & gY.layerMask), FY.isEnabled() && FY.isVisible && FY.qm && !RY) {
                if (this._activeMeshes.push(FY), IY._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, IY !== FY && IY._activate(YY, !0), this.enableBoundingBoxRendering && vY && vY._preActiveMesh(FY), FY._activate(YY, !0) && FY.qm.length) {
                  FY.XT ? FY._internalAbstractMeshDataInfo._actAsRegularMesh && (IY = FY) : IY._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, IY._internalAbstractMeshDataInfo._isActiveIntermediate = !0, DY._prepareSkeleton(IY);
                  for (let YY = 0; YY < IY.qm.length; YY++) {
                    const rY = IY.qm[YY];
                    this.enableBoundingBoxRendering && vY && vY._evaluateSubMesh(FY, rY), this._renderingManager.dispatch(rY, IY)
                  }
                }
                FY._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && vY && rY)
          for (let uY = 0; uY < vY.renderList.length; uY++) {
            const YY = vY.renderList.data[uY];
            this._activeBoundingBoxes.push(YY)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const YY = this.particleSystemList || DY.YV;
          for (let rY = 0; rY < YY.length; rY++) {
            const DY = YY[rY],
              FY = DY.emitter;
            DY.isStarted() && FY && (!FY.position || FY.isEnabled()) && this._renderingManager.dispatchParticles(DY)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return IY
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(YY, rY, DY, FY)
      }
      setRenderingAutoClearDepthStencil(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(YY, rY, DY, FY), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const YY = new QY(this.name, this._scene, this.options);
        return this.renderList && (YY.renderList = this.renderList.slice(0)), YY
      }
      dispose() {
        const YY = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          rY = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let DY = 0; DY < rY; DY++) {
          const rY = YY[DY];
          rY && void 0 !== rY.getMaterialForRenderPass(this.renderPassId) && rY.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const DY of this._sceneUBOs) DY.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === QY.REFRESHRATE_RENDER_ONCE && (this.refreshRate = QY.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    QY.REFRESHRATE_RENDER_ONCE = 0, QY.REFRESHRATE_RENDER_ONEVERYFRAME = 1, QY.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var oY = DY(39029);
    class WY extends IY.i {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(YY) {
        this._objectRenderer.renderListPredicate = YY
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(YY) {
        this._objectRenderer.renderList = YY
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(YY) {
        this._objectRenderer.particleSystemList = YY
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(YY) {
        this._objectRenderer.getCustomRenderList = YY
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(YY) {
        this._objectRenderer.renderParticles = YY
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(YY) {
        this._objectRenderer.renderSprites = YY
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(YY) {
        this._objectRenderer.enableBoundingBoxRendering = YY
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(YY) {
        this._objectRenderer.enableOutlineRendering = YY
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(YY) {
        this._objectRenderer.forceLayerMaskCheck = YY
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(YY) {
        this._objectRenderer.activeCamera = YY
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(YY) {
        this._objectRenderer.cameraForLOD = YY
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(YY) {
        this._objectRenderer.disableImageProcessing = YY
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(YY) {
        this._objectRenderer.customIsReadyFunction = YY
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(YY) {
        this._objectRenderer.customRenderFunction = YY
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(YY) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(YY)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(YY) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(YY)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(YY) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(YY)
      }
      set onClear(YY) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(YY)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(YY) {
        this._objectRenderer._waitingRenderList = YY
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
      setMaterialForRendering(YY, rY) {
        this._objectRenderer.setMaterialForRendering(YY, rY)
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
      set boundingBoxSize(YY) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(YY)) return;
        this._boundingBoxSize = YY;
        const rY = this.hT();
        rY && rY.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(YY, rY, DY) {
        let RY, OY, aY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          vY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          iY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : IY.i.TRILINEAR_SAMPLINGMODE,
          yY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          oY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          WY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          EY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          mY = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          VY = arguments.length > 13 ? arguments[13] : void 0,
          SY = arguments.length > 14 ? arguments[14] : void 0,
          lY = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          TY = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          eY = !0,
          NY = !1;
        if ("object" === typeof aY) {
          const YY = aY;
          aY = !!YY.generateMipMaps, vY = YY.doNotChangeAspectRatio ?? !0, uY = YY.type ?? 0, sY = !!YY.isCube, iY = YY.samplingMode ?? IY.i.TRILINEAR_SAMPLINGMODE, yY = YY.generateDepthBuffer ?? !0, oY = !!YY.generateStencilBuffer, WY = !!YY.isMulti, EY = YY.format ?? 5, mY = !!YY.delayAllocation, VY = YY.samples, SY = YY.creationFlags, lY = !!YY.noColorAttachment, TY = !!YY.useSRGBBuffer, RY = YY.colorAttachment, eY = YY.gammaSpace ?? eY, OY = YY.existingObjectRenderer, NY = !!YY.enableClusteredLights
        }
        if (super(null, DY, !aY, void 0, iY, void 0, void 0, void 0, void 0, EY), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new FY.e, this.onAfterUnbindObservable = new FY.e, this.onClearObservable = new FY.e, this.onResizeObservable = new FY.e, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = AY.r.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(DY = this.hT())) return;
        const BY = this.hT().ky();
        this._gammaSpace = eY, this._coordinatesMode = IY.i.PROJECTION_MODE, this.name = YY, this.isRenderTarget = !0, this._initialSizeParameter = rY, this._dontDisposeObjectRenderer = !!OY, this._processSizeParameter(rY), this._objectRenderer = OY ?? new QY(YY, DY, {
          numPasses: sY ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: vY,
          enableClusteredLights: NY
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const YY = this._scene;
          if (!this._disableEngineStages)
            for (const rY of YY._beforeRenderTargetClearStage) rY.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(BY) : this.skipInitialClear || BY.clear(this.clearColor ?? YY.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || YY.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const rY of YY._beforeRenderTargetDrawStage) rY.action(this, this._currentFaceIndex, this._currentLayer);
          BY._debugPushGroup && BY._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (BY._debugPopGroup && BY._debugPopGroup(), !this._disableEngineStages)
            for (const rY of this._scene._afterRenderTargetDrawStage) rY.action(this, this._currentFaceIndex, this._currentLayer);
          const YY = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const rY of this._scene._afterRenderTargetPostProcessStage) rY.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = YY), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), BY) : gY.d.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(BY) : this.skipInitialClear || BY.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = BY.onResizeObservable.add((() => {})), this._generateMipMaps = !!aY, this._doNotChangeAspectRatio = vY, WY || (this._renderTargetOptions = {
          generateMipMaps: aY,
          type: uY,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: yY,
          generateStencilBuffer: oY,
          samples: VY,
          creationFlags: SY,
          noColorAttachment: lY,
          useSRGBBuffer: TY,
          colorAttachment: RY,
          label: this.name
        }, this.samplingMode === IY.i.NEAREST_SAMPLINGMODE && (this.wrapU = IY.i.CLAMP_ADDRESSMODE, this.wrapV = IY.i.CLAMP_ADDRESSMODE), mY || (sY ? (this._renderTarget = DY.ky().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = IY.i.INVCUBIC_MODE, this._textureMatrix = AY.e.Identity()) : this._renderTarget = DY.ky().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== VY && (this.samples = VY)))
      }
      createDepthStencilTexture() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(YY, rY, DY, FY, AY, IY)
      }
      _processSizeParameter(YY) {
        if (YY.ratio) {
          this._sizeRatio = YY.ratio;
          const rY = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(rY.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(rY.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = YY
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(YY) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(YY))
      }
      addPostProcess(YY) {
        if (!this._postProcessManager) {
          const YY = this.hT();
          if (!YY) return;
          this._postProcessManager = new RY.e(YY), this._postProcesses = new Array
        }
        this._postProcesses.push(YY), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (YY)
            for (const YY of this._postProcesses) YY.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(YY) {
        if (!this._postProcesses) return;
        const rY = this._postProcesses.indexOf(YY); - 1 !== rY && (this._postProcesses.splice(rY, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(YY) {
        this._objectRenderer.refreshRate = YY
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
        const YY = this._size.layers;
        if (YY) return YY;
        const rY = this._size.depth;
        return rY || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(YY) {
        const rY = Math.max(1, this.getRenderSize() * YY);
        this.resize(rY)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(YY) {
        const rY = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const DY = this.hT();
        DY && (this._processSizeParameter(YY), this._renderTarget = rY ? DY.ky().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : DY.ky().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(YY, rY)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => DY(40891))).then((YY => this._dumpTools = YY))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const YY = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), YY
      }
      _render() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this.hT();
        if (!DY) return;
        void 0 !== this.useCameraPostProcesses && (YY = this.useCameraPostProcesses);
        const FY = DY.ky();
        if (FY._debugPushGroup && FY._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let AY = 0; AY < 6; AY++) this._renderToTarget(AY, YY, rY), DY.incrementRenderId(), DY.resetCachedMaterial();
          else this._renderToTarget(0, YY, rY);
        else
          for (let AY = 0; AY < this.getRenderLayers(); AY++) this._renderToTarget(0, YY, rY, AY), DY.incrementRenderId(), DY.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), FY._debugPopGroup && FY._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(YY, rY) {
        const DY = YY * rY,
          FY = (0, OY.n)(DY + 16384 / (128 + DY));
        return Math.min((0, OY.d)(YY), FY)
      }
      _bindFrameBuffer() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = this.hT();
        if (!DY) return;
        const FY = DY.ky();
        this._renderTarget && FY.bindFramebuffer(this._renderTarget, this.isCube ? YY : void 0, void 0, void 0, this.ignoreCameraViewport, 0, rY)
      }
      _unbindFrameBuffer(YY, rY) {
        this._renderTarget && YY.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(rY)
        }))
      }
      _prepareFrame(YY, rY, DY, FY) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(rY, DY) : FY && YY.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(rY, DY)
      }
      _renderToTarget(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AY = this.hT();
        if (!AY) return;
        const IY = AY.ky();
        this._currentFaceIndex = YY, this._currentLayer = FY, this._currentUseCameraPostProcess = rY, this._currentDumpForDebug = DY, this._prepareFrame(AY, YY, FY, rY), this._objectRenderer.render(YY + FY, !0), this._unbindFrameBuffer(IY, YY), this._texture && this.isCube && 5 === YY && IY.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(YY, rY, DY, FY)
      }
      setRenderingAutoClearDepthStencil(YY, rY) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(YY, rY)
      }
      clone() {
        const YY = this.getSize(),
          rY = new WY(this.name, YY, this.hT(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return rY.hasAlpha = this.hasAlpha, rY.level = this.level, rY.coordinatesMode = this.coordinatesMode, this.renderList && (rY.renderList = this.renderList.slice(0)), rY
      }
      serialize() {
        if (!this.name) return null;
        const YY = super.serialize();
        if (YY.renderTargetSize = this.getRenderSize(), YY.renderList = [], this.renderList)
          for (let rY = 0; rY < this.renderList.length; rY++) YY.renderList.push(this.renderList[rY].id);
        return YY
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.hT().ky().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const YY = this.hT();
        if (!YY) return;
        let rY = YY.customRenderTargets.indexOf(this);
        rY >= 0 && YY.customRenderTargets.splice(rY, 1);
        for (const DY of YY.cameras) rY = DY.customRenderTargets.indexOf(this), rY >= 0 && DY.customRenderTargets.splice(rY, 1);
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
    WY.REFRESHRATE_RENDER_ONCE = QY.REFRESHRATE_RENDER_ONCE, WY.REFRESHRATE_RENDER_ONEVERYFRAME = QY.REFRESHRATE_RENDER_ONEVERYFRAME, WY.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = QY.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(WY.prototype, "noPrePassRenderer") || Object.defineProperty(WY.prototype, "noPrePassRenderer", (0, oY.c)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40857: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY,
      f: () => vY
    });
    var FY = DY(39270),
      AY = DY(37493),
      IY = DY(36552),
      RY = DY(38991),
      OY = DY(39437);
    const gY = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class aY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gY;
        this._fullscreenViewport = new AY.b(0, 0, 1, 1);
        const DY = rY.positions ?? gY.positions,
          IY = rY.indices ?? gY.indices;
        this.engine = YY, this._vertexBuffers = {
          [FY.l.PositionKind]: new FY.l(YY, DY, FY.l.PositionKind, !1, !1, 2)
        }, this._indexBuffer = YY.createIndexBuffer(IY), this._indexBufferLength = IY.length, this._onContextRestoredObserver = YY.onContextRestoredObservable.add((() => {
          this._indexBuffer = YY.createIndexBuffer(IY);
          for (const YY in this._vertexBuffers) {
            this._vertexBuffers[YY]._rebuild()
          }
        }))
      }
      setViewport() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(YY)
      }
      bindBuffers(YY) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, YY)
      }
      applyEffectWrapper(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = rY, this.engine.stencilState.stencilTest = DY, this.engine.enableEffect(YY.drawWrapper), this.bindBuffers(YY.effect), YY.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(YY) {
        return void 0 !== YY.renderTarget
      }
      render(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!YY.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const DY = null === rY ? null : this._isRenderTargetTexture(rY) ? rY.renderTarget : rY;
        DY && this.engine.bindFramebuffer(DY), this.applyEffectWrapper(YY), this.draw(), DY && this.engine.unBindFramebuffer(DY), this.restoreStates()
      }
      dispose() {
        const YY = this._vertexBuffers[FY.l.PositionKind];
        YY && (YY.dispose(), delete this._vertexBuffers[FY.l.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class vY {
      static RegisterShaderCodeProcessing(YY, rY) {
        rY ? vY._CustomShaderCodeProcessing[YY ?? ""] = rY : delete vY._CustomShaderCodeProcessing[YY ?? ""]
      }
      static _GetShaderCodeProcessing(YY) {
        return vY._CustomShaderCodeProcessing[YY] ?? vY._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(YY) {
        this.options.name = YY
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
      set effect(YY) {
        this._drawWrapper.effect = YY
      }
      constructor(YY) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new IY.e(void 0, !0), this.onApplyObservable = new IY.e, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...YY,
          name: YY.name || "effectWrapper",
          engine: YY.engine,
          uniforms: YY.uniforms || YY.uniformNames || [],
          uniformNames: void 0,
          samplers: YY.samplers || YY.samplerNames || [],
          samplerNames: void 0,
          attributeNames: YY.attributeNames || ["position"],
          uniformBuffers: YY.uniformBuffers || [],
          defines: YY.defines || "",
          useShaderStore: YY.useShaderStore || !1,
          vertexUrl: YY.vertexUrl || YY.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: YY.fragmentShader || "pass",
          indexParameters: YY.indexParameters,
          blockCompilation: YY.blockCompilation || !1,
          shaderLanguage: YY.shaderLanguage || 0,
          onCompiled: YY.onCompiled || void 0,
          extraInitializations: YY.extraInitializations || void 0,
          extraInitializationsAsync: YY.extraInitializationsAsync || void 0,
          useAsPostProcess: YY.useAsPostProcess ?? !1,
          allowEmptySourceTexture: YY.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), YY.vertexUrl || YY.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new OY.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const rY = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, rY, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          FY = arguments.length > 2 ? arguments[2] : void 0,
          AY = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, AY && this._importPromises.push(...AY);
        const IY = this.options.engine.isWebGPU && !vY.ForceGLSL;
        this._gatherImports(IY, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(IY && this._webGPUReady ? DY.e(356).then((() => DY(60446))) : DY.e(345).then((() => DY(60220)))), void 0 !== FY && FY(IY, this._importPromises), IY && this._webGPUReady && (this.options.shaderLanguage = 1), YY || this.updateEffect(rY)
      }
      updateEffect() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          OY = arguments.length > 6 ? arguments[6] : void 0,
          gY = arguments.length > 7 ? arguments[7] : void 0;
        const aY = vY._GetShaderCodeProcessing(this.name);
        if (aY?.defineCustomBindings) {
          const FY = rY?.slice() ?? [];
          FY.push(...this.options.uniforms);
          const AY = DY?.slice() ?? [];
          AY.push(...this.options.samplers), YY = aY.defineCustomBindings(this.name, YY, FY, AY), rY = FY, DY = AY
        }
        this.options.defines = YY || "";
        const uY = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let sY;
        sY = this.options.extraInitializationsAsync ? async () => {
          await (uY?.()), await this.options.extraInitializationsAsync()
        }: uY, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: OY ?? this._shaderPath.vertex,
          fragment: gY ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: rY || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: DY || this.options.samplers,
          defines: null !== YY ? YY : "",
          fallbacks: null,
          onCompiled: AY ?? this.options.onCompiled,
          onError: IY ?? null,
          indexParameters: FY || this.options.indexParameters,
          processCodeAfterIncludes: aY?.processCodeAfterIncludes ? (YY, rY) => aY.processCodeAfterIncludes(this.name, YY, rY) : null,
          processFinalCode: aY?.processFinalCode ? (YY, rY) => aY.processFinalCode(this.name, YY, rY) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: sY
        }, this.options.engine) : this._drawWrapper.effect = new RY.e(this._shaderPath, this.options.attributeNames, rY || this.options.uniforms, DY || this.options.samplerNames, this.options.engine, YY, void 0, AY || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, sY), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !YY && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), vY._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.ky().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    vY.ForceGLSL = !1, vY._CustomShaderCodeProcessing = {}
  },
  40891: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Dispose: () => EY,
      DumpData: () => WY,
      DumpDataAsync: () => oY,
      DumpFramebuffer: () => QY,
      DumpTools: () => mY,
      EncodeImageAsync: () => yY,
      RegisterDumpTools: () => SY
    });
    var FY = DY(39127),
      AY = DY(40857),
      IY = DY(39219),
      RY = DY(36559),
      OY = DY(36546),
      gY = DY(38040),
      aY = DY(39174),
      vY = DY(39131);
    let uY = null;
    async function sY() {
      return uY || (uY = async function() {
        const YY = OY.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        YY instanceof OffscreenCanvas && gY.d.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: rY
        } = await Promise.resolve().then((() => DY(38982)));
        if (!rY.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const FY = new rY(YY, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        OY.d.Instances.pop(), OY.d.OnEnginesDisposedObservable.add((YY => {
          FY && YY !== FY && !FY.CrY && 0 === OY.d.Instances.length && EY()
        })), FY.getCaps().parallelShaderCompile = void 0;
        const IY = new AY.c(FY),
          {
            passPixelShader: RY
          } = await DY.e(364).then((() => DY(60500))),
          aY = new AY.f({
            engine: FY,
            name: RY.name,
            fragmentShader: RY.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: YY,
          dumpEngine: {
            engine: FY,
            renderer: IY,
            wrapper: aY
          }
        }
      }()), await uY
    }
    let iY = (() => {
      var YY;
      let rY, DY = [];
      return YY = class {
        static async EncodeImageAsync(YY, rY, DY, FY, AY, RY) {
          const OY = await sY(),
            gY = OY.dumpEngine;
          gY.engine.setSize(rY, DY, !0);
          const aY = gY.engine.createRawTexture(YY, rY, DY, 5, !1, !AY, 1);
          return gY.renderer.setViewport(), gY.renderer.applyEffectWrapper(gY.wrapper), gY.wrapper.effect._bindTexture("textureSampler", aY), gY.renderer.draw(), aY.dispose(), await new Promise(((YY, rY) => {
            IY.i.ToBlob(OY.canvas, (DY => {
              DY ? YY(DY) : rY(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), FY, RY)
          }))
        }
      }, (() => {
        const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [vY.j], (0, FY.i)(YY, null, rY, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: YY => "EncodeImageAsync" in YY,
            get: YY => YY.EncodeImageAsync
          },
          metadata: AY
        }, null, DY), AY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AY
        }), (0, FY.j)(YY, DY)
      })(), YY
    })();
    const yY = iY.EncodeImageAsync;
    async function QY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        IY = arguments.length > 5 ? arguments[5] : void 0,
        RY = arguments.length > 6 ? arguments[6] : void 0;
      const OY = await DY.readPixels(0, 0, YY, rY);
      WY(YY, rY, new Uint8Array(OY.buffer), FY, AY, IY, !0, void 0, RY)
    }
    async function oY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AY = arguments.length > 4 ? arguments[4] : void 0,
        OY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        vY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uY = arguments.length > 7 ? arguments[7] : void 0;
      if (DY instanceof Float32Array) {
        const YY = new Uint8Array(DY.length);
        let rY = DY.length;
        for (; rY--;) {
          const FY = DY[rY];
          YY[rY] = Math.round(255 * (0, RY.Clamp)(FY))
        }
        DY = YY
      }
      const sY = await iY.EncodeImageAsync(DY, YY, rY, FY, OY, uY);
      void 0 !== AY && IY.i.DownloadBlob(sY, AY), sY.type !== FY && gY.d.Warn(`DumpData: The requested mimeType '${FY}' is not supported. The result has mimeType '${sY.type}' instead.`);
      const yY = await sY.arrayBuffer();
      return vY ? yY : `data:${FY};base64,${(0,aY.h)(yY)}`
    }

    function WY(YY, rY, DY, FY) {
      let AY = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== AY || FY || (AY = ""), oY(YY, rY, DY, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", AY, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((YY => {
        FY && FY(YY)
      }))
    }

    function EY() {
      uY && (uY?.then((YY => {
        YY.canvas instanceof HTMLCanvasElement && YY.canvas.remove(), YY.dumpEngine && (YY.dumpEngine.engine.dispose(), YY.dumpEngine.renderer.dispose(), YY.dumpEngine.wrapper.dispose())
      })), uY = null)
    }
    const mY = {
      DumpData: WY,
      DumpDataAsync: oY,
      DumpFramebuffer: QY,
      Dispose: EY
    };
    let VY = !1;

    function SY() {
      if (VY) return;
      VY = !0;
      IY.i.DumpData = WY, IY.i.DumpDataAsync = oY, IY.i.DumpFramebuffer = QY
    }
  },
  40871: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => iY,
      c: () => yY,
      g: () => QY
    });
    var FY = DY(39596),
      AY = DY(40879),
      IY = DY(39127),
      RY = DY(40853),
      OY = DY(39144),
      gY = DY(40886),
      aY = DY(39131);
    class vY extends RY.d {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(YY, rY) {
        let DY = arguments.length > 4 ? arguments[4] : void 0;
        const FY = {
          size: "number" === typeof rY ? rY : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: DY,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...rY
        };
        super(YY, gY.g.FragmentUrl, {
          effectWrapper: "number" !== typeof rY && rY.effectWrapper ? void 0 : new gY.g(YY, DY, FY),
          ...FY
        })
      }
      static _Parse(YY, rY, DY, FY) {
        return OY.b.Parse((() => new vY(YY.name, YY.options, rY, YY.renderTargetSamplingMode, YY._engine, YY.reusable)), YY, DY, FY)
      }
    }(() => {
      var YY;
      let rY, DY = RY.d,
        FY = [];
      YY = class extends DY {
        get face() {
          return this._effectWrapper.face
        }
        set face(YY) {
          this._effectWrapper.face = YY
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(YY, rY) {
          let DY = arguments.length > 4 ? arguments[4] : void 0;
          const AY = {
            size: "number" === typeof rY ? rY : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: DY,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...rY
          };
          super(YY, gY.g.FragmentUrl, {
            effectWrapper: "number" !== typeof rY && rY.effectWrapper ? void 0 : new gY.d(YY, DY, AY),
            ...AY
          }), (0, IY.j)(this, FY)
        }
        static _Parse(rY, DY, FY, AY) {
          return OY.b.Parse((() => new YY(rY.name, rY.options, DY, rY.renderTargetSamplingMode, rY._engine, rY.reusable)), rY, FY, AY)
        }
      }, (() => {
        const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(DY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, aY.M)()], (0, IY.i)(YY, null, rY, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: YY => "face" in YY,
            get: YY => YY.face
          },
          metadata: AY
        }, null, FY), AY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AY
        })
      })()
    })();
    var uY = DY(36559),
      sY = DY(39184);

    function iY(YY, rY, DY, FY, AY, IY, OY, gY) {
      const aY = rY.ky();
      return rY.isReady = !1, AY = AY ?? rY.samplingMode, FY = FY ?? rY.type, IY = IY ?? rY.format, OY = OY ?? rY.width, gY = gY ?? rY.height, -1 === FY && (FY = 0), new Promise((vY => {
        const uY = new RY.d("postprocess", YY, null, null, 1, null, AY, aY, !1, void 0, FY, void 0, null, !1, IY);
        uY.externalTextureSamplerBinding = !0;
        const sY = aY.createRenderTargetTexture({
          width: OY,
          height: gY
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: AY,
          type: FY,
          format: IY
        });
        uY.onEffectCreatedObservable.addOnce((YY => {
          YY.executeWhenCompiled((() => {
            uY.onApply = YY => {
              YY._bindTexture("textureSampler", rY), YY.setFloat2("scale", 1, 1)
            }, DY.postProcessManager.directRender([uY], sY, !0), aY.restoreDefaultFramebuffer(), aY._releaseTexture(rY), uY && uY.dispose(), sY._swapAndDie(rY), rY.type = FY, rY.format = 5, rY.isReady = !0, vY(rY)
          }))
        }))
      }))
    }
    async function yY(YY, rY, IY) {
      let OY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        gY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        aY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        vY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(YY) {
        if (YY.isReady()) return;
        if (YY.loadingError) throw new Error(YY.errorObject?.message || `Texture ${YY.name} errored while loading.`);
        const rY = YY.onLoadObservable;
        if (rY) return await new Promise((YY => rY.addOnce((() => YY()))));
        const DY = YY._texture?.onLoadedObservable;
        if (DY) return await new Promise((YY => DY.addOnce((() => YY()))));
        throw new Error(`Cannot determine readiness of texture ${YY.name}.`)
      }(YY);
      const sY = YY.getInternalTexture(),
        iY = YY.is3D || !!sY?.is3D,
        {
          width: yY,
          height: QY
        } = YY.getSize(),
        oY = rY ?? yY,
        WY = IY ?? QY;
      if (aY || iY || function(YY) {
          switch (YY) {
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
        }(YY.textureFormat) || oY !== yY || WY !== QY) {
        if (YY.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${aY?"RTT":"compression"} is not supported.`);
        return await async function(YY, rY, IY, OY, gY) {
          let aY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const vY = YY.hT(),
            uY = vY.ky(),
            sY = YY.getInternalTexture(),
            iY = YY.is3D || !!sY?.is3D;
          let yY;
          if (uY.isWebGPU ? iY ? await DY.e(360).then((() => DY(60480))) : YY.isCube ? await DY.e(361).then((() => DY(60486))) : await DY.e(362).then((() => DY(60490))) : iY ? await DY.e(357).then((() => DY(60466))) : YY.isCube ? await DY.e(358).then((() => DY(60471))) : await DY.e(359).then((() => DY(60475))), iY) yY = new RY.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: FY.i.NEAREST_NEAREST_MIPNEAREST,
            engine: uY,
            shaderLanguage: uY.isWebGPU ? 1 : 0
          });
          else if (YY.isCube) {
            const YY = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            yY = new RY.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: FY.i.NEAREST_NEAREST_MIPNEAREST,
              engine: uY,
              defines: YY[OY],
              shaderLanguage: uY.isWebGPU ? 1 : 0
            })
          } else yY = new RY.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: FY.i.NEAREST_NEAREST_MIPNEAREST,
            engine: uY,
            shaderLanguage: uY.isWebGPU ? 1 : 0
          });
          await new Promise((YY => {
            yY.onEffectCreatedObservable.addOnce((rY => {
              rY.executeWhenCompiled((() => {
                YY(0)
              }))
            }))
          }));
          const QY = new AY.c("temp", {
            width: rY,
            height: IY
          }, vY, !1);
          yY.onApply = function(rY) {
            rY.setTexture("textureSampler", YY), rY.setFloat("lod", gY), rY.setInt("gamma", YY.gammaSpace ? 1 : 0), iY && rY.setFloat("slice", aY)
          };
          try {
            if (QY.renderTarget && sY) {
              const DY = sY.samplingMode;
              0 !== gY ? YY.updateSamplingMode(FY.i.NEAREST_NEAREST_MIPNEAREST) : YY.updateSamplingMode(FY.i.NEAREST_NEAREST), vY.postProcessManager.directRender([yY], QY.renderTarget, !0), YY.updateSamplingMode(DY);
              const AY = await uY.readPixels(0, 0, rY, IY),
                RY = new Uint8Array(AY.buffer, AY.byteOffset, AY.byteLength);
              return uY.unBindFramebuffer(QY.renderTarget), RY
            }
            throw Error("Render to texture failed.")
          } finally {
            QY.dispose(), yY.dispose()
          }
        }(YY, oY, WY, OY, gY, vY)
      }
      let EY = await YY.readPixels(OY, gY);
      if (!EY) throw new Error(`Failed to read pixels from texture ${YY.name}.`);
      if (EY instanceof Float32Array) {
        const YY = new Uint8Array(EY.length);
        let rY = EY.length;
        for (; rY--;) {
          const DY = EY[rY];
          YY[rY] = Math.round(255 * (0, uY.Clamp)(DY))
        }
        EY = YY
      }
      const mY = oY * WY,
        VY = 4 * mY;
      if (EY.length !== VY) {
        const YY = 0 === mY ? 0 : EY.length / mY;
        if (1 === YY || 2 === YY || 3 === YY) {
          const rY = new Uint8Array(VY);
          for (let DY = 0, FY = 0, AY = 0; DY < mY; DY++, AY += 4) {
            const DY = EY[FY++];
            if (1 === YY) {
              rY[AY] = DY, rY[AY + 1] = DY, rY[AY + 2] = DY, rY[AY + 3] = 255;
              continue
            }
            const IY = EY[FY++];
            2 !== YY ? (rY[AY] = DY, rY[AY + 1] = IY, rY[AY + 2] = EY[FY++], rY[AY + 3] = 255) : (rY[AY] = DY, rY[AY + 1] = IY, rY[AY + 2] = 0, rY[AY + 3] = 255)
          }
          return rY
        }
      }
      return EY
    }
    const QY = {
      CreateResizedCopy: function(YY, rY, DY) {
        let IY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const RY = YY.hT(),
          OY = RY.ky(),
          gY = new AY.c("resized" + YY.name, {
            width: rY,
            height: DY
          }, RY, !YY.noMipmap, !0, YY._texture.type, !1, YY.samplingMode, !1);
        gY.wrapU = YY.wrapU, gY.wrapV = YY.wrapV, gY.uOffset = YY.uOffset, gY.vOffset = YY.vOffset, gY.uScale = YY.uScale, gY.vScale = YY.vScale, gY.uAng = YY.uAng, gY.vAng = YY.vAng, gY.wAng = YY.wAng, gY.coordinatesIndex = YY.coordinatesIndex, gY.level = YY.level, gY.anisotropicFilteringLevel = YY.anisotropicFilteringLevel, gY._texture.isReady = !1, YY.wrapU = FY.i.CLAMP_ADDRESSMODE, YY.wrapV = FY.i.CLAMP_ADDRESSMODE;
        const aY = new vY("pass", 1, null, IY ? FY.i.BILINEAR_SAMPLINGMODE : FY.i.NEAREST_SAMPLINGMODE, OY, !1, 0);
        return aY.externalTextureSamplerBinding = !0, aY.onEffectCreatedObservable.addOnce((rY => {
          rY.executeWhenCompiled((() => {
            aY.onApply = function(rY) {
              rY.setTexture("textureSampler", YY)
            };
            const rY = gY.renderTarget;
            rY && (RY.postProcessManager.directRender([aY], rY), OY.unBindFramebuffer(rY), gY.disposeFramebufferObjects(), aY.dispose(), gY.getInternalTexture().isReady = !0)
          }))
        })), gY
      },
      ApplyPostProcess: iY,
      ToHalfFloat: sY.k,
      FromHalfFloat: sY.c,
      GetTextureDataAsync: yY
    }
  },
  40853: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => yY
    });
    var FY = DY(39127),
      AY = DY(39231),
      IY = DY(36552),
      RY = DY(36524),
      OY = DY(38991),
      gY = DY(39131),
      aY = DY(39144),
      vY = DY(36569),
      uY = DY(39041),
      sY = DY(39065),
      iY = DY(40857);
    let yY = (() => {
        var YY;
        let rY, OY, uY, yY, QY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY = [],
          HY = [],
          zY = [],
          ZY = [],
          CY = [],
          fY = [],
          jY = [],
          hY = [],
          dY = [],
          JY = [],
          MY = [],
          wY = [],
          bY = [],
          XY = [],
          qY = [],
          pY = [],
          kY = [],
          GY = [],
          xY = [],
          nY = [],
          PY = [],
          UY = [],
          LY = [],
          tY = [],
          Yr = [],
          rr = [],
          Dr = [],
          Fr = [],
          Ar = [];
        return YY = class {
          static get ForceGLSL() {
            return iY.f.ForceGLSL
          }
          static set ForceGLSL(YY) {
            iY.f.ForceGLSL = YY
          }
          static RegisterShaderCodeProcessing(YY, rY) {
            iY.f.RegisterShaderCodeProcessing(YY, rY)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(YY) {
            this._effectWrapper.name = YY
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(YY) {
            this._effectWrapper.alphaMode = YY
          }
          get samples() {
            return this._samples
          }
          set samples(YY) {
            this._samples = Math.min(YY, this._engine.getCaps().maxMSAASamples), this._textures.forEach((YY => {
              YY.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(YY) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), YY && (this._onActivateObserver = this.onActivateObservable.add(YY))
          }
          set onSizeChanged(YY) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(YY)
          }
          set onApply(YY) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(YY)
          }
          set onBeforeRender(YY) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(YY)
          }
          set onAfterRender(YY) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(YY)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(YY) {
            this._forcedOutputTexture = YY
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.Dk
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.p_(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(rY, DY, OY, gY, aY, vY) {
            let uY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              sY = arguments.length > 7 ? arguments[7] : void 0,
              yY = arguments.length > 8 ? arguments[8] : void 0,
              QY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              WY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              EY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              mY = arguments.length > 12 ? arguments[12] : void 0,
              VY = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              SY = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              lY = arguments.length > 15 ? arguments[15] : void 0,
              TY = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, FY.j)(this, KY), null), this.uniqueId = (0, FY.j)(this, HY, void 0), this.width = ((0, FY.j)(this, zY), (0, FY.j)(this, ZY, -1)), this.height = ((0, FY.j)(this, CY), (0, FY.j)(this, fY, -1)), this.nodeMaterialSource = ((0, FY.j)(this, jY), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, FY.j)(this, hY, void 0), this.clearColor = ((0, FY.j)(this, dY), (0, FY.j)(this, JY, void 0)), this.autoClear = ((0, FY.j)(this, MY), (0, FY.j)(this, wY, !0)), this.forceAutoClearInAlphaMode = ((0, FY.j)(this, bY), (0, FY.j)(this, XY, !1)), this.alphaConstants = ((0, FY.j)(this, qY), (0, FY.j)(this, pY, void 0)), this.animations = ((0, FY.j)(this, kY), []), this.enablePixelPerfectMode = (0, FY.j)(this, GY, !1), this.forceFullscreenViewport = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, !0)), this.inspectableCustomProperties = (0, FY.j)(this, PY), this.scaleMode = (0, FY.j)(this, UY, 1), this.alwaysForcePOT = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, !1)), this._samples = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, 1)), this.adaptScaleToCurrentViewport = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, !1)), this.doNotSerialize = ((0, FY.j)(this, Ar), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new AY.f(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new RY.q(1, 1), this._texelSize = RY.q.Zero(), this.onActivateObservable = new IY.e, this.onSizeChangedObservable = new IY.e, this.onApplyObservable = new IY.e, this.onBeforeRenderObservable = new IY.e, this.onAfterRenderObservable = new IY.e, this.wT = new IY.e, oY();
            let eY, NY = 1,
              BY = null;
            if (OY && !Array.isArray(OY)) {
              const YY = OY;
              OY = YY.uniforms ?? null, gY = YY.samplers ?? null, NY = YY.size ?? 1, vY = YY.camera ?? null, uY = YY.samplingMode ?? 1, sY = YY.engine, yY = YY.reusable, QY = Array.isArray(YY.defines) ? YY.defines.join("\n") : YY.defines ?? null, WY = YY.textureType ?? 0, EY = YY.vertexUrl ?? "postprocess", mY = YY.indexParameters, VY = YY.blockCompilation ?? !1, SY = YY.textureFormat ?? 5, lY = YY.shaderLanguage ?? 0, BY = YY.uniformBuffers ?? null, TY = YY.extraInitializations, eY = YY.effectWrapper
            } else aY && (NY = "number" === typeof aY ? aY : {
              width: aY.width,
              height: aY.height
            });
            if (this._useExistingThinPostProcess = !!eY, this._effectWrapper = eY ?? new iY.f({
                name: rY,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: DY,
                engine: sY || vY?.hT().ky(),
                uniforms: OY,
                samplers: gY,
                uniformBuffers: BY,
                defines: QY,
                vertexUrl: EY,
                indexParameters: mY,
                blockCompilation: !0,
                shaderLanguage: lY,
                extraInitializations: void 0
              }), this.name = rY, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != vY ? (this.Dk = vY, this._scene = vY.hT(), vY.attachPostProcess(this), this._engine = this._scene.ky(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : sY && (this._engine = sY, this._engine.postProcesses.push(this)), this._options = NY, this.renderTargetSamplingMode = uY || 1, this._reusable = yY || !1, this._textureType = WY, this._textureFormat = SY, this._shaderLanguage = lY || 0, this._samplers = gY || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = DY, this._vertexUrl = EY, this._parameters = OY || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = BY || [], this._indexParameters = mY, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const rY = [];
              this._gatherImports(this._engine.isWebGPU && !YY.ForceGLSL, rY), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(VY, QY, TY, rY)
            }
          }
          _gatherImports() {
            let YY = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? YY.push(Promise.all([DY.e(356).then((() => DY(60446)))])) : YY.push(Promise.all([DY.e(345).then((() => DY(60220)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          ky() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(YY) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = YY, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new AY.f(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FY = arguments.length > 3 ? arguments[3] : void 0,
              AY = arguments.length > 4 ? arguments[4] : void 0,
              IY = arguments.length > 5 ? arguments[5] : void 0,
              RY = arguments.length > 6 ? arguments[6] : void 0,
              OY = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(YY, rY, DY, FY, AY, IY, RY, OY), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let AY = 0; AY < this._textureCache.length; AY++)
              if (this._textureCache[AY].texture.width === YY.width && this._textureCache[AY].texture.height === YY.height && this._textureCache[AY].postProcessChannel === DY && this._textureCache[AY].texture._generateDepthBuffer === rY.generateDepthBuffer && this._textureCache[AY].texture.samples === rY.samples) return this._textureCache[AY].texture;
            const FY = this._engine.createRenderTargetTexture(YY, rY);
            return this._textureCache.push({
              texture: FY,
              postProcessChannel: DY,
              lastUsedRenderId: -1
            }), FY
          }
          _flushTextureCache() {
            const YY = this._renderId;
            for (let rY = this._textureCache.length - 1; rY >= 0; rY--)
              if (YY - this._textureCache[rY].lastUsedRenderId > 100) {
                let YY = !1;
                for (let DY = 0; DY < this._textures.length; DY++)
                  if (this._textures.data[DY] === this._textureCache[rY].texture) {
                    YY = !0;
                    break
                  } YY || (this._textureCache[rY].texture.dispose(), this._textureCache.splice(rY, 1))
              }
          }
          resize(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = YY, this.height = rY;
            let IY = null;
            if (DY)
              for (let gY = 0; gY < DY._postProcesses.length; gY++)
                if (null !== DY._postProcesses[gY]) {
                  IY = DY._postProcesses[gY];
                  break
                } const RY = {
                width: this.width,
                height: this.height
              },
              OY = {
                generateMipMaps: FY,
                generateDepthBuffer: AY || IY === this,
                generateStencilBuffer: (AY || IY === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(RY, OY, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(RY, OY, 1)), this._texelSize.p_(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let YY;
            if (this._shareOutputWithPostProcess) YY = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) YY = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let rY;
              YY = this.inputTexture;
              for (let DY = 0; DY < this._textureCache.length; DY++)
                if (this._textureCache[DY].texture === YY) {
                  rY = this._textureCache[DY];
                  break
                } rY && (rY.lastUsedRenderId = this._renderId)
            }
            return YY
          }
          activate(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              DY = arguments.length > 2 ? arguments[2] : void 0;
            const FY = null === YY || void 0 !== YY.cameraRigMode ? YY || this.Dk : null,
              AY = FY?.hT() ?? YY,
              IY = AY.ky(),
              RY = IY.getCaps().maxTextureSize,
              OY = (rY ? rY.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              gY = (rY ? rY.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let aY = this._options.width || OY,
              vY = this._options.height || gY;
            const uY = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let iY = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const YY = IY.currentViewport;
                YY && (aY *= YY.width, vY *= YY.height)
              }(uY || this.alwaysForcePOT) && (this._options.width || (aY = IY.needPOTTextures ? (0, sY.f)(aY, RY, this.scaleMode) : aY), this._options.height || (vY = IY.needPOTTextures ? (0, sY.f)(vY, RY, this.scaleMode) : vY)), this.width === aY && this.height === vY && (iY = this._getTarget()) || this.resize(aY, vY, FY, uY, DY), this._textures.forEach((YY => {
                YY.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(YY, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return iY || (iY = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.p_(OY / aY, gY / vY), this._engine.bindFramebuffer(iY, 0, OY, gY, this.forceFullscreenViewport)) : (this._scaleRatio.p_(1, 1), this._engine.bindFramebuffer(iY, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(FY), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : AY.clearColor, AY._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), iY
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
            let YY;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.ky().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), YY = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", YY?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let YY = this._textureCache.length - 1; YY >= 0; YY--) this._textureCache[YY].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(YY) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = YY.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(YY) {
            let rY;
            if (YY = YY || this.Dk, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (rY = this._parentContainer.postProcesses.indexOf(this), rY > -1 && this._parentContainer.postProcesses.splice(rY, 1), this._parentContainer = null), rY = this._engine.postProcesses.indexOf(this), -1 !== rY && this._engine.postProcesses.splice(rY, 1), this.wT.notifyObservers(), YY) {
              if (YY.detachPostProcess(this), rY = YY._postProcesses.indexOf(this), 0 === rY && YY._postProcesses.length > 0) {
                const YY = this.Dk._getFirstPostProcess();
                YY && YY.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const YY = aY.b.Serialize(this),
              rY = this.getCamera() || this._scene && this._scene.activeCamera;
            return YY.customType = "BABYLON." + this.getClassName(), YY.cameraId = rY ? rY.id : null, YY.reusable = this._reusable, YY.textureType = this._textureType, YY.fragmentUrl = this._fragmentUrl, YY.parameters = this._parameters, YY.samplers = this._samplers, YY.uniformBuffers = this._uniformBuffers, YY.options = this._options, YY.defines = this._postProcessDefines, YY.textureFormat = this._textureFormat, YY.vertexUrl = this._vertexUrl, YY.indexParameters = this._indexParameters, YY
          }
          clone() {
            const rY = this.serialize();
            rY._engine = this._engine, rY.cameraId = null;
            const DY = YY.Parse(rY, this._scene, "");
            return DY ? (DY.onActivateObservable = this.onActivateObservable.clone(), DY.onSizeChangedObservable = this.onSizeChangedObservable.clone(), DY.onApplyObservable = this.onApplyObservable.clone(), DY.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), DY.onAfterRenderObservable = this.onAfterRenderObservable.clone(), DY._prePassEffectConfiguration = this._prePassEffectConfiguration, DY) : null
          }
          static Parse(YY, rY, DY) {
            const FY = (0, vY.e)(YY.customType);
            if (!FY || !FY._Parse) return null;
            const AY = rY ? rY.getCameraById(YY.cameraId) : null;
            return FY._Parse(YY, AY, rY, DY)
          }
          static _Parse(rY, DY, FY, AY) {
            return aY.b.Parse((() => new YY(rY.name, rY.fragmentUrl, rY.parameters, rY.samplers, rY.options, DY, rY.renderTargetSamplingMode, rY._engine, rY.reusable, rY.defines, rY.textureType, rY.vertexUrl, rY.indexParameters, !1, rY.textureFormat)), rY, FY, AY)
          }
        }, (() => {
          const DY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rY = [(0, gY.M)()], OY = [(0, gY.M)()], uY = [(0, gY.M)()], yY = [(0, gY.M)()], QY = [(0, gY.M)()], WY = [(0, gY.s)()], EY = [(0, gY.M)()], mY = [(0, gY.M)()], VY = [(0, gY.M)()], SY = [(0, gY.M)()], lY = [(0, gY.M)()], TY = [(0, gY.M)()], eY = [(0, gY.M)()], NY = [(0, gY.M)()], BY = [(0, gY.M)("samples")], cY = [(0, gY.M)()], (0, FY.i)(YY, null, OY, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: YY => "name" in YY,
              get: YY => YY.name
            },
            metadata: DY
          }, null, KY), (0, FY.i)(YY, null, VY, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "alphaMode" in YY,
              get: YY => YY.alphaMode
            },
            metadata: DY
          }, null, KY), (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: YY => "uniqueId" in YY,
              get: YY => YY.uniqueId,
              set: (YY, rY) => {
                YY.uniqueId = rY
              }
            },
            metadata: DY
          }, HY, zY), (0, FY.i)(null, null, uY, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: YY => "width" in YY,
              get: YY => YY.width,
              set: (YY, rY) => {
                YY.width = rY
              }
            },
            metadata: DY
          }, ZY, CY), (0, FY.i)(null, null, yY, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: YY => "height" in YY,
              get: YY => YY.height,
              set: (YY, rY) => {
                YY.height = rY
              }
            },
            metadata: DY
          }, fY, jY), (0, FY.i)(null, null, QY, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "renderTargetSamplingMode" in YY,
              get: YY => YY.renderTargetSamplingMode,
              set: (YY, rY) => {
                YY.renderTargetSamplingMode = rY
              }
            },
            metadata: DY
          }, hY, dY), (0, FY.i)(null, null, WY, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "clearColor" in YY,
              get: YY => YY.clearColor,
              set: (YY, rY) => {
                YY.clearColor = rY
              }
            },
            metadata: DY
          }, JY, MY), (0, FY.i)(null, null, EY, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: YY => "autoClear" in YY,
              get: YY => YY.autoClear,
              set: (YY, rY) => {
                YY.autoClear = rY
              }
            },
            metadata: DY
          }, wY, bY), (0, FY.i)(null, null, mY, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "forceAutoClearInAlphaMode" in YY,
              get: YY => YY.forceAutoClearInAlphaMode,
              set: (YY, rY) => {
                YY.forceAutoClearInAlphaMode = rY
              }
            },
            metadata: DY
          }, XY, qY), (0, FY.i)(null, null, SY, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: YY => "alphaConstants" in YY,
              get: YY => YY.alphaConstants,
              set: (YY, rY) => {
                YY.alphaConstants = rY
              }
            },
            metadata: DY
          }, pY, kY), (0, FY.i)(null, null, lY, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "enablePixelPerfectMode" in YY,
              get: YY => YY.enablePixelPerfectMode,
              set: (YY, rY) => {
                YY.enablePixelPerfectMode = rY
              }
            },
            metadata: DY
          }, GY, xY), (0, FY.i)(null, null, TY, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: YY => "forceFullscreenViewport" in YY,
              get: YY => YY.forceFullscreenViewport,
              set: (YY, rY) => {
                YY.forceFullscreenViewport = rY
              }
            },
            metadata: DY
          }, nY, PY), (0, FY.i)(null, null, eY, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "scaleMode" in YY,
              get: YY => YY.scaleMode,
              set: (YY, rY) => {
                YY.scaleMode = rY
              }
            },
            metadata: DY
          }, UY, LY), (0, FY.i)(null, null, NY, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: YY => "alwaysForcePOT" in YY,
              get: YY => YY.alwaysForcePOT,
              set: (YY, rY) => {
                YY.alwaysForcePOT = rY
              }
            },
            metadata: DY
          }, tY, Yr), (0, FY.i)(null, null, BY, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: YY => "_samples" in YY,
              get: YY => YY._samples,
              set: (YY, rY) => {
                YY._samples = rY
              }
            },
            metadata: DY
          }, rr, Dr), (0, FY.i)(null, null, cY, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: YY => "adaptScaleToCurrentViewport" in YY,
              get: YY => YY.adaptScaleToCurrentViewport,
              set: (YY, rY) => {
                YY.adaptScaleToCurrentViewport = rY
              }
            },
            metadata: DY
          }, Fr, Ar), DY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DY
          })
        })(), YY
      })(),
      QY = !1;

    function oY() {
      QY || (QY = !0, uY.d.prototype.setTextureFromPostProcess = function(YY, rY, DY) {
        let FY = null;
        rY && (rY._forcedOutputTexture ? FY = rY._forcedOutputTexture : rY._textures.data[rY._currentRenderTextureInd] && (FY = rY._textures.data[rY._currentRenderTextureInd])), this._bindTexture(YY, FY?.texture ?? null, DY)
      }, uY.d.prototype.setTextureFromPostProcessOutput = function(YY, rY, DY) {
        this._bindTexture(YY, rY?._outputTexture?.texture ?? null, DY)
      }, OY.e.prototype.setTextureFromPostProcess = function(YY, rY) {
        this._engine.setTextureFromPostProcess(this._samplers[YY], rY, YY)
      }, OY.e.prototype.setTextureFromPostProcessOutput = function(YY, rY) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[YY], rY, YY)
      }, (0, vY.i)("BABYLON.PostProcess", yY))
    }
  },
  40886: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      g: () => IY
    });
    var FY = DY(40857),
      AY = DY(36546);
    class IY extends FY.f {
      _gatherImports(YY, rY) {
        YY ? (this._webGPUReady = !0, rY.push(Promise.all([DY.e(363).then((() => DY(60496)))]))) : rY.push(Promise.all([DY.e(364).then((() => DY(60500)))])), super._gatherImports(YY, rY)
      }
      constructor(YY) {
        let rY = arguments.length > 2 ? arguments[2] : void 0;
        const DY = {
          name: YY,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || AY.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: IY.FragmentUrl,
          ...rY
        };
        DY.engine || (DY.engine = AY.d.LastCreatedEngine), super(DY)
      }
    }
    IY.FragmentUrl = "pass";
    class RY extends FY.f {
      _gatherImports(YY, rY) {
        YY ? (this._webGPUReady = !0, rY.push(Promise.all([DY.e(365).then((() => DY(60506)))]))) : rY.push(Promise.all([DY.e(366).then((() => DY(60513)))])), super._gatherImports(YY, rY)
      }
      constructor(YY) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: YY,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || AY.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: RY.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(YY) {
        if (!(YY < 0 || YY > 5)) switch (this._face = YY, this._face) {
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
    RY.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);