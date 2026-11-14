export const id = 221;
export const ids = [221];
export const modules = {
  38183: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => gW,
      e: () => aW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(38081),
      hF = SF(35647),
      bW = SF(35623),
      dF = SF(38187),
      PF = SF(37076),
      RF = SF(35660),
      iW = SF(37855),
      eF = SF(36545),
      EF = SF(36173),
      QF = SF(37919),
      rW = SF(37994);
    let gW = (() => {
      var FF;
      let WF, SF, RF, gW, tW, TF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF = dF.e,
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        nF = [],
        HF = [],
        KF = [],
        wF = [],
        XF = [],
        UF = [],
        BF = [],
        jW = [],
        vW = [],
        JF = [],
        pF = [],
        lF = [],
        FW = [],
        WW = [],
        SW = [],
        CW = [],
        AW = [];
      return FF = class extends YF {
        get position() {
          return this._position
        }
        set position(FF) {
          this._position = FF
        }
        set upVector(FF) {
          this._upVector = FF
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let WF, SF;
          if (this.mode === FF.PERSPECTIVE_CAMERA) this.fovMode === FF.FOVMODE_VERTICAL_FIXED ? (SF = 2 * this.minZ * Math.tan(this.fov / 2), WF = this.sC().getAspectRatio(this) * SF) : (WF = 2 * this.minZ * Math.tan(this.fov / 2), SF = WF / this.sC().getAspectRatio(this));
          else {
            const FF = this.sC().getRenderWidth() / 2,
              CF = this.sC().getRenderHeight() / 2;
            WF = (this.orthoRight ?? FF) - (this.orthoLeft ?? -FF), SF = (this.orthoTop ?? CF) - (this.orthoBottom ?? -CF)
          }
          return WF * SF
        }
        set orthoLeft(FF) {
          this._orthoLeft = FF;
          for (const WF of this._rigCameras) WF.orthoLeft = FF
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(FF) {
          this._orthoRight = FF;
          for (const WF of this._rigCameras) WF.orthoRight = FF
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(FF) {
          this._orthoBottom = FF;
          for (const WF of this._rigCameras) WF.orthoBottom = FF
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(FF) {
          this._orthoTop = FF;
          for (const WF of this._rigCameras) WF.orthoTop = FF
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(WF / (2 * FF))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(FF) {
          this._baseInertia = FF
        }
        set mode(FF) {
          this._mode = FF;
          for (const WF of this._rigCameras) WF.mode = FF
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(WF, SF, AF) {
          let dF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, QF.b)(), super(WF, AF, !1), this.inputs = (0, CF.k)(this, MF), this._position = (0, CF.k)(this, cW, bW.r.Zero()), this._upVector = ((0, CF.k)(this, GF), (0, CF.k)(this, zW, bW.r.Up())), this.oblique = ((0, CF.k)(this, IF), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, CF.k)(this, fF, .8), this.projectionPlaneTilt = ((0, CF.k)(this, yW), (0, CF.k)(this, sF, 0)), this.minZ = ((0, CF.k)(this, nF), (0, CF.k)(this, HF, 1)), this.maxZ = ((0, CF.k)(this, KF), (0, CF.k)(this, wF, 1e4)), this._baseInertia = ((0, CF.k)(this, XF), .9), this._mode = FF.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new eF.e(0, 0, 1, 1), this.layerMask = (0, CF.k)(this, UF, 268435455), this.fovMode = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, FF.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, CF.k)(this, vW), (0, CF.k)(this, JF, FF.RIG_MODE_NONE)), this.interaxialDistance = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, void 0)), this.isStereoscopicSideBySide = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, void 0)), this.ignoreCameraMaxZ = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, !1)), this.customRenderTargets = ((0, CF.k)(this, AW), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new hF.b, this.onProjectionMatrixChangedObservable = new hF.b, this.onAfterCheckInputsObservable = new hF.b, this.onRestoreStateObservable = new hF.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new bW.b, this._postProcesses = new Array, this._activeMeshes = new uF.f(256), this._globalPosition = bW.r.Zero(), this._computedViewMatrix = bW.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = bW.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = bW.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.OWF().defaultCameraLayerMask, this.OWF().addCamera(this), dF && !this.OWF().activeCamera && (this.OWF().activeCamera = this), this.position = SF, this.renderPassId = this.OWF().sC().createRenderPassId(`Camera ${WF}`)
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
          return "Kh"
        }
        toString(FF) {
          let WF = "Name: " + this.name;
          if (WF += ", type: " + this.getClassName(), this.animations)
            for (let SF = 0; SF < this.animations.length; SF++) WF += ", animation[0]: " + this.animations[SF].toString(FF);
          return WF
        }
        applyVerticalCorrection() {
          const FF = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -FF.x : FF.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(FF) {
          return -1 !== this._activeMeshes.indexOf(FF)
        }
        isReady() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (FF)
            for (const WF of this._postProcesses)
              if (WF && !WF.isReady()) return !1;
          return super.isReady(FF)
        }
        _initCache() {
          super._initCache(), this._cache.position = new bW.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new bW.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(FF) {
          FF || super._updateCache(), this._cache.position.fdF(this.position), this._cache.upVector.fdF(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const WF = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let SF = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === WF;
          if (!SF) return !1;
          const CF = this.sC();
          return this.mode === FF.PERSPECTIVE_CAMERA ? SF = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === CF.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (SF = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === CF.getRenderWidth() && this._cache.renderHeight === CF.getRenderHeight(), this.oblique && (SF = SF && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), SF
        }
        attachControl(FF, WF) {}
        detachControl(FF) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== FF.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let FF = 0; FF < this._postProcesses.length; FF++)
            if (null !== this._postProcesses[FF]) return this._postProcesses[FF];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const FF = this._getFirstPostProcess();
          FF && FF.markTextureDirty();
          for (let WF = 0, SF = this._rigCameras.length; WF < SF; WF++) {
            const FF = this._rigCameras[WF],
              SF = FF._rigPostProcess;
            if (SF) {
              "pass" === SF.getEffectName() && (FF.isIntermediate = 0 === this._postProcesses.length), FF._postProcesses = this._postProcesses.slice(0).concat(SF), SF.markTextureDirty()
            } else FF._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !FF.isReusable() && this._postProcesses.indexOf(FF) > -1 ? (PF.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == WF || WF < 0 ? this._postProcesses.push(FF) : null === this._postProcesses[WF] ? this._postProcesses[WF] = FF : this._postProcesses.splice(WF, 0, FF), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.XbF(), this._postProcesses.indexOf(FF))
        }
        detachPostProcess(FF) {
          const WF = this._postProcesses.indexOf(FF); - 1 !== WF && (this._postProcesses[WF] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.XbF(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return bW.b.Identity()
        }
        getViewMatrix(FF) {
          return !FF && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.OWF().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(FF) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== FF && (this._projectionMatrix = FF)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(WF) {
          if (this._doNotComputeProjectionMatrix || !WF && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const SF = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = SF, this._refreshFrustumPlanes = !0;
          const CF = this.sC(),
            AF = this.OWF(),
            uF = CF.QPF;
          if (this.mode === FF.PERSPECTIVE_CAMERA) {
            let WF;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = CF.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), WF = AF.useRightHandedSystem ? bW.b.PerspectiveFovRHToRef : bW.b.PerspectiveFovLHToRef, WF(this.fov, CF.getAspectRatio(this), uF ? SF : this.minZ, uF ? this.minZ : SF, this._projectionMatrix, this.fovMode === FF.FOVMODE_VERTICAL_FIXED, CF.isNDCHalfZRange, this.projectionPlaneTilt, uF)
          } else {
            const FF = CF.getRenderWidth() / 2,
              WF = CF.getRenderHeight() / 2;
            AF.useRightHandedSystem ? this.oblique ? bW.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -FF, this.orthoRight ?? FF, this.orthoBottom ?? -WF, this.orthoTop ?? WF, uF ? SF : this.minZ, uF ? this.minZ : SF, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, CF.isNDCHalfZRange) : bW.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -FF, this.orthoRight ?? FF, this.orthoBottom ?? -WF, this.orthoTop ?? WF, uF ? SF : this.minZ, uF ? this.minZ : SF, this._projectionMatrix, CF.isNDCHalfZRange) : this.oblique ? bW.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -FF, this.orthoRight ?? FF, this.orthoBottom ?? -WF, this.orthoTop ?? WF, uF ? SF : this.minZ, uF ? this.minZ : SF, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, CF.isNDCHalfZRange) : bW.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -FF, this.orthoRight ?? FF, this.orthoBottom ?? -WF, this.orthoTop ?? WF, uF ? SF : this.minZ, uF ? this.minZ : SF, this._projectionMatrix, CF.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = CF.getRenderWidth(), this._cache.renderHeight = CF.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(FF) {
          return (this.radius || (this.target ? bW.r.Distance(this.position, this.target) : this.position.length())) + FF
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? EF.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = EF.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), WF && this.rigCameras.length > 0) {
            let WF = !1;
            for (const SF of this.rigCameras) SF._updateFrustumPlanes(), WF = WF || FF.isInFrustum(SF._frustumPlanes);
            return WF
          }
          return FF.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(FF) {
          return this._updateFrustumPlanes(), FF.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, iW.l)("Ray")
        }
        getForwardRayToRef(FF) {
          throw (0, iW.l)("Ray")
        }
        dispose(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.OWF().stopAnimation(this), this.OWF().removeCamera(this); this._rigCameras.length > 0;) {
            const FF = this._rigCameras.pop();
            FF && FF.dispose()
          }
          if (this._parentContainer) {
            const FF = this._parentContainer.cameras.indexOf(this);
            FF > -1 && this._parentContainer.cameras.splice(FF, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== FF.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let FF = this._postProcesses.length;
            for (; --FF >= 0;) {
              const WF = this._postProcesses[FF];
              WF && WF.dispose(this)
            }
          }
          let CF = this.customRenderTargets.length;
          for (; --CF >= 0;) this.customRenderTargets[CF].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.OWF().sC().releaseRenderPassId(this.renderPassId), super.dispose(WF, SF)
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
        setCameraRigMode(WF, SF) {
          if (this.cameraRigMode !== WF) {
            for (; this._rigCameras.length > 0;) {
              const FF = this._rigCameras.pop();
              FF && FF.dispose()
            }
            if (this.cameraRigMode = WF, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = SF.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== FF.RIG_MODE_NONE) {
              const FF = this.createRigCamera(this.name + "_L", 0);
              FF && (FF._isLeftCamera = !0);
              const WF = this.createRigCamera(this.name + "_R", 1);
              WF && (WF._isRightCamera = !0), FF && WF && (this._rigCameras.push(FF), this._rigCameras.push(WF))
            }
            this._setRigMode(SF), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(FF) {}
        _getVRProjectionMatrix() {
          return bW.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.sC().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(FF, WF) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[FF] = WF, "interaxialDistance" === FF && (this._cameraRigParams.stereoHalfAngle = WF / .0637 * (Math.PI / 180))
        }
        createRigCamera(FF, WF) {
          return null
        }
        _updateRigCameras() {
          for (let FF = 0; FF < this._rigCameras.length; FF++) this._rigCameras[FF].minZ = this.minZ, this._rigCameras[FF].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[FF].fov = this.fov, this._rigCameras[FF].upVector.fdF(this.upVector);
          this.cameraRigMode === FF.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const FF = rW.e.Serialize(this);
          return FF.uniqueId = this.uniqueId, FF.type = this.getClassName(), this.parent && this.parent._serializeAsParent(FF), this.inputs && this.inputs.serialize(FF), rW.e.AppendSerializedAnimations(this, FF), FF.Bu = this.serializeAnimationRanges(), FF.isEnabled = this.isEnabled(), FF
        }
        clone(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const CF = rW.e.Clone(FF.GetConstructorFromName(this.getClassName(), WF, this.OWF(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return CF.name = WF, CF.parent = SF, this.onClonedObservable.notifyObservers(CF), CF
        }
        CAF(FF) {
          const WF = bW.r.Zero();
          return this.getDirectionToRef(FF, WF), WF
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(FF, WF) {
          bW.r.TransformNormalToRef(FF, this.getWorldMatrix(), WF)
        }
        static GetConstructorFromName(WF, SF, CF) {
          let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            uF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const hF = dF.e.Construct(WF, SF, CF, {
            interaxial_distance: AF,
            isStereoscopicSideBySide: uF
          });
          return hF || (() => FF._CreateDefaultParsedCamera(SF, CF))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let FF = this.OWF().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (FF *= -1), FF
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(YF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, AF.G)("position")], SF = [(0, AF.G)("upVector")], RF = [(0, AF.H)()], gW = [(0, AF.H)()], tW = [(0, AF.H)()], TF = [(0, AF.H)()], aW = [(0, AF.H)()], kW = [(0, AF.H)()], qW = [(0, AF.H)()], VF = [(0, AF.H)()], NF = [(0, AF.H)()], DF = [(0, AF.H)()], LF = [(0, AF.H)()], mW = [(0, AF.H)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], oF = [(0, AF.H)()], (0, CF.j)(FF, null, RF, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: FF => "orthoLeft" in FF,
            get: FF => FF.orthoLeft
          },
          metadata: uF
        }, null, MF), (0, CF.j)(FF, null, gW, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: FF => "orthoRight" in FF,
            get: FF => FF.orthoRight
          },
          metadata: uF
        }, null, MF), (0, CF.j)(FF, null, tW, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: FF => "orthoBottom" in FF,
            get: FF => FF.orthoBottom
          },
          metadata: uF
        }, null, MF), (0, CF.j)(FF, null, TF, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: FF => "orthoTop" in FF,
            get: FF => FF.orthoTop
          },
          metadata: uF
        }, null, MF), (0, CF.j)(FF, null, NF, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: FF => "inertia" in FF,
            get: FF => FF.inertia
          },
          metadata: uF
        }, null, MF), (0, CF.j)(FF, null, DF, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: FF => "mode" in FF,
            get: FF => FF.mode
          },
          metadata: uF
        }, null, MF), (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: FF => "_position" in FF,
            get: FF => FF._position,
            set: (FF, WF) => {
              FF._position = WF
            }
          },
          metadata: uF
        }, cW, GF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: FF => "_upVector" in FF,
            get: FF => FF._upVector,
            set: (FF, WF) => {
              FF._upVector = WF
            }
          },
          metadata: uF
        }, zW, IF), (0, CF.j)(null, null, aW, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: FF => "fov" in FF,
            get: FF => FF.fov,
            set: (FF, WF) => {
              FF.fov = WF
            }
          },
          metadata: uF
        }, fF, yW), (0, CF.j)(null, null, kW, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: FF => "projectionPlaneTilt" in FF,
            get: FF => FF.projectionPlaneTilt,
            set: (FF, WF) => {
              FF.projectionPlaneTilt = WF
            }
          },
          metadata: uF
        }, sF, nF), (0, CF.j)(null, null, qW, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "minZ" in FF,
            get: FF => FF.minZ,
            set: (FF, WF) => {
              FF.minZ = WF
            }
          },
          metadata: uF
        }, HF, KF), (0, CF.j)(null, null, VF, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "maxZ" in FF,
            get: FF => FF.maxZ,
            set: (FF, WF) => {
              FF.maxZ = WF
            }
          },
          metadata: uF
        }, wF, XF), (0, CF.j)(null, null, LF, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: FF => "layerMask" in FF,
            get: FF => FF.layerMask,
            set: (FF, WF) => {
              FF.layerMask = WF
            }
          },
          metadata: uF
        }, UF, BF), (0, CF.j)(null, null, mW, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "fovMode" in FF,
            get: FF => FF.fovMode,
            set: (FF, WF) => {
              FF.fovMode = WF
            }
          },
          metadata: uF
        }, jW, vW), (0, CF.j)(null, null, OF, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "cameraRigMode" in FF,
            get: FF => FF.cameraRigMode,
            set: (FF, WF) => {
              FF.cameraRigMode = WF
            }
          },
          metadata: uF
        }, JF, pF), (0, CF.j)(null, null, xW, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: FF => "interaxialDistance" in FF,
            get: FF => FF.interaxialDistance,
            set: (FF, WF) => {
              FF.interaxialDistance = WF
            }
          },
          metadata: uF
        }, lF, FW), (0, CF.j)(null, null, ZF, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: FF => "isStereoscopicSideBySide" in FF,
            get: FF => FF.isStereoscopicSideBySide,
            set: (FF, WF) => {
              FF.isStereoscopicSideBySide = WF
            }
          },
          metadata: uF
        }, WW, SW), (0, CF.j)(null, null, oF, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: FF => "ignoreCameraMaxZ" in FF,
            get: FF => FF.ignoreCameraMaxZ,
            set: (FF, WF) => {
              FF.ignoreCameraMaxZ = WF
            }
          },
          metadata: uF
        }, CW, AW), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF._CreateDefaultParsedCamera = (FF, WF) => {
        throw (0, iW.l)("UniversalCamera")
      }, FF.PERSPECTIVE_CAMERA = 0, FF.ORTHOGRAPHIC_CAMERA = 1, FF.FOVMODE_VERTICAL_FIXED = 0, FF.FOVMODE_HORIZONTAL_FIXED = 1, FF.RIG_MODE_NONE = 0, FF.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, FF.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, FF.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, FF.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, FF.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, FF.RIG_MODE_VR = 20, FF.RIG_MODE_CUSTOM = 22, FF.ForceAttachControlToAlwaysPreventDefault = !1, FF
    })();

    function tW(FF, WF) {
      const SF = FF.type,
        CF = gW.GetConstructorFromName(SF, FF.name, WF, FF.interaxial_distance, FF.isStereoscopicSideBySide),
        AF = rW.e.Parse(CF, FF, WF);
      if (void 0 !== FF.parentId && (AF._waitingParentId = FF.parentId), void 0 !== FF.parentInstanceIndex && (AF._waitingParentInstanceIndex = FF.parentInstanceIndex), AF.inputs && (AF.inputs.parse(FF), AF._setupInputs()), FF.upVector && (AF.upVector = bW.r.FromArray(FF.upVector)), AF.setPosition && (AF.position.FhF(0, 0, 0), AF.setPosition(bW.r.FromArray(FF.position))), FF.target && AF.setTarget && AF.setTarget(bW.r.FromArray(FF.target)), FF.cameraRigMode) {
        const WF = FF.interaxial_distance ? {
          interaxialDistance: FF.interaxial_distance
        } : {};
        AF.setCameraRigMode(FF.cameraRigMode, WF)
      }
      if (FF.animations) {
        for (let WF = 0; WF < FF.animations.length; WF++) {
          const SF = FF.animations[WF],
            CF = (0, RF.c)("BABYLON.Animation");
          CF && AF.animations.push(CF.Parse(SF))
        }
        dF.e.ParseAnimationRanges(AF, FF, WF)
      }
      return FF.autoAnimate && WF.beginAnimation(AF, FF.autoAnimateFrom, FF.autoAnimateTo, FF.autoAnimateLoop, FF.autoAnimateSpeed || 1), void 0 !== FF.isEnabled && AF.MWF(FF.isEnabled), AF
    }
    let TF = !1;

    function aW() {
      TF || (TF = !0, gW.Parse = tW)
    }
  },
  38199: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF) {
        this._cameraPosition = WF, this._behavior = SF, this.activeInput = !1, this.speed = 1, this.mAF = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new CF.r, this.rotationAccumulatedPixels = new CF.r, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = CF.r.Zero(), this.rotationDeltaCurrentFrame = CF.r.Zero(), this._zoomVelocity = 0, this._panVelocity = new CF.r, this.referenceFrameRate = 60, this._rotationVelocity = new CF.r, this._prevFrameTimeMs = 0, this._scene = FF
      }
      computeCurrentFrameDeltas() {
        const FF = this._scene.sC().getDeltaTime(),
          WF = this._getEffectiveDeltaMs(FF);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.DuF(0), this.rotationDeltaCurrentFrame.DuF(0), this.zoomDeltaCurrentFrame = 0, void(FF > 0 && (this._prevFrameTimeMs = FF));
        this.panDeltaCurrentFrame.DuF(0), this.rotationDeltaCurrentFrame.DuF(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.FhF(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * WF, this.panDeltaCurrentFrame), this._rotationVelocity.FhF(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.FhF(this._rotationVelocity.x * this.speed * this.rotationXSpeed * WF, this._rotationVelocity.y * this.speed * this.rotationYSpeed * WF, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.mAF * this._zoomSpeedMultiplier) * WF, FF > 0 && (this._prevFrameTimeMs = FF), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.DuF(0), this.rotationAccumulatedPixels.DuF(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.DuF(0), this.rotationAccumulatedPixels.DuF(0)
      }
      resetPanVelocity() {
        this._panVelocity.DuF(0), this.panAccumulatedPixels.DuF(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(FF) {
        const WF = this._scene.sC().getDeltaTime(),
          SF = this._getEffectiveDeltaMs(WF),
          CF = 1e3 / this.referenceFrameRate;
        return Math.pow(FF, SF / CF)
      }
      getFrameIndependentInputScale(FF) {
        const WF = 1 - FF;
        if (WF <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(FF)) / WF
      }
      _getEffectiveDeltaMs(FF) {
        return FF > 0 ? FF : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(FF, WF, SF) {
        let CF = FF;
        const AF = this._scene.sC().getDeltaTime(),
          uF = this._getEffectiveDeltaMs(AF);
        if (0 === uF) return CF;
        const hF = this.getFrameIndependentDecay(SF);
        if (CF *= hF, 0 !== WF || this.activeInput) {
          const FF = 1 - SF;
          CF += WF / uF * (FF > 0 ? (1 - hF) / FF : 1)
        } else Math.abs(CF) < 1e-6 && (CF = 0);
        return CF
      }
    }
  },
  38201: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      constructor(FF, WF) {
        this.inputMap = [], this.handlers = FF, this._createDefaultEntries = WF, this.resetInputMap()
      }
      resolveInteraction(FF, WF) {
        for (const SF of this.inputMap)
          if (SF.source === FF && this._entryMatches(SF, WF)) return SF;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(FF, WF, SF) {
        const CF = this.inputMap;
        for (let AF = 0; AF < CF.length; AF++) {
          const uF = CF[AF];
          if (uF.source === FF && uF.interaction === WF && this._entryConditionsMatch(uF, SF)) return uF
        }
      }
      getEntries(FF, WF, SF) {
        const CF = [],
          AF = this.inputMap;
        for (let uF = 0; uF < AF.length; uF++) {
          const hF = AF[uF];
          hF.source === FF && hF.interaction === WF && this._entryConditionsMatch(hF, SF) && CF.push(hF)
        }
        return CF
      }
      addEntry(FF) {
        const WF = this._entrySpecificity(FF);
        let SF = this.inputMap.length;
        for (let CF = 0; CF < this.inputMap.length; CF++)
          if (this._entrySpecificity(this.inputMap[CF]) < WF) {
            SF = CF;
            break
          } this.inputMap.splice(SF, 0, FF)
      }
      setInteraction(FF, WF, SF) {
        const CF = this.resolveInteraction(FF, WF);
        return CF && this._entryCoversAllConditionsOf(CF, WF) ? (CF.interaction = SF, !0) : (this.addEntry({
          source: FF,
          ...WF ?? {},
          interaction: SF
        }), !0)
      }
      _entryCoversAllConditionsOf(FF, WF) {
        if (!WF) return !0;
        const SF = FF;
        for (const CF of Object.keys(WF)) {
          const FF = WF[CF];
          if (void 0 !== FF)
            if ("modifiers" === CF) {
              const WF = SF.modifiers ?? {};
              for (const SF of Object.keys(FF))
                if (void 0 !== FF[SF] && void 0 === WF[SF]) return !1
            } else if (void 0 === SF[CF]) return !1
        }
        return !0
      }
      setInteractions(FF, WF, SF) {
        let CF = 0;
        const AF = this.inputMap;
        for (let uF = 0; uF < AF.length; uF++) {
          const hF = AF[uF];
          hF.source === FF && this._entryMatches(hF, WF) && (hF.interaction = SF, CF++)
        }
        return CF
      }
      _entryMatches(FF, WF) {
        switch (FF.source) {
          case "pointer":
            return (void 0 === FF.button || FF.button === WF?.button) && this._matchModifiers(FF.modifiers, WF?.modifiers);
          case "wheel":
            return this._matchModifiers(FF.modifiers, WF?.modifiers);
          case "touch":
            return void 0 === FF.touchCount || FF.touchCount === WF?.touchCount;
          case "keyboard":
            return (void 0 === FF.key || (Array.isArray(FF.key) ? -1 !== FF.key.indexOf(WF?.key ?? -1) : FF.key === WF?.key)) && this._matchModifiers(FF.modifiers, WF?.modifiers)
        }
      }
      _entryConditionsMatch(FF, WF) {
        if (!WF) return !0;
        switch (FF.source) {
          case "pointer":
            return (!("button" in WF) || FF.button === WF.button) && (!("modifiers" in WF) || this._entryModifiersMatch(FF.modifiers, WF.modifiers));
          case "wheel":
            return !("modifiers" in WF) || this._entryModifiersMatch(FF.modifiers, WF.modifiers);
          case "touch":
            return !("touchCount" in WF) || FF.touchCount === WF.touchCount;
          case "keyboard":
            if ("key" in WF) {
              if (void 0 === FF.key) return void 0 === WF.key;
              if (void 0 === WF.key || (Array.isArray(FF.key) ? -1 === FF.key.indexOf(WF.key) : FF.key !== WF.key)) return !1
            }
            return !("modifiers" in WF) || this._entryModifiersMatch(FF.modifiers, WF.modifiers)
        }
      }
      _entrySpecificity(FF) {
        let WF = 0;
        return "button" in FF && void 0 !== FF.button && WF++, "key" in FF && void 0 !== FF.key && WF++, "touchCount" in FF && void 0 !== FF.touchCount && WF++, "modifiers" in FF && FF.modifiers && WF++, WF
      }
      _matchModifiers(FF, WF) {
        return !FF || (void 0 === FF.ctrl || FF.ctrl === (WF?.ctrl ?? !1)) && ((void 0 === FF.shift || FF.shift === (WF?.shift ?? !1)) && (void 0 === FF.alt || FF.alt === (WF?.alt ?? !1)))
      }
      _entryModifiersMatch(FF, WF) {
        if (!WF) return !FF;
        return void 0 !== WF.ctrl || void 0 !== WF.shift || void 0 !== WF.alt ? (void 0 === WF.ctrl || FF?.ctrl === WF.ctrl) && ((void 0 === WF.shift || FF?.shift === WF.shift) && (void 0 === WF.alt || FF?.alt === WF.alt)) : !FF || void 0 === FF.ctrl && void 0 === FF.shift && void 0 === FF.alt
      }
    }
  },
  38176: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => tW,
      h: () => rW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(38183),
      hF = SF(35623),
      bW = SF(35625),
      dF = SF(38194),
      PF = SF(38187),
      RF = SF(38199),
      iW = SF(38201);
    class eF extends RF.e {
      constructor(FF, WF, SF) {
        super(FF, WF, SF), this.input = new iW.d({
          translate: (FF, WF, SF) => {
            this.panAccumulatedPixels.x += FF, this.panAccumulatedPixels.y += WF, this.panAccumulatedPixels.z += SF
          },
          rotate: (FF, WF) => {
            this.rotationAccumulatedPixels.x += FF, this.rotationAccumulatedPixels.y += WF
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
    const EF = hF.b.Zero(),
      QF = hF.e.Identity();
    let rW = (() => {
        var FF;
        let WF, SF, PF, RF, iW = uF.c,
          rW = [],
          gW = [],
          tW = [],
          TF = [],
          aW = [],
          kW = [],
          qW = [],
          VF = [];
        return FF = class extends iW {
          get inertia() {
            return this._targetInertia
          }
          set inertia(FF) {
            this._targetInertia = FF, this.movement && (this.movement.panInertia = FF, this.movement.rotationInertia = FF)
          }
          constructor(FF, WF, SF) {
            super(FF, WF, SF, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new hF.r(0, 0, 0), this.cameraRotation = new hF.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, CF.k)(this, rW, !1), this.rotation = ((0, CF.k)(this, gW), (0, CF.k)(this, tW, void 0)), this.rotationQuaternion = (0, CF.k)(this, TF), this.speed = (0, CF.k)(this, aW, 2), this.noRotationConstraint = ((0, CF.k)(this, kW), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = bW.c, this._rotationEpsilon = bW.c, this.lockedTarget = (0, CF.k)(this, qW, null), this._currentTarget = ((0, CF.k)(this, VF), hF.r.Zero()), this._initialFocalDistance = 1, this._viewMatrix = hF.b.Zero(), this._cameraTransformMatrix = hF.b.Zero(), this._cameraRotationMatrix = hF.b.Zero(), this._transformedReferencePoint = hF.r.Zero(), this._deferredPositionUpdate = new hF.r, this._deferredRotationQuaternionUpdate = new hF.e, this._deferredRotationUpdate = new hF.r, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = hF.r.Forward(this.OWF().useRightHandedSystem), this.rotation = new hF.r(0, this.OWF().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new eF(this.OWF(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(FF) {
            this.getWorldMatrix();
            const WF = hF.j.HC[0],
              SF = hF.j.HC[1];
            return SF.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(SF, WF), WF.scaleInPlace(FF), this.globalPosition.add(WF)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const FF = this.lockedTarget;
              FF.computeWorldMatrix().getTranslationToRef(FF.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.FhF(0, 0, 0), this.cameraRotation.FhF(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new hF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new hF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new hF.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(FF) {
            FF || super._updateCache();
            const WF = this._getLockedTargetPosition();
            WF ? this._cache.lockedTarget ? this._cache.lockedTarget.fdF(WF) : this._cache.lockedTarget = WF.clone() : this._cache.lockedTarget = null, this._cache.rotation.fdF(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.fdF(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const FF = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(FF) : !FF) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const FF = this.sC();
            return this.speed * Math.sqrt(FF.getDeltaTime() / (100 * FF.getFps()))
          }
          setTarget(FF) {
            this.upVector.normalize(), this._initialFocalDistance = FF.subtract(this.position).length(), this.position.z === FF.z && (this.position.z += bW.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.OWF().useRightHandedSystem ? hF.b.LookAtRHToRef(this.position, FF, hF.r.UpReadOnly, EF) : hF.b.LookAtLHToRef(this.position, FF, hF.r.UpReadOnly, EF), EF.invert();
            const WF = this.rotationQuaternion || QF;
            hF.e.FromRotationMatrixToRef(EF, WF), WF.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(FF) {
            this.setTarget(FF)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(hF.j.Matrix[0]), hF.r.TransformNormalToRef(this.cameraDirection, hF.j.Matrix[0], hF.j.HC[0]), this._deferredPositionUpdate.addInPlace(hF.j.HC[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.fdF(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.fdF(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const FF = this.movement,
              WF = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            FF.panAccumulatedPixels.addInPlace(this.cameraDirection), FF.rotationAccumulatedPixels.x += this.cameraRotation.x, FF.rotationAccumulatedPixels.y += this.cameraRotation.y, FF.computeCurrentFrameDeltas(), this.cameraDirection.fdF(FF.panDeltaCurrentFrame), this.cameraRotation.set(FF.rotationDeltaCurrentFrame.x, FF.rotationDeltaCurrentFrame.y);
            const SF = this.speed * this._panningEpsilon;
            !WF && Math.abs(this.cameraDirection.x) < SF && Math.abs(this.cameraDirection.y) < SF && Math.abs(this.cameraDirection.z) < SF && (this.cameraDirection.DuF(0), FF.resetPanVelocity());
            const CF = this.invertRotation ? -this.inverseRotationSpeed : 1,
              AF = this._decideIfNeedsToMove(),
              uF = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.fdF(this.rotation), this._deferredPositionUpdate.fdF(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.fdF(this.rotationQuaternion), AF && this._updatePosition(), uF) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * CF, this._deferredRotationUpdate.y += this.cameraRotation.y * CF, !this.noRotationConstraint) {
                const FF = 1.570796;
                this._deferredRotationUpdate.x > FF && (this._deferredRotationUpdate.x = FF), this._deferredRotationUpdate.x < -FF && (this._deferredRotationUpdate.x = -FF)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.fdF(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (hF.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.fdF(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.DuF(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : hF.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return hF.r.TransformNormalToRef(hF.r.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), hF.r.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? dF.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (hF.e.FromEulerVectorToRef(this.rotation, QF), dF.b.Y.rotateByQuaternionToRef(QF, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(FF, WF, SF) {
            if (this.OWF().useRightHandedSystem ? hF.b.LookAtRHToRef(FF, WF, SF, this._viewMatrix) : hF.b.LookAtLHToRef(FF, WF, SF, this._viewMatrix), this.parent) {
              const FF = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(FF, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(WF, SF) {
            if (this.cameraRigMode !== uF.c.RIG_MODE_NONE) {
              const SF = new FF(WF, this.position.clone(), this.OWF());
              return SF.isRigCamera = !0, SF.rigParent = this, this.cameraRigMode === uF.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new hF.e), SF._cameraRigParams = {}, SF.rotationQuaternion = new hF.e), SF.mode = this.mode, SF.orthoLeft = this.orthoLeft, SF.orthoRight = this.orthoRight, SF.orthoTop = this.orthoTop, SF.orthoBottom = this.orthoBottom, SF
            }
            return null
          }
          _updateRigCameras() {
            const FF = this._rigCameras[0],
              WF = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case uF.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case uF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case uF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case uF.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case uF.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const SF = this.cameraRigMode === uF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  CF = this.cameraRigMode === uF.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * SF, FF), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * CF, WF);
                break
              }
              case uF.c.RIG_MODE_VR:
                FF.rotationQuaternion && WF.rotationQuaternion && this.rotationQuaternion ? (FF.rotationQuaternion.fdF(this.rotationQuaternion), WF.rotationQuaternion.fdF(this.rotationQuaternion)) : (FF.rotation.fdF(this.rotation), WF.rotation.fdF(this.rotation)), FF.position.fdF(this.position), WF.position.fdF(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(WF, SF) {
            this.getTarget().subtractToRef(this.position, FF._TargetFocalPoint), FF._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const CF = FF._TargetFocalPoint.addInPlace(this.position);
            hF.b.TranslationToRef(-CF.x, -CF.y, -CF.z, FF._TargetTransformMatrix), FF._TargetTransformMatrix.multiplyToRef(hF.b.RotationAxis(SF.upVector, WF), FF._RigCamTransformMatrix), hF.b.TranslationToRef(CF.x, CF.y, CF.z, FF._TargetTransformMatrix), FF._RigCamTransformMatrix.multiplyToRef(FF._TargetTransformMatrix, FF._RigCamTransformMatrix), hF.r.TransformCoordinatesToRef(this.position, FF._RigCamTransformMatrix, SF.position), SF.setTarget(CF)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(iW[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.G)()], PF = [(0, AF.H)()], RF = [(0, AF.x)("lockedTargetId")], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: FF => "updateUpVectorFromRotation" in FF,
              get: FF => FF.updateUpVectorFromRotation,
              set: (FF, WF) => {
                FF.updateUpVectorFromRotation = WF
              }
            },
            metadata: uF
          }, rW, gW), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: FF => "rotation" in FF,
              get: FF => FF.rotation,
              set: (FF, WF) => {
                FF.rotation = WF
              }
            },
            metadata: uF
          }, tW, TF), (0, CF.j)(null, null, PF, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: FF => "speed" in FF,
              get: FF => FF.speed,
              set: (FF, WF) => {
                FF.speed = WF
              }
            },
            metadata: uF
          }, aW, kW), (0, CF.j)(null, null, RF, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: FF => "lockedTarget" in FF,
              get: FF => FF.lockedTarget,
              set: (FF, WF) => {
                FF.lockedTarget = WF
              }
            },
            metadata: uF
          }, qW, VF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF._RigCamTransformMatrix = new hF.b, FF._TargetTransformMatrix = new hF.b, FF._TargetFocalPoint = new hF.r, FF
      })(),
      gW = !1;

    function tW() {
      gW || (gW = !0, PF.e.AddNodeConstructor("TargetCamera", ((FF, WF) => () => new rW(FF, hF.r.Zero(), WF))))
    }
  },
  37916: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF
    });
    var CF = SF(37867);
    let AF = !1;

    function uF() {
      AF || (AF = !0, CF.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, CF.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, CF.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, CF.e.prototype.getAspectRatio = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = FF.viewport;
        return this.getRenderWidth(WF) * SF.width / (this.getRenderHeight(WF) * SF.height)
      }, CF.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, CF.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38006: (FF, WF, SF) => {
    var CF = SF(37867),
      AF = SF(38010);
    let uF = !1;
    uF || (uF = !0, (0, AF.o)(), CF.e.prototype._loadFileAsync = async function(FF, WF, SF) {
      return await new Promise(((CF, AF) => {
        this._loadFile(FF, (FF => {
          CF(FF)
        }), void 0, WF, SF, ((FF, WF) => {
          AF(WF)
        }))
      }))
    })
  },
  38004: (FF, WF, SF) => {
    (0, SF(37919).b)()
  },
  37919: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(37867);
    let AF = !1;

    function uF() {
      AF || (AF = !0, CF.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, CF.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, CF.e.prototype.createRenderPassId = function(FF) {
        const WF = ++CF.e._RenderPassIdCounter;
        return this._renderPassNames[WF] = FF ?? "NONAME", WF
      }, CF.e.prototype.releaseRenderPassId = function(FF) {
        this._renderPassNames[FF] = void 0;
        for (let WF = 0; WF < this.scenes.length; ++WF) {
          const SF = this.scenes[WF];
          for (let WF = 0; WF < SF.meshes.length; ++WF) {
            const CF = SF.meshes[WF];
            if (CF._releaseRenderPassId(FF), CF.Om)
              for (let WF = 0; WF < CF.Om.length; ++WF) {
                CF.Om[WF]._removeDrawWrapper(FF)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(FF)
      })
    }
  },
  38043: (FF, WF, SF) => {
    var CF = SF(38045),
      AF = SF(37867);
    let uF = !1;
    uF || (uF = !0, AF.e.GetCompatibleTextureLoader = CF.d)
  },
  37928: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(37809);
    let AF = !1;

    function uF() {
      AF || (AF = !0, CF.ThinEngine.prototype.setAlphaMode = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[SF] === FF) {
          if (!WF) {
            const WF = 0 === FF;
            this.depthCullingState.depthMask !== WF && (this.depthCullingState.depthMask = WF)
          }
          return
        }
        const CF = 0 === FF;
        this._alphaState.setAlphaBlend(!CF, SF), this._alphaState.setAlphaMode(FF, SF), WF || (this.depthCullingState.depthMask = CF), this._alphaMode[SF] = FF
      })
    }
  },
  37944: (FF, WF, SF) => {
    var CF = SF(37796),
      AF = SF(37076),
      uF = SF(37809),
      hF = SF(37953),
      bW = SF(37908);
    class dF extends hF.d {
      setDepthStencilTexture(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(FF, WF), !FF) return;
        const SF = this._engine,
          CF = this._context,
          AF = FF._hardwareTexture;
        if (AF && FF._autoMSAAManagement && this._MSAAFramebuffer) {
          const WF = SF._currentFramebuffer;
          SF._bindUnboundFramebuffer(this._MSAAFramebuffer), CF.framebufferRenderbuffer(CF.FRAMEBUFFER, (0, bW.b)(FF.format) ? CF.DEPTH_STENCIL_ATTACHMENT : CF.DEPTH_ATTACHMENT, CF.RENDERBUFFER, AF.getMSAARenderBuffer()), SF._bindUnboundFramebuffer(WF)
        }
      }
      constructor(FF, WF, SF, CF, AF) {
        super(FF, WF, SF, CF), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = AF
      }
      _cloneRenderTargetWrapper() {
        let FF;
        return this._colorTextureArray && this._depthStencilTextureArray ? (FF = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), FF.texture.isReady = !0) : FF = super._cloneRenderTargetWrapper(), FF
      }
      _swapRenderTargetWrapper(FF) {
        super._swapRenderTargetWrapper(FF), FF._framebuffer = this._framebuffer, FF._depthStencilBuffer = this._depthStencilBuffer, FF._MSAAFramebuffer = this._MSAAFramebuffer, FF._colorTextureArray = this._colorTextureArray, FF._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const FF = this._engine,
            WF = FF._currentFramebuffer,
            SF = this._context;
          FF._bindUnboundFramebuffer(this._framebuffer), SF.framebufferRenderbuffer(SF.FRAMEBUFFER, SF.DEPTH_STENCIL_ATTACHMENT, SF.RENDERBUFFER, null), SF.framebufferRenderbuffer(SF.FRAMEBUFFER, SF.DEPTH_ATTACHMENT, SF.RENDERBUFFER, null), SF.framebufferRenderbuffer(SF.FRAMEBUFFER, SF.STENCIL_ATTACHMENT, SF.RENDERBUFFER, null), FF._bindUnboundFramebuffer(WF), SF.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(FF, WF, SF, CF, AF, uF)
      }
      shareDepth(FF) {
        super.shareDepth(FF);
        const WF = this._context,
          SF = this._depthStencilBuffer,
          CF = FF._MSAAFramebuffer || FF._framebuffer,
          AF = this._engine;
        FF._depthStencilBuffer && FF._depthStencilBuffer !== SF && WF.deleteRenderbuffer(FF._depthStencilBuffer), FF._depthStencilBuffer = SF;
        const uF = FF._generateStencilBuffer ? WF.DEPTH_STENCIL_ATTACHMENT : WF.DEPTH_ATTACHMENT;
        AF._bindUnboundFramebuffer(CF), WF.framebufferRenderbuffer(WF.FRAMEBUFFER, uF, WF.RENDERBUFFER, SF), AF._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AF = FF._hardwareTexture;
        if (!AF) return;
        const uF = this._framebuffer,
          hF = this._engine,
          bW = hF._currentFramebuffer;
        let dF;
        if (hF._bindUnboundFramebuffer(uF), hF.Im > 1) {
          const uF = this._context;
          dF = uF["COLOR_ATTACHMENT" + WF], FF.is2DArray || FF.is3D ? (SF = SF ?? this.layerIndices?.[WF] ?? 0, uF.framebufferTextureLayer(uF.FRAMEBUFFER, dF, AF.underlyingResource, CF, SF)) : FF.isCube ? (SF = SF ?? this.faceIndices?.[WF] ?? 0, uF.framebufferTexture2D(uF.FRAMEBUFFER, dF, uF.TEXTURE_CUBE_MAP_POSITIVE_X + SF, AF.underlyingResource, CF)) : uF.framebufferTexture2D(uF.FRAMEBUFFER, dF, uF.TEXTURE_2D, AF.underlyingResource, CF)
        } else {
          const FF = this._context;
          dF = FF["COLOR_ATTACHMENT" + WF + "_WEBGL"];
          const uF = void 0 !== SF ? FF.TEXTURE_CUBE_MAP_POSITIVE_X + SF : FF.TEXTURE_2D;
          FF.framebufferTexture2D(FF.FRAMEBUFFER, dF, uF, AF.underlyingResource, CF)
        }
        if (FF._autoMSAAManagement && this._MSAAFramebuffer) {
          const FF = this._context;
          hF._bindUnboundFramebuffer(this._MSAAFramebuffer), FF.framebufferRenderbuffer(FF.FRAMEBUFFER, dF, FF.RENDERBUFFER, AF.getMSAARenderBuffer())
        }
        hF._bindUnboundFramebuffer(bW)
      }
      setTexture(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(FF, WF, SF), this._bindTextureRenderTarget(FF, WF)
      }
      setLayerAndFaceIndices(FF, WF) {
        if (super.setLayerAndFaceIndices(FF, WF), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const SF = this._attachments?.length ?? this.textures.length;
        for (let CF = 0; CF < SF; CF++) {
          const FF = this.textures[CF];
          FF && (FF.is2DArray || FF.is3D ? this._bindTextureRenderTarget(FF, CF, this.layerIndices[CF]) : FF.isCube ? this._bindTextureRenderTarget(FF, CF, this.faceIndices[CF]) : this._bindTextureRenderTarget(FF, CF))
        }
      }
      setLayerAndFaceIndex() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(FF, WF, SF), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const CF = this.textures[FF];
        CF.is2DArray || CF.is3D ? this._bindTextureRenderTarget(this.textures[FF], FF, this.layerIndices[FF]) : CF.isCube && this._bindTextureRenderTarget(this.textures[FF], FF, this.faceIndices[FF])
      }
      resolveMSAATextures() {
        const FF = this._engine,
          WF = FF._currentFramebuffer;
        FF._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), FF._bindUnboundFramebuffer(WF)
      }
      dispose() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const WF = this._context;
        FF || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (WF.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (WF.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (WF.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(FF)
      }
    }
    let PF = !1;
    PF || (PF = !0, uF.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(FF, WF, SF) {
      const CF = new dF(FF, WF, SF, this, this._gl);
      return this._renderTargetWrapperCache.push(CF), CF
    }, uF.ThinEngine.prototype.createRenderTargetTexture = function(FF, WF) {
      const SF = this._createHardwareRenderTargetWrapper(!1, !1, FF);
      let CF, AF, uF = !0,
        hF = !1,
        bW = !1,
        dF = 1;
      void 0 !== WF && "object" === typeof WF && (uF = WF.generateDepthBuffer ?? !0, hF = !!WF.generateStencilBuffer, bW = !!WF.noColorAttachment, CF = WF.colorAttachment, dF = WF.samples ?? 1, AF = WF.label);
      const PF = CF || (bW ? null : this._createInternalTexture(FF, WF, !0, 5)),
        RF = FF.width || FF,
        iW = FF.height || FF,
        eF = this._currentFramebuffer,
        EF = this._gl,
        QF = EF.createFramebuffer();
      if (this._bindUnboundFramebuffer(QF), SF._depthStencilBuffer = this._setupFramebufferDepthAttachments(hF, uF, RF, iW), !PF || PF.is2DArray || PF.is3D || EF.framebufferTexture2D(EF.FRAMEBUFFER, EF.COLOR_ATTACHMENT0, EF.TEXTURE_2D, PF._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(eF), SF.label = AF ?? "RenderTargetWrapper", SF._framebuffer = QF, SF._generateDepthBuffer = uF, SF._generateStencilBuffer = hF, SF.setTextures(PF), CF) {
        if (SF._samples = CF.samples, CF.samples > 1) {
          const FF = CF._hardwareTexture.getMSAARenderBuffer(0);
          SF._MSAAFramebuffer = EF.createFramebuffer(), this._bindUnboundFramebuffer(SF._MSAAFramebuffer), EF.framebufferRenderbuffer(EF.FRAMEBUFFER, EF.COLOR_ATTACHMENT0, EF.RENDERBUFFER, FF), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(SF, dF);
      return SF
    }, uF.ThinEngine.prototype._createDepthStencilTexture = function(FF, WF, SF) {
      const uF = this._gl,
        hF = FF.layers || 0,
        dF = FF.depth || 0;
      let PF = uF.TEXTURE_2D;
      0 !== hF ? PF = uF.TEXTURE_2D_ARRAY : 0 !== dF && (PF = uF.TEXTURE_3D);
      const RF = new CF.b(this, 12);
      if (RF.label = WF.label, !this._caps.depthTextureExtension) return AF.b.Error("Depth texture is not supported by your browser or hardware."), RF;
      const iW = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...WF
      };
      if (this._bindTextureDirectly(PF, RF, !0), this._setupDepthStencilTexture(RF, FF, 0 !== iW.comparisonFunction && iW.bilinearFiltering, iW.comparisonFunction, iW.samples), void 0 !== iW.depthTextureFormat) {
        if (15 !== iW.depthTextureFormat && 16 !== iW.depthTextureFormat && 17 !== iW.depthTextureFormat && 13 !== iW.depthTextureFormat && 14 !== iW.depthTextureFormat && 18 !== iW.depthTextureFormat) return AF.b.Error(`Depth texture ${iW.depthTextureFormat} format is not supported.`), RF;
        RF.format = iW.depthTextureFormat
      } else RF.format = iW.generateStencil ? 13 : 16;
      const eF = (0, bW.b)(RF.format),
        EF = this._getWebGLTextureTypeFromDepthTextureFormat(RF.format),
        QF = eF ? uF.DEPTH_STENCIL : uF.DEPTH_COMPONENT,
        rW = this._getInternalFormatFromDepthTextureFormat(RF.format, !0, eF);
      return RF.is2DArray ? uF.texImage3D(PF, 0, rW, RF.width, RF.height, hF, 0, QF, EF, null) : RF.is3D ? uF.texImage3D(PF, 0, rW, RF.width, RF.height, dF, 0, QF, EF, null) : uF.texImage2D(PF, 0, rW, RF.width, RF.height, 0, QF, EF, null), this._bindTextureDirectly(PF, null), this._internalTexturesCache.push(RF), SF._depthStencilBuffer && (uF.deleteRenderbuffer(SF._depthStencilBuffer), SF._depthStencilBuffer = null), this._bindUnboundFramebuffer(SF._MSAAFramebuffer ?? SF._framebuffer), SF._generateStencilBuffer = eF, SF._depthStencilTextureWithStencil = eF, SF._depthStencilBuffer = this._setupFramebufferDepthAttachments(SF._generateStencilBuffer, SF._generateDepthBuffer, SF.width, SF.height, SF.samples, RF.format), this._bindUnboundFramebuffer(null), RF
    }, uF.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(FF, WF) {
      if (this.Im < 2 || !FF) return 1;
      if (FF.samples === WF) return WF;
      const SF = this._gl;
      WF = Math.min(WF, this.getCaps().maxMSAASamples), FF._depthStencilBuffer && (SF.deleteRenderbuffer(FF._depthStencilBuffer), FF._depthStencilBuffer = null), FF._MSAAFramebuffer && (SF.deleteFramebuffer(FF._MSAAFramebuffer), FF._MSAAFramebuffer = null);
      const CF = FF.texture?._hardwareTexture;
      if (CF?.releaseMSAARenderBuffers(), FF.texture && WF > 1 && "function" === typeof SF.renderbufferStorageMultisample) {
        const AF = SF.createFramebuffer();
        if (!AF) throw new Error("Unable to create multi sampled framebuffer");
        FF._MSAAFramebuffer = AF, this._bindUnboundFramebuffer(FF._MSAAFramebuffer);
        const uF = this._createRenderBuffer(FF.texture.width, FF.texture.height, WF, -1, this._getRGBABufferInternalSizedFormat(FF.texture.type, FF.texture.format, FF.texture._useSRGBBuffer), SF.COLOR_ATTACHMENT0, !1);
        if (!uF) throw new Error("Unable to create multi sampled framebuffer");
        CF?.addMSAARenderBuffer(uF)
      }
      this._bindUnboundFramebuffer(FF._MSAAFramebuffer ?? FF._framebuffer), FF.texture && (FF.texture.samples = WF), FF._samples = WF;
      const AF = FF._depthStencilTexture ? FF._depthStencilTexture.format : void 0;
      return FF._depthStencilBuffer = this._setupFramebufferDepthAttachments(FF._generateStencilBuffer, FF._generateDepthBuffer, FF.width, FF.height, WF, AF), this._bindUnboundFramebuffer(null), WF
    }, uF.ThinEngine.prototype._setupDepthStencilTexture = function(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const uF = WF.width ?? WF,
        hF = WF.height ?? WF,
        bW = WF.layers || 0,
        dF = WF.depth || 0;
      FF.baseWidth = uF, FF.baseHeight = hF, FF.width = uF, FF.height = hF, FF.is2DArray = bW > 0, FF.depth = bW || dF, FF.isReady = !0, FF.samples = AF, FF.generateMipMaps = !1, FF.samplingMode = SF ? 2 : 1, FF.type = 0, FF._comparisonFunction = CF;
      const PF = this._gl,
        RF = this._getTextureTarget(FF),
        iW = this._getSamplingParameters(FF.samplingMode, !1);
      PF.texParameteri(RF, PF.TEXTURE_MAG_FILTER, iW.mag), PF.texParameteri(RF, PF.TEXTURE_MIN_FILTER, iW.min), PF.texParameteri(RF, PF.TEXTURE_WRAP_S, PF.CLAMP_TO_EDGE), PF.texParameteri(RF, PF.TEXTURE_WRAP_T, PF.CLAMP_TO_EDGE), this.Im > 1 && (0 === CF ? (PF.texParameteri(RF, PF.TEXTURE_COMPARE_FUNC, 515), PF.texParameteri(RF, PF.TEXTURE_COMPARE_MODE, PF.NONE)) : (PF.texParameteri(RF, PF.TEXTURE_COMPARE_FUNC, CF), PF.texParameteri(RF, PF.TEXTURE_COMPARE_MODE, PF.COMPARE_REF_TO_TEXTURE)))
    })
  },
  37783: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF.d
    });
    var CF = SF(37790);
    (0, SF(37928).c)();
    var AF = SF(37809);
    let uF = !1;
    ! function() {
      if (uF) return;
      uF = !0;
      const FF = new WeakMap,
        WF = new WeakMap,
        SF = new WeakMap,
        CF = new WeakMap;
      AF.ThinEngine.prototype.getAlphaToCoverage = function() {
        return FF.get(this) ?? !1
      }, AF.ThinEngine.prototype.setAlphaToCoverage = function(SF) {
        (FF.get(this) !== SF || this._gl && WF.get(this) !== this._gl) && (FF.set(this, SF), this._gl && (SF ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), WF.set(this, this._gl)))
      }, Object.defineProperty(AF.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (CF.get(this) !== this._gl && (SF.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), CF.set(this, this._gl)), SF.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var hF = SF(37796),
      bW = SF(37076),
      dF = SF(37900);
    let PF = !1;
    ! function() {
      function FF(FF, WF, SF, CF) {
        let AF, uF = 1;
        1 === CF ? AF = new Float32Array(WF * SF * 4) : 2 === CF ? (AF = new Uint16Array(WF * SF * 4), uF = 15360) : AF = 7 === CF ? new Uint32Array(WF * SF * 4) : new Uint8Array(WF * SF * 4);
        for (let hF = 0; hF < WF; hF++)
          for (let CF = 0; CF < SF; CF++) {
            const SF = 3 * (CF * WF + hF),
              bW = 4 * (CF * WF + hF);
            AF[bW + 0] = FF[SF + 0], AF[bW + 1] = FF[SF + 1], AF[bW + 2] = FF[SF + 2], AF[bW + 3] = uF
          }
        return AF
      }

      function WF(FF) {
        return function(WF, SF, CF, AF, uF, bW, dF, PF) {
          let RF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            iW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const eF = FF ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            EF = FF ? 10 : 11,
            QF = new hF.b(this, EF);
          QF.baseWidth = SF, QF.baseHeight = CF, QF.baseDepth = AF, QF.width = SF, QF.height = CF, QF.depth = AF, QF.format = uF, QF.type = iW, QF.generateMipMaps = bW, QF.samplingMode = PF, FF ? QF.is3D = !0 : QF.is2DArray = !0, this._doNotHandleContextLost || (QF._bufferView = WF), FF ? this.updateRawTexture3D(QF, WF, uF, dF, RF, iW) : this.updateRawTexture2DArray(QF, WF, uF, dF, RF, iW), this._bindTextureDirectly(eF, QF, !0);
          const rW = this._getSamplingParameters(PF, bW);
          return this._gl.texParameteri(eF, this._gl.TEXTURE_MAG_FILTER, rW.mag), this._gl.texParameteri(eF, this._gl.TEXTURE_MIN_FILTER, rW.min), bW && this._gl.generateMipmap(eF), this._bindTextureDirectly(eF, null), this._internalTexturesCache.push(QF), QF
        }
      }

      function SF(FF) {
        return function(WF, SF, CF, AF) {
          let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const bW = FF ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            dF = this._getWebGLTextureType(hF),
            PF = this._getInternalFormat(CF),
            RF = this._getRGBABufferInternalSizedFormat(hF, CF);
          this._bindTextureDirectly(bW, WF, !0), this._unpackFlipY(void 0 === AF || !!AF), this._doNotHandleContextLost || (WF._bufferView = SF, WF.format = CF, WF.invertY = AF, WF._compression = uF), WF.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), uF && SF ? this._gl.compressedTexImage3D(bW, 0, this.getCaps().s3tc[uF], WF.width, WF.height, WF.depth, 0, SF) : this._gl.texImage3D(bW, 0, RF, WF.width, WF.height, WF.depth, 0, PF, dF, SF), WF.generateMipMaps && this._gl.generateMipmap(bW), this._bindTextureDirectly(bW, null), WF.isReady = !0
        }
      }
      PF || (PF = !0, AF.ThinEngine.prototype.updateRawTexture = function(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!FF) return;
        const bW = this._getRGBABufferInternalSizedFormat(uF, SF, hF),
          dF = this._getInternalFormat(SF),
          PF = this._getWebGLTextureType(uF);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, FF, !0), this._unpackFlipY(void 0 === CF || !!CF), this._doNotHandleContextLost || (FF._bufferView = WF, FF.format = SF, FF.type = uF, FF.invertY = CF, FF._compression = AF), FF.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), AF && WF ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[AF], FF.width, FF.height, 0, WF) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, bW, FF.width, FF.height, 0, dF, PF, WF), FF.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), FF.isReady = !0
      }, AF.ThinEngine.prototype.createRawTexture = function(FF, WF, SF, CF, AF, uF, bW) {
        let dF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          RF = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const iW = new hF.b(this, 3);
        iW.baseWidth = WF, iW.baseHeight = SF, iW.width = WF, iW.height = SF, iW.format = CF, iW.generateMipMaps = AF, iW.samplingMode = bW, iW.invertY = uF, iW._compression = dF, iW.type = PF, iW._useSRGBBuffer = this._getUseSRGBBuffer(RF, !AF), this._doNotHandleContextLost || (iW._bufferView = FF), this.updateRawTexture(iW, FF, CF, uF, dF, PF, iW._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, iW, !0);
        const eF = this._getSamplingParameters(bW, AF);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, eF.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, eF.min), AF && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(iW), iW
      }, AF.ThinEngine.prototype.createRawCubeTexture = function(FF, WF, SF, CF, AF, uF, PF) {
        let RF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const iW = this._gl,
          eF = new hF.b(this, 8);
        eF.isCube = !0, eF.format = SF, eF.type = CF, this._doNotHandleContextLost || (eF._bufferViewArray = FF);
        const EF = this._getWebGLTextureType(CF);
        let QF = this._getInternalFormat(SF);
        QF === iW.RGB && (QF = iW.RGBA), EF !== iW.FLOAT || this._caps.textureFloatLinearFiltering ? EF !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? EF !== iW.FLOAT || this._caps.textureFloatRender ? EF !== iW.HALF_FLOAT || this._caps.colorBufferFloat || (AF = !1, bW.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (AF = !1, bW.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (AF = !1, PF = 1, bW.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (AF = !1, PF = 1, bW.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const rW = WF,
          gW = rW;
        eF.width = rW, eF.height = gW, eF.invertY = uF, eF._compression = RF;
        if (!this.needPOTTextures || (0, dF.h)(eF.width) && (0, dF.h)(eF.height) || (AF = !1), FF) this.updateRawCubeTexture(eF, FF, SF, CF, uF, RF);
        else {
          const FF = this._getRGBABufferInternalSizedFormat(CF),
            WF = 0;
          this._bindTextureDirectly(iW.TEXTURE_CUBE_MAP, eF, !0);
          for (let SF = 0; SF < 6; SF++) RF ? iW.compressedTexImage2D(iW.TEXTURE_CUBE_MAP_POSITIVE_X + SF, WF, this.getCaps().s3tc[RF], eF.width, eF.height, 0, void 0) : iW.texImage2D(iW.TEXTURE_CUBE_MAP_POSITIVE_X + SF, WF, FF, eF.width, eF.height, 0, QF, EF, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, eF, !0), FF && AF && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const tW = this._getSamplingParameters(PF, AF);
        return iW.texParameteri(iW.TEXTURE_CUBE_MAP, iW.TEXTURE_MAG_FILTER, tW.mag), iW.texParameteri(iW.TEXTURE_CUBE_MAP, iW.TEXTURE_MIN_FILTER, tW.min), iW.texParameteri(iW.TEXTURE_CUBE_MAP, iW.TEXTURE_WRAP_S, iW.CLAMP_TO_EDGE), iW.texParameteri(iW.TEXTURE_CUBE_MAP, iW.TEXTURE_WRAP_T, iW.CLAMP_TO_EDGE), this._bindTextureDirectly(iW.TEXTURE_CUBE_MAP, null), eF.generateMipMaps = AF, eF.samplingMode = PF, eF.isReady = !0, eF
      }, AF.ThinEngine.prototype.updateRawCubeTexture = function(WF, SF, CF, AF, uF) {
        let hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        WF._bufferViewArray = SF, WF.format = CF, WF.type = AF, WF.invertY = uF, WF._compression = hF;
        const PF = this._gl,
          RF = this._getWebGLTextureType(AF);
        let iW = this._getInternalFormat(CF);
        const eF = this._getRGBABufferInternalSizedFormat(AF);
        let EF = !1;
        iW === PF.RGB && (iW = PF.RGBA, EF = !0), this._bindTextureDirectly(PF.TEXTURE_CUBE_MAP, WF, !0), this._unpackFlipY(void 0 === uF || !!uF), WF.width % 4 !== 0 && PF.pixelStorei(PF.UNPACK_ALIGNMENT, 1);
        for (let dF = 0; dF < 6; dF++) {
          let CF = SF[dF];
          hF ? PF.compressedTexImage2D(PF.TEXTURE_CUBE_MAP_POSITIVE_X + dF, bW, this.getCaps().s3tc[hF], WF.width, WF.height, 0, CF) : (EF && (CF = FF(CF, WF.width, WF.height, AF)), PF.texImage2D(PF.TEXTURE_CUBE_MAP_POSITIVE_X + dF, bW, eF, WF.width, WF.height, 0, iW, RF, CF))
        }(!this.needPOTTextures || (0, dF.h)(WF.width) && (0, dF.h)(WF.height)) && WF.generateMipMaps && 0 === bW && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), WF.isReady = !0
      }, AF.ThinEngine.prototype.createRawCubeTextureFromUrl = function(WF, SF, CF, AF, uF, hF, bW, dF) {
        let PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          RF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          iW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          eF = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const EF = this._gl,
          QF = this.createRawCubeTexture(null, CF, AF, uF, !hF, eF, iW, null);
        SF?.addPendingData(QF), QF.url = WF, QF.isReady = !1, this._internalTexturesCache.push(QF);
        const rW = (FF, WF) => {
            SF?.removePendingData(QF), RF && RF(FF ? FF.status + " " + FF.statusText : "Failed to parse texture data", WF)
          },
          gW = async WF => {
            if (!QF._hardwareTexture) return;
            const CF = bW(WF);
            if (!CF) return;
            const hF = CF instanceof Promise ? await CF : CF,
              RF = QF.width;
            if (dF) {
              const WF = this._getWebGLTextureType(uF);
              let SF = this._getInternalFormat(AF);
              const CF = this._getRGBABufferInternalSizedFormat(uF);
              let bW = !1;
              SF === EF.RGB && (SF = EF.RGBA, bW = !0), this._bindTextureDirectly(EF.TEXTURE_CUBE_MAP, QF, !0), this._unpackFlipY(!1);
              const PF = dF(hF);
              for (let AF = 0; AF < PF.length; AF++) {
                const hF = RF >> AF;
                for (let dF = 0; dF < 6; dF++) {
                  let RF = PF[AF][dF];
                  bW && (RF = FF(RF, hF, hF, uF)), EF.texImage2D(dF, AF, CF, hF, hF, 0, SF, WF, RF)
                }
              }
              this._bindTextureDirectly(EF.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(QF, hF, AF, uF, eF);
            QF.isReady = !0, SF?.removePendingData(QF), QF.onLoadedObservable.notifyObservers(QF), QF.onLoadedObservable.clear(), PF && PF()
          };
        return this._loadFile(WF, (FF => {
          gW(FF).catch((FF => {
            rW(void 0, FF)
          }))
        }), void 0, SF?.offlineProvider, !0, rW), QF
      }, AF.ThinEngine.prototype.createRawTexture2DArray = WF(!1), AF.ThinEngine.prototype.createRawTexture3D = WF(!0), AF.ThinEngine.prototype.updateRawTexture2DArray = SF(!1), AF.ThinEngine.prototype.updateRawTexture3D = SF(!0))
    }();
    var RF = SF(37851);
    let iW = !1;
    iW || (iW = !0, AF.ThinEngine.prototype._readTexturePixelsSync = function(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        PF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const iW = this._gl;
      if (!iW) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const FF = iW.createFramebuffer();
        if (!FF) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = FF
      }
      iW.bindFramebuffer(iW.FRAMEBUFFER, this._dummyFramebuffer), CF > -1 && (FF.is2DArray || FF.is3D) ? iW.framebufferTextureLayer(iW.FRAMEBUFFER, iW.COLOR_ATTACHMENT0, FF._hardwareTexture?.underlyingResource, AF, CF) : CF > -1 ? iW.framebufferTexture2D(iW.FRAMEBUFFER, iW.COLOR_ATTACHMENT0, iW.TEXTURE_CUBE_MAP_POSITIVE_X + CF, FF._hardwareTexture?.underlyingResource, AF) : iW.framebufferTexture2D(iW.FRAMEBUFFER, iW.COLOR_ATTACHMENT0, iW.TEXTURE_2D, FF._hardwareTexture?.underlyingResource, AF);
      let eF = void 0 !== FF.type ? this._getWebGLTextureType(FF.type) : iW.UNSIGNED_BYTE;
      return bW ? uF || (uF = (0, RF.l)(FF.type, 4 * WF * SF)) : eF === iW.UNSIGNED_BYTE ? (uF || (uF = new Uint8Array(4 * WF * SF)), eF = iW.UNSIGNED_BYTE) : (uF || (uF = new Float32Array(4 * WF * SF)), eF = iW.FLOAT), hF && this.flushFramebuffer(), iW.readPixels(dF, PF, WF, SF, iW.RGBA, eF, uF), iW.bindFramebuffer(iW.FRAMEBUFFER, this._currentFramebuffer), uF
    }, AF.ThinEngine.prototype._readTexturePixels = function(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        PF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF))
    }), (0, SF(37935).c)();
    let eF = !1;
    eF || (eF = !0, AF.ThinEngine.prototype._createDepthStencilCubeTexture = function(FF, WF) {
      const SF = new hF.b(this, 12);
      if (SF.isCube = !0, 1 === this.Im) return bW.b.Error("Depth cube texture is not supported by WebGL 1."), SF;
      const CF = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...WF
        },
        AF = this._gl;
      this._bindTextureDirectly(AF.TEXTURE_CUBE_MAP, SF, !0), this._setupDepthStencilTexture(SF, FF, CF.bilinearFiltering, CF.comparisonFunction);
      for (let uF = 0; uF < 6; uF++) CF.generateStencil ? AF.texImage2D(AF.TEXTURE_CUBE_MAP_POSITIVE_X + uF, 0, AF.DEPTH24_STENCIL8, FF, FF, 0, AF.DEPTH_STENCIL, AF.UNSIGNED_INT_24_8, null) : AF.texImage2D(AF.TEXTURE_CUBE_MAP_POSITIVE_X + uF, 0, AF.DEPTH_COMPONENT24, FF, FF, 0, AF.DEPTH_COMPONENT, AF.UNSIGNED_INT, null);
      return this._bindTextureDirectly(AF.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(SF), SF
    }, AF.ThinEngine.prototype._setCubeMapTextureParams = function(FF, WF, SF) {
      const CF = this._gl;
      CF.texParameteri(CF.TEXTURE_CUBE_MAP, CF.TEXTURE_MAG_FILTER, CF.LINEAR), CF.texParameteri(CF.TEXTURE_CUBE_MAP, CF.TEXTURE_MIN_FILTER, WF ? CF.LINEAR_MIPMAP_LINEAR : CF.LINEAR), CF.texParameteri(CF.TEXTURE_CUBE_MAP, CF.TEXTURE_WRAP_S, CF.CLAMP_TO_EDGE), CF.texParameteri(CF.TEXTURE_CUBE_MAP, CF.TEXTURE_WRAP_T, CF.CLAMP_TO_EDGE), FF.samplingMode = WF ? 3 : 2, WF && this.getCaps().textureMaxLevel && void 0 !== SF && SF > 0 && (CF.texParameteri(CF.TEXTURE_CUBE_MAP, CF.TEXTURE_MAX_LEVEL, SF), FF._maxLodLevel = SF), this._bindTextureDirectly(CF.TEXTURE_CUBE_MAP, null)
    }, AF.ThinEngine.prototype.createCubeTexture = function(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hF = arguments.length > 6 ? arguments[6] : void 0,
        PF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        RF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        iW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        eF = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        EF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        QF = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        rW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const gW = this._gl;
      return this.createCubeTextureBase(FF, WF, SF, !!CF, AF, uF, hF, PF, RF, iW, eF, EF, (FF => this._bindTextureDirectly(gW.TEXTURE_CUBE_MAP, FF, !0)), ((FF, WF) => {
        const SF = this.needPOTTextures ? (0, dF.e)(WF[0].width, this._caps.maxCubemapTextureSize) : WF[0].width,
          uF = SF,
          PF = [gW.TEXTURE_CUBE_MAP_POSITIVE_X, gW.TEXTURE_CUBE_MAP_POSITIVE_Y, gW.TEXTURE_CUBE_MAP_POSITIVE_Z, gW.TEXTURE_CUBE_MAP_NEGATIVE_X, gW.TEXTURE_CUBE_MAP_NEGATIVE_Y, gW.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(gW.TEXTURE_CUBE_MAP, FF, !0), this._unpackFlipY(!1);
        const RF = hF ? this._getInternalFormat(hF, FF._useSRGBBuffer) : FF._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : gW.RGBA;
        let iW = hF ? this._getInternalFormat(hF) : gW.RGBA;
        FF._useSRGBBuffer && 1 === this.Im && (iW = RF);
        for (let CF = 0; CF < PF.length; CF++)
          if (WF[CF].width !== SF || WF[CF].height !== uF) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void bW.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = SF, this._workingCanvas.height = uF, this._workingContext.drawImage(WF[CF], 0, 0, WF[CF].width, WF[CF].height, 0, 0, SF, uF), gW.texImage2D(PF[CF], 0, RF, iW, gW.UNSIGNED_BYTE, this._workingCanvas)
          } else gW.texImage2D(PF[CF], 0, RF, iW, gW.UNSIGNED_BYTE, WF[CF]);
        CF || gW.generateMipmap(gW.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(FF, !CF), FF.width = SF, FF.height = uF, FF.isReady = !0, hF && (FF.format = hF), FF.onLoadedObservable.notifyObservers(FF), FF.onLoadedObservable.clear(), AF && AF()
      }), !!QF, rW)
    }, AF.ThinEngine.prototype.generateMipMapsForCubemap = function(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (FF.generateMipMaps) {
        const SF = this._gl;
        this._bindTextureDirectly(SF.TEXTURE_CUBE_MAP, FF, !0), SF.generateMipmap(SF.TEXTURE_CUBE_MAP), WF && this._bindTextureDirectly(SF.TEXTURE_CUBE_MAP, null)
      }
    });
    SF(37944);
    let EF = !1;
    EF || (EF = !0, AF.ThinEngine.prototype.setDepthStencilTexture = function(FF, WF, SF, CF) {
      void 0 !== FF && (WF && (this._boundUniforms[FF] = WF), SF && SF.depthStencilTexture ? this._setTexture(FF, SF, !1, !0, CF) : this._setTexture(FF, null, void 0, void 0, CF))
    });
    let QF = !1;
    QF || (QF = !0, AF.ThinEngine.prototype.createRenderTargetCubeTexture = function(FF, WF) {
      const SF = this._createHardwareRenderTargetWrapper(!1, !0, FF),
        CF = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...WF
        };
      CF.generateStencilBuffer = CF.generateDepthBuffer && CF.generateStencilBuffer, (1 !== CF.type || this._caps.textureFloatLinearFiltering) && (2 !== CF.type || this._caps.textureHalfFloatLinearFiltering) || (CF.samplingMode = 1);
      const AF = this._gl,
        uF = new hF.b(this, 5);
      this._bindTextureDirectly(AF.TEXTURE_CUBE_MAP, uF, !0);
      const dF = this._getSamplingParameters(CF.samplingMode, CF.generateMipMaps);
      1 !== CF.type || this._caps.textureFloat || (CF.type = 0, bW.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), AF.texParameteri(AF.TEXTURE_CUBE_MAP, AF.TEXTURE_MAG_FILTER, dF.mag), AF.texParameteri(AF.TEXTURE_CUBE_MAP, AF.TEXTURE_MIN_FILTER, dF.min), AF.texParameteri(AF.TEXTURE_CUBE_MAP, AF.TEXTURE_WRAP_S, AF.CLAMP_TO_EDGE), AF.texParameteri(AF.TEXTURE_CUBE_MAP, AF.TEXTURE_WRAP_T, AF.CLAMP_TO_EDGE);
      for (let hF = 0; hF < 6; hF++) AF.texImage2D(AF.TEXTURE_CUBE_MAP_POSITIVE_X + hF, 0, this._getRGBABufferInternalSizedFormat(CF.type, CF.format), FF, FF, 0, this._getInternalFormat(CF.format), this._getWebGLTextureType(CF.type), null);
      const PF = AF.createFramebuffer();
      return this._bindUnboundFramebuffer(PF), SF._depthStencilBuffer = this._setupFramebufferDepthAttachments(CF.generateStencilBuffer, CF.generateDepthBuffer, FF, FF), CF.generateMipMaps && AF.generateMipmap(AF.TEXTURE_CUBE_MAP), this._bindTextureDirectly(AF.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), SF._framebuffer = PF, SF._generateDepthBuffer = CF.generateDepthBuffer, SF._generateStencilBuffer = CF.generateStencilBuffer, uF.width = FF, uF.height = FF, uF.isReady = !0, uF.isCube = !0, uF.samples = 1, uF.generateMipMaps = CF.generateMipMaps, uF.samplingMode = CF.samplingMode, uF.type = CF.type, uF.format = CF.format, this._internalTexturesCache.push(uF), SF.setTextures(uF), SF
    });
    var rW = SF(37960),
      gW = SF(37963);
    let tW = !1;
    tW || (tW = !0, AF.ThinEngine.prototype.createPrefilteredCubeTexture = function(FF, WF, CF, AF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        dF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PF = arguments.length > 6 ? arguments[6] : void 0,
        RF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        iW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        eF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(FF, WF, null, !1, (async FF => {
        if (!FF) return void(uF && uF(null));
        const dF = FF.texture;
        if (iW ? FF.info.sphericalPolynomial && (dF._sphericalPolynomial = FF.info.sphericalPolynomial) : dF._sphericalPolynomial = dF._sphericalPolynomial ?? new rW.g, dF._source = 9, this.getCaps().textureLOD) return void(uF && uF(dF));
        const PF = this._gl,
          RF = FF.width;
        if (!RF) return;
        const {
          DDSTools: eF
        } = await SF.e(276).then((() => SF(39616))), EF = [];
        for (let SF = 0; SF < 3; SF++) {
          const uF = 1 - SF / 2,
            iW = AF,
            QF = Math.log2(RF) * CF + AF,
            rW = iW + (QF - iW) * uF,
            tW = Math.round(Math.min(Math.max(rW, 0), QF)),
            TF = new hF.b(this, 2);
          if (TF.type = dF.type, TF.format = dF.format, TF.width = Math.pow(2, Math.max(Math.log2(RF) - tW, 0)), TF.height = TF.width, TF.isCube = !0, TF._cachedWrapU = 0, TF._cachedWrapV = 0, this._bindTextureDirectly(PF.TEXTURE_CUBE_MAP, TF, !0), TF.samplingMode = 2, PF.texParameteri(PF.TEXTURE_CUBE_MAP, PF.TEXTURE_MAG_FILTER, PF.LINEAR), PF.texParameteri(PF.TEXTURE_CUBE_MAP, PF.TEXTURE_MIN_FILTER, PF.LINEAR), PF.texParameteri(PF.TEXTURE_CUBE_MAP, PF.TEXTURE_WRAP_S, PF.CLAMP_TO_EDGE), PF.texParameteri(PF.TEXTURE_CUBE_MAP, PF.TEXTURE_WRAP_T, PF.CLAMP_TO_EDGE), FF.isDDS) {
            const WF = FF.info,
              SF = FF.data;
            this._unpackFlipY(WF.isCompressed), eF.UploadDDSLevels(this, TF, SF, WF, !0, 6, tW)
          } else bW.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(PF.TEXTURE_CUBE_MAP, null);
          const aW = new gW.d(WF);
          aW._isCube = !0, aW._texture = TF, TF.isReady = !0, EF.push(aW)
        }
        dF._lodTextureHigh = EF[2], dF._lodTextureMid = EF[1], dF._lodTextureLow = EF[0], uF && uF(dF)
      }), dF, PF, RF, iW, CF, AF, null, void 0, !1, eF)
    });
    var TF = SF(37888);
    let aW = !1;
    aW || (aW = !0, AF.ThinEngine.prototype.createUniformBuffer = function(FF, WF) {
      const SF = this._gl.createBuffer();
      if (!SF) throw new Error("Unable to create uniform buffer");
      const CF = new TF.e(SF);
      return this.bindUniformBuffer(CF), FF instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, FF, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(FF), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), CF.references = 1, CF
    }, AF.ThinEngine.prototype.createDynamicUniformBuffer = function(FF, WF) {
      const SF = this._gl.createBuffer();
      if (!SF) throw new Error("Unable to create dynamic uniform buffer");
      const CF = new TF.e(SF);
      return this.bindUniformBuffer(CF), FF instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, FF, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(FF), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), CF.references = 1, CF
    }, AF.ThinEngine.prototype.updateUniformBuffer = function(FF, WF, SF, CF) {
      this.bindUniformBuffer(FF), void 0 === SF && (SF = 0), void 0 === CF ? WF instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, SF, WF) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, SF, new Float32Array(WF)) : WF instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, WF.subarray(SF, SF + CF)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(WF).subarray(SF, SF + CF)), this.bindUniformBuffer(null)
    }, AF.ThinEngine.prototype.bindUniformBuffer = function(FF) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, FF ? FF.underlyingResource : null)
    }, AF.ThinEngine.prototype.bindUniformBufferBase = function(FF, WF, SF) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, WF, FF ? FF.underlyingResource : null)
    }, AF.ThinEngine.prototype.bindUniformBlock = function(FF, WF, SF) {
      const CF = FF.program,
        AF = this._gl.getUniformBlockIndex(CF, WF);
      4294967295 !== AF && this._gl.uniformBlockBinding(CF, AF, SF)
    });
    var kW = SF(37835),
      qW = SF(37867);
    let VF = !1;
    VF || (VF = !0, qW.e.prototype.displayLoadingUI = function() {
      if (!(0, kW.m)()) return;
      const FF = this.loadingScreen;
      FF && FF.displayLoadingUI()
    }, qW.e.prototype.hideLoadingUI = function() {
      if (!(0, kW.m)()) return;
      const FF = this._loadingScreen;
      FF && FF.hideLoadingUI()
    }, Object.defineProperty(qW.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = qW.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(FF) {
        this._loadingScreen = FF
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(qW.e.prototype, "loadingUIText", {
      set: function(FF) {
        this.loadingScreen.loadingUIText = FF
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(qW.e.prototype, "loadingUIBackgroundColor", {
      set: function(FF) {
        this.loadingScreen.loadingUIBackgroundColor = FF
      },
      enumerable: !0,
      configurable: !0
    })), (0, SF(37916).e)();
    let NF = !1;
    NF || (NF = !0, qW.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, qW.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, qW.e.prototype.setDepthFunction = function(FF) {
      this._depthCullingState.depthFunc = FF
    }, qW.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, qW.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, qW.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, qW.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, qW.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, qW.e.prototype.setDepthWrite = function(FF) {
      this._depthCullingState.depthMask = FF
    }, qW.e.prototype.setAlphaConstants = function(FF, WF, SF, CF) {
      this._alphaState.setAlphaBlendConstants(FF, WF, SF, CF)
    }, qW.e.prototype.getAlphaMode = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[FF]
    }, qW.e.prototype.getAlphaEquation = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[FF]
    });
    let DF = !1;
    DF || (DF = !0, qW.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, qW.e.prototype.setStencilBuffer = function(FF) {
      this._stencilState.stencilTest = FF
    }, qW.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, qW.e.prototype.setStencilMask = function(FF) {
      this._stencilState.stencilMask = FF
    }, qW.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, qW.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, qW.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, qW.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, qW.e.prototype.setStencilFunction = function(FF) {
      this._stencilState.stencilFunc = FF
    }, qW.e.prototype.setStencilBackFunction = function(FF) {
      this._stencilState.stencilBackFunc = FF
    }, qW.e.prototype.setStencilFunctionReference = function(FF) {
      this._stencilState.stencilFuncRef = FF
    }, qW.e.prototype.setStencilFunctionMask = function(FF) {
      this._stencilState.stencilFuncMask = FF
    }, qW.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, qW.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, qW.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, qW.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, qW.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, qW.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, qW.e.prototype.setStencilOperationFail = function(FF) {
      this._stencilState.stencilOpStencilFail = FF
    }, qW.e.prototype.setStencilBackOperationFail = function(FF) {
      this._stencilState.stencilBackOpStencilFail = FF
    }, qW.e.prototype.setStencilOperationDepthFail = function(FF) {
      this._stencilState.stencilOpDepthFail = FF
    }, qW.e.prototype.setStencilBackOperationDepthFail = function(FF) {
      this._stencilState.stencilBackOpDepthFail = FF
    }, qW.e.prototype.setStencilOperationPass = function(FF) {
      this._stencilState.stencilOpStencilDepthPass = FF
    }, qW.e.prototype.setStencilBackOperationPass = function(FF) {
      this._stencilState.stencilBackOpStencilDepthPass = FF
    }, qW.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, qW.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    SF(38004);
    let LF = !1;
    LF || (LF = !0, qW.e.prototype.createDepthStencilTexture = function(FF, WF, SF) {
      if (WF.isCube) {
        const SF = FF.width || FF;
        return this._createDepthStencilCubeTexture(SF, WF)
      }
      return this._createDepthStencilTexture(FF, WF, SF)
    });
    SF(38006), SF(38043);
    let mW = !1;
    mW || (mW = !0, AF.ThinEngine.prototype.enableScissor = function(FF, WF, SF, CF) {
      const AF = this._gl;
      AF.enable(AF.SCISSOR_TEST), AF.scissor(FF, WF, SF, CF)
    }, AF.ThinEngine.prototype.disableScissor = function() {
      const FF = this._gl;
      FF.disable(FF.SCISSOR_TEST)
    })
  },
  37790: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => qW
    });
    var CF = SF(37796),
      AF = SF(35639),
      uF = SF(37809),
      hF = SF(37873);
    class bW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new dF(FF)
      }
      sampleFrame() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const WF = FF - this._lastFrameTimeMs;
            this._rollingFrameTime.add(WF)
          }
          this._lastFrameTimeMs = FF
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
        const FF = this._rollingFrameTime.history(0);
        return 0 === FF ? 0 : 1e3 / FF
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
    class dF {
      constructor(FF) {
        this._samples = new Array(FF), this.reset()
      }
      add(FF) {
        let WF;
        if (this.isSaturated()) {
          const FF = this._samples[this._pos];
          WF = FF - this.average, this.average -= WF / (this._sampleCount - 1), this._m2 -= WF * (FF - this.average)
        } else this._sampleCount++;
        WF = FF - this.average, this.average += WF / this._sampleCount, this._m2 += WF * (FF - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = FF, this._pos++, this._pos %= this._samples.length
      }
      history(FF) {
        if (FF >= this._sampleCount || FF >= this._samples.length) return 0;
        const WF = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(WF - FF)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(FF) {
        const WF = this._samples.length;
        return (FF % WF + WF) % WF
      }
    }
    var PF = SF(37888),
      RF = SF(37076),
      iW = SF(37905),
      eF = SF(37867),
      EF = SF(37835);

    function QF(FF) {
      const WF = function(FF) {
        if (!(0, EF.h)() || !document.body) return null;
        const WF = document.createElement("span");
        WF.textContent = "Hg", WF.style.font = FF;
        const SF = document.createElement("div");
        SF.style.display = "inline-block", SF.style.width = "1px", SF.style.height = "0px", SF.style.verticalAlign = "bottom";
        const CF = document.createElement("div");
        let AF, uF;
        CF.style.whiteSpace = "nowrap", CF.appendChild(WF), CF.appendChild(SF), document.body.appendChild(CF);
        try {
          uF = SF.getBoundingClientRect().top - WF.getBoundingClientRect().top, SF.style.verticalAlign = "baseline", AF = SF.getBoundingClientRect().top - WF.getBoundingClientRect().top
        } finally {
          document.body.removeChild(CF)
        }
        const hF = {
          ascent: AF,
          height: uF,
          descent: uF - AF
        };
        return rW(hF) ? hF : null
      }(FF);
      if (WF) return WF;
      const SF = function(FF) {
        let WF = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? WF = new OffscreenCanvas(64, 64) : (0, EF.h)() && "function" === typeof document.createElement && (WF = document.createElement("canvas"), WF.width = 64, WF.height = 64);
          const SF = WF?.getContext("2d");
          if (!SF) return null;
          SF.font = FF;
          const CF = SF.measureText("Hg"),
            AF = Number(CF.actualBoundingBoxAscent ?? CF.fontBoundingBoxAscent),
            uF = Number(CF.actualBoundingBoxDescent ?? CF.fontBoundingBoxDescent),
            hF = {
              ascent: AF,
              height: AF + uF,
              descent: uF
            };
          return rW(hF) ? hF : null
        } catch {
          return null
        } finally {
          const FF = WF;
          "function" === typeof FF?.dispose && FF.dispose()
        }
      }(FF);
      return SF || function(FF) {
        const WF = Math.max(1, function(FF) {
            const WF = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(FF || ""));
            return WF ? Number(WF[1]) : 16
          }(FF)),
          SF = .8 * WF,
          CF = .2 * WF;
        return {
          ascent: SF,
          height: SF + CF,
          descent: CF
        }
      }(FF)
    }

    function rW(FF) {
      return Number.isFinite(FF.ascent) && Number.isFinite(FF.height) && Number.isFinite(FF.descent) && FF.height > 0
    }

    function gW(FF) {
      if (FF.requestPointerLock) {
        const WF = FF.requestPointerLock();
        WF instanceof Promise ? WF.then((() => {
          FF.focus()
        })).catch((() => {})) : FF.focus()
      }
    }
    var tW = SF(37911),
      TF = SF(37860),
      aW = SF(37916),
      kW = SF(37919);
    class qW extends uF.ThinEngine {
      static get NpmPackage() {
        return eF.e.NpmPackage
      }
      static get Version() {
        return eF.e.Version
      }
      static get Instances() {
        return AF.e.Instances
      }
      static get LastCreatedEngine() {
        return AF.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return AF.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(FF) {
        return eF.e.DefaultLoadingScreenFactory(FF)
      }
      get _supportsHardwareTextureRescaling() {
        return !!qW._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, aW.e)(), (0, kW.b)(), super(FF, WF, SF, CF), this._performanceMonitor = new bW, this._drawCalls = new tW.b, FF && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(FF) {
        super._sharedInit(FF),
          function(FF, WF, SF) {
            FF._onCanvasFocus = () => {
              FF.onCanvasFocusObservable.notifyObservers(FF)
            }, FF._onCanvasBlur = () => {
              FF.onCanvasBlurObservable.notifyObservers(FF)
            }, FF._onCanvasContextMenu = WF => {
              FF.disableContextMenu && WF.preventDefault()
            }, WF.addEventListener("focus", FF._onCanvasFocus), WF.addEventListener("blur", FF._onCanvasBlur), WF.addEventListener("contextmenu", FF._onCanvasContextMenu), FF._onBlur = () => {
              FF.disablePerformanceMonitorInBackground && FF.performanceMonitor.disable(), FF._windowIsBackground = !0
            }, FF._onFocus = () => {
              FF.disablePerformanceMonitorInBackground && FF.performanceMonitor.enable(), FF._windowIsBackground = !1
            }, FF._onCanvasPointerOut = SF => {
              document.elementFromPoint(SF.clientX, SF.clientY) !== WF && FF.onCanvasPointerOutObservable.notifyObservers(SF)
            };
            const CF = FF.getHostWindow();
            CF && "function" === typeof CF.addEventListener && (CF.addEventListener("blur", FF._onBlur), CF.addEventListener("focus", FF._onFocus)), WF.addEventListener("pointerout", FF._onCanvasPointerOut), SF.doNotHandleTouchAction || function(FF) {
              FF && FF.setAttribute && (FF.setAttribute("touch-action", "none"), FF.style.touchAction = "none", FF.style.webkitTapHighlightColor = "transparent")
            }(WF), !eF.e.audioEngine && SF.audioEngine && eF.e.AudioEngineFactory && (eF.e.audioEngine = eF.e.AudioEngineFactory(FF.getRenderingCanvas(), FF.getAudioContext(), FF.getAudioDestination())), (0, EF.h)() && (FF._onFullscreenChange = () => {
              FF.isFullscreen = !!document.fullscreenElement, FF.isFullscreen && FF._pointerLockRequested && WF && gW(WF)
            }, document.addEventListener("fullscreenchange", FF._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", FF._onFullscreenChange, !1), FF._onPointerLockChange = () => {
              FF.isPointerLock = document.pointerLockElement === WF
            }, document.addEventListener("pointerlockchange", FF._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", FF._onPointerLockChange, !1)), FF.enableOfflineSupport = void 0 !== eF.e.OfflineProviderFactory, FF._deterministicLockstep = !!SF.deterministicLockstep, FF._lockstepMaxSteps = SF.lockstepMaxSteps || 0, FF._timeStep = SF.timeStep || 1 / 60
          }(this, FF, this._creationOptions)
      }
      resizeImageBitmap(FF, WF, SF) {
        return function(FF, WF, SF, CF) {
          const AF = FF.createCanvas(SF, CF).getContext("2d");
          if (!AF) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return AF.drawImage(WF, 0, 0), AF.getImageData(0, 0, SF, CF).data
        }(this, FF, WF, SF)
      }
      async _createImageBitmapFromSource(FF, WF) {
        return await async function(FF, WF, SF) {
          return await new Promise(((CF, AF) => {
            const uF = new Image;
            uF.onload = () => {
              uF.decode().then((() => {
                FF.createImageBitmap(uF, SF).then((FF => {
                  CF(FF)
                }))
              }))
            }, uF.onerror = () => {
              AF(`Error loading image ${uF.src}`)
            }, uF.src = WF
          }))
        }(this, FF, WF)
      }
      switchFullscreen(FF) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(FF)
      }
      enterFullscreen(FF) {
        this.isFullscreen || (this._pointerLockRequested = FF, this._renderingCanvas && function(FF) {
          const WF = FF.requestFullscreen || FF.webkitRequestFullscreen;
          WF && WF.call(FF)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const FF = document;
          document.exitFullscreen ? document.exitFullscreen() : FF.webkitCancelFullScreen && FF.webkitCancelFullScreen()
        }()
      }
      setDitheringState(FF) {
        FF ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(FF) {
        FF ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(FF, WF, SF, CF) {
        const AF = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(FF, WF, SF, CF), AF
      }
      scissorClear(FF, WF, SF, CF, AF) {
        this.enableScissor(FF, WF, SF, CF), this.clear(AF, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(FF) {
        const WF = this._gl.getAttachedShaders(FF);
        return WF ? this._gl.getShaderSource(WF[0]) : null
      }
      getFragmentShaderSource(FF) {
        const WF = this._gl.getAttachedShaders(FF);
        return WF ? this._gl.getShaderSource(WF[1]) : null
      }
      set framebufferDimensionsObject(FF) {
        this._framebufferDimensionsObject = FF, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const FF of this.scenes) FF.resetCachedMaterial(), FF._rebuildGeometries();
        for (const FF of this._virtualScenes) FF.resetCachedMaterial(), FF._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(FF) {
        return QF(FF)
      }
      enterPointerlock() {
        this._renderingCanvas && gW(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      HL() {
        this._measureFps(), super.HL()
      }
      _deletePipelineContext(FF) {
        const WF = FF;
        WF && WF.program && WF.transformFeedback && (this.deleteTransformFeedback(WF.transformFeedback), WF.transformFeedback = null), super._deletePipelineContext(FF)
      }
      createShaderProgram(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        AF = AF || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const hF = super.createShaderProgram(FF, WF, SF, CF, AF, uF);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), hF
      }
      _createShaderProgram(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const uF = CF.createProgram();
        if (FF.program = uF, !uF) throw new Error("Unable to create program");
        if (CF.attachShader(uF, WF), CF.attachShader(uF, SF), this.Im > 1 && AF) {
          const WF = this.createTransformFeedback();
          this.bindTransformFeedback(WF), this.setTranformFeedbackVaryings(uF, AF), FF.transformFeedback = WF
        }
        return CF.linkProgram(uF), this.Im > 1 && AF && this.bindTransformFeedback(null), FF.context = CF, FF.vertexShader = WF, FF.fragmentShader = SF, FF.isParallelCompiled || this._finalizePipelineContext(FF), uF
      }
      _releaseTexture(FF) {
        super._releaseTexture(FF)
      }
      _releaseRenderTargetWrapper(FF) {
        super._releaseRenderTargetWrapper(FF);
        for (const WF of this.scenes) {
          for (const SF of WF.postProcesses) SF._outputTexture === FF && (SF._outputTexture = null);
          for (const SF of WF.cameras)
            for (const WF of SF._postProcesses) WF && WF._outputTexture === FF && (WF._outputTexture = null)
        }
      }
      _rescaleTexture(FF, WF, SF, CF, AF) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const uF = this.createRenderTargetTexture({
          width: WF.width,
          height: WF.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && qW._RescalePostProcessFactory && (this._rescalePostProcess = qW._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const hF = () => {
              this._rescalePostProcess.onApply = function(WF) {
                WF._bindTexture("textureSampler", FF)
              };
              let hF = SF;
              hF || (hF = this.scenes[this.scenes.length - 1]), hF.postProcessManager.directRender([this._rescalePostProcess], uF, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, WF, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, CF, 0, 0, WF.width, WF.height, 0), this.unBindFramebuffer(uF), uF.dispose(), AF && AF()
            },
            bW = this._rescalePostProcess.getEffect();
          bW ? bW.executeWhenCompiled(hF) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((FF => {
            FF.executeWhenCompiled(hF)
          }))
        }
      }
      wrapWebGLTexture(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const hF = new iW.d(FF, this._gl),
          bW = new CF.b(this, 15, !0);
        return bW._hardwareTexture = hF, bW.baseWidth = AF, bW.baseHeight = uF, bW.width = AF, bW.height = uF, bW.isReady = !0, bW.useMipMaps = WF, this.updateTextureSamplingMode(SF, bW), bW
      }
      updateWrappedWebGLTexture(FF, WF) {
        if (15 !== FF.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const CF of this._renderTargetWrapperCache)
          if (CF.textures?.includes(FF)) {
            if (CF.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (CF._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } FF._hardwareTexture = new iW.d(WF, this._gl), FF.isReady = !0, FF._cachedCoordinatesMode = null, FF._cachedWrapU = null, FF._cachedWrapV = null, FF._cachedWrapR = null, FF._cachedAnisotropicFilteringLevel = null;
        for (const CF in this._boundTexturesCache) this._boundTexturesCache[CF] === FF && (this._boundTexturesCache[CF] = null);
        this.updateTextureSamplingMode(FF.samplingMode, FF);
        const SF = this._gl;
        for (const CF of this._renderTargetWrapperCache) {
          if (CF.texture !== FF) continue;
          const AF = CF,
            uF = CF.samples,
            hF = uF > 1;
          AF._framebuffer && SF.deleteFramebuffer(AF._framebuffer), !hF && AF._depthStencilBuffer && (SF.deleteRenderbuffer(AF._depthStencilBuffer), AF._depthStencilBuffer = null);
          const bW = this._currentFramebuffer,
            dF = SF.createFramebuffer();
          this._bindUnboundFramebuffer(dF), SF.framebufferTexture2D(SF.FRAMEBUFFER, SF.COLOR_ATTACHMENT0, SF.TEXTURE_2D, WF, 0), hF || (AF._depthStencilBuffer = this._setupFramebufferDepthAttachments(CF._generateStencilBuffer, CF._generateDepthBuffer, CF.width, CF.height)), this._bindUnboundFramebuffer(bW), AF._framebuffer = dF, hF && (CF._samples = 1, this.updateRenderTargetTextureSampleCount(AF, uF))
        }
      }
      _uploadImageToTexture(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AF = this._gl,
          uF = this._getWebGLTextureType(FF.type),
          hF = this._getInternalFormat(FF.format),
          bW = this._getRGBABufferInternalSizedFormat(FF.type, hF),
          dF = FF.isCube ? AF.TEXTURE_CUBE_MAP : AF.TEXTURE_2D;
        this._bindTextureDirectly(dF, FF, !0), this._unpackFlipY(FF.invertY);
        let PF = AF.TEXTURE_2D;
        FF.isCube && (PF = AF.TEXTURE_CUBE_MAP_POSITIVE_X + SF), AF.texImage2D(PF, CF, bW, hF, uF, WF), this._bindTextureDirectly(dF, null, !0)
      }
      updateTextureComparisonFunction(FF, WF) {
        if (1 === this.Im) return void RF.b.Error("WebGL 1 does not support texture comparison.");
        const SF = this._gl;
        FF.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, FF, !0), 0 === WF ? (SF.texParameteri(SF.TEXTURE_CUBE_MAP, SF.TEXTURE_COMPARE_FUNC, 515), SF.texParameteri(SF.TEXTURE_CUBE_MAP, SF.TEXTURE_COMPARE_MODE, SF.NONE)) : (SF.texParameteri(SF.TEXTURE_CUBE_MAP, SF.TEXTURE_COMPARE_FUNC, WF), SF.texParameteri(SF.TEXTURE_CUBE_MAP, SF.TEXTURE_COMPARE_MODE, SF.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, FF, !0), 0 === WF ? (SF.texParameteri(SF.TEXTURE_2D, SF.TEXTURE_COMPARE_FUNC, 515), SF.texParameteri(SF.TEXTURE_2D, SF.TEXTURE_COMPARE_MODE, SF.NONE)) : (SF.texParameteri(SF.TEXTURE_2D, SF.TEXTURE_COMPARE_FUNC, WF), SF.texParameteri(SF.TEXTURE_2D, SF.TEXTURE_COMPARE_MODE, SF.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), FF._comparisonFunction = WF
      }
      createInstancesBuffer(FF) {
        const WF = this._gl.createBuffer();
        if (!WF) throw new Error("Unable to create instance buffer");
        const SF = new PF.e(WF);
        return SF.ZF = FF, this.bindArrayBuffer(SF), this._gl.bufferData(this._gl.ARRAY_BUFFER, FF, this._gl.DYNAMIC_DRAW), SF.references = 1, SF
      }
      deleteInstancesBuffer(FF) {
        this._gl.deleteBuffer(FF)
      }
      async _clientWaitAsync(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const CF = this._gl;
        return await new Promise(((AF, uF) => {
          (0, TF.f)((() => {
            const SF = CF.clientWaitSync(FF, WF, 0);
            if (SF == CF.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return SF != CF.TIMEOUT_EXPIRED
          }), AF, uF, SF)
        }))
      }
      _readPixelsAsync(FF, WF, SF, CF, AF, uF, hF) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const bW = this._gl,
          dF = bW.createBuffer();
        bW.bindBuffer(bW.PIXEL_PACK_BUFFER, dF), bW.bufferData(bW.PIXEL_PACK_BUFFER, hF.byteLength, bW.STREAM_READ), bW.readPixels(FF, WF, SF, CF, AF, uF, 0), bW.bindBuffer(bW.PIXEL_PACK_BUFFER, null);
        const PF = bW.fenceSync(bW.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return PF ? (bW.flush(), this._clientWaitAsync(PF, 0, 10).then((() => (bW.deleteSync(PF), bW.bindBuffer(bW.PIXEL_PACK_BUFFER, dF), bW.getBufferSubData(bW.PIXEL_PACK_BUFFER, 0, hF), bW.bindBuffer(bW.PIXEL_PACK_BUFFER, null), bW.deleteBuffer(dF), hF)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(FF, WF) {
            1 === AF.e.Instances.length && eF.e.audioEngine && (eF.e.audioEngine.dispose(), eF.e.audioEngine = null);
            const SF = FF.getHostWindow();
            SF && "function" === typeof SF.removeEventListener && (SF.removeEventListener("blur", FF._onBlur), SF.removeEventListener("focus", FF._onFocus)), WF && (WF.removeEventListener("focus", FF._onCanvasFocus), WF.removeEventListener("blur", FF._onCanvasBlur), WF.removeEventListener("pointerout", FF._onCanvasPointerOut), WF.removeEventListener("contextmenu", FF._onCanvasContextMenu)), (0, EF.h)() && (document.removeEventListener("fullscreenchange", FF._onFullscreenChange), document.removeEventListener("mozfullscreenchange", FF._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", FF._onFullscreenChange), document.removeEventListener("msfullscreenchange", FF._onFullscreenChange), document.removeEventListener("pointerlockchange", FF._onPointerLockChange), document.removeEventListener("mspointerlockchange", FF._onPointerLockChange), document.removeEventListener("mozpointerlockchange", FF._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", FF._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    qW.ALPHA_DISABLE = 0, qW.ALPHA_ADD = 1, qW.ALPHA_COMBINE = 2, qW.ALPHA_SUBTRACT = 3, qW.ALPHA_MULTIPLY = 4, qW.ALPHA_MAXIMIZED = 5, qW.ALPHA_ONEONE = 6, qW.ALPHA_PREMULTIPLIED = 7, qW.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, qW.ALPHA_INTERPOLATE = 9, qW.ALPHA_SCREENMODE = 10, qW.DELAYLOADSTATE_NONE = 0, qW.DELAYLOADSTATE_LOADED = 1, qW.DELAYLOADSTATE_LOADING = 2, qW.DELAYLOADSTATE_NOTLOADED = 4, qW.NEVER = 512, qW.ALWAYS = 519, qW.LESS = 513, qW.EQUAL = 514, qW.LEQUAL = 515, qW.GREATER = 516, qW.GEQUAL = 518, qW.NOTEQUAL = 517, qW.KEEP = 7680, qW.REPLACE = 7681, qW.INCR = 7682, qW.DECR = 7683, qW.INVERT = 5386, qW.INCR_WRAP = 34055, qW.DECR_WRAP = 34056, qW.TEXTURE_CLAMP_ADDRESSMODE = 0, qW.TEXTURE_WRAP_ADDRESSMODE = 1, qW.TEXTURE_MIRROR_ADDRESSMODE = 2, qW.TEXTUREFORMAT_ALPHA = 0, qW.TEXTUREFORMAT_LUMINANCE = 1, qW.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, qW.TEXTUREFORMAT_RGB = 4, qW.TEXTUREFORMAT_RGBA = 5, qW.TEXTUREFORMAT_RED = 6, qW.TEXTUREFORMAT_R = 6, qW.TEXTUREFORMAT_R16_UNORM = 33322, qW.TEXTUREFORMAT_RG16_UNORM = 33324, qW.TEXTUREFORMAT_RGB16_UNORM = 32852, qW.TEXTUREFORMAT_RGBA16_UNORM = 32859, qW.TEXTUREFORMAT_R16_SNORM = 36760, qW.TEXTUREFORMAT_RG16_SNORM = 36761, qW.TEXTUREFORMAT_RGB16_SNORM = 36762, qW.TEXTUREFORMAT_RGBA16_SNORM = 36763, qW.TEXTUREFORMAT_RG = 7, qW.TEXTUREFORMAT_RED_INTEGER = 8, qW.TEXTUREFORMAT_R_INTEGER = 8, qW.TEXTUREFORMAT_RG_INTEGER = 9, qW.TEXTUREFORMAT_RGB_INTEGER = 10, qW.TEXTUREFORMAT_RGBA_INTEGER = 11, qW.TEXTURETYPE_UNSIGNED_BYTE = 0, qW.TEXTURETYPE_UNSIGNED_INT = 0, qW.TEXTURETYPE_FLOAT = 1, qW.TEXTURETYPE_HALF_FLOAT = 2, qW.TEXTURETYPE_BYTE = 3, qW.TEXTURETYPE_SHORT = 4, qW.TEXTURETYPE_UNSIGNED_SHORT = 5, qW.TEXTURETYPE_INT = 6, qW.TEXTURETYPE_UNSIGNED_INTEGER = 7, qW.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, qW.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, qW.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, qW.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, qW.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, qW.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, qW.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, qW.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, qW.TEXTURE_NEAREST_SAMPLINGMODE = 1, qW.TEXTURE_BILINEAR_SAMPLINGMODE = 2, qW.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, qW.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, qW.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, qW.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, qW.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, qW.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, qW.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, qW.TEXTURE_NEAREST_LINEAR = 7, qW.TEXTURE_NEAREST_NEAREST = 1, qW.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, qW.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, qW.TEXTURE_LINEAR_LINEAR = 2, qW.TEXTURE_LINEAR_NEAREST = 12, qW.TEXTURE_EXPLICIT_MODE = 0, qW.TEXTURE_SPHERICAL_MODE = 1, qW.TEXTURE_PLANAR_MODE = 2, qW.TEXTURE_CUBIC_MODE = 3, qW.TEXTURE_PROJECTION_MODE = 4, qW.TEXTURE_SKYBOX_MODE = 5, qW.TEXTURE_INVCUBIC_MODE = 6, qW.TEXTURE_EQUIRECTANGULAR_MODE = 7, qW.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, qW.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, qW.SCALEMODE_FLOOR = 1, qW.SCALEMODE_NEAREST = 2, qW.SCALEMODE_CEILING = 3
  },
  37953: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(37908);
    class AF {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(FF) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = FF, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, FF && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, CF.b)(FF.format))
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
      getBaseArrayLayer(FF) {
        if (!this._textures) return -1;
        const WF = this._textures[FF],
          SF = this._layerIndices?.[FF] ?? 0,
          CF = this._faceIndices?.[FF] ?? 0;
        return WF.isCube ? 6 * SF + CF : WF.is3D ? 0 : SF
      }
      get samples() {
        return this._samples
      }
      setSamples(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === FF && !SF) return FF;
        const CF = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, FF, WF) : this._engine.updateRenderTargetTextureSampleCount(this, FF);
        return this._samples = FF, CF
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(FF, WF, SF, CF, AF) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = FF, this._isCube = WF, this._size = SF, this._engine = CF, this._depthStencilTexture = null, this.label = AF
      }
      setTextures(FF) {
        Array.isArray(FF) ? this._textures = FF : this._textures = FF ? [FF] : null
      }
      setTexture(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[WF] !== FF && (this._textures[WF] && SF && this._textures[WF].dispose(), this._textures[WF] = FF)
      }
      setLayerAndFaceIndices(FF, WF) {
        this._layerIndices = FF, this._faceIndices = WF
      }
      setLayerAndFaceIndex() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== WF && WF >= 0 && (this._layerIndices[FF] = WF), void 0 !== SF && SF >= 0 && (this._faceIndices[FF] = SF)
      }
      createDepthStencilTexture() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = SF, this._depthStencilTextureLabel = uF, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: WF,
          comparisonFunction: FF,
          generateStencil: SF,
          isCube: this._isCube,
          samples: CF,
          depthTextureFormat: AF,
          label: uF
        }, this), this._depthStencilTexture
      }
      _shareDepth(FF) {
        this.shareDepth(FF)
      }
      shareDepth(FF) {
        this._depthStencilTexture && (FF._depthStencilTexture && FF._depthStencilTexture.dispose(), FF._depthStencilTexture = this._depthStencilTexture, FF._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(FF) {
        this.texture && this.texture._swapAndDie(FF), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let FF = null;
        if (this._isMulti) {
          const WF = this.textures;
          if (WF && WF.length > 0) {
            let SF = !1,
              CF = WF.length,
              AF = -1;
            const uF = WF[WF.length - 1]._source;
            14 !== uF && 12 !== uF || (SF = !0, AF = WF[WF.length - 1].format, CF--);
            const hF = [],
              bW = [],
              dF = [],
              PF = [],
              RF = [],
              iW = [],
              eF = [],
              EF = {};
            for (let FF = 0; FF < CF; ++FF) {
              const SF = WF[FF];
              hF.push(SF.samplingMode), bW.push(SF.type), dF.push(SF.format);
              void 0 !== EF[SF.uniqueId] ? (PF.push(-1), eF.push(0)) : (EF[SF.uniqueId] = FF, SF.is2DArray ? (PF.push(35866), eF.push(SF.depth)) : SF.isCube ? (PF.push(34067), eF.push(0)) : SF.is3D ? (PF.push(32879), eF.push(SF.depth)) : (PF.push(3553), eF.push(0))), this._faceIndices && RF.push(this._faceIndices[FF] ?? 0), this._layerIndices && iW.push(this._layerIndices[FF] ?? 0)
            }
            const QF = {
                samplingModes: hF,
                generateMipMaps: WF[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: SF,
                depthTextureFormat: AF,
                types: bW,
                formats: dF,
                seF: CF,
                targetTypes: PF,
                faceIndex: RF,
                layerIndex: iW,
                layerCounts: eF,
                label: this.label
              },
              rW = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            FF = this._engine.createMultipleRenderTarget(rW, QF);
            for (let gW = 0; gW < CF; ++gW) {
              if (-1 !== PF[gW]) continue;
              const SF = EF[WF[gW].uniqueId];
              FF.setTexture(FF.textures[SF], gW)
            }
          }
        } else {
          const WF = {};
          if (WF.generateDepthBuffer = this._generateDepthBuffer, WF.generateMipMaps = this.texture?.generateMipMaps ?? !1, WF.generateStencilBuffer = this._generateStencilBuffer, WF.samplingMode = this.texture?.samplingMode, WF.type = this.texture?.type, WF.format = this.texture?.format, WF.noColorAttachment = !this._textures, WF.label = this.label, this.isCube) FF = this._engine.createRenderTargetCubeTexture(this.width, WF);
          else {
            const SF = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            FF = this._engine.createRenderTargetTexture(SF, WF)
          }
          FF.texture && (FF.texture.isReady = !0)
        }
        return FF
      }
      _swapRenderTargetWrapper(FF) {
        if (this._textures && FF._textures)
          for (let WF = 0; WF < this._textures.length; ++WF) this._textures[WF]._swapAndDie(FF._textures[WF], !1), FF._textures[WF].isReady = !0;
        this._depthStencilTexture && FF._depthStencilTexture && (this._depthStencilTexture._swapAndDie(FF._depthStencilTexture), FF._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const FF = this._cloneRenderTargetWrapper();
        if (FF) {
          if (this._depthStencilTexture) {
            const WF = this._depthStencilTexture.samplingMode,
              SF = this._depthStencilTexture.format,
              CF = 2 === WF || 3 === WF || 11 === WF;
            FF.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, CF, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, SF, this._depthStencilTextureLabel)
          }
          this.samples > 1 && FF.setSamples(this.samples), FF._swapRenderTargetWrapper(this), FF.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let FF = 0; FF < this._textures.length; ++FF) this._textures[FF].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  38401: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      static get ForceFullSceneLoadingForIncremental() {
        return CF._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(FF) {
        CF._ForceFullSceneLoadingForIncremental = FF
      }
      static get ShowLoadingScreen() {
        return CF._ShowLoadingScreen
      }
      static set ShowLoadingScreen(FF) {
        CF._ShowLoadingScreen = FF
      }
      static get loggingLevel() {
        return CF._LoggingLevel
      }
      static set loggingLevel(FF) {
        CF._LoggingLevel = FF
      }
      static get CleanBoneMatrixWeights() {
        return CF._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(FF) {
        CF._CleanBoneMatrixWeights = FF
      }
    }
    CF._ForceFullSceneLoadingForIncremental = !1, CF._ShowLoadingScreen = !0, CF._CleanBoneMatrixWeights = !1, CF._LoggingLevel = 0
  },
  38045: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(37076);
    const AF = new Map;

    function uF(FF, WF) {
      (function(FF) {
        return AF.delete(FF)
      })(FF) && CF.b.Warn(`Extension with the name '${FF}' already exists`), AF.set(FF, WF)
    }

    function hF(FF, WF) {
      "image/ktx" !== WF && "image/ktx2" !== WF || (FF = ".ktx"), AF.has(FF) || (FF.endsWith(".ies") && uF(".ies", (async () => await SF.e(279).then((() => SF(39621))).then((FF => new FF._IESTextureLoader)))), FF.endsWith(".dds") && uF(".dds", (async () => await SF.e(277).then((() => SF(39623))).then((FF => new FF._DDSTextureLoader)))), FF.endsWith(".basis") && uF(".basis", (async () => await SF.e(280).then((() => SF(39626))).then((FF => new FF._BasisTextureLoader)))), FF.endsWith(".env") && uF(".env", (async () => await Promise.all([SF.e(281), SF.e(278)]).then((() => SF(39634))).then((FF => new FF._ENVTextureLoader)))), FF.endsWith(".hdr") && uF(".hdr", (async () => await SF.e(282).then((() => SF(39678))).then((FF => new FF._HDRTextureLoader)))), (FF.endsWith(".ktx") || FF.endsWith(".ktx2")) && (uF(".ktx", (async () => await SF.e(283).then((() => SF(39681))).then((FF => new FF._KTXTextureLoader)))), uF(".ktx2", (async () => await SF.e(283).then((() => SF(39681))).then((FF => new FF._KTXTextureLoader))))), FF.endsWith(".tga") && uF(".tga", (async () => await SF.e(284).then((() => SF(39699))).then((FF => new FF._TGATextureLoader)))), FF.endsWith(".exr") && uF(".exr", (async () => await SF.e(285).then((() => SF(39707))).then((FF => new FF._ExrTextureLoader)))));
      const CF = AF.get(FF);
      return CF ? Promise.resolve(CF(WF)) : null
    }
  },
  38420: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => PF
    });
    var CF = SF(38267),
      AF = SF(38e3),
      uF = SF(35660);
    class hF extends CF.c {
      get vhF() {
        return this._subMaterials
      }
      set vhF(FF) {
        this._subMaterials = FF, this._hookArray(FF)
      }
      getChildren() {
        return this.vhF
      }
      constructor(FF, WF) {
        super(FF, WF, !0), this._waitingSubMaterialsUniqueIds = [], this.OWF().addMultiMaterial(this), this.vhF = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(FF) {
        var WF = this;
        const SF = FF.push;
        FF.push = function() {
          for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
          const hF = SF.apply(FF, AF);
          return WF._markAllSubMeshesAsTexturesDirty(), hF
        };
        const CF = FF.splice;
        FF.splice = (WF, SF) => {
          const AF = CF.call(FF, WF, SF ?? FF.length);
          return this._markAllSubMeshesAsTexturesDirty(), AF
        }
      }
      getSubMaterial(FF) {
        return FF < 0 || FF >= this.vhF.length ? this.OWF().defaultMaterial : this.vhF[FF]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.vhF.map((FF => FF ? FF.getActiveTextures() : [])))
      }
      hasTexture(FF) {
        if (super.hasTexture(FF)) return !0;
        for (let WF = 0; WF < this.vhF.length; WF++)
          if (this.vhF[WF]?.hasTexture(FF)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(FF, WF, SF) {
        for (let CF = 0; CF < this.vhF.length; CF++) {
          const AF = this.vhF[CF];
          if (AF) {
            if (AF._storeEffectOnSubMeshes) {
              if (!AF.isReadyForSubMesh(FF, WF, SF)) return !1;
              continue
            }
            if (!AF.isReady(FF)) return !1
          }
        }
        return !0
      }
      clone(FF, WF) {
        const SF = new hF(FF, this.OWF());
        for (let CF = 0; CF < this.vhF.length; CF++) {
          let AF;
          const uF = this.vhF[CF];
          AF = WF && uF ? uF.clone(FF + "-" + uF.name) : this.vhF[CF], SF.vhF.push(AF)
        }
        return SF
      }
      serialize() {
        const FF = {};
        FF.name = this.name, FF.id = this.id, FF.uniqueId = this.uniqueId, AF.d && (FF.tags = AF.d.GetTags(this)), FF.materialsUniqueIds = [], FF.materials = [];
        for (let WF = 0; WF < this.vhF.length; WF++) {
          const SF = this.vhF[WF];
          SF ? (FF.materialsUniqueIds.push(SF.uniqueId), FF.materials.push(SF.id)) : (FF.materialsUniqueIds.push(null), FF.materials.push(null))
        }
        return FF
      }
      dispose(FF, WF, SF) {
        const CF = this.OWF();
        if (!CF) return;
        if (SF)
          for (let uF = 0; uF < this.vhF.length; uF++) {
            const SF = this.vhF[uF];
            SF && SF.dispose(FF, WF)
          }
        const AF = CF.multiMaterials.indexOf(this);
        AF >= 0 && CF.multiMaterials.splice(AF, 1), super.dispose(FF, WF)
      }
    }
    let bW = !1;

    function dF(FF, WF) {
      const SF = new hF(FF.name, WF);
      if (SF.id = FF.id, SF._loadedUniqueId = FF.uniqueId, AF.d && AF.d.AddTagsTo(SF, FF.tags), FF.materialsUniqueIds) SF._waitingSubMaterialsUniqueIds = FF.materialsUniqueIds;
      else
        for (const CF of FF.materials) SF.vhF.push(WF.getLastMaterialById(CF));
      return SF
    }

    function PF() {
      bW || (bW = !0, hF.ParseMultiMaterial = dF, (0, uF.f)("BABYLON.MultiMaterial", hF))
    }
  },
  38194: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF, AF, uF = SF(35623);
    ! function(FF) {
      FF[FF.LOCAL = 0] = "LOCAL", FF[FF.WORLD = 1] = "WORLD", FF[FF.BONE = 2] = "BONE"
    }(CF || (CF = {}));
    class hF {}
    hF.X = new uF.r(1, 0, 0), hF.Y = new uF.r(0, 1, 0), hF.Z = new uF.r(0, 0, 1),
      function(FF) {
        FF[FF.X = 0] = "X", FF[FF.Y = 1] = "Y", FF[FF.Z = 2] = "Z"
      }(AF || (AF = {}))
  },
  37960: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      g: () => PF
    });
    var CF = SF(35623);
    const AF = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      uF = [() => 1, FF => FF.y, FF => FF.z, FF => FF.x, FF => FF.x * FF.y, FF => FF.y * FF.z, FF => 3 * FF.z * FF.z - 1, FF => FF.x * FF.z, FF => FF.x * FF.x - FF.y * FF.y],
      hF = (FF, WF) => AF[FF] * uF[FF](WF),
      bW = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class dF {
      constructor() {
        this.preScaled = !1, this.l00 = CF.r.Zero(), this.l1_1 = CF.r.Zero(), this.l10 = CF.r.Zero(), this.l11 = CF.r.Zero(), this.l2_2 = CF.r.Zero(), this.l2_1 = CF.r.Zero(), this.l20 = CF.r.Zero(), this.l21 = CF.r.Zero(), this.l22 = CF.r.Zero()
      }
      addLight(FF, WF, SF) {
        CF.j.HC[0].set(WF.r, WF.g, WF.b);
        const AF = CF.j.HC[0],
          uF = CF.j.HC[1];
        AF.scaleToRef(SF, uF), uF.scaleToRef(hF(0, FF), CF.j.HC[2]), this.l00.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(1, FF), CF.j.HC[2]), this.l1_1.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(2, FF), CF.j.HC[2]), this.l10.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(3, FF), CF.j.HC[2]), this.l11.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(4, FF), CF.j.HC[2]), this.l2_2.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(5, FF), CF.j.HC[2]), this.l2_1.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(6, FF), CF.j.HC[2]), this.l20.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(7, FF), CF.j.HC[2]), this.l21.addInPlace(CF.j.HC[2]), uF.scaleToRef(hF(8, FF), CF.j.HC[2]), this.l22.addInPlace(CF.j.HC[2])
      }
      scaleInPlace(FF) {
        this.l00.scaleInPlace(FF), this.l1_1.scaleInPlace(FF), this.l10.scaleInPlace(FF), this.l11.scaleInPlace(FF), this.l2_2.scaleInPlace(FF), this.l2_1.scaleInPlace(FF), this.l20.scaleInPlace(FF), this.l21.scaleInPlace(FF), this.l22.scaleInPlace(FF)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(bW[0]), this.l1_1.scaleInPlace(bW[1]), this.l10.scaleInPlace(bW[2]), this.l11.scaleInPlace(bW[3]), this.l2_2.scaleInPlace(bW[4]), this.l2_1.scaleInPlace(bW[5]), this.l20.scaleInPlace(bW[6]), this.l21.scaleInPlace(bW[7]), this.l22.scaleInPlace(bW[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(AF[0]), this.l1_1.scaleInPlace(AF[1]), this.l10.scaleInPlace(AF[2]), this.l11.scaleInPlace(AF[3]), this.l2_2.scaleInPlace(AF[4]), this.l2_1.scaleInPlace(AF[5]), this.l20.scaleInPlace(AF[6]), this.l21.scaleInPlace(AF[7]), this.l22.scaleInPlace(AF[8])
      }
      updateFromArray(FF) {
        return CF.r.FromArrayToRef(FF[0], 0, this.l00), CF.r.FromArrayToRef(FF[1], 0, this.l1_1), CF.r.FromArrayToRef(FF[2], 0, this.l10), CF.r.FromArrayToRef(FF[3], 0, this.l11), CF.r.FromArrayToRef(FF[4], 0, this.l2_2), CF.r.FromArrayToRef(FF[5], 0, this.l2_1), CF.r.FromArrayToRef(FF[6], 0, this.l20), CF.r.FromArrayToRef(FF[7], 0, this.l21), CF.r.FromArrayToRef(FF[8], 0, this.l22), this
      }
      updateFromFloatsArray(FF) {
        return CF.r.FromFloatsToRef(FF[0], FF[1], FF[2], this.l00), CF.r.FromFloatsToRef(FF[3], FF[4], FF[5], this.l1_1), CF.r.FromFloatsToRef(FF[6], FF[7], FF[8], this.l10), CF.r.FromFloatsToRef(FF[9], FF[10], FF[11], this.l11), CF.r.FromFloatsToRef(FF[12], FF[13], FF[14], this.l2_2), CF.r.FromFloatsToRef(FF[15], FF[16], FF[17], this.l2_1), CF.r.FromFloatsToRef(FF[18], FF[19], FF[20], this.l20), CF.r.FromFloatsToRef(FF[21], FF[22], FF[23], this.l21), CF.r.FromFloatsToRef(FF[24], FF[25], FF[26], this.l22), this
      }
      static FromArray(FF) {
        return (new dF).updateFromArray(FF)
      }
      static FromPolynomial(FF) {
        const WF = new dF;
        return WF.l00 = FF.xx.scale(.376127).add(FF.yy.scale(.376127)).add(FF.zz.scale(.376126)), WF.l1_1 = FF.y.scale(.977204), WF.l10 = FF.z.scale(.977204), WF.l11 = FF.x.scale(.977204), WF.l2_2 = FF.xy.scale(1.16538), WF.l2_1 = FF.yz.scale(1.16538), WF.l20 = FF.zz.scale(1.34567).subtract(FF.xx.scale(.672834)).subtract(FF.yy.scale(.672834)), WF.l21 = FF.zx.scale(1.16538), WF.l22 = FF.xx.scale(1.16538).subtract(FF.yy.scale(1.16538)), WF.l1_1.scaleInPlace(-1), WF.l11.scaleInPlace(-1), WF.l2_1.scaleInPlace(-1), WF.l21.scaleInPlace(-1), WF.scaleInPlace(Math.PI), WF
      }
    }
    class PF {
      constructor() {
        this.x = CF.r.Zero(), this.y = CF.r.Zero(), this.z = CF.r.Zero(), this.xx = CF.r.Zero(), this.yy = CF.r.Zero(), this.zz = CF.r.Zero(), this.xy = CF.r.Zero(), this.yz = CF.r.Zero(), this.zx = CF.r.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = dF.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(FF) {
        CF.j.HC[0].FhF(FF.r, FF.g, FF.b);
        const WF = CF.j.HC[0];
        this.xx.addInPlace(WF), this.yy.addInPlace(WF), this.zz.addInPlace(WF)
      }
      scaleInPlace(FF) {
        this.x.scaleInPlace(FF), this.y.scaleInPlace(FF), this.z.scaleInPlace(FF), this.xx.scaleInPlace(FF), this.yy.scaleInPlace(FF), this.zz.scaleInPlace(FF), this.yz.scaleInPlace(FF), this.zx.scaleInPlace(FF), this.xy.scaleInPlace(FF)
      }
      updateFromHarmonics(FF) {
        return this._harmonics = FF, this.x.fdF(FF.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.fdF(FF.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.fdF(FF.l10), this.z.scaleInPlace(1.02333), this.xx.fdF(FF.l00), CF.j.HC[0].fdF(FF.l20).scaleInPlace(.247708), CF.j.HC[1].fdF(FF.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).IPF(CF.j.HC[0]).addInPlace(CF.j.HC[1]), this.yy.fdF(FF.l00), this.yy.scaleInPlace(.886277).IPF(CF.j.HC[0]).IPF(CF.j.HC[1]), this.zz.fdF(FF.l00), CF.j.HC[0].fdF(FF.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(CF.j.HC[0]), this.yz.fdF(FF.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.fdF(FF.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.fdF(FF.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(FF) {
        return (new PF).updateFromHarmonics(FF)
      }
      static FromArray(FF) {
        const WF = new PF;
        return CF.r.FromArrayToRef(FF[0], 0, WF.x), CF.r.FromArrayToRef(FF[1], 0, WF.y), CF.r.FromArrayToRef(FF[2], 0, WF.z), CF.r.FromArrayToRef(FF[3], 0, WF.xx), CF.r.FromArrayToRef(FF[4], 0, WF.yy), CF.r.FromArrayToRef(FF[5], 0, WF.zz), CF.r.FromArrayToRef(FF[6], 0, WF.yz), CF.r.FromArrayToRef(FF[7], 0, WF.zx), CF.r.FromArrayToRef(FF[8], 0, WF.xy), WF
      }
    }
  },
  38412: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => YF,
      d: () => cW
    });
    var CF = SF(37972),
      AF = SF(35647),
      uF = SF(35623),
      hF = SF(38109),
      bW = SF(38393),
      dF = SF(38418),
      PF = SF(38100),
      RF = SF(38281),
      iW = SF(38098);
    class eF {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new uF.r(0, 0, 0), this._diffPositionForCollisions = new uF.r(0, 0, 0), this._collisionResponse = !0
      }
    }
    var EF, QF, rW, gW = SF(37855),
      tW = SF(38034),
      TF = SF(38293),
      aW = SF(35678),
      kW = SF(35625),
      qW = SF(38194),
      VF = SF(37076),
      NF = SF(37974),
      DF = SF(37867),
      LF = SF(35660);

    function mW(FF, WF) {
      return FF - Math.floor(FF / WF) * WF
    }

    function OF(FF, WF, SF) {
      FF instanceof Float32Array ? uF.b.FromArrayToRef(FF, WF, SF) : SF.FhF((0, tW.e)(FF[WF]), (0, tW.e)(FF[WF + 1]), (0, tW.e)(FF[WF + 2]), (0, tW.e)(FF[WF + 3]), (0, tW.e)(FF[WF + 4]), (0, tW.e)(FF[WF + 5]), (0, tW.e)(FF[WF + 6]), (0, tW.e)(FF[WF + 7]), (0, tW.e)(FF[WF + 8]), (0, tW.e)(FF[WF + 9]), (0, tW.e)(FF[WF + 10]), (0, tW.e)(FF[WF + 11]), (0, tW.e)(FF[WF + 12]), (0, tW.e)(FF[WF + 13]), (0, tW.e)(FF[WF + 14]), (0, tW.e)(FF[WF + 15]))
    }

    function xW(FF, WF, SF, CF, AF, bW, dF, PF, RF) {
      const iW = SF.texture,
        eF = iW?.getInternalTexture(),
        EF = eF?._bufferView;
      if (!(EF instanceof Float32Array) && !(EF instanceof Uint16Array)) return VF.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const QF = iW.getSize(),
        rW = function(FF, WF) {
          const SF = FF.y - FF.x + 1,
            CF = WF * FF.w / SF,
            AF = CF < 1 ? 0 : 1,
            uF = SF - AF;
          let hF = mW(CF - Math.floor(CF), 1) * uF;
          return hF = mW(hF + FF.z, uF), Math.floor(hF) + FF.x + AF
        }(CF, SF.time);
      if (!isFinite(rW) || rW < 0 || rW >= QF.height) return VF.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const gW = uF.j.HC[0],
        tW = uF.j.Matrix[0],
        TF = uF.j.Matrix[1],
        aW = rW * QF.width * 4,
        kW = WF === hF.k.NormalKind ? uF.r.TransformNormalFromFloatsToRef : uF.r.TransformCoordinatesFromFloatsToRef;
      for (let uF = 0, hF = 0; uF < FF.length; uF += 3, hF += 4) {
        let WF, SF;
        for (tW.reset(), WF = 0; WF < 4 && WF < RF; WF++) SF = bW[hF + WF], SF > 0 && (OF(EF, aW + 16 * Math.floor(AF[hF + WF]), TF), TF.scaleAndAddToRef(SF, tW));
        if (dF && PF)
          for (WF = 0; WF < 4 && WF + 4 < RF; WF++) SF = PF[hF + WF], SF > 0 && (OF(EF, aW + 16 * Math.floor(dF[hF + WF]), TF), TF.scaleAndAddToRef(SF, tW));
        kW(FF[uF], FF[uF + 1], FF[uF + 2], tW, gW), gW.toArray(FF, uF)
      }
      return !0
    }
    class ZF {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = uF.r.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class oF {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new ZF, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new eF, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let YF = (() => {
        var FF;
        let WF, eF = dF.f,
          EF = [];
        return FF = class extends eF {
          static get BILLBOARDMODE_NONE() {
            return dF.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return dF.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return dF.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return dF.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return dF.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return dF.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(FF) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = FF
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(FF) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = FF
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(FF) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = FF
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(FF) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = FF
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(FF) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = FF
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(FF) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== FF && (this._internalAbstractMeshDataInfo._morphTargetManager = FF, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(FF) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== FF && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = FF, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(FF) {
            return !!super._updateNonUniformScalingState(FF) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(FF) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = FF
          }
          set gS(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(FF)
          }
          set onCollisionPositionChange(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(FF)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(FF) {
            if (this._internalAbstractMeshDataInfo._visibility === FF) return;
            const WF = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = FF, (1 === WF && 1 !== FF || 1 !== WF && 1 === FF) && this._markSubMeshesAsDirty((FF => {
              FF.markAsMiscDirty(), FF.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(FF) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = FF
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(FF) {
            this._internalAbstractMeshDataInfo._renderingGroupId = FF
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(FF) {
            if (!Number.isInteger(FF) || FF < 0 || FF > 255 || 0 !== FF && 0 === (63 & FF)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = FF
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(FF) {
            this._setMaterial(FF)
          }
          _setMaterial(FF) {
            this._internalAbstractMeshDataInfo._material !== FF && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = FF, FF && FF.meshMap && (FF.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.Om && (this.resetDrawCache(void 0, null == FF), this._unBindEffect()))
          }
          getMaterialForRenderPass(FF) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[FF]
          }
          setMaterialForRenderPass(FF, WF) {
            this.resetDrawCache(FF), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const SF = this._internalAbstractMeshDataInfo._materialForRenderPass[FF];
            SF?.meshMap?.[this.uniqueId] && (SF.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[FF] = WF, WF && WF.meshMap && (WF.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(FF) {
            this._internalAbstractMeshDataInfo._receiveShadows !== FF && (this._internalAbstractMeshDataInfo._receiveShadows = FF, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(FF) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== FF && (this._internalAbstractMeshDataInfo._hasVertexAlpha = FF, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(FF) {
            this._internalAbstractMeshDataInfo._useVertexColors !== FF && (this._internalAbstractMeshDataInfo._useVertexColors = FF, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(FF) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== FF && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = FF, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(FF) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== FF && (this._internalAbstractMeshDataInfo._numBoneInfluencers = FF, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(FF) {
            this._internalAbstractMeshDataInfo._applyFog !== FF && (this._internalAbstractMeshDataInfo._applyFog = FF, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(FF) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = FF
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(FF) {
            FF !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = FF, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(FF) ? -1 : FF
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = FF
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(FF) ? -1 : FF
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = FF
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(FF) {
            const WF = this._internalAbstractMeshDataInfo._skeleton;
            WF && WF.needInitialSkinMatrix && WF._unregisterMeshWithPoseMatrix(this), FF && FF.needInitialSkinMatrix && FF._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = FF, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(WF) {
            var SF;
            let CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(WF, CF, !1), SF = this, this._internalAbstractMeshDataInfo = new oF, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = FF.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new AF.b, this.onCollisionPositionChangeObservable = new AF.b, this.onMaterialChangedObservable = new AF.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.JA = FF.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = aW.e.Red(), this.outlineWidth = .02, this.overlayColor = aW.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.nC = !1, this.wC = !1, this.actionManager = null, this.ellipsoid = new uF.r(.5, 1, .5), this.ellipsoidOffset = new uF.r(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new aW.i(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                cSF: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new AF.b, this._onCollisionPositionChange = function(FF, WF) {
                let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                WF.subtractToRef(SF._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, SF._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), SF._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > DF.e.CollisionsEpsilon && SF.position.addInPlace(SF._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), CF && SF.onCollideObservable.notifyObservers(CF), SF.onCollisionPositionChangeObservable.notifyObservers(SF.position)
              }, CF = this.OWF(), this.layerMask = CF.defaultRenderableLayerMask, CF.gRF(this), this._resyncLightSources(), this._uniformBuffer = new iW.c(this.OWF().sC(), void 0, void 0, WF, !this.OWF().sC().isWebGPU), this._buildUniformLayout(), CF.performancePriority) {
              case 2:
                this.wC = !0;
              case 1:
                this.nC = !0, this.JA = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(FF) {
            const WF = this._uniformBuffer;
            WF.yhF("world", FF), WF.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), WF.update()
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
          toString(FF) {
            let WF = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            WF += ", # of submeshes: " + (this.Om ? this.Om.length : 0);
            const SF = this._internalAbstractMeshDataInfo._skeleton;
            return SF && (WF += ", skeleton: " + SF.name), FF && (WF += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], WF += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.cSF ? "YES" : "NO")), WF
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== dF.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(FF) {
            let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (WF || this.actionManager.isRecursive)) {
              if (!FF) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(FF)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(FF, !1) : null
          }
          _releaseRenderPassId(FF) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.Om) {
              for (const FF of this.Om) FF._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const FF of this.OWF().lights) FF.isEnabled() && FF.canAffectMesh(this) && this._lightSources.push(FF);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(FF) {
            const WF = FF.isEnabled() && FF.canAffectMesh(this),
              SF = this._lightSources.indexOf(FF);
            let CF = !1;
            if (-1 === SF) {
              if (!WF) return;
              this._lightSources.push(FF)
            } else {
              if (WF) return;
              CF = !0, this._lightSources.splice(SF, 1)
            }
            this._markSubMeshesAsLightDirty(CF)
          }
          _unBindEffect() {
            for (const FF of this.Om) FF.setEffect(null)
          }
          _removeLightSource(FF, WF) {
            const SF = this._lightSources.indexOf(FF); - 1 !== SF && (this._lightSources.splice(SF, 1), this._markSubMeshesAsLightDirty(WF))
          }
          _markSubMeshesAsDirty(FF) {
            if (this.Om)
              for (const WF of this.Om)
                for (let SF = 0; SF < WF._drawWrappers.length; ++SF) {
                  const CF = WF._drawWrappers[SF];
                  CF && CF.defines && CF.defines.markAllAsDirty && FF(CF.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((WF => WF.markAsLightDirty(FF)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((FF => FF.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((FF => FF.markAsMiscDirty()))
          }
          XbF(FF) {
            return this._currentRenderId = Number.MAX_VALUE, super.XbF(FF), this._isDirty = !0, this
          }
          resetDrawCache(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.Om)
              for (const SF of this.Om) SF.resetDrawCache(FF, WF)
          }
          get isBlocked() {
            return !1
          }
          getLOD(FF) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          yEF() {
            return null
          }
          getVerticesData(FF) {
            return null
          }
          setVerticesData(FF, WF, SF, CF) {
            return this
          }
          updateVerticesData(FF, WF, SF, CF) {
            return this
          }
          setIndices(FF, WF) {
            return this
          }
          isVerticesDataPresent(FF) {
            return !1
          }
          JWF() {
            return this._masterMesh ? this._masterMesh.JWF() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.JWF()
          }
          setBoundingInfo(FF) {
            return this._boundingInfo = FF, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(FF, WF, SF) {
            return this._boundingInfo = new RF.b(FF, WF, SF), this._boundingInfo
          }
          normalizeToUnitCube() {
            let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(FF, WF, SF)
          }
          get useBones() {
            return this.skeleton && this.OWF().skeletonsEnabled && this.isVerticesDataPresent(hF.k.MatricesIndicesKind) && this.isVerticesDataPresent(hF.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(FF) {}
          _activate(FF, WF) {
            return this._renderId = FF, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === dF.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get ZWF() {
            return !1
          }
          get RRF() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(FF, WF, SF) {
            return this.position.addInPlace(this.calcMovePOV(FF, WF, SF)), this
          }
          calcMovePOV(FF, WF, SF) {
            const CF = new uF.b;
            (this.rotationQuaternion ? this.rotationQuaternion : uF.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(CF);
            const AF = uF.r.Zero(),
              hF = this.definedFacingForward ? -1 : 1;
            return uF.r.TransformCoordinatesFromFloatsToRef(FF * hF, WF, SF * hF, CF, AF), AF
          }
          rotatePOV(FF, WF, SF) {
            return this.rotation.addInPlace(this.calcRotatePOV(FF, WF, SF)), this
          }
          calcRotatePOV(FF, WF, SF) {
            const CF = this.definedFacingForward ? 1 : -1;
            return new uF.r(FF * CF, WF, SF * CF)
          }
          _refreshBoundingInfo(FF, WF) {
            if (FF) {
              const SF = (0, TF.f)(FF, 0, this.getTotalVertices(), WF);
              this._boundingInfo ? this._boundingInfo.reConstruct(SF.minimum, SF.maximum) : this._boundingInfo = new RF.b(SF.minimum, SF.maximum)
            }
            if (this.Om)
              for (let SF = 0; SF < this.Om.length; SF++) this.Om[SF].refreshBoundingInfo(FF);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(FF) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(FF.minimum, FF.maximum) : this._boundingInfo = new RF.b(FF.minimum, FF.maximum), this.Om)
              for (let WF = 0; WF < this.Om.length; WF++) this.Om[WF].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(FF, WF, SF, CF, AF, bW, dF) {
            ! function(FF, WF, SF, CF, AF, bW, dF) {
              const PF = uF.j.HC[0],
                RF = uF.j.Matrix[0],
                iW = uF.j.Matrix[1],
                eF = WF === hF.k.NormalKind ? uF.r.TransformNormalFromFloatsToRef : uF.r.TransformCoordinatesFromFloatsToRef;
              for (let hF = 0, EF = 0; hF < FF.length; hF += 3, EF += 4) {
                let WF, QF;
                for (RF.reset(), WF = 0; WF < 4; WF++) QF = AF[EF + WF], QF > 0 && (uF.b.FromFloat32ArrayToRefScaled(SF, Math.floor(16 * CF[EF + WF]), QF, iW), RF.addToSelf(iW));
                if (bW && dF)
                  for (WF = 0; WF < 4; WF++) QF = dF[EF + WF], QF > 0 && (uF.b.FromFloat32ArrayToRefScaled(SF, Math.floor(16 * bW[EF + WF]), QF, iW), RF.addToSelf(iW));
                eF(FF[hF], FF[hF + 1], FF[hF + 2], RF, PF), PF.toArray(FF, hF)
              }
            }(FF, WF, SF, CF, AF, bW, dF)
          }
          _getData(WF, SF) {
            let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hF.k.PositionKind;
            const AF = WF.cache,
              bW = FF => {
                if (AF) {
                  const WF = AF._vertexData || (AF._vertexData = {});
                  return WF[FF] || this.copyVerticesData(FF, WF), WF[FF]
                }
                return this.getVerticesData(FF)
              };
            if (SF || (SF = bW(CF)), !SF) return null;
            AF ? (AF._outputData ? AF._outputData.set(SF) : AF._outputData = new Float32Array(SF), SF = AF._outputData) : (WF.applyMorph && this.morphTargetManager || WF.applySkeleton && this.skeleton || WF.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (SF = SF.slice()), WF.applyMorph && this.morphTargetManager && function(FF, WF, SF) {
              let CF;
              switch (WF) {
                case hF.k.PositionKind:
                  CF = FF => FF.getPositions();
                  break;
                case hF.k.NormalKind:
                  CF = FF => FF.getNormals();
                  break;
                case hF.k.TangentKind:
                  CF = FF => FF.getTangents();
                  break;
                case hF.k.UVKind:
                  CF = FF => FF.getUVs();
                  break;
                case hF.k.UV2Kind:
                  CF = FF => FF.getUV2s();
                  break;
                case hF.k.ColorKind:
                  CF = FF => FF.getColors();
                  break;
                default:
                  return
              }
              for (let AF = 0; AF < FF.length; AF++) {
                let WF = FF[AF];
                for (let uF = 0; uF < SF.numTargets; uF++) {
                  const hF = SF.getTarget(uF),
                    bW = hF.influence;
                  if (0 !== bW) {
                    const SF = CF(hF);
                    SF && (WF += (SF[AF] - FF[AF]) * bW)
                  }
                }
                FF[AF] = WF
              }
            }(SF, CF, this.morphTargetManager);
            const dF = this.bakedVertexAnimationManager;
            let PF = !1;
            if (WF.applyBakedVertexAnimation && dF?.isEnabled) {
              const FF = bW(hF.k.MatricesIndicesKind),
                AF = bW(hF.k.MatricesWeightsKind);
              if (AF && FF) {
                const uF = this.numBoneInfluencers > 4,
                  RF = uF ? bW(hF.k.MatricesIndicesExtraKind) : null,
                  iW = uF ? bW(hF.k.MatricesWeightsExtraKind) : null;
                PF = xW(SF, CF, dF, WF.bakedVertexAnimationSettings ?? dF.animationParameters, FF, AF, RF, iW, this.numBoneInfluencers)
              }
            }
            if (!PF && WF.applySkeleton && this.skeleton) {
              const WF = bW(hF.k.MatricesIndicesKind),
                AF = bW(hF.k.MatricesWeightsKind);
              if (AF && WF) {
                const uF = this.numBoneInfluencers > 4,
                  dF = uF ? bW(hF.k.MatricesIndicesExtraKind) : null,
                  PF = uF ? bW(hF.k.MatricesWeightsExtraKind) : null,
                  RF = this.skeleton.getTransformMatrices(this);
                FF._ApplySkeleton(SF, CF, RF, WF, AF, dF, PF)
              }
            }
            if (!1 !== WF.updatePositionsArray && CF === hF.k.PositionKind) {
              const FF = this._internalAbstractMeshDataInfo._positions || [],
                WF = FF.length;
              if (FF.length = SF.length / 3, WF < FF.length)
                for (let SF = WF; SF < FF.length; SF++) FF[SF] = new uF.r;
              for (let CF = 0, AF = 0; CF < FF.length; CF++, AF += 3) FF[CF].FhF(SF[AF], SF[AF + 1], SF[AF + 2]);
              this._internalAbstractMeshDataInfo._positions = FF
            }
            return SF
          }
          getNormalsData() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: FF,
              applyMorph: WF,
              updatePositionsArray: !1
            }, null, hF.k.NormalKind)
          }
          ZCF() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: FF,
              applyMorph: WF,
              updatePositionsArray: !1
            }, SF, hF.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new RF.b(uF.r.Zero(), uF.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(FF) {
            if (!this.Om) return this;
            const WF = this.Om.length;
            for (let SF = 0; SF < WF; SF++) {
              const CF = this.Om[SF];
              (WF > 1 || !CF.IsGlobal) && CF.updateBoundingInfo(FF)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.wC || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(FF) {
            return this.JWF().isInFrustum(FF, this.cullingStrategy)
          }
          isCompletelyInFrustum(FF) {
            return this.JWF().isCompletelyInFrustum(FF)
          }
          ARF(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              SF = arguments.length > 2 ? arguments[2] : void 0;
            const CF = this.JWF(),
              AF = FF.JWF();
            if (CF.intersects(AF, WF)) return !0;
            if (SF)
              for (const uF of this.getChildMeshes())
                if (uF.ARF(FF, WF, !0)) return !0;
            return !1
          }
          intersectsPoint(FF) {
            return this.JWF().intersectsPoint(FF)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(FF) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = FF
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(FF) {
            let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const SF = this.OWF().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = SF.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, SF.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, FF, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, WF), this
          }
          _collideForSubMesh(FF, WF, SF) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!FF._lastColliderWorldVertices || !FF._lastColliderTransformMatrix.equals(WF)) {
              FF._lastColliderTransformMatrix = WF.clone(), FF._lastColliderWorldVertices = [], FF._trianglePlanes = [];
              const SF = FF.verticesStart,
                CF = FF.verticesStart + FF.verticesCount;
              for (let AF = SF; AF < CF; AF++) FF._lastColliderWorldVertices.push(uF.r.TransformCoordinates(this._positions[AF], WF))
            }
            return SF._collide(FF._trianglePlanes, FF._lastColliderWorldVertices, this.yEF(), FF.indexStart, FF.indexStart + FF.indexCount, FF.verticesStart, !!FF.XC(), this, this._shouldConvertRHS(), 7 === FF.XC()?.fillMode), this
          }
          _processCollisionsForSubMeshes(FF, WF) {
            const SF = this._scene.getCollidingSubMeshCandidates(this, FF),
              CF = SF.length;
            for (let AF = 0; AF < CF; AF++) {
              const uF = SF.data[AF];
              CF > 1 && !uF._checkCollision(FF) || this._collideForSubMesh(uF, WF, FF)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(FF) {
            if (!this.JWF()._checkCollision(FF)) return this;
            const WF = uF.j.Matrix[0],
              SF = uF.j.Matrix[1];
            return uF.b.ScalingToRef(1 / FF._radius.x, 1 / FF._radius.y, 1 / FF._radius.z, WF), this.worldMatrixFromCache.multiplyToRef(WF, SF), this._processCollisionsForSubMeshes(FF, SF), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(FF, WF, SF) {
            let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AF = arguments.length > 4 ? arguments[4] : void 0,
              hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const bW = new PF.b,
              dF = this.getClassName(),
              RF = "InstancedLinesMesh" === dF || "LinesMesh" === dF || "GreasedLineMesh" === dF ? this.intersectionThreshold : 0,
              iW = this.JWF();
            if (!this.Om) return bW;
            if (!hF && (!FF.intersectsSphere(iW.nPF, RF) || !FF.intersectsBox(iW.boundingBox, RF))) return bW;
            if (CF) return bW.hit = !hF, bW.pickedMesh = hF ? null : this, bW.distance = hF ? 0 : uF.r.Distance(FF.origin, iW.nPF.center), bW.subMeshId = 0, bW;
            if (!this._generatePointsArray()) return bW;
            let eF = null;
            const EF = this._scene.getIntersectingSubMeshCandidates(this, FF),
              QF = EF.length;
            let rW = !1;
            for (let uF = 0; uF < QF; uF++) {
              const FF = EF.data[uF].XC();
              if (FF && (7 == FF.fillMode || 0 == FF.fillMode || 1 == FF.fillMode || 2 == FF.fillMode || 4 == FF.fillMode)) {
                rW = !0;
                break
              }
            }
            if (!rW) return bW.hit = !0, bW.pickedMesh = this, bW.distance = uF.r.Distance(FF.origin, iW.nPF.center), bW.subMeshId = -1, bW;
            for (let uF = 0; uF < QF; uF++) {
              const CF = EF.data[uF];
              if (QF > 1 && !hF && !CF.canIntersects(FF)) continue;
              const AF = CF.intersects(FF, this._positions, this.yEF(), WF, SF);
              if (AF && (WF || !eF || AF.distance < eF.distance) && (eF = AF, eF.subMeshId = CF._id, eF._internalSubMeshId = uF, WF)) break
            }
            if (eF) {
              const WF = AF ?? this.getWorldMatrix(),
                SF = uF.j.HC[0],
                CF = uF.j.HC[1];
              uF.r.TransformCoordinatesToRef(FF.origin, WF, SF), FF.direction.scaleToRef(eF.distance, CF);
              const hF = uF.r.TransformNormal(CF, WF).addInPlace(SF);
              return bW.hit = !0, bW.distance = uF.r.Distance(SF, hF), bW.pickedPoint = hF, bW.pickedMesh = this, bW.bu = eF.bu || 0, bW.bv = eF.bv || 0, bW.subMeshFaceId = eF.faceId, bW.faceId = eF.faceId + EF.data[eF._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), bW.subMeshId = eF.subMeshId, bW
            }
            return bW
          }
          clone(FF, WF, SF) {
            return null
          }
          releaseSubMeshes() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.Om)
              for (; this.Om.length;) this.Om[0].dispose(FF);
            else this.Om = [];
            return this
          }
          dispose(FF) {
            let WF, SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const CF = this.OWF();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), CF.freeActiveMeshes(), CF.freeRenderingGroups(), CF.renderingManager.maintainStateBetweenFrames && CF.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((FF => FF !== this && FF.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), WF = 0; WF < this._intersectionsInProgress.length; WF++) {
              const FF = this._intersectionsInProgress[WF],
                SF = FF._intersectionsInProgress.indexOf(this);
              FF._intersectionsInProgress.splice(SF, 1)
            }
            this._intersectionsInProgress.length = 0;
            const AF = CF.lights;
            for (const hF of AF) {
              let FF = hF.includedOnlyMeshes.indexOf(this); - 1 !== FF && hF.includedOnlyMeshes.splice(FF, 1), FF = hF.excludedMeshes.indexOf(this), -1 !== FF && hF.excludedMeshes.splice(FF, 1);
              const WF = hF.getShadowGenerators();
              if (WF) {
                const SF = WF.values();
                for (let WF = SF.next(); !0 !== WF.done; WF = SF.next()) {
                  const SF = WF.value.getShadowMap();
                  SF && SF.renderList && (FF = SF.renderList.indexOf(this), -1 !== FF && SF.renderList.splice(FF, 1))
                }
              }
            }
            this.releaseSubMeshes(CF._isDisposing);
            const uF = CF.sC();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, uF.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), uF.wipeCaches(), CF.zSF(this), this._parentContainer) {
              const FF = this._parentContainer.meshes.indexOf(this);
              FF > -1 && this._parentContainer.meshes.splice(FF, 1), this._parentContainer = null
            }
            if (SF && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !FF)
              for (WF = 0; WF < CF.Zm.length; WF++) CF.Zm[WF].emitter === this && (CF.Zm[WF].dispose(), WF--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(FF, SF)
          }
          _initFacetData() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            FF.facetNormals || (FF.facetNormals = []), FF.facetPositions || (FF.facetPositions = []), FF.facetPartitioning || (FF.facetPartitioning = new Array), FF.facetNb = this.yEF().length / 3 | 0, FF.partitioningSubdivisions = FF.partitioningSubdivisions ? FF.partitioningSubdivisions : 10, FF.partitioningBBoxRatio = FF.partitioningBBoxRatio ? FF.partitioningBBoxRatio : 1.01;
            for (let WF = 0; WF < FF.facetNb; WF++) FF.facetNormals[WF] = uF.r.Zero(), FF.facetPositions[WF] = uF.r.Zero();
            return FF.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            FF.facetDataEnabled || this._initFacetData();
            const WF = this.getVerticesData(hF.k.PositionKind),
              SF = this.yEF(),
              CF = this.getVerticesData(hF.k.NormalKind)?.slice(),
              AF = this.JWF();
            if (FF.facetDepthSort && !FF.facetDepthSortEnabled) {
              if (FF.facetDepthSortEnabled = !0, SF instanceof Uint16Array) FF.depthSortedIndices = new Uint16Array(SF);
              else if (SF instanceof Uint32Array) FF.depthSortedIndices = new Uint32Array(SF);
              else {
                let WF = !1;
                for (let FF = 0; FF < SF.length; FF++)
                  if (SF[FF] > 65535) {
                    WF = !0;
                    break
                  } FF.depthSortedIndices = WF ? new Uint32Array(SF) : new Uint16Array(SF)
              }
              if (FF.facetDepthSortFunction = function(FF, WF) {
                  return WF.sqDistance - FF.sqDistance
                }, !FF.facetDepthSortFrom) {
                const WF = this.OWF().activeCamera;
                FF.facetDepthSortFrom = WF ? WF.position : uF.r.Zero()
              }
              FF.depthSortedFacets = [];
              for (let WF = 0; WF < FF.facetNb; WF++) {
                const SF = {
                  ind: 3 * WF,
                  sqDistance: 0
                };
                FF.depthSortedFacets.push(SF)
              }
              FF.invertedMatrix = uF.b.Identity(), FF.facetDepthSortOrigin = uF.r.Zero()
            }
            FF.bbSize.x = AF.maximum.x - AF.minimum.x > kW.c ? AF.maximum.x - AF.minimum.x : kW.c, FF.bbSize.y = AF.maximum.y - AF.minimum.y > kW.c ? AF.maximum.y - AF.minimum.y : kW.c, FF.bbSize.z = AF.maximum.z - AF.minimum.z > kW.c ? AF.maximum.z - AF.minimum.z : kW.c;
            let dF = FF.bbSize.x > FF.bbSize.y ? FF.bbSize.x : FF.bbSize.y;
            if (dF = dF > FF.bbSize.z ? dF : FF.bbSize.z, FF.subDiv.max = FF.partitioningSubdivisions, FF.subDiv.X = Math.floor(FF.subDiv.max * FF.bbSize.x / dF), FF.subDiv.Y = Math.floor(FF.subDiv.max * FF.bbSize.y / dF), FF.subDiv.Z = Math.floor(FF.subDiv.max * FF.bbSize.z / dF), FF.subDiv.X = FF.subDiv.X < 1 ? 1 : FF.subDiv.X, FF.subDiv.Y = FF.subDiv.Y < 1 ? 1 : FF.subDiv.Y, FF.subDiv.Z = FF.subDiv.Z < 1 ? 1 : FF.subDiv.Z, FF.facetParameters.facetNormals = this.getFacetLocalNormals(), FF.facetParameters.facetPositions = this.getFacetLocalPositions(), FF.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), FF.facetParameters.bInfo = AF, FF.facetParameters.bbSize = FF.bbSize, FF.facetParameters.subDiv = FF.subDiv, FF.facetParameters.ratio = this.partitioningBBoxRatio, FF.facetParameters.depthSort = FF.facetDepthSort, FF.facetDepthSort && FF.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(FF.invertedMatrix), uF.r.TransformCoordinatesToRef(FF.facetDepthSortFrom, FF.invertedMatrix, FF.facetDepthSortOrigin), FF.facetParameters.distanceTo = FF.facetDepthSortOrigin), FF.facetParameters.depthSortedFacets = FF.depthSortedFacets, CF && bW.b.ComputeNormals(WF, SF, CF, FF.facetParameters), FF.facetDepthSort && FF.facetDepthSortEnabled) {
              FF.depthSortedFacets.sort(FF.facetDepthSortFunction);
              const WF = FF.depthSortedIndices.length / 3 | 0;
              for (let CF = 0; CF < WF; CF++) {
                const WF = FF.depthSortedFacets[CF].ind;
                FF.depthSortedIndices[3 * CF] = SF[WF], FF.depthSortedIndices[3 * CF + 1] = SF[WF + 1], FF.depthSortedIndices[3 * CF + 2] = SF[WF + 2]
              }
              this.updateIndices(FF.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            return FF.facetNormals || this.updateFacetData(), FF.facetNormals
          }
          getFacetLocalPositions() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            return FF.facetPositions || this.updateFacetData(), FF.facetPositions
          }
          getFacetLocalPartitioning() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            return FF.facetPartitioning || this.updateFacetData(), FF.facetPartitioning
          }
          getFacetPosition(FF) {
            const WF = uF.r.Zero();
            return this.getFacetPositionToRef(FF, WF), WF
          }
          getFacetPositionToRef(FF, WF) {
            const SF = this.getFacetLocalPositions()[FF],
              CF = this.getWorldMatrix();
            return uF.r.TransformCoordinatesToRef(SF, CF, WF), this
          }
          getFacetNormal(FF) {
            const WF = uF.r.Zero();
            return this.getFacetNormalToRef(FF, WF), WF
          }
          getFacetNormalToRef(FF, WF) {
            const SF = this.getFacetLocalNormals()[FF];
            return uF.r.TransformNormalToRef(SF, this.getWorldMatrix(), WF), this
          }
          getFacetsAtLocalCoordinates(FF, WF, SF) {
            const CF = this.JWF(),
              AF = this._internalAbstractMeshDataInfo._facetData,
              uF = Math.floor((FF - CF.minimum.x * AF.partitioningBBoxRatio) * AF.subDiv.X * AF.partitioningBBoxRatio / AF.bbSize.x),
              hF = Math.floor((WF - CF.minimum.y * AF.partitioningBBoxRatio) * AF.subDiv.Y * AF.partitioningBBoxRatio / AF.bbSize.y),
              bW = Math.floor((SF - CF.minimum.z * AF.partitioningBBoxRatio) * AF.subDiv.Z * AF.partitioningBBoxRatio / AF.bbSize.z);
            return uF < 0 || uF > AF.subDiv.max || hF < 0 || hF > AF.subDiv.max || bW < 0 || bW > AF.subDiv.max ? null : AF.facetPartitioning[uF + AF.subDiv.max * hF + AF.subDiv.max * AF.subDiv.max * bW]
          }
          getClosestFacetAtCoordinates(FF, WF, SF, CF) {
            let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const bW = this.getWorldMatrix(),
              dF = uF.j.Matrix[5];
            bW.invertToRef(dF);
            const PF = uF.j.HC[8];
            uF.r.TransformCoordinatesFromFloatsToRef(FF, WF, SF, dF, PF);
            const RF = this.getClosestFacetAtLocalCoordinates(PF.x, PF.y, PF.z, CF, AF, hF);
            return CF && uF.r.TransformCoordinatesFromFloatsToRef(CF.x, CF.y, CF.z, bW, CF), RF
          }
          getClosestFacetAtLocalCoordinates(FF, WF, SF, CF) {
            let AF, uF, hF, bW, dF, PF, RF, iW, eF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              EF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              QF = null;
            const rW = this.getFacetLocalPositions(),
              gW = this.getFacetLocalNormals(),
              tW = this.getFacetsAtLocalCoordinates(FF, WF, SF);
            if (!tW) return null;
            let TF, aW, kW, qW, VF = Number.MAX_VALUE;
            for (let NF = 0; NF < tW.length; NF++) aW = tW[NF], kW = gW[aW], qW = rW[aW], bW = (FF - qW.x) * kW.x + (WF - qW.y) * kW.y + (SF - qW.z) * kW.z, (!eF || eF && EF && bW >= 0 || eF && !EF && bW <= 0) && (bW = kW.x * qW.x + kW.y * qW.y + kW.z * qW.z, dF = -(kW.x * FF + kW.y * WF + kW.z * SF - bW) / (kW.x * kW.x + kW.y * kW.y + kW.z * kW.z), PF = FF + kW.x * dF, RF = WF + kW.y * dF, iW = SF + kW.z * dF, AF = PF - FF, uF = RF - WF, hF = iW - SF, TF = AF * AF + uF * uF + hF * hF, TF < VF && (VF = TF, QF = aW, CF && (CF.x = PF, CF.y = RF, CF.z = iW)));
            return QF
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const FF = this._internalAbstractMeshDataInfo._facetData;
            return FF.facetDataEnabled && (FF.facetDataEnabled = !1, FF.facetPositions = [], FF.facetNormals = [], FF.facetPartitioning = new Array, FF.facetParameters = {}, FF.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(FF, WF) {
            return this
          }
          createNormals(FF) {
            const WF = this.getVerticesData(hF.k.PositionKind),
              SF = this.yEF();
            let CF;
            return CF = this.isVerticesDataPresent(hF.k.NormalKind) ? this.getVerticesData(hF.k.NormalKind) : [], bW.b.ComputeNormals(WF, SF, CF, {
              useRightHandedSystem: this.OWF().useRightHandedSystem
            }), this.setVerticesData(hF.k.NormalKind, CF, FF), this
          }
          async optimizeIndicesAsync() {
            const FF = this.yEF();
            if (!FF) return this;
            const {
              OptimizeIndices: WF
            } = await SF.e(321).then((() => SF(40406)));
            return WF(FF), this.setIndices(FF, this.getTotalVertices()), this
          }
          alignWithNormal(FF, WF) {
            WF || (WF = qW.b.Y);
            const SF = uF.j.HC[0],
              CF = uF.j.HC[1];
            return uF.r.CrossToRef(WF, FF, CF), uF.r.CrossToRef(FF, CF, SF), this.rotationQuaternion ? uF.e.RotationQuaternionFromAxisToRef(SF, FF, CF, this.rotationQuaternion) : uF.r.RotationFromAxisToRef(SF, FF, CF, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, gW.l)("EdgesRenderer")
          }
          enableEdgesRendering(FF, WF, SF) {
            throw (0, gW.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.Zm.filter((FF => FF.emitter === this))
          }
        }, (() => {
          const SF = "function" === typeof Symbol && Symbol.metadata ? Object.create(eF[Symbol.metadata] ?? null) : void 0;
          WF = [NF.k.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, CF.j)(FF, null, WF, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: FF => "_ApplySkeleton" in FF,
              get: FF => FF._ApplySkeleton
            },
            metadata: SF
          }, null, EF), SF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SF
          })
        })(), FF.OCCLUSION_TYPE_NONE = ((0, CF.k)(FF, EF), 0), FF.OCCLUSION_TYPE_OPTIMISTIC = 1, FF.OCCLUSION_TYPE_STRICT = 2, FF.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, FF.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, FF.CULLINGSTRATEGY_STANDARD = 0, FF.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, FF.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, FF.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, FF.DefaultIsPickable = !0, FF
      })(),
      MF = !1;

    function cW() {
      MF || (MF = !0, (0, LF.f)("BABYLON.AbstractMesh", YF))
    }(EF = YF.prototype).createOrUpdateSubmeshesOctree ?? (EF.createOrUpdateSubmeshesOctree = (0, gW.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (QF = YF.prototype).getPhysicsImpostor ?? (QF.getPhysicsImpostor = (0, gW.j)("AbstractMesh", "getPhysicsImpostor")), (rW = YF.prototype).setPhysicsLinkWith ?? (rW.setPhysicsLinkWith = (0, gW.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(YF.prototype, "occlusionRetryCount") || Object.defineProperty(YF.prototype, "occlusionRetryCount", (0, gW.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(YF.prototype, "occlusionType") || Object.defineProperty(YF.prototype, "occlusionType", (0, gW.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(YF.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(YF.prototype, "occlusionQueryAlgorithmType", (0, gW.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(YF.prototype, "isOccluded") || Object.defineProperty(YF.prototype, "isOccluded", (0, gW.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(YF.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(YF.prototype, "isOcclusionQueryInProgress", (0, gW.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(YF.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(YF.prototype, "forceRenderingWhenOccluded", (0, gW.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(YF.prototype, "occlusionForRenderPassId") || Object.defineProperty(YF.prototype, "occlusionForRenderPassId", (0, gW.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(YF.prototype, "decalMap") || Object.defineProperty(YF.prototype, "decalMap", (0, gW.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(YF.prototype, "BWF") || Object.defineProperty(YF.prototype, "BWF", (0, gW.f)("AbstractMesh", "BWF")), Object.getOwnPropertyDescriptor(YF.prototype, "physicsImpostor") || Object.defineProperty(YF.prototype, "physicsImpostor", (0, gW.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(YF.prototype, "showBoundingBox") || Object.defineProperty(YF.prototype, "showBoundingBox", (0, gW.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(YF.prototype, "edgesRenderer") || Object.defineProperty(YF.prototype, "edgesRenderer", (0, gW.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(YF.prototype, "renderOutline") || Object.defineProperty(YF.prototype, "renderOutline", (0, gW.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(YF.prototype, "renderOverlay") || Object.defineProperty(YF.prototype, "renderOverlay", (0, gW.f)("AbstractMesh", "renderOverlay"))
  },
  38398: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => tW
    });
    var CF = SF(35623),
      AF = SF(35678),
      uF = SF(38393),
      hF = SF(38109),
      bW = SF(38269),
      dF = SF(38401),
      PF = SF(38281),
      RF = SF(38065),
      iW = SF(37076),
      eF = SF(38e3),
      EF = SF(38293),
      QF = SF(35639),
      rW = SF(38403),
      gW = SF(38031);
    class tW {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(FF) {
        this._boundingBias ? this._boundingBias.fdF(FF) : this._boundingBias = FF.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(FF) {
        const WF = new tW(tW.RandomId(), FF.OWF());
        return WF.applyToMesh(FF), WF
      }
      get meshes() {
        return this._meshes
      }
      constructor(FF, WF, SF) {
        let AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new CF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new CF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = WF || QF.e.LastCreatedScene, this._scene && (this.id = FF, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.sC(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = AF, null !== hF && (this._totalVertices = hF), SF ? this.setAllVerticesData(SF, AF) : null === hF && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), uF && (this.applyToMesh(uF), uF.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      OWF() {
        return this._scene
      }
      sC() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let FF = 0; FF < this._meshes.length; FF++)
          if (!this._meshes[FF].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const FF = new Set;
        for (const WF in this._vertexBuffers) FF.add(this._vertexBuffers[WF].getWrapperBuffer());
        FF.forEach((FF => {
          FF._rebuild()
        }))
      }
      setAllVerticesData(FF, WF) {
        FF.applyToGeometry(this, WF), this._notifyUpdate()
      }
      setVerticesData(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0;
        SF && Array.isArray(WF) && (WF = new Float32Array(WF));
        const AF = new hF.k(this._engine, WF, FF, {
          updatable: SF,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: CF,
          label: "Geometry_" + this.id + "_" + FF
        });
        this.setVerticesBuffer(AF)
      }
      removeVerticesData(FF) {
        this._vertexBuffers[FF] && (this._vertexBuffers[FF].dispose(), delete this._vertexBuffers[FF]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const AF = FF.getKind();
        this._vertexBuffers[AF] && SF && this._vertexBuffers[AF].dispose(), FF._buffer && FF._ownsBuffer && FF._buffer._increaseReferences(), this._vertexBuffers[AF] = FF;
        const uF = this._meshes,
          bW = uF.length;
        if (AF === hF.k.PositionKind) {
          this._totalVertices = WF ?? FF._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : FF.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const SF = this._extend && this._extend.minimum || new CF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            AF = this._extend && this._extend.maximum || new CF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let FF = 0; FF < bW; FF++) {
            const WF = uF[FF];
            WF.buildBoundingInfo(SF, AF), WF._createGlobalSubMesh(WF.isUnIndexed), WF.computeWorldMatrix(!0), WF.synchronizeInstances()
          }
        }
        this._notifyUpdate(AF)
      }
      updateVerticesDataDirectly(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AF = this.getVertexBuffer(FF);
        AF && (AF.updateDirectly(WF, SF, CF), this._notifyUpdate(FF))
      }
      updateVerticesData(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this.getVertexBuffer(FF);
        CF && (CF.update(WF), FF === hF.k.PositionKind && this._updateBoundingInfo(SF, WF), this._notifyUpdate(FF))
      }
      _updateBoundingInfo(FF, WF) {
        if (FF && this._updateExtend(WF), this._resetPointsArrayCache(), FF) {
          const FF = this._meshes;
          for (const WF of FF) {
            WF.hasBoundingInfo ? WF.JWF().reConstruct(this._extend.minimum, this._extend.maximum) : WF.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const FF = WF.Om;
            for (const WF of FF) WF.refreshBoundingInfo()
          }
        }
      }
      _bind(FF, WF, SF, CF) {
        if (!FF) return;
        void 0 === WF && (WF = this._indexBuffer);
        const AF = this.getVertexBuffers();
        if (!AF) return;
        if (WF != this._indexBuffer || !this._vertexArrayObjects && !CF) return void this._engine.bindBuffers(AF, WF, FF, SF);
        const uF = CF || this._vertexArrayObjects,
          hF = this._engine;
        uF[FF.key] || (uF[FF.key] = hF.recordVertexArrayObject(AF, WF, FF, SF)), hF.bindVertexArrayObject(uF[FF.key], WF)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(FF, WF, SF) {
        const CF = this.getVertexBuffer(FF);
        return CF ? CF.getFloatData(this._totalVertices, SF || WF && 1 !== this._meshes.length) : null
      }
      copyVerticesData(FF, WF) {
        const SF = this.getVertexBuffer(FF);
        if (!SF) return;
        WF[FF] || (WF[FF] = new Float32Array(this._totalVertices * SF.getSize()));
        const CF = SF.getData();
        CF && (0, gW.i)(CF, SF.getSize(), SF.type, SF.byteOffset, SF.byteStride, SF.normalized, this._totalVertices, WF[FF])
      }
      isVertexBufferUpdatable(FF) {
        const WF = this._vertexBuffers[FF];
        return !!WF && WF.isUpdatable()
      }
      getVertexBuffer(FF) {
        return this.isReady() ? this._vertexBuffers[FF] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(FF) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[FF] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(FF)
      }
      getVerticesDataKinds() {
        const FF = [];
        let WF;
        if (!this._vertexBuffers && this._delayInfo)
          for (WF in this._delayInfo) FF.push(WF);
        else
          for (WF in this._vertexBuffers) FF.push(WF);
        return FF
      }
      updateIndices(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const CF = FF.length !== this._indices.length;
            if (SF || (this._indices = FF.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, FF, WF), CF)
              for (const FF of this._meshes) FF._createGlobalSubMesh(!0)
          } else this.setIndices(FF, null, !0)
      }
      setIndexBuffer(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = FF, this._totalVertices = WF, this._totalIndices = SF, FF.is32Bits = null === CF ? WF > 65535 : CF;
        for (const AF of this._meshes) AF._createGlobalSubMesh(!0), AF.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = FF, this._indexBufferIsUpdatable = SF, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, SF, "Geometry_" + this.id + "_IndexBuffer")), void 0 != WF && (this._totalVertices = WF);
        for (const AF of this._meshes) AF._createGlobalSubMesh(!CF), AF.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      yEF(FF, WF) {
        if (!this.isReady()) return null;
        const SF = this._indices;
        return WF || FF && 1 !== this._meshes.length ? SF.slice() : SF
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        FF && this._vertexArrayObjects && this._vertexArrayObjects[FF.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[FF.key]), delete this._vertexArrayObjects[FF.key])
      }
      releaseForMesh(FF, WF) {
        const SF = this._meshes,
          CF = SF.indexOf(FF); - 1 !== CF && (SF.splice(CF, 1), this._vertexArrayObjects && FF._invalidateInstanceVertexArrayObject(), FF._geometry = null, 0 === SF.length && WF && this.dispose())
      }
      applyToMesh(FF) {
        if (FF._geometry === this) return;
        const WF = FF._geometry;
        WF && WF.releaseForMesh(FF), this._vertexArrayObjects && FF._invalidateInstanceVertexArrayObject();
        const SF = this._meshes;
        FF._geometry = this, FF._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), SF.push(FF), this.isReady() ? this._applyToMesh(FF) : this._boundingInfo && FF.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!FF && (FF = this.getVerticesData(hF.k.PositionKind), !FF)) return;
          this._extend = (0, EF.f)(FF, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(FF) {
        for (const WF in this._vertexBuffers) {
          const SF = this._vertexBuffers[WF];
          SF._buffer.getBuffer() || SF.create(), WF === hF.k.PositionKind && (this._extend || this._updateExtend(), FF.buildBoundingInfo(this._extend.minimum, this._extend.maximum), FF._createGlobalSubMesh(FF.isUnIndexed), FF._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), FF._syncGeometryWithMorphTargetManager(), FF.synchronizeInstances()
      }
      _notifyUpdate(FF) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, FF), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const WF of this._meshes) WF._markSubMeshesAsAttributesDirty()
      }
      load(FF, WF) {
        2 !== this.delayLoadState && (this.isReady() ? WF && WF() : (this.delayLoadState = 2, this._queueLoad(FF, WF)))
      }
      _queueLoad(FF, WF) {
        this.delayLoadingFile && (FF.addPendingData(this), (async () => {
          try {
            const SF = await FF._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void FF.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(SF), this), this.delayLoadState = 1, this._delayInfo = [], FF.removePendingData(this);
            const CF = this._meshes,
              AF = CF.length;
            for (let FF = 0; FF < AF; FF++) this._applyToMesh(CF[FF]);
            WF && WF()
          } catch (SF) {
            FF.removePendingData(this), FF.ZdF || iW.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${SF}`)
          }
        })())
      }
      toLeftHanded() {
        const FF = this.yEF(!1);
        if (null != FF && FF.length > 0) {
          for (let WF = 0; WF < FF.length; WF += 3) {
            const SF = FF[WF + 0];
            FF[WF + 0] = FF[WF + 2], FF[WF + 2] = SF
          }
          this.setIndices(FF)
        }
        const WF = this.getVerticesData(hF.k.PositionKind, !1);
        if (null != WF && WF.length > 0) {
          for (let FF = 0; FF < WF.length; FF += 3) WF[FF + 2] = -WF[FF + 2];
          this.setVerticesData(hF.k.PositionKind, WF, !1)
        }
        const SF = this.getVerticesData(hF.k.NormalKind, !1);
        if (null != SF && SF.length > 0) {
          for (let FF = 0; FF < SF.length; FF += 3) SF[FF + 2] = -SF[FF + 2];
          this.setVerticesData(hF.k.NormalKind, SF, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const FF = this.getVerticesData(hF.k.PositionKind);
        if (!FF || 0 === FF.length) return !1;
        for (let WF = 3 * this._positionsCache.length, SF = this._positionsCache.length; WF < FF.length; WF += 3, ++SF) this._positionsCache[SF] = CF.r.FromArray(FF, WF);
        for (let WF = 0, SF = 0; WF < FF.length; WF += 3, ++SF) this._positionsCache[SF].set(FF[0 + WF], FF[1 + WF], FF[2 + WF]);
        return this._positionsCache.length = FF.length / 3, this._positions = this._positionsCache, !0
      }
      ZdF() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const SF in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[SF]);
          this._vertexArrayObjects = {};
          const FF = this._meshes,
            WF = FF.length;
          for (let SF = 0; SF < WF; SF++) FF[SF]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const FF = this._meshes,
          WF = FF.length;
        let SF;
        for (SF = 0; SF < WF; SF++) this.releaseForMesh(FF[SF]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const CF in this._vertexBuffers) this._vertexBuffers[CF].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const FF = this._parentContainer.geometries.indexOf(this);
          FF > -1 && this._parentContainer.geometries.splice(FF, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(FF) {
        const WF = new tW(FF, this._scene),
          SF = this.yEF(void 0, !0);
        SF && WF.setIndices(SF);
        let CF, AF = !1;
        for (CF in this._vertexBuffers) {
          const FF = this.getVertexBuffer(CF),
            SF = FF.getData();
          if (!SF) continue;
          const uF = FF.isUpdatable(),
            bW = FF.getSize(),
            {
              type: dF,
              byteOffset: PF,
              byteStride: RF,
              normalized: iW
            } = FF;
          AF = AF || uF;
          let eF = this._totalVertices;
          if (FF.getIsInstanced()) {
            let FF;
            FF = SF instanceof Array ? 4 * SF.length : SF.byteLength, eF = FF / RF
          }
          const EF = (0, gW.x)(SF, bW, dF, PF, RF, eF, !0),
            QF = new hF.k(this._engine, EF, CF, {
              updatable: uF,
              useBytes: !1,
              stride: bW,
              size: bW,
              offset: 0,
              type: dF,
              normalized: iW,
              takeBufferOwnership: !0,
              instanced: FF.getIsInstanced()
            });
          WF.setVerticesBuffer(QF, eF)
        }
        for (CF in WF._updatable = AF, WF.delayLoadState = this.delayLoadState, WF.delayLoadingFile = this.delayLoadingFile, WF._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) WF._delayInfo = WF._delayInfo || [], WF._delayInfo.push(CF);
        return WF._boundingInfo = new PF.b(this._extend.minimum, this._extend.maximum), WF
      }
      serialize() {
        const FF = {};
        return FF.id = this.id, FF.uniqueId = this.uniqueId, FF.updatable = this._updatable, eF.d && eF.d.HasTags(this) && (FF.tags = eF.d.GetTags(this)), FF
      }
      _toNumberArray(FF) {
        return Array.isArray(FF) ? FF : Array.prototype.slice.call(FF)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const FF in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, FF) && (this._vertexBuffers[FF]._buffer._data = null)
      }
      serializeVerticeData() {
        const FF = this.serialize();
        return this.isVerticesDataPresent(hF.k.PositionKind) && (FF.positions = this._toNumberArray(this.getVerticesData(hF.k.PositionKind)), this.isVertexBufferUpdatable(hF.k.PositionKind) && (FF.positionsUpdatable = !0)), this.isVerticesDataPresent(hF.k.NormalKind) && (FF.normals = this._toNumberArray(this.getVerticesData(hF.k.NormalKind)), this.isVertexBufferUpdatable(hF.k.NormalKind) && (FF.normalsUpdatable = !0)), this.isVerticesDataPresent(hF.k.TangentKind) && (FF.tangents = this._toNumberArray(this.getVerticesData(hF.k.TangentKind)), this.isVertexBufferUpdatable(hF.k.TangentKind) && (FF.tangentsUpdatable = !0)), this.isVerticesDataPresent(hF.k.UVKind) && (FF.uvs = this._toNumberArray(this.getVerticesData(hF.k.UVKind)), this.isVertexBufferUpdatable(hF.k.UVKind) && (FF.uvsUpdatable = !0)), this.isVerticesDataPresent(hF.k.UV2Kind) && (FF.uvs2 = this._toNumberArray(this.getVerticesData(hF.k.UV2Kind)), this.isVertexBufferUpdatable(hF.k.UV2Kind) && (FF.uvs2Updatable = !0)), this.isVerticesDataPresent(hF.k.UV3Kind) && (FF.uvs3 = this._toNumberArray(this.getVerticesData(hF.k.UV3Kind)), this.isVertexBufferUpdatable(hF.k.UV3Kind) && (FF.uvs3Updatable = !0)), this.isVerticesDataPresent(hF.k.UV4Kind) && (FF.uvs4 = this._toNumberArray(this.getVerticesData(hF.k.UV4Kind)), this.isVertexBufferUpdatable(hF.k.UV4Kind) && (FF.uvs4Updatable = !0)), this.isVerticesDataPresent(hF.k.UV5Kind) && (FF.uvs5 = this._toNumberArray(this.getVerticesData(hF.k.UV5Kind)), this.isVertexBufferUpdatable(hF.k.UV5Kind) && (FF.uvs5Updatable = !0)), this.isVerticesDataPresent(hF.k.UV6Kind) && (FF.uvs6 = this._toNumberArray(this.getVerticesData(hF.k.UV6Kind)), this.isVertexBufferUpdatable(hF.k.UV6Kind) && (FF.uvs6Updatable = !0)), this.isVerticesDataPresent(hF.k.ColorKind) && (FF.colors = this._toNumberArray(this.getVerticesData(hF.k.ColorKind)), this.isVertexBufferUpdatable(hF.k.ColorKind) && (FF.colorsUpdatable = !0)), this.isVerticesDataPresent(hF.k.MatricesIndicesKind) && (FF.matricesIndices = this._toNumberArray(this.getVerticesData(hF.k.MatricesIndicesKind)), FF.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(hF.k.MatricesIndicesKind) && (FF.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(hF.k.MatricesWeightsKind) && (FF.matricesWeights = this._toNumberArray(this.getVerticesData(hF.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(hF.k.MatricesWeightsKind) && (FF.matricesWeightsUpdatable = !0)), FF.indices = this._toNumberArray(this.yEF()), FF
      }
      static ExtractFromMesh(FF, WF) {
        const SF = FF._geometry;
        return SF ? SF.copy(WF) : null
      }
      static RandomId() {
        return RF.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(FF, WF) {
        for (let SF = 0; SF < WF.geometries.length; SF++)
          if (WF.geometries[SF]._loadedUniqueId === FF) return WF.geometries[SF];
        return null
      }
      static _ImportGeometry(FF, WF) {
        const SF = WF.OWF(),
          CF = FF.geometryUniqueId,
          uF = FF.geometryId;
        if (CF || uF) {
          const FF = CF ? this._GetGeometryByLoadedUniqueId(CF, SF) : SF.getGeometryById(uF);
          FF && FF.applyToMesh(WF)
        } else if (FF instanceof ArrayBuffer) {
          const SF = WF._binaryInfo;
          if (SF.positionsAttrDesc && SF.positionsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.positionsAttrDesc.offset, SF.positionsAttrDesc.count);
            WF.setVerticesData(hF.k.PositionKind, CF, !1)
          }
          if (SF.normalsAttrDesc && SF.normalsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.normalsAttrDesc.offset, SF.normalsAttrDesc.count);
            WF.setVerticesData(hF.k.NormalKind, CF, !1)
          }
          if (SF.tangetsAttrDesc && SF.tangetsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.tangetsAttrDesc.offset, SF.tangetsAttrDesc.count);
            WF.setVerticesData(hF.k.TangentKind, CF, !1)
          }
          if (SF.uvsAttrDesc && SF.uvsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvsAttrDesc.offset, SF.uvsAttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UVKind, CF, !1)
          }
          if (SF.uvs2AttrDesc && SF.uvs2AttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvs2AttrDesc.offset, SF.uvs2AttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UV2Kind, CF, !1)
          }
          if (SF.uvs3AttrDesc && SF.uvs3AttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvs3AttrDesc.offset, SF.uvs3AttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UV3Kind, CF, !1)
          }
          if (SF.uvs4AttrDesc && SF.uvs4AttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvs4AttrDesc.offset, SF.uvs4AttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UV4Kind, CF, !1)
          }
          if (SF.uvs5AttrDesc && SF.uvs5AttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvs5AttrDesc.offset, SF.uvs5AttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UV5Kind, CF, !1)
          }
          if (SF.uvs6AttrDesc && SF.uvs6AttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.uvs6AttrDesc.offset, SF.uvs6AttrDesc.count);
            if (rW.b)
              for (let FF = 1; FF < CF.length; FF += 2) CF[FF] = 1 - CF[FF];
            WF.setVerticesData(hF.k.UV6Kind, CF, !1)
          }
          if (SF.colorsAttrDesc && SF.colorsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.colorsAttrDesc.offset, SF.colorsAttrDesc.count);
            WF.setVerticesData(hF.k.ColorKind, CF, !1, SF.colorsAttrDesc.stride)
          }
          if (SF.matricesIndicesAttrDesc && SF.matricesIndicesAttrDesc.count > 0) {
            const CF = new Int32Array(FF, SF.matricesIndicesAttrDesc.offset, SF.matricesIndicesAttrDesc.count),
              AF = [];
            for (let FF = 0; FF < CF.length; FF++) {
              const WF = CF[FF];
              AF.push(255 & WF), AF.push((65280 & WF) >> 8), AF.push((16711680 & WF) >> 16), AF.push(WF >> 24 & 255)
            }
            WF.setVerticesData(hF.k.MatricesIndicesKind, AF, !1)
          }
          if (SF.matricesIndicesExtraAttrDesc && SF.matricesIndicesExtraAttrDesc.count > 0) {
            const CF = new Int32Array(FF, SF.matricesIndicesExtraAttrDesc.offset, SF.matricesIndicesExtraAttrDesc.count),
              AF = [];
            for (let FF = 0; FF < CF.length; FF++) {
              const WF = CF[FF];
              AF.push(255 & WF), AF.push((65280 & WF) >> 8), AF.push((16711680 & WF) >> 16), AF.push(WF >> 24 & 255)
            }
            WF.setVerticesData(hF.k.MatricesIndicesExtraKind, AF, !1)
          }
          if (SF.matricesWeightsAttrDesc && SF.matricesWeightsAttrDesc.count > 0) {
            const CF = new Float32Array(FF, SF.matricesWeightsAttrDesc.offset, SF.matricesWeightsAttrDesc.count);
            WF.setVerticesData(hF.k.MatricesWeightsKind, CF, !1)
          }
          if (SF.indicesAttrDesc && SF.indicesAttrDesc.count > 0) {
            const CF = new Int32Array(FF, SF.indicesAttrDesc.offset, SF.indicesAttrDesc.count);
            WF.setIndices(CF, null)
          }
          if (SF.subMeshesAttrDesc && SF.subMeshesAttrDesc.count > 0) {
            const CF = new Int32Array(FF, SF.subMeshesAttrDesc.offset, 5 * SF.subMeshesAttrDesc.count);
            WF.Om = [];
            for (let FF = 0; FF < SF.subMeshesAttrDesc.count; FF++) {
              const SF = CF[5 * FF + 0],
                AF = CF[5 * FF + 1],
                uF = CF[5 * FF + 2],
                hF = CF[5 * FF + 3],
                dF = CF[5 * FF + 4];
              bW.c.AddToMesh(SF, AF, uF, hF, dF, WF)
            }
          }
        } else if (FF.positions && FF.normals && FF.indices) {
          if (WF.setVerticesData(hF.k.PositionKind, FF.positions, FF.positions._updatable || FF.positionsUpdatable), WF.setVerticesData(hF.k.NormalKind, FF.normals, FF.normals._updatable || FF.normalsUpdatable), FF.tangents && WF.setVerticesData(hF.k.TangentKind, FF.tangents, FF.tangents._updatable || FF.tangentsUpdatable), FF.uvs && WF.setVerticesData(hF.k.UVKind, FF.uvs, FF.uvs._updatable || FF.uvsUpdatable), FF.uvs2 && WF.setVerticesData(hF.k.UV2Kind, FF.uvs2, FF.uvs2._updatable || FF.uvs2Updatable), FF.uvs3 && WF.setVerticesData(hF.k.UV3Kind, FF.uvs3, FF.uvs3._updatable || FF.uvs3Updatable), FF.uvs4 && WF.setVerticesData(hF.k.UV4Kind, FF.uvs4, FF.uvs4._updatable || FF.uvs4Updatable), FF.uvs5 && WF.setVerticesData(hF.k.UV5Kind, FF.uvs5, FF.uvs5._updatable || FF.uvs5Updatable), FF.uvs6 && WF.setVerticesData(hF.k.UV6Kind, FF.uvs6, FF.uvs6._updatable || FF.uvs6Updatable), FF.colors && WF.setVerticesData(hF.k.ColorKind, AF.i.CheckColors4(FF.colors, FF.positions.length / 3), FF.colors._updatable), FF.matricesIndices)
            if (FF.matricesIndices._isExpanded || FF.matricesIndicesExpanded) delete FF.matricesIndices._isExpanded, delete FF.matricesIndicesExpanded, WF.setVerticesData(hF.k.MatricesIndicesKind, FF.matricesIndices, FF.matricesIndices._updatable || FF.matricesIndicesUpdatable);
            else {
              const SF = [];
              for (let WF = 0; WF < FF.matricesIndices.length; WF++) {
                const CF = FF.matricesIndices[WF];
                SF.push(255 & CF), SF.push((65280 & CF) >> 8), SF.push((16711680 & CF) >> 16), SF.push(CF >> 24 & 255)
              }
              WF.setVerticesData(hF.k.MatricesIndicesKind, SF, FF.matricesIndices._updatable || FF.matricesIndicesUpdatable)
            } if (FF.matricesIndicesExtra)
            if (FF.matricesIndicesExtraExpanded || FF.matricesIndicesExtra._isExpanded) delete FF.matricesIndices._isExpanded, delete FF.matricesIndicesExtraExpanded, WF.setVerticesData(hF.k.MatricesIndicesExtraKind, FF.matricesIndicesExtra, FF.matricesIndicesExtra._updatable || FF.matricesIndicesExtraUpdatable);
            else {
              const SF = [];
              for (let WF = 0; WF < FF.matricesIndicesExtra.length; WF++) {
                const CF = FF.matricesIndicesExtra[WF];
                SF.push(255 & CF), SF.push((65280 & CF) >> 8), SF.push((16711680 & CF) >> 16), SF.push(CF >> 24 & 255)
              }
              WF.setVerticesData(hF.k.MatricesIndicesExtraKind, SF, FF.matricesIndicesExtra._updatable || FF.matricesIndicesExtraUpdatable)
            } FF.matricesWeights && (tW._CleanMatricesWeights(FF, WF), WF.setVerticesData(hF.k.MatricesWeightsKind, FF.matricesWeights, FF.matricesWeights._updatable)), FF.matricesWeightsExtra && WF.setVerticesData(hF.k.MatricesWeightsExtraKind, FF.matricesWeightsExtra, FF.matricesWeights._updatable), WF.setIndices(FF.indices, null)
        }
        if (FF.Om) {
          WF.Om = [];
          for (let SF = 0; SF < FF.Om.length; SF++) {
            const CF = FF.Om[SF];
            bW.c.AddToMesh(CF.materialIndex, CF.verticesStart, CF.verticesCount, CF.indexStart, CF.indexCount, WF)
          }
        }
        WF._shouldGenerateFlatShading && (WF.convertToFlatShadedMesh(), WF._shouldGenerateFlatShading = !1), WF.computeWorldMatrix(!0), SF.onMeshImportedObservable.notifyObservers(WF)
      }
      static _CleanMatricesWeights(FF, WF) {
        const SF = .001;
        if (!dF.c.CleanBoneMatrixWeights) return;
        let CF;
        if (!(FF.skeletonId > -1)) return;
        {
          const SF = WF.OWF().getLastSkeletonById(FF.skeletonId);
          if (!SF) return;
          CF = SF.bones.length
        }
        const AF = WF.getVerticesData(hF.k.MatricesIndicesKind),
          uF = WF.getVerticesData(hF.k.MatricesIndicesExtraKind),
          bW = FF.matricesWeights,
          PF = FF.matricesWeightsExtra,
          RF = FF.numBoneInfluencer,
          iW = bW.length;
        for (let hF = 0; hF < iW; hF += 4) {
          let FF = 0,
            WF = -1;
          for (let CF = 0; CF < 4; CF++) {
            const AF = bW[hF + CF];
            FF += AF, AF < SF && WF < 0 && (WF = CF)
          }
          if (PF)
            for (let CF = 0; CF < 4; CF++) {
              const AF = PF[hF + CF];
              FF += AF, AF < SF && WF < 0 && (WF = CF + 4)
            }
          if ((WF < 0 || WF > RF - 1) && (WF = RF - 1), FF > SF) {
            const WF = 1 / FF;
            for (let FF = 0; FF < 4; FF++) bW[hF + FF] *= WF;
            if (PF)
              for (let FF = 0; FF < 4; FF++) PF[hF + FF] *= WF
          } else WF >= 4 ? (PF[hF + WF - 4] = 1 - FF, uF[hF + WF - 4] = CF) : (bW[hF + WF] = 1 - FF, AF[hF + WF] = CF)
        }
        WF.setVerticesData(hF.k.MatricesIndicesKind, AF), FF.matricesWeightsExtra && WF.setVerticesData(hF.k.MatricesIndicesExtraKind, uF)
      }
      static Parse(FF, WF, SF) {
        const AF = new tW(FF.id, WF, void 0, FF.updatable);
        return AF._loadedUniqueId = FF.uniqueId, eF.d && eF.d.AddTagsTo(AF, FF.tags), FF.delayLoadingFile ? (AF.delayLoadState = 4, AF.delayLoadingFile = SF + FF.delayLoadingFile, AF._boundingInfo = new PF.b(CF.r.FromArray(FF.boundingBoxMinimum), CF.r.FromArray(FF.boundingBoxMaximum)), AF._delayInfo = [], FF.hasUVs && AF._delayInfo.push(hF.k.UVKind), FF.hasUVs2 && AF._delayInfo.push(hF.k.UV2Kind), FF.hasUVs3 && AF._delayInfo.push(hF.k.UV3Kind), FF.hasUVs4 && AF._delayInfo.push(hF.k.UV4Kind), FF.hasUVs5 && AF._delayInfo.push(hF.k.UV5Kind), FF.hasUVs6 && AF._delayInfo.push(hF.k.UV6Kind), FF.hasColors && AF._delayInfo.push(hF.k.ColorKind), FF.hasMatricesIndices && AF._delayInfo.push(hF.k.MatricesIndicesKind), FF.hasMatricesWeights && AF._delayInfo.push(hF.k.MatricesWeightsKind), AF._delayLoadingFunction = uF.b.ImportVertexData) : uF.b.ImportVertexData(FF, AF), WF.pushGeometry(AF, !0), AF
      }
    }
  },
  38434: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW,
      g: () => QF
    });
    var CF = SF(35623),
      AF = SF(37076),
      uF = SF(38412),
      hF = SF(38386),
      bW = SF(37069),
      dF = SF(38418),
      PF = SF(38109),
      RF = SF(35660);
    class iW extends uF.b {
      constructor(FF, WF) {
        super(FF, WF.OWF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, WF.zhF(this), this._sourceMesh = WF, this._unIndexed = WF._unIndexed, this.position.fdF(WF.position), this.rotation.fdF(WF.rotation), this.Ah.fdF(WF.Ah), WF.rotationQuaternion && (this.rotationQuaternion = WF.rotationQuaternion.clone()), this.animations = WF.animations.slice();
        for (const SF of WF.getAnimationRanges()) null != SF && this.createAnimationRange(SF.name, SF.from, SF.to);
        if (this.infiniteDistance = WF.infiniteDistance, this.setPivotMatrix(WF.getPivotMatrix()), WF.skeleton || WF.morphTargetManager || !WF.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const FF = WF.JWF();
          this.buildBoundingInfo(FF.minimum, FF.maximum)
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
      set receiveShadows(FF) {
        this._sourceMesh?.receiveShadows !== FF && AF.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(FF) {
        this._sourceMesh?.material !== FF && AF.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(FF) {
        this._sourceMesh?.visibility !== FF && AF.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(FF) {
        this._sourceMesh?.skeleton !== FF && AF.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(FF) {
        this._sourceMesh && FF !== this._sourceMesh.renderingGroupId && AF.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(FF) {
        this._sourceMesh && FF !== this._sourceMesh.meshBlendingTag && AF.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get iiF() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(FF) {
        return this._sourceMesh.createInstance(FF)
      }
      isReady() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(FF, !0)
      }
      getVerticesData(FF, WF, SF) {
        return this._sourceMesh.getVerticesData(FF, WF, SF)
      }
      copyVerticesData(FF, WF) {
        this._sourceMesh.copyVerticesData(FF, WF)
      }
      getVertexBuffer(FF, WF) {
        return this._sourceMesh.getVertexBuffer(FF, WF)
      }
      setVerticesData(FF, WF, SF, CF) {
        return this.iiF && this.iiF.setVerticesData(FF, WF, SF, CF), this.iiF
      }
      updateVerticesData(FF, WF, SF, CF) {
        return this.iiF && this.iiF.updateVerticesData(FF, WF, SF, CF), this.iiF
      }
      setIndices(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.iiF && this.iiF.setIndices(FF, WF), this.iiF
      }
      isVerticesDataPresent(FF) {
        return this._sourceMesh.isVerticesDataPresent(FF)
      }
      yEF() {
        return this._sourceMesh.yEF()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let FF, WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.JWF().isLocked) return this;
        FF = "object" === typeof WF ? WF : {
          applySkeleton: WF,
          applyMorph: SF
        };
        const CF = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(FF, null, PF.k.PositionKind), CF), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(FF, WF) {
        if (super._activate(FF, WF), this._sourceMesh.Om || AF.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, FF), WF) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== dF.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new CF.b);
          const FF = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, CF.j.HC[7].fdF(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.fdF(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.fdF(CF.j.HC[7]), this._currentLOD._masterMesh = FF, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get ZWF() {
        return !0
      }
      getLOD(FF) {
        if (!FF) return this;
        const WF = this.iiF.getLODLevels();
        if (WF && 0 !== WF.length) {
          const WF = this.JWF();
          this._currentLOD = this.iiF.getLOD(FF, WF.nPF)
        } else this._currentLOD = this.iiF;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(FF) {
        return this.iiF._preActivateForIntermediateRendering(FF)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.Om)
          for (let FF = 0; FF < this._sourceMesh.Om.length; FF++) this._sourceMesh.Om[FF].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.JWF().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(FF);
        if (bW.d.DeepCopy(this, CF, ["name", "Om", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "iiF", "ZWF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "RRF", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "XeF", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), WF && (CF.parent = WF), !SF)
          for (let AF = 0; AF < this.OWF().meshes.length; AF++) {
            const FF = this.OWF().meshes[AF];
            FF.parent === this && FF.clone(FF.name, CF)
          }
        return CF.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(CF), CF
      }
      dispose(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.fuF(this), super.dispose(FF, WF)
      }
      _serializeAsParent(FF) {
        super._serializeAsParent(FF), FF.parentId = this._sourceMesh.uniqueId, FF.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = this.clone("Clone of " + (this.name || this.id), FF || this.parent, !0, WF && WF.newSourcedMesh);
        CF && SF && SF(this, CF);
        for (const AF of this.getChildTransformNodes(!0)) AF.instantiateHierarchy(CF, WF, SF);
        return CF
      }
    }
    let eF = !1;

    function EF(FF, WF, SF, CF, AF) {
      for (let uF = 0; uF < WF.length; uF++) {
        const hF = FF[WF[uF]] ?? 0,
          bW = AF + SF[uF];
        hF.toArray ? hF.toArray(CF, bW) : hF.copyToArray ? hF.copyToArray(CF, bW) : CF[bW] = hF
      }
    }

    function QF() {
      eF || (eF = !0, hF.d._instancedMeshFactory = (FF, WF) => {
        const SF = new iW(FF, WF);
        if (WF.BWF) {
          SF.BWF = {};
          for (const FF in WF.BWF) SF.BWF[FF] = WF.BWF[FF]
        }
        return SF
      }, hF.d.prototype.UWF = function(FF, WF) {
        if (!this.BWF) {
          this.BWF = {};
          for (const FF of this.instances) FF.BWF = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.sC().getCaps().vertexArrayObject ? {} : void 0
        }), this.BWF[FF] = null, this._userInstancedBuffersStorage.strides[FF] = WF;
        const SF = this._userInstancedBuffersStorage;
        SF.interleavedKinds = [], SF.interleavedOffsets = [], SF.interleavedRowStride = 0;
        for (const CF in SF.strides) SF.interleavedKinds.push(CF), SF.interleavedOffsets.push(SF.interleavedRowStride), SF.interleavedRowStride += SF.strides[CF];
        SF.interleavedData = new Float32Array(32 * SF.interleavedRowStride);
        for (const CF in SF.interleavedBuffers) SF.interleavedBuffers[CF].buffer.dispose();
        SF.interleavedBuffers = {}, SF.vertexBuffers[FF] = null;
        for (const CF of this.instances) CF.BWF[FF] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, hF.d.prototype._processInstancedBuffers = function(FF, WF) {
        const SF = this._userInstancedBuffersStorage,
          CF = SF.interleavedRowStride;
        if (!CF) return;
        const AF = FF ? FF.length : 0,
          uF = (AF + 1) * CF;
        let hF = SF.interleavedData;
        if (hF.length < uF) {
          let FF = hF.length;
          for (; FF < uF;) FF *= 2;
          hF = SF.interleavedData = new Float32Array(FF)
        }
        const bW = SF.interleavedKinds,
          dF = SF.interleavedOffsets;
        let RF = 0;
        WF && (EF(this.BWF, bW, dF, hF, RF), RF += CF);
        for (let PF = 0; PF < AF; PF++) EF(FF[PF].BWF, bW, dF, hF, RF), RF += CF;
        let iW = "shared",
          eF = SF.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (iW = this._instanceDataStorage.engine.currentRenderPassId, SF.renderPasses || (SF.renderPasses = {}), SF.renderPasses[iW] || (SF.renderPasses[iW] = {}), eF = SF.renderPasses[iW]);
        const QF = SF.interleavedBuffers[iW];
        let rW = !QF || QF.data !== hF;
        for (let PF = 0; !rW && PF < bW.length; PF++) rW = !eF[bW[PF]];
        if (!rW) return void QF.buffer.updateDirectly(hF, 0);
        QF?.buffer.dispose();
        const gW = new PF.c(this.sC(), hF, !0, CF, !1, !0);
        for (let PF = 0; PF < bW.length; PF++) {
          const FF = bW[PF],
            WF = gW.createVertexBuffer(FF, dF[PF], SF.strides[FF]);
          WF.hashCode += WF.byteOffset * 2 ** 24, eF[FF] = WF
        }
        SF.interleavedBuffers[iW] = {
          buffer: gW,
          data: hF
        }, this._invalidateInstanceVertexArrayObject()
      }, hF.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const FF in this._userInstancedBuffersStorage.vertexArrayObjects) this.sC().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[FF]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, hF.d.prototype._disposeInstanceSpecificData = function() {
        for (const WF in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[WF].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const WF in this.BWF) this._userInstancedBuffersStorage.vertexBuffers[WF] && this._userInstancedBuffersStorage.vertexBuffers[WF].dispose();
        const FF = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (FF) {
          for (const WF in FF) FF[WF].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.BWF = {}
      }, (0, RF.f)("BABYLON.InstancedMesh", iW))
    }
  },
  38386: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => JF,
      h: () => lF,
      l: () => KF
    });
    var CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW = SF(35647),
      TF = SF(38065),
      aW = SF(38010),
      kW = SF(37069),
      qW = SF(38e3),
      VF = SF(38390),
      NF = SF(38183),
      DF = SF(35623),
      LF = SF(35678),
      mW = SF(38187),
      OF = SF(38109),
      xW = SF(38393),
      ZF = SF(38398),
      oF = SF(38412),
      YF = SF(38269),
      MF = SF(38267),
      cW = SF(38354),
      GF = SF(38420),
      zW = SF(38401),
      IF = SF(37994),
      fF = SF(37076),
      yW = SF(35660),
      sF = SF(37855),
      nF = SF(38136);
    class HF {
      constructor(FF, WF) {
        this.distanceOrScreenCoverage = FF, this.mesh = WF
      }
    }
    class KF {}
    class wF {
      constructor() {
        this.batchCache = new UF(this), this.batchCacheReplacementModeInFrozenMode = new UF(this), this.instancesBufferSize = 2048
      }
    }
    class XF {
      constructor() {
        this.renderPasses = {}
      }
    }
    class UF {
      constructor(FF) {
        this.parent = FF, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class BF {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class jW {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const vW = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class JF extends oF.b {
      static _GetDefaultSideOrientation(FF) {
        return FF || JF.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(FF) {
        this._internalMeshDataInfo._useLODScreenCoverage = FF, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(FF) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== FF && (FF && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(OF.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(OF.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = FF, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new tW.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new tW.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new tW.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new tW.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new tW.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(FF) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(FF)
      }
      get RRF() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(FF) {
        this._internalMeshDataInfo._forcedInstanceCount = FF
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(FF) {
        this._internalMeshDataInfo._sideOrientation = FF, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === FF || !this._scene.useRightHandedSystem && 0 === FF
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(FF) {
        this.sideOrientation = FF, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(FF) {
        this._internalMeshDataInfo._overrideRenderingFillMode = FF
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(FF) {
        FF && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (FF.sideOrientation = null), this._setMaterial(FF)
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
      set isUnIndexed(FF) {
        this._unIndexed !== FF && (this._unIndexed = FF, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const FF = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return FF ? FF.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const FF = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return FF ? FF.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(FF) {
        this._instanceDataStorage.manualUpdate = FF
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(FF) {
        this._instanceDataStorage.previousManualUpdate = FF
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(FF) {
        this._instanceDataStorage.forceMatrixUpdates = FF
      }
      _copySource(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AF = this.OWF();
        if (FF._geometry && FF._geometry.applyToMesh(this), kW.d.DeepCopy(FF, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "RRF", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "ZWF", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "XeF", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = FF, AF.useClonedMeshMap && (FF._internalMeshDataInfo.meshMap || (FF._internalMeshDataInfo.meshMap = {}), FF._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = FF._originalBuilderSideOrientation, this._creationDataStorage = FF._creationDataStorage, FF._ranges) {
          const WF = FF._ranges;
          for (const FF in WF) Object.prototype.hasOwnProperty.call(WF, FF) && WF[FF] && this.createAnimationRange(FF, WF[FF].from, WF[FF].to)
        }
        if (FF.metadata && FF.metadata.clone ? this.metadata = FF.metadata.clone() : this.metadata = FF.metadata, this._internalMetadata = FF._internalMetadata, this.meshBlendingTag = FF.meshBlendingTag, qW.d && qW.d.HasTags(FF) && qW.d.AddTagsTo(this, qW.d.GetTags(FF, !0)), this.MWF(FF.isEnabled(!1)), this.parent = FF.parent, this.setPivotMatrix(FF.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + FF.id, this.material = FF.material, !WF) {
          const AF = FF.getDescendants(!0);
          for (let FF = 0; FF < AF.length; FF++) {
            const uF = AF[FF];
            uF._isMesh ? (vW.parent = this, vW.doNotCloneChildren = WF, vW.clonePhysicsImpostor = SF, vW.cloneThinInstances = CF, uF.clone(this.name + "." + uF.name, vW)) : uF.clone && uF.clone(this.name + "." + uF.name, this)
          }
        }
        if (FF.morphTargetManager && (this.morphTargetManager = FF.morphTargetManager), (0, sF.b)(AF.getPhysicsEngine)) {
          const WF = AF.getPhysicsEngine();
          if (SF && WF)
            if (1 === WF.getPluginVersion()) {
              const SF = WF.getImpostorForPhysicsObject(FF);
              SF && (this.physicsImpostor = SF.clone(this))
            } else 2 === WF.getPluginVersion() && FF.physicsBody && FF.physicsBody.clone(this)
        }
        for (let uF = 0; uF < AF.Zm.length; uF++) {
          const WF = AF.Zm[uF];
          WF.emitter === FF && WF.clone(WF.name, this)
        }
        if (this.skeleton = FF.skeleton, CF && (FF._thinInstanceDataStorage.matrixData ? (this.BuF("matrix", new Float32Array(FF._thinInstanceDataStorage.matrixData), 16, !FF._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = FF._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = FF._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = FF._thinInstanceDataStorage.matrixBufferSize, FF._userThinInstanceBuffersStorage)) {
          const WF = FF._userThinInstanceBuffersStorage;
          for (const FF in WF.data) this.BuF(FF, new Float32Array(WF.data[FF]), WF.strides[FF], !WF.vertexBuffers?.[FF]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[FF] = WF.sizes[FF]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(FF) {
        let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uF = arguments.length > 4 ? arguments[4] : void 0,
          hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(FF, SF), this._internalMeshDataInfo = new jW, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new BF, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = JF.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, SF = this.OWF(), this._instanceDataStorage = new XF, this._instanceDataStorage.engine = SF.sC(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new wF), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (FF, WF, SF) => {
          FF && SF && (this._uniformBuffer ? this.transferToEffect(WF) : SF.bindOnlyWorldMatrix(WF))
        };
        let bW = !1;
        if (CF && void 0 === CF._addToSceneRootNodes) {
          const FF = CF;
          WF = FF.parent ?? null, AF = FF.source ?? null, uF = FF.doNotCloneChildren ?? !1, hF = FF.clonePhysicsImpostor ?? !0, bW = FF.cloneThinInstances ?? !1
        } else WF = CF;
        AF && this._copySource(AF, uF, hF, bW), null !== WF && (this.parent = WF), this._instanceDataStorage.hardwareInstancedRendering = this.sC().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = FF => {
          FF.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new tW.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), AF && AF.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = 0 === this.getTotalVertices() || WF && WF.doNotInstantiate && (!0 === WF.doNotInstantiate || WF.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), FF || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        CF.parent = FF || this.parent, CF.position = this.position.clone(), CF.Ah = this.Ah.clone(), this.rotationQuaternion ? CF.rotationQuaternion = this.rotationQuaternion.clone() : CF.rotation = this.rotation.clone(), SF && SF(this, CF);
        for (const AF of this.getChildTransformNodes(!0)) "InstancedMesh" === AF.getClassName() && "Mesh" === CF.getClassName() && AF.iiF === this ? AF.instantiateHierarchy(CF, {
          doNotInstantiate: WF && WF.doNotInstantiate || !1,
          newSourcedMesh: CF
        }, SF) : AF.instantiateHierarchy(CF, WF, SF);
        return CF
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(FF) {
        let WF = super.toString(FF);
        if (WF += ", n vertices: " + this.getTotalVertices(), WF += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let SF = 0; SF < this.animations.length; SF++) WF += ", animation[0]: " + this.animations[SF].toString(FF);
        if (FF)
          if (this._geometry) {
            const FF = this.yEF(),
              SF = this.getVerticesData(OF.k.PositionKind);
            SF && FF && (WF += ", flat shading: " + (SF.length / 3 === FF.length ? "YES" : "NO"))
          } else WF += ", flat shading: UNKNOWN";
        return WF
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const FF of this.instances) FF._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const FF = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((WF, SF) => WF.distanceOrScreenCoverage < SF.distanceOrScreenCoverage ? FF : WF.distanceOrScreenCoverage > SF.distanceOrScreenCoverage ? -FF : 0))
      }
      addLODLevel(FF, WF) {
        if (WF && WF._masterMesh) return fF.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const SF = new HF(FF, WF);
        return this._internalMeshDataInfo._LODLevels.push(SF), WF && (WF._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(FF) {
        const WF = this._internalMeshDataInfo;
        for (let SF = 0; SF < WF._LODLevels.length; SF++) {
          const CF = WF._LODLevels[SF];
          if (CF.distanceOrScreenCoverage === FF) return CF.mesh
        }
        return null
      }
      removeLODLevel(FF) {
        const WF = this._internalMeshDataInfo;
        for (let SF = 0; SF < WF._LODLevels.length; SF++) WF._LODLevels[SF].mesh === FF && (WF._LODLevels.splice(SF, 1), FF && (FF._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(FF, WF) {
        const SF = this._internalMeshDataInfo;
        if (!SF._LODLevels || 0 === SF._LODLevels.length) return this;
        const CF = WF || this.JWF().nPF,
          AF = FF.mode === NF.c.ORTHOGRAPHIC_CAMERA ? FF.minZ : CF.centerWorld.subtract(FF.globalPosition).length();
        let uF = AF,
          hF = 1;
        if (SF._useLODScreenCoverage) {
          const WF = FF.screenArea;
          let SF = CF.radiusWorld * FF.minZ / AF;
          SF = SF * SF * Math.PI, uF = SF / WF, hF = -1
        }
        if (hF * SF._LODLevels[SF._LODLevels.length - 1].distanceOrScreenCoverage > hF * uF) return this.onLODLevelSelection && this.onLODLevelSelection(uF, this, this), this;
        for (let bW = 0; bW < SF._LODLevels.length; bW++) {
          const FF = SF._LODLevels[bW];
          if (hF * FF.distanceOrScreenCoverage < hF * uF) {
            if (FF.mesh) {
              if (4 === FF.mesh.delayLoadState) return FF.mesh._checkDelayState(), this;
              if (2 === FF.mesh.delayLoadState) return this;
              FF.mesh._preActivate(), FF.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(uF, this, FF.mesh), FF.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(uF, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(FF, WF, SF, CF) {
        if (!this._geometry) return null;
        let AF = CF ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[FF]?.getFloatData(this.instances.length + 1, SF || WF && 1 !== this._geometry.meshes.length);
        return AF || (AF = this._geometry.getVerticesData(FF, WF, SF)), AF
      }
      copyVerticesData(FF, WF) {
        this._geometry && this._geometry.copyVerticesData(FF, WF)
      }
      getVertexBuffer(FF, WF) {
        return this._geometry ? (WF ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[FF]) ?? this._geometry.getVertexBuffer(FF) : null
      }
      isVerticesDataPresent(FF, WF) {
        return this._geometry ? !WF && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[FF] || this._geometry.isVerticesDataPresent(FF) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(FF)
      }
      isVertexBufferUpdatable(FF, WF) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(FF);
        if (!WF) {
          const WF = this._userInstancedBuffersStorage?.vertexBuffers[FF];
          if (WF) return WF.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(FF)
      }
      getVerticesDataKinds(FF) {
        if (!this._geometry) {
          const FF = [];
          if (this._delayInfo)
            for (const WF of this._delayInfo) FF.push(WF);
          return FF
        }
        const WF = this._geometry.getVerticesDataKinds();
        if (!FF && this._userInstancedBuffersStorage)
          for (const SF in this._userInstancedBuffersStorage.vertexBuffers) - 1 === WF.indexOf(SF) && WF.push(SF);
        return WF
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      yEF(FF, WF) {
        return this._geometry ? this._geometry.yEF(FF, WF) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(FF)) return !1;
        if (!this.Om || 0 === this.Om.length) return !0;
        if (!FF) return !0;
        const SF = this.sC(),
          CF = this.OWF(),
          AF = WF || SF.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const uF = this.material || CF.defaultMaterial;
        if (uF)
          if (uF._storeEffectOnSubMeshes)
            for (const bW of this.Om) {
              const FF = bW.XC();
              if (FF)
                if (FF._storeEffectOnSubMeshes) {
                  if (!FF.isReadyForSubMesh(this, bW, AF)) return !1
                } else if (!FF.isReady(this, AF)) return !1
            } else if (!uF.isReady(this, AF)) return !1;
        const hF = SF.currentRenderPassId;
        for (const bW of this.lightSources) {
          const FF = bW.getShadowGenerators();
          if (!FF) continue;
          const WF = FF.values();
          for (let CF = WF.next(); !0 !== CF.done; CF = WF.next()) {
            const FF = CF.value;
            if (FF && (!FF.getShadowMap()?.renderList || FF.getShadowMap()?.renderList && -1 !== FF.getShadowMap()?.renderList?.indexOf(this))) {
              const WF = FF.getShadowMap().renderPassIds ?? [SF.currentRenderPassId];
              for (let CF = 0; CF < WF.length; ++CF) {
                SF.currentRenderPassId = WF[CF];
                for (const WF of this.Om)
                  if (!FF.isReady(WF, AF, WF.XC()?.needAlphaBlendingForMesh(this) ?? !1)) return SF.currentRenderPassId = hF, !1
              }
              SF.currentRenderPassId = hF
            }
          }
        }
        for (const bW of this._internalMeshDataInfo._LODLevels)
          if (bW.mesh && !bW.mesh.isReady(AF)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      UC() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(FF) {
        this._instanceDataStorage.overridenInstanceCount = FF
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const FF = this._instanceDataStorage.engine.currentRenderPassId;
        let WF = this._instanceDataStorage.renderPasses[FF];
        return WF || (WF = new wF, this._instanceDataStorage.renderPasses[FF] = WF), WF
      }
      _preActivate() {
        const FF = this._internalMeshDataInfo,
          WF = this.OWF().getRenderId();
        return FF._preActivateId === WF || (FF._preActivateId = WF, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(FF) {
        const WF = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return WF.visibleInstances && (WF.visibleInstances.intermediateDefaultRenderId = FF), this
      }
      _registerInstanceForRenderId(FF, WF) {
        const SF = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return SF.visibleInstances || (SF.visibleInstances = {
          defaultRenderId: WF,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), SF.visibleInstances[WF] || (void 0 === SF.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete SF.visibleInstances[SF.previousRenderId], SF.previousRenderId = WF, SF.visibleInstances[WF] = new Array), SF.visibleInstances[WF].push(FF), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.wC || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let FF, WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.JWF().isLocked) return this;
        FF = "object" === typeof WF ? WF : {
          applySkeleton: WF,
          applyMorph: SF
        };
        const CF = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(FF, null, OF.k.PositionKind), CF), this
      }
      _createGlobalSubMesh(FF) {
        const WF = this.getTotalVertices();
        if (!WF || !this.yEF()) return null;
        if (this.Om && this.Om.length > 0) {
          const SF = this.yEF();
          if (!SF) return null;
          const CF = SF.length;
          let AF = !1;
          if (FF) AF = !0;
          else
            for (const FF of this.Om) {
              if (FF.indexStart + FF.indexCount > CF) {
                AF = !0;
                break
              }
              if (FF.verticesStart + FF.verticesCount > WF) {
                AF = !0;
                break
              }
            }
          if (!AF) return this.Om[0]
        }
        return this.releaseSubMeshes(), new YF.c(0, 0, WF, 0, this.getTotalIndices() || (this.isUnIndexed ? WF : 0), this)
      }
      subdivide(FF) {
        if (FF < 1) return;
        const WF = this.getTotalIndices();
        let SF = WF / FF | 0,
          CF = 0;
        for (; SF % 3 !== 0;) SF++;
        this.releaseSubMeshes();
        for (let AF = 0; AF < FF && !(CF >= WF); AF++) YF.c.CreateFromIndices(0, CF, CF + SF >= WF ? WF - CF : SF, this, void 0, !1), CF += SF;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(FF, WF, SF, CF);
        else {
          const CF = new xW.b;
          CF.set(WF, FF);
          const AF = this.OWF();
          new ZF.b(ZF.b.RandomId(), AF, CF, SF, this)
        }
        return this
      }
      removeVerticesData(FF) {
        this._geometry && this._geometry.removeVerticesData(FF)
      }
      markVerticesDataAsUpdatable(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const SF = this.getVertexBuffer(FF);
        SF && SF.isUpdatable() !== WF && this.setVerticesData(FF, this.getVerticesData(FF), WF)
      }
      setVerticesBuffer(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = ZF.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(FF, SF, WF), this
      }
      updateVerticesData(FF, WF, SF, CF) {
        return this._geometry ? (CF ? (this.makeGeometryUnique(), this.updateVerticesData(FF, WF, SF, !1)) : this._geometry.updateVerticesData(FF, WF, SF), this) : this
      }
      updateMeshPositions(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const SF = this.getVerticesData(OF.k.PositionKind);
        if (!SF) return this;
        if (FF(SF), this.updateVerticesData(OF.k.PositionKind, SF, !1, !1), WF) {
          const FF = this.yEF(),
            WF = this.getVerticesData(OF.k.NormalKind);
          if (!WF) return this;
          xW.b.ComputeNormals(SF, FF, WF), this.updateVerticesData(OF.k.NormalKind, WF, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const FF = this._geometry,
          WF = this._geometry.copy(ZF.b.RandomId());
        return FF.releaseForMesh(this, !0), WF.applyToMesh(this), this
      }
      setIndexBuffer(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AF = this._geometry;
        AF || (AF = new ZF.b(ZF.b.RandomId(), this.OWF(), void 0, void 0, this)), AF.setIndexBuffer(FF, WF, SF, CF)
      }
      setIndices(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(FF, WF, SF, CF);
        else {
          const CF = new xW.b;
          CF.indices = FF;
          const AF = this.OWF();
          new ZF.b(ZF.b.RandomId(), AF, CF, SF, this, WF)
        }
        return this
      }
      updateIndices(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(FF, WF, SF), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(FF, WF, SF) {
        let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const AF = this.OWF().sC();
        let uF;
        if (this._unIndexed)
          if (this._getRenderingFillMode(SF) === MF.c.WireFrameFillMode) uF = FF._getLinesIndexBuffer(this.yEF(), AF);
          else uF = null;
        else switch (this._getRenderingFillMode(SF)) {
          case MF.c.PointFillMode:
            uF = null;
            break;
          case MF.c.WireFrameFillMode:
            uF = FF._getLinesIndexBuffer(this.yEF(), AF);
            break;
          default:
          case MF.c.TriangleFillMode:
            uF = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(WF, uF, CF)
      }
      _bindDirect(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(FF), SF && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const FF = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const WF in FF) this._userInstancedBuffersStorage.vertexBuffers[WF] = FF[WF]
          }
          this._geometry._bind(FF, WF, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(FF, WF);
        return this
      }
      _draw(FF, WF, SF) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const CF = this.OWF().sC(),
          AF = CF._currentMaterialContext,
          uF = AF && AF.useVertexPulling;
        return this._unIndexed && WF !== MF.c.WireFrameFillMode || WF == MF.c.PointFillMode ? CF.drawArraysType(WF, FF.verticesStart, FF.verticesCount, this.forcedInstanceCount || SF) : WF == MF.c.WireFrameFillMode ? CF.drawElementsType(WF, 0, FF._linesIndexCount, this.forcedInstanceCount || SF) : uF ? CF.drawArraysType(WF, FF.indexStart, FF.indexCount, this.forcedInstanceCount || SF) : CF.drawElementsType(WF, FF.indexStart, FF.indexCount, this.forcedInstanceCount || SF), this
      }
      registerBeforeRender(FF) {
        return this.onBeforeRenderObservable.add(FF), this
      }
      unregisterBeforeRender(FF) {
        return this.onBeforeRenderObservable.removeCallback(FF), this
      }
      registerAfterRender(FF) {
        return this.onAfterRenderObservable.add(FF), this
      }
      unregisterAfterRender(FF) {
        return this.onAfterRenderObservable.removeCallback(FF), this
      }
      _getInstancesRenderList(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (WF) return SF.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[FF] = !1, SF.batchCacheReplacementModeInFrozenMode.renderSelf[FF] = !0, SF.batchCacheReplacementModeInFrozenMode;
          if (SF.previousBatch) return SF.previousBatch
        }
        const CF = this.OWF(),
          AF = CF._isInIntermediateRendering(),
          uF = AF ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          hF = SF.batchCache;
        if (hF.mustReturn = !1, hF.renderSelf[FF] = WF || !uF && this.isEnabled() && this.isVisible, hF.visibleInstances[FF] = null, SF.visibleInstances && !WF) {
          const WF = SF.visibleInstances,
            uF = CF.getRenderId(),
            bW = AF ? WF.intermediateDefaultRenderId : WF.defaultRenderId;
          hF.visibleInstances[FF] = WF[uF], !hF.visibleInstances[FF] && bW && (hF.visibleInstances[FF] = WF[bW])
        }
        return hF.hardwareInstancedRendering[FF] = !WF && this._instanceDataStorage.hardwareInstancedRendering && null !== hF.visibleInstances[FF] && void 0 !== hF.visibleInstances[FF], SF.previousBatch = hF, hF
      }
      _updateInstancedBuffers(FF, WF, SF, CF, AF, uF) {
        const hF = WF.visibleInstances[FF._id],
          bW = hF ? hF.length : 0,
          dF = WF.parent,
          PF = this._instanceDataStorage;
        let RF = dF.instancesBuffer,
          iW = dF.instancesPreviousBuffer,
          eF = 0,
          EF = 0;
        const QF = WF.renderSelf[FF._id],
          rW = this._scene.floatingOriginOffset,
          gW = !RF || SF !== dF.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !dF.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || PF.isFrozen && !gW) EF = (QF ? 1 : 0) + bW;
        else {
          const WF = this.getWorldMatrix();
          if (QF) {
            this._scene.needsPreviousWorldMatrices && (PF.masterMeshPreviousWorldMatrix ? (PF.masterMeshPreviousWorldMatrix.copyToArray(dF.instancesPreviousData, eF), PF.masterMeshPreviousWorldMatrix.fdF(WF)) : (PF.masterMeshPreviousWorldMatrix = WF.clone(), PF.masterMeshPreviousWorldMatrix.copyToArray(dF.instancesPreviousData, eF))), WF.copyToArray(dF.instancesData, eF);
            const FF = WF.kRF();
            dF.instancesData[eF + 12] = FF[12] - rW.x, dF.instancesData[eF + 13] = FF[13] - rW.y, dF.instancesData[eF + 14] = FF[14] - rW.z, eF += 16, EF++
          }
          if (hF) {
            if (JF.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && FF.XC()?.needAlphaBlendingForMesh(FF.getRenderingMesh())) {
              const FF = this._scene.activeCamera.globalPosition;
              for (let WF = 0; WF < hF.length; WF++) {
                const SF = hF[WF];
                SF._distanceToCamera = DF.r.Distance(SF.JWF().nPF.centerWorld, FF)
              }
              hF.sort(((FF, WF) => FF._distanceToCamera > WF._distanceToCamera ? -1 : FF._distanceToCamera < WF._distanceToCamera ? 1 : 0))
            }
            for (let FF = 0; FF < hF.length; FF++) {
              const WF = hF[FF],
                SF = WF.getWorldMatrix();
              SF.copyToArray(dF.instancesData, eF), this._scene.needsPreviousWorldMatrices && (WF._previousWorldMatrix ? (WF._previousWorldMatrix.copyToArray(dF.instancesPreviousData, eF), WF._previousWorldMatrix.fdF(SF)) : (WF._previousWorldMatrix = SF.clone(), WF._previousWorldMatrix.copyToArray(dF.instancesPreviousData, eF)));
              const CF = SF.kRF();
              dF.instancesData[eF + 12] = CF[12] - rW.x, dF.instancesData[eF + 13] = CF[13] - rW.y, dF.instancesData[eF + 14] = CF[14] - rW.z, eF += 16, EF++
            }
          }
        }
        if (gW) {
          let FF;
          if (RF && RF.dispose(), iW && iW.dispose(), RF = new OF.c(CF, dF.instancesData, !0, 16, !1, !0), dF.instancesBuffer = RF, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.sC().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) FF = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const WF = this._instanceDataStorage.engine.currentRenderPassId;
            FF = this._userInstancedBuffersStorage.renderPasses[WF], FF || (this._userInstancedBuffersStorage.renderPasses[WF] = FF = {})
          }
          FF.world0 = RF.createVertexBuffer("world0", 0, 4), FF.world1 = RF.createVertexBuffer("world1", 4, 4), FF.world2 = RF.createVertexBuffer("world2", 8, 4), FF.world3 = RF.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (iW = new OF.c(CF, dF.instancesPreviousData, !0, 16, !1, !0), dF.instancesPreviousBuffer = iW, FF.previousWorld0 = iW.createVertexBuffer("previousWorld0", 0, 4), FF.previousWorld1 = iW.createVertexBuffer("previousWorld1", 4, 4), FF.previousWorld2 = iW.createVertexBuffer("previousWorld2", 8, 4), FF.previousWorld3 = iW.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (RF.updateDirectly(dF.instancesData, 0, EF), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || iW.updateDirectly(dF.instancesPreviousData, 0, EF));
        this._processInstancedBuffers(hF, QF), uF && void 0 !== AF && (this.OWF()._activeIndices.addCount(FF.indexCount * EF, !1), CF._currentDrawContext && (CF._currentDrawContext.useInstancing = !0), this._bind(FF, uF, AF), this._draw(FF, AF, EF)), !this._scene.needsPreviousWorldMatrices || gW || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || iW.updateDirectly(dF.instancesData, 0, EF)
      }
      _renderWithInstances(FF, WF, SF, CF, AF) {
        const uF = SF.visibleInstances[FF._id],
          hF = uF ? uF.length : 0,
          bW = SF.parent,
          dF = bW.instancesBufferSize,
          PF = 16 * (hF + 1) * 4;
        for (; bW.instancesBufferSize < PF;) bW.instancesBufferSize *= 2;
        return bW.instancesData && dF == bW.instancesBufferSize || (bW.instancesData = new Float32Array(bW.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !bW.instancesPreviousData || dF != bW.instancesBufferSize) && (bW.instancesPreviousData = new Float32Array(bW.instancesBufferSize / 4)), this._updateInstancedBuffers(FF, SF, dF, AF, WF, CF), AF.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(FF, WF, SF, CF) {
        const AF = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.OWF()._activeIndices.addCount(FF.indexCount * AF, !1), CF._currentDrawContext && (CF._currentDrawContext.useInstancing = !0), this._bind(FF, SF, WF), this._draw(FF, WF, AF), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, AF) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), CF.unbindInstanceAttributes()
      }
      _processInstancedBuffers(FF, WF) {}
      _processRendering(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = this.OWF(),
          PF = dF.sC();
        if (CF = this._getRenderingFillMode(CF), uF && WF.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(WF, CF, SF, PF), this;
        if (uF) this._renderWithInstances(WF, CF, AF, SF, PF);
        else {
          PF._currentDrawContext && (PF._currentDrawContext.useInstancing = !1);
          let SF = 0;
          AF.renderSelf[WF._id] && (hF && hF(!1, FF.getWorldMatrix(), bW), SF++, this._draw(WF, CF, this._instanceDataStorage.overridenInstanceCount));
          const uF = AF.visibleInstances[WF._id];
          if (uF) {
            const FF = uF.length;
            SF += FF;
            for (let SF = 0; SF < FF; SF++) {
              const FF = uF[SF].getWorldMatrix();
              hF && hF(!0, FF, bW), this._draw(WF, CF)
            }
          }
          dF._activeIndices.addCount(WF.indexCount * SF, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        FF?.instancesBuffer && (WF && FF.instancesBuffer.dispose(), FF.instancesBuffer = null), FF?.instancesPreviousBuffer && (WF && FF.instancesPreviousBuffer.dispose(), FF.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const WF in this._instanceDataStorage.renderPasses) {
          const SF = this._instanceDataStorage.renderPasses[WF];
          this._disposeInstanceDataStorageRenderPass(SF, FF)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, FF), this._userInstancedBuffersStorage) {
          for (const WF in this._userInstancedBuffersStorage.vertexBuffers) {
            const SF = this._userInstancedBuffersStorage.vertexBuffers[WF];
            SF && (FF && SF.dispose(), this._userInstancedBuffersStorage.vertexBuffers[WF] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(FF)
      }
      _releaseRenderPassId(FF) {
        const WF = this._instanceDataStorage.renderPasses[FF];
        if (WF && (this._disposeInstanceDataStorageRenderPass(WF, !0), delete this._instanceDataStorage.renderPasses[FF]), this._userInstancedBuffersStorage?.renderPasses) {
          const WF = this._userInstancedBuffersStorage.renderPasses[FF];
          if (WF)
            for (const FF in WF) WF[FF]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[FF]
        }
        const SF = this._userInstancedBuffersStorage?.interleavedBuffers;
        SF?.[FF] && (SF[FF].buffer.dispose(), delete SF[FF])
      }
      _freeze() {
        if (this.Om) {
          for (let FF = 0; FF < this.Om.length; FF++) this._getInstancesRenderList(FF);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const FF in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[FF].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const uF = this._scene.sC(),
          hF = uF.currentRenderPassId;
        if (void 0 !== FF && (uF.currentRenderPassId = FF), CF)(!AF || AF && CF.isInFrustum(this._scene._frustumPlanes)) && this.render(CF, !!WF, SF);
        else
          for (let bW = 0; bW < this.Om.length; bW++) {
            const FF = this.Om[bW];
            (!AF || AF && FF.isInFrustum(this._scene._frustumPlanes)) && this.render(FF, !!WF, SF)
          }
        return void 0 !== FF && (uF.currentRenderPassId = hF), this
      }
      directRender() {
        if (!this.Om) return this;
        for (const FF of this.Om) this.render(FF, !1);
        return this
      }
      render(FF, WF, SF) {
        const CF = this.OWF(),
          AF = CF.sC();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const uF = CF.activeCameras?.length ?? 0,
          hF = uF > 1 && CF.activeCamera === CF.activeCameras[0] || uF <= 1,
          bW = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== AF.currentRenderPassId;
        if (hF && this._checkOcclusionQuery(bW) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const dF = this._getInstancesRenderList(FF._id, !!SF);
        if (dF.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let PF = 0,
          RF = null;
        this.ignoreCameraMaxZ && CF.activeCamera && !CF._isInIntermediateRendering() && (PF = CF.activeCamera.maxZ, RF = CF.activeCamera, CF.activeCamera.maxZ = 0, CF.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const iW = FF.getRenderingMesh(),
          eF = dF.hardwareInstancedRendering[FF._id] || iW.hasThinInstances || !!this._userInstancedBuffersStorage && !FF.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          EF = this._instanceDataStorage,
          QF = FF.XC();
        if (!QF) return RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), this;
        if (EF.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === QF) {
          if (QF._storeEffectOnSubMeshes && !FF._drawWrapper?._wasPreviouslyReady || !QF._storeEffectOnSubMeshes && !QF._getDrawWrapper()._wasPreviouslyReady) return RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), this
        } else {
          if (QF._storeEffectOnSubMeshes) {
            if (!QF.isReadyForSubMesh(this, FF, eF)) return RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), this
          } else if (!QF.isReady(this, eF)) return RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = QF
        }
        if (WF) {
          const FF = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === FF.alphaModes.length) AF.setAlphaMode(FF.alphaMode);
          else
            for (let WF = 0; WF < FF.alphaModes.length; WF++) {
              const SF = FF.alphaModes[WF];
              AF.setAlphaMode(void 0 !== SF ? SF : 2, !1, WF)
            }
        }
        let rW;
        rW = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? FF._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const gW = rW?.effect ?? null;
        for (let NF = 0, DF = CF._beforeRenderingMeshStage; NF < DF.length; NF++) {
          DF[NF].action(this, FF, dF, gW)
        }
        if (!rW || !gW) return RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), this;
        const tW = SF || this;
        let TF;
        if (!EF.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const FF = tW._getWorldMatrixDeterminant();
          TF = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), FF < 0 && (TF = TF === MF.c.ClockWiseSideOrientation ? MF.c.CounterClockWiseSideOrientation : MF.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = TF
        }
        const aW = this._internalMeshDataInfo._effectiveMaterial._preBind(rW, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && AF.setDepthWrite(!0);
        const kW = this._internalMeshDataInfo._effectiveMaterial,
          qW = kW.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), eF || this._bind(FF, gW, qW, !1);
        const VF = tW.getWorldMatrix();
        kW._storeEffectOnSubMeshes ? kW.bindForSubMesh(VF, this, FF) : kW.bind(VF, this);
        try {
          cW.e._BindAttachmentsForEffect(AF, gW) && (!kW.backFaceCulling && kW.separateCullingPass && (AF.setState(!0, kW.zOffset, !1, !aW, kW.cullBackFaces, kW.stencil, kW.zOffsetUnits), this._processRendering(this, FF, gW, qW, dF, eF, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), AF.setState(!0, kW.zOffset, !1, aW, kW.cullBackFaces, kW.stencil, kW.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(FF)), this._processRendering(this, FF, gW, qW, dF, eF, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          cW.e._RestoreAttachments(AF)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let NF = 0, DF = CF._afterRenderingMeshStage; NF < DF.length; NF++) {
          DF[NF].action(this, FF, dF, gW)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), RF && (RF.maxZ = PF, CF.updateTransformMatrix(!0)), 2 !== CF.performancePriority || EF.isFrozen || this._freeze(), this
      }
      _renderRunFollower(FF, WF) {
        const SF = this._scene,
          CF = SF._engine;
        if (CF.isWebGPU || FF._mesh !== this || 0 !== this.instances.length || this.render !== JF.prototype.render) return !1;
        const AF = FF.XC();
        if (!AF || AF !== SF._cachedMaterial || void 0 === AF._canBindRunFollower) return !1;
        const uF = FF._drawWrapper,
          hF = uF?.effect;
        if (!hF || hF !== SF._cachedEffect || this.visibility !== SF._cachedVisibility || uF._forceRebindOnNextCall) return !1;
        const bW = this.hasThinInstances;
        if (!bW && this._userInstancedBuffersStorage) return !1;
        if (!uF._wasPreviouslyReady || uF._wasPreviouslyUsingInstances !== bW) return !1;
        const dF = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || SF._isInIntermediateRendering() || 0 !== SF._beforeRenderingMeshStage.length || 0 !== SF._afterRenderingMeshStage.length || dF._onBeforeRenderObservable?.hasObservers() || dF._onBeforeBindObservable?.hasObservers() || dF._onAfterRenderObservable?.hasObservers()) return !1;
        const PF = this.occlusionType;
        if (void 0 !== PF && PF !== oF.b.OCCLUSION_TYPE_NONE || !AF._canBindRunFollower(SF, CF, this, FF, hF)) return !1;
        const RF = this._internalAbstractMeshDataInfo,
          iW = RF._isActiveIntermediate;
        iW ? RF._isActiveIntermediate = !1 : RF._isActive = !1;
        const eF = SF.activeCameras?.length ?? 0;
        (eF > 1 && SF.activeCamera === SF.activeCameras[0] || eF <= 1) && this._checkOcclusionQuery(!1);
        const EF = this._getInstancesRenderList(FF._id);
        if (EF.mustReturn) return !0;
        if (!bW && !EF.renderSelf[FF._id]) return iW ? RF._isActiveIntermediate = !0 : RF._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (dF._effectiveMaterial = AF, WF)
          if (1 === AF.alphaModes.length) CF.setAlphaMode(AF.alphaMode);
          else
            for (let rW = 0; rW < AF.alphaModes.length; rW++) {
              const FF = AF.alphaModes[rW];
              CF.setAlphaMode(void 0 !== FF ? FF : 2, !1, rW)
            }
        if (AF.backFaceCulling || null !== AF.sideOrientation || AF._twoSidedLighting) {
          const FF = this._getWorldMatrixDeterminant();
          let WF = AF._getEffectiveOrientation(this);
          FF < 0 && (WF = WF === MF.c.ClockWiseSideOrientation ? MF.c.CounterClockWiseSideOrientation : MF.c.ClockWiseSideOrientation), dF._effectiveSideOrientation = WF
        }
        AF._preBind(uF, dF._effectiveSideOrientation), AF.forceDepthWrite && CF.setDepthWrite(!0);
        const QF = AF.fillMode;
        return bW || this._bind(FF, hF, QF, !1), AF._bindRunFollower(this.getWorldMatrix(), this, FF, hF), this._processRendering(this, FF, hF, QF, EF, bW, this._onBeforeDraw, AF), AF.unbind(), 2 === SF.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(OF.k.MatricesWeightsKind) && (this.isVerticesDataPresent(OF.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const FF = this.getVerticesData(OF.k.MatricesWeightsKind),
          WF = FF.length;
        for (let SF = 0; SF < WF; SF += 4) {
          const WF = FF[SF] + FF[SF + 1] + FF[SF + 2] + FF[SF + 3];
          if (0 === WF) FF[SF] = 1;
          else {
            const CF = 1 / WF;
            FF[SF] *= CF, FF[SF + 1] *= CF, FF[SF + 2] *= CF, FF[SF + 3] *= CF
          }
        }
        this.setVerticesData(OF.k.MatricesWeightsKind, FF)
      }
      _normalizeSkinWeightsAndExtra() {
        const FF = this.getVerticesData(OF.k.MatricesWeightsExtraKind),
          WF = this.getVerticesData(OF.k.MatricesWeightsKind),
          SF = WF.length;
        for (let CF = 0; CF < SF; CF += 4) {
          let SF = WF[CF] + WF[CF + 1] + WF[CF + 2] + WF[CF + 3];
          if (SF += FF[CF] + FF[CF + 1] + FF[CF + 2] + FF[CF + 3], 0 === SF) WF[CF] = 1;
          else {
            const AF = 1 / SF;
            WF[CF] *= AF, WF[CF + 1] *= AF, WF[CF + 2] *= AF, WF[CF + 3] *= AF, FF[CF] *= AF, FF[CF + 1] *= AF, FF[CF + 2] *= AF, FF[CF + 3] *= AF
          }
        }
        this.setVerticesData(OF.k.MatricesWeightsKind, WF), this.setVerticesData(OF.k.MatricesWeightsKind, FF)
      }
      validateSkinning() {
        const FF = this.getVerticesData(OF.k.MatricesWeightsExtraKind),
          WF = this.getVerticesData(OF.k.MatricesWeightsKind);
        if (null === WF || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          SC: "not skinned"
        };
        const SF = WF.length;
        let CF = 0,
          AF = 0,
          uF = 0,
          hF = 0;
        const bW = null === FF ? 4 : 8,
          dF = [];
        for (let EF = 0; EF <= bW; EF++) dF[EF] = 0;
        for (let EF = 0; EF < SF; EF += 4) {
          let SF = WF[EF],
            PF = SF,
            RF = 0 === PF ? 0 : 1;
          for (let AF = 1; AF < bW; AF++) {
            const uF = AF < 4 ? WF[EF + AF] : FF[EF + AF - 4];
            uF > SF && CF++, 0 !== uF && RF++, PF += uF, SF = uF
          }
          if (dF[RF]++, RF > uF && (uF = RF), 0 === PF) AF++;
          else {
            const SF = 1 / PF;
            let CF = 0;
            for (let AF = 0; AF < bW; AF++) CF += AF < 4 ? Math.abs(WF[EF + AF] - WF[EF + AF] * SF) : Math.abs(FF[EF + AF - 4] - FF[EF + AF - 4] * SF);
            CF > .001 && hF++
          }
        }
        const PF = this.skeleton.bones.length,
          RF = this.getVerticesData(OF.k.MatricesIndicesKind),
          iW = this.getVerticesData(OF.k.MatricesIndicesExtraKind);
        let eF = 0;
        for (let EF = 0; EF < SF; EF += 4)
          for (let FF = 0; FF < bW; FF++) {
            const WF = FF < 4 ? RF[EF + FF] : iW[EF + FF - 4];
            (WF >= PF || WF < 0) && eF++
          }
        return {
          skinned: !0,
          valid: 0 === AF && 0 === hF && 0 === eF,
          SC: "Number of Weights = " + SF / 4 + "\nMaximum influences = " + uF + "\nMissing Weights = " + AF + "\nNot Sorted = " + CF + "\nNot Normalized = " + hF + "\nWeightCounts = [" + dF + "]\nNumber of bones = " + PF + "\nBad Bone Indices = " + eF
        }
      }
      _checkDelayState() {
        const FF = this.OWF();
        return this._geometry ? this._geometry.load(FF) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(FF)), this
      }
      _queueLoad(FF) {
        FF.addPendingData(this);
        const WF = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const SF = await FF._loadDelayedFileAsync(this.delayLoadingFile, WF, !0);
            SF instanceof ArrayBuffer ? this._delayLoadingFunction(SF, this) : this._delayLoadingFunction(JSON.parse(SF), this);
            for (const FF of this.instances) FF.refreshBoundingInfo(), FF._syncSubMeshes();
            this.delayLoadState = 1, FF.removePendingData(this)
          } catch (SF) {
            FF.removePendingData(this), FF.ZdF || fF.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${SF}`)
          }
        })(), this
      }
      isInFrustum(FF) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(FF) && (this._checkDelayState(), !0))
      }
      setMaterialById(FF) {
        const WF = this.OWF().materials;
        let SF;
        for (SF = WF.length - 1; SF > -1; SF--)
          if (WF[SF].id === FF) return this.material = WF[SF], this;
        const CF = this.OWF().multiMaterials;
        for (SF = CF.length - 1; SF > -1; SF--)
          if (CF[SF].id === FF) return this.material = CF[SF], this;
        return this
      }
      getAnimatables() {
        const FF = [];
        return this.material && FF.push(this.material), this.skeleton && FF.push(this.skeleton), FF
      }
      bakeTransformIntoVertices(FF) {
        if (!this.isVerticesDataPresent(OF.k.PositionKind)) return this;
        const WF = this.Om.splice(0);
        this._resetPointsArrayCache();
        let SF = this.getVerticesData(OF.k.PositionKind);
        const CF = DF.r.Zero();
        let AF;
        for (AF = 0; AF < SF.length; AF += 3) DF.r.TransformCoordinatesFromFloatsToRef(SF[AF], SF[AF + 1], SF[AF + 2], FF, CF).toArray(SF, AF);
        if (this.setVerticesData(OF.k.PositionKind, SF, this.getVertexBuffer(OF.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(OF.k.NormalKind)) {
          for (SF = this.getVerticesData(OF.k.NormalKind), AF = 0; AF < SF.length; AF += 3) DF.r.TransformNormalFromFloatsToRef(SF[AF], SF[AF + 1], SF[AF + 2], FF, CF).normalize().toArray(SF, AF);
          this.setVerticesData(OF.k.NormalKind, SF, this.getVertexBuffer(OF.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(OF.k.TangentKind)) {
          for (SF = this.getVerticesData(OF.k.TangentKind), AF = 0; AF < SF.length; AF += 4) DF.r.TransformNormalFromFloatsToRef(SF[AF], SF[AF + 1], SF[AF + 2], FF, CF).normalize().toArray(SF, AF);
          this.setVerticesData(OF.k.TangentKind, SF, this.getVertexBuffer(OF.k.TangentKind).isUpdatable())
        }
        return FF.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Om = WF, this
      }
      bakeCurrentTransformIntoVertices() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(FF), this
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
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (WF && void 0 === WF._addToSceneRootNodes) {
          const SF = WF;
          return vW.source = this, vW.doNotCloneChildren = SF.doNotCloneChildren, vW.clonePhysicsImpostor = SF.clonePhysicsImpostor, vW.cloneThinInstances = SF.cloneThinInstances, new JF(FF, this.OWF(), vW)
        }
        return new JF(FF, this.OWF(), WF, this, SF, CF)
      }
      dispose(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const SF = this._internalMeshDataInfo;
        if (SF._onBeforeDrawObservable && SF._onBeforeDrawObservable.clear(), SF._onBeforeBindObservable && SF._onBeforeBindObservable.clear(), SF._onBeforeRenderObservable && SF._onBeforeRenderObservable.clear(), SF._onAfterRenderObservable && SF._onAfterRenderObservable.clear(), SF._onBetweenPassObservable && SF._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (SF.meshMap)
            for (const FF in SF.meshMap) {
              const WF = SF.meshMap[FF];
              WF && (WF._internalMeshDataInfo._source = null, SF.meshMap[FF] = void 0)
            }
          SF._source && SF._source._internalMeshDataInfo.meshMap && (SF._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const FF = this.OWF().meshes;
          for (const WF of FF) {
            const FF = WF;
            FF._internalMeshDataInfo && FF._internalMeshDataInfo._source && FF._internalMeshDataInfo._source === this && (FF._internalMeshDataInfo._source = null)
          }
        }
        SF._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(FF, WF)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(FF, WF, SF, CF, AF, uF) {
        let hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          bW = arguments.length > 7 ? arguments[7] : void 0;
        const dF = this.OWF();
        return (0, aW.m)(FF, (FF => {
          const bW = FF.width,
            dF = FF.height,
            PF = this.sC().createCanvas(bW, dF).getContext("2d");
          PF.drawImage(FF, 0, 0);
          const RF = PF.getImageData(0, 0, bW, dF).data;
          this.applyDisplacementMapFromBuffer(RF, bW, dF, WF, SF, AF, uF, hF), CF && CF(this)
        }), bW || (() => {}), dF.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(FF, WF, SF, CF, AF, uF, hF) {
        let bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(OF.k.PositionKind) || !this.isVerticesDataPresent(OF.k.NormalKind) || !this.isVerticesDataPresent(OF.k.UVKind)) return fF.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const dF = this.getVerticesData(OF.k.PositionKind, !0, !0),
          PF = this.getVerticesData(OF.k.NormalKind),
          RF = this.getVerticesData(OF.k.UVKind);
        let iW = DF.r.Zero();
        const eF = DF.r.Zero(),
          EF = DF.n.Zero();
        uF = uF || DF.n.Zero(), hF = hF || new DF.n(1, 1);
        for (let QF = 0; QF < dF.length; QF += 3) {
          DF.r.FromArrayToRef(dF, QF, iW), DF.r.FromArrayToRef(PF, QF, eF), DF.n.FromArrayToRef(RF, QF / 3 * 2, EF);
          const bW = 4 * ((Math.abs(EF.x * hF.x + uF.x % 1) * (WF - 1) % WF | 0) + (Math.abs(EF.y * hF.y + uF.y % 1) * (SF - 1) % SF | 0) * WF),
            rW = .3 * (FF[bW] / 255) + .59 * (FF[bW + 1] / 255) + .11 * (FF[bW + 2] / 255);
          eF.normalize(), eF.scaleInPlace(CF + (AF - CF) * rW), iW = iW.add(eF), iW.toArray(dF, QF)
        }
        return xW.b.ComputeNormals(dF, this.yEF(), PF), bW ? (this.setVerticesData(OF.k.PositionKind, dF), this.setVerticesData(OF.k.NormalKind, PF), this.setVerticesData(OF.k.UVKind, RF)) : (this.updateVerticesData(OF.k.PositionKind, dF), this.updateVerticesData(OF.k.NormalKind, PF)), this
      }
      _getFlattenedNormals(FF, WF) {
        const SF = new Float32Array(3 * FF.length);
        let CF = 0;
        const AF = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let uF = 0; uF < FF.length; uF += 3) {
          const hF = DF.r.FromArray(WF, 3 * FF[uF]),
            bW = DF.r.FromArray(WF, 3 * FF[uF + 1]),
            dF = DF.r.FromArray(WF, 3 * FF[uF + 2]),
            PF = hF.subtract(bW),
            RF = dF.subtract(bW),
            iW = DF.r.Normalize(DF.r.Cross(PF, RF));
          AF && iW.scaleInPlace(-1);
          for (let FF = 0; FF < 3; FF++) SF[CF++] = iW.x, SF[CF++] = iW.y, SF[CF++] = iW.z
        }
        return SF
      }
      _convertToUnIndexedMesh() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = this.getVerticesDataKinds().filter((FF => !this.getVertexBuffer(FF)?.getIsInstanced())),
          SF = this.yEF(!1, !0),
          CF = {},
          AF = (FF, WF) => {
            const CF = new Float32Array(SF.length * WF);
            let AF = 0;
            for (let uF = 0; uF < SF.length; uF++)
              for (let hF = 0; hF < WF; hF++) CF[AF++] = FF[SF[uF] * WF + hF];
            return CF
          },
          uF = this.JWF(),
          hF = this.geometry ? this.Om.slice(0) : [];
        for (const bW of WF) CF[bW] = this.getVerticesData(bW);
        for (const bW of WF) {
          const WF = this.getVertexBuffer(bW),
            uF = WF.getSize();
          if (FF && bW === OF.k.NormalKind) {
            const FF = this._getFlattenedNormals(SF, CF[OF.k.PositionKind]);
            this.setVerticesData(OF.k.NormalKind, FF, WF.isUpdatable(), uF)
          } else this.setVerticesData(bW, AF(CF[bW], uF), WF.isUpdatable(), uF)
        }
        if (this.morphTargetManager) {
          for (let WF = 0; WF < this.morphTargetManager.numTargets; WF++) {
            const CF = this.morphTargetManager.getTarget(WF),
              uF = CF.getPositions();
            CF.neF(AF(uF, 3));
            const hF = CF.getNormals();
            hF && CF.setNormals(FF ? this._getFlattenedNormals(SF, uF) : AF(hF, 3));
            const bW = CF.getTangents();
            bW && CF.setTangents(AF(bW, 3));
            const dF = CF.getUVs();
            dF && CF.setUVs(AF(dF, 2));
            const PF = CF.getColors();
            PF && CF.setColors(AF(PF, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let bW = 0; bW < SF.length; bW++) SF[bW] = bW;
        this.setIndices(SF), this._unIndexed = !0, this.releaseSubMeshes();
        for (const bW of hF) {
          const FF = bW.JWF();
          YF.c.AddToMesh(bW.materialIndex, bW.indexStart, bW.indexCount, bW.indexStart, bW.indexCount, this).setBoundingInfo(FF)
        }
        return this.setBoundingInfo(uF), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = xW.b.ExtractFromMesh(this);
        let SF;
        if (FF && this.isVerticesDataPresent(OF.k.NormalKind) && WF.normals) {
          for (SF = 0; SF < WF.normals.length; SF++) WF.normals[SF] *= -1;
          this.setVerticesData(OF.k.NormalKind, WF.normals, this.isVertexBufferUpdatable(OF.k.NormalKind))
        }
        if (WF.indices) {
          let FF;
          for (SF = 0; SF < WF.indices.length; SF += 3) FF = WF.indices[SF + 1], WF.indices[SF + 1] = WF.indices[SF + 2], WF.indices[SF + 2] = FF;
          this.setIndices(WF.indices, null, this.isVertexBufferUpdatable(OF.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const WF = xW.b.ExtractFromMesh(this),
          SF = WF.indices && !Array.isArray(WF.indices) && Array.from ? Array.from(WF.indices) : WF.indices,
          CF = WF.positions && !Array.isArray(WF.positions) && Array.from ? Array.from(WF.positions) : WF.positions,
          AF = WF.uvs && !Array.isArray(WF.uvs) && Array.from ? Array.from(WF.uvs) : WF.uvs,
          uF = WF.normals && !Array.isArray(WF.normals) && Array.from ? Array.from(WF.normals) : WF.normals;
        if (SF && CF) {
          WF.indices = SF, WF.positions = CF, AF && (WF.uvs = AF), uF && (WF.normals = uF);
          const hF = FF + 1,
            bW = [];
          for (let FF = 0; FF < hF + 1; FF++) bW[FF] = [];
          let dF, PF;
          const RF = new DF.r(0, 0, 0),
            iW = new DF.r(0, 0, 0),
            eF = new DF.n(0, 0),
            EF = [],
            QF = [],
            rW = [];
          let gW, tW, TF, aW = CF.length;
          AF && (tW = AF.length), uF && (TF = uF.length);
          for (let FF = 0; FF < SF.length; FF += 3) {
            QF[0] = SF[FF], QF[1] = SF[FF + 1], QF[2] = SF[FF + 2];
            for (let FF = 0; FF < 3; FF++)
              if (dF = QF[FF], PF = QF[(FF + 1) % 3], void 0 === rW[dF] && void 0 === rW[PF] ? (rW[dF] = [], rW[PF] = []) : (void 0 === rW[dF] && (rW[dF] = []), void 0 === rW[PF] && (rW[PF] = [])), void 0 === rW[dF][PF] && void 0 === rW[PF][dF]) {
                rW[dF][PF] = [], RF.x = (CF[3 * PF] - CF[3 * dF]) / hF, RF.y = (CF[3 * PF + 1] - CF[3 * dF + 1]) / hF, RF.z = (CF[3 * PF + 2] - CF[3 * dF + 2]) / hF, uF && (iW.x = (uF[3 * PF] - uF[3 * dF]) / hF, iW.y = (uF[3 * PF + 1] - uF[3 * dF + 1]) / hF, iW.z = (uF[3 * PF + 2] - uF[3 * dF + 2]) / hF), AF && (eF.x = (AF[2 * PF] - AF[2 * dF]) / hF, eF.y = (AF[2 * PF + 1] - AF[2 * dF + 1]) / hF), rW[dF][PF].push(dF);
                for (let FF = 1; FF < hF; FF++) rW[dF][PF].push(CF.length / 3), CF[aW++] = CF[3 * dF] + FF * RF.x, CF[aW++] = CF[3 * dF + 1] + FF * RF.y, CF[aW++] = CF[3 * dF + 2] + FF * RF.z, uF && (uF[TF++] = uF[3 * dF] + FF * iW.x, uF[TF++] = uF[3 * dF + 1] + FF * iW.y, uF[TF++] = uF[3 * dF + 2] + FF * iW.z), AF && (AF[tW++] = AF[2 * dF] + FF * eF.x, AF[tW++] = AF[2 * dF + 1] + FF * eF.y);
                rW[dF][PF].push(PF), rW[PF][dF] = [], gW = rW[dF][PF].length;
                for (let FF = 0; FF < gW; FF++) rW[PF][dF][FF] = rW[dF][PF][gW - 1 - FF]
              } bW[0][0] = SF[FF], bW[1][0] = rW[SF[FF]][SF[FF + 1]][1], bW[1][1] = rW[SF[FF]][SF[FF + 2]][1];
            for (let WF = 2; WF < hF; WF++) {
              bW[WF][0] = rW[SF[FF]][SF[FF + 1]][WF], bW[WF][WF] = rW[SF[FF]][SF[FF + 2]][WF], RF.x = (CF[3 * bW[WF][WF]] - CF[3 * bW[WF][0]]) / WF, RF.y = (CF[3 * bW[WF][WF] + 1] - CF[3 * bW[WF][0] + 1]) / WF, RF.z = (CF[3 * bW[WF][WF] + 2] - CF[3 * bW[WF][0] + 2]) / WF, uF && (iW.x = (uF[3 * bW[WF][WF]] - uF[3 * bW[WF][0]]) / WF, iW.y = (uF[3 * bW[WF][WF] + 1] - uF[3 * bW[WF][0] + 1]) / WF, iW.z = (uF[3 * bW[WF][WF] + 2] - uF[3 * bW[WF][0] + 2]) / WF), AF && (eF.x = (AF[2 * bW[WF][WF]] - AF[2 * bW[WF][0]]) / WF, eF.y = (AF[2 * bW[WF][WF] + 1] - AF[2 * bW[WF][0] + 1]) / WF);
              for (let FF = 1; FF < WF; FF++) bW[WF][FF] = CF.length / 3, CF[aW++] = CF[3 * bW[WF][0]] + FF * RF.x, CF[aW++] = CF[3 * bW[WF][0] + 1] + FF * RF.y, CF[aW++] = CF[3 * bW[WF][0] + 2] + FF * RF.z, uF && (uF[TF++] = uF[3 * bW[WF][0]] + FF * iW.x, uF[TF++] = uF[3 * bW[WF][0] + 1] + FF * iW.y, uF[TF++] = uF[3 * bW[WF][0] + 2] + FF * iW.z), AF && (AF[tW++] = AF[2 * bW[WF][0]] + FF * eF.x, AF[tW++] = AF[2 * bW[WF][0] + 1] + FF * eF.y)
            }
            bW[hF] = rW[SF[FF + 1]][SF[FF + 2]], EF.push(bW[0][0], bW[1][0], bW[1][1]);
            for (let FF = 1; FF < hF; FF++) {
              let WF;
              for (WF = 0; WF < FF; WF++) EF.push(bW[FF][WF], bW[FF + 1][WF], bW[FF + 1][WF + 1]), EF.push(bW[FF][WF], bW[FF + 1][WF + 1], bW[FF][WF + 1]);
              EF.push(bW[FF][WF], bW[FF + 1][WF], bW[FF + 1][WF + 1])
            }
          }
          WF.indices = EF, WF.applyToMesh(this, this.isVertexBufferUpdatable(OF.k.PositionKind))
        } else fF.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const FF = xW.b.ExtractFromMesh(this),
          WF = FF.uvs,
          SF = FF.indices,
          CF = FF.positions,
          AF = FF.colors,
          uF = FF.matricesIndices,
          hF = FF.matricesWeights,
          bW = FF.matricesIndicesExtra,
          dF = FF.matricesWeightsExtra;
        if (void 0 === SF || void 0 === CF || null === SF || null === CF) fF.b.Warn("VertexData contains empty entries");
        else {
          const PF = [],
            RF = [],
            iW = [],
            eF = [],
            EF = [],
            QF = [],
            rW = [],
            gW = [];
          let tW, TF = 0;
          const aW = {};
          let kW, qW;
          for (let FF = 0; FF < SF.length; FF += 3) {
            qW = [SF[FF], SF[FF + 1], SF[FF + 2]], tW = [];
            for (let FF = 0; FF < 3; FF++) {
              tW[FF] = "";
              for (let WF = 0; WF < 3; WF++) Math.abs(CF[3 * qW[FF] + WF]) < 1e-8 && (CF[3 * qW[FF] + WF] = 0), tW[FF] += CF[3 * qW[FF] + WF] + "|"
            }
            if (tW[0] != tW[1] && tW[0] != tW[2] && tW[1] != tW[2])
              for (let FF = 0; FF < 3; FF++) {
                if (kW = aW[tW[FF]], void 0 === kW) {
                  aW[tW[FF]] = TF, kW = TF++;
                  for (let WF = 0; WF < 3; WF++) PF.push(CF[3 * qW[FF] + WF]);
                  if (null !== AF && void 0 !== AF)
                    for (let WF = 0; WF < 4; WF++) eF.push(AF[4 * qW[FF] + WF]);
                  if (null !== WF && void 0 !== WF)
                    for (let SF = 0; SF < 2; SF++) iW.push(WF[2 * qW[FF] + SF]);
                  if (null !== uF && void 0 !== uF)
                    for (let WF = 0; WF < 4; WF++) EF.push(uF[4 * qW[FF] + WF]);
                  if (null !== hF && void 0 !== hF)
                    for (let WF = 0; WF < 4; WF++) QF.push(hF[4 * qW[FF] + WF]);
                  if (null !== bW && void 0 !== bW)
                    for (let WF = 0; WF < 4; WF++) rW.push(bW[4 * qW[FF] + WF]);
                  if (null !== dF && void 0 !== dF)
                    for (let WF = 0; WF < 4; WF++) gW.push(dF[4 * qW[FF] + WF])
                }
                RF.push(kW)
              }
          }
          const VF = [];
          xW.b.ComputeNormals(PF, RF, VF), FF.positions = PF, FF.indices = RF, FF.normals = VF, null !== WF && void 0 !== WF && (FF.uvs = iW), null !== AF && void 0 !== AF && (FF.colors = eF), null !== uF && void 0 !== uF && (FF.matricesIndices = EF), null !== hF && void 0 !== hF && (FF.matricesWeights = QF), null !== bW && void 0 !== bW && (FF.matricesIndicesExtra = rW), null !== hF && void 0 !== hF && (FF.matricesWeightsExtra = gW), FF.applyToMesh(this, this.isVertexBufferUpdatable(OF.k.PositionKind))
        }
      }
      static _instancedMeshFactory(FF, WF) {
        throw (0, sF.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(FF, WF, SF) {
        throw (0, sF.l)("PhysicsImpostor")
      }
      createInstance(FF) {
        const WF = JF._instancedMeshFactory(FF, this);
        return WF.parent = this.parent, WF
      }
      synchronizeInstances() {
        for (let FF = 0; FF < this.instances.length; FF++) {
          this.instances[FF]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(FF) {
        const WF = this.yEF(),
          SF = this.getVerticesData(OF.k.PositionKind);
        if (!SF || !WF) return this;
        const CF = [];
        for (let uF = 0; uF < SF.length; uF += 3) CF.push(DF.r.FromArray(SF, uF));
        const AF = [];
        return TF.c.SyncAsyncForLoop(CF.length, 40, (FF => {
          const WF = CF.length - 1 - FF,
            SF = CF[WF];
          for (let uF = 0; uF < WF; ++uF) {
            const FF = CF[uF];
            if (SF.equals(FF)) {
              AF[WF] = uF;
              break
            }
          }
        }), (() => {
          for (let FF = 0; FF < WF.length; ++FF) WF[FF] = AF[WF[FF]] || WF[FF];
          const SF = this.Om.slice(0);
          this.setIndices(WF), this.Om = SF, FF && FF(this)
        })), this
      }
      serialize() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        FF.name = this.name, FF.id = this.id, FF.uniqueId = this.uniqueId, FF.type = this.getClassName(), qW.d && qW.d.HasTags(this) && (FF.tags = qW.d.GetTags(this)), FF.position = this.position.kRF(), this.rotationQuaternion ? FF.rotationQuaternion = this.rotationQuaternion.kRF() : this.rotation && (FF.rotation = this.rotation.kRF()), FF.Ah = this.Ah.kRF(), this._postMultiplyPivotMatrix ? FF.pivotMatrix = this.getPivotMatrix().kRF() : FF.localMatrix = this.getPivotMatrix().kRF(), FF.isEnabled = this.isEnabled(!1), FF.isVisible = this.isVisible, FF.infiniteDistance = this.infiniteDistance, FF.pickable = this.JA, FF.receiveShadows = this.receiveShadows, FF.billboardMode = this.billboardMode, FF.visibility = this.visibility, FF.nC = this.nC, FF.checkCollisions = this.checkCollisions, FF.ellipsoid = this.ellipsoid.kRF(), FF.ellipsoidOffset = this.ellipsoidOffset.kRF(), FF.wC = this.wC, FF.isBlocker = this.isBlocker, FF.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (FF.cSF = !0), this.parent && this.parent._serializeAsParent(FF), FF.isUnIndexed = this.isUnIndexed;
        const WF = this._geometry;
        if (WF && this.Om) {
          FF.geometryUniqueId = WF.uniqueId, FF.geometryId = WF.id, FF.Om = [];
          for (let WF = 0; WF < this.Om.length; WF++) {
            const SF = this.Om[WF];
            FF.Om.push({
              materialIndex: SF.materialIndex,
              verticesStart: SF.verticesStart,
              verticesCount: SF.verticesCount,
              indexStart: SF.indexStart,
              indexCount: SF.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (FF.materialUniqueId = this.material.uniqueId, FF.materialId = this.material.id) : (this.material = null, FF.materialUniqueId = this._scene.defaultMaterial.uniqueId, FF.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (FF.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (FF.skeletonId = this.skeleton.id, FF.skeletonUniqueId = this.skeleton.uniqueId, FF.numBoneInfluencers = this.numBoneInfluencers), this.OWF()._getComponent(nF.d.NAME_PHYSICSENGINE)) {
          const WF = this.getPhysicsImpostor?.();
          WF && (FF.physicsMass = WF.getParam("xh"), FF.physicsFriction = WF.getParam("friction"), FF.physicsRestitution = WF.getParam("xh"), FF.physicsImpostor = WF.type)
        }
        this.metadata && (FF.metadata = this.metadata), 0 !== this.meshBlendingTag && (FF.meshBlendingTag = this.meshBlendingTag), FF.instances = [];
        for (let SF = 0; SF < this.instances.length; SF++) {
          const WF = this.instances[SF];
          if (WF.doNotSerialize) continue;
          const CF = {
            name: WF.name,
            id: WF.id,
            isEnabled: WF.isEnabled(!1),
            isVisible: WF.isVisible,
            JA: WF.JA,
            checkCollisions: WF.checkCollisions,
            position: WF.position.kRF(),
            Ah: WF.Ah.kRF()
          };
          if (WF.parent && WF.parent._serializeAsParent(CF), WF.rotationQuaternion ? CF.rotationQuaternion = WF.rotationQuaternion.kRF() : WF.rotation && (CF.rotation = WF.rotation.kRF()), this.OWF()._getComponent(nF.d.NAME_PHYSICSENGINE)) {
            const FF = WF.getPhysicsImpostor?.();
            FF && (CF.physicsMass = FF.getParam("xh"), CF.physicsFriction = FF.getParam("friction"), CF.physicsRestitution = FF.getParam("xh"), CF.physicsImpostor = FF.type)
          }
          WF.metadata && (CF.metadata = WF.metadata), WF.actionManager && (CF.actions = WF.actionManager.serialize(WF.name)), FF.instances.push(CF), IF.e.AppendSerializedAnimations(WF, CF), CF.Bu = WF.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (FF.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.zdF
          }, this._userThinInstanceBuffersStorage)) {
          const WF = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const FF in this._userThinInstanceBuffersStorage.data) WF.data[FF] = Array.from(this._userThinInstanceBuffersStorage.data[FF]), WF.sizes[FF] = this._userThinInstanceBuffersStorage.sizes[FF], WF.strides[FF] = this._userThinInstanceBuffersStorage.strides[FF];
          FF.thinInstances.userThinInstance = WF
        }
        return IF.e.AppendSerializedAnimations(this, FF), FF.Bu = this.serializeAnimationRanges(), FF.layerMask = this.layerMask, FF.alphaIndex = this.alphaIndex, FF.hasVertexAlpha = this.hasVertexAlpha, FF.overlayAlpha = this.overlayAlpha, FF.overlayColor = this.overlayColor.kRF(), FF.renderOverlay = this.renderOverlay, FF.applyFog = this.applyFog, this.actionManager && (FF.actions = this.actionManager.serialize(this.name)), FF
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const FF = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (FF && FF.vertexCount) {
          if (FF.vertexCount !== this.getTotalVertices()) return fF.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (FF.isUsingTextureForTargets) return;
          for (let WF = 0; WF < FF.numInfluencers; WF++) {
            const SF = FF.getActiveTarget(WF),
              CF = SF.getPositions();
            if (!CF) return void fF.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(OF.k.PositionKind + WF, CF, !1, 3);
            const AF = SF.getNormals();
            AF && this.geometry.setVerticesData(OF.k.NormalKind + WF, AF, !1, 3);
            const uF = SF.getTangents();
            uF && this.geometry.setVerticesData(OF.k.TangentKind + WF, uF, !1, 3);
            const hF = SF.getUVs();
            hF && this.geometry.setVerticesData(OF.k.UVKind + "_" + WF, hF, !1, 2);
            const bW = SF.getUV2s();
            bW && this.geometry.setVerticesData(OF.k.UV2Kind + "_" + WF, bW, !1, 2);
            const dF = SF.getColors();
            dF && this.geometry.setVerticesData(OF.k.ColorKind + WF, dF, !1, 4)
          }
        } else {
          let FF = 0;
          for (; this.geometry.isVerticesDataPresent(OF.k.PositionKind + FF);) this.geometry.removeVerticesData(OF.k.PositionKind + FF), this.geometry.isVerticesDataPresent(OF.k.NormalKind + FF) && this.geometry.removeVerticesData(OF.k.NormalKind + FF), this.geometry.isVerticesDataPresent(OF.k.TangentKind + FF) && this.geometry.removeVerticesData(OF.k.TangentKind + FF), this.geometry.isVerticesDataPresent(OF.k.UVKind + "_" + FF) && this.geometry.removeVerticesData(OF.k.UVKind + "_" + FF), this.geometry.isVerticesDataPresent(OF.k.UV2Kind + "_" + FF) && this.geometry.removeVerticesData(OF.k.UV2Kind + "_" + FF), this.geometry.isVerticesDataPresent(OF.k.ColorKind + FF) && this.geometry.removeVerticesData(OF.k.ColorKind + FF), FF++
        }
      }
      static Parse(FF, WF, SF) {
        let CF, AF = !1;
        if (FF.type && "LinesMesh" === FF.type ? CF = JF._LinesMeshParser(FF, WF) : FF.type && "GroundMesh" === FF.type ? CF = JF._GroundMeshParser(FF, WF) : FF.type && "GoldbergMesh" === FF.type ? CF = JF._GoldbergMeshParser(FF, WF) : FF.type && "GreasedLineMesh" === FF.type ? CF = JF._GreasedLineMeshParser(FF, WF) : FF.type && "TrailMesh" === FF.type ? CF = JF._TrailMeshParser(FF, WF) : FF.type && "GaussianSplattingMesh" === FF.type ? (CF = FF._isCompound ? JF._GaussianSplattingCompoundMeshParser(FF, WF) : JF._GaussianSplattingMeshParser(FF, WF), AF = !0) : FF.type && "GaussianSplattingPartProxyMesh" === FF.type ? (CF = JF._GaussianSplattingPartProxyMeshParser(FF, WF), AF = !0) : CF = new JF(FF.name, WF), CF.id = FF.id, CF._waitingParsedUniqueId = FF.uniqueId, qW.d && qW.d.AddTagsTo(CF, FF.tags), CF.position = DF.r.FromArray(FF.position), void 0 !== FF.metadata && (CF.metadata = FF.metadata), void 0 !== FF.meshBlendingTag && (CF.meshBlendingTag = FF.meshBlendingTag), FF.rotationQuaternion ? CF.rotationQuaternion = DF.e.FromArray(FF.rotationQuaternion) : FF.rotation && (CF.rotation = DF.r.FromArray(FF.rotation)), CF.Ah = DF.r.FromArray(FF.Ah), FF.localMatrix ? CF.setPreTransformMatrix(DF.b.FromArray(FF.localMatrix)) : FF.pivotMatrix && CF.setPivotMatrix(DF.b.FromArray(FF.pivotMatrix)), CF.MWF(FF.isEnabled), CF.isVisible = FF.isVisible, CF.infiniteDistance = FF.infiniteDistance, CF.nC = !!FF.nC, CF.showBoundingBox = FF.showBoundingBox, CF.showSubMeshesBoundingBox = FF.showSubMeshesBoundingBox, void 0 !== FF.applyFog && (CF.applyFog = FF.applyFog), void 0 !== FF.pickable && (CF.JA = FF.pickable), void 0 !== FF.alphaIndex && (CF.alphaIndex = FF.alphaIndex), CF.receiveShadows = FF.receiveShadows, void 0 !== FF.billboardMode && (CF.billboardMode = FF.billboardMode), void 0 !== FF.visibility && (CF.visibility = FF.visibility), CF.checkCollisions = FF.checkCollisions, CF.wC = !!FF.wC, FF.ellipsoid && (CF.ellipsoid = DF.r.FromArray(FF.ellipsoid)), FF.ellipsoidOffset && (CF.ellipsoidOffset = DF.r.FromArray(FF.ellipsoidOffset)), null != FF.overrideMaterialSideOrientation && (CF.sideOrientation = FF.overrideMaterialSideOrientation), void 0 !== FF.sideOrientation && (CF.sideOrientation = FF.sideOrientation), void 0 !== FF.isBlocker && (CF.isBlocker = FF.isBlocker), CF._shouldGenerateFlatShading = FF.useFlatShading, FF.cSF && (CF._waitingData.cSF = FF.cSF), void 0 !== FF.parentId && (CF._waitingParentId = FF.parentId), void 0 !== FF.parentInstanceIndex && (CF._waitingParentInstanceIndex = FF.parentInstanceIndex), void 0 !== FF.actions && (CF._waitingData.actions = FF.actions), void 0 !== FF.overlayAlpha && (CF.overlayAlpha = FF.overlayAlpha), void 0 !== FF.overlayColor && (CF.overlayColor = LF.e.FromArray(FF.overlayColor)), void 0 !== FF.renderOverlay && (CF.renderOverlay = FF.renderOverlay), CF.isUnIndexed = !!FF.isUnIndexed, CF.hasVertexAlpha = FF.hasVertexAlpha, FF.delayLoadingFile ? (CF.delayLoadState = 4, CF.delayLoadingFile = SF + FF.delayLoadingFile, CF.buildBoundingInfo(DF.r.FromArray(FF.boundingBoxMinimum), DF.r.FromArray(FF.boundingBoxMaximum)), FF._binaryInfo && (CF._binaryInfo = FF._binaryInfo), CF._delayInfo = [], FF.hasUVs && CF._delayInfo.push(OF.k.UVKind), FF.hasUVs2 && CF._delayInfo.push(OF.k.UV2Kind), FF.hasUVs3 && CF._delayInfo.push(OF.k.UV3Kind), FF.hasUVs4 && CF._delayInfo.push(OF.k.UV4Kind), FF.hasUVs5 && CF._delayInfo.push(OF.k.UV5Kind), FF.hasUVs6 && CF._delayInfo.push(OF.k.UV6Kind), FF.hasColors && CF._delayInfo.push(OF.k.ColorKind), FF.hasMatricesIndices && CF._delayInfo.push(OF.k.MatricesIndicesKind), FF.hasMatricesWeights && CF._delayInfo.push(OF.k.MatricesWeightsKind), CF._delayLoadingFunction = ZF.b._ImportGeometry, zW.c.ForceFullSceneLoadingForIncremental && CF._checkDelayState()) : AF || ZF.b._ImportGeometry(FF, CF), FF.materialUniqueId ? CF._waitingMaterialId = FF.materialUniqueId : FF.materialId && (CF._waitingMaterialId = FF.materialId), FF.morphTargetManagerId > -1 && (CF._waitingMorphTargetManagerId = FF.morphTargetManagerId), void 0 !== FF.skeletonId && null !== FF.skeletonId && (CF.skeleton = WF.getLastSkeletonById(FF.skeletonId), CF._waitingSkeletonId = FF.skeletonId, FF.numBoneInfluencers && (CF.numBoneInfluencers = FF.numBoneInfluencers)), void 0 !== FF.skeletonUniqueId && null !== FF.skeletonUniqueId && (CF._waitingSkeletonUniqueId = FF.skeletonUniqueId), FF.animations) {
          for (let WF = 0; WF < FF.animations.length; WF++) {
            const SF = FF.animations[WF],
              AF = (0, yW.c)("BABYLON.Animation");
            AF && CF.animations.push(AF.Parse(SF))
          }
          mW.e.ParseAnimationRanges(CF, FF, WF)
        }
        if (FF.autoAnimate && WF.beginAnimation(CF, FF.autoAnimateFrom, FF.autoAnimateTo, FF.autoAnimateLoop, FF.autoAnimateSpeed || 1), FF.layerMask && !isNaN(FF.layerMask) ? CF.layerMask = Math.abs(parseInt(FF.layerMask)) : CF.layerMask = 268435455, FF.physicsImpostor && (CF.physicsImpostor = JF._PhysicsImpostorParser(WF, CF, FF)), FF.lodMeshIds && (CF._waitingData.lods = {
            ids: FF.lodMeshIds,
            distances: FF.lodDistances ? FF.lodDistances : null,
            coverages: FF.lodCoverages ? FF.lodCoverages : null
          }), FF.instances)
          for (let uF = 0; uF < FF.instances.length; uF++) {
            const SF = FF.instances[uF],
              AF = CF.createInstance(SF.name);
            if (SF.id && (AF.id = SF.id), qW.d && (SF.tags ? qW.d.AddTagsTo(AF, SF.tags) : qW.d.AddTagsTo(AF, FF.tags)), AF.position = DF.r.FromArray(SF.position), void 0 !== SF.metadata && (AF.metadata = SF.metadata), void 0 !== SF.parentId && (AF._waitingParentId = SF.parentId), void 0 !== SF.parentInstanceIndex && (AF._waitingParentInstanceIndex = SF.parentInstanceIndex), void 0 !== SF.isEnabled && null !== SF.isEnabled && AF.MWF(SF.isEnabled), void 0 !== SF.isVisible && null !== SF.isVisible && (AF.isVisible = SF.isVisible), void 0 !== SF.JA && null !== SF.JA && (AF.JA = SF.JA), SF.rotationQuaternion ? AF.rotationQuaternion = DF.e.FromArray(SF.rotationQuaternion) : SF.rotation && (AF.rotation = DF.r.FromArray(SF.rotation)), AF.Ah = DF.r.FromArray(SF.Ah), void 0 != SF.checkCollisions && null != SF.checkCollisions && (AF.checkCollisions = SF.checkCollisions), void 0 != SF.pickable && null != SF.pickable && (AF.JA = SF.pickable), void 0 != SF.showBoundingBox && null != SF.showBoundingBox && (AF.showBoundingBox = SF.showBoundingBox), void 0 != SF.showSubMeshesBoundingBox && null != SF.showSubMeshesBoundingBox && (AF.showSubMeshesBoundingBox = SF.showSubMeshesBoundingBox), void 0 != SF.alphaIndex && null != SF.showSubMeshesBoundingBox && (AF.alphaIndex = SF.alphaIndex), SF.physicsImpostor && (AF.physicsImpostor = JF._PhysicsImpostorParser(WF, AF, SF)), void 0 !== SF.actions && (AF._waitingData.actions = SF.actions), SF.animations) {
              for (let FF = 0; FF < SF.animations.length; FF++) {
                const WF = SF.animations[FF],
                  CF = (0, yW.c)("BABYLON.Animation");
                CF && AF.animations.push(CF.Parse(WF))
              }
              mW.e.ParseAnimationRanges(AF, SF, WF), SF.autoAnimate && WF.beginAnimation(AF, SF.autoAnimateFrom, SF.autoAnimateTo, SF.autoAnimateLoop, SF.autoAnimateSpeed || 1)
            }
          }
        if (FF.thinInstances) {
          const WF = FF.thinInstances;
          if (CF.zdF = !!WF.enablePicking, WF.matrixData ? (CF.BuF("matrix", new Float32Array(WF.matrixData), 16, !1), CF._thinInstanceDataStorage.matrixBufferSize = WF.matrixBufferSize, CF._thinInstanceDataStorage.instancesCount = WF.instancesCount) : CF._thinInstanceDataStorage.matrixBufferSize = WF.matrixBufferSize, FF.thinInstances.userThinInstance) {
            const WF = FF.thinInstances.userThinInstance;
            for (const FF in WF.data) CF.BuF(FF, new Float32Array(WF.data[FF]), WF.strides[FF], !1), CF._userThinInstanceBuffersStorage.sizes[FF] = WF.sizes[FF]
          }
        }
        return CF
      }
      setPositionsForCPUSkinning() {
        const FF = this._internalMeshDataInfo;
        if (!FF._sourcePositions) {
          const WF = this.getVerticesData(OF.k.PositionKind);
          if (!WF) return FF._sourcePositions;
          FF._sourcePositions = new Float32Array(WF), this.isVertexBufferUpdatable(OF.k.PositionKind) || this.setVerticesData(OF.k.PositionKind, WF, !0)
        }
        return FF._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const FF = this._internalMeshDataInfo;
        if (!FF._sourceNormals) {
          const WF = this.getVerticesData(OF.k.NormalKind);
          if (!WF) return FF._sourceNormals;
          FF._sourceNormals = new Float32Array(WF), this.isVertexBufferUpdatable(OF.k.NormalKind) || this.setVerticesData(OF.k.NormalKind, WF, !0)
        }
        return FF._sourceNormals
      }
      applySkeleton(FF) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.OWF().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.OWF().getFrameId(), !this.isVerticesDataPresent(OF.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(OF.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(OF.k.MatricesWeightsKind)) return this;
        const WF = this.isVerticesDataPresent(OF.k.NormalKind),
          SF = this._internalMeshDataInfo;
        if (!SF._sourcePositions) {
          const FF = this.Om.slice();
          this.setPositionsForCPUSkinning(), this.Om = FF
        }
        WF && !SF._sourceNormals && this.setNormalsForCPUSkinning();
        let CF = this.getVerticesData(OF.k.PositionKind);
        if (!CF) return this;
        CF instanceof Float32Array || (CF = new Float32Array(CF));
        let AF = this.getVerticesData(OF.k.NormalKind);
        if (WF) {
          if (!AF) return this;
          AF instanceof Float32Array || (AF = new Float32Array(AF))
        }
        const uF = this.getVerticesData(OF.k.MatricesIndicesKind),
          hF = this.getVerticesData(OF.k.MatricesWeightsKind);
        if (!hF || !uF) return this;
        const bW = this.numBoneInfluencers > 4,
          dF = bW ? this.getVerticesData(OF.k.MatricesIndicesExtraKind) : null,
          PF = bW ? this.getVerticesData(OF.k.MatricesWeightsExtraKind) : null,
          RF = FF.getTransformMatrices(this),
          iW = DF.r.Zero(),
          eF = new DF.b,
          EF = new DF.b;
        let QF, rW = 0;
        for (let gW = 0; gW < CF.length; gW += 3, rW += 4) {
          let FF;
          for (QF = 0; QF < 4; QF++) FF = hF[rW + QF], FF > 0 && (DF.b.FromFloat32ArrayToRefScaled(RF, Math.floor(16 * uF[rW + QF]), FF, EF), eF.addToSelf(EF));
          if (bW)
            for (QF = 0; QF < 4; QF++) FF = PF[rW + QF], FF > 0 && (DF.b.FromFloat32ArrayToRefScaled(RF, Math.floor(16 * dF[rW + QF]), FF, EF), eF.addToSelf(EF));
          DF.r.TransformCoordinatesFromFloatsToRef(SF._sourcePositions[gW], SF._sourcePositions[gW + 1], SF._sourcePositions[gW + 2], eF, iW), iW.toArray(CF, gW), WF && (DF.r.TransformNormalFromFloatsToRef(SF._sourceNormals[gW], SF._sourceNormals[gW + 1], SF._sourceNormals[gW + 2], eF, iW), iW.toArray(AF, gW)), eF.reset()
        }
        return this.updateVerticesData(OF.k.PositionKind, CF), WF && this.updateVerticesData(OF.k.NormalKind, AF), this
      }
      static MinMax(FF) {
        let WF = null,
          SF = null;
        for (const CF of FF) {
          const FF = CF.JWF().boundingBox;
          WF && SF ? (WF.minimizeInPlace(FF.minimumWorld), SF.maximizeInPlace(FF.maximumWorld)) : (WF = FF.minimumWorld.clone(), SF = FF.maximumWorld.clone())
        }
        return WF && SF ? {
          min: WF,
          max: SF
        } : {
          min: DF.r.Zero(),
          max: DF.r.Zero()
        }
      }
      static Center(FF) {
        const WF = FF instanceof Array ? JF.MinMax(FF) : FF;
        return DF.r.Center(WF.min, WF.max)
      }
      static MergeMeshes(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        return (0, VF.k)(JF._MergeMeshesCoroutine(FF, WF, SF, CF, AF, uF, !1))
      }
      static async MergeMeshesAsync(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, VF.h)(JF._MergeMeshesCoroutine(FF, WF, SF, CF, AF, uF, !0), (0, VF.e)())
      }
      static * _MergeMeshesCoroutine(FF) {
        let WF, SF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          CF = arguments.length > 2 ? arguments[2] : void 0,
          AF = arguments.length > 3 ? arguments[3] : void 0,
          uF = arguments.length > 4 ? arguments[4] : void 0,
          hF = arguments.length > 5 ? arguments[5] : void 0,
          bW = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (FF = FF.filter(Boolean)).length) return null;
        if (!CF) {
          let SF = 0;
          for (WF = 0; WF < FF.length; WF++)
            if (SF += FF[WF].getTotalVertices(), SF >= 65536) return fF.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const dF = FF[0];
        hF && (uF = !1, FF.sort(((FF, WF) => (FF.material?.uniqueId ?? -1) - (WF.material?.uniqueId ?? -1))));
        const PF = new Array,
          RF = new Array,
          iW = new Array,
          eF = FF[0].sideOrientation;
        for (WF = 0; WF < FF.length; WF++) {
          const SF = FF[WF];
          if (SF.ZWF) return fF.b.Warn("Cannot merge instance meshes."), null;
          if (eF !== SF.sideOrientation) return fF.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (uF || hF) {
            const FF = iW.reduce(((FF, WF) => Math.max(FF, WF.start + WF.count)), 0);
            if (hF)
              if (SF.material) {
                const WF = SF.material;
                if (WF instanceof GF.e) {
                  for (let FF = 0; FF < WF.vhF.length; FF++) PF.indexOf(WF.vhF[FF]) < 0 && PF.push(WF.vhF[FF]);
                  for (let CF = 0; CF < SF.Om.length; CF++) RF.push(PF.indexOf(WF.vhF[SF.Om[CF].materialIndex])), iW.push({
                    start: FF + SF.Om[CF].indexStart,
                    count: SF.Om[CF].indexCount
                  })
                } else {
                  PF.indexOf(WF) < 0 && PF.push(WF);
                  for (let CF = 0; CF < SF.Om.length; CF++) RF.push(PF.indexOf(WF)), iW.push({
                    start: FF + SF.Om[CF].indexStart,
                    count: SF.Om[CF].indexCount
                  })
                }
              } else
                for (let WF = 0; WF < SF.Om.length; WF++) RF.push(0), iW.push({
                  start: FF + SF.Om[WF].indexStart,
                  count: SF.Om[WF].indexCount
                });
            else iW.push({
              start: FF,
              count: SF.getTotalIndices()
            })
          }
        }
        if (hF && iW.length > 1) {
          let FF = 0;
          for (let WF = 1; WF < iW.length; WF++) {
            const SF = iW[FF],
              CF = iW[WF];
            RF[WF] === RF[FF] && SF.start + SF.count === CF.start ? SF.count += CF.count : (FF++, iW[FF] = CF, RF[FF] = RF[WF])
          }
          iW.length = FF + 1, RF.length = FF + 1
        }
        const EF = FF => {
            const WF = FF.computeWorldMatrix(!0);
            return {
              vertexData: xW.b.ExtractFromMesh(FF, !1, !1),
              transform: WF
            }
          },
          {
            vertexData: QF,
            transform: rW
          } = EF(FF[0]);
        bW && (yield);
        const gW = new Array(FF.length - 1);
        for (let VF = 1; VF < FF.length; VF++) gW[VF - 1] = EF(FF[VF]), bW && (yield);
        const tW = QF._mergeCoroutine(rW, gW, CF, bW, !SF);
        let TF = tW.next();
        for (; !TF.done;) bW && (yield), TF = tW.next();
        const aW = TF.value;
        AF || (AF = new JF(dF.name + "_merged", dF.OWF()));
        const kW = aW._applyToCoroutine(AF, void 0, bW);
        let qW = kW.next();
        for (; !qW.done;) bW && (yield), qW = kW.next();
        if (AF.checkCollisions = dF.checkCollisions, AF.sideOrientation = dF.sideOrientation, SF)
          for (WF = 0; WF < FF.length; WF++) FF[WF].dispose();
        if (uF || hF) {
          for (AF.releaseSubMeshes(), WF = 0; WF < iW.length;) YF.c.CreateFromIndices(0, iW[WF].start, iW[WF].count, AF, void 0, !1), WF++;
          for (const FF of AF.Om) FF.refreshBoundingInfo();
          AF.computeWorldMatrix(!0)
        }
        if (hF) {
          const FF = new GF.e(dF.name + "_merged", dF.OWF());
          FF.vhF = PF;
          for (let WF = 0; WF < AF.Om.length; WF++) AF.Om[WF].materialIndex = RF[WF];
          AF.material = FF
        } else AF.material = dF.material;
        return AF
      }
      zhF(FF) {
        FF._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(FF)
      }
      fuF(FF) {
        const WF = FF._indexInSourceMeshInstanceArray;
        if (-1 != WF) {
          if (WF !== this.instances.length - 1) {
            const FF = this.instances[this.instances.length - 1];
            this.instances[WF] = FF, FF._indexInSourceMeshInstanceArray = WF
          }
          FF._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === MF.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(FF) {
        const WF = this.OWF();
        return WF.forcePointsCloud ? MF.c.PointFillMode : WF.forceWireframe ? MF.c.WireFrameFillMode : this.overrideRenderingFillMode ?? FF
      }
      setMaterialByID(FF) {
        return this.setMaterialById(FF)
      }
      static CreateRibbon(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(FF, WF, SF, CF, AF, uF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(FF, WF, SF, CF, AF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(FF, WF, SF, CF, AF, uF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(FF, WF, SF, CF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(FF, WF, SF, CF, AF, uF, hF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(FF, WF, SF, CF, AF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(FF, WF, SF, CF, AF, uF, hF, bW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(FF, WF, SF, CF, AF, uF, hF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(FF, WF, SF, CF, AF, uF, hF, bW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(FF, WF, SF, CF, AF, uF, hF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(FF, WF, SF, CF, AF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(FF, WF, SF, CF, AF, uF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(FF, WF, SF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(FF, WF, SF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(FF, WF, SF, CF, AF, uF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(FF, WF, SF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(FF) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    JF.FRONTSIDE = xW.b.FRONTSIDE, JF.BACKSIDE = xW.b.BACKSIDE, JF.DOUBLESIDE = xW.b.DOUBLESIDE, JF.DEFAULTSIDE = xW.b.DEFAULTSIDE, JF.NO_CAP = 0, JF.CAP_START = 1, JF.CAP_END = 2, JF.CAP_ALL = 3, JF.NO_FLIP = 0, JF.FLIP_TILE = 1, JF.ROTATE_TILE = 2, JF.FLIP_ROW = 3, JF.ROTATE_ROW = 4, JF.FLIP_N_ROTATE_TILE = 5, JF.FLIP_N_ROTATE_ROW = 6, JF.CENTER = 0, JF.LEFT = 1, JF.RIGHT = 2, JF.TOP = 3, JF.BOTTOM = 4, JF.INSTANCEDMESH_SORT_TRANSPARENT = !1, JF._GroundMeshParser = (FF, WF) => {
      throw (0, sF.l)("GroundMesh")
    }, JF._GoldbergMeshParser = (FF, WF) => {
      throw (0, sF.l)("GoldbergMesh")
    }, JF._LinesMeshParser = (FF, WF) => {
      throw (0, sF.l)("LinesMesh")
    }, JF._GreasedLineMeshParser = (FF, WF) => {
      throw (0, sF.l)("GreasedLineMesh")
    }, JF._GreasedLineRibbonMeshParser = (FF, WF) => {
      throw (0, sF.l)("GreasedLineRibbonMesh")
    }, JF._TrailMeshParser = (FF, WF) => {
      throw (0, sF.l)("TrailMesh")
    }, JF._GaussianSplattingMeshParser = (FF, WF) => {
      throw (0, sF.l)("GaussianSplattingMesh")
    }, JF._GaussianSplattingPartProxyMeshParser = (FF, WF) => {
      throw (0, sF.l)("GaussianSplattingPartProxyMesh")
    }, JF._GaussianSplattingCompoundMeshParser = (FF, WF) => {
      throw (0, sF.l)("GaussianSplattingCompoundMesh")
    };
    let pF = !1;

    function lF() {
      pF || (pF = !0, (0, yW.f)("BABYLON.Mesh", JF))
    }(CF = JF.prototype).UWF ?? (CF.UWF = (0, sF.j)("Mesh", "UWF")), (AF = JF.prototype).simplify ?? (AF.simplify = (0, sF.j)("Mesh", "simplify")), (uF = JF.prototype).thinInstanceAdd ?? (uF.thinInstanceAdd = (0, sF.j)("Mesh", "thinInstanceAdd")), (hF = JF.prototype).thinInstanceAddSelf ?? (hF.thinInstanceAddSelf = (0, sF.j)("Mesh", "thinInstanceAddSelf")), (bW = JF.prototype).thinInstanceRegisterAttribute ?? (bW.thinInstanceRegisterAttribute = (0, sF.j)("Mesh", "thinInstanceRegisterAttribute")), (dF = JF.prototype).thinInstanceSetMatrixAt ?? (dF.thinInstanceSetMatrixAt = (0, sF.j)("Mesh", "thinInstanceSetMatrixAt")), (PF = JF.prototype).thinInstanceSetAttributeAt ?? (PF.thinInstanceSetAttributeAt = (0, sF.j)("Mesh", "thinInstanceSetAttributeAt")), (RF = JF.prototype).BuF ?? (RF.BuF = (0, sF.j)("Mesh", "BuF")), (iW = JF.prototype).thinInstanceGetWorldMatrices ?? (iW.thinInstanceGetWorldMatrices = (0, sF.j)("Mesh", "thinInstanceGetWorldMatrices")), (eF = JF.prototype).HuF ?? (eF.HuF = (0, sF.j)("Mesh", "HuF")), (EF = JF.prototype).thinInstancePartialBufferUpdate ?? (EF.thinInstancePartialBufferUpdate = (0, sF.j)("Mesh", "thinInstancePartialBufferUpdate")), (QF = JF.prototype).thinInstanceRefreshBoundingInfo ?? (QF.thinInstanceRefreshBoundingInfo = (0, sF.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (rW = JF.prototype).getEmittedParticleSystems ?? (rW.getEmittedParticleSystems = (0, sF.j)("Mesh", "getEmittedParticleSystems")), (gW = JF.prototype).getHierarchyEmittedParticleSystems ?? (gW.getHierarchyEmittedParticleSystems = (0, sF.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(JF.prototype, "edgesShareWithInstances") || Object.defineProperty(JF.prototype, "edgesShareWithInstances", (0, sF.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(JF.prototype, "zdF") || Object.defineProperty(JF.prototype, "zdF", (0, sF.f)("Mesh", "zdF")), Object.getOwnPropertyDescriptor(JF.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(JF.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, sF.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(JF.prototype, "YuF") || Object.defineProperty(JF.prototype, "YuF", (0, sF.f)("Mesh", "YuF"))
  },
  38393: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF
    });
    var CF = SF(37972),
      AF = SF(35623),
      uF = SF(38109),
      hF = SF(37855),
      bW = SF(35678),
      dF = SF(37076),
      PF = SF(37974),
      RF = SF(38390),
      iW = SF(38018),
      eF = SF(38269);
    class EF {}
    let QF = (() => {
      var FF;
      let WF, SF, QF, rW, gW = [];
      return FF = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, RF.g)(this._applyToCoroutine.bind(this)), this.uniqueId = FF._UniqueIdGenerator, FF._UniqueIdGenerator++
        }
        set(FF, WF) {
          switch (FF.length || dF.b.Warn(`Setting vertex data kind '${WF}' with an empty array`), WF) {
            case uF.k.PositionKind:
              this.positions = FF;
              break;
            case uF.k.NormalKind:
              this.normals = FF;
              break;
            case uF.k.TangentKind:
              this.tangents = FF;
              break;
            case uF.k.UVKind:
              this.uvs = FF;
              break;
            case uF.k.UV2Kind:
              this.uvs2 = FF;
              break;
            case uF.k.UV3Kind:
              this.uvs3 = FF;
              break;
            case uF.k.UV4Kind:
              this.uvs4 = FF;
              break;
            case uF.k.UV5Kind:
              this.uvs5 = FF;
              break;
            case uF.k.UV6Kind:
              this.uvs6 = FF;
              break;
            case uF.k.ColorKind:
              this.colors = FF;
              break;
            case uF.k.MatricesIndicesKind:
              this.matricesIndices = FF;
              break;
            case uF.k.MatricesWeightsKind:
              this.matricesWeights = FF;
              break;
            case uF.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = FF;
              break;
            case uF.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = FF
          }
        }
        applyToMesh(FF, WF) {
          return this._applyTo(FF, WF, !1), this
        }
        applyToGeometry(FF, WF) {
          return this._applyTo(FF, WF, !1), this
        }
        updateMesh(FF) {
          return this._update(FF), this
        }
        updateGeometry(FF) {
          return this._update(FF), this
        }* _applyToCoroutine(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            SF = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (FF.setVerticesData(uF.k.PositionKind, this.positions, WF), SF && (yield)), this.normals && (FF.setVerticesData(uF.k.NormalKind, this.normals, WF), SF && (yield)), this.tangents && (FF.setVerticesData(uF.k.TangentKind, this.tangents, WF), SF && (yield)), this.uvs && (FF.setVerticesData(uF.k.UVKind, this.uvs, WF), SF && (yield)), this.uvs2 && (FF.setVerticesData(uF.k.UV2Kind, this.uvs2, WF), SF && (yield)), this.uvs3 && (FF.setVerticesData(uF.k.UV3Kind, this.uvs3, WF), SF && (yield)), this.uvs4 && (FF.setVerticesData(uF.k.UV4Kind, this.uvs4, WF), SF && (yield)), this.uvs5 && (FF.setVerticesData(uF.k.UV5Kind, this.uvs5, WF), SF && (yield)), this.uvs6 && (FF.setVerticesData(uF.k.UV6Kind, this.uvs6, WF), SF && (yield)), this.colors) {
            const CF = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            FF.setVerticesData(uF.k.ColorKind, this.colors, WF, CF), this.hasVertexAlpha && void 0 !== FF.hasVertexAlpha && (FF.hasVertexAlpha = !0), SF && (yield)
          }
          if (this.matricesIndices && (FF.setVerticesData(uF.k.MatricesIndicesKind, this.matricesIndices, WF), SF && (yield)), this.matricesWeights && (FF.setVerticesData(uF.k.MatricesWeightsKind, this.matricesWeights, WF), SF && (yield)), this.matricesIndicesExtra && (FF.setVerticesData(uF.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, WF), SF && (yield)), this.matricesWeightsExtra && (FF.setVerticesData(uF.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, WF), SF && (yield)), this.indices ? (FF.setIndices(this.indices, null, WF), SF && (yield)) : FF.setIndices([], null), FF.Om && this.materialInfos && this.materialInfos.length > 1) {
            const WF = FF;
            WF.Om = [];
            for (const FF of this.materialInfos) new eF.c(FF.materialIndex, FF.verticesStart, FF.verticesCount, FF.indexStart, FF.indexCount, WF)
          }
          return this
        }
        _update(FF, WF, SF) {
          return this.positions && FF.updateVerticesData(uF.k.PositionKind, this.positions, WF, SF), this.normals && FF.updateVerticesData(uF.k.NormalKind, this.normals, WF, SF), this.tangents && FF.updateVerticesData(uF.k.TangentKind, this.tangents, WF, SF), this.uvs && FF.updateVerticesData(uF.k.UVKind, this.uvs, WF, SF), this.uvs2 && FF.updateVerticesData(uF.k.UV2Kind, this.uvs2, WF, SF), this.uvs3 && FF.updateVerticesData(uF.k.UV3Kind, this.uvs3, WF, SF), this.uvs4 && FF.updateVerticesData(uF.k.UV4Kind, this.uvs4, WF, SF), this.uvs5 && FF.updateVerticesData(uF.k.UV5Kind, this.uvs5, WF, SF), this.uvs6 && FF.updateVerticesData(uF.k.UV6Kind, this.uvs6, WF, SF), this.colors && FF.updateVerticesData(uF.k.ColorKind, this.colors, WF, SF), this.matricesIndices && FF.updateVerticesData(uF.k.MatricesIndicesKind, this.matricesIndices, WF, SF), this.matricesWeights && FF.updateVerticesData(uF.k.MatricesWeightsKind, this.matricesWeights, WF, SF), this.matricesIndicesExtra && FF.updateVerticesData(uF.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, WF, SF), this.matricesWeightsExtra && FF.updateVerticesData(uF.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, WF, SF), this.indices && FF.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length;
          const uF = AF.j.HC[0],
            hF = AF.j.HC[1];
          for (let bW = SF; bW < SF + CF; bW += 3) AF.r.FromArrayToRef(FF, bW, uF), AF.r.TransformCoordinatesToRef(uF, WF, hF), FF[bW] = hF.x, FF[bW + 1] = hF.y, FF[bW + 2] = hF.z
        }
        static _TransformVector3Normals(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length;
          const uF = AF.j.HC[0],
            hF = AF.j.HC[1];
          for (let bW = SF; bW < SF + CF; bW += 3) AF.r.FromArrayToRef(FF, bW, uF), AF.r.TransformNormalToRef(uF, WF, hF), FF[bW] = hF.x, FF[bW + 1] = hF.y, FF[bW + 2] = hF.z
        }
        static _TransformVector4Normals(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length;
          const uF = AF.j.Vector4[0],
            hF = AF.j.Vector4[1];
          for (let bW = SF; bW < SF + CF; bW += 4) AF.v.FromArrayToRef(FF, bW, uF), AF.v.TransformNormalToRef(uF, WF, hF), FF[bW] = hF.x, FF[bW + 1] = hF.y, FF[bW + 2] = hF.z, FF[bW + 3] = hF.w
        }
        static _FlipFaces(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF.length;
          for (let CF = WF; CF < WF + SF; CF += 3) {
            const WF = FF[CF + 1];
            FF[CF + 1] = FF[CF + 2], FF[CF + 2] = WF
          }
        }
        transform(WF) {
          const SF = WF.determinant() < 0;
          return this.positions && FF._TransformVector3Coordinates(this.positions, WF), this.normals && FF._TransformVector3Normals(this.normals, WF), this.tangents && FF._TransformVector4Normals(this.tangents, WF), SF && this.indices && FF._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const WF = [];
          for (const SF of this.materialInfos) {
            const CF = new FF;
            if (this.positions && (CF.positions = this.positions.slice(3 * SF.verticesStart, 3 * (SF.verticesCount + SF.verticesStart))), this.normals && (CF.normals = this.normals.slice(3 * SF.verticesStart, 3 * (SF.verticesCount + SF.verticesStart))), this.tangents && (CF.tangents = this.tangents.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.colors && (CF.colors = this.colors.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.uvs && (CF.uvs = this.uvs.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.uvs2 && (CF.uvs2 = this.uvs2.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.uvs3 && (CF.uvs3 = this.uvs3.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.uvs4 && (CF.uvs4 = this.uvs4.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.uvs5 && (CF.uvs5 = this.uvs5.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.uvs6 && (CF.uvs6 = this.uvs6.slice(2 * SF.verticesStart, 2 * (SF.verticesCount + SF.verticesStart))), this.matricesIndices && (CF.matricesIndices = this.matricesIndices.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.matricesIndicesExtra && (CF.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.matricesWeights && (CF.matricesWeights = this.matricesWeights.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.matricesWeightsExtra && (CF.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * SF.verticesStart, 4 * (SF.verticesCount + SF.verticesStart))), this.indices) {
              CF.indices = [];
              for (let FF = SF.indexStart; FF < SF.indexStart + SF.indexCount; FF++) CF.indices.push(this.indices[FF] - SF.verticesStart)
            }
            const AF = new EF;
            AF.indexStart = 0, AF.indexCount = CF.indices ? CF.indices.length : 0, AF.materialIndex = SF.materialIndex, AF.verticesStart = 0, AF.verticesCount = (CF.positions ? CF.positions.length : 0) / 3, CF.materialInfos = [AF], WF.push(CF)
          }
          return WF
        }
        merge(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const uF = Array.isArray(FF) ? FF.map((FF => ({
            vertexData: FF
          }))) : [{
            vertexData: FF
          }];
          return (0, RF.k)(this._mergeCoroutine(void 0, uF, WF, !1, SF, CF, AF))
        }* _mergeCoroutine(WF, SF) {
          let CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            AF = arguments.length > 3 ? arguments[3] : void 0,
            hF = arguments.length > 4 ? arguments[4] : void 0,
            bW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            dF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let PF = SF.map((FF => FF.vertexData)),
            RF = this;
          if (dF)
            for (const FF of PF) FF && (FF._validate(), !this.normals && FF.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && FF.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && FF.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && FF.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && FF.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && FF.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && FF.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && FF.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && FF.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && FF.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && FF.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && FF.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && FF.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const FF of PF)
            if (FF)
              if (dF) this.normals && !FF.normals && (FF.normals = new Float32Array(FF.positions.length)), this.tangents && !FF.tangents && (FF.tangents = new Float32Array(FF.positions.length / 3 * 4)), this.uvs && !FF.uvs && (FF.uvs = new Float32Array(FF.positions.length / 3 * 2)), this.uvs2 && !FF.uvs2 && (FF.uvs2 = new Float32Array(FF.positions.length / 3 * 2)), this.uvs3 && !FF.uvs3 && (FF.uvs3 = new Float32Array(FF.positions.length / 3 * 2)), this.uvs4 && !FF.uvs4 && (FF.uvs4 = new Float32Array(FF.positions.length / 3 * 2)), this.uvs5 && !FF.uvs5 && (FF.uvs5 = new Float32Array(FF.positions.length / 3 * 2)), this.uvs6 && !FF.uvs6 && (FF.uvs6 = new Float32Array(FF.positions.length / 3 * 2)), this.colors && !FF.colors && (FF.colors = new Float32Array(FF.positions.length / 3 * 4), FF.colors.fill(1)), this.matricesIndices && !FF.matricesIndices && (FF.matricesIndices = new Float32Array(FF.positions.length / 3 * 4)), this.matricesWeights && !FF.matricesWeights && (FF.matricesWeights = new Float32Array(FF.positions.length / 3 * 4)), this.matricesIndicesExtra && !FF.matricesIndicesExtra && (FF.matricesIndicesExtra = new Float32Array(FF.positions.length / 3 * 4)), this.matricesWeightsExtra && !FF.matricesWeightsExtra && (FF.matricesWeightsExtra = new Float32Array(FF.positions.length / 3 * 4));
              else if (FF._validate(), !this.normals !== !FF.normals || !this.tangents !== !FF.tangents || !this.uvs !== !FF.uvs || !this.uvs2 !== !FF.uvs2 || !this.uvs3 !== !FF.uvs3 || !this.uvs4 !== !FF.uvs4 || !this.uvs5 !== !FF.uvs5 || !this.uvs6 !== !FF.uvs6 || !this.colors !== !FF.colors || !this.matricesIndices !== !FF.matricesIndices || !this.matricesWeights !== !FF.matricesWeights || !this.matricesIndicesExtra !== !FF.matricesIndicesExtra || !this.matricesWeightsExtra !== !FF.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (bW) {
            let FF, CF = 0,
              AF = 0;
            const uF = [];
            let hF = null;
            const bW = [];
            for (const SF of this.splitBasedOnMaterialID()) bW.push({
              vertexData: SF,
              transform: WF
            });
            for (const WF of SF)
              if (WF.vertexData)
                for (const FF of WF.vertexData.splitBasedOnMaterialID()) bW.push({
                  vertexData: FF,
                  transform: WF.transform
                });
            bW.sort(((FF, WF) => {
              const SF = FF.vertexData.materialInfos ? FF.vertexData.materialInfos[0].materialIndex : 0,
                CF = WF.vertexData.materialInfos ? WF.vertexData.materialInfos[0].materialIndex : 0;
              return SF > CF ? 1 : SF === CF ? 0 : -1
            }));
            for (const WF of bW) {
              const SF = WF.vertexData;
              if (FF = SF.materialInfos ? SF.materialInfos[0].materialIndex : 0, hF && hF.materialIndex === FF) hF.indexCount += SF.indices.length, hF.verticesCount += SF.positions.length / 3;
              else {
                const WF = new EF;
                WF.materialIndex = FF, WF.indexStart = CF, WF.indexCount = SF.indices.length, WF.verticesStart = AF, WF.verticesCount = SF.positions.length / 3, uF.push(WF), hF = WF
              }
              CF += SF.indices.length, AF += SF.positions.length / 3
            }
            const dF = bW.splice(0, 1)[0];
            RF = dF.vertexData, WF = dF.transform, PF = bW.map((FF => FF.vertexData)), SF = bW, this.materialInfos = uF
          }
          const iW = PF.reduce(((FF, WF) => FF + (WF.indices?.length ?? 0)), RF.indices?.length ?? 0);
          let eF = hF || PF.some((FF => FF.indices === RF.indices)) ? RF.indices?.slice() : RF.indices;
          if (iW > 0) {
            let uF = eF?.length ?? 0;
            if (eF || (eF = new Array(iW)), eF.length !== iW) {
              if (Array.isArray(eF)) eF.length = iW;
              else {
                const FF = CF || eF instanceof Uint32Array ? new Uint32Array(iW) : new Uint16Array(iW);
                FF.set(eF), eF = FF
              }
              WF && WF.determinant() < 0 && FF._FlipFaces(eF, 0, uF)
            }
            let hF = RF.positions ? RF.positions.length / 3 : 0;
            for (const {
                vertexData: WF,
                transform: CF
              }
              of SF)
              if (WF.indices) {
                for (let FF = 0; FF < WF.indices.length; FF++) eF[uF + FF] = WF.indices[FF] + hF;
                CF && CF.determinant() < 0 && FF._FlipFaces(eF, uF, WF.indices.length), hF += WF.positions.length / 3, uF += WF.indices.length, AF && (yield)
              }
          }
          return this.indices = eF, this.positions = FF._MergeElement(uF.k.PositionKind, RF.positions, WF, SF.map((FF => [FF.vertexData.positions, FF.transform]))), AF && (yield), RF.normals && (this.normals = FF._MergeElement(uF.k.NormalKind, RF.normals, WF, SF.map((FF => [FF.vertexData.normals, FF.transform]))), AF && (yield)), RF.tangents && (this.tangents = FF._MergeElement(uF.k.TangentKind, RF.tangents, WF, SF.map((FF => [FF.vertexData.tangents, FF.transform]))), AF && (yield)), RF.uvs && (this.uvs = FF._MergeElement(uF.k.UVKind, RF.uvs, WF, SF.map((FF => [FF.vertexData.uvs, FF.transform]))), AF && (yield)), RF.uvs2 && (this.uvs2 = FF._MergeElement(uF.k.UV2Kind, RF.uvs2, WF, SF.map((FF => [FF.vertexData.uvs2, FF.transform]))), AF && (yield)), RF.uvs3 && (this.uvs3 = FF._MergeElement(uF.k.UV3Kind, RF.uvs3, WF, SF.map((FF => [FF.vertexData.uvs3, FF.transform]))), AF && (yield)), RF.uvs4 && (this.uvs4 = FF._MergeElement(uF.k.UV4Kind, RF.uvs4, WF, SF.map((FF => [FF.vertexData.uvs4, FF.transform]))), AF && (yield)), RF.uvs5 && (this.uvs5 = FF._MergeElement(uF.k.UV5Kind, RF.uvs5, WF, SF.map((FF => [FF.vertexData.uvs5, FF.transform]))), AF && (yield)), RF.uvs6 && (this.uvs6 = FF._MergeElement(uF.k.UV6Kind, RF.uvs6, WF, SF.map((FF => [FF.vertexData.uvs6, FF.transform]))), AF && (yield)), RF.colors && (this.colors = FF._MergeElement(uF.k.ColorKind, RF.colors, WF, SF.map((FF => [FF.vertexData.colors, FF.transform]))), (void 0 !== RF.hasVertexAlpha || SF.some((FF => void 0 !== FF.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = RF.hasVertexAlpha || SF.some((FF => FF.vertexData.hasVertexAlpha))), AF && (yield)), RF.matricesIndices && (this.matricesIndices = FF._MergeElement(uF.k.MatricesIndicesKind, RF.matricesIndices, WF, SF.map((FF => [FF.vertexData.matricesIndices, FF.transform]))), AF && (yield)), RF.matricesWeights && (this.matricesWeights = FF._MergeElement(uF.k.MatricesWeightsKind, RF.matricesWeights, WF, SF.map((FF => [FF.vertexData.matricesWeights, FF.transform]))), AF && (yield)), RF.matricesIndicesExtra && (this.matricesIndicesExtra = FF._MergeElement(uF.k.MatricesIndicesExtraKind, RF.matricesIndicesExtra, WF, SF.map((FF => [FF.vertexData.matricesIndicesExtra, FF.transform]))), AF && (yield)), RF.matricesWeightsExtra && (this.matricesWeightsExtra = FF._MergeElement(uF.k.MatricesWeightsExtraKind, RF.matricesWeightsExtra, WF, SF.map((FF => [FF.vertexData.matricesWeightsExtra, FF.transform])))), this
        }
        static _MergeElement(WF, SF, CF, AF) {
          const hF = AF.filter((FF => null !== FF[0] && void 0 !== FF[0]));
          if (!SF && 0 == hF.length) return SF;
          if (!SF) return this._MergeElement(WF, hF[0][0], hF[0][1], hF.slice(1));
          const bW = hF.reduce(((FF, WF) => FF + WF[0].length), SF.length),
            dF = WF === uF.k.PositionKind ? FF._TransformVector3Coordinates : WF === uF.k.NormalKind ? FF._TransformVector3Normals : WF === uF.k.TangentKind ? FF._TransformVector4Normals : () => {};
          if (SF instanceof Float32Array) {
            const FF = new Float32Array(bW);
            FF.set(SF), CF && dF(FF, CF, 0, SF.length);
            let WF = SF.length;
            for (const [SF, CF] of hF) FF.set(SF, WF), CF && dF(FF, CF, WF, SF.length), WF += SF.length;
            return FF
          } {
            const FF = new Array(bW);
            for (let CF = 0; CF < SF.length; CF++) FF[CF] = SF[CF];
            CF && dF(FF, CF, 0, SF.length);
            let WF = SF.length;
            for (const [SF, CF] of hF) {
              for (let CF = 0; CF < SF.length; CF++) FF[WF + CF] = SF[CF];
              CF && dF(FF, CF, WF, SF.length), WF += SF.length
            }
            return FF
          }
        }
        _validate() {
          if (!this.positions) throw new iW.g("Positions are required", iW.c.MeshInvalidPositionsError);
          const FF = (FF, WF) => {
              const SF = (0, uF.h)(FF);
              if (WF.length % SF !== 0) throw new Error("The " + FF + "s array count must be a multiple of " + SF);
              return WF.length / SF
            },
            WF = FF(uF.k.PositionKind, this.positions),
            SF = (SF, CF) => {
              const AF = FF(SF, CF);
              if (AF !== WF) throw new Error("The " + SF + "s element count (" + AF + ") does not match the positions count (" + WF + ")")
            };
          this.normals && SF(uF.k.NormalKind, this.normals), this.tangents && SF(uF.k.TangentKind, this.tangents), this.uvs && SF(uF.k.UVKind, this.uvs), this.uvs2 && SF(uF.k.UV2Kind, this.uvs2), this.uvs3 && SF(uF.k.UV3Kind, this.uvs3), this.uvs4 && SF(uF.k.UV4Kind, this.uvs4), this.uvs5 && SF(uF.k.UV5Kind, this.uvs5), this.uvs6 && SF(uF.k.UV6Kind, this.uvs6), this.colors && SF(uF.k.ColorKind, this.colors), this.matricesIndices && SF(uF.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && SF(uF.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && SF(uF.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && SF(uF.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const WF = this.serialize();
          return FF.Parse(WF)
        }
        serialize() {
          const FF = {};
          if (this.positions && (FF.positions = Array.from(this.positions)), this.normals && (FF.normals = Array.from(this.normals)), this.tangents && (FF.tangents = Array.from(this.tangents)), this.uvs && (FF.uvs = Array.from(this.uvs)), this.uvs2 && (FF.uvs2 = Array.from(this.uvs2)), this.uvs3 && (FF.uvs3 = Array.from(this.uvs3)), this.uvs4 && (FF.uvs4 = Array.from(this.uvs4)), this.uvs5 && (FF.uvs5 = Array.from(this.uvs5)), this.uvs6 && (FF.uvs6 = Array.from(this.uvs6)), this.colors && (FF.colors = Array.from(this.colors), FF.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (FF.matricesIndices = Array.from(this.matricesIndices), FF.matricesIndicesExpanded = !0), this.matricesWeights && (FF.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (FF.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), FF.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (FF.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), FF.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            FF.materialInfos = [];
            for (const WF of this.materialInfos) {
              const SF = {
                indexStart: WF.indexStart,
                indexCount: WF.indexCount,
                materialIndex: WF.materialIndex,
                verticesStart: WF.verticesStart,
                verticesCount: WF.verticesCount
              };
              FF.materialInfos.push(SF)
            }
          }
          return FF
        }
        static ExtractFromMesh(WF, SF, CF) {
          return FF._ExtractFrom(WF, SF, CF)
        }
        static ExtractFromGeometry(WF, SF, CF) {
          return FF._ExtractFrom(WF, SF, CF)
        }
        static _ExtractFrom(WF, SF, CF) {
          const AF = new FF;
          if (WF.isVerticesDataPresent(uF.k.PositionKind) && (AF.positions = WF.getVerticesData(uF.k.PositionKind, SF, CF)), WF.isVerticesDataPresent(uF.k.NormalKind) && (AF.normals = WF.getVerticesData(uF.k.NormalKind, SF, CF)), WF.isVerticesDataPresent(uF.k.TangentKind) && (AF.tangents = WF.getVerticesData(uF.k.TangentKind, SF, CF)), WF.isVerticesDataPresent(uF.k.UVKind) && (AF.uvs = WF.getVerticesData(uF.k.UVKind, SF, CF)), WF.isVerticesDataPresent(uF.k.UV2Kind) && (AF.uvs2 = WF.getVerticesData(uF.k.UV2Kind, SF, CF)), WF.isVerticesDataPresent(uF.k.UV3Kind) && (AF.uvs3 = WF.getVerticesData(uF.k.UV3Kind, SF, CF)), WF.isVerticesDataPresent(uF.k.UV4Kind) && (AF.uvs4 = WF.getVerticesData(uF.k.UV4Kind, SF, CF)), WF.isVerticesDataPresent(uF.k.UV5Kind) && (AF.uvs5 = WF.getVerticesData(uF.k.UV5Kind, SF, CF)), WF.isVerticesDataPresent(uF.k.UV6Kind) && (AF.uvs6 = WF.getVerticesData(uF.k.UV6Kind, SF, CF)), WF.isVerticesDataPresent(uF.k.ColorKind)) {
            const FF = WF.geometry || WF,
              hF = FF.getVertexBuffer(uF.k.ColorKind),
              bW = FF.getVerticesData(uF.k.ColorKind, SF, CF);
            if (3 === hF.getSize()) {
              const FF = new Float32Array(4 * bW.length / 3);
              for (let WF = 0, SF = 0; WF < bW.length; WF += 3, SF += 4) FF[SF] = bW[WF], FF[SF + 1] = bW[WF + 1], FF[SF + 2] = bW[WF + 2], FF[SF + 3] = 1;
              AF.colors = FF
            } else {
              if (4 !== hF.getSize()) throw new Error(`Unexpected number of color components: ${hF.getSize()}`);
              AF.colors = bW
            }
          }
          return WF.isVerticesDataPresent(uF.k.MatricesIndicesKind) && (AF.matricesIndices = WF.getVerticesData(uF.k.MatricesIndicesKind, SF, CF)), WF.isVerticesDataPresent(uF.k.MatricesWeightsKind) && (AF.matricesWeights = WF.getVerticesData(uF.k.MatricesWeightsKind, SF, CF)), WF.isVerticesDataPresent(uF.k.MatricesIndicesExtraKind) && (AF.matricesIndicesExtra = WF.getVerticesData(uF.k.MatricesIndicesExtraKind, SF, CF)), WF.isVerticesDataPresent(uF.k.MatricesWeightsExtraKind) && (AF.matricesWeightsExtra = WF.getVerticesData(uF.k.MatricesWeightsExtraKind, SF, CF)), AF.indices = WF.yEF(SF, CF), AF
        }
        static CreateRibbon(FF) {
          throw (0, hF.l)("ribbonBuilder")
        }
        static CreateBox(FF) {
          throw (0, hF.l)("boxBuilder")
        }
        static CreateTiledBox(FF) {
          throw (0, hF.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(FF) {
          throw (0, hF.l)("tiledPlaneBuilder")
        }
        static CreateSphere(FF) {
          throw (0, hF.l)("sphereBuilder")
        }
        static CreateCylinder(FF) {
          throw (0, hF.l)("cylinderBuilder")
        }
        static CreateTorus(FF) {
          throw (0, hF.l)("torusBuilder")
        }
        static CreateLineSystem(FF) {
          throw (0, hF.l)("linesBuilder")
        }
        static CreateDashedLines(FF) {
          throw (0, hF.l)("linesBuilder")
        }
        static CreateGround(FF) {
          throw (0, hF.l)("groundBuilder")
        }
        static CreateTiledGround(FF) {
          throw (0, hF.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(FF) {
          throw (0, hF.l)("groundBuilder")
        }
        static CreatePlane(FF) {
          throw (0, hF.l)("planeBuilder")
        }
        static CreateDisc(FF) {
          throw (0, hF.l)("discBuilder")
        }
        static CreatePolygon(FF, WF, SF, CF, AF, uF, bW) {
          throw (0, hF.l)("polygonBuilder")
        }
        static CreateIcoSphere(FF) {
          throw (0, hF.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(FF) {
          throw (0, hF.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || AF.r.Up();
          throw (0, hF.l)("capsuleBuilder")
        }
        static CreateTorusKnot(FF) {
          throw (0, hF.l)("torusKnotBuilder")
        }
        static ComputeNormals(FF, WF, SF, CF) {
          let uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, LF = !1,
            mW = !1,
            OF = !1,
            xW = !1,
            ZF = 1,
            oF = 0,
            YF = null;
          CF && (LF = !!CF.facetNormals, mW = !!CF.facetPositions, OF = !!CF.facetPartitioning, ZF = !0 === CF.useRightHandedSystem ? -1 : 1, oF = CF.ratio || 0, xW = !!CF.depthSort, YF = CF.distanceTo, xW && void 0 === YF && (YF = AF.r.Zero()));
          let MF = 0,
            cW = 0,
            GF = 0,
            zW = 0;
          for (OF && CF && CF.bbSize && (MF = CF.subDiv.X * oF / CF.bbSize.x, cW = CF.subDiv.Y * oF / CF.bbSize.y, GF = CF.subDiv.Z * oF / CF.bbSize.z, zW = CF.subDiv.max * CF.subDiv.max, CF.facetPartitioning.length = 0), uF = 0; uF < FF.length; uF++) SF[uF] = 0;
          const IF = WF.length / 3 | 0;
          for (uF = 0; uF < IF; uF++) {
            if (gW = 3 * WF[3 * uF], tW = gW + 1, TF = gW + 2, aW = 3 * WF[3 * uF + 1], kW = aW + 1, qW = aW + 2, VF = 3 * WF[3 * uF + 2], NF = VF + 1, DF = VF + 2, hF = FF[gW] - FF[aW], bW = FF[tW] - FF[kW], dF = FF[TF] - FF[qW], PF = FF[VF] - FF[aW], RF = FF[NF] - FF[kW], iW = FF[DF] - FF[qW], eF = ZF * (bW * iW - dF * RF), EF = ZF * (dF * PF - hF * iW), QF = ZF * (hF * RF - bW * PF), rW = Math.sqrt(eF * eF + EF * EF + QF * QF), rW = 0 === rW ? 1 : rW, eF /= rW, EF /= rW, QF /= rW, LF && CF && (CF.facetNormals[uF].x = eF, CF.facetNormals[uF].y = EF, CF.facetNormals[uF].z = QF), mW && CF && (CF.facetPositions[uF].x = (FF[gW] + FF[aW] + FF[VF]) / 3, CF.facetPositions[uF].y = (FF[tW] + FF[kW] + FF[NF]) / 3, CF.facetPositions[uF].z = (FF[TF] + FF[qW] + FF[DF]) / 3), OF && CF) {
              const WF = Math.floor((CF.facetPositions[uF].x - CF.bInfo.minimum.x * oF) * MF),
                SF = Math.floor((CF.facetPositions[uF].y - CF.bInfo.minimum.y * oF) * cW),
                AF = Math.floor((CF.facetPositions[uF].z - CF.bInfo.minimum.z * oF) * GF),
                hF = Math.floor((FF[gW] - CF.bInfo.minimum.x * oF) * MF),
                bW = Math.floor((FF[tW] - CF.bInfo.minimum.y * oF) * cW),
                dF = Math.floor((FF[TF] - CF.bInfo.minimum.z * oF) * GF),
                PF = Math.floor((FF[aW] - CF.bInfo.minimum.x * oF) * MF),
                RF = Math.floor((FF[kW] - CF.bInfo.minimum.y * oF) * cW),
                iW = Math.floor((FF[qW] - CF.bInfo.minimum.z * oF) * GF),
                eF = Math.floor((FF[VF] - CF.bInfo.minimum.x * oF) * MF),
                EF = Math.floor((FF[NF] - CF.bInfo.minimum.y * oF) * cW),
                QF = Math.floor((FF[DF] - CF.bInfo.minimum.z * oF) * GF),
                rW = hF + CF.subDiv.max * bW + zW * dF,
                LF = PF + CF.subDiv.max * RF + zW * iW,
                mW = eF + CF.subDiv.max * EF + zW * QF,
                OF = WF + CF.subDiv.max * SF + zW * AF;
              CF.facetPartitioning[OF] = CF.facetPartitioning[OF] ? CF.facetPartitioning[OF] : [], CF.facetPartitioning[rW] = CF.facetPartitioning[rW] ? CF.facetPartitioning[rW] : [], CF.facetPartitioning[LF] = CF.facetPartitioning[LF] ? CF.facetPartitioning[LF] : [], CF.facetPartitioning[mW] = CF.facetPartitioning[mW] ? CF.facetPartitioning[mW] : [], CF.facetPartitioning[rW].push(uF), LF != rW && CF.facetPartitioning[LF].push(uF), mW != LF && mW != rW && CF.facetPartitioning[mW].push(uF), OF != rW && OF != LF && OF != mW && CF.facetPartitioning[OF].push(uF)
            }
            if (xW && CF && CF.facetPositions) {
              const FF = CF.depthSortedFacets[uF];
              FF.ind = 3 * uF, FF.sqDistance = AF.r.DistanceSquared(CF.facetPositions[uF], YF)
            }
            SF[gW] += eF, SF[tW] += EF, SF[TF] += QF, SF[aW] += eF, SF[kW] += EF, SF[qW] += QF, SF[VF] += eF, SF[NF] += EF, SF[DF] += QF
          }
          for (uF = 0; uF < SF.length / 3; uF++) eF = SF[3 * uF], EF = SF[3 * uF + 1], QF = SF[3 * uF + 2], rW = Math.sqrt(eF * eF + EF * EF + QF * QF), rW = 0 === rW ? 1 : rW, eF /= rW, EF /= rW, QF /= rW, SF[3 * uF] = eF, SF[3 * uF + 1] = EF, SF[3 * uF + 2] = QF
        }
        static _ComputeSides(WF, SF, CF, uF, hF, bW, dF) {
          const PF = CF.length,
            RF = uF.length;
          let iW, eF;
          switch (WF = WF || FF.DEFAULTSIDE) {
            case FF.FRONTSIDE:
              break;
            case FF.BACKSIDE:
              for (iW = 0; iW < PF; iW += 3) {
                const FF = CF[iW];
                CF[iW] = CF[iW + 2], CF[iW + 2] = FF
              }
              for (eF = 0; eF < RF; eF++) uF[eF] = -uF[eF];
              break;
            case FF.DOUBLESIDE: {
              const FF = SF.length,
                WF = FF / 3;
              for (let CF = 0; CF < FF; CF++) SF[FF + CF] = SF[CF];
              for (iW = 0; iW < PF; iW += 3) CF[iW + PF] = CF[iW + 2] + WF, CF[iW + 1 + PF] = CF[iW + 1] + WF, CF[iW + 2 + PF] = CF[iW] + WF;
              for (eF = 0; eF < RF; eF++) uF[RF + eF] = -uF[eF];
              const EF = hF.length;
              let QF;
              for (QF = 0; QF < EF; QF++) hF[QF + EF] = hF[QF];
              for (bW = bW || new AF.v(0, 0, 1, 1), dF = dF || new AF.v(0, 0, 1, 1), QF = 0, iW = 0; iW < EF / 2; iW++) hF[QF] = bW.x + (bW.z - bW.x) * hF[QF], hF[QF + 1] = bW.y + (bW.w - bW.y) * hF[QF + 1], hF[QF + EF] = dF.x + (dF.z - dF.x) * hF[QF + EF], hF[QF + EF + 1] = dF.y + (dF.w - dF.y) * hF[QF + EF + 1], QF += 2;
              break
            }
          }
        }
        static Parse(WF) {
          const SF = new FF,
            CF = WF.positions;
          CF && SF.set(CF, uF.k.PositionKind);
          const AF = WF.normals;
          AF && SF.set(AF, uF.k.NormalKind);
          const hF = WF.tangents;
          hF && SF.set(hF, uF.k.TangentKind);
          const dF = WF.uvs;
          dF && SF.set(dF, uF.k.UVKind);
          const PF = WF.uvs2;
          PF && SF.set(PF, uF.k.UV2Kind);
          const RF = WF.uvs3;
          RF && SF.set(RF, uF.k.UV3Kind);
          const iW = WF.uvs4;
          iW && SF.set(iW, uF.k.UV4Kind);
          const eF = WF.uvs5;
          eF && SF.set(eF, uF.k.UV5Kind);
          const QF = WF.uvs6;
          QF && SF.set(QF, uF.k.UV6Kind);
          const rW = WF.colors;
          rW && (SF.set(bW.i.CheckColors4(rW, CF.length / 3), uF.k.ColorKind), void 0 !== WF.hasVertexAlpha && (SF.hasVertexAlpha = WF.hasVertexAlpha));
          const gW = WF.matricesIndices;
          gW && SF.set(gW, uF.k.MatricesIndicesKind);
          const tW = WF.matricesWeights;
          tW && SF.set(tW, uF.k.MatricesWeightsKind);
          const TF = WF.indices;
          TF && (SF.indices = TF);
          const aW = WF.materialInfos;
          if (aW) {
            SF.materialInfos = [];
            for (const FF of aW) {
              const WF = new EF;
              WF.indexCount = FF.indexCount, WF.indexStart = FF.indexStart, WF.verticesCount = FF.verticesCount, WF.verticesStart = FF.verticesStart, WF.materialIndex = FF.materialIndex, SF.materialInfos.push(WF)
            }
          }
          return SF
        }
        static ImportVertexData(WF, SF) {
          const CF = FF.Parse(WF);
          SF.setAllVerticesData(CF, WF.updatable)
        }
      }, (() => {
        const AF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [PF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], SF = [PF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], QF = [PF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], rW = [PF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, CF.j)(FF, null, WF, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: FF => "_TransformVector3Coordinates" in FF,
            get: FF => FF._TransformVector3Coordinates
          },
          metadata: AF
        }, null, gW), (0, CF.j)(FF, null, SF, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: FF => "_TransformVector3Normals" in FF,
            get: FF => FF._TransformVector3Normals
          },
          metadata: AF
        }, null, gW), (0, CF.j)(FF, null, QF, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: FF => "_TransformVector4Normals" in FF,
            get: FF => FF._TransformVector4Normals
          },
          metadata: AF
        }, null, gW), (0, CF.j)(FF, null, rW, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: FF => "_FlipFaces" in FF,
            get: FF => FF._FlipFaces
          },
          metadata: AF
        }, null, gW), AF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AF
        })
      })(), FF.FRONTSIDE = ((0, CF.k)(FF, gW), 0), FF.BACKSIDE = 1, FF.DOUBLESIDE = 2, FF.DEFAULTSIDE = 0, FF._UniqueIdGenerator = 0, FF
    })()
  },
  38456: (FF, WF, SF) => {
    var CF = SF(35623),
      AF = SF(37076),
      uF = SF(38281),
      hF = SF(38386),
      bW = SF(38109);
    const dF = "bakedVertexAnimationSettingsInstanced";

    function PF(FF) {
      const WF = FF.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return WF instanceof Float32Array || WF instanceof Uint16Array
    }

    function RF(FF, WF, SF, CF) {
      SF.DuF(Number.POSITIVE_INFINITY), CF.DuF(Number.NEGATIVE_INFINITY);
      for (let AF = 0; AF < 3 * WF; AF += 3) {
        const WF = FF[AF],
          uF = FF[AF + 1],
          hF = FF[AF + 2];
        WF < SF.x && (SF.x = WF), uF < SF.y && (SF.y = uF), hF < SF.z && (SF.z = hF), WF > CF.x && (CF.x = WF), uF > CF.y && (CF.y = uF), hF > CF.z && (CF.z = hF)
      }
    }

    function iW(FF, WF, SF) {
      SF && (FF.x -= FF.x * SF.x + SF.y, FF.y -= FF.y * SF.x + SF.y, FF.z -= FF.z * SF.x + SF.y, WF.x += WF.x * SF.x + SF.y, WF.y += WF.y * SF.x + SF.y, WF.z += WF.z * SF.x + SF.y)
    }

    function eF(FF, WF, SF, AF, uF) {
      const hF = CF.j.HC[7],
        bW = CF.j.HC[8];
      for (let dF = 0; dF < 2; ++dF)
        for (let PF = 0; PF < 2; ++PF)
          for (let RF = 0; RF < 2; ++RF) hF.set(dF ? WF.x : FF.x, PF ? WF.y : FF.y, RF ? WF.z : FF.z), CF.r.TransformCoordinatesToRef(hF, SF, bW), AF.minimizeInPlace(bW), uF.maximizeInPlace(bW)
    }

    function EF(FF, WF, SF, AF, uF) {
      const hF = CF.j.HC[7];
      for (let bW = 0; bW < 3 * WF; bW += 3) CF.r.TransformCoordinatesFromFloatsToRef(FF[bW], FF[bW + 1], FF[bW + 2], SF, hF), AF.minimizeInPlace(hF), uF.maximizeInPlace(hF)
    }
    let QF = !1;
    QF || (QF = !0, hF.d.prototype.thinInstanceAdd = function(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.OWF().sC().getCaps().instancedArrays) return AF.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(FF) ? FF.length : 1);
      const SF = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(FF))
        for (let CF = 0; CF < FF.length; ++CF) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, FF[CF], CF === FF.length - 1 && WF);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, FF, WF);
      return SF
    }, hF.d.prototype.thinInstanceAddSelf = function() {
      let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(CF.b.IdentityReadOnly, FF)
    }, hF.d.prototype.thinInstanceRegisterAttribute = function(FF, WF) {
      FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), this.removeVerticesData(FF), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[FF] = WF, this._userThinInstanceBuffersStorage.sizes[FF] = WF * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[FF] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[FF]), this._userThinInstanceBuffersStorage.vertexBuffers[FF] = new bW.k(this.sC(), this._userThinInstanceBuffersStorage.data[FF], FF, !0, !1, WF, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[FF])
    }, hF.d.prototype.thinInstanceSetMatrixAt = function(FF, WF) {
      let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || FF >= this._thinInstanceDataStorage.instancesCount) return !1;
      const CF = this._thinInstanceDataStorage.matrixData;
      return WF.copyToArray(CF, 16 * FF), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[FF] = WF), SF && (this.HuF("matrix"), this.wC || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, hF.d.prototype.thinInstanceSetAttributeAt = function(FF, WF, SF) {
      let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[FF] || WF >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(FF, 0), this._userThinInstanceBuffersStorage.data[FF].set(SF, WF * this._userThinInstanceBuffersStorage.strides[FF]), CF && this.HuF(FF), !0)
    }, Object.defineProperty(hF.d.prototype, "YuF", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(FF) {
        const WF = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        FF <= (WF ? WF.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = FF)
      },
      enumerable: !0,
      configurable: !0
    }), hF.d.prototype._thinInstanceCreateMatrixBuffer = function(FF, WF) {
      let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const CF = new bW.c(this.sC(), WF, !SF, 16, !1, !0);
      for (let AF = 0; AF < 4; AF++) this.setVerticesBuffer(CF.createVertexBuffer(FF + AF, 4 * AF, 4));
      return CF
    }, hF.d.prototype.BuF = function(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (SF = SF || 16, "matrix" === FF) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = WF ? WF.length : 32 * SF, this._thinInstanceDataStorage.matrixData = WF, this._thinInstanceDataStorage.worldMatrices = null, null !== WF ? (this._thinInstanceDataStorage.instancesCount = WF.length / SF, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", WF, CF), this.wC || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.wC || this.refreshBoundingInfo());
      else if ("previousMatrix" === FF) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = WF, null !== WF && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", WF, CF));
      else if ("splatIndex" === FF && WF) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = WF.length / SF, this._userThinInstanceBuffersStorage.data[FF] = WF, this._userThinInstanceBuffersStorage.strides[FF] = SF, this._userThinInstanceBuffersStorage.sizes[FF] = WF.length;
        const CF = new bW.c(this.sC(), WF, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = CF;
        for (let WF = 0; WF < 4; WF++) this.setVerticesBuffer(CF.createVertexBuffer(FF + WF, 4 * WF, 4))
      } else FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), null === WF ? this._userThinInstanceBuffersStorage?.data[FF] && (this.removeVerticesData(FF), delete this._userThinInstanceBuffersStorage.data[FF], delete this._userThinInstanceBuffersStorage.strides[FF], delete this._userThinInstanceBuffersStorage.sizes[FF], delete this._userThinInstanceBuffersStorage.vertexBuffers[FF]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[FF] = WF, this._userThinInstanceBuffersStorage.strides[FF] = SF, this._userThinInstanceBuffersStorage.sizes[FF] = WF.length, this._userThinInstanceBuffersStorage.vertexBuffers[FF] = new bW.k(this.sC(), WF, FF, !CF, !1, SF, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[FF]))
    }, hF.d.prototype.HuF = function(FF) {
      "matrix" === FF ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(FF), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === FF ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(FF), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === FF ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[FF], 0, this._thinInstanceDataStorage.instancesCount) : (FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[FF] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[FF].isUpdatable() && this._thinInstanceRecreateBuffer(FF), this._userThinInstanceBuffersStorage.vertexBuffers[FF].updateDirectly(this._userThinInstanceBuffersStorage.data[FF], 0)))
    }, hF.d.prototype.thinInstancePartialBufferUpdate = function(FF, WF, SF) {
      if ("matrix" === FF) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof WF ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * SF * Float32Array.BYTES_PER_ELEMENT, 16 * WF), 16 * SF) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(WF, SF));
      else if (FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[FF]) {
        const CF = this._userThinInstanceBuffersStorage.vertexBuffers[FF];
        if ("number" === typeof WF) {
          const CF = new Float32Array(this._userThinInstanceBuffersStorage.data[FF].buffer, this._userThinInstanceBuffersStorage.data[FF].byteOffset + SF * this._userThinInstanceBuffersStorage.strides[FF] * Float32Array.BYTES_PER_ELEMENT, WF * this._userThinInstanceBuffersStorage.strides[FF]);
          this._userThinInstanceBuffersStorage.vertexBuffers[FF].updateDirectly(CF, SF * this._userThinInstanceBuffersStorage.strides[FF])
        } else CF.updateDirectly(WF, SF)
      }
    }, hF.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const FF = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let WF = 0; WF < this._thinInstanceDataStorage.instancesCount; ++WF) this._thinInstanceDataStorage.worldMatrices[WF] = CF.b.FromArray(FF, 16 * WF)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, hF.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const hF = this._thinInstanceDataStorage.boundingVectors;
      if (FF || !this.rawBoundingInfo) {
        if (hF.length = 0, AF && function(FF, WF, SF) {
            const AF = FF._userThinInstanceBuffersStorage,
              hF = AF?.data[dF],
              QF = AF?.strides[dF];
            if (!hF || !QF || QF < 4 || !PF(FF)) return !1;
            const rW = FF._thinInstanceDataStorage.matrixData;
            if (!rW) return !1;
            const gW = {},
              tW = CF.j.Vector4[0],
              TF = CF.j.HC[1],
              aW = CF.j.HC[2],
              kW = CF.j.HC[3],
              qW = CF.j.HC[4],
              VF = CF.j.HC[5],
              NF = CF.j.HC[6],
              DF = CF.j.Matrix[2],
              LF = FF.geometry ? FF.geometry.boundingBias : null,
              mW = FF.getTotalVertices();
            TF.DuF(Number.POSITIVE_INFINITY), aW.DuF(Number.NEGATIVE_INFINITY), kW.DuF(Number.POSITIVE_INFINITY), qW.DuF(Number.NEGATIVE_INFINITY);
            for (let uF = 0; uF < FF._thinInstanceDataStorage.instancesCount; ++uF) {
              const WF = uF * QF;
              tW.set(hF[WF], hF[WF + 1], hF[WF + 2], hF[WF + 3]);
              const AF = FF._getData({
                applyMorph: SF,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: tW,
                updatePositionsArray: !1,
                cache: gW
              }, null, bW.k.PositionKind);
              if (!AF) return !1;
              RF(AF, mW, VF, NF), iW(VF, NF, LF), TF.minimizeInPlace(VF), aW.maximizeInPlace(NF), CF.b.FromArrayToRef(rW, 16 * uF, DF), LF ? eF(VF, NF, DF, kW, qW) : EF(AF, mW, DF, kW, qW)
            }
            return !(!isFinite(TF.x) || !isFinite(kW.x)) && (FF.JWF().reConstruct(kW, qW), FF.rawBoundingInfo = new uF.b(TF, aW), function(FF, WF) {
              FF.length = 0;
              for (let SF = 0; SF < WF.boundingBox.vectors.length; ++SF) FF.push(WF.boundingBox.vectors[SF].clone())
            }(WF, FF.rawBoundingInfo), FF._updateBoundingInfo(), !0)
          }(this, hF, SF)) return;
        AF && this.bakedVertexAnimationManager?.isEnabled && PF(this) ? this.refreshBoundingInfo({
          applySkeleton: WF,
          applyMorph: SF,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(WF, SF);
        const FF = this.JWF();
        this.rawBoundingInfo = new uF.b(FF.minimum, FF.maximum)
      }
      const QF = this.JWF(),
        rW = this._thinInstanceDataStorage.matrixData;
      if (0 === hF.length)
        for (let CF = 0; CF < QF.boundingBox.vectors.length; ++CF) hF.push(QF.boundingBox.vectors[CF].clone());
      CF.j.HC[0].DuF(Number.POSITIVE_INFINITY), CF.j.HC[1].DuF(Number.NEGATIVE_INFINITY);
      for (let uF = 0; uF < this._thinInstanceDataStorage.instancesCount; ++uF) {
        CF.b.FromArrayToRef(rW, 16 * uF, CF.j.Matrix[0]);
        for (let FF = 0; FF < hF.length; ++FF) CF.r.TransformCoordinatesToRef(hF[FF], CF.j.Matrix[0], CF.j.HC[2]), CF.j.HC[0].minimizeInPlace(CF.j.HC[2]), CF.j.HC[1].maximizeInPlace(CF.j.HC[2])
      }
      QF.reConstruct(CF.j.HC[0], CF.j.HC[1]), this._updateBoundingInfo()
    }, hF.d.prototype._thinInstanceRecreateBuffer = function(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === FF ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, WF)) : "previousMatrix" === FF ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, WF)) : (FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[FF]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[FF] = new bW.k(this.sC(), this._userThinInstanceBuffersStorage.data[FF], FF, !WF, !1, this._userThinInstanceBuffersStorage.strides[FF], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[FF]))
    }, hF.d.prototype._thinInstanceUpdateBufferSize = function(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      FF === bW.k.ColorKind && (FF = bW.k.ColorInstanceKind);
      const SF = "matrix" === FF;
      if (!SF && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[FF])) return;
      const CF = SF ? 16 : this._userThinInstanceBuffersStorage.strides[FF],
        AF = SF ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[FF];
      let uF = SF ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[FF];
      const hF = (this._thinInstanceDataStorage.instancesCount + WF) * CF;
      let dF = AF;
      for (; dF < hF;) dF *= 2;
      if (!uF || AF != dF) {
        if (uF) {
          const FF = new Float32Array(dF);
          FF.set(uF, 0), uF = FF
        } else uF = new Float32Array(dF);
        SF ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", uF, !1), this._thinInstanceDataStorage.matrixData = uF, this._thinInstanceDataStorage.matrixBufferSize = dF, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", uF, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[FF]?.dispose(), this._userThinInstanceBuffersStorage.data[FF] = uF, this._userThinInstanceBuffersStorage.sizes[FF] = dF, this._userThinInstanceBuffersStorage.vertexBuffers[FF] = new bW.k(this.sC(), uF, FF, !0, !1, CF, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[FF]))
      }
    }, hF.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, hF.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  38418: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => TF,
      f: () => rW
    });
    var CF, AF, uF, hF, bW = SF(37972),
      dF = SF(37974),
      PF = SF(37994),
      RF = SF(35647),
      iW = SF(35623),
      eF = SF(38187),
      EF = SF(35660),
      QF = SF(37855);
    let rW = (() => {
      var FF;
      let WF, SF, CF, AF, uF, hF, EF, QF, rW, gW = eF.e,
        tW = [],
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        LF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [];
      return FF = class extends gW {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(WF) {
          this._billboardMode !== WF && (this._billboardMode = WF, this._cache.useBillboardPosition = 0 !== (this._billboardMode & FF.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(FF) {
          this._infiniteDistance !== FF && (this._infiniteDistance = FF)
        }
        constructor(WF) {
          let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(WF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new iW.r(0, 0, 1), this._up = new iW.r(0, 1, 0), this._right = new iW.r(1, 0, 0), this._position = (0, bW.k)(this, tW, iW.r.Zero()), this._rotation = ((0, bW.k)(this, TF), (0, bW.k)(this, aW, iW.r.Zero())), this._rotationQuaternion = ((0, bW.k)(this, kW), (0, bW.k)(this, qW, null)), this._scaling = ((0, bW.k)(this, VF), (0, bW.k)(this, NF, iW.r.One())), this._transformToBoneReferal = ((0, bW.k)(this, DF), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, bW.k)(this, LF, FF.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, bW.k)(this, mW), (0, bW.k)(this, OF, 1)), this._infiniteDistance = ((0, bW.k)(this, xW), (0, bW.k)(this, ZF, !1)), this.ignoreNonUniformScaling = ((0, bW.k)(this, oF), (0, bW.k)(this, YF, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, bW.k)(this, MF), (0, bW.k)(this, cW, !1)), this._poseMatrix = ((0, bW.k)(this, GF), null), this._localMatrix = iW.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = iW.r.Zero(), this._absoluteScaling = iW.r.Zero(), this._absoluteRotationQuaternion = iW.e.Identity(), this._pivotMatrix = iW.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new RF.b, this._nonUniformScaling = !1, SF && this.OWF().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(FF) {
          this._position = FF, this._markAsDirtyInternal()
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
        set rotation(FF) {
          this._rotation = FF, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get Ah() {
          return this._scaling
        }
        set Ah(FF) {
          this._scaling = FF, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(FF) {
          this._rotationQuaternion = FF, FF && this._rotation.DuF(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return iW.r.TransformNormalFromFloatsToRef(0, 0, this.OWF().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return iW.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return iW.r.TransformNormalFromFloatsToRef(this.OWF().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(FF) {
          return this._poseMatrix ? (this._poseMatrix.fdF(FF), this) : (this._poseMatrix = FF.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = iW.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const WF = this._cache;
          return this._billboardMode === WF.billboardMode && this._billboardMode === FF.BILLBOARDMODE_NONE && (!WF.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const FF = this._cache;
          FF.localMatrixUpdated = !1, FF.billboardMode = -1, FF.infiniteDistance = !1, FF.useBillboardPosition = !1
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
        setPreTransformMatrix(FF) {
          return this.setPivotMatrix(FF, !1)
        }
        setPivotMatrix(FF) {
          let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.fdF(FF), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = WF, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = iW.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            WF = arguments.length > 1 ? arguments[1] : void 0,
            SF = arguments.length > 2 ? arguments[2] : void 0;
          const CF = this.clone("Clone of " + (this.name || this.id), FF || this.parent, !0);
          CF && SF && SF(this, CF);
          for (const AF of this.getChildTransformNodes(!0)) AF.instantiateHierarchy(CF, WF, SF);
          return CF
        }
        cSF() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return FF ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.DuF(0), this._rotationQuaternion = this._rotationQuaternion || iW.e.Identity(), FF.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = FF, this._absolutePosition.FhF(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get XeF() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(FF) {
          if (!FF) return this;
          let WF, SF, CF;
          if (void 0 === FF.x) {
            if (arguments.length < 3) return this;
            WF = arguments[0], SF = arguments[1], CF = arguments[2]
          } else WF = FF.x, SF = FF.y, CF = FF.z;
          if (this.parent) {
            const FF = iW.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(FF), iW.r.TransformCoordinatesFromFloatsToRef(WF, SF, CF, FF, this.position)
          } else this.position.x = WF, this.position.y = SF, this.position.z = CF;
          return this._absolutePosition.fdF(FF), this
        }
        setPositionWithLocalVector(FF) {
          return this.computeWorldMatrix(), this.position = iW.r.TransformNormal(FF, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const FF = iW.j.Matrix[0];
          return this._localMatrix.invertToRef(FF), iW.r.TransformNormal(this.position, FF)
        }
        locallyTranslate(FF) {
          return this.computeWorldMatrix(!0), this.position = iW.r.TransformCoordinates(FF, this._localMatrix), this
        }
        lookAt(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const hF = FF._LookAtVectorCache,
            bW = 0 === uF ? this.position : this.getAbsolutePosition();
          if (WF.subtractToRef(bW, hF), this.setDirection(hF, SF, CF, AF), 1 === uF && this.parent)
            if (this.rotationQuaternion) {
              const FF = iW.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(FF);
              const WF = iW.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(WF), WF.invert(), FF.multiplyToRef(WF, FF), this.rotationQuaternion.fromRotationMatrix(FF)
            } else {
              const FF = iW.j.Quaternion[0];
              iW.e.FromEulerVectorToRef(this.rotation, FF);
              const WF = iW.j.Matrix[0];
              FF.toRotationMatrix(WF);
              const SF = iW.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(SF), SF.invert(), WF.multiplyToRef(SF, WF), FF.fromRotationMatrix(WF), FF.toEulerAnglesToRef(this.rotation)
            } return this
        }
        CAF(FF) {
          const WF = iW.r.Zero();
          return this.getDirectionToRef(FF, WF), WF
        }
        getDirectionToRef(FF, WF) {
          return iW.r.TransformNormalToRef(FF, this.getWorldMatrix(), WF), this
        }
        setDirection(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const AF = -Math.atan2(FF.z, FF.x) + Math.PI / 2,
            uF = Math.sqrt(FF.x * FF.x + FF.z * FF.z),
            hF = -Math.atan2(FF.y, uF);
          return this.rotationQuaternion ? iW.e.RotationYawPitchRollToRef(AF + WF, hF + SF, CF, this.rotationQuaternion) : (this.rotation.x = hF + SF, this.rotation.y = AF + WF, this.rotation.z = CF), this
        }
        setPivotPoint(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.OWF().getRenderId() && this.computeWorldMatrix(!0);
          const SF = this.getWorldMatrix();
          if (1 == WF) {
            const WF = iW.j.Matrix[0];
            SF.invertToRef(WF), FF = iW.r.TransformCoordinates(FF, WF)
          }
          return this.setPivotMatrix(iW.b.Translation(-FF.x, -FF.y, -FF.z), !0)
        }
        getPivotPoint() {
          const FF = iW.r.Zero();
          return this.getPivotPointToRef(FF), FF
        }
        getPivotPointToRef(FF) {
          return FF.x = -this._pivotMatrix.m[12], FF.y = -this._pivotMatrix.m[13], FF.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const FF = iW.r.Zero();
          return this.getAbsolutePivotPointToRef(FF), FF
        }
        getAbsolutePivotPointToRef(FF) {
          return this.getPivotPointToRef(FF), iW.r.TransformCoordinatesToRef(FF, this.getWorldMatrix(), FF), this
        }
        XbF(FF) {
          if (this._isDirty) return this;
          if (this._children)
            for (const WF of this._children) WF.XbF(FF);
          return super.XbF(FF)
        }
        setParent(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!WF && !this.parent) return this;
          const AF = iW.j.Quaternion[0],
            uF = iW.j.HC[0],
            hF = iW.j.HC[1],
            bW = iW.j.Matrix[1];
          iW.b.IdentityToRef(bW);
          const dF = iW.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let PF = this.rotationQuaternion;
          return PF || (PF = FF._TmpRotation, iW.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, PF)), iW.b.ComposeToRef(this.Ah, PF, this.position, dF), this.parent && dF.multiplyToRef(this.parent.computeWorldMatrix(!0), dF), WF && (WF.computeWorldMatrix(!0).invertToRef(bW), dF.multiplyToRef(bW, dF)), dF.decompose(hF, AF, uF, SF ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.fdF(AF) : AF.toEulerAnglesToRef(this.rotation), this.Ah.fdF(hF), this.position.fdF(uF), this.parent = WF, CF && this.setPivotMatrix(iW.b.Identity()), this
        }
        addChild(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return FF.setParent(this, WF), this
        }
        removeChild(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return FF.parent !== this || FF.setParent(null, WF), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(FF) {
          return this._nonUniformScaling !== FF && (this._nonUniformScaling = FF, !0)
        }
        attachToBone(FF, WF) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = WF, this.parent = FF, FF.getSkeleton().prepare(!0), FF.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = FF ? this._currentParentWhenAttachingToBone : null, this) : (FF && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(WF, SF, CF) {
          let AF;
          if (WF.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.DuF(0)), CF && 0 !== CF) {
            if (this.parent) {
              const FF = this.parent.getWorldMatrix(),
                CF = iW.j.Matrix[0];
              FF.invertToRef(CF), WF = iW.r.TransformNormal(WF, CF), FF.determinant() < 0 && (SF *= -1)
            }
            AF = iW.e.RotationAxisToRef(WF, SF, FF._RotationAxisCache), AF.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else AF = iW.e.RotationAxisToRef(WF, SF, FF._RotationAxisCache), this.rotationQuaternion.multiplyToRef(AF, this.rotationQuaternion);
          return this
        }
        rotateAround(FF, WF, SF) {
          WF.normalize(), this.rotationQuaternion || (this.rotationQuaternion = iW.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.DuF(0));
          const CF = iW.j.HC[0],
            AF = iW.j.HC[1],
            uF = iW.j.HC[2],
            hF = iW.j.Quaternion[0],
            bW = iW.j.Matrix[0],
            dF = iW.j.Matrix[1],
            PF = iW.j.Matrix[2],
            RF = iW.j.Matrix[3];
          return FF.subtractToRef(this.position, CF), iW.b.TranslationToRef(CF.x, CF.y, CF.z, bW), iW.b.TranslationToRef(-CF.x, -CF.y, -CF.z, dF), iW.b.RotationAxisToRef(WF, SF, PF), dF.multiplyToRef(PF, RF), RF.multiplyToRef(bW, RF), RF.decompose(AF, hF, uF), this.position.addInPlace(uF), hF.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(FF, WF, SF) {
          const CF = FF.scale(WF);
          if (SF && 0 !== SF) this.setAbsolutePosition(this.getAbsolutePosition().add(CF));
          else {
            const FF = this.getPositionExpressedInLocalSpace().add(CF);
            this.setPositionWithLocalVector(FF)
          }
          return this
        }
        addRotation(FF, WF, SF) {
          let CF;
          this.rotationQuaternion ? CF = this.rotationQuaternion : (CF = iW.j.Quaternion[1], iW.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, CF));
          const AF = iW.j.Quaternion[0];
          return iW.e.RotationYawPitchRollToRef(WF, FF, SF, AF), CF.multiplyInPlace(AF), this.rotationQuaternion || CF.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== FF.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const CF = this.OWF().getRenderId();
          if (!this._isDirty && !WF && (this._currentRenderId === CF || this.isSynchronized())) return this._currentRenderId = CF, this._worldMatrix;
          SF = SF || this.OWF().activeCamera, this._updateCache();
          const AF = this._cache;
          AF.pivotMatrixUpdated = !1, AF.billboardMode = this.billboardMode, AF.infiniteDistance = this.infiniteDistance, AF.parent = this._parentNode, this._currentRenderId = CF, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const uF = this._getEffectiveParent(),
            hF = FF._TmpScaling;
          let bW, dF = this._position;
          if (this._infiniteDistance && !this.parent && SF) {
            const WF = SF.getWorldMatrix().m;
            dF = FF._TmpTranslation, dF.FhF(this._position.x + WF[12], this._position.y + WF[13], this._position.z + WF[14])
          }
          if (hF.FhF(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, bW = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(iW.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.FhF(0, 0, 0))
            }
          } else bW = FF._TmpRotation, iW.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, bW);
          if (this._usePivotMatrix) {
            const FF = iW.j.Matrix[1];
            iW.b.ScalingToRef(hF.x, hF.y, hF.z, FF);
            const WF = iW.j.Matrix[0];
            bW.toRotationMatrix(WF), this._pivotMatrix.multiplyToRef(FF, iW.j.Matrix[4]), iW.j.Matrix[4].multiplyToRef(WF, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(dF.x, dF.y, dF.z)
          } else iW.b.ComposeToRef(hF, bW, dF, this._localMatrix);
          if (uF && uF.getWorldMatrix) {
            if (WF && uF.computeWorldMatrix(WF), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const FF = this.parent;
                FF.getSkeleton().prepare(), FF.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), iW.j.Matrix[7])
              } else iW.j.Matrix[7].fdF(uF.getWorldMatrix());
              const WF = iW.j.HC[5],
                SF = iW.j.HC[6],
                CF = iW.j.Quaternion[0];
              iW.j.Matrix[7].decompose(SF, CF, WF), iW.b.ScalingToRef(SF.x, SF.y, SF.z, iW.j.Matrix[7]), iW.j.Matrix[7].setTranslation(WF), FF.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(CF, WF), this._localMatrix.setTranslation(WF)), this._localMatrix.multiplyToRef(iW.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const FF = this.parent;
              FF.getSkeleton().prepare(), this._localMatrix.multiplyToRef(FF.getFinalMatrix(), iW.j.Matrix[6]), iW.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(uF.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.fdF(this._localMatrix);
          if (SF && this.billboardMode)
            if (AF.useBillboardPosition) {
              const WF = iW.j.HC[0];
              this._worldMatrix.getTranslationToRef(WF);
              const CF = SF.globalPosition;
              this._worldMatrix.invertToRef(iW.j.Matrix[1]);
              const AF = iW.j.HC[1];
              iW.r.TransformCoordinatesToRef(CF, iW.j.Matrix[1], AF), AF.normalize();
              const uF = -Math.atan2(AF.z, AF.x) + Math.PI / 2,
                hF = Math.sqrt(AF.x * AF.x + AF.z * AF.z),
                bW = -Math.atan2(AF.y, hF);
              if (iW.e.RotationYawPitchRollToRef(uF, bW, 0, iW.j.Quaternion[0]), (this.billboardMode & FF.BILLBOARDMODE_ALL) !== FF.BILLBOARDMODE_ALL) {
                const WF = iW.j.HC[1];
                iW.j.Quaternion[0].toEulerAnglesToRef(WF), (this.billboardMode & FF.BILLBOARDMODE_X) !== FF.BILLBOARDMODE_X && (WF.x = 0), (this.billboardMode & FF.BILLBOARDMODE_Y) !== FF.BILLBOARDMODE_Y && (WF.y = 0), (this.billboardMode & FF.BILLBOARDMODE_Z) !== FF.BILLBOARDMODE_Z && (WF.z = 0), iW.b.RotationYawPitchRollToRef(WF.y, WF.x, WF.z, iW.j.Matrix[0])
              } else iW.b.FromQuaternionToRef(iW.j.Quaternion[0], iW.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(iW.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(iW.j.HC[0])
            } else {
              const WF = iW.j.HC[0];
              this._worldMatrix.getTranslationToRef(WF), iW.j.Matrix[1].fdF(SF.getViewMatrix());
              const CF = this.OWF().useRightHandedSystem;
              if (CF && iW.j.Matrix[1].multiplyToRef(FF._TmpRHRestore, iW.j.Matrix[1]), iW.j.Matrix[1].setTranslationFromFloats(0, 0, 0), iW.j.Matrix[1].invertToRef(iW.j.Matrix[0]), (this.billboardMode & FF.BILLBOARDMODE_ALL) !== FF.BILLBOARDMODE_ALL) {
                iW.j.Matrix[0].decompose(void 0, iW.j.Quaternion[0], void 0);
                const WF = iW.j.HC[1];
                iW.j.Quaternion[0].toEulerAnglesToRef(WF), (this.billboardMode & FF.BILLBOARDMODE_X) !== FF.BILLBOARDMODE_X && (WF.x = 0), (this.billboardMode & FF.BILLBOARDMODE_Y) !== FF.BILLBOARDMODE_Y && (WF.y = 0), (this.billboardMode & FF.BILLBOARDMODE_Z) !== FF.BILLBOARDMODE_Z && (WF.z = 0), CF && (WF.y += Math.PI), iW.b.RotationYawPitchRollToRef(WF.y, WF.x, WF.z, iW.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(iW.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(iW.j.HC[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : uF && uF._nonUniformScaling ? this._updateNonUniformScalingState(uF._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.FhF(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = iW.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), FF) {
            const FF = this.getChildren();
            for (let WF = 0; WF < FF.length; ++WF) {
              const SF = FF[WF];
              if (SF) {
                SF.computeWorldMatrix();
                const FF = iW.j.Matrix[0];
                SF._localMatrix.multiplyToRef(this._localMatrix, FF);
                const WF = iW.j.Quaternion[0];
                FF.decompose(SF.Ah, WF, SF.position), SF.rotationQuaternion ? SF.rotationQuaternion.fdF(WF) : WF.toEulerAnglesToRef(SF.rotation)
              }
            }
          }
          this.Ah.FhF(1, 1, 1), this.position.FhF(0, 0, 0), this.rotation.FhF(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = iW.e.Identity()), this._worldMatrix = iW.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(FF) {
          return this.onAfterWorldMatrixUpdateObservable.add(FF), this
        }
        unregisterAfterWorldMatrixUpdate(FF) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(FF), this
        }
        getPositionInCameraSpace() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return FF || (FF = this.OWF().activeCamera), iW.r.TransformCoordinates(this.getAbsolutePosition(), FF.getViewMatrix())
        }
        getDistanceToCamera() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return FF || (FF = this.OWF().activeCamera), this.getAbsolutePosition().subtract(FF.globalPosition).length()
        }
        clone(WF, SF, CF) {
          const AF = PF.e.Clone((() => new FF(WF, this.OWF())), this);
          if (AF.name = WF, AF.id = WF, SF && (AF.parent = SF), !CF) {
            const FF = this.getDescendants(!0);
            for (let SF = 0; SF < FF.length; SF++) {
              const CF = FF[SF];
              CF.clone && CF.clone(WF + "." + CF.name, AF)
            }
          }
          return AF
        }
        serialize(FF) {
          const WF = PF.e.Serialize(this, FF);
          return WF.type = this.getClassName(), WF.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(WF), WF.localMatrix = this.getPivotMatrix().kRF(), WF.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (WF.cSF = !0), PF.e.AppendSerializedAnimations(this, WF), WF.Bu = this.serializeAnimationRanges(), WF
        }
        getChildTransformNodes(WF, SF) {
          const CF = [];
          return this._getDescendants(CF, WF, (WF => (!SF || SF(WF)) && WF instanceof FF)), CF
        }
        dispose(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.OWF().stopAnimation(this), this.OWF().removeTransformNode(this), this._parentContainer) {
            const FF = this._parentContainer.transformNodes.indexOf(this);
            FF > -1 && this._parentContainer.transformNodes.splice(FF, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), FF) {
            const FF = this.getChildTransformNodes(!0);
            for (const WF of FF) WF.parent = null, WF.computeWorldMatrix(!0)
          }
          super.dispose(FF, WF)
        }
        normalizeToUnitCube() {
          let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            SF = arguments.length > 2 ? arguments[2] : void 0,
            CF = null,
            AF = null;
          WF && (this.rotationQuaternion ? (AF = this.rotationQuaternion.clone(), this.rotationQuaternion.FhF(0, 0, 0, 1)) : this.rotation && (CF = this.rotation.clone(), this.rotation.FhF(0, 0, 0)));
          const uF = this.getHierarchyBoundingVectors(FF, SF),
            hF = uF.max.subtract(uF.min),
            bW = Math.max(hF.x, hF.y, hF.z);
          if (0 === bW) return this;
          const dF = 1 / bW;
          return this.Ah.scaleInPlace(dF), WF && (this.rotationQuaternion && AF ? this.rotationQuaternion.fdF(AF) : this.rotation && CF && this.rotation.fdF(CF)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const PF = "function" === typeof Symbol && Symbol.metadata ? Object.create(gW[Symbol.metadata] ?? null) : void 0;
        WF = [(0, dF.G)("position")], SF = [(0, dF.G)("rotation")], CF = [(0, dF.y)("rotationQuaternion")], AF = [(0, dF.G)("Ah")], uF = [(0, dF.H)("billboardMode")], hF = [(0, dF.H)()], EF = [(0, dF.H)("infiniteDistance")], QF = [(0, dF.H)()], rW = [(0, dF.H)()], (0, bW.j)(null, null, WF, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: FF => "_position" in FF,
            get: FF => FF._position,
            set: (FF, WF) => {
              FF._position = WF
            }
          },
          metadata: PF
        }, tW, TF), (0, bW.j)(null, null, SF, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: FF => "_rotation" in FF,
            get: FF => FF._rotation,
            set: (FF, WF) => {
              FF._rotation = WF
            }
          },
          metadata: PF
        }, aW, kW), (0, bW.j)(null, null, CF, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: FF => "_rotationQuaternion" in FF,
            get: FF => FF._rotationQuaternion,
            set: (FF, WF) => {
              FF._rotationQuaternion = WF
            }
          },
          metadata: PF
        }, qW, VF), (0, bW.j)(null, null, AF, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: FF => "_scaling" in FF,
            get: FF => FF._scaling,
            set: (FF, WF) => {
              FF._scaling = WF
            }
          },
          metadata: PF
        }, NF, DF), (0, bW.j)(null, null, uF, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "_billboardMode" in FF,
            get: FF => FF._billboardMode,
            set: (FF, WF) => {
              FF._billboardMode = WF
            }
          },
          metadata: PF
        }, LF, mW), (0, bW.j)(null, null, hF, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: FF => "scalingDeterminant" in FF,
            get: FF => FF.scalingDeterminant,
            set: (FF, WF) => {
              FF.scalingDeterminant = WF
            }
          },
          metadata: PF
        }, OF, xW), (0, bW.j)(null, null, EF, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: FF => "_infiniteDistance" in FF,
            get: FF => FF._infiniteDistance,
            set: (FF, WF) => {
              FF._infiniteDistance = WF
            }
          },
          metadata: PF
        }, ZF, oF), (0, bW.j)(null, null, QF, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: FF => "ignoreNonUniformScaling" in FF,
            get: FF => FF.ignoreNonUniformScaling,
            set: (FF, WF) => {
              FF.ignoreNonUniformScaling = WF
            }
          },
          metadata: PF
        }, YF, MF), (0, bW.j)(null, null, rW, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: FF => "reIntegrateRotationIntoRotationQuaternion" in FF,
            get: FF => FF.reIntegrateRotationIntoRotationQuaternion,
            set: (FF, WF) => {
              FF.reIntegrateRotationIntoRotationQuaternion = WF
            }
          },
          metadata: PF
        }, cW, GF), PF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PF
        })
      })(), FF.BILLBOARDMODE_NONE = 0, FF.BILLBOARDMODE_X = 1, FF.BILLBOARDMODE_Y = 2, FF.BILLBOARDMODE_Z = 4, FF.BILLBOARDMODE_ALL = 7, FF.BILLBOARDMODE_USE_POSITION = 128, FF.BillboardUseParentOrientation = !1, FF._TmpRotation = iW.e.Zero(), FF._TmpScaling = iW.r.Zero(), FF._TmpTranslation = iW.r.Zero(), FF._TmpRHRestore = iW.b.Scaling(1, 1, -1), FF._LookAtVectorCache = new iW.r(0, 0, 0), FF._RotationAxisCache = new iW.e, FF
    })();

    function gW(FF, WF, SF) {
      const CF = PF.e.Parse((() => new rW(FF.name, WF)), FF, WF, SF);
      if (FF.localMatrix ? CF.setPreTransformMatrix(iW.b.FromArray(FF.localMatrix)) : FF.pivotMatrix && CF.setPivotMatrix(iW.b.FromArray(FF.pivotMatrix)), CF.MWF(FF.isEnabled), CF._waitingParsedUniqueId = FF.uniqueId, void 0 !== FF.parentId && (CF._waitingParentId = FF.parentId), void 0 !== FF.parentInstanceIndex && (CF._waitingParentInstanceIndex = FF.parentInstanceIndex), FF.cSF && (CF._waitingFreezeWorldMatrix = FF.cSF), FF.animations) {
        for (let WF = 0; WF < FF.animations.length; WF++) {
          const SF = FF.animations[WF],
            AF = (0, EF.c)("BABYLON.Animation");
          AF && CF.animations.push(AF.Parse(SF))
        }
        eF.e.ParseAnimationRanges(CF, FF, WF)
      }
      return FF.autoAnimate && WF.beginAnimation(CF, FF.autoAnimateFrom, FF.autoAnimateTo, FF.autoAnimateLoop, FF.autoAnimateSpeed || 1), CF
    }
    let tW = !1;

    function TF() {
      tW || (tW = !0, rW.Parse = gW)
    }(CF = rW.prototype).yCF ?? (CF.yCF = (0, QF.j)("TransformNode", "yCF")), (AF = rW.prototype).applyImpulse ?? (AF.applyImpulse = (0, QF.j)("TransformNode", "applyImpulse")), (uF = rW.prototype).applyAngularImpulse ?? (uF.applyAngularImpulse = (0, QF.j)("TransformNode", "applyAngularImpulse")), (hF = rW.prototype).applyTorque ?? (hF.applyTorque = (0, QF.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(rW.prototype, "physicsBody") || Object.defineProperty(rW.prototype, "physicsBody", (0, QF.f)("TransformNode", "physicsBody"))
  },
  38390: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      try {
        const CF = FF.next();
        CF.done ? WF(CF) : CF.value ? CF.value.then((() => {
          CF.value = void 0, WF(CF)
        }), SF) : WF(CF)
      } catch (CF) {
        SF(CF)
      }
    }

    function AF() {
      let FF, WF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (SF, AF, uF) => {
        const hF = performance.now();
        void 0 === FF || hF - FF > WF ? (FF = hF, setTimeout((() => {
          CF(SF, AF, uF)
        }), 0)) : CF(SF, AF, uF)
      }
    }

    function uF(FF, WF, SF, CF, AF) {
      const uF = () => {
        let hF;
        const bW = FF => {
          FF.done ? SF(FF.value) : void 0 === hF ? hF = !0 : uF()
        };
        do {
          hF = void 0, AF && AF.aborted ? CF(new Error("Aborted")) : WF(FF, bW, CF), void 0 === hF && (hF = !1)
        } while (hF)
      };
      uF()
    }

    function hF(FF, WF) {
      let SF;
      return uF(FF, CF, (FF => SF = FF), (FF => {
        throw FF
      }), WF), SF
    }
    async function bW(FF, WF, SF) {
      return await new Promise(((CF, AF) => {
        uF(FF, WF, CF, AF, SF)
      }))
    }

    function dF(FF, WF) {
      return function() {
        return hF(FF(...arguments), WF)
      }
    }
    SF.d(WF, {
      e: () => AF,
      g: () => dF,
      h: () => bW,
      k: () => hF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);