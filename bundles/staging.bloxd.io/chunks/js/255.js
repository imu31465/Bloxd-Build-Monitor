export const id = 255;
export const ids = [255];
export const modules = {
  40409: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => yt,
      d: () => bt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40311),
      mt = Vt(37367),
      dt = Vt(37336),
      jt = Vt(40415),
      Ht = Vt(38899),
      Xt = Vt(37390),
      Qt = Vt(40080),
      lt = Vt(38340),
      Et = Vt(38009),
      ft = Vt(40164),
      wt = Vt(40230);
    let yt = (() => {
      var tt;
      let et, Vt, Xt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt = jt.d,
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [],
        ot = [],
        rt = [],
        Ut = [],
        At = [],
        it = [],
        Yt = [],
        Bt = [],
        pt = [],
        xt = [],
        Tt = [],
        gt = [],
        st = [],
        nt = [],
        te = [],
        ee = [],
        Ve = [],
        Oe = [],
        qe = [],
        De = [];
      return tt = class extends Pt {
        get position() {
          return this._position
        }
        set position(tt) {
          this._position = tt
        }
        set upVector(tt) {
          this._upVector = tt
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let et, Vt;
          if (this.mode === tt.PERSPECTIVE_CAMERA) this.fovMode === tt.FOVMODE_VERTICAL_FIXED ? (Vt = 2 * this.minZ * Math.tan(this.fov / 2), et = this.Jf().getAspectRatio(this) * Vt) : (et = 2 * this.minZ * Math.tan(this.fov / 2), Vt = et / this.Jf().getAspectRatio(this));
          else {
            const tt = this.Jf().getRenderWidth() / 2,
              Ot = this.Jf().getRenderHeight() / 2;
            et = (this.orthoRight ?? tt) - (this.orthoLeft ?? -tt), Vt = (this.orthoTop ?? Ot) - (this.orthoBottom ?? -Ot)
          }
          return et * Vt
        }
        set orthoLeft(tt) {
          this._orthoLeft = tt;
          for (const et of this._rigCameras) et.orthoLeft = tt
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(tt) {
          this._orthoRight = tt;
          for (const et of this._rigCameras) et.orthoRight = tt
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(tt) {
          this._orthoBottom = tt;
          for (const et of this._rigCameras) et.orthoBottom = tt
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(tt) {
          this._orthoTop = tt;
          for (const et of this._rigCameras) et.orthoTop = tt
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(et / (2 * tt))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(tt) {
          this._baseInertia = tt
        }
        set mode(tt) {
          this._mode = tt;
          for (const et of this._rigCameras) et.mode = tt
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(et, Vt, qt) {
          let jt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, ft.b)(), super(et, qt, !1), this.inputs = (0, Ot.m)(this, Zt), this._position = (0, Ot.m)(this, Lt, dt.n.Zero()), this._upVector = ((0, Ot.m)(this, Ft), (0, Ot.m)(this, kt, dt.n.Up())), this.oblique = ((0, Ot.m)(this, Gt), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Ot.m)(this, zt, .8), this.projectionPlaneTilt = ((0, Ot.m)(this, ot), (0, Ot.m)(this, rt, 0)), this.minZ = ((0, Ot.m)(this, Ut), (0, Ot.m)(this, At, 1)), this.maxZ = ((0, Ot.m)(this, it), (0, Ot.m)(this, Yt, 1e4)), this._baseInertia = ((0, Ot.m)(this, Bt), .9), this._mode = tt.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new lt.c(0, 0, 1, 1), this.layerMask = (0, Ot.m)(this, pt, 268435455), this.fovMode = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, tt.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Ot.m)(this, gt), (0, Ot.m)(this, st, tt.RIG_MODE_NONE)), this.interaxialDistance = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, void 0)), this.isStereoscopicSideBySide = ((0, Ot.m)(this, ee), (0, Ot.m)(this, Ve, void 0)), this.ignoreCameraMaxZ = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, !1)), this.customRenderTargets = ((0, Ot.m)(this, De), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new mt.c, this.onProjectionMatrixChangedObservable = new mt.c, this.onAfterCheckInputsObservable = new mt.c, this.onRestoreStateObservable = new mt.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new dt.c, this._postProcesses = new Array, this._activeMeshes = new Dt.g(256), this._globalPosition = dt.n.Zero(), this._computedViewMatrix = dt.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = dt.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = dt.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.vI().defaultCameraLayerMask, this.vI().addCamera(this), jt && !this.vI().activeCamera && (this.vI().activeCamera = this), this.position = Vt, this.renderPassId = this.vI().Jf().createRenderPassId(`Camera ${et}`)
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
          return "Gy"
        }
        toString(tt) {
          let et = "Name: " + this.name;
          if (et += ", type: " + this.getClassName(), this.animations)
            for (let Vt = 0; Vt < this.animations.length; Vt++) et += ", animation[0]: " + this.animations[Vt].toString(tt);
          return et
        }
        applyVerticalCorrection() {
          const tt = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -tt.x : tt.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(tt) {
          return -1 !== this._activeMeshes.indexOf(tt)
        }
        isReady() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (tt)
            for (const et of this._postProcesses)
              if (et && !et.isReady()) return !1;
          return super.isReady(tt)
        }
        _initCache() {
          super._initCache(), this._cache.position = new dt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new dt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(tt) {
          tt || super._updateCache(), this._cache.position.rK(this.position), this._cache.upVector.rK(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const et = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Vt = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === et;
          if (!Vt) return !1;
          const Ot = this.Jf();
          return this.mode === tt.PERSPECTIVE_CAMERA ? Vt = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Ot.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Vt = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Ot.getRenderWidth() && this._cache.renderHeight === Ot.getRenderHeight(), this.oblique && (Vt = Vt && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Vt
        }
        attachControl(tt, et) {}
        detachControl(tt) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== tt.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let tt = 0; tt < this._postProcesses.length; tt++)
            if (null !== this._postProcesses[tt]) return this._postProcesses[tt];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const tt = this._getFirstPostProcess();
          tt && tt.markTextureDirty();
          for (let et = 0, Vt = this._rigCameras.length; et < Vt; et++) {
            const tt = this._rigCameras[et],
              Vt = tt._rigPostProcess;
            if (Vt) {
              "pass" === Vt.getEffectName() && (tt.isIntermediate = 0 === this._postProcesses.length), tt._postProcesses = this._postProcesses.slice(0).concat(Vt), Vt.markTextureDirty()
            } else tt._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !tt.isReusable() && this._postProcesses.indexOf(tt) > -1 ? (Ht.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == et || et < 0 ? this._postProcesses.push(tt) : null === this._postProcesses[et] ? this._postProcesses[et] = tt : this._postProcesses.splice(et, 0, tt), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.fVt(), this._postProcesses.indexOf(tt))
        }
        detachPostProcess(tt) {
          const et = this._postProcesses.indexOf(tt); - 1 !== et && (this._postProcesses[et] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.fVt(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return dt.c.Identity()
        }
        getViewMatrix(tt) {
          return !tt && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.vI().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(tt) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== tt && (this._projectionMatrix = tt)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(et) {
          if (this._doNotComputeProjectionMatrix || !et && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Vt = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Vt, this._refreshFrustumPlanes = !0;
          const Ot = this.Jf(),
            qt = this.vI(),
            Dt = Ot.LOt;
          if (this.mode === tt.PERSPECTIVE_CAMERA) {
            let et;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Ot.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), et = qt.useRightHandedSystem ? dt.c.PerspectiveFovRHToRef : dt.c.PerspectiveFovLHToRef, et(this.fov, Ot.getAspectRatio(this), Dt ? Vt : this.minZ, Dt ? this.minZ : Vt, this._projectionMatrix, this.fovMode === tt.FOVMODE_VERTICAL_FIXED, Ot.isNDCHalfZRange, this.projectionPlaneTilt, Dt)
          } else {
            const tt = Ot.getRenderWidth() / 2,
              et = Ot.getRenderHeight() / 2;
            qt.useRightHandedSystem ? this.oblique ? dt.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -tt, this.orthoRight ?? tt, this.orthoBottom ?? -et, this.orthoTop ?? et, Dt ? Vt : this.minZ, Dt ? this.minZ : Vt, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ot.isNDCHalfZRange) : dt.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -tt, this.orthoRight ?? tt, this.orthoBottom ?? -et, this.orthoTop ?? et, Dt ? Vt : this.minZ, Dt ? this.minZ : Vt, this._projectionMatrix, Ot.isNDCHalfZRange) : this.oblique ? dt.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -tt, this.orthoRight ?? tt, this.orthoBottom ?? -et, this.orthoTop ?? et, Dt ? Vt : this.minZ, Dt ? this.minZ : Vt, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ot.isNDCHalfZRange) : dt.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -tt, this.orthoRight ?? tt, this.orthoBottom ?? -et, this.orthoTop ?? et, Dt ? Vt : this.minZ, Dt ? this.minZ : Vt, this._projectionMatrix, Ot.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Ot.getRenderWidth(), this._cache.renderHeight = Ot.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(tt) {
          return (this.radius || (this.target ? dt.n.Distance(this.position, this.target) : this.position.length())) + tt
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Et.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Et.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), et && this.rigCameras.length > 0) {
            let et = !1;
            for (const Vt of this.rigCameras) Vt._updateFrustumPlanes(), et = et || tt.isInFrustum(Vt._frustumPlanes);
            return et
          }
          return tt.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(tt) {
          return this._updateFrustumPlanes(), tt.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Qt.e)("Ray")
        }
        getForwardRayToRef(tt) {
          throw (0, Qt.e)("Ray")
        }
        dispose(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.vI().stopAnimation(this), this.vI().removeCamera(this); this._rigCameras.length > 0;) {
            const tt = this._rigCameras.pop();
            tt && tt.dispose()
          }
          if (this._parentContainer) {
            const tt = this._parentContainer.cameras.indexOf(this);
            tt > -1 && this._parentContainer.cameras.splice(tt, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== tt.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let tt = this._postProcesses.length;
            for (; --tt >= 0;) {
              const et = this._postProcesses[tt];
              et && et.dispose(this)
            }
          }
          let Ot = this.customRenderTargets.length;
          for (; --Ot >= 0;) this.customRenderTargets[Ot].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.vI().Jf().releaseRenderPassId(this.renderPassId), super.dispose(et, Vt)
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
        setCameraRigMode(et, Vt) {
          if (this.cameraRigMode !== et) {
            for (; this._rigCameras.length > 0;) {
              const tt = this._rigCameras.pop();
              tt && tt.dispose()
            }
            if (this.cameraRigMode = et, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Vt.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== tt.RIG_MODE_NONE) {
              const tt = this.createRigCamera(this.name + "_L", 0);
              tt && (tt._isLeftCamera = !0);
              const et = this.createRigCamera(this.name + "_R", 1);
              et && (et._isRightCamera = !0), tt && et && (this._rigCameras.push(tt), this._rigCameras.push(et))
            }
            this._setRigMode(Vt), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(tt) {}
        _getVRProjectionMatrix() {
          return dt.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Jf().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(tt, et) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[tt] = et, "interaxialDistance" === tt && (this._cameraRigParams.stereoHalfAngle = et / .0637 * (Math.PI / 180))
        }
        createRigCamera(tt, et) {
          return null
        }
        _updateRigCameras() {
          for (let tt = 0; tt < this._rigCameras.length; tt++) this._rigCameras[tt].minZ = this.minZ, this._rigCameras[tt].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[tt].fov = this.fov, this._rigCameras[tt].upVector.rK(this.upVector);
          this.cameraRigMode === tt.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const tt = wt.d.Serialize(this);
          return tt.uniqueId = this.uniqueId, tt.type = this.getClassName(), this.parent && this.parent._serializeAsParent(tt), this.inputs && this.inputs.serialize(tt), wt.d.AppendSerializedAnimations(this, tt), tt.nw = this.serializeAnimationRanges(), tt.isEnabled = this.isEnabled(), tt
        }
        clone(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ot = wt.d.Clone(tt.GetConstructorFromName(this.getClassName(), et, this.vI(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Ot.name = et, Ot.parent = Vt, this.onClonedObservable.notifyObservers(Ot), Ot
        }
        zp(tt) {
          const et = dt.n.Zero();
          return this.getDirectionToRef(tt, et), et
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(tt, et) {
          dt.n.TransformNormalToRef(tt, this.getWorldMatrix(), et)
        }
        static GetConstructorFromName(et, Vt, Ot) {
          let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Dt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const mt = jt.d.Construct(et, Vt, Ot, {
            interaxial_distance: qt,
            isStereoscopicSideBySide: Dt
          });
          return mt || (() => tt._CreateDefaultParsedCamera(Vt, Ot))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let tt = this.vI().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (tt *= -1), tt
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pt[Symbol.metadata] ?? null) : void 0;
        et = [(0, qt.M)("position")], Vt = [(0, qt.M)("upVector")], Xt = [(0, qt.P)()], yt = [(0, qt.P)()], Nt = [(0, qt.P)()], Mt = [(0, qt.P)()], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)()], Kt = [(0, qt.P)()], ht = [(0, qt.P)()], vt = [(0, qt.P)()], Wt = [(0, qt.P)()], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], It = [(0, qt.P)()], (0, Ot.l)(tt, null, Xt, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: tt => "orthoLeft" in tt,
            get: tt => tt.orthoLeft
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(tt, null, yt, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: tt => "orthoRight" in tt,
            get: tt => tt.orthoRight
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(tt, null, Nt, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: tt => "orthoBottom" in tt,
            get: tt => tt.orthoBottom
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(tt, null, Mt, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: tt => "orthoTop" in tt,
            get: tt => tt.orthoTop
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(tt, null, Kt, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: tt => "inertia" in tt,
            get: tt => tt.inertia
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(tt, null, ht, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: tt => "mode" in tt,
            get: tt => tt.mode
          },
          metadata: Dt
        }, null, Zt), (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: tt => "_position" in tt,
            get: tt => tt._position,
            set: (tt, et) => {
              tt._position = et
            }
          },
          metadata: Dt
        }, Lt, Ft), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: tt => "_upVector" in tt,
            get: tt => tt._upVector,
            set: (tt, et) => {
              tt._upVector = et
            }
          },
          metadata: Dt
        }, kt, Gt), (0, Ot.l)(null, null, bt, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: tt => "fov" in tt,
            get: tt => tt.fov,
            set: (tt, et) => {
              tt.fov = et
            }
          },
          metadata: Dt
        }, zt, ot), (0, Ot.l)(null, null, Jt, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: tt => "projectionPlaneTilt" in tt,
            get: tt => tt.projectionPlaneTilt,
            set: (tt, et) => {
              tt.projectionPlaneTilt = et
            }
          },
          metadata: Dt
        }, rt, Ut), (0, Ot.l)(null, null, Ct, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "minZ" in tt,
            get: tt => tt.minZ,
            set: (tt, et) => {
              tt.minZ = et
            }
          },
          metadata: Dt
        }, At, it), (0, Ot.l)(null, null, ut, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "maxZ" in tt,
            get: tt => tt.maxZ,
            set: (tt, et) => {
              tt.maxZ = et
            }
          },
          metadata: Dt
        }, Yt, Bt), (0, Ot.l)(null, null, vt, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: tt => "layerMask" in tt,
            get: tt => tt.layerMask,
            set: (tt, et) => {
              tt.layerMask = et
            }
          },
          metadata: Dt
        }, pt, xt), (0, Ot.l)(null, null, Wt, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "fovMode" in tt,
            get: tt => tt.fovMode,
            set: (tt, et) => {
              tt.fovMode = et
            }
          },
          metadata: Dt
        }, Tt, gt), (0, Ot.l)(null, null, St, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "cameraRigMode" in tt,
            get: tt => tt.cameraRigMode,
            set: (tt, et) => {
              tt.cameraRigMode = et
            }
          },
          metadata: Dt
        }, st, nt), (0, Ot.l)(null, null, ct, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: tt => "interaxialDistance" in tt,
            get: tt => tt.interaxialDistance,
            set: (tt, et) => {
              tt.interaxialDistance = et
            }
          },
          metadata: Dt
        }, te, ee), (0, Ot.l)(null, null, Rt, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: tt => "isStereoscopicSideBySide" in tt,
            get: tt => tt.isStereoscopicSideBySide,
            set: (tt, et) => {
              tt.isStereoscopicSideBySide = et
            }
          },
          metadata: Dt
        }, Ve, Oe), (0, Ot.l)(null, null, It, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "ignoreCameraMaxZ" in tt,
            get: tt => tt.ignoreCameraMaxZ,
            set: (tt, et) => {
              tt.ignoreCameraMaxZ = et
            }
          },
          metadata: Dt
        }, qe, De), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt._CreateDefaultParsedCamera = (tt, et) => {
        throw (0, Qt.e)("UniversalCamera")
      }, tt.PERSPECTIVE_CAMERA = 0, tt.ORTHOGRAPHIC_CAMERA = 1, tt.FOVMODE_VERTICAL_FIXED = 0, tt.FOVMODE_HORIZONTAL_FIXED = 1, tt.RIG_MODE_NONE = 0, tt.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, tt.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, tt.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, tt.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, tt.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, tt.RIG_MODE_VR = 20, tt.RIG_MODE_CUSTOM = 22, tt.ForceAttachControlToAlwaysPreventDefault = !1, tt
    })();

    function Nt(tt, et) {
      const Vt = tt.type,
        Ot = yt.GetConstructorFromName(Vt, tt.name, et, tt.interaxial_distance, tt.isStereoscopicSideBySide),
        qt = wt.d.Parse(Ot, tt, et);
      if (void 0 !== tt.parentId && (qt._waitingParentId = tt.parentId), void 0 !== tt.parentInstanceIndex && (qt._waitingParentInstanceIndex = tt.parentInstanceIndex), qt.inputs && (qt.inputs.parse(tt), qt._setupInputs()), tt.upVector && (qt.upVector = dt.n.FromArray(tt.upVector)), qt.setPosition && (qt.position.W9(0, 0, 0), qt.setPosition(dt.n.FromArray(tt.position))), tt.target && qt.setTarget && qt.setTarget(dt.n.FromArray(tt.target)), tt.cameraRigMode) {
        const et = tt.interaxial_distance ? {
          interaxialDistance: tt.interaxial_distance
        } : {};
        qt.setCameraRigMode(tt.cameraRigMode, et)
      }
      if (tt.animations) {
        for (let et = 0; et < tt.animations.length; et++) {
          const Vt = tt.animations[et],
            Ot = (0, Xt.e)("BABYLON.Animation");
          Ot && qt.animations.push(Ot.Parse(Vt))
        }
        jt.d.ParseAnimationRanges(qt, tt, et)
      }
      return tt.autoAnimate && et.beginAnimation(qt, tt.autoAnimateFrom, tt.autoAnimateTo, tt.autoAnimateLoop, tt.autoAnimateSpeed || 1), void 0 !== tt.isEnabled && qt.Av(tt.isEnabled), qt
    }
    let Mt = !1;

    function bt() {
      Mt || (Mt = !0, yt.Parse = Nt)
    }
  },
  40422: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt) {
        this._cameraPosition = et, this._behavior = Vt, this.activeInput = !1, this.speed = 1, this.JY = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Ot.n, this.rotationAccumulatedPixels = new Ot.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Ot.n.Zero(), this.rotationDeltaCurrentFrame = Ot.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new Ot.n, this.referenceFrameRate = 60, this._rotationVelocity = new Ot.n, this._prevFrameTimeMs = 0, this._scene = tt
      }
      computeCurrentFrameDeltas() {
        const tt = this._scene.Jf().getDeltaTime(),
          et = this._getEffectiveDeltaMs(tt);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.S_(0), this.rotationDeltaCurrentFrame.S_(0), this.zoomDeltaCurrentFrame = 0, void(tt > 0 && (this._prevFrameTimeMs = tt));
        this.panDeltaCurrentFrame.S_(0), this.rotationDeltaCurrentFrame.S_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.W9(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * et, this.panDeltaCurrentFrame), this._rotationVelocity.W9(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.W9(this._rotationVelocity.x * this.speed * this.rotationXSpeed * et, this._rotationVelocity.y * this.speed * this.rotationYSpeed * et, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.JY * this._zoomSpeedMultiplier) * et, tt > 0 && (this._prevFrameTimeMs = tt), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.S_(0), this.rotationAccumulatedPixels.S_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.S_(0), this.rotationAccumulatedPixels.S_(0)
      }
      resetPanVelocity() {
        this._panVelocity.S_(0), this.panAccumulatedPixels.S_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(tt) {
        const et = this._scene.Jf().getDeltaTime(),
          Vt = this._getEffectiveDeltaMs(et),
          Ot = 1e3 / this.referenceFrameRate;
        return Math.pow(tt, Vt / Ot)
      }
      getFrameIndependentInputScale(tt) {
        const et = 1 - tt;
        if (et <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(tt)) / et
      }
      _getEffectiveDeltaMs(tt) {
        return tt > 0 ? tt : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(tt, et, Vt) {
        let Ot = tt;
        const qt = this._scene.Jf().getDeltaTime(),
          Dt = this._getEffectiveDeltaMs(qt);
        if (0 === Dt) return Ot;
        const mt = this.getFrameIndependentDecay(Vt);
        if (Ot *= mt, 0 !== et || this.activeInput) {
          const tt = 1 - Vt;
          Ot += et / Dt * (tt > 0 ? (1 - mt) / tt : 1)
        } else Math.abs(Ot) < 1e-6 && (Ot = 0);
        return Ot
      }
    }
  },
  40426: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor(tt, et) {
        this.inputMap = [], this.handlers = tt, this._createDefaultEntries = et, this.resetInputMap()
      }
      resolveInteraction(tt, et) {
        for (const Vt of this.inputMap)
          if (Vt.source === tt && this._entryMatches(Vt, et)) return Vt;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(tt, et, Vt) {
        const Ot = this.inputMap;
        for (let qt = 0; qt < Ot.length; qt++) {
          const Dt = Ot[qt];
          if (Dt.source === tt && Dt.interaction === et && this._entryConditionsMatch(Dt, Vt)) return Dt
        }
      }
      getEntries(tt, et, Vt) {
        const Ot = [],
          qt = this.inputMap;
        for (let Dt = 0; Dt < qt.length; Dt++) {
          const mt = qt[Dt];
          mt.source === tt && mt.interaction === et && this._entryConditionsMatch(mt, Vt) && Ot.push(mt)
        }
        return Ot
      }
      addEntry(tt) {
        const et = this._entrySpecificity(tt);
        let Vt = this.inputMap.length;
        for (let Ot = 0; Ot < this.inputMap.length; Ot++)
          if (this._entrySpecificity(this.inputMap[Ot]) < et) {
            Vt = Ot;
            break
          } this.inputMap.splice(Vt, 0, tt)
      }
      setInteraction(tt, et, Vt) {
        const Ot = this.resolveInteraction(tt, et);
        return Ot && this._entryCoversAllConditionsOf(Ot, et) ? (Ot.interaction = Vt, !0) : (this.addEntry({
          source: tt,
          ...et ?? {},
          interaction: Vt
        }), !0)
      }
      _entryCoversAllConditionsOf(tt, et) {
        if (!et) return !0;
        const Vt = tt;
        for (const Ot of Object.keys(et)) {
          const tt = et[Ot];
          if (void 0 !== tt)
            if ("modifiers" === Ot) {
              const et = Vt.modifiers ?? {};
              for (const Vt of Object.keys(tt))
                if (void 0 !== tt[Vt] && void 0 === et[Vt]) return !1
            } else if (void 0 === Vt[Ot]) return !1
        }
        return !0
      }
      setInteractions(tt, et, Vt) {
        let Ot = 0;
        const qt = this.inputMap;
        for (let Dt = 0; Dt < qt.length; Dt++) {
          const mt = qt[Dt];
          mt.source === tt && this._entryMatches(mt, et) && (mt.interaction = Vt, Ot++)
        }
        return Ot
      }
      _entryMatches(tt, et) {
        switch (tt.source) {
          case "pointer":
            return (void 0 === tt.button || tt.button === et?.button) && this._matchModifiers(tt.modifiers, et?.modifiers);
          case "wheel":
            return this._matchModifiers(tt.modifiers, et?.modifiers);
          case "touch":
            return void 0 === tt.touchCount || tt.touchCount === et?.touchCount;
          case "keyboard":
            return (void 0 === tt.key || (Array.isArray(tt.key) ? -1 !== tt.key.indexOf(et?.key ?? -1) : tt.key === et?.key)) && this._matchModifiers(tt.modifiers, et?.modifiers)
        }
      }
      _entryConditionsMatch(tt, et) {
        if (!et) return !0;
        switch (tt.source) {
          case "pointer":
            return (!("button" in et) || tt.button === et.button) && (!("modifiers" in et) || this._entryModifiersMatch(tt.modifiers, et.modifiers));
          case "wheel":
            return !("modifiers" in et) || this._entryModifiersMatch(tt.modifiers, et.modifiers);
          case "touch":
            return !("touchCount" in et) || tt.touchCount === et.touchCount;
          case "keyboard":
            if ("key" in et) {
              if (void 0 === tt.key) return void 0 === et.key;
              if (void 0 === et.key || (Array.isArray(tt.key) ? -1 === tt.key.indexOf(et.key) : tt.key !== et.key)) return !1
            }
            return !("modifiers" in et) || this._entryModifiersMatch(tt.modifiers, et.modifiers)
        }
      }
      _entrySpecificity(tt) {
        let et = 0;
        return "button" in tt && void 0 !== tt.button && et++, "key" in tt && void 0 !== tt.key && et++, "touchCount" in tt && void 0 !== tt.touchCount && et++, "modifiers" in tt && tt.modifiers && et++, et
      }
      _matchModifiers(tt, et) {
        return !tt || (void 0 === tt.ctrl || tt.ctrl === (et?.ctrl ?? !1)) && ((void 0 === tt.shift || tt.shift === (et?.shift ?? !1)) && (void 0 === tt.alt || tt.alt === (et?.alt ?? !1)))
      }
      _entryModifiersMatch(tt, et) {
        if (!et) return !tt;
        return void 0 !== et.ctrl || void 0 !== et.shift || void 0 !== et.alt ? (void 0 === et.ctrl || tt?.ctrl === et.ctrl) && ((void 0 === et.shift || tt?.shift === et.shift) && (void 0 === et.alt || tt?.alt === et.alt)) : !tt || void 0 === tt.ctrl && void 0 === tt.shift && void 0 === tt.alt
      }
    }
  },
  40401: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Nt,
      f: () => wt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40409),
      mt = Vt(37336),
      dt = Vt(37342),
      jt = Vt(40418),
      Ht = Vt(40415),
      Xt = Vt(40422),
      Qt = Vt(40426);
    class lt extends Xt.c {
      constructor(tt, et, Vt) {
        super(tt, et, Vt), this.input = new Qt.b({
          translate: (tt, et, Vt) => {
            this.panAccumulatedPixels.x += tt, this.panAccumulatedPixels.y += et, this.panAccumulatedPixels.z += Vt
          },
          rotate: (tt, et) => {
            this.rotationAccumulatedPixels.x += tt, this.rotationAccumulatedPixels.y += et
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
    const Et = mt.c.Zero(),
      ft = mt.e.Identity();
    let wt = (() => {
        var tt;
        let et, Vt, Ht, Xt, Qt = Dt.c,
          wt = [],
          yt = [],
          Nt = [],
          Mt = [],
          bt = [],
          Jt = [],
          Ct = [],
          ut = [];
        return tt = class extends Qt {
          get inertia() {
            return this._targetInertia
          }
          set inertia(tt) {
            this._targetInertia = tt, this.movement && (this.movement.panInertia = tt, this.movement.rotationInertia = tt)
          }
          constructor(tt, et, Vt) {
            super(tt, et, Vt, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new mt.n(0, 0, 0), this.cameraRotation = new mt.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Ot.m)(this, wt, !1), this.rotation = ((0, Ot.m)(this, yt), (0, Ot.m)(this, Nt, void 0)), this.rotationQuaternion = (0, Ot.m)(this, Mt), this.speed = (0, Ot.m)(this, bt, 2), this.noRotationConstraint = ((0, Ot.m)(this, Jt), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = dt.e, this._rotationEpsilon = dt.e, this.lockedTarget = (0, Ot.m)(this, Ct, null), this._currentTarget = ((0, Ot.m)(this, ut), mt.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = mt.c.Zero(), this._cameraTransformMatrix = mt.c.Zero(), this._cameraRotationMatrix = mt.c.Zero(), this._transformedReferencePoint = mt.n.Zero(), this._deferredPositionUpdate = new mt.n, this._deferredRotationQuaternionUpdate = new mt.e, this._deferredRotationUpdate = new mt.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = mt.n.Forward(this.vI().useRightHandedSystem), this.rotation = new mt.n(0, this.vI().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new lt(this.vI(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(tt) {
            this.getWorldMatrix();
            const et = mt.k.uf[0],
              Vt = mt.k.uf[1];
            return Vt.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Vt, et), et.scaleInPlace(tt), this.globalPosition.add(et)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const tt = this.lockedTarget;
              tt.computeWorldMatrix().getTranslationToRef(tt.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.W9(0, 0, 0), this.cameraRotation.W9(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new mt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new mt.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(tt) {
            tt || super._updateCache();
            const et = this._getLockedTargetPosition();
            et ? this._cache.lockedTarget ? this._cache.lockedTarget.rK(et) : this._cache.lockedTarget = et.clone() : this._cache.lockedTarget = null, this._cache.rotation.rK(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.rK(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const tt = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(tt) : !tt) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const tt = this.Jf();
            return this.speed * Math.sqrt(tt.getDeltaTime() / (100 * tt.getFps()))
          }
          setTarget(tt) {
            this.upVector.normalize(), this._initialFocalDistance = tt.subtract(this.position).length(), this.position.z === tt.z && (this.position.z += dt.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.vI().useRightHandedSystem ? mt.c.LookAtRHToRef(this.position, tt, mt.n.UpReadOnly, Et) : mt.c.LookAtLHToRef(this.position, tt, mt.n.UpReadOnly, Et), Et.invert();
            const et = this.rotationQuaternion || ft;
            mt.e.FromRotationMatrixToRef(Et, et), et.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(tt) {
            this.setTarget(tt)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(mt.k.Matrix[0]), mt.n.TransformNormalToRef(this.cameraDirection, mt.k.Matrix[0], mt.k.uf[0]), this._deferredPositionUpdate.addInPlace(mt.k.uf[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.rK(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.rK(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const tt = this.movement,
              et = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            tt.panAccumulatedPixels.addInPlace(this.cameraDirection), tt.rotationAccumulatedPixels.x += this.cameraRotation.x, tt.rotationAccumulatedPixels.y += this.cameraRotation.y, tt.computeCurrentFrameDeltas(), this.cameraDirection.rK(tt.panDeltaCurrentFrame), this.cameraRotation.set(tt.rotationDeltaCurrentFrame.x, tt.rotationDeltaCurrentFrame.y);
            const Vt = this.speed * this._panningEpsilon;
            !et && Math.abs(this.cameraDirection.x) < Vt && Math.abs(this.cameraDirection.y) < Vt && Math.abs(this.cameraDirection.z) < Vt && (this.cameraDirection.S_(0), tt.resetPanVelocity());
            const Ot = this.invertRotation ? -this.inverseRotationSpeed : 1,
              qt = this._decideIfNeedsToMove(),
              Dt = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.rK(this.rotation), this._deferredPositionUpdate.rK(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.rK(this.rotationQuaternion), qt && this._updatePosition(), Dt) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Ot, this._deferredRotationUpdate.y += this.cameraRotation.y * Ot, !this.noRotationConstraint) {
                const tt = 1.570796;
                this._deferredRotationUpdate.x > tt && (this._deferredRotationUpdate.x = tt), this._deferredRotationUpdate.x < -tt && (this._deferredRotationUpdate.x = -tt)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.rK(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (mt.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.rK(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.S_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : mt.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return mt.n.TransformNormalToRef(mt.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), mt.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? jt.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (mt.e.FromEulerVectorToRef(this.rotation, ft), jt.b.Y.rotateByQuaternionToRef(ft, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(tt, et, Vt) {
            if (this.vI().useRightHandedSystem ? mt.c.LookAtRHToRef(tt, et, Vt, this._viewMatrix) : mt.c.LookAtLHToRef(tt, et, Vt, this._viewMatrix), this.parent) {
              const tt = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(tt, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(et, Vt) {
            if (this.cameraRigMode !== Dt.c.RIG_MODE_NONE) {
              const Vt = new tt(et, this.position.clone(), this.vI());
              return Vt.isRigCamera = !0, Vt.rigParent = this, this.cameraRigMode === Dt.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new mt.e), Vt._cameraRigParams = {}, Vt.rotationQuaternion = new mt.e), Vt.mode = this.mode, Vt.orthoLeft = this.orthoLeft, Vt.orthoRight = this.orthoRight, Vt.orthoTop = this.orthoTop, Vt.orthoBottom = this.orthoBottom, Vt
            }
            return null
          }
          _updateRigCameras() {
            const tt = this._rigCameras[0],
              et = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Dt.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Dt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Dt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Dt.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Dt.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Vt = this.cameraRigMode === Dt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Ot = this.cameraRigMode === Dt.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Vt, tt), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Ot, et);
                break
              }
              case Dt.c.RIG_MODE_VR:
                tt.rotationQuaternion && et.rotationQuaternion && this.rotationQuaternion ? (tt.rotationQuaternion.rK(this.rotationQuaternion), et.rotationQuaternion.rK(this.rotationQuaternion)) : (tt.rotation.rK(this.rotation), et.rotation.rK(this.rotation)), tt.position.rK(this.position), et.position.rK(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(et, Vt) {
            this.getTarget().subtractToRef(this.position, tt._TargetFocalPoint), tt._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Ot = tt._TargetFocalPoint.addInPlace(this.position);
            mt.c.TranslationToRef(-Ot.x, -Ot.y, -Ot.z, tt._TargetTransformMatrix), tt._TargetTransformMatrix.multiplyToRef(mt.c.RotationAxis(Vt.upVector, et), tt._RigCamTransformMatrix), mt.c.TranslationToRef(Ot.x, Ot.y, Ot.z, tt._TargetTransformMatrix), tt._RigCamTransformMatrix.multiplyToRef(tt._TargetTransformMatrix, tt._RigCamTransformMatrix), mt.n.TransformCoordinatesToRef(this.position, tt._RigCamTransformMatrix, Vt.position), Vt.setTarget(Ot)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.M)()], Ht = [(0, qt.P)()], Xt = [(0, qt.B)("lockedTargetId")], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: tt => "updateUpVectorFromRotation" in tt,
              get: tt => tt.updateUpVectorFromRotation,
              set: (tt, et) => {
                tt.updateUpVectorFromRotation = et
              }
            },
            metadata: Dt
          }, wt, yt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: tt => "rotation" in tt,
              get: tt => tt.rotation,
              set: (tt, et) => {
                tt.rotation = et
              }
            },
            metadata: Dt
          }, Nt, Mt), (0, Ot.l)(null, null, Ht, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: tt => "speed" in tt,
              get: tt => tt.speed,
              set: (tt, et) => {
                tt.speed = et
              }
            },
            metadata: Dt
          }, bt, Jt), (0, Ot.l)(null, null, Xt, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: tt => "lockedTarget" in tt,
              get: tt => tt.lockedTarget,
              set: (tt, et) => {
                tt.lockedTarget = et
              }
            },
            metadata: Dt
          }, Ct, ut), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt._RigCamTransformMatrix = new mt.c, tt._TargetTransformMatrix = new mt.c, tt._TargetFocalPoint = new mt.n, tt
      })(),
      yt = !1;

    function Nt() {
      yt || (yt = !0, Ht.d.AddNodeConstructor("TargetCamera", ((tt, et) => () => new wt(tt, mt.n.Zero(), et))))
    }
  },
  40158: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(40092);
    let qt = !1;

    function Dt() {
      qt || (qt = !0, Ot.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Ot.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Ot.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Ot.d.prototype.getAspectRatio = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = tt.viewport;
        return this.getRenderWidth(et) * Vt.width / (this.getRenderHeight(et) * Vt.height)
      }, Ot.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Ot.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40246: (tt, et, Vt) => {
    var Ot = Vt(40092),
      qt = Vt(40249);
    let Dt = !1;
    Dt || (Dt = !0, (0, qt.u)(), Ot.d.prototype._loadFileAsync = async function(tt, et, Vt) {
      return await new Promise(((Ot, qt) => {
        this._loadFile(tt, (tt => {
          Ot(tt)
        }), void 0, et, Vt, ((tt, et) => {
          qt(et)
        }))
      }))
    })
  },
  40244: (tt, et, Vt) => {
    (0, Vt(40164).b)()
  },
  40164: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(40092);
    let qt = !1;

    function Dt() {
      qt || (qt = !0, Ot.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Ot.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Ot.d.prototype.createRenderPassId = function(tt) {
        const et = ++Ot.d._RenderPassIdCounter;
        return this._renderPassNames[et] = tt ?? "NONAME", et
      }, Ot.d.prototype.releaseRenderPassId = function(tt) {
        this._renderPassNames[tt] = void 0;
        for (let et = 0; et < this.scenes.length; ++et) {
          const Vt = this.scenes[et];
          for (let et = 0; et < Vt.meshes.length; ++et) {
            const Ot = Vt.meshes[et];
            if (Ot._releaseRenderPassId(tt), Ot.vJ)
              for (let et = 0; et < Ot.vJ.length; ++et) {
                Ot.vJ[et]._removeDrawWrapper(tt)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(tt)
      })
    }
  },
  40278: (tt, et, Vt) => {
    var Ot = Vt(40281),
      qt = Vt(40092);
    let Dt = !1;
    Dt || (Dt = !0, qt.d.GetCompatibleTextureLoader = Ot.d)
  },
  40168: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(40048);
    let qt = !1;

    function Dt() {
      qt || (qt = !0, Ot.ThinEngine.prototype.setAlphaMode = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Vt] === tt) {
          if (!et) {
            const et = 0 === tt;
            this.depthCullingState.depthMask !== et && (this.depthCullingState.depthMask = et)
          }
          return
        }
        const Ot = 0 === tt;
        this._alphaState.setAlphaBlend(!Ot, Vt), this._alphaState.setAlphaMode(tt, Vt), et || (this.depthCullingState.depthMask = Ot), this._alphaMode[Vt] = tt
      })
    }
  },
  40182: (tt, et, Vt) => {
    var Ot = Vt(40037),
      qt = Vt(38899),
      Dt = Vt(40048),
      mt = Vt(40188),
      dt = Vt(40148);
    class jt extends mt.d {
      setDepthStencilTexture(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(tt, et), !tt) return;
        const Vt = this._engine,
          Ot = this._context,
          qt = tt._hardwareTexture;
        if (qt && tt._autoMSAAManagement && this._MSAAFramebuffer) {
          const et = Vt._currentFramebuffer;
          Vt._bindUnboundFramebuffer(this._MSAAFramebuffer), Ot.framebufferRenderbuffer(Ot.FRAMEBUFFER, (0, dt.b)(tt.format) ? Ot.DEPTH_STENCIL_ATTACHMENT : Ot.DEPTH_ATTACHMENT, Ot.RENDERBUFFER, qt.getMSAARenderBuffer()), Vt._bindUnboundFramebuffer(et)
        }
      }
      constructor(tt, et, Vt, Ot, qt) {
        super(tt, et, Vt, Ot), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = qt
      }
      _cloneRenderTargetWrapper() {
        let tt;
        return this._colorTextureArray && this._depthStencilTextureArray ? (tt = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), tt.texture.isReady = !0) : tt = super._cloneRenderTargetWrapper(), tt
      }
      _swapRenderTargetWrapper(tt) {
        super._swapRenderTargetWrapper(tt), tt._framebuffer = this._framebuffer, tt._depthStencilBuffer = this._depthStencilBuffer, tt._MSAAFramebuffer = this._MSAAFramebuffer, tt._colorTextureArray = this._colorTextureArray, tt._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const tt = this._engine,
            et = tt._currentFramebuffer,
            Vt = this._context;
          tt._bindUnboundFramebuffer(this._framebuffer), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_STENCIL_ATTACHMENT, Vt.RENDERBUFFER, null), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.DEPTH_ATTACHMENT, Vt.RENDERBUFFER, null), Vt.framebufferRenderbuffer(Vt.FRAMEBUFFER, Vt.STENCIL_ATTACHMENT, Vt.RENDERBUFFER, null), tt._bindUnboundFramebuffer(et), Vt.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(tt, et, Vt, Ot, qt, Dt)
      }
      shareDepth(tt) {
        super.shareDepth(tt);
        const et = this._context,
          Vt = this._depthStencilBuffer,
          Ot = tt._MSAAFramebuffer || tt._framebuffer,
          qt = this._engine;
        tt._depthStencilBuffer && tt._depthStencilBuffer !== Vt && et.deleteRenderbuffer(tt._depthStencilBuffer), tt._depthStencilBuffer = Vt;
        const Dt = tt._generateStencilBuffer ? et.DEPTH_STENCIL_ATTACHMENT : et.DEPTH_ATTACHMENT;
        qt._bindUnboundFramebuffer(Ot), et.framebufferRenderbuffer(et.FRAMEBUFFER, Dt, et.RENDERBUFFER, Vt), qt._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qt = tt._hardwareTexture;
        if (!qt) return;
        const Dt = this._framebuffer,
          mt = this._engine,
          dt = mt._currentFramebuffer;
        let jt;
        if (mt._bindUnboundFramebuffer(Dt), mt.Vw > 1) {
          const Dt = this._context;
          jt = Dt["COLOR_ATTACHMENT" + et], tt.is2DArray || tt.is3D ? (Vt = Vt ?? this.layerIndices?.[et] ?? 0, Dt.framebufferTextureLayer(Dt.FRAMEBUFFER, jt, qt.underlyingResource, Ot, Vt)) : tt.isCube ? (Vt = Vt ?? this.faceIndices?.[et] ?? 0, Dt.framebufferTexture2D(Dt.FRAMEBUFFER, jt, Dt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt, qt.underlyingResource, Ot)) : Dt.framebufferTexture2D(Dt.FRAMEBUFFER, jt, Dt.TEXTURE_2D, qt.underlyingResource, Ot)
        } else {
          const tt = this._context;
          jt = tt["COLOR_ATTACHMENT" + et + "_WEBGL"];
          const Dt = void 0 !== Vt ? tt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt : tt.TEXTURE_2D;
          tt.framebufferTexture2D(tt.FRAMEBUFFER, jt, Dt, qt.underlyingResource, Ot)
        }
        if (tt._autoMSAAManagement && this._MSAAFramebuffer) {
          const tt = this._context;
          mt._bindUnboundFramebuffer(this._MSAAFramebuffer), tt.framebufferRenderbuffer(tt.FRAMEBUFFER, jt, tt.RENDERBUFFER, qt.getMSAARenderBuffer())
        }
        mt._bindUnboundFramebuffer(dt)
      }
      setTexture(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(tt, et, Vt), this._bindTextureRenderTarget(tt, et)
      }
      setLayerAndFaceIndices(tt, et) {
        if (super.setLayerAndFaceIndices(tt, et), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Vt = this._attachments?.length ?? this.textures.length;
        for (let Ot = 0; Ot < Vt; Ot++) {
          const tt = this.textures[Ot];
          tt && (tt.is2DArray || tt.is3D ? this._bindTextureRenderTarget(tt, Ot, this.layerIndices[Ot]) : tt.isCube ? this._bindTextureRenderTarget(tt, Ot, this.faceIndices[Ot]) : this._bindTextureRenderTarget(tt, Ot))
        }
      }
      setLayerAndFaceIndex() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(tt, et, Vt), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Ot = this.textures[tt];
        Ot.is2DArray || Ot.is3D ? this._bindTextureRenderTarget(this.textures[tt], tt, this.layerIndices[tt]) : Ot.isCube && this._bindTextureRenderTarget(this.textures[tt], tt, this.faceIndices[tt])
      }
      resolveMSAATextures() {
        const tt = this._engine,
          et = tt._currentFramebuffer;
        tt._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), tt._bindUnboundFramebuffer(et)
      }
      dispose() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const et = this._context;
        tt || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (et.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (et.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (et.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(tt)
      }
    }
    let Ht = !1;
    Ht || (Ht = !0, Dt.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(tt, et, Vt) {
      const Ot = new jt(tt, et, Vt, this, this._gl);
      return this._renderTargetWrapperCache.push(Ot), Ot
    }, Dt.ThinEngine.prototype.createRenderTargetTexture = function(tt, et) {
      const Vt = this._createHardwareRenderTargetWrapper(!1, !1, tt);
      let Ot, qt, Dt = !0,
        mt = !1,
        dt = !1,
        jt = 1;
      void 0 !== et && "object" === typeof et && (Dt = et.generateDepthBuffer ?? !0, mt = !!et.generateStencilBuffer, dt = !!et.noColorAttachment, Ot = et.colorAttachment, jt = et.samples ?? 1, qt = et.label);
      const Ht = Ot || (dt ? null : this._createInternalTexture(tt, et, !0, 5)),
        Xt = tt.width || tt,
        Qt = tt.height || tt,
        lt = this._currentFramebuffer,
        Et = this._gl,
        ft = Et.createFramebuffer();
      if (this._bindUnboundFramebuffer(ft), Vt._depthStencilBuffer = this._setupFramebufferDepthAttachments(mt, Dt, Xt, Qt), !Ht || Ht.is2DArray || Ht.is3D || Et.framebufferTexture2D(Et.FRAMEBUFFER, Et.COLOR_ATTACHMENT0, Et.TEXTURE_2D, Ht._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(lt), Vt.label = qt ?? "RenderTargetWrapper", Vt._framebuffer = ft, Vt._generateDepthBuffer = Dt, Vt._generateStencilBuffer = mt, Vt.setTextures(Ht), Ot) {
        if (Vt._samples = Ot.samples, Ot.samples > 1) {
          const tt = Ot._hardwareTexture.getMSAARenderBuffer(0);
          Vt._MSAAFramebuffer = Et.createFramebuffer(), this._bindUnboundFramebuffer(Vt._MSAAFramebuffer), Et.framebufferRenderbuffer(Et.FRAMEBUFFER, Et.COLOR_ATTACHMENT0, Et.RENDERBUFFER, tt), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Vt, jt);
      return Vt
    }, Dt.ThinEngine.prototype._createDepthStencilTexture = function(tt, et, Vt) {
      const Dt = this._gl,
        mt = tt.layers || 0,
        jt = tt.depth || 0;
      let Ht = Dt.TEXTURE_2D;
      0 !== mt ? Ht = Dt.TEXTURE_2D_ARRAY : 0 !== jt && (Ht = Dt.TEXTURE_3D);
      const Xt = new Ot.d(this, 12);
      if (Xt.label = et.label, !this._caps.depthTextureExtension) return qt.d.Error("Depth texture is not supported by your browser or hardware."), Xt;
      const Qt = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...et
      };
      if (this._bindTextureDirectly(Ht, Xt, !0), this._setupDepthStencilTexture(Xt, tt, 0 !== Qt.comparisonFunction && Qt.bilinearFiltering, Qt.comparisonFunction, Qt.samples), void 0 !== Qt.depthTextureFormat) {
        if (15 !== Qt.depthTextureFormat && 16 !== Qt.depthTextureFormat && 17 !== Qt.depthTextureFormat && 13 !== Qt.depthTextureFormat && 14 !== Qt.depthTextureFormat && 18 !== Qt.depthTextureFormat) return qt.d.Error(`Depth texture ${Qt.depthTextureFormat} format is not supported.`), Xt;
        Xt.format = Qt.depthTextureFormat
      } else Xt.format = Qt.generateStencil ? 13 : 16;
      const lt = (0, dt.b)(Xt.format),
        Et = this._getWebGLTextureTypeFromDepthTextureFormat(Xt.format),
        ft = lt ? Dt.DEPTH_STENCIL : Dt.DEPTH_COMPONENT,
        wt = this._getInternalFormatFromDepthTextureFormat(Xt.format, !0, lt);
      return Xt.is2DArray ? Dt.texImage3D(Ht, 0, wt, Xt.width, Xt.height, mt, 0, ft, Et, null) : Xt.is3D ? Dt.texImage3D(Ht, 0, wt, Xt.width, Xt.height, jt, 0, ft, Et, null) : Dt.texImage2D(Ht, 0, wt, Xt.width, Xt.height, 0, ft, Et, null), this._bindTextureDirectly(Ht, null), this._internalTexturesCache.push(Xt), Vt._depthStencilBuffer && (Dt.deleteRenderbuffer(Vt._depthStencilBuffer), Vt._depthStencilBuffer = null), this._bindUnboundFramebuffer(Vt._MSAAFramebuffer ?? Vt._framebuffer), Vt._generateStencilBuffer = lt, Vt._depthStencilTextureWithStencil = lt, Vt._depthStencilBuffer = this._setupFramebufferDepthAttachments(Vt._generateStencilBuffer, Vt._generateDepthBuffer, Vt.width, Vt.height, Vt.samples, Xt.format), this._bindUnboundFramebuffer(null), Xt
    }, Dt.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(tt, et) {
      if (this.Vw < 2 || !tt) return 1;
      if (tt.samples === et) return et;
      const Vt = this._gl;
      et = Math.min(et, this.getCaps().maxMSAASamples), tt._depthStencilBuffer && (Vt.deleteRenderbuffer(tt._depthStencilBuffer), tt._depthStencilBuffer = null), tt._MSAAFramebuffer && (Vt.deleteFramebuffer(tt._MSAAFramebuffer), tt._MSAAFramebuffer = null);
      const Ot = tt.texture?._hardwareTexture;
      if (Ot?.releaseMSAARenderBuffers(), tt.texture && et > 1 && "function" === typeof Vt.renderbufferStorageMultisample) {
        const qt = Vt.createFramebuffer();
        if (!qt) throw new Error("Unable to create multi sampled framebuffer");
        tt._MSAAFramebuffer = qt, this._bindUnboundFramebuffer(tt._MSAAFramebuffer);
        const Dt = this._createRenderBuffer(tt.texture.width, tt.texture.height, et, -1, this._getRGBABufferInternalSizedFormat(tt.texture.type, tt.texture.format, tt.texture._useSRGBBuffer), Vt.COLOR_ATTACHMENT0, !1);
        if (!Dt) throw new Error("Unable to create multi sampled framebuffer");
        Ot?.addMSAARenderBuffer(Dt)
      }
      this._bindUnboundFramebuffer(tt._MSAAFramebuffer ?? tt._framebuffer), tt.texture && (tt.texture.samples = et), tt._samples = et;
      const qt = tt._depthStencilTexture ? tt._depthStencilTexture.format : void 0;
      return tt._depthStencilBuffer = this._setupFramebufferDepthAttachments(tt._generateStencilBuffer, tt._generateDepthBuffer, tt.width, tt.height, et, qt), this._bindUnboundFramebuffer(null), et
    }, Dt.ThinEngine.prototype._setupDepthStencilTexture = function(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Dt = et.width ?? et,
        mt = et.height ?? et,
        dt = et.layers || 0,
        jt = et.depth || 0;
      tt.baseWidth = Dt, tt.baseHeight = mt, tt.width = Dt, tt.height = mt, tt.is2DArray = dt > 0, tt.depth = dt || jt, tt.isReady = !0, tt.samples = qt, tt.generateMipMaps = !1, tt.samplingMode = Vt ? 2 : 1, tt.type = 0, tt._comparisonFunction = Ot;
      const Ht = this._gl,
        Xt = this._getTextureTarget(tt),
        Qt = this._getSamplingParameters(tt.samplingMode, !1);
      Ht.texParameteri(Xt, Ht.TEXTURE_MAG_FILTER, Qt.mag), Ht.texParameteri(Xt, Ht.TEXTURE_MIN_FILTER, Qt.min), Ht.texParameteri(Xt, Ht.TEXTURE_WRAP_S, Ht.CLAMP_TO_EDGE), Ht.texParameteri(Xt, Ht.TEXTURE_WRAP_T, Ht.CLAMP_TO_EDGE), this.Vw > 1 && (0 === Ot ? (Ht.texParameteri(Xt, Ht.TEXTURE_COMPARE_FUNC, 515), Ht.texParameteri(Xt, Ht.TEXTURE_COMPARE_MODE, Ht.NONE)) : (Ht.texParameteri(Xt, Ht.TEXTURE_COMPARE_FUNC, Ot), Ht.texParameteri(Xt, Ht.TEXTURE_COMPARE_MODE, Ht.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40023: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot.c
    });
    var Ot = Vt(40031);
    (0, Vt(40168).c)();
    var qt = Vt(40048);
    let Dt = !1;
    ! function() {
      if (Dt) return;
      Dt = !0;
      const tt = new WeakMap,
        et = new WeakMap,
        Vt = new WeakMap,
        Ot = new WeakMap;
      qt.ThinEngine.prototype.getAlphaToCoverage = function() {
        return tt.get(this) ?? !1
      }, qt.ThinEngine.prototype.setAlphaToCoverage = function(Vt) {
        (tt.get(this) !== Vt || this._gl && et.get(this) !== this._gl) && (tt.set(this, Vt), this._gl && (Vt ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), et.set(this, this._gl)))
      }, Object.defineProperty(qt.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Ot.get(this) !== this._gl && (Vt.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Ot.set(this, this._gl)), Vt.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var mt = Vt(40037),
      dt = Vt(38899),
      jt = Vt(40131);
    let Ht = !1;
    ! function() {
      function tt(tt, et, Vt, Ot) {
        let qt, Dt = 1;
        1 === Ot ? qt = new Float32Array(et * Vt * 4) : 2 === Ot ? (qt = new Uint16Array(et * Vt * 4), Dt = 15360) : qt = 7 === Ot ? new Uint32Array(et * Vt * 4) : new Uint8Array(et * Vt * 4);
        for (let mt = 0; mt < et; mt++)
          for (let Ot = 0; Ot < Vt; Ot++) {
            const Vt = 3 * (Ot * et + mt),
              dt = 4 * (Ot * et + mt);
            qt[dt + 0] = tt[Vt + 0], qt[dt + 1] = tt[Vt + 1], qt[dt + 2] = tt[Vt + 2], qt[dt + 3] = Dt
          }
        return qt
      }

      function et(tt) {
        return function(et, Vt, Ot, qt, Dt, dt, jt, Ht) {
          let Xt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Qt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const lt = tt ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Et = tt ? 10 : 11,
            ft = new mt.d(this, Et);
          ft.baseWidth = Vt, ft.baseHeight = Ot, ft.baseDepth = qt, ft.width = Vt, ft.height = Ot, ft.depth = qt, ft.format = Dt, ft.type = Qt, ft.generateMipMaps = dt, ft.samplingMode = Ht, tt ? ft.is3D = !0 : ft.is2DArray = !0, this._doNotHandleContextLost || (ft._bufferView = et), tt ? this.updateRawTexture3D(ft, et, Dt, jt, Xt, Qt) : this.updateRawTexture2DArray(ft, et, Dt, jt, Xt, Qt), this._bindTextureDirectly(lt, ft, !0);
          const wt = this._getSamplingParameters(Ht, dt);
          return this._gl.texParameteri(lt, this._gl.TEXTURE_MAG_FILTER, wt.mag), this._gl.texParameteri(lt, this._gl.TEXTURE_MIN_FILTER, wt.min), dt && this._gl.generateMipmap(lt), this._bindTextureDirectly(lt, null), this._internalTexturesCache.push(ft), ft
        }
      }

      function Vt(tt) {
        return function(et, Vt, Ot, qt) {
          let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const dt = tt ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            jt = this._getWebGLTextureType(mt),
            Ht = this._getInternalFormat(Ot),
            Xt = this._getRGBABufferInternalSizedFormat(mt, Ot);
          this._bindTextureDirectly(dt, et, !0), this._unpackFlipY(void 0 === qt || !!qt), this._doNotHandleContextLost || (et._bufferView = Vt, et.format = Ot, et.invertY = qt, et._compression = Dt), et.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Dt && Vt ? this._gl.compressedTexImage3D(dt, 0, this.getCaps().s3tc[Dt], et.width, et.height, et.depth, 0, Vt) : this._gl.texImage3D(dt, 0, Xt, et.width, et.height, et.depth, 0, Ht, jt, Vt), et.generateMipMaps && this._gl.generateMipmap(dt), this._bindTextureDirectly(dt, null), et.isReady = !0
        }
      }
      Ht || (Ht = !0, qt.ThinEngine.prototype.updateRawTexture = function(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!tt) return;
        const dt = this._getRGBABufferInternalSizedFormat(Dt, Vt, mt),
          jt = this._getInternalFormat(Vt),
          Ht = this._getWebGLTextureType(Dt);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, tt, !0), this._unpackFlipY(void 0 === Ot || !!Ot), this._doNotHandleContextLost || (tt._bufferView = et, tt.format = Vt, tt.type = Dt, tt.invertY = Ot, tt._compression = qt), tt.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), qt && et ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[qt], tt.width, tt.height, 0, et) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, dt, tt.width, tt.height, 0, jt, Ht, et), tt.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), tt.isReady = !0
      }, qt.ThinEngine.prototype.createRawTexture = function(tt, et, Vt, Ot, qt, Dt, dt) {
        let jt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Xt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Qt = new mt.d(this, 3);
        Qt.baseWidth = et, Qt.baseHeight = Vt, Qt.width = et, Qt.height = Vt, Qt.format = Ot, Qt.generateMipMaps = qt, Qt.samplingMode = dt, Qt.invertY = Dt, Qt._compression = jt, Qt.type = Ht, Qt._useSRGBBuffer = this._getUseSRGBBuffer(Xt, !qt), this._doNotHandleContextLost || (Qt._bufferView = tt), this.updateRawTexture(Qt, tt, Ot, Dt, jt, Ht, Qt._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Qt, !0);
        const lt = this._getSamplingParameters(dt, qt);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, lt.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, lt.min), qt && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Qt), Qt
      }, qt.ThinEngine.prototype.createRawCubeTexture = function(tt, et, Vt, Ot, qt, Dt, Ht) {
        let Xt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Qt = this._gl,
          lt = new mt.d(this, 8);
        lt.isCube = !0, lt.format = Vt, lt.type = Ot, this._doNotHandleContextLost || (lt._bufferViewArray = tt);
        const Et = this._getWebGLTextureType(Ot);
        let ft = this._getInternalFormat(Vt);
        ft === Qt.RGB && (ft = Qt.RGBA), Et !== Qt.FLOAT || this._caps.textureFloatLinearFiltering ? Et !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Et !== Qt.FLOAT || this._caps.textureFloatRender ? Et !== Qt.HALF_FLOAT || this._caps.colorBufferFloat || (qt = !1, dt.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (qt = !1, dt.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (qt = !1, Ht = 1, dt.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (qt = !1, Ht = 1, dt.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const wt = et,
          yt = wt;
        lt.width = wt, lt.height = yt, lt.invertY = Dt, lt._compression = Xt;
        if (!this.needPOTTextures || (0, jt.h)(lt.width) && (0, jt.h)(lt.height) || (qt = !1), tt) this.updateRawCubeTexture(lt, tt, Vt, Ot, Dt, Xt);
        else {
          const tt = this._getRGBABufferInternalSizedFormat(Ot),
            et = 0;
          this._bindTextureDirectly(Qt.TEXTURE_CUBE_MAP, lt, !0);
          for (let Vt = 0; Vt < 6; Vt++) Xt ? Qt.compressedTexImage2D(Qt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt, et, this.getCaps().s3tc[Xt], lt.width, lt.height, 0, void 0) : Qt.texImage2D(Qt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt, et, tt, lt.width, lt.height, 0, ft, Et, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, lt, !0), tt && qt && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Nt = this._getSamplingParameters(Ht, qt);
        return Qt.texParameteri(Qt.TEXTURE_CUBE_MAP, Qt.TEXTURE_MAG_FILTER, Nt.mag), Qt.texParameteri(Qt.TEXTURE_CUBE_MAP, Qt.TEXTURE_MIN_FILTER, Nt.min), Qt.texParameteri(Qt.TEXTURE_CUBE_MAP, Qt.TEXTURE_WRAP_S, Qt.CLAMP_TO_EDGE), Qt.texParameteri(Qt.TEXTURE_CUBE_MAP, Qt.TEXTURE_WRAP_T, Qt.CLAMP_TO_EDGE), this._bindTextureDirectly(Qt.TEXTURE_CUBE_MAP, null), lt.generateMipMaps = qt, lt.samplingMode = Ht, lt.isReady = !0, lt
      }, qt.ThinEngine.prototype.updateRawCubeTexture = function(et, Vt, Ot, qt, Dt) {
        let mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        et._bufferViewArray = Vt, et.format = Ot, et.type = qt, et.invertY = Dt, et._compression = mt;
        const Ht = this._gl,
          Xt = this._getWebGLTextureType(qt);
        let Qt = this._getInternalFormat(Ot);
        const lt = this._getRGBABufferInternalSizedFormat(qt);
        let Et = !1;
        Qt === Ht.RGB && (Qt = Ht.RGBA, Et = !0), this._bindTextureDirectly(Ht.TEXTURE_CUBE_MAP, et, !0), this._unpackFlipY(void 0 === Dt || !!Dt), et.width % 4 !== 0 && Ht.pixelStorei(Ht.UNPACK_ALIGNMENT, 1);
        for (let jt = 0; jt < 6; jt++) {
          let Ot = Vt[jt];
          mt ? Ht.compressedTexImage2D(Ht.TEXTURE_CUBE_MAP_POSITIVE_X + jt, dt, this.getCaps().s3tc[mt], et.width, et.height, 0, Ot) : (Et && (Ot = tt(Ot, et.width, et.height, qt)), Ht.texImage2D(Ht.TEXTURE_CUBE_MAP_POSITIVE_X + jt, dt, lt, et.width, et.height, 0, Qt, Xt, Ot))
        }(!this.needPOTTextures || (0, jt.h)(et.width) && (0, jt.h)(et.height)) && et.generateMipMaps && 0 === dt && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), et.isReady = !0
      }, qt.ThinEngine.prototype.createRawCubeTextureFromUrl = function(et, Vt, Ot, qt, Dt, mt, dt, jt) {
        let Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Xt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Qt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          lt = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Et = this._gl,
          ft = this.createRawCubeTexture(null, Ot, qt, Dt, !mt, lt, Qt, null);
        Vt?.addPendingData(ft), ft.url = et, ft.isReady = !1, this._internalTexturesCache.push(ft);
        const wt = (tt, et) => {
            Vt?.removePendingData(ft), Xt && Xt(tt ? tt.status + " " + tt.statusText : "Failed to parse texture data", et)
          },
          yt = async et => {
            if (!ft._hardwareTexture) return;
            const Ot = dt(et);
            if (!Ot) return;
            const mt = Ot instanceof Promise ? await Ot : Ot,
              Xt = ft.width;
            if (jt) {
              const et = this._getWebGLTextureType(Dt);
              let Vt = this._getInternalFormat(qt);
              const Ot = this._getRGBABufferInternalSizedFormat(Dt);
              let dt = !1;
              Vt === Et.RGB && (Vt = Et.RGBA, dt = !0), this._bindTextureDirectly(Et.TEXTURE_CUBE_MAP, ft, !0), this._unpackFlipY(!1);
              const Ht = jt(mt);
              for (let qt = 0; qt < Ht.length; qt++) {
                const mt = Xt >> qt;
                for (let jt = 0; jt < 6; jt++) {
                  let Xt = Ht[qt][jt];
                  dt && (Xt = tt(Xt, mt, mt, Dt)), Et.texImage2D(jt, qt, Ot, mt, mt, 0, Vt, et, Xt)
                }
              }
              this._bindTextureDirectly(Et.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(ft, mt, qt, Dt, lt);
            ft.isReady = !0, Vt?.removePendingData(ft), ft.onLoadedObservable.notifyObservers(ft), ft.onLoadedObservable.clear(), Ht && Ht()
          };
        return this._loadFile(et, (tt => {
          yt(tt).catch((tt => {
            wt(void 0, tt)
          }))
        }), void 0, Vt?.offlineProvider, !0, wt), ft
      }, qt.ThinEngine.prototype.createRawTexture2DArray = et(!1), qt.ThinEngine.prototype.createRawTexture3D = et(!0), qt.ThinEngine.prototype.updateRawTexture2DArray = Vt(!1), qt.ThinEngine.prototype.updateRawTexture3D = Vt(!0))
    }();
    var Xt = Vt(40076);
    let Qt = !1;
    Qt || (Qt = !0, qt.ThinEngine.prototype._readTexturePixelsSync = function(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Ht = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Qt = this._gl;
      if (!Qt) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const tt = Qt.createFramebuffer();
        if (!tt) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = tt
      }
      Qt.bindFramebuffer(Qt.FRAMEBUFFER, this._dummyFramebuffer), Ot > -1 && (tt.is2DArray || tt.is3D) ? Qt.framebufferTextureLayer(Qt.FRAMEBUFFER, Qt.COLOR_ATTACHMENT0, tt._hardwareTexture?.underlyingResource, qt, Ot) : Ot > -1 ? Qt.framebufferTexture2D(Qt.FRAMEBUFFER, Qt.COLOR_ATTACHMENT0, Qt.TEXTURE_CUBE_MAP_POSITIVE_X + Ot, tt._hardwareTexture?.underlyingResource, qt) : Qt.framebufferTexture2D(Qt.FRAMEBUFFER, Qt.COLOR_ATTACHMENT0, Qt.TEXTURE_2D, tt._hardwareTexture?.underlyingResource, qt);
      let lt = void 0 !== tt.type ? this._getWebGLTextureType(tt.type) : Qt.UNSIGNED_BYTE;
      return dt ? Dt || (Dt = (0, Xt.k)(tt.type, 4 * et * Vt)) : lt === Qt.UNSIGNED_BYTE ? (Dt || (Dt = new Uint8Array(4 * et * Vt)), lt = Qt.UNSIGNED_BYTE) : (Dt || (Dt = new Float32Array(4 * et * Vt)), lt = Qt.FLOAT), mt && this.flushFramebuffer(), Qt.readPixels(jt, Ht, et, Vt, Qt.RGBA, lt, Dt), Qt.bindFramebuffer(Qt.FRAMEBUFFER, this._currentFramebuffer), Dt
    }, qt.ThinEngine.prototype._readTexturePixels = function(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Ht = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht))
    }), (0, Vt(40177).e)();
    let lt = !1;
    lt || (lt = !0, qt.ThinEngine.prototype._createDepthStencilCubeTexture = function(tt, et) {
      const Vt = new mt.d(this, 12);
      if (Vt.isCube = !0, 1 === this.Vw) return dt.d.Error("Depth cube texture is not supported by WebGL 1."), Vt;
      const Ot = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...et
        },
        qt = this._gl;
      this._bindTextureDirectly(qt.TEXTURE_CUBE_MAP, Vt, !0), this._setupDepthStencilTexture(Vt, tt, Ot.bilinearFiltering, Ot.comparisonFunction);
      for (let Dt = 0; Dt < 6; Dt++) Ot.generateStencil ? qt.texImage2D(qt.TEXTURE_CUBE_MAP_POSITIVE_X + Dt, 0, qt.DEPTH24_STENCIL8, tt, tt, 0, qt.DEPTH_STENCIL, qt.UNSIGNED_INT_24_8, null) : qt.texImage2D(qt.TEXTURE_CUBE_MAP_POSITIVE_X + Dt, 0, qt.DEPTH_COMPONENT24, tt, tt, 0, qt.DEPTH_COMPONENT, qt.UNSIGNED_INT, null);
      return this._bindTextureDirectly(qt.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Vt), Vt
    }, qt.ThinEngine.prototype._setCubeMapTextureParams = function(tt, et, Vt) {
      const Ot = this._gl;
      Ot.texParameteri(Ot.TEXTURE_CUBE_MAP, Ot.TEXTURE_MAG_FILTER, Ot.LINEAR), Ot.texParameteri(Ot.TEXTURE_CUBE_MAP, Ot.TEXTURE_MIN_FILTER, et ? Ot.LINEAR_MIPMAP_LINEAR : Ot.LINEAR), Ot.texParameteri(Ot.TEXTURE_CUBE_MAP, Ot.TEXTURE_WRAP_S, Ot.CLAMP_TO_EDGE), Ot.texParameteri(Ot.TEXTURE_CUBE_MAP, Ot.TEXTURE_WRAP_T, Ot.CLAMP_TO_EDGE), tt.samplingMode = et ? 3 : 2, et && this.getCaps().textureMaxLevel && void 0 !== Vt && Vt > 0 && (Ot.texParameteri(Ot.TEXTURE_CUBE_MAP, Ot.TEXTURE_MAX_LEVEL, Vt), tt._maxLodLevel = Vt), this._bindTextureDirectly(Ot.TEXTURE_CUBE_MAP, null)
    }, qt.ThinEngine.prototype.createCubeTexture = function(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mt = arguments.length > 6 ? arguments[6] : void 0,
        Ht = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Xt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Qt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        lt = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Et = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        ft = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        wt = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const yt = this._gl;
      return this.createCubeTextureBase(tt, et, Vt, !!Ot, qt, Dt, mt, Ht, Xt, Qt, lt, Et, (tt => this._bindTextureDirectly(yt.TEXTURE_CUBE_MAP, tt, !0)), ((tt, et) => {
        const Vt = this.needPOTTextures ? (0, jt.g)(et[0].width, this._caps.maxCubemapTextureSize) : et[0].width,
          Dt = Vt,
          Ht = [yt.TEXTURE_CUBE_MAP_POSITIVE_X, yt.TEXTURE_CUBE_MAP_POSITIVE_Y, yt.TEXTURE_CUBE_MAP_POSITIVE_Z, yt.TEXTURE_CUBE_MAP_NEGATIVE_X, yt.TEXTURE_CUBE_MAP_NEGATIVE_Y, yt.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(yt.TEXTURE_CUBE_MAP, tt, !0), this._unpackFlipY(!1);
        const Xt = mt ? this._getInternalFormat(mt, tt._useSRGBBuffer) : tt._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : yt.RGBA;
        let Qt = mt ? this._getInternalFormat(mt) : yt.RGBA;
        tt._useSRGBBuffer && 1 === this.Vw && (Qt = Xt);
        for (let Ot = 0; Ot < Ht.length; Ot++)
          if (et[Ot].width !== Vt || et[Ot].height !== Dt) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void dt.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Vt, this._workingCanvas.height = Dt, this._workingContext.drawImage(et[Ot], 0, 0, et[Ot].width, et[Ot].height, 0, 0, Vt, Dt), yt.texImage2D(Ht[Ot], 0, Xt, Qt, yt.UNSIGNED_BYTE, this._workingCanvas)
          } else yt.texImage2D(Ht[Ot], 0, Xt, Qt, yt.UNSIGNED_BYTE, et[Ot]);
        Ot || yt.generateMipmap(yt.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(tt, !Ot), tt.width = Vt, tt.height = Dt, tt.isReady = !0, mt && (tt.format = mt), tt.onLoadedObservable.notifyObservers(tt), tt.onLoadedObservable.clear(), qt && qt()
      }), !!ft, wt)
    }, qt.ThinEngine.prototype.generateMipMapsForCubemap = function(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (tt.generateMipMaps) {
        const Vt = this._gl;
        this._bindTextureDirectly(Vt.TEXTURE_CUBE_MAP, tt, !0), Vt.generateMipmap(Vt.TEXTURE_CUBE_MAP), et && this._bindTextureDirectly(Vt.TEXTURE_CUBE_MAP, null)
      }
    });
    Vt(40182);
    let Et = !1;
    Et || (Et = !0, qt.ThinEngine.prototype.setDepthStencilTexture = function(tt, et, Vt, Ot) {
      void 0 !== tt && (et && (this._boundUniforms[tt] = et), Vt && Vt.depthStencilTexture ? this._setTexture(tt, Vt, !1, !0, Ot) : this._setTexture(tt, null, void 0, void 0, Ot))
    });
    let ft = !1;
    ft || (ft = !0, qt.ThinEngine.prototype.createRenderTargetCubeTexture = function(tt, et) {
      const Vt = this._createHardwareRenderTargetWrapper(!1, !0, tt),
        Ot = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...et
        };
      Ot.generateStencilBuffer = Ot.generateDepthBuffer && Ot.generateStencilBuffer, (1 !== Ot.type || this._caps.textureFloatLinearFiltering) && (2 !== Ot.type || this._caps.textureHalfFloatLinearFiltering) || (Ot.samplingMode = 1);
      const qt = this._gl,
        Dt = new mt.d(this, 5);
      this._bindTextureDirectly(qt.TEXTURE_CUBE_MAP, Dt, !0);
      const jt = this._getSamplingParameters(Ot.samplingMode, Ot.generateMipMaps);
      1 !== Ot.type || this._caps.textureFloat || (Ot.type = 0, dt.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), qt.texParameteri(qt.TEXTURE_CUBE_MAP, qt.TEXTURE_MAG_FILTER, jt.mag), qt.texParameteri(qt.TEXTURE_CUBE_MAP, qt.TEXTURE_MIN_FILTER, jt.min), qt.texParameteri(qt.TEXTURE_CUBE_MAP, qt.TEXTURE_WRAP_S, qt.CLAMP_TO_EDGE), qt.texParameteri(qt.TEXTURE_CUBE_MAP, qt.TEXTURE_WRAP_T, qt.CLAMP_TO_EDGE);
      for (let mt = 0; mt < 6; mt++) qt.texImage2D(qt.TEXTURE_CUBE_MAP_POSITIVE_X + mt, 0, this._getRGBABufferInternalSizedFormat(Ot.type, Ot.format), tt, tt, 0, this._getInternalFormat(Ot.format), this._getWebGLTextureType(Ot.type), null);
      const Ht = qt.createFramebuffer();
      return this._bindUnboundFramebuffer(Ht), Vt._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ot.generateStencilBuffer, Ot.generateDepthBuffer, tt, tt), Ot.generateMipMaps && qt.generateMipmap(qt.TEXTURE_CUBE_MAP), this._bindTextureDirectly(qt.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Vt._framebuffer = Ht, Vt._generateDepthBuffer = Ot.generateDepthBuffer, Vt._generateStencilBuffer = Ot.generateStencilBuffer, Dt.width = tt, Dt.height = tt, Dt.isReady = !0, Dt.isCube = !0, Dt.samples = 1, Dt.generateMipMaps = Ot.generateMipMaps, Dt.samplingMode = Ot.samplingMode, Dt.type = Ot.type, Dt.format = Ot.format, this._internalTexturesCache.push(Dt), Vt.setTextures(Dt), Vt
    });
    var wt = Vt(40194),
      yt = Vt(40202);
    let Nt = !1;
    Nt || (Nt = !0, qt.ThinEngine.prototype.createPrefilteredCubeTexture = function(tt, et, Ot, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        jt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ht = arguments.length > 6 ? arguments[6] : void 0,
        Xt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Qt = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        lt = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(tt, et, null, !1, (async tt => {
        if (!tt) return void(Dt && Dt(null));
        const jt = tt.texture;
        if (Qt ? tt.info.sphericalPolynomial && (jt._sphericalPolynomial = tt.info.sphericalPolynomial) : jt._sphericalPolynomial = jt._sphericalPolynomial ?? new wt.g, jt._source = 9, this.getCaps().textureLOD) return void(Dt && Dt(jt));
        const Ht = this._gl,
          Xt = tt.width;
        if (!Xt) return;
        const {
          DDSTools: lt
        } = await Vt.e(311).then((() => Vt(42023))), Et = [];
        for (let Vt = 0; Vt < 3; Vt++) {
          const Dt = 1 - Vt / 2,
            Qt = qt,
            ft = Math.log2(Xt) * Ot + qt,
            wt = Qt + (ft - Qt) * Dt,
            Nt = Math.round(Math.min(Math.max(wt, 0), ft)),
            Mt = new mt.d(this, 2);
          if (Mt.type = jt.type, Mt.format = jt.format, Mt.width = Math.pow(2, Math.max(Math.log2(Xt) - Nt, 0)), Mt.height = Mt.width, Mt.isCube = !0, Mt._cachedWrapU = 0, Mt._cachedWrapV = 0, this._bindTextureDirectly(Ht.TEXTURE_CUBE_MAP, Mt, !0), Mt.samplingMode = 2, Ht.texParameteri(Ht.TEXTURE_CUBE_MAP, Ht.TEXTURE_MAG_FILTER, Ht.LINEAR), Ht.texParameteri(Ht.TEXTURE_CUBE_MAP, Ht.TEXTURE_MIN_FILTER, Ht.LINEAR), Ht.texParameteri(Ht.TEXTURE_CUBE_MAP, Ht.TEXTURE_WRAP_S, Ht.CLAMP_TO_EDGE), Ht.texParameteri(Ht.TEXTURE_CUBE_MAP, Ht.TEXTURE_WRAP_T, Ht.CLAMP_TO_EDGE), tt.isDDS) {
            const et = tt.info,
              Vt = tt.data;
            this._unpackFlipY(et.isCompressed), lt.UploadDDSLevels(this, Mt, Vt, et, !0, 6, Nt)
          } else dt.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Ht.TEXTURE_CUBE_MAP, null);
          const bt = new yt.b(et);
          bt._isCube = !0, bt._texture = Mt, Mt.isReady = !0, Et.push(bt)
        }
        jt._lodTextureHigh = Et[2], jt._lodTextureMid = Et[1], jt._lodTextureLow = Et[0], Dt && Dt(jt)
      }), jt, Ht, Xt, Qt, Ot, qt, null, void 0, !1, lt)
    });
    var Mt = Vt(40119);
    let bt = !1;
    bt || (bt = !0, qt.ThinEngine.prototype.createUniformBuffer = function(tt, et) {
      const Vt = this._gl.createBuffer();
      if (!Vt) throw new Error("Unable to create uniform buffer");
      const Ot = new Mt.e(Vt);
      return this.bindUniformBuffer(Ot), tt instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, tt, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(tt), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Ot.references = 1, Ot
    }, qt.ThinEngine.prototype.createDynamicUniformBuffer = function(tt, et) {
      const Vt = this._gl.createBuffer();
      if (!Vt) throw new Error("Unable to create dynamic uniform buffer");
      const Ot = new Mt.e(Vt);
      return this.bindUniformBuffer(Ot), tt instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, tt, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(tt), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Ot.references = 1, Ot
    }, qt.ThinEngine.prototype.updateUniformBuffer = function(tt, et, Vt, Ot) {
      this.bindUniformBuffer(tt), void 0 === Vt && (Vt = 0), void 0 === Ot ? et instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Vt, et) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Vt, new Float32Array(et)) : et instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, et.subarray(Vt, Vt + Ot)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(et).subarray(Vt, Vt + Ot)), this.bindUniformBuffer(null)
    }, qt.ThinEngine.prototype.bindUniformBuffer = function(tt) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, tt ? tt.underlyingResource : null)
    }, qt.ThinEngine.prototype.bindUniformBufferBase = function(tt, et, Vt) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, et, tt ? tt.underlyingResource : null)
    }, qt.ThinEngine.prototype.bindUniformBlock = function(tt, et, Vt) {
      const Ot = tt.program,
        qt = this._gl.getUniformBlockIndex(Ot, et);
      4294967295 !== qt && this._gl.uniformBlockBinding(Ot, qt, Vt)
    });
    var Jt = Vt(40068),
      Ct = Vt(40092);
    let ut = !1;
    ut || (ut = !0, Ct.d.prototype.displayLoadingUI = function() {
      if (!(0, Jt.j)()) return;
      const tt = this.loadingScreen;
      tt && tt.displayLoadingUI()
    }, Ct.d.prototype.hideLoadingUI = function() {
      if (!(0, Jt.j)()) return;
      const tt = this._loadingScreen;
      tt && tt.hideLoadingUI()
    }, Object.defineProperty(Ct.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Ct.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(tt) {
        this._loadingScreen = tt
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Ct.d.prototype, "loadingUIText", {
      set: function(tt) {
        this.loadingScreen.loadingUIText = tt
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Ct.d.prototype, "loadingUIBackgroundColor", {
      set: function(tt) {
        this.loadingScreen.loadingUIBackgroundColor = tt
      },
      enumerable: !0,
      configurable: !0
    })), (0, Vt(40158).d)();
    let Kt = !1;
    Kt || (Kt = !0, Ct.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Ct.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Ct.d.prototype.setDepthFunction = function(tt) {
      this._depthCullingState.depthFunc = tt
    }, Ct.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Ct.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Ct.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Ct.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Ct.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Ct.d.prototype.setDepthWrite = function(tt) {
      this._depthCullingState.depthMask = tt
    }, Ct.d.prototype.setAlphaConstants = function(tt, et, Vt, Ot) {
      this._alphaState.setAlphaBlendConstants(tt, et, Vt, Ot)
    }, Ct.d.prototype.getAlphaMode = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[tt]
    }, Ct.d.prototype.getAlphaEquation = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[tt]
    });
    let ht = !1;
    ht || (ht = !0, Ct.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Ct.d.prototype.setStencilBuffer = function(tt) {
      this._stencilState.stencilTest = tt
    }, Ct.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Ct.d.prototype.setStencilMask = function(tt) {
      this._stencilState.stencilMask = tt
    }, Ct.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Ct.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Ct.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Ct.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Ct.d.prototype.setStencilFunction = function(tt) {
      this._stencilState.stencilFunc = tt
    }, Ct.d.prototype.setStencilBackFunction = function(tt) {
      this._stencilState.stencilBackFunc = tt
    }, Ct.d.prototype.setStencilFunctionReference = function(tt) {
      this._stencilState.stencilFuncRef = tt
    }, Ct.d.prototype.setStencilFunctionMask = function(tt) {
      this._stencilState.stencilFuncMask = tt
    }, Ct.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Ct.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Ct.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Ct.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Ct.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Ct.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Ct.d.prototype.setStencilOperationFail = function(tt) {
      this._stencilState.stencilOpStencilFail = tt
    }, Ct.d.prototype.setStencilBackOperationFail = function(tt) {
      this._stencilState.stencilBackOpStencilFail = tt
    }, Ct.d.prototype.setStencilOperationDepthFail = function(tt) {
      this._stencilState.stencilOpDepthFail = tt
    }, Ct.d.prototype.setStencilBackOperationDepthFail = function(tt) {
      this._stencilState.stencilBackOpDepthFail = tt
    }, Ct.d.prototype.setStencilOperationPass = function(tt) {
      this._stencilState.stencilOpStencilDepthPass = tt
    }, Ct.d.prototype.setStencilBackOperationPass = function(tt) {
      this._stencilState.stencilBackOpStencilDepthPass = tt
    }, Ct.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Ct.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Vt(40244);
    let vt = !1;
    vt || (vt = !0, Ct.d.prototype.createDepthStencilTexture = function(tt, et, Vt) {
      if (et.isCube) {
        const Vt = tt.width || tt;
        return this._createDepthStencilCubeTexture(Vt, et)
      }
      return this._createDepthStencilTexture(tt, et, Vt)
    });
    Vt(40246), Vt(40278);
    let Wt = !1;
    Wt || (Wt = !0, qt.ThinEngine.prototype.enableScissor = function(tt, et, Vt, Ot) {
      const qt = this._gl;
      qt.enable(qt.SCISSOR_TEST), qt.scissor(tt, et, Vt, Ot)
    }, qt.ThinEngine.prototype.disableScissor = function() {
      const tt = this._gl;
      tt.disable(tt.SCISSOR_TEST)
    })
  },
  40031: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ct
    });
    var Ot = Vt(40037),
      qt = Vt(37359),
      Dt = Vt(40048),
      mt = Vt(40098);
    class dt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new jt(tt)
      }
      sampleFrame() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const et = tt - this._lastFrameTimeMs;
            this._rollingFrameTime.add(et)
          }
          this._lastFrameTimeMs = tt
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
        const tt = this._rollingFrameTime.history(0);
        return 0 === tt ? 0 : 1e3 / tt
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
    class jt {
      constructor(tt) {
        this._samples = new Array(tt), this.reset()
      }
      add(tt) {
        let et;
        if (this.isSaturated()) {
          const tt = this._samples[this._pos];
          et = tt - this.average, this.average -= et / (this._sampleCount - 1), this._m2 -= et * (tt - this.average)
        } else this._sampleCount++;
        et = tt - this.average, this.average += et / this._sampleCount, this._m2 += et * (tt - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = tt, this._pos++, this._pos %= this._samples.length
      }
      history(tt) {
        if (tt >= this._sampleCount || tt >= this._samples.length) return 0;
        const et = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(et - tt)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(tt) {
        const et = this._samples.length;
        return (tt % et + et) % et
      }
    }
    var Ht = Vt(40119),
      Xt = Vt(38899),
      Qt = Vt(40140),
      lt = Vt(40092),
      Et = Vt(40068);

    function ft(tt) {
      const et = function(tt) {
        if (!(0, Et.d)() || !document.body) return null;
        const et = document.createElement("span");
        et.textContent = "Hg", et.style.font = tt;
        const Vt = document.createElement("div");
        Vt.style.display = "inline-block", Vt.style.width = "1px", Vt.style.height = "0px", Vt.style.verticalAlign = "bottom";
        const Ot = document.createElement("div");
        let qt, Dt;
        Ot.style.whiteSpace = "nowrap", Ot.appendChild(et), Ot.appendChild(Vt), document.body.appendChild(Ot);
        try {
          Dt = Vt.getBoundingClientRect().top - et.getBoundingClientRect().top, Vt.style.verticalAlign = "baseline", qt = Vt.getBoundingClientRect().top - et.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Ot)
        }
        const mt = {
          ascent: qt,
          height: Dt,
          descent: Dt - qt
        };
        return wt(mt) ? mt : null
      }(tt);
      if (et) return et;
      const Vt = function(tt) {
        let et = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? et = new OffscreenCanvas(64, 64) : (0, Et.d)() && "function" === typeof document.createElement && (et = document.createElement("canvas"), et.width = 64, et.height = 64);
          const Vt = et?.getContext("2d");
          if (!Vt) return null;
          Vt.font = tt;
          const Ot = Vt.measureText("Hg"),
            qt = Number(Ot.actualBoundingBoxAscent ?? Ot.fontBoundingBoxAscent),
            Dt = Number(Ot.actualBoundingBoxDescent ?? Ot.fontBoundingBoxDescent),
            mt = {
              ascent: qt,
              height: qt + Dt,
              descent: Dt
            };
          return wt(mt) ? mt : null
        } catch {
          return null
        } finally {
          const tt = et;
          "function" === typeof tt?.dispose && tt.dispose()
        }
      }(tt);
      return Vt || function(tt) {
        const et = Math.max(1, function(tt) {
            const et = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(tt || ""));
            return et ? Number(et[1]) : 16
          }(tt)),
          Vt = .8 * et,
          Ot = .2 * et;
        return {
          ascent: Vt,
          height: Vt + Ot,
          descent: Ot
        }
      }(tt)
    }

    function wt(tt) {
      return Number.isFinite(tt.ascent) && Number.isFinite(tt.height) && Number.isFinite(tt.descent) && tt.height > 0
    }

    function yt(tt) {
      if (tt.requestPointerLock) {
        const et = tt.requestPointerLock();
        et instanceof Promise ? et.then((() => {
          tt.focus()
        })).catch((() => {})) : tt.focus()
      }
    }
    var Nt = Vt(40155),
      Mt = Vt(40085),
      bt = Vt(40158),
      Jt = Vt(40164);
    class Ct extends Dt.ThinEngine {
      static get NpmPackage() {
        return lt.d.NpmPackage
      }
      static get Version() {
        return lt.d.Version
      }
      static get Instances() {
        return qt.d.Instances
      }
      static get LastCreatedEngine() {
        return qt.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return qt.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(tt) {
        return lt.d.DefaultLoadingScreenFactory(tt)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Ct._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, bt.d)(), (0, Jt.b)(), super(tt, et, Vt, Ot), this._performanceMonitor = new dt, this._drawCalls = new Nt.e, tt && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(tt) {
        super._sharedInit(tt),
          function(tt, et, Vt) {
            tt._onCanvasFocus = () => {
              tt.onCanvasFocusObservable.notifyObservers(tt)
            }, tt._onCanvasBlur = () => {
              tt.onCanvasBlurObservable.notifyObservers(tt)
            }, tt._onCanvasContextMenu = et => {
              tt.disableContextMenu && et.preventDefault()
            }, et.addEventListener("focus", tt._onCanvasFocus), et.addEventListener("blur", tt._onCanvasBlur), et.addEventListener("contextmenu", tt._onCanvasContextMenu), tt._onBlur = () => {
              tt.disablePerformanceMonitorInBackground && tt.performanceMonitor.disable(), tt._windowIsBackground = !0
            }, tt._onFocus = () => {
              tt.disablePerformanceMonitorInBackground && tt.performanceMonitor.enable(), tt._windowIsBackground = !1
            }, tt._onCanvasPointerOut = Vt => {
              document.elementFromPoint(Vt.clientX, Vt.clientY) !== et && tt.onCanvasPointerOutObservable.notifyObservers(Vt)
            };
            const Ot = tt.getHostWindow();
            Ot && "function" === typeof Ot.addEventListener && (Ot.addEventListener("blur", tt._onBlur), Ot.addEventListener("focus", tt._onFocus)), et.addEventListener("pointerout", tt._onCanvasPointerOut), Vt.doNotHandleTouchAction || function(tt) {
              tt && tt.setAttribute && (tt.setAttribute("touch-action", "none"), tt.style.touchAction = "none", tt.style.webkitTapHighlightColor = "transparent")
            }(et), !lt.d.audioEngine && Vt.audioEngine && lt.d.AudioEngineFactory && (lt.d.audioEngine = lt.d.AudioEngineFactory(tt.getRenderingCanvas(), tt.getAudioContext(), tt.getAudioDestination())), (0, Et.d)() && (tt._onFullscreenChange = () => {
              tt.isFullscreen = !!document.fullscreenElement, tt.isFullscreen && tt._pointerLockRequested && et && yt(et)
            }, document.addEventListener("fullscreenchange", tt._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", tt._onFullscreenChange, !1), tt._onPointerLockChange = () => {
              tt.isPointerLock = document.pointerLockElement === et
            }, document.addEventListener("pointerlockchange", tt._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", tt._onPointerLockChange, !1)), tt.enableOfflineSupport = void 0 !== lt.d.OfflineProviderFactory, tt._deterministicLockstep = !!Vt.deterministicLockstep, tt._lockstepMaxSteps = Vt.lockstepMaxSteps || 0, tt._timeStep = Vt.timeStep || 1 / 60
          }(this, tt, this._creationOptions)
      }
      resizeImageBitmap(tt, et, Vt) {
        return function(tt, et, Vt, Ot) {
          const qt = tt.createCanvas(Vt, Ot).getContext("2d");
          if (!qt) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return qt.drawImage(et, 0, 0), qt.getImageData(0, 0, Vt, Ot).data
        }(this, tt, et, Vt)
      }
      async _createImageBitmapFromSource(tt, et) {
        return await async function(tt, et, Vt) {
          return await new Promise(((Ot, qt) => {
            const Dt = new Image;
            Dt.onload = () => {
              Dt.decode().then((() => {
                tt.createImageBitmap(Dt, Vt).then((tt => {
                  Ot(tt)
                }))
              }))
            }, Dt.onerror = () => {
              qt(`Error loading image ${Dt.src}`)
            }, Dt.src = et
          }))
        }(this, tt, et)
      }
      switchFullscreen(tt) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(tt)
      }
      enterFullscreen(tt) {
        this.isFullscreen || (this._pointerLockRequested = tt, this._renderingCanvas && function(tt) {
          const et = tt.requestFullscreen || tt.webkitRequestFullscreen;
          et && et.call(tt)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const tt = document;
          document.exitFullscreen ? document.exitFullscreen() : tt.webkitCancelFullScreen && tt.webkitCancelFullScreen()
        }()
      }
      setDitheringState(tt) {
        tt ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(tt) {
        tt ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(tt, et, Vt, Ot) {
        const qt = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(tt, et, Vt, Ot), qt
      }
      scissorClear(tt, et, Vt, Ot, qt) {
        this.enableScissor(tt, et, Vt, Ot), this.clear(qt, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(tt) {
        const et = this._gl.getAttachedShaders(tt);
        return et ? this._gl.getShaderSource(et[0]) : null
      }
      getFragmentShaderSource(tt) {
        const et = this._gl.getAttachedShaders(tt);
        return et ? this._gl.getShaderSource(et[1]) : null
      }
      set framebufferDimensionsObject(tt) {
        this._framebufferDimensionsObject = tt, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const tt of this.scenes) tt.resetCachedMaterial(), tt._rebuildGeometries();
        for (const tt of this._virtualScenes) tt.resetCachedMaterial(), tt._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(tt) {
        return ft(tt)
      }
      enterPointerlock() {
        this._renderingCanvas && yt(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      QJ() {
        this._measureFps(), super.QJ()
      }
      _deletePipelineContext(tt) {
        const et = tt;
        et && et.program && et.transformFeedback && (this.deleteTransformFeedback(et.transformFeedback), et.transformFeedback = null), super._deletePipelineContext(tt)
      }
      createShaderProgram(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        qt = qt || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const mt = super.createShaderProgram(tt, et, Vt, Ot, qt, Dt);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), mt
      }
      _createShaderProgram(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Dt = Ot.createProgram();
        if (tt.program = Dt, !Dt) throw new Error("Unable to create program");
        if (Ot.attachShader(Dt, et), Ot.attachShader(Dt, Vt), this.Vw > 1 && qt) {
          const et = this.createTransformFeedback();
          this.bindTransformFeedback(et), this.setTranformFeedbackVaryings(Dt, qt), tt.transformFeedback = et
        }
        return Ot.linkProgram(Dt), this.Vw > 1 && qt && this.bindTransformFeedback(null), tt.context = Ot, tt.vertexShader = et, tt.fragmentShader = Vt, tt.isParallelCompiled || this._finalizePipelineContext(tt), Dt
      }
      _releaseTexture(tt) {
        super._releaseTexture(tt)
      }
      _releaseRenderTargetWrapper(tt) {
        super._releaseRenderTargetWrapper(tt);
        for (const et of this.scenes) {
          for (const Vt of et.postProcesses) Vt._outputTexture === tt && (Vt._outputTexture = null);
          for (const Vt of et.cameras)
            for (const et of Vt._postProcesses) et && et._outputTexture === tt && (et._outputTexture = null)
        }
      }
      _rescaleTexture(tt, et, Vt, Ot, qt) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Dt = this.createRenderTargetTexture({
          width: et.width,
          height: et.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Ct._RescalePostProcessFactory && (this._rescalePostProcess = Ct._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const mt = () => {
              this._rescalePostProcess.onApply = function(et) {
                et._bindTexture("textureSampler", tt)
              };
              let mt = Vt;
              mt || (mt = this.scenes[this.scenes.length - 1]), mt.postProcessManager.directRender([this._rescalePostProcess], Dt, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, et, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Ot, 0, 0, et.width, et.height, 0), this.unBindFramebuffer(Dt), Dt.dispose(), qt && qt()
            },
            dt = this._rescalePostProcess.getEffect();
          dt ? dt.executeWhenCompiled(mt) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((tt => {
            tt.executeWhenCompiled(mt)
          }))
        }
      }
      wrapWebGLTexture(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const mt = new Qt.d(tt, this._gl),
          dt = new Ot.d(this, 15, !0);
        return dt._hardwareTexture = mt, dt.baseWidth = qt, dt.baseHeight = Dt, dt.width = qt, dt.height = Dt, dt.isReady = !0, dt.useMipMaps = et, this.updateTextureSamplingMode(Vt, dt), dt
      }
      updateWrappedWebGLTexture(tt, et) {
        if (15 !== tt.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Ot of this._renderTargetWrapperCache)
          if (Ot.textures?.includes(tt)) {
            if (Ot.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Ot._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } tt._hardwareTexture = new Qt.d(et, this._gl), tt.isReady = !0, tt._cachedCoordinatesMode = null, tt._cachedWrapU = null, tt._cachedWrapV = null, tt._cachedWrapR = null, tt._cachedAnisotropicFilteringLevel = null;
        for (const Ot in this._boundTexturesCache) this._boundTexturesCache[Ot] === tt && (this._boundTexturesCache[Ot] = null);
        this.updateTextureSamplingMode(tt.samplingMode, tt);
        const Vt = this._gl;
        for (const Ot of this._renderTargetWrapperCache) {
          if (Ot.texture !== tt) continue;
          const qt = Ot,
            Dt = Ot.samples,
            mt = Dt > 1;
          qt._framebuffer && Vt.deleteFramebuffer(qt._framebuffer), !mt && qt._depthStencilBuffer && (Vt.deleteRenderbuffer(qt._depthStencilBuffer), qt._depthStencilBuffer = null);
          const dt = this._currentFramebuffer,
            jt = Vt.createFramebuffer();
          this._bindUnboundFramebuffer(jt), Vt.framebufferTexture2D(Vt.FRAMEBUFFER, Vt.COLOR_ATTACHMENT0, Vt.TEXTURE_2D, et, 0), mt || (qt._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ot._generateStencilBuffer, Ot._generateDepthBuffer, Ot.width, Ot.height)), this._bindUnboundFramebuffer(dt), qt._framebuffer = jt, mt && (Ot._samples = 1, this.updateRenderTargetTextureSampleCount(qt, Dt))
        }
      }
      _uploadImageToTexture(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qt = this._gl,
          Dt = this._getWebGLTextureType(tt.type),
          mt = this._getInternalFormat(tt.format),
          dt = this._getRGBABufferInternalSizedFormat(tt.type, mt),
          jt = tt.isCube ? qt.TEXTURE_CUBE_MAP : qt.TEXTURE_2D;
        this._bindTextureDirectly(jt, tt, !0), this._unpackFlipY(tt.invertY);
        let Ht = qt.TEXTURE_2D;
        tt.isCube && (Ht = qt.TEXTURE_CUBE_MAP_POSITIVE_X + Vt), qt.texImage2D(Ht, Ot, dt, mt, Dt, et), this._bindTextureDirectly(jt, null, !0)
      }
      updateTextureComparisonFunction(tt, et) {
        if (1 === this.Vw) return void Xt.d.Error("WebGL 1 does not support texture comparison.");
        const Vt = this._gl;
        tt.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, tt, !0), 0 === et ? (Vt.texParameteri(Vt.TEXTURE_CUBE_MAP, Vt.TEXTURE_COMPARE_FUNC, 515), Vt.texParameteri(Vt.TEXTURE_CUBE_MAP, Vt.TEXTURE_COMPARE_MODE, Vt.NONE)) : (Vt.texParameteri(Vt.TEXTURE_CUBE_MAP, Vt.TEXTURE_COMPARE_FUNC, et), Vt.texParameteri(Vt.TEXTURE_CUBE_MAP, Vt.TEXTURE_COMPARE_MODE, Vt.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, tt, !0), 0 === et ? (Vt.texParameteri(Vt.TEXTURE_2D, Vt.TEXTURE_COMPARE_FUNC, 515), Vt.texParameteri(Vt.TEXTURE_2D, Vt.TEXTURE_COMPARE_MODE, Vt.NONE)) : (Vt.texParameteri(Vt.TEXTURE_2D, Vt.TEXTURE_COMPARE_FUNC, et), Vt.texParameteri(Vt.TEXTURE_2D, Vt.TEXTURE_COMPARE_MODE, Vt.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), tt._comparisonFunction = et
      }
      createInstancesBuffer(tt) {
        const et = this._gl.createBuffer();
        if (!et) throw new Error("Unable to create instance buffer");
        const Vt = new Ht.e(et);
        return Vt.uQ = tt, this.bindArrayBuffer(Vt), this._gl.bufferData(this._gl.ARRAY_BUFFER, tt, this._gl.DYNAMIC_DRAW), Vt.references = 1, Vt
      }
      deleteInstancesBuffer(tt) {
        this._gl.deleteBuffer(tt)
      }
      async _clientWaitAsync(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Ot = this._gl;
        return await new Promise(((qt, Dt) => {
          (0, Mt.g)((() => {
            const Vt = Ot.clientWaitSync(tt, et, 0);
            if (Vt == Ot.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Vt != Ot.TIMEOUT_EXPIRED
          }), qt, Dt, Vt)
        }))
      }
      _readPixelsAsync(tt, et, Vt, Ot, qt, Dt, mt) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const dt = this._gl,
          jt = dt.createBuffer();
        dt.bindBuffer(dt.PIXEL_PACK_BUFFER, jt), dt.bufferData(dt.PIXEL_PACK_BUFFER, mt.byteLength, dt.STREAM_READ), dt.readPixels(tt, et, Vt, Ot, qt, Dt, 0), dt.bindBuffer(dt.PIXEL_PACK_BUFFER, null);
        const Ht = dt.fenceSync(dt.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Ht ? (dt.flush(), this._clientWaitAsync(Ht, 0, 10).then((() => (dt.deleteSync(Ht), dt.bindBuffer(dt.PIXEL_PACK_BUFFER, jt), dt.getBufferSubData(dt.PIXEL_PACK_BUFFER, 0, mt), dt.bindBuffer(dt.PIXEL_PACK_BUFFER, null), dt.deleteBuffer(jt), mt)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(tt, et) {
            1 === qt.d.Instances.length && lt.d.audioEngine && (lt.d.audioEngine.dispose(), lt.d.audioEngine = null);
            const Vt = tt.getHostWindow();
            Vt && "function" === typeof Vt.removeEventListener && (Vt.removeEventListener("blur", tt._onBlur), Vt.removeEventListener("focus", tt._onFocus)), et && (et.removeEventListener("focus", tt._onCanvasFocus), et.removeEventListener("blur", tt._onCanvasBlur), et.removeEventListener("pointerout", tt._onCanvasPointerOut), et.removeEventListener("contextmenu", tt._onCanvasContextMenu)), (0, Et.d)() && (document.removeEventListener("fullscreenchange", tt._onFullscreenChange), document.removeEventListener("mozfullscreenchange", tt._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", tt._onFullscreenChange), document.removeEventListener("msfullscreenchange", tt._onFullscreenChange), document.removeEventListener("pointerlockchange", tt._onPointerLockChange), document.removeEventListener("mspointerlockchange", tt._onPointerLockChange), document.removeEventListener("mozpointerlockchange", tt._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", tt._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Ct.ALPHA_DISABLE = 0, Ct.ALPHA_ADD = 1, Ct.ALPHA_COMBINE = 2, Ct.ALPHA_SUBTRACT = 3, Ct.ALPHA_MULTIPLY = 4, Ct.ALPHA_MAXIMIZED = 5, Ct.ALPHA_ONEONE = 6, Ct.ALPHA_PREMULTIPLIED = 7, Ct.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Ct.ALPHA_INTERPOLATE = 9, Ct.ALPHA_SCREENMODE = 10, Ct.DELAYLOADSTATE_NONE = 0, Ct.DELAYLOADSTATE_LOADED = 1, Ct.DELAYLOADSTATE_LOADING = 2, Ct.DELAYLOADSTATE_NOTLOADED = 4, Ct.NEVER = 512, Ct.ALWAYS = 519, Ct.LESS = 513, Ct.EQUAL = 514, Ct.LEQUAL = 515, Ct.GREATER = 516, Ct.GEQUAL = 518, Ct.NOTEQUAL = 517, Ct.KEEP = 7680, Ct.REPLACE = 7681, Ct.INCR = 7682, Ct.DECR = 7683, Ct.INVERT = 5386, Ct.INCR_WRAP = 34055, Ct.DECR_WRAP = 34056, Ct.TEXTURE_CLAMP_ADDRESSMODE = 0, Ct.TEXTURE_WRAP_ADDRESSMODE = 1, Ct.TEXTURE_MIRROR_ADDRESSMODE = 2, Ct.TEXTUREFORMAT_ALPHA = 0, Ct.TEXTUREFORMAT_LUMINANCE = 1, Ct.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Ct.TEXTUREFORMAT_RGB = 4, Ct.TEXTUREFORMAT_RGBA = 5, Ct.TEXTUREFORMAT_RED = 6, Ct.TEXTUREFORMAT_R = 6, Ct.TEXTUREFORMAT_R16_UNORM = 33322, Ct.TEXTUREFORMAT_RG16_UNORM = 33324, Ct.TEXTUREFORMAT_RGB16_UNORM = 32852, Ct.TEXTUREFORMAT_RGBA16_UNORM = 32859, Ct.TEXTUREFORMAT_R16_SNORM = 36760, Ct.TEXTUREFORMAT_RG16_SNORM = 36761, Ct.TEXTUREFORMAT_RGB16_SNORM = 36762, Ct.TEXTUREFORMAT_RGBA16_SNORM = 36763, Ct.TEXTUREFORMAT_RG = 7, Ct.TEXTUREFORMAT_RED_INTEGER = 8, Ct.TEXTUREFORMAT_R_INTEGER = 8, Ct.TEXTUREFORMAT_RG_INTEGER = 9, Ct.TEXTUREFORMAT_RGB_INTEGER = 10, Ct.TEXTUREFORMAT_RGBA_INTEGER = 11, Ct.TEXTURETYPE_UNSIGNED_BYTE = 0, Ct.TEXTURETYPE_UNSIGNED_INT = 0, Ct.TEXTURETYPE_FLOAT = 1, Ct.TEXTURETYPE_HALF_FLOAT = 2, Ct.TEXTURETYPE_BYTE = 3, Ct.TEXTURETYPE_SHORT = 4, Ct.TEXTURETYPE_UNSIGNED_SHORT = 5, Ct.TEXTURETYPE_INT = 6, Ct.TEXTURETYPE_UNSIGNED_INTEGER = 7, Ct.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Ct.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Ct.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Ct.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Ct.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Ct.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Ct.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Ct.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Ct.TEXTURE_NEAREST_SAMPLINGMODE = 1, Ct.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Ct.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Ct.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Ct.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Ct.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Ct.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Ct.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Ct.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Ct.TEXTURE_NEAREST_LINEAR = 7, Ct.TEXTURE_NEAREST_NEAREST = 1, Ct.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Ct.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Ct.TEXTURE_LINEAR_LINEAR = 2, Ct.TEXTURE_LINEAR_NEAREST = 12, Ct.TEXTURE_EXPLICIT_MODE = 0, Ct.TEXTURE_SPHERICAL_MODE = 1, Ct.TEXTURE_PLANAR_MODE = 2, Ct.TEXTURE_CUBIC_MODE = 3, Ct.TEXTURE_PROJECTION_MODE = 4, Ct.TEXTURE_SKYBOX_MODE = 5, Ct.TEXTURE_INVCUBIC_MODE = 6, Ct.TEXTURE_EQUIRECTANGULAR_MODE = 7, Ct.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Ct.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Ct.SCALEMODE_FLOOR = 1, Ct.SCALEMODE_NEAREST = 2, Ct.SCALEMODE_CEILING = 3
  },
  40188: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = Vt(40148);
    class qt {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(tt) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = tt, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, tt && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Ot.b)(tt.format))
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
      getBaseArrayLayer(tt) {
        if (!this._textures) return -1;
        const et = this._textures[tt],
          Vt = this._layerIndices?.[tt] ?? 0,
          Ot = this._faceIndices?.[tt] ?? 0;
        return et.isCube ? 6 * Vt + Ot : et.is3D ? 0 : Vt
      }
      get samples() {
        return this._samples
      }
      setSamples(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === tt && !Vt) return tt;
        const Ot = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, tt, et) : this._engine.updateRenderTargetTextureSampleCount(this, tt);
        return this._samples = tt, Ot
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(tt, et, Vt, Ot, qt) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = tt, this._isCube = et, this._size = Vt, this._engine = Ot, this._depthStencilTexture = null, this.label = qt
      }
      setTextures(tt) {
        Array.isArray(tt) ? this._textures = tt : this._textures = tt ? [tt] : null
      }
      setTexture(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[et] !== tt && (this._textures[et] && Vt && this._textures[et].dispose(), this._textures[et] = tt)
      }
      setLayerAndFaceIndices(tt, et) {
        this._layerIndices = tt, this._faceIndices = et
      }
      setLayerAndFaceIndex() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== et && et >= 0 && (this._layerIndices[tt] = et), void 0 !== Vt && Vt >= 0 && (this._faceIndices[tt] = Vt)
      }
      createDepthStencilTexture() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Vt, this._depthStencilTextureLabel = Dt, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: et,
          comparisonFunction: tt,
          generateStencil: Vt,
          isCube: this._isCube,
          samples: Ot,
          depthTextureFormat: qt,
          label: Dt
        }, this), this._depthStencilTexture
      }
      _shareDepth(tt) {
        this.shareDepth(tt)
      }
      shareDepth(tt) {
        this._depthStencilTexture && (tt._depthStencilTexture && tt._depthStencilTexture.dispose(), tt._depthStencilTexture = this._depthStencilTexture, tt._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(tt) {
        this.texture && this.texture._swapAndDie(tt), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let tt = null;
        if (this._isMulti) {
          const et = this.textures;
          if (et && et.length > 0) {
            let Vt = !1,
              Ot = et.length,
              qt = -1;
            const Dt = et[et.length - 1]._source;
            14 !== Dt && 12 !== Dt || (Vt = !0, qt = et[et.length - 1].format, Ot--);
            const mt = [],
              dt = [],
              jt = [],
              Ht = [],
              Xt = [],
              Qt = [],
              lt = [],
              Et = {};
            for (let tt = 0; tt < Ot; ++tt) {
              const Vt = et[tt];
              mt.push(Vt.samplingMode), dt.push(Vt.type), jt.push(Vt.format);
              void 0 !== Et[Vt.uniqueId] ? (Ht.push(-1), lt.push(0)) : (Et[Vt.uniqueId] = tt, Vt.is2DArray ? (Ht.push(35866), lt.push(Vt.depth)) : Vt.isCube ? (Ht.push(34067), lt.push(0)) : Vt.is3D ? (Ht.push(32879), lt.push(Vt.depth)) : (Ht.push(3553), lt.push(0))), this._faceIndices && Xt.push(this._faceIndices[tt] ?? 0), this._layerIndices && Qt.push(this._layerIndices[tt] ?? 0)
            }
            const ft = {
                samplingModes: mt,
                generateMipMaps: et[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Vt,
                depthTextureFormat: qt,
                types: dt,
                formats: jt,
                ydt: Ot,
                targetTypes: Ht,
                faceIndex: Xt,
                layerIndex: Qt,
                layerCounts: lt,
                label: this.label
              },
              wt = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            tt = this._engine.createMultipleRenderTarget(wt, ft);
            for (let yt = 0; yt < Ot; ++yt) {
              if (-1 !== Ht[yt]) continue;
              const Vt = Et[et[yt].uniqueId];
              tt.setTexture(tt.textures[Vt], yt)
            }
          }
        } else {
          const et = {};
          if (et.generateDepthBuffer = this._generateDepthBuffer, et.generateMipMaps = this.texture?.generateMipMaps ?? !1, et.generateStencilBuffer = this._generateStencilBuffer, et.samplingMode = this.texture?.samplingMode, et.type = this.texture?.type, et.format = this.texture?.format, et.noColorAttachment = !this._textures, et.label = this.label, this.isCube) tt = this._engine.createRenderTargetCubeTexture(this.width, et);
          else {
            const Vt = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            tt = this._engine.createRenderTargetTexture(Vt, et)
          }
          tt.texture && (tt.texture.isReady = !0)
        }
        return tt
      }
      _swapRenderTargetWrapper(tt) {
        if (this._textures && tt._textures)
          for (let et = 0; et < this._textures.length; ++et) this._textures[et]._swapAndDie(tt._textures[et], !1), tt._textures[et].isReady = !0;
        this._depthStencilTexture && tt._depthStencilTexture && (this._depthStencilTexture._swapAndDie(tt._depthStencilTexture), tt._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const tt = this._cloneRenderTargetWrapper();
        if (tt) {
          if (this._depthStencilTexture) {
            const et = this._depthStencilTexture.samplingMode,
              Vt = this._depthStencilTexture.format,
              Ot = 2 === et || 3 === et || 11 === et;
            tt.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Ot, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Vt, this._depthStencilTextureLabel)
          }
          this.samples > 1 && tt.setSamples(this.samples), tt._swapRenderTargetWrapper(this), tt.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let tt = 0; tt < this._textures.length; ++tt) this._textures[tt].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40621: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      static get ForceFullSceneLoadingForIncremental() {
        return Ot._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(tt) {
        Ot._ForceFullSceneLoadingForIncremental = tt
      }
      static get ShowLoadingScreen() {
        return Ot._ShowLoadingScreen
      }
      static set ShowLoadingScreen(tt) {
        Ot._ShowLoadingScreen = tt
      }
      static get loggingLevel() {
        return Ot._LoggingLevel
      }
      static set loggingLevel(tt) {
        Ot._LoggingLevel = tt
      }
      static get CleanBoneMatrixWeights() {
        return Ot._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(tt) {
        Ot._CleanBoneMatrixWeights = tt
      }
    }
    Ot._ForceFullSceneLoadingForIncremental = !1, Ot._ShowLoadingScreen = !0, Ot._CleanBoneMatrixWeights = !1, Ot._LoggingLevel = 0
  },
  40281: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(38899);
    const qt = new Map;

    function Dt(tt, et) {
      (function(tt) {
        return qt.delete(tt)
      })(tt) && Ot.d.Warn(`Extension with the name '${tt}' already exists`), qt.set(tt, et)
    }

    function mt(tt, et) {
      "image/ktx" !== et && "image/ktx2" !== et || (tt = ".ktx"), qt.has(tt) || (tt.endsWith(".ies") && Dt(".ies", (async () => await Vt.e(314).then((() => Vt(42040))).then((tt => new tt._IESTextureLoader)))), tt.endsWith(".dds") && Dt(".dds", (async () => await Vt.e(312).then((() => Vt(42048))).then((tt => new tt._DDSTextureLoader)))), tt.endsWith(".basis") && Dt(".basis", (async () => await Vt.e(315).then((() => Vt(42050))).then((tt => new tt._BasisTextureLoader)))), tt.endsWith(".env") && Dt(".env", (async () => await Promise.all([Vt.e(316), Vt.e(313)]).then((() => Vt(42057))).then((tt => new tt._ENVTextureLoader)))), tt.endsWith(".hdr") && Dt(".hdr", (async () => await Vt.e(317).then((() => Vt(42098))).then((tt => new tt._HDRTextureLoader)))), (tt.endsWith(".ktx") || tt.endsWith(".ktx2")) && (Dt(".ktx", (async () => await Vt.e(318).then((() => Vt(42106))).then((tt => new tt._KTXTextureLoader)))), Dt(".ktx2", (async () => await Vt.e(318).then((() => Vt(42106))).then((tt => new tt._KTXTextureLoader))))), tt.endsWith(".tga") && Dt(".tga", (async () => await Vt.e(319).then((() => Vt(42110))).then((tt => new tt._TGATextureLoader)))), tt.endsWith(".exr") && Dt(".exr", (async () => await Vt.e(320).then((() => Vt(42118))).then((tt => new tt._ExrTextureLoader)))));
      const Ot = qt.get(tt);
      return Ot ? Promise.resolve(Ot(et)) : null
    }
  },
  40642: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Ht
    });
    var Ot = Vt(40474),
      qt = Vt(40239),
      Dt = Vt(37390);
    class mt extends Ot.c {
      get N9() {
        return this._subMaterials
      }
      set N9(tt) {
        this._subMaterials = tt, this._hookArray(tt)
      }
      getChildren() {
        return this.N9
      }
      constructor(tt, et) {
        super(tt, et, !0), this._waitingSubMaterialsUniqueIds = [], this.vI().addMultiMaterial(this), this.N9 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(tt) {
        var et = this;
        const Vt = tt.push;
        tt.push = function() {
          for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
          const mt = Vt.apply(tt, qt);
          return et._markAllSubMeshesAsTexturesDirty(), mt
        };
        const Ot = tt.splice;
        tt.splice = (et, Vt) => {
          const qt = Ot.call(tt, et, Vt ?? tt.length);
          return this._markAllSubMeshesAsTexturesDirty(), qt
        }
      }
      getSubMaterial(tt) {
        return tt < 0 || tt >= this.N9.length ? this.vI().defaultMaterial : this.N9[tt]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.N9.map((tt => tt ? tt.getActiveTextures() : [])))
      }
      hasTexture(tt) {
        if (super.hasTexture(tt)) return !0;
        for (let et = 0; et < this.N9.length; et++)
          if (this.N9[et]?.hasTexture(tt)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(tt, et, Vt) {
        for (let Ot = 0; Ot < this.N9.length; Ot++) {
          const qt = this.N9[Ot];
          if (qt) {
            if (qt._storeEffectOnSubMeshes) {
              if (!qt.isReadyForSubMesh(tt, et, Vt)) return !1;
              continue
            }
            if (!qt.isReady(tt)) return !1
          }
        }
        return !0
      }
      clone(tt, et) {
        const Vt = new mt(tt, this.vI());
        for (let Ot = 0; Ot < this.N9.length; Ot++) {
          let qt;
          const Dt = this.N9[Ot];
          qt = et && Dt ? Dt.clone(tt + "-" + Dt.name) : this.N9[Ot], Vt.N9.push(qt)
        }
        return Vt
      }
      serialize() {
        const tt = {};
        tt.name = this.name, tt.id = this.id, tt.uniqueId = this.uniqueId, qt.d && (tt.tags = qt.d.GetTags(this)), tt.materialsUniqueIds = [], tt.materials = [];
        for (let et = 0; et < this.N9.length; et++) {
          const Vt = this.N9[et];
          Vt ? (tt.materialsUniqueIds.push(Vt.uniqueId), tt.materials.push(Vt.id)) : (tt.materialsUniqueIds.push(null), tt.materials.push(null))
        }
        return tt
      }
      dispose(tt, et, Vt) {
        const Ot = this.vI();
        if (!Ot) return;
        if (Vt)
          for (let Dt = 0; Dt < this.N9.length; Dt++) {
            const Vt = this.N9[Dt];
            Vt && Vt.dispose(tt, et)
          }
        const qt = Ot.multiMaterials.indexOf(this);
        qt >= 0 && Ot.multiMaterials.splice(qt, 1), super.dispose(tt, et)
      }
    }
    let dt = !1;

    function jt(tt, et) {
      const Vt = new mt(tt.name, et);
      if (Vt.id = tt.id, Vt._loadedUniqueId = tt.uniqueId, qt.d && qt.d.AddTagsTo(Vt, tt.tags), tt.materialsUniqueIds) Vt._waitingSubMaterialsUniqueIds = tt.materialsUniqueIds;
      else
        for (const Ot of tt.materials) Vt.N9.push(et.getLastMaterialById(Ot));
      return Vt
    }

    function Ht() {
      dt || (dt = !0, mt.ParseMultiMaterial = jt, (0, Dt.i)("BABYLON.MultiMaterial", mt))
    }
  },
  40418: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot, qt, Dt = Vt(37336);
    ! function(tt) {
      tt[tt.LOCAL = 0] = "LOCAL", tt[tt.WORLD = 1] = "WORLD", tt[tt.BONE = 2] = "BONE"
    }(Ot || (Ot = {}));
    class mt {}
    mt.X = new Dt.n(1, 0, 0), mt.Y = new Dt.n(0, 1, 0), mt.Z = new Dt.n(0, 0, 1),
      function(tt) {
        tt[tt.X = 0] = "X", tt[tt.Y = 1] = "Y", tt[tt.Z = 2] = "Z"
      }(qt || (qt = {}))
  },
  40194: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt,
      g: () => Ht
    });
    var Ot = Vt(37336);
    const qt = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Dt = [() => 1, tt => tt.y, tt => tt.z, tt => tt.x, tt => tt.x * tt.y, tt => tt.y * tt.z, tt => 3 * tt.z * tt.z - 1, tt => tt.x * tt.z, tt => tt.x * tt.x - tt.y * tt.y],
      mt = (tt, et) => qt[tt] * Dt[tt](et),
      dt = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class jt {
      constructor() {
        this.preScaled = !1, this.l00 = Ot.n.Zero(), this.l1_1 = Ot.n.Zero(), this.l10 = Ot.n.Zero(), this.l11 = Ot.n.Zero(), this.l2_2 = Ot.n.Zero(), this.l2_1 = Ot.n.Zero(), this.l20 = Ot.n.Zero(), this.l21 = Ot.n.Zero(), this.l22 = Ot.n.Zero()
      }
      addLight(tt, et, Vt) {
        Ot.k.uf[0].set(et.r, et.g, et.b);
        const qt = Ot.k.uf[0],
          Dt = Ot.k.uf[1];
        qt.scaleToRef(Vt, Dt), Dt.scaleToRef(mt(0, tt), Ot.k.uf[2]), this.l00.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(1, tt), Ot.k.uf[2]), this.l1_1.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(2, tt), Ot.k.uf[2]), this.l10.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(3, tt), Ot.k.uf[2]), this.l11.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(4, tt), Ot.k.uf[2]), this.l2_2.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(5, tt), Ot.k.uf[2]), this.l2_1.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(6, tt), Ot.k.uf[2]), this.l20.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(7, tt), Ot.k.uf[2]), this.l21.addInPlace(Ot.k.uf[2]), Dt.scaleToRef(mt(8, tt), Ot.k.uf[2]), this.l22.addInPlace(Ot.k.uf[2])
      }
      scaleInPlace(tt) {
        this.l00.scaleInPlace(tt), this.l1_1.scaleInPlace(tt), this.l10.scaleInPlace(tt), this.l11.scaleInPlace(tt), this.l2_2.scaleInPlace(tt), this.l2_1.scaleInPlace(tt), this.l20.scaleInPlace(tt), this.l21.scaleInPlace(tt), this.l22.scaleInPlace(tt)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(dt[0]), this.l1_1.scaleInPlace(dt[1]), this.l10.scaleInPlace(dt[2]), this.l11.scaleInPlace(dt[3]), this.l2_2.scaleInPlace(dt[4]), this.l2_1.scaleInPlace(dt[5]), this.l20.scaleInPlace(dt[6]), this.l21.scaleInPlace(dt[7]), this.l22.scaleInPlace(dt[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(qt[0]), this.l1_1.scaleInPlace(qt[1]), this.l10.scaleInPlace(qt[2]), this.l11.scaleInPlace(qt[3]), this.l2_2.scaleInPlace(qt[4]), this.l2_1.scaleInPlace(qt[5]), this.l20.scaleInPlace(qt[6]), this.l21.scaleInPlace(qt[7]), this.l22.scaleInPlace(qt[8])
      }
      updateFromArray(tt) {
        return Ot.n.FromArrayToRef(tt[0], 0, this.l00), Ot.n.FromArrayToRef(tt[1], 0, this.l1_1), Ot.n.FromArrayToRef(tt[2], 0, this.l10), Ot.n.FromArrayToRef(tt[3], 0, this.l11), Ot.n.FromArrayToRef(tt[4], 0, this.l2_2), Ot.n.FromArrayToRef(tt[5], 0, this.l2_1), Ot.n.FromArrayToRef(tt[6], 0, this.l20), Ot.n.FromArrayToRef(tt[7], 0, this.l21), Ot.n.FromArrayToRef(tt[8], 0, this.l22), this
      }
      updateFromFloatsArray(tt) {
        return Ot.n.FromFloatsToRef(tt[0], tt[1], tt[2], this.l00), Ot.n.FromFloatsToRef(tt[3], tt[4], tt[5], this.l1_1), Ot.n.FromFloatsToRef(tt[6], tt[7], tt[8], this.l10), Ot.n.FromFloatsToRef(tt[9], tt[10], tt[11], this.l11), Ot.n.FromFloatsToRef(tt[12], tt[13], tt[14], this.l2_2), Ot.n.FromFloatsToRef(tt[15], tt[16], tt[17], this.l2_1), Ot.n.FromFloatsToRef(tt[18], tt[19], tt[20], this.l20), Ot.n.FromFloatsToRef(tt[21], tt[22], tt[23], this.l21), Ot.n.FromFloatsToRef(tt[24], tt[25], tt[26], this.l22), this
      }
      static FromArray(tt) {
        return (new jt).updateFromArray(tt)
      }
      static FromPolynomial(tt) {
        const et = new jt;
        return et.l00 = tt.xx.scale(.376127).add(tt.yy.scale(.376127)).add(tt.zz.scale(.376126)), et.l1_1 = tt.y.scale(.977204), et.l10 = tt.z.scale(.977204), et.l11 = tt.x.scale(.977204), et.l2_2 = tt.xy.scale(1.16538), et.l2_1 = tt.yz.scale(1.16538), et.l20 = tt.zz.scale(1.34567).subtract(tt.xx.scale(.672834)).subtract(tt.yy.scale(.672834)), et.l21 = tt.zx.scale(1.16538), et.l22 = tt.xx.scale(1.16538).subtract(tt.yy.scale(1.16538)), et.l1_1.scaleInPlace(-1), et.l11.scaleInPlace(-1), et.l2_1.scaleInPlace(-1), et.l21.scaleInPlace(-1), et.scaleInPlace(Math.PI), et
      }
    }
    class Ht {
      constructor() {
        this.x = Ot.n.Zero(), this.y = Ot.n.Zero(), this.z = Ot.n.Zero(), this.xx = Ot.n.Zero(), this.yy = Ot.n.Zero(), this.zz = Ot.n.Zero(), this.xy = Ot.n.Zero(), this.yz = Ot.n.Zero(), this.zx = Ot.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = jt.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(tt) {
        Ot.k.uf[0].W9(tt.r, tt.g, tt.b);
        const et = Ot.k.uf[0];
        this.xx.addInPlace(et), this.yy.addInPlace(et), this.zz.addInPlace(et)
      }
      scaleInPlace(tt) {
        this.x.scaleInPlace(tt), this.y.scaleInPlace(tt), this.z.scaleInPlace(tt), this.xx.scaleInPlace(tt), this.yy.scaleInPlace(tt), this.zz.scaleInPlace(tt), this.yz.scaleInPlace(tt), this.zx.scaleInPlace(tt), this.xy.scaleInPlace(tt)
      }
      updateFromHarmonics(tt) {
        return this._harmonics = tt, this.x.rK(tt.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.rK(tt.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.rK(tt.l10), this.z.scaleInPlace(1.02333), this.xx.rK(tt.l00), Ot.k.uf[0].rK(tt.l20).scaleInPlace(.247708), Ot.k.uf[1].rK(tt.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).qqt(Ot.k.uf[0]).addInPlace(Ot.k.uf[1]), this.yy.rK(tt.l00), this.yy.scaleInPlace(.886277).qqt(Ot.k.uf[0]).qqt(Ot.k.uf[1]), this.zz.rK(tt.l00), Ot.k.uf[0].rK(tt.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Ot.k.uf[0]), this.yz.rK(tt.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.rK(tt.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.rK(tt.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(tt) {
        return (new Ht).updateFromHarmonics(tt)
      }
      static FromArray(tt) {
        const et = new Ht;
        return Ot.n.FromArrayToRef(tt[0], 0, et.x), Ot.n.FromArrayToRef(tt[1], 0, et.y), Ot.n.FromArrayToRef(tt[2], 0, et.z), Ot.n.FromArrayToRef(tt[3], 0, et.xx), Ot.n.FromArrayToRef(tt[4], 0, et.yy), Ot.n.FromArrayToRef(tt[5], 0, et.zz), Ot.n.FromArrayToRef(tt[6], 0, et.yz), Ot.n.FromArrayToRef(tt[7], 0, et.zx), Ot.n.FromArrayToRef(tt[8], 0, et.xy), et
      }
    }
  },
  40633: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Pt,
      f: () => Lt
    });
    var Ot = Vt(40211),
      qt = Vt(37367),
      Dt = Vt(37336),
      mt = Vt(40343),
      dt = Vt(40608),
      jt = Vt(40638),
      Ht = Vt(40340),
      Xt = Vt(40490),
      Qt = Vt(40337);
    class lt {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Dt.n(0, 0, 0), this._diffPositionForCollisions = new Dt.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Et, ft, wt, yt = Vt(40080),
      Nt = Vt(40272),
      Mt = Vt(40503),
      bt = Vt(37513),
      Jt = Vt(37342),
      Ct = Vt(40418),
      ut = Vt(38899),
      Kt = Vt(40213),
      ht = Vt(40092),
      vt = Vt(37390);

    function Wt(tt, et) {
      return tt - Math.floor(tt / et) * et
    }

    function St(tt, et, Vt) {
      tt instanceof Float32Array ? Dt.c.FromArrayToRef(tt, et, Vt) : Vt.W9((0, Nt.e)(tt[et]), (0, Nt.e)(tt[et + 1]), (0, Nt.e)(tt[et + 2]), (0, Nt.e)(tt[et + 3]), (0, Nt.e)(tt[et + 4]), (0, Nt.e)(tt[et + 5]), (0, Nt.e)(tt[et + 6]), (0, Nt.e)(tt[et + 7]), (0, Nt.e)(tt[et + 8]), (0, Nt.e)(tt[et + 9]), (0, Nt.e)(tt[et + 10]), (0, Nt.e)(tt[et + 11]), (0, Nt.e)(tt[et + 12]), (0, Nt.e)(tt[et + 13]), (0, Nt.e)(tt[et + 14]), (0, Nt.e)(tt[et + 15]))
    }

    function ct(tt, et, Vt, Ot, qt, dt, jt, Ht, Xt) {
      const Qt = Vt.texture,
        lt = Qt?.getInternalTexture(),
        Et = lt?._bufferView;
      if (!(Et instanceof Float32Array) && !(Et instanceof Uint16Array)) return ut.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const ft = Qt.getSize(),
        wt = function(tt, et) {
          const Vt = tt.y - tt.x + 1,
            Ot = et * tt.w / Vt,
            qt = Ot < 1 ? 0 : 1,
            Dt = Vt - qt;
          let mt = Wt(Ot - Math.floor(Ot), 1) * Dt;
          return mt = Wt(mt + tt.z, Dt), Math.floor(mt) + tt.x + qt
        }(Ot, Vt.time);
      if (!isFinite(wt) || wt < 0 || wt >= ft.height) return ut.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const yt = Dt.k.uf[0],
        Nt = Dt.k.Matrix[0],
        Mt = Dt.k.Matrix[1],
        bt = wt * ft.width * 4,
        Jt = et === mt.m.NormalKind ? Dt.n.TransformNormalFromFloatsToRef : Dt.n.TransformCoordinatesFromFloatsToRef;
      for (let Dt = 0, mt = 0; Dt < tt.length; Dt += 3, mt += 4) {
        let et, Vt;
        for (Nt.reset(), et = 0; et < 4 && et < Xt; et++) Vt = dt[mt + et], Vt > 0 && (St(Et, bt + 16 * Math.floor(qt[mt + et]), Mt), Mt.scaleAndAddToRef(Vt, Nt));
        if (jt && Ht)
          for (et = 0; et < 4 && et + 4 < Xt; et++) Vt = Ht[mt + et], Vt > 0 && (St(Et, bt + 16 * Math.floor(jt[mt + et]), Mt), Mt.scaleAndAddToRef(Vt, Nt));
        Jt(tt[Dt], tt[Dt + 1], tt[Dt + 2], Nt, yt), yt.toArray(tt, Dt)
      }
      return !0
    }
    class Rt {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Dt.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class It {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Rt, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new lt, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Pt = (() => {
        var tt;
        let et, lt = jt.d,
          Et = [];
        return tt = class extends lt {
          static get BILLBOARDMODE_NONE() {
            return jt.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return jt.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return jt.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return jt.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return jt.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return jt.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(tt) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = tt
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(tt) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = tt
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(tt) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = tt
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(tt) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = tt
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(tt) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = tt
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(tt) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== tt && (this._internalAbstractMeshDataInfo._morphTargetManager = tt, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(tt) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== tt && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = tt, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(tt) {
            return !!super._updateNonUniformScalingState(tt) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(tt) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = tt
          }
          set Hl(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(tt)
          }
          set onCollisionPositionChange(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(tt)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(tt) {
            if (this._internalAbstractMeshDataInfo._visibility === tt) return;
            const et = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = tt, (1 === et && 1 !== tt || 1 !== et && 1 === tt) && this._markSubMeshesAsDirty((tt => {
              tt.markAsMiscDirty(), tt.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(tt) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = tt
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(tt) {
            this._internalAbstractMeshDataInfo._renderingGroupId = tt
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(tt) {
            if (!Number.isInteger(tt) || tt < 0 || tt > 255 || 0 !== tt && 0 === (63 & tt)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = tt
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(tt) {
            this._setMaterial(tt)
          }
          _setMaterial(tt) {
            this._internalAbstractMeshDataInfo._material !== tt && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = tt, tt && tt.meshMap && (tt.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.vJ && (this.resetDrawCache(void 0, null == tt), this._unBindEffect()))
          }
          getMaterialForRenderPass(tt) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[tt]
          }
          setMaterialForRenderPass(tt, et) {
            this.resetDrawCache(tt), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Vt = this._internalAbstractMeshDataInfo._materialForRenderPass[tt];
            Vt?.meshMap?.[this.uniqueId] && (Vt.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[tt] = et, et && et.meshMap && (et.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(tt) {
            this._internalAbstractMeshDataInfo._receiveShadows !== tt && (this._internalAbstractMeshDataInfo._receiveShadows = tt, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(tt) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== tt && (this._internalAbstractMeshDataInfo._hasVertexAlpha = tt, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(tt) {
            this._internalAbstractMeshDataInfo._useVertexColors !== tt && (this._internalAbstractMeshDataInfo._useVertexColors = tt, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(tt) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== tt && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = tt, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(tt) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== tt && (this._internalAbstractMeshDataInfo._numBoneInfluencers = tt, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(tt) {
            this._internalAbstractMeshDataInfo._applyFog !== tt && (this._internalAbstractMeshDataInfo._applyFog = tt, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(tt) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = tt
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(tt) {
            tt !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = tt, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(tt) ? -1 : tt
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = tt
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(tt) ? -1 : tt
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = tt
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(tt) {
            const et = this._internalAbstractMeshDataInfo._skeleton;
            et && et.needInitialSkinMatrix && et._unregisterMeshWithPoseMatrix(this), tt && tt.needInitialSkinMatrix && tt._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = tt, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(et) {
            var Vt;
            let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(et, Ot, !1), Vt = this, this._internalAbstractMeshDataInfo = new It, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = tt.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new qt.c, this.onCollisionPositionChangeObservable = new qt.c, this.onMaterialChangedObservable = new qt.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Gw = tt.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = bt.b.Red(), this.outlineWidth = .02, this.overlayColor = bt.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Cf = !1, this.hf = !1, this.actionManager = null, this.ellipsoid = new Dt.n(.5, 1, .5), this.ellipsoidOffset = new Dt.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new bt.c(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                eZ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new qt.c, this._onCollisionPositionChange = function(tt, et) {
                let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                et.subtractToRef(Vt._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Vt._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Vt._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > ht.d.CollisionsEpsilon && Vt.position.addInPlace(Vt._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Ot && Vt.onCollideObservable.notifyObservers(Ot), Vt.onCollisionPositionChangeObservable.notifyObservers(Vt.position)
              }, Ot = this.vI(), this.layerMask = Ot.defaultRenderableLayerMask, Ot.oOt(this), this._resyncLightSources(), this._uniformBuffer = new Qt.c(this.vI().Jf(), void 0, void 0, et, !this.vI().Jf().isWebGPU), this._buildUniformLayout(), Ot.performancePriority) {
              case 2:
                this.hf = !0;
              case 1:
                this.Cf = !0, this.Gw = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(tt) {
            const et = this._uniformBuffer;
            et.x_("world", tt), et.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), et.update()
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
          toString(tt) {
            let et = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            et += ", # of submeshes: " + (this.vJ ? this.vJ.length : 0);
            const Vt = this._internalAbstractMeshDataInfo._skeleton;
            return Vt && (et += ", skeleton: " + Vt.name), tt && (et += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], et += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.eZ ? "YES" : "NO")), et
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== jt.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(tt) {
            let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (et || this.actionManager.isRecursive)) {
              if (!tt) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(tt)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(tt, !1) : null
          }
          _releaseRenderPassId(tt) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.vJ) {
              for (const tt of this.vJ) tt._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const tt of this.vI().lights) tt.isEnabled() && tt.canAffectMesh(this) && this._lightSources.push(tt);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(tt) {
            const et = tt.isEnabled() && tt.canAffectMesh(this),
              Vt = this._lightSources.indexOf(tt);
            let Ot = !1;
            if (-1 === Vt) {
              if (!et) return;
              this._lightSources.push(tt)
            } else {
              if (et) return;
              Ot = !0, this._lightSources.splice(Vt, 1)
            }
            this._markSubMeshesAsLightDirty(Ot)
          }
          _unBindEffect() {
            for (const tt of this.vJ) tt.setEffect(null)
          }
          _removeLightSource(tt, et) {
            const Vt = this._lightSources.indexOf(tt); - 1 !== Vt && (this._lightSources.splice(Vt, 1), this._markSubMeshesAsLightDirty(et))
          }
          _markSubMeshesAsDirty(tt) {
            if (this.vJ)
              for (const et of this.vJ)
                for (let Vt = 0; Vt < et._drawWrappers.length; ++Vt) {
                  const Ot = et._drawWrappers[Vt];
                  Ot && Ot.defines && Ot.defines.markAllAsDirty && tt(Ot.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((et => et.markAsLightDirty(tt)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((tt => tt.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((tt => tt.markAsMiscDirty()))
          }
          fVt(tt) {
            return this._currentRenderId = Number.MAX_VALUE, super.fVt(tt), this._isDirty = !0, this
          }
          resetDrawCache(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.vJ)
              for (const Vt of this.vJ) Vt.resetDrawCache(tt, et)
          }
          get isBlocked() {
            return !1
          }
          getLOD(tt) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          zOt() {
            return null
          }
          getVerticesData(tt) {
            return null
          }
          setVerticesData(tt, et, Vt, Ot) {
            return this
          }
          updateVerticesData(tt, et, Vt, Ot) {
            return this
          }
          setIndices(tt, et) {
            return this
          }
          isVerticesDataPresent(tt) {
            return !1
          }
          fL() {
            return this._masterMesh ? this._masterMesh.fL() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.fL()
          }
          setBoundingInfo(tt) {
            return this._boundingInfo = tt, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(tt, et, Vt) {
            return this._boundingInfo = new Xt.c(tt, et, Vt), this._boundingInfo
          }
          normalizeToUnitCube() {
            let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(tt, et, Vt)
          }
          get useBones() {
            return this.skeleton && this.vI().skeletonsEnabled && this.isVerticesDataPresent(mt.m.MatricesIndicesKind) && this.isVerticesDataPresent(mt.m.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(tt) {}
          _activate(tt, et) {
            return this._renderId = tt, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === jt.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get pI() {
            return !1
          }
          get cqt() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(tt, et, Vt) {
            return this.position.addInPlace(this.calcMovePOV(tt, et, Vt)), this
          }
          calcMovePOV(tt, et, Vt) {
            const Ot = new Dt.c;
            (this.rotationQuaternion ? this.rotationQuaternion : Dt.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Ot);
            const qt = Dt.n.Zero(),
              mt = this.definedFacingForward ? -1 : 1;
            return Dt.n.TransformCoordinatesFromFloatsToRef(tt * mt, et, Vt * mt, Ot, qt), qt
          }
          rotatePOV(tt, et, Vt) {
            return this.rotation.addInPlace(this.calcRotatePOV(tt, et, Vt)), this
          }
          calcRotatePOV(tt, et, Vt) {
            const Ot = this.definedFacingForward ? 1 : -1;
            return new Dt.n(tt * Ot, et, Vt * Ot)
          }
          _refreshBoundingInfo(tt, et) {
            if (tt) {
              const Vt = (0, Mt.f)(tt, 0, this.getTotalVertices(), et);
              this._boundingInfo ? this._boundingInfo.reConstruct(Vt.minimum, Vt.maximum) : this._boundingInfo = new Xt.c(Vt.minimum, Vt.maximum)
            }
            if (this.vJ)
              for (let Vt = 0; Vt < this.vJ.length; Vt++) this.vJ[Vt].refreshBoundingInfo(tt);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(tt) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(tt.minimum, tt.maximum) : this._boundingInfo = new Xt.c(tt.minimum, tt.maximum), this.vJ)
              for (let et = 0; et < this.vJ.length; et++) this.vJ[et].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(tt, et, Vt, Ot, qt, dt, jt) {
            ! function(tt, et, Vt, Ot, qt, dt, jt) {
              const Ht = Dt.k.uf[0],
                Xt = Dt.k.Matrix[0],
                Qt = Dt.k.Matrix[1],
                lt = et === mt.m.NormalKind ? Dt.n.TransformNormalFromFloatsToRef : Dt.n.TransformCoordinatesFromFloatsToRef;
              for (let mt = 0, Et = 0; mt < tt.length; mt += 3, Et += 4) {
                let et, ft;
                for (Xt.reset(), et = 0; et < 4; et++) ft = qt[Et + et], ft > 0 && (Dt.c.FromFloat32ArrayToRefScaled(Vt, Math.floor(16 * Ot[Et + et]), ft, Qt), Xt.addToSelf(Qt));
                if (dt && jt)
                  for (et = 0; et < 4; et++) ft = jt[Et + et], ft > 0 && (Dt.c.FromFloat32ArrayToRefScaled(Vt, Math.floor(16 * dt[Et + et]), ft, Qt), Xt.addToSelf(Qt));
                lt(tt[mt], tt[mt + 1], tt[mt + 2], Xt, Ht), Ht.toArray(tt, mt)
              }
            }(tt, et, Vt, Ot, qt, dt, jt)
          }
          _getData(et, Vt) {
            let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mt.m.PositionKind;
            const qt = et.cache,
              dt = tt => {
                if (qt) {
                  const et = qt._vertexData || (qt._vertexData = {});
                  return et[tt] || this.copyVerticesData(tt, et), et[tt]
                }
                return this.getVerticesData(tt)
              };
            if (Vt || (Vt = dt(Ot)), !Vt) return null;
            qt ? (qt._outputData ? qt._outputData.set(Vt) : qt._outputData = new Float32Array(Vt), Vt = qt._outputData) : (et.applyMorph && this.morphTargetManager || et.applySkeleton && this.skeleton || et.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Vt = Vt.slice()), et.applyMorph && this.morphTargetManager && function(tt, et, Vt) {
              let Ot;
              switch (et) {
                case mt.m.PositionKind:
                  Ot = tt => tt.getPositions();
                  break;
                case mt.m.NormalKind:
                  Ot = tt => tt.getNormals();
                  break;
                case mt.m.TangentKind:
                  Ot = tt => tt.getTangents();
                  break;
                case mt.m.UVKind:
                  Ot = tt => tt.getUVs();
                  break;
                case mt.m.UV2Kind:
                  Ot = tt => tt.getUV2s();
                  break;
                case mt.m.ColorKind:
                  Ot = tt => tt.getColors();
                  break;
                default:
                  return
              }
              for (let qt = 0; qt < tt.length; qt++) {
                let et = tt[qt];
                for (let Dt = 0; Dt < Vt.numTargets; Dt++) {
                  const mt = Vt.getTarget(Dt),
                    dt = mt.influence;
                  if (0 !== dt) {
                    const Vt = Ot(mt);
                    Vt && (et += (Vt[qt] - tt[qt]) * dt)
                  }
                }
                tt[qt] = et
              }
            }(Vt, Ot, this.morphTargetManager);
            const jt = this.bakedVertexAnimationManager;
            let Ht = !1;
            if (et.applyBakedVertexAnimation && jt?.isEnabled) {
              const tt = dt(mt.m.MatricesIndicesKind),
                qt = dt(mt.m.MatricesWeightsKind);
              if (qt && tt) {
                const Dt = this.numBoneInfluencers > 4,
                  Xt = Dt ? dt(mt.m.MatricesIndicesExtraKind) : null,
                  Qt = Dt ? dt(mt.m.MatricesWeightsExtraKind) : null;
                Ht = ct(Vt, Ot, jt, et.bakedVertexAnimationSettings ?? jt.animationParameters, tt, qt, Xt, Qt, this.numBoneInfluencers)
              }
            }
            if (!Ht && et.applySkeleton && this.skeleton) {
              const et = dt(mt.m.MatricesIndicesKind),
                qt = dt(mt.m.MatricesWeightsKind);
              if (qt && et) {
                const Dt = this.numBoneInfluencers > 4,
                  jt = Dt ? dt(mt.m.MatricesIndicesExtraKind) : null,
                  Ht = Dt ? dt(mt.m.MatricesWeightsExtraKind) : null,
                  Xt = this.skeleton.getTransformMatrices(this);
                tt._ApplySkeleton(Vt, Ot, Xt, et, qt, jt, Ht)
              }
            }
            if (!1 !== et.updatePositionsArray && Ot === mt.m.PositionKind) {
              const tt = this._internalAbstractMeshDataInfo._positions || [],
                et = tt.length;
              if (tt.length = Vt.length / 3, et < tt.length)
                for (let Vt = et; Vt < tt.length; Vt++) tt[Vt] = new Dt.n;
              for (let Ot = 0, qt = 0; Ot < tt.length; Ot++, qt += 3) tt[Ot].W9(Vt[qt], Vt[qt + 1], Vt[qt + 2]);
              this._internalAbstractMeshDataInfo._positions = tt
            }
            return Vt
          }
          getNormalsData() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: tt,
              applyMorph: et,
              updatePositionsArray: !1
            }, null, mt.m.NormalKind)
          }
          RY() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: tt,
              applyMorph: et,
              updatePositionsArray: !1
            }, Vt, mt.m.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Xt.c(Dt.n.Zero(), Dt.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(tt) {
            if (!this.vJ) return this;
            const et = this.vJ.length;
            for (let Vt = 0; Vt < et; Vt++) {
              const Ot = this.vJ[Vt];
              (et > 1 || !Ot.IsGlobal) && Ot.updateBoundingInfo(tt)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.hf || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(tt) {
            return this.fL().isInFrustum(tt, this.cullingStrategy)
          }
          isCompletelyInFrustum(tt) {
            return this.fL().isCompletelyInFrustum(tt)
          }
          uqt(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Vt = arguments.length > 2 ? arguments[2] : void 0;
            const Ot = this.fL(),
              qt = tt.fL();
            if (Ot.intersects(qt, et)) return !0;
            if (Vt)
              for (const Dt of this.getChildMeshes())
                if (Dt.uqt(tt, et, !0)) return !0;
            return !1
          }
          intersectsPoint(tt) {
            return this.fL().intersectsPoint(tt)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(tt) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = tt
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(tt) {
            let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Vt = this.vI().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Vt.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Vt.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, tt, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, et), this
          }
          _collideForSubMesh(tt, et, Vt) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!tt._lastColliderWorldVertices || !tt._lastColliderTransformMatrix.equals(et)) {
              tt._lastColliderTransformMatrix = et.clone(), tt._lastColliderWorldVertices = [], tt._trianglePlanes = [];
              const Vt = tt.verticesStart,
                Ot = tt.verticesStart + tt.verticesCount;
              for (let qt = Vt; qt < Ot; qt++) tt._lastColliderWorldVertices.push(Dt.n.TransformCoordinates(this._positions[qt], et))
            }
            return Vt._collide(tt._trianglePlanes, tt._lastColliderWorldVertices, this.zOt(), tt.indexStart, tt.indexStart + tt.indexCount, tt.verticesStart, !!tt.vf(), this, this._shouldConvertRHS(), 7 === tt.vf()?.fillMode), this
          }
          _processCollisionsForSubMeshes(tt, et) {
            const Vt = this._scene.getCollidingSubMeshCandidates(this, tt),
              Ot = Vt.length;
            for (let qt = 0; qt < Ot; qt++) {
              const Dt = Vt.data[qt];
              Ot > 1 && !Dt._checkCollision(tt) || this._collideForSubMesh(Dt, et, tt)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(tt) {
            if (!this.fL()._checkCollision(tt)) return this;
            const et = Dt.k.Matrix[0],
              Vt = Dt.k.Matrix[1];
            return Dt.c.ScalingToRef(1 / tt._radius.x, 1 / tt._radius.y, 1 / tt._radius.z, et), this.worldMatrixFromCache.multiplyToRef(et, Vt), this._processCollisionsForSubMeshes(tt, Vt), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(tt, et, Vt) {
            let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              qt = arguments.length > 4 ? arguments[4] : void 0,
              mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const dt = new Ht.b,
              jt = this.getClassName(),
              Xt = "InstancedLinesMesh" === jt || "LinesMesh" === jt || "GreasedLineMesh" === jt ? this.intersectionThreshold : 0,
              Qt = this.fL();
            if (!this.vJ) return dt;
            if (!mt && (!tt.intersectsSphere(Qt.jqt, Xt) || !tt.intersectsBox(Qt.boundingBox, Xt))) return dt;
            if (Ot) return dt.hit = !mt, dt.pickedMesh = mt ? null : this, dt.distance = mt ? 0 : Dt.n.Distance(tt.origin, Qt.jqt.center), dt.subMeshId = 0, dt;
            if (!this._generatePointsArray()) return dt;
            let lt = null;
            const Et = this._scene.getIntersectingSubMeshCandidates(this, tt),
              ft = Et.length;
            let wt = !1;
            for (let Dt = 0; Dt < ft; Dt++) {
              const tt = Et.data[Dt].vf();
              if (tt && (7 == tt.fillMode || 0 == tt.fillMode || 1 == tt.fillMode || 2 == tt.fillMode || 4 == tt.fillMode)) {
                wt = !0;
                break
              }
            }
            if (!wt) return dt.hit = !0, dt.pickedMesh = this, dt.distance = Dt.n.Distance(tt.origin, Qt.jqt.center), dt.subMeshId = -1, dt;
            for (let Dt = 0; Dt < ft; Dt++) {
              const Ot = Et.data[Dt];
              if (ft > 1 && !mt && !Ot.canIntersects(tt)) continue;
              const qt = Ot.intersects(tt, this._positions, this.zOt(), et, Vt);
              if (qt && (et || !lt || qt.distance < lt.distance) && (lt = qt, lt.subMeshId = Ot._id, lt._internalSubMeshId = Dt, et)) break
            }
            if (lt) {
              const et = qt ?? this.getWorldMatrix(),
                Vt = Dt.k.uf[0],
                Ot = Dt.k.uf[1];
              Dt.n.TransformCoordinatesToRef(tt.origin, et, Vt), tt.direction.scaleToRef(lt.distance, Ot);
              const mt = Dt.n.TransformNormal(Ot, et).addInPlace(Vt);
              return dt.hit = !0, dt.distance = Dt.n.Distance(Vt, mt), dt.pickedPoint = mt, dt.pickedMesh = this, dt.bu = lt.bu || 0, dt.bv = lt.bv || 0, dt.subMeshFaceId = lt.faceId, dt.faceId = lt.faceId + Et.data[lt._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), dt.subMeshId = lt.subMeshId, dt
            }
            return dt
          }
          clone(tt, et, Vt) {
            return null
          }
          releaseSubMeshes() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.vJ)
              for (; this.vJ.length;) this.vJ[0].dispose(tt);
            else this.vJ = [];
            return this
          }
          dispose(tt) {
            let et, Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Ot = this.vI();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Ot.freeActiveMeshes(), Ot.freeRenderingGroups(), Ot.renderingManager.maintainStateBetweenFrames && Ot.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((tt => tt !== this && tt.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), et = 0; et < this._intersectionsInProgress.length; et++) {
              const tt = this._intersectionsInProgress[et],
                Vt = tt._intersectionsInProgress.indexOf(this);
              tt._intersectionsInProgress.splice(Vt, 1)
            }
            this._intersectionsInProgress.length = 0;
            const qt = Ot.lights;
            for (const mt of qt) {
              let tt = mt.includedOnlyMeshes.indexOf(this); - 1 !== tt && mt.includedOnlyMeshes.splice(tt, 1), tt = mt.excludedMeshes.indexOf(this), -1 !== tt && mt.excludedMeshes.splice(tt, 1);
              const et = mt.getShadowGenerators();
              if (et) {
                const Vt = et.values();
                for (let et = Vt.next(); !0 !== et.done; et = Vt.next()) {
                  const Vt = et.value.getShadowMap();
                  Vt && Vt.renderList && (tt = Vt.renderList.indexOf(this), -1 !== tt && Vt.renderList.splice(tt, 1))
                }
              }
            }
            this.releaseSubMeshes(Ot._isDisposing);
            const Dt = Ot.Jf();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Dt.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Dt.wipeCaches(), Ot.wZ(this), this._parentContainer) {
              const tt = this._parentContainer.meshes.indexOf(this);
              tt > -1 && this._parentContainer.meshes.splice(tt, 1), this._parentContainer = null
            }
            if (Vt && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !tt)
              for (et = 0; et < Ot.PJ.length; et++) Ot.PJ[et].emitter === this && (Ot.PJ[et].dispose(), et--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(tt, Vt)
          }
          _initFacetData() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            tt.facetNormals || (tt.facetNormals = []), tt.facetPositions || (tt.facetPositions = []), tt.facetPartitioning || (tt.facetPartitioning = new Array), tt.facetNb = this.zOt().length / 3 | 0, tt.partitioningSubdivisions = tt.partitioningSubdivisions ? tt.partitioningSubdivisions : 10, tt.partitioningBBoxRatio = tt.partitioningBBoxRatio ? tt.partitioningBBoxRatio : 1.01;
            for (let et = 0; et < tt.facetNb; et++) tt.facetNormals[et] = Dt.n.Zero(), tt.facetPositions[et] = Dt.n.Zero();
            return tt.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            tt.facetDataEnabled || this._initFacetData();
            const et = this.getVerticesData(mt.m.PositionKind),
              Vt = this.zOt(),
              Ot = this.getVerticesData(mt.m.NormalKind)?.slice(),
              qt = this.fL();
            if (tt.facetDepthSort && !tt.facetDepthSortEnabled) {
              if (tt.facetDepthSortEnabled = !0, Vt instanceof Uint16Array) tt.depthSortedIndices = new Uint16Array(Vt);
              else if (Vt instanceof Uint32Array) tt.depthSortedIndices = new Uint32Array(Vt);
              else {
                let et = !1;
                for (let tt = 0; tt < Vt.length; tt++)
                  if (Vt[tt] > 65535) {
                    et = !0;
                    break
                  } tt.depthSortedIndices = et ? new Uint32Array(Vt) : new Uint16Array(Vt)
              }
              if (tt.facetDepthSortFunction = function(tt, et) {
                  return et.sqDistance - tt.sqDistance
                }, !tt.facetDepthSortFrom) {
                const et = this.vI().activeCamera;
                tt.facetDepthSortFrom = et ? et.position : Dt.n.Zero()
              }
              tt.depthSortedFacets = [];
              for (let et = 0; et < tt.facetNb; et++) {
                const Vt = {
                  ind: 3 * et,
                  sqDistance: 0
                };
                tt.depthSortedFacets.push(Vt)
              }
              tt.invertedMatrix = Dt.c.Identity(), tt.facetDepthSortOrigin = Dt.n.Zero()
            }
            tt.bbSize.x = qt.maximum.x - qt.minimum.x > Jt.e ? qt.maximum.x - qt.minimum.x : Jt.e, tt.bbSize.y = qt.maximum.y - qt.minimum.y > Jt.e ? qt.maximum.y - qt.minimum.y : Jt.e, tt.bbSize.z = qt.maximum.z - qt.minimum.z > Jt.e ? qt.maximum.z - qt.minimum.z : Jt.e;
            let jt = tt.bbSize.x > tt.bbSize.y ? tt.bbSize.x : tt.bbSize.y;
            if (jt = jt > tt.bbSize.z ? jt : tt.bbSize.z, tt.subDiv.max = tt.partitioningSubdivisions, tt.subDiv.X = Math.floor(tt.subDiv.max * tt.bbSize.x / jt), tt.subDiv.Y = Math.floor(tt.subDiv.max * tt.bbSize.y / jt), tt.subDiv.Z = Math.floor(tt.subDiv.max * tt.bbSize.z / jt), tt.subDiv.X = tt.subDiv.X < 1 ? 1 : tt.subDiv.X, tt.subDiv.Y = tt.subDiv.Y < 1 ? 1 : tt.subDiv.Y, tt.subDiv.Z = tt.subDiv.Z < 1 ? 1 : tt.subDiv.Z, tt.facetParameters.facetNormals = this.getFacetLocalNormals(), tt.facetParameters.facetPositions = this.getFacetLocalPositions(), tt.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), tt.facetParameters.bInfo = qt, tt.facetParameters.bbSize = tt.bbSize, tt.facetParameters.subDiv = tt.subDiv, tt.facetParameters.ratio = this.partitioningBBoxRatio, tt.facetParameters.depthSort = tt.facetDepthSort, tt.facetDepthSort && tt.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(tt.invertedMatrix), Dt.n.TransformCoordinatesToRef(tt.facetDepthSortFrom, tt.invertedMatrix, tt.facetDepthSortOrigin), tt.facetParameters.distanceTo = tt.facetDepthSortOrigin), tt.facetParameters.depthSortedFacets = tt.depthSortedFacets, Ot && dt.d.ComputeNormals(et, Vt, Ot, tt.facetParameters), tt.facetDepthSort && tt.facetDepthSortEnabled) {
              tt.depthSortedFacets.sort(tt.facetDepthSortFunction);
              const et = tt.depthSortedIndices.length / 3 | 0;
              for (let Ot = 0; Ot < et; Ot++) {
                const et = tt.depthSortedFacets[Ot].ind;
                tt.depthSortedIndices[3 * Ot] = Vt[et], tt.depthSortedIndices[3 * Ot + 1] = Vt[et + 1], tt.depthSortedIndices[3 * Ot + 2] = Vt[et + 2]
              }
              this.updateIndices(tt.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            return tt.facetNormals || this.updateFacetData(), tt.facetNormals
          }
          getFacetLocalPositions() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            return tt.facetPositions || this.updateFacetData(), tt.facetPositions
          }
          getFacetLocalPartitioning() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            return tt.facetPartitioning || this.updateFacetData(), tt.facetPartitioning
          }
          getFacetPosition(tt) {
            const et = Dt.n.Zero();
            return this.getFacetPositionToRef(tt, et), et
          }
          getFacetPositionToRef(tt, et) {
            const Vt = this.getFacetLocalPositions()[tt],
              Ot = this.getWorldMatrix();
            return Dt.n.TransformCoordinatesToRef(Vt, Ot, et), this
          }
          getFacetNormal(tt) {
            const et = Dt.n.Zero();
            return this.getFacetNormalToRef(tt, et), et
          }
          getFacetNormalToRef(tt, et) {
            const Vt = this.getFacetLocalNormals()[tt];
            return Dt.n.TransformNormalToRef(Vt, this.getWorldMatrix(), et), this
          }
          getFacetsAtLocalCoordinates(tt, et, Vt) {
            const Ot = this.fL(),
              qt = this._internalAbstractMeshDataInfo._facetData,
              Dt = Math.floor((tt - Ot.minimum.x * qt.partitioningBBoxRatio) * qt.subDiv.X * qt.partitioningBBoxRatio / qt.bbSize.x),
              mt = Math.floor((et - Ot.minimum.y * qt.partitioningBBoxRatio) * qt.subDiv.Y * qt.partitioningBBoxRatio / qt.bbSize.y),
              dt = Math.floor((Vt - Ot.minimum.z * qt.partitioningBBoxRatio) * qt.subDiv.Z * qt.partitioningBBoxRatio / qt.bbSize.z);
            return Dt < 0 || Dt > qt.subDiv.max || mt < 0 || mt > qt.subDiv.max || dt < 0 || dt > qt.subDiv.max ? null : qt.facetPartitioning[Dt + qt.subDiv.max * mt + qt.subDiv.max * qt.subDiv.max * dt]
          }
          getClosestFacetAtCoordinates(tt, et, Vt, Ot) {
            let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const dt = this.getWorldMatrix(),
              jt = Dt.k.Matrix[5];
            dt.invertToRef(jt);
            const Ht = Dt.k.uf[8];
            Dt.n.TransformCoordinatesFromFloatsToRef(tt, et, Vt, jt, Ht);
            const Xt = this.getClosestFacetAtLocalCoordinates(Ht.x, Ht.y, Ht.z, Ot, qt, mt);
            return Ot && Dt.n.TransformCoordinatesFromFloatsToRef(Ot.x, Ot.y, Ot.z, dt, Ot), Xt
          }
          getClosestFacetAtLocalCoordinates(tt, et, Vt, Ot) {
            let qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Et = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              ft = null;
            const wt = this.getFacetLocalPositions(),
              yt = this.getFacetLocalNormals(),
              Nt = this.getFacetsAtLocalCoordinates(tt, et, Vt);
            if (!Nt) return null;
            let Mt, bt, Jt, Ct, ut = Number.MAX_VALUE;
            for (let Kt = 0; Kt < Nt.length; Kt++) bt = Nt[Kt], Jt = yt[bt], Ct = wt[bt], dt = (tt - Ct.x) * Jt.x + (et - Ct.y) * Jt.y + (Vt - Ct.z) * Jt.z, (!lt || lt && Et && dt >= 0 || lt && !Et && dt <= 0) && (dt = Jt.x * Ct.x + Jt.y * Ct.y + Jt.z * Ct.z, jt = -(Jt.x * tt + Jt.y * et + Jt.z * Vt - dt) / (Jt.x * Jt.x + Jt.y * Jt.y + Jt.z * Jt.z), Ht = tt + Jt.x * jt, Xt = et + Jt.y * jt, Qt = Vt + Jt.z * jt, qt = Ht - tt, Dt = Xt - et, mt = Qt - Vt, Mt = qt * qt + Dt * Dt + mt * mt, Mt < ut && (ut = Mt, ft = bt, Ot && (Ot.x = Ht, Ot.y = Xt, Ot.z = Qt)));
            return ft
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const tt = this._internalAbstractMeshDataInfo._facetData;
            return tt.facetDataEnabled && (tt.facetDataEnabled = !1, tt.facetPositions = [], tt.facetNormals = [], tt.facetPartitioning = new Array, tt.facetParameters = {}, tt.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(tt, et) {
            return this
          }
          createNormals(tt) {
            const et = this.getVerticesData(mt.m.PositionKind),
              Vt = this.zOt();
            let Ot;
            return Ot = this.isVerticesDataPresent(mt.m.NormalKind) ? this.getVerticesData(mt.m.NormalKind) : [], dt.d.ComputeNormals(et, Vt, Ot, {
              useRightHandedSystem: this.vI().useRightHandedSystem
            }), this.setVerticesData(mt.m.NormalKind, Ot, tt), this
          }
          async optimizeIndicesAsync() {
            const tt = this.zOt();
            if (!tt) return this;
            const {
              OptimizeIndices: et
            } = await Vt.e(356).then((() => Vt(42791)));
            return et(tt), this.setIndices(tt, this.getTotalVertices()), this
          }
          alignWithNormal(tt, et) {
            et || (et = Ct.b.Y);
            const Vt = Dt.k.uf[0],
              Ot = Dt.k.uf[1];
            return Dt.n.CrossToRef(et, tt, Ot), Dt.n.CrossToRef(tt, Ot, Vt), this.rotationQuaternion ? Dt.e.RotationQuaternionFromAxisToRef(Vt, tt, Ot, this.rotationQuaternion) : Dt.n.RotationFromAxisToRef(Vt, tt, Ot, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, yt.e)("EdgesRenderer")
          }
          enableEdgesRendering(tt, et, Vt) {
            throw (0, yt.e)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.PJ.filter((tt => tt.emitter === this))
          }
        }, (() => {
          const Vt = "function" === typeof Symbol && Symbol.metadata ? Object.create(lt[Symbol.metadata] ?? null) : void 0;
          et = [Kt.l.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Ot.l)(tt, null, et, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: tt => "_ApplySkeleton" in tt,
              get: tt => tt._ApplySkeleton
            },
            metadata: Vt
          }, null, Et), Vt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vt
          })
        })(), tt.OCCLUSION_TYPE_NONE = ((0, Ot.m)(tt, Et), 0), tt.OCCLUSION_TYPE_OPTIMISTIC = 1, tt.OCCLUSION_TYPE_STRICT = 2, tt.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, tt.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, tt.CULLINGSTRATEGY_STANDARD = 0, tt.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, tt.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, tt.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, tt.DefaultIsPickable = !0, tt
      })(),
      Zt = !1;

    function Lt() {
      Zt || (Zt = !0, (0, vt.i)("BABYLON.AbstractMesh", Pt))
    }(Et = Pt.prototype).createOrUpdateSubmeshesOctree ?? (Et.createOrUpdateSubmeshesOctree = (0, yt.d)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (ft = Pt.prototype).getPhysicsImpostor ?? (ft.getPhysicsImpostor = (0, yt.d)("AbstractMesh", "getPhysicsImpostor")), (wt = Pt.prototype).setPhysicsLinkWith ?? (wt.setPhysicsLinkWith = (0, yt.d)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Pt.prototype, "occlusionRetryCount") || Object.defineProperty(Pt.prototype, "occlusionRetryCount", (0, yt.c)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Pt.prototype, "occlusionType") || Object.defineProperty(Pt.prototype, "occlusionType", (0, yt.c)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Pt.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Pt.prototype, "occlusionQueryAlgorithmType", (0, yt.c)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Pt.prototype, "isOccluded") || Object.defineProperty(Pt.prototype, "isOccluded", (0, yt.c)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Pt.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Pt.prototype, "isOcclusionQueryInProgress", (0, yt.c)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Pt.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Pt.prototype, "forceRenderingWhenOccluded", (0, yt.c)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Pt.prototype, "occlusionForRenderPassId") || Object.defineProperty(Pt.prototype, "occlusionForRenderPassId", (0, yt.c)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Pt.prototype, "decalMap") || Object.defineProperty(Pt.prototype, "decalMap", (0, yt.c)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Pt.prototype, "qL") || Object.defineProperty(Pt.prototype, "qL", (0, yt.c)("AbstractMesh", "qL")), Object.getOwnPropertyDescriptor(Pt.prototype, "physicsImpostor") || Object.defineProperty(Pt.prototype, "physicsImpostor", (0, yt.c)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Pt.prototype, "showBoundingBox") || Object.defineProperty(Pt.prototype, "showBoundingBox", (0, yt.c)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Pt.prototype, "edgesRenderer") || Object.defineProperty(Pt.prototype, "edgesRenderer", (0, yt.c)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Pt.prototype, "renderOutline") || Object.defineProperty(Pt.prototype, "renderOutline", (0, yt.c)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Pt.prototype, "renderOverlay") || Object.defineProperty(Pt.prototype, "renderOverlay", (0, yt.c)("AbstractMesh", "renderOverlay"))
  },
  40614: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Nt
    });
    var Ot = Vt(37336),
      qt = Vt(37513),
      Dt = Vt(40608),
      mt = Vt(40343),
      dt = Vt(40476),
      jt = Vt(40621),
      Ht = Vt(40490),
      Xt = Vt(40300),
      Qt = Vt(38899),
      lt = Vt(40239),
      Et = Vt(40503),
      ft = Vt(37359),
      wt = Vt(40628),
      yt = Vt(40270);
    class Nt {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(tt) {
        this._boundingBias ? this._boundingBias.rK(tt) : this._boundingBias = tt.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(tt) {
        const et = new Nt(Nt.RandomId(), tt.vI());
        return et.applyToMesh(tt), et
      }
      get meshes() {
        return this._meshes
      }
      constructor(tt, et, Vt) {
        let qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Ot.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Ot.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = et || ft.d.LastCreatedScene, this._scene && (this.id = tt, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Jf(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = qt, null !== mt && (this._totalVertices = mt), Vt ? this.setAllVerticesData(Vt, qt) : null === mt && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Dt && (this.applyToMesh(Dt), Dt.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      vI() {
        return this._scene
      }
      Jf() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let tt = 0; tt < this._meshes.length; tt++)
          if (!this._meshes[tt].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const tt = new Set;
        for (const et in this._vertexBuffers) tt.add(this._vertexBuffers[et].getWrapperBuffer());
        tt.forEach((tt => {
          tt._rebuild()
        }))
      }
      setAllVerticesData(tt, et) {
        tt.applyToGeometry(this, et), this._notifyUpdate()
      }
      setVerticesData(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        Vt && Array.isArray(et) && (et = new Float32Array(et));
        const qt = new mt.m(this._engine, et, tt, {
          updatable: Vt,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Ot,
          label: "Geometry_" + this.id + "_" + tt
        });
        this.setVerticesBuffer(qt)
      }
      removeVerticesData(tt) {
        this._vertexBuffers[tt] && (this._vertexBuffers[tt].dispose(), delete this._vertexBuffers[tt]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const qt = tt.getKind();
        this._vertexBuffers[qt] && Vt && this._vertexBuffers[qt].dispose(), tt._buffer && tt._ownsBuffer && tt._buffer._increaseReferences(), this._vertexBuffers[qt] = tt;
        const Dt = this._meshes,
          dt = Dt.length;
        if (qt === mt.m.PositionKind) {
          this._totalVertices = et ?? tt._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : tt.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Vt = this._extend && this._extend.minimum || new Ot.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            qt = this._extend && this._extend.maximum || new Ot.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let tt = 0; tt < dt; tt++) {
            const et = Dt[tt];
            et.buildBoundingInfo(Vt, qt), et._createGlobalSubMesh(et.isUnIndexed), et.computeWorldMatrix(!0), et.synchronizeInstances()
          }
        }
        this._notifyUpdate(qt)
      }
      updateVerticesDataDirectly(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qt = this.getVertexBuffer(tt);
        qt && (qt.updateDirectly(et, Vt, Ot), this._notifyUpdate(tt))
      }
      updateVerticesData(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = this.getVertexBuffer(tt);
        Ot && (Ot.update(et), tt === mt.m.PositionKind && this._updateBoundingInfo(Vt, et), this._notifyUpdate(tt))
      }
      _updateBoundingInfo(tt, et) {
        if (tt && this._updateExtend(et), this._resetPointsArrayCache(), tt) {
          const tt = this._meshes;
          for (const et of tt) {
            et.hasBoundingInfo ? et.fL().reConstruct(this._extend.minimum, this._extend.maximum) : et.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const tt = et.vJ;
            for (const et of tt) et.refreshBoundingInfo()
          }
        }
      }
      _bind(tt, et, Vt, Ot) {
        if (!tt) return;
        void 0 === et && (et = this._indexBuffer);
        const qt = this.getVertexBuffers();
        if (!qt) return;
        if (et != this._indexBuffer || !this._vertexArrayObjects && !Ot) return void this._engine.bindBuffers(qt, et, tt, Vt);
        const Dt = Ot || this._vertexArrayObjects,
          mt = this._engine;
        Dt[tt.key] || (Dt[tt.key] = mt.recordVertexArrayObject(qt, et, tt, Vt)), mt.bindVertexArrayObject(Dt[tt.key], et)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(tt, et, Vt) {
        const Ot = this.getVertexBuffer(tt);
        return Ot ? Ot.getFloatData(this._totalVertices, Vt || et && 1 !== this._meshes.length) : null
      }
      copyVerticesData(tt, et) {
        const Vt = this.getVertexBuffer(tt);
        if (!Vt) return;
        et[tt] || (et[tt] = new Float32Array(this._totalVertices * Vt.getSize()));
        const Ot = Vt.getData();
        Ot && (0, yt.h)(Ot, Vt.getSize(), Vt.type, Vt.byteOffset, Vt.byteStride, Vt.normalized, this._totalVertices, et[tt])
      }
      isVertexBufferUpdatable(tt) {
        const et = this._vertexBuffers[tt];
        return !!et && et.isUpdatable()
      }
      getVertexBuffer(tt) {
        return this.isReady() ? this._vertexBuffers[tt] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(tt) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[tt] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(tt)
      }
      getVerticesDataKinds() {
        const tt = [];
        let et;
        if (!this._vertexBuffers && this._delayInfo)
          for (et in this._delayInfo) tt.push(et);
        else
          for (et in this._vertexBuffers) tt.push(et);
        return tt
      }
      updateIndices(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Ot = tt.length !== this._indices.length;
            if (Vt || (this._indices = tt.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, tt, et), Ot)
              for (const tt of this._meshes) tt._createGlobalSubMesh(!0)
          } else this.setIndices(tt, null, !0)
      }
      setIndexBuffer(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = tt, this._totalVertices = et, this._totalIndices = Vt, tt.is32Bits = null === Ot ? et > 65535 : Ot;
        for (const qt of this._meshes) qt._createGlobalSubMesh(!0), qt.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = tt, this._indexBufferIsUpdatable = Vt, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Vt, "Geometry_" + this.id + "_IndexBuffer")), void 0 != et && (this._totalVertices = et);
        for (const qt of this._meshes) qt._createGlobalSubMesh(!Ot), qt.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      zOt(tt, et) {
        if (!this.isReady()) return null;
        const Vt = this._indices;
        return et || tt && 1 !== this._meshes.length ? Vt.slice() : Vt
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        tt && this._vertexArrayObjects && this._vertexArrayObjects[tt.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[tt.key]), delete this._vertexArrayObjects[tt.key])
      }
      releaseForMesh(tt, et) {
        const Vt = this._meshes,
          Ot = Vt.indexOf(tt); - 1 !== Ot && (Vt.splice(Ot, 1), this._vertexArrayObjects && tt._invalidateInstanceVertexArrayObject(), tt._geometry = null, 0 === Vt.length && et && this.dispose())
      }
      applyToMesh(tt) {
        if (tt._geometry === this) return;
        const et = tt._geometry;
        et && et.releaseForMesh(tt), this._vertexArrayObjects && tt._invalidateInstanceVertexArrayObject();
        const Vt = this._meshes;
        tt._geometry = this, tt._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Vt.push(tt), this.isReady() ? this._applyToMesh(tt) : this._boundingInfo && tt.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!tt && (tt = this.getVerticesData(mt.m.PositionKind), !tt)) return;
          this._extend = (0, Et.f)(tt, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(tt) {
        for (const et in this._vertexBuffers) {
          const Vt = this._vertexBuffers[et];
          Vt._buffer.getBuffer() || Vt.create(), et === mt.m.PositionKind && (this._extend || this._updateExtend(), tt.buildBoundingInfo(this._extend.minimum, this._extend.maximum), tt._createGlobalSubMesh(tt.isUnIndexed), tt._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), tt._syncGeometryWithMorphTargetManager(), tt.synchronizeInstances()
      }
      _notifyUpdate(tt) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, tt), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const et of this._meshes) et._markSubMeshesAsAttributesDirty()
      }
      load(tt, et) {
        2 !== this.delayLoadState && (this.isReady() ? et && et() : (this.delayLoadState = 2, this._queueLoad(tt, et)))
      }
      _queueLoad(tt, et) {
        this.delayLoadingFile && (tt.addPendingData(this), (async () => {
          try {
            const Vt = await tt._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void tt.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Vt), this), this.delayLoadState = 1, this._delayInfo = [], tt.removePendingData(this);
            const Ot = this._meshes,
              qt = Ot.length;
            for (let tt = 0; tt < qt; tt++) this._applyToMesh(Ot[tt]);
            et && et()
          } catch (Vt) {
            tt.removePendingData(this), tt.bC || Qt.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Vt}`)
          }
        })())
      }
      toLeftHanded() {
        const tt = this.zOt(!1);
        if (null != tt && tt.length > 0) {
          for (let et = 0; et < tt.length; et += 3) {
            const Vt = tt[et + 0];
            tt[et + 0] = tt[et + 2], tt[et + 2] = Vt
          }
          this.setIndices(tt)
        }
        const et = this.getVerticesData(mt.m.PositionKind, !1);
        if (null != et && et.length > 0) {
          for (let tt = 0; tt < et.length; tt += 3) et[tt + 2] = -et[tt + 2];
          this.setVerticesData(mt.m.PositionKind, et, !1)
        }
        const Vt = this.getVerticesData(mt.m.NormalKind, !1);
        if (null != Vt && Vt.length > 0) {
          for (let tt = 0; tt < Vt.length; tt += 3) Vt[tt + 2] = -Vt[tt + 2];
          this.setVerticesData(mt.m.NormalKind, Vt, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const tt = this.getVerticesData(mt.m.PositionKind);
        if (!tt || 0 === tt.length) return !1;
        for (let et = 3 * this._positionsCache.length, Vt = this._positionsCache.length; et < tt.length; et += 3, ++Vt) this._positionsCache[Vt] = Ot.n.FromArray(tt, et);
        for (let et = 0, Vt = 0; et < tt.length; et += 3, ++Vt) this._positionsCache[Vt].set(tt[0 + et], tt[1 + et], tt[2 + et]);
        return this._positionsCache.length = tt.length / 3, this._positions = this._positionsCache, !0
      }
      bC() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Vt in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Vt]);
          this._vertexArrayObjects = {};
          const tt = this._meshes,
            et = tt.length;
          for (let Vt = 0; Vt < et; Vt++) tt[Vt]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const tt = this._meshes,
          et = tt.length;
        let Vt;
        for (Vt = 0; Vt < et; Vt++) this.releaseForMesh(tt[Vt]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Ot in this._vertexBuffers) this._vertexBuffers[Ot].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const tt = this._parentContainer.geometries.indexOf(this);
          tt > -1 && this._parentContainer.geometries.splice(tt, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(tt) {
        const et = new Nt(tt, this._scene),
          Vt = this.zOt(void 0, !0);
        Vt && et.setIndices(Vt);
        let Ot, qt = !1;
        for (Ot in this._vertexBuffers) {
          const tt = this.getVertexBuffer(Ot),
            Vt = tt.getData();
          if (!Vt) continue;
          const Dt = tt.isUpdatable(),
            dt = tt.getSize(),
            {
              type: jt,
              byteOffset: Ht,
              byteStride: Xt,
              normalized: Qt
            } = tt;
          qt = qt || Dt;
          let lt = this._totalVertices;
          if (tt.getIsInstanced()) {
            let tt;
            tt = Vt instanceof Array ? 4 * Vt.length : Vt.byteLength, lt = tt / Xt
          }
          const Et = (0, yt.z)(Vt, dt, jt, Ht, Xt, lt, !0),
            ft = new mt.m(this._engine, Et, Ot, {
              updatable: Dt,
              useBytes: !1,
              stride: dt,
              size: dt,
              offset: 0,
              type: jt,
              normalized: Qt,
              takeBufferOwnership: !0,
              instanced: tt.getIsInstanced()
            });
          et.setVerticesBuffer(ft, lt)
        }
        for (Ot in et._updatable = qt, et.delayLoadState = this.delayLoadState, et.delayLoadingFile = this.delayLoadingFile, et._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) et._delayInfo = et._delayInfo || [], et._delayInfo.push(Ot);
        return et._boundingInfo = new Ht.c(this._extend.minimum, this._extend.maximum), et
      }
      serialize() {
        const tt = {};
        return tt.id = this.id, tt.uniqueId = this.uniqueId, tt.updatable = this._updatable, lt.d && lt.d.HasTags(this) && (tt.tags = lt.d.GetTags(this)), tt
      }
      _toNumberArray(tt) {
        return Array.isArray(tt) ? tt : Array.prototype.slice.call(tt)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const tt in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, tt) && (this._vertexBuffers[tt]._buffer._data = null)
      }
      serializeVerticeData() {
        const tt = this.serialize();
        return this.isVerticesDataPresent(mt.m.PositionKind) && (tt.positions = this._toNumberArray(this.getVerticesData(mt.m.PositionKind)), this.isVertexBufferUpdatable(mt.m.PositionKind) && (tt.positionsUpdatable = !0)), this.isVerticesDataPresent(mt.m.NormalKind) && (tt.normals = this._toNumberArray(this.getVerticesData(mt.m.NormalKind)), this.isVertexBufferUpdatable(mt.m.NormalKind) && (tt.normalsUpdatable = !0)), this.isVerticesDataPresent(mt.m.TangentKind) && (tt.tangents = this._toNumberArray(this.getVerticesData(mt.m.TangentKind)), this.isVertexBufferUpdatable(mt.m.TangentKind) && (tt.tangentsUpdatable = !0)), this.isVerticesDataPresent(mt.m.UVKind) && (tt.uvs = this._toNumberArray(this.getVerticesData(mt.m.UVKind)), this.isVertexBufferUpdatable(mt.m.UVKind) && (tt.uvsUpdatable = !0)), this.isVerticesDataPresent(mt.m.UV2Kind) && (tt.uvs2 = this._toNumberArray(this.getVerticesData(mt.m.UV2Kind)), this.isVertexBufferUpdatable(mt.m.UV2Kind) && (tt.uvs2Updatable = !0)), this.isVerticesDataPresent(mt.m.UV3Kind) && (tt.uvs3 = this._toNumberArray(this.getVerticesData(mt.m.UV3Kind)), this.isVertexBufferUpdatable(mt.m.UV3Kind) && (tt.uvs3Updatable = !0)), this.isVerticesDataPresent(mt.m.UV4Kind) && (tt.uvs4 = this._toNumberArray(this.getVerticesData(mt.m.UV4Kind)), this.isVertexBufferUpdatable(mt.m.UV4Kind) && (tt.uvs4Updatable = !0)), this.isVerticesDataPresent(mt.m.UV5Kind) && (tt.uvs5 = this._toNumberArray(this.getVerticesData(mt.m.UV5Kind)), this.isVertexBufferUpdatable(mt.m.UV5Kind) && (tt.uvs5Updatable = !0)), this.isVerticesDataPresent(mt.m.UV6Kind) && (tt.uvs6 = this._toNumberArray(this.getVerticesData(mt.m.UV6Kind)), this.isVertexBufferUpdatable(mt.m.UV6Kind) && (tt.uvs6Updatable = !0)), this.isVerticesDataPresent(mt.m.ColorKind) && (tt.colors = this._toNumberArray(this.getVerticesData(mt.m.ColorKind)), this.isVertexBufferUpdatable(mt.m.ColorKind) && (tt.colorsUpdatable = !0)), this.isVerticesDataPresent(mt.m.MatricesIndicesKind) && (tt.matricesIndices = this._toNumberArray(this.getVerticesData(mt.m.MatricesIndicesKind)), tt.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(mt.m.MatricesIndicesKind) && (tt.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(mt.m.MatricesWeightsKind) && (tt.matricesWeights = this._toNumberArray(this.getVerticesData(mt.m.MatricesWeightsKind)), this.isVertexBufferUpdatable(mt.m.MatricesWeightsKind) && (tt.matricesWeightsUpdatable = !0)), tt.indices = this._toNumberArray(this.zOt()), tt
      }
      static ExtractFromMesh(tt, et) {
        const Vt = tt._geometry;
        return Vt ? Vt.copy(et) : null
      }
      static RandomId() {
        return Xt.l.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(tt, et) {
        for (let Vt = 0; Vt < et.geometries.length; Vt++)
          if (et.geometries[Vt]._loadedUniqueId === tt) return et.geometries[Vt];
        return null
      }
      static _ImportGeometry(tt, et) {
        const Vt = et.vI(),
          Ot = tt.geometryUniqueId,
          Dt = tt.geometryId;
        if (Ot || Dt) {
          const tt = Ot ? this._GetGeometryByLoadedUniqueId(Ot, Vt) : Vt.getGeometryById(Dt);
          tt && tt.applyToMesh(et)
        } else if (tt instanceof ArrayBuffer) {
          const Vt = et._binaryInfo;
          if (Vt.positionsAttrDesc && Vt.positionsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.positionsAttrDesc.offset, Vt.positionsAttrDesc.count);
            et.setVerticesData(mt.m.PositionKind, Ot, !1)
          }
          if (Vt.normalsAttrDesc && Vt.normalsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.normalsAttrDesc.offset, Vt.normalsAttrDesc.count);
            et.setVerticesData(mt.m.NormalKind, Ot, !1)
          }
          if (Vt.tangetsAttrDesc && Vt.tangetsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.tangetsAttrDesc.offset, Vt.tangetsAttrDesc.count);
            et.setVerticesData(mt.m.TangentKind, Ot, !1)
          }
          if (Vt.uvsAttrDesc && Vt.uvsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvsAttrDesc.offset, Vt.uvsAttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UVKind, Ot, !1)
          }
          if (Vt.uvs2AttrDesc && Vt.uvs2AttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvs2AttrDesc.offset, Vt.uvs2AttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UV2Kind, Ot, !1)
          }
          if (Vt.uvs3AttrDesc && Vt.uvs3AttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvs3AttrDesc.offset, Vt.uvs3AttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UV3Kind, Ot, !1)
          }
          if (Vt.uvs4AttrDesc && Vt.uvs4AttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvs4AttrDesc.offset, Vt.uvs4AttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UV4Kind, Ot, !1)
          }
          if (Vt.uvs5AttrDesc && Vt.uvs5AttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvs5AttrDesc.offset, Vt.uvs5AttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UV5Kind, Ot, !1)
          }
          if (Vt.uvs6AttrDesc && Vt.uvs6AttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.uvs6AttrDesc.offset, Vt.uvs6AttrDesc.count);
            if (wt.b)
              for (let tt = 1; tt < Ot.length; tt += 2) Ot[tt] = 1 - Ot[tt];
            et.setVerticesData(mt.m.UV6Kind, Ot, !1)
          }
          if (Vt.colorsAttrDesc && Vt.colorsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.colorsAttrDesc.offset, Vt.colorsAttrDesc.count);
            et.setVerticesData(mt.m.ColorKind, Ot, !1, Vt.colorsAttrDesc.stride)
          }
          if (Vt.matricesIndicesAttrDesc && Vt.matricesIndicesAttrDesc.count > 0) {
            const Ot = new Int32Array(tt, Vt.matricesIndicesAttrDesc.offset, Vt.matricesIndicesAttrDesc.count),
              qt = [];
            for (let tt = 0; tt < Ot.length; tt++) {
              const et = Ot[tt];
              qt.push(255 & et), qt.push((65280 & et) >> 8), qt.push((16711680 & et) >> 16), qt.push(et >> 24 & 255)
            }
            et.setVerticesData(mt.m.MatricesIndicesKind, qt, !1)
          }
          if (Vt.matricesIndicesExtraAttrDesc && Vt.matricesIndicesExtraAttrDesc.count > 0) {
            const Ot = new Int32Array(tt, Vt.matricesIndicesExtraAttrDesc.offset, Vt.matricesIndicesExtraAttrDesc.count),
              qt = [];
            for (let tt = 0; tt < Ot.length; tt++) {
              const et = Ot[tt];
              qt.push(255 & et), qt.push((65280 & et) >> 8), qt.push((16711680 & et) >> 16), qt.push(et >> 24 & 255)
            }
            et.setVerticesData(mt.m.MatricesIndicesExtraKind, qt, !1)
          }
          if (Vt.matricesWeightsAttrDesc && Vt.matricesWeightsAttrDesc.count > 0) {
            const Ot = new Float32Array(tt, Vt.matricesWeightsAttrDesc.offset, Vt.matricesWeightsAttrDesc.count);
            et.setVerticesData(mt.m.MatricesWeightsKind, Ot, !1)
          }
          if (Vt.indicesAttrDesc && Vt.indicesAttrDesc.count > 0) {
            const Ot = new Int32Array(tt, Vt.indicesAttrDesc.offset, Vt.indicesAttrDesc.count);
            et.setIndices(Ot, null)
          }
          if (Vt.subMeshesAttrDesc && Vt.subMeshesAttrDesc.count > 0) {
            const Ot = new Int32Array(tt, Vt.subMeshesAttrDesc.offset, 5 * Vt.subMeshesAttrDesc.count);
            et.vJ = [];
            for (let tt = 0; tt < Vt.subMeshesAttrDesc.count; tt++) {
              const Vt = Ot[5 * tt + 0],
                qt = Ot[5 * tt + 1],
                Dt = Ot[5 * tt + 2],
                mt = Ot[5 * tt + 3],
                jt = Ot[5 * tt + 4];
              dt.d.AddToMesh(Vt, qt, Dt, mt, jt, et)
            }
          }
        } else if (tt.positions && tt.normals && tt.indices) {
          if (et.setVerticesData(mt.m.PositionKind, tt.positions, tt.positions._updatable || tt.positionsUpdatable), et.setVerticesData(mt.m.NormalKind, tt.normals, tt.normals._updatable || tt.normalsUpdatable), tt.tangents && et.setVerticesData(mt.m.TangentKind, tt.tangents, tt.tangents._updatable || tt.tangentsUpdatable), tt.uvs && et.setVerticesData(mt.m.UVKind, tt.uvs, tt.uvs._updatable || tt.uvsUpdatable), tt.uvs2 && et.setVerticesData(mt.m.UV2Kind, tt.uvs2, tt.uvs2._updatable || tt.uvs2Updatable), tt.uvs3 && et.setVerticesData(mt.m.UV3Kind, tt.uvs3, tt.uvs3._updatable || tt.uvs3Updatable), tt.uvs4 && et.setVerticesData(mt.m.UV4Kind, tt.uvs4, tt.uvs4._updatable || tt.uvs4Updatable), tt.uvs5 && et.setVerticesData(mt.m.UV5Kind, tt.uvs5, tt.uvs5._updatable || tt.uvs5Updatable), tt.uvs6 && et.setVerticesData(mt.m.UV6Kind, tt.uvs6, tt.uvs6._updatable || tt.uvs6Updatable), tt.colors && et.setVerticesData(mt.m.ColorKind, qt.c.CheckColors4(tt.colors, tt.positions.length / 3), tt.colors._updatable), tt.matricesIndices)
            if (tt.matricesIndices._isExpanded || tt.matricesIndicesExpanded) delete tt.matricesIndices._isExpanded, delete tt.matricesIndicesExpanded, et.setVerticesData(mt.m.MatricesIndicesKind, tt.matricesIndices, tt.matricesIndices._updatable || tt.matricesIndicesUpdatable);
            else {
              const Vt = [];
              for (let et = 0; et < tt.matricesIndices.length; et++) {
                const Ot = tt.matricesIndices[et];
                Vt.push(255 & Ot), Vt.push((65280 & Ot) >> 8), Vt.push((16711680 & Ot) >> 16), Vt.push(Ot >> 24 & 255)
              }
              et.setVerticesData(mt.m.MatricesIndicesKind, Vt, tt.matricesIndices._updatable || tt.matricesIndicesUpdatable)
            } if (tt.matricesIndicesExtra)
            if (tt.matricesIndicesExtraExpanded || tt.matricesIndicesExtra._isExpanded) delete tt.matricesIndices._isExpanded, delete tt.matricesIndicesExtraExpanded, et.setVerticesData(mt.m.MatricesIndicesExtraKind, tt.matricesIndicesExtra, tt.matricesIndicesExtra._updatable || tt.matricesIndicesExtraUpdatable);
            else {
              const Vt = [];
              for (let et = 0; et < tt.matricesIndicesExtra.length; et++) {
                const Ot = tt.matricesIndicesExtra[et];
                Vt.push(255 & Ot), Vt.push((65280 & Ot) >> 8), Vt.push((16711680 & Ot) >> 16), Vt.push(Ot >> 24 & 255)
              }
              et.setVerticesData(mt.m.MatricesIndicesExtraKind, Vt, tt.matricesIndicesExtra._updatable || tt.matricesIndicesExtraUpdatable)
            } tt.matricesWeights && (Nt._CleanMatricesWeights(tt, et), et.setVerticesData(mt.m.MatricesWeightsKind, tt.matricesWeights, tt.matricesWeights._updatable)), tt.matricesWeightsExtra && et.setVerticesData(mt.m.MatricesWeightsExtraKind, tt.matricesWeightsExtra, tt.matricesWeights._updatable), et.setIndices(tt.indices, null)
        }
        if (tt.vJ) {
          et.vJ = [];
          for (let Vt = 0; Vt < tt.vJ.length; Vt++) {
            const Ot = tt.vJ[Vt];
            dt.d.AddToMesh(Ot.materialIndex, Ot.verticesStart, Ot.verticesCount, Ot.indexStart, Ot.indexCount, et)
          }
        }
        et._shouldGenerateFlatShading && (et.convertToFlatShadedMesh(), et._shouldGenerateFlatShading = !1), et.computeWorldMatrix(!0), Vt.onMeshImportedObservable.notifyObservers(et)
      }
      static _CleanMatricesWeights(tt, et) {
        const Vt = .001;
        if (!jt.b.CleanBoneMatrixWeights) return;
        let Ot;
        if (!(tt.skeletonId > -1)) return;
        {
          const Vt = et.vI().getLastSkeletonById(tt.skeletonId);
          if (!Vt) return;
          Ot = Vt.bones.length
        }
        const qt = et.getVerticesData(mt.m.MatricesIndicesKind),
          Dt = et.getVerticesData(mt.m.MatricesIndicesExtraKind),
          dt = tt.matricesWeights,
          Ht = tt.matricesWeightsExtra,
          Xt = tt.numBoneInfluencer,
          Qt = dt.length;
        for (let mt = 0; mt < Qt; mt += 4) {
          let tt = 0,
            et = -1;
          for (let Ot = 0; Ot < 4; Ot++) {
            const qt = dt[mt + Ot];
            tt += qt, qt < Vt && et < 0 && (et = Ot)
          }
          if (Ht)
            for (let Ot = 0; Ot < 4; Ot++) {
              const qt = Ht[mt + Ot];
              tt += qt, qt < Vt && et < 0 && (et = Ot + 4)
            }
          if ((et < 0 || et > Xt - 1) && (et = Xt - 1), tt > Vt) {
            const et = 1 / tt;
            for (let tt = 0; tt < 4; tt++) dt[mt + tt] *= et;
            if (Ht)
              for (let tt = 0; tt < 4; tt++) Ht[mt + tt] *= et
          } else et >= 4 ? (Ht[mt + et - 4] = 1 - tt, Dt[mt + et - 4] = Ot) : (dt[mt + et] = 1 - tt, qt[mt + et] = Ot)
        }
        et.setVerticesData(mt.m.MatricesIndicesKind, qt), tt.matricesWeightsExtra && et.setVerticesData(mt.m.MatricesIndicesExtraKind, Dt)
      }
      static Parse(tt, et, Vt) {
        const qt = new Nt(tt.id, et, void 0, tt.updatable);
        return qt._loadedUniqueId = tt.uniqueId, lt.d && lt.d.AddTagsTo(qt, tt.tags), tt.delayLoadingFile ? (qt.delayLoadState = 4, qt.delayLoadingFile = Vt + tt.delayLoadingFile, qt._boundingInfo = new Ht.c(Ot.n.FromArray(tt.boundingBoxMinimum), Ot.n.FromArray(tt.boundingBoxMaximum)), qt._delayInfo = [], tt.hasUVs && qt._delayInfo.push(mt.m.UVKind), tt.hasUVs2 && qt._delayInfo.push(mt.m.UV2Kind), tt.hasUVs3 && qt._delayInfo.push(mt.m.UV3Kind), tt.hasUVs4 && qt._delayInfo.push(mt.m.UV4Kind), tt.hasUVs5 && qt._delayInfo.push(mt.m.UV5Kind), tt.hasUVs6 && qt._delayInfo.push(mt.m.UV6Kind), tt.hasColors && qt._delayInfo.push(mt.m.ColorKind), tt.hasMatricesIndices && qt._delayInfo.push(mt.m.MatricesIndicesKind), tt.hasMatricesWeights && qt._delayInfo.push(mt.m.MatricesWeightsKind), qt._delayLoadingFunction = Dt.d.ImportVertexData) : Dt.d.ImportVertexData(tt, qt), et.pushGeometry(qt, !0), qt
      }
    }
  },
  40656: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      d: () => ft
    });
    var Ot = Vt(37336),
      qt = Vt(38899),
      Dt = Vt(40633),
      mt = Vt(40601),
      dt = Vt(38897),
      jt = Vt(40638),
      Ht = Vt(40343),
      Xt = Vt(37390);
    class Qt extends Dt.e {
      constructor(tt, et) {
        super(tt, et.vI()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, et.Y_(this), this._sourceMesh = et, this._unIndexed = et._unIndexed, this.position.rK(et.position), this.rotation.rK(et.rotation), this.cj.rK(et.cj), et.rotationQuaternion && (this.rotationQuaternion = et.rotationQuaternion.clone()), this.animations = et.animations.slice();
        for (const Vt of et.getAnimationRanges()) null != Vt && this.createAnimationRange(Vt.name, Vt.from, Vt.to);
        if (this.infiniteDistance = et.infiniteDistance, this.setPivotMatrix(et.getPivotMatrix()), et.skeleton || et.morphTargetManager || !et.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const tt = et.fL();
          this.buildBoundingInfo(tt.minimum, tt.maximum)
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
      set receiveShadows(tt) {
        this._sourceMesh?.receiveShadows !== tt && qt.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(tt) {
        this._sourceMesh?.material !== tt && qt.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(tt) {
        this._sourceMesh?.visibility !== tt && qt.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(tt) {
        this._sourceMesh?.skeleton !== tt && qt.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(tt) {
        this._sourceMesh && tt !== this._sourceMesh.renderingGroupId && qt.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(tt) {
        this._sourceMesh && tt !== this._sourceMesh.meshBlendingTag && qt.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get Rqt() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(tt) {
        return this._sourceMesh.createInstance(tt)
      }
      isReady() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(tt, !0)
      }
      getVerticesData(tt, et, Vt) {
        return this._sourceMesh.getVerticesData(tt, et, Vt)
      }
      copyVerticesData(tt, et) {
        this._sourceMesh.copyVerticesData(tt, et)
      }
      getVertexBuffer(tt, et) {
        return this._sourceMesh.getVertexBuffer(tt, et)
      }
      setVerticesData(tt, et, Vt, Ot) {
        return this.Rqt && this.Rqt.setVerticesData(tt, et, Vt, Ot), this.Rqt
      }
      updateVerticesData(tt, et, Vt, Ot) {
        return this.Rqt && this.Rqt.updateVerticesData(tt, et, Vt, Ot), this.Rqt
      }
      setIndices(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.Rqt && this.Rqt.setIndices(tt, et), this.Rqt
      }
      isVerticesDataPresent(tt) {
        return this._sourceMesh.isVerticesDataPresent(tt)
      }
      zOt() {
        return this._sourceMesh.zOt()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let tt, et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.fL().isLocked) return this;
        tt = "object" === typeof et ? et : {
          applySkeleton: et,
          applyMorph: Vt
        };
        const Ot = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(tt, null, Ht.m.PositionKind), Ot), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(tt, et) {
        if (super._activate(tt, et), this._sourceMesh.vJ || qt.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, tt), et) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== jt.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Ot.c);
          const tt = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Ot.k.uf[7].rK(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.rK(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.rK(Ot.k.uf[7]), this._currentLOD._masterMesh = tt, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get pI() {
        return !0
      }
      getLOD(tt) {
        if (!tt) return this;
        const et = this.Rqt.getLODLevels();
        if (et && 0 !== et.length) {
          const et = this.fL();
          this._currentLOD = this.Rqt.getLOD(tt, et.jqt)
        } else this._currentLOD = this.Rqt;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(tt) {
        return this.Rqt._preActivateForIntermediateRendering(tt)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.vJ)
          for (let tt = 0; tt < this._sourceMesh.vJ.length; tt++) this._sourceMesh.vJ[tt].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.fL().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(tt);
        if (dt.d.DeepCopy(this, Ot, ["name", "vJ", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Rqt", "pI", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "cqt", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Cdt", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), et && (Ot.parent = et), !Vt)
          for (let qt = 0; qt < this.vI().meshes.length; qt++) {
            const tt = this.vI().meshes[qt];
            tt.parent === this && tt.clone(tt.name, Ot)
          }
        return Ot.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Ot), Ot
      }
      dispose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.p_(this), super.dispose(tt, et)
      }
      _serializeAsParent(tt) {
        super._serializeAsParent(tt), tt.parentId = this._sourceMesh.uniqueId, tt.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = this.clone("Clone of " + (this.name || this.id), tt || this.parent, !0, et && et.newSourcedMesh);
        Ot && Vt && Vt(this, Ot);
        for (const qt of this.getChildTransformNodes(!0)) qt.instantiateHierarchy(Ot, et, Vt);
        return Ot
      }
    }
    let lt = !1;

    function Et(tt, et, Vt, Ot, qt) {
      for (let Dt = 0; Dt < et.length; Dt++) {
        const mt = tt[et[Dt]] ?? 0,
          dt = qt + Vt[Dt];
        mt.toArray ? mt.toArray(Ot, dt) : mt.copyToArray ? mt.copyToArray(Ot, dt) : Ot[dt] = mt
      }
    }

    function ft() {
      lt || (lt = !0, mt.d._instancedMeshFactory = (tt, et) => {
        const Vt = new Qt(tt, et);
        if (et.qL) {
          Vt.qL = {};
          for (const tt in et.qL) Vt.qL[tt] = et.qL[tt]
        }
        return Vt
      }, mt.d.prototype.tL = function(tt, et) {
        if (!this.qL) {
          this.qL = {};
          for (const tt of this.instances) tt.qL = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Jf().getCaps().vertexArrayObject ? {} : void 0
        }), this.qL[tt] = null, this._userInstancedBuffersStorage.strides[tt] = et;
        const Vt = this._userInstancedBuffersStorage;
        Vt.interleavedKinds = [], Vt.interleavedOffsets = [], Vt.interleavedRowStride = 0;
        for (const Ot in Vt.strides) Vt.interleavedKinds.push(Ot), Vt.interleavedOffsets.push(Vt.interleavedRowStride), Vt.interleavedRowStride += Vt.strides[Ot];
        Vt.interleavedData = new Float32Array(32 * Vt.interleavedRowStride);
        for (const Ot in Vt.interleavedBuffers) Vt.interleavedBuffers[Ot].buffer.dispose();
        Vt.interleavedBuffers = {}, Vt.vertexBuffers[tt] = null;
        for (const Ot of this.instances) Ot.qL[tt] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, mt.d.prototype._processInstancedBuffers = function(tt, et) {
        const Vt = this._userInstancedBuffersStorage,
          Ot = Vt.interleavedRowStride;
        if (!Ot) return;
        const qt = tt ? tt.length : 0,
          Dt = (qt + 1) * Ot;
        let mt = Vt.interleavedData;
        if (mt.length < Dt) {
          let tt = mt.length;
          for (; tt < Dt;) tt *= 2;
          mt = Vt.interleavedData = new Float32Array(tt)
        }
        const dt = Vt.interleavedKinds,
          jt = Vt.interleavedOffsets;
        let Xt = 0;
        et && (Et(this.qL, dt, jt, mt, Xt), Xt += Ot);
        for (let Ht = 0; Ht < qt; Ht++) Et(tt[Ht].qL, dt, jt, mt, Xt), Xt += Ot;
        let Qt = "shared",
          lt = Vt.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Qt = this._instanceDataStorage.engine.currentRenderPassId, Vt.renderPasses || (Vt.renderPasses = {}), Vt.renderPasses[Qt] || (Vt.renderPasses[Qt] = {}), lt = Vt.renderPasses[Qt]);
        const ft = Vt.interleavedBuffers[Qt];
        let wt = !ft || ft.data !== mt;
        for (let Ht = 0; !wt && Ht < dt.length; Ht++) wt = !lt[dt[Ht]];
        if (!wt) return void ft.buffer.updateDirectly(mt, 0);
        ft?.buffer.dispose();
        const yt = new Ht.b(this.Jf(), mt, !0, Ot, !1, !0);
        for (let Ht = 0; Ht < dt.length; Ht++) {
          const tt = dt[Ht],
            et = yt.createVertexBuffer(tt, jt[Ht], Vt.strides[tt]);
          et.hashCode += et.byteOffset * 2 ** 24, lt[tt] = et
        }
        Vt.interleavedBuffers[Qt] = {
          buffer: yt,
          data: mt
        }, this._invalidateInstanceVertexArrayObject()
      }, mt.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const tt in this._userInstancedBuffersStorage.vertexArrayObjects) this.Jf().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[tt]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, mt.d.prototype._disposeInstanceSpecificData = function() {
        for (const et in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[et].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const et in this.qL) this._userInstancedBuffersStorage.vertexBuffers[et] && this._userInstancedBuffersStorage.vertexBuffers[et].dispose();
        const tt = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (tt) {
          for (const et in tt) tt[et].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.qL = {}
      }, (0, Xt.i)("BABYLON.InstancedMesh", Qt))
    }
  },
  40601: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => st,
      g: () => te,
      k: () => it
    });
    var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt = Vt(37367),
      Mt = Vt(40300),
      bt = Vt(40249),
      Jt = Vt(38897),
      Ct = Vt(40239),
      ut = Vt(40606),
      Kt = Vt(40409),
      ht = Vt(37336),
      vt = Vt(37513),
      Wt = Vt(40415),
      St = Vt(40343),
      ct = Vt(40608),
      Rt = Vt(40614),
      It = Vt(40633),
      Pt = Vt(40476),
      Zt = Vt(40474),
      Lt = Vt(40575),
      Ft = Vt(40642),
      kt = Vt(40621),
      Gt = Vt(40230),
      zt = Vt(38899),
      ot = Vt(37390),
      rt = Vt(40080),
      Ut = Vt(40366);
    class At {
      constructor(tt, et) {
        this.distanceOrScreenCoverage = tt, this.mesh = et
      }
    }
    class it {}
    class Yt {
      constructor() {
        this.batchCache = new pt(this), this.batchCacheReplacementModeInFrozenMode = new pt(this), this.instancesBufferSize = 2048
      }
    }
    class Bt {
      constructor() {
        this.renderPasses = {}
      }
    }
    class pt {
      constructor(tt) {
        this.parent = tt, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class xt {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Tt {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const gt = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class st extends It.e {
      static _GetDefaultSideOrientation(tt) {
        return tt || st.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(tt) {
        this._internalMeshDataInfo._useLODScreenCoverage = tt, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(tt) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== tt && (tt && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(St.m.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(St.m.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = tt, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Nt.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Nt.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Nt.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Nt.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Nt.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(tt) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(tt)
      }
      get cqt() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(tt) {
        this._internalMeshDataInfo._forcedInstanceCount = tt
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(tt) {
        this._internalMeshDataInfo._sideOrientation = tt, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === tt || !this._scene.useRightHandedSystem && 0 === tt
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(tt) {
        this.sideOrientation = tt, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(tt) {
        this._internalMeshDataInfo._overrideRenderingFillMode = tt
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(tt) {
        tt && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (tt.sideOrientation = null), this._setMaterial(tt)
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
      set isUnIndexed(tt) {
        this._unIndexed !== tt && (this._unIndexed = tt, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const tt = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return tt ? tt.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const tt = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return tt ? tt.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(tt) {
        this._instanceDataStorage.manualUpdate = tt
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(tt) {
        this._instanceDataStorage.previousManualUpdate = tt
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(tt) {
        this._instanceDataStorage.forceMatrixUpdates = tt
      }
      _copySource(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qt = this.vI();
        if (tt._geometry && tt._geometry.applyToMesh(this), Jt.d.DeepCopy(tt, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "cqt", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "pI", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Cdt", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = tt, qt.useClonedMeshMap && (tt._internalMeshDataInfo.meshMap || (tt._internalMeshDataInfo.meshMap = {}), tt._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = tt._originalBuilderSideOrientation, this._creationDataStorage = tt._creationDataStorage, tt._ranges) {
          const et = tt._ranges;
          for (const tt in et) Object.prototype.hasOwnProperty.call(et, tt) && et[tt] && this.createAnimationRange(tt, et[tt].from, et[tt].to)
        }
        if (tt.metadata && tt.metadata.clone ? this.metadata = tt.metadata.clone() : this.metadata = tt.metadata, this._internalMetadata = tt._internalMetadata, this.meshBlendingTag = tt.meshBlendingTag, Ct.d && Ct.d.HasTags(tt) && Ct.d.AddTagsTo(this, Ct.d.GetTags(tt, !0)), this.Av(tt.isEnabled(!1)), this.parent = tt.parent, this.setPivotMatrix(tt.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + tt.id, this.material = tt.material, !et) {
          const qt = tt.getDescendants(!0);
          for (let tt = 0; tt < qt.length; tt++) {
            const Dt = qt[tt];
            Dt._isMesh ? (gt.parent = this, gt.doNotCloneChildren = et, gt.clonePhysicsImpostor = Vt, gt.cloneThinInstances = Ot, Dt.clone(this.name + "." + Dt.name, gt)) : Dt.clone && Dt.clone(this.name + "." + Dt.name, this)
          }
        }
        if (tt.morphTargetManager && (this.morphTargetManager = tt.morphTargetManager), (0, rt.b)(qt.getPhysicsEngine)) {
          const et = qt.getPhysicsEngine();
          if (Vt && et)
            if (1 === et.getPluginVersion()) {
              const Vt = et.getImpostorForPhysicsObject(tt);
              Vt && (this.physicsImpostor = Vt.clone(this))
            } else 2 === et.getPluginVersion() && tt.physicsBody && tt.physicsBody.clone(this)
        }
        for (let Dt = 0; Dt < qt.PJ.length; Dt++) {
          const et = qt.PJ[Dt];
          et.emitter === tt && et.clone(et.name, this)
        }
        if (this.skeleton = tt.skeleton, Ot && (tt._thinInstanceDataStorage.matrixData ? (this.A4("matrix", new Float32Array(tt._thinInstanceDataStorage.matrixData), 16, !tt._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = tt._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = tt._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = tt._thinInstanceDataStorage.matrixBufferSize, tt._userThinInstanceBuffersStorage)) {
          const et = tt._userThinInstanceBuffersStorage;
          for (const tt in et.data) this.A4(tt, new Float32Array(et.data[tt]), et.strides[tt], !et.vertexBuffers?.[tt]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[tt] = et.sizes[tt]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(tt) {
        let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Dt = arguments.length > 4 ? arguments[4] : void 0,
          mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(tt, Vt), this._internalMeshDataInfo = new Tt, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new xt, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = st.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Vt = this.vI(), this._instanceDataStorage = new Bt, this._instanceDataStorage.engine = Vt.Jf(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Yt), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (tt, et, Vt) => {
          tt && Vt && (this._uniformBuffer ? this.transferToEffect(et) : Vt.bindOnlyWorldMatrix(et))
        };
        let dt = !1;
        if (Ot && void 0 === Ot._addToSceneRootNodes) {
          const tt = Ot;
          et = tt.parent ?? null, qt = tt.source ?? null, Dt = tt.doNotCloneChildren ?? !1, mt = tt.clonePhysicsImpostor ?? !0, dt = tt.cloneThinInstances ?? !1
        } else et = Ot;
        qt && this._copySource(qt, Dt, mt, dt), null !== et && (this.parent = et), this._instanceDataStorage.hardwareInstancedRendering = this.Jf().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = tt => {
          tt.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Nt.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), qt && qt.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = 0 === this.getTotalVertices() || et && et.doNotInstantiate && (!0 === et.doNotInstantiate || et.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), tt || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Ot.parent = tt || this.parent, Ot.position = this.position.clone(), Ot.cj = this.cj.clone(), this.rotationQuaternion ? Ot.rotationQuaternion = this.rotationQuaternion.clone() : Ot.rotation = this.rotation.clone(), Vt && Vt(this, Ot);
        for (const qt of this.getChildTransformNodes(!0)) "InstancedMesh" === qt.getClassName() && "Mesh" === Ot.getClassName() && qt.Rqt === this ? qt.instantiateHierarchy(Ot, {
          doNotInstantiate: et && et.doNotInstantiate || !1,
          newSourcedMesh: Ot
        }, Vt) : qt.instantiateHierarchy(Ot, et, Vt);
        return Ot
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(tt) {
        let et = super.toString(tt);
        if (et += ", n vertices: " + this.getTotalVertices(), et += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Vt = 0; Vt < this.animations.length; Vt++) et += ", animation[0]: " + this.animations[Vt].toString(tt);
        if (tt)
          if (this._geometry) {
            const tt = this.zOt(),
              Vt = this.getVerticesData(St.m.PositionKind);
            Vt && tt && (et += ", flat shading: " + (Vt.length / 3 === tt.length ? "YES" : "NO"))
          } else et += ", flat shading: UNKNOWN";
        return et
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const tt of this.instances) tt._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const tt = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((et, Vt) => et.distanceOrScreenCoverage < Vt.distanceOrScreenCoverage ? tt : et.distanceOrScreenCoverage > Vt.distanceOrScreenCoverage ? -tt : 0))
      }
      addLODLevel(tt, et) {
        if (et && et._masterMesh) return zt.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const Vt = new At(tt, et);
        return this._internalMeshDataInfo._LODLevels.push(Vt), et && (et._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(tt) {
        const et = this._internalMeshDataInfo;
        for (let Vt = 0; Vt < et._LODLevels.length; Vt++) {
          const Ot = et._LODLevels[Vt];
          if (Ot.distanceOrScreenCoverage === tt) return Ot.mesh
        }
        return null
      }
      removeLODLevel(tt) {
        const et = this._internalMeshDataInfo;
        for (let Vt = 0; Vt < et._LODLevels.length; Vt++) et._LODLevels[Vt].mesh === tt && (et._LODLevels.splice(Vt, 1), tt && (tt._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(tt, et) {
        const Vt = this._internalMeshDataInfo;
        if (!Vt._LODLevels || 0 === Vt._LODLevels.length) return this;
        const Ot = et || this.fL().jqt,
          qt = tt.mode === Kt.c.ORTHOGRAPHIC_CAMERA ? tt.minZ : Ot.centerWorld.subtract(tt.globalPosition).length();
        let Dt = qt,
          mt = 1;
        if (Vt._useLODScreenCoverage) {
          const et = tt.screenArea;
          let Vt = Ot.radiusWorld * tt.minZ / qt;
          Vt = Vt * Vt * Math.PI, Dt = Vt / et, mt = -1
        }
        if (mt * Vt._LODLevels[Vt._LODLevels.length - 1].distanceOrScreenCoverage > mt * Dt) return this.onLODLevelSelection && this.onLODLevelSelection(Dt, this, this), this;
        for (let dt = 0; dt < Vt._LODLevels.length; dt++) {
          const tt = Vt._LODLevels[dt];
          if (mt * tt.distanceOrScreenCoverage < mt * Dt) {
            if (tt.mesh) {
              if (4 === tt.mesh.delayLoadState) return tt.mesh._checkDelayState(), this;
              if (2 === tt.mesh.delayLoadState) return this;
              tt.mesh._preActivate(), tt.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Dt, this, tt.mesh), tt.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Dt, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(tt, et, Vt, Ot) {
        if (!this._geometry) return null;
        let qt = Ot ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[tt]?.getFloatData(this.instances.length + 1, Vt || et && 1 !== this._geometry.meshes.length);
        return qt || (qt = this._geometry.getVerticesData(tt, et, Vt)), qt
      }
      copyVerticesData(tt, et) {
        this._geometry && this._geometry.copyVerticesData(tt, et)
      }
      getVertexBuffer(tt, et) {
        return this._geometry ? (et ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[tt]) ?? this._geometry.getVertexBuffer(tt) : null
      }
      isVerticesDataPresent(tt, et) {
        return this._geometry ? !et && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[tt] || this._geometry.isVerticesDataPresent(tt) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(tt)
      }
      isVertexBufferUpdatable(tt, et) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(tt);
        if (!et) {
          const et = this._userInstancedBuffersStorage?.vertexBuffers[tt];
          if (et) return et.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(tt)
      }
      getVerticesDataKinds(tt) {
        if (!this._geometry) {
          const tt = [];
          if (this._delayInfo)
            for (const et of this._delayInfo) tt.push(et);
          return tt
        }
        const et = this._geometry.getVerticesDataKinds();
        if (!tt && this._userInstancedBuffersStorage)
          for (const Vt in this._userInstancedBuffersStorage.vertexBuffers) - 1 === et.indexOf(Vt) && et.push(Vt);
        return et
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      zOt(tt, et) {
        return this._geometry ? this._geometry.zOt(tt, et) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(tt)) return !1;
        if (!this.vJ || 0 === this.vJ.length) return !0;
        if (!tt) return !0;
        const Vt = this.Jf(),
          Ot = this.vI(),
          qt = et || Vt.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Dt = this.material || Ot.defaultMaterial;
        if (Dt)
          if (Dt._storeEffectOnSubMeshes)
            for (const dt of this.vJ) {
              const tt = dt.vf();
              if (tt)
                if (tt._storeEffectOnSubMeshes) {
                  if (!tt.isReadyForSubMesh(this, dt, qt)) return !1
                } else if (!tt.isReady(this, qt)) return !1
            } else if (!Dt.isReady(this, qt)) return !1;
        const mt = Vt.currentRenderPassId;
        for (const dt of this.lightSources) {
          const tt = dt.getShadowGenerators();
          if (!tt) continue;
          const et = tt.values();
          for (let Ot = et.next(); !0 !== Ot.done; Ot = et.next()) {
            const tt = Ot.value;
            if (tt && (!tt.getShadowMap()?.renderList || tt.getShadowMap()?.renderList && -1 !== tt.getShadowMap()?.renderList?.indexOf(this))) {
              const et = tt.getShadowMap().renderPassIds ?? [Vt.currentRenderPassId];
              for (let Ot = 0; Ot < et.length; ++Ot) {
                Vt.currentRenderPassId = et[Ot];
                for (const et of this.vJ)
                  if (!tt.isReady(et, qt, et.vf()?.needAlphaBlendingForMesh(this) ?? !1)) return Vt.currentRenderPassId = mt, !1
              }
              Vt.currentRenderPassId = mt
            }
          }
        }
        for (const dt of this._internalMeshDataInfo._LODLevels)
          if (dt.mesh && !dt.mesh.isReady(qt)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Wf() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(tt) {
        this._instanceDataStorage.overridenInstanceCount = tt
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const tt = this._instanceDataStorage.engine.currentRenderPassId;
        let et = this._instanceDataStorage.renderPasses[tt];
        return et || (et = new Yt, this._instanceDataStorage.renderPasses[tt] = et), et
      }
      _preActivate() {
        const tt = this._internalMeshDataInfo,
          et = this.vI().getRenderId();
        return tt._preActivateId === et || (tt._preActivateId = et, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(tt) {
        const et = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return et.visibleInstances && (et.visibleInstances.intermediateDefaultRenderId = tt), this
      }
      _registerInstanceForRenderId(tt, et) {
        const Vt = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Vt.visibleInstances || (Vt.visibleInstances = {
          defaultRenderId: et,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Vt.visibleInstances[et] || (void 0 === Vt.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Vt.visibleInstances[Vt.previousRenderId], Vt.previousRenderId = et, Vt.visibleInstances[et] = new Array), Vt.visibleInstances[et].push(tt), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.hf || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let tt, et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.fL().isLocked) return this;
        tt = "object" === typeof et ? et : {
          applySkeleton: et,
          applyMorph: Vt
        };
        const Ot = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(tt, null, St.m.PositionKind), Ot), this
      }
      _createGlobalSubMesh(tt) {
        const et = this.getTotalVertices();
        if (!et || !this.zOt()) return null;
        if (this.vJ && this.vJ.length > 0) {
          const Vt = this.zOt();
          if (!Vt) return null;
          const Ot = Vt.length;
          let qt = !1;
          if (tt) qt = !0;
          else
            for (const tt of this.vJ) {
              if (tt.indexStart + tt.indexCount > Ot) {
                qt = !0;
                break
              }
              if (tt.verticesStart + tt.verticesCount > et) {
                qt = !0;
                break
              }
            }
          if (!qt) return this.vJ[0]
        }
        return this.releaseSubMeshes(), new Pt.d(0, 0, et, 0, this.getTotalIndices() || (this.isUnIndexed ? et : 0), this)
      }
      subdivide(tt) {
        if (tt < 1) return;
        const et = this.getTotalIndices();
        let Vt = et / tt | 0,
          Ot = 0;
        for (; Vt % 3 !== 0;) Vt++;
        this.releaseSubMeshes();
        for (let qt = 0; qt < tt && !(Ot >= et); qt++) Pt.d.CreateFromIndices(0, Ot, Ot + Vt >= et ? et - Ot : Vt, this, void 0, !1), Ot += Vt;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(tt, et, Vt, Ot);
        else {
          const Ot = new ct.d;
          Ot.set(et, tt);
          const qt = this.vI();
          new Rt.d(Rt.d.RandomId(), qt, Ot, Vt, this)
        }
        return this
      }
      removeVerticesData(tt) {
        this._geometry && this._geometry.removeVerticesData(tt)
      }
      markVerticesDataAsUpdatable(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Vt = this.getVertexBuffer(tt);
        Vt && Vt.isUpdatable() !== et && this.setVerticesData(tt, this.getVerticesData(tt), et)
      }
      setVerticesBuffer(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Rt.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(tt, Vt, et), this
      }
      updateVerticesData(tt, et, Vt, Ot) {
        return this._geometry ? (Ot ? (this.makeGeometryUnique(), this.updateVerticesData(tt, et, Vt, !1)) : this._geometry.updateVerticesData(tt, et, Vt), this) : this
      }
      updateMeshPositions(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Vt = this.getVerticesData(St.m.PositionKind);
        if (!Vt) return this;
        if (tt(Vt), this.updateVerticesData(St.m.PositionKind, Vt, !1, !1), et) {
          const tt = this.zOt(),
            et = this.getVerticesData(St.m.NormalKind);
          if (!et) return this;
          ct.d.ComputeNormals(Vt, tt, et), this.updateVerticesData(St.m.NormalKind, et, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const tt = this._geometry,
          et = this._geometry.copy(Rt.d.RandomId());
        return tt.releaseForMesh(this, !0), et.applyToMesh(this), this
      }
      setIndexBuffer(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qt = this._geometry;
        qt || (qt = new Rt.d(Rt.d.RandomId(), this.vI(), void 0, void 0, this)), qt.setIndexBuffer(tt, et, Vt, Ot)
      }
      setIndices(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(tt, et, Vt, Ot);
        else {
          const Ot = new ct.d;
          Ot.indices = tt;
          const qt = this.vI();
          new Rt.d(Rt.d.RandomId(), qt, Ot, Vt, this, et)
        }
        return this
      }
      updateIndices(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(tt, et, Vt), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(tt, et, Vt) {
        let Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const qt = this.vI().Jf();
        let Dt;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Vt) === Zt.c.WireFrameFillMode) Dt = tt._getLinesIndexBuffer(this.zOt(), qt);
          else Dt = null;
        else switch (this._getRenderingFillMode(Vt)) {
          case Zt.c.PointFillMode:
            Dt = null;
            break;
          case Zt.c.WireFrameFillMode:
            Dt = tt._getLinesIndexBuffer(this.zOt(), qt);
            break;
          default:
          case Zt.c.TriangleFillMode:
            Dt = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(et, Dt, Ot)
      }
      _bindDirect(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(tt), Vt && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const tt = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const et in tt) this._userInstancedBuffersStorage.vertexBuffers[et] = tt[et]
          }
          this._geometry._bind(tt, et, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(tt, et);
        return this
      }
      _draw(tt, et, Vt) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Ot = this.vI().Jf(),
          qt = Ot._currentMaterialContext,
          Dt = qt && qt.useVertexPulling;
        return this._unIndexed && et !== Zt.c.WireFrameFillMode || et == Zt.c.PointFillMode ? Ot.drawArraysType(et, tt.verticesStart, tt.verticesCount, this.forcedInstanceCount || Vt) : et == Zt.c.WireFrameFillMode ? Ot.drawElementsType(et, 0, tt._linesIndexCount, this.forcedInstanceCount || Vt) : Dt ? Ot.drawArraysType(et, tt.indexStart, tt.indexCount, this.forcedInstanceCount || Vt) : Ot.drawElementsType(et, tt.indexStart, tt.indexCount, this.forcedInstanceCount || Vt), this
      }
      registerBeforeRender(tt) {
        return this.onBeforeRenderObservable.add(tt), this
      }
      unregisterBeforeRender(tt) {
        return this.onBeforeRenderObservable.removeCallback(tt), this
      }
      registerAfterRender(tt) {
        return this.onAfterRenderObservable.add(tt), this
      }
      unregisterAfterRender(tt) {
        return this.onAfterRenderObservable.removeCallback(tt), this
      }
      _getInstancesRenderList(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (et) return Vt.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[tt] = !1, Vt.batchCacheReplacementModeInFrozenMode.renderSelf[tt] = !0, Vt.batchCacheReplacementModeInFrozenMode;
          if (Vt.previousBatch) return Vt.previousBatch
        }
        const Ot = this.vI(),
          qt = Ot._isInIntermediateRendering(),
          Dt = qt ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          mt = Vt.batchCache;
        if (mt.mustReturn = !1, mt.renderSelf[tt] = et || !Dt && this.isEnabled() && this.isVisible, mt.visibleInstances[tt] = null, Vt.visibleInstances && !et) {
          const et = Vt.visibleInstances,
            Dt = Ot.getRenderId(),
            dt = qt ? et.intermediateDefaultRenderId : et.defaultRenderId;
          mt.visibleInstances[tt] = et[Dt], !mt.visibleInstances[tt] && dt && (mt.visibleInstances[tt] = et[dt])
        }
        return mt.hardwareInstancedRendering[tt] = !et && this._instanceDataStorage.hardwareInstancedRendering && null !== mt.visibleInstances[tt] && void 0 !== mt.visibleInstances[tt], Vt.previousBatch = mt, mt
      }
      _updateInstancedBuffers(tt, et, Vt, Ot, qt, Dt) {
        const mt = et.visibleInstances[tt._id],
          dt = mt ? mt.length : 0,
          jt = et.parent,
          Ht = this._instanceDataStorage;
        let Xt = jt.instancesBuffer,
          Qt = jt.instancesPreviousBuffer,
          lt = 0,
          Et = 0;
        const ft = et.renderSelf[tt._id],
          wt = this._scene.floatingOriginOffset,
          yt = !Xt || Vt !== jt.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !jt.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Ht.isFrozen && !yt) Et = (ft ? 1 : 0) + dt;
        else {
          const et = this.getWorldMatrix();
          if (ft) {
            this._scene.needsPreviousWorldMatrices && (Ht.masterMeshPreviousWorldMatrix ? (Ht.masterMeshPreviousWorldMatrix.copyToArray(jt.instancesPreviousData, lt), Ht.masterMeshPreviousWorldMatrix.rK(et)) : (Ht.masterMeshPreviousWorldMatrix = et.clone(), Ht.masterMeshPreviousWorldMatrix.copyToArray(jt.instancesPreviousData, lt))), et.copyToArray(jt.instancesData, lt);
            const tt = et.GOt();
            jt.instancesData[lt + 12] = tt[12] - wt.x, jt.instancesData[lt + 13] = tt[13] - wt.y, jt.instancesData[lt + 14] = tt[14] - wt.z, lt += 16, Et++
          }
          if (mt) {
            if (st.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && tt.vf()?.needAlphaBlendingForMesh(tt.getRenderingMesh())) {
              const tt = this._scene.activeCamera.globalPosition;
              for (let et = 0; et < mt.length; et++) {
                const Vt = mt[et];
                Vt._distanceToCamera = ht.n.Distance(Vt.fL().jqt.centerWorld, tt)
              }
              mt.sort(((tt, et) => tt._distanceToCamera > et._distanceToCamera ? -1 : tt._distanceToCamera < et._distanceToCamera ? 1 : 0))
            }
            for (let tt = 0; tt < mt.length; tt++) {
              const et = mt[tt],
                Vt = et.getWorldMatrix();
              Vt.copyToArray(jt.instancesData, lt), this._scene.needsPreviousWorldMatrices && (et._previousWorldMatrix ? (et._previousWorldMatrix.copyToArray(jt.instancesPreviousData, lt), et._previousWorldMatrix.rK(Vt)) : (et._previousWorldMatrix = Vt.clone(), et._previousWorldMatrix.copyToArray(jt.instancesPreviousData, lt)));
              const Ot = Vt.GOt();
              jt.instancesData[lt + 12] = Ot[12] - wt.x, jt.instancesData[lt + 13] = Ot[13] - wt.y, jt.instancesData[lt + 14] = Ot[14] - wt.z, lt += 16, Et++
            }
          }
        }
        if (yt) {
          let tt;
          if (Xt && Xt.dispose(), Qt && Qt.dispose(), Xt = new St.b(Ot, jt.instancesData, !0, 16, !1, !0), jt.instancesBuffer = Xt, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Jf().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) tt = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const et = this._instanceDataStorage.engine.currentRenderPassId;
            tt = this._userInstancedBuffersStorage.renderPasses[et], tt || (this._userInstancedBuffersStorage.renderPasses[et] = tt = {})
          }
          tt.world0 = Xt.createVertexBuffer("world0", 0, 4), tt.world1 = Xt.createVertexBuffer("world1", 4, 4), tt.world2 = Xt.createVertexBuffer("world2", 8, 4), tt.world3 = Xt.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Qt = new St.b(Ot, jt.instancesPreviousData, !0, 16, !1, !0), jt.instancesPreviousBuffer = Qt, tt.previousWorld0 = Qt.createVertexBuffer("previousWorld0", 0, 4), tt.previousWorld1 = Qt.createVertexBuffer("previousWorld1", 4, 4), tt.previousWorld2 = Qt.createVertexBuffer("previousWorld2", 8, 4), tt.previousWorld3 = Qt.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Xt.updateDirectly(jt.instancesData, 0, Et), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Qt.updateDirectly(jt.instancesPreviousData, 0, Et));
        this._processInstancedBuffers(mt, ft), Dt && void 0 !== qt && (this.vI()._activeIndices.addCount(tt.indexCount * Et, !1), Ot._currentDrawContext && (Ot._currentDrawContext.useInstancing = !0), this._bind(tt, Dt, qt), this._draw(tt, qt, Et)), !this._scene.needsPreviousWorldMatrices || yt || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Qt.updateDirectly(jt.instancesData, 0, Et)
      }
      _renderWithInstances(tt, et, Vt, Ot, qt) {
        const Dt = Vt.visibleInstances[tt._id],
          mt = Dt ? Dt.length : 0,
          dt = Vt.parent,
          jt = dt.instancesBufferSize,
          Ht = 16 * (mt + 1) * 4;
        for (; dt.instancesBufferSize < Ht;) dt.instancesBufferSize *= 2;
        return dt.instancesData && jt == dt.instancesBufferSize || (dt.instancesData = new Float32Array(dt.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !dt.instancesPreviousData || jt != dt.instancesBufferSize) && (dt.instancesPreviousData = new Float32Array(dt.instancesBufferSize / 4)), this._updateInstancedBuffers(tt, Vt, jt, qt, et, Ot), qt.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(tt, et, Vt, Ot) {
        const qt = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.vI()._activeIndices.addCount(tt.indexCount * qt, !1), Ot._currentDrawContext && (Ot._currentDrawContext.useInstancing = !0), this._bind(tt, Vt, et), this._draw(tt, et, qt), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, qt) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Ot.unbindInstanceAttributes()
      }
      _processInstancedBuffers(tt, et) {}
      _processRendering(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = this.vI(),
          Ht = jt.Jf();
        if (Ot = this._getRenderingFillMode(Ot), Dt && et.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(et, Ot, Vt, Ht), this;
        if (Dt) this._renderWithInstances(et, Ot, qt, Vt, Ht);
        else {
          Ht._currentDrawContext && (Ht._currentDrawContext.useInstancing = !1);
          let Vt = 0;
          qt.renderSelf[et._id] && (mt && mt(!1, tt.getWorldMatrix(), dt), Vt++, this._draw(et, Ot, this._instanceDataStorage.overridenInstanceCount));
          const Dt = qt.visibleInstances[et._id];
          if (Dt) {
            const tt = Dt.length;
            Vt += tt;
            for (let Vt = 0; Vt < tt; Vt++) {
              const tt = Dt[Vt].getWorldMatrix();
              mt && mt(!0, tt, dt), this._draw(et, Ot)
            }
          }
          jt._activeIndices.addCount(et.indexCount * Vt, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        tt?.instancesBuffer && (et && tt.instancesBuffer.dispose(), tt.instancesBuffer = null), tt?.instancesPreviousBuffer && (et && tt.instancesPreviousBuffer.dispose(), tt.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const et in this._instanceDataStorage.renderPasses) {
          const Vt = this._instanceDataStorage.renderPasses[et];
          this._disposeInstanceDataStorageRenderPass(Vt, tt)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, tt), this._userInstancedBuffersStorage) {
          for (const et in this._userInstancedBuffersStorage.vertexBuffers) {
            const Vt = this._userInstancedBuffersStorage.vertexBuffers[et];
            Vt && (tt && Vt.dispose(), this._userInstancedBuffersStorage.vertexBuffers[et] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(tt)
      }
      _releaseRenderPassId(tt) {
        const et = this._instanceDataStorage.renderPasses[tt];
        if (et && (this._disposeInstanceDataStorageRenderPass(et, !0), delete this._instanceDataStorage.renderPasses[tt]), this._userInstancedBuffersStorage?.renderPasses) {
          const et = this._userInstancedBuffersStorage.renderPasses[tt];
          if (et)
            for (const tt in et) et[tt]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[tt]
        }
        const Vt = this._userInstancedBuffersStorage?.interleavedBuffers;
        Vt?.[tt] && (Vt[tt].buffer.dispose(), delete Vt[tt])
      }
      _freeze() {
        if (this.vJ) {
          for (let tt = 0; tt < this.vJ.length; tt++) this._getInstancesRenderList(tt);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const tt in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[tt].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Dt = this._scene.Jf(),
          mt = Dt.currentRenderPassId;
        if (void 0 !== tt && (Dt.currentRenderPassId = tt), Ot)(!qt || qt && Ot.isInFrustum(this._scene._frustumPlanes)) && this.render(Ot, !!et, Vt);
        else
          for (let dt = 0; dt < this.vJ.length; dt++) {
            const tt = this.vJ[dt];
            (!qt || qt && tt.isInFrustum(this._scene._frustumPlanes)) && this.render(tt, !!et, Vt)
          }
        return void 0 !== tt && (Dt.currentRenderPassId = mt), this
      }
      directRender() {
        if (!this.vJ) return this;
        for (const tt of this.vJ) this.render(tt, !1);
        return this
      }
      render(tt, et, Vt) {
        const Ot = this.vI(),
          qt = Ot.Jf();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Dt = Ot.activeCameras?.length ?? 0,
          mt = Dt > 1 && Ot.activeCamera === Ot.activeCameras[0] || Dt <= 1,
          dt = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== qt.currentRenderPassId;
        if (mt && this._checkOcclusionQuery(dt) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const jt = this._getInstancesRenderList(tt._id, !!Vt);
        if (jt.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Ht = 0,
          Xt = null;
        this.ignoreCameraMaxZ && Ot.activeCamera && !Ot._isInIntermediateRendering() && (Ht = Ot.activeCamera.maxZ, Xt = Ot.activeCamera, Ot.activeCamera.maxZ = 0, Ot.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Qt = tt.getRenderingMesh(),
          lt = jt.hardwareInstancedRendering[tt._id] || Qt.hasThinInstances || !!this._userInstancedBuffersStorage && !tt.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Et = this._instanceDataStorage,
          ft = tt.vf();
        if (!ft) return Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), this;
        if (Et.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === ft) {
          if (ft._storeEffectOnSubMeshes && !tt._drawWrapper?._wasPreviouslyReady || !ft._storeEffectOnSubMeshes && !ft._getDrawWrapper()._wasPreviouslyReady) return Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), this
        } else {
          if (ft._storeEffectOnSubMeshes) {
            if (!ft.isReadyForSubMesh(this, tt, lt)) return Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), this
          } else if (!ft.isReady(this, lt)) return Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = ft
        }
        if (et) {
          const tt = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === tt.alphaModes.length) qt.setAlphaMode(tt.alphaMode);
          else
            for (let et = 0; et < tt.alphaModes.length; et++) {
              const Vt = tt.alphaModes[et];
              qt.setAlphaMode(void 0 !== Vt ? Vt : 2, !1, et)
            }
        }
        let wt;
        wt = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? tt._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const yt = wt?.effect ?? null;
        for (let Kt = 0, ht = Ot._beforeRenderingMeshStage; Kt < ht.length; Kt++) {
          ht[Kt].action(this, tt, jt, yt)
        }
        if (!wt || !yt) return Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), this;
        const Nt = Vt || this;
        let Mt;
        if (!Et.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const tt = Nt._getWorldMatrixDeterminant();
          Mt = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), tt < 0 && (Mt = Mt === Zt.c.ClockWiseSideOrientation ? Zt.c.CounterClockWiseSideOrientation : Zt.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Mt
        }
        const bt = this._internalMeshDataInfo._effectiveMaterial._preBind(wt, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && qt.setDepthWrite(!0);
        const Jt = this._internalMeshDataInfo._effectiveMaterial,
          Ct = Jt.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), lt || this._bind(tt, yt, Ct, !1);
        const ut = Nt.getWorldMatrix();
        Jt._storeEffectOnSubMeshes ? Jt.bindForSubMesh(ut, this, tt) : Jt.bind(ut, this);
        try {
          Lt.c._BindAttachmentsForEffect(qt, yt) && (!Jt.backFaceCulling && Jt.separateCullingPass && (qt.setState(!0, Jt.zOffset, !1, !bt, Jt.cullBackFaces, Jt.stencil, Jt.zOffsetUnits), this._processRendering(this, tt, yt, Ct, jt, lt, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), qt.setState(!0, Jt.zOffset, !1, bt, Jt.cullBackFaces, Jt.stencil, Jt.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(tt)), this._processRendering(this, tt, yt, Ct, jt, lt, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Lt.c._RestoreAttachments(qt)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Kt = 0, ht = Ot._afterRenderingMeshStage; Kt < ht.length; Kt++) {
          ht[Kt].action(this, tt, jt, yt)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Xt && (Xt.maxZ = Ht, Ot.updateTransformMatrix(!0)), 2 !== Ot.performancePriority || Et.isFrozen || this._freeze(), this
      }
      _renderRunFollower(tt, et) {
        const Vt = this._scene,
          Ot = Vt._engine;
        if (Ot.isWebGPU || tt._mesh !== this || 0 !== this.instances.length || this.render !== st.prototype.render) return !1;
        const qt = tt.vf();
        if (!qt || qt !== Vt._cachedMaterial || void 0 === qt._canBindRunFollower) return !1;
        const Dt = tt._drawWrapper,
          mt = Dt?.effect;
        if (!mt || mt !== Vt._cachedEffect || this.visibility !== Vt._cachedVisibility || Dt._forceRebindOnNextCall) return !1;
        const dt = this.hasThinInstances;
        if (!dt && this._userInstancedBuffersStorage) return !1;
        if (!Dt._wasPreviouslyReady || Dt._wasPreviouslyUsingInstances !== dt) return !1;
        const jt = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Vt._isInIntermediateRendering() || 0 !== Vt._beforeRenderingMeshStage.length || 0 !== Vt._afterRenderingMeshStage.length || jt._onBeforeRenderObservable?.hasObservers() || jt._onBeforeBindObservable?.hasObservers() || jt._onAfterRenderObservable?.hasObservers()) return !1;
        const Ht = this.occlusionType;
        if (void 0 !== Ht && Ht !== It.e.OCCLUSION_TYPE_NONE || !qt._canBindRunFollower(Vt, Ot, this, tt, mt)) return !1;
        const Xt = this._internalAbstractMeshDataInfo,
          Qt = Xt._isActiveIntermediate;
        Qt ? Xt._isActiveIntermediate = !1 : Xt._isActive = !1;
        const lt = Vt.activeCameras?.length ?? 0;
        (lt > 1 && Vt.activeCamera === Vt.activeCameras[0] || lt <= 1) && this._checkOcclusionQuery(!1);
        const Et = this._getInstancesRenderList(tt._id);
        if (Et.mustReturn) return !0;
        if (!dt && !Et.renderSelf[tt._id]) return Qt ? Xt._isActiveIntermediate = !0 : Xt._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (jt._effectiveMaterial = qt, et)
          if (1 === qt.alphaModes.length) Ot.setAlphaMode(qt.alphaMode);
          else
            for (let wt = 0; wt < qt.alphaModes.length; wt++) {
              const tt = qt.alphaModes[wt];
              Ot.setAlphaMode(void 0 !== tt ? tt : 2, !1, wt)
            }
        if (qt.backFaceCulling || null !== qt.sideOrientation || qt._twoSidedLighting) {
          const tt = this._getWorldMatrixDeterminant();
          let et = qt._getEffectiveOrientation(this);
          tt < 0 && (et = et === Zt.c.ClockWiseSideOrientation ? Zt.c.CounterClockWiseSideOrientation : Zt.c.ClockWiseSideOrientation), jt._effectiveSideOrientation = et
        }
        qt._preBind(Dt, jt._effectiveSideOrientation), qt.forceDepthWrite && Ot.setDepthWrite(!0);
        const ft = qt.fillMode;
        return dt || this._bind(tt, mt, ft, !1), qt._bindRunFollower(this.getWorldMatrix(), this, tt, mt), this._processRendering(this, tt, mt, ft, Et, dt, this._onBeforeDraw, qt), qt.unbind(), 2 === Vt.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(St.m.MatricesWeightsKind) && (this.isVerticesDataPresent(St.m.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const tt = this.getVerticesData(St.m.MatricesWeightsKind),
          et = tt.length;
        for (let Vt = 0; Vt < et; Vt += 4) {
          const et = tt[Vt] + tt[Vt + 1] + tt[Vt + 2] + tt[Vt + 3];
          if (0 === et) tt[Vt] = 1;
          else {
            const Ot = 1 / et;
            tt[Vt] *= Ot, tt[Vt + 1] *= Ot, tt[Vt + 2] *= Ot, tt[Vt + 3] *= Ot
          }
        }
        this.setVerticesData(St.m.MatricesWeightsKind, tt)
      }
      _normalizeSkinWeightsAndExtra() {
        const tt = this.getVerticesData(St.m.MatricesWeightsExtraKind),
          et = this.getVerticesData(St.m.MatricesWeightsKind),
          Vt = et.length;
        for (let Ot = 0; Ot < Vt; Ot += 4) {
          let Vt = et[Ot] + et[Ot + 1] + et[Ot + 2] + et[Ot + 3];
          if (Vt += tt[Ot] + tt[Ot + 1] + tt[Ot + 2] + tt[Ot + 3], 0 === Vt) et[Ot] = 1;
          else {
            const qt = 1 / Vt;
            et[Ot] *= qt, et[Ot + 1] *= qt, et[Ot + 2] *= qt, et[Ot + 3] *= qt, tt[Ot] *= qt, tt[Ot + 1] *= qt, tt[Ot + 2] *= qt, tt[Ot + 3] *= qt
          }
        }
        this.setVerticesData(St.m.MatricesWeightsKind, et), this.setVerticesData(St.m.MatricesWeightsKind, tt)
      }
      validateSkinning() {
        const tt = this.getVerticesData(St.m.MatricesWeightsExtraKind),
          et = this.getVerticesData(St.m.MatricesWeightsKind);
        if (null === et || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          iE: "not skinned"
        };
        const Vt = et.length;
        let Ot = 0,
          qt = 0,
          Dt = 0,
          mt = 0;
        const dt = null === tt ? 4 : 8,
          jt = [];
        for (let Et = 0; Et <= dt; Et++) jt[Et] = 0;
        for (let Et = 0; Et < Vt; Et += 4) {
          let Vt = et[Et],
            Ht = Vt,
            Xt = 0 === Ht ? 0 : 1;
          for (let qt = 1; qt < dt; qt++) {
            const Dt = qt < 4 ? et[Et + qt] : tt[Et + qt - 4];
            Dt > Vt && Ot++, 0 !== Dt && Xt++, Ht += Dt, Vt = Dt
          }
          if (jt[Xt]++, Xt > Dt && (Dt = Xt), 0 === Ht) qt++;
          else {
            const Vt = 1 / Ht;
            let Ot = 0;
            for (let qt = 0; qt < dt; qt++) Ot += qt < 4 ? Math.abs(et[Et + qt] - et[Et + qt] * Vt) : Math.abs(tt[Et + qt - 4] - tt[Et + qt - 4] * Vt);
            Ot > .001 && mt++
          }
        }
        const Ht = this.skeleton.bones.length,
          Xt = this.getVerticesData(St.m.MatricesIndicesKind),
          Qt = this.getVerticesData(St.m.MatricesIndicesExtraKind);
        let lt = 0;
        for (let Et = 0; Et < Vt; Et += 4)
          for (let tt = 0; tt < dt; tt++) {
            const et = tt < 4 ? Xt[Et + tt] : Qt[Et + tt - 4];
            (et >= Ht || et < 0) && lt++
          }
        return {
          skinned: !0,
          valid: 0 === qt && 0 === mt && 0 === lt,
          iE: "Number of Weights = " + Vt / 4 + "\nMaximum influences = " + Dt + "\nMissing Weights = " + qt + "\nNot Sorted = " + Ot + "\nNot Normalized = " + mt + "\nWeightCounts = [" + jt + "]\nNumber of bones = " + Ht + "\nBad Bone Indices = " + lt
        }
      }
      _checkDelayState() {
        const tt = this.vI();
        return this._geometry ? this._geometry.load(tt) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(tt)), this
      }
      _queueLoad(tt) {
        tt.addPendingData(this);
        const et = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Vt = await tt._loadDelayedFileAsync(this.delayLoadingFile, et, !0);
            Vt instanceof ArrayBuffer ? this._delayLoadingFunction(Vt, this) : this._delayLoadingFunction(JSON.parse(Vt), this);
            for (const tt of this.instances) tt.refreshBoundingInfo(), tt._syncSubMeshes();
            this.delayLoadState = 1, tt.removePendingData(this)
          } catch (Vt) {
            tt.removePendingData(this), tt.bC || zt.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Vt}`)
          }
        })(), this
      }
      isInFrustum(tt) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(tt) && (this._checkDelayState(), !0))
      }
      setMaterialById(tt) {
        const et = this.vI().materials;
        let Vt;
        for (Vt = et.length - 1; Vt > -1; Vt--)
          if (et[Vt].id === tt) return this.material = et[Vt], this;
        const Ot = this.vI().multiMaterials;
        for (Vt = Ot.length - 1; Vt > -1; Vt--)
          if (Ot[Vt].id === tt) return this.material = Ot[Vt], this;
        return this
      }
      getAnimatables() {
        const tt = [];
        return this.material && tt.push(this.material), this.skeleton && tt.push(this.skeleton), tt
      }
      bakeTransformIntoVertices(tt) {
        if (!this.isVerticesDataPresent(St.m.PositionKind)) return this;
        const et = this.vJ.splice(0);
        this._resetPointsArrayCache();
        let Vt = this.getVerticesData(St.m.PositionKind);
        const Ot = ht.n.Zero();
        let qt;
        for (qt = 0; qt < Vt.length; qt += 3) ht.n.TransformCoordinatesFromFloatsToRef(Vt[qt], Vt[qt + 1], Vt[qt + 2], tt, Ot).toArray(Vt, qt);
        if (this.setVerticesData(St.m.PositionKind, Vt, this.getVertexBuffer(St.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(St.m.NormalKind)) {
          for (Vt = this.getVerticesData(St.m.NormalKind), qt = 0; qt < Vt.length; qt += 3) ht.n.TransformNormalFromFloatsToRef(Vt[qt], Vt[qt + 1], Vt[qt + 2], tt, Ot).normalize().toArray(Vt, qt);
          this.setVerticesData(St.m.NormalKind, Vt, this.getVertexBuffer(St.m.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(St.m.TangentKind)) {
          for (Vt = this.getVerticesData(St.m.TangentKind), qt = 0; qt < Vt.length; qt += 4) ht.n.TransformNormalFromFloatsToRef(Vt[qt], Vt[qt + 1], Vt[qt + 2], tt, Ot).normalize().toArray(Vt, qt);
          this.setVerticesData(St.m.TangentKind, Vt, this.getVertexBuffer(St.m.TangentKind).isUpdatable())
        }
        return tt.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.vJ = et, this
      }
      bakeCurrentTransformIntoVertices() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(tt), this
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (et && void 0 === et._addToSceneRootNodes) {
          const Vt = et;
          return gt.source = this, gt.doNotCloneChildren = Vt.doNotCloneChildren, gt.clonePhysicsImpostor = Vt.clonePhysicsImpostor, gt.cloneThinInstances = Vt.cloneThinInstances, new st(tt, this.vI(), gt)
        }
        return new st(tt, this.vI(), et, this, Vt, Ot)
      }
      dispose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Vt = this._internalMeshDataInfo;
        if (Vt._onBeforeDrawObservable && Vt._onBeforeDrawObservable.clear(), Vt._onBeforeBindObservable && Vt._onBeforeBindObservable.clear(), Vt._onBeforeRenderObservable && Vt._onBeforeRenderObservable.clear(), Vt._onAfterRenderObservable && Vt._onAfterRenderObservable.clear(), Vt._onBetweenPassObservable && Vt._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Vt.meshMap)
            for (const tt in Vt.meshMap) {
              const et = Vt.meshMap[tt];
              et && (et._internalMeshDataInfo._source = null, Vt.meshMap[tt] = void 0)
            }
          Vt._source && Vt._source._internalMeshDataInfo.meshMap && (Vt._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const tt = this.vI().meshes;
          for (const et of tt) {
            const tt = et;
            tt._internalMeshDataInfo && tt._internalMeshDataInfo._source && tt._internalMeshDataInfo._source === this && (tt._internalMeshDataInfo._source = null)
          }
        }
        Vt._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(tt, et)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(tt, et, Vt, Ot, qt, Dt) {
        let mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          dt = arguments.length > 7 ? arguments[7] : void 0;
        const jt = this.vI();
        return (0, bt.p)(tt, (tt => {
          const dt = tt.width,
            jt = tt.height,
            Ht = this.Jf().createCanvas(dt, jt).getContext("2d");
          Ht.drawImage(tt, 0, 0);
          const Xt = Ht.getImageData(0, 0, dt, jt).data;
          this.applyDisplacementMapFromBuffer(Xt, dt, jt, et, Vt, qt, Dt, mt), Ot && Ot(this)
        }), dt || (() => {}), jt.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(St.m.PositionKind) || !this.isVerticesDataPresent(St.m.NormalKind) || !this.isVerticesDataPresent(St.m.UVKind)) return zt.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const jt = this.getVerticesData(St.m.PositionKind, !0, !0),
          Ht = this.getVerticesData(St.m.NormalKind),
          Xt = this.getVerticesData(St.m.UVKind);
        let Qt = ht.n.Zero();
        const lt = ht.n.Zero(),
          Et = ht.m.Zero();
        Dt = Dt || ht.m.Zero(), mt = mt || new ht.m(1, 1);
        for (let ft = 0; ft < jt.length; ft += 3) {
          ht.n.FromArrayToRef(jt, ft, Qt), ht.n.FromArrayToRef(Ht, ft, lt), ht.m.FromArrayToRef(Xt, ft / 3 * 2, Et);
          const dt = 4 * ((Math.abs(Et.x * mt.x + Dt.x % 1) * (et - 1) % et | 0) + (Math.abs(Et.y * mt.y + Dt.y % 1) * (Vt - 1) % Vt | 0) * et),
            wt = .3 * (tt[dt] / 255) + .59 * (tt[dt + 1] / 255) + .11 * (tt[dt + 2] / 255);
          lt.normalize(), lt.scaleInPlace(Ot + (qt - Ot) * wt), Qt = Qt.add(lt), Qt.toArray(jt, ft)
        }
        return ct.d.ComputeNormals(jt, this.zOt(), Ht), dt ? (this.setVerticesData(St.m.PositionKind, jt), this.setVerticesData(St.m.NormalKind, Ht), this.setVerticesData(St.m.UVKind, Xt)) : (this.updateVerticesData(St.m.PositionKind, jt), this.updateVerticesData(St.m.NormalKind, Ht)), this
      }
      _getFlattenedNormals(tt, et) {
        const Vt = new Float32Array(3 * tt.length);
        let Ot = 0;
        const qt = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Dt = 0; Dt < tt.length; Dt += 3) {
          const mt = ht.n.FromArray(et, 3 * tt[Dt]),
            dt = ht.n.FromArray(et, 3 * tt[Dt + 1]),
            jt = ht.n.FromArray(et, 3 * tt[Dt + 2]),
            Ht = mt.subtract(dt),
            Xt = jt.subtract(dt),
            Qt = ht.n.Normalize(ht.n.Cross(Ht, Xt));
          qt && Qt.scaleInPlace(-1);
          for (let tt = 0; tt < 3; tt++) Vt[Ot++] = Qt.x, Vt[Ot++] = Qt.y, Vt[Ot++] = Qt.z
        }
        return Vt
      }
      _convertToUnIndexedMesh() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = this.getVerticesDataKinds().filter((tt => !this.getVertexBuffer(tt)?.getIsInstanced())),
          Vt = this.zOt(!1, !0),
          Ot = {},
          qt = (tt, et) => {
            const Ot = new Float32Array(Vt.length * et);
            let qt = 0;
            for (let Dt = 0; Dt < Vt.length; Dt++)
              for (let mt = 0; mt < et; mt++) Ot[qt++] = tt[Vt[Dt] * et + mt];
            return Ot
          },
          Dt = this.fL(),
          mt = this.geometry ? this.vJ.slice(0) : [];
        for (const dt of et) Ot[dt] = this.getVerticesData(dt);
        for (const dt of et) {
          const et = this.getVertexBuffer(dt),
            Dt = et.getSize();
          if (tt && dt === St.m.NormalKind) {
            const tt = this._getFlattenedNormals(Vt, Ot[St.m.PositionKind]);
            this.setVerticesData(St.m.NormalKind, tt, et.isUpdatable(), Dt)
          } else this.setVerticesData(dt, qt(Ot[dt], Dt), et.isUpdatable(), Dt)
        }
        if (this.morphTargetManager) {
          for (let et = 0; et < this.morphTargetManager.numTargets; et++) {
            const Ot = this.morphTargetManager.getTarget(et),
              Dt = Ot.getPositions();
            Ot.Ndt(qt(Dt, 3));
            const mt = Ot.getNormals();
            mt && Ot.setNormals(tt ? this._getFlattenedNormals(Vt, Dt) : qt(mt, 3));
            const dt = Ot.getTangents();
            dt && Ot.setTangents(qt(dt, 3));
            const jt = Ot.getUVs();
            jt && Ot.setUVs(qt(jt, 2));
            const Ht = Ot.getColors();
            Ht && Ot.setColors(qt(Ht, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let dt = 0; dt < Vt.length; dt++) Vt[dt] = dt;
        this.setIndices(Vt), this._unIndexed = !0, this.releaseSubMeshes();
        for (const dt of mt) {
          const tt = dt.fL();
          Pt.d.AddToMesh(dt.materialIndex, dt.indexStart, dt.indexCount, dt.indexStart, dt.indexCount, this).setBoundingInfo(tt)
        }
        return this.setBoundingInfo(Dt), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = ct.d.ExtractFromMesh(this);
        let Vt;
        if (tt && this.isVerticesDataPresent(St.m.NormalKind) && et.normals) {
          for (Vt = 0; Vt < et.normals.length; Vt++) et.normals[Vt] *= -1;
          this.setVerticesData(St.m.NormalKind, et.normals, this.isVertexBufferUpdatable(St.m.NormalKind))
        }
        if (et.indices) {
          let tt;
          for (Vt = 0; Vt < et.indices.length; Vt += 3) tt = et.indices[Vt + 1], et.indices[Vt + 1] = et.indices[Vt + 2], et.indices[Vt + 2] = tt;
          this.setIndices(et.indices, null, this.isVertexBufferUpdatable(St.m.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const et = ct.d.ExtractFromMesh(this),
          Vt = et.indices && !Array.isArray(et.indices) && Array.from ? Array.from(et.indices) : et.indices,
          Ot = et.positions && !Array.isArray(et.positions) && Array.from ? Array.from(et.positions) : et.positions,
          qt = et.uvs && !Array.isArray(et.uvs) && Array.from ? Array.from(et.uvs) : et.uvs,
          Dt = et.normals && !Array.isArray(et.normals) && Array.from ? Array.from(et.normals) : et.normals;
        if (Vt && Ot) {
          et.indices = Vt, et.positions = Ot, qt && (et.uvs = qt), Dt && (et.normals = Dt);
          const mt = tt + 1,
            dt = [];
          for (let tt = 0; tt < mt + 1; tt++) dt[tt] = [];
          let jt, Ht;
          const Xt = new ht.n(0, 0, 0),
            Qt = new ht.n(0, 0, 0),
            lt = new ht.m(0, 0),
            Et = [],
            ft = [],
            wt = [];
          let yt, Nt, Mt, bt = Ot.length;
          qt && (Nt = qt.length), Dt && (Mt = Dt.length);
          for (let tt = 0; tt < Vt.length; tt += 3) {
            ft[0] = Vt[tt], ft[1] = Vt[tt + 1], ft[2] = Vt[tt + 2];
            for (let tt = 0; tt < 3; tt++)
              if (jt = ft[tt], Ht = ft[(tt + 1) % 3], void 0 === wt[jt] && void 0 === wt[Ht] ? (wt[jt] = [], wt[Ht] = []) : (void 0 === wt[jt] && (wt[jt] = []), void 0 === wt[Ht] && (wt[Ht] = [])), void 0 === wt[jt][Ht] && void 0 === wt[Ht][jt]) {
                wt[jt][Ht] = [], Xt.x = (Ot[3 * Ht] - Ot[3 * jt]) / mt, Xt.y = (Ot[3 * Ht + 1] - Ot[3 * jt + 1]) / mt, Xt.z = (Ot[3 * Ht + 2] - Ot[3 * jt + 2]) / mt, Dt && (Qt.x = (Dt[3 * Ht] - Dt[3 * jt]) / mt, Qt.y = (Dt[3 * Ht + 1] - Dt[3 * jt + 1]) / mt, Qt.z = (Dt[3 * Ht + 2] - Dt[3 * jt + 2]) / mt), qt && (lt.x = (qt[2 * Ht] - qt[2 * jt]) / mt, lt.y = (qt[2 * Ht + 1] - qt[2 * jt + 1]) / mt), wt[jt][Ht].push(jt);
                for (let tt = 1; tt < mt; tt++) wt[jt][Ht].push(Ot.length / 3), Ot[bt++] = Ot[3 * jt] + tt * Xt.x, Ot[bt++] = Ot[3 * jt + 1] + tt * Xt.y, Ot[bt++] = Ot[3 * jt + 2] + tt * Xt.z, Dt && (Dt[Mt++] = Dt[3 * jt] + tt * Qt.x, Dt[Mt++] = Dt[3 * jt + 1] + tt * Qt.y, Dt[Mt++] = Dt[3 * jt + 2] + tt * Qt.z), qt && (qt[Nt++] = qt[2 * jt] + tt * lt.x, qt[Nt++] = qt[2 * jt + 1] + tt * lt.y);
                wt[jt][Ht].push(Ht), wt[Ht][jt] = [], yt = wt[jt][Ht].length;
                for (let tt = 0; tt < yt; tt++) wt[Ht][jt][tt] = wt[jt][Ht][yt - 1 - tt]
              } dt[0][0] = Vt[tt], dt[1][0] = wt[Vt[tt]][Vt[tt + 1]][1], dt[1][1] = wt[Vt[tt]][Vt[tt + 2]][1];
            for (let et = 2; et < mt; et++) {
              dt[et][0] = wt[Vt[tt]][Vt[tt + 1]][et], dt[et][et] = wt[Vt[tt]][Vt[tt + 2]][et], Xt.x = (Ot[3 * dt[et][et]] - Ot[3 * dt[et][0]]) / et, Xt.y = (Ot[3 * dt[et][et] + 1] - Ot[3 * dt[et][0] + 1]) / et, Xt.z = (Ot[3 * dt[et][et] + 2] - Ot[3 * dt[et][0] + 2]) / et, Dt && (Qt.x = (Dt[3 * dt[et][et]] - Dt[3 * dt[et][0]]) / et, Qt.y = (Dt[3 * dt[et][et] + 1] - Dt[3 * dt[et][0] + 1]) / et, Qt.z = (Dt[3 * dt[et][et] + 2] - Dt[3 * dt[et][0] + 2]) / et), qt && (lt.x = (qt[2 * dt[et][et]] - qt[2 * dt[et][0]]) / et, lt.y = (qt[2 * dt[et][et] + 1] - qt[2 * dt[et][0] + 1]) / et);
              for (let tt = 1; tt < et; tt++) dt[et][tt] = Ot.length / 3, Ot[bt++] = Ot[3 * dt[et][0]] + tt * Xt.x, Ot[bt++] = Ot[3 * dt[et][0] + 1] + tt * Xt.y, Ot[bt++] = Ot[3 * dt[et][0] + 2] + tt * Xt.z, Dt && (Dt[Mt++] = Dt[3 * dt[et][0]] + tt * Qt.x, Dt[Mt++] = Dt[3 * dt[et][0] + 1] + tt * Qt.y, Dt[Mt++] = Dt[3 * dt[et][0] + 2] + tt * Qt.z), qt && (qt[Nt++] = qt[2 * dt[et][0]] + tt * lt.x, qt[Nt++] = qt[2 * dt[et][0] + 1] + tt * lt.y)
            }
            dt[mt] = wt[Vt[tt + 1]][Vt[tt + 2]], Et.push(dt[0][0], dt[1][0], dt[1][1]);
            for (let tt = 1; tt < mt; tt++) {
              let et;
              for (et = 0; et < tt; et++) Et.push(dt[tt][et], dt[tt + 1][et], dt[tt + 1][et + 1]), Et.push(dt[tt][et], dt[tt + 1][et + 1], dt[tt][et + 1]);
              Et.push(dt[tt][et], dt[tt + 1][et], dt[tt + 1][et + 1])
            }
          }
          et.indices = Et, et.applyToMesh(this, this.isVertexBufferUpdatable(St.m.PositionKind))
        } else zt.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const tt = ct.d.ExtractFromMesh(this),
          et = tt.uvs,
          Vt = tt.indices,
          Ot = tt.positions,
          qt = tt.colors,
          Dt = tt.matricesIndices,
          mt = tt.matricesWeights,
          dt = tt.matricesIndicesExtra,
          jt = tt.matricesWeightsExtra;
        if (void 0 === Vt || void 0 === Ot || null === Vt || null === Ot) zt.d.Warn("VertexData contains empty entries");
        else {
          const Ht = [],
            Xt = [],
            Qt = [],
            lt = [],
            Et = [],
            ft = [],
            wt = [],
            yt = [];
          let Nt, Mt = 0;
          const bt = {};
          let Jt, Ct;
          for (let tt = 0; tt < Vt.length; tt += 3) {
            Ct = [Vt[tt], Vt[tt + 1], Vt[tt + 2]], Nt = [];
            for (let tt = 0; tt < 3; tt++) {
              Nt[tt] = "";
              for (let et = 0; et < 3; et++) Math.abs(Ot[3 * Ct[tt] + et]) < 1e-8 && (Ot[3 * Ct[tt] + et] = 0), Nt[tt] += Ot[3 * Ct[tt] + et] + "|"
            }
            if (Nt[0] != Nt[1] && Nt[0] != Nt[2] && Nt[1] != Nt[2])
              for (let tt = 0; tt < 3; tt++) {
                if (Jt = bt[Nt[tt]], void 0 === Jt) {
                  bt[Nt[tt]] = Mt, Jt = Mt++;
                  for (let et = 0; et < 3; et++) Ht.push(Ot[3 * Ct[tt] + et]);
                  if (null !== qt && void 0 !== qt)
                    for (let et = 0; et < 4; et++) lt.push(qt[4 * Ct[tt] + et]);
                  if (null !== et && void 0 !== et)
                    for (let Vt = 0; Vt < 2; Vt++) Qt.push(et[2 * Ct[tt] + Vt]);
                  if (null !== Dt && void 0 !== Dt)
                    for (let et = 0; et < 4; et++) Et.push(Dt[4 * Ct[tt] + et]);
                  if (null !== mt && void 0 !== mt)
                    for (let et = 0; et < 4; et++) ft.push(mt[4 * Ct[tt] + et]);
                  if (null !== dt && void 0 !== dt)
                    for (let et = 0; et < 4; et++) wt.push(dt[4 * Ct[tt] + et]);
                  if (null !== jt && void 0 !== jt)
                    for (let et = 0; et < 4; et++) yt.push(jt[4 * Ct[tt] + et])
                }
                Xt.push(Jt)
              }
          }
          const ut = [];
          ct.d.ComputeNormals(Ht, Xt, ut), tt.positions = Ht, tt.indices = Xt, tt.normals = ut, null !== et && void 0 !== et && (tt.uvs = Qt), null !== qt && void 0 !== qt && (tt.colors = lt), null !== Dt && void 0 !== Dt && (tt.matricesIndices = Et), null !== mt && void 0 !== mt && (tt.matricesWeights = ft), null !== dt && void 0 !== dt && (tt.matricesIndicesExtra = wt), null !== mt && void 0 !== mt && (tt.matricesWeightsExtra = yt), tt.applyToMesh(this, this.isVertexBufferUpdatable(St.m.PositionKind))
        }
      }
      static _instancedMeshFactory(tt, et) {
        throw (0, rt.e)("InstancedMesh")
      }
      static _PhysicsImpostorParser(tt, et, Vt) {
        throw (0, rt.e)("PhysicsImpostor")
      }
      createInstance(tt) {
        const et = st._instancedMeshFactory(tt, this);
        return et.parent = this.parent, et
      }
      synchronizeInstances() {
        for (let tt = 0; tt < this.instances.length; tt++) {
          this.instances[tt]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(tt) {
        const et = this.zOt(),
          Vt = this.getVerticesData(St.m.PositionKind);
        if (!Vt || !et) return this;
        const Ot = [];
        for (let Dt = 0; Dt < Vt.length; Dt += 3) Ot.push(ht.n.FromArray(Vt, Dt));
        const qt = [];
        return Mt.d.SyncAsyncForLoop(Ot.length, 40, (tt => {
          const et = Ot.length - 1 - tt,
            Vt = Ot[et];
          for (let Dt = 0; Dt < et; ++Dt) {
            const tt = Ot[Dt];
            if (Vt.equals(tt)) {
              qt[et] = Dt;
              break
            }
          }
        }), (() => {
          for (let tt = 0; tt < et.length; ++tt) et[tt] = qt[et[tt]] || et[tt];
          const Vt = this.vJ.slice(0);
          this.setIndices(et), this.vJ = Vt, tt && tt(this)
        })), this
      }
      serialize() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        tt.name = this.name, tt.id = this.id, tt.uniqueId = this.uniqueId, tt.type = this.getClassName(), Ct.d && Ct.d.HasTags(this) && (tt.tags = Ct.d.GetTags(this)), tt.position = this.position.GOt(), this.rotationQuaternion ? tt.rotationQuaternion = this.rotationQuaternion.GOt() : this.rotation && (tt.rotation = this.rotation.GOt()), tt.cj = this.cj.GOt(), this._postMultiplyPivotMatrix ? tt.pivotMatrix = this.getPivotMatrix().GOt() : tt.localMatrix = this.getPivotMatrix().GOt(), tt.isEnabled = this.isEnabled(!1), tt.isVisible = this.isVisible, tt.infiniteDistance = this.infiniteDistance, tt.pickable = this.Gw, tt.receiveShadows = this.receiveShadows, tt.billboardMode = this.billboardMode, tt.visibility = this.visibility, tt.Cf = this.Cf, tt.checkCollisions = this.checkCollisions, tt.ellipsoid = this.ellipsoid.GOt(), tt.ellipsoidOffset = this.ellipsoidOffset.GOt(), tt.hf = this.hf, tt.isBlocker = this.isBlocker, tt.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (tt.eZ = !0), this.parent && this.parent._serializeAsParent(tt), tt.isUnIndexed = this.isUnIndexed;
        const et = this._geometry;
        if (et && this.vJ) {
          tt.geometryUniqueId = et.uniqueId, tt.geometryId = et.id, tt.vJ = [];
          for (let et = 0; et < this.vJ.length; et++) {
            const Vt = this.vJ[et];
            tt.vJ.push({
              materialIndex: Vt.materialIndex,
              verticesStart: Vt.verticesStart,
              verticesCount: Vt.verticesCount,
              indexStart: Vt.indexStart,
              indexCount: Vt.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (tt.materialUniqueId = this.material.uniqueId, tt.materialId = this.material.id) : (this.material = null, tt.materialUniqueId = this._scene.defaultMaterial.uniqueId, tt.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (tt.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (tt.skeletonId = this.skeleton.id, tt.skeletonUniqueId = this.skeleton.uniqueId, tt.numBoneInfluencers = this.numBoneInfluencers), this.vI()._getComponent(Ut.e.NAME_PHYSICSENGINE)) {
          const et = this.getPhysicsImpostor?.();
          et && (tt.physicsMass = et.getParam("Sd"), tt.physicsFriction = et.getParam("friction"), tt.physicsRestitution = et.getParam("Sd"), tt.physicsImpostor = et.type)
        }
        this.metadata && (tt.metadata = this.metadata), 0 !== this.meshBlendingTag && (tt.meshBlendingTag = this.meshBlendingTag), tt.instances = [];
        for (let Vt = 0; Vt < this.instances.length; Vt++) {
          const et = this.instances[Vt];
          if (et.doNotSerialize) continue;
          const Ot = {
            name: et.name,
            id: et.id,
            isEnabled: et.isEnabled(!1),
            isVisible: et.isVisible,
            Gw: et.Gw,
            checkCollisions: et.checkCollisions,
            position: et.position.GOt(),
            cj: et.cj.GOt()
          };
          if (et.parent && et.parent._serializeAsParent(Ot), et.rotationQuaternion ? Ot.rotationQuaternion = et.rotationQuaternion.GOt() : et.rotation && (Ot.rotation = et.rotation.GOt()), this.vI()._getComponent(Ut.e.NAME_PHYSICSENGINE)) {
            const tt = et.getPhysicsImpostor?.();
            tt && (Ot.physicsMass = tt.getParam("Sd"), Ot.physicsFriction = tt.getParam("friction"), Ot.physicsRestitution = tt.getParam("Sd"), Ot.physicsImpostor = tt.type)
          }
          et.metadata && (Ot.metadata = et.metadata), et.actionManager && (Ot.actions = et.actionManager.serialize(et.name)), tt.instances.push(Ot), Gt.d.AppendSerializedAnimations(et, Ot), Ot.nw = et.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (tt.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.DVt
          }, this._userThinInstanceBuffersStorage)) {
          const et = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const tt in this._userThinInstanceBuffersStorage.data) et.data[tt] = Array.from(this._userThinInstanceBuffersStorage.data[tt]), et.sizes[tt] = this._userThinInstanceBuffersStorage.sizes[tt], et.strides[tt] = this._userThinInstanceBuffersStorage.strides[tt];
          tt.thinInstances.userThinInstance = et
        }
        return Gt.d.AppendSerializedAnimations(this, tt), tt.nw = this.serializeAnimationRanges(), tt.layerMask = this.layerMask, tt.alphaIndex = this.alphaIndex, tt.hasVertexAlpha = this.hasVertexAlpha, tt.overlayAlpha = this.overlayAlpha, tt.overlayColor = this.overlayColor.GOt(), tt.renderOverlay = this.renderOverlay, tt.applyFog = this.applyFog, this.actionManager && (tt.actions = this.actionManager.serialize(this.name)), tt
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const tt = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (tt && tt.vertexCount) {
          if (tt.vertexCount !== this.getTotalVertices()) return zt.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (tt.isUsingTextureForTargets) return;
          for (let et = 0; et < tt.numInfluencers; et++) {
            const Vt = tt.getActiveTarget(et),
              Ot = Vt.getPositions();
            if (!Ot) return void zt.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(St.m.PositionKind + et, Ot, !1, 3);
            const qt = Vt.getNormals();
            qt && this.geometry.setVerticesData(St.m.NormalKind + et, qt, !1, 3);
            const Dt = Vt.getTangents();
            Dt && this.geometry.setVerticesData(St.m.TangentKind + et, Dt, !1, 3);
            const mt = Vt.getUVs();
            mt && this.geometry.setVerticesData(St.m.UVKind + "_" + et, mt, !1, 2);
            const dt = Vt.getUV2s();
            dt && this.geometry.setVerticesData(St.m.UV2Kind + "_" + et, dt, !1, 2);
            const jt = Vt.getColors();
            jt && this.geometry.setVerticesData(St.m.ColorKind + et, jt, !1, 4)
          }
        } else {
          let tt = 0;
          for (; this.geometry.isVerticesDataPresent(St.m.PositionKind + tt);) this.geometry.removeVerticesData(St.m.PositionKind + tt), this.geometry.isVerticesDataPresent(St.m.NormalKind + tt) && this.geometry.removeVerticesData(St.m.NormalKind + tt), this.geometry.isVerticesDataPresent(St.m.TangentKind + tt) && this.geometry.removeVerticesData(St.m.TangentKind + tt), this.geometry.isVerticesDataPresent(St.m.UVKind + "_" + tt) && this.geometry.removeVerticesData(St.m.UVKind + "_" + tt), this.geometry.isVerticesDataPresent(St.m.UV2Kind + "_" + tt) && this.geometry.removeVerticesData(St.m.UV2Kind + "_" + tt), this.geometry.isVerticesDataPresent(St.m.ColorKind + tt) && this.geometry.removeVerticesData(St.m.ColorKind + tt), tt++
        }
      }
      static Parse(tt, et, Vt) {
        let Ot, qt = !1;
        if (tt.type && "LinesMesh" === tt.type ? Ot = st._LinesMeshParser(tt, et) : tt.type && "GroundMesh" === tt.type ? Ot = st._GroundMeshParser(tt, et) : tt.type && "GoldbergMesh" === tt.type ? Ot = st._GoldbergMeshParser(tt, et) : tt.type && "GreasedLineMesh" === tt.type ? Ot = st._GreasedLineMeshParser(tt, et) : tt.type && "TrailMesh" === tt.type ? Ot = st._TrailMeshParser(tt, et) : tt.type && "GaussianSplattingMesh" === tt.type ? (Ot = tt._isCompound ? st._GaussianSplattingCompoundMeshParser(tt, et) : st._GaussianSplattingMeshParser(tt, et), qt = !0) : tt.type && "GaussianSplattingPartProxyMesh" === tt.type ? (Ot = st._GaussianSplattingPartProxyMeshParser(tt, et), qt = !0) : Ot = new st(tt.name, et), Ot.id = tt.id, Ot._waitingParsedUniqueId = tt.uniqueId, Ct.d && Ct.d.AddTagsTo(Ot, tt.tags), Ot.position = ht.n.FromArray(tt.position), void 0 !== tt.metadata && (Ot.metadata = tt.metadata), void 0 !== tt.meshBlendingTag && (Ot.meshBlendingTag = tt.meshBlendingTag), tt.rotationQuaternion ? Ot.rotationQuaternion = ht.e.FromArray(tt.rotationQuaternion) : tt.rotation && (Ot.rotation = ht.n.FromArray(tt.rotation)), Ot.cj = ht.n.FromArray(tt.cj), tt.localMatrix ? Ot.setPreTransformMatrix(ht.c.FromArray(tt.localMatrix)) : tt.pivotMatrix && Ot.setPivotMatrix(ht.c.FromArray(tt.pivotMatrix)), Ot.Av(tt.isEnabled), Ot.isVisible = tt.isVisible, Ot.infiniteDistance = tt.infiniteDistance, Ot.Cf = !!tt.Cf, Ot.showBoundingBox = tt.showBoundingBox, Ot.showSubMeshesBoundingBox = tt.showSubMeshesBoundingBox, void 0 !== tt.applyFog && (Ot.applyFog = tt.applyFog), void 0 !== tt.pickable && (Ot.Gw = tt.pickable), void 0 !== tt.alphaIndex && (Ot.alphaIndex = tt.alphaIndex), Ot.receiveShadows = tt.receiveShadows, void 0 !== tt.billboardMode && (Ot.billboardMode = tt.billboardMode), void 0 !== tt.visibility && (Ot.visibility = tt.visibility), Ot.checkCollisions = tt.checkCollisions, Ot.hf = !!tt.hf, tt.ellipsoid && (Ot.ellipsoid = ht.n.FromArray(tt.ellipsoid)), tt.ellipsoidOffset && (Ot.ellipsoidOffset = ht.n.FromArray(tt.ellipsoidOffset)), null != tt.overrideMaterialSideOrientation && (Ot.sideOrientation = tt.overrideMaterialSideOrientation), void 0 !== tt.sideOrientation && (Ot.sideOrientation = tt.sideOrientation), void 0 !== tt.isBlocker && (Ot.isBlocker = tt.isBlocker), Ot._shouldGenerateFlatShading = tt.useFlatShading, tt.eZ && (Ot._waitingData.eZ = tt.eZ), void 0 !== tt.parentId && (Ot._waitingParentId = tt.parentId), void 0 !== tt.parentInstanceIndex && (Ot._waitingParentInstanceIndex = tt.parentInstanceIndex), void 0 !== tt.actions && (Ot._waitingData.actions = tt.actions), void 0 !== tt.overlayAlpha && (Ot.overlayAlpha = tt.overlayAlpha), void 0 !== tt.overlayColor && (Ot.overlayColor = vt.b.FromArray(tt.overlayColor)), void 0 !== tt.renderOverlay && (Ot.renderOverlay = tt.renderOverlay), Ot.isUnIndexed = !!tt.isUnIndexed, Ot.hasVertexAlpha = tt.hasVertexAlpha, tt.delayLoadingFile ? (Ot.delayLoadState = 4, Ot.delayLoadingFile = Vt + tt.delayLoadingFile, Ot.buildBoundingInfo(ht.n.FromArray(tt.boundingBoxMinimum), ht.n.FromArray(tt.boundingBoxMaximum)), tt._binaryInfo && (Ot._binaryInfo = tt._binaryInfo), Ot._delayInfo = [], tt.hasUVs && Ot._delayInfo.push(St.m.UVKind), tt.hasUVs2 && Ot._delayInfo.push(St.m.UV2Kind), tt.hasUVs3 && Ot._delayInfo.push(St.m.UV3Kind), tt.hasUVs4 && Ot._delayInfo.push(St.m.UV4Kind), tt.hasUVs5 && Ot._delayInfo.push(St.m.UV5Kind), tt.hasUVs6 && Ot._delayInfo.push(St.m.UV6Kind), tt.hasColors && Ot._delayInfo.push(St.m.ColorKind), tt.hasMatricesIndices && Ot._delayInfo.push(St.m.MatricesIndicesKind), tt.hasMatricesWeights && Ot._delayInfo.push(St.m.MatricesWeightsKind), Ot._delayLoadingFunction = Rt.d._ImportGeometry, kt.b.ForceFullSceneLoadingForIncremental && Ot._checkDelayState()) : qt || Rt.d._ImportGeometry(tt, Ot), tt.materialUniqueId ? Ot._waitingMaterialId = tt.materialUniqueId : tt.materialId && (Ot._waitingMaterialId = tt.materialId), tt.morphTargetManagerId > -1 && (Ot._waitingMorphTargetManagerId = tt.morphTargetManagerId), void 0 !== tt.skeletonId && null !== tt.skeletonId && (Ot.skeleton = et.getLastSkeletonById(tt.skeletonId), Ot._waitingSkeletonId = tt.skeletonId, tt.numBoneInfluencers && (Ot.numBoneInfluencers = tt.numBoneInfluencers)), void 0 !== tt.skeletonUniqueId && null !== tt.skeletonUniqueId && (Ot._waitingSkeletonUniqueId = tt.skeletonUniqueId), tt.animations) {
          for (let et = 0; et < tt.animations.length; et++) {
            const Vt = tt.animations[et],
              qt = (0, ot.e)("BABYLON.Animation");
            qt && Ot.animations.push(qt.Parse(Vt))
          }
          Wt.d.ParseAnimationRanges(Ot, tt, et)
        }
        if (tt.autoAnimate && et.beginAnimation(Ot, tt.autoAnimateFrom, tt.autoAnimateTo, tt.autoAnimateLoop, tt.autoAnimateSpeed || 1), tt.layerMask && !isNaN(tt.layerMask) ? Ot.layerMask = Math.abs(parseInt(tt.layerMask)) : Ot.layerMask = 268435455, tt.physicsImpostor && (Ot.physicsImpostor = st._PhysicsImpostorParser(et, Ot, tt)), tt.lodMeshIds && (Ot._waitingData.lods = {
            ids: tt.lodMeshIds,
            distances: tt.lodDistances ? tt.lodDistances : null,
            coverages: tt.lodCoverages ? tt.lodCoverages : null
          }), tt.instances)
          for (let Dt = 0; Dt < tt.instances.length; Dt++) {
            const Vt = tt.instances[Dt],
              qt = Ot.createInstance(Vt.name);
            if (Vt.id && (qt.id = Vt.id), Ct.d && (Vt.tags ? Ct.d.AddTagsTo(qt, Vt.tags) : Ct.d.AddTagsTo(qt, tt.tags)), qt.position = ht.n.FromArray(Vt.position), void 0 !== Vt.metadata && (qt.metadata = Vt.metadata), void 0 !== Vt.parentId && (qt._waitingParentId = Vt.parentId), void 0 !== Vt.parentInstanceIndex && (qt._waitingParentInstanceIndex = Vt.parentInstanceIndex), void 0 !== Vt.isEnabled && null !== Vt.isEnabled && qt.Av(Vt.isEnabled), void 0 !== Vt.isVisible && null !== Vt.isVisible && (qt.isVisible = Vt.isVisible), void 0 !== Vt.Gw && null !== Vt.Gw && (qt.Gw = Vt.Gw), Vt.rotationQuaternion ? qt.rotationQuaternion = ht.e.FromArray(Vt.rotationQuaternion) : Vt.rotation && (qt.rotation = ht.n.FromArray(Vt.rotation)), qt.cj = ht.n.FromArray(Vt.cj), void 0 != Vt.checkCollisions && null != Vt.checkCollisions && (qt.checkCollisions = Vt.checkCollisions), void 0 != Vt.pickable && null != Vt.pickable && (qt.Gw = Vt.pickable), void 0 != Vt.showBoundingBox && null != Vt.showBoundingBox && (qt.showBoundingBox = Vt.showBoundingBox), void 0 != Vt.showSubMeshesBoundingBox && null != Vt.showSubMeshesBoundingBox && (qt.showSubMeshesBoundingBox = Vt.showSubMeshesBoundingBox), void 0 != Vt.alphaIndex && null != Vt.showSubMeshesBoundingBox && (qt.alphaIndex = Vt.alphaIndex), Vt.physicsImpostor && (qt.physicsImpostor = st._PhysicsImpostorParser(et, qt, Vt)), void 0 !== Vt.actions && (qt._waitingData.actions = Vt.actions), Vt.animations) {
              for (let tt = 0; tt < Vt.animations.length; tt++) {
                const et = Vt.animations[tt],
                  Ot = (0, ot.e)("BABYLON.Animation");
                Ot && qt.animations.push(Ot.Parse(et))
              }
              Wt.d.ParseAnimationRanges(qt, Vt, et), Vt.autoAnimate && et.beginAnimation(qt, Vt.autoAnimateFrom, Vt.autoAnimateTo, Vt.autoAnimateLoop, Vt.autoAnimateSpeed || 1)
            }
          }
        if (tt.thinInstances) {
          const et = tt.thinInstances;
          if (Ot.DVt = !!et.enablePicking, et.matrixData ? (Ot.A4("matrix", new Float32Array(et.matrixData), 16, !1), Ot._thinInstanceDataStorage.matrixBufferSize = et.matrixBufferSize, Ot._thinInstanceDataStorage.instancesCount = et.instancesCount) : Ot._thinInstanceDataStorage.matrixBufferSize = et.matrixBufferSize, tt.thinInstances.userThinInstance) {
            const et = tt.thinInstances.userThinInstance;
            for (const tt in et.data) Ot.A4(tt, new Float32Array(et.data[tt]), et.strides[tt], !1), Ot._userThinInstanceBuffersStorage.sizes[tt] = et.sizes[tt]
          }
        }
        return Ot
      }
      setPositionsForCPUSkinning() {
        const tt = this._internalMeshDataInfo;
        if (!tt._sourcePositions) {
          const et = this.getVerticesData(St.m.PositionKind);
          if (!et) return tt._sourcePositions;
          tt._sourcePositions = new Float32Array(et), this.isVertexBufferUpdatable(St.m.PositionKind) || this.setVerticesData(St.m.PositionKind, et, !0)
        }
        return tt._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const tt = this._internalMeshDataInfo;
        if (!tt._sourceNormals) {
          const et = this.getVerticesData(St.m.NormalKind);
          if (!et) return tt._sourceNormals;
          tt._sourceNormals = new Float32Array(et), this.isVertexBufferUpdatable(St.m.NormalKind) || this.setVerticesData(St.m.NormalKind, et, !0)
        }
        return tt._sourceNormals
      }
      applySkeleton(tt) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.vI().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.vI().getFrameId(), !this.isVerticesDataPresent(St.m.PositionKind)) return this;
        if (!this.isVerticesDataPresent(St.m.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(St.m.MatricesWeightsKind)) return this;
        const et = this.isVerticesDataPresent(St.m.NormalKind),
          Vt = this._internalMeshDataInfo;
        if (!Vt._sourcePositions) {
          const tt = this.vJ.slice();
          this.setPositionsForCPUSkinning(), this.vJ = tt
        }
        et && !Vt._sourceNormals && this.setNormalsForCPUSkinning();
        let Ot = this.getVerticesData(St.m.PositionKind);
        if (!Ot) return this;
        Ot instanceof Float32Array || (Ot = new Float32Array(Ot));
        let qt = this.getVerticesData(St.m.NormalKind);
        if (et) {
          if (!qt) return this;
          qt instanceof Float32Array || (qt = new Float32Array(qt))
        }
        const Dt = this.getVerticesData(St.m.MatricesIndicesKind),
          mt = this.getVerticesData(St.m.MatricesWeightsKind);
        if (!mt || !Dt) return this;
        const dt = this.numBoneInfluencers > 4,
          jt = dt ? this.getVerticesData(St.m.MatricesIndicesExtraKind) : null,
          Ht = dt ? this.getVerticesData(St.m.MatricesWeightsExtraKind) : null,
          Xt = tt.getTransformMatrices(this),
          Qt = ht.n.Zero(),
          lt = new ht.c,
          Et = new ht.c;
        let ft, wt = 0;
        for (let yt = 0; yt < Ot.length; yt += 3, wt += 4) {
          let tt;
          for (ft = 0; ft < 4; ft++) tt = mt[wt + ft], tt > 0 && (ht.c.FromFloat32ArrayToRefScaled(Xt, Math.floor(16 * Dt[wt + ft]), tt, Et), lt.addToSelf(Et));
          if (dt)
            for (ft = 0; ft < 4; ft++) tt = Ht[wt + ft], tt > 0 && (ht.c.FromFloat32ArrayToRefScaled(Xt, Math.floor(16 * jt[wt + ft]), tt, Et), lt.addToSelf(Et));
          ht.n.TransformCoordinatesFromFloatsToRef(Vt._sourcePositions[yt], Vt._sourcePositions[yt + 1], Vt._sourcePositions[yt + 2], lt, Qt), Qt.toArray(Ot, yt), et && (ht.n.TransformNormalFromFloatsToRef(Vt._sourceNormals[yt], Vt._sourceNormals[yt + 1], Vt._sourceNormals[yt + 2], lt, Qt), Qt.toArray(qt, yt)), lt.reset()
        }
        return this.updateVerticesData(St.m.PositionKind, Ot), et && this.updateVerticesData(St.m.NormalKind, qt), this
      }
      static MinMax(tt) {
        let et = null,
          Vt = null;
        for (const Ot of tt) {
          const tt = Ot.fL().boundingBox;
          et && Vt ? (et.minimizeInPlace(tt.minimumWorld), Vt.maximizeInPlace(tt.maximumWorld)) : (et = tt.minimumWorld.clone(), Vt = tt.maximumWorld.clone())
        }
        return et && Vt ? {
          min: et,
          max: Vt
        } : {
          min: ht.n.Zero(),
          max: ht.n.Zero()
        }
      }
      static Center(tt) {
        const et = tt instanceof Array ? st.MinMax(tt) : tt;
        return ht.n.Center(et.min, et.max)
      }
      static MergeMeshes(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        return (0, ut.k)(st._MergeMeshesCoroutine(tt, et, Vt, Ot, qt, Dt, !1))
      }
      static async MergeMeshesAsync(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0,
          Dt = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, ut.i)(st._MergeMeshesCoroutine(tt, et, Vt, Ot, qt, Dt, !0), (0, ut.c)())
      }
      static * _MergeMeshesCoroutine(tt) {
        let et, Vt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ot = arguments.length > 2 ? arguments[2] : void 0,
          qt = arguments.length > 3 ? arguments[3] : void 0,
          Dt = arguments.length > 4 ? arguments[4] : void 0,
          mt = arguments.length > 5 ? arguments[5] : void 0,
          dt = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (tt = tt.filter(Boolean)).length) return null;
        if (!Ot) {
          let Vt = 0;
          for (et = 0; et < tt.length; et++)
            if (Vt += tt[et].getTotalVertices(), Vt >= 65536) return zt.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const jt = tt[0];
        mt && (Dt = !1, tt.sort(((tt, et) => (tt.material?.uniqueId ?? -1) - (et.material?.uniqueId ?? -1))));
        const Ht = new Array,
          Xt = new Array,
          Qt = new Array,
          lt = tt[0].sideOrientation;
        for (et = 0; et < tt.length; et++) {
          const Vt = tt[et];
          if (Vt.pI) return zt.d.Warn("Cannot merge instance meshes."), null;
          if (lt !== Vt.sideOrientation) return zt.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Dt || mt) {
            const tt = Qt.reduce(((tt, et) => Math.max(tt, et.start + et.count)), 0);
            if (mt)
              if (Vt.material) {
                const et = Vt.material;
                if (et instanceof Ft.e) {
                  for (let tt = 0; tt < et.N9.length; tt++) Ht.indexOf(et.N9[tt]) < 0 && Ht.push(et.N9[tt]);
                  for (let Ot = 0; Ot < Vt.vJ.length; Ot++) Xt.push(Ht.indexOf(et.N9[Vt.vJ[Ot].materialIndex])), Qt.push({
                    start: tt + Vt.vJ[Ot].indexStart,
                    count: Vt.vJ[Ot].indexCount
                  })
                } else {
                  Ht.indexOf(et) < 0 && Ht.push(et);
                  for (let Ot = 0; Ot < Vt.vJ.length; Ot++) Xt.push(Ht.indexOf(et)), Qt.push({
                    start: tt + Vt.vJ[Ot].indexStart,
                    count: Vt.vJ[Ot].indexCount
                  })
                }
              } else
                for (let et = 0; et < Vt.vJ.length; et++) Xt.push(0), Qt.push({
                  start: tt + Vt.vJ[et].indexStart,
                  count: Vt.vJ[et].indexCount
                });
            else Qt.push({
              start: tt,
              count: Vt.getTotalIndices()
            })
          }
        }
        if (mt && Qt.length > 1) {
          let tt = 0;
          for (let et = 1; et < Qt.length; et++) {
            const Vt = Qt[tt],
              Ot = Qt[et];
            Xt[et] === Xt[tt] && Vt.start + Vt.count === Ot.start ? Vt.count += Ot.count : (tt++, Qt[tt] = Ot, Xt[tt] = Xt[et])
          }
          Qt.length = tt + 1, Xt.length = tt + 1
        }
        const Et = tt => {
            const et = tt.computeWorldMatrix(!0);
            return {
              vertexData: ct.d.ExtractFromMesh(tt, !1, !1),
              transform: et
            }
          },
          {
            vertexData: ft,
            transform: wt
          } = Et(tt[0]);
        dt && (yield);
        const yt = new Array(tt.length - 1);
        for (let ut = 1; ut < tt.length; ut++) yt[ut - 1] = Et(tt[ut]), dt && (yield);
        const Nt = ft._mergeCoroutine(wt, yt, Ot, dt, !Vt);
        let Mt = Nt.next();
        for (; !Mt.done;) dt && (yield), Mt = Nt.next();
        const bt = Mt.value;
        qt || (qt = new st(jt.name + "_merged", jt.vI()));
        const Jt = bt._applyToCoroutine(qt, void 0, dt);
        let Ct = Jt.next();
        for (; !Ct.done;) dt && (yield), Ct = Jt.next();
        if (qt.checkCollisions = jt.checkCollisions, qt.sideOrientation = jt.sideOrientation, Vt)
          for (et = 0; et < tt.length; et++) tt[et].dispose();
        if (Dt || mt) {
          for (qt.releaseSubMeshes(), et = 0; et < Qt.length;) Pt.d.CreateFromIndices(0, Qt[et].start, Qt[et].count, qt, void 0, !1), et++;
          for (const tt of qt.vJ) tt.refreshBoundingInfo();
          qt.computeWorldMatrix(!0)
        }
        if (mt) {
          const tt = new Ft.e(jt.name + "_merged", jt.vI());
          tt.N9 = Ht;
          for (let et = 0; et < qt.vJ.length; et++) qt.vJ[et].materialIndex = Xt[et];
          qt.material = tt
        } else qt.material = jt.material;
        return qt
      }
      Y_(tt) {
        tt._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(tt)
      }
      p_(tt) {
        const et = tt._indexInSourceMeshInstanceArray;
        if (-1 != et) {
          if (et !== this.instances.length - 1) {
            const tt = this.instances[this.instances.length - 1];
            this.instances[et] = tt, tt._indexInSourceMeshInstanceArray = et
          }
          tt._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Zt.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(tt) {
        const et = this.vI();
        return et.forcePointsCloud ? Zt.c.PointFillMode : et.forceWireframe ? Zt.c.WireFrameFillMode : this.overrideRenderingFillMode ?? tt
      }
      setMaterialByID(tt) {
        return this.setMaterialById(tt)
      }
      static CreateRibbon(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(tt, et, Vt, Ot, qt, Dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(tt, et, Vt, Ot, qt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(tt, et, Vt, Ot, qt, Dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(tt, et, Vt, Ot) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(tt, et, Vt, Ot, qt, Dt, mt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(tt, et, Vt, Ot, qt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(tt, et, Vt, Ot, qt, Dt, mt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(tt, et, Vt, Ot, qt, Dt, mt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(tt, et, Vt, Ot, qt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(tt, et, Vt, Ot, qt, Dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(tt, et, Vt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(tt, et, Vt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(tt, et, Vt, Ot, qt, Dt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(tt, et, Vt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(tt) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    st.FRONTSIDE = ct.d.FRONTSIDE, st.BACKSIDE = ct.d.BACKSIDE, st.DOUBLESIDE = ct.d.DOUBLESIDE, st.DEFAULTSIDE = ct.d.DEFAULTSIDE, st.NO_CAP = 0, st.CAP_START = 1, st.CAP_END = 2, st.CAP_ALL = 3, st.NO_FLIP = 0, st.FLIP_TILE = 1, st.ROTATE_TILE = 2, st.FLIP_ROW = 3, st.ROTATE_ROW = 4, st.FLIP_N_ROTATE_TILE = 5, st.FLIP_N_ROTATE_ROW = 6, st.CENTER = 0, st.LEFT = 1, st.RIGHT = 2, st.TOP = 3, st.BOTTOM = 4, st.INSTANCEDMESH_SORT_TRANSPARENT = !1, st._GroundMeshParser = (tt, et) => {
      throw (0, rt.e)("GroundMesh")
    }, st._GoldbergMeshParser = (tt, et) => {
      throw (0, rt.e)("GoldbergMesh")
    }, st._LinesMeshParser = (tt, et) => {
      throw (0, rt.e)("LinesMesh")
    }, st._GreasedLineMeshParser = (tt, et) => {
      throw (0, rt.e)("GreasedLineMesh")
    }, st._GreasedLineRibbonMeshParser = (tt, et) => {
      throw (0, rt.e)("GreasedLineRibbonMesh")
    }, st._TrailMeshParser = (tt, et) => {
      throw (0, rt.e)("TrailMesh")
    }, st._GaussianSplattingMeshParser = (tt, et) => {
      throw (0, rt.e)("GaussianSplattingMesh")
    }, st._GaussianSplattingPartProxyMeshParser = (tt, et) => {
      throw (0, rt.e)("GaussianSplattingPartProxyMesh")
    }, st._GaussianSplattingCompoundMeshParser = (tt, et) => {
      throw (0, rt.e)("GaussianSplattingCompoundMesh")
    };
    let nt = !1;

    function te() {
      nt || (nt = !0, (0, ot.i)("BABYLON.Mesh", st))
    }(Ot = st.prototype).tL ?? (Ot.tL = (0, rt.d)("Mesh", "tL")), (qt = st.prototype).simplify ?? (qt.simplify = (0, rt.d)("Mesh", "simplify")), (Dt = st.prototype).thinInstanceAdd ?? (Dt.thinInstanceAdd = (0, rt.d)("Mesh", "thinInstanceAdd")), (mt = st.prototype).thinInstanceAddSelf ?? (mt.thinInstanceAddSelf = (0, rt.d)("Mesh", "thinInstanceAddSelf")), (dt = st.prototype).thinInstanceRegisterAttribute ?? (dt.thinInstanceRegisterAttribute = (0, rt.d)("Mesh", "thinInstanceRegisterAttribute")), (jt = st.prototype).thinInstanceSetMatrixAt ?? (jt.thinInstanceSetMatrixAt = (0, rt.d)("Mesh", "thinInstanceSetMatrixAt")), (Ht = st.prototype).thinInstanceSetAttributeAt ?? (Ht.thinInstanceSetAttributeAt = (0, rt.d)("Mesh", "thinInstanceSetAttributeAt")), (Xt = st.prototype).A4 ?? (Xt.A4 = (0, rt.d)("Mesh", "A4")), (Qt = st.prototype).thinInstanceGetWorldMatrices ?? (Qt.thinInstanceGetWorldMatrices = (0, rt.d)("Mesh", "thinInstanceGetWorldMatrices")), (lt = st.prototype).O4 ?? (lt.O4 = (0, rt.d)("Mesh", "O4")), (Et = st.prototype).thinInstancePartialBufferUpdate ?? (Et.thinInstancePartialBufferUpdate = (0, rt.d)("Mesh", "thinInstancePartialBufferUpdate")), (ft = st.prototype).thinInstanceRefreshBoundingInfo ?? (ft.thinInstanceRefreshBoundingInfo = (0, rt.d)("Mesh", "thinInstanceRefreshBoundingInfo")), (wt = st.prototype).getEmittedParticleSystems ?? (wt.getEmittedParticleSystems = (0, rt.d)("Mesh", "getEmittedParticleSystems")), (yt = st.prototype).getHierarchyEmittedParticleSystems ?? (yt.getHierarchyEmittedParticleSystems = (0, rt.d)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(st.prototype, "edgesShareWithInstances") || Object.defineProperty(st.prototype, "edgesShareWithInstances", (0, rt.c)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(st.prototype, "DVt") || Object.defineProperty(st.prototype, "DVt", (0, rt.c)("Mesh", "DVt")), Object.getOwnPropertyDescriptor(st.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(st.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, rt.c)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(st.prototype, "r_") || Object.defineProperty(st.prototype, "r_", (0, rt.c)("Mesh", "r_"))
  },
  40608: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ft
    });
    var Ot = Vt(40211),
      qt = Vt(37336),
      Dt = Vt(40343),
      mt = Vt(40080),
      dt = Vt(37513),
      jt = Vt(38899),
      Ht = Vt(40213),
      Xt = Vt(40606),
      Qt = Vt(40257),
      lt = Vt(40476);
    class Et {}
    let ft = (() => {
      var tt;
      let et, Vt, ft, wt, yt = [];
      return tt = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Xt.g)(this._applyToCoroutine.bind(this)), this.uniqueId = tt._UniqueIdGenerator, tt._UniqueIdGenerator++
        }
        set(tt, et) {
          switch (tt.length || jt.d.Warn(`Setting vertex data kind '${et}' with an empty array`), et) {
            case Dt.m.PositionKind:
              this.positions = tt;
              break;
            case Dt.m.NormalKind:
              this.normals = tt;
              break;
            case Dt.m.TangentKind:
              this.tangents = tt;
              break;
            case Dt.m.UVKind:
              this.uvs = tt;
              break;
            case Dt.m.UV2Kind:
              this.uvs2 = tt;
              break;
            case Dt.m.UV3Kind:
              this.uvs3 = tt;
              break;
            case Dt.m.UV4Kind:
              this.uvs4 = tt;
              break;
            case Dt.m.UV5Kind:
              this.uvs5 = tt;
              break;
            case Dt.m.UV6Kind:
              this.uvs6 = tt;
              break;
            case Dt.m.ColorKind:
              this.colors = tt;
              break;
            case Dt.m.MatricesIndicesKind:
              this.matricesIndices = tt;
              break;
            case Dt.m.MatricesWeightsKind:
              this.matricesWeights = tt;
              break;
            case Dt.m.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = tt;
              break;
            case Dt.m.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = tt
          }
        }
        applyToMesh(tt, et) {
          return this._applyTo(tt, et, !1), this
        }
        applyToGeometry(tt, et) {
          return this._applyTo(tt, et, !1), this
        }
        updateMesh(tt) {
          return this._update(tt), this
        }
        updateGeometry(tt) {
          return this._update(tt), this
        }* _applyToCoroutine(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (tt.setVerticesData(Dt.m.PositionKind, this.positions, et), Vt && (yield)), this.normals && (tt.setVerticesData(Dt.m.NormalKind, this.normals, et), Vt && (yield)), this.tangents && (tt.setVerticesData(Dt.m.TangentKind, this.tangents, et), Vt && (yield)), this.uvs && (tt.setVerticesData(Dt.m.UVKind, this.uvs, et), Vt && (yield)), this.uvs2 && (tt.setVerticesData(Dt.m.UV2Kind, this.uvs2, et), Vt && (yield)), this.uvs3 && (tt.setVerticesData(Dt.m.UV3Kind, this.uvs3, et), Vt && (yield)), this.uvs4 && (tt.setVerticesData(Dt.m.UV4Kind, this.uvs4, et), Vt && (yield)), this.uvs5 && (tt.setVerticesData(Dt.m.UV5Kind, this.uvs5, et), Vt && (yield)), this.uvs6 && (tt.setVerticesData(Dt.m.UV6Kind, this.uvs6, et), Vt && (yield)), this.colors) {
            const Ot = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            tt.setVerticesData(Dt.m.ColorKind, this.colors, et, Ot), this.hasVertexAlpha && void 0 !== tt.hasVertexAlpha && (tt.hasVertexAlpha = !0), Vt && (yield)
          }
          if (this.matricesIndices && (tt.setVerticesData(Dt.m.MatricesIndicesKind, this.matricesIndices, et), Vt && (yield)), this.matricesWeights && (tt.setVerticesData(Dt.m.MatricesWeightsKind, this.matricesWeights, et), Vt && (yield)), this.matricesIndicesExtra && (tt.setVerticesData(Dt.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, et), Vt && (yield)), this.matricesWeightsExtra && (tt.setVerticesData(Dt.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, et), Vt && (yield)), this.indices ? (tt.setIndices(this.indices, null, et), Vt && (yield)) : tt.setIndices([], null), tt.vJ && this.materialInfos && this.materialInfos.length > 1) {
            const et = tt;
            et.vJ = [];
            for (const tt of this.materialInfos) new lt.d(tt.materialIndex, tt.verticesStart, tt.verticesCount, tt.indexStart, tt.indexCount, et)
          }
          return this
        }
        _update(tt, et, Vt) {
          return this.positions && tt.updateVerticesData(Dt.m.PositionKind, this.positions, et, Vt), this.normals && tt.updateVerticesData(Dt.m.NormalKind, this.normals, et, Vt), this.tangents && tt.updateVerticesData(Dt.m.TangentKind, this.tangents, et, Vt), this.uvs && tt.updateVerticesData(Dt.m.UVKind, this.uvs, et, Vt), this.uvs2 && tt.updateVerticesData(Dt.m.UV2Kind, this.uvs2, et, Vt), this.uvs3 && tt.updateVerticesData(Dt.m.UV3Kind, this.uvs3, et, Vt), this.uvs4 && tt.updateVerticesData(Dt.m.UV4Kind, this.uvs4, et, Vt), this.uvs5 && tt.updateVerticesData(Dt.m.UV5Kind, this.uvs5, et, Vt), this.uvs6 && tt.updateVerticesData(Dt.m.UV6Kind, this.uvs6, et, Vt), this.colors && tt.updateVerticesData(Dt.m.ColorKind, this.colors, et, Vt), this.matricesIndices && tt.updateVerticesData(Dt.m.MatricesIndicesKind, this.matricesIndices, et, Vt), this.matricesWeights && tt.updateVerticesData(Dt.m.MatricesWeightsKind, this.matricesWeights, et, Vt), this.matricesIndicesExtra && tt.updateVerticesData(Dt.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, et, Vt), this.matricesWeightsExtra && tt.updateVerticesData(Dt.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, et, Vt), this.indices && tt.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length;
          const Dt = qt.k.uf[0],
            mt = qt.k.uf[1];
          for (let dt = Vt; dt < Vt + Ot; dt += 3) qt.n.FromArrayToRef(tt, dt, Dt), qt.n.TransformCoordinatesToRef(Dt, et, mt), tt[dt] = mt.x, tt[dt + 1] = mt.y, tt[dt + 2] = mt.z
        }
        static _TransformVector3Normals(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length;
          const Dt = qt.k.uf[0],
            mt = qt.k.uf[1];
          for (let dt = Vt; dt < Vt + Ot; dt += 3) qt.n.FromArrayToRef(tt, dt, Dt), qt.n.TransformNormalToRef(Dt, et, mt), tt[dt] = mt.x, tt[dt + 1] = mt.y, tt[dt + 2] = mt.z
        }
        static _TransformVector4Normals(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length;
          const Dt = qt.k.Vector4[0],
            mt = qt.k.Vector4[1];
          for (let dt = Vt; dt < Vt + Ot; dt += 4) qt.r.FromArrayToRef(tt, dt, Dt), qt.r.TransformNormalToRef(Dt, et, mt), tt[dt] = mt.x, tt[dt + 1] = mt.y, tt[dt + 2] = mt.z, tt[dt + 3] = mt.w
        }
        static _FlipFaces(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt.length;
          for (let Ot = et; Ot < et + Vt; Ot += 3) {
            const et = tt[Ot + 1];
            tt[Ot + 1] = tt[Ot + 2], tt[Ot + 2] = et
          }
        }
        transform(et) {
          const Vt = et.determinant() < 0;
          return this.positions && tt._TransformVector3Coordinates(this.positions, et), this.normals && tt._TransformVector3Normals(this.normals, et), this.tangents && tt._TransformVector4Normals(this.tangents, et), Vt && this.indices && tt._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const et = [];
          for (const Vt of this.materialInfos) {
            const Ot = new tt;
            if (this.positions && (Ot.positions = this.positions.slice(3 * Vt.verticesStart, 3 * (Vt.verticesCount + Vt.verticesStart))), this.normals && (Ot.normals = this.normals.slice(3 * Vt.verticesStart, 3 * (Vt.verticesCount + Vt.verticesStart))), this.tangents && (Ot.tangents = this.tangents.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.colors && (Ot.colors = this.colors.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.uvs && (Ot.uvs = this.uvs.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.uvs2 && (Ot.uvs2 = this.uvs2.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.uvs3 && (Ot.uvs3 = this.uvs3.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.uvs4 && (Ot.uvs4 = this.uvs4.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.uvs5 && (Ot.uvs5 = this.uvs5.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.uvs6 && (Ot.uvs6 = this.uvs6.slice(2 * Vt.verticesStart, 2 * (Vt.verticesCount + Vt.verticesStart))), this.matricesIndices && (Ot.matricesIndices = this.matricesIndices.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.matricesIndicesExtra && (Ot.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.matricesWeights && (Ot.matricesWeights = this.matricesWeights.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.matricesWeightsExtra && (Ot.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Vt.verticesStart, 4 * (Vt.verticesCount + Vt.verticesStart))), this.indices) {
              Ot.indices = [];
              for (let tt = Vt.indexStart; tt < Vt.indexStart + Vt.indexCount; tt++) Ot.indices.push(this.indices[tt] - Vt.verticesStart)
            }
            const qt = new Et;
            qt.indexStart = 0, qt.indexCount = Ot.indices ? Ot.indices.length : 0, qt.materialIndex = Vt.materialIndex, qt.verticesStart = 0, qt.verticesCount = (Ot.positions ? Ot.positions.length : 0) / 3, Ot.materialInfos = [qt], et.push(Ot)
          }
          return et
        }
        merge(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Dt = Array.isArray(tt) ? tt.map((tt => ({
            vertexData: tt
          }))) : [{
            vertexData: tt
          }];
          return (0, Xt.k)(this._mergeCoroutine(void 0, Dt, et, !1, Vt, Ot, qt))
        }* _mergeCoroutine(et, Vt) {
          let Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            qt = arguments.length > 3 ? arguments[3] : void 0,
            mt = arguments.length > 4 ? arguments[4] : void 0,
            dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            jt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Ht = Vt.map((tt => tt.vertexData)),
            Xt = this;
          if (jt)
            for (const tt of Ht) tt && (tt._validate(), !this.normals && tt.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && tt.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && tt.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && tt.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && tt.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && tt.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && tt.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && tt.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && tt.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && tt.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && tt.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && tt.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && tt.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const tt of Ht)
            if (tt)
              if (jt) this.normals && !tt.normals && (tt.normals = new Float32Array(tt.positions.length)), this.tangents && !tt.tangents && (tt.tangents = new Float32Array(tt.positions.length / 3 * 4)), this.uvs && !tt.uvs && (tt.uvs = new Float32Array(tt.positions.length / 3 * 2)), this.uvs2 && !tt.uvs2 && (tt.uvs2 = new Float32Array(tt.positions.length / 3 * 2)), this.uvs3 && !tt.uvs3 && (tt.uvs3 = new Float32Array(tt.positions.length / 3 * 2)), this.uvs4 && !tt.uvs4 && (tt.uvs4 = new Float32Array(tt.positions.length / 3 * 2)), this.uvs5 && !tt.uvs5 && (tt.uvs5 = new Float32Array(tt.positions.length / 3 * 2)), this.uvs6 && !tt.uvs6 && (tt.uvs6 = new Float32Array(tt.positions.length / 3 * 2)), this.colors && !tt.colors && (tt.colors = new Float32Array(tt.positions.length / 3 * 4), tt.colors.fill(1)), this.matricesIndices && !tt.matricesIndices && (tt.matricesIndices = new Float32Array(tt.positions.length / 3 * 4)), this.matricesWeights && !tt.matricesWeights && (tt.matricesWeights = new Float32Array(tt.positions.length / 3 * 4)), this.matricesIndicesExtra && !tt.matricesIndicesExtra && (tt.matricesIndicesExtra = new Float32Array(tt.positions.length / 3 * 4)), this.matricesWeightsExtra && !tt.matricesWeightsExtra && (tt.matricesWeightsExtra = new Float32Array(tt.positions.length / 3 * 4));
              else if (tt._validate(), !this.normals !== !tt.normals || !this.tangents !== !tt.tangents || !this.uvs !== !tt.uvs || !this.uvs2 !== !tt.uvs2 || !this.uvs3 !== !tt.uvs3 || !this.uvs4 !== !tt.uvs4 || !this.uvs5 !== !tt.uvs5 || !this.uvs6 !== !tt.uvs6 || !this.colors !== !tt.colors || !this.matricesIndices !== !tt.matricesIndices || !this.matricesWeights !== !tt.matricesWeights || !this.matricesIndicesExtra !== !tt.matricesIndicesExtra || !this.matricesWeightsExtra !== !tt.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (dt) {
            let tt, Ot = 0,
              qt = 0;
            const Dt = [];
            let mt = null;
            const dt = [];
            for (const Vt of this.splitBasedOnMaterialID()) dt.push({
              vertexData: Vt,
              transform: et
            });
            for (const et of Vt)
              if (et.vertexData)
                for (const tt of et.vertexData.splitBasedOnMaterialID()) dt.push({
                  vertexData: tt,
                  transform: et.transform
                });
            dt.sort(((tt, et) => {
              const Vt = tt.vertexData.materialInfos ? tt.vertexData.materialInfos[0].materialIndex : 0,
                Ot = et.vertexData.materialInfos ? et.vertexData.materialInfos[0].materialIndex : 0;
              return Vt > Ot ? 1 : Vt === Ot ? 0 : -1
            }));
            for (const et of dt) {
              const Vt = et.vertexData;
              if (tt = Vt.materialInfos ? Vt.materialInfos[0].materialIndex : 0, mt && mt.materialIndex === tt) mt.indexCount += Vt.indices.length, mt.verticesCount += Vt.positions.length / 3;
              else {
                const et = new Et;
                et.materialIndex = tt, et.indexStart = Ot, et.indexCount = Vt.indices.length, et.verticesStart = qt, et.verticesCount = Vt.positions.length / 3, Dt.push(et), mt = et
              }
              Ot += Vt.indices.length, qt += Vt.positions.length / 3
            }
            const jt = dt.splice(0, 1)[0];
            Xt = jt.vertexData, et = jt.transform, Ht = dt.map((tt => tt.vertexData)), Vt = dt, this.materialInfos = Dt
          }
          const Qt = Ht.reduce(((tt, et) => tt + (et.indices?.length ?? 0)), Xt.indices?.length ?? 0);
          let lt = mt || Ht.some((tt => tt.indices === Xt.indices)) ? Xt.indices?.slice() : Xt.indices;
          if (Qt > 0) {
            let Dt = lt?.length ?? 0;
            if (lt || (lt = new Array(Qt)), lt.length !== Qt) {
              if (Array.isArray(lt)) lt.length = Qt;
              else {
                const tt = Ot || lt instanceof Uint32Array ? new Uint32Array(Qt) : new Uint16Array(Qt);
                tt.set(lt), lt = tt
              }
              et && et.determinant() < 0 && tt._FlipFaces(lt, 0, Dt)
            }
            let mt = Xt.positions ? Xt.positions.length / 3 : 0;
            for (const {
                vertexData: et,
                transform: Ot
              }
              of Vt)
              if (et.indices) {
                for (let tt = 0; tt < et.indices.length; tt++) lt[Dt + tt] = et.indices[tt] + mt;
                Ot && Ot.determinant() < 0 && tt._FlipFaces(lt, Dt, et.indices.length), mt += et.positions.length / 3, Dt += et.indices.length, qt && (yield)
              }
          }
          return this.indices = lt, this.positions = tt._MergeElement(Dt.m.PositionKind, Xt.positions, et, Vt.map((tt => [tt.vertexData.positions, tt.transform]))), qt && (yield), Xt.normals && (this.normals = tt._MergeElement(Dt.m.NormalKind, Xt.normals, et, Vt.map((tt => [tt.vertexData.normals, tt.transform]))), qt && (yield)), Xt.tangents && (this.tangents = tt._MergeElement(Dt.m.TangentKind, Xt.tangents, et, Vt.map((tt => [tt.vertexData.tangents, tt.transform]))), qt && (yield)), Xt.uvs && (this.uvs = tt._MergeElement(Dt.m.UVKind, Xt.uvs, et, Vt.map((tt => [tt.vertexData.uvs, tt.transform]))), qt && (yield)), Xt.uvs2 && (this.uvs2 = tt._MergeElement(Dt.m.UV2Kind, Xt.uvs2, et, Vt.map((tt => [tt.vertexData.uvs2, tt.transform]))), qt && (yield)), Xt.uvs3 && (this.uvs3 = tt._MergeElement(Dt.m.UV3Kind, Xt.uvs3, et, Vt.map((tt => [tt.vertexData.uvs3, tt.transform]))), qt && (yield)), Xt.uvs4 && (this.uvs4 = tt._MergeElement(Dt.m.UV4Kind, Xt.uvs4, et, Vt.map((tt => [tt.vertexData.uvs4, tt.transform]))), qt && (yield)), Xt.uvs5 && (this.uvs5 = tt._MergeElement(Dt.m.UV5Kind, Xt.uvs5, et, Vt.map((tt => [tt.vertexData.uvs5, tt.transform]))), qt && (yield)), Xt.uvs6 && (this.uvs6 = tt._MergeElement(Dt.m.UV6Kind, Xt.uvs6, et, Vt.map((tt => [tt.vertexData.uvs6, tt.transform]))), qt && (yield)), Xt.colors && (this.colors = tt._MergeElement(Dt.m.ColorKind, Xt.colors, et, Vt.map((tt => [tt.vertexData.colors, tt.transform]))), (void 0 !== Xt.hasVertexAlpha || Vt.some((tt => void 0 !== tt.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Xt.hasVertexAlpha || Vt.some((tt => tt.vertexData.hasVertexAlpha))), qt && (yield)), Xt.matricesIndices && (this.matricesIndices = tt._MergeElement(Dt.m.MatricesIndicesKind, Xt.matricesIndices, et, Vt.map((tt => [tt.vertexData.matricesIndices, tt.transform]))), qt && (yield)), Xt.matricesWeights && (this.matricesWeights = tt._MergeElement(Dt.m.MatricesWeightsKind, Xt.matricesWeights, et, Vt.map((tt => [tt.vertexData.matricesWeights, tt.transform]))), qt && (yield)), Xt.matricesIndicesExtra && (this.matricesIndicesExtra = tt._MergeElement(Dt.m.MatricesIndicesExtraKind, Xt.matricesIndicesExtra, et, Vt.map((tt => [tt.vertexData.matricesIndicesExtra, tt.transform]))), qt && (yield)), Xt.matricesWeightsExtra && (this.matricesWeightsExtra = tt._MergeElement(Dt.m.MatricesWeightsExtraKind, Xt.matricesWeightsExtra, et, Vt.map((tt => [tt.vertexData.matricesWeightsExtra, tt.transform])))), this
        }
        static _MergeElement(et, Vt, Ot, qt) {
          const mt = qt.filter((tt => null !== tt[0] && void 0 !== tt[0]));
          if (!Vt && 0 == mt.length) return Vt;
          if (!Vt) return this._MergeElement(et, mt[0][0], mt[0][1], mt.slice(1));
          const dt = mt.reduce(((tt, et) => tt + et[0].length), Vt.length),
            jt = et === Dt.m.PositionKind ? tt._TransformVector3Coordinates : et === Dt.m.NormalKind ? tt._TransformVector3Normals : et === Dt.m.TangentKind ? tt._TransformVector4Normals : () => {};
          if (Vt instanceof Float32Array) {
            const tt = new Float32Array(dt);
            tt.set(Vt), Ot && jt(tt, Ot, 0, Vt.length);
            let et = Vt.length;
            for (const [Vt, Ot] of mt) tt.set(Vt, et), Ot && jt(tt, Ot, et, Vt.length), et += Vt.length;
            return tt
          } {
            const tt = new Array(dt);
            for (let Ot = 0; Ot < Vt.length; Ot++) tt[Ot] = Vt[Ot];
            Ot && jt(tt, Ot, 0, Vt.length);
            let et = Vt.length;
            for (const [Vt, Ot] of mt) {
              for (let Ot = 0; Ot < Vt.length; Ot++) tt[et + Ot] = Vt[Ot];
              Ot && jt(tt, Ot, et, Vt.length), et += Vt.length
            }
            return tt
          }
        }
        _validate() {
          if (!this.positions) throw new Qt.f("Positions are required", Qt.e.MeshInvalidPositionsError);
          const tt = (tt, et) => {
              const Vt = (0, Dt.j)(tt);
              if (et.length % Vt !== 0) throw new Error("The " + tt + "s array count must be a multiple of " + Vt);
              return et.length / Vt
            },
            et = tt(Dt.m.PositionKind, this.positions),
            Vt = (Vt, Ot) => {
              const qt = tt(Vt, Ot);
              if (qt !== et) throw new Error("The " + Vt + "s element count (" + qt + ") does not match the positions count (" + et + ")")
            };
          this.normals && Vt(Dt.m.NormalKind, this.normals), this.tangents && Vt(Dt.m.TangentKind, this.tangents), this.uvs && Vt(Dt.m.UVKind, this.uvs), this.uvs2 && Vt(Dt.m.UV2Kind, this.uvs2), this.uvs3 && Vt(Dt.m.UV3Kind, this.uvs3), this.uvs4 && Vt(Dt.m.UV4Kind, this.uvs4), this.uvs5 && Vt(Dt.m.UV5Kind, this.uvs5), this.uvs6 && Vt(Dt.m.UV6Kind, this.uvs6), this.colors && Vt(Dt.m.ColorKind, this.colors), this.matricesIndices && Vt(Dt.m.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Vt(Dt.m.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Vt(Dt.m.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Vt(Dt.m.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const et = this.serialize();
          return tt.Parse(et)
        }
        serialize() {
          const tt = {};
          if (this.positions && (tt.positions = Array.from(this.positions)), this.normals && (tt.normals = Array.from(this.normals)), this.tangents && (tt.tangents = Array.from(this.tangents)), this.uvs && (tt.uvs = Array.from(this.uvs)), this.uvs2 && (tt.uvs2 = Array.from(this.uvs2)), this.uvs3 && (tt.uvs3 = Array.from(this.uvs3)), this.uvs4 && (tt.uvs4 = Array.from(this.uvs4)), this.uvs5 && (tt.uvs5 = Array.from(this.uvs5)), this.uvs6 && (tt.uvs6 = Array.from(this.uvs6)), this.colors && (tt.colors = Array.from(this.colors), tt.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (tt.matricesIndices = Array.from(this.matricesIndices), tt.matricesIndicesExpanded = !0), this.matricesWeights && (tt.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (tt.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), tt.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (tt.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), tt.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            tt.materialInfos = [];
            for (const et of this.materialInfos) {
              const Vt = {
                indexStart: et.indexStart,
                indexCount: et.indexCount,
                materialIndex: et.materialIndex,
                verticesStart: et.verticesStart,
                verticesCount: et.verticesCount
              };
              tt.materialInfos.push(Vt)
            }
          }
          return tt
        }
        static ExtractFromMesh(et, Vt, Ot) {
          return tt._ExtractFrom(et, Vt, Ot)
        }
        static ExtractFromGeometry(et, Vt, Ot) {
          return tt._ExtractFrom(et, Vt, Ot)
        }
        static _ExtractFrom(et, Vt, Ot) {
          const qt = new tt;
          if (et.isVerticesDataPresent(Dt.m.PositionKind) && (qt.positions = et.getVerticesData(Dt.m.PositionKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.NormalKind) && (qt.normals = et.getVerticesData(Dt.m.NormalKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.TangentKind) && (qt.tangents = et.getVerticesData(Dt.m.TangentKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UVKind) && (qt.uvs = et.getVerticesData(Dt.m.UVKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UV2Kind) && (qt.uvs2 = et.getVerticesData(Dt.m.UV2Kind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UV3Kind) && (qt.uvs3 = et.getVerticesData(Dt.m.UV3Kind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UV4Kind) && (qt.uvs4 = et.getVerticesData(Dt.m.UV4Kind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UV5Kind) && (qt.uvs5 = et.getVerticesData(Dt.m.UV5Kind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.UV6Kind) && (qt.uvs6 = et.getVerticesData(Dt.m.UV6Kind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.ColorKind)) {
            const tt = et.geometry || et,
              mt = tt.getVertexBuffer(Dt.m.ColorKind),
              dt = tt.getVerticesData(Dt.m.ColorKind, Vt, Ot);
            if (3 === mt.getSize()) {
              const tt = new Float32Array(4 * dt.length / 3);
              for (let et = 0, Vt = 0; et < dt.length; et += 3, Vt += 4) tt[Vt] = dt[et], tt[Vt + 1] = dt[et + 1], tt[Vt + 2] = dt[et + 2], tt[Vt + 3] = 1;
              qt.colors = tt
            } else {
              if (4 !== mt.getSize()) throw new Error(`Unexpected number of color components: ${mt.getSize()}`);
              qt.colors = dt
            }
          }
          return et.isVerticesDataPresent(Dt.m.MatricesIndicesKind) && (qt.matricesIndices = et.getVerticesData(Dt.m.MatricesIndicesKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.MatricesWeightsKind) && (qt.matricesWeights = et.getVerticesData(Dt.m.MatricesWeightsKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.MatricesIndicesExtraKind) && (qt.matricesIndicesExtra = et.getVerticesData(Dt.m.MatricesIndicesExtraKind, Vt, Ot)), et.isVerticesDataPresent(Dt.m.MatricesWeightsExtraKind) && (qt.matricesWeightsExtra = et.getVerticesData(Dt.m.MatricesWeightsExtraKind, Vt, Ot)), qt.indices = et.zOt(Vt, Ot), qt
        }
        static CreateRibbon(tt) {
          throw (0, mt.e)("ribbonBuilder")
        }
        static CreateBox(tt) {
          throw (0, mt.e)("boxBuilder")
        }
        static CreateTiledBox(tt) {
          throw (0, mt.e)("tiledBoxBuilder")
        }
        static CreateTiledPlane(tt) {
          throw (0, mt.e)("tiledPlaneBuilder")
        }
        static CreateSphere(tt) {
          throw (0, mt.e)("sphereBuilder")
        }
        static CreateCylinder(tt) {
          throw (0, mt.e)("cylinderBuilder")
        }
        static CreateTorus(tt) {
          throw (0, mt.e)("torusBuilder")
        }
        static CreateLineSystem(tt) {
          throw (0, mt.e)("linesBuilder")
        }
        static CreateDashedLines(tt) {
          throw (0, mt.e)("linesBuilder")
        }
        static CreateGround(tt) {
          throw (0, mt.e)("groundBuilder")
        }
        static CreateTiledGround(tt) {
          throw (0, mt.e)("groundBuilder")
        }
        static CreateGroundFromHeightMap(tt) {
          throw (0, mt.e)("groundBuilder")
        }
        static CreatePlane(tt) {
          throw (0, mt.e)("planeBuilder")
        }
        static CreateDisc(tt) {
          throw (0, mt.e)("discBuilder")
        }
        static CreatePolygon(tt, et, Vt, Ot, qt, Dt, dt) {
          throw (0, mt.e)("polygonBuilder")
        }
        static CreateIcoSphere(tt) {
          throw (0, mt.e)("icoSphereBuilder")
        }
        static CreatePolyhedron(tt) {
          throw (0, mt.e)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || qt.n.Up();
          throw (0, mt.e)("capsuleBuilder")
        }
        static CreateTorusKnot(tt) {
          throw (0, mt.e)("torusKnotBuilder")
        }
        static ComputeNormals(tt, et, Vt, Ot) {
          let Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt = !1,
            Wt = !1,
            St = !1,
            ct = !1,
            Rt = 1,
            It = 0,
            Pt = null;
          Ot && (vt = !!Ot.facetNormals, Wt = !!Ot.facetPositions, St = !!Ot.facetPartitioning, Rt = !0 === Ot.useRightHandedSystem ? -1 : 1, It = Ot.ratio || 0, ct = !!Ot.depthSort, Pt = Ot.distanceTo, ct && void 0 === Pt && (Pt = qt.n.Zero()));
          let Zt = 0,
            Lt = 0,
            Ft = 0,
            kt = 0;
          for (St && Ot && Ot.bbSize && (Zt = Ot.subDiv.X * It / Ot.bbSize.x, Lt = Ot.subDiv.Y * It / Ot.bbSize.y, Ft = Ot.subDiv.Z * It / Ot.bbSize.z, kt = Ot.subDiv.max * Ot.subDiv.max, Ot.facetPartitioning.length = 0), Dt = 0; Dt < tt.length; Dt++) Vt[Dt] = 0;
          const Gt = et.length / 3 | 0;
          for (Dt = 0; Dt < Gt; Dt++) {
            if (yt = 3 * et[3 * Dt], Nt = yt + 1, Mt = yt + 2, bt = 3 * et[3 * Dt + 1], Jt = bt + 1, Ct = bt + 2, ut = 3 * et[3 * Dt + 2], Kt = ut + 1, ht = ut + 2, mt = tt[yt] - tt[bt], dt = tt[Nt] - tt[Jt], jt = tt[Mt] - tt[Ct], Ht = tt[ut] - tt[bt], Xt = tt[Kt] - tt[Jt], Qt = tt[ht] - tt[Ct], lt = Rt * (dt * Qt - jt * Xt), Et = Rt * (jt * Ht - mt * Qt), ft = Rt * (mt * Xt - dt * Ht), wt = Math.sqrt(lt * lt + Et * Et + ft * ft), wt = 0 === wt ? 1 : wt, lt /= wt, Et /= wt, ft /= wt, vt && Ot && (Ot.facetNormals[Dt].x = lt, Ot.facetNormals[Dt].y = Et, Ot.facetNormals[Dt].z = ft), Wt && Ot && (Ot.facetPositions[Dt].x = (tt[yt] + tt[bt] + tt[ut]) / 3, Ot.facetPositions[Dt].y = (tt[Nt] + tt[Jt] + tt[Kt]) / 3, Ot.facetPositions[Dt].z = (tt[Mt] + tt[Ct] + tt[ht]) / 3), St && Ot) {
              const et = Math.floor((Ot.facetPositions[Dt].x - Ot.bInfo.minimum.x * It) * Zt),
                Vt = Math.floor((Ot.facetPositions[Dt].y - Ot.bInfo.minimum.y * It) * Lt),
                qt = Math.floor((Ot.facetPositions[Dt].z - Ot.bInfo.minimum.z * It) * Ft),
                mt = Math.floor((tt[yt] - Ot.bInfo.minimum.x * It) * Zt),
                dt = Math.floor((tt[Nt] - Ot.bInfo.minimum.y * It) * Lt),
                jt = Math.floor((tt[Mt] - Ot.bInfo.minimum.z * It) * Ft),
                Ht = Math.floor((tt[bt] - Ot.bInfo.minimum.x * It) * Zt),
                Xt = Math.floor((tt[Jt] - Ot.bInfo.minimum.y * It) * Lt),
                Qt = Math.floor((tt[Ct] - Ot.bInfo.minimum.z * It) * Ft),
                lt = Math.floor((tt[ut] - Ot.bInfo.minimum.x * It) * Zt),
                Et = Math.floor((tt[Kt] - Ot.bInfo.minimum.y * It) * Lt),
                ft = Math.floor((tt[ht] - Ot.bInfo.minimum.z * It) * Ft),
                wt = mt + Ot.subDiv.max * dt + kt * jt,
                vt = Ht + Ot.subDiv.max * Xt + kt * Qt,
                Wt = lt + Ot.subDiv.max * Et + kt * ft,
                St = et + Ot.subDiv.max * Vt + kt * qt;
              Ot.facetPartitioning[St] = Ot.facetPartitioning[St] ? Ot.facetPartitioning[St] : [], Ot.facetPartitioning[wt] = Ot.facetPartitioning[wt] ? Ot.facetPartitioning[wt] : [], Ot.facetPartitioning[vt] = Ot.facetPartitioning[vt] ? Ot.facetPartitioning[vt] : [], Ot.facetPartitioning[Wt] = Ot.facetPartitioning[Wt] ? Ot.facetPartitioning[Wt] : [], Ot.facetPartitioning[wt].push(Dt), vt != wt && Ot.facetPartitioning[vt].push(Dt), Wt != vt && Wt != wt && Ot.facetPartitioning[Wt].push(Dt), St != wt && St != vt && St != Wt && Ot.facetPartitioning[St].push(Dt)
            }
            if (ct && Ot && Ot.facetPositions) {
              const tt = Ot.depthSortedFacets[Dt];
              tt.ind = 3 * Dt, tt.sqDistance = qt.n.DistanceSquared(Ot.facetPositions[Dt], Pt)
            }
            Vt[yt] += lt, Vt[Nt] += Et, Vt[Mt] += ft, Vt[bt] += lt, Vt[Jt] += Et, Vt[Ct] += ft, Vt[ut] += lt, Vt[Kt] += Et, Vt[ht] += ft
          }
          for (Dt = 0; Dt < Vt.length / 3; Dt++) lt = Vt[3 * Dt], Et = Vt[3 * Dt + 1], ft = Vt[3 * Dt + 2], wt = Math.sqrt(lt * lt + Et * Et + ft * ft), wt = 0 === wt ? 1 : wt, lt /= wt, Et /= wt, ft /= wt, Vt[3 * Dt] = lt, Vt[3 * Dt + 1] = Et, Vt[3 * Dt + 2] = ft
        }
        static _ComputeSides(et, Vt, Ot, Dt, mt, dt, jt) {
          const Ht = Ot.length,
            Xt = Dt.length;
          let Qt, lt;
          switch (et = et || tt.DEFAULTSIDE) {
            case tt.FRONTSIDE:
              break;
            case tt.BACKSIDE:
              for (Qt = 0; Qt < Ht; Qt += 3) {
                const tt = Ot[Qt];
                Ot[Qt] = Ot[Qt + 2], Ot[Qt + 2] = tt
              }
              for (lt = 0; lt < Xt; lt++) Dt[lt] = -Dt[lt];
              break;
            case tt.DOUBLESIDE: {
              const tt = Vt.length,
                et = tt / 3;
              for (let Ot = 0; Ot < tt; Ot++) Vt[tt + Ot] = Vt[Ot];
              for (Qt = 0; Qt < Ht; Qt += 3) Ot[Qt + Ht] = Ot[Qt + 2] + et, Ot[Qt + 1 + Ht] = Ot[Qt + 1] + et, Ot[Qt + 2 + Ht] = Ot[Qt] + et;
              for (lt = 0; lt < Xt; lt++) Dt[Xt + lt] = -Dt[lt];
              const Et = mt.length;
              let ft;
              for (ft = 0; ft < Et; ft++) mt[ft + Et] = mt[ft];
              for (dt = dt || new qt.r(0, 0, 1, 1), jt = jt || new qt.r(0, 0, 1, 1), ft = 0, Qt = 0; Qt < Et / 2; Qt++) mt[ft] = dt.x + (dt.z - dt.x) * mt[ft], mt[ft + 1] = dt.y + (dt.w - dt.y) * mt[ft + 1], mt[ft + Et] = jt.x + (jt.z - jt.x) * mt[ft + Et], mt[ft + Et + 1] = jt.y + (jt.w - jt.y) * mt[ft + Et + 1], ft += 2;
              break
            }
          }
        }
        static Parse(et) {
          const Vt = new tt,
            Ot = et.positions;
          Ot && Vt.set(Ot, Dt.m.PositionKind);
          const qt = et.normals;
          qt && Vt.set(qt, Dt.m.NormalKind);
          const mt = et.tangents;
          mt && Vt.set(mt, Dt.m.TangentKind);
          const jt = et.uvs;
          jt && Vt.set(jt, Dt.m.UVKind);
          const Ht = et.uvs2;
          Ht && Vt.set(Ht, Dt.m.UV2Kind);
          const Xt = et.uvs3;
          Xt && Vt.set(Xt, Dt.m.UV3Kind);
          const Qt = et.uvs4;
          Qt && Vt.set(Qt, Dt.m.UV4Kind);
          const lt = et.uvs5;
          lt && Vt.set(lt, Dt.m.UV5Kind);
          const ft = et.uvs6;
          ft && Vt.set(ft, Dt.m.UV6Kind);
          const wt = et.colors;
          wt && (Vt.set(dt.c.CheckColors4(wt, Ot.length / 3), Dt.m.ColorKind), void 0 !== et.hasVertexAlpha && (Vt.hasVertexAlpha = et.hasVertexAlpha));
          const yt = et.matricesIndices;
          yt && Vt.set(yt, Dt.m.MatricesIndicesKind);
          const Nt = et.matricesWeights;
          Nt && Vt.set(Nt, Dt.m.MatricesWeightsKind);
          const Mt = et.indices;
          Mt && (Vt.indices = Mt);
          const bt = et.materialInfos;
          if (bt) {
            Vt.materialInfos = [];
            for (const tt of bt) {
              const et = new Et;
              et.indexCount = tt.indexCount, et.indexStart = tt.indexStart, et.verticesCount = tt.verticesCount, et.verticesStart = tt.verticesStart, et.materialIndex = tt.materialIndex, Vt.materialInfos.push(et)
            }
          }
          return Vt
        }
        static ImportVertexData(et, Vt) {
          const Ot = tt.Parse(et);
          Vt.setAllVerticesData(Ot, et.updatable)
        }
      }, (() => {
        const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [Ht.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Vt = [Ht.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ft = [Ht.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], wt = [Ht.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ot.l)(tt, null, et, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: tt => "_TransformVector3Coordinates" in tt,
            get: tt => tt._TransformVector3Coordinates
          },
          metadata: qt
        }, null, yt), (0, Ot.l)(tt, null, Vt, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: tt => "_TransformVector3Normals" in tt,
            get: tt => tt._TransformVector3Normals
          },
          metadata: qt
        }, null, yt), (0, Ot.l)(tt, null, ft, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: tt => "_TransformVector4Normals" in tt,
            get: tt => tt._TransformVector4Normals
          },
          metadata: qt
        }, null, yt), (0, Ot.l)(tt, null, wt, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: tt => "_FlipFaces" in tt,
            get: tt => tt._FlipFaces
          },
          metadata: qt
        }, null, yt), qt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qt
        })
      })(), tt.FRONTSIDE = ((0, Ot.m)(tt, yt), 0), tt.BACKSIDE = 1, tt.DOUBLESIDE = 2, tt.DEFAULTSIDE = 0, tt._UniqueIdGenerator = 0, tt
    })()
  },
  40669: (tt, et, Vt) => {
    var Ot = Vt(37336),
      qt = Vt(38899),
      Dt = Vt(40490),
      mt = Vt(40601),
      dt = Vt(40343);
    const jt = "bakedVertexAnimationSettingsInstanced";

    function Ht(tt) {
      const et = tt.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return et instanceof Float32Array || et instanceof Uint16Array
    }

    function Xt(tt, et, Vt, Ot) {
      Vt.S_(Number.POSITIVE_INFINITY), Ot.S_(Number.NEGATIVE_INFINITY);
      for (let qt = 0; qt < 3 * et; qt += 3) {
        const et = tt[qt],
          Dt = tt[qt + 1],
          mt = tt[qt + 2];
        et < Vt.x && (Vt.x = et), Dt < Vt.y && (Vt.y = Dt), mt < Vt.z && (Vt.z = mt), et > Ot.x && (Ot.x = et), Dt > Ot.y && (Ot.y = Dt), mt > Ot.z && (Ot.z = mt)
      }
    }

    function Qt(tt, et, Vt) {
      Vt && (tt.x -= tt.x * Vt.x + Vt.y, tt.y -= tt.y * Vt.x + Vt.y, tt.z -= tt.z * Vt.x + Vt.y, et.x += et.x * Vt.x + Vt.y, et.y += et.y * Vt.x + Vt.y, et.z += et.z * Vt.x + Vt.y)
    }

    function lt(tt, et, Vt, qt, Dt) {
      const mt = Ot.k.uf[7],
        dt = Ot.k.uf[8];
      for (let jt = 0; jt < 2; ++jt)
        for (let Ht = 0; Ht < 2; ++Ht)
          for (let Xt = 0; Xt < 2; ++Xt) mt.set(jt ? et.x : tt.x, Ht ? et.y : tt.y, Xt ? et.z : tt.z), Ot.n.TransformCoordinatesToRef(mt, Vt, dt), qt.minimizeInPlace(dt), Dt.maximizeInPlace(dt)
    }

    function Et(tt, et, Vt, qt, Dt) {
      const mt = Ot.k.uf[7];
      for (let dt = 0; dt < 3 * et; dt += 3) Ot.n.TransformCoordinatesFromFloatsToRef(tt[dt], tt[dt + 1], tt[dt + 2], Vt, mt), qt.minimizeInPlace(mt), Dt.maximizeInPlace(mt)
    }
    let ft = !1;
    ft || (ft = !0, mt.d.prototype.thinInstanceAdd = function(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.vI().Jf().getCaps().instancedArrays) return qt.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(tt) ? tt.length : 1);
      const Vt = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(tt))
        for (let Ot = 0; Ot < tt.length; ++Ot) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, tt[Ot], Ot === tt.length - 1 && et);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, tt, et);
      return Vt
    }, mt.d.prototype.thinInstanceAddSelf = function() {
      let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Ot.c.IdentityReadOnly, tt)
    }, mt.d.prototype.thinInstanceRegisterAttribute = function(tt, et) {
      tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), this.removeVerticesData(tt), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[tt] = et, this._userThinInstanceBuffersStorage.sizes[tt] = et * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[tt] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[tt]), this._userThinInstanceBuffersStorage.vertexBuffers[tt] = new dt.m(this.Jf(), this._userThinInstanceBuffersStorage.data[tt], tt, !0, !1, et, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[tt])
    }, mt.d.prototype.thinInstanceSetMatrixAt = function(tt, et) {
      let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || tt >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Ot = this._thinInstanceDataStorage.matrixData;
      return et.copyToArray(Ot, 16 * tt), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[tt] = et), Vt && (this.O4("matrix"), this.hf || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, mt.d.prototype.thinInstanceSetAttributeAt = function(tt, et, Vt) {
      let Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[tt] || et >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(tt, 0), this._userThinInstanceBuffersStorage.data[tt].set(Vt, et * this._userThinInstanceBuffersStorage.strides[tt]), Ot && this.O4(tt), !0)
    }, Object.defineProperty(mt.d.prototype, "r_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(tt) {
        const et = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        tt <= (et ? et.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = tt)
      },
      enumerable: !0,
      configurable: !0
    }), mt.d.prototype._thinInstanceCreateMatrixBuffer = function(tt, et) {
      let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ot = new dt.b(this.Jf(), et, !Vt, 16, !1, !0);
      for (let qt = 0; qt < 4; qt++) this.setVerticesBuffer(Ot.createVertexBuffer(tt + qt, 4 * qt, 4));
      return Ot
    }, mt.d.prototype.A4 = function(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Vt = Vt || 16, "matrix" === tt) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = et ? et.length : 32 * Vt, this._thinInstanceDataStorage.matrixData = et, this._thinInstanceDataStorage.worldMatrices = null, null !== et ? (this._thinInstanceDataStorage.instancesCount = et.length / Vt, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", et, Ot), this.hf || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.hf || this.refreshBoundingInfo());
      else if ("previousMatrix" === tt) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = et, null !== et && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", et, Ot));
      else if ("splatIndex" === tt && et) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = et.length / Vt, this._userThinInstanceBuffersStorage.data[tt] = et, this._userThinInstanceBuffersStorage.strides[tt] = Vt, this._userThinInstanceBuffersStorage.sizes[tt] = et.length;
        const Ot = new dt.b(this.Jf(), et, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Ot;
        for (let et = 0; et < 4; et++) this.setVerticesBuffer(Ot.createVertexBuffer(tt + et, 4 * et, 4))
      } else tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), null === et ? this._userThinInstanceBuffersStorage?.data[tt] && (this.removeVerticesData(tt), delete this._userThinInstanceBuffersStorage.data[tt], delete this._userThinInstanceBuffersStorage.strides[tt], delete this._userThinInstanceBuffersStorage.sizes[tt], delete this._userThinInstanceBuffersStorage.vertexBuffers[tt]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[tt] = et, this._userThinInstanceBuffersStorage.strides[tt] = Vt, this._userThinInstanceBuffersStorage.sizes[tt] = et.length, this._userThinInstanceBuffersStorage.vertexBuffers[tt] = new dt.m(this.Jf(), et, tt, !Ot, !1, Vt, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[tt]))
    }, mt.d.prototype.O4 = function(tt) {
      "matrix" === tt ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(tt), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === tt ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(tt), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === tt ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[tt], 0, this._thinInstanceDataStorage.instancesCount) : (tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[tt] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[tt].isUpdatable() && this._thinInstanceRecreateBuffer(tt), this._userThinInstanceBuffersStorage.vertexBuffers[tt].updateDirectly(this._userThinInstanceBuffersStorage.data[tt], 0)))
    }, mt.d.prototype.thinInstancePartialBufferUpdate = function(tt, et, Vt) {
      if ("matrix" === tt) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof et ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Vt * Float32Array.BYTES_PER_ELEMENT, 16 * et), 16 * Vt) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(et, Vt));
      else if (tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[tt]) {
        const Ot = this._userThinInstanceBuffersStorage.vertexBuffers[tt];
        if ("number" === typeof et) {
          const Ot = new Float32Array(this._userThinInstanceBuffersStorage.data[tt].buffer, this._userThinInstanceBuffersStorage.data[tt].byteOffset + Vt * this._userThinInstanceBuffersStorage.strides[tt] * Float32Array.BYTES_PER_ELEMENT, et * this._userThinInstanceBuffersStorage.strides[tt]);
          this._userThinInstanceBuffersStorage.vertexBuffers[tt].updateDirectly(Ot, Vt * this._userThinInstanceBuffersStorage.strides[tt])
        } else Ot.updateDirectly(et, Vt)
      }
    }, mt.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const tt = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let et = 0; et < this._thinInstanceDataStorage.instancesCount; ++et) this._thinInstanceDataStorage.worldMatrices[et] = Ot.c.FromArray(tt, 16 * et)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, mt.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const mt = this._thinInstanceDataStorage.boundingVectors;
      if (tt || !this.rawBoundingInfo) {
        if (mt.length = 0, qt && function(tt, et, Vt) {
            const qt = tt._userThinInstanceBuffersStorage,
              mt = qt?.data[jt],
              ft = qt?.strides[jt];
            if (!mt || !ft || ft < 4 || !Ht(tt)) return !1;
            const wt = tt._thinInstanceDataStorage.matrixData;
            if (!wt) return !1;
            const yt = {},
              Nt = Ot.k.Vector4[0],
              Mt = Ot.k.uf[1],
              bt = Ot.k.uf[2],
              Jt = Ot.k.uf[3],
              Ct = Ot.k.uf[4],
              ut = Ot.k.uf[5],
              Kt = Ot.k.uf[6],
              ht = Ot.k.Matrix[2],
              vt = tt.geometry ? tt.geometry.boundingBias : null,
              Wt = tt.getTotalVertices();
            Mt.S_(Number.POSITIVE_INFINITY), bt.S_(Number.NEGATIVE_INFINITY), Jt.S_(Number.POSITIVE_INFINITY), Ct.S_(Number.NEGATIVE_INFINITY);
            for (let Dt = 0; Dt < tt._thinInstanceDataStorage.instancesCount; ++Dt) {
              const et = Dt * ft;
              Nt.set(mt[et], mt[et + 1], mt[et + 2], mt[et + 3]);
              const qt = tt._getData({
                applyMorph: Vt,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Nt,
                updatePositionsArray: !1,
                cache: yt
              }, null, dt.m.PositionKind);
              if (!qt) return !1;
              Xt(qt, Wt, ut, Kt), Qt(ut, Kt, vt), Mt.minimizeInPlace(ut), bt.maximizeInPlace(Kt), Ot.c.FromArrayToRef(wt, 16 * Dt, ht), vt ? lt(ut, Kt, ht, Jt, Ct) : Et(qt, Wt, ht, Jt, Ct)
            }
            return !(!isFinite(Mt.x) || !isFinite(Jt.x)) && (tt.fL().reConstruct(Jt, Ct), tt.rawBoundingInfo = new Dt.c(Mt, bt), function(tt, et) {
              tt.length = 0;
              for (let Vt = 0; Vt < et.boundingBox.vectors.length; ++Vt) tt.push(et.boundingBox.vectors[Vt].clone())
            }(et, tt.rawBoundingInfo), tt._updateBoundingInfo(), !0)
          }(this, mt, Vt)) return;
        qt && this.bakedVertexAnimationManager?.isEnabled && Ht(this) ? this.refreshBoundingInfo({
          applySkeleton: et,
          applyMorph: Vt,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(et, Vt);
        const tt = this.fL();
        this.rawBoundingInfo = new Dt.c(tt.minimum, tt.maximum)
      }
      const ft = this.fL(),
        wt = this._thinInstanceDataStorage.matrixData;
      if (0 === mt.length)
        for (let Ot = 0; Ot < ft.boundingBox.vectors.length; ++Ot) mt.push(ft.boundingBox.vectors[Ot].clone());
      Ot.k.uf[0].S_(Number.POSITIVE_INFINITY), Ot.k.uf[1].S_(Number.NEGATIVE_INFINITY);
      for (let Dt = 0; Dt < this._thinInstanceDataStorage.instancesCount; ++Dt) {
        Ot.c.FromArrayToRef(wt, 16 * Dt, Ot.k.Matrix[0]);
        for (let tt = 0; tt < mt.length; ++tt) Ot.n.TransformCoordinatesToRef(mt[tt], Ot.k.Matrix[0], Ot.k.uf[2]), Ot.k.uf[0].minimizeInPlace(Ot.k.uf[2]), Ot.k.uf[1].maximizeInPlace(Ot.k.uf[2])
      }
      ft.reConstruct(Ot.k.uf[0], Ot.k.uf[1]), this._updateBoundingInfo()
    }, mt.d.prototype._thinInstanceRecreateBuffer = function(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === tt ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, et)) : "previousMatrix" === tt ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, et)) : (tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[tt]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[tt] = new dt.m(this.Jf(), this._userThinInstanceBuffersStorage.data[tt], tt, !et, !1, this._userThinInstanceBuffersStorage.strides[tt], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[tt]))
    }, mt.d.prototype._thinInstanceUpdateBufferSize = function(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      tt === dt.m.ColorKind && (tt = dt.m.ColorInstanceKind);
      const Vt = "matrix" === tt;
      if (!Vt && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[tt])) return;
      const Ot = Vt ? 16 : this._userThinInstanceBuffersStorage.strides[tt],
        qt = Vt ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[tt];
      let Dt = Vt ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[tt];
      const mt = (this._thinInstanceDataStorage.instancesCount + et) * Ot;
      let jt = qt;
      for (; jt < mt;) jt *= 2;
      if (!Dt || qt != jt) {
        if (Dt) {
          const tt = new Float32Array(jt);
          tt.set(Dt, 0), Dt = tt
        } else Dt = new Float32Array(jt);
        Vt ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Dt, !1), this._thinInstanceDataStorage.matrixData = Dt, this._thinInstanceDataStorage.matrixBufferSize = jt, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Dt, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[tt]?.dispose(), this._userThinInstanceBuffersStorage.data[tt] = Dt, this._userThinInstanceBuffersStorage.sizes[tt] = jt, this._userThinInstanceBuffersStorage.vertexBuffers[tt] = new dt.m(this.Jf(), Dt, tt, !0, !1, Ot, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[tt]))
      }
    }, mt.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, mt.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40638: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Mt,
      d: () => wt
    });
    var Ot, qt, Dt, mt, dt = Vt(40211),
      jt = Vt(40213),
      Ht = Vt(40230),
      Xt = Vt(37367),
      Qt = Vt(37336),
      lt = Vt(40415),
      Et = Vt(37390),
      ft = Vt(40080);
    let wt = (() => {
      var tt;
      let et, Vt, Ot, qt, Dt, mt, Et, ft, wt, yt = lt.d,
        Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
        vt = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [],
        It = [],
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [];
      return tt = class extends yt {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(et) {
          this._billboardMode !== et && (this._billboardMode = et, this._cache.useBillboardPosition = 0 !== (this._billboardMode & tt.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(tt) {
          this._infiniteDistance !== tt && (this._infiniteDistance = tt)
        }
        constructor(et) {
          let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(et, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Qt.n(0, 0, 1), this._up = new Qt.n(0, 1, 0), this._right = new Qt.n(1, 0, 0), this._position = (0, dt.m)(this, Nt, Qt.n.Zero()), this._rotation = ((0, dt.m)(this, Mt), (0, dt.m)(this, bt, Qt.n.Zero())), this._rotationQuaternion = ((0, dt.m)(this, Jt), (0, dt.m)(this, Ct, null)), this._scaling = ((0, dt.m)(this, ut), (0, dt.m)(this, Kt, Qt.n.One())), this._transformToBoneReferal = ((0, dt.m)(this, ht), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, dt.m)(this, vt, tt.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, dt.m)(this, Wt), (0, dt.m)(this, St, 1)), this._infiniteDistance = ((0, dt.m)(this, ct), (0, dt.m)(this, Rt, !1)), this.ignoreNonUniformScaling = ((0, dt.m)(this, It), (0, dt.m)(this, Pt, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, dt.m)(this, Zt), (0, dt.m)(this, Lt, !1)), this._poseMatrix = ((0, dt.m)(this, Ft), null), this._localMatrix = Qt.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Qt.n.Zero(), this._absoluteScaling = Qt.n.Zero(), this._absoluteRotationQuaternion = Qt.e.Identity(), this._pivotMatrix = Qt.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Xt.c, this._nonUniformScaling = !1, Vt && this.vI().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(tt) {
          this._position = tt, this._markAsDirtyInternal()
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
        set rotation(tt) {
          this._rotation = tt, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get cj() {
          return this._scaling
        }
        set cj(tt) {
          this._scaling = tt, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(tt) {
          this._rotationQuaternion = tt, tt && this._rotation.S_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Qt.n.TransformNormalFromFloatsToRef(0, 0, this.vI().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Qt.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Qt.n.TransformNormalFromFloatsToRef(this.vI().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(tt) {
          return this._poseMatrix ? (this._poseMatrix.rK(tt), this) : (this._poseMatrix = tt.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Qt.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const et = this._cache;
          return this._billboardMode === et.billboardMode && this._billboardMode === tt.BILLBOARDMODE_NONE && (!et.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const tt = this._cache;
          tt.localMatrixUpdated = !1, tt.billboardMode = -1, tt.infiniteDistance = !1, tt.useBillboardPosition = !1
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
        setPreTransformMatrix(tt) {
          return this.setPivotMatrix(tt, !1)
        }
        setPivotMatrix(tt) {
          let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.rK(tt), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = et, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Qt.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            et = arguments.length > 1 ? arguments[1] : void 0,
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          const Ot = this.clone("Clone of " + (this.name || this.id), tt || this.parent, !0);
          Ot && Vt && Vt(this, Ot);
          for (const qt of this.getChildTransformNodes(!0)) qt.instantiateHierarchy(Ot, et, Vt);
          return Ot
        }
        eZ() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return tt ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.S_(0), this._rotationQuaternion = this._rotationQuaternion || Qt.e.Identity(), tt.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = tt, this._absolutePosition.W9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Cdt() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(tt) {
          if (!tt) return this;
          let et, Vt, Ot;
          if (void 0 === tt.x) {
            if (arguments.length < 3) return this;
            et = arguments[0], Vt = arguments[1], Ot = arguments[2]
          } else et = tt.x, Vt = tt.y, Ot = tt.z;
          if (this.parent) {
            const tt = Qt.k.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(tt), Qt.n.TransformCoordinatesFromFloatsToRef(et, Vt, Ot, tt, this.position)
          } else this.position.x = et, this.position.y = Vt, this.position.z = Ot;
          return this._absolutePosition.rK(tt), this
        }
        setPositionWithLocalVector(tt) {
          return this.computeWorldMatrix(), this.position = Qt.n.TransformNormal(tt, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const tt = Qt.k.Matrix[0];
          return this._localMatrix.invertToRef(tt), Qt.n.TransformNormal(this.position, tt)
        }
        locallyTranslate(tt) {
          return this.computeWorldMatrix(!0), this.position = Qt.n.TransformCoordinates(tt, this._localMatrix), this
        }
        lookAt(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const mt = tt._LookAtVectorCache,
            dt = 0 === Dt ? this.position : this.getAbsolutePosition();
          if (et.subtractToRef(dt, mt), this.setDirection(mt, Vt, Ot, qt), 1 === Dt && this.parent)
            if (this.rotationQuaternion) {
              const tt = Qt.k.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(tt);
              const et = Qt.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(et), et.invert(), tt.multiplyToRef(et, tt), this.rotationQuaternion.fromRotationMatrix(tt)
            } else {
              const tt = Qt.k.Quaternion[0];
              Qt.e.FromEulerVectorToRef(this.rotation, tt);
              const et = Qt.k.Matrix[0];
              tt.toRotationMatrix(et);
              const Vt = Qt.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Vt), Vt.invert(), et.multiplyToRef(Vt, et), tt.fromRotationMatrix(et), tt.toEulerAnglesToRef(this.rotation)
            } return this
        }
        zp(tt) {
          const et = Qt.n.Zero();
          return this.getDirectionToRef(tt, et), et
        }
        getDirectionToRef(tt, et) {
          return Qt.n.TransformNormalToRef(tt, this.getWorldMatrix(), et), this
        }
        setDirection(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const qt = -Math.atan2(tt.z, tt.x) + Math.PI / 2,
            Dt = Math.sqrt(tt.x * tt.x + tt.z * tt.z),
            mt = -Math.atan2(tt.y, Dt);
          return this.rotationQuaternion ? Qt.e.RotationYawPitchRollToRef(qt + et, mt + Vt, Ot, this.rotationQuaternion) : (this.rotation.x = mt + Vt, this.rotation.y = qt + et, this.rotation.z = Ot), this
        }
        setPivotPoint(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.vI().getRenderId() && this.computeWorldMatrix(!0);
          const Vt = this.getWorldMatrix();
          if (1 == et) {
            const et = Qt.k.Matrix[0];
            Vt.invertToRef(et), tt = Qt.n.TransformCoordinates(tt, et)
          }
          return this.setPivotMatrix(Qt.c.Translation(-tt.x, -tt.y, -tt.z), !0)
        }
        getPivotPoint() {
          const tt = Qt.n.Zero();
          return this.getPivotPointToRef(tt), tt
        }
        getPivotPointToRef(tt) {
          return tt.x = -this._pivotMatrix.m[12], tt.y = -this._pivotMatrix.m[13], tt.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const tt = Qt.n.Zero();
          return this.getAbsolutePivotPointToRef(tt), tt
        }
        getAbsolutePivotPointToRef(tt) {
          return this.getPivotPointToRef(tt), Qt.n.TransformCoordinatesToRef(tt, this.getWorldMatrix(), tt), this
        }
        fVt(tt) {
          if (this._isDirty) return this;
          if (this._children)
            for (const et of this._children) et.fVt(tt);
          return super.fVt(tt)
        }
        setParent(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!et && !this.parent) return this;
          const qt = Qt.k.Quaternion[0],
            Dt = Qt.k.uf[0],
            mt = Qt.k.uf[1],
            dt = Qt.k.Matrix[1];
          Qt.c.IdentityToRef(dt);
          const jt = Qt.k.Matrix[0];
          this.computeWorldMatrix(!0);
          let Ht = this.rotationQuaternion;
          return Ht || (Ht = tt._TmpRotation, Qt.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ht)), Qt.c.ComposeToRef(this.cj, Ht, this.position, jt), this.parent && jt.multiplyToRef(this.parent.computeWorldMatrix(!0), jt), et && (et.computeWorldMatrix(!0).invertToRef(dt), jt.multiplyToRef(dt, jt)), jt.decompose(mt, qt, Dt, Vt ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.rK(qt) : qt.toEulerAnglesToRef(this.rotation), this.cj.rK(mt), this.position.rK(Dt), this.parent = et, Ot && this.setPivotMatrix(Qt.c.Identity()), this
        }
        addChild(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return tt.setParent(this, et), this
        }
        removeChild(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return tt.parent !== this || tt.setParent(null, et), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(tt) {
          return this._nonUniformScaling !== tt && (this._nonUniformScaling = tt, !0)
        }
        attachToBone(tt, et) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = et, this.parent = tt, tt.getSkeleton().prepare(!0), tt.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = tt ? this._currentParentWhenAttachingToBone : null, this) : (tt && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(et, Vt, Ot) {
          let qt;
          if (et.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.S_(0)), Ot && 0 !== Ot) {
            if (this.parent) {
              const tt = this.parent.getWorldMatrix(),
                Ot = Qt.k.Matrix[0];
              tt.invertToRef(Ot), et = Qt.n.TransformNormal(et, Ot), tt.determinant() < 0 && (Vt *= -1)
            }
            qt = Qt.e.RotationAxisToRef(et, Vt, tt._RotationAxisCache), qt.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else qt = Qt.e.RotationAxisToRef(et, Vt, tt._RotationAxisCache), this.rotationQuaternion.multiplyToRef(qt, this.rotationQuaternion);
          return this
        }
        rotateAround(tt, et, Vt) {
          et.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Qt.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.S_(0));
          const Ot = Qt.k.uf[0],
            qt = Qt.k.uf[1],
            Dt = Qt.k.uf[2],
            mt = Qt.k.Quaternion[0],
            dt = Qt.k.Matrix[0],
            jt = Qt.k.Matrix[1],
            Ht = Qt.k.Matrix[2],
            Xt = Qt.k.Matrix[3];
          return tt.subtractToRef(this.position, Ot), Qt.c.TranslationToRef(Ot.x, Ot.y, Ot.z, dt), Qt.c.TranslationToRef(-Ot.x, -Ot.y, -Ot.z, jt), Qt.c.RotationAxisToRef(et, Vt, Ht), jt.multiplyToRef(Ht, Xt), Xt.multiplyToRef(dt, Xt), Xt.decompose(qt, mt, Dt), this.position.addInPlace(Dt), mt.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(tt, et, Vt) {
          const Ot = tt.scale(et);
          if (Vt && 0 !== Vt) this.setAbsolutePosition(this.getAbsolutePosition().add(Ot));
          else {
            const tt = this.getPositionExpressedInLocalSpace().add(Ot);
            this.setPositionWithLocalVector(tt)
          }
          return this
        }
        addRotation(tt, et, Vt) {
          let Ot;
          this.rotationQuaternion ? Ot = this.rotationQuaternion : (Ot = Qt.k.Quaternion[1], Qt.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Ot));
          const qt = Qt.k.Quaternion[0];
          return Qt.e.RotationYawPitchRollToRef(et, tt, Vt, qt), Ot.multiplyInPlace(qt), this.rotationQuaternion || Ot.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== tt.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Ot = this.vI().getRenderId();
          if (!this._isDirty && !et && (this._currentRenderId === Ot || this.isSynchronized())) return this._currentRenderId = Ot, this._worldMatrix;
          Vt = Vt || this.vI().activeCamera, this._updateCache();
          const qt = this._cache;
          qt.pivotMatrixUpdated = !1, qt.billboardMode = this.billboardMode, qt.infiniteDistance = this.infiniteDistance, qt.parent = this._parentNode, this._currentRenderId = Ot, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Dt = this._getEffectiveParent(),
            mt = tt._TmpScaling;
          let dt, jt = this._position;
          if (this._infiniteDistance && !this.parent && Vt) {
            const et = Vt.getWorldMatrix().m;
            jt = tt._TmpTranslation, jt.W9(this._position.x + et[12], this._position.y + et[13], this._position.z + et[14])
          }
          if (mt.W9(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, dt = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Qt.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.W9(0, 0, 0))
            }
          } else dt = tt._TmpRotation, Qt.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, dt);
          if (this._usePivotMatrix) {
            const tt = Qt.k.Matrix[1];
            Qt.c.ScalingToRef(mt.x, mt.y, mt.z, tt);
            const et = Qt.k.Matrix[0];
            dt.toRotationMatrix(et), this._pivotMatrix.multiplyToRef(tt, Qt.k.Matrix[4]), Qt.k.Matrix[4].multiplyToRef(et, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(jt.x, jt.y, jt.z)
          } else Qt.c.ComposeToRef(mt, dt, jt, this._localMatrix);
          if (Dt && Dt.getWorldMatrix) {
            if (et && Dt.computeWorldMatrix(et), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const tt = this.parent;
                tt.getSkeleton().prepare(), tt.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Qt.k.Matrix[7])
              } else Qt.k.Matrix[7].rK(Dt.getWorldMatrix());
              const et = Qt.k.uf[5],
                Vt = Qt.k.uf[6],
                Ot = Qt.k.Quaternion[0];
              Qt.k.Matrix[7].decompose(Vt, Ot, et), Qt.c.ScalingToRef(Vt.x, Vt.y, Vt.z, Qt.k.Matrix[7]), Qt.k.Matrix[7].setTranslation(et), tt.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Ot, et), this._localMatrix.setTranslation(et)), this._localMatrix.multiplyToRef(Qt.k.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const tt = this.parent;
              tt.getSkeleton().prepare(), this._localMatrix.multiplyToRef(tt.getFinalMatrix(), Qt.k.Matrix[6]), Qt.k.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Dt.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.rK(this._localMatrix);
          if (Vt && this.billboardMode)
            if (qt.useBillboardPosition) {
              const et = Qt.k.uf[0];
              this._worldMatrix.getTranslationToRef(et);
              const Ot = Vt.globalPosition;
              this._worldMatrix.invertToRef(Qt.k.Matrix[1]);
              const qt = Qt.k.uf[1];
              Qt.n.TransformCoordinatesToRef(Ot, Qt.k.Matrix[1], qt), qt.normalize();
              const Dt = -Math.atan2(qt.z, qt.x) + Math.PI / 2,
                mt = Math.sqrt(qt.x * qt.x + qt.z * qt.z),
                dt = -Math.atan2(qt.y, mt);
              if (Qt.e.RotationYawPitchRollToRef(Dt, dt, 0, Qt.k.Quaternion[0]), (this.billboardMode & tt.BILLBOARDMODE_ALL) !== tt.BILLBOARDMODE_ALL) {
                const et = Qt.k.uf[1];
                Qt.k.Quaternion[0].toEulerAnglesToRef(et), (this.billboardMode & tt.BILLBOARDMODE_X) !== tt.BILLBOARDMODE_X && (et.x = 0), (this.billboardMode & tt.BILLBOARDMODE_Y) !== tt.BILLBOARDMODE_Y && (et.y = 0), (this.billboardMode & tt.BILLBOARDMODE_Z) !== tt.BILLBOARDMODE_Z && (et.z = 0), Qt.c.RotationYawPitchRollToRef(et.y, et.x, et.z, Qt.k.Matrix[0])
              } else Qt.c.FromQuaternionToRef(Qt.k.Quaternion[0], Qt.k.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Qt.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Qt.k.uf[0])
            } else {
              const et = Qt.k.uf[0];
              this._worldMatrix.getTranslationToRef(et), Qt.k.Matrix[1].rK(Vt.getViewMatrix());
              const Ot = this.vI().useRightHandedSystem;
              if (Ot && Qt.k.Matrix[1].multiplyToRef(tt._TmpRHRestore, Qt.k.Matrix[1]), Qt.k.Matrix[1].setTranslationFromFloats(0, 0, 0), Qt.k.Matrix[1].invertToRef(Qt.k.Matrix[0]), (this.billboardMode & tt.BILLBOARDMODE_ALL) !== tt.BILLBOARDMODE_ALL) {
                Qt.k.Matrix[0].decompose(void 0, Qt.k.Quaternion[0], void 0);
                const et = Qt.k.uf[1];
                Qt.k.Quaternion[0].toEulerAnglesToRef(et), (this.billboardMode & tt.BILLBOARDMODE_X) !== tt.BILLBOARDMODE_X && (et.x = 0), (this.billboardMode & tt.BILLBOARDMODE_Y) !== tt.BILLBOARDMODE_Y && (et.y = 0), (this.billboardMode & tt.BILLBOARDMODE_Z) !== tt.BILLBOARDMODE_Z && (et.z = 0), Ot && (et.y += Math.PI), Qt.c.RotationYawPitchRollToRef(et.y, et.x, et.z, Qt.k.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Qt.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Qt.k.uf[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Dt && Dt._nonUniformScaling ? this._updateNonUniformScalingState(Dt._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.W9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Qt.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), tt) {
            const tt = this.getChildren();
            for (let et = 0; et < tt.length; ++et) {
              const Vt = tt[et];
              if (Vt) {
                Vt.computeWorldMatrix();
                const tt = Qt.k.Matrix[0];
                Vt._localMatrix.multiplyToRef(this._localMatrix, tt);
                const et = Qt.k.Quaternion[0];
                tt.decompose(Vt.cj, et, Vt.position), Vt.rotationQuaternion ? Vt.rotationQuaternion.rK(et) : et.toEulerAnglesToRef(Vt.rotation)
              }
            }
          }
          this.cj.W9(1, 1, 1), this.position.W9(0, 0, 0), this.rotation.W9(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Qt.e.Identity()), this._worldMatrix = Qt.c.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(tt) {
          return this.onAfterWorldMatrixUpdateObservable.add(tt), this
        }
        unregisterAfterWorldMatrixUpdate(tt) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(tt), this
        }
        getPositionInCameraSpace() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return tt || (tt = this.vI().activeCamera), Qt.n.TransformCoordinates(this.getAbsolutePosition(), tt.getViewMatrix())
        }
        getDistanceToCamera() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return tt || (tt = this.vI().activeCamera), this.getAbsolutePosition().subtract(tt.globalPosition).length()
        }
        clone(et, Vt, Ot) {
          const qt = Ht.d.Clone((() => new tt(et, this.vI())), this);
          if (qt.name = et, qt.id = et, Vt && (qt.parent = Vt), !Ot) {
            const tt = this.getDescendants(!0);
            for (let Vt = 0; Vt < tt.length; Vt++) {
              const Ot = tt[Vt];
              Ot.clone && Ot.clone(et + "." + Ot.name, qt)
            }
          }
          return qt
        }
        serialize(tt) {
          const et = Ht.d.Serialize(this, tt);
          return et.type = this.getClassName(), et.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(et), et.localMatrix = this.getPivotMatrix().GOt(), et.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (et.eZ = !0), Ht.d.AppendSerializedAnimations(this, et), et.nw = this.serializeAnimationRanges(), et
        }
        getChildTransformNodes(et, Vt) {
          const Ot = [];
          return this._getDescendants(Ot, et, (et => (!Vt || Vt(et)) && et instanceof tt)), Ot
        }
        dispose(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.vI().stopAnimation(this), this.vI().removeTransformNode(this), this._parentContainer) {
            const tt = this._parentContainer.transformNodes.indexOf(this);
            tt > -1 && this._parentContainer.transformNodes.splice(tt, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), tt) {
            const tt = this.getChildTransformNodes(!0);
            for (const et of tt) et.parent = null, et.computeWorldMatrix(!0)
          }
          super.dispose(tt, et)
        }
        normalizeToUnitCube() {
          let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Vt = arguments.length > 2 ? arguments[2] : void 0,
            Ot = null,
            qt = null;
          et && (this.rotationQuaternion ? (qt = this.rotationQuaternion.clone(), this.rotationQuaternion.W9(0, 0, 0, 1)) : this.rotation && (Ot = this.rotation.clone(), this.rotation.W9(0, 0, 0)));
          const Dt = this.getHierarchyBoundingVectors(tt, Vt),
            mt = Dt.max.subtract(Dt.min),
            dt = Math.max(mt.x, mt.y, mt.z);
          if (0 === dt) return this;
          const jt = 1 / dt;
          return this.cj.scaleInPlace(jt), et && (this.rotationQuaternion && qt ? this.rotationQuaternion.rK(qt) : this.rotation && Ot && this.rotation.rK(Ot)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Ht = "function" === typeof Symbol && Symbol.metadata ? Object.create(yt[Symbol.metadata] ?? null) : void 0;
        et = [(0, jt.M)("position")], Vt = [(0, jt.M)("rotation")], Ot = [(0, jt.C)("rotationQuaternion")], qt = [(0, jt.M)("cj")], Dt = [(0, jt.P)("billboardMode")], mt = [(0, jt.P)()], Et = [(0, jt.P)("infiniteDistance")], ft = [(0, jt.P)()], wt = [(0, jt.P)()], (0, dt.l)(null, null, et, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: tt => "_position" in tt,
            get: tt => tt._position,
            set: (tt, et) => {
              tt._position = et
            }
          },
          metadata: Ht
        }, Nt, Mt), (0, dt.l)(null, null, Vt, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: tt => "_rotation" in tt,
            get: tt => tt._rotation,
            set: (tt, et) => {
              tt._rotation = et
            }
          },
          metadata: Ht
        }, bt, Jt), (0, dt.l)(null, null, Ot, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: tt => "_rotationQuaternion" in tt,
            get: tt => tt._rotationQuaternion,
            set: (tt, et) => {
              tt._rotationQuaternion = et
            }
          },
          metadata: Ht
        }, Ct, ut), (0, dt.l)(null, null, qt, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: tt => "_scaling" in tt,
            get: tt => tt._scaling,
            set: (tt, et) => {
              tt._scaling = et
            }
          },
          metadata: Ht
        }, Kt, ht), (0, dt.l)(null, null, Dt, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "_billboardMode" in tt,
            get: tt => tt._billboardMode,
            set: (tt, et) => {
              tt._billboardMode = et
            }
          },
          metadata: Ht
        }, vt, Wt), (0, dt.l)(null, null, mt, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: tt => "scalingDeterminant" in tt,
            get: tt => tt.scalingDeterminant,
            set: (tt, et) => {
              tt.scalingDeterminant = et
            }
          },
          metadata: Ht
        }, St, ct), (0, dt.l)(null, null, Et, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: tt => "_infiniteDistance" in tt,
            get: tt => tt._infiniteDistance,
            set: (tt, et) => {
              tt._infiniteDistance = et
            }
          },
          metadata: Ht
        }, Rt, It), (0, dt.l)(null, null, ft, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: tt => "ignoreNonUniformScaling" in tt,
            get: tt => tt.ignoreNonUniformScaling,
            set: (tt, et) => {
              tt.ignoreNonUniformScaling = et
            }
          },
          metadata: Ht
        }, Pt, Zt), (0, dt.l)(null, null, wt, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: tt => "reIntegrateRotationIntoRotationQuaternion" in tt,
            get: tt => tt.reIntegrateRotationIntoRotationQuaternion,
            set: (tt, et) => {
              tt.reIntegrateRotationIntoRotationQuaternion = et
            }
          },
          metadata: Ht
        }, Lt, Ft), Ht && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ht
        })
      })(), tt.BILLBOARDMODE_NONE = 0, tt.BILLBOARDMODE_X = 1, tt.BILLBOARDMODE_Y = 2, tt.BILLBOARDMODE_Z = 4, tt.BILLBOARDMODE_ALL = 7, tt.BILLBOARDMODE_USE_POSITION = 128, tt.BillboardUseParentOrientation = !1, tt._TmpRotation = Qt.e.Zero(), tt._TmpScaling = Qt.n.Zero(), tt._TmpTranslation = Qt.n.Zero(), tt._TmpRHRestore = Qt.c.Scaling(1, 1, -1), tt._LookAtVectorCache = new Qt.n(0, 0, 0), tt._RotationAxisCache = new Qt.e, tt
    })();

    function yt(tt, et, Vt) {
      const Ot = Ht.d.Parse((() => new wt(tt.name, et)), tt, et, Vt);
      if (tt.localMatrix ? Ot.setPreTransformMatrix(Qt.c.FromArray(tt.localMatrix)) : tt.pivotMatrix && Ot.setPivotMatrix(Qt.c.FromArray(tt.pivotMatrix)), Ot.Av(tt.isEnabled), Ot._waitingParsedUniqueId = tt.uniqueId, void 0 !== tt.parentId && (Ot._waitingParentId = tt.parentId), void 0 !== tt.parentInstanceIndex && (Ot._waitingParentInstanceIndex = tt.parentInstanceIndex), tt.eZ && (Ot._waitingFreezeWorldMatrix = tt.eZ), tt.animations) {
        for (let et = 0; et < tt.animations.length; et++) {
          const Vt = tt.animations[et],
            qt = (0, Et.e)("BABYLON.Animation");
          qt && Ot.animations.push(qt.Parse(Vt))
        }
        lt.d.ParseAnimationRanges(Ot, tt, et)
      }
      return tt.autoAnimate && et.beginAnimation(Ot, tt.autoAnimateFrom, tt.autoAnimateTo, tt.autoAnimateLoop, tt.autoAnimateSpeed || 1), Ot
    }
    let Nt = !1;

    function Mt() {
      Nt || (Nt = !0, wt.Parse = yt)
    }(Ot = wt.prototype).YG ?? (Ot.YG = (0, ft.d)("TransformNode", "YG")), (qt = wt.prototype).applyImpulse ?? (qt.applyImpulse = (0, ft.d)("TransformNode", "applyImpulse")), (Dt = wt.prototype).applyAngularImpulse ?? (Dt.applyAngularImpulse = (0, ft.d)("TransformNode", "applyAngularImpulse")), (mt = wt.prototype).applyTorque ?? (mt.applyTorque = (0, ft.d)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(wt.prototype, "physicsBody") || Object.defineProperty(wt.prototype, "physicsBody", (0, ft.c)("TransformNode", "physicsBody"))
  },
  40606: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      try {
        const Ot = tt.next();
        Ot.done ? et(Ot) : Ot.value ? Ot.value.then((() => {
          Ot.value = void 0, et(Ot)
        }), Vt) : et(Ot)
      } catch (Ot) {
        Vt(Ot)
      }
    }

    function qt() {
      let tt, et = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Vt, qt, Dt) => {
        const mt = performance.now();
        void 0 === tt || mt - tt > et ? (tt = mt, setTimeout((() => {
          Ot(Vt, qt, Dt)
        }), 0)) : Ot(Vt, qt, Dt)
      }
    }

    function Dt(tt, et, Vt, Ot, qt) {
      const Dt = () => {
        let mt;
        const dt = tt => {
          tt.done ? Vt(tt.value) : void 0 === mt ? mt = !0 : Dt()
        };
        do {
          mt = void 0, qt && qt.aborted ? Ot(new Error("Aborted")) : et(tt, dt, Ot), void 0 === mt && (mt = !1)
        } while (mt)
      };
      Dt()
    }

    function mt(tt, et) {
      let Vt;
      return Dt(tt, Ot, (tt => Vt = tt), (tt => {
        throw tt
      }), et), Vt
    }
    async function dt(tt, et, Vt) {
      return await new Promise(((Ot, qt) => {
        Dt(tt, et, Ot, qt, Vt)
      }))
    }

    function jt(tt, et) {
      return function() {
        return mt(tt(...arguments), et)
      }
    }
    Vt.d(et, {
      c: () => qt,
      g: () => jt,
      i: () => dt,
      k: () => mt
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);