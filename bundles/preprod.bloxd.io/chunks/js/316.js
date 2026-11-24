export const id = 316;
export const ids = [316];
export const modules = {
  42087: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => vp
    });
    var Op = cp(37349),
      op = cp(37320),
      Ip = cp(40654),
      Sp = cp(40345),
      xp = cp(40143),
      Lp = cp(38905),
      Yp = cp(40332),
      Dp = cp(40358),
      Ap = cp(37329),
      Pp = cp(40107),
      Wp = cp(40314),
      yp = cp(40398);
    class Up {
      get renderList() {
        return this._renderList
      }
      set renderList(pp) {
        this._renderList !== pp && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), pp && (this._unObserveRenderList = (0, Ap.j)(pp, this._renderListHasChanged)), this._renderList = pp)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(pp) {
        pp !== this._disableImageProcessing && (this._disableImageProcessing = pp, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(pp) {
        this._disableDepthPrePass = pp, this._renderingManager.disableDepthPrePass = pp
      }
      get name() {
        return this._name
      }
      set name(pp) {
        if (this._name !== pp) {
          if (this._name = pp, this._sceneUBOs)
            for (let pp = 0; pp < this._sceneUBOs.length; ++pp) this._sceneUBOs[pp].name = `Scene ubo #${pp} for ${this.name}`;
          if (this._scene)
            for (let pp = 0; pp < this._renderPassIds.length; ++pp) {
              const ip = this._renderPassIds[pp];
              this._engine._renderPassNames[ip] = `${this._name}#${pp}`
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
      setMaterialForRendering(pp, ip) {
        let cp;
        cp = Array.isArray(pp) ? pp : [pp];
        for (let Op = 0; Op < cp.length; ++Op)
          for (let pp = 0; pp < this.options.numPasses; ++pp) {
            let op = cp[Op];
            cp[Op].Vl && (op = cp[Op].aop), op.setMaterialForRenderPass(this._renderPassIds[pp], void 0 !== ip ? Array.isArray(ip) ? ip[pp] : ip : void 0)
          }
      }
      _freezeActiveMeshes(pp) {
        this._freezeActiveMeshesCancel = (0, Pp.c)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, pp)
            for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((pp, ip) => {
          this._freezeActiveMeshesCancel = null, ip ? (Lp.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), pp && Lp.e.Error(pp)) : (Lp.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), pp && (Lp.e.Error(pp), pp.stack && Lp.e.Error(pp.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let pp = 0; pp < this._activeMeshes.length; pp++) this._activeMeshes.data[pp]._unFreeze();
        this._isFrozen = !1
      }
      constructor(pp, ip, cp) {
        this._unObserveRenderList = null, this._renderListHasChanged = (pp, ip) => {
          const cp = this._renderList ? this._renderList.length : 0;
          if (0 === ip && cp > 0 || 0 === cp)
            for (const Op of this._scene.meshes) Op._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Op.d, this.onAfterRenderObservable = new Op.d, this.onBeforeRenderingManagerRenderObservable = new Op.d, this.onAfterRenderingManagerRenderObservable = new Op.d, this.onInitRenderingObservable = new Op.d, this.onFinishRenderingObservable = new Op.d, this.onFastPathRenderObservable = new Op.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Wp.g(256), this._activeBoundingBoxes = new Wp.g(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = pp, this._scene = ip, this._engine = this._scene.gy(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...cp
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new Dp.d(ip), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const pp of this._scene.lights) pp.getTypeID() === yp.b.LIGHTTYPEID_CLUSTERED_CONTAINER && pp.isSupported && pp._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let pp = 0; pp < this.options.numPasses; ++pp) this._engine.releaseRenderPassId(this._renderPassIds[pp]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let pp = 0; pp < this.options.numPasses; ++pp) this._renderPassIds[pp] = this._engine.createRenderPassId(`${this.name}#${pp}`)
      }
      _createSceneUBO(pp, ip) {
        const cp = this._scene.gy(),
          Op = new Yp.b(cp, void 0, ip, pp, void 0, !1);
        return Op.addUniform("viewProjection", 16), ip && Op.addUniform("viewProjectionR", 16), Op.addUniform("view", 16), Op.addUniform("projection", 16), Op.addUniform("vEyePosition", 4), Op.addUniform("inverseProjection", 16), Op
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const pp = this._engine._currentRenderTarget,
          ip = !(!pp || !pp.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const pp = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${pp} for ${this.name}`, ip)), this._sceneUBOIsMultiview.push(ip)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== ip && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, ip), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = ip);
        const cp = this._sceneUBOs[this._currentSceneUBOIndex++];
        return cp.unbindEffect(), cp
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(pp) {
        this._refreshRate = pp, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(pp, ip) {
        this.prepareRenderList(), this.initRender(pp, ip);
        const cp = this._checkReadiness();
        return this.finishRender(), cp
      }
      prepareRenderList() {
        const pp = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let ip = 0; ip < this._waitingRenderList.length; ip++) {
              const cp = this._waitingRenderList[ip],
                Op = pp.getMeshById(cp);
              Op && this.renderList.push(Op)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const pp = this._scene.meshes;
          for (let ip = 0; ip < pp.length; ip++) {
            const cp = pp[ip];
            this.renderListPredicate(cp) && this.renderList.push(cp)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(pp, ip) {
        const cp = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), cp && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(cp.getViewMatrix(), cp.getProjectionMatrix(!0)), this._scene._activeCamera = cp, this._engine.setViewport(cp.rigParent ? cp.rigParent.viewport : cp.viewport, pp, ip)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const pp = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (pp.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), pp._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== pp.activeCamera && pp.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), pp.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[pp], this.onBeforeRenderObservable.notifyObservers(pp);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(pp);
        else {
          const ip = this._prepareRenderingManager(pp),
            cp = this._scene.getOutlineRenderer?.(),
            Op = cp?.enabled;
          cp && (cp.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(pp), this._renderingManager.render(this.customRenderFunction, ip, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(pp), cp && (cp.enabled = Op)
        }
        ip || this.onAfterRenderObservable.notifyObservers(pp), this._engine.currentRenderPassId = cp
      }
      _checkReadiness() {
        const pp = this._scene,
          ip = this._engine.currentRenderPassId;
        let cp = !0;
        pp.getViewMatrix() || pp.updateTransformMatrix();
        const Op = this.options.numPasses;
        for (let op = 0; op < Op && cp; op++) {
          const ip = this.renderList ? this.renderList : pp.frameGraph ? pp.meshes : pp.getActiveMeshes().data,
            Ip = this.renderList || pp.frameGraph ? ip.length : pp.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[op], this.onBeforeRenderObservable.notifyObservers(op);
          let Sp = null,
            xp = Ip;
          this.getCustomRenderList && (Sp = this.getCustomRenderList(op, ip, Ip), Sp && (xp = Sp.length)), Sp || (Sp = ip), this.options.doNotChangeAspectRatio || pp.updateTransformMatrix(!0);
          for (let pp = 0; pp < xp && cp; ++pp) {
            const ip = Sp[pp];
            if (!ip.isEnabled() || ip.isBlocked || !ip.isVisible || !ip.Am) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(ip, this.refreshRate, !0)) {
                cp = !1;
                continue
              }
            } else if (!ip.isReady(!0)) {
              cp = !1;
              continue
            }
            let Op = ip._edgesRenderer,
              op = ip.hasThinInstances;
            if (ip.Vl) {
              const pp = ip.aop;
              pp.edgesShareWithInstances && pp._edgesRenderer?.isEnabled && (Op = pp._edgesRenderer, op = !0)
            } else ip.fop && ip.edgesShareWithInstances && (op = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Op?.isEnabled && (Op.isReady(op) || (cp = !1))
          }
          if (this.renderParticles && pp.particlesEnabled) {
            const ip = this.particleSystemList || pp.Wm;
            for (const pp of ip) pp.isReady() || (cp = !1)
          }
          if (this.renderSprites && pp.spritesEnabled) {
            const ip = this.spriteManagerList || pp.spriteManagers;
            if (ip)
              for (const Op of ip) pp.activeCamera && 0 === (Op.layerMask & pp.activeCamera.layerMask) || Op.isReady && !Op.isReady() && (cp = !1)
          }
          this.onAfterRenderObservable.notifyObservers(op), Op > 1 && (pp.incrementRenderId(), pp.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = ip, cp
      }
      _prepareRenderingManager() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this._scene;
        let Op, op, Ip = null;
        const Sp = this.renderList ? this.renderList : cp.frameGraph ? cp.meshes : cp.getActiveMeshes().data,
          xp = this.renderList || cp.frameGraph ? Sp.length : cp.getActiveMeshes().length;
        if (this.getCustomRenderList && (Ip = this.getCustomRenderList(pp, Sp, xp)), Ip) Op = Ip.length, op = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !ip && !this._engine.isWebGPU) return Sp;
          this._defaultRenderListPrepared = !0, Ip = Sp, Op = xp, op = !this.renderList || this.forceLayerMaskCheck
        }
        const Lp = cp.activeCamera,
          Yp = this.cameraForLOD ?? Lp,
          Dp = cp.getBoundingBoxRenderer?.();
        if (cp._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && Dp) {
            Dp.reset();
            for (let pp = 0; pp < this._activeBoundingBoxes.length; pp++) {
              const ip = this._activeBoundingBoxes.data[pp];
              Dp.renderList.push(ip)
            }
          }
          return Ip
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Dp && Dp.reset(), this.renderMeshes) {
          const pp = cp.getRenderId(),
            ip = cp.getFrameId();
          for (let Sp = 0; Sp < Op; Sp++) {
            const Op = Ip[Sp];
            if (Op && !Op.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Op, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Op.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Ip, Sp;
              if (Yp) {
                const pp = Op._internalAbstractMeshDataInfo._currentLOD.get(Yp);
                pp && pp[1] === ip ? Ip = pp[0] : (Ip = cp.customLODSelector ? cp.customLODSelector(Op, Yp) : Op.getLOD(Yp), pp ? (pp[0] = Ip, pp[1] = ip) : Op._internalAbstractMeshDataInfo._currentLOD.set(Yp, [Ip, ip]))
              } else Ip = Op;
              if (!Ip) continue;
              if (Ip !== Op && 0 !== Ip.billboardMode && Ip.computeWorldMatrix(), Ip._preActivateForIntermediateRendering(pp), Sp = !(!op || !Lp) && 0 === (Op.layerMask & Lp.layerMask), Op.isEnabled() && Op.isVisible && Op.Am && !Sp) {
                if (this._activeMeshes.push(Op), Ip._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Ip !== Op && Ip._activate(pp, !0), this.enableBoundingBoxRendering && Dp && Dp._preActiveMesh(Op), Op._activate(pp, !0) && Op.Am.length) {
                  Op.Vl ? Op._internalAbstractMeshDataInfo._actAsRegularMesh && (Ip = Op) : Ip._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Ip._internalAbstractMeshDataInfo._isActiveIntermediate = !0, cp._prepareSkeleton(Ip);
                  for (let pp = 0; pp < Ip.Am.length; pp++) {
                    const ip = Ip.Am[pp];
                    this.enableBoundingBoxRendering && Dp && Dp._evaluateSubMesh(Op, ip), this._renderingManager.dispatch(ip, Ip)
                  }
                }
                Op._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && Dp && ip)
          for (let Ap = 0; Ap < Dp.renderList.length; Ap++) {
            const pp = Dp.renderList.data[Ap];
            this._activeBoundingBoxes.push(pp)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const pp = this.particleSystemList || cp.Wm;
          for (let ip = 0; ip < pp.length; ip++) {
            const cp = pp[ip],
              Op = cp.emitter;
            cp.isStarted() && Op && (!Op.position || Op.isEnabled()) && this._renderingManager.dispatchParticles(cp)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Ip
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(pp, ip, cp, Op)
      }
      setRenderingAutoClearDepthStencil(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(pp, ip, cp, Op), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const pp = new Up(this.name, this._scene, this.options);
        return this.renderList && (pp.renderList = this.renderList.slice(0)), pp
      }
      dispose() {
        const pp = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          ip = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let cp = 0; cp < ip; cp++) {
          const ip = pp[cp];
          ip && void 0 !== ip.getMaterialForRenderPass(this.renderPassId) && ip.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const cp of this._sceneUBOs) cp.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Up.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Up.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Up.REFRESHRATE_RENDER_ONCE = 0, Up.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Up.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var wp = cp(40096);
    class vp extends Ip.d {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(pp) {
        this._objectRenderer.renderListPredicate = pp
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(pp) {
        this._objectRenderer.renderList = pp
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(pp) {
        this._objectRenderer.particleSystemList = pp
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(pp) {
        this._objectRenderer.getCustomRenderList = pp
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(pp) {
        this._objectRenderer.renderParticles = pp
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(pp) {
        this._objectRenderer.renderSprites = pp
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(pp) {
        this._objectRenderer.enableBoundingBoxRendering = pp
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(pp) {
        this._objectRenderer.enableOutlineRendering = pp
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(pp) {
        this._objectRenderer.forceLayerMaskCheck = pp
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(pp) {
        this._objectRenderer.activeCamera = pp
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(pp) {
        this._objectRenderer.cameraForLOD = pp
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(pp) {
        this._objectRenderer.disableImageProcessing = pp
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(pp) {
        this._objectRenderer.customIsReadyFunction = pp
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(pp) {
        this._objectRenderer.customRenderFunction = pp
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(pp) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(pp)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(pp) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(pp)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(pp) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(pp)
      }
      set onClear(pp) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(pp)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(pp) {
        this._objectRenderer._waitingRenderList = pp
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
      setMaterialForRendering(pp, ip) {
        this._objectRenderer.setMaterialForRendering(pp, ip)
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
      set boundingBoxSize(pp) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(pp)) return;
        this._boundingBoxSize = pp;
        const ip = this.Gl();
        ip && ip.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(pp, ip, cp) {
        let Sp, xp, Yp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Dp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ap = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Wp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Ip.d.TRILINEAR_SAMPLINGMODE,
          yp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          wp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          vp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          tp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Hp = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          dp = arguments.length > 13 ? arguments[13] : void 0,
          ep = arguments.length > 14 ? arguments[14] : void 0,
          jp = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          kp = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          mp = !0,
          Rp = !1;
        if ("object" === typeof Yp) {
          const pp = Yp;
          Yp = !!pp.generateMipMaps, Dp = pp.doNotChangeAspectRatio ?? !0, Ap = pp.type ?? 0, Pp = !!pp.isCube, Wp = pp.samplingMode ?? Ip.d.TRILINEAR_SAMPLINGMODE, yp = pp.generateDepthBuffer ?? !0, wp = !!pp.generateStencilBuffer, vp = !!pp.isMulti, tp = pp.format ?? 5, Hp = !!pp.delayAllocation, dp = pp.samples, ep = pp.creationFlags, jp = !!pp.noColorAttachment, kp = !!pp.useSRGBBuffer, Sp = pp.colorAttachment, mp = pp.gammaSpace ?? mp, xp = pp.existingObjectRenderer, Rp = !!pp.enableClusteredLights
        }
        if (super(null, cp, !Yp, void 0, Wp, void 0, void 0, void 0, void 0, tp), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Op.d, this.onAfterUnbindObservable = new Op.d, this.onClearObservable = new Op.d, this.onResizeObservable = new Op.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = op.o.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(cp = this.Gl())) return;
        const qp = this.Gl().gy();
        this._gammaSpace = mp, this._coordinatesMode = Ip.d.PROJECTION_MODE, this.name = pp, this.isRenderTarget = !0, this._initialSizeParameter = ip, this._dontDisposeObjectRenderer = !!xp, this._processSizeParameter(ip), this._objectRenderer = xp ?? new Up(pp, cp, {
          numPasses: Pp ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: Dp,
          enableClusteredLights: Rp
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const pp = this._scene;
          if (!this._disableEngineStages)
            for (const ip of pp._beforeRenderTargetClearStage) ip.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(qp) : this.skipInitialClear || qp.clear(this.clearColor ?? pp.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || pp.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const ip of pp._beforeRenderTargetDrawStage) ip.action(this, this._currentFaceIndex, this._currentLayer);
          qp._debugPushGroup && qp._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (qp._debugPopGroup && qp._debugPopGroup(), !this._disableEngineStages)
            for (const ip of this._scene._afterRenderTargetDrawStage) ip.action(this, this._currentFaceIndex, this._currentLayer);
          const pp = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const ip of this._scene._afterRenderTargetPostProcessStage) ip.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = pp), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), qp) : Lp.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(qp) : this.skipInitialClear || qp.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = qp.onResizeObservable.add((() => {})), this._generateMipMaps = !!Yp, this._doNotChangeAspectRatio = Dp, vp || (this._renderTargetOptions = {
          generateMipMaps: Yp,
          type: Ap,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: yp,
          generateStencilBuffer: wp,
          samples: dp,
          creationFlags: ep,
          noColorAttachment: jp,
          useSRGBBuffer: kp,
          colorAttachment: Sp,
          label: this.name
        }, this.samplingMode === Ip.d.NEAREST_SAMPLINGMODE && (this.wrapU = Ip.d.CLAMP_ADDRESSMODE, this.wrapV = Ip.d.CLAMP_ADDRESSMODE), Hp || (Pp ? (this._renderTarget = cp.gy().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Ip.d.INVCUBIC_MODE, this._textureMatrix = op.b.Identity()) : this._renderTarget = cp.gy().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== dp && (this.samples = dp)))
      }
      createDepthStencilTexture() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(pp, ip, cp, Op, op, Ip)
      }
      _processSizeParameter(pp) {
        if (pp.ratio) {
          this._sizeRatio = pp.ratio;
          const ip = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(ip.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(ip.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = pp
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(pp) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(pp))
      }
      addPostProcess(pp) {
        if (!this._postProcessManager) {
          const pp = this.Gl();
          if (!pp) return;
          this._postProcessManager = new Sp.e(pp), this._postProcesses = new Array
        }
        this._postProcesses.push(pp), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (pp)
            for (const pp of this._postProcesses) pp.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(pp) {
        if (!this._postProcesses) return;
        const ip = this._postProcesses.indexOf(pp); - 1 !== ip && (this._postProcesses.splice(ip, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(pp) {
        this._objectRenderer.refreshRate = pp
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
        const pp = this._size.layers;
        if (pp) return pp;
        const ip = this._size.depth;
        return ip || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(pp) {
        const ip = Math.max(1, this.getRenderSize() * pp);
        this.resize(ip)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(pp) {
        const ip = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const cp = this.Gl();
        cp && (this._processSizeParameter(pp), this._renderTarget = ip ? cp.gy().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : cp.gy().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(pp, ip)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => cp(42102))).then((pp => this._dumpTools = pp))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const pp = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), pp
      }
      _render() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this.Gl();
        if (!cp) return;
        void 0 !== this.useCameraPostProcesses && (pp = this.useCameraPostProcesses);
        const Op = cp.gy();
        if (Op._debugPushGroup && Op._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let op = 0; op < 6; op++) this._renderToTarget(op, pp, ip), cp.incrementRenderId(), cp.resetCachedMaterial();
          else this._renderToTarget(0, pp, ip);
        else
          for (let op = 0; op < this.getRenderLayers(); op++) this._renderToTarget(0, pp, ip, op), cp.incrementRenderId(), cp.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Op._debugPopGroup && Op._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(pp, ip) {
        const cp = pp * ip,
          Op = (0, xp.l)(cp + 16384 / (128 + cp));
        return Math.min((0, xp.b)(pp), Op)
      }
      _bindFrameBuffer() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this.Gl();
        if (!cp) return;
        const Op = cp.gy();
        this._renderTarget && Op.bindFramebuffer(this._renderTarget, this.isCube ? pp : void 0, void 0, void 0, this.ignoreCameraViewport, 0, ip)
      }
      _unbindFrameBuffer(pp, ip) {
        this._renderTarget && pp.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ip)
        }))
      }
      _prepareFrame(pp, ip, cp, Op) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(ip, cp) : Op && pp.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(ip, cp)
      }
      _renderToTarget(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const op = this.Gl();
        if (!op) return;
        const Ip = op.gy();
        this._currentFaceIndex = pp, this._currentLayer = Op, this._currentUseCameraPostProcess = ip, this._currentDumpForDebug = cp, this._prepareFrame(op, pp, Op, ip), this._objectRenderer.render(pp + Op, !0), this._unbindFrameBuffer(Ip, pp), this._texture && this.isCube && 5 === pp && Ip.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(pp, ip, cp, Op)
      }
      setRenderingAutoClearDepthStencil(pp, ip) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(pp, ip)
      }
      clone() {
        const pp = this.getSize(),
          ip = new vp(this.name, pp, this.Gl(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return ip.hasAlpha = this.hasAlpha, ip.level = this.level, ip.coordinatesMode = this.coordinatesMode, this.renderList && (ip.renderList = this.renderList.slice(0)), ip
      }
      serialize() {
        if (!this.name) return null;
        const pp = super.serialize();
        if (pp.renderTargetSize = this.getRenderSize(), pp.renderList = [], this.renderList)
          for (let ip = 0; ip < this.renderList.length; ip++) pp.renderList.push(this.renderList[ip].id);
        return pp
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.Gl().gy().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const pp = this.Gl();
        if (!pp) return;
        let ip = pp.customRenderTargets.indexOf(this);
        ip >= 0 && pp.customRenderTargets.splice(ip, 1);
        for (const cp of pp.cameras) ip = cp.customRenderTargets.indexOf(this), ip >= 0 && cp.customRenderTargets.splice(ip, 1);
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
    vp.REFRESHRATE_RENDER_ONCE = Up.REFRESHRATE_RENDER_ONCE, vp.REFRESHRATE_RENDER_ONEVERYFRAME = Up.REFRESHRATE_RENDER_ONEVERYFRAME, vp.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Up.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(vp.prototype, "noPrePassRenderer") || Object.defineProperty(vp.prototype, "noPrePassRenderer", (0, wp.h)("RenderTargetTexture", "noPrePassRenderer"))
  },
  42069: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      f: () => Dp
    });
    var Op = cp(40342),
      op = cp(38313),
      Ip = cp(37349),
      Sp = cp(40053),
      xp = cp(40509);
    const Lp = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class Yp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
        this._fullscreenViewport = new op.c(0, 0, 1, 1);
        const cp = ip.positions ?? Lp.positions,
          Ip = ip.indices ?? Lp.indices;
        this.engine = pp, this._vertexBuffers = {
          [Op.j.PositionKind]: new Op.j(pp, cp, Op.j.PositionKind, !1, !1, 2)
        }, this._indexBuffer = pp.createIndexBuffer(Ip), this._indexBufferLength = Ip.length, this._onContextRestoredObserver = pp.Fy.add((() => {
          this._indexBuffer = pp.createIndexBuffer(Ip);
          for (const pp in this._vertexBuffers) {
            this._vertexBuffers[pp]._rebuild()
          }
        }))
      }
      setViewport() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(pp)
      }
      bindBuffers(pp) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, pp)
      }
      applyEffectWrapper(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = ip, this.engine.stencilState.stencilTest = cp, this.engine.enableEffect(pp.drawWrapper), this.bindBuffers(pp.effect), pp.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(pp) {
        return void 0 !== pp.renderTarget
      }
      render(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!pp.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const cp = null === ip ? null : this._isRenderTargetTexture(ip) ? ip.renderTarget : ip;
        cp && this.engine.bindFramebuffer(cp), this.applyEffectWrapper(pp), this.draw(), cp && this.engine.unBindFramebuffer(cp), this.restoreStates()
      }
      dispose() {
        const pp = this._vertexBuffers[Op.j.PositionKind];
        pp && (pp.dispose(), delete this._vertexBuffers[Op.j.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.Fy.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class Dp {
      static RegisterShaderCodeProcessing(pp, ip) {
        ip ? Dp._CustomShaderCodeProcessing[pp ?? ""] = ip : delete Dp._CustomShaderCodeProcessing[pp ?? ""]
      }
      static _GetShaderCodeProcessing(pp) {
        return Dp._CustomShaderCodeProcessing[pp] ?? Dp._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(pp) {
        this.options.name = pp
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
      set effect(pp) {
        this._drawWrapper.effect = pp
      }
      constructor(pp) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Ip.d(void 0, !0), this.onApplyObservable = new Ip.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...pp,
          name: pp.name || "effectWrapper",
          engine: pp.engine,
          uniforms: pp.uniforms || pp.uniformNames || [],
          uniformNames: void 0,
          samplers: pp.samplers || pp.samplerNames || [],
          samplerNames: void 0,
          attributeNames: pp.attributeNames || ["position"],
          uniformBuffers: pp.uniformBuffers || [],
          defines: pp.defines || "",
          useShaderStore: pp.useShaderStore || !1,
          vertexUrl: pp.vertexUrl || pp.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: pp.fragmentShader || "pass",
          indexParameters: pp.indexParameters,
          blockCompilation: pp.blockCompilation || !1,
          shaderLanguage: pp.shaderLanguage || 0,
          onCompiled: pp.onCompiled || void 0,
          extraInitializations: pp.extraInitializations || void 0,
          extraInitializationsAsync: pp.extraInitializationsAsync || void 0,
          useAsPostProcess: pp.useAsPostProcess ?? !1,
          allowEmptySourceTexture: pp.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), pp.vertexUrl || pp.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.Fy.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new xp.e(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const ip = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, ip, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Op = arguments.length > 2 ? arguments[2] : void 0,
          op = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, op && this._importPromises.push(...op);
        const Ip = this.options.engine.isWebGPU && !Dp.ForceGLSL;
        this._gatherImports(Ip, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Ip && this._webGPUReady ? cp.e(368).then((() => cp(61499))) : cp.e(358).then((() => cp(61392)))), void 0 !== Op && Op(Ip, this._importPromises), Ip && this._webGPUReady && (this.options.shaderLanguage = 1), pp || this.updateEffect(ip)
      }
      updateEffect() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          xp = arguments.length > 6 ? arguments[6] : void 0,
          Lp = arguments.length > 7 ? arguments[7] : void 0;
        const Yp = Dp._GetShaderCodeProcessing(this.name);
        if (Yp?.defineCustomBindings) {
          const Op = ip?.slice() ?? [];
          Op.push(...this.options.uniforms);
          const op = cp?.slice() ?? [];
          op.push(...this.options.samplers), pp = Yp.defineCustomBindings(this.name, pp, Op, op), ip = Op, cp = op
        }
        this.options.defines = pp || "";
        const Ap = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Pp;
        Pp = this.options.extraInitializationsAsync ? async () => {
          await (Ap?.()), await this.options.extraInitializationsAsync()
        }: Ap, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: xp ?? this._shaderPath.vertex,
          fragment: Lp ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: ip || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: cp || this.options.samplers,
          defines: null !== pp ? pp : "",
          fallbacks: null,
          onCompiled: op ?? this.options.onCompiled,
          onError: Ip ?? null,
          indexParameters: Op || this.options.indexParameters,
          processCodeAfterIncludes: Yp?.processCodeAfterIncludes ? (pp, ip) => Yp.processCodeAfterIncludes(this.name, pp, ip) : null,
          processFinalCode: Yp?.processFinalCode ? (pp, ip) => Yp.processFinalCode(this.name, pp, ip) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Pp
        }, this.options.engine) : this._drawWrapper.effect = new Sp.e(this._shaderPath, this.options.attributeNames, ip || this.options.uniforms, cp || this.options.samplerNames, this.options.engine, pp, void 0, op || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Pp), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !pp && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), Dp._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.gy().Fy.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    Dp.ForceGLSL = !1, Dp._CustomShaderCodeProcessing = {}
  },
  42102: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Dispose: () => tp,
      DumpData: () => vp,
      DumpDataAsync: () => wp,
      DumpFramebuffer: () => Up,
      DumpTools: () => Hp,
      EncodeImageAsync: () => yp,
      RegisterDumpTools: () => ep
    });
    var Op = cp(40203),
      op = cp(42069),
      Ip = cp(40304),
      Sp = cp(37356),
      xp = cp(37345),
      Lp = cp(38905),
      Yp = cp(40269),
      Dp = cp(40210);
    let Ap = null;
    async function Pp() {
      return Ap || (Ap = async function() {
        const pp = xp.e.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        pp instanceof OffscreenCanvas && Lp.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: ip
        } = await Promise.resolve().then((() => cp(40050)));
        if (!ip.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Op = new ip(pp, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        xp.e.Instances.pop(), xp.e.OnEnginesDisposedObservable.add((pp => {
          Op && pp !== Op && !Op.uR && 0 === xp.e.Instances.length && tp()
        })), Op.getCaps().parallelShaderCompile = void 0;
        const Ip = new op.b(Op),
          {
            passPixelShader: Sp
          } = await cp.e(376).then((() => cp(61559))),
          Yp = new op.f({
            engine: Op,
            name: Sp.name,
            fragmentShader: Sp.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: pp,
          dumpEngine: {
            engine: Op,
            renderer: Ip,
            wrapper: Yp
          }
        }
      }()), await Ap
    }
    let Wp = (() => {
      var pp;
      let ip, cp = [];
      return pp = class {
        static async EncodeImageAsync(pp, ip, cp, Op, op, Sp) {
          const xp = await Pp(),
            Lp = xp.dumpEngine;
          Lp.engine.setSize(ip, cp, !0);
          const Yp = Lp.engine.createRawTexture(pp, ip, cp, 5, !1, !op, 1);
          return Lp.renderer.setViewport(), Lp.renderer.applyEffectWrapper(Lp.wrapper), Lp.wrapper.effect._bindTexture("textureSampler", Yp), Lp.renderer.draw(), Yp.dispose(), await new Promise(((pp, ip) => {
            Ip.i.ToBlob(xp.canvas, (cp => {
              cp ? pp(cp) : ip(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Op, Sp)
          }))
        }
      }, (() => {
        const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [Dp.f], (0, Op.j)(pp, null, ip, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: pp => "EncodeImageAsync" in pp,
            get: pp => pp.EncodeImageAsync
          },
          metadata: op
        }, null, cp), op && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: op
        }), (0, Op.l)(pp, cp)
      })(), pp
    })();
    const yp = Wp.EncodeImageAsync;
    async function Up(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Ip = arguments.length > 5 ? arguments[5] : void 0,
        Sp = arguments.length > 6 ? arguments[6] : void 0;
      const xp = await cp.readPixels(0, 0, pp, ip);
      vp(pp, ip, new Uint8Array(xp.buffer), Op, op, Ip, !0, void 0, Sp)
    }
    async function wp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        op = arguments.length > 4 ? arguments[4] : void 0,
        xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Dp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ap = arguments.length > 7 ? arguments[7] : void 0;
      if (cp instanceof Float32Array) {
        const pp = new Uint8Array(cp.length);
        let ip = cp.length;
        for (; ip--;) {
          const Op = cp[ip];
          pp[ip] = Math.round(255 * (0, Sp.Clamp)(Op))
        }
        cp = pp
      }
      const Pp = await Wp.EncodeImageAsync(cp, pp, ip, Op, xp, Ap);
      void 0 !== op && Ip.i.DownloadBlob(Pp, op), Pp.type !== Op && Lp.e.Warn(`DumpData: The requested mimeType '${Op}' is not supported. The result has mimeType '${Pp.type}' instead.`);
      const yp = await Pp.arrayBuffer();
      return Dp ? yp : `data:${Op};base64,${(0,Yp.i)(yp)}`
    }

    function vp(pp, ip, cp, Op) {
      let op = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== op || Op || (op = ""), wp(pp, ip, cp, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", op, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((pp => {
        Op && Op(pp)
      }))
    }

    function tp() {
      Ap && (Ap?.then((pp => {
        pp.canvas instanceof HTMLCanvasElement && pp.canvas.remove(), pp.dumpEngine && (pp.dumpEngine.engine.dispose(), pp.dumpEngine.renderer.dispose(), pp.dumpEngine.wrapper.dispose())
      })), Ap = null)
    }
    const Hp = {
      DumpData: vp,
      DumpDataAsync: wp,
      DumpFramebuffer: Up,
      Dispose: tp
    };
    let dp = !1;

    function ep() {
      if (dp) return;
      dp = !0;
      Ip.i.DumpData = vp, Ip.i.DumpDataAsync = wp, Ip.i.DumpFramebuffer = Up
    }
  },
  42080: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Wp,
      d: () => yp,
      h: () => Up
    });
    var Op = cp(40654),
      op = cp(42087),
      Ip = cp(40203),
      Sp = cp(42060),
      xp = cp(40233),
      Lp = cp(42094),
      Yp = cp(40210);
    class Dp extends Sp.c {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(pp, ip) {
        let cp = arguments.length > 4 ? arguments[4] : void 0;
        const Op = {
          size: "number" === typeof ip ? ip : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: cp,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...ip
        };
        super(pp, Lp.d.FragmentUrl, {
          effectWrapper: "number" !== typeof ip && ip.effectWrapper ? void 0 : new Lp.d(pp, cp, Op),
          ...Op
        })
      }
      static _Parse(pp, ip, cp, Op) {
        return xp.c.Parse((() => new Dp(pp.name, pp.options, ip, pp.renderTargetSamplingMode, pp._engine, pp.reusable)), pp, cp, Op)
      }
    }(() => {
      var pp;
      let ip, cp = Sp.c,
        Op = [];
      pp = class extends cp {
        get face() {
          return this._effectWrapper.face
        }
        set face(pp) {
          this._effectWrapper.face = pp
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(pp, ip) {
          let cp = arguments.length > 4 ? arguments[4] : void 0;
          const op = {
            size: "number" === typeof ip ? ip : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: cp,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...ip
          };
          super(pp, Lp.d.FragmentUrl, {
            effectWrapper: "number" !== typeof ip && ip.effectWrapper ? void 0 : new Lp.c(pp, cp, op),
            ...op
          }), (0, Ip.l)(this, Op)
        }
        static _Parse(ip, cp, Op, op) {
          return xp.c.Parse((() => new pp(ip.name, ip.options, cp, ip.renderTargetSamplingMode, ip._engine, ip.reusable)), ip, Op, op)
        }
      }, (() => {
        const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(cp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, Yp.K)()], (0, Ip.j)(pp, null, ip, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: pp => "face" in pp,
            get: pp => pp.face
          },
          metadata: op
        }, null, Op), op && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: op
        })
      })()
    })();
    var Ap = cp(37356),
      Pp = cp(40276);

    function Wp(pp, ip, cp, Op, op, Ip, xp, Lp) {
      const Yp = ip.gy();
      return ip.isReady = !1, op = op ?? ip.samplingMode, Op = Op ?? ip.type, Ip = Ip ?? ip.format, xp = xp ?? ip.width, Lp = Lp ?? ip.height, -1 === Op && (Op = 0), new Promise((Dp => {
        const Ap = new Sp.c("postprocess", pp, null, null, 1, null, op, Yp, !1, void 0, Op, void 0, null, !1, Ip);
        Ap.externalTextureSamplerBinding = !0;
        const Pp = Yp.createRenderTargetTexture({
          width: xp,
          height: Lp
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: op,
          type: Op,
          format: Ip
        });
        Ap.onEffectCreatedObservable.addOnce((pp => {
          pp.executeWhenCompiled((() => {
            Ap.onApply = pp => {
              pp._bindTexture("textureSampler", ip), pp.setFloat2("scale", 1, 1)
            }, cp.postProcessManager.directRender([Ap], Pp, !0), Yp.restoreDefaultFramebuffer(), Yp._releaseTexture(ip), Ap && Ap.dispose(), Pp._swapAndDie(ip), ip.type = Op, ip.format = 5, ip.isReady = !0, Dp(ip)
          }))
        }))
      }))
    }
    async function yp(pp, ip, Ip) {
      let xp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Lp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Yp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Dp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(pp) {
        if (pp.isReady()) return;
        if (pp.loadingError) throw new Error(pp.errorObject?.message || `Texture ${pp.name} errored while loading.`);
        const ip = pp.onLoadObservable;
        if (ip) return await new Promise((pp => ip.addOnce((() => pp()))));
        const cp = pp._texture?.onLoadedObservable;
        if (cp) return await new Promise((pp => cp.addOnce((() => pp()))));
        throw new Error(`Cannot determine readiness of texture ${pp.name}.`)
      }(pp);
      const Pp = pp.getInternalTexture(),
        Wp = pp.is3D || !!Pp?.is3D,
        {
          width: yp,
          height: Up
        } = pp.getSize(),
        wp = ip ?? yp,
        vp = Ip ?? Up;
      if (Yp || Wp || function(pp) {
          switch (pp) {
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
        }(pp.textureFormat) || wp !== yp || vp !== Up) {
        if (pp.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${Yp?"RTT":"compression"} is not supported.`);
        return await async function(pp, ip, Ip, xp, Lp) {
          let Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Dp = pp.Gl(),
            Ap = Dp.gy(),
            Pp = pp.getInternalTexture(),
            Wp = pp.is3D || !!Pp?.is3D;
          let yp;
          if (Ap.isWebGPU ? Wp ? await cp.e(372).then((() => cp(61532))) : pp.isCube ? await cp.e(373).then((() => cp(61535))) : await cp.e(374).then((() => cp(61544))) : Wp ? await cp.e(369).then((() => cp(61516))) : pp.isCube ? await cp.e(370).then((() => cp(61519))) : await cp.e(371).then((() => cp(61525))), Wp) yp = new Sp.c("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Op.d.NEAREST_NEAREST_MIPNEAREST,
            engine: Ap,
            shaderLanguage: Ap.isWebGPU ? 1 : 0
          });
          else if (pp.isCube) {
            const pp = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            yp = new Sp.c("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Op.d.NEAREST_NEAREST_MIPNEAREST,
              engine: Ap,
              defines: pp[xp],
              shaderLanguage: Ap.isWebGPU ? 1 : 0
            })
          } else yp = new Sp.c("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Op.d.NEAREST_NEAREST_MIPNEAREST,
            engine: Ap,
            shaderLanguage: Ap.isWebGPU ? 1 : 0
          });
          await new Promise((pp => {
            yp.onEffectCreatedObservable.addOnce((ip => {
              ip.executeWhenCompiled((() => {
                pp(0)
              }))
            }))
          }));
          const Up = new op.e("temp", {
            width: ip,
            height: Ip
          }, Dp, !1);
          yp.onApply = function(ip) {
            ip.setTexture("textureSampler", pp), ip.setFloat("lod", Lp), ip.setInt("gamma", pp.gammaSpace ? 1 : 0), Wp && ip.setFloat("slice", Yp)
          };
          try {
            if (Up.renderTarget && Pp) {
              const cp = Pp.samplingMode;
              0 !== Lp ? pp.updateSamplingMode(Op.d.NEAREST_NEAREST_MIPNEAREST) : pp.updateSamplingMode(Op.d.NEAREST_NEAREST), Dp.postProcessManager.directRender([yp], Up.renderTarget, !0), pp.updateSamplingMode(cp);
              const op = await Ap.readPixels(0, 0, ip, Ip),
                Sp = new Uint8Array(op.buffer, op.byteOffset, op.byteLength);
              return Ap.unBindFramebuffer(Up.renderTarget), Sp
            }
            throw Error("Render to texture failed.")
          } finally {
            Up.dispose(), yp.dispose()
          }
        }(pp, wp, vp, xp, Lp, Dp)
      }
      let tp = await pp.readPixels(xp, Lp);
      if (!tp) throw new Error(`Failed to read pixels from texture ${pp.name}.`);
      if (tp instanceof Float32Array) {
        const pp = new Uint8Array(tp.length);
        let ip = tp.length;
        for (; ip--;) {
          const cp = tp[ip];
          pp[ip] = Math.round(255 * (0, Ap.Clamp)(cp))
        }
        tp = pp
      }
      const Hp = wp * vp,
        dp = 4 * Hp;
      if (tp.length !== dp) {
        const pp = 0 === Hp ? 0 : tp.length / Hp;
        if (1 === pp || 2 === pp || 3 === pp) {
          const ip = new Uint8Array(dp);
          for (let cp = 0, Op = 0, op = 0; cp < Hp; cp++, op += 4) {
            const cp = tp[Op++];
            if (1 === pp) {
              ip[op] = cp, ip[op + 1] = cp, ip[op + 2] = cp, ip[op + 3] = 255;
              continue
            }
            const Ip = tp[Op++];
            2 !== pp ? (ip[op] = cp, ip[op + 1] = Ip, ip[op + 2] = tp[Op++], ip[op + 3] = 255) : (ip[op] = cp, ip[op + 1] = Ip, ip[op + 2] = 0, ip[op + 3] = 255)
          }
          return ip
        }
      }
      return tp
    }
    const Up = {
      CreateResizedCopy: function(pp, ip, cp) {
        let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Sp = pp.Gl(),
          xp = Sp.gy(),
          Lp = new op.e("resized" + pp.name, {
            width: ip,
            height: cp
          }, Sp, !pp.noMipmap, !0, pp._texture.type, !1, pp.samplingMode, !1);
        Lp.wrapU = pp.wrapU, Lp.wrapV = pp.wrapV, Lp.uOffset = pp.uOffset, Lp.vOffset = pp.vOffset, Lp.uScale = pp.uScale, Lp.vScale = pp.vScale, Lp.uAng = pp.uAng, Lp.vAng = pp.vAng, Lp.wAng = pp.wAng, Lp.coordinatesIndex = pp.coordinatesIndex, Lp.level = pp.level, Lp.anisotropicFilteringLevel = pp.anisotropicFilteringLevel, Lp._texture.isReady = !1, pp.wrapU = Op.d.CLAMP_ADDRESSMODE, pp.wrapV = Op.d.CLAMP_ADDRESSMODE;
        const Yp = new Dp("pass", 1, null, Ip ? Op.d.BILINEAR_SAMPLINGMODE : Op.d.NEAREST_SAMPLINGMODE, xp, !1, 0);
        return Yp.externalTextureSamplerBinding = !0, Yp.onEffectCreatedObservable.addOnce((ip => {
          ip.executeWhenCompiled((() => {
            Yp.onApply = function(ip) {
              ip.setTexture("textureSampler", pp)
            };
            const ip = Lp.renderTarget;
            ip && (Sp.postProcessManager.directRender([Yp], ip), xp.unBindFramebuffer(ip), Lp.disposeFramebufferObjects(), Yp.dispose(), Lp.getInternalTexture().isReady = !0)
          }))
        })), Lp
      },
      ApplyPostProcess: Wp,
      ToHalfFloat: Pp.h,
      FromHalfFloat: Pp.c,
      GetTextureDataAsync: yp
    }
  },
  42060: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => yp
    });
    var Op = cp(40203),
      op = cp(40314),
      Ip = cp(37349),
      Sp = cp(37320),
      xp = cp(40053),
      Lp = cp(40210),
      Yp = cp(40233),
      Dp = cp(37368),
      Ap = cp(40113),
      Pp = cp(40143),
      Wp = cp(42069);
    let yp = (() => {
        var pp;
        let ip, xp, Ap, yp, Up, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp = [],
          Ep = [],
          Xp = [],
          lp = [],
          Qp = [],
          Jp = [],
          Bp = [],
          Np = [],
          Tp = [],
          fp = [],
          bp = [],
          hp = [],
          ap = [],
          np = [],
          Fp = [],
          gp = [],
          Gp = [],
          rp = [],
          Zp = [],
          zp = [],
          sp = [],
          Kp = [],
          Vp = [],
          ii = [],
          ci = [],
          Oi = [],
          oi = [],
          Ii = [],
          Si = [];
        return pp = class {
          static get ForceGLSL() {
            return Wp.f.ForceGLSL
          }
          static set ForceGLSL(pp) {
            Wp.f.ForceGLSL = pp
          }
          static RegisterShaderCodeProcessing(pp, ip) {
            Wp.f.RegisterShaderCodeProcessing(pp, ip)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(pp) {
            this._effectWrapper.name = pp
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(pp) {
            this._effectWrapper.alphaMode = pp
          }
          get samples() {
            return this._samples
          }
          set samples(pp) {
            this._samples = Math.min(pp, this._engine.getCaps().maxMSAASamples), this._textures.forEach((pp => {
              pp.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(pp) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), pp && (this._onActivateObserver = this.onActivateObservable.add(pp))
          }
          set onSizeChanged(pp) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(pp)
          }
          set onApply(pp) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(pp)
          }
          set onBeforeRender(pp) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(pp)
          }
          set onAfterRender(pp) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(pp)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(pp) {
            this._forcedOutputTexture = pp
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.HV
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.i5(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(ip, cp, xp, Lp, Yp, Dp) {
            let Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Pp = arguments.length > 7 ? arguments[7] : void 0,
              yp = arguments.length > 8 ? arguments[8] : void 0,
              Up = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              vp = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              tp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Hp = arguments.length > 12 ? arguments[12] : void 0,
              dp = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              ep = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              jp = arguments.length > 15 ? arguments[15] : void 0,
              kp = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Op.l)(this, Cp), null), this.uniqueId = (0, Op.l)(this, Ep, void 0), this.width = ((0, Op.l)(this, Xp), (0, Op.l)(this, lp, -1)), this.height = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, -1)), this.nodeMaterialSource = ((0, Op.l)(this, Bp), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Op.l)(this, Np, void 0), this.clearColor = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, void 0)), this.autoClear = ((0, Op.l)(this, bp), (0, Op.l)(this, hp, !0)), this.forceAutoClearInAlphaMode = ((0, Op.l)(this, ap), (0, Op.l)(this, np, !1)), this.alphaConstants = ((0, Op.l)(this, Fp), (0, Op.l)(this, gp, void 0)), this.animations = ((0, Op.l)(this, Gp), []), this.enablePixelPerfectMode = (0, Op.l)(this, rp, !1), this.forceFullscreenViewport = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, !0)), this.inspectableCustomProperties = (0, Op.l)(this, sp), this.scaleMode = (0, Op.l)(this, Kp, 1), this.alwaysForcePOT = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, !1)), this._samples = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, 1)), this.adaptScaleToCurrentViewport = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, !1)), this.doNotSerialize = ((0, Op.l)(this, Si), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new op.g(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Sp.l(1, 1), this._texelSize = Sp.l.Zero(), this.onActivateObservable = new Ip.d, this.onSizeChangedObservable = new Ip.d, this.onApplyObservable = new Ip.d, this.onBeforeRenderObservable = new Ip.d, this.onAfterRenderObservable = new Ip.d, this.Kl = new Ip.d, wp();
            let mp, Rp = 1,
              qp = null;
            if (xp && !Array.isArray(xp)) {
              const pp = xp;
              xp = pp.uniforms ?? null, Lp = pp.samplers ?? null, Rp = pp.size ?? 1, Dp = pp.camera ?? null, Ap = pp.samplingMode ?? 1, Pp = pp.engine, yp = pp.reusable, Up = Array.isArray(pp.defines) ? pp.defines.join("\n") : pp.defines ?? null, vp = pp.textureType ?? 0, tp = pp.vertexUrl ?? "postprocess", Hp = pp.indexParameters, dp = pp.blockCompilation ?? !1, ep = pp.textureFormat ?? 5, jp = pp.shaderLanguage ?? 0, qp = pp.uniformBuffers ?? null, kp = pp.extraInitializations, mp = pp.effectWrapper
            } else Yp && (Rp = "number" === typeof Yp ? Yp : {
              width: Yp.width,
              height: Yp.height
            });
            if (this._useExistingThinPostProcess = !!mp, this._effectWrapper = mp ?? new Wp.f({
                name: ip,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: cp,
                engine: Pp || Dp?.Gl().gy(),
                uniforms: xp,
                samplers: Lp,
                uniformBuffers: qp,
                defines: Up,
                vertexUrl: tp,
                indexParameters: Hp,
                blockCompilation: !0,
                shaderLanguage: jp,
                extraInitializations: void 0
              }), this.name = ip, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != Dp ? (this.HV = Dp, this._scene = Dp.Gl(), Dp.attachPostProcess(this), this._engine = this._scene.gy(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Pp && (this._engine = Pp, this._engine.postProcesses.push(this)), this._options = Rp, this.renderTargetSamplingMode = Ap || 1, this._reusable = yp || !1, this._textureType = vp, this._textureFormat = ep, this._shaderLanguage = jp || 0, this._samplers = Lp || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = cp, this._vertexUrl = tp, this._parameters = xp || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = qp || [], this._indexParameters = Hp, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const ip = [];
              this._gatherImports(this._engine.isWebGPU && !pp.ForceGLSL, ip), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(dp, Up, kp, ip)
            }
          }
          _gatherImports() {
            let pp = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? pp.push(Promise.all([cp.e(368).then((() => cp(61499)))])) : pp.push(Promise.all([cp.e(358).then((() => cp(61392)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          gy() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(pp) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = pp, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new op.g(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Op = arguments.length > 3 ? arguments[3] : void 0,
              op = arguments.length > 4 ? arguments[4] : void 0,
              Ip = arguments.length > 5 ? arguments[5] : void 0,
              Sp = arguments.length > 6 ? arguments[6] : void 0,
              xp = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(pp, ip, cp, Op, op, Ip, Sp, xp), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let op = 0; op < this._textureCache.length; op++)
              if (this._textureCache[op].texture.width === pp.width && this._textureCache[op].texture.height === pp.height && this._textureCache[op].postProcessChannel === cp && this._textureCache[op].texture._generateDepthBuffer === ip.generateDepthBuffer && this._textureCache[op].texture.samples === ip.samples) return this._textureCache[op].texture;
            const Op = this._engine.createRenderTargetTexture(pp, ip);
            return this._textureCache.push({
              texture: Op,
              postProcessChannel: cp,
              lastUsedRenderId: -1
            }), Op
          }
          _flushTextureCache() {
            const pp = this._renderId;
            for (let ip = this._textureCache.length - 1; ip >= 0; ip--)
              if (pp - this._textureCache[ip].lastUsedRenderId > 100) {
                let pp = !1;
                for (let cp = 0; cp < this._textures.length; cp++)
                  if (this._textures.data[cp] === this._textureCache[ip].texture) {
                    pp = !0;
                    break
                  } pp || (this._textureCache[ip].texture.dispose(), this._textureCache.splice(ip, 1))
              }
          }
          resize(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = pp, this.height = ip;
            let Ip = null;
            if (cp)
              for (let Lp = 0; Lp < cp._postProcesses.length; Lp++)
                if (null !== cp._postProcesses[Lp]) {
                  Ip = cp._postProcesses[Lp];
                  break
                } const Sp = {
                width: this.width,
                height: this.height
              },
              xp = {
                generateMipMaps: Op,
                generateDepthBuffer: op || Ip === this,
                generateStencilBuffer: (op || Ip === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Sp, xp, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Sp, xp, 1)), this._texelSize.i5(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let pp;
            if (this._shareOutputWithPostProcess) pp = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) pp = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let ip;
              pp = this.inputTexture;
              for (let cp = 0; cp < this._textureCache.length; cp++)
                if (this._textureCache[cp].texture === pp) {
                  ip = this._textureCache[cp];
                  break
                } ip && (ip.lastUsedRenderId = this._renderId)
            }
            return pp
          }
          activate(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              cp = arguments.length > 2 ? arguments[2] : void 0;
            const Op = null === pp || void 0 !== pp.cameraRigMode ? pp || this.HV : null,
              op = Op?.Gl() ?? pp,
              Ip = op.gy(),
              Sp = Ip.getCaps().maxTextureSize,
              xp = (ip ? ip.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Lp = (ip ? ip.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let Yp = this._options.width || xp,
              Dp = this._options.height || Lp;
            const Ap = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Wp = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const pp = Ip.currentViewport;
                pp && (Yp *= pp.width, Dp *= pp.height)
              }(Ap || this.alwaysForcePOT) && (this._options.width || (Yp = Ip.needPOTTextures ? (0, Pp.e)(Yp, Sp, this.scaleMode) : Yp), this._options.height || (Dp = Ip.needPOTTextures ? (0, Pp.e)(Dp, Sp, this.scaleMode) : Dp)), this.width === Yp && this.height === Dp && (Wp = this._getTarget()) || this.resize(Yp, Dp, Op, Ap, cp), this._textures.forEach((pp => {
                pp.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(pp, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Wp || (Wp = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.i5(xp / Yp, Lp / Dp), this._engine.bindFramebuffer(Wp, 0, xp, Lp, this.forceFullscreenViewport)) : (this._scaleRatio.i5(1, 1), this._engine.bindFramebuffer(Wp, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Op), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : op.clearColor, op._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Wp
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
            let pp;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.gy().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), pp = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", pp?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let pp = this._textureCache.length - 1; pp >= 0; pp--) this._textureCache[pp].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(pp) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = pp.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(pp) {
            let ip;
            if (pp = pp || this.HV, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (ip = this._parentContainer.postProcesses.indexOf(this), ip > -1 && this._parentContainer.postProcesses.splice(ip, 1), this._parentContainer = null), ip = this._engine.postProcesses.indexOf(this), -1 !== ip && this._engine.postProcesses.splice(ip, 1), this.Kl.notifyObservers(), pp) {
              if (pp.detachPostProcess(this), ip = pp._postProcesses.indexOf(this), 0 === ip && pp._postProcesses.length > 0) {
                const pp = this.HV._getFirstPostProcess();
                pp && pp.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const pp = Yp.c.Serialize(this),
              ip = this.getCamera() || this._scene && this._scene.activeCamera;
            return pp.customType = "BABYLON." + this.getClassName(), pp.cameraId = ip ? ip.id : null, pp.reusable = this._reusable, pp.textureType = this._textureType, pp.fragmentUrl = this._fragmentUrl, pp.parameters = this._parameters, pp.samplers = this._samplers, pp.uniformBuffers = this._uniformBuffers, pp.options = this._options, pp.defines = this._postProcessDefines, pp.textureFormat = this._textureFormat, pp.vertexUrl = this._vertexUrl, pp.indexParameters = this._indexParameters, pp
          }
          clone() {
            const ip = this.serialize();
            ip._engine = this._engine, ip.cameraId = null;
            const cp = pp.Parse(ip, this._scene, "");
            return cp ? (cp.onActivateObservable = this.onActivateObservable.clone(), cp.onSizeChangedObservable = this.onSizeChangedObservable.clone(), cp.onApplyObservable = this.onApplyObservable.clone(), cp.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), cp.onAfterRenderObservable = this.onAfterRenderObservable.clone(), cp._prePassEffectConfiguration = this._prePassEffectConfiguration, cp) : null
          }
          static Parse(pp, ip, cp) {
            const Op = (0, Dp.d)(pp.customType);
            if (!Op || !Op._Parse) return null;
            const op = ip ? ip.getCameraById(pp.cameraId) : null;
            return Op._Parse(pp, op, ip, cp)
          }
          static _Parse(ip, cp, Op, op) {
            return Yp.c.Parse((() => new pp(ip.name, ip.fragmentUrl, ip.parameters, ip.samplers, ip.options, cp, ip.renderTargetSamplingMode, ip._engine, ip.reusable, ip.defines, ip.textureType, ip.vertexUrl, ip.indexParameters, !1, ip.textureFormat)), ip, Op, op)
          }
        }, (() => {
          const cp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ip = [(0, Lp.K)()], xp = [(0, Lp.K)()], Ap = [(0, Lp.K)()], yp = [(0, Lp.K)()], Up = [(0, Lp.K)()], vp = [(0, Lp.q)()], tp = [(0, Lp.K)()], Hp = [(0, Lp.K)()], dp = [(0, Lp.K)()], ep = [(0, Lp.K)()], jp = [(0, Lp.K)()], kp = [(0, Lp.K)()], mp = [(0, Lp.K)()], Rp = [(0, Lp.K)()], qp = [(0, Lp.K)("samples")], Mp = [(0, Lp.K)()], (0, Op.j)(pp, null, xp, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: pp => "name" in pp,
              get: pp => pp.name
            },
            metadata: cp
          }, null, Cp), (0, Op.j)(pp, null, dp, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "alphaMode" in pp,
              get: pp => pp.alphaMode
            },
            metadata: cp
          }, null, Cp), (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: pp => "uniqueId" in pp,
              get: pp => pp.uniqueId,
              set: (pp, ip) => {
                pp.uniqueId = ip
              }
            },
            metadata: cp
          }, Ep, Xp), (0, Op.j)(null, null, Ap, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: pp => "width" in pp,
              get: pp => pp.width,
              set: (pp, ip) => {
                pp.width = ip
              }
            },
            metadata: cp
          }, lp, Qp), (0, Op.j)(null, null, yp, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: pp => "height" in pp,
              get: pp => pp.height,
              set: (pp, ip) => {
                pp.height = ip
              }
            },
            metadata: cp
          }, Jp, Bp), (0, Op.j)(null, null, Up, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "renderTargetSamplingMode" in pp,
              get: pp => pp.renderTargetSamplingMode,
              set: (pp, ip) => {
                pp.renderTargetSamplingMode = ip
              }
            },
            metadata: cp
          }, Np, Tp), (0, Op.j)(null, null, vp, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "clearColor" in pp,
              get: pp => pp.clearColor,
              set: (pp, ip) => {
                pp.clearColor = ip
              }
            },
            metadata: cp
          }, fp, bp), (0, Op.j)(null, null, tp, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: pp => "autoClear" in pp,
              get: pp => pp.autoClear,
              set: (pp, ip) => {
                pp.autoClear = ip
              }
            },
            metadata: cp
          }, hp, ap), (0, Op.j)(null, null, Hp, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "forceAutoClearInAlphaMode" in pp,
              get: pp => pp.forceAutoClearInAlphaMode,
              set: (pp, ip) => {
                pp.forceAutoClearInAlphaMode = ip
              }
            },
            metadata: cp
          }, np, Fp), (0, Op.j)(null, null, ep, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: pp => "alphaConstants" in pp,
              get: pp => pp.alphaConstants,
              set: (pp, ip) => {
                pp.alphaConstants = ip
              }
            },
            metadata: cp
          }, gp, Gp), (0, Op.j)(null, null, jp, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "enablePixelPerfectMode" in pp,
              get: pp => pp.enablePixelPerfectMode,
              set: (pp, ip) => {
                pp.enablePixelPerfectMode = ip
              }
            },
            metadata: cp
          }, rp, Zp), (0, Op.j)(null, null, kp, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: pp => "forceFullscreenViewport" in pp,
              get: pp => pp.forceFullscreenViewport,
              set: (pp, ip) => {
                pp.forceFullscreenViewport = ip
              }
            },
            metadata: cp
          }, zp, sp), (0, Op.j)(null, null, mp, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "scaleMode" in pp,
              get: pp => pp.scaleMode,
              set: (pp, ip) => {
                pp.scaleMode = ip
              }
            },
            metadata: cp
          }, Kp, Vp), (0, Op.j)(null, null, Rp, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: pp => "alwaysForcePOT" in pp,
              get: pp => pp.alwaysForcePOT,
              set: (pp, ip) => {
                pp.alwaysForcePOT = ip
              }
            },
            metadata: cp
          }, ii, ci), (0, Op.j)(null, null, qp, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: pp => "_samples" in pp,
              get: pp => pp._samples,
              set: (pp, ip) => {
                pp._samples = ip
              }
            },
            metadata: cp
          }, Oi, oi), (0, Op.j)(null, null, Mp, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: pp => "adaptScaleToCurrentViewport" in pp,
              get: pp => pp.adaptScaleToCurrentViewport,
              set: (pp, ip) => {
                pp.adaptScaleToCurrentViewport = ip
              }
            },
            metadata: cp
          }, Ii, Si), cp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cp
          })
        })(), pp
      })(),
      Up = !1;

    function wp() {
      Up || (Up = !0, Ap.b.prototype.setTextureFromPostProcess = function(pp, ip, cp) {
        let Op = null;
        ip && (ip._forcedOutputTexture ? Op = ip._forcedOutputTexture : ip._textures.data[ip._currentRenderTextureInd] && (Op = ip._textures.data[ip._currentRenderTextureInd])), this._bindTexture(pp, Op?.texture ?? null, cp)
      }, Ap.b.prototype.setTextureFromPostProcessOutput = function(pp, ip, cp) {
        this._bindTexture(pp, ip?._outputTexture?.texture ?? null, cp)
      }, xp.e.prototype.setTextureFromPostProcess = function(pp, ip) {
        this._engine.setTextureFromPostProcess(this._samplers[pp], ip, pp)
      }, xp.e.prototype.setTextureFromPostProcessOutput = function(pp, ip) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[pp], ip, pp)
      }, (0, Dp.g)("BABYLON.PostProcess", yp))
    }
  },
  42094: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      d: () => Ip
    });
    var Op = cp(42069),
      op = cp(37345);
    class Ip extends Op.f {
      _gatherImports(pp, ip) {
        pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(375).then((() => cp(61552)))]))) : ip.push(Promise.all([cp.e(376).then((() => cp(61559)))])), super._gatherImports(pp, ip)
      }
      constructor(pp) {
        let ip = arguments.length > 2 ? arguments[2] : void 0;
        const cp = {
          name: pp,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || op.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Ip.FragmentUrl,
          ...ip
        };
        cp.engine || (cp.engine = op.e.LastCreatedEngine), super(cp)
      }
    }
    Ip.FragmentUrl = "pass";
    class Sp extends Op.f {
      _gatherImports(pp, ip) {
        pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(377).then((() => cp(61565)))]))) : ip.push(Promise.all([cp.e(378).then((() => cp(61570)))])), super._gatherImports(pp, ip)
      }
      constructor(pp) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: pp,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || op.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Sp.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(pp) {
        if (!(pp < 0 || pp > 5)) switch (this._face = pp, this._face) {
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
    Sp.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);