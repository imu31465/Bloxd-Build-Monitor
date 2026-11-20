export const id = 302;
export const ids = [302];
export const modules = {
  41568: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => jq
    });
    var Yq = gq(37156),
      lq = gq(37139),
      Oq = gq(40233),
      mq = gq(39886),
      xq = gq(39696),
      Aq = gq(38653),
      cq = gq(39870),
      uq = gq(39900),
      Bq = gq(37149),
      Wq = gq(39644),
      Nq = gq(39858),
      aq = gq(39938);
    class Vq {
      get renderList() {
        return this._renderList
      }
      set renderList(qq) {
        this._renderList !== qq && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), qq && (this._unObserveRenderList = (0, Bq.k)(qq, this._renderListHasChanged)), this._renderList = qq)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(qq) {
        qq !== this._disableImageProcessing && (this._disableImageProcessing = qq, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(qq) {
        this._disableDepthPrePass = qq, this._renderingManager.disableDepthPrePass = qq
      }
      get name() {
        return this._name
      }
      set name(qq) {
        if (this._name !== qq) {
          if (this._name = qq, this._sceneUBOs)
            for (let qq = 0; qq < this._sceneUBOs.length; ++qq) this._sceneUBOs[qq].name = `Scene ubo #${qq} for ${this.name}`;
          if (this._scene)
            for (let qq = 0; qq < this._renderPassIds.length; ++qq) {
              const Eq = this._renderPassIds[qq];
              this._engine._renderPassNames[Eq] = `${this._name}#${qq}`
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
      setMaterialForRendering(qq, Eq) {
        let gq;
        gq = Array.isArray(qq) ? qq : [qq];
        for (let Yq = 0; Yq < gq.length; ++Yq)
          for (let qq = 0; qq < this.options.numPasses; ++qq) {
            let lq = gq[Yq];
            gq[Yq].GJ && (lq = gq[Yq].Plq), lq.setMaterialForRenderPass(this._renderPassIds[qq], void 0 !== Eq ? Array.isArray(Eq) ? Eq[qq] : Eq : void 0)
          }
      }
      _freezeActiveMeshes(qq) {
        this._freezeActiveMeshesCancel = (0, Wq.e)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, qq)
            for (let qq = 0; qq < this._activeMeshes.length; qq++) this._activeMeshes.data[qq]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((qq, Eq) => {
          this._freezeActiveMeshesCancel = null, Eq ? (Aq.b.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), qq && Aq.b.Error(qq)) : (Aq.b.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), qq && (Aq.b.Error(qq), qq.stack && Aq.b.Error(qq.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let qq = 0; qq < this._activeMeshes.length; qq++) this._activeMeshes.data[qq]._unFreeze();
        this._isFrozen = !1
      }
      constructor(qq, Eq, gq) {
        this._unObserveRenderList = null, this._renderListHasChanged = (qq, Eq) => {
          const gq = this._renderList ? this._renderList.length : 0;
          if (0 === Eq && gq > 0 || 0 === gq)
            for (const Yq of this._scene.meshes) Yq._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Yq.d, this.onAfterRenderObservable = new Yq.d, this.onBeforeRenderingManagerRenderObservable = new Yq.d, this.onAfterRenderingManagerRenderObservable = new Yq.d, this.onInitRenderingObservable = new Yq.d, this.onFinishRenderingObservable = new Yq.d, this.onFastPathRenderObservable = new Yq.d, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Nq.c(256), this._activeBoundingBoxes = new Nq.c(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = qq, this._scene = Eq, this._engine = this._scene.Ba(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...gq
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new uq.d(Eq), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const qq of this._scene.lights) qq.getTypeID() === aq.c.LIGHTTYPEID_CLUSTERED_CONTAINER && qq.isSupported && qq._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let qq = 0; qq < this.options.numPasses; ++qq) this._engine.releaseRenderPassId(this._renderPassIds[qq]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let qq = 0; qq < this.options.numPasses; ++qq) this._renderPassIds[qq] = this._engine.createRenderPassId(`${this.name}#${qq}`)
      }
      _createSceneUBO(qq, Eq) {
        const gq = this._scene.Ba(),
          Yq = new cq.b(gq, void 0, Eq, qq, void 0, !1);
        return Yq.addUniform("viewProjection", 16), Eq && Yq.addUniform("viewProjectionR", 16), Yq.addUniform("view", 16), Yq.addUniform("projection", 16), Yq.addUniform("vEyePosition", 4), Yq.addUniform("inverseProjection", 16), Yq
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const qq = this._engine._currentRenderTarget,
          Eq = !(!qq || !qq.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const qq = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${qq} for ${this.name}`, Eq)), this._sceneUBOIsMultiview.push(Eq)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== Eq && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, Eq), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = Eq);
        const gq = this._sceneUBOs[this._currentSceneUBOIndex++];
        return gq.unbindEffect(), gq
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(qq) {
        this._refreshRate = qq, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(qq, Eq) {
        this.prepareRenderList(), this.initRender(qq, Eq);
        const gq = this._checkReadiness();
        return this.finishRender(), gq
      }
      prepareRenderList() {
        const qq = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let Eq = 0; Eq < this._waitingRenderList.length; Eq++) {
              const gq = this._waitingRenderList[Eq],
                Yq = qq.getMeshById(gq);
              Yq && this.renderList.push(Yq)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const qq = this._scene.meshes;
          for (let Eq = 0; Eq < qq.length; Eq++) {
            const gq = qq[Eq];
            this.renderListPredicate(gq) && this.renderList.push(gq)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(qq, Eq) {
        const gq = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), gq && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(gq.getViewMatrix(), gq.getProjectionMatrix(!0)), this._scene._activeCamera = gq, this._engine.setViewport(gq.rigParent ? gq.rigParent.viewport : gq.viewport, qq, Eq)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const qq = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (qq.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), qq._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== qq.activeCamera && qq.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), qq.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[qq], this.onBeforeRenderObservable.notifyObservers(qq);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(qq);
        else {
          const Eq = this._prepareRenderingManager(qq),
            gq = this._scene.getOutlineRenderer?.(),
            Yq = gq?.enabled;
          gq && (gq.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(qq), this._renderingManager.render(this.customRenderFunction, Eq, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(qq), gq && (gq.enabled = Yq)
        }
        Eq || this.onAfterRenderObservable.notifyObservers(qq), this._engine.currentRenderPassId = gq
      }
      _checkReadiness() {
        const qq = this._scene,
          Eq = this._engine.currentRenderPassId;
        let gq = !0;
        qq.getViewMatrix() || qq.updateTransformMatrix();
        const Yq = this.options.numPasses;
        for (let lq = 0; lq < Yq && gq; lq++) {
          const Eq = this.renderList ? this.renderList : qq.frameGraph ? qq.meshes : qq.getActiveMeshes().data,
            Oq = this.renderList || qq.frameGraph ? Eq.length : qq.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[lq], this.onBeforeRenderObservable.notifyObservers(lq);
          let mq = null,
            xq = Oq;
          this.getCustomRenderList && (mq = this.getCustomRenderList(lq, Eq, Oq), mq && (xq = mq.length)), mq || (mq = Eq), this.options.doNotChangeAspectRatio || qq.updateTransformMatrix(!0);
          for (let qq = 0; qq < xq && gq; ++qq) {
            const Eq = mq[qq];
            if (!Eq.isEnabled() || Eq.isBlocked || !Eq.isVisible || !Eq.fn) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(Eq, this.refreshRate, !0)) {
                gq = !1;
                continue
              }
            } else if (!Eq.isReady(!0)) {
              gq = !1;
              continue
            }
            let Yq = Eq._edgesRenderer,
              lq = Eq.hasThinInstances;
            if (Eq.GJ) {
              const qq = Eq.Plq;
              qq.edgesShareWithInstances && qq._edgesRenderer?.isEnabled && (Yq = qq._edgesRenderer, lq = !0)
            } else Eq.olq && Eq.edgesShareWithInstances && (lq = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Yq?.isEnabled && (Yq.isReady(lq) || (gq = !1))
          }
          if (this.renderParticles && qq.particlesEnabled) {
            const Eq = this.particleSystemList || qq.xZ;
            for (const qq of Eq) qq.isReady() || (gq = !1)
          }
          if (this.renderSprites && qq.spritesEnabled) {
            const Eq = this.spriteManagerList || qq.spriteManagers;
            if (Eq)
              for (const Yq of Eq) qq.activeCamera && 0 === (Yq.layerMask & qq.activeCamera.layerMask) || Yq.isReady && !Yq.isReady() && (gq = !1)
          }
          this.onAfterRenderObservable.notifyObservers(lq), Yq > 1 && (qq.incrementRenderId(), qq.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = Eq, gq
      }
      _prepareRenderingManager() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this._scene;
        let Yq, lq, Oq = null;
        const mq = this.renderList ? this.renderList : gq.frameGraph ? gq.meshes : gq.getActiveMeshes().data,
          xq = this.renderList || gq.frameGraph ? mq.length : gq.getActiveMeshes().length;
        if (this.getCustomRenderList && (Oq = this.getCustomRenderList(qq, mq, xq)), Oq) Yq = Oq.length, lq = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !Eq && !this._engine.isWebGPU) return mq;
          this._defaultRenderListPrepared = !0, Oq = mq, Yq = xq, lq = !this.renderList || this.forceLayerMaskCheck
        }
        const Aq = gq.activeCamera,
          cq = this.cameraForLOD ?? Aq,
          uq = gq.getBoundingBoxRenderer?.();
        if (gq._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && uq) {
            uq.reset();
            for (let qq = 0; qq < this._activeBoundingBoxes.length; qq++) {
              const Eq = this._activeBoundingBoxes.data[qq];
              uq.renderList.push(Eq)
            }
          }
          return Oq
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), uq && uq.reset(), this.renderMeshes) {
          const qq = gq.getRenderId(),
            Eq = gq.getFrameId();
          for (let mq = 0; mq < Yq; mq++) {
            const Yq = Oq[mq];
            if (Yq && !Yq.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Yq, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Yq.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Oq, mq;
              if (cq) {
                const qq = Yq._internalAbstractMeshDataInfo._currentLOD.get(cq);
                qq && qq[1] === Eq ? Oq = qq[0] : (Oq = gq.customLODSelector ? gq.customLODSelector(Yq, cq) : Yq.getLOD(cq), qq ? (qq[0] = Oq, qq[1] = Eq) : Yq._internalAbstractMeshDataInfo._currentLOD.set(cq, [Oq, Eq]))
              } else Oq = Yq;
              if (!Oq) continue;
              if (Oq !== Yq && 0 !== Oq.billboardMode && Oq.computeWorldMatrix(), Oq._preActivateForIntermediateRendering(qq), mq = !(!lq || !Aq) && 0 === (Yq.layerMask & Aq.layerMask), Yq.isEnabled() && Yq.isVisible && Yq.fn && !mq) {
                if (this._activeMeshes.push(Yq), Oq._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Oq !== Yq && Oq._activate(qq, !0), this.enableBoundingBoxRendering && uq && uq._preActiveMesh(Yq), Yq._activate(qq, !0) && Yq.fn.length) {
                  Yq.GJ ? Yq._internalAbstractMeshDataInfo._actAsRegularMesh && (Oq = Yq) : Oq._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Oq._internalAbstractMeshDataInfo._isActiveIntermediate = !0, gq._prepareSkeleton(Oq);
                  for (let qq = 0; qq < Oq.fn.length; qq++) {
                    const Eq = Oq.fn[qq];
                    this.enableBoundingBoxRendering && uq && uq._evaluateSubMesh(Yq, Eq), this._renderingManager.dispatch(Eq, Oq)
                  }
                }
                Yq._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && uq && Eq)
          for (let Bq = 0; Bq < uq.renderList.length; Bq++) {
            const qq = uq.renderList.data[Bq];
            this._activeBoundingBoxes.push(qq)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const qq = this.particleSystemList || gq.xZ;
          for (let Eq = 0; Eq < qq.length; Eq++) {
            const gq = qq[Eq],
              Yq = gq.emitter;
            gq.isStarted() && Yq && (!Yq.position || Yq.isEnabled()) && this._renderingManager.dispatchParticles(gq)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Oq
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(qq, Eq, gq, Yq)
      }
      setRenderingAutoClearDepthStencil(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(qq, Eq, gq, Yq), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const qq = new Vq(this.name, this._scene, this.options);
        return this.renderList && (qq.renderList = this.renderList.slice(0)), qq
      }
      dispose() {
        const qq = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          Eq = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let gq = 0; gq < Eq; gq++) {
          const Eq = qq[gq];
          Eq && void 0 !== Eq.getMaterialForRenderPass(this.renderPassId) && Eq.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const gq of this._sceneUBOs) gq.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Vq.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Vq.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Vq.REFRESHRATE_RENDER_ONCE = 0, Vq.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Vq.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var dq = gq(39636);
    class jq extends Oq.d {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(qq) {
        this._objectRenderer.renderListPredicate = qq
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(qq) {
        this._objectRenderer.renderList = qq
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(qq) {
        this._objectRenderer.particleSystemList = qq
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(qq) {
        this._objectRenderer.getCustomRenderList = qq
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(qq) {
        this._objectRenderer.renderParticles = qq
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(qq) {
        this._objectRenderer.renderSprites = qq
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(qq) {
        this._objectRenderer.enableBoundingBoxRendering = qq
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(qq) {
        this._objectRenderer.enableOutlineRendering = qq
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(qq) {
        this._objectRenderer.forceLayerMaskCheck = qq
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(qq) {
        this._objectRenderer.activeCamera = qq
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(qq) {
        this._objectRenderer.cameraForLOD = qq
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(qq) {
        this._objectRenderer.disableImageProcessing = qq
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(qq) {
        this._objectRenderer.customIsReadyFunction = qq
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(qq) {
        this._objectRenderer.customRenderFunction = qq
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(qq) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(qq)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(qq) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(qq)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(qq) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(qq)
      }
      set onClear(qq) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(qq)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(qq) {
        this._objectRenderer._waitingRenderList = qq
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
      setMaterialForRendering(qq, Eq) {
        this._objectRenderer.setMaterialForRendering(qq, Eq)
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
      set boundingBoxSize(qq) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(qq)) return;
        this._boundingBoxSize = qq;
        const Eq = this.ZJ();
        Eq && Eq.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(qq, Eq, gq) {
        let mq, xq, cq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Bq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Wq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Oq.d.TRILINEAR_SAMPLINGMODE,
          aq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          dq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          jq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Hq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          oq = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          Pq = arguments.length > 13 ? arguments[13] : void 0,
          Qq = arguments.length > 14 ? arguments[14] : void 0,
          yq = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          tq = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          rq = !0,
          vq = !1;
        if ("object" === typeof cq) {
          const qq = cq;
          cq = !!qq.generateMipMaps, uq = qq.doNotChangeAspectRatio ?? !0, Bq = qq.type ?? 0, Wq = !!qq.isCube, Nq = qq.samplingMode ?? Oq.d.TRILINEAR_SAMPLINGMODE, aq = qq.generateDepthBuffer ?? !0, dq = !!qq.generateStencilBuffer, jq = !!qq.isMulti, Hq = qq.format ?? 5, oq = !!qq.delayAllocation, Pq = qq.samples, Qq = qq.creationFlags, yq = !!qq.noColorAttachment, tq = !!qq.useSRGBBuffer, mq = qq.colorAttachment, rq = qq.gammaSpace ?? rq, xq = qq.existingObjectRenderer, vq = !!qq.enableClusteredLights
        }
        if (super(null, gq, !cq, void 0, Nq, void 0, void 0, void 0, void 0, Hq), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Yq.d, this.onAfterUnbindObservable = new Yq.d, this.onClearObservable = new Yq.d, this.onResizeObservable = new Yq.d, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = lq.q.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(gq = this.ZJ())) return;
        const hq = this.ZJ().Ba();
        this._gammaSpace = rq, this._coordinatesMode = Oq.d.PROJECTION_MODE, this.name = qq, this.isRenderTarget = !0, this._initialSizeParameter = Eq, this._dontDisposeObjectRenderer = !!xq, this._processSizeParameter(Eq), this._objectRenderer = xq ?? new Vq(qq, gq, {
          numPasses: Wq ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: uq,
          enableClusteredLights: vq
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const qq = this._scene;
          if (!this._disableEngineStages)
            for (const Eq of qq._beforeRenderTargetClearStage) Eq.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(hq) : this.skipInitialClear || hq.clear(this.clearColor ?? qq.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || qq.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const Eq of qq._beforeRenderTargetDrawStage) Eq.action(this, this._currentFaceIndex, this._currentLayer);
          hq._debugPushGroup && hq._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (hq._debugPopGroup && hq._debugPopGroup(), !this._disableEngineStages)
            for (const Eq of this._scene._afterRenderTargetDrawStage) Eq.action(this, this._currentFaceIndex, this._currentLayer);
          const qq = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const Eq of this._scene._afterRenderTargetPostProcessStage) Eq.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = qq), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), hq) : Aq.b.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(hq) : this.skipInitialClear || hq.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = hq.onResizeObservable.add((() => {})), this._generateMipMaps = !!cq, this._doNotChangeAspectRatio = uq, jq || (this._renderTargetOptions = {
          generateMipMaps: cq,
          type: Bq,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: aq,
          generateStencilBuffer: dq,
          samples: Pq,
          creationFlags: Qq,
          noColorAttachment: yq,
          useSRGBBuffer: tq,
          colorAttachment: mq,
          label: this.name
        }, this.samplingMode === Oq.d.NEAREST_SAMPLINGMODE && (this.wrapU = Oq.d.CLAMP_ADDRESSMODE, this.wrapV = Oq.d.CLAMP_ADDRESSMODE), oq || (Wq ? (this._renderTarget = gq.Ba().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Oq.d.INVCUBIC_MODE, this._textureMatrix = lq.e.Identity()) : this._renderTarget = gq.Ba().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== Pq && (this.samples = Pq)))
      }
      createDepthStencilTexture() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(qq, Eq, gq, Yq, lq, Oq)
      }
      _processSizeParameter(qq) {
        if (qq.ratio) {
          this._sizeRatio = qq.ratio;
          const Eq = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(Eq.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(Eq.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = qq
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(qq) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(qq))
      }
      addPostProcess(qq) {
        if (!this._postProcessManager) {
          const qq = this.ZJ();
          if (!qq) return;
          this._postProcessManager = new mq.b(qq), this._postProcesses = new Array
        }
        this._postProcesses.push(qq), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (qq)
            for (const qq of this._postProcesses) qq.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(qq) {
        if (!this._postProcesses) return;
        const Eq = this._postProcesses.indexOf(qq); - 1 !== Eq && (this._postProcesses.splice(Eq, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(qq) {
        this._objectRenderer.refreshRate = qq
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
        const qq = this._size.layers;
        if (qq) return qq;
        const Eq = this._size.depth;
        return Eq || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(qq) {
        const Eq = Math.max(1, this.getRenderSize() * qq);
        this.resize(Eq)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(qq) {
        const Eq = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const gq = this.ZJ();
        gq && (this._processSizeParameter(qq), this._renderTarget = Eq ? gq.Ba().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : gq.Ba().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(qq, Eq)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => gq(41581))).then((qq => this._dumpTools = qq))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const qq = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), qq
      }
      _render() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this.ZJ();
        if (!gq) return;
        void 0 !== this.useCameraPostProcesses && (qq = this.useCameraPostProcesses);
        const Yq = gq.Ba();
        if (Yq._debugPushGroup && Yq._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let lq = 0; lq < 6; lq++) this._renderToTarget(lq, qq, Eq), gq.incrementRenderId(), gq.resetCachedMaterial();
          else this._renderToTarget(0, qq, Eq);
        else
          for (let lq = 0; lq < this.getRenderLayers(); lq++) this._renderToTarget(0, qq, Eq, lq), gq.incrementRenderId(), gq.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Yq._debugPopGroup && Yq._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(qq, Eq) {
        const gq = qq * Eq,
          Yq = (0, xq.q)(gq + 16384 / (128 + gq));
        return Math.min((0, xq.d)(qq), Yq)
      }
      _bindFrameBuffer() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = this.ZJ();
        if (!gq) return;
        const Yq = gq.Ba();
        this._renderTarget && Yq.bindFramebuffer(this._renderTarget, this.isCube ? qq : void 0, void 0, void 0, this.ignoreCameraViewport, 0, Eq)
      }
      _unbindFrameBuffer(qq, Eq) {
        this._renderTarget && qq.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Eq)
        }))
      }
      _prepareFrame(qq, Eq, gq, Yq) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(Eq, gq) : Yq && qq.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(Eq, gq)
      }
      _renderToTarget(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const lq = this.ZJ();
        if (!lq) return;
        const Oq = lq.Ba();
        this._currentFaceIndex = qq, this._currentLayer = Yq, this._currentUseCameraPostProcess = Eq, this._currentDumpForDebug = gq, this._prepareFrame(lq, qq, Yq, Eq), this._objectRenderer.render(qq + Yq, !0), this._unbindFrameBuffer(Oq, qq), this._texture && this.isCube && 5 === qq && Oq.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(qq, Eq, gq, Yq)
      }
      setRenderingAutoClearDepthStencil(qq, Eq) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(qq, Eq)
      }
      clone() {
        const qq = this.getSize(),
          Eq = new jq(this.name, qq, this.ZJ(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return Eq.hasAlpha = this.hasAlpha, Eq.level = this.level, Eq.coordinatesMode = this.coordinatesMode, this.renderList && (Eq.renderList = this.renderList.slice(0)), Eq
      }
      serialize() {
        if (!this.name) return null;
        const qq = super.serialize();
        if (qq.renderTargetSize = this.getRenderSize(), qq.renderList = [], this.renderList)
          for (let Eq = 0; Eq < this.renderList.length; Eq++) qq.renderList.push(this.renderList[Eq].id);
        return qq
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.ZJ().Ba().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const qq = this.ZJ();
        if (!qq) return;
        let Eq = qq.customRenderTargets.indexOf(this);
        Eq >= 0 && qq.customRenderTargets.splice(Eq, 1);
        for (const gq of qq.cameras) Eq = gq.customRenderTargets.indexOf(this), Eq >= 0 && gq.customRenderTargets.splice(Eq, 1);
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
    jq.REFRESHRATE_RENDER_ONCE = Vq.REFRESHRATE_RENDER_ONCE, jq.REFRESHRATE_RENDER_ONEVERYFRAME = Vq.REFRESHRATE_RENDER_ONEVERYFRAME, jq.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Vq.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(jq.prototype, "noPrePassRenderer") || Object.defineProperty(jq.prototype, "noPrePassRenderer", (0, dq.e)("RenderTargetTexture", "noPrePassRenderer"))
  },
  41555: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq,
      e: () => uq
    });
    var Yq = gq(39879),
      lq = gq(38065),
      Oq = gq(37156),
      mq = gq(39612),
      xq = gq(40074);
    const Aq = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class cq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Aq;
        this._fullscreenViewport = new lq.c(0, 0, 1, 1);
        const gq = Eq.positions ?? Aq.positions,
          Oq = Eq.indices ?? Aq.indices;
        this.engine = qq, this._vertexBuffers = {
          [Yq.g.PositionKind]: new Yq.g(qq, gq, Yq.g.PositionKind, !1, !1, 2)
        }, this._indexBuffer = qq.createIndexBuffer(Oq), this._indexBufferLength = Oq.length, this._onContextRestoredObserver = qq.onContextRestoredObservable.add((() => {
          this._indexBuffer = qq.createIndexBuffer(Oq);
          for (const qq in this._vertexBuffers) {
            this._vertexBuffers[qq]._rebuild()
          }
        }))
      }
      setViewport() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(qq)
      }
      bindBuffers(qq) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, qq)
      }
      applyEffectWrapper(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = Eq, this.engine.stencilState.stencilTest = gq, this.engine.enableEffect(qq.drawWrapper), this.bindBuffers(qq.effect), qq.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(qq) {
        return void 0 !== qq.renderTarget
      }
      render(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!qq.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const gq = null === Eq ? null : this._isRenderTargetTexture(Eq) ? Eq.renderTarget : Eq;
        gq && this.engine.bindFramebuffer(gq), this.applyEffectWrapper(qq), this.draw(), gq && this.engine.unBindFramebuffer(gq), this.restoreStates()
      }
      dispose() {
        const qq = this._vertexBuffers[Yq.g.PositionKind];
        qq && (qq.dispose(), delete this._vertexBuffers[Yq.g.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class uq {
      static RegisterShaderCodeProcessing(qq, Eq) {
        Eq ? uq._CustomShaderCodeProcessing[qq ?? ""] = Eq : delete uq._CustomShaderCodeProcessing[qq ?? ""]
      }
      static _GetShaderCodeProcessing(qq) {
        return uq._CustomShaderCodeProcessing[qq] ?? uq._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(qq) {
        this.options.name = qq
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
      set effect(qq) {
        this._drawWrapper.effect = qq
      }
      constructor(qq) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Oq.d(void 0, !0), this.onApplyObservable = new Oq.d, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...qq,
          name: qq.name || "effectWrapper",
          engine: qq.engine,
          uniforms: qq.uniforms || qq.uniformNames || [],
          uniformNames: void 0,
          samplers: qq.samplers || qq.samplerNames || [],
          samplerNames: void 0,
          attributeNames: qq.attributeNames || ["position"],
          uniformBuffers: qq.uniformBuffers || [],
          defines: qq.defines || "",
          useShaderStore: qq.useShaderStore || !1,
          vertexUrl: qq.vertexUrl || qq.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: qq.fragmentShader || "pass",
          indexParameters: qq.indexParameters,
          blockCompilation: qq.blockCompilation || !1,
          shaderLanguage: qq.shaderLanguage || 0,
          onCompiled: qq.onCompiled || void 0,
          extraInitializations: qq.extraInitializations || void 0,
          extraInitializationsAsync: qq.extraInitializationsAsync || void 0,
          useAsPostProcess: qq.useAsPostProcess ?? !1,
          allowEmptySourceTexture: qq.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), qq.vertexUrl || qq.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new xq.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const Eq = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, Eq, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Yq = arguments.length > 2 ? arguments[2] : void 0,
          lq = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, lq && this._importPromises.push(...lq);
        const Oq = this.options.engine.isWebGPU && !uq.ForceGLSL;
        this._gatherImports(Oq, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Oq && this._webGPUReady ? gq.e(357).then((() => gq(61371))) : gq.e(346).then((() => gq(61138)))), void 0 !== Yq && Yq(Oq, this._importPromises), Oq && this._webGPUReady && (this.options.shaderLanguage = 1), qq || this.updateEffect(Eq)
      }
      updateEffect() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          xq = arguments.length > 6 ? arguments[6] : void 0,
          Aq = arguments.length > 7 ? arguments[7] : void 0;
        const cq = uq._GetShaderCodeProcessing(this.name);
        if (cq?.defineCustomBindings) {
          const Yq = Eq?.slice() ?? [];
          Yq.push(...this.options.uniforms);
          const lq = gq?.slice() ?? [];
          lq.push(...this.options.samplers), qq = cq.defineCustomBindings(this.name, qq, Yq, lq), Eq = Yq, gq = lq
        }
        this.options.defines = qq || "";
        const Bq = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Wq;
        Wq = this.options.extraInitializationsAsync ? async () => {
          await (Bq?.()), await this.options.extraInitializationsAsync()
        }: Bq, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: xq ?? this._shaderPath.vertex,
          fragment: Aq ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: Eq || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: gq || this.options.samplers,
          defines: null !== qq ? qq : "",
          fallbacks: null,
          onCompiled: lq ?? this.options.onCompiled,
          onError: Oq ?? null,
          indexParameters: Yq || this.options.indexParameters,
          processCodeAfterIncludes: cq?.processCodeAfterIncludes ? (qq, Eq) => cq.processCodeAfterIncludes(this.name, qq, Eq) : null,
          processFinalCode: cq?.processFinalCode ? (qq, Eq) => cq.processFinalCode(this.name, qq, Eq) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Wq
        }, this.options.engine) : this._drawWrapper.effect = new mq.d(this._shaderPath, this.options.attributeNames, Eq || this.options.uniforms, gq || this.options.samplerNames, this.options.engine, qq, void 0, lq || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Wq), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !qq && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), uq._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.Ba().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    uq.ForceGLSL = !1, uq._CustomShaderCodeProcessing = {}
  },
  41581: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Dispose: () => Hq,
      DumpData: () => jq,
      DumpDataAsync: () => dq,
      DumpFramebuffer: () => Vq,
      DumpTools: () => oq,
      EncodeImageAsync: () => aq,
      RegisterDumpTools: () => Qq
    });
    var Yq = gq(39757),
      lq = gq(41555),
      Oq = gq(39845),
      mq = gq(37158),
      xq = gq(37153),
      Aq = gq(38653),
      cq = gq(39810),
      uq = gq(39759);
    let Bq = null;
    async function Wq() {
      return Bq || (Bq = async function() {
        const qq = xq.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        qq instanceof OffscreenCanvas && Aq.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: Eq
        } = await Promise.resolve().then((() => gq(39608)));
        if (!Eq.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Yq = new Eq(qq, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        xq.b.Instances.pop(), xq.b.OnEnginesDisposedObservable.add((qq => {
          Yq && qq !== Yq && !Yq.bM && 0 === xq.b.Instances.length && Hq()
        })), Yq.getCaps().parallelShaderCompile = void 0;
        const Oq = new lq.b(Yq),
          {
            passPixelShader: mq
          } = await gq.e(365).then((() => gq(61424))),
          cq = new lq.e({
            engine: Yq,
            name: mq.name,
            fragmentShader: mq.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: qq,
          dumpEngine: {
            engine: Yq,
            renderer: Oq,
            wrapper: cq
          }
        }
      }()), await Bq
    }
    let Nq = (() => {
      var qq;
      let Eq, gq = [];
      return qq = class {
        static async EncodeImageAsync(qq, Eq, gq, Yq, lq, mq) {
          const xq = await Wq(),
            Aq = xq.dumpEngine;
          Aq.engine.setSize(Eq, gq, !0);
          const cq = Aq.engine.createRawTexture(qq, Eq, gq, 5, !1, !lq, 1);
          return Aq.renderer.setViewport(), Aq.renderer.applyEffectWrapper(Aq.wrapper), Aq.wrapper.effect._bindTexture("textureSampler", cq), Aq.renderer.draw(), cq.dispose(), await new Promise(((qq, Eq) => {
            Oq.f.ToBlob(xq.canvas, (gq => {
              gq ? qq(gq) : Eq(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Yq, mq)
          }))
        }
      }, (() => {
        const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [uq.j], (0, Yq.f)(qq, null, Eq, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: qq => "EncodeImageAsync" in qq,
            get: qq => qq.EncodeImageAsync
          },
          metadata: lq
        }, null, gq), lq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lq
        }), (0, Yq.i)(qq, gq)
      })(), qq
    })();
    const aq = Nq.EncodeImageAsync;
    async function Vq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Oq = arguments.length > 5 ? arguments[5] : void 0,
        mq = arguments.length > 6 ? arguments[6] : void 0;
      const xq = await gq.readPixels(0, 0, qq, Eq);
      jq(qq, Eq, new Uint8Array(xq.buffer), Yq, lq, Oq, !0, void 0, mq)
    }
    async function dq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        lq = arguments.length > 4 ? arguments[4] : void 0,
        xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Bq = arguments.length > 7 ? arguments[7] : void 0;
      if (gq instanceof Float32Array) {
        const qq = new Uint8Array(gq.length);
        let Eq = gq.length;
        for (; Eq--;) {
          const Yq = gq[Eq];
          qq[Eq] = Math.round(255 * (0, mq.Clamp)(Yq))
        }
        gq = qq
      }
      const Wq = await Nq.EncodeImageAsync(gq, qq, Eq, Yq, xq, Bq);
      void 0 !== lq && Oq.f.DownloadBlob(Wq, lq), Wq.type !== Yq && Aq.b.Warn(`DumpData: The requested mimeType '${Yq}' is not supported. The result has mimeType '${Wq.type}' instead.`);
      const aq = await Wq.arrayBuffer();
      return uq ? aq : `data:${Yq};base64,${(0,cq.f)(aq)}`
    }

    function jq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== lq || Yq || (lq = ""), dq(qq, Eq, gq, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", lq, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((qq => {
        Yq && Yq(qq)
      }))
    }

    function Hq() {
      Bq && (Bq?.then((qq => {
        qq.canvas instanceof HTMLCanvasElement && qq.canvas.remove(), qq.dumpEngine && (qq.dumpEngine.engine.dispose(), qq.dumpEngine.renderer.dispose(), qq.dumpEngine.wrapper.dispose())
      })), Bq = null)
    }
    const oq = {
      DumpData: jq,
      DumpDataAsync: dq,
      DumpFramebuffer: Vq,
      Dispose: Hq
    };
    let Pq = !1;

    function Qq() {
      if (Pq) return;
      Pq = !0;
      Oq.f.DumpData = jq, Oq.f.DumpDataAsync = dq, Oq.f.DumpFramebuffer = Vq
    }
  },
  41561: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Vq
    });
    var Yq = gq(40233),
      lq = gq(41568),
      Oq = gq(39757),
      mq = gq(41551),
      xq = gq(39779),
      Aq = gq(41577),
      cq = gq(39759);
    class uq extends mq.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 4 ? arguments[4] : void 0;
        const Yq = {
          size: "number" === typeof Eq ? Eq : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: gq,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...Eq
        };
        super(qq, Aq.f.FragmentUrl, {
          effectWrapper: "number" !== typeof Eq && Eq.effectWrapper ? void 0 : new Aq.f(qq, gq, Yq),
          ...Yq
        })
      }
      static _Parse(qq, Eq, gq, Yq) {
        return xq.d.Parse((() => new uq(qq.name, qq.options, Eq, qq.renderTargetSamplingMode, qq._engine, qq.reusable)), qq, gq, Yq)
      }
    }(() => {
      var qq;
      let Eq, gq = mq.e,
        Yq = [];
      qq = class extends gq {
        get face() {
          return this._effectWrapper.face
        }
        set face(qq) {
          this._effectWrapper.face = qq
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(qq, Eq) {
          let gq = arguments.length > 4 ? arguments[4] : void 0;
          const lq = {
            size: "number" === typeof Eq ? Eq : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: gq,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...Eq
          };
          super(qq, Aq.f.FragmentUrl, {
            effectWrapper: "number" !== typeof Eq && Eq.effectWrapper ? void 0 : new Aq.d(qq, gq, lq),
            ...lq
          }), (0, Oq.i)(this, Yq)
        }
        static _Parse(Eq, gq, Yq, lq) {
          return xq.d.Parse((() => new qq(Eq.name, Eq.options, gq, Eq.renderTargetSamplingMode, Eq._engine, Eq.reusable)), Eq, Yq, lq)
        }
      }, (() => {
        const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(gq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, cq.M)()], (0, Oq.f)(qq, null, Eq, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: qq => "face" in qq,
            get: qq => qq.face
          },
          metadata: lq
        }, null, Yq), lq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lq
        })
      })()
    })();
    var Bq = gq(37158),
      Wq = gq(39819);

    function Nq(qq, Eq, gq, Yq, lq, Oq, xq, Aq) {
      const cq = Eq.Ba();
      return Eq.isReady = !1, lq = lq ?? Eq.samplingMode, Yq = Yq ?? Eq.type, Oq = Oq ?? Eq.format, xq = xq ?? Eq.width, Aq = Aq ?? Eq.height, -1 === Yq && (Yq = 0), new Promise((uq => {
        const Bq = new mq.e("postprocess", qq, null, null, 1, null, lq, cq, !1, void 0, Yq, void 0, null, !1, Oq);
        Bq.externalTextureSamplerBinding = !0;
        const Wq = cq.createRenderTargetTexture({
          width: xq,
          height: Aq
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: lq,
          type: Yq,
          format: Oq
        });
        Bq.onEffectCreatedObservable.addOnce((qq => {
          qq.executeWhenCompiled((() => {
            Bq.onApply = qq => {
              qq._bindTexture("textureSampler", Eq), qq.setFloat2("scale", 1, 1)
            }, gq.postProcessManager.directRender([Bq], Wq, !0), cq.restoreDefaultFramebuffer(), cq._releaseTexture(Eq), Bq && Bq.dispose(), Wq._swapAndDie(Eq), Eq.type = Yq, Eq.format = 5, Eq.isReady = !0, uq(Eq)
          }))
        }))
      }))
    }
    async function aq(qq, Eq, Oq) {
      let xq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Aq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        cq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(qq) {
        if (qq.isReady()) return;
        if (qq.loadingError) throw new Error(qq.errorObject?.message || `Texture ${qq.name} errored while loading.`);
        const Eq = qq.onLoadObservable;
        if (Eq) return await new Promise((qq => Eq.addOnce((() => qq()))));
        const gq = qq._texture?.onLoadedObservable;
        if (gq) return await new Promise((qq => gq.addOnce((() => qq()))));
        throw new Error(`Cannot determine readiness of texture ${qq.name}.`)
      }(qq);
      const Wq = qq.getInternalTexture(),
        Nq = qq.is3D || !!Wq?.is3D,
        {
          width: aq,
          height: Vq
        } = qq.getSize(),
        dq = Eq ?? aq,
        jq = Oq ?? Vq;
      if (cq || Nq || function(qq) {
          switch (qq) {
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
        }(qq.textureFormat) || dq !== aq || jq !== Vq) {
        if (qq.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${cq?"RTT":"compression"} is not supported.`);
        return await async function(qq, Eq, Oq, xq, Aq) {
          let cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const uq = qq.ZJ(),
            Bq = uq.Ba(),
            Wq = qq.getInternalTexture(),
            Nq = qq.is3D || !!Wq?.is3D;
          let aq;
          if (Bq.isWebGPU ? Nq ? await gq.e(361).then((() => gq(61408))) : qq.isCube ? await gq.e(362).then((() => gq(61415))) : await gq.e(363).then((() => gq(61419))) : Nq ? await gq.e(358).then((() => gq(61393))) : qq.isCube ? await gq.e(359).then((() => gq(61396))) : await gq.e(360).then((() => gq(61402))), Nq) aq = new mq.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Yq.d.NEAREST_NEAREST_MIPNEAREST,
            engine: Bq,
            shaderLanguage: Bq.isWebGPU ? 1 : 0
          });
          else if (qq.isCube) {
            const qq = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            aq = new mq.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Yq.d.NEAREST_NEAREST_MIPNEAREST,
              engine: Bq,
              defines: qq[xq],
              shaderLanguage: Bq.isWebGPU ? 1 : 0
            })
          } else aq = new mq.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Yq.d.NEAREST_NEAREST_MIPNEAREST,
            engine: Bq,
            shaderLanguage: Bq.isWebGPU ? 1 : 0
          });
          await new Promise((qq => {
            aq.onEffectCreatedObservable.addOnce((Eq => {
              Eq.executeWhenCompiled((() => {
                qq(0)
              }))
            }))
          }));
          const Vq = new lq.c("temp", {
            width: Eq,
            height: Oq
          }, uq, !1);
          aq.onApply = function(Eq) {
            Eq.setTexture("textureSampler", qq), Eq.setFloat("lod", Aq), Eq.setInt("gamma", qq.gammaSpace ? 1 : 0), Nq && Eq.setFloat("slice", cq)
          };
          try {
            if (Vq.renderTarget && Wq) {
              const gq = Wq.samplingMode;
              0 !== Aq ? qq.updateSamplingMode(Yq.d.NEAREST_NEAREST_MIPNEAREST) : qq.updateSamplingMode(Yq.d.NEAREST_NEAREST), uq.postProcessManager.directRender([aq], Vq.renderTarget, !0), qq.updateSamplingMode(gq);
              const lq = await Bq.readPixels(0, 0, Eq, Oq),
                mq = new Uint8Array(lq.buffer, lq.byteOffset, lq.byteLength);
              return Bq.unBindFramebuffer(Vq.renderTarget), mq
            }
            throw Error("Render to texture failed.")
          } finally {
            Vq.dispose(), aq.dispose()
          }
        }(qq, dq, jq, xq, Aq, uq)
      }
      let Hq = await qq.readPixels(xq, Aq);
      if (!Hq) throw new Error(`Failed to read pixels from texture ${qq.name}.`);
      if (Hq instanceof Float32Array) {
        const qq = new Uint8Array(Hq.length);
        let Eq = Hq.length;
        for (; Eq--;) {
          const gq = Hq[Eq];
          qq[Eq] = Math.round(255 * (0, Bq.Clamp)(gq))
        }
        Hq = qq
      }
      const oq = dq * jq,
        Pq = 4 * oq;
      if (Hq.length !== Pq) {
        const qq = 0 === oq ? 0 : Hq.length / oq;
        if (1 === qq || 2 === qq || 3 === qq) {
          const Eq = new Uint8Array(Pq);
          for (let gq = 0, Yq = 0, lq = 0; gq < oq; gq++, lq += 4) {
            const gq = Hq[Yq++];
            if (1 === qq) {
              Eq[lq] = gq, Eq[lq + 1] = gq, Eq[lq + 2] = gq, Eq[lq + 3] = 255;
              continue
            }
            const Oq = Hq[Yq++];
            2 !== qq ? (Eq[lq] = gq, Eq[lq + 1] = Oq, Eq[lq + 2] = Hq[Yq++], Eq[lq + 3] = 255) : (Eq[lq] = gq, Eq[lq + 1] = Oq, Eq[lq + 2] = 0, Eq[lq + 3] = 255)
          }
          return Eq
        }
      }
      return Hq
    }
    const Vq = {
      CreateResizedCopy: function(qq, Eq, gq) {
        let Oq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const mq = qq.ZJ(),
          xq = mq.Ba(),
          Aq = new lq.c("resized" + qq.name, {
            width: Eq,
            height: gq
          }, mq, !qq.noMipmap, !0, qq._texture.type, !1, qq.samplingMode, !1);
        Aq.wrapU = qq.wrapU, Aq.wrapV = qq.wrapV, Aq.uOffset = qq.uOffset, Aq.vOffset = qq.vOffset, Aq.uScale = qq.uScale, Aq.vScale = qq.vScale, Aq.uAng = qq.uAng, Aq.vAng = qq.vAng, Aq.wAng = qq.wAng, Aq.coordinatesIndex = qq.coordinatesIndex, Aq.level = qq.level, Aq.anisotropicFilteringLevel = qq.anisotropicFilteringLevel, Aq._texture.isReady = !1, qq.wrapU = Yq.d.CLAMP_ADDRESSMODE, qq.wrapV = Yq.d.CLAMP_ADDRESSMODE;
        const cq = new uq("pass", 1, null, Oq ? Yq.d.BILINEAR_SAMPLINGMODE : Yq.d.NEAREST_SAMPLINGMODE, xq, !1, 0);
        return cq.externalTextureSamplerBinding = !0, cq.onEffectCreatedObservable.addOnce((Eq => {
          Eq.executeWhenCompiled((() => {
            cq.onApply = function(Eq) {
              Eq.setTexture("textureSampler", qq)
            };
            const Eq = Aq.renderTarget;
            Eq && (mq.postProcessManager.directRender([cq], Eq), xq.unBindFramebuffer(Eq), Aq.disposeFramebufferObjects(), cq.dispose(), Aq.getInternalTexture().isReady = !0)
          }))
        })), Aq
      },
      ApplyPostProcess: Nq,
      ToHalfFloat: Wq.j,
      FromHalfFloat: Wq.e,
      GetTextureDataAsync: aq
    }
  },
  41551: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => aq
    });
    var Yq = gq(39757),
      lq = gq(39858),
      Oq = gq(37156),
      mq = gq(37139),
      xq = gq(39612),
      Aq = gq(39759),
      cq = gq(39779),
      uq = gq(37171),
      Bq = gq(39653),
      Wq = gq(39696),
      Nq = gq(41555);
    let aq = (() => {
        var qq;
        let Eq, xq, Bq, aq, Vq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq = [],
          iq = [],
          Zq = [],
          fq = [],
          Mq = [],
          Tq = [],
          zq = [],
          Sq = [],
          pq = [],
          Gq = [],
          Lq = [],
          Jq = [],
          kq = [],
          Rq = [],
          Uq = [],
          Fq = [],
          sq = [],
          Xq = [],
          wq = [],
          Kq = [],
          Cq = [],
          Iq = [],
          eq = [],
          Dq = [],
          qE = [],
          EE = [],
          gE = [],
          YE = [],
          lE = [];
        return qq = class {
          static get ForceGLSL() {
            return Nq.e.ForceGLSL
          }
          static set ForceGLSL(qq) {
            Nq.e.ForceGLSL = qq
          }
          static RegisterShaderCodeProcessing(qq, Eq) {
            Nq.e.RegisterShaderCodeProcessing(qq, Eq)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(qq) {
            this._effectWrapper.name = qq
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(qq) {
            this._effectWrapper.alphaMode = qq
          }
          get samples() {
            return this._samples
          }
          set samples(qq) {
            this._samples = Math.min(qq, this._engine.getCaps().maxMSAASamples), this._textures.forEach((qq => {
              qq.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(qq) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), qq && (this._onActivateObserver = this.onActivateObservable.add(qq))
          }
          set onSizeChanged(qq) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(qq)
          }
          set onApply(qq) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(qq)
          }
          set onBeforeRender(qq) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(qq)
          }
          set onAfterRender(qq) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(qq)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(qq) {
            this._forcedOutputTexture = qq
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.X3
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.Vqq(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(Eq, gq, xq, Aq, cq, uq) {
            let Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Wq = arguments.length > 7 ? arguments[7] : void 0,
              aq = arguments.length > 8 ? arguments[8] : void 0,
              Vq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              jq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Hq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              oq = arguments.length > 12 ? arguments[12] : void 0,
              Pq = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              Qq = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              yq = arguments.length > 15 ? arguments[15] : void 0,
              tq = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Yq.i)(this, bq), null), this.uniqueId = (0, Yq.i)(this, iq, void 0), this.width = ((0, Yq.i)(this, Zq), (0, Yq.i)(this, fq, -1)), this.height = ((0, Yq.i)(this, Mq), (0, Yq.i)(this, Tq, -1)), this.nodeMaterialSource = ((0, Yq.i)(this, zq), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Yq.i)(this, Sq, void 0), this.clearColor = ((0, Yq.i)(this, pq), (0, Yq.i)(this, Gq, void 0)), this.autoClear = ((0, Yq.i)(this, Lq), (0, Yq.i)(this, Jq, !0)), this.forceAutoClearInAlphaMode = ((0, Yq.i)(this, kq), (0, Yq.i)(this, Rq, !1)), this.alphaConstants = ((0, Yq.i)(this, Uq), (0, Yq.i)(this, Fq, void 0)), this.animations = ((0, Yq.i)(this, sq), []), this.enablePixelPerfectMode = (0, Yq.i)(this, Xq, !1), this.forceFullscreenViewport = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, !0)), this.inspectableCustomProperties = (0, Yq.i)(this, Cq), this.scaleMode = (0, Yq.i)(this, Iq, 1), this.alwaysForcePOT = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, !1)), this._samples = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, 1)), this.adaptScaleToCurrentViewport = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, !1)), this.doNotSerialize = ((0, Yq.i)(this, lE), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new lq.c(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new mq.p(1, 1), this._texelSize = mq.p.Zero(), this.onActivateObservable = new Oq.d, this.onSizeChangedObservable = new Oq.d, this.onApplyObservable = new Oq.d, this.onBeforeRenderObservable = new Oq.d, this.onAfterRenderObservable = new Oq.d, this.MJ = new Oq.d, dq();
            let rq, vq = 1,
              hq = null;
            if (xq && !Array.isArray(xq)) {
              const qq = xq;
              xq = qq.uniforms ?? null, Aq = qq.samplers ?? null, vq = qq.size ?? 1, uq = qq.camera ?? null, Bq = qq.samplingMode ?? 1, Wq = qq.engine, aq = qq.reusable, Vq = Array.isArray(qq.defines) ? qq.defines.join("\n") : qq.defines ?? null, jq = qq.textureType ?? 0, Hq = qq.vertexUrl ?? "postprocess", oq = qq.indexParameters, Pq = qq.blockCompilation ?? !1, Qq = qq.textureFormat ?? 5, yq = qq.shaderLanguage ?? 0, hq = qq.uniformBuffers ?? null, tq = qq.extraInitializations, rq = qq.effectWrapper
            } else cq && (vq = "number" === typeof cq ? cq : {
              width: cq.width,
              height: cq.height
            });
            if (this._useExistingThinPostProcess = !!rq, this._effectWrapper = rq ?? new Nq.e({
                name: Eq,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: gq,
                engine: Wq || uq?.ZJ().Ba(),
                uniforms: xq,
                samplers: Aq,
                uniformBuffers: hq,
                defines: Vq,
                vertexUrl: Hq,
                indexParameters: oq,
                blockCompilation: !0,
                shaderLanguage: yq,
                extraInitializations: void 0
              }), this.name = Eq, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != uq ? (this.X3 = uq, this._scene = uq.ZJ(), uq.attachPostProcess(this), this._engine = this._scene.Ba(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Wq && (this._engine = Wq, this._engine.postProcesses.push(this)), this._options = vq, this.renderTargetSamplingMode = Bq || 1, this._reusable = aq || !1, this._textureType = jq, this._textureFormat = Qq, this._shaderLanguage = yq || 0, this._samplers = Aq || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = gq, this._vertexUrl = Hq, this._parameters = xq || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = hq || [], this._indexParameters = oq, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const Eq = [];
              this._gatherImports(this._engine.isWebGPU && !qq.ForceGLSL, Eq), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(Pq, Vq, tq, Eq)
            }
          }
          _gatherImports() {
            let qq = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? qq.push(Promise.all([gq.e(357).then((() => gq(61371)))])) : qq.push(Promise.all([gq.e(346).then((() => gq(61138)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          Ba() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(qq) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = qq, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new lq.c(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Yq = arguments.length > 3 ? arguments[3] : void 0,
              lq = arguments.length > 4 ? arguments[4] : void 0,
              Oq = arguments.length > 5 ? arguments[5] : void 0,
              mq = arguments.length > 6 ? arguments[6] : void 0,
              xq = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(qq, Eq, gq, Yq, lq, Oq, mq, xq), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let lq = 0; lq < this._textureCache.length; lq++)
              if (this._textureCache[lq].texture.width === qq.width && this._textureCache[lq].texture.height === qq.height && this._textureCache[lq].postProcessChannel === gq && this._textureCache[lq].texture._generateDepthBuffer === Eq.generateDepthBuffer && this._textureCache[lq].texture.samples === Eq.samples) return this._textureCache[lq].texture;
            const Yq = this._engine.createRenderTargetTexture(qq, Eq);
            return this._textureCache.push({
              texture: Yq,
              postProcessChannel: gq,
              lastUsedRenderId: -1
            }), Yq
          }
          _flushTextureCache() {
            const qq = this._renderId;
            for (let Eq = this._textureCache.length - 1; Eq >= 0; Eq--)
              if (qq - this._textureCache[Eq].lastUsedRenderId > 100) {
                let qq = !1;
                for (let gq = 0; gq < this._textures.length; gq++)
                  if (this._textures.data[gq] === this._textureCache[Eq].texture) {
                    qq = !0;
                    break
                  } qq || (this._textureCache[Eq].texture.dispose(), this._textureCache.splice(Eq, 1))
              }
          }
          resize(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = qq, this.height = Eq;
            let Oq = null;
            if (gq)
              for (let Aq = 0; Aq < gq._postProcesses.length; Aq++)
                if (null !== gq._postProcesses[Aq]) {
                  Oq = gq._postProcesses[Aq];
                  break
                } const mq = {
                width: this.width,
                height: this.height
              },
              xq = {
                generateMipMaps: Yq,
                generateDepthBuffer: lq || Oq === this,
                generateStencilBuffer: (lq || Oq === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(mq, xq, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(mq, xq, 1)), this._texelSize.Vqq(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let qq;
            if (this._shareOutputWithPostProcess) qq = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) qq = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let Eq;
              qq = this.inputTexture;
              for (let gq = 0; gq < this._textureCache.length; gq++)
                if (this._textureCache[gq].texture === qq) {
                  Eq = this._textureCache[gq];
                  break
                } Eq && (Eq.lastUsedRenderId = this._renderId)
            }
            return qq
          }
          activate(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              gq = arguments.length > 2 ? arguments[2] : void 0;
            const Yq = null === qq || void 0 !== qq.cameraRigMode ? qq || this.X3 : null,
              lq = Yq?.ZJ() ?? qq,
              Oq = lq.Ba(),
              mq = Oq.getCaps().maxTextureSize,
              xq = (Eq ? Eq.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Aq = (Eq ? Eq.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let cq = this._options.width || xq,
              uq = this._options.height || Aq;
            const Bq = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Nq = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const qq = Oq.currentViewport;
                qq && (cq *= qq.width, uq *= qq.height)
              }(Bq || this.alwaysForcePOT) && (this._options.width || (cq = Oq.needPOTTextures ? (0, Wq.g)(cq, mq, this.scaleMode) : cq), this._options.height || (uq = Oq.needPOTTextures ? (0, Wq.g)(uq, mq, this.scaleMode) : uq)), this.width === cq && this.height === uq && (Nq = this._getTarget()) || this.resize(cq, uq, Yq, Bq, gq), this._textures.forEach((qq => {
                qq.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(qq, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Nq || (Nq = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.Vqq(xq / cq, Aq / uq), this._engine.bindFramebuffer(Nq, 0, xq, Aq, this.forceFullscreenViewport)) : (this._scaleRatio.Vqq(1, 1), this._engine.bindFramebuffer(Nq, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Yq), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : lq.clearColor, lq._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Nq
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
            let qq;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.Ba().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), qq = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", qq?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let qq = this._textureCache.length - 1; qq >= 0; qq--) this._textureCache[qq].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(qq) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = qq.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(qq) {
            let Eq;
            if (qq = qq || this.X3, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (Eq = this._parentContainer.postProcesses.indexOf(this), Eq > -1 && this._parentContainer.postProcesses.splice(Eq, 1), this._parentContainer = null), Eq = this._engine.postProcesses.indexOf(this), -1 !== Eq && this._engine.postProcesses.splice(Eq, 1), this.MJ.notifyObservers(), qq) {
              if (qq.detachPostProcess(this), Eq = qq._postProcesses.indexOf(this), 0 === Eq && qq._postProcesses.length > 0) {
                const qq = this.X3._getFirstPostProcess();
                qq && qq.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const qq = cq.d.Serialize(this),
              Eq = this.getCamera() || this._scene && this._scene.activeCamera;
            return qq.customType = "BABYLON." + this.getClassName(), qq.cameraId = Eq ? Eq.id : null, qq.reusable = this._reusable, qq.textureType = this._textureType, qq.fragmentUrl = this._fragmentUrl, qq.parameters = this._parameters, qq.samplers = this._samplers, qq.uniformBuffers = this._uniformBuffers, qq.options = this._options, qq.defines = this._postProcessDefines, qq.textureFormat = this._textureFormat, qq.vertexUrl = this._vertexUrl, qq.indexParameters = this._indexParameters, qq
          }
          clone() {
            const Eq = this.serialize();
            Eq._engine = this._engine, Eq.cameraId = null;
            const gq = qq.Parse(Eq, this._scene, "");
            return gq ? (gq.onActivateObservable = this.onActivateObservable.clone(), gq.onSizeChangedObservable = this.onSizeChangedObservable.clone(), gq.onApplyObservable = this.onApplyObservable.clone(), gq.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), gq.onAfterRenderObservable = this.onAfterRenderObservable.clone(), gq._prePassEffectConfiguration = this._prePassEffectConfiguration, gq) : null
          }
          static Parse(qq, Eq, gq) {
            const Yq = (0, uq.e)(qq.customType);
            if (!Yq || !Yq._Parse) return null;
            const lq = Eq ? Eq.getCameraById(qq.cameraId) : null;
            return Yq._Parse(qq, lq, Eq, gq)
          }
          static _Parse(Eq, gq, Yq, lq) {
            return cq.d.Parse((() => new qq(Eq.name, Eq.fragmentUrl, Eq.parameters, Eq.samplers, Eq.options, gq, Eq.renderTargetSamplingMode, Eq._engine, Eq.reusable, Eq.defines, Eq.textureType, Eq.vertexUrl, Eq.indexParameters, !1, Eq.textureFormat)), Eq, Yq, lq)
          }
        }, (() => {
          const gq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eq = [(0, Aq.M)()], xq = [(0, Aq.M)()], Bq = [(0, Aq.M)()], aq = [(0, Aq.M)()], Vq = [(0, Aq.M)()], jq = [(0, Aq.q)()], Hq = [(0, Aq.M)()], oq = [(0, Aq.M)()], Pq = [(0, Aq.M)()], Qq = [(0, Aq.M)()], yq = [(0, Aq.M)()], tq = [(0, Aq.M)()], rq = [(0, Aq.M)()], vq = [(0, Aq.M)()], hq = [(0, Aq.M)("samples")], nq = [(0, Aq.M)()], (0, Yq.f)(qq, null, xq, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: qq => "name" in qq,
              get: qq => qq.name
            },
            metadata: gq
          }, null, bq), (0, Yq.f)(qq, null, Pq, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "alphaMode" in qq,
              get: qq => qq.alphaMode
            },
            metadata: gq
          }, null, bq), (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: qq => "uniqueId" in qq,
              get: qq => qq.uniqueId,
              set: (qq, Eq) => {
                qq.uniqueId = Eq
              }
            },
            metadata: gq
          }, iq, Zq), (0, Yq.f)(null, null, Bq, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: qq => "width" in qq,
              get: qq => qq.width,
              set: (qq, Eq) => {
                qq.width = Eq
              }
            },
            metadata: gq
          }, fq, Mq), (0, Yq.f)(null, null, aq, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: qq => "height" in qq,
              get: qq => qq.height,
              set: (qq, Eq) => {
                qq.height = Eq
              }
            },
            metadata: gq
          }, Tq, zq), (0, Yq.f)(null, null, Vq, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "renderTargetSamplingMode" in qq,
              get: qq => qq.renderTargetSamplingMode,
              set: (qq, Eq) => {
                qq.renderTargetSamplingMode = Eq
              }
            },
            metadata: gq
          }, Sq, pq), (0, Yq.f)(null, null, jq, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "clearColor" in qq,
              get: qq => qq.clearColor,
              set: (qq, Eq) => {
                qq.clearColor = Eq
              }
            },
            metadata: gq
          }, Gq, Lq), (0, Yq.f)(null, null, Hq, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: qq => "autoClear" in qq,
              get: qq => qq.autoClear,
              set: (qq, Eq) => {
                qq.autoClear = Eq
              }
            },
            metadata: gq
          }, Jq, kq), (0, Yq.f)(null, null, oq, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "forceAutoClearInAlphaMode" in qq,
              get: qq => qq.forceAutoClearInAlphaMode,
              set: (qq, Eq) => {
                qq.forceAutoClearInAlphaMode = Eq
              }
            },
            metadata: gq
          }, Rq, Uq), (0, Yq.f)(null, null, Qq, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: qq => "alphaConstants" in qq,
              get: qq => qq.alphaConstants,
              set: (qq, Eq) => {
                qq.alphaConstants = Eq
              }
            },
            metadata: gq
          }, Fq, sq), (0, Yq.f)(null, null, yq, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "enablePixelPerfectMode" in qq,
              get: qq => qq.enablePixelPerfectMode,
              set: (qq, Eq) => {
                qq.enablePixelPerfectMode = Eq
              }
            },
            metadata: gq
          }, Xq, wq), (0, Yq.f)(null, null, tq, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: qq => "forceFullscreenViewport" in qq,
              get: qq => qq.forceFullscreenViewport,
              set: (qq, Eq) => {
                qq.forceFullscreenViewport = Eq
              }
            },
            metadata: gq
          }, Kq, Cq), (0, Yq.f)(null, null, rq, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "scaleMode" in qq,
              get: qq => qq.scaleMode,
              set: (qq, Eq) => {
                qq.scaleMode = Eq
              }
            },
            metadata: gq
          }, Iq, eq), (0, Yq.f)(null, null, vq, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: qq => "alwaysForcePOT" in qq,
              get: qq => qq.alwaysForcePOT,
              set: (qq, Eq) => {
                qq.alwaysForcePOT = Eq
              }
            },
            metadata: gq
          }, Dq, qE), (0, Yq.f)(null, null, hq, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: qq => "_samples" in qq,
              get: qq => qq._samples,
              set: (qq, Eq) => {
                qq._samples = Eq
              }
            },
            metadata: gq
          }, EE, gE), (0, Yq.f)(null, null, nq, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: qq => "adaptScaleToCurrentViewport" in qq,
              get: qq => qq.adaptScaleToCurrentViewport,
              set: (qq, Eq) => {
                qq.adaptScaleToCurrentViewport = Eq
              }
            },
            metadata: gq
          }, YE, lE), gq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gq
          })
        })(), qq
      })(),
      Vq = !1;

    function dq() {
      Vq || (Vq = !0, Bq.b.prototype.setTextureFromPostProcess = function(qq, Eq, gq) {
        let Yq = null;
        Eq && (Eq._forcedOutputTexture ? Yq = Eq._forcedOutputTexture : Eq._textures.data[Eq._currentRenderTextureInd] && (Yq = Eq._textures.data[Eq._currentRenderTextureInd])), this._bindTexture(qq, Yq?.texture ?? null, gq)
      }, Bq.b.prototype.setTextureFromPostProcessOutput = function(qq, Eq, gq) {
        this._bindTexture(qq, Eq?._outputTexture?.texture ?? null, gq)
      }, xq.d.prototype.setTextureFromPostProcess = function(qq, Eq) {
        this._engine.setTextureFromPostProcess(this._samplers[qq], Eq, qq)
      }, xq.d.prototype.setTextureFromPostProcessOutput = function(qq, Eq) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[qq], Eq, qq)
      }, (0, uq.g)("BABYLON.PostProcess", aq))
    }
  },
  41577: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      f: () => Oq
    });
    var Yq = gq(41555),
      lq = gq(37153);
    class Oq extends Yq.e {
      _gatherImports(qq, Eq) {
        qq ? (this._webGPUReady = !0, Eq.push(Promise.all([gq.e(364).then((() => gq(61421)))]))) : Eq.push(Promise.all([gq.e(365).then((() => gq(61424)))])), super._gatherImports(qq, Eq)
      }
      constructor(qq) {
        let Eq = arguments.length > 2 ? arguments[2] : void 0;
        const gq = {
          name: qq,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || lq.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Oq.FragmentUrl,
          ...Eq
        };
        gq.engine || (gq.engine = lq.b.LastCreatedEngine), super(gq)
      }
    }
    Oq.FragmentUrl = "pass";
    class mq extends Yq.e {
      _gatherImports(qq, Eq) {
        qq ? (this._webGPUReady = !0, Eq.push(Promise.all([gq.e(366).then((() => gq(61429)))]))) : Eq.push(Promise.all([gq.e(367).then((() => gq(61432)))])), super._gatherImports(qq, Eq)
      }
      constructor(qq) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: qq,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || lq.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: mq.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(qq) {
        if (!(qq < 0 || qq > 5)) switch (this._face = qq, this._face) {
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
    mq.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);