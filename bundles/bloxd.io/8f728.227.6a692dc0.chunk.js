export const id = 227;
export const ids = [227];
export const modules = {
  38251: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => tB,
      h: () => zB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(38158),
      uc = nc(35783),
      sc = nc(35756),
      Mc = nc(38255),
      Pc = nc(37191),
      qB = nc(35799),
      Oc = nc(37953),
      Tc = nc(36675),
      fc = nc(36327),
      mB = nc(38010),
      ec = nc(38068);
    let tB = (() => {
      var cB;
      let Bc, nc, qB, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc = Mc.c,
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Xc = [],
        Hc = [],
        Fc = [],
        Jc = [],
        jB = [],
        Rc = [],
        iB = [],
        Kc = [],
        xB = [],
        dc = [],
        Ac = [],
        Gc = [],
        cn = [],
        BB = [],
        nB = [],
        VB = [],
        IB = [];
      return cB = class extends Cc {
        get position() {
          return this._position
        }
        set position(cB) {
          this._position = cB
        }
        set upVector(cB) {
          this._upVector = cB
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Bc, nc;
          if (this.mode === cB.PERSPECTIVE_CAMERA) this.fovMode === cB.FOVMODE_VERTICAL_FIXED ? (nc = 2 * this.minZ * Math.tan(this.fov / 2), Bc = this.RV().getAspectRatio(this) * nc) : (Bc = 2 * this.minZ * Math.tan(this.fov / 2), nc = Bc / this.RV().getAspectRatio(this));
          else {
            const cB = this.RV().getRenderWidth() / 2,
              Vc = this.RV().getRenderHeight() / 2;
            Bc = (this.orthoRight ?? cB) - (this.orthoLeft ?? -cB), nc = (this.orthoTop ?? Vc) - (this.orthoBottom ?? -Vc)
          }
          return Bc * nc
        }
        set orthoLeft(cB) {
          this._orthoLeft = cB;
          for (const Bc of this._rigCameras) Bc.orthoLeft = cB
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(cB) {
          this._orthoRight = cB;
          for (const Bc of this._rigCameras) Bc.orthoRight = cB
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(cB) {
          this._orthoBottom = cB;
          for (const Bc of this._rigCameras) Bc.orthoBottom = cB
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(cB) {
          this._orthoTop = cB;
          for (const Bc of this._rigCameras) Bc.orthoTop = cB
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Bc / (2 * cB))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(cB) {
          this._baseInertia = cB
        }
        set mode(cB) {
          this._mode = cB;
          for (const Bc of this._rigCameras) Bc.mode = cB
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Bc, nc, Ic) {
          let Mc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, mB.b)(), super(Bc, Ic, !1), this.inputs = (0, Vc.k)(this, vB), this._position = (0, Vc.k)(this, Dc, sc.p.Zero()), this._upVector = ((0, Vc.k)(this, Nc), (0, Vc.k)(this, Ec, sc.p.Up())), this.oblique = ((0, Vc.k)(this, oc), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Vc.k)(this, Wc, .8), this.projectionPlaneTilt = ((0, Vc.k)(this, wc), (0, Vc.k)(this, kB, 0)), this.minZ = ((0, Vc.k)(this, Xc), (0, Vc.k)(this, Hc, 1)), this.maxZ = ((0, Vc.k)(this, Fc), (0, Vc.k)(this, Jc, 1e4)), this._baseInertia = ((0, Vc.k)(this, jB), .9), this._mode = cB.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Tc.c(0, 0, 1, 1), this.layerMask = (0, Vc.k)(this, Rc, 268435455), this.fovMode = ((0, Vc.k)(this, iB), (0, Vc.k)(this, Kc, cB.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Vc.k)(this, xB), (0, Vc.k)(this, dc, cB.RIG_MODE_NONE)), this.interaxialDistance = ((0, Vc.k)(this, Ac), (0, Vc.k)(this, Gc, void 0)), this.isStereoscopicSideBySide = ((0, Vc.k)(this, cn), (0, Vc.k)(this, BB, void 0)), this.ignoreCameraMaxZ = ((0, Vc.k)(this, nB), (0, Vc.k)(this, VB, !1)), this.customRenderTargets = ((0, Vc.k)(this, IB), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new uc.c, this.onProjectionMatrixChangedObservable = new uc.c, this.onAfterCheckInputsObservable = new uc.c, this.onRestoreStateObservable = new uc.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new sc.d, this._postProcesses = new Array, this._activeMeshes = new rB.e(256), this._globalPosition = sc.p.Zero(), this._computedViewMatrix = sc.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = sc.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = sc.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.knc().defaultCameraLayerMask, this.knc().addCamera(this), Mc && !this.knc().activeCamera && (this.knc().activeCamera = this), this.position = nc, this.renderPassId = this.knc().RV().createRenderPassId(`Camera ${Bc}`)
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
          return "cM"
        }
        toString(cB) {
          let Bc = "Name: " + this.name;
          if (Bc += ", type: " + this.getClassName(), this.animations)
            for (let nc = 0; nc < this.animations.length; nc++) Bc += ", animation[0]: " + this.animations[nc].toString(cB);
          return Bc
        }
        applyVerticalCorrection() {
          const cB = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -cB.x : cB.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(cB) {
          return -1 !== this._activeMeshes.indexOf(cB)
        }
        isReady() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (cB)
            for (const Bc of this._postProcesses)
              if (Bc && !Bc.isReady()) return !1;
          return super.isReady(cB)
        }
        _initCache() {
          super._initCache(), this._cache.position = new sc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new sc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(cB) {
          cB || super._updateCache(), this._cache.position.qqc(this.position), this._cache.upVector.qqc(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Bc = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let nc = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Bc;
          if (!nc) return !1;
          const Vc = this.RV();
          return this.mode === cB.PERSPECTIVE_CAMERA ? nc = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Vc.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (nc = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Vc.getRenderWidth() && this._cache.renderHeight === Vc.getRenderHeight(), this.oblique && (nc = nc && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), nc
        }
        attachControl(cB, Bc) {}
        detachControl(cB) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== cB.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let cB = 0; cB < this._postProcesses.length; cB++)
            if (null !== this._postProcesses[cB]) return this._postProcesses[cB];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const cB = this._getFirstPostProcess();
          cB && cB.markTextureDirty();
          for (let Bc = 0, nc = this._rigCameras.length; Bc < nc; Bc++) {
            const cB = this._rigCameras[Bc],
              nc = cB._rigPostProcess;
            if (nc) {
              "pass" === nc.getEffectName() && (cB.isIntermediate = 0 === this._postProcesses.length), cB._postProcesses = this._postProcesses.slice(0).concat(nc), nc.markTextureDirty()
            } else cB._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !cB.isReusable() && this._postProcesses.indexOf(cB) > -1 ? (Pc.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Bc || Bc < 0 ? this._postProcesses.push(cB) : null === this._postProcesses[Bc] ? this._postProcesses[Bc] = cB : this._postProcesses.splice(Bc, 0, cB), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.SMc(), this._postProcesses.indexOf(cB))
        }
        detachPostProcess(cB) {
          const Bc = this._postProcesses.indexOf(cB); - 1 !== Bc && (this._postProcesses[Bc] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.SMc(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return sc.d.Identity()
        }
        getViewMatrix(cB) {
          return !cB && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.knc().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(cB) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== cB && (this._projectionMatrix = cB)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Bc) {
          if (this._doNotComputeProjectionMatrix || !Bc && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const nc = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = nc, this._refreshFrustumPlanes = !0;
          const Vc = this.RV(),
            Ic = this.knc(),
            rB = Vc.HPc;
          if (this.mode === cB.PERSPECTIVE_CAMERA) {
            let Bc;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Vc.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Bc = Ic.useRightHandedSystem ? sc.d.PerspectiveFovRHToRef : sc.d.PerspectiveFovLHToRef, Bc(this.fov, Vc.getAspectRatio(this), rB ? nc : this.minZ, rB ? this.minZ : nc, this._projectionMatrix, this.fovMode === cB.FOVMODE_VERTICAL_FIXED, Vc.isNDCHalfZRange, this.projectionPlaneTilt, rB)
          } else {
            const cB = Vc.getRenderWidth() / 2,
              Bc = Vc.getRenderHeight() / 2;
            Ic.useRightHandedSystem ? this.oblique ? sc.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -cB, this.orthoRight ?? cB, this.orthoBottom ?? -Bc, this.orthoTop ?? Bc, rB ? nc : this.minZ, rB ? this.minZ : nc, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Vc.isNDCHalfZRange) : sc.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -cB, this.orthoRight ?? cB, this.orthoBottom ?? -Bc, this.orthoTop ?? Bc, rB ? nc : this.minZ, rB ? this.minZ : nc, this._projectionMatrix, Vc.isNDCHalfZRange) : this.oblique ? sc.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -cB, this.orthoRight ?? cB, this.orthoBottom ?? -Bc, this.orthoTop ?? Bc, rB ? nc : this.minZ, rB ? this.minZ : nc, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Vc.isNDCHalfZRange) : sc.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -cB, this.orthoRight ?? cB, this.orthoBottom ?? -Bc, this.orthoTop ?? Bc, rB ? nc : this.minZ, rB ? this.minZ : nc, this._projectionMatrix, Vc.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Vc.getRenderWidth(), this._cache.renderHeight = Vc.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(cB) {
          return (this.radius || (this.target ? sc.p.Distance(this.position, this.target) : this.position.length())) + cB
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? fc.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = fc.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Bc && this.rigCameras.length > 0) {
            let Bc = !1;
            for (const nc of this.rigCameras) nc._updateFrustumPlanes(), Bc = Bc || cB.isInFrustum(nc._frustumPlanes);
            return Bc
          }
          return cB.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(cB) {
          return this._updateFrustumPlanes(), cB.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Oc.k)("Ray")
        }
        getForwardRayToRef(cB) {
          throw (0, Oc.k)("Ray")
        }
        dispose(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.knc().stopAnimation(this), this.knc().removeCamera(this); this._rigCameras.length > 0;) {
            const cB = this._rigCameras.pop();
            cB && cB.dispose()
          }
          if (this._parentContainer) {
            const cB = this._parentContainer.cameras.indexOf(this);
            cB > -1 && this._parentContainer.cameras.splice(cB, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== cB.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let cB = this._postProcesses.length;
            for (; --cB >= 0;) {
              const Bc = this._postProcesses[cB];
              Bc && Bc.dispose(this)
            }
          }
          let Vc = this.customRenderTargets.length;
          for (; --Vc >= 0;) this.customRenderTargets[Vc].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.knc().RV().releaseRenderPassId(this.renderPassId), super.dispose(Bc, nc)
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
        setCameraRigMode(Bc, nc) {
          if (this.cameraRigMode !== Bc) {
            for (; this._rigCameras.length > 0;) {
              const cB = this._rigCameras.pop();
              cB && cB.dispose()
            }
            if (this.cameraRigMode = Bc, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = nc.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== cB.RIG_MODE_NONE) {
              const cB = this.createRigCamera(this.name + "_L", 0);
              cB && (cB._isLeftCamera = !0);
              const Bc = this.createRigCamera(this.name + "_R", 1);
              Bc && (Bc._isRightCamera = !0), cB && Bc && (this._rigCameras.push(cB), this._rigCameras.push(Bc))
            }
            this._setRigMode(nc), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(cB) {}
        _getVRProjectionMatrix() {
          return sc.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.RV().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(cB, Bc) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[cB] = Bc, "interaxialDistance" === cB && (this._cameraRigParams.stereoHalfAngle = Bc / .0637 * (Math.PI / 180))
        }
        createRigCamera(cB, Bc) {
          return null
        }
        _updateRigCameras() {
          for (let cB = 0; cB < this._rigCameras.length; cB++) this._rigCameras[cB].minZ = this.minZ, this._rigCameras[cB].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[cB].fov = this.fov, this._rigCameras[cB].upVector.qqc(this.upVector);
          this.cameraRigMode === cB.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const cB = ec.e.Serialize(this);
          return cB.uniqueId = this.uniqueId, cB.type = this.getClassName(), this.parent && this.parent._serializeAsParent(cB), this.inputs && this.inputs.serialize(cB), ec.e.AppendSerializedAnimations(this, cB), cB.Iu = this.serializeAnimationRanges(), cB.isEnabled = this.isEnabled(), cB
        }
        clone(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Vc = ec.e.Clone(cB.GetConstructorFromName(this.getClassName(), Bc, this.knc(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Vc.name = Bc, Vc.parent = nc, this.onClonedObservable.notifyObservers(Vc), Vc
        }
        fIc(cB) {
          const Bc = sc.p.Zero();
          return this.getDirectionToRef(cB, Bc), Bc
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(cB, Bc) {
          sc.p.TransformNormalToRef(cB, this.getWorldMatrix(), Bc)
        }
        static GetConstructorFromName(Bc, nc, Vc) {
          let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            rB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const uc = Mc.c.Construct(Bc, nc, Vc, {
            interaxial_distance: Ic,
            isStereoscopicSideBySide: rB
          });
          return uc || (() => cB._CreateDefaultParsedCamera(nc, Vc))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let cB = this.knc().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (cB *= -1), cB
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Ic.L)("position")], nc = [(0, Ic.L)("upVector")], qB = [(0, Ic.M)()], tB = [(0, Ic.M)()], Sc = [(0, Ic.M)()], yB = [(0, Ic.M)()], zB = [(0, Ic.M)()], pc = [(0, Ic.M)()], hc = [(0, Ic.M)()], aB = [(0, Ic.M)()], lc = [(0, Ic.M)()], Yc = [(0, Ic.M)()], Lc = [(0, Ic.M)()], gB = [(0, Ic.M)()], Uc = [(0, Ic.M)()], bB = [(0, Ic.M)()], Zc = [(0, Ic.M)()], Qc = [(0, Ic.M)()], (0, Vc.g)(cB, null, qB, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: cB => "orthoLeft" in cB,
            get: cB => cB.orthoLeft
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(cB, null, tB, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: cB => "orthoRight" in cB,
            get: cB => cB.orthoRight
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(cB, null, Sc, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: cB => "orthoBottom" in cB,
            get: cB => cB.orthoBottom
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(cB, null, yB, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: cB => "orthoTop" in cB,
            get: cB => cB.orthoTop
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(cB, null, lc, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: cB => "inertia" in cB,
            get: cB => cB.inertia
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(cB, null, Yc, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: cB => "mode" in cB,
            get: cB => cB.mode
          },
          metadata: rB
        }, null, vB), (0, Vc.g)(null, null, Bc, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: cB => "_position" in cB,
            get: cB => cB._position,
            set: (cB, Bc) => {
              cB._position = Bc
            }
          },
          metadata: rB
        }, Dc, Nc), (0, Vc.g)(null, null, nc, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: cB => "_upVector" in cB,
            get: cB => cB._upVector,
            set: (cB, Bc) => {
              cB._upVector = Bc
            }
          },
          metadata: rB
        }, Ec, oc), (0, Vc.g)(null, null, zB, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: cB => "fov" in cB,
            get: cB => cB.fov,
            set: (cB, Bc) => {
              cB.fov = Bc
            }
          },
          metadata: rB
        }, Wc, wc), (0, Vc.g)(null, null, pc, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: cB => "projectionPlaneTilt" in cB,
            get: cB => cB.projectionPlaneTilt,
            set: (cB, Bc) => {
              cB.projectionPlaneTilt = Bc
            }
          },
          metadata: rB
        }, kB, Xc), (0, Vc.g)(null, null, hc, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "minZ" in cB,
            get: cB => cB.minZ,
            set: (cB, Bc) => {
              cB.minZ = Bc
            }
          },
          metadata: rB
        }, Hc, Fc), (0, Vc.g)(null, null, aB, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "maxZ" in cB,
            get: cB => cB.maxZ,
            set: (cB, Bc) => {
              cB.maxZ = Bc
            }
          },
          metadata: rB
        }, Jc, jB), (0, Vc.g)(null, null, Lc, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: cB => "layerMask" in cB,
            get: cB => cB.layerMask,
            set: (cB, Bc) => {
              cB.layerMask = Bc
            }
          },
          metadata: rB
        }, Rc, iB), (0, Vc.g)(null, null, gB, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "fovMode" in cB,
            get: cB => cB.fovMode,
            set: (cB, Bc) => {
              cB.fovMode = Bc
            }
          },
          metadata: rB
        }, Kc, xB), (0, Vc.g)(null, null, Uc, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "cameraRigMode" in cB,
            get: cB => cB.cameraRigMode,
            set: (cB, Bc) => {
              cB.cameraRigMode = Bc
            }
          },
          metadata: rB
        }, dc, Ac), (0, Vc.g)(null, null, bB, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: cB => "interaxialDistance" in cB,
            get: cB => cB.interaxialDistance,
            set: (cB, Bc) => {
              cB.interaxialDistance = Bc
            }
          },
          metadata: rB
        }, Gc, cn), (0, Vc.g)(null, null, Zc, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: cB => "isStereoscopicSideBySide" in cB,
            get: cB => cB.isStereoscopicSideBySide,
            set: (cB, Bc) => {
              cB.isStereoscopicSideBySide = Bc
            }
          },
          metadata: rB
        }, BB, nB), (0, Vc.g)(null, null, Qc, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "ignoreCameraMaxZ" in cB,
            get: cB => cB.ignoreCameraMaxZ,
            set: (cB, Bc) => {
              cB.ignoreCameraMaxZ = Bc
            }
          },
          metadata: rB
        }, VB, IB), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB._CreateDefaultParsedCamera = (cB, Bc) => {
        throw (0, Oc.k)("UniversalCamera")
      }, cB.PERSPECTIVE_CAMERA = 0, cB.ORTHOGRAPHIC_CAMERA = 1, cB.FOVMODE_VERTICAL_FIXED = 0, cB.FOVMODE_HORIZONTAL_FIXED = 1, cB.RIG_MODE_NONE = 0, cB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, cB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, cB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, cB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, cB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, cB.RIG_MODE_VR = 20, cB.RIG_MODE_CUSTOM = 22, cB.ForceAttachControlToAlwaysPreventDefault = !1, cB
    })();

    function Sc(cB, Bc) {
      const nc = cB.type,
        Vc = tB.GetConstructorFromName(nc, cB.name, Bc, cB.interaxial_distance, cB.isStereoscopicSideBySide),
        Ic = ec.e.Parse(Vc, cB, Bc);
      if (void 0 !== cB.parentId && (Ic._waitingParentId = cB.parentId), void 0 !== cB.parentInstanceIndex && (Ic._waitingParentInstanceIndex = cB.parentInstanceIndex), Ic.inputs && (Ic.inputs.parse(cB), Ic._setupInputs()), cB.upVector && (Ic.upVector = sc.p.FromArray(cB.upVector)), Ic.setPosition && (Ic.position.puc(0, 0, 0), Ic.setPosition(sc.p.FromArray(cB.position))), cB.target && Ic.setTarget && Ic.setTarget(sc.p.FromArray(cB.target)), cB.cameraRigMode) {
        const Bc = cB.interaxial_distance ? {
          interaxialDistance: cB.interaxial_distance
        } : {};
        Ic.setCameraRigMode(cB.cameraRigMode, Bc)
      }
      if (cB.animations) {
        for (let Bc = 0; Bc < cB.animations.length; Bc++) {
          const nc = cB.animations[Bc],
            Vc = (0, qB.b)("BABYLON.Animation");
          Vc && Ic.animations.push(Vc.Parse(nc))
        }
        Mc.c.ParseAnimationRanges(Ic, cB, Bc)
      }
      return cB.autoAnimate && Bc.beginAnimation(Ic, cB.autoAnimateFrom, cB.autoAnimateTo, cB.autoAnimateLoop, cB.autoAnimateSpeed || 1), void 0 !== cB.isEnabled && Ic.jnc(cB.isEnabled), Ic
    }
    let yB = !1;

    function zB() {
      yB || (yB = !0, tB.Parse = Sc)
    }
  },
  38270: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc) {
        this._cameraPosition = Bc, this._behavior = nc, this.activeInput = !1, this.speed = 1, this.oVc = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Vc.p, this.rotationAccumulatedPixels = new Vc.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Vc.p.Zero(), this.rotationDeltaCurrentFrame = Vc.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new Vc.p, this.referenceFrameRate = 60, this._rotationVelocity = new Vc.p, this._prevFrameTimeMs = 0, this._scene = cB
      }
      computeCurrentFrameDeltas() {
        const cB = this._scene.RV().getDeltaTime(),
          Bc = this._getEffectiveDeltaMs(cB);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.orc(0), this.rotationDeltaCurrentFrame.orc(0), this.zoomDeltaCurrentFrame = 0, void(cB > 0 && (this._prevFrameTimeMs = cB));
        this.panDeltaCurrentFrame.orc(0), this.rotationDeltaCurrentFrame.orc(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.puc(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Bc, this.panDeltaCurrentFrame), this._rotationVelocity.puc(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.puc(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Bc, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Bc, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.oVc * this._zoomSpeedMultiplier) * Bc, cB > 0 && (this._prevFrameTimeMs = cB), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.orc(0), this.rotationAccumulatedPixels.orc(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.orc(0), this.rotationAccumulatedPixels.orc(0)
      }
      resetPanVelocity() {
        this._panVelocity.orc(0), this.panAccumulatedPixels.orc(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(cB) {
        const Bc = this._scene.RV().getDeltaTime(),
          nc = this._getEffectiveDeltaMs(Bc),
          Vc = 1e3 / this.referenceFrameRate;
        return Math.pow(cB, nc / Vc)
      }
      getFrameIndependentInputScale(cB) {
        const Bc = 1 - cB;
        if (Bc <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(cB)) / Bc
      }
      _getEffectiveDeltaMs(cB) {
        return cB > 0 ? cB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(cB, Bc, nc) {
        let Vc = cB;
        const Ic = this._scene.RV().getDeltaTime(),
          rB = this._getEffectiveDeltaMs(Ic);
        if (0 === rB) return Vc;
        const uc = this.getFrameIndependentDecay(nc);
        if (Vc *= uc, 0 !== Bc || this.activeInput) {
          const cB = 1 - nc;
          Vc += Bc / rB * (cB > 0 ? (1 - uc) / cB : 1)
        } else Math.abs(Vc) < 1e-6 && (Vc = 0);
        return Vc
      }
    }
  },
  38273: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc) {
        this.inputMap = [], this.handlers = cB, this._createDefaultEntries = Bc, this.resetInputMap()
      }
      resolveInteraction(cB, Bc) {
        for (const nc of this.inputMap)
          if (nc.source === cB && this._entryMatches(nc, Bc)) return nc;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(cB, Bc, nc) {
        const Vc = this.inputMap;
        for (let Ic = 0; Ic < Vc.length; Ic++) {
          const rB = Vc[Ic];
          if (rB.source === cB && rB.interaction === Bc && this._entryConditionsMatch(rB, nc)) return rB
        }
      }
      getEntries(cB, Bc, nc) {
        const Vc = [],
          Ic = this.inputMap;
        for (let rB = 0; rB < Ic.length; rB++) {
          const uc = Ic[rB];
          uc.source === cB && uc.interaction === Bc && this._entryConditionsMatch(uc, nc) && Vc.push(uc)
        }
        return Vc
      }
      addEntry(cB) {
        const Bc = this._entrySpecificity(cB);
        let nc = this.inputMap.length;
        for (let Vc = 0; Vc < this.inputMap.length; Vc++)
          if (this._entrySpecificity(this.inputMap[Vc]) < Bc) {
            nc = Vc;
            break
          } this.inputMap.splice(nc, 0, cB)
      }
      setInteraction(cB, Bc, nc) {
        const Vc = this.resolveInteraction(cB, Bc);
        return Vc && this._entryCoversAllConditionsOf(Vc, Bc) ? (Vc.interaction = nc, !0) : (this.addEntry({
          source: cB,
          ...Bc ?? {},
          interaction: nc
        }), !0)
      }
      _entryCoversAllConditionsOf(cB, Bc) {
        if (!Bc) return !0;
        const nc = cB;
        for (const Vc of Object.keys(Bc)) {
          const cB = Bc[Vc];
          if (void 0 !== cB)
            if ("modifiers" === Vc) {
              const Bc = nc.modifiers ?? {};
              for (const nc of Object.keys(cB))
                if (void 0 !== cB[nc] && void 0 === Bc[nc]) return !1
            } else if (void 0 === nc[Vc]) return !1
        }
        return !0
      }
      setInteractions(cB, Bc, nc) {
        let Vc = 0;
        const Ic = this.inputMap;
        for (let rB = 0; rB < Ic.length; rB++) {
          const uc = Ic[rB];
          uc.source === cB && this._entryMatches(uc, Bc) && (uc.interaction = nc, Vc++)
        }
        return Vc
      }
      _entryMatches(cB, Bc) {
        switch (cB.source) {
          case "pointer":
            return (void 0 === cB.button || cB.button === Bc?.button) && this._matchModifiers(cB.modifiers, Bc?.modifiers);
          case "wheel":
            return this._matchModifiers(cB.modifiers, Bc?.modifiers);
          case "touch":
            return void 0 === cB.touchCount || cB.touchCount === Bc?.touchCount;
          case "keyboard":
            return (void 0 === cB.key || (Array.isArray(cB.key) ? -1 !== cB.key.indexOf(Bc?.key ?? -1) : cB.key === Bc?.key)) && this._matchModifiers(cB.modifiers, Bc?.modifiers)
        }
      }
      _entryConditionsMatch(cB, Bc) {
        if (!Bc) return !0;
        switch (cB.source) {
          case "pointer":
            return (!("button" in Bc) || cB.button === Bc.button) && (!("modifiers" in Bc) || this._entryModifiersMatch(cB.modifiers, Bc.modifiers));
          case "wheel":
            return !("modifiers" in Bc) || this._entryModifiersMatch(cB.modifiers, Bc.modifiers);
          case "touch":
            return !("touchCount" in Bc) || cB.touchCount === Bc.touchCount;
          case "keyboard":
            if ("key" in Bc) {
              if (void 0 === cB.key) return void 0 === Bc.key;
              if (void 0 === Bc.key || (Array.isArray(cB.key) ? -1 === cB.key.indexOf(Bc.key) : cB.key !== Bc.key)) return !1
            }
            return !("modifiers" in Bc) || this._entryModifiersMatch(cB.modifiers, Bc.modifiers)
        }
      }
      _entrySpecificity(cB) {
        let Bc = 0;
        return "button" in cB && void 0 !== cB.button && Bc++, "key" in cB && void 0 !== cB.key && Bc++, "touchCount" in cB && void 0 !== cB.touchCount && Bc++, "modifiers" in cB && cB.modifiers && Bc++, Bc
      }
      _matchModifiers(cB, Bc) {
        return !cB || (void 0 === cB.ctrl || cB.ctrl === (Bc?.ctrl ?? !1)) && ((void 0 === cB.shift || cB.shift === (Bc?.shift ?? !1)) && (void 0 === cB.alt || cB.alt === (Bc?.alt ?? !1)))
      }
      _entryModifiersMatch(cB, Bc) {
        if (!Bc) return !cB;
        return void 0 !== Bc.ctrl || void 0 !== Bc.shift || void 0 !== Bc.alt ? (void 0 === Bc.ctrl || cB?.ctrl === Bc.ctrl) && ((void 0 === Bc.shift || cB?.shift === Bc.shift) && (void 0 === Bc.alt || cB?.alt === Bc.alt)) : !cB || void 0 === cB.ctrl && void 0 === cB.shift && void 0 === cB.alt
      }
    }
  },
  38242: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Sc,
      h: () => ec
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(38251),
      uc = nc(35756),
      sc = nc(35759),
      Mc = nc(38264),
      Pc = nc(38255),
      qB = nc(38270),
      Oc = nc(38273);
    class Tc extends qB.d {
      constructor(cB, Bc, nc) {
        super(cB, Bc, nc), this.input = new Oc.c({
          translate: (cB, Bc, nc) => {
            this.panAccumulatedPixels.x += cB, this.panAccumulatedPixels.y += Bc, this.panAccumulatedPixels.z += nc
          },
          rotate: (cB, Bc) => {
            this.rotationAccumulatedPixels.x += cB, this.rotationAccumulatedPixels.y += Bc
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
    const fc = uc.d.Zero(),
      mB = uc.f.Identity();
    let ec = (() => {
        var cB;
        let Bc, nc, Pc, qB, Oc = rB.e,
          ec = [],
          tB = [],
          Sc = [],
          yB = [],
          zB = [],
          pc = [],
          hc = [],
          aB = [];
        return cB = class extends Oc {
          get inertia() {
            return this._targetInertia
          }
          set inertia(cB) {
            this._targetInertia = cB, this.movement && (this.movement.panInertia = cB, this.movement.rotationInertia = cB)
          }
          constructor(cB, Bc, nc) {
            super(cB, Bc, nc, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new uc.p(0, 0, 0), this.cameraRotation = new uc.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Vc.k)(this, ec, !1), this.rotation = ((0, Vc.k)(this, tB), (0, Vc.k)(this, Sc, void 0)), this.rotationQuaternion = (0, Vc.k)(this, yB), this.speed = (0, Vc.k)(this, zB, 2), this.noRotationConstraint = ((0, Vc.k)(this, pc), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = sc.c, this._rotationEpsilon = sc.c, this.lockedTarget = (0, Vc.k)(this, hc, null), this._currentTarget = ((0, Vc.k)(this, aB), uc.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = uc.d.Zero(), this._cameraTransformMatrix = uc.d.Zero(), this._cameraRotationMatrix = uc.d.Zero(), this._transformedReferencePoint = uc.p.Zero(), this._deferredPositionUpdate = new uc.p, this._deferredRotationQuaternionUpdate = new uc.f, this._deferredRotationUpdate = new uc.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = uc.p.Forward(this.knc().useRightHandedSystem), this.rotation = new uc.p(0, this.knc().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Tc(this.knc(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(cB) {
            this.getWorldMatrix();
            const Bc = uc.i.KV[0],
              nc = uc.i.KV[1];
            return nc.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(nc, Bc), Bc.scaleInPlace(cB), this.globalPosition.add(Bc)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const cB = this.lockedTarget;
              cB.computeWorldMatrix().getTranslationToRef(cB.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.puc(0, 0, 0), this.cameraRotation.puc(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new uc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new uc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new uc.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(cB) {
            cB || super._updateCache();
            const Bc = this._getLockedTargetPosition();
            Bc ? this._cache.lockedTarget ? this._cache.lockedTarget.qqc(Bc) : this._cache.lockedTarget = Bc.clone() : this._cache.lockedTarget = null, this._cache.rotation.qqc(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.qqc(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const cB = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(cB) : !cB) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const cB = this.RV();
            return this.speed * Math.sqrt(cB.getDeltaTime() / (100 * cB.getFps()))
          }
          setTarget(cB) {
            this.upVector.normalize(), this._initialFocalDistance = cB.subtract(this.position).length(), this.position.z === cB.z && (this.position.z += sc.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.knc().useRightHandedSystem ? uc.d.LookAtRHToRef(this.position, cB, uc.p.UpReadOnly, fc) : uc.d.LookAtLHToRef(this.position, cB, uc.p.UpReadOnly, fc), fc.invert();
            const Bc = this.rotationQuaternion || mB;
            uc.f.FromRotationMatrixToRef(fc, Bc), Bc.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(cB) {
            this.setTarget(cB)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(uc.i.Matrix[0]), uc.p.TransformNormalToRef(this.cameraDirection, uc.i.Matrix[0], uc.i.KV[0]), this._deferredPositionUpdate.addInPlace(uc.i.KV[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.qqc(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.qqc(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const cB = this.movement,
              Bc = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            cB.panAccumulatedPixels.addInPlace(this.cameraDirection), cB.rotationAccumulatedPixels.x += this.cameraRotation.x, cB.rotationAccumulatedPixels.y += this.cameraRotation.y, cB.computeCurrentFrameDeltas(), this.cameraDirection.qqc(cB.panDeltaCurrentFrame), this.cameraRotation.set(cB.rotationDeltaCurrentFrame.x, cB.rotationDeltaCurrentFrame.y);
            const nc = this.speed * this._panningEpsilon;
            !Bc && Math.abs(this.cameraDirection.x) < nc && Math.abs(this.cameraDirection.y) < nc && Math.abs(this.cameraDirection.z) < nc && (this.cameraDirection.orc(0), cB.resetPanVelocity());
            const Vc = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Ic = this._decideIfNeedsToMove(),
              rB = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.qqc(this.rotation), this._deferredPositionUpdate.qqc(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.qqc(this.rotationQuaternion), Ic && this._updatePosition(), rB) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Vc, this._deferredRotationUpdate.y += this.cameraRotation.y * Vc, !this.noRotationConstraint) {
                const cB = 1.570796;
                this._deferredRotationUpdate.x > cB && (this._deferredRotationUpdate.x = cB), this._deferredRotationUpdate.x < -cB && (this._deferredRotationUpdate.x = -cB)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.qqc(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (uc.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.qqc(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.orc(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : uc.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return uc.p.TransformNormalToRef(uc.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), uc.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Mc.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (uc.f.FromEulerVectorToRef(this.rotation, mB), Mc.e.Y.rotateByQuaternionToRef(mB, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(cB, Bc, nc) {
            if (this.knc().useRightHandedSystem ? uc.d.LookAtRHToRef(cB, Bc, nc, this._viewMatrix) : uc.d.LookAtLHToRef(cB, Bc, nc, this._viewMatrix), this.parent) {
              const cB = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(cB, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Bc, nc) {
            if (this.cameraRigMode !== rB.e.RIG_MODE_NONE) {
              const nc = new cB(Bc, this.position.clone(), this.knc());
              return nc.isRigCamera = !0, nc.rigParent = this, this.cameraRigMode === rB.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new uc.f), nc._cameraRigParams = {}, nc.rotationQuaternion = new uc.f), nc.mode = this.mode, nc.orthoLeft = this.orthoLeft, nc.orthoRight = this.orthoRight, nc.orthoTop = this.orthoTop, nc.orthoBottom = this.orthoBottom, nc
            }
            return null
          }
          _updateRigCameras() {
            const cB = this._rigCameras[0],
              Bc = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case rB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case rB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case rB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case rB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case rB.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const nc = this.cameraRigMode === rB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Vc = this.cameraRigMode === rB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * nc, cB), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Vc, Bc);
                break
              }
              case rB.e.RIG_MODE_VR:
                cB.rotationQuaternion && Bc.rotationQuaternion && this.rotationQuaternion ? (cB.rotationQuaternion.qqc(this.rotationQuaternion), Bc.rotationQuaternion.qqc(this.rotationQuaternion)) : (cB.rotation.qqc(this.rotation), Bc.rotation.qqc(this.rotation)), cB.position.qqc(this.position), Bc.position.qqc(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Bc, nc) {
            this.getTarget().subtractToRef(this.position, cB._TargetFocalPoint), cB._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Vc = cB._TargetFocalPoint.addInPlace(this.position);
            uc.d.TranslationToRef(-Vc.x, -Vc.y, -Vc.z, cB._TargetTransformMatrix), cB._TargetTransformMatrix.multiplyToRef(uc.d.RotationAxis(nc.upVector, Bc), cB._RigCamTransformMatrix), uc.d.TranslationToRef(Vc.x, Vc.y, Vc.z, cB._TargetTransformMatrix), cB._RigCamTransformMatrix.multiplyToRef(cB._TargetTransformMatrix, cB._RigCamTransformMatrix), uc.p.TransformCoordinatesToRef(this.position, cB._RigCamTransformMatrix, nc.position), nc.setTarget(Vc)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.L)()], Pc = [(0, Ic.M)()], qB = [(0, Ic.z)("lockedTargetId")], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: cB => "updateUpVectorFromRotation" in cB,
              get: cB => cB.updateUpVectorFromRotation,
              set: (cB, Bc) => {
                cB.updateUpVectorFromRotation = Bc
              }
            },
            metadata: rB
          }, ec, tB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: cB => "rotation" in cB,
              get: cB => cB.rotation,
              set: (cB, Bc) => {
                cB.rotation = Bc
              }
            },
            metadata: rB
          }, Sc, yB), (0, Vc.g)(null, null, Pc, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: cB => "speed" in cB,
              get: cB => cB.speed,
              set: (cB, Bc) => {
                cB.speed = Bc
              }
            },
            metadata: rB
          }, zB, pc), (0, Vc.g)(null, null, qB, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: cB => "lockedTarget" in cB,
              get: cB => cB.lockedTarget,
              set: (cB, Bc) => {
                cB.lockedTarget = Bc
              }
            },
            metadata: rB
          }, hc, aB), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB._RigCamTransformMatrix = new uc.d, cB._TargetTransformMatrix = new uc.d, cB._TargetFocalPoint = new uc.p, cB
      })(),
      tB = !1;

    function Sc() {
      tB || (tB = !0, Pc.c.AddNodeConstructor("TargetCamera", ((cB, Bc) => () => new ec(cB, uc.p.Zero(), Bc))))
    }
  },
  38005: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB
    });
    var Vc = nc(37965);
    let Ic = !1;

    function rB() {
      Ic || (Ic = !0, Vc.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Vc.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Vc.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Vc.e.prototype.getAspectRatio = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = cB.viewport;
        return this.getRenderWidth(Bc) * nc.width / (this.getRenderHeight(Bc) * nc.height)
      }, Vc.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Vc.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38087: (cB, Bc, nc) => {
    var Vc = nc(37965),
      Ic = nc(38090);
    let rB = !1;
    rB || (rB = !0, (0, Ic.t)(), Vc.e.prototype._loadFileAsync = async function(cB, Bc, nc) {
      return await new Promise(((Vc, Ic) => {
        this._loadFile(cB, (cB => {
          Vc(cB)
        }), void 0, Bc, nc, ((cB, Bc) => {
          Ic(Bc)
        }))
      }))
    })
  },
  38084: (cB, Bc, nc) => {
    (0, nc(38010).b)()
  },
  38010: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37965);
    let Ic = !1;

    function rB() {
      Ic || (Ic = !0, Vc.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Vc.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Vc.e.prototype.createRenderPassId = function(cB) {
        const Bc = ++Vc.e._RenderPassIdCounter;
        return this._renderPassNames[Bc] = cB ?? "NONAME", Bc
      }, Vc.e.prototype.releaseRenderPassId = function(cB) {
        this._renderPassNames[cB] = void 0;
        for (let Bc = 0; Bc < this.scenes.length; ++Bc) {
          const nc = this.scenes[Bc];
          for (let Bc = 0; Bc < nc.meshes.length; ++Bc) {
            const Vc = nc.meshes[Bc];
            if (Vc._releaseRenderPassId(cB), Vc.rD)
              for (let Bc = 0; Bc < Vc.rD.length; ++Bc) {
                Vc.rD[Bc]._removeDrawWrapper(cB)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(cB)
      })
    }
  },
  38126: (cB, Bc, nc) => {
    var Vc = nc(38135),
      Ic = nc(37965);
    let rB = !1;
    rB || (rB = !0, Ic.e.GetCompatibleTextureLoader = Vc.b)
  },
  38012: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(37911);
    let Ic = !1;

    function rB() {
      Ic || (Ic = !0, Vc.ThinEngine.prototype.setAlphaMode = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[nc] === cB) {
          if (!Bc) {
            const Bc = 0 === cB;
            this.depthCullingState.depthMask !== Bc && (this.depthCullingState.depthMask = Bc)
          }
          return
        }
        const Vc = 0 === cB;
        this._alphaState.setAlphaBlend(!Vc, nc), this._alphaState.setAlphaMode(cB, nc), Bc || (this.depthCullingState.depthMask = Vc), this._alphaMode[nc] = cB
      })
    }
  },
  38021: (cB, Bc, nc) => {
    var Vc = nc(37895),
      Ic = nc(37191),
      rB = nc(37911),
      uc = nc(38025),
      sc = nc(38e3);
    class Mc extends uc.d {
      setDepthStencilTexture(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(cB, Bc), !cB) return;
        const nc = this._engine,
          Vc = this._context,
          Ic = cB._hardwareTexture;
        if (Ic && cB._autoMSAAManagement && this._MSAAFramebuffer) {
          const Bc = nc._currentFramebuffer;
          nc._bindUnboundFramebuffer(this._MSAAFramebuffer), Vc.framebufferRenderbuffer(Vc.FRAMEBUFFER, (0, sc.b)(cB.format) ? Vc.DEPTH_STENCIL_ATTACHMENT : Vc.DEPTH_ATTACHMENT, Vc.RENDERBUFFER, Ic.getMSAARenderBuffer()), nc._bindUnboundFramebuffer(Bc)
        }
      }
      constructor(cB, Bc, nc, Vc, Ic) {
        super(cB, Bc, nc, Vc), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Ic
      }
      _cloneRenderTargetWrapper() {
        let cB;
        return this._colorTextureArray && this._depthStencilTextureArray ? (cB = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), cB.texture.isReady = !0) : cB = super._cloneRenderTargetWrapper(), cB
      }
      _swapRenderTargetWrapper(cB) {
        super._swapRenderTargetWrapper(cB), cB._framebuffer = this._framebuffer, cB._depthStencilBuffer = this._depthStencilBuffer, cB._MSAAFramebuffer = this._MSAAFramebuffer, cB._colorTextureArray = this._colorTextureArray, cB._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const cB = this._engine,
            Bc = cB._currentFramebuffer,
            nc = this._context;
          cB._bindUnboundFramebuffer(this._framebuffer), nc.framebufferRenderbuffer(nc.FRAMEBUFFER, nc.DEPTH_STENCIL_ATTACHMENT, nc.RENDERBUFFER, null), nc.framebufferRenderbuffer(nc.FRAMEBUFFER, nc.DEPTH_ATTACHMENT, nc.RENDERBUFFER, null), nc.framebufferRenderbuffer(nc.FRAMEBUFFER, nc.STENCIL_ATTACHMENT, nc.RENDERBUFFER, null), cB._bindUnboundFramebuffer(Bc), nc.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(cB, Bc, nc, Vc, Ic, rB)
      }
      shareDepth(cB) {
        super.shareDepth(cB);
        const Bc = this._context,
          nc = this._depthStencilBuffer,
          Vc = cB._MSAAFramebuffer || cB._framebuffer,
          Ic = this._engine;
        cB._depthStencilBuffer && cB._depthStencilBuffer !== nc && Bc.deleteRenderbuffer(cB._depthStencilBuffer), cB._depthStencilBuffer = nc;
        const rB = cB._generateStencilBuffer ? Bc.DEPTH_STENCIL_ATTACHMENT : Bc.DEPTH_ATTACHMENT;
        Ic._bindUnboundFramebuffer(Vc), Bc.framebufferRenderbuffer(Bc.FRAMEBUFFER, rB, Bc.RENDERBUFFER, nc), Ic._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ic = cB._hardwareTexture;
        if (!Ic) return;
        const rB = this._framebuffer,
          uc = this._engine,
          sc = uc._currentFramebuffer;
        let Mc;
        if (uc._bindUnboundFramebuffer(rB), uc.Tv > 1) {
          const rB = this._context;
          Mc = rB["COLOR_ATTACHMENT" + Bc], cB.is2DArray || cB.is3D ? (nc = nc ?? this.layerIndices?.[Bc] ?? 0, rB.framebufferTextureLayer(rB.FRAMEBUFFER, Mc, Ic.underlyingResource, Vc, nc)) : cB.isCube ? (nc = nc ?? this.faceIndices?.[Bc] ?? 0, rB.framebufferTexture2D(rB.FRAMEBUFFER, Mc, rB.TEXTURE_CUBE_MAP_POSITIVE_X + nc, Ic.underlyingResource, Vc)) : rB.framebufferTexture2D(rB.FRAMEBUFFER, Mc, rB.TEXTURE_2D, Ic.underlyingResource, Vc)
        } else {
          const cB = this._context;
          Mc = cB["COLOR_ATTACHMENT" + Bc + "_WEBGL"];
          const rB = void 0 !== nc ? cB.TEXTURE_CUBE_MAP_POSITIVE_X + nc : cB.TEXTURE_2D;
          cB.framebufferTexture2D(cB.FRAMEBUFFER, Mc, rB, Ic.underlyingResource, Vc)
        }
        if (cB._autoMSAAManagement && this._MSAAFramebuffer) {
          const cB = this._context;
          uc._bindUnboundFramebuffer(this._MSAAFramebuffer), cB.framebufferRenderbuffer(cB.FRAMEBUFFER, Mc, cB.RENDERBUFFER, Ic.getMSAARenderBuffer())
        }
        uc._bindUnboundFramebuffer(sc)
      }
      setTexture(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(cB, Bc, nc), this._bindTextureRenderTarget(cB, Bc)
      }
      setLayerAndFaceIndices(cB, Bc) {
        if (super.setLayerAndFaceIndices(cB, Bc), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const nc = this._attachments?.length ?? this.textures.length;
        for (let Vc = 0; Vc < nc; Vc++) {
          const cB = this.textures[Vc];
          cB && (cB.is2DArray || cB.is3D ? this._bindTextureRenderTarget(cB, Vc, this.layerIndices[Vc]) : cB.isCube ? this._bindTextureRenderTarget(cB, Vc, this.faceIndices[Vc]) : this._bindTextureRenderTarget(cB, Vc))
        }
      }
      setLayerAndFaceIndex() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(cB, Bc, nc), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Vc = this.textures[cB];
        Vc.is2DArray || Vc.is3D ? this._bindTextureRenderTarget(this.textures[cB], cB, this.layerIndices[cB]) : Vc.isCube && this._bindTextureRenderTarget(this.textures[cB], cB, this.faceIndices[cB])
      }
      resolveMSAATextures() {
        const cB = this._engine,
          Bc = cB._currentFramebuffer;
        cB._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), cB._bindUnboundFramebuffer(Bc)
      }
      dispose() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Bc = this._context;
        cB || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Bc.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Bc.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Bc.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(cB)
      }
    }
    let Pc = !1;
    Pc || (Pc = !0, rB.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(cB, Bc, nc) {
      const Vc = new Mc(cB, Bc, nc, this, this._gl);
      return this._renderTargetWrapperCache.push(Vc), Vc
    }, rB.ThinEngine.prototype.createRenderTargetTexture = function(cB, Bc) {
      const nc = this._createHardwareRenderTargetWrapper(!1, !1, cB);
      let Vc, Ic, rB = !0,
        uc = !1,
        sc = !1,
        Mc = 1;
      void 0 !== Bc && "object" === typeof Bc && (rB = Bc.generateDepthBuffer ?? !0, uc = !!Bc.generateStencilBuffer, sc = !!Bc.noColorAttachment, Vc = Bc.colorAttachment, Mc = Bc.samples ?? 1, Ic = Bc.label);
      const Pc = Vc || (sc ? null : this._createInternalTexture(cB, Bc, !0, 5)),
        qB = cB.width || cB,
        Oc = cB.height || cB,
        Tc = this._currentFramebuffer,
        fc = this._gl,
        mB = fc.createFramebuffer();
      if (this._bindUnboundFramebuffer(mB), nc._depthStencilBuffer = this._setupFramebufferDepthAttachments(uc, rB, qB, Oc), !Pc || Pc.is2DArray || Pc.is3D || fc.framebufferTexture2D(fc.FRAMEBUFFER, fc.COLOR_ATTACHMENT0, fc.TEXTURE_2D, Pc._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Tc), nc.label = Ic ?? "RenderTargetWrapper", nc._framebuffer = mB, nc._generateDepthBuffer = rB, nc._generateStencilBuffer = uc, nc.setTextures(Pc), Vc) {
        if (nc._samples = Vc.samples, Vc.samples > 1) {
          const cB = Vc._hardwareTexture.getMSAARenderBuffer(0);
          nc._MSAAFramebuffer = fc.createFramebuffer(), this._bindUnboundFramebuffer(nc._MSAAFramebuffer), fc.framebufferRenderbuffer(fc.FRAMEBUFFER, fc.COLOR_ATTACHMENT0, fc.RENDERBUFFER, cB), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(nc, Mc);
      return nc
    }, rB.ThinEngine.prototype._createDepthStencilTexture = function(cB, Bc, nc) {
      const rB = this._gl,
        uc = cB.layers || 0,
        Mc = cB.depth || 0;
      let Pc = rB.TEXTURE_2D;
      0 !== uc ? Pc = rB.TEXTURE_2D_ARRAY : 0 !== Mc && (Pc = rB.TEXTURE_3D);
      const qB = new Vc.e(this, 12);
      if (qB.label = Bc.label, !this._caps.depthTextureExtension) return Ic.c.Error("Depth texture is not supported by your browser or hardware."), qB;
      const Oc = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Bc
      };
      if (this._bindTextureDirectly(Pc, qB, !0), this._setupDepthStencilTexture(qB, cB, 0 !== Oc.comparisonFunction && Oc.bilinearFiltering, Oc.comparisonFunction, Oc.samples), void 0 !== Oc.depthTextureFormat) {
        if (15 !== Oc.depthTextureFormat && 16 !== Oc.depthTextureFormat && 17 !== Oc.depthTextureFormat && 13 !== Oc.depthTextureFormat && 14 !== Oc.depthTextureFormat && 18 !== Oc.depthTextureFormat) return Ic.c.Error(`Depth texture ${Oc.depthTextureFormat} format is not supported.`), qB;
        qB.format = Oc.depthTextureFormat
      } else qB.format = Oc.generateStencil ? 13 : 16;
      const Tc = (0, sc.b)(qB.format),
        fc = this._getWebGLTextureTypeFromDepthTextureFormat(qB.format),
        mB = Tc ? rB.DEPTH_STENCIL : rB.DEPTH_COMPONENT,
        ec = this._getInternalFormatFromDepthTextureFormat(qB.format, !0, Tc);
      return qB.is2DArray ? rB.texImage3D(Pc, 0, ec, qB.width, qB.height, uc, 0, mB, fc, null) : qB.is3D ? rB.texImage3D(Pc, 0, ec, qB.width, qB.height, Mc, 0, mB, fc, null) : rB.texImage2D(Pc, 0, ec, qB.width, qB.height, 0, mB, fc, null), this._bindTextureDirectly(Pc, null), this._internalTexturesCache.push(qB), nc._depthStencilBuffer && (rB.deleteRenderbuffer(nc._depthStencilBuffer), nc._depthStencilBuffer = null), this._bindUnboundFramebuffer(nc._MSAAFramebuffer ?? nc._framebuffer), nc._generateStencilBuffer = Tc, nc._depthStencilTextureWithStencil = Tc, nc._depthStencilBuffer = this._setupFramebufferDepthAttachments(nc._generateStencilBuffer, nc._generateDepthBuffer, nc.width, nc.height, nc.samples, qB.format), this._bindUnboundFramebuffer(null), qB
    }, rB.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(cB, Bc) {
      if (this.Tv < 2 || !cB) return 1;
      if (cB.samples === Bc) return Bc;
      const nc = this._gl;
      Bc = Math.min(Bc, this.getCaps().maxMSAASamples), cB._depthStencilBuffer && (nc.deleteRenderbuffer(cB._depthStencilBuffer), cB._depthStencilBuffer = null), cB._MSAAFramebuffer && (nc.deleteFramebuffer(cB._MSAAFramebuffer), cB._MSAAFramebuffer = null);
      const Vc = cB.texture?._hardwareTexture;
      if (Vc?.releaseMSAARenderBuffers(), cB.texture && Bc > 1 && "function" === typeof nc.renderbufferStorageMultisample) {
        const Ic = nc.createFramebuffer();
        if (!Ic) throw new Error("Unable to create multi sampled framebuffer");
        cB._MSAAFramebuffer = Ic, this._bindUnboundFramebuffer(cB._MSAAFramebuffer);
        const rB = this._createRenderBuffer(cB.texture.width, cB.texture.height, Bc, -1, this._getRGBABufferInternalSizedFormat(cB.texture.type, cB.texture.format, cB.texture._useSRGBBuffer), nc.COLOR_ATTACHMENT0, !1);
        if (!rB) throw new Error("Unable to create multi sampled framebuffer");
        Vc?.addMSAARenderBuffer(rB)
      }
      this._bindUnboundFramebuffer(cB._MSAAFramebuffer ?? cB._framebuffer), cB.texture && (cB.texture.samples = Bc), cB._samples = Bc;
      const Ic = cB._depthStencilTexture ? cB._depthStencilTexture.format : void 0;
      return cB._depthStencilBuffer = this._setupFramebufferDepthAttachments(cB._generateStencilBuffer, cB._generateDepthBuffer, cB.width, cB.height, Bc, Ic), this._bindUnboundFramebuffer(null), Bc
    }, rB.ThinEngine.prototype._setupDepthStencilTexture = function(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const rB = Bc.width ?? Bc,
        uc = Bc.height ?? Bc,
        sc = Bc.layers || 0,
        Mc = Bc.depth || 0;
      cB.baseWidth = rB, cB.baseHeight = uc, cB.width = rB, cB.height = uc, cB.is2DArray = sc > 0, cB.depth = sc || Mc, cB.isReady = !0, cB.samples = Ic, cB.generateMipMaps = !1, cB.samplingMode = nc ? 2 : 1, cB.type = 0, cB._comparisonFunction = Vc;
      const Pc = this._gl,
        qB = this._getTextureTarget(cB),
        Oc = this._getSamplingParameters(cB.samplingMode, !1);
      Pc.texParameteri(qB, Pc.TEXTURE_MAG_FILTER, Oc.mag), Pc.texParameteri(qB, Pc.TEXTURE_MIN_FILTER, Oc.min), Pc.texParameteri(qB, Pc.TEXTURE_WRAP_S, Pc.CLAMP_TO_EDGE), Pc.texParameteri(qB, Pc.TEXTURE_WRAP_T, Pc.CLAMP_TO_EDGE), this.Tv > 1 && (0 === Vc ? (Pc.texParameteri(qB, Pc.TEXTURE_COMPARE_FUNC, 515), Pc.texParameteri(qB, Pc.TEXTURE_COMPARE_MODE, Pc.NONE)) : (Pc.texParameteri(qB, Pc.TEXTURE_COMPARE_FUNC, Vc), Pc.texParameteri(qB, Pc.TEXTURE_COMPARE_MODE, Pc.COMPARE_REF_TO_TEXTURE)))
    })
  },
  37884: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.d
    });
    var Vc = nc(37887);
    (0, nc(38012).c)();
    var Ic = nc(37911);
    let rB = !1;
    ! function() {
      if (rB) return;
      rB = !0;
      const cB = new WeakMap,
        Bc = new WeakMap,
        nc = new WeakMap,
        Vc = new WeakMap;
      Ic.ThinEngine.prototype.getAlphaToCoverage = function() {
        return cB.get(this) ?? !1
      }, Ic.ThinEngine.prototype.setAlphaToCoverage = function(nc) {
        (cB.get(this) !== nc || this._gl && Bc.get(this) !== this._gl) && (cB.set(this, nc), this._gl && (nc ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Bc.set(this, this._gl)))
      }, Object.defineProperty(Ic.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Vc.get(this) !== this._gl && (nc.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Vc.set(this, this._gl)), nc.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var uc = nc(37895),
      sc = nc(37191),
      Mc = nc(37992);
    let Pc = !1;
    ! function() {
      function cB(cB, Bc, nc, Vc) {
        let Ic, rB = 1;
        1 === Vc ? Ic = new Float32Array(Bc * nc * 4) : 2 === Vc ? (Ic = new Uint16Array(Bc * nc * 4), rB = 15360) : Ic = 7 === Vc ? new Uint32Array(Bc * nc * 4) : new Uint8Array(Bc * nc * 4);
        for (let uc = 0; uc < Bc; uc++)
          for (let Vc = 0; Vc < nc; Vc++) {
            const nc = 3 * (Vc * Bc + uc),
              sc = 4 * (Vc * Bc + uc);
            Ic[sc + 0] = cB[nc + 0], Ic[sc + 1] = cB[nc + 1], Ic[sc + 2] = cB[nc + 2], Ic[sc + 3] = rB
          }
        return Ic
      }

      function Bc(cB) {
        return function(Bc, nc, Vc, Ic, rB, sc, Mc, Pc) {
          let qB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Oc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Tc = cB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            fc = cB ? 10 : 11,
            mB = new uc.e(this, fc);
          mB.baseWidth = nc, mB.baseHeight = Vc, mB.baseDepth = Ic, mB.width = nc, mB.height = Vc, mB.depth = Ic, mB.format = rB, mB.type = Oc, mB.generateMipMaps = sc, mB.samplingMode = Pc, cB ? mB.is3D = !0 : mB.is2DArray = !0, this._doNotHandleContextLost || (mB._bufferView = Bc), cB ? this.updateRawTexture3D(mB, Bc, rB, Mc, qB, Oc) : this.updateRawTexture2DArray(mB, Bc, rB, Mc, qB, Oc), this._bindTextureDirectly(Tc, mB, !0);
          const ec = this._getSamplingParameters(Pc, sc);
          return this._gl.texParameteri(Tc, this._gl.TEXTURE_MAG_FILTER, ec.mag), this._gl.texParameteri(Tc, this._gl.TEXTURE_MIN_FILTER, ec.min), sc && this._gl.generateMipmap(Tc), this._bindTextureDirectly(Tc, null), this._internalTexturesCache.push(mB), mB
        }
      }

      function nc(cB) {
        return function(Bc, nc, Vc, Ic) {
          let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const sc = cB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Mc = this._getWebGLTextureType(uc),
            Pc = this._getInternalFormat(Vc),
            qB = this._getRGBABufferInternalSizedFormat(uc, Vc);
          this._bindTextureDirectly(sc, Bc, !0), this._unpackFlipY(void 0 === Ic || !!Ic), this._doNotHandleContextLost || (Bc._bufferView = nc, Bc.format = Vc, Bc.invertY = Ic, Bc._compression = rB), Bc.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), rB && nc ? this._gl.compressedTexImage3D(sc, 0, this.getCaps().s3tc[rB], Bc.width, Bc.height, Bc.depth, 0, nc) : this._gl.texImage3D(sc, 0, qB, Bc.width, Bc.height, Bc.depth, 0, Pc, Mc, nc), Bc.generateMipMaps && this._gl.generateMipmap(sc), this._bindTextureDirectly(sc, null), Bc.isReady = !0
        }
      }
      Pc || (Pc = !0, Ic.ThinEngine.prototype.updateRawTexture = function(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!cB) return;
        const sc = this._getRGBABufferInternalSizedFormat(rB, nc, uc),
          Mc = this._getInternalFormat(nc),
          Pc = this._getWebGLTextureType(rB);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, cB, !0), this._unpackFlipY(void 0 === Vc || !!Vc), this._doNotHandleContextLost || (cB._bufferView = Bc, cB.format = nc, cB.type = rB, cB.invertY = Vc, cB._compression = Ic), cB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Ic && Bc ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Ic], cB.width, cB.height, 0, Bc) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, sc, cB.width, cB.height, 0, Mc, Pc, Bc), cB.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), cB.isReady = !0
      }, Ic.ThinEngine.prototype.createRawTexture = function(cB, Bc, nc, Vc, Ic, rB, sc) {
        let Mc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          qB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Oc = new uc.e(this, 3);
        Oc.baseWidth = Bc, Oc.baseHeight = nc, Oc.width = Bc, Oc.height = nc, Oc.format = Vc, Oc.generateMipMaps = Ic, Oc.samplingMode = sc, Oc.invertY = rB, Oc._compression = Mc, Oc.type = Pc, Oc._useSRGBBuffer = this._getUseSRGBBuffer(qB, !Ic), this._doNotHandleContextLost || (Oc._bufferView = cB), this.updateRawTexture(Oc, cB, Vc, rB, Mc, Pc, Oc._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Oc, !0);
        const Tc = this._getSamplingParameters(sc, Ic);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Tc.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Tc.min), Ic && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Oc), Oc
      }, Ic.ThinEngine.prototype.createRawCubeTexture = function(cB, Bc, nc, Vc, Ic, rB, Pc) {
        let qB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Oc = this._gl,
          Tc = new uc.e(this, 8);
        Tc.isCube = !0, Tc.format = nc, Tc.type = Vc, this._doNotHandleContextLost || (Tc._bufferViewArray = cB);
        const fc = this._getWebGLTextureType(Vc);
        let mB = this._getInternalFormat(nc);
        mB === Oc.RGB && (mB = Oc.RGBA), fc !== Oc.FLOAT || this._caps.textureFloatLinearFiltering ? fc !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? fc !== Oc.FLOAT || this._caps.textureFloatRender ? fc !== Oc.HALF_FLOAT || this._caps.colorBufferFloat || (Ic = !1, sc.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Ic = !1, sc.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Ic = !1, Pc = 1, sc.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Ic = !1, Pc = 1, sc.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const ec = Bc,
          tB = ec;
        Tc.width = ec, Tc.height = tB, Tc.invertY = rB, Tc._compression = qB;
        if (!this.needPOTTextures || (0, Mc.g)(Tc.width) && (0, Mc.g)(Tc.height) || (Ic = !1), cB) this.updateRawCubeTexture(Tc, cB, nc, Vc, rB, qB);
        else {
          const cB = this._getRGBABufferInternalSizedFormat(Vc),
            Bc = 0;
          this._bindTextureDirectly(Oc.TEXTURE_CUBE_MAP, Tc, !0);
          for (let nc = 0; nc < 6; nc++) qB ? Oc.compressedTexImage2D(Oc.TEXTURE_CUBE_MAP_POSITIVE_X + nc, Bc, this.getCaps().s3tc[qB], Tc.width, Tc.height, 0, void 0) : Oc.texImage2D(Oc.TEXTURE_CUBE_MAP_POSITIVE_X + nc, Bc, cB, Tc.width, Tc.height, 0, mB, fc, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Tc, !0), cB && Ic && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Sc = this._getSamplingParameters(Pc, Ic);
        return Oc.texParameteri(Oc.TEXTURE_CUBE_MAP, Oc.TEXTURE_MAG_FILTER, Sc.mag), Oc.texParameteri(Oc.TEXTURE_CUBE_MAP, Oc.TEXTURE_MIN_FILTER, Sc.min), Oc.texParameteri(Oc.TEXTURE_CUBE_MAP, Oc.TEXTURE_WRAP_S, Oc.CLAMP_TO_EDGE), Oc.texParameteri(Oc.TEXTURE_CUBE_MAP, Oc.TEXTURE_WRAP_T, Oc.CLAMP_TO_EDGE), this._bindTextureDirectly(Oc.TEXTURE_CUBE_MAP, null), Tc.generateMipMaps = Ic, Tc.samplingMode = Pc, Tc.isReady = !0, Tc
      }, Ic.ThinEngine.prototype.updateRawCubeTexture = function(Bc, nc, Vc, Ic, rB) {
        let uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Bc._bufferViewArray = nc, Bc.format = Vc, Bc.type = Ic, Bc.invertY = rB, Bc._compression = uc;
        const Pc = this._gl,
          qB = this._getWebGLTextureType(Ic);
        let Oc = this._getInternalFormat(Vc);
        const Tc = this._getRGBABufferInternalSizedFormat(Ic);
        let fc = !1;
        Oc === Pc.RGB && (Oc = Pc.RGBA, fc = !0), this._bindTextureDirectly(Pc.TEXTURE_CUBE_MAP, Bc, !0), this._unpackFlipY(void 0 === rB || !!rB), Bc.width % 4 !== 0 && Pc.pixelStorei(Pc.UNPACK_ALIGNMENT, 1);
        for (let Mc = 0; Mc < 6; Mc++) {
          let Vc = nc[Mc];
          uc ? Pc.compressedTexImage2D(Pc.TEXTURE_CUBE_MAP_POSITIVE_X + Mc, sc, this.getCaps().s3tc[uc], Bc.width, Bc.height, 0, Vc) : (fc && (Vc = cB(Vc, Bc.width, Bc.height, Ic)), Pc.texImage2D(Pc.TEXTURE_CUBE_MAP_POSITIVE_X + Mc, sc, Tc, Bc.width, Bc.height, 0, Oc, qB, Vc))
        }(!this.needPOTTextures || (0, Mc.g)(Bc.width) && (0, Mc.g)(Bc.height)) && Bc.generateMipMaps && 0 === sc && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Bc.isReady = !0
      }, Ic.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        let Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          qB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Oc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Tc = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const fc = this._gl,
          mB = this.createRawCubeTexture(null, Vc, Ic, rB, !uc, Tc, Oc, null);
        nc?.addPendingData(mB), mB.url = Bc, mB.isReady = !1, this._internalTexturesCache.push(mB);
        const ec = (cB, Bc) => {
            nc?.removePendingData(mB), qB && qB(cB ? cB.status + " " + cB.statusText : "Failed to parse texture data", Bc)
          },
          tB = async Bc => {
            if (!mB._hardwareTexture) return;
            const Vc = sc(Bc);
            if (!Vc) return;
            const uc = Vc instanceof Promise ? await Vc : Vc,
              qB = mB.width;
            if (Mc) {
              const Bc = this._getWebGLTextureType(rB);
              let nc = this._getInternalFormat(Ic);
              const Vc = this._getRGBABufferInternalSizedFormat(rB);
              let sc = !1;
              nc === fc.RGB && (nc = fc.RGBA, sc = !0), this._bindTextureDirectly(fc.TEXTURE_CUBE_MAP, mB, !0), this._unpackFlipY(!1);
              const Pc = Mc(uc);
              for (let Ic = 0; Ic < Pc.length; Ic++) {
                const uc = qB >> Ic;
                for (let Mc = 0; Mc < 6; Mc++) {
                  let qB = Pc[Ic][Mc];
                  sc && (qB = cB(qB, uc, uc, rB)), fc.texImage2D(Mc, Ic, Vc, uc, uc, 0, nc, Bc, qB)
                }
              }
              this._bindTextureDirectly(fc.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(mB, uc, Ic, rB, Tc);
            mB.isReady = !0, nc?.removePendingData(mB), mB.onLoadedObservable.notifyObservers(mB), mB.onLoadedObservable.clear(), Pc && Pc()
          };
        return this._loadFile(Bc, (cB => {
          tB(cB).catch((cB => {
            ec(void 0, cB)
          }))
        }), void 0, nc?.offlineProvider, !0, ec), mB
      }, Ic.ThinEngine.prototype.createRawTexture2DArray = Bc(!1), Ic.ThinEngine.prototype.createRawTexture3D = Bc(!0), Ic.ThinEngine.prototype.updateRawTexture2DArray = nc(!1), Ic.ThinEngine.prototype.updateRawTexture3D = nc(!0))
    }();
    var qB = nc(37945);
    let Oc = !1;
    Oc || (Oc = !0, Ic.ThinEngine.prototype._readTexturePixelsSync = function(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        uc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Pc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Oc = this._gl;
      if (!Oc) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const cB = Oc.createFramebuffer();
        if (!cB) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = cB
      }
      Oc.bindFramebuffer(Oc.FRAMEBUFFER, this._dummyFramebuffer), Vc > -1 && (cB.is2DArray || cB.is3D) ? Oc.framebufferTextureLayer(Oc.FRAMEBUFFER, Oc.COLOR_ATTACHMENT0, cB._hardwareTexture?.underlyingResource, Ic, Vc) : Vc > -1 ? Oc.framebufferTexture2D(Oc.FRAMEBUFFER, Oc.COLOR_ATTACHMENT0, Oc.TEXTURE_CUBE_MAP_POSITIVE_X + Vc, cB._hardwareTexture?.underlyingResource, Ic) : Oc.framebufferTexture2D(Oc.FRAMEBUFFER, Oc.COLOR_ATTACHMENT0, Oc.TEXTURE_2D, cB._hardwareTexture?.underlyingResource, Ic);
      let Tc = void 0 !== cB.type ? this._getWebGLTextureType(cB.type) : Oc.UNSIGNED_BYTE;
      return sc ? rB || (rB = (0, qB.q)(cB.type, 4 * Bc * nc)) : Tc === Oc.UNSIGNED_BYTE ? (rB || (rB = new Uint8Array(4 * Bc * nc)), Tc = Oc.UNSIGNED_BYTE) : (rB || (rB = new Float32Array(4 * Bc * nc)), Tc = Oc.FLOAT), uc && this.flushFramebuffer(), Oc.readPixels(Mc, Pc, Bc, nc, Oc.RGBA, Tc, rB), Oc.bindFramebuffer(Oc.FRAMEBUFFER, this._currentFramebuffer), rB
    }, Ic.ThinEngine.prototype._readTexturePixels = function(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        uc = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Pc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc))
    }), (0, nc(38017).b)();
    let Tc = !1;
    Tc || (Tc = !0, Ic.ThinEngine.prototype._createDepthStencilCubeTexture = function(cB, Bc) {
      const nc = new uc.e(this, 12);
      if (nc.isCube = !0, 1 === this.Tv) return sc.c.Error("Depth cube texture is not supported by WebGL 1."), nc;
      const Vc = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Bc
        },
        Ic = this._gl;
      this._bindTextureDirectly(Ic.TEXTURE_CUBE_MAP, nc, !0), this._setupDepthStencilTexture(nc, cB, Vc.bilinearFiltering, Vc.comparisonFunction);
      for (let rB = 0; rB < 6; rB++) Vc.generateStencil ? Ic.texImage2D(Ic.TEXTURE_CUBE_MAP_POSITIVE_X + rB, 0, Ic.DEPTH24_STENCIL8, cB, cB, 0, Ic.DEPTH_STENCIL, Ic.UNSIGNED_INT_24_8, null) : Ic.texImage2D(Ic.TEXTURE_CUBE_MAP_POSITIVE_X + rB, 0, Ic.DEPTH_COMPONENT24, cB, cB, 0, Ic.DEPTH_COMPONENT, Ic.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Ic.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(nc), nc
    }, Ic.ThinEngine.prototype._setCubeMapTextureParams = function(cB, Bc, nc) {
      const Vc = this._gl;
      Vc.texParameteri(Vc.TEXTURE_CUBE_MAP, Vc.TEXTURE_MAG_FILTER, Vc.LINEAR), Vc.texParameteri(Vc.TEXTURE_CUBE_MAP, Vc.TEXTURE_MIN_FILTER, Bc ? Vc.LINEAR_MIPMAP_LINEAR : Vc.LINEAR), Vc.texParameteri(Vc.TEXTURE_CUBE_MAP, Vc.TEXTURE_WRAP_S, Vc.CLAMP_TO_EDGE), Vc.texParameteri(Vc.TEXTURE_CUBE_MAP, Vc.TEXTURE_WRAP_T, Vc.CLAMP_TO_EDGE), cB.samplingMode = Bc ? 3 : 2, Bc && this.getCaps().textureMaxLevel && void 0 !== nc && nc > 0 && (Vc.texParameteri(Vc.TEXTURE_CUBE_MAP, Vc.TEXTURE_MAX_LEVEL, nc), cB._maxLodLevel = nc), this._bindTextureDirectly(Vc.TEXTURE_CUBE_MAP, null)
    }, Ic.ThinEngine.prototype.createCubeTexture = function(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        uc = arguments.length > 6 ? arguments[6] : void 0,
        Pc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        qB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Oc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Tc = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        fc = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        mB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        ec = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const tB = this._gl;
      return this.createCubeTextureBase(cB, Bc, nc, !!Vc, Ic, rB, uc, Pc, qB, Oc, Tc, fc, (cB => this._bindTextureDirectly(tB.TEXTURE_CUBE_MAP, cB, !0)), ((cB, Bc) => {
        const nc = this.needPOTTextures ? (0, Mc.f)(Bc[0].width, this._caps.maxCubemapTextureSize) : Bc[0].width,
          rB = nc,
          Pc = [tB.TEXTURE_CUBE_MAP_POSITIVE_X, tB.TEXTURE_CUBE_MAP_POSITIVE_Y, tB.TEXTURE_CUBE_MAP_POSITIVE_Z, tB.TEXTURE_CUBE_MAP_NEGATIVE_X, tB.TEXTURE_CUBE_MAP_NEGATIVE_Y, tB.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(tB.TEXTURE_CUBE_MAP, cB, !0), this._unpackFlipY(!1);
        const qB = uc ? this._getInternalFormat(uc, cB._useSRGBBuffer) : cB._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : tB.RGBA;
        let Oc = uc ? this._getInternalFormat(uc) : tB.RGBA;
        cB._useSRGBBuffer && 1 === this.Tv && (Oc = qB);
        for (let Vc = 0; Vc < Pc.length; Vc++)
          if (Bc[Vc].width !== nc || Bc[Vc].height !== rB) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void sc.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = nc, this._workingCanvas.height = rB, this._workingContext.drawImage(Bc[Vc], 0, 0, Bc[Vc].width, Bc[Vc].height, 0, 0, nc, rB), tB.texImage2D(Pc[Vc], 0, qB, Oc, tB.UNSIGNED_BYTE, this._workingCanvas)
          } else tB.texImage2D(Pc[Vc], 0, qB, Oc, tB.UNSIGNED_BYTE, Bc[Vc]);
        Vc || tB.generateMipmap(tB.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(cB, !Vc), cB.width = nc, cB.height = rB, cB.isReady = !0, uc && (cB.format = uc), cB.onLoadedObservable.notifyObservers(cB), cB.onLoadedObservable.clear(), Ic && Ic()
      }), !!mB, ec)
    }, Ic.ThinEngine.prototype.generateMipMapsForCubemap = function(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (cB.generateMipMaps) {
        const nc = this._gl;
        this._bindTextureDirectly(nc.TEXTURE_CUBE_MAP, cB, !0), nc.generateMipmap(nc.TEXTURE_CUBE_MAP), Bc && this._bindTextureDirectly(nc.TEXTURE_CUBE_MAP, null)
      }
    });
    nc(38021);
    let fc = !1;
    fc || (fc = !0, Ic.ThinEngine.prototype.setDepthStencilTexture = function(cB, Bc, nc, Vc) {
      void 0 !== cB && (Bc && (this._boundUniforms[cB] = Bc), nc && nc.depthStencilTexture ? this._setTexture(cB, nc, !1, !0, Vc) : this._setTexture(cB, null, void 0, void 0, Vc))
    });
    let mB = !1;
    mB || (mB = !0, Ic.ThinEngine.prototype.createRenderTargetCubeTexture = function(cB, Bc) {
      const nc = this._createHardwareRenderTargetWrapper(!1, !0, cB),
        Vc = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Bc
        };
      Vc.generateStencilBuffer = Vc.generateDepthBuffer && Vc.generateStencilBuffer, (1 !== Vc.type || this._caps.textureFloatLinearFiltering) && (2 !== Vc.type || this._caps.textureHalfFloatLinearFiltering) || (Vc.samplingMode = 1);
      const Ic = this._gl,
        rB = new uc.e(this, 5);
      this._bindTextureDirectly(Ic.TEXTURE_CUBE_MAP, rB, !0);
      const Mc = this._getSamplingParameters(Vc.samplingMode, Vc.generateMipMaps);
      1 !== Vc.type || this._caps.textureFloat || (Vc.type = 0, sc.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Ic.texParameteri(Ic.TEXTURE_CUBE_MAP, Ic.TEXTURE_MAG_FILTER, Mc.mag), Ic.texParameteri(Ic.TEXTURE_CUBE_MAP, Ic.TEXTURE_MIN_FILTER, Mc.min), Ic.texParameteri(Ic.TEXTURE_CUBE_MAP, Ic.TEXTURE_WRAP_S, Ic.CLAMP_TO_EDGE), Ic.texParameteri(Ic.TEXTURE_CUBE_MAP, Ic.TEXTURE_WRAP_T, Ic.CLAMP_TO_EDGE);
      for (let uc = 0; uc < 6; uc++) Ic.texImage2D(Ic.TEXTURE_CUBE_MAP_POSITIVE_X + uc, 0, this._getRGBABufferInternalSizedFormat(Vc.type, Vc.format), cB, cB, 0, this._getInternalFormat(Vc.format), this._getWebGLTextureType(Vc.type), null);
      const Pc = Ic.createFramebuffer();
      return this._bindUnboundFramebuffer(Pc), nc._depthStencilBuffer = this._setupFramebufferDepthAttachments(Vc.generateStencilBuffer, Vc.generateDepthBuffer, cB, cB), Vc.generateMipMaps && Ic.generateMipmap(Ic.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Ic.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), nc._framebuffer = Pc, nc._generateDepthBuffer = Vc.generateDepthBuffer, nc._generateStencilBuffer = Vc.generateStencilBuffer, rB.width = cB, rB.height = cB, rB.isReady = !0, rB.isCube = !0, rB.samples = 1, rB.generateMipMaps = Vc.generateMipMaps, rB.samplingMode = Vc.samplingMode, rB.type = Vc.type, rB.format = Vc.format, this._internalTexturesCache.push(rB), nc.setTextures(rB), nc
    });
    var ec = nc(38029),
      tB = nc(38033);
    let Sc = !1;
    Sc || (Sc = !0, Ic.ThinEngine.prototype.createPrefilteredCubeTexture = function(cB, Bc, Vc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Mc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Pc = arguments.length > 6 ? arguments[6] : void 0,
        qB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Oc = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Tc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(cB, Bc, null, !1, (async cB => {
        if (!cB) return void(rB && rB(null));
        const Mc = cB.texture;
        if (Oc ? cB.info.sphericalPolynomial && (Mc._sphericalPolynomial = cB.info.sphericalPolynomial) : Mc._sphericalPolynomial = Mc._sphericalPolynomial ?? new ec.g, Mc._source = 9, this.getCaps().textureLOD) return void(rB && rB(Mc));
        const Pc = this._gl,
          qB = cB.width;
        if (!qB) return;
        const {
          DDSTools: Tc
        } = await nc.e(281).then((() => nc(39705))), fc = [];
        for (let nc = 0; nc < 3; nc++) {
          const rB = 1 - nc / 2,
            Oc = Ic,
            mB = Math.log2(qB) * Vc + Ic,
            ec = Oc + (mB - Oc) * rB,
            Sc = Math.round(Math.min(Math.max(ec, 0), mB)),
            yB = new uc.e(this, 2);
          if (yB.type = Mc.type, yB.format = Mc.format, yB.width = Math.pow(2, Math.max(Math.log2(qB) - Sc, 0)), yB.height = yB.width, yB.isCube = !0, yB._cachedWrapU = 0, yB._cachedWrapV = 0, this._bindTextureDirectly(Pc.TEXTURE_CUBE_MAP, yB, !0), yB.samplingMode = 2, Pc.texParameteri(Pc.TEXTURE_CUBE_MAP, Pc.TEXTURE_MAG_FILTER, Pc.LINEAR), Pc.texParameteri(Pc.TEXTURE_CUBE_MAP, Pc.TEXTURE_MIN_FILTER, Pc.LINEAR), Pc.texParameteri(Pc.TEXTURE_CUBE_MAP, Pc.TEXTURE_WRAP_S, Pc.CLAMP_TO_EDGE), Pc.texParameteri(Pc.TEXTURE_CUBE_MAP, Pc.TEXTURE_WRAP_T, Pc.CLAMP_TO_EDGE), cB.isDDS) {
            const Bc = cB.info,
              nc = cB.data;
            this._unpackFlipY(Bc.isCompressed), Tc.UploadDDSLevels(this, yB, nc, Bc, !0, 6, Sc)
          } else sc.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Pc.TEXTURE_CUBE_MAP, null);
          const zB = new tB.b(Bc);
          zB._isCube = !0, zB._texture = yB, yB.isReady = !0, fc.push(zB)
        }
        Mc._lodTextureHigh = fc[2], Mc._lodTextureMid = fc[1], Mc._lodTextureLow = fc[0], rB && rB(Mc)
      }), Mc, Pc, qB, Oc, Vc, Ic, null, void 0, !1, Tc)
    });
    var yB = nc(37983);
    let zB = !1;
    zB || (zB = !0, Ic.ThinEngine.prototype.createUniformBuffer = function(cB, Bc) {
      const nc = this._gl.createBuffer();
      if (!nc) throw new Error("Unable to create uniform buffer");
      const Vc = new yB.d(nc);
      return this.bindUniformBuffer(Vc), cB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, cB, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(cB), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Vc.references = 1, Vc
    }, Ic.ThinEngine.prototype.createDynamicUniformBuffer = function(cB, Bc) {
      const nc = this._gl.createBuffer();
      if (!nc) throw new Error("Unable to create dynamic uniform buffer");
      const Vc = new yB.d(nc);
      return this.bindUniformBuffer(Vc), cB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, cB, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(cB), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Vc.references = 1, Vc
    }, Ic.ThinEngine.prototype.updateUniformBuffer = function(cB, Bc, nc, Vc) {
      this.bindUniformBuffer(cB), void 0 === nc && (nc = 0), void 0 === Vc ? Bc instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, nc, Bc) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, nc, new Float32Array(Bc)) : Bc instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Bc.subarray(nc, nc + Vc)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Bc).subarray(nc, nc + Vc)), this.bindUniformBuffer(null)
    }, Ic.ThinEngine.prototype.bindUniformBuffer = function(cB) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, cB ? cB.underlyingResource : null)
    }, Ic.ThinEngine.prototype.bindUniformBufferBase = function(cB, Bc, nc) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Bc, cB ? cB.underlyingResource : null)
    }, Ic.ThinEngine.prototype.bindUniformBlock = function(cB, Bc, nc) {
      const Vc = cB.program,
        Ic = this._gl.getUniformBlockIndex(Vc, Bc);
      4294967295 !== Ic && this._gl.uniformBlockBinding(Vc, Ic, nc)
    });
    var pc = nc(37937),
      hc = nc(37965);
    let aB = !1;
    aB || (aB = !0, hc.e.prototype.displayLoadingUI = function() {
      if (!(0, pc.k)()) return;
      const cB = this.loadingScreen;
      cB && cB.displayLoadingUI()
    }, hc.e.prototype.hideLoadingUI = function() {
      if (!(0, pc.k)()) return;
      const cB = this._loadingScreen;
      cB && cB.hideLoadingUI()
    }, Object.defineProperty(hc.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = hc.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(cB) {
        this._loadingScreen = cB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(hc.e.prototype, "loadingUIText", {
      set: function(cB) {
        this.loadingScreen.loadingUIText = cB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(hc.e.prototype, "loadingUIBackgroundColor", {
      set: function(cB) {
        this.loadingScreen.loadingUIBackgroundColor = cB
      },
      enumerable: !0,
      configurable: !0
    })), (0, nc(38005).e)();
    let lc = !1;
    lc || (lc = !0, hc.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, hc.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, hc.e.prototype.setDepthFunction = function(cB) {
      this._depthCullingState.depthFunc = cB
    }, hc.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, hc.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, hc.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, hc.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, hc.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, hc.e.prototype.setDepthWrite = function(cB) {
      this._depthCullingState.depthMask = cB
    }, hc.e.prototype.setAlphaConstants = function(cB, Bc, nc, Vc) {
      this._alphaState.setAlphaBlendConstants(cB, Bc, nc, Vc)
    }, hc.e.prototype.getAlphaMode = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[cB]
    }, hc.e.prototype.getAlphaEquation = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[cB]
    });
    let Yc = !1;
    Yc || (Yc = !0, hc.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, hc.e.prototype.setStencilBuffer = function(cB) {
      this._stencilState.stencilTest = cB
    }, hc.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, hc.e.prototype.setStencilMask = function(cB) {
      this._stencilState.stencilMask = cB
    }, hc.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, hc.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, hc.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, hc.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, hc.e.prototype.setStencilFunction = function(cB) {
      this._stencilState.stencilFunc = cB
    }, hc.e.prototype.setStencilBackFunction = function(cB) {
      this._stencilState.stencilBackFunc = cB
    }, hc.e.prototype.setStencilFunctionReference = function(cB) {
      this._stencilState.stencilFuncRef = cB
    }, hc.e.prototype.setStencilFunctionMask = function(cB) {
      this._stencilState.stencilFuncMask = cB
    }, hc.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, hc.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, hc.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, hc.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, hc.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, hc.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, hc.e.prototype.setStencilOperationFail = function(cB) {
      this._stencilState.stencilOpStencilFail = cB
    }, hc.e.prototype.setStencilBackOperationFail = function(cB) {
      this._stencilState.stencilBackOpStencilFail = cB
    }, hc.e.prototype.setStencilOperationDepthFail = function(cB) {
      this._stencilState.stencilOpDepthFail = cB
    }, hc.e.prototype.setStencilBackOperationDepthFail = function(cB) {
      this._stencilState.stencilBackOpDepthFail = cB
    }, hc.e.prototype.setStencilOperationPass = function(cB) {
      this._stencilState.stencilOpStencilDepthPass = cB
    }, hc.e.prototype.setStencilBackOperationPass = function(cB) {
      this._stencilState.stencilBackOpStencilDepthPass = cB
    }, hc.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, hc.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    nc(38084);
    let Lc = !1;
    Lc || (Lc = !0, hc.e.prototype.createDepthStencilTexture = function(cB, Bc, nc) {
      if (Bc.isCube) {
        const nc = cB.width || cB;
        return this._createDepthStencilCubeTexture(nc, Bc)
      }
      return this._createDepthStencilTexture(cB, Bc, nc)
    });
    nc(38087), nc(38126);
    let gB = !1;
    gB || (gB = !0, Ic.ThinEngine.prototype.enableScissor = function(cB, Bc, nc, Vc) {
      const Ic = this._gl;
      Ic.enable(Ic.SCISSOR_TEST), Ic.scissor(cB, Bc, nc, Vc)
    }, Ic.ThinEngine.prototype.disableScissor = function() {
      const cB = this._gl;
      cB.disable(cB.SCISSOR_TEST)
    })
  },
  37887: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => hc
    });
    var Vc = nc(37895),
      Ic = nc(35780),
      rB = nc(37911),
      uc = nc(37968);
    class sc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Mc(cB)
      }
      sampleFrame() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Bc = cB - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Bc)
          }
          this._lastFrameTimeMs = cB
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
        const cB = this._rollingFrameTime.history(0);
        return 0 === cB ? 0 : 1e3 / cB
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
    class Mc {
      constructor(cB) {
        this._samples = new Array(cB), this.reset()
      }
      add(cB) {
        let Bc;
        if (this.isSaturated()) {
          const cB = this._samples[this._pos];
          Bc = cB - this.average, this.average -= Bc / (this._sampleCount - 1), this._m2 -= Bc * (cB - this.average)
        } else this._sampleCount++;
        Bc = cB - this.average, this.average += Bc / this._sampleCount, this._m2 += Bc * (cB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = cB, this._pos++, this._pos %= this._samples.length
      }
      history(cB) {
        if (cB >= this._sampleCount || cB >= this._samples.length) return 0;
        const Bc = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Bc - cB)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(cB) {
        const Bc = this._samples.length;
        return (cB % Bc + Bc) % Bc
      }
    }
    var Pc = nc(37983),
      qB = nc(37191),
      Oc = nc(37996),
      Tc = nc(37965),
      fc = nc(37937);

    function mB(cB) {
      const Bc = function(cB) {
        if (!(0, fc.f)() || !document.body) return null;
        const Bc = document.createElement("span");
        Bc.textContent = "Hg", Bc.style.font = cB;
        const nc = document.createElement("div");
        nc.style.display = "inline-block", nc.style.width = "1px", nc.style.height = "0px", nc.style.verticalAlign = "bottom";
        const Vc = document.createElement("div");
        let Ic, rB;
        Vc.style.whiteSpace = "nowrap", Vc.appendChild(Bc), Vc.appendChild(nc), document.body.appendChild(Vc);
        try {
          rB = nc.getBoundingClientRect().top - Bc.getBoundingClientRect().top, nc.style.verticalAlign = "baseline", Ic = nc.getBoundingClientRect().top - Bc.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Vc)
        }
        const uc = {
          ascent: Ic,
          height: rB,
          descent: rB - Ic
        };
        return ec(uc) ? uc : null
      }(cB);
      if (Bc) return Bc;
      const nc = function(cB) {
        let Bc = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Bc = new OffscreenCanvas(64, 64) : (0, fc.f)() && "function" === typeof document.createElement && (Bc = document.createElement("canvas"), Bc.width = 64, Bc.height = 64);
          const nc = Bc?.getContext("2d");
          if (!nc) return null;
          nc.font = cB;
          const Vc = nc.measureText("Hg"),
            Ic = Number(Vc.actualBoundingBoxAscent ?? Vc.fontBoundingBoxAscent),
            rB = Number(Vc.actualBoundingBoxDescent ?? Vc.fontBoundingBoxDescent),
            uc = {
              ascent: Ic,
              height: Ic + rB,
              descent: rB
            };
          return ec(uc) ? uc : null
        } catch {
          return null
        } finally {
          const cB = Bc;
          "function" === typeof cB?.dispose && cB.dispose()
        }
      }(cB);
      return nc || function(cB) {
        const Bc = Math.max(1, function(cB) {
            const Bc = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(cB || ""));
            return Bc ? Number(Bc[1]) : 16
          }(cB)),
          nc = .8 * Bc,
          Vc = .2 * Bc;
        return {
          ascent: nc,
          height: nc + Vc,
          descent: Vc
        }
      }(cB)
    }

    function ec(cB) {
      return Number.isFinite(cB.ascent) && Number.isFinite(cB.height) && Number.isFinite(cB.descent) && cB.height > 0
    }

    function tB(cB) {
      if (cB.requestPointerLock) {
        const Bc = cB.requestPointerLock();
        Bc instanceof Promise ? Bc.then((() => {
          cB.focus()
        })).catch((() => {})) : cB.focus()
      }
    }
    var Sc = nc(38002),
      yB = nc(37963),
      zB = nc(38005),
      pc = nc(38010);
    class hc extends rB.ThinEngine {
      static get NpmPackage() {
        return Tc.e.NpmPackage
      }
      static get Version() {
        return Tc.e.Version
      }
      static get Instances() {
        return Ic.d.Instances
      }
      static get LastCreatedEngine() {
        return Ic.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Ic.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(cB) {
        return Tc.e.DefaultLoadingScreenFactory(cB)
      }
      get _supportsHardwareTextureRescaling() {
        return !!hc._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, zB.e)(), (0, pc.b)(), super(cB, Bc, nc, Vc), this._performanceMonitor = new sc, this._drawCalls = new Sc.e, cB && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(cB) {
        super._sharedInit(cB),
          function(cB, Bc, nc) {
            cB._onCanvasFocus = () => {
              cB.onCanvasFocusObservable.notifyObservers(cB)
            }, cB._onCanvasBlur = () => {
              cB.onCanvasBlurObservable.notifyObservers(cB)
            }, cB._onCanvasContextMenu = Bc => {
              cB.disableContextMenu && Bc.preventDefault()
            }, Bc.addEventListener("focus", cB._onCanvasFocus), Bc.addEventListener("blur", cB._onCanvasBlur), Bc.addEventListener("contextmenu", cB._onCanvasContextMenu), cB._onBlur = () => {
              cB.disablePerformanceMonitorInBackground && cB.performanceMonitor.disable(), cB._windowIsBackground = !0
            }, cB._onFocus = () => {
              cB.disablePerformanceMonitorInBackground && cB.performanceMonitor.enable(), cB._windowIsBackground = !1
            }, cB._onCanvasPointerOut = nc => {
              document.elementFromPoint(nc.clientX, nc.clientY) !== Bc && cB.onCanvasPointerOutObservable.notifyObservers(nc)
            };
            const Vc = cB.getHostWindow();
            Vc && "function" === typeof Vc.addEventListener && (Vc.addEventListener("blur", cB._onBlur), Vc.addEventListener("focus", cB._onFocus)), Bc.addEventListener("pointerout", cB._onCanvasPointerOut), nc.doNotHandleTouchAction || function(cB) {
              cB && cB.setAttribute && (cB.setAttribute("touch-action", "none"), cB.style.touchAction = "none", cB.style.webkitTapHighlightColor = "transparent")
            }(Bc), !Tc.e.audioEngine && nc.audioEngine && Tc.e.AudioEngineFactory && (Tc.e.audioEngine = Tc.e.AudioEngineFactory(cB.getRenderingCanvas(), cB.getAudioContext(), cB.getAudioDestination())), (0, fc.f)() && (cB._onFullscreenChange = () => {
              cB.isFullscreen = !!document.fullscreenElement, cB.isFullscreen && cB._pointerLockRequested && Bc && tB(Bc)
            }, document.addEventListener("fullscreenchange", cB._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", cB._onFullscreenChange, !1), cB._onPointerLockChange = () => {
              cB.isPointerLock = document.pointerLockElement === Bc
            }, document.addEventListener("pointerlockchange", cB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", cB._onPointerLockChange, !1)), cB.enableOfflineSupport = void 0 !== Tc.e.OfflineProviderFactory, cB._deterministicLockstep = !!nc.deterministicLockstep, cB._lockstepMaxSteps = nc.lockstepMaxSteps || 0, cB._timeStep = nc.timeStep || 1 / 60
          }(this, cB, this._creationOptions)
      }
      resizeImageBitmap(cB, Bc, nc) {
        return function(cB, Bc, nc, Vc) {
          const Ic = cB.createCanvas(nc, Vc).getContext("2d");
          if (!Ic) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Ic.drawImage(Bc, 0, 0), Ic.getImageData(0, 0, nc, Vc).data
        }(this, cB, Bc, nc)
      }
      async _createImageBitmapFromSource(cB, Bc) {
        return await async function(cB, Bc, nc) {
          return await new Promise(((Vc, Ic) => {
            const rB = new Image;
            rB.onload = () => {
              rB.decode().then((() => {
                cB.createImageBitmap(rB, nc).then((cB => {
                  Vc(cB)
                }))
              }))
            }, rB.onerror = () => {
              Ic(`Error loading image ${rB.src}`)
            }, rB.src = Bc
          }))
        }(this, cB, Bc)
      }
      switchFullscreen(cB) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(cB)
      }
      enterFullscreen(cB) {
        this.isFullscreen || (this._pointerLockRequested = cB, this._renderingCanvas && function(cB) {
          const Bc = cB.requestFullscreen || cB.webkitRequestFullscreen;
          Bc && Bc.call(cB)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const cB = document;
          document.exitFullscreen ? document.exitFullscreen() : cB.webkitCancelFullScreen && cB.webkitCancelFullScreen()
        }()
      }
      setDitheringState(cB) {
        cB ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(cB) {
        cB ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(cB, Bc, nc, Vc) {
        const Ic = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(cB, Bc, nc, Vc), Ic
      }
      scissorClear(cB, Bc, nc, Vc, Ic) {
        this.enableScissor(cB, Bc, nc, Vc), this.clear(Ic, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(cB) {
        const Bc = this._gl.getAttachedShaders(cB);
        return Bc ? this._gl.getShaderSource(Bc[0]) : null
      }
      getFragmentShaderSource(cB) {
        const Bc = this._gl.getAttachedShaders(cB);
        return Bc ? this._gl.getShaderSource(Bc[1]) : null
      }
      set framebufferDimensionsObject(cB) {
        this._framebufferDimensionsObject = cB, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const cB of this.scenes) cB.resetCachedMaterial(), cB._rebuildGeometries();
        for (const cB of this._virtualScenes) cB.resetCachedMaterial(), cB._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(cB) {
        return mB(cB)
      }
      enterPointerlock() {
        this._renderingCanvas && tB(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      sC() {
        this._measureFps(), super.sC()
      }
      _deletePipelineContext(cB) {
        const Bc = cB;
        Bc && Bc.program && Bc.transformFeedback && (this.deleteTransformFeedback(Bc.transformFeedback), Bc.transformFeedback = null), super._deletePipelineContext(cB)
      }
      createShaderProgram(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Ic = Ic || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const uc = super.createShaderProgram(cB, Bc, nc, Vc, Ic, rB);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), uc
      }
      _createShaderProgram(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const rB = Vc.createProgram();
        if (cB.program = rB, !rB) throw new Error("Unable to create program");
        if (Vc.attachShader(rB, Bc), Vc.attachShader(rB, nc), this.Tv > 1 && Ic) {
          const Bc = this.createTransformFeedback();
          this.bindTransformFeedback(Bc), this.setTranformFeedbackVaryings(rB, Ic), cB.transformFeedback = Bc
        }
        return Vc.linkProgram(rB), this.Tv > 1 && Ic && this.bindTransformFeedback(null), cB.context = Vc, cB.vertexShader = Bc, cB.fragmentShader = nc, cB.isParallelCompiled || this._finalizePipelineContext(cB), rB
      }
      _releaseTexture(cB) {
        super._releaseTexture(cB)
      }
      _releaseRenderTargetWrapper(cB) {
        super._releaseRenderTargetWrapper(cB);
        for (const Bc of this.scenes) {
          for (const nc of Bc.postProcesses) nc._outputTexture === cB && (nc._outputTexture = null);
          for (const nc of Bc.cameras)
            for (const Bc of nc._postProcesses) Bc && Bc._outputTexture === cB && (Bc._outputTexture = null)
        }
      }
      _rescaleTexture(cB, Bc, nc, Vc, Ic) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const rB = this.createRenderTargetTexture({
          width: Bc.width,
          height: Bc.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && hc._RescalePostProcessFactory && (this._rescalePostProcess = hc._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const uc = () => {
              this._rescalePostProcess.onApply = function(Bc) {
                Bc._bindTexture("textureSampler", cB)
              };
              let uc = nc;
              uc || (uc = this.scenes[this.scenes.length - 1]), uc.postProcessManager.directRender([this._rescalePostProcess], rB, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Bc, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Vc, 0, 0, Bc.width, Bc.height, 0), this.unBindFramebuffer(rB), rB.dispose(), Ic && Ic()
            },
            sc = this._rescalePostProcess.getEffect();
          sc ? sc.executeWhenCompiled(uc) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((cB => {
            cB.executeWhenCompiled(uc)
          }))
        }
      }
      wrapWebGLTexture(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const uc = new Oc.b(cB, this._gl),
          sc = new Vc.e(this, 15, !0);
        return sc._hardwareTexture = uc, sc.baseWidth = Ic, sc.baseHeight = rB, sc.width = Ic, sc.height = rB, sc.isReady = !0, sc.useMipMaps = Bc, this.updateTextureSamplingMode(nc, sc), sc
      }
      updateWrappedWebGLTexture(cB, Bc) {
        if (15 !== cB.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Vc of this._renderTargetWrapperCache)
          if (Vc.textures?.includes(cB)) {
            if (Vc.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Vc._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } cB._hardwareTexture = new Oc.b(Bc, this._gl), cB.isReady = !0, cB._cachedCoordinatesMode = null, cB._cachedWrapU = null, cB._cachedWrapV = null, cB._cachedWrapR = null, cB._cachedAnisotropicFilteringLevel = null;
        for (const Vc in this._boundTexturesCache) this._boundTexturesCache[Vc] === cB && (this._boundTexturesCache[Vc] = null);
        this.updateTextureSamplingMode(cB.samplingMode, cB);
        const nc = this._gl;
        for (const Vc of this._renderTargetWrapperCache) {
          if (Vc.texture !== cB) continue;
          const Ic = Vc,
            rB = Vc.samples,
            uc = rB > 1;
          Ic._framebuffer && nc.deleteFramebuffer(Ic._framebuffer), !uc && Ic._depthStencilBuffer && (nc.deleteRenderbuffer(Ic._depthStencilBuffer), Ic._depthStencilBuffer = null);
          const sc = this._currentFramebuffer,
            Mc = nc.createFramebuffer();
          this._bindUnboundFramebuffer(Mc), nc.framebufferTexture2D(nc.FRAMEBUFFER, nc.COLOR_ATTACHMENT0, nc.TEXTURE_2D, Bc, 0), uc || (Ic._depthStencilBuffer = this._setupFramebufferDepthAttachments(Vc._generateStencilBuffer, Vc._generateDepthBuffer, Vc.width, Vc.height)), this._bindUnboundFramebuffer(sc), Ic._framebuffer = Mc, uc && (Vc._samples = 1, this.updateRenderTargetTextureSampleCount(Ic, rB))
        }
      }
      _uploadImageToTexture(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ic = this._gl,
          rB = this._getWebGLTextureType(cB.type),
          uc = this._getInternalFormat(cB.format),
          sc = this._getRGBABufferInternalSizedFormat(cB.type, uc),
          Mc = cB.isCube ? Ic.TEXTURE_CUBE_MAP : Ic.TEXTURE_2D;
        this._bindTextureDirectly(Mc, cB, !0), this._unpackFlipY(cB.invertY);
        let Pc = Ic.TEXTURE_2D;
        cB.isCube && (Pc = Ic.TEXTURE_CUBE_MAP_POSITIVE_X + nc), Ic.texImage2D(Pc, Vc, sc, uc, rB, Bc), this._bindTextureDirectly(Mc, null, !0)
      }
      updateTextureComparisonFunction(cB, Bc) {
        if (1 === this.Tv) return void qB.c.Error("WebGL 1 does not support texture comparison.");
        const nc = this._gl;
        cB.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, cB, !0), 0 === Bc ? (nc.texParameteri(nc.TEXTURE_CUBE_MAP, nc.TEXTURE_COMPARE_FUNC, 515), nc.texParameteri(nc.TEXTURE_CUBE_MAP, nc.TEXTURE_COMPARE_MODE, nc.NONE)) : (nc.texParameteri(nc.TEXTURE_CUBE_MAP, nc.TEXTURE_COMPARE_FUNC, Bc), nc.texParameteri(nc.TEXTURE_CUBE_MAP, nc.TEXTURE_COMPARE_MODE, nc.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, cB, !0), 0 === Bc ? (nc.texParameteri(nc.TEXTURE_2D, nc.TEXTURE_COMPARE_FUNC, 515), nc.texParameteri(nc.TEXTURE_2D, nc.TEXTURE_COMPARE_MODE, nc.NONE)) : (nc.texParameteri(nc.TEXTURE_2D, nc.TEXTURE_COMPARE_FUNC, Bc), nc.texParameteri(nc.TEXTURE_2D, nc.TEXTURE_COMPARE_MODE, nc.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), cB._comparisonFunction = Bc
      }
      createInstancesBuffer(cB) {
        const Bc = this._gl.createBuffer();
        if (!Bc) throw new Error("Unable to create instance buffer");
        const nc = new Pc.d(Bc);
        return nc.Qc = cB, this.bindArrayBuffer(nc), this._gl.bufferData(this._gl.ARRAY_BUFFER, cB, this._gl.DYNAMIC_DRAW), nc.references = 1, nc
      }
      deleteInstancesBuffer(cB) {
        this._gl.deleteBuffer(cB)
      }
      async _clientWaitAsync(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Vc = this._gl;
        return await new Promise(((Ic, rB) => {
          (0, yB.h)((() => {
            const nc = Vc.clientWaitSync(cB, Bc, 0);
            if (nc == Vc.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return nc != Vc.TIMEOUT_EXPIRED
          }), Ic, rB, nc)
        }))
      }
      _readPixelsAsync(cB, Bc, nc, Vc, Ic, rB, uc) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const sc = this._gl,
          Mc = sc.createBuffer();
        sc.bindBuffer(sc.PIXEL_PACK_BUFFER, Mc), sc.bufferData(sc.PIXEL_PACK_BUFFER, uc.byteLength, sc.STREAM_READ), sc.readPixels(cB, Bc, nc, Vc, Ic, rB, 0), sc.bindBuffer(sc.PIXEL_PACK_BUFFER, null);
        const Pc = sc.fenceSync(sc.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Pc ? (sc.flush(), this._clientWaitAsync(Pc, 0, 10).then((() => (sc.deleteSync(Pc), sc.bindBuffer(sc.PIXEL_PACK_BUFFER, Mc), sc.getBufferSubData(sc.PIXEL_PACK_BUFFER, 0, uc), sc.bindBuffer(sc.PIXEL_PACK_BUFFER, null), sc.deleteBuffer(Mc), uc)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(cB, Bc) {
            1 === Ic.d.Instances.length && Tc.e.audioEngine && (Tc.e.audioEngine.dispose(), Tc.e.audioEngine = null);
            const nc = cB.getHostWindow();
            nc && "function" === typeof nc.removeEventListener && (nc.removeEventListener("blur", cB._onBlur), nc.removeEventListener("focus", cB._onFocus)), Bc && (Bc.removeEventListener("focus", cB._onCanvasFocus), Bc.removeEventListener("blur", cB._onCanvasBlur), Bc.removeEventListener("pointerout", cB._onCanvasPointerOut), Bc.removeEventListener("contextmenu", cB._onCanvasContextMenu)), (0, fc.f)() && (document.removeEventListener("fullscreenchange", cB._onFullscreenChange), document.removeEventListener("mozfullscreenchange", cB._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", cB._onFullscreenChange), document.removeEventListener("msfullscreenchange", cB._onFullscreenChange), document.removeEventListener("pointerlockchange", cB._onPointerLockChange), document.removeEventListener("mspointerlockchange", cB._onPointerLockChange), document.removeEventListener("mozpointerlockchange", cB._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", cB._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    hc.ALPHA_DISABLE = 0, hc.ALPHA_ADD = 1, hc.ALPHA_COMBINE = 2, hc.ALPHA_SUBTRACT = 3, hc.ALPHA_MULTIPLY = 4, hc.ALPHA_MAXIMIZED = 5, hc.ALPHA_ONEONE = 6, hc.ALPHA_PREMULTIPLIED = 7, hc.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, hc.ALPHA_INTERPOLATE = 9, hc.ALPHA_SCREENMODE = 10, hc.DELAYLOADSTATE_NONE = 0, hc.DELAYLOADSTATE_LOADED = 1, hc.DELAYLOADSTATE_LOADING = 2, hc.DELAYLOADSTATE_NOTLOADED = 4, hc.NEVER = 512, hc.ALWAYS = 519, hc.LESS = 513, hc.EQUAL = 514, hc.LEQUAL = 515, hc.GREATER = 516, hc.GEQUAL = 518, hc.NOTEQUAL = 517, hc.KEEP = 7680, hc.REPLACE = 7681, hc.INCR = 7682, hc.DECR = 7683, hc.INVERT = 5386, hc.INCR_WRAP = 34055, hc.DECR_WRAP = 34056, hc.TEXTURE_CLAMP_ADDRESSMODE = 0, hc.TEXTURE_WRAP_ADDRESSMODE = 1, hc.TEXTURE_MIRROR_ADDRESSMODE = 2, hc.TEXTUREFORMAT_ALPHA = 0, hc.TEXTUREFORMAT_LUMINANCE = 1, hc.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, hc.TEXTUREFORMAT_RGB = 4, hc.TEXTUREFORMAT_RGBA = 5, hc.TEXTUREFORMAT_RED = 6, hc.TEXTUREFORMAT_R = 6, hc.TEXTUREFORMAT_R16_UNORM = 33322, hc.TEXTUREFORMAT_RG16_UNORM = 33324, hc.TEXTUREFORMAT_RGB16_UNORM = 32852, hc.TEXTUREFORMAT_RGBA16_UNORM = 32859, hc.TEXTUREFORMAT_R16_SNORM = 36760, hc.TEXTUREFORMAT_RG16_SNORM = 36761, hc.TEXTUREFORMAT_RGB16_SNORM = 36762, hc.TEXTUREFORMAT_RGBA16_SNORM = 36763, hc.TEXTUREFORMAT_RG = 7, hc.TEXTUREFORMAT_RED_INTEGER = 8, hc.TEXTUREFORMAT_R_INTEGER = 8, hc.TEXTUREFORMAT_RG_INTEGER = 9, hc.TEXTUREFORMAT_RGB_INTEGER = 10, hc.TEXTUREFORMAT_RGBA_INTEGER = 11, hc.TEXTURETYPE_UNSIGNED_BYTE = 0, hc.TEXTURETYPE_UNSIGNED_INT = 0, hc.TEXTURETYPE_FLOAT = 1, hc.TEXTURETYPE_HALF_FLOAT = 2, hc.TEXTURETYPE_BYTE = 3, hc.TEXTURETYPE_SHORT = 4, hc.TEXTURETYPE_UNSIGNED_SHORT = 5, hc.TEXTURETYPE_INT = 6, hc.TEXTURETYPE_UNSIGNED_INTEGER = 7, hc.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, hc.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, hc.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, hc.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, hc.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, hc.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, hc.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, hc.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, hc.TEXTURE_NEAREST_SAMPLINGMODE = 1, hc.TEXTURE_BILINEAR_SAMPLINGMODE = 2, hc.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, hc.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, hc.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, hc.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, hc.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, hc.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, hc.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, hc.TEXTURE_NEAREST_LINEAR = 7, hc.TEXTURE_NEAREST_NEAREST = 1, hc.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, hc.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, hc.TEXTURE_LINEAR_LINEAR = 2, hc.TEXTURE_LINEAR_NEAREST = 12, hc.TEXTURE_EXPLICIT_MODE = 0, hc.TEXTURE_SPHERICAL_MODE = 1, hc.TEXTURE_PLANAR_MODE = 2, hc.TEXTURE_CUBIC_MODE = 3, hc.TEXTURE_PROJECTION_MODE = 4, hc.TEXTURE_SKYBOX_MODE = 5, hc.TEXTURE_INVCUBIC_MODE = 6, hc.TEXTURE_EQUIRECTANGULAR_MODE = 7, hc.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, hc.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, hc.SCALEMODE_FLOOR = 1, hc.SCALEMODE_NEAREST = 2, hc.SCALEMODE_CEILING = 3
  },
  38025: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(38e3);
    class Ic {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(cB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = cB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, cB && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Vc.b)(cB.format))
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
      getBaseArrayLayer(cB) {
        if (!this._textures) return -1;
        const Bc = this._textures[cB],
          nc = this._layerIndices?.[cB] ?? 0,
          Vc = this._faceIndices?.[cB] ?? 0;
        return Bc.isCube ? 6 * nc + Vc : Bc.is3D ? 0 : nc
      }
      get samples() {
        return this._samples
      }
      setSamples(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === cB && !nc) return cB;
        const Vc = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, cB, Bc) : this._engine.updateRenderTargetTextureSampleCount(this, cB);
        return this._samples = cB, Vc
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(cB, Bc, nc, Vc, Ic) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = cB, this._isCube = Bc, this._size = nc, this._engine = Vc, this._depthStencilTexture = null, this.label = Ic
      }
      setTextures(cB) {
        Array.isArray(cB) ? this._textures = cB : this._textures = cB ? [cB] : null
      }
      setTexture(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Bc] !== cB && (this._textures[Bc] && nc && this._textures[Bc].dispose(), this._textures[Bc] = cB)
      }
      setLayerAndFaceIndices(cB, Bc) {
        this._layerIndices = cB, this._faceIndices = Bc
      }
      setLayerAndFaceIndex() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Bc && Bc >= 0 && (this._layerIndices[cB] = Bc), void 0 !== nc && nc >= 0 && (this._faceIndices[cB] = nc)
      }
      createDepthStencilTexture() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = nc, this._depthStencilTextureLabel = rB, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Bc,
          comparisonFunction: cB,
          generateStencil: nc,
          isCube: this._isCube,
          samples: Vc,
          depthTextureFormat: Ic,
          label: rB
        }, this), this._depthStencilTexture
      }
      _shareDepth(cB) {
        this.shareDepth(cB)
      }
      shareDepth(cB) {
        this._depthStencilTexture && (cB._depthStencilTexture && cB._depthStencilTexture.dispose(), cB._depthStencilTexture = this._depthStencilTexture, cB._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(cB) {
        this.texture && this.texture._swapAndDie(cB), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let cB = null;
        if (this._isMulti) {
          const Bc = this.textures;
          if (Bc && Bc.length > 0) {
            let nc = !1,
              Vc = Bc.length,
              Ic = -1;
            const rB = Bc[Bc.length - 1]._source;
            14 !== rB && 12 !== rB || (nc = !0, Ic = Bc[Bc.length - 1].format, Vc--);
            const uc = [],
              sc = [],
              Mc = [],
              Pc = [],
              qB = [],
              Oc = [],
              Tc = [],
              fc = {};
            for (let cB = 0; cB < Vc; ++cB) {
              const nc = Bc[cB];
              uc.push(nc.samplingMode), sc.push(nc.type), Mc.push(nc.format);
              void 0 !== fc[nc.uniqueId] ? (Pc.push(-1), Tc.push(0)) : (fc[nc.uniqueId] = cB, nc.is2DArray ? (Pc.push(35866), Tc.push(nc.depth)) : nc.isCube ? (Pc.push(34067), Tc.push(0)) : nc.is3D ? (Pc.push(32879), Tc.push(nc.depth)) : (Pc.push(3553), Tc.push(0))), this._faceIndices && qB.push(this._faceIndices[cB] ?? 0), this._layerIndices && Oc.push(this._layerIndices[cB] ?? 0)
            }
            const mB = {
                samplingModes: uc,
                generateMipMaps: Bc[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: nc,
                depthTextureFormat: Ic,
                types: sc,
                formats: Mc,
                ffc: Vc,
                targetTypes: Pc,
                faceIndex: qB,
                layerIndex: Oc,
                layerCounts: Tc,
                label: this.label
              },
              ec = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            cB = this._engine.createMultipleRenderTarget(ec, mB);
            for (let tB = 0; tB < Vc; ++tB) {
              if (-1 !== Pc[tB]) continue;
              const nc = fc[Bc[tB].uniqueId];
              cB.setTexture(cB.textures[nc], tB)
            }
          }
        } else {
          const Bc = {};
          if (Bc.generateDepthBuffer = this._generateDepthBuffer, Bc.generateMipMaps = this.texture?.generateMipMaps ?? !1, Bc.generateStencilBuffer = this._generateStencilBuffer, Bc.samplingMode = this.texture?.samplingMode, Bc.type = this.texture?.type, Bc.format = this.texture?.format, Bc.noColorAttachment = !this._textures, Bc.label = this.label, this.isCube) cB = this._engine.createRenderTargetCubeTexture(this.width, Bc);
          else {
            const nc = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            cB = this._engine.createRenderTargetTexture(nc, Bc)
          }
          cB.texture && (cB.texture.isReady = !0)
        }
        return cB
      }
      _swapRenderTargetWrapper(cB) {
        if (this._textures && cB._textures)
          for (let Bc = 0; Bc < this._textures.length; ++Bc) this._textures[Bc]._swapAndDie(cB._textures[Bc], !1), cB._textures[Bc].isReady = !0;
        this._depthStencilTexture && cB._depthStencilTexture && (this._depthStencilTexture._swapAndDie(cB._depthStencilTexture), cB._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const cB = this._cloneRenderTargetWrapper();
        if (cB) {
          if (this._depthStencilTexture) {
            const Bc = this._depthStencilTexture.samplingMode,
              nc = this._depthStencilTexture.format,
              Vc = 2 === Bc || 3 === Bc || 11 === Bc;
            cB.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Vc, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, nc, this._depthStencilTextureLabel)
          }
          this.samples > 1 && cB.setSamples(this.samples), cB._swapRenderTargetWrapper(this), cB.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let cB = 0; cB < this._textures.length; ++cB) this._textures[cB].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  38441: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    class Vc {
      static get ForceFullSceneLoadingForIncremental() {
        return Vc._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(cB) {
        Vc._ForceFullSceneLoadingForIncremental = cB
      }
      static get ShowLoadingScreen() {
        return Vc._ShowLoadingScreen
      }
      static set ShowLoadingScreen(cB) {
        Vc._ShowLoadingScreen = cB
      }
      static get loggingLevel() {
        return Vc._LoggingLevel
      }
      static set loggingLevel(cB) {
        Vc._LoggingLevel = cB
      }
      static get CleanBoneMatrixWeights() {
        return Vc._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(cB) {
        Vc._CleanBoneMatrixWeights = cB
      }
    }
    Vc._ForceFullSceneLoadingForIncremental = !1, Vc._ShowLoadingScreen = !0, Vc._CleanBoneMatrixWeights = !1, Vc._LoggingLevel = 0
  },
  38135: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(37191);
    const Ic = new Map;

    function rB(cB, Bc) {
      (function(cB) {
        return Ic.delete(cB)
      })(cB) && Vc.c.Warn(`Extension with the name '${cB}' already exists`), Ic.set(cB, Bc)
    }

    function uc(cB, Bc) {
      "image/ktx" !== Bc && "image/ktx2" !== Bc || (cB = ".ktx"), Ic.has(cB) || (cB.endsWith(".ies") && rB(".ies", (async () => await nc.e(284).then((() => nc(39712))).then((cB => new cB._IESTextureLoader)))), cB.endsWith(".dds") && rB(".dds", (async () => await nc.e(282).then((() => nc(39715))).then((cB => new cB._DDSTextureLoader)))), cB.endsWith(".basis") && rB(".basis", (async () => await nc.e(285).then((() => nc(39722))).then((cB => new cB._BasisTextureLoader)))), cB.endsWith(".env") && rB(".env", (async () => await Promise.all([nc.e(286), nc.e(283)]).then((() => nc(39731))).then((cB => new cB._ENVTextureLoader)))), cB.endsWith(".hdr") && rB(".hdr", (async () => await nc.e(287).then((() => nc(39780))).then((cB => new cB._HDRTextureLoader)))), (cB.endsWith(".ktx") || cB.endsWith(".ktx2")) && (rB(".ktx", (async () => await nc.e(288).then((() => nc(39785))).then((cB => new cB._KTXTextureLoader)))), rB(".ktx2", (async () => await nc.e(288).then((() => nc(39785))).then((cB => new cB._KTXTextureLoader))))), cB.endsWith(".tga") && rB(".tga", (async () => await nc.e(289).then((() => nc(39794))).then((cB => new cB._TGATextureLoader)))), cB.endsWith(".exr") && rB(".exr", (async () => await nc.e(290).then((() => nc(39797))).then((cB => new cB._ExrTextureLoader)))));
      const Vc = Ic.get(cB);
      return Vc ? Promise.resolve(Vc(Bc)) : null
    }
  },
  38461: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => Pc
    });
    var Vc = nc(38326),
      Ic = nc(38075),
      rB = nc(35799);
    class uc extends Vc.c {
      get msc() {
        return this._subMaterials
      }
      set msc(cB) {
        this._subMaterials = cB, this._hookArray(cB)
      }
      getChildren() {
        return this.msc
      }
      constructor(cB, Bc) {
        super(cB, Bc, !0), this._waitingSubMaterialsUniqueIds = [], this.knc().addMultiMaterial(this), this.msc = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(cB) {
        var Bc = this;
        const nc = cB.push;
        cB.push = function() {
          for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
          const uc = nc.apply(cB, Ic);
          return Bc._markAllSubMeshesAsTexturesDirty(), uc
        };
        const Vc = cB.splice;
        cB.splice = (Bc, nc) => {
          const Ic = Vc.call(cB, Bc, nc ?? cB.length);
          return this._markAllSubMeshesAsTexturesDirty(), Ic
        }
      }
      getSubMaterial(cB) {
        return cB < 0 || cB >= this.msc.length ? this.knc().defaultMaterial : this.msc[cB]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.msc.map((cB => cB ? cB.getActiveTextures() : [])))
      }
      hasTexture(cB) {
        if (super.hasTexture(cB)) return !0;
        for (let Bc = 0; Bc < this.msc.length; Bc++)
          if (this.msc[Bc]?.hasTexture(cB)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(cB, Bc, nc) {
        for (let Vc = 0; Vc < this.msc.length; Vc++) {
          const Ic = this.msc[Vc];
          if (Ic) {
            if (Ic._storeEffectOnSubMeshes) {
              if (!Ic.isReadyForSubMesh(cB, Bc, nc)) return !1;
              continue
            }
            if (!Ic.isReady(cB)) return !1
          }
        }
        return !0
      }
      clone(cB, Bc) {
        const nc = new uc(cB, this.knc());
        for (let Vc = 0; Vc < this.msc.length; Vc++) {
          let Ic;
          const rB = this.msc[Vc];
          Ic = Bc && rB ? rB.clone(cB + "-" + rB.name) : this.msc[Vc], nc.msc.push(Ic)
        }
        return nc
      }
      serialize() {
        const cB = {};
        cB.name = this.name, cB.id = this.id, cB.uniqueId = this.uniqueId, Ic.c && (cB.tags = Ic.c.GetTags(this)), cB.materialsUniqueIds = [], cB.materials = [];
        for (let Bc = 0; Bc < this.msc.length; Bc++) {
          const nc = this.msc[Bc];
          nc ? (cB.materialsUniqueIds.push(nc.uniqueId), cB.materials.push(nc.id)) : (cB.materialsUniqueIds.push(null), cB.materials.push(null))
        }
        return cB
      }
      dispose(cB, Bc, nc) {
        const Vc = this.knc();
        if (!Vc) return;
        if (nc)
          for (let rB = 0; rB < this.msc.length; rB++) {
            const nc = this.msc[rB];
            nc && nc.dispose(cB, Bc)
          }
        const Ic = Vc.multiMaterials.indexOf(this);
        Ic >= 0 && Vc.multiMaterials.splice(Ic, 1), super.dispose(cB, Bc)
      }
    }
    let sc = !1;

    function Mc(cB, Bc) {
      const nc = new uc(cB.name, Bc);
      if (nc.id = cB.id, nc._loadedUniqueId = cB.uniqueId, Ic.c && Ic.c.AddTagsTo(nc, cB.tags), cB.materialsUniqueIds) nc._waitingSubMaterialsUniqueIds = cB.materialsUniqueIds;
      else
        for (const Vc of cB.materials) nc.msc.push(Bc.getLastMaterialById(Vc));
      return nc
    }

    function Pc() {
      sc || (sc = !0, uc.ParseMultiMaterial = Mc, (0, rB.d)("BABYLON.MultiMaterial", uc))
    }
  },
  38264: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc, Ic, rB = nc(35756);
    ! function(cB) {
      cB[cB.LOCAL = 0] = "LOCAL", cB[cB.WORLD = 1] = "WORLD", cB[cB.BONE = 2] = "BONE"
    }(Vc || (Vc = {}));
    class uc {}
    uc.X = new rB.p(1, 0, 0), uc.Y = new rB.p(0, 1, 0), uc.Z = new rB.p(0, 0, 1),
      function(cB) {
        cB[cB.X = 0] = "X", cB[cB.Y = 1] = "Y", cB[cB.Z = 2] = "Z"
      }(Ic || (Ic = {}))
  },
  38029: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      g: () => Pc
    });
    var Vc = nc(35756);
    const Ic = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      rB = [() => 1, cB => cB.y, cB => cB.z, cB => cB.x, cB => cB.x * cB.y, cB => cB.y * cB.z, cB => 3 * cB.z * cB.z - 1, cB => cB.x * cB.z, cB => cB.x * cB.x - cB.y * cB.y],
      uc = (cB, Bc) => Ic[cB] * rB[cB](Bc),
      sc = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Mc {
      constructor() {
        this.preScaled = !1, this.l00 = Vc.p.Zero(), this.l1_1 = Vc.p.Zero(), this.l10 = Vc.p.Zero(), this.l11 = Vc.p.Zero(), this.l2_2 = Vc.p.Zero(), this.l2_1 = Vc.p.Zero(), this.l20 = Vc.p.Zero(), this.l21 = Vc.p.Zero(), this.l22 = Vc.p.Zero()
      }
      addLight(cB, Bc, nc) {
        Vc.i.KV[0].set(Bc.r, Bc.g, Bc.b);
        const Ic = Vc.i.KV[0],
          rB = Vc.i.KV[1];
        Ic.scaleToRef(nc, rB), rB.scaleToRef(uc(0, cB), Vc.i.KV[2]), this.l00.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(1, cB), Vc.i.KV[2]), this.l1_1.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(2, cB), Vc.i.KV[2]), this.l10.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(3, cB), Vc.i.KV[2]), this.l11.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(4, cB), Vc.i.KV[2]), this.l2_2.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(5, cB), Vc.i.KV[2]), this.l2_1.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(6, cB), Vc.i.KV[2]), this.l20.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(7, cB), Vc.i.KV[2]), this.l21.addInPlace(Vc.i.KV[2]), rB.scaleToRef(uc(8, cB), Vc.i.KV[2]), this.l22.addInPlace(Vc.i.KV[2])
      }
      scaleInPlace(cB) {
        this.l00.scaleInPlace(cB), this.l1_1.scaleInPlace(cB), this.l10.scaleInPlace(cB), this.l11.scaleInPlace(cB), this.l2_2.scaleInPlace(cB), this.l2_1.scaleInPlace(cB), this.l20.scaleInPlace(cB), this.l21.scaleInPlace(cB), this.l22.scaleInPlace(cB)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(sc[0]), this.l1_1.scaleInPlace(sc[1]), this.l10.scaleInPlace(sc[2]), this.l11.scaleInPlace(sc[3]), this.l2_2.scaleInPlace(sc[4]), this.l2_1.scaleInPlace(sc[5]), this.l20.scaleInPlace(sc[6]), this.l21.scaleInPlace(sc[7]), this.l22.scaleInPlace(sc[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Ic[0]), this.l1_1.scaleInPlace(Ic[1]), this.l10.scaleInPlace(Ic[2]), this.l11.scaleInPlace(Ic[3]), this.l2_2.scaleInPlace(Ic[4]), this.l2_1.scaleInPlace(Ic[5]), this.l20.scaleInPlace(Ic[6]), this.l21.scaleInPlace(Ic[7]), this.l22.scaleInPlace(Ic[8])
      }
      updateFromArray(cB) {
        return Vc.p.FromArrayToRef(cB[0], 0, this.l00), Vc.p.FromArrayToRef(cB[1], 0, this.l1_1), Vc.p.FromArrayToRef(cB[2], 0, this.l10), Vc.p.FromArrayToRef(cB[3], 0, this.l11), Vc.p.FromArrayToRef(cB[4], 0, this.l2_2), Vc.p.FromArrayToRef(cB[5], 0, this.l2_1), Vc.p.FromArrayToRef(cB[6], 0, this.l20), Vc.p.FromArrayToRef(cB[7], 0, this.l21), Vc.p.FromArrayToRef(cB[8], 0, this.l22), this
      }
      updateFromFloatsArray(cB) {
        return Vc.p.FromFloatsToRef(cB[0], cB[1], cB[2], this.l00), Vc.p.FromFloatsToRef(cB[3], cB[4], cB[5], this.l1_1), Vc.p.FromFloatsToRef(cB[6], cB[7], cB[8], this.l10), Vc.p.FromFloatsToRef(cB[9], cB[10], cB[11], this.l11), Vc.p.FromFloatsToRef(cB[12], cB[13], cB[14], this.l2_2), Vc.p.FromFloatsToRef(cB[15], cB[16], cB[17], this.l2_1), Vc.p.FromFloatsToRef(cB[18], cB[19], cB[20], this.l20), Vc.p.FromFloatsToRef(cB[21], cB[22], cB[23], this.l21), Vc.p.FromFloatsToRef(cB[24], cB[25], cB[26], this.l22), this
      }
      static FromArray(cB) {
        return (new Mc).updateFromArray(cB)
      }
      static FromPolynomial(cB) {
        const Bc = new Mc;
        return Bc.l00 = cB.xx.scale(.376127).add(cB.yy.scale(.376127)).add(cB.zz.scale(.376126)), Bc.l1_1 = cB.y.scale(.977204), Bc.l10 = cB.z.scale(.977204), Bc.l11 = cB.x.scale(.977204), Bc.l2_2 = cB.xy.scale(1.16538), Bc.l2_1 = cB.yz.scale(1.16538), Bc.l20 = cB.zz.scale(1.34567).subtract(cB.xx.scale(.672834)).subtract(cB.yy.scale(.672834)), Bc.l21 = cB.zx.scale(1.16538), Bc.l22 = cB.xx.scale(1.16538).subtract(cB.yy.scale(1.16538)), Bc.l1_1.scaleInPlace(-1), Bc.l11.scaleInPlace(-1), Bc.l2_1.scaleInPlace(-1), Bc.l21.scaleInPlace(-1), Bc.scaleInPlace(Math.PI), Bc
      }
    }
    class Pc {
      constructor() {
        this.x = Vc.p.Zero(), this.y = Vc.p.Zero(), this.z = Vc.p.Zero(), this.xx = Vc.p.Zero(), this.yy = Vc.p.Zero(), this.zz = Vc.p.Zero(), this.xy = Vc.p.Zero(), this.yz = Vc.p.Zero(), this.zx = Vc.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Mc.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(cB) {
        Vc.i.KV[0].puc(cB.r, cB.g, cB.b);
        const Bc = Vc.i.KV[0];
        this.xx.addInPlace(Bc), this.yy.addInPlace(Bc), this.zz.addInPlace(Bc)
      }
      scaleInPlace(cB) {
        this.x.scaleInPlace(cB), this.y.scaleInPlace(cB), this.z.scaleInPlace(cB), this.xx.scaleInPlace(cB), this.yy.scaleInPlace(cB), this.zz.scaleInPlace(cB), this.yz.scaleInPlace(cB), this.zx.scaleInPlace(cB), this.xy.scaleInPlace(cB)
      }
      updateFromHarmonics(cB) {
        return this._harmonics = cB, this.x.qqc(cB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.qqc(cB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.qqc(cB.l10), this.z.scaleInPlace(1.02333), this.xx.qqc(cB.l00), Vc.i.KV[0].qqc(cB.l20).scaleInPlace(.247708), Vc.i.KV[1].qqc(cB.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).Tqc(Vc.i.KV[0]).addInPlace(Vc.i.KV[1]), this.yy.qqc(cB.l00), this.yy.scaleInPlace(.886277).Tqc(Vc.i.KV[0]).Tqc(Vc.i.KV[1]), this.zz.qqc(cB.l00), Vc.i.KV[0].qqc(cB.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Vc.i.KV[0]), this.yz.qqc(cB.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.qqc(cB.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.qqc(cB.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(cB) {
        return (new Pc).updateFromHarmonics(cB)
      }
      static FromArray(cB) {
        const Bc = new Pc;
        return Vc.p.FromArrayToRef(cB[0], 0, Bc.x), Vc.p.FromArrayToRef(cB[1], 0, Bc.y), Vc.p.FromArrayToRef(cB[2], 0, Bc.z), Vc.p.FromArrayToRef(cB[3], 0, Bc.xx), Vc.p.FromArrayToRef(cB[4], 0, Bc.yy), Vc.p.FromArrayToRef(cB[5], 0, Bc.zz), Vc.p.FromArrayToRef(cB[6], 0, Bc.yz), Vc.p.FromArrayToRef(cB[7], 0, Bc.zx), Vc.p.FromArrayToRef(cB[8], 0, Bc.xy), Bc
      }
    }
  },
  38456: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Cc,
      e: () => Dc
    });
    var Vc = nc(38035),
      Ic = nc(35783),
      rB = nc(35756),
      uc = nc(38194),
      sc = nc(38430),
      Mc = nc(38459),
      Pc = nc(38187),
      qB = nc(38343),
      Oc = nc(38182);
    class Tc {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new rB.p(0, 0, 0), this._diffPositionForCollisions = new rB.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var fc, mB, ec, tB = nc(37953),
      Sc = nc(38118),
      yB = nc(38354),
      zB = nc(35815),
      pc = nc(35759),
      hc = nc(38264),
      aB = nc(37191),
      lc = nc(38043),
      Yc = nc(37965),
      Lc = nc(35799);

    function gB(cB, Bc) {
      return cB - Math.floor(cB / Bc) * Bc
    }

    function Uc(cB, Bc, nc) {
      cB instanceof Float32Array ? rB.d.FromArrayToRef(cB, Bc, nc) : nc.puc((0, Sc.c)(cB[Bc]), (0, Sc.c)(cB[Bc + 1]), (0, Sc.c)(cB[Bc + 2]), (0, Sc.c)(cB[Bc + 3]), (0, Sc.c)(cB[Bc + 4]), (0, Sc.c)(cB[Bc + 5]), (0, Sc.c)(cB[Bc + 6]), (0, Sc.c)(cB[Bc + 7]), (0, Sc.c)(cB[Bc + 8]), (0, Sc.c)(cB[Bc + 9]), (0, Sc.c)(cB[Bc + 10]), (0, Sc.c)(cB[Bc + 11]), (0, Sc.c)(cB[Bc + 12]), (0, Sc.c)(cB[Bc + 13]), (0, Sc.c)(cB[Bc + 14]), (0, Sc.c)(cB[Bc + 15]))
    }

    function bB(cB, Bc, nc, Vc, Ic, sc, Mc, Pc, qB) {
      const Oc = nc.texture,
        Tc = Oc?.getInternalTexture(),
        fc = Tc?._bufferView;
      if (!(fc instanceof Float32Array) && !(fc instanceof Uint16Array)) return aB.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const mB = Oc.getSize(),
        ec = function(cB, Bc) {
          const nc = cB.y - cB.x + 1,
            Vc = Bc * cB.w / nc,
            Ic = Vc < 1 ? 0 : 1,
            rB = nc - Ic;
          let uc = gB(Vc - Math.floor(Vc), 1) * rB;
          return uc = gB(uc + cB.z, rB), Math.floor(uc) + cB.x + Ic
        }(Vc, nc.time);
      if (!isFinite(ec) || ec < 0 || ec >= mB.height) return aB.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const tB = rB.i.KV[0],
        Sc = rB.i.Matrix[0],
        yB = rB.i.Matrix[1],
        zB = ec * mB.width * 4,
        pc = Bc === uc.i.NormalKind ? rB.p.TransformNormalFromFloatsToRef : rB.p.TransformCoordinatesFromFloatsToRef;
      for (let rB = 0, uc = 0; rB < cB.length; rB += 3, uc += 4) {
        let Bc, nc;
        for (Sc.reset(), Bc = 0; Bc < 4 && Bc < qB; Bc++) nc = sc[uc + Bc], nc > 0 && (Uc(fc, zB + 16 * Math.floor(Ic[uc + Bc]), yB), yB.scaleAndAddToRef(nc, Sc));
        if (Mc && Pc)
          for (Bc = 0; Bc < 4 && Bc + 4 < qB; Bc++) nc = Pc[uc + Bc], nc > 0 && (Uc(fc, zB + 16 * Math.floor(Mc[uc + Bc]), yB), yB.scaleAndAddToRef(nc, Sc));
        pc(cB[rB], cB[rB + 1], cB[rB + 2], Sc, tB), tB.toArray(cB, rB)
      }
      return !0
    }
    class Zc {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = rB.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Qc {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Zc, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Tc, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Cc = (() => {
        var cB;
        let Bc, Tc = Mc.f,
          fc = [];
        return cB = class extends Tc {
          static get BILLBOARDMODE_NONE() {
            return Mc.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Mc.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Mc.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Mc.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Mc.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Mc.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(cB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = cB
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(cB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = cB
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(cB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = cB
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(cB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = cB
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(cB) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = cB
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(cB) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== cB && (this._internalAbstractMeshDataInfo._morphTargetManager = cB, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(cB) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== cB && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = cB, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(cB) {
            return !!super._updateNonUniformScalingState(cB) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(cB) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = cB
          }
          set SB(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(cB)
          }
          set onCollisionPositionChange(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(cB)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(cB) {
            if (this._internalAbstractMeshDataInfo._visibility === cB) return;
            const Bc = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = cB, (1 === Bc && 1 !== cB || 1 !== Bc && 1 === cB) && this._markSubMeshesAsDirty((cB => {
              cB.markAsMiscDirty(), cB.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(cB) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = cB
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(cB) {
            this._internalAbstractMeshDataInfo._renderingGroupId = cB
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(cB) {
            if (!Number.isInteger(cB) || cB < 0 || cB > 255 || 0 !== cB && 0 === (63 & cB)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = cB
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(cB) {
            this._setMaterial(cB)
          }
          _setMaterial(cB) {
            this._internalAbstractMeshDataInfo._material !== cB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = cB, cB && cB.meshMap && (cB.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.rD && (this.resetDrawCache(void 0, null == cB), this._unBindEffect()))
          }
          getMaterialForRenderPass(cB) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[cB]
          }
          setMaterialForRenderPass(cB, Bc) {
            this.resetDrawCache(cB), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const nc = this._internalAbstractMeshDataInfo._materialForRenderPass[cB];
            nc?.meshMap?.[this.uniqueId] && (nc.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[cB] = Bc, Bc && Bc.meshMap && (Bc.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(cB) {
            this._internalAbstractMeshDataInfo._receiveShadows !== cB && (this._internalAbstractMeshDataInfo._receiveShadows = cB, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(cB) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== cB && (this._internalAbstractMeshDataInfo._hasVertexAlpha = cB, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(cB) {
            this._internalAbstractMeshDataInfo._useVertexColors !== cB && (this._internalAbstractMeshDataInfo._useVertexColors = cB, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(cB) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== cB && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = cB, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(cB) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== cB && (this._internalAbstractMeshDataInfo._numBoneInfluencers = cB, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(cB) {
            this._internalAbstractMeshDataInfo._applyFog !== cB && (this._internalAbstractMeshDataInfo._applyFog = cB, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(cB) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = cB
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(cB) {
            cB !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = cB, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(cB) ? -1 : cB
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = cB
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(cB) ? -1 : cB
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = cB
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(cB) {
            const Bc = this._internalAbstractMeshDataInfo._skeleton;
            Bc && Bc.needInitialSkinMatrix && Bc._unregisterMeshWithPoseMatrix(this), cB && cB.needInitialSkinMatrix && cB._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = cB, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Bc) {
            var nc;
            let Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Bc, Vc, !1), nc = this, this._internalAbstractMeshDataInfo = new Qc, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = cB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Ic.c, this.onCollisionPositionChangeObservable = new Ic.c, this.onMaterialChangedObservable = new Ic.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.ur = cB.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = zB.e.Red(), this.outlineWidth = .02, this.overlayColor = zB.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.iI = !1, this.dV = !1, this.actionManager = null, this.ellipsoid = new rB.p(.5, 1, .5), this.ellipsoidOffset = new rB.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new zB.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                RBc: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Ic.c, this._onCollisionPositionChange = function(cB, Bc) {
                let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Bc.subtractToRef(nc._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, nc._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), nc._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Yc.e.CollisionsEpsilon && nc.position.addInPlace(nc._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Vc && nc.onCollideObservable.notifyObservers(Vc), nc.onCollisionPositionChangeObservable.notifyObservers(nc.position)
              }, Vc = this.knc(), this.layerMask = Vc.defaultRenderableLayerMask, Vc.JPc(this), this._resyncLightSources(), this._uniformBuffer = new Oc.c(this.knc().RV(), void 0, void 0, Bc, !this.knc().RV().isWebGPU), this._buildUniformLayout(), Vc.performancePriority) {
              case 2:
                this.dV = !0;
              case 1:
                this.iI = !0, this.ur = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(cB) {
            const Bc = this._uniformBuffer;
            Bc.Buc("world", cB), Bc.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Bc.update()
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
          toString(cB) {
            let Bc = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Bc += ", # of submeshes: " + (this.rD ? this.rD.length : 0);
            const nc = this._internalAbstractMeshDataInfo._skeleton;
            return nc && (Bc += ", skeleton: " + nc.name), cB && (Bc += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Bc += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.RBc ? "YES" : "NO")), Bc
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Mc.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(cB) {
            let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Bc || this.actionManager.isRecursive)) {
              if (!cB) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(cB)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(cB, !1) : null
          }
          _releaseRenderPassId(cB) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.rD) {
              for (const cB of this.rD) cB._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const cB of this.knc().lights) cB.isEnabled() && cB.canAffectMesh(this) && this._lightSources.push(cB);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(cB) {
            const Bc = cB.isEnabled() && cB.canAffectMesh(this),
              nc = this._lightSources.indexOf(cB);
            let Vc = !1;
            if (-1 === nc) {
              if (!Bc) return;
              this._lightSources.push(cB)
            } else {
              if (Bc) return;
              Vc = !0, this._lightSources.splice(nc, 1)
            }
            this._markSubMeshesAsLightDirty(Vc)
          }
          _unBindEffect() {
            for (const cB of this.rD) cB.setEffect(null)
          }
          _removeLightSource(cB, Bc) {
            const nc = this._lightSources.indexOf(cB); - 1 !== nc && (this._lightSources.splice(nc, 1), this._markSubMeshesAsLightDirty(Bc))
          }
          _markSubMeshesAsDirty(cB) {
            if (this.rD)
              for (const Bc of this.rD)
                for (let nc = 0; nc < Bc._drawWrappers.length; ++nc) {
                  const Vc = Bc._drawWrappers[nc];
                  Vc && Vc.defines && Vc.defines.markAllAsDirty && cB(Vc.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Bc => Bc.markAsLightDirty(cB)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((cB => cB.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((cB => cB.markAsMiscDirty()))
          }
          SMc(cB) {
            return this._currentRenderId = Number.MAX_VALUE, super.SMc(cB), this._isDirty = !0, this
          }
          resetDrawCache(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.rD)
              for (const nc of this.rD) nc.resetDrawCache(cB, Bc)
          }
          get isBlocked() {
            return !1
          }
          getLOD(cB) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          Tfc() {
            return null
          }
          getVerticesData(cB) {
            return null
          }
          setVerticesData(cB, Bc, nc, Vc) {
            return this
          }
          updateVerticesData(cB, Bc, nc, Vc) {
            return this
          }
          setIndices(cB, Bc) {
            return this
          }
          isVerticesDataPresent(cB) {
            return !1
          }
          qVc() {
            return this._masterMesh ? this._masterMesh.qVc() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.qVc()
          }
          setBoundingInfo(cB) {
            return this._boundingInfo = cB, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(cB, Bc, nc) {
            return this._boundingInfo = new qB.b(cB, Bc, nc), this._boundingInfo
          }
          normalizeToUnitCube() {
            let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(cB, Bc, nc)
          }
          get useBones() {
            return this.skeleton && this.knc().skeletonsEnabled && this.isVerticesDataPresent(uc.i.MatricesIndicesKind) && this.isVerticesDataPresent(uc.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(cB) {}
          _activate(cB, Bc) {
            return this._renderId = cB, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Mc.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get HBc() {
            return !1
          }
          get Wqc() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(cB, Bc, nc) {
            return this.position.addInPlace(this.calcMovePOV(cB, Bc, nc)), this
          }
          calcMovePOV(cB, Bc, nc) {
            const Vc = new rB.d;
            (this.rotationQuaternion ? this.rotationQuaternion : rB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Vc);
            const Ic = rB.p.Zero(),
              uc = this.definedFacingForward ? -1 : 1;
            return rB.p.TransformCoordinatesFromFloatsToRef(cB * uc, Bc, nc * uc, Vc, Ic), Ic
          }
          rotatePOV(cB, Bc, nc) {
            return this.rotation.addInPlace(this.calcRotatePOV(cB, Bc, nc)), this
          }
          calcRotatePOV(cB, Bc, nc) {
            const Vc = this.definedFacingForward ? 1 : -1;
            return new rB.p(cB * Vc, Bc, nc * Vc)
          }
          _refreshBoundingInfo(cB, Bc) {
            if (cB) {
              const nc = (0, yB.g)(cB, 0, this.getTotalVertices(), Bc);
              this._boundingInfo ? this._boundingInfo.reConstruct(nc.minimum, nc.maximum) : this._boundingInfo = new qB.b(nc.minimum, nc.maximum)
            }
            if (this.rD)
              for (let nc = 0; nc < this.rD.length; nc++) this.rD[nc].refreshBoundingInfo(cB);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(cB) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(cB.minimum, cB.maximum) : this._boundingInfo = new qB.b(cB.minimum, cB.maximum), this.rD)
              for (let Bc = 0; Bc < this.rD.length; Bc++) this.rD[Bc].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(cB, Bc, nc, Vc, Ic, sc, Mc) {
            ! function(cB, Bc, nc, Vc, Ic, sc, Mc) {
              const Pc = rB.i.KV[0],
                qB = rB.i.Matrix[0],
                Oc = rB.i.Matrix[1],
                Tc = Bc === uc.i.NormalKind ? rB.p.TransformNormalFromFloatsToRef : rB.p.TransformCoordinatesFromFloatsToRef;
              for (let uc = 0, fc = 0; uc < cB.length; uc += 3, fc += 4) {
                let Bc, mB;
                for (qB.reset(), Bc = 0; Bc < 4; Bc++) mB = Ic[fc + Bc], mB > 0 && (rB.d.FromFloat32ArrayToRefScaled(nc, Math.floor(16 * Vc[fc + Bc]), mB, Oc), qB.addToSelf(Oc));
                if (sc && Mc)
                  for (Bc = 0; Bc < 4; Bc++) mB = Mc[fc + Bc], mB > 0 && (rB.d.FromFloat32ArrayToRefScaled(nc, Math.floor(16 * sc[fc + Bc]), mB, Oc), qB.addToSelf(Oc));
                Tc(cB[uc], cB[uc + 1], cB[uc + 2], qB, Pc), Pc.toArray(cB, uc)
              }
            }(cB, Bc, nc, Vc, Ic, sc, Mc)
          }
          _getData(Bc, nc) {
            let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uc.i.PositionKind;
            const Ic = Bc.cache,
              sc = cB => {
                if (Ic) {
                  const Bc = Ic._vertexData || (Ic._vertexData = {});
                  return Bc[cB] || this.copyVerticesData(cB, Bc), Bc[cB]
                }
                return this.getVerticesData(cB)
              };
            if (nc || (nc = sc(Vc)), !nc) return null;
            Ic ? (Ic._outputData ? Ic._outputData.set(nc) : Ic._outputData = new Float32Array(nc), nc = Ic._outputData) : (Bc.applyMorph && this.morphTargetManager || Bc.applySkeleton && this.skeleton || Bc.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (nc = nc.slice()), Bc.applyMorph && this.morphTargetManager && function(cB, Bc, nc) {
              let Vc;
              switch (Bc) {
                case uc.i.PositionKind:
                  Vc = cB => cB.getPositions();
                  break;
                case uc.i.NormalKind:
                  Vc = cB => cB.getNormals();
                  break;
                case uc.i.TangentKind:
                  Vc = cB => cB.getTangents();
                  break;
                case uc.i.UVKind:
                  Vc = cB => cB.getUVs();
                  break;
                case uc.i.UV2Kind:
                  Vc = cB => cB.getUV2s();
                  break;
                case uc.i.ColorKind:
                  Vc = cB => cB.getColors();
                  break;
                default:
                  return
              }
              for (let Ic = 0; Ic < cB.length; Ic++) {
                let Bc = cB[Ic];
                for (let rB = 0; rB < nc.numTargets; rB++) {
                  const uc = nc.getTarget(rB),
                    sc = uc.influence;
                  if (0 !== sc) {
                    const nc = Vc(uc);
                    nc && (Bc += (nc[Ic] - cB[Ic]) * sc)
                  }
                }
                cB[Ic] = Bc
              }
            }(nc, Vc, this.morphTargetManager);
            const Mc = this.bakedVertexAnimationManager;
            let Pc = !1;
            if (Bc.applyBakedVertexAnimation && Mc?.isEnabled) {
              const cB = sc(uc.i.MatricesIndicesKind),
                Ic = sc(uc.i.MatricesWeightsKind);
              if (Ic && cB) {
                const rB = this.numBoneInfluencers > 4,
                  qB = rB ? sc(uc.i.MatricesIndicesExtraKind) : null,
                  Oc = rB ? sc(uc.i.MatricesWeightsExtraKind) : null;
                Pc = bB(nc, Vc, Mc, Bc.bakedVertexAnimationSettings ?? Mc.animationParameters, cB, Ic, qB, Oc, this.numBoneInfluencers)
              }
            }
            if (!Pc && Bc.applySkeleton && this.skeleton) {
              const Bc = sc(uc.i.MatricesIndicesKind),
                Ic = sc(uc.i.MatricesWeightsKind);
              if (Ic && Bc) {
                const rB = this.numBoneInfluencers > 4,
                  Mc = rB ? sc(uc.i.MatricesIndicesExtraKind) : null,
                  Pc = rB ? sc(uc.i.MatricesWeightsExtraKind) : null,
                  qB = this.skeleton.getTransformMatrices(this);
                cB._ApplySkeleton(nc, Vc, qB, Bc, Ic, Mc, Pc)
              }
            }
            if (!1 !== Bc.updatePositionsArray && Vc === uc.i.PositionKind) {
              const cB = this._internalAbstractMeshDataInfo._positions || [],
                Bc = cB.length;
              if (cB.length = nc.length / 3, Bc < cB.length)
                for (let nc = Bc; nc < cB.length; nc++) cB[nc] = new rB.p;
              for (let Vc = 0, Ic = 0; Vc < cB.length; Vc++, Ic += 3) cB[Vc].puc(nc[Ic], nc[Ic + 1], nc[Ic + 2]);
              this._internalAbstractMeshDataInfo._positions = cB
            }
            return nc
          }
          getNormalsData() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: cB,
              applyMorph: Bc,
              updatePositionsArray: !1
            }, null, uc.i.NormalKind)
          }
          kIc() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: cB,
              applyMorph: Bc,
              updatePositionsArray: !1
            }, nc, uc.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new qB.b(rB.p.Zero(), rB.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(cB) {
            if (!this.rD) return this;
            const Bc = this.rD.length;
            for (let nc = 0; nc < Bc; nc++) {
              const Vc = this.rD[nc];
              (Bc > 1 || !Vc.IsGlobal) && Vc.updateBoundingInfo(cB)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.dV || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(cB) {
            return this.qVc().isInFrustum(cB, this.cullingStrategy)
          }
          isCompletelyInFrustum(cB) {
            return this.qVc().isCompletelyInFrustum(cB)
          }
          Cqc(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = arguments.length > 2 ? arguments[2] : void 0;
            const Vc = this.qVc(),
              Ic = cB.qVc();
            if (Vc.intersects(Ic, Bc)) return !0;
            if (nc)
              for (const rB of this.getChildMeshes())
                if (rB.Cqc(cB, Bc, !0)) return !0;
            return !1
          }
          intersectsPoint(cB) {
            return this.qVc().intersectsPoint(cB)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(cB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = cB
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(cB) {
            let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const nc = this.knc().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = nc.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, nc.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, cB, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Bc), this
          }
          _collideForSubMesh(cB, Bc, nc) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!cB._lastColliderWorldVertices || !cB._lastColliderTransformMatrix.equals(Bc)) {
              cB._lastColliderTransformMatrix = Bc.clone(), cB._lastColliderWorldVertices = [], cB._trianglePlanes = [];
              const nc = cB.verticesStart,
                Vc = cB.verticesStart + cB.verticesCount;
              for (let Ic = nc; Ic < Vc; Ic++) cB._lastColliderWorldVertices.push(rB.p.TransformCoordinates(this._positions[Ic], Bc))
            }
            return nc._collide(cB._trianglePlanes, cB._lastColliderWorldVertices, this.Tfc(), cB.indexStart, cB.indexStart + cB.indexCount, cB.verticesStart, !!cB.AV(), this, this._shouldConvertRHS(), 7 === cB.AV()?.fillMode), this
          }
          _processCollisionsForSubMeshes(cB, Bc) {
            const nc = this._scene.getCollidingSubMeshCandidates(this, cB),
              Vc = nc.length;
            for (let Ic = 0; Ic < Vc; Ic++) {
              const rB = nc.data[Ic];
              Vc > 1 && !rB._checkCollision(cB) || this._collideForSubMesh(rB, Bc, cB)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(cB) {
            if (!this.qVc()._checkCollision(cB)) return this;
            const Bc = rB.i.Matrix[0],
              nc = rB.i.Matrix[1];
            return rB.d.ScalingToRef(1 / cB._radius.x, 1 / cB._radius.y, 1 / cB._radius.z, Bc), this.worldMatrixFromCache.multiplyToRef(Bc, nc), this._processCollisionsForSubMeshes(cB, nc), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(cB, Bc, nc) {
            let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ic = arguments.length > 4 ? arguments[4] : void 0,
              uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const sc = new Pc.c,
              Mc = this.getClassName(),
              qB = "InstancedLinesMesh" === Mc || "LinesMesh" === Mc || "GreasedLineMesh" === Mc ? this.intersectionThreshold : 0,
              Oc = this.qVc();
            if (!this.rD) return sc;
            if (!uc && (!cB.intersectsSphere(Oc.tOc, qB) || !cB.intersectsBox(Oc.boundingBox, qB))) return sc;
            if (Vc) return sc.hit = !uc, sc.pickedMesh = uc ? null : this, sc.distance = uc ? 0 : rB.p.Distance(cB.origin, Oc.tOc.center), sc.subMeshId = 0, sc;
            if (!this._generatePointsArray()) return sc;
            let Tc = null;
            const fc = this._scene.getIntersectingSubMeshCandidates(this, cB),
              mB = fc.length;
            let ec = !1;
            for (let rB = 0; rB < mB; rB++) {
              const cB = fc.data[rB].AV();
              if (cB && (7 == cB.fillMode || 0 == cB.fillMode || 1 == cB.fillMode || 2 == cB.fillMode || 4 == cB.fillMode)) {
                ec = !0;
                break
              }
            }
            if (!ec) return sc.hit = !0, sc.pickedMesh = this, sc.distance = rB.p.Distance(cB.origin, Oc.tOc.center), sc.subMeshId = -1, sc;
            for (let rB = 0; rB < mB; rB++) {
              const Vc = fc.data[rB];
              if (mB > 1 && !uc && !Vc.canIntersects(cB)) continue;
              const Ic = Vc.intersects(cB, this._positions, this.Tfc(), Bc, nc);
              if (Ic && (Bc || !Tc || Ic.distance < Tc.distance) && (Tc = Ic, Tc.subMeshId = Vc._id, Tc._internalSubMeshId = rB, Bc)) break
            }
            if (Tc) {
              const Bc = Ic ?? this.getWorldMatrix(),
                nc = rB.i.KV[0],
                Vc = rB.i.KV[1];
              rB.p.TransformCoordinatesToRef(cB.origin, Bc, nc), cB.direction.scaleToRef(Tc.distance, Vc);
              const uc = rB.p.TransformNormal(Vc, Bc).addInPlace(nc);
              return sc.hit = !0, sc.distance = rB.p.Distance(nc, uc), sc.pickedPoint = uc, sc.pickedMesh = this, sc.bu = Tc.bu || 0, sc.bv = Tc.bv || 0, sc.subMeshFaceId = Tc.faceId, sc.faceId = Tc.faceId + fc.data[Tc._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), sc.subMeshId = Tc.subMeshId, sc
            }
            return sc
          }
          clone(cB, Bc, nc) {
            return null
          }
          releaseSubMeshes() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.rD)
              for (; this.rD.length;) this.rD[0].dispose(cB);
            else this.rD = [];
            return this
          }
          dispose(cB) {
            let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Vc = this.knc();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Vc.freeActiveMeshes(), Vc.freeRenderingGroups(), Vc.renderingManager.maintainStateBetweenFrames && Vc.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((cB => cB !== this && cB.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Bc = 0; Bc < this._intersectionsInProgress.length; Bc++) {
              const cB = this._intersectionsInProgress[Bc],
                nc = cB._intersectionsInProgress.indexOf(this);
              cB._intersectionsInProgress.splice(nc, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Ic = Vc.lights;
            for (const uc of Ic) {
              let cB = uc.includedOnlyMeshes.indexOf(this); - 1 !== cB && uc.includedOnlyMeshes.splice(cB, 1), cB = uc.excludedMeshes.indexOf(this), -1 !== cB && uc.excludedMeshes.splice(cB, 1);
              const Bc = uc.getShadowGenerators();
              if (Bc) {
                const nc = Bc.values();
                for (let Bc = nc.next(); !0 !== Bc.done; Bc = nc.next()) {
                  const nc = Bc.value.getShadowMap();
                  nc && nc.renderList && (cB = nc.renderList.indexOf(this), -1 !== cB && nc.renderList.splice(cB, 1))
                }
              }
            }
            this.releaseSubMeshes(Vc._isDisposing);
            const rB = Vc.RV();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, rB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), rB.wipeCaches(), Vc.xnc(this), this._parentContainer) {
              const cB = this._parentContainer.meshes.indexOf(this);
              cB > -1 && this._parentContainer.meshes.splice(cB, 1), this._parentContainer = null
            }
            if (nc && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !cB)
              for (Bc = 0; Bc < Vc.qD.length; Bc++) Vc.qD[Bc].emitter === this && (Vc.qD[Bc].dispose(), Bc--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(cB, nc)
          }
          _initFacetData() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            cB.facetNormals || (cB.facetNormals = []), cB.facetPositions || (cB.facetPositions = []), cB.facetPartitioning || (cB.facetPartitioning = new Array), cB.facetNb = this.Tfc().length / 3 | 0, cB.partitioningSubdivisions = cB.partitioningSubdivisions ? cB.partitioningSubdivisions : 10, cB.partitioningBBoxRatio = cB.partitioningBBoxRatio ? cB.partitioningBBoxRatio : 1.01;
            for (let Bc = 0; Bc < cB.facetNb; Bc++) cB.facetNormals[Bc] = rB.p.Zero(), cB.facetPositions[Bc] = rB.p.Zero();
            return cB.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            cB.facetDataEnabled || this._initFacetData();
            const Bc = this.getVerticesData(uc.i.PositionKind),
              nc = this.Tfc(),
              Vc = this.getVerticesData(uc.i.NormalKind)?.slice(),
              Ic = this.qVc();
            if (cB.facetDepthSort && !cB.facetDepthSortEnabled) {
              if (cB.facetDepthSortEnabled = !0, nc instanceof Uint16Array) cB.depthSortedIndices = new Uint16Array(nc);
              else if (nc instanceof Uint32Array) cB.depthSortedIndices = new Uint32Array(nc);
              else {
                let Bc = !1;
                for (let cB = 0; cB < nc.length; cB++)
                  if (nc[cB] > 65535) {
                    Bc = !0;
                    break
                  } cB.depthSortedIndices = Bc ? new Uint32Array(nc) : new Uint16Array(nc)
              }
              if (cB.facetDepthSortFunction = function(cB, Bc) {
                  return Bc.sqDistance - cB.sqDistance
                }, !cB.facetDepthSortFrom) {
                const Bc = this.knc().activeCamera;
                cB.facetDepthSortFrom = Bc ? Bc.position : rB.p.Zero()
              }
              cB.depthSortedFacets = [];
              for (let Bc = 0; Bc < cB.facetNb; Bc++) {
                const nc = {
                  ind: 3 * Bc,
                  sqDistance: 0
                };
                cB.depthSortedFacets.push(nc)
              }
              cB.invertedMatrix = rB.d.Identity(), cB.facetDepthSortOrigin = rB.p.Zero()
            }
            cB.bbSize.x = Ic.maximum.x - Ic.minimum.x > pc.c ? Ic.maximum.x - Ic.minimum.x : pc.c, cB.bbSize.y = Ic.maximum.y - Ic.minimum.y > pc.c ? Ic.maximum.y - Ic.minimum.y : pc.c, cB.bbSize.z = Ic.maximum.z - Ic.minimum.z > pc.c ? Ic.maximum.z - Ic.minimum.z : pc.c;
            let Mc = cB.bbSize.x > cB.bbSize.y ? cB.bbSize.x : cB.bbSize.y;
            if (Mc = Mc > cB.bbSize.z ? Mc : cB.bbSize.z, cB.subDiv.max = cB.partitioningSubdivisions, cB.subDiv.X = Math.floor(cB.subDiv.max * cB.bbSize.x / Mc), cB.subDiv.Y = Math.floor(cB.subDiv.max * cB.bbSize.y / Mc), cB.subDiv.Z = Math.floor(cB.subDiv.max * cB.bbSize.z / Mc), cB.subDiv.X = cB.subDiv.X < 1 ? 1 : cB.subDiv.X, cB.subDiv.Y = cB.subDiv.Y < 1 ? 1 : cB.subDiv.Y, cB.subDiv.Z = cB.subDiv.Z < 1 ? 1 : cB.subDiv.Z, cB.facetParameters.facetNormals = this.getFacetLocalNormals(), cB.facetParameters.facetPositions = this.getFacetLocalPositions(), cB.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), cB.facetParameters.bInfo = Ic, cB.facetParameters.bbSize = cB.bbSize, cB.facetParameters.subDiv = cB.subDiv, cB.facetParameters.ratio = this.partitioningBBoxRatio, cB.facetParameters.depthSort = cB.facetDepthSort, cB.facetDepthSort && cB.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(cB.invertedMatrix), rB.p.TransformCoordinatesToRef(cB.facetDepthSortFrom, cB.invertedMatrix, cB.facetDepthSortOrigin), cB.facetParameters.distanceTo = cB.facetDepthSortOrigin), cB.facetParameters.depthSortedFacets = cB.depthSortedFacets, Vc && sc.b.ComputeNormals(Bc, nc, Vc, cB.facetParameters), cB.facetDepthSort && cB.facetDepthSortEnabled) {
              cB.depthSortedFacets.sort(cB.facetDepthSortFunction);
              const Bc = cB.depthSortedIndices.length / 3 | 0;
              for (let Vc = 0; Vc < Bc; Vc++) {
                const Bc = cB.depthSortedFacets[Vc].ind;
                cB.depthSortedIndices[3 * Vc] = nc[Bc], cB.depthSortedIndices[3 * Vc + 1] = nc[Bc + 1], cB.depthSortedIndices[3 * Vc + 2] = nc[Bc + 2]
              }
              this.updateIndices(cB.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            return cB.facetNormals || this.updateFacetData(), cB.facetNormals
          }
          getFacetLocalPositions() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            return cB.facetPositions || this.updateFacetData(), cB.facetPositions
          }
          getFacetLocalPartitioning() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            return cB.facetPartitioning || this.updateFacetData(), cB.facetPartitioning
          }
          getFacetPosition(cB) {
            const Bc = rB.p.Zero();
            return this.getFacetPositionToRef(cB, Bc), Bc
          }
          getFacetPositionToRef(cB, Bc) {
            const nc = this.getFacetLocalPositions()[cB],
              Vc = this.getWorldMatrix();
            return rB.p.TransformCoordinatesToRef(nc, Vc, Bc), this
          }
          getFacetNormal(cB) {
            const Bc = rB.p.Zero();
            return this.getFacetNormalToRef(cB, Bc), Bc
          }
          getFacetNormalToRef(cB, Bc) {
            const nc = this.getFacetLocalNormals()[cB];
            return rB.p.TransformNormalToRef(nc, this.getWorldMatrix(), Bc), this
          }
          getFacetsAtLocalCoordinates(cB, Bc, nc) {
            const Vc = this.qVc(),
              Ic = this._internalAbstractMeshDataInfo._facetData,
              rB = Math.floor((cB - Vc.minimum.x * Ic.partitioningBBoxRatio) * Ic.subDiv.X * Ic.partitioningBBoxRatio / Ic.bbSize.x),
              uc = Math.floor((Bc - Vc.minimum.y * Ic.partitioningBBoxRatio) * Ic.subDiv.Y * Ic.partitioningBBoxRatio / Ic.bbSize.y),
              sc = Math.floor((nc - Vc.minimum.z * Ic.partitioningBBoxRatio) * Ic.subDiv.Z * Ic.partitioningBBoxRatio / Ic.bbSize.z);
            return rB < 0 || rB > Ic.subDiv.max || uc < 0 || uc > Ic.subDiv.max || sc < 0 || sc > Ic.subDiv.max ? null : Ic.facetPartitioning[rB + Ic.subDiv.max * uc + Ic.subDiv.max * Ic.subDiv.max * sc]
          }
          getClosestFacetAtCoordinates(cB, Bc, nc, Vc) {
            let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const sc = this.getWorldMatrix(),
              Mc = rB.i.Matrix[5];
            sc.invertToRef(Mc);
            const Pc = rB.i.KV[8];
            rB.p.TransformCoordinatesFromFloatsToRef(cB, Bc, nc, Mc, Pc);
            const qB = this.getClosestFacetAtLocalCoordinates(Pc.x, Pc.y, Pc.z, Vc, Ic, uc);
            return Vc && rB.p.TransformCoordinatesFromFloatsToRef(Vc.x, Vc.y, Vc.z, sc, Vc), qB
          }
          getClosestFacetAtLocalCoordinates(cB, Bc, nc, Vc) {
            let Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              fc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              mB = null;
            const ec = this.getFacetLocalPositions(),
              tB = this.getFacetLocalNormals(),
              Sc = this.getFacetsAtLocalCoordinates(cB, Bc, nc);
            if (!Sc) return null;
            let yB, zB, pc, hc, aB = Number.MAX_VALUE;
            for (let lc = 0; lc < Sc.length; lc++) zB = Sc[lc], pc = tB[zB], hc = ec[zB], sc = (cB - hc.x) * pc.x + (Bc - hc.y) * pc.y + (nc - hc.z) * pc.z, (!Tc || Tc && fc && sc >= 0 || Tc && !fc && sc <= 0) && (sc = pc.x * hc.x + pc.y * hc.y + pc.z * hc.z, Mc = -(pc.x * cB + pc.y * Bc + pc.z * nc - sc) / (pc.x * pc.x + pc.y * pc.y + pc.z * pc.z), Pc = cB + pc.x * Mc, qB = Bc + pc.y * Mc, Oc = nc + pc.z * Mc, Ic = Pc - cB, rB = qB - Bc, uc = Oc - nc, yB = Ic * Ic + rB * rB + uc * uc, yB < aB && (aB = yB, mB = zB, Vc && (Vc.x = Pc, Vc.y = qB, Vc.z = Oc)));
            return mB
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const cB = this._internalAbstractMeshDataInfo._facetData;
            return cB.facetDataEnabled && (cB.facetDataEnabled = !1, cB.facetPositions = [], cB.facetNormals = [], cB.facetPartitioning = new Array, cB.facetParameters = {}, cB.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(cB, Bc) {
            return this
          }
          createNormals(cB) {
            const Bc = this.getVerticesData(uc.i.PositionKind),
              nc = this.Tfc();
            let Vc;
            return Vc = this.isVerticesDataPresent(uc.i.NormalKind) ? this.getVerticesData(uc.i.NormalKind) : [], sc.b.ComputeNormals(Bc, nc, Vc, {
              useRightHandedSystem: this.knc().useRightHandedSystem
            }), this.setVerticesData(uc.i.NormalKind, Vc, cB), this
          }
          async optimizeIndicesAsync() {
            const cB = this.Tfc();
            if (!cB) return this;
            const {
              OptimizeIndices: Bc
            } = await nc.e(326).then((() => nc(40499)));
            return Bc(cB), this.setIndices(cB, this.getTotalVertices()), this
          }
          alignWithNormal(cB, Bc) {
            Bc || (Bc = hc.e.Y);
            const nc = rB.i.KV[0],
              Vc = rB.i.KV[1];
            return rB.p.CrossToRef(Bc, cB, Vc), rB.p.CrossToRef(cB, Vc, nc), this.rotationQuaternion ? rB.f.RotationQuaternionFromAxisToRef(nc, cB, Vc, this.rotationQuaternion) : rB.p.RotationFromAxisToRef(nc, cB, Vc, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, tB.k)("EdgesRenderer")
          }
          enableEdgesRendering(cB, Bc, nc) {
            throw (0, tB.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.qD.filter((cB => cB.emitter === this))
          }
        }, (() => {
          const nc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tc[Symbol.metadata] ?? null) : void 0;
          Bc = [lc.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Vc.g)(cB, null, Bc, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: cB => "_ApplySkeleton" in cB,
              get: cB => cB._ApplySkeleton
            },
            metadata: nc
          }, null, fc), nc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nc
          })
        })(), cB.OCCLUSION_TYPE_NONE = ((0, Vc.k)(cB, fc), 0), cB.OCCLUSION_TYPE_OPTIMISTIC = 1, cB.OCCLUSION_TYPE_STRICT = 2, cB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, cB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, cB.CULLINGSTRATEGY_STANDARD = 0, cB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, cB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, cB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, cB.DefaultIsPickable = !0, cB
      })(),
      vB = !1;

    function Dc() {
      vB || (vB = !0, (0, Lc.d)("BABYLON.AbstractMesh", Cc))
    }(fc = Cc.prototype).createOrUpdateSubmeshesOctree ?? (fc.createOrUpdateSubmeshesOctree = (0, tB.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (mB = Cc.prototype).getPhysicsImpostor ?? (mB.getPhysicsImpostor = (0, tB.h)("AbstractMesh", "getPhysicsImpostor")), (ec = Cc.prototype).setPhysicsLinkWith ?? (ec.setPhysicsLinkWith = (0, tB.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Cc.prototype, "occlusionRetryCount") || Object.defineProperty(Cc.prototype, "occlusionRetryCount", (0, tB.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Cc.prototype, "occlusionType") || Object.defineProperty(Cc.prototype, "occlusionType", (0, tB.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Cc.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Cc.prototype, "occlusionQueryAlgorithmType", (0, tB.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Cc.prototype, "isOccluded") || Object.defineProperty(Cc.prototype, "isOccluded", (0, tB.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Cc.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Cc.prototype, "isOcclusionQueryInProgress", (0, tB.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Cc.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Cc.prototype, "forceRenderingWhenOccluded", (0, tB.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Cc.prototype, "occlusionForRenderPassId") || Object.defineProperty(Cc.prototype, "occlusionForRenderPassId", (0, tB.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Cc.prototype, "decalMap") || Object.defineProperty(Cc.prototype, "decalMap", (0, tB.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Cc.prototype, "snc") || Object.defineProperty(Cc.prototype, "snc", (0, tB.e)("AbstractMesh", "snc")), Object.getOwnPropertyDescriptor(Cc.prototype, "physicsImpostor") || Object.defineProperty(Cc.prototype, "physicsImpostor", (0, tB.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Cc.prototype, "showBoundingBox") || Object.defineProperty(Cc.prototype, "showBoundingBox", (0, tB.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Cc.prototype, "edgesRenderer") || Object.defineProperty(Cc.prototype, "edgesRenderer", (0, tB.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Cc.prototype, "renderOutline") || Object.defineProperty(Cc.prototype, "renderOutline", (0, tB.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Cc.prototype, "renderOverlay") || Object.defineProperty(Cc.prototype, "renderOverlay", (0, tB.e)("AbstractMesh", "renderOverlay"))
  },
  38434: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Sc
    });
    var Vc = nc(35756),
      Ic = nc(35815),
      rB = nc(38430),
      uc = nc(38194),
      sc = nc(38332),
      Mc = nc(38441),
      Pc = nc(38343),
      qB = nc(38146),
      Oc = nc(37191),
      Tc = nc(38075),
      fc = nc(38354),
      mB = nc(35780),
      ec = nc(38448),
      tB = nc(38116);
    class Sc {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(cB) {
        this._boundingBias ? this._boundingBias.qqc(cB) : this._boundingBias = cB.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(cB) {
        const Bc = new Sc(Sc.RandomId(), cB.knc());
        return Bc.applyToMesh(cB), Bc
      }
      get meshes() {
        return this._meshes
      }
      constructor(cB, Bc, nc) {
        let Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Vc.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Vc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Bc || mB.d.LastCreatedScene, this._scene && (this.id = cB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.RV(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Ic, null !== uc && (this._totalVertices = uc), nc ? this.setAllVerticesData(nc, Ic) : null === uc && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), rB && (this.applyToMesh(rB), rB.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      knc() {
        return this._scene
      }
      RV() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let cB = 0; cB < this._meshes.length; cB++)
          if (!this._meshes[cB].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const cB = new Set;
        for (const Bc in this._vertexBuffers) cB.add(this._vertexBuffers[Bc].getWrapperBuffer());
        cB.forEach((cB => {
          cB._rebuild()
        }))
      }
      setAllVerticesData(cB, Bc) {
        cB.applyToGeometry(this, Bc), this._notifyUpdate()
      }
      setVerticesData(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        nc && Array.isArray(Bc) && (Bc = new Float32Array(Bc));
        const Ic = new uc.i(this._engine, Bc, cB, {
          updatable: nc,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Vc,
          label: "Geometry_" + this.id + "_" + cB
        });
        this.setVerticesBuffer(Ic)
      }
      removeVerticesData(cB) {
        this._vertexBuffers[cB] && (this._vertexBuffers[cB].dispose(), delete this._vertexBuffers[cB]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Ic = cB.getKind();
        this._vertexBuffers[Ic] && nc && this._vertexBuffers[Ic].dispose(), cB._buffer && cB._ownsBuffer && cB._buffer._increaseReferences(), this._vertexBuffers[Ic] = cB;
        const rB = this._meshes,
          sc = rB.length;
        if (Ic === uc.i.PositionKind) {
          this._totalVertices = Bc ?? cB._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : cB.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const nc = this._extend && this._extend.minimum || new Vc.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Ic = this._extend && this._extend.maximum || new Vc.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let cB = 0; cB < sc; cB++) {
            const Bc = rB[cB];
            Bc.buildBoundingInfo(nc, Ic), Bc._createGlobalSubMesh(Bc.isUnIndexed), Bc.computeWorldMatrix(!0), Bc.synchronizeInstances()
          }
        }
        this._notifyUpdate(Ic)
      }
      updateVerticesDataDirectly(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ic = this.getVertexBuffer(cB);
        Ic && (Ic.updateDirectly(Bc, nc, Vc), this._notifyUpdate(cB))
      }
      updateVerticesData(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this.getVertexBuffer(cB);
        Vc && (Vc.update(Bc), cB === uc.i.PositionKind && this._updateBoundingInfo(nc, Bc), this._notifyUpdate(cB))
      }
      _updateBoundingInfo(cB, Bc) {
        if (cB && this._updateExtend(Bc), this._resetPointsArrayCache(), cB) {
          const cB = this._meshes;
          for (const Bc of cB) {
            Bc.hasBoundingInfo ? Bc.qVc().reConstruct(this._extend.minimum, this._extend.maximum) : Bc.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const cB = Bc.rD;
            for (const Bc of cB) Bc.refreshBoundingInfo()
          }
        }
      }
      _bind(cB, Bc, nc, Vc) {
        if (!cB) return;
        void 0 === Bc && (Bc = this._indexBuffer);
        const Ic = this.getVertexBuffers();
        if (!Ic) return;
        if (Bc != this._indexBuffer || !this._vertexArrayObjects && !Vc) return void this._engine.bindBuffers(Ic, Bc, cB, nc);
        const rB = Vc || this._vertexArrayObjects,
          uc = this._engine;
        rB[cB.key] || (rB[cB.key] = uc.recordVertexArrayObject(Ic, Bc, cB, nc)), uc.bindVertexArrayObject(rB[cB.key], Bc)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(cB, Bc, nc) {
        const Vc = this.getVertexBuffer(cB);
        return Vc ? Vc.getFloatData(this._totalVertices, nc || Bc && 1 !== this._meshes.length) : null
      }
      copyVerticesData(cB, Bc) {
        const nc = this.getVertexBuffer(cB);
        if (!nc) return;
        Bc[cB] || (Bc[cB] = new Float32Array(this._totalVertices * nc.getSize()));
        const Vc = nc.getData();
        Vc && (0, tB.g)(Vc, nc.getSize(), nc.type, nc.byteOffset, nc.byteStride, nc.normalized, this._totalVertices, Bc[cB])
      }
      isVertexBufferUpdatable(cB) {
        const Bc = this._vertexBuffers[cB];
        return !!Bc && Bc.isUpdatable()
      }
      getVertexBuffer(cB) {
        return this.isReady() ? this._vertexBuffers[cB] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(cB) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[cB] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(cB)
      }
      getVerticesDataKinds() {
        const cB = [];
        let Bc;
        if (!this._vertexBuffers && this._delayInfo)
          for (Bc in this._delayInfo) cB.push(Bc);
        else
          for (Bc in this._vertexBuffers) cB.push(Bc);
        return cB
      }
      updateIndices(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Vc = cB.length !== this._indices.length;
            if (nc || (this._indices = cB.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, cB, Bc), Vc)
              for (const cB of this._meshes) cB._createGlobalSubMesh(!0)
          } else this.setIndices(cB, null, !0)
      }
      setIndexBuffer(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = cB, this._totalVertices = Bc, this._totalIndices = nc, cB.is32Bits = null === Vc ? Bc > 65535 : Vc;
        for (const Ic of this._meshes) Ic._createGlobalSubMesh(!0), Ic.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = cB, this._indexBufferIsUpdatable = nc, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, nc, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Bc && (this._totalVertices = Bc);
        for (const Ic of this._meshes) Ic._createGlobalSubMesh(!Vc), Ic.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Tfc(cB, Bc) {
        if (!this.isReady()) return null;
        const nc = this._indices;
        return Bc || cB && 1 !== this._meshes.length ? nc.slice() : nc
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        cB && this._vertexArrayObjects && this._vertexArrayObjects[cB.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[cB.key]), delete this._vertexArrayObjects[cB.key])
      }
      releaseForMesh(cB, Bc) {
        const nc = this._meshes,
          Vc = nc.indexOf(cB); - 1 !== Vc && (nc.splice(Vc, 1), this._vertexArrayObjects && cB._invalidateInstanceVertexArrayObject(), cB._geometry = null, 0 === nc.length && Bc && this.dispose())
      }
      applyToMesh(cB) {
        if (cB._geometry === this) return;
        const Bc = cB._geometry;
        Bc && Bc.releaseForMesh(cB), this._vertexArrayObjects && cB._invalidateInstanceVertexArrayObject();
        const nc = this._meshes;
        cB._geometry = this, cB._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), nc.push(cB), this.isReady() ? this._applyToMesh(cB) : this._boundingInfo && cB.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!cB && (cB = this.getVerticesData(uc.i.PositionKind), !cB)) return;
          this._extend = (0, fc.g)(cB, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(cB) {
        for (const Bc in this._vertexBuffers) {
          const nc = this._vertexBuffers[Bc];
          nc._buffer.getBuffer() || nc.create(), Bc === uc.i.PositionKind && (this._extend || this._updateExtend(), cB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), cB._createGlobalSubMesh(cB.isUnIndexed), cB._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), cB._syncGeometryWithMorphTargetManager(), cB.synchronizeInstances()
      }
      _notifyUpdate(cB) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, cB), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Bc of this._meshes) Bc._markSubMeshesAsAttributesDirty()
      }
      load(cB, Bc) {
        2 !== this.delayLoadState && (this.isReady() ? Bc && Bc() : (this.delayLoadState = 2, this._queueLoad(cB, Bc)))
      }
      _queueLoad(cB, Bc) {
        this.delayLoadingFile && (cB.addPendingData(this), (async () => {
          try {
            const nc = await cB._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void cB.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(nc), this), this.delayLoadState = 1, this._delayInfo = [], cB.removePendingData(this);
            const Vc = this._meshes,
              Ic = Vc.length;
            for (let cB = 0; cB < Ic; cB++) this._applyToMesh(Vc[cB]);
            Bc && Bc()
          } catch (nc) {
            cB.removePendingData(this), cB.nPc || Oc.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${nc}`)
          }
        })())
      }
      toLeftHanded() {
        const cB = this.Tfc(!1);
        if (null != cB && cB.length > 0) {
          for (let Bc = 0; Bc < cB.length; Bc += 3) {
            const nc = cB[Bc + 0];
            cB[Bc + 0] = cB[Bc + 2], cB[Bc + 2] = nc
          }
          this.setIndices(cB)
        }
        const Bc = this.getVerticesData(uc.i.PositionKind, !1);
        if (null != Bc && Bc.length > 0) {
          for (let cB = 0; cB < Bc.length; cB += 3) Bc[cB + 2] = -Bc[cB + 2];
          this.setVerticesData(uc.i.PositionKind, Bc, !1)
        }
        const nc = this.getVerticesData(uc.i.NormalKind, !1);
        if (null != nc && nc.length > 0) {
          for (let cB = 0; cB < nc.length; cB += 3) nc[cB + 2] = -nc[cB + 2];
          this.setVerticesData(uc.i.NormalKind, nc, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const cB = this.getVerticesData(uc.i.PositionKind);
        if (!cB || 0 === cB.length) return !1;
        for (let Bc = 3 * this._positionsCache.length, nc = this._positionsCache.length; Bc < cB.length; Bc += 3, ++nc) this._positionsCache[nc] = Vc.p.FromArray(cB, Bc);
        for (let Bc = 0, nc = 0; Bc < cB.length; Bc += 3, ++nc) this._positionsCache[nc].set(cB[0 + Bc], cB[1 + Bc], cB[2 + Bc]);
        return this._positionsCache.length = cB.length / 3, this._positions = this._positionsCache, !0
      }
      nPc() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const nc in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[nc]);
          this._vertexArrayObjects = {};
          const cB = this._meshes,
            Bc = cB.length;
          for (let nc = 0; nc < Bc; nc++) cB[nc]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const cB = this._meshes,
          Bc = cB.length;
        let nc;
        for (nc = 0; nc < Bc; nc++) this.releaseForMesh(cB[nc]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Vc in this._vertexBuffers) this._vertexBuffers[Vc].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const cB = this._parentContainer.geometries.indexOf(this);
          cB > -1 && this._parentContainer.geometries.splice(cB, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(cB) {
        const Bc = new Sc(cB, this._scene),
          nc = this.Tfc(void 0, !0);
        nc && Bc.setIndices(nc);
        let Vc, Ic = !1;
        for (Vc in this._vertexBuffers) {
          const cB = this.getVertexBuffer(Vc),
            nc = cB.getData();
          if (!nc) continue;
          const rB = cB.isUpdatable(),
            sc = cB.getSize(),
            {
              type: Mc,
              byteOffset: Pc,
              byteStride: qB,
              normalized: Oc
            } = cB;
          Ic = Ic || rB;
          let Tc = this._totalVertices;
          if (cB.getIsInstanced()) {
            let cB;
            cB = nc instanceof Array ? 4 * nc.length : nc.byteLength, Tc = cB / qB
          }
          const fc = (0, tB.s)(nc, sc, Mc, Pc, qB, Tc, !0),
            mB = new uc.i(this._engine, fc, Vc, {
              updatable: rB,
              useBytes: !1,
              stride: sc,
              size: sc,
              offset: 0,
              type: Mc,
              normalized: Oc,
              takeBufferOwnership: !0,
              instanced: cB.getIsInstanced()
            });
          Bc.setVerticesBuffer(mB, Tc)
        }
        for (Vc in Bc._updatable = Ic, Bc.delayLoadState = this.delayLoadState, Bc.delayLoadingFile = this.delayLoadingFile, Bc._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Bc._delayInfo = Bc._delayInfo || [], Bc._delayInfo.push(Vc);
        return Bc._boundingInfo = new Pc.b(this._extend.minimum, this._extend.maximum), Bc
      }
      serialize() {
        const cB = {};
        return cB.id = this.id, cB.uniqueId = this.uniqueId, cB.updatable = this._updatable, Tc.c && Tc.c.HasTags(this) && (cB.tags = Tc.c.GetTags(this)), cB
      }
      _toNumberArray(cB) {
        return Array.isArray(cB) ? cB : Array.prototype.slice.call(cB)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const cB in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, cB) && (this._vertexBuffers[cB]._buffer._data = null)
      }
      serializeVerticeData() {
        const cB = this.serialize();
        return this.isVerticesDataPresent(uc.i.PositionKind) && (cB.positions = this._toNumberArray(this.getVerticesData(uc.i.PositionKind)), this.isVertexBufferUpdatable(uc.i.PositionKind) && (cB.positionsUpdatable = !0)), this.isVerticesDataPresent(uc.i.NormalKind) && (cB.normals = this._toNumberArray(this.getVerticesData(uc.i.NormalKind)), this.isVertexBufferUpdatable(uc.i.NormalKind) && (cB.normalsUpdatable = !0)), this.isVerticesDataPresent(uc.i.TangentKind) && (cB.tangents = this._toNumberArray(this.getVerticesData(uc.i.TangentKind)), this.isVertexBufferUpdatable(uc.i.TangentKind) && (cB.tangentsUpdatable = !0)), this.isVerticesDataPresent(uc.i.UVKind) && (cB.uvs = this._toNumberArray(this.getVerticesData(uc.i.UVKind)), this.isVertexBufferUpdatable(uc.i.UVKind) && (cB.uvsUpdatable = !0)), this.isVerticesDataPresent(uc.i.UV2Kind) && (cB.uvs2 = this._toNumberArray(this.getVerticesData(uc.i.UV2Kind)), this.isVertexBufferUpdatable(uc.i.UV2Kind) && (cB.uvs2Updatable = !0)), this.isVerticesDataPresent(uc.i.UV3Kind) && (cB.uvs3 = this._toNumberArray(this.getVerticesData(uc.i.UV3Kind)), this.isVertexBufferUpdatable(uc.i.UV3Kind) && (cB.uvs3Updatable = !0)), this.isVerticesDataPresent(uc.i.UV4Kind) && (cB.uvs4 = this._toNumberArray(this.getVerticesData(uc.i.UV4Kind)), this.isVertexBufferUpdatable(uc.i.UV4Kind) && (cB.uvs4Updatable = !0)), this.isVerticesDataPresent(uc.i.UV5Kind) && (cB.uvs5 = this._toNumberArray(this.getVerticesData(uc.i.UV5Kind)), this.isVertexBufferUpdatable(uc.i.UV5Kind) && (cB.uvs5Updatable = !0)), this.isVerticesDataPresent(uc.i.UV6Kind) && (cB.uvs6 = this._toNumberArray(this.getVerticesData(uc.i.UV6Kind)), this.isVertexBufferUpdatable(uc.i.UV6Kind) && (cB.uvs6Updatable = !0)), this.isVerticesDataPresent(uc.i.ColorKind) && (cB.colors = this._toNumberArray(this.getVerticesData(uc.i.ColorKind)), this.isVertexBufferUpdatable(uc.i.ColorKind) && (cB.colorsUpdatable = !0)), this.isVerticesDataPresent(uc.i.MatricesIndicesKind) && (cB.matricesIndices = this._toNumberArray(this.getVerticesData(uc.i.MatricesIndicesKind)), cB.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(uc.i.MatricesIndicesKind) && (cB.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(uc.i.MatricesWeightsKind) && (cB.matricesWeights = this._toNumberArray(this.getVerticesData(uc.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(uc.i.MatricesWeightsKind) && (cB.matricesWeightsUpdatable = !0)), cB.indices = this._toNumberArray(this.Tfc()), cB
      }
      static ExtractFromMesh(cB, Bc) {
        const nc = cB._geometry;
        return nc ? nc.copy(Bc) : null
      }
      static RandomId() {
        return qB.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(cB, Bc) {
        for (let nc = 0; nc < Bc.geometries.length; nc++)
          if (Bc.geometries[nc]._loadedUniqueId === cB) return Bc.geometries[nc];
        return null
      }
      static _ImportGeometry(cB, Bc) {
        const nc = Bc.knc(),
          Vc = cB.geometryUniqueId,
          rB = cB.geometryId;
        if (Vc || rB) {
          const cB = Vc ? this._GetGeometryByLoadedUniqueId(Vc, nc) : nc.getGeometryById(rB);
          cB && cB.applyToMesh(Bc)
        } else if (cB instanceof ArrayBuffer) {
          const nc = Bc._binaryInfo;
          if (nc.positionsAttrDesc && nc.positionsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.positionsAttrDesc.offset, nc.positionsAttrDesc.count);
            Bc.setVerticesData(uc.i.PositionKind, Vc, !1)
          }
          if (nc.normalsAttrDesc && nc.normalsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.normalsAttrDesc.offset, nc.normalsAttrDesc.count);
            Bc.setVerticesData(uc.i.NormalKind, Vc, !1)
          }
          if (nc.tangetsAttrDesc && nc.tangetsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.tangetsAttrDesc.offset, nc.tangetsAttrDesc.count);
            Bc.setVerticesData(uc.i.TangentKind, Vc, !1)
          }
          if (nc.uvsAttrDesc && nc.uvsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvsAttrDesc.offset, nc.uvsAttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UVKind, Vc, !1)
          }
          if (nc.uvs2AttrDesc && nc.uvs2AttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvs2AttrDesc.offset, nc.uvs2AttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UV2Kind, Vc, !1)
          }
          if (nc.uvs3AttrDesc && nc.uvs3AttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvs3AttrDesc.offset, nc.uvs3AttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UV3Kind, Vc, !1)
          }
          if (nc.uvs4AttrDesc && nc.uvs4AttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvs4AttrDesc.offset, nc.uvs4AttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UV4Kind, Vc, !1)
          }
          if (nc.uvs5AttrDesc && nc.uvs5AttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvs5AttrDesc.offset, nc.uvs5AttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UV5Kind, Vc, !1)
          }
          if (nc.uvs6AttrDesc && nc.uvs6AttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.uvs6AttrDesc.offset, nc.uvs6AttrDesc.count);
            if (ec.e)
              for (let cB = 1; cB < Vc.length; cB += 2) Vc[cB] = 1 - Vc[cB];
            Bc.setVerticesData(uc.i.UV6Kind, Vc, !1)
          }
          if (nc.colorsAttrDesc && nc.colorsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.colorsAttrDesc.offset, nc.colorsAttrDesc.count);
            Bc.setVerticesData(uc.i.ColorKind, Vc, !1, nc.colorsAttrDesc.stride)
          }
          if (nc.matricesIndicesAttrDesc && nc.matricesIndicesAttrDesc.count > 0) {
            const Vc = new Int32Array(cB, nc.matricesIndicesAttrDesc.offset, nc.matricesIndicesAttrDesc.count),
              Ic = [];
            for (let cB = 0; cB < Vc.length; cB++) {
              const Bc = Vc[cB];
              Ic.push(255 & Bc), Ic.push((65280 & Bc) >> 8), Ic.push((16711680 & Bc) >> 16), Ic.push(Bc >> 24 & 255)
            }
            Bc.setVerticesData(uc.i.MatricesIndicesKind, Ic, !1)
          }
          if (nc.matricesIndicesExtraAttrDesc && nc.matricesIndicesExtraAttrDesc.count > 0) {
            const Vc = new Int32Array(cB, nc.matricesIndicesExtraAttrDesc.offset, nc.matricesIndicesExtraAttrDesc.count),
              Ic = [];
            for (let cB = 0; cB < Vc.length; cB++) {
              const Bc = Vc[cB];
              Ic.push(255 & Bc), Ic.push((65280 & Bc) >> 8), Ic.push((16711680 & Bc) >> 16), Ic.push(Bc >> 24 & 255)
            }
            Bc.setVerticesData(uc.i.MatricesIndicesExtraKind, Ic, !1)
          }
          if (nc.matricesWeightsAttrDesc && nc.matricesWeightsAttrDesc.count > 0) {
            const Vc = new Float32Array(cB, nc.matricesWeightsAttrDesc.offset, nc.matricesWeightsAttrDesc.count);
            Bc.setVerticesData(uc.i.MatricesWeightsKind, Vc, !1)
          }
          if (nc.indicesAttrDesc && nc.indicesAttrDesc.count > 0) {
            const Vc = new Int32Array(cB, nc.indicesAttrDesc.offset, nc.indicesAttrDesc.count);
            Bc.setIndices(Vc, null)
          }
          if (nc.subMeshesAttrDesc && nc.subMeshesAttrDesc.count > 0) {
            const Vc = new Int32Array(cB, nc.subMeshesAttrDesc.offset, 5 * nc.subMeshesAttrDesc.count);
            Bc.rD = [];
            for (let cB = 0; cB < nc.subMeshesAttrDesc.count; cB++) {
              const nc = Vc[5 * cB + 0],
                Ic = Vc[5 * cB + 1],
                rB = Vc[5 * cB + 2],
                uc = Vc[5 * cB + 3],
                Mc = Vc[5 * cB + 4];
              sc.e.AddToMesh(nc, Ic, rB, uc, Mc, Bc)
            }
          }
        } else if (cB.positions && cB.normals && cB.indices) {
          if (Bc.setVerticesData(uc.i.PositionKind, cB.positions, cB.positions._updatable || cB.positionsUpdatable), Bc.setVerticesData(uc.i.NormalKind, cB.normals, cB.normals._updatable || cB.normalsUpdatable), cB.tangents && Bc.setVerticesData(uc.i.TangentKind, cB.tangents, cB.tangents._updatable || cB.tangentsUpdatable), cB.uvs && Bc.setVerticesData(uc.i.UVKind, cB.uvs, cB.uvs._updatable || cB.uvsUpdatable), cB.uvs2 && Bc.setVerticesData(uc.i.UV2Kind, cB.uvs2, cB.uvs2._updatable || cB.uvs2Updatable), cB.uvs3 && Bc.setVerticesData(uc.i.UV3Kind, cB.uvs3, cB.uvs3._updatable || cB.uvs3Updatable), cB.uvs4 && Bc.setVerticesData(uc.i.UV4Kind, cB.uvs4, cB.uvs4._updatable || cB.uvs4Updatable), cB.uvs5 && Bc.setVerticesData(uc.i.UV5Kind, cB.uvs5, cB.uvs5._updatable || cB.uvs5Updatable), cB.uvs6 && Bc.setVerticesData(uc.i.UV6Kind, cB.uvs6, cB.uvs6._updatable || cB.uvs6Updatable), cB.colors && Bc.setVerticesData(uc.i.ColorKind, Ic.g.CheckColors4(cB.colors, cB.positions.length / 3), cB.colors._updatable), cB.matricesIndices)
            if (cB.matricesIndices._isExpanded || cB.matricesIndicesExpanded) delete cB.matricesIndices._isExpanded, delete cB.matricesIndicesExpanded, Bc.setVerticesData(uc.i.MatricesIndicesKind, cB.matricesIndices, cB.matricesIndices._updatable || cB.matricesIndicesUpdatable);
            else {
              const nc = [];
              for (let Bc = 0; Bc < cB.matricesIndices.length; Bc++) {
                const Vc = cB.matricesIndices[Bc];
                nc.push(255 & Vc), nc.push((65280 & Vc) >> 8), nc.push((16711680 & Vc) >> 16), nc.push(Vc >> 24 & 255)
              }
              Bc.setVerticesData(uc.i.MatricesIndicesKind, nc, cB.matricesIndices._updatable || cB.matricesIndicesUpdatable)
            } if (cB.matricesIndicesExtra)
            if (cB.matricesIndicesExtraExpanded || cB.matricesIndicesExtra._isExpanded) delete cB.matricesIndices._isExpanded, delete cB.matricesIndicesExtraExpanded, Bc.setVerticesData(uc.i.MatricesIndicesExtraKind, cB.matricesIndicesExtra, cB.matricesIndicesExtra._updatable || cB.matricesIndicesExtraUpdatable);
            else {
              const nc = [];
              for (let Bc = 0; Bc < cB.matricesIndicesExtra.length; Bc++) {
                const Vc = cB.matricesIndicesExtra[Bc];
                nc.push(255 & Vc), nc.push((65280 & Vc) >> 8), nc.push((16711680 & Vc) >> 16), nc.push(Vc >> 24 & 255)
              }
              Bc.setVerticesData(uc.i.MatricesIndicesExtraKind, nc, cB.matricesIndicesExtra._updatable || cB.matricesIndicesExtraUpdatable)
            } cB.matricesWeights && (Sc._CleanMatricesWeights(cB, Bc), Bc.setVerticesData(uc.i.MatricesWeightsKind, cB.matricesWeights, cB.matricesWeights._updatable)), cB.matricesWeightsExtra && Bc.setVerticesData(uc.i.MatricesWeightsExtraKind, cB.matricesWeightsExtra, cB.matricesWeights._updatable), Bc.setIndices(cB.indices, null)
        }
        if (cB.rD) {
          Bc.rD = [];
          for (let nc = 0; nc < cB.rD.length; nc++) {
            const Vc = cB.rD[nc];
            sc.e.AddToMesh(Vc.materialIndex, Vc.verticesStart, Vc.verticesCount, Vc.indexStart, Vc.indexCount, Bc)
          }
        }
        Bc._shouldGenerateFlatShading && (Bc.convertToFlatShadedMesh(), Bc._shouldGenerateFlatShading = !1), Bc.computeWorldMatrix(!0), nc.onMeshImportedObservable.notifyObservers(Bc)
      }
      static _CleanMatricesWeights(cB, Bc) {
        const nc = .001;
        if (!Mc.d.CleanBoneMatrixWeights) return;
        let Vc;
        if (!(cB.skeletonId > -1)) return;
        {
          const nc = Bc.knc().getLastSkeletonById(cB.skeletonId);
          if (!nc) return;
          Vc = nc.bones.length
        }
        const Ic = Bc.getVerticesData(uc.i.MatricesIndicesKind),
          rB = Bc.getVerticesData(uc.i.MatricesIndicesExtraKind),
          sc = cB.matricesWeights,
          Pc = cB.matricesWeightsExtra,
          qB = cB.numBoneInfluencer,
          Oc = sc.length;
        for (let uc = 0; uc < Oc; uc += 4) {
          let cB = 0,
            Bc = -1;
          for (let Vc = 0; Vc < 4; Vc++) {
            const Ic = sc[uc + Vc];
            cB += Ic, Ic < nc && Bc < 0 && (Bc = Vc)
          }
          if (Pc)
            for (let Vc = 0; Vc < 4; Vc++) {
              const Ic = Pc[uc + Vc];
              cB += Ic, Ic < nc && Bc < 0 && (Bc = Vc + 4)
            }
          if ((Bc < 0 || Bc > qB - 1) && (Bc = qB - 1), cB > nc) {
            const Bc = 1 / cB;
            for (let cB = 0; cB < 4; cB++) sc[uc + cB] *= Bc;
            if (Pc)
              for (let cB = 0; cB < 4; cB++) Pc[uc + cB] *= Bc
          } else Bc >= 4 ? (Pc[uc + Bc - 4] = 1 - cB, rB[uc + Bc - 4] = Vc) : (sc[uc + Bc] = 1 - cB, Ic[uc + Bc] = Vc)
        }
        Bc.setVerticesData(uc.i.MatricesIndicesKind, Ic), cB.matricesWeightsExtra && Bc.setVerticesData(uc.i.MatricesIndicesExtraKind, rB)
      }
      static Parse(cB, Bc, nc) {
        const Ic = new Sc(cB.id, Bc, void 0, cB.updatable);
        return Ic._loadedUniqueId = cB.uniqueId, Tc.c && Tc.c.AddTagsTo(Ic, cB.tags), cB.delayLoadingFile ? (Ic.delayLoadState = 4, Ic.delayLoadingFile = nc + cB.delayLoadingFile, Ic._boundingInfo = new Pc.b(Vc.p.FromArray(cB.boundingBoxMinimum), Vc.p.FromArray(cB.boundingBoxMaximum)), Ic._delayInfo = [], cB.hasUVs && Ic._delayInfo.push(uc.i.UVKind), cB.hasUVs2 && Ic._delayInfo.push(uc.i.UV2Kind), cB.hasUVs3 && Ic._delayInfo.push(uc.i.UV3Kind), cB.hasUVs4 && Ic._delayInfo.push(uc.i.UV4Kind), cB.hasUVs5 && Ic._delayInfo.push(uc.i.UV5Kind), cB.hasUVs6 && Ic._delayInfo.push(uc.i.UV6Kind), cB.hasColors && Ic._delayInfo.push(uc.i.ColorKind), cB.hasMatricesIndices && Ic._delayInfo.push(uc.i.MatricesIndicesKind), cB.hasMatricesWeights && Ic._delayInfo.push(uc.i.MatricesWeightsKind), Ic._delayLoadingFunction = rB.b.ImportVertexData) : rB.b.ImportVertexData(cB, Ic), Bc.pushGeometry(Ic, !0), Ic
      }
    }
  },
  38479: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Oc,
      e: () => mB
    });
    var Vc = nc(35756),
      Ic = nc(37191),
      rB = nc(38456),
      uc = nc(38425),
      sc = nc(37185),
      Mc = nc(38459),
      Pc = nc(38194),
      qB = nc(35799);
    class Oc extends rB.c {
      constructor(cB, Bc) {
        super(cB, Bc.knc()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Bc.xuc(this), this._sourceMesh = Bc, this._unIndexed = Bc._unIndexed, this.position.qqc(Bc.position), this.rotation.qqc(Bc.rotation), this.Su.qqc(Bc.Su), Bc.rotationQuaternion && (this.rotationQuaternion = Bc.rotationQuaternion.clone()), this.animations = Bc.animations.slice();
        for (const nc of Bc.getAnimationRanges()) null != nc && this.createAnimationRange(nc.name, nc.from, nc.to);
        if (this.infiniteDistance = Bc.infiniteDistance, this.setPivotMatrix(Bc.getPivotMatrix()), Bc.skeleton || Bc.morphTargetManager || !Bc.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const cB = Bc.qVc();
          this.buildBoundingInfo(cB.minimum, cB.maximum)
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
      set receiveShadows(cB) {
        this._sourceMesh?.receiveShadows !== cB && Ic.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(cB) {
        this._sourceMesh?.material !== cB && Ic.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(cB) {
        this._sourceMesh?.visibility !== cB && Ic.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(cB) {
        this._sourceMesh?.skeleton !== cB && Ic.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(cB) {
        this._sourceMesh && cB !== this._sourceMesh.renderingGroupId && Ic.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(cB) {
        this._sourceMesh && cB !== this._sourceMesh.meshBlendingTag && Ic.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get wqc() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(cB) {
        return this._sourceMesh.createInstance(cB)
      }
      isReady() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(cB, !0)
      }
      getVerticesData(cB, Bc, nc) {
        return this._sourceMesh.getVerticesData(cB, Bc, nc)
      }
      copyVerticesData(cB, Bc) {
        this._sourceMesh.copyVerticesData(cB, Bc)
      }
      getVertexBuffer(cB, Bc) {
        return this._sourceMesh.getVertexBuffer(cB, Bc)
      }
      setVerticesData(cB, Bc, nc, Vc) {
        return this.wqc && this.wqc.setVerticesData(cB, Bc, nc, Vc), this.wqc
      }
      updateVerticesData(cB, Bc, nc, Vc) {
        return this.wqc && this.wqc.updateVerticesData(cB, Bc, nc, Vc), this.wqc
      }
      setIndices(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.wqc && this.wqc.setIndices(cB, Bc), this.wqc
      }
      isVerticesDataPresent(cB) {
        return this._sourceMesh.isVerticesDataPresent(cB)
      }
      Tfc() {
        return this._sourceMesh.Tfc()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qVc().isLocked) return this;
        cB = "object" === typeof Bc ? Bc : {
          applySkeleton: Bc,
          applyMorph: nc
        };
        const Vc = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(cB, null, Pc.i.PositionKind), Vc), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(cB, Bc) {
        if (super._activate(cB, Bc), this._sourceMesh.rD || Ic.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, cB), Bc) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Mc.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Vc.d);
          const cB = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Vc.i.KV[7].qqc(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.qqc(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.qqc(Vc.i.KV[7]), this._currentLOD._masterMesh = cB, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get HBc() {
        return !0
      }
      getLOD(cB) {
        if (!cB) return this;
        const Bc = this.wqc.getLODLevels();
        if (Bc && 0 !== Bc.length) {
          const Bc = this.qVc();
          this._currentLOD = this.wqc.getLOD(cB, Bc.tOc)
        } else this._currentLOD = this.wqc;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(cB) {
        return this.wqc._preActivateForIntermediateRendering(cB)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.rD)
          for (let cB = 0; cB < this._sourceMesh.rD.length; cB++) this._sourceMesh.rD[cB].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.qVc().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(cB);
        if (sc.b.DeepCopy(this, Vc, ["name", "rD", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "wqc", "HBc", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "Wqc", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "ymc", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Bc && (Vc.parent = Bc), !nc)
          for (let Ic = 0; Ic < this.knc().meshes.length; Ic++) {
            const cB = this.knc().meshes[Ic];
            cB.parent === this && cB.clone(cB.name, Vc)
          }
        return Vc.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Vc), Vc
      }
      dispose(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.csc(this), super.dispose(cB, Bc)
      }
      _serializeAsParent(cB) {
        super._serializeAsParent(cB), cB.parentId = this._sourceMesh.uniqueId, cB.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = this.clone("Clone of " + (this.name || this.id), cB || this.parent, !0, Bc && Bc.newSourcedMesh);
        Vc && nc && nc(this, Vc);
        for (const Ic of this.getChildTransformNodes(!0)) Ic.instantiateHierarchy(Vc, Bc, nc);
        return Vc
      }
    }
    let Tc = !1;

    function fc(cB, Bc, nc, Vc, Ic) {
      for (let rB = 0; rB < Bc.length; rB++) {
        const uc = cB[Bc[rB]] ?? 0,
          sc = Ic + nc[rB];
        uc.toArray ? uc.toArray(Vc, sc) : uc.copyToArray ? uc.copyToArray(Vc, sc) : Vc[sc] = uc
      }
    }

    function mB() {
      Tc || (Tc = !0, uc.b._instancedMeshFactory = (cB, Bc) => {
        const nc = new Oc(cB, Bc);
        if (Bc.snc) {
          nc.snc = {};
          for (const cB in Bc.snc) nc.snc[cB] = Bc.snc[cB]
        }
        return nc
      }, uc.b.prototype.unc = function(cB, Bc) {
        if (!this.snc) {
          this.snc = {};
          for (const cB of this.instances) cB.snc = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.RV().getCaps().vertexArrayObject ? {} : void 0
        }), this.snc[cB] = null, this._userInstancedBuffersStorage.strides[cB] = Bc;
        const nc = this._userInstancedBuffersStorage;
        nc.interleavedKinds = [], nc.interleavedOffsets = [], nc.interleavedRowStride = 0;
        for (const Vc in nc.strides) nc.interleavedKinds.push(Vc), nc.interleavedOffsets.push(nc.interleavedRowStride), nc.interleavedRowStride += nc.strides[Vc];
        nc.interleavedData = new Float32Array(32 * nc.interleavedRowStride);
        for (const Vc in nc.interleavedBuffers) nc.interleavedBuffers[Vc].buffer.dispose();
        nc.interleavedBuffers = {}, nc.vertexBuffers[cB] = null;
        for (const Vc of this.instances) Vc.snc[cB] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, uc.b.prototype._processInstancedBuffers = function(cB, Bc) {
        const nc = this._userInstancedBuffersStorage,
          Vc = nc.interleavedRowStride;
        if (!Vc) return;
        const Ic = cB ? cB.length : 0,
          rB = (Ic + 1) * Vc;
        let uc = nc.interleavedData;
        if (uc.length < rB) {
          let cB = uc.length;
          for (; cB < rB;) cB *= 2;
          uc = nc.interleavedData = new Float32Array(cB)
        }
        const sc = nc.interleavedKinds,
          Mc = nc.interleavedOffsets;
        let qB = 0;
        Bc && (fc(this.snc, sc, Mc, uc, qB), qB += Vc);
        for (let Pc = 0; Pc < Ic; Pc++) fc(cB[Pc].snc, sc, Mc, uc, qB), qB += Vc;
        let Oc = "shared",
          Tc = nc.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Oc = this._instanceDataStorage.engine.currentRenderPassId, nc.renderPasses || (nc.renderPasses = {}), nc.renderPasses[Oc] || (nc.renderPasses[Oc] = {}), Tc = nc.renderPasses[Oc]);
        const mB = nc.interleavedBuffers[Oc];
        let ec = !mB || mB.data !== uc;
        for (let Pc = 0; !ec && Pc < sc.length; Pc++) ec = !Tc[sc[Pc]];
        if (!ec) return void mB.buffer.updateDirectly(uc, 0);
        mB?.buffer.dispose();
        const tB = new Pc.b(this.RV(), uc, !0, Vc, !1, !0);
        for (let Pc = 0; Pc < sc.length; Pc++) {
          const cB = sc[Pc],
            Bc = tB.createVertexBuffer(cB, Mc[Pc], nc.strides[cB]);
          Bc.hashCode += Bc.byteOffset * 2 ** 24, Tc[cB] = Bc
        }
        nc.interleavedBuffers[Oc] = {
          buffer: tB,
          data: uc
        }, this._invalidateInstanceVertexArrayObject()
      }, uc.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const cB in this._userInstancedBuffersStorage.vertexArrayObjects) this.RV().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[cB]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, uc.b.prototype._disposeInstanceSpecificData = function() {
        for (const Bc in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Bc].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Bc in this.snc) this._userInstancedBuffersStorage.vertexBuffers[Bc] && this._userInstancedBuffersStorage.vertexBuffers[Bc].dispose();
        const cB = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (cB) {
          for (const Bc in cB) cB[Bc].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.snc = {}
      }, (0, qB.d)("BABYLON.InstancedMesh", Oc))
    }
  },
  38425: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => dc,
      d: () => Gc,
      f: () => Fc
    });
    var Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc = nc(35783),
      yB = nc(38146),
      zB = nc(38090),
      pc = nc(37185),
      hc = nc(38075),
      aB = nc(38428),
      lc = nc(38251),
      Yc = nc(35756),
      Lc = nc(35815),
      gB = nc(38255),
      Uc = nc(38194),
      bB = nc(38430),
      Zc = nc(38434),
      Qc = nc(38456),
      Cc = nc(38332),
      vB = nc(38326),
      Dc = nc(38400),
      Nc = nc(38461),
      Ec = nc(38441),
      oc = nc(38068),
      Wc = nc(37191),
      wc = nc(35799),
      kB = nc(37953),
      Xc = nc(38214);
    class Hc {
      constructor(cB, Bc) {
        this.distanceOrScreenCoverage = cB, this.mesh = Bc
      }
    }
    class Fc {}
    class Jc {
      constructor() {
        this.batchCache = new Rc(this), this.batchCacheReplacementModeInFrozenMode = new Rc(this), this.instancesBufferSize = 2048
      }
    }
    class jB {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Rc {
      constructor(cB) {
        this.parent = cB, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class iB {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Kc {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const xB = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class dc extends Qc.c {
      static _GetDefaultSideOrientation(cB) {
        return cB || dc.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(cB) {
        this._internalMeshDataInfo._useLODScreenCoverage = cB, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(cB) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== cB && (cB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Uc.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Uc.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = cB, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Sc.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Sc.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Sc.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Sc.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Sc.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(cB) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(cB)
      }
      get Wqc() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(cB) {
        this._internalMeshDataInfo._forcedInstanceCount = cB
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(cB) {
        this._internalMeshDataInfo._sideOrientation = cB, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === cB || !this._scene.useRightHandedSystem && 0 === cB
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(cB) {
        this.sideOrientation = cB, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(cB) {
        this._internalMeshDataInfo._overrideRenderingFillMode = cB
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(cB) {
        cB && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (cB.sideOrientation = null), this._setMaterial(cB)
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
      set isUnIndexed(cB) {
        this._unIndexed !== cB && (this._unIndexed = cB, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const cB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return cB ? cB.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const cB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return cB ? cB.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(cB) {
        this._instanceDataStorage.manualUpdate = cB
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(cB) {
        this._instanceDataStorage.previousManualUpdate = cB
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(cB) {
        this._instanceDataStorage.forceMatrixUpdates = cB
      }
      _copySource(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ic = this.knc();
        if (cB._geometry && cB._geometry.applyToMesh(this), pc.b.DeepCopy(cB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "Wqc", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "HBc", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "ymc", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = cB, Ic.useClonedMeshMap && (cB._internalMeshDataInfo.meshMap || (cB._internalMeshDataInfo.meshMap = {}), cB._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = cB._originalBuilderSideOrientation, this._creationDataStorage = cB._creationDataStorage, cB._ranges) {
          const Bc = cB._ranges;
          for (const cB in Bc) Object.prototype.hasOwnProperty.call(Bc, cB) && Bc[cB] && this.createAnimationRange(cB, Bc[cB].from, Bc[cB].to)
        }
        if (cB.metadata && cB.metadata.clone ? this.metadata = cB.metadata.clone() : this.metadata = cB.metadata, this._internalMetadata = cB._internalMetadata, this.meshBlendingTag = cB.meshBlendingTag, hc.c && hc.c.HasTags(cB) && hc.c.AddTagsTo(this, hc.c.GetTags(cB, !0)), this.jnc(cB.isEnabled(!1)), this.parent = cB.parent, this.setPivotMatrix(cB.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + cB.id, this.material = cB.material, !Bc) {
          const Ic = cB.getDescendants(!0);
          for (let cB = 0; cB < Ic.length; cB++) {
            const rB = Ic[cB];
            rB._isMesh ? (xB.parent = this, xB.doNotCloneChildren = Bc, xB.clonePhysicsImpostor = nc, xB.cloneThinInstances = Vc, rB.clone(this.name + "." + rB.name, xB)) : rB.clone && rB.clone(this.name + "." + rB.name, this)
          }
        }
        if (cB.morphTargetManager && (this.morphTargetManager = cB.morphTargetManager), (0, kB.c)(Ic.getPhysicsEngine)) {
          const Bc = Ic.getPhysicsEngine();
          if (nc && Bc)
            if (1 === Bc.getPluginVersion()) {
              const nc = Bc.getImpostorForPhysicsObject(cB);
              nc && (this.physicsImpostor = nc.clone(this))
            } else 2 === Bc.getPluginVersion() && cB.physicsBody && cB.physicsBody.clone(this)
        }
        for (let rB = 0; rB < Ic.qD.length; rB++) {
          const Bc = Ic.qD[rB];
          Bc.emitter === cB && Bc.clone(Bc.name, this)
        }
        if (this.skeleton = cB.skeleton, Vc && (cB._thinInstanceDataStorage.matrixData ? (this.Ouc("matrix", new Float32Array(cB._thinInstanceDataStorage.matrixData), 16, !cB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = cB._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = cB._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = cB._thinInstanceDataStorage.matrixBufferSize, cB._userThinInstanceBuffersStorage)) {
          const Bc = cB._userThinInstanceBuffersStorage;
          for (const cB in Bc.data) this.Ouc(cB, new Float32Array(Bc.data[cB]), Bc.strides[cB], !Bc.vertexBuffers?.[cB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[cB] = Bc.sizes[cB]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(cB) {
        let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rB = arguments.length > 4 ? arguments[4] : void 0,
          uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(cB, nc), this._internalMeshDataInfo = new Kc, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new iB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = dc.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, nc = this.knc(), this._instanceDataStorage = new jB, this._instanceDataStorage.engine = nc.RV(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Jc), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (cB, Bc, nc) => {
          cB && nc && (this._uniformBuffer ? this.transferToEffect(Bc) : nc.bindOnlyWorldMatrix(Bc))
        };
        let sc = !1;
        if (Vc && void 0 === Vc._addToSceneRootNodes) {
          const cB = Vc;
          Bc = cB.parent ?? null, Ic = cB.source ?? null, rB = cB.doNotCloneChildren ?? !1, uc = cB.clonePhysicsImpostor ?? !0, sc = cB.cloneThinInstances ?? !1
        } else Bc = Vc;
        Ic && this._copySource(Ic, rB, uc, sc), null !== Bc && (this.parent = Bc), this._instanceDataStorage.hardwareInstancedRendering = this.RV().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = cB => {
          cB.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Sc.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Ic && Ic.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = 0 === this.getTotalVertices() || Bc && Bc.doNotInstantiate && (!0 === Bc.doNotInstantiate || Bc.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), cB || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Vc.parent = cB || this.parent, Vc.position = this.position.clone(), Vc.Su = this.Su.clone(), this.rotationQuaternion ? Vc.rotationQuaternion = this.rotationQuaternion.clone() : Vc.rotation = this.rotation.clone(), nc && nc(this, Vc);
        for (const Ic of this.getChildTransformNodes(!0)) "InstancedMesh" === Ic.getClassName() && "Mesh" === Vc.getClassName() && Ic.wqc === this ? Ic.instantiateHierarchy(Vc, {
          doNotInstantiate: Bc && Bc.doNotInstantiate || !1,
          newSourcedMesh: Vc
        }, nc) : Ic.instantiateHierarchy(Vc, Bc, nc);
        return Vc
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(cB) {
        let Bc = super.toString(cB);
        if (Bc += ", n vertices: " + this.getTotalVertices(), Bc += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let nc = 0; nc < this.animations.length; nc++) Bc += ", animation[0]: " + this.animations[nc].toString(cB);
        if (cB)
          if (this._geometry) {
            const cB = this.Tfc(),
              nc = this.getVerticesData(Uc.i.PositionKind);
            nc && cB && (Bc += ", flat shading: " + (nc.length / 3 === cB.length ? "YES" : "NO"))
          } else Bc += ", flat shading: UNKNOWN";
        return Bc
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const cB of this.instances) cB._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const cB = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Bc, nc) => Bc.distanceOrScreenCoverage < nc.distanceOrScreenCoverage ? cB : Bc.distanceOrScreenCoverage > nc.distanceOrScreenCoverage ? -cB : 0))
      }
      addLODLevel(cB, Bc) {
        if (Bc && Bc._masterMesh) return Wc.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const nc = new Hc(cB, Bc);
        return this._internalMeshDataInfo._LODLevels.push(nc), Bc && (Bc._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(cB) {
        const Bc = this._internalMeshDataInfo;
        for (let nc = 0; nc < Bc._LODLevels.length; nc++) {
          const Vc = Bc._LODLevels[nc];
          if (Vc.distanceOrScreenCoverage === cB) return Vc.mesh
        }
        return null
      }
      removeLODLevel(cB) {
        const Bc = this._internalMeshDataInfo;
        for (let nc = 0; nc < Bc._LODLevels.length; nc++) Bc._LODLevels[nc].mesh === cB && (Bc._LODLevels.splice(nc, 1), cB && (cB._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(cB, Bc) {
        const nc = this._internalMeshDataInfo;
        if (!nc._LODLevels || 0 === nc._LODLevels.length) return this;
        const Vc = Bc || this.qVc().tOc,
          Ic = cB.mode === lc.e.ORTHOGRAPHIC_CAMERA ? cB.minZ : Vc.centerWorld.subtract(cB.globalPosition).length();
        let rB = Ic,
          uc = 1;
        if (nc._useLODScreenCoverage) {
          const Bc = cB.screenArea;
          let nc = Vc.radiusWorld * cB.minZ / Ic;
          nc = nc * nc * Math.PI, rB = nc / Bc, uc = -1
        }
        if (uc * nc._LODLevels[nc._LODLevels.length - 1].distanceOrScreenCoverage > uc * rB) return this.onLODLevelSelection && this.onLODLevelSelection(rB, this, this), this;
        for (let sc = 0; sc < nc._LODLevels.length; sc++) {
          const cB = nc._LODLevels[sc];
          if (uc * cB.distanceOrScreenCoverage < uc * rB) {
            if (cB.mesh) {
              if (4 === cB.mesh.delayLoadState) return cB.mesh._checkDelayState(), this;
              if (2 === cB.mesh.delayLoadState) return this;
              cB.mesh._preActivate(), cB.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(rB, this, cB.mesh), cB.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(rB, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(cB, Bc, nc, Vc) {
        if (!this._geometry) return null;
        let Ic = Vc ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[cB]?.getFloatData(this.instances.length + 1, nc || Bc && 1 !== this._geometry.meshes.length);
        return Ic || (Ic = this._geometry.getVerticesData(cB, Bc, nc)), Ic
      }
      copyVerticesData(cB, Bc) {
        this._geometry && this._geometry.copyVerticesData(cB, Bc)
      }
      getVertexBuffer(cB, Bc) {
        return this._geometry ? (Bc ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[cB]) ?? this._geometry.getVertexBuffer(cB) : null
      }
      isVerticesDataPresent(cB, Bc) {
        return this._geometry ? !Bc && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[cB] || this._geometry.isVerticesDataPresent(cB) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(cB)
      }
      isVertexBufferUpdatable(cB, Bc) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(cB);
        if (!Bc) {
          const Bc = this._userInstancedBuffersStorage?.vertexBuffers[cB];
          if (Bc) return Bc.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(cB)
      }
      getVerticesDataKinds(cB) {
        if (!this._geometry) {
          const cB = [];
          if (this._delayInfo)
            for (const Bc of this._delayInfo) cB.push(Bc);
          return cB
        }
        const Bc = this._geometry.getVerticesDataKinds();
        if (!cB && this._userInstancedBuffersStorage)
          for (const nc in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Bc.indexOf(nc) && Bc.push(nc);
        return Bc
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Tfc(cB, Bc) {
        return this._geometry ? this._geometry.Tfc(cB, Bc) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(cB)) return !1;
        if (!this.rD || 0 === this.rD.length) return !0;
        if (!cB) return !0;
        const nc = this.RV(),
          Vc = this.knc(),
          Ic = Bc || nc.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const rB = this.material || Vc.defaultMaterial;
        if (rB)
          if (rB._storeEffectOnSubMeshes)
            for (const sc of this.rD) {
              const cB = sc.AV();
              if (cB)
                if (cB._storeEffectOnSubMeshes) {
                  if (!cB.isReadyForSubMesh(this, sc, Ic)) return !1
                } else if (!cB.isReady(this, Ic)) return !1
            } else if (!rB.isReady(this, Ic)) return !1;
        const uc = nc.currentRenderPassId;
        for (const sc of this.lightSources) {
          const cB = sc.getShadowGenerators();
          if (!cB) continue;
          const Bc = cB.values();
          for (let Vc = Bc.next(); !0 !== Vc.done; Vc = Bc.next()) {
            const cB = Vc.value;
            if (cB && (!cB.getShadowMap()?.renderList || cB.getShadowMap()?.renderList && -1 !== cB.getShadowMap()?.renderList?.indexOf(this))) {
              const Bc = cB.getShadowMap().renderPassIds ?? [nc.currentRenderPassId];
              for (let Vc = 0; Vc < Bc.length; ++Vc) {
                nc.currentRenderPassId = Bc[Vc];
                for (const Bc of this.rD)
                  if (!cB.isReady(Bc, Ic, Bc.AV()?.needAlphaBlendingForMesh(this) ?? !1)) return nc.currentRenderPassId = uc, !1
              }
              nc.currentRenderPassId = uc
            }
          }
        }
        for (const sc of this._internalMeshDataInfo._LODLevels)
          if (sc.mesh && !sc.mesh.isReady(Ic)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      GV() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(cB) {
        this._instanceDataStorage.overridenInstanceCount = cB
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const cB = this._instanceDataStorage.engine.currentRenderPassId;
        let Bc = this._instanceDataStorage.renderPasses[cB];
        return Bc || (Bc = new Jc, this._instanceDataStorage.renderPasses[cB] = Bc), Bc
      }
      _preActivate() {
        const cB = this._internalMeshDataInfo,
          Bc = this.knc().getRenderId();
        return cB._preActivateId === Bc || (cB._preActivateId = Bc, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(cB) {
        const Bc = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Bc.visibleInstances && (Bc.visibleInstances.intermediateDefaultRenderId = cB), this
      }
      _registerInstanceForRenderId(cB, Bc) {
        const nc = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return nc.visibleInstances || (nc.visibleInstances = {
          defaultRenderId: Bc,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), nc.visibleInstances[Bc] || (void 0 === nc.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete nc.visibleInstances[nc.previousRenderId], nc.previousRenderId = Bc, nc.visibleInstances[Bc] = new Array), nc.visibleInstances[Bc].push(cB), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.dV || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qVc().isLocked) return this;
        cB = "object" === typeof Bc ? Bc : {
          applySkeleton: Bc,
          applyMorph: nc
        };
        const Vc = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(cB, null, Uc.i.PositionKind), Vc), this
      }
      _createGlobalSubMesh(cB) {
        const Bc = this.getTotalVertices();
        if (!Bc || !this.Tfc()) return null;
        if (this.rD && this.rD.length > 0) {
          const nc = this.Tfc();
          if (!nc) return null;
          const Vc = nc.length;
          let Ic = !1;
          if (cB) Ic = !0;
          else
            for (const cB of this.rD) {
              if (cB.indexStart + cB.indexCount > Vc) {
                Ic = !0;
                break
              }
              if (cB.verticesStart + cB.verticesCount > Bc) {
                Ic = !0;
                break
              }
            }
          if (!Ic) return this.rD[0]
        }
        return this.releaseSubMeshes(), new Cc.e(0, 0, Bc, 0, this.getTotalIndices() || (this.isUnIndexed ? Bc : 0), this)
      }
      subdivide(cB) {
        if (cB < 1) return;
        const Bc = this.getTotalIndices();
        let nc = Bc / cB | 0,
          Vc = 0;
        for (; nc % 3 !== 0;) nc++;
        this.releaseSubMeshes();
        for (let Ic = 0; Ic < cB && !(Vc >= Bc); Ic++) Cc.e.CreateFromIndices(0, Vc, Vc + nc >= Bc ? Bc - Vc : nc, this, void 0, !1), Vc += nc;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(cB, Bc, nc, Vc);
        else {
          const Vc = new bB.b;
          Vc.set(Bc, cB);
          const Ic = this.knc();
          new Zc.e(Zc.e.RandomId(), Ic, Vc, nc, this)
        }
        return this
      }
      removeVerticesData(cB) {
        this._geometry && this._geometry.removeVerticesData(cB)
      }
      markVerticesDataAsUpdatable(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const nc = this.getVertexBuffer(cB);
        nc && nc.isUpdatable() !== Bc && this.setVerticesData(cB, this.getVerticesData(cB), Bc)
      }
      setVerticesBuffer(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Zc.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(cB, nc, Bc), this
      }
      updateVerticesData(cB, Bc, nc, Vc) {
        return this._geometry ? (Vc ? (this.makeGeometryUnique(), this.updateVerticesData(cB, Bc, nc, !1)) : this._geometry.updateVerticesData(cB, Bc, nc), this) : this
      }
      updateMeshPositions(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const nc = this.getVerticesData(Uc.i.PositionKind);
        if (!nc) return this;
        if (cB(nc), this.updateVerticesData(Uc.i.PositionKind, nc, !1, !1), Bc) {
          const cB = this.Tfc(),
            Bc = this.getVerticesData(Uc.i.NormalKind);
          if (!Bc) return this;
          bB.b.ComputeNormals(nc, cB, Bc), this.updateVerticesData(Uc.i.NormalKind, Bc, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const cB = this._geometry,
          Bc = this._geometry.copy(Zc.e.RandomId());
        return cB.releaseForMesh(this, !0), Bc.applyToMesh(this), this
      }
      setIndexBuffer(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ic = this._geometry;
        Ic || (Ic = new Zc.e(Zc.e.RandomId(), this.knc(), void 0, void 0, this)), Ic.setIndexBuffer(cB, Bc, nc, Vc)
      }
      setIndices(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(cB, Bc, nc, Vc);
        else {
          const Vc = new bB.b;
          Vc.indices = cB;
          const Ic = this.knc();
          new Zc.e(Zc.e.RandomId(), Ic, Vc, nc, this, Bc)
        }
        return this
      }
      updateIndices(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(cB, Bc, nc), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(cB, Bc, nc) {
        let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Ic = this.knc().RV();
        let rB;
        if (this._unIndexed)
          if (this._getRenderingFillMode(nc) === vB.c.WireFrameFillMode) rB = cB._getLinesIndexBuffer(this.Tfc(), Ic);
          else rB = null;
        else switch (this._getRenderingFillMode(nc)) {
          case vB.c.PointFillMode:
            rB = null;
            break;
          case vB.c.WireFrameFillMode:
            rB = cB._getLinesIndexBuffer(this.Tfc(), Ic);
            break;
          default:
          case vB.c.TriangleFillMode:
            rB = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Bc, rB, Vc)
      }
      _bindDirect(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(cB), nc && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const cB = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Bc in cB) this._userInstancedBuffersStorage.vertexBuffers[Bc] = cB[Bc]
          }
          this._geometry._bind(cB, Bc, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(cB, Bc);
        return this
      }
      _draw(cB, Bc, nc) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Vc = this.knc().RV(),
          Ic = Vc._currentMaterialContext,
          rB = Ic && Ic.useVertexPulling;
        return this._unIndexed && Bc !== vB.c.WireFrameFillMode || Bc == vB.c.PointFillMode ? Vc.drawArraysType(Bc, cB.verticesStart, cB.verticesCount, this.forcedInstanceCount || nc) : Bc == vB.c.WireFrameFillMode ? Vc.drawElementsType(Bc, 0, cB._linesIndexCount, this.forcedInstanceCount || nc) : rB ? Vc.drawArraysType(Bc, cB.indexStart, cB.indexCount, this.forcedInstanceCount || nc) : Vc.drawElementsType(Bc, cB.indexStart, cB.indexCount, this.forcedInstanceCount || nc), this
      }
      registerBeforeRender(cB) {
        return this.onBeforeRenderObservable.add(cB), this
      }
      unregisterBeforeRender(cB) {
        return this.onBeforeRenderObservable.removeCallback(cB), this
      }
      registerAfterRender(cB) {
        return this.onAfterRenderObservable.add(cB), this
      }
      unregisterAfterRender(cB) {
        return this.onAfterRenderObservable.removeCallback(cB), this
      }
      _getInstancesRenderList(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Bc) return nc.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[cB] = !1, nc.batchCacheReplacementModeInFrozenMode.renderSelf[cB] = !0, nc.batchCacheReplacementModeInFrozenMode;
          if (nc.previousBatch) return nc.previousBatch
        }
        const Vc = this.knc(),
          Ic = Vc._isInIntermediateRendering(),
          rB = Ic ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          uc = nc.batchCache;
        if (uc.mustReturn = !1, uc.renderSelf[cB] = Bc || !rB && this.isEnabled() && this.isVisible, uc.visibleInstances[cB] = null, nc.visibleInstances && !Bc) {
          const Bc = nc.visibleInstances,
            rB = Vc.getRenderId(),
            sc = Ic ? Bc.intermediateDefaultRenderId : Bc.defaultRenderId;
          uc.visibleInstances[cB] = Bc[rB], !uc.visibleInstances[cB] && sc && (uc.visibleInstances[cB] = Bc[sc])
        }
        return uc.hardwareInstancedRendering[cB] = !Bc && this._instanceDataStorage.hardwareInstancedRendering && null !== uc.visibleInstances[cB] && void 0 !== uc.visibleInstances[cB], nc.previousBatch = uc, uc
      }
      _updateInstancedBuffers(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Bc.visibleInstances[cB._id],
          sc = uc ? uc.length : 0,
          Mc = Bc.parent,
          Pc = this._instanceDataStorage;
        let qB = Mc.instancesBuffer,
          Oc = Mc.instancesPreviousBuffer,
          Tc = 0,
          fc = 0;
        const mB = Bc.renderSelf[cB._id],
          ec = this._scene.floatingOriginOffset,
          tB = !qB || nc !== Mc.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Mc.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Pc.isFrozen && !tB) fc = (mB ? 1 : 0) + sc;
        else {
          const Bc = this.getWorldMatrix();
          if (mB) {
            this._scene.needsPreviousWorldMatrices && (Pc.masterMeshPreviousWorldMatrix ? (Pc.masterMeshPreviousWorldMatrix.copyToArray(Mc.instancesPreviousData, Tc), Pc.masterMeshPreviousWorldMatrix.qqc(Bc)) : (Pc.masterMeshPreviousWorldMatrix = Bc.clone(), Pc.masterMeshPreviousWorldMatrix.copyToArray(Mc.instancesPreviousData, Tc))), Bc.copyToArray(Mc.instancesData, Tc);
            const cB = Bc.KPc();
            Mc.instancesData[Tc + 12] = cB[12] - ec.x, Mc.instancesData[Tc + 13] = cB[13] - ec.y, Mc.instancesData[Tc + 14] = cB[14] - ec.z, Tc += 16, fc++
          }
          if (uc) {
            if (dc.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && cB.AV()?.needAlphaBlendingForMesh(cB.getRenderingMesh())) {
              const cB = this._scene.activeCamera.globalPosition;
              for (let Bc = 0; Bc < uc.length; Bc++) {
                const nc = uc[Bc];
                nc._distanceToCamera = Yc.p.Distance(nc.qVc().tOc.centerWorld, cB)
              }
              uc.sort(((cB, Bc) => cB._distanceToCamera > Bc._distanceToCamera ? -1 : cB._distanceToCamera < Bc._distanceToCamera ? 1 : 0))
            }
            for (let cB = 0; cB < uc.length; cB++) {
              const Bc = uc[cB],
                nc = Bc.getWorldMatrix();
              nc.copyToArray(Mc.instancesData, Tc), this._scene.needsPreviousWorldMatrices && (Bc._previousWorldMatrix ? (Bc._previousWorldMatrix.copyToArray(Mc.instancesPreviousData, Tc), Bc._previousWorldMatrix.qqc(nc)) : (Bc._previousWorldMatrix = nc.clone(), Bc._previousWorldMatrix.copyToArray(Mc.instancesPreviousData, Tc)));
              const Vc = nc.KPc();
              Mc.instancesData[Tc + 12] = Vc[12] - ec.x, Mc.instancesData[Tc + 13] = Vc[13] - ec.y, Mc.instancesData[Tc + 14] = Vc[14] - ec.z, Tc += 16, fc++
            }
          }
        }
        if (tB) {
          let cB;
          if (qB && qB.dispose(), Oc && Oc.dispose(), qB = new Uc.b(Vc, Mc.instancesData, !0, 16, !1, !0), Mc.instancesBuffer = qB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.RV().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) cB = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Bc = this._instanceDataStorage.engine.currentRenderPassId;
            cB = this._userInstancedBuffersStorage.renderPasses[Bc], cB || (this._userInstancedBuffersStorage.renderPasses[Bc] = cB = {})
          }
          cB.world0 = qB.createVertexBuffer("world0", 0, 4), cB.world1 = qB.createVertexBuffer("world1", 4, 4), cB.world2 = qB.createVertexBuffer("world2", 8, 4), cB.world3 = qB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Oc = new Uc.b(Vc, Mc.instancesPreviousData, !0, 16, !1, !0), Mc.instancesPreviousBuffer = Oc, cB.previousWorld0 = Oc.createVertexBuffer("previousWorld0", 0, 4), cB.previousWorld1 = Oc.createVertexBuffer("previousWorld1", 4, 4), cB.previousWorld2 = Oc.createVertexBuffer("previousWorld2", 8, 4), cB.previousWorld3 = Oc.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (qB.updateDirectly(Mc.instancesData, 0, fc), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Oc.updateDirectly(Mc.instancesPreviousData, 0, fc));
        this._processInstancedBuffers(uc, mB), rB && void 0 !== Ic && (this.knc()._activeIndices.addCount(cB.indexCount * fc, !1), Vc._currentDrawContext && (Vc._currentDrawContext.useInstancing = !0), this._bind(cB, rB, Ic), this._draw(cB, Ic, fc)), !this._scene.needsPreviousWorldMatrices || tB || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Oc.updateDirectly(Mc.instancesData, 0, fc)
      }
      _renderWithInstances(cB, Bc, nc, Vc, Ic) {
        const rB = nc.visibleInstances[cB._id],
          uc = rB ? rB.length : 0,
          sc = nc.parent,
          Mc = sc.instancesBufferSize,
          Pc = 16 * (uc + 1) * 4;
        for (; sc.instancesBufferSize < Pc;) sc.instancesBufferSize *= 2;
        return sc.instancesData && Mc == sc.instancesBufferSize || (sc.instancesData = new Float32Array(sc.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !sc.instancesPreviousData || Mc != sc.instancesBufferSize) && (sc.instancesPreviousData = new Float32Array(sc.instancesBufferSize / 4)), this._updateInstancedBuffers(cB, nc, Mc, Ic, Bc, Vc), Ic.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(cB, Bc, nc, Vc) {
        const Ic = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.knc()._activeIndices.addCount(cB.indexCount * Ic, !1), Vc._currentDrawContext && (Vc._currentDrawContext.useInstancing = !0), this._bind(cB, nc, Bc), this._draw(cB, Bc, Ic), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Ic) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Vc.unbindInstanceAttributes()
      }
      _processInstancedBuffers(cB, Bc) {}
      _processRendering(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = this.knc(),
          Pc = Mc.RV();
        if (Vc = this._getRenderingFillMode(Vc), rB && Bc.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Bc, Vc, nc, Pc), this;
        if (rB) this._renderWithInstances(Bc, Vc, Ic, nc, Pc);
        else {
          Pc._currentDrawContext && (Pc._currentDrawContext.useInstancing = !1);
          let nc = 0;
          Ic.renderSelf[Bc._id] && (uc && uc(!1, cB.getWorldMatrix(), sc), nc++, this._draw(Bc, Vc, this._instanceDataStorage.overridenInstanceCount));
          const rB = Ic.visibleInstances[Bc._id];
          if (rB) {
            const cB = rB.length;
            nc += cB;
            for (let nc = 0; nc < cB; nc++) {
              const cB = rB[nc].getWorldMatrix();
              uc && uc(!0, cB, sc), this._draw(Bc, Vc)
            }
          }
          Mc._activeIndices.addCount(Bc.indexCount * nc, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        cB?.instancesBuffer && (Bc && cB.instancesBuffer.dispose(), cB.instancesBuffer = null), cB?.instancesPreviousBuffer && (Bc && cB.instancesPreviousBuffer.dispose(), cB.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Bc in this._instanceDataStorage.renderPasses) {
          const nc = this._instanceDataStorage.renderPasses[Bc];
          this._disposeInstanceDataStorageRenderPass(nc, cB)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, cB), this._userInstancedBuffersStorage) {
          for (const Bc in this._userInstancedBuffersStorage.vertexBuffers) {
            const nc = this._userInstancedBuffersStorage.vertexBuffers[Bc];
            nc && (cB && nc.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Bc] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(cB)
      }
      _releaseRenderPassId(cB) {
        const Bc = this._instanceDataStorage.renderPasses[cB];
        if (Bc && (this._disposeInstanceDataStorageRenderPass(Bc, !0), delete this._instanceDataStorage.renderPasses[cB]), this._userInstancedBuffersStorage?.renderPasses) {
          const Bc = this._userInstancedBuffersStorage.renderPasses[cB];
          if (Bc)
            for (const cB in Bc) Bc[cB]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[cB]
        }
        const nc = this._userInstancedBuffersStorage?.interleavedBuffers;
        nc?.[cB] && (nc[cB].buffer.dispose(), delete nc[cB])
      }
      _freeze() {
        if (this.rD) {
          for (let cB = 0; cB < this.rD.length; cB++) this._getInstancesRenderList(cB);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const cB in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[cB].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const rB = this._scene.RV(),
          uc = rB.currentRenderPassId;
        if (void 0 !== cB && (rB.currentRenderPassId = cB), Vc)(!Ic || Ic && Vc.isInFrustum(this._scene._frustumPlanes)) && this.render(Vc, !!Bc, nc);
        else
          for (let sc = 0; sc < this.rD.length; sc++) {
            const cB = this.rD[sc];
            (!Ic || Ic && cB.isInFrustum(this._scene._frustumPlanes)) && this.render(cB, !!Bc, nc)
          }
        return void 0 !== cB && (rB.currentRenderPassId = uc), this
      }
      directRender() {
        if (!this.rD) return this;
        for (const cB of this.rD) this.render(cB, !1);
        return this
      }
      render(cB, Bc, nc) {
        const Vc = this.knc(),
          Ic = Vc.RV();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const rB = Vc.activeCameras?.length ?? 0,
          uc = rB > 1 && Vc.activeCamera === Vc.activeCameras[0] || rB <= 1,
          sc = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Ic.currentRenderPassId;
        if (uc && this._checkOcclusionQuery(sc) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Mc = this._getInstancesRenderList(cB._id, !!nc);
        if (Mc.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Pc = 0,
          qB = null;
        this.ignoreCameraMaxZ && Vc.activeCamera && !Vc._isInIntermediateRendering() && (Pc = Vc.activeCamera.maxZ, qB = Vc.activeCamera, Vc.activeCamera.maxZ = 0, Vc.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Oc = cB.getRenderingMesh(),
          Tc = Mc.hardwareInstancedRendering[cB._id] || Oc.hasThinInstances || !!this._userInstancedBuffersStorage && !cB.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          fc = this._instanceDataStorage,
          mB = cB.AV();
        if (!mB) return qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), this;
        if (fc.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === mB) {
          if (mB._storeEffectOnSubMeshes && !cB._drawWrapper?._wasPreviouslyReady || !mB._storeEffectOnSubMeshes && !mB._getDrawWrapper()._wasPreviouslyReady) return qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), this
        } else {
          if (mB._storeEffectOnSubMeshes) {
            if (!mB.isReadyForSubMesh(this, cB, Tc)) return qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), this
          } else if (!mB.isReady(this, Tc)) return qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = mB
        }
        if (Bc) {
          const cB = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === cB.alphaModes.length) Ic.setAlphaMode(cB.alphaMode);
          else
            for (let Bc = 0; Bc < cB.alphaModes.length; Bc++) {
              const nc = cB.alphaModes[Bc];
              Ic.setAlphaMode(void 0 !== nc ? nc : 2, !1, Bc)
            }
        }
        let ec;
        ec = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? cB._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const tB = ec?.effect ?? null;
        for (let lc = 0, Yc = Vc._beforeRenderingMeshStage; lc < Yc.length; lc++) {
          Yc[lc].action(this, cB, Mc, tB)
        }
        if (!ec || !tB) return qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), this;
        const Sc = nc || this;
        let yB;
        if (!fc.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const cB = Sc._getWorldMatrixDeterminant();
          yB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), cB < 0 && (yB = yB === vB.c.ClockWiseSideOrientation ? vB.c.CounterClockWiseSideOrientation : vB.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = yB
        }
        const zB = this._internalMeshDataInfo._effectiveMaterial._preBind(ec, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Ic.setDepthWrite(!0);
        const pc = this._internalMeshDataInfo._effectiveMaterial,
          hc = pc.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Tc || this._bind(cB, tB, hc, !1);
        const aB = Sc.getWorldMatrix();
        pc._storeEffectOnSubMeshes ? pc.bindForSubMesh(aB, this, cB) : pc.bind(aB, this);
        try {
          Dc.b._BindAttachmentsForEffect(Ic, tB) && (!pc.backFaceCulling && pc.separateCullingPass && (Ic.setState(!0, pc.zOffset, !1, !zB, pc.cullBackFaces, pc.stencil, pc.zOffsetUnits), this._processRendering(this, cB, tB, hc, Mc, Tc, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Ic.setState(!0, pc.zOffset, !1, zB, pc.cullBackFaces, pc.stencil, pc.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(cB)), this._processRendering(this, cB, tB, hc, Mc, Tc, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Dc.b._RestoreAttachments(Ic)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let lc = 0, Yc = Vc._afterRenderingMeshStage; lc < Yc.length; lc++) {
          Yc[lc].action(this, cB, Mc, tB)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), qB && (qB.maxZ = Pc, Vc.updateTransformMatrix(!0)), 2 !== Vc.performancePriority || fc.isFrozen || this._freeze(), this
      }
      _renderRunFollower(cB, Bc) {
        const nc = this._scene,
          Vc = nc._engine;
        if (Vc.isWebGPU || cB._mesh !== this || 0 !== this.instances.length || this.render !== dc.prototype.render) return !1;
        const Ic = cB.AV();
        if (!Ic || Ic !== nc._cachedMaterial || void 0 === Ic._canBindRunFollower) return !1;
        const rB = cB._drawWrapper,
          uc = rB?.effect;
        if (!uc || uc !== nc._cachedEffect || this.visibility !== nc._cachedVisibility || rB._forceRebindOnNextCall) return !1;
        const sc = this.hasThinInstances;
        if (!sc && this._userInstancedBuffersStorage) return !1;
        if (!rB._wasPreviouslyReady || rB._wasPreviouslyUsingInstances !== sc) return !1;
        const Mc = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || nc._isInIntermediateRendering() || 0 !== nc._beforeRenderingMeshStage.length || 0 !== nc._afterRenderingMeshStage.length || Mc._onBeforeRenderObservable?.hasObservers() || Mc._onBeforeBindObservable?.hasObservers() || Mc._onAfterRenderObservable?.hasObservers()) return !1;
        const Pc = this.occlusionType;
        if (void 0 !== Pc && Pc !== Qc.c.OCCLUSION_TYPE_NONE || !Ic._canBindRunFollower(nc, Vc, this, cB, uc)) return !1;
        const qB = this._internalAbstractMeshDataInfo,
          Oc = qB._isActiveIntermediate;
        Oc ? qB._isActiveIntermediate = !1 : qB._isActive = !1;
        const Tc = nc.activeCameras?.length ?? 0;
        (Tc > 1 && nc.activeCamera === nc.activeCameras[0] || Tc <= 1) && this._checkOcclusionQuery(!1);
        const fc = this._getInstancesRenderList(cB._id);
        if (fc.mustReturn) return !0;
        if (!sc && !fc.renderSelf[cB._id]) return Oc ? qB._isActiveIntermediate = !0 : qB._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Mc._effectiveMaterial = Ic, Bc)
          if (1 === Ic.alphaModes.length) Vc.setAlphaMode(Ic.alphaMode);
          else
            for (let ec = 0; ec < Ic.alphaModes.length; ec++) {
              const cB = Ic.alphaModes[ec];
              Vc.setAlphaMode(void 0 !== cB ? cB : 2, !1, ec)
            }
        if (Ic.backFaceCulling || null !== Ic.sideOrientation || Ic._twoSidedLighting) {
          const cB = this._getWorldMatrixDeterminant();
          let Bc = Ic._getEffectiveOrientation(this);
          cB < 0 && (Bc = Bc === vB.c.ClockWiseSideOrientation ? vB.c.CounterClockWiseSideOrientation : vB.c.ClockWiseSideOrientation), Mc._effectiveSideOrientation = Bc
        }
        Ic._preBind(rB, Mc._effectiveSideOrientation), Ic.forceDepthWrite && Vc.setDepthWrite(!0);
        const mB = Ic.fillMode;
        return sc || this._bind(cB, uc, mB, !1), Ic._bindRunFollower(this.getWorldMatrix(), this, cB, uc), this._processRendering(this, cB, uc, mB, fc, sc, this._onBeforeDraw, Ic), Ic.unbind(), 2 === nc.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Uc.i.MatricesWeightsKind) && (this.isVerticesDataPresent(Uc.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const cB = this.getVerticesData(Uc.i.MatricesWeightsKind),
          Bc = cB.length;
        for (let nc = 0; nc < Bc; nc += 4) {
          const Bc = cB[nc] + cB[nc + 1] + cB[nc + 2] + cB[nc + 3];
          if (0 === Bc) cB[nc] = 1;
          else {
            const Vc = 1 / Bc;
            cB[nc] *= Vc, cB[nc + 1] *= Vc, cB[nc + 2] *= Vc, cB[nc + 3] *= Vc
          }
        }
        this.setVerticesData(Uc.i.MatricesWeightsKind, cB)
      }
      _normalizeSkinWeightsAndExtra() {
        const cB = this.getVerticesData(Uc.i.MatricesWeightsExtraKind),
          Bc = this.getVerticesData(Uc.i.MatricesWeightsKind),
          nc = Bc.length;
        for (let Vc = 0; Vc < nc; Vc += 4) {
          let nc = Bc[Vc] + Bc[Vc + 1] + Bc[Vc + 2] + Bc[Vc + 3];
          if (nc += cB[Vc] + cB[Vc + 1] + cB[Vc + 2] + cB[Vc + 3], 0 === nc) Bc[Vc] = 1;
          else {
            const Ic = 1 / nc;
            Bc[Vc] *= Ic, Bc[Vc + 1] *= Ic, Bc[Vc + 2] *= Ic, Bc[Vc + 3] *= Ic, cB[Vc] *= Ic, cB[Vc + 1] *= Ic, cB[Vc + 2] *= Ic, cB[Vc + 3] *= Ic
          }
        }
        this.setVerticesData(Uc.i.MatricesWeightsKind, Bc), this.setVerticesData(Uc.i.MatricesWeightsKind, cB)
      }
      validateSkinning() {
        const cB = this.getVerticesData(Uc.i.MatricesWeightsExtraKind),
          Bc = this.getVerticesData(Uc.i.MatricesWeightsKind);
        if (null === Bc || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          PV: "not skinned"
        };
        const nc = Bc.length;
        let Vc = 0,
          Ic = 0,
          rB = 0,
          uc = 0;
        const sc = null === cB ? 4 : 8,
          Mc = [];
        for (let fc = 0; fc <= sc; fc++) Mc[fc] = 0;
        for (let fc = 0; fc < nc; fc += 4) {
          let nc = Bc[fc],
            Pc = nc,
            qB = 0 === Pc ? 0 : 1;
          for (let Ic = 1; Ic < sc; Ic++) {
            const rB = Ic < 4 ? Bc[fc + Ic] : cB[fc + Ic - 4];
            rB > nc && Vc++, 0 !== rB && qB++, Pc += rB, nc = rB
          }
          if (Mc[qB]++, qB > rB && (rB = qB), 0 === Pc) Ic++;
          else {
            const nc = 1 / Pc;
            let Vc = 0;
            for (let Ic = 0; Ic < sc; Ic++) Vc += Ic < 4 ? Math.abs(Bc[fc + Ic] - Bc[fc + Ic] * nc) : Math.abs(cB[fc + Ic - 4] - cB[fc + Ic - 4] * nc);
            Vc > .001 && uc++
          }
        }
        const Pc = this.skeleton.bones.length,
          qB = this.getVerticesData(Uc.i.MatricesIndicesKind),
          Oc = this.getVerticesData(Uc.i.MatricesIndicesExtraKind);
        let Tc = 0;
        for (let fc = 0; fc < nc; fc += 4)
          for (let cB = 0; cB < sc; cB++) {
            const Bc = cB < 4 ? qB[fc + cB] : Oc[fc + cB - 4];
            (Bc >= Pc || Bc < 0) && Tc++
          }
        return {
          skinned: !0,
          valid: 0 === Ic && 0 === uc && 0 === Tc,
          PV: "Number of Weights = " + nc / 4 + "\nMaximum influences = " + rB + "\nMissing Weights = " + Ic + "\nNot Sorted = " + Vc + "\nNot Normalized = " + uc + "\nWeightCounts = [" + Mc + "]\nNumber of bones = " + Pc + "\nBad Bone Indices = " + Tc
        }
      }
      _checkDelayState() {
        const cB = this.knc();
        return this._geometry ? this._geometry.load(cB) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(cB)), this
      }
      _queueLoad(cB) {
        cB.addPendingData(this);
        const Bc = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const nc = await cB._loadDelayedFileAsync(this.delayLoadingFile, Bc, !0);
            nc instanceof ArrayBuffer ? this._delayLoadingFunction(nc, this) : this._delayLoadingFunction(JSON.parse(nc), this);
            for (const cB of this.instances) cB.refreshBoundingInfo(), cB._syncSubMeshes();
            this.delayLoadState = 1, cB.removePendingData(this)
          } catch (nc) {
            cB.removePendingData(this), cB.nPc || Wc.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${nc}`)
          }
        })(), this
      }
      isInFrustum(cB) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(cB) && (this._checkDelayState(), !0))
      }
      setMaterialById(cB) {
        const Bc = this.knc().materials;
        let nc;
        for (nc = Bc.length - 1; nc > -1; nc--)
          if (Bc[nc].id === cB) return this.material = Bc[nc], this;
        const Vc = this.knc().multiMaterials;
        for (nc = Vc.length - 1; nc > -1; nc--)
          if (Vc[nc].id === cB) return this.material = Vc[nc], this;
        return this
      }
      getAnimatables() {
        const cB = [];
        return this.material && cB.push(this.material), this.skeleton && cB.push(this.skeleton), cB
      }
      bakeTransformIntoVertices(cB) {
        if (!this.isVerticesDataPresent(Uc.i.PositionKind)) return this;
        const Bc = this.rD.splice(0);
        this._resetPointsArrayCache();
        let nc = this.getVerticesData(Uc.i.PositionKind);
        const Vc = Yc.p.Zero();
        let Ic;
        for (Ic = 0; Ic < nc.length; Ic += 3) Yc.p.TransformCoordinatesFromFloatsToRef(nc[Ic], nc[Ic + 1], nc[Ic + 2], cB, Vc).toArray(nc, Ic);
        if (this.setVerticesData(Uc.i.PositionKind, nc, this.getVertexBuffer(Uc.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(Uc.i.NormalKind)) {
          for (nc = this.getVerticesData(Uc.i.NormalKind), Ic = 0; Ic < nc.length; Ic += 3) Yc.p.TransformNormalFromFloatsToRef(nc[Ic], nc[Ic + 1], nc[Ic + 2], cB, Vc).normalize().toArray(nc, Ic);
          this.setVerticesData(Uc.i.NormalKind, nc, this.getVertexBuffer(Uc.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Uc.i.TangentKind)) {
          for (nc = this.getVerticesData(Uc.i.TangentKind), Ic = 0; Ic < nc.length; Ic += 4) Yc.p.TransformNormalFromFloatsToRef(nc[Ic], nc[Ic + 1], nc[Ic + 2], cB, Vc).normalize().toArray(nc, Ic);
          this.setVerticesData(Uc.i.TangentKind, nc, this.getVertexBuffer(Uc.i.TangentKind).isUpdatable())
        }
        return cB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.rD = Bc, this
      }
      bakeCurrentTransformIntoVertices() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(cB), this
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Bc && void 0 === Bc._addToSceneRootNodes) {
          const nc = Bc;
          return xB.source = this, xB.doNotCloneChildren = nc.doNotCloneChildren, xB.clonePhysicsImpostor = nc.clonePhysicsImpostor, xB.cloneThinInstances = nc.cloneThinInstances, new dc(cB, this.knc(), xB)
        }
        return new dc(cB, this.knc(), Bc, this, nc, Vc)
      }
      dispose(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const nc = this._internalMeshDataInfo;
        if (nc._onBeforeDrawObservable && nc._onBeforeDrawObservable.clear(), nc._onBeforeBindObservable && nc._onBeforeBindObservable.clear(), nc._onBeforeRenderObservable && nc._onBeforeRenderObservable.clear(), nc._onAfterRenderObservable && nc._onAfterRenderObservable.clear(), nc._onBetweenPassObservable && nc._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (nc.meshMap)
            for (const cB in nc.meshMap) {
              const Bc = nc.meshMap[cB];
              Bc && (Bc._internalMeshDataInfo._source = null, nc.meshMap[cB] = void 0)
            }
          nc._source && nc._source._internalMeshDataInfo.meshMap && (nc._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const cB = this.knc().meshes;
          for (const Bc of cB) {
            const cB = Bc;
            cB._internalMeshDataInfo && cB._internalMeshDataInfo._source && cB._internalMeshDataInfo._source === this && (cB._internalMeshDataInfo._source = null)
          }
        }
        nc._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(cB, Bc)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(cB, Bc, nc, Vc, Ic, rB) {
        let uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          sc = arguments.length > 7 ? arguments[7] : void 0;
        const Mc = this.knc();
        return (0, zB.p)(cB, (cB => {
          const sc = cB.width,
            Mc = cB.height,
            Pc = this.RV().createCanvas(sc, Mc).getContext("2d");
          Pc.drawImage(cB, 0, 0);
          const qB = Pc.getImageData(0, 0, sc, Mc).data;
          this.applyDisplacementMapFromBuffer(qB, sc, Mc, Bc, nc, Ic, rB, uc), Vc && Vc(this)
        }), sc || (() => {}), Mc.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Uc.i.PositionKind) || !this.isVerticesDataPresent(Uc.i.NormalKind) || !this.isVerticesDataPresent(Uc.i.UVKind)) return Wc.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Mc = this.getVerticesData(Uc.i.PositionKind, !0, !0),
          Pc = this.getVerticesData(Uc.i.NormalKind),
          qB = this.getVerticesData(Uc.i.UVKind);
        let Oc = Yc.p.Zero();
        const Tc = Yc.p.Zero(),
          fc = Yc.m.Zero();
        rB = rB || Yc.m.Zero(), uc = uc || new Yc.m(1, 1);
        for (let mB = 0; mB < Mc.length; mB += 3) {
          Yc.p.FromArrayToRef(Mc, mB, Oc), Yc.p.FromArrayToRef(Pc, mB, Tc), Yc.m.FromArrayToRef(qB, mB / 3 * 2, fc);
          const sc = 4 * ((Math.abs(fc.x * uc.x + rB.x % 1) * (Bc - 1) % Bc | 0) + (Math.abs(fc.y * uc.y + rB.y % 1) * (nc - 1) % nc | 0) * Bc),
            ec = .3 * (cB[sc] / 255) + .59 * (cB[sc + 1] / 255) + .11 * (cB[sc + 2] / 255);
          Tc.normalize(), Tc.scaleInPlace(Vc + (Ic - Vc) * ec), Oc = Oc.add(Tc), Oc.toArray(Mc, mB)
        }
        return bB.b.ComputeNormals(Mc, this.Tfc(), Pc), sc ? (this.setVerticesData(Uc.i.PositionKind, Mc), this.setVerticesData(Uc.i.NormalKind, Pc), this.setVerticesData(Uc.i.UVKind, qB)) : (this.updateVerticesData(Uc.i.PositionKind, Mc), this.updateVerticesData(Uc.i.NormalKind, Pc)), this
      }
      _getFlattenedNormals(cB, Bc) {
        const nc = new Float32Array(3 * cB.length);
        let Vc = 0;
        const Ic = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let rB = 0; rB < cB.length; rB += 3) {
          const uc = Yc.p.FromArray(Bc, 3 * cB[rB]),
            sc = Yc.p.FromArray(Bc, 3 * cB[rB + 1]),
            Mc = Yc.p.FromArray(Bc, 3 * cB[rB + 2]),
            Pc = uc.subtract(sc),
            qB = Mc.subtract(sc),
            Oc = Yc.p.Normalize(Yc.p.Cross(Pc, qB));
          Ic && Oc.scaleInPlace(-1);
          for (let cB = 0; cB < 3; cB++) nc[Vc++] = Oc.x, nc[Vc++] = Oc.y, nc[Vc++] = Oc.z
        }
        return nc
      }
      _convertToUnIndexedMesh() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = this.getVerticesDataKinds().filter((cB => !this.getVertexBuffer(cB)?.getIsInstanced())),
          nc = this.Tfc(!1, !0),
          Vc = {},
          Ic = (cB, Bc) => {
            const Vc = new Float32Array(nc.length * Bc);
            let Ic = 0;
            for (let rB = 0; rB < nc.length; rB++)
              for (let uc = 0; uc < Bc; uc++) Vc[Ic++] = cB[nc[rB] * Bc + uc];
            return Vc
          },
          rB = this.qVc(),
          uc = this.geometry ? this.rD.slice(0) : [];
        for (const sc of Bc) Vc[sc] = this.getVerticesData(sc);
        for (const sc of Bc) {
          const Bc = this.getVertexBuffer(sc),
            rB = Bc.getSize();
          if (cB && sc === Uc.i.NormalKind) {
            const cB = this._getFlattenedNormals(nc, Vc[Uc.i.PositionKind]);
            this.setVerticesData(Uc.i.NormalKind, cB, Bc.isUpdatable(), rB)
          } else this.setVerticesData(sc, Ic(Vc[sc], rB), Bc.isUpdatable(), rB)
        }
        if (this.morphTargetManager) {
          for (let Bc = 0; Bc < this.morphTargetManager.numTargets; Bc++) {
            const Vc = this.morphTargetManager.getTarget(Bc),
              rB = Vc.getPositions();
            Vc.mmc(Ic(rB, 3));
            const uc = Vc.getNormals();
            uc && Vc.setNormals(cB ? this._getFlattenedNormals(nc, rB) : Ic(uc, 3));
            const sc = Vc.getTangents();
            sc && Vc.setTangents(Ic(sc, 3));
            const Mc = Vc.getUVs();
            Mc && Vc.setUVs(Ic(Mc, 2));
            const Pc = Vc.getColors();
            Pc && Vc.setColors(Ic(Pc, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let sc = 0; sc < nc.length; sc++) nc[sc] = sc;
        this.setIndices(nc), this._unIndexed = !0, this.releaseSubMeshes();
        for (const sc of uc) {
          const cB = sc.qVc();
          Cc.e.AddToMesh(sc.materialIndex, sc.indexStart, sc.indexCount, sc.indexStart, sc.indexCount, this).setBoundingInfo(cB)
        }
        return this.setBoundingInfo(rB), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = bB.b.ExtractFromMesh(this);
        let nc;
        if (cB && this.isVerticesDataPresent(Uc.i.NormalKind) && Bc.normals) {
          for (nc = 0; nc < Bc.normals.length; nc++) Bc.normals[nc] *= -1;
          this.setVerticesData(Uc.i.NormalKind, Bc.normals, this.isVertexBufferUpdatable(Uc.i.NormalKind))
        }
        if (Bc.indices) {
          let cB;
          for (nc = 0; nc < Bc.indices.length; nc += 3) cB = Bc.indices[nc + 1], Bc.indices[nc + 1] = Bc.indices[nc + 2], Bc.indices[nc + 2] = cB;
          this.setIndices(Bc.indices, null, this.isVertexBufferUpdatable(Uc.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Bc = bB.b.ExtractFromMesh(this),
          nc = Bc.indices && !Array.isArray(Bc.indices) && Array.from ? Array.from(Bc.indices) : Bc.indices,
          Vc = Bc.positions && !Array.isArray(Bc.positions) && Array.from ? Array.from(Bc.positions) : Bc.positions,
          Ic = Bc.uvs && !Array.isArray(Bc.uvs) && Array.from ? Array.from(Bc.uvs) : Bc.uvs,
          rB = Bc.normals && !Array.isArray(Bc.normals) && Array.from ? Array.from(Bc.normals) : Bc.normals;
        if (nc && Vc) {
          Bc.indices = nc, Bc.positions = Vc, Ic && (Bc.uvs = Ic), rB && (Bc.normals = rB);
          const uc = cB + 1,
            sc = [];
          for (let cB = 0; cB < uc + 1; cB++) sc[cB] = [];
          let Mc, Pc;
          const qB = new Yc.p(0, 0, 0),
            Oc = new Yc.p(0, 0, 0),
            Tc = new Yc.m(0, 0),
            fc = [],
            mB = [],
            ec = [];
          let tB, Sc, yB, zB = Vc.length;
          Ic && (Sc = Ic.length), rB && (yB = rB.length);
          for (let cB = 0; cB < nc.length; cB += 3) {
            mB[0] = nc[cB], mB[1] = nc[cB + 1], mB[2] = nc[cB + 2];
            for (let cB = 0; cB < 3; cB++)
              if (Mc = mB[cB], Pc = mB[(cB + 1) % 3], void 0 === ec[Mc] && void 0 === ec[Pc] ? (ec[Mc] = [], ec[Pc] = []) : (void 0 === ec[Mc] && (ec[Mc] = []), void 0 === ec[Pc] && (ec[Pc] = [])), void 0 === ec[Mc][Pc] && void 0 === ec[Pc][Mc]) {
                ec[Mc][Pc] = [], qB.x = (Vc[3 * Pc] - Vc[3 * Mc]) / uc, qB.y = (Vc[3 * Pc + 1] - Vc[3 * Mc + 1]) / uc, qB.z = (Vc[3 * Pc + 2] - Vc[3 * Mc + 2]) / uc, rB && (Oc.x = (rB[3 * Pc] - rB[3 * Mc]) / uc, Oc.y = (rB[3 * Pc + 1] - rB[3 * Mc + 1]) / uc, Oc.z = (rB[3 * Pc + 2] - rB[3 * Mc + 2]) / uc), Ic && (Tc.x = (Ic[2 * Pc] - Ic[2 * Mc]) / uc, Tc.y = (Ic[2 * Pc + 1] - Ic[2 * Mc + 1]) / uc), ec[Mc][Pc].push(Mc);
                for (let cB = 1; cB < uc; cB++) ec[Mc][Pc].push(Vc.length / 3), Vc[zB++] = Vc[3 * Mc] + cB * qB.x, Vc[zB++] = Vc[3 * Mc + 1] + cB * qB.y, Vc[zB++] = Vc[3 * Mc + 2] + cB * qB.z, rB && (rB[yB++] = rB[3 * Mc] + cB * Oc.x, rB[yB++] = rB[3 * Mc + 1] + cB * Oc.y, rB[yB++] = rB[3 * Mc + 2] + cB * Oc.z), Ic && (Ic[Sc++] = Ic[2 * Mc] + cB * Tc.x, Ic[Sc++] = Ic[2 * Mc + 1] + cB * Tc.y);
                ec[Mc][Pc].push(Pc), ec[Pc][Mc] = [], tB = ec[Mc][Pc].length;
                for (let cB = 0; cB < tB; cB++) ec[Pc][Mc][cB] = ec[Mc][Pc][tB - 1 - cB]
              } sc[0][0] = nc[cB], sc[1][0] = ec[nc[cB]][nc[cB + 1]][1], sc[1][1] = ec[nc[cB]][nc[cB + 2]][1];
            for (let Bc = 2; Bc < uc; Bc++) {
              sc[Bc][0] = ec[nc[cB]][nc[cB + 1]][Bc], sc[Bc][Bc] = ec[nc[cB]][nc[cB + 2]][Bc], qB.x = (Vc[3 * sc[Bc][Bc]] - Vc[3 * sc[Bc][0]]) / Bc, qB.y = (Vc[3 * sc[Bc][Bc] + 1] - Vc[3 * sc[Bc][0] + 1]) / Bc, qB.z = (Vc[3 * sc[Bc][Bc] + 2] - Vc[3 * sc[Bc][0] + 2]) / Bc, rB && (Oc.x = (rB[3 * sc[Bc][Bc]] - rB[3 * sc[Bc][0]]) / Bc, Oc.y = (rB[3 * sc[Bc][Bc] + 1] - rB[3 * sc[Bc][0] + 1]) / Bc, Oc.z = (rB[3 * sc[Bc][Bc] + 2] - rB[3 * sc[Bc][0] + 2]) / Bc), Ic && (Tc.x = (Ic[2 * sc[Bc][Bc]] - Ic[2 * sc[Bc][0]]) / Bc, Tc.y = (Ic[2 * sc[Bc][Bc] + 1] - Ic[2 * sc[Bc][0] + 1]) / Bc);
              for (let cB = 1; cB < Bc; cB++) sc[Bc][cB] = Vc.length / 3, Vc[zB++] = Vc[3 * sc[Bc][0]] + cB * qB.x, Vc[zB++] = Vc[3 * sc[Bc][0] + 1] + cB * qB.y, Vc[zB++] = Vc[3 * sc[Bc][0] + 2] + cB * qB.z, rB && (rB[yB++] = rB[3 * sc[Bc][0]] + cB * Oc.x, rB[yB++] = rB[3 * sc[Bc][0] + 1] + cB * Oc.y, rB[yB++] = rB[3 * sc[Bc][0] + 2] + cB * Oc.z), Ic && (Ic[Sc++] = Ic[2 * sc[Bc][0]] + cB * Tc.x, Ic[Sc++] = Ic[2 * sc[Bc][0] + 1] + cB * Tc.y)
            }
            sc[uc] = ec[nc[cB + 1]][nc[cB + 2]], fc.push(sc[0][0], sc[1][0], sc[1][1]);
            for (let cB = 1; cB < uc; cB++) {
              let Bc;
              for (Bc = 0; Bc < cB; Bc++) fc.push(sc[cB][Bc], sc[cB + 1][Bc], sc[cB + 1][Bc + 1]), fc.push(sc[cB][Bc], sc[cB + 1][Bc + 1], sc[cB][Bc + 1]);
              fc.push(sc[cB][Bc], sc[cB + 1][Bc], sc[cB + 1][Bc + 1])
            }
          }
          Bc.indices = fc, Bc.applyToMesh(this, this.isVertexBufferUpdatable(Uc.i.PositionKind))
        } else Wc.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const cB = bB.b.ExtractFromMesh(this),
          Bc = cB.uvs,
          nc = cB.indices,
          Vc = cB.positions,
          Ic = cB.colors,
          rB = cB.matricesIndices,
          uc = cB.matricesWeights,
          sc = cB.matricesIndicesExtra,
          Mc = cB.matricesWeightsExtra;
        if (void 0 === nc || void 0 === Vc || null === nc || null === Vc) Wc.c.Warn("VertexData contains empty entries");
        else {
          const Pc = [],
            qB = [],
            Oc = [],
            Tc = [],
            fc = [],
            mB = [],
            ec = [],
            tB = [];
          let Sc, yB = 0;
          const zB = {};
          let pc, hc;
          for (let cB = 0; cB < nc.length; cB += 3) {
            hc = [nc[cB], nc[cB + 1], nc[cB + 2]], Sc = [];
            for (let cB = 0; cB < 3; cB++) {
              Sc[cB] = "";
              for (let Bc = 0; Bc < 3; Bc++) Math.abs(Vc[3 * hc[cB] + Bc]) < 1e-8 && (Vc[3 * hc[cB] + Bc] = 0), Sc[cB] += Vc[3 * hc[cB] + Bc] + "|"
            }
            if (Sc[0] != Sc[1] && Sc[0] != Sc[2] && Sc[1] != Sc[2])
              for (let cB = 0; cB < 3; cB++) {
                if (pc = zB[Sc[cB]], void 0 === pc) {
                  zB[Sc[cB]] = yB, pc = yB++;
                  for (let Bc = 0; Bc < 3; Bc++) Pc.push(Vc[3 * hc[cB] + Bc]);
                  if (null !== Ic && void 0 !== Ic)
                    for (let Bc = 0; Bc < 4; Bc++) Tc.push(Ic[4 * hc[cB] + Bc]);
                  if (null !== Bc && void 0 !== Bc)
                    for (let nc = 0; nc < 2; nc++) Oc.push(Bc[2 * hc[cB] + nc]);
                  if (null !== rB && void 0 !== rB)
                    for (let Bc = 0; Bc < 4; Bc++) fc.push(rB[4 * hc[cB] + Bc]);
                  if (null !== uc && void 0 !== uc)
                    for (let Bc = 0; Bc < 4; Bc++) mB.push(uc[4 * hc[cB] + Bc]);
                  if (null !== sc && void 0 !== sc)
                    for (let Bc = 0; Bc < 4; Bc++) ec.push(sc[4 * hc[cB] + Bc]);
                  if (null !== Mc && void 0 !== Mc)
                    for (let Bc = 0; Bc < 4; Bc++) tB.push(Mc[4 * hc[cB] + Bc])
                }
                qB.push(pc)
              }
          }
          const aB = [];
          bB.b.ComputeNormals(Pc, qB, aB), cB.positions = Pc, cB.indices = qB, cB.normals = aB, null !== Bc && void 0 !== Bc && (cB.uvs = Oc), null !== Ic && void 0 !== Ic && (cB.colors = Tc), null !== rB && void 0 !== rB && (cB.matricesIndices = fc), null !== uc && void 0 !== uc && (cB.matricesWeights = mB), null !== sc && void 0 !== sc && (cB.matricesIndicesExtra = ec), null !== uc && void 0 !== uc && (cB.matricesWeightsExtra = tB), cB.applyToMesh(this, this.isVertexBufferUpdatable(Uc.i.PositionKind))
        }
      }
      static _instancedMeshFactory(cB, Bc) {
        throw (0, kB.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(cB, Bc, nc) {
        throw (0, kB.k)("PhysicsImpostor")
      }
      createInstance(cB) {
        const Bc = dc._instancedMeshFactory(cB, this);
        return Bc.parent = this.parent, Bc
      }
      synchronizeInstances() {
        for (let cB = 0; cB < this.instances.length; cB++) {
          this.instances[cB]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(cB) {
        const Bc = this.Tfc(),
          nc = this.getVerticesData(Uc.i.PositionKind);
        if (!nc || !Bc) return this;
        const Vc = [];
        for (let rB = 0; rB < nc.length; rB += 3) Vc.push(Yc.p.FromArray(nc, rB));
        const Ic = [];
        return yB.c.SyncAsyncForLoop(Vc.length, 40, (cB => {
          const Bc = Vc.length - 1 - cB,
            nc = Vc[Bc];
          for (let rB = 0; rB < Bc; ++rB) {
            const cB = Vc[rB];
            if (nc.equals(cB)) {
              Ic[Bc] = rB;
              break
            }
          }
        }), (() => {
          for (let cB = 0; cB < Bc.length; ++cB) Bc[cB] = Ic[Bc[cB]] || Bc[cB];
          const nc = this.rD.slice(0);
          this.setIndices(Bc), this.rD = nc, cB && cB(this)
        })), this
      }
      serialize() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        cB.name = this.name, cB.id = this.id, cB.uniqueId = this.uniqueId, cB.type = this.getClassName(), hc.c && hc.c.HasTags(this) && (cB.tags = hc.c.GetTags(this)), cB.position = this.position.KPc(), this.rotationQuaternion ? cB.rotationQuaternion = this.rotationQuaternion.KPc() : this.rotation && (cB.rotation = this.rotation.KPc()), cB.Su = this.Su.KPc(), this._postMultiplyPivotMatrix ? cB.pivotMatrix = this.getPivotMatrix().KPc() : cB.localMatrix = this.getPivotMatrix().KPc(), cB.isEnabled = this.isEnabled(!1), cB.isVisible = this.isVisible, cB.infiniteDistance = this.infiniteDistance, cB.pickable = this.ur, cB.receiveShadows = this.receiveShadows, cB.billboardMode = this.billboardMode, cB.visibility = this.visibility, cB.iI = this.iI, cB.checkCollisions = this.checkCollisions, cB.ellipsoid = this.ellipsoid.KPc(), cB.ellipsoidOffset = this.ellipsoidOffset.KPc(), cB.dV = this.dV, cB.isBlocker = this.isBlocker, cB.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (cB.RBc = !0), this.parent && this.parent._serializeAsParent(cB), cB.isUnIndexed = this.isUnIndexed;
        const Bc = this._geometry;
        if (Bc && this.rD) {
          cB.geometryUniqueId = Bc.uniqueId, cB.geometryId = Bc.id, cB.rD = [];
          for (let Bc = 0; Bc < this.rD.length; Bc++) {
            const nc = this.rD[Bc];
            cB.rD.push({
              materialIndex: nc.materialIndex,
              verticesStart: nc.verticesStart,
              verticesCount: nc.verticesCount,
              indexStart: nc.indexStart,
              indexCount: nc.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (cB.materialUniqueId = this.material.uniqueId, cB.materialId = this.material.id) : (this.material = null, cB.materialUniqueId = this._scene.defaultMaterial.uniqueId, cB.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (cB.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (cB.skeletonId = this.skeleton.id, cB.skeletonUniqueId = this.skeleton.uniqueId, cB.numBoneInfluencers = this.numBoneInfluencers), this.knc()._getComponent(Xc.d.NAME_PHYSICSENGINE)) {
          const Bc = this.getPhysicsImpostor?.();
          Bc && (cB.physicsMass = Bc.getParam("ku"), cB.physicsFriction = Bc.getParam("friction"), cB.physicsRestitution = Bc.getParam("ku"), cB.physicsImpostor = Bc.type)
        }
        this.metadata && (cB.metadata = this.metadata), 0 !== this.meshBlendingTag && (cB.meshBlendingTag = this.meshBlendingTag), cB.instances = [];
        for (let nc = 0; nc < this.instances.length; nc++) {
          const Bc = this.instances[nc];
          if (Bc.doNotSerialize) continue;
          const Vc = {
            name: Bc.name,
            id: Bc.id,
            isEnabled: Bc.isEnabled(!1),
            isVisible: Bc.isVisible,
            ur: Bc.ur,
            checkCollisions: Bc.checkCollisions,
            position: Bc.position.KPc(),
            Su: Bc.Su.KPc()
          };
          if (Bc.parent && Bc.parent._serializeAsParent(Vc), Bc.rotationQuaternion ? Vc.rotationQuaternion = Bc.rotationQuaternion.KPc() : Bc.rotation && (Vc.rotation = Bc.rotation.KPc()), this.knc()._getComponent(Xc.d.NAME_PHYSICSENGINE)) {
            const cB = Bc.getPhysicsImpostor?.();
            cB && (Vc.physicsMass = cB.getParam("ku"), Vc.physicsFriction = cB.getParam("friction"), Vc.physicsRestitution = cB.getParam("ku"), Vc.physicsImpostor = cB.type)
          }
          Bc.metadata && (Vc.metadata = Bc.metadata), Bc.actionManager && (Vc.actions = Bc.actionManager.serialize(Bc.name)), cB.instances.push(Vc), oc.e.AppendSerializedAnimations(Bc, Vc), Vc.Iu = Bc.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (cB.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.sMc
          }, this._userThinInstanceBuffersStorage)) {
          const Bc = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const cB in this._userThinInstanceBuffersStorage.data) Bc.data[cB] = Array.from(this._userThinInstanceBuffersStorage.data[cB]), Bc.sizes[cB] = this._userThinInstanceBuffersStorage.sizes[cB], Bc.strides[cB] = this._userThinInstanceBuffersStorage.strides[cB];
          cB.thinInstances.userThinInstance = Bc
        }
        return oc.e.AppendSerializedAnimations(this, cB), cB.Iu = this.serializeAnimationRanges(), cB.layerMask = this.layerMask, cB.alphaIndex = this.alphaIndex, cB.hasVertexAlpha = this.hasVertexAlpha, cB.overlayAlpha = this.overlayAlpha, cB.overlayColor = this.overlayColor.KPc(), cB.renderOverlay = this.renderOverlay, cB.applyFog = this.applyFog, this.actionManager && (cB.actions = this.actionManager.serialize(this.name)), cB
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const cB = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (cB && cB.vertexCount) {
          if (cB.vertexCount !== this.getTotalVertices()) return Wc.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (cB.isUsingTextureForTargets) return;
          for (let Bc = 0; Bc < cB.numInfluencers; Bc++) {
            const nc = cB.getActiveTarget(Bc),
              Vc = nc.getPositions();
            if (!Vc) return void Wc.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Uc.i.PositionKind + Bc, Vc, !1, 3);
            const Ic = nc.getNormals();
            Ic && this.geometry.setVerticesData(Uc.i.NormalKind + Bc, Ic, !1, 3);
            const rB = nc.getTangents();
            rB && this.geometry.setVerticesData(Uc.i.TangentKind + Bc, rB, !1, 3);
            const uc = nc.getUVs();
            uc && this.geometry.setVerticesData(Uc.i.UVKind + "_" + Bc, uc, !1, 2);
            const sc = nc.getUV2s();
            sc && this.geometry.setVerticesData(Uc.i.UV2Kind + "_" + Bc, sc, !1, 2);
            const Mc = nc.getColors();
            Mc && this.geometry.setVerticesData(Uc.i.ColorKind + Bc, Mc, !1, 4)
          }
        } else {
          let cB = 0;
          for (; this.geometry.isVerticesDataPresent(Uc.i.PositionKind + cB);) this.geometry.removeVerticesData(Uc.i.PositionKind + cB), this.geometry.isVerticesDataPresent(Uc.i.NormalKind + cB) && this.geometry.removeVerticesData(Uc.i.NormalKind + cB), this.geometry.isVerticesDataPresent(Uc.i.TangentKind + cB) && this.geometry.removeVerticesData(Uc.i.TangentKind + cB), this.geometry.isVerticesDataPresent(Uc.i.UVKind + "_" + cB) && this.geometry.removeVerticesData(Uc.i.UVKind + "_" + cB), this.geometry.isVerticesDataPresent(Uc.i.UV2Kind + "_" + cB) && this.geometry.removeVerticesData(Uc.i.UV2Kind + "_" + cB), this.geometry.isVerticesDataPresent(Uc.i.ColorKind + cB) && this.geometry.removeVerticesData(Uc.i.ColorKind + cB), cB++
        }
      }
      static Parse(cB, Bc, nc) {
        let Vc, Ic = !1;
        if (cB.type && "LinesMesh" === cB.type ? Vc = dc._LinesMeshParser(cB, Bc) : cB.type && "GroundMesh" === cB.type ? Vc = dc._GroundMeshParser(cB, Bc) : cB.type && "GoldbergMesh" === cB.type ? Vc = dc._GoldbergMeshParser(cB, Bc) : cB.type && "GreasedLineMesh" === cB.type ? Vc = dc._GreasedLineMeshParser(cB, Bc) : cB.type && "TrailMesh" === cB.type ? Vc = dc._TrailMeshParser(cB, Bc) : cB.type && "GaussianSplattingMesh" === cB.type ? (Vc = cB._isCompound ? dc._GaussianSplattingCompoundMeshParser(cB, Bc) : dc._GaussianSplattingMeshParser(cB, Bc), Ic = !0) : cB.type && "GaussianSplattingPartProxyMesh" === cB.type ? (Vc = dc._GaussianSplattingPartProxyMeshParser(cB, Bc), Ic = !0) : Vc = new dc(cB.name, Bc), Vc.id = cB.id, Vc._waitingParsedUniqueId = cB.uniqueId, hc.c && hc.c.AddTagsTo(Vc, cB.tags), Vc.position = Yc.p.FromArray(cB.position), void 0 !== cB.metadata && (Vc.metadata = cB.metadata), void 0 !== cB.meshBlendingTag && (Vc.meshBlendingTag = cB.meshBlendingTag), cB.rotationQuaternion ? Vc.rotationQuaternion = Yc.f.FromArray(cB.rotationQuaternion) : cB.rotation && (Vc.rotation = Yc.p.FromArray(cB.rotation)), Vc.Su = Yc.p.FromArray(cB.Su), cB.localMatrix ? Vc.setPreTransformMatrix(Yc.d.FromArray(cB.localMatrix)) : cB.pivotMatrix && Vc.setPivotMatrix(Yc.d.FromArray(cB.pivotMatrix)), Vc.jnc(cB.isEnabled), Vc.isVisible = cB.isVisible, Vc.infiniteDistance = cB.infiniteDistance, Vc.iI = !!cB.iI, Vc.showBoundingBox = cB.showBoundingBox, Vc.showSubMeshesBoundingBox = cB.showSubMeshesBoundingBox, void 0 !== cB.applyFog && (Vc.applyFog = cB.applyFog), void 0 !== cB.pickable && (Vc.ur = cB.pickable), void 0 !== cB.alphaIndex && (Vc.alphaIndex = cB.alphaIndex), Vc.receiveShadows = cB.receiveShadows, void 0 !== cB.billboardMode && (Vc.billboardMode = cB.billboardMode), void 0 !== cB.visibility && (Vc.visibility = cB.visibility), Vc.checkCollisions = cB.checkCollisions, Vc.dV = !!cB.dV, cB.ellipsoid && (Vc.ellipsoid = Yc.p.FromArray(cB.ellipsoid)), cB.ellipsoidOffset && (Vc.ellipsoidOffset = Yc.p.FromArray(cB.ellipsoidOffset)), null != cB.overrideMaterialSideOrientation && (Vc.sideOrientation = cB.overrideMaterialSideOrientation), void 0 !== cB.sideOrientation && (Vc.sideOrientation = cB.sideOrientation), void 0 !== cB.isBlocker && (Vc.isBlocker = cB.isBlocker), Vc._shouldGenerateFlatShading = cB.useFlatShading, cB.RBc && (Vc._waitingData.RBc = cB.RBc), void 0 !== cB.parentId && (Vc._waitingParentId = cB.parentId), void 0 !== cB.parentInstanceIndex && (Vc._waitingParentInstanceIndex = cB.parentInstanceIndex), void 0 !== cB.actions && (Vc._waitingData.actions = cB.actions), void 0 !== cB.overlayAlpha && (Vc.overlayAlpha = cB.overlayAlpha), void 0 !== cB.overlayColor && (Vc.overlayColor = Lc.e.FromArray(cB.overlayColor)), void 0 !== cB.renderOverlay && (Vc.renderOverlay = cB.renderOverlay), Vc.isUnIndexed = !!cB.isUnIndexed, Vc.hasVertexAlpha = cB.hasVertexAlpha, cB.delayLoadingFile ? (Vc.delayLoadState = 4, Vc.delayLoadingFile = nc + cB.delayLoadingFile, Vc.buildBoundingInfo(Yc.p.FromArray(cB.boundingBoxMinimum), Yc.p.FromArray(cB.boundingBoxMaximum)), cB._binaryInfo && (Vc._binaryInfo = cB._binaryInfo), Vc._delayInfo = [], cB.hasUVs && Vc._delayInfo.push(Uc.i.UVKind), cB.hasUVs2 && Vc._delayInfo.push(Uc.i.UV2Kind), cB.hasUVs3 && Vc._delayInfo.push(Uc.i.UV3Kind), cB.hasUVs4 && Vc._delayInfo.push(Uc.i.UV4Kind), cB.hasUVs5 && Vc._delayInfo.push(Uc.i.UV5Kind), cB.hasUVs6 && Vc._delayInfo.push(Uc.i.UV6Kind), cB.hasColors && Vc._delayInfo.push(Uc.i.ColorKind), cB.hasMatricesIndices && Vc._delayInfo.push(Uc.i.MatricesIndicesKind), cB.hasMatricesWeights && Vc._delayInfo.push(Uc.i.MatricesWeightsKind), Vc._delayLoadingFunction = Zc.e._ImportGeometry, Ec.d.ForceFullSceneLoadingForIncremental && Vc._checkDelayState()) : Ic || Zc.e._ImportGeometry(cB, Vc), cB.materialUniqueId ? Vc._waitingMaterialId = cB.materialUniqueId : cB.materialId && (Vc._waitingMaterialId = cB.materialId), cB.morphTargetManagerId > -1 && (Vc._waitingMorphTargetManagerId = cB.morphTargetManagerId), void 0 !== cB.skeletonId && null !== cB.skeletonId && (Vc.skeleton = Bc.getLastSkeletonById(cB.skeletonId), Vc._waitingSkeletonId = cB.skeletonId, cB.numBoneInfluencers && (Vc.numBoneInfluencers = cB.numBoneInfluencers)), void 0 !== cB.skeletonUniqueId && null !== cB.skeletonUniqueId && (Vc._waitingSkeletonUniqueId = cB.skeletonUniqueId), cB.animations) {
          for (let Bc = 0; Bc < cB.animations.length; Bc++) {
            const nc = cB.animations[Bc],
              Ic = (0, wc.b)("BABYLON.Animation");
            Ic && Vc.animations.push(Ic.Parse(nc))
          }
          gB.c.ParseAnimationRanges(Vc, cB, Bc)
        }
        if (cB.autoAnimate && Bc.beginAnimation(Vc, cB.autoAnimateFrom, cB.autoAnimateTo, cB.autoAnimateLoop, cB.autoAnimateSpeed || 1), cB.layerMask && !isNaN(cB.layerMask) ? Vc.layerMask = Math.abs(parseInt(cB.layerMask)) : Vc.layerMask = 268435455, cB.physicsImpostor && (Vc.physicsImpostor = dc._PhysicsImpostorParser(Bc, Vc, cB)), cB.lodMeshIds && (Vc._waitingData.lods = {
            ids: cB.lodMeshIds,
            distances: cB.lodDistances ? cB.lodDistances : null,
            coverages: cB.lodCoverages ? cB.lodCoverages : null
          }), cB.instances)
          for (let rB = 0; rB < cB.instances.length; rB++) {
            const nc = cB.instances[rB],
              Ic = Vc.createInstance(nc.name);
            if (nc.id && (Ic.id = nc.id), hc.c && (nc.tags ? hc.c.AddTagsTo(Ic, nc.tags) : hc.c.AddTagsTo(Ic, cB.tags)), Ic.position = Yc.p.FromArray(nc.position), void 0 !== nc.metadata && (Ic.metadata = nc.metadata), void 0 !== nc.parentId && (Ic._waitingParentId = nc.parentId), void 0 !== nc.parentInstanceIndex && (Ic._waitingParentInstanceIndex = nc.parentInstanceIndex), void 0 !== nc.isEnabled && null !== nc.isEnabled && Ic.jnc(nc.isEnabled), void 0 !== nc.isVisible && null !== nc.isVisible && (Ic.isVisible = nc.isVisible), void 0 !== nc.ur && null !== nc.ur && (Ic.ur = nc.ur), nc.rotationQuaternion ? Ic.rotationQuaternion = Yc.f.FromArray(nc.rotationQuaternion) : nc.rotation && (Ic.rotation = Yc.p.FromArray(nc.rotation)), Ic.Su = Yc.p.FromArray(nc.Su), void 0 != nc.checkCollisions && null != nc.checkCollisions && (Ic.checkCollisions = nc.checkCollisions), void 0 != nc.pickable && null != nc.pickable && (Ic.ur = nc.pickable), void 0 != nc.showBoundingBox && null != nc.showBoundingBox && (Ic.showBoundingBox = nc.showBoundingBox), void 0 != nc.showSubMeshesBoundingBox && null != nc.showSubMeshesBoundingBox && (Ic.showSubMeshesBoundingBox = nc.showSubMeshesBoundingBox), void 0 != nc.alphaIndex && null != nc.showSubMeshesBoundingBox && (Ic.alphaIndex = nc.alphaIndex), nc.physicsImpostor && (Ic.physicsImpostor = dc._PhysicsImpostorParser(Bc, Ic, nc)), void 0 !== nc.actions && (Ic._waitingData.actions = nc.actions), nc.animations) {
              for (let cB = 0; cB < nc.animations.length; cB++) {
                const Bc = nc.animations[cB],
                  Vc = (0, wc.b)("BABYLON.Animation");
                Vc && Ic.animations.push(Vc.Parse(Bc))
              }
              gB.c.ParseAnimationRanges(Ic, nc, Bc), nc.autoAnimate && Bc.beginAnimation(Ic, nc.autoAnimateFrom, nc.autoAnimateTo, nc.autoAnimateLoop, nc.autoAnimateSpeed || 1)
            }
          }
        if (cB.thinInstances) {
          const Bc = cB.thinInstances;
          if (Vc.sMc = !!Bc.enablePicking, Bc.matrixData ? (Vc.Ouc("matrix", new Float32Array(Bc.matrixData), 16, !1), Vc._thinInstanceDataStorage.matrixBufferSize = Bc.matrixBufferSize, Vc._thinInstanceDataStorage.instancesCount = Bc.instancesCount) : Vc._thinInstanceDataStorage.matrixBufferSize = Bc.matrixBufferSize, cB.thinInstances.userThinInstance) {
            const Bc = cB.thinInstances.userThinInstance;
            for (const cB in Bc.data) Vc.Ouc(cB, new Float32Array(Bc.data[cB]), Bc.strides[cB], !1), Vc._userThinInstanceBuffersStorage.sizes[cB] = Bc.sizes[cB]
          }
        }
        return Vc
      }
      setPositionsForCPUSkinning() {
        const cB = this._internalMeshDataInfo;
        if (!cB._sourcePositions) {
          const Bc = this.getVerticesData(Uc.i.PositionKind);
          if (!Bc) return cB._sourcePositions;
          cB._sourcePositions = new Float32Array(Bc), this.isVertexBufferUpdatable(Uc.i.PositionKind) || this.setVerticesData(Uc.i.PositionKind, Bc, !0)
        }
        return cB._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const cB = this._internalMeshDataInfo;
        if (!cB._sourceNormals) {
          const Bc = this.getVerticesData(Uc.i.NormalKind);
          if (!Bc) return cB._sourceNormals;
          cB._sourceNormals = new Float32Array(Bc), this.isVertexBufferUpdatable(Uc.i.NormalKind) || this.setVerticesData(Uc.i.NormalKind, Bc, !0)
        }
        return cB._sourceNormals
      }
      applySkeleton(cB) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.knc().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.knc().getFrameId(), !this.isVerticesDataPresent(Uc.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Uc.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Uc.i.MatricesWeightsKind)) return this;
        const Bc = this.isVerticesDataPresent(Uc.i.NormalKind),
          nc = this._internalMeshDataInfo;
        if (!nc._sourcePositions) {
          const cB = this.rD.slice();
          this.setPositionsForCPUSkinning(), this.rD = cB
        }
        Bc && !nc._sourceNormals && this.setNormalsForCPUSkinning();
        let Vc = this.getVerticesData(Uc.i.PositionKind);
        if (!Vc) return this;
        Vc instanceof Float32Array || (Vc = new Float32Array(Vc));
        let Ic = this.getVerticesData(Uc.i.NormalKind);
        if (Bc) {
          if (!Ic) return this;
          Ic instanceof Float32Array || (Ic = new Float32Array(Ic))
        }
        const rB = this.getVerticesData(Uc.i.MatricesIndicesKind),
          uc = this.getVerticesData(Uc.i.MatricesWeightsKind);
        if (!uc || !rB) return this;
        const sc = this.numBoneInfluencers > 4,
          Mc = sc ? this.getVerticesData(Uc.i.MatricesIndicesExtraKind) : null,
          Pc = sc ? this.getVerticesData(Uc.i.MatricesWeightsExtraKind) : null,
          qB = cB.getTransformMatrices(this),
          Oc = Yc.p.Zero(),
          Tc = new Yc.d,
          fc = new Yc.d;
        let mB, ec = 0;
        for (let tB = 0; tB < Vc.length; tB += 3, ec += 4) {
          let cB;
          for (mB = 0; mB < 4; mB++) cB = uc[ec + mB], cB > 0 && (Yc.d.FromFloat32ArrayToRefScaled(qB, Math.floor(16 * rB[ec + mB]), cB, fc), Tc.addToSelf(fc));
          if (sc)
            for (mB = 0; mB < 4; mB++) cB = Pc[ec + mB], cB > 0 && (Yc.d.FromFloat32ArrayToRefScaled(qB, Math.floor(16 * Mc[ec + mB]), cB, fc), Tc.addToSelf(fc));
          Yc.p.TransformCoordinatesFromFloatsToRef(nc._sourcePositions[tB], nc._sourcePositions[tB + 1], nc._sourcePositions[tB + 2], Tc, Oc), Oc.toArray(Vc, tB), Bc && (Yc.p.TransformNormalFromFloatsToRef(nc._sourceNormals[tB], nc._sourceNormals[tB + 1], nc._sourceNormals[tB + 2], Tc, Oc), Oc.toArray(Ic, tB)), Tc.reset()
        }
        return this.updateVerticesData(Uc.i.PositionKind, Vc), Bc && this.updateVerticesData(Uc.i.NormalKind, Ic), this
      }
      static MinMax(cB) {
        let Bc = null,
          nc = null;
        for (const Vc of cB) {
          const cB = Vc.qVc().boundingBox;
          Bc && nc ? (Bc.minimizeInPlace(cB.minimumWorld), nc.maximizeInPlace(cB.maximumWorld)) : (Bc = cB.minimumWorld.clone(), nc = cB.maximumWorld.clone())
        }
        return Bc && nc ? {
          min: Bc,
          max: nc
        } : {
          min: Yc.p.Zero(),
          max: Yc.p.Zero()
        }
      }
      static Center(cB) {
        const Bc = cB instanceof Array ? dc.MinMax(cB) : cB;
        return Yc.p.Center(Bc.min, Bc.max)
      }
      static MergeMeshes(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        return (0, aB.j)(dc._MergeMeshesCoroutine(cB, Bc, nc, Vc, Ic, rB, !1))
      }
      static async MergeMeshesAsync(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, aB.f)(dc._MergeMeshesCoroutine(cB, Bc, nc, Vc, Ic, rB, !0), (0, aB.b)())
      }
      static * _MergeMeshesCoroutine(cB) {
        let Bc, nc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vc = arguments.length > 2 ? arguments[2] : void 0,
          Ic = arguments.length > 3 ? arguments[3] : void 0,
          rB = arguments.length > 4 ? arguments[4] : void 0,
          uc = arguments.length > 5 ? arguments[5] : void 0,
          sc = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (cB = cB.filter(Boolean)).length) return null;
        if (!Vc) {
          let nc = 0;
          for (Bc = 0; Bc < cB.length; Bc++)
            if (nc += cB[Bc].getTotalVertices(), nc >= 65536) return Wc.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Mc = cB[0];
        uc && (rB = !1, cB.sort(((cB, Bc) => (cB.material?.uniqueId ?? -1) - (Bc.material?.uniqueId ?? -1))));
        const Pc = new Array,
          qB = new Array,
          Oc = new Array,
          Tc = cB[0].sideOrientation;
        for (Bc = 0; Bc < cB.length; Bc++) {
          const nc = cB[Bc];
          if (nc.HBc) return Wc.c.Warn("Cannot merge instance meshes."), null;
          if (Tc !== nc.sideOrientation) return Wc.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (rB || uc) {
            const cB = Oc.reduce(((cB, Bc) => Math.max(cB, Bc.start + Bc.count)), 0);
            if (uc)
              if (nc.material) {
                const Bc = nc.material;
                if (Bc instanceof Nc.d) {
                  for (let cB = 0; cB < Bc.msc.length; cB++) Pc.indexOf(Bc.msc[cB]) < 0 && Pc.push(Bc.msc[cB]);
                  for (let Vc = 0; Vc < nc.rD.length; Vc++) qB.push(Pc.indexOf(Bc.msc[nc.rD[Vc].materialIndex])), Oc.push({
                    start: cB + nc.rD[Vc].indexStart,
                    count: nc.rD[Vc].indexCount
                  })
                } else {
                  Pc.indexOf(Bc) < 0 && Pc.push(Bc);
                  for (let Vc = 0; Vc < nc.rD.length; Vc++) qB.push(Pc.indexOf(Bc)), Oc.push({
                    start: cB + nc.rD[Vc].indexStart,
                    count: nc.rD[Vc].indexCount
                  })
                }
              } else
                for (let Bc = 0; Bc < nc.rD.length; Bc++) qB.push(0), Oc.push({
                  start: cB + nc.rD[Bc].indexStart,
                  count: nc.rD[Bc].indexCount
                });
            else Oc.push({
              start: cB,
              count: nc.getTotalIndices()
            })
          }
        }
        if (uc && Oc.length > 1) {
          let cB = 0;
          for (let Bc = 1; Bc < Oc.length; Bc++) {
            const nc = Oc[cB],
              Vc = Oc[Bc];
            qB[Bc] === qB[cB] && nc.start + nc.count === Vc.start ? nc.count += Vc.count : (cB++, Oc[cB] = Vc, qB[cB] = qB[Bc])
          }
          Oc.length = cB + 1, qB.length = cB + 1
        }
        const fc = cB => {
            const Bc = cB.computeWorldMatrix(!0);
            return {
              vertexData: bB.b.ExtractFromMesh(cB, !1, !1),
              transform: Bc
            }
          },
          {
            vertexData: mB,
            transform: ec
          } = fc(cB[0]);
        sc && (yield);
        const tB = new Array(cB.length - 1);
        for (let aB = 1; aB < cB.length; aB++) tB[aB - 1] = fc(cB[aB]), sc && (yield);
        const Sc = mB._mergeCoroutine(ec, tB, Vc, sc, !nc);
        let yB = Sc.next();
        for (; !yB.done;) sc && (yield), yB = Sc.next();
        const zB = yB.value;
        Ic || (Ic = new dc(Mc.name + "_merged", Mc.knc()));
        const pc = zB._applyToCoroutine(Ic, void 0, sc);
        let hc = pc.next();
        for (; !hc.done;) sc && (yield), hc = pc.next();
        if (Ic.checkCollisions = Mc.checkCollisions, Ic.sideOrientation = Mc.sideOrientation, nc)
          for (Bc = 0; Bc < cB.length; Bc++) cB[Bc].dispose();
        if (rB || uc) {
          for (Ic.releaseSubMeshes(), Bc = 0; Bc < Oc.length;) Cc.e.CreateFromIndices(0, Oc[Bc].start, Oc[Bc].count, Ic, void 0, !1), Bc++;
          for (const cB of Ic.rD) cB.refreshBoundingInfo();
          Ic.computeWorldMatrix(!0)
        }
        if (uc) {
          const cB = new Nc.d(Mc.name + "_merged", Mc.knc());
          cB.msc = Pc;
          for (let Bc = 0; Bc < Ic.rD.length; Bc++) Ic.rD[Bc].materialIndex = qB[Bc];
          Ic.material = cB
        } else Ic.material = Mc.material;
        return Ic
      }
      xuc(cB) {
        cB._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(cB)
      }
      csc(cB) {
        const Bc = cB._indexInSourceMeshInstanceArray;
        if (-1 != Bc) {
          if (Bc !== this.instances.length - 1) {
            const cB = this.instances[this.instances.length - 1];
            this.instances[Bc] = cB, cB._indexInSourceMeshInstanceArray = Bc
          }
          cB._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === vB.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(cB) {
        const Bc = this.knc();
        return Bc.forcePointsCloud ? vB.c.PointFillMode : Bc.forceWireframe ? vB.c.WireFrameFillMode : this.overrideRenderingFillMode ?? cB
      }
      setMaterialByID(cB) {
        return this.setMaterialById(cB)
      }
      static CreateRibbon(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(cB, Bc, nc, Vc, Ic, rB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(cB, Bc, nc, Vc, Ic) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(cB, Bc, nc, Vc, Ic, rB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(cB, Bc, nc, Vc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(cB, Bc, nc, Vc, Ic, rB, uc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(cB, Bc, nc, Vc, Ic) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(cB, Bc, nc, Vc, Ic, rB, uc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(cB, Bc, nc, Vc, Ic, rB, uc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(cB, Bc, nc, Vc, Ic) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(cB, Bc, nc, Vc, Ic, rB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(cB, Bc, nc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(cB, Bc, nc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(cB, Bc, nc, Vc, Ic, rB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(cB, Bc, nc) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(cB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    dc.FRONTSIDE = bB.b.FRONTSIDE, dc.BACKSIDE = bB.b.BACKSIDE, dc.DOUBLESIDE = bB.b.DOUBLESIDE, dc.DEFAULTSIDE = bB.b.DEFAULTSIDE, dc.NO_CAP = 0, dc.CAP_START = 1, dc.CAP_END = 2, dc.CAP_ALL = 3, dc.NO_FLIP = 0, dc.FLIP_TILE = 1, dc.ROTATE_TILE = 2, dc.FLIP_ROW = 3, dc.ROTATE_ROW = 4, dc.FLIP_N_ROTATE_TILE = 5, dc.FLIP_N_ROTATE_ROW = 6, dc.CENTER = 0, dc.LEFT = 1, dc.RIGHT = 2, dc.TOP = 3, dc.BOTTOM = 4, dc.INSTANCEDMESH_SORT_TRANSPARENT = !1, dc._GroundMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GroundMesh")
    }, dc._GoldbergMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GoldbergMesh")
    }, dc._LinesMeshParser = (cB, Bc) => {
      throw (0, kB.k)("LinesMesh")
    }, dc._GreasedLineMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GreasedLineMesh")
    }, dc._GreasedLineRibbonMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GreasedLineRibbonMesh")
    }, dc._TrailMeshParser = (cB, Bc) => {
      throw (0, kB.k)("TrailMesh")
    }, dc._GaussianSplattingMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GaussianSplattingMesh")
    }, dc._GaussianSplattingPartProxyMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GaussianSplattingPartProxyMesh")
    }, dc._GaussianSplattingCompoundMeshParser = (cB, Bc) => {
      throw (0, kB.k)("GaussianSplattingCompoundMesh")
    };
    let Ac = !1;

    function Gc() {
      Ac || (Ac = !0, (0, wc.d)("BABYLON.Mesh", dc))
    }(Vc = dc.prototype).unc ?? (Vc.unc = (0, kB.h)("Mesh", "unc")), (Ic = dc.prototype).simplify ?? (Ic.simplify = (0, kB.h)("Mesh", "simplify")), (rB = dc.prototype).thinInstanceAdd ?? (rB.thinInstanceAdd = (0, kB.h)("Mesh", "thinInstanceAdd")), (uc = dc.prototype).thinInstanceAddSelf ?? (uc.thinInstanceAddSelf = (0, kB.h)("Mesh", "thinInstanceAddSelf")), (sc = dc.prototype).thinInstanceRegisterAttribute ?? (sc.thinInstanceRegisterAttribute = (0, kB.h)("Mesh", "thinInstanceRegisterAttribute")), (Mc = dc.prototype).thinInstanceSetMatrixAt ?? (Mc.thinInstanceSetMatrixAt = (0, kB.h)("Mesh", "thinInstanceSetMatrixAt")), (Pc = dc.prototype).thinInstanceSetAttributeAt ?? (Pc.thinInstanceSetAttributeAt = (0, kB.h)("Mesh", "thinInstanceSetAttributeAt")), (qB = dc.prototype).Ouc ?? (qB.Ouc = (0, kB.h)("Mesh", "Ouc")), (Oc = dc.prototype).thinInstanceGetWorldMatrices ?? (Oc.thinInstanceGetWorldMatrices = (0, kB.h)("Mesh", "thinInstanceGetWorldMatrices")), (Tc = dc.prototype).Iuc ?? (Tc.Iuc = (0, kB.h)("Mesh", "Iuc")), (fc = dc.prototype).thinInstancePartialBufferUpdate ?? (fc.thinInstancePartialBufferUpdate = (0, kB.h)("Mesh", "thinInstancePartialBufferUpdate")), (mB = dc.prototype).thinInstanceRefreshBoundingInfo ?? (mB.thinInstanceRefreshBoundingInfo = (0, kB.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (ec = dc.prototype).getEmittedParticleSystems ?? (ec.getEmittedParticleSystems = (0, kB.h)("Mesh", "getEmittedParticleSystems")), (tB = dc.prototype).getHierarchyEmittedParticleSystems ?? (tB.getHierarchyEmittedParticleSystems = (0, kB.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(dc.prototype, "edgesShareWithInstances") || Object.defineProperty(dc.prototype, "edgesShareWithInstances", (0, kB.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(dc.prototype, "sMc") || Object.defineProperty(dc.prototype, "sMc", (0, kB.e)("Mesh", "sMc")), Object.getOwnPropertyDescriptor(dc.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(dc.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, kB.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(dc.prototype, "Jrc") || Object.defineProperty(dc.prototype, "Jrc", (0, kB.e)("Mesh", "Jrc"))
  },
  38430: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => mB
    });
    var Vc = nc(38035),
      Ic = nc(35756),
      rB = nc(38194),
      uc = nc(37953),
      sc = nc(35815),
      Mc = nc(37191),
      Pc = nc(38043),
      qB = nc(38428),
      Oc = nc(38108),
      Tc = nc(38332);
    class fc {}
    let mB = (() => {
      var cB;
      let Bc, nc, mB, ec, tB = [];
      return cB = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, qB.d)(this._applyToCoroutine.bind(this)), this.uniqueId = cB._UniqueIdGenerator, cB._UniqueIdGenerator++
        }
        set(cB, Bc) {
          switch (cB.length || Mc.c.Warn(`Setting vertex data kind '${Bc}' with an empty array`), Bc) {
            case rB.i.PositionKind:
              this.positions = cB;
              break;
            case rB.i.NormalKind:
              this.normals = cB;
              break;
            case rB.i.TangentKind:
              this.tangents = cB;
              break;
            case rB.i.UVKind:
              this.uvs = cB;
              break;
            case rB.i.UV2Kind:
              this.uvs2 = cB;
              break;
            case rB.i.UV3Kind:
              this.uvs3 = cB;
              break;
            case rB.i.UV4Kind:
              this.uvs4 = cB;
              break;
            case rB.i.UV5Kind:
              this.uvs5 = cB;
              break;
            case rB.i.UV6Kind:
              this.uvs6 = cB;
              break;
            case rB.i.ColorKind:
              this.colors = cB;
              break;
            case rB.i.MatricesIndicesKind:
              this.matricesIndices = cB;
              break;
            case rB.i.MatricesWeightsKind:
              this.matricesWeights = cB;
              break;
            case rB.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = cB;
              break;
            case rB.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = cB
          }
        }
        applyToMesh(cB, Bc) {
          return this._applyTo(cB, Bc, !1), this
        }
        applyToGeometry(cB, Bc) {
          return this._applyTo(cB, Bc, !1), this
        }
        updateMesh(cB) {
          return this._update(cB), this
        }
        updateGeometry(cB) {
          return this._update(cB), this
        }* _applyToCoroutine(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            nc = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (cB.setVerticesData(rB.i.PositionKind, this.positions, Bc), nc && (yield)), this.normals && (cB.setVerticesData(rB.i.NormalKind, this.normals, Bc), nc && (yield)), this.tangents && (cB.setVerticesData(rB.i.TangentKind, this.tangents, Bc), nc && (yield)), this.uvs && (cB.setVerticesData(rB.i.UVKind, this.uvs, Bc), nc && (yield)), this.uvs2 && (cB.setVerticesData(rB.i.UV2Kind, this.uvs2, Bc), nc && (yield)), this.uvs3 && (cB.setVerticesData(rB.i.UV3Kind, this.uvs3, Bc), nc && (yield)), this.uvs4 && (cB.setVerticesData(rB.i.UV4Kind, this.uvs4, Bc), nc && (yield)), this.uvs5 && (cB.setVerticesData(rB.i.UV5Kind, this.uvs5, Bc), nc && (yield)), this.uvs6 && (cB.setVerticesData(rB.i.UV6Kind, this.uvs6, Bc), nc && (yield)), this.colors) {
            const Vc = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            cB.setVerticesData(rB.i.ColorKind, this.colors, Bc, Vc), this.hasVertexAlpha && void 0 !== cB.hasVertexAlpha && (cB.hasVertexAlpha = !0), nc && (yield)
          }
          if (this.matricesIndices && (cB.setVerticesData(rB.i.MatricesIndicesKind, this.matricesIndices, Bc), nc && (yield)), this.matricesWeights && (cB.setVerticesData(rB.i.MatricesWeightsKind, this.matricesWeights, Bc), nc && (yield)), this.matricesIndicesExtra && (cB.setVerticesData(rB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, Bc), nc && (yield)), this.matricesWeightsExtra && (cB.setVerticesData(rB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, Bc), nc && (yield)), this.indices ? (cB.setIndices(this.indices, null, Bc), nc && (yield)) : cB.setIndices([], null), cB.rD && this.materialInfos && this.materialInfos.length > 1) {
            const Bc = cB;
            Bc.rD = [];
            for (const cB of this.materialInfos) new Tc.e(cB.materialIndex, cB.verticesStart, cB.verticesCount, cB.indexStart, cB.indexCount, Bc)
          }
          return this
        }
        _update(cB, Bc, nc) {
          return this.positions && cB.updateVerticesData(rB.i.PositionKind, this.positions, Bc, nc), this.normals && cB.updateVerticesData(rB.i.NormalKind, this.normals, Bc, nc), this.tangents && cB.updateVerticesData(rB.i.TangentKind, this.tangents, Bc, nc), this.uvs && cB.updateVerticesData(rB.i.UVKind, this.uvs, Bc, nc), this.uvs2 && cB.updateVerticesData(rB.i.UV2Kind, this.uvs2, Bc, nc), this.uvs3 && cB.updateVerticesData(rB.i.UV3Kind, this.uvs3, Bc, nc), this.uvs4 && cB.updateVerticesData(rB.i.UV4Kind, this.uvs4, Bc, nc), this.uvs5 && cB.updateVerticesData(rB.i.UV5Kind, this.uvs5, Bc, nc), this.uvs6 && cB.updateVerticesData(rB.i.UV6Kind, this.uvs6, Bc, nc), this.colors && cB.updateVerticesData(rB.i.ColorKind, this.colors, Bc, nc), this.matricesIndices && cB.updateVerticesData(rB.i.MatricesIndicesKind, this.matricesIndices, Bc, nc), this.matricesWeights && cB.updateVerticesData(rB.i.MatricesWeightsKind, this.matricesWeights, Bc, nc), this.matricesIndicesExtra && cB.updateVerticesData(rB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, Bc, nc), this.matricesWeightsExtra && cB.updateVerticesData(rB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, Bc, nc), this.indices && cB.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.length;
          const rB = Ic.i.KV[0],
            uc = Ic.i.KV[1];
          for (let sc = nc; sc < nc + Vc; sc += 3) Ic.p.FromArrayToRef(cB, sc, rB), Ic.p.TransformCoordinatesToRef(rB, Bc, uc), cB[sc] = uc.x, cB[sc + 1] = uc.y, cB[sc + 2] = uc.z
        }
        static _TransformVector3Normals(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.length;
          const rB = Ic.i.KV[0],
            uc = Ic.i.KV[1];
          for (let sc = nc; sc < nc + Vc; sc += 3) Ic.p.FromArrayToRef(cB, sc, rB), Ic.p.TransformNormalToRef(rB, Bc, uc), cB[sc] = uc.x, cB[sc + 1] = uc.y, cB[sc + 2] = uc.z
        }
        static _TransformVector4Normals(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.length;
          const rB = Ic.i.Vector4[0],
            uc = Ic.i.Vector4[1];
          for (let sc = nc; sc < nc + Vc; sc += 4) Ic.t.FromArrayToRef(cB, sc, rB), Ic.t.TransformNormalToRef(rB, Bc, uc), cB[sc] = uc.x, cB[sc + 1] = uc.y, cB[sc + 2] = uc.z, cB[sc + 3] = uc.w
        }
        static _FlipFaces(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB.length;
          for (let Vc = Bc; Vc < Bc + nc; Vc += 3) {
            const Bc = cB[Vc + 1];
            cB[Vc + 1] = cB[Vc + 2], cB[Vc + 2] = Bc
          }
        }
        transform(Bc) {
          const nc = Bc.determinant() < 0;
          return this.positions && cB._TransformVector3Coordinates(this.positions, Bc), this.normals && cB._TransformVector3Normals(this.normals, Bc), this.tangents && cB._TransformVector4Normals(this.tangents, Bc), nc && this.indices && cB._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Bc = [];
          for (const nc of this.materialInfos) {
            const Vc = new cB;
            if (this.positions && (Vc.positions = this.positions.slice(3 * nc.verticesStart, 3 * (nc.verticesCount + nc.verticesStart))), this.normals && (Vc.normals = this.normals.slice(3 * nc.verticesStart, 3 * (nc.verticesCount + nc.verticesStart))), this.tangents && (Vc.tangents = this.tangents.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.colors && (Vc.colors = this.colors.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.uvs && (Vc.uvs = this.uvs.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.uvs2 && (Vc.uvs2 = this.uvs2.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.uvs3 && (Vc.uvs3 = this.uvs3.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.uvs4 && (Vc.uvs4 = this.uvs4.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.uvs5 && (Vc.uvs5 = this.uvs5.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.uvs6 && (Vc.uvs6 = this.uvs6.slice(2 * nc.verticesStart, 2 * (nc.verticesCount + nc.verticesStart))), this.matricesIndices && (Vc.matricesIndices = this.matricesIndices.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.matricesIndicesExtra && (Vc.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.matricesWeights && (Vc.matricesWeights = this.matricesWeights.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.matricesWeightsExtra && (Vc.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * nc.verticesStart, 4 * (nc.verticesCount + nc.verticesStart))), this.indices) {
              Vc.indices = [];
              for (let cB = nc.indexStart; cB < nc.indexStart + nc.indexCount; cB++) Vc.indices.push(this.indices[cB] - nc.verticesStart)
            }
            const Ic = new fc;
            Ic.indexStart = 0, Ic.indexCount = Vc.indices ? Vc.indices.length : 0, Ic.materialIndex = nc.materialIndex, Ic.verticesStart = 0, Ic.verticesCount = (Vc.positions ? Vc.positions.length : 0) / 3, Vc.materialInfos = [Ic], Bc.push(Vc)
          }
          return Bc
        }
        merge(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const rB = Array.isArray(cB) ? cB.map((cB => ({
            vertexData: cB
          }))) : [{
            vertexData: cB
          }];
          return (0, qB.j)(this._mergeCoroutine(void 0, rB, Bc, !1, nc, Vc, Ic))
        }* _mergeCoroutine(Bc, nc) {
          let Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ic = arguments.length > 3 ? arguments[3] : void 0,
            uc = arguments.length > 4 ? arguments[4] : void 0,
            sc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Mc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Pc = nc.map((cB => cB.vertexData)),
            qB = this;
          if (Mc)
            for (const cB of Pc) cB && (cB._validate(), !this.normals && cB.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && cB.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && cB.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && cB.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && cB.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && cB.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && cB.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && cB.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && cB.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && cB.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && cB.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && cB.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && cB.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const cB of Pc)
            if (cB)
              if (Mc) this.normals && !cB.normals && (cB.normals = new Float32Array(cB.positions.length)), this.tangents && !cB.tangents && (cB.tangents = new Float32Array(cB.positions.length / 3 * 4)), this.uvs && !cB.uvs && (cB.uvs = new Float32Array(cB.positions.length / 3 * 2)), this.uvs2 && !cB.uvs2 && (cB.uvs2 = new Float32Array(cB.positions.length / 3 * 2)), this.uvs3 && !cB.uvs3 && (cB.uvs3 = new Float32Array(cB.positions.length / 3 * 2)), this.uvs4 && !cB.uvs4 && (cB.uvs4 = new Float32Array(cB.positions.length / 3 * 2)), this.uvs5 && !cB.uvs5 && (cB.uvs5 = new Float32Array(cB.positions.length / 3 * 2)), this.uvs6 && !cB.uvs6 && (cB.uvs6 = new Float32Array(cB.positions.length / 3 * 2)), this.colors && !cB.colors && (cB.colors = new Float32Array(cB.positions.length / 3 * 4), cB.colors.fill(1)), this.matricesIndices && !cB.matricesIndices && (cB.matricesIndices = new Float32Array(cB.positions.length / 3 * 4)), this.matricesWeights && !cB.matricesWeights && (cB.matricesWeights = new Float32Array(cB.positions.length / 3 * 4)), this.matricesIndicesExtra && !cB.matricesIndicesExtra && (cB.matricesIndicesExtra = new Float32Array(cB.positions.length / 3 * 4)), this.matricesWeightsExtra && !cB.matricesWeightsExtra && (cB.matricesWeightsExtra = new Float32Array(cB.positions.length / 3 * 4));
              else if (cB._validate(), !this.normals !== !cB.normals || !this.tangents !== !cB.tangents || !this.uvs !== !cB.uvs || !this.uvs2 !== !cB.uvs2 || !this.uvs3 !== !cB.uvs3 || !this.uvs4 !== !cB.uvs4 || !this.uvs5 !== !cB.uvs5 || !this.uvs6 !== !cB.uvs6 || !this.colors !== !cB.colors || !this.matricesIndices !== !cB.matricesIndices || !this.matricesWeights !== !cB.matricesWeights || !this.matricesIndicesExtra !== !cB.matricesIndicesExtra || !this.matricesWeightsExtra !== !cB.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (sc) {
            let cB, Vc = 0,
              Ic = 0;
            const rB = [];
            let uc = null;
            const sc = [];
            for (const nc of this.splitBasedOnMaterialID()) sc.push({
              vertexData: nc,
              transform: Bc
            });
            for (const Bc of nc)
              if (Bc.vertexData)
                for (const cB of Bc.vertexData.splitBasedOnMaterialID()) sc.push({
                  vertexData: cB,
                  transform: Bc.transform
                });
            sc.sort(((cB, Bc) => {
              const nc = cB.vertexData.materialInfos ? cB.vertexData.materialInfos[0].materialIndex : 0,
                Vc = Bc.vertexData.materialInfos ? Bc.vertexData.materialInfos[0].materialIndex : 0;
              return nc > Vc ? 1 : nc === Vc ? 0 : -1
            }));
            for (const Bc of sc) {
              const nc = Bc.vertexData;
              if (cB = nc.materialInfos ? nc.materialInfos[0].materialIndex : 0, uc && uc.materialIndex === cB) uc.indexCount += nc.indices.length, uc.verticesCount += nc.positions.length / 3;
              else {
                const Bc = new fc;
                Bc.materialIndex = cB, Bc.indexStart = Vc, Bc.indexCount = nc.indices.length, Bc.verticesStart = Ic, Bc.verticesCount = nc.positions.length / 3, rB.push(Bc), uc = Bc
              }
              Vc += nc.indices.length, Ic += nc.positions.length / 3
            }
            const Mc = sc.splice(0, 1)[0];
            qB = Mc.vertexData, Bc = Mc.transform, Pc = sc.map((cB => cB.vertexData)), nc = sc, this.materialInfos = rB
          }
          const Oc = Pc.reduce(((cB, Bc) => cB + (Bc.indices?.length ?? 0)), qB.indices?.length ?? 0);
          let Tc = uc || Pc.some((cB => cB.indices === qB.indices)) ? qB.indices?.slice() : qB.indices;
          if (Oc > 0) {
            let rB = Tc?.length ?? 0;
            if (Tc || (Tc = new Array(Oc)), Tc.length !== Oc) {
              if (Array.isArray(Tc)) Tc.length = Oc;
              else {
                const cB = Vc || Tc instanceof Uint32Array ? new Uint32Array(Oc) : new Uint16Array(Oc);
                cB.set(Tc), Tc = cB
              }
              Bc && Bc.determinant() < 0 && cB._FlipFaces(Tc, 0, rB)
            }
            let uc = qB.positions ? qB.positions.length / 3 : 0;
            for (const {
                vertexData: Bc,
                transform: Vc
              }
              of nc)
              if (Bc.indices) {
                for (let cB = 0; cB < Bc.indices.length; cB++) Tc[rB + cB] = Bc.indices[cB] + uc;
                Vc && Vc.determinant() < 0 && cB._FlipFaces(Tc, rB, Bc.indices.length), uc += Bc.positions.length / 3, rB += Bc.indices.length, Ic && (yield)
              }
          }
          return this.indices = Tc, this.positions = cB._MergeElement(rB.i.PositionKind, qB.positions, Bc, nc.map((cB => [cB.vertexData.positions, cB.transform]))), Ic && (yield), qB.normals && (this.normals = cB._MergeElement(rB.i.NormalKind, qB.normals, Bc, nc.map((cB => [cB.vertexData.normals, cB.transform]))), Ic && (yield)), qB.tangents && (this.tangents = cB._MergeElement(rB.i.TangentKind, qB.tangents, Bc, nc.map((cB => [cB.vertexData.tangents, cB.transform]))), Ic && (yield)), qB.uvs && (this.uvs = cB._MergeElement(rB.i.UVKind, qB.uvs, Bc, nc.map((cB => [cB.vertexData.uvs, cB.transform]))), Ic && (yield)), qB.uvs2 && (this.uvs2 = cB._MergeElement(rB.i.UV2Kind, qB.uvs2, Bc, nc.map((cB => [cB.vertexData.uvs2, cB.transform]))), Ic && (yield)), qB.uvs3 && (this.uvs3 = cB._MergeElement(rB.i.UV3Kind, qB.uvs3, Bc, nc.map((cB => [cB.vertexData.uvs3, cB.transform]))), Ic && (yield)), qB.uvs4 && (this.uvs4 = cB._MergeElement(rB.i.UV4Kind, qB.uvs4, Bc, nc.map((cB => [cB.vertexData.uvs4, cB.transform]))), Ic && (yield)), qB.uvs5 && (this.uvs5 = cB._MergeElement(rB.i.UV5Kind, qB.uvs5, Bc, nc.map((cB => [cB.vertexData.uvs5, cB.transform]))), Ic && (yield)), qB.uvs6 && (this.uvs6 = cB._MergeElement(rB.i.UV6Kind, qB.uvs6, Bc, nc.map((cB => [cB.vertexData.uvs6, cB.transform]))), Ic && (yield)), qB.colors && (this.colors = cB._MergeElement(rB.i.ColorKind, qB.colors, Bc, nc.map((cB => [cB.vertexData.colors, cB.transform]))), (void 0 !== qB.hasVertexAlpha || nc.some((cB => void 0 !== cB.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = qB.hasVertexAlpha || nc.some((cB => cB.vertexData.hasVertexAlpha))), Ic && (yield)), qB.matricesIndices && (this.matricesIndices = cB._MergeElement(rB.i.MatricesIndicesKind, qB.matricesIndices, Bc, nc.map((cB => [cB.vertexData.matricesIndices, cB.transform]))), Ic && (yield)), qB.matricesWeights && (this.matricesWeights = cB._MergeElement(rB.i.MatricesWeightsKind, qB.matricesWeights, Bc, nc.map((cB => [cB.vertexData.matricesWeights, cB.transform]))), Ic && (yield)), qB.matricesIndicesExtra && (this.matricesIndicesExtra = cB._MergeElement(rB.i.MatricesIndicesExtraKind, qB.matricesIndicesExtra, Bc, nc.map((cB => [cB.vertexData.matricesIndicesExtra, cB.transform]))), Ic && (yield)), qB.matricesWeightsExtra && (this.matricesWeightsExtra = cB._MergeElement(rB.i.MatricesWeightsExtraKind, qB.matricesWeightsExtra, Bc, nc.map((cB => [cB.vertexData.matricesWeightsExtra, cB.transform])))), this
        }
        static _MergeElement(Bc, nc, Vc, Ic) {
          const uc = Ic.filter((cB => null !== cB[0] && void 0 !== cB[0]));
          if (!nc && 0 == uc.length) return nc;
          if (!nc) return this._MergeElement(Bc, uc[0][0], uc[0][1], uc.slice(1));
          const sc = uc.reduce(((cB, Bc) => cB + Bc[0].length), nc.length),
            Mc = Bc === rB.i.PositionKind ? cB._TransformVector3Coordinates : Bc === rB.i.NormalKind ? cB._TransformVector3Normals : Bc === rB.i.TangentKind ? cB._TransformVector4Normals : () => {};
          if (nc instanceof Float32Array) {
            const cB = new Float32Array(sc);
            cB.set(nc), Vc && Mc(cB, Vc, 0, nc.length);
            let Bc = nc.length;
            for (const [nc, Vc] of uc) cB.set(nc, Bc), Vc && Mc(cB, Vc, Bc, nc.length), Bc += nc.length;
            return cB
          } {
            const cB = new Array(sc);
            for (let Vc = 0; Vc < nc.length; Vc++) cB[Vc] = nc[Vc];
            Vc && Mc(cB, Vc, 0, nc.length);
            let Bc = nc.length;
            for (const [nc, Vc] of uc) {
              for (let Vc = 0; Vc < nc.length; Vc++) cB[Bc + Vc] = nc[Vc];
              Vc && Mc(cB, Vc, Bc, nc.length), Bc += nc.length
            }
            return cB
          }
        }
        _validate() {
          if (!this.positions) throw new Oc.i("Positions are required", Oc.e.MeshInvalidPositionsError);
          const cB = (cB, Bc) => {
              const nc = (0, rB.g)(cB);
              if (Bc.length % nc !== 0) throw new Error("The " + cB + "s array count must be a multiple of " + nc);
              return Bc.length / nc
            },
            Bc = cB(rB.i.PositionKind, this.positions),
            nc = (nc, Vc) => {
              const Ic = cB(nc, Vc);
              if (Ic !== Bc) throw new Error("The " + nc + "s element count (" + Ic + ") does not match the positions count (" + Bc + ")")
            };
          this.normals && nc(rB.i.NormalKind, this.normals), this.tangents && nc(rB.i.TangentKind, this.tangents), this.uvs && nc(rB.i.UVKind, this.uvs), this.uvs2 && nc(rB.i.UV2Kind, this.uvs2), this.uvs3 && nc(rB.i.UV3Kind, this.uvs3), this.uvs4 && nc(rB.i.UV4Kind, this.uvs4), this.uvs5 && nc(rB.i.UV5Kind, this.uvs5), this.uvs6 && nc(rB.i.UV6Kind, this.uvs6), this.colors && nc(rB.i.ColorKind, this.colors), this.matricesIndices && nc(rB.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && nc(rB.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && nc(rB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && nc(rB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Bc = this.serialize();
          return cB.Parse(Bc)
        }
        serialize() {
          const cB = {};
          if (this.positions && (cB.positions = Array.from(this.positions)), this.normals && (cB.normals = Array.from(this.normals)), this.tangents && (cB.tangents = Array.from(this.tangents)), this.uvs && (cB.uvs = Array.from(this.uvs)), this.uvs2 && (cB.uvs2 = Array.from(this.uvs2)), this.uvs3 && (cB.uvs3 = Array.from(this.uvs3)), this.uvs4 && (cB.uvs4 = Array.from(this.uvs4)), this.uvs5 && (cB.uvs5 = Array.from(this.uvs5)), this.uvs6 && (cB.uvs6 = Array.from(this.uvs6)), this.colors && (cB.colors = Array.from(this.colors), cB.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (cB.matricesIndices = Array.from(this.matricesIndices), cB.matricesIndicesExpanded = !0), this.matricesWeights && (cB.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (cB.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), cB.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (cB.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), cB.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            cB.materialInfos = [];
            for (const Bc of this.materialInfos) {
              const nc = {
                indexStart: Bc.indexStart,
                indexCount: Bc.indexCount,
                materialIndex: Bc.materialIndex,
                verticesStart: Bc.verticesStart,
                verticesCount: Bc.verticesCount
              };
              cB.materialInfos.push(nc)
            }
          }
          return cB
        }
        static ExtractFromMesh(Bc, nc, Vc) {
          return cB._ExtractFrom(Bc, nc, Vc)
        }
        static ExtractFromGeometry(Bc, nc, Vc) {
          return cB._ExtractFrom(Bc, nc, Vc)
        }
        static _ExtractFrom(Bc, nc, Vc) {
          const Ic = new cB;
          if (Bc.isVerticesDataPresent(rB.i.PositionKind) && (Ic.positions = Bc.getVerticesData(rB.i.PositionKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.NormalKind) && (Ic.normals = Bc.getVerticesData(rB.i.NormalKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.TangentKind) && (Ic.tangents = Bc.getVerticesData(rB.i.TangentKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UVKind) && (Ic.uvs = Bc.getVerticesData(rB.i.UVKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UV2Kind) && (Ic.uvs2 = Bc.getVerticesData(rB.i.UV2Kind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UV3Kind) && (Ic.uvs3 = Bc.getVerticesData(rB.i.UV3Kind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UV4Kind) && (Ic.uvs4 = Bc.getVerticesData(rB.i.UV4Kind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UV5Kind) && (Ic.uvs5 = Bc.getVerticesData(rB.i.UV5Kind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.UV6Kind) && (Ic.uvs6 = Bc.getVerticesData(rB.i.UV6Kind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.ColorKind)) {
            const cB = Bc.geometry || Bc,
              uc = cB.getVertexBuffer(rB.i.ColorKind),
              sc = cB.getVerticesData(rB.i.ColorKind, nc, Vc);
            if (3 === uc.getSize()) {
              const cB = new Float32Array(4 * sc.length / 3);
              for (let Bc = 0, nc = 0; Bc < sc.length; Bc += 3, nc += 4) cB[nc] = sc[Bc], cB[nc + 1] = sc[Bc + 1], cB[nc + 2] = sc[Bc + 2], cB[nc + 3] = 1;
              Ic.colors = cB
            } else {
              if (4 !== uc.getSize()) throw new Error(`Unexpected number of color components: ${uc.getSize()}`);
              Ic.colors = sc
            }
          }
          return Bc.isVerticesDataPresent(rB.i.MatricesIndicesKind) && (Ic.matricesIndices = Bc.getVerticesData(rB.i.MatricesIndicesKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.MatricesWeightsKind) && (Ic.matricesWeights = Bc.getVerticesData(rB.i.MatricesWeightsKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.MatricesIndicesExtraKind) && (Ic.matricesIndicesExtra = Bc.getVerticesData(rB.i.MatricesIndicesExtraKind, nc, Vc)), Bc.isVerticesDataPresent(rB.i.MatricesWeightsExtraKind) && (Ic.matricesWeightsExtra = Bc.getVerticesData(rB.i.MatricesWeightsExtraKind, nc, Vc)), Ic.indices = Bc.Tfc(nc, Vc), Ic
        }
        static CreateRibbon(cB) {
          throw (0, uc.k)("ribbonBuilder")
        }
        static CreateBox(cB) {
          throw (0, uc.k)("boxBuilder")
        }
        static CreateTiledBox(cB) {
          throw (0, uc.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(cB) {
          throw (0, uc.k)("tiledPlaneBuilder")
        }
        static CreateSphere(cB) {
          throw (0, uc.k)("sphereBuilder")
        }
        static CreateCylinder(cB) {
          throw (0, uc.k)("cylinderBuilder")
        }
        static CreateTorus(cB) {
          throw (0, uc.k)("torusBuilder")
        }
        static CreateLineSystem(cB) {
          throw (0, uc.k)("linesBuilder")
        }
        static CreateDashedLines(cB) {
          throw (0, uc.k)("linesBuilder")
        }
        static CreateGround(cB) {
          throw (0, uc.k)("groundBuilder")
        }
        static CreateTiledGround(cB) {
          throw (0, uc.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(cB) {
          throw (0, uc.k)("groundBuilder")
        }
        static CreatePlane(cB) {
          throw (0, uc.k)("planeBuilder")
        }
        static CreateDisc(cB) {
          throw (0, uc.k)("discBuilder")
        }
        static CreatePolygon(cB, Bc, nc, Vc, Ic, rB, sc) {
          throw (0, uc.k)("polygonBuilder")
        }
        static CreateIcoSphere(cB) {
          throw (0, uc.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(cB) {
          throw (0, uc.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Ic.p.Up();
          throw (0, uc.k)("capsuleBuilder")
        }
        static CreateTorusKnot(cB) {
          throw (0, uc.k)("torusKnotBuilder")
        }
        static ComputeNormals(cB, Bc, nc, Vc) {
          let rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc = !1,
            gB = !1,
            Uc = !1,
            bB = !1,
            Zc = 1,
            Qc = 0,
            Cc = null;
          Vc && (Lc = !!Vc.facetNormals, gB = !!Vc.facetPositions, Uc = !!Vc.facetPartitioning, Zc = !0 === Vc.useRightHandedSystem ? -1 : 1, Qc = Vc.ratio || 0, bB = !!Vc.depthSort, Cc = Vc.distanceTo, bB && void 0 === Cc && (Cc = Ic.p.Zero()));
          let vB = 0,
            Dc = 0,
            Nc = 0,
            Ec = 0;
          for (Uc && Vc && Vc.bbSize && (vB = Vc.subDiv.X * Qc / Vc.bbSize.x, Dc = Vc.subDiv.Y * Qc / Vc.bbSize.y, Nc = Vc.subDiv.Z * Qc / Vc.bbSize.z, Ec = Vc.subDiv.max * Vc.subDiv.max, Vc.facetPartitioning.length = 0), rB = 0; rB < cB.length; rB++) nc[rB] = 0;
          const oc = Bc.length / 3 | 0;
          for (rB = 0; rB < oc; rB++) {
            if (tB = 3 * Bc[3 * rB], Sc = tB + 1, yB = tB + 2, zB = 3 * Bc[3 * rB + 1], pc = zB + 1, hc = zB + 2, aB = 3 * Bc[3 * rB + 2], lc = aB + 1, Yc = aB + 2, uc = cB[tB] - cB[zB], sc = cB[Sc] - cB[pc], Mc = cB[yB] - cB[hc], Pc = cB[aB] - cB[zB], qB = cB[lc] - cB[pc], Oc = cB[Yc] - cB[hc], Tc = Zc * (sc * Oc - Mc * qB), fc = Zc * (Mc * Pc - uc * Oc), mB = Zc * (uc * qB - sc * Pc), ec = Math.sqrt(Tc * Tc + fc * fc + mB * mB), ec = 0 === ec ? 1 : ec, Tc /= ec, fc /= ec, mB /= ec, Lc && Vc && (Vc.facetNormals[rB].x = Tc, Vc.facetNormals[rB].y = fc, Vc.facetNormals[rB].z = mB), gB && Vc && (Vc.facetPositions[rB].x = (cB[tB] + cB[zB] + cB[aB]) / 3, Vc.facetPositions[rB].y = (cB[Sc] + cB[pc] + cB[lc]) / 3, Vc.facetPositions[rB].z = (cB[yB] + cB[hc] + cB[Yc]) / 3), Uc && Vc) {
              const Bc = Math.floor((Vc.facetPositions[rB].x - Vc.bInfo.minimum.x * Qc) * vB),
                nc = Math.floor((Vc.facetPositions[rB].y - Vc.bInfo.minimum.y * Qc) * Dc),
                Ic = Math.floor((Vc.facetPositions[rB].z - Vc.bInfo.minimum.z * Qc) * Nc),
                uc = Math.floor((cB[tB] - Vc.bInfo.minimum.x * Qc) * vB),
                sc = Math.floor((cB[Sc] - Vc.bInfo.minimum.y * Qc) * Dc),
                Mc = Math.floor((cB[yB] - Vc.bInfo.minimum.z * Qc) * Nc),
                Pc = Math.floor((cB[zB] - Vc.bInfo.minimum.x * Qc) * vB),
                qB = Math.floor((cB[pc] - Vc.bInfo.minimum.y * Qc) * Dc),
                Oc = Math.floor((cB[hc] - Vc.bInfo.minimum.z * Qc) * Nc),
                Tc = Math.floor((cB[aB] - Vc.bInfo.minimum.x * Qc) * vB),
                fc = Math.floor((cB[lc] - Vc.bInfo.minimum.y * Qc) * Dc),
                mB = Math.floor((cB[Yc] - Vc.bInfo.minimum.z * Qc) * Nc),
                ec = uc + Vc.subDiv.max * sc + Ec * Mc,
                Lc = Pc + Vc.subDiv.max * qB + Ec * Oc,
                gB = Tc + Vc.subDiv.max * fc + Ec * mB,
                Uc = Bc + Vc.subDiv.max * nc + Ec * Ic;
              Vc.facetPartitioning[Uc] = Vc.facetPartitioning[Uc] ? Vc.facetPartitioning[Uc] : [], Vc.facetPartitioning[ec] = Vc.facetPartitioning[ec] ? Vc.facetPartitioning[ec] : [], Vc.facetPartitioning[Lc] = Vc.facetPartitioning[Lc] ? Vc.facetPartitioning[Lc] : [], Vc.facetPartitioning[gB] = Vc.facetPartitioning[gB] ? Vc.facetPartitioning[gB] : [], Vc.facetPartitioning[ec].push(rB), Lc != ec && Vc.facetPartitioning[Lc].push(rB), gB != Lc && gB != ec && Vc.facetPartitioning[gB].push(rB), Uc != ec && Uc != Lc && Uc != gB && Vc.facetPartitioning[Uc].push(rB)
            }
            if (bB && Vc && Vc.facetPositions) {
              const cB = Vc.depthSortedFacets[rB];
              cB.ind = 3 * rB, cB.sqDistance = Ic.p.DistanceSquared(Vc.facetPositions[rB], Cc)
            }
            nc[tB] += Tc, nc[Sc] += fc, nc[yB] += mB, nc[zB] += Tc, nc[pc] += fc, nc[hc] += mB, nc[aB] += Tc, nc[lc] += fc, nc[Yc] += mB
          }
          for (rB = 0; rB < nc.length / 3; rB++) Tc = nc[3 * rB], fc = nc[3 * rB + 1], mB = nc[3 * rB + 2], ec = Math.sqrt(Tc * Tc + fc * fc + mB * mB), ec = 0 === ec ? 1 : ec, Tc /= ec, fc /= ec, mB /= ec, nc[3 * rB] = Tc, nc[3 * rB + 1] = fc, nc[3 * rB + 2] = mB
        }
        static _ComputeSides(Bc, nc, Vc, rB, uc, sc, Mc) {
          const Pc = Vc.length,
            qB = rB.length;
          let Oc, Tc;
          switch (Bc = Bc || cB.DEFAULTSIDE) {
            case cB.FRONTSIDE:
              break;
            case cB.BACKSIDE:
              for (Oc = 0; Oc < Pc; Oc += 3) {
                const cB = Vc[Oc];
                Vc[Oc] = Vc[Oc + 2], Vc[Oc + 2] = cB
              }
              for (Tc = 0; Tc < qB; Tc++) rB[Tc] = -rB[Tc];
              break;
            case cB.DOUBLESIDE: {
              const cB = nc.length,
                Bc = cB / 3;
              for (let Vc = 0; Vc < cB; Vc++) nc[cB + Vc] = nc[Vc];
              for (Oc = 0; Oc < Pc; Oc += 3) Vc[Oc + Pc] = Vc[Oc + 2] + Bc, Vc[Oc + 1 + Pc] = Vc[Oc + 1] + Bc, Vc[Oc + 2 + Pc] = Vc[Oc] + Bc;
              for (Tc = 0; Tc < qB; Tc++) rB[qB + Tc] = -rB[Tc];
              const fc = uc.length;
              let mB;
              for (mB = 0; mB < fc; mB++) uc[mB + fc] = uc[mB];
              for (sc = sc || new Ic.t(0, 0, 1, 1), Mc = Mc || new Ic.t(0, 0, 1, 1), mB = 0, Oc = 0; Oc < fc / 2; Oc++) uc[mB] = sc.x + (sc.z - sc.x) * uc[mB], uc[mB + 1] = sc.y + (sc.w - sc.y) * uc[mB + 1], uc[mB + fc] = Mc.x + (Mc.z - Mc.x) * uc[mB + fc], uc[mB + fc + 1] = Mc.y + (Mc.w - Mc.y) * uc[mB + fc + 1], mB += 2;
              break
            }
          }
        }
        static Parse(Bc) {
          const nc = new cB,
            Vc = Bc.positions;
          Vc && nc.set(Vc, rB.i.PositionKind);
          const Ic = Bc.normals;
          Ic && nc.set(Ic, rB.i.NormalKind);
          const uc = Bc.tangents;
          uc && nc.set(uc, rB.i.TangentKind);
          const Mc = Bc.uvs;
          Mc && nc.set(Mc, rB.i.UVKind);
          const Pc = Bc.uvs2;
          Pc && nc.set(Pc, rB.i.UV2Kind);
          const qB = Bc.uvs3;
          qB && nc.set(qB, rB.i.UV3Kind);
          const Oc = Bc.uvs4;
          Oc && nc.set(Oc, rB.i.UV4Kind);
          const Tc = Bc.uvs5;
          Tc && nc.set(Tc, rB.i.UV5Kind);
          const mB = Bc.uvs6;
          mB && nc.set(mB, rB.i.UV6Kind);
          const ec = Bc.colors;
          ec && (nc.set(sc.g.CheckColors4(ec, Vc.length / 3), rB.i.ColorKind), void 0 !== Bc.hasVertexAlpha && (nc.hasVertexAlpha = Bc.hasVertexAlpha));
          const tB = Bc.matricesIndices;
          tB && nc.set(tB, rB.i.MatricesIndicesKind);
          const Sc = Bc.matricesWeights;
          Sc && nc.set(Sc, rB.i.MatricesWeightsKind);
          const yB = Bc.indices;
          yB && (nc.indices = yB);
          const zB = Bc.materialInfos;
          if (zB) {
            nc.materialInfos = [];
            for (const cB of zB) {
              const Bc = new fc;
              Bc.indexCount = cB.indexCount, Bc.indexStart = cB.indexStart, Bc.verticesCount = cB.verticesCount, Bc.verticesStart = cB.verticesStart, Bc.materialIndex = cB.materialIndex, nc.materialInfos.push(Bc)
            }
          }
          return nc
        }
        static ImportVertexData(Bc, nc) {
          const Vc = cB.Parse(Bc);
          nc.setAllVerticesData(Vc, Bc.updatable)
        }
      }, (() => {
        const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [Pc.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], nc = [Pc.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], mB = [Pc.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ec = [Pc.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Vc.g)(cB, null, Bc, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: cB => "_TransformVector3Coordinates" in cB,
            get: cB => cB._TransformVector3Coordinates
          },
          metadata: Ic
        }, null, tB), (0, Vc.g)(cB, null, nc, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: cB => "_TransformVector3Normals" in cB,
            get: cB => cB._TransformVector3Normals
          },
          metadata: Ic
        }, null, tB), (0, Vc.g)(cB, null, mB, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: cB => "_TransformVector4Normals" in cB,
            get: cB => cB._TransformVector4Normals
          },
          metadata: Ic
        }, null, tB), (0, Vc.g)(cB, null, ec, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: cB => "_FlipFaces" in cB,
            get: cB => cB._FlipFaces
          },
          metadata: Ic
        }, null, tB), Ic && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ic
        })
      })(), cB.FRONTSIDE = ((0, Vc.k)(cB, tB), 0), cB.BACKSIDE = 1, cB.DOUBLESIDE = 2, cB.DEFAULTSIDE = 0, cB._UniqueIdGenerator = 0, cB
    })()
  },
  38497: (cB, Bc, nc) => {
    var Vc = nc(35756),
      Ic = nc(37191),
      rB = nc(38343),
      uc = nc(38425),
      sc = nc(38194);
    const Mc = "bakedVertexAnimationSettingsInstanced";

    function Pc(cB) {
      const Bc = cB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Bc instanceof Float32Array || Bc instanceof Uint16Array
    }

    function qB(cB, Bc, nc, Vc) {
      nc.orc(Number.POSITIVE_INFINITY), Vc.orc(Number.NEGATIVE_INFINITY);
      for (let Ic = 0; Ic < 3 * Bc; Ic += 3) {
        const Bc = cB[Ic],
          rB = cB[Ic + 1],
          uc = cB[Ic + 2];
        Bc < nc.x && (nc.x = Bc), rB < nc.y && (nc.y = rB), uc < nc.z && (nc.z = uc), Bc > Vc.x && (Vc.x = Bc), rB > Vc.y && (Vc.y = rB), uc > Vc.z && (Vc.z = uc)
      }
    }

    function Oc(cB, Bc, nc) {
      nc && (cB.x -= cB.x * nc.x + nc.y, cB.y -= cB.y * nc.x + nc.y, cB.z -= cB.z * nc.x + nc.y, Bc.x += Bc.x * nc.x + nc.y, Bc.y += Bc.y * nc.x + nc.y, Bc.z += Bc.z * nc.x + nc.y)
    }

    function Tc(cB, Bc, nc, Ic, rB) {
      const uc = Vc.i.KV[7],
        sc = Vc.i.KV[8];
      for (let Mc = 0; Mc < 2; ++Mc)
        for (let Pc = 0; Pc < 2; ++Pc)
          for (let qB = 0; qB < 2; ++qB) uc.set(Mc ? Bc.x : cB.x, Pc ? Bc.y : cB.y, qB ? Bc.z : cB.z), Vc.p.TransformCoordinatesToRef(uc, nc, sc), Ic.minimizeInPlace(sc), rB.maximizeInPlace(sc)
    }

    function fc(cB, Bc, nc, Ic, rB) {
      const uc = Vc.i.KV[7];
      for (let sc = 0; sc < 3 * Bc; sc += 3) Vc.p.TransformCoordinatesFromFloatsToRef(cB[sc], cB[sc + 1], cB[sc + 2], nc, uc), Ic.minimizeInPlace(uc), rB.maximizeInPlace(uc)
    }
    let mB = !1;
    mB || (mB = !0, uc.b.prototype.thinInstanceAdd = function(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.knc().RV().getCaps().instancedArrays) return Ic.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(cB) ? cB.length : 1);
      const nc = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(cB))
        for (let Vc = 0; Vc < cB.length; ++Vc) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, cB[Vc], Vc === cB.length - 1 && Bc);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, cB, Bc);
      return nc
    }, uc.b.prototype.thinInstanceAddSelf = function() {
      let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Vc.d.IdentityReadOnly, cB)
    }, uc.b.prototype.thinInstanceRegisterAttribute = function(cB, Bc) {
      cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), this.removeVerticesData(cB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[cB] = Bc, this._userThinInstanceBuffersStorage.sizes[cB] = Bc * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[cB] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[cB]), this._userThinInstanceBuffersStorage.vertexBuffers[cB] = new sc.i(this.RV(), this._userThinInstanceBuffersStorage.data[cB], cB, !0, !1, Bc, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[cB])
    }, uc.b.prototype.thinInstanceSetMatrixAt = function(cB, Bc) {
      let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || cB >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Vc = this._thinInstanceDataStorage.matrixData;
      return Bc.copyToArray(Vc, 16 * cB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[cB] = Bc), nc && (this.Iuc("matrix"), this.dV || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, uc.b.prototype.thinInstanceSetAttributeAt = function(cB, Bc, nc) {
      let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[cB] || Bc >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(cB, 0), this._userThinInstanceBuffersStorage.data[cB].set(nc, Bc * this._userThinInstanceBuffersStorage.strides[cB]), Vc && this.Iuc(cB), !0)
    }, Object.defineProperty(uc.b.prototype, "Jrc", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(cB) {
        const Bc = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        cB <= (Bc ? Bc.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = cB)
      },
      enumerable: !0,
      configurable: !0
    }), uc.b.prototype._thinInstanceCreateMatrixBuffer = function(cB, Bc) {
      let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Vc = new sc.b(this.RV(), Bc, !nc, 16, !1, !0);
      for (let Ic = 0; Ic < 4; Ic++) this.setVerticesBuffer(Vc.createVertexBuffer(cB + Ic, 4 * Ic, 4));
      return Vc
    }, uc.b.prototype.Ouc = function(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (nc = nc || 16, "matrix" === cB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Bc ? Bc.length : 32 * nc, this._thinInstanceDataStorage.matrixData = Bc, this._thinInstanceDataStorage.worldMatrices = null, null !== Bc ? (this._thinInstanceDataStorage.instancesCount = Bc.length / nc, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Bc, Vc), this.dV || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.dV || this.refreshBoundingInfo());
      else if ("previousMatrix" === cB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Bc, null !== Bc && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Bc, Vc));
      else if ("splatIndex" === cB && Bc) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Bc.length / nc, this._userThinInstanceBuffersStorage.data[cB] = Bc, this._userThinInstanceBuffersStorage.strides[cB] = nc, this._userThinInstanceBuffersStorage.sizes[cB] = Bc.length;
        const Vc = new sc.b(this.RV(), Bc, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Vc;
        for (let Bc = 0; Bc < 4; Bc++) this.setVerticesBuffer(Vc.createVertexBuffer(cB + Bc, 4 * Bc, 4))
      } else cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), null === Bc ? this._userThinInstanceBuffersStorage?.data[cB] && (this.removeVerticesData(cB), delete this._userThinInstanceBuffersStorage.data[cB], delete this._userThinInstanceBuffersStorage.strides[cB], delete this._userThinInstanceBuffersStorage.sizes[cB], delete this._userThinInstanceBuffersStorage.vertexBuffers[cB]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[cB] = Bc, this._userThinInstanceBuffersStorage.strides[cB] = nc, this._userThinInstanceBuffersStorage.sizes[cB] = Bc.length, this._userThinInstanceBuffersStorage.vertexBuffers[cB] = new sc.i(this.RV(), Bc, cB, !Vc, !1, nc, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[cB]))
    }, uc.b.prototype.Iuc = function(cB) {
      "matrix" === cB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(cB), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === cB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(cB), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === cB ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[cB], 0, this._thinInstanceDataStorage.instancesCount) : (cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[cB] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[cB].isUpdatable() && this._thinInstanceRecreateBuffer(cB), this._userThinInstanceBuffersStorage.vertexBuffers[cB].updateDirectly(this._userThinInstanceBuffersStorage.data[cB], 0)))
    }, uc.b.prototype.thinInstancePartialBufferUpdate = function(cB, Bc, nc) {
      if ("matrix" === cB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Bc ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * nc * Float32Array.BYTES_PER_ELEMENT, 16 * Bc), 16 * nc) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Bc, nc));
      else if (cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[cB]) {
        const Vc = this._userThinInstanceBuffersStorage.vertexBuffers[cB];
        if ("number" === typeof Bc) {
          const Vc = new Float32Array(this._userThinInstanceBuffersStorage.data[cB].buffer, this._userThinInstanceBuffersStorage.data[cB].byteOffset + nc * this._userThinInstanceBuffersStorage.strides[cB] * Float32Array.BYTES_PER_ELEMENT, Bc * this._userThinInstanceBuffersStorage.strides[cB]);
          this._userThinInstanceBuffersStorage.vertexBuffers[cB].updateDirectly(Vc, nc * this._userThinInstanceBuffersStorage.strides[cB])
        } else Vc.updateDirectly(Bc, nc)
      }
    }, uc.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const cB = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Bc = 0; Bc < this._thinInstanceDataStorage.instancesCount; ++Bc) this._thinInstanceDataStorage.worldMatrices[Bc] = Vc.d.FromArray(cB, 16 * Bc)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, uc.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const uc = this._thinInstanceDataStorage.boundingVectors;
      if (cB || !this.rawBoundingInfo) {
        if (uc.length = 0, Ic && function(cB, Bc, nc) {
            const Ic = cB._userThinInstanceBuffersStorage,
              uc = Ic?.data[Mc],
              mB = Ic?.strides[Mc];
            if (!uc || !mB || mB < 4 || !Pc(cB)) return !1;
            const ec = cB._thinInstanceDataStorage.matrixData;
            if (!ec) return !1;
            const tB = {},
              Sc = Vc.i.Vector4[0],
              yB = Vc.i.KV[1],
              zB = Vc.i.KV[2],
              pc = Vc.i.KV[3],
              hc = Vc.i.KV[4],
              aB = Vc.i.KV[5],
              lc = Vc.i.KV[6],
              Yc = Vc.i.Matrix[2],
              Lc = cB.geometry ? cB.geometry.boundingBias : null,
              gB = cB.getTotalVertices();
            yB.orc(Number.POSITIVE_INFINITY), zB.orc(Number.NEGATIVE_INFINITY), pc.orc(Number.POSITIVE_INFINITY), hc.orc(Number.NEGATIVE_INFINITY);
            for (let rB = 0; rB < cB._thinInstanceDataStorage.instancesCount; ++rB) {
              const Bc = rB * mB;
              Sc.set(uc[Bc], uc[Bc + 1], uc[Bc + 2], uc[Bc + 3]);
              const Ic = cB._getData({
                applyMorph: nc,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Sc,
                updatePositionsArray: !1,
                cache: tB
              }, null, sc.i.PositionKind);
              if (!Ic) return !1;
              qB(Ic, gB, aB, lc), Oc(aB, lc, Lc), yB.minimizeInPlace(aB), zB.maximizeInPlace(lc), Vc.d.FromArrayToRef(ec, 16 * rB, Yc), Lc ? Tc(aB, lc, Yc, pc, hc) : fc(Ic, gB, Yc, pc, hc)
            }
            return !(!isFinite(yB.x) || !isFinite(pc.x)) && (cB.qVc().reConstruct(pc, hc), cB.rawBoundingInfo = new rB.b(yB, zB), function(cB, Bc) {
              cB.length = 0;
              for (let nc = 0; nc < Bc.boundingBox.vectors.length; ++nc) cB.push(Bc.boundingBox.vectors[nc].clone())
            }(Bc, cB.rawBoundingInfo), cB._updateBoundingInfo(), !0)
          }(this, uc, nc)) return;
        Ic && this.bakedVertexAnimationManager?.isEnabled && Pc(this) ? this.refreshBoundingInfo({
          applySkeleton: Bc,
          applyMorph: nc,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Bc, nc);
        const cB = this.qVc();
        this.rawBoundingInfo = new rB.b(cB.minimum, cB.maximum)
      }
      const mB = this.qVc(),
        ec = this._thinInstanceDataStorage.matrixData;
      if (0 === uc.length)
        for (let Vc = 0; Vc < mB.boundingBox.vectors.length; ++Vc) uc.push(mB.boundingBox.vectors[Vc].clone());
      Vc.i.KV[0].orc(Number.POSITIVE_INFINITY), Vc.i.KV[1].orc(Number.NEGATIVE_INFINITY);
      for (let rB = 0; rB < this._thinInstanceDataStorage.instancesCount; ++rB) {
        Vc.d.FromArrayToRef(ec, 16 * rB, Vc.i.Matrix[0]);
        for (let cB = 0; cB < uc.length; ++cB) Vc.p.TransformCoordinatesToRef(uc[cB], Vc.i.Matrix[0], Vc.i.KV[2]), Vc.i.KV[0].minimizeInPlace(Vc.i.KV[2]), Vc.i.KV[1].maximizeInPlace(Vc.i.KV[2])
      }
      mB.reConstruct(Vc.i.KV[0], Vc.i.KV[1]), this._updateBoundingInfo()
    }, uc.b.prototype._thinInstanceRecreateBuffer = function(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === cB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Bc)) : "previousMatrix" === cB ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Bc)) : (cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[cB]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[cB] = new sc.i(this.RV(), this._userThinInstanceBuffersStorage.data[cB], cB, !Bc, !1, this._userThinInstanceBuffersStorage.strides[cB], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[cB]))
    }, uc.b.prototype._thinInstanceUpdateBufferSize = function(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      cB === sc.i.ColorKind && (cB = sc.i.ColorInstanceKind);
      const nc = "matrix" === cB;
      if (!nc && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[cB])) return;
      const Vc = nc ? 16 : this._userThinInstanceBuffersStorage.strides[cB],
        Ic = nc ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[cB];
      let rB = nc ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[cB];
      const uc = (this._thinInstanceDataStorage.instancesCount + Bc) * Vc;
      let Mc = Ic;
      for (; Mc < uc;) Mc *= 2;
      if (!rB || Ic != Mc) {
        if (rB) {
          const cB = new Float32Array(Mc);
          cB.set(rB, 0), rB = cB
        } else rB = new Float32Array(Mc);
        nc ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", rB, !1), this._thinInstanceDataStorage.matrixData = rB, this._thinInstanceDataStorage.matrixBufferSize = Mc, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", rB, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[cB]?.dispose(), this._userThinInstanceBuffersStorage.data[cB] = rB, this._userThinInstanceBuffersStorage.sizes[cB] = Mc, this._userThinInstanceBuffersStorage.vertexBuffers[cB] = new sc.i(this.RV(), rB, cB, !0, !1, Vc, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[cB]))
      }
    }, uc.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, uc.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  38459: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => yB,
      f: () => ec
    });
    var Vc, Ic, rB, uc, sc = nc(38035),
      Mc = nc(38043),
      Pc = nc(38068),
      qB = nc(35783),
      Oc = nc(35756),
      Tc = nc(38255),
      fc = nc(35799),
      mB = nc(37953);
    let ec = (() => {
      var cB;
      let Bc, nc, Vc, Ic, rB, uc, fc, mB, ec, tB = Tc.c,
        Sc = [],
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Lc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [];
      return cB = class extends tB {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Bc) {
          this._billboardMode !== Bc && (this._billboardMode = Bc, this._cache.useBillboardPosition = 0 !== (this._billboardMode & cB.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(cB) {
          this._infiniteDistance !== cB && (this._infiniteDistance = cB)
        }
        constructor(Bc) {
          let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Bc, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Oc.p(0, 0, 1), this._up = new Oc.p(0, 1, 0), this._right = new Oc.p(1, 0, 0), this._position = (0, sc.k)(this, Sc, Oc.p.Zero()), this._rotation = ((0, sc.k)(this, yB), (0, sc.k)(this, zB, Oc.p.Zero())), this._rotationQuaternion = ((0, sc.k)(this, pc), (0, sc.k)(this, hc, null)), this._scaling = ((0, sc.k)(this, aB), (0, sc.k)(this, lc, Oc.p.One())), this._transformToBoneReferal = ((0, sc.k)(this, Yc), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, sc.k)(this, Lc, cB.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, sc.k)(this, gB), (0, sc.k)(this, Uc, 1)), this._infiniteDistance = ((0, sc.k)(this, bB), (0, sc.k)(this, Zc, !1)), this.ignoreNonUniformScaling = ((0, sc.k)(this, Qc), (0, sc.k)(this, Cc, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, sc.k)(this, vB), (0, sc.k)(this, Dc, !1)), this._poseMatrix = ((0, sc.k)(this, Nc), null), this._localMatrix = Oc.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Oc.p.Zero(), this._absoluteScaling = Oc.p.Zero(), this._absoluteRotationQuaternion = Oc.f.Identity(), this._pivotMatrix = Oc.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new qB.c, this._nonUniformScaling = !1, nc && this.knc().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(cB) {
          this._position = cB, this._markAsDirtyInternal()
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
        set rotation(cB) {
          this._rotation = cB, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get Su() {
          return this._scaling
        }
        set Su(cB) {
          this._scaling = cB, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(cB) {
          this._rotationQuaternion = cB, cB && this._rotation.orc(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Oc.p.TransformNormalFromFloatsToRef(0, 0, this.knc().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Oc.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Oc.p.TransformNormalFromFloatsToRef(this.knc().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(cB) {
          return this._poseMatrix ? (this._poseMatrix.qqc(cB), this) : (this._poseMatrix = cB.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Oc.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Bc = this._cache;
          return this._billboardMode === Bc.billboardMode && this._billboardMode === cB.BILLBOARDMODE_NONE && (!Bc.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const cB = this._cache;
          cB.localMatrixUpdated = !1, cB.billboardMode = -1, cB.infiniteDistance = !1, cB.useBillboardPosition = !1
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
        setPreTransformMatrix(cB) {
          return this.setPivotMatrix(cB, !1)
        }
        setPivotMatrix(cB) {
          let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.qqc(cB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Bc, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Oc.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Bc = arguments.length > 1 ? arguments[1] : void 0,
            nc = arguments.length > 2 ? arguments[2] : void 0;
          const Vc = this.clone("Clone of " + (this.name || this.id), cB || this.parent, !0);
          Vc && nc && nc(this, Vc);
          for (const Ic of this.getChildTransformNodes(!0)) Ic.instantiateHierarchy(Vc, Bc, nc);
          return Vc
        }
        RBc() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return cB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.orc(0), this._rotationQuaternion = this._rotationQuaternion || Oc.f.Identity(), cB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = cB, this._absolutePosition.puc(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get ymc() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(cB) {
          if (!cB) return this;
          let Bc, nc, Vc;
          if (void 0 === cB.x) {
            if (arguments.length < 3) return this;
            Bc = arguments[0], nc = arguments[1], Vc = arguments[2]
          } else Bc = cB.x, nc = cB.y, Vc = cB.z;
          if (this.parent) {
            const cB = Oc.i.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(cB), Oc.p.TransformCoordinatesFromFloatsToRef(Bc, nc, Vc, cB, this.position)
          } else this.position.x = Bc, this.position.y = nc, this.position.z = Vc;
          return this._absolutePosition.qqc(cB), this
        }
        setPositionWithLocalVector(cB) {
          return this.computeWorldMatrix(), this.position = Oc.p.TransformNormal(cB, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const cB = Oc.i.Matrix[0];
          return this._localMatrix.invertToRef(cB), Oc.p.TransformNormal(this.position, cB)
        }
        locallyTranslate(cB) {
          return this.computeWorldMatrix(!0), this.position = Oc.p.TransformCoordinates(cB, this._localMatrix), this
        }
        lookAt(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const uc = cB._LookAtVectorCache,
            sc = 0 === rB ? this.position : this.getAbsolutePosition();
          if (Bc.subtractToRef(sc, uc), this.setDirection(uc, nc, Vc, Ic), 1 === rB && this.parent)
            if (this.rotationQuaternion) {
              const cB = Oc.i.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(cB);
              const Bc = Oc.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Bc), Bc.invert(), cB.multiplyToRef(Bc, cB), this.rotationQuaternion.fromRotationMatrix(cB)
            } else {
              const cB = Oc.i.Quaternion[0];
              Oc.f.FromEulerVectorToRef(this.rotation, cB);
              const Bc = Oc.i.Matrix[0];
              cB.toRotationMatrix(Bc);
              const nc = Oc.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(nc), nc.invert(), Bc.multiplyToRef(nc, Bc), cB.fromRotationMatrix(Bc), cB.toEulerAnglesToRef(this.rotation)
            } return this
        }
        fIc(cB) {
          const Bc = Oc.p.Zero();
          return this.getDirectionToRef(cB, Bc), Bc
        }
        getDirectionToRef(cB, Bc) {
          return Oc.p.TransformNormalToRef(cB, this.getWorldMatrix(), Bc), this
        }
        setDirection(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Ic = -Math.atan2(cB.z, cB.x) + Math.PI / 2,
            rB = Math.sqrt(cB.x * cB.x + cB.z * cB.z),
            uc = -Math.atan2(cB.y, rB);
          return this.rotationQuaternion ? Oc.f.RotationYawPitchRollToRef(Ic + Bc, uc + nc, Vc, this.rotationQuaternion) : (this.rotation.x = uc + nc, this.rotation.y = Ic + Bc, this.rotation.z = Vc), this
        }
        setPivotPoint(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.knc().getRenderId() && this.computeWorldMatrix(!0);
          const nc = this.getWorldMatrix();
          if (1 == Bc) {
            const Bc = Oc.i.Matrix[0];
            nc.invertToRef(Bc), cB = Oc.p.TransformCoordinates(cB, Bc)
          }
          return this.setPivotMatrix(Oc.d.Translation(-cB.x, -cB.y, -cB.z), !0)
        }
        getPivotPoint() {
          const cB = Oc.p.Zero();
          return this.getPivotPointToRef(cB), cB
        }
        getPivotPointToRef(cB) {
          return cB.x = -this._pivotMatrix.m[12], cB.y = -this._pivotMatrix.m[13], cB.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const cB = Oc.p.Zero();
          return this.getAbsolutePivotPointToRef(cB), cB
        }
        getAbsolutePivotPointToRef(cB) {
          return this.getPivotPointToRef(cB), Oc.p.TransformCoordinatesToRef(cB, this.getWorldMatrix(), cB), this
        }
        SMc(cB) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Bc of this._children) Bc.SMc(cB);
          return super.SMc(cB)
        }
        setParent(Bc) {
          let nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Bc && !this.parent) return this;
          const Ic = Oc.i.Quaternion[0],
            rB = Oc.i.KV[0],
            uc = Oc.i.KV[1],
            sc = Oc.i.Matrix[1];
          Oc.d.IdentityToRef(sc);
          const Mc = Oc.i.Matrix[0];
          this.computeWorldMatrix(!0);
          let Pc = this.rotationQuaternion;
          return Pc || (Pc = cB._TmpRotation, Oc.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Pc)), Oc.d.ComposeToRef(this.Su, Pc, this.position, Mc), this.parent && Mc.multiplyToRef(this.parent.computeWorldMatrix(!0), Mc), Bc && (Bc.computeWorldMatrix(!0).invertToRef(sc), Mc.multiplyToRef(sc, Mc)), Mc.decompose(uc, Ic, rB, nc ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.qqc(Ic) : Ic.toEulerAnglesToRef(this.rotation), this.Su.qqc(uc), this.position.qqc(rB), this.parent = Bc, Vc && this.setPivotMatrix(Oc.d.Identity()), this
        }
        addChild(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return cB.setParent(this, Bc), this
        }
        removeChild(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return cB.parent !== this || cB.setParent(null, Bc), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(cB) {
          return this._nonUniformScaling !== cB && (this._nonUniformScaling = cB, !0)
        }
        attachToBone(cB, Bc) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Bc, this.parent = cB, cB.getSkeleton().prepare(!0), cB.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = cB ? this._currentParentWhenAttachingToBone : null, this) : (cB && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Bc, nc, Vc) {
          let Ic;
          if (Bc.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.orc(0)), Vc && 0 !== Vc) {
            if (this.parent) {
              const cB = this.parent.getWorldMatrix(),
                Vc = Oc.i.Matrix[0];
              cB.invertToRef(Vc), Bc = Oc.p.TransformNormal(Bc, Vc), cB.determinant() < 0 && (nc *= -1)
            }
            Ic = Oc.f.RotationAxisToRef(Bc, nc, cB._RotationAxisCache), Ic.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Ic = Oc.f.RotationAxisToRef(Bc, nc, cB._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Ic, this.rotationQuaternion);
          return this
        }
        rotateAround(cB, Bc, nc) {
          Bc.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Oc.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.orc(0));
          const Vc = Oc.i.KV[0],
            Ic = Oc.i.KV[1],
            rB = Oc.i.KV[2],
            uc = Oc.i.Quaternion[0],
            sc = Oc.i.Matrix[0],
            Mc = Oc.i.Matrix[1],
            Pc = Oc.i.Matrix[2],
            qB = Oc.i.Matrix[3];
          return cB.subtractToRef(this.position, Vc), Oc.d.TranslationToRef(Vc.x, Vc.y, Vc.z, sc), Oc.d.TranslationToRef(-Vc.x, -Vc.y, -Vc.z, Mc), Oc.d.RotationAxisToRef(Bc, nc, Pc), Mc.multiplyToRef(Pc, qB), qB.multiplyToRef(sc, qB), qB.decompose(Ic, uc, rB), this.position.addInPlace(rB), uc.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(cB, Bc, nc) {
          const Vc = cB.scale(Bc);
          if (nc && 0 !== nc) this.setAbsolutePosition(this.getAbsolutePosition().add(Vc));
          else {
            const cB = this.getPositionExpressedInLocalSpace().add(Vc);
            this.setPositionWithLocalVector(cB)
          }
          return this
        }
        addRotation(cB, Bc, nc) {
          let Vc;
          this.rotationQuaternion ? Vc = this.rotationQuaternion : (Vc = Oc.i.Quaternion[1], Oc.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Vc));
          const Ic = Oc.i.Quaternion[0];
          return Oc.f.RotationYawPitchRollToRef(Bc, cB, nc, Ic), Vc.multiplyInPlace(Ic), this.rotationQuaternion || Vc.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== cB.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Vc = this.knc().getRenderId();
          if (!this._isDirty && !Bc && (this._currentRenderId === Vc || this.isSynchronized())) return this._currentRenderId = Vc, this._worldMatrix;
          nc = nc || this.knc().activeCamera, this._updateCache();
          const Ic = this._cache;
          Ic.pivotMatrixUpdated = !1, Ic.billboardMode = this.billboardMode, Ic.infiniteDistance = this.infiniteDistance, Ic.parent = this._parentNode, this._currentRenderId = Vc, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const rB = this._getEffectiveParent(),
            uc = cB._TmpScaling;
          let sc, Mc = this._position;
          if (this._infiniteDistance && !this.parent && nc) {
            const Bc = nc.getWorldMatrix().m;
            Mc = cB._TmpTranslation, Mc.puc(this._position.x + Bc[12], this._position.y + Bc[13], this._position.z + Bc[14])
          }
          if (uc.puc(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, sc = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Oc.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.puc(0, 0, 0))
            }
          } else sc = cB._TmpRotation, Oc.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, sc);
          if (this._usePivotMatrix) {
            const cB = Oc.i.Matrix[1];
            Oc.d.ScalingToRef(uc.x, uc.y, uc.z, cB);
            const Bc = Oc.i.Matrix[0];
            sc.toRotationMatrix(Bc), this._pivotMatrix.multiplyToRef(cB, Oc.i.Matrix[4]), Oc.i.Matrix[4].multiplyToRef(Bc, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Mc.x, Mc.y, Mc.z)
          } else Oc.d.ComposeToRef(uc, sc, Mc, this._localMatrix);
          if (rB && rB.getWorldMatrix) {
            if (Bc && rB.computeWorldMatrix(Bc), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const cB = this.parent;
                cB.getSkeleton().prepare(), cB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Oc.i.Matrix[7])
              } else Oc.i.Matrix[7].qqc(rB.getWorldMatrix());
              const Bc = Oc.i.KV[5],
                nc = Oc.i.KV[6],
                Vc = Oc.i.Quaternion[0];
              Oc.i.Matrix[7].decompose(nc, Vc, Bc), Oc.d.ScalingToRef(nc.x, nc.y, nc.z, Oc.i.Matrix[7]), Oc.i.Matrix[7].setTranslation(Bc), cB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Vc, Bc), this._localMatrix.setTranslation(Bc)), this._localMatrix.multiplyToRef(Oc.i.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const cB = this.parent;
              cB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(cB.getFinalMatrix(), Oc.i.Matrix[6]), Oc.i.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(rB.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.qqc(this._localMatrix);
          if (nc && this.billboardMode)
            if (Ic.useBillboardPosition) {
              const Bc = Oc.i.KV[0];
              this._worldMatrix.getTranslationToRef(Bc);
              const Vc = nc.globalPosition;
              this._worldMatrix.invertToRef(Oc.i.Matrix[1]);
              const Ic = Oc.i.KV[1];
              Oc.p.TransformCoordinatesToRef(Vc, Oc.i.Matrix[1], Ic), Ic.normalize();
              const rB = -Math.atan2(Ic.z, Ic.x) + Math.PI / 2,
                uc = Math.sqrt(Ic.x * Ic.x + Ic.z * Ic.z),
                sc = -Math.atan2(Ic.y, uc);
              if (Oc.f.RotationYawPitchRollToRef(rB, sc, 0, Oc.i.Quaternion[0]), (this.billboardMode & cB.BILLBOARDMODE_ALL) !== cB.BILLBOARDMODE_ALL) {
                const Bc = Oc.i.KV[1];
                Oc.i.Quaternion[0].toEulerAnglesToRef(Bc), (this.billboardMode & cB.BILLBOARDMODE_X) !== cB.BILLBOARDMODE_X && (Bc.x = 0), (this.billboardMode & cB.BILLBOARDMODE_Y) !== cB.BILLBOARDMODE_Y && (Bc.y = 0), (this.billboardMode & cB.BILLBOARDMODE_Z) !== cB.BILLBOARDMODE_Z && (Bc.z = 0), Oc.d.RotationYawPitchRollToRef(Bc.y, Bc.x, Bc.z, Oc.i.Matrix[0])
              } else Oc.d.FromQuaternionToRef(Oc.i.Quaternion[0], Oc.i.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Oc.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Oc.i.KV[0])
            } else {
              const Bc = Oc.i.KV[0];
              this._worldMatrix.getTranslationToRef(Bc), Oc.i.Matrix[1].qqc(nc.getViewMatrix());
              const Vc = this.knc().useRightHandedSystem;
              if (Vc && Oc.i.Matrix[1].multiplyToRef(cB._TmpRHRestore, Oc.i.Matrix[1]), Oc.i.Matrix[1].setTranslationFromFloats(0, 0, 0), Oc.i.Matrix[1].invertToRef(Oc.i.Matrix[0]), (this.billboardMode & cB.BILLBOARDMODE_ALL) !== cB.BILLBOARDMODE_ALL) {
                Oc.i.Matrix[0].decompose(void 0, Oc.i.Quaternion[0], void 0);
                const Bc = Oc.i.KV[1];
                Oc.i.Quaternion[0].toEulerAnglesToRef(Bc), (this.billboardMode & cB.BILLBOARDMODE_X) !== cB.BILLBOARDMODE_X && (Bc.x = 0), (this.billboardMode & cB.BILLBOARDMODE_Y) !== cB.BILLBOARDMODE_Y && (Bc.y = 0), (this.billboardMode & cB.BILLBOARDMODE_Z) !== cB.BILLBOARDMODE_Z && (Bc.z = 0), Vc && (Bc.y += Math.PI), Oc.d.RotationYawPitchRollToRef(Bc.y, Bc.x, Bc.z, Oc.i.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Oc.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Oc.i.KV[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : rB && rB._nonUniformScaling ? this._updateNonUniformScalingState(rB._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.puc(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Oc.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), cB) {
            const cB = this.getChildren();
            for (let Bc = 0; Bc < cB.length; ++Bc) {
              const nc = cB[Bc];
              if (nc) {
                nc.computeWorldMatrix();
                const cB = Oc.i.Matrix[0];
                nc._localMatrix.multiplyToRef(this._localMatrix, cB);
                const Bc = Oc.i.Quaternion[0];
                cB.decompose(nc.Su, Bc, nc.position), nc.rotationQuaternion ? nc.rotationQuaternion.qqc(Bc) : Bc.toEulerAnglesToRef(nc.rotation)
              }
            }
          }
          this.Su.puc(1, 1, 1), this.position.puc(0, 0, 0), this.rotation.puc(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Oc.f.Identity()), this._worldMatrix = Oc.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(cB) {
          return this.onAfterWorldMatrixUpdateObservable.add(cB), this
        }
        unregisterAfterWorldMatrixUpdate(cB) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(cB), this
        }
        getPositionInCameraSpace() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return cB || (cB = this.knc().activeCamera), Oc.p.TransformCoordinates(this.getAbsolutePosition(), cB.getViewMatrix())
        }
        getDistanceToCamera() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return cB || (cB = this.knc().activeCamera), this.getAbsolutePosition().subtract(cB.globalPosition).length()
        }
        clone(Bc, nc, Vc) {
          const Ic = Pc.e.Clone((() => new cB(Bc, this.knc())), this);
          if (Ic.name = Bc, Ic.id = Bc, nc && (Ic.parent = nc), !Vc) {
            const cB = this.getDescendants(!0);
            for (let nc = 0; nc < cB.length; nc++) {
              const Vc = cB[nc];
              Vc.clone && Vc.clone(Bc + "." + Vc.name, Ic)
            }
          }
          return Ic
        }
        serialize(cB) {
          const Bc = Pc.e.Serialize(this, cB);
          return Bc.type = this.getClassName(), Bc.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Bc), Bc.localMatrix = this.getPivotMatrix().KPc(), Bc.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Bc.RBc = !0), Pc.e.AppendSerializedAnimations(this, Bc), Bc.Iu = this.serializeAnimationRanges(), Bc
        }
        getChildTransformNodes(Bc, nc) {
          const Vc = [];
          return this._getDescendants(Vc, Bc, (Bc => (!nc || nc(Bc)) && Bc instanceof cB)), Vc
        }
        dispose(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.knc().stopAnimation(this), this.knc().removeTransformNode(this), this._parentContainer) {
            const cB = this._parentContainer.transformNodes.indexOf(this);
            cB > -1 && this._parentContainer.transformNodes.splice(cB, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), cB) {
            const cB = this.getChildTransformNodes(!0);
            for (const Bc of cB) Bc.parent = null, Bc.computeWorldMatrix(!0)
          }
          super.dispose(cB, Bc)
        }
        normalizeToUnitCube() {
          let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            nc = arguments.length > 2 ? arguments[2] : void 0,
            Vc = null,
            Ic = null;
          Bc && (this.rotationQuaternion ? (Ic = this.rotationQuaternion.clone(), this.rotationQuaternion.puc(0, 0, 0, 1)) : this.rotation && (Vc = this.rotation.clone(), this.rotation.puc(0, 0, 0)));
          const rB = this.getHierarchyBoundingVectors(cB, nc),
            uc = rB.max.subtract(rB.min),
            sc = Math.max(uc.x, uc.y, uc.z);
          if (0 === sc) return this;
          const Mc = 1 / sc;
          return this.Su.scaleInPlace(Mc), Bc && (this.rotationQuaternion && Ic ? this.rotationQuaternion.qqc(Ic) : this.rotation && Vc && this.rotation.qqc(Vc)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Pc = "function" === typeof Symbol && Symbol.metadata ? Object.create(tB[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Mc.L)("position")], nc = [(0, Mc.L)("rotation")], Vc = [(0, Mc.C)("rotationQuaternion")], Ic = [(0, Mc.L)("Su")], rB = [(0, Mc.M)("billboardMode")], uc = [(0, Mc.M)()], fc = [(0, Mc.M)("infiniteDistance")], mB = [(0, Mc.M)()], ec = [(0, Mc.M)()], (0, sc.g)(null, null, Bc, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: cB => "_position" in cB,
            get: cB => cB._position,
            set: (cB, Bc) => {
              cB._position = Bc
            }
          },
          metadata: Pc
        }, Sc, yB), (0, sc.g)(null, null, nc, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: cB => "_rotation" in cB,
            get: cB => cB._rotation,
            set: (cB, Bc) => {
              cB._rotation = Bc
            }
          },
          metadata: Pc
        }, zB, pc), (0, sc.g)(null, null, Vc, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: cB => "_rotationQuaternion" in cB,
            get: cB => cB._rotationQuaternion,
            set: (cB, Bc) => {
              cB._rotationQuaternion = Bc
            }
          },
          metadata: Pc
        }, hc, aB), (0, sc.g)(null, null, Ic, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: cB => "_scaling" in cB,
            get: cB => cB._scaling,
            set: (cB, Bc) => {
              cB._scaling = Bc
            }
          },
          metadata: Pc
        }, lc, Yc), (0, sc.g)(null, null, rB, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "_billboardMode" in cB,
            get: cB => cB._billboardMode,
            set: (cB, Bc) => {
              cB._billboardMode = Bc
            }
          },
          metadata: Pc
        }, Lc, gB), (0, sc.g)(null, null, uc, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: cB => "scalingDeterminant" in cB,
            get: cB => cB.scalingDeterminant,
            set: (cB, Bc) => {
              cB.scalingDeterminant = Bc
            }
          },
          metadata: Pc
        }, Uc, bB), (0, sc.g)(null, null, fc, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: cB => "_infiniteDistance" in cB,
            get: cB => cB._infiniteDistance,
            set: (cB, Bc) => {
              cB._infiniteDistance = Bc
            }
          },
          metadata: Pc
        }, Zc, Qc), (0, sc.g)(null, null, mB, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: cB => "ignoreNonUniformScaling" in cB,
            get: cB => cB.ignoreNonUniformScaling,
            set: (cB, Bc) => {
              cB.ignoreNonUniformScaling = Bc
            }
          },
          metadata: Pc
        }, Cc, vB), (0, sc.g)(null, null, ec, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: cB => "reIntegrateRotationIntoRotationQuaternion" in cB,
            get: cB => cB.reIntegrateRotationIntoRotationQuaternion,
            set: (cB, Bc) => {
              cB.reIntegrateRotationIntoRotationQuaternion = Bc
            }
          },
          metadata: Pc
        }, Dc, Nc), Pc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pc
        })
      })(), cB.BILLBOARDMODE_NONE = 0, cB.BILLBOARDMODE_X = 1, cB.BILLBOARDMODE_Y = 2, cB.BILLBOARDMODE_Z = 4, cB.BILLBOARDMODE_ALL = 7, cB.BILLBOARDMODE_USE_POSITION = 128, cB.BillboardUseParentOrientation = !1, cB._TmpRotation = Oc.f.Zero(), cB._TmpScaling = Oc.p.Zero(), cB._TmpTranslation = Oc.p.Zero(), cB._TmpRHRestore = Oc.d.Scaling(1, 1, -1), cB._LookAtVectorCache = new Oc.p(0, 0, 0), cB._RotationAxisCache = new Oc.f, cB
    })();

    function tB(cB, Bc, nc) {
      const Vc = Pc.e.Parse((() => new ec(cB.name, Bc)), cB, Bc, nc);
      if (cB.localMatrix ? Vc.setPreTransformMatrix(Oc.d.FromArray(cB.localMatrix)) : cB.pivotMatrix && Vc.setPivotMatrix(Oc.d.FromArray(cB.pivotMatrix)), Vc.jnc(cB.isEnabled), Vc._waitingParsedUniqueId = cB.uniqueId, void 0 !== cB.parentId && (Vc._waitingParentId = cB.parentId), void 0 !== cB.parentInstanceIndex && (Vc._waitingParentInstanceIndex = cB.parentInstanceIndex), cB.RBc && (Vc._waitingFreezeWorldMatrix = cB.RBc), cB.animations) {
        for (let Bc = 0; Bc < cB.animations.length; Bc++) {
          const nc = cB.animations[Bc],
            Ic = (0, fc.b)("BABYLON.Animation");
          Ic && Vc.animations.push(Ic.Parse(nc))
        }
        Tc.c.ParseAnimationRanges(Vc, cB, Bc)
      }
      return cB.autoAnimate && Bc.beginAnimation(Vc, cB.autoAnimateFrom, cB.autoAnimateTo, cB.autoAnimateLoop, cB.autoAnimateSpeed || 1), Vc
    }
    let Sc = !1;

    function yB() {
      Sc || (Sc = !0, ec.Parse = tB)
    }(Vc = ec.prototype).cIc ?? (Vc.cIc = (0, mB.h)("TransformNode", "cIc")), (Ic = ec.prototype).applyImpulse ?? (Ic.applyImpulse = (0, mB.h)("TransformNode", "applyImpulse")), (rB = ec.prototype).applyAngularImpulse ?? (rB.applyAngularImpulse = (0, mB.h)("TransformNode", "applyAngularImpulse")), (uc = ec.prototype).applyTorque ?? (uc.applyTorque = (0, mB.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(ec.prototype, "physicsBody") || Object.defineProperty(ec.prototype, "physicsBody", (0, mB.e)("TransformNode", "physicsBody"))
  },
  38428: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      try {
        const Vc = cB.next();
        Vc.done ? Bc(Vc) : Vc.value ? Vc.value.then((() => {
          Vc.value = void 0, Bc(Vc)
        }), nc) : Bc(Vc)
      } catch (Vc) {
        nc(Vc)
      }
    }

    function Ic() {
      let cB, Bc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (nc, Ic, rB) => {
        const uc = performance.now();
        void 0 === cB || uc - cB > Bc ? (cB = uc, setTimeout((() => {
          Vc(nc, Ic, rB)
        }), 0)) : Vc(nc, Ic, rB)
      }
    }

    function rB(cB, Bc, nc, Vc, Ic) {
      const rB = () => {
        let uc;
        const sc = cB => {
          cB.done ? nc(cB.value) : void 0 === uc ? uc = !0 : rB()
        };
        do {
          uc = void 0, Ic && Ic.aborted ? Vc(new Error("Aborted")) : Bc(cB, sc, Vc), void 0 === uc && (uc = !1)
        } while (uc)
      };
      rB()
    }

    function uc(cB, Bc) {
      let nc;
      return rB(cB, Vc, (cB => nc = cB), (cB => {
        throw cB
      }), Bc), nc
    }
    async function sc(cB, Bc, nc) {
      return await new Promise(((Vc, Ic) => {
        rB(cB, Bc, Vc, Ic, nc)
      }))
    }

    function Mc(cB, Bc) {
      return function() {
        return uc(cB(...arguments), Bc)
      }
    }
    nc.d(Bc, {
      b: () => Ic,
      d: () => Mc,
      f: () => sc,
      j: () => uc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);