export const id = 241;
export const ids = [241];
export const modules = {
  39310: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => kb,
      e: () => Db
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(39205),
      Eb = Ub(36431),
      Yb = Ub(36401),
      Bb = Ub(39314),
      eb = Ub(37989),
      vb = Ub(36447),
      Lb = Ub(38982),
      Pb = Ub(37429),
      Xb = Ub(37113),
      jb = Ub(39061),
      Rb = Ub(39124);
    let kb = (() => {
      var bb;
      let ab, Ub, vb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb = Bb.c,
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
      return bb = class extends Fb {
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
          let ab, Ub;
          if (this.mode === bb.PERSPECTIVE_CAMERA) this.fovMode === bb.FOVMODE_VERTICAL_FIXED ? (Ub = 2 * this.minZ * Math.tan(this.fov / 2), ab = this.vj().getAspectRatio(this) * Ub) : (ab = 2 * this.minZ * Math.tan(this.fov / 2), Ub = ab / this.vj().getAspectRatio(this));
          else {
            const bb = this.vj().getRenderWidth() / 2,
              Ab = this.vj().getRenderHeight() / 2;
            ab = (this.orthoRight ?? bb) - (this.orthoLeft ?? -bb), Ub = (this.orthoTop ?? Ab) - (this.orthoBottom ?? -Ab)
          }
          return ab * Ub
        }
        set orthoLeft(bb) {
          this._orthoLeft = bb;
          for (const ab of this._rigCameras) ab.orthoLeft = bb
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(bb) {
          this._orthoRight = bb;
          for (const ab of this._rigCameras) ab.orthoRight = bb
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(bb) {
          this._orthoBottom = bb;
          for (const ab of this._rigCameras) ab.orthoBottom = bb
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(bb) {
          this._orthoTop = bb;
          for (const ab of this._rigCameras) ab.orthoTop = bb
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(ab / (2 * bb))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(bb) {
          this._baseInertia = bb
        }
        set mode(bb) {
          this._mode = bb;
          for (const ab of this._rigCameras) ab.mode = bb
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(ab, Ub, Mb) {
          let Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, jb.d)(), super(ab, Mb, !1), this.inputs = (0, Ab.k)(this, hb), this._position = (0, Ab.k)(this, Gb, Yb.m.Zero()), this._upVector = ((0, Ab.k)(this, Qb), (0, Ab.k)(this, qb, Yb.m.Up())), this.oblique = ((0, Ab.k)(this, ub), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Ab.k)(this, rb, .8), this.projectionPlaneTilt = ((0, Ab.k)(this, Kb), (0, Ab.k)(this, ob, 0)), this.minZ = ((0, Ab.k)(this, lb), (0, Ab.k)(this, tb, 1)), this.maxZ = ((0, Ab.k)(this, wb), (0, Ab.k)(this, sb, 1e4)), this._baseInertia = ((0, Ab.k)(this, gb), .9), this._mode = bb.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Pb.b(0, 0, 1, 1), this.layerMask = (0, Ab.k)(this, Cb, 268435455), this.fovMode = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, bb.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Ab.k)(this, cb), (0, Ab.k)(this, Jb, bb.RIG_MODE_NONE)), this.interaxialDistance = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, void 0)), this.isStereoscopicSideBySide = ((0, Ab.k)(this, ba), (0, Ab.k)(this, aa, void 0)), this.ignoreCameraMaxZ = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, !1)), this.customRenderTargets = ((0, Ab.k)(this, Ma), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Eb.b, this.onProjectionMatrixChangedObservable = new Eb.b, this.onAfterCheckInputsObservable = new Eb.b, this.onRestoreStateObservable = new Eb.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Yb.b, this._postProcesses = new Array, this._activeMeshes = new Tb.h(256), this._globalPosition = Yb.m.Zero(), this._computedViewMatrix = Yb.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Yb.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Yb.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.oN().defaultCameraLayerMask, this.oN().addCamera(this), Bb && !this.oN().activeCamera && (this.oN().activeCamera = this), this.position = Ub, this.renderPassId = this.oN().vj().createRenderPassId(`Camera ${ab}`)
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
          return "ek"
        }
        toString(bb) {
          let ab = "Name: " + this.name;
          if (ab += ", type: " + this.getClassName(), this.animations)
            for (let Ub = 0; Ub < this.animations.length; Ub++) ab += ", animation[0]: " + this.animations[Ub].toString(bb);
          return ab
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
            for (const ab of this._postProcesses)
              if (ab && !ab.isReady()) return !1;
          return super.isReady(bb)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Yb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Yb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(bb) {
          bb || super._updateCache(), this._cache.position.EUb(this.position), this._cache.upVector.EUb(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const ab = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Ub = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === ab;
          if (!Ub) return !1;
          const Ab = this.vj();
          return this.mode === bb.PERSPECTIVE_CAMERA ? Ub = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Ab.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Ub = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Ab.getRenderWidth() && this._cache.renderHeight === Ab.getRenderHeight(), this.oblique && (Ub = Ub && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Ub
        }
        attachControl(bb, ab) {}
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
          for (let ab = 0, Ub = this._rigCameras.length; ab < Ub; ab++) {
            const bb = this._rigCameras[ab],
              Ub = bb._rigPostProcess;
            if (Ub) {
              "pass" === Ub.getEffectName() && (bb.isIntermediate = 0 === this._postProcesses.length), bb._postProcesses = this._postProcesses.slice(0).concat(Ub), Ub.markTextureDirty()
            } else bb._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !bb.isReusable() && this._postProcesses.indexOf(bb) > -1 ? (eb.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == ab || ab < 0 ? this._postProcesses.push(bb) : null === this._postProcesses[ab] ? this._postProcesses[ab] = bb : this._postProcesses.splice(ab, 0, bb), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.Aab(), this._postProcesses.indexOf(bb))
        }
        detachPostProcess(bb) {
          const ab = this._postProcesses.indexOf(bb); - 1 !== ab && (this._postProcesses[ab] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.Aab(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Yb.b.Identity()
        }
        getViewMatrix(bb) {
          return !bb && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.oN().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(bb) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== bb && (this._projectionMatrix = bb)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(ab) {
          if (this._doNotComputeProjectionMatrix || !ab && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Ub = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Ub, this._refreshFrustumPlanes = !0;
          const Ab = this.vj(),
            Mb = this.oN(),
            Tb = Ab.hUb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) {
            let ab;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Ab.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), ab = Mb.useRightHandedSystem ? Yb.b.PerspectiveFovRHToRef : Yb.b.PerspectiveFovLHToRef, ab(this.fov, Ab.getAspectRatio(this), Tb ? Ub : this.minZ, Tb ? this.minZ : Ub, this._projectionMatrix, this.fovMode === bb.FOVMODE_VERTICAL_FIXED, Ab.isNDCHalfZRange, this.projectionPlaneTilt, Tb)
          } else {
            const bb = Ab.getRenderWidth() / 2,
              ab = Ab.getRenderHeight() / 2;
            Mb.useRightHandedSystem ? this.oblique ? Yb.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ab, this.orthoTop ?? ab, Tb ? Ub : this.minZ, Tb ? this.minZ : Ub, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ab.isNDCHalfZRange) : Yb.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ab, this.orthoTop ?? ab, Tb ? Ub : this.minZ, Tb ? this.minZ : Ub, this._projectionMatrix, Ab.isNDCHalfZRange) : this.oblique ? Yb.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ab, this.orthoTop ?? ab, Tb ? Ub : this.minZ, Tb ? this.minZ : Ub, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ab.isNDCHalfZRange) : Yb.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -ab, this.orthoTop ?? ab, Tb ? Ub : this.minZ, Tb ? this.minZ : Ub, this._projectionMatrix, Ab.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Ab.getRenderWidth(), this._cache.renderHeight = Ab.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(bb) {
          return (this.radius || (this.target ? Yb.m.Distance(this.position, this.target) : this.position.length())) + bb
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Xb.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Xb.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), ab && this.rigCameras.length > 0) {
            let ab = !1;
            for (const Ub of this.rigCameras) Ub._updateFrustumPlanes(), ab = ab || bb.isInFrustum(Ub._frustumPlanes);
            return ab
          }
          return bb.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(bb) {
          return this._updateFrustumPlanes(), bb.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Lb.l)("Ray")
        }
        getForwardRayToRef(bb) {
          throw (0, Lb.l)("Ray")
        }
        dispose(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.oN().stopAnimation(this), this.oN().removeCamera(this); this._rigCameras.length > 0;) {
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
              const ab = this._postProcesses[bb];
              ab && ab.dispose(this)
            }
          }
          let Ab = this.customRenderTargets.length;
          for (; --Ab >= 0;) this.customRenderTargets[Ab].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.oN().vj().releaseRenderPassId(this.renderPassId), super.dispose(ab, Ub)
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
        setCameraRigMode(ab, Ub) {
          if (this.cameraRigMode !== ab) {
            for (; this._rigCameras.length > 0;) {
              const bb = this._rigCameras.pop();
              bb && bb.dispose()
            }
            if (this.cameraRigMode = ab, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Ub.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== bb.RIG_MODE_NONE) {
              const bb = this.createRigCamera(this.name + "_L", 0);
              bb && (bb._isLeftCamera = !0);
              const ab = this.createRigCamera(this.name + "_R", 1);
              ab && (ab._isRightCamera = !0), bb && ab && (this._rigCameras.push(bb), this._rigCameras.push(ab))
            }
            this._setRigMode(Ub), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(bb) {}
        _getVRProjectionMatrix() {
          return Yb.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.vj().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(bb, ab) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[bb] = ab, "interaxialDistance" === bb && (this._cameraRigParams.stereoHalfAngle = ab / .0637 * (Math.PI / 180))
        }
        createRigCamera(bb, ab) {
          return null
        }
        _updateRigCameras() {
          for (let bb = 0; bb < this._rigCameras.length; bb++) this._rigCameras[bb].minZ = this.minZ, this._rigCameras[bb].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[bb].fov = this.fov, this._rigCameras[bb].upVector.EUb(this.upVector);
          this.cameraRigMode === bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const bb = Rb.b.Serialize(this);
          return bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), this.parent && this.parent._serializeAsParent(bb), this.inputs && this.inputs.serialize(bb), Rb.b.AppendSerializedAnimations(this, bb), bb.cj = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        clone(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ab = Rb.b.Clone(bb.GetConstructorFromName(this.getClassName(), ab, this.oN(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Ab.name = ab, Ab.parent = Ub, this.onClonedObservable.notifyObservers(Ab), Ab
        }
        YC(bb) {
          const ab = Yb.m.Zero();
          return this.getDirectionToRef(bb, ab), ab
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(bb, ab) {
          Yb.m.TransformNormalToRef(bb, this.getWorldMatrix(), ab)
        }
        static GetConstructorFromName(ab, Ub, Ab) {
          let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Eb = Bb.c.Construct(ab, Ub, Ab, {
            interaxial_distance: Mb,
            isStereoscopicSideBySide: Tb
          });
          return Eb || (() => bb._CreateDefaultParsedCamera(Ub, Ab))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let bb = this.oN().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (bb *= -1), bb
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Mb.I)("position")], Ub = [(0, Mb.I)("upVector")], vb = [(0, Mb.K)()], kb = [(0, Mb.K)()], yb = [(0, Mb.K)()], Zb = [(0, Mb.K)()], Db = [(0, Mb.K)()], zb = [(0, Mb.K)()], xb = [(0, Mb.K)()], ib = [(0, Mb.K)()], fb = [(0, Mb.K)()], mb = [(0, Mb.K)()], pb = [(0, Mb.K)()], Nb = [(0, Mb.K)()], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], db = [(0, Mb.K)()], (0, Ab.h)(bb, null, vb, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoLeft" in bb,
            get: bb => bb.orthoLeft
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(bb, null, kb, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoRight" in bb,
            get: bb => bb.orthoRight
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(bb, null, yb, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoBottom" in bb,
            get: bb => bb.orthoBottom
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(bb, null, Zb, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoTop" in bb,
            get: bb => bb.orthoTop
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(bb, null, fb, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: bb => "inertia" in bb,
            get: bb => bb.inertia
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(bb, null, mb, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: bb => "mode" in bb,
            get: bb => bb.mode
          },
          metadata: Tb
        }, null, hb), (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, ab) => {
              bb._position = ab
            }
          },
          metadata: Tb
        }, Gb, Qb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: bb => "_upVector" in bb,
            get: bb => bb._upVector,
            set: (bb, ab) => {
              bb._upVector = ab
            }
          },
          metadata: Tb
        }, qb, ub), (0, Ab.h)(null, null, Db, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: bb => "fov" in bb,
            get: bb => bb.fov,
            set: (bb, ab) => {
              bb.fov = ab
            }
          },
          metadata: Tb
        }, rb, Kb), (0, Ab.h)(null, null, zb, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: bb => "projectionPlaneTilt" in bb,
            get: bb => bb.projectionPlaneTilt,
            set: (bb, ab) => {
              bb.projectionPlaneTilt = ab
            }
          },
          metadata: Tb
        }, ob, lb), (0, Ab.h)(null, null, xb, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "minZ" in bb,
            get: bb => bb.minZ,
            set: (bb, ab) => {
              bb.minZ = ab
            }
          },
          metadata: Tb
        }, tb, wb), (0, Ab.h)(null, null, ib, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxZ" in bb,
            get: bb => bb.maxZ,
            set: (bb, ab) => {
              bb.maxZ = ab
            }
          },
          metadata: Tb
        }, sb, gb), (0, Ab.h)(null, null, pb, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "layerMask" in bb,
            get: bb => bb.layerMask,
            set: (bb, ab) => {
              bb.layerMask = ab
            }
          },
          metadata: Tb
        }, Cb, Vb), (0, Ab.h)(null, null, Nb, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fovMode" in bb,
            get: bb => bb.fovMode,
            set: (bb, ab) => {
              bb.fovMode = ab
            }
          },
          metadata: Tb
        }, Ob, cb), (0, Ab.h)(null, null, Wb, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraRigMode" in bb,
            get: bb => bb.cameraRigMode,
            set: (bb, ab) => {
              bb.cameraRigMode = ab
            }
          },
          metadata: Tb
        }, Jb, nb), (0, Ab.h)(null, null, Hb, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "interaxialDistance" in bb,
            get: bb => bb.interaxialDistance,
            set: (bb, ab) => {
              bb.interaxialDistance = ab
            }
          },
          metadata: Tb
        }, Sb, ba), (0, Ab.h)(null, null, Ib, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: bb => "isStereoscopicSideBySide" in bb,
            get: bb => bb.isStereoscopicSideBySide,
            set: (bb, ab) => {
              bb.isStereoscopicSideBySide = ab
            }
          },
          metadata: Tb
        }, aa, Ua), (0, Ab.h)(null, null, db, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreCameraMaxZ" in bb,
            get: bb => bb.ignoreCameraMaxZ,
            set: (bb, ab) => {
              bb.ignoreCameraMaxZ = ab
            }
          },
          metadata: Tb
        }, Aa, Ma), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb._CreateDefaultParsedCamera = (bb, ab) => {
        throw (0, Lb.l)("UniversalCamera")
      }, bb.PERSPECTIVE_CAMERA = 0, bb.ORTHOGRAPHIC_CAMERA = 1, bb.FOVMODE_VERTICAL_FIXED = 0, bb.FOVMODE_HORIZONTAL_FIXED = 1, bb.RIG_MODE_NONE = 0, bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, bb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, bb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, bb.RIG_MODE_VR = 20, bb.RIG_MODE_CUSTOM = 22, bb.ForceAttachControlToAlwaysPreventDefault = !1, bb
    })();

    function yb(bb, ab) {
      const Ub = bb.type,
        Ab = kb.GetConstructorFromName(Ub, bb.name, ab, bb.interaxial_distance, bb.isStereoscopicSideBySide),
        Mb = Rb.b.Parse(Ab, bb, ab);
      if (void 0 !== bb.parentId && (Mb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Mb._waitingParentInstanceIndex = bb.parentInstanceIndex), Mb.inputs && (Mb.inputs.parse(bb), Mb._setupInputs()), bb.upVector && (Mb.upVector = Yb.m.FromArray(bb.upVector)), Mb.setPosition && (Mb.position.K9(0, 0, 0), Mb.setPosition(Yb.m.FromArray(bb.position))), bb.target && Mb.setTarget && Mb.setTarget(Yb.m.FromArray(bb.target)), bb.cameraRigMode) {
        const ab = bb.interaxial_distance ? {
          interaxialDistance: bb.interaxial_distance
        } : {};
        Mb.setCameraRigMode(bb.cameraRigMode, ab)
      }
      if (bb.animations) {
        for (let ab = 0; ab < bb.animations.length; ab++) {
          const Ub = bb.animations[ab],
            Ab = (0, vb.b)("BABYLON.Animation");
          Ab && Mb.animations.push(Ab.Parse(Ub))
        }
        Bb.c.ParseAnimationRanges(Mb, bb, ab)
      }
      return bb.autoAnimate && ab.beginAnimation(Mb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), void 0 !== bb.isEnabled && Mb.Yz(bb.isEnabled), Mb
    }
    let Zb = !1;

    function Db() {
      Zb || (Zb = !0, kb.Parse = yb)
    }
  },
  39331: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub) {
        this._cameraPosition = ab, this._behavior = Ub, this.activeInput = !1, this.speed = 1, this.sK = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Ab.m, this.rotationAccumulatedPixels = new Ab.m, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Ab.m.Zero(), this.rotationDeltaCurrentFrame = Ab.m.Zero(), this._zoomVelocity = 0, this._panVelocity = new Ab.m, this.referenceFrameRate = 60, this._rotationVelocity = new Ab.m, this._prevFrameTimeMs = 0, this._scene = bb
      }
      computeCurrentFrameDeltas() {
        const bb = this._scene.vj().getDeltaTime(),
          ab = this._getEffectiveDeltaMs(bb);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.B3(0), this.rotationDeltaCurrentFrame.B3(0), this.zoomDeltaCurrentFrame = 0, void(bb > 0 && (this._prevFrameTimeMs = bb));
        this.panDeltaCurrentFrame.B3(0), this.rotationDeltaCurrentFrame.B3(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.K9(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * ab, this.panDeltaCurrentFrame), this._rotationVelocity.K9(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.K9(this._rotationVelocity.x * this.speed * this.rotationXSpeed * ab, this._rotationVelocity.y * this.speed * this.rotationYSpeed * ab, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.sK * this._zoomSpeedMultiplier) * ab, bb > 0 && (this._prevFrameTimeMs = bb), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.B3(0), this.rotationAccumulatedPixels.B3(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.B3(0), this.rotationAccumulatedPixels.B3(0)
      }
      resetPanVelocity() {
        this._panVelocity.B3(0), this.panAccumulatedPixels.B3(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(bb) {
        const ab = this._scene.vj().getDeltaTime(),
          Ub = this._getEffectiveDeltaMs(ab),
          Ab = 1e3 / this.referenceFrameRate;
        return Math.pow(bb, Ub / Ab)
      }
      getFrameIndependentInputScale(bb) {
        const ab = 1 - bb;
        if (ab <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(bb)) / ab
      }
      _getEffectiveDeltaMs(bb) {
        return bb > 0 ? bb : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(bb, ab, Ub) {
        let Ab = bb;
        const Mb = this._scene.vj().getDeltaTime(),
          Tb = this._getEffectiveDeltaMs(Mb);
        if (0 === Tb) return Ab;
        const Eb = this.getFrameIndependentDecay(Ub);
        if (Ab *= Eb, 0 !== ab || this.activeInput) {
          const bb = 1 - Ub;
          Ab += ab / Tb * (bb > 0 ? (1 - Eb) / bb : 1)
        } else Math.abs(Ab) < 1e-6 && (Ab = 0);
        return Ab
      }
    }
  },
  39340: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab) {
        this.inputMap = [], this.handlers = bb, this._createDefaultEntries = ab, this.resetInputMap()
      }
      resolveInteraction(bb, ab) {
        for (const Ub of this.inputMap)
          if (Ub.source === bb && this._entryMatches(Ub, ab)) return Ub;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(bb, ab, Ub) {
        const Ab = this.inputMap;
        for (let Mb = 0; Mb < Ab.length; Mb++) {
          const Tb = Ab[Mb];
          if (Tb.source === bb && Tb.interaction === ab && this._entryConditionsMatch(Tb, Ub)) return Tb
        }
      }
      getEntries(bb, ab, Ub) {
        const Ab = [],
          Mb = this.inputMap;
        for (let Tb = 0; Tb < Mb.length; Tb++) {
          const Eb = Mb[Tb];
          Eb.source === bb && Eb.interaction === ab && this._entryConditionsMatch(Eb, Ub) && Ab.push(Eb)
        }
        return Ab
      }
      addEntry(bb) {
        const ab = this._entrySpecificity(bb);
        let Ub = this.inputMap.length;
        for (let Ab = 0; Ab < this.inputMap.length; Ab++)
          if (this._entrySpecificity(this.inputMap[Ab]) < ab) {
            Ub = Ab;
            break
          } this.inputMap.splice(Ub, 0, bb)
      }
      setInteraction(bb, ab, Ub) {
        const Ab = this.resolveInteraction(bb, ab);
        return Ab && this._entryCoversAllConditionsOf(Ab, ab) ? (Ab.interaction = Ub, !0) : (this.addEntry({
          source: bb,
          ...ab ?? {},
          interaction: Ub
        }), !0)
      }
      _entryCoversAllConditionsOf(bb, ab) {
        if (!ab) return !0;
        const Ub = bb;
        for (const Ab of Object.keys(ab)) {
          const bb = ab[Ab];
          if (void 0 !== bb)
            if ("modifiers" === Ab) {
              const ab = Ub.modifiers ?? {};
              for (const Ub of Object.keys(bb))
                if (void 0 !== bb[Ub] && void 0 === ab[Ub]) return !1
            } else if (void 0 === Ub[Ab]) return !1
        }
        return !0
      }
      setInteractions(bb, ab, Ub) {
        let Ab = 0;
        const Mb = this.inputMap;
        for (let Tb = 0; Tb < Mb.length; Tb++) {
          const Eb = Mb[Tb];
          Eb.source === bb && this._entryMatches(Eb, ab) && (Eb.interaction = Ub, Ab++)
        }
        return Ab
      }
      _entryMatches(bb, ab) {
        switch (bb.source) {
          case "pointer":
            return (void 0 === bb.button || bb.button === ab?.button) && this._matchModifiers(bb.modifiers, ab?.modifiers);
          case "wheel":
            return this._matchModifiers(bb.modifiers, ab?.modifiers);
          case "touch":
            return void 0 === bb.touchCount || bb.touchCount === ab?.touchCount;
          case "keyboard":
            return (void 0 === bb.key || (Array.isArray(bb.key) ? -1 !== bb.key.indexOf(ab?.key ?? -1) : bb.key === ab?.key)) && this._matchModifiers(bb.modifiers, ab?.modifiers)
        }
      }
      _entryConditionsMatch(bb, ab) {
        if (!ab) return !0;
        switch (bb.source) {
          case "pointer":
            return (!("button" in ab) || bb.button === ab.button) && (!("modifiers" in ab) || this._entryModifiersMatch(bb.modifiers, ab.modifiers));
          case "wheel":
            return !("modifiers" in ab) || this._entryModifiersMatch(bb.modifiers, ab.modifiers);
          case "touch":
            return !("touchCount" in ab) || bb.touchCount === ab.touchCount;
          case "keyboard":
            if ("key" in ab) {
              if (void 0 === bb.key) return void 0 === ab.key;
              if (void 0 === ab.key || (Array.isArray(bb.key) ? -1 === bb.key.indexOf(ab.key) : bb.key !== ab.key)) return !1
            }
            return !("modifiers" in ab) || this._entryModifiersMatch(bb.modifiers, ab.modifiers)
        }
      }
      _entrySpecificity(bb) {
        let ab = 0;
        return "button" in bb && void 0 !== bb.button && ab++, "key" in bb && void 0 !== bb.key && ab++, "touchCount" in bb && void 0 !== bb.touchCount && ab++, "modifiers" in bb && bb.modifiers && ab++, ab
      }
      _matchModifiers(bb, ab) {
        return !bb || (void 0 === bb.ctrl || bb.ctrl === (ab?.ctrl ?? !1)) && ((void 0 === bb.shift || bb.shift === (ab?.shift ?? !1)) && (void 0 === bb.alt || bb.alt === (ab?.alt ?? !1)))
      }
      _entryModifiersMatch(bb, ab) {
        if (!ab) return !bb;
        return void 0 !== ab.ctrl || void 0 !== ab.shift || void 0 !== ab.alt ? (void 0 === ab.ctrl || bb?.ctrl === ab.ctrl) && ((void 0 === ab.shift || bb?.shift === ab.shift) && (void 0 === ab.alt || bb?.alt === ab.alt)) : !bb || void 0 === bb.ctrl && void 0 === bb.shift && void 0 === bb.alt
      }
    }
  },
  39307: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => yb,
      h: () => Rb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(39310),
      Eb = Ub(36401),
      Yb = Ub(36405),
      Bb = Ub(39323),
      eb = Ub(39314),
      vb = Ub(39331),
      Lb = Ub(39340);
    class Pb extends vb.c {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub), this.input = new Lb.d({
          translate: (bb, ab, Ub) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += ab, this.panAccumulatedPixels.z += Ub
          },
          rotate: (bb, ab) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += ab
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
    const Xb = Eb.b.Zero(),
      jb = Eb.e.Identity();
    let Rb = (() => {
        var bb;
        let ab, Ub, eb, vb, Lb = Tb.b,
          Rb = [],
          kb = [],
          yb = [],
          Zb = [],
          Db = [],
          zb = [],
          xb = [],
          ib = [];
        return bb = class extends Lb {
          get inertia() {
            return this._targetInertia
          }
          set inertia(bb) {
            this._targetInertia = bb, this.movement && (this.movement.panInertia = bb, this.movement.rotationInertia = bb)
          }
          constructor(bb, ab, Ub) {
            super(bb, ab, Ub, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Eb.m(0, 0, 0), this.cameraRotation = new Eb.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Ab.k)(this, Rb, !1), this.rotation = ((0, Ab.k)(this, kb), (0, Ab.k)(this, yb, void 0)), this.rotationQuaternion = (0, Ab.k)(this, Zb), this.speed = (0, Ab.k)(this, Db, 2), this.noRotationConstraint = ((0, Ab.k)(this, zb), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Yb.e, this._rotationEpsilon = Yb.e, this.lockedTarget = (0, Ab.k)(this, xb, null), this._currentTarget = ((0, Ab.k)(this, ib), Eb.m.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Eb.b.Zero(), this._cameraTransformMatrix = Eb.b.Zero(), this._cameraRotationMatrix = Eb.b.Zero(), this._transformedReferencePoint = Eb.m.Zero(), this._deferredPositionUpdate = new Eb.m, this._deferredRotationQuaternionUpdate = new Eb.e, this._deferredRotationUpdate = new Eb.m, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Eb.m.Forward(this.oN().useRightHandedSystem), this.rotation = new Eb.m(0, this.oN().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Pb(this.oN(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(bb) {
            this.getWorldMatrix();
            const ab = Eb.j.Pj[0],
              Ub = Eb.j.Pj[1];
            return Ub.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Ub, ab), ab.scaleInPlace(bb), this.globalPosition.add(ab)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.K9(0, 0, 0), this.cameraRotation.K9(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Eb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Eb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Eb.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(bb) {
            bb || super._updateCache();
            const ab = this._getLockedTargetPosition();
            ab ? this._cache.lockedTarget ? this._cache.lockedTarget.EUb(ab) : this._cache.lockedTarget = ab.clone() : this._cache.lockedTarget = null, this._cache.rotation.EUb(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.EUb(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const bb = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(bb) : !bb) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const bb = this.vj();
            return this.speed * Math.sqrt(bb.getDeltaTime() / (100 * bb.getFps()))
          }
          setTarget(bb) {
            this.upVector.normalize(), this._initialFocalDistance = bb.subtract(this.position).length(), this.position.z === bb.z && (this.position.z += Yb.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.oN().useRightHandedSystem ? Eb.b.LookAtRHToRef(this.position, bb, Eb.m.UpReadOnly, Xb) : Eb.b.LookAtLHToRef(this.position, bb, Eb.m.UpReadOnly, Xb), Xb.invert();
            const ab = this.rotationQuaternion || jb;
            Eb.e.FromRotationMatrixToRef(Xb, ab), ab.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Eb.j.Matrix[0]), Eb.m.TransformNormalToRef(this.cameraDirection, Eb.j.Matrix[0], Eb.j.Pj[0]), this._deferredPositionUpdate.addInPlace(Eb.j.Pj[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.EUb(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.EUb(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const bb = this.movement,
              ab = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            bb.panAccumulatedPixels.addInPlace(this.cameraDirection), bb.rotationAccumulatedPixels.x += this.cameraRotation.x, bb.rotationAccumulatedPixels.y += this.cameraRotation.y, bb.computeCurrentFrameDeltas(), this.cameraDirection.EUb(bb.panDeltaCurrentFrame), this.cameraRotation.set(bb.rotationDeltaCurrentFrame.x, bb.rotationDeltaCurrentFrame.y);
            const Ub = this.speed * this._panningEpsilon;
            !ab && Math.abs(this.cameraDirection.x) < Ub && Math.abs(this.cameraDirection.y) < Ub && Math.abs(this.cameraDirection.z) < Ub && (this.cameraDirection.B3(0), bb.resetPanVelocity());
            const Ab = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Mb = this._decideIfNeedsToMove(),
              Tb = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.EUb(this.rotation), this._deferredPositionUpdate.EUb(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.EUb(this.rotationQuaternion), Mb && this._updatePosition(), Tb) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Ab, this._deferredRotationUpdate.y += this.cameraRotation.y * Ab, !this.noRotationConstraint) {
                const bb = 1.570796;
                this._deferredRotationUpdate.x > bb && (this._deferredRotationUpdate.x = bb), this._deferredRotationUpdate.x < -bb && (this._deferredRotationUpdate.x = -bb)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.EUb(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Eb.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.EUb(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.B3(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Eb.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Eb.m.TransformNormalToRef(Eb.m.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Eb.m.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Bb.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Eb.e.FromEulerVectorToRef(this.rotation, jb), Bb.d.Y.rotateByQuaternionToRef(jb, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(bb, ab, Ub) {
            if (this.oN().useRightHandedSystem ? Eb.b.LookAtRHToRef(bb, ab, Ub, this._viewMatrix) : Eb.b.LookAtLHToRef(bb, ab, Ub, this._viewMatrix), this.parent) {
              const bb = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(bb, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(ab, Ub) {
            if (this.cameraRigMode !== Tb.b.RIG_MODE_NONE) {
              const Ub = new bb(ab, this.position.clone(), this.oN());
              return Ub.isRigCamera = !0, Ub.rigParent = this, this.cameraRigMode === Tb.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Eb.e), Ub._cameraRigParams = {}, Ub.rotationQuaternion = new Eb.e), Ub.mode = this.mode, Ub.orthoLeft = this.orthoLeft, Ub.orthoRight = this.orthoRight, Ub.orthoTop = this.orthoTop, Ub.orthoBottom = this.orthoBottom, Ub
            }
            return null
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              ab = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Tb.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Tb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Tb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Tb.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Tb.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Ub = this.cameraRigMode === Tb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Ab = this.cameraRigMode === Tb.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Ub, bb), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Ab, ab);
                break
              }
              case Tb.b.RIG_MODE_VR:
                bb.rotationQuaternion && ab.rotationQuaternion && this.rotationQuaternion ? (bb.rotationQuaternion.EUb(this.rotationQuaternion), ab.rotationQuaternion.EUb(this.rotationQuaternion)) : (bb.rotation.EUb(this.rotation), ab.rotation.EUb(this.rotation)), bb.position.EUb(this.position), ab.position.EUb(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(ab, Ub) {
            this.getTarget().subtractToRef(this.position, bb._TargetFocalPoint), bb._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Ab = bb._TargetFocalPoint.addInPlace(this.position);
            Eb.b.TranslationToRef(-Ab.x, -Ab.y, -Ab.z, bb._TargetTransformMatrix), bb._TargetTransformMatrix.multiplyToRef(Eb.b.RotationAxis(Ub.upVector, ab), bb._RigCamTransformMatrix), Eb.b.TranslationToRef(Ab.x, Ab.y, Ab.z, bb._TargetTransformMatrix), bb._RigCamTransformMatrix.multiplyToRef(bb._TargetTransformMatrix, bb._RigCamTransformMatrix), Eb.m.TransformCoordinatesToRef(this.position, bb._RigCamTransformMatrix, Ub.position), Ub.setTarget(Ab)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.I)()], eb = [(0, Mb.K)()], vb = [(0, Mb.x)("lockedTargetId")], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "updateUpVectorFromRotation" in bb,
              get: bb => bb.updateUpVectorFromRotation,
              set: (bb, ab) => {
                bb.updateUpVectorFromRotation = ab
              }
            },
            metadata: Tb
          }, Rb, kb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotation" in bb,
              get: bb => bb.rotation,
              set: (bb, ab) => {
                bb.rotation = ab
              }
            },
            metadata: Tb
          }, yb, Zb), (0, Ab.h)(null, null, eb, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: bb => "speed" in bb,
              get: bb => bb.speed,
              set: (bb, ab) => {
                bb.speed = ab
              }
            },
            metadata: Tb
          }, Db, zb), (0, Ab.h)(null, null, vb, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "lockedTarget" in bb,
              get: bb => bb.lockedTarget,
              set: (bb, ab) => {
                bb.lockedTarget = ab
              }
            },
            metadata: Tb
          }, xb, ib), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb._RigCamTransformMatrix = new Eb.b, bb._TargetTransformMatrix = new Eb.b, bb._TargetFocalPoint = new Eb.m, bb
      })(),
      kb = !1;

    function yb() {
      kb || (kb = !0, eb.c.AddNodeConstructor("TargetCamera", ((bb, ab) => () => new Rb(bb, Eb.m.Zero(), ab))))
    }
  },
  39058: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = Ub(39002);
    let Mb = !1;

    function Tb() {
      Mb || (Mb = !0, Ab.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Ab.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Ab.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Ab.d.prototype.getAspectRatio = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = bb.viewport;
        return this.getRenderWidth(ab) * Ub.width / (this.getRenderHeight(ab) * Ub.height)
      }, Ab.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Ab.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39143: (bb, ab, Ub) => {
    var Ab = Ub(39002),
      Mb = Ub(39146);
    let Tb = !1;
    Tb || (Tb = !0, (0, Mb.q)(), Ab.d.prototype._loadFileAsync = async function(bb, ab, Ub) {
      return await new Promise(((Ab, Mb) => {
        this._loadFile(bb, (bb => {
          Ab(bb)
        }), void 0, ab, Ub, ((bb, ab) => {
          Mb(ab)
        }))
      }))
    })
  },
  39136: (bb, ab, Ub) => {
    (0, Ub(39061).d)()
  },
  39061: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(39002);
    let Mb = !1;

    function Tb() {
      Mb || (Mb = !0, Ab.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Ab.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Ab.d.prototype.createRenderPassId = function(bb) {
        const ab = ++Ab.d._RenderPassIdCounter;
        return this._renderPassNames[ab] = bb ?? "NONAME", ab
      }, Ab.d.prototype.releaseRenderPassId = function(bb) {
        this._renderPassNames[bb] = void 0;
        for (let ab = 0; ab < this.scenes.length; ++ab) {
          const Ub = this.scenes[ab];
          for (let ab = 0; ab < Ub.meshes.length; ++ab) {
            const Ab = Ub.meshes[ab];
            if (Ab._releaseRenderPassId(bb), Ab.mD)
              for (let ab = 0; ab < Ab.mD.length; ++ab) {
                Ab.mD[ab]._removeDrawWrapper(bb)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(bb)
      })
    }
  },
  39175: (bb, ab, Ub) => {
    var Ab = Ub(39181),
      Mb = Ub(39002);
    let Tb = !1;
    Tb || (Tb = !0, Mb.d.GetCompatibleTextureLoader = Ab.e)
  },
  39064: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(38933);
    let Mb = !1;

    function Tb() {
      Mb || (Mb = !0, Ab.ThinEngine.prototype.setAlphaMode = function(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Ub] === bb) {
          if (!ab) {
            const ab = 0 === bb;
            this.depthCullingState.depthMask !== ab && (this.depthCullingState.depthMask = ab)
          }
          return
        }
        const Ab = 0 === bb;
        this._alphaState.setAlphaBlend(!Ab, Ub), this._alphaState.setAlphaMode(bb, Ub), ab || (this.depthCullingState.depthMask = Ab), this._alphaMode[Ub] = bb
      })
    }
  },
  39078: (bb, ab, Ub) => {
    var Ab = Ub(38915),
      Mb = Ub(37989),
      Tb = Ub(38933),
      Eb = Ub(39084),
      Yb = Ub(39044);
    class Bb extends Eb.e {
      setDepthStencilTexture(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(bb, ab), !bb) return;
        const Ub = this._engine,
          Ab = this._context,
          Mb = bb._hardwareTexture;
        if (Mb && bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const ab = Ub._currentFramebuffer;
          Ub._bindUnboundFramebuffer(this._MSAAFramebuffer), Ab.framebufferRenderbuffer(Ab.FRAMEBUFFER, (0, Yb.c)(bb.format) ? Ab.DEPTH_STENCIL_ATTACHMENT : Ab.DEPTH_ATTACHMENT, Ab.RENDERBUFFER, Mb.getMSAARenderBuffer()), Ub._bindUnboundFramebuffer(ab)
        }
      }
      constructor(bb, ab, Ub, Ab, Mb) {
        super(bb, ab, Ub, Ab), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Mb
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
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const bb = this._engine,
            ab = bb._currentFramebuffer,
            Ub = this._context;
          bb._bindUnboundFramebuffer(this._framebuffer), Ub.framebufferRenderbuffer(Ub.FRAMEBUFFER, Ub.DEPTH_STENCIL_ATTACHMENT, Ub.RENDERBUFFER, null), Ub.framebufferRenderbuffer(Ub.FRAMEBUFFER, Ub.DEPTH_ATTACHMENT, Ub.RENDERBUFFER, null), Ub.framebufferRenderbuffer(Ub.FRAMEBUFFER, Ub.STENCIL_ATTACHMENT, Ub.RENDERBUFFER, null), bb._bindUnboundFramebuffer(ab), Ub.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(bb, ab, Ub, Ab, Mb, Tb)
      }
      shareDepth(bb) {
        super.shareDepth(bb);
        const ab = this._context,
          Ub = this._depthStencilBuffer,
          Ab = bb._MSAAFramebuffer || bb._framebuffer,
          Mb = this._engine;
        bb._depthStencilBuffer && bb._depthStencilBuffer !== Ub && ab.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = Ub;
        const Tb = bb._generateStencilBuffer ? ab.DEPTH_STENCIL_ATTACHMENT : ab.DEPTH_ATTACHMENT;
        Mb._bindUnboundFramebuffer(Ab), ab.framebufferRenderbuffer(ab.FRAMEBUFFER, Tb, ab.RENDERBUFFER, Ub), Mb._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Mb = bb._hardwareTexture;
        if (!Mb) return;
        const Tb = this._framebuffer,
          Eb = this._engine,
          Yb = Eb._currentFramebuffer;
        let Bb;
        if (Eb._bindUnboundFramebuffer(Tb), Eb.oj > 1) {
          const Tb = this._context;
          Bb = Tb["COLOR_ATTACHMENT" + ab], bb.is2DArray || bb.is3D ? (Ub = Ub ?? this.layerIndices?.[ab] ?? 0, Tb.framebufferTextureLayer(Tb.FRAMEBUFFER, Bb, Mb.underlyingResource, Ab, Ub)) : bb.isCube ? (Ub = Ub ?? this.faceIndices?.[ab] ?? 0, Tb.framebufferTexture2D(Tb.FRAMEBUFFER, Bb, Tb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub, Mb.underlyingResource, Ab)) : Tb.framebufferTexture2D(Tb.FRAMEBUFFER, Bb, Tb.TEXTURE_2D, Mb.underlyingResource, Ab)
        } else {
          const bb = this._context;
          Bb = bb["COLOR_ATTACHMENT" + ab + "_WEBGL"];
          const Tb = void 0 !== Ub ? bb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub : bb.TEXTURE_2D;
          bb.framebufferTexture2D(bb.FRAMEBUFFER, Bb, Tb, Mb.underlyingResource, Ab)
        }
        if (bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const bb = this._context;
          Eb._bindUnboundFramebuffer(this._MSAAFramebuffer), bb.framebufferRenderbuffer(bb.FRAMEBUFFER, Bb, bb.RENDERBUFFER, Mb.getMSAARenderBuffer())
        }
        Eb._bindUnboundFramebuffer(Yb)
      }
      setTexture(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(bb, ab, Ub), this._bindTextureRenderTarget(bb, ab)
      }
      setLayerAndFaceIndices(bb, ab) {
        if (super.setLayerAndFaceIndices(bb, ab), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Ub = this._attachments?.length ?? this.textures.length;
        for (let Ab = 0; Ab < Ub; Ab++) {
          const bb = this.textures[Ab];
          bb && (bb.is2DArray || bb.is3D ? this._bindTextureRenderTarget(bb, Ab, this.layerIndices[Ab]) : bb.isCube ? this._bindTextureRenderTarget(bb, Ab, this.faceIndices[Ab]) : this._bindTextureRenderTarget(bb, Ab))
        }
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(bb, ab, Ub), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Ab = this.textures[bb];
        Ab.is2DArray || Ab.is3D ? this._bindTextureRenderTarget(this.textures[bb], bb, this.layerIndices[bb]) : Ab.isCube && this._bindTextureRenderTarget(this.textures[bb], bb, this.faceIndices[bb])
      }
      resolveMSAATextures() {
        const bb = this._engine,
          ab = bb._currentFramebuffer;
        bb._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), bb._bindUnboundFramebuffer(ab)
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const ab = this._context;
        bb || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (ab.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (ab.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (ab.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(bb)
      }
    }
    let eb = !1;
    eb || (eb = !0, Tb.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(bb, ab, Ub) {
      const Ab = new Bb(bb, ab, Ub, this, this._gl);
      return this._renderTargetWrapperCache.push(Ab), Ab
    }, Tb.ThinEngine.prototype.createRenderTargetTexture = function(bb, ab) {
      const Ub = this._createHardwareRenderTargetWrapper(!1, !1, bb);
      let Ab, Mb, Tb = !0,
        Eb = !1,
        Yb = !1,
        Bb = 1;
      void 0 !== ab && "object" === typeof ab && (Tb = ab.generateDepthBuffer ?? !0, Eb = !!ab.generateStencilBuffer, Yb = !!ab.noColorAttachment, Ab = ab.colorAttachment, Bb = ab.samples ?? 1, Mb = ab.label);
      const eb = Ab || (Yb ? null : this._createInternalTexture(bb, ab, !0, 5)),
        vb = bb.width || bb,
        Lb = bb.height || bb,
        Pb = this._currentFramebuffer,
        Xb = this._gl,
        jb = Xb.createFramebuffer();
      if (this._bindUnboundFramebuffer(jb), Ub._depthStencilBuffer = this._setupFramebufferDepthAttachments(Eb, Tb, vb, Lb), !eb || eb.is2DArray || eb.is3D || Xb.framebufferTexture2D(Xb.FRAMEBUFFER, Xb.COLOR_ATTACHMENT0, Xb.TEXTURE_2D, eb._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Pb), Ub.label = Mb ?? "RenderTargetWrapper", Ub._framebuffer = jb, Ub._generateDepthBuffer = Tb, Ub._generateStencilBuffer = Eb, Ub.setTextures(eb), Ab) {
        if (Ub._samples = Ab.samples, Ab.samples > 1) {
          const bb = Ab._hardwareTexture.getMSAARenderBuffer(0);
          Ub._MSAAFramebuffer = Xb.createFramebuffer(), this._bindUnboundFramebuffer(Ub._MSAAFramebuffer), Xb.framebufferRenderbuffer(Xb.FRAMEBUFFER, Xb.COLOR_ATTACHMENT0, Xb.RENDERBUFFER, bb), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Ub, Bb);
      return Ub
    }, Tb.ThinEngine.prototype._createDepthStencilTexture = function(bb, ab, Ub) {
      const Tb = this._gl,
        Eb = bb.layers || 0,
        Bb = bb.depth || 0;
      let eb = Tb.TEXTURE_2D;
      0 !== Eb ? eb = Tb.TEXTURE_2D_ARRAY : 0 !== Bb && (eb = Tb.TEXTURE_3D);
      const vb = new Ab.b(this, 12);
      if (vb.label = ab.label, !this._caps.depthTextureExtension) return Mb.e.Error("Depth texture is not supported by your browser or hardware."), vb;
      const Lb = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...ab
      };
      if (this._bindTextureDirectly(eb, vb, !0), this._setupDepthStencilTexture(vb, bb, 0 !== Lb.comparisonFunction && Lb.bilinearFiltering, Lb.comparisonFunction, Lb.samples), void 0 !== Lb.depthTextureFormat) {
        if (15 !== Lb.depthTextureFormat && 16 !== Lb.depthTextureFormat && 17 !== Lb.depthTextureFormat && 13 !== Lb.depthTextureFormat && 14 !== Lb.depthTextureFormat && 18 !== Lb.depthTextureFormat) return Mb.e.Error(`Depth texture ${Lb.depthTextureFormat} format is not supported.`), vb;
        vb.format = Lb.depthTextureFormat
      } else vb.format = Lb.generateStencil ? 13 : 16;
      const Pb = (0, Yb.c)(vb.format),
        Xb = this._getWebGLTextureTypeFromDepthTextureFormat(vb.format),
        jb = Pb ? Tb.DEPTH_STENCIL : Tb.DEPTH_COMPONENT,
        Rb = this._getInternalFormatFromDepthTextureFormat(vb.format, !0, Pb);
      return vb.is2DArray ? Tb.texImage3D(eb, 0, Rb, vb.width, vb.height, Eb, 0, jb, Xb, null) : vb.is3D ? Tb.texImage3D(eb, 0, Rb, vb.width, vb.height, Bb, 0, jb, Xb, null) : Tb.texImage2D(eb, 0, Rb, vb.width, vb.height, 0, jb, Xb, null), this._bindTextureDirectly(eb, null), this._internalTexturesCache.push(vb), Ub._depthStencilBuffer && (Tb.deleteRenderbuffer(Ub._depthStencilBuffer), Ub._depthStencilBuffer = null), this._bindUnboundFramebuffer(Ub._MSAAFramebuffer ?? Ub._framebuffer), Ub._generateStencilBuffer = Pb, Ub._depthStencilTextureWithStencil = Pb, Ub._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ub._generateStencilBuffer, Ub._generateDepthBuffer, Ub.width, Ub.height, Ub.samples, vb.format), this._bindUnboundFramebuffer(null), vb
    }, Tb.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(bb, ab) {
      if (this.oj < 2 || !bb) return 1;
      if (bb.samples === ab) return ab;
      const Ub = this._gl;
      ab = Math.min(ab, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (Ub.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (Ub.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
      const Ab = bb.texture?._hardwareTexture;
      if (Ab?.releaseMSAARenderBuffers(), bb.texture && ab > 1 && "function" === typeof Ub.renderbufferStorageMultisample) {
        const Mb = Ub.createFramebuffer();
        if (!Mb) throw new Error("Unable to create multi sampled framebuffer");
        bb._MSAAFramebuffer = Mb, this._bindUnboundFramebuffer(bb._MSAAFramebuffer);
        const Tb = this._createRenderBuffer(bb.texture.width, bb.texture.height, ab, -1, this._getRGBABufferInternalSizedFormat(bb.texture.type, bb.texture.format, bb.texture._useSRGBBuffer), Ub.COLOR_ATTACHMENT0, !1);
        if (!Tb) throw new Error("Unable to create multi sampled framebuffer");
        Ab?.addMSAARenderBuffer(Tb)
      }
      this._bindUnboundFramebuffer(bb._MSAAFramebuffer ?? bb._framebuffer), bb.texture && (bb.texture.samples = ab), bb._samples = ab;
      const Mb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
      return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, ab, Mb), this._bindUnboundFramebuffer(null), ab
    }, Tb.ThinEngine.prototype._setupDepthStencilTexture = function(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Tb = ab.width ?? ab,
        Eb = ab.height ?? ab,
        Yb = ab.layers || 0,
        Bb = ab.depth || 0;
      bb.baseWidth = Tb, bb.baseHeight = Eb, bb.width = Tb, bb.height = Eb, bb.is2DArray = Yb > 0, bb.depth = Yb || Bb, bb.isReady = !0, bb.samples = Mb, bb.generateMipMaps = !1, bb.samplingMode = Ub ? 2 : 1, bb.type = 0, bb._comparisonFunction = Ab;
      const eb = this._gl,
        vb = this._getTextureTarget(bb),
        Lb = this._getSamplingParameters(bb.samplingMode, !1);
      eb.texParameteri(vb, eb.TEXTURE_MAG_FILTER, Lb.mag), eb.texParameteri(vb, eb.TEXTURE_MIN_FILTER, Lb.min), eb.texParameteri(vb, eb.TEXTURE_WRAP_S, eb.CLAMP_TO_EDGE), eb.texParameteri(vb, eb.TEXTURE_WRAP_T, eb.CLAMP_TO_EDGE), this.oj > 1 && (0 === Ab ? (eb.texParameteri(vb, eb.TEXTURE_COMPARE_FUNC, 515), eb.texParameteri(vb, eb.TEXTURE_COMPARE_MODE, eb.NONE)) : (eb.texParameteri(vb, eb.TEXTURE_COMPARE_FUNC, Ab), eb.texParameteri(vb, eb.TEXTURE_COMPARE_MODE, eb.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38898: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.c
    });
    var Ab = Ub(38906);
    (0, Ub(39064).d)();
    var Mb = Ub(38933);
    let Tb = !1;
    ! function() {
      if (Tb) return;
      Tb = !0;
      const bb = new WeakMap,
        ab = new WeakMap,
        Ub = new WeakMap,
        Ab = new WeakMap;
      Mb.ThinEngine.prototype.getAlphaToCoverage = function() {
        return bb.get(this) ?? !1
      }, Mb.ThinEngine.prototype.setAlphaToCoverage = function(Ub) {
        (bb.get(this) !== Ub || this._gl && ab.get(this) !== this._gl) && (bb.set(this, Ub), this._gl && (Ub ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), ab.set(this, this._gl)))
      }, Object.defineProperty(Mb.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Ab.get(this) !== this._gl && (Ub.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Ab.set(this, this._gl)), Ub.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Eb = Ub(38915),
      Yb = Ub(37989),
      Bb = Ub(39033);
    let eb = !1;
    ! function() {
      function bb(bb, ab, Ub, Ab) {
        let Mb, Tb = 1;
        1 === Ab ? Mb = new Float32Array(ab * Ub * 4) : 2 === Ab ? (Mb = new Uint16Array(ab * Ub * 4), Tb = 15360) : Mb = 7 === Ab ? new Uint32Array(ab * Ub * 4) : new Uint8Array(ab * Ub * 4);
        for (let Eb = 0; Eb < ab; Eb++)
          for (let Ab = 0; Ab < Ub; Ab++) {
            const Ub = 3 * (Ab * ab + Eb),
              Yb = 4 * (Ab * ab + Eb);
            Mb[Yb + 0] = bb[Ub + 0], Mb[Yb + 1] = bb[Ub + 1], Mb[Yb + 2] = bb[Ub + 2], Mb[Yb + 3] = Tb
          }
        return Mb
      }

      function ab(bb) {
        return function(ab, Ub, Ab, Mb, Tb, Yb, Bb, eb) {
          let vb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Pb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Xb = bb ? 10 : 11,
            jb = new Eb.b(this, Xb);
          jb.baseWidth = Ub, jb.baseHeight = Ab, jb.baseDepth = Mb, jb.width = Ub, jb.height = Ab, jb.depth = Mb, jb.format = Tb, jb.type = Lb, jb.generateMipMaps = Yb, jb.samplingMode = eb, bb ? jb.is3D = !0 : jb.is2DArray = !0, this._doNotHandleContextLost || (jb._bufferView = ab), bb ? this.updateRawTexture3D(jb, ab, Tb, Bb, vb, Lb) : this.updateRawTexture2DArray(jb, ab, Tb, Bb, vb, Lb), this._bindTextureDirectly(Pb, jb, !0);
          const Rb = this._getSamplingParameters(eb, Yb);
          return this._gl.texParameteri(Pb, this._gl.TEXTURE_MAG_FILTER, Rb.mag), this._gl.texParameteri(Pb, this._gl.TEXTURE_MIN_FILTER, Rb.min), Yb && this._gl.generateMipmap(Pb), this._bindTextureDirectly(Pb, null), this._internalTexturesCache.push(jb), jb
        }
      }

      function Ub(bb) {
        return function(ab, Ub, Ab, Mb) {
          let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Yb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Bb = this._getWebGLTextureType(Eb),
            eb = this._getInternalFormat(Ab),
            vb = this._getRGBABufferInternalSizedFormat(Eb, Ab);
          this._bindTextureDirectly(Yb, ab, !0), this._unpackFlipY(void 0 === Mb || !!Mb), this._doNotHandleContextLost || (ab._bufferView = Ub, ab.format = Ab, ab.invertY = Mb, ab._compression = Tb), ab.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Tb && Ub ? this._gl.compressedTexImage3D(Yb, 0, this.getCaps().s3tc[Tb], ab.width, ab.height, ab.depth, 0, Ub) : this._gl.texImage3D(Yb, 0, vb, ab.width, ab.height, ab.depth, 0, eb, Bb, Ub), ab.generateMipMaps && this._gl.generateMipmap(Yb), this._bindTextureDirectly(Yb, null), ab.isReady = !0
        }
      }
      eb || (eb = !0, Mb.ThinEngine.prototype.updateRawTexture = function(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!bb) return;
        const Yb = this._getRGBABufferInternalSizedFormat(Tb, Ub, Eb),
          Bb = this._getInternalFormat(Ub),
          eb = this._getWebGLTextureType(Tb);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Ab || !!Ab), this._doNotHandleContextLost || (bb._bufferView = ab, bb.format = Ub, bb.type = Tb, bb.invertY = Ab, bb._compression = Mb), bb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Mb && ab ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Mb], bb.width, bb.height, 0, ab) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Yb, bb.width, bb.height, 0, Bb, eb, ab), bb.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), bb.isReady = !0
      }, Mb.ThinEngine.prototype.createRawTexture = function(bb, ab, Ub, Ab, Mb, Tb, Yb) {
        let Bb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          eb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          vb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Lb = new Eb.b(this, 3);
        Lb.baseWidth = ab, Lb.baseHeight = Ub, Lb.width = ab, Lb.height = Ub, Lb.format = Ab, Lb.generateMipMaps = Mb, Lb.samplingMode = Yb, Lb.invertY = Tb, Lb._compression = Bb, Lb.type = eb, Lb._useSRGBBuffer = this._getUseSRGBBuffer(vb, !Mb), this._doNotHandleContextLost || (Lb._bufferView = bb), this.updateRawTexture(Lb, bb, Ab, Tb, Bb, eb, Lb._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Lb, !0);
        const Pb = this._getSamplingParameters(Yb, Mb);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Pb.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Pb.min), Mb && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Lb), Lb
      }, Mb.ThinEngine.prototype.createRawCubeTexture = function(bb, ab, Ub, Ab, Mb, Tb, eb) {
        let vb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Lb = this._gl,
          Pb = new Eb.b(this, 8);
        Pb.isCube = !0, Pb.format = Ub, Pb.type = Ab, this._doNotHandleContextLost || (Pb._bufferViewArray = bb);
        const Xb = this._getWebGLTextureType(Ab);
        let jb = this._getInternalFormat(Ub);
        jb === Lb.RGB && (jb = Lb.RGBA), Xb !== Lb.FLOAT || this._caps.textureFloatLinearFiltering ? Xb !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Xb !== Lb.FLOAT || this._caps.textureFloatRender ? Xb !== Lb.HALF_FLOAT || this._caps.colorBufferFloat || (Mb = !1, Yb.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Mb = !1, Yb.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Mb = !1, eb = 1, Yb.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Mb = !1, eb = 1, Yb.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Rb = ab,
          kb = Rb;
        Pb.width = Rb, Pb.height = kb, Pb.invertY = Tb, Pb._compression = vb;
        if (!this.needPOTTextures || (0, Bb.g)(Pb.width) && (0, Bb.g)(Pb.height) || (Mb = !1), bb) this.updateRawCubeTexture(Pb, bb, Ub, Ab, Tb, vb);
        else {
          const bb = this._getRGBABufferInternalSizedFormat(Ab),
            ab = 0;
          this._bindTextureDirectly(Lb.TEXTURE_CUBE_MAP, Pb, !0);
          for (let Ub = 0; Ub < 6; Ub++) vb ? Lb.compressedTexImage2D(Lb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub, ab, this.getCaps().s3tc[vb], Pb.width, Pb.height, 0, void 0) : Lb.texImage2D(Lb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub, ab, bb, Pb.width, Pb.height, 0, jb, Xb, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Pb, !0), bb && Mb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const yb = this._getSamplingParameters(eb, Mb);
        return Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_MAG_FILTER, yb.mag), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_MIN_FILTER, yb.min), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_WRAP_S, Lb.CLAMP_TO_EDGE), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_WRAP_T, Lb.CLAMP_TO_EDGE), this._bindTextureDirectly(Lb.TEXTURE_CUBE_MAP, null), Pb.generateMipMaps = Mb, Pb.samplingMode = eb, Pb.isReady = !0, Pb
      }, Mb.ThinEngine.prototype.updateRawCubeTexture = function(ab, Ub, Ab, Mb, Tb) {
        let Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        ab._bufferViewArray = Ub, ab.format = Ab, ab.type = Mb, ab.invertY = Tb, ab._compression = Eb;
        const eb = this._gl,
          vb = this._getWebGLTextureType(Mb);
        let Lb = this._getInternalFormat(Ab);
        const Pb = this._getRGBABufferInternalSizedFormat(Mb);
        let Xb = !1;
        Lb === eb.RGB && (Lb = eb.RGBA, Xb = !0), this._bindTextureDirectly(eb.TEXTURE_CUBE_MAP, ab, !0), this._unpackFlipY(void 0 === Tb || !!Tb), ab.width % 4 !== 0 && eb.pixelStorei(eb.UNPACK_ALIGNMENT, 1);
        for (let Bb = 0; Bb < 6; Bb++) {
          let Ab = Ub[Bb];
          Eb ? eb.compressedTexImage2D(eb.TEXTURE_CUBE_MAP_POSITIVE_X + Bb, Yb, this.getCaps().s3tc[Eb], ab.width, ab.height, 0, Ab) : (Xb && (Ab = bb(Ab, ab.width, ab.height, Mb)), eb.texImage2D(eb.TEXTURE_CUBE_MAP_POSITIVE_X + Bb, Yb, Pb, ab.width, ab.height, 0, Lb, vb, Ab))
        }(!this.needPOTTextures || (0, Bb.g)(ab.width) && (0, Bb.g)(ab.height)) && ab.generateMipMaps && 0 === Yb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), ab.isReady = !0
      }, Mb.ThinEngine.prototype.createRawCubeTextureFromUrl = function(ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        let eb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          vb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Lb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Pb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Xb = this._gl,
          jb = this.createRawCubeTexture(null, Ab, Mb, Tb, !Eb, Pb, Lb, null);
        Ub?.addPendingData(jb), jb.url = ab, jb.isReady = !1, this._internalTexturesCache.push(jb);
        const Rb = (bb, ab) => {
            Ub?.removePendingData(jb), vb && vb(bb ? bb.status + " " + bb.statusText : "Failed to parse texture data", ab)
          },
          kb = async ab => {
            if (!jb._hardwareTexture) return;
            const Ab = Yb(ab);
            if (!Ab) return;
            const Eb = Ab instanceof Promise ? await Ab : Ab,
              vb = jb.width;
            if (Bb) {
              const ab = this._getWebGLTextureType(Tb);
              let Ub = this._getInternalFormat(Mb);
              const Ab = this._getRGBABufferInternalSizedFormat(Tb);
              let Yb = !1;
              Ub === Xb.RGB && (Ub = Xb.RGBA, Yb = !0), this._bindTextureDirectly(Xb.TEXTURE_CUBE_MAP, jb, !0), this._unpackFlipY(!1);
              const eb = Bb(Eb);
              for (let Mb = 0; Mb < eb.length; Mb++) {
                const Eb = vb >> Mb;
                for (let Bb = 0; Bb < 6; Bb++) {
                  let vb = eb[Mb][Bb];
                  Yb && (vb = bb(vb, Eb, Eb, Tb)), Xb.texImage2D(Bb, Mb, Ab, Eb, Eb, 0, Ub, ab, vb)
                }
              }
              this._bindTextureDirectly(Xb.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(jb, Eb, Mb, Tb, Pb);
            jb.isReady = !0, Ub?.removePendingData(jb), jb.onLoadedObservable.notifyObservers(jb), jb.onLoadedObservable.clear(), eb && eb()
          };
        return this._loadFile(ab, (bb => {
          kb(bb).catch((bb => {
            Rb(void 0, bb)
          }))
        }), void 0, Ub?.offlineProvider, !0, Rb), jb
      }, Mb.ThinEngine.prototype.createRawTexture2DArray = ab(!1), Mb.ThinEngine.prototype.createRawTexture3D = ab(!0), Mb.ThinEngine.prototype.updateRawTexture2DArray = Ub(!1), Mb.ThinEngine.prototype.updateRawTexture3D = Ub(!0))
    }();
    var vb = Ub(38973);
    let Lb = !1;
    Lb || (Lb = !0, Mb.ThinEngine.prototype._readTexturePixelsSync = function(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Eb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        eb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Lb = this._gl;
      if (!Lb) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const bb = Lb.createFramebuffer();
        if (!bb) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = bb
      }
      Lb.bindFramebuffer(Lb.FRAMEBUFFER, this._dummyFramebuffer), Ab > -1 && (bb.is2DArray || bb.is3D) ? Lb.framebufferTextureLayer(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, bb._hardwareTexture?.underlyingResource, Mb, Ab) : Ab > -1 ? Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, Lb.TEXTURE_CUBE_MAP_POSITIVE_X + Ab, bb._hardwareTexture?.underlyingResource, Mb) : Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Lb.COLOR_ATTACHMENT0, Lb.TEXTURE_2D, bb._hardwareTexture?.underlyingResource, Mb);
      let Pb = void 0 !== bb.type ? this._getWebGLTextureType(bb.type) : Lb.UNSIGNED_BYTE;
      return Yb ? Tb || (Tb = (0, vb.m)(bb.type, 4 * ab * Ub)) : Pb === Lb.UNSIGNED_BYTE ? (Tb || (Tb = new Uint8Array(4 * ab * Ub)), Pb = Lb.UNSIGNED_BYTE) : (Tb || (Tb = new Float32Array(4 * ab * Ub)), Pb = Lb.FLOAT), Eb && this.flushFramebuffer(), Lb.readPixels(Bb, eb, ab, Ub, Lb.RGBA, Pb, Tb), Lb.bindFramebuffer(Lb.FRAMEBUFFER, this._currentFramebuffer), Tb
    }, Mb.ThinEngine.prototype._readTexturePixels = function(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Eb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        eb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb))
    }), (0, Ub(39069).b)();
    let Pb = !1;
    Pb || (Pb = !0, Mb.ThinEngine.prototype._createDepthStencilCubeTexture = function(bb, ab) {
      const Ub = new Eb.b(this, 12);
      if (Ub.isCube = !0, 1 === this.oj) return Yb.e.Error("Depth cube texture is not supported by WebGL 1."), Ub;
      const Ab = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...ab
        },
        Mb = this._gl;
      this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, Ub, !0), this._setupDepthStencilTexture(Ub, bb, Ab.bilinearFiltering, Ab.comparisonFunction);
      for (let Tb = 0; Tb < 6; Tb++) Ab.generateStencil ? Mb.texImage2D(Mb.TEXTURE_CUBE_MAP_POSITIVE_X + Tb, 0, Mb.DEPTH24_STENCIL8, bb, bb, 0, Mb.DEPTH_STENCIL, Mb.UNSIGNED_INT_24_8, null) : Mb.texImage2D(Mb.TEXTURE_CUBE_MAP_POSITIVE_X + Tb, 0, Mb.DEPTH_COMPONENT24, bb, bb, 0, Mb.DEPTH_COMPONENT, Mb.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Ub), Ub
    }, Mb.ThinEngine.prototype._setCubeMapTextureParams = function(bb, ab, Ub) {
      const Ab = this._gl;
      Ab.texParameteri(Ab.TEXTURE_CUBE_MAP, Ab.TEXTURE_MAG_FILTER, Ab.LINEAR), Ab.texParameteri(Ab.TEXTURE_CUBE_MAP, Ab.TEXTURE_MIN_FILTER, ab ? Ab.LINEAR_MIPMAP_LINEAR : Ab.LINEAR), Ab.texParameteri(Ab.TEXTURE_CUBE_MAP, Ab.TEXTURE_WRAP_S, Ab.CLAMP_TO_EDGE), Ab.texParameteri(Ab.TEXTURE_CUBE_MAP, Ab.TEXTURE_WRAP_T, Ab.CLAMP_TO_EDGE), bb.samplingMode = ab ? 3 : 2, ab && this.getCaps().textureMaxLevel && void 0 !== Ub && Ub > 0 && (Ab.texParameteri(Ab.TEXTURE_CUBE_MAP, Ab.TEXTURE_MAX_LEVEL, Ub), bb._maxLodLevel = Ub), this._bindTextureDirectly(Ab.TEXTURE_CUBE_MAP, null)
    }, Mb.ThinEngine.prototype.createCubeTexture = function(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Eb = arguments.length > 6 ? arguments[6] : void 0,
        eb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        vb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Pb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Xb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        jb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Rb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const kb = this._gl;
      return this.createCubeTextureBase(bb, ab, Ub, !!Ab, Mb, Tb, Eb, eb, vb, Lb, Pb, Xb, (bb => this._bindTextureDirectly(kb.TEXTURE_CUBE_MAP, bb, !0)), ((bb, ab) => {
        const Ub = this.needPOTTextures ? (0, Bb.e)(ab[0].width, this._caps.maxCubemapTextureSize) : ab[0].width,
          Tb = Ub,
          eb = [kb.TEXTURE_CUBE_MAP_POSITIVE_X, kb.TEXTURE_CUBE_MAP_POSITIVE_Y, kb.TEXTURE_CUBE_MAP_POSITIVE_Z, kb.TEXTURE_CUBE_MAP_NEGATIVE_X, kb.TEXTURE_CUBE_MAP_NEGATIVE_Y, kb.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(kb.TEXTURE_CUBE_MAP, bb, !0), this._unpackFlipY(!1);
        const vb = Eb ? this._getInternalFormat(Eb, bb._useSRGBBuffer) : bb._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : kb.RGBA;
        let Lb = Eb ? this._getInternalFormat(Eb) : kb.RGBA;
        bb._useSRGBBuffer && 1 === this.oj && (Lb = vb);
        for (let Ab = 0; Ab < eb.length; Ab++)
          if (ab[Ab].width !== Ub || ab[Ab].height !== Tb) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Yb.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Ub, this._workingCanvas.height = Tb, this._workingContext.drawImage(ab[Ab], 0, 0, ab[Ab].width, ab[Ab].height, 0, 0, Ub, Tb), kb.texImage2D(eb[Ab], 0, vb, Lb, kb.UNSIGNED_BYTE, this._workingCanvas)
          } else kb.texImage2D(eb[Ab], 0, vb, Lb, kb.UNSIGNED_BYTE, ab[Ab]);
        Ab || kb.generateMipmap(kb.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(bb, !Ab), bb.width = Ub, bb.height = Tb, bb.isReady = !0, Eb && (bb.format = Eb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Mb && Mb()
      }), !!jb, Rb)
    }, Mb.ThinEngine.prototype.generateMipMapsForCubemap = function(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb.generateMipMaps) {
        const Ub = this._gl;
        this._bindTextureDirectly(Ub.TEXTURE_CUBE_MAP, bb, !0), Ub.generateMipmap(Ub.TEXTURE_CUBE_MAP), ab && this._bindTextureDirectly(Ub.TEXTURE_CUBE_MAP, null)
      }
    });
    Ub(39078);
    let Xb = !1;
    Xb || (Xb = !0, Mb.ThinEngine.prototype.setDepthStencilTexture = function(bb, ab, Ub, Ab) {
      void 0 !== bb && (ab && (this._boundUniforms[bb] = ab), Ub && Ub.depthStencilTexture ? this._setTexture(bb, Ub, !1, !0, Ab) : this._setTexture(bb, null, void 0, void 0, Ab))
    });
    let jb = !1;
    jb || (jb = !0, Mb.ThinEngine.prototype.createRenderTargetCubeTexture = function(bb, ab) {
      const Ub = this._createHardwareRenderTargetWrapper(!1, !0, bb),
        Ab = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...ab
        };
      Ab.generateStencilBuffer = Ab.generateDepthBuffer && Ab.generateStencilBuffer, (1 !== Ab.type || this._caps.textureFloatLinearFiltering) && (2 !== Ab.type || this._caps.textureHalfFloatLinearFiltering) || (Ab.samplingMode = 1);
      const Mb = this._gl,
        Tb = new Eb.b(this, 5);
      this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, Tb, !0);
      const Bb = this._getSamplingParameters(Ab.samplingMode, Ab.generateMipMaps);
      1 !== Ab.type || this._caps.textureFloat || (Ab.type = 0, Yb.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_MAG_FILTER, Bb.mag), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_MIN_FILTER, Bb.min), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_WRAP_S, Mb.CLAMP_TO_EDGE), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_WRAP_T, Mb.CLAMP_TO_EDGE);
      for (let Eb = 0; Eb < 6; Eb++) Mb.texImage2D(Mb.TEXTURE_CUBE_MAP_POSITIVE_X + Eb, 0, this._getRGBABufferInternalSizedFormat(Ab.type, Ab.format), bb, bb, 0, this._getInternalFormat(Ab.format), this._getWebGLTextureType(Ab.type), null);
      const eb = Mb.createFramebuffer();
      return this._bindUnboundFramebuffer(eb), Ub._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ab.generateStencilBuffer, Ab.generateDepthBuffer, bb, bb), Ab.generateMipMaps && Mb.generateMipmap(Mb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Ub._framebuffer = eb, Ub._generateDepthBuffer = Ab.generateDepthBuffer, Ub._generateStencilBuffer = Ab.generateStencilBuffer, Tb.width = bb, Tb.height = bb, Tb.isReady = !0, Tb.isCube = !0, Tb.samples = 1, Tb.generateMipMaps = Ab.generateMipMaps, Tb.samplingMode = Ab.samplingMode, Tb.type = Ab.type, Tb.format = Ab.format, this._internalTexturesCache.push(Tb), Ub.setTextures(Tb), Ub
    });
    var Rb = Ub(39090),
      kb = Ub(39099);
    let yb = !1;
    yb || (yb = !0, Mb.ThinEngine.prototype.createPrefilteredCubeTexture = function(bb, ab, Ab, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Bb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        eb = arguments.length > 6 ? arguments[6] : void 0,
        vb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Lb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Pb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(bb, ab, null, !1, (async bb => {
        if (!bb) return void(Tb && Tb(null));
        const Bb = bb.texture;
        if (Lb ? bb.info.sphericalPolynomial && (Bb._sphericalPolynomial = bb.info.sphericalPolynomial) : Bb._sphericalPolynomial = Bb._sphericalPolynomial ?? new Rb.e, Bb._source = 9, this.getCaps().textureLOD) return void(Tb && Tb(Bb));
        const eb = this._gl,
          vb = bb.width;
        if (!vb) return;
        const {
          DDSTools: Pb
        } = await Ub.e(296).then((() => Ub(40870))), Xb = [];
        for (let Ub = 0; Ub < 3; Ub++) {
          const Tb = 1 - Ub / 2,
            Lb = Mb,
            jb = Math.log2(vb) * Ab + Mb,
            Rb = Lb + (jb - Lb) * Tb,
            yb = Math.round(Math.min(Math.max(Rb, 0), jb)),
            Zb = new Eb.b(this, 2);
          if (Zb.type = Bb.type, Zb.format = Bb.format, Zb.width = Math.pow(2, Math.max(Math.log2(vb) - yb, 0)), Zb.height = Zb.width, Zb.isCube = !0, Zb._cachedWrapU = 0, Zb._cachedWrapV = 0, this._bindTextureDirectly(eb.TEXTURE_CUBE_MAP, Zb, !0), Zb.samplingMode = 2, eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_MAG_FILTER, eb.LINEAR), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_MIN_FILTER, eb.LINEAR), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_WRAP_S, eb.CLAMP_TO_EDGE), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_WRAP_T, eb.CLAMP_TO_EDGE), bb.isDDS) {
            const ab = bb.info,
              Ub = bb.data;
            this._unpackFlipY(ab.isCompressed), Pb.UploadDDSLevels(this, Zb, Ub, ab, !0, 6, yb)
          } else Yb.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(eb.TEXTURE_CUBE_MAP, null);
          const Db = new kb.b(ab);
          Db._isCube = !0, Db._texture = Zb, Zb.isReady = !0, Xb.push(Db)
        }
        Bb._lodTextureHigh = Xb[2], Bb._lodTextureMid = Xb[1], Bb._lodTextureLow = Xb[0], Tb && Tb(Bb)
      }), Bb, eb, vb, Lb, Ab, Mb, null, void 0, !1, Pb)
    });
    var Zb = Ub(39027);
    let Db = !1;
    Db || (Db = !0, Mb.ThinEngine.prototype.createUniformBuffer = function(bb, ab) {
      const Ub = this._gl.createBuffer();
      if (!Ub) throw new Error("Unable to create uniform buffer");
      const Ab = new Zb.e(Ub);
      return this.bindUniformBuffer(Ab), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Ab.references = 1, Ab
    }, Mb.ThinEngine.prototype.createDynamicUniformBuffer = function(bb, ab) {
      const Ub = this._gl.createBuffer();
      if (!Ub) throw new Error("Unable to create dynamic uniform buffer");
      const Ab = new Zb.e(Ub);
      return this.bindUniformBuffer(Ab), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Ab.references = 1, Ab
    }, Mb.ThinEngine.prototype.updateUniformBuffer = function(bb, ab, Ub, Ab) {
      this.bindUniformBuffer(bb), void 0 === Ub && (Ub = 0), void 0 === Ab ? ab instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Ub, ab) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Ub, new Float32Array(ab)) : ab instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, ab.subarray(Ub, Ub + Ab)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(ab).subarray(Ub, Ub + Ab)), this.bindUniformBuffer(null)
    }, Mb.ThinEngine.prototype.bindUniformBuffer = function(bb) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, bb ? bb.underlyingResource : null)
    }, Mb.ThinEngine.prototype.bindUniformBufferBase = function(bb, ab, Ub) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, ab, bb ? bb.underlyingResource : null)
    }, Mb.ThinEngine.prototype.bindUniformBlock = function(bb, ab, Ub) {
      const Ab = bb.program,
        Mb = this._gl.getUniformBlockIndex(Ab, ab);
      4294967295 !== Mb && this._gl.uniformBlockBinding(Ab, Mb, Ub)
    });
    var zb = Ub(38955),
      xb = Ub(39002);
    let ib = !1;
    ib || (ib = !0, xb.d.prototype.displayLoadingUI = function() {
      if (!(0, zb.k)()) return;
      const bb = this.loadingScreen;
      bb && bb.displayLoadingUI()
    }, xb.d.prototype.hideLoadingUI = function() {
      if (!(0, zb.k)()) return;
      const bb = this._loadingScreen;
      bb && bb.hideLoadingUI()
    }, Object.defineProperty(xb.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = xb.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(bb) {
        this._loadingScreen = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xb.d.prototype, "loadingUIText", {
      set: function(bb) {
        this.loadingScreen.loadingUIText = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xb.d.prototype, "loadingUIBackgroundColor", {
      set: function(bb) {
        this.loadingScreen.loadingUIBackgroundColor = bb
      },
      enumerable: !0,
      configurable: !0
    })), (0, Ub(39058).c)();
    let fb = !1;
    fb || (fb = !0, xb.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, xb.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, xb.d.prototype.setDepthFunction = function(bb) {
      this._depthCullingState.depthFunc = bb
    }, xb.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, xb.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, xb.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, xb.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, xb.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, xb.d.prototype.setDepthWrite = function(bb) {
      this._depthCullingState.depthMask = bb
    }, xb.d.prototype.setAlphaConstants = function(bb, ab, Ub, Ab) {
      this._alphaState.setAlphaBlendConstants(bb, ab, Ub, Ab)
    }, xb.d.prototype.getAlphaMode = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[bb]
    }, xb.d.prototype.getAlphaEquation = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[bb]
    });
    let mb = !1;
    mb || (mb = !0, xb.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, xb.d.prototype.setStencilBuffer = function(bb) {
      this._stencilState.stencilTest = bb
    }, xb.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, xb.d.prototype.setStencilMask = function(bb) {
      this._stencilState.stencilMask = bb
    }, xb.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, xb.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, xb.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, xb.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, xb.d.prototype.setStencilFunction = function(bb) {
      this._stencilState.stencilFunc = bb
    }, xb.d.prototype.setStencilBackFunction = function(bb) {
      this._stencilState.stencilBackFunc = bb
    }, xb.d.prototype.setStencilFunctionReference = function(bb) {
      this._stencilState.stencilFuncRef = bb
    }, xb.d.prototype.setStencilFunctionMask = function(bb) {
      this._stencilState.stencilFuncMask = bb
    }, xb.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, xb.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, xb.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, xb.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, xb.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, xb.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, xb.d.prototype.setStencilOperationFail = function(bb) {
      this._stencilState.stencilOpStencilFail = bb
    }, xb.d.prototype.setStencilBackOperationFail = function(bb) {
      this._stencilState.stencilBackOpStencilFail = bb
    }, xb.d.prototype.setStencilOperationDepthFail = function(bb) {
      this._stencilState.stencilOpDepthFail = bb
    }, xb.d.prototype.setStencilBackOperationDepthFail = function(bb) {
      this._stencilState.stencilBackOpDepthFail = bb
    }, xb.d.prototype.setStencilOperationPass = function(bb) {
      this._stencilState.stencilOpStencilDepthPass = bb
    }, xb.d.prototype.setStencilBackOperationPass = function(bb) {
      this._stencilState.stencilBackOpStencilDepthPass = bb
    }, xb.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, xb.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Ub(39136);
    let pb = !1;
    pb || (pb = !0, xb.d.prototype.createDepthStencilTexture = function(bb, ab, Ub) {
      if (ab.isCube) {
        const Ub = bb.width || bb;
        return this._createDepthStencilCubeTexture(Ub, ab)
      }
      return this._createDepthStencilTexture(bb, ab, Ub)
    });
    Ub(39143), Ub(39175);
    let Nb = !1;
    Nb || (Nb = !0, Mb.ThinEngine.prototype.enableScissor = function(bb, ab, Ub, Ab) {
      const Mb = this._gl;
      Mb.enable(Mb.SCISSOR_TEST), Mb.scissor(bb, ab, Ub, Ab)
    }, Mb.ThinEngine.prototype.disableScissor = function() {
      const bb = this._gl;
      bb.disable(bb.SCISSOR_TEST)
    })
  },
  38906: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => xb
    });
    var Ab = Ub(38915),
      Mb = Ub(36425),
      Tb = Ub(38933),
      Eb = Ub(39010);
    class Yb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Bb(bb)
      }
      sampleFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const ab = bb - this._lastFrameTimeMs;
            this._rollingFrameTime.add(ab)
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
    class Bb {
      constructor(bb) {
        this._samples = new Array(bb), this.reset()
      }
      add(bb) {
        let ab;
        if (this.isSaturated()) {
          const bb = this._samples[this._pos];
          ab = bb - this.average, this.average -= ab / (this._sampleCount - 1), this._m2 -= ab * (bb - this.average)
        } else this._sampleCount++;
        ab = bb - this.average, this.average += ab / this._sampleCount, this._m2 += ab * (bb - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = bb, this._pos++, this._pos %= this._samples.length
      }
      history(bb) {
        if (bb >= this._sampleCount || bb >= this._samples.length) return 0;
        const ab = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(ab - bb)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(bb) {
        const ab = this._samples.length;
        return (bb % ab + ab) % ab
      }
    }
    var eb = Ub(39027),
      vb = Ub(37989),
      Lb = Ub(39042),
      Pb = Ub(39002),
      Xb = Ub(38955);

    function jb(bb) {
      const ab = function(bb) {
        if (!(0, Xb.d)() || !document.body) return null;
        const ab = document.createElement("span");
        ab.textContent = "Hg", ab.style.font = bb;
        const Ub = document.createElement("div");
        Ub.style.display = "inline-block", Ub.style.width = "1px", Ub.style.height = "0px", Ub.style.verticalAlign = "bottom";
        const Ab = document.createElement("div");
        let Mb, Tb;
        Ab.style.whiteSpace = "nowrap", Ab.appendChild(ab), Ab.appendChild(Ub), document.body.appendChild(Ab);
        try {
          Tb = Ub.getBoundingClientRect().top - ab.getBoundingClientRect().top, Ub.style.verticalAlign = "baseline", Mb = Ub.getBoundingClientRect().top - ab.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Ab)
        }
        const Eb = {
          ascent: Mb,
          height: Tb,
          descent: Tb - Mb
        };
        return Rb(Eb) ? Eb : null
      }(bb);
      if (ab) return ab;
      const Ub = function(bb) {
        let ab = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? ab = new OffscreenCanvas(64, 64) : (0, Xb.d)() && "function" === typeof document.createElement && (ab = document.createElement("canvas"), ab.width = 64, ab.height = 64);
          const Ub = ab?.getContext("2d");
          if (!Ub) return null;
          Ub.font = bb;
          const Ab = Ub.measureText("Hg"),
            Mb = Number(Ab.actualBoundingBoxAscent ?? Ab.fontBoundingBoxAscent),
            Tb = Number(Ab.actualBoundingBoxDescent ?? Ab.fontBoundingBoxDescent),
            Eb = {
              ascent: Mb,
              height: Mb + Tb,
              descent: Tb
            };
          return Rb(Eb) ? Eb : null
        } catch {
          return null
        } finally {
          const bb = ab;
          "function" === typeof bb?.dispose && bb.dispose()
        }
      }(bb);
      return Ub || function(bb) {
        const ab = Math.max(1, function(bb) {
            const ab = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(bb || ""));
            return ab ? Number(ab[1]) : 16
          }(bb)),
          Ub = .8 * ab,
          Ab = .2 * ab;
        return {
          ascent: Ub,
          height: Ub + Ab,
          descent: Ab
        }
      }(bb)
    }

    function Rb(bb) {
      return Number.isFinite(bb.ascent) && Number.isFinite(bb.height) && Number.isFinite(bb.descent) && bb.height > 0
    }

    function kb(bb) {
      if (bb.requestPointerLock) {
        const ab = bb.requestPointerLock();
        ab instanceof Promise ? ab.then((() => {
          bb.focus()
        })).catch((() => {})) : bb.focus()
      }
    }
    var yb = Ub(39051),
      Zb = Ub(38993),
      Db = Ub(39058),
      zb = Ub(39061);
    class xb extends Tb.ThinEngine {
      static get NpmPackage() {
        return Pb.d.NpmPackage
      }
      static get Version() {
        return Pb.d.Version
      }
      static get Instances() {
        return Mb.d.Instances
      }
      static get LastCreatedEngine() {
        return Mb.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Mb.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(bb) {
        return Pb.d.DefaultLoadingScreenFactory(bb)
      }
      get _supportsHardwareTextureRescaling() {
        return !!xb._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Db.c)(), (0, zb.d)(), super(bb, ab, Ub, Ab), this._performanceMonitor = new Yb, this._drawCalls = new yb.e, bb && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(bb) {
        super._sharedInit(bb),
          function(bb, ab, Ub) {
            bb._onCanvasFocus = () => {
              bb.onCanvasFocusObservable.notifyObservers(bb)
            }, bb._onCanvasBlur = () => {
              bb.onCanvasBlurObservable.notifyObservers(bb)
            }, bb._onCanvasContextMenu = ab => {
              bb.disableContextMenu && ab.preventDefault()
            }, ab.addEventListener("focus", bb._onCanvasFocus), ab.addEventListener("blur", bb._onCanvasBlur), ab.addEventListener("contextmenu", bb._onCanvasContextMenu), bb._onBlur = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.disable(), bb._windowIsBackground = !0
            }, bb._onFocus = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.enable(), bb._windowIsBackground = !1
            }, bb._onCanvasPointerOut = Ub => {
              document.elementFromPoint(Ub.clientX, Ub.clientY) !== ab && bb.onCanvasPointerOutObservable.notifyObservers(Ub)
            };
            const Ab = bb.getHostWindow();
            Ab && "function" === typeof Ab.addEventListener && (Ab.addEventListener("blur", bb._onBlur), Ab.addEventListener("focus", bb._onFocus)), ab.addEventListener("pointerout", bb._onCanvasPointerOut), Ub.doNotHandleTouchAction || function(bb) {
              bb && bb.setAttribute && (bb.setAttribute("touch-action", "none"), bb.style.touchAction = "none", bb.style.webkitTapHighlightColor = "transparent")
            }(ab), !Pb.d.audioEngine && Ub.audioEngine && Pb.d.AudioEngineFactory && (Pb.d.audioEngine = Pb.d.AudioEngineFactory(bb.getRenderingCanvas(), bb.getAudioContext(), bb.getAudioDestination())), (0, Xb.d)() && (bb._onFullscreenChange = () => {
              bb.isFullscreen = !!document.fullscreenElement, bb.isFullscreen && bb._pointerLockRequested && ab && kb(ab)
            }, document.addEventListener("fullscreenchange", bb._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", bb._onFullscreenChange, !1), bb._onPointerLockChange = () => {
              bb.isPointerLock = document.pointerLockElement === ab
            }, document.addEventListener("pointerlockchange", bb._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", bb._onPointerLockChange, !1)), bb.enableOfflineSupport = void 0 !== Pb.d.OfflineProviderFactory, bb._deterministicLockstep = !!Ub.deterministicLockstep, bb._lockstepMaxSteps = Ub.lockstepMaxSteps || 0, bb._timeStep = Ub.timeStep || 1 / 60
          }(this, bb, this._creationOptions)
      }
      resizeImageBitmap(bb, ab, Ub) {
        return function(bb, ab, Ub, Ab) {
          const Mb = bb.createCanvas(Ub, Ab).getContext("2d");
          if (!Mb) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Mb.drawImage(ab, 0, 0), Mb.getImageData(0, 0, Ub, Ab).data
        }(this, bb, ab, Ub)
      }
      async _createImageBitmapFromSource(bb, ab) {
        return await async function(bb, ab, Ub) {
          return await new Promise(((Ab, Mb) => {
            const Tb = new Image;
            Tb.onload = () => {
              Tb.decode().then((() => {
                bb.createImageBitmap(Tb, Ub).then((bb => {
                  Ab(bb)
                }))
              }))
            }, Tb.onerror = () => {
              Mb(`Error loading image ${Tb.src}`)
            }, Tb.src = ab
          }))
        }(this, bb, ab)
      }
      switchFullscreen(bb) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(bb)
      }
      enterFullscreen(bb) {
        this.isFullscreen || (this._pointerLockRequested = bb, this._renderingCanvas && function(bb) {
          const ab = bb.requestFullscreen || bb.webkitRequestFullscreen;
          ab && ab.call(bb)
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
      setDirectViewport(bb, ab, Ub, Ab) {
        const Mb = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(bb, ab, Ub, Ab), Mb
      }
      scissorClear(bb, ab, Ub, Ab, Mb) {
        this.enableScissor(bb, ab, Ub, Ab), this.clear(Mb, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(bb) {
        const ab = this._gl.getAttachedShaders(bb);
        return ab ? this._gl.getShaderSource(ab[0]) : null
      }
      getFragmentShaderSource(bb) {
        const ab = this._gl.getAttachedShaders(bb);
        return ab ? this._gl.getShaderSource(ab[1]) : null
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
        return jb(bb)
      }
      enterPointerlock() {
        this._renderingCanvas && kb(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      eD() {
        this._measureFps(), super.eD()
      }
      _deletePipelineContext(bb) {
        const ab = bb;
        ab && ab.program && ab.transformFeedback && (this.deleteTransformFeedback(ab.transformFeedback), ab.transformFeedback = null), super._deletePipelineContext(bb)
      }
      createShaderProgram(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Mb = Mb || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Eb = super.createShaderProgram(bb, ab, Ub, Ab, Mb, Tb);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Eb
      }
      _createShaderProgram(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Tb = Ab.createProgram();
        if (bb.program = Tb, !Tb) throw new Error("Unable to create program");
        if (Ab.attachShader(Tb, ab), Ab.attachShader(Tb, Ub), this.oj > 1 && Mb) {
          const ab = this.createTransformFeedback();
          this.bindTransformFeedback(ab), this.setTranformFeedbackVaryings(Tb, Mb), bb.transformFeedback = ab
        }
        return Ab.linkProgram(Tb), this.oj > 1 && Mb && this.bindTransformFeedback(null), bb.context = Ab, bb.vertexShader = ab, bb.fragmentShader = Ub, bb.isParallelCompiled || this._finalizePipelineContext(bb), Tb
      }
      _releaseTexture(bb) {
        super._releaseTexture(bb)
      }
      _releaseRenderTargetWrapper(bb) {
        super._releaseRenderTargetWrapper(bb);
        for (const ab of this.scenes) {
          for (const Ub of ab.postProcesses) Ub._outputTexture === bb && (Ub._outputTexture = null);
          for (const Ub of ab.cameras)
            for (const ab of Ub._postProcesses) ab && ab._outputTexture === bb && (ab._outputTexture = null)
        }
      }
      _rescaleTexture(bb, ab, Ub, Ab, Mb) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Tb = this.createRenderTargetTexture({
          width: ab.width,
          height: ab.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && xb._RescalePostProcessFactory && (this._rescalePostProcess = xb._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Eb = () => {
              this._rescalePostProcess.onApply = function(ab) {
                ab._bindTexture("textureSampler", bb)
              };
              let Eb = Ub;
              Eb || (Eb = this.scenes[this.scenes.length - 1]), Eb.postProcessManager.directRender([this._rescalePostProcess], Tb, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, ab, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Ab, 0, 0, ab.width, ab.height, 0), this.unBindFramebuffer(Tb), Tb.dispose(), Mb && Mb()
            },
            Yb = this._rescalePostProcess.getEffect();
          Yb ? Yb.executeWhenCompiled(Eb) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((bb => {
            bb.executeWhenCompiled(Eb)
          }))
        }
      }
      wrapWebGLTexture(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Eb = new Lb.b(bb, this._gl),
          Yb = new Ab.b(this, 15, !0);
        return Yb._hardwareTexture = Eb, Yb.baseWidth = Mb, Yb.baseHeight = Tb, Yb.width = Mb, Yb.height = Tb, Yb.isReady = !0, Yb.useMipMaps = ab, this.updateTextureSamplingMode(Ub, Yb), Yb
      }
      updateWrappedWebGLTexture(bb, ab) {
        if (15 !== bb.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Ab of this._renderTargetWrapperCache)
          if (Ab.textures?.includes(bb)) {
            if (Ab.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Ab._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } bb._hardwareTexture = new Lb.b(ab, this._gl), bb.isReady = !0, bb._cachedCoordinatesMode = null, bb._cachedWrapU = null, bb._cachedWrapV = null, bb._cachedWrapR = null, bb._cachedAnisotropicFilteringLevel = null;
        for (const Ab in this._boundTexturesCache) this._boundTexturesCache[Ab] === bb && (this._boundTexturesCache[Ab] = null);
        this.updateTextureSamplingMode(bb.samplingMode, bb);
        const Ub = this._gl;
        for (const Ab of this._renderTargetWrapperCache) {
          if (Ab.texture !== bb) continue;
          const Mb = Ab,
            Tb = Ab.samples,
            Eb = Tb > 1;
          Mb._framebuffer && Ub.deleteFramebuffer(Mb._framebuffer), !Eb && Mb._depthStencilBuffer && (Ub.deleteRenderbuffer(Mb._depthStencilBuffer), Mb._depthStencilBuffer = null);
          const Yb = this._currentFramebuffer,
            Bb = Ub.createFramebuffer();
          this._bindUnboundFramebuffer(Bb), Ub.framebufferTexture2D(Ub.FRAMEBUFFER, Ub.COLOR_ATTACHMENT0, Ub.TEXTURE_2D, ab, 0), Eb || (Mb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ab._generateStencilBuffer, Ab._generateDepthBuffer, Ab.width, Ab.height)), this._bindUnboundFramebuffer(Yb), Mb._framebuffer = Bb, Eb && (Ab._samples = 1, this.updateRenderTargetTextureSampleCount(Mb, Tb))
        }
      }
      _uploadImageToTexture(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Mb = this._gl,
          Tb = this._getWebGLTextureType(bb.type),
          Eb = this._getInternalFormat(bb.format),
          Yb = this._getRGBABufferInternalSizedFormat(bb.type, Eb),
          Bb = bb.isCube ? Mb.TEXTURE_CUBE_MAP : Mb.TEXTURE_2D;
        this._bindTextureDirectly(Bb, bb, !0), this._unpackFlipY(bb.invertY);
        let eb = Mb.TEXTURE_2D;
        bb.isCube && (eb = Mb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub), Mb.texImage2D(eb, Ab, Yb, Eb, Tb, ab), this._bindTextureDirectly(Bb, null, !0)
      }
      updateTextureComparisonFunction(bb, ab) {
        if (1 === this.oj) return void vb.e.Error("WebGL 1 does not support texture comparison.");
        const Ub = this._gl;
        bb.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, bb, !0), 0 === ab ? (Ub.texParameteri(Ub.TEXTURE_CUBE_MAP, Ub.TEXTURE_COMPARE_FUNC, 515), Ub.texParameteri(Ub.TEXTURE_CUBE_MAP, Ub.TEXTURE_COMPARE_MODE, Ub.NONE)) : (Ub.texParameteri(Ub.TEXTURE_CUBE_MAP, Ub.TEXTURE_COMPARE_FUNC, ab), Ub.texParameteri(Ub.TEXTURE_CUBE_MAP, Ub.TEXTURE_COMPARE_MODE, Ub.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), 0 === ab ? (Ub.texParameteri(Ub.TEXTURE_2D, Ub.TEXTURE_COMPARE_FUNC, 515), Ub.texParameteri(Ub.TEXTURE_2D, Ub.TEXTURE_COMPARE_MODE, Ub.NONE)) : (Ub.texParameteri(Ub.TEXTURE_2D, Ub.TEXTURE_COMPARE_FUNC, ab), Ub.texParameteri(Ub.TEXTURE_2D, Ub.TEXTURE_COMPARE_MODE, Ub.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), bb._comparisonFunction = ab
      }
      createInstancesBuffer(bb) {
        const ab = this._gl.createBuffer();
        if (!ab) throw new Error("Unable to create instance buffer");
        const Ub = new eb.e(ab);
        return Ub.PL = bb, this.bindArrayBuffer(Ub), this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, this._gl.DYNAMIC_DRAW), Ub.references = 1, Ub
      }
      deleteInstancesBuffer(bb) {
        this._gl.deleteBuffer(bb)
      }
      async _clientWaitAsync(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Ab = this._gl;
        return await new Promise(((Mb, Tb) => {
          (0, Zb.f)((() => {
            const Ub = Ab.clientWaitSync(bb, ab, 0);
            if (Ub == Ab.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Ub != Ab.TIMEOUT_EXPIRED
          }), Mb, Tb, Ub)
        }))
      }
      _readPixelsAsync(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Yb = this._gl,
          Bb = Yb.createBuffer();
        Yb.bindBuffer(Yb.PIXEL_PACK_BUFFER, Bb), Yb.bufferData(Yb.PIXEL_PACK_BUFFER, Eb.byteLength, Yb.STREAM_READ), Yb.readPixels(bb, ab, Ub, Ab, Mb, Tb, 0), Yb.bindBuffer(Yb.PIXEL_PACK_BUFFER, null);
        const eb = Yb.fenceSync(Yb.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return eb ? (Yb.flush(), this._clientWaitAsync(eb, 0, 10).then((() => (Yb.deleteSync(eb), Yb.bindBuffer(Yb.PIXEL_PACK_BUFFER, Bb), Yb.getBufferSubData(Yb.PIXEL_PACK_BUFFER, 0, Eb), Yb.bindBuffer(Yb.PIXEL_PACK_BUFFER, null), Yb.deleteBuffer(Bb), Eb)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(bb, ab) {
            1 === Mb.d.Instances.length && Pb.d.audioEngine && (Pb.d.audioEngine.dispose(), Pb.d.audioEngine = null);
            const Ub = bb.getHostWindow();
            Ub && "function" === typeof Ub.removeEventListener && (Ub.removeEventListener("blur", bb._onBlur), Ub.removeEventListener("focus", bb._onFocus)), ab && (ab.removeEventListener("focus", bb._onCanvasFocus), ab.removeEventListener("blur", bb._onCanvasBlur), ab.removeEventListener("pointerout", bb._onCanvasPointerOut), ab.removeEventListener("contextmenu", bb._onCanvasContextMenu)), (0, Xb.d)() && (document.removeEventListener("fullscreenchange", bb._onFullscreenChange), document.removeEventListener("mozfullscreenchange", bb._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", bb._onFullscreenChange), document.removeEventListener("msfullscreenchange", bb._onFullscreenChange), document.removeEventListener("pointerlockchange", bb._onPointerLockChange), document.removeEventListener("mspointerlockchange", bb._onPointerLockChange), document.removeEventListener("mozpointerlockchange", bb._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", bb._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    xb.ALPHA_DISABLE = 0, xb.ALPHA_ADD = 1, xb.ALPHA_COMBINE = 2, xb.ALPHA_SUBTRACT = 3, xb.ALPHA_MULTIPLY = 4, xb.ALPHA_MAXIMIZED = 5, xb.ALPHA_ONEONE = 6, xb.ALPHA_PREMULTIPLIED = 7, xb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, xb.ALPHA_INTERPOLATE = 9, xb.ALPHA_SCREENMODE = 10, xb.DELAYLOADSTATE_NONE = 0, xb.DELAYLOADSTATE_LOADED = 1, xb.DELAYLOADSTATE_LOADING = 2, xb.DELAYLOADSTATE_NOTLOADED = 4, xb.NEVER = 512, xb.ALWAYS = 519, xb.LESS = 513, xb.EQUAL = 514, xb.LEQUAL = 515, xb.GREATER = 516, xb.GEQUAL = 518, xb.NOTEQUAL = 517, xb.KEEP = 7680, xb.REPLACE = 7681, xb.INCR = 7682, xb.DECR = 7683, xb.INVERT = 5386, xb.INCR_WRAP = 34055, xb.DECR_WRAP = 34056, xb.TEXTURE_CLAMP_ADDRESSMODE = 0, xb.TEXTURE_WRAP_ADDRESSMODE = 1, xb.TEXTURE_MIRROR_ADDRESSMODE = 2, xb.TEXTUREFORMAT_ALPHA = 0, xb.TEXTUREFORMAT_LUMINANCE = 1, xb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, xb.TEXTUREFORMAT_RGB = 4, xb.TEXTUREFORMAT_RGBA = 5, xb.TEXTUREFORMAT_RED = 6, xb.TEXTUREFORMAT_R = 6, xb.TEXTUREFORMAT_R16_UNORM = 33322, xb.TEXTUREFORMAT_RG16_UNORM = 33324, xb.TEXTUREFORMAT_RGB16_UNORM = 32852, xb.TEXTUREFORMAT_RGBA16_UNORM = 32859, xb.TEXTUREFORMAT_R16_SNORM = 36760, xb.TEXTUREFORMAT_RG16_SNORM = 36761, xb.TEXTUREFORMAT_RGB16_SNORM = 36762, xb.TEXTUREFORMAT_RGBA16_SNORM = 36763, xb.TEXTUREFORMAT_RG = 7, xb.TEXTUREFORMAT_RED_INTEGER = 8, xb.TEXTUREFORMAT_R_INTEGER = 8, xb.TEXTUREFORMAT_RG_INTEGER = 9, xb.TEXTUREFORMAT_RGB_INTEGER = 10, xb.TEXTUREFORMAT_RGBA_INTEGER = 11, xb.TEXTURETYPE_UNSIGNED_BYTE = 0, xb.TEXTURETYPE_UNSIGNED_INT = 0, xb.TEXTURETYPE_FLOAT = 1, xb.TEXTURETYPE_HALF_FLOAT = 2, xb.TEXTURETYPE_BYTE = 3, xb.TEXTURETYPE_SHORT = 4, xb.TEXTURETYPE_UNSIGNED_SHORT = 5, xb.TEXTURETYPE_INT = 6, xb.TEXTURETYPE_UNSIGNED_INTEGER = 7, xb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, xb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, xb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, xb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, xb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, xb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, xb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, xb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, xb.TEXTURE_NEAREST_SAMPLINGMODE = 1, xb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, xb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, xb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, xb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, xb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, xb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, xb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, xb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, xb.TEXTURE_NEAREST_LINEAR = 7, xb.TEXTURE_NEAREST_NEAREST = 1, xb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, xb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, xb.TEXTURE_LINEAR_LINEAR = 2, xb.TEXTURE_LINEAR_NEAREST = 12, xb.TEXTURE_EXPLICIT_MODE = 0, xb.TEXTURE_SPHERICAL_MODE = 1, xb.TEXTURE_PLANAR_MODE = 2, xb.TEXTURE_CUBIC_MODE = 3, xb.TEXTURE_PROJECTION_MODE = 4, xb.TEXTURE_SKYBOX_MODE = 5, xb.TEXTURE_INVCUBIC_MODE = 6, xb.TEXTURE_EQUIRECTANGULAR_MODE = 7, xb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, xb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, xb.SCALEMODE_FLOOR = 1, xb.SCALEMODE_NEAREST = 2, xb.SCALEMODE_CEILING = 3
  },
  39084: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(39044);
    class Mb {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = bb, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, bb && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Ab.c)(bb.format))
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
        const ab = this._textures[bb],
          Ub = this._layerIndices?.[bb] ?? 0,
          Ab = this._faceIndices?.[bb] ?? 0;
        return ab.isCube ? 6 * Ub + Ab : ab.is3D ? 0 : Ub
      }
      get samples() {
        return this._samples
      }
      setSamples(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === bb && !Ub) return bb;
        const Ab = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, bb, ab) : this._engine.updateRenderTargetTextureSampleCount(this, bb);
        return this._samples = bb, Ab
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(bb, ab, Ub, Ab, Mb) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = bb, this._isCube = ab, this._size = Ub, this._engine = Ab, this._depthStencilTexture = null, this.label = Mb
      }
      setTextures(bb) {
        Array.isArray(bb) ? this._textures = bb : this._textures = bb ? [bb] : null
      }
      setTexture(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[ab] !== bb && (this._textures[ab] && Ub && this._textures[ab].dispose(), this._textures[ab] = bb)
      }
      setLayerAndFaceIndices(bb, ab) {
        this._layerIndices = bb, this._faceIndices = ab
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== ab && ab >= 0 && (this._layerIndices[bb] = ab), void 0 !== Ub && Ub >= 0 && (this._faceIndices[bb] = Ub)
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Ub, this._depthStencilTextureLabel = Tb, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: ab,
          comparisonFunction: bb,
          generateStencil: Ub,
          isCube: this._isCube,
          samples: Ab,
          depthTextureFormat: Mb,
          label: Tb
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
          const ab = this.textures;
          if (ab && ab.length > 0) {
            let Ub = !1,
              Ab = ab.length,
              Mb = -1;
            const Tb = ab[ab.length - 1]._source;
            14 !== Tb && 12 !== Tb || (Ub = !0, Mb = ab[ab.length - 1].format, Ab--);
            const Eb = [],
              Yb = [],
              Bb = [],
              eb = [],
              vb = [],
              Lb = [],
              Pb = [],
              Xb = {};
            for (let bb = 0; bb < Ab; ++bb) {
              const Ub = ab[bb];
              Eb.push(Ub.samplingMode), Yb.push(Ub.type), Bb.push(Ub.format);
              void 0 !== Xb[Ub.uniqueId] ? (eb.push(-1), Pb.push(0)) : (Xb[Ub.uniqueId] = bb, Ub.is2DArray ? (eb.push(35866), Pb.push(Ub.depth)) : Ub.isCube ? (eb.push(34067), Pb.push(0)) : Ub.is3D ? (eb.push(32879), Pb.push(Ub.depth)) : (eb.push(3553), Pb.push(0))), this._faceIndices && vb.push(this._faceIndices[bb] ?? 0), this._layerIndices && Lb.push(this._layerIndices[bb] ?? 0)
            }
            const jb = {
                samplingModes: Eb,
                generateMipMaps: ab[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Ub,
                depthTextureFormat: Mb,
                types: Yb,
                formats: Bb,
                YEb: Ab,
                targetTypes: eb,
                faceIndex: vb,
                layerIndex: Lb,
                layerCounts: Pb,
                label: this.label
              },
              Rb = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            bb = this._engine.createMultipleRenderTarget(Rb, jb);
            for (let kb = 0; kb < Ab; ++kb) {
              if (-1 !== eb[kb]) continue;
              const Ub = Xb[ab[kb].uniqueId];
              bb.setTexture(bb.textures[Ub], kb)
            }
          }
        } else {
          const ab = {};
          if (ab.generateDepthBuffer = this._generateDepthBuffer, ab.generateMipMaps = this.texture?.generateMipMaps ?? !1, ab.generateStencilBuffer = this._generateStencilBuffer, ab.samplingMode = this.texture?.samplingMode, ab.type = this.texture?.type, ab.format = this.texture?.format, ab.noColorAttachment = !this._textures, ab.label = this.label, this.isCube) bb = this._engine.createRenderTargetCubeTexture(this.width, ab);
          else {
            const Ub = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            bb = this._engine.createRenderTargetTexture(Ub, ab)
          }
          bb.texture && (bb.texture.isReady = !0)
        }
        return bb
      }
      _swapRenderTargetWrapper(bb) {
        if (this._textures && bb._textures)
          for (let ab = 0; ab < this._textures.length; ++ab) this._textures[ab]._swapAndDie(bb._textures[ab], !1), bb._textures[ab].isReady = !0;
        this._depthStencilTexture && bb._depthStencilTexture && (this._depthStencilTexture._swapAndDie(bb._depthStencilTexture), bb._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const bb = this._cloneRenderTargetWrapper();
        if (bb) {
          if (this._depthStencilTexture) {
            const ab = this._depthStencilTexture.samplingMode,
              Ub = this._depthStencilTexture.format,
              Ab = 2 === ab || 3 === ab || 11 === ab;
            bb.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Ab, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Ub, this._depthStencilTextureLabel)
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
  39543: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      static get ForceFullSceneLoadingForIncremental() {
        return Ab._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(bb) {
        Ab._ForceFullSceneLoadingForIncremental = bb
      }
      static get ShowLoadingScreen() {
        return Ab._ShowLoadingScreen
      }
      static set ShowLoadingScreen(bb) {
        Ab._ShowLoadingScreen = bb
      }
      static get loggingLevel() {
        return Ab._LoggingLevel
      }
      static set loggingLevel(bb) {
        Ab._LoggingLevel = bb
      }
      static get CleanBoneMatrixWeights() {
        return Ab._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(bb) {
        Ab._CleanBoneMatrixWeights = bb
      }
    }
    Ab._ForceFullSceneLoadingForIncremental = !1, Ab._ShowLoadingScreen = !0, Ab._CleanBoneMatrixWeights = !1, Ab._LoggingLevel = 0
  },
  39181: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(37989);
    const Mb = new Map;

    function Tb(bb, ab) {
      (function(bb) {
        return Mb.delete(bb)
      })(bb) && Ab.e.Warn(`Extension with the name '${bb}' already exists`), Mb.set(bb, ab)
    }

    function Eb(bb, ab) {
      "image/ktx" !== ab && "image/ktx2" !== ab || (bb = ".ktx"), Mb.has(bb) || (bb.endsWith(".ies") && Tb(".ies", (async () => await Ub.e(299).then((() => Ub(40881))).then((bb => new bb._IESTextureLoader)))), bb.endsWith(".dds") && Tb(".dds", (async () => await Ub.e(297).then((() => Ub(40886))).then((bb => new bb._DDSTextureLoader)))), bb.endsWith(".basis") && Tb(".basis", (async () => await Ub.e(300).then((() => Ub(40894))).then((bb => new bb._BasisTextureLoader)))), bb.endsWith(".env") && Tb(".env", (async () => await Promise.all([Ub.e(301), Ub.e(298)]).then((() => Ub(40899))).then((bb => new bb._ENVTextureLoader)))), bb.endsWith(".hdr") && Tb(".hdr", (async () => await Ub.e(302).then((() => Ub(40941))).then((bb => new bb._HDRTextureLoader)))), (bb.endsWith(".ktx") || bb.endsWith(".ktx2")) && (Tb(".ktx", (async () => await Ub.e(303).then((() => Ub(40943))).then((bb => new bb._KTXTextureLoader)))), Tb(".ktx2", (async () => await Ub.e(303).then((() => Ub(40943))).then((bb => new bb._KTXTextureLoader))))), bb.endsWith(".tga") && Tb(".tga", (async () => await Ub.e(304).then((() => Ub(40953))).then((bb => new bb._TGATextureLoader)))), bb.endsWith(".exr") && Tb(".exr", (async () => await Ub.e(305).then((() => Ub(40961))).then((bb => new bb._ExrTextureLoader)))));
      const Ab = Mb.get(bb);
      return Ab ? Promise.resolve(Ab(ab)) : null
    }
  },
  39570: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => eb
    });
    var Ab = Ub(39394),
      Mb = Ub(39130),
      Tb = Ub(36447);
    class Eb extends Ab.d {
      get N9() {
        return this._subMaterials
      }
      set N9(bb) {
        this._subMaterials = bb, this._hookArray(bb)
      }
      getChildren() {
        return this.N9
      }
      constructor(bb, ab) {
        super(bb, ab, !0), this._waitingSubMaterialsUniqueIds = [], this.oN().addMultiMaterial(this), this.N9 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(bb) {
        var ab = this;
        const Ub = bb.push;
        bb.push = function() {
          for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
          const Eb = Ub.apply(bb, Mb);
          return ab._markAllSubMeshesAsTexturesDirty(), Eb
        };
        const Ab = bb.splice;
        bb.splice = (ab, Ub) => {
          const Mb = Ab.call(bb, ab, Ub ?? bb.length);
          return this._markAllSubMeshesAsTexturesDirty(), Mb
        }
      }
      getSubMaterial(bb) {
        return bb < 0 || bb >= this.N9.length ? this.oN().defaultMaterial : this.N9[bb]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.N9.map((bb => bb ? bb.getActiveTextures() : [])))
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (let ab = 0; ab < this.N9.length; ab++)
          if (this.N9[ab]?.hasTexture(bb)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(bb, ab, Ub) {
        for (let Ab = 0; Ab < this.N9.length; Ab++) {
          const Mb = this.N9[Ab];
          if (Mb) {
            if (Mb._storeEffectOnSubMeshes) {
              if (!Mb.isReadyForSubMesh(bb, ab, Ub)) return !1;
              continue
            }
            if (!Mb.isReady(bb)) return !1
          }
        }
        return !0
      }
      clone(bb, ab) {
        const Ub = new Eb(bb, this.oN());
        for (let Ab = 0; Ab < this.N9.length; Ab++) {
          let Mb;
          const Tb = this.N9[Ab];
          Mb = ab && Tb ? Tb.clone(bb + "-" + Tb.name) : this.N9[Ab], Ub.N9.push(Mb)
        }
        return Ub
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, Mb.b && (bb.tags = Mb.b.GetTags(this)), bb.materialsUniqueIds = [], bb.materials = [];
        for (let ab = 0; ab < this.N9.length; ab++) {
          const Ub = this.N9[ab];
          Ub ? (bb.materialsUniqueIds.push(Ub.uniqueId), bb.materials.push(Ub.id)) : (bb.materialsUniqueIds.push(null), bb.materials.push(null))
        }
        return bb
      }
      dispose(bb, ab, Ub) {
        const Ab = this.oN();
        if (!Ab) return;
        if (Ub)
          for (let Tb = 0; Tb < this.N9.length; Tb++) {
            const Ub = this.N9[Tb];
            Ub && Ub.dispose(bb, ab)
          }
        const Mb = Ab.multiMaterials.indexOf(this);
        Mb >= 0 && Ab.multiMaterials.splice(Mb, 1), super.dispose(bb, ab)
      }
    }
    let Yb = !1;

    function Bb(bb, ab) {
      const Ub = new Eb(bb.name, ab);
      if (Ub.id = bb.id, Ub._loadedUniqueId = bb.uniqueId, Mb.b && Mb.b.AddTagsTo(Ub, bb.tags), bb.materialsUniqueIds) Ub._waitingSubMaterialsUniqueIds = bb.materialsUniqueIds;
      else
        for (const Ab of bb.materials) Ub.N9.push(ab.getLastMaterialById(Ab));
      return Ub
    }

    function eb() {
      Yb || (Yb = !0, Eb.ParseMultiMaterial = Bb, (0, Tb.f)("BABYLON.MultiMaterial", Eb))
    }
  },
  39323: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb
    });
    var Ab, Mb, Tb = Ub(36401);
    ! function(bb) {
      bb[bb.LOCAL = 0] = "LOCAL", bb[bb.WORLD = 1] = "WORLD", bb[bb.BONE = 2] = "BONE"
    }(Ab || (Ab = {}));
    class Eb {}
    Eb.X = new Tb.m(1, 0, 0), Eb.Y = new Tb.m(0, 1, 0), Eb.Z = new Tb.m(0, 0, 1),
      function(bb) {
        bb[bb.X = 0] = "X", bb[bb.Y = 1] = "Y", bb[bb.Z = 2] = "Z"
      }(Mb || (Mb = {}))
  },
  39090: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb,
      e: () => eb
    });
    var Ab = Ub(36401);
    const Mb = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Tb = [() => 1, bb => bb.y, bb => bb.z, bb => bb.x, bb => bb.x * bb.y, bb => bb.y * bb.z, bb => 3 * bb.z * bb.z - 1, bb => bb.x * bb.z, bb => bb.x * bb.x - bb.y * bb.y],
      Eb = (bb, ab) => Mb[bb] * Tb[bb](ab),
      Yb = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Bb {
      constructor() {
        this.preScaled = !1, this.l00 = Ab.m.Zero(), this.l1_1 = Ab.m.Zero(), this.l10 = Ab.m.Zero(), this.l11 = Ab.m.Zero(), this.l2_2 = Ab.m.Zero(), this.l2_1 = Ab.m.Zero(), this.l20 = Ab.m.Zero(), this.l21 = Ab.m.Zero(), this.l22 = Ab.m.Zero()
      }
      addLight(bb, ab, Ub) {
        Ab.j.Pj[0].set(ab.r, ab.g, ab.b);
        const Mb = Ab.j.Pj[0],
          Tb = Ab.j.Pj[1];
        Mb.scaleToRef(Ub, Tb), Tb.scaleToRef(Eb(0, bb), Ab.j.Pj[2]), this.l00.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(1, bb), Ab.j.Pj[2]), this.l1_1.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(2, bb), Ab.j.Pj[2]), this.l10.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(3, bb), Ab.j.Pj[2]), this.l11.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(4, bb), Ab.j.Pj[2]), this.l2_2.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(5, bb), Ab.j.Pj[2]), this.l2_1.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(6, bb), Ab.j.Pj[2]), this.l20.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(7, bb), Ab.j.Pj[2]), this.l21.addInPlace(Ab.j.Pj[2]), Tb.scaleToRef(Eb(8, bb), Ab.j.Pj[2]), this.l22.addInPlace(Ab.j.Pj[2])
      }
      scaleInPlace(bb) {
        this.l00.scaleInPlace(bb), this.l1_1.scaleInPlace(bb), this.l10.scaleInPlace(bb), this.l11.scaleInPlace(bb), this.l2_2.scaleInPlace(bb), this.l2_1.scaleInPlace(bb), this.l20.scaleInPlace(bb), this.l21.scaleInPlace(bb), this.l22.scaleInPlace(bb)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Yb[0]), this.l1_1.scaleInPlace(Yb[1]), this.l10.scaleInPlace(Yb[2]), this.l11.scaleInPlace(Yb[3]), this.l2_2.scaleInPlace(Yb[4]), this.l2_1.scaleInPlace(Yb[5]), this.l20.scaleInPlace(Yb[6]), this.l21.scaleInPlace(Yb[7]), this.l22.scaleInPlace(Yb[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Mb[0]), this.l1_1.scaleInPlace(Mb[1]), this.l10.scaleInPlace(Mb[2]), this.l11.scaleInPlace(Mb[3]), this.l2_2.scaleInPlace(Mb[4]), this.l2_1.scaleInPlace(Mb[5]), this.l20.scaleInPlace(Mb[6]), this.l21.scaleInPlace(Mb[7]), this.l22.scaleInPlace(Mb[8])
      }
      updateFromArray(bb) {
        return Ab.m.FromArrayToRef(bb[0], 0, this.l00), Ab.m.FromArrayToRef(bb[1], 0, this.l1_1), Ab.m.FromArrayToRef(bb[2], 0, this.l10), Ab.m.FromArrayToRef(bb[3], 0, this.l11), Ab.m.FromArrayToRef(bb[4], 0, this.l2_2), Ab.m.FromArrayToRef(bb[5], 0, this.l2_1), Ab.m.FromArrayToRef(bb[6], 0, this.l20), Ab.m.FromArrayToRef(bb[7], 0, this.l21), Ab.m.FromArrayToRef(bb[8], 0, this.l22), this
      }
      updateFromFloatsArray(bb) {
        return Ab.m.FromFloatsToRef(bb[0], bb[1], bb[2], this.l00), Ab.m.FromFloatsToRef(bb[3], bb[4], bb[5], this.l1_1), Ab.m.FromFloatsToRef(bb[6], bb[7], bb[8], this.l10), Ab.m.FromFloatsToRef(bb[9], bb[10], bb[11], this.l11), Ab.m.FromFloatsToRef(bb[12], bb[13], bb[14], this.l2_2), Ab.m.FromFloatsToRef(bb[15], bb[16], bb[17], this.l2_1), Ab.m.FromFloatsToRef(bb[18], bb[19], bb[20], this.l20), Ab.m.FromFloatsToRef(bb[21], bb[22], bb[23], this.l21), Ab.m.FromFloatsToRef(bb[24], bb[25], bb[26], this.l22), this
      }
      static FromArray(bb) {
        return (new Bb).updateFromArray(bb)
      }
      static FromPolynomial(bb) {
        const ab = new Bb;
        return ab.l00 = bb.xx.scale(.376127).add(bb.yy.scale(.376127)).add(bb.zz.scale(.376126)), ab.l1_1 = bb.y.scale(.977204), ab.l10 = bb.z.scale(.977204), ab.l11 = bb.x.scale(.977204), ab.l2_2 = bb.xy.scale(1.16538), ab.l2_1 = bb.yz.scale(1.16538), ab.l20 = bb.zz.scale(1.34567).subtract(bb.xx.scale(.672834)).subtract(bb.yy.scale(.672834)), ab.l21 = bb.zx.scale(1.16538), ab.l22 = bb.xx.scale(1.16538).subtract(bb.yy.scale(1.16538)), ab.l1_1.scaleInPlace(-1), ab.l11.scaleInPlace(-1), ab.l2_1.scaleInPlace(-1), ab.l21.scaleInPlace(-1), ab.scaleInPlace(Math.PI), ab
      }
    }
    class eb {
      constructor() {
        this.x = Ab.m.Zero(), this.y = Ab.m.Zero(), this.z = Ab.m.Zero(), this.xx = Ab.m.Zero(), this.yy = Ab.m.Zero(), this.zz = Ab.m.Zero(), this.xy = Ab.m.Zero(), this.yz = Ab.m.Zero(), this.zx = Ab.m.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Bb.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(bb) {
        Ab.j.Pj[0].K9(bb.r, bb.g, bb.b);
        const ab = Ab.j.Pj[0];
        this.xx.addInPlace(ab), this.yy.addInPlace(ab), this.zz.addInPlace(ab)
      }
      scaleInPlace(bb) {
        this.x.scaleInPlace(bb), this.y.scaleInPlace(bb), this.z.scaleInPlace(bb), this.xx.scaleInPlace(bb), this.yy.scaleInPlace(bb), this.zz.scaleInPlace(bb), this.yz.scaleInPlace(bb), this.zx.scaleInPlace(bb), this.xy.scaleInPlace(bb)
      }
      updateFromHarmonics(bb) {
        return this._harmonics = bb, this.x.EUb(bb.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.EUb(bb.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.EUb(bb.l10), this.z.scaleInPlace(1.02333), this.xx.EUb(bb.l00), Ab.j.Pj[0].EUb(bb.l20).scaleInPlace(.247708), Ab.j.Pj[1].EUb(bb.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).MAb(Ab.j.Pj[0]).addInPlace(Ab.j.Pj[1]), this.yy.EUb(bb.l00), this.yy.scaleInPlace(.886277).MAb(Ab.j.Pj[0]).MAb(Ab.j.Pj[1]), this.zz.EUb(bb.l00), Ab.j.Pj[0].EUb(bb.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Ab.j.Pj[0]), this.yz.EUb(bb.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.EUb(bb.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.EUb(bb.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(bb) {
        return (new eb).updateFromHarmonics(bb)
      }
      static FromArray(bb) {
        const ab = new eb;
        return Ab.m.FromArrayToRef(bb[0], 0, ab.x), Ab.m.FromArrayToRef(bb[1], 0, ab.y), Ab.m.FromArrayToRef(bb[2], 0, ab.z), Ab.m.FromArrayToRef(bb[3], 0, ab.xx), Ab.m.FromArrayToRef(bb[4], 0, ab.yy), Ab.m.FromArrayToRef(bb[5], 0, ab.zz), Ab.m.FromArrayToRef(bb[6], 0, ab.yz), Ab.m.FromArrayToRef(bb[7], 0, ab.zx), Ab.m.FromArrayToRef(bb[8], 0, ab.xy), ab
      }
    }
  },
  39555: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Fb,
      d: () => Gb
    });
    var Ab = Ub(39104),
      Mb = Ub(36431),
      Tb = Ub(36401),
      Eb = Ub(39244),
      Yb = Ub(39534),
      Bb = Ub(39561),
      eb = Ub(39240),
      vb = Ub(39413),
      Lb = Ub(39231);
    class Pb {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Tb.m(0, 0, 0), this._diffPositionForCollisions = new Tb.m(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Xb, jb, Rb, kb = Ub(38982),
      yb = Ub(39169),
      Zb = Ub(39422),
      Db = Ub(36593),
      zb = Ub(36405),
      xb = Ub(39323),
      ib = Ub(37989),
      fb = Ub(39110),
      mb = Ub(39002),
      pb = Ub(36447);

    function Nb(bb, ab) {
      return bb - Math.floor(bb / ab) * ab
    }

    function Wb(bb, ab, Ub) {
      bb instanceof Float32Array ? Tb.b.FromArrayToRef(bb, ab, Ub) : Ub.K9((0, yb.e)(bb[ab]), (0, yb.e)(bb[ab + 1]), (0, yb.e)(bb[ab + 2]), (0, yb.e)(bb[ab + 3]), (0, yb.e)(bb[ab + 4]), (0, yb.e)(bb[ab + 5]), (0, yb.e)(bb[ab + 6]), (0, yb.e)(bb[ab + 7]), (0, yb.e)(bb[ab + 8]), (0, yb.e)(bb[ab + 9]), (0, yb.e)(bb[ab + 10]), (0, yb.e)(bb[ab + 11]), (0, yb.e)(bb[ab + 12]), (0, yb.e)(bb[ab + 13]), (0, yb.e)(bb[ab + 14]), (0, yb.e)(bb[ab + 15]))
    }

    function Hb(bb, ab, Ub, Ab, Mb, Yb, Bb, eb, vb) {
      const Lb = Ub.texture,
        Pb = Lb?.getInternalTexture(),
        Xb = Pb?._bufferView;
      if (!(Xb instanceof Float32Array) && !(Xb instanceof Uint16Array)) return ib.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const jb = Lb.getSize(),
        Rb = function(bb, ab) {
          const Ub = bb.y - bb.x + 1,
            Ab = ab * bb.w / Ub,
            Mb = Ab < 1 ? 0 : 1,
            Tb = Ub - Mb;
          let Eb = Nb(Ab - Math.floor(Ab), 1) * Tb;
          return Eb = Nb(Eb + bb.z, Tb), Math.floor(Eb) + bb.x + Mb
        }(Ab, Ub.time);
      if (!isFinite(Rb) || Rb < 0 || Rb >= jb.height) return ib.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const kb = Tb.j.Pj[0],
        yb = Tb.j.Matrix[0],
        Zb = Tb.j.Matrix[1],
        Db = Rb * jb.width * 4,
        zb = ab === Eb.m.NormalKind ? Tb.m.TransformNormalFromFloatsToRef : Tb.m.TransformCoordinatesFromFloatsToRef;
      for (let Tb = 0, Eb = 0; Tb < bb.length; Tb += 3, Eb += 4) {
        let ab, Ub;
        for (yb.reset(), ab = 0; ab < 4 && ab < vb; ab++) Ub = Yb[Eb + ab], Ub > 0 && (Wb(Xb, Db + 16 * Math.floor(Mb[Eb + ab]), Zb), Zb.scaleAndAddToRef(Ub, yb));
        if (Bb && eb)
          for (ab = 0; ab < 4 && ab + 4 < vb; ab++) Ub = eb[Eb + ab], Ub > 0 && (Wb(Xb, Db + 16 * Math.floor(Bb[Eb + ab]), Zb), Zb.scaleAndAddToRef(Ub, yb));
        zb(bb[Tb], bb[Tb + 1], bb[Tb + 2], yb, kb), kb.toArray(bb, Tb)
      }
      return !0
    }
    class Ib {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Tb.m.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class db {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Ib, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Pb, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Fb = (() => {
        var bb;
        let ab, Pb = Bb.f,
          Xb = [];
        return bb = class extends Pb {
          static get BILLBOARDMODE_NONE() {
            return Bb.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Bb.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Bb.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Bb.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Bb.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Bb.f.BILLBOARDMODE_USE_POSITION
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
          set SL(bb) {
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
            const ab = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = bb, (1 === ab && 1 !== bb || 1 !== ab && 1 === bb) && this._markSubMeshesAsDirty((bb => {
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
            this._internalAbstractMeshDataInfo._material !== bb && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = bb, bb && bb.meshMap && (bb.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.mD && (this.resetDrawCache(void 0, null == bb), this._unBindEffect()))
          }
          getMaterialForRenderPass(bb) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[bb]
          }
          setMaterialForRenderPass(bb, ab) {
            this.resetDrawCache(bb), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Ub = this._internalAbstractMeshDataInfo._materialForRenderPass[bb];
            Ub?.meshMap?.[this.uniqueId] && (Ub.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[bb] = ab, ab && ab.meshMap && (ab.meshMap[this.uniqueId] = this)
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
            const ab = this._internalAbstractMeshDataInfo._skeleton;
            ab && ab.needInitialSkinMatrix && ab._unregisterMeshWithPoseMatrix(this), bb && bb.needInitialSkinMatrix && bb._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = bb, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(ab) {
            var Ub;
            let Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(ab, Ab, !1), Ub = this, this._internalAbstractMeshDataInfo = new db, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Mb.b, this.onCollisionPositionChangeObservable = new Mb.b, this.onMaterialChangedObservable = new Mb.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.zR = bb.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Db.c.Red(), this.outlineWidth = .02, this.overlayColor = Db.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Lj = !1, this.jj = !1, this.actionManager = null, this.ellipsoid = new Tb.m(.5, 1, .5), this.ellipsoidOffset = new Tb.m(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Db.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                DW: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Mb.b, this._onCollisionPositionChange = function(bb, ab) {
                let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ab.subtractToRef(Ub._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Ub._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Ub._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > mb.d.CollisionsEpsilon && Ub.position.addInPlace(Ub._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Ab && Ub.onCollideObservable.notifyObservers(Ab), Ub.onCollisionPositionChangeObservable.notifyObservers(Ub.position)
              }, Ab = this.oN(), this.layerMask = Ab.defaultRenderableLayerMask, Ab.rUb(this), this._resyncLightSources(), this._uniformBuffer = new Lb.b(this.oN().vj(), void 0, void 0, ab, !this.oN().vj().isWebGPU), this._buildUniformLayout(), Ab.performancePriority) {
              case 2:
                this.jj = !0;
              case 1:
                this.Lj = !0, this.zR = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(bb) {
            const ab = this._uniformBuffer;
            ab.i5("world", bb), ab.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), ab.update()
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
            let ab = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            ab += ", # of submeshes: " + (this.mD ? this.mD.length : 0);
            const Ub = this._internalAbstractMeshDataInfo._skeleton;
            return Ub && (ab += ", skeleton: " + Ub.name), bb && (ab += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], ab += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.DW ? "YES" : "NO")), ab
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Bb.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(bb) {
            let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (ab || this.actionManager.isRecursive)) {
              if (!bb) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(bb)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(bb, !1) : null
          }
          _releaseRenderPassId(bb) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.mD) {
              for (const bb of this.mD) bb._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const bb of this.oN().lights) bb.isEnabled() && bb.canAffectMesh(this) && this._lightSources.push(bb);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(bb) {
            const ab = bb.isEnabled() && bb.canAffectMesh(this),
              Ub = this._lightSources.indexOf(bb);
            let Ab = !1;
            if (-1 === Ub) {
              if (!ab) return;
              this._lightSources.push(bb)
            } else {
              if (ab) return;
              Ab = !0, this._lightSources.splice(Ub, 1)
            }
            this._markSubMeshesAsLightDirty(Ab)
          }
          _unBindEffect() {
            for (const bb of this.mD) bb.setEffect(null)
          }
          _removeLightSource(bb, ab) {
            const Ub = this._lightSources.indexOf(bb); - 1 !== Ub && (this._lightSources.splice(Ub, 1), this._markSubMeshesAsLightDirty(ab))
          }
          _markSubMeshesAsDirty(bb) {
            if (this.mD)
              for (const ab of this.mD)
                for (let Ub = 0; Ub < ab._drawWrappers.length; ++Ub) {
                  const Ab = ab._drawWrappers[Ub];
                  Ab && Ab.defines && Ab.defines.markAllAsDirty && bb(Ab.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((ab => ab.markAsLightDirty(bb)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsMiscDirty()))
          }
          Aab(bb) {
            return this._currentRenderId = Number.MAX_VALUE, super.Aab(bb), this._isDirty = !0, this
          }
          resetDrawCache(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.mD)
              for (const Ub of this.mD) Ub.resetDrawCache(bb, ab)
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
          uUb() {
            return null
          }
          getVerticesData(bb) {
            return null
          }
          setVerticesData(bb, ab, Ub, Ab) {
            return this
          }
          updateVerticesData(bb, ab, Ub, Ab) {
            return this
          }
          setIndices(bb, ab) {
            return this
          }
          isVerticesDataPresent(bb) {
            return !1
          }
          DH() {
            return this._masterMesh ? this._masterMesh.DH() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.DH()
          }
          setBoundingInfo(bb) {
            return this._boundingInfo = bb, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(bb, ab, Ub) {
            return this._boundingInfo = new vb.b(bb, ab, Ub), this._boundingInfo
          }
          normalizeToUnitCube() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(bb, ab, Ub)
          }
          get useBones() {
            return this.skeleton && this.oN().skeletonsEnabled && this.isVerticesDataPresent(Eb.m.MatricesIndicesKind) && this.isVerticesDataPresent(Eb.m.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(bb) {}
          _activate(bb, ab) {
            return this._renderId = bb, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Bb.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get EW() {
            return !1
          }
          get IAb() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(bb, ab, Ub) {
            return this.position.addInPlace(this.calcMovePOV(bb, ab, Ub)), this
          }
          calcMovePOV(bb, ab, Ub) {
            const Ab = new Tb.b;
            (this.rotationQuaternion ? this.rotationQuaternion : Tb.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Ab);
            const Mb = Tb.m.Zero(),
              Eb = this.definedFacingForward ? -1 : 1;
            return Tb.m.TransformCoordinatesFromFloatsToRef(bb * Eb, ab, Ub * Eb, Ab, Mb), Mb
          }
          rotatePOV(bb, ab, Ub) {
            return this.rotation.addInPlace(this.calcRotatePOV(bb, ab, Ub)), this
          }
          calcRotatePOV(bb, ab, Ub) {
            const Ab = this.definedFacingForward ? 1 : -1;
            return new Tb.m(bb * Ab, ab, Ub * Ab)
          }
          _refreshBoundingInfo(bb, ab) {
            if (bb) {
              const Ub = (0, Zb.g)(bb, 0, this.getTotalVertices(), ab);
              this._boundingInfo ? this._boundingInfo.reConstruct(Ub.minimum, Ub.maximum) : this._boundingInfo = new vb.b(Ub.minimum, Ub.maximum)
            }
            if (this.mD)
              for (let Ub = 0; Ub < this.mD.length; Ub++) this.mD[Ub].refreshBoundingInfo(bb);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(bb) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(bb.minimum, bb.maximum) : this._boundingInfo = new vb.b(bb.minimum, bb.maximum), this.mD)
              for (let ab = 0; ab < this.mD.length; ab++) this.mD[ab].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(bb, ab, Ub, Ab, Mb, Yb, Bb) {
            ! function(bb, ab, Ub, Ab, Mb, Yb, Bb) {
              const eb = Tb.j.Pj[0],
                vb = Tb.j.Matrix[0],
                Lb = Tb.j.Matrix[1],
                Pb = ab === Eb.m.NormalKind ? Tb.m.TransformNormalFromFloatsToRef : Tb.m.TransformCoordinatesFromFloatsToRef;
              for (let Eb = 0, Xb = 0; Eb < bb.length; Eb += 3, Xb += 4) {
                let ab, jb;
                for (vb.reset(), ab = 0; ab < 4; ab++) jb = Mb[Xb + ab], jb > 0 && (Tb.b.FromFloat32ArrayToRefScaled(Ub, Math.floor(16 * Ab[Xb + ab]), jb, Lb), vb.addToSelf(Lb));
                if (Yb && Bb)
                  for (ab = 0; ab < 4; ab++) jb = Bb[Xb + ab], jb > 0 && (Tb.b.FromFloat32ArrayToRefScaled(Ub, Math.floor(16 * Yb[Xb + ab]), jb, Lb), vb.addToSelf(Lb));
                Pb(bb[Eb], bb[Eb + 1], bb[Eb + 2], vb, eb), eb.toArray(bb, Eb)
              }
            }(bb, ab, Ub, Ab, Mb, Yb, Bb)
          }
          _getData(ab, Ub) {
            let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eb.m.PositionKind;
            const Mb = ab.cache,
              Yb = bb => {
                if (Mb) {
                  const ab = Mb._vertexData || (Mb._vertexData = {});
                  return ab[bb] || this.copyVerticesData(bb, ab), ab[bb]
                }
                return this.getVerticesData(bb)
              };
            if (Ub || (Ub = Yb(Ab)), !Ub) return null;
            Mb ? (Mb._outputData ? Mb._outputData.set(Ub) : Mb._outputData = new Float32Array(Ub), Ub = Mb._outputData) : (ab.applyMorph && this.morphTargetManager || ab.applySkeleton && this.skeleton || ab.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Ub = Ub.slice()), ab.applyMorph && this.morphTargetManager && function(bb, ab, Ub) {
              let Ab;
              switch (ab) {
                case Eb.m.PositionKind:
                  Ab = bb => bb.getPositions();
                  break;
                case Eb.m.NormalKind:
                  Ab = bb => bb.getNormals();
                  break;
                case Eb.m.TangentKind:
                  Ab = bb => bb.getTangents();
                  break;
                case Eb.m.UVKind:
                  Ab = bb => bb.getUVs();
                  break;
                case Eb.m.UV2Kind:
                  Ab = bb => bb.getUV2s();
                  break;
                case Eb.m.ColorKind:
                  Ab = bb => bb.getColors();
                  break;
                default:
                  return
              }
              for (let Mb = 0; Mb < bb.length; Mb++) {
                let ab = bb[Mb];
                for (let Tb = 0; Tb < Ub.numTargets; Tb++) {
                  const Eb = Ub.getTarget(Tb),
                    Yb = Eb.influence;
                  if (0 !== Yb) {
                    const Ub = Ab(Eb);
                    Ub && (ab += (Ub[Mb] - bb[Mb]) * Yb)
                  }
                }
                bb[Mb] = ab
              }
            }(Ub, Ab, this.morphTargetManager);
            const Bb = this.bakedVertexAnimationManager;
            let eb = !1;
            if (ab.applyBakedVertexAnimation && Bb?.isEnabled) {
              const bb = Yb(Eb.m.MatricesIndicesKind),
                Mb = Yb(Eb.m.MatricesWeightsKind);
              if (Mb && bb) {
                const Tb = this.numBoneInfluencers > 4,
                  vb = Tb ? Yb(Eb.m.MatricesIndicesExtraKind) : null,
                  Lb = Tb ? Yb(Eb.m.MatricesWeightsExtraKind) : null;
                eb = Hb(Ub, Ab, Bb, ab.bakedVertexAnimationSettings ?? Bb.animationParameters, bb, Mb, vb, Lb, this.numBoneInfluencers)
              }
            }
            if (!eb && ab.applySkeleton && this.skeleton) {
              const ab = Yb(Eb.m.MatricesIndicesKind),
                Mb = Yb(Eb.m.MatricesWeightsKind);
              if (Mb && ab) {
                const Tb = this.numBoneInfluencers > 4,
                  Bb = Tb ? Yb(Eb.m.MatricesIndicesExtraKind) : null,
                  eb = Tb ? Yb(Eb.m.MatricesWeightsExtraKind) : null,
                  vb = this.skeleton.getTransformMatrices(this);
                bb._ApplySkeleton(Ub, Ab, vb, ab, Mb, Bb, eb)
              }
            }
            if (!1 !== ab.updatePositionsArray && Ab === Eb.m.PositionKind) {
              const bb = this._internalAbstractMeshDataInfo._positions || [],
                ab = bb.length;
              if (bb.length = Ub.length / 3, ab < bb.length)
                for (let Ub = ab; Ub < bb.length; Ub++) bb[Ub] = new Tb.m;
              for (let Ab = 0, Mb = 0; Ab < bb.length; Ab++, Mb += 3) bb[Ab].K9(Ub[Mb], Ub[Mb + 1], Ub[Mb + 2]);
              this._internalAbstractMeshDataInfo._positions = bb
            }
            return Ub
          }
          getNormalsData() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: bb,
              applyMorph: ab,
              updatePositionsArray: !1
            }, null, Eb.m.NormalKind)
          }
          Al() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: bb,
              applyMorph: ab,
              updatePositionsArray: !1
            }, Ub, Eb.m.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new vb.b(Tb.m.Zero(), Tb.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(bb) {
            if (!this.mD) return this;
            const ab = this.mD.length;
            for (let Ub = 0; Ub < ab; Ub++) {
              const Ab = this.mD[Ub];
              (ab > 1 || !Ab.IsGlobal) && Ab.updateBoundingInfo(bb)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.jj || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(bb) {
            return this.DH().isInFrustum(bb, this.cullingStrategy)
          }
          isCompletelyInFrustum(bb) {
            return this.DH().isCompletelyInFrustum(bb)
          }
          fAb(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = arguments.length > 2 ? arguments[2] : void 0;
            const Ab = this.DH(),
              Mb = bb.DH();
            if (Ab.intersects(Mb, ab)) return !0;
            if (Ub)
              for (const Tb of this.getChildMeshes())
                if (Tb.fAb(bb, ab, !0)) return !0;
            return !1
          }
          intersectsPoint(bb) {
            return this.DH().intersectsPoint(bb)
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
            let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Ub = this.oN().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Ub.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Ub.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, bb, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, ab), this
          }
          _collideForSubMesh(bb, ab, Ub) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!bb._lastColliderWorldVertices || !bb._lastColliderTransformMatrix.equals(ab)) {
              bb._lastColliderTransformMatrix = ab.clone(), bb._lastColliderWorldVertices = [], bb._trianglePlanes = [];
              const Ub = bb.verticesStart,
                Ab = bb.verticesStart + bb.verticesCount;
              for (let Mb = Ub; Mb < Ab; Mb++) bb._lastColliderWorldVertices.push(Tb.m.TransformCoordinates(this._positions[Mb], ab))
            }
            return Ub._collide(bb._trianglePlanes, bb._lastColliderWorldVertices, this.uUb(), bb.indexStart, bb.indexStart + bb.indexCount, bb.verticesStart, !!bb.Rj(), this, this._shouldConvertRHS(), 7 === bb.Rj()?.fillMode), this
          }
          _processCollisionsForSubMeshes(bb, ab) {
            const Ub = this._scene.getCollidingSubMeshCandidates(this, bb),
              Ab = Ub.length;
            for (let Mb = 0; Mb < Ab; Mb++) {
              const Tb = Ub.data[Mb];
              Ab > 1 && !Tb._checkCollision(bb) || this._collideForSubMesh(Tb, ab, bb)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(bb) {
            if (!this.DH()._checkCollision(bb)) return this;
            const ab = Tb.j.Matrix[0],
              Ub = Tb.j.Matrix[1];
            return Tb.b.ScalingToRef(1 / bb._radius.x, 1 / bb._radius.y, 1 / bb._radius.z, ab), this.worldMatrixFromCache.multiplyToRef(ab, Ub), this._processCollisionsForSubMeshes(bb, Ub), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(bb, ab, Ub) {
            let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Mb = arguments.length > 4 ? arguments[4] : void 0,
              Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Yb = new eb.e,
              Bb = this.getClassName(),
              vb = "InstancedLinesMesh" === Bb || "LinesMesh" === Bb || "GreasedLineMesh" === Bb ? this.intersectionThreshold : 0,
              Lb = this.DH();
            if (!this.mD) return Yb;
            if (!Eb && (!bb.intersectsSphere(Lb.BAb, vb) || !bb.intersectsBox(Lb.boundingBox, vb))) return Yb;
            if (Ab) return Yb.hit = !Eb, Yb.pickedMesh = Eb ? null : this, Yb.distance = Eb ? 0 : Tb.m.Distance(bb.origin, Lb.BAb.center), Yb.subMeshId = 0, Yb;
            if (!this._generatePointsArray()) return Yb;
            let Pb = null;
            const Xb = this._scene.getIntersectingSubMeshCandidates(this, bb),
              jb = Xb.length;
            let Rb = !1;
            for (let Tb = 0; Tb < jb; Tb++) {
              const bb = Xb.data[Tb].Rj();
              if (bb && (7 == bb.fillMode || 0 == bb.fillMode || 1 == bb.fillMode || 2 == bb.fillMode || 4 == bb.fillMode)) {
                Rb = !0;
                break
              }
            }
            if (!Rb) return Yb.hit = !0, Yb.pickedMesh = this, Yb.distance = Tb.m.Distance(bb.origin, Lb.BAb.center), Yb.subMeshId = -1, Yb;
            for (let Tb = 0; Tb < jb; Tb++) {
              const Ab = Xb.data[Tb];
              if (jb > 1 && !Eb && !Ab.canIntersects(bb)) continue;
              const Mb = Ab.intersects(bb, this._positions, this.uUb(), ab, Ub);
              if (Mb && (ab || !Pb || Mb.distance < Pb.distance) && (Pb = Mb, Pb.subMeshId = Ab._id, Pb._internalSubMeshId = Tb, ab)) break
            }
            if (Pb) {
              const ab = Mb ?? this.getWorldMatrix(),
                Ub = Tb.j.Pj[0],
                Ab = Tb.j.Pj[1];
              Tb.m.TransformCoordinatesToRef(bb.origin, ab, Ub), bb.direction.scaleToRef(Pb.distance, Ab);
              const Eb = Tb.m.TransformNormal(Ab, ab).addInPlace(Ub);
              return Yb.hit = !0, Yb.distance = Tb.m.Distance(Ub, Eb), Yb.pickedPoint = Eb, Yb.pickedMesh = this, Yb.bu = Pb.bu || 0, Yb.bv = Pb.bv || 0, Yb.subMeshFaceId = Pb.faceId, Yb.faceId = Pb.faceId + Xb.data[Pb._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Yb.subMeshId = Pb.subMeshId, Yb
            }
            return Yb
          }
          clone(bb, ab, Ub) {
            return null
          }
          releaseSubMeshes() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.mD)
              for (; this.mD.length;) this.mD[0].dispose(bb);
            else this.mD = [];
            return this
          }
          dispose(bb) {
            let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Ab = this.oN();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Ab.freeActiveMeshes(), Ab.freeRenderingGroups(), Ab.renderingManager.maintainStateBetweenFrames && Ab.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((bb => bb !== this && bb.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), ab = 0; ab < this._intersectionsInProgress.length; ab++) {
              const bb = this._intersectionsInProgress[ab],
                Ub = bb._intersectionsInProgress.indexOf(this);
              bb._intersectionsInProgress.splice(Ub, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Mb = Ab.lights;
            for (const Eb of Mb) {
              let bb = Eb.includedOnlyMeshes.indexOf(this); - 1 !== bb && Eb.includedOnlyMeshes.splice(bb, 1), bb = Eb.excludedMeshes.indexOf(this), -1 !== bb && Eb.excludedMeshes.splice(bb, 1);
              const ab = Eb.getShadowGenerators();
              if (ab) {
                const Ub = ab.values();
                for (let ab = Ub.next(); !0 !== ab.done; ab = Ub.next()) {
                  const Ub = ab.value.getShadowMap();
                  Ub && Ub.renderList && (bb = Ub.renderList.indexOf(this), -1 !== bb && Ub.renderList.splice(bb, 1))
                }
              }
            }
            this.releaseSubMeshes(Ab._isDisposing);
            const Tb = Ab.vj();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Tb.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Tb.wipeCaches(), Ab.iW(this), this._parentContainer) {
              const bb = this._parentContainer.meshes.indexOf(this);
              bb > -1 && this._parentContainer.meshes.splice(bb, 1), this._parentContainer = null
            }
            if (Ub && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !bb)
              for (ab = 0; ab < Ab.pD.length; ab++) Ab.pD[ab].emitter === this && (Ab.pD[ab].dispose(), ab--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(bb, Ub)
          }
          _initFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetNormals || (bb.facetNormals = []), bb.facetPositions || (bb.facetPositions = []), bb.facetPartitioning || (bb.facetPartitioning = new Array), bb.facetNb = this.uUb().length / 3 | 0, bb.partitioningSubdivisions = bb.partitioningSubdivisions ? bb.partitioningSubdivisions : 10, bb.partitioningBBoxRatio = bb.partitioningBBoxRatio ? bb.partitioningBBoxRatio : 1.01;
            for (let ab = 0; ab < bb.facetNb; ab++) bb.facetNormals[ab] = Tb.m.Zero(), bb.facetPositions[ab] = Tb.m.Zero();
            return bb.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetDataEnabled || this._initFacetData();
            const ab = this.getVerticesData(Eb.m.PositionKind),
              Ub = this.uUb(),
              Ab = this.getVerticesData(Eb.m.NormalKind)?.slice(),
              Mb = this.DH();
            if (bb.facetDepthSort && !bb.facetDepthSortEnabled) {
              if (bb.facetDepthSortEnabled = !0, Ub instanceof Uint16Array) bb.depthSortedIndices = new Uint16Array(Ub);
              else if (Ub instanceof Uint32Array) bb.depthSortedIndices = new Uint32Array(Ub);
              else {
                let ab = !1;
                for (let bb = 0; bb < Ub.length; bb++)
                  if (Ub[bb] > 65535) {
                    ab = !0;
                    break
                  } bb.depthSortedIndices = ab ? new Uint32Array(Ub) : new Uint16Array(Ub)
              }
              if (bb.facetDepthSortFunction = function(bb, ab) {
                  return ab.sqDistance - bb.sqDistance
                }, !bb.facetDepthSortFrom) {
                const ab = this.oN().activeCamera;
                bb.facetDepthSortFrom = ab ? ab.position : Tb.m.Zero()
              }
              bb.depthSortedFacets = [];
              for (let ab = 0; ab < bb.facetNb; ab++) {
                const Ub = {
                  ind: 3 * ab,
                  sqDistance: 0
                };
                bb.depthSortedFacets.push(Ub)
              }
              bb.invertedMatrix = Tb.b.Identity(), bb.facetDepthSortOrigin = Tb.m.Zero()
            }
            bb.bbSize.x = Mb.maximum.x - Mb.minimum.x > zb.e ? Mb.maximum.x - Mb.minimum.x : zb.e, bb.bbSize.y = Mb.maximum.y - Mb.minimum.y > zb.e ? Mb.maximum.y - Mb.minimum.y : zb.e, bb.bbSize.z = Mb.maximum.z - Mb.minimum.z > zb.e ? Mb.maximum.z - Mb.minimum.z : zb.e;
            let Bb = bb.bbSize.x > bb.bbSize.y ? bb.bbSize.x : bb.bbSize.y;
            if (Bb = Bb > bb.bbSize.z ? Bb : bb.bbSize.z, bb.subDiv.max = bb.partitioningSubdivisions, bb.subDiv.X = Math.floor(bb.subDiv.max * bb.bbSize.x / Bb), bb.subDiv.Y = Math.floor(bb.subDiv.max * bb.bbSize.y / Bb), bb.subDiv.Z = Math.floor(bb.subDiv.max * bb.bbSize.z / Bb), bb.subDiv.X = bb.subDiv.X < 1 ? 1 : bb.subDiv.X, bb.subDiv.Y = bb.subDiv.Y < 1 ? 1 : bb.subDiv.Y, bb.subDiv.Z = bb.subDiv.Z < 1 ? 1 : bb.subDiv.Z, bb.facetParameters.facetNormals = this.getFacetLocalNormals(), bb.facetParameters.facetPositions = this.getFacetLocalPositions(), bb.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), bb.facetParameters.bInfo = Mb, bb.facetParameters.bbSize = bb.bbSize, bb.facetParameters.subDiv = bb.subDiv, bb.facetParameters.ratio = this.partitioningBBoxRatio, bb.facetParameters.depthSort = bb.facetDepthSort, bb.facetDepthSort && bb.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(bb.invertedMatrix), Tb.m.TransformCoordinatesToRef(bb.facetDepthSortFrom, bb.invertedMatrix, bb.facetDepthSortOrigin), bb.facetParameters.distanceTo = bb.facetDepthSortOrigin), bb.facetParameters.depthSortedFacets = bb.depthSortedFacets, Ab && Yb.c.ComputeNormals(ab, Ub, Ab, bb.facetParameters), bb.facetDepthSort && bb.facetDepthSortEnabled) {
              bb.depthSortedFacets.sort(bb.facetDepthSortFunction);
              const ab = bb.depthSortedIndices.length / 3 | 0;
              for (let Ab = 0; Ab < ab; Ab++) {
                const ab = bb.depthSortedFacets[Ab].ind;
                bb.depthSortedIndices[3 * Ab] = Ub[ab], bb.depthSortedIndices[3 * Ab + 1] = Ub[ab + 1], bb.depthSortedIndices[3 * Ab + 2] = Ub[ab + 2]
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
            const ab = Tb.m.Zero();
            return this.getFacetPositionToRef(bb, ab), ab
          }
          getFacetPositionToRef(bb, ab) {
            const Ub = this.getFacetLocalPositions()[bb],
              Ab = this.getWorldMatrix();
            return Tb.m.TransformCoordinatesToRef(Ub, Ab, ab), this
          }
          getFacetNormal(bb) {
            const ab = Tb.m.Zero();
            return this.getFacetNormalToRef(bb, ab), ab
          }
          getFacetNormalToRef(bb, ab) {
            const Ub = this.getFacetLocalNormals()[bb];
            return Tb.m.TransformNormalToRef(Ub, this.getWorldMatrix(), ab), this
          }
          getFacetsAtLocalCoordinates(bb, ab, Ub) {
            const Ab = this.DH(),
              Mb = this._internalAbstractMeshDataInfo._facetData,
              Tb = Math.floor((bb - Ab.minimum.x * Mb.partitioningBBoxRatio) * Mb.subDiv.X * Mb.partitioningBBoxRatio / Mb.bbSize.x),
              Eb = Math.floor((ab - Ab.minimum.y * Mb.partitioningBBoxRatio) * Mb.subDiv.Y * Mb.partitioningBBoxRatio / Mb.bbSize.y),
              Yb = Math.floor((Ub - Ab.minimum.z * Mb.partitioningBBoxRatio) * Mb.subDiv.Z * Mb.partitioningBBoxRatio / Mb.bbSize.z);
            return Tb < 0 || Tb > Mb.subDiv.max || Eb < 0 || Eb > Mb.subDiv.max || Yb < 0 || Yb > Mb.subDiv.max ? null : Mb.facetPartitioning[Tb + Mb.subDiv.max * Eb + Mb.subDiv.max * Mb.subDiv.max * Yb]
          }
          getClosestFacetAtCoordinates(bb, ab, Ub, Ab) {
            let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Yb = this.getWorldMatrix(),
              Bb = Tb.j.Matrix[5];
            Yb.invertToRef(Bb);
            const eb = Tb.j.Pj[8];
            Tb.m.TransformCoordinatesFromFloatsToRef(bb, ab, Ub, Bb, eb);
            const vb = this.getClosestFacetAtLocalCoordinates(eb.x, eb.y, eb.z, Ab, Mb, Eb);
            return Ab && Tb.m.TransformCoordinatesFromFloatsToRef(Ab.x, Ab.y, Ab.z, Yb, Ab), vb
          }
          getClosestFacetAtLocalCoordinates(bb, ab, Ub, Ab) {
            let Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Xb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              jb = null;
            const Rb = this.getFacetLocalPositions(),
              kb = this.getFacetLocalNormals(),
              yb = this.getFacetsAtLocalCoordinates(bb, ab, Ub);
            if (!yb) return null;
            let Zb, Db, zb, xb, ib = Number.MAX_VALUE;
            for (let fb = 0; fb < yb.length; fb++) Db = yb[fb], zb = kb[Db], xb = Rb[Db], Yb = (bb - xb.x) * zb.x + (ab - xb.y) * zb.y + (Ub - xb.z) * zb.z, (!Pb || Pb && Xb && Yb >= 0 || Pb && !Xb && Yb <= 0) && (Yb = zb.x * xb.x + zb.y * xb.y + zb.z * xb.z, Bb = -(zb.x * bb + zb.y * ab + zb.z * Ub - Yb) / (zb.x * zb.x + zb.y * zb.y + zb.z * zb.z), eb = bb + zb.x * Bb, vb = ab + zb.y * Bb, Lb = Ub + zb.z * Bb, Mb = eb - bb, Tb = vb - ab, Eb = Lb - Ub, Zb = Mb * Mb + Tb * Tb + Eb * Eb, Zb < ib && (ib = Zb, jb = Db, Ab && (Ab.x = eb, Ab.y = vb, Ab.z = Lb)));
            return jb
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetDataEnabled && (bb.facetDataEnabled = !1, bb.facetPositions = [], bb.facetNormals = [], bb.facetPartitioning = new Array, bb.facetParameters = {}, bb.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(bb, ab) {
            return this
          }
          createNormals(bb) {
            const ab = this.getVerticesData(Eb.m.PositionKind),
              Ub = this.uUb();
            let Ab;
            return Ab = this.isVerticesDataPresent(Eb.m.NormalKind) ? this.getVerticesData(Eb.m.NormalKind) : [], Yb.c.ComputeNormals(ab, Ub, Ab, {
              useRightHandedSystem: this.oN().useRightHandedSystem
            }), this.setVerticesData(Eb.m.NormalKind, Ab, bb), this
          }
          async optimizeIndicesAsync() {
            const bb = this.uUb();
            if (!bb) return this;
            const {
              OptimizeIndices: ab
            } = await Ub.e(341).then((() => Ub(41637)));
            return ab(bb), this.setIndices(bb, this.getTotalVertices()), this
          }
          alignWithNormal(bb, ab) {
            ab || (ab = xb.d.Y);
            const Ub = Tb.j.Pj[0],
              Ab = Tb.j.Pj[1];
            return Tb.m.CrossToRef(ab, bb, Ab), Tb.m.CrossToRef(bb, Ab, Ub), this.rotationQuaternion ? Tb.e.RotationQuaternionFromAxisToRef(Ub, bb, Ab, this.rotationQuaternion) : Tb.m.RotationFromAxisToRef(Ub, bb, Ab, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, kb.l)("EdgesRenderer")
          }
          enableEdgesRendering(bb, ab, Ub) {
            throw (0, kb.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.pD.filter((bb => bb.emitter === this))
          }
        }, (() => {
          const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pb[Symbol.metadata] ?? null) : void 0;
          ab = [fb.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Ab.h)(bb, null, ab, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: bb => "_ApplySkeleton" in bb,
              get: bb => bb._ApplySkeleton
            },
            metadata: Ub
          }, null, Xb), Ub && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ub
          })
        })(), bb.OCCLUSION_TYPE_NONE = ((0, Ab.k)(bb, Xb), 0), bb.OCCLUSION_TYPE_OPTIMISTIC = 1, bb.OCCLUSION_TYPE_STRICT = 2, bb.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, bb.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, bb.CULLINGSTRATEGY_STANDARD = 0, bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, bb.DefaultIsPickable = !0, bb
      })(),
      hb = !1;

    function Gb() {
      hb || (hb = !0, (0, pb.f)("BABYLON.AbstractMesh", Fb))
    }(Xb = Fb.prototype).createOrUpdateSubmeshesOctree ?? (Xb.createOrUpdateSubmeshesOctree = (0, kb.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (jb = Fb.prototype).getPhysicsImpostor ?? (jb.getPhysicsImpostor = (0, kb.i)("AbstractMesh", "getPhysicsImpostor")), (Rb = Fb.prototype).setPhysicsLinkWith ?? (Rb.setPhysicsLinkWith = (0, kb.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Fb.prototype, "occlusionRetryCount") || Object.defineProperty(Fb.prototype, "occlusionRetryCount", (0, kb.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Fb.prototype, "occlusionType") || Object.defineProperty(Fb.prototype, "occlusionType", (0, kb.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Fb.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Fb.prototype, "occlusionQueryAlgorithmType", (0, kb.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Fb.prototype, "isOccluded") || Object.defineProperty(Fb.prototype, "isOccluded", (0, kb.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Fb.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Fb.prototype, "isOcclusionQueryInProgress", (0, kb.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Fb.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Fb.prototype, "forceRenderingWhenOccluded", (0, kb.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Fb.prototype, "occlusionForRenderPassId") || Object.defineProperty(Fb.prototype, "occlusionForRenderPassId", (0, kb.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Fb.prototype, "decalMap") || Object.defineProperty(Fb.prototype, "decalMap", (0, kb.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Fb.prototype, "YH") || Object.defineProperty(Fb.prototype, "YH", (0, kb.g)("AbstractMesh", "YH")), Object.getOwnPropertyDescriptor(Fb.prototype, "physicsImpostor") || Object.defineProperty(Fb.prototype, "physicsImpostor", (0, kb.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Fb.prototype, "showBoundingBox") || Object.defineProperty(Fb.prototype, "showBoundingBox", (0, kb.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Fb.prototype, "edgesRenderer") || Object.defineProperty(Fb.prototype, "edgesRenderer", (0, kb.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Fb.prototype, "renderOutline") || Object.defineProperty(Fb.prototype, "renderOutline", (0, kb.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Fb.prototype, "renderOverlay") || Object.defineProperty(Fb.prototype, "renderOverlay", (0, kb.g)("AbstractMesh", "renderOverlay"))
  },
  39541: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => yb
    });
    var Ab = Ub(36401),
      Mb = Ub(36593),
      Tb = Ub(39534),
      Eb = Ub(39244),
      Yb = Ub(39400),
      Bb = Ub(39543),
      eb = Ub(39413),
      vb = Ub(39195),
      Lb = Ub(37989),
      Pb = Ub(39130),
      Xb = Ub(39422),
      jb = Ub(36425),
      Rb = Ub(39549),
      kb = Ub(39167);
    class yb {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(bb) {
        this._boundingBias ? this._boundingBias.EUb(bb) : this._boundingBias = bb.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(bb) {
        const ab = new yb(yb.RandomId(), bb.oN());
        return ab.applyToMesh(bb), ab
      }
      get meshes() {
        return this._meshes
      }
      constructor(bb, ab, Ub) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Ab.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Ab.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = ab || jb.d.LastCreatedScene, this._scene && (this.id = bb, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.vj(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Mb, null !== Eb && (this._totalVertices = Eb), Ub ? this.setAllVerticesData(Ub, Mb) : null === Eb && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Tb && (this.applyToMesh(Tb), Tb.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      oN() {
        return this._scene
      }
      vj() {
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
        for (const ab in this._vertexBuffers) bb.add(this._vertexBuffers[ab].getWrapperBuffer());
        bb.forEach((bb => {
          bb._rebuild()
        }))
      }
      setAllVerticesData(bb, ab) {
        bb.applyToGeometry(this, ab), this._notifyUpdate()
      }
      setVerticesData(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        Ub && Array.isArray(ab) && (ab = new Float32Array(ab));
        const Mb = new Eb.m(this._engine, ab, bb, {
          updatable: Ub,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Ab,
          label: "Geometry_" + this.id + "_" + bb
        });
        this.setVerticesBuffer(Mb)
      }
      removeVerticesData(bb) {
        this._vertexBuffers[bb] && (this._vertexBuffers[bb].dispose(), delete this._vertexBuffers[bb]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Mb = bb.getKind();
        this._vertexBuffers[Mb] && Ub && this._vertexBuffers[Mb].dispose(), bb._buffer && bb._ownsBuffer && bb._buffer._increaseReferences(), this._vertexBuffers[Mb] = bb;
        const Tb = this._meshes,
          Yb = Tb.length;
        if (Mb === Eb.m.PositionKind) {
          this._totalVertices = ab ?? bb._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : bb.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Ub = this._extend && this._extend.minimum || new Ab.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Mb = this._extend && this._extend.maximum || new Ab.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let bb = 0; bb < Yb; bb++) {
            const ab = Tb[bb];
            ab.buildBoundingInfo(Ub, Mb), ab._createGlobalSubMesh(ab.isUnIndexed), ab.computeWorldMatrix(!0), ab.synchronizeInstances()
          }
        }
        this._notifyUpdate(Mb)
      }
      updateVerticesDataDirectly(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Mb = this.getVertexBuffer(bb);
        Mb && (Mb.updateDirectly(ab, Ub, Ab), this._notifyUpdate(bb))
      }
      updateVerticesData(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this.getVertexBuffer(bb);
        Ab && (Ab.update(ab), bb === Eb.m.PositionKind && this._updateBoundingInfo(Ub, ab), this._notifyUpdate(bb))
      }
      _updateBoundingInfo(bb, ab) {
        if (bb && this._updateExtend(ab), this._resetPointsArrayCache(), bb) {
          const bb = this._meshes;
          for (const ab of bb) {
            ab.hasBoundingInfo ? ab.DH().reConstruct(this._extend.minimum, this._extend.maximum) : ab.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const bb = ab.mD;
            for (const ab of bb) ab.refreshBoundingInfo()
          }
        }
      }
      _bind(bb, ab, Ub, Ab) {
        if (!bb) return;
        void 0 === ab && (ab = this._indexBuffer);
        const Mb = this.getVertexBuffers();
        if (!Mb) return;
        if (ab != this._indexBuffer || !this._vertexArrayObjects && !Ab) return void this._engine.bindBuffers(Mb, ab, bb, Ub);
        const Tb = Ab || this._vertexArrayObjects,
          Eb = this._engine;
        Tb[bb.key] || (Tb[bb.key] = Eb.recordVertexArrayObject(Mb, ab, bb, Ub)), Eb.bindVertexArrayObject(Tb[bb.key], ab)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(bb, ab, Ub) {
        const Ab = this.getVertexBuffer(bb);
        return Ab ? Ab.getFloatData(this._totalVertices, Ub || ab && 1 !== this._meshes.length) : null
      }
      copyVerticesData(bb, ab) {
        const Ub = this.getVertexBuffer(bb);
        if (!Ub) return;
        ab[bb] || (ab[bb] = new Float32Array(this._totalVertices * Ub.getSize()));
        const Ab = Ub.getData();
        Ab && (0, kb.f)(Ab, Ub.getSize(), Ub.type, Ub.byteOffset, Ub.byteStride, Ub.normalized, this._totalVertices, ab[bb])
      }
      isVertexBufferUpdatable(bb) {
        const ab = this._vertexBuffers[bb];
        return !!ab && ab.isUpdatable()
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
        let ab;
        if (!this._vertexBuffers && this._delayInfo)
          for (ab in this._delayInfo) bb.push(ab);
        else
          for (ab in this._vertexBuffers) bb.push(ab);
        return bb
      }
      updateIndices(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Ab = bb.length !== this._indices.length;
            if (Ub || (this._indices = bb.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, bb, ab), Ab)
              for (const bb of this._meshes) bb._createGlobalSubMesh(!0)
          } else this.setIndices(bb, null, !0)
      }
      setIndexBuffer(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = bb, this._totalVertices = ab, this._totalIndices = Ub, bb.is32Bits = null === Ab ? ab > 65535 : Ab;
        for (const Mb of this._meshes) Mb._createGlobalSubMesh(!0), Mb.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = bb, this._indexBufferIsUpdatable = Ub, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Ub, "Geometry_" + this.id + "_IndexBuffer")), void 0 != ab && (this._totalVertices = ab);
        for (const Mb of this._meshes) Mb._createGlobalSubMesh(!Ab), Mb.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      uUb(bb, ab) {
        if (!this.isReady()) return null;
        const Ub = this._indices;
        return ab || bb && 1 !== this._meshes.length ? Ub.slice() : Ub
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        bb && this._vertexArrayObjects && this._vertexArrayObjects[bb.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[bb.key]), delete this._vertexArrayObjects[bb.key])
      }
      releaseForMesh(bb, ab) {
        const Ub = this._meshes,
          Ab = Ub.indexOf(bb); - 1 !== Ab && (Ub.splice(Ab, 1), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject(), bb._geometry = null, 0 === Ub.length && ab && this.dispose())
      }
      applyToMesh(bb) {
        if (bb._geometry === this) return;
        const ab = bb._geometry;
        ab && ab.releaseForMesh(bb), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject();
        const Ub = this._meshes;
        bb._geometry = this, bb._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Ub.push(bb), this.isReady() ? this._applyToMesh(bb) : this._boundingInfo && bb.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!bb && (bb = this.getVerticesData(Eb.m.PositionKind), !bb)) return;
          this._extend = (0, Xb.g)(bb, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(bb) {
        for (const ab in this._vertexBuffers) {
          const Ub = this._vertexBuffers[ab];
          Ub._buffer.getBuffer() || Ub.create(), ab === Eb.m.PositionKind && (this._extend || this._updateExtend(), bb.buildBoundingInfo(this._extend.minimum, this._extend.maximum), bb._createGlobalSubMesh(bb.isUnIndexed), bb._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), bb._syncGeometryWithMorphTargetManager(), bb.synchronizeInstances()
      }
      _notifyUpdate(bb) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, bb), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const ab of this._meshes) ab._markSubMeshesAsAttributesDirty()
      }
      load(bb, ab) {
        2 !== this.delayLoadState && (this.isReady() ? ab && ab() : (this.delayLoadState = 2, this._queueLoad(bb, ab)))
      }
      _queueLoad(bb, ab) {
        this.delayLoadingFile && (bb.addPendingData(this), (async () => {
          try {
            const Ub = await bb._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void bb.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Ub), this), this.delayLoadState = 1, this._delayInfo = [], bb.removePendingData(this);
            const Ab = this._meshes,
              Mb = Ab.length;
            for (let bb = 0; bb < Mb; bb++) this._applyToMesh(Ab[bb]);
            ab && ab()
          } catch (Ub) {
            bb.removePendingData(this), bb.Jab || Lb.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Ub}`)
          }
        })())
      }
      toLeftHanded() {
        const bb = this.uUb(!1);
        if (null != bb && bb.length > 0) {
          for (let ab = 0; ab < bb.length; ab += 3) {
            const Ub = bb[ab + 0];
            bb[ab + 0] = bb[ab + 2], bb[ab + 2] = Ub
          }
          this.setIndices(bb)
        }
        const ab = this.getVerticesData(Eb.m.PositionKind, !1);
        if (null != ab && ab.length > 0) {
          for (let bb = 0; bb < ab.length; bb += 3) ab[bb + 2] = -ab[bb + 2];
          this.setVerticesData(Eb.m.PositionKind, ab, !1)
        }
        const Ub = this.getVerticesData(Eb.m.NormalKind, !1);
        if (null != Ub && Ub.length > 0) {
          for (let bb = 0; bb < Ub.length; bb += 3) Ub[bb + 2] = -Ub[bb + 2];
          this.setVerticesData(Eb.m.NormalKind, Ub, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const bb = this.getVerticesData(Eb.m.PositionKind);
        if (!bb || 0 === bb.length) return !1;
        for (let ab = 3 * this._positionsCache.length, Ub = this._positionsCache.length; ab < bb.length; ab += 3, ++Ub) this._positionsCache[Ub] = Ab.m.FromArray(bb, ab);
        for (let ab = 0, Ub = 0; ab < bb.length; ab += 3, ++Ub) this._positionsCache[Ub].set(bb[0 + ab], bb[1 + ab], bb[2 + ab]);
        return this._positionsCache.length = bb.length / 3, this._positions = this._positionsCache, !0
      }
      Jab() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Ub in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Ub]);
          this._vertexArrayObjects = {};
          const bb = this._meshes,
            ab = bb.length;
          for (let Ub = 0; Ub < ab; Ub++) bb[Ub]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const bb = this._meshes,
          ab = bb.length;
        let Ub;
        for (Ub = 0; Ub < ab; Ub++) this.releaseForMesh(bb[Ub]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Ab in this._vertexBuffers) this._vertexBuffers[Ab].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const bb = this._parentContainer.geometries.indexOf(this);
          bb > -1 && this._parentContainer.geometries.splice(bb, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(bb) {
        const ab = new yb(bb, this._scene),
          Ub = this.uUb(void 0, !0);
        Ub && ab.setIndices(Ub);
        let Ab, Mb = !1;
        for (Ab in this._vertexBuffers) {
          const bb = this.getVertexBuffer(Ab),
            Ub = bb.getData();
          if (!Ub) continue;
          const Tb = bb.isUpdatable(),
            Yb = bb.getSize(),
            {
              type: Bb,
              byteOffset: eb,
              byteStride: vb,
              normalized: Lb
            } = bb;
          Mb = Mb || Tb;
          let Pb = this._totalVertices;
          if (bb.getIsInstanced()) {
            let bb;
            bb = Ub instanceof Array ? 4 * Ub.length : Ub.byteLength, Pb = bb / vb
          }
          const Xb = (0, kb.p)(Ub, Yb, Bb, eb, vb, Pb, !0),
            jb = new Eb.m(this._engine, Xb, Ab, {
              updatable: Tb,
              useBytes: !1,
              stride: Yb,
              size: Yb,
              offset: 0,
              type: Bb,
              normalized: Lb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            });
          ab.setVerticesBuffer(jb, Pb)
        }
        for (Ab in ab._updatable = Mb, ab.delayLoadState = this.delayLoadState, ab.delayLoadingFile = this.delayLoadingFile, ab._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) ab._delayInfo = ab._delayInfo || [], ab._delayInfo.push(Ab);
        return ab._boundingInfo = new eb.b(this._extend.minimum, this._extend.maximum), ab
      }
      serialize() {
        const bb = {};
        return bb.id = this.id, bb.uniqueId = this.uniqueId, bb.updatable = this._updatable, Pb.b && Pb.b.HasTags(this) && (bb.tags = Pb.b.GetTags(this)), bb
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
        return this.isVerticesDataPresent(Eb.m.PositionKind) && (bb.positions = this._toNumberArray(this.getVerticesData(Eb.m.PositionKind)), this.isVertexBufferUpdatable(Eb.m.PositionKind) && (bb.positionsUpdatable = !0)), this.isVerticesDataPresent(Eb.m.NormalKind) && (bb.normals = this._toNumberArray(this.getVerticesData(Eb.m.NormalKind)), this.isVertexBufferUpdatable(Eb.m.NormalKind) && (bb.normalsUpdatable = !0)), this.isVerticesDataPresent(Eb.m.TangentKind) && (bb.tangents = this._toNumberArray(this.getVerticesData(Eb.m.TangentKind)), this.isVertexBufferUpdatable(Eb.m.TangentKind) && (bb.tangentsUpdatable = !0)), this.isVerticesDataPresent(Eb.m.UVKind) && (bb.uvs = this._toNumberArray(this.getVerticesData(Eb.m.UVKind)), this.isVertexBufferUpdatable(Eb.m.UVKind) && (bb.uvsUpdatable = !0)), this.isVerticesDataPresent(Eb.m.UV2Kind) && (bb.uvs2 = this._toNumberArray(this.getVerticesData(Eb.m.UV2Kind)), this.isVertexBufferUpdatable(Eb.m.UV2Kind) && (bb.uvs2Updatable = !0)), this.isVerticesDataPresent(Eb.m.UV3Kind) && (bb.uvs3 = this._toNumberArray(this.getVerticesData(Eb.m.UV3Kind)), this.isVertexBufferUpdatable(Eb.m.UV3Kind) && (bb.uvs3Updatable = !0)), this.isVerticesDataPresent(Eb.m.UV4Kind) && (bb.uvs4 = this._toNumberArray(this.getVerticesData(Eb.m.UV4Kind)), this.isVertexBufferUpdatable(Eb.m.UV4Kind) && (bb.uvs4Updatable = !0)), this.isVerticesDataPresent(Eb.m.UV5Kind) && (bb.uvs5 = this._toNumberArray(this.getVerticesData(Eb.m.UV5Kind)), this.isVertexBufferUpdatable(Eb.m.UV5Kind) && (bb.uvs5Updatable = !0)), this.isVerticesDataPresent(Eb.m.UV6Kind) && (bb.uvs6 = this._toNumberArray(this.getVerticesData(Eb.m.UV6Kind)), this.isVertexBufferUpdatable(Eb.m.UV6Kind) && (bb.uvs6Updatable = !0)), this.isVerticesDataPresent(Eb.m.ColorKind) && (bb.colors = this._toNumberArray(this.getVerticesData(Eb.m.ColorKind)), this.isVertexBufferUpdatable(Eb.m.ColorKind) && (bb.colorsUpdatable = !0)), this.isVerticesDataPresent(Eb.m.MatricesIndicesKind) && (bb.matricesIndices = this._toNumberArray(this.getVerticesData(Eb.m.MatricesIndicesKind)), bb.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Eb.m.MatricesIndicesKind) && (bb.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Eb.m.MatricesWeightsKind) && (bb.matricesWeights = this._toNumberArray(this.getVerticesData(Eb.m.MatricesWeightsKind)), this.isVertexBufferUpdatable(Eb.m.MatricesWeightsKind) && (bb.matricesWeightsUpdatable = !0)), bb.indices = this._toNumberArray(this.uUb()), bb
      }
      static ExtractFromMesh(bb, ab) {
        const Ub = bb._geometry;
        return Ub ? Ub.copy(ab) : null
      }
      static RandomId() {
        return vb.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(bb, ab) {
        for (let Ub = 0; Ub < ab.geometries.length; Ub++)
          if (ab.geometries[Ub]._loadedUniqueId === bb) return ab.geometries[Ub];
        return null
      }
      static _ImportGeometry(bb, ab) {
        const Ub = ab.oN(),
          Ab = bb.geometryUniqueId,
          Tb = bb.geometryId;
        if (Ab || Tb) {
          const bb = Ab ? this._GetGeometryByLoadedUniqueId(Ab, Ub) : Ub.getGeometryById(Tb);
          bb && bb.applyToMesh(ab)
        } else if (bb instanceof ArrayBuffer) {
          const Ub = ab._binaryInfo;
          if (Ub.positionsAttrDesc && Ub.positionsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.positionsAttrDesc.offset, Ub.positionsAttrDesc.count);
            ab.setVerticesData(Eb.m.PositionKind, Ab, !1)
          }
          if (Ub.normalsAttrDesc && Ub.normalsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.normalsAttrDesc.offset, Ub.normalsAttrDesc.count);
            ab.setVerticesData(Eb.m.NormalKind, Ab, !1)
          }
          if (Ub.tangetsAttrDesc && Ub.tangetsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.tangetsAttrDesc.offset, Ub.tangetsAttrDesc.count);
            ab.setVerticesData(Eb.m.TangentKind, Ab, !1)
          }
          if (Ub.uvsAttrDesc && Ub.uvsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvsAttrDesc.offset, Ub.uvsAttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UVKind, Ab, !1)
          }
          if (Ub.uvs2AttrDesc && Ub.uvs2AttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvs2AttrDesc.offset, Ub.uvs2AttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UV2Kind, Ab, !1)
          }
          if (Ub.uvs3AttrDesc && Ub.uvs3AttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvs3AttrDesc.offset, Ub.uvs3AttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UV3Kind, Ab, !1)
          }
          if (Ub.uvs4AttrDesc && Ub.uvs4AttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvs4AttrDesc.offset, Ub.uvs4AttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UV4Kind, Ab, !1)
          }
          if (Ub.uvs5AttrDesc && Ub.uvs5AttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvs5AttrDesc.offset, Ub.uvs5AttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UV5Kind, Ab, !1)
          }
          if (Ub.uvs6AttrDesc && Ub.uvs6AttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.uvs6AttrDesc.offset, Ub.uvs6AttrDesc.count);
            if (Rb.e)
              for (let bb = 1; bb < Ab.length; bb += 2) Ab[bb] = 1 - Ab[bb];
            ab.setVerticesData(Eb.m.UV6Kind, Ab, !1)
          }
          if (Ub.colorsAttrDesc && Ub.colorsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.colorsAttrDesc.offset, Ub.colorsAttrDesc.count);
            ab.setVerticesData(Eb.m.ColorKind, Ab, !1, Ub.colorsAttrDesc.stride)
          }
          if (Ub.matricesIndicesAttrDesc && Ub.matricesIndicesAttrDesc.count > 0) {
            const Ab = new Int32Array(bb, Ub.matricesIndicesAttrDesc.offset, Ub.matricesIndicesAttrDesc.count),
              Mb = [];
            for (let bb = 0; bb < Ab.length; bb++) {
              const ab = Ab[bb];
              Mb.push(255 & ab), Mb.push((65280 & ab) >> 8), Mb.push((16711680 & ab) >> 16), Mb.push(ab >> 24 & 255)
            }
            ab.setVerticesData(Eb.m.MatricesIndicesKind, Mb, !1)
          }
          if (Ub.matricesIndicesExtraAttrDesc && Ub.matricesIndicesExtraAttrDesc.count > 0) {
            const Ab = new Int32Array(bb, Ub.matricesIndicesExtraAttrDesc.offset, Ub.matricesIndicesExtraAttrDesc.count),
              Mb = [];
            for (let bb = 0; bb < Ab.length; bb++) {
              const ab = Ab[bb];
              Mb.push(255 & ab), Mb.push((65280 & ab) >> 8), Mb.push((16711680 & ab) >> 16), Mb.push(ab >> 24 & 255)
            }
            ab.setVerticesData(Eb.m.MatricesIndicesExtraKind, Mb, !1)
          }
          if (Ub.matricesWeightsAttrDesc && Ub.matricesWeightsAttrDesc.count > 0) {
            const Ab = new Float32Array(bb, Ub.matricesWeightsAttrDesc.offset, Ub.matricesWeightsAttrDesc.count);
            ab.setVerticesData(Eb.m.MatricesWeightsKind, Ab, !1)
          }
          if (Ub.indicesAttrDesc && Ub.indicesAttrDesc.count > 0) {
            const Ab = new Int32Array(bb, Ub.indicesAttrDesc.offset, Ub.indicesAttrDesc.count);
            ab.setIndices(Ab, null)
          }
          if (Ub.subMeshesAttrDesc && Ub.subMeshesAttrDesc.count > 0) {
            const Ab = new Int32Array(bb, Ub.subMeshesAttrDesc.offset, 5 * Ub.subMeshesAttrDesc.count);
            ab.mD = [];
            for (let bb = 0; bb < Ub.subMeshesAttrDesc.count; bb++) {
              const Ub = Ab[5 * bb + 0],
                Mb = Ab[5 * bb + 1],
                Tb = Ab[5 * bb + 2],
                Eb = Ab[5 * bb + 3],
                Bb = Ab[5 * bb + 4];
              Yb.e.AddToMesh(Ub, Mb, Tb, Eb, Bb, ab)
            }
          }
        } else if (bb.positions && bb.normals && bb.indices) {
          if (ab.setVerticesData(Eb.m.PositionKind, bb.positions, bb.positions._updatable || bb.positionsUpdatable), ab.setVerticesData(Eb.m.NormalKind, bb.normals, bb.normals._updatable || bb.normalsUpdatable), bb.tangents && ab.setVerticesData(Eb.m.TangentKind, bb.tangents, bb.tangents._updatable || bb.tangentsUpdatable), bb.uvs && ab.setVerticesData(Eb.m.UVKind, bb.uvs, bb.uvs._updatable || bb.uvsUpdatable), bb.uvs2 && ab.setVerticesData(Eb.m.UV2Kind, bb.uvs2, bb.uvs2._updatable || bb.uvs2Updatable), bb.uvs3 && ab.setVerticesData(Eb.m.UV3Kind, bb.uvs3, bb.uvs3._updatable || bb.uvs3Updatable), bb.uvs4 && ab.setVerticesData(Eb.m.UV4Kind, bb.uvs4, bb.uvs4._updatable || bb.uvs4Updatable), bb.uvs5 && ab.setVerticesData(Eb.m.UV5Kind, bb.uvs5, bb.uvs5._updatable || bb.uvs5Updatable), bb.uvs6 && ab.setVerticesData(Eb.m.UV6Kind, bb.uvs6, bb.uvs6._updatable || bb.uvs6Updatable), bb.colors && ab.setVerticesData(Eb.m.ColorKind, Mb.g.CheckColors4(bb.colors, bb.positions.length / 3), bb.colors._updatable), bb.matricesIndices)
            if (bb.matricesIndices._isExpanded || bb.matricesIndicesExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExpanded, ab.setVerticesData(Eb.m.MatricesIndicesKind, bb.matricesIndices, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable);
            else {
              const Ub = [];
              for (let ab = 0; ab < bb.matricesIndices.length; ab++) {
                const Ab = bb.matricesIndices[ab];
                Ub.push(255 & Ab), Ub.push((65280 & Ab) >> 8), Ub.push((16711680 & Ab) >> 16), Ub.push(Ab >> 24 & 255)
              }
              ab.setVerticesData(Eb.m.MatricesIndicesKind, Ub, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable)
            } if (bb.matricesIndicesExtra)
            if (bb.matricesIndicesExtraExpanded || bb.matricesIndicesExtra._isExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExtraExpanded, ab.setVerticesData(Eb.m.MatricesIndicesExtraKind, bb.matricesIndicesExtra, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable);
            else {
              const Ub = [];
              for (let ab = 0; ab < bb.matricesIndicesExtra.length; ab++) {
                const Ab = bb.matricesIndicesExtra[ab];
                Ub.push(255 & Ab), Ub.push((65280 & Ab) >> 8), Ub.push((16711680 & Ab) >> 16), Ub.push(Ab >> 24 & 255)
              }
              ab.setVerticesData(Eb.m.MatricesIndicesExtraKind, Ub, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable)
            } bb.matricesWeights && (yb._CleanMatricesWeights(bb, ab), ab.setVerticesData(Eb.m.MatricesWeightsKind, bb.matricesWeights, bb.matricesWeights._updatable)), bb.matricesWeightsExtra && ab.setVerticesData(Eb.m.MatricesWeightsExtraKind, bb.matricesWeightsExtra, bb.matricesWeights._updatable), ab.setIndices(bb.indices, null)
        }
        if (bb.mD) {
          ab.mD = [];
          for (let Ub = 0; Ub < bb.mD.length; Ub++) {
            const Ab = bb.mD[Ub];
            Yb.e.AddToMesh(Ab.materialIndex, Ab.verticesStart, Ab.verticesCount, Ab.indexStart, Ab.indexCount, ab)
          }
        }
        ab._shouldGenerateFlatShading && (ab.convertToFlatShadedMesh(), ab._shouldGenerateFlatShading = !1), ab.computeWorldMatrix(!0), Ub.onMeshImportedObservable.notifyObservers(ab)
      }
      static _CleanMatricesWeights(bb, ab) {
        const Ub = .001;
        if (!Bb.d.CleanBoneMatrixWeights) return;
        let Ab;
        if (!(bb.skeletonId > -1)) return;
        {
          const Ub = ab.oN().getLastSkeletonById(bb.skeletonId);
          if (!Ub) return;
          Ab = Ub.bones.length
        }
        const Mb = ab.getVerticesData(Eb.m.MatricesIndicesKind),
          Tb = ab.getVerticesData(Eb.m.MatricesIndicesExtraKind),
          Yb = bb.matricesWeights,
          eb = bb.matricesWeightsExtra,
          vb = bb.numBoneInfluencer,
          Lb = Yb.length;
        for (let Eb = 0; Eb < Lb; Eb += 4) {
          let bb = 0,
            ab = -1;
          for (let Ab = 0; Ab < 4; Ab++) {
            const Mb = Yb[Eb + Ab];
            bb += Mb, Mb < Ub && ab < 0 && (ab = Ab)
          }
          if (eb)
            for (let Ab = 0; Ab < 4; Ab++) {
              const Mb = eb[Eb + Ab];
              bb += Mb, Mb < Ub && ab < 0 && (ab = Ab + 4)
            }
          if ((ab < 0 || ab > vb - 1) && (ab = vb - 1), bb > Ub) {
            const ab = 1 / bb;
            for (let bb = 0; bb < 4; bb++) Yb[Eb + bb] *= ab;
            if (eb)
              for (let bb = 0; bb < 4; bb++) eb[Eb + bb] *= ab
          } else ab >= 4 ? (eb[Eb + ab - 4] = 1 - bb, Tb[Eb + ab - 4] = Ab) : (Yb[Eb + ab] = 1 - bb, Mb[Eb + ab] = Ab)
        }
        ab.setVerticesData(Eb.m.MatricesIndicesKind, Mb), bb.matricesWeightsExtra && ab.setVerticesData(Eb.m.MatricesIndicesExtraKind, Tb)
      }
      static Parse(bb, ab, Ub) {
        const Mb = new yb(bb.id, ab, void 0, bb.updatable);
        return Mb._loadedUniqueId = bb.uniqueId, Pb.b && Pb.b.AddTagsTo(Mb, bb.tags), bb.delayLoadingFile ? (Mb.delayLoadState = 4, Mb.delayLoadingFile = Ub + bb.delayLoadingFile, Mb._boundingInfo = new eb.b(Ab.m.FromArray(bb.boundingBoxMinimum), Ab.m.FromArray(bb.boundingBoxMaximum)), Mb._delayInfo = [], bb.hasUVs && Mb._delayInfo.push(Eb.m.UVKind), bb.hasUVs2 && Mb._delayInfo.push(Eb.m.UV2Kind), bb.hasUVs3 && Mb._delayInfo.push(Eb.m.UV3Kind), bb.hasUVs4 && Mb._delayInfo.push(Eb.m.UV4Kind), bb.hasUVs5 && Mb._delayInfo.push(Eb.m.UV5Kind), bb.hasUVs6 && Mb._delayInfo.push(Eb.m.UV6Kind), bb.hasColors && Mb._delayInfo.push(Eb.m.ColorKind), bb.hasMatricesIndices && Mb._delayInfo.push(Eb.m.MatricesIndicesKind), bb.hasMatricesWeights && Mb._delayInfo.push(Eb.m.MatricesWeightsKind), Mb._delayLoadingFunction = Tb.c.ImportVertexData) : Tb.c.ImportVertexData(bb, Mb), ab.pushGeometry(Mb, !0), Mb
      }
    }
  },
  39589: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb,
      g: () => jb
    });
    var Ab = Ub(36401),
      Mb = Ub(37989),
      Tb = Ub(39555),
      Eb = Ub(39522),
      Yb = Ub(37982),
      Bb = Ub(39561),
      eb = Ub(39244),
      vb = Ub(36447);
    class Lb extends Tb.c {
      constructor(bb, ab) {
        super(bb, ab.oN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ab.B5(this), this._sourceMesh = ab, this._unIndexed = ab._unIndexed, this.position.EUb(ab.position), this.rotation.EUb(ab.rotation), this.nY.EUb(ab.nY), ab.rotationQuaternion && (this.rotationQuaternion = ab.rotationQuaternion.clone()), this.animations = ab.animations.slice();
        for (const Ub of ab.getAnimationRanges()) null != Ub && this.createAnimationRange(Ub.name, Ub.from, Ub.to);
        if (this.infiniteDistance = ab.infiniteDistance, this.setPivotMatrix(ab.getPivotMatrix()), ab.skeleton || ab.morphTargetManager || !ab.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const bb = ab.DH();
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
        this._sourceMesh?.receiveShadows !== bb && Mb.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(bb) {
        this._sourceMesh?.material !== bb && Mb.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(bb) {
        this._sourceMesh?.visibility !== bb && Mb.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(bb) {
        this._sourceMesh?.skeleton !== bb && Mb.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(bb) {
        this._sourceMesh && bb !== this._sourceMesh.renderingGroupId && Mb.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(bb) {
        this._sourceMesh && bb !== this._sourceMesh.meshBlendingTag && Mb.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get dAb() {
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
      getVerticesData(bb, ab, Ub) {
        return this._sourceMesh.getVerticesData(bb, ab, Ub)
      }
      copyVerticesData(bb, ab) {
        this._sourceMesh.copyVerticesData(bb, ab)
      }
      getVertexBuffer(bb, ab) {
        return this._sourceMesh.getVertexBuffer(bb, ab)
      }
      setVerticesData(bb, ab, Ub, Ab) {
        return this.dAb && this.dAb.setVerticesData(bb, ab, Ub, Ab), this.dAb
      }
      updateVerticesData(bb, ab, Ub, Ab) {
        return this.dAb && this.dAb.updateVerticesData(bb, ab, Ub, Ab), this.dAb
      }
      setIndices(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.dAb && this.dAb.setIndices(bb, ab), this.dAb
      }
      isVerticesDataPresent(bb) {
        return this._sourceMesh.isVerticesDataPresent(bb)
      }
      uUb() {
        return this._sourceMesh.uUb()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let bb, ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        bb = "object" === typeof ab ? ab : {
          applySkeleton: ab,
          applyMorph: Ub
        };
        const Ab = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(bb, null, eb.m.PositionKind), Ab), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(bb, ab) {
        if (super._activate(bb, ab), this._sourceMesh.mD || Mb.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, bb), ab) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Bb.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Ab.b);
          const bb = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Ab.j.Pj[7].EUb(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.EUb(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.EUb(Ab.j.Pj[7]), this._currentLOD._masterMesh = bb, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get EW() {
        return !0
      }
      getLOD(bb) {
        if (!bb) return this;
        const ab = this.dAb.getLODLevels();
        if (ab && 0 !== ab.length) {
          const ab = this.DH();
          this._currentLOD = this.dAb.getLOD(bb, ab.BAb)
        } else this._currentLOD = this.dAb;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(bb) {
        return this.dAb._preActivateForIntermediateRendering(bb)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.mD)
          for (let bb = 0; bb < this._sourceMesh.mD.length; bb++) this._sourceMesh.mD[bb].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.DH().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(bb);
        if (Yb.e.DeepCopy(this, Ab, ["name", "mD", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "dAb", "EW", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "IAb", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "PEb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), ab && (Ab.parent = ab), !Ub)
          for (let Mb = 0; Mb < this.oN().meshes.length; Mb++) {
            const bb = this.oN().meshes[Mb];
            bb.parent === this && bb.clone(bb.name, Ab)
          }
        return Ab.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Ab), Ab
      }
      dispose(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z5(this), super.dispose(bb, ab)
      }
      _serializeAsParent(bb) {
        super._serializeAsParent(bb), bb.parentId = this._sourceMesh.uniqueId, bb.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0, ab && ab.newSourcedMesh);
        Ab && Ub && Ub(this, Ab);
        for (const Mb of this.getChildTransformNodes(!0)) Mb.instantiateHierarchy(Ab, ab, Ub);
        return Ab
      }
    }
    let Pb = !1;

    function Xb(bb, ab, Ub, Ab, Mb) {
      for (let Tb = 0; Tb < ab.length; Tb++) {
        const Eb = bb[ab[Tb]] ?? 0,
          Yb = Mb + Ub[Tb];
        Eb.toArray ? Eb.toArray(Ab, Yb) : Eb.copyToArray ? Eb.copyToArray(Ab, Yb) : Ab[Yb] = Eb
      }
    }

    function jb() {
      Pb || (Pb = !0, Eb.d._instancedMeshFactory = (bb, ab) => {
        const Ub = new Lb(bb, ab);
        if (ab.YH) {
          Ub.YH = {};
          for (const bb in ab.YH) Ub.YH[bb] = ab.YH[bb]
        }
        return Ub
      }, Eb.d.prototype.UH = function(bb, ab) {
        if (!this.YH) {
          this.YH = {};
          for (const bb of this.instances) bb.YH = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.vj().getCaps().vertexArrayObject ? {} : void 0
        }), this.YH[bb] = null, this._userInstancedBuffersStorage.strides[bb] = ab;
        const Ub = this._userInstancedBuffersStorage;
        Ub.interleavedKinds = [], Ub.interleavedOffsets = [], Ub.interleavedRowStride = 0;
        for (const Ab in Ub.strides) Ub.interleavedKinds.push(Ab), Ub.interleavedOffsets.push(Ub.interleavedRowStride), Ub.interleavedRowStride += Ub.strides[Ab];
        Ub.interleavedData = new Float32Array(32 * Ub.interleavedRowStride);
        for (const Ab in Ub.interleavedBuffers) Ub.interleavedBuffers[Ab].buffer.dispose();
        Ub.interleavedBuffers = {}, Ub.vertexBuffers[bb] = null;
        for (const Ab of this.instances) Ab.YH[bb] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Eb.d.prototype._processInstancedBuffers = function(bb, ab) {
        const Ub = this._userInstancedBuffersStorage,
          Ab = Ub.interleavedRowStride;
        if (!Ab) return;
        const Mb = bb ? bb.length : 0,
          Tb = (Mb + 1) * Ab;
        let Eb = Ub.interleavedData;
        if (Eb.length < Tb) {
          let bb = Eb.length;
          for (; bb < Tb;) bb *= 2;
          Eb = Ub.interleavedData = new Float32Array(bb)
        }
        const Yb = Ub.interleavedKinds,
          Bb = Ub.interleavedOffsets;
        let vb = 0;
        ab && (Xb(this.YH, Yb, Bb, Eb, vb), vb += Ab);
        for (let eb = 0; eb < Mb; eb++) Xb(bb[eb].YH, Yb, Bb, Eb, vb), vb += Ab;
        let Lb = "shared",
          Pb = Ub.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Lb = this._instanceDataStorage.engine.currentRenderPassId, Ub.renderPasses || (Ub.renderPasses = {}), Ub.renderPasses[Lb] || (Ub.renderPasses[Lb] = {}), Pb = Ub.renderPasses[Lb]);
        const jb = Ub.interleavedBuffers[Lb];
        let Rb = !jb || jb.data !== Eb;
        for (let eb = 0; !Rb && eb < Yb.length; eb++) Rb = !Pb[Yb[eb]];
        if (!Rb) return void jb.buffer.updateDirectly(Eb, 0);
        jb?.buffer.dispose();
        const kb = new eb.c(this.vj(), Eb, !0, Ab, !1, !0);
        for (let eb = 0; eb < Yb.length; eb++) {
          const bb = Yb[eb],
            ab = kb.createVertexBuffer(bb, Bb[eb], Ub.strides[bb]);
          ab.hashCode += ab.byteOffset * 2 ** 24, Pb[bb] = ab
        }
        Ub.interleavedBuffers[Lb] = {
          buffer: kb,
          data: Eb
        }, this._invalidateInstanceVertexArrayObject()
      }, Eb.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const bb in this._userInstancedBuffersStorage.vertexArrayObjects) this.vj().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[bb]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Eb.d.prototype._disposeInstanceSpecificData = function() {
        for (const ab in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[ab].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const ab in this.YH) this._userInstancedBuffersStorage.vertexBuffers[ab] && this._userInstancedBuffersStorage.vertexBuffers[ab].dispose();
        const bb = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (bb) {
          for (const ab in bb) bb[ab].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.YH = {}
      }, (0, vb.f)("BABYLON.InstancedMesh", Lb))
    }
  },
  39522: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Jb,
      g: () => Sb,
      i: () => wb
    });
    var Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb = Ub(36431),
      Zb = Ub(39195),
      Db = Ub(39146),
      zb = Ub(37982),
      xb = Ub(39130),
      ib = Ub(39525),
      fb = Ub(39310),
      mb = Ub(36401),
      pb = Ub(36593),
      Nb = Ub(39314),
      Wb = Ub(39244),
      Hb = Ub(39534),
      Ib = Ub(39541),
      db = Ub(39555),
      Fb = Ub(39400),
      hb = Ub(39394),
      Gb = Ub(39493),
      Qb = Ub(39570),
      qb = Ub(39543),
      ub = Ub(39124),
      rb = Ub(37989),
      Kb = Ub(36447),
      ob = Ub(38982),
      lb = Ub(39263);
    class tb {
      constructor(bb, ab) {
        this.distanceOrScreenCoverage = bb, this.mesh = ab
      }
    }
    class wb {}
    class sb {
      constructor() {
        this.batchCache = new Cb(this), this.batchCacheReplacementModeInFrozenMode = new Cb(this), this.instancesBufferSize = 2048
      }
    }
    class gb {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Cb {
      constructor(bb) {
        this.parent = bb, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Vb {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Ob {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const cb = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Jb extends db.c {
      static _GetDefaultSideOrientation(bb) {
        return bb || Jb.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== bb && (bb && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Wb.m.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Wb.m.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = bb, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new yb.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new yb.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new yb.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new yb.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new yb.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(bb) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(bb)
      }
      get IAb() {
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
      _copySource(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Mb = this.oN();
        if (bb._geometry && bb._geometry.applyToMesh(this), zb.e.DeepCopy(bb, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "IAb", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "EW", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "PEb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = bb, Mb.useClonedMeshMap && (bb._internalMeshDataInfo.meshMap || (bb._internalMeshDataInfo.meshMap = {}), bb._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = bb._originalBuilderSideOrientation, this._creationDataStorage = bb._creationDataStorage, bb._ranges) {
          const ab = bb._ranges;
          for (const bb in ab) Object.prototype.hasOwnProperty.call(ab, bb) && ab[bb] && this.createAnimationRange(bb, ab[bb].from, ab[bb].to)
        }
        if (bb.metadata && bb.metadata.clone ? this.metadata = bb.metadata.clone() : this.metadata = bb.metadata, this._internalMetadata = bb._internalMetadata, this.meshBlendingTag = bb.meshBlendingTag, xb.b && xb.b.HasTags(bb) && xb.b.AddTagsTo(this, xb.b.GetTags(bb, !0)), this.Yz(bb.isEnabled(!1)), this.parent = bb.parent, this.setPivotMatrix(bb.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + bb.id, this.material = bb.material, !ab) {
          const Mb = bb.getDescendants(!0);
          for (let bb = 0; bb < Mb.length; bb++) {
            const Tb = Mb[bb];
            Tb._isMesh ? (cb.parent = this, cb.doNotCloneChildren = ab, cb.clonePhysicsImpostor = Ub, cb.cloneThinInstances = Ab, Tb.clone(this.name + "." + Tb.name, cb)) : Tb.clone && Tb.clone(this.name + "." + Tb.name, this)
          }
        }
        if (bb.morphTargetManager && (this.morphTargetManager = bb.morphTargetManager), (0, ob.c)(Mb.getPhysicsEngine)) {
          const ab = Mb.getPhysicsEngine();
          if (Ub && ab)
            if (1 === ab.getPluginVersion()) {
              const Ub = ab.getImpostorForPhysicsObject(bb);
              Ub && (this.physicsImpostor = Ub.clone(this))
            } else 2 === ab.getPluginVersion() && bb.physicsBody && bb.physicsBody.clone(this)
        }
        for (let Tb = 0; Tb < Mb.pD.length; Tb++) {
          const ab = Mb.pD[Tb];
          ab.emitter === bb && ab.clone(ab.name, this)
        }
        if (this.skeleton = bb.skeleton, Ab && (bb._thinInstanceDataStorage.matrixData ? (this.o4("matrix", new Float32Array(bb._thinInstanceDataStorage.matrixData), 16, !bb._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = bb._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, bb._userThinInstanceBuffersStorage)) {
          const ab = bb._userThinInstanceBuffersStorage;
          for (const bb in ab.data) this.o4(bb, new Float32Array(ab.data[bb]), ab.strides[bb], !ab.vertexBuffers?.[bb]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[bb] = ab.sizes[bb]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(bb) {
        let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tb = arguments.length > 4 ? arguments[4] : void 0,
          Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(bb, Ub), this._internalMeshDataInfo = new Ob, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Vb, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Jb.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Ub = this.oN(), this._instanceDataStorage = new gb, this._instanceDataStorage.engine = Ub.vj(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new sb), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (bb, ab, Ub) => {
          bb && Ub && (this._uniformBuffer ? this.transferToEffect(ab) : Ub.bindOnlyWorldMatrix(ab))
        };
        let Yb = !1;
        if (Ab && void 0 === Ab._addToSceneRootNodes) {
          const bb = Ab;
          ab = bb.parent ?? null, Mb = bb.source ?? null, Tb = bb.doNotCloneChildren ?? !1, Eb = bb.clonePhysicsImpostor ?? !0, Yb = bb.cloneThinInstances ?? !1
        } else ab = Ab;
        Mb && this._copySource(Mb, Tb, Eb, Yb), null !== ab && (this.parent = ab), this._instanceDataStorage.hardwareInstancedRendering = this.vj().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = bb => {
          bb.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new yb.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), Mb && Mb.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = 0 === this.getTotalVertices() || ab && ab.doNotInstantiate && (!0 === ab.doNotInstantiate || ab.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Ab.parent = bb || this.parent, Ab.position = this.position.clone(), Ab.nY = this.nY.clone(), this.rotationQuaternion ? Ab.rotationQuaternion = this.rotationQuaternion.clone() : Ab.rotation = this.rotation.clone(), Ub && Ub(this, Ab);
        for (const Mb of this.getChildTransformNodes(!0)) "InstancedMesh" === Mb.getClassName() && "Mesh" === Ab.getClassName() && Mb.dAb === this ? Mb.instantiateHierarchy(Ab, {
          doNotInstantiate: ab && ab.doNotInstantiate || !1,
          newSourcedMesh: Ab
        }, Ub) : Mb.instantiateHierarchy(Ab, ab, Ub);
        return Ab
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(bb) {
        let ab = super.toString(bb);
        if (ab += ", n vertices: " + this.getTotalVertices(), ab += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Ub = 0; Ub < this.animations.length; Ub++) ab += ", animation[0]: " + this.animations[Ub].toString(bb);
        if (bb)
          if (this._geometry) {
            const bb = this.uUb(),
              Ub = this.getVerticesData(Wb.m.PositionKind);
            Ub && bb && (ab += ", flat shading: " + (Ub.length / 3 === bb.length ? "YES" : "NO"))
          } else ab += ", flat shading: UNKNOWN";
        return ab
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
        this._internalMeshDataInfo._LODLevels.sort(((ab, Ub) => ab.distanceOrScreenCoverage < Ub.distanceOrScreenCoverage ? bb : ab.distanceOrScreenCoverage > Ub.distanceOrScreenCoverage ? -bb : 0))
      }
      addLODLevel(bb, ab) {
        if (ab && ab._masterMesh) return rb.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const Ub = new tb(bb, ab);
        return this._internalMeshDataInfo._LODLevels.push(Ub), ab && (ab._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(bb) {
        const ab = this._internalMeshDataInfo;
        for (let Ub = 0; Ub < ab._LODLevels.length; Ub++) {
          const Ab = ab._LODLevels[Ub];
          if (Ab.distanceOrScreenCoverage === bb) return Ab.mesh
        }
        return null
      }
      removeLODLevel(bb) {
        const ab = this._internalMeshDataInfo;
        for (let Ub = 0; Ub < ab._LODLevels.length; Ub++) ab._LODLevels[Ub].mesh === bb && (ab._LODLevels.splice(Ub, 1), bb && (bb._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(bb, ab) {
        const Ub = this._internalMeshDataInfo;
        if (!Ub._LODLevels || 0 === Ub._LODLevels.length) return this;
        const Ab = ab || this.DH().BAb,
          Mb = bb.mode === fb.b.ORTHOGRAPHIC_CAMERA ? bb.minZ : Ab.centerWorld.subtract(bb.globalPosition).length();
        let Tb = Mb,
          Eb = 1;
        if (Ub._useLODScreenCoverage) {
          const ab = bb.screenArea;
          let Ub = Ab.radiusWorld * bb.minZ / Mb;
          Ub = Ub * Ub * Math.PI, Tb = Ub / ab, Eb = -1
        }
        if (Eb * Ub._LODLevels[Ub._LODLevels.length - 1].distanceOrScreenCoverage > Eb * Tb) return this.onLODLevelSelection && this.onLODLevelSelection(Tb, this, this), this;
        for (let Yb = 0; Yb < Ub._LODLevels.length; Yb++) {
          const bb = Ub._LODLevels[Yb];
          if (Eb * bb.distanceOrScreenCoverage < Eb * Tb) {
            if (bb.mesh) {
              if (4 === bb.mesh.delayLoadState) return bb.mesh._checkDelayState(), this;
              if (2 === bb.mesh.delayLoadState) return this;
              bb.mesh._preActivate(), bb.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Tb, this, bb.mesh), bb.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Tb, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(bb, ab, Ub, Ab) {
        if (!this._geometry) return null;
        let Mb = Ab ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]?.getFloatData(this.instances.length + 1, Ub || ab && 1 !== this._geometry.meshes.length);
        return Mb || (Mb = this._geometry.getVerticesData(bb, ab, Ub)), Mb
      }
      copyVerticesData(bb, ab) {
        this._geometry && this._geometry.copyVerticesData(bb, ab)
      }
      getVertexBuffer(bb, ab) {
        return this._geometry ? (ab ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]) ?? this._geometry.getVertexBuffer(bb) : null
      }
      isVerticesDataPresent(bb, ab) {
        return this._geometry ? !ab && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[bb] || this._geometry.isVerticesDataPresent(bb) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb)
      }
      isVertexBufferUpdatable(bb, ab) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb);
        if (!ab) {
          const ab = this._userInstancedBuffersStorage?.vertexBuffers[bb];
          if (ab) return ab.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(bb)
      }
      getVerticesDataKinds(bb) {
        if (!this._geometry) {
          const bb = [];
          if (this._delayInfo)
            for (const ab of this._delayInfo) bb.push(ab);
          return bb
        }
        const ab = this._geometry.getVerticesDataKinds();
        if (!bb && this._userInstancedBuffersStorage)
          for (const Ub in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ab.indexOf(Ub) && ab.push(Ub);
        return ab
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      uUb(bb, ab) {
        return this._geometry ? this._geometry.uUb(bb, ab) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(bb)) return !1;
        if (!this.mD || 0 === this.mD.length) return !0;
        if (!bb) return !0;
        const Ub = this.vj(),
          Ab = this.oN(),
          Mb = ab || Ub.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Tb = this.material || Ab.defaultMaterial;
        if (Tb)
          if (Tb._storeEffectOnSubMeshes)
            for (const Yb of this.mD) {
              const bb = Yb.Rj();
              if (bb)
                if (bb._storeEffectOnSubMeshes) {
                  if (!bb.isReadyForSubMesh(this, Yb, Mb)) return !1
                } else if (!bb.isReady(this, Mb)) return !1
            } else if (!Tb.isReady(this, Mb)) return !1;
        const Eb = Ub.currentRenderPassId;
        for (const Yb of this.lightSources) {
          const bb = Yb.getShadowGenerators();
          if (!bb) continue;
          const ab = bb.values();
          for (let Ab = ab.next(); !0 !== Ab.done; Ab = ab.next()) {
            const bb = Ab.value;
            if (bb && (!bb.getShadowMap()?.renderList || bb.getShadowMap()?.renderList && -1 !== bb.getShadowMap()?.renderList?.indexOf(this))) {
              const ab = bb.getShadowMap().renderPassIds ?? [Ub.currentRenderPassId];
              for (let Ab = 0; Ab < ab.length; ++Ab) {
                Ub.currentRenderPassId = ab[Ab];
                for (const ab of this.mD)
                  if (!bb.isReady(ab, Mb, ab.Rj()?.needAlphaBlendingForMesh(this) ?? !1)) return Ub.currentRenderPassId = Eb, !1
              }
              Ub.currentRenderPassId = Eb
            }
          }
        }
        for (const Yb of this._internalMeshDataInfo._LODLevels)
          if (Yb.mesh && !Yb.mesh.isReady(Mb)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      kj() {
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
        let ab = this._instanceDataStorage.renderPasses[bb];
        return ab || (ab = new sb, this._instanceDataStorage.renderPasses[bb] = ab), ab
      }
      _preActivate() {
        const bb = this._internalMeshDataInfo,
          ab = this.oN().getRenderId();
        return bb._preActivateId === ab || (bb._preActivateId = ab, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(bb) {
        const ab = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ab.visibleInstances && (ab.visibleInstances.intermediateDefaultRenderId = bb), this
      }
      _registerInstanceForRenderId(bb, ab) {
        const Ub = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Ub.visibleInstances || (Ub.visibleInstances = {
          defaultRenderId: ab,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Ub.visibleInstances[ab] || (void 0 === Ub.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Ub.visibleInstances[Ub.previousRenderId], Ub.previousRenderId = ab, Ub.visibleInstances[ab] = new Array), Ub.visibleInstances[ab].push(bb), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.jj || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let bb, ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.DH().isLocked) return this;
        bb = "object" === typeof ab ? ab : {
          applySkeleton: ab,
          applyMorph: Ub
        };
        const Ab = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(bb, null, Wb.m.PositionKind), Ab), this
      }
      _createGlobalSubMesh(bb) {
        const ab = this.getTotalVertices();
        if (!ab || !this.uUb()) return null;
        if (this.mD && this.mD.length > 0) {
          const Ub = this.uUb();
          if (!Ub) return null;
          const Ab = Ub.length;
          let Mb = !1;
          if (bb) Mb = !0;
          else
            for (const bb of this.mD) {
              if (bb.indexStart + bb.indexCount > Ab) {
                Mb = !0;
                break
              }
              if (bb.verticesStart + bb.verticesCount > ab) {
                Mb = !0;
                break
              }
            }
          if (!Mb) return this.mD[0]
        }
        return this.releaseSubMeshes(), new Fb.e(0, 0, ab, 0, this.getTotalIndices() || (this.isUnIndexed ? ab : 0), this)
      }
      subdivide(bb) {
        if (bb < 1) return;
        const ab = this.getTotalIndices();
        let Ub = ab / bb | 0,
          Ab = 0;
        for (; Ub % 3 !== 0;) Ub++;
        this.releaseSubMeshes();
        for (let Mb = 0; Mb < bb && !(Ab >= ab); Mb++) Fb.e.CreateFromIndices(0, Ab, Ab + Ub >= ab ? ab - Ab : Ub, this, void 0, !1), Ab += Ub;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(bb, ab, Ub, Ab);
        else {
          const Ab = new Hb.c;
          Ab.set(ab, bb);
          const Mb = this.oN();
          new Ib.d(Ib.d.RandomId(), Mb, Ab, Ub, this)
        }
        return this
      }
      removeVerticesData(bb) {
        this._geometry && this._geometry.removeVerticesData(bb)
      }
      markVerticesDataAsUpdatable(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ub = this.getVertexBuffer(bb);
        Ub && Ub.isUpdatable() !== ab && this.setVerticesData(bb, this.getVerticesData(bb), ab)
      }
      setVerticesBuffer(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Ib.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(bb, Ub, ab), this
      }
      updateVerticesData(bb, ab, Ub, Ab) {
        return this._geometry ? (Ab ? (this.makeGeometryUnique(), this.updateVerticesData(bb, ab, Ub, !1)) : this._geometry.updateVerticesData(bb, ab, Ub), this) : this
      }
      updateMeshPositions(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ub = this.getVerticesData(Wb.m.PositionKind);
        if (!Ub) return this;
        if (bb(Ub), this.updateVerticesData(Wb.m.PositionKind, Ub, !1, !1), ab) {
          const bb = this.uUb(),
            ab = this.getVerticesData(Wb.m.NormalKind);
          if (!ab) return this;
          Hb.c.ComputeNormals(Ub, bb, ab), this.updateVerticesData(Wb.m.NormalKind, ab, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const bb = this._geometry,
          ab = this._geometry.copy(Ib.d.RandomId());
        return bb.releaseForMesh(this, !0), ab.applyToMesh(this), this
      }
      setIndexBuffer(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Mb = this._geometry;
        Mb || (Mb = new Ib.d(Ib.d.RandomId(), this.oN(), void 0, void 0, this)), Mb.setIndexBuffer(bb, ab, Ub, Ab)
      }
      setIndices(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(bb, ab, Ub, Ab);
        else {
          const Ab = new Hb.c;
          Ab.indices = bb;
          const Mb = this.oN();
          new Ib.d(Ib.d.RandomId(), Mb, Ab, Ub, this, ab)
        }
        return this
      }
      updateIndices(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(bb, ab, Ub), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(bb, ab, Ub) {
        let Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Mb = this.oN().vj();
        let Tb;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Ub) === hb.d.WireFrameFillMode) Tb = bb._getLinesIndexBuffer(this.uUb(), Mb);
          else Tb = null;
        else switch (this._getRenderingFillMode(Ub)) {
          case hb.d.PointFillMode:
            Tb = null;
            break;
          case hb.d.WireFrameFillMode:
            Tb = bb._getLinesIndexBuffer(this.uUb(), Mb);
            break;
          default:
          case hb.d.TriangleFillMode:
            Tb = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(ab, Tb, Ab)
      }
      _bindDirect(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(bb), Ub && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const bb = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const ab in bb) this._userInstancedBuffersStorage.vertexBuffers[ab] = bb[ab]
          }
          this._geometry._bind(bb, ab, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(bb, ab);
        return this
      }
      _draw(bb, ab, Ub) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Ab = this.oN().vj(),
          Mb = Ab._currentMaterialContext,
          Tb = Mb && Mb.useVertexPulling;
        return this._unIndexed && ab !== hb.d.WireFrameFillMode || ab == hb.d.PointFillMode ? Ab.drawArraysType(ab, bb.verticesStart, bb.verticesCount, this.forcedInstanceCount || Ub) : ab == hb.d.WireFrameFillMode ? Ab.drawElementsType(ab, 0, bb._linesIndexCount, this.forcedInstanceCount || Ub) : Tb ? Ab.drawArraysType(ab, bb.indexStart, bb.indexCount, this.forcedInstanceCount || Ub) : Ab.drawElementsType(ab, bb.indexStart, bb.indexCount, this.forcedInstanceCount || Ub), this
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (ab) return Ub.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[bb] = !1, Ub.batchCacheReplacementModeInFrozenMode.renderSelf[bb] = !0, Ub.batchCacheReplacementModeInFrozenMode;
          if (Ub.previousBatch) return Ub.previousBatch
        }
        const Ab = this.oN(),
          Mb = Ab._isInIntermediateRendering(),
          Tb = Mb ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Eb = Ub.batchCache;
        if (Eb.mustReturn = !1, Eb.renderSelf[bb] = ab || !Tb && this.isEnabled() && this.isVisible, Eb.visibleInstances[bb] = null, Ub.visibleInstances && !ab) {
          const ab = Ub.visibleInstances,
            Tb = Ab.getRenderId(),
            Yb = Mb ? ab.intermediateDefaultRenderId : ab.defaultRenderId;
          Eb.visibleInstances[bb] = ab[Tb], !Eb.visibleInstances[bb] && Yb && (Eb.visibleInstances[bb] = ab[Yb])
        }
        return Eb.hardwareInstancedRendering[bb] = !ab && this._instanceDataStorage.hardwareInstancedRendering && null !== Eb.visibleInstances[bb] && void 0 !== Eb.visibleInstances[bb], Ub.previousBatch = Eb, Eb
      }
      _updateInstancedBuffers(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = ab.visibleInstances[bb._id],
          Yb = Eb ? Eb.length : 0,
          Bb = ab.parent,
          eb = this._instanceDataStorage;
        let vb = Bb.instancesBuffer,
          Lb = Bb.instancesPreviousBuffer,
          Pb = 0,
          Xb = 0;
        const jb = ab.renderSelf[bb._id],
          Rb = this._scene.floatingOriginOffset,
          kb = !vb || Ub !== Bb.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Bb.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || eb.isFrozen && !kb) Xb = (jb ? 1 : 0) + Yb;
        else {
          const ab = this.getWorldMatrix();
          if (jb) {
            this._scene.needsPreviousWorldMatrices && (eb.masterMeshPreviousWorldMatrix ? (eb.masterMeshPreviousWorldMatrix.copyToArray(Bb.instancesPreviousData, Pb), eb.masterMeshPreviousWorldMatrix.EUb(ab)) : (eb.masterMeshPreviousWorldMatrix = ab.clone(), eb.masterMeshPreviousWorldMatrix.copyToArray(Bb.instancesPreviousData, Pb))), ab.copyToArray(Bb.instancesData, Pb);
            const bb = ab.qUb();
            Bb.instancesData[Pb + 12] = bb[12] - Rb.x, Bb.instancesData[Pb + 13] = bb[13] - Rb.y, Bb.instancesData[Pb + 14] = bb[14] - Rb.z, Pb += 16, Xb++
          }
          if (Eb) {
            if (Jb.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && bb.Rj()?.needAlphaBlendingForMesh(bb.getRenderingMesh())) {
              const bb = this._scene.activeCamera.globalPosition;
              for (let ab = 0; ab < Eb.length; ab++) {
                const Ub = Eb[ab];
                Ub._distanceToCamera = mb.m.Distance(Ub.DH().BAb.centerWorld, bb)
              }
              Eb.sort(((bb, ab) => bb._distanceToCamera > ab._distanceToCamera ? -1 : bb._distanceToCamera < ab._distanceToCamera ? 1 : 0))
            }
            for (let bb = 0; bb < Eb.length; bb++) {
              const ab = Eb[bb],
                Ub = ab.getWorldMatrix();
              Ub.copyToArray(Bb.instancesData, Pb), this._scene.needsPreviousWorldMatrices && (ab._previousWorldMatrix ? (ab._previousWorldMatrix.copyToArray(Bb.instancesPreviousData, Pb), ab._previousWorldMatrix.EUb(Ub)) : (ab._previousWorldMatrix = Ub.clone(), ab._previousWorldMatrix.copyToArray(Bb.instancesPreviousData, Pb)));
              const Ab = Ub.qUb();
              Bb.instancesData[Pb + 12] = Ab[12] - Rb.x, Bb.instancesData[Pb + 13] = Ab[13] - Rb.y, Bb.instancesData[Pb + 14] = Ab[14] - Rb.z, Pb += 16, Xb++
            }
          }
        }
        if (kb) {
          let bb;
          if (vb && vb.dispose(), Lb && Lb.dispose(), vb = new Wb.c(Ab, Bb.instancesData, !0, 16, !1, !0), Bb.instancesBuffer = vb, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.vj().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) bb = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const ab = this._instanceDataStorage.engine.currentRenderPassId;
            bb = this._userInstancedBuffersStorage.renderPasses[ab], bb || (this._userInstancedBuffersStorage.renderPasses[ab] = bb = {})
          }
          bb.world0 = vb.createVertexBuffer("world0", 0, 4), bb.world1 = vb.createVertexBuffer("world1", 4, 4), bb.world2 = vb.createVertexBuffer("world2", 8, 4), bb.world3 = vb.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Lb = new Wb.c(Ab, Bb.instancesPreviousData, !0, 16, !1, !0), Bb.instancesPreviousBuffer = Lb, bb.previousWorld0 = Lb.createVertexBuffer("previousWorld0", 0, 4), bb.previousWorld1 = Lb.createVertexBuffer("previousWorld1", 4, 4), bb.previousWorld2 = Lb.createVertexBuffer("previousWorld2", 8, 4), bb.previousWorld3 = Lb.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (vb.updateDirectly(Bb.instancesData, 0, Xb), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Lb.updateDirectly(Bb.instancesPreviousData, 0, Xb));
        this._processInstancedBuffers(Eb, jb), Tb && void 0 !== Mb && (this.oN()._activeIndices.addCount(bb.indexCount * Xb, !1), Ab._currentDrawContext && (Ab._currentDrawContext.useInstancing = !0), this._bind(bb, Tb, Mb), this._draw(bb, Mb, Xb)), !this._scene.needsPreviousWorldMatrices || kb || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Lb.updateDirectly(Bb.instancesData, 0, Xb)
      }
      _renderWithInstances(bb, ab, Ub, Ab, Mb) {
        const Tb = Ub.visibleInstances[bb._id],
          Eb = Tb ? Tb.length : 0,
          Yb = Ub.parent,
          Bb = Yb.instancesBufferSize,
          eb = 16 * (Eb + 1) * 4;
        for (; Yb.instancesBufferSize < eb;) Yb.instancesBufferSize *= 2;
        return Yb.instancesData && Bb == Yb.instancesBufferSize || (Yb.instancesData = new Float32Array(Yb.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Yb.instancesPreviousData || Bb != Yb.instancesBufferSize) && (Yb.instancesPreviousData = new Float32Array(Yb.instancesBufferSize / 4)), this._updateInstancedBuffers(bb, Ub, Bb, Mb, ab, Ab), Mb.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(bb, ab, Ub, Ab) {
        const Mb = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.oN()._activeIndices.addCount(bb.indexCount * Mb, !1), Ab._currentDrawContext && (Ab._currentDrawContext.useInstancing = !0), this._bind(bb, Ub, ab), this._draw(bb, ab, Mb), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Mb) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Ab.unbindInstanceAttributes()
      }
      _processInstancedBuffers(bb, ab) {}
      _processRendering(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = this.oN(),
          eb = Bb.vj();
        if (Ab = this._getRenderingFillMode(Ab), Tb && ab.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(ab, Ab, Ub, eb), this;
        if (Tb) this._renderWithInstances(ab, Ab, Mb, Ub, eb);
        else {
          eb._currentDrawContext && (eb._currentDrawContext.useInstancing = !1);
          let Ub = 0;
          Mb.renderSelf[ab._id] && (Eb && Eb(!1, bb.getWorldMatrix(), Yb), Ub++, this._draw(ab, Ab, this._instanceDataStorage.overridenInstanceCount));
          const Tb = Mb.visibleInstances[ab._id];
          if (Tb) {
            const bb = Tb.length;
            Ub += bb;
            for (let Ub = 0; Ub < bb; Ub++) {
              const bb = Tb[Ub].getWorldMatrix();
              Eb && Eb(!0, bb, Yb), this._draw(ab, Ab)
            }
          }
          Bb._activeIndices.addCount(ab.indexCount * Ub, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb?.instancesBuffer && (ab && bb.instancesBuffer.dispose(), bb.instancesBuffer = null), bb?.instancesPreviousBuffer && (ab && bb.instancesPreviousBuffer.dispose(), bb.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ab in this._instanceDataStorage.renderPasses) {
          const Ub = this._instanceDataStorage.renderPasses[ab];
          this._disposeInstanceDataStorageRenderPass(Ub, bb)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, bb), this._userInstancedBuffersStorage) {
          for (const ab in this._userInstancedBuffersStorage.vertexBuffers) {
            const Ub = this._userInstancedBuffersStorage.vertexBuffers[ab];
            Ub && (bb && Ub.dispose(), this._userInstancedBuffersStorage.vertexBuffers[ab] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(bb)
      }
      _releaseRenderPassId(bb) {
        const ab = this._instanceDataStorage.renderPasses[bb];
        if (ab && (this._disposeInstanceDataStorageRenderPass(ab, !0), delete this._instanceDataStorage.renderPasses[bb]), this._userInstancedBuffersStorage?.renderPasses) {
          const ab = this._userInstancedBuffersStorage.renderPasses[bb];
          if (ab)
            for (const bb in ab) ab[bb]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[bb]
        }
        const Ub = this._userInstancedBuffersStorage?.interleavedBuffers;
        Ub?.[bb] && (Ub[bb].buffer.dispose(), delete Ub[bb])
      }
      _freeze() {
        if (this.mD) {
          for (let bb = 0; bb < this.mD.length; bb++) this._getInstancesRenderList(bb);
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
      renderWithRenderPassId(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Tb = this._scene.vj(),
          Eb = Tb.currentRenderPassId;
        if (void 0 !== bb && (Tb.currentRenderPassId = bb), Ab)(!Mb || Mb && Ab.isInFrustum(this._scene._frustumPlanes)) && this.render(Ab, !!ab, Ub);
        else
          for (let Yb = 0; Yb < this.mD.length; Yb++) {
            const bb = this.mD[Yb];
            (!Mb || Mb && bb.isInFrustum(this._scene._frustumPlanes)) && this.render(bb, !!ab, Ub)
          }
        return void 0 !== bb && (Tb.currentRenderPassId = Eb), this
      }
      directRender() {
        if (!this.mD) return this;
        for (const bb of this.mD) this.render(bb, !1);
        return this
      }
      render(bb, ab, Ub) {
        const Ab = this.oN(),
          Mb = Ab.vj();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Tb = Ab.activeCameras?.length ?? 0,
          Eb = Tb > 1 && Ab.activeCamera === Ab.activeCameras[0] || Tb <= 1,
          Yb = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Mb.currentRenderPassId;
        if (Eb && this._checkOcclusionQuery(Yb) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Bb = this._getInstancesRenderList(bb._id, !!Ub);
        if (Bb.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let eb = 0,
          vb = null;
        this.ignoreCameraMaxZ && Ab.activeCamera && !Ab._isInIntermediateRendering() && (eb = Ab.activeCamera.maxZ, vb = Ab.activeCamera, Ab.activeCamera.maxZ = 0, Ab.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Lb = bb.getRenderingMesh(),
          Pb = Bb.hardwareInstancedRendering[bb._id] || Lb.hasThinInstances || !!this._userInstancedBuffersStorage && !bb.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Xb = this._instanceDataStorage,
          jb = bb.Rj();
        if (!jb) return vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), this;
        if (Xb.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === jb) {
          if (jb._storeEffectOnSubMeshes && !bb._drawWrapper?._wasPreviouslyReady || !jb._storeEffectOnSubMeshes && !jb._getDrawWrapper()._wasPreviouslyReady) return vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), this
        } else {
          if (jb._storeEffectOnSubMeshes) {
            if (!jb.isReadyForSubMesh(this, bb, Pb)) return vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), this
          } else if (!jb.isReady(this, Pb)) return vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = jb
        }
        if (ab) {
          const bb = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === bb.alphaModes.length) Mb.setAlphaMode(bb.alphaMode);
          else
            for (let ab = 0; ab < bb.alphaModes.length; ab++) {
              const Ub = bb.alphaModes[ab];
              Mb.setAlphaMode(void 0 !== Ub ? Ub : 2, !1, ab)
            }
        }
        let Rb;
        Rb = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? bb._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const kb = Rb?.effect ?? null;
        for (let fb = 0, mb = Ab._beforeRenderingMeshStage; fb < mb.length; fb++) {
          mb[fb].action(this, bb, Bb, kb)
        }
        if (!Rb || !kb) return vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), this;
        const yb = Ub || this;
        let Zb;
        if (!Xb.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const bb = yb._getWorldMatrixDeterminant();
          Zb = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), bb < 0 && (Zb = Zb === hb.d.ClockWiseSideOrientation ? hb.d.CounterClockWiseSideOrientation : hb.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Zb
        }
        const Db = this._internalMeshDataInfo._effectiveMaterial._preBind(Rb, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Mb.setDepthWrite(!0);
        const zb = this._internalMeshDataInfo._effectiveMaterial,
          xb = zb.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Pb || this._bind(bb, kb, xb, !1);
        const ib = yb.getWorldMatrix();
        zb._storeEffectOnSubMeshes ? zb.bindForSubMesh(ib, this, bb) : zb.bind(ib, this);
        try {
          Gb.d._BindAttachmentsForEffect(Mb, kb) && (!zb.backFaceCulling && zb.separateCullingPass && (Mb.setState(!0, zb.zOffset, !1, !Db, zb.cullBackFaces, zb.stencil, zb.zOffsetUnits), this._processRendering(this, bb, kb, xb, Bb, Pb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Mb.setState(!0, zb.zOffset, !1, Db, zb.cullBackFaces, zb.stencil, zb.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(bb)), this._processRendering(this, bb, kb, xb, Bb, Pb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Gb.d._RestoreAttachments(Mb)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let fb = 0, mb = Ab._afterRenderingMeshStage; fb < mb.length; fb++) {
          mb[fb].action(this, bb, Bb, kb)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), vb && (vb.maxZ = eb, Ab.updateTransformMatrix(!0)), 2 !== Ab.performancePriority || Xb.isFrozen || this._freeze(), this
      }
      _renderRunFollower(bb, ab) {
        const Ub = this._scene,
          Ab = Ub._engine;
        if (Ab.isWebGPU || bb._mesh !== this || 0 !== this.instances.length || this.render !== Jb.prototype.render) return !1;
        const Mb = bb.Rj();
        if (!Mb || Mb !== Ub._cachedMaterial || void 0 === Mb._canBindRunFollower) return !1;
        const Tb = bb._drawWrapper,
          Eb = Tb?.effect;
        if (!Eb || Eb !== Ub._cachedEffect || this.visibility !== Ub._cachedVisibility || Tb._forceRebindOnNextCall) return !1;
        const Yb = this.hasThinInstances;
        if (!Yb && this._userInstancedBuffersStorage) return !1;
        if (!Tb._wasPreviouslyReady || Tb._wasPreviouslyUsingInstances !== Yb) return !1;
        const Bb = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Ub._isInIntermediateRendering() || 0 !== Ub._beforeRenderingMeshStage.length || 0 !== Ub._afterRenderingMeshStage.length || Bb._onBeforeRenderObservable?.hasObservers() || Bb._onBeforeBindObservable?.hasObservers() || Bb._onAfterRenderObservable?.hasObservers()) return !1;
        const eb = this.occlusionType;
        if (void 0 !== eb && eb !== db.c.OCCLUSION_TYPE_NONE || !Mb._canBindRunFollower(Ub, Ab, this, bb, Eb)) return !1;
        const vb = this._internalAbstractMeshDataInfo,
          Lb = vb._isActiveIntermediate;
        Lb ? vb._isActiveIntermediate = !1 : vb._isActive = !1;
        const Pb = Ub.activeCameras?.length ?? 0;
        (Pb > 1 && Ub.activeCamera === Ub.activeCameras[0] || Pb <= 1) && this._checkOcclusionQuery(!1);
        const Xb = this._getInstancesRenderList(bb._id);
        if (Xb.mustReturn) return !0;
        if (!Yb && !Xb.renderSelf[bb._id]) return Lb ? vb._isActiveIntermediate = !0 : vb._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Bb._effectiveMaterial = Mb, ab)
          if (1 === Mb.alphaModes.length) Ab.setAlphaMode(Mb.alphaMode);
          else
            for (let Rb = 0; Rb < Mb.alphaModes.length; Rb++) {
              const bb = Mb.alphaModes[Rb];
              Ab.setAlphaMode(void 0 !== bb ? bb : 2, !1, Rb)
            }
        if (Mb.backFaceCulling || null !== Mb.sideOrientation || Mb._twoSidedLighting) {
          const bb = this._getWorldMatrixDeterminant();
          let ab = Mb._getEffectiveOrientation(this);
          bb < 0 && (ab = ab === hb.d.ClockWiseSideOrientation ? hb.d.CounterClockWiseSideOrientation : hb.d.ClockWiseSideOrientation), Bb._effectiveSideOrientation = ab
        }
        Mb._preBind(Tb, Bb._effectiveSideOrientation), Mb.forceDepthWrite && Ab.setDepthWrite(!0);
        const jb = Mb.fillMode;
        return Yb || this._bind(bb, Eb, jb, !1), Mb._bindRunFollower(this.getWorldMatrix(), this, bb, Eb), this._processRendering(this, bb, Eb, jb, Xb, Yb, this._onBeforeDraw, Mb), Mb.unbind(), 2 === Ub.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Wb.m.MatricesWeightsKind) && (this.isVerticesDataPresent(Wb.m.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const bb = this.getVerticesData(Wb.m.MatricesWeightsKind),
          ab = bb.length;
        for (let Ub = 0; Ub < ab; Ub += 4) {
          const ab = bb[Ub] + bb[Ub + 1] + bb[Ub + 2] + bb[Ub + 3];
          if (0 === ab) bb[Ub] = 1;
          else {
            const Ab = 1 / ab;
            bb[Ub] *= Ab, bb[Ub + 1] *= Ab, bb[Ub + 2] *= Ab, bb[Ub + 3] *= Ab
          }
        }
        this.setVerticesData(Wb.m.MatricesWeightsKind, bb)
      }
      _normalizeSkinWeightsAndExtra() {
        const bb = this.getVerticesData(Wb.m.MatricesWeightsExtraKind),
          ab = this.getVerticesData(Wb.m.MatricesWeightsKind),
          Ub = ab.length;
        for (let Ab = 0; Ab < Ub; Ab += 4) {
          let Ub = ab[Ab] + ab[Ab + 1] + ab[Ab + 2] + ab[Ab + 3];
          if (Ub += bb[Ab] + bb[Ab + 1] + bb[Ab + 2] + bb[Ab + 3], 0 === Ub) ab[Ab] = 1;
          else {
            const Mb = 1 / Ub;
            ab[Ab] *= Mb, ab[Ab + 1] *= Mb, ab[Ab + 2] *= Mb, ab[Ab + 3] *= Mb, bb[Ab] *= Mb, bb[Ab + 1] *= Mb, bb[Ab + 2] *= Mb, bb[Ab + 3] *= Mb
          }
        }
        this.setVerticesData(Wb.m.MatricesWeightsKind, ab), this.setVerticesData(Wb.m.MatricesWeightsKind, bb)
      }
      validateSkinning() {
        const bb = this.getVerticesData(Wb.m.MatricesWeightsExtraKind),
          ab = this.getVerticesData(Wb.m.MatricesWeightsKind);
        if (null === ab || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          GX: "not skinned"
        };
        const Ub = ab.length;
        let Ab = 0,
          Mb = 0,
          Tb = 0,
          Eb = 0;
        const Yb = null === bb ? 4 : 8,
          Bb = [];
        for (let Xb = 0; Xb <= Yb; Xb++) Bb[Xb] = 0;
        for (let Xb = 0; Xb < Ub; Xb += 4) {
          let Ub = ab[Xb],
            eb = Ub,
            vb = 0 === eb ? 0 : 1;
          for (let Mb = 1; Mb < Yb; Mb++) {
            const Tb = Mb < 4 ? ab[Xb + Mb] : bb[Xb + Mb - 4];
            Tb > Ub && Ab++, 0 !== Tb && vb++, eb += Tb, Ub = Tb
          }
          if (Bb[vb]++, vb > Tb && (Tb = vb), 0 === eb) Mb++;
          else {
            const Ub = 1 / eb;
            let Ab = 0;
            for (let Mb = 0; Mb < Yb; Mb++) Ab += Mb < 4 ? Math.abs(ab[Xb + Mb] - ab[Xb + Mb] * Ub) : Math.abs(bb[Xb + Mb - 4] - bb[Xb + Mb - 4] * Ub);
            Ab > .001 && Eb++
          }
        }
        const eb = this.skeleton.bones.length,
          vb = this.getVerticesData(Wb.m.MatricesIndicesKind),
          Lb = this.getVerticesData(Wb.m.MatricesIndicesExtraKind);
        let Pb = 0;
        for (let Xb = 0; Xb < Ub; Xb += 4)
          for (let bb = 0; bb < Yb; bb++) {
            const ab = bb < 4 ? vb[Xb + bb] : Lb[Xb + bb - 4];
            (ab >= eb || ab < 0) && Pb++
          }
        return {
          skinned: !0,
          valid: 0 === Mb && 0 === Eb && 0 === Pb,
          GX: "Number of Weights = " + Ub / 4 + "\nMaximum influences = " + Tb + "\nMissing Weights = " + Mb + "\nNot Sorted = " + Ab + "\nNot Normalized = " + Eb + "\nWeightCounts = [" + Bb + "]\nNumber of bones = " + eb + "\nBad Bone Indices = " + Pb
        }
      }
      _checkDelayState() {
        const bb = this.oN();
        return this._geometry ? this._geometry.load(bb) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(bb)), this
      }
      _queueLoad(bb) {
        bb.addPendingData(this);
        const ab = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Ub = await bb._loadDelayedFileAsync(this.delayLoadingFile, ab, !0);
            Ub instanceof ArrayBuffer ? this._delayLoadingFunction(Ub, this) : this._delayLoadingFunction(JSON.parse(Ub), this);
            for (const bb of this.instances) bb.refreshBoundingInfo(), bb._syncSubMeshes();
            this.delayLoadState = 1, bb.removePendingData(this)
          } catch (Ub) {
            bb.removePendingData(this), bb.Jab || rb.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Ub}`)
          }
        })(), this
      }
      isInFrustum(bb) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(bb) && (this._checkDelayState(), !0))
      }
      setMaterialById(bb) {
        const ab = this.oN().materials;
        let Ub;
        for (Ub = ab.length - 1; Ub > -1; Ub--)
          if (ab[Ub].id === bb) return this.material = ab[Ub], this;
        const Ab = this.oN().multiMaterials;
        for (Ub = Ab.length - 1; Ub > -1; Ub--)
          if (Ab[Ub].id === bb) return this.material = Ab[Ub], this;
        return this
      }
      getAnimatables() {
        const bb = [];
        return this.material && bb.push(this.material), this.skeleton && bb.push(this.skeleton), bb
      }
      bakeTransformIntoVertices(bb) {
        if (!this.isVerticesDataPresent(Wb.m.PositionKind)) return this;
        const ab = this.mD.splice(0);
        this._resetPointsArrayCache();
        let Ub = this.getVerticesData(Wb.m.PositionKind);
        const Ab = mb.m.Zero();
        let Mb;
        for (Mb = 0; Mb < Ub.length; Mb += 3) mb.m.TransformCoordinatesFromFloatsToRef(Ub[Mb], Ub[Mb + 1], Ub[Mb + 2], bb, Ab).toArray(Ub, Mb);
        if (this.setVerticesData(Wb.m.PositionKind, Ub, this.getVertexBuffer(Wb.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(Wb.m.NormalKind)) {
          for (Ub = this.getVerticesData(Wb.m.NormalKind), Mb = 0; Mb < Ub.length; Mb += 3) mb.m.TransformNormalFromFloatsToRef(Ub[Mb], Ub[Mb + 1], Ub[Mb + 2], bb, Ab).normalize().toArray(Ub, Mb);
          this.setVerticesData(Wb.m.NormalKind, Ub, this.getVertexBuffer(Wb.m.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Wb.m.TangentKind)) {
          for (Ub = this.getVerticesData(Wb.m.TangentKind), Mb = 0; Mb < Ub.length; Mb += 4) mb.m.TransformNormalFromFloatsToRef(Ub[Mb], Ub[Mb + 1], Ub[Mb + 2], bb, Ab).normalize().toArray(Ub, Mb);
          this.setVerticesData(Wb.m.TangentKind, Ub, this.getVertexBuffer(Wb.m.TangentKind).isUpdatable())
        }
        return bb.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.mD = ab, this
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
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (ab && void 0 === ab._addToSceneRootNodes) {
          const Ub = ab;
          return cb.source = this, cb.doNotCloneChildren = Ub.doNotCloneChildren, cb.clonePhysicsImpostor = Ub.clonePhysicsImpostor, cb.cloneThinInstances = Ub.cloneThinInstances, new Jb(bb, this.oN(), cb)
        }
        return new Jb(bb, this.oN(), ab, this, Ub, Ab)
      }
      dispose(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Ub = this._internalMeshDataInfo;
        if (Ub._onBeforeDrawObservable && Ub._onBeforeDrawObservable.clear(), Ub._onBeforeBindObservable && Ub._onBeforeBindObservable.clear(), Ub._onBeforeRenderObservable && Ub._onBeforeRenderObservable.clear(), Ub._onAfterRenderObservable && Ub._onAfterRenderObservable.clear(), Ub._onBetweenPassObservable && Ub._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Ub.meshMap)
            for (const bb in Ub.meshMap) {
              const ab = Ub.meshMap[bb];
              ab && (ab._internalMeshDataInfo._source = null, Ub.meshMap[bb] = void 0)
            }
          Ub._source && Ub._source._internalMeshDataInfo.meshMap && (Ub._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const bb = this.oN().meshes;
          for (const ab of bb) {
            const bb = ab;
            bb._internalMeshDataInfo && bb._internalMeshDataInfo._source && bb._internalMeshDataInfo._source === this && (bb._internalMeshDataInfo._source = null)
          }
        }
        Ub._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(bb, ab)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Yb = arguments.length > 7 ? arguments[7] : void 0;
        const Bb = this.oN();
        return (0, Db.m)(bb, (bb => {
          const Yb = bb.width,
            Bb = bb.height,
            eb = this.vj().createCanvas(Yb, Bb).getContext("2d");
          eb.drawImage(bb, 0, 0);
          const vb = eb.getImageData(0, 0, Yb, Bb).data;
          this.applyDisplacementMapFromBuffer(vb, Yb, Bb, ab, Ub, Mb, Tb, Eb), Ab && Ab(this)
        }), Yb || (() => {}), Bb.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Wb.m.PositionKind) || !this.isVerticesDataPresent(Wb.m.NormalKind) || !this.isVerticesDataPresent(Wb.m.UVKind)) return rb.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Bb = this.getVerticesData(Wb.m.PositionKind, !0, !0),
          eb = this.getVerticesData(Wb.m.NormalKind),
          vb = this.getVerticesData(Wb.m.UVKind);
        let Lb = mb.m.Zero();
        const Pb = mb.m.Zero(),
          Xb = mb.l.Zero();
        Tb = Tb || mb.l.Zero(), Eb = Eb || new mb.l(1, 1);
        for (let jb = 0; jb < Bb.length; jb += 3) {
          mb.m.FromArrayToRef(Bb, jb, Lb), mb.m.FromArrayToRef(eb, jb, Pb), mb.l.FromArrayToRef(vb, jb / 3 * 2, Xb);
          const Yb = 4 * ((Math.abs(Xb.x * Eb.x + Tb.x % 1) * (ab - 1) % ab | 0) + (Math.abs(Xb.y * Eb.y + Tb.y % 1) * (Ub - 1) % Ub | 0) * ab),
            Rb = .3 * (bb[Yb] / 255) + .59 * (bb[Yb + 1] / 255) + .11 * (bb[Yb + 2] / 255);
          Pb.normalize(), Pb.scaleInPlace(Ab + (Mb - Ab) * Rb), Lb = Lb.add(Pb), Lb.toArray(Bb, jb)
        }
        return Hb.c.ComputeNormals(Bb, this.uUb(), eb), Yb ? (this.setVerticesData(Wb.m.PositionKind, Bb), this.setVerticesData(Wb.m.NormalKind, eb), this.setVerticesData(Wb.m.UVKind, vb)) : (this.updateVerticesData(Wb.m.PositionKind, Bb), this.updateVerticesData(Wb.m.NormalKind, eb)), this
      }
      _getFlattenedNormals(bb, ab) {
        const Ub = new Float32Array(3 * bb.length);
        let Ab = 0;
        const Mb = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Tb = 0; Tb < bb.length; Tb += 3) {
          const Eb = mb.m.FromArray(ab, 3 * bb[Tb]),
            Yb = mb.m.FromArray(ab, 3 * bb[Tb + 1]),
            Bb = mb.m.FromArray(ab, 3 * bb[Tb + 2]),
            eb = Eb.subtract(Yb),
            vb = Bb.subtract(Yb),
            Lb = mb.m.Normalize(mb.m.Cross(eb, vb));
          Mb && Lb.scaleInPlace(-1);
          for (let bb = 0; bb < 3; bb++) Ub[Ab++] = Lb.x, Ub[Ab++] = Lb.y, Ub[Ab++] = Lb.z
        }
        return Ub
      }
      _convertToUnIndexedMesh() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = this.getVerticesDataKinds().filter((bb => !this.getVertexBuffer(bb)?.getIsInstanced())),
          Ub = this.uUb(!1, !0),
          Ab = {},
          Mb = (bb, ab) => {
            const Ab = new Float32Array(Ub.length * ab);
            let Mb = 0;
            for (let Tb = 0; Tb < Ub.length; Tb++)
              for (let Eb = 0; Eb < ab; Eb++) Ab[Mb++] = bb[Ub[Tb] * ab + Eb];
            return Ab
          },
          Tb = this.DH(),
          Eb = this.geometry ? this.mD.slice(0) : [];
        for (const Yb of ab) Ab[Yb] = this.getVerticesData(Yb);
        for (const Yb of ab) {
          const ab = this.getVertexBuffer(Yb),
            Tb = ab.getSize();
          if (bb && Yb === Wb.m.NormalKind) {
            const bb = this._getFlattenedNormals(Ub, Ab[Wb.m.PositionKind]);
            this.setVerticesData(Wb.m.NormalKind, bb, ab.isUpdatable(), Tb)
          } else this.setVerticesData(Yb, Mb(Ab[Yb], Tb), ab.isUpdatable(), Tb)
        }
        if (this.morphTargetManager) {
          for (let ab = 0; ab < this.morphTargetManager.numTargets; ab++) {
            const Ab = this.morphTargetManager.getTarget(ab),
              Tb = Ab.getPositions();
            Ab.BEb(Mb(Tb, 3));
            const Eb = Ab.getNormals();
            Eb && Ab.setNormals(bb ? this._getFlattenedNormals(Ub, Tb) : Mb(Eb, 3));
            const Yb = Ab.getTangents();
            Yb && Ab.setTangents(Mb(Yb, 3));
            const Bb = Ab.getUVs();
            Bb && Ab.setUVs(Mb(Bb, 2));
            const eb = Ab.getColors();
            eb && Ab.setColors(Mb(eb, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Yb = 0; Yb < Ub.length; Yb++) Ub[Yb] = Yb;
        this.setIndices(Ub), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Yb of Eb) {
          const bb = Yb.DH();
          Fb.e.AddToMesh(Yb.materialIndex, Yb.indexStart, Yb.indexCount, Yb.indexStart, Yb.indexCount, this).setBoundingInfo(bb)
        }
        return this.setBoundingInfo(Tb), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = Hb.c.ExtractFromMesh(this);
        let Ub;
        if (bb && this.isVerticesDataPresent(Wb.m.NormalKind) && ab.normals) {
          for (Ub = 0; Ub < ab.normals.length; Ub++) ab.normals[Ub] *= -1;
          this.setVerticesData(Wb.m.NormalKind, ab.normals, this.isVertexBufferUpdatable(Wb.m.NormalKind))
        }
        if (ab.indices) {
          let bb;
          for (Ub = 0; Ub < ab.indices.length; Ub += 3) bb = ab.indices[Ub + 1], ab.indices[Ub + 1] = ab.indices[Ub + 2], ab.indices[Ub + 2] = bb;
          this.setIndices(ab.indices, null, this.isVertexBufferUpdatable(Wb.m.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const ab = Hb.c.ExtractFromMesh(this),
          Ub = ab.indices && !Array.isArray(ab.indices) && Array.from ? Array.from(ab.indices) : ab.indices,
          Ab = ab.positions && !Array.isArray(ab.positions) && Array.from ? Array.from(ab.positions) : ab.positions,
          Mb = ab.uvs && !Array.isArray(ab.uvs) && Array.from ? Array.from(ab.uvs) : ab.uvs,
          Tb = ab.normals && !Array.isArray(ab.normals) && Array.from ? Array.from(ab.normals) : ab.normals;
        if (Ub && Ab) {
          ab.indices = Ub, ab.positions = Ab, Mb && (ab.uvs = Mb), Tb && (ab.normals = Tb);
          const Eb = bb + 1,
            Yb = [];
          for (let bb = 0; bb < Eb + 1; bb++) Yb[bb] = [];
          let Bb, eb;
          const vb = new mb.m(0, 0, 0),
            Lb = new mb.m(0, 0, 0),
            Pb = new mb.l(0, 0),
            Xb = [],
            jb = [],
            Rb = [];
          let kb, yb, Zb, Db = Ab.length;
          Mb && (yb = Mb.length), Tb && (Zb = Tb.length);
          for (let bb = 0; bb < Ub.length; bb += 3) {
            jb[0] = Ub[bb], jb[1] = Ub[bb + 1], jb[2] = Ub[bb + 2];
            for (let bb = 0; bb < 3; bb++)
              if (Bb = jb[bb], eb = jb[(bb + 1) % 3], void 0 === Rb[Bb] && void 0 === Rb[eb] ? (Rb[Bb] = [], Rb[eb] = []) : (void 0 === Rb[Bb] && (Rb[Bb] = []), void 0 === Rb[eb] && (Rb[eb] = [])), void 0 === Rb[Bb][eb] && void 0 === Rb[eb][Bb]) {
                Rb[Bb][eb] = [], vb.x = (Ab[3 * eb] - Ab[3 * Bb]) / Eb, vb.y = (Ab[3 * eb + 1] - Ab[3 * Bb + 1]) / Eb, vb.z = (Ab[3 * eb + 2] - Ab[3 * Bb + 2]) / Eb, Tb && (Lb.x = (Tb[3 * eb] - Tb[3 * Bb]) / Eb, Lb.y = (Tb[3 * eb + 1] - Tb[3 * Bb + 1]) / Eb, Lb.z = (Tb[3 * eb + 2] - Tb[3 * Bb + 2]) / Eb), Mb && (Pb.x = (Mb[2 * eb] - Mb[2 * Bb]) / Eb, Pb.y = (Mb[2 * eb + 1] - Mb[2 * Bb + 1]) / Eb), Rb[Bb][eb].push(Bb);
                for (let bb = 1; bb < Eb; bb++) Rb[Bb][eb].push(Ab.length / 3), Ab[Db++] = Ab[3 * Bb] + bb * vb.x, Ab[Db++] = Ab[3 * Bb + 1] + bb * vb.y, Ab[Db++] = Ab[3 * Bb + 2] + bb * vb.z, Tb && (Tb[Zb++] = Tb[3 * Bb] + bb * Lb.x, Tb[Zb++] = Tb[3 * Bb + 1] + bb * Lb.y, Tb[Zb++] = Tb[3 * Bb + 2] + bb * Lb.z), Mb && (Mb[yb++] = Mb[2 * Bb] + bb * Pb.x, Mb[yb++] = Mb[2 * Bb + 1] + bb * Pb.y);
                Rb[Bb][eb].push(eb), Rb[eb][Bb] = [], kb = Rb[Bb][eb].length;
                for (let bb = 0; bb < kb; bb++) Rb[eb][Bb][bb] = Rb[Bb][eb][kb - 1 - bb]
              } Yb[0][0] = Ub[bb], Yb[1][0] = Rb[Ub[bb]][Ub[bb + 1]][1], Yb[1][1] = Rb[Ub[bb]][Ub[bb + 2]][1];
            for (let ab = 2; ab < Eb; ab++) {
              Yb[ab][0] = Rb[Ub[bb]][Ub[bb + 1]][ab], Yb[ab][ab] = Rb[Ub[bb]][Ub[bb + 2]][ab], vb.x = (Ab[3 * Yb[ab][ab]] - Ab[3 * Yb[ab][0]]) / ab, vb.y = (Ab[3 * Yb[ab][ab] + 1] - Ab[3 * Yb[ab][0] + 1]) / ab, vb.z = (Ab[3 * Yb[ab][ab] + 2] - Ab[3 * Yb[ab][0] + 2]) / ab, Tb && (Lb.x = (Tb[3 * Yb[ab][ab]] - Tb[3 * Yb[ab][0]]) / ab, Lb.y = (Tb[3 * Yb[ab][ab] + 1] - Tb[3 * Yb[ab][0] + 1]) / ab, Lb.z = (Tb[3 * Yb[ab][ab] + 2] - Tb[3 * Yb[ab][0] + 2]) / ab), Mb && (Pb.x = (Mb[2 * Yb[ab][ab]] - Mb[2 * Yb[ab][0]]) / ab, Pb.y = (Mb[2 * Yb[ab][ab] + 1] - Mb[2 * Yb[ab][0] + 1]) / ab);
              for (let bb = 1; bb < ab; bb++) Yb[ab][bb] = Ab.length / 3, Ab[Db++] = Ab[3 * Yb[ab][0]] + bb * vb.x, Ab[Db++] = Ab[3 * Yb[ab][0] + 1] + bb * vb.y, Ab[Db++] = Ab[3 * Yb[ab][0] + 2] + bb * vb.z, Tb && (Tb[Zb++] = Tb[3 * Yb[ab][0]] + bb * Lb.x, Tb[Zb++] = Tb[3 * Yb[ab][0] + 1] + bb * Lb.y, Tb[Zb++] = Tb[3 * Yb[ab][0] + 2] + bb * Lb.z), Mb && (Mb[yb++] = Mb[2 * Yb[ab][0]] + bb * Pb.x, Mb[yb++] = Mb[2 * Yb[ab][0] + 1] + bb * Pb.y)
            }
            Yb[Eb] = Rb[Ub[bb + 1]][Ub[bb + 2]], Xb.push(Yb[0][0], Yb[1][0], Yb[1][1]);
            for (let bb = 1; bb < Eb; bb++) {
              let ab;
              for (ab = 0; ab < bb; ab++) Xb.push(Yb[bb][ab], Yb[bb + 1][ab], Yb[bb + 1][ab + 1]), Xb.push(Yb[bb][ab], Yb[bb + 1][ab + 1], Yb[bb][ab + 1]);
              Xb.push(Yb[bb][ab], Yb[bb + 1][ab], Yb[bb + 1][ab + 1])
            }
          }
          ab.indices = Xb, ab.applyToMesh(this, this.isVertexBufferUpdatable(Wb.m.PositionKind))
        } else rb.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const bb = Hb.c.ExtractFromMesh(this),
          ab = bb.uvs,
          Ub = bb.indices,
          Ab = bb.positions,
          Mb = bb.colors,
          Tb = bb.matricesIndices,
          Eb = bb.matricesWeights,
          Yb = bb.matricesIndicesExtra,
          Bb = bb.matricesWeightsExtra;
        if (void 0 === Ub || void 0 === Ab || null === Ub || null === Ab) rb.e.Warn("VertexData contains empty entries");
        else {
          const eb = [],
            vb = [],
            Lb = [],
            Pb = [],
            Xb = [],
            jb = [],
            Rb = [],
            kb = [];
          let yb, Zb = 0;
          const Db = {};
          let zb, xb;
          for (let bb = 0; bb < Ub.length; bb += 3) {
            xb = [Ub[bb], Ub[bb + 1], Ub[bb + 2]], yb = [];
            for (let bb = 0; bb < 3; bb++) {
              yb[bb] = "";
              for (let ab = 0; ab < 3; ab++) Math.abs(Ab[3 * xb[bb] + ab]) < 1e-8 && (Ab[3 * xb[bb] + ab] = 0), yb[bb] += Ab[3 * xb[bb] + ab] + "|"
            }
            if (yb[0] != yb[1] && yb[0] != yb[2] && yb[1] != yb[2])
              for (let bb = 0; bb < 3; bb++) {
                if (zb = Db[yb[bb]], void 0 === zb) {
                  Db[yb[bb]] = Zb, zb = Zb++;
                  for (let ab = 0; ab < 3; ab++) eb.push(Ab[3 * xb[bb] + ab]);
                  if (null !== Mb && void 0 !== Mb)
                    for (let ab = 0; ab < 4; ab++) Pb.push(Mb[4 * xb[bb] + ab]);
                  if (null !== ab && void 0 !== ab)
                    for (let Ub = 0; Ub < 2; Ub++) Lb.push(ab[2 * xb[bb] + Ub]);
                  if (null !== Tb && void 0 !== Tb)
                    for (let ab = 0; ab < 4; ab++) Xb.push(Tb[4 * xb[bb] + ab]);
                  if (null !== Eb && void 0 !== Eb)
                    for (let ab = 0; ab < 4; ab++) jb.push(Eb[4 * xb[bb] + ab]);
                  if (null !== Yb && void 0 !== Yb)
                    for (let ab = 0; ab < 4; ab++) Rb.push(Yb[4 * xb[bb] + ab]);
                  if (null !== Bb && void 0 !== Bb)
                    for (let ab = 0; ab < 4; ab++) kb.push(Bb[4 * xb[bb] + ab])
                }
                vb.push(zb)
              }
          }
          const ib = [];
          Hb.c.ComputeNormals(eb, vb, ib), bb.positions = eb, bb.indices = vb, bb.normals = ib, null !== ab && void 0 !== ab && (bb.uvs = Lb), null !== Mb && void 0 !== Mb && (bb.colors = Pb), null !== Tb && void 0 !== Tb && (bb.matricesIndices = Xb), null !== Eb && void 0 !== Eb && (bb.matricesWeights = jb), null !== Yb && void 0 !== Yb && (bb.matricesIndicesExtra = Rb), null !== Eb && void 0 !== Eb && (bb.matricesWeightsExtra = kb), bb.applyToMesh(this, this.isVertexBufferUpdatable(Wb.m.PositionKind))
        }
      }
      static _instancedMeshFactory(bb, ab) {
        throw (0, ob.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(bb, ab, Ub) {
        throw (0, ob.l)("PhysicsImpostor")
      }
      createInstance(bb) {
        const ab = Jb._instancedMeshFactory(bb, this);
        return ab.parent = this.parent, ab
      }
      synchronizeInstances() {
        for (let bb = 0; bb < this.instances.length; bb++) {
          this.instances[bb]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(bb) {
        const ab = this.uUb(),
          Ub = this.getVerticesData(Wb.m.PositionKind);
        if (!Ub || !ab) return this;
        const Ab = [];
        for (let Tb = 0; Tb < Ub.length; Tb += 3) Ab.push(mb.m.FromArray(Ub, Tb));
        const Mb = [];
        return Zb.c.SyncAsyncForLoop(Ab.length, 40, (bb => {
          const ab = Ab.length - 1 - bb,
            Ub = Ab[ab];
          for (let Tb = 0; Tb < ab; ++Tb) {
            const bb = Ab[Tb];
            if (Ub.equals(bb)) {
              Mb[ab] = Tb;
              break
            }
          }
        }), (() => {
          for (let bb = 0; bb < ab.length; ++bb) ab[bb] = Mb[ab[bb]] || ab[bb];
          const Ub = this.mD.slice(0);
          this.setIndices(ab), this.mD = Ub, bb && bb(this)
        })), this
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), xb.b && xb.b.HasTags(this) && (bb.tags = xb.b.GetTags(this)), bb.position = this.position.qUb(), this.rotationQuaternion ? bb.rotationQuaternion = this.rotationQuaternion.qUb() : this.rotation && (bb.rotation = this.rotation.qUb()), bb.nY = this.nY.qUb(), this._postMultiplyPivotMatrix ? bb.pivotMatrix = this.getPivotMatrix().qUb() : bb.localMatrix = this.getPivotMatrix().qUb(), bb.isEnabled = this.isEnabled(!1), bb.isVisible = this.isVisible, bb.infiniteDistance = this.infiniteDistance, bb.pickable = this.zR, bb.receiveShadows = this.receiveShadows, bb.billboardMode = this.billboardMode, bb.visibility = this.visibility, bb.Lj = this.Lj, bb.checkCollisions = this.checkCollisions, bb.ellipsoid = this.ellipsoid.qUb(), bb.ellipsoidOffset = this.ellipsoidOffset.qUb(), bb.jj = this.jj, bb.isBlocker = this.isBlocker, bb.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (bb.DW = !0), this.parent && this.parent._serializeAsParent(bb), bb.isUnIndexed = this.isUnIndexed;
        const ab = this._geometry;
        if (ab && this.mD) {
          bb.geometryUniqueId = ab.uniqueId, bb.geometryId = ab.id, bb.mD = [];
          for (let ab = 0; ab < this.mD.length; ab++) {
            const Ub = this.mD[ab];
            bb.mD.push({
              materialIndex: Ub.materialIndex,
              verticesStart: Ub.verticesStart,
              verticesCount: Ub.verticesCount,
              indexStart: Ub.indexStart,
              indexCount: Ub.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (bb.materialUniqueId = this.material.uniqueId, bb.materialId = this.material.id) : (this.material = null, bb.materialUniqueId = this._scene.defaultMaterial.uniqueId, bb.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (bb.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (bb.skeletonId = this.skeleton.id, bb.skeletonUniqueId = this.skeleton.uniqueId, bb.numBoneInfluencers = this.numBoneInfluencers), this.oN()._getComponent(lb.b.NAME_PHYSICSENGINE)) {
          const ab = this.getPhysicsImpostor?.();
          ab && (bb.physicsMass = ab.getParam("KE"), bb.physicsFriction = ab.getParam("friction"), bb.physicsRestitution = ab.getParam("KE"), bb.physicsImpostor = ab.type)
        }
        this.metadata && (bb.metadata = this.metadata), 0 !== this.meshBlendingTag && (bb.meshBlendingTag = this.meshBlendingTag), bb.instances = [];
        for (let Ub = 0; Ub < this.instances.length; Ub++) {
          const ab = this.instances[Ub];
          if (ab.doNotSerialize) continue;
          const Ab = {
            name: ab.name,
            id: ab.id,
            isEnabled: ab.isEnabled(!1),
            isVisible: ab.isVisible,
            zR: ab.zR,
            checkCollisions: ab.checkCollisions,
            position: ab.position.qUb(),
            nY: ab.nY.qUb()
          };
          if (ab.parent && ab.parent._serializeAsParent(Ab), ab.rotationQuaternion ? Ab.rotationQuaternion = ab.rotationQuaternion.qUb() : ab.rotation && (Ab.rotation = ab.rotation.qUb()), this.oN()._getComponent(lb.b.NAME_PHYSICSENGINE)) {
            const bb = ab.getPhysicsImpostor?.();
            bb && (Ab.physicsMass = bb.getParam("KE"), Ab.physicsFriction = bb.getParam("friction"), Ab.physicsRestitution = bb.getParam("KE"), Ab.physicsImpostor = bb.type)
          }
          ab.metadata && (Ab.metadata = ab.metadata), ab.actionManager && (Ab.actions = ab.actionManager.serialize(ab.name)), bb.instances.push(Ab), ub.b.AppendSerializedAnimations(ab, Ab), Ab.cj = ab.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (bb.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Cbb
          }, this._userThinInstanceBuffersStorage)) {
          const ab = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const bb in this._userThinInstanceBuffersStorage.data) ab.data[bb] = Array.from(this._userThinInstanceBuffersStorage.data[bb]), ab.sizes[bb] = this._userThinInstanceBuffersStorage.sizes[bb], ab.strides[bb] = this._userThinInstanceBuffersStorage.strides[bb];
          bb.thinInstances.userThinInstance = ab
        }
        return ub.b.AppendSerializedAnimations(this, bb), bb.cj = this.serializeAnimationRanges(), bb.layerMask = this.layerMask, bb.alphaIndex = this.alphaIndex, bb.hasVertexAlpha = this.hasVertexAlpha, bb.overlayAlpha = this.overlayAlpha, bb.overlayColor = this.overlayColor.qUb(), bb.renderOverlay = this.renderOverlay, bb.applyFog = this.applyFog, this.actionManager && (bb.actions = this.actionManager.serialize(this.name)), bb
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const bb = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (bb && bb.vertexCount) {
          if (bb.vertexCount !== this.getTotalVertices()) return rb.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (bb.isUsingTextureForTargets) return;
          for (let ab = 0; ab < bb.numInfluencers; ab++) {
            const Ub = bb.getActiveTarget(ab),
              Ab = Ub.getPositions();
            if (!Ab) return void rb.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Wb.m.PositionKind + ab, Ab, !1, 3);
            const Mb = Ub.getNormals();
            Mb && this.geometry.setVerticesData(Wb.m.NormalKind + ab, Mb, !1, 3);
            const Tb = Ub.getTangents();
            Tb && this.geometry.setVerticesData(Wb.m.TangentKind + ab, Tb, !1, 3);
            const Eb = Ub.getUVs();
            Eb && this.geometry.setVerticesData(Wb.m.UVKind + "_" + ab, Eb, !1, 2);
            const Yb = Ub.getUV2s();
            Yb && this.geometry.setVerticesData(Wb.m.UV2Kind + "_" + ab, Yb, !1, 2);
            const Bb = Ub.getColors();
            Bb && this.geometry.setVerticesData(Wb.m.ColorKind + ab, Bb, !1, 4)
          }
        } else {
          let bb = 0;
          for (; this.geometry.isVerticesDataPresent(Wb.m.PositionKind + bb);) this.geometry.removeVerticesData(Wb.m.PositionKind + bb), this.geometry.isVerticesDataPresent(Wb.m.NormalKind + bb) && this.geometry.removeVerticesData(Wb.m.NormalKind + bb), this.geometry.isVerticesDataPresent(Wb.m.TangentKind + bb) && this.geometry.removeVerticesData(Wb.m.TangentKind + bb), this.geometry.isVerticesDataPresent(Wb.m.UVKind + "_" + bb) && this.geometry.removeVerticesData(Wb.m.UVKind + "_" + bb), this.geometry.isVerticesDataPresent(Wb.m.UV2Kind + "_" + bb) && this.geometry.removeVerticesData(Wb.m.UV2Kind + "_" + bb), this.geometry.isVerticesDataPresent(Wb.m.ColorKind + bb) && this.geometry.removeVerticesData(Wb.m.ColorKind + bb), bb++
        }
      }
      static Parse(bb, ab, Ub) {
        let Ab, Mb = !1;
        if (bb.type && "LinesMesh" === bb.type ? Ab = Jb._LinesMeshParser(bb, ab) : bb.type && "GroundMesh" === bb.type ? Ab = Jb._GroundMeshParser(bb, ab) : bb.type && "GoldbergMesh" === bb.type ? Ab = Jb._GoldbergMeshParser(bb, ab) : bb.type && "GreasedLineMesh" === bb.type ? Ab = Jb._GreasedLineMeshParser(bb, ab) : bb.type && "TrailMesh" === bb.type ? Ab = Jb._TrailMeshParser(bb, ab) : bb.type && "GaussianSplattingMesh" === bb.type ? (Ab = bb._isCompound ? Jb._GaussianSplattingCompoundMeshParser(bb, ab) : Jb._GaussianSplattingMeshParser(bb, ab), Mb = !0) : bb.type && "GaussianSplattingPartProxyMesh" === bb.type ? (Ab = Jb._GaussianSplattingPartProxyMeshParser(bb, ab), Mb = !0) : Ab = new Jb(bb.name, ab), Ab.id = bb.id, Ab._waitingParsedUniqueId = bb.uniqueId, xb.b && xb.b.AddTagsTo(Ab, bb.tags), Ab.position = mb.m.FromArray(bb.position), void 0 !== bb.metadata && (Ab.metadata = bb.metadata), void 0 !== bb.meshBlendingTag && (Ab.meshBlendingTag = bb.meshBlendingTag), bb.rotationQuaternion ? Ab.rotationQuaternion = mb.e.FromArray(bb.rotationQuaternion) : bb.rotation && (Ab.rotation = mb.m.FromArray(bb.rotation)), Ab.nY = mb.m.FromArray(bb.nY), bb.localMatrix ? Ab.setPreTransformMatrix(mb.b.FromArray(bb.localMatrix)) : bb.pivotMatrix && Ab.setPivotMatrix(mb.b.FromArray(bb.pivotMatrix)), Ab.Yz(bb.isEnabled), Ab.isVisible = bb.isVisible, Ab.infiniteDistance = bb.infiniteDistance, Ab.Lj = !!bb.Lj, Ab.showBoundingBox = bb.showBoundingBox, Ab.showSubMeshesBoundingBox = bb.showSubMeshesBoundingBox, void 0 !== bb.applyFog && (Ab.applyFog = bb.applyFog), void 0 !== bb.pickable && (Ab.zR = bb.pickable), void 0 !== bb.alphaIndex && (Ab.alphaIndex = bb.alphaIndex), Ab.receiveShadows = bb.receiveShadows, void 0 !== bb.billboardMode && (Ab.billboardMode = bb.billboardMode), void 0 !== bb.visibility && (Ab.visibility = bb.visibility), Ab.checkCollisions = bb.checkCollisions, Ab.jj = !!bb.jj, bb.ellipsoid && (Ab.ellipsoid = mb.m.FromArray(bb.ellipsoid)), bb.ellipsoidOffset && (Ab.ellipsoidOffset = mb.m.FromArray(bb.ellipsoidOffset)), null != bb.overrideMaterialSideOrientation && (Ab.sideOrientation = bb.overrideMaterialSideOrientation), void 0 !== bb.sideOrientation && (Ab.sideOrientation = bb.sideOrientation), void 0 !== bb.isBlocker && (Ab.isBlocker = bb.isBlocker), Ab._shouldGenerateFlatShading = bb.useFlatShading, bb.DW && (Ab._waitingData.DW = bb.DW), void 0 !== bb.parentId && (Ab._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Ab._waitingParentInstanceIndex = bb.parentInstanceIndex), void 0 !== bb.actions && (Ab._waitingData.actions = bb.actions), void 0 !== bb.overlayAlpha && (Ab.overlayAlpha = bb.overlayAlpha), void 0 !== bb.overlayColor && (Ab.overlayColor = pb.c.FromArray(bb.overlayColor)), void 0 !== bb.renderOverlay && (Ab.renderOverlay = bb.renderOverlay), Ab.isUnIndexed = !!bb.isUnIndexed, Ab.hasVertexAlpha = bb.hasVertexAlpha, bb.delayLoadingFile ? (Ab.delayLoadState = 4, Ab.delayLoadingFile = Ub + bb.delayLoadingFile, Ab.buildBoundingInfo(mb.m.FromArray(bb.boundingBoxMinimum), mb.m.FromArray(bb.boundingBoxMaximum)), bb._binaryInfo && (Ab._binaryInfo = bb._binaryInfo), Ab._delayInfo = [], bb.hasUVs && Ab._delayInfo.push(Wb.m.UVKind), bb.hasUVs2 && Ab._delayInfo.push(Wb.m.UV2Kind), bb.hasUVs3 && Ab._delayInfo.push(Wb.m.UV3Kind), bb.hasUVs4 && Ab._delayInfo.push(Wb.m.UV4Kind), bb.hasUVs5 && Ab._delayInfo.push(Wb.m.UV5Kind), bb.hasUVs6 && Ab._delayInfo.push(Wb.m.UV6Kind), bb.hasColors && Ab._delayInfo.push(Wb.m.ColorKind), bb.hasMatricesIndices && Ab._delayInfo.push(Wb.m.MatricesIndicesKind), bb.hasMatricesWeights && Ab._delayInfo.push(Wb.m.MatricesWeightsKind), Ab._delayLoadingFunction = Ib.d._ImportGeometry, qb.d.ForceFullSceneLoadingForIncremental && Ab._checkDelayState()) : Mb || Ib.d._ImportGeometry(bb, Ab), bb.materialUniqueId ? Ab._waitingMaterialId = bb.materialUniqueId : bb.materialId && (Ab._waitingMaterialId = bb.materialId), bb.morphTargetManagerId > -1 && (Ab._waitingMorphTargetManagerId = bb.morphTargetManagerId), void 0 !== bb.skeletonId && null !== bb.skeletonId && (Ab.skeleton = ab.getLastSkeletonById(bb.skeletonId), Ab._waitingSkeletonId = bb.skeletonId, bb.numBoneInfluencers && (Ab.numBoneInfluencers = bb.numBoneInfluencers)), void 0 !== bb.skeletonUniqueId && null !== bb.skeletonUniqueId && (Ab._waitingSkeletonUniqueId = bb.skeletonUniqueId), bb.animations) {
          for (let ab = 0; ab < bb.animations.length; ab++) {
            const Ub = bb.animations[ab],
              Mb = (0, Kb.b)("BABYLON.Animation");
            Mb && Ab.animations.push(Mb.Parse(Ub))
          }
          Nb.c.ParseAnimationRanges(Ab, bb, ab)
        }
        if (bb.autoAnimate && ab.beginAnimation(Ab, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), bb.layerMask && !isNaN(bb.layerMask) ? Ab.layerMask = Math.abs(parseInt(bb.layerMask)) : Ab.layerMask = 268435455, bb.physicsImpostor && (Ab.physicsImpostor = Jb._PhysicsImpostorParser(ab, Ab, bb)), bb.lodMeshIds && (Ab._waitingData.lods = {
            ids: bb.lodMeshIds,
            distances: bb.lodDistances ? bb.lodDistances : null,
            coverages: bb.lodCoverages ? bb.lodCoverages : null
          }), bb.instances)
          for (let Tb = 0; Tb < bb.instances.length; Tb++) {
            const Ub = bb.instances[Tb],
              Mb = Ab.createInstance(Ub.name);
            if (Ub.id && (Mb.id = Ub.id), xb.b && (Ub.tags ? xb.b.AddTagsTo(Mb, Ub.tags) : xb.b.AddTagsTo(Mb, bb.tags)), Mb.position = mb.m.FromArray(Ub.position), void 0 !== Ub.metadata && (Mb.metadata = Ub.metadata), void 0 !== Ub.parentId && (Mb._waitingParentId = Ub.parentId), void 0 !== Ub.parentInstanceIndex && (Mb._waitingParentInstanceIndex = Ub.parentInstanceIndex), void 0 !== Ub.isEnabled && null !== Ub.isEnabled && Mb.Yz(Ub.isEnabled), void 0 !== Ub.isVisible && null !== Ub.isVisible && (Mb.isVisible = Ub.isVisible), void 0 !== Ub.zR && null !== Ub.zR && (Mb.zR = Ub.zR), Ub.rotationQuaternion ? Mb.rotationQuaternion = mb.e.FromArray(Ub.rotationQuaternion) : Ub.rotation && (Mb.rotation = mb.m.FromArray(Ub.rotation)), Mb.nY = mb.m.FromArray(Ub.nY), void 0 != Ub.checkCollisions && null != Ub.checkCollisions && (Mb.checkCollisions = Ub.checkCollisions), void 0 != Ub.pickable && null != Ub.pickable && (Mb.zR = Ub.pickable), void 0 != Ub.showBoundingBox && null != Ub.showBoundingBox && (Mb.showBoundingBox = Ub.showBoundingBox), void 0 != Ub.showSubMeshesBoundingBox && null != Ub.showSubMeshesBoundingBox && (Mb.showSubMeshesBoundingBox = Ub.showSubMeshesBoundingBox), void 0 != Ub.alphaIndex && null != Ub.showSubMeshesBoundingBox && (Mb.alphaIndex = Ub.alphaIndex), Ub.physicsImpostor && (Mb.physicsImpostor = Jb._PhysicsImpostorParser(ab, Mb, Ub)), void 0 !== Ub.actions && (Mb._waitingData.actions = Ub.actions), Ub.animations) {
              for (let bb = 0; bb < Ub.animations.length; bb++) {
                const ab = Ub.animations[bb],
                  Ab = (0, Kb.b)("BABYLON.Animation");
                Ab && Mb.animations.push(Ab.Parse(ab))
              }
              Nb.c.ParseAnimationRanges(Mb, Ub, ab), Ub.autoAnimate && ab.beginAnimation(Mb, Ub.autoAnimateFrom, Ub.autoAnimateTo, Ub.autoAnimateLoop, Ub.autoAnimateSpeed || 1)
            }
          }
        if (bb.thinInstances) {
          const ab = bb.thinInstances;
          if (Ab.Cbb = !!ab.enablePicking, ab.matrixData ? (Ab.o4("matrix", new Float32Array(ab.matrixData), 16, !1), Ab._thinInstanceDataStorage.matrixBufferSize = ab.matrixBufferSize, Ab._thinInstanceDataStorage.instancesCount = ab.instancesCount) : Ab._thinInstanceDataStorage.matrixBufferSize = ab.matrixBufferSize, bb.thinInstances.userThinInstance) {
            const ab = bb.thinInstances.userThinInstance;
            for (const bb in ab.data) Ab.o4(bb, new Float32Array(ab.data[bb]), ab.strides[bb], !1), Ab._userThinInstanceBuffersStorage.sizes[bb] = ab.sizes[bb]
          }
        }
        return Ab
      }
      setPositionsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourcePositions) {
          const ab = this.getVerticesData(Wb.m.PositionKind);
          if (!ab) return bb._sourcePositions;
          bb._sourcePositions = new Float32Array(ab), this.isVertexBufferUpdatable(Wb.m.PositionKind) || this.setVerticesData(Wb.m.PositionKind, ab, !0)
        }
        return bb._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourceNormals) {
          const ab = this.getVerticesData(Wb.m.NormalKind);
          if (!ab) return bb._sourceNormals;
          bb._sourceNormals = new Float32Array(ab), this.isVertexBufferUpdatable(Wb.m.NormalKind) || this.setVerticesData(Wb.m.NormalKind, ab, !0)
        }
        return bb._sourceNormals
      }
      applySkeleton(bb) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.oN().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.oN().getFrameId(), !this.isVerticesDataPresent(Wb.m.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Wb.m.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Wb.m.MatricesWeightsKind)) return this;
        const ab = this.isVerticesDataPresent(Wb.m.NormalKind),
          Ub = this._internalMeshDataInfo;
        if (!Ub._sourcePositions) {
          const bb = this.mD.slice();
          this.setPositionsForCPUSkinning(), this.mD = bb
        }
        ab && !Ub._sourceNormals && this.setNormalsForCPUSkinning();
        let Ab = this.getVerticesData(Wb.m.PositionKind);
        if (!Ab) return this;
        Ab instanceof Float32Array || (Ab = new Float32Array(Ab));
        let Mb = this.getVerticesData(Wb.m.NormalKind);
        if (ab) {
          if (!Mb) return this;
          Mb instanceof Float32Array || (Mb = new Float32Array(Mb))
        }
        const Tb = this.getVerticesData(Wb.m.MatricesIndicesKind),
          Eb = this.getVerticesData(Wb.m.MatricesWeightsKind);
        if (!Eb || !Tb) return this;
        const Yb = this.numBoneInfluencers > 4,
          Bb = Yb ? this.getVerticesData(Wb.m.MatricesIndicesExtraKind) : null,
          eb = Yb ? this.getVerticesData(Wb.m.MatricesWeightsExtraKind) : null,
          vb = bb.getTransformMatrices(this),
          Lb = mb.m.Zero(),
          Pb = new mb.b,
          Xb = new mb.b;
        let jb, Rb = 0;
        for (let kb = 0; kb < Ab.length; kb += 3, Rb += 4) {
          let bb;
          for (jb = 0; jb < 4; jb++) bb = Eb[Rb + jb], bb > 0 && (mb.b.FromFloat32ArrayToRefScaled(vb, Math.floor(16 * Tb[Rb + jb]), bb, Xb), Pb.addToSelf(Xb));
          if (Yb)
            for (jb = 0; jb < 4; jb++) bb = eb[Rb + jb], bb > 0 && (mb.b.FromFloat32ArrayToRefScaled(vb, Math.floor(16 * Bb[Rb + jb]), bb, Xb), Pb.addToSelf(Xb));
          mb.m.TransformCoordinatesFromFloatsToRef(Ub._sourcePositions[kb], Ub._sourcePositions[kb + 1], Ub._sourcePositions[kb + 2], Pb, Lb), Lb.toArray(Ab, kb), ab && (mb.m.TransformNormalFromFloatsToRef(Ub._sourceNormals[kb], Ub._sourceNormals[kb + 1], Ub._sourceNormals[kb + 2], Pb, Lb), Lb.toArray(Mb, kb)), Pb.reset()
        }
        return this.updateVerticesData(Wb.m.PositionKind, Ab), ab && this.updateVerticesData(Wb.m.NormalKind, Mb), this
      }
      static MinMax(bb) {
        let ab = null,
          Ub = null;
        for (const Ab of bb) {
          const bb = Ab.DH().boundingBox;
          ab && Ub ? (ab.minimizeInPlace(bb.minimumWorld), Ub.maximizeInPlace(bb.maximumWorld)) : (ab = bb.minimumWorld.clone(), Ub = bb.maximumWorld.clone())
        }
        return ab && Ub ? {
          min: ab,
          max: Ub
        } : {
          min: mb.m.Zero(),
          max: mb.m.Zero()
        }
      }
      static Center(bb) {
        const ab = bb instanceof Array ? Jb.MinMax(bb) : bb;
        return mb.m.Center(ab.min, ab.max)
      }
      static MergeMeshes(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        return (0, ib.k)(Jb._MergeMeshesCoroutine(bb, ab, Ub, Ab, Mb, Tb, !1))
      }
      static async MergeMeshesAsync(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, ib.h)(Jb._MergeMeshesCoroutine(bb, ab, Ub, Ab, Mb, Tb, !0), (0, ib.d)())
      }
      static * _MergeMeshesCoroutine(bb) {
        let ab, Ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ab = arguments.length > 2 ? arguments[2] : void 0,
          Mb = arguments.length > 3 ? arguments[3] : void 0,
          Tb = arguments.length > 4 ? arguments[4] : void 0,
          Eb = arguments.length > 5 ? arguments[5] : void 0,
          Yb = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (bb = bb.filter(Boolean)).length) return null;
        if (!Ab) {
          let Ub = 0;
          for (ab = 0; ab < bb.length; ab++)
            if (Ub += bb[ab].getTotalVertices(), Ub >= 65536) return rb.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Bb = bb[0];
        Eb && (Tb = !1, bb.sort(((bb, ab) => (bb.material?.uniqueId ?? -1) - (ab.material?.uniqueId ?? -1))));
        const eb = new Array,
          vb = new Array,
          Lb = new Array,
          Pb = bb[0].sideOrientation;
        for (ab = 0; ab < bb.length; ab++) {
          const Ub = bb[ab];
          if (Ub.EW) return rb.e.Warn("Cannot merge instance meshes."), null;
          if (Pb !== Ub.sideOrientation) return rb.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Tb || Eb) {
            const bb = Lb.reduce(((bb, ab) => Math.max(bb, ab.start + ab.count)), 0);
            if (Eb)
              if (Ub.material) {
                const ab = Ub.material;
                if (ab instanceof Qb.d) {
                  for (let bb = 0; bb < ab.N9.length; bb++) eb.indexOf(ab.N9[bb]) < 0 && eb.push(ab.N9[bb]);
                  for (let Ab = 0; Ab < Ub.mD.length; Ab++) vb.push(eb.indexOf(ab.N9[Ub.mD[Ab].materialIndex])), Lb.push({
                    start: bb + Ub.mD[Ab].indexStart,
                    count: Ub.mD[Ab].indexCount
                  })
                } else {
                  eb.indexOf(ab) < 0 && eb.push(ab);
                  for (let Ab = 0; Ab < Ub.mD.length; Ab++) vb.push(eb.indexOf(ab)), Lb.push({
                    start: bb + Ub.mD[Ab].indexStart,
                    count: Ub.mD[Ab].indexCount
                  })
                }
              } else
                for (let ab = 0; ab < Ub.mD.length; ab++) vb.push(0), Lb.push({
                  start: bb + Ub.mD[ab].indexStart,
                  count: Ub.mD[ab].indexCount
                });
            else Lb.push({
              start: bb,
              count: Ub.getTotalIndices()
            })
          }
        }
        if (Eb && Lb.length > 1) {
          let bb = 0;
          for (let ab = 1; ab < Lb.length; ab++) {
            const Ub = Lb[bb],
              Ab = Lb[ab];
            vb[ab] === vb[bb] && Ub.start + Ub.count === Ab.start ? Ub.count += Ab.count : (bb++, Lb[bb] = Ab, vb[bb] = vb[ab])
          }
          Lb.length = bb + 1, vb.length = bb + 1
        }
        const Xb = bb => {
            const ab = bb.computeWorldMatrix(!0);
            return {
              vertexData: Hb.c.ExtractFromMesh(bb, !1, !1),
              transform: ab
            }
          },
          {
            vertexData: jb,
            transform: Rb
          } = Xb(bb[0]);
        Yb && (yield);
        const kb = new Array(bb.length - 1);
        for (let ib = 1; ib < bb.length; ib++) kb[ib - 1] = Xb(bb[ib]), Yb && (yield);
        const yb = jb._mergeCoroutine(Rb, kb, Ab, Yb, !Ub);
        let Zb = yb.next();
        for (; !Zb.done;) Yb && (yield), Zb = yb.next();
        const Db = Zb.value;
        Mb || (Mb = new Jb(Bb.name + "_merged", Bb.oN()));
        const zb = Db._applyToCoroutine(Mb, void 0, Yb);
        let xb = zb.next();
        for (; !xb.done;) Yb && (yield), xb = zb.next();
        if (Mb.checkCollisions = Bb.checkCollisions, Mb.sideOrientation = Bb.sideOrientation, Ub)
          for (ab = 0; ab < bb.length; ab++) bb[ab].dispose();
        if (Tb || Eb) {
          for (Mb.releaseSubMeshes(), ab = 0; ab < Lb.length;) Fb.e.CreateFromIndices(0, Lb[ab].start, Lb[ab].count, Mb, void 0, !1), ab++;
          for (const bb of Mb.mD) bb.refreshBoundingInfo();
          Mb.computeWorldMatrix(!0)
        }
        if (Eb) {
          const bb = new Qb.d(Bb.name + "_merged", Bb.oN());
          bb.N9 = eb;
          for (let ab = 0; ab < Mb.mD.length; ab++) Mb.mD[ab].materialIndex = vb[ab];
          Mb.material = bb
        } else Mb.material = Bb.material;
        return Mb
      }
      B5(bb) {
        bb._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(bb)
      }
      Z5(bb) {
        const ab = bb._indexInSourceMeshInstanceArray;
        if (-1 != ab) {
          if (ab !== this.instances.length - 1) {
            const bb = this.instances[this.instances.length - 1];
            this.instances[ab] = bb, bb._indexInSourceMeshInstanceArray = ab
          }
          bb._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === hb.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(bb) {
        const ab = this.oN();
        return ab.forcePointsCloud ? hb.d.PointFillMode : ab.forceWireframe ? hb.d.WireFrameFillMode : this.overrideRenderingFillMode ?? bb
      }
      setMaterialByID(bb) {
        return this.setMaterialById(bb)
      }
      static CreateRibbon(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(bb, ab, Ub, Ab, Mb, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(bb, ab, Ub, Ab, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(bb, ab, Ub, Ab, Mb, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(bb, ab, Ub, Ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(bb, ab, Ub, Ab, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(bb, ab, Ub, Ab, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(bb, ab, Ub, Ab, Mb, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(bb, ab, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(bb, ab, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(bb, ab, Ub, Ab, Mb, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(bb, ab, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Jb.FRONTSIDE = Hb.c.FRONTSIDE, Jb.BACKSIDE = Hb.c.BACKSIDE, Jb.DOUBLESIDE = Hb.c.DOUBLESIDE, Jb.DEFAULTSIDE = Hb.c.DEFAULTSIDE, Jb.NO_CAP = 0, Jb.CAP_START = 1, Jb.CAP_END = 2, Jb.CAP_ALL = 3, Jb.NO_FLIP = 0, Jb.FLIP_TILE = 1, Jb.ROTATE_TILE = 2, Jb.FLIP_ROW = 3, Jb.ROTATE_ROW = 4, Jb.FLIP_N_ROTATE_TILE = 5, Jb.FLIP_N_ROTATE_ROW = 6, Jb.CENTER = 0, Jb.LEFT = 1, Jb.RIGHT = 2, Jb.TOP = 3, Jb.BOTTOM = 4, Jb.INSTANCEDMESH_SORT_TRANSPARENT = !1, Jb._GroundMeshParser = (bb, ab) => {
      throw (0, ob.l)("GroundMesh")
    }, Jb._GoldbergMeshParser = (bb, ab) => {
      throw (0, ob.l)("GoldbergMesh")
    }, Jb._LinesMeshParser = (bb, ab) => {
      throw (0, ob.l)("LinesMesh")
    }, Jb._GreasedLineMeshParser = (bb, ab) => {
      throw (0, ob.l)("GreasedLineMesh")
    }, Jb._GreasedLineRibbonMeshParser = (bb, ab) => {
      throw (0, ob.l)("GreasedLineRibbonMesh")
    }, Jb._TrailMeshParser = (bb, ab) => {
      throw (0, ob.l)("TrailMesh")
    }, Jb._GaussianSplattingMeshParser = (bb, ab) => {
      throw (0, ob.l)("GaussianSplattingMesh")
    }, Jb._GaussianSplattingPartProxyMeshParser = (bb, ab) => {
      throw (0, ob.l)("GaussianSplattingPartProxyMesh")
    }, Jb._GaussianSplattingCompoundMeshParser = (bb, ab) => {
      throw (0, ob.l)("GaussianSplattingCompoundMesh")
    };
    let nb = !1;

    function Sb() {
      nb || (nb = !0, (0, Kb.f)("BABYLON.Mesh", Jb))
    }(Ab = Jb.prototype).UH ?? (Ab.UH = (0, ob.i)("Mesh", "UH")), (Mb = Jb.prototype).simplify ?? (Mb.simplify = (0, ob.i)("Mesh", "simplify")), (Tb = Jb.prototype).thinInstanceAdd ?? (Tb.thinInstanceAdd = (0, ob.i)("Mesh", "thinInstanceAdd")), (Eb = Jb.prototype).thinInstanceAddSelf ?? (Eb.thinInstanceAddSelf = (0, ob.i)("Mesh", "thinInstanceAddSelf")), (Yb = Jb.prototype).thinInstanceRegisterAttribute ?? (Yb.thinInstanceRegisterAttribute = (0, ob.i)("Mesh", "thinInstanceRegisterAttribute")), (Bb = Jb.prototype).thinInstanceSetMatrixAt ?? (Bb.thinInstanceSetMatrixAt = (0, ob.i)("Mesh", "thinInstanceSetMatrixAt")), (eb = Jb.prototype).thinInstanceSetAttributeAt ?? (eb.thinInstanceSetAttributeAt = (0, ob.i)("Mesh", "thinInstanceSetAttributeAt")), (vb = Jb.prototype).o4 ?? (vb.o4 = (0, ob.i)("Mesh", "o4")), (Lb = Jb.prototype).thinInstanceGetWorldMatrices ?? (Lb.thinInstanceGetWorldMatrices = (0, ob.i)("Mesh", "thinInstanceGetWorldMatrices")), (Pb = Jb.prototype).t5 ?? (Pb.t5 = (0, ob.i)("Mesh", "t5")), (Xb = Jb.prototype).thinInstancePartialBufferUpdate ?? (Xb.thinInstancePartialBufferUpdate = (0, ob.i)("Mesh", "thinInstancePartialBufferUpdate")), (jb = Jb.prototype).thinInstanceRefreshBoundingInfo ?? (jb.thinInstanceRefreshBoundingInfo = (0, ob.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (Rb = Jb.prototype).getEmittedParticleSystems ?? (Rb.getEmittedParticleSystems = (0, ob.i)("Mesh", "getEmittedParticleSystems")), (kb = Jb.prototype).getHierarchyEmittedParticleSystems ?? (kb.getHierarchyEmittedParticleSystems = (0, ob.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Jb.prototype, "edgesShareWithInstances") || Object.defineProperty(Jb.prototype, "edgesShareWithInstances", (0, ob.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Jb.prototype, "Cbb") || Object.defineProperty(Jb.prototype, "Cbb", (0, ob.g)("Mesh", "Cbb")), Object.getOwnPropertyDescriptor(Jb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Jb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, ob.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Jb.prototype, "W8") || Object.defineProperty(Jb.prototype, "W8", (0, ob.g)("Mesh", "W8"))
  },
  39534: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => jb
    });
    var Ab = Ub(39104),
      Mb = Ub(36401),
      Tb = Ub(39244),
      Eb = Ub(38982),
      Yb = Ub(36593),
      Bb = Ub(37989),
      eb = Ub(39110),
      vb = Ub(39525),
      Lb = Ub(39160),
      Pb = Ub(39400);
    class Xb {}
    let jb = (() => {
      var bb;
      let ab, Ub, jb, Rb, kb = [];
      return bb = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, vb.e)(this._applyToCoroutine.bind(this)), this.uniqueId = bb._UniqueIdGenerator, bb._UniqueIdGenerator++
        }
        set(bb, ab) {
          switch (bb.length || Bb.e.Warn(`Setting vertex data kind '${ab}' with an empty array`), ab) {
            case Tb.m.PositionKind:
              this.positions = bb;
              break;
            case Tb.m.NormalKind:
              this.normals = bb;
              break;
            case Tb.m.TangentKind:
              this.tangents = bb;
              break;
            case Tb.m.UVKind:
              this.uvs = bb;
              break;
            case Tb.m.UV2Kind:
              this.uvs2 = bb;
              break;
            case Tb.m.UV3Kind:
              this.uvs3 = bb;
              break;
            case Tb.m.UV4Kind:
              this.uvs4 = bb;
              break;
            case Tb.m.UV5Kind:
              this.uvs5 = bb;
              break;
            case Tb.m.UV6Kind:
              this.uvs6 = bb;
              break;
            case Tb.m.ColorKind:
              this.colors = bb;
              break;
            case Tb.m.MatricesIndicesKind:
              this.matricesIndices = bb;
              break;
            case Tb.m.MatricesWeightsKind:
              this.matricesWeights = bb;
              break;
            case Tb.m.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = bb;
              break;
            case Tb.m.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = bb
          }
        }
        applyToMesh(bb, ab) {
          return this._applyTo(bb, ab, !1), this
        }
        applyToGeometry(bb, ab) {
          return this._applyTo(bb, ab, !1), this
        }
        updateMesh(bb) {
          return this._update(bb), this
        }
        updateGeometry(bb) {
          return this._update(bb), this
        }* _applyToCoroutine(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (bb.setVerticesData(Tb.m.PositionKind, this.positions, ab), Ub && (yield)), this.normals && (bb.setVerticesData(Tb.m.NormalKind, this.normals, ab), Ub && (yield)), this.tangents && (bb.setVerticesData(Tb.m.TangentKind, this.tangents, ab), Ub && (yield)), this.uvs && (bb.setVerticesData(Tb.m.UVKind, this.uvs, ab), Ub && (yield)), this.uvs2 && (bb.setVerticesData(Tb.m.UV2Kind, this.uvs2, ab), Ub && (yield)), this.uvs3 && (bb.setVerticesData(Tb.m.UV3Kind, this.uvs3, ab), Ub && (yield)), this.uvs4 && (bb.setVerticesData(Tb.m.UV4Kind, this.uvs4, ab), Ub && (yield)), this.uvs5 && (bb.setVerticesData(Tb.m.UV5Kind, this.uvs5, ab), Ub && (yield)), this.uvs6 && (bb.setVerticesData(Tb.m.UV6Kind, this.uvs6, ab), Ub && (yield)), this.colors) {
            const Ab = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            bb.setVerticesData(Tb.m.ColorKind, this.colors, ab, Ab), this.hasVertexAlpha && void 0 !== bb.hasVertexAlpha && (bb.hasVertexAlpha = !0), Ub && (yield)
          }
          if (this.matricesIndices && (bb.setVerticesData(Tb.m.MatricesIndicesKind, this.matricesIndices, ab), Ub && (yield)), this.matricesWeights && (bb.setVerticesData(Tb.m.MatricesWeightsKind, this.matricesWeights, ab), Ub && (yield)), this.matricesIndicesExtra && (bb.setVerticesData(Tb.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, ab), Ub && (yield)), this.matricesWeightsExtra && (bb.setVerticesData(Tb.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, ab), Ub && (yield)), this.indices ? (bb.setIndices(this.indices, null, ab), Ub && (yield)) : bb.setIndices([], null), bb.mD && this.materialInfos && this.materialInfos.length > 1) {
            const ab = bb;
            ab.mD = [];
            for (const bb of this.materialInfos) new Pb.e(bb.materialIndex, bb.verticesStart, bb.verticesCount, bb.indexStart, bb.indexCount, ab)
          }
          return this
        }
        _update(bb, ab, Ub) {
          return this.positions && bb.updateVerticesData(Tb.m.PositionKind, this.positions, ab, Ub), this.normals && bb.updateVerticesData(Tb.m.NormalKind, this.normals, ab, Ub), this.tangents && bb.updateVerticesData(Tb.m.TangentKind, this.tangents, ab, Ub), this.uvs && bb.updateVerticesData(Tb.m.UVKind, this.uvs, ab, Ub), this.uvs2 && bb.updateVerticesData(Tb.m.UV2Kind, this.uvs2, ab, Ub), this.uvs3 && bb.updateVerticesData(Tb.m.UV3Kind, this.uvs3, ab, Ub), this.uvs4 && bb.updateVerticesData(Tb.m.UV4Kind, this.uvs4, ab, Ub), this.uvs5 && bb.updateVerticesData(Tb.m.UV5Kind, this.uvs5, ab, Ub), this.uvs6 && bb.updateVerticesData(Tb.m.UV6Kind, this.uvs6, ab, Ub), this.colors && bb.updateVerticesData(Tb.m.ColorKind, this.colors, ab, Ub), this.matricesIndices && bb.updateVerticesData(Tb.m.MatricesIndicesKind, this.matricesIndices, ab, Ub), this.matricesWeights && bb.updateVerticesData(Tb.m.MatricesWeightsKind, this.matricesWeights, ab, Ub), this.matricesIndicesExtra && bb.updateVerticesData(Tb.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, ab, Ub), this.matricesWeightsExtra && bb.updateVerticesData(Tb.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, ab, Ub), this.indices && bb.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Tb = Mb.j.Pj[0],
            Eb = Mb.j.Pj[1];
          for (let Yb = Ub; Yb < Ub + Ab; Yb += 3) Mb.m.FromArrayToRef(bb, Yb, Tb), Mb.m.TransformCoordinatesToRef(Tb, ab, Eb), bb[Yb] = Eb.x, bb[Yb + 1] = Eb.y, bb[Yb + 2] = Eb.z
        }
        static _TransformVector3Normals(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Tb = Mb.j.Pj[0],
            Eb = Mb.j.Pj[1];
          for (let Yb = Ub; Yb < Ub + Ab; Yb += 3) Mb.m.FromArrayToRef(bb, Yb, Tb), Mb.m.TransformNormalToRef(Tb, ab, Eb), bb[Yb] = Eb.x, bb[Yb + 1] = Eb.y, bb[Yb + 2] = Eb.z
        }
        static _TransformVector4Normals(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const Tb = Mb.j.Vector4[0],
            Eb = Mb.j.Vector4[1];
          for (let Yb = Ub; Yb < Ub + Ab; Yb += 4) Mb.o.FromArrayToRef(bb, Yb, Tb), Mb.o.TransformNormalToRef(Tb, ab, Eb), bb[Yb] = Eb.x, bb[Yb + 1] = Eb.y, bb[Yb + 2] = Eb.z, bb[Yb + 3] = Eb.w
        }
        static _FlipFaces(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
          for (let Ab = ab; Ab < ab + Ub; Ab += 3) {
            const ab = bb[Ab + 1];
            bb[Ab + 1] = bb[Ab + 2], bb[Ab + 2] = ab
          }
        }
        transform(ab) {
          const Ub = ab.determinant() < 0;
          return this.positions && bb._TransformVector3Coordinates(this.positions, ab), this.normals && bb._TransformVector3Normals(this.normals, ab), this.tangents && bb._TransformVector4Normals(this.tangents, ab), Ub && this.indices && bb._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const ab = [];
          for (const Ub of this.materialInfos) {
            const Ab = new bb;
            if (this.positions && (Ab.positions = this.positions.slice(3 * Ub.verticesStart, 3 * (Ub.verticesCount + Ub.verticesStart))), this.normals && (Ab.normals = this.normals.slice(3 * Ub.verticesStart, 3 * (Ub.verticesCount + Ub.verticesStart))), this.tangents && (Ab.tangents = this.tangents.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.colors && (Ab.colors = this.colors.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.uvs && (Ab.uvs = this.uvs.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.uvs2 && (Ab.uvs2 = this.uvs2.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.uvs3 && (Ab.uvs3 = this.uvs3.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.uvs4 && (Ab.uvs4 = this.uvs4.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.uvs5 && (Ab.uvs5 = this.uvs5.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.uvs6 && (Ab.uvs6 = this.uvs6.slice(2 * Ub.verticesStart, 2 * (Ub.verticesCount + Ub.verticesStart))), this.matricesIndices && (Ab.matricesIndices = this.matricesIndices.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.matricesIndicesExtra && (Ab.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.matricesWeights && (Ab.matricesWeights = this.matricesWeights.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.matricesWeightsExtra && (Ab.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Ub.verticesStart, 4 * (Ub.verticesCount + Ub.verticesStart))), this.indices) {
              Ab.indices = [];
              for (let bb = Ub.indexStart; bb < Ub.indexStart + Ub.indexCount; bb++) Ab.indices.push(this.indices[bb] - Ub.verticesStart)
            }
            const Mb = new Xb;
            Mb.indexStart = 0, Mb.indexCount = Ab.indices ? Ab.indices.length : 0, Mb.materialIndex = Ub.materialIndex, Mb.verticesStart = 0, Mb.verticesCount = (Ab.positions ? Ab.positions.length : 0) / 3, Ab.materialInfos = [Mb], ab.push(Ab)
          }
          return ab
        }
        merge(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Tb = Array.isArray(bb) ? bb.map((bb => ({
            vertexData: bb
          }))) : [{
            vertexData: bb
          }];
          return (0, vb.k)(this._mergeCoroutine(void 0, Tb, ab, !1, Ub, Ab, Mb))
        }* _mergeCoroutine(ab, Ub) {
          let Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Mb = arguments.length > 3 ? arguments[3] : void 0,
            Eb = arguments.length > 4 ? arguments[4] : void 0,
            Yb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Bb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let eb = Ub.map((bb => bb.vertexData)),
            vb = this;
          if (Bb)
            for (const bb of eb) bb && (bb._validate(), !this.normals && bb.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && bb.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && bb.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && bb.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && bb.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && bb.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && bb.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && bb.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && bb.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && bb.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && bb.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && bb.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && bb.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const bb of eb)
            if (bb)
              if (Bb) this.normals && !bb.normals && (bb.normals = new Float32Array(bb.positions.length)), this.tangents && !bb.tangents && (bb.tangents = new Float32Array(bb.positions.length / 3 * 4)), this.uvs && !bb.uvs && (bb.uvs = new Float32Array(bb.positions.length / 3 * 2)), this.uvs2 && !bb.uvs2 && (bb.uvs2 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs3 && !bb.uvs3 && (bb.uvs3 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs4 && !bb.uvs4 && (bb.uvs4 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs5 && !bb.uvs5 && (bb.uvs5 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs6 && !bb.uvs6 && (bb.uvs6 = new Float32Array(bb.positions.length / 3 * 2)), this.colors && !bb.colors && (bb.colors = new Float32Array(bb.positions.length / 3 * 4), bb.colors.fill(1)), this.matricesIndices && !bb.matricesIndices && (bb.matricesIndices = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeights && !bb.matricesWeights && (bb.matricesWeights = new Float32Array(bb.positions.length / 3 * 4)), this.matricesIndicesExtra && !bb.matricesIndicesExtra && (bb.matricesIndicesExtra = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeightsExtra && !bb.matricesWeightsExtra && (bb.matricesWeightsExtra = new Float32Array(bb.positions.length / 3 * 4));
              else if (bb._validate(), !this.normals !== !bb.normals || !this.tangents !== !bb.tangents || !this.uvs !== !bb.uvs || !this.uvs2 !== !bb.uvs2 || !this.uvs3 !== !bb.uvs3 || !this.uvs4 !== !bb.uvs4 || !this.uvs5 !== !bb.uvs5 || !this.uvs6 !== !bb.uvs6 || !this.colors !== !bb.colors || !this.matricesIndices !== !bb.matricesIndices || !this.matricesWeights !== !bb.matricesWeights || !this.matricesIndicesExtra !== !bb.matricesIndicesExtra || !this.matricesWeightsExtra !== !bb.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Yb) {
            let bb, Ab = 0,
              Mb = 0;
            const Tb = [];
            let Eb = null;
            const Yb = [];
            for (const Ub of this.splitBasedOnMaterialID()) Yb.push({
              vertexData: Ub,
              transform: ab
            });
            for (const ab of Ub)
              if (ab.vertexData)
                for (const bb of ab.vertexData.splitBasedOnMaterialID()) Yb.push({
                  vertexData: bb,
                  transform: ab.transform
                });
            Yb.sort(((bb, ab) => {
              const Ub = bb.vertexData.materialInfos ? bb.vertexData.materialInfos[0].materialIndex : 0,
                Ab = ab.vertexData.materialInfos ? ab.vertexData.materialInfos[0].materialIndex : 0;
              return Ub > Ab ? 1 : Ub === Ab ? 0 : -1
            }));
            for (const ab of Yb) {
              const Ub = ab.vertexData;
              if (bb = Ub.materialInfos ? Ub.materialInfos[0].materialIndex : 0, Eb && Eb.materialIndex === bb) Eb.indexCount += Ub.indices.length, Eb.verticesCount += Ub.positions.length / 3;
              else {
                const ab = new Xb;
                ab.materialIndex = bb, ab.indexStart = Ab, ab.indexCount = Ub.indices.length, ab.verticesStart = Mb, ab.verticesCount = Ub.positions.length / 3, Tb.push(ab), Eb = ab
              }
              Ab += Ub.indices.length, Mb += Ub.positions.length / 3
            }
            const Bb = Yb.splice(0, 1)[0];
            vb = Bb.vertexData, ab = Bb.transform, eb = Yb.map((bb => bb.vertexData)), Ub = Yb, this.materialInfos = Tb
          }
          const Lb = eb.reduce(((bb, ab) => bb + (ab.indices?.length ?? 0)), vb.indices?.length ?? 0);
          let Pb = Eb || eb.some((bb => bb.indices === vb.indices)) ? vb.indices?.slice() : vb.indices;
          if (Lb > 0) {
            let Tb = Pb?.length ?? 0;
            if (Pb || (Pb = new Array(Lb)), Pb.length !== Lb) {
              if (Array.isArray(Pb)) Pb.length = Lb;
              else {
                const bb = Ab || Pb instanceof Uint32Array ? new Uint32Array(Lb) : new Uint16Array(Lb);
                bb.set(Pb), Pb = bb
              }
              ab && ab.determinant() < 0 && bb._FlipFaces(Pb, 0, Tb)
            }
            let Eb = vb.positions ? vb.positions.length / 3 : 0;
            for (const {
                vertexData: ab,
                transform: Ab
              }
              of Ub)
              if (ab.indices) {
                for (let bb = 0; bb < ab.indices.length; bb++) Pb[Tb + bb] = ab.indices[bb] + Eb;
                Ab && Ab.determinant() < 0 && bb._FlipFaces(Pb, Tb, ab.indices.length), Eb += ab.positions.length / 3, Tb += ab.indices.length, Mb && (yield)
              }
          }
          return this.indices = Pb, this.positions = bb._MergeElement(Tb.m.PositionKind, vb.positions, ab, Ub.map((bb => [bb.vertexData.positions, bb.transform]))), Mb && (yield), vb.normals && (this.normals = bb._MergeElement(Tb.m.NormalKind, vb.normals, ab, Ub.map((bb => [bb.vertexData.normals, bb.transform]))), Mb && (yield)), vb.tangents && (this.tangents = bb._MergeElement(Tb.m.TangentKind, vb.tangents, ab, Ub.map((bb => [bb.vertexData.tangents, bb.transform]))), Mb && (yield)), vb.uvs && (this.uvs = bb._MergeElement(Tb.m.UVKind, vb.uvs, ab, Ub.map((bb => [bb.vertexData.uvs, bb.transform]))), Mb && (yield)), vb.uvs2 && (this.uvs2 = bb._MergeElement(Tb.m.UV2Kind, vb.uvs2, ab, Ub.map((bb => [bb.vertexData.uvs2, bb.transform]))), Mb && (yield)), vb.uvs3 && (this.uvs3 = bb._MergeElement(Tb.m.UV3Kind, vb.uvs3, ab, Ub.map((bb => [bb.vertexData.uvs3, bb.transform]))), Mb && (yield)), vb.uvs4 && (this.uvs4 = bb._MergeElement(Tb.m.UV4Kind, vb.uvs4, ab, Ub.map((bb => [bb.vertexData.uvs4, bb.transform]))), Mb && (yield)), vb.uvs5 && (this.uvs5 = bb._MergeElement(Tb.m.UV5Kind, vb.uvs5, ab, Ub.map((bb => [bb.vertexData.uvs5, bb.transform]))), Mb && (yield)), vb.uvs6 && (this.uvs6 = bb._MergeElement(Tb.m.UV6Kind, vb.uvs6, ab, Ub.map((bb => [bb.vertexData.uvs6, bb.transform]))), Mb && (yield)), vb.colors && (this.colors = bb._MergeElement(Tb.m.ColorKind, vb.colors, ab, Ub.map((bb => [bb.vertexData.colors, bb.transform]))), (void 0 !== vb.hasVertexAlpha || Ub.some((bb => void 0 !== bb.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = vb.hasVertexAlpha || Ub.some((bb => bb.vertexData.hasVertexAlpha))), Mb && (yield)), vb.matricesIndices && (this.matricesIndices = bb._MergeElement(Tb.m.MatricesIndicesKind, vb.matricesIndices, ab, Ub.map((bb => [bb.vertexData.matricesIndices, bb.transform]))), Mb && (yield)), vb.matricesWeights && (this.matricesWeights = bb._MergeElement(Tb.m.MatricesWeightsKind, vb.matricesWeights, ab, Ub.map((bb => [bb.vertexData.matricesWeights, bb.transform]))), Mb && (yield)), vb.matricesIndicesExtra && (this.matricesIndicesExtra = bb._MergeElement(Tb.m.MatricesIndicesExtraKind, vb.matricesIndicesExtra, ab, Ub.map((bb => [bb.vertexData.matricesIndicesExtra, bb.transform]))), Mb && (yield)), vb.matricesWeightsExtra && (this.matricesWeightsExtra = bb._MergeElement(Tb.m.MatricesWeightsExtraKind, vb.matricesWeightsExtra, ab, Ub.map((bb => [bb.vertexData.matricesWeightsExtra, bb.transform])))), this
        }
        static _MergeElement(ab, Ub, Ab, Mb) {
          const Eb = Mb.filter((bb => null !== bb[0] && void 0 !== bb[0]));
          if (!Ub && 0 == Eb.length) return Ub;
          if (!Ub) return this._MergeElement(ab, Eb[0][0], Eb[0][1], Eb.slice(1));
          const Yb = Eb.reduce(((bb, ab) => bb + ab[0].length), Ub.length),
            Bb = ab === Tb.m.PositionKind ? bb._TransformVector3Coordinates : ab === Tb.m.NormalKind ? bb._TransformVector3Normals : ab === Tb.m.TangentKind ? bb._TransformVector4Normals : () => {};
          if (Ub instanceof Float32Array) {
            const bb = new Float32Array(Yb);
            bb.set(Ub), Ab && Bb(bb, Ab, 0, Ub.length);
            let ab = Ub.length;
            for (const [Ub, Ab] of Eb) bb.set(Ub, ab), Ab && Bb(bb, Ab, ab, Ub.length), ab += Ub.length;
            return bb
          } {
            const bb = new Array(Yb);
            for (let Ab = 0; Ab < Ub.length; Ab++) bb[Ab] = Ub[Ab];
            Ab && Bb(bb, Ab, 0, Ub.length);
            let ab = Ub.length;
            for (const [Ub, Ab] of Eb) {
              for (let Ab = 0; Ab < Ub.length; Ab++) bb[ab + Ab] = Ub[Ab];
              Ab && Bb(bb, Ab, ab, Ub.length), ab += Ub.length
            }
            return bb
          }
        }
        _validate() {
          if (!this.positions) throw new Lb.i("Positions are required", Lb.h.MeshInvalidPositionsError);
          const bb = (bb, ab) => {
              const Ub = (0, Tb.j)(bb);
              if (ab.length % Ub !== 0) throw new Error("The " + bb + "s array count must be a multiple of " + Ub);
              return ab.length / Ub
            },
            ab = bb(Tb.m.PositionKind, this.positions),
            Ub = (Ub, Ab) => {
              const Mb = bb(Ub, Ab);
              if (Mb !== ab) throw new Error("The " + Ub + "s element count (" + Mb + ") does not match the positions count (" + ab + ")")
            };
          this.normals && Ub(Tb.m.NormalKind, this.normals), this.tangents && Ub(Tb.m.TangentKind, this.tangents), this.uvs && Ub(Tb.m.UVKind, this.uvs), this.uvs2 && Ub(Tb.m.UV2Kind, this.uvs2), this.uvs3 && Ub(Tb.m.UV3Kind, this.uvs3), this.uvs4 && Ub(Tb.m.UV4Kind, this.uvs4), this.uvs5 && Ub(Tb.m.UV5Kind, this.uvs5), this.uvs6 && Ub(Tb.m.UV6Kind, this.uvs6), this.colors && Ub(Tb.m.ColorKind, this.colors), this.matricesIndices && Ub(Tb.m.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Ub(Tb.m.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Ub(Tb.m.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Ub(Tb.m.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const ab = this.serialize();
          return bb.Parse(ab)
        }
        serialize() {
          const bb = {};
          if (this.positions && (bb.positions = Array.from(this.positions)), this.normals && (bb.normals = Array.from(this.normals)), this.tangents && (bb.tangents = Array.from(this.tangents)), this.uvs && (bb.uvs = Array.from(this.uvs)), this.uvs2 && (bb.uvs2 = Array.from(this.uvs2)), this.uvs3 && (bb.uvs3 = Array.from(this.uvs3)), this.uvs4 && (bb.uvs4 = Array.from(this.uvs4)), this.uvs5 && (bb.uvs5 = Array.from(this.uvs5)), this.uvs6 && (bb.uvs6 = Array.from(this.uvs6)), this.colors && (bb.colors = Array.from(this.colors), bb.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (bb.matricesIndices = Array.from(this.matricesIndices), bb.matricesIndicesExpanded = !0), this.matricesWeights && (bb.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (bb.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), bb.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (bb.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), bb.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            bb.materialInfos = [];
            for (const ab of this.materialInfos) {
              const Ub = {
                indexStart: ab.indexStart,
                indexCount: ab.indexCount,
                materialIndex: ab.materialIndex,
                verticesStart: ab.verticesStart,
                verticesCount: ab.verticesCount
              };
              bb.materialInfos.push(Ub)
            }
          }
          return bb
        }
        static ExtractFromMesh(ab, Ub, Ab) {
          return bb._ExtractFrom(ab, Ub, Ab)
        }
        static ExtractFromGeometry(ab, Ub, Ab) {
          return bb._ExtractFrom(ab, Ub, Ab)
        }
        static _ExtractFrom(ab, Ub, Ab) {
          const Mb = new bb;
          if (ab.isVerticesDataPresent(Tb.m.PositionKind) && (Mb.positions = ab.getVerticesData(Tb.m.PositionKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.NormalKind) && (Mb.normals = ab.getVerticesData(Tb.m.NormalKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.TangentKind) && (Mb.tangents = ab.getVerticesData(Tb.m.TangentKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UVKind) && (Mb.uvs = ab.getVerticesData(Tb.m.UVKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UV2Kind) && (Mb.uvs2 = ab.getVerticesData(Tb.m.UV2Kind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UV3Kind) && (Mb.uvs3 = ab.getVerticesData(Tb.m.UV3Kind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UV4Kind) && (Mb.uvs4 = ab.getVerticesData(Tb.m.UV4Kind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UV5Kind) && (Mb.uvs5 = ab.getVerticesData(Tb.m.UV5Kind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.UV6Kind) && (Mb.uvs6 = ab.getVerticesData(Tb.m.UV6Kind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.ColorKind)) {
            const bb = ab.geometry || ab,
              Eb = bb.getVertexBuffer(Tb.m.ColorKind),
              Yb = bb.getVerticesData(Tb.m.ColorKind, Ub, Ab);
            if (3 === Eb.getSize()) {
              const bb = new Float32Array(4 * Yb.length / 3);
              for (let ab = 0, Ub = 0; ab < Yb.length; ab += 3, Ub += 4) bb[Ub] = Yb[ab], bb[Ub + 1] = Yb[ab + 1], bb[Ub + 2] = Yb[ab + 2], bb[Ub + 3] = 1;
              Mb.colors = bb
            } else {
              if (4 !== Eb.getSize()) throw new Error(`Unexpected number of color components: ${Eb.getSize()}`);
              Mb.colors = Yb
            }
          }
          return ab.isVerticesDataPresent(Tb.m.MatricesIndicesKind) && (Mb.matricesIndices = ab.getVerticesData(Tb.m.MatricesIndicesKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.MatricesWeightsKind) && (Mb.matricesWeights = ab.getVerticesData(Tb.m.MatricesWeightsKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.MatricesIndicesExtraKind) && (Mb.matricesIndicesExtra = ab.getVerticesData(Tb.m.MatricesIndicesExtraKind, Ub, Ab)), ab.isVerticesDataPresent(Tb.m.MatricesWeightsExtraKind) && (Mb.matricesWeightsExtra = ab.getVerticesData(Tb.m.MatricesWeightsExtraKind, Ub, Ab)), Mb.indices = ab.uUb(Ub, Ab), Mb
        }
        static CreateRibbon(bb) {
          throw (0, Eb.l)("ribbonBuilder")
        }
        static CreateBox(bb) {
          throw (0, Eb.l)("boxBuilder")
        }
        static CreateTiledBox(bb) {
          throw (0, Eb.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(bb) {
          throw (0, Eb.l)("tiledPlaneBuilder")
        }
        static CreateSphere(bb) {
          throw (0, Eb.l)("sphereBuilder")
        }
        static CreateCylinder(bb) {
          throw (0, Eb.l)("cylinderBuilder")
        }
        static CreateTorus(bb) {
          throw (0, Eb.l)("torusBuilder")
        }
        static CreateLineSystem(bb) {
          throw (0, Eb.l)("linesBuilder")
        }
        static CreateDashedLines(bb) {
          throw (0, Eb.l)("linesBuilder")
        }
        static CreateGround(bb) {
          throw (0, Eb.l)("groundBuilder")
        }
        static CreateTiledGround(bb) {
          throw (0, Eb.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(bb) {
          throw (0, Eb.l)("groundBuilder")
        }
        static CreatePlane(bb) {
          throw (0, Eb.l)("planeBuilder")
        }
        static CreateDisc(bb) {
          throw (0, Eb.l)("discBuilder")
        }
        static CreatePolygon(bb, ab, Ub, Ab, Mb, Tb, Yb) {
          throw (0, Eb.l)("polygonBuilder")
        }
        static CreateIcoSphere(bb) {
          throw (0, Eb.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(bb) {
          throw (0, Eb.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Mb.m.Up();
          throw (0, Eb.l)("capsuleBuilder")
        }
        static CreateTorusKnot(bb) {
          throw (0, Eb.l)("torusKnotBuilder")
        }
        static ComputeNormals(bb, ab, Ub, Ab) {
          let Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, pb = !1,
            Nb = !1,
            Wb = !1,
            Hb = !1,
            Ib = 1,
            db = 0,
            Fb = null;
          Ab && (pb = !!Ab.facetNormals, Nb = !!Ab.facetPositions, Wb = !!Ab.facetPartitioning, Ib = !0 === Ab.useRightHandedSystem ? -1 : 1, db = Ab.ratio || 0, Hb = !!Ab.depthSort, Fb = Ab.distanceTo, Hb && void 0 === Fb && (Fb = Mb.m.Zero()));
          let hb = 0,
            Gb = 0,
            Qb = 0,
            qb = 0;
          for (Wb && Ab && Ab.bbSize && (hb = Ab.subDiv.X * db / Ab.bbSize.x, Gb = Ab.subDiv.Y * db / Ab.bbSize.y, Qb = Ab.subDiv.Z * db / Ab.bbSize.z, qb = Ab.subDiv.max * Ab.subDiv.max, Ab.facetPartitioning.length = 0), Tb = 0; Tb < bb.length; Tb++) Ub[Tb] = 0;
          const ub = ab.length / 3 | 0;
          for (Tb = 0; Tb < ub; Tb++) {
            if (kb = 3 * ab[3 * Tb], yb = kb + 1, Zb = kb + 2, Db = 3 * ab[3 * Tb + 1], zb = Db + 1, xb = Db + 2, ib = 3 * ab[3 * Tb + 2], fb = ib + 1, mb = ib + 2, Eb = bb[kb] - bb[Db], Yb = bb[yb] - bb[zb], Bb = bb[Zb] - bb[xb], eb = bb[ib] - bb[Db], vb = bb[fb] - bb[zb], Lb = bb[mb] - bb[xb], Pb = Ib * (Yb * Lb - Bb * vb), Xb = Ib * (Bb * eb - Eb * Lb), jb = Ib * (Eb * vb - Yb * eb), Rb = Math.sqrt(Pb * Pb + Xb * Xb + jb * jb), Rb = 0 === Rb ? 1 : Rb, Pb /= Rb, Xb /= Rb, jb /= Rb, pb && Ab && (Ab.facetNormals[Tb].x = Pb, Ab.facetNormals[Tb].y = Xb, Ab.facetNormals[Tb].z = jb), Nb && Ab && (Ab.facetPositions[Tb].x = (bb[kb] + bb[Db] + bb[ib]) / 3, Ab.facetPositions[Tb].y = (bb[yb] + bb[zb] + bb[fb]) / 3, Ab.facetPositions[Tb].z = (bb[Zb] + bb[xb] + bb[mb]) / 3), Wb && Ab) {
              const ab = Math.floor((Ab.facetPositions[Tb].x - Ab.bInfo.minimum.x * db) * hb),
                Ub = Math.floor((Ab.facetPositions[Tb].y - Ab.bInfo.minimum.y * db) * Gb),
                Mb = Math.floor((Ab.facetPositions[Tb].z - Ab.bInfo.minimum.z * db) * Qb),
                Eb = Math.floor((bb[kb] - Ab.bInfo.minimum.x * db) * hb),
                Yb = Math.floor((bb[yb] - Ab.bInfo.minimum.y * db) * Gb),
                Bb = Math.floor((bb[Zb] - Ab.bInfo.minimum.z * db) * Qb),
                eb = Math.floor((bb[Db] - Ab.bInfo.minimum.x * db) * hb),
                vb = Math.floor((bb[zb] - Ab.bInfo.minimum.y * db) * Gb),
                Lb = Math.floor((bb[xb] - Ab.bInfo.minimum.z * db) * Qb),
                Pb = Math.floor((bb[ib] - Ab.bInfo.minimum.x * db) * hb),
                Xb = Math.floor((bb[fb] - Ab.bInfo.minimum.y * db) * Gb),
                jb = Math.floor((bb[mb] - Ab.bInfo.minimum.z * db) * Qb),
                Rb = Eb + Ab.subDiv.max * Yb + qb * Bb,
                pb = eb + Ab.subDiv.max * vb + qb * Lb,
                Nb = Pb + Ab.subDiv.max * Xb + qb * jb,
                Wb = ab + Ab.subDiv.max * Ub + qb * Mb;
              Ab.facetPartitioning[Wb] = Ab.facetPartitioning[Wb] ? Ab.facetPartitioning[Wb] : [], Ab.facetPartitioning[Rb] = Ab.facetPartitioning[Rb] ? Ab.facetPartitioning[Rb] : [], Ab.facetPartitioning[pb] = Ab.facetPartitioning[pb] ? Ab.facetPartitioning[pb] : [], Ab.facetPartitioning[Nb] = Ab.facetPartitioning[Nb] ? Ab.facetPartitioning[Nb] : [], Ab.facetPartitioning[Rb].push(Tb), pb != Rb && Ab.facetPartitioning[pb].push(Tb), Nb != pb && Nb != Rb && Ab.facetPartitioning[Nb].push(Tb), Wb != Rb && Wb != pb && Wb != Nb && Ab.facetPartitioning[Wb].push(Tb)
            }
            if (Hb && Ab && Ab.facetPositions) {
              const bb = Ab.depthSortedFacets[Tb];
              bb.ind = 3 * Tb, bb.sqDistance = Mb.m.DistanceSquared(Ab.facetPositions[Tb], Fb)
            }
            Ub[kb] += Pb, Ub[yb] += Xb, Ub[Zb] += jb, Ub[Db] += Pb, Ub[zb] += Xb, Ub[xb] += jb, Ub[ib] += Pb, Ub[fb] += Xb, Ub[mb] += jb
          }
          for (Tb = 0; Tb < Ub.length / 3; Tb++) Pb = Ub[3 * Tb], Xb = Ub[3 * Tb + 1], jb = Ub[3 * Tb + 2], Rb = Math.sqrt(Pb * Pb + Xb * Xb + jb * jb), Rb = 0 === Rb ? 1 : Rb, Pb /= Rb, Xb /= Rb, jb /= Rb, Ub[3 * Tb] = Pb, Ub[3 * Tb + 1] = Xb, Ub[3 * Tb + 2] = jb
        }
        static _ComputeSides(ab, Ub, Ab, Tb, Eb, Yb, Bb) {
          const eb = Ab.length,
            vb = Tb.length;
          let Lb, Pb;
          switch (ab = ab || bb.DEFAULTSIDE) {
            case bb.FRONTSIDE:
              break;
            case bb.BACKSIDE:
              for (Lb = 0; Lb < eb; Lb += 3) {
                const bb = Ab[Lb];
                Ab[Lb] = Ab[Lb + 2], Ab[Lb + 2] = bb
              }
              for (Pb = 0; Pb < vb; Pb++) Tb[Pb] = -Tb[Pb];
              break;
            case bb.DOUBLESIDE: {
              const bb = Ub.length,
                ab = bb / 3;
              for (let Ab = 0; Ab < bb; Ab++) Ub[bb + Ab] = Ub[Ab];
              for (Lb = 0; Lb < eb; Lb += 3) Ab[Lb + eb] = Ab[Lb + 2] + ab, Ab[Lb + 1 + eb] = Ab[Lb + 1] + ab, Ab[Lb + 2 + eb] = Ab[Lb] + ab;
              for (Pb = 0; Pb < vb; Pb++) Tb[vb + Pb] = -Tb[Pb];
              const Xb = Eb.length;
              let jb;
              for (jb = 0; jb < Xb; jb++) Eb[jb + Xb] = Eb[jb];
              for (Yb = Yb || new Mb.o(0, 0, 1, 1), Bb = Bb || new Mb.o(0, 0, 1, 1), jb = 0, Lb = 0; Lb < Xb / 2; Lb++) Eb[jb] = Yb.x + (Yb.z - Yb.x) * Eb[jb], Eb[jb + 1] = Yb.y + (Yb.w - Yb.y) * Eb[jb + 1], Eb[jb + Xb] = Bb.x + (Bb.z - Bb.x) * Eb[jb + Xb], Eb[jb + Xb + 1] = Bb.y + (Bb.w - Bb.y) * Eb[jb + Xb + 1], jb += 2;
              break
            }
          }
        }
        static Parse(ab) {
          const Ub = new bb,
            Ab = ab.positions;
          Ab && Ub.set(Ab, Tb.m.PositionKind);
          const Mb = ab.normals;
          Mb && Ub.set(Mb, Tb.m.NormalKind);
          const Eb = ab.tangents;
          Eb && Ub.set(Eb, Tb.m.TangentKind);
          const Bb = ab.uvs;
          Bb && Ub.set(Bb, Tb.m.UVKind);
          const eb = ab.uvs2;
          eb && Ub.set(eb, Tb.m.UV2Kind);
          const vb = ab.uvs3;
          vb && Ub.set(vb, Tb.m.UV3Kind);
          const Lb = ab.uvs4;
          Lb && Ub.set(Lb, Tb.m.UV4Kind);
          const Pb = ab.uvs5;
          Pb && Ub.set(Pb, Tb.m.UV5Kind);
          const jb = ab.uvs6;
          jb && Ub.set(jb, Tb.m.UV6Kind);
          const Rb = ab.colors;
          Rb && (Ub.set(Yb.g.CheckColors4(Rb, Ab.length / 3), Tb.m.ColorKind), void 0 !== ab.hasVertexAlpha && (Ub.hasVertexAlpha = ab.hasVertexAlpha));
          const kb = ab.matricesIndices;
          kb && Ub.set(kb, Tb.m.MatricesIndicesKind);
          const yb = ab.matricesWeights;
          yb && Ub.set(yb, Tb.m.MatricesWeightsKind);
          const Zb = ab.indices;
          Zb && (Ub.indices = Zb);
          const Db = ab.materialInfos;
          if (Db) {
            Ub.materialInfos = [];
            for (const bb of Db) {
              const ab = new Xb;
              ab.indexCount = bb.indexCount, ab.indexStart = bb.indexStart, ab.verticesCount = bb.verticesCount, ab.verticesStart = bb.verticesStart, ab.materialIndex = bb.materialIndex, Ub.materialInfos.push(ab)
            }
          }
          return Ub
        }
        static ImportVertexData(ab, Ub) {
          const Ab = bb.Parse(ab);
          Ub.setAllVerticesData(Ab, ab.updatable)
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [eb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ub = [eb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], jb = [eb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Rb = [eb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ab.h)(bb, null, ab, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Coordinates" in bb,
            get: bb => bb._TransformVector3Coordinates
          },
          metadata: Mb
        }, null, kb), (0, Ab.h)(bb, null, Ub, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Normals" in bb,
            get: bb => bb._TransformVector3Normals
          },
          metadata: Mb
        }, null, kb), (0, Ab.h)(bb, null, jb, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector4Normals" in bb,
            get: bb => bb._TransformVector4Normals
          },
          metadata: Mb
        }, null, kb), (0, Ab.h)(bb, null, Rb, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: bb => "_FlipFaces" in bb,
            get: bb => bb._FlipFaces
          },
          metadata: Mb
        }, null, kb), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        })
      })(), bb.FRONTSIDE = ((0, Ab.k)(bb, kb), 0), bb.BACKSIDE = 1, bb.DOUBLESIDE = 2, bb.DEFAULTSIDE = 0, bb._UniqueIdGenerator = 0, bb
    })()
  },
  39611: (bb, ab, Ub) => {
    var Ab = Ub(36401),
      Mb = Ub(37989),
      Tb = Ub(39413),
      Eb = Ub(39522),
      Yb = Ub(39244);
    const Bb = "bakedVertexAnimationSettingsInstanced";

    function eb(bb) {
      const ab = bb.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return ab instanceof Float32Array || ab instanceof Uint16Array
    }

    function vb(bb, ab, Ub, Ab) {
      Ub.B3(Number.POSITIVE_INFINITY), Ab.B3(Number.NEGATIVE_INFINITY);
      for (let Mb = 0; Mb < 3 * ab; Mb += 3) {
        const ab = bb[Mb],
          Tb = bb[Mb + 1],
          Eb = bb[Mb + 2];
        ab < Ub.x && (Ub.x = ab), Tb < Ub.y && (Ub.y = Tb), Eb < Ub.z && (Ub.z = Eb), ab > Ab.x && (Ab.x = ab), Tb > Ab.y && (Ab.y = Tb), Eb > Ab.z && (Ab.z = Eb)
      }
    }

    function Lb(bb, ab, Ub) {
      Ub && (bb.x -= bb.x * Ub.x + Ub.y, bb.y -= bb.y * Ub.x + Ub.y, bb.z -= bb.z * Ub.x + Ub.y, ab.x += ab.x * Ub.x + Ub.y, ab.y += ab.y * Ub.x + Ub.y, ab.z += ab.z * Ub.x + Ub.y)
    }

    function Pb(bb, ab, Ub, Mb, Tb) {
      const Eb = Ab.j.Pj[7],
        Yb = Ab.j.Pj[8];
      for (let Bb = 0; Bb < 2; ++Bb)
        for (let eb = 0; eb < 2; ++eb)
          for (let vb = 0; vb < 2; ++vb) Eb.set(Bb ? ab.x : bb.x, eb ? ab.y : bb.y, vb ? ab.z : bb.z), Ab.m.TransformCoordinatesToRef(Eb, Ub, Yb), Mb.minimizeInPlace(Yb), Tb.maximizeInPlace(Yb)
    }

    function Xb(bb, ab, Ub, Mb, Tb) {
      const Eb = Ab.j.Pj[7];
      for (let Yb = 0; Yb < 3 * ab; Yb += 3) Ab.m.TransformCoordinatesFromFloatsToRef(bb[Yb], bb[Yb + 1], bb[Yb + 2], Ub, Eb), Mb.minimizeInPlace(Eb), Tb.maximizeInPlace(Eb)
    }
    let jb = !1;
    jb || (jb = !0, Eb.d.prototype.thinInstanceAdd = function(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.oN().vj().getCaps().instancedArrays) return Mb.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(bb) ? bb.length : 1);
      const Ub = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(bb))
        for (let Ab = 0; Ab < bb.length; ++Ab) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb[Ab], Ab === bb.length - 1 && ab);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb, ab);
      return Ub
    }, Eb.d.prototype.thinInstanceAddSelf = function() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Ab.b.IdentityReadOnly, bb)
    }, Eb.d.prototype.thinInstanceRegisterAttribute = function(bb, ab) {
      bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), this.removeVerticesData(bb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[bb] = ab, this._userThinInstanceBuffersStorage.sizes[bb] = ab * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[bb] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[bb]), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Yb.m(this.vj(), this._userThinInstanceBuffersStorage.data[bb], bb, !0, !1, ab, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb])
    }, Eb.d.prototype.thinInstanceSetMatrixAt = function(bb, ab) {
      let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || bb >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Ab = this._thinInstanceDataStorage.matrixData;
      return ab.copyToArray(Ab, 16 * bb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[bb] = ab), Ub && (this.t5("matrix"), this.jj || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Eb.d.prototype.thinInstanceSetAttributeAt = function(bb, ab, Ub) {
      let Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[bb] || ab >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(bb, 0), this._userThinInstanceBuffersStorage.data[bb].set(Ub, ab * this._userThinInstanceBuffersStorage.strides[bb]), Ab && this.t5(bb), !0)
    }, Object.defineProperty(Eb.d.prototype, "W8", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(bb) {
        const ab = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        bb <= (ab ? ab.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = bb)
      },
      enumerable: !0,
      configurable: !0
    }), Eb.d.prototype._thinInstanceCreateMatrixBuffer = function(bb, ab) {
      let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ab = new Yb.c(this.vj(), ab, !Ub, 16, !1, !0);
      for (let Mb = 0; Mb < 4; Mb++) this.setVerticesBuffer(Ab.createVertexBuffer(bb + Mb, 4 * Mb, 4));
      return Ab
    }, Eb.d.prototype.o4 = function(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Ub = Ub || 16, "matrix" === bb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ab ? ab.length : 32 * Ub, this._thinInstanceDataStorage.matrixData = ab, this._thinInstanceDataStorage.worldMatrices = null, null !== ab ? (this._thinInstanceDataStorage.instancesCount = ab.length / Ub, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ab, Ab), this.jj || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.jj || this.refreshBoundingInfo());
      else if ("previousMatrix" === bb) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ab, null !== ab && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ab, Ab));
      else if ("splatIndex" === bb && ab) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ab.length / Ub, this._userThinInstanceBuffersStorage.data[bb] = ab, this._userThinInstanceBuffersStorage.strides[bb] = Ub, this._userThinInstanceBuffersStorage.sizes[bb] = ab.length;
        const Ab = new Yb.c(this.vj(), ab, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Ab;
        for (let ab = 0; ab < 4; ab++) this.setVerticesBuffer(Ab.createVertexBuffer(bb + ab, 4 * ab, 4))
      } else bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), null === ab ? this._userThinInstanceBuffersStorage?.data[bb] && (this.removeVerticesData(bb), delete this._userThinInstanceBuffersStorage.data[bb], delete this._userThinInstanceBuffersStorage.strides[bb], delete this._userThinInstanceBuffersStorage.sizes[bb], delete this._userThinInstanceBuffersStorage.vertexBuffers[bb]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[bb] = ab, this._userThinInstanceBuffersStorage.strides[bb] = Ub, this._userThinInstanceBuffersStorage.sizes[bb] = ab.length, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Yb.m(this.vj(), ab, bb, !Ab, !1, Ub, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Eb.d.prototype.t5 = function(bb) {
      "matrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === bb ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0, this._thinInstanceDataStorage.instancesCount) : (bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[bb].isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0)))
    }, Eb.d.prototype.thinInstancePartialBufferUpdate = function(bb, ab, Ub) {
      if ("matrix" === bb) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ab ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Ub * Float32Array.BYTES_PER_ELEMENT, 16 * ab), 16 * Ub) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(ab, Ub));
      else if (bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb]) {
        const Ab = this._userThinInstanceBuffersStorage.vertexBuffers[bb];
        if ("number" === typeof ab) {
          const Ab = new Float32Array(this._userThinInstanceBuffersStorage.data[bb].buffer, this._userThinInstanceBuffersStorage.data[bb].byteOffset + Ub * this._userThinInstanceBuffersStorage.strides[bb] * Float32Array.BYTES_PER_ELEMENT, ab * this._userThinInstanceBuffersStorage.strides[bb]);
          this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(Ab, Ub * this._userThinInstanceBuffersStorage.strides[bb])
        } else Ab.updateDirectly(ab, Ub)
      }
    }, Eb.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const bb = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let ab = 0; ab < this._thinInstanceDataStorage.instancesCount; ++ab) this._thinInstanceDataStorage.worldMatrices[ab] = Ab.b.FromArray(bb, 16 * ab)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Eb.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Eb = this._thinInstanceDataStorage.boundingVectors;
      if (bb || !this.rawBoundingInfo) {
        if (Eb.length = 0, Mb && function(bb, ab, Ub) {
            const Mb = bb._userThinInstanceBuffersStorage,
              Eb = Mb?.data[Bb],
              jb = Mb?.strides[Bb];
            if (!Eb || !jb || jb < 4 || !eb(bb)) return !1;
            const Rb = bb._thinInstanceDataStorage.matrixData;
            if (!Rb) return !1;
            const kb = {},
              yb = Ab.j.Vector4[0],
              Zb = Ab.j.Pj[1],
              Db = Ab.j.Pj[2],
              zb = Ab.j.Pj[3],
              xb = Ab.j.Pj[4],
              ib = Ab.j.Pj[5],
              fb = Ab.j.Pj[6],
              mb = Ab.j.Matrix[2],
              pb = bb.geometry ? bb.geometry.boundingBias : null,
              Nb = bb.getTotalVertices();
            Zb.B3(Number.POSITIVE_INFINITY), Db.B3(Number.NEGATIVE_INFINITY), zb.B3(Number.POSITIVE_INFINITY), xb.B3(Number.NEGATIVE_INFINITY);
            for (let Tb = 0; Tb < bb._thinInstanceDataStorage.instancesCount; ++Tb) {
              const ab = Tb * jb;
              yb.set(Eb[ab], Eb[ab + 1], Eb[ab + 2], Eb[ab + 3]);
              const Mb = bb._getData({
                applyMorph: Ub,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: yb,
                updatePositionsArray: !1,
                cache: kb
              }, null, Yb.m.PositionKind);
              if (!Mb) return !1;
              vb(Mb, Nb, ib, fb), Lb(ib, fb, pb), Zb.minimizeInPlace(ib), Db.maximizeInPlace(fb), Ab.b.FromArrayToRef(Rb, 16 * Tb, mb), pb ? Pb(ib, fb, mb, zb, xb) : Xb(Mb, Nb, mb, zb, xb)
            }
            return !(!isFinite(Zb.x) || !isFinite(zb.x)) && (bb.DH().reConstruct(zb, xb), bb.rawBoundingInfo = new Tb.b(Zb, Db), function(bb, ab) {
              bb.length = 0;
              for (let Ub = 0; Ub < ab.boundingBox.vectors.length; ++Ub) bb.push(ab.boundingBox.vectors[Ub].clone())
            }(ab, bb.rawBoundingInfo), bb._updateBoundingInfo(), !0)
          }(this, Eb, Ub)) return;
        Mb && this.bakedVertexAnimationManager?.isEnabled && eb(this) ? this.refreshBoundingInfo({
          applySkeleton: ab,
          applyMorph: Ub,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(ab, Ub);
        const bb = this.DH();
        this.rawBoundingInfo = new Tb.b(bb.minimum, bb.maximum)
      }
      const jb = this.DH(),
        Rb = this._thinInstanceDataStorage.matrixData;
      if (0 === Eb.length)
        for (let Ab = 0; Ab < jb.boundingBox.vectors.length; ++Ab) Eb.push(jb.boundingBox.vectors[Ab].clone());
      Ab.j.Pj[0].B3(Number.POSITIVE_INFINITY), Ab.j.Pj[1].B3(Number.NEGATIVE_INFINITY);
      for (let Tb = 0; Tb < this._thinInstanceDataStorage.instancesCount; ++Tb) {
        Ab.b.FromArrayToRef(Rb, 16 * Tb, Ab.j.Matrix[0]);
        for (let bb = 0; bb < Eb.length; ++bb) Ab.m.TransformCoordinatesToRef(Eb[bb], Ab.j.Matrix[0], Ab.j.Pj[2]), Ab.j.Pj[0].minimizeInPlace(Ab.j.Pj[2]), Ab.j.Pj[1].maximizeInPlace(Ab.j.Pj[2])
      }
      jb.reConstruct(Ab.j.Pj[0], Ab.j.Pj[1]), this._updateBoundingInfo()
    }, Eb.d.prototype._thinInstanceRecreateBuffer = function(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === bb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ab)) : "previousMatrix" === bb ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, ab)) : (bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Yb.m(this.vj(), this._userThinInstanceBuffersStorage.data[bb], bb, !ab, !1, this._userThinInstanceBuffersStorage.strides[bb], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Eb.d.prototype._thinInstanceUpdateBufferSize = function(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      bb === Yb.m.ColorKind && (bb = Yb.m.ColorInstanceKind);
      const Ub = "matrix" === bb;
      if (!Ub && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[bb])) return;
      const Ab = Ub ? 16 : this._userThinInstanceBuffersStorage.strides[bb],
        Mb = Ub ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[bb];
      let Tb = Ub ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[bb];
      const Eb = (this._thinInstanceDataStorage.instancesCount + ab) * Ab;
      let Bb = Mb;
      for (; Bb < Eb;) Bb *= 2;
      if (!Tb || Mb != Bb) {
        if (Tb) {
          const bb = new Float32Array(Bb);
          bb.set(Tb, 0), Tb = bb
        } else Tb = new Float32Array(Bb);
        Ub ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Tb, !1), this._thinInstanceDataStorage.matrixData = Tb, this._thinInstanceDataStorage.matrixBufferSize = Bb, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Tb, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.data[bb] = Tb, this._userThinInstanceBuffersStorage.sizes[bb] = Bb, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Yb.m(this.vj(), Tb, bb, !0, !1, Ab, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
      }
    }, Eb.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Eb.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39561: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Zb,
      f: () => Rb
    });
    var Ab, Mb, Tb, Eb, Yb = Ub(39104),
      Bb = Ub(39110),
      eb = Ub(39124),
      vb = Ub(36431),
      Lb = Ub(36401),
      Pb = Ub(39314),
      Xb = Ub(36447),
      jb = Ub(38982);
    let Rb = (() => {
      var bb;
      let ab, Ub, Ab, Mb, Tb, Eb, Xb, jb, Rb, kb = Pb.c,
        yb = [],
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        pb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [];
      return bb = class extends kb {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(ab) {
          this._billboardMode !== ab && (this._billboardMode = ab, this._cache.useBillboardPosition = 0 !== (this._billboardMode & bb.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(bb) {
          this._infiniteDistance !== bb && (this._infiniteDistance = bb)
        }
        constructor(ab) {
          let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(ab, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Lb.m(0, 0, 1), this._up = new Lb.m(0, 1, 0), this._right = new Lb.m(1, 0, 0), this._position = (0, Yb.k)(this, yb, Lb.m.Zero()), this._rotation = ((0, Yb.k)(this, Zb), (0, Yb.k)(this, Db, Lb.m.Zero())), this._rotationQuaternion = ((0, Yb.k)(this, zb), (0, Yb.k)(this, xb, null)), this._scaling = ((0, Yb.k)(this, ib), (0, Yb.k)(this, fb, Lb.m.One())), this._transformToBoneReferal = ((0, Yb.k)(this, mb), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Yb.k)(this, pb, bb.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Yb.k)(this, Nb), (0, Yb.k)(this, Wb, 1)), this._infiniteDistance = ((0, Yb.k)(this, Hb), (0, Yb.k)(this, Ib, !1)), this.ignoreNonUniformScaling = ((0, Yb.k)(this, db), (0, Yb.k)(this, Fb, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Yb.k)(this, hb), (0, Yb.k)(this, Gb, !1)), this._poseMatrix = ((0, Yb.k)(this, Qb), null), this._localMatrix = Lb.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Lb.m.Zero(), this._absoluteScaling = Lb.m.Zero(), this._absoluteRotationQuaternion = Lb.e.Identity(), this._pivotMatrix = Lb.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new vb.b, this._nonUniformScaling = !1, Ub && this.oN().addTransformNode(this)
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
        get nY() {
          return this._scaling
        }
        set nY(bb) {
          this._scaling = bb, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(bb) {
          this._rotationQuaternion = bb, bb && this._rotation.B3(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Lb.m.TransformNormalFromFloatsToRef(0, 0, this.oN().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Lb.m.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Lb.m.TransformNormalFromFloatsToRef(this.oN().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(bb) {
          return this._poseMatrix ? (this._poseMatrix.EUb(bb), this) : (this._poseMatrix = bb.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Lb.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const ab = this._cache;
          return this._billboardMode === ab.billboardMode && this._billboardMode === bb.BILLBOARDMODE_NONE && (!ab.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.EUb(bb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ab, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Lb.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            ab = arguments.length > 1 ? arguments[1] : void 0,
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          const Ab = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0);
          Ab && Ub && Ub(this, Ab);
          for (const Mb of this.getChildTransformNodes(!0)) Mb.instantiateHierarchy(Ab, ab, Ub);
          return Ab
        }
        DW() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.B3(0), this._rotationQuaternion = this._rotationQuaternion || Lb.e.Identity(), bb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = bb, this._absolutePosition.K9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get PEb() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(bb) {
          if (!bb) return this;
          let ab, Ub, Ab;
          if (void 0 === bb.x) {
            if (arguments.length < 3) return this;
            ab = arguments[0], Ub = arguments[1], Ab = arguments[2]
          } else ab = bb.x, Ub = bb.y, Ab = bb.z;
          if (this.parent) {
            const bb = Lb.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(bb), Lb.m.TransformCoordinatesFromFloatsToRef(ab, Ub, Ab, bb, this.position)
          } else this.position.x = ab, this.position.y = Ub, this.position.z = Ab;
          return this._absolutePosition.EUb(bb), this
        }
        setPositionWithLocalVector(bb) {
          return this.computeWorldMatrix(), this.position = Lb.m.TransformNormal(bb, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const bb = Lb.j.Matrix[0];
          return this._localMatrix.invertToRef(bb), Lb.m.TransformNormal(this.position, bb)
        }
        locallyTranslate(bb) {
          return this.computeWorldMatrix(!0), this.position = Lb.m.TransformCoordinates(bb, this._localMatrix), this
        }
        lookAt(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Eb = bb._LookAtVectorCache,
            Yb = 0 === Tb ? this.position : this.getAbsolutePosition();
          if (ab.subtractToRef(Yb, Eb), this.setDirection(Eb, Ub, Ab, Mb), 1 === Tb && this.parent)
            if (this.rotationQuaternion) {
              const bb = Lb.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(bb);
              const ab = Lb.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ab), ab.invert(), bb.multiplyToRef(ab, bb), this.rotationQuaternion.fromRotationMatrix(bb)
            } else {
              const bb = Lb.j.Quaternion[0];
              Lb.e.FromEulerVectorToRef(this.rotation, bb);
              const ab = Lb.j.Matrix[0];
              bb.toRotationMatrix(ab);
              const Ub = Lb.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Ub), Ub.invert(), ab.multiplyToRef(Ub, ab), bb.fromRotationMatrix(ab), bb.toEulerAnglesToRef(this.rotation)
            } return this
        }
        YC(bb) {
          const ab = Lb.m.Zero();
          return this.getDirectionToRef(bb, ab), ab
        }
        getDirectionToRef(bb, ab) {
          return Lb.m.TransformNormalToRef(bb, this.getWorldMatrix(), ab), this
        }
        setDirection(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Mb = -Math.atan2(bb.z, bb.x) + Math.PI / 2,
            Tb = Math.sqrt(bb.x * bb.x + bb.z * bb.z),
            Eb = -Math.atan2(bb.y, Tb);
          return this.rotationQuaternion ? Lb.e.RotationYawPitchRollToRef(Mb + ab, Eb + Ub, Ab, this.rotationQuaternion) : (this.rotation.x = Eb + Ub, this.rotation.y = Mb + ab, this.rotation.z = Ab), this
        }
        setPivotPoint(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.oN().getRenderId() && this.computeWorldMatrix(!0);
          const Ub = this.getWorldMatrix();
          if (1 == ab) {
            const ab = Lb.j.Matrix[0];
            Ub.invertToRef(ab), bb = Lb.m.TransformCoordinates(bb, ab)
          }
          return this.setPivotMatrix(Lb.b.Translation(-bb.x, -bb.y, -bb.z), !0)
        }
        getPivotPoint() {
          const bb = Lb.m.Zero();
          return this.getPivotPointToRef(bb), bb
        }
        getPivotPointToRef(bb) {
          return bb.x = -this._pivotMatrix.m[12], bb.y = -this._pivotMatrix.m[13], bb.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const bb = Lb.m.Zero();
          return this.getAbsolutePivotPointToRef(bb), bb
        }
        getAbsolutePivotPointToRef(bb) {
          return this.getPivotPointToRef(bb), Lb.m.TransformCoordinatesToRef(bb, this.getWorldMatrix(), bb), this
        }
        Aab(bb) {
          if (this._isDirty) return this;
          if (this._children)
            for (const ab of this._children) ab.Aab(bb);
          return super.Aab(bb)
        }
        setParent(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!ab && !this.parent) return this;
          const Mb = Lb.j.Quaternion[0],
            Tb = Lb.j.Pj[0],
            Eb = Lb.j.Pj[1],
            Yb = Lb.j.Matrix[1];
          Lb.b.IdentityToRef(Yb);
          const Bb = Lb.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let eb = this.rotationQuaternion;
          return eb || (eb = bb._TmpRotation, Lb.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, eb)), Lb.b.ComposeToRef(this.nY, eb, this.position, Bb), this.parent && Bb.multiplyToRef(this.parent.computeWorldMatrix(!0), Bb), ab && (ab.computeWorldMatrix(!0).invertToRef(Yb), Bb.multiplyToRef(Yb, Bb)), Bb.decompose(Eb, Mb, Tb, Ub ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.EUb(Mb) : Mb.toEulerAnglesToRef(this.rotation), this.nY.EUb(Eb), this.position.EUb(Tb), this.parent = ab, Ab && this.setPivotMatrix(Lb.b.Identity()), this
        }
        addChild(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.setParent(this, ab), this
        }
        removeChild(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.parent !== this || bb.setParent(null, ab), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(bb) {
          return this._nonUniformScaling !== bb && (this._nonUniformScaling = bb, !0)
        }
        attachToBone(bb, ab) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = ab, this.parent = bb, bb.getSkeleton().prepare(!0), bb.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = bb ? this._currentParentWhenAttachingToBone : null, this) : (bb && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(ab, Ub, Ab) {
          let Mb;
          if (ab.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.B3(0)), Ab && 0 !== Ab) {
            if (this.parent) {
              const bb = this.parent.getWorldMatrix(),
                Ab = Lb.j.Matrix[0];
              bb.invertToRef(Ab), ab = Lb.m.TransformNormal(ab, Ab), bb.determinant() < 0 && (Ub *= -1)
            }
            Mb = Lb.e.RotationAxisToRef(ab, Ub, bb._RotationAxisCache), Mb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Mb = Lb.e.RotationAxisToRef(ab, Ub, bb._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Mb, this.rotationQuaternion);
          return this
        }
        rotateAround(bb, ab, Ub) {
          ab.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Lb.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.B3(0));
          const Ab = Lb.j.Pj[0],
            Mb = Lb.j.Pj[1],
            Tb = Lb.j.Pj[2],
            Eb = Lb.j.Quaternion[0],
            Yb = Lb.j.Matrix[0],
            Bb = Lb.j.Matrix[1],
            eb = Lb.j.Matrix[2],
            vb = Lb.j.Matrix[3];
          return bb.subtractToRef(this.position, Ab), Lb.b.TranslationToRef(Ab.x, Ab.y, Ab.z, Yb), Lb.b.TranslationToRef(-Ab.x, -Ab.y, -Ab.z, Bb), Lb.b.RotationAxisToRef(ab, Ub, eb), Bb.multiplyToRef(eb, vb), vb.multiplyToRef(Yb, vb), vb.decompose(Mb, Eb, Tb), this.position.addInPlace(Tb), Eb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(bb, ab, Ub) {
          const Ab = bb.scale(ab);
          if (Ub && 0 !== Ub) this.setAbsolutePosition(this.getAbsolutePosition().add(Ab));
          else {
            const bb = this.getPositionExpressedInLocalSpace().add(Ab);
            this.setPositionWithLocalVector(bb)
          }
          return this
        }
        addRotation(bb, ab, Ub) {
          let Ab;
          this.rotationQuaternion ? Ab = this.rotationQuaternion : (Ab = Lb.j.Quaternion[1], Lb.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Ab));
          const Mb = Lb.j.Quaternion[0];
          return Lb.e.RotationYawPitchRollToRef(ab, bb, Ub, Mb), Ab.multiplyInPlace(Mb), this.rotationQuaternion || Ab.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== bb.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Ab = this.oN().getRenderId();
          if (!this._isDirty && !ab && (this._currentRenderId === Ab || this.isSynchronized())) return this._currentRenderId = Ab, this._worldMatrix;
          Ub = Ub || this.oN().activeCamera, this._updateCache();
          const Mb = this._cache;
          Mb.pivotMatrixUpdated = !1, Mb.billboardMode = this.billboardMode, Mb.infiniteDistance = this.infiniteDistance, Mb.parent = this._parentNode, this._currentRenderId = Ab, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Tb = this._getEffectiveParent(),
            Eb = bb._TmpScaling;
          let Yb, Bb = this._position;
          if (this._infiniteDistance && !this.parent && Ub) {
            const ab = Ub.getWorldMatrix().m;
            Bb = bb._TmpTranslation, Bb.K9(this._position.x + ab[12], this._position.y + ab[13], this._position.z + ab[14])
          }
          if (Eb.K9(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Yb = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Lb.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.K9(0, 0, 0))
            }
          } else Yb = bb._TmpRotation, Lb.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Yb);
          if (this._usePivotMatrix) {
            const bb = Lb.j.Matrix[1];
            Lb.b.ScalingToRef(Eb.x, Eb.y, Eb.z, bb);
            const ab = Lb.j.Matrix[0];
            Yb.toRotationMatrix(ab), this._pivotMatrix.multiplyToRef(bb, Lb.j.Matrix[4]), Lb.j.Matrix[4].multiplyToRef(ab, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Bb.x, Bb.y, Bb.z)
          } else Lb.b.ComposeToRef(Eb, Yb, Bb, this._localMatrix);
          if (Tb && Tb.getWorldMatrix) {
            if (ab && Tb.computeWorldMatrix(ab), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const bb = this.parent;
                bb.getSkeleton().prepare(), bb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Lb.j.Matrix[7])
              } else Lb.j.Matrix[7].EUb(Tb.getWorldMatrix());
              const ab = Lb.j.Pj[5],
                Ub = Lb.j.Pj[6],
                Ab = Lb.j.Quaternion[0];
              Lb.j.Matrix[7].decompose(Ub, Ab, ab), Lb.b.ScalingToRef(Ub.x, Ub.y, Ub.z, Lb.j.Matrix[7]), Lb.j.Matrix[7].setTranslation(ab), bb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Ab, ab), this._localMatrix.setTranslation(ab)), this._localMatrix.multiplyToRef(Lb.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const bb = this.parent;
              bb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(bb.getFinalMatrix(), Lb.j.Matrix[6]), Lb.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Tb.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.EUb(this._localMatrix);
          if (Ub && this.billboardMode)
            if (Mb.useBillboardPosition) {
              const ab = Lb.j.Pj[0];
              this._worldMatrix.getTranslationToRef(ab);
              const Ab = Ub.globalPosition;
              this._worldMatrix.invertToRef(Lb.j.Matrix[1]);
              const Mb = Lb.j.Pj[1];
              Lb.m.TransformCoordinatesToRef(Ab, Lb.j.Matrix[1], Mb), Mb.normalize();
              const Tb = -Math.atan2(Mb.z, Mb.x) + Math.PI / 2,
                Eb = Math.sqrt(Mb.x * Mb.x + Mb.z * Mb.z),
                Yb = -Math.atan2(Mb.y, Eb);
              if (Lb.e.RotationYawPitchRollToRef(Tb, Yb, 0, Lb.j.Quaternion[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                const ab = Lb.j.Pj[1];
                Lb.j.Quaternion[0].toEulerAnglesToRef(ab), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (ab.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (ab.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (ab.z = 0), Lb.b.RotationYawPitchRollToRef(ab.y, ab.x, ab.z, Lb.j.Matrix[0])
              } else Lb.b.FromQuaternionToRef(Lb.j.Quaternion[0], Lb.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Lb.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Lb.j.Pj[0])
            } else {
              const ab = Lb.j.Pj[0];
              this._worldMatrix.getTranslationToRef(ab), Lb.j.Matrix[1].EUb(Ub.getViewMatrix());
              const Ab = this.oN().useRightHandedSystem;
              if (Ab && Lb.j.Matrix[1].multiplyToRef(bb._TmpRHRestore, Lb.j.Matrix[1]), Lb.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Lb.j.Matrix[1].invertToRef(Lb.j.Matrix[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                Lb.j.Matrix[0].decompose(void 0, Lb.j.Quaternion[0], void 0);
                const ab = Lb.j.Pj[1];
                Lb.j.Quaternion[0].toEulerAnglesToRef(ab), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (ab.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (ab.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (ab.z = 0), Ab && (ab.y += Math.PI), Lb.b.RotationYawPitchRollToRef(ab.y, ab.x, ab.z, Lb.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Lb.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Lb.j.Pj[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Tb && Tb._nonUniformScaling ? this._updateNonUniformScalingState(Tb._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.K9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Lb.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), bb) {
            const bb = this.getChildren();
            for (let ab = 0; ab < bb.length; ++ab) {
              const Ub = bb[ab];
              if (Ub) {
                Ub.computeWorldMatrix();
                const bb = Lb.j.Matrix[0];
                Ub._localMatrix.multiplyToRef(this._localMatrix, bb);
                const ab = Lb.j.Quaternion[0];
                bb.decompose(Ub.nY, ab, Ub.position), Ub.rotationQuaternion ? Ub.rotationQuaternion.EUb(ab) : ab.toEulerAnglesToRef(Ub.rotation)
              }
            }
          }
          this.nY.K9(1, 1, 1), this.position.K9(0, 0, 0), this.rotation.K9(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Lb.e.Identity()), this._worldMatrix = Lb.b.Identity()
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
          return bb || (bb = this.oN().activeCamera), Lb.m.TransformCoordinates(this.getAbsolutePosition(), bb.getViewMatrix())
        }
        getDistanceToCamera() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb || (bb = this.oN().activeCamera), this.getAbsolutePosition().subtract(bb.globalPosition).length()
        }
        clone(ab, Ub, Ab) {
          const Mb = eb.b.Clone((() => new bb(ab, this.oN())), this);
          if (Mb.name = ab, Mb.id = ab, Ub && (Mb.parent = Ub), !Ab) {
            const bb = this.getDescendants(!0);
            for (let Ub = 0; Ub < bb.length; Ub++) {
              const Ab = bb[Ub];
              Ab.clone && Ab.clone(ab + "." + Ab.name, Mb)
            }
          }
          return Mb
        }
        serialize(bb) {
          const ab = eb.b.Serialize(this, bb);
          return ab.type = this.getClassName(), ab.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ab), ab.localMatrix = this.getPivotMatrix().qUb(), ab.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ab.DW = !0), eb.b.AppendSerializedAnimations(this, ab), ab.cj = this.serializeAnimationRanges(), ab
        }
        getChildTransformNodes(ab, Ub) {
          const Ab = [];
          return this._getDescendants(Ab, ab, (ab => (!Ub || Ub(ab)) && ab instanceof bb)), Ab
        }
        dispose(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.oN().stopAnimation(this), this.oN().removeTransformNode(this), this._parentContainer) {
            const bb = this._parentContainer.transformNodes.indexOf(this);
            bb > -1 && this._parentContainer.transformNodes.splice(bb, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), bb) {
            const bb = this.getChildTransformNodes(!0);
            for (const ab of bb) ab.parent = null, ab.computeWorldMatrix(!0)
          }
          super.dispose(bb, ab)
        }
        normalizeToUnitCube() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ub = arguments.length > 2 ? arguments[2] : void 0,
            Ab = null,
            Mb = null;
          ab && (this.rotationQuaternion ? (Mb = this.rotationQuaternion.clone(), this.rotationQuaternion.K9(0, 0, 0, 1)) : this.rotation && (Ab = this.rotation.clone(), this.rotation.K9(0, 0, 0)));
          const Tb = this.getHierarchyBoundingVectors(bb, Ub),
            Eb = Tb.max.subtract(Tb.min),
            Yb = Math.max(Eb.x, Eb.y, Eb.z);
          if (0 === Yb) return this;
          const Bb = 1 / Yb;
          return this.nY.scaleInPlace(Bb), ab && (this.rotationQuaternion && Mb ? this.rotationQuaternion.EUb(Mb) : this.rotation && Ab && this.rotation.EUb(Ab)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(kb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Bb.I)("position")], Ub = [(0, Bb.I)("rotation")], Ab = [(0, Bb.A)("rotationQuaternion")], Mb = [(0, Bb.I)("nY")], Tb = [(0, Bb.K)("billboardMode")], Eb = [(0, Bb.K)()], Xb = [(0, Bb.K)("infiniteDistance")], jb = [(0, Bb.K)()], Rb = [(0, Bb.K)()], (0, Yb.h)(null, null, ab, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, ab) => {
              bb._position = ab
            }
          },
          metadata: eb
        }, yb, Zb), (0, Yb.h)(null, null, Ub, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotation" in bb,
            get: bb => bb._rotation,
            set: (bb, ab) => {
              bb._rotation = ab
            }
          },
          metadata: eb
        }, Db, zb), (0, Yb.h)(null, null, Ab, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotationQuaternion" in bb,
            get: bb => bb._rotationQuaternion,
            set: (bb, ab) => {
              bb._rotationQuaternion = ab
            }
          },
          metadata: eb
        }, xb, ib), (0, Yb.h)(null, null, Mb, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scaling" in bb,
            get: bb => bb._scaling,
            set: (bb, ab) => {
              bb._scaling = ab
            }
          },
          metadata: eb
        }, fb, mb), (0, Yb.h)(null, null, Tb, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_billboardMode" in bb,
            get: bb => bb._billboardMode,
            set: (bb, ab) => {
              bb._billboardMode = ab
            }
          },
          metadata: eb
        }, pb, Nb), (0, Yb.h)(null, null, Eb, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: bb => "scalingDeterminant" in bb,
            get: bb => bb.scalingDeterminant,
            set: (bb, ab) => {
              bb.scalingDeterminant = ab
            }
          },
          metadata: eb
        }, Wb, Hb), (0, Yb.h)(null, null, Xb, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "_infiniteDistance" in bb,
            get: bb => bb._infiniteDistance,
            set: (bb, ab) => {
              bb._infiniteDistance = ab
            }
          },
          metadata: eb
        }, Ib, db), (0, Yb.h)(null, null, jb, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreNonUniformScaling" in bb,
            get: bb => bb.ignoreNonUniformScaling,
            set: (bb, ab) => {
              bb.ignoreNonUniformScaling = ab
            }
          },
          metadata: eb
        }, Fb, hb), (0, Yb.h)(null, null, Rb, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "reIntegrateRotationIntoRotationQuaternion" in bb,
            get: bb => bb.reIntegrateRotationIntoRotationQuaternion,
            set: (bb, ab) => {
              bb.reIntegrateRotationIntoRotationQuaternion = ab
            }
          },
          metadata: eb
        }, Gb, Qb), eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eb
        })
      })(), bb.BILLBOARDMODE_NONE = 0, bb.BILLBOARDMODE_X = 1, bb.BILLBOARDMODE_Y = 2, bb.BILLBOARDMODE_Z = 4, bb.BILLBOARDMODE_ALL = 7, bb.BILLBOARDMODE_USE_POSITION = 128, bb.BillboardUseParentOrientation = !1, bb._TmpRotation = Lb.e.Zero(), bb._TmpScaling = Lb.m.Zero(), bb._TmpTranslation = Lb.m.Zero(), bb._TmpRHRestore = Lb.b.Scaling(1, 1, -1), bb._LookAtVectorCache = new Lb.m(0, 0, 0), bb._RotationAxisCache = new Lb.e, bb
    })();

    function kb(bb, ab, Ub) {
      const Ab = eb.b.Parse((() => new Rb(bb.name, ab)), bb, ab, Ub);
      if (bb.localMatrix ? Ab.setPreTransformMatrix(Lb.b.FromArray(bb.localMatrix)) : bb.pivotMatrix && Ab.setPivotMatrix(Lb.b.FromArray(bb.pivotMatrix)), Ab.Yz(bb.isEnabled), Ab._waitingParsedUniqueId = bb.uniqueId, void 0 !== bb.parentId && (Ab._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Ab._waitingParentInstanceIndex = bb.parentInstanceIndex), bb.DW && (Ab._waitingFreezeWorldMatrix = bb.DW), bb.animations) {
        for (let ab = 0; ab < bb.animations.length; ab++) {
          const Ub = bb.animations[ab],
            Mb = (0, Xb.b)("BABYLON.Animation");
          Mb && Ab.animations.push(Mb.Parse(Ub))
        }
        Pb.c.ParseAnimationRanges(Ab, bb, ab)
      }
      return bb.autoAnimate && ab.beginAnimation(Ab, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), Ab
    }
    let yb = !1;

    function Zb() {
      yb || (yb = !0, Rb.Parse = kb)
    }(Ab = Rb.prototype).pG ?? (Ab.pG = (0, jb.i)("TransformNode", "pG")), (Mb = Rb.prototype).applyImpulse ?? (Mb.applyImpulse = (0, jb.i)("TransformNode", "applyImpulse")), (Tb = Rb.prototype).applyAngularImpulse ?? (Tb.applyAngularImpulse = (0, jb.i)("TransformNode", "applyAngularImpulse")), (Eb = Rb.prototype).applyTorque ?? (Eb.applyTorque = (0, jb.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Rb.prototype, "physicsBody") || Object.defineProperty(Rb.prototype, "physicsBody", (0, jb.g)("TransformNode", "physicsBody"))
  },
  39525: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      try {
        const Ab = bb.next();
        Ab.done ? ab(Ab) : Ab.value ? Ab.value.then((() => {
          Ab.value = void 0, ab(Ab)
        }), Ub) : ab(Ab)
      } catch (Ab) {
        Ub(Ab)
      }
    }

    function Mb() {
      let bb, ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Ub, Mb, Tb) => {
        const Eb = performance.now();
        void 0 === bb || Eb - bb > ab ? (bb = Eb, setTimeout((() => {
          Ab(Ub, Mb, Tb)
        }), 0)) : Ab(Ub, Mb, Tb)
      }
    }

    function Tb(bb, ab, Ub, Ab, Mb) {
      const Tb = () => {
        let Eb;
        const Yb = bb => {
          bb.done ? Ub(bb.value) : void 0 === Eb ? Eb = !0 : Tb()
        };
        do {
          Eb = void 0, Mb && Mb.aborted ? Ab(new Error("Aborted")) : ab(bb, Yb, Ab), void 0 === Eb && (Eb = !1)
        } while (Eb)
      };
      Tb()
    }

    function Eb(bb, ab) {
      let Ub;
      return Tb(bb, Ab, (bb => Ub = bb), (bb => {
        throw bb
      }), ab), Ub
    }
    async function Yb(bb, ab, Ub) {
      return await new Promise(((Ab, Mb) => {
        Tb(bb, ab, Ab, Mb, Ub)
      }))
    }

    function Bb(bb, ab) {
      return function() {
        return Eb(bb(...arguments), ab)
      }
    }
    Ub.d(ab, {
      d: () => Mb,
      e: () => Bb,
      h: () => Yb,
      k: () => Eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);