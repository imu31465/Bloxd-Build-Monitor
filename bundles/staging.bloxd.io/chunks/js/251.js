export const id = 251;
export const ids = [251];
export const modules = {
  40248: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => GS,
      d: () => PS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(40144),
      xS = gS(37144),
      NS = gS(37117),
      qS = gS(40256),
      uS = gS(38687),
      IS = gS(37164),
      fS = gS(39926),
      kS = gS(38134),
      aS = gS(37783),
      KS = gS(39998),
      jS = gS(40068);
    let GS = (() => {
      var SS;
      let HS, gS, IS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS = qS.e,
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
      return SS = class extends LS {
        get position() {
          return this._position
        }
        set position(SS) {
          this._position = SS
        }
        set upVector(SS) {
          this._upVector = SS
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let HS, gS;
          if (this.mode === SS.PERSPECTIVE_CAMERA) this.fovMode === SS.FOVMODE_VERTICAL_FIXED ? (gS = 2 * this.minZ * Math.tan(this.fov / 2), HS = this.AK().getAspectRatio(this) * gS) : (HS = 2 * this.minZ * Math.tan(this.fov / 2), gS = HS / this.AK().getAspectRatio(this));
          else {
            const SS = this.AK().getRenderWidth() / 2,
              tS = this.AK().getRenderHeight() / 2;
            HS = (this.orthoRight ?? SS) - (this.orthoLeft ?? -SS), gS = (this.orthoTop ?? tS) - (this.orthoBottom ?? -tS)
          }
          return HS * gS
        }
        set orthoLeft(SS) {
          this._orthoLeft = SS;
          for (const HS of this._rigCameras) HS.orthoLeft = SS
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(SS) {
          this._orthoRight = SS;
          for (const HS of this._rigCameras) HS.orthoRight = SS
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(SS) {
          this._orthoBottom = SS;
          for (const HS of this._rigCameras) HS.orthoBottom = SS
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(SS) {
          this._orthoTop = SS;
          for (const HS of this._rigCameras) HS.orthoTop = SS
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(HS / (2 * SS))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(SS) {
          this._baseInertia = SS
        }
        set mode(SS) {
          this._mode = SS;
          for (const HS of this._rigCameras) HS.mode = SS
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(HS, gS, bS) {
          let qS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, KS.b)(), super(HS, bS, !1), this.inputs = (0, tS.k)(this, YS), this._position = (0, tS.k)(this, AS, NS.n.Zero()), this._upVector = ((0, tS.k)(this, yS), (0, tS.k)(this, VS, NS.n.Up())), this.oblique = ((0, tS.k)(this, iS), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, tS.k)(this, WS, .8), this.projectionPlaneTilt = ((0, tS.k)(this, zS), (0, tS.k)(this, US, 0)), this.minZ = ((0, tS.k)(this, pS), (0, tS.k)(this, sS, 1)), this.maxZ = ((0, tS.k)(this, BS), (0, tS.k)(this, MS, 1e4)), this._baseInertia = ((0, tS.k)(this, FS), .9), this._mode = SS.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new kS.b(0, 0, 1, 1), this.layerMask = (0, tS.k)(this, RS, 268435455), this.fovMode = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, SS.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, SS.RIG_MODE_NONE)), this.interaxialDistance = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, void 0)), this.isStereoscopicSideBySide = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, void 0)), this.ignoreCameraMaxZ = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, !1)), this.customRenderTargets = ((0, tS.k)(this, bH), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new xS.e, this.onProjectionMatrixChangedObservable = new xS.e, this.onAfterCheckInputsObservable = new xS.e, this.onRestoreStateObservable = new xS.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new NS.e, this._postProcesses = new Array, this._activeMeshes = new XS.f(256), this._globalPosition = NS.n.Zero(), this._computedViewMatrix = NS.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = NS.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = NS.i.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.lL().defaultCameraLayerMask, this.lL().addCamera(this), qS && !this.lL().activeCamera && (this.lL().activeCamera = this), this.position = gS, this.renderPassId = this.lL().AK().createRenderPassId(`Camera ${HS}`)
        }
        storeState() {
          return this._stateStored = !0, this._storedFov = this.fov, this
        }
        hasStateStored() {
          return !!this._stateStored
        }
        _restoreStateValues() {
          return !!this._stateStored && (this.fov = this._storedFov, !0)
        }
        restoreState() {
          return !!this._restoreStateValues() && (this.onRestoreStateObservable.notifyObservers(this), !0)
        }
        getClassName() {
          return "yG"
        }
        toString(SS) {
          let HS = "Name: " + this.name;
          if (HS += ", type: " + this.getClassName(), this.animations)
            for (let gS = 0; gS < this.animations.length; gS++) HS += ", animation[0]: " + this.animations[gS].toString(SS);
          return HS
        }
        applyVerticalCorrection() {
          const SS = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -SS.x : SS.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(SS) {
          return -1 !== this._activeMeshes.indexOf(SS)
        }
        isReady() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (SS)
            for (const HS of this._postProcesses)
              if (HS && !HS.isReady()) return !1;
          return super.isReady(SS)
        }
        _initCache() {
          super._initCache(), this._cache.position = new NS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new NS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(SS) {
          SS || super._updateCache(), this._cache.position.dJ(this.position), this._cache.upVector.dJ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const HS = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let gS = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === HS;
          if (!gS) return !1;
          const tS = this.AK();
          return this.mode === SS.PERSPECTIVE_CAMERA ? gS = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === tS.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (gS = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === tS.getRenderWidth() && this._cache.renderHeight === tS.getRenderHeight(), this.oblique && (gS = gS && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), gS
        }
        attachControl(SS, HS) {}
        detachControl(SS) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== SS.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
        }
        _checkInputs() {
          this.onAfterCheckInputsObservable.notifyObservers(this)
        }
        get rigCameras() {
          return this._rigCameras
        }
        get rigPostProcess() {
          return this._rigPostProcess
        }
        _getFirstPostProcess() {
          for (let SS = 0; SS < this._postProcesses.length; SS++)
            if (null !== this._postProcesses[SS]) return this._postProcesses[SS];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const SS = this._getFirstPostProcess();
          SS && SS.markTextureDirty();
          for (let HS = 0, gS = this._rigCameras.length; HS < gS; HS++) {
            const SS = this._rigCameras[HS],
              gS = SS._rigPostProcess;
            if (gS) {
              "pass" === gS.getEffectName() && (SS.isIntermediate = 0 === this._postProcesses.length), SS._postProcesses = this._postProcesses.slice(0).concat(gS), gS.markTextureDirty()
            } else SS._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !SS.isReusable() && this._postProcesses.indexOf(SS) > -1 ? (uS.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == HS || HS < 0 ? this._postProcesses.push(SS) : null === this._postProcesses[HS] ? this._postProcesses[HS] = SS : this._postProcesses.splice(HS, 0, SS), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.OHS(), this._postProcesses.indexOf(SS))
        }
        detachPostProcess(SS) {
          const HS = this._postProcesses.indexOf(SS); - 1 !== HS && (this._postProcesses[HS] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.OHS(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return NS.e.Identity()
        }
        getViewMatrix(SS) {
          return !SS && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.lL().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(SS) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== SS && (this._projectionMatrix = SS)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(HS) {
          if (this._doNotComputeProjectionMatrix || !HS && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const gS = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = gS, this._refreshFrustumPlanes = !0;
          const tS = this.AK(),
            bS = this.lL(),
            XS = tS.RgS;
          if (this.mode === SS.PERSPECTIVE_CAMERA) {
            let HS;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = tS.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), HS = bS.useRightHandedSystem ? NS.e.PerspectiveFovRHToRef : NS.e.PerspectiveFovLHToRef, HS(this.fov, tS.getAspectRatio(this), XS ? gS : this.minZ, XS ? this.minZ : gS, this._projectionMatrix, this.fovMode === SS.FOVMODE_VERTICAL_FIXED, tS.isNDCHalfZRange, this.projectionPlaneTilt, XS)
          } else {
            const SS = tS.getRenderWidth() / 2,
              HS = tS.getRenderHeight() / 2;
            bS.useRightHandedSystem ? this.oblique ? NS.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -SS, this.orthoRight ?? SS, this.orthoBottom ?? -HS, this.orthoTop ?? HS, XS ? gS : this.minZ, XS ? this.minZ : gS, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, tS.isNDCHalfZRange) : NS.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -SS, this.orthoRight ?? SS, this.orthoBottom ?? -HS, this.orthoTop ?? HS, XS ? gS : this.minZ, XS ? this.minZ : gS, this._projectionMatrix, tS.isNDCHalfZRange) : this.oblique ? NS.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -SS, this.orthoRight ?? SS, this.orthoBottom ?? -HS, this.orthoTop ?? HS, XS ? gS : this.minZ, XS ? this.minZ : gS, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, tS.isNDCHalfZRange) : NS.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -SS, this.orthoRight ?? SS, this.orthoBottom ?? -HS, this.orthoTop ?? HS, XS ? gS : this.minZ, XS ? this.minZ : gS, this._projectionMatrix, tS.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = tS.getRenderWidth(), this._cache.renderHeight = tS.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(SS) {
          return (this.radius || (this.target ? NS.n.Distance(this.position, this.target) : this.position.length())) + SS
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? aS.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = aS.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), HS && this.rigCameras.length > 0) {
            let HS = !1;
            for (const gS of this.rigCameras) gS._updateFrustumPlanes(), HS = HS || SS.isInFrustum(gS._frustumPlanes);
            return HS
          }
          return SS.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(SS) {
          return this._updateFrustumPlanes(), SS.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, fS.l)("Ray")
        }
        getForwardRayToRef(SS) {
          throw (0, fS.l)("Ray")
        }
        dispose(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.lL().stopAnimation(this), this.lL().removeCamera(this); this._rigCameras.length > 0;) {
            const SS = this._rigCameras.pop();
            SS && SS.dispose()
          }
          if (this._parentContainer) {
            const SS = this._parentContainer.cameras.indexOf(this);
            SS > -1 && this._parentContainer.cameras.splice(SS, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== SS.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let SS = this._postProcesses.length;
            for (; --SS >= 0;) {
              const HS = this._postProcesses[SS];
              HS && HS.dispose(this)
            }
          }
          let tS = this.customRenderTargets.length;
          for (; --tS >= 0;) this.customRenderTargets[tS].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.lL().AK().releaseRenderPassId(this.renderPassId), super.dispose(HS, gS)
        }
        get isLeftCamera() {
          return this._isLeftCamera
        }
        get isRightCamera() {
          return this._isRightCamera
        }
        get leftCamera() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0]
        }
        get rightCamera() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1]
        }
        getLeftTarget() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget()
        }
        getRightTarget() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget()
        }
        setCameraRigMode(HS, gS) {
          if (this.cameraRigMode !== HS) {
            for (; this._rigCameras.length > 0;) {
              const SS = this._rigCameras.pop();
              SS && SS.dispose()
            }
            if (this.cameraRigMode = HS, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = gS.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== SS.RIG_MODE_NONE) {
              const SS = this.createRigCamera(this.name + "_L", 0);
              SS && (SS._isLeftCamera = !0);
              const HS = this.createRigCamera(this.name + "_R", 1);
              HS && (HS._isRightCamera = !0), SS && HS && (this._rigCameras.push(SS), this._rigCameras.push(HS))
            }
            this._setRigMode(gS), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(SS) {}
        _getVRProjectionMatrix() {
          return NS.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.AK().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(SS, HS) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[SS] = HS, "interaxialDistance" === SS && (this._cameraRigParams.stereoHalfAngle = HS / .0637 * (Math.PI / 180))
        }
        createRigCamera(SS, HS) {
          return null
        }
        _updateRigCameras() {
          for (let SS = 0; SS < this._rigCameras.length; SS++) this._rigCameras[SS].minZ = this.minZ, this._rigCameras[SS].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[SS].fov = this.fov, this._rigCameras[SS].upVector.dJ(this.upVector);
          this.cameraRigMode === SS.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const SS = jS.b.Serialize(this);
          return SS.uniqueId = this.uniqueId, SS.type = this.getClassName(), this.parent && this.parent._serializeAsParent(SS), this.inputs && this.inputs.serialize(SS), jS.b.AppendSerializedAnimations(this, SS), SS.HG = this.serializeAnimationRanges(), SS.isEnabled = this.isEnabled(), SS
        }
        clone(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tS = jS.b.Clone(SS.GetConstructorFromName(this.getClassName(), HS, this.lL(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return tS.name = HS, tS.parent = gS, this.onClonedObservable.notifyObservers(tS), tS
        }
        uR(SS) {
          const HS = NS.n.Zero();
          return this.getDirectionToRef(SS, HS), HS
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(SS, HS) {
          NS.n.TransformNormalToRef(SS, this.getWorldMatrix(), HS)
        }
        static GetConstructorFromName(HS, gS, tS) {
          let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            XS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const xS = qS.e.Construct(HS, gS, tS, {
            interaxial_distance: bS,
            isStereoscopicSideBySide: XS
          });
          return xS || (() => SS._CreateDefaultParsedCamera(gS, tS))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let SS = this.lL().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (SS *= -1), SS
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(LS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, bS.I)("position")], gS = [(0, bS.I)("upVector")], IS = [(0, bS.M)()], GS = [(0, bS.M)()], CS = [(0, bS.M)()], nS = [(0, bS.M)()], PS = [(0, bS.M)()], QS = [(0, bS.M)()], DS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.M)()], ZS = [(0, bS.M)()], JS = [(0, bS.M)()], OS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], (0, tS.j)(SS, null, IS, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: SS => "orthoLeft" in SS,
            get: SS => SS.orthoLeft
          },
          metadata: XS
        }, null, YS), (0, tS.j)(SS, null, GS, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: SS => "orthoRight" in SS,
            get: SS => SS.orthoRight
          },
          metadata: XS
        }, null, YS), (0, tS.j)(SS, null, CS, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: SS => "orthoBottom" in SS,
            get: SS => SS.orthoBottom
          },
          metadata: XS
        }, null, YS), (0, tS.j)(SS, null, nS, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: SS => "orthoTop" in SS,
            get: SS => SS.orthoTop
          },
          metadata: XS
        }, null, YS), (0, tS.j)(SS, null, hS, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: SS => "inertia" in SS,
            get: SS => SS.inertia
          },
          metadata: XS
        }, null, YS), (0, tS.j)(SS, null, ZS, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: SS => "mode" in SS,
            get: SS => SS.mode
          },
          metadata: XS
        }, null, YS), (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: SS => "_position" in SS,
            get: SS => SS._position,
            set: (SS, HS) => {
              SS._position = HS
            }
          },
          metadata: XS
        }, AS, yS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: SS => "_upVector" in SS,
            get: SS => SS._upVector,
            set: (SS, HS) => {
              SS._upVector = HS
            }
          },
          metadata: XS
        }, VS, iS), (0, tS.j)(null, null, PS, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: SS => "fov" in SS,
            get: SS => SS.fov,
            set: (SS, HS) => {
              SS.fov = HS
            }
          },
          metadata: XS
        }, WS, zS), (0, tS.j)(null, null, QS, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: SS => "projectionPlaneTilt" in SS,
            get: SS => SS.projectionPlaneTilt,
            set: (SS, HS) => {
              SS.projectionPlaneTilt = HS
            }
          },
          metadata: XS
        }, US, pS), (0, tS.j)(null, null, DS, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "minZ" in SS,
            get: SS => SS.minZ,
            set: (SS, HS) => {
              SS.minZ = HS
            }
          },
          metadata: XS
        }, sS, BS), (0, tS.j)(null, null, wS, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "maxZ" in SS,
            get: SS => SS.maxZ,
            set: (SS, HS) => {
              SS.maxZ = HS
            }
          },
          metadata: XS
        }, MS, FS), (0, tS.j)(null, null, JS, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: SS => "layerMask" in SS,
            get: SS => SS.layerMask,
            set: (SS, HS) => {
              SS.layerMask = HS
            }
          },
          metadata: XS
        }, RS, TS), (0, tS.j)(null, null, OS, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "fovMode" in SS,
            get: SS => SS.fovMode,
            set: (SS, HS) => {
              SS.fovMode = HS
            }
          },
          metadata: XS
        }, oS, lS), (0, tS.j)(null, null, dS, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "cameraRigMode" in SS,
            get: SS => SS.cameraRigMode,
            set: (SS, HS) => {
              SS.cameraRigMode = HS
            }
          },
          metadata: XS
        }, mS, eS), (0, tS.j)(null, null, cS, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: SS => "interaxialDistance" in SS,
            get: SS => SS.interaxialDistance,
            set: (SS, HS) => {
              SS.interaxialDistance = HS
            }
          },
          metadata: XS
        }, rS, SH), (0, tS.j)(null, null, vS, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: SS => "isStereoscopicSideBySide" in SS,
            get: SS => SS.isStereoscopicSideBySide,
            set: (SS, HS) => {
              SS.isStereoscopicSideBySide = HS
            }
          },
          metadata: XS
        }, HH, gH), (0, tS.j)(null, null, ES, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "ignoreCameraMaxZ" in SS,
            get: SS => SS.ignoreCameraMaxZ,
            set: (SS, HS) => {
              SS.ignoreCameraMaxZ = HS
            }
          },
          metadata: XS
        }, tH, bH), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS._CreateDefaultParsedCamera = (SS, HS) => {
        throw (0, fS.l)("UniversalCamera")
      }, SS.PERSPECTIVE_CAMERA = 0, SS.ORTHOGRAPHIC_CAMERA = 1, SS.FOVMODE_VERTICAL_FIXED = 0, SS.FOVMODE_HORIZONTAL_FIXED = 1, SS.RIG_MODE_NONE = 0, SS.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, SS.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, SS.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, SS.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, SS.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, SS.RIG_MODE_VR = 20, SS.RIG_MODE_CUSTOM = 22, SS.ForceAttachControlToAlwaysPreventDefault = !1, SS
    })();

    function CS(SS, HS) {
      const gS = SS.type,
        tS = GS.GetConstructorFromName(gS, SS.name, HS, SS.interaxial_distance, SS.isStereoscopicSideBySide),
        bS = jS.b.Parse(tS, SS, HS);
      if (void 0 !== SS.parentId && (bS._waitingParentId = SS.parentId), void 0 !== SS.parentInstanceIndex && (bS._waitingParentInstanceIndex = SS.parentInstanceIndex), bS.inputs && (bS.inputs.parse(SS), bS._setupInputs()), SS.upVector && (bS.upVector = NS.n.FromArray(SS.upVector)), bS.setPosition && (bS.position.I5(0, 0, 0), bS.setPosition(NS.n.FromArray(SS.position))), SS.target && bS.setTarget && bS.setTarget(NS.n.FromArray(SS.target)), SS.cameraRigMode) {
        const HS = SS.interaxial_distance ? {
          interaxialDistance: SS.interaxial_distance
        } : {};
        bS.setCameraRigMode(SS.cameraRigMode, HS)
      }
      if (SS.animations) {
        for (let HS = 0; HS < SS.animations.length; HS++) {
          const gS = SS.animations[HS],
            tS = (0, IS.d)("BABYLON.Animation");
          tS && bS.animations.push(tS.Parse(gS))
        }
        qS.e.ParseAnimationRanges(bS, SS, HS)
      }
      return SS.autoAnimate && HS.beginAnimation(bS, SS.autoAnimateFrom, SS.autoAnimateTo, SS.autoAnimateLoop, SS.autoAnimateSpeed || 1), void 0 !== SS.isEnabled && bS.MJ(SS.isEnabled), bS
    }
    let nS = !1;

    function PS() {
      nS || (nS = !0, GS.Parse = CS)
    }
  },
  40271: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS) {
        this._cameraPosition = HS, this._behavior = gS, this.activeInput = !1, this.speed = 1, this.JB = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new tS.n, this.rotationAccumulatedPixels = new tS.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = tS.n.Zero(), this.rotationDeltaCurrentFrame = tS.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new tS.n, this.referenceFrameRate = 60, this._rotationVelocity = new tS.n, this._prevFrameTimeMs = 0, this._scene = SS
      }
      computeCurrentFrameDeltas() {
        const SS = this._scene.AK().getDeltaTime(),
          HS = this._getEffectiveDeltaMs(SS);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.o_(0), this.rotationDeltaCurrentFrame.o_(0), this.zoomDeltaCurrentFrame = 0, void(SS > 0 && (this._prevFrameTimeMs = SS));
        this.panDeltaCurrentFrame.o_(0), this.rotationDeltaCurrentFrame.o_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.I5(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * HS, this.panDeltaCurrentFrame), this._rotationVelocity.I5(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.I5(this._rotationVelocity.x * this.speed * this.rotationXSpeed * HS, this._rotationVelocity.y * this.speed * this.rotationYSpeed * HS, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.JB * this._zoomSpeedMultiplier) * HS, SS > 0 && (this._prevFrameTimeMs = SS), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.o_(0), this.rotationAccumulatedPixels.o_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.o_(0), this.rotationAccumulatedPixels.o_(0)
      }
      resetPanVelocity() {
        this._panVelocity.o_(0), this.panAccumulatedPixels.o_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(SS) {
        const HS = this._scene.AK().getDeltaTime(),
          gS = this._getEffectiveDeltaMs(HS),
          tS = 1e3 / this.referenceFrameRate;
        return Math.pow(SS, gS / tS)
      }
      getFrameIndependentInputScale(SS) {
        const HS = 1 - SS;
        if (HS <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(SS)) / HS
      }
      _getEffectiveDeltaMs(SS) {
        return SS > 0 ? SS : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(SS, HS, gS) {
        let tS = SS;
        const bS = this._scene.AK().getDeltaTime(),
          XS = this._getEffectiveDeltaMs(bS);
        if (0 === XS) return tS;
        const xS = this.getFrameIndependentDecay(gS);
        if (tS *= xS, 0 !== HS || this.activeInput) {
          const SS = 1 - gS;
          tS += HS / XS * (SS > 0 ? (1 - xS) / SS : 1)
        } else Math.abs(tS) < 1e-6 && (tS = 0);
        return tS
      }
    }
  },
  40274: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor(SS, HS) {
        this.inputMap = [], this.handlers = SS, this._createDefaultEntries = HS, this.resetInputMap()
      }
      resolveInteraction(SS, HS) {
        for (const gS of this.inputMap)
          if (gS.source === SS && this._entryMatches(gS, HS)) return gS;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(SS, HS, gS) {
        const tS = this.inputMap;
        for (let bS = 0; bS < tS.length; bS++) {
          const XS = tS[bS];
          if (XS.source === SS && XS.interaction === HS && this._entryConditionsMatch(XS, gS)) return XS
        }
      }
      getEntries(SS, HS, gS) {
        const tS = [],
          bS = this.inputMap;
        for (let XS = 0; XS < bS.length; XS++) {
          const xS = bS[XS];
          xS.source === SS && xS.interaction === HS && this._entryConditionsMatch(xS, gS) && tS.push(xS)
        }
        return tS
      }
      addEntry(SS) {
        const HS = this._entrySpecificity(SS);
        let gS = this.inputMap.length;
        for (let tS = 0; tS < this.inputMap.length; tS++)
          if (this._entrySpecificity(this.inputMap[tS]) < HS) {
            gS = tS;
            break
          } this.inputMap.splice(gS, 0, SS)
      }
      setInteraction(SS, HS, gS) {
        const tS = this.resolveInteraction(SS, HS);
        return tS && this._entryCoversAllConditionsOf(tS, HS) ? (tS.interaction = gS, !0) : (this.addEntry({
          source: SS,
          ...HS ?? {},
          interaction: gS
        }), !0)
      }
      _entryCoversAllConditionsOf(SS, HS) {
        if (!HS) return !0;
        const gS = SS;
        for (const tS of Object.keys(HS)) {
          const SS = HS[tS];
          if (void 0 !== SS)
            if ("modifiers" === tS) {
              const HS = gS.modifiers ?? {};
              for (const gS of Object.keys(SS))
                if (void 0 !== SS[gS] && void 0 === HS[gS]) return !1
            } else if (void 0 === gS[tS]) return !1
        }
        return !0
      }
      setInteractions(SS, HS, gS) {
        let tS = 0;
        const bS = this.inputMap;
        for (let XS = 0; XS < bS.length; XS++) {
          const xS = bS[XS];
          xS.source === SS && this._entryMatches(xS, HS) && (xS.interaction = gS, tS++)
        }
        return tS
      }
      _entryMatches(SS, HS) {
        switch (SS.source) {
          case "pointer":
            return (void 0 === SS.button || SS.button === HS?.button) && this._matchModifiers(SS.modifiers, HS?.modifiers);
          case "wheel":
            return this._matchModifiers(SS.modifiers, HS?.modifiers);
          case "touch":
            return void 0 === SS.touchCount || SS.touchCount === HS?.touchCount;
          case "keyboard":
            return (void 0 === SS.key || (Array.isArray(SS.key) ? -1 !== SS.key.indexOf(HS?.key ?? -1) : SS.key === HS?.key)) && this._matchModifiers(SS.modifiers, HS?.modifiers)
        }
      }
      _entryConditionsMatch(SS, HS) {
        if (!HS) return !0;
        switch (SS.source) {
          case "pointer":
            return (!("button" in HS) || SS.button === HS.button) && (!("modifiers" in HS) || this._entryModifiersMatch(SS.modifiers, HS.modifiers));
          case "wheel":
            return !("modifiers" in HS) || this._entryModifiersMatch(SS.modifiers, HS.modifiers);
          case "touch":
            return !("touchCount" in HS) || SS.touchCount === HS.touchCount;
          case "keyboard":
            if ("key" in HS) {
              if (void 0 === SS.key) return void 0 === HS.key;
              if (void 0 === HS.key || (Array.isArray(SS.key) ? -1 === SS.key.indexOf(HS.key) : SS.key !== HS.key)) return !1
            }
            return !("modifiers" in HS) || this._entryModifiersMatch(SS.modifiers, HS.modifiers)
        }
      }
      _entrySpecificity(SS) {
        let HS = 0;
        return "button" in SS && void 0 !== SS.button && HS++, "key" in SS && void 0 !== SS.key && HS++, "touchCount" in SS && void 0 !== SS.touchCount && HS++, "modifiers" in SS && SS.modifiers && HS++, HS
      }
      _matchModifiers(SS, HS) {
        return !SS || (void 0 === SS.ctrl || SS.ctrl === (HS?.ctrl ?? !1)) && ((void 0 === SS.shift || SS.shift === (HS?.shift ?? !1)) && (void 0 === SS.alt || SS.alt === (HS?.alt ?? !1)))
      }
      _entryModifiersMatch(SS, HS) {
        if (!HS) return !SS;
        return void 0 !== HS.ctrl || void 0 !== HS.shift || void 0 !== HS.alt ? (void 0 === HS.ctrl || SS?.ctrl === HS.ctrl) && ((void 0 === HS.shift || SS?.shift === HS.shift) && (void 0 === HS.alt || SS?.alt === HS.alt)) : !SS || void 0 === SS.ctrl && void 0 === SS.shift && void 0 === SS.alt
      }
    }
  },
  40242: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => CS,
      h: () => jS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(40248),
      xS = gS(37117),
      NS = gS(37123),
      qS = gS(40264),
      uS = gS(40256),
      IS = gS(40271),
      fS = gS(40274);
    class kS extends IS.b {
      constructor(SS, HS, gS) {
        super(SS, HS, gS), this.input = new fS.c({
          translate: (SS, HS, gS) => {
            this.panAccumulatedPixels.x += SS, this.panAccumulatedPixels.y += HS, this.panAccumulatedPixels.z += gS
          },
          rotate: (SS, HS) => {
            this.rotationAccumulatedPixels.x += SS, this.rotationAccumulatedPixels.y += HS
          }
        }, (() => this._createDefaultInputMap()))
      }
      _createDefaultInputMap() {
        return [{
          source: "pointer",
          interaction: "rotate"
        }, {
          source: "keyboard",
          interaction: "translate"
        }, {
          source: "keyboard",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "translate"
        }]
      }
    }
    const aS = xS.e.Zero(),
      KS = xS.i.Identity();
    let jS = (() => {
        var SS;
        let HS, gS, uS, IS, fS = XS.b,
          jS = [],
          GS = [],
          CS = [],
          nS = [],
          PS = [],
          QS = [],
          DS = [],
          wS = [];
        return SS = class extends fS {
          get inertia() {
            return this._targetInertia
          }
          set inertia(SS) {
            this._targetInertia = SS, this.movement && (this.movement.panInertia = SS, this.movement.rotationInertia = SS)
          }
          constructor(SS, HS, gS) {
            super(SS, HS, gS, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new xS.n(0, 0, 0), this.cameraRotation = new xS.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, tS.k)(this, jS, !1), this.rotation = ((0, tS.k)(this, GS), (0, tS.k)(this, CS, void 0)), this.rotationQuaternion = (0, tS.k)(this, nS), this.speed = (0, tS.k)(this, PS, 2), this.noRotationConstraint = ((0, tS.k)(this, QS), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = NS.d, this._rotationEpsilon = NS.d, this.lockedTarget = (0, tS.k)(this, DS, null), this._currentTarget = ((0, tS.k)(this, wS), xS.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = xS.e.Zero(), this._cameraTransformMatrix = xS.e.Zero(), this._cameraRotationMatrix = xS.e.Zero(), this._transformedReferencePoint = xS.n.Zero(), this._deferredPositionUpdate = new xS.n, this._deferredRotationQuaternionUpdate = new xS.i, this._deferredRotationUpdate = new xS.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = xS.n.Forward(this.lL().useRightHandedSystem), this.rotation = new xS.n(0, this.lL().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new kS(this.lL(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(SS) {
            this.getWorldMatrix();
            const HS = xS.l.VK[0],
              gS = xS.l.VK[1];
            return gS.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(gS, HS), HS.scaleInPlace(SS), this.globalPosition.add(HS)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const SS = this.lockedTarget;
              SS.computeWorldMatrix().getTranslationToRef(SS.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.I5(0, 0, 0), this.cameraRotation.I5(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new xS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new xS.i(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(SS) {
            SS || super._updateCache();
            const HS = this._getLockedTargetPosition();
            HS ? this._cache.lockedTarget ? this._cache.lockedTarget.dJ(HS) : this._cache.lockedTarget = HS.clone() : this._cache.lockedTarget = null, this._cache.rotation.dJ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.dJ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const SS = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(SS) : !SS) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const SS = this.AK();
            return this.speed * Math.sqrt(SS.getDeltaTime() / (100 * SS.getFps()))
          }
          setTarget(SS) {
            this.upVector.normalize(), this._initialFocalDistance = SS.subtract(this.position).length(), this.position.z === SS.z && (this.position.z += NS.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.lL().useRightHandedSystem ? xS.e.LookAtRHToRef(this.position, SS, xS.n.UpReadOnly, aS) : xS.e.LookAtLHToRef(this.position, SS, xS.n.UpReadOnly, aS), aS.invert();
            const HS = this.rotationQuaternion || KS;
            xS.i.FromRotationMatrixToRef(aS, HS), HS.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(SS) {
            this.setTarget(SS)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(xS.l.Matrix[0]), xS.n.TransformNormalToRef(this.cameraDirection, xS.l.Matrix[0], xS.l.VK[0]), this._deferredPositionUpdate.addInPlace(xS.l.VK[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.dJ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.dJ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const SS = this.movement,
              HS = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            SS.panAccumulatedPixels.addInPlace(this.cameraDirection), SS.rotationAccumulatedPixels.x += this.cameraRotation.x, SS.rotationAccumulatedPixels.y += this.cameraRotation.y, SS.computeCurrentFrameDeltas(), this.cameraDirection.dJ(SS.panDeltaCurrentFrame), this.cameraRotation.set(SS.rotationDeltaCurrentFrame.x, SS.rotationDeltaCurrentFrame.y);
            const gS = this.speed * this._panningEpsilon;
            !HS && Math.abs(this.cameraDirection.x) < gS && Math.abs(this.cameraDirection.y) < gS && Math.abs(this.cameraDirection.z) < gS && (this.cameraDirection.o_(0), SS.resetPanVelocity());
            const tS = this.invertRotation ? -this.inverseRotationSpeed : 1,
              bS = this._decideIfNeedsToMove(),
              XS = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.dJ(this.rotation), this._deferredPositionUpdate.dJ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.dJ(this.rotationQuaternion), bS && this._updatePosition(), XS) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * tS, this._deferredRotationUpdate.y += this.cameraRotation.y * tS, !this.noRotationConstraint) {
                const SS = 1.570796;
                this._deferredRotationUpdate.x > SS && (this._deferredRotationUpdate.x = SS), this._deferredRotationUpdate.x < -SS && (this._deferredRotationUpdate.x = -SS)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.dJ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (xS.i.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.dJ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.o_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : xS.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return xS.n.TransformNormalToRef(xS.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), xS.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? qS.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (xS.i.FromEulerVectorToRef(this.rotation, KS), qS.b.Y.rotateByQuaternionToRef(KS, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(SS, HS, gS) {
            if (this.lL().useRightHandedSystem ? xS.e.LookAtRHToRef(SS, HS, gS, this._viewMatrix) : xS.e.LookAtLHToRef(SS, HS, gS, this._viewMatrix), this.parent) {
              const SS = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(SS, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(HS, gS) {
            if (this.cameraRigMode !== XS.b.RIG_MODE_NONE) {
              const gS = new SS(HS, this.position.clone(), this.lL());
              return gS.isRigCamera = !0, gS.rigParent = this, this.cameraRigMode === XS.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new xS.i), gS._cameraRigParams = {}, gS.rotationQuaternion = new xS.i), gS.mode = this.mode, gS.orthoLeft = this.orthoLeft, gS.orthoRight = this.orthoRight, gS.orthoTop = this.orthoTop, gS.orthoBottom = this.orthoBottom, gS
            }
            return null
          }
          _updateRigCameras() {
            const SS = this._rigCameras[0],
              HS = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case XS.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case XS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case XS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case XS.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case XS.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const gS = this.cameraRigMode === XS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  tS = this.cameraRigMode === XS.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * gS, SS), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * tS, HS);
                break
              }
              case XS.b.RIG_MODE_VR:
                SS.rotationQuaternion && HS.rotationQuaternion && this.rotationQuaternion ? (SS.rotationQuaternion.dJ(this.rotationQuaternion), HS.rotationQuaternion.dJ(this.rotationQuaternion)) : (SS.rotation.dJ(this.rotation), HS.rotation.dJ(this.rotation)), SS.position.dJ(this.position), HS.position.dJ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(HS, gS) {
            this.getTarget().subtractToRef(this.position, SS._TargetFocalPoint), SS._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const tS = SS._TargetFocalPoint.addInPlace(this.position);
            xS.e.TranslationToRef(-tS.x, -tS.y, -tS.z, SS._TargetTransformMatrix), SS._TargetTransformMatrix.multiplyToRef(xS.e.RotationAxis(gS.upVector, HS), SS._RigCamTransformMatrix), xS.e.TranslationToRef(tS.x, tS.y, tS.z, SS._TargetTransformMatrix), SS._RigCamTransformMatrix.multiplyToRef(SS._TargetTransformMatrix, SS._RigCamTransformMatrix), xS.n.TransformCoordinatesToRef(this.position, SS._RigCamTransformMatrix, gS.position), gS.setTarget(tS)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(fS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.I)()], uS = [(0, bS.M)()], IS = [(0, bS.t)("lockedTargetId")], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: SS => "updateUpVectorFromRotation" in SS,
              get: SS => SS.updateUpVectorFromRotation,
              set: (SS, HS) => {
                SS.updateUpVectorFromRotation = HS
              }
            },
            metadata: XS
          }, jS, GS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: SS => "rotation" in SS,
              get: SS => SS.rotation,
              set: (SS, HS) => {
                SS.rotation = HS
              }
            },
            metadata: XS
          }, CS, nS), (0, tS.j)(null, null, uS, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: SS => "speed" in SS,
              get: SS => SS.speed,
              set: (SS, HS) => {
                SS.speed = HS
              }
            },
            metadata: XS
          }, PS, QS), (0, tS.j)(null, null, IS, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: SS => "lockedTarget" in SS,
              get: SS => SS.lockedTarget,
              set: (SS, HS) => {
                SS.lockedTarget = HS
              }
            },
            metadata: XS
          }, DS, wS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS._RigCamTransformMatrix = new xS.e, SS._TargetTransformMatrix = new xS.e, SS._TargetFocalPoint = new xS.n, SS
      })(),
      GS = !1;

    function CS() {
      GS || (GS = !0, uS.e.AddNodeConstructor("TargetCamera", ((SS, HS) => () => new jS(SS, xS.n.Zero(), HS))))
    }
  },
  39995: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(39939);
    let bS = !1;

    function XS() {
      bS || (bS = !0, tS.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, tS.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, tS.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, tS.b.prototype.getAspectRatio = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = SS.viewport;
        return this.getRenderWidth(HS) * gS.width / (this.getRenderHeight(HS) * gS.height)
      }, tS.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, tS.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40082: (SS, HS, gS) => {
    var tS = gS(39939),
      bS = gS(40087);
    let XS = !1;
    XS || (XS = !0, (0, bS.v)(), tS.b.prototype._loadFileAsync = async function(SS, HS, gS) {
      return await new Promise(((tS, bS) => {
        this._loadFile(SS, (SS => {
          tS(SS)
        }), void 0, HS, gS, ((SS, HS) => {
          bS(HS)
        }))
      }))
    })
  },
  40079: (SS, HS, gS) => {
    (0, gS(39998).b)()
  },
  39998: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(39939);
    let bS = !1;

    function XS() {
      bS || (bS = !0, tS.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, tS.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, tS.b.prototype.createRenderPassId = function(SS) {
        const HS = ++tS.b._RenderPassIdCounter;
        return this._renderPassNames[HS] = SS ?? "NONAME", HS
      }, tS.b.prototype.releaseRenderPassId = function(SS) {
        this._renderPassNames[SS] = void 0;
        for (let HS = 0; HS < this.scenes.length; ++HS) {
          const gS = this.scenes[HS];
          for (let HS = 0; HS < gS.meshes.length; ++HS) {
            const tS = gS.meshes[HS];
            if (tS._releaseRenderPassId(SS), tS.dD)
              for (let HS = 0; HS < tS.dD.length; ++HS) {
                tS.dD[HS]._removeDrawWrapper(SS)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(SS)
      })
    }
  },
  40119: (SS, HS, gS) => {
    var tS = gS(40125),
      bS = gS(39939);
    let XS = !1;
    XS || (XS = !0, bS.b.GetCompatibleTextureLoader = tS.e)
  },
  40007: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(39888);
    let bS = !1;

    function XS() {
      bS || (bS = !0, tS.ThinEngine.prototype.setAlphaMode = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[gS] === SS) {
          if (!HS) {
            const HS = 0 === SS;
            this.depthCullingState.depthMask !== HS && (this.depthCullingState.depthMask = HS)
          }
          return
        }
        const tS = 0 === SS;
        this._alphaState.setAlphaBlend(!tS, gS), this._alphaState.setAlphaMode(SS, gS), HS || (this.depthCullingState.depthMask = tS), this._alphaMode[gS] = SS
      })
    }
  },
  40019: (SS, HS, gS) => {
    var tS = gS(39877),
      bS = gS(38687),
      XS = gS(39888),
      xS = gS(40023),
      NS = gS(39978);
    class qS extends xS.c {
      setDepthStencilTexture(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(SS, HS), !SS) return;
        const gS = this._engine,
          tS = this._context,
          bS = SS._hardwareTexture;
        if (bS && SS._autoMSAAManagement && this._MSAAFramebuffer) {
          const HS = gS._currentFramebuffer;
          gS._bindUnboundFramebuffer(this._MSAAFramebuffer), tS.framebufferRenderbuffer(tS.FRAMEBUFFER, (0, NS.b)(SS.format) ? tS.DEPTH_STENCIL_ATTACHMENT : tS.DEPTH_ATTACHMENT, tS.RENDERBUFFER, bS.getMSAARenderBuffer()), gS._bindUnboundFramebuffer(HS)
        }
      }
      constructor(SS, HS, gS, tS, bS) {
        super(SS, HS, gS, tS), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = bS
      }
      _cloneRenderTargetWrapper() {
        let SS;
        return this._colorTextureArray && this._depthStencilTextureArray ? (SS = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), SS.texture.isReady = !0) : SS = super._cloneRenderTargetWrapper(), SS
      }
      _swapRenderTargetWrapper(SS) {
        super._swapRenderTargetWrapper(SS), SS._framebuffer = this._framebuffer, SS._depthStencilBuffer = this._depthStencilBuffer, SS._MSAAFramebuffer = this._MSAAFramebuffer, SS._colorTextureArray = this._colorTextureArray, SS._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const SS = this._engine,
            HS = SS._currentFramebuffer,
            gS = this._context;
          SS._bindUnboundFramebuffer(this._framebuffer), gS.framebufferRenderbuffer(gS.FRAMEBUFFER, gS.DEPTH_STENCIL_ATTACHMENT, gS.RENDERBUFFER, null), gS.framebufferRenderbuffer(gS.FRAMEBUFFER, gS.DEPTH_ATTACHMENT, gS.RENDERBUFFER, null), gS.framebufferRenderbuffer(gS.FRAMEBUFFER, gS.STENCIL_ATTACHMENT, gS.RENDERBUFFER, null), SS._bindUnboundFramebuffer(HS), gS.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(SS, HS, gS, tS, bS, XS)
      }
      shareDepth(SS) {
        super.shareDepth(SS);
        const HS = this._context,
          gS = this._depthStencilBuffer,
          tS = SS._MSAAFramebuffer || SS._framebuffer,
          bS = this._engine;
        SS._depthStencilBuffer && SS._depthStencilBuffer !== gS && HS.deleteRenderbuffer(SS._depthStencilBuffer), SS._depthStencilBuffer = gS;
        const XS = SS._generateStencilBuffer ? HS.DEPTH_STENCIL_ATTACHMENT : HS.DEPTH_ATTACHMENT;
        bS._bindUnboundFramebuffer(tS), HS.framebufferRenderbuffer(HS.FRAMEBUFFER, XS, HS.RENDERBUFFER, gS), bS._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const bS = SS._hardwareTexture;
        if (!bS) return;
        const XS = this._framebuffer,
          xS = this._engine,
          NS = xS._currentFramebuffer;
        let qS;
        if (xS._bindUnboundFramebuffer(XS), xS.uj > 1) {
          const XS = this._context;
          qS = XS["COLOR_ATTACHMENT" + HS], SS.is2DArray || SS.is3D ? (gS = gS ?? this.layerIndices?.[HS] ?? 0, XS.framebufferTextureLayer(XS.FRAMEBUFFER, qS, bS.underlyingResource, tS, gS)) : SS.isCube ? (gS = gS ?? this.faceIndices?.[HS] ?? 0, XS.framebufferTexture2D(XS.FRAMEBUFFER, qS, XS.TEXTURE_CUBE_MAP_POSITIVE_X + gS, bS.underlyingResource, tS)) : XS.framebufferTexture2D(XS.FRAMEBUFFER, qS, XS.TEXTURE_2D, bS.underlyingResource, tS)
        } else {
          const SS = this._context;
          qS = SS["COLOR_ATTACHMENT" + HS + "_WEBGL"];
          const XS = void 0 !== gS ? SS.TEXTURE_CUBE_MAP_POSITIVE_X + gS : SS.TEXTURE_2D;
          SS.framebufferTexture2D(SS.FRAMEBUFFER, qS, XS, bS.underlyingResource, tS)
        }
        if (SS._autoMSAAManagement && this._MSAAFramebuffer) {
          const SS = this._context;
          xS._bindUnboundFramebuffer(this._MSAAFramebuffer), SS.framebufferRenderbuffer(SS.FRAMEBUFFER, qS, SS.RENDERBUFFER, bS.getMSAARenderBuffer())
        }
        xS._bindUnboundFramebuffer(NS)
      }
      setTexture(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(SS, HS, gS), this._bindTextureRenderTarget(SS, HS)
      }
      setLayerAndFaceIndices(SS, HS) {
        if (super.setLayerAndFaceIndices(SS, HS), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const gS = this._attachments?.length ?? this.textures.length;
        for (let tS = 0; tS < gS; tS++) {
          const SS = this.textures[tS];
          SS && (SS.is2DArray || SS.is3D ? this._bindTextureRenderTarget(SS, tS, this.layerIndices[tS]) : SS.isCube ? this._bindTextureRenderTarget(SS, tS, this.faceIndices[tS]) : this._bindTextureRenderTarget(SS, tS))
        }
      }
      setLayerAndFaceIndex() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(SS, HS, gS), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const tS = this.textures[SS];
        tS.is2DArray || tS.is3D ? this._bindTextureRenderTarget(this.textures[SS], SS, this.layerIndices[SS]) : tS.isCube && this._bindTextureRenderTarget(this.textures[SS], SS, this.faceIndices[SS])
      }
      resolveMSAATextures() {
        const SS = this._engine,
          HS = SS._currentFramebuffer;
        SS._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), SS._bindUnboundFramebuffer(HS)
      }
      dispose() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const HS = this._context;
        SS || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (HS.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (HS.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (HS.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(SS)
      }
    }
    let uS = !1;
    uS || (uS = !0, XS.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(SS, HS, gS) {
      const tS = new qS(SS, HS, gS, this, this._gl);
      return this._renderTargetWrapperCache.push(tS), tS
    }, XS.ThinEngine.prototype.createRenderTargetTexture = function(SS, HS) {
      const gS = this._createHardwareRenderTargetWrapper(!1, !1, SS);
      let tS, bS, XS = !0,
        xS = !1,
        NS = !1,
        qS = 1;
      void 0 !== HS && "object" === typeof HS && (XS = HS.generateDepthBuffer ?? !0, xS = !!HS.generateStencilBuffer, NS = !!HS.noColorAttachment, tS = HS.colorAttachment, qS = HS.samples ?? 1, bS = HS.label);
      const uS = tS || (NS ? null : this._createInternalTexture(SS, HS, !0, 5)),
        IS = SS.width || SS,
        fS = SS.height || SS,
        kS = this._currentFramebuffer,
        aS = this._gl,
        KS = aS.createFramebuffer();
      if (this._bindUnboundFramebuffer(KS), gS._depthStencilBuffer = this._setupFramebufferDepthAttachments(xS, XS, IS, fS), !uS || uS.is2DArray || uS.is3D || aS.framebufferTexture2D(aS.FRAMEBUFFER, aS.COLOR_ATTACHMENT0, aS.TEXTURE_2D, uS._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(kS), gS.label = bS ?? "RenderTargetWrapper", gS._framebuffer = KS, gS._generateDepthBuffer = XS, gS._generateStencilBuffer = xS, gS.setTextures(uS), tS) {
        if (gS._samples = tS.samples, tS.samples > 1) {
          const SS = tS._hardwareTexture.getMSAARenderBuffer(0);
          gS._MSAAFramebuffer = aS.createFramebuffer(), this._bindUnboundFramebuffer(gS._MSAAFramebuffer), aS.framebufferRenderbuffer(aS.FRAMEBUFFER, aS.COLOR_ATTACHMENT0, aS.RENDERBUFFER, SS), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(gS, qS);
      return gS
    }, XS.ThinEngine.prototype._createDepthStencilTexture = function(SS, HS, gS) {
      const XS = this._gl,
        xS = SS.layers || 0,
        qS = SS.depth || 0;
      let uS = XS.TEXTURE_2D;
      0 !== xS ? uS = XS.TEXTURE_2D_ARRAY : 0 !== qS && (uS = XS.TEXTURE_3D);
      const IS = new tS.e(this, 12);
      if (IS.label = HS.label, !this._caps.depthTextureExtension) return bS.b.Error("Depth texture is not supported by your browser or hardware."), IS;
      const fS = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...HS
      };
      if (this._bindTextureDirectly(uS, IS, !0), this._setupDepthStencilTexture(IS, SS, 0 !== fS.comparisonFunction && fS.bilinearFiltering, fS.comparisonFunction, fS.samples), void 0 !== fS.depthTextureFormat) {
        if (15 !== fS.depthTextureFormat && 16 !== fS.depthTextureFormat && 17 !== fS.depthTextureFormat && 13 !== fS.depthTextureFormat && 14 !== fS.depthTextureFormat && 18 !== fS.depthTextureFormat) return bS.b.Error(`Depth texture ${fS.depthTextureFormat} format is not supported.`), IS;
        IS.format = fS.depthTextureFormat
      } else IS.format = fS.generateStencil ? 13 : 16;
      const kS = (0, NS.b)(IS.format),
        aS = this._getWebGLTextureTypeFromDepthTextureFormat(IS.format),
        KS = kS ? XS.DEPTH_STENCIL : XS.DEPTH_COMPONENT,
        jS = this._getInternalFormatFromDepthTextureFormat(IS.format, !0, kS);
      return IS.is2DArray ? XS.texImage3D(uS, 0, jS, IS.width, IS.height, xS, 0, KS, aS, null) : IS.is3D ? XS.texImage3D(uS, 0, jS, IS.width, IS.height, qS, 0, KS, aS, null) : XS.texImage2D(uS, 0, jS, IS.width, IS.height, 0, KS, aS, null), this._bindTextureDirectly(uS, null), this._internalTexturesCache.push(IS), gS._depthStencilBuffer && (XS.deleteRenderbuffer(gS._depthStencilBuffer), gS._depthStencilBuffer = null), this._bindUnboundFramebuffer(gS._MSAAFramebuffer ?? gS._framebuffer), gS._generateStencilBuffer = kS, gS._depthStencilTextureWithStencil = kS, gS._depthStencilBuffer = this._setupFramebufferDepthAttachments(gS._generateStencilBuffer, gS._generateDepthBuffer, gS.width, gS.height, gS.samples, IS.format), this._bindUnboundFramebuffer(null), IS
    }, XS.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(SS, HS) {
      if (this.uj < 2 || !SS) return 1;
      if (SS.samples === HS) return HS;
      const gS = this._gl;
      HS = Math.min(HS, this.getCaps().maxMSAASamples), SS._depthStencilBuffer && (gS.deleteRenderbuffer(SS._depthStencilBuffer), SS._depthStencilBuffer = null), SS._MSAAFramebuffer && (gS.deleteFramebuffer(SS._MSAAFramebuffer), SS._MSAAFramebuffer = null);
      const tS = SS.texture?._hardwareTexture;
      if (tS?.releaseMSAARenderBuffers(), SS.texture && HS > 1 && "function" === typeof gS.renderbufferStorageMultisample) {
        const bS = gS.createFramebuffer();
        if (!bS) throw new Error("Unable to create multi sampled framebuffer");
        SS._MSAAFramebuffer = bS, this._bindUnboundFramebuffer(SS._MSAAFramebuffer);
        const XS = this._createRenderBuffer(SS.texture.width, SS.texture.height, HS, -1, this._getRGBABufferInternalSizedFormat(SS.texture.type, SS.texture.format, SS.texture._useSRGBBuffer), gS.COLOR_ATTACHMENT0, !1);
        if (!XS) throw new Error("Unable to create multi sampled framebuffer");
        tS?.addMSAARenderBuffer(XS)
      }
      this._bindUnboundFramebuffer(SS._MSAAFramebuffer ?? SS._framebuffer), SS.texture && (SS.texture.samples = HS), SS._samples = HS;
      const bS = SS._depthStencilTexture ? SS._depthStencilTexture.format : void 0;
      return SS._depthStencilBuffer = this._setupFramebufferDepthAttachments(SS._generateStencilBuffer, SS._generateDepthBuffer, SS.width, SS.height, HS, bS), this._bindUnboundFramebuffer(null), HS
    }, XS.ThinEngine.prototype._setupDepthStencilTexture = function(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const XS = HS.width ?? HS,
        xS = HS.height ?? HS,
        NS = HS.layers || 0,
        qS = HS.depth || 0;
      SS.baseWidth = XS, SS.baseHeight = xS, SS.width = XS, SS.height = xS, SS.is2DArray = NS > 0, SS.depth = NS || qS, SS.isReady = !0, SS.samples = bS, SS.generateMipMaps = !1, SS.samplingMode = gS ? 2 : 1, SS.type = 0, SS._comparisonFunction = tS;
      const uS = this._gl,
        IS = this._getTextureTarget(SS),
        fS = this._getSamplingParameters(SS.samplingMode, !1);
      uS.texParameteri(IS, uS.TEXTURE_MAG_FILTER, fS.mag), uS.texParameteri(IS, uS.TEXTURE_MIN_FILTER, fS.min), uS.texParameteri(IS, uS.TEXTURE_WRAP_S, uS.CLAMP_TO_EDGE), uS.texParameteri(IS, uS.TEXTURE_WRAP_T, uS.CLAMP_TO_EDGE), this.uj > 1 && (0 === tS ? (uS.texParameteri(IS, uS.TEXTURE_COMPARE_FUNC, 515), uS.texParameteri(IS, uS.TEXTURE_COMPARE_MODE, uS.NONE)) : (uS.texParameteri(IS, uS.TEXTURE_COMPARE_FUNC, tS), uS.texParameteri(IS, uS.TEXTURE_COMPARE_MODE, uS.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39867: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS.c
    });
    var tS = gS(39872);
    (0, gS(40007).c)();
    var bS = gS(39888);
    let XS = !1;
    ! function() {
      if (XS) return;
      XS = !0;
      const SS = new WeakMap,
        HS = new WeakMap,
        gS = new WeakMap,
        tS = new WeakMap;
      bS.ThinEngine.prototype.getAlphaToCoverage = function() {
        return SS.get(this) ?? !1
      }, bS.ThinEngine.prototype.setAlphaToCoverage = function(gS) {
        (SS.get(this) !== gS || this._gl && HS.get(this) !== this._gl) && (SS.set(this, gS), this._gl && (gS ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), HS.set(this, this._gl)))
      }, Object.defineProperty(bS.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (tS.get(this) !== this._gl && (gS.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), tS.set(this, this._gl)), gS.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var xS = gS(39877),
      NS = gS(38687),
      qS = gS(39968);
    let uS = !1;
    ! function() {
      function SS(SS, HS, gS, tS) {
        let bS, XS = 1;
        1 === tS ? bS = new Float32Array(HS * gS * 4) : 2 === tS ? (bS = new Uint16Array(HS * gS * 4), XS = 15360) : bS = 7 === tS ? new Uint32Array(HS * gS * 4) : new Uint8Array(HS * gS * 4);
        for (let xS = 0; xS < HS; xS++)
          for (let tS = 0; tS < gS; tS++) {
            const gS = 3 * (tS * HS + xS),
              NS = 4 * (tS * HS + xS);
            bS[NS + 0] = SS[gS + 0], bS[NS + 1] = SS[gS + 1], bS[NS + 2] = SS[gS + 2], bS[NS + 3] = XS
          }
        return bS
      }

      function HS(SS) {
        return function(HS, gS, tS, bS, XS, NS, qS, uS) {
          let IS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            fS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const kS = SS ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            aS = SS ? 10 : 11,
            KS = new xS.e(this, aS);
          KS.baseWidth = gS, KS.baseHeight = tS, KS.baseDepth = bS, KS.width = gS, KS.height = tS, KS.depth = bS, KS.format = XS, KS.type = fS, KS.generateMipMaps = NS, KS.samplingMode = uS, SS ? KS.is3D = !0 : KS.is2DArray = !0, this._doNotHandleContextLost || (KS._bufferView = HS), SS ? this.updateRawTexture3D(KS, HS, XS, qS, IS, fS) : this.updateRawTexture2DArray(KS, HS, XS, qS, IS, fS), this._bindTextureDirectly(kS, KS, !0);
          const jS = this._getSamplingParameters(uS, NS);
          return this._gl.texParameteri(kS, this._gl.TEXTURE_MAG_FILTER, jS.mag), this._gl.texParameteri(kS, this._gl.TEXTURE_MIN_FILTER, jS.min), NS && this._gl.generateMipmap(kS), this._bindTextureDirectly(kS, null), this._internalTexturesCache.push(KS), KS
        }
      }

      function gS(SS) {
        return function(HS, gS, tS, bS) {
          let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const NS = SS ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qS = this._getWebGLTextureType(xS),
            uS = this._getInternalFormat(tS),
            IS = this._getRGBABufferInternalSizedFormat(xS, tS);
          this._bindTextureDirectly(NS, HS, !0), this._unpackFlipY(void 0 === bS || !!bS), this._doNotHandleContextLost || (HS._bufferView = gS, HS.format = tS, HS.invertY = bS, HS._compression = XS), HS.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), XS && gS ? this._gl.compressedTexImage3D(NS, 0, this.getCaps().s3tc[XS], HS.width, HS.height, HS.depth, 0, gS) : this._gl.texImage3D(NS, 0, IS, HS.width, HS.height, HS.depth, 0, uS, qS, gS), HS.generateMipMaps && this._gl.generateMipmap(NS), this._bindTextureDirectly(NS, null), HS.isReady = !0
        }
      }
      uS || (uS = !0, bS.ThinEngine.prototype.updateRawTexture = function(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!SS) return;
        const NS = this._getRGBABufferInternalSizedFormat(XS, gS, xS),
          qS = this._getInternalFormat(gS),
          uS = this._getWebGLTextureType(XS);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, SS, !0), this._unpackFlipY(void 0 === tS || !!tS), this._doNotHandleContextLost || (SS._bufferView = HS, SS.format = gS, SS.type = XS, SS.invertY = tS, SS._compression = bS), SS.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), bS && HS ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[bS], SS.width, SS.height, 0, HS) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, NS, SS.width, SS.height, 0, qS, uS, HS), SS.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), SS.isReady = !0
      }, bS.ThinEngine.prototype.createRawTexture = function(SS, HS, gS, tS, bS, XS, NS) {
        let qS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          IS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const fS = new xS.e(this, 3);
        fS.baseWidth = HS, fS.baseHeight = gS, fS.width = HS, fS.height = gS, fS.format = tS, fS.generateMipMaps = bS, fS.samplingMode = NS, fS.invertY = XS, fS._compression = qS, fS.type = uS, fS._useSRGBBuffer = this._getUseSRGBBuffer(IS, !bS), this._doNotHandleContextLost || (fS._bufferView = SS), this.updateRawTexture(fS, SS, tS, XS, qS, uS, fS._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, fS, !0);
        const kS = this._getSamplingParameters(NS, bS);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, kS.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, kS.min), bS && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(fS), fS
      }, bS.ThinEngine.prototype.createRawCubeTexture = function(SS, HS, gS, tS, bS, XS, uS) {
        let IS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const fS = this._gl,
          kS = new xS.e(this, 8);
        kS.isCube = !0, kS.format = gS, kS.type = tS, this._doNotHandleContextLost || (kS._bufferViewArray = SS);
        const aS = this._getWebGLTextureType(tS);
        let KS = this._getInternalFormat(gS);
        KS === fS.RGB && (KS = fS.RGBA), aS !== fS.FLOAT || this._caps.textureFloatLinearFiltering ? aS !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? aS !== fS.FLOAT || this._caps.textureFloatRender ? aS !== fS.HALF_FLOAT || this._caps.colorBufferFloat || (bS = !1, NS.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (bS = !1, NS.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (bS = !1, uS = 1, NS.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (bS = !1, uS = 1, NS.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const jS = HS,
          GS = jS;
        kS.width = jS, kS.height = GS, kS.invertY = XS, kS._compression = IS;
        if (!this.needPOTTextures || (0, qS.i)(kS.width) && (0, qS.i)(kS.height) || (bS = !1), SS) this.updateRawCubeTexture(kS, SS, gS, tS, XS, IS);
        else {
          const SS = this._getRGBABufferInternalSizedFormat(tS),
            HS = 0;
          this._bindTextureDirectly(fS.TEXTURE_CUBE_MAP, kS, !0);
          for (let gS = 0; gS < 6; gS++) IS ? fS.compressedTexImage2D(fS.TEXTURE_CUBE_MAP_POSITIVE_X + gS, HS, this.getCaps().s3tc[IS], kS.width, kS.height, 0, void 0) : fS.texImage2D(fS.TEXTURE_CUBE_MAP_POSITIVE_X + gS, HS, SS, kS.width, kS.height, 0, KS, aS, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, kS, !0), SS && bS && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const CS = this._getSamplingParameters(uS, bS);
        return fS.texParameteri(fS.TEXTURE_CUBE_MAP, fS.TEXTURE_MAG_FILTER, CS.mag), fS.texParameteri(fS.TEXTURE_CUBE_MAP, fS.TEXTURE_MIN_FILTER, CS.min), fS.texParameteri(fS.TEXTURE_CUBE_MAP, fS.TEXTURE_WRAP_S, fS.CLAMP_TO_EDGE), fS.texParameteri(fS.TEXTURE_CUBE_MAP, fS.TEXTURE_WRAP_T, fS.CLAMP_TO_EDGE), this._bindTextureDirectly(fS.TEXTURE_CUBE_MAP, null), kS.generateMipMaps = bS, kS.samplingMode = uS, kS.isReady = !0, kS
      }, bS.ThinEngine.prototype.updateRawCubeTexture = function(HS, gS, tS, bS, XS) {
        let xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        HS._bufferViewArray = gS, HS.format = tS, HS.type = bS, HS.invertY = XS, HS._compression = xS;
        const uS = this._gl,
          IS = this._getWebGLTextureType(bS);
        let fS = this._getInternalFormat(tS);
        const kS = this._getRGBABufferInternalSizedFormat(bS);
        let aS = !1;
        fS === uS.RGB && (fS = uS.RGBA, aS = !0), this._bindTextureDirectly(uS.TEXTURE_CUBE_MAP, HS, !0), this._unpackFlipY(void 0 === XS || !!XS), HS.width % 4 !== 0 && uS.pixelStorei(uS.UNPACK_ALIGNMENT, 1);
        for (let qS = 0; qS < 6; qS++) {
          let tS = gS[qS];
          xS ? uS.compressedTexImage2D(uS.TEXTURE_CUBE_MAP_POSITIVE_X + qS, NS, this.getCaps().s3tc[xS], HS.width, HS.height, 0, tS) : (aS && (tS = SS(tS, HS.width, HS.height, bS)), uS.texImage2D(uS.TEXTURE_CUBE_MAP_POSITIVE_X + qS, NS, kS, HS.width, HS.height, 0, fS, IS, tS))
        }(!this.needPOTTextures || (0, qS.i)(HS.width) && (0, qS.i)(HS.height)) && HS.generateMipMaps && 0 === NS && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), HS.isReady = !0
      }, bS.ThinEngine.prototype.createRawCubeTextureFromUrl = function(HS, gS, tS, bS, XS, xS, NS, qS) {
        let uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          IS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          fS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          kS = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const aS = this._gl,
          KS = this.createRawCubeTexture(null, tS, bS, XS, !xS, kS, fS, null);
        gS?.addPendingData(KS), KS.url = HS, KS.isReady = !1, this._internalTexturesCache.push(KS);
        const jS = (SS, HS) => {
            gS?.removePendingData(KS), IS && IS(SS ? SS.status + " " + SS.statusText : "Failed to parse texture data", HS)
          },
          GS = async HS => {
            if (!KS._hardwareTexture) return;
            const tS = NS(HS);
            if (!tS) return;
            const xS = tS instanceof Promise ? await tS : tS,
              IS = KS.width;
            if (qS) {
              const HS = this._getWebGLTextureType(XS);
              let gS = this._getInternalFormat(bS);
              const tS = this._getRGBABufferInternalSizedFormat(XS);
              let NS = !1;
              gS === aS.RGB && (gS = aS.RGBA, NS = !0), this._bindTextureDirectly(aS.TEXTURE_CUBE_MAP, KS, !0), this._unpackFlipY(!1);
              const uS = qS(xS);
              for (let bS = 0; bS < uS.length; bS++) {
                const xS = IS >> bS;
                for (let qS = 0; qS < 6; qS++) {
                  let IS = uS[bS][qS];
                  NS && (IS = SS(IS, xS, xS, XS)), aS.texImage2D(qS, bS, tS, xS, xS, 0, gS, HS, IS)
                }
              }
              this._bindTextureDirectly(aS.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(KS, xS, bS, XS, kS);
            KS.isReady = !0, gS?.removePendingData(KS), KS.onLoadedObservable.notifyObservers(KS), KS.onLoadedObservable.clear(), uS && uS()
          };
        return this._loadFile(HS, (SS => {
          GS(SS).catch((SS => {
            jS(void 0, SS)
          }))
        }), void 0, gS?.offlineProvider, !0, jS), KS
      }, bS.ThinEngine.prototype.createRawTexture2DArray = HS(!1), bS.ThinEngine.prototype.createRawTexture3D = HS(!0), bS.ThinEngine.prototype.updateRawTexture2DArray = gS(!1), bS.ThinEngine.prototype.updateRawTexture3D = gS(!0))
    }();
    var IS = gS(39922);
    let fS = !1;
    fS || (fS = !0, bS.ThinEngine.prototype._readTexturePixelsSync = function(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        uS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const fS = this._gl;
      if (!fS) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const SS = fS.createFramebuffer();
        if (!SS) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = SS
      }
      fS.bindFramebuffer(fS.FRAMEBUFFER, this._dummyFramebuffer), tS > -1 && (SS.is2DArray || SS.is3D) ? fS.framebufferTextureLayer(fS.FRAMEBUFFER, fS.COLOR_ATTACHMENT0, SS._hardwareTexture?.underlyingResource, bS, tS) : tS > -1 ? fS.framebufferTexture2D(fS.FRAMEBUFFER, fS.COLOR_ATTACHMENT0, fS.TEXTURE_CUBE_MAP_POSITIVE_X + tS, SS._hardwareTexture?.underlyingResource, bS) : fS.framebufferTexture2D(fS.FRAMEBUFFER, fS.COLOR_ATTACHMENT0, fS.TEXTURE_2D, SS._hardwareTexture?.underlyingResource, bS);
      let kS = void 0 !== SS.type ? this._getWebGLTextureType(SS.type) : fS.UNSIGNED_BYTE;
      return NS ? XS || (XS = (0, IS.l)(SS.type, 4 * HS * gS)) : kS === fS.UNSIGNED_BYTE ? (XS || (XS = new Uint8Array(4 * HS * gS)), kS = fS.UNSIGNED_BYTE) : (XS || (XS = new Float32Array(4 * HS * gS)), kS = fS.FLOAT), xS && this.flushFramebuffer(), fS.readPixels(qS, uS, HS, gS, fS.RGBA, kS, XS), fS.bindFramebuffer(fS.FRAMEBUFFER, this._currentFramebuffer), XS
    }, bS.ThinEngine.prototype._readTexturePixels = function(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        uS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS))
    }), (0, gS(40010).e)();
    let kS = !1;
    kS || (kS = !0, bS.ThinEngine.prototype._createDepthStencilCubeTexture = function(SS, HS) {
      const gS = new xS.e(this, 12);
      if (gS.isCube = !0, 1 === this.uj) return NS.b.Error("Depth cube texture is not supported by WebGL 1."), gS;
      const tS = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...HS
        },
        bS = this._gl;
      this._bindTextureDirectly(bS.TEXTURE_CUBE_MAP, gS, !0), this._setupDepthStencilTexture(gS, SS, tS.bilinearFiltering, tS.comparisonFunction);
      for (let XS = 0; XS < 6; XS++) tS.generateStencil ? bS.texImage2D(bS.TEXTURE_CUBE_MAP_POSITIVE_X + XS, 0, bS.DEPTH24_STENCIL8, SS, SS, 0, bS.DEPTH_STENCIL, bS.UNSIGNED_INT_24_8, null) : bS.texImage2D(bS.TEXTURE_CUBE_MAP_POSITIVE_X + XS, 0, bS.DEPTH_COMPONENT24, SS, SS, 0, bS.DEPTH_COMPONENT, bS.UNSIGNED_INT, null);
      return this._bindTextureDirectly(bS.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(gS), gS
    }, bS.ThinEngine.prototype._setCubeMapTextureParams = function(SS, HS, gS) {
      const tS = this._gl;
      tS.texParameteri(tS.TEXTURE_CUBE_MAP, tS.TEXTURE_MAG_FILTER, tS.LINEAR), tS.texParameteri(tS.TEXTURE_CUBE_MAP, tS.TEXTURE_MIN_FILTER, HS ? tS.LINEAR_MIPMAP_LINEAR : tS.LINEAR), tS.texParameteri(tS.TEXTURE_CUBE_MAP, tS.TEXTURE_WRAP_S, tS.CLAMP_TO_EDGE), tS.texParameteri(tS.TEXTURE_CUBE_MAP, tS.TEXTURE_WRAP_T, tS.CLAMP_TO_EDGE), SS.samplingMode = HS ? 3 : 2, HS && this.getCaps().textureMaxLevel && void 0 !== gS && gS > 0 && (tS.texParameteri(tS.TEXTURE_CUBE_MAP, tS.TEXTURE_MAX_LEVEL, gS), SS._maxLodLevel = gS), this._bindTextureDirectly(tS.TEXTURE_CUBE_MAP, null)
    }, bS.ThinEngine.prototype.createCubeTexture = function(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xS = arguments.length > 6 ? arguments[6] : void 0,
        uS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        IS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        kS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        aS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        KS = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        jS = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const GS = this._gl;
      return this.createCubeTextureBase(SS, HS, gS, !!tS, bS, XS, xS, uS, IS, fS, kS, aS, (SS => this._bindTextureDirectly(GS.TEXTURE_CUBE_MAP, SS, !0)), ((SS, HS) => {
        const gS = this.needPOTTextures ? (0, qS.g)(HS[0].width, this._caps.maxCubemapTextureSize) : HS[0].width,
          XS = gS,
          uS = [GS.TEXTURE_CUBE_MAP_POSITIVE_X, GS.TEXTURE_CUBE_MAP_POSITIVE_Y, GS.TEXTURE_CUBE_MAP_POSITIVE_Z, GS.TEXTURE_CUBE_MAP_NEGATIVE_X, GS.TEXTURE_CUBE_MAP_NEGATIVE_Y, GS.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(GS.TEXTURE_CUBE_MAP, SS, !0), this._unpackFlipY(!1);
        const IS = xS ? this._getInternalFormat(xS, SS._useSRGBBuffer) : SS._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : GS.RGBA;
        let fS = xS ? this._getInternalFormat(xS) : GS.RGBA;
        SS._useSRGBBuffer && 1 === this.uj && (fS = IS);
        for (let tS = 0; tS < uS.length; tS++)
          if (HS[tS].width !== gS || HS[tS].height !== XS) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void NS.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = gS, this._workingCanvas.height = XS, this._workingContext.drawImage(HS[tS], 0, 0, HS[tS].width, HS[tS].height, 0, 0, gS, XS), GS.texImage2D(uS[tS], 0, IS, fS, GS.UNSIGNED_BYTE, this._workingCanvas)
          } else GS.texImage2D(uS[tS], 0, IS, fS, GS.UNSIGNED_BYTE, HS[tS]);
        tS || GS.generateMipmap(GS.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(SS, !tS), SS.width = gS, SS.height = XS, SS.isReady = !0, xS && (SS.format = xS), SS.onLoadedObservable.notifyObservers(SS), SS.onLoadedObservable.clear(), bS && bS()
      }), !!KS, jS)
    }, bS.ThinEngine.prototype.generateMipMapsForCubemap = function(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (SS.generateMipMaps) {
        const gS = this._gl;
        this._bindTextureDirectly(gS.TEXTURE_CUBE_MAP, SS, !0), gS.generateMipmap(gS.TEXTURE_CUBE_MAP), HS && this._bindTextureDirectly(gS.TEXTURE_CUBE_MAP, null)
      }
    });
    gS(40019);
    let aS = !1;
    aS || (aS = !0, bS.ThinEngine.prototype.setDepthStencilTexture = function(SS, HS, gS, tS) {
      void 0 !== SS && (HS && (this._boundUniforms[SS] = HS), gS && gS.depthStencilTexture ? this._setTexture(SS, gS, !1, !0, tS) : this._setTexture(SS, null, void 0, void 0, tS))
    });
    let KS = !1;
    KS || (KS = !0, bS.ThinEngine.prototype.createRenderTargetCubeTexture = function(SS, HS) {
      const gS = this._createHardwareRenderTargetWrapper(!1, !0, SS),
        tS = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...HS
        };
      tS.generateStencilBuffer = tS.generateDepthBuffer && tS.generateStencilBuffer, (1 !== tS.type || this._caps.textureFloatLinearFiltering) && (2 !== tS.type || this._caps.textureHalfFloatLinearFiltering) || (tS.samplingMode = 1);
      const bS = this._gl,
        XS = new xS.e(this, 5);
      this._bindTextureDirectly(bS.TEXTURE_CUBE_MAP, XS, !0);
      const qS = this._getSamplingParameters(tS.samplingMode, tS.generateMipMaps);
      1 !== tS.type || this._caps.textureFloat || (tS.type = 0, NS.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), bS.texParameteri(bS.TEXTURE_CUBE_MAP, bS.TEXTURE_MAG_FILTER, qS.mag), bS.texParameteri(bS.TEXTURE_CUBE_MAP, bS.TEXTURE_MIN_FILTER, qS.min), bS.texParameteri(bS.TEXTURE_CUBE_MAP, bS.TEXTURE_WRAP_S, bS.CLAMP_TO_EDGE), bS.texParameteri(bS.TEXTURE_CUBE_MAP, bS.TEXTURE_WRAP_T, bS.CLAMP_TO_EDGE);
      for (let xS = 0; xS < 6; xS++) bS.texImage2D(bS.TEXTURE_CUBE_MAP_POSITIVE_X + xS, 0, this._getRGBABufferInternalSizedFormat(tS.type, tS.format), SS, SS, 0, this._getInternalFormat(tS.format), this._getWebGLTextureType(tS.type), null);
      const uS = bS.createFramebuffer();
      return this._bindUnboundFramebuffer(uS), gS._depthStencilBuffer = this._setupFramebufferDepthAttachments(tS.generateStencilBuffer, tS.generateDepthBuffer, SS, SS), tS.generateMipMaps && bS.generateMipmap(bS.TEXTURE_CUBE_MAP), this._bindTextureDirectly(bS.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), gS._framebuffer = uS, gS._generateDepthBuffer = tS.generateDepthBuffer, gS._generateStencilBuffer = tS.generateStencilBuffer, XS.width = SS, XS.height = SS, XS.isReady = !0, XS.isCube = !0, XS.samples = 1, XS.generateMipMaps = tS.generateMipMaps, XS.samplingMode = tS.samplingMode, XS.type = tS.type, XS.format = tS.format, this._internalTexturesCache.push(XS), gS.setTextures(XS), gS
    });
    var jS = gS(40032),
      GS = gS(40038);
    let CS = !1;
    CS || (CS = !0, bS.ThinEngine.prototype.createPrefilteredCubeTexture = function(SS, HS, tS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        qS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        uS = arguments.length > 6 ? arguments[6] : void 0,
        IS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        fS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        kS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(SS, HS, null, !1, (async SS => {
        if (!SS) return void(XS && XS(null));
        const qS = SS.texture;
        if (fS ? SS.info.sphericalPolynomial && (qS._sphericalPolynomial = SS.info.sphericalPolynomial) : qS._sphericalPolynomial = qS._sphericalPolynomial ?? new jS.f, qS._source = 9, this.getCaps().textureLOD) return void(XS && XS(qS));
        const uS = this._gl,
          IS = SS.width;
        if (!IS) return;
        const {
          DDSTools: kS
        } = await gS.e(306).then((() => gS(41780))), aS = [];
        for (let gS = 0; gS < 3; gS++) {
          const XS = 1 - gS / 2,
            fS = bS,
            KS = Math.log2(IS) * tS + bS,
            jS = fS + (KS - fS) * XS,
            CS = Math.round(Math.min(Math.max(jS, 0), KS)),
            nS = new xS.e(this, 2);
          if (nS.type = qS.type, nS.format = qS.format, nS.width = Math.pow(2, Math.max(Math.log2(IS) - CS, 0)), nS.height = nS.width, nS.isCube = !0, nS._cachedWrapU = 0, nS._cachedWrapV = 0, this._bindTextureDirectly(uS.TEXTURE_CUBE_MAP, nS, !0), nS.samplingMode = 2, uS.texParameteri(uS.TEXTURE_CUBE_MAP, uS.TEXTURE_MAG_FILTER, uS.LINEAR), uS.texParameteri(uS.TEXTURE_CUBE_MAP, uS.TEXTURE_MIN_FILTER, uS.LINEAR), uS.texParameteri(uS.TEXTURE_CUBE_MAP, uS.TEXTURE_WRAP_S, uS.CLAMP_TO_EDGE), uS.texParameteri(uS.TEXTURE_CUBE_MAP, uS.TEXTURE_WRAP_T, uS.CLAMP_TO_EDGE), SS.isDDS) {
            const HS = SS.info,
              gS = SS.data;
            this._unpackFlipY(HS.isCompressed), kS.UploadDDSLevels(this, nS, gS, HS, !0, 6, CS)
          } else NS.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(uS.TEXTURE_CUBE_MAP, null);
          const PS = new GS.e(HS);
          PS._isCube = !0, PS._texture = nS, nS.isReady = !0, aS.push(PS)
        }
        qS._lodTextureHigh = aS[2], qS._lodTextureMid = aS[1], qS._lodTextureLow = aS[0], XS && XS(qS)
      }), qS, uS, IS, fS, tS, bS, null, void 0, !1, kS)
    });
    var nS = gS(39956);
    let PS = !1;
    PS || (PS = !0, bS.ThinEngine.prototype.createUniformBuffer = function(SS, HS) {
      const gS = this._gl.createBuffer();
      if (!gS) throw new Error("Unable to create uniform buffer");
      const tS = new nS.c(gS);
      return this.bindUniformBuffer(tS), SS instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, SS, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(SS), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), tS.references = 1, tS
    }, bS.ThinEngine.prototype.createDynamicUniformBuffer = function(SS, HS) {
      const gS = this._gl.createBuffer();
      if (!gS) throw new Error("Unable to create dynamic uniform buffer");
      const tS = new nS.c(gS);
      return this.bindUniformBuffer(tS), SS instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, SS, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(SS), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), tS.references = 1, tS
    }, bS.ThinEngine.prototype.updateUniformBuffer = function(SS, HS, gS, tS) {
      this.bindUniformBuffer(SS), void 0 === gS && (gS = 0), void 0 === tS ? HS instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gS, HS) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gS, new Float32Array(HS)) : HS instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, HS.subarray(gS, gS + tS)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(HS).subarray(gS, gS + tS)), this.bindUniformBuffer(null)
    }, bS.ThinEngine.prototype.bindUniformBuffer = function(SS) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, SS ? SS.underlyingResource : null)
    }, bS.ThinEngine.prototype.bindUniformBufferBase = function(SS, HS, gS) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, HS, SS ? SS.underlyingResource : null)
    }, bS.ThinEngine.prototype.bindUniformBlock = function(SS, HS, gS) {
      const tS = SS.program,
        bS = this._gl.getUniformBlockIndex(tS, HS);
      4294967295 !== bS && this._gl.uniformBlockBinding(tS, bS, gS)
    });
    var QS = gS(39913),
      DS = gS(39939);
    let wS = !1;
    wS || (wS = !0, DS.b.prototype.displayLoadingUI = function() {
      if (!(0, QS.j)()) return;
      const SS = this.loadingScreen;
      SS && SS.displayLoadingUI()
    }, DS.b.prototype.hideLoadingUI = function() {
      if (!(0, QS.j)()) return;
      const SS = this._loadingScreen;
      SS && SS.hideLoadingUI()
    }, Object.defineProperty(DS.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = DS.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(SS) {
        this._loadingScreen = SS
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(DS.b.prototype, "loadingUIText", {
      set: function(SS) {
        this.loadingScreen.loadingUIText = SS
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(DS.b.prototype, "loadingUIBackgroundColor", {
      set: function(SS) {
        this.loadingScreen.loadingUIBackgroundColor = SS
      },
      enumerable: !0,
      configurable: !0
    })), (0, gS(39995).d)();
    let hS = !1;
    hS || (hS = !0, DS.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, DS.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, DS.b.prototype.setDepthFunction = function(SS) {
      this._depthCullingState.depthFunc = SS
    }, DS.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, DS.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, DS.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, DS.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, DS.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, DS.b.prototype.setDepthWrite = function(SS) {
      this._depthCullingState.depthMask = SS
    }, DS.b.prototype.setAlphaConstants = function(SS, HS, gS, tS) {
      this._alphaState.setAlphaBlendConstants(SS, HS, gS, tS)
    }, DS.b.prototype.getAlphaMode = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[SS]
    }, DS.b.prototype.getAlphaEquation = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[SS]
    });
    let ZS = !1;
    ZS || (ZS = !0, DS.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, DS.b.prototype.setStencilBuffer = function(SS) {
      this._stencilState.stencilTest = SS
    }, DS.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, DS.b.prototype.setStencilMask = function(SS) {
      this._stencilState.stencilMask = SS
    }, DS.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, DS.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, DS.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, DS.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, DS.b.prototype.setStencilFunction = function(SS) {
      this._stencilState.stencilFunc = SS
    }, DS.b.prototype.setStencilBackFunction = function(SS) {
      this._stencilState.stencilBackFunc = SS
    }, DS.b.prototype.setStencilFunctionReference = function(SS) {
      this._stencilState.stencilFuncRef = SS
    }, DS.b.prototype.setStencilFunctionMask = function(SS) {
      this._stencilState.stencilFuncMask = SS
    }, DS.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, DS.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, DS.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, DS.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, DS.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, DS.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, DS.b.prototype.setStencilOperationFail = function(SS) {
      this._stencilState.stencilOpStencilFail = SS
    }, DS.b.prototype.setStencilBackOperationFail = function(SS) {
      this._stencilState.stencilBackOpStencilFail = SS
    }, DS.b.prototype.setStencilOperationDepthFail = function(SS) {
      this._stencilState.stencilOpDepthFail = SS
    }, DS.b.prototype.setStencilBackOperationDepthFail = function(SS) {
      this._stencilState.stencilBackOpDepthFail = SS
    }, DS.b.prototype.setStencilOperationPass = function(SS) {
      this._stencilState.stencilOpStencilDepthPass = SS
    }, DS.b.prototype.setStencilBackOperationPass = function(SS) {
      this._stencilState.stencilBackOpStencilDepthPass = SS
    }, DS.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, DS.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    gS(40079);
    let JS = !1;
    JS || (JS = !0, DS.b.prototype.createDepthStencilTexture = function(SS, HS, gS) {
      if (HS.isCube) {
        const gS = SS.width || SS;
        return this._createDepthStencilCubeTexture(gS, HS)
      }
      return this._createDepthStencilTexture(SS, HS, gS)
    });
    gS(40082), gS(40119);
    let OS = !1;
    OS || (OS = !0, bS.ThinEngine.prototype.enableScissor = function(SS, HS, gS, tS) {
      const bS = this._gl;
      bS.enable(bS.SCISSOR_TEST), bS.scissor(SS, HS, gS, tS)
    }, bS.ThinEngine.prototype.disableScissor = function() {
      const SS = this._gl;
      SS.disable(SS.SCISSOR_TEST)
    })
  },
  39872: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => DS
    });
    var tS = gS(39877),
      bS = gS(37138),
      XS = gS(39888),
      xS = gS(39946);
    class NS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new qS(SS)
      }
      sampleFrame() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const HS = SS - this._lastFrameTimeMs;
            this._rollingFrameTime.add(HS)
          }
          this._lastFrameTimeMs = SS
        }
      }
      get averageFrameTime() {
        return this._rollingFrameTime.average
      }
      get averageFrameTimeVariance() {
        return this._rollingFrameTime.variance
      }
      get instantaneousFrameTime() {
        return this._rollingFrameTime.history(0)
      }
      get averageFPS() {
        return 1e3 / this._rollingFrameTime.average
      }
      get instantaneousFPS() {
        const SS = this._rollingFrameTime.history(0);
        return 0 === SS ? 0 : 1e3 / SS
      }
      get isSaturated() {
        return this._rollingFrameTime.isSaturated()
      }
      enable() {
        this._enabled = !0
      }
      disable() {
        this._enabled = !1, this._lastFrameTimeMs = null
      }
      get isEnabled() {
        return this._enabled
      }
      reset() {
        this._lastFrameTimeMs = null, this._rollingFrameTime.reset()
      }
    }
    class qS {
      constructor(SS) {
        this._samples = new Array(SS), this.reset()
      }
      add(SS) {
        let HS;
        if (this.isSaturated()) {
          const SS = this._samples[this._pos];
          HS = SS - this.average, this.average -= HS / (this._sampleCount - 1), this._m2 -= HS * (SS - this.average)
        } else this._sampleCount++;
        HS = SS - this.average, this.average += HS / this._sampleCount, this._m2 += HS * (SS - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = SS, this._pos++, this._pos %= this._samples.length
      }
      history(SS) {
        if (SS >= this._sampleCount || SS >= this._samples.length) return 0;
        const HS = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(HS - SS)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(SS) {
        const HS = this._samples.length;
        return (SS % HS + HS) % HS
      }
    }
    var uS = gS(39956),
      IS = gS(38687),
      fS = gS(39975),
      kS = gS(39939),
      aS = gS(39913);

    function KS(SS) {
      const HS = function(SS) {
        if (!(0, aS.f)() || !document.body) return null;
        const HS = document.createElement("span");
        HS.textContent = "Hg", HS.style.font = SS;
        const gS = document.createElement("div");
        gS.style.display = "inline-block", gS.style.width = "1px", gS.style.height = "0px", gS.style.verticalAlign = "bottom";
        const tS = document.createElement("div");
        let bS, XS;
        tS.style.whiteSpace = "nowrap", tS.appendChild(HS), tS.appendChild(gS), document.body.appendChild(tS);
        try {
          XS = gS.getBoundingClientRect().top - HS.getBoundingClientRect().top, gS.style.verticalAlign = "baseline", bS = gS.getBoundingClientRect().top - HS.getBoundingClientRect().top
        } finally {
          document.body.removeChild(tS)
        }
        const xS = {
          ascent: bS,
          height: XS,
          descent: XS - bS
        };
        return jS(xS) ? xS : null
      }(SS);
      if (HS) return HS;
      const gS = function(SS) {
        let HS = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? HS = new OffscreenCanvas(64, 64) : (0, aS.f)() && "function" === typeof document.createElement && (HS = document.createElement("canvas"), HS.width = 64, HS.height = 64);
          const gS = HS?.getContext("2d");
          if (!gS) return null;
          gS.font = SS;
          const tS = gS.measureText("Hg"),
            bS = Number(tS.actualBoundingBoxAscent ?? tS.fontBoundingBoxAscent),
            XS = Number(tS.actualBoundingBoxDescent ?? tS.fontBoundingBoxDescent),
            xS = {
              ascent: bS,
              height: bS + XS,
              descent: XS
            };
          return jS(xS) ? xS : null
        } catch {
          return null
        } finally {
          const SS = HS;
          "function" === typeof SS?.dispose && SS.dispose()
        }
      }(SS);
      return gS || function(SS) {
        const HS = Math.max(1, function(SS) {
            const HS = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(SS || ""));
            return HS ? Number(HS[1]) : 16
          }(SS)),
          gS = .8 * HS,
          tS = .2 * HS;
        return {
          ascent: gS,
          height: gS + tS,
          descent: tS
        }
      }(SS)
    }

    function jS(SS) {
      return Number.isFinite(SS.ascent) && Number.isFinite(SS.height) && Number.isFinite(SS.descent) && SS.height > 0
    }

    function GS(SS) {
      if (SS.requestPointerLock) {
        const HS = SS.requestPointerLock();
        HS instanceof Promise ? HS.then((() => {
          SS.focus()
        })).catch((() => {})) : SS.focus()
      }
    }
    var CS = gS(39987),
      nS = gS(39937),
      PS = gS(39995),
      QS = gS(39998);
    class DS extends XS.ThinEngine {
      static get NpmPackage() {
        return kS.b.NpmPackage
      }
      static get Version() {
        return kS.b.Version
      }
      static get Instances() {
        return bS.d.Instances
      }
      static get LastCreatedEngine() {
        return bS.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return bS.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(SS) {
        return kS.b.DefaultLoadingScreenFactory(SS)
      }
      get _supportsHardwareTextureRescaling() {
        return !!DS._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, PS.d)(), (0, QS.b)(), super(SS, HS, gS, tS), this._performanceMonitor = new NS, this._drawCalls = new CS.c, SS && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(SS) {
        super._sharedInit(SS),
          function(SS, HS, gS) {
            SS._onCanvasFocus = () => {
              SS.onCanvasFocusObservable.notifyObservers(SS)
            }, SS._onCanvasBlur = () => {
              SS.onCanvasBlurObservable.notifyObservers(SS)
            }, SS._onCanvasContextMenu = HS => {
              SS.disableContextMenu && HS.preventDefault()
            }, HS.addEventListener("focus", SS._onCanvasFocus), HS.addEventListener("blur", SS._onCanvasBlur), HS.addEventListener("contextmenu", SS._onCanvasContextMenu), SS._onBlur = () => {
              SS.disablePerformanceMonitorInBackground && SS.performanceMonitor.disable(), SS._windowIsBackground = !0
            }, SS._onFocus = () => {
              SS.disablePerformanceMonitorInBackground && SS.performanceMonitor.enable(), SS._windowIsBackground = !1
            }, SS._onCanvasPointerOut = gS => {
              document.elementFromPoint(gS.clientX, gS.clientY) !== HS && SS.onCanvasPointerOutObservable.notifyObservers(gS)
            };
            const tS = SS.getHostWindow();
            tS && "function" === typeof tS.addEventListener && (tS.addEventListener("blur", SS._onBlur), tS.addEventListener("focus", SS._onFocus)), HS.addEventListener("pointerout", SS._onCanvasPointerOut), gS.doNotHandleTouchAction || function(SS) {
              SS && SS.setAttribute && (SS.setAttribute("touch-action", "none"), SS.style.touchAction = "none", SS.style.webkitTapHighlightColor = "transparent")
            }(HS), !kS.b.audioEngine && gS.audioEngine && kS.b.AudioEngineFactory && (kS.b.audioEngine = kS.b.AudioEngineFactory(SS.getRenderingCanvas(), SS.getAudioContext(), SS.getAudioDestination())), (0, aS.f)() && (SS._onFullscreenChange = () => {
              SS.isFullscreen = !!document.fullscreenElement, SS.isFullscreen && SS._pointerLockRequested && HS && GS(HS)
            }, document.addEventListener("fullscreenchange", SS._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", SS._onFullscreenChange, !1), SS._onPointerLockChange = () => {
              SS.isPointerLock = document.pointerLockElement === HS
            }, document.addEventListener("pointerlockchange", SS._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", SS._onPointerLockChange, !1)), SS.enableOfflineSupport = void 0 !== kS.b.OfflineProviderFactory, SS._deterministicLockstep = !!gS.deterministicLockstep, SS._lockstepMaxSteps = gS.lockstepMaxSteps || 0, SS._timeStep = gS.timeStep || 1 / 60
          }(this, SS, this._creationOptions)
      }
      resizeImageBitmap(SS, HS, gS) {
        return function(SS, HS, gS, tS) {
          const bS = SS.createCanvas(gS, tS).getContext("2d");
          if (!bS) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return bS.drawImage(HS, 0, 0), bS.getImageData(0, 0, gS, tS).data
        }(this, SS, HS, gS)
      }
      async _createImageBitmapFromSource(SS, HS) {
        return await async function(SS, HS, gS) {
          return await new Promise(((tS, bS) => {
            const XS = new Image;
            XS.onload = () => {
              XS.decode().then((() => {
                SS.createImageBitmap(XS, gS).then((SS => {
                  tS(SS)
                }))
              }))
            }, XS.onerror = () => {
              bS(`Error loading image ${XS.src}`)
            }, XS.src = HS
          }))
        }(this, SS, HS)
      }
      switchFullscreen(SS) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(SS)
      }
      enterFullscreen(SS) {
        this.isFullscreen || (this._pointerLockRequested = SS, this._renderingCanvas && function(SS) {
          const HS = SS.requestFullscreen || SS.webkitRequestFullscreen;
          HS && HS.call(SS)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const SS = document;
          document.exitFullscreen ? document.exitFullscreen() : SS.webkitCancelFullScreen && SS.webkitCancelFullScreen()
        }()
      }
      setDitheringState(SS) {
        SS ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(SS) {
        SS ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(SS, HS, gS, tS) {
        const bS = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(SS, HS, gS, tS), bS
      }
      scissorClear(SS, HS, gS, tS, bS) {
        this.enableScissor(SS, HS, gS, tS), this.clear(bS, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(SS) {
        const HS = this._gl.getAttachedShaders(SS);
        return HS ? this._gl.getShaderSource(HS[0]) : null
      }
      getFragmentShaderSource(SS) {
        const HS = this._gl.getAttachedShaders(SS);
        return HS ? this._gl.getShaderSource(HS[1]) : null
      }
      set framebufferDimensionsObject(SS) {
        this._framebufferDimensionsObject = SS, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const SS of this.scenes) SS.resetCachedMaterial(), SS._rebuildGeometries();
        for (const SS of this._virtualScenes) SS.resetCachedMaterial(), SS._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(SS) {
        return KS(SS)
      }
      enterPointerlock() {
        this._renderingCanvas && GS(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      qD() {
        this._measureFps(), super.qD()
      }
      _deletePipelineContext(SS) {
        const HS = SS;
        HS && HS.program && HS.transformFeedback && (this.deleteTransformFeedback(HS.transformFeedback), HS.transformFeedback = null), super._deletePipelineContext(SS)
      }
      createShaderProgram(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        bS = bS || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const xS = super.createShaderProgram(SS, HS, gS, tS, bS, XS);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), xS
      }
      _createShaderProgram(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const XS = tS.createProgram();
        if (SS.program = XS, !XS) throw new Error("Unable to create program");
        if (tS.attachShader(XS, HS), tS.attachShader(XS, gS), this.uj > 1 && bS) {
          const HS = this.createTransformFeedback();
          this.bindTransformFeedback(HS), this.setTranformFeedbackVaryings(XS, bS), SS.transformFeedback = HS
        }
        return tS.linkProgram(XS), this.uj > 1 && bS && this.bindTransformFeedback(null), SS.context = tS, SS.vertexShader = HS, SS.fragmentShader = gS, SS.isParallelCompiled || this._finalizePipelineContext(SS), XS
      }
      _releaseTexture(SS) {
        super._releaseTexture(SS)
      }
      _releaseRenderTargetWrapper(SS) {
        super._releaseRenderTargetWrapper(SS);
        for (const HS of this.scenes) {
          for (const gS of HS.postProcesses) gS._outputTexture === SS && (gS._outputTexture = null);
          for (const gS of HS.cameras)
            for (const HS of gS._postProcesses) HS && HS._outputTexture === SS && (HS._outputTexture = null)
        }
      }
      _rescaleTexture(SS, HS, gS, tS, bS) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const XS = this.createRenderTargetTexture({
          width: HS.width,
          height: HS.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && DS._RescalePostProcessFactory && (this._rescalePostProcess = DS._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const xS = () => {
              this._rescalePostProcess.onApply = function(HS) {
                HS._bindTexture("textureSampler", SS)
              };
              let xS = gS;
              xS || (xS = this.scenes[this.scenes.length - 1]), xS.postProcessManager.directRender([this._rescalePostProcess], XS, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, HS, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, tS, 0, 0, HS.width, HS.height, 0), this.unBindFramebuffer(XS), XS.dispose(), bS && bS()
            },
            NS = this._rescalePostProcess.getEffect();
          NS ? NS.executeWhenCompiled(xS) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((SS => {
            SS.executeWhenCompiled(xS)
          }))
        }
      }
      wrapWebGLTexture(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const xS = new fS.c(SS, this._gl),
          NS = new tS.e(this, 15, !0);
        return NS._hardwareTexture = xS, NS.baseWidth = bS, NS.baseHeight = XS, NS.width = bS, NS.height = XS, NS.isReady = !0, NS.useMipMaps = HS, this.updateTextureSamplingMode(gS, NS), NS
      }
      updateWrappedWebGLTexture(SS, HS) {
        if (15 !== SS.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const tS of this._renderTargetWrapperCache)
          if (tS.textures?.includes(SS)) {
            if (tS.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (tS._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } SS._hardwareTexture = new fS.c(HS, this._gl), SS.isReady = !0, SS._cachedCoordinatesMode = null, SS._cachedWrapU = null, SS._cachedWrapV = null, SS._cachedWrapR = null, SS._cachedAnisotropicFilteringLevel = null;
        for (const tS in this._boundTexturesCache) this._boundTexturesCache[tS] === SS && (this._boundTexturesCache[tS] = null);
        this.updateTextureSamplingMode(SS.samplingMode, SS);
        const gS = this._gl;
        for (const tS of this._renderTargetWrapperCache) {
          if (tS.texture !== SS) continue;
          const bS = tS,
            XS = tS.samples,
            xS = XS > 1;
          bS._framebuffer && gS.deleteFramebuffer(bS._framebuffer), !xS && bS._depthStencilBuffer && (gS.deleteRenderbuffer(bS._depthStencilBuffer), bS._depthStencilBuffer = null);
          const NS = this._currentFramebuffer,
            qS = gS.createFramebuffer();
          this._bindUnboundFramebuffer(qS), gS.framebufferTexture2D(gS.FRAMEBUFFER, gS.COLOR_ATTACHMENT0, gS.TEXTURE_2D, HS, 0), xS || (bS._depthStencilBuffer = this._setupFramebufferDepthAttachments(tS._generateStencilBuffer, tS._generateDepthBuffer, tS.width, tS.height)), this._bindUnboundFramebuffer(NS), bS._framebuffer = qS, xS && (tS._samples = 1, this.updateRenderTargetTextureSampleCount(bS, XS))
        }
      }
      _uploadImageToTexture(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const bS = this._gl,
          XS = this._getWebGLTextureType(SS.type),
          xS = this._getInternalFormat(SS.format),
          NS = this._getRGBABufferInternalSizedFormat(SS.type, xS),
          qS = SS.isCube ? bS.TEXTURE_CUBE_MAP : bS.TEXTURE_2D;
        this._bindTextureDirectly(qS, SS, !0), this._unpackFlipY(SS.invertY);
        let uS = bS.TEXTURE_2D;
        SS.isCube && (uS = bS.TEXTURE_CUBE_MAP_POSITIVE_X + gS), bS.texImage2D(uS, tS, NS, xS, XS, HS), this._bindTextureDirectly(qS, null, !0)
      }
      updateTextureComparisonFunction(SS, HS) {
        if (1 === this.uj) return void IS.b.Error("WebGL 1 does not support texture comparison.");
        const gS = this._gl;
        SS.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, SS, !0), 0 === HS ? (gS.texParameteri(gS.TEXTURE_CUBE_MAP, gS.TEXTURE_COMPARE_FUNC, 515), gS.texParameteri(gS.TEXTURE_CUBE_MAP, gS.TEXTURE_COMPARE_MODE, gS.NONE)) : (gS.texParameteri(gS.TEXTURE_CUBE_MAP, gS.TEXTURE_COMPARE_FUNC, HS), gS.texParameteri(gS.TEXTURE_CUBE_MAP, gS.TEXTURE_COMPARE_MODE, gS.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, SS, !0), 0 === HS ? (gS.texParameteri(gS.TEXTURE_2D, gS.TEXTURE_COMPARE_FUNC, 515), gS.texParameteri(gS.TEXTURE_2D, gS.TEXTURE_COMPARE_MODE, gS.NONE)) : (gS.texParameteri(gS.TEXTURE_2D, gS.TEXTURE_COMPARE_FUNC, HS), gS.texParameteri(gS.TEXTURE_2D, gS.TEXTURE_COMPARE_MODE, gS.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), SS._comparisonFunction = HS
      }
      createInstancesBuffer(SS) {
        const HS = this._gl.createBuffer();
        if (!HS) throw new Error("Unable to create instance buffer");
        const gS = new uS.c(HS);
        return gS.hf = SS, this.bindArrayBuffer(gS), this._gl.bufferData(this._gl.ARRAY_BUFFER, SS, this._gl.DYNAMIC_DRAW), gS.references = 1, gS
      }
      deleteInstancesBuffer(SS) {
        this._gl.deleteBuffer(SS)
      }
      async _clientWaitAsync(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const tS = this._gl;
        return await new Promise(((bS, XS) => {
          (0, nS.g)((() => {
            const gS = tS.clientWaitSync(SS, HS, 0);
            if (gS == tS.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return gS != tS.TIMEOUT_EXPIRED
          }), bS, XS, gS)
        }))
      }
      _readPixelsAsync(SS, HS, gS, tS, bS, XS, xS) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const NS = this._gl,
          qS = NS.createBuffer();
        NS.bindBuffer(NS.PIXEL_PACK_BUFFER, qS), NS.bufferData(NS.PIXEL_PACK_BUFFER, xS.byteLength, NS.STREAM_READ), NS.readPixels(SS, HS, gS, tS, bS, XS, 0), NS.bindBuffer(NS.PIXEL_PACK_BUFFER, null);
        const uS = NS.fenceSync(NS.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return uS ? (NS.flush(), this._clientWaitAsync(uS, 0, 10).then((() => (NS.deleteSync(uS), NS.bindBuffer(NS.PIXEL_PACK_BUFFER, qS), NS.getBufferSubData(NS.PIXEL_PACK_BUFFER, 0, xS), NS.bindBuffer(NS.PIXEL_PACK_BUFFER, null), NS.deleteBuffer(qS), xS)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(SS, HS) {
            1 === bS.d.Instances.length && kS.b.audioEngine && (kS.b.audioEngine.dispose(), kS.b.audioEngine = null);
            const gS = SS.getHostWindow();
            gS && "function" === typeof gS.removeEventListener && (gS.removeEventListener("blur", SS._onBlur), gS.removeEventListener("focus", SS._onFocus)), HS && (HS.removeEventListener("focus", SS._onCanvasFocus), HS.removeEventListener("blur", SS._onCanvasBlur), HS.removeEventListener("pointerout", SS._onCanvasPointerOut), HS.removeEventListener("contextmenu", SS._onCanvasContextMenu)), (0, aS.f)() && (document.removeEventListener("fullscreenchange", SS._onFullscreenChange), document.removeEventListener("mozfullscreenchange", SS._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", SS._onFullscreenChange), document.removeEventListener("msfullscreenchange", SS._onFullscreenChange), document.removeEventListener("pointerlockchange", SS._onPointerLockChange), document.removeEventListener("mspointerlockchange", SS._onPointerLockChange), document.removeEventListener("mozpointerlockchange", SS._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", SS._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    DS.ALPHA_DISABLE = 0, DS.ALPHA_ADD = 1, DS.ALPHA_COMBINE = 2, DS.ALPHA_SUBTRACT = 3, DS.ALPHA_MULTIPLY = 4, DS.ALPHA_MAXIMIZED = 5, DS.ALPHA_ONEONE = 6, DS.ALPHA_PREMULTIPLIED = 7, DS.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, DS.ALPHA_INTERPOLATE = 9, DS.ALPHA_SCREENMODE = 10, DS.DELAYLOADSTATE_NONE = 0, DS.DELAYLOADSTATE_LOADED = 1, DS.DELAYLOADSTATE_LOADING = 2, DS.DELAYLOADSTATE_NOTLOADED = 4, DS.NEVER = 512, DS.ALWAYS = 519, DS.LESS = 513, DS.EQUAL = 514, DS.LEQUAL = 515, DS.GREATER = 516, DS.GEQUAL = 518, DS.NOTEQUAL = 517, DS.KEEP = 7680, DS.REPLACE = 7681, DS.INCR = 7682, DS.DECR = 7683, DS.INVERT = 5386, DS.INCR_WRAP = 34055, DS.DECR_WRAP = 34056, DS.TEXTURE_CLAMP_ADDRESSMODE = 0, DS.TEXTURE_WRAP_ADDRESSMODE = 1, DS.TEXTURE_MIRROR_ADDRESSMODE = 2, DS.TEXTUREFORMAT_ALPHA = 0, DS.TEXTUREFORMAT_LUMINANCE = 1, DS.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, DS.TEXTUREFORMAT_RGB = 4, DS.TEXTUREFORMAT_RGBA = 5, DS.TEXTUREFORMAT_RED = 6, DS.TEXTUREFORMAT_R = 6, DS.TEXTUREFORMAT_R16_UNORM = 33322, DS.TEXTUREFORMAT_RG16_UNORM = 33324, DS.TEXTUREFORMAT_RGB16_UNORM = 32852, DS.TEXTUREFORMAT_RGBA16_UNORM = 32859, DS.TEXTUREFORMAT_R16_SNORM = 36760, DS.TEXTUREFORMAT_RG16_SNORM = 36761, DS.TEXTUREFORMAT_RGB16_SNORM = 36762, DS.TEXTUREFORMAT_RGBA16_SNORM = 36763, DS.TEXTUREFORMAT_RG = 7, DS.TEXTUREFORMAT_RED_INTEGER = 8, DS.TEXTUREFORMAT_R_INTEGER = 8, DS.TEXTUREFORMAT_RG_INTEGER = 9, DS.TEXTUREFORMAT_RGB_INTEGER = 10, DS.TEXTUREFORMAT_RGBA_INTEGER = 11, DS.TEXTURETYPE_UNSIGNED_BYTE = 0, DS.TEXTURETYPE_UNSIGNED_INT = 0, DS.TEXTURETYPE_FLOAT = 1, DS.TEXTURETYPE_HALF_FLOAT = 2, DS.TEXTURETYPE_BYTE = 3, DS.TEXTURETYPE_SHORT = 4, DS.TEXTURETYPE_UNSIGNED_SHORT = 5, DS.TEXTURETYPE_INT = 6, DS.TEXTURETYPE_UNSIGNED_INTEGER = 7, DS.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, DS.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, DS.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, DS.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, DS.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, DS.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, DS.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, DS.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, DS.TEXTURE_NEAREST_SAMPLINGMODE = 1, DS.TEXTURE_BILINEAR_SAMPLINGMODE = 2, DS.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, DS.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, DS.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, DS.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, DS.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, DS.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, DS.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, DS.TEXTURE_NEAREST_LINEAR = 7, DS.TEXTURE_NEAREST_NEAREST = 1, DS.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, DS.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, DS.TEXTURE_LINEAR_LINEAR = 2, DS.TEXTURE_LINEAR_NEAREST = 12, DS.TEXTURE_EXPLICIT_MODE = 0, DS.TEXTURE_SPHERICAL_MODE = 1, DS.TEXTURE_PLANAR_MODE = 2, DS.TEXTURE_CUBIC_MODE = 3, DS.TEXTURE_PROJECTION_MODE = 4, DS.TEXTURE_SKYBOX_MODE = 5, DS.TEXTURE_INVCUBIC_MODE = 6, DS.TEXTURE_EQUIRECTANGULAR_MODE = 7, DS.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, DS.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, DS.SCALEMODE_FLOOR = 1, DS.SCALEMODE_NEAREST = 2, DS.SCALEMODE_CEILING = 3
  },
  40023: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS
    });
    var tS = gS(39978);
    class bS {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(SS) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = SS, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, SS && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, tS.b)(SS.format))
      }
      get depthStencilTextureWithStencil() {
        return this._depthStencilTextureWithStencil
      }
      get isCube() {
        return this._isCube
      }
      get isMulti() {
        return this._isMulti
      }
      get is2DArray() {
        return this.layers > 0
      }
      get is3D() {
        return this.depth > 0
      }
      get size() {
        return this.width
      }
      get width() {
        return this._size.width ?? this._size
      }
      get height() {
        return this._size.height ?? this._size
      }
      get layers() {
        return this._size.layers || 0
      }
      get depth() {
        return this._size.depth || 0
      }
      get texture() {
        return this._textures?.[0] ?? null
      }
      get textures() {
        return this._textures
      }
      get faceIndices() {
        return this._faceIndices
      }
      get layerIndices() {
        return this._layerIndices
      }
      getBaseArrayLayer(SS) {
        if (!this._textures) return -1;
        const HS = this._textures[SS],
          gS = this._layerIndices?.[SS] ?? 0,
          tS = this._faceIndices?.[SS] ?? 0;
        return HS.isCube ? 6 * gS + tS : HS.is3D ? 0 : gS
      }
      get samples() {
        return this._samples
      }
      setSamples(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === SS && !gS) return SS;
        const tS = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, SS, HS) : this._engine.updateRenderTargetTextureSampleCount(this, SS);
        return this._samples = SS, tS
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(SS, HS, gS, tS, bS) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = SS, this._isCube = HS, this._size = gS, this._engine = tS, this._depthStencilTexture = null, this.label = bS
      }
      setTextures(SS) {
        Array.isArray(SS) ? this._textures = SS : this._textures = SS ? [SS] : null
      }
      setTexture(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[HS] !== SS && (this._textures[HS] && gS && this._textures[HS].dispose(), this._textures[HS] = SS)
      }
      setLayerAndFaceIndices(SS, HS) {
        this._layerIndices = SS, this._faceIndices = HS
      }
      setLayerAndFaceIndex() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== HS && HS >= 0 && (this._layerIndices[SS] = HS), void 0 !== gS && gS >= 0 && (this._faceIndices[SS] = gS)
      }
      createDepthStencilTexture() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = gS, this._depthStencilTextureLabel = XS, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: HS,
          comparisonFunction: SS,
          generateStencil: gS,
          isCube: this._isCube,
          samples: tS,
          depthTextureFormat: bS,
          label: XS
        }, this), this._depthStencilTexture
      }
      _shareDepth(SS) {
        this.shareDepth(SS)
      }
      shareDepth(SS) {
        this._depthStencilTexture && (SS._depthStencilTexture && SS._depthStencilTexture.dispose(), SS._depthStencilTexture = this._depthStencilTexture, SS._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(SS) {
        this.texture && this.texture._swapAndDie(SS), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let SS = null;
        if (this._isMulti) {
          const HS = this.textures;
          if (HS && HS.length > 0) {
            let gS = !1,
              tS = HS.length,
              bS = -1;
            const XS = HS[HS.length - 1]._source;
            14 !== XS && 12 !== XS || (gS = !0, bS = HS[HS.length - 1].format, tS--);
            const xS = [],
              NS = [],
              qS = [],
              uS = [],
              IS = [],
              fS = [],
              kS = [],
              aS = {};
            for (let SS = 0; SS < tS; ++SS) {
              const gS = HS[SS];
              xS.push(gS.samplingMode), NS.push(gS.type), qS.push(gS.format);
              void 0 !== aS[gS.uniqueId] ? (uS.push(-1), kS.push(0)) : (aS[gS.uniqueId] = SS, gS.is2DArray ? (uS.push(35866), kS.push(gS.depth)) : gS.isCube ? (uS.push(34067), kS.push(0)) : gS.is3D ? (uS.push(32879), kS.push(gS.depth)) : (uS.push(3553), kS.push(0))), this._faceIndices && IS.push(this._faceIndices[SS] ?? 0), this._layerIndices && fS.push(this._layerIndices[SS] ?? 0)
            }
            const KS = {
                samplingModes: xS,
                generateMipMaps: HS[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: gS,
                depthTextureFormat: bS,
                types: NS,
                formats: qS,
                wxS: tS,
                targetTypes: uS,
                faceIndex: IS,
                layerIndex: fS,
                layerCounts: kS,
                label: this.label
              },
              jS = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            SS = this._engine.createMultipleRenderTarget(jS, KS);
            for (let GS = 0; GS < tS; ++GS) {
              if (-1 !== uS[GS]) continue;
              const gS = aS[HS[GS].uniqueId];
              SS.setTexture(SS.textures[gS], GS)
            }
          }
        } else {
          const HS = {};
          if (HS.generateDepthBuffer = this._generateDepthBuffer, HS.generateMipMaps = this.texture?.generateMipMaps ?? !1, HS.generateStencilBuffer = this._generateStencilBuffer, HS.samplingMode = this.texture?.samplingMode, HS.type = this.texture?.type, HS.format = this.texture?.format, HS.noColorAttachment = !this._textures, HS.label = this.label, this.isCube) SS = this._engine.createRenderTargetCubeTexture(this.width, HS);
          else {
            const gS = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            SS = this._engine.createRenderTargetTexture(gS, HS)
          }
          SS.texture && (SS.texture.isReady = !0)
        }
        return SS
      }
      _swapRenderTargetWrapper(SS) {
        if (this._textures && SS._textures)
          for (let HS = 0; HS < this._textures.length; ++HS) this._textures[HS]._swapAndDie(SS._textures[HS], !1), SS._textures[HS].isReady = !0;
        this._depthStencilTexture && SS._depthStencilTexture && (this._depthStencilTexture._swapAndDie(SS._depthStencilTexture), SS._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const SS = this._cloneRenderTargetWrapper();
        if (SS) {
          if (this._depthStencilTexture) {
            const HS = this._depthStencilTexture.samplingMode,
              gS = this._depthStencilTexture.format,
              tS = 2 === HS || 3 === HS || 11 === HS;
            SS.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, tS, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, gS, this._depthStencilTextureLabel)
          }
          this.samples > 1 && SS.setSamples(this.samples), SS._swapRenderTargetWrapper(this), SS.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let SS = 0; SS < this._textures.length; ++SS) this._textures[SS].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40461: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      static get ForceFullSceneLoadingForIncremental() {
        return tS._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(SS) {
        tS._ForceFullSceneLoadingForIncremental = SS
      }
      static get ShowLoadingScreen() {
        return tS._ShowLoadingScreen
      }
      static set ShowLoadingScreen(SS) {
        tS._ShowLoadingScreen = SS
      }
      static get loggingLevel() {
        return tS._LoggingLevel
      }
      static set loggingLevel(SS) {
        tS._LoggingLevel = SS
      }
      static get CleanBoneMatrixWeights() {
        return tS._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(SS) {
        tS._CleanBoneMatrixWeights = SS
      }
    }
    tS._ForceFullSceneLoadingForIncremental = !1, tS._ShowLoadingScreen = !0, tS._CleanBoneMatrixWeights = !1, tS._LoggingLevel = 0
  },
  40125: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(38687);
    const bS = new Map;

    function XS(SS, HS) {
      (function(SS) {
        return bS.delete(SS)
      })(SS) && tS.b.Warn(`Extension with the name '${SS}' already exists`), bS.set(SS, HS)
    }

    function xS(SS, HS) {
      "image/ktx" !== HS && "image/ktx2" !== HS || (SS = ".ktx"), bS.has(SS) || (SS.endsWith(".ies") && XS(".ies", (async () => await gS.e(309).then((() => gS(41791))).then((SS => new SS._IESTextureLoader)))), SS.endsWith(".dds") && XS(".dds", (async () => await gS.e(307).then((() => gS(41800))).then((SS => new SS._DDSTextureLoader)))), SS.endsWith(".basis") && XS(".basis", (async () => await gS.e(310).then((() => gS(41806))).then((SS => new SS._BasisTextureLoader)))), SS.endsWith(".env") && XS(".env", (async () => await Promise.all([gS.e(311), gS.e(308)]).then((() => gS(41814))).then((SS => new SS._ENVTextureLoader)))), SS.endsWith(".hdr") && XS(".hdr", (async () => await gS.e(312).then((() => gS(41874))).then((SS => new SS._HDRTextureLoader)))), (SS.endsWith(".ktx") || SS.endsWith(".ktx2")) && (XS(".ktx", (async () => await gS.e(313).then((() => gS(41881))).then((SS => new SS._KTXTextureLoader)))), XS(".ktx2", (async () => await gS.e(313).then((() => gS(41881))).then((SS => new SS._KTXTextureLoader))))), SS.endsWith(".tga") && XS(".tga", (async () => await gS.e(314).then((() => gS(41894))).then((SS => new SS._TGATextureLoader)))), SS.endsWith(".exr") && XS(".exr", (async () => await gS.e(315).then((() => gS(41898))).then((SS => new SS._ExrTextureLoader)))));
      const tS = bS.get(SS);
      return tS ? Promise.resolve(tS(HS)) : null
    }
  },
  40477: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      d: () => uS
    });
    var tS = gS(40331),
      bS = gS(40077),
      XS = gS(37164);
    class xS extends tS.d {
      get Q8() {
        return this._subMaterials
      }
      set Q8(SS) {
        this._subMaterials = SS, this._hookArray(SS)
      }
      getChildren() {
        return this.Q8
      }
      constructor(SS, HS) {
        super(SS, HS, !0), this._waitingSubMaterialsUniqueIds = [], this.lL().addMultiMaterial(this), this.Q8 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(SS) {
        var HS = this;
        const gS = SS.push;
        SS.push = function() {
          for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
          const xS = gS.apply(SS, bS);
          return HS._markAllSubMeshesAsTexturesDirty(), xS
        };
        const tS = SS.splice;
        SS.splice = (HS, gS) => {
          const bS = tS.call(SS, HS, gS ?? SS.length);
          return this._markAllSubMeshesAsTexturesDirty(), bS
        }
      }
      getSubMaterial(SS) {
        return SS < 0 || SS >= this.Q8.length ? this.lL().defaultMaterial : this.Q8[SS]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Q8.map((SS => SS ? SS.getActiveTextures() : [])))
      }
      hasTexture(SS) {
        if (super.hasTexture(SS)) return !0;
        for (let HS = 0; HS < this.Q8.length; HS++)
          if (this.Q8[HS]?.hasTexture(SS)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(SS, HS, gS) {
        for (let tS = 0; tS < this.Q8.length; tS++) {
          const bS = this.Q8[tS];
          if (bS) {
            if (bS._storeEffectOnSubMeshes) {
              if (!bS.isReadyForSubMesh(SS, HS, gS)) return !1;
              continue
            }
            if (!bS.isReady(SS)) return !1
          }
        }
        return !0
      }
      clone(SS, HS) {
        const gS = new xS(SS, this.lL());
        for (let tS = 0; tS < this.Q8.length; tS++) {
          let bS;
          const XS = this.Q8[tS];
          bS = HS && XS ? XS.clone(SS + "-" + XS.name) : this.Q8[tS], gS.Q8.push(bS)
        }
        return gS
      }
      serialize() {
        const SS = {};
        SS.name = this.name, SS.id = this.id, SS.uniqueId = this.uniqueId, bS.d && (SS.tags = bS.d.GetTags(this)), SS.materialsUniqueIds = [], SS.materials = [];
        for (let HS = 0; HS < this.Q8.length; HS++) {
          const gS = this.Q8[HS];
          gS ? (SS.materialsUniqueIds.push(gS.uniqueId), SS.materials.push(gS.id)) : (SS.materialsUniqueIds.push(null), SS.materials.push(null))
        }
        return SS
      }
      dispose(SS, HS, gS) {
        const tS = this.lL();
        if (!tS) return;
        if (gS)
          for (let XS = 0; XS < this.Q8.length; XS++) {
            const gS = this.Q8[XS];
            gS && gS.dispose(SS, HS)
          }
        const bS = tS.multiMaterials.indexOf(this);
        bS >= 0 && tS.multiMaterials.splice(bS, 1), super.dispose(SS, HS)
      }
    }
    let NS = !1;

    function qS(SS, HS) {
      const gS = new xS(SS.name, HS);
      if (gS.id = SS.id, gS._loadedUniqueId = SS.uniqueId, bS.d && bS.d.AddTagsTo(gS, SS.tags), SS.materialsUniqueIds) gS._waitingSubMaterialsUniqueIds = SS.materialsUniqueIds;
      else
        for (const tS of SS.materials) gS.Q8.push(HS.getLastMaterialById(tS));
      return gS
    }

    function uS() {
      NS || (NS = !0, xS.ParseMultiMaterial = qS, (0, XS.f)("BABYLON.MultiMaterial", xS))
    }
  },
  40264: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS, bS, XS = gS(37117);
    ! function(SS) {
      SS[SS.LOCAL = 0] = "LOCAL", SS[SS.WORLD = 1] = "WORLD", SS[SS.BONE = 2] = "BONE"
    }(tS || (tS = {}));
    class xS {}
    xS.X = new XS.n(1, 0, 0), xS.Y = new XS.n(0, 1, 0), xS.Z = new XS.n(0, 0, 1),
      function(SS) {
        SS[SS.X = 0] = "X", SS[SS.Y = 1] = "Y", SS[SS.Z = 2] = "Z"
      }(bS || (bS = {}))
  },
  40032: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS,
      f: () => uS
    });
    var tS = gS(37117);
    const bS = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      XS = [() => 1, SS => SS.y, SS => SS.z, SS => SS.x, SS => SS.x * SS.y, SS => SS.y * SS.z, SS => 3 * SS.z * SS.z - 1, SS => SS.x * SS.z, SS => SS.x * SS.x - SS.y * SS.y],
      xS = (SS, HS) => bS[SS] * XS[SS](HS),
      NS = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class qS {
      constructor() {
        this.preScaled = !1, this.l00 = tS.n.Zero(), this.l1_1 = tS.n.Zero(), this.l10 = tS.n.Zero(), this.l11 = tS.n.Zero(), this.l2_2 = tS.n.Zero(), this.l2_1 = tS.n.Zero(), this.l20 = tS.n.Zero(), this.l21 = tS.n.Zero(), this.l22 = tS.n.Zero()
      }
      addLight(SS, HS, gS) {
        tS.l.VK[0].set(HS.r, HS.g, HS.b);
        const bS = tS.l.VK[0],
          XS = tS.l.VK[1];
        bS.scaleToRef(gS, XS), XS.scaleToRef(xS(0, SS), tS.l.VK[2]), this.l00.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(1, SS), tS.l.VK[2]), this.l1_1.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(2, SS), tS.l.VK[2]), this.l10.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(3, SS), tS.l.VK[2]), this.l11.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(4, SS), tS.l.VK[2]), this.l2_2.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(5, SS), tS.l.VK[2]), this.l2_1.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(6, SS), tS.l.VK[2]), this.l20.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(7, SS), tS.l.VK[2]), this.l21.addInPlace(tS.l.VK[2]), XS.scaleToRef(xS(8, SS), tS.l.VK[2]), this.l22.addInPlace(tS.l.VK[2])
      }
      scaleInPlace(SS) {
        this.l00.scaleInPlace(SS), this.l1_1.scaleInPlace(SS), this.l10.scaleInPlace(SS), this.l11.scaleInPlace(SS), this.l2_2.scaleInPlace(SS), this.l2_1.scaleInPlace(SS), this.l20.scaleInPlace(SS), this.l21.scaleInPlace(SS), this.l22.scaleInPlace(SS)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(NS[0]), this.l1_1.scaleInPlace(NS[1]), this.l10.scaleInPlace(NS[2]), this.l11.scaleInPlace(NS[3]), this.l2_2.scaleInPlace(NS[4]), this.l2_1.scaleInPlace(NS[5]), this.l20.scaleInPlace(NS[6]), this.l21.scaleInPlace(NS[7]), this.l22.scaleInPlace(NS[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(bS[0]), this.l1_1.scaleInPlace(bS[1]), this.l10.scaleInPlace(bS[2]), this.l11.scaleInPlace(bS[3]), this.l2_2.scaleInPlace(bS[4]), this.l2_1.scaleInPlace(bS[5]), this.l20.scaleInPlace(bS[6]), this.l21.scaleInPlace(bS[7]), this.l22.scaleInPlace(bS[8])
      }
      updateFromArray(SS) {
        return tS.n.FromArrayToRef(SS[0], 0, this.l00), tS.n.FromArrayToRef(SS[1], 0, this.l1_1), tS.n.FromArrayToRef(SS[2], 0, this.l10), tS.n.FromArrayToRef(SS[3], 0, this.l11), tS.n.FromArrayToRef(SS[4], 0, this.l2_2), tS.n.FromArrayToRef(SS[5], 0, this.l2_1), tS.n.FromArrayToRef(SS[6], 0, this.l20), tS.n.FromArrayToRef(SS[7], 0, this.l21), tS.n.FromArrayToRef(SS[8], 0, this.l22), this
      }
      updateFromFloatsArray(SS) {
        return tS.n.FromFloatsToRef(SS[0], SS[1], SS[2], this.l00), tS.n.FromFloatsToRef(SS[3], SS[4], SS[5], this.l1_1), tS.n.FromFloatsToRef(SS[6], SS[7], SS[8], this.l10), tS.n.FromFloatsToRef(SS[9], SS[10], SS[11], this.l11), tS.n.FromFloatsToRef(SS[12], SS[13], SS[14], this.l2_2), tS.n.FromFloatsToRef(SS[15], SS[16], SS[17], this.l2_1), tS.n.FromFloatsToRef(SS[18], SS[19], SS[20], this.l20), tS.n.FromFloatsToRef(SS[21], SS[22], SS[23], this.l21), tS.n.FromFloatsToRef(SS[24], SS[25], SS[26], this.l22), this
      }
      static FromArray(SS) {
        return (new qS).updateFromArray(SS)
      }
      static FromPolynomial(SS) {
        const HS = new qS;
        return HS.l00 = SS.xx.scale(.376127).add(SS.yy.scale(.376127)).add(SS.zz.scale(.376126)), HS.l1_1 = SS.y.scale(.977204), HS.l10 = SS.z.scale(.977204), HS.l11 = SS.x.scale(.977204), HS.l2_2 = SS.xy.scale(1.16538), HS.l2_1 = SS.yz.scale(1.16538), HS.l20 = SS.zz.scale(1.34567).subtract(SS.xx.scale(.672834)).subtract(SS.yy.scale(.672834)), HS.l21 = SS.zx.scale(1.16538), HS.l22 = SS.xx.scale(1.16538).subtract(SS.yy.scale(1.16538)), HS.l1_1.scaleInPlace(-1), HS.l11.scaleInPlace(-1), HS.l2_1.scaleInPlace(-1), HS.l21.scaleInPlace(-1), HS.scaleInPlace(Math.PI), HS
      }
    }
    class uS {
      constructor() {
        this.x = tS.n.Zero(), this.y = tS.n.Zero(), this.z = tS.n.Zero(), this.xx = tS.n.Zero(), this.yy = tS.n.Zero(), this.zz = tS.n.Zero(), this.xy = tS.n.Zero(), this.yz = tS.n.Zero(), this.zx = tS.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = qS.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(SS) {
        tS.l.VK[0].I5(SS.r, SS.g, SS.b);
        const HS = tS.l.VK[0];
        this.xx.addInPlace(HS), this.yy.addInPlace(HS), this.zz.addInPlace(HS)
      }
      scaleInPlace(SS) {
        this.x.scaleInPlace(SS), this.y.scaleInPlace(SS), this.z.scaleInPlace(SS), this.xx.scaleInPlace(SS), this.yy.scaleInPlace(SS), this.zz.scaleInPlace(SS), this.yz.scaleInPlace(SS), this.zx.scaleInPlace(SS), this.xy.scaleInPlace(SS)
      }
      updateFromHarmonics(SS) {
        return this._harmonics = SS, this.x.dJ(SS.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.dJ(SS.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.dJ(SS.l10), this.z.scaleInPlace(1.02333), this.xx.dJ(SS.l00), tS.l.VK[0].dJ(SS.l20).scaleInPlace(.247708), tS.l.VK[1].dJ(SS.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).GtS(tS.l.VK[0]).addInPlace(tS.l.VK[1]), this.yy.dJ(SS.l00), this.yy.scaleInPlace(.886277).GtS(tS.l.VK[0]).GtS(tS.l.VK[1]), this.zz.dJ(SS.l00), tS.l.VK[0].dJ(SS.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(tS.l.VK[0]), this.yz.dJ(SS.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.dJ(SS.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.dJ(SS.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(SS) {
        return (new uS).updateFromHarmonics(SS)
      }
      static FromArray(SS) {
        const HS = new uS;
        return tS.n.FromArrayToRef(SS[0], 0, HS.x), tS.n.FromArrayToRef(SS[1], 0, HS.y), tS.n.FromArrayToRef(SS[2], 0, HS.z), tS.n.FromArrayToRef(SS[3], 0, HS.xx), tS.n.FromArrayToRef(SS[4], 0, HS.yy), tS.n.FromArrayToRef(SS[5], 0, HS.zz), tS.n.FromArrayToRef(SS[6], 0, HS.yz), tS.n.FromArrayToRef(SS[7], 0, HS.zx), tS.n.FromArrayToRef(SS[8], 0, HS.xy), HS
      }
    }
  },
  40468: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => LS,
      c: () => AS
    });
    var tS = gS(40041),
      bS = gS(37144),
      XS = gS(37117),
      xS = gS(40183),
      NS = gS(40449),
      qS = gS(40473),
      uS = gS(40176),
      IS = gS(40346),
      fS = gS(40169);
    class kS {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new XS.n(0, 0, 0), this._diffPositionForCollisions = new XS.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var aS, KS, jS, GS = gS(39926),
      CS = gS(40115),
      nS = gS(40361),
      PS = gS(37300),
      QS = gS(37123),
      DS = gS(40264),
      wS = gS(38687),
      hS = gS(40048),
      ZS = gS(39939),
      JS = gS(37164);

    function OS(SS, HS) {
      return SS - Math.floor(SS / HS) * HS
    }

    function dS(SS, HS, gS) {
      SS instanceof Float32Array ? XS.e.FromArrayToRef(SS, HS, gS) : gS.I5((0, CS.b)(SS[HS]), (0, CS.b)(SS[HS + 1]), (0, CS.b)(SS[HS + 2]), (0, CS.b)(SS[HS + 3]), (0, CS.b)(SS[HS + 4]), (0, CS.b)(SS[HS + 5]), (0, CS.b)(SS[HS + 6]), (0, CS.b)(SS[HS + 7]), (0, CS.b)(SS[HS + 8]), (0, CS.b)(SS[HS + 9]), (0, CS.b)(SS[HS + 10]), (0, CS.b)(SS[HS + 11]), (0, CS.b)(SS[HS + 12]), (0, CS.b)(SS[HS + 13]), (0, CS.b)(SS[HS + 14]), (0, CS.b)(SS[HS + 15]))
    }

    function cS(SS, HS, gS, tS, bS, NS, qS, uS, IS) {
      const fS = gS.texture,
        kS = fS?.getInternalTexture(),
        aS = kS?._bufferView;
      if (!(aS instanceof Float32Array) && !(aS instanceof Uint16Array)) return wS.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const KS = fS.getSize(),
        jS = function(SS, HS) {
          const gS = SS.y - SS.x + 1,
            tS = HS * SS.w / gS,
            bS = tS < 1 ? 0 : 1,
            XS = gS - bS;
          let xS = OS(tS - Math.floor(tS), 1) * XS;
          return xS = OS(xS + SS.z, XS), Math.floor(xS) + SS.x + bS
        }(tS, gS.time);
      if (!isFinite(jS) || jS < 0 || jS >= KS.height) return wS.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const GS = XS.l.VK[0],
        CS = XS.l.Matrix[0],
        nS = XS.l.Matrix[1],
        PS = jS * KS.width * 4,
        QS = HS === xS.h.NormalKind ? XS.n.TransformNormalFromFloatsToRef : XS.n.TransformCoordinatesFromFloatsToRef;
      for (let XS = 0, xS = 0; XS < SS.length; XS += 3, xS += 4) {
        let HS, gS;
        for (CS.reset(), HS = 0; HS < 4 && HS < IS; HS++) gS = NS[xS + HS], gS > 0 && (dS(aS, PS + 16 * Math.floor(bS[xS + HS]), nS), nS.scaleAndAddToRef(gS, CS));
        if (qS && uS)
          for (HS = 0; HS < 4 && HS + 4 < IS; HS++) gS = uS[xS + HS], gS > 0 && (dS(aS, PS + 16 * Math.floor(qS[xS + HS]), nS), nS.scaleAndAddToRef(gS, CS));
        QS(SS[XS], SS[XS + 1], SS[XS + 2], CS, GS), GS.toArray(SS, XS)
      }
      return !0
    }
    class vS {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = XS.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class ES {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new vS, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new kS, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let LS = (() => {
        var SS;
        let HS, kS = qS.f,
          aS = [];
        return SS = class extends kS {
          static get BILLBOARDMODE_NONE() {
            return qS.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return qS.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return qS.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return qS.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return qS.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return qS.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(SS) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = SS
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(SS) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = SS
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(SS) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = SS
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(SS) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = SS
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(SS) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = SS
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(SS) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== SS && (this._internalAbstractMeshDataInfo._morphTargetManager = SS, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(SS) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== SS && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = SS, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(SS) {
            return !!super._updateNonUniformScalingState(SS) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(SS) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = SS
          }
          set ak(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(SS)
          }
          set onCollisionPositionChange(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(SS)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(SS) {
            if (this._internalAbstractMeshDataInfo._visibility === SS) return;
            const HS = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = SS, (1 === HS && 1 !== SS || 1 !== HS && 1 === SS) && this._markSubMeshesAsDirty((SS => {
              SS.markAsMiscDirty(), SS.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(SS) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = SS
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(SS) {
            this._internalAbstractMeshDataInfo._renderingGroupId = SS
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(SS) {
            if (!Number.isInteger(SS) || SS < 0 || SS > 255 || 0 !== SS && 0 === (63 & SS)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = SS
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(SS) {
            this._setMaterial(SS)
          }
          _setMaterial(SS) {
            this._internalAbstractMeshDataInfo._material !== SS && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = SS, SS && SS.meshMap && (SS.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.dD && (this.resetDrawCache(void 0, null == SS), this._unBindEffect()))
          }
          getMaterialForRenderPass(SS) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[SS]
          }
          setMaterialForRenderPass(SS, HS) {
            this.resetDrawCache(SS), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const gS = this._internalAbstractMeshDataInfo._materialForRenderPass[SS];
            gS?.meshMap?.[this.uniqueId] && (gS.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[SS] = HS, HS && HS.meshMap && (HS.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(SS) {
            this._internalAbstractMeshDataInfo._receiveShadows !== SS && (this._internalAbstractMeshDataInfo._receiveShadows = SS, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(SS) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== SS && (this._internalAbstractMeshDataInfo._hasVertexAlpha = SS, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(SS) {
            this._internalAbstractMeshDataInfo._useVertexColors !== SS && (this._internalAbstractMeshDataInfo._useVertexColors = SS, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(SS) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== SS && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = SS, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(SS) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== SS && (this._internalAbstractMeshDataInfo._numBoneInfluencers = SS, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(SS) {
            this._internalAbstractMeshDataInfo._applyFog !== SS && (this._internalAbstractMeshDataInfo._applyFog = SS, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(SS) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = SS
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(SS) {
            SS !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = SS, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(SS) ? -1 : SS
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = SS
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(SS) ? -1 : SS
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = SS
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(SS) {
            const HS = this._internalAbstractMeshDataInfo._skeleton;
            HS && HS.needInitialSkinMatrix && HS._unregisterMeshWithPoseMatrix(this), SS && SS.needInitialSkinMatrix && SS._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = SS, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(HS) {
            var gS;
            let tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(HS, tS, !1), gS = this, this._internalAbstractMeshDataInfo = new ES, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = SS.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new bS.e, this.onCollisionPositionChangeObservable = new bS.e, this.onMaterialChangedObservable = new bS.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Fj = SS.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = PS.b.Red(), this.outlineWidth = .02, this.overlayColor = PS.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.yK = !1, this.WK = !1, this.actionManager = null, this.ellipsoid = new XS.n(.5, 1, .5), this.ellipsoidOffset = new XS.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new PS.c(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                aY: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new bS.e, this._onCollisionPositionChange = function(SS, HS) {
                let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                HS.subtractToRef(gS._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, gS._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), gS._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > ZS.b.CollisionsEpsilon && gS.position.addInPlace(gS._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), tS && gS.onCollideObservable.notifyObservers(tS), gS.onCollisionPositionChangeObservable.notifyObservers(gS.position)
              }, tS = this.lL(), this.layerMask = tS.defaultRenderableLayerMask, tS.egS(this), this._resyncLightSources(), this._uniformBuffer = new fS.c(this.lL().AK(), void 0, void 0, HS, !this.lL().AK().isWebGPU), this._buildUniformLayout(), tS.performancePriority) {
              case 2:
                this.WK = !0;
              case 1:
                this.yK = !0, this.Fj = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(SS) {
            const HS = this._uniformBuffer;
            HS.J7("world", SS), HS.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), HS.update()
          }
          getMeshUniformBuffer() {
            return this._uniformBuffer
          }
          get _isGaussianSplatting() {
            return !1
          }
          getClassName() {
            return "AbstractMesh"
          }
          toString(SS) {
            let HS = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            HS += ", # of submeshes: " + (this.dD ? this.dD.length : 0);
            const gS = this._internalAbstractMeshDataInfo._skeleton;
            return gS && (HS += ", skeleton: " + gS.name), SS && (HS += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], HS += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.aY ? "YES" : "NO")), HS
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== qS.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(SS) {
            let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (HS || this.actionManager.isRecursive)) {
              if (!SS) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(SS)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(SS, !1) : null
          }
          _releaseRenderPassId(SS) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.dD) {
              for (const SS of this.dD) SS._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const SS of this.lL().lights) SS.isEnabled() && SS.canAffectMesh(this) && this._lightSources.push(SS);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(SS) {
            const HS = SS.isEnabled() && SS.canAffectMesh(this),
              gS = this._lightSources.indexOf(SS);
            let tS = !1;
            if (-1 === gS) {
              if (!HS) return;
              this._lightSources.push(SS)
            } else {
              if (HS) return;
              tS = !0, this._lightSources.splice(gS, 1)
            }
            this._markSubMeshesAsLightDirty(tS)
          }
          _unBindEffect() {
            for (const SS of this.dD) SS.setEffect(null)
          }
          _removeLightSource(SS, HS) {
            const gS = this._lightSources.indexOf(SS); - 1 !== gS && (this._lightSources.splice(gS, 1), this._markSubMeshesAsLightDirty(HS))
          }
          _markSubMeshesAsDirty(SS) {
            if (this.dD)
              for (const HS of this.dD)
                for (let gS = 0; gS < HS._drawWrappers.length; ++gS) {
                  const tS = HS._drawWrappers[gS];
                  tS && tS.defines && tS.defines.markAllAsDirty && SS(tS.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((HS => HS.markAsLightDirty(SS)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((SS => SS.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((SS => SS.markAsMiscDirty()))
          }
          OHS(SS) {
            return this._currentRenderId = Number.MAX_VALUE, super.OHS(SS), this._isDirty = !0, this
          }
          resetDrawCache(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.dD)
              for (const gS of this.dD) gS.resetDrawCache(SS, HS)
          }
          get isBlocked() {
            return !1
          }
          getLOD(SS) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          mgS() {
            return null
          }
          getVerticesData(SS) {
            return null
          }
          setVerticesData(SS, HS, gS, tS) {
            return this
          }
          updateVerticesData(SS, HS, gS, tS) {
            return this
          }
          setIndices(SS, HS) {
            return this
          }
          isVerticesDataPresent(SS) {
            return !1
          }
          hA() {
            return this._masterMesh ? this._masterMesh.hA() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.hA()
          }
          setBoundingInfo(SS) {
            return this._boundingInfo = SS, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(SS, HS, gS) {
            return this._boundingInfo = new IS.e(SS, HS, gS), this._boundingInfo
          }
          normalizeToUnitCube() {
            let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(SS, HS, gS)
          }
          get useBones() {
            return this.skeleton && this.lL().skeletonsEnabled && this.isVerticesDataPresent(xS.h.MatricesIndicesKind) && this.isVerticesDataPresent(xS.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(SS) {}
          _activate(SS, HS) {
            return this._renderId = SS, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === qS.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get qY() {
            return !1
          }
          get BtS() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(SS, HS, gS) {
            return this.position.addInPlace(this.calcMovePOV(SS, HS, gS)), this
          }
          calcMovePOV(SS, HS, gS) {
            const tS = new XS.e;
            (this.rotationQuaternion ? this.rotationQuaternion : XS.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(tS);
            const bS = XS.n.Zero(),
              xS = this.definedFacingForward ? -1 : 1;
            return XS.n.TransformCoordinatesFromFloatsToRef(SS * xS, HS, gS * xS, tS, bS), bS
          }
          rotatePOV(SS, HS, gS) {
            return this.rotation.addInPlace(this.calcRotatePOV(SS, HS, gS)), this
          }
          calcRotatePOV(SS, HS, gS) {
            const tS = this.definedFacingForward ? 1 : -1;
            return new XS.n(SS * tS, HS, gS * tS)
          }
          _refreshBoundingInfo(SS, HS) {
            if (SS) {
              const gS = (0, nS.f)(SS, 0, this.getTotalVertices(), HS);
              this._boundingInfo ? this._boundingInfo.reConstruct(gS.minimum, gS.maximum) : this._boundingInfo = new IS.e(gS.minimum, gS.maximum)
            }
            if (this.dD)
              for (let gS = 0; gS < this.dD.length; gS++) this.dD[gS].refreshBoundingInfo(SS);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(SS) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(SS.minimum, SS.maximum) : this._boundingInfo = new IS.e(SS.minimum, SS.maximum), this.dD)
              for (let HS = 0; HS < this.dD.length; HS++) this.dD[HS].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(SS, HS, gS, tS, bS, NS, qS) {
            ! function(SS, HS, gS, tS, bS, NS, qS) {
              const uS = XS.l.VK[0],
                IS = XS.l.Matrix[0],
                fS = XS.l.Matrix[1],
                kS = HS === xS.h.NormalKind ? XS.n.TransformNormalFromFloatsToRef : XS.n.TransformCoordinatesFromFloatsToRef;
              for (let xS = 0, aS = 0; xS < SS.length; xS += 3, aS += 4) {
                let HS, KS;
                for (IS.reset(), HS = 0; HS < 4; HS++) KS = bS[aS + HS], KS > 0 && (XS.e.FromFloat32ArrayToRefScaled(gS, Math.floor(16 * tS[aS + HS]), KS, fS), IS.addToSelf(fS));
                if (NS && qS)
                  for (HS = 0; HS < 4; HS++) KS = qS[aS + HS], KS > 0 && (XS.e.FromFloat32ArrayToRefScaled(gS, Math.floor(16 * NS[aS + HS]), KS, fS), IS.addToSelf(fS));
                kS(SS[xS], SS[xS + 1], SS[xS + 2], IS, uS), uS.toArray(SS, xS)
              }
            }(SS, HS, gS, tS, bS, NS, qS)
          }
          _getData(HS, gS) {
            let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xS.h.PositionKind;
            const bS = HS.cache,
              NS = SS => {
                if (bS) {
                  const HS = bS._vertexData || (bS._vertexData = {});
                  return HS[SS] || this.copyVerticesData(SS, HS), HS[SS]
                }
                return this.getVerticesData(SS)
              };
            if (gS || (gS = NS(tS)), !gS) return null;
            bS ? (bS._outputData ? bS._outputData.set(gS) : bS._outputData = new Float32Array(gS), gS = bS._outputData) : (HS.applyMorph && this.morphTargetManager || HS.applySkeleton && this.skeleton || HS.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (gS = gS.slice()), HS.applyMorph && this.morphTargetManager && function(SS, HS, gS) {
              let tS;
              switch (HS) {
                case xS.h.PositionKind:
                  tS = SS => SS.getPositions();
                  break;
                case xS.h.NormalKind:
                  tS = SS => SS.getNormals();
                  break;
                case xS.h.TangentKind:
                  tS = SS => SS.getTangents();
                  break;
                case xS.h.UVKind:
                  tS = SS => SS.getUVs();
                  break;
                case xS.h.UV2Kind:
                  tS = SS => SS.getUV2s();
                  break;
                case xS.h.ColorKind:
                  tS = SS => SS.getColors();
                  break;
                default:
                  return
              }
              for (let bS = 0; bS < SS.length; bS++) {
                let HS = SS[bS];
                for (let XS = 0; XS < gS.numTargets; XS++) {
                  const xS = gS.getTarget(XS),
                    NS = xS.influence;
                  if (0 !== NS) {
                    const gS = tS(xS);
                    gS && (HS += (gS[bS] - SS[bS]) * NS)
                  }
                }
                SS[bS] = HS
              }
            }(gS, tS, this.morphTargetManager);
            const qS = this.bakedVertexAnimationManager;
            let uS = !1;
            if (HS.applyBakedVertexAnimation && qS?.isEnabled) {
              const SS = NS(xS.h.MatricesIndicesKind),
                bS = NS(xS.h.MatricesWeightsKind);
              if (bS && SS) {
                const XS = this.numBoneInfluencers > 4,
                  IS = XS ? NS(xS.h.MatricesIndicesExtraKind) : null,
                  fS = XS ? NS(xS.h.MatricesWeightsExtraKind) : null;
                uS = cS(gS, tS, qS, HS.bakedVertexAnimationSettings ?? qS.animationParameters, SS, bS, IS, fS, this.numBoneInfluencers)
              }
            }
            if (!uS && HS.applySkeleton && this.skeleton) {
              const HS = NS(xS.h.MatricesIndicesKind),
                bS = NS(xS.h.MatricesWeightsKind);
              if (bS && HS) {
                const XS = this.numBoneInfluencers > 4,
                  qS = XS ? NS(xS.h.MatricesIndicesExtraKind) : null,
                  uS = XS ? NS(xS.h.MatricesWeightsExtraKind) : null,
                  IS = this.skeleton.getTransformMatrices(this);
                SS._ApplySkeleton(gS, tS, IS, HS, bS, qS, uS)
              }
            }
            if (!1 !== HS.updatePositionsArray && tS === xS.h.PositionKind) {
              const SS = this._internalAbstractMeshDataInfo._positions || [],
                HS = SS.length;
              if (SS.length = gS.length / 3, HS < SS.length)
                for (let gS = HS; gS < SS.length; gS++) SS[gS] = new XS.n;
              for (let tS = 0, bS = 0; tS < SS.length; tS++, bS += 3) SS[tS].I5(gS[bS], gS[bS + 1], gS[bS + 2]);
              this._internalAbstractMeshDataInfo._positions = SS
            }
            return gS
          }
          getNormalsData() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: SS,
              applyMorph: HS,
              updatePositionsArray: !1
            }, null, xS.h.NormalKind)
          }
          zB() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: SS,
              applyMorph: HS,
              updatePositionsArray: !1
            }, gS, xS.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new IS.e(XS.n.Zero(), XS.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(SS) {
            if (!this.dD) return this;
            const HS = this.dD.length;
            for (let gS = 0; gS < HS; gS++) {
              const tS = this.dD[gS];
              (HS > 1 || !tS.IsGlobal) && tS.updateBoundingInfo(SS)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.WK || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(SS) {
            return this.hA().isInFrustum(SS, this.cullingStrategy)
          }
          isCompletelyInFrustum(SS) {
            return this.hA().isCompletelyInFrustum(SS)
          }
          itS(SS) {
            let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gS = arguments.length > 2 ? arguments[2] : void 0;
            const tS = this.hA(),
              bS = SS.hA();
            if (tS.intersects(bS, HS)) return !0;
            if (gS)
              for (const XS of this.getChildMeshes())
                if (XS.itS(SS, HS, !0)) return !0;
            return !1
          }
          intersectsPoint(SS) {
            return this.hA().intersectsPoint(SS)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(SS) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = SS
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(SS) {
            let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const gS = this.lL().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = gS.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, gS.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, SS, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, HS), this
          }
          _collideForSubMesh(SS, HS, gS) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!SS._lastColliderWorldVertices || !SS._lastColliderTransformMatrix.equals(HS)) {
              SS._lastColliderTransformMatrix = HS.clone(), SS._lastColliderWorldVertices = [], SS._trianglePlanes = [];
              const gS = SS.verticesStart,
                tS = SS.verticesStart + SS.verticesCount;
              for (let bS = gS; bS < tS; bS++) SS._lastColliderWorldVertices.push(XS.n.TransformCoordinates(this._positions[bS], HS))
            }
            return gS._collide(SS._trianglePlanes, SS._lastColliderWorldVertices, this.mgS(), SS.indexStart, SS.indexStart + SS.indexCount, SS.verticesStart, !!SS.zK(), this, this._shouldConvertRHS(), 7 === SS.zK()?.fillMode), this
          }
          _processCollisionsForSubMeshes(SS, HS) {
            const gS = this._scene.getCollidingSubMeshCandidates(this, SS),
              tS = gS.length;
            for (let bS = 0; bS < tS; bS++) {
              const XS = gS.data[bS];
              tS > 1 && !XS._checkCollision(SS) || this._collideForSubMesh(XS, HS, SS)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(SS) {
            if (!this.hA()._checkCollision(SS)) return this;
            const HS = XS.l.Matrix[0],
              gS = XS.l.Matrix[1];
            return XS.e.ScalingToRef(1 / SS._radius.x, 1 / SS._radius.y, 1 / SS._radius.z, HS), this.worldMatrixFromCache.multiplyToRef(HS, gS), this._processCollisionsForSubMeshes(SS, gS), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(SS, HS, gS) {
            let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              bS = arguments.length > 4 ? arguments[4] : void 0,
              xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const NS = new uS.c,
              qS = this.getClassName(),
              IS = "InstancedLinesMesh" === qS || "LinesMesh" === qS || "GreasedLineMesh" === qS ? this.intersectionThreshold : 0,
              fS = this.hA();
            if (!this.dD) return NS;
            if (!xS && (!SS.intersectsSphere(fS.QtS, IS) || !SS.intersectsBox(fS.boundingBox, IS))) return NS;
            if (tS) return NS.hit = !xS, NS.pickedMesh = xS ? null : this, NS.distance = xS ? 0 : XS.n.Distance(SS.origin, fS.QtS.center), NS.subMeshId = 0, NS;
            if (!this._generatePointsArray()) return NS;
            let kS = null;
            const aS = this._scene.getIntersectingSubMeshCandidates(this, SS),
              KS = aS.length;
            let jS = !1;
            for (let XS = 0; XS < KS; XS++) {
              const SS = aS.data[XS].zK();
              if (SS && (7 == SS.fillMode || 0 == SS.fillMode || 1 == SS.fillMode || 2 == SS.fillMode || 4 == SS.fillMode)) {
                jS = !0;
                break
              }
            }
            if (!jS) return NS.hit = !0, NS.pickedMesh = this, NS.distance = XS.n.Distance(SS.origin, fS.QtS.center), NS.subMeshId = -1, NS;
            for (let XS = 0; XS < KS; XS++) {
              const tS = aS.data[XS];
              if (KS > 1 && !xS && !tS.canIntersects(SS)) continue;
              const bS = tS.intersects(SS, this._positions, this.mgS(), HS, gS);
              if (bS && (HS || !kS || bS.distance < kS.distance) && (kS = bS, kS.subMeshId = tS._id, kS._internalSubMeshId = XS, HS)) break
            }
            if (kS) {
              const HS = bS ?? this.getWorldMatrix(),
                gS = XS.l.VK[0],
                tS = XS.l.VK[1];
              XS.n.TransformCoordinatesToRef(SS.origin, HS, gS), SS.direction.scaleToRef(kS.distance, tS);
              const xS = XS.n.TransformNormal(tS, HS).addInPlace(gS);
              return NS.hit = !0, NS.distance = XS.n.Distance(gS, xS), NS.pickedPoint = xS, NS.pickedMesh = this, NS.bu = kS.bu || 0, NS.bv = kS.bv || 0, NS.subMeshFaceId = kS.faceId, NS.faceId = kS.faceId + aS.data[kS._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), NS.subMeshId = kS.subMeshId, NS
            }
            return NS
          }
          clone(SS, HS, gS) {
            return null
          }
          releaseSubMeshes() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.dD)
              for (; this.dD.length;) this.dD[0].dispose(SS);
            else this.dD = [];
            return this
          }
          dispose(SS) {
            let HS, gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const tS = this.lL();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), tS.freeActiveMeshes(), tS.freeRenderingGroups(), tS.renderingManager.maintainStateBetweenFrames && tS.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((SS => SS !== this && SS.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), HS = 0; HS < this._intersectionsInProgress.length; HS++) {
              const SS = this._intersectionsInProgress[HS],
                gS = SS._intersectionsInProgress.indexOf(this);
              SS._intersectionsInProgress.splice(gS, 1)
            }
            this._intersectionsInProgress.length = 0;
            const bS = tS.lights;
            for (const xS of bS) {
              let SS = xS.includedOnlyMeshes.indexOf(this); - 1 !== SS && xS.includedOnlyMeshes.splice(SS, 1), SS = xS.excludedMeshes.indexOf(this), -1 !== SS && xS.excludedMeshes.splice(SS, 1);
              const HS = xS.getShadowGenerators();
              if (HS) {
                const gS = HS.values();
                for (let HS = gS.next(); !0 !== HS.done; HS = gS.next()) {
                  const gS = HS.value.getShadowMap();
                  gS && gS.renderList && (SS = gS.renderList.indexOf(this), -1 !== SS && gS.renderList.splice(SS, 1))
                }
              }
            }
            this.releaseSubMeshes(tS._isDisposing);
            const XS = tS.AK();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, XS.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), XS.wipeCaches(), tS.ZY(this), this._parentContainer) {
              const SS = this._parentContainer.meshes.indexOf(this);
              SS > -1 && this._parentContainer.meshes.splice(SS, 1), this._parentContainer = null
            }
            if (gS && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !SS)
              for (HS = 0; HS < tS.zD.length; HS++) tS.zD[HS].emitter === this && (tS.zD[HS].dispose(), HS--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(SS, gS)
          }
          _initFacetData() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            SS.facetNormals || (SS.facetNormals = []), SS.facetPositions || (SS.facetPositions = []), SS.facetPartitioning || (SS.facetPartitioning = new Array), SS.facetNb = this.mgS().length / 3 | 0, SS.partitioningSubdivisions = SS.partitioningSubdivisions ? SS.partitioningSubdivisions : 10, SS.partitioningBBoxRatio = SS.partitioningBBoxRatio ? SS.partitioningBBoxRatio : 1.01;
            for (let HS = 0; HS < SS.facetNb; HS++) SS.facetNormals[HS] = XS.n.Zero(), SS.facetPositions[HS] = XS.n.Zero();
            return SS.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            SS.facetDataEnabled || this._initFacetData();
            const HS = this.getVerticesData(xS.h.PositionKind),
              gS = this.mgS(),
              tS = this.getVerticesData(xS.h.NormalKind)?.slice(),
              bS = this.hA();
            if (SS.facetDepthSort && !SS.facetDepthSortEnabled) {
              if (SS.facetDepthSortEnabled = !0, gS instanceof Uint16Array) SS.depthSortedIndices = new Uint16Array(gS);
              else if (gS instanceof Uint32Array) SS.depthSortedIndices = new Uint32Array(gS);
              else {
                let HS = !1;
                for (let SS = 0; SS < gS.length; SS++)
                  if (gS[SS] > 65535) {
                    HS = !0;
                    break
                  } SS.depthSortedIndices = HS ? new Uint32Array(gS) : new Uint16Array(gS)
              }
              if (SS.facetDepthSortFunction = function(SS, HS) {
                  return HS.sqDistance - SS.sqDistance
                }, !SS.facetDepthSortFrom) {
                const HS = this.lL().activeCamera;
                SS.facetDepthSortFrom = HS ? HS.position : XS.n.Zero()
              }
              SS.depthSortedFacets = [];
              for (let HS = 0; HS < SS.facetNb; HS++) {
                const gS = {
                  ind: 3 * HS,
                  sqDistance: 0
                };
                SS.depthSortedFacets.push(gS)
              }
              SS.invertedMatrix = XS.e.Identity(), SS.facetDepthSortOrigin = XS.n.Zero()
            }
            SS.bbSize.x = bS.maximum.x - bS.minimum.x > QS.d ? bS.maximum.x - bS.minimum.x : QS.d, SS.bbSize.y = bS.maximum.y - bS.minimum.y > QS.d ? bS.maximum.y - bS.minimum.y : QS.d, SS.bbSize.z = bS.maximum.z - bS.minimum.z > QS.d ? bS.maximum.z - bS.minimum.z : QS.d;
            let qS = SS.bbSize.x > SS.bbSize.y ? SS.bbSize.x : SS.bbSize.y;
            if (qS = qS > SS.bbSize.z ? qS : SS.bbSize.z, SS.subDiv.max = SS.partitioningSubdivisions, SS.subDiv.X = Math.floor(SS.subDiv.max * SS.bbSize.x / qS), SS.subDiv.Y = Math.floor(SS.subDiv.max * SS.bbSize.y / qS), SS.subDiv.Z = Math.floor(SS.subDiv.max * SS.bbSize.z / qS), SS.subDiv.X = SS.subDiv.X < 1 ? 1 : SS.subDiv.X, SS.subDiv.Y = SS.subDiv.Y < 1 ? 1 : SS.subDiv.Y, SS.subDiv.Z = SS.subDiv.Z < 1 ? 1 : SS.subDiv.Z, SS.facetParameters.facetNormals = this.getFacetLocalNormals(), SS.facetParameters.facetPositions = this.getFacetLocalPositions(), SS.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), SS.facetParameters.bInfo = bS, SS.facetParameters.bbSize = SS.bbSize, SS.facetParameters.subDiv = SS.subDiv, SS.facetParameters.ratio = this.partitioningBBoxRatio, SS.facetParameters.depthSort = SS.facetDepthSort, SS.facetDepthSort && SS.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(SS.invertedMatrix), XS.n.TransformCoordinatesToRef(SS.facetDepthSortFrom, SS.invertedMatrix, SS.facetDepthSortOrigin), SS.facetParameters.distanceTo = SS.facetDepthSortOrigin), SS.facetParameters.depthSortedFacets = SS.depthSortedFacets, tS && NS.e.ComputeNormals(HS, gS, tS, SS.facetParameters), SS.facetDepthSort && SS.facetDepthSortEnabled) {
              SS.depthSortedFacets.sort(SS.facetDepthSortFunction);
              const HS = SS.depthSortedIndices.length / 3 | 0;
              for (let tS = 0; tS < HS; tS++) {
                const HS = SS.depthSortedFacets[tS].ind;
                SS.depthSortedIndices[3 * tS] = gS[HS], SS.depthSortedIndices[3 * tS + 1] = gS[HS + 1], SS.depthSortedIndices[3 * tS + 2] = gS[HS + 2]
              }
              this.updateIndices(SS.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            return SS.facetNormals || this.updateFacetData(), SS.facetNormals
          }
          getFacetLocalPositions() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            return SS.facetPositions || this.updateFacetData(), SS.facetPositions
          }
          getFacetLocalPartitioning() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            return SS.facetPartitioning || this.updateFacetData(), SS.facetPartitioning
          }
          getFacetPosition(SS) {
            const HS = XS.n.Zero();
            return this.getFacetPositionToRef(SS, HS), HS
          }
          getFacetPositionToRef(SS, HS) {
            const gS = this.getFacetLocalPositions()[SS],
              tS = this.getWorldMatrix();
            return XS.n.TransformCoordinatesToRef(gS, tS, HS), this
          }
          getFacetNormal(SS) {
            const HS = XS.n.Zero();
            return this.getFacetNormalToRef(SS, HS), HS
          }
          getFacetNormalToRef(SS, HS) {
            const gS = this.getFacetLocalNormals()[SS];
            return XS.n.TransformNormalToRef(gS, this.getWorldMatrix(), HS), this
          }
          getFacetsAtLocalCoordinates(SS, HS, gS) {
            const tS = this.hA(),
              bS = this._internalAbstractMeshDataInfo._facetData,
              XS = Math.floor((SS - tS.minimum.x * bS.partitioningBBoxRatio) * bS.subDiv.X * bS.partitioningBBoxRatio / bS.bbSize.x),
              xS = Math.floor((HS - tS.minimum.y * bS.partitioningBBoxRatio) * bS.subDiv.Y * bS.partitioningBBoxRatio / bS.bbSize.y),
              NS = Math.floor((gS - tS.minimum.z * bS.partitioningBBoxRatio) * bS.subDiv.Z * bS.partitioningBBoxRatio / bS.bbSize.z);
            return XS < 0 || XS > bS.subDiv.max || xS < 0 || xS > bS.subDiv.max || NS < 0 || NS > bS.subDiv.max ? null : bS.facetPartitioning[XS + bS.subDiv.max * xS + bS.subDiv.max * bS.subDiv.max * NS]
          }
          getClosestFacetAtCoordinates(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const NS = this.getWorldMatrix(),
              qS = XS.l.Matrix[5];
            NS.invertToRef(qS);
            const uS = XS.l.VK[8];
            XS.n.TransformCoordinatesFromFloatsToRef(SS, HS, gS, qS, uS);
            const IS = this.getClosestFacetAtLocalCoordinates(uS.x, uS.y, uS.z, tS, bS, xS);
            return tS && XS.n.TransformCoordinatesFromFloatsToRef(tS.x, tS.y, tS.z, NS, tS), IS
          }
          getClosestFacetAtLocalCoordinates(SS, HS, gS, tS) {
            let bS, XS, xS, NS, qS, uS, IS, fS, kS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              aS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              KS = null;
            const jS = this.getFacetLocalPositions(),
              GS = this.getFacetLocalNormals(),
              CS = this.getFacetsAtLocalCoordinates(SS, HS, gS);
            if (!CS) return null;
            let nS, PS, QS, DS, wS = Number.MAX_VALUE;
            for (let hS = 0; hS < CS.length; hS++) PS = CS[hS], QS = GS[PS], DS = jS[PS], NS = (SS - DS.x) * QS.x + (HS - DS.y) * QS.y + (gS - DS.z) * QS.z, (!kS || kS && aS && NS >= 0 || kS && !aS && NS <= 0) && (NS = QS.x * DS.x + QS.y * DS.y + QS.z * DS.z, qS = -(QS.x * SS + QS.y * HS + QS.z * gS - NS) / (QS.x * QS.x + QS.y * QS.y + QS.z * QS.z), uS = SS + QS.x * qS, IS = HS + QS.y * qS, fS = gS + QS.z * qS, bS = uS - SS, XS = IS - HS, xS = fS - gS, nS = bS * bS + XS * XS + xS * xS, nS < wS && (wS = nS, KS = PS, tS && (tS.x = uS, tS.y = IS, tS.z = fS)));
            return KS
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const SS = this._internalAbstractMeshDataInfo._facetData;
            return SS.facetDataEnabled && (SS.facetDataEnabled = !1, SS.facetPositions = [], SS.facetNormals = [], SS.facetPartitioning = new Array, SS.facetParameters = {}, SS.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(SS, HS) {
            return this
          }
          createNormals(SS) {
            const HS = this.getVerticesData(xS.h.PositionKind),
              gS = this.mgS();
            let tS;
            return tS = this.isVerticesDataPresent(xS.h.NormalKind) ? this.getVerticesData(xS.h.NormalKind) : [], NS.e.ComputeNormals(HS, gS, tS, {
              useRightHandedSystem: this.lL().useRightHandedSystem
            }), this.setVerticesData(xS.h.NormalKind, tS, SS), this
          }
          async optimizeIndicesAsync() {
            const SS = this.mgS();
            if (!SS) return this;
            const {
              OptimizeIndices: HS
            } = await gS.e(351).then((() => gS(42561)));
            return HS(SS), this.setIndices(SS, this.getTotalVertices()), this
          }
          alignWithNormal(SS, HS) {
            HS || (HS = DS.b.Y);
            const gS = XS.l.VK[0],
              tS = XS.l.VK[1];
            return XS.n.CrossToRef(HS, SS, tS), XS.n.CrossToRef(SS, tS, gS), this.rotationQuaternion ? XS.i.RotationQuaternionFromAxisToRef(gS, SS, tS, this.rotationQuaternion) : XS.n.RotationFromAxisToRef(gS, SS, tS, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, GS.l)("EdgesRenderer")
          }
          enableEdgesRendering(SS, HS, gS) {
            throw (0, GS.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.zD.filter((SS => SS.emitter === this))
          }
        }, (() => {
          const gS = "function" === typeof Symbol && Symbol.metadata ? Object.create(kS[Symbol.metadata] ?? null) : void 0;
          HS = [hS.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, tS.j)(SS, null, HS, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: SS => "_ApplySkeleton" in SS,
              get: SS => SS._ApplySkeleton
            },
            metadata: gS
          }, null, aS), gS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gS
          })
        })(), SS.OCCLUSION_TYPE_NONE = ((0, tS.k)(SS, aS), 0), SS.OCCLUSION_TYPE_OPTIMISTIC = 1, SS.OCCLUSION_TYPE_STRICT = 2, SS.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, SS.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, SS.CULLINGSTRATEGY_STANDARD = 0, SS.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, SS.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, SS.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, SS.DefaultIsPickable = !0, SS
      })(),
      YS = !1;

    function AS() {
      YS || (YS = !0, (0, JS.f)("BABYLON.AbstractMesh", LS))
    }(aS = LS.prototype).createOrUpdateSubmeshesOctree ?? (aS.createOrUpdateSubmeshesOctree = (0, GS.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (KS = LS.prototype).getPhysicsImpostor ?? (KS.getPhysicsImpostor = (0, GS.i)("AbstractMesh", "getPhysicsImpostor")), (jS = LS.prototype).setPhysicsLinkWith ?? (jS.setPhysicsLinkWith = (0, GS.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(LS.prototype, "occlusionRetryCount") || Object.defineProperty(LS.prototype, "occlusionRetryCount", (0, GS.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(LS.prototype, "occlusionType") || Object.defineProperty(LS.prototype, "occlusionType", (0, GS.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(LS.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(LS.prototype, "occlusionQueryAlgorithmType", (0, GS.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(LS.prototype, "isOccluded") || Object.defineProperty(LS.prototype, "isOccluded", (0, GS.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(LS.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(LS.prototype, "isOcclusionQueryInProgress", (0, GS.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(LS.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(LS.prototype, "forceRenderingWhenOccluded", (0, GS.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(LS.prototype, "occlusionForRenderPassId") || Object.defineProperty(LS.prototype, "occlusionForRenderPassId", (0, GS.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(LS.prototype, "decalMap") || Object.defineProperty(LS.prototype, "decalMap", (0, GS.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(LS.prototype, "mY") || Object.defineProperty(LS.prototype, "mY", (0, GS.f)("AbstractMesh", "mY")), Object.getOwnPropertyDescriptor(LS.prototype, "physicsImpostor") || Object.defineProperty(LS.prototype, "physicsImpostor", (0, GS.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(LS.prototype, "showBoundingBox") || Object.defineProperty(LS.prototype, "showBoundingBox", (0, GS.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(LS.prototype, "edgesRenderer") || Object.defineProperty(LS.prototype, "edgesRenderer", (0, GS.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(LS.prototype, "renderOutline") || Object.defineProperty(LS.prototype, "renderOutline", (0, GS.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(LS.prototype, "renderOverlay") || Object.defineProperty(LS.prototype, "renderOverlay", (0, GS.f)("AbstractMesh", "renderOverlay"))
  },
  40452: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => CS
    });
    var tS = gS(37117),
      bS = gS(37300),
      XS = gS(40449),
      xS = gS(40183),
      NS = gS(40337),
      qS = gS(40461),
      uS = gS(40346),
      IS = gS(40133),
      fS = gS(38687),
      kS = gS(40077),
      aS = gS(40361),
      KS = gS(37138),
      jS = gS(40465),
      GS = gS(40113);
    class CS {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(SS) {
        this._boundingBias ? this._boundingBias.dJ(SS) : this._boundingBias = SS.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(SS) {
        const HS = new CS(CS.RandomId(), SS.lL());
        return HS.applyToMesh(SS), HS
      }
      get meshes() {
        return this._meshes
      }
      constructor(SS, HS, gS) {
        let bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new tS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new tS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = HS || KS.d.LastCreatedScene, this._scene && (this.id = SS, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.AK(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = bS, null !== xS && (this._totalVertices = xS), gS ? this.setAllVerticesData(gS, bS) : null === xS && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), XS && (this.applyToMesh(XS), XS.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      lL() {
        return this._scene
      }
      AK() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let SS = 0; SS < this._meshes.length; SS++)
          if (!this._meshes[SS].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const SS = new Set;
        for (const HS in this._vertexBuffers) SS.add(this._vertexBuffers[HS].getWrapperBuffer());
        SS.forEach((SS => {
          SS._rebuild()
        }))
      }
      setAllVerticesData(SS, HS) {
        SS.applyToGeometry(this, HS), this._notifyUpdate()
      }
      setVerticesData(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0;
        gS && Array.isArray(HS) && (HS = new Float32Array(HS));
        const bS = new xS.h(this._engine, HS, SS, {
          updatable: gS,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: tS,
          label: "Geometry_" + this.id + "_" + SS
        });
        this.setVerticesBuffer(bS)
      }
      removeVerticesData(SS) {
        this._vertexBuffers[SS] && (this._vertexBuffers[SS].dispose(), delete this._vertexBuffers[SS]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const bS = SS.getKind();
        this._vertexBuffers[bS] && gS && this._vertexBuffers[bS].dispose(), SS._buffer && SS._ownsBuffer && SS._buffer._increaseReferences(), this._vertexBuffers[bS] = SS;
        const XS = this._meshes,
          NS = XS.length;
        if (bS === xS.h.PositionKind) {
          this._totalVertices = HS ?? SS._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : SS.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const gS = this._extend && this._extend.minimum || new tS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            bS = this._extend && this._extend.maximum || new tS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let SS = 0; SS < NS; SS++) {
            const HS = XS[SS];
            HS.buildBoundingInfo(gS, bS), HS._createGlobalSubMesh(HS.isUnIndexed), HS.computeWorldMatrix(!0), HS.synchronizeInstances()
          }
        }
        this._notifyUpdate(bS)
      }
      updateVerticesDataDirectly(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bS = this.getVertexBuffer(SS);
        bS && (bS.updateDirectly(HS, gS, tS), this._notifyUpdate(SS))
      }
      updateVerticesData(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this.getVertexBuffer(SS);
        tS && (tS.update(HS), SS === xS.h.PositionKind && this._updateBoundingInfo(gS, HS), this._notifyUpdate(SS))
      }
      _updateBoundingInfo(SS, HS) {
        if (SS && this._updateExtend(HS), this._resetPointsArrayCache(), SS) {
          const SS = this._meshes;
          for (const HS of SS) {
            HS.hasBoundingInfo ? HS.hA().reConstruct(this._extend.minimum, this._extend.maximum) : HS.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const SS = HS.dD;
            for (const HS of SS) HS.refreshBoundingInfo()
          }
        }
      }
      _bind(SS, HS, gS, tS) {
        if (!SS) return;
        void 0 === HS && (HS = this._indexBuffer);
        const bS = this.getVertexBuffers();
        if (!bS) return;
        if (HS != this._indexBuffer || !this._vertexArrayObjects && !tS) return void this._engine.bindBuffers(bS, HS, SS, gS);
        const XS = tS || this._vertexArrayObjects,
          xS = this._engine;
        XS[SS.key] || (XS[SS.key] = xS.recordVertexArrayObject(bS, HS, SS, gS)), xS.bindVertexArrayObject(XS[SS.key], HS)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(SS, HS, gS) {
        const tS = this.getVertexBuffer(SS);
        return tS ? tS.getFloatData(this._totalVertices, gS || HS && 1 !== this._meshes.length) : null
      }
      copyVerticesData(SS, HS) {
        const gS = this.getVertexBuffer(SS);
        if (!gS) return;
        HS[SS] || (HS[SS] = new Float32Array(this._totalVertices * gS.getSize()));
        const tS = gS.getData();
        tS && (0, GS.e)(tS, gS.getSize(), gS.type, gS.byteOffset, gS.byteStride, gS.normalized, this._totalVertices, HS[SS])
      }
      isVertexBufferUpdatable(SS) {
        const HS = this._vertexBuffers[SS];
        return !!HS && HS.isUpdatable()
      }
      getVertexBuffer(SS) {
        return this.isReady() ? this._vertexBuffers[SS] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(SS) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[SS] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(SS)
      }
      getVerticesDataKinds() {
        const SS = [];
        let HS;
        if (!this._vertexBuffers && this._delayInfo)
          for (HS in this._delayInfo) SS.push(HS);
        else
          for (HS in this._vertexBuffers) SS.push(HS);
        return SS
      }
      updateIndices(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const tS = SS.length !== this._indices.length;
            if (gS || (this._indices = SS.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, SS, HS), tS)
              for (const SS of this._meshes) SS._createGlobalSubMesh(!0)
          } else this.setIndices(SS, null, !0)
      }
      setIndexBuffer(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = SS, this._totalVertices = HS, this._totalIndices = gS, SS.is32Bits = null === tS ? HS > 65535 : tS;
        for (const bS of this._meshes) bS._createGlobalSubMesh(!0), bS.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = SS, this._indexBufferIsUpdatable = gS, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, gS, "Geometry_" + this.id + "_IndexBuffer")), void 0 != HS && (this._totalVertices = HS);
        for (const bS of this._meshes) bS._createGlobalSubMesh(!tS), bS.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      mgS(SS, HS) {
        if (!this.isReady()) return null;
        const gS = this._indices;
        return HS || SS && 1 !== this._meshes.length ? gS.slice() : gS
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        SS && this._vertexArrayObjects && this._vertexArrayObjects[SS.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[SS.key]), delete this._vertexArrayObjects[SS.key])
      }
      releaseForMesh(SS, HS) {
        const gS = this._meshes,
          tS = gS.indexOf(SS); - 1 !== tS && (gS.splice(tS, 1), this._vertexArrayObjects && SS._invalidateInstanceVertexArrayObject(), SS._geometry = null, 0 === gS.length && HS && this.dispose())
      }
      applyToMesh(SS) {
        if (SS._geometry === this) return;
        const HS = SS._geometry;
        HS && HS.releaseForMesh(SS), this._vertexArrayObjects && SS._invalidateInstanceVertexArrayObject();
        const gS = this._meshes;
        SS._geometry = this, SS._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), gS.push(SS), this.isReady() ? this._applyToMesh(SS) : this._boundingInfo && SS.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!SS && (SS = this.getVerticesData(xS.h.PositionKind), !SS)) return;
          this._extend = (0, aS.f)(SS, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(SS) {
        for (const HS in this._vertexBuffers) {
          const gS = this._vertexBuffers[HS];
          gS._buffer.getBuffer() || gS.create(), HS === xS.h.PositionKind && (this._extend || this._updateExtend(), SS.buildBoundingInfo(this._extend.minimum, this._extend.maximum), SS._createGlobalSubMesh(SS.isUnIndexed), SS._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), SS._syncGeometryWithMorphTargetManager(), SS.synchronizeInstances()
      }
      _notifyUpdate(SS) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, SS), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const HS of this._meshes) HS._markSubMeshesAsAttributesDirty()
      }
      load(SS, HS) {
        2 !== this.delayLoadState && (this.isReady() ? HS && HS() : (this.delayLoadState = 2, this._queueLoad(SS, HS)))
      }
      _queueLoad(SS, HS) {
        this.delayLoadingFile && (SS.addPendingData(this), (async () => {
          try {
            const gS = await SS._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void SS.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(gS), this), this.delayLoadState = 1, this._delayInfo = [], SS.removePendingData(this);
            const tS = this._meshes,
              bS = tS.length;
            for (let SS = 0; SS < bS; SS++) this._applyToMesh(tS[SS]);
            HS && HS()
          } catch (gS) {
            SS.removePendingData(this), SS.Ow || fS.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${gS}`)
          }
        })())
      }
      toLeftHanded() {
        const SS = this.mgS(!1);
        if (null != SS && SS.length > 0) {
          for (let HS = 0; HS < SS.length; HS += 3) {
            const gS = SS[HS + 0];
            SS[HS + 0] = SS[HS + 2], SS[HS + 2] = gS
          }
          this.setIndices(SS)
        }
        const HS = this.getVerticesData(xS.h.PositionKind, !1);
        if (null != HS && HS.length > 0) {
          for (let SS = 0; SS < HS.length; SS += 3) HS[SS + 2] = -HS[SS + 2];
          this.setVerticesData(xS.h.PositionKind, HS, !1)
        }
        const gS = this.getVerticesData(xS.h.NormalKind, !1);
        if (null != gS && gS.length > 0) {
          for (let SS = 0; SS < gS.length; SS += 3) gS[SS + 2] = -gS[SS + 2];
          this.setVerticesData(xS.h.NormalKind, gS, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const SS = this.getVerticesData(xS.h.PositionKind);
        if (!SS || 0 === SS.length) return !1;
        for (let HS = 3 * this._positionsCache.length, gS = this._positionsCache.length; HS < SS.length; HS += 3, ++gS) this._positionsCache[gS] = tS.n.FromArray(SS, HS);
        for (let HS = 0, gS = 0; HS < SS.length; HS += 3, ++gS) this._positionsCache[gS].set(SS[0 + HS], SS[1 + HS], SS[2 + HS]);
        return this._positionsCache.length = SS.length / 3, this._positions = this._positionsCache, !0
      }
      Ow() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const gS in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[gS]);
          this._vertexArrayObjects = {};
          const SS = this._meshes,
            HS = SS.length;
          for (let gS = 0; gS < HS; gS++) SS[gS]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const SS = this._meshes,
          HS = SS.length;
        let gS;
        for (gS = 0; gS < HS; gS++) this.releaseForMesh(SS[gS]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const tS in this._vertexBuffers) this._vertexBuffers[tS].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const SS = this._parentContainer.geometries.indexOf(this);
          SS > -1 && this._parentContainer.geometries.splice(SS, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(SS) {
        const HS = new CS(SS, this._scene),
          gS = this.mgS(void 0, !0);
        gS && HS.setIndices(gS);
        let tS, bS = !1;
        for (tS in this._vertexBuffers) {
          const SS = this.getVertexBuffer(tS),
            gS = SS.getData();
          if (!gS) continue;
          const XS = SS.isUpdatable(),
            NS = SS.getSize(),
            {
              type: qS,
              byteOffset: uS,
              byteStride: IS,
              normalized: fS
            } = SS;
          bS = bS || XS;
          let kS = this._totalVertices;
          if (SS.getIsInstanced()) {
            let SS;
            SS = gS instanceof Array ? 4 * gS.length : gS.byteLength, kS = SS / IS
          }
          const aS = (0, GS.p)(gS, NS, qS, uS, IS, kS, !0),
            KS = new xS.h(this._engine, aS, tS, {
              updatable: XS,
              useBytes: !1,
              stride: NS,
              size: NS,
              offset: 0,
              type: qS,
              normalized: fS,
              takeBufferOwnership: !0,
              instanced: SS.getIsInstanced()
            });
          HS.setVerticesBuffer(KS, kS)
        }
        for (tS in HS._updatable = bS, HS.delayLoadState = this.delayLoadState, HS.delayLoadingFile = this.delayLoadingFile, HS._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) HS._delayInfo = HS._delayInfo || [], HS._delayInfo.push(tS);
        return HS._boundingInfo = new uS.e(this._extend.minimum, this._extend.maximum), HS
      }
      serialize() {
        const SS = {};
        return SS.id = this.id, SS.uniqueId = this.uniqueId, SS.updatable = this._updatable, kS.d && kS.d.HasTags(this) && (SS.tags = kS.d.GetTags(this)), SS
      }
      _toNumberArray(SS) {
        return Array.isArray(SS) ? SS : Array.prototype.slice.call(SS)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const SS in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, SS) && (this._vertexBuffers[SS]._buffer._data = null)
      }
      serializeVerticeData() {
        const SS = this.serialize();
        return this.isVerticesDataPresent(xS.h.PositionKind) && (SS.positions = this._toNumberArray(this.getVerticesData(xS.h.PositionKind)), this.isVertexBufferUpdatable(xS.h.PositionKind) && (SS.positionsUpdatable = !0)), this.isVerticesDataPresent(xS.h.NormalKind) && (SS.normals = this._toNumberArray(this.getVerticesData(xS.h.NormalKind)), this.isVertexBufferUpdatable(xS.h.NormalKind) && (SS.normalsUpdatable = !0)), this.isVerticesDataPresent(xS.h.TangentKind) && (SS.tangents = this._toNumberArray(this.getVerticesData(xS.h.TangentKind)), this.isVertexBufferUpdatable(xS.h.TangentKind) && (SS.tangentsUpdatable = !0)), this.isVerticesDataPresent(xS.h.UVKind) && (SS.uvs = this._toNumberArray(this.getVerticesData(xS.h.UVKind)), this.isVertexBufferUpdatable(xS.h.UVKind) && (SS.uvsUpdatable = !0)), this.isVerticesDataPresent(xS.h.UV2Kind) && (SS.uvs2 = this._toNumberArray(this.getVerticesData(xS.h.UV2Kind)), this.isVertexBufferUpdatable(xS.h.UV2Kind) && (SS.uvs2Updatable = !0)), this.isVerticesDataPresent(xS.h.UV3Kind) && (SS.uvs3 = this._toNumberArray(this.getVerticesData(xS.h.UV3Kind)), this.isVertexBufferUpdatable(xS.h.UV3Kind) && (SS.uvs3Updatable = !0)), this.isVerticesDataPresent(xS.h.UV4Kind) && (SS.uvs4 = this._toNumberArray(this.getVerticesData(xS.h.UV4Kind)), this.isVertexBufferUpdatable(xS.h.UV4Kind) && (SS.uvs4Updatable = !0)), this.isVerticesDataPresent(xS.h.UV5Kind) && (SS.uvs5 = this._toNumberArray(this.getVerticesData(xS.h.UV5Kind)), this.isVertexBufferUpdatable(xS.h.UV5Kind) && (SS.uvs5Updatable = !0)), this.isVerticesDataPresent(xS.h.UV6Kind) && (SS.uvs6 = this._toNumberArray(this.getVerticesData(xS.h.UV6Kind)), this.isVertexBufferUpdatable(xS.h.UV6Kind) && (SS.uvs6Updatable = !0)), this.isVerticesDataPresent(xS.h.ColorKind) && (SS.colors = this._toNumberArray(this.getVerticesData(xS.h.ColorKind)), this.isVertexBufferUpdatable(xS.h.ColorKind) && (SS.colorsUpdatable = !0)), this.isVerticesDataPresent(xS.h.MatricesIndicesKind) && (SS.matricesIndices = this._toNumberArray(this.getVerticesData(xS.h.MatricesIndicesKind)), SS.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(xS.h.MatricesIndicesKind) && (SS.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(xS.h.MatricesWeightsKind) && (SS.matricesWeights = this._toNumberArray(this.getVerticesData(xS.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(xS.h.MatricesWeightsKind) && (SS.matricesWeightsUpdatable = !0)), SS.indices = this._toNumberArray(this.mgS()), SS
      }
      static ExtractFromMesh(SS, HS) {
        const gS = SS._geometry;
        return gS ? gS.copy(HS) : null
      }
      static RandomId() {
        return IS.k.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(SS, HS) {
        for (let gS = 0; gS < HS.geometries.length; gS++)
          if (HS.geometries[gS]._loadedUniqueId === SS) return HS.geometries[gS];
        return null
      }
      static _ImportGeometry(SS, HS) {
        const gS = HS.lL(),
          tS = SS.geometryUniqueId,
          XS = SS.geometryId;
        if (tS || XS) {
          const SS = tS ? this._GetGeometryByLoadedUniqueId(tS, gS) : gS.getGeometryById(XS);
          SS && SS.applyToMesh(HS)
        } else if (SS instanceof ArrayBuffer) {
          const gS = HS._binaryInfo;
          if (gS.positionsAttrDesc && gS.positionsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.positionsAttrDesc.offset, gS.positionsAttrDesc.count);
            HS.setVerticesData(xS.h.PositionKind, tS, !1)
          }
          if (gS.normalsAttrDesc && gS.normalsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.normalsAttrDesc.offset, gS.normalsAttrDesc.count);
            HS.setVerticesData(xS.h.NormalKind, tS, !1)
          }
          if (gS.tangetsAttrDesc && gS.tangetsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.tangetsAttrDesc.offset, gS.tangetsAttrDesc.count);
            HS.setVerticesData(xS.h.TangentKind, tS, !1)
          }
          if (gS.uvsAttrDesc && gS.uvsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvsAttrDesc.offset, gS.uvsAttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UVKind, tS, !1)
          }
          if (gS.uvs2AttrDesc && gS.uvs2AttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvs2AttrDesc.offset, gS.uvs2AttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UV2Kind, tS, !1)
          }
          if (gS.uvs3AttrDesc && gS.uvs3AttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvs3AttrDesc.offset, gS.uvs3AttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UV3Kind, tS, !1)
          }
          if (gS.uvs4AttrDesc && gS.uvs4AttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvs4AttrDesc.offset, gS.uvs4AttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UV4Kind, tS, !1)
          }
          if (gS.uvs5AttrDesc && gS.uvs5AttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvs5AttrDesc.offset, gS.uvs5AttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UV5Kind, tS, !1)
          }
          if (gS.uvs6AttrDesc && gS.uvs6AttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.uvs6AttrDesc.offset, gS.uvs6AttrDesc.count);
            if (jS.c)
              for (let SS = 1; SS < tS.length; SS += 2) tS[SS] = 1 - tS[SS];
            HS.setVerticesData(xS.h.UV6Kind, tS, !1)
          }
          if (gS.colorsAttrDesc && gS.colorsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.colorsAttrDesc.offset, gS.colorsAttrDesc.count);
            HS.setVerticesData(xS.h.ColorKind, tS, !1, gS.colorsAttrDesc.stride)
          }
          if (gS.matricesIndicesAttrDesc && gS.matricesIndicesAttrDesc.count > 0) {
            const tS = new Int32Array(SS, gS.matricesIndicesAttrDesc.offset, gS.matricesIndicesAttrDesc.count),
              bS = [];
            for (let SS = 0; SS < tS.length; SS++) {
              const HS = tS[SS];
              bS.push(255 & HS), bS.push((65280 & HS) >> 8), bS.push((16711680 & HS) >> 16), bS.push(HS >> 24 & 255)
            }
            HS.setVerticesData(xS.h.MatricesIndicesKind, bS, !1)
          }
          if (gS.matricesIndicesExtraAttrDesc && gS.matricesIndicesExtraAttrDesc.count > 0) {
            const tS = new Int32Array(SS, gS.matricesIndicesExtraAttrDesc.offset, gS.matricesIndicesExtraAttrDesc.count),
              bS = [];
            for (let SS = 0; SS < tS.length; SS++) {
              const HS = tS[SS];
              bS.push(255 & HS), bS.push((65280 & HS) >> 8), bS.push((16711680 & HS) >> 16), bS.push(HS >> 24 & 255)
            }
            HS.setVerticesData(xS.h.MatricesIndicesExtraKind, bS, !1)
          }
          if (gS.matricesWeightsAttrDesc && gS.matricesWeightsAttrDesc.count > 0) {
            const tS = new Float32Array(SS, gS.matricesWeightsAttrDesc.offset, gS.matricesWeightsAttrDesc.count);
            HS.setVerticesData(xS.h.MatricesWeightsKind, tS, !1)
          }
          if (gS.indicesAttrDesc && gS.indicesAttrDesc.count > 0) {
            const tS = new Int32Array(SS, gS.indicesAttrDesc.offset, gS.indicesAttrDesc.count);
            HS.setIndices(tS, null)
          }
          if (gS.subMeshesAttrDesc && gS.subMeshesAttrDesc.count > 0) {
            const tS = new Int32Array(SS, gS.subMeshesAttrDesc.offset, 5 * gS.subMeshesAttrDesc.count);
            HS.dD = [];
            for (let SS = 0; SS < gS.subMeshesAttrDesc.count; SS++) {
              const gS = tS[5 * SS + 0],
                bS = tS[5 * SS + 1],
                XS = tS[5 * SS + 2],
                xS = tS[5 * SS + 3],
                qS = tS[5 * SS + 4];
              NS.e.AddToMesh(gS, bS, XS, xS, qS, HS)
            }
          }
        } else if (SS.positions && SS.normals && SS.indices) {
          if (HS.setVerticesData(xS.h.PositionKind, SS.positions, SS.positions._updatable || SS.positionsUpdatable), HS.setVerticesData(xS.h.NormalKind, SS.normals, SS.normals._updatable || SS.normalsUpdatable), SS.tangents && HS.setVerticesData(xS.h.TangentKind, SS.tangents, SS.tangents._updatable || SS.tangentsUpdatable), SS.uvs && HS.setVerticesData(xS.h.UVKind, SS.uvs, SS.uvs._updatable || SS.uvsUpdatable), SS.uvs2 && HS.setVerticesData(xS.h.UV2Kind, SS.uvs2, SS.uvs2._updatable || SS.uvs2Updatable), SS.uvs3 && HS.setVerticesData(xS.h.UV3Kind, SS.uvs3, SS.uvs3._updatable || SS.uvs3Updatable), SS.uvs4 && HS.setVerticesData(xS.h.UV4Kind, SS.uvs4, SS.uvs4._updatable || SS.uvs4Updatable), SS.uvs5 && HS.setVerticesData(xS.h.UV5Kind, SS.uvs5, SS.uvs5._updatable || SS.uvs5Updatable), SS.uvs6 && HS.setVerticesData(xS.h.UV6Kind, SS.uvs6, SS.uvs6._updatable || SS.uvs6Updatable), SS.colors && HS.setVerticesData(xS.h.ColorKind, bS.c.CheckColors4(SS.colors, SS.positions.length / 3), SS.colors._updatable), SS.matricesIndices)
            if (SS.matricesIndices._isExpanded || SS.matricesIndicesExpanded) delete SS.matricesIndices._isExpanded, delete SS.matricesIndicesExpanded, HS.setVerticesData(xS.h.MatricesIndicesKind, SS.matricesIndices, SS.matricesIndices._updatable || SS.matricesIndicesUpdatable);
            else {
              const gS = [];
              for (let HS = 0; HS < SS.matricesIndices.length; HS++) {
                const tS = SS.matricesIndices[HS];
                gS.push(255 & tS), gS.push((65280 & tS) >> 8), gS.push((16711680 & tS) >> 16), gS.push(tS >> 24 & 255)
              }
              HS.setVerticesData(xS.h.MatricesIndicesKind, gS, SS.matricesIndices._updatable || SS.matricesIndicesUpdatable)
            } if (SS.matricesIndicesExtra)
            if (SS.matricesIndicesExtraExpanded || SS.matricesIndicesExtra._isExpanded) delete SS.matricesIndices._isExpanded, delete SS.matricesIndicesExtraExpanded, HS.setVerticesData(xS.h.MatricesIndicesExtraKind, SS.matricesIndicesExtra, SS.matricesIndicesExtra._updatable || SS.matricesIndicesExtraUpdatable);
            else {
              const gS = [];
              for (let HS = 0; HS < SS.matricesIndicesExtra.length; HS++) {
                const tS = SS.matricesIndicesExtra[HS];
                gS.push(255 & tS), gS.push((65280 & tS) >> 8), gS.push((16711680 & tS) >> 16), gS.push(tS >> 24 & 255)
              }
              HS.setVerticesData(xS.h.MatricesIndicesExtraKind, gS, SS.matricesIndicesExtra._updatable || SS.matricesIndicesExtraUpdatable)
            } SS.matricesWeights && (CS._CleanMatricesWeights(SS, HS), HS.setVerticesData(xS.h.MatricesWeightsKind, SS.matricesWeights, SS.matricesWeights._updatable)), SS.matricesWeightsExtra && HS.setVerticesData(xS.h.MatricesWeightsExtraKind, SS.matricesWeightsExtra, SS.matricesWeights._updatable), HS.setIndices(SS.indices, null)
        }
        if (SS.dD) {
          HS.dD = [];
          for (let gS = 0; gS < SS.dD.length; gS++) {
            const tS = SS.dD[gS];
            NS.e.AddToMesh(tS.materialIndex, tS.verticesStart, tS.verticesCount, tS.indexStart, tS.indexCount, HS)
          }
        }
        HS._shouldGenerateFlatShading && (HS.convertToFlatShadedMesh(), HS._shouldGenerateFlatShading = !1), HS.computeWorldMatrix(!0), gS.onMeshImportedObservable.notifyObservers(HS)
      }
      static _CleanMatricesWeights(SS, HS) {
        const gS = .001;
        if (!qS.c.CleanBoneMatrixWeights) return;
        let tS;
        if (!(SS.skeletonId > -1)) return;
        {
          const gS = HS.lL().getLastSkeletonById(SS.skeletonId);
          if (!gS) return;
          tS = gS.bones.length
        }
        const bS = HS.getVerticesData(xS.h.MatricesIndicesKind),
          XS = HS.getVerticesData(xS.h.MatricesIndicesExtraKind),
          NS = SS.matricesWeights,
          uS = SS.matricesWeightsExtra,
          IS = SS.numBoneInfluencer,
          fS = NS.length;
        for (let xS = 0; xS < fS; xS += 4) {
          let SS = 0,
            HS = -1;
          for (let tS = 0; tS < 4; tS++) {
            const bS = NS[xS + tS];
            SS += bS, bS < gS && HS < 0 && (HS = tS)
          }
          if (uS)
            for (let tS = 0; tS < 4; tS++) {
              const bS = uS[xS + tS];
              SS += bS, bS < gS && HS < 0 && (HS = tS + 4)
            }
          if ((HS < 0 || HS > IS - 1) && (HS = IS - 1), SS > gS) {
            const HS = 1 / SS;
            for (let SS = 0; SS < 4; SS++) NS[xS + SS] *= HS;
            if (uS)
              for (let SS = 0; SS < 4; SS++) uS[xS + SS] *= HS
          } else HS >= 4 ? (uS[xS + HS - 4] = 1 - SS, XS[xS + HS - 4] = tS) : (NS[xS + HS] = 1 - SS, bS[xS + HS] = tS)
        }
        HS.setVerticesData(xS.h.MatricesIndicesKind, bS), SS.matricesWeightsExtra && HS.setVerticesData(xS.h.MatricesIndicesExtraKind, XS)
      }
      static Parse(SS, HS, gS) {
        const bS = new CS(SS.id, HS, void 0, SS.updatable);
        return bS._loadedUniqueId = SS.uniqueId, kS.d && kS.d.AddTagsTo(bS, SS.tags), SS.delayLoadingFile ? (bS.delayLoadState = 4, bS.delayLoadingFile = gS + SS.delayLoadingFile, bS._boundingInfo = new uS.e(tS.n.FromArray(SS.boundingBoxMinimum), tS.n.FromArray(SS.boundingBoxMaximum)), bS._delayInfo = [], SS.hasUVs && bS._delayInfo.push(xS.h.UVKind), SS.hasUVs2 && bS._delayInfo.push(xS.h.UV2Kind), SS.hasUVs3 && bS._delayInfo.push(xS.h.UV3Kind), SS.hasUVs4 && bS._delayInfo.push(xS.h.UV4Kind), SS.hasUVs5 && bS._delayInfo.push(xS.h.UV5Kind), SS.hasUVs6 && bS._delayInfo.push(xS.h.UV6Kind), SS.hasColors && bS._delayInfo.push(xS.h.ColorKind), SS.hasMatricesIndices && bS._delayInfo.push(xS.h.MatricesIndicesKind), SS.hasMatricesWeights && bS._delayInfo.push(xS.h.MatricesWeightsKind), bS._delayLoadingFunction = XS.e.ImportVertexData) : XS.e.ImportVertexData(SS, bS), HS.pushGeometry(bS, !0), bS
      }
    }
  },
  40495: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      e: () => KS
    });
    var tS = gS(37117),
      bS = gS(38687),
      XS = gS(40468),
      xS = gS(40439),
      NS = gS(38683),
      qS = gS(40473),
      uS = gS(40183),
      IS = gS(37164);
    class fS extends XS.b {
      constructor(SS, HS) {
        super(SS, HS.lL()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, HS.E1(this), this._sourceMesh = HS, this._unIndexed = HS._unIndexed, this.position.dJ(HS.position), this.rotation.dJ(HS.rotation), this.nf.dJ(HS.nf), HS.rotationQuaternion && (this.rotationQuaternion = HS.rotationQuaternion.clone()), this.animations = HS.animations.slice();
        for (const gS of HS.getAnimationRanges()) null != gS && this.createAnimationRange(gS.name, gS.from, gS.to);
        if (this.infiniteDistance = HS.infiniteDistance, this.setPivotMatrix(HS.getPivotMatrix()), HS.skeleton || HS.morphTargetManager || !HS.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const SS = HS.hA();
          this.buildBoundingInfo(SS.minimum, SS.maximum)
        }
        this._syncSubMeshes()
      }
      getClassName() {
        return "InstancedMesh"
      }
      get lightSources() {
        return this._sourceMesh._lightSources
      }
      _resyncLightSources() {}
      _resyncLightSource() {}
      _removeLightSource() {}
      get receiveShadows() {
        return this._sourceMesh.receiveShadows
      }
      set receiveShadows(SS) {
        this._sourceMesh?.receiveShadows !== SS && bS.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(SS) {
        this._sourceMesh?.material !== SS && bS.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(SS) {
        this._sourceMesh?.visibility !== SS && bS.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(SS) {
        this._sourceMesh?.skeleton !== SS && bS.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(SS) {
        this._sourceMesh && SS !== this._sourceMesh.renderingGroupId && bS.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(SS) {
        this._sourceMesh && SS !== this._sourceMesh.meshBlendingTag && bS.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get MtS() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(SS) {
        return this._sourceMesh.createInstance(SS)
      }
      isReady() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(SS, !0)
      }
      getVerticesData(SS, HS, gS) {
        return this._sourceMesh.getVerticesData(SS, HS, gS)
      }
      copyVerticesData(SS, HS) {
        this._sourceMesh.copyVerticesData(SS, HS)
      }
      getVertexBuffer(SS, HS) {
        return this._sourceMesh.getVertexBuffer(SS, HS)
      }
      setVerticesData(SS, HS, gS, tS) {
        return this.MtS && this.MtS.setVerticesData(SS, HS, gS, tS), this.MtS
      }
      updateVerticesData(SS, HS, gS, tS) {
        return this.MtS && this.MtS.updateVerticesData(SS, HS, gS, tS), this.MtS
      }
      setIndices(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.MtS && this.MtS.setIndices(SS, HS), this.MtS
      }
      isVerticesDataPresent(SS) {
        return this._sourceMesh.isVerticesDataPresent(SS)
      }
      mgS() {
        return this._sourceMesh.mgS()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let SS, HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.hA().isLocked) return this;
        SS = "object" === typeof HS ? HS : {
          applySkeleton: HS,
          applyMorph: gS
        };
        const tS = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(SS, null, uS.h.PositionKind), tS), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(SS, HS) {
        if (super._activate(SS, HS), this._sourceMesh.dD || bS.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, SS), HS) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== qS.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new tS.e);
          const SS = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, tS.l.VK[7].dJ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.dJ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.dJ(tS.l.VK[7]), this._currentLOD._masterMesh = SS, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get qY() {
        return !0
      }
      getLOD(SS) {
        if (!SS) return this;
        const HS = this.MtS.getLODLevels();
        if (HS && 0 !== HS.length) {
          const HS = this.hA();
          this._currentLOD = this.MtS.getLOD(SS, HS.QtS)
        } else this._currentLOD = this.MtS;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(SS) {
        return this.MtS._preActivateForIntermediateRendering(SS)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.dD)
          for (let SS = 0; SS < this._sourceMesh.dD.length; SS++) this._sourceMesh.dD[SS].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.hA().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(SS);
        if (NS.d.DeepCopy(this, tS, ["name", "dD", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "MtS", "qY", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "BtS", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "dxS", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), HS && (tS.parent = HS), !gS)
          for (let bS = 0; bS < this.lL().meshes.length; bS++) {
            const SS = this.lL().meshes[bS];
            SS.parent === this && SS.clone(SS.name, tS)
          }
        return tS.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(tS), tS
      }
      dispose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.N7(this), super.dispose(SS, HS)
      }
      _serializeAsParent(SS) {
        super._serializeAsParent(SS), SS.parentId = this._sourceMesh.uniqueId, SS.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = this.clone("Clone of " + (this.name || this.id), SS || this.parent, !0, HS && HS.newSourcedMesh);
        tS && gS && gS(this, tS);
        for (const bS of this.getChildTransformNodes(!0)) bS.instantiateHierarchy(tS, HS, gS);
        return tS
      }
    }
    let kS = !1;

    function aS(SS, HS, gS, tS, bS) {
      for (let XS = 0; XS < HS.length; XS++) {
        const xS = SS[HS[XS]] ?? 0,
          NS = bS + gS[XS];
        xS.toArray ? xS.toArray(tS, NS) : xS.copyToArray ? xS.copyToArray(tS, NS) : tS[NS] = xS
      }
    }

    function KS() {
      kS || (kS = !0, xS.e._instancedMeshFactory = (SS, HS) => {
        const gS = new fS(SS, HS);
        if (HS.mY) {
          gS.mY = {};
          for (const SS in HS.mY) gS.mY[SS] = HS.mY[SS]
        }
        return gS
      }, xS.e.prototype.lY = function(SS, HS) {
        if (!this.mY) {
          this.mY = {};
          for (const SS of this.instances) SS.mY = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.AK().getCaps().vertexArrayObject ? {} : void 0
        }), this.mY[SS] = null, this._userInstancedBuffersStorage.strides[SS] = HS;
        const gS = this._userInstancedBuffersStorage;
        gS.interleavedKinds = [], gS.interleavedOffsets = [], gS.interleavedRowStride = 0;
        for (const tS in gS.strides) gS.interleavedKinds.push(tS), gS.interleavedOffsets.push(gS.interleavedRowStride), gS.interleavedRowStride += gS.strides[tS];
        gS.interleavedData = new Float32Array(32 * gS.interleavedRowStride);
        for (const tS in gS.interleavedBuffers) gS.interleavedBuffers[tS].buffer.dispose();
        gS.interleavedBuffers = {}, gS.vertexBuffers[SS] = null;
        for (const tS of this.instances) tS.mY[SS] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, xS.e.prototype._processInstancedBuffers = function(SS, HS) {
        const gS = this._userInstancedBuffersStorage,
          tS = gS.interleavedRowStride;
        if (!tS) return;
        const bS = SS ? SS.length : 0,
          XS = (bS + 1) * tS;
        let xS = gS.interleavedData;
        if (xS.length < XS) {
          let SS = xS.length;
          for (; SS < XS;) SS *= 2;
          xS = gS.interleavedData = new Float32Array(SS)
        }
        const NS = gS.interleavedKinds,
          qS = gS.interleavedOffsets;
        let IS = 0;
        HS && (aS(this.mY, NS, qS, xS, IS), IS += tS);
        for (let uS = 0; uS < bS; uS++) aS(SS[uS].mY, NS, qS, xS, IS), IS += tS;
        let fS = "shared",
          kS = gS.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (fS = this._instanceDataStorage.engine.currentRenderPassId, gS.renderPasses || (gS.renderPasses = {}), gS.renderPasses[fS] || (gS.renderPasses[fS] = {}), kS = gS.renderPasses[fS]);
        const KS = gS.interleavedBuffers[fS];
        let jS = !KS || KS.data !== xS;
        for (let uS = 0; !jS && uS < NS.length; uS++) jS = !kS[NS[uS]];
        if (!jS) return void KS.buffer.updateDirectly(xS, 0);
        KS?.buffer.dispose();
        const GS = new uS.b(this.AK(), xS, !0, tS, !1, !0);
        for (let uS = 0; uS < NS.length; uS++) {
          const SS = NS[uS],
            HS = GS.createVertexBuffer(SS, qS[uS], gS.strides[SS]);
          HS.hashCode += HS.byteOffset * 2 ** 24, kS[SS] = HS
        }
        gS.interleavedBuffers[fS] = {
          buffer: GS,
          data: xS
        }, this._invalidateInstanceVertexArrayObject()
      }, xS.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const SS in this._userInstancedBuffersStorage.vertexArrayObjects) this.AK().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[SS]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, xS.e.prototype._disposeInstanceSpecificData = function() {
        for (const HS in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[HS].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const HS in this.mY) this._userInstancedBuffersStorage.vertexBuffers[HS] && this._userInstancedBuffersStorage.vertexBuffers[HS].dispose();
        const SS = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (SS) {
          for (const HS in SS) SS[HS].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.mY = {}
      }, (0, IS.f)("BABYLON.InstancedMesh", fS))
    }
  },
  40439: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => mS,
      i: () => rS,
      l: () => BS
    });
    var tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS = gS(37144),
      nS = gS(40133),
      PS = gS(40087),
      QS = gS(38683),
      DS = gS(40077),
      wS = gS(40443),
      hS = gS(40248),
      ZS = gS(37117),
      JS = gS(37300),
      OS = gS(40256),
      dS = gS(40183),
      cS = gS(40449),
      vS = gS(40452),
      ES = gS(40468),
      LS = gS(40337),
      YS = gS(40331),
      AS = gS(40414),
      yS = gS(40477),
      VS = gS(40461),
      iS = gS(40068),
      WS = gS(38687),
      zS = gS(37164),
      US = gS(39926),
      pS = gS(40213);
    class sS {
      constructor(SS, HS) {
        this.distanceOrScreenCoverage = SS, this.mesh = HS
      }
    }
    class BS {}
    class MS {
      constructor() {
        this.batchCache = new RS(this), this.batchCacheReplacementModeInFrozenMode = new RS(this), this.instancesBufferSize = 2048
      }
    }
    class FS {
      constructor() {
        this.renderPasses = {}
      }
    }
    class RS {
      constructor(SS) {
        this.parent = SS, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class TS {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class oS {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const lS = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class mS extends ES.b {
      static _GetDefaultSideOrientation(SS) {
        return SS || mS.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(SS) {
        this._internalMeshDataInfo._useLODScreenCoverage = SS, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(SS) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== SS && (SS && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(dS.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(dS.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = SS, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new CS.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new CS.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new CS.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new CS.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new CS.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(SS) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(SS)
      }
      get BtS() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(SS) {
        this._internalMeshDataInfo._forcedInstanceCount = SS
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(SS) {
        this._internalMeshDataInfo._sideOrientation = SS, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === SS || !this._scene.useRightHandedSystem && 0 === SS
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(SS) {
        this.sideOrientation = SS, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(SS) {
        this._internalMeshDataInfo._overrideRenderingFillMode = SS
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(SS) {
        SS && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (SS.sideOrientation = null), this._setMaterial(SS)
      }
      get source() {
        return this._internalMeshDataInfo._source
      }
      get cloneMeshMap() {
        return this._internalMeshDataInfo.meshMap
      }
      get isUnIndexed() {
        return this._unIndexed
      }
      set isUnIndexed(SS) {
        this._unIndexed !== SS && (this._unIndexed = SS, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const SS = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return SS ? SS.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const SS = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return SS ? SS.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(SS) {
        this._instanceDataStorage.manualUpdate = SS
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(SS) {
        this._instanceDataStorage.previousManualUpdate = SS
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(SS) {
        this._instanceDataStorage.forceMatrixUpdates = SS
      }
      _copySource(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bS = this.lL();
        if (SS._geometry && SS._geometry.applyToMesh(this), QS.d.DeepCopy(SS, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "BtS", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "qY", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "dxS", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = SS, bS.useClonedMeshMap && (SS._internalMeshDataInfo.meshMap || (SS._internalMeshDataInfo.meshMap = {}), SS._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = SS._originalBuilderSideOrientation, this._creationDataStorage = SS._creationDataStorage, SS._ranges) {
          const HS = SS._ranges;
          for (const SS in HS) Object.prototype.hasOwnProperty.call(HS, SS) && HS[SS] && this.createAnimationRange(SS, HS[SS].from, HS[SS].to)
        }
        if (SS.metadata && SS.metadata.clone ? this.metadata = SS.metadata.clone() : this.metadata = SS.metadata, this._internalMetadata = SS._internalMetadata, this.meshBlendingTag = SS.meshBlendingTag, DS.d && DS.d.HasTags(SS) && DS.d.AddTagsTo(this, DS.d.GetTags(SS, !0)), this.MJ(SS.isEnabled(!1)), this.parent = SS.parent, this.setPivotMatrix(SS.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + SS.id, this.material = SS.material, !HS) {
          const bS = SS.getDescendants(!0);
          for (let SS = 0; SS < bS.length; SS++) {
            const XS = bS[SS];
            XS._isMesh ? (lS.parent = this, lS.doNotCloneChildren = HS, lS.clonePhysicsImpostor = gS, lS.cloneThinInstances = tS, XS.clone(this.name + "." + XS.name, lS)) : XS.clone && XS.clone(this.name + "." + XS.name, this)
          }
        }
        if (SS.morphTargetManager && (this.morphTargetManager = SS.morphTargetManager), (0, US.c)(bS.getPhysicsEngine)) {
          const HS = bS.getPhysicsEngine();
          if (gS && HS)
            if (1 === HS.getPluginVersion()) {
              const gS = HS.getImpostorForPhysicsObject(SS);
              gS && (this.physicsImpostor = gS.clone(this))
            } else 2 === HS.getPluginVersion() && SS.physicsBody && SS.physicsBody.clone(this)
        }
        for (let XS = 0; XS < bS.zD.length; XS++) {
          const HS = bS.zD[XS];
          HS.emitter === SS && HS.clone(HS.name, this)
        }
        if (this.skeleton = SS.skeleton, tS && (SS._thinInstanceDataStorage.matrixData ? (this.o9("matrix", new Float32Array(SS._thinInstanceDataStorage.matrixData), 16, !SS._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = SS._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = SS._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = SS._thinInstanceDataStorage.matrixBufferSize, SS._userThinInstanceBuffersStorage)) {
          const HS = SS._userThinInstanceBuffersStorage;
          for (const SS in HS.data) this.o9(SS, new Float32Array(HS.data[SS]), HS.strides[SS], !HS.vertexBuffers?.[SS]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[SS] = HS.sizes[SS]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(SS) {
        let HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          XS = arguments.length > 4 ? arguments[4] : void 0,
          xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(SS, gS), this._internalMeshDataInfo = new oS, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new TS, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = mS.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, gS = this.lL(), this._instanceDataStorage = new FS, this._instanceDataStorage.engine = gS.AK(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new MS), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (SS, HS, gS) => {
          SS && gS && (this._uniformBuffer ? this.transferToEffect(HS) : gS.bindOnlyWorldMatrix(HS))
        };
        let NS = !1;
        if (tS && void 0 === tS._addToSceneRootNodes) {
          const SS = tS;
          HS = SS.parent ?? null, bS = SS.source ?? null, XS = SS.doNotCloneChildren ?? !1, xS = SS.clonePhysicsImpostor ?? !0, NS = SS.cloneThinInstances ?? !1
        } else HS = tS;
        bS && this._copySource(bS, XS, xS, NS), null !== HS && (this.parent = HS), this._instanceDataStorage.hardwareInstancedRendering = this.AK().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = SS => {
          SS.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new CS.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), bS && bS.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = 0 === this.getTotalVertices() || HS && HS.doNotInstantiate && (!0 === HS.doNotInstantiate || HS.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), SS || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        tS.parent = SS || this.parent, tS.position = this.position.clone(), tS.nf = this.nf.clone(), this.rotationQuaternion ? tS.rotationQuaternion = this.rotationQuaternion.clone() : tS.rotation = this.rotation.clone(), gS && gS(this, tS);
        for (const bS of this.getChildTransformNodes(!0)) "InstancedMesh" === bS.getClassName() && "Mesh" === tS.getClassName() && bS.MtS === this ? bS.instantiateHierarchy(tS, {
          doNotInstantiate: HS && HS.doNotInstantiate || !1,
          newSourcedMesh: tS
        }, gS) : bS.instantiateHierarchy(tS, HS, gS);
        return tS
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(SS) {
        let HS = super.toString(SS);
        if (HS += ", n vertices: " + this.getTotalVertices(), HS += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let gS = 0; gS < this.animations.length; gS++) HS += ", animation[0]: " + this.animations[gS].toString(SS);
        if (SS)
          if (this._geometry) {
            const SS = this.mgS(),
              gS = this.getVerticesData(dS.h.PositionKind);
            gS && SS && (HS += ", flat shading: " + (gS.length / 3 === SS.length ? "YES" : "NO"))
          } else HS += ", flat shading: UNKNOWN";
        return HS
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const SS of this.instances) SS._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const SS = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((HS, gS) => HS.distanceOrScreenCoverage < gS.distanceOrScreenCoverage ? SS : HS.distanceOrScreenCoverage > gS.distanceOrScreenCoverage ? -SS : 0))
      }
      addLODLevel(SS, HS) {
        if (HS && HS._masterMesh) return WS.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const gS = new sS(SS, HS);
        return this._internalMeshDataInfo._LODLevels.push(gS), HS && (HS._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(SS) {
        const HS = this._internalMeshDataInfo;
        for (let gS = 0; gS < HS._LODLevels.length; gS++) {
          const tS = HS._LODLevels[gS];
          if (tS.distanceOrScreenCoverage === SS) return tS.mesh
        }
        return null
      }
      removeLODLevel(SS) {
        const HS = this._internalMeshDataInfo;
        for (let gS = 0; gS < HS._LODLevels.length; gS++) HS._LODLevels[gS].mesh === SS && (HS._LODLevels.splice(gS, 1), SS && (SS._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(SS, HS) {
        const gS = this._internalMeshDataInfo;
        if (!gS._LODLevels || 0 === gS._LODLevels.length) return this;
        const tS = HS || this.hA().QtS,
          bS = SS.mode === hS.b.ORTHOGRAPHIC_CAMERA ? SS.minZ : tS.centerWorld.subtract(SS.globalPosition).length();
        let XS = bS,
          xS = 1;
        if (gS._useLODScreenCoverage) {
          const HS = SS.screenArea;
          let gS = tS.radiusWorld * SS.minZ / bS;
          gS = gS * gS * Math.PI, XS = gS / HS, xS = -1
        }
        if (xS * gS._LODLevels[gS._LODLevels.length - 1].distanceOrScreenCoverage > xS * XS) return this.onLODLevelSelection && this.onLODLevelSelection(XS, this, this), this;
        for (let NS = 0; NS < gS._LODLevels.length; NS++) {
          const SS = gS._LODLevels[NS];
          if (xS * SS.distanceOrScreenCoverage < xS * XS) {
            if (SS.mesh) {
              if (4 === SS.mesh.delayLoadState) return SS.mesh._checkDelayState(), this;
              if (2 === SS.mesh.delayLoadState) return this;
              SS.mesh._preActivate(), SS.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(XS, this, SS.mesh), SS.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(XS, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(SS, HS, gS, tS) {
        if (!this._geometry) return null;
        let bS = tS ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[SS]?.getFloatData(this.instances.length + 1, gS || HS && 1 !== this._geometry.meshes.length);
        return bS || (bS = this._geometry.getVerticesData(SS, HS, gS)), bS
      }
      copyVerticesData(SS, HS) {
        this._geometry && this._geometry.copyVerticesData(SS, HS)
      }
      getVertexBuffer(SS, HS) {
        return this._geometry ? (HS ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[SS]) ?? this._geometry.getVertexBuffer(SS) : null
      }
      isVerticesDataPresent(SS, HS) {
        return this._geometry ? !HS && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[SS] || this._geometry.isVerticesDataPresent(SS) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(SS)
      }
      isVertexBufferUpdatable(SS, HS) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(SS);
        if (!HS) {
          const HS = this._userInstancedBuffersStorage?.vertexBuffers[SS];
          if (HS) return HS.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(SS)
      }
      getVerticesDataKinds(SS) {
        if (!this._geometry) {
          const SS = [];
          if (this._delayInfo)
            for (const HS of this._delayInfo) SS.push(HS);
          return SS
        }
        const HS = this._geometry.getVerticesDataKinds();
        if (!SS && this._userInstancedBuffersStorage)
          for (const gS in this._userInstancedBuffersStorage.vertexBuffers) - 1 === HS.indexOf(gS) && HS.push(gS);
        return HS
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      mgS(SS, HS) {
        return this._geometry ? this._geometry.mgS(SS, HS) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(SS)) return !1;
        if (!this.dD || 0 === this.dD.length) return !0;
        if (!SS) return !0;
        const gS = this.AK(),
          tS = this.lL(),
          bS = HS || gS.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const XS = this.material || tS.defaultMaterial;
        if (XS)
          if (XS._storeEffectOnSubMeshes)
            for (const NS of this.dD) {
              const SS = NS.zK();
              if (SS)
                if (SS._storeEffectOnSubMeshes) {
                  if (!SS.isReadyForSubMesh(this, NS, bS)) return !1
                } else if (!SS.isReady(this, bS)) return !1
            } else if (!XS.isReady(this, bS)) return !1;
        const xS = gS.currentRenderPassId;
        for (const NS of this.lightSources) {
          const SS = NS.getShadowGenerators();
          if (!SS) continue;
          const HS = SS.values();
          for (let tS = HS.next(); !0 !== tS.done; tS = HS.next()) {
            const SS = tS.value;
            if (SS && (!SS.getShadowMap()?.renderList || SS.getShadowMap()?.renderList && -1 !== SS.getShadowMap()?.renderList?.indexOf(this))) {
              const HS = SS.getShadowMap().renderPassIds ?? [gS.currentRenderPassId];
              for (let tS = 0; tS < HS.length; ++tS) {
                gS.currentRenderPassId = HS[tS];
                for (const HS of this.dD)
                  if (!SS.isReady(HS, bS, HS.zK()?.needAlphaBlendingForMesh(this) ?? !1)) return gS.currentRenderPassId = xS, !1
              }
              gS.currentRenderPassId = xS
            }
          }
        }
        for (const NS of this._internalMeshDataInfo._LODLevels)
          if (NS.mesh && !NS.mesh.isReady(bS)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      UK() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(SS) {
        this._instanceDataStorage.overridenInstanceCount = SS
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const SS = this._instanceDataStorage.engine.currentRenderPassId;
        let HS = this._instanceDataStorage.renderPasses[SS];
        return HS || (HS = new MS, this._instanceDataStorage.renderPasses[SS] = HS), HS
      }
      _preActivate() {
        const SS = this._internalMeshDataInfo,
          HS = this.lL().getRenderId();
        return SS._preActivateId === HS || (SS._preActivateId = HS, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(SS) {
        const HS = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return HS.visibleInstances && (HS.visibleInstances.intermediateDefaultRenderId = SS), this
      }
      _registerInstanceForRenderId(SS, HS) {
        const gS = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return gS.visibleInstances || (gS.visibleInstances = {
          defaultRenderId: HS,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), gS.visibleInstances[HS] || (void 0 === gS.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete gS.visibleInstances[gS.previousRenderId], gS.previousRenderId = HS, gS.visibleInstances[HS] = new Array), gS.visibleInstances[HS].push(SS), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.WK || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let SS, HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.hA().isLocked) return this;
        SS = "object" === typeof HS ? HS : {
          applySkeleton: HS,
          applyMorph: gS
        };
        const tS = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(SS, null, dS.h.PositionKind), tS), this
      }
      _createGlobalSubMesh(SS) {
        const HS = this.getTotalVertices();
        if (!HS || !this.mgS()) return null;
        if (this.dD && this.dD.length > 0) {
          const gS = this.mgS();
          if (!gS) return null;
          const tS = gS.length;
          let bS = !1;
          if (SS) bS = !0;
          else
            for (const SS of this.dD) {
              if (SS.indexStart + SS.indexCount > tS) {
                bS = !0;
                break
              }
              if (SS.verticesStart + SS.verticesCount > HS) {
                bS = !0;
                break
              }
            }
          if (!bS) return this.dD[0]
        }
        return this.releaseSubMeshes(), new LS.e(0, 0, HS, 0, this.getTotalIndices() || (this.isUnIndexed ? HS : 0), this)
      }
      subdivide(SS) {
        if (SS < 1) return;
        const HS = this.getTotalIndices();
        let gS = HS / SS | 0,
          tS = 0;
        for (; gS % 3 !== 0;) gS++;
        this.releaseSubMeshes();
        for (let bS = 0; bS < SS && !(tS >= HS); bS++) LS.e.CreateFromIndices(0, tS, tS + gS >= HS ? HS - tS : gS, this, void 0, !1), tS += gS;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(SS, HS, gS, tS);
        else {
          const tS = new cS.e;
          tS.set(HS, SS);
          const bS = this.lL();
          new vS.e(vS.e.RandomId(), bS, tS, gS, this)
        }
        return this
      }
      removeVerticesData(SS) {
        this._geometry && this._geometry.removeVerticesData(SS)
      }
      markVerticesDataAsUpdatable(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gS = this.getVertexBuffer(SS);
        gS && gS.isUpdatable() !== HS && this.setVerticesData(SS, this.getVerticesData(SS), HS)
      }
      setVerticesBuffer(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = vS.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(SS, gS, HS), this
      }
      updateVerticesData(SS, HS, gS, tS) {
        return this._geometry ? (tS ? (this.makeGeometryUnique(), this.updateVerticesData(SS, HS, gS, !1)) : this._geometry.updateVerticesData(SS, HS, gS), this) : this
      }
      updateMeshPositions(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gS = this.getVerticesData(dS.h.PositionKind);
        if (!gS) return this;
        if (SS(gS), this.updateVerticesData(dS.h.PositionKind, gS, !1, !1), HS) {
          const SS = this.mgS(),
            HS = this.getVerticesData(dS.h.NormalKind);
          if (!HS) return this;
          cS.e.ComputeNormals(gS, SS, HS), this.updateVerticesData(dS.h.NormalKind, HS, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const SS = this._geometry,
          HS = this._geometry.copy(vS.e.RandomId());
        return SS.releaseForMesh(this, !0), HS.applyToMesh(this), this
      }
      setIndexBuffer(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bS = this._geometry;
        bS || (bS = new vS.e(vS.e.RandomId(), this.lL(), void 0, void 0, this)), bS.setIndexBuffer(SS, HS, gS, tS)
      }
      setIndices(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(SS, HS, gS, tS);
        else {
          const tS = new cS.e;
          tS.indices = SS;
          const bS = this.lL();
          new vS.e(vS.e.RandomId(), bS, tS, gS, this, HS)
        }
        return this
      }
      updateIndices(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(SS, HS, gS), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(SS, HS, gS) {
        let tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const bS = this.lL().AK();
        let XS;
        if (this._unIndexed)
          if (this._getRenderingFillMode(gS) === YS.d.WireFrameFillMode) XS = SS._getLinesIndexBuffer(this.mgS(), bS);
          else XS = null;
        else switch (this._getRenderingFillMode(gS)) {
          case YS.d.PointFillMode:
            XS = null;
            break;
          case YS.d.WireFrameFillMode:
            XS = SS._getLinesIndexBuffer(this.mgS(), bS);
            break;
          default:
          case YS.d.TriangleFillMode:
            XS = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(HS, XS, tS)
      }
      _bindDirect(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(SS), gS && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const SS = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const HS in SS) this._userInstancedBuffersStorage.vertexBuffers[HS] = SS[HS]
          }
          this._geometry._bind(SS, HS, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(SS, HS);
        return this
      }
      _draw(SS, HS, gS) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const tS = this.lL().AK(),
          bS = tS._currentMaterialContext,
          XS = bS && bS.useVertexPulling;
        return this._unIndexed && HS !== YS.d.WireFrameFillMode || HS == YS.d.PointFillMode ? tS.drawArraysType(HS, SS.verticesStart, SS.verticesCount, this.forcedInstanceCount || gS) : HS == YS.d.WireFrameFillMode ? tS.drawElementsType(HS, 0, SS._linesIndexCount, this.forcedInstanceCount || gS) : XS ? tS.drawArraysType(HS, SS.indexStart, SS.indexCount, this.forcedInstanceCount || gS) : tS.drawElementsType(HS, SS.indexStart, SS.indexCount, this.forcedInstanceCount || gS), this
      }
      registerBeforeRender(SS) {
        return this.onBeforeRenderObservable.add(SS), this
      }
      unregisterBeforeRender(SS) {
        return this.onBeforeRenderObservable.removeCallback(SS), this
      }
      registerAfterRender(SS) {
        return this.onAfterRenderObservable.add(SS), this
      }
      unregisterAfterRender(SS) {
        return this.onAfterRenderObservable.removeCallback(SS), this
      }
      _getInstancesRenderList(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (HS) return gS.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[SS] = !1, gS.batchCacheReplacementModeInFrozenMode.renderSelf[SS] = !0, gS.batchCacheReplacementModeInFrozenMode;
          if (gS.previousBatch) return gS.previousBatch
        }
        const tS = this.lL(),
          bS = tS._isInIntermediateRendering(),
          XS = bS ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          xS = gS.batchCache;
        if (xS.mustReturn = !1, xS.renderSelf[SS] = HS || !XS && this.isEnabled() && this.isVisible, xS.visibleInstances[SS] = null, gS.visibleInstances && !HS) {
          const HS = gS.visibleInstances,
            XS = tS.getRenderId(),
            NS = bS ? HS.intermediateDefaultRenderId : HS.defaultRenderId;
          xS.visibleInstances[SS] = HS[XS], !xS.visibleInstances[SS] && NS && (xS.visibleInstances[SS] = HS[NS])
        }
        return xS.hardwareInstancedRendering[SS] = !HS && this._instanceDataStorage.hardwareInstancedRendering && null !== xS.visibleInstances[SS] && void 0 !== xS.visibleInstances[SS], gS.previousBatch = xS, xS
      }
      _updateInstancedBuffers(SS, HS, gS, tS, bS, XS) {
        const xS = HS.visibleInstances[SS._id],
          NS = xS ? xS.length : 0,
          qS = HS.parent,
          uS = this._instanceDataStorage;
        let IS = qS.instancesBuffer,
          fS = qS.instancesPreviousBuffer,
          kS = 0,
          aS = 0;
        const KS = HS.renderSelf[SS._id],
          jS = this._scene.floatingOriginOffset,
          GS = !IS || gS !== qS.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !qS.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || uS.isFrozen && !GS) aS = (KS ? 1 : 0) + NS;
        else {
          const HS = this.getWorldMatrix();
          if (KS) {
            this._scene.needsPreviousWorldMatrices && (uS.masterMeshPreviousWorldMatrix ? (uS.masterMeshPreviousWorldMatrix.copyToArray(qS.instancesPreviousData, kS), uS.masterMeshPreviousWorldMatrix.dJ(HS)) : (uS.masterMeshPreviousWorldMatrix = HS.clone(), uS.masterMeshPreviousWorldMatrix.copyToArray(qS.instancesPreviousData, kS))), HS.copyToArray(qS.instancesData, kS);
            const SS = HS.lgS();
            qS.instancesData[kS + 12] = SS[12] - jS.x, qS.instancesData[kS + 13] = SS[13] - jS.y, qS.instancesData[kS + 14] = SS[14] - jS.z, kS += 16, aS++
          }
          if (xS) {
            if (mS.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && SS.zK()?.needAlphaBlendingForMesh(SS.getRenderingMesh())) {
              const SS = this._scene.activeCamera.globalPosition;
              for (let HS = 0; HS < xS.length; HS++) {
                const gS = xS[HS];
                gS._distanceToCamera = ZS.n.Distance(gS.hA().QtS.centerWorld, SS)
              }
              xS.sort(((SS, HS) => SS._distanceToCamera > HS._distanceToCamera ? -1 : SS._distanceToCamera < HS._distanceToCamera ? 1 : 0))
            }
            for (let SS = 0; SS < xS.length; SS++) {
              const HS = xS[SS],
                gS = HS.getWorldMatrix();
              gS.copyToArray(qS.instancesData, kS), this._scene.needsPreviousWorldMatrices && (HS._previousWorldMatrix ? (HS._previousWorldMatrix.copyToArray(qS.instancesPreviousData, kS), HS._previousWorldMatrix.dJ(gS)) : (HS._previousWorldMatrix = gS.clone(), HS._previousWorldMatrix.copyToArray(qS.instancesPreviousData, kS)));
              const tS = gS.lgS();
              qS.instancesData[kS + 12] = tS[12] - jS.x, qS.instancesData[kS + 13] = tS[13] - jS.y, qS.instancesData[kS + 14] = tS[14] - jS.z, kS += 16, aS++
            }
          }
        }
        if (GS) {
          let SS;
          if (IS && IS.dispose(), fS && fS.dispose(), IS = new dS.b(tS, qS.instancesData, !0, 16, !1, !0), qS.instancesBuffer = IS, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.AK().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) SS = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const HS = this._instanceDataStorage.engine.currentRenderPassId;
            SS = this._userInstancedBuffersStorage.renderPasses[HS], SS || (this._userInstancedBuffersStorage.renderPasses[HS] = SS = {})
          }
          SS.world0 = IS.createVertexBuffer("world0", 0, 4), SS.world1 = IS.createVertexBuffer("world1", 4, 4), SS.world2 = IS.createVertexBuffer("world2", 8, 4), SS.world3 = IS.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (fS = new dS.b(tS, qS.instancesPreviousData, !0, 16, !1, !0), qS.instancesPreviousBuffer = fS, SS.previousWorld0 = fS.createVertexBuffer("previousWorld0", 0, 4), SS.previousWorld1 = fS.createVertexBuffer("previousWorld1", 4, 4), SS.previousWorld2 = fS.createVertexBuffer("previousWorld2", 8, 4), SS.previousWorld3 = fS.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (IS.updateDirectly(qS.instancesData, 0, aS), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || fS.updateDirectly(qS.instancesPreviousData, 0, aS));
        this._processInstancedBuffers(xS, KS), XS && void 0 !== bS && (this.lL()._activeIndices.addCount(SS.indexCount * aS, !1), tS._currentDrawContext && (tS._currentDrawContext.useInstancing = !0), this._bind(SS, XS, bS), this._draw(SS, bS, aS)), !this._scene.needsPreviousWorldMatrices || GS || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || fS.updateDirectly(qS.instancesData, 0, aS)
      }
      _renderWithInstances(SS, HS, gS, tS, bS) {
        const XS = gS.visibleInstances[SS._id],
          xS = XS ? XS.length : 0,
          NS = gS.parent,
          qS = NS.instancesBufferSize,
          uS = 16 * (xS + 1) * 4;
        for (; NS.instancesBufferSize < uS;) NS.instancesBufferSize *= 2;
        return NS.instancesData && qS == NS.instancesBufferSize || (NS.instancesData = new Float32Array(NS.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !NS.instancesPreviousData || qS != NS.instancesBufferSize) && (NS.instancesPreviousData = new Float32Array(NS.instancesBufferSize / 4)), this._updateInstancedBuffers(SS, gS, qS, bS, HS, tS), bS.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(SS, HS, gS, tS) {
        const bS = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.lL()._activeIndices.addCount(SS.indexCount * bS, !1), tS._currentDrawContext && (tS._currentDrawContext.useInstancing = !0), this._bind(SS, gS, HS), this._draw(SS, HS, bS), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, bS) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), tS.unbindInstanceAttributes()
      }
      _processInstancedBuffers(SS, HS) {}
      _processRendering(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = this.lL(),
          uS = qS.AK();
        if (tS = this._getRenderingFillMode(tS), XS && HS.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(HS, tS, gS, uS), this;
        if (XS) this._renderWithInstances(HS, tS, bS, gS, uS);
        else {
          uS._currentDrawContext && (uS._currentDrawContext.useInstancing = !1);
          let gS = 0;
          bS.renderSelf[HS._id] && (xS && xS(!1, SS.getWorldMatrix(), NS), gS++, this._draw(HS, tS, this._instanceDataStorage.overridenInstanceCount));
          const XS = bS.visibleInstances[HS._id];
          if (XS) {
            const SS = XS.length;
            gS += SS;
            for (let gS = 0; gS < SS; gS++) {
              const SS = XS[gS].getWorldMatrix();
              xS && xS(!0, SS, NS), this._draw(HS, tS)
            }
          }
          qS._activeIndices.addCount(HS.indexCount * gS, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        SS?.instancesBuffer && (HS && SS.instancesBuffer.dispose(), SS.instancesBuffer = null), SS?.instancesPreviousBuffer && (HS && SS.instancesPreviousBuffer.dispose(), SS.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const HS in this._instanceDataStorage.renderPasses) {
          const gS = this._instanceDataStorage.renderPasses[HS];
          this._disposeInstanceDataStorageRenderPass(gS, SS)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, SS), this._userInstancedBuffersStorage) {
          for (const HS in this._userInstancedBuffersStorage.vertexBuffers) {
            const gS = this._userInstancedBuffersStorage.vertexBuffers[HS];
            gS && (SS && gS.dispose(), this._userInstancedBuffersStorage.vertexBuffers[HS] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(SS)
      }
      _releaseRenderPassId(SS) {
        const HS = this._instanceDataStorage.renderPasses[SS];
        if (HS && (this._disposeInstanceDataStorageRenderPass(HS, !0), delete this._instanceDataStorage.renderPasses[SS]), this._userInstancedBuffersStorage?.renderPasses) {
          const HS = this._userInstancedBuffersStorage.renderPasses[SS];
          if (HS)
            for (const SS in HS) HS[SS]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[SS]
        }
        const gS = this._userInstancedBuffersStorage?.interleavedBuffers;
        gS?.[SS] && (gS[SS].buffer.dispose(), delete gS[SS])
      }
      _freeze() {
        if (this.dD) {
          for (let SS = 0; SS < this.dD.length; SS++) this._getInstancesRenderList(SS);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const SS in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[SS].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const XS = this._scene.AK(),
          xS = XS.currentRenderPassId;
        if (void 0 !== SS && (XS.currentRenderPassId = SS), tS)(!bS || bS && tS.isInFrustum(this._scene._frustumPlanes)) && this.render(tS, !!HS, gS);
        else
          for (let NS = 0; NS < this.dD.length; NS++) {
            const SS = this.dD[NS];
            (!bS || bS && SS.isInFrustum(this._scene._frustumPlanes)) && this.render(SS, !!HS, gS)
          }
        return void 0 !== SS && (XS.currentRenderPassId = xS), this
      }
      directRender() {
        if (!this.dD) return this;
        for (const SS of this.dD) this.render(SS, !1);
        return this
      }
      render(SS, HS, gS) {
        const tS = this.lL(),
          bS = tS.AK();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const XS = tS.activeCameras?.length ?? 0,
          xS = XS > 1 && tS.activeCamera === tS.activeCameras[0] || XS <= 1,
          NS = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== bS.currentRenderPassId;
        if (xS && this._checkOcclusionQuery(NS) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const qS = this._getInstancesRenderList(SS._id, !!gS);
        if (qS.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let uS = 0,
          IS = null;
        this.ignoreCameraMaxZ && tS.activeCamera && !tS._isInIntermediateRendering() && (uS = tS.activeCamera.maxZ, IS = tS.activeCamera, tS.activeCamera.maxZ = 0, tS.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const fS = SS.getRenderingMesh(),
          kS = qS.hardwareInstancedRendering[SS._id] || fS.hasThinInstances || !!this._userInstancedBuffersStorage && !SS.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          aS = this._instanceDataStorage,
          KS = SS.zK();
        if (!KS) return IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), this;
        if (aS.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === KS) {
          if (KS._storeEffectOnSubMeshes && !SS._drawWrapper?._wasPreviouslyReady || !KS._storeEffectOnSubMeshes && !KS._getDrawWrapper()._wasPreviouslyReady) return IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), this
        } else {
          if (KS._storeEffectOnSubMeshes) {
            if (!KS.isReadyForSubMesh(this, SS, kS)) return IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), this
          } else if (!KS.isReady(this, kS)) return IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = KS
        }
        if (HS) {
          const SS = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === SS.alphaModes.length) bS.setAlphaMode(SS.alphaMode);
          else
            for (let HS = 0; HS < SS.alphaModes.length; HS++) {
              const gS = SS.alphaModes[HS];
              bS.setAlphaMode(void 0 !== gS ? gS : 2, !1, HS)
            }
        }
        let jS;
        jS = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? SS._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const GS = jS?.effect ?? null;
        for (let hS = 0, ZS = tS._beforeRenderingMeshStage; hS < ZS.length; hS++) {
          ZS[hS].action(this, SS, qS, GS)
        }
        if (!jS || !GS) return IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), this;
        const CS = gS || this;
        let nS;
        if (!aS.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const SS = CS._getWorldMatrixDeterminant();
          nS = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), SS < 0 && (nS = nS === YS.d.ClockWiseSideOrientation ? YS.d.CounterClockWiseSideOrientation : YS.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = nS
        }
        const PS = this._internalMeshDataInfo._effectiveMaterial._preBind(jS, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && bS.setDepthWrite(!0);
        const QS = this._internalMeshDataInfo._effectiveMaterial,
          DS = QS.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), kS || this._bind(SS, GS, DS, !1);
        const wS = CS.getWorldMatrix();
        QS._storeEffectOnSubMeshes ? QS.bindForSubMesh(wS, this, SS) : QS.bind(wS, this);
        try {
          AS.d._BindAttachmentsForEffect(bS, GS) && (!QS.backFaceCulling && QS.separateCullingPass && (bS.setState(!0, QS.zOffset, !1, !PS, QS.cullBackFaces, QS.stencil, QS.zOffsetUnits), this._processRendering(this, SS, GS, DS, qS, kS, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), bS.setState(!0, QS.zOffset, !1, PS, QS.cullBackFaces, QS.stencil, QS.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(SS)), this._processRendering(this, SS, GS, DS, qS, kS, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          AS.d._RestoreAttachments(bS)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let hS = 0, ZS = tS._afterRenderingMeshStage; hS < ZS.length; hS++) {
          ZS[hS].action(this, SS, qS, GS)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), IS && (IS.maxZ = uS, tS.updateTransformMatrix(!0)), 2 !== tS.performancePriority || aS.isFrozen || this._freeze(), this
      }
      _renderRunFollower(SS, HS) {
        const gS = this._scene,
          tS = gS._engine;
        if (tS.isWebGPU || SS._mesh !== this || 0 !== this.instances.length || this.render !== mS.prototype.render) return !1;
        const bS = SS.zK();
        if (!bS || bS !== gS._cachedMaterial || void 0 === bS._canBindRunFollower) return !1;
        const XS = SS._drawWrapper,
          xS = XS?.effect;
        if (!xS || xS !== gS._cachedEffect || this.visibility !== gS._cachedVisibility || XS._forceRebindOnNextCall) return !1;
        const NS = this.hasThinInstances;
        if (!NS && this._userInstancedBuffersStorage) return !1;
        if (!XS._wasPreviouslyReady || XS._wasPreviouslyUsingInstances !== NS) return !1;
        const qS = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || gS._isInIntermediateRendering() || 0 !== gS._beforeRenderingMeshStage.length || 0 !== gS._afterRenderingMeshStage.length || qS._onBeforeRenderObservable?.hasObservers() || qS._onBeforeBindObservable?.hasObservers() || qS._onAfterRenderObservable?.hasObservers()) return !1;
        const uS = this.occlusionType;
        if (void 0 !== uS && uS !== ES.b.OCCLUSION_TYPE_NONE || !bS._canBindRunFollower(gS, tS, this, SS, xS)) return !1;
        const IS = this._internalAbstractMeshDataInfo,
          fS = IS._isActiveIntermediate;
        fS ? IS._isActiveIntermediate = !1 : IS._isActive = !1;
        const kS = gS.activeCameras?.length ?? 0;
        (kS > 1 && gS.activeCamera === gS.activeCameras[0] || kS <= 1) && this._checkOcclusionQuery(!1);
        const aS = this._getInstancesRenderList(SS._id);
        if (aS.mustReturn) return !0;
        if (!NS && !aS.renderSelf[SS._id]) return fS ? IS._isActiveIntermediate = !0 : IS._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (qS._effectiveMaterial = bS, HS)
          if (1 === bS.alphaModes.length) tS.setAlphaMode(bS.alphaMode);
          else
            for (let jS = 0; jS < bS.alphaModes.length; jS++) {
              const SS = bS.alphaModes[jS];
              tS.setAlphaMode(void 0 !== SS ? SS : 2, !1, jS)
            }
        if (bS.backFaceCulling || null !== bS.sideOrientation || bS._twoSidedLighting) {
          const SS = this._getWorldMatrixDeterminant();
          let HS = bS._getEffectiveOrientation(this);
          SS < 0 && (HS = HS === YS.d.ClockWiseSideOrientation ? YS.d.CounterClockWiseSideOrientation : YS.d.ClockWiseSideOrientation), qS._effectiveSideOrientation = HS
        }
        bS._preBind(XS, qS._effectiveSideOrientation), bS.forceDepthWrite && tS.setDepthWrite(!0);
        const KS = bS.fillMode;
        return NS || this._bind(SS, xS, KS, !1), bS._bindRunFollower(this.getWorldMatrix(), this, SS, xS), this._processRendering(this, SS, xS, KS, aS, NS, this._onBeforeDraw, bS), bS.unbind(), 2 === gS.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(dS.h.MatricesWeightsKind) && (this.isVerticesDataPresent(dS.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const SS = this.getVerticesData(dS.h.MatricesWeightsKind),
          HS = SS.length;
        for (let gS = 0; gS < HS; gS += 4) {
          const HS = SS[gS] + SS[gS + 1] + SS[gS + 2] + SS[gS + 3];
          if (0 === HS) SS[gS] = 1;
          else {
            const tS = 1 / HS;
            SS[gS] *= tS, SS[gS + 1] *= tS, SS[gS + 2] *= tS, SS[gS + 3] *= tS
          }
        }
        this.setVerticesData(dS.h.MatricesWeightsKind, SS)
      }
      _normalizeSkinWeightsAndExtra() {
        const SS = this.getVerticesData(dS.h.MatricesWeightsExtraKind),
          HS = this.getVerticesData(dS.h.MatricesWeightsKind),
          gS = HS.length;
        for (let tS = 0; tS < gS; tS += 4) {
          let gS = HS[tS] + HS[tS + 1] + HS[tS + 2] + HS[tS + 3];
          if (gS += SS[tS] + SS[tS + 1] + SS[tS + 2] + SS[tS + 3], 0 === gS) HS[tS] = 1;
          else {
            const bS = 1 / gS;
            HS[tS] *= bS, HS[tS + 1] *= bS, HS[tS + 2] *= bS, HS[tS + 3] *= bS, SS[tS] *= bS, SS[tS + 1] *= bS, SS[tS + 2] *= bS, SS[tS + 3] *= bS
          }
        }
        this.setVerticesData(dS.h.MatricesWeightsKind, HS), this.setVerticesData(dS.h.MatricesWeightsKind, SS)
      }
      validateSkinning() {
        const SS = this.getVerticesData(dS.h.MatricesWeightsExtraKind),
          HS = this.getVerticesData(dS.h.MatricesWeightsKind);
        if (null === HS || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          tK: "not skinned"
        };
        const gS = HS.length;
        let tS = 0,
          bS = 0,
          XS = 0,
          xS = 0;
        const NS = null === SS ? 4 : 8,
          qS = [];
        for (let aS = 0; aS <= NS; aS++) qS[aS] = 0;
        for (let aS = 0; aS < gS; aS += 4) {
          let gS = HS[aS],
            uS = gS,
            IS = 0 === uS ? 0 : 1;
          for (let bS = 1; bS < NS; bS++) {
            const XS = bS < 4 ? HS[aS + bS] : SS[aS + bS - 4];
            XS > gS && tS++, 0 !== XS && IS++, uS += XS, gS = XS
          }
          if (qS[IS]++, IS > XS && (XS = IS), 0 === uS) bS++;
          else {
            const gS = 1 / uS;
            let tS = 0;
            for (let bS = 0; bS < NS; bS++) tS += bS < 4 ? Math.abs(HS[aS + bS] - HS[aS + bS] * gS) : Math.abs(SS[aS + bS - 4] - SS[aS + bS - 4] * gS);
            tS > .001 && xS++
          }
        }
        const uS = this.skeleton.bones.length,
          IS = this.getVerticesData(dS.h.MatricesIndicesKind),
          fS = this.getVerticesData(dS.h.MatricesIndicesExtraKind);
        let kS = 0;
        for (let aS = 0; aS < gS; aS += 4)
          for (let SS = 0; SS < NS; SS++) {
            const HS = SS < 4 ? IS[aS + SS] : fS[aS + SS - 4];
            (HS >= uS || HS < 0) && kS++
          }
        return {
          skinned: !0,
          valid: 0 === bS && 0 === xS && 0 === kS,
          tK: "Number of Weights = " + gS / 4 + "\nMaximum influences = " + XS + "\nMissing Weights = " + bS + "\nNot Sorted = " + tS + "\nNot Normalized = " + xS + "\nWeightCounts = [" + qS + "]\nNumber of bones = " + uS + "\nBad Bone Indices = " + kS
        }
      }
      _checkDelayState() {
        const SS = this.lL();
        return this._geometry ? this._geometry.load(SS) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(SS)), this
      }
      _queueLoad(SS) {
        SS.addPendingData(this);
        const HS = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const gS = await SS._loadDelayedFileAsync(this.delayLoadingFile, HS, !0);
            gS instanceof ArrayBuffer ? this._delayLoadingFunction(gS, this) : this._delayLoadingFunction(JSON.parse(gS), this);
            for (const SS of this.instances) SS.refreshBoundingInfo(), SS._syncSubMeshes();
            this.delayLoadState = 1, SS.removePendingData(this)
          } catch (gS) {
            SS.removePendingData(this), SS.Ow || WS.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${gS}`)
          }
        })(), this
      }
      isInFrustum(SS) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(SS) && (this._checkDelayState(), !0))
      }
      setMaterialById(SS) {
        const HS = this.lL().materials;
        let gS;
        for (gS = HS.length - 1; gS > -1; gS--)
          if (HS[gS].id === SS) return this.material = HS[gS], this;
        const tS = this.lL().multiMaterials;
        for (gS = tS.length - 1; gS > -1; gS--)
          if (tS[gS].id === SS) return this.material = tS[gS], this;
        return this
      }
      getAnimatables() {
        const SS = [];
        return this.material && SS.push(this.material), this.skeleton && SS.push(this.skeleton), SS
      }
      bakeTransformIntoVertices(SS) {
        if (!this.isVerticesDataPresent(dS.h.PositionKind)) return this;
        const HS = this.dD.splice(0);
        this._resetPointsArrayCache();
        let gS = this.getVerticesData(dS.h.PositionKind);
        const tS = ZS.n.Zero();
        let bS;
        for (bS = 0; bS < gS.length; bS += 3) ZS.n.TransformCoordinatesFromFloatsToRef(gS[bS], gS[bS + 1], gS[bS + 2], SS, tS).toArray(gS, bS);
        if (this.setVerticesData(dS.h.PositionKind, gS, this.getVertexBuffer(dS.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(dS.h.NormalKind)) {
          for (gS = this.getVerticesData(dS.h.NormalKind), bS = 0; bS < gS.length; bS += 3) ZS.n.TransformNormalFromFloatsToRef(gS[bS], gS[bS + 1], gS[bS + 2], SS, tS).normalize().toArray(gS, bS);
          this.setVerticesData(dS.h.NormalKind, gS, this.getVertexBuffer(dS.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(dS.h.TangentKind)) {
          for (gS = this.getVerticesData(dS.h.TangentKind), bS = 0; bS < gS.length; bS += 4) ZS.n.TransformNormalFromFloatsToRef(gS[bS], gS[bS + 1], gS[bS + 2], SS, tS).normalize().toArray(gS, bS);
          this.setVerticesData(dS.h.TangentKind, gS, this.getVertexBuffer(dS.h.TangentKind).isUpdatable())
        }
        return SS.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.dD = HS, this
      }
      bakeCurrentTransformIntoVertices() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(SS), this
      }
      get _positions() {
        return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
      }
      _resetPointsArrayCache() {
        return this._geometry && this._geometry._resetPointsArrayCache(), this
      }
      _generatePointsArray() {
        return !!this._geometry && this._geometry._generatePointsArray()
      }
      clone() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (HS && void 0 === HS._addToSceneRootNodes) {
          const gS = HS;
          return lS.source = this, lS.doNotCloneChildren = gS.doNotCloneChildren, lS.clonePhysicsImpostor = gS.clonePhysicsImpostor, lS.cloneThinInstances = gS.cloneThinInstances, new mS(SS, this.lL(), lS)
        }
        return new mS(SS, this.lL(), HS, this, gS, tS)
      }
      dispose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const gS = this._internalMeshDataInfo;
        if (gS._onBeforeDrawObservable && gS._onBeforeDrawObservable.clear(), gS._onBeforeBindObservable && gS._onBeforeBindObservable.clear(), gS._onBeforeRenderObservable && gS._onBeforeRenderObservable.clear(), gS._onAfterRenderObservable && gS._onAfterRenderObservable.clear(), gS._onBetweenPassObservable && gS._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (gS.meshMap)
            for (const SS in gS.meshMap) {
              const HS = gS.meshMap[SS];
              HS && (HS._internalMeshDataInfo._source = null, gS.meshMap[SS] = void 0)
            }
          gS._source && gS._source._internalMeshDataInfo.meshMap && (gS._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const SS = this.lL().meshes;
          for (const HS of SS) {
            const SS = HS;
            SS._internalMeshDataInfo && SS._internalMeshDataInfo._source && SS._internalMeshDataInfo._source === this && (SS._internalMeshDataInfo._source = null)
          }
        }
        gS._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(SS, HS)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(SS, HS, gS, tS, bS, XS) {
        let xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          NS = arguments.length > 7 ? arguments[7] : void 0;
        const qS = this.lL();
        return (0, PS.n)(SS, (SS => {
          const NS = SS.width,
            qS = SS.height,
            uS = this.AK().createCanvas(NS, qS).getContext("2d");
          uS.drawImage(SS, 0, 0);
          const IS = uS.getImageData(0, 0, NS, qS).data;
          this.applyDisplacementMapFromBuffer(IS, NS, qS, HS, gS, bS, XS, xS), tS && tS(this)
        }), NS || (() => {}), qS.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(SS, HS, gS, tS, bS, XS, xS) {
        let NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(dS.h.PositionKind) || !this.isVerticesDataPresent(dS.h.NormalKind) || !this.isVerticesDataPresent(dS.h.UVKind)) return WS.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const qS = this.getVerticesData(dS.h.PositionKind, !0, !0),
          uS = this.getVerticesData(dS.h.NormalKind),
          IS = this.getVerticesData(dS.h.UVKind);
        let fS = ZS.n.Zero();
        const kS = ZS.n.Zero(),
          aS = ZS.m.Zero();
        XS = XS || ZS.m.Zero(), xS = xS || new ZS.m(1, 1);
        for (let KS = 0; KS < qS.length; KS += 3) {
          ZS.n.FromArrayToRef(qS, KS, fS), ZS.n.FromArrayToRef(uS, KS, kS), ZS.m.FromArrayToRef(IS, KS / 3 * 2, aS);
          const NS = 4 * ((Math.abs(aS.x * xS.x + XS.x % 1) * (HS - 1) % HS | 0) + (Math.abs(aS.y * xS.y + XS.y % 1) * (gS - 1) % gS | 0) * HS),
            jS = .3 * (SS[NS] / 255) + .59 * (SS[NS + 1] / 255) + .11 * (SS[NS + 2] / 255);
          kS.normalize(), kS.scaleInPlace(tS + (bS - tS) * jS), fS = fS.add(kS), fS.toArray(qS, KS)
        }
        return cS.e.ComputeNormals(qS, this.mgS(), uS), NS ? (this.setVerticesData(dS.h.PositionKind, qS), this.setVerticesData(dS.h.NormalKind, uS), this.setVerticesData(dS.h.UVKind, IS)) : (this.updateVerticesData(dS.h.PositionKind, qS), this.updateVerticesData(dS.h.NormalKind, uS)), this
      }
      _getFlattenedNormals(SS, HS) {
        const gS = new Float32Array(3 * SS.length);
        let tS = 0;
        const bS = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let XS = 0; XS < SS.length; XS += 3) {
          const xS = ZS.n.FromArray(HS, 3 * SS[XS]),
            NS = ZS.n.FromArray(HS, 3 * SS[XS + 1]),
            qS = ZS.n.FromArray(HS, 3 * SS[XS + 2]),
            uS = xS.subtract(NS),
            IS = qS.subtract(NS),
            fS = ZS.n.Normalize(ZS.n.Cross(uS, IS));
          bS && fS.scaleInPlace(-1);
          for (let SS = 0; SS < 3; SS++) gS[tS++] = fS.x, gS[tS++] = fS.y, gS[tS++] = fS.z
        }
        return gS
      }
      _convertToUnIndexedMesh() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = this.getVerticesDataKinds().filter((SS => !this.getVertexBuffer(SS)?.getIsInstanced())),
          gS = this.mgS(!1, !0),
          tS = {},
          bS = (SS, HS) => {
            const tS = new Float32Array(gS.length * HS);
            let bS = 0;
            for (let XS = 0; XS < gS.length; XS++)
              for (let xS = 0; xS < HS; xS++) tS[bS++] = SS[gS[XS] * HS + xS];
            return tS
          },
          XS = this.hA(),
          xS = this.geometry ? this.dD.slice(0) : [];
        for (const NS of HS) tS[NS] = this.getVerticesData(NS);
        for (const NS of HS) {
          const HS = this.getVertexBuffer(NS),
            XS = HS.getSize();
          if (SS && NS === dS.h.NormalKind) {
            const SS = this._getFlattenedNormals(gS, tS[dS.h.PositionKind]);
            this.setVerticesData(dS.h.NormalKind, SS, HS.isUpdatable(), XS)
          } else this.setVerticesData(NS, bS(tS[NS], XS), HS.isUpdatable(), XS)
        }
        if (this.morphTargetManager) {
          for (let HS = 0; HS < this.morphTargetManager.numTargets; HS++) {
            const tS = this.morphTargetManager.getTarget(HS),
              XS = tS.getPositions();
            tS.hxS(bS(XS, 3));
            const xS = tS.getNormals();
            xS && tS.setNormals(SS ? this._getFlattenedNormals(gS, XS) : bS(xS, 3));
            const NS = tS.getTangents();
            NS && tS.setTangents(bS(NS, 3));
            const qS = tS.getUVs();
            qS && tS.setUVs(bS(qS, 2));
            const uS = tS.getColors();
            uS && tS.setColors(bS(uS, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let NS = 0; NS < gS.length; NS++) gS[NS] = NS;
        this.setIndices(gS), this._unIndexed = !0, this.releaseSubMeshes();
        for (const NS of xS) {
          const SS = NS.hA();
          LS.e.AddToMesh(NS.materialIndex, NS.indexStart, NS.indexCount, NS.indexStart, NS.indexCount, this).setBoundingInfo(SS)
        }
        return this.setBoundingInfo(XS), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = cS.e.ExtractFromMesh(this);
        let gS;
        if (SS && this.isVerticesDataPresent(dS.h.NormalKind) && HS.normals) {
          for (gS = 0; gS < HS.normals.length; gS++) HS.normals[gS] *= -1;
          this.setVerticesData(dS.h.NormalKind, HS.normals, this.isVertexBufferUpdatable(dS.h.NormalKind))
        }
        if (HS.indices) {
          let SS;
          for (gS = 0; gS < HS.indices.length; gS += 3) SS = HS.indices[gS + 1], HS.indices[gS + 1] = HS.indices[gS + 2], HS.indices[gS + 2] = SS;
          this.setIndices(HS.indices, null, this.isVertexBufferUpdatable(dS.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const HS = cS.e.ExtractFromMesh(this),
          gS = HS.indices && !Array.isArray(HS.indices) && Array.from ? Array.from(HS.indices) : HS.indices,
          tS = HS.positions && !Array.isArray(HS.positions) && Array.from ? Array.from(HS.positions) : HS.positions,
          bS = HS.uvs && !Array.isArray(HS.uvs) && Array.from ? Array.from(HS.uvs) : HS.uvs,
          XS = HS.normals && !Array.isArray(HS.normals) && Array.from ? Array.from(HS.normals) : HS.normals;
        if (gS && tS) {
          HS.indices = gS, HS.positions = tS, bS && (HS.uvs = bS), XS && (HS.normals = XS);
          const xS = SS + 1,
            NS = [];
          for (let SS = 0; SS < xS + 1; SS++) NS[SS] = [];
          let qS, uS;
          const IS = new ZS.n(0, 0, 0),
            fS = new ZS.n(0, 0, 0),
            kS = new ZS.m(0, 0),
            aS = [],
            KS = [],
            jS = [];
          let GS, CS, nS, PS = tS.length;
          bS && (CS = bS.length), XS && (nS = XS.length);
          for (let SS = 0; SS < gS.length; SS += 3) {
            KS[0] = gS[SS], KS[1] = gS[SS + 1], KS[2] = gS[SS + 2];
            for (let SS = 0; SS < 3; SS++)
              if (qS = KS[SS], uS = KS[(SS + 1) % 3], void 0 === jS[qS] && void 0 === jS[uS] ? (jS[qS] = [], jS[uS] = []) : (void 0 === jS[qS] && (jS[qS] = []), void 0 === jS[uS] && (jS[uS] = [])), void 0 === jS[qS][uS] && void 0 === jS[uS][qS]) {
                jS[qS][uS] = [], IS.x = (tS[3 * uS] - tS[3 * qS]) / xS, IS.y = (tS[3 * uS + 1] - tS[3 * qS + 1]) / xS, IS.z = (tS[3 * uS + 2] - tS[3 * qS + 2]) / xS, XS && (fS.x = (XS[3 * uS] - XS[3 * qS]) / xS, fS.y = (XS[3 * uS + 1] - XS[3 * qS + 1]) / xS, fS.z = (XS[3 * uS + 2] - XS[3 * qS + 2]) / xS), bS && (kS.x = (bS[2 * uS] - bS[2 * qS]) / xS, kS.y = (bS[2 * uS + 1] - bS[2 * qS + 1]) / xS), jS[qS][uS].push(qS);
                for (let SS = 1; SS < xS; SS++) jS[qS][uS].push(tS.length / 3), tS[PS++] = tS[3 * qS] + SS * IS.x, tS[PS++] = tS[3 * qS + 1] + SS * IS.y, tS[PS++] = tS[3 * qS + 2] + SS * IS.z, XS && (XS[nS++] = XS[3 * qS] + SS * fS.x, XS[nS++] = XS[3 * qS + 1] + SS * fS.y, XS[nS++] = XS[3 * qS + 2] + SS * fS.z), bS && (bS[CS++] = bS[2 * qS] + SS * kS.x, bS[CS++] = bS[2 * qS + 1] + SS * kS.y);
                jS[qS][uS].push(uS), jS[uS][qS] = [], GS = jS[qS][uS].length;
                for (let SS = 0; SS < GS; SS++) jS[uS][qS][SS] = jS[qS][uS][GS - 1 - SS]
              } NS[0][0] = gS[SS], NS[1][0] = jS[gS[SS]][gS[SS + 1]][1], NS[1][1] = jS[gS[SS]][gS[SS + 2]][1];
            for (let HS = 2; HS < xS; HS++) {
              NS[HS][0] = jS[gS[SS]][gS[SS + 1]][HS], NS[HS][HS] = jS[gS[SS]][gS[SS + 2]][HS], IS.x = (tS[3 * NS[HS][HS]] - tS[3 * NS[HS][0]]) / HS, IS.y = (tS[3 * NS[HS][HS] + 1] - tS[3 * NS[HS][0] + 1]) / HS, IS.z = (tS[3 * NS[HS][HS] + 2] - tS[3 * NS[HS][0] + 2]) / HS, XS && (fS.x = (XS[3 * NS[HS][HS]] - XS[3 * NS[HS][0]]) / HS, fS.y = (XS[3 * NS[HS][HS] + 1] - XS[3 * NS[HS][0] + 1]) / HS, fS.z = (XS[3 * NS[HS][HS] + 2] - XS[3 * NS[HS][0] + 2]) / HS), bS && (kS.x = (bS[2 * NS[HS][HS]] - bS[2 * NS[HS][0]]) / HS, kS.y = (bS[2 * NS[HS][HS] + 1] - bS[2 * NS[HS][0] + 1]) / HS);
              for (let SS = 1; SS < HS; SS++) NS[HS][SS] = tS.length / 3, tS[PS++] = tS[3 * NS[HS][0]] + SS * IS.x, tS[PS++] = tS[3 * NS[HS][0] + 1] + SS * IS.y, tS[PS++] = tS[3 * NS[HS][0] + 2] + SS * IS.z, XS && (XS[nS++] = XS[3 * NS[HS][0]] + SS * fS.x, XS[nS++] = XS[3 * NS[HS][0] + 1] + SS * fS.y, XS[nS++] = XS[3 * NS[HS][0] + 2] + SS * fS.z), bS && (bS[CS++] = bS[2 * NS[HS][0]] + SS * kS.x, bS[CS++] = bS[2 * NS[HS][0] + 1] + SS * kS.y)
            }
            NS[xS] = jS[gS[SS + 1]][gS[SS + 2]], aS.push(NS[0][0], NS[1][0], NS[1][1]);
            for (let SS = 1; SS < xS; SS++) {
              let HS;
              for (HS = 0; HS < SS; HS++) aS.push(NS[SS][HS], NS[SS + 1][HS], NS[SS + 1][HS + 1]), aS.push(NS[SS][HS], NS[SS + 1][HS + 1], NS[SS][HS + 1]);
              aS.push(NS[SS][HS], NS[SS + 1][HS], NS[SS + 1][HS + 1])
            }
          }
          HS.indices = aS, HS.applyToMesh(this, this.isVertexBufferUpdatable(dS.h.PositionKind))
        } else WS.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const SS = cS.e.ExtractFromMesh(this),
          HS = SS.uvs,
          gS = SS.indices,
          tS = SS.positions,
          bS = SS.colors,
          XS = SS.matricesIndices,
          xS = SS.matricesWeights,
          NS = SS.matricesIndicesExtra,
          qS = SS.matricesWeightsExtra;
        if (void 0 === gS || void 0 === tS || null === gS || null === tS) WS.b.Warn("VertexData contains empty entries");
        else {
          const uS = [],
            IS = [],
            fS = [],
            kS = [],
            aS = [],
            KS = [],
            jS = [],
            GS = [];
          let CS, nS = 0;
          const PS = {};
          let QS, DS;
          for (let SS = 0; SS < gS.length; SS += 3) {
            DS = [gS[SS], gS[SS + 1], gS[SS + 2]], CS = [];
            for (let SS = 0; SS < 3; SS++) {
              CS[SS] = "";
              for (let HS = 0; HS < 3; HS++) Math.abs(tS[3 * DS[SS] + HS]) < 1e-8 && (tS[3 * DS[SS] + HS] = 0), CS[SS] += tS[3 * DS[SS] + HS] + "|"
            }
            if (CS[0] != CS[1] && CS[0] != CS[2] && CS[1] != CS[2])
              for (let SS = 0; SS < 3; SS++) {
                if (QS = PS[CS[SS]], void 0 === QS) {
                  PS[CS[SS]] = nS, QS = nS++;
                  for (let HS = 0; HS < 3; HS++) uS.push(tS[3 * DS[SS] + HS]);
                  if (null !== bS && void 0 !== bS)
                    for (let HS = 0; HS < 4; HS++) kS.push(bS[4 * DS[SS] + HS]);
                  if (null !== HS && void 0 !== HS)
                    for (let gS = 0; gS < 2; gS++) fS.push(HS[2 * DS[SS] + gS]);
                  if (null !== XS && void 0 !== XS)
                    for (let HS = 0; HS < 4; HS++) aS.push(XS[4 * DS[SS] + HS]);
                  if (null !== xS && void 0 !== xS)
                    for (let HS = 0; HS < 4; HS++) KS.push(xS[4 * DS[SS] + HS]);
                  if (null !== NS && void 0 !== NS)
                    for (let HS = 0; HS < 4; HS++) jS.push(NS[4 * DS[SS] + HS]);
                  if (null !== qS && void 0 !== qS)
                    for (let HS = 0; HS < 4; HS++) GS.push(qS[4 * DS[SS] + HS])
                }
                IS.push(QS)
              }
          }
          const wS = [];
          cS.e.ComputeNormals(uS, IS, wS), SS.positions = uS, SS.indices = IS, SS.normals = wS, null !== HS && void 0 !== HS && (SS.uvs = fS), null !== bS && void 0 !== bS && (SS.colors = kS), null !== XS && void 0 !== XS && (SS.matricesIndices = aS), null !== xS && void 0 !== xS && (SS.matricesWeights = KS), null !== NS && void 0 !== NS && (SS.matricesIndicesExtra = jS), null !== xS && void 0 !== xS && (SS.matricesWeightsExtra = GS), SS.applyToMesh(this, this.isVertexBufferUpdatable(dS.h.PositionKind))
        }
      }
      static _instancedMeshFactory(SS, HS) {
        throw (0, US.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(SS, HS, gS) {
        throw (0, US.l)("PhysicsImpostor")
      }
      createInstance(SS) {
        const HS = mS._instancedMeshFactory(SS, this);
        return HS.parent = this.parent, HS
      }
      synchronizeInstances() {
        for (let SS = 0; SS < this.instances.length; SS++) {
          this.instances[SS]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(SS) {
        const HS = this.mgS(),
          gS = this.getVerticesData(dS.h.PositionKind);
        if (!gS || !HS) return this;
        const tS = [];
        for (let XS = 0; XS < gS.length; XS += 3) tS.push(ZS.n.FromArray(gS, XS));
        const bS = [];
        return nS.e.SyncAsyncForLoop(tS.length, 40, (SS => {
          const HS = tS.length - 1 - SS,
            gS = tS[HS];
          for (let XS = 0; XS < HS; ++XS) {
            const SS = tS[XS];
            if (gS.equals(SS)) {
              bS[HS] = XS;
              break
            }
          }
        }), (() => {
          for (let SS = 0; SS < HS.length; ++SS) HS[SS] = bS[HS[SS]] || HS[SS];
          const gS = this.dD.slice(0);
          this.setIndices(HS), this.dD = gS, SS && SS(this)
        })), this
      }
      serialize() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        SS.name = this.name, SS.id = this.id, SS.uniqueId = this.uniqueId, SS.type = this.getClassName(), DS.d && DS.d.HasTags(this) && (SS.tags = DS.d.GetTags(this)), SS.position = this.position.lgS(), this.rotationQuaternion ? SS.rotationQuaternion = this.rotationQuaternion.lgS() : this.rotation && (SS.rotation = this.rotation.lgS()), SS.nf = this.nf.lgS(), this._postMultiplyPivotMatrix ? SS.pivotMatrix = this.getPivotMatrix().lgS() : SS.localMatrix = this.getPivotMatrix().lgS(), SS.isEnabled = this.isEnabled(!1), SS.isVisible = this.isVisible, SS.infiniteDistance = this.infiniteDistance, SS.pickable = this.Fj, SS.receiveShadows = this.receiveShadows, SS.billboardMode = this.billboardMode, SS.visibility = this.visibility, SS.yK = this.yK, SS.checkCollisions = this.checkCollisions, SS.ellipsoid = this.ellipsoid.lgS(), SS.ellipsoidOffset = this.ellipsoidOffset.lgS(), SS.WK = this.WK, SS.isBlocker = this.isBlocker, SS.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (SS.aY = !0), this.parent && this.parent._serializeAsParent(SS), SS.isUnIndexed = this.isUnIndexed;
        const HS = this._geometry;
        if (HS && this.dD) {
          SS.geometryUniqueId = HS.uniqueId, SS.geometryId = HS.id, SS.dD = [];
          for (let HS = 0; HS < this.dD.length; HS++) {
            const gS = this.dD[HS];
            SS.dD.push({
              materialIndex: gS.materialIndex,
              verticesStart: gS.verticesStart,
              verticesCount: gS.verticesCount,
              indexStart: gS.indexStart,
              indexCount: gS.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (SS.materialUniqueId = this.material.uniqueId, SS.materialId = this.material.id) : (this.material = null, SS.materialUniqueId = this._scene.defaultMaterial.uniqueId, SS.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (SS.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (SS.skeletonId = this.skeleton.id, SS.skeletonUniqueId = this.skeleton.uniqueId, SS.numBoneInfluencers = this.numBoneInfluencers), this.lL()._getComponent(pS.e.NAME_PHYSICSENGINE)) {
          const HS = this.getPhysicsImpostor?.();
          HS && (SS.physicsMass = HS.getParam("gu"), SS.physicsFriction = HS.getParam("friction"), SS.physicsRestitution = HS.getParam("gu"), SS.physicsImpostor = HS.type)
        }
        this.metadata && (SS.metadata = this.metadata), 0 !== this.meshBlendingTag && (SS.meshBlendingTag = this.meshBlendingTag), SS.instances = [];
        for (let gS = 0; gS < this.instances.length; gS++) {
          const HS = this.instances[gS];
          if (HS.doNotSerialize) continue;
          const tS = {
            name: HS.name,
            id: HS.id,
            isEnabled: HS.isEnabled(!1),
            isVisible: HS.isVisible,
            Fj: HS.Fj,
            checkCollisions: HS.checkCollisions,
            position: HS.position.lgS(),
            nf: HS.nf.lgS()
          };
          if (HS.parent && HS.parent._serializeAsParent(tS), HS.rotationQuaternion ? tS.rotationQuaternion = HS.rotationQuaternion.lgS() : HS.rotation && (tS.rotation = HS.rotation.lgS()), this.lL()._getComponent(pS.e.NAME_PHYSICSENGINE)) {
            const SS = HS.getPhysicsImpostor?.();
            SS && (tS.physicsMass = SS.getParam("gu"), tS.physicsFriction = SS.getParam("friction"), tS.physicsRestitution = SS.getParam("gu"), tS.physicsImpostor = SS.type)
          }
          HS.metadata && (tS.metadata = HS.metadata), HS.actionManager && (tS.actions = HS.actionManager.serialize(HS.name)), SS.instances.push(tS), iS.b.AppendSerializedAnimations(HS, tS), tS.HG = HS.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (SS.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.CHS
          }, this._userThinInstanceBuffersStorage)) {
          const HS = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const SS in this._userThinInstanceBuffersStorage.data) HS.data[SS] = Array.from(this._userThinInstanceBuffersStorage.data[SS]), HS.sizes[SS] = this._userThinInstanceBuffersStorage.sizes[SS], HS.strides[SS] = this._userThinInstanceBuffersStorage.strides[SS];
          SS.thinInstances.userThinInstance = HS
        }
        return iS.b.AppendSerializedAnimations(this, SS), SS.HG = this.serializeAnimationRanges(), SS.layerMask = this.layerMask, SS.alphaIndex = this.alphaIndex, SS.hasVertexAlpha = this.hasVertexAlpha, SS.overlayAlpha = this.overlayAlpha, SS.overlayColor = this.overlayColor.lgS(), SS.renderOverlay = this.renderOverlay, SS.applyFog = this.applyFog, this.actionManager && (SS.actions = this.actionManager.serialize(this.name)), SS
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const SS = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (SS && SS.vertexCount) {
          if (SS.vertexCount !== this.getTotalVertices()) return WS.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (SS.isUsingTextureForTargets) return;
          for (let HS = 0; HS < SS.numInfluencers; HS++) {
            const gS = SS.getActiveTarget(HS),
              tS = gS.getPositions();
            if (!tS) return void WS.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(dS.h.PositionKind + HS, tS, !1, 3);
            const bS = gS.getNormals();
            bS && this.geometry.setVerticesData(dS.h.NormalKind + HS, bS, !1, 3);
            const XS = gS.getTangents();
            XS && this.geometry.setVerticesData(dS.h.TangentKind + HS, XS, !1, 3);
            const xS = gS.getUVs();
            xS && this.geometry.setVerticesData(dS.h.UVKind + "_" + HS, xS, !1, 2);
            const NS = gS.getUV2s();
            NS && this.geometry.setVerticesData(dS.h.UV2Kind + "_" + HS, NS, !1, 2);
            const qS = gS.getColors();
            qS && this.geometry.setVerticesData(dS.h.ColorKind + HS, qS, !1, 4)
          }
        } else {
          let SS = 0;
          for (; this.geometry.isVerticesDataPresent(dS.h.PositionKind + SS);) this.geometry.removeVerticesData(dS.h.PositionKind + SS), this.geometry.isVerticesDataPresent(dS.h.NormalKind + SS) && this.geometry.removeVerticesData(dS.h.NormalKind + SS), this.geometry.isVerticesDataPresent(dS.h.TangentKind + SS) && this.geometry.removeVerticesData(dS.h.TangentKind + SS), this.geometry.isVerticesDataPresent(dS.h.UVKind + "_" + SS) && this.geometry.removeVerticesData(dS.h.UVKind + "_" + SS), this.geometry.isVerticesDataPresent(dS.h.UV2Kind + "_" + SS) && this.geometry.removeVerticesData(dS.h.UV2Kind + "_" + SS), this.geometry.isVerticesDataPresent(dS.h.ColorKind + SS) && this.geometry.removeVerticesData(dS.h.ColorKind + SS), SS++
        }
      }
      static Parse(SS, HS, gS) {
        let tS, bS = !1;
        if (SS.type && "LinesMesh" === SS.type ? tS = mS._LinesMeshParser(SS, HS) : SS.type && "GroundMesh" === SS.type ? tS = mS._GroundMeshParser(SS, HS) : SS.type && "GoldbergMesh" === SS.type ? tS = mS._GoldbergMeshParser(SS, HS) : SS.type && "GreasedLineMesh" === SS.type ? tS = mS._GreasedLineMeshParser(SS, HS) : SS.type && "TrailMesh" === SS.type ? tS = mS._TrailMeshParser(SS, HS) : SS.type && "GaussianSplattingMesh" === SS.type ? (tS = SS._isCompound ? mS._GaussianSplattingCompoundMeshParser(SS, HS) : mS._GaussianSplattingMeshParser(SS, HS), bS = !0) : SS.type && "GaussianSplattingPartProxyMesh" === SS.type ? (tS = mS._GaussianSplattingPartProxyMeshParser(SS, HS), bS = !0) : tS = new mS(SS.name, HS), tS.id = SS.id, tS._waitingParsedUniqueId = SS.uniqueId, DS.d && DS.d.AddTagsTo(tS, SS.tags), tS.position = ZS.n.FromArray(SS.position), void 0 !== SS.metadata && (tS.metadata = SS.metadata), void 0 !== SS.meshBlendingTag && (tS.meshBlendingTag = SS.meshBlendingTag), SS.rotationQuaternion ? tS.rotationQuaternion = ZS.i.FromArray(SS.rotationQuaternion) : SS.rotation && (tS.rotation = ZS.n.FromArray(SS.rotation)), tS.nf = ZS.n.FromArray(SS.nf), SS.localMatrix ? tS.setPreTransformMatrix(ZS.e.FromArray(SS.localMatrix)) : SS.pivotMatrix && tS.setPivotMatrix(ZS.e.FromArray(SS.pivotMatrix)), tS.MJ(SS.isEnabled), tS.isVisible = SS.isVisible, tS.infiniteDistance = SS.infiniteDistance, tS.yK = !!SS.yK, tS.showBoundingBox = SS.showBoundingBox, tS.showSubMeshesBoundingBox = SS.showSubMeshesBoundingBox, void 0 !== SS.applyFog && (tS.applyFog = SS.applyFog), void 0 !== SS.pickable && (tS.Fj = SS.pickable), void 0 !== SS.alphaIndex && (tS.alphaIndex = SS.alphaIndex), tS.receiveShadows = SS.receiveShadows, void 0 !== SS.billboardMode && (tS.billboardMode = SS.billboardMode), void 0 !== SS.visibility && (tS.visibility = SS.visibility), tS.checkCollisions = SS.checkCollisions, tS.WK = !!SS.WK, SS.ellipsoid && (tS.ellipsoid = ZS.n.FromArray(SS.ellipsoid)), SS.ellipsoidOffset && (tS.ellipsoidOffset = ZS.n.FromArray(SS.ellipsoidOffset)), null != SS.overrideMaterialSideOrientation && (tS.sideOrientation = SS.overrideMaterialSideOrientation), void 0 !== SS.sideOrientation && (tS.sideOrientation = SS.sideOrientation), void 0 !== SS.isBlocker && (tS.isBlocker = SS.isBlocker), tS._shouldGenerateFlatShading = SS.useFlatShading, SS.aY && (tS._waitingData.aY = SS.aY), void 0 !== SS.parentId && (tS._waitingParentId = SS.parentId), void 0 !== SS.parentInstanceIndex && (tS._waitingParentInstanceIndex = SS.parentInstanceIndex), void 0 !== SS.actions && (tS._waitingData.actions = SS.actions), void 0 !== SS.overlayAlpha && (tS.overlayAlpha = SS.overlayAlpha), void 0 !== SS.overlayColor && (tS.overlayColor = JS.b.FromArray(SS.overlayColor)), void 0 !== SS.renderOverlay && (tS.renderOverlay = SS.renderOverlay), tS.isUnIndexed = !!SS.isUnIndexed, tS.hasVertexAlpha = SS.hasVertexAlpha, SS.delayLoadingFile ? (tS.delayLoadState = 4, tS.delayLoadingFile = gS + SS.delayLoadingFile, tS.buildBoundingInfo(ZS.n.FromArray(SS.boundingBoxMinimum), ZS.n.FromArray(SS.boundingBoxMaximum)), SS._binaryInfo && (tS._binaryInfo = SS._binaryInfo), tS._delayInfo = [], SS.hasUVs && tS._delayInfo.push(dS.h.UVKind), SS.hasUVs2 && tS._delayInfo.push(dS.h.UV2Kind), SS.hasUVs3 && tS._delayInfo.push(dS.h.UV3Kind), SS.hasUVs4 && tS._delayInfo.push(dS.h.UV4Kind), SS.hasUVs5 && tS._delayInfo.push(dS.h.UV5Kind), SS.hasUVs6 && tS._delayInfo.push(dS.h.UV6Kind), SS.hasColors && tS._delayInfo.push(dS.h.ColorKind), SS.hasMatricesIndices && tS._delayInfo.push(dS.h.MatricesIndicesKind), SS.hasMatricesWeights && tS._delayInfo.push(dS.h.MatricesWeightsKind), tS._delayLoadingFunction = vS.e._ImportGeometry, VS.c.ForceFullSceneLoadingForIncremental && tS._checkDelayState()) : bS || vS.e._ImportGeometry(SS, tS), SS.materialUniqueId ? tS._waitingMaterialId = SS.materialUniqueId : SS.materialId && (tS._waitingMaterialId = SS.materialId), SS.morphTargetManagerId > -1 && (tS._waitingMorphTargetManagerId = SS.morphTargetManagerId), void 0 !== SS.skeletonId && null !== SS.skeletonId && (tS.skeleton = HS.getLastSkeletonById(SS.skeletonId), tS._waitingSkeletonId = SS.skeletonId, SS.numBoneInfluencers && (tS.numBoneInfluencers = SS.numBoneInfluencers)), void 0 !== SS.skeletonUniqueId && null !== SS.skeletonUniqueId && (tS._waitingSkeletonUniqueId = SS.skeletonUniqueId), SS.animations) {
          for (let HS = 0; HS < SS.animations.length; HS++) {
            const gS = SS.animations[HS],
              bS = (0, zS.d)("BABYLON.Animation");
            bS && tS.animations.push(bS.Parse(gS))
          }
          OS.e.ParseAnimationRanges(tS, SS, HS)
        }
        if (SS.autoAnimate && HS.beginAnimation(tS, SS.autoAnimateFrom, SS.autoAnimateTo, SS.autoAnimateLoop, SS.autoAnimateSpeed || 1), SS.layerMask && !isNaN(SS.layerMask) ? tS.layerMask = Math.abs(parseInt(SS.layerMask)) : tS.layerMask = 268435455, SS.physicsImpostor && (tS.physicsImpostor = mS._PhysicsImpostorParser(HS, tS, SS)), SS.lodMeshIds && (tS._waitingData.lods = {
            ids: SS.lodMeshIds,
            distances: SS.lodDistances ? SS.lodDistances : null,
            coverages: SS.lodCoverages ? SS.lodCoverages : null
          }), SS.instances)
          for (let XS = 0; XS < SS.instances.length; XS++) {
            const gS = SS.instances[XS],
              bS = tS.createInstance(gS.name);
            if (gS.id && (bS.id = gS.id), DS.d && (gS.tags ? DS.d.AddTagsTo(bS, gS.tags) : DS.d.AddTagsTo(bS, SS.tags)), bS.position = ZS.n.FromArray(gS.position), void 0 !== gS.metadata && (bS.metadata = gS.metadata), void 0 !== gS.parentId && (bS._waitingParentId = gS.parentId), void 0 !== gS.parentInstanceIndex && (bS._waitingParentInstanceIndex = gS.parentInstanceIndex), void 0 !== gS.isEnabled && null !== gS.isEnabled && bS.MJ(gS.isEnabled), void 0 !== gS.isVisible && null !== gS.isVisible && (bS.isVisible = gS.isVisible), void 0 !== gS.Fj && null !== gS.Fj && (bS.Fj = gS.Fj), gS.rotationQuaternion ? bS.rotationQuaternion = ZS.i.FromArray(gS.rotationQuaternion) : gS.rotation && (bS.rotation = ZS.n.FromArray(gS.rotation)), bS.nf = ZS.n.FromArray(gS.nf), void 0 != gS.checkCollisions && null != gS.checkCollisions && (bS.checkCollisions = gS.checkCollisions), void 0 != gS.pickable && null != gS.pickable && (bS.Fj = gS.pickable), void 0 != gS.showBoundingBox && null != gS.showBoundingBox && (bS.showBoundingBox = gS.showBoundingBox), void 0 != gS.showSubMeshesBoundingBox && null != gS.showSubMeshesBoundingBox && (bS.showSubMeshesBoundingBox = gS.showSubMeshesBoundingBox), void 0 != gS.alphaIndex && null != gS.showSubMeshesBoundingBox && (bS.alphaIndex = gS.alphaIndex), gS.physicsImpostor && (bS.physicsImpostor = mS._PhysicsImpostorParser(HS, bS, gS)), void 0 !== gS.actions && (bS._waitingData.actions = gS.actions), gS.animations) {
              for (let SS = 0; SS < gS.animations.length; SS++) {
                const HS = gS.animations[SS],
                  tS = (0, zS.d)("BABYLON.Animation");
                tS && bS.animations.push(tS.Parse(HS))
              }
              OS.e.ParseAnimationRanges(bS, gS, HS), gS.autoAnimate && HS.beginAnimation(bS, gS.autoAnimateFrom, gS.autoAnimateTo, gS.autoAnimateLoop, gS.autoAnimateSpeed || 1)
            }
          }
        if (SS.thinInstances) {
          const HS = SS.thinInstances;
          if (tS.CHS = !!HS.enablePicking, HS.matrixData ? (tS.o9("matrix", new Float32Array(HS.matrixData), 16, !1), tS._thinInstanceDataStorage.matrixBufferSize = HS.matrixBufferSize, tS._thinInstanceDataStorage.instancesCount = HS.instancesCount) : tS._thinInstanceDataStorage.matrixBufferSize = HS.matrixBufferSize, SS.thinInstances.userThinInstance) {
            const HS = SS.thinInstances.userThinInstance;
            for (const SS in HS.data) tS.o9(SS, new Float32Array(HS.data[SS]), HS.strides[SS], !1), tS._userThinInstanceBuffersStorage.sizes[SS] = HS.sizes[SS]
          }
        }
        return tS
      }
      setPositionsForCPUSkinning() {
        const SS = this._internalMeshDataInfo;
        if (!SS._sourcePositions) {
          const HS = this.getVerticesData(dS.h.PositionKind);
          if (!HS) return SS._sourcePositions;
          SS._sourcePositions = new Float32Array(HS), this.isVertexBufferUpdatable(dS.h.PositionKind) || this.setVerticesData(dS.h.PositionKind, HS, !0)
        }
        return SS._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const SS = this._internalMeshDataInfo;
        if (!SS._sourceNormals) {
          const HS = this.getVerticesData(dS.h.NormalKind);
          if (!HS) return SS._sourceNormals;
          SS._sourceNormals = new Float32Array(HS), this.isVertexBufferUpdatable(dS.h.NormalKind) || this.setVerticesData(dS.h.NormalKind, HS, !0)
        }
        return SS._sourceNormals
      }
      applySkeleton(SS) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.lL().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.lL().getFrameId(), !this.isVerticesDataPresent(dS.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(dS.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(dS.h.MatricesWeightsKind)) return this;
        const HS = this.isVerticesDataPresent(dS.h.NormalKind),
          gS = this._internalMeshDataInfo;
        if (!gS._sourcePositions) {
          const SS = this.dD.slice();
          this.setPositionsForCPUSkinning(), this.dD = SS
        }
        HS && !gS._sourceNormals && this.setNormalsForCPUSkinning();
        let tS = this.getVerticesData(dS.h.PositionKind);
        if (!tS) return this;
        tS instanceof Float32Array || (tS = new Float32Array(tS));
        let bS = this.getVerticesData(dS.h.NormalKind);
        if (HS) {
          if (!bS) return this;
          bS instanceof Float32Array || (bS = new Float32Array(bS))
        }
        const XS = this.getVerticesData(dS.h.MatricesIndicesKind),
          xS = this.getVerticesData(dS.h.MatricesWeightsKind);
        if (!xS || !XS) return this;
        const NS = this.numBoneInfluencers > 4,
          qS = NS ? this.getVerticesData(dS.h.MatricesIndicesExtraKind) : null,
          uS = NS ? this.getVerticesData(dS.h.MatricesWeightsExtraKind) : null,
          IS = SS.getTransformMatrices(this),
          fS = ZS.n.Zero(),
          kS = new ZS.e,
          aS = new ZS.e;
        let KS, jS = 0;
        for (let GS = 0; GS < tS.length; GS += 3, jS += 4) {
          let SS;
          for (KS = 0; KS < 4; KS++) SS = xS[jS + KS], SS > 0 && (ZS.e.FromFloat32ArrayToRefScaled(IS, Math.floor(16 * XS[jS + KS]), SS, aS), kS.addToSelf(aS));
          if (NS)
            for (KS = 0; KS < 4; KS++) SS = uS[jS + KS], SS > 0 && (ZS.e.FromFloat32ArrayToRefScaled(IS, Math.floor(16 * qS[jS + KS]), SS, aS), kS.addToSelf(aS));
          ZS.n.TransformCoordinatesFromFloatsToRef(gS._sourcePositions[GS], gS._sourcePositions[GS + 1], gS._sourcePositions[GS + 2], kS, fS), fS.toArray(tS, GS), HS && (ZS.n.TransformNormalFromFloatsToRef(gS._sourceNormals[GS], gS._sourceNormals[GS + 1], gS._sourceNormals[GS + 2], kS, fS), fS.toArray(bS, GS)), kS.reset()
        }
        return this.updateVerticesData(dS.h.PositionKind, tS), HS && this.updateVerticesData(dS.h.NormalKind, bS), this
      }
      static MinMax(SS) {
        let HS = null,
          gS = null;
        for (const tS of SS) {
          const SS = tS.hA().boundingBox;
          HS && gS ? (HS.minimizeInPlace(SS.minimumWorld), gS.maximizeInPlace(SS.maximumWorld)) : (HS = SS.minimumWorld.clone(), gS = SS.maximumWorld.clone())
        }
        return HS && gS ? {
          min: HS,
          max: gS
        } : {
          min: ZS.n.Zero(),
          max: ZS.n.Zero()
        }
      }
      static Center(SS) {
        const HS = SS instanceof Array ? mS.MinMax(SS) : SS;
        return ZS.n.Center(HS.min, HS.max)
      }
      static MergeMeshes(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        return (0, wS.n)(mS._MergeMeshesCoroutine(SS, HS, gS, tS, bS, XS, !1))
      }
      static async MergeMeshesAsync(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, wS.j)(mS._MergeMeshesCoroutine(SS, HS, gS, tS, bS, XS, !0), (0, wS.c)())
      }
      static * _MergeMeshesCoroutine(SS) {
        let HS, gS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          tS = arguments.length > 2 ? arguments[2] : void 0,
          bS = arguments.length > 3 ? arguments[3] : void 0,
          XS = arguments.length > 4 ? arguments[4] : void 0,
          xS = arguments.length > 5 ? arguments[5] : void 0,
          NS = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (SS = SS.filter(Boolean)).length) return null;
        if (!tS) {
          let gS = 0;
          for (HS = 0; HS < SS.length; HS++)
            if (gS += SS[HS].getTotalVertices(), gS >= 65536) return WS.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const qS = SS[0];
        xS && (XS = !1, SS.sort(((SS, HS) => (SS.material?.uniqueId ?? -1) - (HS.material?.uniqueId ?? -1))));
        const uS = new Array,
          IS = new Array,
          fS = new Array,
          kS = SS[0].sideOrientation;
        for (HS = 0; HS < SS.length; HS++) {
          const gS = SS[HS];
          if (gS.qY) return WS.b.Warn("Cannot merge instance meshes."), null;
          if (kS !== gS.sideOrientation) return WS.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (XS || xS) {
            const SS = fS.reduce(((SS, HS) => Math.max(SS, HS.start + HS.count)), 0);
            if (xS)
              if (gS.material) {
                const HS = gS.material;
                if (HS instanceof yS.c) {
                  for (let SS = 0; SS < HS.Q8.length; SS++) uS.indexOf(HS.Q8[SS]) < 0 && uS.push(HS.Q8[SS]);
                  for (let tS = 0; tS < gS.dD.length; tS++) IS.push(uS.indexOf(HS.Q8[gS.dD[tS].materialIndex])), fS.push({
                    start: SS + gS.dD[tS].indexStart,
                    count: gS.dD[tS].indexCount
                  })
                } else {
                  uS.indexOf(HS) < 0 && uS.push(HS);
                  for (let tS = 0; tS < gS.dD.length; tS++) IS.push(uS.indexOf(HS)), fS.push({
                    start: SS + gS.dD[tS].indexStart,
                    count: gS.dD[tS].indexCount
                  })
                }
              } else
                for (let HS = 0; HS < gS.dD.length; HS++) IS.push(0), fS.push({
                  start: SS + gS.dD[HS].indexStart,
                  count: gS.dD[HS].indexCount
                });
            else fS.push({
              start: SS,
              count: gS.getTotalIndices()
            })
          }
        }
        if (xS && fS.length > 1) {
          let SS = 0;
          for (let HS = 1; HS < fS.length; HS++) {
            const gS = fS[SS],
              tS = fS[HS];
            IS[HS] === IS[SS] && gS.start + gS.count === tS.start ? gS.count += tS.count : (SS++, fS[SS] = tS, IS[SS] = IS[HS])
          }
          fS.length = SS + 1, IS.length = SS + 1
        }
        const aS = SS => {
            const HS = SS.computeWorldMatrix(!0);
            return {
              vertexData: cS.e.ExtractFromMesh(SS, !1, !1),
              transform: HS
            }
          },
          {
            vertexData: KS,
            transform: jS
          } = aS(SS[0]);
        NS && (yield);
        const GS = new Array(SS.length - 1);
        for (let wS = 1; wS < SS.length; wS++) GS[wS - 1] = aS(SS[wS]), NS && (yield);
        const CS = KS._mergeCoroutine(jS, GS, tS, NS, !gS);
        let nS = CS.next();
        for (; !nS.done;) NS && (yield), nS = CS.next();
        const PS = nS.value;
        bS || (bS = new mS(qS.name + "_merged", qS.lL()));
        const QS = PS._applyToCoroutine(bS, void 0, NS);
        let DS = QS.next();
        for (; !DS.done;) NS && (yield), DS = QS.next();
        if (bS.checkCollisions = qS.checkCollisions, bS.sideOrientation = qS.sideOrientation, gS)
          for (HS = 0; HS < SS.length; HS++) SS[HS].dispose();
        if (XS || xS) {
          for (bS.releaseSubMeshes(), HS = 0; HS < fS.length;) LS.e.CreateFromIndices(0, fS[HS].start, fS[HS].count, bS, void 0, !1), HS++;
          for (const SS of bS.dD) SS.refreshBoundingInfo();
          bS.computeWorldMatrix(!0)
        }
        if (xS) {
          const SS = new yS.c(qS.name + "_merged", qS.lL());
          SS.Q8 = uS;
          for (let HS = 0; HS < bS.dD.length; HS++) bS.dD[HS].materialIndex = IS[HS];
          bS.material = SS
        } else bS.material = qS.material;
        return bS
      }
      E1(SS) {
        SS._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(SS)
      }
      N7(SS) {
        const HS = SS._indexInSourceMeshInstanceArray;
        if (-1 != HS) {
          if (HS !== this.instances.length - 1) {
            const SS = this.instances[this.instances.length - 1];
            this.instances[HS] = SS, SS._indexInSourceMeshInstanceArray = HS
          }
          SS._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === YS.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(SS) {
        const HS = this.lL();
        return HS.forcePointsCloud ? YS.d.PointFillMode : HS.forceWireframe ? YS.d.WireFrameFillMode : this.overrideRenderingFillMode ?? SS
      }
      setMaterialByID(SS) {
        return this.setMaterialById(SS)
      }
      static CreateRibbon(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(SS, HS, gS, tS, bS, XS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(SS, HS, gS, tS, bS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(SS, HS, gS, tS, bS, XS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(SS, HS, gS, tS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(SS, HS, gS, tS, bS, XS, xS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(SS, HS, gS, tS, bS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(SS, HS, gS, tS, bS, XS, xS, NS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(SS, HS, gS, tS, bS, XS, xS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(SS, HS, gS, tS, bS, XS, xS, NS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(SS, HS, gS, tS, bS, XS, xS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(SS, HS, gS, tS, bS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(SS, HS, gS, tS, bS, XS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(SS, HS, gS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(SS, HS, gS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(SS, HS, gS, tS, bS, XS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(SS, HS, gS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(SS) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    mS.FRONTSIDE = cS.e.FRONTSIDE, mS.BACKSIDE = cS.e.BACKSIDE, mS.DOUBLESIDE = cS.e.DOUBLESIDE, mS.DEFAULTSIDE = cS.e.DEFAULTSIDE, mS.NO_CAP = 0, mS.CAP_START = 1, mS.CAP_END = 2, mS.CAP_ALL = 3, mS.NO_FLIP = 0, mS.FLIP_TILE = 1, mS.ROTATE_TILE = 2, mS.FLIP_ROW = 3, mS.ROTATE_ROW = 4, mS.FLIP_N_ROTATE_TILE = 5, mS.FLIP_N_ROTATE_ROW = 6, mS.CENTER = 0, mS.LEFT = 1, mS.RIGHT = 2, mS.TOP = 3, mS.BOTTOM = 4, mS.INSTANCEDMESH_SORT_TRANSPARENT = !1, mS._GroundMeshParser = (SS, HS) => {
      throw (0, US.l)("GroundMesh")
    }, mS._GoldbergMeshParser = (SS, HS) => {
      throw (0, US.l)("GoldbergMesh")
    }, mS._LinesMeshParser = (SS, HS) => {
      throw (0, US.l)("LinesMesh")
    }, mS._GreasedLineMeshParser = (SS, HS) => {
      throw (0, US.l)("GreasedLineMesh")
    }, mS._GreasedLineRibbonMeshParser = (SS, HS) => {
      throw (0, US.l)("GreasedLineRibbonMesh")
    }, mS._TrailMeshParser = (SS, HS) => {
      throw (0, US.l)("TrailMesh")
    }, mS._GaussianSplattingMeshParser = (SS, HS) => {
      throw (0, US.l)("GaussianSplattingMesh")
    }, mS._GaussianSplattingPartProxyMeshParser = (SS, HS) => {
      throw (0, US.l)("GaussianSplattingPartProxyMesh")
    }, mS._GaussianSplattingCompoundMeshParser = (SS, HS) => {
      throw (0, US.l)("GaussianSplattingCompoundMesh")
    };
    let eS = !1;

    function rS() {
      eS || (eS = !0, (0, zS.f)("BABYLON.Mesh", mS))
    }(tS = mS.prototype).lY ?? (tS.lY = (0, US.i)("Mesh", "lY")), (bS = mS.prototype).simplify ?? (bS.simplify = (0, US.i)("Mesh", "simplify")), (XS = mS.prototype).thinInstanceAdd ?? (XS.thinInstanceAdd = (0, US.i)("Mesh", "thinInstanceAdd")), (xS = mS.prototype).thinInstanceAddSelf ?? (xS.thinInstanceAddSelf = (0, US.i)("Mesh", "thinInstanceAddSelf")), (NS = mS.prototype).thinInstanceRegisterAttribute ?? (NS.thinInstanceRegisterAttribute = (0, US.i)("Mesh", "thinInstanceRegisterAttribute")), (qS = mS.prototype).thinInstanceSetMatrixAt ?? (qS.thinInstanceSetMatrixAt = (0, US.i)("Mesh", "thinInstanceSetMatrixAt")), (uS = mS.prototype).thinInstanceSetAttributeAt ?? (uS.thinInstanceSetAttributeAt = (0, US.i)("Mesh", "thinInstanceSetAttributeAt")), (IS = mS.prototype).o9 ?? (IS.o9 = (0, US.i)("Mesh", "o9")), (fS = mS.prototype).thinInstanceGetWorldMatrices ?? (fS.thinInstanceGetWorldMatrices = (0, US.i)("Mesh", "thinInstanceGetWorldMatrices")), (kS = mS.prototype).u9 ?? (kS.u9 = (0, US.i)("Mesh", "u9")), (aS = mS.prototype).thinInstancePartialBufferUpdate ?? (aS.thinInstancePartialBufferUpdate = (0, US.i)("Mesh", "thinInstancePartialBufferUpdate")), (KS = mS.prototype).thinInstanceRefreshBoundingInfo ?? (KS.thinInstanceRefreshBoundingInfo = (0, US.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (jS = mS.prototype).getEmittedParticleSystems ?? (jS.getEmittedParticleSystems = (0, US.i)("Mesh", "getEmittedParticleSystems")), (GS = mS.prototype).getHierarchyEmittedParticleSystems ?? (GS.getHierarchyEmittedParticleSystems = (0, US.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(mS.prototype, "edgesShareWithInstances") || Object.defineProperty(mS.prototype, "edgesShareWithInstances", (0, US.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(mS.prototype, "CHS") || Object.defineProperty(mS.prototype, "CHS", (0, US.f)("Mesh", "CHS")), Object.getOwnPropertyDescriptor(mS.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(mS.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, US.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(mS.prototype, "O4") || Object.defineProperty(mS.prototype, "O4", (0, US.f)("Mesh", "O4"))
  },
  40449: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => KS
    });
    var tS = gS(40041),
      bS = gS(37117),
      XS = gS(40183),
      xS = gS(39926),
      NS = gS(37300),
      qS = gS(38687),
      uS = gS(40048),
      IS = gS(40443),
      fS = gS(40096),
      kS = gS(40337);
    class aS {}
    let KS = (() => {
      var SS;
      let HS, gS, KS, jS, GS = [];
      return SS = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, IS.g)(this._applyToCoroutine.bind(this)), this.uniqueId = SS._UniqueIdGenerator, SS._UniqueIdGenerator++
        }
        set(SS, HS) {
          switch (SS.length || qS.b.Warn(`Setting vertex data kind '${HS}' with an empty array`), HS) {
            case XS.h.PositionKind:
              this.positions = SS;
              break;
            case XS.h.NormalKind:
              this.normals = SS;
              break;
            case XS.h.TangentKind:
              this.tangents = SS;
              break;
            case XS.h.UVKind:
              this.uvs = SS;
              break;
            case XS.h.UV2Kind:
              this.uvs2 = SS;
              break;
            case XS.h.UV3Kind:
              this.uvs3 = SS;
              break;
            case XS.h.UV4Kind:
              this.uvs4 = SS;
              break;
            case XS.h.UV5Kind:
              this.uvs5 = SS;
              break;
            case XS.h.UV6Kind:
              this.uvs6 = SS;
              break;
            case XS.h.ColorKind:
              this.colors = SS;
              break;
            case XS.h.MatricesIndicesKind:
              this.matricesIndices = SS;
              break;
            case XS.h.MatricesWeightsKind:
              this.matricesWeights = SS;
              break;
            case XS.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = SS;
              break;
            case XS.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = SS
          }
        }
        applyToMesh(SS, HS) {
          return this._applyTo(SS, HS, !1), this
        }
        applyToGeometry(SS, HS) {
          return this._applyTo(SS, HS, !1), this
        }
        updateMesh(SS) {
          return this._update(SS), this
        }
        updateGeometry(SS) {
          return this._update(SS), this
        }* _applyToCoroutine(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gS = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (SS.setVerticesData(XS.h.PositionKind, this.positions, HS), gS && (yield)), this.normals && (SS.setVerticesData(XS.h.NormalKind, this.normals, HS), gS && (yield)), this.tangents && (SS.setVerticesData(XS.h.TangentKind, this.tangents, HS), gS && (yield)), this.uvs && (SS.setVerticesData(XS.h.UVKind, this.uvs, HS), gS && (yield)), this.uvs2 && (SS.setVerticesData(XS.h.UV2Kind, this.uvs2, HS), gS && (yield)), this.uvs3 && (SS.setVerticesData(XS.h.UV3Kind, this.uvs3, HS), gS && (yield)), this.uvs4 && (SS.setVerticesData(XS.h.UV4Kind, this.uvs4, HS), gS && (yield)), this.uvs5 && (SS.setVerticesData(XS.h.UV5Kind, this.uvs5, HS), gS && (yield)), this.uvs6 && (SS.setVerticesData(XS.h.UV6Kind, this.uvs6, HS), gS && (yield)), this.colors) {
            const tS = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            SS.setVerticesData(XS.h.ColorKind, this.colors, HS, tS), this.hasVertexAlpha && void 0 !== SS.hasVertexAlpha && (SS.hasVertexAlpha = !0), gS && (yield)
          }
          if (this.matricesIndices && (SS.setVerticesData(XS.h.MatricesIndicesKind, this.matricesIndices, HS), gS && (yield)), this.matricesWeights && (SS.setVerticesData(XS.h.MatricesWeightsKind, this.matricesWeights, HS), gS && (yield)), this.matricesIndicesExtra && (SS.setVerticesData(XS.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, HS), gS && (yield)), this.matricesWeightsExtra && (SS.setVerticesData(XS.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, HS), gS && (yield)), this.indices ? (SS.setIndices(this.indices, null, HS), gS && (yield)) : SS.setIndices([], null), SS.dD && this.materialInfos && this.materialInfos.length > 1) {
            const HS = SS;
            HS.dD = [];
            for (const SS of this.materialInfos) new kS.e(SS.materialIndex, SS.verticesStart, SS.verticesCount, SS.indexStart, SS.indexCount, HS)
          }
          return this
        }
        _update(SS, HS, gS) {
          return this.positions && SS.updateVerticesData(XS.h.PositionKind, this.positions, HS, gS), this.normals && SS.updateVerticesData(XS.h.NormalKind, this.normals, HS, gS), this.tangents && SS.updateVerticesData(XS.h.TangentKind, this.tangents, HS, gS), this.uvs && SS.updateVerticesData(XS.h.UVKind, this.uvs, HS, gS), this.uvs2 && SS.updateVerticesData(XS.h.UV2Kind, this.uvs2, HS, gS), this.uvs3 && SS.updateVerticesData(XS.h.UV3Kind, this.uvs3, HS, gS), this.uvs4 && SS.updateVerticesData(XS.h.UV4Kind, this.uvs4, HS, gS), this.uvs5 && SS.updateVerticesData(XS.h.UV5Kind, this.uvs5, HS, gS), this.uvs6 && SS.updateVerticesData(XS.h.UV6Kind, this.uvs6, HS, gS), this.colors && SS.updateVerticesData(XS.h.ColorKind, this.colors, HS, gS), this.matricesIndices && SS.updateVerticesData(XS.h.MatricesIndicesKind, this.matricesIndices, HS, gS), this.matricesWeights && SS.updateVerticesData(XS.h.MatricesWeightsKind, this.matricesWeights, HS, gS), this.matricesIndicesExtra && SS.updateVerticesData(XS.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, HS, gS), this.matricesWeightsExtra && SS.updateVerticesData(XS.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, HS, gS), this.indices && SS.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length;
          const XS = bS.l.VK[0],
            xS = bS.l.VK[1];
          for (let NS = gS; NS < gS + tS; NS += 3) bS.n.FromArrayToRef(SS, NS, XS), bS.n.TransformCoordinatesToRef(XS, HS, xS), SS[NS] = xS.x, SS[NS + 1] = xS.y, SS[NS + 2] = xS.z
        }
        static _TransformVector3Normals(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length;
          const XS = bS.l.VK[0],
            xS = bS.l.VK[1];
          for (let NS = gS; NS < gS + tS; NS += 3) bS.n.FromArrayToRef(SS, NS, XS), bS.n.TransformNormalToRef(XS, HS, xS), SS[NS] = xS.x, SS[NS + 1] = xS.y, SS[NS + 2] = xS.z
        }
        static _TransformVector4Normals(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length;
          const XS = bS.l.Vector4[0],
            xS = bS.l.Vector4[1];
          for (let NS = gS; NS < gS + tS; NS += 4) bS.r.FromArrayToRef(SS, NS, XS), bS.r.TransformNormalToRef(XS, HS, xS), SS[NS] = xS.x, SS[NS + 1] = xS.y, SS[NS + 2] = xS.z, SS[NS + 3] = xS.w
        }
        static _FlipFaces(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS.length;
          for (let tS = HS; tS < HS + gS; tS += 3) {
            const HS = SS[tS + 1];
            SS[tS + 1] = SS[tS + 2], SS[tS + 2] = HS
          }
        }
        transform(HS) {
          const gS = HS.determinant() < 0;
          return this.positions && SS._TransformVector3Coordinates(this.positions, HS), this.normals && SS._TransformVector3Normals(this.normals, HS), this.tangents && SS._TransformVector4Normals(this.tangents, HS), gS && this.indices && SS._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const HS = [];
          for (const gS of this.materialInfos) {
            const tS = new SS;
            if (this.positions && (tS.positions = this.positions.slice(3 * gS.verticesStart, 3 * (gS.verticesCount + gS.verticesStart))), this.normals && (tS.normals = this.normals.slice(3 * gS.verticesStart, 3 * (gS.verticesCount + gS.verticesStart))), this.tangents && (tS.tangents = this.tangents.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.colors && (tS.colors = this.colors.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.uvs && (tS.uvs = this.uvs.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.uvs2 && (tS.uvs2 = this.uvs2.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.uvs3 && (tS.uvs3 = this.uvs3.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.uvs4 && (tS.uvs4 = this.uvs4.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.uvs5 && (tS.uvs5 = this.uvs5.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.uvs6 && (tS.uvs6 = this.uvs6.slice(2 * gS.verticesStart, 2 * (gS.verticesCount + gS.verticesStart))), this.matricesIndices && (tS.matricesIndices = this.matricesIndices.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.matricesIndicesExtra && (tS.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.matricesWeights && (tS.matricesWeights = this.matricesWeights.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.matricesWeightsExtra && (tS.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * gS.verticesStart, 4 * (gS.verticesCount + gS.verticesStart))), this.indices) {
              tS.indices = [];
              for (let SS = gS.indexStart; SS < gS.indexStart + gS.indexCount; SS++) tS.indices.push(this.indices[SS] - gS.verticesStart)
            }
            const bS = new aS;
            bS.indexStart = 0, bS.indexCount = tS.indices ? tS.indices.length : 0, bS.materialIndex = gS.materialIndex, bS.verticesStart = 0, bS.verticesCount = (tS.positions ? tS.positions.length : 0) / 3, tS.materialInfos = [bS], HS.push(tS)
          }
          return HS
        }
        merge(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const XS = Array.isArray(SS) ? SS.map((SS => ({
            vertexData: SS
          }))) : [{
            vertexData: SS
          }];
          return (0, IS.n)(this._mergeCoroutine(void 0, XS, HS, !1, gS, tS, bS))
        }* _mergeCoroutine(HS, gS) {
          let tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            bS = arguments.length > 3 ? arguments[3] : void 0,
            xS = arguments.length > 4 ? arguments[4] : void 0,
            NS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            qS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let uS = gS.map((SS => SS.vertexData)),
            IS = this;
          if (qS)
            for (const SS of uS) SS && (SS._validate(), !this.normals && SS.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && SS.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && SS.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && SS.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && SS.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && SS.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && SS.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && SS.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && SS.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && SS.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && SS.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && SS.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && SS.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const SS of uS)
            if (SS)
              if (qS) this.normals && !SS.normals && (SS.normals = new Float32Array(SS.positions.length)), this.tangents && !SS.tangents && (SS.tangents = new Float32Array(SS.positions.length / 3 * 4)), this.uvs && !SS.uvs && (SS.uvs = new Float32Array(SS.positions.length / 3 * 2)), this.uvs2 && !SS.uvs2 && (SS.uvs2 = new Float32Array(SS.positions.length / 3 * 2)), this.uvs3 && !SS.uvs3 && (SS.uvs3 = new Float32Array(SS.positions.length / 3 * 2)), this.uvs4 && !SS.uvs4 && (SS.uvs4 = new Float32Array(SS.positions.length / 3 * 2)), this.uvs5 && !SS.uvs5 && (SS.uvs5 = new Float32Array(SS.positions.length / 3 * 2)), this.uvs6 && !SS.uvs6 && (SS.uvs6 = new Float32Array(SS.positions.length / 3 * 2)), this.colors && !SS.colors && (SS.colors = new Float32Array(SS.positions.length / 3 * 4), SS.colors.fill(1)), this.matricesIndices && !SS.matricesIndices && (SS.matricesIndices = new Float32Array(SS.positions.length / 3 * 4)), this.matricesWeights && !SS.matricesWeights && (SS.matricesWeights = new Float32Array(SS.positions.length / 3 * 4)), this.matricesIndicesExtra && !SS.matricesIndicesExtra && (SS.matricesIndicesExtra = new Float32Array(SS.positions.length / 3 * 4)), this.matricesWeightsExtra && !SS.matricesWeightsExtra && (SS.matricesWeightsExtra = new Float32Array(SS.positions.length / 3 * 4));
              else if (SS._validate(), !this.normals !== !SS.normals || !this.tangents !== !SS.tangents || !this.uvs !== !SS.uvs || !this.uvs2 !== !SS.uvs2 || !this.uvs3 !== !SS.uvs3 || !this.uvs4 !== !SS.uvs4 || !this.uvs5 !== !SS.uvs5 || !this.uvs6 !== !SS.uvs6 || !this.colors !== !SS.colors || !this.matricesIndices !== !SS.matricesIndices || !this.matricesWeights !== !SS.matricesWeights || !this.matricesIndicesExtra !== !SS.matricesIndicesExtra || !this.matricesWeightsExtra !== !SS.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (NS) {
            let SS, tS = 0,
              bS = 0;
            const XS = [];
            let xS = null;
            const NS = [];
            for (const gS of this.splitBasedOnMaterialID()) NS.push({
              vertexData: gS,
              transform: HS
            });
            for (const HS of gS)
              if (HS.vertexData)
                for (const SS of HS.vertexData.splitBasedOnMaterialID()) NS.push({
                  vertexData: SS,
                  transform: HS.transform
                });
            NS.sort(((SS, HS) => {
              const gS = SS.vertexData.materialInfos ? SS.vertexData.materialInfos[0].materialIndex : 0,
                tS = HS.vertexData.materialInfos ? HS.vertexData.materialInfos[0].materialIndex : 0;
              return gS > tS ? 1 : gS === tS ? 0 : -1
            }));
            for (const HS of NS) {
              const gS = HS.vertexData;
              if (SS = gS.materialInfos ? gS.materialInfos[0].materialIndex : 0, xS && xS.materialIndex === SS) xS.indexCount += gS.indices.length, xS.verticesCount += gS.positions.length / 3;
              else {
                const HS = new aS;
                HS.materialIndex = SS, HS.indexStart = tS, HS.indexCount = gS.indices.length, HS.verticesStart = bS, HS.verticesCount = gS.positions.length / 3, XS.push(HS), xS = HS
              }
              tS += gS.indices.length, bS += gS.positions.length / 3
            }
            const qS = NS.splice(0, 1)[0];
            IS = qS.vertexData, HS = qS.transform, uS = NS.map((SS => SS.vertexData)), gS = NS, this.materialInfos = XS
          }
          const fS = uS.reduce(((SS, HS) => SS + (HS.indices?.length ?? 0)), IS.indices?.length ?? 0);
          let kS = xS || uS.some((SS => SS.indices === IS.indices)) ? IS.indices?.slice() : IS.indices;
          if (fS > 0) {
            let XS = kS?.length ?? 0;
            if (kS || (kS = new Array(fS)), kS.length !== fS) {
              if (Array.isArray(kS)) kS.length = fS;
              else {
                const SS = tS || kS instanceof Uint32Array ? new Uint32Array(fS) : new Uint16Array(fS);
                SS.set(kS), kS = SS
              }
              HS && HS.determinant() < 0 && SS._FlipFaces(kS, 0, XS)
            }
            let xS = IS.positions ? IS.positions.length / 3 : 0;
            for (const {
                vertexData: HS,
                transform: tS
              }
              of gS)
              if (HS.indices) {
                for (let SS = 0; SS < HS.indices.length; SS++) kS[XS + SS] = HS.indices[SS] + xS;
                tS && tS.determinant() < 0 && SS._FlipFaces(kS, XS, HS.indices.length), xS += HS.positions.length / 3, XS += HS.indices.length, bS && (yield)
              }
          }
          return this.indices = kS, this.positions = SS._MergeElement(XS.h.PositionKind, IS.positions, HS, gS.map((SS => [SS.vertexData.positions, SS.transform]))), bS && (yield), IS.normals && (this.normals = SS._MergeElement(XS.h.NormalKind, IS.normals, HS, gS.map((SS => [SS.vertexData.normals, SS.transform]))), bS && (yield)), IS.tangents && (this.tangents = SS._MergeElement(XS.h.TangentKind, IS.tangents, HS, gS.map((SS => [SS.vertexData.tangents, SS.transform]))), bS && (yield)), IS.uvs && (this.uvs = SS._MergeElement(XS.h.UVKind, IS.uvs, HS, gS.map((SS => [SS.vertexData.uvs, SS.transform]))), bS && (yield)), IS.uvs2 && (this.uvs2 = SS._MergeElement(XS.h.UV2Kind, IS.uvs2, HS, gS.map((SS => [SS.vertexData.uvs2, SS.transform]))), bS && (yield)), IS.uvs3 && (this.uvs3 = SS._MergeElement(XS.h.UV3Kind, IS.uvs3, HS, gS.map((SS => [SS.vertexData.uvs3, SS.transform]))), bS && (yield)), IS.uvs4 && (this.uvs4 = SS._MergeElement(XS.h.UV4Kind, IS.uvs4, HS, gS.map((SS => [SS.vertexData.uvs4, SS.transform]))), bS && (yield)), IS.uvs5 && (this.uvs5 = SS._MergeElement(XS.h.UV5Kind, IS.uvs5, HS, gS.map((SS => [SS.vertexData.uvs5, SS.transform]))), bS && (yield)), IS.uvs6 && (this.uvs6 = SS._MergeElement(XS.h.UV6Kind, IS.uvs6, HS, gS.map((SS => [SS.vertexData.uvs6, SS.transform]))), bS && (yield)), IS.colors && (this.colors = SS._MergeElement(XS.h.ColorKind, IS.colors, HS, gS.map((SS => [SS.vertexData.colors, SS.transform]))), (void 0 !== IS.hasVertexAlpha || gS.some((SS => void 0 !== SS.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = IS.hasVertexAlpha || gS.some((SS => SS.vertexData.hasVertexAlpha))), bS && (yield)), IS.matricesIndices && (this.matricesIndices = SS._MergeElement(XS.h.MatricesIndicesKind, IS.matricesIndices, HS, gS.map((SS => [SS.vertexData.matricesIndices, SS.transform]))), bS && (yield)), IS.matricesWeights && (this.matricesWeights = SS._MergeElement(XS.h.MatricesWeightsKind, IS.matricesWeights, HS, gS.map((SS => [SS.vertexData.matricesWeights, SS.transform]))), bS && (yield)), IS.matricesIndicesExtra && (this.matricesIndicesExtra = SS._MergeElement(XS.h.MatricesIndicesExtraKind, IS.matricesIndicesExtra, HS, gS.map((SS => [SS.vertexData.matricesIndicesExtra, SS.transform]))), bS && (yield)), IS.matricesWeightsExtra && (this.matricesWeightsExtra = SS._MergeElement(XS.h.MatricesWeightsExtraKind, IS.matricesWeightsExtra, HS, gS.map((SS => [SS.vertexData.matricesWeightsExtra, SS.transform])))), this
        }
        static _MergeElement(HS, gS, tS, bS) {
          const xS = bS.filter((SS => null !== SS[0] && void 0 !== SS[0]));
          if (!gS && 0 == xS.length) return gS;
          if (!gS) return this._MergeElement(HS, xS[0][0], xS[0][1], xS.slice(1));
          const NS = xS.reduce(((SS, HS) => SS + HS[0].length), gS.length),
            qS = HS === XS.h.PositionKind ? SS._TransformVector3Coordinates : HS === XS.h.NormalKind ? SS._TransformVector3Normals : HS === XS.h.TangentKind ? SS._TransformVector4Normals : () => {};
          if (gS instanceof Float32Array) {
            const SS = new Float32Array(NS);
            SS.set(gS), tS && qS(SS, tS, 0, gS.length);
            let HS = gS.length;
            for (const [gS, tS] of xS) SS.set(gS, HS), tS && qS(SS, tS, HS, gS.length), HS += gS.length;
            return SS
          } {
            const SS = new Array(NS);
            for (let tS = 0; tS < gS.length; tS++) SS[tS] = gS[tS];
            tS && qS(SS, tS, 0, gS.length);
            let HS = gS.length;
            for (const [gS, tS] of xS) {
              for (let tS = 0; tS < gS.length; tS++) SS[HS + tS] = gS[tS];
              tS && qS(SS, tS, HS, gS.length), HS += gS.length
            }
            return SS
          }
        }
        _validate() {
          if (!this.positions) throw new fS.k("Positions are required", fS.h.MeshInvalidPositionsError);
          const SS = (SS, HS) => {
              const gS = (0, XS.g)(SS);
              if (HS.length % gS !== 0) throw new Error("The " + SS + "s array count must be a multiple of " + gS);
              return HS.length / gS
            },
            HS = SS(XS.h.PositionKind, this.positions),
            gS = (gS, tS) => {
              const bS = SS(gS, tS);
              if (bS !== HS) throw new Error("The " + gS + "s element count (" + bS + ") does not match the positions count (" + HS + ")")
            };
          this.normals && gS(XS.h.NormalKind, this.normals), this.tangents && gS(XS.h.TangentKind, this.tangents), this.uvs && gS(XS.h.UVKind, this.uvs), this.uvs2 && gS(XS.h.UV2Kind, this.uvs2), this.uvs3 && gS(XS.h.UV3Kind, this.uvs3), this.uvs4 && gS(XS.h.UV4Kind, this.uvs4), this.uvs5 && gS(XS.h.UV5Kind, this.uvs5), this.uvs6 && gS(XS.h.UV6Kind, this.uvs6), this.colors && gS(XS.h.ColorKind, this.colors), this.matricesIndices && gS(XS.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && gS(XS.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && gS(XS.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && gS(XS.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const HS = this.serialize();
          return SS.Parse(HS)
        }
        serialize() {
          const SS = {};
          if (this.positions && (SS.positions = Array.from(this.positions)), this.normals && (SS.normals = Array.from(this.normals)), this.tangents && (SS.tangents = Array.from(this.tangents)), this.uvs && (SS.uvs = Array.from(this.uvs)), this.uvs2 && (SS.uvs2 = Array.from(this.uvs2)), this.uvs3 && (SS.uvs3 = Array.from(this.uvs3)), this.uvs4 && (SS.uvs4 = Array.from(this.uvs4)), this.uvs5 && (SS.uvs5 = Array.from(this.uvs5)), this.uvs6 && (SS.uvs6 = Array.from(this.uvs6)), this.colors && (SS.colors = Array.from(this.colors), SS.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (SS.matricesIndices = Array.from(this.matricesIndices), SS.matricesIndicesExpanded = !0), this.matricesWeights && (SS.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (SS.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), SS.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (SS.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), SS.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            SS.materialInfos = [];
            for (const HS of this.materialInfos) {
              const gS = {
                indexStart: HS.indexStart,
                indexCount: HS.indexCount,
                materialIndex: HS.materialIndex,
                verticesStart: HS.verticesStart,
                verticesCount: HS.verticesCount
              };
              SS.materialInfos.push(gS)
            }
          }
          return SS
        }
        static ExtractFromMesh(HS, gS, tS) {
          return SS._ExtractFrom(HS, gS, tS)
        }
        static ExtractFromGeometry(HS, gS, tS) {
          return SS._ExtractFrom(HS, gS, tS)
        }
        static _ExtractFrom(HS, gS, tS) {
          const bS = new SS;
          if (HS.isVerticesDataPresent(XS.h.PositionKind) && (bS.positions = HS.getVerticesData(XS.h.PositionKind, gS, tS)), HS.isVerticesDataPresent(XS.h.NormalKind) && (bS.normals = HS.getVerticesData(XS.h.NormalKind, gS, tS)), HS.isVerticesDataPresent(XS.h.TangentKind) && (bS.tangents = HS.getVerticesData(XS.h.TangentKind, gS, tS)), HS.isVerticesDataPresent(XS.h.UVKind) && (bS.uvs = HS.getVerticesData(XS.h.UVKind, gS, tS)), HS.isVerticesDataPresent(XS.h.UV2Kind) && (bS.uvs2 = HS.getVerticesData(XS.h.UV2Kind, gS, tS)), HS.isVerticesDataPresent(XS.h.UV3Kind) && (bS.uvs3 = HS.getVerticesData(XS.h.UV3Kind, gS, tS)), HS.isVerticesDataPresent(XS.h.UV4Kind) && (bS.uvs4 = HS.getVerticesData(XS.h.UV4Kind, gS, tS)), HS.isVerticesDataPresent(XS.h.UV5Kind) && (bS.uvs5 = HS.getVerticesData(XS.h.UV5Kind, gS, tS)), HS.isVerticesDataPresent(XS.h.UV6Kind) && (bS.uvs6 = HS.getVerticesData(XS.h.UV6Kind, gS, tS)), HS.isVerticesDataPresent(XS.h.ColorKind)) {
            const SS = HS.geometry || HS,
              xS = SS.getVertexBuffer(XS.h.ColorKind),
              NS = SS.getVerticesData(XS.h.ColorKind, gS, tS);
            if (3 === xS.getSize()) {
              const SS = new Float32Array(4 * NS.length / 3);
              for (let HS = 0, gS = 0; HS < NS.length; HS += 3, gS += 4) SS[gS] = NS[HS], SS[gS + 1] = NS[HS + 1], SS[gS + 2] = NS[HS + 2], SS[gS + 3] = 1;
              bS.colors = SS
            } else {
              if (4 !== xS.getSize()) throw new Error(`Unexpected number of color components: ${xS.getSize()}`);
              bS.colors = NS
            }
          }
          return HS.isVerticesDataPresent(XS.h.MatricesIndicesKind) && (bS.matricesIndices = HS.getVerticesData(XS.h.MatricesIndicesKind, gS, tS)), HS.isVerticesDataPresent(XS.h.MatricesWeightsKind) && (bS.matricesWeights = HS.getVerticesData(XS.h.MatricesWeightsKind, gS, tS)), HS.isVerticesDataPresent(XS.h.MatricesIndicesExtraKind) && (bS.matricesIndicesExtra = HS.getVerticesData(XS.h.MatricesIndicesExtraKind, gS, tS)), HS.isVerticesDataPresent(XS.h.MatricesWeightsExtraKind) && (bS.matricesWeightsExtra = HS.getVerticesData(XS.h.MatricesWeightsExtraKind, gS, tS)), bS.indices = HS.mgS(gS, tS), bS
        }
        static CreateRibbon(SS) {
          throw (0, xS.l)("ribbonBuilder")
        }
        static CreateBox(SS) {
          throw (0, xS.l)("boxBuilder")
        }
        static CreateTiledBox(SS) {
          throw (0, xS.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(SS) {
          throw (0, xS.l)("tiledPlaneBuilder")
        }
        static CreateSphere(SS) {
          throw (0, xS.l)("sphereBuilder")
        }
        static CreateCylinder(SS) {
          throw (0, xS.l)("cylinderBuilder")
        }
        static CreateTorus(SS) {
          throw (0, xS.l)("torusBuilder")
        }
        static CreateLineSystem(SS) {
          throw (0, xS.l)("linesBuilder")
        }
        static CreateDashedLines(SS) {
          throw (0, xS.l)("linesBuilder")
        }
        static CreateGround(SS) {
          throw (0, xS.l)("groundBuilder")
        }
        static CreateTiledGround(SS) {
          throw (0, xS.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(SS) {
          throw (0, xS.l)("groundBuilder")
        }
        static CreatePlane(SS) {
          throw (0, xS.l)("planeBuilder")
        }
        static CreateDisc(SS) {
          throw (0, xS.l)("discBuilder")
        }
        static CreatePolygon(SS, HS, gS, tS, bS, XS, NS) {
          throw (0, xS.l)("polygonBuilder")
        }
        static CreateIcoSphere(SS) {
          throw (0, xS.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(SS) {
          throw (0, xS.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || bS.n.Up();
          throw (0, xS.l)("capsuleBuilder")
        }
        static CreateTorusKnot(SS) {
          throw (0, xS.l)("torusKnotBuilder")
        }
        static ComputeNormals(SS, HS, gS, tS) {
          let XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS = !1,
            OS = !1,
            dS = !1,
            cS = !1,
            vS = 1,
            ES = 0,
            LS = null;
          tS && (JS = !!tS.facetNormals, OS = !!tS.facetPositions, dS = !!tS.facetPartitioning, vS = !0 === tS.useRightHandedSystem ? -1 : 1, ES = tS.ratio || 0, cS = !!tS.depthSort, LS = tS.distanceTo, cS && void 0 === LS && (LS = bS.n.Zero()));
          let YS = 0,
            AS = 0,
            yS = 0,
            VS = 0;
          for (dS && tS && tS.bbSize && (YS = tS.subDiv.X * ES / tS.bbSize.x, AS = tS.subDiv.Y * ES / tS.bbSize.y, yS = tS.subDiv.Z * ES / tS.bbSize.z, VS = tS.subDiv.max * tS.subDiv.max, tS.facetPartitioning.length = 0), XS = 0; XS < SS.length; XS++) gS[XS] = 0;
          const iS = HS.length / 3 | 0;
          for (XS = 0; XS < iS; XS++) {
            if (GS = 3 * HS[3 * XS], CS = GS + 1, nS = GS + 2, PS = 3 * HS[3 * XS + 1], QS = PS + 1, DS = PS + 2, wS = 3 * HS[3 * XS + 2], hS = wS + 1, ZS = wS + 2, xS = SS[GS] - SS[PS], NS = SS[CS] - SS[QS], qS = SS[nS] - SS[DS], uS = SS[wS] - SS[PS], IS = SS[hS] - SS[QS], fS = SS[ZS] - SS[DS], kS = vS * (NS * fS - qS * IS), aS = vS * (qS * uS - xS * fS), KS = vS * (xS * IS - NS * uS), jS = Math.sqrt(kS * kS + aS * aS + KS * KS), jS = 0 === jS ? 1 : jS, kS /= jS, aS /= jS, KS /= jS, JS && tS && (tS.facetNormals[XS].x = kS, tS.facetNormals[XS].y = aS, tS.facetNormals[XS].z = KS), OS && tS && (tS.facetPositions[XS].x = (SS[GS] + SS[PS] + SS[wS]) / 3, tS.facetPositions[XS].y = (SS[CS] + SS[QS] + SS[hS]) / 3, tS.facetPositions[XS].z = (SS[nS] + SS[DS] + SS[ZS]) / 3), dS && tS) {
              const HS = Math.floor((tS.facetPositions[XS].x - tS.bInfo.minimum.x * ES) * YS),
                gS = Math.floor((tS.facetPositions[XS].y - tS.bInfo.minimum.y * ES) * AS),
                bS = Math.floor((tS.facetPositions[XS].z - tS.bInfo.minimum.z * ES) * yS),
                xS = Math.floor((SS[GS] - tS.bInfo.minimum.x * ES) * YS),
                NS = Math.floor((SS[CS] - tS.bInfo.minimum.y * ES) * AS),
                qS = Math.floor((SS[nS] - tS.bInfo.minimum.z * ES) * yS),
                uS = Math.floor((SS[PS] - tS.bInfo.minimum.x * ES) * YS),
                IS = Math.floor((SS[QS] - tS.bInfo.minimum.y * ES) * AS),
                fS = Math.floor((SS[DS] - tS.bInfo.minimum.z * ES) * yS),
                kS = Math.floor((SS[wS] - tS.bInfo.minimum.x * ES) * YS),
                aS = Math.floor((SS[hS] - tS.bInfo.minimum.y * ES) * AS),
                KS = Math.floor((SS[ZS] - tS.bInfo.minimum.z * ES) * yS),
                jS = xS + tS.subDiv.max * NS + VS * qS,
                JS = uS + tS.subDiv.max * IS + VS * fS,
                OS = kS + tS.subDiv.max * aS + VS * KS,
                dS = HS + tS.subDiv.max * gS + VS * bS;
              tS.facetPartitioning[dS] = tS.facetPartitioning[dS] ? tS.facetPartitioning[dS] : [], tS.facetPartitioning[jS] = tS.facetPartitioning[jS] ? tS.facetPartitioning[jS] : [], tS.facetPartitioning[JS] = tS.facetPartitioning[JS] ? tS.facetPartitioning[JS] : [], tS.facetPartitioning[OS] = tS.facetPartitioning[OS] ? tS.facetPartitioning[OS] : [], tS.facetPartitioning[jS].push(XS), JS != jS && tS.facetPartitioning[JS].push(XS), OS != JS && OS != jS && tS.facetPartitioning[OS].push(XS), dS != jS && dS != JS && dS != OS && tS.facetPartitioning[dS].push(XS)
            }
            if (cS && tS && tS.facetPositions) {
              const SS = tS.depthSortedFacets[XS];
              SS.ind = 3 * XS, SS.sqDistance = bS.n.DistanceSquared(tS.facetPositions[XS], LS)
            }
            gS[GS] += kS, gS[CS] += aS, gS[nS] += KS, gS[PS] += kS, gS[QS] += aS, gS[DS] += KS, gS[wS] += kS, gS[hS] += aS, gS[ZS] += KS
          }
          for (XS = 0; XS < gS.length / 3; XS++) kS = gS[3 * XS], aS = gS[3 * XS + 1], KS = gS[3 * XS + 2], jS = Math.sqrt(kS * kS + aS * aS + KS * KS), jS = 0 === jS ? 1 : jS, kS /= jS, aS /= jS, KS /= jS, gS[3 * XS] = kS, gS[3 * XS + 1] = aS, gS[3 * XS + 2] = KS
        }
        static _ComputeSides(HS, gS, tS, XS, xS, NS, qS) {
          const uS = tS.length,
            IS = XS.length;
          let fS, kS;
          switch (HS = HS || SS.DEFAULTSIDE) {
            case SS.FRONTSIDE:
              break;
            case SS.BACKSIDE:
              for (fS = 0; fS < uS; fS += 3) {
                const SS = tS[fS];
                tS[fS] = tS[fS + 2], tS[fS + 2] = SS
              }
              for (kS = 0; kS < IS; kS++) XS[kS] = -XS[kS];
              break;
            case SS.DOUBLESIDE: {
              const SS = gS.length,
                HS = SS / 3;
              for (let tS = 0; tS < SS; tS++) gS[SS + tS] = gS[tS];
              for (fS = 0; fS < uS; fS += 3) tS[fS + uS] = tS[fS + 2] + HS, tS[fS + 1 + uS] = tS[fS + 1] + HS, tS[fS + 2 + uS] = tS[fS] + HS;
              for (kS = 0; kS < IS; kS++) XS[IS + kS] = -XS[kS];
              const aS = xS.length;
              let KS;
              for (KS = 0; KS < aS; KS++) xS[KS + aS] = xS[KS];
              for (NS = NS || new bS.r(0, 0, 1, 1), qS = qS || new bS.r(0, 0, 1, 1), KS = 0, fS = 0; fS < aS / 2; fS++) xS[KS] = NS.x + (NS.z - NS.x) * xS[KS], xS[KS + 1] = NS.y + (NS.w - NS.y) * xS[KS + 1], xS[KS + aS] = qS.x + (qS.z - qS.x) * xS[KS + aS], xS[KS + aS + 1] = qS.y + (qS.w - qS.y) * xS[KS + aS + 1], KS += 2;
              break
            }
          }
        }
        static Parse(HS) {
          const gS = new SS,
            tS = HS.positions;
          tS && gS.set(tS, XS.h.PositionKind);
          const bS = HS.normals;
          bS && gS.set(bS, XS.h.NormalKind);
          const xS = HS.tangents;
          xS && gS.set(xS, XS.h.TangentKind);
          const qS = HS.uvs;
          qS && gS.set(qS, XS.h.UVKind);
          const uS = HS.uvs2;
          uS && gS.set(uS, XS.h.UV2Kind);
          const IS = HS.uvs3;
          IS && gS.set(IS, XS.h.UV3Kind);
          const fS = HS.uvs4;
          fS && gS.set(fS, XS.h.UV4Kind);
          const kS = HS.uvs5;
          kS && gS.set(kS, XS.h.UV5Kind);
          const KS = HS.uvs6;
          KS && gS.set(KS, XS.h.UV6Kind);
          const jS = HS.colors;
          jS && (gS.set(NS.c.CheckColors4(jS, tS.length / 3), XS.h.ColorKind), void 0 !== HS.hasVertexAlpha && (gS.hasVertexAlpha = HS.hasVertexAlpha));
          const GS = HS.matricesIndices;
          GS && gS.set(GS, XS.h.MatricesIndicesKind);
          const CS = HS.matricesWeights;
          CS && gS.set(CS, XS.h.MatricesWeightsKind);
          const nS = HS.indices;
          nS && (gS.indices = nS);
          const PS = HS.materialInfos;
          if (PS) {
            gS.materialInfos = [];
            for (const SS of PS) {
              const HS = new aS;
              HS.indexCount = SS.indexCount, HS.indexStart = SS.indexStart, HS.verticesCount = SS.verticesCount, HS.verticesStart = SS.verticesStart, HS.materialIndex = SS.materialIndex, gS.materialInfos.push(HS)
            }
          }
          return gS
        }
        static ImportVertexData(HS, gS) {
          const tS = SS.Parse(HS);
          gS.setAllVerticesData(tS, HS.updatable)
        }
      }, (() => {
        const bS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [uS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gS = [uS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], KS = [uS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], jS = [uS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, tS.j)(SS, null, HS, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: SS => "_TransformVector3Coordinates" in SS,
            get: SS => SS._TransformVector3Coordinates
          },
          metadata: bS
        }, null, GS), (0, tS.j)(SS, null, gS, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: SS => "_TransformVector3Normals" in SS,
            get: SS => SS._TransformVector3Normals
          },
          metadata: bS
        }, null, GS), (0, tS.j)(SS, null, KS, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: SS => "_TransformVector4Normals" in SS,
            get: SS => SS._TransformVector4Normals
          },
          metadata: bS
        }, null, GS), (0, tS.j)(SS, null, jS, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: SS => "_FlipFaces" in SS,
            get: SS => SS._FlipFaces
          },
          metadata: bS
        }, null, GS), bS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bS
        })
      })(), SS.FRONTSIDE = ((0, tS.k)(SS, GS), 0), SS.BACKSIDE = 1, SS.DOUBLESIDE = 2, SS.DEFAULTSIDE = 0, SS._UniqueIdGenerator = 0, SS
    })()
  },
  40519: (SS, HS, gS) => {
    var tS = gS(37117),
      bS = gS(38687),
      XS = gS(40346),
      xS = gS(40439),
      NS = gS(40183);
    const qS = "bakedVertexAnimationSettingsInstanced";

    function uS(SS) {
      const HS = SS.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return HS instanceof Float32Array || HS instanceof Uint16Array
    }

    function IS(SS, HS, gS, tS) {
      gS.o_(Number.POSITIVE_INFINITY), tS.o_(Number.NEGATIVE_INFINITY);
      for (let bS = 0; bS < 3 * HS; bS += 3) {
        const HS = SS[bS],
          XS = SS[bS + 1],
          xS = SS[bS + 2];
        HS < gS.x && (gS.x = HS), XS < gS.y && (gS.y = XS), xS < gS.z && (gS.z = xS), HS > tS.x && (tS.x = HS), XS > tS.y && (tS.y = XS), xS > tS.z && (tS.z = xS)
      }
    }

    function fS(SS, HS, gS) {
      gS && (SS.x -= SS.x * gS.x + gS.y, SS.y -= SS.y * gS.x + gS.y, SS.z -= SS.z * gS.x + gS.y, HS.x += HS.x * gS.x + gS.y, HS.y += HS.y * gS.x + gS.y, HS.z += HS.z * gS.x + gS.y)
    }

    function kS(SS, HS, gS, bS, XS) {
      const xS = tS.l.VK[7],
        NS = tS.l.VK[8];
      for (let qS = 0; qS < 2; ++qS)
        for (let uS = 0; uS < 2; ++uS)
          for (let IS = 0; IS < 2; ++IS) xS.set(qS ? HS.x : SS.x, uS ? HS.y : SS.y, IS ? HS.z : SS.z), tS.n.TransformCoordinatesToRef(xS, gS, NS), bS.minimizeInPlace(NS), XS.maximizeInPlace(NS)
    }

    function aS(SS, HS, gS, bS, XS) {
      const xS = tS.l.VK[7];
      for (let NS = 0; NS < 3 * HS; NS += 3) tS.n.TransformCoordinatesFromFloatsToRef(SS[NS], SS[NS + 1], SS[NS + 2], gS, xS), bS.minimizeInPlace(xS), XS.maximizeInPlace(xS)
    }
    let KS = !1;
    KS || (KS = !0, xS.e.prototype.thinInstanceAdd = function(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.lL().AK().getCaps().instancedArrays) return bS.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(SS) ? SS.length : 1);
      const gS = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(SS))
        for (let tS = 0; tS < SS.length; ++tS) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, SS[tS], tS === SS.length - 1 && HS);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, SS, HS);
      return gS
    }, xS.e.prototype.thinInstanceAddSelf = function() {
      let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(tS.e.IdentityReadOnly, SS)
    }, xS.e.prototype.thinInstanceRegisterAttribute = function(SS, HS) {
      SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), this.removeVerticesData(SS), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[SS] = HS, this._userThinInstanceBuffersStorage.sizes[SS] = HS * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[SS] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[SS]), this._userThinInstanceBuffersStorage.vertexBuffers[SS] = new NS.h(this.AK(), this._userThinInstanceBuffersStorage.data[SS], SS, !0, !1, HS, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[SS])
    }, xS.e.prototype.thinInstanceSetMatrixAt = function(SS, HS) {
      let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || SS >= this._thinInstanceDataStorage.instancesCount) return !1;
      const tS = this._thinInstanceDataStorage.matrixData;
      return HS.copyToArray(tS, 16 * SS), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[SS] = HS), gS && (this.u9("matrix"), this.WK || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, xS.e.prototype.thinInstanceSetAttributeAt = function(SS, HS, gS) {
      let tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[SS] || HS >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(SS, 0), this._userThinInstanceBuffersStorage.data[SS].set(gS, HS * this._userThinInstanceBuffersStorage.strides[SS]), tS && this.u9(SS), !0)
    }, Object.defineProperty(xS.e.prototype, "O4", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(SS) {
        const HS = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        SS <= (HS ? HS.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = SS)
      },
      enumerable: !0,
      configurable: !0
    }), xS.e.prototype._thinInstanceCreateMatrixBuffer = function(SS, HS) {
      let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const tS = new NS.b(this.AK(), HS, !gS, 16, !1, !0);
      for (let bS = 0; bS < 4; bS++) this.setVerticesBuffer(tS.createVertexBuffer(SS + bS, 4 * bS, 4));
      return tS
    }, xS.e.prototype.o9 = function(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (gS = gS || 16, "matrix" === SS) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = HS ? HS.length : 32 * gS, this._thinInstanceDataStorage.matrixData = HS, this._thinInstanceDataStorage.worldMatrices = null, null !== HS ? (this._thinInstanceDataStorage.instancesCount = HS.length / gS, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", HS, tS), this.WK || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.WK || this.refreshBoundingInfo());
      else if ("previousMatrix" === SS) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = HS, null !== HS && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", HS, tS));
      else if ("splatIndex" === SS && HS) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = HS.length / gS, this._userThinInstanceBuffersStorage.data[SS] = HS, this._userThinInstanceBuffersStorage.strides[SS] = gS, this._userThinInstanceBuffersStorage.sizes[SS] = HS.length;
        const tS = new NS.b(this.AK(), HS, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = tS;
        for (let HS = 0; HS < 4; HS++) this.setVerticesBuffer(tS.createVertexBuffer(SS + HS, 4 * HS, 4))
      } else SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), null === HS ? this._userThinInstanceBuffersStorage?.data[SS] && (this.removeVerticesData(SS), delete this._userThinInstanceBuffersStorage.data[SS], delete this._userThinInstanceBuffersStorage.strides[SS], delete this._userThinInstanceBuffersStorage.sizes[SS], delete this._userThinInstanceBuffersStorage.vertexBuffers[SS]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[SS] = HS, this._userThinInstanceBuffersStorage.strides[SS] = gS, this._userThinInstanceBuffersStorage.sizes[SS] = HS.length, this._userThinInstanceBuffersStorage.vertexBuffers[SS] = new NS.h(this.AK(), HS, SS, !tS, !1, gS, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[SS]))
    }, xS.e.prototype.u9 = function(SS) {
      "matrix" === SS ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(SS), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === SS ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(SS), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === SS ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[SS], 0, this._thinInstanceDataStorage.instancesCount) : (SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[SS] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[SS].isUpdatable() && this._thinInstanceRecreateBuffer(SS), this._userThinInstanceBuffersStorage.vertexBuffers[SS].updateDirectly(this._userThinInstanceBuffersStorage.data[SS], 0)))
    }, xS.e.prototype.thinInstancePartialBufferUpdate = function(SS, HS, gS) {
      if ("matrix" === SS) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof HS ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * gS * Float32Array.BYTES_PER_ELEMENT, 16 * HS), 16 * gS) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(HS, gS));
      else if (SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[SS]) {
        const tS = this._userThinInstanceBuffersStorage.vertexBuffers[SS];
        if ("number" === typeof HS) {
          const tS = new Float32Array(this._userThinInstanceBuffersStorage.data[SS].buffer, this._userThinInstanceBuffersStorage.data[SS].byteOffset + gS * this._userThinInstanceBuffersStorage.strides[SS] * Float32Array.BYTES_PER_ELEMENT, HS * this._userThinInstanceBuffersStorage.strides[SS]);
          this._userThinInstanceBuffersStorage.vertexBuffers[SS].updateDirectly(tS, gS * this._userThinInstanceBuffersStorage.strides[SS])
        } else tS.updateDirectly(HS, gS)
      }
    }, xS.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const SS = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let HS = 0; HS < this._thinInstanceDataStorage.instancesCount; ++HS) this._thinInstanceDataStorage.worldMatrices[HS] = tS.e.FromArray(SS, 16 * HS)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, xS.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const xS = this._thinInstanceDataStorage.boundingVectors;
      if (SS || !this.rawBoundingInfo) {
        if (xS.length = 0, bS && function(SS, HS, gS) {
            const bS = SS._userThinInstanceBuffersStorage,
              xS = bS?.data[qS],
              KS = bS?.strides[qS];
            if (!xS || !KS || KS < 4 || !uS(SS)) return !1;
            const jS = SS._thinInstanceDataStorage.matrixData;
            if (!jS) return !1;
            const GS = {},
              CS = tS.l.Vector4[0],
              nS = tS.l.VK[1],
              PS = tS.l.VK[2],
              QS = tS.l.VK[3],
              DS = tS.l.VK[4],
              wS = tS.l.VK[5],
              hS = tS.l.VK[6],
              ZS = tS.l.Matrix[2],
              JS = SS.geometry ? SS.geometry.boundingBias : null,
              OS = SS.getTotalVertices();
            nS.o_(Number.POSITIVE_INFINITY), PS.o_(Number.NEGATIVE_INFINITY), QS.o_(Number.POSITIVE_INFINITY), DS.o_(Number.NEGATIVE_INFINITY);
            for (let XS = 0; XS < SS._thinInstanceDataStorage.instancesCount; ++XS) {
              const HS = XS * KS;
              CS.set(xS[HS], xS[HS + 1], xS[HS + 2], xS[HS + 3]);
              const bS = SS._getData({
                applyMorph: gS,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: CS,
                updatePositionsArray: !1,
                cache: GS
              }, null, NS.h.PositionKind);
              if (!bS) return !1;
              IS(bS, OS, wS, hS), fS(wS, hS, JS), nS.minimizeInPlace(wS), PS.maximizeInPlace(hS), tS.e.FromArrayToRef(jS, 16 * XS, ZS), JS ? kS(wS, hS, ZS, QS, DS) : aS(bS, OS, ZS, QS, DS)
            }
            return !(!isFinite(nS.x) || !isFinite(QS.x)) && (SS.hA().reConstruct(QS, DS), SS.rawBoundingInfo = new XS.e(nS, PS), function(SS, HS) {
              SS.length = 0;
              for (let gS = 0; gS < HS.boundingBox.vectors.length; ++gS) SS.push(HS.boundingBox.vectors[gS].clone())
            }(HS, SS.rawBoundingInfo), SS._updateBoundingInfo(), !0)
          }(this, xS, gS)) return;
        bS && this.bakedVertexAnimationManager?.isEnabled && uS(this) ? this.refreshBoundingInfo({
          applySkeleton: HS,
          applyMorph: gS,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(HS, gS);
        const SS = this.hA();
        this.rawBoundingInfo = new XS.e(SS.minimum, SS.maximum)
      }
      const KS = this.hA(),
        jS = this._thinInstanceDataStorage.matrixData;
      if (0 === xS.length)
        for (let tS = 0; tS < KS.boundingBox.vectors.length; ++tS) xS.push(KS.boundingBox.vectors[tS].clone());
      tS.l.VK[0].o_(Number.POSITIVE_INFINITY), tS.l.VK[1].o_(Number.NEGATIVE_INFINITY);
      for (let XS = 0; XS < this._thinInstanceDataStorage.instancesCount; ++XS) {
        tS.e.FromArrayToRef(jS, 16 * XS, tS.l.Matrix[0]);
        for (let SS = 0; SS < xS.length; ++SS) tS.n.TransformCoordinatesToRef(xS[SS], tS.l.Matrix[0], tS.l.VK[2]), tS.l.VK[0].minimizeInPlace(tS.l.VK[2]), tS.l.VK[1].maximizeInPlace(tS.l.VK[2])
      }
      KS.reConstruct(tS.l.VK[0], tS.l.VK[1]), this._updateBoundingInfo()
    }, xS.e.prototype._thinInstanceRecreateBuffer = function(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === SS ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, HS)) : "previousMatrix" === SS ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, HS)) : (SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[SS]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[SS] = new NS.h(this.AK(), this._userThinInstanceBuffersStorage.data[SS], SS, !HS, !1, this._userThinInstanceBuffersStorage.strides[SS], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[SS]))
    }, xS.e.prototype._thinInstanceUpdateBufferSize = function(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      SS === NS.h.ColorKind && (SS = NS.h.ColorInstanceKind);
      const gS = "matrix" === SS;
      if (!gS && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[SS])) return;
      const tS = gS ? 16 : this._userThinInstanceBuffersStorage.strides[SS],
        bS = gS ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[SS];
      let XS = gS ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[SS];
      const xS = (this._thinInstanceDataStorage.instancesCount + HS) * tS;
      let qS = bS;
      for (; qS < xS;) qS *= 2;
      if (!XS || bS != qS) {
        if (XS) {
          const SS = new Float32Array(qS);
          SS.set(XS, 0), XS = SS
        } else XS = new Float32Array(qS);
        gS ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", XS, !1), this._thinInstanceDataStorage.matrixData = XS, this._thinInstanceDataStorage.matrixBufferSize = qS, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", XS, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[SS]?.dispose(), this._userThinInstanceBuffersStorage.data[SS] = XS, this._userThinInstanceBuffersStorage.sizes[SS] = qS, this._userThinInstanceBuffersStorage.vertexBuffers[SS] = new NS.h(this.AK(), XS, SS, !0, !1, tS, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[SS]))
      }
    }, xS.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, xS.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40473: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => nS,
      f: () => jS
    });
    var tS, bS, XS, xS, NS = gS(40041),
      qS = gS(40048),
      uS = gS(40068),
      IS = gS(37144),
      fS = gS(37117),
      kS = gS(40256),
      aS = gS(37164),
      KS = gS(39926);
    let jS = (() => {
      var SS;
      let HS, gS, tS, bS, XS, xS, aS, KS, jS, GS = kS.e,
        CS = [],
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        JS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [];
      return SS = class extends GS {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(HS) {
          this._billboardMode !== HS && (this._billboardMode = HS, this._cache.useBillboardPosition = 0 !== (this._billboardMode & SS.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(SS) {
          this._infiniteDistance !== SS && (this._infiniteDistance = SS)
        }
        constructor(HS) {
          let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(HS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new fS.n(0, 0, 1), this._up = new fS.n(0, 1, 0), this._right = new fS.n(1, 0, 0), this._position = (0, NS.k)(this, CS, fS.n.Zero()), this._rotation = ((0, NS.k)(this, nS), (0, NS.k)(this, PS, fS.n.Zero())), this._rotationQuaternion = ((0, NS.k)(this, QS), (0, NS.k)(this, DS, null)), this._scaling = ((0, NS.k)(this, wS), (0, NS.k)(this, hS, fS.n.One())), this._transformToBoneReferal = ((0, NS.k)(this, ZS), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, NS.k)(this, JS, SS.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, NS.k)(this, OS), (0, NS.k)(this, dS, 1)), this._infiniteDistance = ((0, NS.k)(this, cS), (0, NS.k)(this, vS, !1)), this.ignoreNonUniformScaling = ((0, NS.k)(this, ES), (0, NS.k)(this, LS, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, NS.k)(this, YS), (0, NS.k)(this, AS, !1)), this._poseMatrix = ((0, NS.k)(this, yS), null), this._localMatrix = fS.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = fS.n.Zero(), this._absoluteScaling = fS.n.Zero(), this._absoluteRotationQuaternion = fS.i.Identity(), this._pivotMatrix = fS.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new IS.e, this._nonUniformScaling = !1, gS && this.lL().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(SS) {
          this._position = SS, this._markAsDirtyInternal()
        }
        isUsingPivotMatrix() {
          return this._usePivotMatrix
        }
        isUsingPostMultiplyPivotMatrix() {
          return this._postMultiplyPivotMatrix
        }
        get rotation() {
          return this._rotation
        }
        set rotation(SS) {
          this._rotation = SS, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get nf() {
          return this._scaling
        }
        set nf(SS) {
          this._scaling = SS, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(SS) {
          this._rotationQuaternion = SS, SS && this._rotation.o_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return fS.n.TransformNormalFromFloatsToRef(0, 0, this.lL().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return fS.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return fS.n.TransformNormalFromFloatsToRef(this.lL().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(SS) {
          return this._poseMatrix ? (this._poseMatrix.dJ(SS), this) : (this._poseMatrix = SS.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = fS.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const HS = this._cache;
          return this._billboardMode === HS.billboardMode && this._billboardMode === SS.BILLBOARDMODE_NONE && (!HS.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const SS = this._cache;
          SS.localMatrixUpdated = !1, SS.billboardMode = -1, SS.infiniteDistance = !1, SS.useBillboardPosition = !1
        }
        get absolutePosition() {
          return this.getAbsolutePosition()
        }
        get absoluteScaling() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteScaling
        }
        get absoluteRotationQuaternion() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteRotationQuaternion
        }
        setPreTransformMatrix(SS) {
          return this.setPivotMatrix(SS, !1)
        }
        setPivotMatrix(SS) {
          let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.dJ(SS), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = HS, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = fS.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            HS = arguments.length > 1 ? arguments[1] : void 0,
            gS = arguments.length > 2 ? arguments[2] : void 0;
          const tS = this.clone("Clone of " + (this.name || this.id), SS || this.parent, !0);
          tS && gS && gS(this, tS);
          for (const bS of this.getChildTransformNodes(!0)) bS.instantiateHierarchy(tS, HS, gS);
          return tS
        }
        aY() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return SS ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.o_(0), this._rotationQuaternion = this._rotationQuaternion || fS.i.Identity(), SS.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = SS, this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get dxS() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(SS) {
          if (!SS) return this;
          let HS, gS, tS;
          if (void 0 === SS.x) {
            if (arguments.length < 3) return this;
            HS = arguments[0], gS = arguments[1], tS = arguments[2]
          } else HS = SS.x, gS = SS.y, tS = SS.z;
          if (this.parent) {
            const SS = fS.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(SS), fS.n.TransformCoordinatesFromFloatsToRef(HS, gS, tS, SS, this.position)
          } else this.position.x = HS, this.position.y = gS, this.position.z = tS;
          return this._absolutePosition.dJ(SS), this
        }
        setPositionWithLocalVector(SS) {
          return this.computeWorldMatrix(), this.position = fS.n.TransformNormal(SS, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const SS = fS.l.Matrix[0];
          return this._localMatrix.invertToRef(SS), fS.n.TransformNormal(this.position, SS)
        }
        locallyTranslate(SS) {
          return this.computeWorldMatrix(!0), this.position = fS.n.TransformCoordinates(SS, this._localMatrix), this
        }
        lookAt(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const xS = SS._LookAtVectorCache,
            NS = 0 === XS ? this.position : this.getAbsolutePosition();
          if (HS.subtractToRef(NS, xS), this.setDirection(xS, gS, tS, bS), 1 === XS && this.parent)
            if (this.rotationQuaternion) {
              const SS = fS.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(SS);
              const HS = fS.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(HS), HS.invert(), SS.multiplyToRef(HS, SS), this.rotationQuaternion.fromRotationMatrix(SS)
            } else {
              const SS = fS.l.Quaternion[0];
              fS.i.FromEulerVectorToRef(this.rotation, SS);
              const HS = fS.l.Matrix[0];
              SS.toRotationMatrix(HS);
              const gS = fS.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(gS), gS.invert(), HS.multiplyToRef(gS, HS), SS.fromRotationMatrix(HS), SS.toEulerAnglesToRef(this.rotation)
            } return this
        }
        uR(SS) {
          const HS = fS.n.Zero();
          return this.getDirectionToRef(SS, HS), HS
        }
        getDirectionToRef(SS, HS) {
          return fS.n.TransformNormalToRef(SS, this.getWorldMatrix(), HS), this
        }
        setDirection(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const bS = -Math.atan2(SS.z, SS.x) + Math.PI / 2,
            XS = Math.sqrt(SS.x * SS.x + SS.z * SS.z),
            xS = -Math.atan2(SS.y, XS);
          return this.rotationQuaternion ? fS.i.RotationYawPitchRollToRef(bS + HS, xS + gS, tS, this.rotationQuaternion) : (this.rotation.x = xS + gS, this.rotation.y = bS + HS, this.rotation.z = tS), this
        }
        setPivotPoint(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.lL().getRenderId() && this.computeWorldMatrix(!0);
          const gS = this.getWorldMatrix();
          if (1 == HS) {
            const HS = fS.l.Matrix[0];
            gS.invertToRef(HS), SS = fS.n.TransformCoordinates(SS, HS)
          }
          return this.setPivotMatrix(fS.e.Translation(-SS.x, -SS.y, -SS.z), !0)
        }
        getPivotPoint() {
          const SS = fS.n.Zero();
          return this.getPivotPointToRef(SS), SS
        }
        getPivotPointToRef(SS) {
          return SS.x = -this._pivotMatrix.m[12], SS.y = -this._pivotMatrix.m[13], SS.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const SS = fS.n.Zero();
          return this.getAbsolutePivotPointToRef(SS), SS
        }
        getAbsolutePivotPointToRef(SS) {
          return this.getPivotPointToRef(SS), fS.n.TransformCoordinatesToRef(SS, this.getWorldMatrix(), SS), this
        }
        OHS(SS) {
          if (this._isDirty) return this;
          if (this._children)
            for (const HS of this._children) HS.OHS(SS);
          return super.OHS(SS)
        }
        setParent(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!HS && !this.parent) return this;
          const bS = fS.l.Quaternion[0],
            XS = fS.l.VK[0],
            xS = fS.l.VK[1],
            NS = fS.l.Matrix[1];
          fS.e.IdentityToRef(NS);
          const qS = fS.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let uS = this.rotationQuaternion;
          return uS || (uS = SS._TmpRotation, fS.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, uS)), fS.e.ComposeToRef(this.nf, uS, this.position, qS), this.parent && qS.multiplyToRef(this.parent.computeWorldMatrix(!0), qS), HS && (HS.computeWorldMatrix(!0).invertToRef(NS), qS.multiplyToRef(NS, qS)), qS.decompose(xS, bS, XS, gS ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.dJ(bS) : bS.toEulerAnglesToRef(this.rotation), this.nf.dJ(xS), this.position.dJ(XS), this.parent = HS, tS && this.setPivotMatrix(fS.e.Identity()), this
        }
        addChild(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return SS.setParent(this, HS), this
        }
        removeChild(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return SS.parent !== this || SS.setParent(null, HS), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(SS) {
          return this._nonUniformScaling !== SS && (this._nonUniformScaling = SS, !0)
        }
        attachToBone(SS, HS) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = HS, this.parent = SS, SS.getSkeleton().prepare(!0), SS.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = SS ? this._currentParentWhenAttachingToBone : null, this) : (SS && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(HS, gS, tS) {
          let bS;
          if (HS.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.o_(0)), tS && 0 !== tS) {
            if (this.parent) {
              const SS = this.parent.getWorldMatrix(),
                tS = fS.l.Matrix[0];
              SS.invertToRef(tS), HS = fS.n.TransformNormal(HS, tS), SS.determinant() < 0 && (gS *= -1)
            }
            bS = fS.i.RotationAxisToRef(HS, gS, SS._RotationAxisCache), bS.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else bS = fS.i.RotationAxisToRef(HS, gS, SS._RotationAxisCache), this.rotationQuaternion.multiplyToRef(bS, this.rotationQuaternion);
          return this
        }
        rotateAround(SS, HS, gS) {
          HS.normalize(), this.rotationQuaternion || (this.rotationQuaternion = fS.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.o_(0));
          const tS = fS.l.VK[0],
            bS = fS.l.VK[1],
            XS = fS.l.VK[2],
            xS = fS.l.Quaternion[0],
            NS = fS.l.Matrix[0],
            qS = fS.l.Matrix[1],
            uS = fS.l.Matrix[2],
            IS = fS.l.Matrix[3];
          return SS.subtractToRef(this.position, tS), fS.e.TranslationToRef(tS.x, tS.y, tS.z, NS), fS.e.TranslationToRef(-tS.x, -tS.y, -tS.z, qS), fS.e.RotationAxisToRef(HS, gS, uS), qS.multiplyToRef(uS, IS), IS.multiplyToRef(NS, IS), IS.decompose(bS, xS, XS), this.position.addInPlace(XS), xS.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(SS, HS, gS) {
          const tS = SS.scale(HS);
          if (gS && 0 !== gS) this.setAbsolutePosition(this.getAbsolutePosition().add(tS));
          else {
            const SS = this.getPositionExpressedInLocalSpace().add(tS);
            this.setPositionWithLocalVector(SS)
          }
          return this
        }
        addRotation(SS, HS, gS) {
          let tS;
          this.rotationQuaternion ? tS = this.rotationQuaternion : (tS = fS.l.Quaternion[1], fS.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, tS));
          const bS = fS.l.Quaternion[0];
          return fS.i.RotationYawPitchRollToRef(HS, SS, gS, bS), tS.multiplyInPlace(bS), this.rotationQuaternion || tS.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== SS.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const tS = this.lL().getRenderId();
          if (!this._isDirty && !HS && (this._currentRenderId === tS || this.isSynchronized())) return this._currentRenderId = tS, this._worldMatrix;
          gS = gS || this.lL().activeCamera, this._updateCache();
          const bS = this._cache;
          bS.pivotMatrixUpdated = !1, bS.billboardMode = this.billboardMode, bS.infiniteDistance = this.infiniteDistance, bS.parent = this._parentNode, this._currentRenderId = tS, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const XS = this._getEffectiveParent(),
            xS = SS._TmpScaling;
          let NS, qS = this._position;
          if (this._infiniteDistance && !this.parent && gS) {
            const HS = gS.getWorldMatrix().m;
            qS = SS._TmpTranslation, qS.I5(this._position.x + HS[12], this._position.y + HS[13], this._position.z + HS[14])
          }
          if (xS.I5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, NS = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(fS.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.I5(0, 0, 0))
            }
          } else NS = SS._TmpRotation, fS.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, NS);
          if (this._usePivotMatrix) {
            const SS = fS.l.Matrix[1];
            fS.e.ScalingToRef(xS.x, xS.y, xS.z, SS);
            const HS = fS.l.Matrix[0];
            NS.toRotationMatrix(HS), this._pivotMatrix.multiplyToRef(SS, fS.l.Matrix[4]), fS.l.Matrix[4].multiplyToRef(HS, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(qS.x, qS.y, qS.z)
          } else fS.e.ComposeToRef(xS, NS, qS, this._localMatrix);
          if (XS && XS.getWorldMatrix) {
            if (HS && XS.computeWorldMatrix(HS), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const SS = this.parent;
                SS.getSkeleton().prepare(), SS.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), fS.l.Matrix[7])
              } else fS.l.Matrix[7].dJ(XS.getWorldMatrix());
              const HS = fS.l.VK[5],
                gS = fS.l.VK[6],
                tS = fS.l.Quaternion[0];
              fS.l.Matrix[7].decompose(gS, tS, HS), fS.e.ScalingToRef(gS.x, gS.y, gS.z, fS.l.Matrix[7]), fS.l.Matrix[7].setTranslation(HS), SS.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(tS, HS), this._localMatrix.setTranslation(HS)), this._localMatrix.multiplyToRef(fS.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const SS = this.parent;
              SS.getSkeleton().prepare(), this._localMatrix.multiplyToRef(SS.getFinalMatrix(), fS.l.Matrix[6]), fS.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(XS.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.dJ(this._localMatrix);
          if (gS && this.billboardMode)
            if (bS.useBillboardPosition) {
              const HS = fS.l.VK[0];
              this._worldMatrix.getTranslationToRef(HS);
              const tS = gS.globalPosition;
              this._worldMatrix.invertToRef(fS.l.Matrix[1]);
              const bS = fS.l.VK[1];
              fS.n.TransformCoordinatesToRef(tS, fS.l.Matrix[1], bS), bS.normalize();
              const XS = -Math.atan2(bS.z, bS.x) + Math.PI / 2,
                xS = Math.sqrt(bS.x * bS.x + bS.z * bS.z),
                NS = -Math.atan2(bS.y, xS);
              if (fS.i.RotationYawPitchRollToRef(XS, NS, 0, fS.l.Quaternion[0]), (this.billboardMode & SS.BILLBOARDMODE_ALL) !== SS.BILLBOARDMODE_ALL) {
                const HS = fS.l.VK[1];
                fS.l.Quaternion[0].toEulerAnglesToRef(HS), (this.billboardMode & SS.BILLBOARDMODE_X) !== SS.BILLBOARDMODE_X && (HS.x = 0), (this.billboardMode & SS.BILLBOARDMODE_Y) !== SS.BILLBOARDMODE_Y && (HS.y = 0), (this.billboardMode & SS.BILLBOARDMODE_Z) !== SS.BILLBOARDMODE_Z && (HS.z = 0), fS.e.RotationYawPitchRollToRef(HS.y, HS.x, HS.z, fS.l.Matrix[0])
              } else fS.e.FromQuaternionToRef(fS.l.Quaternion[0], fS.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(fS.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(fS.l.VK[0])
            } else {
              const HS = fS.l.VK[0];
              this._worldMatrix.getTranslationToRef(HS), fS.l.Matrix[1].dJ(gS.getViewMatrix());
              const tS = this.lL().useRightHandedSystem;
              if (tS && fS.l.Matrix[1].multiplyToRef(SS._TmpRHRestore, fS.l.Matrix[1]), fS.l.Matrix[1].setTranslationFromFloats(0, 0, 0), fS.l.Matrix[1].invertToRef(fS.l.Matrix[0]), (this.billboardMode & SS.BILLBOARDMODE_ALL) !== SS.BILLBOARDMODE_ALL) {
                fS.l.Matrix[0].decompose(void 0, fS.l.Quaternion[0], void 0);
                const HS = fS.l.VK[1];
                fS.l.Quaternion[0].toEulerAnglesToRef(HS), (this.billboardMode & SS.BILLBOARDMODE_X) !== SS.BILLBOARDMODE_X && (HS.x = 0), (this.billboardMode & SS.BILLBOARDMODE_Y) !== SS.BILLBOARDMODE_Y && (HS.y = 0), (this.billboardMode & SS.BILLBOARDMODE_Z) !== SS.BILLBOARDMODE_Z && (HS.z = 0), tS && (HS.y += Math.PI), fS.e.RotationYawPitchRollToRef(HS.y, HS.x, HS.z, fS.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(fS.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(fS.l.VK[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : XS && XS._nonUniformScaling ? this._updateNonUniformScalingState(XS._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = fS.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), SS) {
            const SS = this.getChildren();
            for (let HS = 0; HS < SS.length; ++HS) {
              const gS = SS[HS];
              if (gS) {
                gS.computeWorldMatrix();
                const SS = fS.l.Matrix[0];
                gS._localMatrix.multiplyToRef(this._localMatrix, SS);
                const HS = fS.l.Quaternion[0];
                SS.decompose(gS.nf, HS, gS.position), gS.rotationQuaternion ? gS.rotationQuaternion.dJ(HS) : HS.toEulerAnglesToRef(gS.rotation)
              }
            }
          }
          this.nf.I5(1, 1, 1), this.position.I5(0, 0, 0), this.rotation.I5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = fS.i.Identity()), this._worldMatrix = fS.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(SS) {
          return this.onAfterWorldMatrixUpdateObservable.add(SS), this
        }
        unregisterAfterWorldMatrixUpdate(SS) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(SS), this
        }
        getPositionInCameraSpace() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return SS || (SS = this.lL().activeCamera), fS.n.TransformCoordinates(this.getAbsolutePosition(), SS.getViewMatrix())
        }
        getDistanceToCamera() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return SS || (SS = this.lL().activeCamera), this.getAbsolutePosition().subtract(SS.globalPosition).length()
        }
        clone(HS, gS, tS) {
          const bS = uS.b.Clone((() => new SS(HS, this.lL())), this);
          if (bS.name = HS, bS.id = HS, gS && (bS.parent = gS), !tS) {
            const SS = this.getDescendants(!0);
            for (let gS = 0; gS < SS.length; gS++) {
              const tS = SS[gS];
              tS.clone && tS.clone(HS + "." + tS.name, bS)
            }
          }
          return bS
        }
        serialize(SS) {
          const HS = uS.b.Serialize(this, SS);
          return HS.type = this.getClassName(), HS.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(HS), HS.localMatrix = this.getPivotMatrix().lgS(), HS.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (HS.aY = !0), uS.b.AppendSerializedAnimations(this, HS), HS.HG = this.serializeAnimationRanges(), HS
        }
        getChildTransformNodes(HS, gS) {
          const tS = [];
          return this._getDescendants(tS, HS, (HS => (!gS || gS(HS)) && HS instanceof SS)), tS
        }
        dispose(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.lL().stopAnimation(this), this.lL().removeTransformNode(this), this._parentContainer) {
            const SS = this._parentContainer.transformNodes.indexOf(this);
            SS > -1 && this._parentContainer.transformNodes.splice(SS, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), SS) {
            const SS = this.getChildTransformNodes(!0);
            for (const HS of SS) HS.parent = null, HS.computeWorldMatrix(!0)
          }
          super.dispose(SS, HS)
        }
        normalizeToUnitCube() {
          let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gS = arguments.length > 2 ? arguments[2] : void 0,
            tS = null,
            bS = null;
          HS && (this.rotationQuaternion ? (bS = this.rotationQuaternion.clone(), this.rotationQuaternion.I5(0, 0, 0, 1)) : this.rotation && (tS = this.rotation.clone(), this.rotation.I5(0, 0, 0)));
          const XS = this.getHierarchyBoundingVectors(SS, gS),
            xS = XS.max.subtract(XS.min),
            NS = Math.max(xS.x, xS.y, xS.z);
          if (0 === NS) return this;
          const qS = 1 / NS;
          return this.nf.scaleInPlace(qS), HS && (this.rotationQuaternion && bS ? this.rotationQuaternion.dJ(bS) : this.rotation && tS && this.rotation.dJ(tS)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const uS = "function" === typeof Symbol && Symbol.metadata ? Object.create(GS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, qS.I)("position")], gS = [(0, qS.I)("rotation")], tS = [(0, qS.x)("rotationQuaternion")], bS = [(0, qS.I)("nf")], XS = [(0, qS.M)("billboardMode")], xS = [(0, qS.M)()], aS = [(0, qS.M)("infiniteDistance")], KS = [(0, qS.M)()], jS = [(0, qS.M)()], (0, NS.j)(null, null, HS, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: SS => "_position" in SS,
            get: SS => SS._position,
            set: (SS, HS) => {
              SS._position = HS
            }
          },
          metadata: uS
        }, CS, nS), (0, NS.j)(null, null, gS, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: SS => "_rotation" in SS,
            get: SS => SS._rotation,
            set: (SS, HS) => {
              SS._rotation = HS
            }
          },
          metadata: uS
        }, PS, QS), (0, NS.j)(null, null, tS, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: SS => "_rotationQuaternion" in SS,
            get: SS => SS._rotationQuaternion,
            set: (SS, HS) => {
              SS._rotationQuaternion = HS
            }
          },
          metadata: uS
        }, DS, wS), (0, NS.j)(null, null, bS, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: SS => "_scaling" in SS,
            get: SS => SS._scaling,
            set: (SS, HS) => {
              SS._scaling = HS
            }
          },
          metadata: uS
        }, hS, ZS), (0, NS.j)(null, null, XS, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "_billboardMode" in SS,
            get: SS => SS._billboardMode,
            set: (SS, HS) => {
              SS._billboardMode = HS
            }
          },
          metadata: uS
        }, JS, OS), (0, NS.j)(null, null, xS, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: SS => "scalingDeterminant" in SS,
            get: SS => SS.scalingDeterminant,
            set: (SS, HS) => {
              SS.scalingDeterminant = HS
            }
          },
          metadata: uS
        }, dS, cS), (0, NS.j)(null, null, aS, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: SS => "_infiniteDistance" in SS,
            get: SS => SS._infiniteDistance,
            set: (SS, HS) => {
              SS._infiniteDistance = HS
            }
          },
          metadata: uS
        }, vS, ES), (0, NS.j)(null, null, KS, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: SS => "ignoreNonUniformScaling" in SS,
            get: SS => SS.ignoreNonUniformScaling,
            set: (SS, HS) => {
              SS.ignoreNonUniformScaling = HS
            }
          },
          metadata: uS
        }, LS, YS), (0, NS.j)(null, null, jS, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: SS => "reIntegrateRotationIntoRotationQuaternion" in SS,
            get: SS => SS.reIntegrateRotationIntoRotationQuaternion,
            set: (SS, HS) => {
              SS.reIntegrateRotationIntoRotationQuaternion = HS
            }
          },
          metadata: uS
        }, AS, yS), uS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uS
        })
      })(), SS.BILLBOARDMODE_NONE = 0, SS.BILLBOARDMODE_X = 1, SS.BILLBOARDMODE_Y = 2, SS.BILLBOARDMODE_Z = 4, SS.BILLBOARDMODE_ALL = 7, SS.BILLBOARDMODE_USE_POSITION = 128, SS.BillboardUseParentOrientation = !1, SS._TmpRotation = fS.i.Zero(), SS._TmpScaling = fS.n.Zero(), SS._TmpTranslation = fS.n.Zero(), SS._TmpRHRestore = fS.e.Scaling(1, 1, -1), SS._LookAtVectorCache = new fS.n(0, 0, 0), SS._RotationAxisCache = new fS.i, SS
    })();

    function GS(SS, HS, gS) {
      const tS = uS.b.Parse((() => new jS(SS.name, HS)), SS, HS, gS);
      if (SS.localMatrix ? tS.setPreTransformMatrix(fS.e.FromArray(SS.localMatrix)) : SS.pivotMatrix && tS.setPivotMatrix(fS.e.FromArray(SS.pivotMatrix)), tS.MJ(SS.isEnabled), tS._waitingParsedUniqueId = SS.uniqueId, void 0 !== SS.parentId && (tS._waitingParentId = SS.parentId), void 0 !== SS.parentInstanceIndex && (tS._waitingParentInstanceIndex = SS.parentInstanceIndex), SS.aY && (tS._waitingFreezeWorldMatrix = SS.aY), SS.animations) {
        for (let HS = 0; HS < SS.animations.length; HS++) {
          const gS = SS.animations[HS],
            bS = (0, aS.d)("BABYLON.Animation");
          bS && tS.animations.push(bS.Parse(gS))
        }
        kS.e.ParseAnimationRanges(tS, SS, HS)
      }
      return SS.autoAnimate && HS.beginAnimation(tS, SS.autoAnimateFrom, SS.autoAnimateTo, SS.autoAnimateLoop, SS.autoAnimateSpeed || 1), tS
    }
    let CS = !1;

    function nS() {
      CS || (CS = !0, jS.Parse = GS)
    }(tS = jS.prototype).vW ?? (tS.vW = (0, KS.i)("TransformNode", "vW")), (bS = jS.prototype).applyImpulse ?? (bS.applyImpulse = (0, KS.i)("TransformNode", "applyImpulse")), (XS = jS.prototype).applyAngularImpulse ?? (XS.applyAngularImpulse = (0, KS.i)("TransformNode", "applyAngularImpulse")), (xS = jS.prototype).applyTorque ?? (xS.applyTorque = (0, KS.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(jS.prototype, "physicsBody") || Object.defineProperty(jS.prototype, "physicsBody", (0, KS.f)("TransformNode", "physicsBody"))
  },
  40443: (SS, HS, gS) => {
    function tS(SS, HS, gS) {
      try {
        const tS = SS.next();
        tS.done ? HS(tS) : tS.value ? tS.value.then((() => {
          tS.value = void 0, HS(tS)
        }), gS) : HS(tS)
      } catch (tS) {
        gS(tS)
      }
    }

    function bS() {
      let SS, HS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (gS, bS, XS) => {
        const xS = performance.now();
        void 0 === SS || xS - SS > HS ? (SS = xS, setTimeout((() => {
          tS(gS, bS, XS)
        }), 0)) : tS(gS, bS, XS)
      }
    }

    function XS(SS, HS, gS, tS, bS) {
      const XS = () => {
        let xS;
        const NS = SS => {
          SS.done ? gS(SS.value) : void 0 === xS ? xS = !0 : XS()
        };
        do {
          xS = void 0, bS && bS.aborted ? tS(new Error("Aborted")) : HS(SS, NS, tS), void 0 === xS && (xS = !1)
        } while (xS)
      };
      XS()
    }

    function xS(SS, HS) {
      let gS;
      return XS(SS, tS, (SS => gS = SS), (SS => {
        throw SS
      }), HS), gS
    }
    async function NS(SS, HS, gS) {
      return await new Promise(((tS, bS) => {
        XS(SS, HS, tS, bS, gS)
      }))
    }

    function qS(SS, HS) {
      return function() {
        return xS(SS(...arguments), HS)
      }
    }
    gS.d(HS, {
      c: () => bS,
      g: () => qS,
      j: () => NS,
      n: () => xS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);