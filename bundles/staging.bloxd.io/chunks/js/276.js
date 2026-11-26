export const id = 276;
export const ids = [276];
export const modules = {
  41478: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV,
      f: () => qV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41353),
      yV = xV(38296),
      pV = xV(38269),
      QV = xV(41486),
      nV = xV(39870),
      wV = xV(38318),
      ZV = xV(41138),
      vV = xV(39240),
      rV = xV(38908),
      kV = xV(41217),
      bV = xV(41279);
    let EV = (() => {
      var VV;
      let eV, xV, wV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV = QV.e,
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        lV = [],
        LV = [],
        fV = [],
        mV = [],
        KV = [],
        HV = [],
        uV = [],
        sV = [],
        SV = [],
        IV = [],
        dV = [],
        OV = [],
        Ve = [],
        ee = [],
        xe = [],
        Je = [],
        Ye = [];
      return VV = class extends RV {
        get position() {
          return this._position
        }
        set position(VV) {
          this._position = VV
        }
        set upVector(VV) {
          this._upVector = VV
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let eV, xV;
          if (this.mode === VV.PERSPECTIVE_CAMERA) this.fovMode === VV.FOVMODE_VERTICAL_FIXED ? (xV = 2 * this.minZ * Math.tan(this.fov / 2), eV = this.sk().getAspectRatio(this) * xV) : (eV = 2 * this.minZ * Math.tan(this.fov / 2), xV = eV / this.sk().getAspectRatio(this));
          else {
            const VV = this.sk().getRenderWidth() / 2,
              JV = this.sk().getRenderHeight() / 2;
            eV = (this.orthoRight ?? VV) - (this.orthoLeft ?? -VV), xV = (this.orthoTop ?? JV) - (this.orthoBottom ?? -JV)
          }
          return eV * xV
        }
        set orthoLeft(VV) {
          this._orthoLeft = VV;
          for (const eV of this._rigCameras) eV.orthoLeft = VV
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(VV) {
          this._orthoRight = VV;
          for (const eV of this._rigCameras) eV.orthoRight = VV
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(VV) {
          this._orthoBottom = VV;
          for (const eV of this._rigCameras) eV.orthoBottom = VV
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(VV) {
          this._orthoTop = VV;
          for (const eV of this._rigCameras) eV.orthoTop = VV
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(eV / (2 * VV))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(VV) {
          this._baseInertia = VV
        }
        set mode(VV) {
          this._mode = VV;
          for (const eV of this._rigCameras) eV.mode = VV
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(eV, xV, YV) {
          let QV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, kV.b)(), super(eV, YV, !1), this.inputs = (0, JV.l)(this, gV), this._position = (0, JV.l)(this, DV, pV.o.Zero()), this._upVector = ((0, JV.l)(this, iV), (0, JV.l)(this, CV, pV.o.Up())), this.oblique = ((0, JV.l)(this, aV), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, JV.l)(this, oV, .8), this.projectionPlaneTilt = ((0, JV.l)(this, cV), (0, JV.l)(this, hV, 0)), this.minZ = ((0, JV.l)(this, lV), (0, JV.l)(this, LV, 1)), this.maxZ = ((0, JV.l)(this, fV), (0, JV.l)(this, mV, 1e4)), this._baseInertia = ((0, JV.l)(this, KV), .9), this._mode = VV.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new vV.c(0, 0, 1, 1), this.layerMask = (0, JV.l)(this, HV, 268435455), this.fovMode = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, VV.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, JV.l)(this, SV), (0, JV.l)(this, IV, VV.RIG_MODE_NONE)), this.interaxialDistance = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, void 0)), this.isStereoscopicSideBySide = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, void 0)), this.ignoreCameraMaxZ = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, !1)), this.customRenderTargets = ((0, JV.l)(this, Ye), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new yV.c, this.onProjectionMatrixChangedObservable = new yV.c, this.onAfterCheckInputsObservable = new yV.c, this.onRestoreStateObservable = new yV.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new pV.d, this._postProcesses = new Array, this._activeMeshes = new UV.f(256), this._globalPosition = pV.o.Zero(), this._computedViewMatrix = pV.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = pV.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = pV.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.dD().defaultCameraLayerMask, this.dD().addCamera(this), QV && !this.dD().activeCamera && (this.dD().activeCamera = this), this.position = xV, this.renderPassId = this.dD().sk().createRenderPassId(`Camera ${eV}`)
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
          return "JB"
        }
        toString(VV) {
          let eV = "Name: " + this.name;
          if (eV += ", type: " + this.getClassName(), this.animations)
            for (let xV = 0; xV < this.animations.length; xV++) eV += ", animation[0]: " + this.animations[xV].toString(VV);
          return eV
        }
        applyVerticalCorrection() {
          const VV = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -VV.x : VV.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(VV) {
          return -1 !== this._activeMeshes.indexOf(VV)
        }
        isReady() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (VV)
            for (const eV of this._postProcesses)
              if (eV && !eV.isReady()) return !1;
          return super.isReady(VV)
        }
        _initCache() {
          super._initCache(), this._cache.position = new pV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new pV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(VV) {
          VV || super._updateCache(), this._cache.position.iG(this.position), this._cache.upVector.iG(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const eV = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let xV = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === eV;
          if (!xV) return !1;
          const JV = this.sk();
          return this.mode === VV.PERSPECTIVE_CAMERA ? xV = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === JV.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (xV = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === JV.getRenderWidth() && this._cache.renderHeight === JV.getRenderHeight(), this.oblique && (xV = xV && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), xV
        }
        attachControl(VV, eV) {}
        detachControl(VV) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== VV.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let VV = 0; VV < this._postProcesses.length; VV++)
            if (null !== this._postProcesses[VV]) return this._postProcesses[VV];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const VV = this._getFirstPostProcess();
          VV && VV.markTextureDirty();
          for (let eV = 0, xV = this._rigCameras.length; eV < xV; eV++) {
            const VV = this._rigCameras[eV],
              xV = VV._rigPostProcess;
            if (xV) {
              "pass" === xV.getEffectName() && (VV.isIntermediate = 0 === this._postProcesses.length), VV._postProcesses = this._postProcesses.slice(0).concat(xV), xV.markTextureDirty()
            } else VV._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !VV.isReusable() && this._postProcesses.indexOf(VV) > -1 ? (nV.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == eV || eV < 0 ? this._postProcesses.push(VV) : null === this._postProcesses[eV] ? this._postProcesses[eV] = VV : this._postProcesses.splice(eV, 0, VV), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.nJV(), this._postProcesses.indexOf(VV))
        }
        detachPostProcess(VV) {
          const eV = this._postProcesses.indexOf(VV); - 1 !== eV && (this._postProcesses[eV] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.nJV(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return pV.d.Identity()
        }
        getViewMatrix(VV) {
          return !VV && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.dD().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(VV) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== VV && (this._projectionMatrix = VV)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(eV) {
          if (this._doNotComputeProjectionMatrix || !eV && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const xV = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = xV, this._refreshFrustumPlanes = !0;
          const JV = this.sk(),
            YV = this.dD(),
            UV = JV.zYV;
          if (this.mode === VV.PERSPECTIVE_CAMERA) {
            let eV;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = JV.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), eV = YV.useRightHandedSystem ? pV.d.PerspectiveFovRHToRef : pV.d.PerspectiveFovLHToRef, eV(this.fov, JV.getAspectRatio(this), UV ? xV : this.minZ, UV ? this.minZ : xV, this._projectionMatrix, this.fovMode === VV.FOVMODE_VERTICAL_FIXED, JV.isNDCHalfZRange, this.projectionPlaneTilt, UV)
          } else {
            const VV = JV.getRenderWidth() / 2,
              eV = JV.getRenderHeight() / 2;
            YV.useRightHandedSystem ? this.oblique ? pV.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -VV, this.orthoRight ?? VV, this.orthoBottom ?? -eV, this.orthoTop ?? eV, UV ? xV : this.minZ, UV ? this.minZ : xV, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, JV.isNDCHalfZRange) : pV.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -VV, this.orthoRight ?? VV, this.orthoBottom ?? -eV, this.orthoTop ?? eV, UV ? xV : this.minZ, UV ? this.minZ : xV, this._projectionMatrix, JV.isNDCHalfZRange) : this.oblique ? pV.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -VV, this.orthoRight ?? VV, this.orthoBottom ?? -eV, this.orthoTop ?? eV, UV ? xV : this.minZ, UV ? this.minZ : xV, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, JV.isNDCHalfZRange) : pV.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -VV, this.orthoRight ?? VV, this.orthoBottom ?? -eV, this.orthoTop ?? eV, UV ? xV : this.minZ, UV ? this.minZ : xV, this._projectionMatrix, JV.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = JV.getRenderWidth(), this._cache.renderHeight = JV.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(VV) {
          return (this.radius || (this.target ? pV.o.Distance(this.position, this.target) : this.position.length())) + VV
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? rV.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = rV.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), eV && this.rigCameras.length > 0) {
            let eV = !1;
            for (const xV of this.rigCameras) xV._updateFrustumPlanes(), eV = eV || VV.isInFrustum(xV._frustumPlanes);
            return eV
          }
          return VV.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(VV) {
          return this._updateFrustumPlanes(), VV.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, ZV.n)("Ray")
        }
        getForwardRayToRef(VV) {
          throw (0, ZV.n)("Ray")
        }
        dispose(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.dD().stopAnimation(this), this.dD().removeCamera(this); this._rigCameras.length > 0;) {
            const VV = this._rigCameras.pop();
            VV && VV.dispose()
          }
          if (this._parentContainer) {
            const VV = this._parentContainer.cameras.indexOf(this);
            VV > -1 && this._parentContainer.cameras.splice(VV, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== VV.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let VV = this._postProcesses.length;
            for (; --VV >= 0;) {
              const eV = this._postProcesses[VV];
              eV && eV.dispose(this)
            }
          }
          let JV = this.customRenderTargets.length;
          for (; --JV >= 0;) this.customRenderTargets[JV].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.dD().sk().releaseRenderPassId(this.renderPassId), super.dispose(eV, xV)
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
        setCameraRigMode(eV, xV) {
          if (this.cameraRigMode !== eV) {
            for (; this._rigCameras.length > 0;) {
              const VV = this._rigCameras.pop();
              VV && VV.dispose()
            }
            if (this.cameraRigMode = eV, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = xV.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== VV.RIG_MODE_NONE) {
              const VV = this.createRigCamera(this.name + "_L", 0);
              VV && (VV._isLeftCamera = !0);
              const eV = this.createRigCamera(this.name + "_R", 1);
              eV && (eV._isRightCamera = !0), VV && eV && (this._rigCameras.push(VV), this._rigCameras.push(eV))
            }
            this._setRigMode(xV), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(VV) {}
        _getVRProjectionMatrix() {
          return pV.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.sk().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(VV, eV) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[VV] = eV, "interaxialDistance" === VV && (this._cameraRigParams.stereoHalfAngle = eV / .0637 * (Math.PI / 180))
        }
        createRigCamera(VV, eV) {
          return null
        }
        _updateRigCameras() {
          for (let VV = 0; VV < this._rigCameras.length; VV++) this._rigCameras[VV].minZ = this.minZ, this._rigCameras[VV].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[VV].fov = this.fov, this._rigCameras[VV].upVector.iG(this.upVector);
          this.cameraRigMode === VV.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const VV = bV.b.Serialize(this);
          return VV.uniqueId = this.uniqueId, VV.type = this.getClassName(), this.parent && this.parent._serializeAsParent(VV), this.inputs && this.inputs.serialize(VV), bV.b.AppendSerializedAnimations(this, VV), VV.TE = this.serializeAnimationRanges(), VV.isEnabled = this.isEnabled(), VV
        }
        clone(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const JV = bV.b.Clone(VV.GetConstructorFromName(this.getClassName(), eV, this.dD(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return JV.name = eV, JV.parent = xV, this.onClonedObservable.notifyObservers(JV), JV
        }
        L_(VV) {
          const eV = pV.o.Zero();
          return this.getDirectionToRef(VV, eV), eV
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(VV, eV) {
          pV.o.TransformNormalToRef(VV, this.getWorldMatrix(), eV)
        }
        static GetConstructorFromName(eV, xV, JV) {
          let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const yV = QV.e.Construct(eV, xV, JV, {
            interaxial_distance: YV,
            isStereoscopicSideBySide: UV
          });
          return yV || (() => VV._CreateDefaultParsedCamera(xV, JV))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let VV = this.dD().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (VV *= -1), VV
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(RV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, YV.I)("position")], xV = [(0, YV.I)("upVector")], wV = [(0, YV.J)()], EV = [(0, YV.J)()], BV = [(0, YV.J)()], jV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], (0, JV.i)(VV, null, wV, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: VV => "orthoLeft" in VV,
            get: VV => VV.orthoLeft
          },
          metadata: UV
        }, null, gV), (0, JV.i)(VV, null, EV, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: VV => "orthoRight" in VV,
            get: VV => VV.orthoRight
          },
          metadata: UV
        }, null, gV), (0, JV.i)(VV, null, BV, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: VV => "orthoBottom" in VV,
            get: VV => VV.orthoBottom
          },
          metadata: UV
        }, null, gV), (0, JV.i)(VV, null, jV, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: VV => "orthoTop" in VV,
            get: VV => VV.orthoTop
          },
          metadata: UV
        }, null, gV), (0, JV.i)(VV, null, PV, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: VV => "inertia" in VV,
            get: VV => VV.inertia
          },
          metadata: UV
        }, null, gV), (0, JV.i)(VV, null, AV, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: VV => "mode" in VV,
            get: VV => VV.mode
          },
          metadata: UV
        }, null, gV), (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: VV => "_position" in VV,
            get: VV => VV._position,
            set: (VV, eV) => {
              VV._position = eV
            }
          },
          metadata: UV
        }, DV, iV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: VV => "_upVector" in VV,
            get: VV => VV._upVector,
            set: (VV, eV) => {
              VV._upVector = eV
            }
          },
          metadata: UV
        }, CV, aV), (0, JV.i)(null, null, qV, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: VV => "fov" in VV,
            get: VV => VV.fov,
            set: (VV, eV) => {
              VV.fov = eV
            }
          },
          metadata: UV
        }, oV, cV), (0, JV.i)(null, null, tV, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: VV => "projectionPlaneTilt" in VV,
            get: VV => VV.projectionPlaneTilt,
            set: (VV, eV) => {
              VV.projectionPlaneTilt = eV
            }
          },
          metadata: UV
        }, hV, lV), (0, JV.i)(null, null, FV, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "minZ" in VV,
            get: VV => VV.minZ,
            set: (VV, eV) => {
              VV.minZ = eV
            }
          },
          metadata: UV
        }, LV, fV), (0, JV.i)(null, null, TV, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "maxZ" in VV,
            get: VV => VV.maxZ,
            set: (VV, eV) => {
              VV.maxZ = eV
            }
          },
          metadata: UV
        }, mV, KV), (0, JV.i)(null, null, NV, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: VV => "layerMask" in VV,
            get: VV => VV.layerMask,
            set: (VV, eV) => {
              VV.layerMask = eV
            }
          },
          metadata: UV
        }, HV, uV), (0, JV.i)(null, null, XV, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "fovMode" in VV,
            get: VV => VV.fovMode,
            set: (VV, eV) => {
              VV.fovMode = eV
            }
          },
          metadata: UV
        }, sV, SV), (0, JV.i)(null, null, MV, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "cameraRigMode" in VV,
            get: VV => VV.cameraRigMode,
            set: (VV, eV) => {
              VV.cameraRigMode = eV
            }
          },
          metadata: UV
        }, IV, dV), (0, JV.i)(null, null, zV, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: VV => "interaxialDistance" in VV,
            get: VV => VV.interaxialDistance,
            set: (VV, eV) => {
              VV.interaxialDistance = eV
            }
          },
          metadata: UV
        }, OV, Ve), (0, JV.i)(null, null, GV, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: VV => "isStereoscopicSideBySide" in VV,
            get: VV => VV.isStereoscopicSideBySide,
            set: (VV, eV) => {
              VV.isStereoscopicSideBySide = eV
            }
          },
          metadata: UV
        }, ee, xe), (0, JV.i)(null, null, WV, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: VV => "ignoreCameraMaxZ" in VV,
            get: VV => VV.ignoreCameraMaxZ,
            set: (VV, eV) => {
              VV.ignoreCameraMaxZ = eV
            }
          },
          metadata: UV
        }, Je, Ye), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV._CreateDefaultParsedCamera = (VV, eV) => {
        throw (0, ZV.n)("UniversalCamera")
      }, VV.PERSPECTIVE_CAMERA = 0, VV.ORTHOGRAPHIC_CAMERA = 1, VV.FOVMODE_VERTICAL_FIXED = 0, VV.FOVMODE_HORIZONTAL_FIXED = 1, VV.RIG_MODE_NONE = 0, VV.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, VV.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, VV.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, VV.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, VV.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, VV.RIG_MODE_VR = 20, VV.RIG_MODE_CUSTOM = 22, VV.ForceAttachControlToAlwaysPreventDefault = !1, VV
    })();

    function BV(VV, eV) {
      const xV = VV.type,
        JV = EV.GetConstructorFromName(xV, VV.name, eV, VV.interaxial_distance, VV.isStereoscopicSideBySide),
        YV = bV.b.Parse(JV, VV, eV);
      if (void 0 !== VV.parentId && (YV._waitingParentId = VV.parentId), void 0 !== VV.parentInstanceIndex && (YV._waitingParentInstanceIndex = VV.parentInstanceIndex), YV.inputs && (YV.inputs.parse(VV), YV._setupInputs()), VV.upVector && (YV.upVector = pV.o.FromArray(VV.upVector)), YV.setPosition && (YV.position.FeV(0, 0, 0), YV.setPosition(pV.o.FromArray(VV.position))), VV.target && YV.setTarget && YV.setTarget(pV.o.FromArray(VV.target)), VV.cameraRigMode) {
        const eV = VV.interaxial_distance ? {
          interaxialDistance: VV.interaxial_distance
        } : {};
        YV.setCameraRigMode(VV.cameraRigMode, eV)
      }
      if (VV.animations) {
        for (let eV = 0; eV < VV.animations.length; eV++) {
          const xV = VV.animations[eV],
            JV = (0, wV.c)("BABYLON.Animation");
          JV && YV.animations.push(JV.Parse(xV))
        }
        QV.e.ParseAnimationRanges(YV, VV, eV)
      }
      return VV.autoAnimate && eV.beginAnimation(YV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), void 0 !== VV.isEnabled && YV.pW(VV.isEnabled), YV
    }
    let jV = !1;

    function qV() {
      jV || (jV = !0, EV.Parse = BV)
    }
  },
  41494: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV) {
        this._cameraPosition = eV, this._behavior = xV, this.activeInput = !1, this.speed = 1, this.x_ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new JV.o, this.rotationAccumulatedPixels = new JV.o, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = JV.o.Zero(), this.rotationDeltaCurrentFrame = JV.o.Zero(), this._zoomVelocity = 0, this._panVelocity = new JV.o, this.referenceFrameRate = 60, this._rotationVelocity = new JV.o, this._prevFrameTimeMs = 0, this._scene = VV
      }
      computeCurrentFrameDeltas() {
        const VV = this._scene.sk().getDeltaTime(),
          eV = this._getEffectiveDeltaMs(VV);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.HVV(0), this.rotationDeltaCurrentFrame.HVV(0), this.zoomDeltaCurrentFrame = 0, void(VV > 0 && (this._prevFrameTimeMs = VV));
        this.panDeltaCurrentFrame.HVV(0), this.rotationDeltaCurrentFrame.HVV(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.FeV(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * eV, this.panDeltaCurrentFrame), this._rotationVelocity.FeV(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.FeV(this._rotationVelocity.x * this.speed * this.rotationXSpeed * eV, this._rotationVelocity.y * this.speed * this.rotationYSpeed * eV, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.x_ * this._zoomSpeedMultiplier) * eV, VV > 0 && (this._prevFrameTimeMs = VV), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.HVV(0), this.rotationAccumulatedPixels.HVV(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.HVV(0), this.rotationAccumulatedPixels.HVV(0)
      }
      resetPanVelocity() {
        this._panVelocity.HVV(0), this.panAccumulatedPixels.HVV(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(VV) {
        const eV = this._scene.sk().getDeltaTime(),
          xV = this._getEffectiveDeltaMs(eV),
          JV = 1e3 / this.referenceFrameRate;
        return Math.pow(VV, xV / JV)
      }
      getFrameIndependentInputScale(VV) {
        const eV = 1 - VV;
        if (eV <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(VV)) / eV
      }
      _getEffectiveDeltaMs(VV) {
        return VV > 0 ? VV : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(VV, eV, xV) {
        let JV = VV;
        const YV = this._scene.sk().getDeltaTime(),
          UV = this._getEffectiveDeltaMs(YV);
        if (0 === UV) return JV;
        const yV = this.getFrameIndependentDecay(xV);
        if (JV *= yV, 0 !== eV || this.activeInput) {
          const VV = 1 - xV;
          JV += eV / UV * (VV > 0 ? (1 - yV) / VV : 1)
        } else Math.abs(JV) < 1e-6 && (JV = 0);
        return JV
      }
    }
  },
  41499: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor(VV, eV) {
        this.inputMap = [], this.handlers = VV, this._createDefaultEntries = eV, this.resetInputMap()
      }
      resolveInteraction(VV, eV) {
        for (const xV of this.inputMap)
          if (xV.source === VV && this._entryMatches(xV, eV)) return xV;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(VV, eV, xV) {
        const JV = this.inputMap;
        for (let YV = 0; YV < JV.length; YV++) {
          const UV = JV[YV];
          if (UV.source === VV && UV.interaction === eV && this._entryConditionsMatch(UV, xV)) return UV
        }
      }
      getEntries(VV, eV, xV) {
        const JV = [],
          YV = this.inputMap;
        for (let UV = 0; UV < YV.length; UV++) {
          const yV = YV[UV];
          yV.source === VV && yV.interaction === eV && this._entryConditionsMatch(yV, xV) && JV.push(yV)
        }
        return JV
      }
      addEntry(VV) {
        const eV = this._entrySpecificity(VV);
        let xV = this.inputMap.length;
        for (let JV = 0; JV < this.inputMap.length; JV++)
          if (this._entrySpecificity(this.inputMap[JV]) < eV) {
            xV = JV;
            break
          } this.inputMap.splice(xV, 0, VV)
      }
      setInteraction(VV, eV, xV) {
        const JV = this.resolveInteraction(VV, eV);
        return JV && this._entryCoversAllConditionsOf(JV, eV) ? (JV.interaction = xV, !0) : (this.addEntry({
          source: VV,
          ...eV ?? {},
          interaction: xV
        }), !0)
      }
      _entryCoversAllConditionsOf(VV, eV) {
        if (!eV) return !0;
        const xV = VV;
        for (const JV of Object.keys(eV)) {
          const VV = eV[JV];
          if (void 0 !== VV)
            if ("modifiers" === JV) {
              const eV = xV.modifiers ?? {};
              for (const xV of Object.keys(VV))
                if (void 0 !== VV[xV] && void 0 === eV[xV]) return !1
            } else if (void 0 === xV[JV]) return !1
        }
        return !0
      }
      setInteractions(VV, eV, xV) {
        let JV = 0;
        const YV = this.inputMap;
        for (let UV = 0; UV < YV.length; UV++) {
          const yV = YV[UV];
          yV.source === VV && this._entryMatches(yV, eV) && (yV.interaction = xV, JV++)
        }
        return JV
      }
      _entryMatches(VV, eV) {
        switch (VV.source) {
          case "pointer":
            return (void 0 === VV.button || VV.button === eV?.button) && this._matchModifiers(VV.modifiers, eV?.modifiers);
          case "wheel":
            return this._matchModifiers(VV.modifiers, eV?.modifiers);
          case "touch":
            return void 0 === VV.touchCount || VV.touchCount === eV?.touchCount;
          case "keyboard":
            return (void 0 === VV.key || (Array.isArray(VV.key) ? -1 !== VV.key.indexOf(eV?.key ?? -1) : VV.key === eV?.key)) && this._matchModifiers(VV.modifiers, eV?.modifiers)
        }
      }
      _entryConditionsMatch(VV, eV) {
        if (!eV) return !0;
        switch (VV.source) {
          case "pointer":
            return (!("button" in eV) || VV.button === eV.button) && (!("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers));
          case "wheel":
            return !("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers);
          case "touch":
            return !("touchCount" in eV) || VV.touchCount === eV.touchCount;
          case "keyboard":
            if ("key" in eV) {
              if (void 0 === VV.key) return void 0 === eV.key;
              if (void 0 === eV.key || (Array.isArray(VV.key) ? -1 === VV.key.indexOf(eV.key) : VV.key !== eV.key)) return !1
            }
            return !("modifiers" in eV) || this._entryModifiersMatch(VV.modifiers, eV.modifiers)
        }
      }
      _entrySpecificity(VV) {
        let eV = 0;
        return "button" in VV && void 0 !== VV.button && eV++, "key" in VV && void 0 !== VV.key && eV++, "touchCount" in VV && void 0 !== VV.touchCount && eV++, "modifiers" in VV && VV.modifiers && eV++, eV
      }
      _matchModifiers(VV, eV) {
        return !VV || (void 0 === VV.ctrl || VV.ctrl === (eV?.ctrl ?? !1)) && ((void 0 === VV.shift || VV.shift === (eV?.shift ?? !1)) && (void 0 === VV.alt || VV.alt === (eV?.alt ?? !1)))
      }
      _entryModifiersMatch(VV, eV) {
        if (!eV) return !VV;
        return void 0 !== eV.ctrl || void 0 !== eV.shift || void 0 !== eV.alt ? (void 0 === eV.ctrl || VV?.ctrl === eV.ctrl) && ((void 0 === eV.shift || VV?.shift === eV.shift) && (void 0 === eV.alt || VV?.alt === eV.alt)) : !VV || void 0 === VV.ctrl && void 0 === VV.shift && void 0 === VV.alt
      }
    }
  },
  41470: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => BV,
      g: () => bV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41478),
      yV = xV(38269),
      pV = xV(38272),
      QV = xV(41491),
      nV = xV(41486),
      wV = xV(41494),
      ZV = xV(41499);
    class vV extends wV.e {
      constructor(VV, eV, xV) {
        super(VV, eV, xV), this.input = new ZV.b({
          translate: (VV, eV, xV) => {
            this.panAccumulatedPixels.x += VV, this.panAccumulatedPixels.y += eV, this.panAccumulatedPixels.z += xV
          },
          rotate: (VV, eV) => {
            this.rotationAccumulatedPixels.x += VV, this.rotationAccumulatedPixels.y += eV
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
    const rV = yV.d.Zero(),
      kV = yV.h.Identity();
    let bV = (() => {
        var VV;
        let eV, xV, nV, wV, ZV = UV.c,
          bV = [],
          EV = [],
          BV = [],
          jV = [],
          qV = [],
          tV = [],
          FV = [],
          TV = [];
        return VV = class extends ZV {
          get inertia() {
            return this._targetInertia
          }
          set inertia(VV) {
            this._targetInertia = VV, this.movement && (this.movement.panInertia = VV, this.movement.rotationInertia = VV)
          }
          constructor(VV, eV, xV) {
            super(VV, eV, xV, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new yV.o(0, 0, 0), this.cameraRotation = new yV.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, JV.l)(this, bV, !1), this.rotation = ((0, JV.l)(this, EV), (0, JV.l)(this, BV, void 0)), this.rotationQuaternion = (0, JV.l)(this, jV), this.speed = (0, JV.l)(this, qV, 2), this.noRotationConstraint = ((0, JV.l)(this, tV), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = pV.b, this._rotationEpsilon = pV.b, this.lockedTarget = (0, JV.l)(this, FV, null), this._currentTarget = ((0, JV.l)(this, TV), yV.o.Zero()), this._initialFocalDistance = 1, this._viewMatrix = yV.d.Zero(), this._cameraTransformMatrix = yV.d.Zero(), this._cameraRotationMatrix = yV.d.Zero(), this._transformedReferencePoint = yV.o.Zero(), this._deferredPositionUpdate = new yV.o, this._deferredRotationQuaternionUpdate = new yV.h, this._deferredRotationUpdate = new yV.o, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = yV.o.Forward(this.dD().useRightHandedSystem), this.rotation = new yV.o(0, this.dD().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new vV(this.dD(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(VV) {
            this.getWorldMatrix();
            const eV = yV.l.Ik[0],
              xV = yV.l.Ik[1];
            return xV.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(xV, eV), eV.scaleInPlace(VV), this.globalPosition.add(eV)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const VV = this.lockedTarget;
              VV.computeWorldMatrix().getTranslationToRef(VV.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.FeV(0, 0, 0), this.cameraRotation.FeV(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new yV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new yV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new yV.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(VV) {
            VV || super._updateCache();
            const eV = this._getLockedTargetPosition();
            eV ? this._cache.lockedTarget ? this._cache.lockedTarget.iG(eV) : this._cache.lockedTarget = eV.clone() : this._cache.lockedTarget = null, this._cache.rotation.iG(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.iG(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const VV = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(VV) : !VV) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const VV = this.sk();
            return this.speed * Math.sqrt(VV.getDeltaTime() / (100 * VV.getFps()))
          }
          setTarget(VV) {
            this.upVector.normalize(), this._initialFocalDistance = VV.subtract(this.position).length(), this.position.z === VV.z && (this.position.z += pV.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.dD().useRightHandedSystem ? yV.d.LookAtRHToRef(this.position, VV, yV.o.UpReadOnly, rV) : yV.d.LookAtLHToRef(this.position, VV, yV.o.UpReadOnly, rV), rV.invert();
            const eV = this.rotationQuaternion || kV;
            yV.h.FromRotationMatrixToRef(rV, eV), eV.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(VV) {
            this.setTarget(VV)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(yV.l.Matrix[0]), yV.o.TransformNormalToRef(this.cameraDirection, yV.l.Matrix[0], yV.l.Ik[0]), this._deferredPositionUpdate.addInPlace(yV.l.Ik[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.iG(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.iG(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const VV = this.movement,
              eV = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            VV.panAccumulatedPixels.addInPlace(this.cameraDirection), VV.rotationAccumulatedPixels.x += this.cameraRotation.x, VV.rotationAccumulatedPixels.y += this.cameraRotation.y, VV.computeCurrentFrameDeltas(), this.cameraDirection.iG(VV.panDeltaCurrentFrame), this.cameraRotation.set(VV.rotationDeltaCurrentFrame.x, VV.rotationDeltaCurrentFrame.y);
            const xV = this.speed * this._panningEpsilon;
            !eV && Math.abs(this.cameraDirection.x) < xV && Math.abs(this.cameraDirection.y) < xV && Math.abs(this.cameraDirection.z) < xV && (this.cameraDirection.HVV(0), VV.resetPanVelocity());
            const JV = this.invertRotation ? -this.inverseRotationSpeed : 1,
              YV = this._decideIfNeedsToMove(),
              UV = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.iG(this.rotation), this._deferredPositionUpdate.iG(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.iG(this.rotationQuaternion), YV && this._updatePosition(), UV) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * JV, this._deferredRotationUpdate.y += this.cameraRotation.y * JV, !this.noRotationConstraint) {
                const VV = 1.570796;
                this._deferredRotationUpdate.x > VV && (this._deferredRotationUpdate.x = VV), this._deferredRotationUpdate.x < -VV && (this._deferredRotationUpdate.x = -VV)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.iG(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (yV.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.iG(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.HVV(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : yV.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return yV.o.TransformNormalToRef(yV.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), yV.o.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? QV.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (yV.h.FromEulerVectorToRef(this.rotation, kV), QV.e.Y.rotateByQuaternionToRef(kV, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(VV, eV, xV) {
            if (this.dD().useRightHandedSystem ? yV.d.LookAtRHToRef(VV, eV, xV, this._viewMatrix) : yV.d.LookAtLHToRef(VV, eV, xV, this._viewMatrix), this.parent) {
              const VV = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(VV, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(eV, xV) {
            if (this.cameraRigMode !== UV.c.RIG_MODE_NONE) {
              const xV = new VV(eV, this.position.clone(), this.dD());
              return xV.isRigCamera = !0, xV.rigParent = this, this.cameraRigMode === UV.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new yV.h), xV._cameraRigParams = {}, xV.rotationQuaternion = new yV.h), xV.mode = this.mode, xV.orthoLeft = this.orthoLeft, xV.orthoRight = this.orthoRight, xV.orthoTop = this.orthoTop, xV.orthoBottom = this.orthoBottom, xV
            }
            return null
          }
          _updateRigCameras() {
            const VV = this._rigCameras[0],
              eV = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case UV.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case UV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case UV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case UV.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case UV.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const xV = this.cameraRigMode === UV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  JV = this.cameraRigMode === UV.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * xV, VV), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * JV, eV);
                break
              }
              case UV.c.RIG_MODE_VR:
                VV.rotationQuaternion && eV.rotationQuaternion && this.rotationQuaternion ? (VV.rotationQuaternion.iG(this.rotationQuaternion), eV.rotationQuaternion.iG(this.rotationQuaternion)) : (VV.rotation.iG(this.rotation), eV.rotation.iG(this.rotation)), VV.position.iG(this.position), eV.position.iG(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(eV, xV) {
            this.getTarget().subtractToRef(this.position, VV._TargetFocalPoint), VV._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const JV = VV._TargetFocalPoint.addInPlace(this.position);
            yV.d.TranslationToRef(-JV.x, -JV.y, -JV.z, VV._TargetTransformMatrix), VV._TargetTransformMatrix.multiplyToRef(yV.d.RotationAxis(xV.upVector, eV), VV._RigCamTransformMatrix), yV.d.TranslationToRef(JV.x, JV.y, JV.z, VV._TargetTransformMatrix), VV._RigCamTransformMatrix.multiplyToRef(VV._TargetTransformMatrix, VV._RigCamTransformMatrix), yV.o.TransformCoordinatesToRef(this.position, VV._RigCamTransformMatrix, xV.position), xV.setTarget(JV)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.I)()], nV = [(0, YV.J)()], wV = [(0, YV.C)("lockedTargetId")], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: VV => "updateUpVectorFromRotation" in VV,
              get: VV => VV.updateUpVectorFromRotation,
              set: (VV, eV) => {
                VV.updateUpVectorFromRotation = eV
              }
            },
            metadata: UV
          }, bV, EV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: VV => "rotation" in VV,
              get: VV => VV.rotation,
              set: (VV, eV) => {
                VV.rotation = eV
              }
            },
            metadata: UV
          }, BV, jV), (0, JV.i)(null, null, nV, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: VV => "speed" in VV,
              get: VV => VV.speed,
              set: (VV, eV) => {
                VV.speed = eV
              }
            },
            metadata: UV
          }, qV, tV), (0, JV.i)(null, null, wV, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: VV => "lockedTarget" in VV,
              get: VV => VV.lockedTarget,
              set: (VV, eV) => {
                VV.lockedTarget = eV
              }
            },
            metadata: UV
          }, FV, TV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV._RigCamTransformMatrix = new yV.d, VV._TargetTransformMatrix = new yV.d, VV._TargetFocalPoint = new yV.o, VV
      })(),
      EV = !1;

    function BV() {
      EV || (EV = !0, nV.e.AddNodeConstructor("TargetCamera", ((VV, eV) => () => new bV(VV, yV.o.Zero(), eV))))
    }
  },
  41212: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(41150);
    let YV = !1;

    function UV() {
      YV || (YV = !0, JV.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, JV.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, JV.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, JV.d.prototype.getAspectRatio = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = VV.viewport;
        return this.getRenderWidth(eV) * xV.width / (this.getRenderHeight(eV) * xV.height)
      }, JV.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, JV.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41293: (VV, eV, xV) => {
    var JV = xV(41150),
      YV = xV(41300);
    let UV = !1;
    UV || (UV = !0, (0, YV.x)(), JV.d.prototype._loadFileAsync = async function(VV, eV, xV) {
      return await new Promise(((JV, YV) => {
        this._loadFile(VV, (VV => {
          JV(VV)
        }), void 0, eV, xV, ((VV, eV) => {
          YV(eV)
        }))
      }))
    })
  },
  41290: (VV, eV, xV) => {
    (0, xV(41217).b)()
  },
  41217: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(41150);
    let YV = !1;

    function UV() {
      YV || (YV = !0, JV.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, JV.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, JV.d.prototype.createRenderPassId = function(VV) {
        const eV = ++JV.d._RenderPassIdCounter;
        return this._renderPassNames[eV] = VV ?? "NONAME", eV
      }, JV.d.prototype.releaseRenderPassId = function(VV) {
        this._renderPassNames[VV] = void 0;
        for (let eV = 0; eV < this.scenes.length; ++eV) {
          const xV = this.scenes[eV];
          for (let eV = 0; eV < xV.meshes.length; ++eV) {
            const JV = xV.meshes[eV];
            if (JV._releaseRenderPassId(VV), JV.hT)
              for (let eV = 0; eV < JV.hT.length; ++eV) {
                JV.hT[eV]._removeDrawWrapper(VV)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(VV)
      })
    }
  },
  41326: (VV, eV, xV) => {
    var JV = xV(41329),
      YV = xV(41150);
    let UV = !1;
    UV || (UV = !0, YV.d.GetCompatibleTextureLoader = JV.e)
  },
  41225: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(41095);
    let YV = !1;

    function UV() {
      YV || (YV = !0, JV.ThinEngine.prototype.setAlphaMode = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[xV] === VV) {
          if (!eV) {
            const eV = 0 === VV;
            this.depthCullingState.depthMask !== eV && (this.depthCullingState.depthMask = eV)
          }
          return
        }
        const JV = 0 === VV;
        this._alphaState.setAlphaBlend(!JV, xV), this._alphaState.setAlphaMode(VV, xV), eV || (this.depthCullingState.depthMask = JV), this._alphaMode[xV] = VV
      })
    }
  },
  41234: (VV, eV, xV) => {
    var JV = xV(41077),
      YV = xV(39870),
      UV = xV(41095),
      yV = xV(41240),
      pV = xV(41201);
    class QV extends yV.c {
      setDepthStencilTexture(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(VV, eV), !VV) return;
        const xV = this._engine,
          JV = this._context,
          YV = VV._hardwareTexture;
        if (YV && VV._autoMSAAManagement && this._MSAAFramebuffer) {
          const eV = xV._currentFramebuffer;
          xV._bindUnboundFramebuffer(this._MSAAFramebuffer), JV.framebufferRenderbuffer(JV.FRAMEBUFFER, (0, pV.e)(VV.format) ? JV.DEPTH_STENCIL_ATTACHMENT : JV.DEPTH_ATTACHMENT, JV.RENDERBUFFER, YV.getMSAARenderBuffer()), xV._bindUnboundFramebuffer(eV)
        }
      }
      constructor(VV, eV, xV, JV, YV) {
        super(VV, eV, xV, JV), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = YV
      }
      _cloneRenderTargetWrapper() {
        let VV;
        return this._colorTextureArray && this._depthStencilTextureArray ? (VV = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), VV.texture.isReady = !0) : VV = super._cloneRenderTargetWrapper(), VV
      }
      _swapRenderTargetWrapper(VV) {
        super._swapRenderTargetWrapper(VV), VV._framebuffer = this._framebuffer, VV._depthStencilBuffer = this._depthStencilBuffer, VV._MSAAFramebuffer = this._MSAAFramebuffer, VV._colorTextureArray = this._colorTextureArray, VV._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const VV = this._engine,
            eV = VV._currentFramebuffer,
            xV = this._context;
          VV._bindUnboundFramebuffer(this._framebuffer), xV.framebufferRenderbuffer(xV.FRAMEBUFFER, xV.DEPTH_STENCIL_ATTACHMENT, xV.RENDERBUFFER, null), xV.framebufferRenderbuffer(xV.FRAMEBUFFER, xV.DEPTH_ATTACHMENT, xV.RENDERBUFFER, null), xV.framebufferRenderbuffer(xV.FRAMEBUFFER, xV.STENCIL_ATTACHMENT, xV.RENDERBUFFER, null), VV._bindUnboundFramebuffer(eV), xV.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(VV, eV, xV, JV, YV, UV)
      }
      shareDepth(VV) {
        super.shareDepth(VV);
        const eV = this._context,
          xV = this._depthStencilBuffer,
          JV = VV._MSAAFramebuffer || VV._framebuffer,
          YV = this._engine;
        VV._depthStencilBuffer && VV._depthStencilBuffer !== xV && eV.deleteRenderbuffer(VV._depthStencilBuffer), VV._depthStencilBuffer = xV;
        const UV = VV._generateStencilBuffer ? eV.DEPTH_STENCIL_ATTACHMENT : eV.DEPTH_ATTACHMENT;
        YV._bindUnboundFramebuffer(JV), eV.framebufferRenderbuffer(eV.FRAMEBUFFER, UV, eV.RENDERBUFFER, xV), YV._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const YV = VV._hardwareTexture;
        if (!YV) return;
        const UV = this._framebuffer,
          yV = this._engine,
          pV = yV._currentFramebuffer;
        let QV;
        if (yV._bindUnboundFramebuffer(UV), yV.Nb > 1) {
          const UV = this._context;
          QV = UV["COLOR_ATTACHMENT" + eV], VV.is2DArray || VV.is3D ? (xV = xV ?? this.layerIndices?.[eV] ?? 0, UV.framebufferTextureLayer(UV.FRAMEBUFFER, QV, YV.underlyingResource, JV, xV)) : VV.isCube ? (xV = xV ?? this.faceIndices?.[eV] ?? 0, UV.framebufferTexture2D(UV.FRAMEBUFFER, QV, UV.TEXTURE_CUBE_MAP_POSITIVE_X + xV, YV.underlyingResource, JV)) : UV.framebufferTexture2D(UV.FRAMEBUFFER, QV, UV.TEXTURE_2D, YV.underlyingResource, JV)
        } else {
          const VV = this._context;
          QV = VV["COLOR_ATTACHMENT" + eV + "_WEBGL"];
          const UV = void 0 !== xV ? VV.TEXTURE_CUBE_MAP_POSITIVE_X + xV : VV.TEXTURE_2D;
          VV.framebufferTexture2D(VV.FRAMEBUFFER, QV, UV, YV.underlyingResource, JV)
        }
        if (VV._autoMSAAManagement && this._MSAAFramebuffer) {
          const VV = this._context;
          yV._bindUnboundFramebuffer(this._MSAAFramebuffer), VV.framebufferRenderbuffer(VV.FRAMEBUFFER, QV, VV.RENDERBUFFER, YV.getMSAARenderBuffer())
        }
        yV._bindUnboundFramebuffer(pV)
      }
      setTexture(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(VV, eV, xV), this._bindTextureRenderTarget(VV, eV)
      }
      setLayerAndFaceIndices(VV, eV) {
        if (super.setLayerAndFaceIndices(VV, eV), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const xV = this._attachments?.length ?? this.textures.length;
        for (let JV = 0; JV < xV; JV++) {
          const VV = this.textures[JV];
          VV && (VV.is2DArray || VV.is3D ? this._bindTextureRenderTarget(VV, JV, this.layerIndices[JV]) : VV.isCube ? this._bindTextureRenderTarget(VV, JV, this.faceIndices[JV]) : this._bindTextureRenderTarget(VV, JV))
        }
      }
      setLayerAndFaceIndex() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(VV, eV, xV), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const JV = this.textures[VV];
        JV.is2DArray || JV.is3D ? this._bindTextureRenderTarget(this.textures[VV], VV, this.layerIndices[VV]) : JV.isCube && this._bindTextureRenderTarget(this.textures[VV], VV, this.faceIndices[VV])
      }
      resolveMSAATextures() {
        const VV = this._engine,
          eV = VV._currentFramebuffer;
        VV._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), VV._bindUnboundFramebuffer(eV)
      }
      dispose() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const eV = this._context;
        VV || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (eV.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (eV.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (eV.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(VV)
      }
    }
    let nV = !1;
    nV || (nV = !0, UV.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(VV, eV, xV) {
      const JV = new QV(VV, eV, xV, this, this._gl);
      return this._renderTargetWrapperCache.push(JV), JV
    }, UV.ThinEngine.prototype.createRenderTargetTexture = function(VV, eV) {
      const xV = this._createHardwareRenderTargetWrapper(!1, !1, VV);
      let JV, YV, UV = !0,
        yV = !1,
        pV = !1,
        QV = 1;
      void 0 !== eV && "object" === typeof eV && (UV = eV.generateDepthBuffer ?? !0, yV = !!eV.generateStencilBuffer, pV = !!eV.noColorAttachment, JV = eV.colorAttachment, QV = eV.samples ?? 1, YV = eV.label);
      const nV = JV || (pV ? null : this._createInternalTexture(VV, eV, !0, 5)),
        wV = VV.width || VV,
        ZV = VV.height || VV,
        vV = this._currentFramebuffer,
        rV = this._gl,
        kV = rV.createFramebuffer();
      if (this._bindUnboundFramebuffer(kV), xV._depthStencilBuffer = this._setupFramebufferDepthAttachments(yV, UV, wV, ZV), !nV || nV.is2DArray || nV.is3D || rV.framebufferTexture2D(rV.FRAMEBUFFER, rV.COLOR_ATTACHMENT0, rV.TEXTURE_2D, nV._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(vV), xV.label = YV ?? "RenderTargetWrapper", xV._framebuffer = kV, xV._generateDepthBuffer = UV, xV._generateStencilBuffer = yV, xV.setTextures(nV), JV) {
        if (xV._samples = JV.samples, JV.samples > 1) {
          const VV = JV._hardwareTexture.getMSAARenderBuffer(0);
          xV._MSAAFramebuffer = rV.createFramebuffer(), this._bindUnboundFramebuffer(xV._MSAAFramebuffer), rV.framebufferRenderbuffer(rV.FRAMEBUFFER, rV.COLOR_ATTACHMENT0, rV.RENDERBUFFER, VV), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(xV, QV);
      return xV
    }, UV.ThinEngine.prototype._createDepthStencilTexture = function(VV, eV, xV) {
      const UV = this._gl,
        yV = VV.layers || 0,
        QV = VV.depth || 0;
      let nV = UV.TEXTURE_2D;
      0 !== yV ? nV = UV.TEXTURE_2D_ARRAY : 0 !== QV && (nV = UV.TEXTURE_3D);
      const wV = new JV.e(this, 12);
      if (wV.label = eV.label, !this._caps.depthTextureExtension) return YV.b.Error("Depth texture is not supported by your browser or hardware."), wV;
      const ZV = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...eV
      };
      if (this._bindTextureDirectly(nV, wV, !0), this._setupDepthStencilTexture(wV, VV, 0 !== ZV.comparisonFunction && ZV.bilinearFiltering, ZV.comparisonFunction, ZV.samples), void 0 !== ZV.depthTextureFormat) {
        if (15 !== ZV.depthTextureFormat && 16 !== ZV.depthTextureFormat && 17 !== ZV.depthTextureFormat && 13 !== ZV.depthTextureFormat && 14 !== ZV.depthTextureFormat && 18 !== ZV.depthTextureFormat) return YV.b.Error(`Depth texture ${ZV.depthTextureFormat} format is not supported.`), wV;
        wV.format = ZV.depthTextureFormat
      } else wV.format = ZV.generateStencil ? 13 : 16;
      const vV = (0, pV.e)(wV.format),
        rV = this._getWebGLTextureTypeFromDepthTextureFormat(wV.format),
        kV = vV ? UV.DEPTH_STENCIL : UV.DEPTH_COMPONENT,
        bV = this._getInternalFormatFromDepthTextureFormat(wV.format, !0, vV);
      return wV.is2DArray ? UV.texImage3D(nV, 0, bV, wV.width, wV.height, yV, 0, kV, rV, null) : wV.is3D ? UV.texImage3D(nV, 0, bV, wV.width, wV.height, QV, 0, kV, rV, null) : UV.texImage2D(nV, 0, bV, wV.width, wV.height, 0, kV, rV, null), this._bindTextureDirectly(nV, null), this._internalTexturesCache.push(wV), xV._depthStencilBuffer && (UV.deleteRenderbuffer(xV._depthStencilBuffer), xV._depthStencilBuffer = null), this._bindUnboundFramebuffer(xV._MSAAFramebuffer ?? xV._framebuffer), xV._generateStencilBuffer = vV, xV._depthStencilTextureWithStencil = vV, xV._depthStencilBuffer = this._setupFramebufferDepthAttachments(xV._generateStencilBuffer, xV._generateDepthBuffer, xV.width, xV.height, xV.samples, wV.format), this._bindUnboundFramebuffer(null), wV
    }, UV.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(VV, eV) {
      if (this.Nb < 2 || !VV) return 1;
      if (VV.samples === eV) return eV;
      const xV = this._gl;
      eV = Math.min(eV, this.getCaps().maxMSAASamples), VV._depthStencilBuffer && (xV.deleteRenderbuffer(VV._depthStencilBuffer), VV._depthStencilBuffer = null), VV._MSAAFramebuffer && (xV.deleteFramebuffer(VV._MSAAFramebuffer), VV._MSAAFramebuffer = null);
      const JV = VV.texture?._hardwareTexture;
      if (JV?.releaseMSAARenderBuffers(), VV.texture && eV > 1 && "function" === typeof xV.renderbufferStorageMultisample) {
        const YV = xV.createFramebuffer();
        if (!YV) throw new Error("Unable to create multi sampled framebuffer");
        VV._MSAAFramebuffer = YV, this._bindUnboundFramebuffer(VV._MSAAFramebuffer);
        const UV = this._createRenderBuffer(VV.texture.width, VV.texture.height, eV, -1, this._getRGBABufferInternalSizedFormat(VV.texture.type, VV.texture.format, VV.texture._useSRGBBuffer), xV.COLOR_ATTACHMENT0, !1);
        if (!UV) throw new Error("Unable to create multi sampled framebuffer");
        JV?.addMSAARenderBuffer(UV)
      }
      this._bindUnboundFramebuffer(VV._MSAAFramebuffer ?? VV._framebuffer), VV.texture && (VV.texture.samples = eV), VV._samples = eV;
      const YV = VV._depthStencilTexture ? VV._depthStencilTexture.format : void 0;
      return VV._depthStencilBuffer = this._setupFramebufferDepthAttachments(VV._generateStencilBuffer, VV._generateDepthBuffer, VV.width, VV.height, eV, YV), this._bindUnboundFramebuffer(null), eV
    }, UV.ThinEngine.prototype._setupDepthStencilTexture = function(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const UV = eV.width ?? eV,
        yV = eV.height ?? eV,
        pV = eV.layers || 0,
        QV = eV.depth || 0;
      VV.baseWidth = UV, VV.baseHeight = yV, VV.width = UV, VV.height = yV, VV.is2DArray = pV > 0, VV.depth = pV || QV, VV.isReady = !0, VV.samples = YV, VV.generateMipMaps = !1, VV.samplingMode = xV ? 2 : 1, VV.type = 0, VV._comparisonFunction = JV;
      const nV = this._gl,
        wV = this._getTextureTarget(VV),
        ZV = this._getSamplingParameters(VV.samplingMode, !1);
      nV.texParameteri(wV, nV.TEXTURE_MAG_FILTER, ZV.mag), nV.texParameteri(wV, nV.TEXTURE_MIN_FILTER, ZV.min), nV.texParameteri(wV, nV.TEXTURE_WRAP_S, nV.CLAMP_TO_EDGE), nV.texParameteri(wV, nV.TEXTURE_WRAP_T, nV.CLAMP_TO_EDGE), this.Nb > 1 && (0 === JV ? (nV.texParameteri(wV, nV.TEXTURE_COMPARE_FUNC, 515), nV.texParameteri(wV, nV.TEXTURE_COMPARE_MODE, nV.NONE)) : (nV.texParameteri(wV, nV.TEXTURE_COMPARE_FUNC, JV), nV.texParameteri(wV, nV.TEXTURE_COMPARE_MODE, nV.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41071: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.e
    });
    var JV = xV(41073);
    (0, xV(41225).d)();
    var YV = xV(41095);
    let UV = !1;
    ! function() {
      if (UV) return;
      UV = !0;
      const VV = new WeakMap,
        eV = new WeakMap,
        xV = new WeakMap,
        JV = new WeakMap;
      YV.ThinEngine.prototype.getAlphaToCoverage = function() {
        return VV.get(this) ?? !1
      }, YV.ThinEngine.prototype.setAlphaToCoverage = function(xV) {
        (VV.get(this) !== xV || this._gl && eV.get(this) !== this._gl) && (VV.set(this, xV), this._gl && (xV ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), eV.set(this, this._gl)))
      }, Object.defineProperty(YV.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (JV.get(this) !== this._gl && (xV.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), JV.set(this, this._gl)), xV.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var yV = xV(41077),
      pV = xV(39870),
      QV = xV(41190);
    let nV = !1;
    ! function() {
      function VV(VV, eV, xV, JV) {
        let YV, UV = 1;
        1 === JV ? YV = new Float32Array(eV * xV * 4) : 2 === JV ? (YV = new Uint16Array(eV * xV * 4), UV = 15360) : YV = 7 === JV ? new Uint32Array(eV * xV * 4) : new Uint8Array(eV * xV * 4);
        for (let yV = 0; yV < eV; yV++)
          for (let JV = 0; JV < xV; JV++) {
            const xV = 3 * (JV * eV + yV),
              pV = 4 * (JV * eV + yV);
            YV[pV + 0] = VV[xV + 0], YV[pV + 1] = VV[xV + 1], YV[pV + 2] = VV[xV + 2], YV[pV + 3] = UV
          }
        return YV
      }

      function eV(VV) {
        return function(eV, xV, JV, YV, UV, pV, QV, nV) {
          let wV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            ZV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const vV = VV ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            rV = VV ? 10 : 11,
            kV = new yV.e(this, rV);
          kV.baseWidth = xV, kV.baseHeight = JV, kV.baseDepth = YV, kV.width = xV, kV.height = JV, kV.depth = YV, kV.format = UV, kV.type = ZV, kV.generateMipMaps = pV, kV.samplingMode = nV, VV ? kV.is3D = !0 : kV.is2DArray = !0, this._doNotHandleContextLost || (kV._bufferView = eV), VV ? this.updateRawTexture3D(kV, eV, UV, QV, wV, ZV) : this.updateRawTexture2DArray(kV, eV, UV, QV, wV, ZV), this._bindTextureDirectly(vV, kV, !0);
          const bV = this._getSamplingParameters(nV, pV);
          return this._gl.texParameteri(vV, this._gl.TEXTURE_MAG_FILTER, bV.mag), this._gl.texParameteri(vV, this._gl.TEXTURE_MIN_FILTER, bV.min), pV && this._gl.generateMipmap(vV), this._bindTextureDirectly(vV, null), this._internalTexturesCache.push(kV), kV
        }
      }

      function xV(VV) {
        return function(eV, xV, JV, YV) {
          let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const pV = VV ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            QV = this._getWebGLTextureType(yV),
            nV = this._getInternalFormat(JV),
            wV = this._getRGBABufferInternalSizedFormat(yV, JV);
          this._bindTextureDirectly(pV, eV, !0), this._unpackFlipY(void 0 === YV || !!YV), this._doNotHandleContextLost || (eV._bufferView = xV, eV.format = JV, eV.invertY = YV, eV._compression = UV), eV.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), UV && xV ? this._gl.compressedTexImage3D(pV, 0, this.getCaps().s3tc[UV], eV.width, eV.height, eV.depth, 0, xV) : this._gl.texImage3D(pV, 0, wV, eV.width, eV.height, eV.depth, 0, nV, QV, xV), eV.generateMipMaps && this._gl.generateMipmap(pV), this._bindTextureDirectly(pV, null), eV.isReady = !0
        }
      }
      nV || (nV = !0, YV.ThinEngine.prototype.updateRawTexture = function(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!VV) return;
        const pV = this._getRGBABufferInternalSizedFormat(UV, xV, yV),
          QV = this._getInternalFormat(xV),
          nV = this._getWebGLTextureType(UV);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, VV, !0), this._unpackFlipY(void 0 === JV || !!JV), this._doNotHandleContextLost || (VV._bufferView = eV, VV.format = xV, VV.type = UV, VV.invertY = JV, VV._compression = YV), VV.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), YV && eV ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[YV], VV.width, VV.height, 0, eV) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, pV, VV.width, VV.height, 0, QV, nV, eV), VV.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), VV.isReady = !0
      }, YV.ThinEngine.prototype.createRawTexture = function(VV, eV, xV, JV, YV, UV, pV) {
        let QV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          wV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ZV = new yV.e(this, 3);
        ZV.baseWidth = eV, ZV.baseHeight = xV, ZV.width = eV, ZV.height = xV, ZV.format = JV, ZV.generateMipMaps = YV, ZV.samplingMode = pV, ZV.invertY = UV, ZV._compression = QV, ZV.type = nV, ZV._useSRGBBuffer = this._getUseSRGBBuffer(wV, !YV), this._doNotHandleContextLost || (ZV._bufferView = VV), this.updateRawTexture(ZV, VV, JV, UV, QV, nV, ZV._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, ZV, !0);
        const vV = this._getSamplingParameters(pV, YV);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, vV.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, vV.min), YV && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(ZV), ZV
      }, YV.ThinEngine.prototype.createRawCubeTexture = function(VV, eV, xV, JV, YV, UV, nV) {
        let wV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const ZV = this._gl,
          vV = new yV.e(this, 8);
        vV.isCube = !0, vV.format = xV, vV.type = JV, this._doNotHandleContextLost || (vV._bufferViewArray = VV);
        const rV = this._getWebGLTextureType(JV);
        let kV = this._getInternalFormat(xV);
        kV === ZV.RGB && (kV = ZV.RGBA), rV !== ZV.FLOAT || this._caps.textureFloatLinearFiltering ? rV !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? rV !== ZV.FLOAT || this._caps.textureFloatRender ? rV !== ZV.HALF_FLOAT || this._caps.colorBufferFloat || (YV = !1, pV.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (YV = !1, pV.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (YV = !1, nV = 1, pV.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (YV = !1, nV = 1, pV.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const bV = eV,
          EV = bV;
        vV.width = bV, vV.height = EV, vV.invertY = UV, vV._compression = wV;
        if (!this.needPOTTextures || (0, QV.k)(vV.width) && (0, QV.k)(vV.height) || (YV = !1), VV) this.updateRawCubeTexture(vV, VV, xV, JV, UV, wV);
        else {
          const VV = this._getRGBABufferInternalSizedFormat(JV),
            eV = 0;
          this._bindTextureDirectly(ZV.TEXTURE_CUBE_MAP, vV, !0);
          for (let xV = 0; xV < 6; xV++) wV ? ZV.compressedTexImage2D(ZV.TEXTURE_CUBE_MAP_POSITIVE_X + xV, eV, this.getCaps().s3tc[wV], vV.width, vV.height, 0, void 0) : ZV.texImage2D(ZV.TEXTURE_CUBE_MAP_POSITIVE_X + xV, eV, VV, vV.width, vV.height, 0, kV, rV, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, vV, !0), VV && YV && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const BV = this._getSamplingParameters(nV, YV);
        return ZV.texParameteri(ZV.TEXTURE_CUBE_MAP, ZV.TEXTURE_MAG_FILTER, BV.mag), ZV.texParameteri(ZV.TEXTURE_CUBE_MAP, ZV.TEXTURE_MIN_FILTER, BV.min), ZV.texParameteri(ZV.TEXTURE_CUBE_MAP, ZV.TEXTURE_WRAP_S, ZV.CLAMP_TO_EDGE), ZV.texParameteri(ZV.TEXTURE_CUBE_MAP, ZV.TEXTURE_WRAP_T, ZV.CLAMP_TO_EDGE), this._bindTextureDirectly(ZV.TEXTURE_CUBE_MAP, null), vV.generateMipMaps = YV, vV.samplingMode = nV, vV.isReady = !0, vV
      }, YV.ThinEngine.prototype.updateRawCubeTexture = function(eV, xV, JV, YV, UV) {
        let yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        eV._bufferViewArray = xV, eV.format = JV, eV.type = YV, eV.invertY = UV, eV._compression = yV;
        const nV = this._gl,
          wV = this._getWebGLTextureType(YV);
        let ZV = this._getInternalFormat(JV);
        const vV = this._getRGBABufferInternalSizedFormat(YV);
        let rV = !1;
        ZV === nV.RGB && (ZV = nV.RGBA, rV = !0), this._bindTextureDirectly(nV.TEXTURE_CUBE_MAP, eV, !0), this._unpackFlipY(void 0 === UV || !!UV), eV.width % 4 !== 0 && nV.pixelStorei(nV.UNPACK_ALIGNMENT, 1);
        for (let QV = 0; QV < 6; QV++) {
          let JV = xV[QV];
          yV ? nV.compressedTexImage2D(nV.TEXTURE_CUBE_MAP_POSITIVE_X + QV, pV, this.getCaps().s3tc[yV], eV.width, eV.height, 0, JV) : (rV && (JV = VV(JV, eV.width, eV.height, YV)), nV.texImage2D(nV.TEXTURE_CUBE_MAP_POSITIVE_X + QV, pV, vV, eV.width, eV.height, 0, ZV, wV, JV))
        }(!this.needPOTTextures || (0, QV.k)(eV.width) && (0, QV.k)(eV.height)) && eV.generateMipMaps && 0 === pV && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), eV.isReady = !0
      }, YV.ThinEngine.prototype.createRawCubeTextureFromUrl = function(eV, xV, JV, YV, UV, yV, pV, QV) {
        let nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ZV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          vV = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const rV = this._gl,
          kV = this.createRawCubeTexture(null, JV, YV, UV, !yV, vV, ZV, null);
        xV?.addPendingData(kV), kV.url = eV, kV.isReady = !1, this._internalTexturesCache.push(kV);
        const bV = (VV, eV) => {
            xV?.removePendingData(kV), wV && wV(VV ? VV.status + " " + VV.statusText : "Failed to parse texture data", eV)
          },
          EV = async eV => {
            if (!kV._hardwareTexture) return;
            const JV = pV(eV);
            if (!JV) return;
            const yV = JV instanceof Promise ? await JV : JV,
              wV = kV.width;
            if (QV) {
              const eV = this._getWebGLTextureType(UV);
              let xV = this._getInternalFormat(YV);
              const JV = this._getRGBABufferInternalSizedFormat(UV);
              let pV = !1;
              xV === rV.RGB && (xV = rV.RGBA, pV = !0), this._bindTextureDirectly(rV.TEXTURE_CUBE_MAP, kV, !0), this._unpackFlipY(!1);
              const nV = QV(yV);
              for (let YV = 0; YV < nV.length; YV++) {
                const yV = wV >> YV;
                for (let QV = 0; QV < 6; QV++) {
                  let wV = nV[YV][QV];
                  pV && (wV = VV(wV, yV, yV, UV)), rV.texImage2D(QV, YV, JV, yV, yV, 0, xV, eV, wV)
                }
              }
              this._bindTextureDirectly(rV.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(kV, yV, YV, UV, vV);
            kV.isReady = !0, xV?.removePendingData(kV), kV.onLoadedObservable.notifyObservers(kV), kV.onLoadedObservable.clear(), nV && nV()
          };
        return this._loadFile(eV, (VV => {
          EV(VV).catch((VV => {
            bV(void 0, VV)
          }))
        }), void 0, xV?.offlineProvider, !0, bV), kV
      }, YV.ThinEngine.prototype.createRawTexture2DArray = eV(!1), YV.ThinEngine.prototype.createRawTexture3D = eV(!0), YV.ThinEngine.prototype.updateRawTexture2DArray = xV(!1), YV.ThinEngine.prototype.updateRawTexture3D = xV(!0))
    }();
    var wV = xV(41134);
    let ZV = !1;
    ZV || (ZV = !0, YV.ThinEngine.prototype._readTexturePixelsSync = function(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        nV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const ZV = this._gl;
      if (!ZV) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const VV = ZV.createFramebuffer();
        if (!VV) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = VV
      }
      ZV.bindFramebuffer(ZV.FRAMEBUFFER, this._dummyFramebuffer), JV > -1 && (VV.is2DArray || VV.is3D) ? ZV.framebufferTextureLayer(ZV.FRAMEBUFFER, ZV.COLOR_ATTACHMENT0, VV._hardwareTexture?.underlyingResource, YV, JV) : JV > -1 ? ZV.framebufferTexture2D(ZV.FRAMEBUFFER, ZV.COLOR_ATTACHMENT0, ZV.TEXTURE_CUBE_MAP_POSITIVE_X + JV, VV._hardwareTexture?.underlyingResource, YV) : ZV.framebufferTexture2D(ZV.FRAMEBUFFER, ZV.COLOR_ATTACHMENT0, ZV.TEXTURE_2D, VV._hardwareTexture?.underlyingResource, YV);
      let vV = void 0 !== VV.type ? this._getWebGLTextureType(VV.type) : ZV.UNSIGNED_BYTE;
      return pV ? UV || (UV = (0, wV.m)(VV.type, 4 * eV * xV)) : vV === ZV.UNSIGNED_BYTE ? (UV || (UV = new Uint8Array(4 * eV * xV)), vV = ZV.UNSIGNED_BYTE) : (UV || (UV = new Float32Array(4 * eV * xV)), vV = ZV.FLOAT), yV && this.flushFramebuffer(), ZV.readPixels(QV, nV, eV, xV, ZV.RGBA, vV, UV), ZV.bindFramebuffer(ZV.FRAMEBUFFER, this._currentFramebuffer), UV
    }, YV.ThinEngine.prototype._readTexturePixels = function(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        nV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV))
    }), (0, xV(41227).c)();
    let vV = !1;
    vV || (vV = !0, YV.ThinEngine.prototype._createDepthStencilCubeTexture = function(VV, eV) {
      const xV = new yV.e(this, 12);
      if (xV.isCube = !0, 1 === this.Nb) return pV.b.Error("Depth cube texture is not supported by WebGL 1."), xV;
      const JV = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...eV
        },
        YV = this._gl;
      this._bindTextureDirectly(YV.TEXTURE_CUBE_MAP, xV, !0), this._setupDepthStencilTexture(xV, VV, JV.bilinearFiltering, JV.comparisonFunction);
      for (let UV = 0; UV < 6; UV++) JV.generateStencil ? YV.texImage2D(YV.TEXTURE_CUBE_MAP_POSITIVE_X + UV, 0, YV.DEPTH24_STENCIL8, VV, VV, 0, YV.DEPTH_STENCIL, YV.UNSIGNED_INT_24_8, null) : YV.texImage2D(YV.TEXTURE_CUBE_MAP_POSITIVE_X + UV, 0, YV.DEPTH_COMPONENT24, VV, VV, 0, YV.DEPTH_COMPONENT, YV.UNSIGNED_INT, null);
      return this._bindTextureDirectly(YV.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(xV), xV
    }, YV.ThinEngine.prototype._setCubeMapTextureParams = function(VV, eV, xV) {
      const JV = this._gl;
      JV.texParameteri(JV.TEXTURE_CUBE_MAP, JV.TEXTURE_MAG_FILTER, JV.LINEAR), JV.texParameteri(JV.TEXTURE_CUBE_MAP, JV.TEXTURE_MIN_FILTER, eV ? JV.LINEAR_MIPMAP_LINEAR : JV.LINEAR), JV.texParameteri(JV.TEXTURE_CUBE_MAP, JV.TEXTURE_WRAP_S, JV.CLAMP_TO_EDGE), JV.texParameteri(JV.TEXTURE_CUBE_MAP, JV.TEXTURE_WRAP_T, JV.CLAMP_TO_EDGE), VV.samplingMode = eV ? 3 : 2, eV && this.getCaps().textureMaxLevel && void 0 !== xV && xV > 0 && (JV.texParameteri(JV.TEXTURE_CUBE_MAP, JV.TEXTURE_MAX_LEVEL, xV), VV._maxLodLevel = xV), this._bindTextureDirectly(JV.TEXTURE_CUBE_MAP, null)
    }, YV.ThinEngine.prototype.createCubeTexture = function(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yV = arguments.length > 6 ? arguments[6] : void 0,
        nV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        wV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ZV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        vV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        rV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        kV = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        bV = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const EV = this._gl;
      return this.createCubeTextureBase(VV, eV, xV, !!JV, YV, UV, yV, nV, wV, ZV, vV, rV, (VV => this._bindTextureDirectly(EV.TEXTURE_CUBE_MAP, VV, !0)), ((VV, eV) => {
        const xV = this.needPOTTextures ? (0, QV.i)(eV[0].width, this._caps.maxCubemapTextureSize) : eV[0].width,
          UV = xV,
          nV = [EV.TEXTURE_CUBE_MAP_POSITIVE_X, EV.TEXTURE_CUBE_MAP_POSITIVE_Y, EV.TEXTURE_CUBE_MAP_POSITIVE_Z, EV.TEXTURE_CUBE_MAP_NEGATIVE_X, EV.TEXTURE_CUBE_MAP_NEGATIVE_Y, EV.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(EV.TEXTURE_CUBE_MAP, VV, !0), this._unpackFlipY(!1);
        const wV = yV ? this._getInternalFormat(yV, VV._useSRGBBuffer) : VV._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : EV.RGBA;
        let ZV = yV ? this._getInternalFormat(yV) : EV.RGBA;
        VV._useSRGBBuffer && 1 === this.Nb && (ZV = wV);
        for (let JV = 0; JV < nV.length; JV++)
          if (eV[JV].width !== xV || eV[JV].height !== UV) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void pV.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = xV, this._workingCanvas.height = UV, this._workingContext.drawImage(eV[JV], 0, 0, eV[JV].width, eV[JV].height, 0, 0, xV, UV), EV.texImage2D(nV[JV], 0, wV, ZV, EV.UNSIGNED_BYTE, this._workingCanvas)
          } else EV.texImage2D(nV[JV], 0, wV, ZV, EV.UNSIGNED_BYTE, eV[JV]);
        JV || EV.generateMipmap(EV.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(VV, !JV), VV.width = xV, VV.height = UV, VV.isReady = !0, yV && (VV.format = yV), VV.onLoadedObservable.notifyObservers(VV), VV.onLoadedObservable.clear(), YV && YV()
      }), !!kV, bV)
    }, YV.ThinEngine.prototype.generateMipMapsForCubemap = function(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (VV.generateMipMaps) {
        const xV = this._gl;
        this._bindTextureDirectly(xV.TEXTURE_CUBE_MAP, VV, !0), xV.generateMipmap(xV.TEXTURE_CUBE_MAP), eV && this._bindTextureDirectly(xV.TEXTURE_CUBE_MAP, null)
      }
    });
    xV(41234);
    let rV = !1;
    rV || (rV = !0, YV.ThinEngine.prototype.setDepthStencilTexture = function(VV, eV, xV, JV) {
      void 0 !== VV && (eV && (this._boundUniforms[VV] = eV), xV && xV.depthStencilTexture ? this._setTexture(VV, xV, !1, !0, JV) : this._setTexture(VV, null, void 0, void 0, JV))
    });
    let kV = !1;
    kV || (kV = !0, YV.ThinEngine.prototype.createRenderTargetCubeTexture = function(VV, eV) {
      const xV = this._createHardwareRenderTargetWrapper(!1, !0, VV),
        JV = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...eV
        };
      JV.generateStencilBuffer = JV.generateDepthBuffer && JV.generateStencilBuffer, (1 !== JV.type || this._caps.textureFloatLinearFiltering) && (2 !== JV.type || this._caps.textureHalfFloatLinearFiltering) || (JV.samplingMode = 1);
      const YV = this._gl,
        UV = new yV.e(this, 5);
      this._bindTextureDirectly(YV.TEXTURE_CUBE_MAP, UV, !0);
      const QV = this._getSamplingParameters(JV.samplingMode, JV.generateMipMaps);
      1 !== JV.type || this._caps.textureFloat || (JV.type = 0, pV.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), YV.texParameteri(YV.TEXTURE_CUBE_MAP, YV.TEXTURE_MAG_FILTER, QV.mag), YV.texParameteri(YV.TEXTURE_CUBE_MAP, YV.TEXTURE_MIN_FILTER, QV.min), YV.texParameteri(YV.TEXTURE_CUBE_MAP, YV.TEXTURE_WRAP_S, YV.CLAMP_TO_EDGE), YV.texParameteri(YV.TEXTURE_CUBE_MAP, YV.TEXTURE_WRAP_T, YV.CLAMP_TO_EDGE);
      for (let yV = 0; yV < 6; yV++) YV.texImage2D(YV.TEXTURE_CUBE_MAP_POSITIVE_X + yV, 0, this._getRGBABufferInternalSizedFormat(JV.type, JV.format), VV, VV, 0, this._getInternalFormat(JV.format), this._getWebGLTextureType(JV.type), null);
      const nV = YV.createFramebuffer();
      return this._bindUnboundFramebuffer(nV), xV._depthStencilBuffer = this._setupFramebufferDepthAttachments(JV.generateStencilBuffer, JV.generateDepthBuffer, VV, VV), JV.generateMipMaps && YV.generateMipmap(YV.TEXTURE_CUBE_MAP), this._bindTextureDirectly(YV.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), xV._framebuffer = nV, xV._generateDepthBuffer = JV.generateDepthBuffer, xV._generateStencilBuffer = JV.generateStencilBuffer, UV.width = VV, UV.height = VV, UV.isReady = !0, UV.isCube = !0, UV.samples = 1, UV.generateMipMaps = JV.generateMipMaps, UV.samplingMode = JV.samplingMode, UV.type = JV.type, UV.format = JV.format, this._internalTexturesCache.push(UV), xV.setTextures(UV), xV
    });
    var bV = xV(41248),
      EV = xV(41252);
    let BV = !1;
    BV || (BV = !0, YV.ThinEngine.prototype.createPrefilteredCubeTexture = function(VV, eV, JV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nV = arguments.length > 6 ? arguments[6] : void 0,
        wV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ZV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        vV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(VV, eV, null, !1, (async VV => {
        if (!VV) return void(UV && UV(null));
        const QV = VV.texture;
        if (ZV ? VV.info.sphericalPolynomial && (QV._sphericalPolynomial = VV.info.sphericalPolynomial) : QV._sphericalPolynomial = QV._sphericalPolynomial ?? new bV.f, QV._source = 9, this.getCaps().textureLOD) return void(UV && UV(QV));
        const nV = this._gl,
          wV = VV.width;
        if (!wV) return;
        const {
          DDSTools: vV
        } = await xV.e(615).then((() => xV(44657))), rV = [];
        for (let xV = 0; xV < 3; xV++) {
          const UV = 1 - xV / 2,
            ZV = YV,
            kV = Math.log2(wV) * JV + YV,
            bV = ZV + (kV - ZV) * UV,
            BV = Math.round(Math.min(Math.max(bV, 0), kV)),
            jV = new yV.e(this, 2);
          if (jV.type = QV.type, jV.format = QV.format, jV.width = Math.pow(2, Math.max(Math.log2(wV) - BV, 0)), jV.height = jV.width, jV.isCube = !0, jV._cachedWrapU = 0, jV._cachedWrapV = 0, this._bindTextureDirectly(nV.TEXTURE_CUBE_MAP, jV, !0), jV.samplingMode = 2, nV.texParameteri(nV.TEXTURE_CUBE_MAP, nV.TEXTURE_MAG_FILTER, nV.LINEAR), nV.texParameteri(nV.TEXTURE_CUBE_MAP, nV.TEXTURE_MIN_FILTER, nV.LINEAR), nV.texParameteri(nV.TEXTURE_CUBE_MAP, nV.TEXTURE_WRAP_S, nV.CLAMP_TO_EDGE), nV.texParameteri(nV.TEXTURE_CUBE_MAP, nV.TEXTURE_WRAP_T, nV.CLAMP_TO_EDGE), VV.isDDS) {
            const eV = VV.info,
              xV = VV.data;
            this._unpackFlipY(eV.isCompressed), vV.UploadDDSLevels(this, jV, xV, eV, !0, 6, BV)
          } else pV.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(nV.TEXTURE_CUBE_MAP, null);
          const qV = new EV.c(eV);
          qV._isCube = !0, qV._texture = jV, jV.isReady = !0, rV.push(qV)
        }
        QV._lodTextureHigh = rV[2], QV._lodTextureMid = rV[1], QV._lodTextureLow = rV[0], UV && UV(QV)
      }), QV, nV, wV, ZV, JV, YV, null, void 0, !1, vV)
    });
    var jV = xV(41176);
    let qV = !1;
    qV || (qV = !0, YV.ThinEngine.prototype.createUniformBuffer = function(VV, eV) {
      const xV = this._gl.createBuffer();
      if (!xV) throw new Error("Unable to create uniform buffer");
      const JV = new jV.b(xV);
      return this.bindUniformBuffer(JV), VV instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, VV, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(VV), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), JV.references = 1, JV
    }, YV.ThinEngine.prototype.createDynamicUniformBuffer = function(VV, eV) {
      const xV = this._gl.createBuffer();
      if (!xV) throw new Error("Unable to create dynamic uniform buffer");
      const JV = new jV.b(xV);
      return this.bindUniformBuffer(JV), VV instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, VV, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(VV), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), JV.references = 1, JV
    }, YV.ThinEngine.prototype.updateUniformBuffer = function(VV, eV, xV, JV) {
      this.bindUniformBuffer(VV), void 0 === xV && (xV = 0), void 0 === JV ? eV instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, xV, eV) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, xV, new Float32Array(eV)) : eV instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, eV.subarray(xV, xV + JV)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(eV).subarray(xV, xV + JV)), this.bindUniformBuffer(null)
    }, YV.ThinEngine.prototype.bindUniformBuffer = function(VV) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, VV ? VV.underlyingResource : null)
    }, YV.ThinEngine.prototype.bindUniformBufferBase = function(VV, eV, xV) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, eV, VV ? VV.underlyingResource : null)
    }, YV.ThinEngine.prototype.bindUniformBlock = function(VV, eV, xV) {
      const JV = VV.program,
        YV = this._gl.getUniformBlockIndex(JV, eV);
      4294967295 !== YV && this._gl.uniformBlockBinding(JV, YV, xV)
    });
    var tV = xV(41122),
      FV = xV(41150);
    let TV = !1;
    TV || (TV = !0, FV.d.prototype.displayLoadingUI = function() {
      if (!(0, tV.n)()) return;
      const VV = this.loadingScreen;
      VV && VV.displayLoadingUI()
    }, FV.d.prototype.hideLoadingUI = function() {
      if (!(0, tV.n)()) return;
      const VV = this._loadingScreen;
      VV && VV.hideLoadingUI()
    }, Object.defineProperty(FV.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = FV.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(VV) {
        this._loadingScreen = VV
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(FV.d.prototype, "loadingUIText", {
      set: function(VV) {
        this.loadingScreen.loadingUIText = VV
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(FV.d.prototype, "loadingUIBackgroundColor", {
      set: function(VV) {
        this.loadingScreen.loadingUIBackgroundColor = VV
      },
      enumerable: !0,
      configurable: !0
    })), (0, xV(41212).d)();
    let PV = !1;
    PV || (PV = !0, FV.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, FV.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, FV.d.prototype.setDepthFunction = function(VV) {
      this._depthCullingState.depthFunc = VV
    }, FV.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, FV.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, FV.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, FV.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, FV.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, FV.d.prototype.setDepthWrite = function(VV) {
      this._depthCullingState.depthMask = VV
    }, FV.d.prototype.setAlphaConstants = function(VV, eV, xV, JV) {
      this._alphaState.setAlphaBlendConstants(VV, eV, xV, JV)
    }, FV.d.prototype.getAlphaMode = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[VV]
    }, FV.d.prototype.getAlphaEquation = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[VV]
    });
    let AV = !1;
    AV || (AV = !0, FV.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, FV.d.prototype.setStencilBuffer = function(VV) {
      this._stencilState.stencilTest = VV
    }, FV.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, FV.d.prototype.setStencilMask = function(VV) {
      this._stencilState.stencilMask = VV
    }, FV.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, FV.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, FV.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, FV.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, FV.d.prototype.setStencilFunction = function(VV) {
      this._stencilState.stencilFunc = VV
    }, FV.d.prototype.setStencilBackFunction = function(VV) {
      this._stencilState.stencilBackFunc = VV
    }, FV.d.prototype.setStencilFunctionReference = function(VV) {
      this._stencilState.stencilFuncRef = VV
    }, FV.d.prototype.setStencilFunctionMask = function(VV) {
      this._stencilState.stencilFuncMask = VV
    }, FV.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, FV.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, FV.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, FV.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, FV.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, FV.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, FV.d.prototype.setStencilOperationFail = function(VV) {
      this._stencilState.stencilOpStencilFail = VV
    }, FV.d.prototype.setStencilBackOperationFail = function(VV) {
      this._stencilState.stencilBackOpStencilFail = VV
    }, FV.d.prototype.setStencilOperationDepthFail = function(VV) {
      this._stencilState.stencilOpDepthFail = VV
    }, FV.d.prototype.setStencilBackOperationDepthFail = function(VV) {
      this._stencilState.stencilBackOpDepthFail = VV
    }, FV.d.prototype.setStencilOperationPass = function(VV) {
      this._stencilState.stencilOpStencilDepthPass = VV
    }, FV.d.prototype.setStencilBackOperationPass = function(VV) {
      this._stencilState.stencilBackOpStencilDepthPass = VV
    }, FV.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, FV.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    xV(41290);
    let NV = !1;
    NV || (NV = !0, FV.d.prototype.createDepthStencilTexture = function(VV, eV, xV) {
      if (eV.isCube) {
        const xV = VV.width || VV;
        return this._createDepthStencilCubeTexture(xV, eV)
      }
      return this._createDepthStencilTexture(VV, eV, xV)
    });
    xV(41293), xV(41326);
    let XV = !1;
    XV || (XV = !0, YV.ThinEngine.prototype.enableScissor = function(VV, eV, xV, JV) {
      const YV = this._gl;
      YV.enable(YV.SCISSOR_TEST), YV.scissor(VV, eV, xV, JV)
    }, YV.ThinEngine.prototype.disableScissor = function() {
      const VV = this._gl;
      VV.disable(VV.SCISSOR_TEST)
    })
  },
  41073: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => FV
    });
    var JV = xV(41077),
      YV = xV(38287),
      UV = xV(41095),
      yV = xV(41154);
    class pV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new QV(VV)
      }
      sampleFrame() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const eV = VV - this._lastFrameTimeMs;
            this._rollingFrameTime.add(eV)
          }
          this._lastFrameTimeMs = VV
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
        const VV = this._rollingFrameTime.history(0);
        return 0 === VV ? 0 : 1e3 / VV
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
    class QV {
      constructor(VV) {
        this._samples = new Array(VV), this.reset()
      }
      add(VV) {
        let eV;
        if (this.isSaturated()) {
          const VV = this._samples[this._pos];
          eV = VV - this.average, this.average -= eV / (this._sampleCount - 1), this._m2 -= eV * (VV - this.average)
        } else this._sampleCount++;
        eV = VV - this.average, this.average += eV / this._sampleCount, this._m2 += eV * (VV - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = VV, this._pos++, this._pos %= this._samples.length
      }
      history(VV) {
        if (VV >= this._sampleCount || VV >= this._samples.length) return 0;
        const eV = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(eV - VV)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(VV) {
        const eV = this._samples.length;
        return (VV % eV + eV) % eV
      }
    }
    var nV = xV(41176),
      wV = xV(39870),
      ZV = xV(41198),
      vV = xV(41150),
      rV = xV(41122);

    function kV(VV) {
      const eV = function(VV) {
        if (!(0, rV.f)() || !document.body) return null;
        const eV = document.createElement("span");
        eV.textContent = "Hg", eV.style.font = VV;
        const xV = document.createElement("div");
        xV.style.display = "inline-block", xV.style.width = "1px", xV.style.height = "0px", xV.style.verticalAlign = "bottom";
        const JV = document.createElement("div");
        let YV, UV;
        JV.style.whiteSpace = "nowrap", JV.appendChild(eV), JV.appendChild(xV), document.body.appendChild(JV);
        try {
          UV = xV.getBoundingClientRect().top - eV.getBoundingClientRect().top, xV.style.verticalAlign = "baseline", YV = xV.getBoundingClientRect().top - eV.getBoundingClientRect().top
        } finally {
          document.body.removeChild(JV)
        }
        const yV = {
          ascent: YV,
          height: UV,
          descent: UV - YV
        };
        return bV(yV) ? yV : null
      }(VV);
      if (eV) return eV;
      const xV = function(VV) {
        let eV = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? eV = new OffscreenCanvas(64, 64) : (0, rV.f)() && "function" === typeof document.createElement && (eV = document.createElement("canvas"), eV.width = 64, eV.height = 64);
          const xV = eV?.getContext("2d");
          if (!xV) return null;
          xV.font = VV;
          const JV = xV.measureText("Hg"),
            YV = Number(JV.actualBoundingBoxAscent ?? JV.fontBoundingBoxAscent),
            UV = Number(JV.actualBoundingBoxDescent ?? JV.fontBoundingBoxDescent),
            yV = {
              ascent: YV,
              height: YV + UV,
              descent: UV
            };
          return bV(yV) ? yV : null
        } catch {
          return null
        } finally {
          const VV = eV;
          "function" === typeof VV?.dispose && VV.dispose()
        }
      }(VV);
      return xV || function(VV) {
        const eV = Math.max(1, function(VV) {
            const eV = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(VV || ""));
            return eV ? Number(eV[1]) : 16
          }(VV)),
          xV = .8 * eV,
          JV = .2 * eV;
        return {
          ascent: xV,
          height: xV + JV,
          descent: JV
        }
      }(VV)
    }

    function bV(VV) {
      return Number.isFinite(VV.ascent) && Number.isFinite(VV.height) && Number.isFinite(VV.descent) && VV.height > 0
    }

    function EV(VV) {
      if (VV.requestPointerLock) {
        const eV = VV.requestPointerLock();
        eV instanceof Promise ? eV.then((() => {
          VV.focus()
        })).catch((() => {})) : VV.focus()
      }
    }
    var BV = xV(41204),
      jV = xV(41145),
      qV = xV(41212),
      tV = xV(41217);
    class FV extends UV.ThinEngine {
      static get NpmPackage() {
        return vV.d.NpmPackage
      }
      static get Version() {
        return vV.d.Version
      }
      static get Instances() {
        return YV.d.Instances
      }
      static get LastCreatedEngine() {
        return YV.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return YV.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(VV) {
        return vV.d.DefaultLoadingScreenFactory(VV)
      }
      get _supportsHardwareTextureRescaling() {
        return !!FV._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, qV.d)(), (0, tV.b)(), super(VV, eV, xV, JV), this._performanceMonitor = new pV, this._drawCalls = new BV.c, VV && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(VV) {
        super._sharedInit(VV),
          function(VV, eV, xV) {
            VV._onCanvasFocus = () => {
              VV.onCanvasFocusObservable.notifyObservers(VV)
            }, VV._onCanvasBlur = () => {
              VV.onCanvasBlurObservable.notifyObservers(VV)
            }, VV._onCanvasContextMenu = eV => {
              VV.disableContextMenu && eV.preventDefault()
            }, eV.addEventListener("focus", VV._onCanvasFocus), eV.addEventListener("blur", VV._onCanvasBlur), eV.addEventListener("contextmenu", VV._onCanvasContextMenu), VV._onBlur = () => {
              VV.disablePerformanceMonitorInBackground && VV.performanceMonitor.disable(), VV._windowIsBackground = !0
            }, VV._onFocus = () => {
              VV.disablePerformanceMonitorInBackground && VV.performanceMonitor.enable(), VV._windowIsBackground = !1
            }, VV._onCanvasPointerOut = xV => {
              document.elementFromPoint(xV.clientX, xV.clientY) !== eV && VV.onCanvasPointerOutObservable.notifyObservers(xV)
            };
            const JV = VV.getHostWindow();
            JV && "function" === typeof JV.addEventListener && (JV.addEventListener("blur", VV._onBlur), JV.addEventListener("focus", VV._onFocus)), eV.addEventListener("pointerout", VV._onCanvasPointerOut), xV.doNotHandleTouchAction || function(VV) {
              VV && VV.setAttribute && (VV.setAttribute("touch-action", "none"), VV.style.touchAction = "none", VV.style.webkitTapHighlightColor = "transparent")
            }(eV), !vV.d.audioEngine && xV.audioEngine && vV.d.AudioEngineFactory && (vV.d.audioEngine = vV.d.AudioEngineFactory(VV.getRenderingCanvas(), VV.getAudioContext(), VV.getAudioDestination())), (0, rV.f)() && (VV._onFullscreenChange = () => {
              VV.isFullscreen = !!document.fullscreenElement, VV.isFullscreen && VV._pointerLockRequested && eV && EV(eV)
            }, document.addEventListener("fullscreenchange", VV._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", VV._onFullscreenChange, !1), VV._onPointerLockChange = () => {
              VV.isPointerLock = document.pointerLockElement === eV
            }, document.addEventListener("pointerlockchange", VV._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", VV._onPointerLockChange, !1)), VV.enableOfflineSupport = void 0 !== vV.d.OfflineProviderFactory, VV._deterministicLockstep = !!xV.deterministicLockstep, VV._lockstepMaxSteps = xV.lockstepMaxSteps || 0, VV._timeStep = xV.timeStep || 1 / 60
          }(this, VV, this._creationOptions)
      }
      resizeImageBitmap(VV, eV, xV) {
        return function(VV, eV, xV, JV) {
          const YV = VV.createCanvas(xV, JV).getContext("2d");
          if (!YV) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return YV.drawImage(eV, 0, 0), YV.getImageData(0, 0, xV, JV).data
        }(this, VV, eV, xV)
      }
      async _createImageBitmapFromSource(VV, eV) {
        return await async function(VV, eV, xV) {
          return await new Promise(((JV, YV) => {
            const UV = new Image;
            UV.onload = () => {
              UV.decode().then((() => {
                VV.createImageBitmap(UV, xV).then((VV => {
                  JV(VV)
                }))
              }))
            }, UV.onerror = () => {
              YV(`Error loading image ${UV.src}`)
            }, UV.src = eV
          }))
        }(this, VV, eV)
      }
      switchFullscreen(VV) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(VV)
      }
      enterFullscreen(VV) {
        this.isFullscreen || (this._pointerLockRequested = VV, this._renderingCanvas && function(VV) {
          const eV = VV.requestFullscreen || VV.webkitRequestFullscreen;
          eV && eV.call(VV)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const VV = document;
          document.exitFullscreen ? document.exitFullscreen() : VV.webkitCancelFullScreen && VV.webkitCancelFullScreen()
        }()
      }
      setDitheringState(VV) {
        VV ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(VV) {
        VV ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(VV, eV, xV, JV) {
        const YV = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(VV, eV, xV, JV), YV
      }
      scissorClear(VV, eV, xV, JV, YV) {
        this.enableScissor(VV, eV, xV, JV), this.clear(YV, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(VV) {
        const eV = this._gl.getAttachedShaders(VV);
        return eV ? this._gl.getShaderSource(eV[0]) : null
      }
      getFragmentShaderSource(VV) {
        const eV = this._gl.getAttachedShaders(VV);
        return eV ? this._gl.getShaderSource(eV[1]) : null
      }
      set framebufferDimensionsObject(VV) {
        this._framebufferDimensionsObject = VV, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const VV of this.scenes) VV.resetCachedMaterial(), VV._rebuildGeometries();
        for (const VV of this._virtualScenes) VV.resetCachedMaterial(), VV._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(VV) {
        return kV(VV)
      }
      enterPointerlock() {
        this._renderingCanvas && EV(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      pT() {
        this._measureFps(), super.pT()
      }
      _deletePipelineContext(VV) {
        const eV = VV;
        eV && eV.program && eV.transformFeedback && (this.deleteTransformFeedback(eV.transformFeedback), eV.transformFeedback = null), super._deletePipelineContext(VV)
      }
      createShaderProgram(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        YV = YV || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const yV = super.createShaderProgram(VV, eV, xV, JV, YV, UV);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), yV
      }
      _createShaderProgram(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const UV = JV.createProgram();
        if (VV.program = UV, !UV) throw new Error("Unable to create program");
        if (JV.attachShader(UV, eV), JV.attachShader(UV, xV), this.Nb > 1 && YV) {
          const eV = this.createTransformFeedback();
          this.bindTransformFeedback(eV), this.setTranformFeedbackVaryings(UV, YV), VV.transformFeedback = eV
        }
        return JV.linkProgram(UV), this.Nb > 1 && YV && this.bindTransformFeedback(null), VV.context = JV, VV.vertexShader = eV, VV.fragmentShader = xV, VV.isParallelCompiled || this._finalizePipelineContext(VV), UV
      }
      _releaseTexture(VV) {
        super._releaseTexture(VV)
      }
      _releaseRenderTargetWrapper(VV) {
        super._releaseRenderTargetWrapper(VV);
        for (const eV of this.scenes) {
          for (const xV of eV.postProcesses) xV._outputTexture === VV && (xV._outputTexture = null);
          for (const xV of eV.cameras)
            for (const eV of xV._postProcesses) eV && eV._outputTexture === VV && (eV._outputTexture = null)
        }
      }
      _rescaleTexture(VV, eV, xV, JV, YV) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const UV = this.createRenderTargetTexture({
          width: eV.width,
          height: eV.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && FV._RescalePostProcessFactory && (this._rescalePostProcess = FV._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const yV = () => {
              this._rescalePostProcess.onApply = function(eV) {
                eV._bindTexture("textureSampler", VV)
              };
              let yV = xV;
              yV || (yV = this.scenes[this.scenes.length - 1]), yV.postProcessManager.directRender([this._rescalePostProcess], UV, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, eV, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, JV, 0, 0, eV.width, eV.height, 0), this.unBindFramebuffer(UV), UV.dispose(), YV && YV()
            },
            pV = this._rescalePostProcess.getEffect();
          pV ? pV.executeWhenCompiled(yV) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((VV => {
            VV.executeWhenCompiled(yV)
          }))
        }
      }
      wrapWebGLTexture(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const yV = new ZV.e(VV, this._gl),
          pV = new JV.e(this, 15, !0);
        return pV._hardwareTexture = yV, pV.baseWidth = YV, pV.baseHeight = UV, pV.width = YV, pV.height = UV, pV.isReady = !0, pV.useMipMaps = eV, this.updateTextureSamplingMode(xV, pV), pV
      }
      updateWrappedWebGLTexture(VV, eV) {
        if (15 !== VV.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const JV of this._renderTargetWrapperCache)
          if (JV.textures?.includes(VV)) {
            if (JV.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (JV._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } VV._hardwareTexture = new ZV.e(eV, this._gl), VV.isReady = !0, VV._cachedCoordinatesMode = null, VV._cachedWrapU = null, VV._cachedWrapV = null, VV._cachedWrapR = null, VV._cachedAnisotropicFilteringLevel = null;
        for (const JV in this._boundTexturesCache) this._boundTexturesCache[JV] === VV && (this._boundTexturesCache[JV] = null);
        this.updateTextureSamplingMode(VV.samplingMode, VV);
        const xV = this._gl;
        for (const JV of this._renderTargetWrapperCache) {
          if (JV.texture !== VV) continue;
          const YV = JV,
            UV = JV.samples,
            yV = UV > 1;
          YV._framebuffer && xV.deleteFramebuffer(YV._framebuffer), !yV && YV._depthStencilBuffer && (xV.deleteRenderbuffer(YV._depthStencilBuffer), YV._depthStencilBuffer = null);
          const pV = this._currentFramebuffer,
            QV = xV.createFramebuffer();
          this._bindUnboundFramebuffer(QV), xV.framebufferTexture2D(xV.FRAMEBUFFER, xV.COLOR_ATTACHMENT0, xV.TEXTURE_2D, eV, 0), yV || (YV._depthStencilBuffer = this._setupFramebufferDepthAttachments(JV._generateStencilBuffer, JV._generateDepthBuffer, JV.width, JV.height)), this._bindUnboundFramebuffer(pV), YV._framebuffer = QV, yV && (JV._samples = 1, this.updateRenderTargetTextureSampleCount(YV, UV))
        }
      }
      _uploadImageToTexture(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const YV = this._gl,
          UV = this._getWebGLTextureType(VV.type),
          yV = this._getInternalFormat(VV.format),
          pV = this._getRGBABufferInternalSizedFormat(VV.type, yV),
          QV = VV.isCube ? YV.TEXTURE_CUBE_MAP : YV.TEXTURE_2D;
        this._bindTextureDirectly(QV, VV, !0), this._unpackFlipY(VV.invertY);
        let nV = YV.TEXTURE_2D;
        VV.isCube && (nV = YV.TEXTURE_CUBE_MAP_POSITIVE_X + xV), YV.texImage2D(nV, JV, pV, yV, UV, eV), this._bindTextureDirectly(QV, null, !0)
      }
      updateTextureComparisonFunction(VV, eV) {
        if (1 === this.Nb) return void wV.b.Error("WebGL 1 does not support texture comparison.");
        const xV = this._gl;
        VV.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, VV, !0), 0 === eV ? (xV.texParameteri(xV.TEXTURE_CUBE_MAP, xV.TEXTURE_COMPARE_FUNC, 515), xV.texParameteri(xV.TEXTURE_CUBE_MAP, xV.TEXTURE_COMPARE_MODE, xV.NONE)) : (xV.texParameteri(xV.TEXTURE_CUBE_MAP, xV.TEXTURE_COMPARE_FUNC, eV), xV.texParameteri(xV.TEXTURE_CUBE_MAP, xV.TEXTURE_COMPARE_MODE, xV.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, VV, !0), 0 === eV ? (xV.texParameteri(xV.TEXTURE_2D, xV.TEXTURE_COMPARE_FUNC, 515), xV.texParameteri(xV.TEXTURE_2D, xV.TEXTURE_COMPARE_MODE, xV.NONE)) : (xV.texParameteri(xV.TEXTURE_2D, xV.TEXTURE_COMPARE_FUNC, eV), xV.texParameteri(xV.TEXTURE_2D, xV.TEXTURE_COMPARE_MODE, xV.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), VV._comparisonFunction = eV
      }
      createInstancesBuffer(VV) {
        const eV = this._gl.createBuffer();
        if (!eV) throw new Error("Unable to create instance buffer");
        const xV = new nV.b(eV);
        return xV.Jv = VV, this.bindArrayBuffer(xV), this._gl.bufferData(this._gl.ARRAY_BUFFER, VV, this._gl.DYNAMIC_DRAW), xV.references = 1, xV
      }
      deleteInstancesBuffer(VV) {
        this._gl.deleteBuffer(VV)
      }
      async _clientWaitAsync(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const JV = this._gl;
        return await new Promise(((YV, UV) => {
          (0, jV.f)((() => {
            const xV = JV.clientWaitSync(VV, eV, 0);
            if (xV == JV.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return xV != JV.TIMEOUT_EXPIRED
          }), YV, UV, xV)
        }))
      }
      _readPixelsAsync(VV, eV, xV, JV, YV, UV, yV) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const pV = this._gl,
          QV = pV.createBuffer();
        pV.bindBuffer(pV.PIXEL_PACK_BUFFER, QV), pV.bufferData(pV.PIXEL_PACK_BUFFER, yV.byteLength, pV.STREAM_READ), pV.readPixels(VV, eV, xV, JV, YV, UV, 0), pV.bindBuffer(pV.PIXEL_PACK_BUFFER, null);
        const nV = pV.fenceSync(pV.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return nV ? (pV.flush(), this._clientWaitAsync(nV, 0, 10).then((() => (pV.deleteSync(nV), pV.bindBuffer(pV.PIXEL_PACK_BUFFER, QV), pV.getBufferSubData(pV.PIXEL_PACK_BUFFER, 0, yV), pV.bindBuffer(pV.PIXEL_PACK_BUFFER, null), pV.deleteBuffer(QV), yV)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(VV, eV) {
            1 === YV.d.Instances.length && vV.d.audioEngine && (vV.d.audioEngine.dispose(), vV.d.audioEngine = null);
            const xV = VV.getHostWindow();
            xV && "function" === typeof xV.removeEventListener && (xV.removeEventListener("blur", VV._onBlur), xV.removeEventListener("focus", VV._onFocus)), eV && (eV.removeEventListener("focus", VV._onCanvasFocus), eV.removeEventListener("blur", VV._onCanvasBlur), eV.removeEventListener("pointerout", VV._onCanvasPointerOut), eV.removeEventListener("contextmenu", VV._onCanvasContextMenu)), (0, rV.f)() && (document.removeEventListener("fullscreenchange", VV._onFullscreenChange), document.removeEventListener("mozfullscreenchange", VV._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", VV._onFullscreenChange), document.removeEventListener("msfullscreenchange", VV._onFullscreenChange), document.removeEventListener("pointerlockchange", VV._onPointerLockChange), document.removeEventListener("mspointerlockchange", VV._onPointerLockChange), document.removeEventListener("mozpointerlockchange", VV._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", VV._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    FV.ALPHA_DISABLE = 0, FV.ALPHA_ADD = 1, FV.ALPHA_COMBINE = 2, FV.ALPHA_SUBTRACT = 3, FV.ALPHA_MULTIPLY = 4, FV.ALPHA_MAXIMIZED = 5, FV.ALPHA_ONEONE = 6, FV.ALPHA_PREMULTIPLIED = 7, FV.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, FV.ALPHA_INTERPOLATE = 9, FV.ALPHA_SCREENMODE = 10, FV.DELAYLOADSTATE_NONE = 0, FV.DELAYLOADSTATE_LOADED = 1, FV.DELAYLOADSTATE_LOADING = 2, FV.DELAYLOADSTATE_NOTLOADED = 4, FV.NEVER = 512, FV.ALWAYS = 519, FV.LESS = 513, FV.EQUAL = 514, FV.LEQUAL = 515, FV.GREATER = 516, FV.GEQUAL = 518, FV.NOTEQUAL = 517, FV.KEEP = 7680, FV.REPLACE = 7681, FV.INCR = 7682, FV.DECR = 7683, FV.INVERT = 5386, FV.INCR_WRAP = 34055, FV.DECR_WRAP = 34056, FV.TEXTURE_CLAMP_ADDRESSMODE = 0, FV.TEXTURE_WRAP_ADDRESSMODE = 1, FV.TEXTURE_MIRROR_ADDRESSMODE = 2, FV.TEXTUREFORMAT_ALPHA = 0, FV.TEXTUREFORMAT_LUMINANCE = 1, FV.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, FV.TEXTUREFORMAT_RGB = 4, FV.TEXTUREFORMAT_RGBA = 5, FV.TEXTUREFORMAT_RED = 6, FV.TEXTUREFORMAT_R = 6, FV.TEXTUREFORMAT_R16_UNORM = 33322, FV.TEXTUREFORMAT_RG16_UNORM = 33324, FV.TEXTUREFORMAT_RGB16_UNORM = 32852, FV.TEXTUREFORMAT_RGBA16_UNORM = 32859, FV.TEXTUREFORMAT_R16_SNORM = 36760, FV.TEXTUREFORMAT_RG16_SNORM = 36761, FV.TEXTUREFORMAT_RGB16_SNORM = 36762, FV.TEXTUREFORMAT_RGBA16_SNORM = 36763, FV.TEXTUREFORMAT_RG = 7, FV.TEXTUREFORMAT_RED_INTEGER = 8, FV.TEXTUREFORMAT_R_INTEGER = 8, FV.TEXTUREFORMAT_RG_INTEGER = 9, FV.TEXTUREFORMAT_RGB_INTEGER = 10, FV.TEXTUREFORMAT_RGBA_INTEGER = 11, FV.TEXTURETYPE_UNSIGNED_BYTE = 0, FV.TEXTURETYPE_UNSIGNED_INT = 0, FV.TEXTURETYPE_FLOAT = 1, FV.TEXTURETYPE_HALF_FLOAT = 2, FV.TEXTURETYPE_BYTE = 3, FV.TEXTURETYPE_SHORT = 4, FV.TEXTURETYPE_UNSIGNED_SHORT = 5, FV.TEXTURETYPE_INT = 6, FV.TEXTURETYPE_UNSIGNED_INTEGER = 7, FV.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, FV.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, FV.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, FV.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, FV.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, FV.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, FV.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, FV.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, FV.TEXTURE_NEAREST_SAMPLINGMODE = 1, FV.TEXTURE_BILINEAR_SAMPLINGMODE = 2, FV.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, FV.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, FV.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, FV.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, FV.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, FV.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, FV.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, FV.TEXTURE_NEAREST_LINEAR = 7, FV.TEXTURE_NEAREST_NEAREST = 1, FV.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, FV.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, FV.TEXTURE_LINEAR_LINEAR = 2, FV.TEXTURE_LINEAR_NEAREST = 12, FV.TEXTURE_EXPLICIT_MODE = 0, FV.TEXTURE_SPHERICAL_MODE = 1, FV.TEXTURE_PLANAR_MODE = 2, FV.TEXTURE_CUBIC_MODE = 3, FV.TEXTURE_PROJECTION_MODE = 4, FV.TEXTURE_SKYBOX_MODE = 5, FV.TEXTURE_INVCUBIC_MODE = 6, FV.TEXTURE_EQUIRECTANGULAR_MODE = 7, FV.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, FV.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, FV.SCALEMODE_FLOOR = 1, FV.SCALEMODE_NEAREST = 2, FV.SCALEMODE_CEILING = 3
  },
  41240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(41201);
    class YV {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(VV) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = VV, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, VV && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, JV.e)(VV.format))
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
      getBaseArrayLayer(VV) {
        if (!this._textures) return -1;
        const eV = this._textures[VV],
          xV = this._layerIndices?.[VV] ?? 0,
          JV = this._faceIndices?.[VV] ?? 0;
        return eV.isCube ? 6 * xV + JV : eV.is3D ? 0 : xV
      }
      get samples() {
        return this._samples
      }
      setSamples(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === VV && !xV) return VV;
        const JV = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, VV, eV) : this._engine.updateRenderTargetTextureSampleCount(this, VV);
        return this._samples = VV, JV
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(VV, eV, xV, JV, YV) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = VV, this._isCube = eV, this._size = xV, this._engine = JV, this._depthStencilTexture = null, this.label = YV
      }
      setTextures(VV) {
        Array.isArray(VV) ? this._textures = VV : this._textures = VV ? [VV] : null
      }
      setTexture(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[eV] !== VV && (this._textures[eV] && xV && this._textures[eV].dispose(), this._textures[eV] = VV)
      }
      setLayerAndFaceIndices(VV, eV) {
        this._layerIndices = VV, this._faceIndices = eV
      }
      setLayerAndFaceIndex() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== eV && eV >= 0 && (this._layerIndices[VV] = eV), void 0 !== xV && xV >= 0 && (this._faceIndices[VV] = xV)
      }
      createDepthStencilTexture() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = xV, this._depthStencilTextureLabel = UV, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: eV,
          comparisonFunction: VV,
          generateStencil: xV,
          isCube: this._isCube,
          samples: JV,
          depthTextureFormat: YV,
          label: UV
        }, this), this._depthStencilTexture
      }
      _shareDepth(VV) {
        this.shareDepth(VV)
      }
      shareDepth(VV) {
        this._depthStencilTexture && (VV._depthStencilTexture && VV._depthStencilTexture.dispose(), VV._depthStencilTexture = this._depthStencilTexture, VV._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(VV) {
        this.texture && this.texture._swapAndDie(VV), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let VV = null;
        if (this._isMulti) {
          const eV = this.textures;
          if (eV && eV.length > 0) {
            let xV = !1,
              JV = eV.length,
              YV = -1;
            const UV = eV[eV.length - 1]._source;
            14 !== UV && 12 !== UV || (xV = !0, YV = eV[eV.length - 1].format, JV--);
            const yV = [],
              pV = [],
              QV = [],
              nV = [],
              wV = [],
              ZV = [],
              vV = [],
              rV = {};
            for (let VV = 0; VV < JV; ++VV) {
              const xV = eV[VV];
              yV.push(xV.samplingMode), pV.push(xV.type), QV.push(xV.format);
              void 0 !== rV[xV.uniqueId] ? (nV.push(-1), vV.push(0)) : (rV[xV.uniqueId] = VV, xV.is2DArray ? (nV.push(35866), vV.push(xV.depth)) : xV.isCube ? (nV.push(34067), vV.push(0)) : xV.is3D ? (nV.push(32879), vV.push(xV.depth)) : (nV.push(3553), vV.push(0))), this._faceIndices && wV.push(this._faceIndices[VV] ?? 0), this._layerIndices && ZV.push(this._layerIndices[VV] ?? 0)
            }
            const kV = {
                samplingModes: yV,
                generateMipMaps: eV[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: xV,
                depthTextureFormat: YV,
                types: pV,
                formats: QV,
                ZQV: JV,
                targetTypes: nV,
                faceIndex: wV,
                layerIndex: ZV,
                layerCounts: vV,
                label: this.label
              },
              bV = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            VV = this._engine.createMultipleRenderTarget(bV, kV);
            for (let EV = 0; EV < JV; ++EV) {
              if (-1 !== nV[EV]) continue;
              const xV = rV[eV[EV].uniqueId];
              VV.setTexture(VV.textures[xV], EV)
            }
          }
        } else {
          const eV = {};
          if (eV.generateDepthBuffer = this._generateDepthBuffer, eV.generateMipMaps = this.texture?.generateMipMaps ?? !1, eV.generateStencilBuffer = this._generateStencilBuffer, eV.samplingMode = this.texture?.samplingMode, eV.type = this.texture?.type, eV.format = this.texture?.format, eV.noColorAttachment = !this._textures, eV.label = this.label, this.isCube) VV = this._engine.createRenderTargetCubeTexture(this.width, eV);
          else {
            const xV = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            VV = this._engine.createRenderTargetTexture(xV, eV)
          }
          VV.texture && (VV.texture.isReady = !0)
        }
        return VV
      }
      _swapRenderTargetWrapper(VV) {
        if (this._textures && VV._textures)
          for (let eV = 0; eV < this._textures.length; ++eV) this._textures[eV]._swapAndDie(VV._textures[eV], !1), VV._textures[eV].isReady = !0;
        this._depthStencilTexture && VV._depthStencilTexture && (this._depthStencilTexture._swapAndDie(VV._depthStencilTexture), VV._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const VV = this._cloneRenderTargetWrapper();
        if (VV) {
          if (this._depthStencilTexture) {
            const eV = this._depthStencilTexture.samplingMode,
              xV = this._depthStencilTexture.format,
              JV = 2 === eV || 3 === eV || 11 === eV;
            VV.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, JV, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, xV, this._depthStencilTextureLabel)
          }
          this.samples > 1 && VV.setSamples(this.samples), VV._swapRenderTargetWrapper(this), VV.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let VV = 0; VV < this._textures.length; ++VV) this._textures[VV].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41681: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static get ForceFullSceneLoadingForIncremental() {
        return JV._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(VV) {
        JV._ForceFullSceneLoadingForIncremental = VV
      }
      static get ShowLoadingScreen() {
        return JV._ShowLoadingScreen
      }
      static set ShowLoadingScreen(VV) {
        JV._ShowLoadingScreen = VV
      }
      static get loggingLevel() {
        return JV._LoggingLevel
      }
      static set loggingLevel(VV) {
        JV._LoggingLevel = VV
      }
      static get CleanBoneMatrixWeights() {
        return JV._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(VV) {
        JV._CleanBoneMatrixWeights = VV
      }
    }
    JV._ForceFullSceneLoadingForIncremental = !1, JV._ShowLoadingScreen = !0, JV._CleanBoneMatrixWeights = !1, JV._LoggingLevel = 0
  },
  41329: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(39870);
    const YV = new Map;

    function UV(VV, eV) {
      (function(VV) {
        return YV.delete(VV)
      })(VV) && JV.b.Warn(`Extension with the name '${VV}' already exists`), YV.set(VV, eV)
    }

    function yV(VV, eV) {
      "image/ktx" !== eV && "image/ktx2" !== eV || (VV = ".ktx"), YV.has(VV) || (VV.endsWith(".ies") && UV(".ies", (async () => await xV.e(618).then((() => xV(44665))).then((VV => new VV._IESTextureLoader)))), VV.endsWith(".dds") && UV(".dds", (async () => await xV.e(616).then((() => xV(44674))).then((VV => new VV._DDSTextureLoader)))), VV.endsWith(".basis") && UV(".basis", (async () => await xV.e(619).then((() => xV(44683))).then((VV => new VV._BasisTextureLoader)))), VV.endsWith(".env") && UV(".env", (async () => await Promise.all([xV.e(620), xV.e(617)]).then((() => xV(44690))).then((VV => new VV._ENVTextureLoader)))), VV.endsWith(".hdr") && UV(".hdr", (async () => await xV.e(621).then((() => xV(44731))).then((VV => new VV._HDRTextureLoader)))), (VV.endsWith(".ktx") || VV.endsWith(".ktx2")) && (UV(".ktx", (async () => await xV.e(622).then((() => xV(44734))).then((VV => new VV._KTXTextureLoader)))), UV(".ktx2", (async () => await xV.e(622).then((() => xV(44734))).then((VV => new VV._KTXTextureLoader))))), VV.endsWith(".tga") && UV(".tga", (async () => await xV.e(623).then((() => xV(44742))).then((VV => new VV._TGATextureLoader)))), VV.endsWith(".exr") && UV(".exr", (async () => await xV.e(624).then((() => xV(44744))).then((VV => new VV._ExrTextureLoader)))));
      const JV = YV.get(VV);
      return JV ? Promise.resolve(JV(eV)) : null
    }
  },
  41704: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => nV
    });
    var JV = xV(41553),
      YV = xV(41286),
      UV = xV(38318);
    class yV extends JV.e {
      get BeV() {
        return this._subMaterials
      }
      set BeV(VV) {
        this._subMaterials = VV, this._hookArray(VV)
      }
      getChildren() {
        return this.BeV
      }
      constructor(VV, eV) {
        super(VV, eV, !0), this._waitingSubMaterialsUniqueIds = [], this.dD().addMultiMaterial(this), this.BeV = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(VV) {
        var eV = this;
        const xV = VV.push;
        VV.push = function() {
          for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
          const yV = xV.apply(VV, YV);
          return eV._markAllSubMeshesAsTexturesDirty(), yV
        };
        const JV = VV.splice;
        VV.splice = (eV, xV) => {
          const YV = JV.call(VV, eV, xV ?? VV.length);
          return this._markAllSubMeshesAsTexturesDirty(), YV
        }
      }
      getSubMaterial(VV) {
        return VV < 0 || VV >= this.BeV.length ? this.dD().defaultMaterial : this.BeV[VV]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.BeV.map((VV => VV ? VV.getActiveTextures() : [])))
      }
      hasTexture(VV) {
        if (super.hasTexture(VV)) return !0;
        for (let eV = 0; eV < this.BeV.length; eV++)
          if (this.BeV[eV]?.hasTexture(VV)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(VV, eV, xV) {
        for (let JV = 0; JV < this.BeV.length; JV++) {
          const YV = this.BeV[JV];
          if (YV) {
            if (YV._storeEffectOnSubMeshes) {
              if (!YV.isReadyForSubMesh(VV, eV, xV)) return !1;
              continue
            }
            if (!YV.isReady(VV)) return !1
          }
        }
        return !0
      }
      clone(VV, eV) {
        const xV = new yV(VV, this.dD());
        for (let JV = 0; JV < this.BeV.length; JV++) {
          let YV;
          const UV = this.BeV[JV];
          YV = eV && UV ? UV.clone(VV + "-" + UV.name) : this.BeV[JV], xV.BeV.push(YV)
        }
        return xV
      }
      serialize() {
        const VV = {};
        VV.name = this.name, VV.id = this.id, VV.uniqueId = this.uniqueId, YV.d && (VV.tags = YV.d.GetTags(this)), VV.materialsUniqueIds = [], VV.materials = [];
        for (let eV = 0; eV < this.BeV.length; eV++) {
          const xV = this.BeV[eV];
          xV ? (VV.materialsUniqueIds.push(xV.uniqueId), VV.materials.push(xV.id)) : (VV.materialsUniqueIds.push(null), VV.materials.push(null))
        }
        return VV
      }
      dispose(VV, eV, xV) {
        const JV = this.dD();
        if (!JV) return;
        if (xV)
          for (let UV = 0; UV < this.BeV.length; UV++) {
            const xV = this.BeV[UV];
            xV && xV.dispose(VV, eV)
          }
        const YV = JV.multiMaterials.indexOf(this);
        YV >= 0 && JV.multiMaterials.splice(YV, 1), super.dispose(VV, eV)
      }
    }
    let pV = !1;

    function QV(VV, eV) {
      const xV = new yV(VV.name, eV);
      if (xV.id = VV.id, xV._loadedUniqueId = VV.uniqueId, YV.d && YV.d.AddTagsTo(xV, VV.tags), VV.materialsUniqueIds) xV._waitingSubMaterialsUniqueIds = VV.materialsUniqueIds;
      else
        for (const JV of VV.materials) xV.BeV.push(eV.getLastMaterialById(JV));
      return xV
    }

    function nV() {
      pV || (pV = !0, yV.ParseMultiMaterial = QV, (0, UV.d)("BABYLON.MultiMaterial", yV))
    }
  },
  41491: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV, YV, UV = xV(38269);
    ! function(VV) {
      VV[VV.LOCAL = 0] = "LOCAL", VV[VV.WORLD = 1] = "WORLD", VV[VV.BONE = 2] = "BONE"
    }(JV || (JV = {}));
    class yV {}
    yV.X = new UV.o(1, 0, 0), yV.Y = new UV.o(0, 1, 0), yV.Z = new UV.o(0, 0, 1),
      function(VV) {
        VV[VV.X = 0] = "X", VV[VV.Y = 1] = "Y", VV[VV.Z = 2] = "Z"
      }(YV || (YV = {}))
  },
  41248: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV,
      f: () => nV
    });
    var JV = xV(38269);
    const YV = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      UV = [() => 1, VV => VV.y, VV => VV.z, VV => VV.x, VV => VV.x * VV.y, VV => VV.y * VV.z, VV => 3 * VV.z * VV.z - 1, VV => VV.x * VV.z, VV => VV.x * VV.x - VV.y * VV.y],
      yV = (VV, eV) => YV[VV] * UV[VV](eV),
      pV = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class QV {
      constructor() {
        this.preScaled = !1, this.l00 = JV.o.Zero(), this.l1_1 = JV.o.Zero(), this.l10 = JV.o.Zero(), this.l11 = JV.o.Zero(), this.l2_2 = JV.o.Zero(), this.l2_1 = JV.o.Zero(), this.l20 = JV.o.Zero(), this.l21 = JV.o.Zero(), this.l22 = JV.o.Zero()
      }
      addLight(VV, eV, xV) {
        JV.l.Ik[0].set(eV.r, eV.g, eV.b);
        const YV = JV.l.Ik[0],
          UV = JV.l.Ik[1];
        YV.scaleToRef(xV, UV), UV.scaleToRef(yV(0, VV), JV.l.Ik[2]), this.l00.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(1, VV), JV.l.Ik[2]), this.l1_1.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(2, VV), JV.l.Ik[2]), this.l10.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(3, VV), JV.l.Ik[2]), this.l11.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(4, VV), JV.l.Ik[2]), this.l2_2.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(5, VV), JV.l.Ik[2]), this.l2_1.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(6, VV), JV.l.Ik[2]), this.l20.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(7, VV), JV.l.Ik[2]), this.l21.addInPlace(JV.l.Ik[2]), UV.scaleToRef(yV(8, VV), JV.l.Ik[2]), this.l22.addInPlace(JV.l.Ik[2])
      }
      scaleInPlace(VV) {
        this.l00.scaleInPlace(VV), this.l1_1.scaleInPlace(VV), this.l10.scaleInPlace(VV), this.l11.scaleInPlace(VV), this.l2_2.scaleInPlace(VV), this.l2_1.scaleInPlace(VV), this.l20.scaleInPlace(VV), this.l21.scaleInPlace(VV), this.l22.scaleInPlace(VV)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(pV[0]), this.l1_1.scaleInPlace(pV[1]), this.l10.scaleInPlace(pV[2]), this.l11.scaleInPlace(pV[3]), this.l2_2.scaleInPlace(pV[4]), this.l2_1.scaleInPlace(pV[5]), this.l20.scaleInPlace(pV[6]), this.l21.scaleInPlace(pV[7]), this.l22.scaleInPlace(pV[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(YV[0]), this.l1_1.scaleInPlace(YV[1]), this.l10.scaleInPlace(YV[2]), this.l11.scaleInPlace(YV[3]), this.l2_2.scaleInPlace(YV[4]), this.l2_1.scaleInPlace(YV[5]), this.l20.scaleInPlace(YV[6]), this.l21.scaleInPlace(YV[7]), this.l22.scaleInPlace(YV[8])
      }
      updateFromArray(VV) {
        return JV.o.FromArrayToRef(VV[0], 0, this.l00), JV.o.FromArrayToRef(VV[1], 0, this.l1_1), JV.o.FromArrayToRef(VV[2], 0, this.l10), JV.o.FromArrayToRef(VV[3], 0, this.l11), JV.o.FromArrayToRef(VV[4], 0, this.l2_2), JV.o.FromArrayToRef(VV[5], 0, this.l2_1), JV.o.FromArrayToRef(VV[6], 0, this.l20), JV.o.FromArrayToRef(VV[7], 0, this.l21), JV.o.FromArrayToRef(VV[8], 0, this.l22), this
      }
      updateFromFloatsArray(VV) {
        return JV.o.FromFloatsToRef(VV[0], VV[1], VV[2], this.l00), JV.o.FromFloatsToRef(VV[3], VV[4], VV[5], this.l1_1), JV.o.FromFloatsToRef(VV[6], VV[7], VV[8], this.l10), JV.o.FromFloatsToRef(VV[9], VV[10], VV[11], this.l11), JV.o.FromFloatsToRef(VV[12], VV[13], VV[14], this.l2_2), JV.o.FromFloatsToRef(VV[15], VV[16], VV[17], this.l2_1), JV.o.FromFloatsToRef(VV[18], VV[19], VV[20], this.l20), JV.o.FromFloatsToRef(VV[21], VV[22], VV[23], this.l21), JV.o.FromFloatsToRef(VV[24], VV[25], VV[26], this.l22), this
      }
      static FromArray(VV) {
        return (new QV).updateFromArray(VV)
      }
      static FromPolynomial(VV) {
        const eV = new QV;
        return eV.l00 = VV.xx.scale(.376127).add(VV.yy.scale(.376127)).add(VV.zz.scale(.376126)), eV.l1_1 = VV.y.scale(.977204), eV.l10 = VV.z.scale(.977204), eV.l11 = VV.x.scale(.977204), eV.l2_2 = VV.xy.scale(1.16538), eV.l2_1 = VV.yz.scale(1.16538), eV.l20 = VV.zz.scale(1.34567).subtract(VV.xx.scale(.672834)).subtract(VV.yy.scale(.672834)), eV.l21 = VV.zx.scale(1.16538), eV.l22 = VV.xx.scale(1.16538).subtract(VV.yy.scale(1.16538)), eV.l1_1.scaleInPlace(-1), eV.l11.scaleInPlace(-1), eV.l2_1.scaleInPlace(-1), eV.l21.scaleInPlace(-1), eV.scaleInPlace(Math.PI), eV
      }
    }
    class nV {
      constructor() {
        this.x = JV.o.Zero(), this.y = JV.o.Zero(), this.z = JV.o.Zero(), this.xx = JV.o.Zero(), this.yy = JV.o.Zero(), this.zz = JV.o.Zero(), this.xy = JV.o.Zero(), this.yz = JV.o.Zero(), this.zx = JV.o.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = QV.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(VV) {
        JV.l.Ik[0].FeV(VV.r, VV.g, VV.b);
        const eV = JV.l.Ik[0];
        this.xx.addInPlace(eV), this.yy.addInPlace(eV), this.zz.addInPlace(eV)
      }
      scaleInPlace(VV) {
        this.x.scaleInPlace(VV), this.y.scaleInPlace(VV), this.z.scaleInPlace(VV), this.xx.scaleInPlace(VV), this.yy.scaleInPlace(VV), this.zz.scaleInPlace(VV), this.yz.scaleInPlace(VV), this.zx.scaleInPlace(VV), this.xy.scaleInPlace(VV)
      }
      updateFromHarmonics(VV) {
        return this._harmonics = VV, this.x.iG(VV.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.iG(VV.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.iG(VV.l10), this.z.scaleInPlace(1.02333), this.xx.iG(VV.l00), JV.l.Ik[0].iG(VV.l20).scaleInPlace(.247708), JV.l.Ik[1].iG(VV.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).IYV(JV.l.Ik[0]).addInPlace(JV.l.Ik[1]), this.yy.iG(VV.l00), this.yy.scaleInPlace(.886277).IYV(JV.l.Ik[0]).IYV(JV.l.Ik[1]), this.zz.iG(VV.l00), JV.l.Ik[0].iG(VV.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(JV.l.Ik[0]), this.yz.iG(VV.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.iG(VV.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.iG(VV.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(VV) {
        return (new nV).updateFromHarmonics(VV)
      }
      static FromArray(VV) {
        const eV = new nV;
        return JV.o.FromArrayToRef(VV[0], 0, eV.x), JV.o.FromArrayToRef(VV[1], 0, eV.y), JV.o.FromArrayToRef(VV[2], 0, eV.z), JV.o.FromArrayToRef(VV[3], 0, eV.xx), JV.o.FromArrayToRef(VV[4], 0, eV.yy), JV.o.FromArrayToRef(VV[5], 0, eV.zz), JV.o.FromArrayToRef(VV[6], 0, eV.yz), JV.o.FromArrayToRef(VV[7], 0, eV.zx), JV.o.FromArrayToRef(VV[8], 0, eV.xy), eV
      }
    }
  },
  41692: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => RV,
      g: () => DV
    });
    var JV = xV(41257),
      YV = xV(38296),
      UV = xV(38269),
      yV = xV(41394),
      pV = xV(41674),
      QV = xV(41695),
      nV = xV(41390),
      wV = xV(41566),
      ZV = xV(41383);
    class vV {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new UV.o(0, 0, 0), this._diffPositionForCollisions = new UV.o(0, 0, 0), this._collisionResponse = !0
      }
    }
    var rV, kV, bV, EV = xV(41138),
      BV = xV(41323),
      jV = xV(41575),
      qV = xV(38389),
      tV = xV(38272),
      FV = xV(41491),
      TV = xV(39870),
      PV = xV(41263),
      AV = xV(41150),
      NV = xV(38318);

    function XV(VV, eV) {
      return VV - Math.floor(VV / eV) * eV
    }

    function MV(VV, eV, xV) {
      VV instanceof Float32Array ? UV.d.FromArrayToRef(VV, eV, xV) : xV.FeV((0, BV.c)(VV[eV]), (0, BV.c)(VV[eV + 1]), (0, BV.c)(VV[eV + 2]), (0, BV.c)(VV[eV + 3]), (0, BV.c)(VV[eV + 4]), (0, BV.c)(VV[eV + 5]), (0, BV.c)(VV[eV + 6]), (0, BV.c)(VV[eV + 7]), (0, BV.c)(VV[eV + 8]), (0, BV.c)(VV[eV + 9]), (0, BV.c)(VV[eV + 10]), (0, BV.c)(VV[eV + 11]), (0, BV.c)(VV[eV + 12]), (0, BV.c)(VV[eV + 13]), (0, BV.c)(VV[eV + 14]), (0, BV.c)(VV[eV + 15]))
    }

    function zV(VV, eV, xV, JV, YV, pV, QV, nV, wV) {
      const ZV = xV.texture,
        vV = ZV?.getInternalTexture(),
        rV = vV?._bufferView;
      if (!(rV instanceof Float32Array) && !(rV instanceof Uint16Array)) return TV.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const kV = ZV.getSize(),
        bV = function(VV, eV) {
          const xV = VV.y - VV.x + 1,
            JV = eV * VV.w / xV,
            YV = JV < 1 ? 0 : 1,
            UV = xV - YV;
          let yV = XV(JV - Math.floor(JV), 1) * UV;
          return yV = XV(yV + VV.z, UV), Math.floor(yV) + VV.x + YV
        }(JV, xV.time);
      if (!isFinite(bV) || bV < 0 || bV >= kV.height) return TV.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const EV = UV.l.Ik[0],
        BV = UV.l.Matrix[0],
        jV = UV.l.Matrix[1],
        qV = bV * kV.width * 4,
        tV = eV === yV.j.NormalKind ? UV.o.TransformNormalFromFloatsToRef : UV.o.TransformCoordinatesFromFloatsToRef;
      for (let UV = 0, yV = 0; UV < VV.length; UV += 3, yV += 4) {
        let eV, xV;
        for (BV.reset(), eV = 0; eV < 4 && eV < wV; eV++) xV = pV[yV + eV], xV > 0 && (MV(rV, qV + 16 * Math.floor(YV[yV + eV]), jV), jV.scaleAndAddToRef(xV, BV));
        if (QV && nV)
          for (eV = 0; eV < 4 && eV + 4 < wV; eV++) xV = nV[yV + eV], xV > 0 && (MV(rV, qV + 16 * Math.floor(QV[yV + eV]), jV), jV.scaleAndAddToRef(xV, BV));
        tV(VV[UV], VV[UV + 1], VV[UV + 2], BV, EV), EV.toArray(VV, UV)
      }
      return !0
    }
    class GV {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = UV.o.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class WV {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new GV, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new vV, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let RV = (() => {
        var VV;
        let eV, vV = QV.f,
          rV = [];
        return VV = class extends vV {
          static get BILLBOARDMODE_NONE() {
            return QV.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return QV.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return QV.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return QV.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return QV.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return QV.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(VV) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = VV
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(VV) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = VV
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(VV) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = VV
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(VV) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = VV
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(VV) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = VV
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(VV) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== VV && (this._internalAbstractMeshDataInfo._morphTargetManager = VV, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(VV) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== VV && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = VV, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(VV) {
            return !!super._updateNonUniformScalingState(VV) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(VV) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = VV
          }
          set hv(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(VV)
          }
          set onCollisionPositionChange(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(VV)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(VV) {
            if (this._internalAbstractMeshDataInfo._visibility === VV) return;
            const eV = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = VV, (1 === eV && 1 !== VV || 1 !== eV && 1 === VV) && this._markSubMeshesAsDirty((VV => {
              VV.markAsMiscDirty(), VV.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(VV) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = VV
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(VV) {
            this._internalAbstractMeshDataInfo._renderingGroupId = VV
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(VV) {
            if (!Number.isInteger(VV) || VV < 0 || VV > 255 || 0 !== VV && 0 === (63 & VV)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = VV
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(VV) {
            this._setMaterial(VV)
          }
          _setMaterial(VV) {
            this._internalAbstractMeshDataInfo._material !== VV && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = VV, VV && VV.meshMap && (VV.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.hT && (this.resetDrawCache(void 0, null == VV), this._unBindEffect()))
          }
          getMaterialForRenderPass(VV) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[VV]
          }
          setMaterialForRenderPass(VV, eV) {
            this.resetDrawCache(VV), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const xV = this._internalAbstractMeshDataInfo._materialForRenderPass[VV];
            xV?.meshMap?.[this.uniqueId] && (xV.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[VV] = eV, eV && eV.meshMap && (eV.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(VV) {
            this._internalAbstractMeshDataInfo._receiveShadows !== VV && (this._internalAbstractMeshDataInfo._receiveShadows = VV, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(VV) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== VV && (this._internalAbstractMeshDataInfo._hasVertexAlpha = VV, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(VV) {
            this._internalAbstractMeshDataInfo._useVertexColors !== VV && (this._internalAbstractMeshDataInfo._useVertexColors = VV, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(VV) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== VV && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = VV, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(VV) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== VV && (this._internalAbstractMeshDataInfo._numBoneInfluencers = VV, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(VV) {
            this._internalAbstractMeshDataInfo._applyFog !== VV && (this._internalAbstractMeshDataInfo._applyFog = VV, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(VV) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = VV
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(VV) {
            VV !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = VV, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(VV) ? -1 : VV
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = VV
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(VV) ? -1 : VV
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = VV
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(VV) {
            const eV = this._internalAbstractMeshDataInfo._skeleton;
            eV && eV.needInitialSkinMatrix && eV._unregisterMeshWithPoseMatrix(this), VV && VV.needInitialSkinMatrix && VV._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = VV, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(eV) {
            var xV;
            let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(eV, JV, !1), xV = this, this._internalAbstractMeshDataInfo = new WV, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = VV.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new YV.c, this.onCollisionPositionChangeObservable = new YV.c, this.onMaterialChangedObservable = new YV.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.QE = VV.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = qV.d.Red(), this.outlineWidth = .02, this.overlayColor = qV.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Sk = !1, this.Vb = !1, this.actionManager = null, this.ellipsoid = new UV.o(.5, 1, .5), this.ellipsoidOffset = new UV.o(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new qV.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                nC: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new YV.c, this._onCollisionPositionChange = function(VV, eV) {
                let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                eV.subtractToRef(xV._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, xV._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), xV._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > AV.d.CollisionsEpsilon && xV.position.addInPlace(xV._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), JV && xV.onCollideObservable.notifyObservers(JV), xV.onCollisionPositionChangeObservable.notifyObservers(xV.position)
              }, JV = this.dD(), this.layerMask = JV.defaultRenderableLayerMask, JV.gYV(this), this._resyncLightSources(), this._uniformBuffer = new ZV.b(this.dD().sk(), void 0, void 0, eV, !this.dD().sk().isWebGPU), this._buildUniformLayout(), JV.performancePriority) {
              case 2:
                this.Vb = !0;
              case 1:
                this.Sk = !0, this.QE = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(VV) {
            const eV = this._uniformBuffer;
            eV.peV("world", VV), eV.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), eV.update()
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
          toString(VV) {
            let eV = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            eV += ", # of submeshes: " + (this.hT ? this.hT.length : 0);
            const xV = this._internalAbstractMeshDataInfo._skeleton;
            return xV && (eV += ", skeleton: " + xV.name), VV && (eV += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], eV += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.nC ? "YES" : "NO")), eV
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== QV.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(VV) {
            let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (eV || this.actionManager.isRecursive)) {
              if (!VV) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(VV)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(VV, !1) : null
          }
          _releaseRenderPassId(VV) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.hT) {
              for (const VV of this.hT) VV._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const VV of this.dD().lights) VV.isEnabled() && VV.canAffectMesh(this) && this._lightSources.push(VV);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(VV) {
            const eV = VV.isEnabled() && VV.canAffectMesh(this),
              xV = this._lightSources.indexOf(VV);
            let JV = !1;
            if (-1 === xV) {
              if (!eV) return;
              this._lightSources.push(VV)
            } else {
              if (eV) return;
              JV = !0, this._lightSources.splice(xV, 1)
            }
            this._markSubMeshesAsLightDirty(JV)
          }
          _unBindEffect() {
            for (const VV of this.hT) VV.setEffect(null)
          }
          _removeLightSource(VV, eV) {
            const xV = this._lightSources.indexOf(VV); - 1 !== xV && (this._lightSources.splice(xV, 1), this._markSubMeshesAsLightDirty(eV))
          }
          _markSubMeshesAsDirty(VV) {
            if (this.hT)
              for (const eV of this.hT)
                for (let xV = 0; xV < eV._drawWrappers.length; ++xV) {
                  const JV = eV._drawWrappers[xV];
                  JV && JV.defines && JV.defines.markAllAsDirty && VV(JV.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((eV => eV.markAsLightDirty(VV)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((VV => VV.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((VV => VV.markAsMiscDirty()))
          }
          nJV(VV) {
            return this._currentRenderId = Number.MAX_VALUE, super.nJV(VV), this._isDirty = !0, this
          }
          resetDrawCache(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.hT)
              for (const xV of this.hT) xV.resetDrawCache(VV, eV)
          }
          get isBlocked() {
            return !1
          }
          getLOD(VV) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          RYV() {
            return null
          }
          getVerticesData(VV) {
            return null
          }
          setVerticesData(VV, eV, xV, JV) {
            return this
          }
          updateVerticesData(VV, eV, xV, JV) {
            return this
          }
          setIndices(VV, eV) {
            return this
          }
          isVerticesDataPresent(VV) {
            return !1
          }
          qL() {
            return this._masterMesh ? this._masterMesh.qL() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.qL()
          }
          setBoundingInfo(VV) {
            return this._boundingInfo = VV, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(VV, eV, xV) {
            return this._boundingInfo = new wV.b(VV, eV, xV), this._boundingInfo
          }
          normalizeToUnitCube() {
            let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(VV, eV, xV)
          }
          get useBones() {
            return this.skeleton && this.dD().skeletonsEnabled && this.isVerticesDataPresent(yV.j.MatricesIndicesKind) && this.isVerticesDataPresent(yV.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(VV) {}
          _activate(VV, eV) {
            return this._renderId = VV, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === QV.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get JC() {
            return !1
          }
          get NUV() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(VV, eV, xV) {
            return this.position.addInPlace(this.calcMovePOV(VV, eV, xV)), this
          }
          calcMovePOV(VV, eV, xV) {
            const JV = new UV.d;
            (this.rotationQuaternion ? this.rotationQuaternion : UV.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(JV);
            const YV = UV.o.Zero(),
              yV = this.definedFacingForward ? -1 : 1;
            return UV.o.TransformCoordinatesFromFloatsToRef(VV * yV, eV, xV * yV, JV, YV), YV
          }
          rotatePOV(VV, eV, xV) {
            return this.rotation.addInPlace(this.calcRotatePOV(VV, eV, xV)), this
          }
          calcRotatePOV(VV, eV, xV) {
            const JV = this.definedFacingForward ? 1 : -1;
            return new UV.o(VV * JV, eV, xV * JV)
          }
          _refreshBoundingInfo(VV, eV) {
            if (VV) {
              const xV = (0, jV.g)(VV, 0, this.getTotalVertices(), eV);
              this._boundingInfo ? this._boundingInfo.reConstruct(xV.minimum, xV.maximum) : this._boundingInfo = new wV.b(xV.minimum, xV.maximum)
            }
            if (this.hT)
              for (let xV = 0; xV < this.hT.length; xV++) this.hT[xV].refreshBoundingInfo(VV);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(VV) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(VV.minimum, VV.maximum) : this._boundingInfo = new wV.b(VV.minimum, VV.maximum), this.hT)
              for (let eV = 0; eV < this.hT.length; eV++) this.hT[eV].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(VV, eV, xV, JV, YV, pV, QV) {
            ! function(VV, eV, xV, JV, YV, pV, QV) {
              const nV = UV.l.Ik[0],
                wV = UV.l.Matrix[0],
                ZV = UV.l.Matrix[1],
                vV = eV === yV.j.NormalKind ? UV.o.TransformNormalFromFloatsToRef : UV.o.TransformCoordinatesFromFloatsToRef;
              for (let yV = 0, rV = 0; yV < VV.length; yV += 3, rV += 4) {
                let eV, kV;
                for (wV.reset(), eV = 0; eV < 4; eV++) kV = YV[rV + eV], kV > 0 && (UV.d.FromFloat32ArrayToRefScaled(xV, Math.floor(16 * JV[rV + eV]), kV, ZV), wV.addToSelf(ZV));
                if (pV && QV)
                  for (eV = 0; eV < 4; eV++) kV = QV[rV + eV], kV > 0 && (UV.d.FromFloat32ArrayToRefScaled(xV, Math.floor(16 * pV[rV + eV]), kV, ZV), wV.addToSelf(ZV));
                vV(VV[yV], VV[yV + 1], VV[yV + 2], wV, nV), nV.toArray(VV, yV)
              }
            }(VV, eV, xV, JV, YV, pV, QV)
          }
          _getData(eV, xV) {
            let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yV.j.PositionKind;
            const YV = eV.cache,
              pV = VV => {
                if (YV) {
                  const eV = YV._vertexData || (YV._vertexData = {});
                  return eV[VV] || this.copyVerticesData(VV, eV), eV[VV]
                }
                return this.getVerticesData(VV)
              };
            if (xV || (xV = pV(JV)), !xV) return null;
            YV ? (YV._outputData ? YV._outputData.set(xV) : YV._outputData = new Float32Array(xV), xV = YV._outputData) : (eV.applyMorph && this.morphTargetManager || eV.applySkeleton && this.skeleton || eV.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (xV = xV.slice()), eV.applyMorph && this.morphTargetManager && function(VV, eV, xV) {
              let JV;
              switch (eV) {
                case yV.j.PositionKind:
                  JV = VV => VV.getPositions();
                  break;
                case yV.j.NormalKind:
                  JV = VV => VV.getNormals();
                  break;
                case yV.j.TangentKind:
                  JV = VV => VV.getTangents();
                  break;
                case yV.j.UVKind:
                  JV = VV => VV.getUVs();
                  break;
                case yV.j.UV2Kind:
                  JV = VV => VV.getUV2s();
                  break;
                case yV.j.ColorKind:
                  JV = VV => VV.getColors();
                  break;
                default:
                  return
              }
              for (let YV = 0; YV < VV.length; YV++) {
                let eV = VV[YV];
                for (let UV = 0; UV < xV.numTargets; UV++) {
                  const yV = xV.getTarget(UV),
                    pV = yV.influence;
                  if (0 !== pV) {
                    const xV = JV(yV);
                    xV && (eV += (xV[YV] - VV[YV]) * pV)
                  }
                }
                VV[YV] = eV
              }
            }(xV, JV, this.morphTargetManager);
            const QV = this.bakedVertexAnimationManager;
            let nV = !1;
            if (eV.applyBakedVertexAnimation && QV?.isEnabled) {
              const VV = pV(yV.j.MatricesIndicesKind),
                YV = pV(yV.j.MatricesWeightsKind);
              if (YV && VV) {
                const UV = this.numBoneInfluencers > 4,
                  wV = UV ? pV(yV.j.MatricesIndicesExtraKind) : null,
                  ZV = UV ? pV(yV.j.MatricesWeightsExtraKind) : null;
                nV = zV(xV, JV, QV, eV.bakedVertexAnimationSettings ?? QV.animationParameters, VV, YV, wV, ZV, this.numBoneInfluencers)
              }
            }
            if (!nV && eV.applySkeleton && this.skeleton) {
              const eV = pV(yV.j.MatricesIndicesKind),
                YV = pV(yV.j.MatricesWeightsKind);
              if (YV && eV) {
                const UV = this.numBoneInfluencers > 4,
                  QV = UV ? pV(yV.j.MatricesIndicesExtraKind) : null,
                  nV = UV ? pV(yV.j.MatricesWeightsExtraKind) : null,
                  wV = this.skeleton.getTransformMatrices(this);
                VV._ApplySkeleton(xV, JV, wV, eV, YV, QV, nV)
              }
            }
            if (!1 !== eV.updatePositionsArray && JV === yV.j.PositionKind) {
              const VV = this._internalAbstractMeshDataInfo._positions || [],
                eV = VV.length;
              if (VV.length = xV.length / 3, eV < VV.length)
                for (let xV = eV; xV < VV.length; xV++) VV[xV] = new UV.o;
              for (let JV = 0, YV = 0; JV < VV.length; JV++, YV += 3) VV[JV].FeV(xV[YV], xV[YV + 1], xV[YV + 2]);
              this._internalAbstractMeshDataInfo._positions = VV
            }
            return xV
          }
          getNormalsData() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: VV,
              applyMorph: eV,
              updatePositionsArray: !1
            }, null, yV.j.NormalKind)
          }
          U_() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: VV,
              applyMorph: eV,
              updatePositionsArray: !1
            }, xV, yV.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new wV.b(UV.o.Zero(), UV.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(VV) {
            if (!this.hT) return this;
            const eV = this.hT.length;
            for (let xV = 0; xV < eV; xV++) {
              const JV = this.hT[xV];
              (eV > 1 || !JV.IsGlobal) && JV.updateBoundingInfo(VV)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Vb || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(VV) {
            return this.qL().isInFrustum(VV, this.cullingStrategy)
          }
          isCompletelyInFrustum(VV) {
            return this.qL().isCompletelyInFrustum(VV)
          }
          qUV(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = arguments.length > 2 ? arguments[2] : void 0;
            const JV = this.qL(),
              YV = VV.qL();
            if (JV.intersects(YV, eV)) return !0;
            if (xV)
              for (const UV of this.getChildMeshes())
                if (UV.qUV(VV, eV, !0)) return !0;
            return !1
          }
          intersectsPoint(VV) {
            return this.qL().intersectsPoint(VV)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(VV) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = VV
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(VV) {
            let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const xV = this.dD().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = xV.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, xV.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, VV, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, eV), this
          }
          _collideForSubMesh(VV, eV, xV) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!VV._lastColliderWorldVertices || !VV._lastColliderTransformMatrix.equals(eV)) {
              VV._lastColliderTransformMatrix = eV.clone(), VV._lastColliderWorldVertices = [], VV._trianglePlanes = [];
              const xV = VV.verticesStart,
                JV = VV.verticesStart + VV.verticesCount;
              for (let YV = xV; YV < JV; YV++) VV._lastColliderWorldVertices.push(UV.o.TransformCoordinates(this._positions[YV], eV))
            }
            return xV._collide(VV._trianglePlanes, VV._lastColliderWorldVertices, this.RYV(), VV.indexStart, VV.indexStart + VV.indexCount, VV.verticesStart, !!VV.eb(), this, this._shouldConvertRHS(), 7 === VV.eb()?.fillMode), this
          }
          _processCollisionsForSubMeshes(VV, eV) {
            const xV = this._scene.getCollidingSubMeshCandidates(this, VV),
              JV = xV.length;
            for (let YV = 0; YV < JV; YV++) {
              const UV = xV.data[YV];
              JV > 1 && !UV._checkCollision(VV) || this._collideForSubMesh(UV, eV, VV)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(VV) {
            if (!this.qL()._checkCollision(VV)) return this;
            const eV = UV.l.Matrix[0],
              xV = UV.l.Matrix[1];
            return UV.d.ScalingToRef(1 / VV._radius.x, 1 / VV._radius.y, 1 / VV._radius.z, eV), this.worldMatrixFromCache.multiplyToRef(eV, xV), this._processCollisionsForSubMeshes(VV, xV), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(VV, eV, xV) {
            let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              YV = arguments.length > 4 ? arguments[4] : void 0,
              yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const pV = new nV.c,
              QV = this.getClassName(),
              wV = "InstancedLinesMesh" === QV || "LinesMesh" === QV || "GreasedLineMesh" === QV ? this.intersectionThreshold : 0,
              ZV = this.qL();
            if (!this.hT) return pV;
            if (!yV && (!VV.intersectsSphere(ZV.xUV, wV) || !VV.intersectsBox(ZV.boundingBox, wV))) return pV;
            if (JV) return pV.hit = !yV, pV.pickedMesh = yV ? null : this, pV.distance = yV ? 0 : UV.o.Distance(VV.origin, ZV.xUV.center), pV.subMeshId = 0, pV;
            if (!this._generatePointsArray()) return pV;
            let vV = null;
            const rV = this._scene.getIntersectingSubMeshCandidates(this, VV),
              kV = rV.length;
            let bV = !1;
            for (let UV = 0; UV < kV; UV++) {
              const VV = rV.data[UV].eb();
              if (VV && (7 == VV.fillMode || 0 == VV.fillMode || 1 == VV.fillMode || 2 == VV.fillMode || 4 == VV.fillMode)) {
                bV = !0;
                break
              }
            }
            if (!bV) return pV.hit = !0, pV.pickedMesh = this, pV.distance = UV.o.Distance(VV.origin, ZV.xUV.center), pV.subMeshId = -1, pV;
            for (let UV = 0; UV < kV; UV++) {
              const JV = rV.data[UV];
              if (kV > 1 && !yV && !JV.canIntersects(VV)) continue;
              const YV = JV.intersects(VV, this._positions, this.RYV(), eV, xV);
              if (YV && (eV || !vV || YV.distance < vV.distance) && (vV = YV, vV.subMeshId = JV._id, vV._internalSubMeshId = UV, eV)) break
            }
            if (vV) {
              const eV = YV ?? this.getWorldMatrix(),
                xV = UV.l.Ik[0],
                JV = UV.l.Ik[1];
              UV.o.TransformCoordinatesToRef(VV.origin, eV, xV), VV.direction.scaleToRef(vV.distance, JV);
              const yV = UV.o.TransformNormal(JV, eV).addInPlace(xV);
              return pV.hit = !0, pV.distance = UV.o.Distance(xV, yV), pV.pickedPoint = yV, pV.pickedMesh = this, pV.bu = vV.bu || 0, pV.bv = vV.bv || 0, pV.subMeshFaceId = vV.faceId, pV.faceId = vV.faceId + rV.data[vV._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), pV.subMeshId = vV.subMeshId, pV
            }
            return pV
          }
          clone(VV, eV, xV) {
            return null
          }
          releaseSubMeshes() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.hT)
              for (; this.hT.length;) this.hT[0].dispose(VV);
            else this.hT = [];
            return this
          }
          dispose(VV) {
            let eV, xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const JV = this.dD();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), JV.freeActiveMeshes(), JV.freeRenderingGroups(), JV.renderingManager.maintainStateBetweenFrames && JV.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((VV => VV !== this && VV.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), eV = 0; eV < this._intersectionsInProgress.length; eV++) {
              const VV = this._intersectionsInProgress[eV],
                xV = VV._intersectionsInProgress.indexOf(this);
              VV._intersectionsInProgress.splice(xV, 1)
            }
            this._intersectionsInProgress.length = 0;
            const YV = JV.lights;
            for (const yV of YV) {
              let VV = yV.includedOnlyMeshes.indexOf(this); - 1 !== VV && yV.includedOnlyMeshes.splice(VV, 1), VV = yV.excludedMeshes.indexOf(this), -1 !== VV && yV.excludedMeshes.splice(VV, 1);
              const eV = yV.getShadowGenerators();
              if (eV) {
                const xV = eV.values();
                for (let eV = xV.next(); !0 !== eV.done; eV = xV.next()) {
                  const xV = eV.value.getShadowMap();
                  xV && xV.renderList && (VV = xV.renderList.indexOf(this), -1 !== VV && xV.renderList.splice(VV, 1))
                }
              }
            }
            this.releaseSubMeshes(JV._isDisposing);
            const UV = JV.sk();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, UV.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), UV.wipeCaches(), JV.rC(this), this._parentContainer) {
              const VV = this._parentContainer.meshes.indexOf(this);
              VV > -1 && this._parentContainer.meshes.splice(VV, 1), this._parentContainer = null
            }
            if (xV && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !VV)
              for (eV = 0; eV < JV.lT.length; eV++) JV.lT[eV].emitter === this && (JV.lT[eV].dispose(), eV--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(VV, xV)
          }
          _initFacetData() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            VV.facetNormals || (VV.facetNormals = []), VV.facetPositions || (VV.facetPositions = []), VV.facetPartitioning || (VV.facetPartitioning = new Array), VV.facetNb = this.RYV().length / 3 | 0, VV.partitioningSubdivisions = VV.partitioningSubdivisions ? VV.partitioningSubdivisions : 10, VV.partitioningBBoxRatio = VV.partitioningBBoxRatio ? VV.partitioningBBoxRatio : 1.01;
            for (let eV = 0; eV < VV.facetNb; eV++) VV.facetNormals[eV] = UV.o.Zero(), VV.facetPositions[eV] = UV.o.Zero();
            return VV.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            VV.facetDataEnabled || this._initFacetData();
            const eV = this.getVerticesData(yV.j.PositionKind),
              xV = this.RYV(),
              JV = this.getVerticesData(yV.j.NormalKind)?.slice(),
              YV = this.qL();
            if (VV.facetDepthSort && !VV.facetDepthSortEnabled) {
              if (VV.facetDepthSortEnabled = !0, xV instanceof Uint16Array) VV.depthSortedIndices = new Uint16Array(xV);
              else if (xV instanceof Uint32Array) VV.depthSortedIndices = new Uint32Array(xV);
              else {
                let eV = !1;
                for (let VV = 0; VV < xV.length; VV++)
                  if (xV[VV] > 65535) {
                    eV = !0;
                    break
                  } VV.depthSortedIndices = eV ? new Uint32Array(xV) : new Uint16Array(xV)
              }
              if (VV.facetDepthSortFunction = function(VV, eV) {
                  return eV.sqDistance - VV.sqDistance
                }, !VV.facetDepthSortFrom) {
                const eV = this.dD().activeCamera;
                VV.facetDepthSortFrom = eV ? eV.position : UV.o.Zero()
              }
              VV.depthSortedFacets = [];
              for (let eV = 0; eV < VV.facetNb; eV++) {
                const xV = {
                  ind: 3 * eV,
                  sqDistance: 0
                };
                VV.depthSortedFacets.push(xV)
              }
              VV.invertedMatrix = UV.d.Identity(), VV.facetDepthSortOrigin = UV.o.Zero()
            }
            VV.bbSize.x = YV.maximum.x - YV.minimum.x > tV.b ? YV.maximum.x - YV.minimum.x : tV.b, VV.bbSize.y = YV.maximum.y - YV.minimum.y > tV.b ? YV.maximum.y - YV.minimum.y : tV.b, VV.bbSize.z = YV.maximum.z - YV.minimum.z > tV.b ? YV.maximum.z - YV.minimum.z : tV.b;
            let QV = VV.bbSize.x > VV.bbSize.y ? VV.bbSize.x : VV.bbSize.y;
            if (QV = QV > VV.bbSize.z ? QV : VV.bbSize.z, VV.subDiv.max = VV.partitioningSubdivisions, VV.subDiv.X = Math.floor(VV.subDiv.max * VV.bbSize.x / QV), VV.subDiv.Y = Math.floor(VV.subDiv.max * VV.bbSize.y / QV), VV.subDiv.Z = Math.floor(VV.subDiv.max * VV.bbSize.z / QV), VV.subDiv.X = VV.subDiv.X < 1 ? 1 : VV.subDiv.X, VV.subDiv.Y = VV.subDiv.Y < 1 ? 1 : VV.subDiv.Y, VV.subDiv.Z = VV.subDiv.Z < 1 ? 1 : VV.subDiv.Z, VV.facetParameters.facetNormals = this.getFacetLocalNormals(), VV.facetParameters.facetPositions = this.getFacetLocalPositions(), VV.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), VV.facetParameters.bInfo = YV, VV.facetParameters.bbSize = VV.bbSize, VV.facetParameters.subDiv = VV.subDiv, VV.facetParameters.ratio = this.partitioningBBoxRatio, VV.facetParameters.depthSort = VV.facetDepthSort, VV.facetDepthSort && VV.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(VV.invertedMatrix), UV.o.TransformCoordinatesToRef(VV.facetDepthSortFrom, VV.invertedMatrix, VV.facetDepthSortOrigin), VV.facetParameters.distanceTo = VV.facetDepthSortOrigin), VV.facetParameters.depthSortedFacets = VV.depthSortedFacets, JV && pV.c.ComputeNormals(eV, xV, JV, VV.facetParameters), VV.facetDepthSort && VV.facetDepthSortEnabled) {
              VV.depthSortedFacets.sort(VV.facetDepthSortFunction);
              const eV = VV.depthSortedIndices.length / 3 | 0;
              for (let JV = 0; JV < eV; JV++) {
                const eV = VV.depthSortedFacets[JV].ind;
                VV.depthSortedIndices[3 * JV] = xV[eV], VV.depthSortedIndices[3 * JV + 1] = xV[eV + 1], VV.depthSortedIndices[3 * JV + 2] = xV[eV + 2]
              }
              this.updateIndices(VV.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            return VV.facetNormals || this.updateFacetData(), VV.facetNormals
          }
          getFacetLocalPositions() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            return VV.facetPositions || this.updateFacetData(), VV.facetPositions
          }
          getFacetLocalPartitioning() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            return VV.facetPartitioning || this.updateFacetData(), VV.facetPartitioning
          }
          getFacetPosition(VV) {
            const eV = UV.o.Zero();
            return this.getFacetPositionToRef(VV, eV), eV
          }
          getFacetPositionToRef(VV, eV) {
            const xV = this.getFacetLocalPositions()[VV],
              JV = this.getWorldMatrix();
            return UV.o.TransformCoordinatesToRef(xV, JV, eV), this
          }
          getFacetNormal(VV) {
            const eV = UV.o.Zero();
            return this.getFacetNormalToRef(VV, eV), eV
          }
          getFacetNormalToRef(VV, eV) {
            const xV = this.getFacetLocalNormals()[VV];
            return UV.o.TransformNormalToRef(xV, this.getWorldMatrix(), eV), this
          }
          getFacetsAtLocalCoordinates(VV, eV, xV) {
            const JV = this.qL(),
              YV = this._internalAbstractMeshDataInfo._facetData,
              UV = Math.floor((VV - JV.minimum.x * YV.partitioningBBoxRatio) * YV.subDiv.X * YV.partitioningBBoxRatio / YV.bbSize.x),
              yV = Math.floor((eV - JV.minimum.y * YV.partitioningBBoxRatio) * YV.subDiv.Y * YV.partitioningBBoxRatio / YV.bbSize.y),
              pV = Math.floor((xV - JV.minimum.z * YV.partitioningBBoxRatio) * YV.subDiv.Z * YV.partitioningBBoxRatio / YV.bbSize.z);
            return UV < 0 || UV > YV.subDiv.max || yV < 0 || yV > YV.subDiv.max || pV < 0 || pV > YV.subDiv.max ? null : YV.facetPartitioning[UV + YV.subDiv.max * yV + YV.subDiv.max * YV.subDiv.max * pV]
          }
          getClosestFacetAtCoordinates(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const pV = this.getWorldMatrix(),
              QV = UV.l.Matrix[5];
            pV.invertToRef(QV);
            const nV = UV.l.Ik[8];
            UV.o.TransformCoordinatesFromFloatsToRef(VV, eV, xV, QV, nV);
            const wV = this.getClosestFacetAtLocalCoordinates(nV.x, nV.y, nV.z, JV, YV, yV);
            return JV && UV.o.TransformCoordinatesFromFloatsToRef(JV.x, JV.y, JV.z, pV, JV), wV
          }
          getClosestFacetAtLocalCoordinates(VV, eV, xV, JV) {
            let YV, UV, yV, pV, QV, nV, wV, ZV, vV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              rV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              kV = null;
            const bV = this.getFacetLocalPositions(),
              EV = this.getFacetLocalNormals(),
              BV = this.getFacetsAtLocalCoordinates(VV, eV, xV);
            if (!BV) return null;
            let jV, qV, tV, FV, TV = Number.MAX_VALUE;
            for (let PV = 0; PV < BV.length; PV++) qV = BV[PV], tV = EV[qV], FV = bV[qV], pV = (VV - FV.x) * tV.x + (eV - FV.y) * tV.y + (xV - FV.z) * tV.z, (!vV || vV && rV && pV >= 0 || vV && !rV && pV <= 0) && (pV = tV.x * FV.x + tV.y * FV.y + tV.z * FV.z, QV = -(tV.x * VV + tV.y * eV + tV.z * xV - pV) / (tV.x * tV.x + tV.y * tV.y + tV.z * tV.z), nV = VV + tV.x * QV, wV = eV + tV.y * QV, ZV = xV + tV.z * QV, YV = nV - VV, UV = wV - eV, yV = ZV - xV, jV = YV * YV + UV * UV + yV * yV, jV < TV && (TV = jV, kV = qV, JV && (JV.x = nV, JV.y = wV, JV.z = ZV)));
            return kV
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const VV = this._internalAbstractMeshDataInfo._facetData;
            return VV.facetDataEnabled && (VV.facetDataEnabled = !1, VV.facetPositions = [], VV.facetNormals = [], VV.facetPartitioning = new Array, VV.facetParameters = {}, VV.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(VV, eV) {
            return this
          }
          createNormals(VV) {
            const eV = this.getVerticesData(yV.j.PositionKind),
              xV = this.RYV();
            let JV;
            return JV = this.isVerticesDataPresent(yV.j.NormalKind) ? this.getVerticesData(yV.j.NormalKind) : [], pV.c.ComputeNormals(eV, xV, JV, {
              useRightHandedSystem: this.dD().useRightHandedSystem
            }), this.setVerticesData(yV.j.NormalKind, JV, VV), this
          }
          async optimizeIndicesAsync() {
            const VV = this.RYV();
            if (!VV) return this;
            const {
              OptimizeIndices: eV
            } = await xV.e(660).then((() => xV(45439)));
            return eV(VV), this.setIndices(VV, this.getTotalVertices()), this
          }
          alignWithNormal(VV, eV) {
            eV || (eV = FV.e.Y);
            const xV = UV.l.Ik[0],
              JV = UV.l.Ik[1];
            return UV.o.CrossToRef(eV, VV, JV), UV.o.CrossToRef(VV, JV, xV), this.rotationQuaternion ? UV.h.RotationQuaternionFromAxisToRef(xV, VV, JV, this.rotationQuaternion) : UV.o.RotationFromAxisToRef(xV, VV, JV, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, EV.n)("EdgesRenderer")
          }
          enableEdgesRendering(VV, eV, xV) {
            throw (0, EV.n)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.lT.filter((VV => VV.emitter === this))
          }
        }, (() => {
          const xV = "function" === typeof Symbol && Symbol.metadata ? Object.create(vV[Symbol.metadata] ?? null) : void 0;
          eV = [PV.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, JV.i)(VV, null, eV, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: VV => "_ApplySkeleton" in VV,
              get: VV => VV._ApplySkeleton
            },
            metadata: xV
          }, null, rV), xV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xV
          })
        })(), VV.OCCLUSION_TYPE_NONE = ((0, JV.l)(VV, rV), 0), VV.OCCLUSION_TYPE_OPTIMISTIC = 1, VV.OCCLUSION_TYPE_STRICT = 2, VV.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, VV.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, VV.CULLINGSTRATEGY_STANDARD = 0, VV.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, VV.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, VV.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, VV.DefaultIsPickable = !0, VV
      })(),
      gV = !1;

    function DV() {
      gV || (gV = !0, (0, NV.d)("BABYLON.AbstractMesh", RV))
    }(rV = RV.prototype).createOrUpdateSubmeshesOctree ?? (rV.createOrUpdateSubmeshesOctree = (0, EV.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (kV = RV.prototype).getPhysicsImpostor ?? (kV.getPhysicsImpostor = (0, EV.j)("AbstractMesh", "getPhysicsImpostor")), (bV = RV.prototype).setPhysicsLinkWith ?? (bV.setPhysicsLinkWith = (0, EV.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(RV.prototype, "occlusionRetryCount") || Object.defineProperty(RV.prototype, "occlusionRetryCount", (0, EV.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(RV.prototype, "occlusionType") || Object.defineProperty(RV.prototype, "occlusionType", (0, EV.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(RV.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(RV.prototype, "occlusionQueryAlgorithmType", (0, EV.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(RV.prototype, "isOccluded") || Object.defineProperty(RV.prototype, "isOccluded", (0, EV.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(RV.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(RV.prototype, "isOcclusionQueryInProgress", (0, EV.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(RV.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(RV.prototype, "forceRenderingWhenOccluded", (0, EV.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(RV.prototype, "occlusionForRenderPassId") || Object.defineProperty(RV.prototype, "occlusionForRenderPassId", (0, EV.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(RV.prototype, "decalMap") || Object.defineProperty(RV.prototype, "decalMap", (0, EV.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(RV.prototype, "sC") || Object.defineProperty(RV.prototype, "sC", (0, EV.g)("AbstractMesh", "sC")), Object.getOwnPropertyDescriptor(RV.prototype, "physicsImpostor") || Object.defineProperty(RV.prototype, "physicsImpostor", (0, EV.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(RV.prototype, "showBoundingBox") || Object.defineProperty(RV.prototype, "showBoundingBox", (0, EV.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(RV.prototype, "edgesRenderer") || Object.defineProperty(RV.prototype, "edgesRenderer", (0, EV.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(RV.prototype, "renderOutline") || Object.defineProperty(RV.prototype, "renderOutline", (0, EV.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(RV.prototype, "renderOverlay") || Object.defineProperty(RV.prototype, "renderOverlay", (0, EV.g)("AbstractMesh", "renderOverlay"))
  },
  41677: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => BV
    });
    var JV = xV(38269),
      YV = xV(38389),
      UV = xV(41674),
      yV = xV(41394),
      pV = xV(41559),
      QV = xV(41681),
      nV = xV(41566),
      wV = xV(41341),
      ZV = xV(39870),
      vV = xV(41286),
      rV = xV(41575),
      kV = xV(38287),
      bV = xV(41688),
      EV = xV(41318);
    class BV {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(VV) {
        this._boundingBias ? this._boundingBias.iG(VV) : this._boundingBias = VV.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(VV) {
        const eV = new BV(BV.RandomId(), VV.dD());
        return eV.applyToMesh(VV), eV
      }
      get meshes() {
        return this._meshes
      }
      constructor(VV, eV, xV) {
        let YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new JV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new JV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = eV || kV.d.LastCreatedScene, this._scene && (this.id = VV, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.sk(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = YV, null !== yV && (this._totalVertices = yV), xV ? this.setAllVerticesData(xV, YV) : null === yV && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), UV && (this.applyToMesh(UV), UV.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      dD() {
        return this._scene
      }
      sk() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let VV = 0; VV < this._meshes.length; VV++)
          if (!this._meshes[VV].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const VV = new Set;
        for (const eV in this._vertexBuffers) VV.add(this._vertexBuffers[eV].getWrapperBuffer());
        VV.forEach((VV => {
          VV._rebuild()
        }))
      }
      setAllVerticesData(VV, eV) {
        VV.applyToGeometry(this, eV), this._notifyUpdate()
      }
      setVerticesData(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0;
        xV && Array.isArray(eV) && (eV = new Float32Array(eV));
        const YV = new yV.j(this._engine, eV, VV, {
          updatable: xV,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: JV,
          label: "Geometry_" + this.id + "_" + VV
        });
        this.setVerticesBuffer(YV)
      }
      removeVerticesData(VV) {
        this._vertexBuffers[VV] && (this._vertexBuffers[VV].dispose(), delete this._vertexBuffers[VV]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const YV = VV.getKind();
        this._vertexBuffers[YV] && xV && this._vertexBuffers[YV].dispose(), VV._buffer && VV._ownsBuffer && VV._buffer._increaseReferences(), this._vertexBuffers[YV] = VV;
        const UV = this._meshes,
          pV = UV.length;
        if (YV === yV.j.PositionKind) {
          this._totalVertices = eV ?? VV._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : VV.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const xV = this._extend && this._extend.minimum || new JV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            YV = this._extend && this._extend.maximum || new JV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let VV = 0; VV < pV; VV++) {
            const eV = UV[VV];
            eV.buildBoundingInfo(xV, YV), eV._createGlobalSubMesh(eV.isUnIndexed), eV.computeWorldMatrix(!0), eV.synchronizeInstances()
          }
        }
        this._notifyUpdate(YV)
      }
      updateVerticesDataDirectly(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const YV = this.getVertexBuffer(VV);
        YV && (YV.updateDirectly(eV, xV, JV), this._notifyUpdate(VV))
      }
      updateVerticesData(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this.getVertexBuffer(VV);
        JV && (JV.update(eV), VV === yV.j.PositionKind && this._updateBoundingInfo(xV, eV), this._notifyUpdate(VV))
      }
      _updateBoundingInfo(VV, eV) {
        if (VV && this._updateExtend(eV), this._resetPointsArrayCache(), VV) {
          const VV = this._meshes;
          for (const eV of VV) {
            eV.hasBoundingInfo ? eV.qL().reConstruct(this._extend.minimum, this._extend.maximum) : eV.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const VV = eV.hT;
            for (const eV of VV) eV.refreshBoundingInfo()
          }
        }
      }
      _bind(VV, eV, xV, JV) {
        if (!VV) return;
        void 0 === eV && (eV = this._indexBuffer);
        const YV = this.getVertexBuffers();
        if (!YV) return;
        if (eV != this._indexBuffer || !this._vertexArrayObjects && !JV) return void this._engine.bindBuffers(YV, eV, VV, xV);
        const UV = JV || this._vertexArrayObjects,
          yV = this._engine;
        UV[VV.key] || (UV[VV.key] = yV.recordVertexArrayObject(YV, eV, VV, xV)), yV.bindVertexArrayObject(UV[VV.key], eV)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(VV, eV, xV) {
        const JV = this.getVertexBuffer(VV);
        return JV ? JV.getFloatData(this._totalVertices, xV || eV && 1 !== this._meshes.length) : null
      }
      copyVerticesData(VV, eV) {
        const xV = this.getVertexBuffer(VV);
        if (!xV) return;
        eV[VV] || (eV[VV] = new Float32Array(this._totalVertices * xV.getSize()));
        const JV = xV.getData();
        JV && (0, EV.f)(JV, xV.getSize(), xV.type, xV.byteOffset, xV.byteStride, xV.normalized, this._totalVertices, eV[VV])
      }
      isVertexBufferUpdatable(VV) {
        const eV = this._vertexBuffers[VV];
        return !!eV && eV.isUpdatable()
      }
      getVertexBuffer(VV) {
        return this.isReady() ? this._vertexBuffers[VV] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(VV) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[VV] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(VV)
      }
      getVerticesDataKinds() {
        const VV = [];
        let eV;
        if (!this._vertexBuffers && this._delayInfo)
          for (eV in this._delayInfo) VV.push(eV);
        else
          for (eV in this._vertexBuffers) VV.push(eV);
        return VV
      }
      updateIndices(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const JV = VV.length !== this._indices.length;
            if (xV || (this._indices = VV.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, VV, eV), JV)
              for (const VV of this._meshes) VV._createGlobalSubMesh(!0)
          } else this.setIndices(VV, null, !0)
      }
      setIndexBuffer(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = VV, this._totalVertices = eV, this._totalIndices = xV, VV.is32Bits = null === JV ? eV > 65535 : JV;
        for (const YV of this._meshes) YV._createGlobalSubMesh(!0), YV.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = VV, this._indexBufferIsUpdatable = xV, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, xV, "Geometry_" + this.id + "_IndexBuffer")), void 0 != eV && (this._totalVertices = eV);
        for (const YV of this._meshes) YV._createGlobalSubMesh(!JV), YV.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      RYV(VV, eV) {
        if (!this.isReady()) return null;
        const xV = this._indices;
        return eV || VV && 1 !== this._meshes.length ? xV.slice() : xV
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        VV && this._vertexArrayObjects && this._vertexArrayObjects[VV.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[VV.key]), delete this._vertexArrayObjects[VV.key])
      }
      releaseForMesh(VV, eV) {
        const xV = this._meshes,
          JV = xV.indexOf(VV); - 1 !== JV && (xV.splice(JV, 1), this._vertexArrayObjects && VV._invalidateInstanceVertexArrayObject(), VV._geometry = null, 0 === xV.length && eV && this.dispose())
      }
      applyToMesh(VV) {
        if (VV._geometry === this) return;
        const eV = VV._geometry;
        eV && eV.releaseForMesh(VV), this._vertexArrayObjects && VV._invalidateInstanceVertexArrayObject();
        const xV = this._meshes;
        VV._geometry = this, VV._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), xV.push(VV), this.isReady() ? this._applyToMesh(VV) : this._boundingInfo && VV.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!VV && (VV = this.getVerticesData(yV.j.PositionKind), !VV)) return;
          this._extend = (0, rV.g)(VV, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(VV) {
        for (const eV in this._vertexBuffers) {
          const xV = this._vertexBuffers[eV];
          xV._buffer.getBuffer() || xV.create(), eV === yV.j.PositionKind && (this._extend || this._updateExtend(), VV.buildBoundingInfo(this._extend.minimum, this._extend.maximum), VV._createGlobalSubMesh(VV.isUnIndexed), VV._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), VV._syncGeometryWithMorphTargetManager(), VV.synchronizeInstances()
      }
      _notifyUpdate(VV) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, VV), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const eV of this._meshes) eV._markSubMeshesAsAttributesDirty()
      }
      load(VV, eV) {
        2 !== this.delayLoadState && (this.isReady() ? eV && eV() : (this.delayLoadState = 2, this._queueLoad(VV, eV)))
      }
      _queueLoad(VV, eV) {
        this.delayLoadingFile && (VV.addPendingData(this), (async () => {
          try {
            const xV = await VV._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void VV.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(xV), this), this.delayLoadState = 1, this._delayInfo = [], VV.removePendingData(this);
            const JV = this._meshes,
              YV = JV.length;
            for (let VV = 0; VV < YV; VV++) this._applyToMesh(JV[VV]);
            eV && eV()
          } catch (xV) {
            VV.removePendingData(this), VV.iN || ZV.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${xV}`)
          }
        })())
      }
      toLeftHanded() {
        const VV = this.RYV(!1);
        if (null != VV && VV.length > 0) {
          for (let eV = 0; eV < VV.length; eV += 3) {
            const xV = VV[eV + 0];
            VV[eV + 0] = VV[eV + 2], VV[eV + 2] = xV
          }
          this.setIndices(VV)
        }
        const eV = this.getVerticesData(yV.j.PositionKind, !1);
        if (null != eV && eV.length > 0) {
          for (let VV = 0; VV < eV.length; VV += 3) eV[VV + 2] = -eV[VV + 2];
          this.setVerticesData(yV.j.PositionKind, eV, !1)
        }
        const xV = this.getVerticesData(yV.j.NormalKind, !1);
        if (null != xV && xV.length > 0) {
          for (let VV = 0; VV < xV.length; VV += 3) xV[VV + 2] = -xV[VV + 2];
          this.setVerticesData(yV.j.NormalKind, xV, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const VV = this.getVerticesData(yV.j.PositionKind);
        if (!VV || 0 === VV.length) return !1;
        for (let eV = 3 * this._positionsCache.length, xV = this._positionsCache.length; eV < VV.length; eV += 3, ++xV) this._positionsCache[xV] = JV.o.FromArray(VV, eV);
        for (let eV = 0, xV = 0; eV < VV.length; eV += 3, ++xV) this._positionsCache[xV].set(VV[0 + eV], VV[1 + eV], VV[2 + eV]);
        return this._positionsCache.length = VV.length / 3, this._positions = this._positionsCache, !0
      }
      iN() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const xV in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[xV]);
          this._vertexArrayObjects = {};
          const VV = this._meshes,
            eV = VV.length;
          for (let xV = 0; xV < eV; xV++) VV[xV]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const VV = this._meshes,
          eV = VV.length;
        let xV;
        for (xV = 0; xV < eV; xV++) this.releaseForMesh(VV[xV]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const JV in this._vertexBuffers) this._vertexBuffers[JV].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const VV = this._parentContainer.geometries.indexOf(this);
          VV > -1 && this._parentContainer.geometries.splice(VV, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(VV) {
        const eV = new BV(VV, this._scene),
          xV = this.RYV(void 0, !0);
        xV && eV.setIndices(xV);
        let JV, YV = !1;
        for (JV in this._vertexBuffers) {
          const VV = this.getVertexBuffer(JV),
            xV = VV.getData();
          if (!xV) continue;
          const UV = VV.isUpdatable(),
            pV = VV.getSize(),
            {
              type: QV,
              byteOffset: nV,
              byteStride: wV,
              normalized: ZV
            } = VV;
          YV = YV || UV;
          let vV = this._totalVertices;
          if (VV.getIsInstanced()) {
            let VV;
            VV = xV instanceof Array ? 4 * xV.length : xV.byteLength, vV = VV / wV
          }
          const rV = (0, EV.q)(xV, pV, QV, nV, wV, vV, !0),
            kV = new yV.j(this._engine, rV, JV, {
              updatable: UV,
              useBytes: !1,
              stride: pV,
              size: pV,
              offset: 0,
              type: QV,
              normalized: ZV,
              takeBufferOwnership: !0,
              instanced: VV.getIsInstanced()
            });
          eV.setVerticesBuffer(kV, vV)
        }
        for (JV in eV._updatable = YV, eV.delayLoadState = this.delayLoadState, eV.delayLoadingFile = this.delayLoadingFile, eV._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) eV._delayInfo = eV._delayInfo || [], eV._delayInfo.push(JV);
        return eV._boundingInfo = new nV.b(this._extend.minimum, this._extend.maximum), eV
      }
      serialize() {
        const VV = {};
        return VV.id = this.id, VV.uniqueId = this.uniqueId, VV.updatable = this._updatable, vV.d && vV.d.HasTags(this) && (VV.tags = vV.d.GetTags(this)), VV
      }
      _toNumberArray(VV) {
        return Array.isArray(VV) ? VV : Array.prototype.slice.call(VV)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const VV in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, VV) && (this._vertexBuffers[VV]._buffer._data = null)
      }
      serializeVerticeData() {
        const VV = this.serialize();
        return this.isVerticesDataPresent(yV.j.PositionKind) && (VV.positions = this._toNumberArray(this.getVerticesData(yV.j.PositionKind)), this.isVertexBufferUpdatable(yV.j.PositionKind) && (VV.positionsUpdatable = !0)), this.isVerticesDataPresent(yV.j.NormalKind) && (VV.normals = this._toNumberArray(this.getVerticesData(yV.j.NormalKind)), this.isVertexBufferUpdatable(yV.j.NormalKind) && (VV.normalsUpdatable = !0)), this.isVerticesDataPresent(yV.j.TangentKind) && (VV.tangents = this._toNumberArray(this.getVerticesData(yV.j.TangentKind)), this.isVertexBufferUpdatable(yV.j.TangentKind) && (VV.tangentsUpdatable = !0)), this.isVerticesDataPresent(yV.j.UVKind) && (VV.uvs = this._toNumberArray(this.getVerticesData(yV.j.UVKind)), this.isVertexBufferUpdatable(yV.j.UVKind) && (VV.uvsUpdatable = !0)), this.isVerticesDataPresent(yV.j.UV2Kind) && (VV.uvs2 = this._toNumberArray(this.getVerticesData(yV.j.UV2Kind)), this.isVertexBufferUpdatable(yV.j.UV2Kind) && (VV.uvs2Updatable = !0)), this.isVerticesDataPresent(yV.j.UV3Kind) && (VV.uvs3 = this._toNumberArray(this.getVerticesData(yV.j.UV3Kind)), this.isVertexBufferUpdatable(yV.j.UV3Kind) && (VV.uvs3Updatable = !0)), this.isVerticesDataPresent(yV.j.UV4Kind) && (VV.uvs4 = this._toNumberArray(this.getVerticesData(yV.j.UV4Kind)), this.isVertexBufferUpdatable(yV.j.UV4Kind) && (VV.uvs4Updatable = !0)), this.isVerticesDataPresent(yV.j.UV5Kind) && (VV.uvs5 = this._toNumberArray(this.getVerticesData(yV.j.UV5Kind)), this.isVertexBufferUpdatable(yV.j.UV5Kind) && (VV.uvs5Updatable = !0)), this.isVerticesDataPresent(yV.j.UV6Kind) && (VV.uvs6 = this._toNumberArray(this.getVerticesData(yV.j.UV6Kind)), this.isVertexBufferUpdatable(yV.j.UV6Kind) && (VV.uvs6Updatable = !0)), this.isVerticesDataPresent(yV.j.ColorKind) && (VV.colors = this._toNumberArray(this.getVerticesData(yV.j.ColorKind)), this.isVertexBufferUpdatable(yV.j.ColorKind) && (VV.colorsUpdatable = !0)), this.isVerticesDataPresent(yV.j.MatricesIndicesKind) && (VV.matricesIndices = this._toNumberArray(this.getVerticesData(yV.j.MatricesIndicesKind)), VV.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(yV.j.MatricesIndicesKind) && (VV.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(yV.j.MatricesWeightsKind) && (VV.matricesWeights = this._toNumberArray(this.getVerticesData(yV.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(yV.j.MatricesWeightsKind) && (VV.matricesWeightsUpdatable = !0)), VV.indices = this._toNumberArray(this.RYV()), VV
      }
      static ExtractFromMesh(VV, eV) {
        const xV = VV._geometry;
        return xV ? xV.copy(eV) : null
      }
      static RandomId() {
        return wV.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(VV, eV) {
        for (let xV = 0; xV < eV.geometries.length; xV++)
          if (eV.geometries[xV]._loadedUniqueId === VV) return eV.geometries[xV];
        return null
      }
      static _ImportGeometry(VV, eV) {
        const xV = eV.dD(),
          JV = VV.geometryUniqueId,
          UV = VV.geometryId;
        if (JV || UV) {
          const VV = JV ? this._GetGeometryByLoadedUniqueId(JV, xV) : xV.getGeometryById(UV);
          VV && VV.applyToMesh(eV)
        } else if (VV instanceof ArrayBuffer) {
          const xV = eV._binaryInfo;
          if (xV.positionsAttrDesc && xV.positionsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.positionsAttrDesc.offset, xV.positionsAttrDesc.count);
            eV.setVerticesData(yV.j.PositionKind, JV, !1)
          }
          if (xV.normalsAttrDesc && xV.normalsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.normalsAttrDesc.offset, xV.normalsAttrDesc.count);
            eV.setVerticesData(yV.j.NormalKind, JV, !1)
          }
          if (xV.tangetsAttrDesc && xV.tangetsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.tangetsAttrDesc.offset, xV.tangetsAttrDesc.count);
            eV.setVerticesData(yV.j.TangentKind, JV, !1)
          }
          if (xV.uvsAttrDesc && xV.uvsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvsAttrDesc.offset, xV.uvsAttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UVKind, JV, !1)
          }
          if (xV.uvs2AttrDesc && xV.uvs2AttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvs2AttrDesc.offset, xV.uvs2AttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UV2Kind, JV, !1)
          }
          if (xV.uvs3AttrDesc && xV.uvs3AttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvs3AttrDesc.offset, xV.uvs3AttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UV3Kind, JV, !1)
          }
          if (xV.uvs4AttrDesc && xV.uvs4AttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvs4AttrDesc.offset, xV.uvs4AttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UV4Kind, JV, !1)
          }
          if (xV.uvs5AttrDesc && xV.uvs5AttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvs5AttrDesc.offset, xV.uvs5AttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UV5Kind, JV, !1)
          }
          if (xV.uvs6AttrDesc && xV.uvs6AttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.uvs6AttrDesc.offset, xV.uvs6AttrDesc.count);
            if (bV.d)
              for (let VV = 1; VV < JV.length; VV += 2) JV[VV] = 1 - JV[VV];
            eV.setVerticesData(yV.j.UV6Kind, JV, !1)
          }
          if (xV.colorsAttrDesc && xV.colorsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.colorsAttrDesc.offset, xV.colorsAttrDesc.count);
            eV.setVerticesData(yV.j.ColorKind, JV, !1, xV.colorsAttrDesc.stride)
          }
          if (xV.matricesIndicesAttrDesc && xV.matricesIndicesAttrDesc.count > 0) {
            const JV = new Int32Array(VV, xV.matricesIndicesAttrDesc.offset, xV.matricesIndicesAttrDesc.count),
              YV = [];
            for (let VV = 0; VV < JV.length; VV++) {
              const eV = JV[VV];
              YV.push(255 & eV), YV.push((65280 & eV) >> 8), YV.push((16711680 & eV) >> 16), YV.push(eV >> 24 & 255)
            }
            eV.setVerticesData(yV.j.MatricesIndicesKind, YV, !1)
          }
          if (xV.matricesIndicesExtraAttrDesc && xV.matricesIndicesExtraAttrDesc.count > 0) {
            const JV = new Int32Array(VV, xV.matricesIndicesExtraAttrDesc.offset, xV.matricesIndicesExtraAttrDesc.count),
              YV = [];
            for (let VV = 0; VV < JV.length; VV++) {
              const eV = JV[VV];
              YV.push(255 & eV), YV.push((65280 & eV) >> 8), YV.push((16711680 & eV) >> 16), YV.push(eV >> 24 & 255)
            }
            eV.setVerticesData(yV.j.MatricesIndicesExtraKind, YV, !1)
          }
          if (xV.matricesWeightsAttrDesc && xV.matricesWeightsAttrDesc.count > 0) {
            const JV = new Float32Array(VV, xV.matricesWeightsAttrDesc.offset, xV.matricesWeightsAttrDesc.count);
            eV.setVerticesData(yV.j.MatricesWeightsKind, JV, !1)
          }
          if (xV.indicesAttrDesc && xV.indicesAttrDesc.count > 0) {
            const JV = new Int32Array(VV, xV.indicesAttrDesc.offset, xV.indicesAttrDesc.count);
            eV.setIndices(JV, null)
          }
          if (xV.subMeshesAttrDesc && xV.subMeshesAttrDesc.count > 0) {
            const JV = new Int32Array(VV, xV.subMeshesAttrDesc.offset, 5 * xV.subMeshesAttrDesc.count);
            eV.hT = [];
            for (let VV = 0; VV < xV.subMeshesAttrDesc.count; VV++) {
              const xV = JV[5 * VV + 0],
                YV = JV[5 * VV + 1],
                UV = JV[5 * VV + 2],
                yV = JV[5 * VV + 3],
                QV = JV[5 * VV + 4];
              pV.c.AddToMesh(xV, YV, UV, yV, QV, eV)
            }
          }
        } else if (VV.positions && VV.normals && VV.indices) {
          if (eV.setVerticesData(yV.j.PositionKind, VV.positions, VV.positions._updatable || VV.positionsUpdatable), eV.setVerticesData(yV.j.NormalKind, VV.normals, VV.normals._updatable || VV.normalsUpdatable), VV.tangents && eV.setVerticesData(yV.j.TangentKind, VV.tangents, VV.tangents._updatable || VV.tangentsUpdatable), VV.uvs && eV.setVerticesData(yV.j.UVKind, VV.uvs, VV.uvs._updatable || VV.uvsUpdatable), VV.uvs2 && eV.setVerticesData(yV.j.UV2Kind, VV.uvs2, VV.uvs2._updatable || VV.uvs2Updatable), VV.uvs3 && eV.setVerticesData(yV.j.UV3Kind, VV.uvs3, VV.uvs3._updatable || VV.uvs3Updatable), VV.uvs4 && eV.setVerticesData(yV.j.UV4Kind, VV.uvs4, VV.uvs4._updatable || VV.uvs4Updatable), VV.uvs5 && eV.setVerticesData(yV.j.UV5Kind, VV.uvs5, VV.uvs5._updatable || VV.uvs5Updatable), VV.uvs6 && eV.setVerticesData(yV.j.UV6Kind, VV.uvs6, VV.uvs6._updatable || VV.uvs6Updatable), VV.colors && eV.setVerticesData(yV.j.ColorKind, YV.h.CheckColors4(VV.colors, VV.positions.length / 3), VV.colors._updatable), VV.matricesIndices)
            if (VV.matricesIndices._isExpanded || VV.matricesIndicesExpanded) delete VV.matricesIndices._isExpanded, delete VV.matricesIndicesExpanded, eV.setVerticesData(yV.j.MatricesIndicesKind, VV.matricesIndices, VV.matricesIndices._updatable || VV.matricesIndicesUpdatable);
            else {
              const xV = [];
              for (let eV = 0; eV < VV.matricesIndices.length; eV++) {
                const JV = VV.matricesIndices[eV];
                xV.push(255 & JV), xV.push((65280 & JV) >> 8), xV.push((16711680 & JV) >> 16), xV.push(JV >> 24 & 255)
              }
              eV.setVerticesData(yV.j.MatricesIndicesKind, xV, VV.matricesIndices._updatable || VV.matricesIndicesUpdatable)
            } if (VV.matricesIndicesExtra)
            if (VV.matricesIndicesExtraExpanded || VV.matricesIndicesExtra._isExpanded) delete VV.matricesIndices._isExpanded, delete VV.matricesIndicesExtraExpanded, eV.setVerticesData(yV.j.MatricesIndicesExtraKind, VV.matricesIndicesExtra, VV.matricesIndicesExtra._updatable || VV.matricesIndicesExtraUpdatable);
            else {
              const xV = [];
              for (let eV = 0; eV < VV.matricesIndicesExtra.length; eV++) {
                const JV = VV.matricesIndicesExtra[eV];
                xV.push(255 & JV), xV.push((65280 & JV) >> 8), xV.push((16711680 & JV) >> 16), xV.push(JV >> 24 & 255)
              }
              eV.setVerticesData(yV.j.MatricesIndicesExtraKind, xV, VV.matricesIndicesExtra._updatable || VV.matricesIndicesExtraUpdatable)
            } VV.matricesWeights && (BV._CleanMatricesWeights(VV, eV), eV.setVerticesData(yV.j.MatricesWeightsKind, VV.matricesWeights, VV.matricesWeights._updatable)), VV.matricesWeightsExtra && eV.setVerticesData(yV.j.MatricesWeightsExtraKind, VV.matricesWeightsExtra, VV.matricesWeights._updatable), eV.setIndices(VV.indices, null)
        }
        if (VV.hT) {
          eV.hT = [];
          for (let xV = 0; xV < VV.hT.length; xV++) {
            const JV = VV.hT[xV];
            pV.c.AddToMesh(JV.materialIndex, JV.verticesStart, JV.verticesCount, JV.indexStart, JV.indexCount, eV)
          }
        }
        eV._shouldGenerateFlatShading && (eV.convertToFlatShadedMesh(), eV._shouldGenerateFlatShading = !1), eV.computeWorldMatrix(!0), xV.onMeshImportedObservable.notifyObservers(eV)
      }
      static _CleanMatricesWeights(VV, eV) {
        const xV = .001;
        if (!QV.b.CleanBoneMatrixWeights) return;
        let JV;
        if (!(VV.skeletonId > -1)) return;
        {
          const xV = eV.dD().getLastSkeletonById(VV.skeletonId);
          if (!xV) return;
          JV = xV.bones.length
        }
        const YV = eV.getVerticesData(yV.j.MatricesIndicesKind),
          UV = eV.getVerticesData(yV.j.MatricesIndicesExtraKind),
          pV = VV.matricesWeights,
          nV = VV.matricesWeightsExtra,
          wV = VV.numBoneInfluencer,
          ZV = pV.length;
        for (let yV = 0; yV < ZV; yV += 4) {
          let VV = 0,
            eV = -1;
          for (let JV = 0; JV < 4; JV++) {
            const YV = pV[yV + JV];
            VV += YV, YV < xV && eV < 0 && (eV = JV)
          }
          if (nV)
            for (let JV = 0; JV < 4; JV++) {
              const YV = nV[yV + JV];
              VV += YV, YV < xV && eV < 0 && (eV = JV + 4)
            }
          if ((eV < 0 || eV > wV - 1) && (eV = wV - 1), VV > xV) {
            const eV = 1 / VV;
            for (let VV = 0; VV < 4; VV++) pV[yV + VV] *= eV;
            if (nV)
              for (let VV = 0; VV < 4; VV++) nV[yV + VV] *= eV
          } else eV >= 4 ? (nV[yV + eV - 4] = 1 - VV, UV[yV + eV - 4] = JV) : (pV[yV + eV] = 1 - VV, YV[yV + eV] = JV)
        }
        eV.setVerticesData(yV.j.MatricesIndicesKind, YV), VV.matricesWeightsExtra && eV.setVerticesData(yV.j.MatricesIndicesExtraKind, UV)
      }
      static Parse(VV, eV, xV) {
        const YV = new BV(VV.id, eV, void 0, VV.updatable);
        return YV._loadedUniqueId = VV.uniqueId, vV.d && vV.d.AddTagsTo(YV, VV.tags), VV.delayLoadingFile ? (YV.delayLoadState = 4, YV.delayLoadingFile = xV + VV.delayLoadingFile, YV._boundingInfo = new nV.b(JV.o.FromArray(VV.boundingBoxMinimum), JV.o.FromArray(VV.boundingBoxMaximum)), YV._delayInfo = [], VV.hasUVs && YV._delayInfo.push(yV.j.UVKind), VV.hasUVs2 && YV._delayInfo.push(yV.j.UV2Kind), VV.hasUVs3 && YV._delayInfo.push(yV.j.UV3Kind), VV.hasUVs4 && YV._delayInfo.push(yV.j.UV4Kind), VV.hasUVs5 && YV._delayInfo.push(yV.j.UV5Kind), VV.hasUVs6 && YV._delayInfo.push(yV.j.UV6Kind), VV.hasColors && YV._delayInfo.push(yV.j.ColorKind), VV.hasMatricesIndices && YV._delayInfo.push(yV.j.MatricesIndicesKind), VV.hasMatricesWeights && YV._delayInfo.push(yV.j.MatricesWeightsKind), YV._delayLoadingFunction = UV.c.ImportVertexData) : UV.c.ImportVertexData(VV, YV), eV.pushGeometry(YV, !0), YV
      }
    }
  },
  41720: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV,
      e: () => kV
    });
    var JV = xV(38269),
      YV = xV(39870),
      UV = xV(41692),
      yV = xV(41664),
      pV = xV(39867),
      QV = xV(41695),
      nV = xV(41394),
      wV = xV(38318);
    class ZV extends UV.c {
      constructor(VV, eV) {
        super(VV, eV.dD()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, eV.YeV(this), this._sourceMesh = eV, this._unIndexed = eV._unIndexed, this.position.iG(eV.position), this.rotation.iG(eV.rotation), this.WZ.iG(eV.WZ), eV.rotationQuaternion && (this.rotationQuaternion = eV.rotationQuaternion.clone()), this.animations = eV.animations.slice();
        for (const xV of eV.getAnimationRanges()) null != xV && this.createAnimationRange(xV.name, xV.from, xV.to);
        if (this.infiniteDistance = eV.infiniteDistance, this.setPivotMatrix(eV.getPivotMatrix()), eV.skeleton || eV.morphTargetManager || !eV.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const VV = eV.qL();
          this.buildBoundingInfo(VV.minimum, VV.maximum)
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
      set receiveShadows(VV) {
        this._sourceMesh?.receiveShadows !== VV && YV.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(VV) {
        this._sourceMesh?.material !== VV && YV.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(VV) {
        this._sourceMesh?.visibility !== VV && YV.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(VV) {
        this._sourceMesh?.skeleton !== VV && YV.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(VV) {
        this._sourceMesh && VV !== this._sourceMesh.renderingGroupId && YV.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(VV) {
        this._sourceMesh && VV !== this._sourceMesh.meshBlendingTag && YV.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get XUV() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(VV) {
        return this._sourceMesh.createInstance(VV)
      }
      isReady() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(VV, !0)
      }
      getVerticesData(VV, eV, xV) {
        return this._sourceMesh.getVerticesData(VV, eV, xV)
      }
      copyVerticesData(VV, eV) {
        this._sourceMesh.copyVerticesData(VV, eV)
      }
      getVertexBuffer(VV, eV) {
        return this._sourceMesh.getVertexBuffer(VV, eV)
      }
      setVerticesData(VV, eV, xV, JV) {
        return this.XUV && this.XUV.setVerticesData(VV, eV, xV, JV), this.XUV
      }
      updateVerticesData(VV, eV, xV, JV) {
        return this.XUV && this.XUV.updateVerticesData(VV, eV, xV, JV), this.XUV
      }
      setIndices(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.XUV && this.XUV.setIndices(VV, eV), this.XUV
      }
      isVerticesDataPresent(VV) {
        return this._sourceMesh.isVerticesDataPresent(VV)
      }
      RYV() {
        return this._sourceMesh.RYV()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let VV, eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qL().isLocked) return this;
        VV = "object" === typeof eV ? eV : {
          applySkeleton: eV,
          applyMorph: xV
        };
        const JV = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(VV, null, nV.j.PositionKind), JV), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(VV, eV) {
        if (super._activate(VV, eV), this._sourceMesh.hT || YV.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, VV), eV) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== QV.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new JV.d);
          const VV = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, JV.l.Ik[7].iG(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.iG(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.iG(JV.l.Ik[7]), this._currentLOD._masterMesh = VV, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get JC() {
        return !0
      }
      getLOD(VV) {
        if (!VV) return this;
        const eV = this.XUV.getLODLevels();
        if (eV && 0 !== eV.length) {
          const eV = this.qL();
          this._currentLOD = this.XUV.getLOD(VV, eV.xUV)
        } else this._currentLOD = this.XUV;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(VV) {
        return this.XUV._preActivateForIntermediateRendering(VV)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.hT)
          for (let VV = 0; VV < this._sourceMesh.hT.length; VV++) this._sourceMesh.hT[VV].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.qL().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(VV);
        if (pV.d.DeepCopy(this, JV, ["name", "hT", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "XUV", "JC", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "NUV", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "EQV", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), eV && (JV.parent = eV), !xV)
          for (let YV = 0; YV < this.dD().meshes.length; YV++) {
            const VV = this.dD().meshes[YV];
            VV.parent === this && VV.clone(VV.name, JV)
          }
        return JV.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(JV), JV
      }
      dispose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.yeV(this), super.dispose(VV, eV)
      }
      _serializeAsParent(VV) {
        super._serializeAsParent(VV), VV.parentId = this._sourceMesh.uniqueId, VV.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = this.clone("Clone of " + (this.name || this.id), VV || this.parent, !0, eV && eV.newSourcedMesh);
        JV && xV && xV(this, JV);
        for (const YV of this.getChildTransformNodes(!0)) YV.instantiateHierarchy(JV, eV, xV);
        return JV
      }
    }
    let vV = !1;

    function rV(VV, eV, xV, JV, YV) {
      for (let UV = 0; UV < eV.length; UV++) {
        const yV = VV[eV[UV]] ?? 0,
          pV = YV + xV[UV];
        yV.toArray ? yV.toArray(JV, pV) : yV.copyToArray ? yV.copyToArray(JV, pV) : JV[pV] = yV
      }
    }

    function kV() {
      vV || (vV = !0, yV.b._instancedMeshFactory = (VV, eV) => {
        const xV = new ZV(VV, eV);
        if (eV.sC) {
          xV.sC = {};
          for (const VV in eV.sC) xV.sC[VV] = eV.sC[VV]
        }
        return xV
      }, yV.b.prototype.uC = function(VV, eV) {
        if (!this.sC) {
          this.sC = {};
          for (const VV of this.instances) VV.sC = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.sk().getCaps().vertexArrayObject ? {} : void 0
        }), this.sC[VV] = null, this._userInstancedBuffersStorage.strides[VV] = eV;
        const xV = this._userInstancedBuffersStorage;
        xV.interleavedKinds = [], xV.interleavedOffsets = [], xV.interleavedRowStride = 0;
        for (const JV in xV.strides) xV.interleavedKinds.push(JV), xV.interleavedOffsets.push(xV.interleavedRowStride), xV.interleavedRowStride += xV.strides[JV];
        xV.interleavedData = new Float32Array(32 * xV.interleavedRowStride);
        for (const JV in xV.interleavedBuffers) xV.interleavedBuffers[JV].buffer.dispose();
        xV.interleavedBuffers = {}, xV.vertexBuffers[VV] = null;
        for (const JV of this.instances) JV.sC[VV] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, yV.b.prototype._processInstancedBuffers = function(VV, eV) {
        const xV = this._userInstancedBuffersStorage,
          JV = xV.interleavedRowStride;
        if (!JV) return;
        const YV = VV ? VV.length : 0,
          UV = (YV + 1) * JV;
        let yV = xV.interleavedData;
        if (yV.length < UV) {
          let VV = yV.length;
          for (; VV < UV;) VV *= 2;
          yV = xV.interleavedData = new Float32Array(VV)
        }
        const pV = xV.interleavedKinds,
          QV = xV.interleavedOffsets;
        let wV = 0;
        eV && (rV(this.sC, pV, QV, yV, wV), wV += JV);
        for (let nV = 0; nV < YV; nV++) rV(VV[nV].sC, pV, QV, yV, wV), wV += JV;
        let ZV = "shared",
          vV = xV.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (ZV = this._instanceDataStorage.engine.currentRenderPassId, xV.renderPasses || (xV.renderPasses = {}), xV.renderPasses[ZV] || (xV.renderPasses[ZV] = {}), vV = xV.renderPasses[ZV]);
        const kV = xV.interleavedBuffers[ZV];
        let bV = !kV || kV.data !== yV;
        for (let nV = 0; !bV && nV < pV.length; nV++) bV = !vV[pV[nV]];
        if (!bV) return void kV.buffer.updateDirectly(yV, 0);
        kV?.buffer.dispose();
        const EV = new nV.d(this.sk(), yV, !0, JV, !1, !0);
        for (let nV = 0; nV < pV.length; nV++) {
          const VV = pV[nV],
            eV = EV.createVertexBuffer(VV, QV[nV], xV.strides[VV]);
          eV.hashCode += eV.byteOffset * 2 ** 24, vV[VV] = eV
        }
        xV.interleavedBuffers[ZV] = {
          buffer: EV,
          data: yV
        }, this._invalidateInstanceVertexArrayObject()
      }, yV.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const VV in this._userInstancedBuffersStorage.vertexArrayObjects) this.sk().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[VV]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, yV.b.prototype._disposeInstanceSpecificData = function() {
        for (const eV in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[eV].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const eV in this.sC) this._userInstancedBuffersStorage.vertexBuffers[eV] && this._userInstancedBuffersStorage.vertexBuffers[eV].dispose();
        const VV = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (VV) {
          for (const eV in VV) VV[eV].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.sC = {}
      }, (0, wV.d)("BABYLON.InstancedMesh", ZV))
    }
  },
  41664: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => IV,
      d: () => OV,
      h: () => fV
    });
    var JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV = xV(38296),
      jV = xV(41341),
      qV = xV(41300),
      tV = xV(39867),
      FV = xV(41286),
      TV = xV(41671),
      PV = xV(41478),
      AV = xV(38269),
      NV = xV(38389),
      XV = xV(41486),
      MV = xV(41394),
      zV = xV(41674),
      GV = xV(41677),
      WV = xV(41692),
      RV = xV(41559),
      gV = xV(41553),
      DV = xV(41637),
      iV = xV(41704),
      CV = xV(41681),
      aV = xV(41279),
      oV = xV(39870),
      cV = xV(38318),
      hV = xV(41138),
      lV = xV(41429);
    class LV {
      constructor(VV, eV) {
        this.distanceOrScreenCoverage = VV, this.mesh = eV
      }
    }
    class fV {}
    class mV {
      constructor() {
        this.batchCache = new HV(this), this.batchCacheReplacementModeInFrozenMode = new HV(this), this.instancesBufferSize = 2048
      }
    }
    class KV {
      constructor() {
        this.renderPasses = {}
      }
    }
    class HV {
      constructor(VV) {
        this.parent = VV, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class uV {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class sV {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const SV = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class IV extends WV.c {
      static _GetDefaultSideOrientation(VV) {
        return VV || IV.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(VV) {
        this._internalMeshDataInfo._useLODScreenCoverage = VV, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(VV) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== VV && (VV && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(MV.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(MV.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = VV, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new BV.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new BV.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new BV.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new BV.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new BV.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(VV) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(VV)
      }
      get NUV() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(VV) {
        this._internalMeshDataInfo._forcedInstanceCount = VV
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(VV) {
        this._internalMeshDataInfo._sideOrientation = VV, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === VV || !this._scene.useRightHandedSystem && 0 === VV
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(VV) {
        this.sideOrientation = VV, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(VV) {
        this._internalMeshDataInfo._overrideRenderingFillMode = VV
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(VV) {
        VV && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (VV.sideOrientation = null), this._setMaterial(VV)
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
      set isUnIndexed(VV) {
        this._unIndexed !== VV && (this._unIndexed = VV, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const VV = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return VV ? VV.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const VV = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return VV ? VV.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(VV) {
        this._instanceDataStorage.manualUpdate = VV
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(VV) {
        this._instanceDataStorage.previousManualUpdate = VV
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(VV) {
        this._instanceDataStorage.forceMatrixUpdates = VV
      }
      _copySource(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const YV = this.dD();
        if (VV._geometry && VV._geometry.applyToMesh(this), tV.d.DeepCopy(VV, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "NUV", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "JC", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "EQV", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = VV, YV.useClonedMeshMap && (VV._internalMeshDataInfo.meshMap || (VV._internalMeshDataInfo.meshMap = {}), VV._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = VV._originalBuilderSideOrientation, this._creationDataStorage = VV._creationDataStorage, VV._ranges) {
          const eV = VV._ranges;
          for (const VV in eV) Object.prototype.hasOwnProperty.call(eV, VV) && eV[VV] && this.createAnimationRange(VV, eV[VV].from, eV[VV].to)
        }
        if (VV.metadata && VV.metadata.clone ? this.metadata = VV.metadata.clone() : this.metadata = VV.metadata, this._internalMetadata = VV._internalMetadata, this.meshBlendingTag = VV.meshBlendingTag, FV.d && FV.d.HasTags(VV) && FV.d.AddTagsTo(this, FV.d.GetTags(VV, !0)), this.pW(VV.isEnabled(!1)), this.parent = VV.parent, this.setPivotMatrix(VV.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + VV.id, this.material = VV.material, !eV) {
          const YV = VV.getDescendants(!0);
          for (let VV = 0; VV < YV.length; VV++) {
            const UV = YV[VV];
            UV._isMesh ? (SV.parent = this, SV.doNotCloneChildren = eV, SV.clonePhysicsImpostor = xV, SV.cloneThinInstances = JV, UV.clone(this.name + "." + UV.name, SV)) : UV.clone && UV.clone(this.name + "." + UV.name, this)
          }
        }
        if (VV.morphTargetManager && (this.morphTargetManager = VV.morphTargetManager), (0, hV.e)(YV.getPhysicsEngine)) {
          const eV = YV.getPhysicsEngine();
          if (xV && eV)
            if (1 === eV.getPluginVersion()) {
              const xV = eV.getImpostorForPhysicsObject(VV);
              xV && (this.physicsImpostor = xV.clone(this))
            } else 2 === eV.getPluginVersion() && VV.physicsBody && VV.physicsBody.clone(this)
        }
        for (let UV = 0; UV < YV.lT.length; UV++) {
          const eV = YV.lT[UV];
          eV.emitter === VV && eV.clone(eV.name, this)
        }
        if (this.skeleton = VV.skeleton, JV && (VV._thinInstanceDataStorage.matrixData ? (this.beV("matrix", new Float32Array(VV._thinInstanceDataStorage.matrixData), 16, !VV._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = VV._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = VV._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = VV._thinInstanceDataStorage.matrixBufferSize, VV._userThinInstanceBuffersStorage)) {
          const eV = VV._userThinInstanceBuffersStorage;
          for (const VV in eV.data) this.beV(VV, new Float32Array(eV.data[VV]), eV.strides[VV], !eV.vertexBuffers?.[VV]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[VV] = eV.sizes[VV]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(VV) {
        let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          UV = arguments.length > 4 ? arguments[4] : void 0,
          yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(VV, xV), this._internalMeshDataInfo = new sV, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new uV, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = IV.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, xV = this.dD(), this._instanceDataStorage = new KV, this._instanceDataStorage.engine = xV.sk(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new mV), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (VV, eV, xV) => {
          VV && xV && (this._uniformBuffer ? this.transferToEffect(eV) : xV.bindOnlyWorldMatrix(eV))
        };
        let pV = !1;
        if (JV && void 0 === JV._addToSceneRootNodes) {
          const VV = JV;
          eV = VV.parent ?? null, YV = VV.source ?? null, UV = VV.doNotCloneChildren ?? !1, yV = VV.clonePhysicsImpostor ?? !0, pV = VV.cloneThinInstances ?? !1
        } else eV = JV;
        YV && this._copySource(YV, UV, yV, pV), null !== eV && (this.parent = eV), this._instanceDataStorage.hardwareInstancedRendering = this.sk().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = VV => {
          VV.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new BV.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), YV && YV.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = 0 === this.getTotalVertices() || eV && eV.doNotInstantiate && (!0 === eV.doNotInstantiate || eV.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), VV || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        JV.parent = VV || this.parent, JV.position = this.position.clone(), JV.WZ = this.WZ.clone(), this.rotationQuaternion ? JV.rotationQuaternion = this.rotationQuaternion.clone() : JV.rotation = this.rotation.clone(), xV && xV(this, JV);
        for (const YV of this.getChildTransformNodes(!0)) "InstancedMesh" === YV.getClassName() && "Mesh" === JV.getClassName() && YV.XUV === this ? YV.instantiateHierarchy(JV, {
          doNotInstantiate: eV && eV.doNotInstantiate || !1,
          newSourcedMesh: JV
        }, xV) : YV.instantiateHierarchy(JV, eV, xV);
        return JV
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(VV) {
        let eV = super.toString(VV);
        if (eV += ", n vertices: " + this.getTotalVertices(), eV += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let xV = 0; xV < this.animations.length; xV++) eV += ", animation[0]: " + this.animations[xV].toString(VV);
        if (VV)
          if (this._geometry) {
            const VV = this.RYV(),
              xV = this.getVerticesData(MV.j.PositionKind);
            xV && VV && (eV += ", flat shading: " + (xV.length / 3 === VV.length ? "YES" : "NO"))
          } else eV += ", flat shading: UNKNOWN";
        return eV
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const VV of this.instances) VV._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const VV = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((eV, xV) => eV.distanceOrScreenCoverage < xV.distanceOrScreenCoverage ? VV : eV.distanceOrScreenCoverage > xV.distanceOrScreenCoverage ? -VV : 0))
      }
      addLODLevel(VV, eV) {
        if (eV && eV._masterMesh) return oV.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const xV = new LV(VV, eV);
        return this._internalMeshDataInfo._LODLevels.push(xV), eV && (eV._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(VV) {
        const eV = this._internalMeshDataInfo;
        for (let xV = 0; xV < eV._LODLevels.length; xV++) {
          const JV = eV._LODLevels[xV];
          if (JV.distanceOrScreenCoverage === VV) return JV.mesh
        }
        return null
      }
      removeLODLevel(VV) {
        const eV = this._internalMeshDataInfo;
        for (let xV = 0; xV < eV._LODLevels.length; xV++) eV._LODLevels[xV].mesh === VV && (eV._LODLevels.splice(xV, 1), VV && (VV._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(VV, eV) {
        const xV = this._internalMeshDataInfo;
        if (!xV._LODLevels || 0 === xV._LODLevels.length) return this;
        const JV = eV || this.qL().xUV,
          YV = VV.mode === PV.c.ORTHOGRAPHIC_CAMERA ? VV.minZ : JV.centerWorld.subtract(VV.globalPosition).length();
        let UV = YV,
          yV = 1;
        if (xV._useLODScreenCoverage) {
          const eV = VV.screenArea;
          let xV = JV.radiusWorld * VV.minZ / YV;
          xV = xV * xV * Math.PI, UV = xV / eV, yV = -1
        }
        if (yV * xV._LODLevels[xV._LODLevels.length - 1].distanceOrScreenCoverage > yV * UV) return this.onLODLevelSelection && this.onLODLevelSelection(UV, this, this), this;
        for (let pV = 0; pV < xV._LODLevels.length; pV++) {
          const VV = xV._LODLevels[pV];
          if (yV * VV.distanceOrScreenCoverage < yV * UV) {
            if (VV.mesh) {
              if (4 === VV.mesh.delayLoadState) return VV.mesh._checkDelayState(), this;
              if (2 === VV.mesh.delayLoadState) return this;
              VV.mesh._preActivate(), VV.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(UV, this, VV.mesh), VV.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(UV, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(VV, eV, xV, JV) {
        if (!this._geometry) return null;
        let YV = JV ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[VV]?.getFloatData(this.instances.length + 1, xV || eV && 1 !== this._geometry.meshes.length);
        return YV || (YV = this._geometry.getVerticesData(VV, eV, xV)), YV
      }
      copyVerticesData(VV, eV) {
        this._geometry && this._geometry.copyVerticesData(VV, eV)
      }
      getVertexBuffer(VV, eV) {
        return this._geometry ? (eV ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[VV]) ?? this._geometry.getVertexBuffer(VV) : null
      }
      isVerticesDataPresent(VV, eV) {
        return this._geometry ? !eV && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[VV] || this._geometry.isVerticesDataPresent(VV) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(VV)
      }
      isVertexBufferUpdatable(VV, eV) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(VV);
        if (!eV) {
          const eV = this._userInstancedBuffersStorage?.vertexBuffers[VV];
          if (eV) return eV.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(VV)
      }
      getVerticesDataKinds(VV) {
        if (!this._geometry) {
          const VV = [];
          if (this._delayInfo)
            for (const eV of this._delayInfo) VV.push(eV);
          return VV
        }
        const eV = this._geometry.getVerticesDataKinds();
        if (!VV && this._userInstancedBuffersStorage)
          for (const xV in this._userInstancedBuffersStorage.vertexBuffers) - 1 === eV.indexOf(xV) && eV.push(xV);
        return eV
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      RYV(VV, eV) {
        return this._geometry ? this._geometry.RYV(VV, eV) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(VV)) return !1;
        if (!this.hT || 0 === this.hT.length) return !0;
        if (!VV) return !0;
        const xV = this.sk(),
          JV = this.dD(),
          YV = eV || xV.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const UV = this.material || JV.defaultMaterial;
        if (UV)
          if (UV._storeEffectOnSubMeshes)
            for (const pV of this.hT) {
              const VV = pV.eb();
              if (VV)
                if (VV._storeEffectOnSubMeshes) {
                  if (!VV.isReadyForSubMesh(this, pV, YV)) return !1
                } else if (!VV.isReady(this, YV)) return !1
            } else if (!UV.isReady(this, YV)) return !1;
        const yV = xV.currentRenderPassId;
        for (const pV of this.lightSources) {
          const VV = pV.getShadowGenerators();
          if (!VV) continue;
          const eV = VV.values();
          for (let JV = eV.next(); !0 !== JV.done; JV = eV.next()) {
            const VV = JV.value;
            if (VV && (!VV.getShadowMap()?.renderList || VV.getShadowMap()?.renderList && -1 !== VV.getShadowMap()?.renderList?.indexOf(this))) {
              const eV = VV.getShadowMap().renderPassIds ?? [xV.currentRenderPassId];
              for (let JV = 0; JV < eV.length; ++JV) {
                xV.currentRenderPassId = eV[JV];
                for (const eV of this.hT)
                  if (!VV.isReady(eV, YV, eV.eb()?.needAlphaBlendingForMesh(this) ?? !1)) return xV.currentRenderPassId = yV, !1
              }
              xV.currentRenderPassId = yV
            }
          }
        }
        for (const pV of this._internalMeshDataInfo._LODLevels)
          if (pV.mesh && !pV.mesh.isReady(YV)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      xb() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(VV) {
        this._instanceDataStorage.overridenInstanceCount = VV
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const VV = this._instanceDataStorage.engine.currentRenderPassId;
        let eV = this._instanceDataStorage.renderPasses[VV];
        return eV || (eV = new mV, this._instanceDataStorage.renderPasses[VV] = eV), eV
      }
      _preActivate() {
        const VV = this._internalMeshDataInfo,
          eV = this.dD().getRenderId();
        return VV._preActivateId === eV || (VV._preActivateId = eV, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(VV) {
        const eV = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return eV.visibleInstances && (eV.visibleInstances.intermediateDefaultRenderId = VV), this
      }
      _registerInstanceForRenderId(VV, eV) {
        const xV = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return xV.visibleInstances || (xV.visibleInstances = {
          defaultRenderId: eV,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), xV.visibleInstances[eV] || (void 0 === xV.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete xV.visibleInstances[xV.previousRenderId], xV.previousRenderId = eV, xV.visibleInstances[eV] = new Array), xV.visibleInstances[eV].push(VV), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Vb || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let VV, eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qL().isLocked) return this;
        VV = "object" === typeof eV ? eV : {
          applySkeleton: eV,
          applyMorph: xV
        };
        const JV = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(VV, null, MV.j.PositionKind), JV), this
      }
      _createGlobalSubMesh(VV) {
        const eV = this.getTotalVertices();
        if (!eV || !this.RYV()) return null;
        if (this.hT && this.hT.length > 0) {
          const xV = this.RYV();
          if (!xV) return null;
          const JV = xV.length;
          let YV = !1;
          if (VV) YV = !0;
          else
            for (const VV of this.hT) {
              if (VV.indexStart + VV.indexCount > JV) {
                YV = !0;
                break
              }
              if (VV.verticesStart + VV.verticesCount > eV) {
                YV = !0;
                break
              }
            }
          if (!YV) return this.hT[0]
        }
        return this.releaseSubMeshes(), new RV.c(0, 0, eV, 0, this.getTotalIndices() || (this.isUnIndexed ? eV : 0), this)
      }
      subdivide(VV) {
        if (VV < 1) return;
        const eV = this.getTotalIndices();
        let xV = eV / VV | 0,
          JV = 0;
        for (; xV % 3 !== 0;) xV++;
        this.releaseSubMeshes();
        for (let YV = 0; YV < VV && !(JV >= eV); YV++) RV.c.CreateFromIndices(0, JV, JV + xV >= eV ? eV - JV : xV, this, void 0, !1), JV += xV;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(VV, eV, xV, JV);
        else {
          const JV = new zV.c;
          JV.set(eV, VV);
          const YV = this.dD();
          new GV.c(GV.c.RandomId(), YV, JV, xV, this)
        }
        return this
      }
      removeVerticesData(VV) {
        this._geometry && this._geometry.removeVerticesData(VV)
      }
      markVerticesDataAsUpdatable(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this.getVertexBuffer(VV);
        xV && xV.isUpdatable() !== eV && this.setVerticesData(VV, this.getVerticesData(VV), eV)
      }
      setVerticesBuffer(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = GV.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(VV, xV, eV), this
      }
      updateVerticesData(VV, eV, xV, JV) {
        return this._geometry ? (JV ? (this.makeGeometryUnique(), this.updateVerticesData(VV, eV, xV, !1)) : this._geometry.updateVerticesData(VV, eV, xV), this) : this
      }
      updateMeshPositions(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this.getVerticesData(MV.j.PositionKind);
        if (!xV) return this;
        if (VV(xV), this.updateVerticesData(MV.j.PositionKind, xV, !1, !1), eV) {
          const VV = this.RYV(),
            eV = this.getVerticesData(MV.j.NormalKind);
          if (!eV) return this;
          zV.c.ComputeNormals(xV, VV, eV), this.updateVerticesData(MV.j.NormalKind, eV, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const VV = this._geometry,
          eV = this._geometry.copy(GV.c.RandomId());
        return VV.releaseForMesh(this, !0), eV.applyToMesh(this), this
      }
      setIndexBuffer(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          YV = this._geometry;
        YV || (YV = new GV.c(GV.c.RandomId(), this.dD(), void 0, void 0, this)), YV.setIndexBuffer(VV, eV, xV, JV)
      }
      setIndices(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(VV, eV, xV, JV);
        else {
          const JV = new zV.c;
          JV.indices = VV;
          const YV = this.dD();
          new GV.c(GV.c.RandomId(), YV, JV, xV, this, eV)
        }
        return this
      }
      updateIndices(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(VV, eV, xV), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(VV, eV, xV) {
        let JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const YV = this.dD().sk();
        let UV;
        if (this._unIndexed)
          if (this._getRenderingFillMode(xV) === gV.e.WireFrameFillMode) UV = VV._getLinesIndexBuffer(this.RYV(), YV);
          else UV = null;
        else switch (this._getRenderingFillMode(xV)) {
          case gV.e.PointFillMode:
            UV = null;
            break;
          case gV.e.WireFrameFillMode:
            UV = VV._getLinesIndexBuffer(this.RYV(), YV);
            break;
          default:
          case gV.e.TriangleFillMode:
            UV = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(eV, UV, JV)
      }
      _bindDirect(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(VV), xV && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const VV = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const eV in VV) this._userInstancedBuffersStorage.vertexBuffers[eV] = VV[eV]
          }
          this._geometry._bind(VV, eV, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(VV, eV);
        return this
      }
      _draw(VV, eV, xV) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const JV = this.dD().sk(),
          YV = JV._currentMaterialContext,
          UV = YV && YV.useVertexPulling;
        return this._unIndexed && eV !== gV.e.WireFrameFillMode || eV == gV.e.PointFillMode ? JV.drawArraysType(eV, VV.verticesStart, VV.verticesCount, this.forcedInstanceCount || xV) : eV == gV.e.WireFrameFillMode ? JV.drawElementsType(eV, 0, VV._linesIndexCount, this.forcedInstanceCount || xV) : UV ? JV.drawArraysType(eV, VV.indexStart, VV.indexCount, this.forcedInstanceCount || xV) : JV.drawElementsType(eV, VV.indexStart, VV.indexCount, this.forcedInstanceCount || xV), this
      }
      registerBeforeRender(VV) {
        return this.onBeforeRenderObservable.add(VV), this
      }
      unregisterBeforeRender(VV) {
        return this.onBeforeRenderObservable.removeCallback(VV), this
      }
      registerAfterRender(VV) {
        return this.onAfterRenderObservable.add(VV), this
      }
      unregisterAfterRender(VV) {
        return this.onAfterRenderObservable.removeCallback(VV), this
      }
      _getInstancesRenderList(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (eV) return xV.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[VV] = !1, xV.batchCacheReplacementModeInFrozenMode.renderSelf[VV] = !0, xV.batchCacheReplacementModeInFrozenMode;
          if (xV.previousBatch) return xV.previousBatch
        }
        const JV = this.dD(),
          YV = JV._isInIntermediateRendering(),
          UV = YV ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          yV = xV.batchCache;
        if (yV.mustReturn = !1, yV.renderSelf[VV] = eV || !UV && this.isEnabled() && this.isVisible, yV.visibleInstances[VV] = null, xV.visibleInstances && !eV) {
          const eV = xV.visibleInstances,
            UV = JV.getRenderId(),
            pV = YV ? eV.intermediateDefaultRenderId : eV.defaultRenderId;
          yV.visibleInstances[VV] = eV[UV], !yV.visibleInstances[VV] && pV && (yV.visibleInstances[VV] = eV[pV])
        }
        return yV.hardwareInstancedRendering[VV] = !eV && this._instanceDataStorage.hardwareInstancedRendering && null !== yV.visibleInstances[VV] && void 0 !== yV.visibleInstances[VV], xV.previousBatch = yV, yV
      }
      _updateInstancedBuffers(VV, eV, xV, JV, YV, UV) {
        const yV = eV.visibleInstances[VV._id],
          pV = yV ? yV.length : 0,
          QV = eV.parent,
          nV = this._instanceDataStorage;
        let wV = QV.instancesBuffer,
          ZV = QV.instancesPreviousBuffer,
          vV = 0,
          rV = 0;
        const kV = eV.renderSelf[VV._id],
          bV = this._scene.floatingOriginOffset,
          EV = !wV || xV !== QV.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !QV.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || nV.isFrozen && !EV) rV = (kV ? 1 : 0) + pV;
        else {
          const eV = this.getWorldMatrix();
          if (kV) {
            this._scene.needsPreviousWorldMatrices && (nV.masterMeshPreviousWorldMatrix ? (nV.masterMeshPreviousWorldMatrix.copyToArray(QV.instancesPreviousData, vV), nV.masterMeshPreviousWorldMatrix.iG(eV)) : (nV.masterMeshPreviousWorldMatrix = eV.clone(), nV.masterMeshPreviousWorldMatrix.copyToArray(QV.instancesPreviousData, vV))), eV.copyToArray(QV.instancesData, vV);
            const VV = eV.WYV();
            QV.instancesData[vV + 12] = VV[12] - bV.x, QV.instancesData[vV + 13] = VV[13] - bV.y, QV.instancesData[vV + 14] = VV[14] - bV.z, vV += 16, rV++
          }
          if (yV) {
            if (IV.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && VV.eb()?.needAlphaBlendingForMesh(VV.getRenderingMesh())) {
              const VV = this._scene.activeCamera.globalPosition;
              for (let eV = 0; eV < yV.length; eV++) {
                const xV = yV[eV];
                xV._distanceToCamera = AV.o.Distance(xV.qL().xUV.centerWorld, VV)
              }
              yV.sort(((VV, eV) => VV._distanceToCamera > eV._distanceToCamera ? -1 : VV._distanceToCamera < eV._distanceToCamera ? 1 : 0))
            }
            for (let VV = 0; VV < yV.length; VV++) {
              const eV = yV[VV],
                xV = eV.getWorldMatrix();
              xV.copyToArray(QV.instancesData, vV), this._scene.needsPreviousWorldMatrices && (eV._previousWorldMatrix ? (eV._previousWorldMatrix.copyToArray(QV.instancesPreviousData, vV), eV._previousWorldMatrix.iG(xV)) : (eV._previousWorldMatrix = xV.clone(), eV._previousWorldMatrix.copyToArray(QV.instancesPreviousData, vV)));
              const JV = xV.WYV();
              QV.instancesData[vV + 12] = JV[12] - bV.x, QV.instancesData[vV + 13] = JV[13] - bV.y, QV.instancesData[vV + 14] = JV[14] - bV.z, vV += 16, rV++
            }
          }
        }
        if (EV) {
          let VV;
          if (wV && wV.dispose(), ZV && ZV.dispose(), wV = new MV.d(JV, QV.instancesData, !0, 16, !1, !0), QV.instancesBuffer = wV, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.sk().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) VV = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const eV = this._instanceDataStorage.engine.currentRenderPassId;
            VV = this._userInstancedBuffersStorage.renderPasses[eV], VV || (this._userInstancedBuffersStorage.renderPasses[eV] = VV = {})
          }
          VV.world0 = wV.createVertexBuffer("world0", 0, 4), VV.world1 = wV.createVertexBuffer("world1", 4, 4), VV.world2 = wV.createVertexBuffer("world2", 8, 4), VV.world3 = wV.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (ZV = new MV.d(JV, QV.instancesPreviousData, !0, 16, !1, !0), QV.instancesPreviousBuffer = ZV, VV.previousWorld0 = ZV.createVertexBuffer("previousWorld0", 0, 4), VV.previousWorld1 = ZV.createVertexBuffer("previousWorld1", 4, 4), VV.previousWorld2 = ZV.createVertexBuffer("previousWorld2", 8, 4), VV.previousWorld3 = ZV.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (wV.updateDirectly(QV.instancesData, 0, rV), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || ZV.updateDirectly(QV.instancesPreviousData, 0, rV));
        this._processInstancedBuffers(yV, kV), UV && void 0 !== YV && (this.dD()._activeIndices.addCount(VV.indexCount * rV, !1), JV._currentDrawContext && (JV._currentDrawContext.useInstancing = !0), this._bind(VV, UV, YV), this._draw(VV, YV, rV)), !this._scene.needsPreviousWorldMatrices || EV || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || ZV.updateDirectly(QV.instancesData, 0, rV)
      }
      _renderWithInstances(VV, eV, xV, JV, YV) {
        const UV = xV.visibleInstances[VV._id],
          yV = UV ? UV.length : 0,
          pV = xV.parent,
          QV = pV.instancesBufferSize,
          nV = 16 * (yV + 1) * 4;
        for (; pV.instancesBufferSize < nV;) pV.instancesBufferSize *= 2;
        return pV.instancesData && QV == pV.instancesBufferSize || (pV.instancesData = new Float32Array(pV.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !pV.instancesPreviousData || QV != pV.instancesBufferSize) && (pV.instancesPreviousData = new Float32Array(pV.instancesBufferSize / 4)), this._updateInstancedBuffers(VV, xV, QV, YV, eV, JV), YV.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(VV, eV, xV, JV) {
        const YV = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.dD()._activeIndices.addCount(VV.indexCount * YV, !1), JV._currentDrawContext && (JV._currentDrawContext.useInstancing = !0), this._bind(VV, xV, eV), this._draw(VV, eV, YV), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, YV) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), JV.unbindInstanceAttributes()
      }
      _processInstancedBuffers(VV, eV) {}
      _processRendering(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = this.dD(),
          nV = QV.sk();
        if (JV = this._getRenderingFillMode(JV), UV && eV.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(eV, JV, xV, nV), this;
        if (UV) this._renderWithInstances(eV, JV, YV, xV, nV);
        else {
          nV._currentDrawContext && (nV._currentDrawContext.useInstancing = !1);
          let xV = 0;
          YV.renderSelf[eV._id] && (yV && yV(!1, VV.getWorldMatrix(), pV), xV++, this._draw(eV, JV, this._instanceDataStorage.overridenInstanceCount));
          const UV = YV.visibleInstances[eV._id];
          if (UV) {
            const VV = UV.length;
            xV += VV;
            for (let xV = 0; xV < VV; xV++) {
              const VV = UV[xV].getWorldMatrix();
              yV && yV(!0, VV, pV), this._draw(eV, JV)
            }
          }
          QV._activeIndices.addCount(eV.indexCount * xV, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        VV?.instancesBuffer && (eV && VV.instancesBuffer.dispose(), VV.instancesBuffer = null), VV?.instancesPreviousBuffer && (eV && VV.instancesPreviousBuffer.dispose(), VV.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const eV in this._instanceDataStorage.renderPasses) {
          const xV = this._instanceDataStorage.renderPasses[eV];
          this._disposeInstanceDataStorageRenderPass(xV, VV)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, VV), this._userInstancedBuffersStorage) {
          for (const eV in this._userInstancedBuffersStorage.vertexBuffers) {
            const xV = this._userInstancedBuffersStorage.vertexBuffers[eV];
            xV && (VV && xV.dispose(), this._userInstancedBuffersStorage.vertexBuffers[eV] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(VV)
      }
      _releaseRenderPassId(VV) {
        const eV = this._instanceDataStorage.renderPasses[VV];
        if (eV && (this._disposeInstanceDataStorageRenderPass(eV, !0), delete this._instanceDataStorage.renderPasses[VV]), this._userInstancedBuffersStorage?.renderPasses) {
          const eV = this._userInstancedBuffersStorage.renderPasses[VV];
          if (eV)
            for (const VV in eV) eV[VV]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[VV]
        }
        const xV = this._userInstancedBuffersStorage?.interleavedBuffers;
        xV?.[VV] && (xV[VV].buffer.dispose(), delete xV[VV])
      }
      _freeze() {
        if (this.hT) {
          for (let VV = 0; VV < this.hT.length; VV++) this._getInstancesRenderList(VV);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const VV in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[VV].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const UV = this._scene.sk(),
          yV = UV.currentRenderPassId;
        if (void 0 !== VV && (UV.currentRenderPassId = VV), JV)(!YV || YV && JV.isInFrustum(this._scene._frustumPlanes)) && this.render(JV, !!eV, xV);
        else
          for (let pV = 0; pV < this.hT.length; pV++) {
            const VV = this.hT[pV];
            (!YV || YV && VV.isInFrustum(this._scene._frustumPlanes)) && this.render(VV, !!eV, xV)
          }
        return void 0 !== VV && (UV.currentRenderPassId = yV), this
      }
      directRender() {
        if (!this.hT) return this;
        for (const VV of this.hT) this.render(VV, !1);
        return this
      }
      render(VV, eV, xV) {
        const JV = this.dD(),
          YV = JV.sk();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const UV = JV.activeCameras?.length ?? 0,
          yV = UV > 1 && JV.activeCamera === JV.activeCameras[0] || UV <= 1,
          pV = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== YV.currentRenderPassId;
        if (yV && this._checkOcclusionQuery(pV) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const QV = this._getInstancesRenderList(VV._id, !!xV);
        if (QV.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let nV = 0,
          wV = null;
        this.ignoreCameraMaxZ && JV.activeCamera && !JV._isInIntermediateRendering() && (nV = JV.activeCamera.maxZ, wV = JV.activeCamera, JV.activeCamera.maxZ = 0, JV.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const ZV = VV.getRenderingMesh(),
          vV = QV.hardwareInstancedRendering[VV._id] || ZV.hasThinInstances || !!this._userInstancedBuffersStorage && !VV.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          rV = this._instanceDataStorage,
          kV = VV.eb();
        if (!kV) return wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), this;
        if (rV.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === kV) {
          if (kV._storeEffectOnSubMeshes && !VV._drawWrapper?._wasPreviouslyReady || !kV._storeEffectOnSubMeshes && !kV._getDrawWrapper()._wasPreviouslyReady) return wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), this
        } else {
          if (kV._storeEffectOnSubMeshes) {
            if (!kV.isReadyForSubMesh(this, VV, vV)) return wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), this
          } else if (!kV.isReady(this, vV)) return wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = kV
        }
        if (eV) {
          const VV = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === VV.alphaModes.length) YV.setAlphaMode(VV.alphaMode);
          else
            for (let eV = 0; eV < VV.alphaModes.length; eV++) {
              const xV = VV.alphaModes[eV];
              YV.setAlphaMode(void 0 !== xV ? xV : 2, !1, eV)
            }
        }
        let bV;
        bV = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? VV._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const EV = bV?.effect ?? null;
        for (let PV = 0, AV = JV._beforeRenderingMeshStage; PV < AV.length; PV++) {
          AV[PV].action(this, VV, QV, EV)
        }
        if (!bV || !EV) return wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), this;
        const BV = xV || this;
        let jV;
        if (!rV.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const VV = BV._getWorldMatrixDeterminant();
          jV = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), VV < 0 && (jV = jV === gV.e.ClockWiseSideOrientation ? gV.e.CounterClockWiseSideOrientation : gV.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = jV
        }
        const qV = this._internalMeshDataInfo._effectiveMaterial._preBind(bV, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && YV.setDepthWrite(!0);
        const tV = this._internalMeshDataInfo._effectiveMaterial,
          FV = tV.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), vV || this._bind(VV, EV, FV, !1);
        const TV = BV.getWorldMatrix();
        tV._storeEffectOnSubMeshes ? tV.bindForSubMesh(TV, this, VV) : tV.bind(TV, this);
        try {
          DV.d._BindAttachmentsForEffect(YV, EV) && (!tV.backFaceCulling && tV.separateCullingPass && (YV.setState(!0, tV.zOffset, !1, !qV, tV.cullBackFaces, tV.stencil, tV.zOffsetUnits), this._processRendering(this, VV, EV, FV, QV, vV, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), YV.setState(!0, tV.zOffset, !1, qV, tV.cullBackFaces, tV.stencil, tV.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(VV)), this._processRendering(this, VV, EV, FV, QV, vV, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          DV.d._RestoreAttachments(YV)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let PV = 0, AV = JV._afterRenderingMeshStage; PV < AV.length; PV++) {
          AV[PV].action(this, VV, QV, EV)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), wV && (wV.maxZ = nV, JV.updateTransformMatrix(!0)), 2 !== JV.performancePriority || rV.isFrozen || this._freeze(), this
      }
      _renderRunFollower(VV, eV) {
        const xV = this._scene,
          JV = xV._engine;
        if (JV.isWebGPU || VV._mesh !== this || 0 !== this.instances.length || this.render !== IV.prototype.render) return !1;
        const YV = VV.eb();
        if (!YV || YV !== xV._cachedMaterial || void 0 === YV._canBindRunFollower) return !1;
        const UV = VV._drawWrapper,
          yV = UV?.effect;
        if (!yV || yV !== xV._cachedEffect || this.visibility !== xV._cachedVisibility || UV._forceRebindOnNextCall) return !1;
        const pV = this.hasThinInstances;
        if (!pV && this._userInstancedBuffersStorage) return !1;
        if (!UV._wasPreviouslyReady || UV._wasPreviouslyUsingInstances !== pV) return !1;
        const QV = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || xV._isInIntermediateRendering() || 0 !== xV._beforeRenderingMeshStage.length || 0 !== xV._afterRenderingMeshStage.length || QV._onBeforeRenderObservable?.hasObservers() || QV._onBeforeBindObservable?.hasObservers() || QV._onAfterRenderObservable?.hasObservers()) return !1;
        const nV = this.occlusionType;
        if (void 0 !== nV && nV !== WV.c.OCCLUSION_TYPE_NONE || !YV._canBindRunFollower(xV, JV, this, VV, yV)) return !1;
        const wV = this._internalAbstractMeshDataInfo,
          ZV = wV._isActiveIntermediate;
        ZV ? wV._isActiveIntermediate = !1 : wV._isActive = !1;
        const vV = xV.activeCameras?.length ?? 0;
        (vV > 1 && xV.activeCamera === xV.activeCameras[0] || vV <= 1) && this._checkOcclusionQuery(!1);
        const rV = this._getInstancesRenderList(VV._id);
        if (rV.mustReturn) return !0;
        if (!pV && !rV.renderSelf[VV._id]) return ZV ? wV._isActiveIntermediate = !0 : wV._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (QV._effectiveMaterial = YV, eV)
          if (1 === YV.alphaModes.length) JV.setAlphaMode(YV.alphaMode);
          else
            for (let bV = 0; bV < YV.alphaModes.length; bV++) {
              const VV = YV.alphaModes[bV];
              JV.setAlphaMode(void 0 !== VV ? VV : 2, !1, bV)
            }
        if (YV.backFaceCulling || null !== YV.sideOrientation || YV._twoSidedLighting) {
          const VV = this._getWorldMatrixDeterminant();
          let eV = YV._getEffectiveOrientation(this);
          VV < 0 && (eV = eV === gV.e.ClockWiseSideOrientation ? gV.e.CounterClockWiseSideOrientation : gV.e.ClockWiseSideOrientation), QV._effectiveSideOrientation = eV
        }
        YV._preBind(UV, QV._effectiveSideOrientation), YV.forceDepthWrite && JV.setDepthWrite(!0);
        const kV = YV.fillMode;
        return pV || this._bind(VV, yV, kV, !1), YV._bindRunFollower(this.getWorldMatrix(), this, VV, yV), this._processRendering(this, VV, yV, kV, rV, pV, this._onBeforeDraw, YV), YV.unbind(), 2 === xV.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(MV.j.MatricesWeightsKind) && (this.isVerticesDataPresent(MV.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const VV = this.getVerticesData(MV.j.MatricesWeightsKind),
          eV = VV.length;
        for (let xV = 0; xV < eV; xV += 4) {
          const eV = VV[xV] + VV[xV + 1] + VV[xV + 2] + VV[xV + 3];
          if (0 === eV) VV[xV] = 1;
          else {
            const JV = 1 / eV;
            VV[xV] *= JV, VV[xV + 1] *= JV, VV[xV + 2] *= JV, VV[xV + 3] *= JV
          }
        }
        this.setVerticesData(MV.j.MatricesWeightsKind, VV)
      }
      _normalizeSkinWeightsAndExtra() {
        const VV = this.getVerticesData(MV.j.MatricesWeightsExtraKind),
          eV = this.getVerticesData(MV.j.MatricesWeightsKind),
          xV = eV.length;
        for (let JV = 0; JV < xV; JV += 4) {
          let xV = eV[JV] + eV[JV + 1] + eV[JV + 2] + eV[JV + 3];
          if (xV += VV[JV] + VV[JV + 1] + VV[JV + 2] + VV[JV + 3], 0 === xV) eV[JV] = 1;
          else {
            const YV = 1 / xV;
            eV[JV] *= YV, eV[JV + 1] *= YV, eV[JV + 2] *= YV, eV[JV + 3] *= YV, VV[JV] *= YV, VV[JV + 1] *= YV, VV[JV + 2] *= YV, VV[JV + 3] *= YV
          }
        }
        this.setVerticesData(MV.j.MatricesWeightsKind, eV), this.setVerticesData(MV.j.MatricesWeightsKind, VV)
      }
      validateSkinning() {
        const VV = this.getVerticesData(MV.j.MatricesWeightsExtraKind),
          eV = this.getVerticesData(MV.j.MatricesWeightsKind);
        if (null === eV || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          EZ: "not skinned"
        };
        const xV = eV.length;
        let JV = 0,
          YV = 0,
          UV = 0,
          yV = 0;
        const pV = null === VV ? 4 : 8,
          QV = [];
        for (let rV = 0; rV <= pV; rV++) QV[rV] = 0;
        for (let rV = 0; rV < xV; rV += 4) {
          let xV = eV[rV],
            nV = xV,
            wV = 0 === nV ? 0 : 1;
          for (let YV = 1; YV < pV; YV++) {
            const UV = YV < 4 ? eV[rV + YV] : VV[rV + YV - 4];
            UV > xV && JV++, 0 !== UV && wV++, nV += UV, xV = UV
          }
          if (QV[wV]++, wV > UV && (UV = wV), 0 === nV) YV++;
          else {
            const xV = 1 / nV;
            let JV = 0;
            for (let YV = 0; YV < pV; YV++) JV += YV < 4 ? Math.abs(eV[rV + YV] - eV[rV + YV] * xV) : Math.abs(VV[rV + YV - 4] - VV[rV + YV - 4] * xV);
            JV > .001 && yV++
          }
        }
        const nV = this.skeleton.bones.length,
          wV = this.getVerticesData(MV.j.MatricesIndicesKind),
          ZV = this.getVerticesData(MV.j.MatricesIndicesExtraKind);
        let vV = 0;
        for (let rV = 0; rV < xV; rV += 4)
          for (let VV = 0; VV < pV; VV++) {
            const eV = VV < 4 ? wV[rV + VV] : ZV[rV + VV - 4];
            (eV >= nV || eV < 0) && vV++
          }
        return {
          skinned: !0,
          valid: 0 === YV && 0 === yV && 0 === vV,
          EZ: "Number of Weights = " + xV / 4 + "\nMaximum influences = " + UV + "\nMissing Weights = " + YV + "\nNot Sorted = " + JV + "\nNot Normalized = " + yV + "\nWeightCounts = [" + QV + "]\nNumber of bones = " + nV + "\nBad Bone Indices = " + vV
        }
      }
      _checkDelayState() {
        const VV = this.dD();
        return this._geometry ? this._geometry.load(VV) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(VV)), this
      }
      _queueLoad(VV) {
        VV.addPendingData(this);
        const eV = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const xV = await VV._loadDelayedFileAsync(this.delayLoadingFile, eV, !0);
            xV instanceof ArrayBuffer ? this._delayLoadingFunction(xV, this) : this._delayLoadingFunction(JSON.parse(xV), this);
            for (const VV of this.instances) VV.refreshBoundingInfo(), VV._syncSubMeshes();
            this.delayLoadState = 1, VV.removePendingData(this)
          } catch (xV) {
            VV.removePendingData(this), VV.iN || oV.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${xV}`)
          }
        })(), this
      }
      isInFrustum(VV) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(VV) && (this._checkDelayState(), !0))
      }
      setMaterialById(VV) {
        const eV = this.dD().materials;
        let xV;
        for (xV = eV.length - 1; xV > -1; xV--)
          if (eV[xV].id === VV) return this.material = eV[xV], this;
        const JV = this.dD().multiMaterials;
        for (xV = JV.length - 1; xV > -1; xV--)
          if (JV[xV].id === VV) return this.material = JV[xV], this;
        return this
      }
      getAnimatables() {
        const VV = [];
        return this.material && VV.push(this.material), this.skeleton && VV.push(this.skeleton), VV
      }
      bakeTransformIntoVertices(VV) {
        if (!this.isVerticesDataPresent(MV.j.PositionKind)) return this;
        const eV = this.hT.splice(0);
        this._resetPointsArrayCache();
        let xV = this.getVerticesData(MV.j.PositionKind);
        const JV = AV.o.Zero();
        let YV;
        for (YV = 0; YV < xV.length; YV += 3) AV.o.TransformCoordinatesFromFloatsToRef(xV[YV], xV[YV + 1], xV[YV + 2], VV, JV).toArray(xV, YV);
        if (this.setVerticesData(MV.j.PositionKind, xV, this.getVertexBuffer(MV.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(MV.j.NormalKind)) {
          for (xV = this.getVerticesData(MV.j.NormalKind), YV = 0; YV < xV.length; YV += 3) AV.o.TransformNormalFromFloatsToRef(xV[YV], xV[YV + 1], xV[YV + 2], VV, JV).normalize().toArray(xV, YV);
          this.setVerticesData(MV.j.NormalKind, xV, this.getVertexBuffer(MV.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(MV.j.TangentKind)) {
          for (xV = this.getVerticesData(MV.j.TangentKind), YV = 0; YV < xV.length; YV += 4) AV.o.TransformNormalFromFloatsToRef(xV[YV], xV[YV + 1], xV[YV + 2], VV, JV).normalize().toArray(xV, YV);
          this.setVerticesData(MV.j.TangentKind, xV, this.getVertexBuffer(MV.j.TangentKind).isUpdatable())
        }
        return VV.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.hT = eV, this
      }
      bakeCurrentTransformIntoVertices() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(VV), this
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (eV && void 0 === eV._addToSceneRootNodes) {
          const xV = eV;
          return SV.source = this, SV.doNotCloneChildren = xV.doNotCloneChildren, SV.clonePhysicsImpostor = xV.clonePhysicsImpostor, SV.cloneThinInstances = xV.cloneThinInstances, new IV(VV, this.dD(), SV)
        }
        return new IV(VV, this.dD(), eV, this, xV, JV)
      }
      dispose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const xV = this._internalMeshDataInfo;
        if (xV._onBeforeDrawObservable && xV._onBeforeDrawObservable.clear(), xV._onBeforeBindObservable && xV._onBeforeBindObservable.clear(), xV._onBeforeRenderObservable && xV._onBeforeRenderObservable.clear(), xV._onAfterRenderObservable && xV._onAfterRenderObservable.clear(), xV._onBetweenPassObservable && xV._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (xV.meshMap)
            for (const VV in xV.meshMap) {
              const eV = xV.meshMap[VV];
              eV && (eV._internalMeshDataInfo._source = null, xV.meshMap[VV] = void 0)
            }
          xV._source && xV._source._internalMeshDataInfo.meshMap && (xV._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const VV = this.dD().meshes;
          for (const eV of VV) {
            const VV = eV;
            VV._internalMeshDataInfo && VV._internalMeshDataInfo._source && VV._internalMeshDataInfo._source === this && (VV._internalMeshDataInfo._source = null)
          }
        }
        xV._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(VV, eV)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(VV, eV, xV, JV, YV, UV) {
        let yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          pV = arguments.length > 7 ? arguments[7] : void 0;
        const QV = this.dD();
        return (0, qV.r)(VV, (VV => {
          const pV = VV.width,
            QV = VV.height,
            nV = this.sk().createCanvas(pV, QV).getContext("2d");
          nV.drawImage(VV, 0, 0);
          const wV = nV.getImageData(0, 0, pV, QV).data;
          this.applyDisplacementMapFromBuffer(wV, pV, QV, eV, xV, YV, UV, yV), JV && JV(this)
        }), pV || (() => {}), QV.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(VV, eV, xV, JV, YV, UV, yV) {
        let pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(MV.j.PositionKind) || !this.isVerticesDataPresent(MV.j.NormalKind) || !this.isVerticesDataPresent(MV.j.UVKind)) return oV.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const QV = this.getVerticesData(MV.j.PositionKind, !0, !0),
          nV = this.getVerticesData(MV.j.NormalKind),
          wV = this.getVerticesData(MV.j.UVKind);
        let ZV = AV.o.Zero();
        const vV = AV.o.Zero(),
          rV = AV.n.Zero();
        UV = UV || AV.n.Zero(), yV = yV || new AV.n(1, 1);
        for (let kV = 0; kV < QV.length; kV += 3) {
          AV.o.FromArrayToRef(QV, kV, ZV), AV.o.FromArrayToRef(nV, kV, vV), AV.n.FromArrayToRef(wV, kV / 3 * 2, rV);
          const pV = 4 * ((Math.abs(rV.x * yV.x + UV.x % 1) * (eV - 1) % eV | 0) + (Math.abs(rV.y * yV.y + UV.y % 1) * (xV - 1) % xV | 0) * eV),
            bV = .3 * (VV[pV] / 255) + .59 * (VV[pV + 1] / 255) + .11 * (VV[pV + 2] / 255);
          vV.normalize(), vV.scaleInPlace(JV + (YV - JV) * bV), ZV = ZV.add(vV), ZV.toArray(QV, kV)
        }
        return zV.c.ComputeNormals(QV, this.RYV(), nV), pV ? (this.setVerticesData(MV.j.PositionKind, QV), this.setVerticesData(MV.j.NormalKind, nV), this.setVerticesData(MV.j.UVKind, wV)) : (this.updateVerticesData(MV.j.PositionKind, QV), this.updateVerticesData(MV.j.NormalKind, nV)), this
      }
      _getFlattenedNormals(VV, eV) {
        const xV = new Float32Array(3 * VV.length);
        let JV = 0;
        const YV = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let UV = 0; UV < VV.length; UV += 3) {
          const yV = AV.o.FromArray(eV, 3 * VV[UV]),
            pV = AV.o.FromArray(eV, 3 * VV[UV + 1]),
            QV = AV.o.FromArray(eV, 3 * VV[UV + 2]),
            nV = yV.subtract(pV),
            wV = QV.subtract(pV),
            ZV = AV.o.Normalize(AV.o.Cross(nV, wV));
          YV && ZV.scaleInPlace(-1);
          for (let VV = 0; VV < 3; VV++) xV[JV++] = ZV.x, xV[JV++] = ZV.y, xV[JV++] = ZV.z
        }
        return xV
      }
      _convertToUnIndexedMesh() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = this.getVerticesDataKinds().filter((VV => !this.getVertexBuffer(VV)?.getIsInstanced())),
          xV = this.RYV(!1, !0),
          JV = {},
          YV = (VV, eV) => {
            const JV = new Float32Array(xV.length * eV);
            let YV = 0;
            for (let UV = 0; UV < xV.length; UV++)
              for (let yV = 0; yV < eV; yV++) JV[YV++] = VV[xV[UV] * eV + yV];
            return JV
          },
          UV = this.qL(),
          yV = this.geometry ? this.hT.slice(0) : [];
        for (const pV of eV) JV[pV] = this.getVerticesData(pV);
        for (const pV of eV) {
          const eV = this.getVertexBuffer(pV),
            UV = eV.getSize();
          if (VV && pV === MV.j.NormalKind) {
            const VV = this._getFlattenedNormals(xV, JV[MV.j.PositionKind]);
            this.setVerticesData(MV.j.NormalKind, VV, eV.isUpdatable(), UV)
          } else this.setVerticesData(pV, YV(JV[pV], UV), eV.isUpdatable(), UV)
        }
        if (this.morphTargetManager) {
          for (let eV = 0; eV < this.morphTargetManager.numTargets; eV++) {
            const JV = this.morphTargetManager.getTarget(eV),
              UV = JV.getPositions();
            JV.vQV(YV(UV, 3));
            const yV = JV.getNormals();
            yV && JV.setNormals(VV ? this._getFlattenedNormals(xV, UV) : YV(yV, 3));
            const pV = JV.getTangents();
            pV && JV.setTangents(YV(pV, 3));
            const QV = JV.getUVs();
            QV && JV.setUVs(YV(QV, 2));
            const nV = JV.getColors();
            nV && JV.setColors(YV(nV, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let pV = 0; pV < xV.length; pV++) xV[pV] = pV;
        this.setIndices(xV), this._unIndexed = !0, this.releaseSubMeshes();
        for (const pV of yV) {
          const VV = pV.qL();
          RV.c.AddToMesh(pV.materialIndex, pV.indexStart, pV.indexCount, pV.indexStart, pV.indexCount, this).setBoundingInfo(VV)
        }
        return this.setBoundingInfo(UV), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = zV.c.ExtractFromMesh(this);
        let xV;
        if (VV && this.isVerticesDataPresent(MV.j.NormalKind) && eV.normals) {
          for (xV = 0; xV < eV.normals.length; xV++) eV.normals[xV] *= -1;
          this.setVerticesData(MV.j.NormalKind, eV.normals, this.isVertexBufferUpdatable(MV.j.NormalKind))
        }
        if (eV.indices) {
          let VV;
          for (xV = 0; xV < eV.indices.length; xV += 3) VV = eV.indices[xV + 1], eV.indices[xV + 1] = eV.indices[xV + 2], eV.indices[xV + 2] = VV;
          this.setIndices(eV.indices, null, this.isVertexBufferUpdatable(MV.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const eV = zV.c.ExtractFromMesh(this),
          xV = eV.indices && !Array.isArray(eV.indices) && Array.from ? Array.from(eV.indices) : eV.indices,
          JV = eV.positions && !Array.isArray(eV.positions) && Array.from ? Array.from(eV.positions) : eV.positions,
          YV = eV.uvs && !Array.isArray(eV.uvs) && Array.from ? Array.from(eV.uvs) : eV.uvs,
          UV = eV.normals && !Array.isArray(eV.normals) && Array.from ? Array.from(eV.normals) : eV.normals;
        if (xV && JV) {
          eV.indices = xV, eV.positions = JV, YV && (eV.uvs = YV), UV && (eV.normals = UV);
          const yV = VV + 1,
            pV = [];
          for (let VV = 0; VV < yV + 1; VV++) pV[VV] = [];
          let QV, nV;
          const wV = new AV.o(0, 0, 0),
            ZV = new AV.o(0, 0, 0),
            vV = new AV.n(0, 0),
            rV = [],
            kV = [],
            bV = [];
          let EV, BV, jV, qV = JV.length;
          YV && (BV = YV.length), UV && (jV = UV.length);
          for (let VV = 0; VV < xV.length; VV += 3) {
            kV[0] = xV[VV], kV[1] = xV[VV + 1], kV[2] = xV[VV + 2];
            for (let VV = 0; VV < 3; VV++)
              if (QV = kV[VV], nV = kV[(VV + 1) % 3], void 0 === bV[QV] && void 0 === bV[nV] ? (bV[QV] = [], bV[nV] = []) : (void 0 === bV[QV] && (bV[QV] = []), void 0 === bV[nV] && (bV[nV] = [])), void 0 === bV[QV][nV] && void 0 === bV[nV][QV]) {
                bV[QV][nV] = [], wV.x = (JV[3 * nV] - JV[3 * QV]) / yV, wV.y = (JV[3 * nV + 1] - JV[3 * QV + 1]) / yV, wV.z = (JV[3 * nV + 2] - JV[3 * QV + 2]) / yV, UV && (ZV.x = (UV[3 * nV] - UV[3 * QV]) / yV, ZV.y = (UV[3 * nV + 1] - UV[3 * QV + 1]) / yV, ZV.z = (UV[3 * nV + 2] - UV[3 * QV + 2]) / yV), YV && (vV.x = (YV[2 * nV] - YV[2 * QV]) / yV, vV.y = (YV[2 * nV + 1] - YV[2 * QV + 1]) / yV), bV[QV][nV].push(QV);
                for (let VV = 1; VV < yV; VV++) bV[QV][nV].push(JV.length / 3), JV[qV++] = JV[3 * QV] + VV * wV.x, JV[qV++] = JV[3 * QV + 1] + VV * wV.y, JV[qV++] = JV[3 * QV + 2] + VV * wV.z, UV && (UV[jV++] = UV[3 * QV] + VV * ZV.x, UV[jV++] = UV[3 * QV + 1] + VV * ZV.y, UV[jV++] = UV[3 * QV + 2] + VV * ZV.z), YV && (YV[BV++] = YV[2 * QV] + VV * vV.x, YV[BV++] = YV[2 * QV + 1] + VV * vV.y);
                bV[QV][nV].push(nV), bV[nV][QV] = [], EV = bV[QV][nV].length;
                for (let VV = 0; VV < EV; VV++) bV[nV][QV][VV] = bV[QV][nV][EV - 1 - VV]
              } pV[0][0] = xV[VV], pV[1][0] = bV[xV[VV]][xV[VV + 1]][1], pV[1][1] = bV[xV[VV]][xV[VV + 2]][1];
            for (let eV = 2; eV < yV; eV++) {
              pV[eV][0] = bV[xV[VV]][xV[VV + 1]][eV], pV[eV][eV] = bV[xV[VV]][xV[VV + 2]][eV], wV.x = (JV[3 * pV[eV][eV]] - JV[3 * pV[eV][0]]) / eV, wV.y = (JV[3 * pV[eV][eV] + 1] - JV[3 * pV[eV][0] + 1]) / eV, wV.z = (JV[3 * pV[eV][eV] + 2] - JV[3 * pV[eV][0] + 2]) / eV, UV && (ZV.x = (UV[3 * pV[eV][eV]] - UV[3 * pV[eV][0]]) / eV, ZV.y = (UV[3 * pV[eV][eV] + 1] - UV[3 * pV[eV][0] + 1]) / eV, ZV.z = (UV[3 * pV[eV][eV] + 2] - UV[3 * pV[eV][0] + 2]) / eV), YV && (vV.x = (YV[2 * pV[eV][eV]] - YV[2 * pV[eV][0]]) / eV, vV.y = (YV[2 * pV[eV][eV] + 1] - YV[2 * pV[eV][0] + 1]) / eV);
              for (let VV = 1; VV < eV; VV++) pV[eV][VV] = JV.length / 3, JV[qV++] = JV[3 * pV[eV][0]] + VV * wV.x, JV[qV++] = JV[3 * pV[eV][0] + 1] + VV * wV.y, JV[qV++] = JV[3 * pV[eV][0] + 2] + VV * wV.z, UV && (UV[jV++] = UV[3 * pV[eV][0]] + VV * ZV.x, UV[jV++] = UV[3 * pV[eV][0] + 1] + VV * ZV.y, UV[jV++] = UV[3 * pV[eV][0] + 2] + VV * ZV.z), YV && (YV[BV++] = YV[2 * pV[eV][0]] + VV * vV.x, YV[BV++] = YV[2 * pV[eV][0] + 1] + VV * vV.y)
            }
            pV[yV] = bV[xV[VV + 1]][xV[VV + 2]], rV.push(pV[0][0], pV[1][0], pV[1][1]);
            for (let VV = 1; VV < yV; VV++) {
              let eV;
              for (eV = 0; eV < VV; eV++) rV.push(pV[VV][eV], pV[VV + 1][eV], pV[VV + 1][eV + 1]), rV.push(pV[VV][eV], pV[VV + 1][eV + 1], pV[VV][eV + 1]);
              rV.push(pV[VV][eV], pV[VV + 1][eV], pV[VV + 1][eV + 1])
            }
          }
          eV.indices = rV, eV.applyToMesh(this, this.isVertexBufferUpdatable(MV.j.PositionKind))
        } else oV.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const VV = zV.c.ExtractFromMesh(this),
          eV = VV.uvs,
          xV = VV.indices,
          JV = VV.positions,
          YV = VV.colors,
          UV = VV.matricesIndices,
          yV = VV.matricesWeights,
          pV = VV.matricesIndicesExtra,
          QV = VV.matricesWeightsExtra;
        if (void 0 === xV || void 0 === JV || null === xV || null === JV) oV.b.Warn("VertexData contains empty entries");
        else {
          const nV = [],
            wV = [],
            ZV = [],
            vV = [],
            rV = [],
            kV = [],
            bV = [],
            EV = [];
          let BV, jV = 0;
          const qV = {};
          let tV, FV;
          for (let VV = 0; VV < xV.length; VV += 3) {
            FV = [xV[VV], xV[VV + 1], xV[VV + 2]], BV = [];
            for (let VV = 0; VV < 3; VV++) {
              BV[VV] = "";
              for (let eV = 0; eV < 3; eV++) Math.abs(JV[3 * FV[VV] + eV]) < 1e-8 && (JV[3 * FV[VV] + eV] = 0), BV[VV] += JV[3 * FV[VV] + eV] + "|"
            }
            if (BV[0] != BV[1] && BV[0] != BV[2] && BV[1] != BV[2])
              for (let VV = 0; VV < 3; VV++) {
                if (tV = qV[BV[VV]], void 0 === tV) {
                  qV[BV[VV]] = jV, tV = jV++;
                  for (let eV = 0; eV < 3; eV++) nV.push(JV[3 * FV[VV] + eV]);
                  if (null !== YV && void 0 !== YV)
                    for (let eV = 0; eV < 4; eV++) vV.push(YV[4 * FV[VV] + eV]);
                  if (null !== eV && void 0 !== eV)
                    for (let xV = 0; xV < 2; xV++) ZV.push(eV[2 * FV[VV] + xV]);
                  if (null !== UV && void 0 !== UV)
                    for (let eV = 0; eV < 4; eV++) rV.push(UV[4 * FV[VV] + eV]);
                  if (null !== yV && void 0 !== yV)
                    for (let eV = 0; eV < 4; eV++) kV.push(yV[4 * FV[VV] + eV]);
                  if (null !== pV && void 0 !== pV)
                    for (let eV = 0; eV < 4; eV++) bV.push(pV[4 * FV[VV] + eV]);
                  if (null !== QV && void 0 !== QV)
                    for (let eV = 0; eV < 4; eV++) EV.push(QV[4 * FV[VV] + eV])
                }
                wV.push(tV)
              }
          }
          const TV = [];
          zV.c.ComputeNormals(nV, wV, TV), VV.positions = nV, VV.indices = wV, VV.normals = TV, null !== eV && void 0 !== eV && (VV.uvs = ZV), null !== YV && void 0 !== YV && (VV.colors = vV), null !== UV && void 0 !== UV && (VV.matricesIndices = rV), null !== yV && void 0 !== yV && (VV.matricesWeights = kV), null !== pV && void 0 !== pV && (VV.matricesIndicesExtra = bV), null !== yV && void 0 !== yV && (VV.matricesWeightsExtra = EV), VV.applyToMesh(this, this.isVertexBufferUpdatable(MV.j.PositionKind))
        }
      }
      static _instancedMeshFactory(VV, eV) {
        throw (0, hV.n)("InstancedMesh")
      }
      static _PhysicsImpostorParser(VV, eV, xV) {
        throw (0, hV.n)("PhysicsImpostor")
      }
      createInstance(VV) {
        const eV = IV._instancedMeshFactory(VV, this);
        return eV.parent = this.parent, eV
      }
      synchronizeInstances() {
        for (let VV = 0; VV < this.instances.length; VV++) {
          this.instances[VV]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(VV) {
        const eV = this.RYV(),
          xV = this.getVerticesData(MV.j.PositionKind);
        if (!xV || !eV) return this;
        const JV = [];
        for (let UV = 0; UV < xV.length; UV += 3) JV.push(AV.o.FromArray(xV, UV));
        const YV = [];
        return jV.c.SyncAsyncForLoop(JV.length, 40, (VV => {
          const eV = JV.length - 1 - VV,
            xV = JV[eV];
          for (let UV = 0; UV < eV; ++UV) {
            const VV = JV[UV];
            if (xV.equals(VV)) {
              YV[eV] = UV;
              break
            }
          }
        }), (() => {
          for (let VV = 0; VV < eV.length; ++VV) eV[VV] = YV[eV[VV]] || eV[VV];
          const xV = this.hT.slice(0);
          this.setIndices(eV), this.hT = xV, VV && VV(this)
        })), this
      }
      serialize() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        VV.name = this.name, VV.id = this.id, VV.uniqueId = this.uniqueId, VV.type = this.getClassName(), FV.d && FV.d.HasTags(this) && (VV.tags = FV.d.GetTags(this)), VV.position = this.position.WYV(), this.rotationQuaternion ? VV.rotationQuaternion = this.rotationQuaternion.WYV() : this.rotation && (VV.rotation = this.rotation.WYV()), VV.WZ = this.WZ.WYV(), this._postMultiplyPivotMatrix ? VV.pivotMatrix = this.getPivotMatrix().WYV() : VV.localMatrix = this.getPivotMatrix().WYV(), VV.isEnabled = this.isEnabled(!1), VV.isVisible = this.isVisible, VV.infiniteDistance = this.infiniteDistance, VV.pickable = this.QE, VV.receiveShadows = this.receiveShadows, VV.billboardMode = this.billboardMode, VV.visibility = this.visibility, VV.Sk = this.Sk, VV.checkCollisions = this.checkCollisions, VV.ellipsoid = this.ellipsoid.WYV(), VV.ellipsoidOffset = this.ellipsoidOffset.WYV(), VV.Vb = this.Vb, VV.isBlocker = this.isBlocker, VV.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (VV.nC = !0), this.parent && this.parent._serializeAsParent(VV), VV.isUnIndexed = this.isUnIndexed;
        const eV = this._geometry;
        if (eV && this.hT) {
          VV.geometryUniqueId = eV.uniqueId, VV.geometryId = eV.id, VV.hT = [];
          for (let eV = 0; eV < this.hT.length; eV++) {
            const xV = this.hT[eV];
            VV.hT.push({
              materialIndex: xV.materialIndex,
              verticesStart: xV.verticesStart,
              verticesCount: xV.verticesCount,
              indexStart: xV.indexStart,
              indexCount: xV.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (VV.materialUniqueId = this.material.uniqueId, VV.materialId = this.material.id) : (this.material = null, VV.materialUniqueId = this._scene.defaultMaterial.uniqueId, VV.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (VV.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (VV.skeletonId = this.skeleton.id, VV.skeletonUniqueId = this.skeleton.uniqueId, VV.numBoneInfluencers = this.numBoneInfluencers), this.dD()._getComponent(lV.e.NAME_PHYSICSENGINE)) {
          const eV = this.getPhysicsImpostor?.();
          eV && (VV.physicsMass = eV.getParam("eZ"), VV.physicsFriction = eV.getParam("friction"), VV.physicsRestitution = eV.getParam("eZ"), VV.physicsImpostor = eV.type)
        }
        this.metadata && (VV.metadata = this.metadata), 0 !== this.meshBlendingTag && (VV.meshBlendingTag = this.meshBlendingTag), VV.instances = [];
        for (let xV = 0; xV < this.instances.length; xV++) {
          const eV = this.instances[xV];
          if (eV.doNotSerialize) continue;
          const JV = {
            name: eV.name,
            id: eV.id,
            isEnabled: eV.isEnabled(!1),
            isVisible: eV.isVisible,
            QE: eV.QE,
            checkCollisions: eV.checkCollisions,
            position: eV.position.WYV(),
            WZ: eV.WZ.WYV()
          };
          if (eV.parent && eV.parent._serializeAsParent(JV), eV.rotationQuaternion ? JV.rotationQuaternion = eV.rotationQuaternion.WYV() : eV.rotation && (JV.rotation = eV.rotation.WYV()), this.dD()._getComponent(lV.e.NAME_PHYSICSENGINE)) {
            const VV = eV.getPhysicsImpostor?.();
            VV && (JV.physicsMass = VV.getParam("eZ"), JV.physicsFriction = VV.getParam("friction"), JV.physicsRestitution = VV.getParam("eZ"), JV.physicsImpostor = VV.type)
          }
          eV.metadata && (JV.metadata = eV.metadata), eV.actionManager && (JV.actions = eV.actionManager.serialize(eV.name)), VV.instances.push(JV), aV.b.AppendSerializedAnimations(eV, JV), JV.TE = eV.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (VV.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.VJV
          }, this._userThinInstanceBuffersStorage)) {
          const eV = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const VV in this._userThinInstanceBuffersStorage.data) eV.data[VV] = Array.from(this._userThinInstanceBuffersStorage.data[VV]), eV.sizes[VV] = this._userThinInstanceBuffersStorage.sizes[VV], eV.strides[VV] = this._userThinInstanceBuffersStorage.strides[VV];
          VV.thinInstances.userThinInstance = eV
        }
        return aV.b.AppendSerializedAnimations(this, VV), VV.TE = this.serializeAnimationRanges(), VV.layerMask = this.layerMask, VV.alphaIndex = this.alphaIndex, VV.hasVertexAlpha = this.hasVertexAlpha, VV.overlayAlpha = this.overlayAlpha, VV.overlayColor = this.overlayColor.WYV(), VV.renderOverlay = this.renderOverlay, VV.applyFog = this.applyFog, this.actionManager && (VV.actions = this.actionManager.serialize(this.name)), VV
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const VV = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (VV && VV.vertexCount) {
          if (VV.vertexCount !== this.getTotalVertices()) return oV.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (VV.isUsingTextureForTargets) return;
          for (let eV = 0; eV < VV.numInfluencers; eV++) {
            const xV = VV.getActiveTarget(eV),
              JV = xV.getPositions();
            if (!JV) return void oV.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(MV.j.PositionKind + eV, JV, !1, 3);
            const YV = xV.getNormals();
            YV && this.geometry.setVerticesData(MV.j.NormalKind + eV, YV, !1, 3);
            const UV = xV.getTangents();
            UV && this.geometry.setVerticesData(MV.j.TangentKind + eV, UV, !1, 3);
            const yV = xV.getUVs();
            yV && this.geometry.setVerticesData(MV.j.UVKind + "_" + eV, yV, !1, 2);
            const pV = xV.getUV2s();
            pV && this.geometry.setVerticesData(MV.j.UV2Kind + "_" + eV, pV, !1, 2);
            const QV = xV.getColors();
            QV && this.geometry.setVerticesData(MV.j.ColorKind + eV, QV, !1, 4)
          }
        } else {
          let VV = 0;
          for (; this.geometry.isVerticesDataPresent(MV.j.PositionKind + VV);) this.geometry.removeVerticesData(MV.j.PositionKind + VV), this.geometry.isVerticesDataPresent(MV.j.NormalKind + VV) && this.geometry.removeVerticesData(MV.j.NormalKind + VV), this.geometry.isVerticesDataPresent(MV.j.TangentKind + VV) && this.geometry.removeVerticesData(MV.j.TangentKind + VV), this.geometry.isVerticesDataPresent(MV.j.UVKind + "_" + VV) && this.geometry.removeVerticesData(MV.j.UVKind + "_" + VV), this.geometry.isVerticesDataPresent(MV.j.UV2Kind + "_" + VV) && this.geometry.removeVerticesData(MV.j.UV2Kind + "_" + VV), this.geometry.isVerticesDataPresent(MV.j.ColorKind + VV) && this.geometry.removeVerticesData(MV.j.ColorKind + VV), VV++
        }
      }
      static Parse(VV, eV, xV) {
        let JV, YV = !1;
        if (VV.type && "LinesMesh" === VV.type ? JV = IV._LinesMeshParser(VV, eV) : VV.type && "GroundMesh" === VV.type ? JV = IV._GroundMeshParser(VV, eV) : VV.type && "GoldbergMesh" === VV.type ? JV = IV._GoldbergMeshParser(VV, eV) : VV.type && "GreasedLineMesh" === VV.type ? JV = IV._GreasedLineMeshParser(VV, eV) : VV.type && "TrailMesh" === VV.type ? JV = IV._TrailMeshParser(VV, eV) : VV.type && "GaussianSplattingMesh" === VV.type ? (JV = VV._isCompound ? IV._GaussianSplattingCompoundMeshParser(VV, eV) : IV._GaussianSplattingMeshParser(VV, eV), YV = !0) : VV.type && "GaussianSplattingPartProxyMesh" === VV.type ? (JV = IV._GaussianSplattingPartProxyMeshParser(VV, eV), YV = !0) : JV = new IV(VV.name, eV), JV.id = VV.id, JV._waitingParsedUniqueId = VV.uniqueId, FV.d && FV.d.AddTagsTo(JV, VV.tags), JV.position = AV.o.FromArray(VV.position), void 0 !== VV.metadata && (JV.metadata = VV.metadata), void 0 !== VV.meshBlendingTag && (JV.meshBlendingTag = VV.meshBlendingTag), VV.rotationQuaternion ? JV.rotationQuaternion = AV.h.FromArray(VV.rotationQuaternion) : VV.rotation && (JV.rotation = AV.o.FromArray(VV.rotation)), JV.WZ = AV.o.FromArray(VV.WZ), VV.localMatrix ? JV.setPreTransformMatrix(AV.d.FromArray(VV.localMatrix)) : VV.pivotMatrix && JV.setPivotMatrix(AV.d.FromArray(VV.pivotMatrix)), JV.pW(VV.isEnabled), JV.isVisible = VV.isVisible, JV.infiniteDistance = VV.infiniteDistance, JV.Sk = !!VV.Sk, JV.showBoundingBox = VV.showBoundingBox, JV.showSubMeshesBoundingBox = VV.showSubMeshesBoundingBox, void 0 !== VV.applyFog && (JV.applyFog = VV.applyFog), void 0 !== VV.pickable && (JV.QE = VV.pickable), void 0 !== VV.alphaIndex && (JV.alphaIndex = VV.alphaIndex), JV.receiveShadows = VV.receiveShadows, void 0 !== VV.billboardMode && (JV.billboardMode = VV.billboardMode), void 0 !== VV.visibility && (JV.visibility = VV.visibility), JV.checkCollisions = VV.checkCollisions, JV.Vb = !!VV.Vb, VV.ellipsoid && (JV.ellipsoid = AV.o.FromArray(VV.ellipsoid)), VV.ellipsoidOffset && (JV.ellipsoidOffset = AV.o.FromArray(VV.ellipsoidOffset)), null != VV.overrideMaterialSideOrientation && (JV.sideOrientation = VV.overrideMaterialSideOrientation), void 0 !== VV.sideOrientation && (JV.sideOrientation = VV.sideOrientation), void 0 !== VV.isBlocker && (JV.isBlocker = VV.isBlocker), JV._shouldGenerateFlatShading = VV.useFlatShading, VV.nC && (JV._waitingData.nC = VV.nC), void 0 !== VV.parentId && (JV._waitingParentId = VV.parentId), void 0 !== VV.parentInstanceIndex && (JV._waitingParentInstanceIndex = VV.parentInstanceIndex), void 0 !== VV.actions && (JV._waitingData.actions = VV.actions), void 0 !== VV.overlayAlpha && (JV.overlayAlpha = VV.overlayAlpha), void 0 !== VV.overlayColor && (JV.overlayColor = NV.d.FromArray(VV.overlayColor)), void 0 !== VV.renderOverlay && (JV.renderOverlay = VV.renderOverlay), JV.isUnIndexed = !!VV.isUnIndexed, JV.hasVertexAlpha = VV.hasVertexAlpha, VV.delayLoadingFile ? (JV.delayLoadState = 4, JV.delayLoadingFile = xV + VV.delayLoadingFile, JV.buildBoundingInfo(AV.o.FromArray(VV.boundingBoxMinimum), AV.o.FromArray(VV.boundingBoxMaximum)), VV._binaryInfo && (JV._binaryInfo = VV._binaryInfo), JV._delayInfo = [], VV.hasUVs && JV._delayInfo.push(MV.j.UVKind), VV.hasUVs2 && JV._delayInfo.push(MV.j.UV2Kind), VV.hasUVs3 && JV._delayInfo.push(MV.j.UV3Kind), VV.hasUVs4 && JV._delayInfo.push(MV.j.UV4Kind), VV.hasUVs5 && JV._delayInfo.push(MV.j.UV5Kind), VV.hasUVs6 && JV._delayInfo.push(MV.j.UV6Kind), VV.hasColors && JV._delayInfo.push(MV.j.ColorKind), VV.hasMatricesIndices && JV._delayInfo.push(MV.j.MatricesIndicesKind), VV.hasMatricesWeights && JV._delayInfo.push(MV.j.MatricesWeightsKind), JV._delayLoadingFunction = GV.c._ImportGeometry, CV.b.ForceFullSceneLoadingForIncremental && JV._checkDelayState()) : YV || GV.c._ImportGeometry(VV, JV), VV.materialUniqueId ? JV._waitingMaterialId = VV.materialUniqueId : VV.materialId && (JV._waitingMaterialId = VV.materialId), VV.morphTargetManagerId > -1 && (JV._waitingMorphTargetManagerId = VV.morphTargetManagerId), void 0 !== VV.skeletonId && null !== VV.skeletonId && (JV.skeleton = eV.getLastSkeletonById(VV.skeletonId), JV._waitingSkeletonId = VV.skeletonId, VV.numBoneInfluencers && (JV.numBoneInfluencers = VV.numBoneInfluencers)), void 0 !== VV.skeletonUniqueId && null !== VV.skeletonUniqueId && (JV._waitingSkeletonUniqueId = VV.skeletonUniqueId), VV.animations) {
          for (let eV = 0; eV < VV.animations.length; eV++) {
            const xV = VV.animations[eV],
              YV = (0, cV.c)("BABYLON.Animation");
            YV && JV.animations.push(YV.Parse(xV))
          }
          XV.e.ParseAnimationRanges(JV, VV, eV)
        }
        if (VV.autoAnimate && eV.beginAnimation(JV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), VV.layerMask && !isNaN(VV.layerMask) ? JV.layerMask = Math.abs(parseInt(VV.layerMask)) : JV.layerMask = 268435455, VV.physicsImpostor && (JV.physicsImpostor = IV._PhysicsImpostorParser(eV, JV, VV)), VV.lodMeshIds && (JV._waitingData.lods = {
            ids: VV.lodMeshIds,
            distances: VV.lodDistances ? VV.lodDistances : null,
            coverages: VV.lodCoverages ? VV.lodCoverages : null
          }), VV.instances)
          for (let UV = 0; UV < VV.instances.length; UV++) {
            const xV = VV.instances[UV],
              YV = JV.createInstance(xV.name);
            if (xV.id && (YV.id = xV.id), FV.d && (xV.tags ? FV.d.AddTagsTo(YV, xV.tags) : FV.d.AddTagsTo(YV, VV.tags)), YV.position = AV.o.FromArray(xV.position), void 0 !== xV.metadata && (YV.metadata = xV.metadata), void 0 !== xV.parentId && (YV._waitingParentId = xV.parentId), void 0 !== xV.parentInstanceIndex && (YV._waitingParentInstanceIndex = xV.parentInstanceIndex), void 0 !== xV.isEnabled && null !== xV.isEnabled && YV.pW(xV.isEnabled), void 0 !== xV.isVisible && null !== xV.isVisible && (YV.isVisible = xV.isVisible), void 0 !== xV.QE && null !== xV.QE && (YV.QE = xV.QE), xV.rotationQuaternion ? YV.rotationQuaternion = AV.h.FromArray(xV.rotationQuaternion) : xV.rotation && (YV.rotation = AV.o.FromArray(xV.rotation)), YV.WZ = AV.o.FromArray(xV.WZ), void 0 != xV.checkCollisions && null != xV.checkCollisions && (YV.checkCollisions = xV.checkCollisions), void 0 != xV.pickable && null != xV.pickable && (YV.QE = xV.pickable), void 0 != xV.showBoundingBox && null != xV.showBoundingBox && (YV.showBoundingBox = xV.showBoundingBox), void 0 != xV.showSubMeshesBoundingBox && null != xV.showSubMeshesBoundingBox && (YV.showSubMeshesBoundingBox = xV.showSubMeshesBoundingBox), void 0 != xV.alphaIndex && null != xV.showSubMeshesBoundingBox && (YV.alphaIndex = xV.alphaIndex), xV.physicsImpostor && (YV.physicsImpostor = IV._PhysicsImpostorParser(eV, YV, xV)), void 0 !== xV.actions && (YV._waitingData.actions = xV.actions), xV.animations) {
              for (let VV = 0; VV < xV.animations.length; VV++) {
                const eV = xV.animations[VV],
                  JV = (0, cV.c)("BABYLON.Animation");
                JV && YV.animations.push(JV.Parse(eV))
              }
              XV.e.ParseAnimationRanges(YV, xV, eV), xV.autoAnimate && eV.beginAnimation(YV, xV.autoAnimateFrom, xV.autoAnimateTo, xV.autoAnimateLoop, xV.autoAnimateSpeed || 1)
            }
          }
        if (VV.thinInstances) {
          const eV = VV.thinInstances;
          if (JV.VJV = !!eV.enablePicking, eV.matrixData ? (JV.beV("matrix", new Float32Array(eV.matrixData), 16, !1), JV._thinInstanceDataStorage.matrixBufferSize = eV.matrixBufferSize, JV._thinInstanceDataStorage.instancesCount = eV.instancesCount) : JV._thinInstanceDataStorage.matrixBufferSize = eV.matrixBufferSize, VV.thinInstances.userThinInstance) {
            const eV = VV.thinInstances.userThinInstance;
            for (const VV in eV.data) JV.beV(VV, new Float32Array(eV.data[VV]), eV.strides[VV], !1), JV._userThinInstanceBuffersStorage.sizes[VV] = eV.sizes[VV]
          }
        }
        return JV
      }
      setPositionsForCPUSkinning() {
        const VV = this._internalMeshDataInfo;
        if (!VV._sourcePositions) {
          const eV = this.getVerticesData(MV.j.PositionKind);
          if (!eV) return VV._sourcePositions;
          VV._sourcePositions = new Float32Array(eV), this.isVertexBufferUpdatable(MV.j.PositionKind) || this.setVerticesData(MV.j.PositionKind, eV, !0)
        }
        return VV._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const VV = this._internalMeshDataInfo;
        if (!VV._sourceNormals) {
          const eV = this.getVerticesData(MV.j.NormalKind);
          if (!eV) return VV._sourceNormals;
          VV._sourceNormals = new Float32Array(eV), this.isVertexBufferUpdatable(MV.j.NormalKind) || this.setVerticesData(MV.j.NormalKind, eV, !0)
        }
        return VV._sourceNormals
      }
      applySkeleton(VV) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.dD().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.dD().getFrameId(), !this.isVerticesDataPresent(MV.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(MV.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(MV.j.MatricesWeightsKind)) return this;
        const eV = this.isVerticesDataPresent(MV.j.NormalKind),
          xV = this._internalMeshDataInfo;
        if (!xV._sourcePositions) {
          const VV = this.hT.slice();
          this.setPositionsForCPUSkinning(), this.hT = VV
        }
        eV && !xV._sourceNormals && this.setNormalsForCPUSkinning();
        let JV = this.getVerticesData(MV.j.PositionKind);
        if (!JV) return this;
        JV instanceof Float32Array || (JV = new Float32Array(JV));
        let YV = this.getVerticesData(MV.j.NormalKind);
        if (eV) {
          if (!YV) return this;
          YV instanceof Float32Array || (YV = new Float32Array(YV))
        }
        const UV = this.getVerticesData(MV.j.MatricesIndicesKind),
          yV = this.getVerticesData(MV.j.MatricesWeightsKind);
        if (!yV || !UV) return this;
        const pV = this.numBoneInfluencers > 4,
          QV = pV ? this.getVerticesData(MV.j.MatricesIndicesExtraKind) : null,
          nV = pV ? this.getVerticesData(MV.j.MatricesWeightsExtraKind) : null,
          wV = VV.getTransformMatrices(this),
          ZV = AV.o.Zero(),
          vV = new AV.d,
          rV = new AV.d;
        let kV, bV = 0;
        for (let EV = 0; EV < JV.length; EV += 3, bV += 4) {
          let VV;
          for (kV = 0; kV < 4; kV++) VV = yV[bV + kV], VV > 0 && (AV.d.FromFloat32ArrayToRefScaled(wV, Math.floor(16 * UV[bV + kV]), VV, rV), vV.addToSelf(rV));
          if (pV)
            for (kV = 0; kV < 4; kV++) VV = nV[bV + kV], VV > 0 && (AV.d.FromFloat32ArrayToRefScaled(wV, Math.floor(16 * QV[bV + kV]), VV, rV), vV.addToSelf(rV));
          AV.o.TransformCoordinatesFromFloatsToRef(xV._sourcePositions[EV], xV._sourcePositions[EV + 1], xV._sourcePositions[EV + 2], vV, ZV), ZV.toArray(JV, EV), eV && (AV.o.TransformNormalFromFloatsToRef(xV._sourceNormals[EV], xV._sourceNormals[EV + 1], xV._sourceNormals[EV + 2], vV, ZV), ZV.toArray(YV, EV)), vV.reset()
        }
        return this.updateVerticesData(MV.j.PositionKind, JV), eV && this.updateVerticesData(MV.j.NormalKind, YV), this
      }
      static MinMax(VV) {
        let eV = null,
          xV = null;
        for (const JV of VV) {
          const VV = JV.qL().boundingBox;
          eV && xV ? (eV.minimizeInPlace(VV.minimumWorld), xV.maximizeInPlace(VV.maximumWorld)) : (eV = VV.minimumWorld.clone(), xV = VV.maximumWorld.clone())
        }
        return eV && xV ? {
          min: eV,
          max: xV
        } : {
          min: AV.o.Zero(),
          max: AV.o.Zero()
        }
      }
      static Center(VV) {
        const eV = VV instanceof Array ? IV.MinMax(VV) : VV;
        return AV.o.Center(eV.min, eV.max)
      }
      static MergeMeshes(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        return (0, TV.g)(IV._MergeMeshesCoroutine(VV, eV, xV, JV, YV, UV, !1))
      }
      static async MergeMeshesAsync(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, TV.d)(IV._MergeMeshesCoroutine(VV, eV, xV, JV, YV, UV, !0), (0, TV.b)())
      }
      static * _MergeMeshesCoroutine(VV) {
        let eV, xV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          JV = arguments.length > 2 ? arguments[2] : void 0,
          YV = arguments.length > 3 ? arguments[3] : void 0,
          UV = arguments.length > 4 ? arguments[4] : void 0,
          yV = arguments.length > 5 ? arguments[5] : void 0,
          pV = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (VV = VV.filter(Boolean)).length) return null;
        if (!JV) {
          let xV = 0;
          for (eV = 0; eV < VV.length; eV++)
            if (xV += VV[eV].getTotalVertices(), xV >= 65536) return oV.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const QV = VV[0];
        yV && (UV = !1, VV.sort(((VV, eV) => (VV.material?.uniqueId ?? -1) - (eV.material?.uniqueId ?? -1))));
        const nV = new Array,
          wV = new Array,
          ZV = new Array,
          vV = VV[0].sideOrientation;
        for (eV = 0; eV < VV.length; eV++) {
          const xV = VV[eV];
          if (xV.JC) return oV.b.Warn("Cannot merge instance meshes."), null;
          if (vV !== xV.sideOrientation) return oV.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (UV || yV) {
            const VV = ZV.reduce(((VV, eV) => Math.max(VV, eV.start + eV.count)), 0);
            if (yV)
              if (xV.material) {
                const eV = xV.material;
                if (eV instanceof iV.b) {
                  for (let VV = 0; VV < eV.BeV.length; VV++) nV.indexOf(eV.BeV[VV]) < 0 && nV.push(eV.BeV[VV]);
                  for (let JV = 0; JV < xV.hT.length; JV++) wV.push(nV.indexOf(eV.BeV[xV.hT[JV].materialIndex])), ZV.push({
                    start: VV + xV.hT[JV].indexStart,
                    count: xV.hT[JV].indexCount
                  })
                } else {
                  nV.indexOf(eV) < 0 && nV.push(eV);
                  for (let JV = 0; JV < xV.hT.length; JV++) wV.push(nV.indexOf(eV)), ZV.push({
                    start: VV + xV.hT[JV].indexStart,
                    count: xV.hT[JV].indexCount
                  })
                }
              } else
                for (let eV = 0; eV < xV.hT.length; eV++) wV.push(0), ZV.push({
                  start: VV + xV.hT[eV].indexStart,
                  count: xV.hT[eV].indexCount
                });
            else ZV.push({
              start: VV,
              count: xV.getTotalIndices()
            })
          }
        }
        if (yV && ZV.length > 1) {
          let VV = 0;
          for (let eV = 1; eV < ZV.length; eV++) {
            const xV = ZV[VV],
              JV = ZV[eV];
            wV[eV] === wV[VV] && xV.start + xV.count === JV.start ? xV.count += JV.count : (VV++, ZV[VV] = JV, wV[VV] = wV[eV])
          }
          ZV.length = VV + 1, wV.length = VV + 1
        }
        const rV = VV => {
            const eV = VV.computeWorldMatrix(!0);
            return {
              vertexData: zV.c.ExtractFromMesh(VV, !1, !1),
              transform: eV
            }
          },
          {
            vertexData: kV,
            transform: bV
          } = rV(VV[0]);
        pV && (yield);
        const EV = new Array(VV.length - 1);
        for (let TV = 1; TV < VV.length; TV++) EV[TV - 1] = rV(VV[TV]), pV && (yield);
        const BV = kV._mergeCoroutine(bV, EV, JV, pV, !xV);
        let jV = BV.next();
        for (; !jV.done;) pV && (yield), jV = BV.next();
        const qV = jV.value;
        YV || (YV = new IV(QV.name + "_merged", QV.dD()));
        const tV = qV._applyToCoroutine(YV, void 0, pV);
        let FV = tV.next();
        for (; !FV.done;) pV && (yield), FV = tV.next();
        if (YV.checkCollisions = QV.checkCollisions, YV.sideOrientation = QV.sideOrientation, xV)
          for (eV = 0; eV < VV.length; eV++) VV[eV].dispose();
        if (UV || yV) {
          for (YV.releaseSubMeshes(), eV = 0; eV < ZV.length;) RV.c.CreateFromIndices(0, ZV[eV].start, ZV[eV].count, YV, void 0, !1), eV++;
          for (const VV of YV.hT) VV.refreshBoundingInfo();
          YV.computeWorldMatrix(!0)
        }
        if (yV) {
          const VV = new iV.b(QV.name + "_merged", QV.dD());
          VV.BeV = nV;
          for (let eV = 0; eV < YV.hT.length; eV++) YV.hT[eV].materialIndex = wV[eV];
          YV.material = VV
        } else YV.material = QV.material;
        return YV
      }
      YeV(VV) {
        VV._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(VV)
      }
      yeV(VV) {
        const eV = VV._indexInSourceMeshInstanceArray;
        if (-1 != eV) {
          if (eV !== this.instances.length - 1) {
            const VV = this.instances[this.instances.length - 1];
            this.instances[eV] = VV, VV._indexInSourceMeshInstanceArray = eV
          }
          VV._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === gV.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(VV) {
        const eV = this.dD();
        return eV.forcePointsCloud ? gV.e.PointFillMode : eV.forceWireframe ? gV.e.WireFrameFillMode : this.overrideRenderingFillMode ?? VV
      }
      setMaterialByID(VV) {
        return this.setMaterialById(VV)
      }
      static CreateRibbon(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(VV, eV, xV, JV, YV, UV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(VV, eV, xV, JV, YV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(VV, eV, xV, JV, YV, UV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(VV, eV, xV, JV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(VV, eV, xV, JV, YV, UV, yV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(VV, eV, xV, JV, YV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(VV, eV, xV, JV, YV, UV, yV, pV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(VV, eV, xV, JV, YV, UV, yV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(VV, eV, xV, JV, YV, UV, yV, pV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(VV, eV, xV, JV, YV, UV, yV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(VV, eV, xV, JV, YV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(VV, eV, xV, JV, YV, UV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(VV, eV, xV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(VV, eV, xV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(VV, eV, xV, JV, YV, UV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(VV, eV, xV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(VV) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    IV.FRONTSIDE = zV.c.FRONTSIDE, IV.BACKSIDE = zV.c.BACKSIDE, IV.DOUBLESIDE = zV.c.DOUBLESIDE, IV.DEFAULTSIDE = zV.c.DEFAULTSIDE, IV.NO_CAP = 0, IV.CAP_START = 1, IV.CAP_END = 2, IV.CAP_ALL = 3, IV.NO_FLIP = 0, IV.FLIP_TILE = 1, IV.ROTATE_TILE = 2, IV.FLIP_ROW = 3, IV.ROTATE_ROW = 4, IV.FLIP_N_ROTATE_TILE = 5, IV.FLIP_N_ROTATE_ROW = 6, IV.CENTER = 0, IV.LEFT = 1, IV.RIGHT = 2, IV.TOP = 3, IV.BOTTOM = 4, IV.INSTANCEDMESH_SORT_TRANSPARENT = !1, IV._GroundMeshParser = (VV, eV) => {
      throw (0, hV.n)("GroundMesh")
    }, IV._GoldbergMeshParser = (VV, eV) => {
      throw (0, hV.n)("GoldbergMesh")
    }, IV._LinesMeshParser = (VV, eV) => {
      throw (0, hV.n)("LinesMesh")
    }, IV._GreasedLineMeshParser = (VV, eV) => {
      throw (0, hV.n)("GreasedLineMesh")
    }, IV._GreasedLineRibbonMeshParser = (VV, eV) => {
      throw (0, hV.n)("GreasedLineRibbonMesh")
    }, IV._TrailMeshParser = (VV, eV) => {
      throw (0, hV.n)("TrailMesh")
    }, IV._GaussianSplattingMeshParser = (VV, eV) => {
      throw (0, hV.n)("GaussianSplattingMesh")
    }, IV._GaussianSplattingPartProxyMeshParser = (VV, eV) => {
      throw (0, hV.n)("GaussianSplattingPartProxyMesh")
    }, IV._GaussianSplattingCompoundMeshParser = (VV, eV) => {
      throw (0, hV.n)("GaussianSplattingCompoundMesh")
    };
    let dV = !1;

    function OV() {
      dV || (dV = !0, (0, cV.d)("BABYLON.Mesh", IV))
    }(JV = IV.prototype).uC ?? (JV.uC = (0, hV.j)("Mesh", "uC")), (YV = IV.prototype).simplify ?? (YV.simplify = (0, hV.j)("Mesh", "simplify")), (UV = IV.prototype).thinInstanceAdd ?? (UV.thinInstanceAdd = (0, hV.j)("Mesh", "thinInstanceAdd")), (yV = IV.prototype).thinInstanceAddSelf ?? (yV.thinInstanceAddSelf = (0, hV.j)("Mesh", "thinInstanceAddSelf")), (pV = IV.prototype).thinInstanceRegisterAttribute ?? (pV.thinInstanceRegisterAttribute = (0, hV.j)("Mesh", "thinInstanceRegisterAttribute")), (QV = IV.prototype).thinInstanceSetMatrixAt ?? (QV.thinInstanceSetMatrixAt = (0, hV.j)("Mesh", "thinInstanceSetMatrixAt")), (nV = IV.prototype).thinInstanceSetAttributeAt ?? (nV.thinInstanceSetAttributeAt = (0, hV.j)("Mesh", "thinInstanceSetAttributeAt")), (wV = IV.prototype).beV ?? (wV.beV = (0, hV.j)("Mesh", "beV")), (ZV = IV.prototype).thinInstanceGetWorldMatrices ?? (ZV.thinInstanceGetWorldMatrices = (0, hV.j)("Mesh", "thinInstanceGetWorldMatrices")), (vV = IV.prototype).weV ?? (vV.weV = (0, hV.j)("Mesh", "weV")), (rV = IV.prototype).thinInstancePartialBufferUpdate ?? (rV.thinInstancePartialBufferUpdate = (0, hV.j)("Mesh", "thinInstancePartialBufferUpdate")), (kV = IV.prototype).thinInstanceRefreshBoundingInfo ?? (kV.thinInstanceRefreshBoundingInfo = (0, hV.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (bV = IV.prototype).getEmittedParticleSystems ?? (bV.getEmittedParticleSystems = (0, hV.j)("Mesh", "getEmittedParticleSystems")), (EV = IV.prototype).getHierarchyEmittedParticleSystems ?? (EV.getHierarchyEmittedParticleSystems = (0, hV.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(IV.prototype, "edgesShareWithInstances") || Object.defineProperty(IV.prototype, "edgesShareWithInstances", (0, hV.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(IV.prototype, "VJV") || Object.defineProperty(IV.prototype, "VJV", (0, hV.g)("Mesh", "VJV")), Object.getOwnPropertyDescriptor(IV.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(IV.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, hV.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(IV.prototype, "VeV") || Object.defineProperty(IV.prototype, "VeV", (0, hV.g)("Mesh", "VeV"))
  },
  41674: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV
    });
    var JV = xV(41257),
      YV = xV(38269),
      UV = xV(41394),
      yV = xV(41138),
      pV = xV(38389),
      QV = xV(39870),
      nV = xV(41263),
      wV = xV(41671),
      ZV = xV(41313),
      vV = xV(41559);
    class rV {}
    let kV = (() => {
      var VV;
      let eV, xV, kV, bV, EV = [];
      return VV = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, wV.c)(this._applyToCoroutine.bind(this)), this.uniqueId = VV._UniqueIdGenerator, VV._UniqueIdGenerator++
        }
        set(VV, eV) {
          switch (VV.length || QV.b.Warn(`Setting vertex data kind '${eV}' with an empty array`), eV) {
            case UV.j.PositionKind:
              this.positions = VV;
              break;
            case UV.j.NormalKind:
              this.normals = VV;
              break;
            case UV.j.TangentKind:
              this.tangents = VV;
              break;
            case UV.j.UVKind:
              this.uvs = VV;
              break;
            case UV.j.UV2Kind:
              this.uvs2 = VV;
              break;
            case UV.j.UV3Kind:
              this.uvs3 = VV;
              break;
            case UV.j.UV4Kind:
              this.uvs4 = VV;
              break;
            case UV.j.UV5Kind:
              this.uvs5 = VV;
              break;
            case UV.j.UV6Kind:
              this.uvs6 = VV;
              break;
            case UV.j.ColorKind:
              this.colors = VV;
              break;
            case UV.j.MatricesIndicesKind:
              this.matricesIndices = VV;
              break;
            case UV.j.MatricesWeightsKind:
              this.matricesWeights = VV;
              break;
            case UV.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = VV;
              break;
            case UV.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = VV
          }
        }
        applyToMesh(VV, eV) {
          return this._applyTo(VV, eV, !1), this
        }
        applyToGeometry(VV, eV) {
          return this._applyTo(VV, eV, !1), this
        }
        updateMesh(VV) {
          return this._update(VV), this
        }
        updateGeometry(VV) {
          return this._update(VV), this
        }* _applyToCoroutine(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (VV.setVerticesData(UV.j.PositionKind, this.positions, eV), xV && (yield)), this.normals && (VV.setVerticesData(UV.j.NormalKind, this.normals, eV), xV && (yield)), this.tangents && (VV.setVerticesData(UV.j.TangentKind, this.tangents, eV), xV && (yield)), this.uvs && (VV.setVerticesData(UV.j.UVKind, this.uvs, eV), xV && (yield)), this.uvs2 && (VV.setVerticesData(UV.j.UV2Kind, this.uvs2, eV), xV && (yield)), this.uvs3 && (VV.setVerticesData(UV.j.UV3Kind, this.uvs3, eV), xV && (yield)), this.uvs4 && (VV.setVerticesData(UV.j.UV4Kind, this.uvs4, eV), xV && (yield)), this.uvs5 && (VV.setVerticesData(UV.j.UV5Kind, this.uvs5, eV), xV && (yield)), this.uvs6 && (VV.setVerticesData(UV.j.UV6Kind, this.uvs6, eV), xV && (yield)), this.colors) {
            const JV = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            VV.setVerticesData(UV.j.ColorKind, this.colors, eV, JV), this.hasVertexAlpha && void 0 !== VV.hasVertexAlpha && (VV.hasVertexAlpha = !0), xV && (yield)
          }
          if (this.matricesIndices && (VV.setVerticesData(UV.j.MatricesIndicesKind, this.matricesIndices, eV), xV && (yield)), this.matricesWeights && (VV.setVerticesData(UV.j.MatricesWeightsKind, this.matricesWeights, eV), xV && (yield)), this.matricesIndicesExtra && (VV.setVerticesData(UV.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, eV), xV && (yield)), this.matricesWeightsExtra && (VV.setVerticesData(UV.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, eV), xV && (yield)), this.indices ? (VV.setIndices(this.indices, null, eV), xV && (yield)) : VV.setIndices([], null), VV.hT && this.materialInfos && this.materialInfos.length > 1) {
            const eV = VV;
            eV.hT = [];
            for (const VV of this.materialInfos) new vV.c(VV.materialIndex, VV.verticesStart, VV.verticesCount, VV.indexStart, VV.indexCount, eV)
          }
          return this
        }
        _update(VV, eV, xV) {
          return this.positions && VV.updateVerticesData(UV.j.PositionKind, this.positions, eV, xV), this.normals && VV.updateVerticesData(UV.j.NormalKind, this.normals, eV, xV), this.tangents && VV.updateVerticesData(UV.j.TangentKind, this.tangents, eV, xV), this.uvs && VV.updateVerticesData(UV.j.UVKind, this.uvs, eV, xV), this.uvs2 && VV.updateVerticesData(UV.j.UV2Kind, this.uvs2, eV, xV), this.uvs3 && VV.updateVerticesData(UV.j.UV3Kind, this.uvs3, eV, xV), this.uvs4 && VV.updateVerticesData(UV.j.UV4Kind, this.uvs4, eV, xV), this.uvs5 && VV.updateVerticesData(UV.j.UV5Kind, this.uvs5, eV, xV), this.uvs6 && VV.updateVerticesData(UV.j.UV6Kind, this.uvs6, eV, xV), this.colors && VV.updateVerticesData(UV.j.ColorKind, this.colors, eV, xV), this.matricesIndices && VV.updateVerticesData(UV.j.MatricesIndicesKind, this.matricesIndices, eV, xV), this.matricesWeights && VV.updateVerticesData(UV.j.MatricesWeightsKind, this.matricesWeights, eV, xV), this.matricesIndicesExtra && VV.updateVerticesData(UV.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, eV, xV), this.matricesWeightsExtra && VV.updateVerticesData(UV.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, eV, xV), this.indices && VV.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length;
          const UV = YV.l.Ik[0],
            yV = YV.l.Ik[1];
          for (let pV = xV; pV < xV + JV; pV += 3) YV.o.FromArrayToRef(VV, pV, UV), YV.o.TransformCoordinatesToRef(UV, eV, yV), VV[pV] = yV.x, VV[pV + 1] = yV.y, VV[pV + 2] = yV.z
        }
        static _TransformVector3Normals(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length;
          const UV = YV.l.Ik[0],
            yV = YV.l.Ik[1];
          for (let pV = xV; pV < xV + JV; pV += 3) YV.o.FromArrayToRef(VV, pV, UV), YV.o.TransformNormalToRef(UV, eV, yV), VV[pV] = yV.x, VV[pV + 1] = yV.y, VV[pV + 2] = yV.z
        }
        static _TransformVector4Normals(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length;
          const UV = YV.l.Vector4[0],
            yV = YV.l.Vector4[1];
          for (let pV = xV; pV < xV + JV; pV += 4) YV.q.FromArrayToRef(VV, pV, UV), YV.q.TransformNormalToRef(UV, eV, yV), VV[pV] = yV.x, VV[pV + 1] = yV.y, VV[pV + 2] = yV.z, VV[pV + 3] = yV.w
        }
        static _FlipFaces(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV.length;
          for (let JV = eV; JV < eV + xV; JV += 3) {
            const eV = VV[JV + 1];
            VV[JV + 1] = VV[JV + 2], VV[JV + 2] = eV
          }
        }
        transform(eV) {
          const xV = eV.determinant() < 0;
          return this.positions && VV._TransformVector3Coordinates(this.positions, eV), this.normals && VV._TransformVector3Normals(this.normals, eV), this.tangents && VV._TransformVector4Normals(this.tangents, eV), xV && this.indices && VV._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const eV = [];
          for (const xV of this.materialInfos) {
            const JV = new VV;
            if (this.positions && (JV.positions = this.positions.slice(3 * xV.verticesStart, 3 * (xV.verticesCount + xV.verticesStart))), this.normals && (JV.normals = this.normals.slice(3 * xV.verticesStart, 3 * (xV.verticesCount + xV.verticesStart))), this.tangents && (JV.tangents = this.tangents.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.colors && (JV.colors = this.colors.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.uvs && (JV.uvs = this.uvs.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.uvs2 && (JV.uvs2 = this.uvs2.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.uvs3 && (JV.uvs3 = this.uvs3.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.uvs4 && (JV.uvs4 = this.uvs4.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.uvs5 && (JV.uvs5 = this.uvs5.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.uvs6 && (JV.uvs6 = this.uvs6.slice(2 * xV.verticesStart, 2 * (xV.verticesCount + xV.verticesStart))), this.matricesIndices && (JV.matricesIndices = this.matricesIndices.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.matricesIndicesExtra && (JV.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.matricesWeights && (JV.matricesWeights = this.matricesWeights.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.matricesWeightsExtra && (JV.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * xV.verticesStart, 4 * (xV.verticesCount + xV.verticesStart))), this.indices) {
              JV.indices = [];
              for (let VV = xV.indexStart; VV < xV.indexStart + xV.indexCount; VV++) JV.indices.push(this.indices[VV] - xV.verticesStart)
            }
            const YV = new rV;
            YV.indexStart = 0, YV.indexCount = JV.indices ? JV.indices.length : 0, YV.materialIndex = xV.materialIndex, YV.verticesStart = 0, YV.verticesCount = (JV.positions ? JV.positions.length : 0) / 3, JV.materialInfos = [YV], eV.push(JV)
          }
          return eV
        }
        merge(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const UV = Array.isArray(VV) ? VV.map((VV => ({
            vertexData: VV
          }))) : [{
            vertexData: VV
          }];
          return (0, wV.g)(this._mergeCoroutine(void 0, UV, eV, !1, xV, JV, YV))
        }* _mergeCoroutine(eV, xV) {
          let JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            YV = arguments.length > 3 ? arguments[3] : void 0,
            yV = arguments.length > 4 ? arguments[4] : void 0,
            pV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            QV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let nV = xV.map((VV => VV.vertexData)),
            wV = this;
          if (QV)
            for (const VV of nV) VV && (VV._validate(), !this.normals && VV.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && VV.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && VV.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && VV.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && VV.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && VV.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && VV.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && VV.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && VV.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && VV.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && VV.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && VV.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && VV.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const VV of nV)
            if (VV)
              if (QV) this.normals && !VV.normals && (VV.normals = new Float32Array(VV.positions.length)), this.tangents && !VV.tangents && (VV.tangents = new Float32Array(VV.positions.length / 3 * 4)), this.uvs && !VV.uvs && (VV.uvs = new Float32Array(VV.positions.length / 3 * 2)), this.uvs2 && !VV.uvs2 && (VV.uvs2 = new Float32Array(VV.positions.length / 3 * 2)), this.uvs3 && !VV.uvs3 && (VV.uvs3 = new Float32Array(VV.positions.length / 3 * 2)), this.uvs4 && !VV.uvs4 && (VV.uvs4 = new Float32Array(VV.positions.length / 3 * 2)), this.uvs5 && !VV.uvs5 && (VV.uvs5 = new Float32Array(VV.positions.length / 3 * 2)), this.uvs6 && !VV.uvs6 && (VV.uvs6 = new Float32Array(VV.positions.length / 3 * 2)), this.colors && !VV.colors && (VV.colors = new Float32Array(VV.positions.length / 3 * 4), VV.colors.fill(1)), this.matricesIndices && !VV.matricesIndices && (VV.matricesIndices = new Float32Array(VV.positions.length / 3 * 4)), this.matricesWeights && !VV.matricesWeights && (VV.matricesWeights = new Float32Array(VV.positions.length / 3 * 4)), this.matricesIndicesExtra && !VV.matricesIndicesExtra && (VV.matricesIndicesExtra = new Float32Array(VV.positions.length / 3 * 4)), this.matricesWeightsExtra && !VV.matricesWeightsExtra && (VV.matricesWeightsExtra = new Float32Array(VV.positions.length / 3 * 4));
              else if (VV._validate(), !this.normals !== !VV.normals || !this.tangents !== !VV.tangents || !this.uvs !== !VV.uvs || !this.uvs2 !== !VV.uvs2 || !this.uvs3 !== !VV.uvs3 || !this.uvs4 !== !VV.uvs4 || !this.uvs5 !== !VV.uvs5 || !this.uvs6 !== !VV.uvs6 || !this.colors !== !VV.colors || !this.matricesIndices !== !VV.matricesIndices || !this.matricesWeights !== !VV.matricesWeights || !this.matricesIndicesExtra !== !VV.matricesIndicesExtra || !this.matricesWeightsExtra !== !VV.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (pV) {
            let VV, JV = 0,
              YV = 0;
            const UV = [];
            let yV = null;
            const pV = [];
            for (const xV of this.splitBasedOnMaterialID()) pV.push({
              vertexData: xV,
              transform: eV
            });
            for (const eV of xV)
              if (eV.vertexData)
                for (const VV of eV.vertexData.splitBasedOnMaterialID()) pV.push({
                  vertexData: VV,
                  transform: eV.transform
                });
            pV.sort(((VV, eV) => {
              const xV = VV.vertexData.materialInfos ? VV.vertexData.materialInfos[0].materialIndex : 0,
                JV = eV.vertexData.materialInfos ? eV.vertexData.materialInfos[0].materialIndex : 0;
              return xV > JV ? 1 : xV === JV ? 0 : -1
            }));
            for (const eV of pV) {
              const xV = eV.vertexData;
              if (VV = xV.materialInfos ? xV.materialInfos[0].materialIndex : 0, yV && yV.materialIndex === VV) yV.indexCount += xV.indices.length, yV.verticesCount += xV.positions.length / 3;
              else {
                const eV = new rV;
                eV.materialIndex = VV, eV.indexStart = JV, eV.indexCount = xV.indices.length, eV.verticesStart = YV, eV.verticesCount = xV.positions.length / 3, UV.push(eV), yV = eV
              }
              JV += xV.indices.length, YV += xV.positions.length / 3
            }
            const QV = pV.splice(0, 1)[0];
            wV = QV.vertexData, eV = QV.transform, nV = pV.map((VV => VV.vertexData)), xV = pV, this.materialInfos = UV
          }
          const ZV = nV.reduce(((VV, eV) => VV + (eV.indices?.length ?? 0)), wV.indices?.length ?? 0);
          let vV = yV || nV.some((VV => VV.indices === wV.indices)) ? wV.indices?.slice() : wV.indices;
          if (ZV > 0) {
            let UV = vV?.length ?? 0;
            if (vV || (vV = new Array(ZV)), vV.length !== ZV) {
              if (Array.isArray(vV)) vV.length = ZV;
              else {
                const VV = JV || vV instanceof Uint32Array ? new Uint32Array(ZV) : new Uint16Array(ZV);
                VV.set(vV), vV = VV
              }
              eV && eV.determinant() < 0 && VV._FlipFaces(vV, 0, UV)
            }
            let yV = wV.positions ? wV.positions.length / 3 : 0;
            for (const {
                vertexData: eV,
                transform: JV
              }
              of xV)
              if (eV.indices) {
                for (let VV = 0; VV < eV.indices.length; VV++) vV[UV + VV] = eV.indices[VV] + yV;
                JV && JV.determinant() < 0 && VV._FlipFaces(vV, UV, eV.indices.length), yV += eV.positions.length / 3, UV += eV.indices.length, YV && (yield)
              }
          }
          return this.indices = vV, this.positions = VV._MergeElement(UV.j.PositionKind, wV.positions, eV, xV.map((VV => [VV.vertexData.positions, VV.transform]))), YV && (yield), wV.normals && (this.normals = VV._MergeElement(UV.j.NormalKind, wV.normals, eV, xV.map((VV => [VV.vertexData.normals, VV.transform]))), YV && (yield)), wV.tangents && (this.tangents = VV._MergeElement(UV.j.TangentKind, wV.tangents, eV, xV.map((VV => [VV.vertexData.tangents, VV.transform]))), YV && (yield)), wV.uvs && (this.uvs = VV._MergeElement(UV.j.UVKind, wV.uvs, eV, xV.map((VV => [VV.vertexData.uvs, VV.transform]))), YV && (yield)), wV.uvs2 && (this.uvs2 = VV._MergeElement(UV.j.UV2Kind, wV.uvs2, eV, xV.map((VV => [VV.vertexData.uvs2, VV.transform]))), YV && (yield)), wV.uvs3 && (this.uvs3 = VV._MergeElement(UV.j.UV3Kind, wV.uvs3, eV, xV.map((VV => [VV.vertexData.uvs3, VV.transform]))), YV && (yield)), wV.uvs4 && (this.uvs4 = VV._MergeElement(UV.j.UV4Kind, wV.uvs4, eV, xV.map((VV => [VV.vertexData.uvs4, VV.transform]))), YV && (yield)), wV.uvs5 && (this.uvs5 = VV._MergeElement(UV.j.UV5Kind, wV.uvs5, eV, xV.map((VV => [VV.vertexData.uvs5, VV.transform]))), YV && (yield)), wV.uvs6 && (this.uvs6 = VV._MergeElement(UV.j.UV6Kind, wV.uvs6, eV, xV.map((VV => [VV.vertexData.uvs6, VV.transform]))), YV && (yield)), wV.colors && (this.colors = VV._MergeElement(UV.j.ColorKind, wV.colors, eV, xV.map((VV => [VV.vertexData.colors, VV.transform]))), (void 0 !== wV.hasVertexAlpha || xV.some((VV => void 0 !== VV.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = wV.hasVertexAlpha || xV.some((VV => VV.vertexData.hasVertexAlpha))), YV && (yield)), wV.matricesIndices && (this.matricesIndices = VV._MergeElement(UV.j.MatricesIndicesKind, wV.matricesIndices, eV, xV.map((VV => [VV.vertexData.matricesIndices, VV.transform]))), YV && (yield)), wV.matricesWeights && (this.matricesWeights = VV._MergeElement(UV.j.MatricesWeightsKind, wV.matricesWeights, eV, xV.map((VV => [VV.vertexData.matricesWeights, VV.transform]))), YV && (yield)), wV.matricesIndicesExtra && (this.matricesIndicesExtra = VV._MergeElement(UV.j.MatricesIndicesExtraKind, wV.matricesIndicesExtra, eV, xV.map((VV => [VV.vertexData.matricesIndicesExtra, VV.transform]))), YV && (yield)), wV.matricesWeightsExtra && (this.matricesWeightsExtra = VV._MergeElement(UV.j.MatricesWeightsExtraKind, wV.matricesWeightsExtra, eV, xV.map((VV => [VV.vertexData.matricesWeightsExtra, VV.transform])))), this
        }
        static _MergeElement(eV, xV, JV, YV) {
          const yV = YV.filter((VV => null !== VV[0] && void 0 !== VV[0]));
          if (!xV && 0 == yV.length) return xV;
          if (!xV) return this._MergeElement(eV, yV[0][0], yV[0][1], yV.slice(1));
          const pV = yV.reduce(((VV, eV) => VV + eV[0].length), xV.length),
            QV = eV === UV.j.PositionKind ? VV._TransformVector3Coordinates : eV === UV.j.NormalKind ? VV._TransformVector3Normals : eV === UV.j.TangentKind ? VV._TransformVector4Normals : () => {};
          if (xV instanceof Float32Array) {
            const VV = new Float32Array(pV);
            VV.set(xV), JV && QV(VV, JV, 0, xV.length);
            let eV = xV.length;
            for (const [xV, JV] of yV) VV.set(xV, eV), JV && QV(VV, JV, eV, xV.length), eV += xV.length;
            return VV
          } {
            const VV = new Array(pV);
            for (let JV = 0; JV < xV.length; JV++) VV[JV] = xV[JV];
            JV && QV(VV, JV, 0, xV.length);
            let eV = xV.length;
            for (const [xV, JV] of yV) {
              for (let JV = 0; JV < xV.length; JV++) VV[eV + JV] = xV[JV];
              JV && QV(VV, JV, eV, xV.length), eV += xV.length
            }
            return VV
          }
        }
        _validate() {
          if (!this.positions) throw new ZV.j("Positions are required", ZV.g.MeshInvalidPositionsError);
          const VV = (VV, eV) => {
              const xV = (0, UV.f)(VV);
              if (eV.length % xV !== 0) throw new Error("The " + VV + "s array count must be a multiple of " + xV);
              return eV.length / xV
            },
            eV = VV(UV.j.PositionKind, this.positions),
            xV = (xV, JV) => {
              const YV = VV(xV, JV);
              if (YV !== eV) throw new Error("The " + xV + "s element count (" + YV + ") does not match the positions count (" + eV + ")")
            };
          this.normals && xV(UV.j.NormalKind, this.normals), this.tangents && xV(UV.j.TangentKind, this.tangents), this.uvs && xV(UV.j.UVKind, this.uvs), this.uvs2 && xV(UV.j.UV2Kind, this.uvs2), this.uvs3 && xV(UV.j.UV3Kind, this.uvs3), this.uvs4 && xV(UV.j.UV4Kind, this.uvs4), this.uvs5 && xV(UV.j.UV5Kind, this.uvs5), this.uvs6 && xV(UV.j.UV6Kind, this.uvs6), this.colors && xV(UV.j.ColorKind, this.colors), this.matricesIndices && xV(UV.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && xV(UV.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && xV(UV.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && xV(UV.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const eV = this.serialize();
          return VV.Parse(eV)
        }
        serialize() {
          const VV = {};
          if (this.positions && (VV.positions = Array.from(this.positions)), this.normals && (VV.normals = Array.from(this.normals)), this.tangents && (VV.tangents = Array.from(this.tangents)), this.uvs && (VV.uvs = Array.from(this.uvs)), this.uvs2 && (VV.uvs2 = Array.from(this.uvs2)), this.uvs3 && (VV.uvs3 = Array.from(this.uvs3)), this.uvs4 && (VV.uvs4 = Array.from(this.uvs4)), this.uvs5 && (VV.uvs5 = Array.from(this.uvs5)), this.uvs6 && (VV.uvs6 = Array.from(this.uvs6)), this.colors && (VV.colors = Array.from(this.colors), VV.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (VV.matricesIndices = Array.from(this.matricesIndices), VV.matricesIndicesExpanded = !0), this.matricesWeights && (VV.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (VV.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), VV.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (VV.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), VV.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            VV.materialInfos = [];
            for (const eV of this.materialInfos) {
              const xV = {
                indexStart: eV.indexStart,
                indexCount: eV.indexCount,
                materialIndex: eV.materialIndex,
                verticesStart: eV.verticesStart,
                verticesCount: eV.verticesCount
              };
              VV.materialInfos.push(xV)
            }
          }
          return VV
        }
        static ExtractFromMesh(eV, xV, JV) {
          return VV._ExtractFrom(eV, xV, JV)
        }
        static ExtractFromGeometry(eV, xV, JV) {
          return VV._ExtractFrom(eV, xV, JV)
        }
        static _ExtractFrom(eV, xV, JV) {
          const YV = new VV;
          if (eV.isVerticesDataPresent(UV.j.PositionKind) && (YV.positions = eV.getVerticesData(UV.j.PositionKind, xV, JV)), eV.isVerticesDataPresent(UV.j.NormalKind) && (YV.normals = eV.getVerticesData(UV.j.NormalKind, xV, JV)), eV.isVerticesDataPresent(UV.j.TangentKind) && (YV.tangents = eV.getVerticesData(UV.j.TangentKind, xV, JV)), eV.isVerticesDataPresent(UV.j.UVKind) && (YV.uvs = eV.getVerticesData(UV.j.UVKind, xV, JV)), eV.isVerticesDataPresent(UV.j.UV2Kind) && (YV.uvs2 = eV.getVerticesData(UV.j.UV2Kind, xV, JV)), eV.isVerticesDataPresent(UV.j.UV3Kind) && (YV.uvs3 = eV.getVerticesData(UV.j.UV3Kind, xV, JV)), eV.isVerticesDataPresent(UV.j.UV4Kind) && (YV.uvs4 = eV.getVerticesData(UV.j.UV4Kind, xV, JV)), eV.isVerticesDataPresent(UV.j.UV5Kind) && (YV.uvs5 = eV.getVerticesData(UV.j.UV5Kind, xV, JV)), eV.isVerticesDataPresent(UV.j.UV6Kind) && (YV.uvs6 = eV.getVerticesData(UV.j.UV6Kind, xV, JV)), eV.isVerticesDataPresent(UV.j.ColorKind)) {
            const VV = eV.geometry || eV,
              yV = VV.getVertexBuffer(UV.j.ColorKind),
              pV = VV.getVerticesData(UV.j.ColorKind, xV, JV);
            if (3 === yV.getSize()) {
              const VV = new Float32Array(4 * pV.length / 3);
              for (let eV = 0, xV = 0; eV < pV.length; eV += 3, xV += 4) VV[xV] = pV[eV], VV[xV + 1] = pV[eV + 1], VV[xV + 2] = pV[eV + 2], VV[xV + 3] = 1;
              YV.colors = VV
            } else {
              if (4 !== yV.getSize()) throw new Error(`Unexpected number of color components: ${yV.getSize()}`);
              YV.colors = pV
            }
          }
          return eV.isVerticesDataPresent(UV.j.MatricesIndicesKind) && (YV.matricesIndices = eV.getVerticesData(UV.j.MatricesIndicesKind, xV, JV)), eV.isVerticesDataPresent(UV.j.MatricesWeightsKind) && (YV.matricesWeights = eV.getVerticesData(UV.j.MatricesWeightsKind, xV, JV)), eV.isVerticesDataPresent(UV.j.MatricesIndicesExtraKind) && (YV.matricesIndicesExtra = eV.getVerticesData(UV.j.MatricesIndicesExtraKind, xV, JV)), eV.isVerticesDataPresent(UV.j.MatricesWeightsExtraKind) && (YV.matricesWeightsExtra = eV.getVerticesData(UV.j.MatricesWeightsExtraKind, xV, JV)), YV.indices = eV.RYV(xV, JV), YV
        }
        static CreateRibbon(VV) {
          throw (0, yV.n)("ribbonBuilder")
        }
        static CreateBox(VV) {
          throw (0, yV.n)("boxBuilder")
        }
        static CreateTiledBox(VV) {
          throw (0, yV.n)("tiledBoxBuilder")
        }
        static CreateTiledPlane(VV) {
          throw (0, yV.n)("tiledPlaneBuilder")
        }
        static CreateSphere(VV) {
          throw (0, yV.n)("sphereBuilder")
        }
        static CreateCylinder(VV) {
          throw (0, yV.n)("cylinderBuilder")
        }
        static CreateTorus(VV) {
          throw (0, yV.n)("torusBuilder")
        }
        static CreateLineSystem(VV) {
          throw (0, yV.n)("linesBuilder")
        }
        static CreateDashedLines(VV) {
          throw (0, yV.n)("linesBuilder")
        }
        static CreateGround(VV) {
          throw (0, yV.n)("groundBuilder")
        }
        static CreateTiledGround(VV) {
          throw (0, yV.n)("groundBuilder")
        }
        static CreateGroundFromHeightMap(VV) {
          throw (0, yV.n)("groundBuilder")
        }
        static CreatePlane(VV) {
          throw (0, yV.n)("planeBuilder")
        }
        static CreateDisc(VV) {
          throw (0, yV.n)("discBuilder")
        }
        static CreatePolygon(VV, eV, xV, JV, YV, UV, pV) {
          throw (0, yV.n)("polygonBuilder")
        }
        static CreateIcoSphere(VV) {
          throw (0, yV.n)("icoSphereBuilder")
        }
        static CreatePolyhedron(VV) {
          throw (0, yV.n)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || YV.o.Up();
          throw (0, yV.n)("capsuleBuilder")
        }
        static CreateTorusKnot(VV) {
          throw (0, yV.n)("torusKnotBuilder")
        }
        static ComputeNormals(VV, eV, xV, JV) {
          let UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV = !1,
            XV = !1,
            MV = !1,
            zV = !1,
            GV = 1,
            WV = 0,
            RV = null;
          JV && (NV = !!JV.facetNormals, XV = !!JV.facetPositions, MV = !!JV.facetPartitioning, GV = !0 === JV.useRightHandedSystem ? -1 : 1, WV = JV.ratio || 0, zV = !!JV.depthSort, RV = JV.distanceTo, zV && void 0 === RV && (RV = YV.o.Zero()));
          let gV = 0,
            DV = 0,
            iV = 0,
            CV = 0;
          for (MV && JV && JV.bbSize && (gV = JV.subDiv.X * WV / JV.bbSize.x, DV = JV.subDiv.Y * WV / JV.bbSize.y, iV = JV.subDiv.Z * WV / JV.bbSize.z, CV = JV.subDiv.max * JV.subDiv.max, JV.facetPartitioning.length = 0), UV = 0; UV < VV.length; UV++) xV[UV] = 0;
          const aV = eV.length / 3 | 0;
          for (UV = 0; UV < aV; UV++) {
            if (EV = 3 * eV[3 * UV], BV = EV + 1, jV = EV + 2, qV = 3 * eV[3 * UV + 1], tV = qV + 1, FV = qV + 2, TV = 3 * eV[3 * UV + 2], PV = TV + 1, AV = TV + 2, yV = VV[EV] - VV[qV], pV = VV[BV] - VV[tV], QV = VV[jV] - VV[FV], nV = VV[TV] - VV[qV], wV = VV[PV] - VV[tV], ZV = VV[AV] - VV[FV], vV = GV * (pV * ZV - QV * wV), rV = GV * (QV * nV - yV * ZV), kV = GV * (yV * wV - pV * nV), bV = Math.sqrt(vV * vV + rV * rV + kV * kV), bV = 0 === bV ? 1 : bV, vV /= bV, rV /= bV, kV /= bV, NV && JV && (JV.facetNormals[UV].x = vV, JV.facetNormals[UV].y = rV, JV.facetNormals[UV].z = kV), XV && JV && (JV.facetPositions[UV].x = (VV[EV] + VV[qV] + VV[TV]) / 3, JV.facetPositions[UV].y = (VV[BV] + VV[tV] + VV[PV]) / 3, JV.facetPositions[UV].z = (VV[jV] + VV[FV] + VV[AV]) / 3), MV && JV) {
              const eV = Math.floor((JV.facetPositions[UV].x - JV.bInfo.minimum.x * WV) * gV),
                xV = Math.floor((JV.facetPositions[UV].y - JV.bInfo.minimum.y * WV) * DV),
                YV = Math.floor((JV.facetPositions[UV].z - JV.bInfo.minimum.z * WV) * iV),
                yV = Math.floor((VV[EV] - JV.bInfo.minimum.x * WV) * gV),
                pV = Math.floor((VV[BV] - JV.bInfo.minimum.y * WV) * DV),
                QV = Math.floor((VV[jV] - JV.bInfo.minimum.z * WV) * iV),
                nV = Math.floor((VV[qV] - JV.bInfo.minimum.x * WV) * gV),
                wV = Math.floor((VV[tV] - JV.bInfo.minimum.y * WV) * DV),
                ZV = Math.floor((VV[FV] - JV.bInfo.minimum.z * WV) * iV),
                vV = Math.floor((VV[TV] - JV.bInfo.minimum.x * WV) * gV),
                rV = Math.floor((VV[PV] - JV.bInfo.minimum.y * WV) * DV),
                kV = Math.floor((VV[AV] - JV.bInfo.minimum.z * WV) * iV),
                bV = yV + JV.subDiv.max * pV + CV * QV,
                NV = nV + JV.subDiv.max * wV + CV * ZV,
                XV = vV + JV.subDiv.max * rV + CV * kV,
                MV = eV + JV.subDiv.max * xV + CV * YV;
              JV.facetPartitioning[MV] = JV.facetPartitioning[MV] ? JV.facetPartitioning[MV] : [], JV.facetPartitioning[bV] = JV.facetPartitioning[bV] ? JV.facetPartitioning[bV] : [], JV.facetPartitioning[NV] = JV.facetPartitioning[NV] ? JV.facetPartitioning[NV] : [], JV.facetPartitioning[XV] = JV.facetPartitioning[XV] ? JV.facetPartitioning[XV] : [], JV.facetPartitioning[bV].push(UV), NV != bV && JV.facetPartitioning[NV].push(UV), XV != NV && XV != bV && JV.facetPartitioning[XV].push(UV), MV != bV && MV != NV && MV != XV && JV.facetPartitioning[MV].push(UV)
            }
            if (zV && JV && JV.facetPositions) {
              const VV = JV.depthSortedFacets[UV];
              VV.ind = 3 * UV, VV.sqDistance = YV.o.DistanceSquared(JV.facetPositions[UV], RV)
            }
            xV[EV] += vV, xV[BV] += rV, xV[jV] += kV, xV[qV] += vV, xV[tV] += rV, xV[FV] += kV, xV[TV] += vV, xV[PV] += rV, xV[AV] += kV
          }
          for (UV = 0; UV < xV.length / 3; UV++) vV = xV[3 * UV], rV = xV[3 * UV + 1], kV = xV[3 * UV + 2], bV = Math.sqrt(vV * vV + rV * rV + kV * kV), bV = 0 === bV ? 1 : bV, vV /= bV, rV /= bV, kV /= bV, xV[3 * UV] = vV, xV[3 * UV + 1] = rV, xV[3 * UV + 2] = kV
        }
        static _ComputeSides(eV, xV, JV, UV, yV, pV, QV) {
          const nV = JV.length,
            wV = UV.length;
          let ZV, vV;
          switch (eV = eV || VV.DEFAULTSIDE) {
            case VV.FRONTSIDE:
              break;
            case VV.BACKSIDE:
              for (ZV = 0; ZV < nV; ZV += 3) {
                const VV = JV[ZV];
                JV[ZV] = JV[ZV + 2], JV[ZV + 2] = VV
              }
              for (vV = 0; vV < wV; vV++) UV[vV] = -UV[vV];
              break;
            case VV.DOUBLESIDE: {
              const VV = xV.length,
                eV = VV / 3;
              for (let JV = 0; JV < VV; JV++) xV[VV + JV] = xV[JV];
              for (ZV = 0; ZV < nV; ZV += 3) JV[ZV + nV] = JV[ZV + 2] + eV, JV[ZV + 1 + nV] = JV[ZV + 1] + eV, JV[ZV + 2 + nV] = JV[ZV] + eV;
              for (vV = 0; vV < wV; vV++) UV[wV + vV] = -UV[vV];
              const rV = yV.length;
              let kV;
              for (kV = 0; kV < rV; kV++) yV[kV + rV] = yV[kV];
              for (pV = pV || new YV.q(0, 0, 1, 1), QV = QV || new YV.q(0, 0, 1, 1), kV = 0, ZV = 0; ZV < rV / 2; ZV++) yV[kV] = pV.x + (pV.z - pV.x) * yV[kV], yV[kV + 1] = pV.y + (pV.w - pV.y) * yV[kV + 1], yV[kV + rV] = QV.x + (QV.z - QV.x) * yV[kV + rV], yV[kV + rV + 1] = QV.y + (QV.w - QV.y) * yV[kV + rV + 1], kV += 2;
              break
            }
          }
        }
        static Parse(eV) {
          const xV = new VV,
            JV = eV.positions;
          JV && xV.set(JV, UV.j.PositionKind);
          const YV = eV.normals;
          YV && xV.set(YV, UV.j.NormalKind);
          const yV = eV.tangents;
          yV && xV.set(yV, UV.j.TangentKind);
          const QV = eV.uvs;
          QV && xV.set(QV, UV.j.UVKind);
          const nV = eV.uvs2;
          nV && xV.set(nV, UV.j.UV2Kind);
          const wV = eV.uvs3;
          wV && xV.set(wV, UV.j.UV3Kind);
          const ZV = eV.uvs4;
          ZV && xV.set(ZV, UV.j.UV4Kind);
          const vV = eV.uvs5;
          vV && xV.set(vV, UV.j.UV5Kind);
          const kV = eV.uvs6;
          kV && xV.set(kV, UV.j.UV6Kind);
          const bV = eV.colors;
          bV && (xV.set(pV.h.CheckColors4(bV, JV.length / 3), UV.j.ColorKind), void 0 !== eV.hasVertexAlpha && (xV.hasVertexAlpha = eV.hasVertexAlpha));
          const EV = eV.matricesIndices;
          EV && xV.set(EV, UV.j.MatricesIndicesKind);
          const BV = eV.matricesWeights;
          BV && xV.set(BV, UV.j.MatricesWeightsKind);
          const jV = eV.indices;
          jV && (xV.indices = jV);
          const qV = eV.materialInfos;
          if (qV) {
            xV.materialInfos = [];
            for (const VV of qV) {
              const eV = new rV;
              eV.indexCount = VV.indexCount, eV.indexStart = VV.indexStart, eV.verticesCount = VV.verticesCount, eV.verticesStart = VV.verticesStart, eV.materialIndex = VV.materialIndex, xV.materialInfos.push(eV)
            }
          }
          return xV
        }
        static ImportVertexData(eV, xV) {
          const JV = VV.Parse(eV);
          xV.setAllVerticesData(JV, eV.updatable)
        }
      }, (() => {
        const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [nV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], xV = [nV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], kV = [nV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], bV = [nV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, JV.i)(VV, null, eV, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: VV => "_TransformVector3Coordinates" in VV,
            get: VV => VV._TransformVector3Coordinates
          },
          metadata: YV
        }, null, EV), (0, JV.i)(VV, null, xV, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: VV => "_TransformVector3Normals" in VV,
            get: VV => VV._TransformVector3Normals
          },
          metadata: YV
        }, null, EV), (0, JV.i)(VV, null, kV, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: VV => "_TransformVector4Normals" in VV,
            get: VV => VV._TransformVector4Normals
          },
          metadata: YV
        }, null, EV), (0, JV.i)(VV, null, bV, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: VV => "_FlipFaces" in VV,
            get: VV => VV._FlipFaces
          },
          metadata: YV
        }, null, EV), YV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YV
        })
      })(), VV.FRONTSIDE = ((0, JV.l)(VV, EV), 0), VV.BACKSIDE = 1, VV.DOUBLESIDE = 2, VV.DEFAULTSIDE = 0, VV._UniqueIdGenerator = 0, VV
    })()
  },
  41744: (VV, eV, xV) => {
    var JV = xV(38269),
      YV = xV(39870),
      UV = xV(41566),
      yV = xV(41664),
      pV = xV(41394);
    const QV = "bakedVertexAnimationSettingsInstanced";

    function nV(VV) {
      const eV = VV.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return eV instanceof Float32Array || eV instanceof Uint16Array
    }

    function wV(VV, eV, xV, JV) {
      xV.HVV(Number.POSITIVE_INFINITY), JV.HVV(Number.NEGATIVE_INFINITY);
      for (let YV = 0; YV < 3 * eV; YV += 3) {
        const eV = VV[YV],
          UV = VV[YV + 1],
          yV = VV[YV + 2];
        eV < xV.x && (xV.x = eV), UV < xV.y && (xV.y = UV), yV < xV.z && (xV.z = yV), eV > JV.x && (JV.x = eV), UV > JV.y && (JV.y = UV), yV > JV.z && (JV.z = yV)
      }
    }

    function ZV(VV, eV, xV) {
      xV && (VV.x -= VV.x * xV.x + xV.y, VV.y -= VV.y * xV.x + xV.y, VV.z -= VV.z * xV.x + xV.y, eV.x += eV.x * xV.x + xV.y, eV.y += eV.y * xV.x + xV.y, eV.z += eV.z * xV.x + xV.y)
    }

    function vV(VV, eV, xV, YV, UV) {
      const yV = JV.l.Ik[7],
        pV = JV.l.Ik[8];
      for (let QV = 0; QV < 2; ++QV)
        for (let nV = 0; nV < 2; ++nV)
          for (let wV = 0; wV < 2; ++wV) yV.set(QV ? eV.x : VV.x, nV ? eV.y : VV.y, wV ? eV.z : VV.z), JV.o.TransformCoordinatesToRef(yV, xV, pV), YV.minimizeInPlace(pV), UV.maximizeInPlace(pV)
    }

    function rV(VV, eV, xV, YV, UV) {
      const yV = JV.l.Ik[7];
      for (let pV = 0; pV < 3 * eV; pV += 3) JV.o.TransformCoordinatesFromFloatsToRef(VV[pV], VV[pV + 1], VV[pV + 2], xV, yV), YV.minimizeInPlace(yV), UV.maximizeInPlace(yV)
    }
    let kV = !1;
    kV || (kV = !0, yV.b.prototype.thinInstanceAdd = function(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.dD().sk().getCaps().instancedArrays) return YV.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(VV) ? VV.length : 1);
      const xV = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(VV))
        for (let JV = 0; JV < VV.length; ++JV) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, VV[JV], JV === VV.length - 1 && eV);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, VV, eV);
      return xV
    }, yV.b.prototype.thinInstanceAddSelf = function() {
      let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(JV.d.IdentityReadOnly, VV)
    }, yV.b.prototype.thinInstanceRegisterAttribute = function(VV, eV) {
      VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), this.removeVerticesData(VV), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[VV] = eV, this._userThinInstanceBuffersStorage.sizes[VV] = eV * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[VV] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[VV]), this._userThinInstanceBuffersStorage.vertexBuffers[VV] = new pV.j(this.sk(), this._userThinInstanceBuffersStorage.data[VV], VV, !0, !1, eV, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[VV])
    }, yV.b.prototype.thinInstanceSetMatrixAt = function(VV, eV) {
      let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || VV >= this._thinInstanceDataStorage.instancesCount) return !1;
      const JV = this._thinInstanceDataStorage.matrixData;
      return eV.copyToArray(JV, 16 * VV), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[VV] = eV), xV && (this.weV("matrix"), this.Vb || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, yV.b.prototype.thinInstanceSetAttributeAt = function(VV, eV, xV) {
      let JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[VV] || eV >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(VV, 0), this._userThinInstanceBuffersStorage.data[VV].set(xV, eV * this._userThinInstanceBuffersStorage.strides[VV]), JV && this.weV(VV), !0)
    }, Object.defineProperty(yV.b.prototype, "VeV", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(VV) {
        const eV = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        VV <= (eV ? eV.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = VV)
      },
      enumerable: !0,
      configurable: !0
    }), yV.b.prototype._thinInstanceCreateMatrixBuffer = function(VV, eV) {
      let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const JV = new pV.d(this.sk(), eV, !xV, 16, !1, !0);
      for (let YV = 0; YV < 4; YV++) this.setVerticesBuffer(JV.createVertexBuffer(VV + YV, 4 * YV, 4));
      return JV
    }, yV.b.prototype.beV = function(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (xV = xV || 16, "matrix" === VV) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = eV ? eV.length : 32 * xV, this._thinInstanceDataStorage.matrixData = eV, this._thinInstanceDataStorage.worldMatrices = null, null !== eV ? (this._thinInstanceDataStorage.instancesCount = eV.length / xV, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", eV, JV), this.Vb || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Vb || this.refreshBoundingInfo());
      else if ("previousMatrix" === VV) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = eV, null !== eV && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", eV, JV));
      else if ("splatIndex" === VV && eV) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = eV.length / xV, this._userThinInstanceBuffersStorage.data[VV] = eV, this._userThinInstanceBuffersStorage.strides[VV] = xV, this._userThinInstanceBuffersStorage.sizes[VV] = eV.length;
        const JV = new pV.d(this.sk(), eV, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = JV;
        for (let eV = 0; eV < 4; eV++) this.setVerticesBuffer(JV.createVertexBuffer(VV + eV, 4 * eV, 4))
      } else VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), null === eV ? this._userThinInstanceBuffersStorage?.data[VV] && (this.removeVerticesData(VV), delete this._userThinInstanceBuffersStorage.data[VV], delete this._userThinInstanceBuffersStorage.strides[VV], delete this._userThinInstanceBuffersStorage.sizes[VV], delete this._userThinInstanceBuffersStorage.vertexBuffers[VV]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[VV] = eV, this._userThinInstanceBuffersStorage.strides[VV] = xV, this._userThinInstanceBuffersStorage.sizes[VV] = eV.length, this._userThinInstanceBuffersStorage.vertexBuffers[VV] = new pV.j(this.sk(), eV, VV, !JV, !1, xV, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[VV]))
    }, yV.b.prototype.weV = function(VV) {
      "matrix" === VV ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(VV), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === VV ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(VV), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === VV ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[VV], 0, this._thinInstanceDataStorage.instancesCount) : (VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[VV] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[VV].isUpdatable() && this._thinInstanceRecreateBuffer(VV), this._userThinInstanceBuffersStorage.vertexBuffers[VV].updateDirectly(this._userThinInstanceBuffersStorage.data[VV], 0)))
    }, yV.b.prototype.thinInstancePartialBufferUpdate = function(VV, eV, xV) {
      if ("matrix" === VV) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof eV ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * xV * Float32Array.BYTES_PER_ELEMENT, 16 * eV), 16 * xV) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(eV, xV));
      else if (VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[VV]) {
        const JV = this._userThinInstanceBuffersStorage.vertexBuffers[VV];
        if ("number" === typeof eV) {
          const JV = new Float32Array(this._userThinInstanceBuffersStorage.data[VV].buffer, this._userThinInstanceBuffersStorage.data[VV].byteOffset + xV * this._userThinInstanceBuffersStorage.strides[VV] * Float32Array.BYTES_PER_ELEMENT, eV * this._userThinInstanceBuffersStorage.strides[VV]);
          this._userThinInstanceBuffersStorage.vertexBuffers[VV].updateDirectly(JV, xV * this._userThinInstanceBuffersStorage.strides[VV])
        } else JV.updateDirectly(eV, xV)
      }
    }, yV.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const VV = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let eV = 0; eV < this._thinInstanceDataStorage.instancesCount; ++eV) this._thinInstanceDataStorage.worldMatrices[eV] = JV.d.FromArray(VV, 16 * eV)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, yV.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const yV = this._thinInstanceDataStorage.boundingVectors;
      if (VV || !this.rawBoundingInfo) {
        if (yV.length = 0, YV && function(VV, eV, xV) {
            const YV = VV._userThinInstanceBuffersStorage,
              yV = YV?.data[QV],
              kV = YV?.strides[QV];
            if (!yV || !kV || kV < 4 || !nV(VV)) return !1;
            const bV = VV._thinInstanceDataStorage.matrixData;
            if (!bV) return !1;
            const EV = {},
              BV = JV.l.Vector4[0],
              jV = JV.l.Ik[1],
              qV = JV.l.Ik[2],
              tV = JV.l.Ik[3],
              FV = JV.l.Ik[4],
              TV = JV.l.Ik[5],
              PV = JV.l.Ik[6],
              AV = JV.l.Matrix[2],
              NV = VV.geometry ? VV.geometry.boundingBias : null,
              XV = VV.getTotalVertices();
            jV.HVV(Number.POSITIVE_INFINITY), qV.HVV(Number.NEGATIVE_INFINITY), tV.HVV(Number.POSITIVE_INFINITY), FV.HVV(Number.NEGATIVE_INFINITY);
            for (let UV = 0; UV < VV._thinInstanceDataStorage.instancesCount; ++UV) {
              const eV = UV * kV;
              BV.set(yV[eV], yV[eV + 1], yV[eV + 2], yV[eV + 3]);
              const YV = VV._getData({
                applyMorph: xV,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: BV,
                updatePositionsArray: !1,
                cache: EV
              }, null, pV.j.PositionKind);
              if (!YV) return !1;
              wV(YV, XV, TV, PV), ZV(TV, PV, NV), jV.minimizeInPlace(TV), qV.maximizeInPlace(PV), JV.d.FromArrayToRef(bV, 16 * UV, AV), NV ? vV(TV, PV, AV, tV, FV) : rV(YV, XV, AV, tV, FV)
            }
            return !(!isFinite(jV.x) || !isFinite(tV.x)) && (VV.qL().reConstruct(tV, FV), VV.rawBoundingInfo = new UV.b(jV, qV), function(VV, eV) {
              VV.length = 0;
              for (let xV = 0; xV < eV.boundingBox.vectors.length; ++xV) VV.push(eV.boundingBox.vectors[xV].clone())
            }(eV, VV.rawBoundingInfo), VV._updateBoundingInfo(), !0)
          }(this, yV, xV)) return;
        YV && this.bakedVertexAnimationManager?.isEnabled && nV(this) ? this.refreshBoundingInfo({
          applySkeleton: eV,
          applyMorph: xV,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(eV, xV);
        const VV = this.qL();
        this.rawBoundingInfo = new UV.b(VV.minimum, VV.maximum)
      }
      const kV = this.qL(),
        bV = this._thinInstanceDataStorage.matrixData;
      if (0 === yV.length)
        for (let JV = 0; JV < kV.boundingBox.vectors.length; ++JV) yV.push(kV.boundingBox.vectors[JV].clone());
      JV.l.Ik[0].HVV(Number.POSITIVE_INFINITY), JV.l.Ik[1].HVV(Number.NEGATIVE_INFINITY);
      for (let UV = 0; UV < this._thinInstanceDataStorage.instancesCount; ++UV) {
        JV.d.FromArrayToRef(bV, 16 * UV, JV.l.Matrix[0]);
        for (let VV = 0; VV < yV.length; ++VV) JV.o.TransformCoordinatesToRef(yV[VV], JV.l.Matrix[0], JV.l.Ik[2]), JV.l.Ik[0].minimizeInPlace(JV.l.Ik[2]), JV.l.Ik[1].maximizeInPlace(JV.l.Ik[2])
      }
      kV.reConstruct(JV.l.Ik[0], JV.l.Ik[1]), this._updateBoundingInfo()
    }, yV.b.prototype._thinInstanceRecreateBuffer = function(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === VV ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, eV)) : "previousMatrix" === VV ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, eV)) : (VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[VV]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[VV] = new pV.j(this.sk(), this._userThinInstanceBuffersStorage.data[VV], VV, !eV, !1, this._userThinInstanceBuffersStorage.strides[VV], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[VV]))
    }, yV.b.prototype._thinInstanceUpdateBufferSize = function(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      VV === pV.j.ColorKind && (VV = pV.j.ColorInstanceKind);
      const xV = "matrix" === VV;
      if (!xV && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[VV])) return;
      const JV = xV ? 16 : this._userThinInstanceBuffersStorage.strides[VV],
        YV = xV ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[VV];
      let UV = xV ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[VV];
      const yV = (this._thinInstanceDataStorage.instancesCount + eV) * JV;
      let QV = YV;
      for (; QV < yV;) QV *= 2;
      if (!UV || YV != QV) {
        if (UV) {
          const VV = new Float32Array(QV);
          VV.set(UV, 0), UV = VV
        } else UV = new Float32Array(QV);
        xV ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", UV, !1), this._thinInstanceDataStorage.matrixData = UV, this._thinInstanceDataStorage.matrixBufferSize = QV, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", UV, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[VV]?.dispose(), this._userThinInstanceBuffersStorage.data[VV] = UV, this._userThinInstanceBuffersStorage.sizes[VV] = QV, this._userThinInstanceBuffersStorage.vertexBuffers[VV] = new pV.j(this.sk(), UV, VV, !0, !1, JV, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[VV]))
      }
    }, yV.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, yV.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41695: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => jV,
      f: () => bV
    });
    var JV, YV, UV, yV, pV = xV(41257),
      QV = xV(41263),
      nV = xV(41279),
      wV = xV(38296),
      ZV = xV(38269),
      vV = xV(41486),
      rV = xV(38318),
      kV = xV(41138);
    let bV = (() => {
      var VV;
      let eV, xV, JV, YV, UV, yV, rV, kV, bV, EV = vV.e,
        BV = [],
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        NV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [];
      return VV = class extends EV {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(eV) {
          this._billboardMode !== eV && (this._billboardMode = eV, this._cache.useBillboardPosition = 0 !== (this._billboardMode & VV.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(VV) {
          this._infiniteDistance !== VV && (this._infiniteDistance = VV)
        }
        constructor(eV) {
          let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(eV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new ZV.o(0, 0, 1), this._up = new ZV.o(0, 1, 0), this._right = new ZV.o(1, 0, 0), this._position = (0, pV.l)(this, BV, ZV.o.Zero()), this._rotation = ((0, pV.l)(this, jV), (0, pV.l)(this, qV, ZV.o.Zero())), this._rotationQuaternion = ((0, pV.l)(this, tV), (0, pV.l)(this, FV, null)), this._scaling = ((0, pV.l)(this, TV), (0, pV.l)(this, PV, ZV.o.One())), this._transformToBoneReferal = ((0, pV.l)(this, AV), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, pV.l)(this, NV, VV.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, pV.l)(this, XV), (0, pV.l)(this, MV, 1)), this._infiniteDistance = ((0, pV.l)(this, zV), (0, pV.l)(this, GV, !1)), this.ignoreNonUniformScaling = ((0, pV.l)(this, WV), (0, pV.l)(this, RV, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, pV.l)(this, gV), (0, pV.l)(this, DV, !1)), this._poseMatrix = ((0, pV.l)(this, iV), null), this._localMatrix = ZV.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = ZV.o.Zero(), this._absoluteScaling = ZV.o.Zero(), this._absoluteRotationQuaternion = ZV.h.Identity(), this._pivotMatrix = ZV.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new wV.c, this._nonUniformScaling = !1, xV && this.dD().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(VV) {
          this._position = VV, this._markAsDirtyInternal()
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
        set rotation(VV) {
          this._rotation = VV, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get WZ() {
          return this._scaling
        }
        set WZ(VV) {
          this._scaling = VV, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(VV) {
          this._rotationQuaternion = VV, VV && this._rotation.HVV(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return ZV.o.TransformNormalFromFloatsToRef(0, 0, this.dD().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return ZV.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return ZV.o.TransformNormalFromFloatsToRef(this.dD().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(VV) {
          return this._poseMatrix ? (this._poseMatrix.iG(VV), this) : (this._poseMatrix = VV.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = ZV.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const eV = this._cache;
          return this._billboardMode === eV.billboardMode && this._billboardMode === VV.BILLBOARDMODE_NONE && (!eV.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const VV = this._cache;
          VV.localMatrixUpdated = !1, VV.billboardMode = -1, VV.infiniteDistance = !1, VV.useBillboardPosition = !1
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
        setPreTransformMatrix(VV) {
          return this.setPivotMatrix(VV, !1)
        }
        setPivotMatrix(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.iG(VV), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = eV, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = ZV.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            eV = arguments.length > 1 ? arguments[1] : void 0,
            xV = arguments.length > 2 ? arguments[2] : void 0;
          const JV = this.clone("Clone of " + (this.name || this.id), VV || this.parent, !0);
          JV && xV && xV(this, JV);
          for (const YV of this.getChildTransformNodes(!0)) YV.instantiateHierarchy(JV, eV, xV);
          return JV
        }
        nC() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return VV ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.HVV(0), this._rotationQuaternion = this._rotationQuaternion || ZV.h.Identity(), VV.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = VV, this._absolutePosition.FeV(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get EQV() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(VV) {
          if (!VV) return this;
          let eV, xV, JV;
          if (void 0 === VV.x) {
            if (arguments.length < 3) return this;
            eV = arguments[0], xV = arguments[1], JV = arguments[2]
          } else eV = VV.x, xV = VV.y, JV = VV.z;
          if (this.parent) {
            const VV = ZV.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(VV), ZV.o.TransformCoordinatesFromFloatsToRef(eV, xV, JV, VV, this.position)
          } else this.position.x = eV, this.position.y = xV, this.position.z = JV;
          return this._absolutePosition.iG(VV), this
        }
        setPositionWithLocalVector(VV) {
          return this.computeWorldMatrix(), this.position = ZV.o.TransformNormal(VV, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const VV = ZV.l.Matrix[0];
          return this._localMatrix.invertToRef(VV), ZV.o.TransformNormal(this.position, VV)
        }
        locallyTranslate(VV) {
          return this.computeWorldMatrix(!0), this.position = ZV.o.TransformCoordinates(VV, this._localMatrix), this
        }
        lookAt(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const yV = VV._LookAtVectorCache,
            pV = 0 === UV ? this.position : this.getAbsolutePosition();
          if (eV.subtractToRef(pV, yV), this.setDirection(yV, xV, JV, YV), 1 === UV && this.parent)
            if (this.rotationQuaternion) {
              const VV = ZV.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(VV);
              const eV = ZV.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(eV), eV.invert(), VV.multiplyToRef(eV, VV), this.rotationQuaternion.fromRotationMatrix(VV)
            } else {
              const VV = ZV.l.Quaternion[0];
              ZV.h.FromEulerVectorToRef(this.rotation, VV);
              const eV = ZV.l.Matrix[0];
              VV.toRotationMatrix(eV);
              const xV = ZV.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(xV), xV.invert(), eV.multiplyToRef(xV, eV), VV.fromRotationMatrix(eV), VV.toEulerAnglesToRef(this.rotation)
            } return this
        }
        L_(VV) {
          const eV = ZV.o.Zero();
          return this.getDirectionToRef(VV, eV), eV
        }
        getDirectionToRef(VV, eV) {
          return ZV.o.TransformNormalToRef(VV, this.getWorldMatrix(), eV), this
        }
        setDirection(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const YV = -Math.atan2(VV.z, VV.x) + Math.PI / 2,
            UV = Math.sqrt(VV.x * VV.x + VV.z * VV.z),
            yV = -Math.atan2(VV.y, UV);
          return this.rotationQuaternion ? ZV.h.RotationYawPitchRollToRef(YV + eV, yV + xV, JV, this.rotationQuaternion) : (this.rotation.x = yV + xV, this.rotation.y = YV + eV, this.rotation.z = JV), this
        }
        setPivotPoint(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.dD().getRenderId() && this.computeWorldMatrix(!0);
          const xV = this.getWorldMatrix();
          if (1 == eV) {
            const eV = ZV.l.Matrix[0];
            xV.invertToRef(eV), VV = ZV.o.TransformCoordinates(VV, eV)
          }
          return this.setPivotMatrix(ZV.d.Translation(-VV.x, -VV.y, -VV.z), !0)
        }
        getPivotPoint() {
          const VV = ZV.o.Zero();
          return this.getPivotPointToRef(VV), VV
        }
        getPivotPointToRef(VV) {
          return VV.x = -this._pivotMatrix.m[12], VV.y = -this._pivotMatrix.m[13], VV.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const VV = ZV.o.Zero();
          return this.getAbsolutePivotPointToRef(VV), VV
        }
        getAbsolutePivotPointToRef(VV) {
          return this.getPivotPointToRef(VV), ZV.o.TransformCoordinatesToRef(VV, this.getWorldMatrix(), VV), this
        }
        nJV(VV) {
          if (this._isDirty) return this;
          if (this._children)
            for (const eV of this._children) eV.nJV(VV);
          return super.nJV(VV)
        }
        setParent(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!eV && !this.parent) return this;
          const YV = ZV.l.Quaternion[0],
            UV = ZV.l.Ik[0],
            yV = ZV.l.Ik[1],
            pV = ZV.l.Matrix[1];
          ZV.d.IdentityToRef(pV);
          const QV = ZV.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let nV = this.rotationQuaternion;
          return nV || (nV = VV._TmpRotation, ZV.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, nV)), ZV.d.ComposeToRef(this.WZ, nV, this.position, QV), this.parent && QV.multiplyToRef(this.parent.computeWorldMatrix(!0), QV), eV && (eV.computeWorldMatrix(!0).invertToRef(pV), QV.multiplyToRef(pV, QV)), QV.decompose(yV, YV, UV, xV ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.iG(YV) : YV.toEulerAnglesToRef(this.rotation), this.WZ.iG(yV), this.position.iG(UV), this.parent = eV, JV && this.setPivotMatrix(ZV.d.Identity()), this
        }
        addChild(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return VV.setParent(this, eV), this
        }
        removeChild(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return VV.parent !== this || VV.setParent(null, eV), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(VV) {
          return this._nonUniformScaling !== VV && (this._nonUniformScaling = VV, !0)
        }
        attachToBone(VV, eV) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = eV, this.parent = VV, VV.getSkeleton().prepare(!0), VV.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = VV ? this._currentParentWhenAttachingToBone : null, this) : (VV && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(eV, xV, JV) {
          let YV;
          if (eV.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.HVV(0)), JV && 0 !== JV) {
            if (this.parent) {
              const VV = this.parent.getWorldMatrix(),
                JV = ZV.l.Matrix[0];
              VV.invertToRef(JV), eV = ZV.o.TransformNormal(eV, JV), VV.determinant() < 0 && (xV *= -1)
            }
            YV = ZV.h.RotationAxisToRef(eV, xV, VV._RotationAxisCache), YV.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else YV = ZV.h.RotationAxisToRef(eV, xV, VV._RotationAxisCache), this.rotationQuaternion.multiplyToRef(YV, this.rotationQuaternion);
          return this
        }
        rotateAround(VV, eV, xV) {
          eV.normalize(), this.rotationQuaternion || (this.rotationQuaternion = ZV.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.HVV(0));
          const JV = ZV.l.Ik[0],
            YV = ZV.l.Ik[1],
            UV = ZV.l.Ik[2],
            yV = ZV.l.Quaternion[0],
            pV = ZV.l.Matrix[0],
            QV = ZV.l.Matrix[1],
            nV = ZV.l.Matrix[2],
            wV = ZV.l.Matrix[3];
          return VV.subtractToRef(this.position, JV), ZV.d.TranslationToRef(JV.x, JV.y, JV.z, pV), ZV.d.TranslationToRef(-JV.x, -JV.y, -JV.z, QV), ZV.d.RotationAxisToRef(eV, xV, nV), QV.multiplyToRef(nV, wV), wV.multiplyToRef(pV, wV), wV.decompose(YV, yV, UV), this.position.addInPlace(UV), yV.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(VV, eV, xV) {
          const JV = VV.scale(eV);
          if (xV && 0 !== xV) this.setAbsolutePosition(this.getAbsolutePosition().add(JV));
          else {
            const VV = this.getPositionExpressedInLocalSpace().add(JV);
            this.setPositionWithLocalVector(VV)
          }
          return this
        }
        addRotation(VV, eV, xV) {
          let JV;
          this.rotationQuaternion ? JV = this.rotationQuaternion : (JV = ZV.l.Quaternion[1], ZV.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, JV));
          const YV = ZV.l.Quaternion[0];
          return ZV.h.RotationYawPitchRollToRef(eV, VV, xV, YV), JV.multiplyInPlace(YV), this.rotationQuaternion || JV.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== VV.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const JV = this.dD().getRenderId();
          if (!this._isDirty && !eV && (this._currentRenderId === JV || this.isSynchronized())) return this._currentRenderId = JV, this._worldMatrix;
          xV = xV || this.dD().activeCamera, this._updateCache();
          const YV = this._cache;
          YV.pivotMatrixUpdated = !1, YV.billboardMode = this.billboardMode, YV.infiniteDistance = this.infiniteDistance, YV.parent = this._parentNode, this._currentRenderId = JV, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const UV = this._getEffectiveParent(),
            yV = VV._TmpScaling;
          let pV, QV = this._position;
          if (this._infiniteDistance && !this.parent && xV) {
            const eV = xV.getWorldMatrix().m;
            QV = VV._TmpTranslation, QV.FeV(this._position.x + eV[12], this._position.y + eV[13], this._position.z + eV[14])
          }
          if (yV.FeV(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, pV = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(ZV.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.FeV(0, 0, 0))
            }
          } else pV = VV._TmpRotation, ZV.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, pV);
          if (this._usePivotMatrix) {
            const VV = ZV.l.Matrix[1];
            ZV.d.ScalingToRef(yV.x, yV.y, yV.z, VV);
            const eV = ZV.l.Matrix[0];
            pV.toRotationMatrix(eV), this._pivotMatrix.multiplyToRef(VV, ZV.l.Matrix[4]), ZV.l.Matrix[4].multiplyToRef(eV, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(QV.x, QV.y, QV.z)
          } else ZV.d.ComposeToRef(yV, pV, QV, this._localMatrix);
          if (UV && UV.getWorldMatrix) {
            if (eV && UV.computeWorldMatrix(eV), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const VV = this.parent;
                VV.getSkeleton().prepare(), VV.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), ZV.l.Matrix[7])
              } else ZV.l.Matrix[7].iG(UV.getWorldMatrix());
              const eV = ZV.l.Ik[5],
                xV = ZV.l.Ik[6],
                JV = ZV.l.Quaternion[0];
              ZV.l.Matrix[7].decompose(xV, JV, eV), ZV.d.ScalingToRef(xV.x, xV.y, xV.z, ZV.l.Matrix[7]), ZV.l.Matrix[7].setTranslation(eV), VV.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(JV, eV), this._localMatrix.setTranslation(eV)), this._localMatrix.multiplyToRef(ZV.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const VV = this.parent;
              VV.getSkeleton().prepare(), this._localMatrix.multiplyToRef(VV.getFinalMatrix(), ZV.l.Matrix[6]), ZV.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(UV.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.iG(this._localMatrix);
          if (xV && this.billboardMode)
            if (YV.useBillboardPosition) {
              const eV = ZV.l.Ik[0];
              this._worldMatrix.getTranslationToRef(eV);
              const JV = xV.globalPosition;
              this._worldMatrix.invertToRef(ZV.l.Matrix[1]);
              const YV = ZV.l.Ik[1];
              ZV.o.TransformCoordinatesToRef(JV, ZV.l.Matrix[1], YV), YV.normalize();
              const UV = -Math.atan2(YV.z, YV.x) + Math.PI / 2,
                yV = Math.sqrt(YV.x * YV.x + YV.z * YV.z),
                pV = -Math.atan2(YV.y, yV);
              if (ZV.h.RotationYawPitchRollToRef(UV, pV, 0, ZV.l.Quaternion[0]), (this.billboardMode & VV.BILLBOARDMODE_ALL) !== VV.BILLBOARDMODE_ALL) {
                const eV = ZV.l.Ik[1];
                ZV.l.Quaternion[0].toEulerAnglesToRef(eV), (this.billboardMode & VV.BILLBOARDMODE_X) !== VV.BILLBOARDMODE_X && (eV.x = 0), (this.billboardMode & VV.BILLBOARDMODE_Y) !== VV.BILLBOARDMODE_Y && (eV.y = 0), (this.billboardMode & VV.BILLBOARDMODE_Z) !== VV.BILLBOARDMODE_Z && (eV.z = 0), ZV.d.RotationYawPitchRollToRef(eV.y, eV.x, eV.z, ZV.l.Matrix[0])
              } else ZV.d.FromQuaternionToRef(ZV.l.Quaternion[0], ZV.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZV.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZV.l.Ik[0])
            } else {
              const eV = ZV.l.Ik[0];
              this._worldMatrix.getTranslationToRef(eV), ZV.l.Matrix[1].iG(xV.getViewMatrix());
              const JV = this.dD().useRightHandedSystem;
              if (JV && ZV.l.Matrix[1].multiplyToRef(VV._TmpRHRestore, ZV.l.Matrix[1]), ZV.l.Matrix[1].setTranslationFromFloats(0, 0, 0), ZV.l.Matrix[1].invertToRef(ZV.l.Matrix[0]), (this.billboardMode & VV.BILLBOARDMODE_ALL) !== VV.BILLBOARDMODE_ALL) {
                ZV.l.Matrix[0].decompose(void 0, ZV.l.Quaternion[0], void 0);
                const eV = ZV.l.Ik[1];
                ZV.l.Quaternion[0].toEulerAnglesToRef(eV), (this.billboardMode & VV.BILLBOARDMODE_X) !== VV.BILLBOARDMODE_X && (eV.x = 0), (this.billboardMode & VV.BILLBOARDMODE_Y) !== VV.BILLBOARDMODE_Y && (eV.y = 0), (this.billboardMode & VV.BILLBOARDMODE_Z) !== VV.BILLBOARDMODE_Z && (eV.z = 0), JV && (eV.y += Math.PI), ZV.d.RotationYawPitchRollToRef(eV.y, eV.x, eV.z, ZV.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZV.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZV.l.Ik[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : UV && UV._nonUniformScaling ? this._updateNonUniformScalingState(UV._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.FeV(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = ZV.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), VV) {
            const VV = this.getChildren();
            for (let eV = 0; eV < VV.length; ++eV) {
              const xV = VV[eV];
              if (xV) {
                xV.computeWorldMatrix();
                const VV = ZV.l.Matrix[0];
                xV._localMatrix.multiplyToRef(this._localMatrix, VV);
                const eV = ZV.l.Quaternion[0];
                VV.decompose(xV.WZ, eV, xV.position), xV.rotationQuaternion ? xV.rotationQuaternion.iG(eV) : eV.toEulerAnglesToRef(xV.rotation)
              }
            }
          }
          this.WZ.FeV(1, 1, 1), this.position.FeV(0, 0, 0), this.rotation.FeV(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = ZV.h.Identity()), this._worldMatrix = ZV.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(VV) {
          return this.onAfterWorldMatrixUpdateObservable.add(VV), this
        }
        unregisterAfterWorldMatrixUpdate(VV) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(VV), this
        }
        getPositionInCameraSpace() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return VV || (VV = this.dD().activeCamera), ZV.o.TransformCoordinates(this.getAbsolutePosition(), VV.getViewMatrix())
        }
        getDistanceToCamera() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return VV || (VV = this.dD().activeCamera), this.getAbsolutePosition().subtract(VV.globalPosition).length()
        }
        clone(eV, xV, JV) {
          const YV = nV.b.Clone((() => new VV(eV, this.dD())), this);
          if (YV.name = eV, YV.id = eV, xV && (YV.parent = xV), !JV) {
            const VV = this.getDescendants(!0);
            for (let xV = 0; xV < VV.length; xV++) {
              const JV = VV[xV];
              JV.clone && JV.clone(eV + "." + JV.name, YV)
            }
          }
          return YV
        }
        serialize(VV) {
          const eV = nV.b.Serialize(this, VV);
          return eV.type = this.getClassName(), eV.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(eV), eV.localMatrix = this.getPivotMatrix().WYV(), eV.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (eV.nC = !0), nV.b.AppendSerializedAnimations(this, eV), eV.TE = this.serializeAnimationRanges(), eV
        }
        getChildTransformNodes(eV, xV) {
          const JV = [];
          return this._getDescendants(JV, eV, (eV => (!xV || xV(eV)) && eV instanceof VV)), JV
        }
        dispose(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.dD().stopAnimation(this), this.dD().removeTransformNode(this), this._parentContainer) {
            const VV = this._parentContainer.transformNodes.indexOf(this);
            VV > -1 && this._parentContainer.transformNodes.splice(VV, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), VV) {
            const VV = this.getChildTransformNodes(!0);
            for (const eV of VV) eV.parent = null, eV.computeWorldMatrix(!0)
          }
          super.dispose(VV, eV)
        }
        normalizeToUnitCube() {
          let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0,
            JV = null,
            YV = null;
          eV && (this.rotationQuaternion ? (YV = this.rotationQuaternion.clone(), this.rotationQuaternion.FeV(0, 0, 0, 1)) : this.rotation && (JV = this.rotation.clone(), this.rotation.FeV(0, 0, 0)));
          const UV = this.getHierarchyBoundingVectors(VV, xV),
            yV = UV.max.subtract(UV.min),
            pV = Math.max(yV.x, yV.y, yV.z);
          if (0 === pV) return this;
          const QV = 1 / pV;
          return this.WZ.scaleInPlace(QV), eV && (this.rotationQuaternion && YV ? this.rotationQuaternion.iG(YV) : this.rotation && JV && this.rotation.iG(JV)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const nV = "function" === typeof Symbol && Symbol.metadata ? Object.create(EV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, QV.I)("position")], xV = [(0, QV.I)("rotation")], JV = [(0, QV.E)("rotationQuaternion")], YV = [(0, QV.I)("WZ")], UV = [(0, QV.J)("billboardMode")], yV = [(0, QV.J)()], rV = [(0, QV.J)("infiniteDistance")], kV = [(0, QV.J)()], bV = [(0, QV.J)()], (0, pV.i)(null, null, eV, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: VV => "_position" in VV,
            get: VV => VV._position,
            set: (VV, eV) => {
              VV._position = eV
            }
          },
          metadata: nV
        }, BV, jV), (0, pV.i)(null, null, xV, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: VV => "_rotation" in VV,
            get: VV => VV._rotation,
            set: (VV, eV) => {
              VV._rotation = eV
            }
          },
          metadata: nV
        }, qV, tV), (0, pV.i)(null, null, JV, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: VV => "_rotationQuaternion" in VV,
            get: VV => VV._rotationQuaternion,
            set: (VV, eV) => {
              VV._rotationQuaternion = eV
            }
          },
          metadata: nV
        }, FV, TV), (0, pV.i)(null, null, YV, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: VV => "_scaling" in VV,
            get: VV => VV._scaling,
            set: (VV, eV) => {
              VV._scaling = eV
            }
          },
          metadata: nV
        }, PV, AV), (0, pV.i)(null, null, UV, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "_billboardMode" in VV,
            get: VV => VV._billboardMode,
            set: (VV, eV) => {
              VV._billboardMode = eV
            }
          },
          metadata: nV
        }, NV, XV), (0, pV.i)(null, null, yV, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: VV => "scalingDeterminant" in VV,
            get: VV => VV.scalingDeterminant,
            set: (VV, eV) => {
              VV.scalingDeterminant = eV
            }
          },
          metadata: nV
        }, MV, zV), (0, pV.i)(null, null, rV, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: VV => "_infiniteDistance" in VV,
            get: VV => VV._infiniteDistance,
            set: (VV, eV) => {
              VV._infiniteDistance = eV
            }
          },
          metadata: nV
        }, GV, WV), (0, pV.i)(null, null, kV, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: VV => "ignoreNonUniformScaling" in VV,
            get: VV => VV.ignoreNonUniformScaling,
            set: (VV, eV) => {
              VV.ignoreNonUniformScaling = eV
            }
          },
          metadata: nV
        }, RV, gV), (0, pV.i)(null, null, bV, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: VV => "reIntegrateRotationIntoRotationQuaternion" in VV,
            get: VV => VV.reIntegrateRotationIntoRotationQuaternion,
            set: (VV, eV) => {
              VV.reIntegrateRotationIntoRotationQuaternion = eV
            }
          },
          metadata: nV
        }, DV, iV), nV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nV
        })
      })(), VV.BILLBOARDMODE_NONE = 0, VV.BILLBOARDMODE_X = 1, VV.BILLBOARDMODE_Y = 2, VV.BILLBOARDMODE_Z = 4, VV.BILLBOARDMODE_ALL = 7, VV.BILLBOARDMODE_USE_POSITION = 128, VV.BillboardUseParentOrientation = !1, VV._TmpRotation = ZV.h.Zero(), VV._TmpScaling = ZV.o.Zero(), VV._TmpTranslation = ZV.o.Zero(), VV._TmpRHRestore = ZV.d.Scaling(1, 1, -1), VV._LookAtVectorCache = new ZV.o(0, 0, 0), VV._RotationAxisCache = new ZV.h, VV
    })();

    function EV(VV, eV, xV) {
      const JV = nV.b.Parse((() => new bV(VV.name, eV)), VV, eV, xV);
      if (VV.localMatrix ? JV.setPreTransformMatrix(ZV.d.FromArray(VV.localMatrix)) : VV.pivotMatrix && JV.setPivotMatrix(ZV.d.FromArray(VV.pivotMatrix)), JV.pW(VV.isEnabled), JV._waitingParsedUniqueId = VV.uniqueId, void 0 !== VV.parentId && (JV._waitingParentId = VV.parentId), void 0 !== VV.parentInstanceIndex && (JV._waitingParentInstanceIndex = VV.parentInstanceIndex), VV.nC && (JV._waitingFreezeWorldMatrix = VV.nC), VV.animations) {
        for (let eV = 0; eV < VV.animations.length; eV++) {
          const xV = VV.animations[eV],
            YV = (0, rV.c)("BABYLON.Animation");
          YV && JV.animations.push(YV.Parse(xV))
        }
        vV.e.ParseAnimationRanges(JV, VV, eV)
      }
      return VV.autoAnimate && eV.beginAnimation(JV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), JV
    }
    let BV = !1;

    function jV() {
      BV || (BV = !0, bV.Parse = EV)
    }(JV = bV.prototype).uH ?? (JV.uH = (0, kV.j)("TransformNode", "uH")), (YV = bV.prototype).applyImpulse ?? (YV.applyImpulse = (0, kV.j)("TransformNode", "applyImpulse")), (UV = bV.prototype).applyAngularImpulse ?? (UV.applyAngularImpulse = (0, kV.j)("TransformNode", "applyAngularImpulse")), (yV = bV.prototype).applyTorque ?? (yV.applyTorque = (0, kV.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(bV.prototype, "physicsBody") || Object.defineProperty(bV.prototype, "physicsBody", (0, kV.g)("TransformNode", "physicsBody"))
  },
  41671: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      try {
        const JV = VV.next();
        JV.done ? eV(JV) : JV.value ? JV.value.then((() => {
          JV.value = void 0, eV(JV)
        }), xV) : eV(JV)
      } catch (JV) {
        xV(JV)
      }
    }

    function YV() {
      let VV, eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (xV, YV, UV) => {
        const yV = performance.now();
        void 0 === VV || yV - VV > eV ? (VV = yV, setTimeout((() => {
          JV(xV, YV, UV)
        }), 0)) : JV(xV, YV, UV)
      }
    }

    function UV(VV, eV, xV, JV, YV) {
      const UV = () => {
        let yV;
        const pV = VV => {
          VV.done ? xV(VV.value) : void 0 === yV ? yV = !0 : UV()
        };
        do {
          yV = void 0, YV && YV.aborted ? JV(new Error("Aborted")) : eV(VV, pV, JV), void 0 === yV && (yV = !1)
        } while (yV)
      };
      UV()
    }

    function yV(VV, eV) {
      let xV;
      return UV(VV, JV, (VV => xV = VV), (VV => {
        throw VV
      }), eV), xV
    }
    async function pV(VV, eV, xV) {
      return await new Promise(((JV, YV) => {
        UV(VV, eV, JV, YV, xV)
      }))
    }

    function QV(VV, eV) {
      return function() {
        return yV(VV(...arguments), eV)
      }
    }
    xV.d(eV, {
      b: () => YV,
      c: () => QV,
      d: () => pV,
      g: () => yV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);