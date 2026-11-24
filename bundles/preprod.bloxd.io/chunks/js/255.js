export const id = 255;
export const ids = [255];
export const modules = {
  40411: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp,
      e: () => Hp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40314),
      Sp = cp(37349),
      xp = cp(37320),
      Lp = cp(40415),
      Yp = cp(38905),
      Dp = cp(37368),
      Ap = cp(40096),
      Pp = cp(38313),
      Wp = cp(37985),
      yp = cp(40172),
      Up = cp(40233);
    let wp = (() => {
      var pp;
      let ip, cp, Dp, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp = Lp.b,
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
      return pp = class extends lp {
        get position() {
          return this._position
        }
        set position(pp) {
          this._position = pp
        }
        set upVector(pp) {
          this._upVector = pp
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let ip, cp;
          if (this.mode === pp.PERSPECTIVE_CAMERA) this.fovMode === pp.FOVMODE_VERTICAL_FIXED ? (cp = 2 * this.minZ * Math.tan(this.fov / 2), ip = this.gy().getAspectRatio(this) * cp) : (ip = 2 * this.minZ * Math.tan(this.fov / 2), cp = ip / this.gy().getAspectRatio(this));
          else {
            const pp = this.gy().getRenderWidth() / 2,
              Op = this.gy().getRenderHeight() / 2;
            ip = (this.orthoRight ?? pp) - (this.orthoLeft ?? -pp), cp = (this.orthoTop ?? Op) - (this.orthoBottom ?? -Op)
          }
          return ip * cp
        }
        set orthoLeft(pp) {
          this._orthoLeft = pp;
          for (const ip of this._rigCameras) ip.orthoLeft = pp
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(pp) {
          this._orthoRight = pp;
          for (const ip of this._rigCameras) ip.orthoRight = pp
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(pp) {
          this._orthoBottom = pp;
          for (const ip of this._rigCameras) ip.orthoBottom = pp
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(pp) {
          this._orthoTop = pp;
          for (const ip of this._rigCameras) ip.orthoTop = pp
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(ip / (2 * pp))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(pp) {
          this._baseInertia = pp
        }
        set mode(pp) {
          this._mode = pp;
          for (const ip of this._rigCameras) ip.mode = pp
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(ip, cp, op) {
          let Lp = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, yp.d)(), super(ip, op, !1), this.inputs = (0, Op.l)(this, Qp), this._position = (0, Op.l)(this, Jp, xp.o.Zero()), this._upVector = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, xp.o.Up())), this.oblique = ((0, Op.l)(this, Tp), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Op.l)(this, fp, .8), this.projectionPlaneTilt = ((0, Op.l)(this, bp), (0, Op.l)(this, hp, 0)), this.minZ = ((0, Op.l)(this, ap), (0, Op.l)(this, np, 1)), this.maxZ = ((0, Op.l)(this, Fp), (0, Op.l)(this, gp, 1e4)), this._baseInertia = ((0, Op.l)(this, Gp), .9), this._mode = pp.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Pp.c(0, 0, 1, 1), this.layerMask = (0, Op.l)(this, rp, 268435455), this.fovMode = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, pp.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Op.l)(this, sp), (0, Op.l)(this, Kp, pp.RIG_MODE_NONE)), this.interaxialDistance = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, void 0)), this.isStereoscopicSideBySide = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, void 0)), this.ignoreCameraMaxZ = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, !1)), this.customRenderTargets = ((0, Op.l)(this, Si), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Sp.d, this.onProjectionMatrixChangedObservable = new Sp.d, this.onAfterCheckInputsObservable = new Sp.d, this.onRestoreStateObservable = new Sp.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new xp.b, this._postProcesses = new Array, this._activeMeshes = new Ip.g(256), this._globalPosition = xp.o.Zero(), this._computedViewMatrix = xp.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = xp.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = xp.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Gl().defaultCameraLayerMask, this.Gl().addCamera(this), Lp && !this.Gl().activeCamera && (this.Gl().activeCamera = this), this.position = cp, this.renderPassId = this.Gl().gy().createRenderPassId(`Camera ${ip}`)
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
          return "Gw"
        }
        toString(pp) {
          let ip = "Name: " + this.name;
          if (ip += ", type: " + this.getClassName(), this.animations)
            for (let cp = 0; cp < this.animations.length; cp++) ip += ", animation[0]: " + this.animations[cp].toString(pp);
          return ip
        }
        applyVerticalCorrection() {
          const pp = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -pp.x : pp.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(pp) {
          return -1 !== this._activeMeshes.indexOf(pp)
        }
        isReady() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (pp)
            for (const ip of this._postProcesses)
              if (ip && !ip.isReady()) return !1;
          return super.isReady(pp)
        }
        _initCache() {
          super._initCache(), this._cache.position = new xp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new xp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(pp) {
          pp || super._updateCache(), this._cache.position.rM(this.position), this._cache.upVector.rM(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const ip = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let cp = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === ip;
          if (!cp) return !1;
          const Op = this.gy();
          return this.mode === pp.PERSPECTIVE_CAMERA ? cp = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Op.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (cp = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Op.getRenderWidth() && this._cache.renderHeight === Op.getRenderHeight(), this.oblique && (cp = cp && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), cp
        }
        attachControl(pp, ip) {}
        detachControl(pp) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== pp.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let pp = 0; pp < this._postProcesses.length; pp++)
            if (null !== this._postProcesses[pp]) return this._postProcesses[pp];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const pp = this._getFirstPostProcess();
          pp && pp.markTextureDirty();
          for (let ip = 0, cp = this._rigCameras.length; ip < cp; ip++) {
            const pp = this._rigCameras[ip],
              cp = pp._rigPostProcess;
            if (cp) {
              "pass" === cp.getEffectName() && (pp.isIntermediate = 0 === this._postProcesses.length), pp._postProcesses = this._postProcesses.slice(0).concat(cp), cp.markTextureDirty()
            } else pp._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !pp.isReusable() && this._postProcesses.indexOf(pp) > -1 ? (Yp.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == ip || ip < 0 ? this._postProcesses.push(pp) : null === this._postProcesses[ip] ? this._postProcesses[ip] = pp : this._postProcesses.splice(ip, 0, pp), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.ocp(), this._postProcesses.indexOf(pp))
        }
        detachPostProcess(pp) {
          const ip = this._postProcesses.indexOf(pp); - 1 !== ip && (this._postProcesses[ip] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.ocp(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return xp.b.Identity()
        }
        getViewMatrix(pp) {
          return !pp && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Gl().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(pp) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== pp && (this._projectionMatrix = pp)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(ip) {
          if (this._doNotComputeProjectionMatrix || !ip && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const cp = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = cp, this._refreshFrustumPlanes = !0;
          const Op = this.gy(),
            op = this.Gl(),
            Ip = Op.lOp;
          if (this.mode === pp.PERSPECTIVE_CAMERA) {
            let ip;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Op.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), ip = op.useRightHandedSystem ? xp.b.PerspectiveFovRHToRef : xp.b.PerspectiveFovLHToRef, ip(this.fov, Op.getAspectRatio(this), Ip ? cp : this.minZ, Ip ? this.minZ : cp, this._projectionMatrix, this.fovMode === pp.FOVMODE_VERTICAL_FIXED, Op.isNDCHalfZRange, this.projectionPlaneTilt, Ip)
          } else {
            const pp = Op.getRenderWidth() / 2,
              ip = Op.getRenderHeight() / 2;
            op.useRightHandedSystem ? this.oblique ? xp.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -pp, this.orthoRight ?? pp, this.orthoBottom ?? -ip, this.orthoTop ?? ip, Ip ? cp : this.minZ, Ip ? this.minZ : cp, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Op.isNDCHalfZRange) : xp.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -pp, this.orthoRight ?? pp, this.orthoBottom ?? -ip, this.orthoTop ?? ip, Ip ? cp : this.minZ, Ip ? this.minZ : cp, this._projectionMatrix, Op.isNDCHalfZRange) : this.oblique ? xp.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -pp, this.orthoRight ?? pp, this.orthoBottom ?? -ip, this.orthoTop ?? ip, Ip ? cp : this.minZ, Ip ? this.minZ : cp, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Op.isNDCHalfZRange) : xp.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -pp, this.orthoRight ?? pp, this.orthoBottom ?? -ip, this.orthoTop ?? ip, Ip ? cp : this.minZ, Ip ? this.minZ : cp, this._projectionMatrix, Op.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Op.getRenderWidth(), this._cache.renderHeight = Op.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(pp) {
          return (this.radius || (this.target ? xp.o.Distance(this.position, this.target) : this.position.length())) + pp
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Wp.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Wp.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), ip && this.rigCameras.length > 0) {
            let ip = !1;
            for (const cp of this.rigCameras) cp._updateFrustumPlanes(), ip = ip || pp.isInFrustum(cp._frustumPlanes);
            return ip
          }
          return pp.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(pp) {
          return this._updateFrustumPlanes(), pp.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Ap.o)("Ray")
        }
        getForwardRayToRef(pp) {
          throw (0, Ap.o)("Ray")
        }
        dispose(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Gl().stopAnimation(this), this.Gl().removeCamera(this); this._rigCameras.length > 0;) {
            const pp = this._rigCameras.pop();
            pp && pp.dispose()
          }
          if (this._parentContainer) {
            const pp = this._parentContainer.cameras.indexOf(this);
            pp > -1 && this._parentContainer.cameras.splice(pp, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== pp.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let pp = this._postProcesses.length;
            for (; --pp >= 0;) {
              const ip = this._postProcesses[pp];
              ip && ip.dispose(this)
            }
          }
          let Op = this.customRenderTargets.length;
          for (; --Op >= 0;) this.customRenderTargets[Op].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Gl().gy().releaseRenderPassId(this.renderPassId), super.dispose(ip, cp)
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
        setCameraRigMode(ip, cp) {
          if (this.cameraRigMode !== ip) {
            for (; this._rigCameras.length > 0;) {
              const pp = this._rigCameras.pop();
              pp && pp.dispose()
            }
            if (this.cameraRigMode = ip, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = cp.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== pp.RIG_MODE_NONE) {
              const pp = this.createRigCamera(this.name + "_L", 0);
              pp && (pp._isLeftCamera = !0);
              const ip = this.createRigCamera(this.name + "_R", 1);
              ip && (ip._isRightCamera = !0), pp && ip && (this._rigCameras.push(pp), this._rigCameras.push(ip))
            }
            this._setRigMode(cp), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(pp) {}
        _getVRProjectionMatrix() {
          return xp.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.gy().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(pp, ip) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[pp] = ip, "interaxialDistance" === pp && (this._cameraRigParams.stereoHalfAngle = ip / .0637 * (Math.PI / 180))
        }
        createRigCamera(pp, ip) {
          return null
        }
        _updateRigCameras() {
          for (let pp = 0; pp < this._rigCameras.length; pp++) this._rigCameras[pp].minZ = this.minZ, this._rigCameras[pp].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[pp].fov = this.fov, this._rigCameras[pp].upVector.rM(this.upVector);
          this.cameraRigMode === pp.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const pp = Up.c.Serialize(this);
          return pp.uniqueId = this.uniqueId, pp.type = this.getClassName(), this.parent && this.parent._serializeAsParent(pp), this.inputs && this.inputs.serialize(pp), Up.c.AppendSerializedAnimations(this, pp), pp.By = this.serializeAnimationRanges(), pp.isEnabled = this.isEnabled(), pp
        }
        clone(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Op = Up.c.Clone(pp.GetConstructorFromName(this.getClassName(), ip, this.Gl(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Op.name = ip, Op.parent = cp, this.onClonedObservable.notifyObservers(Op), Op
        }
        hK(pp) {
          const ip = xp.o.Zero();
          return this.getDirectionToRef(pp, ip), ip
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(pp, ip) {
          xp.o.TransformNormalToRef(pp, this.getWorldMatrix(), ip)
        }
        static GetConstructorFromName(ip, cp, Op) {
          let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Sp = Lp.b.Construct(ip, cp, Op, {
            interaxial_distance: op,
            isStereoscopicSideBySide: Ip
          });
          return Sp || (() => pp._CreateDefaultParsedCamera(cp, Op))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let pp = this.Gl().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (pp *= -1), pp
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(lp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, op.H)("position")], cp = [(0, op.H)("upVector")], Dp = [(0, op.K)()], wp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], Xp = [(0, op.K)()], (0, Op.j)(pp, null, Dp, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: pp => "orthoLeft" in pp,
            get: pp => pp.orthoLeft
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(pp, null, wp, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: pp => "orthoRight" in pp,
            get: pp => pp.orthoRight
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(pp, null, vp, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: pp => "orthoBottom" in pp,
            get: pp => pp.orthoBottom
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(pp, null, tp, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: pp => "orthoTop" in pp,
            get: pp => pp.orthoTop
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(pp, null, kp, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: pp => "inertia" in pp,
            get: pp => pp.inertia
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(pp, null, mp, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: pp => "mode" in pp,
            get: pp => pp.mode
          },
          metadata: Ip
        }, null, Qp), (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: pp => "_position" in pp,
            get: pp => pp._position,
            set: (pp, ip) => {
              pp._position = ip
            }
          },
          metadata: Ip
        }, Jp, Bp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: pp => "_upVector" in pp,
            get: pp => pp._upVector,
            set: (pp, ip) => {
              pp._upVector = ip
            }
          },
          metadata: Ip
        }, Np, Tp), (0, Op.j)(null, null, Hp, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: pp => "fov" in pp,
            get: pp => pp.fov,
            set: (pp, ip) => {
              pp.fov = ip
            }
          },
          metadata: Ip
        }, fp, bp), (0, Op.j)(null, null, dp, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: pp => "projectionPlaneTilt" in pp,
            get: pp => pp.projectionPlaneTilt,
            set: (pp, ip) => {
              pp.projectionPlaneTilt = ip
            }
          },
          metadata: Ip
        }, hp, ap), (0, Op.j)(null, null, ep, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "minZ" in pp,
            get: pp => pp.minZ,
            set: (pp, ip) => {
              pp.minZ = ip
            }
          },
          metadata: Ip
        }, np, Fp), (0, Op.j)(null, null, jp, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "maxZ" in pp,
            get: pp => pp.maxZ,
            set: (pp, ip) => {
              pp.maxZ = ip
            }
          },
          metadata: Ip
        }, gp, Gp), (0, Op.j)(null, null, Rp, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: pp => "layerMask" in pp,
            get: pp => pp.layerMask,
            set: (pp, ip) => {
              pp.layerMask = ip
            }
          },
          metadata: Ip
        }, rp, Zp), (0, Op.j)(null, null, qp, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "fovMode" in pp,
            get: pp => pp.fovMode,
            set: (pp, ip) => {
              pp.fovMode = ip
            }
          },
          metadata: Ip
        }, zp, sp), (0, Op.j)(null, null, Mp, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "cameraRigMode" in pp,
            get: pp => pp.cameraRigMode,
            set: (pp, ip) => {
              pp.cameraRigMode = ip
            }
          },
          metadata: Ip
        }, Kp, Vp), (0, Op.j)(null, null, Cp, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: pp => "interaxialDistance" in pp,
            get: pp => pp.interaxialDistance,
            set: (pp, ip) => {
              pp.interaxialDistance = ip
            }
          },
          metadata: Ip
        }, ii, ci), (0, Op.j)(null, null, Ep, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: pp => "isStereoscopicSideBySide" in pp,
            get: pp => pp.isStereoscopicSideBySide,
            set: (pp, ip) => {
              pp.isStereoscopicSideBySide = ip
            }
          },
          metadata: Ip
        }, Oi, oi), (0, Op.j)(null, null, Xp, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "ignoreCameraMaxZ" in pp,
            get: pp => pp.ignoreCameraMaxZ,
            set: (pp, ip) => {
              pp.ignoreCameraMaxZ = ip
            }
          },
          metadata: Ip
        }, Ii, Si), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp._CreateDefaultParsedCamera = (pp, ip) => {
        throw (0, Ap.o)("UniversalCamera")
      }, pp.PERSPECTIVE_CAMERA = 0, pp.ORTHOGRAPHIC_CAMERA = 1, pp.FOVMODE_VERTICAL_FIXED = 0, pp.FOVMODE_HORIZONTAL_FIXED = 1, pp.RIG_MODE_NONE = 0, pp.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, pp.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, pp.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, pp.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, pp.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, pp.RIG_MODE_VR = 20, pp.RIG_MODE_CUSTOM = 22, pp.ForceAttachControlToAlwaysPreventDefault = !1, pp
    })();

    function vp(pp, ip) {
      const cp = pp.type,
        Op = wp.GetConstructorFromName(cp, pp.name, ip, pp.interaxial_distance, pp.isStereoscopicSideBySide),
        op = Up.c.Parse(Op, pp, ip);
      if (void 0 !== pp.parentId && (op._waitingParentId = pp.parentId), void 0 !== pp.parentInstanceIndex && (op._waitingParentInstanceIndex = pp.parentInstanceIndex), op.inputs && (op.inputs.parse(pp), op._setupInputs()), pp.upVector && (op.upVector = xp.o.FromArray(pp.upVector)), op.setPosition && (op.position.i5(0, 0, 0), op.setPosition(xp.o.FromArray(pp.position))), pp.target && op.setTarget && op.setTarget(xp.o.FromArray(pp.target)), pp.cameraRigMode) {
        const ip = pp.interaxial_distance ? {
          interaxialDistance: pp.interaxial_distance
        } : {};
        op.setCameraRigMode(pp.cameraRigMode, ip)
      }
      if (pp.animations) {
        for (let ip = 0; ip < pp.animations.length; ip++) {
          const cp = pp.animations[ip],
            Op = (0, Dp.d)("BABYLON.Animation");
          Op && op.animations.push(Op.Parse(cp))
        }
        Lp.b.ParseAnimationRanges(op, pp, ip)
      }
      return pp.autoAnimate && ip.beginAnimation(op, pp.autoAnimateFrom, pp.autoAnimateTo, pp.autoAnimateLoop, pp.autoAnimateSpeed || 1), void 0 !== pp.isEnabled && op.eC(pp.isEnabled), op
    }
    let tp = !1;

    function Hp() {
      tp || (tp = !0, wp.Parse = vp)
    }
  },
  40430: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp) {
        this._cameraPosition = ip, this._behavior = cp, this.activeInput = !1, this.speed = 1, this.Kr = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Op.o, this.rotationAccumulatedPixels = new Op.o, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Op.o.Zero(), this.rotationDeltaCurrentFrame = Op.o.Zero(), this._zoomVelocity = 0, this._panVelocity = new Op.o, this.referenceFrameRate = 60, this._rotationVelocity = new Op.o, this._prevFrameTimeMs = 0, this._scene = pp
      }
      computeCurrentFrameDeltas() {
        const pp = this._scene.gy().getDeltaTime(),
          ip = this._getEffectiveDeltaMs(pp);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.E_(0), this.rotationDeltaCurrentFrame.E_(0), this.zoomDeltaCurrentFrame = 0, void(pp > 0 && (this._prevFrameTimeMs = pp));
        this.panDeltaCurrentFrame.E_(0), this.rotationDeltaCurrentFrame.E_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.i5(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * ip, this.panDeltaCurrentFrame), this._rotationVelocity.i5(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.i5(this._rotationVelocity.x * this.speed * this.rotationXSpeed * ip, this._rotationVelocity.y * this.speed * this.rotationYSpeed * ip, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.Kr * this._zoomSpeedMultiplier) * ip, pp > 0 && (this._prevFrameTimeMs = pp), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.E_(0), this.rotationAccumulatedPixels.E_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.E_(0), this.rotationAccumulatedPixels.E_(0)
      }
      resetPanVelocity() {
        this._panVelocity.E_(0), this.panAccumulatedPixels.E_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(pp) {
        const ip = this._scene.gy().getDeltaTime(),
          cp = this._getEffectiveDeltaMs(ip),
          Op = 1e3 / this.referenceFrameRate;
        return Math.pow(pp, cp / Op)
      }
      getFrameIndependentInputScale(pp) {
        const ip = 1 - pp;
        if (ip <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(pp)) / ip
      }
      _getEffectiveDeltaMs(pp) {
        return pp > 0 ? pp : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(pp, ip, cp) {
        let Op = pp;
        const op = this._scene.gy().getDeltaTime(),
          Ip = this._getEffectiveDeltaMs(op);
        if (0 === Ip) return Op;
        const Sp = this.getFrameIndependentDecay(cp);
        if (Op *= Sp, 0 !== ip || this.activeInput) {
          const pp = 1 - cp;
          Op += ip / Ip * (pp > 0 ? (1 - Sp) / pp : 1)
        } else Math.abs(Op) < 1e-6 && (Op = 0);
        return Op
      }
    }
  },
  40432: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip) {
        this.inputMap = [], this.handlers = pp, this._createDefaultEntries = ip, this.resetInputMap()
      }
      resolveInteraction(pp, ip) {
        for (const cp of this.inputMap)
          if (cp.source === pp && this._entryMatches(cp, ip)) return cp;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(pp, ip, cp) {
        const Op = this.inputMap;
        for (let op = 0; op < Op.length; op++) {
          const Ip = Op[op];
          if (Ip.source === pp && Ip.interaction === ip && this._entryConditionsMatch(Ip, cp)) return Ip
        }
      }
      getEntries(pp, ip, cp) {
        const Op = [],
          op = this.inputMap;
        for (let Ip = 0; Ip < op.length; Ip++) {
          const Sp = op[Ip];
          Sp.source === pp && Sp.interaction === ip && this._entryConditionsMatch(Sp, cp) && Op.push(Sp)
        }
        return Op
      }
      addEntry(pp) {
        const ip = this._entrySpecificity(pp);
        let cp = this.inputMap.length;
        for (let Op = 0; Op < this.inputMap.length; Op++)
          if (this._entrySpecificity(this.inputMap[Op]) < ip) {
            cp = Op;
            break
          } this.inputMap.splice(cp, 0, pp)
      }
      setInteraction(pp, ip, cp) {
        const Op = this.resolveInteraction(pp, ip);
        return Op && this._entryCoversAllConditionsOf(Op, ip) ? (Op.interaction = cp, !0) : (this.addEntry({
          source: pp,
          ...ip ?? {},
          interaction: cp
        }), !0)
      }
      _entryCoversAllConditionsOf(pp, ip) {
        if (!ip) return !0;
        const cp = pp;
        for (const Op of Object.keys(ip)) {
          const pp = ip[Op];
          if (void 0 !== pp)
            if ("modifiers" === Op) {
              const ip = cp.modifiers ?? {};
              for (const cp of Object.keys(pp))
                if (void 0 !== pp[cp] && void 0 === ip[cp]) return !1
            } else if (void 0 === cp[Op]) return !1
        }
        return !0
      }
      setInteractions(pp, ip, cp) {
        let Op = 0;
        const op = this.inputMap;
        for (let Ip = 0; Ip < op.length; Ip++) {
          const Sp = op[Ip];
          Sp.source === pp && this._entryMatches(Sp, ip) && (Sp.interaction = cp, Op++)
        }
        return Op
      }
      _entryMatches(pp, ip) {
        switch (pp.source) {
          case "pointer":
            return (void 0 === pp.button || pp.button === ip?.button) && this._matchModifiers(pp.modifiers, ip?.modifiers);
          case "wheel":
            return this._matchModifiers(pp.modifiers, ip?.modifiers);
          case "touch":
            return void 0 === pp.touchCount || pp.touchCount === ip?.touchCount;
          case "keyboard":
            return (void 0 === pp.key || (Array.isArray(pp.key) ? -1 !== pp.key.indexOf(ip?.key ?? -1) : pp.key === ip?.key)) && this._matchModifiers(pp.modifiers, ip?.modifiers)
        }
      }
      _entryConditionsMatch(pp, ip) {
        if (!ip) return !0;
        switch (pp.source) {
          case "pointer":
            return (!("button" in ip) || pp.button === ip.button) && (!("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers));
          case "wheel":
            return !("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers);
          case "touch":
            return !("touchCount" in ip) || pp.touchCount === ip.touchCount;
          case "keyboard":
            if ("key" in ip) {
              if (void 0 === pp.key) return void 0 === ip.key;
              if (void 0 === ip.key || (Array.isArray(pp.key) ? -1 === pp.key.indexOf(ip.key) : pp.key !== ip.key)) return !1
            }
            return !("modifiers" in ip) || this._entryModifiersMatch(pp.modifiers, ip.modifiers)
        }
      }
      _entrySpecificity(pp) {
        let ip = 0;
        return "button" in pp && void 0 !== pp.button && ip++, "key" in pp && void 0 !== pp.key && ip++, "touchCount" in pp && void 0 !== pp.touchCount && ip++, "modifiers" in pp && pp.modifiers && ip++, ip
      }
      _matchModifiers(pp, ip) {
        return !pp || (void 0 === pp.ctrl || pp.ctrl === (ip?.ctrl ?? !1)) && ((void 0 === pp.shift || pp.shift === (ip?.shift ?? !1)) && (void 0 === pp.alt || pp.alt === (ip?.alt ?? !1)))
      }
      _entryModifiersMatch(pp, ip) {
        if (!ip) return !pp;
        return void 0 !== ip.ctrl || void 0 !== ip.shift || void 0 !== ip.alt ? (void 0 === ip.ctrl || pp?.ctrl === ip.ctrl) && ((void 0 === ip.shift || pp?.shift === ip.shift) && (void 0 === ip.alt || pp?.alt === ip.alt)) : !pp || void 0 === pp.ctrl && void 0 === pp.shift && void 0 === pp.alt
      }
    }
  },
  40409: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => vp,
      f: () => Up
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40411),
      Sp = cp(37320),
      xp = cp(37324),
      Lp = cp(40423),
      Yp = cp(40415),
      Dp = cp(40430),
      Ap = cp(40432);
    class Pp extends Dp.d {
      constructor(pp, ip, cp) {
        super(pp, ip, cp), this.input = new Ap.c({
          translate: (pp, ip, cp) => {
            this.panAccumulatedPixels.x += pp, this.panAccumulatedPixels.y += ip, this.panAccumulatedPixels.z += cp
          },
          rotate: (pp, ip) => {
            this.rotationAccumulatedPixels.x += pp, this.rotationAccumulatedPixels.y += ip
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
    const Wp = Sp.b.Zero(),
      yp = Sp.f.Identity();
    let Up = (() => {
        var pp;
        let ip, cp, Yp, Dp, Ap = Ip.d,
          Up = [],
          wp = [],
          vp = [],
          tp = [],
          Hp = [],
          dp = [],
          ep = [],
          jp = [];
        return pp = class extends Ap {
          get inertia() {
            return this._targetInertia
          }
          set inertia(pp) {
            this._targetInertia = pp, this.movement && (this.movement.panInertia = pp, this.movement.rotationInertia = pp)
          }
          constructor(pp, ip, cp) {
            super(pp, ip, cp, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Sp.o(0, 0, 0), this.cameraRotation = new Sp.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Op.l)(this, Up, !1), this.rotation = ((0, Op.l)(this, wp), (0, Op.l)(this, vp, void 0)), this.rotationQuaternion = (0, Op.l)(this, tp), this.speed = (0, Op.l)(this, Hp, 2), this.noRotationConstraint = ((0, Op.l)(this, dp), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = xp.b, this._rotationEpsilon = xp.b, this.lockedTarget = (0, Op.l)(this, ep, null), this._currentTarget = ((0, Op.l)(this, jp), Sp.o.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Sp.b.Zero(), this._cameraTransformMatrix = Sp.b.Zero(), this._cameraRotationMatrix = Sp.b.Zero(), this._transformedReferencePoint = Sp.o.Zero(), this._deferredPositionUpdate = new Sp.o, this._deferredRotationQuaternionUpdate = new Sp.f, this._deferredRotationUpdate = new Sp.o, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Sp.o.Forward(this.Gl().useRightHandedSystem), this.rotation = new Sp.o(0, this.Gl().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Pp(this.Gl(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(pp) {
            this.getWorldMatrix();
            const ip = Sp.i.Zy[0],
              cp = Sp.i.Zy[1];
            return cp.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(cp, ip), ip.scaleInPlace(pp), this.globalPosition.add(ip)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const pp = this.lockedTarget;
              pp.computeWorldMatrix().getTranslationToRef(pp.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.i5(0, 0, 0), this.cameraRotation.i5(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Sp.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(pp) {
            pp || super._updateCache();
            const ip = this._getLockedTargetPosition();
            ip ? this._cache.lockedTarget ? this._cache.lockedTarget.rM(ip) : this._cache.lockedTarget = ip.clone() : this._cache.lockedTarget = null, this._cache.rotation.rM(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.rM(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const pp = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(pp) : !pp) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const pp = this.gy();
            return this.speed * Math.sqrt(pp.getDeltaTime() / (100 * pp.getFps()))
          }
          setTarget(pp) {
            this.upVector.normalize(), this._initialFocalDistance = pp.subtract(this.position).length(), this.position.z === pp.z && (this.position.z += xp.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Gl().useRightHandedSystem ? Sp.b.LookAtRHToRef(this.position, pp, Sp.o.UpReadOnly, Wp) : Sp.b.LookAtLHToRef(this.position, pp, Sp.o.UpReadOnly, Wp), Wp.invert();
            const ip = this.rotationQuaternion || yp;
            Sp.f.FromRotationMatrixToRef(Wp, ip), ip.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(pp) {
            this.setTarget(pp)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Sp.i.Matrix[0]), Sp.o.TransformNormalToRef(this.cameraDirection, Sp.i.Matrix[0], Sp.i.Zy[0]), this._deferredPositionUpdate.addInPlace(Sp.i.Zy[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.rM(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.rM(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const pp = this.movement,
              ip = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            pp.panAccumulatedPixels.addInPlace(this.cameraDirection), pp.rotationAccumulatedPixels.x += this.cameraRotation.x, pp.rotationAccumulatedPixels.y += this.cameraRotation.y, pp.computeCurrentFrameDeltas(), this.cameraDirection.rM(pp.panDeltaCurrentFrame), this.cameraRotation.set(pp.rotationDeltaCurrentFrame.x, pp.rotationDeltaCurrentFrame.y);
            const cp = this.speed * this._panningEpsilon;
            !ip && Math.abs(this.cameraDirection.x) < cp && Math.abs(this.cameraDirection.y) < cp && Math.abs(this.cameraDirection.z) < cp && (this.cameraDirection.E_(0), pp.resetPanVelocity());
            const Op = this.invertRotation ? -this.inverseRotationSpeed : 1,
              op = this._decideIfNeedsToMove(),
              Ip = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.rM(this.rotation), this._deferredPositionUpdate.rM(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.rM(this.rotationQuaternion), op && this._updatePosition(), Ip) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Op, this._deferredRotationUpdate.y += this.cameraRotation.y * Op, !this.noRotationConstraint) {
                const pp = 1.570796;
                this._deferredRotationUpdate.x > pp && (this._deferredRotationUpdate.x = pp), this._deferredRotationUpdate.x < -pp && (this._deferredRotationUpdate.x = -pp)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.rM(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Sp.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.rM(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.E_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Sp.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Sp.o.TransformNormalToRef(Sp.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Sp.o.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Lp.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Sp.f.FromEulerVectorToRef(this.rotation, yp), Lp.c.Y.rotateByQuaternionToRef(yp, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(pp, ip, cp) {
            if (this.Gl().useRightHandedSystem ? Sp.b.LookAtRHToRef(pp, ip, cp, this._viewMatrix) : Sp.b.LookAtLHToRef(pp, ip, cp, this._viewMatrix), this.parent) {
              const pp = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(pp, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(ip, cp) {
            if (this.cameraRigMode !== Ip.d.RIG_MODE_NONE) {
              const cp = new pp(ip, this.position.clone(), this.Gl());
              return cp.isRigCamera = !0, cp.rigParent = this, this.cameraRigMode === Ip.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Sp.f), cp._cameraRigParams = {}, cp.rotationQuaternion = new Sp.f), cp.mode = this.mode, cp.orthoLeft = this.orthoLeft, cp.orthoRight = this.orthoRight, cp.orthoTop = this.orthoTop, cp.orthoBottom = this.orthoBottom, cp
            }
            return null
          }
          _updateRigCameras() {
            const pp = this._rigCameras[0],
              ip = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Ip.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Ip.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Ip.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Ip.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Ip.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const cp = this.cameraRigMode === Ip.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Op = this.cameraRigMode === Ip.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * cp, pp), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Op, ip);
                break
              }
              case Ip.d.RIG_MODE_VR:
                pp.rotationQuaternion && ip.rotationQuaternion && this.rotationQuaternion ? (pp.rotationQuaternion.rM(this.rotationQuaternion), ip.rotationQuaternion.rM(this.rotationQuaternion)) : (pp.rotation.rM(this.rotation), ip.rotation.rM(this.rotation)), pp.position.rM(this.position), ip.position.rM(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(ip, cp) {
            this.getTarget().subtractToRef(this.position, pp._TargetFocalPoint), pp._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Op = pp._TargetFocalPoint.addInPlace(this.position);
            Sp.b.TranslationToRef(-Op.x, -Op.y, -Op.z, pp._TargetTransformMatrix), pp._TargetTransformMatrix.multiplyToRef(Sp.b.RotationAxis(cp.upVector, ip), pp._RigCamTransformMatrix), Sp.b.TranslationToRef(Op.x, Op.y, Op.z, pp._TargetTransformMatrix), pp._RigCamTransformMatrix.multiplyToRef(pp._TargetTransformMatrix, pp._RigCamTransformMatrix), Sp.o.TransformCoordinatesToRef(this.position, pp._RigCamTransformMatrix, cp.position), cp.setTarget(Op)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ap[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.H)()], Yp = [(0, op.K)()], Dp = [(0, op.u)("lockedTargetId")], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: pp => "updateUpVectorFromRotation" in pp,
              get: pp => pp.updateUpVectorFromRotation,
              set: (pp, ip) => {
                pp.updateUpVectorFromRotation = ip
              }
            },
            metadata: Ip
          }, Up, wp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: pp => "rotation" in pp,
              get: pp => pp.rotation,
              set: (pp, ip) => {
                pp.rotation = ip
              }
            },
            metadata: Ip
          }, vp, tp), (0, Op.j)(null, null, Yp, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: pp => "speed" in pp,
              get: pp => pp.speed,
              set: (pp, ip) => {
                pp.speed = ip
              }
            },
            metadata: Ip
          }, Hp, dp), (0, Op.j)(null, null, Dp, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: pp => "lockedTarget" in pp,
              get: pp => pp.lockedTarget,
              set: (pp, ip) => {
                pp.lockedTarget = ip
              }
            },
            metadata: Ip
          }, ep, jp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp._RigCamTransformMatrix = new Sp.b, pp._TargetTransformMatrix = new Sp.b, pp._TargetFocalPoint = new Sp.o, pp
      })(),
      wp = !1;

    function vp() {
      wp || (wp = !0, Yp.b.AddNodeConstructor("TargetCamera", ((pp, ip) => () => new Up(pp, Sp.o.Zero(), ip))))
    }
  },
  40164: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(40113);
    let op = !1;

    function Ip() {
      op || (op = !0, Op.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Op.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Op.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Op.b.prototype.getAspectRatio = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = pp.viewport;
        return this.getRenderWidth(ip) * cp.width / (this.getRenderHeight(ip) * cp.height)
      }, Op.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Op.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40248: (pp, ip, cp) => {
    var Op = cp(40113),
      op = cp(40257);
    let Ip = !1;
    Ip || (Ip = !0, (0, op.u)(), Op.b.prototype._loadFileAsync = async function(pp, ip, cp) {
      return await new Promise(((Op, op) => {
        this._loadFile(pp, (pp => {
          Op(pp)
        }), void 0, ip, cp, ((pp, ip) => {
          op(ip)
        }))
      }))
    })
  },
  40245: (pp, ip, cp) => {
    (0, cp(40172).d)()
  },
  40172: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(40113);
    let op = !1;

    function Ip() {
      op || (op = !0, Op.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Op.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Op.b.prototype.createRenderPassId = function(pp) {
        const ip = ++Op.b._RenderPassIdCounter;
        return this._renderPassNames[ip] = pp ?? "NONAME", ip
      }, Op.b.prototype.releaseRenderPassId = function(pp) {
        this._renderPassNames[pp] = void 0;
        for (let ip = 0; ip < this.scenes.length; ++ip) {
          const cp = this.scenes[ip];
          for (let ip = 0; ip < cp.meshes.length; ++ip) {
            const Op = cp.meshes[ip];
            if (Op._releaseRenderPassId(pp), Op.Am)
              for (let ip = 0; ip < Op.Am.length; ++ip) {
                Op.Am[ip]._removeDrawWrapper(pp)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(pp)
      })
    }
  },
  40278: (pp, ip, cp) => {
    var Op = cp(40286),
      op = cp(40113);
    let Ip = !1;
    Ip || (Ip = !0, op.b.GetCompatibleTextureLoader = Op.d)
  },
  40176: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(40050);
    let op = !1;

    function Ip() {
      op || (op = !0, Op.ThinEngine.prototype.setAlphaMode = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[cp] === pp) {
          if (!ip) {
            const ip = 0 === pp;
            this.depthCullingState.depthMask !== ip && (this.depthCullingState.depthMask = ip)
          }
          return
        }
        const Op = 0 === pp;
        this._alphaState.setAlphaBlend(!Op, cp), this._alphaState.setAlphaMode(pp, cp), ip || (this.depthCullingState.depthMask = Op), this._alphaMode[cp] = pp
      })
    }
  },
  40182: (pp, ip, cp) => {
    var Op = cp(40033),
      op = cp(38905),
      Ip = cp(40050),
      Sp = cp(40188),
      xp = cp(40151);
    class Lp extends Sp.d {
      setDepthStencilTexture(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(pp, ip), !pp) return;
        const cp = this._engine,
          Op = this._context,
          op = pp._hardwareTexture;
        if (op && pp._autoMSAAManagement && this._MSAAFramebuffer) {
          const ip = cp._currentFramebuffer;
          cp._bindUnboundFramebuffer(this._MSAAFramebuffer), Op.framebufferRenderbuffer(Op.FRAMEBUFFER, (0, xp.c)(pp.format) ? Op.DEPTH_STENCIL_ATTACHMENT : Op.DEPTH_ATTACHMENT, Op.RENDERBUFFER, op.getMSAARenderBuffer()), cp._bindUnboundFramebuffer(ip)
        }
      }
      constructor(pp, ip, cp, Op, op) {
        super(pp, ip, cp, Op), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = op
      }
      _cloneRenderTargetWrapper() {
        let pp;
        return this._colorTextureArray && this._depthStencilTextureArray ? (pp = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), pp.texture.isReady = !0) : pp = super._cloneRenderTargetWrapper(), pp
      }
      _swapRenderTargetWrapper(pp) {
        super._swapRenderTargetWrapper(pp), pp._framebuffer = this._framebuffer, pp._depthStencilBuffer = this._depthStencilBuffer, pp._MSAAFramebuffer = this._MSAAFramebuffer, pp._colorTextureArray = this._colorTextureArray, pp._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const pp = this._engine,
            ip = pp._currentFramebuffer,
            cp = this._context;
          pp._bindUnboundFramebuffer(this._framebuffer), cp.framebufferRenderbuffer(cp.FRAMEBUFFER, cp.DEPTH_STENCIL_ATTACHMENT, cp.RENDERBUFFER, null), cp.framebufferRenderbuffer(cp.FRAMEBUFFER, cp.DEPTH_ATTACHMENT, cp.RENDERBUFFER, null), cp.framebufferRenderbuffer(cp.FRAMEBUFFER, cp.STENCIL_ATTACHMENT, cp.RENDERBUFFER, null), pp._bindUnboundFramebuffer(ip), cp.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(pp, ip, cp, Op, op, Ip)
      }
      shareDepth(pp) {
        super.shareDepth(pp);
        const ip = this._context,
          cp = this._depthStencilBuffer,
          Op = pp._MSAAFramebuffer || pp._framebuffer,
          op = this._engine;
        pp._depthStencilBuffer && pp._depthStencilBuffer !== cp && ip.deleteRenderbuffer(pp._depthStencilBuffer), pp._depthStencilBuffer = cp;
        const Ip = pp._generateStencilBuffer ? ip.DEPTH_STENCIL_ATTACHMENT : ip.DEPTH_ATTACHMENT;
        op._bindUnboundFramebuffer(Op), ip.framebufferRenderbuffer(ip.FRAMEBUFFER, Ip, ip.RENDERBUFFER, cp), op._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const op = pp._hardwareTexture;
        if (!op) return;
        const Ip = this._framebuffer,
          Sp = this._engine,
          xp = Sp._currentFramebuffer;
        let Lp;
        if (Sp._bindUnboundFramebuffer(Ip), Sp.eU > 1) {
          const Ip = this._context;
          Lp = Ip["COLOR_ATTACHMENT" + ip], pp.is2DArray || pp.is3D ? (cp = cp ?? this.layerIndices?.[ip] ?? 0, Ip.framebufferTextureLayer(Ip.FRAMEBUFFER, Lp, op.underlyingResource, Op, cp)) : pp.isCube ? (cp = cp ?? this.faceIndices?.[ip] ?? 0, Ip.framebufferTexture2D(Ip.FRAMEBUFFER, Lp, Ip.TEXTURE_CUBE_MAP_POSITIVE_X + cp, op.underlyingResource, Op)) : Ip.framebufferTexture2D(Ip.FRAMEBUFFER, Lp, Ip.TEXTURE_2D, op.underlyingResource, Op)
        } else {
          const pp = this._context;
          Lp = pp["COLOR_ATTACHMENT" + ip + "_WEBGL"];
          const Ip = void 0 !== cp ? pp.TEXTURE_CUBE_MAP_POSITIVE_X + cp : pp.TEXTURE_2D;
          pp.framebufferTexture2D(pp.FRAMEBUFFER, Lp, Ip, op.underlyingResource, Op)
        }
        if (pp._autoMSAAManagement && this._MSAAFramebuffer) {
          const pp = this._context;
          Sp._bindUnboundFramebuffer(this._MSAAFramebuffer), pp.framebufferRenderbuffer(pp.FRAMEBUFFER, Lp, pp.RENDERBUFFER, op.getMSAARenderBuffer())
        }
        Sp._bindUnboundFramebuffer(xp)
      }
      setTexture(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(pp, ip, cp), this._bindTextureRenderTarget(pp, ip)
      }
      setLayerAndFaceIndices(pp, ip) {
        if (super.setLayerAndFaceIndices(pp, ip), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const cp = this._attachments?.length ?? this.textures.length;
        for (let Op = 0; Op < cp; Op++) {
          const pp = this.textures[Op];
          pp && (pp.is2DArray || pp.is3D ? this._bindTextureRenderTarget(pp, Op, this.layerIndices[Op]) : pp.isCube ? this._bindTextureRenderTarget(pp, Op, this.faceIndices[Op]) : this._bindTextureRenderTarget(pp, Op))
        }
      }
      setLayerAndFaceIndex() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(pp, ip, cp), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Op = this.textures[pp];
        Op.is2DArray || Op.is3D ? this._bindTextureRenderTarget(this.textures[pp], pp, this.layerIndices[pp]) : Op.isCube && this._bindTextureRenderTarget(this.textures[pp], pp, this.faceIndices[pp])
      }
      resolveMSAATextures() {
        const pp = this._engine,
          ip = pp._currentFramebuffer;
        pp._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), pp._bindUnboundFramebuffer(ip)
      }
      dispose() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const ip = this._context;
        pp || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (ip.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (ip.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (ip.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(pp)
      }
    }
    let Yp = !1;
    Yp || (Yp = !0, Ip.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(pp, ip, cp) {
      const Op = new Lp(pp, ip, cp, this, this._gl);
      return this._renderTargetWrapperCache.push(Op), Op
    }, Ip.ThinEngine.prototype.createRenderTargetTexture = function(pp, ip) {
      const cp = this._createHardwareRenderTargetWrapper(!1, !1, pp);
      let Op, op, Ip = !0,
        Sp = !1,
        xp = !1,
        Lp = 1;
      void 0 !== ip && "object" === typeof ip && (Ip = ip.generateDepthBuffer ?? !0, Sp = !!ip.generateStencilBuffer, xp = !!ip.noColorAttachment, Op = ip.colorAttachment, Lp = ip.samples ?? 1, op = ip.label);
      const Yp = Op || (xp ? null : this._createInternalTexture(pp, ip, !0, 5)),
        Dp = pp.width || pp,
        Ap = pp.height || pp,
        Pp = this._currentFramebuffer,
        Wp = this._gl,
        yp = Wp.createFramebuffer();
      if (this._bindUnboundFramebuffer(yp), cp._depthStencilBuffer = this._setupFramebufferDepthAttachments(Sp, Ip, Dp, Ap), !Yp || Yp.is2DArray || Yp.is3D || Wp.framebufferTexture2D(Wp.FRAMEBUFFER, Wp.COLOR_ATTACHMENT0, Wp.TEXTURE_2D, Yp._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Pp), cp.label = op ?? "RenderTargetWrapper", cp._framebuffer = yp, cp._generateDepthBuffer = Ip, cp._generateStencilBuffer = Sp, cp.setTextures(Yp), Op) {
        if (cp._samples = Op.samples, Op.samples > 1) {
          const pp = Op._hardwareTexture.getMSAARenderBuffer(0);
          cp._MSAAFramebuffer = Wp.createFramebuffer(), this._bindUnboundFramebuffer(cp._MSAAFramebuffer), Wp.framebufferRenderbuffer(Wp.FRAMEBUFFER, Wp.COLOR_ATTACHMENT0, Wp.RENDERBUFFER, pp), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(cp, Lp);
      return cp
    }, Ip.ThinEngine.prototype._createDepthStencilTexture = function(pp, ip, cp) {
      const Ip = this._gl,
        Sp = pp.layers || 0,
        Lp = pp.depth || 0;
      let Yp = Ip.TEXTURE_2D;
      0 !== Sp ? Yp = Ip.TEXTURE_2D_ARRAY : 0 !== Lp && (Yp = Ip.TEXTURE_3D);
      const Dp = new Op.b(this, 12);
      if (Dp.label = ip.label, !this._caps.depthTextureExtension) return op.e.Error("Depth texture is not supported by your browser or hardware."), Dp;
      const Ap = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...ip
      };
      if (this._bindTextureDirectly(Yp, Dp, !0), this._setupDepthStencilTexture(Dp, pp, 0 !== Ap.comparisonFunction && Ap.bilinearFiltering, Ap.comparisonFunction, Ap.samples), void 0 !== Ap.depthTextureFormat) {
        if (15 !== Ap.depthTextureFormat && 16 !== Ap.depthTextureFormat && 17 !== Ap.depthTextureFormat && 13 !== Ap.depthTextureFormat && 14 !== Ap.depthTextureFormat && 18 !== Ap.depthTextureFormat) return op.e.Error(`Depth texture ${Ap.depthTextureFormat} format is not supported.`), Dp;
        Dp.format = Ap.depthTextureFormat
      } else Dp.format = Ap.generateStencil ? 13 : 16;
      const Pp = (0, xp.c)(Dp.format),
        Wp = this._getWebGLTextureTypeFromDepthTextureFormat(Dp.format),
        yp = Pp ? Ip.DEPTH_STENCIL : Ip.DEPTH_COMPONENT,
        Up = this._getInternalFormatFromDepthTextureFormat(Dp.format, !0, Pp);
      return Dp.is2DArray ? Ip.texImage3D(Yp, 0, Up, Dp.width, Dp.height, Sp, 0, yp, Wp, null) : Dp.is3D ? Ip.texImage3D(Yp, 0, Up, Dp.width, Dp.height, Lp, 0, yp, Wp, null) : Ip.texImage2D(Yp, 0, Up, Dp.width, Dp.height, 0, yp, Wp, null), this._bindTextureDirectly(Yp, null), this._internalTexturesCache.push(Dp), cp._depthStencilBuffer && (Ip.deleteRenderbuffer(cp._depthStencilBuffer), cp._depthStencilBuffer = null), this._bindUnboundFramebuffer(cp._MSAAFramebuffer ?? cp._framebuffer), cp._generateStencilBuffer = Pp, cp._depthStencilTextureWithStencil = Pp, cp._depthStencilBuffer = this._setupFramebufferDepthAttachments(cp._generateStencilBuffer, cp._generateDepthBuffer, cp.width, cp.height, cp.samples, Dp.format), this._bindUnboundFramebuffer(null), Dp
    }, Ip.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(pp, ip) {
      if (this.eU < 2 || !pp) return 1;
      if (pp.samples === ip) return ip;
      const cp = this._gl;
      ip = Math.min(ip, this.getCaps().maxMSAASamples), pp._depthStencilBuffer && (cp.deleteRenderbuffer(pp._depthStencilBuffer), pp._depthStencilBuffer = null), pp._MSAAFramebuffer && (cp.deleteFramebuffer(pp._MSAAFramebuffer), pp._MSAAFramebuffer = null);
      const Op = pp.texture?._hardwareTexture;
      if (Op?.releaseMSAARenderBuffers(), pp.texture && ip > 1 && "function" === typeof cp.renderbufferStorageMultisample) {
        const op = cp.createFramebuffer();
        if (!op) throw new Error("Unable to create multi sampled framebuffer");
        pp._MSAAFramebuffer = op, this._bindUnboundFramebuffer(pp._MSAAFramebuffer);
        const Ip = this._createRenderBuffer(pp.texture.width, pp.texture.height, ip, -1, this._getRGBABufferInternalSizedFormat(pp.texture.type, pp.texture.format, pp.texture._useSRGBBuffer), cp.COLOR_ATTACHMENT0, !1);
        if (!Ip) throw new Error("Unable to create multi sampled framebuffer");
        Op?.addMSAARenderBuffer(Ip)
      }
      this._bindUnboundFramebuffer(pp._MSAAFramebuffer ?? pp._framebuffer), pp.texture && (pp.texture.samples = ip), pp._samples = ip;
      const op = pp._depthStencilTexture ? pp._depthStencilTexture.format : void 0;
      return pp._depthStencilBuffer = this._setupFramebufferDepthAttachments(pp._generateStencilBuffer, pp._generateDepthBuffer, pp.width, pp.height, ip, op), this._bindUnboundFramebuffer(null), ip
    }, Ip.ThinEngine.prototype._setupDepthStencilTexture = function(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Ip = ip.width ?? ip,
        Sp = ip.height ?? ip,
        xp = ip.layers || 0,
        Lp = ip.depth || 0;
      pp.baseWidth = Ip, pp.baseHeight = Sp, pp.width = Ip, pp.height = Sp, pp.is2DArray = xp > 0, pp.depth = xp || Lp, pp.isReady = !0, pp.samples = op, pp.generateMipMaps = !1, pp.samplingMode = cp ? 2 : 1, pp.type = 0, pp._comparisonFunction = Op;
      const Yp = this._gl,
        Dp = this._getTextureTarget(pp),
        Ap = this._getSamplingParameters(pp.samplingMode, !1);
      Yp.texParameteri(Dp, Yp.TEXTURE_MAG_FILTER, Ap.mag), Yp.texParameteri(Dp, Yp.TEXTURE_MIN_FILTER, Ap.min), Yp.texParameteri(Dp, Yp.TEXTURE_WRAP_S, Yp.CLAMP_TO_EDGE), Yp.texParameteri(Dp, Yp.TEXTURE_WRAP_T, Yp.CLAMP_TO_EDGE), this.eU > 1 && (0 === Op ? (Yp.texParameteri(Dp, Yp.TEXTURE_COMPARE_FUNC, 515), Yp.texParameteri(Dp, Yp.TEXTURE_COMPARE_MODE, Yp.NONE)) : (Yp.texParameteri(Dp, Yp.TEXTURE_COMPARE_FUNC, Op), Yp.texParameteri(Dp, Yp.TEXTURE_COMPARE_MODE, Yp.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40024: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op.b
    });
    var Op = cp(40028);
    (0, cp(40176).b)();
    var op = cp(40050);
    let Ip = !1;
    ! function() {
      if (Ip) return;
      Ip = !0;
      const pp = new WeakMap,
        ip = new WeakMap,
        cp = new WeakMap,
        Op = new WeakMap;
      op.ThinEngine.prototype.getAlphaToCoverage = function() {
        return pp.get(this) ?? !1
      }, op.ThinEngine.prototype.setAlphaToCoverage = function(cp) {
        (pp.get(this) !== cp || this._gl && ip.get(this) !== this._gl) && (pp.set(this, cp), this._gl && (cp ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), ip.set(this, this._gl)))
      }, Object.defineProperty(op.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Op.get(this) !== this._gl && (cp.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Op.set(this, this._gl)), cp.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Sp = cp(40033),
      xp = cp(38905),
      Lp = cp(40143);
    let Yp = !1;
    ! function() {
      function pp(pp, ip, cp, Op) {
        let op, Ip = 1;
        1 === Op ? op = new Float32Array(ip * cp * 4) : 2 === Op ? (op = new Uint16Array(ip * cp * 4), Ip = 15360) : op = 7 === Op ? new Uint32Array(ip * cp * 4) : new Uint8Array(ip * cp * 4);
        for (let Sp = 0; Sp < ip; Sp++)
          for (let Op = 0; Op < cp; Op++) {
            const cp = 3 * (Op * ip + Sp),
              xp = 4 * (Op * ip + Sp);
            op[xp + 0] = pp[cp + 0], op[xp + 1] = pp[cp + 1], op[xp + 2] = pp[cp + 2], op[xp + 3] = Ip
          }
        return op
      }

      function ip(pp) {
        return function(ip, cp, Op, op, Ip, xp, Lp, Yp) {
          let Dp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Ap = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Pp = pp ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Wp = pp ? 10 : 11,
            yp = new Sp.b(this, Wp);
          yp.baseWidth = cp, yp.baseHeight = Op, yp.baseDepth = op, yp.width = cp, yp.height = Op, yp.depth = op, yp.format = Ip, yp.type = Ap, yp.generateMipMaps = xp, yp.samplingMode = Yp, pp ? yp.is3D = !0 : yp.is2DArray = !0, this._doNotHandleContextLost || (yp._bufferView = ip), pp ? this.updateRawTexture3D(yp, ip, Ip, Lp, Dp, Ap) : this.updateRawTexture2DArray(yp, ip, Ip, Lp, Dp, Ap), this._bindTextureDirectly(Pp, yp, !0);
          const Up = this._getSamplingParameters(Yp, xp);
          return this._gl.texParameteri(Pp, this._gl.TEXTURE_MAG_FILTER, Up.mag), this._gl.texParameteri(Pp, this._gl.TEXTURE_MIN_FILTER, Up.min), xp && this._gl.generateMipmap(Pp), this._bindTextureDirectly(Pp, null), this._internalTexturesCache.push(yp), yp
        }
      }

      function cp(pp) {
        return function(ip, cp, Op, op) {
          let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const xp = pp ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Lp = this._getWebGLTextureType(Sp),
            Yp = this._getInternalFormat(Op),
            Dp = this._getRGBABufferInternalSizedFormat(Sp, Op);
          this._bindTextureDirectly(xp, ip, !0), this._unpackFlipY(void 0 === op || !!op), this._doNotHandleContextLost || (ip._bufferView = cp, ip.format = Op, ip.invertY = op, ip._compression = Ip), ip.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Ip && cp ? this._gl.compressedTexImage3D(xp, 0, this.getCaps().s3tc[Ip], ip.width, ip.height, ip.depth, 0, cp) : this._gl.texImage3D(xp, 0, Dp, ip.width, ip.height, ip.depth, 0, Yp, Lp, cp), ip.generateMipMaps && this._gl.generateMipmap(xp), this._bindTextureDirectly(xp, null), ip.isReady = !0
        }
      }
      Yp || (Yp = !0, op.ThinEngine.prototype.updateRawTexture = function(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!pp) return;
        const xp = this._getRGBABufferInternalSizedFormat(Ip, cp, Sp),
          Lp = this._getInternalFormat(cp),
          Yp = this._getWebGLTextureType(Ip);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, pp, !0), this._unpackFlipY(void 0 === Op || !!Op), this._doNotHandleContextLost || (pp._bufferView = ip, pp.format = cp, pp.type = Ip, pp.invertY = Op, pp._compression = op), pp.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), op && ip ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[op], pp.width, pp.height, 0, ip) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, xp, pp.width, pp.height, 0, Lp, Yp, ip), pp.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), pp.isReady = !0
      }, op.ThinEngine.prototype.createRawTexture = function(pp, ip, cp, Op, op, Ip, xp) {
        let Lp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Dp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ap = new Sp.b(this, 3);
        Ap.baseWidth = ip, Ap.baseHeight = cp, Ap.width = ip, Ap.height = cp, Ap.format = Op, Ap.generateMipMaps = op, Ap.samplingMode = xp, Ap.invertY = Ip, Ap._compression = Lp, Ap.type = Yp, Ap._useSRGBBuffer = this._getUseSRGBBuffer(Dp, !op), this._doNotHandleContextLost || (Ap._bufferView = pp), this.updateRawTexture(Ap, pp, Op, Ip, Lp, Yp, Ap._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Ap, !0);
        const Pp = this._getSamplingParameters(xp, op);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Pp.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Pp.min), op && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Ap), Ap
      }, op.ThinEngine.prototype.createRawCubeTexture = function(pp, ip, cp, Op, op, Ip, Yp) {
        let Dp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Ap = this._gl,
          Pp = new Sp.b(this, 8);
        Pp.isCube = !0, Pp.format = cp, Pp.type = Op, this._doNotHandleContextLost || (Pp._bufferViewArray = pp);
        const Wp = this._getWebGLTextureType(Op);
        let yp = this._getInternalFormat(cp);
        yp === Ap.RGB && (yp = Ap.RGBA), Wp !== Ap.FLOAT || this._caps.textureFloatLinearFiltering ? Wp !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Wp !== Ap.FLOAT || this._caps.textureFloatRender ? Wp !== Ap.HALF_FLOAT || this._caps.colorBufferFloat || (op = !1, xp.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (op = !1, xp.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (op = !1, Yp = 1, xp.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (op = !1, Yp = 1, xp.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Up = ip,
          wp = Up;
        Pp.width = Up, Pp.height = wp, Pp.invertY = Ip, Pp._compression = Dp;
        if (!this.needPOTTextures || (0, Lp.h)(Pp.width) && (0, Lp.h)(Pp.height) || (op = !1), pp) this.updateRawCubeTexture(Pp, pp, cp, Op, Ip, Dp);
        else {
          const pp = this._getRGBABufferInternalSizedFormat(Op),
            ip = 0;
          this._bindTextureDirectly(Ap.TEXTURE_CUBE_MAP, Pp, !0);
          for (let cp = 0; cp < 6; cp++) Dp ? Ap.compressedTexImage2D(Ap.TEXTURE_CUBE_MAP_POSITIVE_X + cp, ip, this.getCaps().s3tc[Dp], Pp.width, Pp.height, 0, void 0) : Ap.texImage2D(Ap.TEXTURE_CUBE_MAP_POSITIVE_X + cp, ip, pp, Pp.width, Pp.height, 0, yp, Wp, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Pp, !0), pp && op && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const vp = this._getSamplingParameters(Yp, op);
        return Ap.texParameteri(Ap.TEXTURE_CUBE_MAP, Ap.TEXTURE_MAG_FILTER, vp.mag), Ap.texParameteri(Ap.TEXTURE_CUBE_MAP, Ap.TEXTURE_MIN_FILTER, vp.min), Ap.texParameteri(Ap.TEXTURE_CUBE_MAP, Ap.TEXTURE_WRAP_S, Ap.CLAMP_TO_EDGE), Ap.texParameteri(Ap.TEXTURE_CUBE_MAP, Ap.TEXTURE_WRAP_T, Ap.CLAMP_TO_EDGE), this._bindTextureDirectly(Ap.TEXTURE_CUBE_MAP, null), Pp.generateMipMaps = op, Pp.samplingMode = Yp, Pp.isReady = !0, Pp
      }, op.ThinEngine.prototype.updateRawCubeTexture = function(ip, cp, Op, op, Ip) {
        let Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        ip._bufferViewArray = cp, ip.format = Op, ip.type = op, ip.invertY = Ip, ip._compression = Sp;
        const Yp = this._gl,
          Dp = this._getWebGLTextureType(op);
        let Ap = this._getInternalFormat(Op);
        const Pp = this._getRGBABufferInternalSizedFormat(op);
        let Wp = !1;
        Ap === Yp.RGB && (Ap = Yp.RGBA, Wp = !0), this._bindTextureDirectly(Yp.TEXTURE_CUBE_MAP, ip, !0), this._unpackFlipY(void 0 === Ip || !!Ip), ip.width % 4 !== 0 && Yp.pixelStorei(Yp.UNPACK_ALIGNMENT, 1);
        for (let Lp = 0; Lp < 6; Lp++) {
          let Op = cp[Lp];
          Sp ? Yp.compressedTexImage2D(Yp.TEXTURE_CUBE_MAP_POSITIVE_X + Lp, xp, this.getCaps().s3tc[Sp], ip.width, ip.height, 0, Op) : (Wp && (Op = pp(Op, ip.width, ip.height, op)), Yp.texImage2D(Yp.TEXTURE_CUBE_MAP_POSITIVE_X + Lp, xp, Pp, ip.width, ip.height, 0, Ap, Dp, Op))
        }(!this.needPOTTextures || (0, Lp.h)(ip.width) && (0, Lp.h)(ip.height)) && ip.generateMipMaps && 0 === xp && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), ip.isReady = !0
      }, op.ThinEngine.prototype.createRawCubeTextureFromUrl = function(ip, cp, Op, op, Ip, Sp, xp, Lp) {
        let Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ap = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Pp = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Wp = this._gl,
          yp = this.createRawCubeTexture(null, Op, op, Ip, !Sp, Pp, Ap, null);
        cp?.addPendingData(yp), yp.url = ip, yp.isReady = !1, this._internalTexturesCache.push(yp);
        const Up = (pp, ip) => {
            cp?.removePendingData(yp), Dp && Dp(pp ? pp.status + " " + pp.statusText : "Failed to parse texture data", ip)
          },
          wp = async ip => {
            if (!yp._hardwareTexture) return;
            const Op = xp(ip);
            if (!Op) return;
            const Sp = Op instanceof Promise ? await Op : Op,
              Dp = yp.width;
            if (Lp) {
              const ip = this._getWebGLTextureType(Ip);
              let cp = this._getInternalFormat(op);
              const Op = this._getRGBABufferInternalSizedFormat(Ip);
              let xp = !1;
              cp === Wp.RGB && (cp = Wp.RGBA, xp = !0), this._bindTextureDirectly(Wp.TEXTURE_CUBE_MAP, yp, !0), this._unpackFlipY(!1);
              const Yp = Lp(Sp);
              for (let op = 0; op < Yp.length; op++) {
                const Sp = Dp >> op;
                for (let Lp = 0; Lp < 6; Lp++) {
                  let Dp = Yp[op][Lp];
                  xp && (Dp = pp(Dp, Sp, Sp, Ip)), Wp.texImage2D(Lp, op, Op, Sp, Sp, 0, cp, ip, Dp)
                }
              }
              this._bindTextureDirectly(Wp.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(yp, Sp, op, Ip, Pp);
            yp.isReady = !0, cp?.removePendingData(yp), yp.onLoadedObservable.notifyObservers(yp), yp.onLoadedObservable.clear(), Yp && Yp()
          };
        return this._loadFile(ip, (pp => {
          wp(pp).catch((pp => {
            Up(void 0, pp)
          }))
        }), void 0, cp?.offlineProvider, !0, Up), yp
      }, op.ThinEngine.prototype.createRawTexture2DArray = ip(!1), op.ThinEngine.prototype.createRawTexture3D = ip(!0), op.ThinEngine.prototype.updateRawTexture2DArray = cp(!1), op.ThinEngine.prototype.updateRawTexture3D = cp(!0))
    }();
    var Dp = cp(40088);
    let Ap = !1;
    Ap || (Ap = !0, op.ThinEngine.prototype._readTexturePixelsSync = function(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Sp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Yp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Ap = this._gl;
      if (!Ap) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const pp = Ap.createFramebuffer();
        if (!pp) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = pp
      }
      Ap.bindFramebuffer(Ap.FRAMEBUFFER, this._dummyFramebuffer), Op > -1 && (pp.is2DArray || pp.is3D) ? Ap.framebufferTextureLayer(Ap.FRAMEBUFFER, Ap.COLOR_ATTACHMENT0, pp._hardwareTexture?.underlyingResource, op, Op) : Op > -1 ? Ap.framebufferTexture2D(Ap.FRAMEBUFFER, Ap.COLOR_ATTACHMENT0, Ap.TEXTURE_CUBE_MAP_POSITIVE_X + Op, pp._hardwareTexture?.underlyingResource, op) : Ap.framebufferTexture2D(Ap.FRAMEBUFFER, Ap.COLOR_ATTACHMENT0, Ap.TEXTURE_2D, pp._hardwareTexture?.underlyingResource, op);
      let Pp = void 0 !== pp.type ? this._getWebGLTextureType(pp.type) : Ap.UNSIGNED_BYTE;
      return xp ? Ip || (Ip = (0, Dp.r)(pp.type, 4 * ip * cp)) : Pp === Ap.UNSIGNED_BYTE ? (Ip || (Ip = new Uint8Array(4 * ip * cp)), Pp = Ap.UNSIGNED_BYTE) : (Ip || (Ip = new Float32Array(4 * ip * cp)), Pp = Ap.FLOAT), Sp && this.flushFramebuffer(), Ap.readPixels(Lp, Yp, ip, cp, Ap.RGBA, Pp, Ip), Ap.bindFramebuffer(Ap.FRAMEBUFFER, this._currentFramebuffer), Ip
    }, op.ThinEngine.prototype._readTexturePixels = function(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Sp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Yp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp))
    }), (0, cp(40179).d)();
    let Pp = !1;
    Pp || (Pp = !0, op.ThinEngine.prototype._createDepthStencilCubeTexture = function(pp, ip) {
      const cp = new Sp.b(this, 12);
      if (cp.isCube = !0, 1 === this.eU) return xp.e.Error("Depth cube texture is not supported by WebGL 1."), cp;
      const Op = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...ip
        },
        op = this._gl;
      this._bindTextureDirectly(op.TEXTURE_CUBE_MAP, cp, !0), this._setupDepthStencilTexture(cp, pp, Op.bilinearFiltering, Op.comparisonFunction);
      for (let Ip = 0; Ip < 6; Ip++) Op.generateStencil ? op.texImage2D(op.TEXTURE_CUBE_MAP_POSITIVE_X + Ip, 0, op.DEPTH24_STENCIL8, pp, pp, 0, op.DEPTH_STENCIL, op.UNSIGNED_INT_24_8, null) : op.texImage2D(op.TEXTURE_CUBE_MAP_POSITIVE_X + Ip, 0, op.DEPTH_COMPONENT24, pp, pp, 0, op.DEPTH_COMPONENT, op.UNSIGNED_INT, null);
      return this._bindTextureDirectly(op.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(cp), cp
    }, op.ThinEngine.prototype._setCubeMapTextureParams = function(pp, ip, cp) {
      const Op = this._gl;
      Op.texParameteri(Op.TEXTURE_CUBE_MAP, Op.TEXTURE_MAG_FILTER, Op.LINEAR), Op.texParameteri(Op.TEXTURE_CUBE_MAP, Op.TEXTURE_MIN_FILTER, ip ? Op.LINEAR_MIPMAP_LINEAR : Op.LINEAR), Op.texParameteri(Op.TEXTURE_CUBE_MAP, Op.TEXTURE_WRAP_S, Op.CLAMP_TO_EDGE), Op.texParameteri(Op.TEXTURE_CUBE_MAP, Op.TEXTURE_WRAP_T, Op.CLAMP_TO_EDGE), pp.samplingMode = ip ? 3 : 2, ip && this.getCaps().textureMaxLevel && void 0 !== cp && cp > 0 && (Op.texParameteri(Op.TEXTURE_CUBE_MAP, Op.TEXTURE_MAX_LEVEL, cp), pp._maxLodLevel = cp), this._bindTextureDirectly(Op.TEXTURE_CUBE_MAP, null)
    }, op.ThinEngine.prototype.createCubeTexture = function(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Sp = arguments.length > 6 ? arguments[6] : void 0,
        Yp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Dp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ap = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Pp = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Wp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        yp = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Up = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const wp = this._gl;
      return this.createCubeTextureBase(pp, ip, cp, !!Op, op, Ip, Sp, Yp, Dp, Ap, Pp, Wp, (pp => this._bindTextureDirectly(wp.TEXTURE_CUBE_MAP, pp, !0)), ((pp, ip) => {
        const cp = this.needPOTTextures ? (0, Lp.e)(ip[0].width, this._caps.maxCubemapTextureSize) : ip[0].width,
          Ip = cp,
          Yp = [wp.TEXTURE_CUBE_MAP_POSITIVE_X, wp.TEXTURE_CUBE_MAP_POSITIVE_Y, wp.TEXTURE_CUBE_MAP_POSITIVE_Z, wp.TEXTURE_CUBE_MAP_NEGATIVE_X, wp.TEXTURE_CUBE_MAP_NEGATIVE_Y, wp.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(wp.TEXTURE_CUBE_MAP, pp, !0), this._unpackFlipY(!1);
        const Dp = Sp ? this._getInternalFormat(Sp, pp._useSRGBBuffer) : pp._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : wp.RGBA;
        let Ap = Sp ? this._getInternalFormat(Sp) : wp.RGBA;
        pp._useSRGBBuffer && 1 === this.eU && (Ap = Dp);
        for (let Op = 0; Op < Yp.length; Op++)
          if (ip[Op].width !== cp || ip[Op].height !== Ip) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void xp.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = cp, this._workingCanvas.height = Ip, this._workingContext.drawImage(ip[Op], 0, 0, ip[Op].width, ip[Op].height, 0, 0, cp, Ip), wp.texImage2D(Yp[Op], 0, Dp, Ap, wp.UNSIGNED_BYTE, this._workingCanvas)
          } else wp.texImage2D(Yp[Op], 0, Dp, Ap, wp.UNSIGNED_BYTE, ip[Op]);
        Op || wp.generateMipmap(wp.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(pp, !Op), pp.width = cp, pp.height = Ip, pp.isReady = !0, Sp && (pp.format = Sp), pp.onLoadedObservable.notifyObservers(pp), pp.onLoadedObservable.clear(), op && op()
      }), !!yp, Up)
    }, op.ThinEngine.prototype.generateMipMapsForCubemap = function(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (pp.generateMipMaps) {
        const cp = this._gl;
        this._bindTextureDirectly(cp.TEXTURE_CUBE_MAP, pp, !0), cp.generateMipmap(cp.TEXTURE_CUBE_MAP), ip && this._bindTextureDirectly(cp.TEXTURE_CUBE_MAP, null)
      }
    });
    cp(40182);
    let Wp = !1;
    Wp || (Wp = !0, op.ThinEngine.prototype.setDepthStencilTexture = function(pp, ip, cp, Op) {
      void 0 !== pp && (ip && (this._boundUniforms[pp] = ip), cp && cp.depthStencilTexture ? this._setTexture(pp, cp, !1, !0, Op) : this._setTexture(pp, null, void 0, void 0, Op))
    });
    let yp = !1;
    yp || (yp = !0, op.ThinEngine.prototype.createRenderTargetCubeTexture = function(pp, ip) {
      const cp = this._createHardwareRenderTargetWrapper(!1, !0, pp),
        Op = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...ip
        };
      Op.generateStencilBuffer = Op.generateDepthBuffer && Op.generateStencilBuffer, (1 !== Op.type || this._caps.textureFloatLinearFiltering) && (2 !== Op.type || this._caps.textureHalfFloatLinearFiltering) || (Op.samplingMode = 1);
      const op = this._gl,
        Ip = new Sp.b(this, 5);
      this._bindTextureDirectly(op.TEXTURE_CUBE_MAP, Ip, !0);
      const Lp = this._getSamplingParameters(Op.samplingMode, Op.generateMipMaps);
      1 !== Op.type || this._caps.textureFloat || (Op.type = 0, xp.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), op.texParameteri(op.TEXTURE_CUBE_MAP, op.TEXTURE_MAG_FILTER, Lp.mag), op.texParameteri(op.TEXTURE_CUBE_MAP, op.TEXTURE_MIN_FILTER, Lp.min), op.texParameteri(op.TEXTURE_CUBE_MAP, op.TEXTURE_WRAP_S, op.CLAMP_TO_EDGE), op.texParameteri(op.TEXTURE_CUBE_MAP, op.TEXTURE_WRAP_T, op.CLAMP_TO_EDGE);
      for (let Sp = 0; Sp < 6; Sp++) op.texImage2D(op.TEXTURE_CUBE_MAP_POSITIVE_X + Sp, 0, this._getRGBABufferInternalSizedFormat(Op.type, Op.format), pp, pp, 0, this._getInternalFormat(Op.format), this._getWebGLTextureType(Op.type), null);
      const Yp = op.createFramebuffer();
      return this._bindUnboundFramebuffer(Yp), cp._depthStencilBuffer = this._setupFramebufferDepthAttachments(Op.generateStencilBuffer, Op.generateDepthBuffer, pp, pp), Op.generateMipMaps && op.generateMipmap(op.TEXTURE_CUBE_MAP), this._bindTextureDirectly(op.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), cp._framebuffer = Yp, cp._generateDepthBuffer = Op.generateDepthBuffer, cp._generateStencilBuffer = Op.generateStencilBuffer, Ip.width = pp, Ip.height = pp, Ip.isReady = !0, Ip.isCube = !0, Ip.samples = 1, Ip.generateMipMaps = Op.generateMipMaps, Ip.samplingMode = Op.samplingMode, Ip.type = Op.type, Ip.format = Op.format, this._internalTexturesCache.push(Ip), cp.setTextures(Ip), cp
    });
    var Up = cp(40190),
      wp = cp(40195);
    let vp = !1;
    vp || (vp = !0, op.ThinEngine.prototype.createPrefilteredCubeTexture = function(pp, ip, Op, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Yp = arguments.length > 6 ? arguments[6] : void 0,
        Dp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Ap = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Pp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(pp, ip, null, !1, (async pp => {
        if (!pp) return void(Ip && Ip(null));
        const Lp = pp.texture;
        if (Ap ? pp.info.sphericalPolynomial && (Lp._sphericalPolynomial = pp.info.sphericalPolynomial) : Lp._sphericalPolynomial = Lp._sphericalPolynomial ?? new Up.e, Lp._source = 9, this.getCaps().textureLOD) return void(Ip && Ip(Lp));
        const Yp = this._gl,
          Dp = pp.width;
        if (!Dp) return;
        const {
          DDSTools: Pp
        } = await cp.e(311).then((() => cp(42016))), Wp = [];
        for (let cp = 0; cp < 3; cp++) {
          const Ip = 1 - cp / 2,
            Ap = op,
            yp = Math.log2(Dp) * Op + op,
            Up = Ap + (yp - Ap) * Ip,
            vp = Math.round(Math.min(Math.max(Up, 0), yp)),
            tp = new Sp.b(this, 2);
          if (tp.type = Lp.type, tp.format = Lp.format, tp.width = Math.pow(2, Math.max(Math.log2(Dp) - vp, 0)), tp.height = tp.width, tp.isCube = !0, tp._cachedWrapU = 0, tp._cachedWrapV = 0, this._bindTextureDirectly(Yp.TEXTURE_CUBE_MAP, tp, !0), tp.samplingMode = 2, Yp.texParameteri(Yp.TEXTURE_CUBE_MAP, Yp.TEXTURE_MAG_FILTER, Yp.LINEAR), Yp.texParameteri(Yp.TEXTURE_CUBE_MAP, Yp.TEXTURE_MIN_FILTER, Yp.LINEAR), Yp.texParameteri(Yp.TEXTURE_CUBE_MAP, Yp.TEXTURE_WRAP_S, Yp.CLAMP_TO_EDGE), Yp.texParameteri(Yp.TEXTURE_CUBE_MAP, Yp.TEXTURE_WRAP_T, Yp.CLAMP_TO_EDGE), pp.isDDS) {
            const ip = pp.info,
              cp = pp.data;
            this._unpackFlipY(ip.isCompressed), Pp.UploadDDSLevels(this, tp, cp, ip, !0, 6, vp)
          } else xp.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Yp.TEXTURE_CUBE_MAP, null);
          const Hp = new wp.d(ip);
          Hp._isCube = !0, Hp._texture = tp, tp.isReady = !0, Wp.push(Hp)
        }
        Lp._lodTextureHigh = Wp[2], Lp._lodTextureMid = Wp[1], Lp._lodTextureLow = Wp[0], Ip && Ip(Lp)
      }), Lp, Yp, Dp, Ap, Op, op, null, void 0, !1, Pp)
    });
    var tp = cp(40134);
    let Hp = !1;
    Hp || (Hp = !0, op.ThinEngine.prototype.createUniformBuffer = function(pp, ip) {
      const cp = this._gl.createBuffer();
      if (!cp) throw new Error("Unable to create uniform buffer");
      const Op = new tp.d(cp);
      return this.bindUniformBuffer(Op), pp instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, pp, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(pp), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Op.references = 1, Op
    }, op.ThinEngine.prototype.createDynamicUniformBuffer = function(pp, ip) {
      const cp = this._gl.createBuffer();
      if (!cp) throw new Error("Unable to create dynamic uniform buffer");
      const Op = new tp.d(cp);
      return this.bindUniformBuffer(Op), pp instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, pp, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(pp), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Op.references = 1, Op
    }, op.ThinEngine.prototype.updateUniformBuffer = function(pp, ip, cp, Op) {
      this.bindUniformBuffer(pp), void 0 === cp && (cp = 0), void 0 === Op ? ip instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cp, ip) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cp, new Float32Array(ip)) : ip instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, ip.subarray(cp, cp + Op)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(ip).subarray(cp, cp + Op)), this.bindUniformBuffer(null)
    }, op.ThinEngine.prototype.bindUniformBuffer = function(pp) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, pp ? pp.underlyingResource : null)
    }, op.ThinEngine.prototype.bindUniformBufferBase = function(pp, ip, cp) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, ip, pp ? pp.underlyingResource : null)
    }, op.ThinEngine.prototype.bindUniformBlock = function(pp, ip, cp) {
      const Op = pp.program,
        op = this._gl.getUniformBlockIndex(Op, ip);
      4294967295 !== op && this._gl.uniformBlockBinding(Op, op, cp)
    });
    var dp = cp(40071),
      ep = cp(40113);
    let jp = !1;
    jp || (jp = !0, ep.b.prototype.displayLoadingUI = function() {
      if (!(0, dp.j)()) return;
      const pp = this.loadingScreen;
      pp && pp.displayLoadingUI()
    }, ep.b.prototype.hideLoadingUI = function() {
      if (!(0, dp.j)()) return;
      const pp = this._loadingScreen;
      pp && pp.hideLoadingUI()
    }, Object.defineProperty(ep.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = ep.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(pp) {
        this._loadingScreen = pp
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ep.b.prototype, "loadingUIText", {
      set: function(pp) {
        this.loadingScreen.loadingUIText = pp
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ep.b.prototype, "loadingUIBackgroundColor", {
      set: function(pp) {
        this.loadingScreen.loadingUIBackgroundColor = pp
      },
      enumerable: !0,
      configurable: !0
    })), (0, cp(40164).e)();
    let kp = !1;
    kp || (kp = !0, ep.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, ep.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, ep.b.prototype.setDepthFunction = function(pp) {
      this._depthCullingState.depthFunc = pp
    }, ep.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, ep.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, ep.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, ep.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, ep.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, ep.b.prototype.setDepthWrite = function(pp) {
      this._depthCullingState.depthMask = pp
    }, ep.b.prototype.setAlphaConstants = function(pp, ip, cp, Op) {
      this._alphaState.setAlphaBlendConstants(pp, ip, cp, Op)
    }, ep.b.prototype.getAlphaMode = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[pp]
    }, ep.b.prototype.getAlphaEquation = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[pp]
    });
    let mp = !1;
    mp || (mp = !0, ep.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, ep.b.prototype.setStencilBuffer = function(pp) {
      this._stencilState.stencilTest = pp
    }, ep.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, ep.b.prototype.setStencilMask = function(pp) {
      this._stencilState.stencilMask = pp
    }, ep.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, ep.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, ep.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, ep.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, ep.b.prototype.setStencilFunction = function(pp) {
      this._stencilState.stencilFunc = pp
    }, ep.b.prototype.setStencilBackFunction = function(pp) {
      this._stencilState.stencilBackFunc = pp
    }, ep.b.prototype.setStencilFunctionReference = function(pp) {
      this._stencilState.stencilFuncRef = pp
    }, ep.b.prototype.setStencilFunctionMask = function(pp) {
      this._stencilState.stencilFuncMask = pp
    }, ep.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, ep.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, ep.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, ep.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, ep.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, ep.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, ep.b.prototype.setStencilOperationFail = function(pp) {
      this._stencilState.stencilOpStencilFail = pp
    }, ep.b.prototype.setStencilBackOperationFail = function(pp) {
      this._stencilState.stencilBackOpStencilFail = pp
    }, ep.b.prototype.setStencilOperationDepthFail = function(pp) {
      this._stencilState.stencilOpDepthFail = pp
    }, ep.b.prototype.setStencilBackOperationDepthFail = function(pp) {
      this._stencilState.stencilBackOpDepthFail = pp
    }, ep.b.prototype.setStencilOperationPass = function(pp) {
      this._stencilState.stencilOpStencilDepthPass = pp
    }, ep.b.prototype.setStencilBackOperationPass = function(pp) {
      this._stencilState.stencilBackOpStencilDepthPass = pp
    }, ep.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, ep.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    cp(40245);
    let Rp = !1;
    Rp || (Rp = !0, ep.b.prototype.createDepthStencilTexture = function(pp, ip, cp) {
      if (ip.isCube) {
        const cp = pp.width || pp;
        return this._createDepthStencilCubeTexture(cp, ip)
      }
      return this._createDepthStencilTexture(pp, ip, cp)
    });
    cp(40248), cp(40278);
    let qp = !1;
    qp || (qp = !0, op.ThinEngine.prototype.enableScissor = function(pp, ip, cp, Op) {
      const op = this._gl;
      op.enable(op.SCISSOR_TEST), op.scissor(pp, ip, cp, Op)
    }, op.ThinEngine.prototype.disableScissor = function() {
      const pp = this._gl;
      pp.disable(pp.SCISSOR_TEST)
    })
  },
  40028: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => ep
    });
    var Op = cp(40033),
      op = cp(37345),
      Ip = cp(40050),
      Sp = cp(40122);
    class xp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Lp(pp)
      }
      sampleFrame() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const ip = pp - this._lastFrameTimeMs;
            this._rollingFrameTime.add(ip)
          }
          this._lastFrameTimeMs = pp
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
        const pp = this._rollingFrameTime.history(0);
        return 0 === pp ? 0 : 1e3 / pp
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
    class Lp {
      constructor(pp) {
        this._samples = new Array(pp), this.reset()
      }
      add(pp) {
        let ip;
        if (this.isSaturated()) {
          const pp = this._samples[this._pos];
          ip = pp - this.average, this.average -= ip / (this._sampleCount - 1), this._m2 -= ip * (pp - this.average)
        } else this._sampleCount++;
        ip = pp - this.average, this.average += ip / this._sampleCount, this._m2 += ip * (pp - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = pp, this._pos++, this._pos %= this._samples.length
      }
      history(pp) {
        if (pp >= this._sampleCount || pp >= this._samples.length) return 0;
        const ip = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(ip - pp)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(pp) {
        const ip = this._samples.length;
        return (pp % ip + ip) % ip
      }
    }
    var Yp = cp(40134),
      Dp = cp(38905),
      Ap = cp(40149),
      Pp = cp(40113),
      Wp = cp(40071);

    function yp(pp) {
      const ip = function(pp) {
        if (!(0, Wp.f)() || !document.body) return null;
        const ip = document.createElement("span");
        ip.textContent = "Hg", ip.style.font = pp;
        const cp = document.createElement("div");
        cp.style.display = "inline-block", cp.style.width = "1px", cp.style.height = "0px", cp.style.verticalAlign = "bottom";
        const Op = document.createElement("div");
        let op, Ip;
        Op.style.whiteSpace = "nowrap", Op.appendChild(ip), Op.appendChild(cp), document.body.appendChild(Op);
        try {
          Ip = cp.getBoundingClientRect().top - ip.getBoundingClientRect().top, cp.style.verticalAlign = "baseline", op = cp.getBoundingClientRect().top - ip.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Op)
        }
        const Sp = {
          ascent: op,
          height: Ip,
          descent: Ip - op
        };
        return Up(Sp) ? Sp : null
      }(pp);
      if (ip) return ip;
      const cp = function(pp) {
        let ip = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? ip = new OffscreenCanvas(64, 64) : (0, Wp.f)() && "function" === typeof document.createElement && (ip = document.createElement("canvas"), ip.width = 64, ip.height = 64);
          const cp = ip?.getContext("2d");
          if (!cp) return null;
          cp.font = pp;
          const Op = cp.measureText("Hg"),
            op = Number(Op.actualBoundingBoxAscent ?? Op.fontBoundingBoxAscent),
            Ip = Number(Op.actualBoundingBoxDescent ?? Op.fontBoundingBoxDescent),
            Sp = {
              ascent: op,
              height: op + Ip,
              descent: Ip
            };
          return Up(Sp) ? Sp : null
        } catch {
          return null
        } finally {
          const pp = ip;
          "function" === typeof pp?.dispose && pp.dispose()
        }
      }(pp);
      return cp || function(pp) {
        const ip = Math.max(1, function(pp) {
            const ip = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(pp || ""));
            return ip ? Number(ip[1]) : 16
          }(pp)),
          cp = .8 * ip,
          Op = .2 * ip;
        return {
          ascent: cp,
          height: cp + Op,
          descent: Op
        }
      }(pp)
    }

    function Up(pp) {
      return Number.isFinite(pp.ascent) && Number.isFinite(pp.height) && Number.isFinite(pp.descent) && pp.height > 0
    }

    function wp(pp) {
      if (pp.requestPointerLock) {
        const ip = pp.requestPointerLock();
        ip instanceof Promise ? ip.then((() => {
          pp.focus()
        })).catch((() => {})) : pp.focus()
      }
    }
    var vp = cp(40159),
      tp = cp(40107),
      Hp = cp(40164),
      dp = cp(40172);
    class ep extends Ip.ThinEngine {
      static get NpmPackage() {
        return Pp.b.NpmPackage
      }
      static get Version() {
        return Pp.b.Version
      }
      static get Instances() {
        return op.e.Instances
      }
      static get LastCreatedEngine() {
        return op.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return op.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(pp) {
        return Pp.b.DefaultLoadingScreenFactory(pp)
      }
      get _supportsHardwareTextureRescaling() {
        return !!ep._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Hp.e)(), (0, dp.d)(), super(pp, ip, cp, Op), this._performanceMonitor = new xp, this._drawCalls = new vp.b, pp && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(pp) {
        super._sharedInit(pp),
          function(pp, ip, cp) {
            pp._onCanvasFocus = () => {
              pp.onCanvasFocusObservable.notifyObservers(pp)
            }, pp._onCanvasBlur = () => {
              pp.onCanvasBlurObservable.notifyObservers(pp)
            }, pp._onCanvasContextMenu = ip => {
              pp.disableContextMenu && ip.preventDefault()
            }, ip.addEventListener("focus", pp._onCanvasFocus), ip.addEventListener("blur", pp._onCanvasBlur), ip.addEventListener("contextmenu", pp._onCanvasContextMenu), pp._onBlur = () => {
              pp.disablePerformanceMonitorInBackground && pp.performanceMonitor.disable(), pp._windowIsBackground = !0
            }, pp._onFocus = () => {
              pp.disablePerformanceMonitorInBackground && pp.performanceMonitor.enable(), pp._windowIsBackground = !1
            }, pp._onCanvasPointerOut = cp => {
              document.elementFromPoint(cp.clientX, cp.clientY) !== ip && pp.onCanvasPointerOutObservable.notifyObservers(cp)
            };
            const Op = pp.getHostWindow();
            Op && "function" === typeof Op.addEventListener && (Op.addEventListener("blur", pp._onBlur), Op.addEventListener("focus", pp._onFocus)), ip.addEventListener("pointerout", pp._onCanvasPointerOut), cp.doNotHandleTouchAction || function(pp) {
              pp && pp.setAttribute && (pp.setAttribute("touch-action", "none"), pp.style.touchAction = "none", pp.style.webkitTapHighlightColor = "transparent")
            }(ip), !Pp.b.audioEngine && cp.audioEngine && Pp.b.AudioEngineFactory && (Pp.b.audioEngine = Pp.b.AudioEngineFactory(pp.getRenderingCanvas(), pp.getAudioContext(), pp.getAudioDestination())), (0, Wp.f)() && (pp._onFullscreenChange = () => {
              pp.isFullscreen = !!document.fullscreenElement, pp.isFullscreen && pp._pointerLockRequested && ip && wp(ip)
            }, document.addEventListener("fullscreenchange", pp._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", pp._onFullscreenChange, !1), pp._onPointerLockChange = () => {
              pp.isPointerLock = document.pointerLockElement === ip
            }, document.addEventListener("pointerlockchange", pp._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", pp._onPointerLockChange, !1)), pp.enableOfflineSupport = void 0 !== Pp.b.OfflineProviderFactory, pp._deterministicLockstep = !!cp.deterministicLockstep, pp._lockstepMaxSteps = cp.lockstepMaxSteps || 0, pp._timeStep = cp.timeStep || 1 / 60
          }(this, pp, this._creationOptions)
      }
      resizeImageBitmap(pp, ip, cp) {
        return function(pp, ip, cp, Op) {
          const op = pp.createCanvas(cp, Op).getContext("2d");
          if (!op) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return op.drawImage(ip, 0, 0), op.getImageData(0, 0, cp, Op).data
        }(this, pp, ip, cp)
      }
      async _createImageBitmapFromSource(pp, ip) {
        return await async function(pp, ip, cp) {
          return await new Promise(((Op, op) => {
            const Ip = new Image;
            Ip.onload = () => {
              Ip.decode().then((() => {
                pp.createImageBitmap(Ip, cp).then((pp => {
                  Op(pp)
                }))
              }))
            }, Ip.onerror = () => {
              op(`Error loading image ${Ip.src}`)
            }, Ip.src = ip
          }))
        }(this, pp, ip)
      }
      switchFullscreen(pp) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(pp)
      }
      enterFullscreen(pp) {
        this.isFullscreen || (this._pointerLockRequested = pp, this._renderingCanvas && function(pp) {
          const ip = pp.requestFullscreen || pp.webkitRequestFullscreen;
          ip && ip.call(pp)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const pp = document;
          document.exitFullscreen ? document.exitFullscreen() : pp.webkitCancelFullScreen && pp.webkitCancelFullScreen()
        }()
      }
      setDitheringState(pp) {
        pp ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(pp) {
        pp ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(pp, ip, cp, Op) {
        const op = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(pp, ip, cp, Op), op
      }
      scissorClear(pp, ip, cp, Op, op) {
        this.enableScissor(pp, ip, cp, Op), this.clear(op, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(pp) {
        const ip = this._gl.getAttachedShaders(pp);
        return ip ? this._gl.getShaderSource(ip[0]) : null
      }
      getFragmentShaderSource(pp) {
        const ip = this._gl.getAttachedShaders(pp);
        return ip ? this._gl.getShaderSource(ip[1]) : null
      }
      set framebufferDimensionsObject(pp) {
        this._framebufferDimensionsObject = pp, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const pp of this.scenes) pp.resetCachedMaterial(), pp._rebuildGeometries();
        for (const pp of this._virtualScenes) pp.resetCachedMaterial(), pp._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(pp) {
        return yp(pp)
      }
      enterPointerlock() {
        this._renderingCanvas && wp(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Hk() {
        this._measureFps(), super.Hk()
      }
      _deletePipelineContext(pp) {
        const ip = pp;
        ip && ip.program && ip.transformFeedback && (this.deleteTransformFeedback(ip.transformFeedback), ip.transformFeedback = null), super._deletePipelineContext(pp)
      }
      createShaderProgram(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        op = op || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Sp = super.createShaderProgram(pp, ip, cp, Op, op, Ip);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Sp
      }
      _createShaderProgram(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Ip = Op.createProgram();
        if (pp.program = Ip, !Ip) throw new Error("Unable to create program");
        if (Op.attachShader(Ip, ip), Op.attachShader(Ip, cp), this.eU > 1 && op) {
          const ip = this.createTransformFeedback();
          this.bindTransformFeedback(ip), this.setTranformFeedbackVaryings(Ip, op), pp.transformFeedback = ip
        }
        return Op.linkProgram(Ip), this.eU > 1 && op && this.bindTransformFeedback(null), pp.context = Op, pp.vertexShader = ip, pp.fragmentShader = cp, pp.isParallelCompiled || this._finalizePipelineContext(pp), Ip
      }
      _releaseTexture(pp) {
        super._releaseTexture(pp)
      }
      _releaseRenderTargetWrapper(pp) {
        super._releaseRenderTargetWrapper(pp);
        for (const ip of this.scenes) {
          for (const cp of ip.postProcesses) cp._outputTexture === pp && (cp._outputTexture = null);
          for (const cp of ip.cameras)
            for (const ip of cp._postProcesses) ip && ip._outputTexture === pp && (ip._outputTexture = null)
        }
      }
      _rescaleTexture(pp, ip, cp, Op, op) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Ip = this.createRenderTargetTexture({
          width: ip.width,
          height: ip.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && ep._RescalePostProcessFactory && (this._rescalePostProcess = ep._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Sp = () => {
              this._rescalePostProcess.onApply = function(ip) {
                ip._bindTexture("textureSampler", pp)
              };
              let Sp = cp;
              Sp || (Sp = this.scenes[this.scenes.length - 1]), Sp.postProcessManager.directRender([this._rescalePostProcess], Ip, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, ip, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Op, 0, 0, ip.width, ip.height, 0), this.unBindFramebuffer(Ip), Ip.dispose(), op && op()
            },
            xp = this._rescalePostProcess.getEffect();
          xp ? xp.executeWhenCompiled(Sp) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((pp => {
            pp.executeWhenCompiled(Sp)
          }))
        }
      }
      wrapWebGLTexture(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Sp = new Ap.b(pp, this._gl),
          xp = new Op.b(this, 15, !0);
        return xp._hardwareTexture = Sp, xp.baseWidth = op, xp.baseHeight = Ip, xp.width = op, xp.height = Ip, xp.isReady = !0, xp.useMipMaps = ip, this.updateTextureSamplingMode(cp, xp), xp
      }
      updateWrappedWebGLTexture(pp, ip) {
        if (15 !== pp.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Op of this._renderTargetWrapperCache)
          if (Op.textures?.includes(pp)) {
            if (Op.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Op._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } pp._hardwareTexture = new Ap.b(ip, this._gl), pp.isReady = !0, pp._cachedCoordinatesMode = null, pp._cachedWrapU = null, pp._cachedWrapV = null, pp._cachedWrapR = null, pp._cachedAnisotropicFilteringLevel = null;
        for (const Op in this._boundTexturesCache) this._boundTexturesCache[Op] === pp && (this._boundTexturesCache[Op] = null);
        this.updateTextureSamplingMode(pp.samplingMode, pp);
        const cp = this._gl;
        for (const Op of this._renderTargetWrapperCache) {
          if (Op.texture !== pp) continue;
          const op = Op,
            Ip = Op.samples,
            Sp = Ip > 1;
          op._framebuffer && cp.deleteFramebuffer(op._framebuffer), !Sp && op._depthStencilBuffer && (cp.deleteRenderbuffer(op._depthStencilBuffer), op._depthStencilBuffer = null);
          const xp = this._currentFramebuffer,
            Lp = cp.createFramebuffer();
          this._bindUnboundFramebuffer(Lp), cp.framebufferTexture2D(cp.FRAMEBUFFER, cp.COLOR_ATTACHMENT0, cp.TEXTURE_2D, ip, 0), Sp || (op._depthStencilBuffer = this._setupFramebufferDepthAttachments(Op._generateStencilBuffer, Op._generateDepthBuffer, Op.width, Op.height)), this._bindUnboundFramebuffer(xp), op._framebuffer = Lp, Sp && (Op._samples = 1, this.updateRenderTargetTextureSampleCount(op, Ip))
        }
      }
      _uploadImageToTexture(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const op = this._gl,
          Ip = this._getWebGLTextureType(pp.type),
          Sp = this._getInternalFormat(pp.format),
          xp = this._getRGBABufferInternalSizedFormat(pp.type, Sp),
          Lp = pp.isCube ? op.TEXTURE_CUBE_MAP : op.TEXTURE_2D;
        this._bindTextureDirectly(Lp, pp, !0), this._unpackFlipY(pp.invertY);
        let Yp = op.TEXTURE_2D;
        pp.isCube && (Yp = op.TEXTURE_CUBE_MAP_POSITIVE_X + cp), op.texImage2D(Yp, Op, xp, Sp, Ip, ip), this._bindTextureDirectly(Lp, null, !0)
      }
      updateTextureComparisonFunction(pp, ip) {
        if (1 === this.eU) return void Dp.e.Error("WebGL 1 does not support texture comparison.");
        const cp = this._gl;
        pp.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, pp, !0), 0 === ip ? (cp.texParameteri(cp.TEXTURE_CUBE_MAP, cp.TEXTURE_COMPARE_FUNC, 515), cp.texParameteri(cp.TEXTURE_CUBE_MAP, cp.TEXTURE_COMPARE_MODE, cp.NONE)) : (cp.texParameteri(cp.TEXTURE_CUBE_MAP, cp.TEXTURE_COMPARE_FUNC, ip), cp.texParameteri(cp.TEXTURE_CUBE_MAP, cp.TEXTURE_COMPARE_MODE, cp.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, pp, !0), 0 === ip ? (cp.texParameteri(cp.TEXTURE_2D, cp.TEXTURE_COMPARE_FUNC, 515), cp.texParameteri(cp.TEXTURE_2D, cp.TEXTURE_COMPARE_MODE, cp.NONE)) : (cp.texParameteri(cp.TEXTURE_2D, cp.TEXTURE_COMPARE_FUNC, ip), cp.texParameteri(cp.TEXTURE_2D, cp.TEXTURE_COMPARE_MODE, cp.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), pp._comparisonFunction = ip
      }
      createInstancesBuffer(pp) {
        const ip = this._gl.createBuffer();
        if (!ip) throw new Error("Unable to create instance buffer");
        const cp = new Yp.d(ip);
        return cp.TA = pp, this.bindArrayBuffer(cp), this._gl.bufferData(this._gl.ARRAY_BUFFER, pp, this._gl.DYNAMIC_DRAW), cp.references = 1, cp
      }
      deleteInstancesBuffer(pp) {
        this._gl.deleteBuffer(pp)
      }
      async _clientWaitAsync(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Op = this._gl;
        return await new Promise(((op, Ip) => {
          (0, tp.c)((() => {
            const cp = Op.clientWaitSync(pp, ip, 0);
            if (cp == Op.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return cp != Op.TIMEOUT_EXPIRED
          }), op, Ip, cp)
        }))
      }
      _readPixelsAsync(pp, ip, cp, Op, op, Ip, Sp) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const xp = this._gl,
          Lp = xp.createBuffer();
        xp.bindBuffer(xp.PIXEL_PACK_BUFFER, Lp), xp.bufferData(xp.PIXEL_PACK_BUFFER, Sp.byteLength, xp.STREAM_READ), xp.readPixels(pp, ip, cp, Op, op, Ip, 0), xp.bindBuffer(xp.PIXEL_PACK_BUFFER, null);
        const Yp = xp.fenceSync(xp.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Yp ? (xp.flush(), this._clientWaitAsync(Yp, 0, 10).then((() => (xp.deleteSync(Yp), xp.bindBuffer(xp.PIXEL_PACK_BUFFER, Lp), xp.getBufferSubData(xp.PIXEL_PACK_BUFFER, 0, Sp), xp.bindBuffer(xp.PIXEL_PACK_BUFFER, null), xp.deleteBuffer(Lp), Sp)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(pp, ip) {
            1 === op.e.Instances.length && Pp.b.audioEngine && (Pp.b.audioEngine.dispose(), Pp.b.audioEngine = null);
            const cp = pp.getHostWindow();
            cp && "function" === typeof cp.removeEventListener && (cp.removeEventListener("blur", pp._onBlur), cp.removeEventListener("focus", pp._onFocus)), ip && (ip.removeEventListener("focus", pp._onCanvasFocus), ip.removeEventListener("blur", pp._onCanvasBlur), ip.removeEventListener("pointerout", pp._onCanvasPointerOut), ip.removeEventListener("contextmenu", pp._onCanvasContextMenu)), (0, Wp.f)() && (document.removeEventListener("fullscreenchange", pp._onFullscreenChange), document.removeEventListener("mozfullscreenchange", pp._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", pp._onFullscreenChange), document.removeEventListener("msfullscreenchange", pp._onFullscreenChange), document.removeEventListener("pointerlockchange", pp._onPointerLockChange), document.removeEventListener("mspointerlockchange", pp._onPointerLockChange), document.removeEventListener("mozpointerlockchange", pp._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", pp._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    ep.ALPHA_DISABLE = 0, ep.ALPHA_ADD = 1, ep.ALPHA_COMBINE = 2, ep.ALPHA_SUBTRACT = 3, ep.ALPHA_MULTIPLY = 4, ep.ALPHA_MAXIMIZED = 5, ep.ALPHA_ONEONE = 6, ep.ALPHA_PREMULTIPLIED = 7, ep.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ep.ALPHA_INTERPOLATE = 9, ep.ALPHA_SCREENMODE = 10, ep.DELAYLOADSTATE_NONE = 0, ep.DELAYLOADSTATE_LOADED = 1, ep.DELAYLOADSTATE_LOADING = 2, ep.DELAYLOADSTATE_NOTLOADED = 4, ep.NEVER = 512, ep.ALWAYS = 519, ep.LESS = 513, ep.EQUAL = 514, ep.LEQUAL = 515, ep.GREATER = 516, ep.GEQUAL = 518, ep.NOTEQUAL = 517, ep.KEEP = 7680, ep.REPLACE = 7681, ep.INCR = 7682, ep.DECR = 7683, ep.INVERT = 5386, ep.INCR_WRAP = 34055, ep.DECR_WRAP = 34056, ep.TEXTURE_CLAMP_ADDRESSMODE = 0, ep.TEXTURE_WRAP_ADDRESSMODE = 1, ep.TEXTURE_MIRROR_ADDRESSMODE = 2, ep.TEXTUREFORMAT_ALPHA = 0, ep.TEXTUREFORMAT_LUMINANCE = 1, ep.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, ep.TEXTUREFORMAT_RGB = 4, ep.TEXTUREFORMAT_RGBA = 5, ep.TEXTUREFORMAT_RED = 6, ep.TEXTUREFORMAT_R = 6, ep.TEXTUREFORMAT_R16_UNORM = 33322, ep.TEXTUREFORMAT_RG16_UNORM = 33324, ep.TEXTUREFORMAT_RGB16_UNORM = 32852, ep.TEXTUREFORMAT_RGBA16_UNORM = 32859, ep.TEXTUREFORMAT_R16_SNORM = 36760, ep.TEXTUREFORMAT_RG16_SNORM = 36761, ep.TEXTUREFORMAT_RGB16_SNORM = 36762, ep.TEXTUREFORMAT_RGBA16_SNORM = 36763, ep.TEXTUREFORMAT_RG = 7, ep.TEXTUREFORMAT_RED_INTEGER = 8, ep.TEXTUREFORMAT_R_INTEGER = 8, ep.TEXTUREFORMAT_RG_INTEGER = 9, ep.TEXTUREFORMAT_RGB_INTEGER = 10, ep.TEXTUREFORMAT_RGBA_INTEGER = 11, ep.TEXTURETYPE_UNSIGNED_BYTE = 0, ep.TEXTURETYPE_UNSIGNED_INT = 0, ep.TEXTURETYPE_FLOAT = 1, ep.TEXTURETYPE_HALF_FLOAT = 2, ep.TEXTURETYPE_BYTE = 3, ep.TEXTURETYPE_SHORT = 4, ep.TEXTURETYPE_UNSIGNED_SHORT = 5, ep.TEXTURETYPE_INT = 6, ep.TEXTURETYPE_UNSIGNED_INTEGER = 7, ep.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, ep.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, ep.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, ep.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, ep.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, ep.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, ep.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, ep.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, ep.TEXTURE_NEAREST_SAMPLINGMODE = 1, ep.TEXTURE_BILINEAR_SAMPLINGMODE = 2, ep.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, ep.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, ep.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, ep.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, ep.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, ep.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, ep.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, ep.TEXTURE_NEAREST_LINEAR = 7, ep.TEXTURE_NEAREST_NEAREST = 1, ep.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, ep.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, ep.TEXTURE_LINEAR_LINEAR = 2, ep.TEXTURE_LINEAR_NEAREST = 12, ep.TEXTURE_EXPLICIT_MODE = 0, ep.TEXTURE_SPHERICAL_MODE = 1, ep.TEXTURE_PLANAR_MODE = 2, ep.TEXTURE_CUBIC_MODE = 3, ep.TEXTURE_PROJECTION_MODE = 4, ep.TEXTURE_SKYBOX_MODE = 5, ep.TEXTURE_INVCUBIC_MODE = 6, ep.TEXTURE_EQUIRECTANGULAR_MODE = 7, ep.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, ep.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, ep.SCALEMODE_FLOOR = 1, ep.SCALEMODE_NEAREST = 2, ep.SCALEMODE_CEILING = 3
  },
  40188: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(40151);
    class op {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(pp) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = pp, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, pp && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Op.c)(pp.format))
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
      getBaseArrayLayer(pp) {
        if (!this._textures) return -1;
        const ip = this._textures[pp],
          cp = this._layerIndices?.[pp] ?? 0,
          Op = this._faceIndices?.[pp] ?? 0;
        return ip.isCube ? 6 * cp + Op : ip.is3D ? 0 : cp
      }
      get samples() {
        return this._samples
      }
      setSamples(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === pp && !cp) return pp;
        const Op = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, pp, ip) : this._engine.updateRenderTargetTextureSampleCount(this, pp);
        return this._samples = pp, Op
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(pp, ip, cp, Op, op) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = pp, this._isCube = ip, this._size = cp, this._engine = Op, this._depthStencilTexture = null, this.label = op
      }
      setTextures(pp) {
        Array.isArray(pp) ? this._textures = pp : this._textures = pp ? [pp] : null
      }
      setTexture(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[ip] !== pp && (this._textures[ip] && cp && this._textures[ip].dispose(), this._textures[ip] = pp)
      }
      setLayerAndFaceIndices(pp, ip) {
        this._layerIndices = pp, this._faceIndices = ip
      }
      setLayerAndFaceIndex() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== ip && ip >= 0 && (this._layerIndices[pp] = ip), void 0 !== cp && cp >= 0 && (this._faceIndices[pp] = cp)
      }
      createDepthStencilTexture() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = cp, this._depthStencilTextureLabel = Ip, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: ip,
          comparisonFunction: pp,
          generateStencil: cp,
          isCube: this._isCube,
          samples: Op,
          depthTextureFormat: op,
          label: Ip
        }, this), this._depthStencilTexture
      }
      _shareDepth(pp) {
        this.shareDepth(pp)
      }
      shareDepth(pp) {
        this._depthStencilTexture && (pp._depthStencilTexture && pp._depthStencilTexture.dispose(), pp._depthStencilTexture = this._depthStencilTexture, pp._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(pp) {
        this.texture && this.texture._swapAndDie(pp), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let pp = null;
        if (this._isMulti) {
          const ip = this.textures;
          if (ip && ip.length > 0) {
            let cp = !1,
              Op = ip.length,
              op = -1;
            const Ip = ip[ip.length - 1]._source;
            14 !== Ip && 12 !== Ip || (cp = !0, op = ip[ip.length - 1].format, Op--);
            const Sp = [],
              xp = [],
              Lp = [],
              Yp = [],
              Dp = [],
              Ap = [],
              Pp = [],
              Wp = {};
            for (let pp = 0; pp < Op; ++pp) {
              const cp = ip[pp];
              Sp.push(cp.samplingMode), xp.push(cp.type), Lp.push(cp.format);
              void 0 !== Wp[cp.uniqueId] ? (Yp.push(-1), Pp.push(0)) : (Wp[cp.uniqueId] = pp, cp.is2DArray ? (Yp.push(35866), Pp.push(cp.depth)) : cp.isCube ? (Yp.push(34067), Pp.push(0)) : cp.is3D ? (Yp.push(32879), Pp.push(cp.depth)) : (Yp.push(3553), Pp.push(0))), this._faceIndices && Dp.push(this._faceIndices[pp] ?? 0), this._layerIndices && Ap.push(this._layerIndices[pp] ?? 0)
            }
            const yp = {
                samplingModes: Sp,
                generateMipMaps: ip[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: cp,
                depthTextureFormat: op,
                types: xp,
                formats: Lp,
                dxp: Op,
                targetTypes: Yp,
                faceIndex: Dp,
                layerIndex: Ap,
                layerCounts: Pp,
                label: this.label
              },
              Up = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            pp = this._engine.createMultipleRenderTarget(Up, yp);
            for (let wp = 0; wp < Op; ++wp) {
              if (-1 !== Yp[wp]) continue;
              const cp = Wp[ip[wp].uniqueId];
              pp.setTexture(pp.textures[cp], wp)
            }
          }
        } else {
          const ip = {};
          if (ip.generateDepthBuffer = this._generateDepthBuffer, ip.generateMipMaps = this.texture?.generateMipMaps ?? !1, ip.generateStencilBuffer = this._generateStencilBuffer, ip.samplingMode = this.texture?.samplingMode, ip.type = this.texture?.type, ip.format = this.texture?.format, ip.noColorAttachment = !this._textures, ip.label = this.label, this.isCube) pp = this._engine.createRenderTargetCubeTexture(this.width, ip);
          else {
            const cp = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            pp = this._engine.createRenderTargetTexture(cp, ip)
          }
          pp.texture && (pp.texture.isReady = !0)
        }
        return pp
      }
      _swapRenderTargetWrapper(pp) {
        if (this._textures && pp._textures)
          for (let ip = 0; ip < this._textures.length; ++ip) this._textures[ip]._swapAndDie(pp._textures[ip], !1), pp._textures[ip].isReady = !0;
        this._depthStencilTexture && pp._depthStencilTexture && (this._depthStencilTexture._swapAndDie(pp._depthStencilTexture), pp._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const pp = this._cloneRenderTargetWrapper();
        if (pp) {
          if (this._depthStencilTexture) {
            const ip = this._depthStencilTexture.samplingMode,
              cp = this._depthStencilTexture.format,
              Op = 2 === ip || 3 === ip || 11 === ip;
            pp.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Op, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, cp, this._depthStencilTextureLabel)
          }
          this.samples > 1 && pp.setSamples(this.samples), pp._swapRenderTargetWrapper(this), pp.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let pp = 0; pp < this._textures.length; ++pp) this._textures[pp].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40597: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    class Op {
      static get ForceFullSceneLoadingForIncremental() {
        return Op._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(pp) {
        Op._ForceFullSceneLoadingForIncremental = pp
      }
      static get ShowLoadingScreen() {
        return Op._ShowLoadingScreen
      }
      static set ShowLoadingScreen(pp) {
        Op._ShowLoadingScreen = pp
      }
      static get loggingLevel() {
        return Op._LoggingLevel
      }
      static set loggingLevel(pp) {
        Op._LoggingLevel = pp
      }
      static get CleanBoneMatrixWeights() {
        return Op._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(pp) {
        Op._CleanBoneMatrixWeights = pp
      }
    }
    Op._ForceFullSceneLoadingForIncremental = !1, Op._ShowLoadingScreen = !0, Op._CleanBoneMatrixWeights = !1, Op._LoggingLevel = 0
  },
  40286: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(38905);
    const op = new Map;

    function Ip(pp, ip) {
      (function(pp) {
        return op.delete(pp)
      })(pp) && Op.e.Warn(`Extension with the name '${pp}' already exists`), op.set(pp, ip)
    }

    function Sp(pp, ip) {
      "image/ktx" !== ip && "image/ktx2" !== ip || (pp = ".ktx"), op.has(pp) || (pp.endsWith(".ies") && Ip(".ies", (async () => await cp.e(314).then((() => cp(42034))).then((pp => new pp._IESTextureLoader)))), pp.endsWith(".dds") && Ip(".dds", (async () => await cp.e(312).then((() => cp(42041))).then((pp => new pp._DDSTextureLoader)))), pp.endsWith(".basis") && Ip(".basis", (async () => await cp.e(315).then((() => cp(42046))).then((pp => new pp._BasisTextureLoader)))), pp.endsWith(".env") && Ip(".env", (async () => await Promise.all([cp.e(316), cp.e(313)]).then((() => cp(42054))).then((pp => new pp._ENVTextureLoader)))), pp.endsWith(".hdr") && Ip(".hdr", (async () => await cp.e(317).then((() => cp(42115))).then((pp => new pp._HDRTextureLoader)))), (pp.endsWith(".ktx") || pp.endsWith(".ktx2")) && (Ip(".ktx", (async () => await cp.e(318).then((() => cp(42119))).then((pp => new pp._KTXTextureLoader)))), Ip(".ktx2", (async () => await cp.e(318).then((() => cp(42119))).then((pp => new pp._KTXTextureLoader))))), pp.endsWith(".tga") && Ip(".tga", (async () => await cp.e(319).then((() => cp(42125))).then((pp => new pp._TGATextureLoader)))), pp.endsWith(".exr") && Ip(".exr", (async () => await cp.e(320).then((() => cp(42134))).then((pp => new pp._ExrTextureLoader)))));
      const Op = op.get(pp);
      return Op ? Promise.resolve(Op(ip)) : null
    }
  },
  40621: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      c: () => Yp
    });
    var Op = cp(40476),
      op = cp(40236),
      Ip = cp(37368);
    class Sp extends Op.b {
      get u9() {
        return this._subMaterials
      }
      set u9(pp) {
        this._subMaterials = pp, this._hookArray(pp)
      }
      getChildren() {
        return this.u9
      }
      constructor(pp, ip) {
        super(pp, ip, !0), this._waitingSubMaterialsUniqueIds = [], this.Gl().addMultiMaterial(this), this.u9 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(pp) {
        var ip = this;
        const cp = pp.push;
        pp.push = function() {
          for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
          const Sp = cp.apply(pp, op);
          return ip._markAllSubMeshesAsTexturesDirty(), Sp
        };
        const Op = pp.splice;
        pp.splice = (ip, cp) => {
          const op = Op.call(pp, ip, cp ?? pp.length);
          return this._markAllSubMeshesAsTexturesDirty(), op
        }
      }
      getSubMaterial(pp) {
        return pp < 0 || pp >= this.u9.length ? this.Gl().defaultMaterial : this.u9[pp]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.u9.map((pp => pp ? pp.getActiveTextures() : [])))
      }
      hasTexture(pp) {
        if (super.hasTexture(pp)) return !0;
        for (let ip = 0; ip < this.u9.length; ip++)
          if (this.u9[ip]?.hasTexture(pp)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(pp, ip, cp) {
        for (let Op = 0; Op < this.u9.length; Op++) {
          const op = this.u9[Op];
          if (op) {
            if (op._storeEffectOnSubMeshes) {
              if (!op.isReadyForSubMesh(pp, ip, cp)) return !1;
              continue
            }
            if (!op.isReady(pp)) return !1
          }
        }
        return !0
      }
      clone(pp, ip) {
        const cp = new Sp(pp, this.Gl());
        for (let Op = 0; Op < this.u9.length; Op++) {
          let op;
          const Ip = this.u9[Op];
          op = ip && Ip ? Ip.clone(pp + "-" + Ip.name) : this.u9[Op], cp.u9.push(op)
        }
        return cp
      }
      serialize() {
        const pp = {};
        pp.name = this.name, pp.id = this.id, pp.uniqueId = this.uniqueId, op.b && (pp.tags = op.b.GetTags(this)), pp.materialsUniqueIds = [], pp.materials = [];
        for (let ip = 0; ip < this.u9.length; ip++) {
          const cp = this.u9[ip];
          cp ? (pp.materialsUniqueIds.push(cp.uniqueId), pp.materials.push(cp.id)) : (pp.materialsUniqueIds.push(null), pp.materials.push(null))
        }
        return pp
      }
      dispose(pp, ip, cp) {
        const Op = this.Gl();
        if (!Op) return;
        if (cp)
          for (let Ip = 0; Ip < this.u9.length; Ip++) {
            const cp = this.u9[Ip];
            cp && cp.dispose(pp, ip)
          }
        const op = Op.multiMaterials.indexOf(this);
        op >= 0 && Op.multiMaterials.splice(op, 1), super.dispose(pp, ip)
      }
    }
    let xp = !1;

    function Lp(pp, ip) {
      const cp = new Sp(pp.name, ip);
      if (cp.id = pp.id, cp._loadedUniqueId = pp.uniqueId, op.b && op.b.AddTagsTo(cp, pp.tags), pp.materialsUniqueIds) cp._waitingSubMaterialsUniqueIds = pp.materialsUniqueIds;
      else
        for (const Op of pp.materials) cp.u9.push(ip.getLastMaterialById(Op));
      return cp
    }

    function Yp() {
      xp || (xp = !0, Sp.ParseMultiMaterial = Lp, (0, Ip.g)("BABYLON.MultiMaterial", Sp))
    }
  },
  40423: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op, op, Ip = cp(37320);
    ! function(pp) {
      pp[pp.LOCAL = 0] = "LOCAL", pp[pp.WORLD = 1] = "WORLD", pp[pp.BONE = 2] = "BONE"
    }(Op || (Op = {}));
    class Sp {}
    Sp.X = new Ip.o(1, 0, 0), Sp.Y = new Ip.o(0, 1, 0), Sp.Z = new Ip.o(0, 0, 1),
      function(pp) {
        pp[pp.X = 0] = "X", pp[pp.Y = 1] = "Y", pp[pp.Z = 2] = "Z"
      }(op || (op = {}))
  },
  40190: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      e: () => Yp
    });
    var Op = cp(37320);
    const op = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Ip = [() => 1, pp => pp.y, pp => pp.z, pp => pp.x, pp => pp.x * pp.y, pp => pp.y * pp.z, pp => 3 * pp.z * pp.z - 1, pp => pp.x * pp.z, pp => pp.x * pp.x - pp.y * pp.y],
      Sp = (pp, ip) => op[pp] * Ip[pp](ip),
      xp = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Lp {
      constructor() {
        this.preScaled = !1, this.l00 = Op.o.Zero(), this.l1_1 = Op.o.Zero(), this.l10 = Op.o.Zero(), this.l11 = Op.o.Zero(), this.l2_2 = Op.o.Zero(), this.l2_1 = Op.o.Zero(), this.l20 = Op.o.Zero(), this.l21 = Op.o.Zero(), this.l22 = Op.o.Zero()
      }
      addLight(pp, ip, cp) {
        Op.i.Zy[0].set(ip.r, ip.g, ip.b);
        const op = Op.i.Zy[0],
          Ip = Op.i.Zy[1];
        op.scaleToRef(cp, Ip), Ip.scaleToRef(Sp(0, pp), Op.i.Zy[2]), this.l00.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(1, pp), Op.i.Zy[2]), this.l1_1.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(2, pp), Op.i.Zy[2]), this.l10.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(3, pp), Op.i.Zy[2]), this.l11.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(4, pp), Op.i.Zy[2]), this.l2_2.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(5, pp), Op.i.Zy[2]), this.l2_1.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(6, pp), Op.i.Zy[2]), this.l20.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(7, pp), Op.i.Zy[2]), this.l21.addInPlace(Op.i.Zy[2]), Ip.scaleToRef(Sp(8, pp), Op.i.Zy[2]), this.l22.addInPlace(Op.i.Zy[2])
      }
      scaleInPlace(pp) {
        this.l00.scaleInPlace(pp), this.l1_1.scaleInPlace(pp), this.l10.scaleInPlace(pp), this.l11.scaleInPlace(pp), this.l2_2.scaleInPlace(pp), this.l2_1.scaleInPlace(pp), this.l20.scaleInPlace(pp), this.l21.scaleInPlace(pp), this.l22.scaleInPlace(pp)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(xp[0]), this.l1_1.scaleInPlace(xp[1]), this.l10.scaleInPlace(xp[2]), this.l11.scaleInPlace(xp[3]), this.l2_2.scaleInPlace(xp[4]), this.l2_1.scaleInPlace(xp[5]), this.l20.scaleInPlace(xp[6]), this.l21.scaleInPlace(xp[7]), this.l22.scaleInPlace(xp[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(op[0]), this.l1_1.scaleInPlace(op[1]), this.l10.scaleInPlace(op[2]), this.l11.scaleInPlace(op[3]), this.l2_2.scaleInPlace(op[4]), this.l2_1.scaleInPlace(op[5]), this.l20.scaleInPlace(op[6]), this.l21.scaleInPlace(op[7]), this.l22.scaleInPlace(op[8])
      }
      updateFromArray(pp) {
        return Op.o.FromArrayToRef(pp[0], 0, this.l00), Op.o.FromArrayToRef(pp[1], 0, this.l1_1), Op.o.FromArrayToRef(pp[2], 0, this.l10), Op.o.FromArrayToRef(pp[3], 0, this.l11), Op.o.FromArrayToRef(pp[4], 0, this.l2_2), Op.o.FromArrayToRef(pp[5], 0, this.l2_1), Op.o.FromArrayToRef(pp[6], 0, this.l20), Op.o.FromArrayToRef(pp[7], 0, this.l21), Op.o.FromArrayToRef(pp[8], 0, this.l22), this
      }
      updateFromFloatsArray(pp) {
        return Op.o.FromFloatsToRef(pp[0], pp[1], pp[2], this.l00), Op.o.FromFloatsToRef(pp[3], pp[4], pp[5], this.l1_1), Op.o.FromFloatsToRef(pp[6], pp[7], pp[8], this.l10), Op.o.FromFloatsToRef(pp[9], pp[10], pp[11], this.l11), Op.o.FromFloatsToRef(pp[12], pp[13], pp[14], this.l2_2), Op.o.FromFloatsToRef(pp[15], pp[16], pp[17], this.l2_1), Op.o.FromFloatsToRef(pp[18], pp[19], pp[20], this.l20), Op.o.FromFloatsToRef(pp[21], pp[22], pp[23], this.l21), Op.o.FromFloatsToRef(pp[24], pp[25], pp[26], this.l22), this
      }
      static FromArray(pp) {
        return (new Lp).updateFromArray(pp)
      }
      static FromPolynomial(pp) {
        const ip = new Lp;
        return ip.l00 = pp.xx.scale(.376127).add(pp.yy.scale(.376127)).add(pp.zz.scale(.376126)), ip.l1_1 = pp.y.scale(.977204), ip.l10 = pp.z.scale(.977204), ip.l11 = pp.x.scale(.977204), ip.l2_2 = pp.xy.scale(1.16538), ip.l2_1 = pp.yz.scale(1.16538), ip.l20 = pp.zz.scale(1.34567).subtract(pp.xx.scale(.672834)).subtract(pp.yy.scale(.672834)), ip.l21 = pp.zx.scale(1.16538), ip.l22 = pp.xx.scale(1.16538).subtract(pp.yy.scale(1.16538)), ip.l1_1.scaleInPlace(-1), ip.l11.scaleInPlace(-1), ip.l2_1.scaleInPlace(-1), ip.l21.scaleInPlace(-1), ip.scaleInPlace(Math.PI), ip
      }
    }
    class Yp {
      constructor() {
        this.x = Op.o.Zero(), this.y = Op.o.Zero(), this.z = Op.o.Zero(), this.xx = Op.o.Zero(), this.yy = Op.o.Zero(), this.zz = Op.o.Zero(), this.xy = Op.o.Zero(), this.yz = Op.o.Zero(), this.zx = Op.o.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Lp.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(pp) {
        Op.i.Zy[0].i5(pp.r, pp.g, pp.b);
        const ip = Op.i.Zy[0];
        this.xx.addInPlace(ip), this.yy.addInPlace(ip), this.zz.addInPlace(ip)
      }
      scaleInPlace(pp) {
        this.x.scaleInPlace(pp), this.y.scaleInPlace(pp), this.z.scaleInPlace(pp), this.xx.scaleInPlace(pp), this.yy.scaleInPlace(pp), this.zz.scaleInPlace(pp), this.yz.scaleInPlace(pp), this.zx.scaleInPlace(pp), this.xy.scaleInPlace(pp)
      }
      updateFromHarmonics(pp) {
        return this._harmonics = pp, this.x.rM(pp.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.rM(pp.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.rM(pp.l10), this.z.scaleInPlace(1.02333), this.xx.rM(pp.l00), Op.i.Zy[0].rM(pp.l20).scaleInPlace(.247708), Op.i.Zy[1].rM(pp.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).Iop(Op.i.Zy[0]).addInPlace(Op.i.Zy[1]), this.yy.rM(pp.l00), this.yy.scaleInPlace(.886277).Iop(Op.i.Zy[0]).Iop(Op.i.Zy[1]), this.zz.rM(pp.l00), Op.i.Zy[0].rM(pp.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Op.i.Zy[0]), this.yz.rM(pp.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.rM(pp.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.rM(pp.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(pp) {
        return (new Yp).updateFromHarmonics(pp)
      }
      static FromArray(pp) {
        const ip = new Yp;
        return Op.o.FromArrayToRef(pp[0], 0, ip.x), Op.o.FromArrayToRef(pp[1], 0, ip.y), Op.o.FromArrayToRef(pp[2], 0, ip.z), Op.o.FromArrayToRef(pp[3], 0, ip.xx), Op.o.FromArrayToRef(pp[4], 0, ip.yy), Op.o.FromArrayToRef(pp[5], 0, ip.zz), Op.o.FromArrayToRef(pp[6], 0, ip.yz), Op.o.FromArrayToRef(pp[7], 0, ip.zx), Op.o.FromArrayToRef(pp[8], 0, ip.xy), ip
      }
    }
  },
  40614: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => lp,
      d: () => Jp
    });
    var Op = cp(40203),
      op = cp(37349),
      Ip = cp(37320),
      Sp = cp(40342),
      xp = cp(40589),
      Lp = cp(40617),
      Yp = cp(40334),
      Dp = cp(40498),
      Ap = cp(40332);
    class Pp {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Ip.o(0, 0, 0), this._diffPositionForCollisions = new Ip.o(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Wp, yp, Up, wp = cp(40096),
      vp = cp(40276),
      tp = cp(40506),
      Hp = cp(37487),
      dp = cp(37324),
      ep = cp(40423),
      jp = cp(38905),
      kp = cp(40210),
      mp = cp(40113),
      Rp = cp(37368);

    function qp(pp, ip) {
      return pp - Math.floor(pp / ip) * ip
    }

    function Mp(pp, ip, cp) {
      pp instanceof Float32Array ? Ip.b.FromArrayToRef(pp, ip, cp) : cp.i5((0, vp.c)(pp[ip]), (0, vp.c)(pp[ip + 1]), (0, vp.c)(pp[ip + 2]), (0, vp.c)(pp[ip + 3]), (0, vp.c)(pp[ip + 4]), (0, vp.c)(pp[ip + 5]), (0, vp.c)(pp[ip + 6]), (0, vp.c)(pp[ip + 7]), (0, vp.c)(pp[ip + 8]), (0, vp.c)(pp[ip + 9]), (0, vp.c)(pp[ip + 10]), (0, vp.c)(pp[ip + 11]), (0, vp.c)(pp[ip + 12]), (0, vp.c)(pp[ip + 13]), (0, vp.c)(pp[ip + 14]), (0, vp.c)(pp[ip + 15]))
    }

    function Cp(pp, ip, cp, Op, op, xp, Lp, Yp, Dp) {
      const Ap = cp.texture,
        Pp = Ap?.getInternalTexture(),
        Wp = Pp?._bufferView;
      if (!(Wp instanceof Float32Array) && !(Wp instanceof Uint16Array)) return jp.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const yp = Ap.getSize(),
        Up = function(pp, ip) {
          const cp = pp.y - pp.x + 1,
            Op = ip * pp.w / cp,
            op = Op < 1 ? 0 : 1,
            Ip = cp - op;
          let Sp = qp(Op - Math.floor(Op), 1) * Ip;
          return Sp = qp(Sp + pp.z, Ip), Math.floor(Sp) + pp.x + op
        }(Op, cp.time);
      if (!isFinite(Up) || Up < 0 || Up >= yp.height) return jp.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const wp = Ip.i.Zy[0],
        vp = Ip.i.Matrix[0],
        tp = Ip.i.Matrix[1],
        Hp = Up * yp.width * 4,
        dp = ip === Sp.j.NormalKind ? Ip.o.TransformNormalFromFloatsToRef : Ip.o.TransformCoordinatesFromFloatsToRef;
      for (let Ip = 0, Sp = 0; Ip < pp.length; Ip += 3, Sp += 4) {
        let ip, cp;
        for (vp.reset(), ip = 0; ip < 4 && ip < Dp; ip++) cp = xp[Sp + ip], cp > 0 && (Mp(Wp, Hp + 16 * Math.floor(op[Sp + ip]), tp), tp.scaleAndAddToRef(cp, vp));
        if (Lp && Yp)
          for (ip = 0; ip < 4 && ip + 4 < Dp; ip++) cp = Yp[Sp + ip], cp > 0 && (Mp(Wp, Hp + 16 * Math.floor(Lp[Sp + ip]), tp), tp.scaleAndAddToRef(cp, vp));
        dp(pp[Ip], pp[Ip + 1], pp[Ip + 2], vp, wp), wp.toArray(pp, Ip)
      }
      return !0
    }
    class Ep {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Ip.o.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Xp {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Ep, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Pp, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let lp = (() => {
        var pp;
        let ip, Pp = Lp.d,
          Wp = [];
        return pp = class extends Pp {
          static get BILLBOARDMODE_NONE() {
            return Lp.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Lp.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Lp.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Lp.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Lp.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Lp.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(pp) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = pp
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(pp) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = pp
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(pp) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = pp
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(pp) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = pp
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(pp) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = pp
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(pp) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== pp && (this._internalAbstractMeshDataInfo._morphTargetManager = pp, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(pp) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== pp && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = pp, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(pp) {
            return !!super._updateNonUniformScalingState(pp) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(pp) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = pp
          }
          set kP(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(pp)
          }
          set onCollisionPositionChange(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(pp)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(pp) {
            if (this._internalAbstractMeshDataInfo._visibility === pp) return;
            const ip = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = pp, (1 === ip && 1 !== pp || 1 !== ip && 1 === pp) && this._markSubMeshesAsDirty((pp => {
              pp.markAsMiscDirty(), pp.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(pp) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = pp
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(pp) {
            this._internalAbstractMeshDataInfo._renderingGroupId = pp
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(pp) {
            if (!Number.isInteger(pp) || pp < 0 || pp > 255 || 0 !== pp && 0 === (63 & pp)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = pp
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(pp) {
            this._setMaterial(pp)
          }
          _setMaterial(pp) {
            this._internalAbstractMeshDataInfo._material !== pp && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = pp, pp && pp.meshMap && (pp.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.Am && (this.resetDrawCache(void 0, null == pp), this._unBindEffect()))
          }
          getMaterialForRenderPass(pp) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[pp]
          }
          setMaterialForRenderPass(pp, ip) {
            this.resetDrawCache(pp), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const cp = this._internalAbstractMeshDataInfo._materialForRenderPass[pp];
            cp?.meshMap?.[this.uniqueId] && (cp.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[pp] = ip, ip && ip.meshMap && (ip.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(pp) {
            this._internalAbstractMeshDataInfo._receiveShadows !== pp && (this._internalAbstractMeshDataInfo._receiveShadows = pp, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(pp) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== pp && (this._internalAbstractMeshDataInfo._hasVertexAlpha = pp, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(pp) {
            this._internalAbstractMeshDataInfo._useVertexColors !== pp && (this._internalAbstractMeshDataInfo._useVertexColors = pp, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(pp) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== pp && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = pp, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(pp) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== pp && (this._internalAbstractMeshDataInfo._numBoneInfluencers = pp, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(pp) {
            this._internalAbstractMeshDataInfo._applyFog !== pp && (this._internalAbstractMeshDataInfo._applyFog = pp, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(pp) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = pp
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(pp) {
            pp !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = pp, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(pp) ? -1 : pp
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = pp
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(pp) ? -1 : pp
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = pp
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(pp) {
            const ip = this._internalAbstractMeshDataInfo._skeleton;
            ip && ip.needInitialSkinMatrix && ip._unregisterMeshWithPoseMatrix(this), pp && pp.needInitialSkinMatrix && pp._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = pp, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(ip) {
            var cp;
            let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(ip, Op, !1), cp = this, this._internalAbstractMeshDataInfo = new Xp, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = pp.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new op.d, this.onCollisionPositionChangeObservable = new op.d, this.onMaterialChangedObservable = new op.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Ow = pp.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Hp.d.Red(), this.outlineWidth = .02, this.overlayColor = Hp.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Gy = !1, this.sy = !1, this.actionManager = null, this.ellipsoid = new Ip.o(.5, 1, .5), this.ellipsoidOffset = new Ip.o(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Hp.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                iJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new op.d, this._onCollisionPositionChange = function(pp, ip) {
                let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ip.subtractToRef(cp._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, cp._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), cp._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > mp.b.CollisionsEpsilon && cp.position.addInPlace(cp._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Op && cp.onCollideObservable.notifyObservers(Op), cp.onCollisionPositionChangeObservable.notifyObservers(cp.position)
              }, Op = this.Gl(), this.layerMask = Op.defaultRenderableLayerMask, Op.TOp(this), this._resyncLightSources(), this._uniformBuffer = new Ap.b(this.Gl().gy(), void 0, void 0, ip, !this.Gl().gy().isWebGPU), this._buildUniformLayout(), Op.performancePriority) {
              case 2:
                this.sy = !0;
              case 1:
                this.Gy = !0, this.Ow = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(pp) {
            const ip = this._uniformBuffer;
            ip.I3("world", pp), ip.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), ip.update()
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
          toString(pp) {
            let ip = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            ip += ", # of submeshes: " + (this.Am ? this.Am.length : 0);
            const cp = this._internalAbstractMeshDataInfo._skeleton;
            return cp && (ip += ", skeleton: " + cp.name), pp && (ip += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], ip += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.iJ ? "YES" : "NO")), ip
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Lp.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(pp) {
            let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (ip || this.actionManager.isRecursive)) {
              if (!pp) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(pp)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(pp, !1) : null
          }
          _releaseRenderPassId(pp) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.Am) {
              for (const pp of this.Am) pp._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const pp of this.Gl().lights) pp.isEnabled() && pp.canAffectMesh(this) && this._lightSources.push(pp);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(pp) {
            const ip = pp.isEnabled() && pp.canAffectMesh(this),
              cp = this._lightSources.indexOf(pp);
            let Op = !1;
            if (-1 === cp) {
              if (!ip) return;
              this._lightSources.push(pp)
            } else {
              if (ip) return;
              Op = !0, this._lightSources.splice(cp, 1)
            }
            this._markSubMeshesAsLightDirty(Op)
          }
          _unBindEffect() {
            for (const pp of this.Am) pp.setEffect(null)
          }
          _removeLightSource(pp, ip) {
            const cp = this._lightSources.indexOf(pp); - 1 !== cp && (this._lightSources.splice(cp, 1), this._markSubMeshesAsLightDirty(ip))
          }
          _markSubMeshesAsDirty(pp) {
            if (this.Am)
              for (const ip of this.Am)
                for (let cp = 0; cp < ip._drawWrappers.length; ++cp) {
                  const Op = ip._drawWrappers[cp];
                  Op && Op.defines && Op.defines.markAllAsDirty && pp(Op.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((ip => ip.markAsLightDirty(pp)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((pp => pp.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((pp => pp.markAsMiscDirty()))
          }
          ocp(pp) {
            return this._currentRenderId = Number.MAX_VALUE, super.ocp(pp), this._isDirty = !0, this
          }
          resetDrawCache(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.Am)
              for (const cp of this.Am) cp.resetDrawCache(pp, ip)
          }
          get isBlocked() {
            return !1
          }
          getLOD(pp) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          NOp() {
            return null
          }
          getVerticesData(pp) {
            return null
          }
          setVerticesData(pp, ip, cp, Op) {
            return this
          }
          updateVerticesData(pp, ip, cp, Op) {
            return this
          }
          setIndices(pp, ip) {
            return this
          }
          isVerticesDataPresent(pp) {
            return !1
          }
          bJ() {
            return this._masterMesh ? this._masterMesh.bJ() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.bJ()
          }
          setBoundingInfo(pp) {
            return this._boundingInfo = pp, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(pp, ip, cp) {
            return this._boundingInfo = new Dp.d(pp, ip, cp), this._boundingInfo
          }
          normalizeToUnitCube() {
            let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(pp, ip, cp)
          }
          get useBones() {
            return this.skeleton && this.Gl().skeletonsEnabled && this.isVerticesDataPresent(Sp.j.MatricesIndicesKind) && this.isVerticesDataPresent(Sp.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(pp) {}
          _activate(pp, ip) {
            return this._renderId = pp, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Lp.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Vl() {
            return !1
          }
          get fop() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(pp, ip, cp) {
            return this.position.addInPlace(this.calcMovePOV(pp, ip, cp)), this
          }
          calcMovePOV(pp, ip, cp) {
            const Op = new Ip.b;
            (this.rotationQuaternion ? this.rotationQuaternion : Ip.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Op);
            const op = Ip.o.Zero(),
              Sp = this.definedFacingForward ? -1 : 1;
            return Ip.o.TransformCoordinatesFromFloatsToRef(pp * Sp, ip, cp * Sp, Op, op), op
          }
          rotatePOV(pp, ip, cp) {
            return this.rotation.addInPlace(this.calcRotatePOV(pp, ip, cp)), this
          }
          calcRotatePOV(pp, ip, cp) {
            const Op = this.definedFacingForward ? 1 : -1;
            return new Ip.o(pp * Op, ip, cp * Op)
          }
          _refreshBoundingInfo(pp, ip) {
            if (pp) {
              const cp = (0, tp.f)(pp, 0, this.getTotalVertices(), ip);
              this._boundingInfo ? this._boundingInfo.reConstruct(cp.minimum, cp.maximum) : this._boundingInfo = new Dp.d(cp.minimum, cp.maximum)
            }
            if (this.Am)
              for (let cp = 0; cp < this.Am.length; cp++) this.Am[cp].refreshBoundingInfo(pp);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(pp) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(pp.minimum, pp.maximum) : this._boundingInfo = new Dp.d(pp.minimum, pp.maximum), this.Am)
              for (let ip = 0; ip < this.Am.length; ip++) this.Am[ip].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(pp, ip, cp, Op, op, xp, Lp) {
            ! function(pp, ip, cp, Op, op, xp, Lp) {
              const Yp = Ip.i.Zy[0],
                Dp = Ip.i.Matrix[0],
                Ap = Ip.i.Matrix[1],
                Pp = ip === Sp.j.NormalKind ? Ip.o.TransformNormalFromFloatsToRef : Ip.o.TransformCoordinatesFromFloatsToRef;
              for (let Sp = 0, Wp = 0; Sp < pp.length; Sp += 3, Wp += 4) {
                let ip, yp;
                for (Dp.reset(), ip = 0; ip < 4; ip++) yp = op[Wp + ip], yp > 0 && (Ip.b.FromFloat32ArrayToRefScaled(cp, Math.floor(16 * Op[Wp + ip]), yp, Ap), Dp.addToSelf(Ap));
                if (xp && Lp)
                  for (ip = 0; ip < 4; ip++) yp = Lp[Wp + ip], yp > 0 && (Ip.b.FromFloat32ArrayToRefScaled(cp, Math.floor(16 * xp[Wp + ip]), yp, Ap), Dp.addToSelf(Ap));
                Pp(pp[Sp], pp[Sp + 1], pp[Sp + 2], Dp, Yp), Yp.toArray(pp, Sp)
              }
            }(pp, ip, cp, Op, op, xp, Lp)
          }
          _getData(ip, cp) {
            let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sp.j.PositionKind;
            const op = ip.cache,
              xp = pp => {
                if (op) {
                  const ip = op._vertexData || (op._vertexData = {});
                  return ip[pp] || this.copyVerticesData(pp, ip), ip[pp]
                }
                return this.getVerticesData(pp)
              };
            if (cp || (cp = xp(Op)), !cp) return null;
            op ? (op._outputData ? op._outputData.set(cp) : op._outputData = new Float32Array(cp), cp = op._outputData) : (ip.applyMorph && this.morphTargetManager || ip.applySkeleton && this.skeleton || ip.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (cp = cp.slice()), ip.applyMorph && this.morphTargetManager && function(pp, ip, cp) {
              let Op;
              switch (ip) {
                case Sp.j.PositionKind:
                  Op = pp => pp.getPositions();
                  break;
                case Sp.j.NormalKind:
                  Op = pp => pp.getNormals();
                  break;
                case Sp.j.TangentKind:
                  Op = pp => pp.getTangents();
                  break;
                case Sp.j.UVKind:
                  Op = pp => pp.getUVs();
                  break;
                case Sp.j.UV2Kind:
                  Op = pp => pp.getUV2s();
                  break;
                case Sp.j.ColorKind:
                  Op = pp => pp.getColors();
                  break;
                default:
                  return
              }
              for (let op = 0; op < pp.length; op++) {
                let ip = pp[op];
                for (let Ip = 0; Ip < cp.numTargets; Ip++) {
                  const Sp = cp.getTarget(Ip),
                    xp = Sp.influence;
                  if (0 !== xp) {
                    const cp = Op(Sp);
                    cp && (ip += (cp[op] - pp[op]) * xp)
                  }
                }
                pp[op] = ip
              }
            }(cp, Op, this.morphTargetManager);
            const Lp = this.bakedVertexAnimationManager;
            let Yp = !1;
            if (ip.applyBakedVertexAnimation && Lp?.isEnabled) {
              const pp = xp(Sp.j.MatricesIndicesKind),
                op = xp(Sp.j.MatricesWeightsKind);
              if (op && pp) {
                const Ip = this.numBoneInfluencers > 4,
                  Dp = Ip ? xp(Sp.j.MatricesIndicesExtraKind) : null,
                  Ap = Ip ? xp(Sp.j.MatricesWeightsExtraKind) : null;
                Yp = Cp(cp, Op, Lp, ip.bakedVertexAnimationSettings ?? Lp.animationParameters, pp, op, Dp, Ap, this.numBoneInfluencers)
              }
            }
            if (!Yp && ip.applySkeleton && this.skeleton) {
              const ip = xp(Sp.j.MatricesIndicesKind),
                op = xp(Sp.j.MatricesWeightsKind);
              if (op && ip) {
                const Ip = this.numBoneInfluencers > 4,
                  Lp = Ip ? xp(Sp.j.MatricesIndicesExtraKind) : null,
                  Yp = Ip ? xp(Sp.j.MatricesWeightsExtraKind) : null,
                  Dp = this.skeleton.getTransformMatrices(this);
                pp._ApplySkeleton(cp, Op, Dp, ip, op, Lp, Yp)
              }
            }
            if (!1 !== ip.updatePositionsArray && Op === Sp.j.PositionKind) {
              const pp = this._internalAbstractMeshDataInfo._positions || [],
                ip = pp.length;
              if (pp.length = cp.length / 3, ip < pp.length)
                for (let cp = ip; cp < pp.length; cp++) pp[cp] = new Ip.o;
              for (let Op = 0, op = 0; Op < pp.length; Op++, op += 3) pp[Op].i5(cp[op], cp[op + 1], cp[op + 2]);
              this._internalAbstractMeshDataInfo._positions = pp
            }
            return cp
          }
          getNormalsData() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: pp,
              applyMorph: ip,
              updatePositionsArray: !1
            }, null, Sp.j.NormalKind)
          }
          xZ() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: pp,
              applyMorph: ip,
              updatePositionsArray: !1
            }, cp, Sp.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Dp.d(Ip.o.Zero(), Ip.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(pp) {
            if (!this.Am) return this;
            const ip = this.Am.length;
            for (let cp = 0; cp < ip; cp++) {
              const Op = this.Am[cp];
              (ip > 1 || !Op.IsGlobal) && Op.updateBoundingInfo(pp)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.sy || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(pp) {
            return this.bJ().isInFrustum(pp, this.cullingStrategy)
          }
          isCompletelyInFrustum(pp) {
            return this.bJ().isCompletelyInFrustum(pp)
          }
          Eop(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = arguments.length > 2 ? arguments[2] : void 0;
            const Op = this.bJ(),
              op = pp.bJ();
            if (Op.intersects(op, ip)) return !0;
            if (cp)
              for (const Ip of this.getChildMeshes())
                if (Ip.Eop(pp, ip, !0)) return !0;
            return !1
          }
          intersectsPoint(pp) {
            return this.bJ().intersectsPoint(pp)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(pp) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = pp
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(pp) {
            let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const cp = this.Gl().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = cp.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, cp.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, pp, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, ip), this
          }
          _collideForSubMesh(pp, ip, cp) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!pp._lastColliderWorldVertices || !pp._lastColliderTransformMatrix.equals(ip)) {
              pp._lastColliderTransformMatrix = ip.clone(), pp._lastColliderWorldVertices = [], pp._trianglePlanes = [];
              const cp = pp.verticesStart,
                Op = pp.verticesStart + pp.verticesCount;
              for (let op = cp; op < Op; op++) pp._lastColliderWorldVertices.push(Ip.o.TransformCoordinates(this._positions[op], ip))
            }
            return cp._collide(pp._trianglePlanes, pp._lastColliderWorldVertices, this.NOp(), pp.indexStart, pp.indexStart + pp.indexCount, pp.verticesStart, !!pp.Ky(), this, this._shouldConvertRHS(), 7 === pp.Ky()?.fillMode), this
          }
          _processCollisionsForSubMeshes(pp, ip) {
            const cp = this._scene.getCollidingSubMeshCandidates(this, pp),
              Op = cp.length;
            for (let op = 0; op < Op; op++) {
              const Ip = cp.data[op];
              Op > 1 && !Ip._checkCollision(pp) || this._collideForSubMesh(Ip, ip, pp)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(pp) {
            if (!this.bJ()._checkCollision(pp)) return this;
            const ip = Ip.i.Matrix[0],
              cp = Ip.i.Matrix[1];
            return Ip.b.ScalingToRef(1 / pp._radius.x, 1 / pp._radius.y, 1 / pp._radius.z, ip), this.worldMatrixFromCache.multiplyToRef(ip, cp), this._processCollisionsForSubMeshes(pp, cp), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(pp, ip, cp) {
            let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              op = arguments.length > 4 ? arguments[4] : void 0,
              Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const xp = new Yp.b,
              Lp = this.getClassName(),
              Dp = "InstancedLinesMesh" === Lp || "LinesMesh" === Lp || "GreasedLineMesh" === Lp ? this.intersectionThreshold : 0,
              Ap = this.bJ();
            if (!this.Am) return xp;
            if (!Sp && (!pp.intersectsSphere(Ap.Yop, Dp) || !pp.intersectsBox(Ap.boundingBox, Dp))) return xp;
            if (Op) return xp.hit = !Sp, xp.pickedMesh = Sp ? null : this, xp.distance = Sp ? 0 : Ip.o.Distance(pp.origin, Ap.Yop.center), xp.subMeshId = 0, xp;
            if (!this._generatePointsArray()) return xp;
            let Pp = null;
            const Wp = this._scene.getIntersectingSubMeshCandidates(this, pp),
              yp = Wp.length;
            let Up = !1;
            for (let Ip = 0; Ip < yp; Ip++) {
              const pp = Wp.data[Ip].Ky();
              if (pp && (7 == pp.fillMode || 0 == pp.fillMode || 1 == pp.fillMode || 2 == pp.fillMode || 4 == pp.fillMode)) {
                Up = !0;
                break
              }
            }
            if (!Up) return xp.hit = !0, xp.pickedMesh = this, xp.distance = Ip.o.Distance(pp.origin, Ap.Yop.center), xp.subMeshId = -1, xp;
            for (let Ip = 0; Ip < yp; Ip++) {
              const Op = Wp.data[Ip];
              if (yp > 1 && !Sp && !Op.canIntersects(pp)) continue;
              const op = Op.intersects(pp, this._positions, this.NOp(), ip, cp);
              if (op && (ip || !Pp || op.distance < Pp.distance) && (Pp = op, Pp.subMeshId = Op._id, Pp._internalSubMeshId = Ip, ip)) break
            }
            if (Pp) {
              const ip = op ?? this.getWorldMatrix(),
                cp = Ip.i.Zy[0],
                Op = Ip.i.Zy[1];
              Ip.o.TransformCoordinatesToRef(pp.origin, ip, cp), pp.direction.scaleToRef(Pp.distance, Op);
              const Sp = Ip.o.TransformNormal(Op, ip).addInPlace(cp);
              return xp.hit = !0, xp.distance = Ip.o.Distance(cp, Sp), xp.pickedPoint = Sp, xp.pickedMesh = this, xp.bu = Pp.bu || 0, xp.bv = Pp.bv || 0, xp.subMeshFaceId = Pp.faceId, xp.faceId = Pp.faceId + Wp.data[Pp._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), xp.subMeshId = Pp.subMeshId, xp
            }
            return xp
          }
          clone(pp, ip, cp) {
            return null
          }
          releaseSubMeshes() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.Am)
              for (; this.Am.length;) this.Am[0].dispose(pp);
            else this.Am = [];
            return this
          }
          dispose(pp) {
            let ip, cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Op = this.Gl();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Op.freeActiveMeshes(), Op.freeRenderingGroups(), Op.renderingManager.maintainStateBetweenFrames && Op.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((pp => pp !== this && pp.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), ip = 0; ip < this._intersectionsInProgress.length; ip++) {
              const pp = this._intersectionsInProgress[ip],
                cp = pp._intersectionsInProgress.indexOf(this);
              pp._intersectionsInProgress.splice(cp, 1)
            }
            this._intersectionsInProgress.length = 0;
            const op = Op.lights;
            for (const Sp of op) {
              let pp = Sp.includedOnlyMeshes.indexOf(this); - 1 !== pp && Sp.includedOnlyMeshes.splice(pp, 1), pp = Sp.excludedMeshes.indexOf(this), -1 !== pp && Sp.excludedMeshes.splice(pp, 1);
              const ip = Sp.getShadowGenerators();
              if (ip) {
                const cp = ip.values();
                for (let ip = cp.next(); !0 !== ip.done; ip = cp.next()) {
                  const cp = ip.value.getShadowMap();
                  cp && cp.renderList && (pp = cp.renderList.indexOf(this), -1 !== pp && cp.renderList.splice(pp, 1))
                }
              }
            }
            this.releaseSubMeshes(Op._isDisposing);
            const Ip = Op.gy();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Ip.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Ip.wipeCaches(), Op.xJ(this), this._parentContainer) {
              const pp = this._parentContainer.meshes.indexOf(this);
              pp > -1 && this._parentContainer.meshes.splice(pp, 1), this._parentContainer = null
            }
            if (cp && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !pp)
              for (ip = 0; ip < Op.Wm.length; ip++) Op.Wm[ip].emitter === this && (Op.Wm[ip].dispose(), ip--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(pp, cp)
          }
          _initFacetData() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            pp.facetNormals || (pp.facetNormals = []), pp.facetPositions || (pp.facetPositions = []), pp.facetPartitioning || (pp.facetPartitioning = new Array), pp.facetNb = this.NOp().length / 3 | 0, pp.partitioningSubdivisions = pp.partitioningSubdivisions ? pp.partitioningSubdivisions : 10, pp.partitioningBBoxRatio = pp.partitioningBBoxRatio ? pp.partitioningBBoxRatio : 1.01;
            for (let ip = 0; ip < pp.facetNb; ip++) pp.facetNormals[ip] = Ip.o.Zero(), pp.facetPositions[ip] = Ip.o.Zero();
            return pp.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            pp.facetDataEnabled || this._initFacetData();
            const ip = this.getVerticesData(Sp.j.PositionKind),
              cp = this.NOp(),
              Op = this.getVerticesData(Sp.j.NormalKind)?.slice(),
              op = this.bJ();
            if (pp.facetDepthSort && !pp.facetDepthSortEnabled) {
              if (pp.facetDepthSortEnabled = !0, cp instanceof Uint16Array) pp.depthSortedIndices = new Uint16Array(cp);
              else if (cp instanceof Uint32Array) pp.depthSortedIndices = new Uint32Array(cp);
              else {
                let ip = !1;
                for (let pp = 0; pp < cp.length; pp++)
                  if (cp[pp] > 65535) {
                    ip = !0;
                    break
                  } pp.depthSortedIndices = ip ? new Uint32Array(cp) : new Uint16Array(cp)
              }
              if (pp.facetDepthSortFunction = function(pp, ip) {
                  return ip.sqDistance - pp.sqDistance
                }, !pp.facetDepthSortFrom) {
                const ip = this.Gl().activeCamera;
                pp.facetDepthSortFrom = ip ? ip.position : Ip.o.Zero()
              }
              pp.depthSortedFacets = [];
              for (let ip = 0; ip < pp.facetNb; ip++) {
                const cp = {
                  ind: 3 * ip,
                  sqDistance: 0
                };
                pp.depthSortedFacets.push(cp)
              }
              pp.invertedMatrix = Ip.b.Identity(), pp.facetDepthSortOrigin = Ip.o.Zero()
            }
            pp.bbSize.x = op.maximum.x - op.minimum.x > dp.b ? op.maximum.x - op.minimum.x : dp.b, pp.bbSize.y = op.maximum.y - op.minimum.y > dp.b ? op.maximum.y - op.minimum.y : dp.b, pp.bbSize.z = op.maximum.z - op.minimum.z > dp.b ? op.maximum.z - op.minimum.z : dp.b;
            let Lp = pp.bbSize.x > pp.bbSize.y ? pp.bbSize.x : pp.bbSize.y;
            if (Lp = Lp > pp.bbSize.z ? Lp : pp.bbSize.z, pp.subDiv.max = pp.partitioningSubdivisions, pp.subDiv.X = Math.floor(pp.subDiv.max * pp.bbSize.x / Lp), pp.subDiv.Y = Math.floor(pp.subDiv.max * pp.bbSize.y / Lp), pp.subDiv.Z = Math.floor(pp.subDiv.max * pp.bbSize.z / Lp), pp.subDiv.X = pp.subDiv.X < 1 ? 1 : pp.subDiv.X, pp.subDiv.Y = pp.subDiv.Y < 1 ? 1 : pp.subDiv.Y, pp.subDiv.Z = pp.subDiv.Z < 1 ? 1 : pp.subDiv.Z, pp.facetParameters.facetNormals = this.getFacetLocalNormals(), pp.facetParameters.facetPositions = this.getFacetLocalPositions(), pp.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), pp.facetParameters.bInfo = op, pp.facetParameters.bbSize = pp.bbSize, pp.facetParameters.subDiv = pp.subDiv, pp.facetParameters.ratio = this.partitioningBBoxRatio, pp.facetParameters.depthSort = pp.facetDepthSort, pp.facetDepthSort && pp.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(pp.invertedMatrix), Ip.o.TransformCoordinatesToRef(pp.facetDepthSortFrom, pp.invertedMatrix, pp.facetDepthSortOrigin), pp.facetParameters.distanceTo = pp.facetDepthSortOrigin), pp.facetParameters.depthSortedFacets = pp.depthSortedFacets, Op && xp.d.ComputeNormals(ip, cp, Op, pp.facetParameters), pp.facetDepthSort && pp.facetDepthSortEnabled) {
              pp.depthSortedFacets.sort(pp.facetDepthSortFunction);
              const ip = pp.depthSortedIndices.length / 3 | 0;
              for (let Op = 0; Op < ip; Op++) {
                const ip = pp.depthSortedFacets[Op].ind;
                pp.depthSortedIndices[3 * Op] = cp[ip], pp.depthSortedIndices[3 * Op + 1] = cp[ip + 1], pp.depthSortedIndices[3 * Op + 2] = cp[ip + 2]
              }
              this.updateIndices(pp.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            return pp.facetNormals || this.updateFacetData(), pp.facetNormals
          }
          getFacetLocalPositions() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            return pp.facetPositions || this.updateFacetData(), pp.facetPositions
          }
          getFacetLocalPartitioning() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            return pp.facetPartitioning || this.updateFacetData(), pp.facetPartitioning
          }
          getFacetPosition(pp) {
            const ip = Ip.o.Zero();
            return this.getFacetPositionToRef(pp, ip), ip
          }
          getFacetPositionToRef(pp, ip) {
            const cp = this.getFacetLocalPositions()[pp],
              Op = this.getWorldMatrix();
            return Ip.o.TransformCoordinatesToRef(cp, Op, ip), this
          }
          getFacetNormal(pp) {
            const ip = Ip.o.Zero();
            return this.getFacetNormalToRef(pp, ip), ip
          }
          getFacetNormalToRef(pp, ip) {
            const cp = this.getFacetLocalNormals()[pp];
            return Ip.o.TransformNormalToRef(cp, this.getWorldMatrix(), ip), this
          }
          getFacetsAtLocalCoordinates(pp, ip, cp) {
            const Op = this.bJ(),
              op = this._internalAbstractMeshDataInfo._facetData,
              Ip = Math.floor((pp - Op.minimum.x * op.partitioningBBoxRatio) * op.subDiv.X * op.partitioningBBoxRatio / op.bbSize.x),
              Sp = Math.floor((ip - Op.minimum.y * op.partitioningBBoxRatio) * op.subDiv.Y * op.partitioningBBoxRatio / op.bbSize.y),
              xp = Math.floor((cp - Op.minimum.z * op.partitioningBBoxRatio) * op.subDiv.Z * op.partitioningBBoxRatio / op.bbSize.z);
            return Ip < 0 || Ip > op.subDiv.max || Sp < 0 || Sp > op.subDiv.max || xp < 0 || xp > op.subDiv.max ? null : op.facetPartitioning[Ip + op.subDiv.max * Sp + op.subDiv.max * op.subDiv.max * xp]
          }
          getClosestFacetAtCoordinates(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const xp = this.getWorldMatrix(),
              Lp = Ip.i.Matrix[5];
            xp.invertToRef(Lp);
            const Yp = Ip.i.Zy[8];
            Ip.o.TransformCoordinatesFromFloatsToRef(pp, ip, cp, Lp, Yp);
            const Dp = this.getClosestFacetAtLocalCoordinates(Yp.x, Yp.y, Yp.z, Op, op, Sp);
            return Op && Ip.o.TransformCoordinatesFromFloatsToRef(Op.x, Op.y, Op.z, xp, Op), Dp
          }
          getClosestFacetAtLocalCoordinates(pp, ip, cp, Op) {
            let op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Wp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              yp = null;
            const Up = this.getFacetLocalPositions(),
              wp = this.getFacetLocalNormals(),
              vp = this.getFacetsAtLocalCoordinates(pp, ip, cp);
            if (!vp) return null;
            let tp, Hp, dp, ep, jp = Number.MAX_VALUE;
            for (let kp = 0; kp < vp.length; kp++) Hp = vp[kp], dp = wp[Hp], ep = Up[Hp], xp = (pp - ep.x) * dp.x + (ip - ep.y) * dp.y + (cp - ep.z) * dp.z, (!Pp || Pp && Wp && xp >= 0 || Pp && !Wp && xp <= 0) && (xp = dp.x * ep.x + dp.y * ep.y + dp.z * ep.z, Lp = -(dp.x * pp + dp.y * ip + dp.z * cp - xp) / (dp.x * dp.x + dp.y * dp.y + dp.z * dp.z), Yp = pp + dp.x * Lp, Dp = ip + dp.y * Lp, Ap = cp + dp.z * Lp, op = Yp - pp, Ip = Dp - ip, Sp = Ap - cp, tp = op * op + Ip * Ip + Sp * Sp, tp < jp && (jp = tp, yp = Hp, Op && (Op.x = Yp, Op.y = Dp, Op.z = Ap)));
            return yp
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const pp = this._internalAbstractMeshDataInfo._facetData;
            return pp.facetDataEnabled && (pp.facetDataEnabled = !1, pp.facetPositions = [], pp.facetNormals = [], pp.facetPartitioning = new Array, pp.facetParameters = {}, pp.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(pp, ip) {
            return this
          }
          createNormals(pp) {
            const ip = this.getVerticesData(Sp.j.PositionKind),
              cp = this.NOp();
            let Op;
            return Op = this.isVerticesDataPresent(Sp.j.NormalKind) ? this.getVerticesData(Sp.j.NormalKind) : [], xp.d.ComputeNormals(ip, cp, Op, {
              useRightHandedSystem: this.Gl().useRightHandedSystem
            }), this.setVerticesData(Sp.j.NormalKind, Op, pp), this
          }
          async optimizeIndicesAsync() {
            const pp = this.NOp();
            if (!pp) return this;
            const {
              OptimizeIndices: ip
            } = await cp.e(356).then((() => cp(42843)));
            return ip(pp), this.setIndices(pp, this.getTotalVertices()), this
          }
          alignWithNormal(pp, ip) {
            ip || (ip = ep.c.Y);
            const cp = Ip.i.Zy[0],
              Op = Ip.i.Zy[1];
            return Ip.o.CrossToRef(ip, pp, Op), Ip.o.CrossToRef(pp, Op, cp), this.rotationQuaternion ? Ip.f.RotationQuaternionFromAxisToRef(cp, pp, Op, this.rotationQuaternion) : Ip.o.RotationFromAxisToRef(cp, pp, Op, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, wp.o)("EdgesRenderer")
          }
          enableEdgesRendering(pp, ip, cp) {
            throw (0, wp.o)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.Wm.filter((pp => pp.emitter === this))
          }
        }, (() => {
          const cp = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pp[Symbol.metadata] ?? null) : void 0;
          ip = [kp.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Op.j)(pp, null, ip, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: pp => "_ApplySkeleton" in pp,
              get: pp => pp._ApplySkeleton
            },
            metadata: cp
          }, null, Wp), cp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cp
          })
        })(), pp.OCCLUSION_TYPE_NONE = ((0, Op.l)(pp, Wp), 0), pp.OCCLUSION_TYPE_OPTIMISTIC = 1, pp.OCCLUSION_TYPE_STRICT = 2, pp.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, pp.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, pp.CULLINGSTRATEGY_STANDARD = 0, pp.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, pp.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, pp.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, pp.DefaultIsPickable = !0, pp
      })(),
      Qp = !1;

    function Jp() {
      Qp || (Qp = !0, (0, Rp.g)("BABYLON.AbstractMesh", lp))
    }(Wp = lp.prototype).createOrUpdateSubmeshesOctree ?? (Wp.createOrUpdateSubmeshesOctree = (0, wp.k)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (yp = lp.prototype).getPhysicsImpostor ?? (yp.getPhysicsImpostor = (0, wp.k)("AbstractMesh", "getPhysicsImpostor")), (Up = lp.prototype).setPhysicsLinkWith ?? (Up.setPhysicsLinkWith = (0, wp.k)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(lp.prototype, "occlusionRetryCount") || Object.defineProperty(lp.prototype, "occlusionRetryCount", (0, wp.h)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(lp.prototype, "occlusionType") || Object.defineProperty(lp.prototype, "occlusionType", (0, wp.h)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(lp.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(lp.prototype, "occlusionQueryAlgorithmType", (0, wp.h)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(lp.prototype, "isOccluded") || Object.defineProperty(lp.prototype, "isOccluded", (0, wp.h)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(lp.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(lp.prototype, "isOcclusionQueryInProgress", (0, wp.h)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(lp.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(lp.prototype, "forceRenderingWhenOccluded", (0, wp.h)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(lp.prototype, "occlusionForRenderPassId") || Object.defineProperty(lp.prototype, "occlusionForRenderPassId", (0, wp.h)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(lp.prototype, "decalMap") || Object.defineProperty(lp.prototype, "decalMap", (0, wp.h)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(lp.prototype, "MJ") || Object.defineProperty(lp.prototype, "MJ", (0, wp.h)("AbstractMesh", "MJ")), Object.getOwnPropertyDescriptor(lp.prototype, "physicsImpostor") || Object.defineProperty(lp.prototype, "physicsImpostor", (0, wp.h)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(lp.prototype, "showBoundingBox") || Object.defineProperty(lp.prototype, "showBoundingBox", (0, wp.h)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(lp.prototype, "edgesRenderer") || Object.defineProperty(lp.prototype, "edgesRenderer", (0, wp.h)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(lp.prototype, "renderOutline") || Object.defineProperty(lp.prototype, "renderOutline", (0, wp.h)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(lp.prototype, "renderOverlay") || Object.defineProperty(lp.prototype, "renderOverlay", (0, wp.h)("AbstractMesh", "renderOverlay"))
  },
  40593: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => vp
    });
    var Op = cp(37320),
      op = cp(37487),
      Ip = cp(40589),
      Sp = cp(40342),
      xp = cp(40481),
      Lp = cp(40597),
      Yp = cp(40498),
      Dp = cp(40304),
      Ap = cp(38905),
      Pp = cp(40236),
      Wp = cp(40506),
      yp = cp(37345),
      Up = cp(40605),
      wp = cp(40273);
    class vp {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(pp) {
        this._boundingBias ? this._boundingBias.rM(pp) : this._boundingBias = pp.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(pp) {
        const ip = new vp(vp.RandomId(), pp.Gl());
        return ip.applyToMesh(pp), ip
      }
      get meshes() {
        return this._meshes
      }
      constructor(pp, ip, cp) {
        let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = ip || yp.e.LastCreatedScene, this._scene && (this.id = pp, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.gy(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = op, null !== Sp && (this._totalVertices = Sp), cp ? this.setAllVerticesData(cp, op) : null === Sp && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Ip && (this.applyToMesh(Ip), Ip.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Gl() {
        return this._scene
      }
      gy() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let pp = 0; pp < this._meshes.length; pp++)
          if (!this._meshes[pp].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const pp = new Set;
        for (const ip in this._vertexBuffers) pp.add(this._vertexBuffers[ip].getWrapperBuffer());
        pp.forEach((pp => {
          pp._rebuild()
        }))
      }
      setAllVerticesData(pp, ip) {
        pp.applyToGeometry(this, ip), this._notifyUpdate()
      }
      setVerticesData(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0;
        cp && Array.isArray(ip) && (ip = new Float32Array(ip));
        const op = new Sp.j(this._engine, ip, pp, {
          updatable: cp,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Op,
          label: "Geometry_" + this.id + "_" + pp
        });
        this.setVerticesBuffer(op)
      }
      removeVerticesData(pp) {
        this._vertexBuffers[pp] && (this._vertexBuffers[pp].dispose(), delete this._vertexBuffers[pp]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const op = pp.getKind();
        this._vertexBuffers[op] && cp && this._vertexBuffers[op].dispose(), pp._buffer && pp._ownsBuffer && pp._buffer._increaseReferences(), this._vertexBuffers[op] = pp;
        const Ip = this._meshes,
          xp = Ip.length;
        if (op === Sp.j.PositionKind) {
          this._totalVertices = ip ?? pp._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : pp.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const cp = this._extend && this._extend.minimum || new Op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            op = this._extend && this._extend.maximum || new Op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let pp = 0; pp < xp; pp++) {
            const ip = Ip[pp];
            ip.buildBoundingInfo(cp, op), ip._createGlobalSubMesh(ip.isUnIndexed), ip.computeWorldMatrix(!0), ip.synchronizeInstances()
          }
        }
        this._notifyUpdate(op)
      }
      updateVerticesDataDirectly(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const op = this.getVertexBuffer(pp);
        op && (op.updateDirectly(ip, cp, Op), this._notifyUpdate(pp))
      }
      updateVerticesData(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this.getVertexBuffer(pp);
        Op && (Op.update(ip), pp === Sp.j.PositionKind && this._updateBoundingInfo(cp, ip), this._notifyUpdate(pp))
      }
      _updateBoundingInfo(pp, ip) {
        if (pp && this._updateExtend(ip), this._resetPointsArrayCache(), pp) {
          const pp = this._meshes;
          for (const ip of pp) {
            ip.hasBoundingInfo ? ip.bJ().reConstruct(this._extend.minimum, this._extend.maximum) : ip.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const pp = ip.Am;
            for (const ip of pp) ip.refreshBoundingInfo()
          }
        }
      }
      _bind(pp, ip, cp, Op) {
        if (!pp) return;
        void 0 === ip && (ip = this._indexBuffer);
        const op = this.getVertexBuffers();
        if (!op) return;
        if (ip != this._indexBuffer || !this._vertexArrayObjects && !Op) return void this._engine.bindBuffers(op, ip, pp, cp);
        const Ip = Op || this._vertexArrayObjects,
          Sp = this._engine;
        Ip[pp.key] || (Ip[pp.key] = Sp.recordVertexArrayObject(op, ip, pp, cp)), Sp.bindVertexArrayObject(Ip[pp.key], ip)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(pp, ip, cp) {
        const Op = this.getVertexBuffer(pp);
        return Op ? Op.getFloatData(this._totalVertices, cp || ip && 1 !== this._meshes.length) : null
      }
      copyVerticesData(pp, ip) {
        const cp = this.getVertexBuffer(pp);
        if (!cp) return;
        ip[pp] || (ip[pp] = new Float32Array(this._totalVertices * cp.getSize()));
        const Op = cp.getData();
        Op && (0, wp.e)(Op, cp.getSize(), cp.type, cp.byteOffset, cp.byteStride, cp.normalized, this._totalVertices, ip[pp])
      }
      isVertexBufferUpdatable(pp) {
        const ip = this._vertexBuffers[pp];
        return !!ip && ip.isUpdatable()
      }
      getVertexBuffer(pp) {
        return this.isReady() ? this._vertexBuffers[pp] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(pp) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[pp] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp)
      }
      getVerticesDataKinds() {
        const pp = [];
        let ip;
        if (!this._vertexBuffers && this._delayInfo)
          for (ip in this._delayInfo) pp.push(ip);
        else
          for (ip in this._vertexBuffers) pp.push(ip);
        return pp
      }
      updateIndices(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Op = pp.length !== this._indices.length;
            if (cp || (this._indices = pp.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, pp, ip), Op)
              for (const pp of this._meshes) pp._createGlobalSubMesh(!0)
          } else this.setIndices(pp, null, !0)
      }
      setIndexBuffer(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = pp, this._totalVertices = ip, this._totalIndices = cp, pp.is32Bits = null === Op ? ip > 65535 : Op;
        for (const op of this._meshes) op._createGlobalSubMesh(!0), op.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = pp, this._indexBufferIsUpdatable = cp, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, cp, "Geometry_" + this.id + "_IndexBuffer")), void 0 != ip && (this._totalVertices = ip);
        for (const op of this._meshes) op._createGlobalSubMesh(!Op), op.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      NOp(pp, ip) {
        if (!this.isReady()) return null;
        const cp = this._indices;
        return ip || pp && 1 !== this._meshes.length ? cp.slice() : cp
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        pp && this._vertexArrayObjects && this._vertexArrayObjects[pp.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[pp.key]), delete this._vertexArrayObjects[pp.key])
      }
      releaseForMesh(pp, ip) {
        const cp = this._meshes,
          Op = cp.indexOf(pp); - 1 !== Op && (cp.splice(Op, 1), this._vertexArrayObjects && pp._invalidateInstanceVertexArrayObject(), pp._geometry = null, 0 === cp.length && ip && this.dispose())
      }
      applyToMesh(pp) {
        if (pp._geometry === this) return;
        const ip = pp._geometry;
        ip && ip.releaseForMesh(pp), this._vertexArrayObjects && pp._invalidateInstanceVertexArrayObject();
        const cp = this._meshes;
        pp._geometry = this, pp._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), cp.push(pp), this.isReady() ? this._applyToMesh(pp) : this._boundingInfo && pp.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!pp && (pp = this.getVerticesData(Sp.j.PositionKind), !pp)) return;
          this._extend = (0, Wp.f)(pp, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(pp) {
        for (const ip in this._vertexBuffers) {
          const cp = this._vertexBuffers[ip];
          cp._buffer.getBuffer() || cp.create(), ip === Sp.j.PositionKind && (this._extend || this._updateExtend(), pp.buildBoundingInfo(this._extend.minimum, this._extend.maximum), pp._createGlobalSubMesh(pp.isUnIndexed), pp._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), pp._syncGeometryWithMorphTargetManager(), pp.synchronizeInstances()
      }
      _notifyUpdate(pp) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, pp), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const ip of this._meshes) ip._markSubMeshesAsAttributesDirty()
      }
      load(pp, ip) {
        2 !== this.delayLoadState && (this.isReady() ? ip && ip() : (this.delayLoadState = 2, this._queueLoad(pp, ip)))
      }
      _queueLoad(pp, ip) {
        this.delayLoadingFile && (pp.addPendingData(this), (async () => {
          try {
            const cp = await pp._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void pp.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(cp), this), this.delayLoadState = 1, this._delayInfo = [], pp.removePendingData(this);
            const Op = this._meshes,
              op = Op.length;
            for (let pp = 0; pp < op; pp++) this._applyToMesh(Op[pp]);
            ip && ip()
          } catch (cp) {
            pp.removePendingData(this), pp.uR || Ap.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${cp}`)
          }
        })())
      }
      toLeftHanded() {
        const pp = this.NOp(!1);
        if (null != pp && pp.length > 0) {
          for (let ip = 0; ip < pp.length; ip += 3) {
            const cp = pp[ip + 0];
            pp[ip + 0] = pp[ip + 2], pp[ip + 2] = cp
          }
          this.setIndices(pp)
        }
        const ip = this.getVerticesData(Sp.j.PositionKind, !1);
        if (null != ip && ip.length > 0) {
          for (let pp = 0; pp < ip.length; pp += 3) ip[pp + 2] = -ip[pp + 2];
          this.setVerticesData(Sp.j.PositionKind, ip, !1)
        }
        const cp = this.getVerticesData(Sp.j.NormalKind, !1);
        if (null != cp && cp.length > 0) {
          for (let pp = 0; pp < cp.length; pp += 3) cp[pp + 2] = -cp[pp + 2];
          this.setVerticesData(Sp.j.NormalKind, cp, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const pp = this.getVerticesData(Sp.j.PositionKind);
        if (!pp || 0 === pp.length) return !1;
        for (let ip = 3 * this._positionsCache.length, cp = this._positionsCache.length; ip < pp.length; ip += 3, ++cp) this._positionsCache[cp] = Op.o.FromArray(pp, ip);
        for (let ip = 0, cp = 0; ip < pp.length; ip += 3, ++cp) this._positionsCache[cp].set(pp[0 + ip], pp[1 + ip], pp[2 + ip]);
        return this._positionsCache.length = pp.length / 3, this._positions = this._positionsCache, !0
      }
      uR() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const cp in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[cp]);
          this._vertexArrayObjects = {};
          const pp = this._meshes,
            ip = pp.length;
          for (let cp = 0; cp < ip; cp++) pp[cp]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const pp = this._meshes,
          ip = pp.length;
        let cp;
        for (cp = 0; cp < ip; cp++) this.releaseForMesh(pp[cp]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Op in this._vertexBuffers) this._vertexBuffers[Op].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const pp = this._parentContainer.geometries.indexOf(this);
          pp > -1 && this._parentContainer.geometries.splice(pp, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(pp) {
        const ip = new vp(pp, this._scene),
          cp = this.NOp(void 0, !0);
        cp && ip.setIndices(cp);
        let Op, op = !1;
        for (Op in this._vertexBuffers) {
          const pp = this.getVertexBuffer(Op),
            cp = pp.getData();
          if (!cp) continue;
          const Ip = pp.isUpdatable(),
            xp = pp.getSize(),
            {
              type: Lp,
              byteOffset: Yp,
              byteStride: Dp,
              normalized: Ap
            } = pp;
          op = op || Ip;
          let Pp = this._totalVertices;
          if (pp.getIsInstanced()) {
            let pp;
            pp = cp instanceof Array ? 4 * cp.length : cp.byteLength, Pp = pp / Dp
          }
          const Wp = (0, wp.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
            yp = new Sp.j(this._engine, Wp, Op, {
              updatable: Ip,
              useBytes: !1,
              stride: xp,
              size: xp,
              offset: 0,
              type: Lp,
              normalized: Ap,
              takeBufferOwnership: !0,
              instanced: pp.getIsInstanced()
            });
          ip.setVerticesBuffer(yp, Pp)
        }
        for (Op in ip._updatable = op, ip.delayLoadState = this.delayLoadState, ip.delayLoadingFile = this.delayLoadingFile, ip._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) ip._delayInfo = ip._delayInfo || [], ip._delayInfo.push(Op);
        return ip._boundingInfo = new Yp.d(this._extend.minimum, this._extend.maximum), ip
      }
      serialize() {
        const pp = {};
        return pp.id = this.id, pp.uniqueId = this.uniqueId, pp.updatable = this._updatable, Pp.b && Pp.b.HasTags(this) && (pp.tags = Pp.b.GetTags(this)), pp
      }
      _toNumberArray(pp) {
        return Array.isArray(pp) ? pp : Array.prototype.slice.call(pp)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const pp in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, pp) && (this._vertexBuffers[pp]._buffer._data = null)
      }
      serializeVerticeData() {
        const pp = this.serialize();
        return this.isVerticesDataPresent(Sp.j.PositionKind) && (pp.positions = this._toNumberArray(this.getVerticesData(Sp.j.PositionKind)), this.isVertexBufferUpdatable(Sp.j.PositionKind) && (pp.positionsUpdatable = !0)), this.isVerticesDataPresent(Sp.j.NormalKind) && (pp.normals = this._toNumberArray(this.getVerticesData(Sp.j.NormalKind)), this.isVertexBufferUpdatable(Sp.j.NormalKind) && (pp.normalsUpdatable = !0)), this.isVerticesDataPresent(Sp.j.TangentKind) && (pp.tangents = this._toNumberArray(this.getVerticesData(Sp.j.TangentKind)), this.isVertexBufferUpdatable(Sp.j.TangentKind) && (pp.tangentsUpdatable = !0)), this.isVerticesDataPresent(Sp.j.UVKind) && (pp.uvs = this._toNumberArray(this.getVerticesData(Sp.j.UVKind)), this.isVertexBufferUpdatable(Sp.j.UVKind) && (pp.uvsUpdatable = !0)), this.isVerticesDataPresent(Sp.j.UV2Kind) && (pp.uvs2 = this._toNumberArray(this.getVerticesData(Sp.j.UV2Kind)), this.isVertexBufferUpdatable(Sp.j.UV2Kind) && (pp.uvs2Updatable = !0)), this.isVerticesDataPresent(Sp.j.UV3Kind) && (pp.uvs3 = this._toNumberArray(this.getVerticesData(Sp.j.UV3Kind)), this.isVertexBufferUpdatable(Sp.j.UV3Kind) && (pp.uvs3Updatable = !0)), this.isVerticesDataPresent(Sp.j.UV4Kind) && (pp.uvs4 = this._toNumberArray(this.getVerticesData(Sp.j.UV4Kind)), this.isVertexBufferUpdatable(Sp.j.UV4Kind) && (pp.uvs4Updatable = !0)), this.isVerticesDataPresent(Sp.j.UV5Kind) && (pp.uvs5 = this._toNumberArray(this.getVerticesData(Sp.j.UV5Kind)), this.isVertexBufferUpdatable(Sp.j.UV5Kind) && (pp.uvs5Updatable = !0)), this.isVerticesDataPresent(Sp.j.UV6Kind) && (pp.uvs6 = this._toNumberArray(this.getVerticesData(Sp.j.UV6Kind)), this.isVertexBufferUpdatable(Sp.j.UV6Kind) && (pp.uvs6Updatable = !0)), this.isVerticesDataPresent(Sp.j.ColorKind) && (pp.colors = this._toNumberArray(this.getVerticesData(Sp.j.ColorKind)), this.isVertexBufferUpdatable(Sp.j.ColorKind) && (pp.colorsUpdatable = !0)), this.isVerticesDataPresent(Sp.j.MatricesIndicesKind) && (pp.matricesIndices = this._toNumberArray(this.getVerticesData(Sp.j.MatricesIndicesKind)), pp.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Sp.j.MatricesIndicesKind) && (pp.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Sp.j.MatricesWeightsKind) && (pp.matricesWeights = this._toNumberArray(this.getVerticesData(Sp.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(Sp.j.MatricesWeightsKind) && (pp.matricesWeightsUpdatable = !0)), pp.indices = this._toNumberArray(this.NOp()), pp
      }
      static ExtractFromMesh(pp, ip) {
        const cp = pp._geometry;
        return cp ? cp.copy(ip) : null
      }
      static RandomId() {
        return Dp.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(pp, ip) {
        for (let cp = 0; cp < ip.geometries.length; cp++)
          if (ip.geometries[cp]._loadedUniqueId === pp) return ip.geometries[cp];
        return null
      }
      static _ImportGeometry(pp, ip) {
        const cp = ip.Gl(),
          Op = pp.geometryUniqueId,
          Ip = pp.geometryId;
        if (Op || Ip) {
          const pp = Op ? this._GetGeometryByLoadedUniqueId(Op, cp) : cp.getGeometryById(Ip);
          pp && pp.applyToMesh(ip)
        } else if (pp instanceof ArrayBuffer) {
          const cp = ip._binaryInfo;
          if (cp.positionsAttrDesc && cp.positionsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.positionsAttrDesc.offset, cp.positionsAttrDesc.count);
            ip.setVerticesData(Sp.j.PositionKind, Op, !1)
          }
          if (cp.normalsAttrDesc && cp.normalsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.normalsAttrDesc.offset, cp.normalsAttrDesc.count);
            ip.setVerticesData(Sp.j.NormalKind, Op, !1)
          }
          if (cp.tangetsAttrDesc && cp.tangetsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.tangetsAttrDesc.offset, cp.tangetsAttrDesc.count);
            ip.setVerticesData(Sp.j.TangentKind, Op, !1)
          }
          if (cp.uvsAttrDesc && cp.uvsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvsAttrDesc.offset, cp.uvsAttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UVKind, Op, !1)
          }
          if (cp.uvs2AttrDesc && cp.uvs2AttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvs2AttrDesc.offset, cp.uvs2AttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UV2Kind, Op, !1)
          }
          if (cp.uvs3AttrDesc && cp.uvs3AttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvs3AttrDesc.offset, cp.uvs3AttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UV3Kind, Op, !1)
          }
          if (cp.uvs4AttrDesc && cp.uvs4AttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvs4AttrDesc.offset, cp.uvs4AttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UV4Kind, Op, !1)
          }
          if (cp.uvs5AttrDesc && cp.uvs5AttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvs5AttrDesc.offset, cp.uvs5AttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UV5Kind, Op, !1)
          }
          if (cp.uvs6AttrDesc && cp.uvs6AttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.uvs6AttrDesc.offset, cp.uvs6AttrDesc.count);
            if (Up.c)
              for (let pp = 1; pp < Op.length; pp += 2) Op[pp] = 1 - Op[pp];
            ip.setVerticesData(Sp.j.UV6Kind, Op, !1)
          }
          if (cp.colorsAttrDesc && cp.colorsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.colorsAttrDesc.offset, cp.colorsAttrDesc.count);
            ip.setVerticesData(Sp.j.ColorKind, Op, !1, cp.colorsAttrDesc.stride)
          }
          if (cp.matricesIndicesAttrDesc && cp.matricesIndicesAttrDesc.count > 0) {
            const Op = new Int32Array(pp, cp.matricesIndicesAttrDesc.offset, cp.matricesIndicesAttrDesc.count),
              op = [];
            for (let pp = 0; pp < Op.length; pp++) {
              const ip = Op[pp];
              op.push(255 & ip), op.push((65280 & ip) >> 8), op.push((16711680 & ip) >> 16), op.push(ip >> 24 & 255)
            }
            ip.setVerticesData(Sp.j.MatricesIndicesKind, op, !1)
          }
          if (cp.matricesIndicesExtraAttrDesc && cp.matricesIndicesExtraAttrDesc.count > 0) {
            const Op = new Int32Array(pp, cp.matricesIndicesExtraAttrDesc.offset, cp.matricesIndicesExtraAttrDesc.count),
              op = [];
            for (let pp = 0; pp < Op.length; pp++) {
              const ip = Op[pp];
              op.push(255 & ip), op.push((65280 & ip) >> 8), op.push((16711680 & ip) >> 16), op.push(ip >> 24 & 255)
            }
            ip.setVerticesData(Sp.j.MatricesIndicesExtraKind, op, !1)
          }
          if (cp.matricesWeightsAttrDesc && cp.matricesWeightsAttrDesc.count > 0) {
            const Op = new Float32Array(pp, cp.matricesWeightsAttrDesc.offset, cp.matricesWeightsAttrDesc.count);
            ip.setVerticesData(Sp.j.MatricesWeightsKind, Op, !1)
          }
          if (cp.indicesAttrDesc && cp.indicesAttrDesc.count > 0) {
            const Op = new Int32Array(pp, cp.indicesAttrDesc.offset, cp.indicesAttrDesc.count);
            ip.setIndices(Op, null)
          }
          if (cp.subMeshesAttrDesc && cp.subMeshesAttrDesc.count > 0) {
            const Op = new Int32Array(pp, cp.subMeshesAttrDesc.offset, 5 * cp.subMeshesAttrDesc.count);
            ip.Am = [];
            for (let pp = 0; pp < cp.subMeshesAttrDesc.count; pp++) {
              const cp = Op[5 * pp + 0],
                op = Op[5 * pp + 1],
                Ip = Op[5 * pp + 2],
                Sp = Op[5 * pp + 3],
                Lp = Op[5 * pp + 4];
              xp.d.AddToMesh(cp, op, Ip, Sp, Lp, ip)
            }
          }
        } else if (pp.positions && pp.normals && pp.indices) {
          if (ip.setVerticesData(Sp.j.PositionKind, pp.positions, pp.positions._updatable || pp.positionsUpdatable), ip.setVerticesData(Sp.j.NormalKind, pp.normals, pp.normals._updatable || pp.normalsUpdatable), pp.tangents && ip.setVerticesData(Sp.j.TangentKind, pp.tangents, pp.tangents._updatable || pp.tangentsUpdatable), pp.uvs && ip.setVerticesData(Sp.j.UVKind, pp.uvs, pp.uvs._updatable || pp.uvsUpdatable), pp.uvs2 && ip.setVerticesData(Sp.j.UV2Kind, pp.uvs2, pp.uvs2._updatable || pp.uvs2Updatable), pp.uvs3 && ip.setVerticesData(Sp.j.UV3Kind, pp.uvs3, pp.uvs3._updatable || pp.uvs3Updatable), pp.uvs4 && ip.setVerticesData(Sp.j.UV4Kind, pp.uvs4, pp.uvs4._updatable || pp.uvs4Updatable), pp.uvs5 && ip.setVerticesData(Sp.j.UV5Kind, pp.uvs5, pp.uvs5._updatable || pp.uvs5Updatable), pp.uvs6 && ip.setVerticesData(Sp.j.UV6Kind, pp.uvs6, pp.uvs6._updatable || pp.uvs6Updatable), pp.colors && ip.setVerticesData(Sp.j.ColorKind, op.h.CheckColors4(pp.colors, pp.positions.length / 3), pp.colors._updatable), pp.matricesIndices)
            if (pp.matricesIndices._isExpanded || pp.matricesIndicesExpanded) delete pp.matricesIndices._isExpanded, delete pp.matricesIndicesExpanded, ip.setVerticesData(Sp.j.MatricesIndicesKind, pp.matricesIndices, pp.matricesIndices._updatable || pp.matricesIndicesUpdatable);
            else {
              const cp = [];
              for (let ip = 0; ip < pp.matricesIndices.length; ip++) {
                const Op = pp.matricesIndices[ip];
                cp.push(255 & Op), cp.push((65280 & Op) >> 8), cp.push((16711680 & Op) >> 16), cp.push(Op >> 24 & 255)
              }
              ip.setVerticesData(Sp.j.MatricesIndicesKind, cp, pp.matricesIndices._updatable || pp.matricesIndicesUpdatable)
            } if (pp.matricesIndicesExtra)
            if (pp.matricesIndicesExtraExpanded || pp.matricesIndicesExtra._isExpanded) delete pp.matricesIndices._isExpanded, delete pp.matricesIndicesExtraExpanded, ip.setVerticesData(Sp.j.MatricesIndicesExtraKind, pp.matricesIndicesExtra, pp.matricesIndicesExtra._updatable || pp.matricesIndicesExtraUpdatable);
            else {
              const cp = [];
              for (let ip = 0; ip < pp.matricesIndicesExtra.length; ip++) {
                const Op = pp.matricesIndicesExtra[ip];
                cp.push(255 & Op), cp.push((65280 & Op) >> 8), cp.push((16711680 & Op) >> 16), cp.push(Op >> 24 & 255)
              }
              ip.setVerticesData(Sp.j.MatricesIndicesExtraKind, cp, pp.matricesIndicesExtra._updatable || pp.matricesIndicesExtraUpdatable)
            } pp.matricesWeights && (vp._CleanMatricesWeights(pp, ip), ip.setVerticesData(Sp.j.MatricesWeightsKind, pp.matricesWeights, pp.matricesWeights._updatable)), pp.matricesWeightsExtra && ip.setVerticesData(Sp.j.MatricesWeightsExtraKind, pp.matricesWeightsExtra, pp.matricesWeights._updatable), ip.setIndices(pp.indices, null)
        }
        if (pp.Am) {
          ip.Am = [];
          for (let cp = 0; cp < pp.Am.length; cp++) {
            const Op = pp.Am[cp];
            xp.d.AddToMesh(Op.materialIndex, Op.verticesStart, Op.verticesCount, Op.indexStart, Op.indexCount, ip)
          }
        }
        ip._shouldGenerateFlatShading && (ip.convertToFlatShadedMesh(), ip._shouldGenerateFlatShading = !1), ip.computeWorldMatrix(!0), cp.onMeshImportedObservable.notifyObservers(ip)
      }
      static _CleanMatricesWeights(pp, ip) {
        const cp = .001;
        if (!Lp.d.CleanBoneMatrixWeights) return;
        let Op;
        if (!(pp.skeletonId > -1)) return;
        {
          const cp = ip.Gl().getLastSkeletonById(pp.skeletonId);
          if (!cp) return;
          Op = cp.bones.length
        }
        const op = ip.getVerticesData(Sp.j.MatricesIndicesKind),
          Ip = ip.getVerticesData(Sp.j.MatricesIndicesExtraKind),
          xp = pp.matricesWeights,
          Yp = pp.matricesWeightsExtra,
          Dp = pp.numBoneInfluencer,
          Ap = xp.length;
        for (let Sp = 0; Sp < Ap; Sp += 4) {
          let pp = 0,
            ip = -1;
          for (let Op = 0; Op < 4; Op++) {
            const op = xp[Sp + Op];
            pp += op, op < cp && ip < 0 && (ip = Op)
          }
          if (Yp)
            for (let Op = 0; Op < 4; Op++) {
              const op = Yp[Sp + Op];
              pp += op, op < cp && ip < 0 && (ip = Op + 4)
            }
          if ((ip < 0 || ip > Dp - 1) && (ip = Dp - 1), pp > cp) {
            const ip = 1 / pp;
            for (let pp = 0; pp < 4; pp++) xp[Sp + pp] *= ip;
            if (Yp)
              for (let pp = 0; pp < 4; pp++) Yp[Sp + pp] *= ip
          } else ip >= 4 ? (Yp[Sp + ip - 4] = 1 - pp, Ip[Sp + ip - 4] = Op) : (xp[Sp + ip] = 1 - pp, op[Sp + ip] = Op)
        }
        ip.setVerticesData(Sp.j.MatricesIndicesKind, op), pp.matricesWeightsExtra && ip.setVerticesData(Sp.j.MatricesIndicesExtraKind, Ip)
      }
      static Parse(pp, ip, cp) {
        const op = new vp(pp.id, ip, void 0, pp.updatable);
        return op._loadedUniqueId = pp.uniqueId, Pp.b && Pp.b.AddTagsTo(op, pp.tags), pp.delayLoadingFile ? (op.delayLoadState = 4, op.delayLoadingFile = cp + pp.delayLoadingFile, op._boundingInfo = new Yp.d(Op.o.FromArray(pp.boundingBoxMinimum), Op.o.FromArray(pp.boundingBoxMaximum)), op._delayInfo = [], pp.hasUVs && op._delayInfo.push(Sp.j.UVKind), pp.hasUVs2 && op._delayInfo.push(Sp.j.UV2Kind), pp.hasUVs3 && op._delayInfo.push(Sp.j.UV3Kind), pp.hasUVs4 && op._delayInfo.push(Sp.j.UV4Kind), pp.hasUVs5 && op._delayInfo.push(Sp.j.UV5Kind), pp.hasUVs6 && op._delayInfo.push(Sp.j.UV6Kind), pp.hasColors && op._delayInfo.push(Sp.j.ColorKind), pp.hasMatricesIndices && op._delayInfo.push(Sp.j.MatricesIndicesKind), pp.hasMatricesWeights && op._delayInfo.push(Sp.j.MatricesWeightsKind), op._delayLoadingFunction = Ip.d.ImportVertexData) : Ip.d.ImportVertexData(pp, op), ip.pushGeometry(op, !0), op
      }
    }
  },
  40638: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      h: () => yp
    });
    var Op = cp(37320),
      op = cp(38905),
      Ip = cp(40614),
      Sp = cp(40577),
      xp = cp(38900),
      Lp = cp(40617),
      Yp = cp(40342),
      Dp = cp(37368);
    class Ap extends Ip.b {
      constructor(pp, ip) {
        super(pp, ip.Gl()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ip.F_(this), this._sourceMesh = ip, this._unIndexed = ip._unIndexed, this.position.rM(ip.position), this.rotation.rM(ip.rotation), this.ei.rM(ip.ei), ip.rotationQuaternion && (this.rotationQuaternion = ip.rotationQuaternion.clone()), this.animations = ip.animations.slice();
        for (const cp of ip.getAnimationRanges()) null != cp && this.createAnimationRange(cp.name, cp.from, cp.to);
        if (this.infiniteDistance = ip.infiniteDistance, this.setPivotMatrix(ip.getPivotMatrix()), ip.skeleton || ip.morphTargetManager || !ip.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const pp = ip.bJ();
          this.buildBoundingInfo(pp.minimum, pp.maximum)
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
      set receiveShadows(pp) {
        this._sourceMesh?.receiveShadows !== pp && op.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(pp) {
        this._sourceMesh?.material !== pp && op.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(pp) {
        this._sourceMesh?.visibility !== pp && op.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(pp) {
        this._sourceMesh?.skeleton !== pp && op.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(pp) {
        this._sourceMesh && pp !== this._sourceMesh.renderingGroupId && op.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(pp) {
        this._sourceMesh && pp !== this._sourceMesh.meshBlendingTag && op.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get aop() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(pp) {
        return this._sourceMesh.createInstance(pp)
      }
      isReady() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(pp, !0)
      }
      getVerticesData(pp, ip, cp) {
        return this._sourceMesh.getVerticesData(pp, ip, cp)
      }
      copyVerticesData(pp, ip) {
        this._sourceMesh.copyVerticesData(pp, ip)
      }
      getVertexBuffer(pp, ip) {
        return this._sourceMesh.getVertexBuffer(pp, ip)
      }
      setVerticesData(pp, ip, cp, Op) {
        return this.aop && this.aop.setVerticesData(pp, ip, cp, Op), this.aop
      }
      updateVerticesData(pp, ip, cp, Op) {
        return this.aop && this.aop.updateVerticesData(pp, ip, cp, Op), this.aop
      }
      setIndices(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.aop && this.aop.setIndices(pp, ip), this.aop
      }
      isVerticesDataPresent(pp) {
        return this._sourceMesh.isVerticesDataPresent(pp)
      }
      NOp() {
        return this._sourceMesh.NOp()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let pp, ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.bJ().isLocked) return this;
        pp = "object" === typeof ip ? ip : {
          applySkeleton: ip,
          applyMorph: cp
        };
        const Op = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(pp, null, Yp.j.PositionKind), Op), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(pp, ip) {
        if (super._activate(pp, ip), this._sourceMesh.Am || op.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, pp), ip) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Lp.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Op.b);
          const pp = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Op.i.Zy[7].rM(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.rM(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.rM(Op.i.Zy[7]), this._currentLOD._masterMesh = pp, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Vl() {
        return !0
      }
      getLOD(pp) {
        if (!pp) return this;
        const ip = this.aop.getLODLevels();
        if (ip && 0 !== ip.length) {
          const ip = this.bJ();
          this._currentLOD = this.aop.getLOD(pp, ip.Yop)
        } else this._currentLOD = this.aop;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(pp) {
        return this.aop._preActivateForIntermediateRendering(pp)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.Am)
          for (let pp = 0; pp < this._sourceMesh.Am.length; pp++) this._sourceMesh.Am[pp].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.bJ().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(pp);
        if (xp.e.DeepCopy(this, Op, ["name", "Am", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "aop", "Vl", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "fop", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Rxp", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), ip && (Op.parent = ip), !cp)
          for (let op = 0; op < this.Gl().meshes.length; op++) {
            const pp = this.Gl().meshes[op];
            pp.parent === this && pp.clone(pp.name, Op)
          }
        return Op.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Op), Op
      }
      dispose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.o3(this), super.dispose(pp, ip)
      }
      _serializeAsParent(pp) {
        super._serializeAsParent(pp), pp.parentId = this._sourceMesh.uniqueId, pp.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = this.clone("Clone of " + (this.name || this.id), pp || this.parent, !0, ip && ip.newSourcedMesh);
        Op && cp && cp(this, Op);
        for (const op of this.getChildTransformNodes(!0)) op.instantiateHierarchy(Op, ip, cp);
        return Op
      }
    }
    let Pp = !1;

    function Wp(pp, ip, cp, Op, op) {
      for (let Ip = 0; Ip < ip.length; Ip++) {
        const Sp = pp[ip[Ip]] ?? 0,
          xp = op + cp[Ip];
        Sp.toArray ? Sp.toArray(Op, xp) : Sp.copyToArray ? Sp.copyToArray(Op, xp) : Op[xp] = Sp
      }
    }

    function yp() {
      Pp || (Pp = !0, Sp.d._instancedMeshFactory = (pp, ip) => {
        const cp = new Ap(pp, ip);
        if (ip.MJ) {
          cp.MJ = {};
          for (const pp in ip.MJ) cp.MJ[pp] = ip.MJ[pp]
        }
        return cp
      }, Sp.d.prototype.qJ = function(pp, ip) {
        if (!this.MJ) {
          this.MJ = {};
          for (const pp of this.instances) pp.MJ = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.gy().getCaps().vertexArrayObject ? {} : void 0
        }), this.MJ[pp] = null, this._userInstancedBuffersStorage.strides[pp] = ip;
        const cp = this._userInstancedBuffersStorage;
        cp.interleavedKinds = [], cp.interleavedOffsets = [], cp.interleavedRowStride = 0;
        for (const Op in cp.strides) cp.interleavedKinds.push(Op), cp.interleavedOffsets.push(cp.interleavedRowStride), cp.interleavedRowStride += cp.strides[Op];
        cp.interleavedData = new Float32Array(32 * cp.interleavedRowStride);
        for (const Op in cp.interleavedBuffers) cp.interleavedBuffers[Op].buffer.dispose();
        cp.interleavedBuffers = {}, cp.vertexBuffers[pp] = null;
        for (const Op of this.instances) Op.MJ[pp] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Sp.d.prototype._processInstancedBuffers = function(pp, ip) {
        const cp = this._userInstancedBuffersStorage,
          Op = cp.interleavedRowStride;
        if (!Op) return;
        const op = pp ? pp.length : 0,
          Ip = (op + 1) * Op;
        let Sp = cp.interleavedData;
        if (Sp.length < Ip) {
          let pp = Sp.length;
          for (; pp < Ip;) pp *= 2;
          Sp = cp.interleavedData = new Float32Array(pp)
        }
        const xp = cp.interleavedKinds,
          Lp = cp.interleavedOffsets;
        let Dp = 0;
        ip && (Wp(this.MJ, xp, Lp, Sp, Dp), Dp += Op);
        for (let Yp = 0; Yp < op; Yp++) Wp(pp[Yp].MJ, xp, Lp, Sp, Dp), Dp += Op;
        let Ap = "shared",
          Pp = cp.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Ap = this._instanceDataStorage.engine.currentRenderPassId, cp.renderPasses || (cp.renderPasses = {}), cp.renderPasses[Ap] || (cp.renderPasses[Ap] = {}), Pp = cp.renderPasses[Ap]);
        const yp = cp.interleavedBuffers[Ap];
        let Up = !yp || yp.data !== Sp;
        for (let Yp = 0; !Up && Yp < xp.length; Yp++) Up = !Pp[xp[Yp]];
        if (!Up) return void yp.buffer.updateDirectly(Sp, 0);
        yp?.buffer.dispose();
        const wp = new Yp.b(this.gy(), Sp, !0, Op, !1, !0);
        for (let Yp = 0; Yp < xp.length; Yp++) {
          const pp = xp[Yp],
            ip = wp.createVertexBuffer(pp, Lp[Yp], cp.strides[pp]);
          ip.hashCode += ip.byteOffset * 2 ** 24, Pp[pp] = ip
        }
        cp.interleavedBuffers[Ap] = {
          buffer: wp,
          data: Sp
        }, this._invalidateInstanceVertexArrayObject()
      }, Sp.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const pp in this._userInstancedBuffersStorage.vertexArrayObjects) this.gy().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[pp]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Sp.d.prototype._disposeInstanceSpecificData = function() {
        for (const ip in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[ip].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const ip in this.MJ) this._userInstancedBuffersStorage.vertexBuffers[ip] && this._userInstancedBuffersStorage.vertexBuffers[ip].dispose();
        const pp = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (pp) {
          for (const ip in pp) pp[ip].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.MJ = {}
      }, (0, Dp.g)("BABYLON.InstancedMesh", Ap))
    }
  },
  40577: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Kp,
      e: () => ii,
      h: () => Fp
    });
    var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = cp(37349),
      tp = cp(40304),
      Hp = cp(40257),
      dp = cp(38900),
      ep = cp(40236),
      jp = cp(40586),
      kp = cp(40411),
      mp = cp(37320),
      Rp = cp(37487),
      qp = cp(40415),
      Mp = cp(40342),
      Cp = cp(40589),
      Ep = cp(40593),
      Xp = cp(40614),
      lp = cp(40481),
      Qp = cp(40476),
      Jp = cp(40550),
      Bp = cp(40621),
      Np = cp(40597),
      Tp = cp(40233),
      fp = cp(38905),
      bp = cp(37368),
      hp = cp(40096),
      ap = cp(40368);
    class np {
      constructor(pp, ip) {
        this.distanceOrScreenCoverage = pp, this.mesh = ip
      }
    }
    class Fp {}
    class gp {
      constructor() {
        this.batchCache = new rp(this), this.batchCacheReplacementModeInFrozenMode = new rp(this), this.instancesBufferSize = 2048
      }
    }
    class Gp {
      constructor() {
        this.renderPasses = {}
      }
    }
    class rp {
      constructor(pp) {
        this.parent = pp, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Zp {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class zp {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const sp = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Kp extends Xp.b {
      static _GetDefaultSideOrientation(pp) {
        return pp || Kp.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(pp) {
        this._internalMeshDataInfo._useLODScreenCoverage = pp, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(pp) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== pp && (pp && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Mp.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Mp.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = pp, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new vp.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new vp.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new vp.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new vp.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new vp.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(pp) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(pp)
      }
      get fop() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(pp) {
        this._internalMeshDataInfo._forcedInstanceCount = pp
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(pp) {
        this._internalMeshDataInfo._sideOrientation = pp, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === pp || !this._scene.useRightHandedSystem && 0 === pp
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(pp) {
        this.sideOrientation = pp, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(pp) {
        this._internalMeshDataInfo._overrideRenderingFillMode = pp
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(pp) {
        pp && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (pp.sideOrientation = null), this._setMaterial(pp)
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
      set isUnIndexed(pp) {
        this._unIndexed !== pp && (this._unIndexed = pp, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const pp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return pp ? pp.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const pp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return pp ? pp.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(pp) {
        this._instanceDataStorage.manualUpdate = pp
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(pp) {
        this._instanceDataStorage.previousManualUpdate = pp
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(pp) {
        this._instanceDataStorage.forceMatrixUpdates = pp
      }
      _copySource(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const op = this.Gl();
        if (pp._geometry && pp._geometry.applyToMesh(this), dp.e.DeepCopy(pp, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "fop", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Vl", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Rxp", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = pp, op.useClonedMeshMap && (pp._internalMeshDataInfo.meshMap || (pp._internalMeshDataInfo.meshMap = {}), pp._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = pp._originalBuilderSideOrientation, this._creationDataStorage = pp._creationDataStorage, pp._ranges) {
          const ip = pp._ranges;
          for (const pp in ip) Object.prototype.hasOwnProperty.call(ip, pp) && ip[pp] && this.createAnimationRange(pp, ip[pp].from, ip[pp].to)
        }
        if (pp.metadata && pp.metadata.clone ? this.metadata = pp.metadata.clone() : this.metadata = pp.metadata, this._internalMetadata = pp._internalMetadata, this.meshBlendingTag = pp.meshBlendingTag, ep.b && ep.b.HasTags(pp) && ep.b.AddTagsTo(this, ep.b.GetTags(pp, !0)), this.eC(pp.isEnabled(!1)), this.parent = pp.parent, this.setPivotMatrix(pp.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + pp.id, this.material = pp.material, !ip) {
          const op = pp.getDescendants(!0);
          for (let pp = 0; pp < op.length; pp++) {
            const Ip = op[pp];
            Ip._isMesh ? (sp.parent = this, sp.doNotCloneChildren = ip, sp.clonePhysicsImpostor = cp, sp.cloneThinInstances = Op, Ip.clone(this.name + "." + Ip.name, sp)) : Ip.clone && Ip.clone(this.name + "." + Ip.name, this)
          }
        }
        if (pp.morphTargetManager && (this.morphTargetManager = pp.morphTargetManager), (0, hp.d)(op.getPhysicsEngine)) {
          const ip = op.getPhysicsEngine();
          if (cp && ip)
            if (1 === ip.getPluginVersion()) {
              const cp = ip.getImpostorForPhysicsObject(pp);
              cp && (this.physicsImpostor = cp.clone(this))
            } else 2 === ip.getPluginVersion() && pp.physicsBody && pp.physicsBody.clone(this)
        }
        for (let Ip = 0; Ip < op.Wm.length; Ip++) {
          const ip = op.Wm[Ip];
          ip.emitter === pp && ip.clone(ip.name, this)
        }
        if (this.skeleton = pp.skeleton, Op && (pp._thinInstanceDataStorage.matrixData ? (this.I9("matrix", new Float32Array(pp._thinInstanceDataStorage.matrixData), 16, !pp._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = pp._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = pp._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = pp._thinInstanceDataStorage.matrixBufferSize, pp._userThinInstanceBuffersStorage)) {
          const ip = pp._userThinInstanceBuffersStorage;
          for (const pp in ip.data) this.I9(pp, new Float32Array(ip.data[pp]), ip.strides[pp], !ip.vertexBuffers?.[pp]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[pp] = ip.sizes[pp]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(pp) {
        let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ip = arguments.length > 4 ? arguments[4] : void 0,
          Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(pp, cp), this._internalMeshDataInfo = new zp, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Zp, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Kp.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, cp = this.Gl(), this._instanceDataStorage = new Gp, this._instanceDataStorage.engine = cp.gy(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new gp), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (pp, ip, cp) => {
          pp && cp && (this._uniformBuffer ? this.transferToEffect(ip) : cp.bindOnlyWorldMatrix(ip))
        };
        let xp = !1;
        if (Op && void 0 === Op._addToSceneRootNodes) {
          const pp = Op;
          ip = pp.parent ?? null, op = pp.source ?? null, Ip = pp.doNotCloneChildren ?? !1, Sp = pp.clonePhysicsImpostor ?? !0, xp = pp.cloneThinInstances ?? !1
        } else ip = Op;
        op && this._copySource(op, Ip, Sp, xp), null !== ip && (this.parent = ip), this._instanceDataStorage.hardwareInstancedRendering = this.gy().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = pp => {
          pp.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new vp.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), op && op.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = 0 === this.getTotalVertices() || ip && ip.doNotInstantiate && (!0 === ip.doNotInstantiate || ip.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), pp || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Op.parent = pp || this.parent, Op.position = this.position.clone(), Op.ei = this.ei.clone(), this.rotationQuaternion ? Op.rotationQuaternion = this.rotationQuaternion.clone() : Op.rotation = this.rotation.clone(), cp && cp(this, Op);
        for (const op of this.getChildTransformNodes(!0)) "InstancedMesh" === op.getClassName() && "Mesh" === Op.getClassName() && op.aop === this ? op.instantiateHierarchy(Op, {
          doNotInstantiate: ip && ip.doNotInstantiate || !1,
          newSourcedMesh: Op
        }, cp) : op.instantiateHierarchy(Op, ip, cp);
        return Op
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(pp) {
        let ip = super.toString(pp);
        if (ip += ", n vertices: " + this.getTotalVertices(), ip += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let cp = 0; cp < this.animations.length; cp++) ip += ", animation[0]: " + this.animations[cp].toString(pp);
        if (pp)
          if (this._geometry) {
            const pp = this.NOp(),
              cp = this.getVerticesData(Mp.j.PositionKind);
            cp && pp && (ip += ", flat shading: " + (cp.length / 3 === pp.length ? "YES" : "NO"))
          } else ip += ", flat shading: UNKNOWN";
        return ip
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const pp of this.instances) pp._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const pp = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((ip, cp) => ip.distanceOrScreenCoverage < cp.distanceOrScreenCoverage ? pp : ip.distanceOrScreenCoverage > cp.distanceOrScreenCoverage ? -pp : 0))
      }
      addLODLevel(pp, ip) {
        if (ip && ip._masterMesh) return fp.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const cp = new np(pp, ip);
        return this._internalMeshDataInfo._LODLevels.push(cp), ip && (ip._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(pp) {
        const ip = this._internalMeshDataInfo;
        for (let cp = 0; cp < ip._LODLevels.length; cp++) {
          const Op = ip._LODLevels[cp];
          if (Op.distanceOrScreenCoverage === pp) return Op.mesh
        }
        return null
      }
      removeLODLevel(pp) {
        const ip = this._internalMeshDataInfo;
        for (let cp = 0; cp < ip._LODLevels.length; cp++) ip._LODLevels[cp].mesh === pp && (ip._LODLevels.splice(cp, 1), pp && (pp._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(pp, ip) {
        const cp = this._internalMeshDataInfo;
        if (!cp._LODLevels || 0 === cp._LODLevels.length) return this;
        const Op = ip || this.bJ().Yop,
          op = pp.mode === kp.d.ORTHOGRAPHIC_CAMERA ? pp.minZ : Op.centerWorld.subtract(pp.globalPosition).length();
        let Ip = op,
          Sp = 1;
        if (cp._useLODScreenCoverage) {
          const ip = pp.screenArea;
          let cp = Op.radiusWorld * pp.minZ / op;
          cp = cp * cp * Math.PI, Ip = cp / ip, Sp = -1
        }
        if (Sp * cp._LODLevels[cp._LODLevels.length - 1].distanceOrScreenCoverage > Sp * Ip) return this.onLODLevelSelection && this.onLODLevelSelection(Ip, this, this), this;
        for (let xp = 0; xp < cp._LODLevels.length; xp++) {
          const pp = cp._LODLevels[xp];
          if (Sp * pp.distanceOrScreenCoverage < Sp * Ip) {
            if (pp.mesh) {
              if (4 === pp.mesh.delayLoadState) return pp.mesh._checkDelayState(), this;
              if (2 === pp.mesh.delayLoadState) return this;
              pp.mesh._preActivate(), pp.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Ip, this, pp.mesh), pp.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Ip, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(pp, ip, cp, Op) {
        if (!this._geometry) return null;
        let op = Op ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]?.getFloatData(this.instances.length + 1, cp || ip && 1 !== this._geometry.meshes.length);
        return op || (op = this._geometry.getVerticesData(pp, ip, cp)), op
      }
      copyVerticesData(pp, ip) {
        this._geometry && this._geometry.copyVerticesData(pp, ip)
      }
      getVertexBuffer(pp, ip) {
        return this._geometry ? (ip ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]) ?? this._geometry.getVertexBuffer(pp) : null
      }
      isVerticesDataPresent(pp, ip) {
        return this._geometry ? !ip && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[pp] || this._geometry.isVerticesDataPresent(pp) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp)
      }
      isVertexBufferUpdatable(pp, ip) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp);
        if (!ip) {
          const ip = this._userInstancedBuffersStorage?.vertexBuffers[pp];
          if (ip) return ip.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(pp)
      }
      getVerticesDataKinds(pp) {
        if (!this._geometry) {
          const pp = [];
          if (this._delayInfo)
            for (const ip of this._delayInfo) pp.push(ip);
          return pp
        }
        const ip = this._geometry.getVerticesDataKinds();
        if (!pp && this._userInstancedBuffersStorage)
          for (const cp in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ip.indexOf(cp) && ip.push(cp);
        return ip
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      NOp(pp, ip) {
        return this._geometry ? this._geometry.NOp(pp, ip) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(pp)) return !1;
        if (!this.Am || 0 === this.Am.length) return !0;
        if (!pp) return !0;
        const cp = this.gy(),
          Op = this.Gl(),
          op = ip || cp.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Ip = this.material || Op.defaultMaterial;
        if (Ip)
          if (Ip._storeEffectOnSubMeshes)
            for (const xp of this.Am) {
              const pp = xp.Ky();
              if (pp)
                if (pp._storeEffectOnSubMeshes) {
                  if (!pp.isReadyForSubMesh(this, xp, op)) return !1
                } else if (!pp.isReady(this, op)) return !1
            } else if (!Ip.isReady(this, op)) return !1;
        const Sp = cp.currentRenderPassId;
        for (const xp of this.lightSources) {
          const pp = xp.getShadowGenerators();
          if (!pp) continue;
          const ip = pp.values();
          for (let Op = ip.next(); !0 !== Op.done; Op = ip.next()) {
            const pp = Op.value;
            if (pp && (!pp.getShadowMap()?.renderList || pp.getShadowMap()?.renderList && -1 !== pp.getShadowMap()?.renderList?.indexOf(this))) {
              const ip = pp.getShadowMap().renderPassIds ?? [cp.currentRenderPassId];
              for (let Op = 0; Op < ip.length; ++Op) {
                cp.currentRenderPassId = ip[Op];
                for (const ip of this.Am)
                  if (!pp.isReady(ip, op, ip.Ky()?.needAlphaBlendingForMesh(this) ?? !1)) return cp.currentRenderPassId = Sp, !1
              }
              cp.currentRenderPassId = Sp
            }
          }
        }
        for (const xp of this._internalMeshDataInfo._LODLevels)
          if (xp.mesh && !xp.mesh.isReady(op)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Vy() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(pp) {
        this._instanceDataStorage.overridenInstanceCount = pp
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const pp = this._instanceDataStorage.engine.currentRenderPassId;
        let ip = this._instanceDataStorage.renderPasses[pp];
        return ip || (ip = new gp, this._instanceDataStorage.renderPasses[pp] = ip), ip
      }
      _preActivate() {
        const pp = this._internalMeshDataInfo,
          ip = this.Gl().getRenderId();
        return pp._preActivateId === ip || (pp._preActivateId = ip, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(pp) {
        const ip = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ip.visibleInstances && (ip.visibleInstances.intermediateDefaultRenderId = pp), this
      }
      _registerInstanceForRenderId(pp, ip) {
        const cp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return cp.visibleInstances || (cp.visibleInstances = {
          defaultRenderId: ip,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), cp.visibleInstances[ip] || (void 0 === cp.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete cp.visibleInstances[cp.previousRenderId], cp.previousRenderId = ip, cp.visibleInstances[ip] = new Array), cp.visibleInstances[ip].push(pp), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.sy || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let pp, ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.bJ().isLocked) return this;
        pp = "object" === typeof ip ? ip : {
          applySkeleton: ip,
          applyMorph: cp
        };
        const Op = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(pp, null, Mp.j.PositionKind), Op), this
      }
      _createGlobalSubMesh(pp) {
        const ip = this.getTotalVertices();
        if (!ip || !this.NOp()) return null;
        if (this.Am && this.Am.length > 0) {
          const cp = this.NOp();
          if (!cp) return null;
          const Op = cp.length;
          let op = !1;
          if (pp) op = !0;
          else
            for (const pp of this.Am) {
              if (pp.indexStart + pp.indexCount > Op) {
                op = !0;
                break
              }
              if (pp.verticesStart + pp.verticesCount > ip) {
                op = !0;
                break
              }
            }
          if (!op) return this.Am[0]
        }
        return this.releaseSubMeshes(), new lp.d(0, 0, ip, 0, this.getTotalIndices() || (this.isUnIndexed ? ip : 0), this)
      }
      subdivide(pp) {
        if (pp < 1) return;
        const ip = this.getTotalIndices();
        let cp = ip / pp | 0,
          Op = 0;
        for (; cp % 3 !== 0;) cp++;
        this.releaseSubMeshes();
        for (let op = 0; op < pp && !(Op >= ip); op++) lp.d.CreateFromIndices(0, Op, Op + cp >= ip ? ip - Op : cp, this, void 0, !1), Op += cp;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(pp, ip, cp, Op);
        else {
          const Op = new Cp.d;
          Op.set(ip, pp);
          const op = this.Gl();
          new Ep.b(Ep.b.RandomId(), op, Op, cp, this)
        }
        return this
      }
      removeVerticesData(pp) {
        this._geometry && this._geometry.removeVerticesData(pp)
      }
      markVerticesDataAsUpdatable(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cp = this.getVertexBuffer(pp);
        cp && cp.isUpdatable() !== ip && this.setVerticesData(pp, this.getVerticesData(pp), ip)
      }
      setVerticesBuffer(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Ep.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(pp, cp, ip), this
      }
      updateVerticesData(pp, ip, cp, Op) {
        return this._geometry ? (Op ? (this.makeGeometryUnique(), this.updateVerticesData(pp, ip, cp, !1)) : this._geometry.updateVerticesData(pp, ip, cp), this) : this
      }
      updateMeshPositions(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cp = this.getVerticesData(Mp.j.PositionKind);
        if (!cp) return this;
        if (pp(cp), this.updateVerticesData(Mp.j.PositionKind, cp, !1, !1), ip) {
          const pp = this.NOp(),
            ip = this.getVerticesData(Mp.j.NormalKind);
          if (!ip) return this;
          Cp.d.ComputeNormals(cp, pp, ip), this.updateVerticesData(Mp.j.NormalKind, ip, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const pp = this._geometry,
          ip = this._geometry.copy(Ep.b.RandomId());
        return pp.releaseForMesh(this, !0), ip.applyToMesh(this), this
      }
      setIndexBuffer(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          op = this._geometry;
        op || (op = new Ep.b(Ep.b.RandomId(), this.Gl(), void 0, void 0, this)), op.setIndexBuffer(pp, ip, cp, Op)
      }
      setIndices(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(pp, ip, cp, Op);
        else {
          const Op = new Cp.d;
          Op.indices = pp;
          const op = this.Gl();
          new Ep.b(Ep.b.RandomId(), op, Op, cp, this, ip)
        }
        return this
      }
      updateIndices(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(pp, ip, cp), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(pp, ip, cp) {
        let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const op = this.Gl().gy();
        let Ip;
        if (this._unIndexed)
          if (this._getRenderingFillMode(cp) === Qp.b.WireFrameFillMode) Ip = pp._getLinesIndexBuffer(this.NOp(), op);
          else Ip = null;
        else switch (this._getRenderingFillMode(cp)) {
          case Qp.b.PointFillMode:
            Ip = null;
            break;
          case Qp.b.WireFrameFillMode:
            Ip = pp._getLinesIndexBuffer(this.NOp(), op);
            break;
          default:
          case Qp.b.TriangleFillMode:
            Ip = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(ip, Ip, Op)
      }
      _bindDirect(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(pp), cp && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const pp = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const ip in pp) this._userInstancedBuffersStorage.vertexBuffers[ip] = pp[ip]
          }
          this._geometry._bind(pp, ip, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(pp, ip);
        return this
      }
      _draw(pp, ip, cp) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Op = this.Gl().gy(),
          op = Op._currentMaterialContext,
          Ip = op && op.useVertexPulling;
        return this._unIndexed && ip !== Qp.b.WireFrameFillMode || ip == Qp.b.PointFillMode ? Op.drawArraysType(ip, pp.verticesStart, pp.verticesCount, this.forcedInstanceCount || cp) : ip == Qp.b.WireFrameFillMode ? Op.drawElementsType(ip, 0, pp._linesIndexCount, this.forcedInstanceCount || cp) : Ip ? Op.drawArraysType(ip, pp.indexStart, pp.indexCount, this.forcedInstanceCount || cp) : Op.drawElementsType(ip, pp.indexStart, pp.indexCount, this.forcedInstanceCount || cp), this
      }
      registerBeforeRender(pp) {
        return this.onBeforeRenderObservable.add(pp), this
      }
      unregisterBeforeRender(pp) {
        return this.onBeforeRenderObservable.removeCallback(pp), this
      }
      registerAfterRender(pp) {
        return this.onAfterRenderObservable.add(pp), this
      }
      unregisterAfterRender(pp) {
        return this.onAfterRenderObservable.removeCallback(pp), this
      }
      _getInstancesRenderList(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (ip) return cp.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[pp] = !1, cp.batchCacheReplacementModeInFrozenMode.renderSelf[pp] = !0, cp.batchCacheReplacementModeInFrozenMode;
          if (cp.previousBatch) return cp.previousBatch
        }
        const Op = this.Gl(),
          op = Op._isInIntermediateRendering(),
          Ip = op ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Sp = cp.batchCache;
        if (Sp.mustReturn = !1, Sp.renderSelf[pp] = ip || !Ip && this.isEnabled() && this.isVisible, Sp.visibleInstances[pp] = null, cp.visibleInstances && !ip) {
          const ip = cp.visibleInstances,
            Ip = Op.getRenderId(),
            xp = op ? ip.intermediateDefaultRenderId : ip.defaultRenderId;
          Sp.visibleInstances[pp] = ip[Ip], !Sp.visibleInstances[pp] && xp && (Sp.visibleInstances[pp] = ip[xp])
        }
        return Sp.hardwareInstancedRendering[pp] = !ip && this._instanceDataStorage.hardwareInstancedRendering && null !== Sp.visibleInstances[pp] && void 0 !== Sp.visibleInstances[pp], cp.previousBatch = Sp, Sp
      }
      _updateInstancedBuffers(pp, ip, cp, Op, op, Ip) {
        const Sp = ip.visibleInstances[pp._id],
          xp = Sp ? Sp.length : 0,
          Lp = ip.parent,
          Yp = this._instanceDataStorage;
        let Dp = Lp.instancesBuffer,
          Ap = Lp.instancesPreviousBuffer,
          Pp = 0,
          Wp = 0;
        const yp = ip.renderSelf[pp._id],
          Up = this._scene.floatingOriginOffset,
          wp = !Dp || cp !== Lp.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Lp.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Yp.isFrozen && !wp) Wp = (yp ? 1 : 0) + xp;
        else {
          const ip = this.getWorldMatrix();
          if (yp) {
            this._scene.needsPreviousWorldMatrices && (Yp.masterMeshPreviousWorldMatrix ? (Yp.masterMeshPreviousWorldMatrix.copyToArray(Lp.instancesPreviousData, Pp), Yp.masterMeshPreviousWorldMatrix.rM(ip)) : (Yp.masterMeshPreviousWorldMatrix = ip.clone(), Yp.masterMeshPreviousWorldMatrix.copyToArray(Lp.instancesPreviousData, Pp))), ip.copyToArray(Lp.instancesData, Pp);
            const pp = ip.BOp();
            Lp.instancesData[Pp + 12] = pp[12] - Up.x, Lp.instancesData[Pp + 13] = pp[13] - Up.y, Lp.instancesData[Pp + 14] = pp[14] - Up.z, Pp += 16, Wp++
          }
          if (Sp) {
            if (Kp.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && pp.Ky()?.needAlphaBlendingForMesh(pp.getRenderingMesh())) {
              const pp = this._scene.activeCamera.globalPosition;
              for (let ip = 0; ip < Sp.length; ip++) {
                const cp = Sp[ip];
                cp._distanceToCamera = mp.o.Distance(cp.bJ().Yop.centerWorld, pp)
              }
              Sp.sort(((pp, ip) => pp._distanceToCamera > ip._distanceToCamera ? -1 : pp._distanceToCamera < ip._distanceToCamera ? 1 : 0))
            }
            for (let pp = 0; pp < Sp.length; pp++) {
              const ip = Sp[pp],
                cp = ip.getWorldMatrix();
              cp.copyToArray(Lp.instancesData, Pp), this._scene.needsPreviousWorldMatrices && (ip._previousWorldMatrix ? (ip._previousWorldMatrix.copyToArray(Lp.instancesPreviousData, Pp), ip._previousWorldMatrix.rM(cp)) : (ip._previousWorldMatrix = cp.clone(), ip._previousWorldMatrix.copyToArray(Lp.instancesPreviousData, Pp)));
              const Op = cp.BOp();
              Lp.instancesData[Pp + 12] = Op[12] - Up.x, Lp.instancesData[Pp + 13] = Op[13] - Up.y, Lp.instancesData[Pp + 14] = Op[14] - Up.z, Pp += 16, Wp++
            }
          }
        }
        if (wp) {
          let pp;
          if (Dp && Dp.dispose(), Ap && Ap.dispose(), Dp = new Mp.b(Op, Lp.instancesData, !0, 16, !1, !0), Lp.instancesBuffer = Dp, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.gy().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) pp = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const ip = this._instanceDataStorage.engine.currentRenderPassId;
            pp = this._userInstancedBuffersStorage.renderPasses[ip], pp || (this._userInstancedBuffersStorage.renderPasses[ip] = pp = {})
          }
          pp.world0 = Dp.createVertexBuffer("world0", 0, 4), pp.world1 = Dp.createVertexBuffer("world1", 4, 4), pp.world2 = Dp.createVertexBuffer("world2", 8, 4), pp.world3 = Dp.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Ap = new Mp.b(Op, Lp.instancesPreviousData, !0, 16, !1, !0), Lp.instancesPreviousBuffer = Ap, pp.previousWorld0 = Ap.createVertexBuffer("previousWorld0", 0, 4), pp.previousWorld1 = Ap.createVertexBuffer("previousWorld1", 4, 4), pp.previousWorld2 = Ap.createVertexBuffer("previousWorld2", 8, 4), pp.previousWorld3 = Ap.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Dp.updateDirectly(Lp.instancesData, 0, Wp), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Ap.updateDirectly(Lp.instancesPreviousData, 0, Wp));
        this._processInstancedBuffers(Sp, yp), Ip && void 0 !== op && (this.Gl()._activeIndices.addCount(pp.indexCount * Wp, !1), Op._currentDrawContext && (Op._currentDrawContext.useInstancing = !0), this._bind(pp, Ip, op), this._draw(pp, op, Wp)), !this._scene.needsPreviousWorldMatrices || wp || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Ap.updateDirectly(Lp.instancesData, 0, Wp)
      }
      _renderWithInstances(pp, ip, cp, Op, op) {
        const Ip = cp.visibleInstances[pp._id],
          Sp = Ip ? Ip.length : 0,
          xp = cp.parent,
          Lp = xp.instancesBufferSize,
          Yp = 16 * (Sp + 1) * 4;
        for (; xp.instancesBufferSize < Yp;) xp.instancesBufferSize *= 2;
        return xp.instancesData && Lp == xp.instancesBufferSize || (xp.instancesData = new Float32Array(xp.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !xp.instancesPreviousData || Lp != xp.instancesBufferSize) && (xp.instancesPreviousData = new Float32Array(xp.instancesBufferSize / 4)), this._updateInstancedBuffers(pp, cp, Lp, op, ip, Op), op.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(pp, ip, cp, Op) {
        const op = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Gl()._activeIndices.addCount(pp.indexCount * op, !1), Op._currentDrawContext && (Op._currentDrawContext.useInstancing = !0), this._bind(pp, cp, ip), this._draw(pp, ip, op), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, op) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Op.unbindInstanceAttributes()
      }
      _processInstancedBuffers(pp, ip) {}
      _processRendering(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = this.Gl(),
          Yp = Lp.gy();
        if (Op = this._getRenderingFillMode(Op), Ip && ip.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(ip, Op, cp, Yp), this;
        if (Ip) this._renderWithInstances(ip, Op, op, cp, Yp);
        else {
          Yp._currentDrawContext && (Yp._currentDrawContext.useInstancing = !1);
          let cp = 0;
          op.renderSelf[ip._id] && (Sp && Sp(!1, pp.getWorldMatrix(), xp), cp++, this._draw(ip, Op, this._instanceDataStorage.overridenInstanceCount));
          const Ip = op.visibleInstances[ip._id];
          if (Ip) {
            const pp = Ip.length;
            cp += pp;
            for (let cp = 0; cp < pp; cp++) {
              const pp = Ip[cp].getWorldMatrix();
              Sp && Sp(!0, pp, xp), this._draw(ip, Op)
            }
          }
          Lp._activeIndices.addCount(ip.indexCount * cp, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        pp?.instancesBuffer && (ip && pp.instancesBuffer.dispose(), pp.instancesBuffer = null), pp?.instancesPreviousBuffer && (ip && pp.instancesPreviousBuffer.dispose(), pp.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ip in this._instanceDataStorage.renderPasses) {
          const cp = this._instanceDataStorage.renderPasses[ip];
          this._disposeInstanceDataStorageRenderPass(cp, pp)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, pp), this._userInstancedBuffersStorage) {
          for (const ip in this._userInstancedBuffersStorage.vertexBuffers) {
            const cp = this._userInstancedBuffersStorage.vertexBuffers[ip];
            cp && (pp && cp.dispose(), this._userInstancedBuffersStorage.vertexBuffers[ip] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(pp)
      }
      _releaseRenderPassId(pp) {
        const ip = this._instanceDataStorage.renderPasses[pp];
        if (ip && (this._disposeInstanceDataStorageRenderPass(ip, !0), delete this._instanceDataStorage.renderPasses[pp]), this._userInstancedBuffersStorage?.renderPasses) {
          const ip = this._userInstancedBuffersStorage.renderPasses[pp];
          if (ip)
            for (const pp in ip) ip[pp]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[pp]
        }
        const cp = this._userInstancedBuffersStorage?.interleavedBuffers;
        cp?.[pp] && (cp[pp].buffer.dispose(), delete cp[pp])
      }
      _freeze() {
        if (this.Am) {
          for (let pp = 0; pp < this.Am.length; pp++) this._getInstancesRenderList(pp);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const pp in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[pp].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Ip = this._scene.gy(),
          Sp = Ip.currentRenderPassId;
        if (void 0 !== pp && (Ip.currentRenderPassId = pp), Op)(!op || op && Op.isInFrustum(this._scene._frustumPlanes)) && this.render(Op, !!ip, cp);
        else
          for (let xp = 0; xp < this.Am.length; xp++) {
            const pp = this.Am[xp];
            (!op || op && pp.isInFrustum(this._scene._frustumPlanes)) && this.render(pp, !!ip, cp)
          }
        return void 0 !== pp && (Ip.currentRenderPassId = Sp), this
      }
      directRender() {
        if (!this.Am) return this;
        for (const pp of this.Am) this.render(pp, !1);
        return this
      }
      render(pp, ip, cp) {
        const Op = this.Gl(),
          op = Op.gy();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Ip = Op.activeCameras?.length ?? 0,
          Sp = Ip > 1 && Op.activeCamera === Op.activeCameras[0] || Ip <= 1,
          xp = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== op.currentRenderPassId;
        if (Sp && this._checkOcclusionQuery(xp) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Lp = this._getInstancesRenderList(pp._id, !!cp);
        if (Lp.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Yp = 0,
          Dp = null;
        this.ignoreCameraMaxZ && Op.activeCamera && !Op._isInIntermediateRendering() && (Yp = Op.activeCamera.maxZ, Dp = Op.activeCamera, Op.activeCamera.maxZ = 0, Op.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Ap = pp.getRenderingMesh(),
          Pp = Lp.hardwareInstancedRendering[pp._id] || Ap.hasThinInstances || !!this._userInstancedBuffersStorage && !pp.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Wp = this._instanceDataStorage,
          yp = pp.Ky();
        if (!yp) return Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), this;
        if (Wp.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === yp) {
          if (yp._storeEffectOnSubMeshes && !pp._drawWrapper?._wasPreviouslyReady || !yp._storeEffectOnSubMeshes && !yp._getDrawWrapper()._wasPreviouslyReady) return Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), this
        } else {
          if (yp._storeEffectOnSubMeshes) {
            if (!yp.isReadyForSubMesh(this, pp, Pp)) return Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), this
          } else if (!yp.isReady(this, Pp)) return Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = yp
        }
        if (ip) {
          const pp = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === pp.alphaModes.length) op.setAlphaMode(pp.alphaMode);
          else
            for (let ip = 0; ip < pp.alphaModes.length; ip++) {
              const cp = pp.alphaModes[ip];
              op.setAlphaMode(void 0 !== cp ? cp : 2, !1, ip)
            }
        }
        let Up;
        Up = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? pp._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const wp = Up?.effect ?? null;
        for (let kp = 0, mp = Op._beforeRenderingMeshStage; kp < mp.length; kp++) {
          mp[kp].action(this, pp, Lp, wp)
        }
        if (!Up || !wp) return Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), this;
        const vp = cp || this;
        let tp;
        if (!Wp.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const pp = vp._getWorldMatrixDeterminant();
          tp = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), pp < 0 && (tp = tp === Qp.b.ClockWiseSideOrientation ? Qp.b.CounterClockWiseSideOrientation : Qp.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = tp
        }
        const Hp = this._internalMeshDataInfo._effectiveMaterial._preBind(Up, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && op.setDepthWrite(!0);
        const dp = this._internalMeshDataInfo._effectiveMaterial,
          ep = dp.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Pp || this._bind(pp, wp, ep, !1);
        const jp = vp.getWorldMatrix();
        dp._storeEffectOnSubMeshes ? dp.bindForSubMesh(jp, this, pp) : dp.bind(jp, this);
        try {
          Jp.e._BindAttachmentsForEffect(op, wp) && (!dp.backFaceCulling && dp.separateCullingPass && (op.setState(!0, dp.zOffset, !1, !Hp, dp.cullBackFaces, dp.stencil, dp.zOffsetUnits), this._processRendering(this, pp, wp, ep, Lp, Pp, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), op.setState(!0, dp.zOffset, !1, Hp, dp.cullBackFaces, dp.stencil, dp.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(pp)), this._processRendering(this, pp, wp, ep, Lp, Pp, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Jp.e._RestoreAttachments(op)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let kp = 0, mp = Op._afterRenderingMeshStage; kp < mp.length; kp++) {
          mp[kp].action(this, pp, Lp, wp)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Dp && (Dp.maxZ = Yp, Op.updateTransformMatrix(!0)), 2 !== Op.performancePriority || Wp.isFrozen || this._freeze(), this
      }
      _renderRunFollower(pp, ip) {
        const cp = this._scene,
          Op = cp._engine;
        if (Op.isWebGPU || pp._mesh !== this || 0 !== this.instances.length || this.render !== Kp.prototype.render) return !1;
        const op = pp.Ky();
        if (!op || op !== cp._cachedMaterial || void 0 === op._canBindRunFollower) return !1;
        const Ip = pp._drawWrapper,
          Sp = Ip?.effect;
        if (!Sp || Sp !== cp._cachedEffect || this.visibility !== cp._cachedVisibility || Ip._forceRebindOnNextCall) return !1;
        const xp = this.hasThinInstances;
        if (!xp && this._userInstancedBuffersStorage) return !1;
        if (!Ip._wasPreviouslyReady || Ip._wasPreviouslyUsingInstances !== xp) return !1;
        const Lp = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || cp._isInIntermediateRendering() || 0 !== cp._beforeRenderingMeshStage.length || 0 !== cp._afterRenderingMeshStage.length || Lp._onBeforeRenderObservable?.hasObservers() || Lp._onBeforeBindObservable?.hasObservers() || Lp._onAfterRenderObservable?.hasObservers()) return !1;
        const Yp = this.occlusionType;
        if (void 0 !== Yp && Yp !== Xp.b.OCCLUSION_TYPE_NONE || !op._canBindRunFollower(cp, Op, this, pp, Sp)) return !1;
        const Dp = this._internalAbstractMeshDataInfo,
          Ap = Dp._isActiveIntermediate;
        Ap ? Dp._isActiveIntermediate = !1 : Dp._isActive = !1;
        const Pp = cp.activeCameras?.length ?? 0;
        (Pp > 1 && cp.activeCamera === cp.activeCameras[0] || Pp <= 1) && this._checkOcclusionQuery(!1);
        const Wp = this._getInstancesRenderList(pp._id);
        if (Wp.mustReturn) return !0;
        if (!xp && !Wp.renderSelf[pp._id]) return Ap ? Dp._isActiveIntermediate = !0 : Dp._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Lp._effectiveMaterial = op, ip)
          if (1 === op.alphaModes.length) Op.setAlphaMode(op.alphaMode);
          else
            for (let Up = 0; Up < op.alphaModes.length; Up++) {
              const pp = op.alphaModes[Up];
              Op.setAlphaMode(void 0 !== pp ? pp : 2, !1, Up)
            }
        if (op.backFaceCulling || null !== op.sideOrientation || op._twoSidedLighting) {
          const pp = this._getWorldMatrixDeterminant();
          let ip = op._getEffectiveOrientation(this);
          pp < 0 && (ip = ip === Qp.b.ClockWiseSideOrientation ? Qp.b.CounterClockWiseSideOrientation : Qp.b.ClockWiseSideOrientation), Lp._effectiveSideOrientation = ip
        }
        op._preBind(Ip, Lp._effectiveSideOrientation), op.forceDepthWrite && Op.setDepthWrite(!0);
        const yp = op.fillMode;
        return xp || this._bind(pp, Sp, yp, !1), op._bindRunFollower(this.getWorldMatrix(), this, pp, Sp), this._processRendering(this, pp, Sp, yp, Wp, xp, this._onBeforeDraw, op), op.unbind(), 2 === cp.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Mp.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Mp.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const pp = this.getVerticesData(Mp.j.MatricesWeightsKind),
          ip = pp.length;
        for (let cp = 0; cp < ip; cp += 4) {
          const ip = pp[cp] + pp[cp + 1] + pp[cp + 2] + pp[cp + 3];
          if (0 === ip) pp[cp] = 1;
          else {
            const Op = 1 / ip;
            pp[cp] *= Op, pp[cp + 1] *= Op, pp[cp + 2] *= Op, pp[cp + 3] *= Op
          }
        }
        this.setVerticesData(Mp.j.MatricesWeightsKind, pp)
      }
      _normalizeSkinWeightsAndExtra() {
        const pp = this.getVerticesData(Mp.j.MatricesWeightsExtraKind),
          ip = this.getVerticesData(Mp.j.MatricesWeightsKind),
          cp = ip.length;
        for (let Op = 0; Op < cp; Op += 4) {
          let cp = ip[Op] + ip[Op + 1] + ip[Op + 2] + ip[Op + 3];
          if (cp += pp[Op] + pp[Op + 1] + pp[Op + 2] + pp[Op + 3], 0 === cp) ip[Op] = 1;
          else {
            const op = 1 / cp;
            ip[Op] *= op, ip[Op + 1] *= op, ip[Op + 2] *= op, ip[Op + 3] *= op, pp[Op] *= op, pp[Op + 1] *= op, pp[Op + 2] *= op, pp[Op + 3] *= op
          }
        }
        this.setVerticesData(Mp.j.MatricesWeightsKind, ip), this.setVerticesData(Mp.j.MatricesWeightsKind, pp)
      }
      validateSkinning() {
        const pp = this.getVerticesData(Mp.j.MatricesWeightsExtraKind),
          ip = this.getVerticesData(Mp.j.MatricesWeightsKind);
        if (null === ip || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Yy: "not skinned"
        };
        const cp = ip.length;
        let Op = 0,
          op = 0,
          Ip = 0,
          Sp = 0;
        const xp = null === pp ? 4 : 8,
          Lp = [];
        for (let Wp = 0; Wp <= xp; Wp++) Lp[Wp] = 0;
        for (let Wp = 0; Wp < cp; Wp += 4) {
          let cp = ip[Wp],
            Yp = cp,
            Dp = 0 === Yp ? 0 : 1;
          for (let op = 1; op < xp; op++) {
            const Ip = op < 4 ? ip[Wp + op] : pp[Wp + op - 4];
            Ip > cp && Op++, 0 !== Ip && Dp++, Yp += Ip, cp = Ip
          }
          if (Lp[Dp]++, Dp > Ip && (Ip = Dp), 0 === Yp) op++;
          else {
            const cp = 1 / Yp;
            let Op = 0;
            for (let op = 0; op < xp; op++) Op += op < 4 ? Math.abs(ip[Wp + op] - ip[Wp + op] * cp) : Math.abs(pp[Wp + op - 4] - pp[Wp + op - 4] * cp);
            Op > .001 && Sp++
          }
        }
        const Yp = this.skeleton.bones.length,
          Dp = this.getVerticesData(Mp.j.MatricesIndicesKind),
          Ap = this.getVerticesData(Mp.j.MatricesIndicesExtraKind);
        let Pp = 0;
        for (let Wp = 0; Wp < cp; Wp += 4)
          for (let pp = 0; pp < xp; pp++) {
            const ip = pp < 4 ? Dp[Wp + pp] : Ap[Wp + pp - 4];
            (ip >= Yp || ip < 0) && Pp++
          }
        return {
          skinned: !0,
          valid: 0 === op && 0 === Sp && 0 === Pp,
          Yy: "Number of Weights = " + cp / 4 + "\nMaximum influences = " + Ip + "\nMissing Weights = " + op + "\nNot Sorted = " + Op + "\nNot Normalized = " + Sp + "\nWeightCounts = [" + Lp + "]\nNumber of bones = " + Yp + "\nBad Bone Indices = " + Pp
        }
      }
      _checkDelayState() {
        const pp = this.Gl();
        return this._geometry ? this._geometry.load(pp) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(pp)), this
      }
      _queueLoad(pp) {
        pp.addPendingData(this);
        const ip = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const cp = await pp._loadDelayedFileAsync(this.delayLoadingFile, ip, !0);
            cp instanceof ArrayBuffer ? this._delayLoadingFunction(cp, this) : this._delayLoadingFunction(JSON.parse(cp), this);
            for (const pp of this.instances) pp.refreshBoundingInfo(), pp._syncSubMeshes();
            this.delayLoadState = 1, pp.removePendingData(this)
          } catch (cp) {
            pp.removePendingData(this), pp.uR || fp.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${cp}`)
          }
        })(), this
      }
      isInFrustum(pp) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(pp) && (this._checkDelayState(), !0))
      }
      setMaterialById(pp) {
        const ip = this.Gl().materials;
        let cp;
        for (cp = ip.length - 1; cp > -1; cp--)
          if (ip[cp].id === pp) return this.material = ip[cp], this;
        const Op = this.Gl().multiMaterials;
        for (cp = Op.length - 1; cp > -1; cp--)
          if (Op[cp].id === pp) return this.material = Op[cp], this;
        return this
      }
      getAnimatables() {
        const pp = [];
        return this.material && pp.push(this.material), this.skeleton && pp.push(this.skeleton), pp
      }
      bakeTransformIntoVertices(pp) {
        if (!this.isVerticesDataPresent(Mp.j.PositionKind)) return this;
        const ip = this.Am.splice(0);
        this._resetPointsArrayCache();
        let cp = this.getVerticesData(Mp.j.PositionKind);
        const Op = mp.o.Zero();
        let op;
        for (op = 0; op < cp.length; op += 3) mp.o.TransformCoordinatesFromFloatsToRef(cp[op], cp[op + 1], cp[op + 2], pp, Op).toArray(cp, op);
        if (this.setVerticesData(Mp.j.PositionKind, cp, this.getVertexBuffer(Mp.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Mp.j.NormalKind)) {
          for (cp = this.getVerticesData(Mp.j.NormalKind), op = 0; op < cp.length; op += 3) mp.o.TransformNormalFromFloatsToRef(cp[op], cp[op + 1], cp[op + 2], pp, Op).normalize().toArray(cp, op);
          this.setVerticesData(Mp.j.NormalKind, cp, this.getVertexBuffer(Mp.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Mp.j.TangentKind)) {
          for (cp = this.getVerticesData(Mp.j.TangentKind), op = 0; op < cp.length; op += 4) mp.o.TransformNormalFromFloatsToRef(cp[op], cp[op + 1], cp[op + 2], pp, Op).normalize().toArray(cp, op);
          this.setVerticesData(Mp.j.TangentKind, cp, this.getVertexBuffer(Mp.j.TangentKind).isUpdatable())
        }
        return pp.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Am = ip, this
      }
      bakeCurrentTransformIntoVertices() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(pp), this
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (ip && void 0 === ip._addToSceneRootNodes) {
          const cp = ip;
          return sp.source = this, sp.doNotCloneChildren = cp.doNotCloneChildren, sp.clonePhysicsImpostor = cp.clonePhysicsImpostor, sp.cloneThinInstances = cp.cloneThinInstances, new Kp(pp, this.Gl(), sp)
        }
        return new Kp(pp, this.Gl(), ip, this, cp, Op)
      }
      dispose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const cp = this._internalMeshDataInfo;
        if (cp._onBeforeDrawObservable && cp._onBeforeDrawObservable.clear(), cp._onBeforeBindObservable && cp._onBeforeBindObservable.clear(), cp._onBeforeRenderObservable && cp._onBeforeRenderObservable.clear(), cp._onAfterRenderObservable && cp._onAfterRenderObservable.clear(), cp._onBetweenPassObservable && cp._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (cp.meshMap)
            for (const pp in cp.meshMap) {
              const ip = cp.meshMap[pp];
              ip && (ip._internalMeshDataInfo._source = null, cp.meshMap[pp] = void 0)
            }
          cp._source && cp._source._internalMeshDataInfo.meshMap && (cp._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const pp = this.Gl().meshes;
          for (const ip of pp) {
            const pp = ip;
            pp._internalMeshDataInfo && pp._internalMeshDataInfo._source && pp._internalMeshDataInfo._source === this && (pp._internalMeshDataInfo._source = null)
          }
        }
        cp._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(pp, ip)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(pp, ip, cp, Op, op, Ip) {
        let Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          xp = arguments.length > 7 ? arguments[7] : void 0;
        const Lp = this.Gl();
        return (0, Hp.p)(pp, (pp => {
          const xp = pp.width,
            Lp = pp.height,
            Yp = this.gy().createCanvas(xp, Lp).getContext("2d");
          Yp.drawImage(pp, 0, 0);
          const Dp = Yp.getImageData(0, 0, xp, Lp).data;
          this.applyDisplacementMapFromBuffer(Dp, xp, Lp, ip, cp, op, Ip, Sp), Op && Op(this)
        }), xp || (() => {}), Lp.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Mp.j.PositionKind) || !this.isVerticesDataPresent(Mp.j.NormalKind) || !this.isVerticesDataPresent(Mp.j.UVKind)) return fp.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Lp = this.getVerticesData(Mp.j.PositionKind, !0, !0),
          Yp = this.getVerticesData(Mp.j.NormalKind),
          Dp = this.getVerticesData(Mp.j.UVKind);
        let Ap = mp.o.Zero();
        const Pp = mp.o.Zero(),
          Wp = mp.l.Zero();
        Ip = Ip || mp.l.Zero(), Sp = Sp || new mp.l(1, 1);
        for (let yp = 0; yp < Lp.length; yp += 3) {
          mp.o.FromArrayToRef(Lp, yp, Ap), mp.o.FromArrayToRef(Yp, yp, Pp), mp.l.FromArrayToRef(Dp, yp / 3 * 2, Wp);
          const xp = 4 * ((Math.abs(Wp.x * Sp.x + Ip.x % 1) * (ip - 1) % ip | 0) + (Math.abs(Wp.y * Sp.y + Ip.y % 1) * (cp - 1) % cp | 0) * ip),
            Up = .3 * (pp[xp] / 255) + .59 * (pp[xp + 1] / 255) + .11 * (pp[xp + 2] / 255);
          Pp.normalize(), Pp.scaleInPlace(Op + (op - Op) * Up), Ap = Ap.add(Pp), Ap.toArray(Lp, yp)
        }
        return Cp.d.ComputeNormals(Lp, this.NOp(), Yp), xp ? (this.setVerticesData(Mp.j.PositionKind, Lp), this.setVerticesData(Mp.j.NormalKind, Yp), this.setVerticesData(Mp.j.UVKind, Dp)) : (this.updateVerticesData(Mp.j.PositionKind, Lp), this.updateVerticesData(Mp.j.NormalKind, Yp)), this
      }
      _getFlattenedNormals(pp, ip) {
        const cp = new Float32Array(3 * pp.length);
        let Op = 0;
        const op = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Ip = 0; Ip < pp.length; Ip += 3) {
          const Sp = mp.o.FromArray(ip, 3 * pp[Ip]),
            xp = mp.o.FromArray(ip, 3 * pp[Ip + 1]),
            Lp = mp.o.FromArray(ip, 3 * pp[Ip + 2]),
            Yp = Sp.subtract(xp),
            Dp = Lp.subtract(xp),
            Ap = mp.o.Normalize(mp.o.Cross(Yp, Dp));
          op && Ap.scaleInPlace(-1);
          for (let pp = 0; pp < 3; pp++) cp[Op++] = Ap.x, cp[Op++] = Ap.y, cp[Op++] = Ap.z
        }
        return cp
      }
      _convertToUnIndexedMesh() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = this.getVerticesDataKinds().filter((pp => !this.getVertexBuffer(pp)?.getIsInstanced())),
          cp = this.NOp(!1, !0),
          Op = {},
          op = (pp, ip) => {
            const Op = new Float32Array(cp.length * ip);
            let op = 0;
            for (let Ip = 0; Ip < cp.length; Ip++)
              for (let Sp = 0; Sp < ip; Sp++) Op[op++] = pp[cp[Ip] * ip + Sp];
            return Op
          },
          Ip = this.bJ(),
          Sp = this.geometry ? this.Am.slice(0) : [];
        for (const xp of ip) Op[xp] = this.getVerticesData(xp);
        for (const xp of ip) {
          const ip = this.getVertexBuffer(xp),
            Ip = ip.getSize();
          if (pp && xp === Mp.j.NormalKind) {
            const pp = this._getFlattenedNormals(cp, Op[Mp.j.PositionKind]);
            this.setVerticesData(Mp.j.NormalKind, pp, ip.isUpdatable(), Ip)
          } else this.setVerticesData(xp, op(Op[xp], Ip), ip.isUpdatable(), Ip)
        }
        if (this.morphTargetManager) {
          for (let ip = 0; ip < this.morphTargetManager.numTargets; ip++) {
            const Op = this.morphTargetManager.getTarget(ip),
              Ip = Op.getPositions();
            Op.uxp(op(Ip, 3));
            const Sp = Op.getNormals();
            Sp && Op.setNormals(pp ? this._getFlattenedNormals(cp, Ip) : op(Sp, 3));
            const xp = Op.getTangents();
            xp && Op.setTangents(op(xp, 3));
            const Lp = Op.getUVs();
            Lp && Op.setUVs(op(Lp, 2));
            const Yp = Op.getColors();
            Yp && Op.setColors(op(Yp, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let xp = 0; xp < cp.length; xp++) cp[xp] = xp;
        this.setIndices(cp), this._unIndexed = !0, this.releaseSubMeshes();
        for (const xp of Sp) {
          const pp = xp.bJ();
          lp.d.AddToMesh(xp.materialIndex, xp.indexStart, xp.indexCount, xp.indexStart, xp.indexCount, this).setBoundingInfo(pp)
        }
        return this.setBoundingInfo(Ip), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = Cp.d.ExtractFromMesh(this);
        let cp;
        if (pp && this.isVerticesDataPresent(Mp.j.NormalKind) && ip.normals) {
          for (cp = 0; cp < ip.normals.length; cp++) ip.normals[cp] *= -1;
          this.setVerticesData(Mp.j.NormalKind, ip.normals, this.isVertexBufferUpdatable(Mp.j.NormalKind))
        }
        if (ip.indices) {
          let pp;
          for (cp = 0; cp < ip.indices.length; cp += 3) pp = ip.indices[cp + 1], ip.indices[cp + 1] = ip.indices[cp + 2], ip.indices[cp + 2] = pp;
          this.setIndices(ip.indices, null, this.isVertexBufferUpdatable(Mp.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const ip = Cp.d.ExtractFromMesh(this),
          cp = ip.indices && !Array.isArray(ip.indices) && Array.from ? Array.from(ip.indices) : ip.indices,
          Op = ip.positions && !Array.isArray(ip.positions) && Array.from ? Array.from(ip.positions) : ip.positions,
          op = ip.uvs && !Array.isArray(ip.uvs) && Array.from ? Array.from(ip.uvs) : ip.uvs,
          Ip = ip.normals && !Array.isArray(ip.normals) && Array.from ? Array.from(ip.normals) : ip.normals;
        if (cp && Op) {
          ip.indices = cp, ip.positions = Op, op && (ip.uvs = op), Ip && (ip.normals = Ip);
          const Sp = pp + 1,
            xp = [];
          for (let pp = 0; pp < Sp + 1; pp++) xp[pp] = [];
          let Lp, Yp;
          const Dp = new mp.o(0, 0, 0),
            Ap = new mp.o(0, 0, 0),
            Pp = new mp.l(0, 0),
            Wp = [],
            yp = [],
            Up = [];
          let wp, vp, tp, Hp = Op.length;
          op && (vp = op.length), Ip && (tp = Ip.length);
          for (let pp = 0; pp < cp.length; pp += 3) {
            yp[0] = cp[pp], yp[1] = cp[pp + 1], yp[2] = cp[pp + 2];
            for (let pp = 0; pp < 3; pp++)
              if (Lp = yp[pp], Yp = yp[(pp + 1) % 3], void 0 === Up[Lp] && void 0 === Up[Yp] ? (Up[Lp] = [], Up[Yp] = []) : (void 0 === Up[Lp] && (Up[Lp] = []), void 0 === Up[Yp] && (Up[Yp] = [])), void 0 === Up[Lp][Yp] && void 0 === Up[Yp][Lp]) {
                Up[Lp][Yp] = [], Dp.x = (Op[3 * Yp] - Op[3 * Lp]) / Sp, Dp.y = (Op[3 * Yp + 1] - Op[3 * Lp + 1]) / Sp, Dp.z = (Op[3 * Yp + 2] - Op[3 * Lp + 2]) / Sp, Ip && (Ap.x = (Ip[3 * Yp] - Ip[3 * Lp]) / Sp, Ap.y = (Ip[3 * Yp + 1] - Ip[3 * Lp + 1]) / Sp, Ap.z = (Ip[3 * Yp + 2] - Ip[3 * Lp + 2]) / Sp), op && (Pp.x = (op[2 * Yp] - op[2 * Lp]) / Sp, Pp.y = (op[2 * Yp + 1] - op[2 * Lp + 1]) / Sp), Up[Lp][Yp].push(Lp);
                for (let pp = 1; pp < Sp; pp++) Up[Lp][Yp].push(Op.length / 3), Op[Hp++] = Op[3 * Lp] + pp * Dp.x, Op[Hp++] = Op[3 * Lp + 1] + pp * Dp.y, Op[Hp++] = Op[3 * Lp + 2] + pp * Dp.z, Ip && (Ip[tp++] = Ip[3 * Lp] + pp * Ap.x, Ip[tp++] = Ip[3 * Lp + 1] + pp * Ap.y, Ip[tp++] = Ip[3 * Lp + 2] + pp * Ap.z), op && (op[vp++] = op[2 * Lp] + pp * Pp.x, op[vp++] = op[2 * Lp + 1] + pp * Pp.y);
                Up[Lp][Yp].push(Yp), Up[Yp][Lp] = [], wp = Up[Lp][Yp].length;
                for (let pp = 0; pp < wp; pp++) Up[Yp][Lp][pp] = Up[Lp][Yp][wp - 1 - pp]
              } xp[0][0] = cp[pp], xp[1][0] = Up[cp[pp]][cp[pp + 1]][1], xp[1][1] = Up[cp[pp]][cp[pp + 2]][1];
            for (let ip = 2; ip < Sp; ip++) {
              xp[ip][0] = Up[cp[pp]][cp[pp + 1]][ip], xp[ip][ip] = Up[cp[pp]][cp[pp + 2]][ip], Dp.x = (Op[3 * xp[ip][ip]] - Op[3 * xp[ip][0]]) / ip, Dp.y = (Op[3 * xp[ip][ip] + 1] - Op[3 * xp[ip][0] + 1]) / ip, Dp.z = (Op[3 * xp[ip][ip] + 2] - Op[3 * xp[ip][0] + 2]) / ip, Ip && (Ap.x = (Ip[3 * xp[ip][ip]] - Ip[3 * xp[ip][0]]) / ip, Ap.y = (Ip[3 * xp[ip][ip] + 1] - Ip[3 * xp[ip][0] + 1]) / ip, Ap.z = (Ip[3 * xp[ip][ip] + 2] - Ip[3 * xp[ip][0] + 2]) / ip), op && (Pp.x = (op[2 * xp[ip][ip]] - op[2 * xp[ip][0]]) / ip, Pp.y = (op[2 * xp[ip][ip] + 1] - op[2 * xp[ip][0] + 1]) / ip);
              for (let pp = 1; pp < ip; pp++) xp[ip][pp] = Op.length / 3, Op[Hp++] = Op[3 * xp[ip][0]] + pp * Dp.x, Op[Hp++] = Op[3 * xp[ip][0] + 1] + pp * Dp.y, Op[Hp++] = Op[3 * xp[ip][0] + 2] + pp * Dp.z, Ip && (Ip[tp++] = Ip[3 * xp[ip][0]] + pp * Ap.x, Ip[tp++] = Ip[3 * xp[ip][0] + 1] + pp * Ap.y, Ip[tp++] = Ip[3 * xp[ip][0] + 2] + pp * Ap.z), op && (op[vp++] = op[2 * xp[ip][0]] + pp * Pp.x, op[vp++] = op[2 * xp[ip][0] + 1] + pp * Pp.y)
            }
            xp[Sp] = Up[cp[pp + 1]][cp[pp + 2]], Wp.push(xp[0][0], xp[1][0], xp[1][1]);
            for (let pp = 1; pp < Sp; pp++) {
              let ip;
              for (ip = 0; ip < pp; ip++) Wp.push(xp[pp][ip], xp[pp + 1][ip], xp[pp + 1][ip + 1]), Wp.push(xp[pp][ip], xp[pp + 1][ip + 1], xp[pp][ip + 1]);
              Wp.push(xp[pp][ip], xp[pp + 1][ip], xp[pp + 1][ip + 1])
            }
          }
          ip.indices = Wp, ip.applyToMesh(this, this.isVertexBufferUpdatable(Mp.j.PositionKind))
        } else fp.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const pp = Cp.d.ExtractFromMesh(this),
          ip = pp.uvs,
          cp = pp.indices,
          Op = pp.positions,
          op = pp.colors,
          Ip = pp.matricesIndices,
          Sp = pp.matricesWeights,
          xp = pp.matricesIndicesExtra,
          Lp = pp.matricesWeightsExtra;
        if (void 0 === cp || void 0 === Op || null === cp || null === Op) fp.e.Warn("VertexData contains empty entries");
        else {
          const Yp = [],
            Dp = [],
            Ap = [],
            Pp = [],
            Wp = [],
            yp = [],
            Up = [],
            wp = [];
          let vp, tp = 0;
          const Hp = {};
          let dp, ep;
          for (let pp = 0; pp < cp.length; pp += 3) {
            ep = [cp[pp], cp[pp + 1], cp[pp + 2]], vp = [];
            for (let pp = 0; pp < 3; pp++) {
              vp[pp] = "";
              for (let ip = 0; ip < 3; ip++) Math.abs(Op[3 * ep[pp] + ip]) < 1e-8 && (Op[3 * ep[pp] + ip] = 0), vp[pp] += Op[3 * ep[pp] + ip] + "|"
            }
            if (vp[0] != vp[1] && vp[0] != vp[2] && vp[1] != vp[2])
              for (let pp = 0; pp < 3; pp++) {
                if (dp = Hp[vp[pp]], void 0 === dp) {
                  Hp[vp[pp]] = tp, dp = tp++;
                  for (let ip = 0; ip < 3; ip++) Yp.push(Op[3 * ep[pp] + ip]);
                  if (null !== op && void 0 !== op)
                    for (let ip = 0; ip < 4; ip++) Pp.push(op[4 * ep[pp] + ip]);
                  if (null !== ip && void 0 !== ip)
                    for (let cp = 0; cp < 2; cp++) Ap.push(ip[2 * ep[pp] + cp]);
                  if (null !== Ip && void 0 !== Ip)
                    for (let ip = 0; ip < 4; ip++) Wp.push(Ip[4 * ep[pp] + ip]);
                  if (null !== Sp && void 0 !== Sp)
                    for (let ip = 0; ip < 4; ip++) yp.push(Sp[4 * ep[pp] + ip]);
                  if (null !== xp && void 0 !== xp)
                    for (let ip = 0; ip < 4; ip++) Up.push(xp[4 * ep[pp] + ip]);
                  if (null !== Lp && void 0 !== Lp)
                    for (let ip = 0; ip < 4; ip++) wp.push(Lp[4 * ep[pp] + ip])
                }
                Dp.push(dp)
              }
          }
          const jp = [];
          Cp.d.ComputeNormals(Yp, Dp, jp), pp.positions = Yp, pp.indices = Dp, pp.normals = jp, null !== ip && void 0 !== ip && (pp.uvs = Ap), null !== op && void 0 !== op && (pp.colors = Pp), null !== Ip && void 0 !== Ip && (pp.matricesIndices = Wp), null !== Sp && void 0 !== Sp && (pp.matricesWeights = yp), null !== xp && void 0 !== xp && (pp.matricesIndicesExtra = Up), null !== Sp && void 0 !== Sp && (pp.matricesWeightsExtra = wp), pp.applyToMesh(this, this.isVertexBufferUpdatable(Mp.j.PositionKind))
        }
      }
      static _instancedMeshFactory(pp, ip) {
        throw (0, hp.o)("InstancedMesh")
      }
      static _PhysicsImpostorParser(pp, ip, cp) {
        throw (0, hp.o)("PhysicsImpostor")
      }
      createInstance(pp) {
        const ip = Kp._instancedMeshFactory(pp, this);
        return ip.parent = this.parent, ip
      }
      synchronizeInstances() {
        for (let pp = 0; pp < this.instances.length; pp++) {
          this.instances[pp]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(pp) {
        const ip = this.NOp(),
          cp = this.getVerticesData(Mp.j.PositionKind);
        if (!cp || !ip) return this;
        const Op = [];
        for (let Ip = 0; Ip < cp.length; Ip += 3) Op.push(mp.o.FromArray(cp, Ip));
        const op = [];
        return tp.c.SyncAsyncForLoop(Op.length, 40, (pp => {
          const ip = Op.length - 1 - pp,
            cp = Op[ip];
          for (let Ip = 0; Ip < ip; ++Ip) {
            const pp = Op[Ip];
            if (cp.equals(pp)) {
              op[ip] = Ip;
              break
            }
          }
        }), (() => {
          for (let pp = 0; pp < ip.length; ++pp) ip[pp] = op[ip[pp]] || ip[pp];
          const cp = this.Am.slice(0);
          this.setIndices(ip), this.Am = cp, pp && pp(this)
        })), this
      }
      serialize() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        pp.name = this.name, pp.id = this.id, pp.uniqueId = this.uniqueId, pp.type = this.getClassName(), ep.b && ep.b.HasTags(this) && (pp.tags = ep.b.GetTags(this)), pp.position = this.position.BOp(), this.rotationQuaternion ? pp.rotationQuaternion = this.rotationQuaternion.BOp() : this.rotation && (pp.rotation = this.rotation.BOp()), pp.ei = this.ei.BOp(), this._postMultiplyPivotMatrix ? pp.pivotMatrix = this.getPivotMatrix().BOp() : pp.localMatrix = this.getPivotMatrix().BOp(), pp.isEnabled = this.isEnabled(!1), pp.isVisible = this.isVisible, pp.infiniteDistance = this.infiniteDistance, pp.pickable = this.Ow, pp.receiveShadows = this.receiveShadows, pp.billboardMode = this.billboardMode, pp.visibility = this.visibility, pp.Gy = this.Gy, pp.checkCollisions = this.checkCollisions, pp.ellipsoid = this.ellipsoid.BOp(), pp.ellipsoidOffset = this.ellipsoidOffset.BOp(), pp.sy = this.sy, pp.isBlocker = this.isBlocker, pp.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (pp.iJ = !0), this.parent && this.parent._serializeAsParent(pp), pp.isUnIndexed = this.isUnIndexed;
        const ip = this._geometry;
        if (ip && this.Am) {
          pp.geometryUniqueId = ip.uniqueId, pp.geometryId = ip.id, pp.Am = [];
          for (let ip = 0; ip < this.Am.length; ip++) {
            const cp = this.Am[ip];
            pp.Am.push({
              materialIndex: cp.materialIndex,
              verticesStart: cp.verticesStart,
              verticesCount: cp.verticesCount,
              indexStart: cp.indexStart,
              indexCount: cp.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (pp.materialUniqueId = this.material.uniqueId, pp.materialId = this.material.id) : (this.material = null, pp.materialUniqueId = this._scene.defaultMaterial.uniqueId, pp.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (pp.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (pp.skeletonId = this.skeleton.id, pp.skeletonUniqueId = this.skeleton.uniqueId, pp.numBoneInfluencers = this.numBoneInfluencers), this.Gl()._getComponent(ap.e.NAME_PHYSICSENGINE)) {
          const ip = this.getPhysicsImpostor?.();
          ip && (pp.physicsMass = ip.getParam("Gx"), pp.physicsFriction = ip.getParam("friction"), pp.physicsRestitution = ip.getParam("Gx"), pp.physicsImpostor = ip.type)
        }
        this.metadata && (pp.metadata = this.metadata), 0 !== this.meshBlendingTag && (pp.meshBlendingTag = this.meshBlendingTag), pp.instances = [];
        for (let cp = 0; cp < this.instances.length; cp++) {
          const ip = this.instances[cp];
          if (ip.doNotSerialize) continue;
          const Op = {
            name: ip.name,
            id: ip.id,
            isEnabled: ip.isEnabled(!1),
            isVisible: ip.isVisible,
            Ow: ip.Ow,
            checkCollisions: ip.checkCollisions,
            position: ip.position.BOp(),
            ei: ip.ei.BOp()
          };
          if (ip.parent && ip.parent._serializeAsParent(Op), ip.rotationQuaternion ? Op.rotationQuaternion = ip.rotationQuaternion.BOp() : ip.rotation && (Op.rotation = ip.rotation.BOp()), this.Gl()._getComponent(ap.e.NAME_PHYSICSENGINE)) {
            const pp = ip.getPhysicsImpostor?.();
            pp && (Op.physicsMass = pp.getParam("Gx"), Op.physicsFriction = pp.getParam("friction"), Op.physicsRestitution = pp.getParam("Gx"), Op.physicsImpostor = pp.type)
          }
          ip.metadata && (Op.metadata = ip.metadata), ip.actionManager && (Op.actions = ip.actionManager.serialize(ip.name)), pp.instances.push(Op), Tp.c.AppendSerializedAnimations(ip, Op), Op.By = ip.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (pp.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Fip
          }, this._userThinInstanceBuffersStorage)) {
          const ip = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const pp in this._userThinInstanceBuffersStorage.data) ip.data[pp] = Array.from(this._userThinInstanceBuffersStorage.data[pp]), ip.sizes[pp] = this._userThinInstanceBuffersStorage.sizes[pp], ip.strides[pp] = this._userThinInstanceBuffersStorage.strides[pp];
          pp.thinInstances.userThinInstance = ip
        }
        return Tp.c.AppendSerializedAnimations(this, pp), pp.By = this.serializeAnimationRanges(), pp.layerMask = this.layerMask, pp.alphaIndex = this.alphaIndex, pp.hasVertexAlpha = this.hasVertexAlpha, pp.overlayAlpha = this.overlayAlpha, pp.overlayColor = this.overlayColor.BOp(), pp.renderOverlay = this.renderOverlay, pp.applyFog = this.applyFog, this.actionManager && (pp.actions = this.actionManager.serialize(this.name)), pp
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const pp = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (pp && pp.vertexCount) {
          if (pp.vertexCount !== this.getTotalVertices()) return fp.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (pp.isUsingTextureForTargets) return;
          for (let ip = 0; ip < pp.numInfluencers; ip++) {
            const cp = pp.getActiveTarget(ip),
              Op = cp.getPositions();
            if (!Op) return void fp.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Mp.j.PositionKind + ip, Op, !1, 3);
            const op = cp.getNormals();
            op && this.geometry.setVerticesData(Mp.j.NormalKind + ip, op, !1, 3);
            const Ip = cp.getTangents();
            Ip && this.geometry.setVerticesData(Mp.j.TangentKind + ip, Ip, !1, 3);
            const Sp = cp.getUVs();
            Sp && this.geometry.setVerticesData(Mp.j.UVKind + "_" + ip, Sp, !1, 2);
            const xp = cp.getUV2s();
            xp && this.geometry.setVerticesData(Mp.j.UV2Kind + "_" + ip, xp, !1, 2);
            const Lp = cp.getColors();
            Lp && this.geometry.setVerticesData(Mp.j.ColorKind + ip, Lp, !1, 4)
          }
        } else {
          let pp = 0;
          for (; this.geometry.isVerticesDataPresent(Mp.j.PositionKind + pp);) this.geometry.removeVerticesData(Mp.j.PositionKind + pp), this.geometry.isVerticesDataPresent(Mp.j.NormalKind + pp) && this.geometry.removeVerticesData(Mp.j.NormalKind + pp), this.geometry.isVerticesDataPresent(Mp.j.TangentKind + pp) && this.geometry.removeVerticesData(Mp.j.TangentKind + pp), this.geometry.isVerticesDataPresent(Mp.j.UVKind + "_" + pp) && this.geometry.removeVerticesData(Mp.j.UVKind + "_" + pp), this.geometry.isVerticesDataPresent(Mp.j.UV2Kind + "_" + pp) && this.geometry.removeVerticesData(Mp.j.UV2Kind + "_" + pp), this.geometry.isVerticesDataPresent(Mp.j.ColorKind + pp) && this.geometry.removeVerticesData(Mp.j.ColorKind + pp), pp++
        }
      }
      static Parse(pp, ip, cp) {
        let Op, op = !1;
        if (pp.type && "LinesMesh" === pp.type ? Op = Kp._LinesMeshParser(pp, ip) : pp.type && "GroundMesh" === pp.type ? Op = Kp._GroundMeshParser(pp, ip) : pp.type && "GoldbergMesh" === pp.type ? Op = Kp._GoldbergMeshParser(pp, ip) : pp.type && "GreasedLineMesh" === pp.type ? Op = Kp._GreasedLineMeshParser(pp, ip) : pp.type && "TrailMesh" === pp.type ? Op = Kp._TrailMeshParser(pp, ip) : pp.type && "GaussianSplattingMesh" === pp.type ? (Op = pp._isCompound ? Kp._GaussianSplattingCompoundMeshParser(pp, ip) : Kp._GaussianSplattingMeshParser(pp, ip), op = !0) : pp.type && "GaussianSplattingPartProxyMesh" === pp.type ? (Op = Kp._GaussianSplattingPartProxyMeshParser(pp, ip), op = !0) : Op = new Kp(pp.name, ip), Op.id = pp.id, Op._waitingParsedUniqueId = pp.uniqueId, ep.b && ep.b.AddTagsTo(Op, pp.tags), Op.position = mp.o.FromArray(pp.position), void 0 !== pp.metadata && (Op.metadata = pp.metadata), void 0 !== pp.meshBlendingTag && (Op.meshBlendingTag = pp.meshBlendingTag), pp.rotationQuaternion ? Op.rotationQuaternion = mp.f.FromArray(pp.rotationQuaternion) : pp.rotation && (Op.rotation = mp.o.FromArray(pp.rotation)), Op.ei = mp.o.FromArray(pp.ei), pp.localMatrix ? Op.setPreTransformMatrix(mp.b.FromArray(pp.localMatrix)) : pp.pivotMatrix && Op.setPivotMatrix(mp.b.FromArray(pp.pivotMatrix)), Op.eC(pp.isEnabled), Op.isVisible = pp.isVisible, Op.infiniteDistance = pp.infiniteDistance, Op.Gy = !!pp.Gy, Op.showBoundingBox = pp.showBoundingBox, Op.showSubMeshesBoundingBox = pp.showSubMeshesBoundingBox, void 0 !== pp.applyFog && (Op.applyFog = pp.applyFog), void 0 !== pp.pickable && (Op.Ow = pp.pickable), void 0 !== pp.alphaIndex && (Op.alphaIndex = pp.alphaIndex), Op.receiveShadows = pp.receiveShadows, void 0 !== pp.billboardMode && (Op.billboardMode = pp.billboardMode), void 0 !== pp.visibility && (Op.visibility = pp.visibility), Op.checkCollisions = pp.checkCollisions, Op.sy = !!pp.sy, pp.ellipsoid && (Op.ellipsoid = mp.o.FromArray(pp.ellipsoid)), pp.ellipsoidOffset && (Op.ellipsoidOffset = mp.o.FromArray(pp.ellipsoidOffset)), null != pp.overrideMaterialSideOrientation && (Op.sideOrientation = pp.overrideMaterialSideOrientation), void 0 !== pp.sideOrientation && (Op.sideOrientation = pp.sideOrientation), void 0 !== pp.isBlocker && (Op.isBlocker = pp.isBlocker), Op._shouldGenerateFlatShading = pp.useFlatShading, pp.iJ && (Op._waitingData.iJ = pp.iJ), void 0 !== pp.parentId && (Op._waitingParentId = pp.parentId), void 0 !== pp.parentInstanceIndex && (Op._waitingParentInstanceIndex = pp.parentInstanceIndex), void 0 !== pp.actions && (Op._waitingData.actions = pp.actions), void 0 !== pp.overlayAlpha && (Op.overlayAlpha = pp.overlayAlpha), void 0 !== pp.overlayColor && (Op.overlayColor = Rp.d.FromArray(pp.overlayColor)), void 0 !== pp.renderOverlay && (Op.renderOverlay = pp.renderOverlay), Op.isUnIndexed = !!pp.isUnIndexed, Op.hasVertexAlpha = pp.hasVertexAlpha, pp.delayLoadingFile ? (Op.delayLoadState = 4, Op.delayLoadingFile = cp + pp.delayLoadingFile, Op.buildBoundingInfo(mp.o.FromArray(pp.boundingBoxMinimum), mp.o.FromArray(pp.boundingBoxMaximum)), pp._binaryInfo && (Op._binaryInfo = pp._binaryInfo), Op._delayInfo = [], pp.hasUVs && Op._delayInfo.push(Mp.j.UVKind), pp.hasUVs2 && Op._delayInfo.push(Mp.j.UV2Kind), pp.hasUVs3 && Op._delayInfo.push(Mp.j.UV3Kind), pp.hasUVs4 && Op._delayInfo.push(Mp.j.UV4Kind), pp.hasUVs5 && Op._delayInfo.push(Mp.j.UV5Kind), pp.hasUVs6 && Op._delayInfo.push(Mp.j.UV6Kind), pp.hasColors && Op._delayInfo.push(Mp.j.ColorKind), pp.hasMatricesIndices && Op._delayInfo.push(Mp.j.MatricesIndicesKind), pp.hasMatricesWeights && Op._delayInfo.push(Mp.j.MatricesWeightsKind), Op._delayLoadingFunction = Ep.b._ImportGeometry, Np.d.ForceFullSceneLoadingForIncremental && Op._checkDelayState()) : op || Ep.b._ImportGeometry(pp, Op), pp.materialUniqueId ? Op._waitingMaterialId = pp.materialUniqueId : pp.materialId && (Op._waitingMaterialId = pp.materialId), pp.morphTargetManagerId > -1 && (Op._waitingMorphTargetManagerId = pp.morphTargetManagerId), void 0 !== pp.skeletonId && null !== pp.skeletonId && (Op.skeleton = ip.getLastSkeletonById(pp.skeletonId), Op._waitingSkeletonId = pp.skeletonId, pp.numBoneInfluencers && (Op.numBoneInfluencers = pp.numBoneInfluencers)), void 0 !== pp.skeletonUniqueId && null !== pp.skeletonUniqueId && (Op._waitingSkeletonUniqueId = pp.skeletonUniqueId), pp.animations) {
          for (let ip = 0; ip < pp.animations.length; ip++) {
            const cp = pp.animations[ip],
              op = (0, bp.d)("BABYLON.Animation");
            op && Op.animations.push(op.Parse(cp))
          }
          qp.b.ParseAnimationRanges(Op, pp, ip)
        }
        if (pp.autoAnimate && ip.beginAnimation(Op, pp.autoAnimateFrom, pp.autoAnimateTo, pp.autoAnimateLoop, pp.autoAnimateSpeed || 1), pp.layerMask && !isNaN(pp.layerMask) ? Op.layerMask = Math.abs(parseInt(pp.layerMask)) : Op.layerMask = 268435455, pp.physicsImpostor && (Op.physicsImpostor = Kp._PhysicsImpostorParser(ip, Op, pp)), pp.lodMeshIds && (Op._waitingData.lods = {
            ids: pp.lodMeshIds,
            distances: pp.lodDistances ? pp.lodDistances : null,
            coverages: pp.lodCoverages ? pp.lodCoverages : null
          }), pp.instances)
          for (let Ip = 0; Ip < pp.instances.length; Ip++) {
            const cp = pp.instances[Ip],
              op = Op.createInstance(cp.name);
            if (cp.id && (op.id = cp.id), ep.b && (cp.tags ? ep.b.AddTagsTo(op, cp.tags) : ep.b.AddTagsTo(op, pp.tags)), op.position = mp.o.FromArray(cp.position), void 0 !== cp.metadata && (op.metadata = cp.metadata), void 0 !== cp.parentId && (op._waitingParentId = cp.parentId), void 0 !== cp.parentInstanceIndex && (op._waitingParentInstanceIndex = cp.parentInstanceIndex), void 0 !== cp.isEnabled && null !== cp.isEnabled && op.eC(cp.isEnabled), void 0 !== cp.isVisible && null !== cp.isVisible && (op.isVisible = cp.isVisible), void 0 !== cp.Ow && null !== cp.Ow && (op.Ow = cp.Ow), cp.rotationQuaternion ? op.rotationQuaternion = mp.f.FromArray(cp.rotationQuaternion) : cp.rotation && (op.rotation = mp.o.FromArray(cp.rotation)), op.ei = mp.o.FromArray(cp.ei), void 0 != cp.checkCollisions && null != cp.checkCollisions && (op.checkCollisions = cp.checkCollisions), void 0 != cp.pickable && null != cp.pickable && (op.Ow = cp.pickable), void 0 != cp.showBoundingBox && null != cp.showBoundingBox && (op.showBoundingBox = cp.showBoundingBox), void 0 != cp.showSubMeshesBoundingBox && null != cp.showSubMeshesBoundingBox && (op.showSubMeshesBoundingBox = cp.showSubMeshesBoundingBox), void 0 != cp.alphaIndex && null != cp.showSubMeshesBoundingBox && (op.alphaIndex = cp.alphaIndex), cp.physicsImpostor && (op.physicsImpostor = Kp._PhysicsImpostorParser(ip, op, cp)), void 0 !== cp.actions && (op._waitingData.actions = cp.actions), cp.animations) {
              for (let pp = 0; pp < cp.animations.length; pp++) {
                const ip = cp.animations[pp],
                  Op = (0, bp.d)("BABYLON.Animation");
                Op && op.animations.push(Op.Parse(ip))
              }
              qp.b.ParseAnimationRanges(op, cp, ip), cp.autoAnimate && ip.beginAnimation(op, cp.autoAnimateFrom, cp.autoAnimateTo, cp.autoAnimateLoop, cp.autoAnimateSpeed || 1)
            }
          }
        if (pp.thinInstances) {
          const ip = pp.thinInstances;
          if (Op.Fip = !!ip.enablePicking, ip.matrixData ? (Op.I9("matrix", new Float32Array(ip.matrixData), 16, !1), Op._thinInstanceDataStorage.matrixBufferSize = ip.matrixBufferSize, Op._thinInstanceDataStorage.instancesCount = ip.instancesCount) : Op._thinInstanceDataStorage.matrixBufferSize = ip.matrixBufferSize, pp.thinInstances.userThinInstance) {
            const ip = pp.thinInstances.userThinInstance;
            for (const pp in ip.data) Op.I9(pp, new Float32Array(ip.data[pp]), ip.strides[pp], !1), Op._userThinInstanceBuffersStorage.sizes[pp] = ip.sizes[pp]
          }
        }
        return Op
      }
      setPositionsForCPUSkinning() {
        const pp = this._internalMeshDataInfo;
        if (!pp._sourcePositions) {
          const ip = this.getVerticesData(Mp.j.PositionKind);
          if (!ip) return pp._sourcePositions;
          pp._sourcePositions = new Float32Array(ip), this.isVertexBufferUpdatable(Mp.j.PositionKind) || this.setVerticesData(Mp.j.PositionKind, ip, !0)
        }
        return pp._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const pp = this._internalMeshDataInfo;
        if (!pp._sourceNormals) {
          const ip = this.getVerticesData(Mp.j.NormalKind);
          if (!ip) return pp._sourceNormals;
          pp._sourceNormals = new Float32Array(ip), this.isVertexBufferUpdatable(Mp.j.NormalKind) || this.setVerticesData(Mp.j.NormalKind, ip, !0)
        }
        return pp._sourceNormals
      }
      applySkeleton(pp) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Gl().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Gl().getFrameId(), !this.isVerticesDataPresent(Mp.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Mp.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Mp.j.MatricesWeightsKind)) return this;
        const ip = this.isVerticesDataPresent(Mp.j.NormalKind),
          cp = this._internalMeshDataInfo;
        if (!cp._sourcePositions) {
          const pp = this.Am.slice();
          this.setPositionsForCPUSkinning(), this.Am = pp
        }
        ip && !cp._sourceNormals && this.setNormalsForCPUSkinning();
        let Op = this.getVerticesData(Mp.j.PositionKind);
        if (!Op) return this;
        Op instanceof Float32Array || (Op = new Float32Array(Op));
        let op = this.getVerticesData(Mp.j.NormalKind);
        if (ip) {
          if (!op) return this;
          op instanceof Float32Array || (op = new Float32Array(op))
        }
        const Ip = this.getVerticesData(Mp.j.MatricesIndicesKind),
          Sp = this.getVerticesData(Mp.j.MatricesWeightsKind);
        if (!Sp || !Ip) return this;
        const xp = this.numBoneInfluencers > 4,
          Lp = xp ? this.getVerticesData(Mp.j.MatricesIndicesExtraKind) : null,
          Yp = xp ? this.getVerticesData(Mp.j.MatricesWeightsExtraKind) : null,
          Dp = pp.getTransformMatrices(this),
          Ap = mp.o.Zero(),
          Pp = new mp.b,
          Wp = new mp.b;
        let yp, Up = 0;
        for (let wp = 0; wp < Op.length; wp += 3, Up += 4) {
          let pp;
          for (yp = 0; yp < 4; yp++) pp = Sp[Up + yp], pp > 0 && (mp.b.FromFloat32ArrayToRefScaled(Dp, Math.floor(16 * Ip[Up + yp]), pp, Wp), Pp.addToSelf(Wp));
          if (xp)
            for (yp = 0; yp < 4; yp++) pp = Yp[Up + yp], pp > 0 && (mp.b.FromFloat32ArrayToRefScaled(Dp, Math.floor(16 * Lp[Up + yp]), pp, Wp), Pp.addToSelf(Wp));
          mp.o.TransformCoordinatesFromFloatsToRef(cp._sourcePositions[wp], cp._sourcePositions[wp + 1], cp._sourcePositions[wp + 2], Pp, Ap), Ap.toArray(Op, wp), ip && (mp.o.TransformNormalFromFloatsToRef(cp._sourceNormals[wp], cp._sourceNormals[wp + 1], cp._sourceNormals[wp + 2], Pp, Ap), Ap.toArray(op, wp)), Pp.reset()
        }
        return this.updateVerticesData(Mp.j.PositionKind, Op), ip && this.updateVerticesData(Mp.j.NormalKind, op), this
      }
      static MinMax(pp) {
        let ip = null,
          cp = null;
        for (const Op of pp) {
          const pp = Op.bJ().boundingBox;
          ip && cp ? (ip.minimizeInPlace(pp.minimumWorld), cp.maximizeInPlace(pp.maximumWorld)) : (ip = pp.minimumWorld.clone(), cp = pp.maximumWorld.clone())
        }
        return ip && cp ? {
          min: ip,
          max: cp
        } : {
          min: mp.o.Zero(),
          max: mp.o.Zero()
        }
      }
      static Center(pp) {
        const ip = pp instanceof Array ? Kp.MinMax(pp) : pp;
        return mp.o.Center(ip.min, ip.max)
      }
      static MergeMeshes(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        return (0, jp.g)(Kp._MergeMeshesCoroutine(pp, ip, cp, Op, op, Ip, !1))
      }
      static async MergeMeshesAsync(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, jp.e)(Kp._MergeMeshesCoroutine(pp, ip, cp, Op, op, Ip, !0), (0, jp.c)())
      }
      static * _MergeMeshesCoroutine(pp) {
        let ip, cp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Op = arguments.length > 2 ? arguments[2] : void 0,
          op = arguments.length > 3 ? arguments[3] : void 0,
          Ip = arguments.length > 4 ? arguments[4] : void 0,
          Sp = arguments.length > 5 ? arguments[5] : void 0,
          xp = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (pp = pp.filter(Boolean)).length) return null;
        if (!Op) {
          let cp = 0;
          for (ip = 0; ip < pp.length; ip++)
            if (cp += pp[ip].getTotalVertices(), cp >= 65536) return fp.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Lp = pp[0];
        Sp && (Ip = !1, pp.sort(((pp, ip) => (pp.material?.uniqueId ?? -1) - (ip.material?.uniqueId ?? -1))));
        const Yp = new Array,
          Dp = new Array,
          Ap = new Array,
          Pp = pp[0].sideOrientation;
        for (ip = 0; ip < pp.length; ip++) {
          const cp = pp[ip];
          if (cp.Vl) return fp.e.Warn("Cannot merge instance meshes."), null;
          if (Pp !== cp.sideOrientation) return fp.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Ip || Sp) {
            const pp = Ap.reduce(((pp, ip) => Math.max(pp, ip.start + ip.count)), 0);
            if (Sp)
              if (cp.material) {
                const ip = cp.material;
                if (ip instanceof Bp.b) {
                  for (let pp = 0; pp < ip.u9.length; pp++) Yp.indexOf(ip.u9[pp]) < 0 && Yp.push(ip.u9[pp]);
                  for (let Op = 0; Op < cp.Am.length; Op++) Dp.push(Yp.indexOf(ip.u9[cp.Am[Op].materialIndex])), Ap.push({
                    start: pp + cp.Am[Op].indexStart,
                    count: cp.Am[Op].indexCount
                  })
                } else {
                  Yp.indexOf(ip) < 0 && Yp.push(ip);
                  for (let Op = 0; Op < cp.Am.length; Op++) Dp.push(Yp.indexOf(ip)), Ap.push({
                    start: pp + cp.Am[Op].indexStart,
                    count: cp.Am[Op].indexCount
                  })
                }
              } else
                for (let ip = 0; ip < cp.Am.length; ip++) Dp.push(0), Ap.push({
                  start: pp + cp.Am[ip].indexStart,
                  count: cp.Am[ip].indexCount
                });
            else Ap.push({
              start: pp,
              count: cp.getTotalIndices()
            })
          }
        }
        if (Sp && Ap.length > 1) {
          let pp = 0;
          for (let ip = 1; ip < Ap.length; ip++) {
            const cp = Ap[pp],
              Op = Ap[ip];
            Dp[ip] === Dp[pp] && cp.start + cp.count === Op.start ? cp.count += Op.count : (pp++, Ap[pp] = Op, Dp[pp] = Dp[ip])
          }
          Ap.length = pp + 1, Dp.length = pp + 1
        }
        const Wp = pp => {
            const ip = pp.computeWorldMatrix(!0);
            return {
              vertexData: Cp.d.ExtractFromMesh(pp, !1, !1),
              transform: ip
            }
          },
          {
            vertexData: yp,
            transform: Up
          } = Wp(pp[0]);
        xp && (yield);
        const wp = new Array(pp.length - 1);
        for (let jp = 1; jp < pp.length; jp++) wp[jp - 1] = Wp(pp[jp]), xp && (yield);
        const vp = yp._mergeCoroutine(Up, wp, Op, xp, !cp);
        let tp = vp.next();
        for (; !tp.done;) xp && (yield), tp = vp.next();
        const Hp = tp.value;
        op || (op = new Kp(Lp.name + "_merged", Lp.Gl()));
        const dp = Hp._applyToCoroutine(op, void 0, xp);
        let ep = dp.next();
        for (; !ep.done;) xp && (yield), ep = dp.next();
        if (op.checkCollisions = Lp.checkCollisions, op.sideOrientation = Lp.sideOrientation, cp)
          for (ip = 0; ip < pp.length; ip++) pp[ip].dispose();
        if (Ip || Sp) {
          for (op.releaseSubMeshes(), ip = 0; ip < Ap.length;) lp.d.CreateFromIndices(0, Ap[ip].start, Ap[ip].count, op, void 0, !1), ip++;
          for (const pp of op.Am) pp.refreshBoundingInfo();
          op.computeWorldMatrix(!0)
        }
        if (Sp) {
          const pp = new Bp.b(Lp.name + "_merged", Lp.Gl());
          pp.u9 = Yp;
          for (let ip = 0; ip < op.Am.length; ip++) op.Am[ip].materialIndex = Dp[ip];
          op.material = pp
        } else op.material = Lp.material;
        return op
      }
      F_(pp) {
        pp._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(pp)
      }
      o3(pp) {
        const ip = pp._indexInSourceMeshInstanceArray;
        if (-1 != ip) {
          if (ip !== this.instances.length - 1) {
            const pp = this.instances[this.instances.length - 1];
            this.instances[ip] = pp, pp._indexInSourceMeshInstanceArray = ip
          }
          pp._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Qp.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(pp) {
        const ip = this.Gl();
        return ip.forcePointsCloud ? Qp.b.PointFillMode : ip.forceWireframe ? Qp.b.WireFrameFillMode : this.overrideRenderingFillMode ?? pp
      }
      setMaterialByID(pp) {
        return this.setMaterialById(pp)
      }
      static CreateRibbon(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(pp, ip, cp, Op, op, Ip) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(pp, ip, cp, Op, op) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(pp, ip, cp, Op, op, Ip) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(pp, ip, cp, Op) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(pp, ip, cp, Op, op, Ip, Sp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(pp, ip, cp, Op, op) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(pp, ip, cp, Op, op, Ip, Sp, xp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(pp, ip, cp, Op, op, Ip, Sp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(pp, ip, cp, Op, op, Ip, Sp, xp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(pp, ip, cp, Op, op, Ip, Sp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(pp, ip, cp, Op, op) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(pp, ip, cp, Op, op, Ip) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(pp, ip, cp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(pp, ip, cp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(pp, ip, cp, Op, op, Ip) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(pp, ip, cp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(pp) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Kp.FRONTSIDE = Cp.d.FRONTSIDE, Kp.BACKSIDE = Cp.d.BACKSIDE, Kp.DOUBLESIDE = Cp.d.DOUBLESIDE, Kp.DEFAULTSIDE = Cp.d.DEFAULTSIDE, Kp.NO_CAP = 0, Kp.CAP_START = 1, Kp.CAP_END = 2, Kp.CAP_ALL = 3, Kp.NO_FLIP = 0, Kp.FLIP_TILE = 1, Kp.ROTATE_TILE = 2, Kp.FLIP_ROW = 3, Kp.ROTATE_ROW = 4, Kp.FLIP_N_ROTATE_TILE = 5, Kp.FLIP_N_ROTATE_ROW = 6, Kp.CENTER = 0, Kp.LEFT = 1, Kp.RIGHT = 2, Kp.TOP = 3, Kp.BOTTOM = 4, Kp.INSTANCEDMESH_SORT_TRANSPARENT = !1, Kp._GroundMeshParser = (pp, ip) => {
      throw (0, hp.o)("GroundMesh")
    }, Kp._GoldbergMeshParser = (pp, ip) => {
      throw (0, hp.o)("GoldbergMesh")
    }, Kp._LinesMeshParser = (pp, ip) => {
      throw (0, hp.o)("LinesMesh")
    }, Kp._GreasedLineMeshParser = (pp, ip) => {
      throw (0, hp.o)("GreasedLineMesh")
    }, Kp._GreasedLineRibbonMeshParser = (pp, ip) => {
      throw (0, hp.o)("GreasedLineRibbonMesh")
    }, Kp._TrailMeshParser = (pp, ip) => {
      throw (0, hp.o)("TrailMesh")
    }, Kp._GaussianSplattingMeshParser = (pp, ip) => {
      throw (0, hp.o)("GaussianSplattingMesh")
    }, Kp._GaussianSplattingPartProxyMeshParser = (pp, ip) => {
      throw (0, hp.o)("GaussianSplattingPartProxyMesh")
    }, Kp._GaussianSplattingCompoundMeshParser = (pp, ip) => {
      throw (0, hp.o)("GaussianSplattingCompoundMesh")
    };
    let Vp = !1;

    function ii() {
      Vp || (Vp = !0, (0, bp.g)("BABYLON.Mesh", Kp))
    }(Op = Kp.prototype).qJ ?? (Op.qJ = (0, hp.k)("Mesh", "qJ")), (op = Kp.prototype).simplify ?? (op.simplify = (0, hp.k)("Mesh", "simplify")), (Ip = Kp.prototype).thinInstanceAdd ?? (Ip.thinInstanceAdd = (0, hp.k)("Mesh", "thinInstanceAdd")), (Sp = Kp.prototype).thinInstanceAddSelf ?? (Sp.thinInstanceAddSelf = (0, hp.k)("Mesh", "thinInstanceAddSelf")), (xp = Kp.prototype).thinInstanceRegisterAttribute ?? (xp.thinInstanceRegisterAttribute = (0, hp.k)("Mesh", "thinInstanceRegisterAttribute")), (Lp = Kp.prototype).thinInstanceSetMatrixAt ?? (Lp.thinInstanceSetMatrixAt = (0, hp.k)("Mesh", "thinInstanceSetMatrixAt")), (Yp = Kp.prototype).thinInstanceSetAttributeAt ?? (Yp.thinInstanceSetAttributeAt = (0, hp.k)("Mesh", "thinInstanceSetAttributeAt")), (Dp = Kp.prototype).I9 ?? (Dp.I9 = (0, hp.k)("Mesh", "I9")), (Ap = Kp.prototype).thinInstanceGetWorldMatrices ?? (Ap.thinInstanceGetWorldMatrices = (0, hp.k)("Mesh", "thinInstanceGetWorldMatrices")), (Pp = Kp.prototype).K3 ?? (Pp.K3 = (0, hp.k)("Mesh", "K3")), (Wp = Kp.prototype).thinInstancePartialBufferUpdate ?? (Wp.thinInstancePartialBufferUpdate = (0, hp.k)("Mesh", "thinInstancePartialBufferUpdate")), (yp = Kp.prototype).thinInstanceRefreshBoundingInfo ?? (yp.thinInstanceRefreshBoundingInfo = (0, hp.k)("Mesh", "thinInstanceRefreshBoundingInfo")), (Up = Kp.prototype).getEmittedParticleSystems ?? (Up.getEmittedParticleSystems = (0, hp.k)("Mesh", "getEmittedParticleSystems")), (wp = Kp.prototype).getHierarchyEmittedParticleSystems ?? (wp.getHierarchyEmittedParticleSystems = (0, hp.k)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Kp.prototype, "edgesShareWithInstances") || Object.defineProperty(Kp.prototype, "edgesShareWithInstances", (0, hp.h)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Kp.prototype, "Fip") || Object.defineProperty(Kp.prototype, "Fip", (0, hp.h)("Mesh", "Fip")), Object.getOwnPropertyDescriptor(Kp.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Kp.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, hp.h)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Kp.prototype, "f_") || Object.defineProperty(Kp.prototype, "f_", (0, hp.h)("Mesh", "f_"))
  },
  40589: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => yp
    });
    var Op = cp(40203),
      op = cp(37320),
      Ip = cp(40342),
      Sp = cp(40096),
      xp = cp(37487),
      Lp = cp(38905),
      Yp = cp(40210),
      Dp = cp(40586),
      Ap = cp(40266),
      Pp = cp(40481);
    class Wp {}
    let yp = (() => {
      var pp;
      let ip, cp, yp, Up, wp = [];
      return pp = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Dp.d)(this._applyToCoroutine.bind(this)), this.uniqueId = pp._UniqueIdGenerator, pp._UniqueIdGenerator++
        }
        set(pp, ip) {
          switch (pp.length || Lp.e.Warn(`Setting vertex data kind '${ip}' with an empty array`), ip) {
            case Ip.j.PositionKind:
              this.positions = pp;
              break;
            case Ip.j.NormalKind:
              this.normals = pp;
              break;
            case Ip.j.TangentKind:
              this.tangents = pp;
              break;
            case Ip.j.UVKind:
              this.uvs = pp;
              break;
            case Ip.j.UV2Kind:
              this.uvs2 = pp;
              break;
            case Ip.j.UV3Kind:
              this.uvs3 = pp;
              break;
            case Ip.j.UV4Kind:
              this.uvs4 = pp;
              break;
            case Ip.j.UV5Kind:
              this.uvs5 = pp;
              break;
            case Ip.j.UV6Kind:
              this.uvs6 = pp;
              break;
            case Ip.j.ColorKind:
              this.colors = pp;
              break;
            case Ip.j.MatricesIndicesKind:
              this.matricesIndices = pp;
              break;
            case Ip.j.MatricesWeightsKind:
              this.matricesWeights = pp;
              break;
            case Ip.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = pp;
              break;
            case Ip.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = pp
          }
        }
        applyToMesh(pp, ip) {
          return this._applyTo(pp, ip, !1), this
        }
        applyToGeometry(pp, ip) {
          return this._applyTo(pp, ip, !1), this
        }
        updateMesh(pp) {
          return this._update(pp), this
        }
        updateGeometry(pp) {
          return this._update(pp), this
        }* _applyToCoroutine(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cp = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (pp.setVerticesData(Ip.j.PositionKind, this.positions, ip), cp && (yield)), this.normals && (pp.setVerticesData(Ip.j.NormalKind, this.normals, ip), cp && (yield)), this.tangents && (pp.setVerticesData(Ip.j.TangentKind, this.tangents, ip), cp && (yield)), this.uvs && (pp.setVerticesData(Ip.j.UVKind, this.uvs, ip), cp && (yield)), this.uvs2 && (pp.setVerticesData(Ip.j.UV2Kind, this.uvs2, ip), cp && (yield)), this.uvs3 && (pp.setVerticesData(Ip.j.UV3Kind, this.uvs3, ip), cp && (yield)), this.uvs4 && (pp.setVerticesData(Ip.j.UV4Kind, this.uvs4, ip), cp && (yield)), this.uvs5 && (pp.setVerticesData(Ip.j.UV5Kind, this.uvs5, ip), cp && (yield)), this.uvs6 && (pp.setVerticesData(Ip.j.UV6Kind, this.uvs6, ip), cp && (yield)), this.colors) {
            const Op = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            pp.setVerticesData(Ip.j.ColorKind, this.colors, ip, Op), this.hasVertexAlpha && void 0 !== pp.hasVertexAlpha && (pp.hasVertexAlpha = !0), cp && (yield)
          }
          if (this.matricesIndices && (pp.setVerticesData(Ip.j.MatricesIndicesKind, this.matricesIndices, ip), cp && (yield)), this.matricesWeights && (pp.setVerticesData(Ip.j.MatricesWeightsKind, this.matricesWeights, ip), cp && (yield)), this.matricesIndicesExtra && (pp.setVerticesData(Ip.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, ip), cp && (yield)), this.matricesWeightsExtra && (pp.setVerticesData(Ip.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, ip), cp && (yield)), this.indices ? (pp.setIndices(this.indices, null, ip), cp && (yield)) : pp.setIndices([], null), pp.Am && this.materialInfos && this.materialInfos.length > 1) {
            const ip = pp;
            ip.Am = [];
            for (const pp of this.materialInfos) new Pp.d(pp.materialIndex, pp.verticesStart, pp.verticesCount, pp.indexStart, pp.indexCount, ip)
          }
          return this
        }
        _update(pp, ip, cp) {
          return this.positions && pp.updateVerticesData(Ip.j.PositionKind, this.positions, ip, cp), this.normals && pp.updateVerticesData(Ip.j.NormalKind, this.normals, ip, cp), this.tangents && pp.updateVerticesData(Ip.j.TangentKind, this.tangents, ip, cp), this.uvs && pp.updateVerticesData(Ip.j.UVKind, this.uvs, ip, cp), this.uvs2 && pp.updateVerticesData(Ip.j.UV2Kind, this.uvs2, ip, cp), this.uvs3 && pp.updateVerticesData(Ip.j.UV3Kind, this.uvs3, ip, cp), this.uvs4 && pp.updateVerticesData(Ip.j.UV4Kind, this.uvs4, ip, cp), this.uvs5 && pp.updateVerticesData(Ip.j.UV5Kind, this.uvs5, ip, cp), this.uvs6 && pp.updateVerticesData(Ip.j.UV6Kind, this.uvs6, ip, cp), this.colors && pp.updateVerticesData(Ip.j.ColorKind, this.colors, ip, cp), this.matricesIndices && pp.updateVerticesData(Ip.j.MatricesIndicesKind, this.matricesIndices, ip, cp), this.matricesWeights && pp.updateVerticesData(Ip.j.MatricesWeightsKind, this.matricesWeights, ip, cp), this.matricesIndicesExtra && pp.updateVerticesData(Ip.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, ip, cp), this.matricesWeightsExtra && pp.updateVerticesData(Ip.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, ip, cp), this.indices && pp.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
          const Ip = op.i.Zy[0],
            Sp = op.i.Zy[1];
          for (let xp = cp; xp < cp + Op; xp += 3) op.o.FromArrayToRef(pp, xp, Ip), op.o.TransformCoordinatesToRef(Ip, ip, Sp), pp[xp] = Sp.x, pp[xp + 1] = Sp.y, pp[xp + 2] = Sp.z
        }
        static _TransformVector3Normals(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
          const Ip = op.i.Zy[0],
            Sp = op.i.Zy[1];
          for (let xp = cp; xp < cp + Op; xp += 3) op.o.FromArrayToRef(pp, xp, Ip), op.o.TransformNormalToRef(Ip, ip, Sp), pp[xp] = Sp.x, pp[xp + 1] = Sp.y, pp[xp + 2] = Sp.z
        }
        static _TransformVector4Normals(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
          const Ip = op.i.Vector4[0],
            Sp = op.i.Vector4[1];
          for (let xp = cp; xp < cp + Op; xp += 4) op.q.FromArrayToRef(pp, xp, Ip), op.q.TransformNormalToRef(Ip, ip, Sp), pp[xp] = Sp.x, pp[xp + 1] = Sp.y, pp[xp + 2] = Sp.z, pp[xp + 3] = Sp.w
        }
        static _FlipFaces(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.length;
          for (let Op = ip; Op < ip + cp; Op += 3) {
            const ip = pp[Op + 1];
            pp[Op + 1] = pp[Op + 2], pp[Op + 2] = ip
          }
        }
        transform(ip) {
          const cp = ip.determinant() < 0;
          return this.positions && pp._TransformVector3Coordinates(this.positions, ip), this.normals && pp._TransformVector3Normals(this.normals, ip), this.tangents && pp._TransformVector4Normals(this.tangents, ip), cp && this.indices && pp._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const ip = [];
          for (const cp of this.materialInfos) {
            const Op = new pp;
            if (this.positions && (Op.positions = this.positions.slice(3 * cp.verticesStart, 3 * (cp.verticesCount + cp.verticesStart))), this.normals && (Op.normals = this.normals.slice(3 * cp.verticesStart, 3 * (cp.verticesCount + cp.verticesStart))), this.tangents && (Op.tangents = this.tangents.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.colors && (Op.colors = this.colors.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.uvs && (Op.uvs = this.uvs.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.uvs2 && (Op.uvs2 = this.uvs2.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.uvs3 && (Op.uvs3 = this.uvs3.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.uvs4 && (Op.uvs4 = this.uvs4.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.uvs5 && (Op.uvs5 = this.uvs5.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.uvs6 && (Op.uvs6 = this.uvs6.slice(2 * cp.verticesStart, 2 * (cp.verticesCount + cp.verticesStart))), this.matricesIndices && (Op.matricesIndices = this.matricesIndices.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.matricesIndicesExtra && (Op.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.matricesWeights && (Op.matricesWeights = this.matricesWeights.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.matricesWeightsExtra && (Op.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * cp.verticesStart, 4 * (cp.verticesCount + cp.verticesStart))), this.indices) {
              Op.indices = [];
              for (let pp = cp.indexStart; pp < cp.indexStart + cp.indexCount; pp++) Op.indices.push(this.indices[pp] - cp.verticesStart)
            }
            const op = new Wp;
            op.indexStart = 0, op.indexCount = Op.indices ? Op.indices.length : 0, op.materialIndex = cp.materialIndex, op.verticesStart = 0, op.verticesCount = (Op.positions ? Op.positions.length : 0) / 3, Op.materialInfos = [op], ip.push(Op)
          }
          return ip
        }
        merge(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Ip = Array.isArray(pp) ? pp.map((pp => ({
            vertexData: pp
          }))) : [{
            vertexData: pp
          }];
          return (0, Dp.g)(this._mergeCoroutine(void 0, Ip, ip, !1, cp, Op, op))
        }* _mergeCoroutine(ip, cp) {
          let Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            op = arguments.length > 3 ? arguments[3] : void 0,
            Sp = arguments.length > 4 ? arguments[4] : void 0,
            xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Lp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Yp = cp.map((pp => pp.vertexData)),
            Dp = this;
          if (Lp)
            for (const pp of Yp) pp && (pp._validate(), !this.normals && pp.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && pp.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && pp.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && pp.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && pp.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && pp.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && pp.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && pp.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && pp.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && pp.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && pp.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && pp.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && pp.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const pp of Yp)
            if (pp)
              if (Lp) this.normals && !pp.normals && (pp.normals = new Float32Array(pp.positions.length)), this.tangents && !pp.tangents && (pp.tangents = new Float32Array(pp.positions.length / 3 * 4)), this.uvs && !pp.uvs && (pp.uvs = new Float32Array(pp.positions.length / 3 * 2)), this.uvs2 && !pp.uvs2 && (pp.uvs2 = new Float32Array(pp.positions.length / 3 * 2)), this.uvs3 && !pp.uvs3 && (pp.uvs3 = new Float32Array(pp.positions.length / 3 * 2)), this.uvs4 && !pp.uvs4 && (pp.uvs4 = new Float32Array(pp.positions.length / 3 * 2)), this.uvs5 && !pp.uvs5 && (pp.uvs5 = new Float32Array(pp.positions.length / 3 * 2)), this.uvs6 && !pp.uvs6 && (pp.uvs6 = new Float32Array(pp.positions.length / 3 * 2)), this.colors && !pp.colors && (pp.colors = new Float32Array(pp.positions.length / 3 * 4), pp.colors.fill(1)), this.matricesIndices && !pp.matricesIndices && (pp.matricesIndices = new Float32Array(pp.positions.length / 3 * 4)), this.matricesWeights && !pp.matricesWeights && (pp.matricesWeights = new Float32Array(pp.positions.length / 3 * 4)), this.matricesIndicesExtra && !pp.matricesIndicesExtra && (pp.matricesIndicesExtra = new Float32Array(pp.positions.length / 3 * 4)), this.matricesWeightsExtra && !pp.matricesWeightsExtra && (pp.matricesWeightsExtra = new Float32Array(pp.positions.length / 3 * 4));
              else if (pp._validate(), !this.normals !== !pp.normals || !this.tangents !== !pp.tangents || !this.uvs !== !pp.uvs || !this.uvs2 !== !pp.uvs2 || !this.uvs3 !== !pp.uvs3 || !this.uvs4 !== !pp.uvs4 || !this.uvs5 !== !pp.uvs5 || !this.uvs6 !== !pp.uvs6 || !this.colors !== !pp.colors || !this.matricesIndices !== !pp.matricesIndices || !this.matricesWeights !== !pp.matricesWeights || !this.matricesIndicesExtra !== !pp.matricesIndicesExtra || !this.matricesWeightsExtra !== !pp.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (xp) {
            let pp, Op = 0,
              op = 0;
            const Ip = [];
            let Sp = null;
            const xp = [];
            for (const cp of this.splitBasedOnMaterialID()) xp.push({
              vertexData: cp,
              transform: ip
            });
            for (const ip of cp)
              if (ip.vertexData)
                for (const pp of ip.vertexData.splitBasedOnMaterialID()) xp.push({
                  vertexData: pp,
                  transform: ip.transform
                });
            xp.sort(((pp, ip) => {
              const cp = pp.vertexData.materialInfos ? pp.vertexData.materialInfos[0].materialIndex : 0,
                Op = ip.vertexData.materialInfos ? ip.vertexData.materialInfos[0].materialIndex : 0;
              return cp > Op ? 1 : cp === Op ? 0 : -1
            }));
            for (const ip of xp) {
              const cp = ip.vertexData;
              if (pp = cp.materialInfos ? cp.materialInfos[0].materialIndex : 0, Sp && Sp.materialIndex === pp) Sp.indexCount += cp.indices.length, Sp.verticesCount += cp.positions.length / 3;
              else {
                const ip = new Wp;
                ip.materialIndex = pp, ip.indexStart = Op, ip.indexCount = cp.indices.length, ip.verticesStart = op, ip.verticesCount = cp.positions.length / 3, Ip.push(ip), Sp = ip
              }
              Op += cp.indices.length, op += cp.positions.length / 3
            }
            const Lp = xp.splice(0, 1)[0];
            Dp = Lp.vertexData, ip = Lp.transform, Yp = xp.map((pp => pp.vertexData)), cp = xp, this.materialInfos = Ip
          }
          const Ap = Yp.reduce(((pp, ip) => pp + (ip.indices?.length ?? 0)), Dp.indices?.length ?? 0);
          let Pp = Sp || Yp.some((pp => pp.indices === Dp.indices)) ? Dp.indices?.slice() : Dp.indices;
          if (Ap > 0) {
            let Ip = Pp?.length ?? 0;
            if (Pp || (Pp = new Array(Ap)), Pp.length !== Ap) {
              if (Array.isArray(Pp)) Pp.length = Ap;
              else {
                const pp = Op || Pp instanceof Uint32Array ? new Uint32Array(Ap) : new Uint16Array(Ap);
                pp.set(Pp), Pp = pp
              }
              ip && ip.determinant() < 0 && pp._FlipFaces(Pp, 0, Ip)
            }
            let Sp = Dp.positions ? Dp.positions.length / 3 : 0;
            for (const {
                vertexData: ip,
                transform: Op
              }
              of cp)
              if (ip.indices) {
                for (let pp = 0; pp < ip.indices.length; pp++) Pp[Ip + pp] = ip.indices[pp] + Sp;
                Op && Op.determinant() < 0 && pp._FlipFaces(Pp, Ip, ip.indices.length), Sp += ip.positions.length / 3, Ip += ip.indices.length, op && (yield)
              }
          }
          return this.indices = Pp, this.positions = pp._MergeElement(Ip.j.PositionKind, Dp.positions, ip, cp.map((pp => [pp.vertexData.positions, pp.transform]))), op && (yield), Dp.normals && (this.normals = pp._MergeElement(Ip.j.NormalKind, Dp.normals, ip, cp.map((pp => [pp.vertexData.normals, pp.transform]))), op && (yield)), Dp.tangents && (this.tangents = pp._MergeElement(Ip.j.TangentKind, Dp.tangents, ip, cp.map((pp => [pp.vertexData.tangents, pp.transform]))), op && (yield)), Dp.uvs && (this.uvs = pp._MergeElement(Ip.j.UVKind, Dp.uvs, ip, cp.map((pp => [pp.vertexData.uvs, pp.transform]))), op && (yield)), Dp.uvs2 && (this.uvs2 = pp._MergeElement(Ip.j.UV2Kind, Dp.uvs2, ip, cp.map((pp => [pp.vertexData.uvs2, pp.transform]))), op && (yield)), Dp.uvs3 && (this.uvs3 = pp._MergeElement(Ip.j.UV3Kind, Dp.uvs3, ip, cp.map((pp => [pp.vertexData.uvs3, pp.transform]))), op && (yield)), Dp.uvs4 && (this.uvs4 = pp._MergeElement(Ip.j.UV4Kind, Dp.uvs4, ip, cp.map((pp => [pp.vertexData.uvs4, pp.transform]))), op && (yield)), Dp.uvs5 && (this.uvs5 = pp._MergeElement(Ip.j.UV5Kind, Dp.uvs5, ip, cp.map((pp => [pp.vertexData.uvs5, pp.transform]))), op && (yield)), Dp.uvs6 && (this.uvs6 = pp._MergeElement(Ip.j.UV6Kind, Dp.uvs6, ip, cp.map((pp => [pp.vertexData.uvs6, pp.transform]))), op && (yield)), Dp.colors && (this.colors = pp._MergeElement(Ip.j.ColorKind, Dp.colors, ip, cp.map((pp => [pp.vertexData.colors, pp.transform]))), (void 0 !== Dp.hasVertexAlpha || cp.some((pp => void 0 !== pp.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Dp.hasVertexAlpha || cp.some((pp => pp.vertexData.hasVertexAlpha))), op && (yield)), Dp.matricesIndices && (this.matricesIndices = pp._MergeElement(Ip.j.MatricesIndicesKind, Dp.matricesIndices, ip, cp.map((pp => [pp.vertexData.matricesIndices, pp.transform]))), op && (yield)), Dp.matricesWeights && (this.matricesWeights = pp._MergeElement(Ip.j.MatricesWeightsKind, Dp.matricesWeights, ip, cp.map((pp => [pp.vertexData.matricesWeights, pp.transform]))), op && (yield)), Dp.matricesIndicesExtra && (this.matricesIndicesExtra = pp._MergeElement(Ip.j.MatricesIndicesExtraKind, Dp.matricesIndicesExtra, ip, cp.map((pp => [pp.vertexData.matricesIndicesExtra, pp.transform]))), op && (yield)), Dp.matricesWeightsExtra && (this.matricesWeightsExtra = pp._MergeElement(Ip.j.MatricesWeightsExtraKind, Dp.matricesWeightsExtra, ip, cp.map((pp => [pp.vertexData.matricesWeightsExtra, pp.transform])))), this
        }
        static _MergeElement(ip, cp, Op, op) {
          const Sp = op.filter((pp => null !== pp[0] && void 0 !== pp[0]));
          if (!cp && 0 == Sp.length) return cp;
          if (!cp) return this._MergeElement(ip, Sp[0][0], Sp[0][1], Sp.slice(1));
          const xp = Sp.reduce(((pp, ip) => pp + ip[0].length), cp.length),
            Lp = ip === Ip.j.PositionKind ? pp._TransformVector3Coordinates : ip === Ip.j.NormalKind ? pp._TransformVector3Normals : ip === Ip.j.TangentKind ? pp._TransformVector4Normals : () => {};
          if (cp instanceof Float32Array) {
            const pp = new Float32Array(xp);
            pp.set(cp), Op && Lp(pp, Op, 0, cp.length);
            let ip = cp.length;
            for (const [cp, Op] of Sp) pp.set(cp, ip), Op && Lp(pp, Op, ip, cp.length), ip += cp.length;
            return pp
          } {
            const pp = new Array(xp);
            for (let Op = 0; Op < cp.length; Op++) pp[Op] = cp[Op];
            Op && Lp(pp, Op, 0, cp.length);
            let ip = cp.length;
            for (const [cp, Op] of Sp) {
              for (let Op = 0; Op < cp.length; Op++) pp[ip + Op] = cp[Op];
              Op && Lp(pp, Op, ip, cp.length), ip += cp.length
            }
            return pp
          }
        }
        _validate() {
          if (!this.positions) throw new Ap.i("Positions are required", Ap.h.MeshInvalidPositionsError);
          const pp = (pp, ip) => {
              const cp = (0, Ip.i)(pp);
              if (ip.length % cp !== 0) throw new Error("The " + pp + "s array count must be a multiple of " + cp);
              return ip.length / cp
            },
            ip = pp(Ip.j.PositionKind, this.positions),
            cp = (cp, Op) => {
              const op = pp(cp, Op);
              if (op !== ip) throw new Error("The " + cp + "s element count (" + op + ") does not match the positions count (" + ip + ")")
            };
          this.normals && cp(Ip.j.NormalKind, this.normals), this.tangents && cp(Ip.j.TangentKind, this.tangents), this.uvs && cp(Ip.j.UVKind, this.uvs), this.uvs2 && cp(Ip.j.UV2Kind, this.uvs2), this.uvs3 && cp(Ip.j.UV3Kind, this.uvs3), this.uvs4 && cp(Ip.j.UV4Kind, this.uvs4), this.uvs5 && cp(Ip.j.UV5Kind, this.uvs5), this.uvs6 && cp(Ip.j.UV6Kind, this.uvs6), this.colors && cp(Ip.j.ColorKind, this.colors), this.matricesIndices && cp(Ip.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && cp(Ip.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && cp(Ip.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && cp(Ip.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const ip = this.serialize();
          return pp.Parse(ip)
        }
        serialize() {
          const pp = {};
          if (this.positions && (pp.positions = Array.from(this.positions)), this.normals && (pp.normals = Array.from(this.normals)), this.tangents && (pp.tangents = Array.from(this.tangents)), this.uvs && (pp.uvs = Array.from(this.uvs)), this.uvs2 && (pp.uvs2 = Array.from(this.uvs2)), this.uvs3 && (pp.uvs3 = Array.from(this.uvs3)), this.uvs4 && (pp.uvs4 = Array.from(this.uvs4)), this.uvs5 && (pp.uvs5 = Array.from(this.uvs5)), this.uvs6 && (pp.uvs6 = Array.from(this.uvs6)), this.colors && (pp.colors = Array.from(this.colors), pp.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (pp.matricesIndices = Array.from(this.matricesIndices), pp.matricesIndicesExpanded = !0), this.matricesWeights && (pp.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (pp.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), pp.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (pp.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), pp.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            pp.materialInfos = [];
            for (const ip of this.materialInfos) {
              const cp = {
                indexStart: ip.indexStart,
                indexCount: ip.indexCount,
                materialIndex: ip.materialIndex,
                verticesStart: ip.verticesStart,
                verticesCount: ip.verticesCount
              };
              pp.materialInfos.push(cp)
            }
          }
          return pp
        }
        static ExtractFromMesh(ip, cp, Op) {
          return pp._ExtractFrom(ip, cp, Op)
        }
        static ExtractFromGeometry(ip, cp, Op) {
          return pp._ExtractFrom(ip, cp, Op)
        }
        static _ExtractFrom(ip, cp, Op) {
          const op = new pp;
          if (ip.isVerticesDataPresent(Ip.j.PositionKind) && (op.positions = ip.getVerticesData(Ip.j.PositionKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.NormalKind) && (op.normals = ip.getVerticesData(Ip.j.NormalKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.TangentKind) && (op.tangents = ip.getVerticesData(Ip.j.TangentKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UVKind) && (op.uvs = ip.getVerticesData(Ip.j.UVKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UV2Kind) && (op.uvs2 = ip.getVerticesData(Ip.j.UV2Kind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UV3Kind) && (op.uvs3 = ip.getVerticesData(Ip.j.UV3Kind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UV4Kind) && (op.uvs4 = ip.getVerticesData(Ip.j.UV4Kind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UV5Kind) && (op.uvs5 = ip.getVerticesData(Ip.j.UV5Kind, cp, Op)), ip.isVerticesDataPresent(Ip.j.UV6Kind) && (op.uvs6 = ip.getVerticesData(Ip.j.UV6Kind, cp, Op)), ip.isVerticesDataPresent(Ip.j.ColorKind)) {
            const pp = ip.geometry || ip,
              Sp = pp.getVertexBuffer(Ip.j.ColorKind),
              xp = pp.getVerticesData(Ip.j.ColorKind, cp, Op);
            if (3 === Sp.getSize()) {
              const pp = new Float32Array(4 * xp.length / 3);
              for (let ip = 0, cp = 0; ip < xp.length; ip += 3, cp += 4) pp[cp] = xp[ip], pp[cp + 1] = xp[ip + 1], pp[cp + 2] = xp[ip + 2], pp[cp + 3] = 1;
              op.colors = pp
            } else {
              if (4 !== Sp.getSize()) throw new Error(`Unexpected number of color components: ${Sp.getSize()}`);
              op.colors = xp
            }
          }
          return ip.isVerticesDataPresent(Ip.j.MatricesIndicesKind) && (op.matricesIndices = ip.getVerticesData(Ip.j.MatricesIndicesKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.MatricesWeightsKind) && (op.matricesWeights = ip.getVerticesData(Ip.j.MatricesWeightsKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.MatricesIndicesExtraKind) && (op.matricesIndicesExtra = ip.getVerticesData(Ip.j.MatricesIndicesExtraKind, cp, Op)), ip.isVerticesDataPresent(Ip.j.MatricesWeightsExtraKind) && (op.matricesWeightsExtra = ip.getVerticesData(Ip.j.MatricesWeightsExtraKind, cp, Op)), op.indices = ip.NOp(cp, Op), op
        }
        static CreateRibbon(pp) {
          throw (0, Sp.o)("ribbonBuilder")
        }
        static CreateBox(pp) {
          throw (0, Sp.o)("boxBuilder")
        }
        static CreateTiledBox(pp) {
          throw (0, Sp.o)("tiledBoxBuilder")
        }
        static CreateTiledPlane(pp) {
          throw (0, Sp.o)("tiledPlaneBuilder")
        }
        static CreateSphere(pp) {
          throw (0, Sp.o)("sphereBuilder")
        }
        static CreateCylinder(pp) {
          throw (0, Sp.o)("cylinderBuilder")
        }
        static CreateTorus(pp) {
          throw (0, Sp.o)("torusBuilder")
        }
        static CreateLineSystem(pp) {
          throw (0, Sp.o)("linesBuilder")
        }
        static CreateDashedLines(pp) {
          throw (0, Sp.o)("linesBuilder")
        }
        static CreateGround(pp) {
          throw (0, Sp.o)("groundBuilder")
        }
        static CreateTiledGround(pp) {
          throw (0, Sp.o)("groundBuilder")
        }
        static CreateGroundFromHeightMap(pp) {
          throw (0, Sp.o)("groundBuilder")
        }
        static CreatePlane(pp) {
          throw (0, Sp.o)("planeBuilder")
        }
        static CreateDisc(pp) {
          throw (0, Sp.o)("discBuilder")
        }
        static CreatePolygon(pp, ip, cp, Op, op, Ip, xp) {
          throw (0, Sp.o)("polygonBuilder")
        }
        static CreateIcoSphere(pp) {
          throw (0, Sp.o)("icoSphereBuilder")
        }
        static CreatePolyhedron(pp) {
          throw (0, Sp.o)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || op.o.Up();
          throw (0, Sp.o)("capsuleBuilder")
        }
        static CreateTorusKnot(pp) {
          throw (0, Sp.o)("torusKnotBuilder")
        }
        static ComputeNormals(pp, ip, cp, Op) {
          let Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp = !1,
            qp = !1,
            Mp = !1,
            Cp = !1,
            Ep = 1,
            Xp = 0,
            lp = null;
          Op && (Rp = !!Op.facetNormals, qp = !!Op.facetPositions, Mp = !!Op.facetPartitioning, Ep = !0 === Op.useRightHandedSystem ? -1 : 1, Xp = Op.ratio || 0, Cp = !!Op.depthSort, lp = Op.distanceTo, Cp && void 0 === lp && (lp = op.o.Zero()));
          let Qp = 0,
            Jp = 0,
            Bp = 0,
            Np = 0;
          for (Mp && Op && Op.bbSize && (Qp = Op.subDiv.X * Xp / Op.bbSize.x, Jp = Op.subDiv.Y * Xp / Op.bbSize.y, Bp = Op.subDiv.Z * Xp / Op.bbSize.z, Np = Op.subDiv.max * Op.subDiv.max, Op.facetPartitioning.length = 0), Ip = 0; Ip < pp.length; Ip++) cp[Ip] = 0;
          const Tp = ip.length / 3 | 0;
          for (Ip = 0; Ip < Tp; Ip++) {
            if (wp = 3 * ip[3 * Ip], vp = wp + 1, tp = wp + 2, Hp = 3 * ip[3 * Ip + 1], dp = Hp + 1, ep = Hp + 2, jp = 3 * ip[3 * Ip + 2], kp = jp + 1, mp = jp + 2, Sp = pp[wp] - pp[Hp], xp = pp[vp] - pp[dp], Lp = pp[tp] - pp[ep], Yp = pp[jp] - pp[Hp], Dp = pp[kp] - pp[dp], Ap = pp[mp] - pp[ep], Pp = Ep * (xp * Ap - Lp * Dp), Wp = Ep * (Lp * Yp - Sp * Ap), yp = Ep * (Sp * Dp - xp * Yp), Up = Math.sqrt(Pp * Pp + Wp * Wp + yp * yp), Up = 0 === Up ? 1 : Up, Pp /= Up, Wp /= Up, yp /= Up, Rp && Op && (Op.facetNormals[Ip].x = Pp, Op.facetNormals[Ip].y = Wp, Op.facetNormals[Ip].z = yp), qp && Op && (Op.facetPositions[Ip].x = (pp[wp] + pp[Hp] + pp[jp]) / 3, Op.facetPositions[Ip].y = (pp[vp] + pp[dp] + pp[kp]) / 3, Op.facetPositions[Ip].z = (pp[tp] + pp[ep] + pp[mp]) / 3), Mp && Op) {
              const ip = Math.floor((Op.facetPositions[Ip].x - Op.bInfo.minimum.x * Xp) * Qp),
                cp = Math.floor((Op.facetPositions[Ip].y - Op.bInfo.minimum.y * Xp) * Jp),
                op = Math.floor((Op.facetPositions[Ip].z - Op.bInfo.minimum.z * Xp) * Bp),
                Sp = Math.floor((pp[wp] - Op.bInfo.minimum.x * Xp) * Qp),
                xp = Math.floor((pp[vp] - Op.bInfo.minimum.y * Xp) * Jp),
                Lp = Math.floor((pp[tp] - Op.bInfo.minimum.z * Xp) * Bp),
                Yp = Math.floor((pp[Hp] - Op.bInfo.minimum.x * Xp) * Qp),
                Dp = Math.floor((pp[dp] - Op.bInfo.minimum.y * Xp) * Jp),
                Ap = Math.floor((pp[ep] - Op.bInfo.minimum.z * Xp) * Bp),
                Pp = Math.floor((pp[jp] - Op.bInfo.minimum.x * Xp) * Qp),
                Wp = Math.floor((pp[kp] - Op.bInfo.minimum.y * Xp) * Jp),
                yp = Math.floor((pp[mp] - Op.bInfo.minimum.z * Xp) * Bp),
                Up = Sp + Op.subDiv.max * xp + Np * Lp,
                Rp = Yp + Op.subDiv.max * Dp + Np * Ap,
                qp = Pp + Op.subDiv.max * Wp + Np * yp,
                Mp = ip + Op.subDiv.max * cp + Np * op;
              Op.facetPartitioning[Mp] = Op.facetPartitioning[Mp] ? Op.facetPartitioning[Mp] : [], Op.facetPartitioning[Up] = Op.facetPartitioning[Up] ? Op.facetPartitioning[Up] : [], Op.facetPartitioning[Rp] = Op.facetPartitioning[Rp] ? Op.facetPartitioning[Rp] : [], Op.facetPartitioning[qp] = Op.facetPartitioning[qp] ? Op.facetPartitioning[qp] : [], Op.facetPartitioning[Up].push(Ip), Rp != Up && Op.facetPartitioning[Rp].push(Ip), qp != Rp && qp != Up && Op.facetPartitioning[qp].push(Ip), Mp != Up && Mp != Rp && Mp != qp && Op.facetPartitioning[Mp].push(Ip)
            }
            if (Cp && Op && Op.facetPositions) {
              const pp = Op.depthSortedFacets[Ip];
              pp.ind = 3 * Ip, pp.sqDistance = op.o.DistanceSquared(Op.facetPositions[Ip], lp)
            }
            cp[wp] += Pp, cp[vp] += Wp, cp[tp] += yp, cp[Hp] += Pp, cp[dp] += Wp, cp[ep] += yp, cp[jp] += Pp, cp[kp] += Wp, cp[mp] += yp
          }
          for (Ip = 0; Ip < cp.length / 3; Ip++) Pp = cp[3 * Ip], Wp = cp[3 * Ip + 1], yp = cp[3 * Ip + 2], Up = Math.sqrt(Pp * Pp + Wp * Wp + yp * yp), Up = 0 === Up ? 1 : Up, Pp /= Up, Wp /= Up, yp /= Up, cp[3 * Ip] = Pp, cp[3 * Ip + 1] = Wp, cp[3 * Ip + 2] = yp
        }
        static _ComputeSides(ip, cp, Op, Ip, Sp, xp, Lp) {
          const Yp = Op.length,
            Dp = Ip.length;
          let Ap, Pp;
          switch (ip = ip || pp.DEFAULTSIDE) {
            case pp.FRONTSIDE:
              break;
            case pp.BACKSIDE:
              for (Ap = 0; Ap < Yp; Ap += 3) {
                const pp = Op[Ap];
                Op[Ap] = Op[Ap + 2], Op[Ap + 2] = pp
              }
              for (Pp = 0; Pp < Dp; Pp++) Ip[Pp] = -Ip[Pp];
              break;
            case pp.DOUBLESIDE: {
              const pp = cp.length,
                ip = pp / 3;
              for (let Op = 0; Op < pp; Op++) cp[pp + Op] = cp[Op];
              for (Ap = 0; Ap < Yp; Ap += 3) Op[Ap + Yp] = Op[Ap + 2] + ip, Op[Ap + 1 + Yp] = Op[Ap + 1] + ip, Op[Ap + 2 + Yp] = Op[Ap] + ip;
              for (Pp = 0; Pp < Dp; Pp++) Ip[Dp + Pp] = -Ip[Pp];
              const Wp = Sp.length;
              let yp;
              for (yp = 0; yp < Wp; yp++) Sp[yp + Wp] = Sp[yp];
              for (xp = xp || new op.q(0, 0, 1, 1), Lp = Lp || new op.q(0, 0, 1, 1), yp = 0, Ap = 0; Ap < Wp / 2; Ap++) Sp[yp] = xp.x + (xp.z - xp.x) * Sp[yp], Sp[yp + 1] = xp.y + (xp.w - xp.y) * Sp[yp + 1], Sp[yp + Wp] = Lp.x + (Lp.z - Lp.x) * Sp[yp + Wp], Sp[yp + Wp + 1] = Lp.y + (Lp.w - Lp.y) * Sp[yp + Wp + 1], yp += 2;
              break
            }
          }
        }
        static Parse(ip) {
          const cp = new pp,
            Op = ip.positions;
          Op && cp.set(Op, Ip.j.PositionKind);
          const op = ip.normals;
          op && cp.set(op, Ip.j.NormalKind);
          const Sp = ip.tangents;
          Sp && cp.set(Sp, Ip.j.TangentKind);
          const Lp = ip.uvs;
          Lp && cp.set(Lp, Ip.j.UVKind);
          const Yp = ip.uvs2;
          Yp && cp.set(Yp, Ip.j.UV2Kind);
          const Dp = ip.uvs3;
          Dp && cp.set(Dp, Ip.j.UV3Kind);
          const Ap = ip.uvs4;
          Ap && cp.set(Ap, Ip.j.UV4Kind);
          const Pp = ip.uvs5;
          Pp && cp.set(Pp, Ip.j.UV5Kind);
          const yp = ip.uvs6;
          yp && cp.set(yp, Ip.j.UV6Kind);
          const Up = ip.colors;
          Up && (cp.set(xp.h.CheckColors4(Up, Op.length / 3), Ip.j.ColorKind), void 0 !== ip.hasVertexAlpha && (cp.hasVertexAlpha = ip.hasVertexAlpha));
          const wp = ip.matricesIndices;
          wp && cp.set(wp, Ip.j.MatricesIndicesKind);
          const vp = ip.matricesWeights;
          vp && cp.set(vp, Ip.j.MatricesWeightsKind);
          const tp = ip.indices;
          tp && (cp.indices = tp);
          const Hp = ip.materialInfos;
          if (Hp) {
            cp.materialInfos = [];
            for (const pp of Hp) {
              const ip = new Wp;
              ip.indexCount = pp.indexCount, ip.indexStart = pp.indexStart, ip.verticesCount = pp.verticesCount, ip.verticesStart = pp.verticesStart, ip.materialIndex = pp.materialIndex, cp.materialInfos.push(ip)
            }
          }
          return cp
        }
        static ImportVertexData(ip, cp) {
          const Op = pp.Parse(ip);
          cp.setAllVerticesData(Op, ip.updatable)
        }
      }, (() => {
        const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [Yp.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], cp = [Yp.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], yp = [Yp.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Up = [Yp.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Op.j)(pp, null, ip, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: pp => "_TransformVector3Coordinates" in pp,
            get: pp => pp._TransformVector3Coordinates
          },
          metadata: op
        }, null, wp), (0, Op.j)(pp, null, cp, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: pp => "_TransformVector3Normals" in pp,
            get: pp => pp._TransformVector3Normals
          },
          metadata: op
        }, null, wp), (0, Op.j)(pp, null, yp, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: pp => "_TransformVector4Normals" in pp,
            get: pp => pp._TransformVector4Normals
          },
          metadata: op
        }, null, wp), (0, Op.j)(pp, null, Up, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: pp => "_FlipFaces" in pp,
            get: pp => pp._FlipFaces
          },
          metadata: op
        }, null, wp), op && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: op
        })
      })(), pp.FRONTSIDE = ((0, Op.l)(pp, wp), 0), pp.BACKSIDE = 1, pp.DOUBLESIDE = 2, pp.DEFAULTSIDE = 0, pp._UniqueIdGenerator = 0, pp
    })()
  },
  40663: (pp, ip, cp) => {
    var Op = cp(37320),
      op = cp(38905),
      Ip = cp(40498),
      Sp = cp(40577),
      xp = cp(40342);
    const Lp = "bakedVertexAnimationSettingsInstanced";

    function Yp(pp) {
      const ip = pp.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return ip instanceof Float32Array || ip instanceof Uint16Array
    }

    function Dp(pp, ip, cp, Op) {
      cp.E_(Number.POSITIVE_INFINITY), Op.E_(Number.NEGATIVE_INFINITY);
      for (let op = 0; op < 3 * ip; op += 3) {
        const ip = pp[op],
          Ip = pp[op + 1],
          Sp = pp[op + 2];
        ip < cp.x && (cp.x = ip), Ip < cp.y && (cp.y = Ip), Sp < cp.z && (cp.z = Sp), ip > Op.x && (Op.x = ip), Ip > Op.y && (Op.y = Ip), Sp > Op.z && (Op.z = Sp)
      }
    }

    function Ap(pp, ip, cp) {
      cp && (pp.x -= pp.x * cp.x + cp.y, pp.y -= pp.y * cp.x + cp.y, pp.z -= pp.z * cp.x + cp.y, ip.x += ip.x * cp.x + cp.y, ip.y += ip.y * cp.x + cp.y, ip.z += ip.z * cp.x + cp.y)
    }

    function Pp(pp, ip, cp, op, Ip) {
      const Sp = Op.i.Zy[7],
        xp = Op.i.Zy[8];
      for (let Lp = 0; Lp < 2; ++Lp)
        for (let Yp = 0; Yp < 2; ++Yp)
          for (let Dp = 0; Dp < 2; ++Dp) Sp.set(Lp ? ip.x : pp.x, Yp ? ip.y : pp.y, Dp ? ip.z : pp.z), Op.o.TransformCoordinatesToRef(Sp, cp, xp), op.minimizeInPlace(xp), Ip.maximizeInPlace(xp)
    }

    function Wp(pp, ip, cp, op, Ip) {
      const Sp = Op.i.Zy[7];
      for (let xp = 0; xp < 3 * ip; xp += 3) Op.o.TransformCoordinatesFromFloatsToRef(pp[xp], pp[xp + 1], pp[xp + 2], cp, Sp), op.minimizeInPlace(Sp), Ip.maximizeInPlace(Sp)
    }
    let yp = !1;
    yp || (yp = !0, Sp.d.prototype.thinInstanceAdd = function(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Gl().gy().getCaps().instancedArrays) return op.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(pp) ? pp.length : 1);
      const cp = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(pp))
        for (let Op = 0; Op < pp.length; ++Op) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, pp[Op], Op === pp.length - 1 && ip);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, pp, ip);
      return cp
    }, Sp.d.prototype.thinInstanceAddSelf = function() {
      let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Op.b.IdentityReadOnly, pp)
    }, Sp.d.prototype.thinInstanceRegisterAttribute = function(pp, ip) {
      pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), this.removeVerticesData(pp), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[pp] = ip, this._userThinInstanceBuffersStorage.sizes[pp] = ip * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[pp] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[pp]), this._userThinInstanceBuffersStorage.vertexBuffers[pp] = new xp.j(this.gy(), this._userThinInstanceBuffersStorage.data[pp], pp, !0, !1, ip, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[pp])
    }, Sp.d.prototype.thinInstanceSetMatrixAt = function(pp, ip) {
      let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || pp >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Op = this._thinInstanceDataStorage.matrixData;
      return ip.copyToArray(Op, 16 * pp), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[pp] = ip), cp && (this.K3("matrix"), this.sy || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Sp.d.prototype.thinInstanceSetAttributeAt = function(pp, ip, cp) {
      let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[pp] || ip >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(pp, 0), this._userThinInstanceBuffersStorage.data[pp].set(cp, ip * this._userThinInstanceBuffersStorage.strides[pp]), Op && this.K3(pp), !0)
    }, Object.defineProperty(Sp.d.prototype, "f_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(pp) {
        const ip = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        pp <= (ip ? ip.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = pp)
      },
      enumerable: !0,
      configurable: !0
    }), Sp.d.prototype._thinInstanceCreateMatrixBuffer = function(pp, ip) {
      let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Op = new xp.b(this.gy(), ip, !cp, 16, !1, !0);
      for (let op = 0; op < 4; op++) this.setVerticesBuffer(Op.createVertexBuffer(pp + op, 4 * op, 4));
      return Op
    }, Sp.d.prototype.I9 = function(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (cp = cp || 16, "matrix" === pp) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ip ? ip.length : 32 * cp, this._thinInstanceDataStorage.matrixData = ip, this._thinInstanceDataStorage.worldMatrices = null, null !== ip ? (this._thinInstanceDataStorage.instancesCount = ip.length / cp, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ip, Op), this.sy || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.sy || this.refreshBoundingInfo());
      else if ("previousMatrix" === pp) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ip, null !== ip && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ip, Op));
      else if ("splatIndex" === pp && ip) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ip.length / cp, this._userThinInstanceBuffersStorage.data[pp] = ip, this._userThinInstanceBuffersStorage.strides[pp] = cp, this._userThinInstanceBuffersStorage.sizes[pp] = ip.length;
        const Op = new xp.b(this.gy(), ip, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Op;
        for (let ip = 0; ip < 4; ip++) this.setVerticesBuffer(Op.createVertexBuffer(pp + ip, 4 * ip, 4))
      } else pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), null === ip ? this._userThinInstanceBuffersStorage?.data[pp] && (this.removeVerticesData(pp), delete this._userThinInstanceBuffersStorage.data[pp], delete this._userThinInstanceBuffersStorage.strides[pp], delete this._userThinInstanceBuffersStorage.sizes[pp], delete this._userThinInstanceBuffersStorage.vertexBuffers[pp]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[pp] = ip, this._userThinInstanceBuffersStorage.strides[pp] = cp, this._userThinInstanceBuffersStorage.sizes[pp] = ip.length, this._userThinInstanceBuffersStorage.vertexBuffers[pp] = new xp.j(this.gy(), ip, pp, !Op, !1, cp, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[pp]))
    }, Sp.d.prototype.K3 = function(pp) {
      "matrix" === pp ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(pp), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === pp ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(pp), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === pp ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[pp], 0, this._thinInstanceDataStorage.instancesCount) : (pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[pp] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[pp].isUpdatable() && this._thinInstanceRecreateBuffer(pp), this._userThinInstanceBuffersStorage.vertexBuffers[pp].updateDirectly(this._userThinInstanceBuffersStorage.data[pp], 0)))
    }, Sp.d.prototype.thinInstancePartialBufferUpdate = function(pp, ip, cp) {
      if ("matrix" === pp) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ip ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * cp * Float32Array.BYTES_PER_ELEMENT, 16 * ip), 16 * cp) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(ip, cp));
      else if (pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[pp]) {
        const Op = this._userThinInstanceBuffersStorage.vertexBuffers[pp];
        if ("number" === typeof ip) {
          const Op = new Float32Array(this._userThinInstanceBuffersStorage.data[pp].buffer, this._userThinInstanceBuffersStorage.data[pp].byteOffset + cp * this._userThinInstanceBuffersStorage.strides[pp] * Float32Array.BYTES_PER_ELEMENT, ip * this._userThinInstanceBuffersStorage.strides[pp]);
          this._userThinInstanceBuffersStorage.vertexBuffers[pp].updateDirectly(Op, cp * this._userThinInstanceBuffersStorage.strides[pp])
        } else Op.updateDirectly(ip, cp)
      }
    }, Sp.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const pp = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let ip = 0; ip < this._thinInstanceDataStorage.instancesCount; ++ip) this._thinInstanceDataStorage.worldMatrices[ip] = Op.b.FromArray(pp, 16 * ip)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Sp.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Sp = this._thinInstanceDataStorage.boundingVectors;
      if (pp || !this.rawBoundingInfo) {
        if (Sp.length = 0, op && function(pp, ip, cp) {
            const op = pp._userThinInstanceBuffersStorage,
              Sp = op?.data[Lp],
              yp = op?.strides[Lp];
            if (!Sp || !yp || yp < 4 || !Yp(pp)) return !1;
            const Up = pp._thinInstanceDataStorage.matrixData;
            if (!Up) return !1;
            const wp = {},
              vp = Op.i.Vector4[0],
              tp = Op.i.Zy[1],
              Hp = Op.i.Zy[2],
              dp = Op.i.Zy[3],
              ep = Op.i.Zy[4],
              jp = Op.i.Zy[5],
              kp = Op.i.Zy[6],
              mp = Op.i.Matrix[2],
              Rp = pp.geometry ? pp.geometry.boundingBias : null,
              qp = pp.getTotalVertices();
            tp.E_(Number.POSITIVE_INFINITY), Hp.E_(Number.NEGATIVE_INFINITY), dp.E_(Number.POSITIVE_INFINITY), ep.E_(Number.NEGATIVE_INFINITY);
            for (let Ip = 0; Ip < pp._thinInstanceDataStorage.instancesCount; ++Ip) {
              const ip = Ip * yp;
              vp.set(Sp[ip], Sp[ip + 1], Sp[ip + 2], Sp[ip + 3]);
              const op = pp._getData({
                applyMorph: cp,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: vp,
                updatePositionsArray: !1,
                cache: wp
              }, null, xp.j.PositionKind);
              if (!op) return !1;
              Dp(op, qp, jp, kp), Ap(jp, kp, Rp), tp.minimizeInPlace(jp), Hp.maximizeInPlace(kp), Op.b.FromArrayToRef(Up, 16 * Ip, mp), Rp ? Pp(jp, kp, mp, dp, ep) : Wp(op, qp, mp, dp, ep)
            }
            return !(!isFinite(tp.x) || !isFinite(dp.x)) && (pp.bJ().reConstruct(dp, ep), pp.rawBoundingInfo = new Ip.d(tp, Hp), function(pp, ip) {
              pp.length = 0;
              for (let cp = 0; cp < ip.boundingBox.vectors.length; ++cp) pp.push(ip.boundingBox.vectors[cp].clone())
            }(ip, pp.rawBoundingInfo), pp._updateBoundingInfo(), !0)
          }(this, Sp, cp)) return;
        op && this.bakedVertexAnimationManager?.isEnabled && Yp(this) ? this.refreshBoundingInfo({
          applySkeleton: ip,
          applyMorph: cp,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(ip, cp);
        const pp = this.bJ();
        this.rawBoundingInfo = new Ip.d(pp.minimum, pp.maximum)
      }
      const yp = this.bJ(),
        Up = this._thinInstanceDataStorage.matrixData;
      if (0 === Sp.length)
        for (let Op = 0; Op < yp.boundingBox.vectors.length; ++Op) Sp.push(yp.boundingBox.vectors[Op].clone());
      Op.i.Zy[0].E_(Number.POSITIVE_INFINITY), Op.i.Zy[1].E_(Number.NEGATIVE_INFINITY);
      for (let Ip = 0; Ip < this._thinInstanceDataStorage.instancesCount; ++Ip) {
        Op.b.FromArrayToRef(Up, 16 * Ip, Op.i.Matrix[0]);
        for (let pp = 0; pp < Sp.length; ++pp) Op.o.TransformCoordinatesToRef(Sp[pp], Op.i.Matrix[0], Op.i.Zy[2]), Op.i.Zy[0].minimizeInPlace(Op.i.Zy[2]), Op.i.Zy[1].maximizeInPlace(Op.i.Zy[2])
      }
      yp.reConstruct(Op.i.Zy[0], Op.i.Zy[1]), this._updateBoundingInfo()
    }, Sp.d.prototype._thinInstanceRecreateBuffer = function(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === pp ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ip)) : "previousMatrix" === pp ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, ip)) : (pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[pp]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[pp] = new xp.j(this.gy(), this._userThinInstanceBuffersStorage.data[pp], pp, !ip, !1, this._userThinInstanceBuffersStorage.strides[pp], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[pp]))
    }, Sp.d.prototype._thinInstanceUpdateBufferSize = function(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind);
      const cp = "matrix" === pp;
      if (!cp && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[pp])) return;
      const Op = cp ? 16 : this._userThinInstanceBuffersStorage.strides[pp],
        op = cp ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[pp];
      let Ip = cp ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[pp];
      const Sp = (this._thinInstanceDataStorage.instancesCount + ip) * Op;
      let Lp = op;
      for (; Lp < Sp;) Lp *= 2;
      if (!Ip || op != Lp) {
        if (Ip) {
          const pp = new Float32Array(Lp);
          pp.set(Ip, 0), Ip = pp
        } else Ip = new Float32Array(Lp);
        cp ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Ip, !1), this._thinInstanceDataStorage.matrixData = Ip, this._thinInstanceDataStorage.matrixBufferSize = Lp, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Ip, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[pp]?.dispose(), this._userThinInstanceBuffersStorage.data[pp] = Ip, this._userThinInstanceBuffersStorage.sizes[pp] = Lp, this._userThinInstanceBuffersStorage.vertexBuffers[pp] = new xp.j(this.gy(), Ip, pp, !0, !1, Op, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[pp]))
      }
    }, Sp.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Sp.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40617: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => tp,
      d: () => Up
    });
    var Op, op, Ip, Sp, xp = cp(40203),
      Lp = cp(40210),
      Yp = cp(40233),
      Dp = cp(37349),
      Ap = cp(37320),
      Pp = cp(40415),
      Wp = cp(37368),
      yp = cp(40096);
    let Up = (() => {
      var pp;
      let ip, cp, Op, op, Ip, Sp, Wp, yp, Up, wp = Pp.b,
        vp = [],
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Rp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [];
      return pp = class extends wp {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(ip) {
          this._billboardMode !== ip && (this._billboardMode = ip, this._cache.useBillboardPosition = 0 !== (this._billboardMode & pp.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(pp) {
          this._infiniteDistance !== pp && (this._infiniteDistance = pp)
        }
        constructor(ip) {
          let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(ip, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Ap.o(0, 0, 1), this._up = new Ap.o(0, 1, 0), this._right = new Ap.o(1, 0, 0), this._position = (0, xp.l)(this, vp, Ap.o.Zero()), this._rotation = ((0, xp.l)(this, tp), (0, xp.l)(this, Hp, Ap.o.Zero())), this._rotationQuaternion = ((0, xp.l)(this, dp), (0, xp.l)(this, ep, null)), this._scaling = ((0, xp.l)(this, jp), (0, xp.l)(this, kp, Ap.o.One())), this._transformToBoneReferal = ((0, xp.l)(this, mp), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, xp.l)(this, Rp, pp.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, xp.l)(this, qp), (0, xp.l)(this, Mp, 1)), this._infiniteDistance = ((0, xp.l)(this, Cp), (0, xp.l)(this, Ep, !1)), this.ignoreNonUniformScaling = ((0, xp.l)(this, Xp), (0, xp.l)(this, lp, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, xp.l)(this, Qp), (0, xp.l)(this, Jp, !1)), this._poseMatrix = ((0, xp.l)(this, Bp), null), this._localMatrix = Ap.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Ap.o.Zero(), this._absoluteScaling = Ap.o.Zero(), this._absoluteRotationQuaternion = Ap.f.Identity(), this._pivotMatrix = Ap.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Dp.d, this._nonUniformScaling = !1, cp && this.Gl().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(pp) {
          this._position = pp, this._markAsDirtyInternal()
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
        set rotation(pp) {
          this._rotation = pp, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get ei() {
          return this._scaling
        }
        set ei(pp) {
          this._scaling = pp, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(pp) {
          this._rotationQuaternion = pp, pp && this._rotation.E_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Ap.o.TransformNormalFromFloatsToRef(0, 0, this.Gl().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Ap.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Ap.o.TransformNormalFromFloatsToRef(this.Gl().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(pp) {
          return this._poseMatrix ? (this._poseMatrix.rM(pp), this) : (this._poseMatrix = pp.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Ap.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const ip = this._cache;
          return this._billboardMode === ip.billboardMode && this._billboardMode === pp.BILLBOARDMODE_NONE && (!ip.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const pp = this._cache;
          pp.localMatrixUpdated = !1, pp.billboardMode = -1, pp.infiniteDistance = !1, pp.useBillboardPosition = !1
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
        setPreTransformMatrix(pp) {
          return this.setPivotMatrix(pp, !1)
        }
        setPivotMatrix(pp) {
          let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.rM(pp), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ip, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Ap.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            ip = arguments.length > 1 ? arguments[1] : void 0,
            cp = arguments.length > 2 ? arguments[2] : void 0;
          const Op = this.clone("Clone of " + (this.name || this.id), pp || this.parent, !0);
          Op && cp && cp(this, Op);
          for (const op of this.getChildTransformNodes(!0)) op.instantiateHierarchy(Op, ip, cp);
          return Op
        }
        iJ() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return pp ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.E_(0), this._rotationQuaternion = this._rotationQuaternion || Ap.f.Identity(), pp.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = pp, this._absolutePosition.i5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Rxp() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(pp) {
          if (!pp) return this;
          let ip, cp, Op;
          if (void 0 === pp.x) {
            if (arguments.length < 3) return this;
            ip = arguments[0], cp = arguments[1], Op = arguments[2]
          } else ip = pp.x, cp = pp.y, Op = pp.z;
          if (this.parent) {
            const pp = Ap.i.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(pp), Ap.o.TransformCoordinatesFromFloatsToRef(ip, cp, Op, pp, this.position)
          } else this.position.x = ip, this.position.y = cp, this.position.z = Op;
          return this._absolutePosition.rM(pp), this
        }
        setPositionWithLocalVector(pp) {
          return this.computeWorldMatrix(), this.position = Ap.o.TransformNormal(pp, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const pp = Ap.i.Matrix[0];
          return this._localMatrix.invertToRef(pp), Ap.o.TransformNormal(this.position, pp)
        }
        locallyTranslate(pp) {
          return this.computeWorldMatrix(!0), this.position = Ap.o.TransformCoordinates(pp, this._localMatrix), this
        }
        lookAt(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Sp = pp._LookAtVectorCache,
            xp = 0 === Ip ? this.position : this.getAbsolutePosition();
          if (ip.subtractToRef(xp, Sp), this.setDirection(Sp, cp, Op, op), 1 === Ip && this.parent)
            if (this.rotationQuaternion) {
              const pp = Ap.i.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(pp);
              const ip = Ap.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ip), ip.invert(), pp.multiplyToRef(ip, pp), this.rotationQuaternion.fromRotationMatrix(pp)
            } else {
              const pp = Ap.i.Quaternion[0];
              Ap.f.FromEulerVectorToRef(this.rotation, pp);
              const ip = Ap.i.Matrix[0];
              pp.toRotationMatrix(ip);
              const cp = Ap.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(cp), cp.invert(), ip.multiplyToRef(cp, ip), pp.fromRotationMatrix(ip), pp.toEulerAnglesToRef(this.rotation)
            } return this
        }
        hK(pp) {
          const ip = Ap.o.Zero();
          return this.getDirectionToRef(pp, ip), ip
        }
        getDirectionToRef(pp, ip) {
          return Ap.o.TransformNormalToRef(pp, this.getWorldMatrix(), ip), this
        }
        setDirection(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const op = -Math.atan2(pp.z, pp.x) + Math.PI / 2,
            Ip = Math.sqrt(pp.x * pp.x + pp.z * pp.z),
            Sp = -Math.atan2(pp.y, Ip);
          return this.rotationQuaternion ? Ap.f.RotationYawPitchRollToRef(op + ip, Sp + cp, Op, this.rotationQuaternion) : (this.rotation.x = Sp + cp, this.rotation.y = op + ip, this.rotation.z = Op), this
        }
        setPivotPoint(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Gl().getRenderId() && this.computeWorldMatrix(!0);
          const cp = this.getWorldMatrix();
          if (1 == ip) {
            const ip = Ap.i.Matrix[0];
            cp.invertToRef(ip), pp = Ap.o.TransformCoordinates(pp, ip)
          }
          return this.setPivotMatrix(Ap.b.Translation(-pp.x, -pp.y, -pp.z), !0)
        }
        getPivotPoint() {
          const pp = Ap.o.Zero();
          return this.getPivotPointToRef(pp), pp
        }
        getPivotPointToRef(pp) {
          return pp.x = -this._pivotMatrix.m[12], pp.y = -this._pivotMatrix.m[13], pp.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const pp = Ap.o.Zero();
          return this.getAbsolutePivotPointToRef(pp), pp
        }
        getAbsolutePivotPointToRef(pp) {
          return this.getPivotPointToRef(pp), Ap.o.TransformCoordinatesToRef(pp, this.getWorldMatrix(), pp), this
        }
        ocp(pp) {
          if (this._isDirty) return this;
          if (this._children)
            for (const ip of this._children) ip.ocp(pp);
          return super.ocp(pp)
        }
        setParent(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!ip && !this.parent) return this;
          const op = Ap.i.Quaternion[0],
            Ip = Ap.i.Zy[0],
            Sp = Ap.i.Zy[1],
            xp = Ap.i.Matrix[1];
          Ap.b.IdentityToRef(xp);
          const Lp = Ap.i.Matrix[0];
          this.computeWorldMatrix(!0);
          let Yp = this.rotationQuaternion;
          return Yp || (Yp = pp._TmpRotation, Ap.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Yp)), Ap.b.ComposeToRef(this.ei, Yp, this.position, Lp), this.parent && Lp.multiplyToRef(this.parent.computeWorldMatrix(!0), Lp), ip && (ip.computeWorldMatrix(!0).invertToRef(xp), Lp.multiplyToRef(xp, Lp)), Lp.decompose(Sp, op, Ip, cp ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.rM(op) : op.toEulerAnglesToRef(this.rotation), this.ei.rM(Sp), this.position.rM(Ip), this.parent = ip, Op && this.setPivotMatrix(Ap.b.Identity()), this
        }
        addChild(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return pp.setParent(this, ip), this
        }
        removeChild(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return pp.parent !== this || pp.setParent(null, ip), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(pp) {
          return this._nonUniformScaling !== pp && (this._nonUniformScaling = pp, !0)
        }
        attachToBone(pp, ip) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = ip, this.parent = pp, pp.getSkeleton().prepare(!0), pp.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = pp ? this._currentParentWhenAttachingToBone : null, this) : (pp && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(ip, cp, Op) {
          let op;
          if (ip.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.E_(0)), Op && 0 !== Op) {
            if (this.parent) {
              const pp = this.parent.getWorldMatrix(),
                Op = Ap.i.Matrix[0];
              pp.invertToRef(Op), ip = Ap.o.TransformNormal(ip, Op), pp.determinant() < 0 && (cp *= -1)
            }
            op = Ap.f.RotationAxisToRef(ip, cp, pp._RotationAxisCache), op.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else op = Ap.f.RotationAxisToRef(ip, cp, pp._RotationAxisCache), this.rotationQuaternion.multiplyToRef(op, this.rotationQuaternion);
          return this
        }
        rotateAround(pp, ip, cp) {
          ip.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Ap.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.E_(0));
          const Op = Ap.i.Zy[0],
            op = Ap.i.Zy[1],
            Ip = Ap.i.Zy[2],
            Sp = Ap.i.Quaternion[0],
            xp = Ap.i.Matrix[0],
            Lp = Ap.i.Matrix[1],
            Yp = Ap.i.Matrix[2],
            Dp = Ap.i.Matrix[3];
          return pp.subtractToRef(this.position, Op), Ap.b.TranslationToRef(Op.x, Op.y, Op.z, xp), Ap.b.TranslationToRef(-Op.x, -Op.y, -Op.z, Lp), Ap.b.RotationAxisToRef(ip, cp, Yp), Lp.multiplyToRef(Yp, Dp), Dp.multiplyToRef(xp, Dp), Dp.decompose(op, Sp, Ip), this.position.addInPlace(Ip), Sp.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(pp, ip, cp) {
          const Op = pp.scale(ip);
          if (cp && 0 !== cp) this.setAbsolutePosition(this.getAbsolutePosition().add(Op));
          else {
            const pp = this.getPositionExpressedInLocalSpace().add(Op);
            this.setPositionWithLocalVector(pp)
          }
          return this
        }
        addRotation(pp, ip, cp) {
          let Op;
          this.rotationQuaternion ? Op = this.rotationQuaternion : (Op = Ap.i.Quaternion[1], Ap.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Op));
          const op = Ap.i.Quaternion[0];
          return Ap.f.RotationYawPitchRollToRef(ip, pp, cp, op), Op.multiplyInPlace(op), this.rotationQuaternion || Op.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== pp.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Op = this.Gl().getRenderId();
          if (!this._isDirty && !ip && (this._currentRenderId === Op || this.isSynchronized())) return this._currentRenderId = Op, this._worldMatrix;
          cp = cp || this.Gl().activeCamera, this._updateCache();
          const op = this._cache;
          op.pivotMatrixUpdated = !1, op.billboardMode = this.billboardMode, op.infiniteDistance = this.infiniteDistance, op.parent = this._parentNode, this._currentRenderId = Op, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Ip = this._getEffectiveParent(),
            Sp = pp._TmpScaling;
          let xp, Lp = this._position;
          if (this._infiniteDistance && !this.parent && cp) {
            const ip = cp.getWorldMatrix().m;
            Lp = pp._TmpTranslation, Lp.i5(this._position.x + ip[12], this._position.y + ip[13], this._position.z + ip[14])
          }
          if (Sp.i5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, xp = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Ap.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.i5(0, 0, 0))
            }
          } else xp = pp._TmpRotation, Ap.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, xp);
          if (this._usePivotMatrix) {
            const pp = Ap.i.Matrix[1];
            Ap.b.ScalingToRef(Sp.x, Sp.y, Sp.z, pp);
            const ip = Ap.i.Matrix[0];
            xp.toRotationMatrix(ip), this._pivotMatrix.multiplyToRef(pp, Ap.i.Matrix[4]), Ap.i.Matrix[4].multiplyToRef(ip, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Lp.x, Lp.y, Lp.z)
          } else Ap.b.ComposeToRef(Sp, xp, Lp, this._localMatrix);
          if (Ip && Ip.getWorldMatrix) {
            if (ip && Ip.computeWorldMatrix(ip), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const pp = this.parent;
                pp.getSkeleton().prepare(), pp.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Ap.i.Matrix[7])
              } else Ap.i.Matrix[7].rM(Ip.getWorldMatrix());
              const ip = Ap.i.Zy[5],
                cp = Ap.i.Zy[6],
                Op = Ap.i.Quaternion[0];
              Ap.i.Matrix[7].decompose(cp, Op, ip), Ap.b.ScalingToRef(cp.x, cp.y, cp.z, Ap.i.Matrix[7]), Ap.i.Matrix[7].setTranslation(ip), pp.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Op, ip), this._localMatrix.setTranslation(ip)), this._localMatrix.multiplyToRef(Ap.i.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const pp = this.parent;
              pp.getSkeleton().prepare(), this._localMatrix.multiplyToRef(pp.getFinalMatrix(), Ap.i.Matrix[6]), Ap.i.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Ip.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.rM(this._localMatrix);
          if (cp && this.billboardMode)
            if (op.useBillboardPosition) {
              const ip = Ap.i.Zy[0];
              this._worldMatrix.getTranslationToRef(ip);
              const Op = cp.globalPosition;
              this._worldMatrix.invertToRef(Ap.i.Matrix[1]);
              const op = Ap.i.Zy[1];
              Ap.o.TransformCoordinatesToRef(Op, Ap.i.Matrix[1], op), op.normalize();
              const Ip = -Math.atan2(op.z, op.x) + Math.PI / 2,
                Sp = Math.sqrt(op.x * op.x + op.z * op.z),
                xp = -Math.atan2(op.y, Sp);
              if (Ap.f.RotationYawPitchRollToRef(Ip, xp, 0, Ap.i.Quaternion[0]), (this.billboardMode & pp.BILLBOARDMODE_ALL) !== pp.BILLBOARDMODE_ALL) {
                const ip = Ap.i.Zy[1];
                Ap.i.Quaternion[0].toEulerAnglesToRef(ip), (this.billboardMode & pp.BILLBOARDMODE_X) !== pp.BILLBOARDMODE_X && (ip.x = 0), (this.billboardMode & pp.BILLBOARDMODE_Y) !== pp.BILLBOARDMODE_Y && (ip.y = 0), (this.billboardMode & pp.BILLBOARDMODE_Z) !== pp.BILLBOARDMODE_Z && (ip.z = 0), Ap.b.RotationYawPitchRollToRef(ip.y, ip.x, ip.z, Ap.i.Matrix[0])
              } else Ap.b.FromQuaternionToRef(Ap.i.Quaternion[0], Ap.i.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ap.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ap.i.Zy[0])
            } else {
              const ip = Ap.i.Zy[0];
              this._worldMatrix.getTranslationToRef(ip), Ap.i.Matrix[1].rM(cp.getViewMatrix());
              const Op = this.Gl().useRightHandedSystem;
              if (Op && Ap.i.Matrix[1].multiplyToRef(pp._TmpRHRestore, Ap.i.Matrix[1]), Ap.i.Matrix[1].setTranslationFromFloats(0, 0, 0), Ap.i.Matrix[1].invertToRef(Ap.i.Matrix[0]), (this.billboardMode & pp.BILLBOARDMODE_ALL) !== pp.BILLBOARDMODE_ALL) {
                Ap.i.Matrix[0].decompose(void 0, Ap.i.Quaternion[0], void 0);
                const ip = Ap.i.Zy[1];
                Ap.i.Quaternion[0].toEulerAnglesToRef(ip), (this.billboardMode & pp.BILLBOARDMODE_X) !== pp.BILLBOARDMODE_X && (ip.x = 0), (this.billboardMode & pp.BILLBOARDMODE_Y) !== pp.BILLBOARDMODE_Y && (ip.y = 0), (this.billboardMode & pp.BILLBOARDMODE_Z) !== pp.BILLBOARDMODE_Z && (ip.z = 0), Op && (ip.y += Math.PI), Ap.b.RotationYawPitchRollToRef(ip.y, ip.x, ip.z, Ap.i.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ap.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ap.i.Zy[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Ip && Ip._nonUniformScaling ? this._updateNonUniformScalingState(Ip._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.i5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Ap.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), pp) {
            const pp = this.getChildren();
            for (let ip = 0; ip < pp.length; ++ip) {
              const cp = pp[ip];
              if (cp) {
                cp.computeWorldMatrix();
                const pp = Ap.i.Matrix[0];
                cp._localMatrix.multiplyToRef(this._localMatrix, pp);
                const ip = Ap.i.Quaternion[0];
                pp.decompose(cp.ei, ip, cp.position), cp.rotationQuaternion ? cp.rotationQuaternion.rM(ip) : ip.toEulerAnglesToRef(cp.rotation)
              }
            }
          }
          this.ei.i5(1, 1, 1), this.position.i5(0, 0, 0), this.rotation.i5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ap.f.Identity()), this._worldMatrix = Ap.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(pp) {
          return this.onAfterWorldMatrixUpdateObservable.add(pp), this
        }
        unregisterAfterWorldMatrixUpdate(pp) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(pp), this
        }
        getPositionInCameraSpace() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return pp || (pp = this.Gl().activeCamera), Ap.o.TransformCoordinates(this.getAbsolutePosition(), pp.getViewMatrix())
        }
        getDistanceToCamera() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return pp || (pp = this.Gl().activeCamera), this.getAbsolutePosition().subtract(pp.globalPosition).length()
        }
        clone(ip, cp, Op) {
          const op = Yp.c.Clone((() => new pp(ip, this.Gl())), this);
          if (op.name = ip, op.id = ip, cp && (op.parent = cp), !Op) {
            const pp = this.getDescendants(!0);
            for (let cp = 0; cp < pp.length; cp++) {
              const Op = pp[cp];
              Op.clone && Op.clone(ip + "." + Op.name, op)
            }
          }
          return op
        }
        serialize(pp) {
          const ip = Yp.c.Serialize(this, pp);
          return ip.type = this.getClassName(), ip.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ip), ip.localMatrix = this.getPivotMatrix().BOp(), ip.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ip.iJ = !0), Yp.c.AppendSerializedAnimations(this, ip), ip.By = this.serializeAnimationRanges(), ip
        }
        getChildTransformNodes(ip, cp) {
          const Op = [];
          return this._getDescendants(Op, ip, (ip => (!cp || cp(ip)) && ip instanceof pp)), Op
        }
        dispose(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Gl().stopAnimation(this), this.Gl().removeTransformNode(this), this._parentContainer) {
            const pp = this._parentContainer.transformNodes.indexOf(this);
            pp > -1 && this._parentContainer.transformNodes.splice(pp, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), pp) {
            const pp = this.getChildTransformNodes(!0);
            for (const ip of pp) ip.parent = null, ip.computeWorldMatrix(!0)
          }
          super.dispose(pp, ip)
        }
        normalizeToUnitCube() {
          let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cp = arguments.length > 2 ? arguments[2] : void 0,
            Op = null,
            op = null;
          ip && (this.rotationQuaternion ? (op = this.rotationQuaternion.clone(), this.rotationQuaternion.i5(0, 0, 0, 1)) : this.rotation && (Op = this.rotation.clone(), this.rotation.i5(0, 0, 0)));
          const Ip = this.getHierarchyBoundingVectors(pp, cp),
            Sp = Ip.max.subtract(Ip.min),
            xp = Math.max(Sp.x, Sp.y, Sp.z);
          if (0 === xp) return this;
          const Lp = 1 / xp;
          return this.ei.scaleInPlace(Lp), ip && (this.rotationQuaternion && op ? this.rotationQuaternion.rM(op) : this.rotation && Op && this.rotation.rM(Op)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Yp = "function" === typeof Symbol && Symbol.metadata ? Object.create(wp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, Lp.H)("position")], cp = [(0, Lp.H)("rotation")], Op = [(0, Lp.y)("rotationQuaternion")], op = [(0, Lp.H)("ei")], Ip = [(0, Lp.K)("billboardMode")], Sp = [(0, Lp.K)()], Wp = [(0, Lp.K)("infiniteDistance")], yp = [(0, Lp.K)()], Up = [(0, Lp.K)()], (0, xp.j)(null, null, ip, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: pp => "_position" in pp,
            get: pp => pp._position,
            set: (pp, ip) => {
              pp._position = ip
            }
          },
          metadata: Yp
        }, vp, tp), (0, xp.j)(null, null, cp, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: pp => "_rotation" in pp,
            get: pp => pp._rotation,
            set: (pp, ip) => {
              pp._rotation = ip
            }
          },
          metadata: Yp
        }, Hp, dp), (0, xp.j)(null, null, Op, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: pp => "_rotationQuaternion" in pp,
            get: pp => pp._rotationQuaternion,
            set: (pp, ip) => {
              pp._rotationQuaternion = ip
            }
          },
          metadata: Yp
        }, ep, jp), (0, xp.j)(null, null, op, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: pp => "_scaling" in pp,
            get: pp => pp._scaling,
            set: (pp, ip) => {
              pp._scaling = ip
            }
          },
          metadata: Yp
        }, kp, mp), (0, xp.j)(null, null, Ip, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "_billboardMode" in pp,
            get: pp => pp._billboardMode,
            set: (pp, ip) => {
              pp._billboardMode = ip
            }
          },
          metadata: Yp
        }, Rp, qp), (0, xp.j)(null, null, Sp, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: pp => "scalingDeterminant" in pp,
            get: pp => pp.scalingDeterminant,
            set: (pp, ip) => {
              pp.scalingDeterminant = ip
            }
          },
          metadata: Yp
        }, Mp, Cp), (0, xp.j)(null, null, Wp, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: pp => "_infiniteDistance" in pp,
            get: pp => pp._infiniteDistance,
            set: (pp, ip) => {
              pp._infiniteDistance = ip
            }
          },
          metadata: Yp
        }, Ep, Xp), (0, xp.j)(null, null, yp, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: pp => "ignoreNonUniformScaling" in pp,
            get: pp => pp.ignoreNonUniformScaling,
            set: (pp, ip) => {
              pp.ignoreNonUniformScaling = ip
            }
          },
          metadata: Yp
        }, lp, Qp), (0, xp.j)(null, null, Up, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: pp => "reIntegrateRotationIntoRotationQuaternion" in pp,
            get: pp => pp.reIntegrateRotationIntoRotationQuaternion,
            set: (pp, ip) => {
              pp.reIntegrateRotationIntoRotationQuaternion = ip
            }
          },
          metadata: Yp
        }, Jp, Bp), Yp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Yp
        })
      })(), pp.BILLBOARDMODE_NONE = 0, pp.BILLBOARDMODE_X = 1, pp.BILLBOARDMODE_Y = 2, pp.BILLBOARDMODE_Z = 4, pp.BILLBOARDMODE_ALL = 7, pp.BILLBOARDMODE_USE_POSITION = 128, pp.BillboardUseParentOrientation = !1, pp._TmpRotation = Ap.f.Zero(), pp._TmpScaling = Ap.o.Zero(), pp._TmpTranslation = Ap.o.Zero(), pp._TmpRHRestore = Ap.b.Scaling(1, 1, -1), pp._LookAtVectorCache = new Ap.o(0, 0, 0), pp._RotationAxisCache = new Ap.f, pp
    })();

    function wp(pp, ip, cp) {
      const Op = Yp.c.Parse((() => new Up(pp.name, ip)), pp, ip, cp);
      if (pp.localMatrix ? Op.setPreTransformMatrix(Ap.b.FromArray(pp.localMatrix)) : pp.pivotMatrix && Op.setPivotMatrix(Ap.b.FromArray(pp.pivotMatrix)), Op.eC(pp.isEnabled), Op._waitingParsedUniqueId = pp.uniqueId, void 0 !== pp.parentId && (Op._waitingParentId = pp.parentId), void 0 !== pp.parentInstanceIndex && (Op._waitingParentInstanceIndex = pp.parentInstanceIndex), pp.iJ && (Op._waitingFreezeWorldMatrix = pp.iJ), pp.animations) {
        for (let ip = 0; ip < pp.animations.length; ip++) {
          const cp = pp.animations[ip],
            op = (0, Wp.d)("BABYLON.Animation");
          op && Op.animations.push(op.Parse(cp))
        }
        Pp.b.ParseAnimationRanges(Op, pp, ip)
      }
      return pp.autoAnimate && ip.beginAnimation(Op, pp.autoAnimateFrom, pp.autoAnimateTo, pp.autoAnimateLoop, pp.autoAnimateSpeed || 1), Op
    }
    let vp = !1;

    function tp() {
      vp || (vp = !0, Up.Parse = wp)
    }(Op = Up.prototype).fn ?? (Op.fn = (0, yp.k)("TransformNode", "fn")), (op = Up.prototype).applyImpulse ?? (op.applyImpulse = (0, yp.k)("TransformNode", "applyImpulse")), (Ip = Up.prototype).applyAngularImpulse ?? (Ip.applyAngularImpulse = (0, yp.k)("TransformNode", "applyAngularImpulse")), (Sp = Up.prototype).applyTorque ?? (Sp.applyTorque = (0, yp.k)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Up.prototype, "physicsBody") || Object.defineProperty(Up.prototype, "physicsBody", (0, yp.h)("TransformNode", "physicsBody"))
  },
  40586: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      try {
        const Op = pp.next();
        Op.done ? ip(Op) : Op.value ? Op.value.then((() => {
          Op.value = void 0, ip(Op)
        }), cp) : ip(Op)
      } catch (Op) {
        cp(Op)
      }
    }

    function op() {
      let pp, ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (cp, op, Ip) => {
        const Sp = performance.now();
        void 0 === pp || Sp - pp > ip ? (pp = Sp, setTimeout((() => {
          Op(cp, op, Ip)
        }), 0)) : Op(cp, op, Ip)
      }
    }

    function Ip(pp, ip, cp, Op, op) {
      const Ip = () => {
        let Sp;
        const xp = pp => {
          pp.done ? cp(pp.value) : void 0 === Sp ? Sp = !0 : Ip()
        };
        do {
          Sp = void 0, op && op.aborted ? Op(new Error("Aborted")) : ip(pp, xp, Op), void 0 === Sp && (Sp = !1)
        } while (Sp)
      };
      Ip()
    }

    function Sp(pp, ip) {
      let cp;
      return Ip(pp, Op, (pp => cp = pp), (pp => {
        throw pp
      }), ip), cp
    }
    async function xp(pp, ip, cp) {
      return await new Promise(((Op, op) => {
        Ip(pp, ip, Op, op, cp)
      }))
    }

    function Lp(pp, ip) {
      return function() {
        return Sp(pp(...arguments), ip)
      }
    }
    cp.d(ip, {
      c: () => op,
      d: () => Lp,
      e: () => xp,
      g: () => Sp
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);