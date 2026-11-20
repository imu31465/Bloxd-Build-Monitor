export const id = 243;
export const ids = [243];
export const modules = {
  39666: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ob,
      e: () => Kb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39573),
      Ub = hb(36753),
      Lb = hb(36727),
      Yb = hb(39670),
      Sb = hb(38302),
      ab = hb(36762),
      Hb = hb(39333),
      wb = hb(37699),
      Zb = hb(37390),
      Xb = hb(39421),
      pb = hb(39488);
    let ob = (() => {
      var bb;
      let ub, hb, ab, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb = Yb.b,
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [],
        mb = [],
        Ib = [],
        Pb = [],
        qb = [],
        Eb = [],
        yb = [],
        Vb = [],
        Fb = [],
        fb = [],
        kb = [],
        Tb = [],
        cb = [],
        Qb = [],
        Rb = [],
        bu = [],
        uu = [],
        hu = [],
        Bu = [],
        Ou = [];
      return bb = class extends vb {
        get position() {
          return this._position
        }
        set position(bb) {
          this._position = bb
        }
        set upVector(bb) {
          this._upVector = bb
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let ub, hb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) this.fovMode === bb.FOVMODE_VERTICAL_FIXED ? (hb = 2 * this.minZ * Math.tan(this.fov / 2), ub = this.UX().getAspectRatio(this) * hb) : (ub = 2 * this.minZ * Math.tan(this.fov / 2), hb = ub / this.UX().getAspectRatio(this));
          else {
            const bb = this.UX().getRenderWidth() / 2,
              Bb = this.UX().getRenderHeight() / 2;
            ub = (this.orthoRight ?? bb) - (this.orthoLeft ?? -bb), hb = (this.orthoTop ?? Bb) - (this.orthoBottom ?? -Bb)
          }
          return ub * hb
        }
        set orthoLeft(bb) {
          this._orthoLeft = bb;
          for (const ub of this._rigCameras) ub.orthoLeft = bb
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(bb) {
          this._orthoRight = bb;
          for (const ub of this._rigCameras) ub.orthoRight = bb
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(bb) {
          this._orthoBottom = bb;
          for (const ub of this._rigCameras) ub.orthoBottom = bb
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(bb) {
          this._orthoTop = bb;
          for (const ub of this._rigCameras) ub.orthoTop = bb
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(ub / (2 * bb))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(bb) {
          this._baseInertia = bb
        }
        set mode(bb) {
          this._mode = bb;
          for (const ub of this._rigCameras) ub.mode = bb
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(ub, hb, Ob) {
          let Yb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Xb.d)(), super(ub, Ob, !1), this.inputs = (0, Bb.k)(this, tb), this._position = (0, Bb.k)(this, Jb, Lb.q.Zero()), this._upVector = ((0, Bb.k)(this, eb), (0, Bb.k)(this, Nb, Lb.q.Up())), this.oblique = ((0, Bb.k)(this, sb), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Bb.k)(this, Mb, .8), this.projectionPlaneTilt = ((0, Bb.k)(this, mb), (0, Bb.k)(this, Ib, 0)), this.minZ = ((0, Bb.k)(this, Pb), (0, Bb.k)(this, qb, 1)), this.maxZ = ((0, Bb.k)(this, Eb), (0, Bb.k)(this, yb, 1e4)), this._baseInertia = ((0, Bb.k)(this, Vb), .9), this._mode = bb.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new wb.e(0, 0, 1, 1), this.layerMask = (0, Bb.k)(this, Fb, 268435455), this.fovMode = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, bb.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Bb.k)(this, Tb), (0, Bb.k)(this, cb, bb.RIG_MODE_NONE)), this.interaxialDistance = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, void 0)), this.isStereoscopicSideBySide = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, void 0)), this.ignoreCameraMaxZ = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, !1)), this.customRenderTargets = ((0, Bb.k)(this, Ou), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Ub.e, this.onProjectionMatrixChangedObservable = new Ub.e, this.onAfterCheckInputsObservable = new Ub.e, this.onRestoreStateObservable = new Ub.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Lb.d, this._postProcesses = new Array, this._activeMeshes = new Gb.h(256), this._globalPosition = Lb.q.Zero(), this._computedViewMatrix = Lb.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Lb.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Lb.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.ZN().defaultCameraLayerMask, this.ZN().addCamera(this), Yb && !this.ZN().activeCamera && (this.ZN().activeCamera = this), this.position = hb, this.renderPassId = this.ZN().UX().createRenderPassId(`Camera ${ub}`)
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
          return "Ko"
        }
        toString(bb) {
          let ub = "Name: " + this.name;
          if (ub += ", type: " + this.getClassName(), this.animations)
            for (let hb = 0; hb < this.animations.length; hb++) ub += ", animation[0]: " + this.animations[hb].toString(bb);
          return ub
        }
        applyVerticalCorrection() {
          const bb = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -bb.x : bb.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(bb) {
          return -1 !== this._activeMeshes.indexOf(bb)
        }
        isReady() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (bb)
            for (const ub of this._postProcesses)
              if (ub && !ub.isReady()) return !1;
          return super.isReady(bb)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Lb.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Lb.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(bb) {
          bb || super._updateCache(), this._cache.position.mD(this.position), this._cache.upVector.mD(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const ub = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let hb = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === ub;
          if (!hb) return !1;
          const Bb = this.UX();
          return this.mode === bb.PERSPECTIVE_CAMERA ? hb = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Bb.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (hb = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Bb.getRenderWidth() && this._cache.renderHeight === Bb.getRenderHeight(), this.oblique && (hb = hb && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), hb
        }
        attachControl(bb, ub) {}
        detachControl(bb) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== bb.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let bb = 0; bb < this._postProcesses.length; bb++)
            if (null !== this._postProcesses[bb]) return this._postProcesses[bb];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const bb = this._getFirstPostProcess();
          bb && bb.markTextureDirty();
          for (let ub = 0, hb = this._rigCameras.length; ub < hb; ub++) {
            const bb = this._rigCameras[ub],
              hb = bb._rigPostProcess;
            if (hb) {
              "pass" === hb.getEffectName() && (bb.isIntermediate = 0 === this._postProcesses.length), bb._postProcesses = this._postProcesses.slice(0).concat(hb), hb.markTextureDirty()
            } else bb._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !bb.isReusable() && this._postProcesses.indexOf(bb) > -1 ? (Sb.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == ub || ub < 0 ? this._postProcesses.push(bb) : null === this._postProcesses[ub] ? this._postProcesses[ub] = bb : this._postProcesses.splice(ub, 0, bb), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.yub(), this._postProcesses.indexOf(bb))
        }
        detachPostProcess(bb) {
          const ub = this._postProcesses.indexOf(bb); - 1 !== ub && (this._postProcesses[ub] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.yub(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Lb.d.Identity()
        }
        getViewMatrix(bb) {
          return !bb && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.ZN().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(bb) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== bb && (this._projectionMatrix = bb)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(ub) {
          if (this._doNotComputeProjectionMatrix || !ub && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const hb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = hb, this._refreshFrustumPlanes = !0;
          const Bb = this.UX(),
            Ob = this.ZN(),
            Gb = Bb.aBb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) {
            let ub;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Bb.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), ub = Ob.useRightHandedSystem ? Lb.d.PerspectiveFovRHToRef : Lb.d.PerspectiveFovLHToRef, ub(this.fov, Bb.getAspectRatio(this), Gb ? hb : this.minZ, Gb ? this.minZ : hb, this._projectionMatrix, this.fovMode === bb.FOVMODE_VERTICAL_FIXED, Bb.isNDCHalfZRange, this.projectionPlaneTilt, Gb)
          } else {
            const bb = Bb.getRenderWidth() / 2,
              ub = Bb.getRenderHeight() / 2;
            Ob.useRightHandedSystem ? this.oblique ? Lb.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ub, this.orthoTop ?? ub, Gb ? hb : this.minZ, Gb ? this.minZ : hb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Bb.isNDCHalfZRange) : Lb.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ub, this.orthoTop ?? ub, Gb ? hb : this.minZ, Gb ? this.minZ : hb, this._projectionMatrix, Bb.isNDCHalfZRange) : this.oblique ? Lb.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ub, this.orthoTop ?? ub, Gb ? hb : this.minZ, Gb ? this.minZ : hb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Bb.isNDCHalfZRange) : Lb.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ub, this.orthoTop ?? ub, Gb ? hb : this.minZ, Gb ? this.minZ : hb, this._projectionMatrix, Bb.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Bb.getRenderWidth(), this._cache.renderHeight = Bb.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(bb) {
          return (this.radius || (this.target ? Lb.q.Distance(this.position, this.target) : this.position.length())) + bb
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Zb.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Zb.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), ub && this.rigCameras.length > 0) {
            let ub = !1;
            for (const hb of this.rigCameras) hb._updateFrustumPlanes(), ub = ub || bb.isInFrustum(hb._frustumPlanes);
            return ub
          }
          return bb.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(bb) {
          return this._updateFrustumPlanes(), bb.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Hb.m)("Ray")
        }
        getForwardRayToRef(bb) {
          throw (0, Hb.m)("Ray")
        }
        dispose(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.ZN().stopAnimation(this), this.ZN().removeCamera(this); this._rigCameras.length > 0;) {
            const bb = this._rigCameras.pop();
            bb && bb.dispose()
          }
          if (this._parentContainer) {
            const bb = this._parentContainer.cameras.indexOf(this);
            bb > -1 && this._parentContainer.cameras.splice(bb, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== bb.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let bb = this._postProcesses.length;
            for (; --bb >= 0;) {
              const ub = this._postProcesses[bb];
              ub && ub.dispose(this)
            }
          }
          let Bb = this.customRenderTargets.length;
          for (; --Bb >= 0;) this.customRenderTargets[Bb].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.ZN().UX().releaseRenderPassId(this.renderPassId), super.dispose(ub, hb)
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
        setCameraRigMode(ub, hb) {
          if (this.cameraRigMode !== ub) {
            for (; this._rigCameras.length > 0;) {
              const bb = this._rigCameras.pop();
              bb && bb.dispose()
            }
            if (this.cameraRigMode = ub, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = hb.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== bb.RIG_MODE_NONE) {
              const bb = this.createRigCamera(this.name + "_L", 0);
              bb && (bb._isLeftCamera = !0);
              const ub = this.createRigCamera(this.name + "_R", 1);
              ub && (ub._isRightCamera = !0), bb && ub && (this._rigCameras.push(bb), this._rigCameras.push(ub))
            }
            this._setRigMode(hb), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(bb) {}
        _getVRProjectionMatrix() {
          return Lb.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.UX().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(bb, ub) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[bb] = ub, "interaxialDistance" === bb && (this._cameraRigParams.stereoHalfAngle = ub / .0637 * (Math.PI / 180))
        }
        createRigCamera(bb, ub) {
          return null
        }
        _updateRigCameras() {
          for (let bb = 0; bb < this._rigCameras.length; bb++) this._rigCameras[bb].minZ = this.minZ, this._rigCameras[bb].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[bb].fov = this.fov, this._rigCameras[bb].upVector.mD(this.upVector);
          this.cameraRigMode === bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const bb = pb.c.Serialize(this);
          return bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), this.parent && this.parent._serializeAsParent(bb), this.inputs && this.inputs.serialize(bb), pb.c.AppendSerializedAnimations(this, bb), bb.tp = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        clone(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Bb = pb.c.Clone(bb.GetConstructorFromName(this.getClassName(), ub, this.ZN(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Bb.name = ub, Bb.parent = hb, this.onClonedObservable.notifyObservers(Bb), Bb
        }
        Zk(bb) {
          const ub = Lb.q.Zero();
          return this.getDirectionToRef(bb, ub), ub
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(bb, ub) {
          Lb.q.TransformNormalToRef(bb, this.getWorldMatrix(), ub)
        }
        static GetConstructorFromName(ub, hb, Bb) {
          let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Gb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Ub = Yb.b.Construct(ub, hb, Bb, {
            interaxial_distance: Ob,
            isStereoscopicSideBySide: Gb
          });
          return Ub || (() => bb._CreateDefaultParsedCamera(hb, Bb))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let bb = this.ZN().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (bb *= -1), bb
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(vb[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Ob.H)("position")], hb = [(0, Ob.H)("upVector")], ab = [(0, Ob.K)()], ob = [(0, Ob.K)()], Ab = [(0, Ob.K)()], lb = [(0, Ob.K)()], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)()], rb = [(0, Ob.K)()], jb = [(0, Ob.K)()], nb = [(0, Ob.K)()], Db = [(0, Ob.K)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], ib = [(0, Ob.K)()], (0, Bb.h)(bb, null, ab, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoLeft" in bb,
            get: bb => bb.orthoLeft
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(bb, null, ob, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoRight" in bb,
            get: bb => bb.orthoRight
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(bb, null, Ab, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoBottom" in bb,
            get: bb => bb.orthoBottom
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(bb, null, lb, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoTop" in bb,
            get: bb => bb.orthoTop
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(bb, null, rb, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: bb => "inertia" in bb,
            get: bb => bb.inertia
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(bb, null, jb, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: bb => "mode" in bb,
            get: bb => bb.mode
          },
          metadata: Gb
        }, null, tb), (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, ub) => {
              bb._position = ub
            }
          },
          metadata: Gb
        }, Jb, eb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: bb => "_upVector" in bb,
            get: bb => bb._upVector,
            set: (bb, ub) => {
              bb._upVector = ub
            }
          },
          metadata: Gb
        }, Nb, sb), (0, Bb.h)(null, null, Kb, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: bb => "fov" in bb,
            get: bb => bb.fov,
            set: (bb, ub) => {
              bb.fov = ub
            }
          },
          metadata: Gb
        }, Mb, mb), (0, Bb.h)(null, null, Wb, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: bb => "projectionPlaneTilt" in bb,
            get: bb => bb.projectionPlaneTilt,
            set: (bb, ub) => {
              bb.projectionPlaneTilt = ub
            }
          },
          metadata: Gb
        }, Ib, Pb), (0, Bb.h)(null, null, Cb, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "minZ" in bb,
            get: bb => bb.minZ,
            set: (bb, ub) => {
              bb.minZ = ub
            }
          },
          metadata: Gb
        }, qb, Eb), (0, Bb.h)(null, null, db, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxZ" in bb,
            get: bb => bb.maxZ,
            set: (bb, ub) => {
              bb.maxZ = ub
            }
          },
          metadata: Gb
        }, yb, Vb), (0, Bb.h)(null, null, nb, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "layerMask" in bb,
            get: bb => bb.layerMask,
            set: (bb, ub) => {
              bb.layerMask = ub
            }
          },
          metadata: Gb
        }, Fb, fb), (0, Bb.h)(null, null, Db, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fovMode" in bb,
            get: bb => bb.fovMode,
            set: (bb, ub) => {
              bb.fovMode = ub
            }
          },
          metadata: Gb
        }, kb, Tb), (0, Bb.h)(null, null, xb, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraRigMode" in bb,
            get: bb => bb.cameraRigMode,
            set: (bb, ub) => {
              bb.cameraRigMode = ub
            }
          },
          metadata: Gb
        }, cb, Qb), (0, Bb.h)(null, null, zb, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "interaxialDistance" in bb,
            get: bb => bb.interaxialDistance,
            set: (bb, ub) => {
              bb.interaxialDistance = ub
            }
          },
          metadata: Gb
        }, Rb, bu), (0, Bb.h)(null, null, gb, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: bb => "isStereoscopicSideBySide" in bb,
            get: bb => bb.isStereoscopicSideBySide,
            set: (bb, ub) => {
              bb.isStereoscopicSideBySide = ub
            }
          },
          metadata: Gb
        }, uu, hu), (0, Bb.h)(null, null, ib, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreCameraMaxZ" in bb,
            get: bb => bb.ignoreCameraMaxZ,
            set: (bb, ub) => {
              bb.ignoreCameraMaxZ = ub
            }
          },
          metadata: Gb
        }, Bu, Ou), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb._CreateDefaultParsedCamera = (bb, ub) => {
        throw (0, Hb.m)("UniversalCamera")
      }, bb.PERSPECTIVE_CAMERA = 0, bb.ORTHOGRAPHIC_CAMERA = 1, bb.FOVMODE_VERTICAL_FIXED = 0, bb.FOVMODE_HORIZONTAL_FIXED = 1, bb.RIG_MODE_NONE = 0, bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, bb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, bb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, bb.RIG_MODE_VR = 20, bb.RIG_MODE_CUSTOM = 22, bb.ForceAttachControlToAlwaysPreventDefault = !1, bb
    })();

    function Ab(bb, ub) {
      const hb = bb.type,
        Bb = ob.GetConstructorFromName(hb, bb.name, ub, bb.interaxial_distance, bb.isStereoscopicSideBySide),
        Ob = pb.c.Parse(Bb, bb, ub);
      if (void 0 !== bb.parentId && (Ob._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Ob._waitingParentInstanceIndex = bb.parentInstanceIndex), Ob.inputs && (Ob.inputs.parse(bb), Ob._setupInputs()), bb.upVector && (Ob.upVector = Lb.q.FromArray(bb.upVector)), Ob.setPosition && (Ob.position.M_(0, 0, 0), Ob.setPosition(Lb.q.FromArray(bb.position))), bb.target && Ob.setTarget && Ob.setTarget(Lb.q.FromArray(bb.target)), bb.cameraRigMode) {
        const ub = bb.interaxial_distance ? {
          interaxialDistance: bb.interaxial_distance
        } : {};
        Ob.setCameraRigMode(bb.cameraRigMode, ub)
      }
      if (bb.animations) {
        for (let ub = 0; ub < bb.animations.length; ub++) {
          const hb = bb.animations[ub],
            Bb = (0, ab.d)("BABYLON.Animation");
          Bb && Ob.animations.push(Bb.Parse(hb))
        }
        Yb.b.ParseAnimationRanges(Ob, bb, ub)
      }
      return bb.autoAnimate && ub.beginAnimation(Ob, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), void 0 !== bb.isEnabled && Ob.Zx(bb.isEnabled), Ob
    }
    let lb = !1;

    function Kb() {
      lb || (lb = !0, ob.Parse = Ab)
    }
  },
  39676: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb) {
        this._cameraPosition = ub, this._behavior = hb, this.activeInput = !1, this.speed = 1, this.zV = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Bb.q, this.rotationAccumulatedPixels = new Bb.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Bb.q.Zero(), this.rotationDeltaCurrentFrame = Bb.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new Bb.q, this.referenceFrameRate = 60, this._rotationVelocity = new Bb.q, this._prevFrameTimeMs = 0, this._scene = bb
      }
      computeCurrentFrameDeltas() {
        const bb = this._scene.UX().getDeltaTime(),
          ub = this._getEffectiveDeltaMs(bb);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.N9(0), this.rotationDeltaCurrentFrame.N9(0), this.zoomDeltaCurrentFrame = 0, void(bb > 0 && (this._prevFrameTimeMs = bb));
        this.panDeltaCurrentFrame.N9(0), this.rotationDeltaCurrentFrame.N9(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.M_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * ub, this.panDeltaCurrentFrame), this._rotationVelocity.M_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.M_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * ub, this._rotationVelocity.y * this.speed * this.rotationYSpeed * ub, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.zV * this._zoomSpeedMultiplier) * ub, bb > 0 && (this._prevFrameTimeMs = bb), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.N9(0), this.rotationAccumulatedPixels.N9(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.N9(0), this.rotationAccumulatedPixels.N9(0)
      }
      resetPanVelocity() {
        this._panVelocity.N9(0), this.panAccumulatedPixels.N9(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(bb) {
        const ub = this._scene.UX().getDeltaTime(),
          hb = this._getEffectiveDeltaMs(ub),
          Bb = 1e3 / this.referenceFrameRate;
        return Math.pow(bb, hb / Bb)
      }
      getFrameIndependentInputScale(bb) {
        const ub = 1 - bb;
        if (ub <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(bb)) / ub
      }
      _getEffectiveDeltaMs(bb) {
        return bb > 0 ? bb : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(bb, ub, hb) {
        let Bb = bb;
        const Ob = this._scene.UX().getDeltaTime(),
          Gb = this._getEffectiveDeltaMs(Ob);
        if (0 === Gb) return Bb;
        const Ub = this.getFrameIndependentDecay(hb);
        if (Bb *= Ub, 0 !== ub || this.activeInput) {
          const bb = 1 - hb;
          Bb += ub / Gb * (bb > 0 ? (1 - Ub) / bb : 1)
        } else Math.abs(Bb) < 1e-6 && (Bb = 0);
        return Bb
      }
    }
  },
  39684: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor(bb, ub) {
        this.inputMap = [], this.handlers = bb, this._createDefaultEntries = ub, this.resetInputMap()
      }
      resolveInteraction(bb, ub) {
        for (const hb of this.inputMap)
          if (hb.source === bb && this._entryMatches(hb, ub)) return hb;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(bb, ub, hb) {
        const Bb = this.inputMap;
        for (let Ob = 0; Ob < Bb.length; Ob++) {
          const Gb = Bb[Ob];
          if (Gb.source === bb && Gb.interaction === ub && this._entryConditionsMatch(Gb, hb)) return Gb
        }
      }
      getEntries(bb, ub, hb) {
        const Bb = [],
          Ob = this.inputMap;
        for (let Gb = 0; Gb < Ob.length; Gb++) {
          const Ub = Ob[Gb];
          Ub.source === bb && Ub.interaction === ub && this._entryConditionsMatch(Ub, hb) && Bb.push(Ub)
        }
        return Bb
      }
      addEntry(bb) {
        const ub = this._entrySpecificity(bb);
        let hb = this.inputMap.length;
        for (let Bb = 0; Bb < this.inputMap.length; Bb++)
          if (this._entrySpecificity(this.inputMap[Bb]) < ub) {
            hb = Bb;
            break
          } this.inputMap.splice(hb, 0, bb)
      }
      setInteraction(bb, ub, hb) {
        const Bb = this.resolveInteraction(bb, ub);
        return Bb && this._entryCoversAllConditionsOf(Bb, ub) ? (Bb.interaction = hb, !0) : (this.addEntry({
          source: bb,
          ...ub ?? {},
          interaction: hb
        }), !0)
      }
      _entryCoversAllConditionsOf(bb, ub) {
        if (!ub) return !0;
        const hb = bb;
        for (const Bb of Object.keys(ub)) {
          const bb = ub[Bb];
          if (void 0 !== bb)
            if ("modifiers" === Bb) {
              const ub = hb.modifiers ?? {};
              for (const hb of Object.keys(bb))
                if (void 0 !== bb[hb] && void 0 === ub[hb]) return !1
            } else if (void 0 === hb[Bb]) return !1
        }
        return !0
      }
      setInteractions(bb, ub, hb) {
        let Bb = 0;
        const Ob = this.inputMap;
        for (let Gb = 0; Gb < Ob.length; Gb++) {
          const Ub = Ob[Gb];
          Ub.source === bb && this._entryMatches(Ub, ub) && (Ub.interaction = hb, Bb++)
        }
        return Bb
      }
      _entryMatches(bb, ub) {
        switch (bb.source) {
          case "pointer":
            return (void 0 === bb.button || bb.button === ub?.button) && this._matchModifiers(bb.modifiers, ub?.modifiers);
          case "wheel":
            return this._matchModifiers(bb.modifiers, ub?.modifiers);
          case "touch":
            return void 0 === bb.touchCount || bb.touchCount === ub?.touchCount;
          case "keyboard":
            return (void 0 === bb.key || (Array.isArray(bb.key) ? -1 !== bb.key.indexOf(ub?.key ?? -1) : bb.key === ub?.key)) && this._matchModifiers(bb.modifiers, ub?.modifiers)
        }
      }
      _entryConditionsMatch(bb, ub) {
        if (!ub) return !0;
        switch (bb.source) {
          case "pointer":
            return (!("button" in ub) || bb.button === ub.button) && (!("modifiers" in ub) || this._entryModifiersMatch(bb.modifiers, ub.modifiers));
          case "wheel":
            return !("modifiers" in ub) || this._entryModifiersMatch(bb.modifiers, ub.modifiers);
          case "touch":
            return !("touchCount" in ub) || bb.touchCount === ub.touchCount;
          case "keyboard":
            if ("key" in ub) {
              if (void 0 === bb.key) return void 0 === ub.key;
              if (void 0 === ub.key || (Array.isArray(bb.key) ? -1 === bb.key.indexOf(ub.key) : bb.key !== ub.key)) return !1
            }
            return !("modifiers" in ub) || this._entryModifiersMatch(bb.modifiers, ub.modifiers)
        }
      }
      _entrySpecificity(bb) {
        let ub = 0;
        return "button" in bb && void 0 !== bb.button && ub++, "key" in bb && void 0 !== bb.key && ub++, "touchCount" in bb && void 0 !== bb.touchCount && ub++, "modifiers" in bb && bb.modifiers && ub++, ub
      }
      _matchModifiers(bb, ub) {
        return !bb || (void 0 === bb.ctrl || bb.ctrl === (ub?.ctrl ?? !1)) && ((void 0 === bb.shift || bb.shift === (ub?.shift ?? !1)) && (void 0 === bb.alt || bb.alt === (ub?.alt ?? !1)))
      }
      _entryModifiersMatch(bb, ub) {
        if (!ub) return !bb;
        return void 0 !== ub.ctrl || void 0 !== ub.shift || void 0 !== ub.alt ? (void 0 === ub.ctrl || bb?.ctrl === ub.ctrl) && ((void 0 === ub.shift || bb?.shift === ub.shift) && (void 0 === ub.alt || bb?.alt === ub.alt)) : !bb || void 0 === bb.ctrl && void 0 === bb.shift && void 0 === bb.alt
      }
    }
  },
  39663: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ab,
      d: () => pb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39666),
      Ub = hb(36727),
      Lb = hb(36734),
      Yb = hb(39672),
      Sb = hb(39670),
      ab = hb(39676),
      Hb = hb(39684);
    class wb extends ab.d {
      constructor(bb, ub, hb) {
        super(bb, ub, hb), this.input = new Hb.e({
          translate: (bb, ub, hb) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += ub, this.panAccumulatedPixels.z += hb
          },
          rotate: (bb, ub) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += ub
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
    const Zb = Ub.d.Zero(),
      Xb = Ub.f.Identity();
    let pb = (() => {
        var bb;
        let ub, hb, Sb, ab, Hb = Gb.d,
          pb = [],
          ob = [],
          Ab = [],
          lb = [],
          Kb = [],
          Wb = [],
          Cb = [],
          db = [];
        return bb = class extends Hb {
          get inertia() {
            return this._targetInertia
          }
          set inertia(bb) {
            this._targetInertia = bb, this.movement && (this.movement.panInertia = bb, this.movement.rotationInertia = bb)
          }
          constructor(bb, ub, hb) {
            super(bb, ub, hb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Ub.q(0, 0, 0), this.cameraRotation = new Ub.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Bb.k)(this, pb, !1), this.rotation = ((0, Bb.k)(this, ob), (0, Bb.k)(this, Ab, void 0)), this.rotationQuaternion = (0, Bb.k)(this, lb), this.speed = (0, Bb.k)(this, Kb, 2), this.noRotationConstraint = ((0, Bb.k)(this, Wb), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Lb.b, this._rotationEpsilon = Lb.b, this.lockedTarget = (0, Bb.k)(this, Cb, null), this._currentTarget = ((0, Bb.k)(this, db), Ub.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Ub.d.Zero(), this._cameraTransformMatrix = Ub.d.Zero(), this._cameraRotationMatrix = Ub.d.Zero(), this._transformedReferencePoint = Ub.q.Zero(), this._deferredPositionUpdate = new Ub.q, this._deferredRotationQuaternionUpdate = new Ub.f, this._deferredRotationUpdate = new Ub.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Ub.q.Forward(this.ZN().useRightHandedSystem), this.rotation = new Ub.q(0, this.ZN().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new wb(this.ZN(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(bb) {
            this.getWorldMatrix();
            const ub = Ub.i.YX[0],
              hb = Ub.i.YX[1];
            return hb.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(hb, ub), ub.scaleInPlace(bb), this.globalPosition.add(ub)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const bb = this.lockedTarget;
              bb.computeWorldMatrix().getTranslationToRef(bb.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.M_(0, 0, 0), this.cameraRotation.M_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Ub.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Ub.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Ub.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(bb) {
            bb || super._updateCache();
            const ub = this._getLockedTargetPosition();
            ub ? this._cache.lockedTarget ? this._cache.lockedTarget.mD(ub) : this._cache.lockedTarget = ub.clone() : this._cache.lockedTarget = null, this._cache.rotation.mD(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.mD(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const bb = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(bb) : !bb) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const bb = this.UX();
            return this.speed * Math.sqrt(bb.getDeltaTime() / (100 * bb.getFps()))
          }
          setTarget(bb) {
            this.upVector.normalize(), this._initialFocalDistance = bb.subtract(this.position).length(), this.position.z === bb.z && (this.position.z += Lb.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.ZN().useRightHandedSystem ? Ub.d.LookAtRHToRef(this.position, bb, Ub.q.UpReadOnly, Zb) : Ub.d.LookAtLHToRef(this.position, bb, Ub.q.UpReadOnly, Zb), Zb.invert();
            const ub = this.rotationQuaternion || Xb;
            Ub.f.FromRotationMatrixToRef(Zb, ub), ub.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(bb) {
            this.setTarget(bb)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Ub.i.Matrix[0]), Ub.q.TransformNormalToRef(this.cameraDirection, Ub.i.Matrix[0], Ub.i.YX[0]), this._deferredPositionUpdate.addInPlace(Ub.i.YX[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.mD(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.mD(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const bb = this.movement,
              ub = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            bb.panAccumulatedPixels.addInPlace(this.cameraDirection), bb.rotationAccumulatedPixels.x += this.cameraRotation.x, bb.rotationAccumulatedPixels.y += this.cameraRotation.y, bb.computeCurrentFrameDeltas(), this.cameraDirection.mD(bb.panDeltaCurrentFrame), this.cameraRotation.set(bb.rotationDeltaCurrentFrame.x, bb.rotationDeltaCurrentFrame.y);
            const hb = this.speed * this._panningEpsilon;
            !ub && Math.abs(this.cameraDirection.x) < hb && Math.abs(this.cameraDirection.y) < hb && Math.abs(this.cameraDirection.z) < hb && (this.cameraDirection.N9(0), bb.resetPanVelocity());
            const Bb = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Ob = this._decideIfNeedsToMove(),
              Gb = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.mD(this.rotation), this._deferredPositionUpdate.mD(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.mD(this.rotationQuaternion), Ob && this._updatePosition(), Gb) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Bb, this._deferredRotationUpdate.y += this.cameraRotation.y * Bb, !this.noRotationConstraint) {
                const bb = 1.570796;
                this._deferredRotationUpdate.x > bb && (this._deferredRotationUpdate.x = bb), this._deferredRotationUpdate.x < -bb && (this._deferredRotationUpdate.x = -bb)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.mD(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Ub.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.mD(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.N9(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Ub.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Ub.q.TransformNormalToRef(Ub.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Ub.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Yb.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Ub.f.FromEulerVectorToRef(this.rotation, Xb), Yb.e.Y.rotateByQuaternionToRef(Xb, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(bb, ub, hb) {
            if (this.ZN().useRightHandedSystem ? Ub.d.LookAtRHToRef(bb, ub, hb, this._viewMatrix) : Ub.d.LookAtLHToRef(bb, ub, hb, this._viewMatrix), this.parent) {
              const bb = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(bb, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(ub, hb) {
            if (this.cameraRigMode !== Gb.d.RIG_MODE_NONE) {
              const hb = new bb(ub, this.position.clone(), this.ZN());
              return hb.isRigCamera = !0, hb.rigParent = this, this.cameraRigMode === Gb.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Ub.f), hb._cameraRigParams = {}, hb.rotationQuaternion = new Ub.f), hb.mode = this.mode, hb.orthoLeft = this.orthoLeft, hb.orthoRight = this.orthoRight, hb.orthoTop = this.orthoTop, hb.orthoBottom = this.orthoBottom, hb
            }
            return null
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              ub = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Gb.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Gb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Gb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Gb.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Gb.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const hb = this.cameraRigMode === Gb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Bb = this.cameraRigMode === Gb.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * hb, bb), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Bb, ub);
                break
              }
              case Gb.d.RIG_MODE_VR:
                bb.rotationQuaternion && ub.rotationQuaternion && this.rotationQuaternion ? (bb.rotationQuaternion.mD(this.rotationQuaternion), ub.rotationQuaternion.mD(this.rotationQuaternion)) : (bb.rotation.mD(this.rotation), ub.rotation.mD(this.rotation)), bb.position.mD(this.position), ub.position.mD(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(ub, hb) {
            this.getTarget().subtractToRef(this.position, bb._TargetFocalPoint), bb._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Bb = bb._TargetFocalPoint.addInPlace(this.position);
            Ub.d.TranslationToRef(-Bb.x, -Bb.y, -Bb.z, bb._TargetTransformMatrix), bb._TargetTransformMatrix.multiplyToRef(Ub.d.RotationAxis(hb.upVector, ub), bb._RigCamTransformMatrix), Ub.d.TranslationToRef(Bb.x, Bb.y, Bb.z, bb._TargetTransformMatrix), bb._RigCamTransformMatrix.multiplyToRef(bb._TargetTransformMatrix, bb._RigCamTransformMatrix), Ub.q.TransformCoordinatesToRef(this.position, bb._RigCamTransformMatrix, hb.position), hb.setTarget(Bb)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.H)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.z)("lockedTargetId")], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "updateUpVectorFromRotation" in bb,
              get: bb => bb.updateUpVectorFromRotation,
              set: (bb, ub) => {
                bb.updateUpVectorFromRotation = ub
              }
            },
            metadata: Gb
          }, pb, ob), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotation" in bb,
              get: bb => bb.rotation,
              set: (bb, ub) => {
                bb.rotation = ub
              }
            },
            metadata: Gb
          }, Ab, lb), (0, Bb.h)(null, null, Sb, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: bb => "speed" in bb,
              get: bb => bb.speed,
              set: (bb, ub) => {
                bb.speed = ub
              }
            },
            metadata: Gb
          }, Kb, Wb), (0, Bb.h)(null, null, ab, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "lockedTarget" in bb,
              get: bb => bb.lockedTarget,
              set: (bb, ub) => {
                bb.lockedTarget = ub
              }
            },
            metadata: Gb
          }, Cb, db), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb._RigCamTransformMatrix = new Ub.d, bb._TargetTransformMatrix = new Ub.d, bb._TargetFocalPoint = new Ub.q, bb
      })(),
      ob = !1;

    function Ab() {
      ob || (ob = !0, Sb.b.AddNodeConstructor("TargetCamera", ((bb, ub) => () => new pb(bb, Ub.q.Zero(), ub))))
    }
  },
  39414: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(39350);
    let Ob = !1;

    function Gb() {
      Ob || (Ob = !0, Bb.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Bb.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Bb.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Bb.d.prototype.getAspectRatio = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = bb.viewport;
        return this.getRenderWidth(ub) * hb.width / (this.getRenderHeight(ub) * hb.height)
      }, Bb.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Bb.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39508: (bb, ub, hb) => {
    var Bb = hb(39350),
      Ob = hb(39511);
    let Gb = !1;
    Gb || (Gb = !0, (0, Ob.s)(), Bb.d.prototype._loadFileAsync = async function(bb, ub, hb) {
      return await new Promise(((Bb, Ob) => {
        this._loadFile(bb, (bb => {
          Bb(bb)
        }), void 0, ub, hb, ((bb, ub) => {
          Ob(ub)
        }))
      }))
    })
  },
  39499: (bb, ub, hb) => {
    (0, hb(39421).d)()
  },
  39421: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(39350);
    let Ob = !1;

    function Gb() {
      Ob || (Ob = !0, Bb.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Bb.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Bb.d.prototype.createRenderPassId = function(bb) {
        const ub = ++Bb.d._RenderPassIdCounter;
        return this._renderPassNames[ub] = bb ?? "NONAME", ub
      }, Bb.d.prototype.releaseRenderPassId = function(bb) {
        this._renderPassNames[bb] = void 0;
        for (let ub = 0; ub < this.scenes.length; ++ub) {
          const hb = this.scenes[ub];
          for (let ub = 0; ub < hb.meshes.length; ++ub) {
            const Bb = hb.meshes[ub];
            if (Bb._releaseRenderPassId(bb), Bb.FW)
              for (let ub = 0; ub < Bb.FW.length; ++ub) {
                Bb.FW[ub]._removeDrawWrapper(bb)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(bb)
      })
    }
  },
  39538: (bb, ub, hb) => {
    var Bb = hb(39540),
      Ob = hb(39350);
    let Gb = !1;
    Gb || (Gb = !0, Ob.d.GetCompatibleTextureLoader = Bb.d)
  },
  39427: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(39296);
    let Ob = !1;

    function Gb() {
      Ob || (Ob = !0, Bb.ThinEngine.prototype.setAlphaMode = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[hb] === bb) {
          if (!ub) {
            const ub = 0 === bb;
            this.depthCullingState.depthMask !== ub && (this.depthCullingState.depthMask = ub)
          }
          return
        }
        const Bb = 0 === bb;
        this._alphaState.setAlphaBlend(!Bb, hb), this._alphaState.setAlphaMode(bb, hb), ub || (this.depthCullingState.depthMask = Bb), this._alphaMode[hb] = bb
      })
    }
  },
  39441: (bb, ub, hb) => {
    var Bb = hb(39287),
      Ob = hb(38302),
      Gb = hb(39296),
      Ub = hb(39450),
      Lb = hb(39402);
    class Yb extends Ub.d {
      setDepthStencilTexture(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(bb, ub), !bb) return;
        const hb = this._engine,
          Bb = this._context,
          Ob = bb._hardwareTexture;
        if (Ob && bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const ub = hb._currentFramebuffer;
          hb._bindUnboundFramebuffer(this._MSAAFramebuffer), Bb.framebufferRenderbuffer(Bb.FRAMEBUFFER, (0, Lb.c)(bb.format) ? Bb.DEPTH_STENCIL_ATTACHMENT : Bb.DEPTH_ATTACHMENT, Bb.RENDERBUFFER, Ob.getMSAARenderBuffer()), hb._bindUnboundFramebuffer(ub)
        }
      }
      constructor(bb, ub, hb, Bb, Ob) {
        super(bb, ub, hb, Bb), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Ob
      }
      _cloneRenderTargetWrapper() {
        let bb;
        return this._colorTextureArray && this._depthStencilTextureArray ? (bb = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), bb.texture.isReady = !0) : bb = super._cloneRenderTargetWrapper(), bb
      }
      _swapRenderTargetWrapper(bb) {
        super._swapRenderTargetWrapper(bb), bb._framebuffer = this._framebuffer, bb._depthStencilBuffer = this._depthStencilBuffer, bb._MSAAFramebuffer = this._MSAAFramebuffer, bb._colorTextureArray = this._colorTextureArray, bb._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const bb = this._engine,
            ub = bb._currentFramebuffer,
            hb = this._context;
          bb._bindUnboundFramebuffer(this._framebuffer), hb.framebufferRenderbuffer(hb.FRAMEBUFFER, hb.DEPTH_STENCIL_ATTACHMENT, hb.RENDERBUFFER, null), hb.framebufferRenderbuffer(hb.FRAMEBUFFER, hb.DEPTH_ATTACHMENT, hb.RENDERBUFFER, null), hb.framebufferRenderbuffer(hb.FRAMEBUFFER, hb.STENCIL_ATTACHMENT, hb.RENDERBUFFER, null), bb._bindUnboundFramebuffer(ub), hb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(bb, ub, hb, Bb, Ob, Gb)
      }
      shareDepth(bb) {
        super.shareDepth(bb);
        const ub = this._context,
          hb = this._depthStencilBuffer,
          Bb = bb._MSAAFramebuffer || bb._framebuffer,
          Ob = this._engine;
        bb._depthStencilBuffer && bb._depthStencilBuffer !== hb && ub.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = hb;
        const Gb = bb._generateStencilBuffer ? ub.DEPTH_STENCIL_ATTACHMENT : ub.DEPTH_ATTACHMENT;
        Ob._bindUnboundFramebuffer(Bb), ub.framebufferRenderbuffer(ub.FRAMEBUFFER, Gb, ub.RENDERBUFFER, hb), Ob._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ob = bb._hardwareTexture;
        if (!Ob) return;
        const Gb = this._framebuffer,
          Ub = this._engine,
          Lb = Ub._currentFramebuffer;
        let Yb;
        if (Ub._bindUnboundFramebuffer(Gb), Ub.NX > 1) {
          const Gb = this._context;
          Yb = Gb["COLOR_ATTACHMENT" + ub], bb.is2DArray || bb.is3D ? (hb = hb ?? this.layerIndices?.[ub] ?? 0, Gb.framebufferTextureLayer(Gb.FRAMEBUFFER, Yb, Ob.underlyingResource, Bb, hb)) : bb.isCube ? (hb = hb ?? this.faceIndices?.[ub] ?? 0, Gb.framebufferTexture2D(Gb.FRAMEBUFFER, Yb, Gb.TEXTURE_CUBE_MAP_POSITIVE_X + hb, Ob.underlyingResource, Bb)) : Gb.framebufferTexture2D(Gb.FRAMEBUFFER, Yb, Gb.TEXTURE_2D, Ob.underlyingResource, Bb)
        } else {
          const bb = this._context;
          Yb = bb["COLOR_ATTACHMENT" + ub + "_WEBGL"];
          const Gb = void 0 !== hb ? bb.TEXTURE_CUBE_MAP_POSITIVE_X + hb : bb.TEXTURE_2D;
          bb.framebufferTexture2D(bb.FRAMEBUFFER, Yb, Gb, Ob.underlyingResource, Bb)
        }
        if (bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const bb = this._context;
          Ub._bindUnboundFramebuffer(this._MSAAFramebuffer), bb.framebufferRenderbuffer(bb.FRAMEBUFFER, Yb, bb.RENDERBUFFER, Ob.getMSAARenderBuffer())
        }
        Ub._bindUnboundFramebuffer(Lb)
      }
      setTexture(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(bb, ub, hb), this._bindTextureRenderTarget(bb, ub)
      }
      setLayerAndFaceIndices(bb, ub) {
        if (super.setLayerAndFaceIndices(bb, ub), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const hb = this._attachments?.length ?? this.textures.length;
        for (let Bb = 0; Bb < hb; Bb++) {
          const bb = this.textures[Bb];
          bb && (bb.is2DArray || bb.is3D ? this._bindTextureRenderTarget(bb, Bb, this.layerIndices[Bb]) : bb.isCube ? this._bindTextureRenderTarget(bb, Bb, this.faceIndices[Bb]) : this._bindTextureRenderTarget(bb, Bb))
        }
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(bb, ub, hb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Bb = this.textures[bb];
        Bb.is2DArray || Bb.is3D ? this._bindTextureRenderTarget(this.textures[bb], bb, this.layerIndices[bb]) : Bb.isCube && this._bindTextureRenderTarget(this.textures[bb], bb, this.faceIndices[bb])
      }
      resolveMSAATextures() {
        const bb = this._engine,
          ub = bb._currentFramebuffer;
        bb._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), bb._bindUnboundFramebuffer(ub)
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const ub = this._context;
        bb || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (ub.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (ub.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (ub.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(bb)
      }
    }
    let Sb = !1;
    Sb || (Sb = !0, Gb.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(bb, ub, hb) {
      const Bb = new Yb(bb, ub, hb, this, this._gl);
      return this._renderTargetWrapperCache.push(Bb), Bb
    }, Gb.ThinEngine.prototype.createRenderTargetTexture = function(bb, ub) {
      const hb = this._createHardwareRenderTargetWrapper(!1, !1, bb);
      let Bb, Ob, Gb = !0,
        Ub = !1,
        Lb = !1,
        Yb = 1;
      void 0 !== ub && "object" === typeof ub && (Gb = ub.generateDepthBuffer ?? !0, Ub = !!ub.generateStencilBuffer, Lb = !!ub.noColorAttachment, Bb = ub.colorAttachment, Yb = ub.samples ?? 1, Ob = ub.label);
      const Sb = Bb || (Lb ? null : this._createInternalTexture(bb, ub, !0, 5)),
        ab = bb.width || bb,
        Hb = bb.height || bb,
        wb = this._currentFramebuffer,
        Zb = this._gl,
        Xb = Zb.createFramebuffer();
      if (this._bindUnboundFramebuffer(Xb), hb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ub, Gb, ab, Hb), !Sb || Sb.is2DArray || Sb.is3D || Zb.framebufferTexture2D(Zb.FRAMEBUFFER, Zb.COLOR_ATTACHMENT0, Zb.TEXTURE_2D, Sb._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(wb), hb.label = Ob ?? "RenderTargetWrapper", hb._framebuffer = Xb, hb._generateDepthBuffer = Gb, hb._generateStencilBuffer = Ub, hb.setTextures(Sb), Bb) {
        if (hb._samples = Bb.samples, Bb.samples > 1) {
          const bb = Bb._hardwareTexture.getMSAARenderBuffer(0);
          hb._MSAAFramebuffer = Zb.createFramebuffer(), this._bindUnboundFramebuffer(hb._MSAAFramebuffer), Zb.framebufferRenderbuffer(Zb.FRAMEBUFFER, Zb.COLOR_ATTACHMENT0, Zb.RENDERBUFFER, bb), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(hb, Yb);
      return hb
    }, Gb.ThinEngine.prototype._createDepthStencilTexture = function(bb, ub, hb) {
      const Gb = this._gl,
        Ub = bb.layers || 0,
        Yb = bb.depth || 0;
      let Sb = Gb.TEXTURE_2D;
      0 !== Ub ? Sb = Gb.TEXTURE_2D_ARRAY : 0 !== Yb && (Sb = Gb.TEXTURE_3D);
      const ab = new Bb.b(this, 12);
      if (ab.label = ub.label, !this._caps.depthTextureExtension) return Ob.b.Error("Depth texture is not supported by your browser or hardware."), ab;
      const Hb = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...ub
      };
      if (this._bindTextureDirectly(Sb, ab, !0), this._setupDepthStencilTexture(ab, bb, 0 !== Hb.comparisonFunction && Hb.bilinearFiltering, Hb.comparisonFunction, Hb.samples), void 0 !== Hb.depthTextureFormat) {
        if (15 !== Hb.depthTextureFormat && 16 !== Hb.depthTextureFormat && 17 !== Hb.depthTextureFormat && 13 !== Hb.depthTextureFormat && 14 !== Hb.depthTextureFormat && 18 !== Hb.depthTextureFormat) return Ob.b.Error(`Depth texture ${Hb.depthTextureFormat} format is not supported.`), ab;
        ab.format = Hb.depthTextureFormat
      } else ab.format = Hb.generateStencil ? 13 : 16;
      const wb = (0, Lb.c)(ab.format),
        Zb = this._getWebGLTextureTypeFromDepthTextureFormat(ab.format),
        Xb = wb ? Gb.DEPTH_STENCIL : Gb.DEPTH_COMPONENT,
        pb = this._getInternalFormatFromDepthTextureFormat(ab.format, !0, wb);
      return ab.is2DArray ? Gb.texImage3D(Sb, 0, pb, ab.width, ab.height, Ub, 0, Xb, Zb, null) : ab.is3D ? Gb.texImage3D(Sb, 0, pb, ab.width, ab.height, Yb, 0, Xb, Zb, null) : Gb.texImage2D(Sb, 0, pb, ab.width, ab.height, 0, Xb, Zb, null), this._bindTextureDirectly(Sb, null), this._internalTexturesCache.push(ab), hb._depthStencilBuffer && (Gb.deleteRenderbuffer(hb._depthStencilBuffer), hb._depthStencilBuffer = null), this._bindUnboundFramebuffer(hb._MSAAFramebuffer ?? hb._framebuffer), hb._generateStencilBuffer = wb, hb._depthStencilTextureWithStencil = wb, hb._depthStencilBuffer = this._setupFramebufferDepthAttachments(hb._generateStencilBuffer, hb._generateDepthBuffer, hb.width, hb.height, hb.samples, ab.format), this._bindUnboundFramebuffer(null), ab
    }, Gb.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(bb, ub) {
      if (this.NX < 2 || !bb) return 1;
      if (bb.samples === ub) return ub;
      const hb = this._gl;
      ub = Math.min(ub, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (hb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (hb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
      const Bb = bb.texture?._hardwareTexture;
      if (Bb?.releaseMSAARenderBuffers(), bb.texture && ub > 1 && "function" === typeof hb.renderbufferStorageMultisample) {
        const Ob = hb.createFramebuffer();
        if (!Ob) throw new Error("Unable to create multi sampled framebuffer");
        bb._MSAAFramebuffer = Ob, this._bindUnboundFramebuffer(bb._MSAAFramebuffer);
        const Gb = this._createRenderBuffer(bb.texture.width, bb.texture.height, ub, -1, this._getRGBABufferInternalSizedFormat(bb.texture.type, bb.texture.format, bb.texture._useSRGBBuffer), hb.COLOR_ATTACHMENT0, !1);
        if (!Gb) throw new Error("Unable to create multi sampled framebuffer");
        Bb?.addMSAARenderBuffer(Gb)
      }
      this._bindUnboundFramebuffer(bb._MSAAFramebuffer ?? bb._framebuffer), bb.texture && (bb.texture.samples = ub), bb._samples = ub;
      const Ob = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
      return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, ub, Ob), this._bindUnboundFramebuffer(null), ub
    }, Gb.ThinEngine.prototype._setupDepthStencilTexture = function(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Gb = ub.width ?? ub,
        Ub = ub.height ?? ub,
        Lb = ub.layers || 0,
        Yb = ub.depth || 0;
      bb.baseWidth = Gb, bb.baseHeight = Ub, bb.width = Gb, bb.height = Ub, bb.is2DArray = Lb > 0, bb.depth = Lb || Yb, bb.isReady = !0, bb.samples = Ob, bb.generateMipMaps = !1, bb.samplingMode = hb ? 2 : 1, bb.type = 0, bb._comparisonFunction = Bb;
      const Sb = this._gl,
        ab = this._getTextureTarget(bb),
        Hb = this._getSamplingParameters(bb.samplingMode, !1);
      Sb.texParameteri(ab, Sb.TEXTURE_MAG_FILTER, Hb.mag), Sb.texParameteri(ab, Sb.TEXTURE_MIN_FILTER, Hb.min), Sb.texParameteri(ab, Sb.TEXTURE_WRAP_S, Sb.CLAMP_TO_EDGE), Sb.texParameteri(ab, Sb.TEXTURE_WRAP_T, Sb.CLAMP_TO_EDGE), this.NX > 1 && (0 === Bb ? (Sb.texParameteri(ab, Sb.TEXTURE_COMPARE_FUNC, 515), Sb.texParameteri(ab, Sb.TEXTURE_COMPARE_MODE, Sb.NONE)) : (Sb.texParameteri(ab, Sb.TEXTURE_COMPARE_FUNC, Bb), Sb.texParameteri(ab, Sb.TEXTURE_COMPARE_MODE, Sb.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39277: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.d
    });
    var Bb = hb(39280);
    (0, hb(39427).d)();
    var Ob = hb(39296);
    let Gb = !1;
    ! function() {
      if (Gb) return;
      Gb = !0;
      const bb = new WeakMap,
        ub = new WeakMap,
        hb = new WeakMap,
        Bb = new WeakMap;
      Ob.ThinEngine.prototype.getAlphaToCoverage = function() {
        return bb.get(this) ?? !1
      }, Ob.ThinEngine.prototype.setAlphaToCoverage = function(hb) {
        (bb.get(this) !== hb || this._gl && ub.get(this) !== this._gl) && (bb.set(this, hb), this._gl && (hb ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), ub.set(this, this._gl)))
      }, Object.defineProperty(Ob.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Bb.get(this) !== this._gl && (hb.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Bb.set(this, this._gl)), hb.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Ub = hb(39287),
      Lb = hb(38302),
      Yb = hb(39387);
    let Sb = !1;
    ! function() {
      function bb(bb, ub, hb, Bb) {
        let Ob, Gb = 1;
        1 === Bb ? Ob = new Float32Array(ub * hb * 4) : 2 === Bb ? (Ob = new Uint16Array(ub * hb * 4), Gb = 15360) : Ob = 7 === Bb ? new Uint32Array(ub * hb * 4) : new Uint8Array(ub * hb * 4);
        for (let Ub = 0; Ub < ub; Ub++)
          for (let Bb = 0; Bb < hb; Bb++) {
            const hb = 3 * (Bb * ub + Ub),
              Lb = 4 * (Bb * ub + Ub);
            Ob[Lb + 0] = bb[hb + 0], Ob[Lb + 1] = bb[hb + 1], Ob[Lb + 2] = bb[hb + 2], Ob[Lb + 3] = Gb
          }
        return Ob
      }

      function ub(bb) {
        return function(ub, hb, Bb, Ob, Gb, Lb, Yb, Sb) {
          let ab = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const wb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Zb = bb ? 10 : 11,
            Xb = new Ub.b(this, Zb);
          Xb.baseWidth = hb, Xb.baseHeight = Bb, Xb.baseDepth = Ob, Xb.width = hb, Xb.height = Bb, Xb.depth = Ob, Xb.format = Gb, Xb.type = Hb, Xb.generateMipMaps = Lb, Xb.samplingMode = Sb, bb ? Xb.is3D = !0 : Xb.is2DArray = !0, this._doNotHandleContextLost || (Xb._bufferView = ub), bb ? this.updateRawTexture3D(Xb, ub, Gb, Yb, ab, Hb) : this.updateRawTexture2DArray(Xb, ub, Gb, Yb, ab, Hb), this._bindTextureDirectly(wb, Xb, !0);
          const pb = this._getSamplingParameters(Sb, Lb);
          return this._gl.texParameteri(wb, this._gl.TEXTURE_MAG_FILTER, pb.mag), this._gl.texParameteri(wb, this._gl.TEXTURE_MIN_FILTER, pb.min), Lb && this._gl.generateMipmap(wb), this._bindTextureDirectly(wb, null), this._internalTexturesCache.push(Xb), Xb
        }
      }

      function hb(bb) {
        return function(ub, hb, Bb, Ob) {
          let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Lb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Yb = this._getWebGLTextureType(Ub),
            Sb = this._getInternalFormat(Bb),
            ab = this._getRGBABufferInternalSizedFormat(Ub, Bb);
          this._bindTextureDirectly(Lb, ub, !0), this._unpackFlipY(void 0 === Ob || !!Ob), this._doNotHandleContextLost || (ub._bufferView = hb, ub.format = Bb, ub.invertY = Ob, ub._compression = Gb), ub.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Gb && hb ? this._gl.compressedTexImage3D(Lb, 0, this.getCaps().s3tc[Gb], ub.width, ub.height, ub.depth, 0, hb) : this._gl.texImage3D(Lb, 0, ab, ub.width, ub.height, ub.depth, 0, Sb, Yb, hb), ub.generateMipMaps && this._gl.generateMipmap(Lb), this._bindTextureDirectly(Lb, null), ub.isReady = !0
        }
      }
      Sb || (Sb = !0, Ob.ThinEngine.prototype.updateRawTexture = function(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!bb) return;
        const Lb = this._getRGBABufferInternalSizedFormat(Gb, hb, Ub),
          Yb = this._getInternalFormat(hb),
          Sb = this._getWebGLTextureType(Gb);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Bb || !!Bb), this._doNotHandleContextLost || (bb._bufferView = ub, bb.format = hb, bb.type = Gb, bb.invertY = Bb, bb._compression = Ob), bb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Ob && ub ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Ob], bb.width, bb.height, 0, ub) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Lb, bb.width, bb.height, 0, Yb, Sb, ub), bb.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), bb.isReady = !0
      }, Ob.ThinEngine.prototype.createRawTexture = function(bb, ub, hb, Bb, Ob, Gb, Lb) {
        let Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          ab = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Hb = new Ub.b(this, 3);
        Hb.baseWidth = ub, Hb.baseHeight = hb, Hb.width = ub, Hb.height = hb, Hb.format = Bb, Hb.generateMipMaps = Ob, Hb.samplingMode = Lb, Hb.invertY = Gb, Hb._compression = Yb, Hb.type = Sb, Hb._useSRGBBuffer = this._getUseSRGBBuffer(ab, !Ob), this._doNotHandleContextLost || (Hb._bufferView = bb), this.updateRawTexture(Hb, bb, Bb, Gb, Yb, Sb, Hb._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Hb, !0);
        const wb = this._getSamplingParameters(Lb, Ob);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, wb.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, wb.min), Ob && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Hb), Hb
      }, Ob.ThinEngine.prototype.createRawCubeTexture = function(bb, ub, hb, Bb, Ob, Gb, Sb) {
        let ab = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Hb = this._gl,
          wb = new Ub.b(this, 8);
        wb.isCube = !0, wb.format = hb, wb.type = Bb, this._doNotHandleContextLost || (wb._bufferViewArray = bb);
        const Zb = this._getWebGLTextureType(Bb);
        let Xb = this._getInternalFormat(hb);
        Xb === Hb.RGB && (Xb = Hb.RGBA), Zb !== Hb.FLOAT || this._caps.textureFloatLinearFiltering ? Zb !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Zb !== Hb.FLOAT || this._caps.textureFloatRender ? Zb !== Hb.HALF_FLOAT || this._caps.colorBufferFloat || (Ob = !1, Lb.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Ob = !1, Lb.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Ob = !1, Sb = 1, Lb.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Ob = !1, Sb = 1, Lb.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const pb = ub,
          ob = pb;
        wb.width = pb, wb.height = ob, wb.invertY = Gb, wb._compression = ab;
        if (!this.needPOTTextures || (0, Yb.k)(wb.width) && (0, Yb.k)(wb.height) || (Ob = !1), bb) this.updateRawCubeTexture(wb, bb, hb, Bb, Gb, ab);
        else {
          const bb = this._getRGBABufferInternalSizedFormat(Bb),
            ub = 0;
          this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, wb, !0);
          for (let hb = 0; hb < 6; hb++) ab ? Hb.compressedTexImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + hb, ub, this.getCaps().s3tc[ab], wb.width, wb.height, 0, void 0) : Hb.texImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + hb, ub, bb, wb.width, wb.height, 0, Xb, Zb, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, wb, !0), bb && Ob && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Ab = this._getSamplingParameters(Sb, Ob);
        return Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MAG_FILTER, Ab.mag), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MIN_FILTER, Ab.min), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_S, Hb.CLAMP_TO_EDGE), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_T, Hb.CLAMP_TO_EDGE), this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, null), wb.generateMipMaps = Ob, wb.samplingMode = Sb, wb.isReady = !0, wb
      }, Ob.ThinEngine.prototype.updateRawCubeTexture = function(ub, hb, Bb, Ob, Gb) {
        let Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        ub._bufferViewArray = hb, ub.format = Bb, ub.type = Ob, ub.invertY = Gb, ub._compression = Ub;
        const Sb = this._gl,
          ab = this._getWebGLTextureType(Ob);
        let Hb = this._getInternalFormat(Bb);
        const wb = this._getRGBABufferInternalSizedFormat(Ob);
        let Zb = !1;
        Hb === Sb.RGB && (Hb = Sb.RGBA, Zb = !0), this._bindTextureDirectly(Sb.TEXTURE_CUBE_MAP, ub, !0), this._unpackFlipY(void 0 === Gb || !!Gb), ub.width % 4 !== 0 && Sb.pixelStorei(Sb.UNPACK_ALIGNMENT, 1);
        for (let Yb = 0; Yb < 6; Yb++) {
          let Bb = hb[Yb];
          Ub ? Sb.compressedTexImage2D(Sb.TEXTURE_CUBE_MAP_POSITIVE_X + Yb, Lb, this.getCaps().s3tc[Ub], ub.width, ub.height, 0, Bb) : (Zb && (Bb = bb(Bb, ub.width, ub.height, Ob)), Sb.texImage2D(Sb.TEXTURE_CUBE_MAP_POSITIVE_X + Yb, Lb, wb, ub.width, ub.height, 0, Hb, ab, Bb))
        }(!this.needPOTTextures || (0, Yb.k)(ub.width) && (0, Yb.k)(ub.height)) && ub.generateMipMaps && 0 === Lb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), ub.isReady = !0
      }, Ob.ThinEngine.prototype.createRawCubeTextureFromUrl = function(ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        let Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ab = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Hb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          wb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Zb = this._gl,
          Xb = this.createRawCubeTexture(null, Bb, Ob, Gb, !Ub, wb, Hb, null);
        hb?.addPendingData(Xb), Xb.url = ub, Xb.isReady = !1, this._internalTexturesCache.push(Xb);
        const pb = (bb, ub) => {
            hb?.removePendingData(Xb), ab && ab(bb ? bb.status + " " + bb.statusText : "Failed to parse texture data", ub)
          },
          ob = async ub => {
            if (!Xb._hardwareTexture) return;
            const Bb = Lb(ub);
            if (!Bb) return;
            const Ub = Bb instanceof Promise ? await Bb : Bb,
              ab = Xb.width;
            if (Yb) {
              const ub = this._getWebGLTextureType(Gb);
              let hb = this._getInternalFormat(Ob);
              const Bb = this._getRGBABufferInternalSizedFormat(Gb);
              let Lb = !1;
              hb === Zb.RGB && (hb = Zb.RGBA, Lb = !0), this._bindTextureDirectly(Zb.TEXTURE_CUBE_MAP, Xb, !0), this._unpackFlipY(!1);
              const Sb = Yb(Ub);
              for (let Ob = 0; Ob < Sb.length; Ob++) {
                const Ub = ab >> Ob;
                for (let Yb = 0; Yb < 6; Yb++) {
                  let ab = Sb[Ob][Yb];
                  Lb && (ab = bb(ab, Ub, Ub, Gb)), Zb.texImage2D(Yb, Ob, Bb, Ub, Ub, 0, hb, ub, ab)
                }
              }
              this._bindTextureDirectly(Zb.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Xb, Ub, Ob, Gb, wb);
            Xb.isReady = !0, hb?.removePendingData(Xb), Xb.onLoadedObservable.notifyObservers(Xb), Xb.onLoadedObservable.clear(), Sb && Sb()
          };
        return this._loadFile(ub, (bb => {
          ob(bb).catch((bb => {
            pb(void 0, bb)
          }))
        }), void 0, hb?.offlineProvider, !0, pb), Xb
      }, Ob.ThinEngine.prototype.createRawTexture2DArray = ub(!1), Ob.ThinEngine.prototype.createRawTexture3D = ub(!0), Ob.ThinEngine.prototype.updateRawTexture2DArray = hb(!1), Ob.ThinEngine.prototype.updateRawTexture3D = hb(!0))
    }();
    var ab = hb(39331);
    let Hb = !1;
    Hb || (Hb = !0, Ob.ThinEngine.prototype._readTexturePixelsSync = function(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Sb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Hb = this._gl;
      if (!Hb) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const bb = Hb.createFramebuffer();
        if (!bb) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = bb
      }
      Hb.bindFramebuffer(Hb.FRAMEBUFFER, this._dummyFramebuffer), Bb > -1 && (bb.is2DArray || bb.is3D) ? Hb.framebufferTextureLayer(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, bb._hardwareTexture?.underlyingResource, Ob, Bb) : Bb > -1 ? Hb.framebufferTexture2D(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Bb, bb._hardwareTexture?.underlyingResource, Ob) : Hb.framebufferTexture2D(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, Hb.TEXTURE_2D, bb._hardwareTexture?.underlyingResource, Ob);
      let wb = void 0 !== bb.type ? this._getWebGLTextureType(bb.type) : Hb.UNSIGNED_BYTE;
      return Lb ? Gb || (Gb = (0, ab.g)(bb.type, 4 * ub * hb)) : wb === Hb.UNSIGNED_BYTE ? (Gb || (Gb = new Uint8Array(4 * ub * hb)), wb = Hb.UNSIGNED_BYTE) : (Gb || (Gb = new Float32Array(4 * ub * hb)), wb = Hb.FLOAT), Ub && this.flushFramebuffer(), Hb.readPixels(Yb, Sb, ub, hb, Hb.RGBA, wb, Gb), Hb.bindFramebuffer(Hb.FRAMEBUFFER, this._currentFramebuffer), Gb
    }, Ob.ThinEngine.prototype._readTexturePixels = function(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Sb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb))
    }), (0, hb(39432).c)();
    let wb = !1;
    wb || (wb = !0, Ob.ThinEngine.prototype._createDepthStencilCubeTexture = function(bb, ub) {
      const hb = new Ub.b(this, 12);
      if (hb.isCube = !0, 1 === this.NX) return Lb.b.Error("Depth cube texture is not supported by WebGL 1."), hb;
      const Bb = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...ub
        },
        Ob = this._gl;
      this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, hb, !0), this._setupDepthStencilTexture(hb, bb, Bb.bilinearFiltering, Bb.comparisonFunction);
      for (let Gb = 0; Gb < 6; Gb++) Bb.generateStencil ? Ob.texImage2D(Ob.TEXTURE_CUBE_MAP_POSITIVE_X + Gb, 0, Ob.DEPTH24_STENCIL8, bb, bb, 0, Ob.DEPTH_STENCIL, Ob.UNSIGNED_INT_24_8, null) : Ob.texImage2D(Ob.TEXTURE_CUBE_MAP_POSITIVE_X + Gb, 0, Ob.DEPTH_COMPONENT24, bb, bb, 0, Ob.DEPTH_COMPONENT, Ob.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(hb), hb
    }, Ob.ThinEngine.prototype._setCubeMapTextureParams = function(bb, ub, hb) {
      const Bb = this._gl;
      Bb.texParameteri(Bb.TEXTURE_CUBE_MAP, Bb.TEXTURE_MAG_FILTER, Bb.LINEAR), Bb.texParameteri(Bb.TEXTURE_CUBE_MAP, Bb.TEXTURE_MIN_FILTER, ub ? Bb.LINEAR_MIPMAP_LINEAR : Bb.LINEAR), Bb.texParameteri(Bb.TEXTURE_CUBE_MAP, Bb.TEXTURE_WRAP_S, Bb.CLAMP_TO_EDGE), Bb.texParameteri(Bb.TEXTURE_CUBE_MAP, Bb.TEXTURE_WRAP_T, Bb.CLAMP_TO_EDGE), bb.samplingMode = ub ? 3 : 2, ub && this.getCaps().textureMaxLevel && void 0 !== hb && hb > 0 && (Bb.texParameteri(Bb.TEXTURE_CUBE_MAP, Bb.TEXTURE_MAX_LEVEL, hb), bb._maxLodLevel = hb), this._bindTextureDirectly(Bb.TEXTURE_CUBE_MAP, null)
    }, Ob.ThinEngine.prototype.createCubeTexture = function(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ub = arguments.length > 6 ? arguments[6] : void 0,
        Sb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ab = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        wb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Zb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Xb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        pb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const ob = this._gl;
      return this.createCubeTextureBase(bb, ub, hb, !!Bb, Ob, Gb, Ub, Sb, ab, Hb, wb, Zb, (bb => this._bindTextureDirectly(ob.TEXTURE_CUBE_MAP, bb, !0)), ((bb, ub) => {
        const hb = this.needPOTTextures ? (0, Yb.i)(ub[0].width, this._caps.maxCubemapTextureSize) : ub[0].width,
          Gb = hb,
          Sb = [ob.TEXTURE_CUBE_MAP_POSITIVE_X, ob.TEXTURE_CUBE_MAP_POSITIVE_Y, ob.TEXTURE_CUBE_MAP_POSITIVE_Z, ob.TEXTURE_CUBE_MAP_NEGATIVE_X, ob.TEXTURE_CUBE_MAP_NEGATIVE_Y, ob.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(ob.TEXTURE_CUBE_MAP, bb, !0), this._unpackFlipY(!1);
        const ab = Ub ? this._getInternalFormat(Ub, bb._useSRGBBuffer) : bb._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : ob.RGBA;
        let Hb = Ub ? this._getInternalFormat(Ub) : ob.RGBA;
        bb._useSRGBBuffer && 1 === this.NX && (Hb = ab);
        for (let Bb = 0; Bb < Sb.length; Bb++)
          if (ub[Bb].width !== hb || ub[Bb].height !== Gb) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Lb.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = hb, this._workingCanvas.height = Gb, this._workingContext.drawImage(ub[Bb], 0, 0, ub[Bb].width, ub[Bb].height, 0, 0, hb, Gb), ob.texImage2D(Sb[Bb], 0, ab, Hb, ob.UNSIGNED_BYTE, this._workingCanvas)
          } else ob.texImage2D(Sb[Bb], 0, ab, Hb, ob.UNSIGNED_BYTE, ub[Bb]);
        Bb || ob.generateMipmap(ob.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(bb, !Bb), bb.width = hb, bb.height = Gb, bb.isReady = !0, Ub && (bb.format = Ub), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Ob && Ob()
      }), !!Xb, pb)
    }, Ob.ThinEngine.prototype.generateMipMapsForCubemap = function(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb.generateMipMaps) {
        const hb = this._gl;
        this._bindTextureDirectly(hb.TEXTURE_CUBE_MAP, bb, !0), hb.generateMipmap(hb.TEXTURE_CUBE_MAP), ub && this._bindTextureDirectly(hb.TEXTURE_CUBE_MAP, null)
      }
    });
    hb(39441);
    let Zb = !1;
    Zb || (Zb = !0, Ob.ThinEngine.prototype.setDepthStencilTexture = function(bb, ub, hb, Bb) {
      void 0 !== bb && (ub && (this._boundUniforms[bb] = ub), hb && hb.depthStencilTexture ? this._setTexture(bb, hb, !1, !0, Bb) : this._setTexture(bb, null, void 0, void 0, Bb))
    });
    let Xb = !1;
    Xb || (Xb = !0, Ob.ThinEngine.prototype.createRenderTargetCubeTexture = function(bb, ub) {
      const hb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
        Bb = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...ub
        };
      Bb.generateStencilBuffer = Bb.generateDepthBuffer && Bb.generateStencilBuffer, (1 !== Bb.type || this._caps.textureFloatLinearFiltering) && (2 !== Bb.type || this._caps.textureHalfFloatLinearFiltering) || (Bb.samplingMode = 1);
      const Ob = this._gl,
        Gb = new Ub.b(this, 5);
      this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, Gb, !0);
      const Yb = this._getSamplingParameters(Bb.samplingMode, Bb.generateMipMaps);
      1 !== Bb.type || this._caps.textureFloat || (Bb.type = 0, Lb.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_MAG_FILTER, Yb.mag), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_MIN_FILTER, Yb.min), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_WRAP_S, Ob.CLAMP_TO_EDGE), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_WRAP_T, Ob.CLAMP_TO_EDGE);
      for (let Ub = 0; Ub < 6; Ub++) Ob.texImage2D(Ob.TEXTURE_CUBE_MAP_POSITIVE_X + Ub, 0, this._getRGBABufferInternalSizedFormat(Bb.type, Bb.format), bb, bb, 0, this._getInternalFormat(Bb.format), this._getWebGLTextureType(Bb.type), null);
      const Sb = Ob.createFramebuffer();
      return this._bindUnboundFramebuffer(Sb), hb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Bb.generateStencilBuffer, Bb.generateDepthBuffer, bb, bb), Bb.generateMipMaps && Ob.generateMipmap(Ob.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), hb._framebuffer = Sb, hb._generateDepthBuffer = Bb.generateDepthBuffer, hb._generateStencilBuffer = Bb.generateStencilBuffer, Gb.width = bb, Gb.height = bb, Gb.isReady = !0, Gb.isCube = !0, Gb.samples = 1, Gb.generateMipMaps = Bb.generateMipMaps, Gb.samplingMode = Bb.samplingMode, Gb.type = Bb.type, Gb.format = Bb.format, this._internalTexturesCache.push(Gb), hb.setTextures(Gb), hb
    });
    var pb = hb(39456),
      ob = hb(39459);
    let Ab = !1;
    Ab || (Ab = !0, Ob.ThinEngine.prototype.createPrefilteredCubeTexture = function(bb, ub, Bb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Sb = arguments.length > 6 ? arguments[6] : void 0,
        ab = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Hb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        wb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(bb, ub, null, !1, (async bb => {
        if (!bb) return void(Gb && Gb(null));
        const Yb = bb.texture;
        if (Hb ? bb.info.sphericalPolynomial && (Yb._sphericalPolynomial = bb.info.sphericalPolynomial) : Yb._sphericalPolynomial = Yb._sphericalPolynomial ?? new pb.g, Yb._source = 9, this.getCaps().textureLOD) return void(Gb && Gb(Yb));
        const Sb = this._gl,
          ab = bb.width;
        if (!ab) return;
        const {
          DDSTools: wb
        } = await hb.e(297).then((() => hb(41219))), Zb = [];
        for (let hb = 0; hb < 3; hb++) {
          const Gb = 1 - hb / 2,
            Hb = Ob,
            Xb = Math.log2(ab) * Bb + Ob,
            pb = Hb + (Xb - Hb) * Gb,
            Ab = Math.round(Math.min(Math.max(pb, 0), Xb)),
            lb = new Ub.b(this, 2);
          if (lb.type = Yb.type, lb.format = Yb.format, lb.width = Math.pow(2, Math.max(Math.log2(ab) - Ab, 0)), lb.height = lb.width, lb.isCube = !0, lb._cachedWrapU = 0, lb._cachedWrapV = 0, this._bindTextureDirectly(Sb.TEXTURE_CUBE_MAP, lb, !0), lb.samplingMode = 2, Sb.texParameteri(Sb.TEXTURE_CUBE_MAP, Sb.TEXTURE_MAG_FILTER, Sb.LINEAR), Sb.texParameteri(Sb.TEXTURE_CUBE_MAP, Sb.TEXTURE_MIN_FILTER, Sb.LINEAR), Sb.texParameteri(Sb.TEXTURE_CUBE_MAP, Sb.TEXTURE_WRAP_S, Sb.CLAMP_TO_EDGE), Sb.texParameteri(Sb.TEXTURE_CUBE_MAP, Sb.TEXTURE_WRAP_T, Sb.CLAMP_TO_EDGE), bb.isDDS) {
            const ub = bb.info,
              hb = bb.data;
            this._unpackFlipY(ub.isCompressed), wb.UploadDDSLevels(this, lb, hb, ub, !0, 6, Ab)
          } else Lb.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Sb.TEXTURE_CUBE_MAP, null);
          const Kb = new ob.d(ub);
          Kb._isCube = !0, Kb._texture = lb, lb.isReady = !0, Zb.push(Kb)
        }
        Yb._lodTextureHigh = Zb[2], Yb._lodTextureMid = Zb[1], Yb._lodTextureLow = Zb[0], Gb && Gb(Yb)
      }), Yb, Sb, ab, Hb, Bb, Ob, null, void 0, !1, wb)
    });
    var lb = hb(39374);
    let Kb = !1;
    Kb || (Kb = !0, Ob.ThinEngine.prototype.createUniformBuffer = function(bb, ub) {
      const hb = this._gl.createBuffer();
      if (!hb) throw new Error("Unable to create uniform buffer");
      const Bb = new lb.e(hb);
      return this.bindUniformBuffer(Bb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Bb.references = 1, Bb
    }, Ob.ThinEngine.prototype.createDynamicUniformBuffer = function(bb, ub) {
      const hb = this._gl.createBuffer();
      if (!hb) throw new Error("Unable to create dynamic uniform buffer");
      const Bb = new lb.e(hb);
      return this.bindUniformBuffer(Bb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Bb.references = 1, Bb
    }, Ob.ThinEngine.prototype.updateUniformBuffer = function(bb, ub, hb, Bb) {
      this.bindUniformBuffer(bb), void 0 === hb && (hb = 0), void 0 === Bb ? ub instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, hb, ub) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, hb, new Float32Array(ub)) : ub instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, ub.subarray(hb, hb + Bb)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(ub).subarray(hb, hb + Bb)), this.bindUniformBuffer(null)
    }, Ob.ThinEngine.prototype.bindUniformBuffer = function(bb) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, bb ? bb.underlyingResource : null)
    }, Ob.ThinEngine.prototype.bindUniformBufferBase = function(bb, ub, hb) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, ub, bb ? bb.underlyingResource : null)
    }, Ob.ThinEngine.prototype.bindUniformBlock = function(bb, ub, hb) {
      const Bb = bb.program,
        Ob = this._gl.getUniformBlockIndex(Bb, ub);
      4294967295 !== Ob && this._gl.uniformBlockBinding(Bb, Ob, hb)
    });
    var Wb = hb(39316),
      Cb = hb(39350);
    let db = !1;
    db || (db = !0, Cb.d.prototype.displayLoadingUI = function() {
      if (!(0, Wb.k)()) return;
      const bb = this.loadingScreen;
      bb && bb.displayLoadingUI()
    }, Cb.d.prototype.hideLoadingUI = function() {
      if (!(0, Wb.k)()) return;
      const bb = this._loadingScreen;
      bb && bb.hideLoadingUI()
    }, Object.defineProperty(Cb.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Cb.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(bb) {
        this._loadingScreen = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Cb.d.prototype, "loadingUIText", {
      set: function(bb) {
        this.loadingScreen.loadingUIText = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Cb.d.prototype, "loadingUIBackgroundColor", {
      set: function(bb) {
        this.loadingScreen.loadingUIBackgroundColor = bb
      },
      enumerable: !0,
      configurable: !0
    })), (0, hb(39414).d)();
    let rb = !1;
    rb || (rb = !0, Cb.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Cb.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Cb.d.prototype.setDepthFunction = function(bb) {
      this._depthCullingState.depthFunc = bb
    }, Cb.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Cb.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Cb.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Cb.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Cb.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Cb.d.prototype.setDepthWrite = function(bb) {
      this._depthCullingState.depthMask = bb
    }, Cb.d.prototype.setAlphaConstants = function(bb, ub, hb, Bb) {
      this._alphaState.setAlphaBlendConstants(bb, ub, hb, Bb)
    }, Cb.d.prototype.getAlphaMode = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[bb]
    }, Cb.d.prototype.getAlphaEquation = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[bb]
    });
    let jb = !1;
    jb || (jb = !0, Cb.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Cb.d.prototype.setStencilBuffer = function(bb) {
      this._stencilState.stencilTest = bb
    }, Cb.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Cb.d.prototype.setStencilMask = function(bb) {
      this._stencilState.stencilMask = bb
    }, Cb.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Cb.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Cb.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Cb.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Cb.d.prototype.setStencilFunction = function(bb) {
      this._stencilState.stencilFunc = bb
    }, Cb.d.prototype.setStencilBackFunction = function(bb) {
      this._stencilState.stencilBackFunc = bb
    }, Cb.d.prototype.setStencilFunctionReference = function(bb) {
      this._stencilState.stencilFuncRef = bb
    }, Cb.d.prototype.setStencilFunctionMask = function(bb) {
      this._stencilState.stencilFuncMask = bb
    }, Cb.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Cb.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Cb.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Cb.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Cb.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Cb.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Cb.d.prototype.setStencilOperationFail = function(bb) {
      this._stencilState.stencilOpStencilFail = bb
    }, Cb.d.prototype.setStencilBackOperationFail = function(bb) {
      this._stencilState.stencilBackOpStencilFail = bb
    }, Cb.d.prototype.setStencilOperationDepthFail = function(bb) {
      this._stencilState.stencilOpDepthFail = bb
    }, Cb.d.prototype.setStencilBackOperationDepthFail = function(bb) {
      this._stencilState.stencilBackOpDepthFail = bb
    }, Cb.d.prototype.setStencilOperationPass = function(bb) {
      this._stencilState.stencilOpStencilDepthPass = bb
    }, Cb.d.prototype.setStencilBackOperationPass = function(bb) {
      this._stencilState.stencilBackOpStencilDepthPass = bb
    }, Cb.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Cb.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    hb(39499);
    let nb = !1;
    nb || (nb = !0, Cb.d.prototype.createDepthStencilTexture = function(bb, ub, hb) {
      if (ub.isCube) {
        const hb = bb.width || bb;
        return this._createDepthStencilCubeTexture(hb, ub)
      }
      return this._createDepthStencilTexture(bb, ub, hb)
    });
    hb(39508), hb(39538);
    let Db = !1;
    Db || (Db = !0, Ob.ThinEngine.prototype.enableScissor = function(bb, ub, hb, Bb) {
      const Ob = this._gl;
      Ob.enable(Ob.SCISSOR_TEST), Ob.scissor(bb, ub, hb, Bb)
    }, Ob.ThinEngine.prototype.disableScissor = function() {
      const bb = this._gl;
      bb.disable(bb.SCISSOR_TEST)
    })
  },
  39280: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Cb
    });
    var Bb = hb(39287),
      Ob = hb(36748),
      Gb = hb(39296),
      Ub = hb(39352);
    class Lb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Yb(bb)
      }
      sampleFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const ub = bb - this._lastFrameTimeMs;
            this._rollingFrameTime.add(ub)
          }
          this._lastFrameTimeMs = bb
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
        const bb = this._rollingFrameTime.history(0);
        return 0 === bb ? 0 : 1e3 / bb
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
    class Yb {
      constructor(bb) {
        this._samples = new Array(bb), this.reset()
      }
      add(bb) {
        let ub;
        if (this.isSaturated()) {
          const bb = this._samples[this._pos];
          ub = bb - this.average, this.average -= ub / (this._sampleCount - 1), this._m2 -= ub * (bb - this.average)
        } else this._sampleCount++;
        ub = bb - this.average, this.average += ub / this._sampleCount, this._m2 += ub * (bb - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = bb, this._pos++, this._pos %= this._samples.length
      }
      history(bb) {
        if (bb >= this._sampleCount || bb >= this._samples.length) return 0;
        const ub = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(ub - bb)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(bb) {
        const ub = this._samples.length;
        return (bb % ub + ub) % ub
      }
    }
    var Sb = hb(39374),
      ab = hb(38302),
      Hb = hb(39394),
      wb = hb(39350),
      Zb = hb(39316);

    function Xb(bb) {
      const ub = function(bb) {
        if (!(0, Zb.e)() || !document.body) return null;
        const ub = document.createElement("span");
        ub.textContent = "Hg", ub.style.font = bb;
        const hb = document.createElement("div");
        hb.style.display = "inline-block", hb.style.width = "1px", hb.style.height = "0px", hb.style.verticalAlign = "bottom";
        const Bb = document.createElement("div");
        let Ob, Gb;
        Bb.style.whiteSpace = "nowrap", Bb.appendChild(ub), Bb.appendChild(hb), document.body.appendChild(Bb);
        try {
          Gb = hb.getBoundingClientRect().top - ub.getBoundingClientRect().top, hb.style.verticalAlign = "baseline", Ob = hb.getBoundingClientRect().top - ub.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Bb)
        }
        const Ub = {
          ascent: Ob,
          height: Gb,
          descent: Gb - Ob
        };
        return pb(Ub) ? Ub : null
      }(bb);
      if (ub) return ub;
      const hb = function(bb) {
        let ub = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? ub = new OffscreenCanvas(64, 64) : (0, Zb.e)() && "function" === typeof document.createElement && (ub = document.createElement("canvas"), ub.width = 64, ub.height = 64);
          const hb = ub?.getContext("2d");
          if (!hb) return null;
          hb.font = bb;
          const Bb = hb.measureText("Hg"),
            Ob = Number(Bb.actualBoundingBoxAscent ?? Bb.fontBoundingBoxAscent),
            Gb = Number(Bb.actualBoundingBoxDescent ?? Bb.fontBoundingBoxDescent),
            Ub = {
              ascent: Ob,
              height: Ob + Gb,
              descent: Gb
            };
          return pb(Ub) ? Ub : null
        } catch {
          return null
        } finally {
          const bb = ub;
          "function" === typeof bb?.dispose && bb.dispose()
        }
      }(bb);
      return hb || function(bb) {
        const ub = Math.max(1, function(bb) {
            const ub = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(bb || ""));
            return ub ? Number(ub[1]) : 16
          }(bb)),
          hb = .8 * ub,
          Bb = .2 * ub;
        return {
          ascent: hb,
          height: hb + Bb,
          descent: Bb
        }
      }(bb)
    }

    function pb(bb) {
      return Number.isFinite(bb.ascent) && Number.isFinite(bb.height) && Number.isFinite(bb.descent) && bb.height > 0
    }

    function ob(bb) {
      if (bb.requestPointerLock) {
        const ub = bb.requestPointerLock();
        ub instanceof Promise ? ub.then((() => {
          bb.focus()
        })).catch((() => {})) : bb.focus()
      }
    }
    var Ab = hb(39411),
      lb = hb(39343),
      Kb = hb(39414),
      Wb = hb(39421);
    class Cb extends Gb.ThinEngine {
      static get NpmPackage() {
        return wb.d.NpmPackage
      }
      static get Version() {
        return wb.d.Version
      }
      static get Instances() {
        return Ob.b.Instances
      }
      static get LastCreatedEngine() {
        return Ob.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Ob.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(bb) {
        return wb.d.DefaultLoadingScreenFactory(bb)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Cb._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Kb.d)(), (0, Wb.d)(), super(bb, ub, hb, Bb), this._performanceMonitor = new Lb, this._drawCalls = new Ab.b, bb && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(bb) {
        super._sharedInit(bb),
          function(bb, ub, hb) {
            bb._onCanvasFocus = () => {
              bb.onCanvasFocusObservable.notifyObservers(bb)
            }, bb._onCanvasBlur = () => {
              bb.onCanvasBlurObservable.notifyObservers(bb)
            }, bb._onCanvasContextMenu = ub => {
              bb.disableContextMenu && ub.preventDefault()
            }, ub.addEventListener("focus", bb._onCanvasFocus), ub.addEventListener("blur", bb._onCanvasBlur), ub.addEventListener("contextmenu", bb._onCanvasContextMenu), bb._onBlur = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.disable(), bb._windowIsBackground = !0
            }, bb._onFocus = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.enable(), bb._windowIsBackground = !1
            }, bb._onCanvasPointerOut = hb => {
              document.elementFromPoint(hb.clientX, hb.clientY) !== ub && bb.onCanvasPointerOutObservable.notifyObservers(hb)
            };
            const Bb = bb.getHostWindow();
            Bb && "function" === typeof Bb.addEventListener && (Bb.addEventListener("blur", bb._onBlur), Bb.addEventListener("focus", bb._onFocus)), ub.addEventListener("pointerout", bb._onCanvasPointerOut), hb.doNotHandleTouchAction || function(bb) {
              bb && bb.setAttribute && (bb.setAttribute("touch-action", "none"), bb.style.touchAction = "none", bb.style.webkitTapHighlightColor = "transparent")
            }(ub), !wb.d.audioEngine && hb.audioEngine && wb.d.AudioEngineFactory && (wb.d.audioEngine = wb.d.AudioEngineFactory(bb.getRenderingCanvas(), bb.getAudioContext(), bb.getAudioDestination())), (0, Zb.e)() && (bb._onFullscreenChange = () => {
              bb.isFullscreen = !!document.fullscreenElement, bb.isFullscreen && bb._pointerLockRequested && ub && ob(ub)
            }, document.addEventListener("fullscreenchange", bb._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", bb._onFullscreenChange, !1), bb._onPointerLockChange = () => {
              bb.isPointerLock = document.pointerLockElement === ub
            }, document.addEventListener("pointerlockchange", bb._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", bb._onPointerLockChange, !1)), bb.enableOfflineSupport = void 0 !== wb.d.OfflineProviderFactory, bb._deterministicLockstep = !!hb.deterministicLockstep, bb._lockstepMaxSteps = hb.lockstepMaxSteps || 0, bb._timeStep = hb.timeStep || 1 / 60
          }(this, bb, this._creationOptions)
      }
      resizeImageBitmap(bb, ub, hb) {
        return function(bb, ub, hb, Bb) {
          const Ob = bb.createCanvas(hb, Bb).getContext("2d");
          if (!Ob) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Ob.drawImage(ub, 0, 0), Ob.getImageData(0, 0, hb, Bb).data
        }(this, bb, ub, hb)
      }
      async _createImageBitmapFromSource(bb, ub) {
        return await async function(bb, ub, hb) {
          return await new Promise(((Bb, Ob) => {
            const Gb = new Image;
            Gb.onload = () => {
              Gb.decode().then((() => {
                bb.createImageBitmap(Gb, hb).then((bb => {
                  Bb(bb)
                }))
              }))
            }, Gb.onerror = () => {
              Ob(`Error loading image ${Gb.src}`)
            }, Gb.src = ub
          }))
        }(this, bb, ub)
      }
      switchFullscreen(bb) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(bb)
      }
      enterFullscreen(bb) {
        this.isFullscreen || (this._pointerLockRequested = bb, this._renderingCanvas && function(bb) {
          const ub = bb.requestFullscreen || bb.webkitRequestFullscreen;
          ub && ub.call(bb)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const bb = document;
          document.exitFullscreen ? document.exitFullscreen() : bb.webkitCancelFullScreen && bb.webkitCancelFullScreen()
        }()
      }
      setDitheringState(bb) {
        bb ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(bb) {
        bb ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(bb, ub, hb, Bb) {
        const Ob = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(bb, ub, hb, Bb), Ob
      }
      scissorClear(bb, ub, hb, Bb, Ob) {
        this.enableScissor(bb, ub, hb, Bb), this.clear(Ob, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(bb) {
        const ub = this._gl.getAttachedShaders(bb);
        return ub ? this._gl.getShaderSource(ub[0]) : null
      }
      getFragmentShaderSource(bb) {
        const ub = this._gl.getAttachedShaders(bb);
        return ub ? this._gl.getShaderSource(ub[1]) : null
      }
      set framebufferDimensionsObject(bb) {
        this._framebufferDimensionsObject = bb, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const bb of this.scenes) bb.resetCachedMaterial(), bb._rebuildGeometries();
        for (const bb of this._virtualScenes) bb.resetCachedMaterial(), bb._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(bb) {
        return Xb(bb)
      }
      enterPointerlock() {
        this._renderingCanvas && ob(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      rW() {
        this._measureFps(), super.rW()
      }
      _deletePipelineContext(bb) {
        const ub = bb;
        ub && ub.program && ub.transformFeedback && (this.deleteTransformFeedback(ub.transformFeedback), ub.transformFeedback = null), super._deletePipelineContext(bb)
      }
      createShaderProgram(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Ob = Ob || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Ub = super.createShaderProgram(bb, ub, hb, Bb, Ob, Gb);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Ub
      }
      _createShaderProgram(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Gb = Bb.createProgram();
        if (bb.program = Gb, !Gb) throw new Error("Unable to create program");
        if (Bb.attachShader(Gb, ub), Bb.attachShader(Gb, hb), this.NX > 1 && Ob) {
          const ub = this.createTransformFeedback();
          this.bindTransformFeedback(ub), this.setTranformFeedbackVaryings(Gb, Ob), bb.transformFeedback = ub
        }
        return Bb.linkProgram(Gb), this.NX > 1 && Ob && this.bindTransformFeedback(null), bb.context = Bb, bb.vertexShader = ub, bb.fragmentShader = hb, bb.isParallelCompiled || this._finalizePipelineContext(bb), Gb
      }
      _releaseTexture(bb) {
        super._releaseTexture(bb)
      }
      _releaseRenderTargetWrapper(bb) {
        super._releaseRenderTargetWrapper(bb);
        for (const ub of this.scenes) {
          for (const hb of ub.postProcesses) hb._outputTexture === bb && (hb._outputTexture = null);
          for (const hb of ub.cameras)
            for (const ub of hb._postProcesses) ub && ub._outputTexture === bb && (ub._outputTexture = null)
        }
      }
      _rescaleTexture(bb, ub, hb, Bb, Ob) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Gb = this.createRenderTargetTexture({
          width: ub.width,
          height: ub.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Cb._RescalePostProcessFactory && (this._rescalePostProcess = Cb._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Ub = () => {
              this._rescalePostProcess.onApply = function(ub) {
                ub._bindTexture("textureSampler", bb)
              };
              let Ub = hb;
              Ub || (Ub = this.scenes[this.scenes.length - 1]), Ub.postProcessManager.directRender([this._rescalePostProcess], Gb, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, ub, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Bb, 0, 0, ub.width, ub.height, 0), this.unBindFramebuffer(Gb), Gb.dispose(), Ob && Ob()
            },
            Lb = this._rescalePostProcess.getEffect();
          Lb ? Lb.executeWhenCompiled(Ub) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((bb => {
            bb.executeWhenCompiled(Ub)
          }))
        }
      }
      wrapWebGLTexture(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Ub = new Hb.c(bb, this._gl),
          Lb = new Bb.b(this, 15, !0);
        return Lb._hardwareTexture = Ub, Lb.baseWidth = Ob, Lb.baseHeight = Gb, Lb.width = Ob, Lb.height = Gb, Lb.isReady = !0, Lb.useMipMaps = ub, this.updateTextureSamplingMode(hb, Lb), Lb
      }
      updateWrappedWebGLTexture(bb, ub) {
        if (15 !== bb.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Bb of this._renderTargetWrapperCache)
          if (Bb.textures?.includes(bb)) {
            if (Bb.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Bb._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } bb._hardwareTexture = new Hb.c(ub, this._gl), bb.isReady = !0, bb._cachedCoordinatesMode = null, bb._cachedWrapU = null, bb._cachedWrapV = null, bb._cachedWrapR = null, bb._cachedAnisotropicFilteringLevel = null;
        for (const Bb in this._boundTexturesCache) this._boundTexturesCache[Bb] === bb && (this._boundTexturesCache[Bb] = null);
        this.updateTextureSamplingMode(bb.samplingMode, bb);
        const hb = this._gl;
        for (const Bb of this._renderTargetWrapperCache) {
          if (Bb.texture !== bb) continue;
          const Ob = Bb,
            Gb = Bb.samples,
            Ub = Gb > 1;
          Ob._framebuffer && hb.deleteFramebuffer(Ob._framebuffer), !Ub && Ob._depthStencilBuffer && (hb.deleteRenderbuffer(Ob._depthStencilBuffer), Ob._depthStencilBuffer = null);
          const Lb = this._currentFramebuffer,
            Yb = hb.createFramebuffer();
          this._bindUnboundFramebuffer(Yb), hb.framebufferTexture2D(hb.FRAMEBUFFER, hb.COLOR_ATTACHMENT0, hb.TEXTURE_2D, ub, 0), Ub || (Ob._depthStencilBuffer = this._setupFramebufferDepthAttachments(Bb._generateStencilBuffer, Bb._generateDepthBuffer, Bb.width, Bb.height)), this._bindUnboundFramebuffer(Lb), Ob._framebuffer = Yb, Ub && (Bb._samples = 1, this.updateRenderTargetTextureSampleCount(Ob, Gb))
        }
      }
      _uploadImageToTexture(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ob = this._gl,
          Gb = this._getWebGLTextureType(bb.type),
          Ub = this._getInternalFormat(bb.format),
          Lb = this._getRGBABufferInternalSizedFormat(bb.type, Ub),
          Yb = bb.isCube ? Ob.TEXTURE_CUBE_MAP : Ob.TEXTURE_2D;
        this._bindTextureDirectly(Yb, bb, !0), this._unpackFlipY(bb.invertY);
        let Sb = Ob.TEXTURE_2D;
        bb.isCube && (Sb = Ob.TEXTURE_CUBE_MAP_POSITIVE_X + hb), Ob.texImage2D(Sb, Bb, Lb, Ub, Gb, ub), this._bindTextureDirectly(Yb, null, !0)
      }
      updateTextureComparisonFunction(bb, ub) {
        if (1 === this.NX) return void ab.b.Error("WebGL 1 does not support texture comparison.");
        const hb = this._gl;
        bb.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, bb, !0), 0 === ub ? (hb.texParameteri(hb.TEXTURE_CUBE_MAP, hb.TEXTURE_COMPARE_FUNC, 515), hb.texParameteri(hb.TEXTURE_CUBE_MAP, hb.TEXTURE_COMPARE_MODE, hb.NONE)) : (hb.texParameteri(hb.TEXTURE_CUBE_MAP, hb.TEXTURE_COMPARE_FUNC, ub), hb.texParameteri(hb.TEXTURE_CUBE_MAP, hb.TEXTURE_COMPARE_MODE, hb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), 0 === ub ? (hb.texParameteri(hb.TEXTURE_2D, hb.TEXTURE_COMPARE_FUNC, 515), hb.texParameteri(hb.TEXTURE_2D, hb.TEXTURE_COMPARE_MODE, hb.NONE)) : (hb.texParameteri(hb.TEXTURE_2D, hb.TEXTURE_COMPARE_FUNC, ub), hb.texParameteri(hb.TEXTURE_2D, hb.TEXTURE_COMPARE_MODE, hb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), bb._comparisonFunction = ub
      }
      createInstancesBuffer(bb) {
        const ub = this._gl.createBuffer();
        if (!ub) throw new Error("Unable to create instance buffer");
        const hb = new Sb.e(ub);
        return hb.LH = bb, this.bindArrayBuffer(hb), this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, this._gl.DYNAMIC_DRAW), hb.references = 1, hb
      }
      deleteInstancesBuffer(bb) {
        this._gl.deleteBuffer(bb)
      }
      async _clientWaitAsync(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Bb = this._gl;
        return await new Promise(((Ob, Gb) => {
          (0, lb.g)((() => {
            const hb = Bb.clientWaitSync(bb, ub, 0);
            if (hb == Bb.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return hb != Bb.TIMEOUT_EXPIRED
          }), Ob, Gb, hb)
        }))
      }
      _readPixelsAsync(bb, ub, hb, Bb, Ob, Gb, Ub) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Lb = this._gl,
          Yb = Lb.createBuffer();
        Lb.bindBuffer(Lb.PIXEL_PACK_BUFFER, Yb), Lb.bufferData(Lb.PIXEL_PACK_BUFFER, Ub.byteLength, Lb.STREAM_READ), Lb.readPixels(bb, ub, hb, Bb, Ob, Gb, 0), Lb.bindBuffer(Lb.PIXEL_PACK_BUFFER, null);
        const Sb = Lb.fenceSync(Lb.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Sb ? (Lb.flush(), this._clientWaitAsync(Sb, 0, 10).then((() => (Lb.deleteSync(Sb), Lb.bindBuffer(Lb.PIXEL_PACK_BUFFER, Yb), Lb.getBufferSubData(Lb.PIXEL_PACK_BUFFER, 0, Ub), Lb.bindBuffer(Lb.PIXEL_PACK_BUFFER, null), Lb.deleteBuffer(Yb), Ub)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(bb, ub) {
            1 === Ob.b.Instances.length && wb.d.audioEngine && (wb.d.audioEngine.dispose(), wb.d.audioEngine = null);
            const hb = bb.getHostWindow();
            hb && "function" === typeof hb.removeEventListener && (hb.removeEventListener("blur", bb._onBlur), hb.removeEventListener("focus", bb._onFocus)), ub && (ub.removeEventListener("focus", bb._onCanvasFocus), ub.removeEventListener("blur", bb._onCanvasBlur), ub.removeEventListener("pointerout", bb._onCanvasPointerOut), ub.removeEventListener("contextmenu", bb._onCanvasContextMenu)), (0, Zb.e)() && (document.removeEventListener("fullscreenchange", bb._onFullscreenChange), document.removeEventListener("mozfullscreenchange", bb._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", bb._onFullscreenChange), document.removeEventListener("msfullscreenchange", bb._onFullscreenChange), document.removeEventListener("pointerlockchange", bb._onPointerLockChange), document.removeEventListener("mspointerlockchange", bb._onPointerLockChange), document.removeEventListener("mozpointerlockchange", bb._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", bb._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Cb.ALPHA_DISABLE = 0, Cb.ALPHA_ADD = 1, Cb.ALPHA_COMBINE = 2, Cb.ALPHA_SUBTRACT = 3, Cb.ALPHA_MULTIPLY = 4, Cb.ALPHA_MAXIMIZED = 5, Cb.ALPHA_ONEONE = 6, Cb.ALPHA_PREMULTIPLIED = 7, Cb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Cb.ALPHA_INTERPOLATE = 9, Cb.ALPHA_SCREENMODE = 10, Cb.DELAYLOADSTATE_NONE = 0, Cb.DELAYLOADSTATE_LOADED = 1, Cb.DELAYLOADSTATE_LOADING = 2, Cb.DELAYLOADSTATE_NOTLOADED = 4, Cb.NEVER = 512, Cb.ALWAYS = 519, Cb.LESS = 513, Cb.EQUAL = 514, Cb.LEQUAL = 515, Cb.GREATER = 516, Cb.GEQUAL = 518, Cb.NOTEQUAL = 517, Cb.KEEP = 7680, Cb.REPLACE = 7681, Cb.INCR = 7682, Cb.DECR = 7683, Cb.INVERT = 5386, Cb.INCR_WRAP = 34055, Cb.DECR_WRAP = 34056, Cb.TEXTURE_CLAMP_ADDRESSMODE = 0, Cb.TEXTURE_WRAP_ADDRESSMODE = 1, Cb.TEXTURE_MIRROR_ADDRESSMODE = 2, Cb.TEXTUREFORMAT_ALPHA = 0, Cb.TEXTUREFORMAT_LUMINANCE = 1, Cb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Cb.TEXTUREFORMAT_RGB = 4, Cb.TEXTUREFORMAT_RGBA = 5, Cb.TEXTUREFORMAT_RED = 6, Cb.TEXTUREFORMAT_R = 6, Cb.TEXTUREFORMAT_R16_UNORM = 33322, Cb.TEXTUREFORMAT_RG16_UNORM = 33324, Cb.TEXTUREFORMAT_RGB16_UNORM = 32852, Cb.TEXTUREFORMAT_RGBA16_UNORM = 32859, Cb.TEXTUREFORMAT_R16_SNORM = 36760, Cb.TEXTUREFORMAT_RG16_SNORM = 36761, Cb.TEXTUREFORMAT_RGB16_SNORM = 36762, Cb.TEXTUREFORMAT_RGBA16_SNORM = 36763, Cb.TEXTUREFORMAT_RG = 7, Cb.TEXTUREFORMAT_RED_INTEGER = 8, Cb.TEXTUREFORMAT_R_INTEGER = 8, Cb.TEXTUREFORMAT_RG_INTEGER = 9, Cb.TEXTUREFORMAT_RGB_INTEGER = 10, Cb.TEXTUREFORMAT_RGBA_INTEGER = 11, Cb.TEXTURETYPE_UNSIGNED_BYTE = 0, Cb.TEXTURETYPE_UNSIGNED_INT = 0, Cb.TEXTURETYPE_FLOAT = 1, Cb.TEXTURETYPE_HALF_FLOAT = 2, Cb.TEXTURETYPE_BYTE = 3, Cb.TEXTURETYPE_SHORT = 4, Cb.TEXTURETYPE_UNSIGNED_SHORT = 5, Cb.TEXTURETYPE_INT = 6, Cb.TEXTURETYPE_UNSIGNED_INTEGER = 7, Cb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Cb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Cb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Cb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Cb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Cb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Cb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Cb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Cb.TEXTURE_NEAREST_SAMPLINGMODE = 1, Cb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Cb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Cb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Cb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Cb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Cb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Cb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Cb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Cb.TEXTURE_NEAREST_LINEAR = 7, Cb.TEXTURE_NEAREST_NEAREST = 1, Cb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Cb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Cb.TEXTURE_LINEAR_LINEAR = 2, Cb.TEXTURE_LINEAR_NEAREST = 12, Cb.TEXTURE_EXPLICIT_MODE = 0, Cb.TEXTURE_SPHERICAL_MODE = 1, Cb.TEXTURE_PLANAR_MODE = 2, Cb.TEXTURE_CUBIC_MODE = 3, Cb.TEXTURE_PROJECTION_MODE = 4, Cb.TEXTURE_SKYBOX_MODE = 5, Cb.TEXTURE_INVCUBIC_MODE = 6, Cb.TEXTURE_EQUIRECTANGULAR_MODE = 7, Cb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Cb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Cb.SCALEMODE_FLOOR = 1, Cb.SCALEMODE_NEAREST = 2, Cb.SCALEMODE_CEILING = 3
  },
  39450: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(39402);
    class Ob {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = bb, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, bb && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Bb.c)(bb.format))
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
      getBaseArrayLayer(bb) {
        if (!this._textures) return -1;
        const ub = this._textures[bb],
          hb = this._layerIndices?.[bb] ?? 0,
          Bb = this._faceIndices?.[bb] ?? 0;
        return ub.isCube ? 6 * hb + Bb : ub.is3D ? 0 : hb
      }
      get samples() {
        return this._samples
      }
      setSamples(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === bb && !hb) return bb;
        const Bb = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, bb, ub) : this._engine.updateRenderTargetTextureSampleCount(this, bb);
        return this._samples = bb, Bb
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(bb, ub, hb, Bb, Ob) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = bb, this._isCube = ub, this._size = hb, this._engine = Bb, this._depthStencilTexture = null, this.label = Ob
      }
      setTextures(bb) {
        Array.isArray(bb) ? this._textures = bb : this._textures = bb ? [bb] : null
      }
      setTexture(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[ub] !== bb && (this._textures[ub] && hb && this._textures[ub].dispose(), this._textures[ub] = bb)
      }
      setLayerAndFaceIndices(bb, ub) {
        this._layerIndices = bb, this._faceIndices = ub
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== ub && ub >= 0 && (this._layerIndices[bb] = ub), void 0 !== hb && hb >= 0 && (this._faceIndices[bb] = hb)
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = hb, this._depthStencilTextureLabel = Gb, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: ub,
          comparisonFunction: bb,
          generateStencil: hb,
          isCube: this._isCube,
          samples: Bb,
          depthTextureFormat: Ob,
          label: Gb
        }, this), this._depthStencilTexture
      }
      _shareDepth(bb) {
        this.shareDepth(bb)
      }
      shareDepth(bb) {
        this._depthStencilTexture && (bb._depthStencilTexture && bb._depthStencilTexture.dispose(), bb._depthStencilTexture = this._depthStencilTexture, bb._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(bb) {
        this.texture && this.texture._swapAndDie(bb), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let bb = null;
        if (this._isMulti) {
          const ub = this.textures;
          if (ub && ub.length > 0) {
            let hb = !1,
              Bb = ub.length,
              Ob = -1;
            const Gb = ub[ub.length - 1]._source;
            14 !== Gb && 12 !== Gb || (hb = !0, Ob = ub[ub.length - 1].format, Bb--);
            const Ub = [],
              Lb = [],
              Yb = [],
              Sb = [],
              ab = [],
              Hb = [],
              wb = [],
              Zb = {};
            for (let bb = 0; bb < Bb; ++bb) {
              const hb = ub[bb];
              Ub.push(hb.samplingMode), Lb.push(hb.type), Yb.push(hb.format);
              void 0 !== Zb[hb.uniqueId] ? (Sb.push(-1), wb.push(0)) : (Zb[hb.uniqueId] = bb, hb.is2DArray ? (Sb.push(35866), wb.push(hb.depth)) : hb.isCube ? (Sb.push(34067), wb.push(0)) : hb.is3D ? (Sb.push(32879), wb.push(hb.depth)) : (Sb.push(3553), wb.push(0))), this._faceIndices && ab.push(this._faceIndices[bb] ?? 0), this._layerIndices && Hb.push(this._layerIndices[bb] ?? 0)
            }
            const Xb = {
                samplingModes: Ub,
                generateMipMaps: ub[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: hb,
                depthTextureFormat: Ob,
                types: Lb,
                formats: Yb,
                eUb: Bb,
                targetTypes: Sb,
                faceIndex: ab,
                layerIndex: Hb,
                layerCounts: wb,
                label: this.label
              },
              pb = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            bb = this._engine.createMultipleRenderTarget(pb, Xb);
            for (let ob = 0; ob < Bb; ++ob) {
              if (-1 !== Sb[ob]) continue;
              const hb = Zb[ub[ob].uniqueId];
              bb.setTexture(bb.textures[hb], ob)
            }
          }
        } else {
          const ub = {};
          if (ub.generateDepthBuffer = this._generateDepthBuffer, ub.generateMipMaps = this.texture?.generateMipMaps ?? !1, ub.generateStencilBuffer = this._generateStencilBuffer, ub.samplingMode = this.texture?.samplingMode, ub.type = this.texture?.type, ub.format = this.texture?.format, ub.noColorAttachment = !this._textures, ub.label = this.label, this.isCube) bb = this._engine.createRenderTargetCubeTexture(this.width, ub);
          else {
            const hb = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            bb = this._engine.createRenderTargetTexture(hb, ub)
          }
          bb.texture && (bb.texture.isReady = !0)
        }
        return bb
      }
      _swapRenderTargetWrapper(bb) {
        if (this._textures && bb._textures)
          for (let ub = 0; ub < this._textures.length; ++ub) this._textures[ub]._swapAndDie(bb._textures[ub], !1), bb._textures[ub].isReady = !0;
        this._depthStencilTexture && bb._depthStencilTexture && (this._depthStencilTexture._swapAndDie(bb._depthStencilTexture), bb._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const bb = this._cloneRenderTargetWrapper();
        if (bb) {
          if (this._depthStencilTexture) {
            const ub = this._depthStencilTexture.samplingMode,
              hb = this._depthStencilTexture.format,
              Bb = 2 === ub || 3 === ub || 11 === ub;
            bb.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Bb, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, hb, this._depthStencilTextureLabel)
          }
          this.samples > 1 && bb.setSamples(this.samples), bb._swapRenderTargetWrapper(this), bb.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let bb = 0; bb < this._textures.length; ++bb) this._textures[bb].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39875: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      static get ForceFullSceneLoadingForIncremental() {
        return Bb._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(bb) {
        Bb._ForceFullSceneLoadingForIncremental = bb
      }
      static get ShowLoadingScreen() {
        return Bb._ShowLoadingScreen
      }
      static set ShowLoadingScreen(bb) {
        Bb._ShowLoadingScreen = bb
      }
      static get loggingLevel() {
        return Bb._LoggingLevel
      }
      static set loggingLevel(bb) {
        Bb._LoggingLevel = bb
      }
      static get CleanBoneMatrixWeights() {
        return Bb._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(bb) {
        Bb._CleanBoneMatrixWeights = bb
      }
    }
    Bb._ForceFullSceneLoadingForIncremental = !1, Bb._ShowLoadingScreen = !0, Bb._CleanBoneMatrixWeights = !1, Bb._LoggingLevel = 0
  },
  39540: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(38302);
    const Ob = new Map;

    function Gb(bb, ub) {
      (function(bb) {
        return Ob.delete(bb)
      })(bb) && Bb.b.Warn(`Extension with the name '${bb}' already exists`), Ob.set(bb, ub)
    }

    function Ub(bb, ub) {
      "image/ktx" !== ub && "image/ktx2" !== ub || (bb = ".ktx"), Ob.has(bb) || (bb.endsWith(".ies") && Gb(".ies", (async () => await hb.e(300).then((() => hb(41224))).then((bb => new bb._IESTextureLoader)))), bb.endsWith(".dds") && Gb(".dds", (async () => await hb.e(298).then((() => hb(41230))).then((bb => new bb._DDSTextureLoader)))), bb.endsWith(".basis") && Gb(".basis", (async () => await hb.e(301).then((() => hb(41236))).then((bb => new bb._BasisTextureLoader)))), bb.endsWith(".env") && Gb(".env", (async () => await Promise.all([hb.e(302), hb.e(299)]).then((() => hb(41241))).then((bb => new bb._ENVTextureLoader)))), bb.endsWith(".hdr") && Gb(".hdr", (async () => await hb.e(303).then((() => hb(41286))).then((bb => new bb._HDRTextureLoader)))), (bb.endsWith(".ktx") || bb.endsWith(".ktx2")) && (Gb(".ktx", (async () => await hb.e(304).then((() => hb(41289))).then((bb => new bb._KTXTextureLoader)))), Gb(".ktx2", (async () => await hb.e(304).then((() => hb(41289))).then((bb => new bb._KTXTextureLoader))))), bb.endsWith(".tga") && Gb(".tga", (async () => await hb.e(305).then((() => hb(41293))).then((bb => new bb._TGATextureLoader)))), bb.endsWith(".exr") && Gb(".exr", (async () => await hb.e(306).then((() => hb(41299))).then((bb => new bb._ExrTextureLoader)))));
      const Bb = Ob.get(bb);
      return Bb ? Promise.resolve(Bb(ub)) : null
    }
  },
  39900: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      f: () => Sb
    });
    var Bb = hb(39728),
      Ob = hb(39492),
      Gb = hb(36762);
    class Ub extends Bb.e {
      get v_() {
        return this._subMaterials
      }
      set v_(bb) {
        this._subMaterials = bb, this._hookArray(bb)
      }
      getChildren() {
        return this.v_
      }
      constructor(bb, ub) {
        super(bb, ub, !0), this._waitingSubMaterialsUniqueIds = [], this.ZN().addMultiMaterial(this), this.v_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(bb) {
        var ub = this;
        const hb = bb.push;
        bb.push = function() {
          for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
          const Ub = hb.apply(bb, Ob);
          return ub._markAllSubMeshesAsTexturesDirty(), Ub
        };
        const Bb = bb.splice;
        bb.splice = (ub, hb) => {
          const Ob = Bb.call(bb, ub, hb ?? bb.length);
          return this._markAllSubMeshesAsTexturesDirty(), Ob
        }
      }
      getSubMaterial(bb) {
        return bb < 0 || bb >= this.v_.length ? this.ZN().defaultMaterial : this.v_[bb]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.v_.map((bb => bb ? bb.getActiveTextures() : [])))
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (let ub = 0; ub < this.v_.length; ub++)
          if (this.v_[ub]?.hasTexture(bb)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(bb, ub, hb) {
        for (let Bb = 0; Bb < this.v_.length; Bb++) {
          const Ob = this.v_[Bb];
          if (Ob) {
            if (Ob._storeEffectOnSubMeshes) {
              if (!Ob.isReadyForSubMesh(bb, ub, hb)) return !1;
              continue
            }
            if (!Ob.isReady(bb)) return !1
          }
        }
        return !0
      }
      clone(bb, ub) {
        const hb = new Ub(bb, this.ZN());
        for (let Bb = 0; Bb < this.v_.length; Bb++) {
          let Ob;
          const Gb = this.v_[Bb];
          Ob = ub && Gb ? Gb.clone(bb + "-" + Gb.name) : this.v_[Bb], hb.v_.push(Ob)
        }
        return hb
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, Ob.c && (bb.tags = Ob.c.GetTags(this)), bb.materialsUniqueIds = [], bb.materials = [];
        for (let ub = 0; ub < this.v_.length; ub++) {
          const hb = this.v_[ub];
          hb ? (bb.materialsUniqueIds.push(hb.uniqueId), bb.materials.push(hb.id)) : (bb.materialsUniqueIds.push(null), bb.materials.push(null))
        }
        return bb
      }
      dispose(bb, ub, hb) {
        const Bb = this.ZN();
        if (!Bb) return;
        if (hb)
          for (let Gb = 0; Gb < this.v_.length; Gb++) {
            const hb = this.v_[Gb];
            hb && hb.dispose(bb, ub)
          }
        const Ob = Bb.multiMaterials.indexOf(this);
        Ob >= 0 && Bb.multiMaterials.splice(Ob, 1), super.dispose(bb, ub)
      }
    }
    let Lb = !1;

    function Yb(bb, ub) {
      const hb = new Ub(bb.name, ub);
      if (hb.id = bb.id, hb._loadedUniqueId = bb.uniqueId, Ob.c && Ob.c.AddTagsTo(hb, bb.tags), bb.materialsUniqueIds) hb._waitingSubMaterialsUniqueIds = bb.materialsUniqueIds;
      else
        for (const Bb of bb.materials) hb.v_.push(ub.getLastMaterialById(Bb));
      return hb
    }

    function Sb() {
      Lb || (Lb = !0, Ub.ParseMultiMaterial = Yb, (0, Gb.f)("BABYLON.MultiMaterial", Ub))
    }
  },
  39672: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb, Ob, Gb = hb(36727);
    ! function(bb) {
      bb[bb.LOCAL = 0] = "LOCAL", bb[bb.WORLD = 1] = "WORLD", bb[bb.BONE = 2] = "BONE"
    }(Bb || (Bb = {}));
    class Ub {}
    Ub.X = new Gb.q(1, 0, 0), Ub.Y = new Gb.q(0, 1, 0), Ub.Z = new Gb.q(0, 0, 1),
      function(bb) {
        bb[bb.X = 0] = "X", bb[bb.Y = 1] = "Y", bb[bb.Z = 2] = "Z"
      }(Ob || (Ob = {}))
  },
  39456: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      g: () => Sb
    });
    var Bb = hb(36727);
    const Ob = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Gb = [() => 1, bb => bb.y, bb => bb.z, bb => bb.x, bb => bb.x * bb.y, bb => bb.y * bb.z, bb => 3 * bb.z * bb.z - 1, bb => bb.x * bb.z, bb => bb.x * bb.x - bb.y * bb.y],
      Ub = (bb, ub) => Ob[bb] * Gb[bb](ub),
      Lb = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Yb {
      constructor() {
        this.preScaled = !1, this.l00 = Bb.q.Zero(), this.l1_1 = Bb.q.Zero(), this.l10 = Bb.q.Zero(), this.l11 = Bb.q.Zero(), this.l2_2 = Bb.q.Zero(), this.l2_1 = Bb.q.Zero(), this.l20 = Bb.q.Zero(), this.l21 = Bb.q.Zero(), this.l22 = Bb.q.Zero()
      }
      addLight(bb, ub, hb) {
        Bb.i.YX[0].set(ub.r, ub.g, ub.b);
        const Ob = Bb.i.YX[0],
          Gb = Bb.i.YX[1];
        Ob.scaleToRef(hb, Gb), Gb.scaleToRef(Ub(0, bb), Bb.i.YX[2]), this.l00.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(1, bb), Bb.i.YX[2]), this.l1_1.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(2, bb), Bb.i.YX[2]), this.l10.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(3, bb), Bb.i.YX[2]), this.l11.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(4, bb), Bb.i.YX[2]), this.l2_2.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(5, bb), Bb.i.YX[2]), this.l2_1.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(6, bb), Bb.i.YX[2]), this.l20.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(7, bb), Bb.i.YX[2]), this.l21.addInPlace(Bb.i.YX[2]), Gb.scaleToRef(Ub(8, bb), Bb.i.YX[2]), this.l22.addInPlace(Bb.i.YX[2])
      }
      scaleInPlace(bb) {
        this.l00.scaleInPlace(bb), this.l1_1.scaleInPlace(bb), this.l10.scaleInPlace(bb), this.l11.scaleInPlace(bb), this.l2_2.scaleInPlace(bb), this.l2_1.scaleInPlace(bb), this.l20.scaleInPlace(bb), this.l21.scaleInPlace(bb), this.l22.scaleInPlace(bb)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Lb[0]), this.l1_1.scaleInPlace(Lb[1]), this.l10.scaleInPlace(Lb[2]), this.l11.scaleInPlace(Lb[3]), this.l2_2.scaleInPlace(Lb[4]), this.l2_1.scaleInPlace(Lb[5]), this.l20.scaleInPlace(Lb[6]), this.l21.scaleInPlace(Lb[7]), this.l22.scaleInPlace(Lb[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Ob[0]), this.l1_1.scaleInPlace(Ob[1]), this.l10.scaleInPlace(Ob[2]), this.l11.scaleInPlace(Ob[3]), this.l2_2.scaleInPlace(Ob[4]), this.l2_1.scaleInPlace(Ob[5]), this.l20.scaleInPlace(Ob[6]), this.l21.scaleInPlace(Ob[7]), this.l22.scaleInPlace(Ob[8])
      }
      updateFromArray(bb) {
        return Bb.q.FromArrayToRef(bb[0], 0, this.l00), Bb.q.FromArrayToRef(bb[1], 0, this.l1_1), Bb.q.FromArrayToRef(bb[2], 0, this.l10), Bb.q.FromArrayToRef(bb[3], 0, this.l11), Bb.q.FromArrayToRef(bb[4], 0, this.l2_2), Bb.q.FromArrayToRef(bb[5], 0, this.l2_1), Bb.q.FromArrayToRef(bb[6], 0, this.l20), Bb.q.FromArrayToRef(bb[7], 0, this.l21), Bb.q.FromArrayToRef(bb[8], 0, this.l22), this
      }
      updateFromFloatsArray(bb) {
        return Bb.q.FromFloatsToRef(bb[0], bb[1], bb[2], this.l00), Bb.q.FromFloatsToRef(bb[3], bb[4], bb[5], this.l1_1), Bb.q.FromFloatsToRef(bb[6], bb[7], bb[8], this.l10), Bb.q.FromFloatsToRef(bb[9], bb[10], bb[11], this.l11), Bb.q.FromFloatsToRef(bb[12], bb[13], bb[14], this.l2_2), Bb.q.FromFloatsToRef(bb[15], bb[16], bb[17], this.l2_1), Bb.q.FromFloatsToRef(bb[18], bb[19], bb[20], this.l20), Bb.q.FromFloatsToRef(bb[21], bb[22], bb[23], this.l21), Bb.q.FromFloatsToRef(bb[24], bb[25], bb[26], this.l22), this
      }
      static FromArray(bb) {
        return (new Yb).updateFromArray(bb)
      }
      static FromPolynomial(bb) {
        const ub = new Yb;
        return ub.l00 = bb.xx.scale(.376127).add(bb.yy.scale(.376127)).add(bb.zz.scale(.376126)), ub.l1_1 = bb.y.scale(.977204), ub.l10 = bb.z.scale(.977204), ub.l11 = bb.x.scale(.977204), ub.l2_2 = bb.xy.scale(1.16538), ub.l2_1 = bb.yz.scale(1.16538), ub.l20 = bb.zz.scale(1.34567).subtract(bb.xx.scale(.672834)).subtract(bb.yy.scale(.672834)), ub.l21 = bb.zx.scale(1.16538), ub.l22 = bb.xx.scale(1.16538).subtract(bb.yy.scale(1.16538)), ub.l1_1.scaleInPlace(-1), ub.l11.scaleInPlace(-1), ub.l2_1.scaleInPlace(-1), ub.l21.scaleInPlace(-1), ub.scaleInPlace(Math.PI), ub
      }
    }
    class Sb {
      constructor() {
        this.x = Bb.q.Zero(), this.y = Bb.q.Zero(), this.z = Bb.q.Zero(), this.xx = Bb.q.Zero(), this.yy = Bb.q.Zero(), this.zz = Bb.q.Zero(), this.xy = Bb.q.Zero(), this.yz = Bb.q.Zero(), this.zx = Bb.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Yb.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(bb) {
        Bb.i.YX[0].M_(bb.r, bb.g, bb.b);
        const ub = Bb.i.YX[0];
        this.xx.addInPlace(ub), this.yy.addInPlace(ub), this.zz.addInPlace(ub)
      }
      scaleInPlace(bb) {
        this.x.scaleInPlace(bb), this.y.scaleInPlace(bb), this.z.scaleInPlace(bb), this.xx.scaleInPlace(bb), this.yy.scaleInPlace(bb), this.zz.scaleInPlace(bb), this.yz.scaleInPlace(bb), this.zx.scaleInPlace(bb), this.xy.scaleInPlace(bb)
      }
      updateFromHarmonics(bb) {
        return this._harmonics = bb, this.x.mD(bb.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.mD(bb.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.mD(bb.l10), this.z.scaleInPlace(1.02333), this.xx.mD(bb.l00), Bb.i.YX[0].mD(bb.l20).scaleInPlace(.247708), Bb.i.YX[1].mD(bb.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).tBb(Bb.i.YX[0]).addInPlace(Bb.i.YX[1]), this.yy.mD(bb.l00), this.yy.scaleInPlace(.886277).tBb(Bb.i.YX[0]).tBb(Bb.i.YX[1]), this.zz.mD(bb.l00), Bb.i.YX[0].mD(bb.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Bb.i.YX[0]), this.yz.mD(bb.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.mD(bb.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.mD(bb.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(bb) {
        return (new Sb).updateFromHarmonics(bb)
      }
      static FromArray(bb) {
        const ub = new Sb;
        return Bb.q.FromArrayToRef(bb[0], 0, ub.x), Bb.q.FromArrayToRef(bb[1], 0, ub.y), Bb.q.FromArrayToRef(bb[2], 0, ub.z), Bb.q.FromArrayToRef(bb[3], 0, ub.xx), Bb.q.FromArrayToRef(bb[4], 0, ub.yy), Bb.q.FromArrayToRef(bb[5], 0, ub.zz), Bb.q.FromArrayToRef(bb[6], 0, ub.yz), Bb.q.FromArrayToRef(bb[7], 0, ub.zx), Bb.q.FromArrayToRef(bb[8], 0, ub.xy), ub
      }
    }
  },
  39886: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => vb,
      e: () => Jb
    });
    var Bb = hb(39463),
      Ob = hb(36753),
      Gb = hb(36727),
      Ub = hb(39609),
      Lb = hb(39862),
      Yb = hb(39892),
      Sb = hb(39603),
      ab = hb(39752),
      Hb = hb(39598);
    class wb {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Gb.q(0, 0, 0), this._diffPositionForCollisions = new Gb.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Zb, Xb, pb, ob = hb(39333),
      Ab = hb(39536),
      lb = hb(39763),
      Kb = hb(36893),
      Wb = hb(36734),
      Cb = hb(39672),
      db = hb(38302),
      rb = hb(39467),
      jb = hb(39350),
      nb = hb(36762);

    function Db(bb, ub) {
      return bb - Math.floor(bb / ub) * ub
    }

    function xb(bb, ub, hb) {
      bb instanceof Float32Array ? Gb.d.FromArrayToRef(bb, ub, hb) : hb.M_((0, Ab.b)(bb[ub]), (0, Ab.b)(bb[ub + 1]), (0, Ab.b)(bb[ub + 2]), (0, Ab.b)(bb[ub + 3]), (0, Ab.b)(bb[ub + 4]), (0, Ab.b)(bb[ub + 5]), (0, Ab.b)(bb[ub + 6]), (0, Ab.b)(bb[ub + 7]), (0, Ab.b)(bb[ub + 8]), (0, Ab.b)(bb[ub + 9]), (0, Ab.b)(bb[ub + 10]), (0, Ab.b)(bb[ub + 11]), (0, Ab.b)(bb[ub + 12]), (0, Ab.b)(bb[ub + 13]), (0, Ab.b)(bb[ub + 14]), (0, Ab.b)(bb[ub + 15]))
    }

    function zb(bb, ub, hb, Bb, Ob, Lb, Yb, Sb, ab) {
      const Hb = hb.texture,
        wb = Hb?.getInternalTexture(),
        Zb = wb?._bufferView;
      if (!(Zb instanceof Float32Array) && !(Zb instanceof Uint16Array)) return db.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Xb = Hb.getSize(),
        pb = function(bb, ub) {
          const hb = bb.y - bb.x + 1,
            Bb = ub * bb.w / hb,
            Ob = Bb < 1 ? 0 : 1,
            Gb = hb - Ob;
          let Ub = Db(Bb - Math.floor(Bb), 1) * Gb;
          return Ub = Db(Ub + bb.z, Gb), Math.floor(Ub) + bb.x + Ob
        }(Bb, hb.time);
      if (!isFinite(pb) || pb < 0 || pb >= Xb.height) return db.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const ob = Gb.i.YX[0],
        Ab = Gb.i.Matrix[0],
        lb = Gb.i.Matrix[1],
        Kb = pb * Xb.width * 4,
        Wb = ub === Ub.i.NormalKind ? Gb.q.TransformNormalFromFloatsToRef : Gb.q.TransformCoordinatesFromFloatsToRef;
      for (let Gb = 0, Ub = 0; Gb < bb.length; Gb += 3, Ub += 4) {
        let ub, hb;
        for (Ab.reset(), ub = 0; ub < 4 && ub < ab; ub++) hb = Lb[Ub + ub], hb > 0 && (xb(Zb, Kb + 16 * Math.floor(Ob[Ub + ub]), lb), lb.scaleAndAddToRef(hb, Ab));
        if (Yb && Sb)
          for (ub = 0; ub < 4 && ub + 4 < ab; ub++) hb = Sb[Ub + ub], hb > 0 && (xb(Zb, Kb + 16 * Math.floor(Yb[Ub + ub]), lb), lb.scaleAndAddToRef(hb, Ab));
        Wb(bb[Gb], bb[Gb + 1], bb[Gb + 2], Ab, ob), ob.toArray(bb, Gb)
      }
      return !0
    }
    class gb {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Gb.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class ib {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new gb, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new wb, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let vb = (() => {
        var bb;
        let ub, wb = Yb.g,
          Zb = [];
        return bb = class extends wb {
          static get BILLBOARDMODE_NONE() {
            return Yb.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Yb.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Yb.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Yb.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Yb.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Yb.g.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(bb) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = bb
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(bb) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = bb
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(bb) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = bb
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(bb) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = bb
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(bb) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = bb
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(bb) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== bb && (this._internalAbstractMeshDataInfo._morphTargetManager = bb, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(bb) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== bb && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = bb, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(bb) {
            return !!super._updateNonUniformScalingState(bb) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(bb) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = bb
          }
          set FH(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(bb)
          }
          set onCollisionPositionChange(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(bb)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(bb) {
            if (this._internalAbstractMeshDataInfo._visibility === bb) return;
            const ub = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = bb, (1 === ub && 1 !== bb || 1 !== ub && 1 === bb) && this._markSubMeshesAsDirty((bb => {
              bb.markAsMiscDirty(), bb.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(bb) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = bb
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(bb) {
            this._internalAbstractMeshDataInfo._renderingGroupId = bb
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(bb) {
            if (!Number.isInteger(bb) || bb < 0 || bb > 255 || 0 !== bb && 0 === (63 & bb)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = bb
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(bb) {
            this._setMaterial(bb)
          }
          _setMaterial(bb) {
            this._internalAbstractMeshDataInfo._material !== bb && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = bb, bb && bb.meshMap && (bb.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.FW && (this.resetDrawCache(void 0, null == bb), this._unBindEffect()))
          }
          getMaterialForRenderPass(bb) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[bb]
          }
          setMaterialForRenderPass(bb, ub) {
            this.resetDrawCache(bb), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const hb = this._internalAbstractMeshDataInfo._materialForRenderPass[bb];
            hb?.meshMap?.[this.uniqueId] && (hb.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[bb] = ub, ub && ub.meshMap && (ub.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(bb) {
            this._internalAbstractMeshDataInfo._receiveShadows !== bb && (this._internalAbstractMeshDataInfo._receiveShadows = bb, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(bb) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== bb && (this._internalAbstractMeshDataInfo._hasVertexAlpha = bb, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(bb) {
            this._internalAbstractMeshDataInfo._useVertexColors !== bb && (this._internalAbstractMeshDataInfo._useVertexColors = bb, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(bb) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== bb && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = bb, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(bb) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== bb && (this._internalAbstractMeshDataInfo._numBoneInfluencers = bb, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(bb) {
            this._internalAbstractMeshDataInfo._applyFog !== bb && (this._internalAbstractMeshDataInfo._applyFog = bb, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(bb) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = bb
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(bb) {
            bb !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = bb, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(bb) ? -1 : bb
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = bb
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(bb) ? -1 : bb
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = bb
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(bb) {
            const ub = this._internalAbstractMeshDataInfo._skeleton;
            ub && ub.needInitialSkinMatrix && ub._unregisterMeshWithPoseMatrix(this), bb && bb.needInitialSkinMatrix && bb._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = bb, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(ub) {
            var hb;
            let Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(ub, Bb, !1), hb = this, this._internalAbstractMeshDataInfo = new ib, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Ob.e, this.onCollisionPositionChangeObservable = new Ob.e, this.onMaterialChangedObservable = new Ob.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.lp = bb.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Kb.b.Red(), this.outlineWidth = .02, this.overlayColor = Kb.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.LX = !1, this.aX = !1, this.actionManager = null, this.ellipsoid = new Gb.q(.5, 1, .5), this.ellipsoidOffset = new Gb.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Kb.c(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                zN: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Ob.e, this._onCollisionPositionChange = function(bb, ub) {
                let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ub.subtractToRef(hb._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, hb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), hb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > jb.d.CollisionsEpsilon && hb.position.addInPlace(hb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Bb && hb.onCollideObservable.notifyObservers(Bb), hb.onCollisionPositionChangeObservable.notifyObservers(hb.position)
              }, Bb = this.ZN(), this.layerMask = Bb.defaultRenderableLayerMask, Bb.pBb(this), this._resyncLightSources(), this._uniformBuffer = new Hb.c(this.ZN().UX(), void 0, void 0, ub, !this.ZN().UX().isWebGPU), this._buildUniformLayout(), Bb.performancePriority) {
              case 2:
                this.aX = !0;
              case 1:
                this.LX = !0, this.lp = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(bb) {
            const ub = this._uniformBuffer;
            ub.S_("world", bb), ub.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), ub.update()
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
          toString(bb) {
            let ub = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            ub += ", # of submeshes: " + (this.FW ? this.FW.length : 0);
            const hb = this._internalAbstractMeshDataInfo._skeleton;
            return hb && (ub += ", skeleton: " + hb.name), bb && (ub += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], ub += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.zN ? "YES" : "NO")), ub
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Yb.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(bb) {
            let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (ub || this.actionManager.isRecursive)) {
              if (!bb) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(bb)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(bb, !1) : null
          }
          _releaseRenderPassId(bb) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.FW) {
              for (const bb of this.FW) bb._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const bb of this.ZN().lights) bb.isEnabled() && bb.canAffectMesh(this) && this._lightSources.push(bb);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(bb) {
            const ub = bb.isEnabled() && bb.canAffectMesh(this),
              hb = this._lightSources.indexOf(bb);
            let Bb = !1;
            if (-1 === hb) {
              if (!ub) return;
              this._lightSources.push(bb)
            } else {
              if (ub) return;
              Bb = !0, this._lightSources.splice(hb, 1)
            }
            this._markSubMeshesAsLightDirty(Bb)
          }
          _unBindEffect() {
            for (const bb of this.FW) bb.setEffect(null)
          }
          _removeLightSource(bb, ub) {
            const hb = this._lightSources.indexOf(bb); - 1 !== hb && (this._lightSources.splice(hb, 1), this._markSubMeshesAsLightDirty(ub))
          }
          _markSubMeshesAsDirty(bb) {
            if (this.FW)
              for (const ub of this.FW)
                for (let hb = 0; hb < ub._drawWrappers.length; ++hb) {
                  const Bb = ub._drawWrappers[hb];
                  Bb && Bb.defines && Bb.defines.markAllAsDirty && bb(Bb.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((ub => ub.markAsLightDirty(bb)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsMiscDirty()))
          }
          yub(bb) {
            return this._currentRenderId = Number.MAX_VALUE, super.yub(bb), this._isDirty = !0, this
          }
          resetDrawCache(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.FW)
              for (const hb of this.FW) hb.resetDrawCache(bb, ub)
          }
          get isBlocked() {
            return !1
          }
          getLOD(bb) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          XBb() {
            return null
          }
          getVerticesData(bb) {
            return null
          }
          setVerticesData(bb, ub, hb, Bb) {
            return this
          }
          updateVerticesData(bb, ub, hb, Bb) {
            return this
          }
          setIndices(bb, ub) {
            return this
          }
          isVerticesDataPresent(bb) {
            return !1
          }
          XM() {
            return this._masterMesh ? this._masterMesh.XM() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.XM()
          }
          setBoundingInfo(bb) {
            return this._boundingInfo = bb, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(bb, ub, hb) {
            return this._boundingInfo = new ab.e(bb, ub, hb), this._boundingInfo
          }
          normalizeToUnitCube() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(bb, ub, hb)
          }
          get useBones() {
            return this.skeleton && this.ZN().skeletonsEnabled && this.isVerticesDataPresent(Ub.i.MatricesIndicesKind) && this.isVerticesDataPresent(Ub.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(bb) {}
          _activate(bb, ub) {
            return this._renderId = bb, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Yb.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get pN() {
            return !1
          }
          get UOb() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(bb, ub, hb) {
            return this.position.addInPlace(this.calcMovePOV(bb, ub, hb)), this
          }
          calcMovePOV(bb, ub, hb) {
            const Bb = new Gb.d;
            (this.rotationQuaternion ? this.rotationQuaternion : Gb.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Bb);
            const Ob = Gb.q.Zero(),
              Ub = this.definedFacingForward ? -1 : 1;
            return Gb.q.TransformCoordinatesFromFloatsToRef(bb * Ub, ub, hb * Ub, Bb, Ob), Ob
          }
          rotatePOV(bb, ub, hb) {
            return this.rotation.addInPlace(this.calcRotatePOV(bb, ub, hb)), this
          }
          calcRotatePOV(bb, ub, hb) {
            const Bb = this.definedFacingForward ? 1 : -1;
            return new Gb.q(bb * Bb, ub, hb * Bb)
          }
          _refreshBoundingInfo(bb, ub) {
            if (bb) {
              const hb = (0, lb.h)(bb, 0, this.getTotalVertices(), ub);
              this._boundingInfo ? this._boundingInfo.reConstruct(hb.minimum, hb.maximum) : this._boundingInfo = new ab.e(hb.minimum, hb.maximum)
            }
            if (this.FW)
              for (let hb = 0; hb < this.FW.length; hb++) this.FW[hb].refreshBoundingInfo(bb);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(bb) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(bb.minimum, bb.maximum) : this._boundingInfo = new ab.e(bb.minimum, bb.maximum), this.FW)
              for (let ub = 0; ub < this.FW.length; ub++) this.FW[ub].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(bb, ub, hb, Bb, Ob, Lb, Yb) {
            ! function(bb, ub, hb, Bb, Ob, Lb, Yb) {
              const Sb = Gb.i.YX[0],
                ab = Gb.i.Matrix[0],
                Hb = Gb.i.Matrix[1],
                wb = ub === Ub.i.NormalKind ? Gb.q.TransformNormalFromFloatsToRef : Gb.q.TransformCoordinatesFromFloatsToRef;
              for (let Ub = 0, Zb = 0; Ub < bb.length; Ub += 3, Zb += 4) {
                let ub, Xb;
                for (ab.reset(), ub = 0; ub < 4; ub++) Xb = Ob[Zb + ub], Xb > 0 && (Gb.d.FromFloat32ArrayToRefScaled(hb, Math.floor(16 * Bb[Zb + ub]), Xb, Hb), ab.addToSelf(Hb));
                if (Lb && Yb)
                  for (ub = 0; ub < 4; ub++) Xb = Yb[Zb + ub], Xb > 0 && (Gb.d.FromFloat32ArrayToRefScaled(hb, Math.floor(16 * Lb[Zb + ub]), Xb, Hb), ab.addToSelf(Hb));
                wb(bb[Ub], bb[Ub + 1], bb[Ub + 2], ab, Sb), Sb.toArray(bb, Ub)
              }
            }(bb, ub, hb, Bb, Ob, Lb, Yb)
          }
          _getData(ub, hb) {
            let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ub.i.PositionKind;
            const Ob = ub.cache,
              Lb = bb => {
                if (Ob) {
                  const ub = Ob._vertexData || (Ob._vertexData = {});
                  return ub[bb] || this.copyVerticesData(bb, ub), ub[bb]
                }
                return this.getVerticesData(bb)
              };
            if (hb || (hb = Lb(Bb)), !hb) return null;
            Ob ? (Ob._outputData ? Ob._outputData.set(hb) : Ob._outputData = new Float32Array(hb), hb = Ob._outputData) : (ub.applyMorph && this.morphTargetManager || ub.applySkeleton && this.skeleton || ub.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (hb = hb.slice()), ub.applyMorph && this.morphTargetManager && function(bb, ub, hb) {
              let Bb;
              switch (ub) {
                case Ub.i.PositionKind:
                  Bb = bb => bb.getPositions();
                  break;
                case Ub.i.NormalKind:
                  Bb = bb => bb.getNormals();
                  break;
                case Ub.i.TangentKind:
                  Bb = bb => bb.getTangents();
                  break;
                case Ub.i.UVKind:
                  Bb = bb => bb.getUVs();
                  break;
                case Ub.i.UV2Kind:
                  Bb = bb => bb.getUV2s();
                  break;
                case Ub.i.ColorKind:
                  Bb = bb => bb.getColors();
                  break;
                default:
                  return
              }
              for (let Ob = 0; Ob < bb.length; Ob++) {
                let ub = bb[Ob];
                for (let Gb = 0; Gb < hb.numTargets; Gb++) {
                  const Ub = hb.getTarget(Gb),
                    Lb = Ub.influence;
                  if (0 !== Lb) {
                    const hb = Bb(Ub);
                    hb && (ub += (hb[Ob] - bb[Ob]) * Lb)
                  }
                }
                bb[Ob] = ub
              }
            }(hb, Bb, this.morphTargetManager);
            const Yb = this.bakedVertexAnimationManager;
            let Sb = !1;
            if (ub.applyBakedVertexAnimation && Yb?.isEnabled) {
              const bb = Lb(Ub.i.MatricesIndicesKind),
                Ob = Lb(Ub.i.MatricesWeightsKind);
              if (Ob && bb) {
                const Gb = this.numBoneInfluencers > 4,
                  ab = Gb ? Lb(Ub.i.MatricesIndicesExtraKind) : null,
                  Hb = Gb ? Lb(Ub.i.MatricesWeightsExtraKind) : null;
                Sb = zb(hb, Bb, Yb, ub.bakedVertexAnimationSettings ?? Yb.animationParameters, bb, Ob, ab, Hb, this.numBoneInfluencers)
              }
            }
            if (!Sb && ub.applySkeleton && this.skeleton) {
              const ub = Lb(Ub.i.MatricesIndicesKind),
                Ob = Lb(Ub.i.MatricesWeightsKind);
              if (Ob && ub) {
                const Gb = this.numBoneInfluencers > 4,
                  Yb = Gb ? Lb(Ub.i.MatricesIndicesExtraKind) : null,
                  Sb = Gb ? Lb(Ub.i.MatricesWeightsExtraKind) : null,
                  ab = this.skeleton.getTransformMatrices(this);
                bb._ApplySkeleton(hb, Bb, ab, ub, Ob, Yb, Sb)
              }
            }
            if (!1 !== ub.updatePositionsArray && Bb === Ub.i.PositionKind) {
              const bb = this._internalAbstractMeshDataInfo._positions || [],
                ub = bb.length;
              if (bb.length = hb.length / 3, ub < bb.length)
                for (let hb = ub; hb < bb.length; hb++) bb[hb] = new Gb.q;
              for (let Bb = 0, Ob = 0; Bb < bb.length; Bb++, Ob += 3) bb[Bb].M_(hb[Ob], hb[Ob + 1], hb[Ob + 2]);
              this._internalAbstractMeshDataInfo._positions = bb
            }
            return hb
          }
          getNormalsData() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: bb,
              applyMorph: ub,
              updatePositionsArray: !1
            }, null, Ub.i.NormalKind)
          }
          JV() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: bb,
              applyMorph: ub,
              updatePositionsArray: !1
            }, hb, Ub.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new ab.e(Gb.q.Zero(), Gb.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(bb) {
            if (!this.FW) return this;
            const ub = this.FW.length;
            for (let hb = 0; hb < ub; hb++) {
              const Bb = this.FW[hb];
              (ub > 1 || !Bb.IsGlobal) && Bb.updateBoundingInfo(bb)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.aX || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(bb) {
            return this.XM().isInFrustum(bb, this.cullingStrategy)
          }
          isCompletelyInFrustum(bb) {
            return this.XM().isCompletelyInFrustum(bb)
          }
          bOb(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = arguments.length > 2 ? arguments[2] : void 0;
            const Bb = this.XM(),
              Ob = bb.XM();
            if (Bb.intersects(Ob, ub)) return !0;
            if (hb)
              for (const Gb of this.getChildMeshes())
                if (Gb.bOb(bb, ub, !0)) return !0;
            return !1
          }
          intersectsPoint(bb) {
            return this.XM().intersectsPoint(bb)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(bb) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = bb
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(bb) {
            let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const hb = this.ZN().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = hb.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, hb.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, bb, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, ub), this
          }
          _collideForSubMesh(bb, ub, hb) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!bb._lastColliderWorldVertices || !bb._lastColliderTransformMatrix.equals(ub)) {
              bb._lastColliderTransformMatrix = ub.clone(), bb._lastColliderWorldVertices = [], bb._trianglePlanes = [];
              const hb = bb.verticesStart,
                Bb = bb.verticesStart + bb.verticesCount;
              for (let Ob = hb; Ob < Bb; Ob++) bb._lastColliderWorldVertices.push(Gb.q.TransformCoordinates(this._positions[Ob], ub))
            }
            return hb._collide(bb._trianglePlanes, bb._lastColliderWorldVertices, this.XBb(), bb.indexStart, bb.indexStart + bb.indexCount, bb.verticesStart, !!bb.HX(), this, this._shouldConvertRHS(), 7 === bb.HX()?.fillMode), this
          }
          _processCollisionsForSubMeshes(bb, ub) {
            const hb = this._scene.getCollidingSubMeshCandidates(this, bb),
              Bb = hb.length;
            for (let Ob = 0; Ob < Bb; Ob++) {
              const Gb = hb.data[Ob];
              Bb > 1 && !Gb._checkCollision(bb) || this._collideForSubMesh(Gb, ub, bb)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(bb) {
            if (!this.XM()._checkCollision(bb)) return this;
            const ub = Gb.i.Matrix[0],
              hb = Gb.i.Matrix[1];
            return Gb.d.ScalingToRef(1 / bb._radius.x, 1 / bb._radius.y, 1 / bb._radius.z, ub), this.worldMatrixFromCache.multiplyToRef(ub, hb), this._processCollisionsForSubMeshes(bb, hb), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(bb, ub, hb) {
            let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ob = arguments.length > 4 ? arguments[4] : void 0,
              Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Lb = new Sb.d,
              Yb = this.getClassName(),
              ab = "InstancedLinesMesh" === Yb || "LinesMesh" === Yb || "GreasedLineMesh" === Yb ? this.intersectionThreshold : 0,
              Hb = this.XM();
            if (!this.FW) return Lb;
            if (!Ub && (!bb.intersectsSphere(Hb.sBb, ab) || !bb.intersectsBox(Hb.boundingBox, ab))) return Lb;
            if (Bb) return Lb.hit = !Ub, Lb.pickedMesh = Ub ? null : this, Lb.distance = Ub ? 0 : Gb.q.Distance(bb.origin, Hb.sBb.center), Lb.subMeshId = 0, Lb;
            if (!this._generatePointsArray()) return Lb;
            let wb = null;
            const Zb = this._scene.getIntersectingSubMeshCandidates(this, bb),
              Xb = Zb.length;
            let pb = !1;
            for (let Gb = 0; Gb < Xb; Gb++) {
              const bb = Zb.data[Gb].HX();
              if (bb && (7 == bb.fillMode || 0 == bb.fillMode || 1 == bb.fillMode || 2 == bb.fillMode || 4 == bb.fillMode)) {
                pb = !0;
                break
              }
            }
            if (!pb) return Lb.hit = !0, Lb.pickedMesh = this, Lb.distance = Gb.q.Distance(bb.origin, Hb.sBb.center), Lb.subMeshId = -1, Lb;
            for (let Gb = 0; Gb < Xb; Gb++) {
              const Bb = Zb.data[Gb];
              if (Xb > 1 && !Ub && !Bb.canIntersects(bb)) continue;
              const Ob = Bb.intersects(bb, this._positions, this.XBb(), ub, hb);
              if (Ob && (ub || !wb || Ob.distance < wb.distance) && (wb = Ob, wb.subMeshId = Bb._id, wb._internalSubMeshId = Gb, ub)) break
            }
            if (wb) {
              const ub = Ob ?? this.getWorldMatrix(),
                hb = Gb.i.YX[0],
                Bb = Gb.i.YX[1];
              Gb.q.TransformCoordinatesToRef(bb.origin, ub, hb), bb.direction.scaleToRef(wb.distance, Bb);
              const Ub = Gb.q.TransformNormal(Bb, ub).addInPlace(hb);
              return Lb.hit = !0, Lb.distance = Gb.q.Distance(hb, Ub), Lb.pickedPoint = Ub, Lb.pickedMesh = this, Lb.bu = wb.bu || 0, Lb.bv = wb.bv || 0, Lb.subMeshFaceId = wb.faceId, Lb.faceId = wb.faceId + Zb.data[wb._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Lb.subMeshId = wb.subMeshId, Lb
            }
            return Lb
          }
          clone(bb, ub, hb) {
            return null
          }
          releaseSubMeshes() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.FW)
              for (; this.FW.length;) this.FW[0].dispose(bb);
            else this.FW = [];
            return this
          }
          dispose(bb) {
            let ub, hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Bb = this.ZN();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Bb.freeActiveMeshes(), Bb.freeRenderingGroups(), Bb.renderingManager.maintainStateBetweenFrames && Bb.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((bb => bb !== this && bb.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), ub = 0; ub < this._intersectionsInProgress.length; ub++) {
              const bb = this._intersectionsInProgress[ub],
                hb = bb._intersectionsInProgress.indexOf(this);
              bb._intersectionsInProgress.splice(hb, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Ob = Bb.lights;
            for (const Ub of Ob) {
              let bb = Ub.includedOnlyMeshes.indexOf(this); - 1 !== bb && Ub.includedOnlyMeshes.splice(bb, 1), bb = Ub.excludedMeshes.indexOf(this), -1 !== bb && Ub.excludedMeshes.splice(bb, 1);
              const ub = Ub.getShadowGenerators();
              if (ub) {
                const hb = ub.values();
                for (let ub = hb.next(); !0 !== ub.done; ub = hb.next()) {
                  const hb = ub.value.getShadowMap();
                  hb && hb.renderList && (bb = hb.renderList.indexOf(this), -1 !== bb && hb.renderList.splice(bb, 1))
                }
              }
            }
            this.releaseSubMeshes(Bb._isDisposing);
            const Gb = Bb.UX();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Gb.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Gb.wipeCaches(), Bb.vN(this), this._parentContainer) {
              const bb = this._parentContainer.meshes.indexOf(this);
              bb > -1 && this._parentContainer.meshes.splice(bb, 1), this._parentContainer = null
            }
            if (hb && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !bb)
              for (ub = 0; ub < Bb.fW.length; ub++) Bb.fW[ub].emitter === this && (Bb.fW[ub].dispose(), ub--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(bb, hb)
          }
          _initFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetNormals || (bb.facetNormals = []), bb.facetPositions || (bb.facetPositions = []), bb.facetPartitioning || (bb.facetPartitioning = new Array), bb.facetNb = this.XBb().length / 3 | 0, bb.partitioningSubdivisions = bb.partitioningSubdivisions ? bb.partitioningSubdivisions : 10, bb.partitioningBBoxRatio = bb.partitioningBBoxRatio ? bb.partitioningBBoxRatio : 1.01;
            for (let ub = 0; ub < bb.facetNb; ub++) bb.facetNormals[ub] = Gb.q.Zero(), bb.facetPositions[ub] = Gb.q.Zero();
            return bb.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetDataEnabled || this._initFacetData();
            const ub = this.getVerticesData(Ub.i.PositionKind),
              hb = this.XBb(),
              Bb = this.getVerticesData(Ub.i.NormalKind)?.slice(),
              Ob = this.XM();
            if (bb.facetDepthSort && !bb.facetDepthSortEnabled) {
              if (bb.facetDepthSortEnabled = !0, hb instanceof Uint16Array) bb.depthSortedIndices = new Uint16Array(hb);
              else if (hb instanceof Uint32Array) bb.depthSortedIndices = new Uint32Array(hb);
              else {
                let ub = !1;
                for (let bb = 0; bb < hb.length; bb++)
                  if (hb[bb] > 65535) {
                    ub = !0;
                    break
                  } bb.depthSortedIndices = ub ? new Uint32Array(hb) : new Uint16Array(hb)
              }
              if (bb.facetDepthSortFunction = function(bb, ub) {
                  return ub.sqDistance - bb.sqDistance
                }, !bb.facetDepthSortFrom) {
                const ub = this.ZN().activeCamera;
                bb.facetDepthSortFrom = ub ? ub.position : Gb.q.Zero()
              }
              bb.depthSortedFacets = [];
              for (let ub = 0; ub < bb.facetNb; ub++) {
                const hb = {
                  ind: 3 * ub,
                  sqDistance: 0
                };
                bb.depthSortedFacets.push(hb)
              }
              bb.invertedMatrix = Gb.d.Identity(), bb.facetDepthSortOrigin = Gb.q.Zero()
            }
            bb.bbSize.x = Ob.maximum.x - Ob.minimum.x > Wb.b ? Ob.maximum.x - Ob.minimum.x : Wb.b, bb.bbSize.y = Ob.maximum.y - Ob.minimum.y > Wb.b ? Ob.maximum.y - Ob.minimum.y : Wb.b, bb.bbSize.z = Ob.maximum.z - Ob.minimum.z > Wb.b ? Ob.maximum.z - Ob.minimum.z : Wb.b;
            let Yb = bb.bbSize.x > bb.bbSize.y ? bb.bbSize.x : bb.bbSize.y;
            if (Yb = Yb > bb.bbSize.z ? Yb : bb.bbSize.z, bb.subDiv.max = bb.partitioningSubdivisions, bb.subDiv.X = Math.floor(bb.subDiv.max * bb.bbSize.x / Yb), bb.subDiv.Y = Math.floor(bb.subDiv.max * bb.bbSize.y / Yb), bb.subDiv.Z = Math.floor(bb.subDiv.max * bb.bbSize.z / Yb), bb.subDiv.X = bb.subDiv.X < 1 ? 1 : bb.subDiv.X, bb.subDiv.Y = bb.subDiv.Y < 1 ? 1 : bb.subDiv.Y, bb.subDiv.Z = bb.subDiv.Z < 1 ? 1 : bb.subDiv.Z, bb.facetParameters.facetNormals = this.getFacetLocalNormals(), bb.facetParameters.facetPositions = this.getFacetLocalPositions(), bb.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), bb.facetParameters.bInfo = Ob, bb.facetParameters.bbSize = bb.bbSize, bb.facetParameters.subDiv = bb.subDiv, bb.facetParameters.ratio = this.partitioningBBoxRatio, bb.facetParameters.depthSort = bb.facetDepthSort, bb.facetDepthSort && bb.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(bb.invertedMatrix), Gb.q.TransformCoordinatesToRef(bb.facetDepthSortFrom, bb.invertedMatrix, bb.facetDepthSortOrigin), bb.facetParameters.distanceTo = bb.facetDepthSortOrigin), bb.facetParameters.depthSortedFacets = bb.depthSortedFacets, Bb && Lb.c.ComputeNormals(ub, hb, Bb, bb.facetParameters), bb.facetDepthSort && bb.facetDepthSortEnabled) {
              bb.depthSortedFacets.sort(bb.facetDepthSortFunction);
              const ub = bb.depthSortedIndices.length / 3 | 0;
              for (let Bb = 0; Bb < ub; Bb++) {
                const ub = bb.depthSortedFacets[Bb].ind;
                bb.depthSortedIndices[3 * Bb] = hb[ub], bb.depthSortedIndices[3 * Bb + 1] = hb[ub + 1], bb.depthSortedIndices[3 * Bb + 2] = hb[ub + 2]
              }
              this.updateIndices(bb.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetNormals || this.updateFacetData(), bb.facetNormals
          }
          getFacetLocalPositions() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetPositions || this.updateFacetData(), bb.facetPositions
          }
          getFacetLocalPartitioning() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetPartitioning || this.updateFacetData(), bb.facetPartitioning
          }
          getFacetPosition(bb) {
            const ub = Gb.q.Zero();
            return this.getFacetPositionToRef(bb, ub), ub
          }
          getFacetPositionToRef(bb, ub) {
            const hb = this.getFacetLocalPositions()[bb],
              Bb = this.getWorldMatrix();
            return Gb.q.TransformCoordinatesToRef(hb, Bb, ub), this
          }
          getFacetNormal(bb) {
            const ub = Gb.q.Zero();
            return this.getFacetNormalToRef(bb, ub), ub
          }
          getFacetNormalToRef(bb, ub) {
            const hb = this.getFacetLocalNormals()[bb];
            return Gb.q.TransformNormalToRef(hb, this.getWorldMatrix(), ub), this
          }
          getFacetsAtLocalCoordinates(bb, ub, hb) {
            const Bb = this.XM(),
              Ob = this._internalAbstractMeshDataInfo._facetData,
              Gb = Math.floor((bb - Bb.minimum.x * Ob.partitioningBBoxRatio) * Ob.subDiv.X * Ob.partitioningBBoxRatio / Ob.bbSize.x),
              Ub = Math.floor((ub - Bb.minimum.y * Ob.partitioningBBoxRatio) * Ob.subDiv.Y * Ob.partitioningBBoxRatio / Ob.bbSize.y),
              Lb = Math.floor((hb - Bb.minimum.z * Ob.partitioningBBoxRatio) * Ob.subDiv.Z * Ob.partitioningBBoxRatio / Ob.bbSize.z);
            return Gb < 0 || Gb > Ob.subDiv.max || Ub < 0 || Ub > Ob.subDiv.max || Lb < 0 || Lb > Ob.subDiv.max ? null : Ob.facetPartitioning[Gb + Ob.subDiv.max * Ub + Ob.subDiv.max * Ob.subDiv.max * Lb]
          }
          getClosestFacetAtCoordinates(bb, ub, hb, Bb) {
            let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Lb = this.getWorldMatrix(),
              Yb = Gb.i.Matrix[5];
            Lb.invertToRef(Yb);
            const Sb = Gb.i.YX[8];
            Gb.q.TransformCoordinatesFromFloatsToRef(bb, ub, hb, Yb, Sb);
            const ab = this.getClosestFacetAtLocalCoordinates(Sb.x, Sb.y, Sb.z, Bb, Ob, Ub);
            return Bb && Gb.q.TransformCoordinatesFromFloatsToRef(Bb.x, Bb.y, Bb.z, Lb, Bb), ab
          }
          getClosestFacetAtLocalCoordinates(bb, ub, hb, Bb) {
            let Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Zb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Xb = null;
            const pb = this.getFacetLocalPositions(),
              ob = this.getFacetLocalNormals(),
              Ab = this.getFacetsAtLocalCoordinates(bb, ub, hb);
            if (!Ab) return null;
            let lb, Kb, Wb, Cb, db = Number.MAX_VALUE;
            for (let rb = 0; rb < Ab.length; rb++) Kb = Ab[rb], Wb = ob[Kb], Cb = pb[Kb], Lb = (bb - Cb.x) * Wb.x + (ub - Cb.y) * Wb.y + (hb - Cb.z) * Wb.z, (!wb || wb && Zb && Lb >= 0 || wb && !Zb && Lb <= 0) && (Lb = Wb.x * Cb.x + Wb.y * Cb.y + Wb.z * Cb.z, Yb = -(Wb.x * bb + Wb.y * ub + Wb.z * hb - Lb) / (Wb.x * Wb.x + Wb.y * Wb.y + Wb.z * Wb.z), Sb = bb + Wb.x * Yb, ab = ub + Wb.y * Yb, Hb = hb + Wb.z * Yb, Ob = Sb - bb, Gb = ab - ub, Ub = Hb - hb, lb = Ob * Ob + Gb * Gb + Ub * Ub, lb < db && (db = lb, Xb = Kb, Bb && (Bb.x = Sb, Bb.y = ab, Bb.z = Hb)));
            return Xb
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetDataEnabled && (bb.facetDataEnabled = !1, bb.facetPositions = [], bb.facetNormals = [], bb.facetPartitioning = new Array, bb.facetParameters = {}, bb.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(bb, ub) {
            return this
          }
          createNormals(bb) {
            const ub = this.getVerticesData(Ub.i.PositionKind),
              hb = this.XBb();
            let Bb;
            return Bb = this.isVerticesDataPresent(Ub.i.NormalKind) ? this.getVerticesData(Ub.i.NormalKind) : [], Lb.c.ComputeNormals(ub, hb, Bb, {
              useRightHandedSystem: this.ZN().useRightHandedSystem
            }), this.setVerticesData(Ub.i.NormalKind, Bb, bb), this
          }
          async optimizeIndicesAsync() {
            const bb = this.XBb();
            if (!bb) return this;
            const {
              OptimizeIndices: ub
            } = await hb.e(342).then((() => hb(41970)));
            return ub(bb), this.setIndices(bb, this.getTotalVertices()), this
          }
          alignWithNormal(bb, ub) {
            ub || (ub = Cb.e.Y);
            const hb = Gb.i.YX[0],
              Bb = Gb.i.YX[1];
            return Gb.q.CrossToRef(ub, bb, Bb), Gb.q.CrossToRef(bb, Bb, hb), this.rotationQuaternion ? Gb.f.RotationQuaternionFromAxisToRef(hb, bb, Bb, this.rotationQuaternion) : Gb.q.RotationFromAxisToRef(hb, bb, Bb, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, ob.m)("EdgesRenderer")
          }
          enableEdgesRendering(bb, ub, hb) {
            throw (0, ob.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.fW.filter((bb => bb.emitter === this))
          }
        }, (() => {
          const hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(wb[Symbol.metadata] ?? null) : void 0;
          ub = [rb.k.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Bb.h)(bb, null, ub, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: bb => "_ApplySkeleton" in bb,
              get: bb => bb._ApplySkeleton
            },
            metadata: hb
          }, null, Zb), hb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hb
          })
        })(), bb.OCCLUSION_TYPE_NONE = ((0, Bb.k)(bb, Zb), 0), bb.OCCLUSION_TYPE_OPTIMISTIC = 1, bb.OCCLUSION_TYPE_STRICT = 2, bb.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, bb.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, bb.CULLINGSTRATEGY_STANDARD = 0, bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, bb.DefaultIsPickable = !0, bb
      })(),
      tb = !1;

    function Jb() {
      tb || (tb = !0, (0, nb.f)("BABYLON.AbstractMesh", vb))
    }(Zb = vb.prototype).createOrUpdateSubmeshesOctree ?? (Zb.createOrUpdateSubmeshesOctree = (0, ob.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Xb = vb.prototype).getPhysicsImpostor ?? (Xb.getPhysicsImpostor = (0, ob.j)("AbstractMesh", "getPhysicsImpostor")), (pb = vb.prototype).setPhysicsLinkWith ?? (pb.setPhysicsLinkWith = (0, ob.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(vb.prototype, "occlusionRetryCount") || Object.defineProperty(vb.prototype, "occlusionRetryCount", (0, ob.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(vb.prototype, "occlusionType") || Object.defineProperty(vb.prototype, "occlusionType", (0, ob.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(vb.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(vb.prototype, "occlusionQueryAlgorithmType", (0, ob.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(vb.prototype, "isOccluded") || Object.defineProperty(vb.prototype, "isOccluded", (0, ob.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(vb.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(vb.prototype, "isOcclusionQueryInProgress", (0, ob.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(vb.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(vb.prototype, "forceRenderingWhenOccluded", (0, ob.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(vb.prototype, "occlusionForRenderPassId") || Object.defineProperty(vb.prototype, "occlusionForRenderPassId", (0, ob.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(vb.prototype, "decalMap") || Object.defineProperty(vb.prototype, "decalMap", (0, ob.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(vb.prototype, "Fs") || Object.defineProperty(vb.prototype, "Fs", (0, ob.f)("AbstractMesh", "Fs")), Object.getOwnPropertyDescriptor(vb.prototype, "physicsImpostor") || Object.defineProperty(vb.prototype, "physicsImpostor", (0, ob.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(vb.prototype, "showBoundingBox") || Object.defineProperty(vb.prototype, "showBoundingBox", (0, ob.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(vb.prototype, "edgesRenderer") || Object.defineProperty(vb.prototype, "edgesRenderer", (0, ob.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(vb.prototype, "renderOutline") || Object.defineProperty(vb.prototype, "renderOutline", (0, ob.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(vb.prototype, "renderOverlay") || Object.defineProperty(vb.prototype, "renderOverlay", (0, ob.f)("AbstractMesh", "renderOverlay"))
  },
  39869: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ab
    });
    var Bb = hb(36727),
      Ob = hb(36893),
      Gb = hb(39862),
      Ub = hb(39609),
      Lb = hb(39736),
      Yb = hb(39875),
      Sb = hb(39752),
      ab = hb(39559),
      Hb = hb(38302),
      wb = hb(39492),
      Zb = hb(39763),
      Xb = hb(36748),
      pb = hb(39880),
      ob = hb(39533);
    class Ab {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(bb) {
        this._boundingBias ? this._boundingBias.mD(bb) : this._boundingBias = bb.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(bb) {
        const ub = new Ab(Ab.RandomId(), bb.ZN());
        return ub.applyToMesh(bb), ub
      }
      get meshes() {
        return this._meshes
      }
      constructor(bb, ub, hb) {
        let Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Bb.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Bb.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = ub || Xb.b.LastCreatedScene, this._scene && (this.id = bb, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.UX(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Ob, null !== Ub && (this._totalVertices = Ub), hb ? this.setAllVerticesData(hb, Ob) : null === Ub && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Gb && (this.applyToMesh(Gb), Gb.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      ZN() {
        return this._scene
      }
      UX() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let bb = 0; bb < this._meshes.length; bb++)
          if (!this._meshes[bb].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const bb = new Set;
        for (const ub in this._vertexBuffers) bb.add(this._vertexBuffers[ub].getWrapperBuffer());
        bb.forEach((bb => {
          bb._rebuild()
        }))
      }
      setAllVerticesData(bb, ub) {
        bb.applyToGeometry(this, ub), this._notifyUpdate()
      }
      setVerticesData(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        hb && Array.isArray(ub) && (ub = new Float32Array(ub));
        const Ob = new Ub.i(this._engine, ub, bb, {
          updatable: hb,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Bb,
          label: "Geometry_" + this.id + "_" + bb
        });
        this.setVerticesBuffer(Ob)
      }
      removeVerticesData(bb) {
        this._vertexBuffers[bb] && (this._vertexBuffers[bb].dispose(), delete this._vertexBuffers[bb]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Ob = bb.getKind();
        this._vertexBuffers[Ob] && hb && this._vertexBuffers[Ob].dispose(), bb._buffer && bb._ownsBuffer && bb._buffer._increaseReferences(), this._vertexBuffers[Ob] = bb;
        const Gb = this._meshes,
          Lb = Gb.length;
        if (Ob === Ub.i.PositionKind) {
          this._totalVertices = ub ?? bb._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : bb.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const hb = this._extend && this._extend.minimum || new Bb.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Ob = this._extend && this._extend.maximum || new Bb.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let bb = 0; bb < Lb; bb++) {
            const ub = Gb[bb];
            ub.buildBoundingInfo(hb, Ob), ub._createGlobalSubMesh(ub.isUnIndexed), ub.computeWorldMatrix(!0), ub.synchronizeInstances()
          }
        }
        this._notifyUpdate(Ob)
      }
      updateVerticesDataDirectly(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ob = this.getVertexBuffer(bb);
        Ob && (Ob.updateDirectly(ub, hb, Bb), this._notifyUpdate(bb))
      }
      updateVerticesData(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this.getVertexBuffer(bb);
        Bb && (Bb.update(ub), bb === Ub.i.PositionKind && this._updateBoundingInfo(hb, ub), this._notifyUpdate(bb))
      }
      _updateBoundingInfo(bb, ub) {
        if (bb && this._updateExtend(ub), this._resetPointsArrayCache(), bb) {
          const bb = this._meshes;
          for (const ub of bb) {
            ub.hasBoundingInfo ? ub.XM().reConstruct(this._extend.minimum, this._extend.maximum) : ub.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const bb = ub.FW;
            for (const ub of bb) ub.refreshBoundingInfo()
          }
        }
      }
      _bind(bb, ub, hb, Bb) {
        if (!bb) return;
        void 0 === ub && (ub = this._indexBuffer);
        const Ob = this.getVertexBuffers();
        if (!Ob) return;
        if (ub != this._indexBuffer || !this._vertexArrayObjects && !Bb) return void this._engine.bindBuffers(Ob, ub, bb, hb);
        const Gb = Bb || this._vertexArrayObjects,
          Ub = this._engine;
        Gb[bb.key] || (Gb[bb.key] = Ub.recordVertexArrayObject(Ob, ub, bb, hb)), Ub.bindVertexArrayObject(Gb[bb.key], ub)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(bb, ub, hb) {
        const Bb = this.getVertexBuffer(bb);
        return Bb ? Bb.getFloatData(this._totalVertices, hb || ub && 1 !== this._meshes.length) : null
      }
      copyVerticesData(bb, ub) {
        const hb = this.getVertexBuffer(bb);
        if (!hb) return;
        ub[bb] || (ub[bb] = new Float32Array(this._totalVertices * hb.getSize()));
        const Bb = hb.getData();
        Bb && (0, ob.f)(Bb, hb.getSize(), hb.type, hb.byteOffset, hb.byteStride, hb.normalized, this._totalVertices, ub[bb])
      }
      isVertexBufferUpdatable(bb) {
        const ub = this._vertexBuffers[bb];
        return !!ub && ub.isUpdatable()
      }
      getVertexBuffer(bb) {
        return this.isReady() ? this._vertexBuffers[bb] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(bb) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[bb] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb)
      }
      getVerticesDataKinds() {
        const bb = [];
        let ub;
        if (!this._vertexBuffers && this._delayInfo)
          for (ub in this._delayInfo) bb.push(ub);
        else
          for (ub in this._vertexBuffers) bb.push(ub);
        return bb
      }
      updateIndices(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Bb = bb.length !== this._indices.length;
            if (hb || (this._indices = bb.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, bb, ub), Bb)
              for (const bb of this._meshes) bb._createGlobalSubMesh(!0)
          } else this.setIndices(bb, null, !0)
      }
      setIndexBuffer(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = bb, this._totalVertices = ub, this._totalIndices = hb, bb.is32Bits = null === Bb ? ub > 65535 : Bb;
        for (const Ob of this._meshes) Ob._createGlobalSubMesh(!0), Ob.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = bb, this._indexBufferIsUpdatable = hb, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, hb, "Geometry_" + this.id + "_IndexBuffer")), void 0 != ub && (this._totalVertices = ub);
        for (const Ob of this._meshes) Ob._createGlobalSubMesh(!Bb), Ob.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      XBb(bb, ub) {
        if (!this.isReady()) return null;
        const hb = this._indices;
        return ub || bb && 1 !== this._meshes.length ? hb.slice() : hb
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        bb && this._vertexArrayObjects && this._vertexArrayObjects[bb.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[bb.key]), delete this._vertexArrayObjects[bb.key])
      }
      releaseForMesh(bb, ub) {
        const hb = this._meshes,
          Bb = hb.indexOf(bb); - 1 !== Bb && (hb.splice(Bb, 1), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject(), bb._geometry = null, 0 === hb.length && ub && this.dispose())
      }
      applyToMesh(bb) {
        if (bb._geometry === this) return;
        const ub = bb._geometry;
        ub && ub.releaseForMesh(bb), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject();
        const hb = this._meshes;
        bb._geometry = this, bb._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), hb.push(bb), this.isReady() ? this._applyToMesh(bb) : this._boundingInfo && bb.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!bb && (bb = this.getVerticesData(Ub.i.PositionKind), !bb)) return;
          this._extend = (0, Zb.h)(bb, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(bb) {
        for (const ub in this._vertexBuffers) {
          const hb = this._vertexBuffers[ub];
          hb._buffer.getBuffer() || hb.create(), ub === Ub.i.PositionKind && (this._extend || this._updateExtend(), bb.buildBoundingInfo(this._extend.minimum, this._extend.maximum), bb._createGlobalSubMesh(bb.isUnIndexed), bb._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), bb._syncGeometryWithMorphTargetManager(), bb.synchronizeInstances()
      }
      _notifyUpdate(bb) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, bb), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const ub of this._meshes) ub._markSubMeshesAsAttributesDirty()
      }
      load(bb, ub) {
        2 !== this.delayLoadState && (this.isReady() ? ub && ub() : (this.delayLoadState = 2, this._queueLoad(bb, ub)))
      }
      _queueLoad(bb, ub) {
        this.delayLoadingFile && (bb.addPendingData(this), (async () => {
          try {
            const hb = await bb._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void bb.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(hb), this), this.delayLoadState = 1, this._delayInfo = [], bb.removePendingData(this);
            const Bb = this._meshes,
              Ob = Bb.length;
            for (let bb = 0; bb < Ob; bb++) this._applyToMesh(Bb[bb]);
            ub && ub()
          } catch (hb) {
            bb.removePendingData(this), bb.tC || Hb.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${hb}`)
          }
        })())
      }
      toLeftHanded() {
        const bb = this.XBb(!1);
        if (null != bb && bb.length > 0) {
          for (let ub = 0; ub < bb.length; ub += 3) {
            const hb = bb[ub + 0];
            bb[ub + 0] = bb[ub + 2], bb[ub + 2] = hb
          }
          this.setIndices(bb)
        }
        const ub = this.getVerticesData(Ub.i.PositionKind, !1);
        if (null != ub && ub.length > 0) {
          for (let bb = 0; bb < ub.length; bb += 3) ub[bb + 2] = -ub[bb + 2];
          this.setVerticesData(Ub.i.PositionKind, ub, !1)
        }
        const hb = this.getVerticesData(Ub.i.NormalKind, !1);
        if (null != hb && hb.length > 0) {
          for (let bb = 0; bb < hb.length; bb += 3) hb[bb + 2] = -hb[bb + 2];
          this.setVerticesData(Ub.i.NormalKind, hb, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const bb = this.getVerticesData(Ub.i.PositionKind);
        if (!bb || 0 === bb.length) return !1;
        for (let ub = 3 * this._positionsCache.length, hb = this._positionsCache.length; ub < bb.length; ub += 3, ++hb) this._positionsCache[hb] = Bb.q.FromArray(bb, ub);
        for (let ub = 0, hb = 0; ub < bb.length; ub += 3, ++hb) this._positionsCache[hb].set(bb[0 + ub], bb[1 + ub], bb[2 + ub]);
        return this._positionsCache.length = bb.length / 3, this._positions = this._positionsCache, !0
      }
      tC() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const hb in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[hb]);
          this._vertexArrayObjects = {};
          const bb = this._meshes,
            ub = bb.length;
          for (let hb = 0; hb < ub; hb++) bb[hb]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const bb = this._meshes,
          ub = bb.length;
        let hb;
        for (hb = 0; hb < ub; hb++) this.releaseForMesh(bb[hb]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Bb in this._vertexBuffers) this._vertexBuffers[Bb].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const bb = this._parentContainer.geometries.indexOf(this);
          bb > -1 && this._parentContainer.geometries.splice(bb, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(bb) {
        const ub = new Ab(bb, this._scene),
          hb = this.XBb(void 0, !0);
        hb && ub.setIndices(hb);
        let Bb, Ob = !1;
        for (Bb in this._vertexBuffers) {
          const bb = this.getVertexBuffer(Bb),
            hb = bb.getData();
          if (!hb) continue;
          const Gb = bb.isUpdatable(),
            Lb = bb.getSize(),
            {
              type: Yb,
              byteOffset: Sb,
              byteStride: ab,
              normalized: Hb
            } = bb;
          Ob = Ob || Gb;
          let wb = this._totalVertices;
          if (bb.getIsInstanced()) {
            let bb;
            bb = hb instanceof Array ? 4 * hb.length : hb.byteLength, wb = bb / ab
          }
          const Zb = (0, ob.s)(hb, Lb, Yb, Sb, ab, wb, !0),
            Xb = new Ub.i(this._engine, Zb, Bb, {
              updatable: Gb,
              useBytes: !1,
              stride: Lb,
              size: Lb,
              offset: 0,
              type: Yb,
              normalized: Hb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            });
          ub.setVerticesBuffer(Xb, wb)
        }
        for (Bb in ub._updatable = Ob, ub.delayLoadState = this.delayLoadState, ub.delayLoadingFile = this.delayLoadingFile, ub._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) ub._delayInfo = ub._delayInfo || [], ub._delayInfo.push(Bb);
        return ub._boundingInfo = new Sb.e(this._extend.minimum, this._extend.maximum), ub
      }
      serialize() {
        const bb = {};
        return bb.id = this.id, bb.uniqueId = this.uniqueId, bb.updatable = this._updatable, wb.c && wb.c.HasTags(this) && (bb.tags = wb.c.GetTags(this)), bb
      }
      _toNumberArray(bb) {
        return Array.isArray(bb) ? bb : Array.prototype.slice.call(bb)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const bb in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, bb) && (this._vertexBuffers[bb]._buffer._data = null)
      }
      serializeVerticeData() {
        const bb = this.serialize();
        return this.isVerticesDataPresent(Ub.i.PositionKind) && (bb.positions = this._toNumberArray(this.getVerticesData(Ub.i.PositionKind)), this.isVertexBufferUpdatable(Ub.i.PositionKind) && (bb.positionsUpdatable = !0)), this.isVerticesDataPresent(Ub.i.NormalKind) && (bb.normals = this._toNumberArray(this.getVerticesData(Ub.i.NormalKind)), this.isVertexBufferUpdatable(Ub.i.NormalKind) && (bb.normalsUpdatable = !0)), this.isVerticesDataPresent(Ub.i.TangentKind) && (bb.tangents = this._toNumberArray(this.getVerticesData(Ub.i.TangentKind)), this.isVertexBufferUpdatable(Ub.i.TangentKind) && (bb.tangentsUpdatable = !0)), this.isVerticesDataPresent(Ub.i.UVKind) && (bb.uvs = this._toNumberArray(this.getVerticesData(Ub.i.UVKind)), this.isVertexBufferUpdatable(Ub.i.UVKind) && (bb.uvsUpdatable = !0)), this.isVerticesDataPresent(Ub.i.UV2Kind) && (bb.uvs2 = this._toNumberArray(this.getVerticesData(Ub.i.UV2Kind)), this.isVertexBufferUpdatable(Ub.i.UV2Kind) && (bb.uvs2Updatable = !0)), this.isVerticesDataPresent(Ub.i.UV3Kind) && (bb.uvs3 = this._toNumberArray(this.getVerticesData(Ub.i.UV3Kind)), this.isVertexBufferUpdatable(Ub.i.UV3Kind) && (bb.uvs3Updatable = !0)), this.isVerticesDataPresent(Ub.i.UV4Kind) && (bb.uvs4 = this._toNumberArray(this.getVerticesData(Ub.i.UV4Kind)), this.isVertexBufferUpdatable(Ub.i.UV4Kind) && (bb.uvs4Updatable = !0)), this.isVerticesDataPresent(Ub.i.UV5Kind) && (bb.uvs5 = this._toNumberArray(this.getVerticesData(Ub.i.UV5Kind)), this.isVertexBufferUpdatable(Ub.i.UV5Kind) && (bb.uvs5Updatable = !0)), this.isVerticesDataPresent(Ub.i.UV6Kind) && (bb.uvs6 = this._toNumberArray(this.getVerticesData(Ub.i.UV6Kind)), this.isVertexBufferUpdatable(Ub.i.UV6Kind) && (bb.uvs6Updatable = !0)), this.isVerticesDataPresent(Ub.i.ColorKind) && (bb.colors = this._toNumberArray(this.getVerticesData(Ub.i.ColorKind)), this.isVertexBufferUpdatable(Ub.i.ColorKind) && (bb.colorsUpdatable = !0)), this.isVerticesDataPresent(Ub.i.MatricesIndicesKind) && (bb.matricesIndices = this._toNumberArray(this.getVerticesData(Ub.i.MatricesIndicesKind)), bb.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Ub.i.MatricesIndicesKind) && (bb.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Ub.i.MatricesWeightsKind) && (bb.matricesWeights = this._toNumberArray(this.getVerticesData(Ub.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(Ub.i.MatricesWeightsKind) && (bb.matricesWeightsUpdatable = !0)), bb.indices = this._toNumberArray(this.XBb()), bb
      }
      static ExtractFromMesh(bb, ub) {
        const hb = bb._geometry;
        return hb ? hb.copy(ub) : null
      }
      static RandomId() {
        return ab.k.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(bb, ub) {
        for (let hb = 0; hb < ub.geometries.length; hb++)
          if (ub.geometries[hb]._loadedUniqueId === bb) return ub.geometries[hb];
        return null
      }
      static _ImportGeometry(bb, ub) {
        const hb = ub.ZN(),
          Bb = bb.geometryUniqueId,
          Gb = bb.geometryId;
        if (Bb || Gb) {
          const bb = Bb ? this._GetGeometryByLoadedUniqueId(Bb, hb) : hb.getGeometryById(Gb);
          bb && bb.applyToMesh(ub)
        } else if (bb instanceof ArrayBuffer) {
          const hb = ub._binaryInfo;
          if (hb.positionsAttrDesc && hb.positionsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.positionsAttrDesc.offset, hb.positionsAttrDesc.count);
            ub.setVerticesData(Ub.i.PositionKind, Bb, !1)
          }
          if (hb.normalsAttrDesc && hb.normalsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.normalsAttrDesc.offset, hb.normalsAttrDesc.count);
            ub.setVerticesData(Ub.i.NormalKind, Bb, !1)
          }
          if (hb.tangetsAttrDesc && hb.tangetsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.tangetsAttrDesc.offset, hb.tangetsAttrDesc.count);
            ub.setVerticesData(Ub.i.TangentKind, Bb, !1)
          }
          if (hb.uvsAttrDesc && hb.uvsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvsAttrDesc.offset, hb.uvsAttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UVKind, Bb, !1)
          }
          if (hb.uvs2AttrDesc && hb.uvs2AttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvs2AttrDesc.offset, hb.uvs2AttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UV2Kind, Bb, !1)
          }
          if (hb.uvs3AttrDesc && hb.uvs3AttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvs3AttrDesc.offset, hb.uvs3AttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UV3Kind, Bb, !1)
          }
          if (hb.uvs4AttrDesc && hb.uvs4AttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvs4AttrDesc.offset, hb.uvs4AttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UV4Kind, Bb, !1)
          }
          if (hb.uvs5AttrDesc && hb.uvs5AttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvs5AttrDesc.offset, hb.uvs5AttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UV5Kind, Bb, !1)
          }
          if (hb.uvs6AttrDesc && hb.uvs6AttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.uvs6AttrDesc.offset, hb.uvs6AttrDesc.count);
            if (pb.d)
              for (let bb = 1; bb < Bb.length; bb += 2) Bb[bb] = 1 - Bb[bb];
            ub.setVerticesData(Ub.i.UV6Kind, Bb, !1)
          }
          if (hb.colorsAttrDesc && hb.colorsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.colorsAttrDesc.offset, hb.colorsAttrDesc.count);
            ub.setVerticesData(Ub.i.ColorKind, Bb, !1, hb.colorsAttrDesc.stride)
          }
          if (hb.matricesIndicesAttrDesc && hb.matricesIndicesAttrDesc.count > 0) {
            const Bb = new Int32Array(bb, hb.matricesIndicesAttrDesc.offset, hb.matricesIndicesAttrDesc.count),
              Ob = [];
            for (let bb = 0; bb < Bb.length; bb++) {
              const ub = Bb[bb];
              Ob.push(255 & ub), Ob.push((65280 & ub) >> 8), Ob.push((16711680 & ub) >> 16), Ob.push(ub >> 24 & 255)
            }
            ub.setVerticesData(Ub.i.MatricesIndicesKind, Ob, !1)
          }
          if (hb.matricesIndicesExtraAttrDesc && hb.matricesIndicesExtraAttrDesc.count > 0) {
            const Bb = new Int32Array(bb, hb.matricesIndicesExtraAttrDesc.offset, hb.matricesIndicesExtraAttrDesc.count),
              Ob = [];
            for (let bb = 0; bb < Bb.length; bb++) {
              const ub = Bb[bb];
              Ob.push(255 & ub), Ob.push((65280 & ub) >> 8), Ob.push((16711680 & ub) >> 16), Ob.push(ub >> 24 & 255)
            }
            ub.setVerticesData(Ub.i.MatricesIndicesExtraKind, Ob, !1)
          }
          if (hb.matricesWeightsAttrDesc && hb.matricesWeightsAttrDesc.count > 0) {
            const Bb = new Float32Array(bb, hb.matricesWeightsAttrDesc.offset, hb.matricesWeightsAttrDesc.count);
            ub.setVerticesData(Ub.i.MatricesWeightsKind, Bb, !1)
          }
          if (hb.indicesAttrDesc && hb.indicesAttrDesc.count > 0) {
            const Bb = new Int32Array(bb, hb.indicesAttrDesc.offset, hb.indicesAttrDesc.count);
            ub.setIndices(Bb, null)
          }
          if (hb.subMeshesAttrDesc && hb.subMeshesAttrDesc.count > 0) {
            const Bb = new Int32Array(bb, hb.subMeshesAttrDesc.offset, 5 * hb.subMeshesAttrDesc.count);
            ub.FW = [];
            for (let bb = 0; bb < hb.subMeshesAttrDesc.count; bb++) {
              const hb = Bb[5 * bb + 0],
                Ob = Bb[5 * bb + 1],
                Gb = Bb[5 * bb + 2],
                Ub = Bb[5 * bb + 3],
                Yb = Bb[5 * bb + 4];
              Lb.c.AddToMesh(hb, Ob, Gb, Ub, Yb, ub)
            }
          }
        } else if (bb.positions && bb.normals && bb.indices) {
          if (ub.setVerticesData(Ub.i.PositionKind, bb.positions, bb.positions._updatable || bb.positionsUpdatable), ub.setVerticesData(Ub.i.NormalKind, bb.normals, bb.normals._updatable || bb.normalsUpdatable), bb.tangents && ub.setVerticesData(Ub.i.TangentKind, bb.tangents, bb.tangents._updatable || bb.tangentsUpdatable), bb.uvs && ub.setVerticesData(Ub.i.UVKind, bb.uvs, bb.uvs._updatable || bb.uvsUpdatable), bb.uvs2 && ub.setVerticesData(Ub.i.UV2Kind, bb.uvs2, bb.uvs2._updatable || bb.uvs2Updatable), bb.uvs3 && ub.setVerticesData(Ub.i.UV3Kind, bb.uvs3, bb.uvs3._updatable || bb.uvs3Updatable), bb.uvs4 && ub.setVerticesData(Ub.i.UV4Kind, bb.uvs4, bb.uvs4._updatable || bb.uvs4Updatable), bb.uvs5 && ub.setVerticesData(Ub.i.UV5Kind, bb.uvs5, bb.uvs5._updatable || bb.uvs5Updatable), bb.uvs6 && ub.setVerticesData(Ub.i.UV6Kind, bb.uvs6, bb.uvs6._updatable || bb.uvs6Updatable), bb.colors && ub.setVerticesData(Ub.i.ColorKind, Ob.c.CheckColors4(bb.colors, bb.positions.length / 3), bb.colors._updatable), bb.matricesIndices)
            if (bb.matricesIndices._isExpanded || bb.matricesIndicesExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExpanded, ub.setVerticesData(Ub.i.MatricesIndicesKind, bb.matricesIndices, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable);
            else {
              const hb = [];
              for (let ub = 0; ub < bb.matricesIndices.length; ub++) {
                const Bb = bb.matricesIndices[ub];
                hb.push(255 & Bb), hb.push((65280 & Bb) >> 8), hb.push((16711680 & Bb) >> 16), hb.push(Bb >> 24 & 255)
              }
              ub.setVerticesData(Ub.i.MatricesIndicesKind, hb, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable)
            } if (bb.matricesIndicesExtra)
            if (bb.matricesIndicesExtraExpanded || bb.matricesIndicesExtra._isExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExtraExpanded, ub.setVerticesData(Ub.i.MatricesIndicesExtraKind, bb.matricesIndicesExtra, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable);
            else {
              const hb = [];
              for (let ub = 0; ub < bb.matricesIndicesExtra.length; ub++) {
                const Bb = bb.matricesIndicesExtra[ub];
                hb.push(255 & Bb), hb.push((65280 & Bb) >> 8), hb.push((16711680 & Bb) >> 16), hb.push(Bb >> 24 & 255)
              }
              ub.setVerticesData(Ub.i.MatricesIndicesExtraKind, hb, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable)
            } bb.matricesWeights && (Ab._CleanMatricesWeights(bb, ub), ub.setVerticesData(Ub.i.MatricesWeightsKind, bb.matricesWeights, bb.matricesWeights._updatable)), bb.matricesWeightsExtra && ub.setVerticesData(Ub.i.MatricesWeightsExtraKind, bb.matricesWeightsExtra, bb.matricesWeights._updatable), ub.setIndices(bb.indices, null)
        }
        if (bb.FW) {
          ub.FW = [];
          for (let hb = 0; hb < bb.FW.length; hb++) {
            const Bb = bb.FW[hb];
            Lb.c.AddToMesh(Bb.materialIndex, Bb.verticesStart, Bb.verticesCount, Bb.indexStart, Bb.indexCount, ub)
          }
        }
        ub._shouldGenerateFlatShading && (ub.convertToFlatShadedMesh(), ub._shouldGenerateFlatShading = !1), ub.computeWorldMatrix(!0), hb.onMeshImportedObservable.notifyObservers(ub)
      }
      static _CleanMatricesWeights(bb, ub) {
        const hb = .001;
        if (!Yb.c.CleanBoneMatrixWeights) return;
        let Bb;
        if (!(bb.skeletonId > -1)) return;
        {
          const hb = ub.ZN().getLastSkeletonById(bb.skeletonId);
          if (!hb) return;
          Bb = hb.bones.length
        }
        const Ob = ub.getVerticesData(Ub.i.MatricesIndicesKind),
          Gb = ub.getVerticesData(Ub.i.MatricesIndicesExtraKind),
          Lb = bb.matricesWeights,
          Sb = bb.matricesWeightsExtra,
          ab = bb.numBoneInfluencer,
          Hb = Lb.length;
        for (let Ub = 0; Ub < Hb; Ub += 4) {
          let bb = 0,
            ub = -1;
          for (let Bb = 0; Bb < 4; Bb++) {
            const Ob = Lb[Ub + Bb];
            bb += Ob, Ob < hb && ub < 0 && (ub = Bb)
          }
          if (Sb)
            for (let Bb = 0; Bb < 4; Bb++) {
              const Ob = Sb[Ub + Bb];
              bb += Ob, Ob < hb && ub < 0 && (ub = Bb + 4)
            }
          if ((ub < 0 || ub > ab - 1) && (ub = ab - 1), bb > hb) {
            const ub = 1 / bb;
            for (let bb = 0; bb < 4; bb++) Lb[Ub + bb] *= ub;
            if (Sb)
              for (let bb = 0; bb < 4; bb++) Sb[Ub + bb] *= ub
          } else ub >= 4 ? (Sb[Ub + ub - 4] = 1 - bb, Gb[Ub + ub - 4] = Bb) : (Lb[Ub + ub] = 1 - bb, Ob[Ub + ub] = Bb)
        }
        ub.setVerticesData(Ub.i.MatricesIndicesKind, Ob), bb.matricesWeightsExtra && ub.setVerticesData(Ub.i.MatricesIndicesExtraKind, Gb)
      }
      static Parse(bb, ub, hb) {
        const Ob = new Ab(bb.id, ub, void 0, bb.updatable);
        return Ob._loadedUniqueId = bb.uniqueId, wb.c && wb.c.AddTagsTo(Ob, bb.tags), bb.delayLoadingFile ? (Ob.delayLoadState = 4, Ob.delayLoadingFile = hb + bb.delayLoadingFile, Ob._boundingInfo = new Sb.e(Bb.q.FromArray(bb.boundingBoxMinimum), Bb.q.FromArray(bb.boundingBoxMaximum)), Ob._delayInfo = [], bb.hasUVs && Ob._delayInfo.push(Ub.i.UVKind), bb.hasUVs2 && Ob._delayInfo.push(Ub.i.UV2Kind), bb.hasUVs3 && Ob._delayInfo.push(Ub.i.UV3Kind), bb.hasUVs4 && Ob._delayInfo.push(Ub.i.UV4Kind), bb.hasUVs5 && Ob._delayInfo.push(Ub.i.UV5Kind), bb.hasUVs6 && Ob._delayInfo.push(Ub.i.UV6Kind), bb.hasColors && Ob._delayInfo.push(Ub.i.ColorKind), bb.hasMatricesIndices && Ob._delayInfo.push(Ub.i.MatricesIndicesKind), bb.hasMatricesWeights && Ob._delayInfo.push(Ub.i.MatricesWeightsKind), Ob._delayLoadingFunction = Gb.c.ImportVertexData) : Gb.c.ImportVertexData(bb, Ob), ub.pushGeometry(Ob, !0), Ob
      }
    }
  },
  39921: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      f: () => Xb
    });
    var Bb = hb(36727),
      Ob = hb(38302),
      Gb = hb(39886),
      Ub = hb(39854),
      Lb = hb(38296),
      Yb = hb(39892),
      Sb = hb(39609),
      ab = hb(36762);
    class Hb extends Gb.c {
      constructor(bb, ub) {
        super(bb, ub.ZN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ub.U_(this), this._sourceMesh = ub, this._unIndexed = ub._unIndexed, this.position.mD(ub.position), this.rotation.mD(ub.rotation), this.pa.mD(ub.pa), ub.rotationQuaternion && (this.rotationQuaternion = ub.rotationQuaternion.clone()), this.animations = ub.animations.slice();
        for (const hb of ub.getAnimationRanges()) null != hb && this.createAnimationRange(hb.name, hb.from, hb.to);
        if (this.infiniteDistance = ub.infiniteDistance, this.setPivotMatrix(ub.getPivotMatrix()), ub.skeleton || ub.morphTargetManager || !ub.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const bb = ub.XM();
          this.buildBoundingInfo(bb.minimum, bb.maximum)
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
      set receiveShadows(bb) {
        this._sourceMesh?.receiveShadows !== bb && Ob.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(bb) {
        this._sourceMesh?.material !== bb && Ob.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(bb) {
        this._sourceMesh?.visibility !== bb && Ob.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(bb) {
        this._sourceMesh?.skeleton !== bb && Ob.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(bb) {
        this._sourceMesh && bb !== this._sourceMesh.renderingGroupId && Ob.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(bb) {
        this._sourceMesh && bb !== this._sourceMesh.meshBlendingTag && Ob.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get LOb() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(bb) {
        return this._sourceMesh.createInstance(bb)
      }
      isReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(bb, !0)
      }
      getVerticesData(bb, ub, hb) {
        return this._sourceMesh.getVerticesData(bb, ub, hb)
      }
      copyVerticesData(bb, ub) {
        this._sourceMesh.copyVerticesData(bb, ub)
      }
      getVertexBuffer(bb, ub) {
        return this._sourceMesh.getVertexBuffer(bb, ub)
      }
      setVerticesData(bb, ub, hb, Bb) {
        return this.LOb && this.LOb.setVerticesData(bb, ub, hb, Bb), this.LOb
      }
      updateVerticesData(bb, ub, hb, Bb) {
        return this.LOb && this.LOb.updateVerticesData(bb, ub, hb, Bb), this.LOb
      }
      setIndices(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.LOb && this.LOb.setIndices(bb, ub), this.LOb
      }
      isVerticesDataPresent(bb) {
        return this._sourceMesh.isVerticesDataPresent(bb)
      }
      XBb() {
        return this._sourceMesh.XBb()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let bb, ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.XM().isLocked) return this;
        bb = "object" === typeof ub ? ub : {
          applySkeleton: ub,
          applyMorph: hb
        };
        const Bb = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(bb, null, Sb.i.PositionKind), Bb), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(bb, ub) {
        if (super._activate(bb, ub), this._sourceMesh.FW || Ob.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, bb), ub) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Yb.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Bb.d);
          const bb = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Bb.i.YX[7].mD(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.mD(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.mD(Bb.i.YX[7]), this._currentLOD._masterMesh = bb, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get pN() {
        return !0
      }
      getLOD(bb) {
        if (!bb) return this;
        const ub = this.LOb.getLODLevels();
        if (ub && 0 !== ub.length) {
          const ub = this.XM();
          this._currentLOD = this.LOb.getLOD(bb, ub.sBb)
        } else this._currentLOD = this.LOb;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(bb) {
        return this.LOb._preActivateForIntermediateRendering(bb)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.FW)
          for (let bb = 0; bb < this._sourceMesh.FW.length; bb++) this._sourceMesh.FW[bb].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.XM().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(bb);
        if (Lb.b.DeepCopy(this, Bb, ["name", "FW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "LOb", "pN", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "UOb", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "IUb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), ub && (Bb.parent = ub), !hb)
          for (let Ob = 0; Ob < this.ZN().meshes.length; Ob++) {
            const bb = this.ZN().meshes[Ob];
            bb.parent === this && bb.clone(bb.name, Bb)
          }
        return Bb.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Bb), Bb
      }
      dispose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Y_(this), super.dispose(bb, ub)
      }
      _serializeAsParent(bb) {
        super._serializeAsParent(bb), bb.parentId = this._sourceMesh.uniqueId, bb.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0, ub && ub.newSourcedMesh);
        Bb && hb && hb(this, Bb);
        for (const Ob of this.getChildTransformNodes(!0)) Ob.instantiateHierarchy(Bb, ub, hb);
        return Bb
      }
    }
    let wb = !1;

    function Zb(bb, ub, hb, Bb, Ob) {
      for (let Gb = 0; Gb < ub.length; Gb++) {
        const Ub = bb[ub[Gb]] ?? 0,
          Lb = Ob + hb[Gb];
        Ub.toArray ? Ub.toArray(Bb, Lb) : Ub.copyToArray ? Ub.copyToArray(Bb, Lb) : Bb[Lb] = Ub
      }
    }

    function Xb() {
      wb || (wb = !0, Ub.c._instancedMeshFactory = (bb, ub) => {
        const hb = new Hb(bb, ub);
        if (ub.Fs) {
          hb.Fs = {};
          for (const bb in ub.Fs) hb.Fs[bb] = ub.Fs[bb]
        }
        return hb
      }, Ub.c.prototype.Ws = function(bb, ub) {
        if (!this.Fs) {
          this.Fs = {};
          for (const bb of this.instances) bb.Fs = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.UX().getCaps().vertexArrayObject ? {} : void 0
        }), this.Fs[bb] = null, this._userInstancedBuffersStorage.strides[bb] = ub;
        const hb = this._userInstancedBuffersStorage;
        hb.interleavedKinds = [], hb.interleavedOffsets = [], hb.interleavedRowStride = 0;
        for (const Bb in hb.strides) hb.interleavedKinds.push(Bb), hb.interleavedOffsets.push(hb.interleavedRowStride), hb.interleavedRowStride += hb.strides[Bb];
        hb.interleavedData = new Float32Array(32 * hb.interleavedRowStride);
        for (const Bb in hb.interleavedBuffers) hb.interleavedBuffers[Bb].buffer.dispose();
        hb.interleavedBuffers = {}, hb.vertexBuffers[bb] = null;
        for (const Bb of this.instances) Bb.Fs[bb] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Ub.c.prototype._processInstancedBuffers = function(bb, ub) {
        const hb = this._userInstancedBuffersStorage,
          Bb = hb.interleavedRowStride;
        if (!Bb) return;
        const Ob = bb ? bb.length : 0,
          Gb = (Ob + 1) * Bb;
        let Ub = hb.interleavedData;
        if (Ub.length < Gb) {
          let bb = Ub.length;
          for (; bb < Gb;) bb *= 2;
          Ub = hb.interleavedData = new Float32Array(bb)
        }
        const Lb = hb.interleavedKinds,
          Yb = hb.interleavedOffsets;
        let ab = 0;
        ub && (Zb(this.Fs, Lb, Yb, Ub, ab), ab += Bb);
        for (let Sb = 0; Sb < Ob; Sb++) Zb(bb[Sb].Fs, Lb, Yb, Ub, ab), ab += Bb;
        let Hb = "shared",
          wb = hb.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Hb = this._instanceDataStorage.engine.currentRenderPassId, hb.renderPasses || (hb.renderPasses = {}), hb.renderPasses[Hb] || (hb.renderPasses[Hb] = {}), wb = hb.renderPasses[Hb]);
        const Xb = hb.interleavedBuffers[Hb];
        let pb = !Xb || Xb.data !== Ub;
        for (let Sb = 0; !pb && Sb < Lb.length; Sb++) pb = !wb[Lb[Sb]];
        if (!pb) return void Xb.buffer.updateDirectly(Ub, 0);
        Xb?.buffer.dispose();
        const ob = new Sb.b(this.UX(), Ub, !0, Bb, !1, !0);
        for (let Sb = 0; Sb < Lb.length; Sb++) {
          const bb = Lb[Sb],
            ub = ob.createVertexBuffer(bb, Yb[Sb], hb.strides[bb]);
          ub.hashCode += ub.byteOffset * 2 ** 24, wb[bb] = ub
        }
        hb.interleavedBuffers[Hb] = {
          buffer: ob,
          data: Ub
        }, this._invalidateInstanceVertexArrayObject()
      }, Ub.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const bb in this._userInstancedBuffersStorage.vertexArrayObjects) this.UX().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[bb]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Ub.c.prototype._disposeInstanceSpecificData = function() {
        for (const ub in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[ub].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const ub in this.Fs) this._userInstancedBuffersStorage.vertexBuffers[ub] && this._userInstancedBuffersStorage.vertexBuffers[ub].dispose();
        const bb = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (bb) {
          for (const ub in bb) bb[ub].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.Fs = {}
      }, (0, ab.f)("BABYLON.InstancedMesh", Hb))
    }
  },
  39854: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => cb,
      f: () => Rb,
      i: () => Eb
    });
    var Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab = hb(36753),
      lb = hb(39559),
      Kb = hb(39511),
      Wb = hb(38296),
      Cb = hb(39492),
      db = hb(39856),
      rb = hb(39666),
      jb = hb(36727),
      nb = hb(36893),
      Db = hb(39670),
      xb = hb(39609),
      zb = hb(39862),
      gb = hb(39869),
      ib = hb(39886),
      vb = hb(39736),
      tb = hb(39728),
      Jb = hb(39824),
      eb = hb(39900),
      Nb = hb(39875),
      sb = hb(39488),
      Mb = hb(38302),
      mb = hb(36762),
      Ib = hb(39333),
      Pb = hb(39632);
    class qb {
      constructor(bb, ub) {
        this.distanceOrScreenCoverage = bb, this.mesh = ub
      }
    }
    class Eb {}
    class yb {
      constructor() {
        this.batchCache = new Fb(this), this.batchCacheReplacementModeInFrozenMode = new Fb(this), this.instancesBufferSize = 2048
      }
    }
    class Vb {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Fb {
      constructor(bb) {
        this.parent = bb, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class fb {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class kb {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Tb = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class cb extends ib.c {
      static _GetDefaultSideOrientation(bb) {
        return bb || cb.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(bb) {
        this._internalMeshDataInfo._useLODScreenCoverage = bb, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(bb) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== bb && (bb && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(xb.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(xb.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = bb, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Ab.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Ab.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Ab.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Ab.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Ab.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(bb) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(bb)
      }
      get UOb() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(bb) {
        this._internalMeshDataInfo._forcedInstanceCount = bb
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(bb) {
        this._internalMeshDataInfo._sideOrientation = bb, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === bb || !this._scene.useRightHandedSystem && 0 === bb
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(bb) {
        this.sideOrientation = bb, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(bb) {
        this._internalMeshDataInfo._overrideRenderingFillMode = bb
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(bb) {
        bb && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (bb.sideOrientation = null), this._setMaterial(bb)
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
      set isUnIndexed(bb) {
        this._unIndexed !== bb && (this._unIndexed = bb, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const bb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return bb ? bb.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const bb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return bb ? bb.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(bb) {
        this._instanceDataStorage.manualUpdate = bb
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(bb) {
        this._instanceDataStorage.previousManualUpdate = bb
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(bb) {
        this._instanceDataStorage.forceMatrixUpdates = bb
      }
      _copySource(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ob = this.ZN();
        if (bb._geometry && bb._geometry.applyToMesh(this), Wb.b.DeepCopy(bb, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "UOb", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "pN", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "IUb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = bb, Ob.useClonedMeshMap && (bb._internalMeshDataInfo.meshMap || (bb._internalMeshDataInfo.meshMap = {}), bb._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = bb._originalBuilderSideOrientation, this._creationDataStorage = bb._creationDataStorage, bb._ranges) {
          const ub = bb._ranges;
          for (const bb in ub) Object.prototype.hasOwnProperty.call(ub, bb) && ub[bb] && this.createAnimationRange(bb, ub[bb].from, ub[bb].to)
        }
        if (bb.metadata && bb.metadata.clone ? this.metadata = bb.metadata.clone() : this.metadata = bb.metadata, this._internalMetadata = bb._internalMetadata, this.meshBlendingTag = bb.meshBlendingTag, Cb.c && Cb.c.HasTags(bb) && Cb.c.AddTagsTo(this, Cb.c.GetTags(bb, !0)), this.Zx(bb.isEnabled(!1)), this.parent = bb.parent, this.setPivotMatrix(bb.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + bb.id, this.material = bb.material, !ub) {
          const Ob = bb.getDescendants(!0);
          for (let bb = 0; bb < Ob.length; bb++) {
            const Gb = Ob[bb];
            Gb._isMesh ? (Tb.parent = this, Tb.doNotCloneChildren = ub, Tb.clonePhysicsImpostor = hb, Tb.cloneThinInstances = Bb, Gb.clone(this.name + "." + Gb.name, Tb)) : Gb.clone && Gb.clone(this.name + "." + Gb.name, this)
          }
        }
        if (bb.morphTargetManager && (this.morphTargetManager = bb.morphTargetManager), (0, Ib.b)(Ob.getPhysicsEngine)) {
          const ub = Ob.getPhysicsEngine();
          if (hb && ub)
            if (1 === ub.getPluginVersion()) {
              const hb = ub.getImpostorForPhysicsObject(bb);
              hb && (this.physicsImpostor = hb.clone(this))
            } else 2 === ub.getPluginVersion() && bb.physicsBody && bb.physicsBody.clone(this)
        }
        for (let Gb = 0; Gb < Ob.fW.length; Gb++) {
          const ub = Ob.fW[Gb];
          ub.emitter === bb && ub.clone(ub.name, this)
        }
        if (this.skeleton = bb.skeleton, Bb && (bb._thinInstanceDataStorage.matrixData ? (this.x_("matrix", new Float32Array(bb._thinInstanceDataStorage.matrixData), 16, !bb._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = bb._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, bb._userThinInstanceBuffersStorage)) {
          const ub = bb._userThinInstanceBuffersStorage;
          for (const bb in ub.data) this.x_(bb, new Float32Array(ub.data[bb]), ub.strides[bb], !ub.vertexBuffers?.[bb]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[bb] = ub.sizes[bb]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(bb) {
        let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Gb = arguments.length > 4 ? arguments[4] : void 0,
          Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(bb, hb), this._internalMeshDataInfo = new kb, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new fb, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = cb.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, hb = this.ZN(), this._instanceDataStorage = new Vb, this._instanceDataStorage.engine = hb.UX(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new yb), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (bb, ub, hb) => {
          bb && hb && (this._uniformBuffer ? this.transferToEffect(ub) : hb.bindOnlyWorldMatrix(ub))
        };
        let Lb = !1;
        if (Bb && void 0 === Bb._addToSceneRootNodes) {
          const bb = Bb;
          ub = bb.parent ?? null, Ob = bb.source ?? null, Gb = bb.doNotCloneChildren ?? !1, Ub = bb.clonePhysicsImpostor ?? !0, Lb = bb.cloneThinInstances ?? !1
        } else ub = Bb;
        Ob && this._copySource(Ob, Gb, Ub, Lb), null !== ub && (this.parent = ub), this._instanceDataStorage.hardwareInstancedRendering = this.UX().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = bb => {
          bb.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Ab.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), Ob && Ob.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = 0 === this.getTotalVertices() || ub && ub.doNotInstantiate && (!0 === ub.doNotInstantiate || ub.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Bb.parent = bb || this.parent, Bb.position = this.position.clone(), Bb.pa = this.pa.clone(), this.rotationQuaternion ? Bb.rotationQuaternion = this.rotationQuaternion.clone() : Bb.rotation = this.rotation.clone(), hb && hb(this, Bb);
        for (const Ob of this.getChildTransformNodes(!0)) "InstancedMesh" === Ob.getClassName() && "Mesh" === Bb.getClassName() && Ob.LOb === this ? Ob.instantiateHierarchy(Bb, {
          doNotInstantiate: ub && ub.doNotInstantiate || !1,
          newSourcedMesh: Bb
        }, hb) : Ob.instantiateHierarchy(Bb, ub, hb);
        return Bb
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(bb) {
        let ub = super.toString(bb);
        if (ub += ", n vertices: " + this.getTotalVertices(), ub += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let hb = 0; hb < this.animations.length; hb++) ub += ", animation[0]: " + this.animations[hb].toString(bb);
        if (bb)
          if (this._geometry) {
            const bb = this.XBb(),
              hb = this.getVerticesData(xb.i.PositionKind);
            hb && bb && (ub += ", flat shading: " + (hb.length / 3 === bb.length ? "YES" : "NO"))
          } else ub += ", flat shading: UNKNOWN";
        return ub
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const bb of this.instances) bb._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const bb = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((ub, hb) => ub.distanceOrScreenCoverage < hb.distanceOrScreenCoverage ? bb : ub.distanceOrScreenCoverage > hb.distanceOrScreenCoverage ? -bb : 0))
      }
      addLODLevel(bb, ub) {
        if (ub && ub._masterMesh) return Mb.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const hb = new qb(bb, ub);
        return this._internalMeshDataInfo._LODLevels.push(hb), ub && (ub._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(bb) {
        const ub = this._internalMeshDataInfo;
        for (let hb = 0; hb < ub._LODLevels.length; hb++) {
          const Bb = ub._LODLevels[hb];
          if (Bb.distanceOrScreenCoverage === bb) return Bb.mesh
        }
        return null
      }
      removeLODLevel(bb) {
        const ub = this._internalMeshDataInfo;
        for (let hb = 0; hb < ub._LODLevels.length; hb++) ub._LODLevels[hb].mesh === bb && (ub._LODLevels.splice(hb, 1), bb && (bb._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(bb, ub) {
        const hb = this._internalMeshDataInfo;
        if (!hb._LODLevels || 0 === hb._LODLevels.length) return this;
        const Bb = ub || this.XM().sBb,
          Ob = bb.mode === rb.d.ORTHOGRAPHIC_CAMERA ? bb.minZ : Bb.centerWorld.subtract(bb.globalPosition).length();
        let Gb = Ob,
          Ub = 1;
        if (hb._useLODScreenCoverage) {
          const ub = bb.screenArea;
          let hb = Bb.radiusWorld * bb.minZ / Ob;
          hb = hb * hb * Math.PI, Gb = hb / ub, Ub = -1
        }
        if (Ub * hb._LODLevels[hb._LODLevels.length - 1].distanceOrScreenCoverage > Ub * Gb) return this.onLODLevelSelection && this.onLODLevelSelection(Gb, this, this), this;
        for (let Lb = 0; Lb < hb._LODLevels.length; Lb++) {
          const bb = hb._LODLevels[Lb];
          if (Ub * bb.distanceOrScreenCoverage < Ub * Gb) {
            if (bb.mesh) {
              if (4 === bb.mesh.delayLoadState) return bb.mesh._checkDelayState(), this;
              if (2 === bb.mesh.delayLoadState) return this;
              bb.mesh._preActivate(), bb.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Gb, this, bb.mesh), bb.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Gb, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(bb, ub, hb, Bb) {
        if (!this._geometry) return null;
        let Ob = Bb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]?.getFloatData(this.instances.length + 1, hb || ub && 1 !== this._geometry.meshes.length);
        return Ob || (Ob = this._geometry.getVerticesData(bb, ub, hb)), Ob
      }
      copyVerticesData(bb, ub) {
        this._geometry && this._geometry.copyVerticesData(bb, ub)
      }
      getVertexBuffer(bb, ub) {
        return this._geometry ? (ub ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]) ?? this._geometry.getVertexBuffer(bb) : null
      }
      isVerticesDataPresent(bb, ub) {
        return this._geometry ? !ub && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[bb] || this._geometry.isVerticesDataPresent(bb) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb)
      }
      isVertexBufferUpdatable(bb, ub) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb);
        if (!ub) {
          const ub = this._userInstancedBuffersStorage?.vertexBuffers[bb];
          if (ub) return ub.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(bb)
      }
      getVerticesDataKinds(bb) {
        if (!this._geometry) {
          const bb = [];
          if (this._delayInfo)
            for (const ub of this._delayInfo) bb.push(ub);
          return bb
        }
        const ub = this._geometry.getVerticesDataKinds();
        if (!bb && this._userInstancedBuffersStorage)
          for (const hb in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ub.indexOf(hb) && ub.push(hb);
        return ub
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      XBb(bb, ub) {
        return this._geometry ? this._geometry.XBb(bb, ub) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(bb)) return !1;
        if (!this.FW || 0 === this.FW.length) return !0;
        if (!bb) return !0;
        const hb = this.UX(),
          Bb = this.ZN(),
          Ob = ub || hb.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Gb = this.material || Bb.defaultMaterial;
        if (Gb)
          if (Gb._storeEffectOnSubMeshes)
            for (const Lb of this.FW) {
              const bb = Lb.HX();
              if (bb)
                if (bb._storeEffectOnSubMeshes) {
                  if (!bb.isReadyForSubMesh(this, Lb, Ob)) return !1
                } else if (!bb.isReady(this, Ob)) return !1
            } else if (!Gb.isReady(this, Ob)) return !1;
        const Ub = hb.currentRenderPassId;
        for (const Lb of this.lightSources) {
          const bb = Lb.getShadowGenerators();
          if (!bb) continue;
          const ub = bb.values();
          for (let Bb = ub.next(); !0 !== Bb.done; Bb = ub.next()) {
            const bb = Bb.value;
            if (bb && (!bb.getShadowMap()?.renderList || bb.getShadowMap()?.renderList && -1 !== bb.getShadowMap()?.renderList?.indexOf(this))) {
              const ub = bb.getShadowMap().renderPassIds ?? [hb.currentRenderPassId];
              for (let Bb = 0; Bb < ub.length; ++Bb) {
                hb.currentRenderPassId = ub[Bb];
                for (const ub of this.FW)
                  if (!bb.isReady(ub, Ob, ub.HX()?.needAlphaBlendingForMesh(this) ?? !1)) return hb.currentRenderPassId = Ub, !1
              }
              hb.currentRenderPassId = Ub
            }
          }
        }
        for (const Lb of this._internalMeshDataInfo._LODLevels)
          if (Lb.mesh && !Lb.mesh.isReady(Ob)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      wX() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(bb) {
        this._instanceDataStorage.overridenInstanceCount = bb
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const bb = this._instanceDataStorage.engine.currentRenderPassId;
        let ub = this._instanceDataStorage.renderPasses[bb];
        return ub || (ub = new yb, this._instanceDataStorage.renderPasses[bb] = ub), ub
      }
      _preActivate() {
        const bb = this._internalMeshDataInfo,
          ub = this.ZN().getRenderId();
        return bb._preActivateId === ub || (bb._preActivateId = ub, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(bb) {
        const ub = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ub.visibleInstances && (ub.visibleInstances.intermediateDefaultRenderId = bb), this
      }
      _registerInstanceForRenderId(bb, ub) {
        const hb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return hb.visibleInstances || (hb.visibleInstances = {
          defaultRenderId: ub,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), hb.visibleInstances[ub] || (void 0 === hb.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete hb.visibleInstances[hb.previousRenderId], hb.previousRenderId = ub, hb.visibleInstances[ub] = new Array), hb.visibleInstances[ub].push(bb), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.aX || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let bb, ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.XM().isLocked) return this;
        bb = "object" === typeof ub ? ub : {
          applySkeleton: ub,
          applyMorph: hb
        };
        const Bb = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(bb, null, xb.i.PositionKind), Bb), this
      }
      _createGlobalSubMesh(bb) {
        const ub = this.getTotalVertices();
        if (!ub || !this.XBb()) return null;
        if (this.FW && this.FW.length > 0) {
          const hb = this.XBb();
          if (!hb) return null;
          const Bb = hb.length;
          let Ob = !1;
          if (bb) Ob = !0;
          else
            for (const bb of this.FW) {
              if (bb.indexStart + bb.indexCount > Bb) {
                Ob = !0;
                break
              }
              if (bb.verticesStart + bb.verticesCount > ub) {
                Ob = !0;
                break
              }
            }
          if (!Ob) return this.FW[0]
        }
        return this.releaseSubMeshes(), new vb.c(0, 0, ub, 0, this.getTotalIndices() || (this.isUnIndexed ? ub : 0), this)
      }
      subdivide(bb) {
        if (bb < 1) return;
        const ub = this.getTotalIndices();
        let hb = ub / bb | 0,
          Bb = 0;
        for (; hb % 3 !== 0;) hb++;
        this.releaseSubMeshes();
        for (let Ob = 0; Ob < bb && !(Bb >= ub); Ob++) vb.c.CreateFromIndices(0, Bb, Bb + hb >= ub ? ub - Bb : hb, this, void 0, !1), Bb += hb;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(bb, ub, hb, Bb);
        else {
          const Bb = new zb.c;
          Bb.set(ub, bb);
          const Ob = this.ZN();
          new gb.b(gb.b.RandomId(), Ob, Bb, hb, this)
        }
        return this
      }
      removeVerticesData(bb) {
        this._geometry && this._geometry.removeVerticesData(bb)
      }
      markVerticesDataAsUpdatable(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const hb = this.getVertexBuffer(bb);
        hb && hb.isUpdatable() !== ub && this.setVerticesData(bb, this.getVerticesData(bb), ub)
      }
      setVerticesBuffer(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = gb.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(bb, hb, ub), this
      }
      updateVerticesData(bb, ub, hb, Bb) {
        return this._geometry ? (Bb ? (this.makeGeometryUnique(), this.updateVerticesData(bb, ub, hb, !1)) : this._geometry.updateVerticesData(bb, ub, hb), this) : this
      }
      updateMeshPositions(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const hb = this.getVerticesData(xb.i.PositionKind);
        if (!hb) return this;
        if (bb(hb), this.updateVerticesData(xb.i.PositionKind, hb, !1, !1), ub) {
          const bb = this.XBb(),
            ub = this.getVerticesData(xb.i.NormalKind);
          if (!ub) return this;
          zb.c.ComputeNormals(hb, bb, ub), this.updateVerticesData(xb.i.NormalKind, ub, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const bb = this._geometry,
          ub = this._geometry.copy(gb.b.RandomId());
        return bb.releaseForMesh(this, !0), ub.applyToMesh(this), this
      }
      setIndexBuffer(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ob = this._geometry;
        Ob || (Ob = new gb.b(gb.b.RandomId(), this.ZN(), void 0, void 0, this)), Ob.setIndexBuffer(bb, ub, hb, Bb)
      }
      setIndices(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(bb, ub, hb, Bb);
        else {
          const Bb = new zb.c;
          Bb.indices = bb;
          const Ob = this.ZN();
          new gb.b(gb.b.RandomId(), Ob, Bb, hb, this, ub)
        }
        return this
      }
      updateIndices(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(bb, ub, hb), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(bb, ub, hb) {
        let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Ob = this.ZN().UX();
        let Gb;
        if (this._unIndexed)
          if (this._getRenderingFillMode(hb) === tb.e.WireFrameFillMode) Gb = bb._getLinesIndexBuffer(this.XBb(), Ob);
          else Gb = null;
        else switch (this._getRenderingFillMode(hb)) {
          case tb.e.PointFillMode:
            Gb = null;
            break;
          case tb.e.WireFrameFillMode:
            Gb = bb._getLinesIndexBuffer(this.XBb(), Ob);
            break;
          default:
          case tb.e.TriangleFillMode:
            Gb = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(ub, Gb, Bb)
      }
      _bindDirect(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(bb), hb && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const bb = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const ub in bb) this._userInstancedBuffersStorage.vertexBuffers[ub] = bb[ub]
          }
          this._geometry._bind(bb, ub, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(bb, ub);
        return this
      }
      _draw(bb, ub, hb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Bb = this.ZN().UX(),
          Ob = Bb._currentMaterialContext,
          Gb = Ob && Ob.useVertexPulling;
        return this._unIndexed && ub !== tb.e.WireFrameFillMode || ub == tb.e.PointFillMode ? Bb.drawArraysType(ub, bb.verticesStart, bb.verticesCount, this.forcedInstanceCount || hb) : ub == tb.e.WireFrameFillMode ? Bb.drawElementsType(ub, 0, bb._linesIndexCount, this.forcedInstanceCount || hb) : Gb ? Bb.drawArraysType(ub, bb.indexStart, bb.indexCount, this.forcedInstanceCount || hb) : Bb.drawElementsType(ub, bb.indexStart, bb.indexCount, this.forcedInstanceCount || hb), this
      }
      registerBeforeRender(bb) {
        return this.onBeforeRenderObservable.add(bb), this
      }
      unregisterBeforeRender(bb) {
        return this.onBeforeRenderObservable.removeCallback(bb), this
      }
      registerAfterRender(bb) {
        return this.onAfterRenderObservable.add(bb), this
      }
      unregisterAfterRender(bb) {
        return this.onAfterRenderObservable.removeCallback(bb), this
      }
      _getInstancesRenderList(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (ub) return hb.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[bb] = !1, hb.batchCacheReplacementModeInFrozenMode.renderSelf[bb] = !0, hb.batchCacheReplacementModeInFrozenMode;
          if (hb.previousBatch) return hb.previousBatch
        }
        const Bb = this.ZN(),
          Ob = Bb._isInIntermediateRendering(),
          Gb = Ob ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Ub = hb.batchCache;
        if (Ub.mustReturn = !1, Ub.renderSelf[bb] = ub || !Gb && this.isEnabled() && this.isVisible, Ub.visibleInstances[bb] = null, hb.visibleInstances && !ub) {
          const ub = hb.visibleInstances,
            Gb = Bb.getRenderId(),
            Lb = Ob ? ub.intermediateDefaultRenderId : ub.defaultRenderId;
          Ub.visibleInstances[bb] = ub[Gb], !Ub.visibleInstances[bb] && Lb && (Ub.visibleInstances[bb] = ub[Lb])
        }
        return Ub.hardwareInstancedRendering[bb] = !ub && this._instanceDataStorage.hardwareInstancedRendering && null !== Ub.visibleInstances[bb] && void 0 !== Ub.visibleInstances[bb], hb.previousBatch = Ub, Ub
      }
      _updateInstancedBuffers(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = ub.visibleInstances[bb._id],
          Lb = Ub ? Ub.length : 0,
          Yb = ub.parent,
          Sb = this._instanceDataStorage;
        let ab = Yb.instancesBuffer,
          Hb = Yb.instancesPreviousBuffer,
          wb = 0,
          Zb = 0;
        const Xb = ub.renderSelf[bb._id],
          pb = this._scene.floatingOriginOffset,
          ob = !ab || hb !== Yb.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Yb.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Sb.isFrozen && !ob) Zb = (Xb ? 1 : 0) + Lb;
        else {
          const ub = this.getWorldMatrix();
          if (Xb) {
            this._scene.needsPreviousWorldMatrices && (Sb.masterMeshPreviousWorldMatrix ? (Sb.masterMeshPreviousWorldMatrix.copyToArray(Yb.instancesPreviousData, wb), Sb.masterMeshPreviousWorldMatrix.mD(ub)) : (Sb.masterMeshPreviousWorldMatrix = ub.clone(), Sb.masterMeshPreviousWorldMatrix.copyToArray(Yb.instancesPreviousData, wb))), ub.copyToArray(Yb.instancesData, wb);
            const bb = ub.ZBb();
            Yb.instancesData[wb + 12] = bb[12] - pb.x, Yb.instancesData[wb + 13] = bb[13] - pb.y, Yb.instancesData[wb + 14] = bb[14] - pb.z, wb += 16, Zb++
          }
          if (Ub) {
            if (cb.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && bb.HX()?.needAlphaBlendingForMesh(bb.getRenderingMesh())) {
              const bb = this._scene.activeCamera.globalPosition;
              for (let ub = 0; ub < Ub.length; ub++) {
                const hb = Ub[ub];
                hb._distanceToCamera = jb.q.Distance(hb.XM().sBb.centerWorld, bb)
              }
              Ub.sort(((bb, ub) => bb._distanceToCamera > ub._distanceToCamera ? -1 : bb._distanceToCamera < ub._distanceToCamera ? 1 : 0))
            }
            for (let bb = 0; bb < Ub.length; bb++) {
              const ub = Ub[bb],
                hb = ub.getWorldMatrix();
              hb.copyToArray(Yb.instancesData, wb), this._scene.needsPreviousWorldMatrices && (ub._previousWorldMatrix ? (ub._previousWorldMatrix.copyToArray(Yb.instancesPreviousData, wb), ub._previousWorldMatrix.mD(hb)) : (ub._previousWorldMatrix = hb.clone(), ub._previousWorldMatrix.copyToArray(Yb.instancesPreviousData, wb)));
              const Bb = hb.ZBb();
              Yb.instancesData[wb + 12] = Bb[12] - pb.x, Yb.instancesData[wb + 13] = Bb[13] - pb.y, Yb.instancesData[wb + 14] = Bb[14] - pb.z, wb += 16, Zb++
            }
          }
        }
        if (ob) {
          let bb;
          if (ab && ab.dispose(), Hb && Hb.dispose(), ab = new xb.b(Bb, Yb.instancesData, !0, 16, !1, !0), Yb.instancesBuffer = ab, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.UX().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) bb = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const ub = this._instanceDataStorage.engine.currentRenderPassId;
            bb = this._userInstancedBuffersStorage.renderPasses[ub], bb || (this._userInstancedBuffersStorage.renderPasses[ub] = bb = {})
          }
          bb.world0 = ab.createVertexBuffer("world0", 0, 4), bb.world1 = ab.createVertexBuffer("world1", 4, 4), bb.world2 = ab.createVertexBuffer("world2", 8, 4), bb.world3 = ab.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Hb = new xb.b(Bb, Yb.instancesPreviousData, !0, 16, !1, !0), Yb.instancesPreviousBuffer = Hb, bb.previousWorld0 = Hb.createVertexBuffer("previousWorld0", 0, 4), bb.previousWorld1 = Hb.createVertexBuffer("previousWorld1", 4, 4), bb.previousWorld2 = Hb.createVertexBuffer("previousWorld2", 8, 4), bb.previousWorld3 = Hb.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (ab.updateDirectly(Yb.instancesData, 0, Zb), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Hb.updateDirectly(Yb.instancesPreviousData, 0, Zb));
        this._processInstancedBuffers(Ub, Xb), Gb && void 0 !== Ob && (this.ZN()._activeIndices.addCount(bb.indexCount * Zb, !1), Bb._currentDrawContext && (Bb._currentDrawContext.useInstancing = !0), this._bind(bb, Gb, Ob), this._draw(bb, Ob, Zb)), !this._scene.needsPreviousWorldMatrices || ob || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Hb.updateDirectly(Yb.instancesData, 0, Zb)
      }
      _renderWithInstances(bb, ub, hb, Bb, Ob) {
        const Gb = hb.visibleInstances[bb._id],
          Ub = Gb ? Gb.length : 0,
          Lb = hb.parent,
          Yb = Lb.instancesBufferSize,
          Sb = 16 * (Ub + 1) * 4;
        for (; Lb.instancesBufferSize < Sb;) Lb.instancesBufferSize *= 2;
        return Lb.instancesData && Yb == Lb.instancesBufferSize || (Lb.instancesData = new Float32Array(Lb.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Lb.instancesPreviousData || Yb != Lb.instancesBufferSize) && (Lb.instancesPreviousData = new Float32Array(Lb.instancesBufferSize / 4)), this._updateInstancedBuffers(bb, hb, Yb, Ob, ub, Bb), Ob.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(bb, ub, hb, Bb) {
        const Ob = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.ZN()._activeIndices.addCount(bb.indexCount * Ob, !1), Bb._currentDrawContext && (Bb._currentDrawContext.useInstancing = !0), this._bind(bb, hb, ub), this._draw(bb, ub, Ob), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Ob) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Bb.unbindInstanceAttributes()
      }
      _processInstancedBuffers(bb, ub) {}
      _processRendering(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = this.ZN(),
          Sb = Yb.UX();
        if (Bb = this._getRenderingFillMode(Bb), Gb && ub.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(ub, Bb, hb, Sb), this;
        if (Gb) this._renderWithInstances(ub, Bb, Ob, hb, Sb);
        else {
          Sb._currentDrawContext && (Sb._currentDrawContext.useInstancing = !1);
          let hb = 0;
          Ob.renderSelf[ub._id] && (Ub && Ub(!1, bb.getWorldMatrix(), Lb), hb++, this._draw(ub, Bb, this._instanceDataStorage.overridenInstanceCount));
          const Gb = Ob.visibleInstances[ub._id];
          if (Gb) {
            const bb = Gb.length;
            hb += bb;
            for (let hb = 0; hb < bb; hb++) {
              const bb = Gb[hb].getWorldMatrix();
              Ub && Ub(!0, bb, Lb), this._draw(ub, Bb)
            }
          }
          Yb._activeIndices.addCount(ub.indexCount * hb, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb?.instancesBuffer && (ub && bb.instancesBuffer.dispose(), bb.instancesBuffer = null), bb?.instancesPreviousBuffer && (ub && bb.instancesPreviousBuffer.dispose(), bb.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ub in this._instanceDataStorage.renderPasses) {
          const hb = this._instanceDataStorage.renderPasses[ub];
          this._disposeInstanceDataStorageRenderPass(hb, bb)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, bb), this._userInstancedBuffersStorage) {
          for (const ub in this._userInstancedBuffersStorage.vertexBuffers) {
            const hb = this._userInstancedBuffersStorage.vertexBuffers[ub];
            hb && (bb && hb.dispose(), this._userInstancedBuffersStorage.vertexBuffers[ub] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(bb)
      }
      _releaseRenderPassId(bb) {
        const ub = this._instanceDataStorage.renderPasses[bb];
        if (ub && (this._disposeInstanceDataStorageRenderPass(ub, !0), delete this._instanceDataStorage.renderPasses[bb]), this._userInstancedBuffersStorage?.renderPasses) {
          const ub = this._userInstancedBuffersStorage.renderPasses[bb];
          if (ub)
            for (const bb in ub) ub[bb]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[bb]
        }
        const hb = this._userInstancedBuffersStorage?.interleavedBuffers;
        hb?.[bb] && (hb[bb].buffer.dispose(), delete hb[bb])
      }
      _freeze() {
        if (this.FW) {
          for (let bb = 0; bb < this.FW.length; bb++) this._getInstancesRenderList(bb);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const bb in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[bb].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Gb = this._scene.UX(),
          Ub = Gb.currentRenderPassId;
        if (void 0 !== bb && (Gb.currentRenderPassId = bb), Bb)(!Ob || Ob && Bb.isInFrustum(this._scene._frustumPlanes)) && this.render(Bb, !!ub, hb);
        else
          for (let Lb = 0; Lb < this.FW.length; Lb++) {
            const bb = this.FW[Lb];
            (!Ob || Ob && bb.isInFrustum(this._scene._frustumPlanes)) && this.render(bb, !!ub, hb)
          }
        return void 0 !== bb && (Gb.currentRenderPassId = Ub), this
      }
      directRender() {
        if (!this.FW) return this;
        for (const bb of this.FW) this.render(bb, !1);
        return this
      }
      render(bb, ub, hb) {
        const Bb = this.ZN(),
          Ob = Bb.UX();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Gb = Bb.activeCameras?.length ?? 0,
          Ub = Gb > 1 && Bb.activeCamera === Bb.activeCameras[0] || Gb <= 1,
          Lb = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Ob.currentRenderPassId;
        if (Ub && this._checkOcclusionQuery(Lb) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Yb = this._getInstancesRenderList(bb._id, !!hb);
        if (Yb.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Sb = 0,
          ab = null;
        this.ignoreCameraMaxZ && Bb.activeCamera && !Bb._isInIntermediateRendering() && (Sb = Bb.activeCamera.maxZ, ab = Bb.activeCamera, Bb.activeCamera.maxZ = 0, Bb.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Hb = bb.getRenderingMesh(),
          wb = Yb.hardwareInstancedRendering[bb._id] || Hb.hasThinInstances || !!this._userInstancedBuffersStorage && !bb.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Zb = this._instanceDataStorage,
          Xb = bb.HX();
        if (!Xb) return ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), this;
        if (Zb.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Xb) {
          if (Xb._storeEffectOnSubMeshes && !bb._drawWrapper?._wasPreviouslyReady || !Xb._storeEffectOnSubMeshes && !Xb._getDrawWrapper()._wasPreviouslyReady) return ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), this
        } else {
          if (Xb._storeEffectOnSubMeshes) {
            if (!Xb.isReadyForSubMesh(this, bb, wb)) return ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), this
          } else if (!Xb.isReady(this, wb)) return ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Xb
        }
        if (ub) {
          const bb = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === bb.alphaModes.length) Ob.setAlphaMode(bb.alphaMode);
          else
            for (let ub = 0; ub < bb.alphaModes.length; ub++) {
              const hb = bb.alphaModes[ub];
              Ob.setAlphaMode(void 0 !== hb ? hb : 2, !1, ub)
            }
        }
        let pb;
        pb = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? bb._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const ob = pb?.effect ?? null;
        for (let rb = 0, jb = Bb._beforeRenderingMeshStage; rb < jb.length; rb++) {
          jb[rb].action(this, bb, Yb, ob)
        }
        if (!pb || !ob) return ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), this;
        const Ab = hb || this;
        let lb;
        if (!Zb.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const bb = Ab._getWorldMatrixDeterminant();
          lb = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), bb < 0 && (lb = lb === tb.e.ClockWiseSideOrientation ? tb.e.CounterClockWiseSideOrientation : tb.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = lb
        }
        const Kb = this._internalMeshDataInfo._effectiveMaterial._preBind(pb, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Ob.setDepthWrite(!0);
        const Wb = this._internalMeshDataInfo._effectiveMaterial,
          Cb = Wb.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), wb || this._bind(bb, ob, Cb, !1);
        const db = Ab.getWorldMatrix();
        Wb._storeEffectOnSubMeshes ? Wb.bindForSubMesh(db, this, bb) : Wb.bind(db, this);
        try {
          Jb.d._BindAttachmentsForEffect(Ob, ob) && (!Wb.backFaceCulling && Wb.separateCullingPass && (Ob.setState(!0, Wb.zOffset, !1, !Kb, Wb.cullBackFaces, Wb.stencil, Wb.zOffsetUnits), this._processRendering(this, bb, ob, Cb, Yb, wb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Ob.setState(!0, Wb.zOffset, !1, Kb, Wb.cullBackFaces, Wb.stencil, Wb.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(bb)), this._processRendering(this, bb, ob, Cb, Yb, wb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Jb.d._RestoreAttachments(Ob)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let rb = 0, jb = Bb._afterRenderingMeshStage; rb < jb.length; rb++) {
          jb[rb].action(this, bb, Yb, ob)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), ab && (ab.maxZ = Sb, Bb.updateTransformMatrix(!0)), 2 !== Bb.performancePriority || Zb.isFrozen || this._freeze(), this
      }
      _renderRunFollower(bb, ub) {
        const hb = this._scene,
          Bb = hb._engine;
        if (Bb.isWebGPU || bb._mesh !== this || 0 !== this.instances.length || this.render !== cb.prototype.render) return !1;
        const Ob = bb.HX();
        if (!Ob || Ob !== hb._cachedMaterial || void 0 === Ob._canBindRunFollower) return !1;
        const Gb = bb._drawWrapper,
          Ub = Gb?.effect;
        if (!Ub || Ub !== hb._cachedEffect || this.visibility !== hb._cachedVisibility || Gb._forceRebindOnNextCall) return !1;
        const Lb = this.hasThinInstances;
        if (!Lb && this._userInstancedBuffersStorage) return !1;
        if (!Gb._wasPreviouslyReady || Gb._wasPreviouslyUsingInstances !== Lb) return !1;
        const Yb = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || hb._isInIntermediateRendering() || 0 !== hb._beforeRenderingMeshStage.length || 0 !== hb._afterRenderingMeshStage.length || Yb._onBeforeRenderObservable?.hasObservers() || Yb._onBeforeBindObservable?.hasObservers() || Yb._onAfterRenderObservable?.hasObservers()) return !1;
        const Sb = this.occlusionType;
        if (void 0 !== Sb && Sb !== ib.c.OCCLUSION_TYPE_NONE || !Ob._canBindRunFollower(hb, Bb, this, bb, Ub)) return !1;
        const ab = this._internalAbstractMeshDataInfo,
          Hb = ab._isActiveIntermediate;
        Hb ? ab._isActiveIntermediate = !1 : ab._isActive = !1;
        const wb = hb.activeCameras?.length ?? 0;
        (wb > 1 && hb.activeCamera === hb.activeCameras[0] || wb <= 1) && this._checkOcclusionQuery(!1);
        const Zb = this._getInstancesRenderList(bb._id);
        if (Zb.mustReturn) return !0;
        if (!Lb && !Zb.renderSelf[bb._id]) return Hb ? ab._isActiveIntermediate = !0 : ab._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Yb._effectiveMaterial = Ob, ub)
          if (1 === Ob.alphaModes.length) Bb.setAlphaMode(Ob.alphaMode);
          else
            for (let pb = 0; pb < Ob.alphaModes.length; pb++) {
              const bb = Ob.alphaModes[pb];
              Bb.setAlphaMode(void 0 !== bb ? bb : 2, !1, pb)
            }
        if (Ob.backFaceCulling || null !== Ob.sideOrientation || Ob._twoSidedLighting) {
          const bb = this._getWorldMatrixDeterminant();
          let ub = Ob._getEffectiveOrientation(this);
          bb < 0 && (ub = ub === tb.e.ClockWiseSideOrientation ? tb.e.CounterClockWiseSideOrientation : tb.e.ClockWiseSideOrientation), Yb._effectiveSideOrientation = ub
        }
        Ob._preBind(Gb, Yb._effectiveSideOrientation), Ob.forceDepthWrite && Bb.setDepthWrite(!0);
        const Xb = Ob.fillMode;
        return Lb || this._bind(bb, Ub, Xb, !1), Ob._bindRunFollower(this.getWorldMatrix(), this, bb, Ub), this._processRendering(this, bb, Ub, Xb, Zb, Lb, this._onBeforeDraw, Ob), Ob.unbind(), 2 === hb.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(xb.i.MatricesWeightsKind) && (this.isVerticesDataPresent(xb.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const bb = this.getVerticesData(xb.i.MatricesWeightsKind),
          ub = bb.length;
        for (let hb = 0; hb < ub; hb += 4) {
          const ub = bb[hb] + bb[hb + 1] + bb[hb + 2] + bb[hb + 3];
          if (0 === ub) bb[hb] = 1;
          else {
            const Bb = 1 / ub;
            bb[hb] *= Bb, bb[hb + 1] *= Bb, bb[hb + 2] *= Bb, bb[hb + 3] *= Bb
          }
        }
        this.setVerticesData(xb.i.MatricesWeightsKind, bb)
      }
      _normalizeSkinWeightsAndExtra() {
        const bb = this.getVerticesData(xb.i.MatricesWeightsExtraKind),
          ub = this.getVerticesData(xb.i.MatricesWeightsKind),
          hb = ub.length;
        for (let Bb = 0; Bb < hb; Bb += 4) {
          let hb = ub[Bb] + ub[Bb + 1] + ub[Bb + 2] + ub[Bb + 3];
          if (hb += bb[Bb] + bb[Bb + 1] + bb[Bb + 2] + bb[Bb + 3], 0 === hb) ub[Bb] = 1;
          else {
            const Ob = 1 / hb;
            ub[Bb] *= Ob, ub[Bb + 1] *= Ob, ub[Bb + 2] *= Ob, ub[Bb + 3] *= Ob, bb[Bb] *= Ob, bb[Bb + 1] *= Ob, bb[Bb + 2] *= Ob, bb[Bb + 3] *= Ob
          }
        }
        this.setVerticesData(xb.i.MatricesWeightsKind, ub), this.setVerticesData(xb.i.MatricesWeightsKind, bb)
      }
      validateSkinning() {
        const bb = this.getVerticesData(xb.i.MatricesWeightsExtraKind),
          ub = this.getVerticesData(xb.i.MatricesWeightsKind);
        if (null === ub || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          iZ: "not skinned"
        };
        const hb = ub.length;
        let Bb = 0,
          Ob = 0,
          Gb = 0,
          Ub = 0;
        const Lb = null === bb ? 4 : 8,
          Yb = [];
        for (let Zb = 0; Zb <= Lb; Zb++) Yb[Zb] = 0;
        for (let Zb = 0; Zb < hb; Zb += 4) {
          let hb = ub[Zb],
            Sb = hb,
            ab = 0 === Sb ? 0 : 1;
          for (let Ob = 1; Ob < Lb; Ob++) {
            const Gb = Ob < 4 ? ub[Zb + Ob] : bb[Zb + Ob - 4];
            Gb > hb && Bb++, 0 !== Gb && ab++, Sb += Gb, hb = Gb
          }
          if (Yb[ab]++, ab > Gb && (Gb = ab), 0 === Sb) Ob++;
          else {
            const hb = 1 / Sb;
            let Bb = 0;
            for (let Ob = 0; Ob < Lb; Ob++) Bb += Ob < 4 ? Math.abs(ub[Zb + Ob] - ub[Zb + Ob] * hb) : Math.abs(bb[Zb + Ob - 4] - bb[Zb + Ob - 4] * hb);
            Bb > .001 && Ub++
          }
        }
        const Sb = this.skeleton.bones.length,
          ab = this.getVerticesData(xb.i.MatricesIndicesKind),
          Hb = this.getVerticesData(xb.i.MatricesIndicesExtraKind);
        let wb = 0;
        for (let Zb = 0; Zb < hb; Zb += 4)
          for (let bb = 0; bb < Lb; bb++) {
            const ub = bb < 4 ? ab[Zb + bb] : Hb[Zb + bb - 4];
            (ub >= Sb || ub < 0) && wb++
          }
        return {
          skinned: !0,
          valid: 0 === Ob && 0 === Ub && 0 === wb,
          iZ: "Number of Weights = " + hb / 4 + "\nMaximum influences = " + Gb + "\nMissing Weights = " + Ob + "\nNot Sorted = " + Bb + "\nNot Normalized = " + Ub + "\nWeightCounts = [" + Yb + "]\nNumber of bones = " + Sb + "\nBad Bone Indices = " + wb
        }
      }
      _checkDelayState() {
        const bb = this.ZN();
        return this._geometry ? this._geometry.load(bb) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(bb)), this
      }
      _queueLoad(bb) {
        bb.addPendingData(this);
        const ub = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const hb = await bb._loadDelayedFileAsync(this.delayLoadingFile, ub, !0);
            hb instanceof ArrayBuffer ? this._delayLoadingFunction(hb, this) : this._delayLoadingFunction(JSON.parse(hb), this);
            for (const bb of this.instances) bb.refreshBoundingInfo(), bb._syncSubMeshes();
            this.delayLoadState = 1, bb.removePendingData(this)
          } catch (hb) {
            bb.removePendingData(this), bb.tC || Mb.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${hb}`)
          }
        })(), this
      }
      isInFrustum(bb) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(bb) && (this._checkDelayState(), !0))
      }
      setMaterialById(bb) {
        const ub = this.ZN().materials;
        let hb;
        for (hb = ub.length - 1; hb > -1; hb--)
          if (ub[hb].id === bb) return this.material = ub[hb], this;
        const Bb = this.ZN().multiMaterials;
        for (hb = Bb.length - 1; hb > -1; hb--)
          if (Bb[hb].id === bb) return this.material = Bb[hb], this;
        return this
      }
      getAnimatables() {
        const bb = [];
        return this.material && bb.push(this.material), this.skeleton && bb.push(this.skeleton), bb
      }
      bakeTransformIntoVertices(bb) {
        if (!this.isVerticesDataPresent(xb.i.PositionKind)) return this;
        const ub = this.FW.splice(0);
        this._resetPointsArrayCache();
        let hb = this.getVerticesData(xb.i.PositionKind);
        const Bb = jb.q.Zero();
        let Ob;
        for (Ob = 0; Ob < hb.length; Ob += 3) jb.q.TransformCoordinatesFromFloatsToRef(hb[Ob], hb[Ob + 1], hb[Ob + 2], bb, Bb).toArray(hb, Ob);
        if (this.setVerticesData(xb.i.PositionKind, hb, this.getVertexBuffer(xb.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(xb.i.NormalKind)) {
          for (hb = this.getVerticesData(xb.i.NormalKind), Ob = 0; Ob < hb.length; Ob += 3) jb.q.TransformNormalFromFloatsToRef(hb[Ob], hb[Ob + 1], hb[Ob + 2], bb, Bb).normalize().toArray(hb, Ob);
          this.setVerticesData(xb.i.NormalKind, hb, this.getVertexBuffer(xb.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(xb.i.TangentKind)) {
          for (hb = this.getVerticesData(xb.i.TangentKind), Ob = 0; Ob < hb.length; Ob += 4) jb.q.TransformNormalFromFloatsToRef(hb[Ob], hb[Ob + 1], hb[Ob + 2], bb, Bb).normalize().toArray(hb, Ob);
          this.setVerticesData(xb.i.TangentKind, hb, this.getVertexBuffer(xb.i.TangentKind).isUpdatable())
        }
        return bb.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.FW = ub, this
      }
      bakeCurrentTransformIntoVertices() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(bb), this
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (ub && void 0 === ub._addToSceneRootNodes) {
          const hb = ub;
          return Tb.source = this, Tb.doNotCloneChildren = hb.doNotCloneChildren, Tb.clonePhysicsImpostor = hb.clonePhysicsImpostor, Tb.cloneThinInstances = hb.cloneThinInstances, new cb(bb, this.ZN(), Tb)
        }
        return new cb(bb, this.ZN(), ub, this, hb, Bb)
      }
      dispose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const hb = this._internalMeshDataInfo;
        if (hb._onBeforeDrawObservable && hb._onBeforeDrawObservable.clear(), hb._onBeforeBindObservable && hb._onBeforeBindObservable.clear(), hb._onBeforeRenderObservable && hb._onBeforeRenderObservable.clear(), hb._onAfterRenderObservable && hb._onAfterRenderObservable.clear(), hb._onBetweenPassObservable && hb._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (hb.meshMap)
            for (const bb in hb.meshMap) {
              const ub = hb.meshMap[bb];
              ub && (ub._internalMeshDataInfo._source = null, hb.meshMap[bb] = void 0)
            }
          hb._source && hb._source._internalMeshDataInfo.meshMap && (hb._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const bb = this.ZN().meshes;
          for (const ub of bb) {
            const bb = ub;
            bb._internalMeshDataInfo && bb._internalMeshDataInfo._source && bb._internalMeshDataInfo._source === this && (bb._internalMeshDataInfo._source = null)
          }
        }
        hb._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(bb, ub)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Lb = arguments.length > 7 ? arguments[7] : void 0;
        const Yb = this.ZN();
        return (0, Kb.o)(bb, (bb => {
          const Lb = bb.width,
            Yb = bb.height,
            Sb = this.UX().createCanvas(Lb, Yb).getContext("2d");
          Sb.drawImage(bb, 0, 0);
          const ab = Sb.getImageData(0, 0, Lb, Yb).data;
          this.applyDisplacementMapFromBuffer(ab, Lb, Yb, ub, hb, Ob, Gb, Ub), Bb && Bb(this)
        }), Lb || (() => {}), Yb.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(xb.i.PositionKind) || !this.isVerticesDataPresent(xb.i.NormalKind) || !this.isVerticesDataPresent(xb.i.UVKind)) return Mb.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Yb = this.getVerticesData(xb.i.PositionKind, !0, !0),
          Sb = this.getVerticesData(xb.i.NormalKind),
          ab = this.getVerticesData(xb.i.UVKind);
        let Hb = jb.q.Zero();
        const wb = jb.q.Zero(),
          Zb = jb.m.Zero();
        Gb = Gb || jb.m.Zero(), Ub = Ub || new jb.m(1, 1);
        for (let Xb = 0; Xb < Yb.length; Xb += 3) {
          jb.q.FromArrayToRef(Yb, Xb, Hb), jb.q.FromArrayToRef(Sb, Xb, wb), jb.m.FromArrayToRef(ab, Xb / 3 * 2, Zb);
          const Lb = 4 * ((Math.abs(Zb.x * Ub.x + Gb.x % 1) * (ub - 1) % ub | 0) + (Math.abs(Zb.y * Ub.y + Gb.y % 1) * (hb - 1) % hb | 0) * ub),
            pb = .3 * (bb[Lb] / 255) + .59 * (bb[Lb + 1] / 255) + .11 * (bb[Lb + 2] / 255);
          wb.normalize(), wb.scaleInPlace(Bb + (Ob - Bb) * pb), Hb = Hb.add(wb), Hb.toArray(Yb, Xb)
        }
        return zb.c.ComputeNormals(Yb, this.XBb(), Sb), Lb ? (this.setVerticesData(xb.i.PositionKind, Yb), this.setVerticesData(xb.i.NormalKind, Sb), this.setVerticesData(xb.i.UVKind, ab)) : (this.updateVerticesData(xb.i.PositionKind, Yb), this.updateVerticesData(xb.i.NormalKind, Sb)), this
      }
      _getFlattenedNormals(bb, ub) {
        const hb = new Float32Array(3 * bb.length);
        let Bb = 0;
        const Ob = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Gb = 0; Gb < bb.length; Gb += 3) {
          const Ub = jb.q.FromArray(ub, 3 * bb[Gb]),
            Lb = jb.q.FromArray(ub, 3 * bb[Gb + 1]),
            Yb = jb.q.FromArray(ub, 3 * bb[Gb + 2]),
            Sb = Ub.subtract(Lb),
            ab = Yb.subtract(Lb),
            Hb = jb.q.Normalize(jb.q.Cross(Sb, ab));
          Ob && Hb.scaleInPlace(-1);
          for (let bb = 0; bb < 3; bb++) hb[Bb++] = Hb.x, hb[Bb++] = Hb.y, hb[Bb++] = Hb.z
        }
        return hb
      }
      _convertToUnIndexedMesh() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = this.getVerticesDataKinds().filter((bb => !this.getVertexBuffer(bb)?.getIsInstanced())),
          hb = this.XBb(!1, !0),
          Bb = {},
          Ob = (bb, ub) => {
            const Bb = new Float32Array(hb.length * ub);
            let Ob = 0;
            for (let Gb = 0; Gb < hb.length; Gb++)
              for (let Ub = 0; Ub < ub; Ub++) Bb[Ob++] = bb[hb[Gb] * ub + Ub];
            return Bb
          },
          Gb = this.XM(),
          Ub = this.geometry ? this.FW.slice(0) : [];
        for (const Lb of ub) Bb[Lb] = this.getVerticesData(Lb);
        for (const Lb of ub) {
          const ub = this.getVertexBuffer(Lb),
            Gb = ub.getSize();
          if (bb && Lb === xb.i.NormalKind) {
            const bb = this._getFlattenedNormals(hb, Bb[xb.i.PositionKind]);
            this.setVerticesData(xb.i.NormalKind, bb, ub.isUpdatable(), Gb)
          } else this.setVerticesData(Lb, Ob(Bb[Lb], Gb), ub.isUpdatable(), Gb)
        }
        if (this.morphTargetManager) {
          for (let ub = 0; ub < this.morphTargetManager.numTargets; ub++) {
            const Bb = this.morphTargetManager.getTarget(ub),
              Gb = Bb.getPositions();
            Bb.NUb(Ob(Gb, 3));
            const Ub = Bb.getNormals();
            Ub && Bb.setNormals(bb ? this._getFlattenedNormals(hb, Gb) : Ob(Ub, 3));
            const Lb = Bb.getTangents();
            Lb && Bb.setTangents(Ob(Lb, 3));
            const Yb = Bb.getUVs();
            Yb && Bb.setUVs(Ob(Yb, 2));
            const Sb = Bb.getColors();
            Sb && Bb.setColors(Ob(Sb, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Lb = 0; Lb < hb.length; Lb++) hb[Lb] = Lb;
        this.setIndices(hb), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Lb of Ub) {
          const bb = Lb.XM();
          vb.c.AddToMesh(Lb.materialIndex, Lb.indexStart, Lb.indexCount, Lb.indexStart, Lb.indexCount, this).setBoundingInfo(bb)
        }
        return this.setBoundingInfo(Gb), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = zb.c.ExtractFromMesh(this);
        let hb;
        if (bb && this.isVerticesDataPresent(xb.i.NormalKind) && ub.normals) {
          for (hb = 0; hb < ub.normals.length; hb++) ub.normals[hb] *= -1;
          this.setVerticesData(xb.i.NormalKind, ub.normals, this.isVertexBufferUpdatable(xb.i.NormalKind))
        }
        if (ub.indices) {
          let bb;
          for (hb = 0; hb < ub.indices.length; hb += 3) bb = ub.indices[hb + 1], ub.indices[hb + 1] = ub.indices[hb + 2], ub.indices[hb + 2] = bb;
          this.setIndices(ub.indices, null, this.isVertexBufferUpdatable(xb.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const ub = zb.c.ExtractFromMesh(this),
          hb = ub.indices && !Array.isArray(ub.indices) && Array.from ? Array.from(ub.indices) : ub.indices,
          Bb = ub.positions && !Array.isArray(ub.positions) && Array.from ? Array.from(ub.positions) : ub.positions,
          Ob = ub.uvs && !Array.isArray(ub.uvs) && Array.from ? Array.from(ub.uvs) : ub.uvs,
          Gb = ub.normals && !Array.isArray(ub.normals) && Array.from ? Array.from(ub.normals) : ub.normals;
        if (hb && Bb) {
          ub.indices = hb, ub.positions = Bb, Ob && (ub.uvs = Ob), Gb && (ub.normals = Gb);
          const Ub = bb + 1,
            Lb = [];
          for (let bb = 0; bb < Ub + 1; bb++) Lb[bb] = [];
          let Yb, Sb;
          const ab = new jb.q(0, 0, 0),
            Hb = new jb.q(0, 0, 0),
            wb = new jb.m(0, 0),
            Zb = [],
            Xb = [],
            pb = [];
          let ob, Ab, lb, Kb = Bb.length;
          Ob && (Ab = Ob.length), Gb && (lb = Gb.length);
          for (let bb = 0; bb < hb.length; bb += 3) {
            Xb[0] = hb[bb], Xb[1] = hb[bb + 1], Xb[2] = hb[bb + 2];
            for (let bb = 0; bb < 3; bb++)
              if (Yb = Xb[bb], Sb = Xb[(bb + 1) % 3], void 0 === pb[Yb] && void 0 === pb[Sb] ? (pb[Yb] = [], pb[Sb] = []) : (void 0 === pb[Yb] && (pb[Yb] = []), void 0 === pb[Sb] && (pb[Sb] = [])), void 0 === pb[Yb][Sb] && void 0 === pb[Sb][Yb]) {
                pb[Yb][Sb] = [], ab.x = (Bb[3 * Sb] - Bb[3 * Yb]) / Ub, ab.y = (Bb[3 * Sb + 1] - Bb[3 * Yb + 1]) / Ub, ab.z = (Bb[3 * Sb + 2] - Bb[3 * Yb + 2]) / Ub, Gb && (Hb.x = (Gb[3 * Sb] - Gb[3 * Yb]) / Ub, Hb.y = (Gb[3 * Sb + 1] - Gb[3 * Yb + 1]) / Ub, Hb.z = (Gb[3 * Sb + 2] - Gb[3 * Yb + 2]) / Ub), Ob && (wb.x = (Ob[2 * Sb] - Ob[2 * Yb]) / Ub, wb.y = (Ob[2 * Sb + 1] - Ob[2 * Yb + 1]) / Ub), pb[Yb][Sb].push(Yb);
                for (let bb = 1; bb < Ub; bb++) pb[Yb][Sb].push(Bb.length / 3), Bb[Kb++] = Bb[3 * Yb] + bb * ab.x, Bb[Kb++] = Bb[3 * Yb + 1] + bb * ab.y, Bb[Kb++] = Bb[3 * Yb + 2] + bb * ab.z, Gb && (Gb[lb++] = Gb[3 * Yb] + bb * Hb.x, Gb[lb++] = Gb[3 * Yb + 1] + bb * Hb.y, Gb[lb++] = Gb[3 * Yb + 2] + bb * Hb.z), Ob && (Ob[Ab++] = Ob[2 * Yb] + bb * wb.x, Ob[Ab++] = Ob[2 * Yb + 1] + bb * wb.y);
                pb[Yb][Sb].push(Sb), pb[Sb][Yb] = [], ob = pb[Yb][Sb].length;
                for (let bb = 0; bb < ob; bb++) pb[Sb][Yb][bb] = pb[Yb][Sb][ob - 1 - bb]
              } Lb[0][0] = hb[bb], Lb[1][0] = pb[hb[bb]][hb[bb + 1]][1], Lb[1][1] = pb[hb[bb]][hb[bb + 2]][1];
            for (let ub = 2; ub < Ub; ub++) {
              Lb[ub][0] = pb[hb[bb]][hb[bb + 1]][ub], Lb[ub][ub] = pb[hb[bb]][hb[bb + 2]][ub], ab.x = (Bb[3 * Lb[ub][ub]] - Bb[3 * Lb[ub][0]]) / ub, ab.y = (Bb[3 * Lb[ub][ub] + 1] - Bb[3 * Lb[ub][0] + 1]) / ub, ab.z = (Bb[3 * Lb[ub][ub] + 2] - Bb[3 * Lb[ub][0] + 2]) / ub, Gb && (Hb.x = (Gb[3 * Lb[ub][ub]] - Gb[3 * Lb[ub][0]]) / ub, Hb.y = (Gb[3 * Lb[ub][ub] + 1] - Gb[3 * Lb[ub][0] + 1]) / ub, Hb.z = (Gb[3 * Lb[ub][ub] + 2] - Gb[3 * Lb[ub][0] + 2]) / ub), Ob && (wb.x = (Ob[2 * Lb[ub][ub]] - Ob[2 * Lb[ub][0]]) / ub, wb.y = (Ob[2 * Lb[ub][ub] + 1] - Ob[2 * Lb[ub][0] + 1]) / ub);
              for (let bb = 1; bb < ub; bb++) Lb[ub][bb] = Bb.length / 3, Bb[Kb++] = Bb[3 * Lb[ub][0]] + bb * ab.x, Bb[Kb++] = Bb[3 * Lb[ub][0] + 1] + bb * ab.y, Bb[Kb++] = Bb[3 * Lb[ub][0] + 2] + bb * ab.z, Gb && (Gb[lb++] = Gb[3 * Lb[ub][0]] + bb * Hb.x, Gb[lb++] = Gb[3 * Lb[ub][0] + 1] + bb * Hb.y, Gb[lb++] = Gb[3 * Lb[ub][0] + 2] + bb * Hb.z), Ob && (Ob[Ab++] = Ob[2 * Lb[ub][0]] + bb * wb.x, Ob[Ab++] = Ob[2 * Lb[ub][0] + 1] + bb * wb.y)
            }
            Lb[Ub] = pb[hb[bb + 1]][hb[bb + 2]], Zb.push(Lb[0][0], Lb[1][0], Lb[1][1]);
            for (let bb = 1; bb < Ub; bb++) {
              let ub;
              for (ub = 0; ub < bb; ub++) Zb.push(Lb[bb][ub], Lb[bb + 1][ub], Lb[bb + 1][ub + 1]), Zb.push(Lb[bb][ub], Lb[bb + 1][ub + 1], Lb[bb][ub + 1]);
              Zb.push(Lb[bb][ub], Lb[bb + 1][ub], Lb[bb + 1][ub + 1])
            }
          }
          ub.indices = Zb, ub.applyToMesh(this, this.isVertexBufferUpdatable(xb.i.PositionKind))
        } else Mb.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const bb = zb.c.ExtractFromMesh(this),
          ub = bb.uvs,
          hb = bb.indices,
          Bb = bb.positions,
          Ob = bb.colors,
          Gb = bb.matricesIndices,
          Ub = bb.matricesWeights,
          Lb = bb.matricesIndicesExtra,
          Yb = bb.matricesWeightsExtra;
        if (void 0 === hb || void 0 === Bb || null === hb || null === Bb) Mb.b.Warn("VertexData contains empty entries");
        else {
          const Sb = [],
            ab = [],
            Hb = [],
            wb = [],
            Zb = [],
            Xb = [],
            pb = [],
            ob = [];
          let Ab, lb = 0;
          const Kb = {};
          let Wb, Cb;
          for (let bb = 0; bb < hb.length; bb += 3) {
            Cb = [hb[bb], hb[bb + 1], hb[bb + 2]], Ab = [];
            for (let bb = 0; bb < 3; bb++) {
              Ab[bb] = "";
              for (let ub = 0; ub < 3; ub++) Math.abs(Bb[3 * Cb[bb] + ub]) < 1e-8 && (Bb[3 * Cb[bb] + ub] = 0), Ab[bb] += Bb[3 * Cb[bb] + ub] + "|"
            }
            if (Ab[0] != Ab[1] && Ab[0] != Ab[2] && Ab[1] != Ab[2])
              for (let bb = 0; bb < 3; bb++) {
                if (Wb = Kb[Ab[bb]], void 0 === Wb) {
                  Kb[Ab[bb]] = lb, Wb = lb++;
                  for (let ub = 0; ub < 3; ub++) Sb.push(Bb[3 * Cb[bb] + ub]);
                  if (null !== Ob && void 0 !== Ob)
                    for (let ub = 0; ub < 4; ub++) wb.push(Ob[4 * Cb[bb] + ub]);
                  if (null !== ub && void 0 !== ub)
                    for (let hb = 0; hb < 2; hb++) Hb.push(ub[2 * Cb[bb] + hb]);
                  if (null !== Gb && void 0 !== Gb)
                    for (let ub = 0; ub < 4; ub++) Zb.push(Gb[4 * Cb[bb] + ub]);
                  if (null !== Ub && void 0 !== Ub)
                    for (let ub = 0; ub < 4; ub++) Xb.push(Ub[4 * Cb[bb] + ub]);
                  if (null !== Lb && void 0 !== Lb)
                    for (let ub = 0; ub < 4; ub++) pb.push(Lb[4 * Cb[bb] + ub]);
                  if (null !== Yb && void 0 !== Yb)
                    for (let ub = 0; ub < 4; ub++) ob.push(Yb[4 * Cb[bb] + ub])
                }
                ab.push(Wb)
              }
          }
          const db = [];
          zb.c.ComputeNormals(Sb, ab, db), bb.positions = Sb, bb.indices = ab, bb.normals = db, null !== ub && void 0 !== ub && (bb.uvs = Hb), null !== Ob && void 0 !== Ob && (bb.colors = wb), null !== Gb && void 0 !== Gb && (bb.matricesIndices = Zb), null !== Ub && void 0 !== Ub && (bb.matricesWeights = Xb), null !== Lb && void 0 !== Lb && (bb.matricesIndicesExtra = pb), null !== Ub && void 0 !== Ub && (bb.matricesWeightsExtra = ob), bb.applyToMesh(this, this.isVertexBufferUpdatable(xb.i.PositionKind))
        }
      }
      static _instancedMeshFactory(bb, ub) {
        throw (0, Ib.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(bb, ub, hb) {
        throw (0, Ib.m)("PhysicsImpostor")
      }
      createInstance(bb) {
        const ub = cb._instancedMeshFactory(bb, this);
        return ub.parent = this.parent, ub
      }
      synchronizeInstances() {
        for (let bb = 0; bb < this.instances.length; bb++) {
          this.instances[bb]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(bb) {
        const ub = this.XBb(),
          hb = this.getVerticesData(xb.i.PositionKind);
        if (!hb || !ub) return this;
        const Bb = [];
        for (let Gb = 0; Gb < hb.length; Gb += 3) Bb.push(jb.q.FromArray(hb, Gb));
        const Ob = [];
        return lb.d.SyncAsyncForLoop(Bb.length, 40, (bb => {
          const ub = Bb.length - 1 - bb,
            hb = Bb[ub];
          for (let Gb = 0; Gb < ub; ++Gb) {
            const bb = Bb[Gb];
            if (hb.equals(bb)) {
              Ob[ub] = Gb;
              break
            }
          }
        }), (() => {
          for (let bb = 0; bb < ub.length; ++bb) ub[bb] = Ob[ub[bb]] || ub[bb];
          const hb = this.FW.slice(0);
          this.setIndices(ub), this.FW = hb, bb && bb(this)
        })), this
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), Cb.c && Cb.c.HasTags(this) && (bb.tags = Cb.c.GetTags(this)), bb.position = this.position.ZBb(), this.rotationQuaternion ? bb.rotationQuaternion = this.rotationQuaternion.ZBb() : this.rotation && (bb.rotation = this.rotation.ZBb()), bb.pa = this.pa.ZBb(), this._postMultiplyPivotMatrix ? bb.pivotMatrix = this.getPivotMatrix().ZBb() : bb.localMatrix = this.getPivotMatrix().ZBb(), bb.isEnabled = this.isEnabled(!1), bb.isVisible = this.isVisible, bb.infiniteDistance = this.infiniteDistance, bb.pickable = this.lp, bb.receiveShadows = this.receiveShadows, bb.billboardMode = this.billboardMode, bb.visibility = this.visibility, bb.LX = this.LX, bb.checkCollisions = this.checkCollisions, bb.ellipsoid = this.ellipsoid.ZBb(), bb.ellipsoidOffset = this.ellipsoidOffset.ZBb(), bb.aX = this.aX, bb.isBlocker = this.isBlocker, bb.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (bb.zN = !0), this.parent && this.parent._serializeAsParent(bb), bb.isUnIndexed = this.isUnIndexed;
        const ub = this._geometry;
        if (ub && this.FW) {
          bb.geometryUniqueId = ub.uniqueId, bb.geometryId = ub.id, bb.FW = [];
          for (let ub = 0; ub < this.FW.length; ub++) {
            const hb = this.FW[ub];
            bb.FW.push({
              materialIndex: hb.materialIndex,
              verticesStart: hb.verticesStart,
              verticesCount: hb.verticesCount,
              indexStart: hb.indexStart,
              indexCount: hb.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (bb.materialUniqueId = this.material.uniqueId, bb.materialId = this.material.id) : (this.material = null, bb.materialUniqueId = this._scene.defaultMaterial.uniqueId, bb.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (bb.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (bb.skeletonId = this.skeleton.id, bb.skeletonUniqueId = this.skeleton.uniqueId, bb.numBoneInfluencers = this.numBoneInfluencers), this.ZN()._getComponent(Pb.d.NAME_PHYSICSENGINE)) {
          const ub = this.getPhysicsImpostor?.();
          ub && (bb.physicsMass = ub.getParam("AU"), bb.physicsFriction = ub.getParam("friction"), bb.physicsRestitution = ub.getParam("AU"), bb.physicsImpostor = ub.type)
        }
        this.metadata && (bb.metadata = this.metadata), 0 !== this.meshBlendingTag && (bb.meshBlendingTag = this.meshBlendingTag), bb.instances = [];
        for (let hb = 0; hb < this.instances.length; hb++) {
          const ub = this.instances[hb];
          if (ub.doNotSerialize) continue;
          const Bb = {
            name: ub.name,
            id: ub.id,
            isEnabled: ub.isEnabled(!1),
            isVisible: ub.isVisible,
            lp: ub.lp,
            checkCollisions: ub.checkCollisions,
            position: ub.position.ZBb(),
            pa: ub.pa.ZBb()
          };
          if (ub.parent && ub.parent._serializeAsParent(Bb), ub.rotationQuaternion ? Bb.rotationQuaternion = ub.rotationQuaternion.ZBb() : ub.rotation && (Bb.rotation = ub.rotation.ZBb()), this.ZN()._getComponent(Pb.d.NAME_PHYSICSENGINE)) {
            const bb = ub.getPhysicsImpostor?.();
            bb && (Bb.physicsMass = bb.getParam("AU"), Bb.physicsFriction = bb.getParam("friction"), Bb.physicsRestitution = bb.getParam("AU"), Bb.physicsImpostor = bb.type)
          }
          ub.metadata && (Bb.metadata = ub.metadata), ub.actionManager && (Bb.actions = ub.actionManager.serialize(ub.name)), bb.instances.push(Bb), sb.c.AppendSerializedAnimations(ub, Bb), Bb.tp = ub.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (bb.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Jub
          }, this._userThinInstanceBuffersStorage)) {
          const ub = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const bb in this._userThinInstanceBuffersStorage.data) ub.data[bb] = Array.from(this._userThinInstanceBuffersStorage.data[bb]), ub.sizes[bb] = this._userThinInstanceBuffersStorage.sizes[bb], ub.strides[bb] = this._userThinInstanceBuffersStorage.strides[bb];
          bb.thinInstances.userThinInstance = ub
        }
        return sb.c.AppendSerializedAnimations(this, bb), bb.tp = this.serializeAnimationRanges(), bb.layerMask = this.layerMask, bb.alphaIndex = this.alphaIndex, bb.hasVertexAlpha = this.hasVertexAlpha, bb.overlayAlpha = this.overlayAlpha, bb.overlayColor = this.overlayColor.ZBb(), bb.renderOverlay = this.renderOverlay, bb.applyFog = this.applyFog, this.actionManager && (bb.actions = this.actionManager.serialize(this.name)), bb
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const bb = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (bb && bb.vertexCount) {
          if (bb.vertexCount !== this.getTotalVertices()) return Mb.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (bb.isUsingTextureForTargets) return;
          for (let ub = 0; ub < bb.numInfluencers; ub++) {
            const hb = bb.getActiveTarget(ub),
              Bb = hb.getPositions();
            if (!Bb) return void Mb.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(xb.i.PositionKind + ub, Bb, !1, 3);
            const Ob = hb.getNormals();
            Ob && this.geometry.setVerticesData(xb.i.NormalKind + ub, Ob, !1, 3);
            const Gb = hb.getTangents();
            Gb && this.geometry.setVerticesData(xb.i.TangentKind + ub, Gb, !1, 3);
            const Ub = hb.getUVs();
            Ub && this.geometry.setVerticesData(xb.i.UVKind + "_" + ub, Ub, !1, 2);
            const Lb = hb.getUV2s();
            Lb && this.geometry.setVerticesData(xb.i.UV2Kind + "_" + ub, Lb, !1, 2);
            const Yb = hb.getColors();
            Yb && this.geometry.setVerticesData(xb.i.ColorKind + ub, Yb, !1, 4)
          }
        } else {
          let bb = 0;
          for (; this.geometry.isVerticesDataPresent(xb.i.PositionKind + bb);) this.geometry.removeVerticesData(xb.i.PositionKind + bb), this.geometry.isVerticesDataPresent(xb.i.NormalKind + bb) && this.geometry.removeVerticesData(xb.i.NormalKind + bb), this.geometry.isVerticesDataPresent(xb.i.TangentKind + bb) && this.geometry.removeVerticesData(xb.i.TangentKind + bb), this.geometry.isVerticesDataPresent(xb.i.UVKind + "_" + bb) && this.geometry.removeVerticesData(xb.i.UVKind + "_" + bb), this.geometry.isVerticesDataPresent(xb.i.UV2Kind + "_" + bb) && this.geometry.removeVerticesData(xb.i.UV2Kind + "_" + bb), this.geometry.isVerticesDataPresent(xb.i.ColorKind + bb) && this.geometry.removeVerticesData(xb.i.ColorKind + bb), bb++
        }
      }
      static Parse(bb, ub, hb) {
        let Bb, Ob = !1;
        if (bb.type && "LinesMesh" === bb.type ? Bb = cb._LinesMeshParser(bb, ub) : bb.type && "GroundMesh" === bb.type ? Bb = cb._GroundMeshParser(bb, ub) : bb.type && "GoldbergMesh" === bb.type ? Bb = cb._GoldbergMeshParser(bb, ub) : bb.type && "GreasedLineMesh" === bb.type ? Bb = cb._GreasedLineMeshParser(bb, ub) : bb.type && "TrailMesh" === bb.type ? Bb = cb._TrailMeshParser(bb, ub) : bb.type && "GaussianSplattingMesh" === bb.type ? (Bb = bb._isCompound ? cb._GaussianSplattingCompoundMeshParser(bb, ub) : cb._GaussianSplattingMeshParser(bb, ub), Ob = !0) : bb.type && "GaussianSplattingPartProxyMesh" === bb.type ? (Bb = cb._GaussianSplattingPartProxyMeshParser(bb, ub), Ob = !0) : Bb = new cb(bb.name, ub), Bb.id = bb.id, Bb._waitingParsedUniqueId = bb.uniqueId, Cb.c && Cb.c.AddTagsTo(Bb, bb.tags), Bb.position = jb.q.FromArray(bb.position), void 0 !== bb.metadata && (Bb.metadata = bb.metadata), void 0 !== bb.meshBlendingTag && (Bb.meshBlendingTag = bb.meshBlendingTag), bb.rotationQuaternion ? Bb.rotationQuaternion = jb.f.FromArray(bb.rotationQuaternion) : bb.rotation && (Bb.rotation = jb.q.FromArray(bb.rotation)), Bb.pa = jb.q.FromArray(bb.pa), bb.localMatrix ? Bb.setPreTransformMatrix(jb.d.FromArray(bb.localMatrix)) : bb.pivotMatrix && Bb.setPivotMatrix(jb.d.FromArray(bb.pivotMatrix)), Bb.Zx(bb.isEnabled), Bb.isVisible = bb.isVisible, Bb.infiniteDistance = bb.infiniteDistance, Bb.LX = !!bb.LX, Bb.showBoundingBox = bb.showBoundingBox, Bb.showSubMeshesBoundingBox = bb.showSubMeshesBoundingBox, void 0 !== bb.applyFog && (Bb.applyFog = bb.applyFog), void 0 !== bb.pickable && (Bb.lp = bb.pickable), void 0 !== bb.alphaIndex && (Bb.alphaIndex = bb.alphaIndex), Bb.receiveShadows = bb.receiveShadows, void 0 !== bb.billboardMode && (Bb.billboardMode = bb.billboardMode), void 0 !== bb.visibility && (Bb.visibility = bb.visibility), Bb.checkCollisions = bb.checkCollisions, Bb.aX = !!bb.aX, bb.ellipsoid && (Bb.ellipsoid = jb.q.FromArray(bb.ellipsoid)), bb.ellipsoidOffset && (Bb.ellipsoidOffset = jb.q.FromArray(bb.ellipsoidOffset)), null != bb.overrideMaterialSideOrientation && (Bb.sideOrientation = bb.overrideMaterialSideOrientation), void 0 !== bb.sideOrientation && (Bb.sideOrientation = bb.sideOrientation), void 0 !== bb.isBlocker && (Bb.isBlocker = bb.isBlocker), Bb._shouldGenerateFlatShading = bb.useFlatShading, bb.zN && (Bb._waitingData.zN = bb.zN), void 0 !== bb.parentId && (Bb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Bb._waitingParentInstanceIndex = bb.parentInstanceIndex), void 0 !== bb.actions && (Bb._waitingData.actions = bb.actions), void 0 !== bb.overlayAlpha && (Bb.overlayAlpha = bb.overlayAlpha), void 0 !== bb.overlayColor && (Bb.overlayColor = nb.b.FromArray(bb.overlayColor)), void 0 !== bb.renderOverlay && (Bb.renderOverlay = bb.renderOverlay), Bb.isUnIndexed = !!bb.isUnIndexed, Bb.hasVertexAlpha = bb.hasVertexAlpha, bb.delayLoadingFile ? (Bb.delayLoadState = 4, Bb.delayLoadingFile = hb + bb.delayLoadingFile, Bb.buildBoundingInfo(jb.q.FromArray(bb.boundingBoxMinimum), jb.q.FromArray(bb.boundingBoxMaximum)), bb._binaryInfo && (Bb._binaryInfo = bb._binaryInfo), Bb._delayInfo = [], bb.hasUVs && Bb._delayInfo.push(xb.i.UVKind), bb.hasUVs2 && Bb._delayInfo.push(xb.i.UV2Kind), bb.hasUVs3 && Bb._delayInfo.push(xb.i.UV3Kind), bb.hasUVs4 && Bb._delayInfo.push(xb.i.UV4Kind), bb.hasUVs5 && Bb._delayInfo.push(xb.i.UV5Kind), bb.hasUVs6 && Bb._delayInfo.push(xb.i.UV6Kind), bb.hasColors && Bb._delayInfo.push(xb.i.ColorKind), bb.hasMatricesIndices && Bb._delayInfo.push(xb.i.MatricesIndicesKind), bb.hasMatricesWeights && Bb._delayInfo.push(xb.i.MatricesWeightsKind), Bb._delayLoadingFunction = gb.b._ImportGeometry, Nb.c.ForceFullSceneLoadingForIncremental && Bb._checkDelayState()) : Ob || gb.b._ImportGeometry(bb, Bb), bb.materialUniqueId ? Bb._waitingMaterialId = bb.materialUniqueId : bb.materialId && (Bb._waitingMaterialId = bb.materialId), bb.morphTargetManagerId > -1 && (Bb._waitingMorphTargetManagerId = bb.morphTargetManagerId), void 0 !== bb.skeletonId && null !== bb.skeletonId && (Bb.skeleton = ub.getLastSkeletonById(bb.skeletonId), Bb._waitingSkeletonId = bb.skeletonId, bb.numBoneInfluencers && (Bb.numBoneInfluencers = bb.numBoneInfluencers)), void 0 !== bb.skeletonUniqueId && null !== bb.skeletonUniqueId && (Bb._waitingSkeletonUniqueId = bb.skeletonUniqueId), bb.animations) {
          for (let ub = 0; ub < bb.animations.length; ub++) {
            const hb = bb.animations[ub],
              Ob = (0, mb.d)("BABYLON.Animation");
            Ob && Bb.animations.push(Ob.Parse(hb))
          }
          Db.b.ParseAnimationRanges(Bb, bb, ub)
        }
        if (bb.autoAnimate && ub.beginAnimation(Bb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), bb.layerMask && !isNaN(bb.layerMask) ? Bb.layerMask = Math.abs(parseInt(bb.layerMask)) : Bb.layerMask = 268435455, bb.physicsImpostor && (Bb.physicsImpostor = cb._PhysicsImpostorParser(ub, Bb, bb)), bb.lodMeshIds && (Bb._waitingData.lods = {
            ids: bb.lodMeshIds,
            distances: bb.lodDistances ? bb.lodDistances : null,
            coverages: bb.lodCoverages ? bb.lodCoverages : null
          }), bb.instances)
          for (let Gb = 0; Gb < bb.instances.length; Gb++) {
            const hb = bb.instances[Gb],
              Ob = Bb.createInstance(hb.name);
            if (hb.id && (Ob.id = hb.id), Cb.c && (hb.tags ? Cb.c.AddTagsTo(Ob, hb.tags) : Cb.c.AddTagsTo(Ob, bb.tags)), Ob.position = jb.q.FromArray(hb.position), void 0 !== hb.metadata && (Ob.metadata = hb.metadata), void 0 !== hb.parentId && (Ob._waitingParentId = hb.parentId), void 0 !== hb.parentInstanceIndex && (Ob._waitingParentInstanceIndex = hb.parentInstanceIndex), void 0 !== hb.isEnabled && null !== hb.isEnabled && Ob.Zx(hb.isEnabled), void 0 !== hb.isVisible && null !== hb.isVisible && (Ob.isVisible = hb.isVisible), void 0 !== hb.lp && null !== hb.lp && (Ob.lp = hb.lp), hb.rotationQuaternion ? Ob.rotationQuaternion = jb.f.FromArray(hb.rotationQuaternion) : hb.rotation && (Ob.rotation = jb.q.FromArray(hb.rotation)), Ob.pa = jb.q.FromArray(hb.pa), void 0 != hb.checkCollisions && null != hb.checkCollisions && (Ob.checkCollisions = hb.checkCollisions), void 0 != hb.pickable && null != hb.pickable && (Ob.lp = hb.pickable), void 0 != hb.showBoundingBox && null != hb.showBoundingBox && (Ob.showBoundingBox = hb.showBoundingBox), void 0 != hb.showSubMeshesBoundingBox && null != hb.showSubMeshesBoundingBox && (Ob.showSubMeshesBoundingBox = hb.showSubMeshesBoundingBox), void 0 != hb.alphaIndex && null != hb.showSubMeshesBoundingBox && (Ob.alphaIndex = hb.alphaIndex), hb.physicsImpostor && (Ob.physicsImpostor = cb._PhysicsImpostorParser(ub, Ob, hb)), void 0 !== hb.actions && (Ob._waitingData.actions = hb.actions), hb.animations) {
              for (let bb = 0; bb < hb.animations.length; bb++) {
                const ub = hb.animations[bb],
                  Bb = (0, mb.d)("BABYLON.Animation");
                Bb && Ob.animations.push(Bb.Parse(ub))
              }
              Db.b.ParseAnimationRanges(Ob, hb, ub), hb.autoAnimate && ub.beginAnimation(Ob, hb.autoAnimateFrom, hb.autoAnimateTo, hb.autoAnimateLoop, hb.autoAnimateSpeed || 1)
            }
          }
        if (bb.thinInstances) {
          const ub = bb.thinInstances;
          if (Bb.Jub = !!ub.enablePicking, ub.matrixData ? (Bb.x_("matrix", new Float32Array(ub.matrixData), 16, !1), Bb._thinInstanceDataStorage.matrixBufferSize = ub.matrixBufferSize, Bb._thinInstanceDataStorage.instancesCount = ub.instancesCount) : Bb._thinInstanceDataStorage.matrixBufferSize = ub.matrixBufferSize, bb.thinInstances.userThinInstance) {
            const ub = bb.thinInstances.userThinInstance;
            for (const bb in ub.data) Bb.x_(bb, new Float32Array(ub.data[bb]), ub.strides[bb], !1), Bb._userThinInstanceBuffersStorage.sizes[bb] = ub.sizes[bb]
          }
        }
        return Bb
      }
      setPositionsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourcePositions) {
          const ub = this.getVerticesData(xb.i.PositionKind);
          if (!ub) return bb._sourcePositions;
          bb._sourcePositions = new Float32Array(ub), this.isVertexBufferUpdatable(xb.i.PositionKind) || this.setVerticesData(xb.i.PositionKind, ub, !0)
        }
        return bb._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourceNormals) {
          const ub = this.getVerticesData(xb.i.NormalKind);
          if (!ub) return bb._sourceNormals;
          bb._sourceNormals = new Float32Array(ub), this.isVertexBufferUpdatable(xb.i.NormalKind) || this.setVerticesData(xb.i.NormalKind, ub, !0)
        }
        return bb._sourceNormals
      }
      applySkeleton(bb) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.ZN().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.ZN().getFrameId(), !this.isVerticesDataPresent(xb.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(xb.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(xb.i.MatricesWeightsKind)) return this;
        const ub = this.isVerticesDataPresent(xb.i.NormalKind),
          hb = this._internalMeshDataInfo;
        if (!hb._sourcePositions) {
          const bb = this.FW.slice();
          this.setPositionsForCPUSkinning(), this.FW = bb
        }
        ub && !hb._sourceNormals && this.setNormalsForCPUSkinning();
        let Bb = this.getVerticesData(xb.i.PositionKind);
        if (!Bb) return this;
        Bb instanceof Float32Array || (Bb = new Float32Array(Bb));
        let Ob = this.getVerticesData(xb.i.NormalKind);
        if (ub) {
          if (!Ob) return this;
          Ob instanceof Float32Array || (Ob = new Float32Array(Ob))
        }
        const Gb = this.getVerticesData(xb.i.MatricesIndicesKind),
          Ub = this.getVerticesData(xb.i.MatricesWeightsKind);
        if (!Ub || !Gb) return this;
        const Lb = this.numBoneInfluencers > 4,
          Yb = Lb ? this.getVerticesData(xb.i.MatricesIndicesExtraKind) : null,
          Sb = Lb ? this.getVerticesData(xb.i.MatricesWeightsExtraKind) : null,
          ab = bb.getTransformMatrices(this),
          Hb = jb.q.Zero(),
          wb = new jb.d,
          Zb = new jb.d;
        let Xb, pb = 0;
        for (let ob = 0; ob < Bb.length; ob += 3, pb += 4) {
          let bb;
          for (Xb = 0; Xb < 4; Xb++) bb = Ub[pb + Xb], bb > 0 && (jb.d.FromFloat32ArrayToRefScaled(ab, Math.floor(16 * Gb[pb + Xb]), bb, Zb), wb.addToSelf(Zb));
          if (Lb)
            for (Xb = 0; Xb < 4; Xb++) bb = Sb[pb + Xb], bb > 0 && (jb.d.FromFloat32ArrayToRefScaled(ab, Math.floor(16 * Yb[pb + Xb]), bb, Zb), wb.addToSelf(Zb));
          jb.q.TransformCoordinatesFromFloatsToRef(hb._sourcePositions[ob], hb._sourcePositions[ob + 1], hb._sourcePositions[ob + 2], wb, Hb), Hb.toArray(Bb, ob), ub && (jb.q.TransformNormalFromFloatsToRef(hb._sourceNormals[ob], hb._sourceNormals[ob + 1], hb._sourceNormals[ob + 2], wb, Hb), Hb.toArray(Ob, ob)), wb.reset()
        }
        return this.updateVerticesData(xb.i.PositionKind, Bb), ub && this.updateVerticesData(xb.i.NormalKind, Ob), this
      }
      static MinMax(bb) {
        let ub = null,
          hb = null;
        for (const Bb of bb) {
          const bb = Bb.XM().boundingBox;
          ub && hb ? (ub.minimizeInPlace(bb.minimumWorld), hb.maximizeInPlace(bb.maximumWorld)) : (ub = bb.minimumWorld.clone(), hb = bb.maximumWorld.clone())
        }
        return ub && hb ? {
          min: ub,
          max: hb
        } : {
          min: jb.q.Zero(),
          max: jb.q.Zero()
        }
      }
      static Center(bb) {
        const ub = bb instanceof Array ? cb.MinMax(bb) : bb;
        return jb.q.Center(ub.min, ub.max)
      }
      static MergeMeshes(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        return (0, db.k)(cb._MergeMeshesCoroutine(bb, ub, hb, Bb, Ob, Gb, !1))
      }
      static async MergeMeshesAsync(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, db.j)(cb._MergeMeshesCoroutine(bb, ub, hb, Bb, Ob, Gb, !0), (0, db.e)())
      }
      static * _MergeMeshesCoroutine(bb) {
        let ub, hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bb = arguments.length > 2 ? arguments[2] : void 0,
          Ob = arguments.length > 3 ? arguments[3] : void 0,
          Gb = arguments.length > 4 ? arguments[4] : void 0,
          Ub = arguments.length > 5 ? arguments[5] : void 0,
          Lb = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (bb = bb.filter(Boolean)).length) return null;
        if (!Bb) {
          let hb = 0;
          for (ub = 0; ub < bb.length; ub++)
            if (hb += bb[ub].getTotalVertices(), hb >= 65536) return Mb.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Yb = bb[0];
        Ub && (Gb = !1, bb.sort(((bb, ub) => (bb.material?.uniqueId ?? -1) - (ub.material?.uniqueId ?? -1))));
        const Sb = new Array,
          ab = new Array,
          Hb = new Array,
          wb = bb[0].sideOrientation;
        for (ub = 0; ub < bb.length; ub++) {
          const hb = bb[ub];
          if (hb.pN) return Mb.b.Warn("Cannot merge instance meshes."), null;
          if (wb !== hb.sideOrientation) return Mb.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Gb || Ub) {
            const bb = Hb.reduce(((bb, ub) => Math.max(bb, ub.start + ub.count)), 0);
            if (Ub)
              if (hb.material) {
                const ub = hb.material;
                if (ub instanceof eb.c) {
                  for (let bb = 0; bb < ub.v_.length; bb++) Sb.indexOf(ub.v_[bb]) < 0 && Sb.push(ub.v_[bb]);
                  for (let Bb = 0; Bb < hb.FW.length; Bb++) ab.push(Sb.indexOf(ub.v_[hb.FW[Bb].materialIndex])), Hb.push({
                    start: bb + hb.FW[Bb].indexStart,
                    count: hb.FW[Bb].indexCount
                  })
                } else {
                  Sb.indexOf(ub) < 0 && Sb.push(ub);
                  for (let Bb = 0; Bb < hb.FW.length; Bb++) ab.push(Sb.indexOf(ub)), Hb.push({
                    start: bb + hb.FW[Bb].indexStart,
                    count: hb.FW[Bb].indexCount
                  })
                }
              } else
                for (let ub = 0; ub < hb.FW.length; ub++) ab.push(0), Hb.push({
                  start: bb + hb.FW[ub].indexStart,
                  count: hb.FW[ub].indexCount
                });
            else Hb.push({
              start: bb,
              count: hb.getTotalIndices()
            })
          }
        }
        if (Ub && Hb.length > 1) {
          let bb = 0;
          for (let ub = 1; ub < Hb.length; ub++) {
            const hb = Hb[bb],
              Bb = Hb[ub];
            ab[ub] === ab[bb] && hb.start + hb.count === Bb.start ? hb.count += Bb.count : (bb++, Hb[bb] = Bb, ab[bb] = ab[ub])
          }
          Hb.length = bb + 1, ab.length = bb + 1
        }
        const Zb = bb => {
            const ub = bb.computeWorldMatrix(!0);
            return {
              vertexData: zb.c.ExtractFromMesh(bb, !1, !1),
              transform: ub
            }
          },
          {
            vertexData: Xb,
            transform: pb
          } = Zb(bb[0]);
        Lb && (yield);
        const ob = new Array(bb.length - 1);
        for (let db = 1; db < bb.length; db++) ob[db - 1] = Zb(bb[db]), Lb && (yield);
        const Ab = Xb._mergeCoroutine(pb, ob, Bb, Lb, !hb);
        let lb = Ab.next();
        for (; !lb.done;) Lb && (yield), lb = Ab.next();
        const Kb = lb.value;
        Ob || (Ob = new cb(Yb.name + "_merged", Yb.ZN()));
        const Wb = Kb._applyToCoroutine(Ob, void 0, Lb);
        let Cb = Wb.next();
        for (; !Cb.done;) Lb && (yield), Cb = Wb.next();
        if (Ob.checkCollisions = Yb.checkCollisions, Ob.sideOrientation = Yb.sideOrientation, hb)
          for (ub = 0; ub < bb.length; ub++) bb[ub].dispose();
        if (Gb || Ub) {
          for (Ob.releaseSubMeshes(), ub = 0; ub < Hb.length;) vb.c.CreateFromIndices(0, Hb[ub].start, Hb[ub].count, Ob, void 0, !1), ub++;
          for (const bb of Ob.FW) bb.refreshBoundingInfo();
          Ob.computeWorldMatrix(!0)
        }
        if (Ub) {
          const bb = new eb.c(Yb.name + "_merged", Yb.ZN());
          bb.v_ = Sb;
          for (let ub = 0; ub < Ob.FW.length; ub++) Ob.FW[ub].materialIndex = ab[ub];
          Ob.material = bb
        } else Ob.material = Yb.material;
        return Ob
      }
      U_(bb) {
        bb._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(bb)
      }
      Y_(bb) {
        const ub = bb._indexInSourceMeshInstanceArray;
        if (-1 != ub) {
          if (ub !== this.instances.length - 1) {
            const bb = this.instances[this.instances.length - 1];
            this.instances[ub] = bb, bb._indexInSourceMeshInstanceArray = ub
          }
          bb._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === tb.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(bb) {
        const ub = this.ZN();
        return ub.forcePointsCloud ? tb.e.PointFillMode : ub.forceWireframe ? tb.e.WireFrameFillMode : this.overrideRenderingFillMode ?? bb
      }
      setMaterialByID(bb) {
        return this.setMaterialById(bb)
      }
      static CreateRibbon(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(bb, ub, hb, Bb, Ob, Gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(bb, ub, hb, Bb, Ob) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(bb, ub, hb, Bb, Ob, Gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(bb, ub, hb, Bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(bb, ub, hb, Bb, Ob, Gb, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(bb, ub, hb, Bb, Ob) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(bb, ub, hb, Bb, Ob, Gb, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(bb, ub, hb, Bb, Ob, Gb, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(bb, ub, hb, Bb, Ob) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(bb, ub, hb, Bb, Ob, Gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(bb, ub, hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(bb, ub, hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(bb, ub, hb, Bb, Ob, Gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(bb, ub, hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    cb.FRONTSIDE = zb.c.FRONTSIDE, cb.BACKSIDE = zb.c.BACKSIDE, cb.DOUBLESIDE = zb.c.DOUBLESIDE, cb.DEFAULTSIDE = zb.c.DEFAULTSIDE, cb.NO_CAP = 0, cb.CAP_START = 1, cb.CAP_END = 2, cb.CAP_ALL = 3, cb.NO_FLIP = 0, cb.FLIP_TILE = 1, cb.ROTATE_TILE = 2, cb.FLIP_ROW = 3, cb.ROTATE_ROW = 4, cb.FLIP_N_ROTATE_TILE = 5, cb.FLIP_N_ROTATE_ROW = 6, cb.CENTER = 0, cb.LEFT = 1, cb.RIGHT = 2, cb.TOP = 3, cb.BOTTOM = 4, cb.INSTANCEDMESH_SORT_TRANSPARENT = !1, cb._GroundMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GroundMesh")
    }, cb._GoldbergMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GoldbergMesh")
    }, cb._LinesMeshParser = (bb, ub) => {
      throw (0, Ib.m)("LinesMesh")
    }, cb._GreasedLineMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GreasedLineMesh")
    }, cb._GreasedLineRibbonMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GreasedLineRibbonMesh")
    }, cb._TrailMeshParser = (bb, ub) => {
      throw (0, Ib.m)("TrailMesh")
    }, cb._GaussianSplattingMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GaussianSplattingMesh")
    }, cb._GaussianSplattingPartProxyMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GaussianSplattingPartProxyMesh")
    }, cb._GaussianSplattingCompoundMeshParser = (bb, ub) => {
      throw (0, Ib.m)("GaussianSplattingCompoundMesh")
    };
    let Qb = !1;

    function Rb() {
      Qb || (Qb = !0, (0, mb.f)("BABYLON.Mesh", cb))
    }(Bb = cb.prototype).Ws ?? (Bb.Ws = (0, Ib.j)("Mesh", "Ws")), (Ob = cb.prototype).simplify ?? (Ob.simplify = (0, Ib.j)("Mesh", "simplify")), (Gb = cb.prototype).thinInstanceAdd ?? (Gb.thinInstanceAdd = (0, Ib.j)("Mesh", "thinInstanceAdd")), (Ub = cb.prototype).thinInstanceAddSelf ?? (Ub.thinInstanceAddSelf = (0, Ib.j)("Mesh", "thinInstanceAddSelf")), (Lb = cb.prototype).thinInstanceRegisterAttribute ?? (Lb.thinInstanceRegisterAttribute = (0, Ib.j)("Mesh", "thinInstanceRegisterAttribute")), (Yb = cb.prototype).thinInstanceSetMatrixAt ?? (Yb.thinInstanceSetMatrixAt = (0, Ib.j)("Mesh", "thinInstanceSetMatrixAt")), (Sb = cb.prototype).thinInstanceSetAttributeAt ?? (Sb.thinInstanceSetAttributeAt = (0, Ib.j)("Mesh", "thinInstanceSetAttributeAt")), (ab = cb.prototype).x_ ?? (ab.x_ = (0, Ib.j)("Mesh", "x_")), (Hb = cb.prototype).thinInstanceGetWorldMatrices ?? (Hb.thinInstanceGetWorldMatrices = (0, Ib.j)("Mesh", "thinInstanceGetWorldMatrices")), (wb = cb.prototype).A_ ?? (wb.A_ = (0, Ib.j)("Mesh", "A_")), (Zb = cb.prototype).thinInstancePartialBufferUpdate ?? (Zb.thinInstancePartialBufferUpdate = (0, Ib.j)("Mesh", "thinInstancePartialBufferUpdate")), (Xb = cb.prototype).thinInstanceRefreshBoundingInfo ?? (Xb.thinInstanceRefreshBoundingInfo = (0, Ib.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (pb = cb.prototype).getEmittedParticleSystems ?? (pb.getEmittedParticleSystems = (0, Ib.j)("Mesh", "getEmittedParticleSystems")), (ob = cb.prototype).getHierarchyEmittedParticleSystems ?? (ob.getHierarchyEmittedParticleSystems = (0, Ib.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(cb.prototype, "edgesShareWithInstances") || Object.defineProperty(cb.prototype, "edgesShareWithInstances", (0, Ib.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(cb.prototype, "Jub") || Object.defineProperty(cb.prototype, "Jub", (0, Ib.f)("Mesh", "Jub")), Object.getOwnPropertyDescriptor(cb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(cb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Ib.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(cb.prototype, "W4") || Object.defineProperty(cb.prototype, "W4", (0, Ib.f)("Mesh", "W4"))
  },
  39862: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb
    });
    var Bb = hb(39463),
      Ob = hb(36727),
      Gb = hb(39609),
      Ub = hb(39333),
      Lb = hb(36893),
      Yb = hb(38302),
      Sb = hb(39467),
      ab = hb(39856),
      Hb = hb(39525),
      wb = hb(39736);
    class Zb {}
    let Xb = (() => {
      var bb;
      let ub, hb, Xb, pb, ob = [];
      return bb = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, ab.i)(this._applyToCoroutine.bind(this)), this.uniqueId = bb._UniqueIdGenerator, bb._UniqueIdGenerator++
        }
        set(bb, ub) {
          switch (bb.length || Yb.b.Warn(`Setting vertex data kind '${ub}' with an empty array`), ub) {
            case Gb.i.PositionKind:
              this.positions = bb;
              break;
            case Gb.i.NormalKind:
              this.normals = bb;
              break;
            case Gb.i.TangentKind:
              this.tangents = bb;
              break;
            case Gb.i.UVKind:
              this.uvs = bb;
              break;
            case Gb.i.UV2Kind:
              this.uvs2 = bb;
              break;
            case Gb.i.UV3Kind:
              this.uvs3 = bb;
              break;
            case Gb.i.UV4Kind:
              this.uvs4 = bb;
              break;
            case Gb.i.UV5Kind:
              this.uvs5 = bb;
              break;
            case Gb.i.UV6Kind:
              this.uvs6 = bb;
              break;
            case Gb.i.ColorKind:
              this.colors = bb;
              break;
            case Gb.i.MatricesIndicesKind:
              this.matricesIndices = bb;
              break;
            case Gb.i.MatricesWeightsKind:
              this.matricesWeights = bb;
              break;
            case Gb.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = bb;
              break;
            case Gb.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = bb
          }
        }
        applyToMesh(bb, ub) {
          return this._applyTo(bb, ub, !1), this
        }
        applyToGeometry(bb, ub) {
          return this._applyTo(bb, ub, !1), this
        }
        updateMesh(bb) {
          return this._update(bb), this
        }
        updateGeometry(bb) {
          return this._update(bb), this
        }* _applyToCoroutine(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hb = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (bb.setVerticesData(Gb.i.PositionKind, this.positions, ub), hb && (yield)), this.normals && (bb.setVerticesData(Gb.i.NormalKind, this.normals, ub), hb && (yield)), this.tangents && (bb.setVerticesData(Gb.i.TangentKind, this.tangents, ub), hb && (yield)), this.uvs && (bb.setVerticesData(Gb.i.UVKind, this.uvs, ub), hb && (yield)), this.uvs2 && (bb.setVerticesData(Gb.i.UV2Kind, this.uvs2, ub), hb && (yield)), this.uvs3 && (bb.setVerticesData(Gb.i.UV3Kind, this.uvs3, ub), hb && (yield)), this.uvs4 && (bb.setVerticesData(Gb.i.UV4Kind, this.uvs4, ub), hb && (yield)), this.uvs5 && (bb.setVerticesData(Gb.i.UV5Kind, this.uvs5, ub), hb && (yield)), this.uvs6 && (bb.setVerticesData(Gb.i.UV6Kind, this.uvs6, ub), hb && (yield)), this.colors) {
            const Bb = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            bb.setVerticesData(Gb.i.ColorKind, this.colors, ub, Bb), this.hasVertexAlpha && void 0 !== bb.hasVertexAlpha && (bb.hasVertexAlpha = !0), hb && (yield)
          }
          if (this.matricesIndices && (bb.setVerticesData(Gb.i.MatricesIndicesKind, this.matricesIndices, ub), hb && (yield)), this.matricesWeights && (bb.setVerticesData(Gb.i.MatricesWeightsKind, this.matricesWeights, ub), hb && (yield)), this.matricesIndicesExtra && (bb.setVerticesData(Gb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, ub), hb && (yield)), this.matricesWeightsExtra && (bb.setVerticesData(Gb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, ub), hb && (yield)), this.indices ? (bb.setIndices(this.indices, null, ub), hb && (yield)) : bb.setIndices([], null), bb.FW && this.materialInfos && this.materialInfos.length > 1) {
            const ub = bb;
            ub.FW = [];
            for (const bb of this.materialInfos) new wb.c(bb.materialIndex, bb.verticesStart, bb.verticesCount, bb.indexStart, bb.indexCount, ub)
          }
          return this
        }
        _update(bb, ub, hb) {
          return this.positions && bb.updateVerticesData(Gb.i.PositionKind, this.positions, ub, hb), this.normals && bb.updateVerticesData(Gb.i.NormalKind, this.normals, ub, hb), this.tangents && bb.updateVerticesData(Gb.i.TangentKind, this.tangents, ub, hb), this.uvs && bb.updateVerticesData(Gb.i.UVKind, this.uvs, ub, hb), this.uvs2 && bb.updateVerticesData(Gb.i.UV2Kind, this.uvs2, ub, hb), this.uvs3 && bb.updateVerticesData(Gb.i.UV3Kind, this.uvs3, ub, hb), this.uvs4 && bb.updateVerticesData(Gb.i.UV4Kind, this.uvs4, ub, hb), this.uvs5 && bb.updateVerticesData(Gb.i.UV5Kind, this.uvs5, ub, hb), this.uvs6 && bb.updateVerticesData(Gb.i.UV6Kind, this.uvs6, ub, hb), this.colors && bb.updateVerticesData(Gb.i.ColorKind, this.colors, ub, hb), this.matricesIndices && bb.updateVerticesData(Gb.i.MatricesIndicesKind, this.matricesIndices, ub, hb), this.matricesWeights && bb.updateVerticesData(Gb.i.MatricesWeightsKind, this.matricesWeights, ub, hb), this.matricesIndicesExtra && bb.updateVerticesData(Gb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, ub, hb), this.matricesWeightsExtra && bb.updateVerticesData(Gb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, ub, hb), this.indices && bb.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Gb = Ob.i.YX[0],
            Ub = Ob.i.YX[1];
          for (let Lb = hb; Lb < hb + Bb; Lb += 3) Ob.q.FromArrayToRef(bb, Lb, Gb), Ob.q.TransformCoordinatesToRef(Gb, ub, Ub), bb[Lb] = Ub.x, bb[Lb + 1] = Ub.y, bb[Lb + 2] = Ub.z
        }
        static _TransformVector3Normals(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Gb = Ob.i.YX[0],
            Ub = Ob.i.YX[1];
          for (let Lb = hb; Lb < hb + Bb; Lb += 3) Ob.q.FromArrayToRef(bb, Lb, Gb), Ob.q.TransformNormalToRef(Gb, ub, Ub), bb[Lb] = Ub.x, bb[Lb + 1] = Ub.y, bb[Lb + 2] = Ub.z
        }
        static _TransformVector4Normals(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Gb = Ob.i.Vector4[0],
            Ub = Ob.i.Vector4[1];
          for (let Lb = hb; Lb < hb + Bb; Lb += 4) Ob.r.FromArrayToRef(bb, Lb, Gb), Ob.r.TransformNormalToRef(Gb, ub, Ub), bb[Lb] = Ub.x, bb[Lb + 1] = Ub.y, bb[Lb + 2] = Ub.z, bb[Lb + 3] = Ub.w
        }
        static _FlipFaces(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
          for (let Bb = ub; Bb < ub + hb; Bb += 3) {
            const ub = bb[Bb + 1];
            bb[Bb + 1] = bb[Bb + 2], bb[Bb + 2] = ub
          }
        }
        transform(ub) {
          const hb = ub.determinant() < 0;
          return this.positions && bb._TransformVector3Coordinates(this.positions, ub), this.normals && bb._TransformVector3Normals(this.normals, ub), this.tangents && bb._TransformVector4Normals(this.tangents, ub), hb && this.indices && bb._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const ub = [];
          for (const hb of this.materialInfos) {
            const Bb = new bb;
            if (this.positions && (Bb.positions = this.positions.slice(3 * hb.verticesStart, 3 * (hb.verticesCount + hb.verticesStart))), this.normals && (Bb.normals = this.normals.slice(3 * hb.verticesStart, 3 * (hb.verticesCount + hb.verticesStart))), this.tangents && (Bb.tangents = this.tangents.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.colors && (Bb.colors = this.colors.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.uvs && (Bb.uvs = this.uvs.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.uvs2 && (Bb.uvs2 = this.uvs2.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.uvs3 && (Bb.uvs3 = this.uvs3.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.uvs4 && (Bb.uvs4 = this.uvs4.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.uvs5 && (Bb.uvs5 = this.uvs5.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.uvs6 && (Bb.uvs6 = this.uvs6.slice(2 * hb.verticesStart, 2 * (hb.verticesCount + hb.verticesStart))), this.matricesIndices && (Bb.matricesIndices = this.matricesIndices.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.matricesIndicesExtra && (Bb.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.matricesWeights && (Bb.matricesWeights = this.matricesWeights.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.matricesWeightsExtra && (Bb.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * hb.verticesStart, 4 * (hb.verticesCount + hb.verticesStart))), this.indices) {
              Bb.indices = [];
              for (let bb = hb.indexStart; bb < hb.indexStart + hb.indexCount; bb++) Bb.indices.push(this.indices[bb] - hb.verticesStart)
            }
            const Ob = new Zb;
            Ob.indexStart = 0, Ob.indexCount = Bb.indices ? Bb.indices.length : 0, Ob.materialIndex = hb.materialIndex, Ob.verticesStart = 0, Ob.verticesCount = (Bb.positions ? Bb.positions.length : 0) / 3, Bb.materialInfos = [Ob], ub.push(Bb)
          }
          return ub
        }
        merge(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Gb = Array.isArray(bb) ? bb.map((bb => ({
            vertexData: bb
          }))) : [{
            vertexData: bb
          }];
          return (0, ab.k)(this._mergeCoroutine(void 0, Gb, ub, !1, hb, Bb, Ob))
        }* _mergeCoroutine(ub, hb) {
          let Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ob = arguments.length > 3 ? arguments[3] : void 0,
            Ub = arguments.length > 4 ? arguments[4] : void 0,
            Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Sb = hb.map((bb => bb.vertexData)),
            ab = this;
          if (Yb)
            for (const bb of Sb) bb && (bb._validate(), !this.normals && bb.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && bb.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && bb.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && bb.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && bb.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && bb.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && bb.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && bb.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && bb.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && bb.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && bb.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && bb.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && bb.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const bb of Sb)
            if (bb)
              if (Yb) this.normals && !bb.normals && (bb.normals = new Float32Array(bb.positions.length)), this.tangents && !bb.tangents && (bb.tangents = new Float32Array(bb.positions.length / 3 * 4)), this.uvs && !bb.uvs && (bb.uvs = new Float32Array(bb.positions.length / 3 * 2)), this.uvs2 && !bb.uvs2 && (bb.uvs2 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs3 && !bb.uvs3 && (bb.uvs3 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs4 && !bb.uvs4 && (bb.uvs4 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs5 && !bb.uvs5 && (bb.uvs5 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs6 && !bb.uvs6 && (bb.uvs6 = new Float32Array(bb.positions.length / 3 * 2)), this.colors && !bb.colors && (bb.colors = new Float32Array(bb.positions.length / 3 * 4), bb.colors.fill(1)), this.matricesIndices && !bb.matricesIndices && (bb.matricesIndices = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeights && !bb.matricesWeights && (bb.matricesWeights = new Float32Array(bb.positions.length / 3 * 4)), this.matricesIndicesExtra && !bb.matricesIndicesExtra && (bb.matricesIndicesExtra = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeightsExtra && !bb.matricesWeightsExtra && (bb.matricesWeightsExtra = new Float32Array(bb.positions.length / 3 * 4));
              else if (bb._validate(), !this.normals !== !bb.normals || !this.tangents !== !bb.tangents || !this.uvs !== !bb.uvs || !this.uvs2 !== !bb.uvs2 || !this.uvs3 !== !bb.uvs3 || !this.uvs4 !== !bb.uvs4 || !this.uvs5 !== !bb.uvs5 || !this.uvs6 !== !bb.uvs6 || !this.colors !== !bb.colors || !this.matricesIndices !== !bb.matricesIndices || !this.matricesWeights !== !bb.matricesWeights || !this.matricesIndicesExtra !== !bb.matricesIndicesExtra || !this.matricesWeightsExtra !== !bb.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Lb) {
            let bb, Bb = 0,
              Ob = 0;
            const Gb = [];
            let Ub = null;
            const Lb = [];
            for (const hb of this.splitBasedOnMaterialID()) Lb.push({
              vertexData: hb,
              transform: ub
            });
            for (const ub of hb)
              if (ub.vertexData)
                for (const bb of ub.vertexData.splitBasedOnMaterialID()) Lb.push({
                  vertexData: bb,
                  transform: ub.transform
                });
            Lb.sort(((bb, ub) => {
              const hb = bb.vertexData.materialInfos ? bb.vertexData.materialInfos[0].materialIndex : 0,
                Bb = ub.vertexData.materialInfos ? ub.vertexData.materialInfos[0].materialIndex : 0;
              return hb > Bb ? 1 : hb === Bb ? 0 : -1
            }));
            for (const ub of Lb) {
              const hb = ub.vertexData;
              if (bb = hb.materialInfos ? hb.materialInfos[0].materialIndex : 0, Ub && Ub.materialIndex === bb) Ub.indexCount += hb.indices.length, Ub.verticesCount += hb.positions.length / 3;
              else {
                const ub = new Zb;
                ub.materialIndex = bb, ub.indexStart = Bb, ub.indexCount = hb.indices.length, ub.verticesStart = Ob, ub.verticesCount = hb.positions.length / 3, Gb.push(ub), Ub = ub
              }
              Bb += hb.indices.length, Ob += hb.positions.length / 3
            }
            const Yb = Lb.splice(0, 1)[0];
            ab = Yb.vertexData, ub = Yb.transform, Sb = Lb.map((bb => bb.vertexData)), hb = Lb, this.materialInfos = Gb
          }
          const Hb = Sb.reduce(((bb, ub) => bb + (ub.indices?.length ?? 0)), ab.indices?.length ?? 0);
          let wb = Ub || Sb.some((bb => bb.indices === ab.indices)) ? ab.indices?.slice() : ab.indices;
          if (Hb > 0) {
            let Gb = wb?.length ?? 0;
            if (wb || (wb = new Array(Hb)), wb.length !== Hb) {
              if (Array.isArray(wb)) wb.length = Hb;
              else {
                const bb = Bb || wb instanceof Uint32Array ? new Uint32Array(Hb) : new Uint16Array(Hb);
                bb.set(wb), wb = bb
              }
              ub && ub.determinant() < 0 && bb._FlipFaces(wb, 0, Gb)
            }
            let Ub = ab.positions ? ab.positions.length / 3 : 0;
            for (const {
                vertexData: ub,
                transform: Bb
              }
              of hb)
              if (ub.indices) {
                for (let bb = 0; bb < ub.indices.length; bb++) wb[Gb + bb] = ub.indices[bb] + Ub;
                Bb && Bb.determinant() < 0 && bb._FlipFaces(wb, Gb, ub.indices.length), Ub += ub.positions.length / 3, Gb += ub.indices.length, Ob && (yield)
              }
          }
          return this.indices = wb, this.positions = bb._MergeElement(Gb.i.PositionKind, ab.positions, ub, hb.map((bb => [bb.vertexData.positions, bb.transform]))), Ob && (yield), ab.normals && (this.normals = bb._MergeElement(Gb.i.NormalKind, ab.normals, ub, hb.map((bb => [bb.vertexData.normals, bb.transform]))), Ob && (yield)), ab.tangents && (this.tangents = bb._MergeElement(Gb.i.TangentKind, ab.tangents, ub, hb.map((bb => [bb.vertexData.tangents, bb.transform]))), Ob && (yield)), ab.uvs && (this.uvs = bb._MergeElement(Gb.i.UVKind, ab.uvs, ub, hb.map((bb => [bb.vertexData.uvs, bb.transform]))), Ob && (yield)), ab.uvs2 && (this.uvs2 = bb._MergeElement(Gb.i.UV2Kind, ab.uvs2, ub, hb.map((bb => [bb.vertexData.uvs2, bb.transform]))), Ob && (yield)), ab.uvs3 && (this.uvs3 = bb._MergeElement(Gb.i.UV3Kind, ab.uvs3, ub, hb.map((bb => [bb.vertexData.uvs3, bb.transform]))), Ob && (yield)), ab.uvs4 && (this.uvs4 = bb._MergeElement(Gb.i.UV4Kind, ab.uvs4, ub, hb.map((bb => [bb.vertexData.uvs4, bb.transform]))), Ob && (yield)), ab.uvs5 && (this.uvs5 = bb._MergeElement(Gb.i.UV5Kind, ab.uvs5, ub, hb.map((bb => [bb.vertexData.uvs5, bb.transform]))), Ob && (yield)), ab.uvs6 && (this.uvs6 = bb._MergeElement(Gb.i.UV6Kind, ab.uvs6, ub, hb.map((bb => [bb.vertexData.uvs6, bb.transform]))), Ob && (yield)), ab.colors && (this.colors = bb._MergeElement(Gb.i.ColorKind, ab.colors, ub, hb.map((bb => [bb.vertexData.colors, bb.transform]))), (void 0 !== ab.hasVertexAlpha || hb.some((bb => void 0 !== bb.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = ab.hasVertexAlpha || hb.some((bb => bb.vertexData.hasVertexAlpha))), Ob && (yield)), ab.matricesIndices && (this.matricesIndices = bb._MergeElement(Gb.i.MatricesIndicesKind, ab.matricesIndices, ub, hb.map((bb => [bb.vertexData.matricesIndices, bb.transform]))), Ob && (yield)), ab.matricesWeights && (this.matricesWeights = bb._MergeElement(Gb.i.MatricesWeightsKind, ab.matricesWeights, ub, hb.map((bb => [bb.vertexData.matricesWeights, bb.transform]))), Ob && (yield)), ab.matricesIndicesExtra && (this.matricesIndicesExtra = bb._MergeElement(Gb.i.MatricesIndicesExtraKind, ab.matricesIndicesExtra, ub, hb.map((bb => [bb.vertexData.matricesIndicesExtra, bb.transform]))), Ob && (yield)), ab.matricesWeightsExtra && (this.matricesWeightsExtra = bb._MergeElement(Gb.i.MatricesWeightsExtraKind, ab.matricesWeightsExtra, ub, hb.map((bb => [bb.vertexData.matricesWeightsExtra, bb.transform])))), this
        }
        static _MergeElement(ub, hb, Bb, Ob) {
          const Ub = Ob.filter((bb => null !== bb[0] && void 0 !== bb[0]));
          if (!hb && 0 == Ub.length) return hb;
          if (!hb) return this._MergeElement(ub, Ub[0][0], Ub[0][1], Ub.slice(1));
          const Lb = Ub.reduce(((bb, ub) => bb + ub[0].length), hb.length),
            Yb = ub === Gb.i.PositionKind ? bb._TransformVector3Coordinates : ub === Gb.i.NormalKind ? bb._TransformVector3Normals : ub === Gb.i.TangentKind ? bb._TransformVector4Normals : () => {};
          if (hb instanceof Float32Array) {
            const bb = new Float32Array(Lb);
            bb.set(hb), Bb && Yb(bb, Bb, 0, hb.length);
            let ub = hb.length;
            for (const [hb, Bb] of Ub) bb.set(hb, ub), Bb && Yb(bb, Bb, ub, hb.length), ub += hb.length;
            return bb
          } {
            const bb = new Array(Lb);
            for (let Bb = 0; Bb < hb.length; Bb++) bb[Bb] = hb[Bb];
            Bb && Yb(bb, Bb, 0, hb.length);
            let ub = hb.length;
            for (const [hb, Bb] of Ub) {
              for (let Bb = 0; Bb < hb.length; Bb++) bb[ub + Bb] = hb[Bb];
              Bb && Yb(bb, Bb, ub, hb.length), ub += hb.length
            }
            return bb
          }
        }
        _validate() {
          if (!this.positions) throw new Hb.h("Positions are required", Hb.e.MeshInvalidPositionsError);
          const bb = (bb, ub) => {
              const hb = (0, Gb.h)(bb);
              if (ub.length % hb !== 0) throw new Error("The " + bb + "s array count must be a multiple of " + hb);
              return ub.length / hb
            },
            ub = bb(Gb.i.PositionKind, this.positions),
            hb = (hb, Bb) => {
              const Ob = bb(hb, Bb);
              if (Ob !== ub) throw new Error("The " + hb + "s element count (" + Ob + ") does not match the positions count (" + ub + ")")
            };
          this.normals && hb(Gb.i.NormalKind, this.normals), this.tangents && hb(Gb.i.TangentKind, this.tangents), this.uvs && hb(Gb.i.UVKind, this.uvs), this.uvs2 && hb(Gb.i.UV2Kind, this.uvs2), this.uvs3 && hb(Gb.i.UV3Kind, this.uvs3), this.uvs4 && hb(Gb.i.UV4Kind, this.uvs4), this.uvs5 && hb(Gb.i.UV5Kind, this.uvs5), this.uvs6 && hb(Gb.i.UV6Kind, this.uvs6), this.colors && hb(Gb.i.ColorKind, this.colors), this.matricesIndices && hb(Gb.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && hb(Gb.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && hb(Gb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && hb(Gb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const ub = this.serialize();
          return bb.Parse(ub)
        }
        serialize() {
          const bb = {};
          if (this.positions && (bb.positions = Array.from(this.positions)), this.normals && (bb.normals = Array.from(this.normals)), this.tangents && (bb.tangents = Array.from(this.tangents)), this.uvs && (bb.uvs = Array.from(this.uvs)), this.uvs2 && (bb.uvs2 = Array.from(this.uvs2)), this.uvs3 && (bb.uvs3 = Array.from(this.uvs3)), this.uvs4 && (bb.uvs4 = Array.from(this.uvs4)), this.uvs5 && (bb.uvs5 = Array.from(this.uvs5)), this.uvs6 && (bb.uvs6 = Array.from(this.uvs6)), this.colors && (bb.colors = Array.from(this.colors), bb.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (bb.matricesIndices = Array.from(this.matricesIndices), bb.matricesIndicesExpanded = !0), this.matricesWeights && (bb.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (bb.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), bb.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (bb.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), bb.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            bb.materialInfos = [];
            for (const ub of this.materialInfos) {
              const hb = {
                indexStart: ub.indexStart,
                indexCount: ub.indexCount,
                materialIndex: ub.materialIndex,
                verticesStart: ub.verticesStart,
                verticesCount: ub.verticesCount
              };
              bb.materialInfos.push(hb)
            }
          }
          return bb
        }
        static ExtractFromMesh(ub, hb, Bb) {
          return bb._ExtractFrom(ub, hb, Bb)
        }
        static ExtractFromGeometry(ub, hb, Bb) {
          return bb._ExtractFrom(ub, hb, Bb)
        }
        static _ExtractFrom(ub, hb, Bb) {
          const Ob = new bb;
          if (ub.isVerticesDataPresent(Gb.i.PositionKind) && (Ob.positions = ub.getVerticesData(Gb.i.PositionKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.NormalKind) && (Ob.normals = ub.getVerticesData(Gb.i.NormalKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.TangentKind) && (Ob.tangents = ub.getVerticesData(Gb.i.TangentKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UVKind) && (Ob.uvs = ub.getVerticesData(Gb.i.UVKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UV2Kind) && (Ob.uvs2 = ub.getVerticesData(Gb.i.UV2Kind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UV3Kind) && (Ob.uvs3 = ub.getVerticesData(Gb.i.UV3Kind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UV4Kind) && (Ob.uvs4 = ub.getVerticesData(Gb.i.UV4Kind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UV5Kind) && (Ob.uvs5 = ub.getVerticesData(Gb.i.UV5Kind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.UV6Kind) && (Ob.uvs6 = ub.getVerticesData(Gb.i.UV6Kind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.ColorKind)) {
            const bb = ub.geometry || ub,
              Ub = bb.getVertexBuffer(Gb.i.ColorKind),
              Lb = bb.getVerticesData(Gb.i.ColorKind, hb, Bb);
            if (3 === Ub.getSize()) {
              const bb = new Float32Array(4 * Lb.length / 3);
              for (let ub = 0, hb = 0; ub < Lb.length; ub += 3, hb += 4) bb[hb] = Lb[ub], bb[hb + 1] = Lb[ub + 1], bb[hb + 2] = Lb[ub + 2], bb[hb + 3] = 1;
              Ob.colors = bb
            } else {
              if (4 !== Ub.getSize()) throw new Error(`Unexpected number of color components: ${Ub.getSize()}`);
              Ob.colors = Lb
            }
          }
          return ub.isVerticesDataPresent(Gb.i.MatricesIndicesKind) && (Ob.matricesIndices = ub.getVerticesData(Gb.i.MatricesIndicesKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.MatricesWeightsKind) && (Ob.matricesWeights = ub.getVerticesData(Gb.i.MatricesWeightsKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.MatricesIndicesExtraKind) && (Ob.matricesIndicesExtra = ub.getVerticesData(Gb.i.MatricesIndicesExtraKind, hb, Bb)), ub.isVerticesDataPresent(Gb.i.MatricesWeightsExtraKind) && (Ob.matricesWeightsExtra = ub.getVerticesData(Gb.i.MatricesWeightsExtraKind, hb, Bb)), Ob.indices = ub.XBb(hb, Bb), Ob
        }
        static CreateRibbon(bb) {
          throw (0, Ub.m)("ribbonBuilder")
        }
        static CreateBox(bb) {
          throw (0, Ub.m)("boxBuilder")
        }
        static CreateTiledBox(bb) {
          throw (0, Ub.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(bb) {
          throw (0, Ub.m)("tiledPlaneBuilder")
        }
        static CreateSphere(bb) {
          throw (0, Ub.m)("sphereBuilder")
        }
        static CreateCylinder(bb) {
          throw (0, Ub.m)("cylinderBuilder")
        }
        static CreateTorus(bb) {
          throw (0, Ub.m)("torusBuilder")
        }
        static CreateLineSystem(bb) {
          throw (0, Ub.m)("linesBuilder")
        }
        static CreateDashedLines(bb) {
          throw (0, Ub.m)("linesBuilder")
        }
        static CreateGround(bb) {
          throw (0, Ub.m)("groundBuilder")
        }
        static CreateTiledGround(bb) {
          throw (0, Ub.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(bb) {
          throw (0, Ub.m)("groundBuilder")
        }
        static CreatePlane(bb) {
          throw (0, Ub.m)("planeBuilder")
        }
        static CreateDisc(bb) {
          throw (0, Ub.m)("discBuilder")
        }
        static CreatePolygon(bb, ub, hb, Bb, Ob, Gb, Lb) {
          throw (0, Ub.m)("polygonBuilder")
        }
        static CreateIcoSphere(bb) {
          throw (0, Ub.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(bb) {
          throw (0, Ub.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Ob.q.Up();
          throw (0, Ub.m)("capsuleBuilder")
        }
        static CreateTorusKnot(bb) {
          throw (0, Ub.m)("torusKnotBuilder")
        }
        static ComputeNormals(bb, ub, hb, Bb) {
          let Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb = !1,
            Db = !1,
            xb = !1,
            zb = !1,
            gb = 1,
            ib = 0,
            vb = null;
          Bb && (nb = !!Bb.facetNormals, Db = !!Bb.facetPositions, xb = !!Bb.facetPartitioning, gb = !0 === Bb.useRightHandedSystem ? -1 : 1, ib = Bb.ratio || 0, zb = !!Bb.depthSort, vb = Bb.distanceTo, zb && void 0 === vb && (vb = Ob.q.Zero()));
          let tb = 0,
            Jb = 0,
            eb = 0,
            Nb = 0;
          for (xb && Bb && Bb.bbSize && (tb = Bb.subDiv.X * ib / Bb.bbSize.x, Jb = Bb.subDiv.Y * ib / Bb.bbSize.y, eb = Bb.subDiv.Z * ib / Bb.bbSize.z, Nb = Bb.subDiv.max * Bb.subDiv.max, Bb.facetPartitioning.length = 0), Gb = 0; Gb < bb.length; Gb++) hb[Gb] = 0;
          const sb = ub.length / 3 | 0;
          for (Gb = 0; Gb < sb; Gb++) {
            if (ob = 3 * ub[3 * Gb], Ab = ob + 1, lb = ob + 2, Kb = 3 * ub[3 * Gb + 1], Wb = Kb + 1, Cb = Kb + 2, db = 3 * ub[3 * Gb + 2], rb = db + 1, jb = db + 2, Ub = bb[ob] - bb[Kb], Lb = bb[Ab] - bb[Wb], Yb = bb[lb] - bb[Cb], Sb = bb[db] - bb[Kb], ab = bb[rb] - bb[Wb], Hb = bb[jb] - bb[Cb], wb = gb * (Lb * Hb - Yb * ab), Zb = gb * (Yb * Sb - Ub * Hb), Xb = gb * (Ub * ab - Lb * Sb), pb = Math.sqrt(wb * wb + Zb * Zb + Xb * Xb), pb = 0 === pb ? 1 : pb, wb /= pb, Zb /= pb, Xb /= pb, nb && Bb && (Bb.facetNormals[Gb].x = wb, Bb.facetNormals[Gb].y = Zb, Bb.facetNormals[Gb].z = Xb), Db && Bb && (Bb.facetPositions[Gb].x = (bb[ob] + bb[Kb] + bb[db]) / 3, Bb.facetPositions[Gb].y = (bb[Ab] + bb[Wb] + bb[rb]) / 3, Bb.facetPositions[Gb].z = (bb[lb] + bb[Cb] + bb[jb]) / 3), xb && Bb) {
              const ub = Math.floor((Bb.facetPositions[Gb].x - Bb.bInfo.minimum.x * ib) * tb),
                hb = Math.floor((Bb.facetPositions[Gb].y - Bb.bInfo.minimum.y * ib) * Jb),
                Ob = Math.floor((Bb.facetPositions[Gb].z - Bb.bInfo.minimum.z * ib) * eb),
                Ub = Math.floor((bb[ob] - Bb.bInfo.minimum.x * ib) * tb),
                Lb = Math.floor((bb[Ab] - Bb.bInfo.minimum.y * ib) * Jb),
                Yb = Math.floor((bb[lb] - Bb.bInfo.minimum.z * ib) * eb),
                Sb = Math.floor((bb[Kb] - Bb.bInfo.minimum.x * ib) * tb),
                ab = Math.floor((bb[Wb] - Bb.bInfo.minimum.y * ib) * Jb),
                Hb = Math.floor((bb[Cb] - Bb.bInfo.minimum.z * ib) * eb),
                wb = Math.floor((bb[db] - Bb.bInfo.minimum.x * ib) * tb),
                Zb = Math.floor((bb[rb] - Bb.bInfo.minimum.y * ib) * Jb),
                Xb = Math.floor((bb[jb] - Bb.bInfo.minimum.z * ib) * eb),
                pb = Ub + Bb.subDiv.max * Lb + Nb * Yb,
                nb = Sb + Bb.subDiv.max * ab + Nb * Hb,
                Db = wb + Bb.subDiv.max * Zb + Nb * Xb,
                xb = ub + Bb.subDiv.max * hb + Nb * Ob;
              Bb.facetPartitioning[xb] = Bb.facetPartitioning[xb] ? Bb.facetPartitioning[xb] : [], Bb.facetPartitioning[pb] = Bb.facetPartitioning[pb] ? Bb.facetPartitioning[pb] : [], Bb.facetPartitioning[nb] = Bb.facetPartitioning[nb] ? Bb.facetPartitioning[nb] : [], Bb.facetPartitioning[Db] = Bb.facetPartitioning[Db] ? Bb.facetPartitioning[Db] : [], Bb.facetPartitioning[pb].push(Gb), nb != pb && Bb.facetPartitioning[nb].push(Gb), Db != nb && Db != pb && Bb.facetPartitioning[Db].push(Gb), xb != pb && xb != nb && xb != Db && Bb.facetPartitioning[xb].push(Gb)
            }
            if (zb && Bb && Bb.facetPositions) {
              const bb = Bb.depthSortedFacets[Gb];
              bb.ind = 3 * Gb, bb.sqDistance = Ob.q.DistanceSquared(Bb.facetPositions[Gb], vb)
            }
            hb[ob] += wb, hb[Ab] += Zb, hb[lb] += Xb, hb[Kb] += wb, hb[Wb] += Zb, hb[Cb] += Xb, hb[db] += wb, hb[rb] += Zb, hb[jb] += Xb
          }
          for (Gb = 0; Gb < hb.length / 3; Gb++) wb = hb[3 * Gb], Zb = hb[3 * Gb + 1], Xb = hb[3 * Gb + 2], pb = Math.sqrt(wb * wb + Zb * Zb + Xb * Xb), pb = 0 === pb ? 1 : pb, wb /= pb, Zb /= pb, Xb /= pb, hb[3 * Gb] = wb, hb[3 * Gb + 1] = Zb, hb[3 * Gb + 2] = Xb
        }
        static _ComputeSides(ub, hb, Bb, Gb, Ub, Lb, Yb) {
          const Sb = Bb.length,
            ab = Gb.length;
          let Hb, wb;
          switch (ub = ub || bb.DEFAULTSIDE) {
            case bb.FRONTSIDE:
              break;
            case bb.BACKSIDE:
              for (Hb = 0; Hb < Sb; Hb += 3) {
                const bb = Bb[Hb];
                Bb[Hb] = Bb[Hb + 2], Bb[Hb + 2] = bb
              }
              for (wb = 0; wb < ab; wb++) Gb[wb] = -Gb[wb];
              break;
            case bb.DOUBLESIDE: {
              const bb = hb.length,
                ub = bb / 3;
              for (let Bb = 0; Bb < bb; Bb++) hb[bb + Bb] = hb[Bb];
              for (Hb = 0; Hb < Sb; Hb += 3) Bb[Hb + Sb] = Bb[Hb + 2] + ub, Bb[Hb + 1 + Sb] = Bb[Hb + 1] + ub, Bb[Hb + 2 + Sb] = Bb[Hb] + ub;
              for (wb = 0; wb < ab; wb++) Gb[ab + wb] = -Gb[wb];
              const Zb = Ub.length;
              let Xb;
              for (Xb = 0; Xb < Zb; Xb++) Ub[Xb + Zb] = Ub[Xb];
              for (Lb = Lb || new Ob.r(0, 0, 1, 1), Yb = Yb || new Ob.r(0, 0, 1, 1), Xb = 0, Hb = 0; Hb < Zb / 2; Hb++) Ub[Xb] = Lb.x + (Lb.z - Lb.x) * Ub[Xb], Ub[Xb + 1] = Lb.y + (Lb.w - Lb.y) * Ub[Xb + 1], Ub[Xb + Zb] = Yb.x + (Yb.z - Yb.x) * Ub[Xb + Zb], Ub[Xb + Zb + 1] = Yb.y + (Yb.w - Yb.y) * Ub[Xb + Zb + 1], Xb += 2;
              break
            }
          }
        }
        static Parse(ub) {
          const hb = new bb,
            Bb = ub.positions;
          Bb && hb.set(Bb, Gb.i.PositionKind);
          const Ob = ub.normals;
          Ob && hb.set(Ob, Gb.i.NormalKind);
          const Ub = ub.tangents;
          Ub && hb.set(Ub, Gb.i.TangentKind);
          const Yb = ub.uvs;
          Yb && hb.set(Yb, Gb.i.UVKind);
          const Sb = ub.uvs2;
          Sb && hb.set(Sb, Gb.i.UV2Kind);
          const ab = ub.uvs3;
          ab && hb.set(ab, Gb.i.UV3Kind);
          const Hb = ub.uvs4;
          Hb && hb.set(Hb, Gb.i.UV4Kind);
          const wb = ub.uvs5;
          wb && hb.set(wb, Gb.i.UV5Kind);
          const Xb = ub.uvs6;
          Xb && hb.set(Xb, Gb.i.UV6Kind);
          const pb = ub.colors;
          pb && (hb.set(Lb.c.CheckColors4(pb, Bb.length / 3), Gb.i.ColorKind), void 0 !== ub.hasVertexAlpha && (hb.hasVertexAlpha = ub.hasVertexAlpha));
          const ob = ub.matricesIndices;
          ob && hb.set(ob, Gb.i.MatricesIndicesKind);
          const Ab = ub.matricesWeights;
          Ab && hb.set(Ab, Gb.i.MatricesWeightsKind);
          const lb = ub.indices;
          lb && (hb.indices = lb);
          const Kb = ub.materialInfos;
          if (Kb) {
            hb.materialInfos = [];
            for (const bb of Kb) {
              const ub = new Zb;
              ub.indexCount = bb.indexCount, ub.indexStart = bb.indexStart, ub.verticesCount = bb.verticesCount, ub.verticesStart = bb.verticesStart, ub.materialIndex = bb.materialIndex, hb.materialInfos.push(ub)
            }
          }
          return hb
        }
        static ImportVertexData(ub, hb) {
          const Bb = bb.Parse(ub);
          hb.setAllVerticesData(Bb, ub.updatable)
        }
      }, (() => {
        const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [Sb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], hb = [Sb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Xb = [Sb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], pb = [Sb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Bb.h)(bb, null, ub, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Coordinates" in bb,
            get: bb => bb._TransformVector3Coordinates
          },
          metadata: Ob
        }, null, ob), (0, Bb.h)(bb, null, hb, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Normals" in bb,
            get: bb => bb._TransformVector3Normals
          },
          metadata: Ob
        }, null, ob), (0, Bb.h)(bb, null, Xb, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector4Normals" in bb,
            get: bb => bb._TransformVector4Normals
          },
          metadata: Ob
        }, null, ob), (0, Bb.h)(bb, null, pb, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: bb => "_FlipFaces" in bb,
            get: bb => bb._FlipFaces
          },
          metadata: Ob
        }, null, ob), Ob && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ob
        })
      })(), bb.FRONTSIDE = ((0, Bb.k)(bb, ob), 0), bb.BACKSIDE = 1, bb.DOUBLESIDE = 2, bb.DEFAULTSIDE = 0, bb._UniqueIdGenerator = 0, bb
    })()
  },
  39940: (bb, ub, hb) => {
    var Bb = hb(36727),
      Ob = hb(38302),
      Gb = hb(39752),
      Ub = hb(39854),
      Lb = hb(39609);
    const Yb = "bakedVertexAnimationSettingsInstanced";

    function Sb(bb) {
      const ub = bb.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return ub instanceof Float32Array || ub instanceof Uint16Array
    }

    function ab(bb, ub, hb, Bb) {
      hb.N9(Number.POSITIVE_INFINITY), Bb.N9(Number.NEGATIVE_INFINITY);
      for (let Ob = 0; Ob < 3 * ub; Ob += 3) {
        const ub = bb[Ob],
          Gb = bb[Ob + 1],
          Ub = bb[Ob + 2];
        ub < hb.x && (hb.x = ub), Gb < hb.y && (hb.y = Gb), Ub < hb.z && (hb.z = Ub), ub > Bb.x && (Bb.x = ub), Gb > Bb.y && (Bb.y = Gb), Ub > Bb.z && (Bb.z = Ub)
      }
    }

    function Hb(bb, ub, hb) {
      hb && (bb.x -= bb.x * hb.x + hb.y, bb.y -= bb.y * hb.x + hb.y, bb.z -= bb.z * hb.x + hb.y, ub.x += ub.x * hb.x + hb.y, ub.y += ub.y * hb.x + hb.y, ub.z += ub.z * hb.x + hb.y)
    }

    function wb(bb, ub, hb, Ob, Gb) {
      const Ub = Bb.i.YX[7],
        Lb = Bb.i.YX[8];
      for (let Yb = 0; Yb < 2; ++Yb)
        for (let Sb = 0; Sb < 2; ++Sb)
          for (let ab = 0; ab < 2; ++ab) Ub.set(Yb ? ub.x : bb.x, Sb ? ub.y : bb.y, ab ? ub.z : bb.z), Bb.q.TransformCoordinatesToRef(Ub, hb, Lb), Ob.minimizeInPlace(Lb), Gb.maximizeInPlace(Lb)
    }

    function Zb(bb, ub, hb, Ob, Gb) {
      const Ub = Bb.i.YX[7];
      for (let Lb = 0; Lb < 3 * ub; Lb += 3) Bb.q.TransformCoordinatesFromFloatsToRef(bb[Lb], bb[Lb + 1], bb[Lb + 2], hb, Ub), Ob.minimizeInPlace(Ub), Gb.maximizeInPlace(Ub)
    }
    let Xb = !1;
    Xb || (Xb = !0, Ub.c.prototype.thinInstanceAdd = function(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.ZN().UX().getCaps().instancedArrays) return Ob.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(bb) ? bb.length : 1);
      const hb = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(bb))
        for (let Bb = 0; Bb < bb.length; ++Bb) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb[Bb], Bb === bb.length - 1 && ub);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb, ub);
      return hb
    }, Ub.c.prototype.thinInstanceAddSelf = function() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Bb.d.IdentityReadOnly, bb)
    }, Ub.c.prototype.thinInstanceRegisterAttribute = function(bb, ub) {
      bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), this.removeVerticesData(bb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[bb] = ub, this._userThinInstanceBuffersStorage.sizes[bb] = ub * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[bb] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[bb]), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Lb.i(this.UX(), this._userThinInstanceBuffersStorage.data[bb], bb, !0, !1, ub, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb])
    }, Ub.c.prototype.thinInstanceSetMatrixAt = function(bb, ub) {
      let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || bb >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Bb = this._thinInstanceDataStorage.matrixData;
      return ub.copyToArray(Bb, 16 * bb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[bb] = ub), hb && (this.A_("matrix"), this.aX || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Ub.c.prototype.thinInstanceSetAttributeAt = function(bb, ub, hb) {
      let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[bb] || ub >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(bb, 0), this._userThinInstanceBuffersStorage.data[bb].set(hb, ub * this._userThinInstanceBuffersStorage.strides[bb]), Bb && this.A_(bb), !0)
    }, Object.defineProperty(Ub.c.prototype, "W4", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(bb) {
        const ub = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        bb <= (ub ? ub.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = bb)
      },
      enumerable: !0,
      configurable: !0
    }), Ub.c.prototype._thinInstanceCreateMatrixBuffer = function(bb, ub) {
      let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Bb = new Lb.b(this.UX(), ub, !hb, 16, !1, !0);
      for (let Ob = 0; Ob < 4; Ob++) this.setVerticesBuffer(Bb.createVertexBuffer(bb + Ob, 4 * Ob, 4));
      return Bb
    }, Ub.c.prototype.x_ = function(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (hb = hb || 16, "matrix" === bb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ub ? ub.length : 32 * hb, this._thinInstanceDataStorage.matrixData = ub, this._thinInstanceDataStorage.worldMatrices = null, null !== ub ? (this._thinInstanceDataStorage.instancesCount = ub.length / hb, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ub, Bb), this.aX || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.aX || this.refreshBoundingInfo());
      else if ("previousMatrix" === bb) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ub, null !== ub && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ub, Bb));
      else if ("splatIndex" === bb && ub) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ub.length / hb, this._userThinInstanceBuffersStorage.data[bb] = ub, this._userThinInstanceBuffersStorage.strides[bb] = hb, this._userThinInstanceBuffersStorage.sizes[bb] = ub.length;
        const Bb = new Lb.b(this.UX(), ub, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Bb;
        for (let ub = 0; ub < 4; ub++) this.setVerticesBuffer(Bb.createVertexBuffer(bb + ub, 4 * ub, 4))
      } else bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), null === ub ? this._userThinInstanceBuffersStorage?.data[bb] && (this.removeVerticesData(bb), delete this._userThinInstanceBuffersStorage.data[bb], delete this._userThinInstanceBuffersStorage.strides[bb], delete this._userThinInstanceBuffersStorage.sizes[bb], delete this._userThinInstanceBuffersStorage.vertexBuffers[bb]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[bb] = ub, this._userThinInstanceBuffersStorage.strides[bb] = hb, this._userThinInstanceBuffersStorage.sizes[bb] = ub.length, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Lb.i(this.UX(), ub, bb, !Bb, !1, hb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Ub.c.prototype.A_ = function(bb) {
      "matrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === bb ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0, this._thinInstanceDataStorage.instancesCount) : (bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[bb].isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0)))
    }, Ub.c.prototype.thinInstancePartialBufferUpdate = function(bb, ub, hb) {
      if ("matrix" === bb) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ub ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * hb * Float32Array.BYTES_PER_ELEMENT, 16 * ub), 16 * hb) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(ub, hb));
      else if (bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb]) {
        const Bb = this._userThinInstanceBuffersStorage.vertexBuffers[bb];
        if ("number" === typeof ub) {
          const Bb = new Float32Array(this._userThinInstanceBuffersStorage.data[bb].buffer, this._userThinInstanceBuffersStorage.data[bb].byteOffset + hb * this._userThinInstanceBuffersStorage.strides[bb] * Float32Array.BYTES_PER_ELEMENT, ub * this._userThinInstanceBuffersStorage.strides[bb]);
          this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(Bb, hb * this._userThinInstanceBuffersStorage.strides[bb])
        } else Bb.updateDirectly(ub, hb)
      }
    }, Ub.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const bb = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let ub = 0; ub < this._thinInstanceDataStorage.instancesCount; ++ub) this._thinInstanceDataStorage.worldMatrices[ub] = Bb.d.FromArray(bb, 16 * ub)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Ub.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Ub = this._thinInstanceDataStorage.boundingVectors;
      if (bb || !this.rawBoundingInfo) {
        if (Ub.length = 0, Ob && function(bb, ub, hb) {
            const Ob = bb._userThinInstanceBuffersStorage,
              Ub = Ob?.data[Yb],
              Xb = Ob?.strides[Yb];
            if (!Ub || !Xb || Xb < 4 || !Sb(bb)) return !1;
            const pb = bb._thinInstanceDataStorage.matrixData;
            if (!pb) return !1;
            const ob = {},
              Ab = Bb.i.Vector4[0],
              lb = Bb.i.YX[1],
              Kb = Bb.i.YX[2],
              Wb = Bb.i.YX[3],
              Cb = Bb.i.YX[4],
              db = Bb.i.YX[5],
              rb = Bb.i.YX[6],
              jb = Bb.i.Matrix[2],
              nb = bb.geometry ? bb.geometry.boundingBias : null,
              Db = bb.getTotalVertices();
            lb.N9(Number.POSITIVE_INFINITY), Kb.N9(Number.NEGATIVE_INFINITY), Wb.N9(Number.POSITIVE_INFINITY), Cb.N9(Number.NEGATIVE_INFINITY);
            for (let Gb = 0; Gb < bb._thinInstanceDataStorage.instancesCount; ++Gb) {
              const ub = Gb * Xb;
              Ab.set(Ub[ub], Ub[ub + 1], Ub[ub + 2], Ub[ub + 3]);
              const Ob = bb._getData({
                applyMorph: hb,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Ab,
                updatePositionsArray: !1,
                cache: ob
              }, null, Lb.i.PositionKind);
              if (!Ob) return !1;
              ab(Ob, Db, db, rb), Hb(db, rb, nb), lb.minimizeInPlace(db), Kb.maximizeInPlace(rb), Bb.d.FromArrayToRef(pb, 16 * Gb, jb), nb ? wb(db, rb, jb, Wb, Cb) : Zb(Ob, Db, jb, Wb, Cb)
            }
            return !(!isFinite(lb.x) || !isFinite(Wb.x)) && (bb.XM().reConstruct(Wb, Cb), bb.rawBoundingInfo = new Gb.e(lb, Kb), function(bb, ub) {
              bb.length = 0;
              for (let hb = 0; hb < ub.boundingBox.vectors.length; ++hb) bb.push(ub.boundingBox.vectors[hb].clone())
            }(ub, bb.rawBoundingInfo), bb._updateBoundingInfo(), !0)
          }(this, Ub, hb)) return;
        Ob && this.bakedVertexAnimationManager?.isEnabled && Sb(this) ? this.refreshBoundingInfo({
          applySkeleton: ub,
          applyMorph: hb,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(ub, hb);
        const bb = this.XM();
        this.rawBoundingInfo = new Gb.e(bb.minimum, bb.maximum)
      }
      const Xb = this.XM(),
        pb = this._thinInstanceDataStorage.matrixData;
      if (0 === Ub.length)
        for (let Bb = 0; Bb < Xb.boundingBox.vectors.length; ++Bb) Ub.push(Xb.boundingBox.vectors[Bb].clone());
      Bb.i.YX[0].N9(Number.POSITIVE_INFINITY), Bb.i.YX[1].N9(Number.NEGATIVE_INFINITY);
      for (let Gb = 0; Gb < this._thinInstanceDataStorage.instancesCount; ++Gb) {
        Bb.d.FromArrayToRef(pb, 16 * Gb, Bb.i.Matrix[0]);
        for (let bb = 0; bb < Ub.length; ++bb) Bb.q.TransformCoordinatesToRef(Ub[bb], Bb.i.Matrix[0], Bb.i.YX[2]), Bb.i.YX[0].minimizeInPlace(Bb.i.YX[2]), Bb.i.YX[1].maximizeInPlace(Bb.i.YX[2])
      }
      Xb.reConstruct(Bb.i.YX[0], Bb.i.YX[1]), this._updateBoundingInfo()
    }, Ub.c.prototype._thinInstanceRecreateBuffer = function(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === bb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ub)) : "previousMatrix" === bb ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, ub)) : (bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Lb.i(this.UX(), this._userThinInstanceBuffersStorage.data[bb], bb, !ub, !1, this._userThinInstanceBuffersStorage.strides[bb], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Ub.c.prototype._thinInstanceUpdateBufferSize = function(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      bb === Lb.i.ColorKind && (bb = Lb.i.ColorInstanceKind);
      const hb = "matrix" === bb;
      if (!hb && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[bb])) return;
      const Bb = hb ? 16 : this._userThinInstanceBuffersStorage.strides[bb],
        Ob = hb ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[bb];
      let Gb = hb ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[bb];
      const Ub = (this._thinInstanceDataStorage.instancesCount + ub) * Bb;
      let Yb = Ob;
      for (; Yb < Ub;) Yb *= 2;
      if (!Gb || Ob != Yb) {
        if (Gb) {
          const bb = new Float32Array(Yb);
          bb.set(Gb, 0), Gb = bb
        } else Gb = new Float32Array(Yb);
        hb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Gb, !1), this._thinInstanceDataStorage.matrixData = Gb, this._thinInstanceDataStorage.matrixBufferSize = Yb, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Gb, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.data[bb] = Gb, this._userThinInstanceBuffersStorage.sizes[bb] = Yb, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Lb.i(this.UX(), Gb, bb, !0, !1, Bb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
      }
    }, Ub.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Ub.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39892: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb,
      g: () => pb
    });
    var Bb, Ob, Gb, Ub, Lb = hb(39463),
      Yb = hb(39467),
      Sb = hb(39488),
      ab = hb(36753),
      Hb = hb(36727),
      wb = hb(39670),
      Zb = hb(36762),
      Xb = hb(39333);
    let pb = (() => {
      var bb;
      let ub, hb, Bb, Ob, Gb, Ub, Zb, Xb, pb, ob = wb.b,
        Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
        nb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [],
        ib = [],
        vb = [],
        tb = [],
        Jb = [],
        eb = [];
      return bb = class extends ob {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(ub) {
          this._billboardMode !== ub && (this._billboardMode = ub, this._cache.useBillboardPosition = 0 !== (this._billboardMode & bb.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(bb) {
          this._infiniteDistance !== bb && (this._infiniteDistance = bb)
        }
        constructor(ub) {
          let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(ub, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Hb.q(0, 0, 1), this._up = new Hb.q(0, 1, 0), this._right = new Hb.q(1, 0, 0), this._position = (0, Lb.k)(this, Ab, Hb.q.Zero()), this._rotation = ((0, Lb.k)(this, lb), (0, Lb.k)(this, Kb, Hb.q.Zero())), this._rotationQuaternion = ((0, Lb.k)(this, Wb), (0, Lb.k)(this, Cb, null)), this._scaling = ((0, Lb.k)(this, db), (0, Lb.k)(this, rb, Hb.q.One())), this._transformToBoneReferal = ((0, Lb.k)(this, jb), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Lb.k)(this, nb, bb.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Lb.k)(this, Db), (0, Lb.k)(this, xb, 1)), this._infiniteDistance = ((0, Lb.k)(this, zb), (0, Lb.k)(this, gb, !1)), this.ignoreNonUniformScaling = ((0, Lb.k)(this, ib), (0, Lb.k)(this, vb, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Lb.k)(this, tb), (0, Lb.k)(this, Jb, !1)), this._poseMatrix = ((0, Lb.k)(this, eb), null), this._localMatrix = Hb.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Hb.q.Zero(), this._absoluteScaling = Hb.q.Zero(), this._absoluteRotationQuaternion = Hb.f.Identity(), this._pivotMatrix = Hb.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new ab.e, this._nonUniformScaling = !1, hb && this.ZN().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(bb) {
          this._position = bb, this._markAsDirtyInternal()
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
        set rotation(bb) {
          this._rotation = bb, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get pa() {
          return this._scaling
        }
        set pa(bb) {
          this._scaling = bb, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(bb) {
          this._rotationQuaternion = bb, bb && this._rotation.N9(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Hb.q.TransformNormalFromFloatsToRef(0, 0, this.ZN().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Hb.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Hb.q.TransformNormalFromFloatsToRef(this.ZN().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(bb) {
          return this._poseMatrix ? (this._poseMatrix.mD(bb), this) : (this._poseMatrix = bb.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Hb.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const ub = this._cache;
          return this._billboardMode === ub.billboardMode && this._billboardMode === bb.BILLBOARDMODE_NONE && (!ub.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const bb = this._cache;
          bb.localMatrixUpdated = !1, bb.billboardMode = -1, bb.infiniteDistance = !1, bb.useBillboardPosition = !1
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
        setPreTransformMatrix(bb) {
          return this.setPivotMatrix(bb, !1)
        }
        setPivotMatrix(bb) {
          let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.mD(bb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ub, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Hb.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            ub = arguments.length > 1 ? arguments[1] : void 0,
            hb = arguments.length > 2 ? arguments[2] : void 0;
          const Bb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0);
          Bb && hb && hb(this, Bb);
          for (const Ob of this.getChildTransformNodes(!0)) Ob.instantiateHierarchy(Bb, ub, hb);
          return Bb
        }
        zN() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.N9(0), this._rotationQuaternion = this._rotationQuaternion || Hb.f.Identity(), bb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = bb, this._absolutePosition.M_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get IUb() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(bb) {
          if (!bb) return this;
          let ub, hb, Bb;
          if (void 0 === bb.x) {
            if (arguments.length < 3) return this;
            ub = arguments[0], hb = arguments[1], Bb = arguments[2]
          } else ub = bb.x, hb = bb.y, Bb = bb.z;
          if (this.parent) {
            const bb = Hb.i.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(bb), Hb.q.TransformCoordinatesFromFloatsToRef(ub, hb, Bb, bb, this.position)
          } else this.position.x = ub, this.position.y = hb, this.position.z = Bb;
          return this._absolutePosition.mD(bb), this
        }
        setPositionWithLocalVector(bb) {
          return this.computeWorldMatrix(), this.position = Hb.q.TransformNormal(bb, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const bb = Hb.i.Matrix[0];
          return this._localMatrix.invertToRef(bb), Hb.q.TransformNormal(this.position, bb)
        }
        locallyTranslate(bb) {
          return this.computeWorldMatrix(!0), this.position = Hb.q.TransformCoordinates(bb, this._localMatrix), this
        }
        lookAt(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Ub = bb._LookAtVectorCache,
            Lb = 0 === Gb ? this.position : this.getAbsolutePosition();
          if (ub.subtractToRef(Lb, Ub), this.setDirection(Ub, hb, Bb, Ob), 1 === Gb && this.parent)
            if (this.rotationQuaternion) {
              const bb = Hb.i.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(bb);
              const ub = Hb.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ub), ub.invert(), bb.multiplyToRef(ub, bb), this.rotationQuaternion.fromRotationMatrix(bb)
            } else {
              const bb = Hb.i.Quaternion[0];
              Hb.f.FromEulerVectorToRef(this.rotation, bb);
              const ub = Hb.i.Matrix[0];
              bb.toRotationMatrix(ub);
              const hb = Hb.i.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(hb), hb.invert(), ub.multiplyToRef(hb, ub), bb.fromRotationMatrix(ub), bb.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Zk(bb) {
          const ub = Hb.q.Zero();
          return this.getDirectionToRef(bb, ub), ub
        }
        getDirectionToRef(bb, ub) {
          return Hb.q.TransformNormalToRef(bb, this.getWorldMatrix(), ub), this
        }
        setDirection(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Ob = -Math.atan2(bb.z, bb.x) + Math.PI / 2,
            Gb = Math.sqrt(bb.x * bb.x + bb.z * bb.z),
            Ub = -Math.atan2(bb.y, Gb);
          return this.rotationQuaternion ? Hb.f.RotationYawPitchRollToRef(Ob + ub, Ub + hb, Bb, this.rotationQuaternion) : (this.rotation.x = Ub + hb, this.rotation.y = Ob + ub, this.rotation.z = Bb), this
        }
        setPivotPoint(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.ZN().getRenderId() && this.computeWorldMatrix(!0);
          const hb = this.getWorldMatrix();
          if (1 == ub) {
            const ub = Hb.i.Matrix[0];
            hb.invertToRef(ub), bb = Hb.q.TransformCoordinates(bb, ub)
          }
          return this.setPivotMatrix(Hb.d.Translation(-bb.x, -bb.y, -bb.z), !0)
        }
        getPivotPoint() {
          const bb = Hb.q.Zero();
          return this.getPivotPointToRef(bb), bb
        }
        getPivotPointToRef(bb) {
          return bb.x = -this._pivotMatrix.m[12], bb.y = -this._pivotMatrix.m[13], bb.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const bb = Hb.q.Zero();
          return this.getAbsolutePivotPointToRef(bb), bb
        }
        getAbsolutePivotPointToRef(bb) {
          return this.getPivotPointToRef(bb), Hb.q.TransformCoordinatesToRef(bb, this.getWorldMatrix(), bb), this
        }
        yub(bb) {
          if (this._isDirty) return this;
          if (this._children)
            for (const ub of this._children) ub.yub(bb);
          return super.yub(bb)
        }
        setParent(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!ub && !this.parent) return this;
          const Ob = Hb.i.Quaternion[0],
            Gb = Hb.i.YX[0],
            Ub = Hb.i.YX[1],
            Lb = Hb.i.Matrix[1];
          Hb.d.IdentityToRef(Lb);
          const Yb = Hb.i.Matrix[0];
          this.computeWorldMatrix(!0);
          let Sb = this.rotationQuaternion;
          return Sb || (Sb = bb._TmpRotation, Hb.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Sb)), Hb.d.ComposeToRef(this.pa, Sb, this.position, Yb), this.parent && Yb.multiplyToRef(this.parent.computeWorldMatrix(!0), Yb), ub && (ub.computeWorldMatrix(!0).invertToRef(Lb), Yb.multiplyToRef(Lb, Yb)), Yb.decompose(Ub, Ob, Gb, hb ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.mD(Ob) : Ob.toEulerAnglesToRef(this.rotation), this.pa.mD(Ub), this.position.mD(Gb), this.parent = ub, Bb && this.setPivotMatrix(Hb.d.Identity()), this
        }
        addChild(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.setParent(this, ub), this
        }
        removeChild(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.parent !== this || bb.setParent(null, ub), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(bb) {
          return this._nonUniformScaling !== bb && (this._nonUniformScaling = bb, !0)
        }
        attachToBone(bb, ub) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = ub, this.parent = bb, bb.getSkeleton().prepare(!0), bb.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = bb ? this._currentParentWhenAttachingToBone : null, this) : (bb && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(ub, hb, Bb) {
          let Ob;
          if (ub.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.N9(0)), Bb && 0 !== Bb) {
            if (this.parent) {
              const bb = this.parent.getWorldMatrix(),
                Bb = Hb.i.Matrix[0];
              bb.invertToRef(Bb), ub = Hb.q.TransformNormal(ub, Bb), bb.determinant() < 0 && (hb *= -1)
            }
            Ob = Hb.f.RotationAxisToRef(ub, hb, bb._RotationAxisCache), Ob.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Ob = Hb.f.RotationAxisToRef(ub, hb, bb._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Ob, this.rotationQuaternion);
          return this
        }
        rotateAround(bb, ub, hb) {
          ub.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Hb.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.N9(0));
          const Bb = Hb.i.YX[0],
            Ob = Hb.i.YX[1],
            Gb = Hb.i.YX[2],
            Ub = Hb.i.Quaternion[0],
            Lb = Hb.i.Matrix[0],
            Yb = Hb.i.Matrix[1],
            Sb = Hb.i.Matrix[2],
            ab = Hb.i.Matrix[3];
          return bb.subtractToRef(this.position, Bb), Hb.d.TranslationToRef(Bb.x, Bb.y, Bb.z, Lb), Hb.d.TranslationToRef(-Bb.x, -Bb.y, -Bb.z, Yb), Hb.d.RotationAxisToRef(ub, hb, Sb), Yb.multiplyToRef(Sb, ab), ab.multiplyToRef(Lb, ab), ab.decompose(Ob, Ub, Gb), this.position.addInPlace(Gb), Ub.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(bb, ub, hb) {
          const Bb = bb.scale(ub);
          if (hb && 0 !== hb) this.setAbsolutePosition(this.getAbsolutePosition().add(Bb));
          else {
            const bb = this.getPositionExpressedInLocalSpace().add(Bb);
            this.setPositionWithLocalVector(bb)
          }
          return this
        }
        addRotation(bb, ub, hb) {
          let Bb;
          this.rotationQuaternion ? Bb = this.rotationQuaternion : (Bb = Hb.i.Quaternion[1], Hb.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Bb));
          const Ob = Hb.i.Quaternion[0];
          return Hb.f.RotationYawPitchRollToRef(ub, bb, hb, Ob), Bb.multiplyInPlace(Ob), this.rotationQuaternion || Bb.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== bb.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Bb = this.ZN().getRenderId();
          if (!this._isDirty && !ub && (this._currentRenderId === Bb || this.isSynchronized())) return this._currentRenderId = Bb, this._worldMatrix;
          hb = hb || this.ZN().activeCamera, this._updateCache();
          const Ob = this._cache;
          Ob.pivotMatrixUpdated = !1, Ob.billboardMode = this.billboardMode, Ob.infiniteDistance = this.infiniteDistance, Ob.parent = this._parentNode, this._currentRenderId = Bb, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Gb = this._getEffectiveParent(),
            Ub = bb._TmpScaling;
          let Lb, Yb = this._position;
          if (this._infiniteDistance && !this.parent && hb) {
            const ub = hb.getWorldMatrix().m;
            Yb = bb._TmpTranslation, Yb.M_(this._position.x + ub[12], this._position.y + ub[13], this._position.z + ub[14])
          }
          if (Ub.M_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Lb = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Hb.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.M_(0, 0, 0))
            }
          } else Lb = bb._TmpRotation, Hb.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Lb);
          if (this._usePivotMatrix) {
            const bb = Hb.i.Matrix[1];
            Hb.d.ScalingToRef(Ub.x, Ub.y, Ub.z, bb);
            const ub = Hb.i.Matrix[0];
            Lb.toRotationMatrix(ub), this._pivotMatrix.multiplyToRef(bb, Hb.i.Matrix[4]), Hb.i.Matrix[4].multiplyToRef(ub, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Yb.x, Yb.y, Yb.z)
          } else Hb.d.ComposeToRef(Ub, Lb, Yb, this._localMatrix);
          if (Gb && Gb.getWorldMatrix) {
            if (ub && Gb.computeWorldMatrix(ub), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const bb = this.parent;
                bb.getSkeleton().prepare(), bb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Hb.i.Matrix[7])
              } else Hb.i.Matrix[7].mD(Gb.getWorldMatrix());
              const ub = Hb.i.YX[5],
                hb = Hb.i.YX[6],
                Bb = Hb.i.Quaternion[0];
              Hb.i.Matrix[7].decompose(hb, Bb, ub), Hb.d.ScalingToRef(hb.x, hb.y, hb.z, Hb.i.Matrix[7]), Hb.i.Matrix[7].setTranslation(ub), bb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Bb, ub), this._localMatrix.setTranslation(ub)), this._localMatrix.multiplyToRef(Hb.i.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const bb = this.parent;
              bb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(bb.getFinalMatrix(), Hb.i.Matrix[6]), Hb.i.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Gb.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.mD(this._localMatrix);
          if (hb && this.billboardMode)
            if (Ob.useBillboardPosition) {
              const ub = Hb.i.YX[0];
              this._worldMatrix.getTranslationToRef(ub);
              const Bb = hb.globalPosition;
              this._worldMatrix.invertToRef(Hb.i.Matrix[1]);
              const Ob = Hb.i.YX[1];
              Hb.q.TransformCoordinatesToRef(Bb, Hb.i.Matrix[1], Ob), Ob.normalize();
              const Gb = -Math.atan2(Ob.z, Ob.x) + Math.PI / 2,
                Ub = Math.sqrt(Ob.x * Ob.x + Ob.z * Ob.z),
                Lb = -Math.atan2(Ob.y, Ub);
              if (Hb.f.RotationYawPitchRollToRef(Gb, Lb, 0, Hb.i.Quaternion[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                const ub = Hb.i.YX[1];
                Hb.i.Quaternion[0].toEulerAnglesToRef(ub), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (ub.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (ub.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (ub.z = 0), Hb.d.RotationYawPitchRollToRef(ub.y, ub.x, ub.z, Hb.i.Matrix[0])
              } else Hb.d.FromQuaternionToRef(Hb.i.Quaternion[0], Hb.i.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Hb.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Hb.i.YX[0])
            } else {
              const ub = Hb.i.YX[0];
              this._worldMatrix.getTranslationToRef(ub), Hb.i.Matrix[1].mD(hb.getViewMatrix());
              const Bb = this.ZN().useRightHandedSystem;
              if (Bb && Hb.i.Matrix[1].multiplyToRef(bb._TmpRHRestore, Hb.i.Matrix[1]), Hb.i.Matrix[1].setTranslationFromFloats(0, 0, 0), Hb.i.Matrix[1].invertToRef(Hb.i.Matrix[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                Hb.i.Matrix[0].decompose(void 0, Hb.i.Quaternion[0], void 0);
                const ub = Hb.i.YX[1];
                Hb.i.Quaternion[0].toEulerAnglesToRef(ub), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (ub.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (ub.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (ub.z = 0), Bb && (ub.y += Math.PI), Hb.d.RotationYawPitchRollToRef(ub.y, ub.x, ub.z, Hb.i.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Hb.i.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Hb.i.YX[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Gb && Gb._nonUniformScaling ? this._updateNonUniformScalingState(Gb._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.M_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Hb.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), bb) {
            const bb = this.getChildren();
            for (let ub = 0; ub < bb.length; ++ub) {
              const hb = bb[ub];
              if (hb) {
                hb.computeWorldMatrix();
                const bb = Hb.i.Matrix[0];
                hb._localMatrix.multiplyToRef(this._localMatrix, bb);
                const ub = Hb.i.Quaternion[0];
                bb.decompose(hb.pa, ub, hb.position), hb.rotationQuaternion ? hb.rotationQuaternion.mD(ub) : ub.toEulerAnglesToRef(hb.rotation)
              }
            }
          }
          this.pa.M_(1, 1, 1), this.position.M_(0, 0, 0), this.rotation.M_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Hb.f.Identity()), this._worldMatrix = Hb.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(bb) {
          return this.onAfterWorldMatrixUpdateObservable.add(bb), this
        }
        unregisterAfterWorldMatrixUpdate(bb) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(bb), this
        }
        getPositionInCameraSpace() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb || (bb = this.ZN().activeCamera), Hb.q.TransformCoordinates(this.getAbsolutePosition(), bb.getViewMatrix())
        }
        getDistanceToCamera() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb || (bb = this.ZN().activeCamera), this.getAbsolutePosition().subtract(bb.globalPosition).length()
        }
        clone(ub, hb, Bb) {
          const Ob = Sb.c.Clone((() => new bb(ub, this.ZN())), this);
          if (Ob.name = ub, Ob.id = ub, hb && (Ob.parent = hb), !Bb) {
            const bb = this.getDescendants(!0);
            for (let hb = 0; hb < bb.length; hb++) {
              const Bb = bb[hb];
              Bb.clone && Bb.clone(ub + "." + Bb.name, Ob)
            }
          }
          return Ob
        }
        serialize(bb) {
          const ub = Sb.c.Serialize(this, bb);
          return ub.type = this.getClassName(), ub.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ub), ub.localMatrix = this.getPivotMatrix().ZBb(), ub.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ub.zN = !0), Sb.c.AppendSerializedAnimations(this, ub), ub.tp = this.serializeAnimationRanges(), ub
        }
        getChildTransformNodes(ub, hb) {
          const Bb = [];
          return this._getDescendants(Bb, ub, (ub => (!hb || hb(ub)) && ub instanceof bb)), Bb
        }
        dispose(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.ZN().stopAnimation(this), this.ZN().removeTransformNode(this), this._parentContainer) {
            const bb = this._parentContainer.transformNodes.indexOf(this);
            bb > -1 && this._parentContainer.transformNodes.splice(bb, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), bb) {
            const bb = this.getChildTransformNodes(!0);
            for (const ub of bb) ub.parent = null, ub.computeWorldMatrix(!0)
          }
          super.dispose(bb, ub)
        }
        normalizeToUnitCube() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hb = arguments.length > 2 ? arguments[2] : void 0,
            Bb = null,
            Ob = null;
          ub && (this.rotationQuaternion ? (Ob = this.rotationQuaternion.clone(), this.rotationQuaternion.M_(0, 0, 0, 1)) : this.rotation && (Bb = this.rotation.clone(), this.rotation.M_(0, 0, 0)));
          const Gb = this.getHierarchyBoundingVectors(bb, hb),
            Ub = Gb.max.subtract(Gb.min),
            Lb = Math.max(Ub.x, Ub.y, Ub.z);
          if (0 === Lb) return this;
          const Yb = 1 / Lb;
          return this.pa.scaleInPlace(Yb), ub && (this.rotationQuaternion && Ob ? this.rotationQuaternion.mD(Ob) : this.rotation && Bb && this.rotation.mD(Bb)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ob[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Yb.H)("position")], hb = [(0, Yb.H)("rotation")], Bb = [(0, Yb.A)("rotationQuaternion")], Ob = [(0, Yb.H)("pa")], Gb = [(0, Yb.K)("billboardMode")], Ub = [(0, Yb.K)()], Zb = [(0, Yb.K)("infiniteDistance")], Xb = [(0, Yb.K)()], pb = [(0, Yb.K)()], (0, Lb.h)(null, null, ub, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, ub) => {
              bb._position = ub
            }
          },
          metadata: Sb
        }, Ab, lb), (0, Lb.h)(null, null, hb, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotation" in bb,
            get: bb => bb._rotation,
            set: (bb, ub) => {
              bb._rotation = ub
            }
          },
          metadata: Sb
        }, Kb, Wb), (0, Lb.h)(null, null, Bb, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotationQuaternion" in bb,
            get: bb => bb._rotationQuaternion,
            set: (bb, ub) => {
              bb._rotationQuaternion = ub
            }
          },
          metadata: Sb
        }, Cb, db), (0, Lb.h)(null, null, Ob, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scaling" in bb,
            get: bb => bb._scaling,
            set: (bb, ub) => {
              bb._scaling = ub
            }
          },
          metadata: Sb
        }, rb, jb), (0, Lb.h)(null, null, Gb, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_billboardMode" in bb,
            get: bb => bb._billboardMode,
            set: (bb, ub) => {
              bb._billboardMode = ub
            }
          },
          metadata: Sb
        }, nb, Db), (0, Lb.h)(null, null, Ub, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: bb => "scalingDeterminant" in bb,
            get: bb => bb.scalingDeterminant,
            set: (bb, ub) => {
              bb.scalingDeterminant = ub
            }
          },
          metadata: Sb
        }, xb, zb), (0, Lb.h)(null, null, Zb, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "_infiniteDistance" in bb,
            get: bb => bb._infiniteDistance,
            set: (bb, ub) => {
              bb._infiniteDistance = ub
            }
          },
          metadata: Sb
        }, gb, ib), (0, Lb.h)(null, null, Xb, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreNonUniformScaling" in bb,
            get: bb => bb.ignoreNonUniformScaling,
            set: (bb, ub) => {
              bb.ignoreNonUniformScaling = ub
            }
          },
          metadata: Sb
        }, vb, tb), (0, Lb.h)(null, null, pb, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "reIntegrateRotationIntoRotationQuaternion" in bb,
            get: bb => bb.reIntegrateRotationIntoRotationQuaternion,
            set: (bb, ub) => {
              bb.reIntegrateRotationIntoRotationQuaternion = ub
            }
          },
          metadata: Sb
        }, Jb, eb), Sb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sb
        })
      })(), bb.BILLBOARDMODE_NONE = 0, bb.BILLBOARDMODE_X = 1, bb.BILLBOARDMODE_Y = 2, bb.BILLBOARDMODE_Z = 4, bb.BILLBOARDMODE_ALL = 7, bb.BILLBOARDMODE_USE_POSITION = 128, bb.BillboardUseParentOrientation = !1, bb._TmpRotation = Hb.f.Zero(), bb._TmpScaling = Hb.q.Zero(), bb._TmpTranslation = Hb.q.Zero(), bb._TmpRHRestore = Hb.d.Scaling(1, 1, -1), bb._LookAtVectorCache = new Hb.q(0, 0, 0), bb._RotationAxisCache = new Hb.f, bb
    })();

    function ob(bb, ub, hb) {
      const Bb = Sb.c.Parse((() => new pb(bb.name, ub)), bb, ub, hb);
      if (bb.localMatrix ? Bb.setPreTransformMatrix(Hb.d.FromArray(bb.localMatrix)) : bb.pivotMatrix && Bb.setPivotMatrix(Hb.d.FromArray(bb.pivotMatrix)), Bb.Zx(bb.isEnabled), Bb._waitingParsedUniqueId = bb.uniqueId, void 0 !== bb.parentId && (Bb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Bb._waitingParentInstanceIndex = bb.parentInstanceIndex), bb.zN && (Bb._waitingFreezeWorldMatrix = bb.zN), bb.animations) {
        for (let ub = 0; ub < bb.animations.length; ub++) {
          const hb = bb.animations[ub],
            Ob = (0, Zb.d)("BABYLON.Animation");
          Ob && Bb.animations.push(Ob.Parse(hb))
        }
        wb.b.ParseAnimationRanges(Bb, bb, ub)
      }
      return bb.autoAnimate && ub.beginAnimation(Bb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), Bb
    }
    let Ab = !1;

    function lb() {
      Ab || (Ab = !0, pb.Parse = ob)
    }(Bb = pb.prototype).Qq ?? (Bb.Qq = (0, Xb.j)("TransformNode", "Qq")), (Ob = pb.prototype).applyImpulse ?? (Ob.applyImpulse = (0, Xb.j)("TransformNode", "applyImpulse")), (Gb = pb.prototype).applyAngularImpulse ?? (Gb.applyAngularImpulse = (0, Xb.j)("TransformNode", "applyAngularImpulse")), (Ub = pb.prototype).applyTorque ?? (Ub.applyTorque = (0, Xb.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(pb.prototype, "physicsBody") || Object.defineProperty(pb.prototype, "physicsBody", (0, Xb.f)("TransformNode", "physicsBody"))
  },
  39856: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      try {
        const Bb = bb.next();
        Bb.done ? ub(Bb) : Bb.value ? Bb.value.then((() => {
          Bb.value = void 0, ub(Bb)
        }), hb) : ub(Bb)
      } catch (Bb) {
        hb(Bb)
      }
    }

    function Ob() {
      let bb, ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (hb, Ob, Gb) => {
        const Ub = performance.now();
        void 0 === bb || Ub - bb > ub ? (bb = Ub, setTimeout((() => {
          Bb(hb, Ob, Gb)
        }), 0)) : Bb(hb, Ob, Gb)
      }
    }

    function Gb(bb, ub, hb, Bb, Ob) {
      const Gb = () => {
        let Ub;
        const Lb = bb => {
          bb.done ? hb(bb.value) : void 0 === Ub ? Ub = !0 : Gb()
        };
        do {
          Ub = void 0, Ob && Ob.aborted ? Bb(new Error("Aborted")) : ub(bb, Lb, Bb), void 0 === Ub && (Ub = !1)
        } while (Ub)
      };
      Gb()
    }

    function Ub(bb, ub) {
      let hb;
      return Gb(bb, Bb, (bb => hb = bb), (bb => {
        throw bb
      }), ub), hb
    }
    async function Lb(bb, ub, hb) {
      return await new Promise(((Bb, Ob) => {
        Gb(bb, ub, Bb, Ob, hb)
      }))
    }

    function Yb(bb, ub) {
      return function() {
        return Ub(bb(...arguments), ub)
      }
    }
    hb.d(ub, {
      e: () => Ob,
      i: () => Yb,
      j: () => Lb,
      k: () => Ub
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);