export const id = 301;
export const ids = [301];
export const modules = {
  40920: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => yb
    });
    var Ab = Ub(36431),
      Mb = Ub(36401),
      Tb = Ub(39605),
      Eb = Ub(39247),
      Yb = Ub(39033),
      Bb = Ub(37989),
      eb = Ub(39231),
      vb = Ub(39256),
      Lb = Ub(36410),
      Pb = Ub(38993),
      Xb = Ub(39205),
      jb = Ub(39294);
    class Rb {
      get renderList() {
        return this._renderList
      }
      set renderList(bb) {
        this._renderList !== bb && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), bb && (this._unObserveRenderList = (0, Lb.i)(bb, this._renderListHasChanged)), this._renderList = bb)
      }
      get disableImageProcessing() {
        return this._disableImageProcessing
      }
      set disableImageProcessing(bb) {
        bb !== this._disableImageProcessing && (this._disableImageProcessing = bb, this._scene.markAllMaterialsAsDirty(64))
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb, this._renderingManager.disableDepthPrePass = bb
      }
      get name() {
        return this._name
      }
      set name(bb) {
        if (this._name !== bb) {
          if (this._name = bb, this._sceneUBOs)
            for (let bb = 0; bb < this._sceneUBOs.length; ++bb) this._sceneUBOs[bb].name = `Scene ubo #${bb} for ${this.name}`;
          if (this._scene)
            for (let bb = 0; bb < this._renderPassIds.length; ++bb) {
              const ab = this._renderPassIds[bb];
              this._engine._renderPassNames[ab] = `${this._name}#${bb}`
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
      setMaterialForRendering(bb, ab) {
        let Ub;
        Ub = Array.isArray(bb) ? bb : [bb];
        for (let Ab = 0; Ab < Ub.length; ++Ab)
          for (let bb = 0; bb < this.options.numPasses; ++bb) {
            let Mb = Ub[Ab];
            Ub[Ab].EW && (Mb = Ub[Ab].dAb), Mb.setMaterialForRenderPass(this._renderPassIds[bb], void 0 !== ab ? Array.isArray(ab) ? ab[bb] : ab : void 0)
          }
      }
      _freezeActiveMeshes(bb) {
        this._freezeActiveMeshesCancel = (0, Pb.f)((() => this._checkReadiness()), (() => {
          if (this._freezeActiveMeshesCancel = null, bb)
            for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0
        }), ((bb, ab) => {
          this._freezeActiveMeshesCancel = null, ab ? (Bb.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), bb && Bb.e.Error(bb)) : (Bb.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), bb && (Bb.e.Error(bb), bb.stack && Bb.e.Error(bb.stack)))
        }))
      }
      _unfreezeActiveMeshes() {
        this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
        for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        this._isFrozen = !1
      }
      constructor(bb, ab, Ub) {
        this._unObserveRenderList = null, this._renderListHasChanged = (bb, ab) => {
          const Ub = this._renderList ? this._renderList.length : 0;
          if (0 === ab && Ub > 0 || 0 === Ub)
            for (const Ab of this._scene.meshes) Ab._markSubMeshesAsLightDirty()
        }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new Ab.b, this.onAfterRenderObservable = new Ab.b, this.onBeforeRenderingManagerRenderObservable = new Ab.b, this.onAfterRenderingManagerRenderObservable = new Ab.b, this.onInitRenderingObservable = new Ab.b, this.onFinishRenderingObservable = new Ab.b, this.onFastPathRenderObservable = new Ab.b, this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new Xb.h(256), this._activeBoundingBoxes = new Xb.h(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = bb, this._scene = ab, this._engine = this._scene.vj(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = {
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1,
          ...Ub
        }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new vb.b(ab), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
          for (const bb of this._scene.lights) bb.getTypeID() === jb.d.LIGHTTYPEID_CLUSTERED_CONTAINER && bb.isSupported && bb._updateBatches(this.activeCamera).render()
        })), this._scene.addObjectRenderer(this)
      }
      _releaseRenderPassId() {
        for (let bb = 0; bb < this.options.numPasses; ++bb) this._engine.releaseRenderPassId(this._renderPassIds[bb]);
        this._renderPassIds.length = 0
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let bb = 0; bb < this.options.numPasses; ++bb) this._renderPassIds[bb] = this._engine.createRenderPassId(`${this.name}#${bb}`)
      }
      _createSceneUBO(bb, ab) {
        const Ub = this._scene.vj(),
          Ab = new eb.b(Ub, void 0, ab, bb, void 0, !1);
        return Ab.addUniform("viewProjection", 16), ab && Ab.addUniform("viewProjectionR", 16), Ab.addUniform("view", 16), Ab.addUniform("projection", 16), Ab.addUniform("vEyePosition", 4), Ab.addUniform("inverseProjection", 16), Ab
      }
      _getSceneUBO() {
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const bb = this._engine._currentRenderTarget,
          ab = !(!bb || !bb.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const bb = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${bb} for ${this.name}`, ab)), this._sceneUBOIsMultiview.push(ab)
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== ab && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO(`Scene ubo #${this._currentSceneUBOIndex} for ${this.name}`, ab), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = ab);
        const Ub = this._sceneUBOs[this._currentSceneUBOIndex++];
        return Ub.unbindEffect(), Ub
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1
      }
      get refreshRate() {
        return this._refreshRate
      }
      set refreshRate(bb) {
        this._refreshRate = bb, this.resetRefreshCounter()
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1))
      }
      isReadyForRendering(bb, ab) {
        this.prepareRenderList(), this.initRender(bb, ab);
        const Ub = this._checkReadiness();
        return this.finishRender(), Ub
      }
      prepareRenderList() {
        const bb = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let ab = 0; ab < this._waitingRenderList.length; ab++) {
              const Ub = this._waitingRenderList[ab],
                Ab = bb.getMeshById(Ub);
              Ab && this.renderList.push(Ab)
            }
          }
          this._waitingRenderList = void 0
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const bb = this._scene.meshes;
          for (let ab = 0; ab < bb.length; ab++) {
            const Ub = bb[ab];
            this.renderListPredicate(Ub) && this.renderList.push(Ub)
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
      }
      initRender(bb, ab) {
        const Ub = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), Ub && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(Ub.getViewMatrix(), Ub.getProjectionMatrix(!0)), this._scene._activeCamera = Ub, this._engine.setViewport(Ub.rigParent ? Ub.rigParent.viewport : Ub.viewport, bb, ab)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1
      }
      finishRender() {
        const bb = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (bb.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), bb._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== bb.activeCamera && bb.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), bb.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this)
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[bb], this.onBeforeRenderObservable.notifyObservers(bb);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(bb);
        else {
          const ab = this._prepareRenderingManager(bb),
            Ub = this._scene.getOutlineRenderer?.(),
            Ab = Ub?.enabled;
          Ub && (Ub.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(bb), this._renderingManager.render(this.customRenderFunction, ab, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes, this.spriteManagerList), this.onAfterRenderingManagerRenderObservable.notifyObservers(bb), Ub && (Ub.enabled = Ab)
        }
        ab || this.onAfterRenderObservable.notifyObservers(bb), this._engine.currentRenderPassId = Ub
      }
      _checkReadiness() {
        const bb = this._scene,
          ab = this._engine.currentRenderPassId;
        let Ub = !0;
        bb.getViewMatrix() || bb.updateTransformMatrix();
        const Ab = this.options.numPasses;
        for (let Mb = 0; Mb < Ab && Ub; Mb++) {
          const ab = this.renderList ? this.renderList : bb.frameGraph ? bb.meshes : bb.getActiveMeshes().data,
            Tb = this.renderList || bb.frameGraph ? ab.length : bb.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[Mb], this.onBeforeRenderObservable.notifyObservers(Mb);
          let Eb = null,
            Yb = Tb;
          this.getCustomRenderList && (Eb = this.getCustomRenderList(Mb, ab, Tb), Eb && (Yb = Eb.length)), Eb || (Eb = ab), this.options.doNotChangeAspectRatio || bb.updateTransformMatrix(!0);
          for (let bb = 0; bb < Yb && Ub; ++bb) {
            const ab = Eb[bb];
            if (!ab.isEnabled() || ab.isBlocked || !ab.isVisible || !ab.mD) continue;
            if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(ab, this.refreshRate, !0)) {
                Ub = !1;
                continue
              }
            } else if (!ab.isReady(!0)) {
              Ub = !1;
              continue
            }
            let Ab = ab._edgesRenderer,
              Mb = ab.hasThinInstances;
            if (ab.EW) {
              const bb = ab.dAb;
              bb.edgesShareWithInstances && bb._edgesRenderer?.isEnabled && (Ab = bb._edgesRenderer, Mb = !0)
            } else ab.IAb && ab.edgesShareWithInstances && (Mb = !0);
            !this.customRenderFunction && this.renderOpaqueMeshes && Ab?.isEnabled && (Ab.isReady(Mb) || (Ub = !1))
          }
          if (this.renderParticles && bb.particlesEnabled) {
            const ab = this.particleSystemList || bb.pD;
            for (const bb of ab) bb.isReady() || (Ub = !1)
          }
          if (this.renderSprites && bb.spritesEnabled) {
            const ab = this.spriteManagerList || bb.spriteManagers;
            if (ab)
              for (const Ab of ab) bb.activeCamera && 0 === (Ab.layerMask & bb.activeCamera.layerMask) || Ab.isReady && !Ab.isReady() && (Ub = !1)
          }
          this.onAfterRenderObservable.notifyObservers(Mb), Ab > 1 && (bb.incrementRenderId(), bb.resetCachedMaterial())
        }
        return this._engine.currentRenderPassId = ab, Ub
      }
      _prepareRenderingManager() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this._scene;
        let Ab, Mb, Tb = null;
        const Eb = this.renderList ? this.renderList : Ub.frameGraph ? Ub.meshes : Ub.getActiveMeshes().data,
          Yb = this.renderList || Ub.frameGraph ? Eb.length : Ub.getActiveMeshes().length;
        if (this.getCustomRenderList && (Tb = this.getCustomRenderList(bb, Eb, Yb)), Tb) Ab = Tb.length, Mb = this.forceLayerMaskCheck;
        else {
          if (this._defaultRenderListPrepared && !ab && !this._engine.isWebGPU) return Eb;
          this._defaultRenderListPrepared = !0, Tb = Eb, Ab = Yb, Mb = !this.renderList || this.forceLayerMaskCheck
        }
        const Bb = Ub.activeCamera,
          eb = this.cameraForLOD ?? Bb,
          vb = Ub.getBoundingBoxRenderer?.();
        if (Ub._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && vb) {
            vb.reset();
            for (let bb = 0; bb < this._activeBoundingBoxes.length; bb++) {
              const ab = this._activeBoundingBoxes.data[bb];
              vb.renderList.push(ab)
            }
          }
          return Tb
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), vb && vb.reset(), this.renderMeshes) {
          const bb = Ub.getRenderId(),
            ab = Ub.getFrameId();
          for (let Eb = 0; Eb < Ab; Eb++) {
            const Ab = Tb[Eb];
            if (Ab && !Ab.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(Ab, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue
                }
              } else if (!Ab.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue
              }
              let Tb, Eb;
              if (eb) {
                const bb = Ab._internalAbstractMeshDataInfo._currentLOD.get(eb);
                bb && bb[1] === ab ? Tb = bb[0] : (Tb = Ub.customLODSelector ? Ub.customLODSelector(Ab, eb) : Ab.getLOD(eb), bb ? (bb[0] = Tb, bb[1] = ab) : Ab._internalAbstractMeshDataInfo._currentLOD.set(eb, [Tb, ab]))
              } else Tb = Ab;
              if (!Tb) continue;
              if (Tb !== Ab && 0 !== Tb.billboardMode && Tb.computeWorldMatrix(), Tb._preActivateForIntermediateRendering(bb), Eb = !(!Mb || !Bb) && 0 === (Ab.layerMask & Bb.layerMask), Ab.isEnabled() && Ab.isVisible && Ab.mD && !Eb) {
                if (this._activeMeshes.push(Ab), Tb._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, Tb !== Ab && Tb._activate(bb, !0), this.enableBoundingBoxRendering && vb && vb._preActiveMesh(Ab), Ab._activate(bb, !0) && Ab.mD.length) {
                  Ab.EW ? Ab._internalAbstractMeshDataInfo._actAsRegularMesh && (Tb = Ab) : Tb._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, Tb._internalAbstractMeshDataInfo._isActiveIntermediate = !0, Ub._prepareSkeleton(Tb);
                  for (let bb = 0; bb < Tb.mD.length; bb++) {
                    const ab = Tb.mD[bb];
                    this.enableBoundingBoxRendering && vb && vb._evaluateSubMesh(Ab, ab), this._renderingManager.dispatch(ab, Tb)
                  }
                }
                Ab._postActivate()
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && vb && ab)
          for (let Lb = 0; Lb < vb.renderList.length; Lb++) {
            const bb = vb.renderList.data[Lb];
            this._activeBoundingBoxes.push(bb)
          }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const bb = this.particleSystemList || Ub.pD;
          for (let ab = 0; ab < bb.length; ab++) {
            const Ub = bb[ab],
              Ab = Ub.emitter;
            Ub.isStarted() && Ab && (!Ab.position || Ab.isEnabled()) && this._renderingManager.dispatchParticles(Ub)
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
        }
        return Tb
      }
      get renderingManager() {
        return this._renderingManager
      }
      setRenderingOrder(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, ab, Ub, Ab)
      }
      setRenderingAutoClearDepthStencil(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, ab, Ub, Ab), this._renderingManager._useSceneAutoClearSetup = !1
      }
      clone() {
        const bb = new Rb(this.name, this._scene, this.options);
        return this.renderList && (bb.renderList = this.renderList.slice(0)), bb
      }
      dispose() {
        const bb = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          ab = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let Ub = 0; Ub < ab; Ub++) {
          const ab = bb[Ub];
          ab && void 0 !== ab.getMaterialForRenderPass(this.renderPassId) && ab.setMaterialForRenderPass(this.renderPassId, void 0)
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs)
          for (const Ub of this._sceneUBOs) Ub.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this)
      }
      _rebuild() {
        this.refreshRate === Rb.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Rb.REFRESHRATE_RENDER_ONCE)
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups()
      }
    }
    Rb.REFRESHRATE_RENDER_ONCE = 0, Rb.REFRESHRATE_RENDER_ONEVERYFRAME = 1, Rb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var kb = Ub(38982);
    class yb extends Tb.e {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate
      }
      set renderListPredicate(bb) {
        this._objectRenderer.renderListPredicate = bb
      }
      get renderList() {
        return this._objectRenderer.renderList
      }
      set renderList(bb) {
        this._objectRenderer.renderList = bb
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList
      }
      set particleSystemList(bb) {
        this._objectRenderer.particleSystemList = bb
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList
      }
      set getCustomRenderList(bb) {
        this._objectRenderer.getCustomRenderList = bb
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles
      }
      set renderParticles(bb) {
        this._objectRenderer.renderParticles = bb
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites
      }
      set renderSprites(bb) {
        this._objectRenderer.renderSprites = bb
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering
      }
      set enableBoundingBoxRendering(bb) {
        this._objectRenderer.enableBoundingBoxRendering = bb
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering
      }
      set enableOutlineRendering(bb) {
        this._objectRenderer.enableOutlineRendering = bb
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck
      }
      set forceLayerMaskCheck(bb) {
        this._objectRenderer.forceLayerMaskCheck = bb
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera
      }
      set activeCamera(bb) {
        this._objectRenderer.activeCamera = bb
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD
      }
      set cameraForLOD(bb) {
        this._objectRenderer.cameraForLOD = bb
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing
      }
      set disableImageProcessing(bb) {
        this._objectRenderer.disableImageProcessing = bb
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction
      }
      set customIsReadyFunction(bb) {
        this._objectRenderer.customIsReadyFunction = bb
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction
      }
      set customRenderFunction(bb) {
        this._objectRenderer.customRenderFunction = bb
      }
      get postProcesses() {
        return this._postProcesses
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled
      }
      set onAfterUnbind(bb) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(bb)
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable
      }
      set onBeforeRender(bb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb)
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable
      }
      set onAfterRender(bb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb)
      }
      set onClear(bb) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(bb)
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList
      }
      set _waitingRenderList(bb) {
        this._objectRenderer._waitingRenderList = bb
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
      setMaterialForRendering(bb, ab) {
        this._objectRenderer.setMaterialForRendering(bb, ab)
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
      set boundingBoxSize(bb) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(bb)) return;
        this._boundingBoxSize = bb;
        const ab = this.oN();
        ab && ab.markAllMaterialsAsDirty(1)
      }
      get boundingBoxSize() {
        return this._boundingBoxSize
      }
      get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null
      }
      constructor(bb, ab, Ub) {
        let Eb, Yb, eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          vb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Xb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Tb.e.TRILINEAR_SAMPLINGMODE,
          jb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          kb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          yb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Zb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          Db = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          zb = arguments.length > 13 ? arguments[13] : void 0,
          xb = arguments.length > 14 ? arguments[14] : void 0,
          ib = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          fb = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          mb = !0,
          pb = !1;
        if ("object" === typeof eb) {
          const bb = eb;
          eb = !!bb.generateMipMaps, vb = bb.doNotChangeAspectRatio ?? !0, Lb = bb.type ?? 0, Pb = !!bb.isCube, Xb = bb.samplingMode ?? Tb.e.TRILINEAR_SAMPLINGMODE, jb = bb.generateDepthBuffer ?? !0, kb = !!bb.generateStencilBuffer, yb = !!bb.isMulti, Zb = bb.format ?? 5, Db = !!bb.delayAllocation, zb = bb.samples, xb = bb.creationFlags, ib = !!bb.noColorAttachment, fb = !!bb.useSRGBBuffer, Eb = bb.colorAttachment, mb = bb.gammaSpace ?? mb, Yb = bb.existingObjectRenderer, pb = !!bb.enableClusteredLights
        }
        if (super(null, Ub, !eb, void 0, Xb, void 0, void 0, void 0, void 0, Zb), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new Ab.b, this.onAfterUnbindObservable = new Ab.b, this.onClearObservable = new Ab.b, this.onResizeObservable = new Ab.b, this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = Mb.m.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(Ub = this.oN())) return;
        const Nb = this.oN().vj();
        this._gammaSpace = mb, this._coordinatesMode = Tb.e.PROJECTION_MODE, this.name = bb, this.isRenderTarget = !0, this._initialSizeParameter = ab, this._dontDisposeObjectRenderer = !!Yb, this._processSizeParameter(ab), this._objectRenderer = Yb ?? new Rb(bb, Ub, {
          numPasses: Pb ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: vb,
          enableClusteredLights: pb
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add((() => {
          const bb = this._scene;
          if (!this._disableEngineStages)
            for (const ab of bb._beforeRenderTargetClearStage) ab.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Nb) : this.skipInitialClear || Nb.clear(this.clearColor ?? bb.clearColor, !0, !0, !0), this._doNotChangeAspectRatio || bb.updateTransformMatrix(!0), !this._disableEngineStages)
            for (const ab of bb._beforeRenderTargetDrawStage) ab.action(this, this._currentFaceIndex, this._currentLayer);
          Nb._debugPushGroup && Nb._debugPushGroup(`Render to ${this.name} (face #${this._currentFaceIndex} layer #${this._currentLayer})`)
        })), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add((() => {
          if (Nb._debugPopGroup && Nb._debugPopGroup(), !this._disableEngineStages)
            for (const ab of this._scene._afterRenderTargetDrawStage) ab.action(this, this._currentFaceIndex, this._currentLayer);
          const bb = this._texture?.generateMipMaps ?? !1;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager ? this._postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport) : this._currentUseCameraPostProcess && this._scene.postProcessManager._finalizeFrame(!1, this._renderTarget ?? void 0, this._currentFaceIndex), !this._disableEngineStages)
            for (const ab of this._scene._afterRenderTargetPostProcessStage) ab.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = bb), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), Nb) : Bb.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"))
        })), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add((() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(Nb) : this.skipInitialClear || Nb.clear(this.clearColor || this._scene.clearColor, !0, !0, !0)
        })), this._resizeObserver = Nb.onResizeObservable.add((() => {})), this._generateMipMaps = !!eb, this._doNotChangeAspectRatio = vb, yb || (this._renderTargetOptions = {
          generateMipMaps: eb,
          type: Lb,
          format: this._format ?? void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: jb,
          generateStencilBuffer: kb,
          samples: zb,
          creationFlags: xb,
          noColorAttachment: ib,
          useSRGBBuffer: fb,
          colorAttachment: Eb,
          label: this.name
        }, this.samplingMode === Tb.e.NEAREST_SAMPLINGMODE && (this.wrapU = Tb.e.CLAMP_ADDRESSMODE, this.wrapV = Tb.e.CLAMP_ADDRESSMODE), Db || (Pb ? (this._renderTarget = Ub.vj().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = Tb.e.INVCUBIC_MODE, this._textureMatrix = Mb.b.Identity()) : this._renderTarget = Ub.vj().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== zb && (this.samples = zb)))
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        this._renderTarget?.createDepthStencilTexture(bb, ab, Ub, Ab, Mb, Tb)
      }
      _processSizeParameter(bb) {
        if (bb.ratio) {
          this._sizeRatio = bb.ratio;
          const ab = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(ab.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(ab.getRenderHeight(), this._sizeRatio)
          }
        } else this._size = bb
      }
      get samples() {
        return this._renderTarget?.samples ?? this._samples
      }
      set samples(bb) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(bb))
      }
      addPostProcess(bb) {
        if (!this._postProcessManager) {
          const bb = this.oN();
          if (!bb) return;
          this._postProcessManager = new Eb.c(bb), this._postProcesses = new Array
        }
        this._postProcesses.push(bb), this._postProcesses[0].autoClear = !1
      }
      clearPostProcesses() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (bb)
            for (const bb of this._postProcesses) bb.dispose();
          this._postProcesses = []
        }
      }
      removePostProcess(bb) {
        if (!this._postProcesses) return;
        const ab = this._postProcesses.indexOf(bb); - 1 !== ab && (this._postProcesses.splice(ab, 1), this._postProcesses.length > 0 && (this._postProcesses[0].autoClear = !1))
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter()
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate
      }
      set refreshRate(bb) {
        this._objectRenderer.refreshRate = bb
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
        const bb = this._size.layers;
        if (bb) return bb;
        const ab = this._size.depth;
        return ab || 0
      }
      disableRescaling() {
        this._canRescale = !1
      }
      get canRescale() {
        return this._canRescale
      }
      scale(bb) {
        const ab = Math.max(1, this.getRenderSize() * bb);
        this.resize(ab)
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix()
      }
      resize(bb) {
        const ab = this.isCube;
        this._renderTarget?.dispose(), this._renderTarget = null;
        const Ub = this.oN();
        Ub && (this._processSizeParameter(bb), this._renderTarget = ab ? Ub.vj().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : Ub.vj().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this))
      }
      render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(bb, ab)
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, Promise.resolve().then((() => Ub(40930))).then((bb => this._dumpTools = bb))), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const bb = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), bb
      }
      _render() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this.oN();
        if (!Ub) return;
        void 0 !== this.useCameraPostProcesses && (bb = this.useCameraPostProcesses);
        const Ab = Ub.vj();
        if (Ab._debugPushGroup && Ab._debugPushGroup(`Render to ${this.name}`), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti)
          if (this.isCube && !this.isMulti)
            for (let Mb = 0; Mb < 6; Mb++) this._renderToTarget(Mb, bb, ab), Ub.incrementRenderId(), Ub.resetCachedMaterial();
          else this._renderToTarget(0, bb, ab);
        else
          for (let Mb = 0; Mb < this.getRenderLayers(); Mb++) this._renderToTarget(0, bb, ab, Mb), Ub.incrementRenderId(), Ub.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), Ab._debugPopGroup && Ab._debugPopGroup()
      }
      _bestReflectionRenderTargetDimension(bb, ab) {
        const Ub = bb * ab,
          Ab = (0, Yb.n)(Ub + 16384 / (128 + Ub));
        return Math.min((0, Yb.b)(bb), Ab)
      }
      _bindFrameBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = this.oN();
        if (!Ub) return;
        const Ab = Ub.vj();
        this._renderTarget && Ab.bindFramebuffer(this._renderTarget, this.isCube ? bb : void 0, void 0, void 0, this.ignoreCameraViewport, 0, ab)
      }
      _unbindFrameBuffer(bb, ab) {
        this._renderTarget && bb.unBindFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ab)
        }))
      }
      _prepareFrame(bb, ab, Ub, Ab) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(ab, Ub) : Ab && bb.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(ab, Ub)
      }
      _renderToTarget(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Mb = this.oN();
        if (!Mb) return;
        const Tb = Mb.vj();
        this._currentFaceIndex = bb, this._currentLayer = Ab, this._currentUseCameraPostProcess = ab, this._currentDumpForDebug = Ub, this._prepareFrame(Mb, bb, Ab, ab), this._objectRenderer.render(bb + Ab, !0), this._unbindFrameBuffer(Tb, bb), this._texture && this.isCube && 5 === bb && Tb.generateMipMapsForCubemap(this._texture, !0)
      }
      setRenderingOrder(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.setRenderingOrder(bb, ab, Ub, Ab)
      }
      setRenderingAutoClearDepthStencil(bb, ab) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(bb, ab)
      }
      clone() {
        const bb = this.getSize(),
          ab = new yb(this.name, bb, this.oN(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return ab.hasAlpha = this.hasAlpha, ab.level = this.level, ab.coordinatesMode = this.coordinatesMode, this.renderList && (ab.renderList = this.renderList.slice(0)), ab
      }
      serialize() {
        if (!this.name) return null;
        const bb = super.serialize();
        if (bb.renderTargetSize = this.getRenderSize(), bb.renderList = [], this.renderList)
          for (let ab = 0; ab < this.renderList.length; ab++) bb.renderList.push(this.renderList[ab].id);
        return bb
      }
      disposeFramebufferObjects() {
        this._renderTarget?.dispose(!0)
      }
      releaseInternalTexture() {
        this._renderTarget?.releaseTextures(), this._texture = null
      }
      dispose() {
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.oN().vj().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const bb = this.oN();
        if (!bb) return;
        let ab = bb.customRenderTargets.indexOf(this);
        ab >= 0 && bb.customRenderTargets.splice(ab, 1);
        for (const Ub of bb.cameras) ab = Ub.customRenderTargets.indexOf(this), ab >= 0 && Ub.customRenderTargets.splice(ab, 1);
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
    yb.REFRESHRATE_RENDER_ONCE = Rb.REFRESHRATE_RENDER_ONCE, yb.REFRESHRATE_RENDER_ONEVERYFRAME = Rb.REFRESHRATE_RENDER_ONEVERYFRAME, yb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = Rb.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(yb.prototype, "noPrePassRenderer") || Object.defineProperty(yb.prototype, "noPrePassRenderer", (0, kb.g)("RenderTargetTexture", "noPrePassRenderer"))
  },
  40904: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      g: () => vb
    });
    var Ab = Ub(39244),
      Mb = Ub(37429),
      Tb = Ub(36431),
      Eb = Ub(38939),
      Yb = Ub(39425);
    const Bb = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class eb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb;
        this._fullscreenViewport = new Mb.b(0, 0, 1, 1);
        const Ub = ab.positions ?? Bb.positions,
          Tb = ab.indices ?? Bb.indices;
        this.engine = bb, this._vertexBuffers = {
          [Ab.m.PositionKind]: new Ab.m(bb, Ub, Ab.m.PositionKind, !1, !1, 2)
        }, this._indexBuffer = bb.createIndexBuffer(Tb), this._indexBufferLength = Tb.length, this._onContextRestoredObserver = bb.onContextRestoredObservable.add((() => {
          this._indexBuffer = bb.createIndexBuffer(Tb);
          for (const bb in this._vertexBuffers) {
            this._vertexBuffers[bb]._rebuild()
          }
        }))
      }
      setViewport() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.engine.setViewport(bb)
      }
      bindBuffers(bb) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, bb)
      }
      applyEffectWrapper(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.engine.setState(!0), this.engine.depthCullingState.depthTest = ab, this.engine.stencilState.stencilTest = Ub, this.engine.enableEffect(bb.drawWrapper), this.bindBuffers(bb.effect), bb.onApplyObservable.notifyObservers({})
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
      _isRenderTargetTexture(bb) {
        return void 0 !== bb.renderTarget
      }
      render(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!bb.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const Ub = null === ab ? null : this._isRenderTargetTexture(ab) ? ab.renderTarget : ab;
        Ub && this.engine.bindFramebuffer(Ub), this.applyEffectWrapper(bb), this.draw(), Ub && this.engine.unBindFramebuffer(Ub), this.restoreStates()
      }
      dispose() {
        const bb = this._vertexBuffers[Ab.m.PositionKind];
        bb && (bb.dispose(), delete this._vertexBuffers[Ab.m.PositionKind]), this._indexBuffer && this.engine._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null)
      }
    }
    class vb {
      static RegisterShaderCodeProcessing(bb, ab) {
        ab ? vb._CustomShaderCodeProcessing[bb ?? ""] = ab : delete vb._CustomShaderCodeProcessing[bb ?? ""]
      }
      static _GetShaderCodeProcessing(bb) {
        return vb._CustomShaderCodeProcessing[bb] ?? vb._CustomShaderCodeProcessing[""]
      }
      get name() {
        return this.options.name
      }
      set name(bb) {
        this.options.name = bb
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
      set effect(bb) {
        this._drawWrapper.effect = bb
      }
      constructor(bb) {
        this.alphaMode = 0, this.onEffectCreatedObservable = new Tb.b(void 0, !0), this.onApplyObservable = new Tb.b, this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = {
          ...bb,
          name: bb.name || "effectWrapper",
          engine: bb.engine,
          uniforms: bb.uniforms || bb.uniformNames || [],
          uniformNames: void 0,
          samplers: bb.samplers || bb.samplerNames || [],
          samplerNames: void 0,
          attributeNames: bb.attributeNames || ["position"],
          uniformBuffers: bb.uniformBuffers || [],
          defines: bb.defines || "",
          useShaderStore: bb.useShaderStore || !1,
          vertexUrl: bb.vertexUrl || bb.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: bb.fragmentShader || "pass",
          indexParameters: bb.indexParameters,
          blockCompilation: bb.blockCompilation || !1,
          shaderLanguage: bb.shaderLanguage || 0,
          onCompiled: bb.onCompiled || void 0,
          extraInitializations: bb.extraInitializations || void 0,
          extraInitializationsAsync: bb.extraInitializationsAsync || void 0,
          useAsPostProcess: bb.useAsPostProcess ?? !1,
          allowEmptySourceTexture: bb.allowEmptySourceTexture ?? !1
        }, this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), bb.vertexUrl || bb.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add((() => {
          this.effect.setFloat2("scale", 1, 1)
        }))), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add((() => {
          this.bind()
        })), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add((() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect()
        }))), this._drawWrapper = new Yb.b(this.options.engine), this._webGPUReady = 1 === this.options.shaderLanguage;
        const ab = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, ab, this.options.extraInitializations)
      }
      _gatherImports() {}
      _postConstructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ab = arguments.length > 2 ? arguments[2] : void 0,
          Mb = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, Mb && this._importPromises.push(...Mb);
        const Tb = this.options.engine.isWebGPU && !vb.ForceGLSL;
        this._gatherImports(Tb, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(Tb && this._webGPUReady ? Ub.e(356).then((() => Ub(60514))) : Ub.e(345).then((() => Ub(60252)))), void 0 !== Ab && Ab(Tb, this._importPromises), Tb && this._webGPUReady && (this.options.shaderLanguage = 1), bb || this.updateEffect(ab)
      }
      updateEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Yb = arguments.length > 6 ? arguments[6] : void 0,
          Bb = arguments.length > 7 ? arguments[7] : void 0;
        const eb = vb._GetShaderCodeProcessing(this.name);
        if (eb?.defineCustomBindings) {
          const Ab = ab?.slice() ?? [];
          Ab.push(...this.options.uniforms);
          const Mb = Ub?.slice() ?? [];
          Mb.push(...this.options.samplers), bb = eb.defineCustomBindings(this.name, bb, Ab, Mb), ab = Ab, Ub = Mb
        }
        this.options.defines = bb || "";
        const Lb = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0
        };
        let Pb;
        Pb = this.options.extraInitializationsAsync ? async () => {
          await (Lb?.()), await this.options.extraInitializationsAsync()
        }: Lb, this.options.useShaderStore ? this._drawWrapper.effect = this.options.engine.createEffect({
          vertex: Yb ?? this._shaderPath.vertex,
          fragment: Bb ?? this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: ab || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: Ub || this.options.samplers,
          defines: null !== bb ? bb : "",
          fallbacks: null,
          onCompiled: Mb ?? this.options.onCompiled,
          onError: Tb ?? null,
          indexParameters: Ab || this.options.indexParameters,
          processCodeAfterIncludes: eb?.processCodeAfterIncludes ? (bb, ab) => eb.processCodeAfterIncludes(this.name, bb, ab) : null,
          processFinalCode: eb?.processFinalCode ? (bb, ab) => eb.processFinalCode(this.name, bb, ab) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: Pb
        }, this.options.engine) : this._drawWrapper.effect = new Eb.d(this._shaderPath, this.options.attributeNames, ab || this.options.uniforms, Ub || this.options.samplerNames, this.options.engine, bb, void 0, Mb || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, Pb), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !bb && (this.options.engine.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), vb._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect)
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.vj().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0)
      }
    }
    vb.ForceGLSL = !1, vb._CustomShaderCodeProcessing = {}
  },
  40930: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Dispose: () => Zb,
      DumpData: () => yb,
      DumpDataAsync: () => kb,
      DumpFramebuffer: () => Rb,
      DumpTools: () => Db,
      EncodeImageAsync: () => jb,
      RegisterDumpTools: () => xb
    });
    var Ab = Ub(39104),
      Mb = Ub(40904),
      Tb = Ub(39195),
      Eb = Ub(36436),
      Yb = Ub(36425),
      Bb = Ub(37989),
      eb = Ub(39163),
      vb = Ub(39110);
    let Lb = null;
    async function Pb() {
      return Lb || (Lb = async function() {
        const bb = Yb.d.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
        bb instanceof OffscreenCanvas && Bb.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
        const {
          ThinEngine: ab
        } = await Promise.resolve().then((() => Ub(38933)));
        if (!ab.IsSupported) throw new Error("DumpData: No WebGL context available. Cannot dump data.");
        const Ab = new ab(bb, !1, {
          preserveDrawingBuffer: !0,
          depth: !1,
          stencil: !1,
          alpha: !0,
          premultipliedAlpha: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !1
        });
        Yb.d.Instances.pop(), Yb.d.OnEnginesDisposedObservable.add((bb => {
          Ab && bb !== Ab && !Ab.Jab && 0 === Yb.d.Instances.length && Zb()
        })), Ab.getCaps().parallelShaderCompile = void 0;
        const Tb = new Mb.e(Ab),
          {
            passPixelShader: Eb
          } = await Ub.e(364).then((() => Ub(60573))),
          eb = new Mb.g({
            engine: Ab,
            name: Eb.name,
            fragmentShader: Eb.shader,
            samplerNames: ["textureSampler"]
          });
        return {
          canvas: bb,
          dumpEngine: {
            engine: Ab,
            renderer: Tb,
            wrapper: eb
          }
        }
      }()), await Lb
    }
    let Xb = (() => {
      var bb;
      let ab, Ub = [];
      return bb = class {
        static async EncodeImageAsync(bb, ab, Ub, Ab, Mb, Eb) {
          const Yb = await Pb(),
            Bb = Yb.dumpEngine;
          Bb.engine.setSize(ab, Ub, !0);
          const eb = Bb.engine.createRawTexture(bb, ab, Ub, 5, !1, !Mb, 1);
          return Bb.renderer.setViewport(), Bb.renderer.applyEffectWrapper(Bb.wrapper), Bb.wrapper.effect._bindTexture("textureSampler", eb), Bb.renderer.draw(), eb.dispose(), await new Promise(((bb, ab) => {
            Tb.h.ToBlob(Yb.canvas, (Ub => {
              Ub ? bb(Ub) : ab(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
            }), Ab, Eb)
          }))
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [vb.f], (0, Ab.h)(bb, null, ab, {
          kind: "method",
          name: "EncodeImageAsync",
          static: !0,
          private: !1,
          access: {
            has: bb => "EncodeImageAsync" in bb,
            get: bb => bb.EncodeImageAsync
          },
          metadata: Mb
        }, null, Ub), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        }), (0, Ab.k)(bb, Ub)
      })(), bb
    })();
    const jb = Xb.EncodeImageAsync;
    async function Rb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Tb = arguments.length > 5 ? arguments[5] : void 0,
        Eb = arguments.length > 6 ? arguments[6] : void 0;
      const Yb = await Ub.readPixels(0, 0, bb, ab);
      yb(bb, ab, new Uint8Array(Yb.buffer), Ab, Mb, Tb, !0, void 0, Eb)
    }
    async function kb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Mb = arguments.length > 4 ? arguments[4] : void 0,
        Yb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lb = arguments.length > 7 ? arguments[7] : void 0;
      if (Ub instanceof Float32Array) {
        const bb = new Uint8Array(Ub.length);
        let ab = Ub.length;
        for (; ab--;) {
          const Ab = Ub[ab];
          bb[ab] = Math.round(255 * (0, Eb.Clamp)(Ab))
        }
        Ub = bb
      }
      const Pb = await Xb.EncodeImageAsync(Ub, bb, ab, Ab, Yb, Lb);
      void 0 !== Mb && Tb.h.DownloadBlob(Pb, Mb), Pb.type !== Ab && Bb.e.Warn(`DumpData: The requested mimeType '${Ab}' is not supported. The result has mimeType '${Pb.type}' instead.`);
      const jb = await Pb.arrayBuffer();
      return vb ? jb : `data:${Ab};base64,${(0,eb.g)(jb)}`
    }

    function yb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 5 ? arguments[5] : void 0;
      void 0 !== Mb || Ab || (Mb = ""), kb(bb, ab, Ub, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", Mb, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.length > 8 ? arguments[8] : void 0).then((bb => {
        Ab && Ab(bb)
      }))
    }

    function Zb() {
      Lb && (Lb?.then((bb => {
        bb.canvas instanceof HTMLCanvasElement && bb.canvas.remove(), bb.dumpEngine && (bb.dumpEngine.engine.dispose(), bb.dumpEngine.renderer.dispose(), bb.dumpEngine.wrapper.dispose())
      })), Lb = null)
    }
    const Db = {
      DumpData: yb,
      DumpDataAsync: kb,
      DumpFramebuffer: Rb,
      Dispose: Zb
    };
    let zb = !1;

    function xb() {
      if (zb) return;
      zb = !0;
      Tb.h.DumpData = yb, Tb.h.DumpDataAsync = kb, Tb.h.DumpFramebuffer = Rb
    }
  },
  40914: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      f: () => jb,
      h: () => Rb
    });
    var Ab = Ub(39605),
      Mb = Ub(40920),
      Tb = Ub(39104),
      Eb = Ub(40901),
      Yb = Ub(39124),
      Bb = Ub(40925),
      eb = Ub(39110);
    class vb extends Eb.e {
      getClassName() {
        return "PassPostProcess"
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 4 ? arguments[4] : void 0;
        const Ab = {
          size: "number" === typeof ab ? ab : void 0,
          camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          samplingMode: arguments.length > 3 ? arguments[3] : void 0,
          engine: Ub,
          reusable: arguments.length > 5 ? arguments[5] : void 0,
          textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          ...ab
        };
        super(bb, Bb.g.FragmentUrl, {
          effectWrapper: "number" !== typeof ab && ab.effectWrapper ? void 0 : new Bb.g(bb, Ub, Ab),
          ...Ab
        })
      }
      static _Parse(bb, ab, Ub, Ab) {
        return Yb.b.Parse((() => new vb(bb.name, bb.options, ab, bb.renderTargetSamplingMode, bb._engine, bb.reusable)), bb, Ub, Ab)
      }
    }(() => {
      var bb;
      let ab, Ub = Eb.e,
        Ab = [];
      bb = class extends Ub {
        get face() {
          return this._effectWrapper.face
        }
        set face(bb) {
          this._effectWrapper.face = bb
        }
        getClassName() {
          return "PassCubePostProcess"
        }
        constructor(bb, ab) {
          let Ub = arguments.length > 4 ? arguments[4] : void 0;
          const Mb = {
            size: "number" === typeof ab ? ab : void 0,
            camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            samplingMode: arguments.length > 3 ? arguments[3] : void 0,
            engine: Ub,
            reusable: arguments.length > 5 ? arguments[5] : void 0,
            textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            ...ab
          };
          super(bb, Bb.g.FragmentUrl, {
            effectWrapper: "number" !== typeof ab && ab.effectWrapper ? void 0 : new Bb.c(bb, Ub, Mb),
            ...Mb
          }), (0, Tb.k)(this, Ab)
        }
        static _Parse(ab, Ub, Ab, Mb) {
          return Yb.b.Parse((() => new bb(ab.name, ab.options, Ub, ab.renderTargetSamplingMode, ab._engine, ab.reusable)), ab, Ab, Mb)
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ub[Symbol.metadata] ?? null) : void 0;
        ab = [(0, eb.K)()], (0, Tb.h)(bb, null, ab, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: bb => "face" in bb,
            get: bb => bb.face
          },
          metadata: Mb
        }, null, Ab), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        })
      })()
    })();
    var Lb = Ub(36436),
      Pb = Ub(39169);

    function Xb(bb, ab, Ub, Ab, Mb, Tb, Yb, Bb) {
      const eb = ab.vj();
      return ab.isReady = !1, Mb = Mb ?? ab.samplingMode, Ab = Ab ?? ab.type, Tb = Tb ?? ab.format, Yb = Yb ?? ab.width, Bb = Bb ?? ab.height, -1 === Ab && (Ab = 0), new Promise((vb => {
        const Lb = new Eb.e("postprocess", bb, null, null, 1, null, Mb, eb, !1, void 0, Ab, void 0, null, !1, Tb);
        Lb.externalTextureSamplerBinding = !0;
        const Pb = eb.createRenderTargetTexture({
          width: Yb,
          height: Bb
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: Mb,
          type: Ab,
          format: Tb
        });
        Lb.onEffectCreatedObservable.addOnce((bb => {
          bb.executeWhenCompiled((() => {
            Lb.onApply = bb => {
              bb._bindTexture("textureSampler", ab), bb.setFloat2("scale", 1, 1)
            }, Ub.postProcessManager.directRender([Lb], Pb, !0), eb.restoreDefaultFramebuffer(), eb._releaseTexture(ab), Lb && Lb.dispose(), Pb._swapAndDie(ab), ab.type = Ab, ab.format = 5, ab.isReady = !0, vb(ab)
          }))
        }))
      }))
    }
    async function jb(bb, ab, Tb) {
      let Yb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Bb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function(bb) {
        if (bb.isReady()) return;
        if (bb.loadingError) throw new Error(bb.errorObject?.message || `Texture ${bb.name} errored while loading.`);
        const ab = bb.onLoadObservable;
        if (ab) return await new Promise((bb => ab.addOnce((() => bb()))));
        const Ub = bb._texture?.onLoadedObservable;
        if (Ub) return await new Promise((bb => Ub.addOnce((() => bb()))));
        throw new Error(`Cannot determine readiness of texture ${bb.name}.`)
      }(bb);
      const Pb = bb.getInternalTexture(),
        Xb = bb.is3D || !!Pb?.is3D,
        {
          width: jb,
          height: Rb
        } = bb.getSize(),
        kb = ab ?? jb,
        yb = Tb ?? Rb;
      if (eb || Xb || function(bb) {
          switch (bb) {
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
        }(bb.textureFormat) || kb !== jb || yb !== Rb) {
        if (bb.is2DArray) throw new Error(`Reading pixels from 2D array textures with ${eb?"RTT":"compression"} is not supported.`);
        return await async function(bb, ab, Tb, Yb, Bb) {
          let eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const vb = bb.oN(),
            Lb = vb.vj(),
            Pb = bb.getInternalTexture(),
            Xb = bb.is3D || !!Pb?.is3D;
          let jb;
          if (Lb.isWebGPU ? Xb ? await Ub.e(360).then((() => Ub(60557))) : bb.isCube ? await Ub.e(361).then((() => Ub(60559))) : await Ub.e(362).then((() => Ub(60561))) : Xb ? await Ub.e(357).then((() => Ub(60538))) : bb.isCube ? await Ub.e(358).then((() => Ub(60543))) : await Ub.e(359).then((() => Ub(60551))), Xb) jb = new Eb.e("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: Ab.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Lb,
            shaderLanguage: Lb.isWebGPU ? 1 : 0
          });
          else if (bb.isCube) {
            const bb = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            jb = new Eb.e("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: Ab.e.NEAREST_NEAREST_MIPNEAREST,
              engine: Lb,
              defines: bb[Yb],
              shaderLanguage: Lb.isWebGPU ? 1 : 0
            })
          } else jb = new Eb.e("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Ab.e.NEAREST_NEAREST_MIPNEAREST,
            engine: Lb,
            shaderLanguage: Lb.isWebGPU ? 1 : 0
          });
          await new Promise((bb => {
            jb.onEffectCreatedObservable.addOnce((ab => {
              ab.executeWhenCompiled((() => {
                bb(0)
              }))
            }))
          }));
          const Rb = new Mb.b("temp", {
            width: ab,
            height: Tb
          }, vb, !1);
          jb.onApply = function(ab) {
            ab.setTexture("textureSampler", bb), ab.setFloat("lod", Bb), ab.setInt("gamma", bb.gammaSpace ? 1 : 0), Xb && ab.setFloat("slice", eb)
          };
          try {
            if (Rb.renderTarget && Pb) {
              const Ub = Pb.samplingMode;
              0 !== Bb ? bb.updateSamplingMode(Ab.e.NEAREST_NEAREST_MIPNEAREST) : bb.updateSamplingMode(Ab.e.NEAREST_NEAREST), vb.postProcessManager.directRender([jb], Rb.renderTarget, !0), bb.updateSamplingMode(Ub);
              const Mb = await Lb.readPixels(0, 0, ab, Tb),
                Eb = new Uint8Array(Mb.buffer, Mb.byteOffset, Mb.byteLength);
              return Lb.unBindFramebuffer(Rb.renderTarget), Eb
            }
            throw Error("Render to texture failed.")
          } finally {
            Rb.dispose(), jb.dispose()
          }
        }(bb, kb, yb, Yb, Bb, vb)
      }
      let Zb = await bb.readPixels(Yb, Bb);
      if (!Zb) throw new Error(`Failed to read pixels from texture ${bb.name}.`);
      if (Zb instanceof Float32Array) {
        const bb = new Uint8Array(Zb.length);
        let ab = Zb.length;
        for (; ab--;) {
          const Ub = Zb[ab];
          bb[ab] = Math.round(255 * (0, Lb.Clamp)(Ub))
        }
        Zb = bb
      }
      const Db = kb * yb,
        zb = 4 * Db;
      if (Zb.length !== zb) {
        const bb = 0 === Db ? 0 : Zb.length / Db;
        if (1 === bb || 2 === bb || 3 === bb) {
          const ab = new Uint8Array(zb);
          for (let Ub = 0, Ab = 0, Mb = 0; Ub < Db; Ub++, Mb += 4) {
            const Ub = Zb[Ab++];
            if (1 === bb) {
              ab[Mb] = Ub, ab[Mb + 1] = Ub, ab[Mb + 2] = Ub, ab[Mb + 3] = 255;
              continue
            }
            const Tb = Zb[Ab++];
            2 !== bb ? (ab[Mb] = Ub, ab[Mb + 1] = Tb, ab[Mb + 2] = Zb[Ab++], ab[Mb + 3] = 255) : (ab[Mb] = Ub, ab[Mb + 1] = Tb, ab[Mb + 2] = 0, ab[Mb + 3] = 255)
          }
          return ab
        }
      }
      return Zb
    }
    const Rb = {
      CreateResizedCopy: function(bb, ab, Ub) {
        let Tb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Eb = bb.oN(),
          Yb = Eb.vj(),
          Bb = new Mb.b("resized" + bb.name, {
            width: ab,
            height: Ub
          }, Eb, !bb.noMipmap, !0, bb._texture.type, !1, bb.samplingMode, !1);
        Bb.wrapU = bb.wrapU, Bb.wrapV = bb.wrapV, Bb.uOffset = bb.uOffset, Bb.vOffset = bb.vOffset, Bb.uScale = bb.uScale, Bb.vScale = bb.vScale, Bb.uAng = bb.uAng, Bb.vAng = bb.vAng, Bb.wAng = bb.wAng, Bb.coordinatesIndex = bb.coordinatesIndex, Bb.level = bb.level, Bb.anisotropicFilteringLevel = bb.anisotropicFilteringLevel, Bb._texture.isReady = !1, bb.wrapU = Ab.e.CLAMP_ADDRESSMODE, bb.wrapV = Ab.e.CLAMP_ADDRESSMODE;
        const eb = new vb("pass", 1, null, Tb ? Ab.e.BILINEAR_SAMPLINGMODE : Ab.e.NEAREST_SAMPLINGMODE, Yb, !1, 0);
        return eb.externalTextureSamplerBinding = !0, eb.onEffectCreatedObservable.addOnce((ab => {
          ab.executeWhenCompiled((() => {
            eb.onApply = function(ab) {
              ab.setTexture("textureSampler", bb)
            };
            const ab = Bb.renderTarget;
            ab && (Eb.postProcessManager.directRender([eb], ab), Yb.unBindFramebuffer(ab), Bb.disposeFramebufferObjects(), eb.dispose(), Bb.getInternalTexture().isReady = !0)
          }))
        })), Bb
      },
      ApplyPostProcess: Xb,
      ToHalfFloat: Pb.j,
      FromHalfFloat: Pb.e,
      GetTextureDataAsync: jb
    }
  },
  40901: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => jb
    });
    var Ab = Ub(39104),
      Mb = Ub(39205),
      Tb = Ub(36431),
      Eb = Ub(36401),
      Yb = Ub(38939),
      Bb = Ub(39110),
      eb = Ub(39124),
      vb = Ub(36447),
      Lb = Ub(39002),
      Pb = Ub(39033),
      Xb = Ub(40904);
    let jb = (() => {
        var bb;
        let ab, Yb, Lb, jb, Rb, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb = [],
          Ib = [],
          db = [],
          Fb = [],
          hb = [],
          Gb = [],
          Qb = [],
          qb = [],
          ub = [],
          rb = [],
          Kb = [],
          ob = [],
          lb = [],
          tb = [],
          wb = [],
          sb = [],
          gb = [],
          Cb = [],
          Vb = [],
          Ob = [],
          cb = [],
          Jb = [],
          nb = [],
          Sb = [],
          ba = [],
          aa = [],
          Ua = [],
          Aa = [],
          Ma = [];
        return bb = class {
          static get ForceGLSL() {
            return Xb.g.ForceGLSL
          }
          static set ForceGLSL(bb) {
            Xb.g.ForceGLSL = bb
          }
          static RegisterShaderCodeProcessing(bb, ab) {
            Xb.g.RegisterShaderCodeProcessing(bb, ab)
          }
          get name() {
            return this._effectWrapper.name
          }
          set name(bb) {
            this._effectWrapper.name = bb
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode
          }
          set alphaMode(bb) {
            this._effectWrapper.alphaMode = bb
          }
          get samples() {
            return this._samples
          }
          set samples(bb) {
            this._samples = Math.min(bb, this._engine.getCaps().maxMSAASamples), this._textures.forEach((bb => {
              bb.setSamples(this._samples)
            }))
          }
          get shaderLanguage() {
            return this._shaderLanguage
          }
          getEffectName() {
            return this._fragmentUrl
          }
          set onActivate(bb) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), bb && (this._onActivateObserver = this.onActivateObservable.add(bb))
          }
          set onSizeChanged(bb) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(bb)
          }
          set onApply(bb) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(bb)
          }
          set onBeforeRender(bb) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb)
          }
          set onAfterRender(bb) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb)
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd]
          }
          set inputTexture(bb) {
            this._forcedOutputTexture = bb
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty())
          }
          getCamera() {
            return this.lC
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.K9(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize)
          }
          constructor(ab, Ub, Yb, Bb, eb, vb) {
            let Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              Pb = arguments.length > 7 ? arguments[7] : void 0,
              jb = arguments.length > 8 ? arguments[8] : void 0,
              Rb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              yb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              Zb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              Db = arguments.length > 12 ? arguments[12] : void 0,
              zb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              xb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              ib = arguments.length > 15 ? arguments[15] : void 0,
              fb = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, Ab.k)(this, Hb), null), this.uniqueId = (0, Ab.k)(this, Ib, void 0), this.width = ((0, Ab.k)(this, db), (0, Ab.k)(this, Fb, -1)), this.height = ((0, Ab.k)(this, hb), (0, Ab.k)(this, Gb, -1)), this.nodeMaterialSource = ((0, Ab.k)(this, Qb), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, Ab.k)(this, qb, void 0), this.clearColor = ((0, Ab.k)(this, ub), (0, Ab.k)(this, rb, void 0)), this.autoClear = ((0, Ab.k)(this, Kb), (0, Ab.k)(this, ob, !0)), this.forceAutoClearInAlphaMode = ((0, Ab.k)(this, lb), (0, Ab.k)(this, tb, !1)), this.alphaConstants = ((0, Ab.k)(this, wb), (0, Ab.k)(this, sb, void 0)), this.animations = ((0, Ab.k)(this, gb), []), this.enablePixelPerfectMode = (0, Ab.k)(this, Cb, !1), this.forceFullscreenViewport = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, !0)), this.inspectableCustomProperties = (0, Ab.k)(this, cb), this.scaleMode = (0, Ab.k)(this, Jb, 1), this.alwaysForcePOT = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, !1)), this._samples = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, 1)), this.adaptScaleToCurrentViewport = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, !1)), this.doNotSerialize = ((0, Ab.k)(this, Ma), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new Mb.h(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new Eb.l(1, 1), this._texelSize = Eb.l.Zero(), this.onActivateObservable = new Tb.b, this.onSizeChangedObservable = new Tb.b, this.onApplyObservable = new Tb.b, this.onBeforeRenderObservable = new Tb.b, this.onAfterRenderObservable = new Tb.b, this.UW = new Tb.b, kb();
            let mb, pb = 1,
              Nb = null;
            if (Yb && !Array.isArray(Yb)) {
              const bb = Yb;
              Yb = bb.uniforms ?? null, Bb = bb.samplers ?? null, pb = bb.size ?? 1, vb = bb.camera ?? null, Lb = bb.samplingMode ?? 1, Pb = bb.engine, jb = bb.reusable, Rb = Array.isArray(bb.defines) ? bb.defines.join("\n") : bb.defines ?? null, yb = bb.textureType ?? 0, Zb = bb.vertexUrl ?? "postprocess", Db = bb.indexParameters, zb = bb.blockCompilation ?? !1, xb = bb.textureFormat ?? 5, ib = bb.shaderLanguage ?? 0, Nb = bb.uniformBuffers ?? null, fb = bb.extraInitializations, mb = bb.effectWrapper
            } else eb && (pb = "number" === typeof eb ? eb : {
              width: eb.width,
              height: eb.height
            });
            if (this._useExistingThinPostProcess = !!mb, this._effectWrapper = mb ?? new Xb.g({
                name: ab,
                useShaderStore: !0,
                useAsPostProcess: !0,
                fragmentShader: Ub,
                engine: Pb || vb?.oN().vj(),
                uniforms: Yb,
                samplers: Bb,
                uniformBuffers: Nb,
                defines: Rb,
                vertexUrl: Zb,
                indexParameters: Db,
                blockCompilation: !0,
                shaderLanguage: ib,
                extraInitializations: void 0
              }), this.name = ab, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != vb ? (this.lC = vb, this._scene = vb.oN(), vb.attachPostProcess(this), this._engine = this._scene.vj(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : Pb && (this._engine = Pb, this._engine.postProcesses.push(this)), this._options = pb, this.renderTargetSamplingMode = Lb || 1, this._reusable = jb || !1, this._textureType = yb, this._textureFormat = xb, this._shaderLanguage = ib || 0, this._samplers = Bb || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = Ub, this._vertexUrl = Zb, this._parameters = Yb || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = Nb || [], this._indexParameters = Db, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const ab = [];
              this._gatherImports(this._engine.isWebGPU && !bb.ForceGLSL, ab), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(zb, Rb, fb, ab)
            }
          }
          _gatherImports() {
            let bb = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? bb.push(Promise.all([Ub.e(356).then((() => Ub(60514)))])) : bb.push(Promise.all([Ub.e(345).then((() => Ub(60252)))]))
          }
          getClassName() {
            return "PostProcess"
          }
          vj() {
            return this._engine
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect
          }
          shareOutputWith(bb) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = bb, this
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new Mb.h(2)), this._shareOutputWithPostProcess = null
          }
          updateEffect() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ab = arguments.length > 3 ? arguments[3] : void 0,
              Mb = arguments.length > 4 ? arguments[4] : void 0,
              Tb = arguments.length > 5 ? arguments[5] : void 0,
              Eb = arguments.length > 6 ? arguments[6] : void 0,
              Yb = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines
          }
          isReusable() {
            return this._reusable
          }
          markTextureDirty() {
            this.width = -1
          }
          _createRenderTargetTexture(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let Mb = 0; Mb < this._textureCache.length; Mb++)
              if (this._textureCache[Mb].texture.width === bb.width && this._textureCache[Mb].texture.height === bb.height && this._textureCache[Mb].postProcessChannel === Ub && this._textureCache[Mb].texture._generateDepthBuffer === ab.generateDepthBuffer && this._textureCache[Mb].texture.samples === ab.samples) return this._textureCache[Mb].texture;
            const Ab = this._engine.createRenderTargetTexture(bb, ab);
            return this._textureCache.push({
              texture: Ab,
              postProcessChannel: Ub,
              lastUsedRenderId: -1
            }), Ab
          }
          _flushTextureCache() {
            const bb = this._renderId;
            for (let ab = this._textureCache.length - 1; ab >= 0; ab--)
              if (bb - this._textureCache[ab].lastUsedRenderId > 100) {
                let bb = !1;
                for (let Ub = 0; Ub < this._textures.length; Ub++)
                  if (this._textures.data[Ub] === this._textureCache[ab].texture) {
                    bb = !0;
                    break
                  } bb || (this._textureCache[ab].texture.dispose(), this._textureCache.splice(ab, 1))
              }
          }
          resize(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = bb, this.height = ab;
            let Tb = null;
            if (Ub)
              for (let Bb = 0; Bb < Ub._postProcesses.length; Bb++)
                if (null !== Ub._postProcesses[Bb]) {
                  Tb = Ub._postProcesses[Bb];
                  break
                } const Eb = {
                width: this.width,
                height: this.height
              },
              Yb = {
                generateMipMaps: Ab,
                generateDepthBuffer: Mb || Tb === this,
                generateStencilBuffer: (Mb || Tb === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(Eb, Yb, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(Eb, Yb, 1)), this._texelSize.K9(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this)
          }
          _getTarget() {
            let bb;
            if (this._shareOutputWithPostProcess) bb = this._shareOutputWithPostProcess.inputTexture;
            else if (this._forcedOutputTexture) bb = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;
            else {
              let ab;
              bb = this.inputTexture;
              for (let Ub = 0; Ub < this._textureCache.length; Ub++)
                if (this._textureCache[Ub].texture === bb) {
                  ab = this._textureCache[Ub];
                  break
                } ab && (ab.lastUsedRenderId = this._renderId)
            }
            return bb
          }
          activate(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              Ub = arguments.length > 2 ? arguments[2] : void 0;
            const Ab = null === bb || void 0 !== bb.cameraRigMode ? bb || this.lC : null,
              Mb = Ab?.oN() ?? bb,
              Tb = Mb.vj(),
              Eb = Tb.getCaps().maxTextureSize,
              Yb = (ab ? ab.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              Bb = (ab ? ab.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let eb = this._options.width || Yb,
              vb = this._options.height || Bb;
            const Lb = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let Xb = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const bb = Tb.currentViewport;
                bb && (eb *= bb.width, vb *= bb.height)
              }(Lb || this.alwaysForcePOT) && (this._options.width || (eb = Tb.needPOTTextures ? (0, Pb.e)(eb, Eb, this.scaleMode) : eb), this._options.height || (vb = Tb.needPOTTextures ? (0, Pb.e)(vb, Eb, this.scaleMode) : vb)), this.width === eb && this.height === vb && (Xb = this._getTarget()) || this.resize(eb, vb, Ab, Lb, Ub), this._textures.forEach((bb => {
                bb.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(bb, this.samples)
              })), this._flushTextureCache(), this._renderId++
            }
            return Xb || (Xb = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.K9(Yb / eb, Bb / vb), this._engine.bindFramebuffer(Xb, 0, Yb, Bb, this.forceFullscreenViewport)) : (this._scaleRatio.K9(1, 1), this._engine.bindFramebuffer(Xb, 0, void 0, void 0, this.forceFullscreenViewport)), this._engine._debugInsertMarker?.(`post process ${this.name} input`), this.onActivateObservable.notifyObservers(Ab), this.autoClear && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : Mb.clearColor, Mb._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), Xb
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
            let bb;
            return this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.vj().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), bb = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", bb?.texture), this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose())
          }
          _disposeTextureCache() {
            for (let bb = this._textureCache.length - 1; bb >= 0; bb--) this._textureCache[bb].texture.dispose();
            this._textureCache.length = 0
          }
          setPrePassRenderer(bb) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = bb.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0)
          }
          dispose(bb) {
            let ab;
            if (bb = bb || this.lC, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (ab = this._parentContainer.postProcesses.indexOf(this), ab > -1 && this._parentContainer.postProcesses.splice(ab, 1), this._parentContainer = null), ab = this._engine.postProcesses.indexOf(this), -1 !== ab && this._engine.postProcesses.splice(ab, 1), this.UW.notifyObservers(), bb) {
              if (bb.detachPostProcess(this), ab = bb._postProcesses.indexOf(this), 0 === ab && bb._postProcesses.length > 0) {
                const bb = this.lC._getFirstPostProcess();
                bb && bb.markTextureDirty()
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear()
            }
          }
          serialize() {
            const bb = eb.b.Serialize(this),
              ab = this.getCamera() || this._scene && this._scene.activeCamera;
            return bb.customType = "BABYLON." + this.getClassName(), bb.cameraId = ab ? ab.id : null, bb.reusable = this._reusable, bb.textureType = this._textureType, bb.fragmentUrl = this._fragmentUrl, bb.parameters = this._parameters, bb.samplers = this._samplers, bb.uniformBuffers = this._uniformBuffers, bb.options = this._options, bb.defines = this._postProcessDefines, bb.textureFormat = this._textureFormat, bb.vertexUrl = this._vertexUrl, bb.indexParameters = this._indexParameters, bb
          }
          clone() {
            const ab = this.serialize();
            ab._engine = this._engine, ab.cameraId = null;
            const Ub = bb.Parse(ab, this._scene, "");
            return Ub ? (Ub.onActivateObservable = this.onActivateObservable.clone(), Ub.onSizeChangedObservable = this.onSizeChangedObservable.clone(), Ub.onApplyObservable = this.onApplyObservable.clone(), Ub.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), Ub.onAfterRenderObservable = this.onAfterRenderObservable.clone(), Ub._prePassEffectConfiguration = this._prePassEffectConfiguration, Ub) : null
          }
          static Parse(bb, ab, Ub) {
            const Ab = (0, vb.b)(bb.customType);
            if (!Ab || !Ab._Parse) return null;
            const Mb = ab ? ab.getCameraById(bb.cameraId) : null;
            return Ab._Parse(bb, Mb, ab, Ub)
          }
          static _Parse(ab, Ub, Ab, Mb) {
            return eb.b.Parse((() => new bb(ab.name, ab.fragmentUrl, ab.parameters, ab.samplers, ab.options, Ub, ab.renderTargetSamplingMode, ab._engine, ab.reusable, ab.defines, ab.textureType, ab.vertexUrl, ab.indexParameters, !1, ab.textureFormat)), ab, Ab, Mb)
          }
        }, (() => {
          const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ab = [(0, Bb.K)()], Yb = [(0, Bb.K)()], Lb = [(0, Bb.K)()], jb = [(0, Bb.K)()], Rb = [(0, Bb.K)()], yb = [(0, Bb.n)()], Zb = [(0, Bb.K)()], Db = [(0, Bb.K)()], zb = [(0, Bb.K)()], xb = [(0, Bb.K)()], ib = [(0, Bb.K)()], fb = [(0, Bb.K)()], mb = [(0, Bb.K)()], pb = [(0, Bb.K)()], Nb = [(0, Bb.K)("samples")], Wb = [(0, Bb.K)()], (0, Ab.h)(bb, null, Yb, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name
            },
            metadata: Ub
          }, null, Hb), (0, Ab.h)(bb, null, zb, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaMode" in bb,
              get: bb => bb.alphaMode
            },
            metadata: Ub
          }, null, Hb), (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "uniqueId",
            static: !1,
            private: !1,
            access: {
              has: bb => "uniqueId" in bb,
              get: bb => bb.uniqueId,
              set: (bb, ab) => {
                bb.uniqueId = ab
              }
            },
            metadata: Ub
          }, Ib, db), (0, Ab.h)(null, null, Lb, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: bb => "width" in bb,
              get: bb => bb.width,
              set: (bb, ab) => {
                bb.width = ab
              }
            },
            metadata: Ub
          }, Fb, hb), (0, Ab.h)(null, null, jb, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: bb => "height" in bb,
              get: bb => bb.height,
              set: (bb, ab) => {
                bb.height = ab
              }
            },
            metadata: Ub
          }, Gb, Qb), (0, Ab.h)(null, null, Rb, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "renderTargetSamplingMode" in bb,
              get: bb => bb.renderTargetSamplingMode,
              set: (bb, ab) => {
                bb.renderTargetSamplingMode = ab
              }
            },
            metadata: Ub
          }, qb, ub), (0, Ab.h)(null, null, yb, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "clearColor" in bb,
              get: bb => bb.clearColor,
              set: (bb, ab) => {
                bb.clearColor = ab
              }
            },
            metadata: Ub
          }, rb, Kb), (0, Ab.h)(null, null, Zb, {
            kind: "field",
            name: "autoClear",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoClear" in bb,
              get: bb => bb.autoClear,
              set: (bb, ab) => {
                bb.autoClear = ab
              }
            },
            metadata: Ub
          }, ob, lb), (0, Ab.h)(null, null, Db, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAutoClearInAlphaMode" in bb,
              get: bb => bb.forceAutoClearInAlphaMode,
              set: (bb, ab) => {
                bb.forceAutoClearInAlphaMode = ab
              }
            },
            metadata: Ub
          }, tb, wb), (0, Ab.h)(null, null, xb, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaConstants" in bb,
              get: bb => bb.alphaConstants,
              set: (bb, ab) => {
                bb.alphaConstants = ab
              }
            },
            metadata: Ub
          }, sb, gb), (0, Ab.h)(null, null, ib, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "enablePixelPerfectMode" in bb,
              get: bb => bb.enablePixelPerfectMode,
              set: (bb, ab) => {
                bb.enablePixelPerfectMode = ab
              }
            },
            metadata: Ub
          }, Cb, Vb), (0, Ab.h)(null, null, fb, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceFullscreenViewport" in bb,
              get: bb => bb.forceFullscreenViewport,
              set: (bb, ab) => {
                bb.forceFullscreenViewport = ab
              }
            },
            metadata: Ub
          }, Ob, cb), (0, Ab.h)(null, null, mb, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "scaleMode" in bb,
              get: bb => bb.scaleMode,
              set: (bb, ab) => {
                bb.scaleMode = ab
              }
            },
            metadata: Ub
          }, Jb, nb), (0, Ab.h)(null, null, pb, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: bb => "alwaysForcePOT" in bb,
              get: bb => bb.alwaysForcePOT,
              set: (bb, ab) => {
                bb.alwaysForcePOT = ab
              }
            },
            metadata: Ub
          }, Sb, ba), (0, Ab.h)(null, null, Nb, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: bb => "_samples" in bb,
              get: bb => bb._samples,
              set: (bb, ab) => {
                bb._samples = ab
              }
            },
            metadata: Ub
          }, aa, Ua), (0, Ab.h)(null, null, Wb, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: bb => "adaptScaleToCurrentViewport" in bb,
              get: bb => bb.adaptScaleToCurrentViewport,
              set: (bb, ab) => {
                bb.adaptScaleToCurrentViewport = ab
              }
            },
            metadata: Ub
          }, Aa, Ma), Ub && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ub
          })
        })(), bb
      })(),
      Rb = !1;

    function kb() {
      Rb || (Rb = !0, Lb.d.prototype.setTextureFromPostProcess = function(bb, ab, Ub) {
        let Ab = null;
        ab && (ab._forcedOutputTexture ? Ab = ab._forcedOutputTexture : ab._textures.data[ab._currentRenderTextureInd] && (Ab = ab._textures.data[ab._currentRenderTextureInd])), this._bindTexture(bb, Ab?.texture ?? null, Ub)
      }, Lb.d.prototype.setTextureFromPostProcessOutput = function(bb, ab, Ub) {
        this._bindTexture(bb, ab?._outputTexture?.texture ?? null, Ub)
      }, Yb.d.prototype.setTextureFromPostProcess = function(bb, ab) {
        this._engine.setTextureFromPostProcess(this._samplers[bb], ab, bb)
      }, Yb.d.prototype.setTextureFromPostProcessOutput = function(bb, ab) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[bb], ab, bb)
      }, (0, vb.f)("BABYLON.PostProcess", jb))
    }
  },
  40925: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      g: () => Tb
    });
    var Ab = Ub(40904),
      Mb = Ub(36425);
    class Tb extends Ab.g {
      _gatherImports(bb, ab) {
        bb ? (this._webGPUReady = !0, ab.push(Promise.all([Ub.e(363).then((() => Ub(60564)))]))) : ab.push(Promise.all([Ub.e(364).then((() => Ub(60573)))])), super._gatherImports(bb, ab)
      }
      constructor(bb) {
        let ab = arguments.length > 2 ? arguments[2] : void 0;
        const Ub = {
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Mb.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Tb.FragmentUrl,
          ...ab
        };
        Ub.engine || (Ub.engine = Mb.d.LastCreatedEngine), super(Ub)
      }
    }
    Tb.FragmentUrl = "pass";
    class Eb extends Ab.g {
      _gatherImports(bb, ab) {
        bb ? (this._webGPUReady = !0, ab.push(Promise.all([Ub.e(365).then((() => Ub(60582)))]))) : ab.push(Promise.all([Ub.e(366).then((() => Ub(60591)))])), super._gatherImports(bb, ab)
      }
      constructor(bb) {
        super({
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Mb.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: Eb.FragmentUrl,
          defines: "#define POSITIVEX"
        }), this._face = 0
      }
      get face() {
        return this._face
      }
      set face(bb) {
        if (!(bb < 0 || bb > 5)) switch (this._face = bb, this._face) {
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
    Eb.FragmentUrl = "passCube"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);