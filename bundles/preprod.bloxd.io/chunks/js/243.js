export const id = 243;
export const ids = [243];
export const modules = {
  39951: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => dq,
      i: () => oq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39858),
      mq = gq(37156),
      xq = gq(37139),
      Aq = gq(39960),
      cq = gq(38653),
      uq = gq(37171),
      Bq = gq(39636),
      Wq = gq(38065),
      Nq = gq(37758),
      aq = gq(39717),
      Vq = gq(39779);
    let dq = (() => {
      var qq;
      let Eq, gq, uq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq = Aq.c,
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
      return qq = class extends fq {
        get position() {
          return this._position
        }
        set position(qq) {
          this._position = qq
        }
        set upVector(qq) {
          this._upVector = qq
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Eq, gq;
          if (this.mode === qq.PERSPECTIVE_CAMERA) this.fovMode === qq.FOVMODE_VERTICAL_FIXED ? (gq = 2 * this.minZ * Math.tan(this.fov / 2), Eq = this.Ba().getAspectRatio(this) * gq) : (Eq = 2 * this.minZ * Math.tan(this.fov / 2), gq = Eq / this.Ba().getAspectRatio(this));
          else {
            const qq = this.Ba().getRenderWidth() / 2,
              Yq = this.Ba().getRenderHeight() / 2;
            Eq = (this.orthoRight ?? qq) - (this.orthoLeft ?? -qq), gq = (this.orthoTop ?? Yq) - (this.orthoBottom ?? -Yq)
          }
          return Eq * gq
        }
        set orthoLeft(qq) {
          this._orthoLeft = qq;
          for (const Eq of this._rigCameras) Eq.orthoLeft = qq
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(qq) {
          this._orthoRight = qq;
          for (const Eq of this._rigCameras) Eq.orthoRight = qq
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(qq) {
          this._orthoBottom = qq;
          for (const Eq of this._rigCameras) Eq.orthoBottom = qq
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(qq) {
          this._orthoTop = qq;
          for (const Eq of this._rigCameras) Eq.orthoTop = qq
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Eq / (2 * qq))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(qq) {
          this._baseInertia = qq
        }
        set mode(qq) {
          this._mode = qq;
          for (const Eq of this._rigCameras) Eq.mode = qq
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Eq, gq, lq) {
          let Aq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, aq.d)(), super(Eq, lq, !1), this.inputs = (0, Yq.i)(this, Mq), this._position = (0, Yq.i)(this, Tq, xq.q.Zero()), this._upVector = ((0, Yq.i)(this, zq), (0, Yq.i)(this, Sq, xq.q.Up())), this.oblique = ((0, Yq.i)(this, pq), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Yq.i)(this, Gq, .8), this.projectionPlaneTilt = ((0, Yq.i)(this, Lq), (0, Yq.i)(this, Jq, 0)), this.minZ = ((0, Yq.i)(this, kq), (0, Yq.i)(this, Rq, 1)), this.maxZ = ((0, Yq.i)(this, Uq), (0, Yq.i)(this, Fq, 1e4)), this._baseInertia = ((0, Yq.i)(this, sq), .9), this._mode = qq.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Wq.c(0, 0, 1, 1), this.layerMask = (0, Yq.i)(this, Xq, 268435455), this.fovMode = ((0, Yq.i)(this, wq), (0, Yq.i)(this, Kq, qq.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Yq.i)(this, Cq), (0, Yq.i)(this, Iq, qq.RIG_MODE_NONE)), this.interaxialDistance = ((0, Yq.i)(this, eq), (0, Yq.i)(this, Dq, void 0)), this.isStereoscopicSideBySide = ((0, Yq.i)(this, qE), (0, Yq.i)(this, EE, void 0)), this.ignoreCameraMaxZ = ((0, Yq.i)(this, gE), (0, Yq.i)(this, YE, !1)), this.customRenderTargets = ((0, Yq.i)(this, lE), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new mq.d, this.onProjectionMatrixChangedObservable = new mq.d, this.onAfterCheckInputsObservable = new mq.d, this.onRestoreStateObservable = new mq.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new xq.e, this._postProcesses = new Array, this._activeMeshes = new Oq.c(256), this._globalPosition = xq.q.Zero(), this._computedViewMatrix = xq.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = xq.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = xq.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.ZJ().defaultCameraLayerMask, this.ZJ().addCamera(this), Aq && !this.ZJ().activeCamera && (this.ZJ().activeCamera = this), this.position = gq, this.renderPassId = this.ZJ().Ba().createRenderPassId(`Camera ${Eq}`)
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
          return "td"
        }
        toString(qq) {
          let Eq = "Name: " + this.name;
          if (Eq += ", type: " + this.getClassName(), this.animations)
            for (let gq = 0; gq < this.animations.length; gq++) Eq += ", animation[0]: " + this.animations[gq].toString(qq);
          return Eq
        }
        applyVerticalCorrection() {
          const qq = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -qq.x : qq.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(qq) {
          return -1 !== this._activeMeshes.indexOf(qq)
        }
        isReady() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (qq)
            for (const Eq of this._postProcesses)
              if (Eq && !Eq.isReady()) return !1;
          return super.isReady(qq)
        }
        _initCache() {
          super._initCache(), this._cache.position = new xq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new xq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(qq) {
          qq || super._updateCache(), this._cache.position.WG(this.position), this._cache.upVector.WG(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Eq = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let gq = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Eq;
          if (!gq) return !1;
          const Yq = this.Ba();
          return this.mode === qq.PERSPECTIVE_CAMERA ? gq = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Yq.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (gq = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Yq.getRenderWidth() && this._cache.renderHeight === Yq.getRenderHeight(), this.oblique && (gq = gq && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), gq
        }
        attachControl(qq, Eq) {}
        detachControl(qq) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== qq.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let qq = 0; qq < this._postProcesses.length; qq++)
            if (null !== this._postProcesses[qq]) return this._postProcesses[qq];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const qq = this._getFirstPostProcess();
          qq && qq.markTextureDirty();
          for (let Eq = 0, gq = this._rigCameras.length; Eq < gq; Eq++) {
            const qq = this._rigCameras[Eq],
              gq = qq._rigPostProcess;
            if (gq) {
              "pass" === gq.getEffectName() && (qq.isIntermediate = 0 === this._postProcesses.length), qq._postProcesses = this._postProcesses.slice(0).concat(gq), gq.markTextureDirty()
            } else qq._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !qq.isReusable() && this._postProcesses.indexOf(qq) > -1 ? (cq.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Eq || Eq < 0 ? this._postProcesses.push(qq) : null === this._postProcesses[Eq] ? this._postProcesses[Eq] = qq : this._postProcesses.splice(Eq, 0, qq), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.xgq(), this._postProcesses.indexOf(qq))
        }
        detachPostProcess(qq) {
          const Eq = this._postProcesses.indexOf(qq); - 1 !== Eq && (this._postProcesses[Eq] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.xgq(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return xq.e.Identity()
        }
        getViewMatrix(qq) {
          return !qq && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.ZJ().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(qq) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== qq && (this._projectionMatrix = qq)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Eq) {
          if (this._doNotComputeProjectionMatrix || !Eq && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const gq = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = gq, this._refreshFrustumPlanes = !0;
          const Yq = this.Ba(),
            lq = this.ZJ(),
            Oq = Yq.vYq;
          if (this.mode === qq.PERSPECTIVE_CAMERA) {
            let Eq;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Yq.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Eq = lq.useRightHandedSystem ? xq.e.PerspectiveFovRHToRef : xq.e.PerspectiveFovLHToRef, Eq(this.fov, Yq.getAspectRatio(this), Oq ? gq : this.minZ, Oq ? this.minZ : gq, this._projectionMatrix, this.fovMode === qq.FOVMODE_VERTICAL_FIXED, Yq.isNDCHalfZRange, this.projectionPlaneTilt, Oq)
          } else {
            const qq = Yq.getRenderWidth() / 2,
              Eq = Yq.getRenderHeight() / 2;
            lq.useRightHandedSystem ? this.oblique ? xq.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -qq, this.orthoRight ?? qq, this.orthoBottom ?? -Eq, this.orthoTop ?? Eq, Oq ? gq : this.minZ, Oq ? this.minZ : gq, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Yq.isNDCHalfZRange) : xq.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -qq, this.orthoRight ?? qq, this.orthoBottom ?? -Eq, this.orthoTop ?? Eq, Oq ? gq : this.minZ, Oq ? this.minZ : gq, this._projectionMatrix, Yq.isNDCHalfZRange) : this.oblique ? xq.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -qq, this.orthoRight ?? qq, this.orthoBottom ?? -Eq, this.orthoTop ?? Eq, Oq ? gq : this.minZ, Oq ? this.minZ : gq, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Yq.isNDCHalfZRange) : xq.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -qq, this.orthoRight ?? qq, this.orthoBottom ?? -Eq, this.orthoTop ?? Eq, Oq ? gq : this.minZ, Oq ? this.minZ : gq, this._projectionMatrix, Yq.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Yq.getRenderWidth(), this._cache.renderHeight = Yq.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(qq) {
          return (this.radius || (this.target ? xq.q.Distance(this.position, this.target) : this.position.length())) + qq
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Nq.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Nq.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Eq && this.rigCameras.length > 0) {
            let Eq = !1;
            for (const gq of this.rigCameras) gq._updateFrustumPlanes(), Eq = Eq || qq.isInFrustum(gq._frustumPlanes);
            return Eq
          }
          return qq.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(qq) {
          return this._updateFrustumPlanes(), qq.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Bq.m)("Ray")
        }
        getForwardRayToRef(qq) {
          throw (0, Bq.m)("Ray")
        }
        dispose(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.ZJ().stopAnimation(this), this.ZJ().removeCamera(this); this._rigCameras.length > 0;) {
            const qq = this._rigCameras.pop();
            qq && qq.dispose()
          }
          if (this._parentContainer) {
            const qq = this._parentContainer.cameras.indexOf(this);
            qq > -1 && this._parentContainer.cameras.splice(qq, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== qq.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let qq = this._postProcesses.length;
            for (; --qq >= 0;) {
              const Eq = this._postProcesses[qq];
              Eq && Eq.dispose(this)
            }
          }
          let Yq = this.customRenderTargets.length;
          for (; --Yq >= 0;) this.customRenderTargets[Yq].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.ZJ().Ba().releaseRenderPassId(this.renderPassId), super.dispose(Eq, gq)
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
        setCameraRigMode(Eq, gq) {
          if (this.cameraRigMode !== Eq) {
            for (; this._rigCameras.length > 0;) {
              const qq = this._rigCameras.pop();
              qq && qq.dispose()
            }
            if (this.cameraRigMode = Eq, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = gq.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== qq.RIG_MODE_NONE) {
              const qq = this.createRigCamera(this.name + "_L", 0);
              qq && (qq._isLeftCamera = !0);
              const Eq = this.createRigCamera(this.name + "_R", 1);
              Eq && (Eq._isRightCamera = !0), qq && Eq && (this._rigCameras.push(qq), this._rigCameras.push(Eq))
            }
            this._setRigMode(gq), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(qq) {}
        _getVRProjectionMatrix() {
          return xq.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Ba().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(qq, Eq) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[qq] = Eq, "interaxialDistance" === qq && (this._cameraRigParams.stereoHalfAngle = Eq / .0637 * (Math.PI / 180))
        }
        createRigCamera(qq, Eq) {
          return null
        }
        _updateRigCameras() {
          for (let qq = 0; qq < this._rigCameras.length; qq++) this._rigCameras[qq].minZ = this.minZ, this._rigCameras[qq].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[qq].fov = this.fov, this._rigCameras[qq].upVector.WG(this.upVector);
          this.cameraRigMode === qq.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const qq = Vq.d.Serialize(this);
          return qq.uniqueId = this.uniqueId, qq.type = this.getClassName(), this.parent && this.parent._serializeAsParent(qq), this.inputs && this.inputs.serialize(qq), Vq.d.AppendSerializedAnimations(this, qq), qq.zV = this.serializeAnimationRanges(), qq.isEnabled = this.isEnabled(), qq
        }
        clone(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Yq = Vq.d.Clone(qq.GetConstructorFromName(this.getClassName(), Eq, this.ZJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Yq.name = Eq, Yq.parent = gq, this.onClonedObservable.notifyObservers(Yq), Yq
        }
        RD(qq) {
          const Eq = xq.q.Zero();
          return this.getDirectionToRef(qq, Eq), Eq
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(qq, Eq) {
          xq.q.TransformNormalToRef(qq, this.getWorldMatrix(), Eq)
        }
        static GetConstructorFromName(Eq, gq, Yq) {
          let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const mq = Aq.c.Construct(Eq, gq, Yq, {
            interaxial_distance: lq,
            isStereoscopicSideBySide: Oq
          });
          return mq || (() => qq._CreateDefaultParsedCamera(gq, Yq))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let qq = this.ZJ().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (qq *= -1), qq
        }
      }, (() => {
        const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(fq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, lq.I)("position")], gq = [(0, lq.I)("upVector")], uq = [(0, lq.M)()], dq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.M)()], Pq = [(0, lq.M)()], Qq = [(0, lq.M)()], yq = [(0, lq.M)()], tq = [(0, lq.M)()], rq = [(0, lq.M)()], vq = [(0, lq.M)()], hq = [(0, lq.M)()], nq = [(0, lq.M)()], bq = [(0, lq.M)()], iq = [(0, lq.M)()], Zq = [(0, lq.M)()], (0, Yq.f)(qq, null, uq, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: qq => "orthoLeft" in qq,
            get: qq => qq.orthoLeft
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(qq, null, dq, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: qq => "orthoRight" in qq,
            get: qq => qq.orthoRight
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(qq, null, jq, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: qq => "orthoBottom" in qq,
            get: qq => qq.orthoBottom
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(qq, null, Hq, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: qq => "orthoTop" in qq,
            get: qq => qq.orthoTop
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(qq, null, tq, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: qq => "inertia" in qq,
            get: qq => qq.inertia
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(qq, null, rq, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: qq => "mode" in qq,
            get: qq => qq.mode
          },
          metadata: Oq
        }, null, Mq), (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: qq => "_position" in qq,
            get: qq => qq._position,
            set: (qq, Eq) => {
              qq._position = Eq
            }
          },
          metadata: Oq
        }, Tq, zq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: qq => "_upVector" in qq,
            get: qq => qq._upVector,
            set: (qq, Eq) => {
              qq._upVector = Eq
            }
          },
          metadata: Oq
        }, Sq, pq), (0, Yq.f)(null, null, oq, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: qq => "fov" in qq,
            get: qq => qq.fov,
            set: (qq, Eq) => {
              qq.fov = Eq
            }
          },
          metadata: Oq
        }, Gq, Lq), (0, Yq.f)(null, null, Pq, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: qq => "projectionPlaneTilt" in qq,
            get: qq => qq.projectionPlaneTilt,
            set: (qq, Eq) => {
              qq.projectionPlaneTilt = Eq
            }
          },
          metadata: Oq
        }, Jq, kq), (0, Yq.f)(null, null, Qq, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: qq => "minZ" in qq,
            get: qq => qq.minZ,
            set: (qq, Eq) => {
              qq.minZ = Eq
            }
          },
          metadata: Oq
        }, Rq, Uq), (0, Yq.f)(null, null, yq, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: qq => "maxZ" in qq,
            get: qq => qq.maxZ,
            set: (qq, Eq) => {
              qq.maxZ = Eq
            }
          },
          metadata: Oq
        }, Fq, sq), (0, Yq.f)(null, null, vq, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: qq => "layerMask" in qq,
            get: qq => qq.layerMask,
            set: (qq, Eq) => {
              qq.layerMask = Eq
            }
          },
          metadata: Oq
        }, Xq, wq), (0, Yq.f)(null, null, hq, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "fovMode" in qq,
            get: qq => qq.fovMode,
            set: (qq, Eq) => {
              qq.fovMode = Eq
            }
          },
          metadata: Oq
        }, Kq, Cq), (0, Yq.f)(null, null, nq, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "cameraRigMode" in qq,
            get: qq => qq.cameraRigMode,
            set: (qq, Eq) => {
              qq.cameraRigMode = Eq
            }
          },
          metadata: Oq
        }, Iq, eq), (0, Yq.f)(null, null, bq, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: qq => "interaxialDistance" in qq,
            get: qq => qq.interaxialDistance,
            set: (qq, Eq) => {
              qq.interaxialDistance = Eq
            }
          },
          metadata: Oq
        }, Dq, qE), (0, Yq.f)(null, null, iq, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: qq => "isStereoscopicSideBySide" in qq,
            get: qq => qq.isStereoscopicSideBySide,
            set: (qq, Eq) => {
              qq.isStereoscopicSideBySide = Eq
            }
          },
          metadata: Oq
        }, EE, gE), (0, Yq.f)(null, null, Zq, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: qq => "ignoreCameraMaxZ" in qq,
            get: qq => qq.ignoreCameraMaxZ,
            set: (qq, Eq) => {
              qq.ignoreCameraMaxZ = Eq
            }
          },
          metadata: Oq
        }, YE, lE), Oq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Oq
        })
      })(), qq._CreateDefaultParsedCamera = (qq, Eq) => {
        throw (0, Bq.m)("UniversalCamera")
      }, qq.PERSPECTIVE_CAMERA = 0, qq.ORTHOGRAPHIC_CAMERA = 1, qq.FOVMODE_VERTICAL_FIXED = 0, qq.FOVMODE_HORIZONTAL_FIXED = 1, qq.RIG_MODE_NONE = 0, qq.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, qq.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, qq.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, qq.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, qq.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, qq.RIG_MODE_VR = 20, qq.RIG_MODE_CUSTOM = 22, qq.ForceAttachControlToAlwaysPreventDefault = !1, qq
    })();

    function jq(qq, Eq) {
      const gq = qq.type,
        Yq = dq.GetConstructorFromName(gq, qq.name, Eq, qq.interaxial_distance, qq.isStereoscopicSideBySide),
        lq = Vq.d.Parse(Yq, qq, Eq);
      if (void 0 !== qq.parentId && (lq._waitingParentId = qq.parentId), void 0 !== qq.parentInstanceIndex && (lq._waitingParentInstanceIndex = qq.parentInstanceIndex), lq.inputs && (lq.inputs.parse(qq), lq._setupInputs()), qq.upVector && (lq.upVector = xq.q.FromArray(qq.upVector)), lq.setPosition && (lq.position.Vqq(0, 0, 0), lq.setPosition(xq.q.FromArray(qq.position))), qq.target && lq.setTarget && lq.setTarget(xq.q.FromArray(qq.target)), qq.cameraRigMode) {
        const Eq = qq.interaxial_distance ? {
          interaxialDistance: qq.interaxial_distance
        } : {};
        lq.setCameraRigMode(qq.cameraRigMode, Eq)
      }
      if (qq.animations) {
        for (let Eq = 0; Eq < qq.animations.length; Eq++) {
          const gq = qq.animations[Eq],
            Yq = (0, uq.e)("BABYLON.Animation");
          Yq && lq.animations.push(Yq.Parse(gq))
        }
        Aq.c.ParseAnimationRanges(lq, qq, Eq)
      }
      return qq.autoAnimate && Eq.beginAnimation(lq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), void 0 !== qq.isEnabled && lq.hG(qq.isEnabled), lq
    }
    let Hq = !1;

    function oq() {
      Hq || (Hq = !0, dq.Parse = jq)
    }
  },
  39972: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq) {
        this._cameraPosition = Eq, this._behavior = gq, this.activeInput = !1, this.speed = 1, this.RC = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Yq.q, this.rotationAccumulatedPixels = new Yq.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Yq.q.Zero(), this.rotationDeltaCurrentFrame = Yq.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new Yq.q, this.referenceFrameRate = 60, this._rotationVelocity = new Yq.q, this._prevFrameTimeMs = 0, this._scene = qq
      }
      computeCurrentFrameDeltas() {
        const qq = this._scene.Ba().getDeltaTime(),
          Eq = this._getEffectiveDeltaMs(qq);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0, void(qq > 0 && (this._prevFrameTimeMs = qq));
        this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Vqq(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Eq, this.panDeltaCurrentFrame), this._rotationVelocity.Vqq(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.Vqq(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Eq, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Eq, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.RC * this._zoomSpeedMultiplier) * Eq, qq > 0 && (this._prevFrameTimeMs = qq), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.A4(0), this.rotationAccumulatedPixels.A4(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.A4(0), this.rotationAccumulatedPixels.A4(0)
      }
      resetPanVelocity() {
        this._panVelocity.A4(0), this.panAccumulatedPixels.A4(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(qq) {
        const Eq = this._scene.Ba().getDeltaTime(),
          gq = this._getEffectiveDeltaMs(Eq),
          Yq = 1e3 / this.referenceFrameRate;
        return Math.pow(qq, gq / Yq)
      }
      getFrameIndependentInputScale(qq) {
        const Eq = 1 - qq;
        if (Eq <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(qq)) / Eq
      }
      _getEffectiveDeltaMs(qq) {
        return qq > 0 ? qq : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(qq, Eq, gq) {
        let Yq = qq;
        const lq = this._scene.Ba().getDeltaTime(),
          Oq = this._getEffectiveDeltaMs(lq);
        if (0 === Oq) return Yq;
        const mq = this.getFrameIndependentDecay(gq);
        if (Yq *= mq, 0 !== Eq || this.activeInput) {
          const qq = 1 - gq;
          Yq += Eq / Oq * (qq > 0 ? (1 - mq) / qq : 1)
        } else Math.abs(Yq) < 1e-6 && (Yq = 0);
        return Yq
      }
    }
  },
  39977: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      constructor(qq, Eq) {
        this.inputMap = [], this.handlers = qq, this._createDefaultEntries = Eq, this.resetInputMap()
      }
      resolveInteraction(qq, Eq) {
        for (const gq of this.inputMap)
          if (gq.source === qq && this._entryMatches(gq, Eq)) return gq;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(qq, Eq, gq) {
        const Yq = this.inputMap;
        for (let lq = 0; lq < Yq.length; lq++) {
          const Oq = Yq[lq];
          if (Oq.source === qq && Oq.interaction === Eq && this._entryConditionsMatch(Oq, gq)) return Oq
        }
      }
      getEntries(qq, Eq, gq) {
        const Yq = [],
          lq = this.inputMap;
        for (let Oq = 0; Oq < lq.length; Oq++) {
          const mq = lq[Oq];
          mq.source === qq && mq.interaction === Eq && this._entryConditionsMatch(mq, gq) && Yq.push(mq)
        }
        return Yq
      }
      addEntry(qq) {
        const Eq = this._entrySpecificity(qq);
        let gq = this.inputMap.length;
        for (let Yq = 0; Yq < this.inputMap.length; Yq++)
          if (this._entrySpecificity(this.inputMap[Yq]) < Eq) {
            gq = Yq;
            break
          } this.inputMap.splice(gq, 0, qq)
      }
      setInteraction(qq, Eq, gq) {
        const Yq = this.resolveInteraction(qq, Eq);
        return Yq && this._entryCoversAllConditionsOf(Yq, Eq) ? (Yq.interaction = gq, !0) : (this.addEntry({
          source: qq,
          ...Eq ?? {},
          interaction: gq
        }), !0)
      }
      _entryCoversAllConditionsOf(qq, Eq) {
        if (!Eq) return !0;
        const gq = qq;
        for (const Yq of Object.keys(Eq)) {
          const qq = Eq[Yq];
          if (void 0 !== qq)
            if ("modifiers" === Yq) {
              const Eq = gq.modifiers ?? {};
              for (const gq of Object.keys(qq))
                if (void 0 !== qq[gq] && void 0 === Eq[gq]) return !1
            } else if (void 0 === gq[Yq]) return !1
        }
        return !0
      }
      setInteractions(qq, Eq, gq) {
        let Yq = 0;
        const lq = this.inputMap;
        for (let Oq = 0; Oq < lq.length; Oq++) {
          const mq = lq[Oq];
          mq.source === qq && this._entryMatches(mq, Eq) && (mq.interaction = gq, Yq++)
        }
        return Yq
      }
      _entryMatches(qq, Eq) {
        switch (qq.source) {
          case "pointer":
            return (void 0 === qq.button || qq.button === Eq?.button) && this._matchModifiers(qq.modifiers, Eq?.modifiers);
          case "wheel":
            return this._matchModifiers(qq.modifiers, Eq?.modifiers);
          case "touch":
            return void 0 === qq.touchCount || qq.touchCount === Eq?.touchCount;
          case "keyboard":
            return (void 0 === qq.key || (Array.isArray(qq.key) ? -1 !== qq.key.indexOf(Eq?.key ?? -1) : qq.key === Eq?.key)) && this._matchModifiers(qq.modifiers, Eq?.modifiers)
        }
      }
      _entryConditionsMatch(qq, Eq) {
        if (!Eq) return !0;
        switch (qq.source) {
          case "pointer":
            return (!("button" in Eq) || qq.button === Eq.button) && (!("modifiers" in Eq) || this._entryModifiersMatch(qq.modifiers, Eq.modifiers));
          case "wheel":
            return !("modifiers" in Eq) || this._entryModifiersMatch(qq.modifiers, Eq.modifiers);
          case "touch":
            return !("touchCount" in Eq) || qq.touchCount === Eq.touchCount;
          case "keyboard":
            if ("key" in Eq) {
              if (void 0 === qq.key) return void 0 === Eq.key;
              if (void 0 === Eq.key || (Array.isArray(qq.key) ? -1 === qq.key.indexOf(Eq.key) : qq.key !== Eq.key)) return !1
            }
            return !("modifiers" in Eq) || this._entryModifiersMatch(qq.modifiers, Eq.modifiers)
        }
      }
      _entrySpecificity(qq) {
        let Eq = 0;
        return "button" in qq && void 0 !== qq.button && Eq++, "key" in qq && void 0 !== qq.key && Eq++, "touchCount" in qq && void 0 !== qq.touchCount && Eq++, "modifiers" in qq && qq.modifiers && Eq++, Eq
      }
      _matchModifiers(qq, Eq) {
        return !qq || (void 0 === qq.ctrl || qq.ctrl === (Eq?.ctrl ?? !1)) && ((void 0 === qq.shift || qq.shift === (Eq?.shift ?? !1)) && (void 0 === qq.alt || qq.alt === (Eq?.alt ?? !1)))
      }
      _entryModifiersMatch(qq, Eq) {
        if (!Eq) return !qq;
        return void 0 !== Eq.ctrl || void 0 !== Eq.shift || void 0 !== Eq.alt ? (void 0 === Eq.ctrl || qq?.ctrl === Eq.ctrl) && ((void 0 === Eq.shift || qq?.shift === Eq.shift) && (void 0 === Eq.alt || qq?.alt === Eq.alt)) : !qq || void 0 === qq.ctrl && void 0 === qq.shift && void 0 === qq.alt
      }
    }
  },
  39943: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => jq,
      h: () => Vq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39951),
      mq = gq(37139),
      xq = gq(37145),
      Aq = gq(39967),
      cq = gq(39960),
      uq = gq(39972),
      Bq = gq(39977);
    class Wq extends uq.e {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq), this.input = new Bq.b({
          translate: (qq, Eq, gq) => {
            this.panAccumulatedPixels.x += qq, this.panAccumulatedPixels.y += Eq, this.panAccumulatedPixels.z += gq
          },
          rotate: (qq, Eq) => {
            this.rotationAccumulatedPixels.x += qq, this.rotationAccumulatedPixels.y += Eq
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
    const Nq = mq.e.Zero(),
      aq = mq.h.Identity();
    let Vq = (() => {
        var qq;
        let Eq, gq, cq, uq, Bq = Oq.e,
          Vq = [],
          dq = [],
          jq = [],
          Hq = [],
          oq = [],
          Pq = [],
          Qq = [],
          yq = [];
        return qq = class extends Bq {
          get inertia() {
            return this._targetInertia
          }
          set inertia(qq) {
            this._targetInertia = qq, this.movement && (this.movement.panInertia = qq, this.movement.rotationInertia = qq)
          }
          constructor(qq, Eq, gq) {
            super(qq, Eq, gq, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new mq.q(0, 0, 0), this.cameraRotation = new mq.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Yq.i)(this, Vq, !1), this.rotation = ((0, Yq.i)(this, dq), (0, Yq.i)(this, jq, void 0)), this.rotationQuaternion = (0, Yq.i)(this, Hq), this.speed = (0, Yq.i)(this, oq, 2), this.noRotationConstraint = ((0, Yq.i)(this, Pq), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = xq.c, this._rotationEpsilon = xq.c, this.lockedTarget = (0, Yq.i)(this, Qq, null), this._currentTarget = ((0, Yq.i)(this, yq), mq.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = mq.e.Zero(), this._cameraTransformMatrix = mq.e.Zero(), this._cameraRotationMatrix = mq.e.Zero(), this._transformedReferencePoint = mq.q.Zero(), this._deferredPositionUpdate = new mq.q, this._deferredRotationQuaternionUpdate = new mq.h, this._deferredRotationUpdate = new mq.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = mq.q.Forward(this.ZJ().useRightHandedSystem), this.rotation = new mq.q(0, this.ZJ().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Wq(this.ZJ(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(qq) {
            this.getWorldMatrix();
            const Eq = mq.o.Na[0],
              gq = mq.o.Na[1];
            return gq.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(gq, Eq), Eq.scaleInPlace(qq), this.globalPosition.add(Eq)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const qq = this.lockedTarget;
              qq.computeWorldMatrix().getTranslationToRef(qq.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.Vqq(0, 0, 0), this.cameraRotation.Vqq(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new mq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new mq.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(qq) {
            qq || super._updateCache();
            const Eq = this._getLockedTargetPosition();
            Eq ? this._cache.lockedTarget ? this._cache.lockedTarget.WG(Eq) : this._cache.lockedTarget = Eq.clone() : this._cache.lockedTarget = null, this._cache.rotation.WG(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.WG(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const qq = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(qq) : !qq) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const qq = this.Ba();
            return this.speed * Math.sqrt(qq.getDeltaTime() / (100 * qq.getFps()))
          }
          setTarget(qq) {
            this.upVector.normalize(), this._initialFocalDistance = qq.subtract(this.position).length(), this.position.z === qq.z && (this.position.z += xq.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.ZJ().useRightHandedSystem ? mq.e.LookAtRHToRef(this.position, qq, mq.q.UpReadOnly, Nq) : mq.e.LookAtLHToRef(this.position, qq, mq.q.UpReadOnly, Nq), Nq.invert();
            const Eq = this.rotationQuaternion || aq;
            mq.h.FromRotationMatrixToRef(Nq, Eq), Eq.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(qq) {
            this.setTarget(qq)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(mq.o.Matrix[0]), mq.q.TransformNormalToRef(this.cameraDirection, mq.o.Matrix[0], mq.o.Na[0]), this._deferredPositionUpdate.addInPlace(mq.o.Na[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.WG(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.WG(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const qq = this.movement,
              Eq = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            qq.panAccumulatedPixels.addInPlace(this.cameraDirection), qq.rotationAccumulatedPixels.x += this.cameraRotation.x, qq.rotationAccumulatedPixels.y += this.cameraRotation.y, qq.computeCurrentFrameDeltas(), this.cameraDirection.WG(qq.panDeltaCurrentFrame), this.cameraRotation.set(qq.rotationDeltaCurrentFrame.x, qq.rotationDeltaCurrentFrame.y);
            const gq = this.speed * this._panningEpsilon;
            !Eq && Math.abs(this.cameraDirection.x) < gq && Math.abs(this.cameraDirection.y) < gq && Math.abs(this.cameraDirection.z) < gq && (this.cameraDirection.A4(0), qq.resetPanVelocity());
            const Yq = this.invertRotation ? -this.inverseRotationSpeed : 1,
              lq = this._decideIfNeedsToMove(),
              Oq = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.WG(this.rotation), this._deferredPositionUpdate.WG(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.WG(this.rotationQuaternion), lq && this._updatePosition(), Oq) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Yq, this._deferredRotationUpdate.y += this.cameraRotation.y * Yq, !this.noRotationConstraint) {
                const qq = 1.570796;
                this._deferredRotationUpdate.x > qq && (this._deferredRotationUpdate.x = qq), this._deferredRotationUpdate.x < -qq && (this._deferredRotationUpdate.x = -qq)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.WG(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (mq.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.WG(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.A4(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : mq.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return mq.q.TransformNormalToRef(mq.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), mq.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Aq.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (mq.h.FromEulerVectorToRef(this.rotation, aq), Aq.b.Y.rotateByQuaternionToRef(aq, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(qq, Eq, gq) {
            if (this.ZJ().useRightHandedSystem ? mq.e.LookAtRHToRef(qq, Eq, gq, this._viewMatrix) : mq.e.LookAtLHToRef(qq, Eq, gq, this._viewMatrix), this.parent) {
              const qq = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(qq, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Eq, gq) {
            if (this.cameraRigMode !== Oq.e.RIG_MODE_NONE) {
              const gq = new qq(Eq, this.position.clone(), this.ZJ());
              return gq.isRigCamera = !0, gq.rigParent = this, this.cameraRigMode === Oq.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new mq.h), gq._cameraRigParams = {}, gq.rotationQuaternion = new mq.h), gq.mode = this.mode, gq.orthoLeft = this.orthoLeft, gq.orthoRight = this.orthoRight, gq.orthoTop = this.orthoTop, gq.orthoBottom = this.orthoBottom, gq
            }
            return null
          }
          _updateRigCameras() {
            const qq = this._rigCameras[0],
              Eq = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Oq.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Oq.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Oq.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const gq = this.cameraRigMode === Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Yq = this.cameraRigMode === Oq.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * gq, qq), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Yq, Eq);
                break
              }
              case Oq.e.RIG_MODE_VR:
                qq.rotationQuaternion && Eq.rotationQuaternion && this.rotationQuaternion ? (qq.rotationQuaternion.WG(this.rotationQuaternion), Eq.rotationQuaternion.WG(this.rotationQuaternion)) : (qq.rotation.WG(this.rotation), Eq.rotation.WG(this.rotation)), qq.position.WG(this.position), Eq.position.WG(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Eq, gq) {
            this.getTarget().subtractToRef(this.position, qq._TargetFocalPoint), qq._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Yq = qq._TargetFocalPoint.addInPlace(this.position);
            mq.e.TranslationToRef(-Yq.x, -Yq.y, -Yq.z, qq._TargetTransformMatrix), qq._TargetTransformMatrix.multiplyToRef(mq.e.RotationAxis(gq.upVector, Eq), qq._RigCamTransformMatrix), mq.e.TranslationToRef(Yq.x, Yq.y, Yq.z, qq._TargetTransformMatrix), qq._RigCamTransformMatrix.multiplyToRef(qq._TargetTransformMatrix, qq._RigCamTransformMatrix), mq.q.TransformCoordinatesToRef(this.position, qq._RigCamTransformMatrix, gq.position), gq.setTarget(Yq)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.I)()], cq = [(0, lq.M)()], uq = [(0, lq.B)("lockedTargetId")], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: qq => "updateUpVectorFromRotation" in qq,
              get: qq => qq.updateUpVectorFromRotation,
              set: (qq, Eq) => {
                qq.updateUpVectorFromRotation = Eq
              }
            },
            metadata: Oq
          }, Vq, dq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: qq => "rotation" in qq,
              get: qq => qq.rotation,
              set: (qq, Eq) => {
                qq.rotation = Eq
              }
            },
            metadata: Oq
          }, jq, Hq), (0, Yq.f)(null, null, cq, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: qq => "speed" in qq,
              get: qq => qq.speed,
              set: (qq, Eq) => {
                qq.speed = Eq
              }
            },
            metadata: Oq
          }, oq, Pq), (0, Yq.f)(null, null, uq, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: qq => "lockedTarget" in qq,
              get: qq => qq.lockedTarget,
              set: (qq, Eq) => {
                qq.lockedTarget = Eq
              }
            },
            metadata: Oq
          }, Qq, yq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq._RigCamTransformMatrix = new mq.e, qq._TargetTransformMatrix = new mq.e, qq._TargetFocalPoint = new mq.q, qq
      })(),
      dq = !1;

    function jq() {
      dq || (dq = !0, cq.c.AddNodeConstructor("TargetCamera", ((qq, Eq) => () => new Vq(qq, mq.q.Zero(), Eq))))
    }
  },
  39714: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(39653);
    let lq = !1;

    function Oq() {
      lq || (lq = !0, Yq.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Yq.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Yq.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Yq.b.prototype.getAspectRatio = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = qq.viewport;
        return this.getRenderWidth(Eq) * gq.width / (this.getRenderHeight(Eq) * gq.height)
      }, Yq.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Yq.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39794: (qq, Eq, gq) => {
    var Yq = gq(39653),
      lq = gq(39799);
    let Oq = !1;
    Oq || (Oq = !0, (0, lq.D)(), Yq.b.prototype._loadFileAsync = async function(qq, Eq, gq) {
      return await new Promise(((Yq, lq) => {
        this._loadFile(qq, (qq => {
          Yq(qq)
        }), void 0, Eq, gq, ((qq, Eq) => {
          lq(Eq)
        }))
      }))
    })
  },
  39789: (qq, Eq, gq) => {
    (0, gq(39717).d)()
  },
  39717: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(39653);
    let lq = !1;

    function Oq() {
      lq || (lq = !0, Yq.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Yq.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Yq.b.prototype.createRenderPassId = function(qq) {
        const Eq = ++Yq.b._RenderPassIdCounter;
        return this._renderPassNames[Eq] = qq ?? "NONAME", Eq
      }, Yq.b.prototype.releaseRenderPassId = function(qq) {
        this._renderPassNames[qq] = void 0;
        for (let Eq = 0; Eq < this.scenes.length; ++Eq) {
          const gq = this.scenes[Eq];
          for (let Eq = 0; Eq < gq.meshes.length; ++Eq) {
            const Yq = gq.meshes[Eq];
            if (Yq._releaseRenderPassId(qq), Yq.fn)
              for (let Eq = 0; Eq < Yq.fn.length; ++Eq) {
                Yq.fn[Eq]._removeDrawWrapper(qq)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(qq)
      })
    }
  },
  39827: (qq, Eq, gq) => {
    var Yq = gq(39830),
      lq = gq(39653);
    let Oq = !1;
    Oq || (Oq = !0, lq.b.GetCompatibleTextureLoader = Yq.b)
  },
  39721: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(39608);
    let lq = !1;

    function Oq() {
      lq || (lq = !0, Yq.ThinEngine.prototype.setAlphaMode = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[gq] === qq) {
          if (!Eq) {
            const Eq = 0 === qq;
            this.depthCullingState.depthMask !== Eq && (this.depthCullingState.depthMask = Eq)
          }
          return
        }
        const Yq = 0 === qq;
        this._alphaState.setAlphaBlend(!Yq, gq), this._alphaState.setAlphaMode(qq, gq), Eq || (this.depthCullingState.depthMask = Yq), this._alphaMode[gq] = qq
      })
    }
  },
  39732: (qq, Eq, gq) => {
    var Yq = gq(39593),
      lq = gq(38653),
      Oq = gq(39608),
      mq = gq(39736),
      xq = gq(39703);
    class Aq extends mq.e {
      setDepthStencilTexture(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(qq, Eq), !qq) return;
        const gq = this._engine,
          Yq = this._context,
          lq = qq._hardwareTexture;
        if (lq && qq._autoMSAAManagement && this._MSAAFramebuffer) {
          const Eq = gq._currentFramebuffer;
          gq._bindUnboundFramebuffer(this._MSAAFramebuffer), Yq.framebufferRenderbuffer(Yq.FRAMEBUFFER, (0, xq.e)(qq.format) ? Yq.DEPTH_STENCIL_ATTACHMENT : Yq.DEPTH_ATTACHMENT, Yq.RENDERBUFFER, lq.getMSAARenderBuffer()), gq._bindUnboundFramebuffer(Eq)
        }
      }
      constructor(qq, Eq, gq, Yq, lq) {
        super(qq, Eq, gq, Yq), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = lq
      }
      _cloneRenderTargetWrapper() {
        let qq;
        return this._colorTextureArray && this._depthStencilTextureArray ? (qq = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), qq.texture.isReady = !0) : qq = super._cloneRenderTargetWrapper(), qq
      }
      _swapRenderTargetWrapper(qq) {
        super._swapRenderTargetWrapper(qq), qq._framebuffer = this._framebuffer, qq._depthStencilBuffer = this._depthStencilBuffer, qq._MSAAFramebuffer = this._MSAAFramebuffer, qq._colorTextureArray = this._colorTextureArray, qq._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const qq = this._engine,
            Eq = qq._currentFramebuffer,
            gq = this._context;
          qq._bindUnboundFramebuffer(this._framebuffer), gq.framebufferRenderbuffer(gq.FRAMEBUFFER, gq.DEPTH_STENCIL_ATTACHMENT, gq.RENDERBUFFER, null), gq.framebufferRenderbuffer(gq.FRAMEBUFFER, gq.DEPTH_ATTACHMENT, gq.RENDERBUFFER, null), gq.framebufferRenderbuffer(gq.FRAMEBUFFER, gq.STENCIL_ATTACHMENT, gq.RENDERBUFFER, null), qq._bindUnboundFramebuffer(Eq), gq.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(qq, Eq, gq, Yq, lq, Oq)
      }
      shareDepth(qq) {
        super.shareDepth(qq);
        const Eq = this._context,
          gq = this._depthStencilBuffer,
          Yq = qq._MSAAFramebuffer || qq._framebuffer,
          lq = this._engine;
        qq._depthStencilBuffer && qq._depthStencilBuffer !== gq && Eq.deleteRenderbuffer(qq._depthStencilBuffer), qq._depthStencilBuffer = gq;
        const Oq = qq._generateStencilBuffer ? Eq.DEPTH_STENCIL_ATTACHMENT : Eq.DEPTH_ATTACHMENT;
        lq._bindUnboundFramebuffer(Yq), Eq.framebufferRenderbuffer(Eq.FRAMEBUFFER, Oq, Eq.RENDERBUFFER, gq), lq._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const lq = qq._hardwareTexture;
        if (!lq) return;
        const Oq = this._framebuffer,
          mq = this._engine,
          xq = mq._currentFramebuffer;
        let Aq;
        if (mq._bindUnboundFramebuffer(Oq), mq.Ra > 1) {
          const Oq = this._context;
          Aq = Oq["COLOR_ATTACHMENT" + Eq], qq.is2DArray || qq.is3D ? (gq = gq ?? this.layerIndices?.[Eq] ?? 0, Oq.framebufferTextureLayer(Oq.FRAMEBUFFER, Aq, lq.underlyingResource, Yq, gq)) : qq.isCube ? (gq = gq ?? this.faceIndices?.[Eq] ?? 0, Oq.framebufferTexture2D(Oq.FRAMEBUFFER, Aq, Oq.TEXTURE_CUBE_MAP_POSITIVE_X + gq, lq.underlyingResource, Yq)) : Oq.framebufferTexture2D(Oq.FRAMEBUFFER, Aq, Oq.TEXTURE_2D, lq.underlyingResource, Yq)
        } else {
          const qq = this._context;
          Aq = qq["COLOR_ATTACHMENT" + Eq + "_WEBGL"];
          const Oq = void 0 !== gq ? qq.TEXTURE_CUBE_MAP_POSITIVE_X + gq : qq.TEXTURE_2D;
          qq.framebufferTexture2D(qq.FRAMEBUFFER, Aq, Oq, lq.underlyingResource, Yq)
        }
        if (qq._autoMSAAManagement && this._MSAAFramebuffer) {
          const qq = this._context;
          mq._bindUnboundFramebuffer(this._MSAAFramebuffer), qq.framebufferRenderbuffer(qq.FRAMEBUFFER, Aq, qq.RENDERBUFFER, lq.getMSAARenderBuffer())
        }
        mq._bindUnboundFramebuffer(xq)
      }
      setTexture(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(qq, Eq, gq), this._bindTextureRenderTarget(qq, Eq)
      }
      setLayerAndFaceIndices(qq, Eq) {
        if (super.setLayerAndFaceIndices(qq, Eq), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const gq = this._attachments?.length ?? this.textures.length;
        for (let Yq = 0; Yq < gq; Yq++) {
          const qq = this.textures[Yq];
          qq && (qq.is2DArray || qq.is3D ? this._bindTextureRenderTarget(qq, Yq, this.layerIndices[Yq]) : qq.isCube ? this._bindTextureRenderTarget(qq, Yq, this.faceIndices[Yq]) : this._bindTextureRenderTarget(qq, Yq))
        }
      }
      setLayerAndFaceIndex() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(qq, Eq, gq), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Yq = this.textures[qq];
        Yq.is2DArray || Yq.is3D ? this._bindTextureRenderTarget(this.textures[qq], qq, this.layerIndices[qq]) : Yq.isCube && this._bindTextureRenderTarget(this.textures[qq], qq, this.faceIndices[qq])
      }
      resolveMSAATextures() {
        const qq = this._engine,
          Eq = qq._currentFramebuffer;
        qq._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), qq._bindUnboundFramebuffer(Eq)
      }
      dispose() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Eq = this._context;
        qq || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Eq.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Eq.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Eq.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(qq)
      }
    }
    let cq = !1;
    cq || (cq = !0, Oq.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(qq, Eq, gq) {
      const Yq = new Aq(qq, Eq, gq, this, this._gl);
      return this._renderTargetWrapperCache.push(Yq), Yq
    }, Oq.ThinEngine.prototype.createRenderTargetTexture = function(qq, Eq) {
      const gq = this._createHardwareRenderTargetWrapper(!1, !1, qq);
      let Yq, lq, Oq = !0,
        mq = !1,
        xq = !1,
        Aq = 1;
      void 0 !== Eq && "object" === typeof Eq && (Oq = Eq.generateDepthBuffer ?? !0, mq = !!Eq.generateStencilBuffer, xq = !!Eq.noColorAttachment, Yq = Eq.colorAttachment, Aq = Eq.samples ?? 1, lq = Eq.label);
      const cq = Yq || (xq ? null : this._createInternalTexture(qq, Eq, !0, 5)),
        uq = qq.width || qq,
        Bq = qq.height || qq,
        Wq = this._currentFramebuffer,
        Nq = this._gl,
        aq = Nq.createFramebuffer();
      if (this._bindUnboundFramebuffer(aq), gq._depthStencilBuffer = this._setupFramebufferDepthAttachments(mq, Oq, uq, Bq), !cq || cq.is2DArray || cq.is3D || Nq.framebufferTexture2D(Nq.FRAMEBUFFER, Nq.COLOR_ATTACHMENT0, Nq.TEXTURE_2D, cq._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Wq), gq.label = lq ?? "RenderTargetWrapper", gq._framebuffer = aq, gq._generateDepthBuffer = Oq, gq._generateStencilBuffer = mq, gq.setTextures(cq), Yq) {
        if (gq._samples = Yq.samples, Yq.samples > 1) {
          const qq = Yq._hardwareTexture.getMSAARenderBuffer(0);
          gq._MSAAFramebuffer = Nq.createFramebuffer(), this._bindUnboundFramebuffer(gq._MSAAFramebuffer), Nq.framebufferRenderbuffer(Nq.FRAMEBUFFER, Nq.COLOR_ATTACHMENT0, Nq.RENDERBUFFER, qq), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(gq, Aq);
      return gq
    }, Oq.ThinEngine.prototype._createDepthStencilTexture = function(qq, Eq, gq) {
      const Oq = this._gl,
        mq = qq.layers || 0,
        Aq = qq.depth || 0;
      let cq = Oq.TEXTURE_2D;
      0 !== mq ? cq = Oq.TEXTURE_2D_ARRAY : 0 !== Aq && (cq = Oq.TEXTURE_3D);
      const uq = new Yq.c(this, 12);
      if (uq.label = Eq.label, !this._caps.depthTextureExtension) return lq.b.Error("Depth texture is not supported by your browser or hardware."), uq;
      const Bq = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Eq
      };
      if (this._bindTextureDirectly(cq, uq, !0), this._setupDepthStencilTexture(uq, qq, 0 !== Bq.comparisonFunction && Bq.bilinearFiltering, Bq.comparisonFunction, Bq.samples), void 0 !== Bq.depthTextureFormat) {
        if (15 !== Bq.depthTextureFormat && 16 !== Bq.depthTextureFormat && 17 !== Bq.depthTextureFormat && 13 !== Bq.depthTextureFormat && 14 !== Bq.depthTextureFormat && 18 !== Bq.depthTextureFormat) return lq.b.Error(`Depth texture ${Bq.depthTextureFormat} format is not supported.`), uq;
        uq.format = Bq.depthTextureFormat
      } else uq.format = Bq.generateStencil ? 13 : 16;
      const Wq = (0, xq.e)(uq.format),
        Nq = this._getWebGLTextureTypeFromDepthTextureFormat(uq.format),
        aq = Wq ? Oq.DEPTH_STENCIL : Oq.DEPTH_COMPONENT,
        Vq = this._getInternalFormatFromDepthTextureFormat(uq.format, !0, Wq);
      return uq.is2DArray ? Oq.texImage3D(cq, 0, Vq, uq.width, uq.height, mq, 0, aq, Nq, null) : uq.is3D ? Oq.texImage3D(cq, 0, Vq, uq.width, uq.height, Aq, 0, aq, Nq, null) : Oq.texImage2D(cq, 0, Vq, uq.width, uq.height, 0, aq, Nq, null), this._bindTextureDirectly(cq, null), this._internalTexturesCache.push(uq), gq._depthStencilBuffer && (Oq.deleteRenderbuffer(gq._depthStencilBuffer), gq._depthStencilBuffer = null), this._bindUnboundFramebuffer(gq._MSAAFramebuffer ?? gq._framebuffer), gq._generateStencilBuffer = Wq, gq._depthStencilTextureWithStencil = Wq, gq._depthStencilBuffer = this._setupFramebufferDepthAttachments(gq._generateStencilBuffer, gq._generateDepthBuffer, gq.width, gq.height, gq.samples, uq.format), this._bindUnboundFramebuffer(null), uq
    }, Oq.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(qq, Eq) {
      if (this.Ra < 2 || !qq) return 1;
      if (qq.samples === Eq) return Eq;
      const gq = this._gl;
      Eq = Math.min(Eq, this.getCaps().maxMSAASamples), qq._depthStencilBuffer && (gq.deleteRenderbuffer(qq._depthStencilBuffer), qq._depthStencilBuffer = null), qq._MSAAFramebuffer && (gq.deleteFramebuffer(qq._MSAAFramebuffer), qq._MSAAFramebuffer = null);
      const Yq = qq.texture?._hardwareTexture;
      if (Yq?.releaseMSAARenderBuffers(), qq.texture && Eq > 1 && "function" === typeof gq.renderbufferStorageMultisample) {
        const lq = gq.createFramebuffer();
        if (!lq) throw new Error("Unable to create multi sampled framebuffer");
        qq._MSAAFramebuffer = lq, this._bindUnboundFramebuffer(qq._MSAAFramebuffer);
        const Oq = this._createRenderBuffer(qq.texture.width, qq.texture.height, Eq, -1, this._getRGBABufferInternalSizedFormat(qq.texture.type, qq.texture.format, qq.texture._useSRGBBuffer), gq.COLOR_ATTACHMENT0, !1);
        if (!Oq) throw new Error("Unable to create multi sampled framebuffer");
        Yq?.addMSAARenderBuffer(Oq)
      }
      this._bindUnboundFramebuffer(qq._MSAAFramebuffer ?? qq._framebuffer), qq.texture && (qq.texture.samples = Eq), qq._samples = Eq;
      const lq = qq._depthStencilTexture ? qq._depthStencilTexture.format : void 0;
      return qq._depthStencilBuffer = this._setupFramebufferDepthAttachments(qq._generateStencilBuffer, qq._generateDepthBuffer, qq.width, qq.height, Eq, lq), this._bindUnboundFramebuffer(null), Eq
    }, Oq.ThinEngine.prototype._setupDepthStencilTexture = function(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Oq = Eq.width ?? Eq,
        mq = Eq.height ?? Eq,
        xq = Eq.layers || 0,
        Aq = Eq.depth || 0;
      qq.baseWidth = Oq, qq.baseHeight = mq, qq.width = Oq, qq.height = mq, qq.is2DArray = xq > 0, qq.depth = xq || Aq, qq.isReady = !0, qq.samples = lq, qq.generateMipMaps = !1, qq.samplingMode = gq ? 2 : 1, qq.type = 0, qq._comparisonFunction = Yq;
      const cq = this._gl,
        uq = this._getTextureTarget(qq),
        Bq = this._getSamplingParameters(qq.samplingMode, !1);
      cq.texParameteri(uq, cq.TEXTURE_MAG_FILTER, Bq.mag), cq.texParameteri(uq, cq.TEXTURE_MIN_FILTER, Bq.min), cq.texParameteri(uq, cq.TEXTURE_WRAP_S, cq.CLAMP_TO_EDGE), cq.texParameteri(uq, cq.TEXTURE_WRAP_T, cq.CLAMP_TO_EDGE), this.Ra > 1 && (0 === Yq ? (cq.texParameteri(uq, cq.TEXTURE_COMPARE_FUNC, 515), cq.texParameteri(uq, cq.TEXTURE_COMPARE_MODE, cq.NONE)) : (cq.texParameteri(uq, cq.TEXTURE_COMPARE_FUNC, Yq), cq.texParameteri(uq, cq.TEXTURE_COMPARE_MODE, cq.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39585: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq.d
    });
    var Yq = gq(39587);
    (0, gq(39721).b)();
    var lq = gq(39608);
    let Oq = !1;
    ! function() {
      if (Oq) return;
      Oq = !0;
      const qq = new WeakMap,
        Eq = new WeakMap,
        gq = new WeakMap,
        Yq = new WeakMap;
      lq.ThinEngine.prototype.getAlphaToCoverage = function() {
        return qq.get(this) ?? !1
      }, lq.ThinEngine.prototype.setAlphaToCoverage = function(gq) {
        (qq.get(this) !== gq || this._gl && Eq.get(this) !== this._gl) && (qq.set(this, gq), this._gl && (gq ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Eq.set(this, this._gl)))
      }, Object.defineProperty(lq.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Yq.get(this) !== this._gl && (gq.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Yq.set(this, this._gl)), gq.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var mq = gq(39593),
      xq = gq(38653),
      Aq = gq(39696);
    let cq = !1;
    ! function() {
      function qq(qq, Eq, gq, Yq) {
        let lq, Oq = 1;
        1 === Yq ? lq = new Float32Array(Eq * gq * 4) : 2 === Yq ? (lq = new Uint16Array(Eq * gq * 4), Oq = 15360) : lq = 7 === Yq ? new Uint32Array(Eq * gq * 4) : new Uint8Array(Eq * gq * 4);
        for (let mq = 0; mq < Eq; mq++)
          for (let Yq = 0; Yq < gq; Yq++) {
            const gq = 3 * (Yq * Eq + mq),
              xq = 4 * (Yq * Eq + mq);
            lq[xq + 0] = qq[gq + 0], lq[xq + 1] = qq[gq + 1], lq[xq + 2] = qq[gq + 2], lq[xq + 3] = Oq
          }
        return lq
      }

      function Eq(qq) {
        return function(Eq, gq, Yq, lq, Oq, xq, Aq, cq) {
          let uq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Wq = qq ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Nq = qq ? 10 : 11,
            aq = new mq.c(this, Nq);
          aq.baseWidth = gq, aq.baseHeight = Yq, aq.baseDepth = lq, aq.width = gq, aq.height = Yq, aq.depth = lq, aq.format = Oq, aq.type = Bq, aq.generateMipMaps = xq, aq.samplingMode = cq, qq ? aq.is3D = !0 : aq.is2DArray = !0, this._doNotHandleContextLost || (aq._bufferView = Eq), qq ? this.updateRawTexture3D(aq, Eq, Oq, Aq, uq, Bq) : this.updateRawTexture2DArray(aq, Eq, Oq, Aq, uq, Bq), this._bindTextureDirectly(Wq, aq, !0);
          const Vq = this._getSamplingParameters(cq, xq);
          return this._gl.texParameteri(Wq, this._gl.TEXTURE_MAG_FILTER, Vq.mag), this._gl.texParameteri(Wq, this._gl.TEXTURE_MIN_FILTER, Vq.min), xq && this._gl.generateMipmap(Wq), this._bindTextureDirectly(Wq, null), this._internalTexturesCache.push(aq), aq
        }
      }

      function gq(qq) {
        return function(Eq, gq, Yq, lq) {
          let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const xq = qq ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Aq = this._getWebGLTextureType(mq),
            cq = this._getInternalFormat(Yq),
            uq = this._getRGBABufferInternalSizedFormat(mq, Yq);
          this._bindTextureDirectly(xq, Eq, !0), this._unpackFlipY(void 0 === lq || !!lq), this._doNotHandleContextLost || (Eq._bufferView = gq, Eq.format = Yq, Eq.invertY = lq, Eq._compression = Oq), Eq.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Oq && gq ? this._gl.compressedTexImage3D(xq, 0, this.getCaps().s3tc[Oq], Eq.width, Eq.height, Eq.depth, 0, gq) : this._gl.texImage3D(xq, 0, uq, Eq.width, Eq.height, Eq.depth, 0, cq, Aq, gq), Eq.generateMipMaps && this._gl.generateMipmap(xq), this._bindTextureDirectly(xq, null), Eq.isReady = !0
        }
      }
      cq || (cq = !0, lq.ThinEngine.prototype.updateRawTexture = function(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!qq) return;
        const xq = this._getRGBABufferInternalSizedFormat(Oq, gq, mq),
          Aq = this._getInternalFormat(gq),
          cq = this._getWebGLTextureType(Oq);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, qq, !0), this._unpackFlipY(void 0 === Yq || !!Yq), this._doNotHandleContextLost || (qq._bufferView = Eq, qq.format = gq, qq.type = Oq, qq.invertY = Yq, qq._compression = lq), qq.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), lq && Eq ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[lq], qq.width, qq.height, 0, Eq) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, xq, qq.width, qq.height, 0, Aq, cq, Eq), qq.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), qq.isReady = !0
      }, lq.ThinEngine.prototype.createRawTexture = function(qq, Eq, gq, Yq, lq, Oq, xq) {
        let Aq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          uq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Bq = new mq.c(this, 3);
        Bq.baseWidth = Eq, Bq.baseHeight = gq, Bq.width = Eq, Bq.height = gq, Bq.format = Yq, Bq.generateMipMaps = lq, Bq.samplingMode = xq, Bq.invertY = Oq, Bq._compression = Aq, Bq.type = cq, Bq._useSRGBBuffer = this._getUseSRGBBuffer(uq, !lq), this._doNotHandleContextLost || (Bq._bufferView = qq), this.updateRawTexture(Bq, qq, Yq, Oq, Aq, cq, Bq._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Bq, !0);
        const Wq = this._getSamplingParameters(xq, lq);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Wq.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Wq.min), lq && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Bq), Bq
      }, lq.ThinEngine.prototype.createRawCubeTexture = function(qq, Eq, gq, Yq, lq, Oq, cq) {
        let uq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Bq = this._gl,
          Wq = new mq.c(this, 8);
        Wq.isCube = !0, Wq.format = gq, Wq.type = Yq, this._doNotHandleContextLost || (Wq._bufferViewArray = qq);
        const Nq = this._getWebGLTextureType(Yq);
        let aq = this._getInternalFormat(gq);
        aq === Bq.RGB && (aq = Bq.RGBA), Nq !== Bq.FLOAT || this._caps.textureFloatLinearFiltering ? Nq !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Nq !== Bq.FLOAT || this._caps.textureFloatRender ? Nq !== Bq.HALF_FLOAT || this._caps.colorBufferFloat || (lq = !1, xq.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (lq = !1, xq.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (lq = !1, cq = 1, xq.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (lq = !1, cq = 1, xq.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Vq = Eq,
          dq = Vq;
        Wq.width = Vq, Wq.height = dq, Wq.invertY = Oq, Wq._compression = uq;
        if (!this.needPOTTextures || (0, Aq.k)(Wq.width) && (0, Aq.k)(Wq.height) || (lq = !1), qq) this.updateRawCubeTexture(Wq, qq, gq, Yq, Oq, uq);
        else {
          const qq = this._getRGBABufferInternalSizedFormat(Yq),
            Eq = 0;
          this._bindTextureDirectly(Bq.TEXTURE_CUBE_MAP, Wq, !0);
          for (let gq = 0; gq < 6; gq++) uq ? Bq.compressedTexImage2D(Bq.TEXTURE_CUBE_MAP_POSITIVE_X + gq, Eq, this.getCaps().s3tc[uq], Wq.width, Wq.height, 0, void 0) : Bq.texImage2D(Bq.TEXTURE_CUBE_MAP_POSITIVE_X + gq, Eq, qq, Wq.width, Wq.height, 0, aq, Nq, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Wq, !0), qq && lq && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const jq = this._getSamplingParameters(cq, lq);
        return Bq.texParameteri(Bq.TEXTURE_CUBE_MAP, Bq.TEXTURE_MAG_FILTER, jq.mag), Bq.texParameteri(Bq.TEXTURE_CUBE_MAP, Bq.TEXTURE_MIN_FILTER, jq.min), Bq.texParameteri(Bq.TEXTURE_CUBE_MAP, Bq.TEXTURE_WRAP_S, Bq.CLAMP_TO_EDGE), Bq.texParameteri(Bq.TEXTURE_CUBE_MAP, Bq.TEXTURE_WRAP_T, Bq.CLAMP_TO_EDGE), this._bindTextureDirectly(Bq.TEXTURE_CUBE_MAP, null), Wq.generateMipMaps = lq, Wq.samplingMode = cq, Wq.isReady = !0, Wq
      }, lq.ThinEngine.prototype.updateRawCubeTexture = function(Eq, gq, Yq, lq, Oq) {
        let mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Eq._bufferViewArray = gq, Eq.format = Yq, Eq.type = lq, Eq.invertY = Oq, Eq._compression = mq;
        const cq = this._gl,
          uq = this._getWebGLTextureType(lq);
        let Bq = this._getInternalFormat(Yq);
        const Wq = this._getRGBABufferInternalSizedFormat(lq);
        let Nq = !1;
        Bq === cq.RGB && (Bq = cq.RGBA, Nq = !0), this._bindTextureDirectly(cq.TEXTURE_CUBE_MAP, Eq, !0), this._unpackFlipY(void 0 === Oq || !!Oq), Eq.width % 4 !== 0 && cq.pixelStorei(cq.UNPACK_ALIGNMENT, 1);
        for (let Aq = 0; Aq < 6; Aq++) {
          let Yq = gq[Aq];
          mq ? cq.compressedTexImage2D(cq.TEXTURE_CUBE_MAP_POSITIVE_X + Aq, xq, this.getCaps().s3tc[mq], Eq.width, Eq.height, 0, Yq) : (Nq && (Yq = qq(Yq, Eq.width, Eq.height, lq)), cq.texImage2D(cq.TEXTURE_CUBE_MAP_POSITIVE_X + Aq, xq, Wq, Eq.width, Eq.height, 0, Bq, uq, Yq))
        }(!this.needPOTTextures || (0, Aq.k)(Eq.width) && (0, Aq.k)(Eq.height)) && Eq.generateMipMaps && 0 === xq && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Eq.isReady = !0
      }, lq.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        let cq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          uq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Bq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Wq = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Nq = this._gl,
          aq = this.createRawCubeTexture(null, Yq, lq, Oq, !mq, Wq, Bq, null);
        gq?.addPendingData(aq), aq.url = Eq, aq.isReady = !1, this._internalTexturesCache.push(aq);
        const Vq = (qq, Eq) => {
            gq?.removePendingData(aq), uq && uq(qq ? qq.status + " " + qq.statusText : "Failed to parse texture data", Eq)
          },
          dq = async Eq => {
            if (!aq._hardwareTexture) return;
            const Yq = xq(Eq);
            if (!Yq) return;
            const mq = Yq instanceof Promise ? await Yq : Yq,
              uq = aq.width;
            if (Aq) {
              const Eq = this._getWebGLTextureType(Oq);
              let gq = this._getInternalFormat(lq);
              const Yq = this._getRGBABufferInternalSizedFormat(Oq);
              let xq = !1;
              gq === Nq.RGB && (gq = Nq.RGBA, xq = !0), this._bindTextureDirectly(Nq.TEXTURE_CUBE_MAP, aq, !0), this._unpackFlipY(!1);
              const cq = Aq(mq);
              for (let lq = 0; lq < cq.length; lq++) {
                const mq = uq >> lq;
                for (let Aq = 0; Aq < 6; Aq++) {
                  let uq = cq[lq][Aq];
                  xq && (uq = qq(uq, mq, mq, Oq)), Nq.texImage2D(Aq, lq, Yq, mq, mq, 0, gq, Eq, uq)
                }
              }
              this._bindTextureDirectly(Nq.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(aq, mq, lq, Oq, Wq);
            aq.isReady = !0, gq?.removePendingData(aq), aq.onLoadedObservable.notifyObservers(aq), aq.onLoadedObservable.clear(), cq && cq()
          };
        return this._loadFile(Eq, (qq => {
          dq(qq).catch((qq => {
            Vq(void 0, qq)
          }))
        }), void 0, gq?.offlineProvider, !0, Vq), aq
      }, lq.ThinEngine.prototype.createRawTexture2DArray = Eq(!1), lq.ThinEngine.prototype.createRawTexture3D = Eq(!0), lq.ThinEngine.prototype.updateRawTexture2DArray = gq(!1), lq.ThinEngine.prototype.updateRawTexture3D = gq(!0))
    }();
    var uq = gq(39630);
    let Bq = !1;
    Bq || (Bq = !0, lq.ThinEngine.prototype._readTexturePixelsSync = function(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        cq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Bq = this._gl;
      if (!Bq) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const qq = Bq.createFramebuffer();
        if (!qq) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = qq
      }
      Bq.bindFramebuffer(Bq.FRAMEBUFFER, this._dummyFramebuffer), Yq > -1 && (qq.is2DArray || qq.is3D) ? Bq.framebufferTextureLayer(Bq.FRAMEBUFFER, Bq.COLOR_ATTACHMENT0, qq._hardwareTexture?.underlyingResource, lq, Yq) : Yq > -1 ? Bq.framebufferTexture2D(Bq.FRAMEBUFFER, Bq.COLOR_ATTACHMENT0, Bq.TEXTURE_CUBE_MAP_POSITIVE_X + Yq, qq._hardwareTexture?.underlyingResource, lq) : Bq.framebufferTexture2D(Bq.FRAMEBUFFER, Bq.COLOR_ATTACHMENT0, Bq.TEXTURE_2D, qq._hardwareTexture?.underlyingResource, lq);
      let Wq = void 0 !== qq.type ? this._getWebGLTextureType(qq.type) : Bq.UNSIGNED_BYTE;
      return xq ? Oq || (Oq = (0, uq.p)(qq.type, 4 * Eq * gq)) : Wq === Bq.UNSIGNED_BYTE ? (Oq || (Oq = new Uint8Array(4 * Eq * gq)), Wq = Bq.UNSIGNED_BYTE) : (Oq || (Oq = new Float32Array(4 * Eq * gq)), Wq = Bq.FLOAT), mq && this.flushFramebuffer(), Bq.readPixels(Aq, cq, Eq, gq, Bq.RGBA, Wq, Oq), Bq.bindFramebuffer(Bq.FRAMEBUFFER, this._currentFramebuffer), Oq
    }, lq.ThinEngine.prototype._readTexturePixels = function(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        cq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq))
    }), (0, gq(39725).e)();
    let Wq = !1;
    Wq || (Wq = !0, lq.ThinEngine.prototype._createDepthStencilCubeTexture = function(qq, Eq) {
      const gq = new mq.c(this, 12);
      if (gq.isCube = !0, 1 === this.Ra) return xq.b.Error("Depth cube texture is not supported by WebGL 1."), gq;
      const Yq = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Eq
        },
        lq = this._gl;
      this._bindTextureDirectly(lq.TEXTURE_CUBE_MAP, gq, !0), this._setupDepthStencilTexture(gq, qq, Yq.bilinearFiltering, Yq.comparisonFunction);
      for (let Oq = 0; Oq < 6; Oq++) Yq.generateStencil ? lq.texImage2D(lq.TEXTURE_CUBE_MAP_POSITIVE_X + Oq, 0, lq.DEPTH24_STENCIL8, qq, qq, 0, lq.DEPTH_STENCIL, lq.UNSIGNED_INT_24_8, null) : lq.texImage2D(lq.TEXTURE_CUBE_MAP_POSITIVE_X + Oq, 0, lq.DEPTH_COMPONENT24, qq, qq, 0, lq.DEPTH_COMPONENT, lq.UNSIGNED_INT, null);
      return this._bindTextureDirectly(lq.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(gq), gq
    }, lq.ThinEngine.prototype._setCubeMapTextureParams = function(qq, Eq, gq) {
      const Yq = this._gl;
      Yq.texParameteri(Yq.TEXTURE_CUBE_MAP, Yq.TEXTURE_MAG_FILTER, Yq.LINEAR), Yq.texParameteri(Yq.TEXTURE_CUBE_MAP, Yq.TEXTURE_MIN_FILTER, Eq ? Yq.LINEAR_MIPMAP_LINEAR : Yq.LINEAR), Yq.texParameteri(Yq.TEXTURE_CUBE_MAP, Yq.TEXTURE_WRAP_S, Yq.CLAMP_TO_EDGE), Yq.texParameteri(Yq.TEXTURE_CUBE_MAP, Yq.TEXTURE_WRAP_T, Yq.CLAMP_TO_EDGE), qq.samplingMode = Eq ? 3 : 2, Eq && this.getCaps().textureMaxLevel && void 0 !== gq && gq > 0 && (Yq.texParameteri(Yq.TEXTURE_CUBE_MAP, Yq.TEXTURE_MAX_LEVEL, gq), qq._maxLodLevel = gq), this._bindTextureDirectly(Yq.TEXTURE_CUBE_MAP, null)
    }, lq.ThinEngine.prototype.createCubeTexture = function(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mq = arguments.length > 6 ? arguments[6] : void 0,
        cq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        uq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Wq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Nq = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        aq = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Vq = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const dq = this._gl;
      return this.createCubeTextureBase(qq, Eq, gq, !!Yq, lq, Oq, mq, cq, uq, Bq, Wq, Nq, (qq => this._bindTextureDirectly(dq.TEXTURE_CUBE_MAP, qq, !0)), ((qq, Eq) => {
        const gq = this.needPOTTextures ? (0, Aq.g)(Eq[0].width, this._caps.maxCubemapTextureSize) : Eq[0].width,
          Oq = gq,
          cq = [dq.TEXTURE_CUBE_MAP_POSITIVE_X, dq.TEXTURE_CUBE_MAP_POSITIVE_Y, dq.TEXTURE_CUBE_MAP_POSITIVE_Z, dq.TEXTURE_CUBE_MAP_NEGATIVE_X, dq.TEXTURE_CUBE_MAP_NEGATIVE_Y, dq.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(dq.TEXTURE_CUBE_MAP, qq, !0), this._unpackFlipY(!1);
        const uq = mq ? this._getInternalFormat(mq, qq._useSRGBBuffer) : qq._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : dq.RGBA;
        let Bq = mq ? this._getInternalFormat(mq) : dq.RGBA;
        qq._useSRGBBuffer && 1 === this.Ra && (Bq = uq);
        for (let Yq = 0; Yq < cq.length; Yq++)
          if (Eq[Yq].width !== gq || Eq[Yq].height !== Oq) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void xq.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = gq, this._workingCanvas.height = Oq, this._workingContext.drawImage(Eq[Yq], 0, 0, Eq[Yq].width, Eq[Yq].height, 0, 0, gq, Oq), dq.texImage2D(cq[Yq], 0, uq, Bq, dq.UNSIGNED_BYTE, this._workingCanvas)
          } else dq.texImage2D(cq[Yq], 0, uq, Bq, dq.UNSIGNED_BYTE, Eq[Yq]);
        Yq || dq.generateMipmap(dq.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(qq, !Yq), qq.width = gq, qq.height = Oq, qq.isReady = !0, mq && (qq.format = mq), qq.onLoadedObservable.notifyObservers(qq), qq.onLoadedObservable.clear(), lq && lq()
      }), !!aq, Vq)
    }, lq.ThinEngine.prototype.generateMipMapsForCubemap = function(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (qq.generateMipMaps) {
        const gq = this._gl;
        this._bindTextureDirectly(gq.TEXTURE_CUBE_MAP, qq, !0), gq.generateMipmap(gq.TEXTURE_CUBE_MAP), Eq && this._bindTextureDirectly(gq.TEXTURE_CUBE_MAP, null)
      }
    });
    gq(39732);
    let Nq = !1;
    Nq || (Nq = !0, lq.ThinEngine.prototype.setDepthStencilTexture = function(qq, Eq, gq, Yq) {
      void 0 !== qq && (Eq && (this._boundUniforms[qq] = Eq), gq && gq.depthStencilTexture ? this._setTexture(qq, gq, !1, !0, Yq) : this._setTexture(qq, null, void 0, void 0, Yq))
    });
    let aq = !1;
    aq || (aq = !0, lq.ThinEngine.prototype.createRenderTargetCubeTexture = function(qq, Eq) {
      const gq = this._createHardwareRenderTargetWrapper(!1, !0, qq),
        Yq = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Eq
        };
      Yq.generateStencilBuffer = Yq.generateDepthBuffer && Yq.generateStencilBuffer, (1 !== Yq.type || this._caps.textureFloatLinearFiltering) && (2 !== Yq.type || this._caps.textureHalfFloatLinearFiltering) || (Yq.samplingMode = 1);
      const lq = this._gl,
        Oq = new mq.c(this, 5);
      this._bindTextureDirectly(lq.TEXTURE_CUBE_MAP, Oq, !0);
      const Aq = this._getSamplingParameters(Yq.samplingMode, Yq.generateMipMaps);
      1 !== Yq.type || this._caps.textureFloat || (Yq.type = 0, xq.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), lq.texParameteri(lq.TEXTURE_CUBE_MAP, lq.TEXTURE_MAG_FILTER, Aq.mag), lq.texParameteri(lq.TEXTURE_CUBE_MAP, lq.TEXTURE_MIN_FILTER, Aq.min), lq.texParameteri(lq.TEXTURE_CUBE_MAP, lq.TEXTURE_WRAP_S, lq.CLAMP_TO_EDGE), lq.texParameteri(lq.TEXTURE_CUBE_MAP, lq.TEXTURE_WRAP_T, lq.CLAMP_TO_EDGE);
      for (let mq = 0; mq < 6; mq++) lq.texImage2D(lq.TEXTURE_CUBE_MAP_POSITIVE_X + mq, 0, this._getRGBABufferInternalSizedFormat(Yq.type, Yq.format), qq, qq, 0, this._getInternalFormat(Yq.format), this._getWebGLTextureType(Yq.type), null);
      const cq = lq.createFramebuffer();
      return this._bindUnboundFramebuffer(cq), gq._depthStencilBuffer = this._setupFramebufferDepthAttachments(Yq.generateStencilBuffer, Yq.generateDepthBuffer, qq, qq), Yq.generateMipMaps && lq.generateMipmap(lq.TEXTURE_CUBE_MAP), this._bindTextureDirectly(lq.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), gq._framebuffer = cq, gq._generateDepthBuffer = Yq.generateDepthBuffer, gq._generateStencilBuffer = Yq.generateStencilBuffer, Oq.width = qq, Oq.height = qq, Oq.isReady = !0, Oq.isCube = !0, Oq.samples = 1, Oq.generateMipMaps = Yq.generateMipMaps, Oq.samplingMode = Yq.samplingMode, Oq.type = Yq.type, Oq.format = Yq.format, this._internalTexturesCache.push(Oq), gq.setTextures(Oq), gq
    });
    var Vq = gq(39741),
      dq = gq(39748);
    let jq = !1;
    jq || (jq = !0, lq.ThinEngine.prototype.createPrefilteredCubeTexture = function(qq, Eq, Yq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Aq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        cq = arguments.length > 6 ? arguments[6] : void 0,
        uq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Bq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Wq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(qq, Eq, null, !1, (async qq => {
        if (!qq) return void(Oq && Oq(null));
        const Aq = qq.texture;
        if (Bq ? qq.info.sphericalPolynomial && (Aq._sphericalPolynomial = qq.info.sphericalPolynomial) : Aq._sphericalPolynomial = Aq._sphericalPolynomial ?? new Vq.d, Aq._source = 9, this.getCaps().textureLOD) return void(Oq && Oq(Aq));
        const cq = this._gl,
          uq = qq.width;
        if (!uq) return;
        const {
          DDSTools: Wq
        } = await gq.e(297).then((() => gq(41515))), Nq = [];
        for (let gq = 0; gq < 3; gq++) {
          const Oq = 1 - gq / 2,
            Bq = lq,
            aq = Math.log2(uq) * Yq + lq,
            Vq = Bq + (aq - Bq) * Oq,
            jq = Math.round(Math.min(Math.max(Vq, 0), aq)),
            Hq = new mq.c(this, 2);
          if (Hq.type = Aq.type, Hq.format = Aq.format, Hq.width = Math.pow(2, Math.max(Math.log2(uq) - jq, 0)), Hq.height = Hq.width, Hq.isCube = !0, Hq._cachedWrapU = 0, Hq._cachedWrapV = 0, this._bindTextureDirectly(cq.TEXTURE_CUBE_MAP, Hq, !0), Hq.samplingMode = 2, cq.texParameteri(cq.TEXTURE_CUBE_MAP, cq.TEXTURE_MAG_FILTER, cq.LINEAR), cq.texParameteri(cq.TEXTURE_CUBE_MAP, cq.TEXTURE_MIN_FILTER, cq.LINEAR), cq.texParameteri(cq.TEXTURE_CUBE_MAP, cq.TEXTURE_WRAP_S, cq.CLAMP_TO_EDGE), cq.texParameteri(cq.TEXTURE_CUBE_MAP, cq.TEXTURE_WRAP_T, cq.CLAMP_TO_EDGE), qq.isDDS) {
            const Eq = qq.info,
              gq = qq.data;
            this._unpackFlipY(Eq.isCompressed), Wq.UploadDDSLevels(this, Hq, gq, Eq, !0, 6, jq)
          } else xq.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(cq.TEXTURE_CUBE_MAP, null);
          const oq = new dq.d(Eq);
          oq._isCube = !0, oq._texture = Hq, Hq.isReady = !0, Nq.push(oq)
        }
        Aq._lodTextureHigh = Nq[2], Aq._lodTextureMid = Nq[1], Aq._lodTextureLow = Nq[0], Oq && Oq(Aq)
      }), Aq, cq, uq, Bq, Yq, lq, null, void 0, !1, Wq)
    });
    var Hq = gq(39683);
    let oq = !1;
    oq || (oq = !0, lq.ThinEngine.prototype.createUniformBuffer = function(qq, Eq) {
      const gq = this._gl.createBuffer();
      if (!gq) throw new Error("Unable to create uniform buffer");
      const Yq = new Hq.e(gq);
      return this.bindUniformBuffer(Yq), qq instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, qq, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(qq), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Yq.references = 1, Yq
    }, lq.ThinEngine.prototype.createDynamicUniformBuffer = function(qq, Eq) {
      const gq = this._gl.createBuffer();
      if (!gq) throw new Error("Unable to create dynamic uniform buffer");
      const Yq = new Hq.e(gq);
      return this.bindUniformBuffer(Yq), qq instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, qq, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(qq), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Yq.references = 1, Yq
    }, lq.ThinEngine.prototype.updateUniformBuffer = function(qq, Eq, gq, Yq) {
      this.bindUniformBuffer(qq), void 0 === gq && (gq = 0), void 0 === Yq ? Eq instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gq, Eq) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gq, new Float32Array(Eq)) : Eq instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Eq.subarray(gq, gq + Yq)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Eq).subarray(gq, gq + Yq)), this.bindUniformBuffer(null)
    }, lq.ThinEngine.prototype.bindUniformBuffer = function(qq) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, qq ? qq.underlyingResource : null)
    }, lq.ThinEngine.prototype.bindUniformBufferBase = function(qq, Eq, gq) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Eq, qq ? qq.underlyingResource : null)
    }, lq.ThinEngine.prototype.bindUniformBlock = function(qq, Eq, gq) {
      const Yq = qq.program,
        lq = this._gl.getUniformBlockIndex(Yq, Eq);
      4294967295 !== lq && this._gl.uniformBlockBinding(Yq, lq, gq)
    });
    var Pq = gq(39626),
      Qq = gq(39653);
    let yq = !1;
    yq || (yq = !0, Qq.b.prototype.displayLoadingUI = function() {
      if (!(0, Pq.n)()) return;
      const qq = this.loadingScreen;
      qq && qq.displayLoadingUI()
    }, Qq.b.prototype.hideLoadingUI = function() {
      if (!(0, Pq.n)()) return;
      const qq = this._loadingScreen;
      qq && qq.hideLoadingUI()
    }, Object.defineProperty(Qq.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Qq.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(qq) {
        this._loadingScreen = qq
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qq.b.prototype, "loadingUIText", {
      set: function(qq) {
        this.loadingScreen.loadingUIText = qq
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qq.b.prototype, "loadingUIBackgroundColor", {
      set: function(qq) {
        this.loadingScreen.loadingUIBackgroundColor = qq
      },
      enumerable: !0,
      configurable: !0
    })), (0, gq(39714).e)();
    let tq = !1;
    tq || (tq = !0, Qq.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Qq.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Qq.b.prototype.setDepthFunction = function(qq) {
      this._depthCullingState.depthFunc = qq
    }, Qq.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Qq.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Qq.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Qq.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Qq.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Qq.b.prototype.setDepthWrite = function(qq) {
      this._depthCullingState.depthMask = qq
    }, Qq.b.prototype.setAlphaConstants = function(qq, Eq, gq, Yq) {
      this._alphaState.setAlphaBlendConstants(qq, Eq, gq, Yq)
    }, Qq.b.prototype.getAlphaMode = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[qq]
    }, Qq.b.prototype.getAlphaEquation = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[qq]
    });
    let rq = !1;
    rq || (rq = !0, Qq.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Qq.b.prototype.setStencilBuffer = function(qq) {
      this._stencilState.stencilTest = qq
    }, Qq.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Qq.b.prototype.setStencilMask = function(qq) {
      this._stencilState.stencilMask = qq
    }, Qq.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Qq.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Qq.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Qq.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Qq.b.prototype.setStencilFunction = function(qq) {
      this._stencilState.stencilFunc = qq
    }, Qq.b.prototype.setStencilBackFunction = function(qq) {
      this._stencilState.stencilBackFunc = qq
    }, Qq.b.prototype.setStencilFunctionReference = function(qq) {
      this._stencilState.stencilFuncRef = qq
    }, Qq.b.prototype.setStencilFunctionMask = function(qq) {
      this._stencilState.stencilFuncMask = qq
    }, Qq.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Qq.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Qq.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Qq.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Qq.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Qq.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Qq.b.prototype.setStencilOperationFail = function(qq) {
      this._stencilState.stencilOpStencilFail = qq
    }, Qq.b.prototype.setStencilBackOperationFail = function(qq) {
      this._stencilState.stencilBackOpStencilFail = qq
    }, Qq.b.prototype.setStencilOperationDepthFail = function(qq) {
      this._stencilState.stencilOpDepthFail = qq
    }, Qq.b.prototype.setStencilBackOperationDepthFail = function(qq) {
      this._stencilState.stencilBackOpDepthFail = qq
    }, Qq.b.prototype.setStencilOperationPass = function(qq) {
      this._stencilState.stencilOpStencilDepthPass = qq
    }, Qq.b.prototype.setStencilBackOperationPass = function(qq) {
      this._stencilState.stencilBackOpStencilDepthPass = qq
    }, Qq.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Qq.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    gq(39789);
    let vq = !1;
    vq || (vq = !0, Qq.b.prototype.createDepthStencilTexture = function(qq, Eq, gq) {
      if (Eq.isCube) {
        const gq = qq.width || qq;
        return this._createDepthStencilCubeTexture(gq, Eq)
      }
      return this._createDepthStencilTexture(qq, Eq, gq)
    });
    gq(39794), gq(39827);
    let hq = !1;
    hq || (hq = !0, lq.ThinEngine.prototype.enableScissor = function(qq, Eq, gq, Yq) {
      const lq = this._gl;
      lq.enable(lq.SCISSOR_TEST), lq.scissor(qq, Eq, gq, Yq)
    }, lq.ThinEngine.prototype.disableScissor = function() {
      const qq = this._gl;
      qq.disable(qq.SCISSOR_TEST)
    })
  },
  39587: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Qq
    });
    var Yq = gq(39593),
      lq = gq(37153),
      Oq = gq(39608),
      mq = gq(39662);
    class xq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Aq(qq)
      }
      sampleFrame() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Eq = qq - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Eq)
          }
          this._lastFrameTimeMs = qq
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
        const qq = this._rollingFrameTime.history(0);
        return 0 === qq ? 0 : 1e3 / qq
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
    class Aq {
      constructor(qq) {
        this._samples = new Array(qq), this.reset()
      }
      add(qq) {
        let Eq;
        if (this.isSaturated()) {
          const qq = this._samples[this._pos];
          Eq = qq - this.average, this.average -= Eq / (this._sampleCount - 1), this._m2 -= Eq * (qq - this.average)
        } else this._sampleCount++;
        Eq = qq - this.average, this.average += Eq / this._sampleCount, this._m2 += Eq * (qq - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = qq, this._pos++, this._pos %= this._samples.length
      }
      history(qq) {
        if (qq >= this._sampleCount || qq >= this._samples.length) return 0;
        const Eq = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Eq - qq)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(qq) {
        const Eq = this._samples.length;
        return (qq % Eq + Eq) % Eq
      }
    }
    var cq = gq(39683),
      uq = gq(38653),
      Bq = gq(39698),
      Wq = gq(39653),
      Nq = gq(39626);

    function aq(qq) {
      const Eq = function(qq) {
        if (!(0, Nq.f)() || !document.body) return null;
        const Eq = document.createElement("span");
        Eq.textContent = "Hg", Eq.style.font = qq;
        const gq = document.createElement("div");
        gq.style.display = "inline-block", gq.style.width = "1px", gq.style.height = "0px", gq.style.verticalAlign = "bottom";
        const Yq = document.createElement("div");
        let lq, Oq;
        Yq.style.whiteSpace = "nowrap", Yq.appendChild(Eq), Yq.appendChild(gq), document.body.appendChild(Yq);
        try {
          Oq = gq.getBoundingClientRect().top - Eq.getBoundingClientRect().top, gq.style.verticalAlign = "baseline", lq = gq.getBoundingClientRect().top - Eq.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Yq)
        }
        const mq = {
          ascent: lq,
          height: Oq,
          descent: Oq - lq
        };
        return Vq(mq) ? mq : null
      }(qq);
      if (Eq) return Eq;
      const gq = function(qq) {
        let Eq = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Eq = new OffscreenCanvas(64, 64) : (0, Nq.f)() && "function" === typeof document.createElement && (Eq = document.createElement("canvas"), Eq.width = 64, Eq.height = 64);
          const gq = Eq?.getContext("2d");
          if (!gq) return null;
          gq.font = qq;
          const Yq = gq.measureText("Hg"),
            lq = Number(Yq.actualBoundingBoxAscent ?? Yq.fontBoundingBoxAscent),
            Oq = Number(Yq.actualBoundingBoxDescent ?? Yq.fontBoundingBoxDescent),
            mq = {
              ascent: lq,
              height: lq + Oq,
              descent: Oq
            };
          return Vq(mq) ? mq : null
        } catch {
          return null
        } finally {
          const qq = Eq;
          "function" === typeof qq?.dispose && qq.dispose()
        }
      }(qq);
      return gq || function(qq) {
        const Eq = Math.max(1, function(qq) {
            const Eq = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(qq || ""));
            return Eq ? Number(Eq[1]) : 16
          }(qq)),
          gq = .8 * Eq,
          Yq = .2 * Eq;
        return {
          ascent: gq,
          height: gq + Yq,
          descent: Yq
        }
      }(qq)
    }

    function Vq(qq) {
      return Number.isFinite(qq.ascent) && Number.isFinite(qq.height) && Number.isFinite(qq.descent) && qq.height > 0
    }

    function dq(qq) {
      if (qq.requestPointerLock) {
        const Eq = qq.requestPointerLock();
        Eq instanceof Promise ? Eq.then((() => {
          qq.focus()
        })).catch((() => {})) : qq.focus()
      }
    }
    var jq = gq(39712),
      Hq = gq(39644),
      oq = gq(39714),
      Pq = gq(39717);
    class Qq extends Oq.ThinEngine {
      static get NpmPackage() {
        return Wq.b.NpmPackage
      }
      static get Version() {
        return Wq.b.Version
      }
      static get Instances() {
        return lq.b.Instances
      }
      static get LastCreatedEngine() {
        return lq.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return lq.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(qq) {
        return Wq.b.DefaultLoadingScreenFactory(qq)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Qq._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, oq.e)(), (0, Pq.d)(), super(qq, Eq, gq, Yq), this._performanceMonitor = new xq, this._drawCalls = new jq.b, qq && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(qq) {
        super._sharedInit(qq),
          function(qq, Eq, gq) {
            qq._onCanvasFocus = () => {
              qq.onCanvasFocusObservable.notifyObservers(qq)
            }, qq._onCanvasBlur = () => {
              qq.onCanvasBlurObservable.notifyObservers(qq)
            }, qq._onCanvasContextMenu = Eq => {
              qq.disableContextMenu && Eq.preventDefault()
            }, Eq.addEventListener("focus", qq._onCanvasFocus), Eq.addEventListener("blur", qq._onCanvasBlur), Eq.addEventListener("contextmenu", qq._onCanvasContextMenu), qq._onBlur = () => {
              qq.disablePerformanceMonitorInBackground && qq.performanceMonitor.disable(), qq._windowIsBackground = !0
            }, qq._onFocus = () => {
              qq.disablePerformanceMonitorInBackground && qq.performanceMonitor.enable(), qq._windowIsBackground = !1
            }, qq._onCanvasPointerOut = gq => {
              document.elementFromPoint(gq.clientX, gq.clientY) !== Eq && qq.onCanvasPointerOutObservable.notifyObservers(gq)
            };
            const Yq = qq.getHostWindow();
            Yq && "function" === typeof Yq.addEventListener && (Yq.addEventListener("blur", qq._onBlur), Yq.addEventListener("focus", qq._onFocus)), Eq.addEventListener("pointerout", qq._onCanvasPointerOut), gq.doNotHandleTouchAction || function(qq) {
              qq && qq.setAttribute && (qq.setAttribute("touch-action", "none"), qq.style.touchAction = "none", qq.style.webkitTapHighlightColor = "transparent")
            }(Eq), !Wq.b.audioEngine && gq.audioEngine && Wq.b.AudioEngineFactory && (Wq.b.audioEngine = Wq.b.AudioEngineFactory(qq.getRenderingCanvas(), qq.getAudioContext(), qq.getAudioDestination())), (0, Nq.f)() && (qq._onFullscreenChange = () => {
              qq.isFullscreen = !!document.fullscreenElement, qq.isFullscreen && qq._pointerLockRequested && Eq && dq(Eq)
            }, document.addEventListener("fullscreenchange", qq._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", qq._onFullscreenChange, !1), qq._onPointerLockChange = () => {
              qq.isPointerLock = document.pointerLockElement === Eq
            }, document.addEventListener("pointerlockchange", qq._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", qq._onPointerLockChange, !1)), qq.enableOfflineSupport = void 0 !== Wq.b.OfflineProviderFactory, qq._deterministicLockstep = !!gq.deterministicLockstep, qq._lockstepMaxSteps = gq.lockstepMaxSteps || 0, qq._timeStep = gq.timeStep || 1 / 60
          }(this, qq, this._creationOptions)
      }
      resizeImageBitmap(qq, Eq, gq) {
        return function(qq, Eq, gq, Yq) {
          const lq = qq.createCanvas(gq, Yq).getContext("2d");
          if (!lq) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return lq.drawImage(Eq, 0, 0), lq.getImageData(0, 0, gq, Yq).data
        }(this, qq, Eq, gq)
      }
      async _createImageBitmapFromSource(qq, Eq) {
        return await async function(qq, Eq, gq) {
          return await new Promise(((Yq, lq) => {
            const Oq = new Image;
            Oq.onload = () => {
              Oq.decode().then((() => {
                qq.createImageBitmap(Oq, gq).then((qq => {
                  Yq(qq)
                }))
              }))
            }, Oq.onerror = () => {
              lq(`Error loading image ${Oq.src}`)
            }, Oq.src = Eq
          }))
        }(this, qq, Eq)
      }
      switchFullscreen(qq) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(qq)
      }
      enterFullscreen(qq) {
        this.isFullscreen || (this._pointerLockRequested = qq, this._renderingCanvas && function(qq) {
          const Eq = qq.requestFullscreen || qq.webkitRequestFullscreen;
          Eq && Eq.call(qq)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const qq = document;
          document.exitFullscreen ? document.exitFullscreen() : qq.webkitCancelFullScreen && qq.webkitCancelFullScreen()
        }()
      }
      setDitheringState(qq) {
        qq ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(qq) {
        qq ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(qq, Eq, gq, Yq) {
        const lq = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(qq, Eq, gq, Yq), lq
      }
      scissorClear(qq, Eq, gq, Yq, lq) {
        this.enableScissor(qq, Eq, gq, Yq), this.clear(lq, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(qq) {
        const Eq = this._gl.getAttachedShaders(qq);
        return Eq ? this._gl.getShaderSource(Eq[0]) : null
      }
      getFragmentShaderSource(qq) {
        const Eq = this._gl.getAttachedShaders(qq);
        return Eq ? this._gl.getShaderSource(Eq[1]) : null
      }
      set framebufferDimensionsObject(qq) {
        this._framebufferDimensionsObject = qq, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const qq of this.scenes) qq.resetCachedMaterial(), qq._rebuildGeometries();
        for (const qq of this._virtualScenes) qq.resetCachedMaterial(), qq._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(qq) {
        return aq(qq)
      }
      enterPointerlock() {
        this._renderingCanvas && dq(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Qr() {
        this._measureFps(), super.Qr()
      }
      _deletePipelineContext(qq) {
        const Eq = qq;
        Eq && Eq.program && Eq.transformFeedback && (this.deleteTransformFeedback(Eq.transformFeedback), Eq.transformFeedback = null), super._deletePipelineContext(qq)
      }
      createShaderProgram(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        lq = lq || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const mq = super.createShaderProgram(qq, Eq, gq, Yq, lq, Oq);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), mq
      }
      _createShaderProgram(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Oq = Yq.createProgram();
        if (qq.program = Oq, !Oq) throw new Error("Unable to create program");
        if (Yq.attachShader(Oq, Eq), Yq.attachShader(Oq, gq), this.Ra > 1 && lq) {
          const Eq = this.createTransformFeedback();
          this.bindTransformFeedback(Eq), this.setTranformFeedbackVaryings(Oq, lq), qq.transformFeedback = Eq
        }
        return Yq.linkProgram(Oq), this.Ra > 1 && lq && this.bindTransformFeedback(null), qq.context = Yq, qq.vertexShader = Eq, qq.fragmentShader = gq, qq.isParallelCompiled || this._finalizePipelineContext(qq), Oq
      }
      _releaseTexture(qq) {
        super._releaseTexture(qq)
      }
      _releaseRenderTargetWrapper(qq) {
        super._releaseRenderTargetWrapper(qq);
        for (const Eq of this.scenes) {
          for (const gq of Eq.postProcesses) gq._outputTexture === qq && (gq._outputTexture = null);
          for (const gq of Eq.cameras)
            for (const Eq of gq._postProcesses) Eq && Eq._outputTexture === qq && (Eq._outputTexture = null)
        }
      }
      _rescaleTexture(qq, Eq, gq, Yq, lq) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Oq = this.createRenderTargetTexture({
          width: Eq.width,
          height: Eq.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Qq._RescalePostProcessFactory && (this._rescalePostProcess = Qq._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const mq = () => {
              this._rescalePostProcess.onApply = function(Eq) {
                Eq._bindTexture("textureSampler", qq)
              };
              let mq = gq;
              mq || (mq = this.scenes[this.scenes.length - 1]), mq.postProcessManager.directRender([this._rescalePostProcess], Oq, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Eq, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Yq, 0, 0, Eq.width, Eq.height, 0), this.unBindFramebuffer(Oq), Oq.dispose(), lq && lq()
            },
            xq = this._rescalePostProcess.getEffect();
          xq ? xq.executeWhenCompiled(mq) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((qq => {
            qq.executeWhenCompiled(mq)
          }))
        }
      }
      wrapWebGLTexture(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const mq = new Bq.b(qq, this._gl),
          xq = new Yq.c(this, 15, !0);
        return xq._hardwareTexture = mq, xq.baseWidth = lq, xq.baseHeight = Oq, xq.width = lq, xq.height = Oq, xq.isReady = !0, xq.useMipMaps = Eq, this.updateTextureSamplingMode(gq, xq), xq
      }
      updateWrappedWebGLTexture(qq, Eq) {
        if (15 !== qq.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Yq of this._renderTargetWrapperCache)
          if (Yq.textures?.includes(qq)) {
            if (Yq.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Yq._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } qq._hardwareTexture = new Bq.b(Eq, this._gl), qq.isReady = !0, qq._cachedCoordinatesMode = null, qq._cachedWrapU = null, qq._cachedWrapV = null, qq._cachedWrapR = null, qq._cachedAnisotropicFilteringLevel = null;
        for (const Yq in this._boundTexturesCache) this._boundTexturesCache[Yq] === qq && (this._boundTexturesCache[Yq] = null);
        this.updateTextureSamplingMode(qq.samplingMode, qq);
        const gq = this._gl;
        for (const Yq of this._renderTargetWrapperCache) {
          if (Yq.texture !== qq) continue;
          const lq = Yq,
            Oq = Yq.samples,
            mq = Oq > 1;
          lq._framebuffer && gq.deleteFramebuffer(lq._framebuffer), !mq && lq._depthStencilBuffer && (gq.deleteRenderbuffer(lq._depthStencilBuffer), lq._depthStencilBuffer = null);
          const xq = this._currentFramebuffer,
            Aq = gq.createFramebuffer();
          this._bindUnboundFramebuffer(Aq), gq.framebufferTexture2D(gq.FRAMEBUFFER, gq.COLOR_ATTACHMENT0, gq.TEXTURE_2D, Eq, 0), mq || (lq._depthStencilBuffer = this._setupFramebufferDepthAttachments(Yq._generateStencilBuffer, Yq._generateDepthBuffer, Yq.width, Yq.height)), this._bindUnboundFramebuffer(xq), lq._framebuffer = Aq, mq && (Yq._samples = 1, this.updateRenderTargetTextureSampleCount(lq, Oq))
        }
      }
      _uploadImageToTexture(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const lq = this._gl,
          Oq = this._getWebGLTextureType(qq.type),
          mq = this._getInternalFormat(qq.format),
          xq = this._getRGBABufferInternalSizedFormat(qq.type, mq),
          Aq = qq.isCube ? lq.TEXTURE_CUBE_MAP : lq.TEXTURE_2D;
        this._bindTextureDirectly(Aq, qq, !0), this._unpackFlipY(qq.invertY);
        let cq = lq.TEXTURE_2D;
        qq.isCube && (cq = lq.TEXTURE_CUBE_MAP_POSITIVE_X + gq), lq.texImage2D(cq, Yq, xq, mq, Oq, Eq), this._bindTextureDirectly(Aq, null, !0)
      }
      updateTextureComparisonFunction(qq, Eq) {
        if (1 === this.Ra) return void uq.b.Error("WebGL 1 does not support texture comparison.");
        const gq = this._gl;
        qq.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, qq, !0), 0 === Eq ? (gq.texParameteri(gq.TEXTURE_CUBE_MAP, gq.TEXTURE_COMPARE_FUNC, 515), gq.texParameteri(gq.TEXTURE_CUBE_MAP, gq.TEXTURE_COMPARE_MODE, gq.NONE)) : (gq.texParameteri(gq.TEXTURE_CUBE_MAP, gq.TEXTURE_COMPARE_FUNC, Eq), gq.texParameteri(gq.TEXTURE_CUBE_MAP, gq.TEXTURE_COMPARE_MODE, gq.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, qq, !0), 0 === Eq ? (gq.texParameteri(gq.TEXTURE_2D, gq.TEXTURE_COMPARE_FUNC, 515), gq.texParameteri(gq.TEXTURE_2D, gq.TEXTURE_COMPARE_MODE, gq.NONE)) : (gq.texParameteri(gq.TEXTURE_2D, gq.TEXTURE_COMPARE_FUNC, Eq), gq.texParameteri(gq.TEXTURE_2D, gq.TEXTURE_COMPARE_MODE, gq.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), qq._comparisonFunction = Eq
      }
      createInstancesBuffer(qq) {
        const Eq = this._gl.createBuffer();
        if (!Eq) throw new Error("Unable to create instance buffer");
        const gq = new cq.e(Eq);
        return gq.WB = qq, this.bindArrayBuffer(gq), this._gl.bufferData(this._gl.ARRAY_BUFFER, qq, this._gl.DYNAMIC_DRAW), gq.references = 1, gq
      }
      deleteInstancesBuffer(qq) {
        this._gl.deleteBuffer(qq)
      }
      async _clientWaitAsync(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Yq = this._gl;
        return await new Promise(((lq, Oq) => {
          (0, Hq.e)((() => {
            const gq = Yq.clientWaitSync(qq, Eq, 0);
            if (gq == Yq.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return gq != Yq.TIMEOUT_EXPIRED
          }), lq, Oq, gq)
        }))
      }
      _readPixelsAsync(qq, Eq, gq, Yq, lq, Oq, mq) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const xq = this._gl,
          Aq = xq.createBuffer();
        xq.bindBuffer(xq.PIXEL_PACK_BUFFER, Aq), xq.bufferData(xq.PIXEL_PACK_BUFFER, mq.byteLength, xq.STREAM_READ), xq.readPixels(qq, Eq, gq, Yq, lq, Oq, 0), xq.bindBuffer(xq.PIXEL_PACK_BUFFER, null);
        const cq = xq.fenceSync(xq.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return cq ? (xq.flush(), this._clientWaitAsync(cq, 0, 10).then((() => (xq.deleteSync(cq), xq.bindBuffer(xq.PIXEL_PACK_BUFFER, Aq), xq.getBufferSubData(xq.PIXEL_PACK_BUFFER, 0, mq), xq.bindBuffer(xq.PIXEL_PACK_BUFFER, null), xq.deleteBuffer(Aq), mq)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(qq, Eq) {
            1 === lq.b.Instances.length && Wq.b.audioEngine && (Wq.b.audioEngine.dispose(), Wq.b.audioEngine = null);
            const gq = qq.getHostWindow();
            gq && "function" === typeof gq.removeEventListener && (gq.removeEventListener("blur", qq._onBlur), gq.removeEventListener("focus", qq._onFocus)), Eq && (Eq.removeEventListener("focus", qq._onCanvasFocus), Eq.removeEventListener("blur", qq._onCanvasBlur), Eq.removeEventListener("pointerout", qq._onCanvasPointerOut), Eq.removeEventListener("contextmenu", qq._onCanvasContextMenu)), (0, Nq.f)() && (document.removeEventListener("fullscreenchange", qq._onFullscreenChange), document.removeEventListener("mozfullscreenchange", qq._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", qq._onFullscreenChange), document.removeEventListener("msfullscreenchange", qq._onFullscreenChange), document.removeEventListener("pointerlockchange", qq._onPointerLockChange), document.removeEventListener("mspointerlockchange", qq._onPointerLockChange), document.removeEventListener("mozpointerlockchange", qq._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", qq._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Qq.ALPHA_DISABLE = 0, Qq.ALPHA_ADD = 1, Qq.ALPHA_COMBINE = 2, Qq.ALPHA_SUBTRACT = 3, Qq.ALPHA_MULTIPLY = 4, Qq.ALPHA_MAXIMIZED = 5, Qq.ALPHA_ONEONE = 6, Qq.ALPHA_PREMULTIPLIED = 7, Qq.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Qq.ALPHA_INTERPOLATE = 9, Qq.ALPHA_SCREENMODE = 10, Qq.DELAYLOADSTATE_NONE = 0, Qq.DELAYLOADSTATE_LOADED = 1, Qq.DELAYLOADSTATE_LOADING = 2, Qq.DELAYLOADSTATE_NOTLOADED = 4, Qq.NEVER = 512, Qq.ALWAYS = 519, Qq.LESS = 513, Qq.EQUAL = 514, Qq.LEQUAL = 515, Qq.GREATER = 516, Qq.GEQUAL = 518, Qq.NOTEQUAL = 517, Qq.KEEP = 7680, Qq.REPLACE = 7681, Qq.INCR = 7682, Qq.DECR = 7683, Qq.INVERT = 5386, Qq.INCR_WRAP = 34055, Qq.DECR_WRAP = 34056, Qq.TEXTURE_CLAMP_ADDRESSMODE = 0, Qq.TEXTURE_WRAP_ADDRESSMODE = 1, Qq.TEXTURE_MIRROR_ADDRESSMODE = 2, Qq.TEXTUREFORMAT_ALPHA = 0, Qq.TEXTUREFORMAT_LUMINANCE = 1, Qq.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Qq.TEXTUREFORMAT_RGB = 4, Qq.TEXTUREFORMAT_RGBA = 5, Qq.TEXTUREFORMAT_RED = 6, Qq.TEXTUREFORMAT_R = 6, Qq.TEXTUREFORMAT_R16_UNORM = 33322, Qq.TEXTUREFORMAT_RG16_UNORM = 33324, Qq.TEXTUREFORMAT_RGB16_UNORM = 32852, Qq.TEXTUREFORMAT_RGBA16_UNORM = 32859, Qq.TEXTUREFORMAT_R16_SNORM = 36760, Qq.TEXTUREFORMAT_RG16_SNORM = 36761, Qq.TEXTUREFORMAT_RGB16_SNORM = 36762, Qq.TEXTUREFORMAT_RGBA16_SNORM = 36763, Qq.TEXTUREFORMAT_RG = 7, Qq.TEXTUREFORMAT_RED_INTEGER = 8, Qq.TEXTUREFORMAT_R_INTEGER = 8, Qq.TEXTUREFORMAT_RG_INTEGER = 9, Qq.TEXTUREFORMAT_RGB_INTEGER = 10, Qq.TEXTUREFORMAT_RGBA_INTEGER = 11, Qq.TEXTURETYPE_UNSIGNED_BYTE = 0, Qq.TEXTURETYPE_UNSIGNED_INT = 0, Qq.TEXTURETYPE_FLOAT = 1, Qq.TEXTURETYPE_HALF_FLOAT = 2, Qq.TEXTURETYPE_BYTE = 3, Qq.TEXTURETYPE_SHORT = 4, Qq.TEXTURETYPE_UNSIGNED_SHORT = 5, Qq.TEXTURETYPE_INT = 6, Qq.TEXTURETYPE_UNSIGNED_INTEGER = 7, Qq.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Qq.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Qq.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Qq.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Qq.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Qq.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Qq.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Qq.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Qq.TEXTURE_NEAREST_SAMPLINGMODE = 1, Qq.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Qq.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Qq.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Qq.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Qq.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Qq.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Qq.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Qq.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Qq.TEXTURE_NEAREST_LINEAR = 7, Qq.TEXTURE_NEAREST_NEAREST = 1, Qq.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Qq.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Qq.TEXTURE_LINEAR_LINEAR = 2, Qq.TEXTURE_LINEAR_NEAREST = 12, Qq.TEXTURE_EXPLICIT_MODE = 0, Qq.TEXTURE_SPHERICAL_MODE = 1, Qq.TEXTURE_PLANAR_MODE = 2, Qq.TEXTURE_CUBIC_MODE = 3, Qq.TEXTURE_PROJECTION_MODE = 4, Qq.TEXTURE_SKYBOX_MODE = 5, Qq.TEXTURE_INVCUBIC_MODE = 6, Qq.TEXTURE_EQUIRECTANGULAR_MODE = 7, Qq.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Qq.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Qq.SCALEMODE_FLOOR = 1, Qq.SCALEMODE_NEAREST = 2, Qq.SCALEMODE_CEILING = 3
  },
  39736: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(39703);
    class lq {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(qq) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = qq, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, qq && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Yq.e)(qq.format))
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
      getBaseArrayLayer(qq) {
        if (!this._textures) return -1;
        const Eq = this._textures[qq],
          gq = this._layerIndices?.[qq] ?? 0,
          Yq = this._faceIndices?.[qq] ?? 0;
        return Eq.isCube ? 6 * gq + Yq : Eq.is3D ? 0 : gq
      }
      get samples() {
        return this._samples
      }
      setSamples(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === qq && !gq) return qq;
        const Yq = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, qq, Eq) : this._engine.updateRenderTargetTextureSampleCount(this, qq);
        return this._samples = qq, Yq
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(qq, Eq, gq, Yq, lq) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = qq, this._isCube = Eq, this._size = gq, this._engine = Yq, this._depthStencilTexture = null, this.label = lq
      }
      setTextures(qq) {
        Array.isArray(qq) ? this._textures = qq : this._textures = qq ? [qq] : null
      }
      setTexture(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Eq] !== qq && (this._textures[Eq] && gq && this._textures[Eq].dispose(), this._textures[Eq] = qq)
      }
      setLayerAndFaceIndices(qq, Eq) {
        this._layerIndices = qq, this._faceIndices = Eq
      }
      setLayerAndFaceIndex() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Eq && Eq >= 0 && (this._layerIndices[qq] = Eq), void 0 !== gq && gq >= 0 && (this._faceIndices[qq] = gq)
      }
      createDepthStencilTexture() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = gq, this._depthStencilTextureLabel = Oq, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Eq,
          comparisonFunction: qq,
          generateStencil: gq,
          isCube: this._isCube,
          samples: Yq,
          depthTextureFormat: lq,
          label: Oq
        }, this), this._depthStencilTexture
      }
      _shareDepth(qq) {
        this.shareDepth(qq)
      }
      shareDepth(qq) {
        this._depthStencilTexture && (qq._depthStencilTexture && qq._depthStencilTexture.dispose(), qq._depthStencilTexture = this._depthStencilTexture, qq._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(qq) {
        this.texture && this.texture._swapAndDie(qq), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let qq = null;
        if (this._isMulti) {
          const Eq = this.textures;
          if (Eq && Eq.length > 0) {
            let gq = !1,
              Yq = Eq.length,
              lq = -1;
            const Oq = Eq[Eq.length - 1]._source;
            14 !== Oq && 12 !== Oq || (gq = !0, lq = Eq[Eq.length - 1].format, Yq--);
            const mq = [],
              xq = [],
              Aq = [],
              cq = [],
              uq = [],
              Bq = [],
              Wq = [],
              Nq = {};
            for (let qq = 0; qq < Yq; ++qq) {
              const gq = Eq[qq];
              mq.push(gq.samplingMode), xq.push(gq.type), Aq.push(gq.format);
              void 0 !== Nq[gq.uniqueId] ? (cq.push(-1), Wq.push(0)) : (Nq[gq.uniqueId] = qq, gq.is2DArray ? (cq.push(35866), Wq.push(gq.depth)) : gq.isCube ? (cq.push(34067), Wq.push(0)) : gq.is3D ? (cq.push(32879), Wq.push(gq.depth)) : (cq.push(3553), Wq.push(0))), this._faceIndices && uq.push(this._faceIndices[qq] ?? 0), this._layerIndices && Bq.push(this._layerIndices[qq] ?? 0)
            }
            const aq = {
                samplingModes: mq,
                generateMipMaps: Eq[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: gq,
                depthTextureFormat: lq,
                types: xq,
                formats: Aq,
                wmq: Yq,
                targetTypes: cq,
                faceIndex: uq,
                layerIndex: Bq,
                layerCounts: Wq,
                label: this.label
              },
              Vq = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            qq = this._engine.createMultipleRenderTarget(Vq, aq);
            for (let dq = 0; dq < Yq; ++dq) {
              if (-1 !== cq[dq]) continue;
              const gq = Nq[Eq[dq].uniqueId];
              qq.setTexture(qq.textures[gq], dq)
            }
          }
        } else {
          const Eq = {};
          if (Eq.generateDepthBuffer = this._generateDepthBuffer, Eq.generateMipMaps = this.texture?.generateMipMaps ?? !1, Eq.generateStencilBuffer = this._generateStencilBuffer, Eq.samplingMode = this.texture?.samplingMode, Eq.type = this.texture?.type, Eq.format = this.texture?.format, Eq.noColorAttachment = !this._textures, Eq.label = this.label, this.isCube) qq = this._engine.createRenderTargetCubeTexture(this.width, Eq);
          else {
            const gq = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            qq = this._engine.createRenderTargetTexture(gq, Eq)
          }
          qq.texture && (qq.texture.isReady = !0)
        }
        return qq
      }
      _swapRenderTargetWrapper(qq) {
        if (this._textures && qq._textures)
          for (let Eq = 0; Eq < this._textures.length; ++Eq) this._textures[Eq]._swapAndDie(qq._textures[Eq], !1), qq._textures[Eq].isReady = !0;
        this._depthStencilTexture && qq._depthStencilTexture && (this._depthStencilTexture._swapAndDie(qq._depthStencilTexture), qq._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const qq = this._cloneRenderTargetWrapper();
        if (qq) {
          if (this._depthStencilTexture) {
            const Eq = this._depthStencilTexture.samplingMode,
              gq = this._depthStencilTexture.format,
              Yq = 2 === Eq || 3 === Eq || 11 === Eq;
            qq.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Yq, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, gq, this._depthStencilTextureLabel)
          }
          this.samples > 1 && qq.setSamples(this.samples), qq._swapRenderTargetWrapper(this), qq.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let qq = 0; qq < this._textures.length; ++qq) this._textures[qq].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40186: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    class Yq {
      static get ForceFullSceneLoadingForIncremental() {
        return Yq._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(qq) {
        Yq._ForceFullSceneLoadingForIncremental = qq
      }
      static get ShowLoadingScreen() {
        return Yq._ShowLoadingScreen
      }
      static set ShowLoadingScreen(qq) {
        Yq._ShowLoadingScreen = qq
      }
      static get loggingLevel() {
        return Yq._LoggingLevel
      }
      static set loggingLevel(qq) {
        Yq._LoggingLevel = qq
      }
      static get CleanBoneMatrixWeights() {
        return Yq._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(qq) {
        Yq._CleanBoneMatrixWeights = qq
      }
    }
    Yq._ForceFullSceneLoadingForIncremental = !1, Yq._ShowLoadingScreen = !0, Yq._CleanBoneMatrixWeights = !1, Yq._LoggingLevel = 0
  },
  39830: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(38653);
    const lq = new Map;

    function Oq(qq, Eq) {
      (function(qq) {
        return lq.delete(qq)
      })(qq) && Yq.b.Warn(`Extension with the name '${qq}' already exists`), lq.set(qq, Eq)
    }

    function mq(qq, Eq) {
      "image/ktx" !== Eq && "image/ktx2" !== Eq || (qq = ".ktx"), lq.has(qq) || (qq.endsWith(".ies") && Oq(".ies", (async () => await gq.e(300).then((() => gq(41525))).then((qq => new qq._IESTextureLoader)))), qq.endsWith(".dds") && Oq(".dds", (async () => await gq.e(298).then((() => gq(41533))).then((qq => new qq._DDSTextureLoader)))), qq.endsWith(".basis") && Oq(".basis", (async () => await gq.e(301).then((() => gq(41542))).then((qq => new qq._BasisTextureLoader)))), qq.endsWith(".env") && Oq(".env", (async () => await Promise.all([gq.e(302), gq.e(299)]).then((() => gq(41547))).then((qq => new qq._ENVTextureLoader)))), qq.endsWith(".hdr") && Oq(".hdr", (async () => await gq.e(303).then((() => gq(41592))).then((qq => new qq._HDRTextureLoader)))), (qq.endsWith(".ktx") || qq.endsWith(".ktx2")) && (Oq(".ktx", (async () => await gq.e(304).then((() => gq(41600))).then((qq => new qq._KTXTextureLoader)))), Oq(".ktx2", (async () => await gq.e(304).then((() => gq(41600))).then((qq => new qq._KTXTextureLoader))))), qq.endsWith(".tga") && Oq(".tga", (async () => await gq.e(305).then((() => gq(41614))).then((qq => new qq._TGATextureLoader)))), qq.endsWith(".exr") && Oq(".exr", (async () => await gq.e(306).then((() => gq(41623))).then((qq => new qq._ExrTextureLoader)))));
      const Yq = lq.get(qq);
      return Yq ? Promise.resolve(Yq(Eq)) : null
    }
  },
  40202: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      f: () => cq
    });
    var Yq = gq(40037),
      lq = gq(39786),
      Oq = gq(37171);
    class mq extends Yq.e {
      get Bqq() {
        return this._subMaterials
      }
      set Bqq(qq) {
        this._subMaterials = qq, this._hookArray(qq)
      }
      getChildren() {
        return this.Bqq
      }
      constructor(qq, Eq) {
        super(qq, Eq, !0), this._waitingSubMaterialsUniqueIds = [], this.ZJ().addMultiMaterial(this), this.Bqq = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(qq) {
        var Eq = this;
        const gq = qq.push;
        qq.push = function() {
          for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
          const mq = gq.apply(qq, lq);
          return Eq._markAllSubMeshesAsTexturesDirty(), mq
        };
        const Yq = qq.splice;
        qq.splice = (Eq, gq) => {
          const lq = Yq.call(qq, Eq, gq ?? qq.length);
          return this._markAllSubMeshesAsTexturesDirty(), lq
        }
      }
      getSubMaterial(qq) {
        return qq < 0 || qq >= this.Bqq.length ? this.ZJ().defaultMaterial : this.Bqq[qq]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Bqq.map((qq => qq ? qq.getActiveTextures() : [])))
      }
      hasTexture(qq) {
        if (super.hasTexture(qq)) return !0;
        for (let Eq = 0; Eq < this.Bqq.length; Eq++)
          if (this.Bqq[Eq]?.hasTexture(qq)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(qq, Eq, gq) {
        for (let Yq = 0; Yq < this.Bqq.length; Yq++) {
          const lq = this.Bqq[Yq];
          if (lq) {
            if (lq._storeEffectOnSubMeshes) {
              if (!lq.isReadyForSubMesh(qq, Eq, gq)) return !1;
              continue
            }
            if (!lq.isReady(qq)) return !1
          }
        }
        return !0
      }
      clone(qq, Eq) {
        const gq = new mq(qq, this.ZJ());
        for (let Yq = 0; Yq < this.Bqq.length; Yq++) {
          let lq;
          const Oq = this.Bqq[Yq];
          lq = Eq && Oq ? Oq.clone(qq + "-" + Oq.name) : this.Bqq[Yq], gq.Bqq.push(lq)
        }
        return gq
      }
      serialize() {
        const qq = {};
        qq.name = this.name, qq.id = this.id, qq.uniqueId = this.uniqueId, lq.b && (qq.tags = lq.b.GetTags(this)), qq.materialsUniqueIds = [], qq.materials = [];
        for (let Eq = 0; Eq < this.Bqq.length; Eq++) {
          const gq = this.Bqq[Eq];
          gq ? (qq.materialsUniqueIds.push(gq.uniqueId), qq.materials.push(gq.id)) : (qq.materialsUniqueIds.push(null), qq.materials.push(null))
        }
        return qq
      }
      dispose(qq, Eq, gq) {
        const Yq = this.ZJ();
        if (!Yq) return;
        if (gq)
          for (let Oq = 0; Oq < this.Bqq.length; Oq++) {
            const gq = this.Bqq[Oq];
            gq && gq.dispose(qq, Eq)
          }
        const lq = Yq.multiMaterials.indexOf(this);
        lq >= 0 && Yq.multiMaterials.splice(lq, 1), super.dispose(qq, Eq)
      }
    }
    let xq = !1;

    function Aq(qq, Eq) {
      const gq = new mq(qq.name, Eq);
      if (gq.id = qq.id, gq._loadedUniqueId = qq.uniqueId, lq.b && lq.b.AddTagsTo(gq, qq.tags), qq.materialsUniqueIds) gq._waitingSubMaterialsUniqueIds = qq.materialsUniqueIds;
      else
        for (const Yq of qq.materials) gq.Bqq.push(Eq.getLastMaterialById(Yq));
      return gq
    }

    function cq() {
      xq || (xq = !0, mq.ParseMultiMaterial = Aq, (0, Oq.g)("BABYLON.MultiMaterial", mq))
    }
  },
  39967: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq, lq, Oq = gq(37139);
    ! function(qq) {
      qq[qq.LOCAL = 0] = "LOCAL", qq[qq.WORLD = 1] = "WORLD", qq[qq.BONE = 2] = "BONE"
    }(Yq || (Yq = {}));
    class mq {}
    mq.X = new Oq.q(1, 0, 0), mq.Y = new Oq.q(0, 1, 0), mq.Z = new Oq.q(0, 0, 1),
      function(qq) {
        qq[qq.X = 0] = "X", qq[qq.Y = 1] = "Y", qq[qq.Z = 2] = "Z"
      }(lq || (lq = {}))
  },
  39741: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      d: () => cq
    });
    var Yq = gq(37139);
    const lq = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Oq = [() => 1, qq => qq.y, qq => qq.z, qq => qq.x, qq => qq.x * qq.y, qq => qq.y * qq.z, qq => 3 * qq.z * qq.z - 1, qq => qq.x * qq.z, qq => qq.x * qq.x - qq.y * qq.y],
      mq = (qq, Eq) => lq[qq] * Oq[qq](Eq),
      xq = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Aq {
      constructor() {
        this.preScaled = !1, this.l00 = Yq.q.Zero(), this.l1_1 = Yq.q.Zero(), this.l10 = Yq.q.Zero(), this.l11 = Yq.q.Zero(), this.l2_2 = Yq.q.Zero(), this.l2_1 = Yq.q.Zero(), this.l20 = Yq.q.Zero(), this.l21 = Yq.q.Zero(), this.l22 = Yq.q.Zero()
      }
      addLight(qq, Eq, gq) {
        Yq.o.Na[0].set(Eq.r, Eq.g, Eq.b);
        const lq = Yq.o.Na[0],
          Oq = Yq.o.Na[1];
        lq.scaleToRef(gq, Oq), Oq.scaleToRef(mq(0, qq), Yq.o.Na[2]), this.l00.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(1, qq), Yq.o.Na[2]), this.l1_1.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(2, qq), Yq.o.Na[2]), this.l10.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(3, qq), Yq.o.Na[2]), this.l11.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(4, qq), Yq.o.Na[2]), this.l2_2.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(5, qq), Yq.o.Na[2]), this.l2_1.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(6, qq), Yq.o.Na[2]), this.l20.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(7, qq), Yq.o.Na[2]), this.l21.addInPlace(Yq.o.Na[2]), Oq.scaleToRef(mq(8, qq), Yq.o.Na[2]), this.l22.addInPlace(Yq.o.Na[2])
      }
      scaleInPlace(qq) {
        this.l00.scaleInPlace(qq), this.l1_1.scaleInPlace(qq), this.l10.scaleInPlace(qq), this.l11.scaleInPlace(qq), this.l2_2.scaleInPlace(qq), this.l2_1.scaleInPlace(qq), this.l20.scaleInPlace(qq), this.l21.scaleInPlace(qq), this.l22.scaleInPlace(qq)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(xq[0]), this.l1_1.scaleInPlace(xq[1]), this.l10.scaleInPlace(xq[2]), this.l11.scaleInPlace(xq[3]), this.l2_2.scaleInPlace(xq[4]), this.l2_1.scaleInPlace(xq[5]), this.l20.scaleInPlace(xq[6]), this.l21.scaleInPlace(xq[7]), this.l22.scaleInPlace(xq[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(lq[0]), this.l1_1.scaleInPlace(lq[1]), this.l10.scaleInPlace(lq[2]), this.l11.scaleInPlace(lq[3]), this.l2_2.scaleInPlace(lq[4]), this.l2_1.scaleInPlace(lq[5]), this.l20.scaleInPlace(lq[6]), this.l21.scaleInPlace(lq[7]), this.l22.scaleInPlace(lq[8])
      }
      updateFromArray(qq) {
        return Yq.q.FromArrayToRef(qq[0], 0, this.l00), Yq.q.FromArrayToRef(qq[1], 0, this.l1_1), Yq.q.FromArrayToRef(qq[2], 0, this.l10), Yq.q.FromArrayToRef(qq[3], 0, this.l11), Yq.q.FromArrayToRef(qq[4], 0, this.l2_2), Yq.q.FromArrayToRef(qq[5], 0, this.l2_1), Yq.q.FromArrayToRef(qq[6], 0, this.l20), Yq.q.FromArrayToRef(qq[7], 0, this.l21), Yq.q.FromArrayToRef(qq[8], 0, this.l22), this
      }
      updateFromFloatsArray(qq) {
        return Yq.q.FromFloatsToRef(qq[0], qq[1], qq[2], this.l00), Yq.q.FromFloatsToRef(qq[3], qq[4], qq[5], this.l1_1), Yq.q.FromFloatsToRef(qq[6], qq[7], qq[8], this.l10), Yq.q.FromFloatsToRef(qq[9], qq[10], qq[11], this.l11), Yq.q.FromFloatsToRef(qq[12], qq[13], qq[14], this.l2_2), Yq.q.FromFloatsToRef(qq[15], qq[16], qq[17], this.l2_1), Yq.q.FromFloatsToRef(qq[18], qq[19], qq[20], this.l20), Yq.q.FromFloatsToRef(qq[21], qq[22], qq[23], this.l21), Yq.q.FromFloatsToRef(qq[24], qq[25], qq[26], this.l22), this
      }
      static FromArray(qq) {
        return (new Aq).updateFromArray(qq)
      }
      static FromPolynomial(qq) {
        const Eq = new Aq;
        return Eq.l00 = qq.xx.scale(.376127).add(qq.yy.scale(.376127)).add(qq.zz.scale(.376126)), Eq.l1_1 = qq.y.scale(.977204), Eq.l10 = qq.z.scale(.977204), Eq.l11 = qq.x.scale(.977204), Eq.l2_2 = qq.xy.scale(1.16538), Eq.l2_1 = qq.yz.scale(1.16538), Eq.l20 = qq.zz.scale(1.34567).subtract(qq.xx.scale(.672834)).subtract(qq.yy.scale(.672834)), Eq.l21 = qq.zx.scale(1.16538), Eq.l22 = qq.xx.scale(1.16538).subtract(qq.yy.scale(1.16538)), Eq.l1_1.scaleInPlace(-1), Eq.l11.scaleInPlace(-1), Eq.l2_1.scaleInPlace(-1), Eq.l21.scaleInPlace(-1), Eq.scaleInPlace(Math.PI), Eq
      }
    }
    class cq {
      constructor() {
        this.x = Yq.q.Zero(), this.y = Yq.q.Zero(), this.z = Yq.q.Zero(), this.xx = Yq.q.Zero(), this.yy = Yq.q.Zero(), this.zz = Yq.q.Zero(), this.xy = Yq.q.Zero(), this.yz = Yq.q.Zero(), this.zx = Yq.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Aq.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(qq) {
        Yq.o.Na[0].Vqq(qq.r, qq.g, qq.b);
        const Eq = Yq.o.Na[0];
        this.xx.addInPlace(Eq), this.yy.addInPlace(Eq), this.zz.addInPlace(Eq)
      }
      scaleInPlace(qq) {
        this.x.scaleInPlace(qq), this.y.scaleInPlace(qq), this.z.scaleInPlace(qq), this.xx.scaleInPlace(qq), this.yy.scaleInPlace(qq), this.zz.scaleInPlace(qq), this.yz.scaleInPlace(qq), this.zx.scaleInPlace(qq), this.xy.scaleInPlace(qq)
      }
      updateFromHarmonics(qq) {
        return this._harmonics = qq, this.x.WG(qq.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.WG(qq.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.WG(qq.l10), this.z.scaleInPlace(1.02333), this.xx.WG(qq.l00), Yq.o.Na[0].WG(qq.l20).scaleInPlace(.247708), Yq.o.Na[1].WG(qq.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).KYq(Yq.o.Na[0]).addInPlace(Yq.o.Na[1]), this.yy.WG(qq.l00), this.yy.scaleInPlace(.886277).KYq(Yq.o.Na[0]).KYq(Yq.o.Na[1]), this.zz.WG(qq.l00), Yq.o.Na[0].WG(qq.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Yq.o.Na[0]), this.yz.WG(qq.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.WG(qq.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.WG(qq.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(qq) {
        return (new cq).updateFromHarmonics(qq)
      }
      static FromArray(qq) {
        const Eq = new cq;
        return Yq.q.FromArrayToRef(qq[0], 0, Eq.x), Yq.q.FromArrayToRef(qq[1], 0, Eq.y), Yq.q.FromArrayToRef(qq[2], 0, Eq.z), Yq.q.FromArrayToRef(qq[3], 0, Eq.xx), Yq.q.FromArrayToRef(qq[4], 0, Eq.yy), Yq.q.FromArrayToRef(qq[5], 0, Eq.zz), Yq.q.FromArrayToRef(qq[6], 0, Eq.yz), Yq.q.FromArrayToRef(qq[7], 0, Eq.zx), Yq.q.FromArrayToRef(qq[8], 0, Eq.xy), Eq
      }
    }
  },
  40197: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => fq,
      f: () => Tq
    });
    var Yq = gq(39757),
      lq = gq(37156),
      Oq = gq(37139),
      mq = gq(39879),
      xq = gq(40176),
      Aq = gq(40199),
      cq = gq(39876),
      uq = gq(40055),
      Bq = gq(39870);
    class Wq {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Oq.q(0, 0, 0), this._diffPositionForCollisions = new Oq.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Nq, aq, Vq, dq = gq(39636),
      jq = gq(39819),
      Hq = gq(40067),
      oq = gq(37289),
      Pq = gq(37145),
      Qq = gq(39967),
      yq = gq(38653),
      tq = gq(39759),
      rq = gq(39653),
      vq = gq(37171);

    function hq(qq, Eq) {
      return qq - Math.floor(qq / Eq) * Eq
    }

    function nq(qq, Eq, gq) {
      qq instanceof Float32Array ? Oq.e.FromArrayToRef(qq, Eq, gq) : gq.Vqq((0, jq.e)(qq[Eq]), (0, jq.e)(qq[Eq + 1]), (0, jq.e)(qq[Eq + 2]), (0, jq.e)(qq[Eq + 3]), (0, jq.e)(qq[Eq + 4]), (0, jq.e)(qq[Eq + 5]), (0, jq.e)(qq[Eq + 6]), (0, jq.e)(qq[Eq + 7]), (0, jq.e)(qq[Eq + 8]), (0, jq.e)(qq[Eq + 9]), (0, jq.e)(qq[Eq + 10]), (0, jq.e)(qq[Eq + 11]), (0, jq.e)(qq[Eq + 12]), (0, jq.e)(qq[Eq + 13]), (0, jq.e)(qq[Eq + 14]), (0, jq.e)(qq[Eq + 15]))
    }

    function bq(qq, Eq, gq, Yq, lq, xq, Aq, cq, uq) {
      const Bq = gq.texture,
        Wq = Bq?.getInternalTexture(),
        Nq = Wq?._bufferView;
      if (!(Nq instanceof Float32Array) && !(Nq instanceof Uint16Array)) return yq.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const aq = Bq.getSize(),
        Vq = function(qq, Eq) {
          const gq = qq.y - qq.x + 1,
            Yq = Eq * qq.w / gq,
            lq = Yq < 1 ? 0 : 1,
            Oq = gq - lq;
          let mq = hq(Yq - Math.floor(Yq), 1) * Oq;
          return mq = hq(mq + qq.z, Oq), Math.floor(mq) + qq.x + lq
        }(Yq, gq.time);
      if (!isFinite(Vq) || Vq < 0 || Vq >= aq.height) return yq.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const dq = Oq.o.Na[0],
        jq = Oq.o.Matrix[0],
        Hq = Oq.o.Matrix[1],
        oq = Vq * aq.width * 4,
        Pq = Eq === mq.g.NormalKind ? Oq.q.TransformNormalFromFloatsToRef : Oq.q.TransformCoordinatesFromFloatsToRef;
      for (let Oq = 0, mq = 0; Oq < qq.length; Oq += 3, mq += 4) {
        let Eq, gq;
        for (jq.reset(), Eq = 0; Eq < 4 && Eq < uq; Eq++) gq = xq[mq + Eq], gq > 0 && (nq(Nq, oq + 16 * Math.floor(lq[mq + Eq]), Hq), Hq.scaleAndAddToRef(gq, jq));
        if (Aq && cq)
          for (Eq = 0; Eq < 4 && Eq + 4 < uq; Eq++) gq = cq[mq + Eq], gq > 0 && (nq(Nq, oq + 16 * Math.floor(Aq[mq + Eq]), Hq), Hq.scaleAndAddToRef(gq, jq));
        Pq(qq[Oq], qq[Oq + 1], qq[Oq + 2], jq, dq), dq.toArray(qq, Oq)
      }
      return !0
    }
    class iq {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Oq.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Zq {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new iq, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Wq, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let fq = (() => {
        var qq;
        let Eq, Wq = Aq.g,
          Nq = [];
        return qq = class extends Wq {
          static get BILLBOARDMODE_NONE() {
            return Aq.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Aq.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Aq.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Aq.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Aq.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Aq.g.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(qq) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = qq
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(qq) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = qq
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(qq) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = qq
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(qq) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = qq
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(qq) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = qq
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(qq) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== qq && (this._internalAbstractMeshDataInfo._morphTargetManager = qq, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(qq) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== qq && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = qq, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(qq) {
            return !!super._updateNonUniformScalingState(qq) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(qq) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = qq
          }
          set qW(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(qq)
          }
          set onCollisionPositionChange(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(qq)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(qq) {
            if (this._internalAbstractMeshDataInfo._visibility === qq) return;
            const Eq = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = qq, (1 === Eq && 1 !== qq || 1 !== Eq && 1 === qq) && this._markSubMeshesAsDirty((qq => {
              qq.markAsMiscDirty(), qq.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(qq) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = qq
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(qq) {
            this._internalAbstractMeshDataInfo._renderingGroupId = qq
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(qq) {
            if (!Number.isInteger(qq) || qq < 0 || qq > 255 || 0 !== qq && 0 === (63 & qq)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = qq
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(qq) {
            this._setMaterial(qq)
          }
          _setMaterial(qq) {
            this._internalAbstractMeshDataInfo._material !== qq && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = qq, qq && qq.meshMap && (qq.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.fn && (this.resetDrawCache(void 0, null == qq), this._unBindEffect()))
          }
          getMaterialForRenderPass(qq) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[qq]
          }
          setMaterialForRenderPass(qq, Eq) {
            this.resetDrawCache(qq), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const gq = this._internalAbstractMeshDataInfo._materialForRenderPass[qq];
            gq?.meshMap?.[this.uniqueId] && (gq.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[qq] = Eq, Eq && Eq.meshMap && (Eq.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(qq) {
            this._internalAbstractMeshDataInfo._receiveShadows !== qq && (this._internalAbstractMeshDataInfo._receiveShadows = qq, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(qq) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== qq && (this._internalAbstractMeshDataInfo._hasVertexAlpha = qq, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(qq) {
            this._internalAbstractMeshDataInfo._useVertexColors !== qq && (this._internalAbstractMeshDataInfo._useVertexColors = qq, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(qq) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== qq && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = qq, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(qq) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== qq && (this._internalAbstractMeshDataInfo._numBoneInfluencers = qq, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(qq) {
            this._internalAbstractMeshDataInfo._applyFog !== qq && (this._internalAbstractMeshDataInfo._applyFog = qq, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(qq) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = qq
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(qq) {
            qq !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = qq, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(qq) ? -1 : qq
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = qq
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(qq) ? -1 : qq
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = qq
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(qq) {
            const Eq = this._internalAbstractMeshDataInfo._skeleton;
            Eq && Eq.needInitialSkinMatrix && Eq._unregisterMeshWithPoseMatrix(this), qq && qq.needInitialSkinMatrix && qq._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = qq, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Eq) {
            var gq;
            let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Eq, Yq, !1), gq = this, this._internalAbstractMeshDataInfo = new Zq, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = qq.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new lq.d, this.onCollisionPositionChangeObservable = new lq.d, this.onMaterialChangedObservable = new lq.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.yV = qq.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = oq.d.Red(), this.outlineWidth = .02, this.overlayColor = oq.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Wa = !1, this.Va = !1, this.actionManager = null, this.ellipsoid = new Oq.q(.5, 1, .5), this.ellipsoidOffset = new Oq.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new oq.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                eJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new lq.d, this._onCollisionPositionChange = function(qq, Eq) {
                let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Eq.subtractToRef(gq._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > rq.b.CollisionsEpsilon && gq.position.addInPlace(gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Yq && gq.onCollideObservable.notifyObservers(Yq), gq.onCollisionPositionChangeObservable.notifyObservers(gq.position)
              }, Yq = this.ZJ(), this.layerMask = Yq.defaultRenderableLayerMask, Yq.ZYq(this), this._resyncLightSources(), this._uniformBuffer = new Bq.b(this.ZJ().Ba(), void 0, void 0, Eq, !this.ZJ().Ba().isWebGPU), this._buildUniformLayout(), Yq.performancePriority) {
              case 2:
                this.Va = !0;
              case 1:
                this.Wa = !0, this.yV = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(qq) {
            const Eq = this._uniformBuffer;
            Eq.Eqq("world", qq), Eq.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Eq.update()
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
          toString(qq) {
            let Eq = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Eq += ", # of submeshes: " + (this.fn ? this.fn.length : 0);
            const gq = this._internalAbstractMeshDataInfo._skeleton;
            return gq && (Eq += ", skeleton: " + gq.name), qq && (Eq += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Eq += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.eJ ? "YES" : "NO")), Eq
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Aq.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(qq) {
            let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Eq || this.actionManager.isRecursive)) {
              if (!qq) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(qq)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(qq, !1) : null
          }
          _releaseRenderPassId(qq) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.fn) {
              for (const qq of this.fn) qq._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const qq of this.ZJ().lights) qq.isEnabled() && qq.canAffectMesh(this) && this._lightSources.push(qq);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(qq) {
            const Eq = qq.isEnabled() && qq.canAffectMesh(this),
              gq = this._lightSources.indexOf(qq);
            let Yq = !1;
            if (-1 === gq) {
              if (!Eq) return;
              this._lightSources.push(qq)
            } else {
              if (Eq) return;
              Yq = !0, this._lightSources.splice(gq, 1)
            }
            this._markSubMeshesAsLightDirty(Yq)
          }
          _unBindEffect() {
            for (const qq of this.fn) qq.setEffect(null)
          }
          _removeLightSource(qq, Eq) {
            const gq = this._lightSources.indexOf(qq); - 1 !== gq && (this._lightSources.splice(gq, 1), this._markSubMeshesAsLightDirty(Eq))
          }
          _markSubMeshesAsDirty(qq) {
            if (this.fn)
              for (const Eq of this.fn)
                for (let gq = 0; gq < Eq._drawWrappers.length; ++gq) {
                  const Yq = Eq._drawWrappers[gq];
                  Yq && Yq.defines && Yq.defines.markAllAsDirty && qq(Yq.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Eq => Eq.markAsLightDirty(qq)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((qq => qq.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((qq => qq.markAsMiscDirty()))
          }
          xgq(qq) {
            return this._currentRenderId = Number.MAX_VALUE, super.xgq(qq), this._isDirty = !0, this
          }
          resetDrawCache(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.fn)
              for (const gq of this.fn) gq.resetDrawCache(qq, Eq)
          }
          get isBlocked() {
            return !1
          }
          getLOD(qq) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          iYq() {
            return null
          }
          getVerticesData(qq) {
            return null
          }
          setVerticesData(qq, Eq, gq, Yq) {
            return this
          }
          updateVerticesData(qq, Eq, gq, Yq) {
            return this
          }
          setIndices(qq, Eq) {
            return this
          }
          isVerticesDataPresent(qq) {
            return !1
          }
          yR() {
            return this._masterMesh ? this._masterMesh.yR() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.yR()
          }
          setBoundingInfo(qq) {
            return this._boundingInfo = qq, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(qq, Eq, gq) {
            return this._boundingInfo = new uq.d(qq, Eq, gq), this._boundingInfo
          }
          normalizeToUnitCube() {
            let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(qq, Eq, gq)
          }
          get useBones() {
            return this.skeleton && this.ZJ().skeletonsEnabled && this.isVerticesDataPresent(mq.g.MatricesIndicesKind) && this.isVerticesDataPresent(mq.g.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(qq) {}
          _activate(qq, Eq) {
            return this._renderId = qq, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Aq.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get GJ() {
            return !1
          }
          get olq() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(qq, Eq, gq) {
            return this.position.addInPlace(this.calcMovePOV(qq, Eq, gq)), this
          }
          calcMovePOV(qq, Eq, gq) {
            const Yq = new Oq.e;
            (this.rotationQuaternion ? this.rotationQuaternion : Oq.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Yq);
            const lq = Oq.q.Zero(),
              mq = this.definedFacingForward ? -1 : 1;
            return Oq.q.TransformCoordinatesFromFloatsToRef(qq * mq, Eq, gq * mq, Yq, lq), lq
          }
          rotatePOV(qq, Eq, gq) {
            return this.rotation.addInPlace(this.calcRotatePOV(qq, Eq, gq)), this
          }
          calcRotatePOV(qq, Eq, gq) {
            const Yq = this.definedFacingForward ? 1 : -1;
            return new Oq.q(qq * Yq, Eq, gq * Yq)
          }
          _refreshBoundingInfo(qq, Eq) {
            if (qq) {
              const gq = (0, Hq.c)(qq, 0, this.getTotalVertices(), Eq);
              this._boundingInfo ? this._boundingInfo.reConstruct(gq.minimum, gq.maximum) : this._boundingInfo = new uq.d(gq.minimum, gq.maximum)
            }
            if (this.fn)
              for (let gq = 0; gq < this.fn.length; gq++) this.fn[gq].refreshBoundingInfo(qq);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(qq) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(qq.minimum, qq.maximum) : this._boundingInfo = new uq.d(qq.minimum, qq.maximum), this.fn)
              for (let Eq = 0; Eq < this.fn.length; Eq++) this.fn[Eq].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(qq, Eq, gq, Yq, lq, xq, Aq) {
            ! function(qq, Eq, gq, Yq, lq, xq, Aq) {
              const cq = Oq.o.Na[0],
                uq = Oq.o.Matrix[0],
                Bq = Oq.o.Matrix[1],
                Wq = Eq === mq.g.NormalKind ? Oq.q.TransformNormalFromFloatsToRef : Oq.q.TransformCoordinatesFromFloatsToRef;
              for (let mq = 0, Nq = 0; mq < qq.length; mq += 3, Nq += 4) {
                let Eq, aq;
                for (uq.reset(), Eq = 0; Eq < 4; Eq++) aq = lq[Nq + Eq], aq > 0 && (Oq.e.FromFloat32ArrayToRefScaled(gq, Math.floor(16 * Yq[Nq + Eq]), aq, Bq), uq.addToSelf(Bq));
                if (xq && Aq)
                  for (Eq = 0; Eq < 4; Eq++) aq = Aq[Nq + Eq], aq > 0 && (Oq.e.FromFloat32ArrayToRefScaled(gq, Math.floor(16 * xq[Nq + Eq]), aq, Bq), uq.addToSelf(Bq));
                Wq(qq[mq], qq[mq + 1], qq[mq + 2], uq, cq), cq.toArray(qq, mq)
              }
            }(qq, Eq, gq, Yq, lq, xq, Aq)
          }
          _getData(Eq, gq) {
            let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mq.g.PositionKind;
            const lq = Eq.cache,
              xq = qq => {
                if (lq) {
                  const Eq = lq._vertexData || (lq._vertexData = {});
                  return Eq[qq] || this.copyVerticesData(qq, Eq), Eq[qq]
                }
                return this.getVerticesData(qq)
              };
            if (gq || (gq = xq(Yq)), !gq) return null;
            lq ? (lq._outputData ? lq._outputData.set(gq) : lq._outputData = new Float32Array(gq), gq = lq._outputData) : (Eq.applyMorph && this.morphTargetManager || Eq.applySkeleton && this.skeleton || Eq.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (gq = gq.slice()), Eq.applyMorph && this.morphTargetManager && function(qq, Eq, gq) {
              let Yq;
              switch (Eq) {
                case mq.g.PositionKind:
                  Yq = qq => qq.getPositions();
                  break;
                case mq.g.NormalKind:
                  Yq = qq => qq.getNormals();
                  break;
                case mq.g.TangentKind:
                  Yq = qq => qq.getTangents();
                  break;
                case mq.g.UVKind:
                  Yq = qq => qq.getUVs();
                  break;
                case mq.g.UV2Kind:
                  Yq = qq => qq.getUV2s();
                  break;
                case mq.g.ColorKind:
                  Yq = qq => qq.getColors();
                  break;
                default:
                  return
              }
              for (let lq = 0; lq < qq.length; lq++) {
                let Eq = qq[lq];
                for (let Oq = 0; Oq < gq.numTargets; Oq++) {
                  const mq = gq.getTarget(Oq),
                    xq = mq.influence;
                  if (0 !== xq) {
                    const gq = Yq(mq);
                    gq && (Eq += (gq[lq] - qq[lq]) * xq)
                  }
                }
                qq[lq] = Eq
              }
            }(gq, Yq, this.morphTargetManager);
            const Aq = this.bakedVertexAnimationManager;
            let cq = !1;
            if (Eq.applyBakedVertexAnimation && Aq?.isEnabled) {
              const qq = xq(mq.g.MatricesIndicesKind),
                lq = xq(mq.g.MatricesWeightsKind);
              if (lq && qq) {
                const Oq = this.numBoneInfluencers > 4,
                  uq = Oq ? xq(mq.g.MatricesIndicesExtraKind) : null,
                  Bq = Oq ? xq(mq.g.MatricesWeightsExtraKind) : null;
                cq = bq(gq, Yq, Aq, Eq.bakedVertexAnimationSettings ?? Aq.animationParameters, qq, lq, uq, Bq, this.numBoneInfluencers)
              }
            }
            if (!cq && Eq.applySkeleton && this.skeleton) {
              const Eq = xq(mq.g.MatricesIndicesKind),
                lq = xq(mq.g.MatricesWeightsKind);
              if (lq && Eq) {
                const Oq = this.numBoneInfluencers > 4,
                  Aq = Oq ? xq(mq.g.MatricesIndicesExtraKind) : null,
                  cq = Oq ? xq(mq.g.MatricesWeightsExtraKind) : null,
                  uq = this.skeleton.getTransformMatrices(this);
                qq._ApplySkeleton(gq, Yq, uq, Eq, lq, Aq, cq)
              }
            }
            if (!1 !== Eq.updatePositionsArray && Yq === mq.g.PositionKind) {
              const qq = this._internalAbstractMeshDataInfo._positions || [],
                Eq = qq.length;
              if (qq.length = gq.length / 3, Eq < qq.length)
                for (let gq = Eq; gq < qq.length; gq++) qq[gq] = new Oq.q;
              for (let Yq = 0, lq = 0; Yq < qq.length; Yq++, lq += 3) qq[Yq].Vqq(gq[lq], gq[lq + 1], gq[lq + 2]);
              this._internalAbstractMeshDataInfo._positions = qq
            }
            return gq
          }
          getNormalsData() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: qq,
              applyMorph: Eq,
              updatePositionsArray: !1
            }, null, mq.g.NormalKind)
          }
          qI() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: qq,
              applyMorph: Eq,
              updatePositionsArray: !1
            }, gq, mq.g.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new uq.d(Oq.q.Zero(), Oq.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(qq) {
            if (!this.fn) return this;
            const Eq = this.fn.length;
            for (let gq = 0; gq < Eq; gq++) {
              const Yq = this.fn[gq];
              (Eq > 1 || !Yq.IsGlobal) && Yq.updateBoundingInfo(qq)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Va || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(qq) {
            return this.yR().isInFrustum(qq, this.cullingStrategy)
          }
          isCompletelyInFrustum(qq) {
            return this.yR().isCompletelyInFrustum(qq)
          }
          Nlq(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = arguments.length > 2 ? arguments[2] : void 0;
            const Yq = this.yR(),
              lq = qq.yR();
            if (Yq.intersects(lq, Eq)) return !0;
            if (gq)
              for (const Oq of this.getChildMeshes())
                if (Oq.Nlq(qq, Eq, !0)) return !0;
            return !1
          }
          intersectsPoint(qq) {
            return this.yR().intersectsPoint(qq)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(qq) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = qq
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(qq) {
            let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const gq = this.ZJ().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = gq.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, gq.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, qq, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Eq), this
          }
          _collideForSubMesh(qq, Eq, gq) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!qq._lastColliderWorldVertices || !qq._lastColliderTransformMatrix.equals(Eq)) {
              qq._lastColliderTransformMatrix = Eq.clone(), qq._lastColliderWorldVertices = [], qq._trianglePlanes = [];
              const gq = qq.verticesStart,
                Yq = qq.verticesStart + qq.verticesCount;
              for (let lq = gq; lq < Yq; lq++) qq._lastColliderWorldVertices.push(Oq.q.TransformCoordinates(this._positions[lq], Eq))
            }
            return gq._collide(qq._trianglePlanes, qq._lastColliderWorldVertices, this.iYq(), qq.indexStart, qq.indexStart + qq.indexCount, qq.verticesStart, !!qq.da(), this, this._shouldConvertRHS(), 7 === qq.da()?.fillMode), this
          }
          _processCollisionsForSubMeshes(qq, Eq) {
            const gq = this._scene.getCollidingSubMeshCandidates(this, qq),
              Yq = gq.length;
            for (let lq = 0; lq < Yq; lq++) {
              const Oq = gq.data[lq];
              Yq > 1 && !Oq._checkCollision(qq) || this._collideForSubMesh(Oq, Eq, qq)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(qq) {
            if (!this.yR()._checkCollision(qq)) return this;
            const Eq = Oq.o.Matrix[0],
              gq = Oq.o.Matrix[1];
            return Oq.e.ScalingToRef(1 / qq._radius.x, 1 / qq._radius.y, 1 / qq._radius.z, Eq), this.worldMatrixFromCache.multiplyToRef(Eq, gq), this._processCollisionsForSubMeshes(qq, gq), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(qq, Eq, gq) {
            let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              lq = arguments.length > 4 ? arguments[4] : void 0,
              mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const xq = new cq.d,
              Aq = this.getClassName(),
              uq = "InstancedLinesMesh" === Aq || "LinesMesh" === Aq || "GreasedLineMesh" === Aq ? this.intersectionThreshold : 0,
              Bq = this.yR();
            if (!this.fn) return xq;
            if (!mq && (!qq.intersectsSphere(Bq.DYq, uq) || !qq.intersectsBox(Bq.boundingBox, uq))) return xq;
            if (Yq) return xq.hit = !mq, xq.pickedMesh = mq ? null : this, xq.distance = mq ? 0 : Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = 0, xq;
            if (!this._generatePointsArray()) return xq;
            let Wq = null;
            const Nq = this._scene.getIntersectingSubMeshCandidates(this, qq),
              aq = Nq.length;
            let Vq = !1;
            for (let Oq = 0; Oq < aq; Oq++) {
              const qq = Nq.data[Oq].da();
              if (qq && (7 == qq.fillMode || 0 == qq.fillMode || 1 == qq.fillMode || 2 == qq.fillMode || 4 == qq.fillMode)) {
                Vq = !0;
                break
              }
            }
            if (!Vq) return xq.hit = !0, xq.pickedMesh = this, xq.distance = Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = -1, xq;
            for (let Oq = 0; Oq < aq; Oq++) {
              const Yq = Nq.data[Oq];
              if (aq > 1 && !mq && !Yq.canIntersects(qq)) continue;
              const lq = Yq.intersects(qq, this._positions, this.iYq(), Eq, gq);
              if (lq && (Eq || !Wq || lq.distance < Wq.distance) && (Wq = lq, Wq.subMeshId = Yq._id, Wq._internalSubMeshId = Oq, Eq)) break
            }
            if (Wq) {
              const Eq = lq ?? this.getWorldMatrix(),
                gq = Oq.o.Na[0],
                Yq = Oq.o.Na[1];
              Oq.q.TransformCoordinatesToRef(qq.origin, Eq, gq), qq.direction.scaleToRef(Wq.distance, Yq);
              const mq = Oq.q.TransformNormal(Yq, Eq).addInPlace(gq);
              return xq.hit = !0, xq.distance = Oq.q.Distance(gq, mq), xq.pickedPoint = mq, xq.pickedMesh = this, xq.bu = Wq.bu || 0, xq.bv = Wq.bv || 0, xq.subMeshFaceId = Wq.faceId, xq.faceId = Wq.faceId + Nq.data[Wq._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), xq.subMeshId = Wq.subMeshId, xq
            }
            return xq
          }
          clone(qq, Eq, gq) {
            return null
          }
          releaseSubMeshes() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.fn)
              for (; this.fn.length;) this.fn[0].dispose(qq);
            else this.fn = [];
            return this
          }
          dispose(qq) {
            let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Yq = this.ZJ();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Yq.freeActiveMeshes(), Yq.freeRenderingGroups(), Yq.renderingManager.maintainStateBetweenFrames && Yq.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((qq => qq !== this && qq.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Eq = 0; Eq < this._intersectionsInProgress.length; Eq++) {
              const qq = this._intersectionsInProgress[Eq],
                gq = qq._intersectionsInProgress.indexOf(this);
              qq._intersectionsInProgress.splice(gq, 1)
            }
            this._intersectionsInProgress.length = 0;
            const lq = Yq.lights;
            for (const mq of lq) {
              let qq = mq.includedOnlyMeshes.indexOf(this); - 1 !== qq && mq.includedOnlyMeshes.splice(qq, 1), qq = mq.excludedMeshes.indexOf(this), -1 !== qq && mq.excludedMeshes.splice(qq, 1);
              const Eq = mq.getShadowGenerators();
              if (Eq) {
                const gq = Eq.values();
                for (let Eq = gq.next(); !0 !== Eq.done; Eq = gq.next()) {
                  const gq = Eq.value.getShadowMap();
                  gq && gq.renderList && (qq = gq.renderList.indexOf(this), -1 !== qq && gq.renderList.splice(qq, 1))
                }
              }
            }
            this.releaseSubMeshes(Yq._isDisposing);
            const Oq = Yq.Ba();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Oq.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Oq.wipeCaches(), Yq.Wk(this), this._parentContainer) {
              const qq = this._parentContainer.meshes.indexOf(this);
              qq > -1 && this._parentContainer.meshes.splice(qq, 1), this._parentContainer = null
            }
            if (gq && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !qq)
              for (Eq = 0; Eq < Yq.xZ.length; Eq++) Yq.xZ[Eq].emitter === this && (Yq.xZ[Eq].dispose(), Eq--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(qq, gq)
          }
          _initFacetData() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            qq.facetNormals || (qq.facetNormals = []), qq.facetPositions || (qq.facetPositions = []), qq.facetPartitioning || (qq.facetPartitioning = new Array), qq.facetNb = this.iYq().length / 3 | 0, qq.partitioningSubdivisions = qq.partitioningSubdivisions ? qq.partitioningSubdivisions : 10, qq.partitioningBBoxRatio = qq.partitioningBBoxRatio ? qq.partitioningBBoxRatio : 1.01;
            for (let Eq = 0; Eq < qq.facetNb; Eq++) qq.facetNormals[Eq] = Oq.q.Zero(), qq.facetPositions[Eq] = Oq.q.Zero();
            return qq.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            qq.facetDataEnabled || this._initFacetData();
            const Eq = this.getVerticesData(mq.g.PositionKind),
              gq = this.iYq(),
              Yq = this.getVerticesData(mq.g.NormalKind)?.slice(),
              lq = this.yR();
            if (qq.facetDepthSort && !qq.facetDepthSortEnabled) {
              if (qq.facetDepthSortEnabled = !0, gq instanceof Uint16Array) qq.depthSortedIndices = new Uint16Array(gq);
              else if (gq instanceof Uint32Array) qq.depthSortedIndices = new Uint32Array(gq);
              else {
                let Eq = !1;
                for (let qq = 0; qq < gq.length; qq++)
                  if (gq[qq] > 65535) {
                    Eq = !0;
                    break
                  } qq.depthSortedIndices = Eq ? new Uint32Array(gq) : new Uint16Array(gq)
              }
              if (qq.facetDepthSortFunction = function(qq, Eq) {
                  return Eq.sqDistance - qq.sqDistance
                }, !qq.facetDepthSortFrom) {
                const Eq = this.ZJ().activeCamera;
                qq.facetDepthSortFrom = Eq ? Eq.position : Oq.q.Zero()
              }
              qq.depthSortedFacets = [];
              for (let Eq = 0; Eq < qq.facetNb; Eq++) {
                const gq = {
                  ind: 3 * Eq,
                  sqDistance: 0
                };
                qq.depthSortedFacets.push(gq)
              }
              qq.invertedMatrix = Oq.e.Identity(), qq.facetDepthSortOrigin = Oq.q.Zero()
            }
            qq.bbSize.x = lq.maximum.x - lq.minimum.x > Pq.c ? lq.maximum.x - lq.minimum.x : Pq.c, qq.bbSize.y = lq.maximum.y - lq.minimum.y > Pq.c ? lq.maximum.y - lq.minimum.y : Pq.c, qq.bbSize.z = lq.maximum.z - lq.minimum.z > Pq.c ? lq.maximum.z - lq.minimum.z : Pq.c;
            let Aq = qq.bbSize.x > qq.bbSize.y ? qq.bbSize.x : qq.bbSize.y;
            if (Aq = Aq > qq.bbSize.z ? Aq : qq.bbSize.z, qq.subDiv.max = qq.partitioningSubdivisions, qq.subDiv.X = Math.floor(qq.subDiv.max * qq.bbSize.x / Aq), qq.subDiv.Y = Math.floor(qq.subDiv.max * qq.bbSize.y / Aq), qq.subDiv.Z = Math.floor(qq.subDiv.max * qq.bbSize.z / Aq), qq.subDiv.X = qq.subDiv.X < 1 ? 1 : qq.subDiv.X, qq.subDiv.Y = qq.subDiv.Y < 1 ? 1 : qq.subDiv.Y, qq.subDiv.Z = qq.subDiv.Z < 1 ? 1 : qq.subDiv.Z, qq.facetParameters.facetNormals = this.getFacetLocalNormals(), qq.facetParameters.facetPositions = this.getFacetLocalPositions(), qq.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), qq.facetParameters.bInfo = lq, qq.facetParameters.bbSize = qq.bbSize, qq.facetParameters.subDiv = qq.subDiv, qq.facetParameters.ratio = this.partitioningBBoxRatio, qq.facetParameters.depthSort = qq.facetDepthSort, qq.facetDepthSort && qq.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(qq.invertedMatrix), Oq.q.TransformCoordinatesToRef(qq.facetDepthSortFrom, qq.invertedMatrix, qq.facetDepthSortOrigin), qq.facetParameters.distanceTo = qq.facetDepthSortOrigin), qq.facetParameters.depthSortedFacets = qq.depthSortedFacets, Yq && xq.d.ComputeNormals(Eq, gq, Yq, qq.facetParameters), qq.facetDepthSort && qq.facetDepthSortEnabled) {
              qq.depthSortedFacets.sort(qq.facetDepthSortFunction);
              const Eq = qq.depthSortedIndices.length / 3 | 0;
              for (let Yq = 0; Yq < Eq; Yq++) {
                const Eq = qq.depthSortedFacets[Yq].ind;
                qq.depthSortedIndices[3 * Yq] = gq[Eq], qq.depthSortedIndices[3 * Yq + 1] = gq[Eq + 1], qq.depthSortedIndices[3 * Yq + 2] = gq[Eq + 2]
              }
              this.updateIndices(qq.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            return qq.facetNormals || this.updateFacetData(), qq.facetNormals
          }
          getFacetLocalPositions() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            return qq.facetPositions || this.updateFacetData(), qq.facetPositions
          }
          getFacetLocalPartitioning() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            return qq.facetPartitioning || this.updateFacetData(), qq.facetPartitioning
          }
          getFacetPosition(qq) {
            const Eq = Oq.q.Zero();
            return this.getFacetPositionToRef(qq, Eq), Eq
          }
          getFacetPositionToRef(qq, Eq) {
            const gq = this.getFacetLocalPositions()[qq],
              Yq = this.getWorldMatrix();
            return Oq.q.TransformCoordinatesToRef(gq, Yq, Eq), this
          }
          getFacetNormal(qq) {
            const Eq = Oq.q.Zero();
            return this.getFacetNormalToRef(qq, Eq), Eq
          }
          getFacetNormalToRef(qq, Eq) {
            const gq = this.getFacetLocalNormals()[qq];
            return Oq.q.TransformNormalToRef(gq, this.getWorldMatrix(), Eq), this
          }
          getFacetsAtLocalCoordinates(qq, Eq, gq) {
            const Yq = this.yR(),
              lq = this._internalAbstractMeshDataInfo._facetData,
              Oq = Math.floor((qq - Yq.minimum.x * lq.partitioningBBoxRatio) * lq.subDiv.X * lq.partitioningBBoxRatio / lq.bbSize.x),
              mq = Math.floor((Eq - Yq.minimum.y * lq.partitioningBBoxRatio) * lq.subDiv.Y * lq.partitioningBBoxRatio / lq.bbSize.y),
              xq = Math.floor((gq - Yq.minimum.z * lq.partitioningBBoxRatio) * lq.subDiv.Z * lq.partitioningBBoxRatio / lq.bbSize.z);
            return Oq < 0 || Oq > lq.subDiv.max || mq < 0 || mq > lq.subDiv.max || xq < 0 || xq > lq.subDiv.max ? null : lq.facetPartitioning[Oq + lq.subDiv.max * mq + lq.subDiv.max * lq.subDiv.max * xq]
          }
          getClosestFacetAtCoordinates(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const xq = this.getWorldMatrix(),
              Aq = Oq.o.Matrix[5];
            xq.invertToRef(Aq);
            const cq = Oq.o.Na[8];
            Oq.q.TransformCoordinatesFromFloatsToRef(qq, Eq, gq, Aq, cq);
            const uq = this.getClosestFacetAtLocalCoordinates(cq.x, cq.y, cq.z, Yq, lq, mq);
            return Yq && Oq.q.TransformCoordinatesFromFloatsToRef(Yq.x, Yq.y, Yq.z, xq, Yq), uq
          }
          getClosestFacetAtLocalCoordinates(qq, Eq, gq, Yq) {
            let lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Nq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              aq = null;
            const Vq = this.getFacetLocalPositions(),
              dq = this.getFacetLocalNormals(),
              jq = this.getFacetsAtLocalCoordinates(qq, Eq, gq);
            if (!jq) return null;
            let Hq, oq, Pq, Qq, yq = Number.MAX_VALUE;
            for (let tq = 0; tq < jq.length; tq++) oq = jq[tq], Pq = dq[oq], Qq = Vq[oq], xq = (qq - Qq.x) * Pq.x + (Eq - Qq.y) * Pq.y + (gq - Qq.z) * Pq.z, (!Wq || Wq && Nq && xq >= 0 || Wq && !Nq && xq <= 0) && (xq = Pq.x * Qq.x + Pq.y * Qq.y + Pq.z * Qq.z, Aq = -(Pq.x * qq + Pq.y * Eq + Pq.z * gq - xq) / (Pq.x * Pq.x + Pq.y * Pq.y + Pq.z * Pq.z), cq = qq + Pq.x * Aq, uq = Eq + Pq.y * Aq, Bq = gq + Pq.z * Aq, lq = cq - qq, Oq = uq - Eq, mq = Bq - gq, Hq = lq * lq + Oq * Oq + mq * mq, Hq < yq && (yq = Hq, aq = oq, Yq && (Yq.x = cq, Yq.y = uq, Yq.z = Bq)));
            return aq
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const qq = this._internalAbstractMeshDataInfo._facetData;
            return qq.facetDataEnabled && (qq.facetDataEnabled = !1, qq.facetPositions = [], qq.facetNormals = [], qq.facetPartitioning = new Array, qq.facetParameters = {}, qq.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(qq, Eq) {
            return this
          }
          createNormals(qq) {
            const Eq = this.getVerticesData(mq.g.PositionKind),
              gq = this.iYq();
            let Yq;
            return Yq = this.isVerticesDataPresent(mq.g.NormalKind) ? this.getVerticesData(mq.g.NormalKind) : [], xq.d.ComputeNormals(Eq, gq, Yq, {
              useRightHandedSystem: this.ZJ().useRightHandedSystem
            }), this.setVerticesData(mq.g.NormalKind, Yq, qq), this
          }
          async optimizeIndicesAsync() {
            const qq = this.iYq();
            if (!qq) return this;
            const {
              OptimizeIndices: Eq
            } = await gq.e(342).then((() => gq(42308)));
            return Eq(qq), this.setIndices(qq, this.getTotalVertices()), this
          }
          alignWithNormal(qq, Eq) {
            Eq || (Eq = Qq.b.Y);
            const gq = Oq.o.Na[0],
              Yq = Oq.o.Na[1];
            return Oq.q.CrossToRef(Eq, qq, Yq), Oq.q.CrossToRef(qq, Yq, gq), this.rotationQuaternion ? Oq.h.RotationQuaternionFromAxisToRef(gq, qq, Yq, this.rotationQuaternion) : Oq.q.RotationFromAxisToRef(gq, qq, Yq, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, dq.m)("EdgesRenderer")
          }
          enableEdgesRendering(qq, Eq, gq) {
            throw (0, dq.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.xZ.filter((qq => qq.emitter === this))
          }
        }, (() => {
          const gq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wq[Symbol.metadata] ?? null) : void 0;
          Eq = [tq.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Yq.f)(qq, null, Eq, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: qq => "_ApplySkeleton" in qq,
              get: qq => qq._ApplySkeleton
            },
            metadata: gq
          }, null, Nq), gq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gq
          })
        })(), qq.OCCLUSION_TYPE_NONE = ((0, Yq.i)(qq, Nq), 0), qq.OCCLUSION_TYPE_OPTIMISTIC = 1, qq.OCCLUSION_TYPE_STRICT = 2, qq.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, qq.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, qq.CULLINGSTRATEGY_STANDARD = 0, qq.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, qq.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, qq.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, qq.DefaultIsPickable = !0, qq
      })(),
      Mq = !1;

    function Tq() {
      Mq || (Mq = !0, (0, vq.g)("BABYLON.AbstractMesh", fq))
    }(Nq = fq.prototype).createOrUpdateSubmeshesOctree ?? (Nq.createOrUpdateSubmeshesOctree = (0, dq.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (aq = fq.prototype).getPhysicsImpostor ?? (aq.getPhysicsImpostor = (0, dq.i)("AbstractMesh", "getPhysicsImpostor")), (Vq = fq.prototype).setPhysicsLinkWith ?? (Vq.setPhysicsLinkWith = (0, dq.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(fq.prototype, "occlusionRetryCount") || Object.defineProperty(fq.prototype, "occlusionRetryCount", (0, dq.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(fq.prototype, "occlusionType") || Object.defineProperty(fq.prototype, "occlusionType", (0, dq.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(fq.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(fq.prototype, "occlusionQueryAlgorithmType", (0, dq.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(fq.prototype, "isOccluded") || Object.defineProperty(fq.prototype, "isOccluded", (0, dq.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(fq.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(fq.prototype, "isOcclusionQueryInProgress", (0, dq.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(fq.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(fq.prototype, "forceRenderingWhenOccluded", (0, dq.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(fq.prototype, "occlusionForRenderPassId") || Object.defineProperty(fq.prototype, "occlusionForRenderPassId", (0, dq.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(fq.prototype, "decalMap") || Object.defineProperty(fq.prototype, "decalMap", (0, dq.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(fq.prototype, "uR") || Object.defineProperty(fq.prototype, "uR", (0, dq.e)("AbstractMesh", "uR")), Object.getOwnPropertyDescriptor(fq.prototype, "physicsImpostor") || Object.defineProperty(fq.prototype, "physicsImpostor", (0, dq.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(fq.prototype, "showBoundingBox") || Object.defineProperty(fq.prototype, "showBoundingBox", (0, dq.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(fq.prototype, "edgesRenderer") || Object.defineProperty(fq.prototype, "edgesRenderer", (0, dq.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(fq.prototype, "renderOutline") || Object.defineProperty(fq.prototype, "renderOutline", (0, dq.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(fq.prototype, "renderOverlay") || Object.defineProperty(fq.prototype, "renderOverlay", (0, dq.e)("AbstractMesh", "renderOverlay"))
  },
  40180: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => jq
    });
    var Yq = gq(37139),
      lq = gq(37289),
      Oq = gq(40176),
      mq = gq(39879),
      xq = gq(40040),
      Aq = gq(40186),
      cq = gq(40055),
      uq = gq(39845),
      Bq = gq(38653),
      Wq = gq(39786),
      Nq = gq(40067),
      aq = gq(37153),
      Vq = gq(40190),
      dq = gq(39817);
    class jq {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(qq) {
        this._boundingBias ? this._boundingBias.WG(qq) : this._boundingBias = qq.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(qq) {
        const Eq = new jq(jq.RandomId(), qq.ZJ());
        return Eq.applyToMesh(qq), Eq
      }
      get meshes() {
        return this._meshes
      }
      constructor(qq, Eq, gq) {
        let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Yq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Yq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Eq || aq.b.LastCreatedScene, this._scene && (this.id = qq, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Ba(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = lq, null !== mq && (this._totalVertices = mq), gq ? this.setAllVerticesData(gq, lq) : null === mq && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Oq && (this.applyToMesh(Oq), Oq.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      ZJ() {
        return this._scene
      }
      Ba() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let qq = 0; qq < this._meshes.length; qq++)
          if (!this._meshes[qq].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const qq = new Set;
        for (const Eq in this._vertexBuffers) qq.add(this._vertexBuffers[Eq].getWrapperBuffer());
        qq.forEach((qq => {
          qq._rebuild()
        }))
      }
      setAllVerticesData(qq, Eq) {
        qq.applyToGeometry(this, Eq), this._notifyUpdate()
      }
      setVerticesData(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        gq && Array.isArray(Eq) && (Eq = new Float32Array(Eq));
        const lq = new mq.g(this._engine, Eq, qq, {
          updatable: gq,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Yq,
          label: "Geometry_" + this.id + "_" + qq
        });
        this.setVerticesBuffer(lq)
      }
      removeVerticesData(qq) {
        this._vertexBuffers[qq] && (this._vertexBuffers[qq].dispose(), delete this._vertexBuffers[qq]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const lq = qq.getKind();
        this._vertexBuffers[lq] && gq && this._vertexBuffers[lq].dispose(), qq._buffer && qq._ownsBuffer && qq._buffer._increaseReferences(), this._vertexBuffers[lq] = qq;
        const Oq = this._meshes,
          xq = Oq.length;
        if (lq === mq.g.PositionKind) {
          this._totalVertices = Eq ?? qq._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : qq.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const gq = this._extend && this._extend.minimum || new Yq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            lq = this._extend && this._extend.maximum || new Yq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let qq = 0; qq < xq; qq++) {
            const Eq = Oq[qq];
            Eq.buildBoundingInfo(gq, lq), Eq._createGlobalSubMesh(Eq.isUnIndexed), Eq.computeWorldMatrix(!0), Eq.synchronizeInstances()
          }
        }
        this._notifyUpdate(lq)
      }
      updateVerticesDataDirectly(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lq = this.getVertexBuffer(qq);
        lq && (lq.updateDirectly(Eq, gq, Yq), this._notifyUpdate(qq))
      }
      updateVerticesData(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this.getVertexBuffer(qq);
        Yq && (Yq.update(Eq), qq === mq.g.PositionKind && this._updateBoundingInfo(gq, Eq), this._notifyUpdate(qq))
      }
      _updateBoundingInfo(qq, Eq) {
        if (qq && this._updateExtend(Eq), this._resetPointsArrayCache(), qq) {
          const qq = this._meshes;
          for (const Eq of qq) {
            Eq.hasBoundingInfo ? Eq.yR().reConstruct(this._extend.minimum, this._extend.maximum) : Eq.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const qq = Eq.fn;
            for (const Eq of qq) Eq.refreshBoundingInfo()
          }
        }
      }
      _bind(qq, Eq, gq, Yq) {
        if (!qq) return;
        void 0 === Eq && (Eq = this._indexBuffer);
        const lq = this.getVertexBuffers();
        if (!lq) return;
        if (Eq != this._indexBuffer || !this._vertexArrayObjects && !Yq) return void this._engine.bindBuffers(lq, Eq, qq, gq);
        const Oq = Yq || this._vertexArrayObjects,
          mq = this._engine;
        Oq[qq.key] || (Oq[qq.key] = mq.recordVertexArrayObject(lq, Eq, qq, gq)), mq.bindVertexArrayObject(Oq[qq.key], Eq)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(qq, Eq, gq) {
        const Yq = this.getVertexBuffer(qq);
        return Yq ? Yq.getFloatData(this._totalVertices, gq || Eq && 1 !== this._meshes.length) : null
      }
      copyVerticesData(qq, Eq) {
        const gq = this.getVertexBuffer(qq);
        if (!gq) return;
        Eq[qq] || (Eq[qq] = new Float32Array(this._totalVertices * gq.getSize()));
        const Yq = gq.getData();
        Yq && (0, dq.d)(Yq, gq.getSize(), gq.type, gq.byteOffset, gq.byteStride, gq.normalized, this._totalVertices, Eq[qq])
      }
      isVertexBufferUpdatable(qq) {
        const Eq = this._vertexBuffers[qq];
        return !!Eq && Eq.isUpdatable()
      }
      getVertexBuffer(qq) {
        return this.isReady() ? this._vertexBuffers[qq] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(qq) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[qq] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq)
      }
      getVerticesDataKinds() {
        const qq = [];
        let Eq;
        if (!this._vertexBuffers && this._delayInfo)
          for (Eq in this._delayInfo) qq.push(Eq);
        else
          for (Eq in this._vertexBuffers) qq.push(Eq);
        return qq
      }
      updateIndices(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Yq = qq.length !== this._indices.length;
            if (gq || (this._indices = qq.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, qq, Eq), Yq)
              for (const qq of this._meshes) qq._createGlobalSubMesh(!0)
          } else this.setIndices(qq, null, !0)
      }
      setIndexBuffer(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = qq, this._totalVertices = Eq, this._totalIndices = gq, qq.is32Bits = null === Yq ? Eq > 65535 : Yq;
        for (const lq of this._meshes) lq._createGlobalSubMesh(!0), lq.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = qq, this._indexBufferIsUpdatable = gq, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, gq, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Eq && (this._totalVertices = Eq);
        for (const lq of this._meshes) lq._createGlobalSubMesh(!Yq), lq.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      iYq(qq, Eq) {
        if (!this.isReady()) return null;
        const gq = this._indices;
        return Eq || qq && 1 !== this._meshes.length ? gq.slice() : gq
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        qq && this._vertexArrayObjects && this._vertexArrayObjects[qq.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[qq.key]), delete this._vertexArrayObjects[qq.key])
      }
      releaseForMesh(qq, Eq) {
        const gq = this._meshes,
          Yq = gq.indexOf(qq); - 1 !== Yq && (gq.splice(Yq, 1), this._vertexArrayObjects && qq._invalidateInstanceVertexArrayObject(), qq._geometry = null, 0 === gq.length && Eq && this.dispose())
      }
      applyToMesh(qq) {
        if (qq._geometry === this) return;
        const Eq = qq._geometry;
        Eq && Eq.releaseForMesh(qq), this._vertexArrayObjects && qq._invalidateInstanceVertexArrayObject();
        const gq = this._meshes;
        qq._geometry = this, qq._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), gq.push(qq), this.isReady() ? this._applyToMesh(qq) : this._boundingInfo && qq.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!qq && (qq = this.getVerticesData(mq.g.PositionKind), !qq)) return;
          this._extend = (0, Nq.c)(qq, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(qq) {
        for (const Eq in this._vertexBuffers) {
          const gq = this._vertexBuffers[Eq];
          gq._buffer.getBuffer() || gq.create(), Eq === mq.g.PositionKind && (this._extend || this._updateExtend(), qq.buildBoundingInfo(this._extend.minimum, this._extend.maximum), qq._createGlobalSubMesh(qq.isUnIndexed), qq._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), qq._syncGeometryWithMorphTargetManager(), qq.synchronizeInstances()
      }
      _notifyUpdate(qq) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, qq), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Eq of this._meshes) Eq._markSubMeshesAsAttributesDirty()
      }
      load(qq, Eq) {
        2 !== this.delayLoadState && (this.isReady() ? Eq && Eq() : (this.delayLoadState = 2, this._queueLoad(qq, Eq)))
      }
      _queueLoad(qq, Eq) {
        this.delayLoadingFile && (qq.addPendingData(this), (async () => {
          try {
            const gq = await qq._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void qq.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(gq), this), this.delayLoadState = 1, this._delayInfo = [], qq.removePendingData(this);
            const Yq = this._meshes,
              lq = Yq.length;
            for (let qq = 0; qq < lq; qq++) this._applyToMesh(Yq[qq]);
            Eq && Eq()
          } catch (gq) {
            qq.removePendingData(this), qq.bM || Bq.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${gq}`)
          }
        })())
      }
      toLeftHanded() {
        const qq = this.iYq(!1);
        if (null != qq && qq.length > 0) {
          for (let Eq = 0; Eq < qq.length; Eq += 3) {
            const gq = qq[Eq + 0];
            qq[Eq + 0] = qq[Eq + 2], qq[Eq + 2] = gq
          }
          this.setIndices(qq)
        }
        const Eq = this.getVerticesData(mq.g.PositionKind, !1);
        if (null != Eq && Eq.length > 0) {
          for (let qq = 0; qq < Eq.length; qq += 3) Eq[qq + 2] = -Eq[qq + 2];
          this.setVerticesData(mq.g.PositionKind, Eq, !1)
        }
        const gq = this.getVerticesData(mq.g.NormalKind, !1);
        if (null != gq && gq.length > 0) {
          for (let qq = 0; qq < gq.length; qq += 3) gq[qq + 2] = -gq[qq + 2];
          this.setVerticesData(mq.g.NormalKind, gq, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const qq = this.getVerticesData(mq.g.PositionKind);
        if (!qq || 0 === qq.length) return !1;
        for (let Eq = 3 * this._positionsCache.length, gq = this._positionsCache.length; Eq < qq.length; Eq += 3, ++gq) this._positionsCache[gq] = Yq.q.FromArray(qq, Eq);
        for (let Eq = 0, gq = 0; Eq < qq.length; Eq += 3, ++gq) this._positionsCache[gq].set(qq[0 + Eq], qq[1 + Eq], qq[2 + Eq]);
        return this._positionsCache.length = qq.length / 3, this._positions = this._positionsCache, !0
      }
      bM() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const gq in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[gq]);
          this._vertexArrayObjects = {};
          const qq = this._meshes,
            Eq = qq.length;
          for (let gq = 0; gq < Eq; gq++) qq[gq]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const qq = this._meshes,
          Eq = qq.length;
        let gq;
        for (gq = 0; gq < Eq; gq++) this.releaseForMesh(qq[gq]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Yq in this._vertexBuffers) this._vertexBuffers[Yq].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const qq = this._parentContainer.geometries.indexOf(this);
          qq > -1 && this._parentContainer.geometries.splice(qq, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(qq) {
        const Eq = new jq(qq, this._scene),
          gq = this.iYq(void 0, !0);
        gq && Eq.setIndices(gq);
        let Yq, lq = !1;
        for (Yq in this._vertexBuffers) {
          const qq = this.getVertexBuffer(Yq),
            gq = qq.getData();
          if (!gq) continue;
          const Oq = qq.isUpdatable(),
            xq = qq.getSize(),
            {
              type: Aq,
              byteOffset: cq,
              byteStride: uq,
              normalized: Bq
            } = qq;
          lq = lq || Oq;
          let Wq = this._totalVertices;
          if (qq.getIsInstanced()) {
            let qq;
            qq = gq instanceof Array ? 4 * gq.length : gq.byteLength, Wq = qq / uq
          }
          const Nq = (0, dq.r)(gq, xq, Aq, cq, uq, Wq, !0),
            aq = new mq.g(this._engine, Nq, Yq, {
              updatable: Oq,
              useBytes: !1,
              stride: xq,
              size: xq,
              offset: 0,
              type: Aq,
              normalized: Bq,
              takeBufferOwnership: !0,
              instanced: qq.getIsInstanced()
            });
          Eq.setVerticesBuffer(aq, Wq)
        }
        for (Yq in Eq._updatable = lq, Eq.delayLoadState = this.delayLoadState, Eq.delayLoadingFile = this.delayLoadingFile, Eq._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Eq._delayInfo = Eq._delayInfo || [], Eq._delayInfo.push(Yq);
        return Eq._boundingInfo = new cq.d(this._extend.minimum, this._extend.maximum), Eq
      }
      serialize() {
        const qq = {};
        return qq.id = this.id, qq.uniqueId = this.uniqueId, qq.updatable = this._updatable, Wq.b && Wq.b.HasTags(this) && (qq.tags = Wq.b.GetTags(this)), qq
      }
      _toNumberArray(qq) {
        return Array.isArray(qq) ? qq : Array.prototype.slice.call(qq)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const qq in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, qq) && (this._vertexBuffers[qq]._buffer._data = null)
      }
      serializeVerticeData() {
        const qq = this.serialize();
        return this.isVerticesDataPresent(mq.g.PositionKind) && (qq.positions = this._toNumberArray(this.getVerticesData(mq.g.PositionKind)), this.isVertexBufferUpdatable(mq.g.PositionKind) && (qq.positionsUpdatable = !0)), this.isVerticesDataPresent(mq.g.NormalKind) && (qq.normals = this._toNumberArray(this.getVerticesData(mq.g.NormalKind)), this.isVertexBufferUpdatable(mq.g.NormalKind) && (qq.normalsUpdatable = !0)), this.isVerticesDataPresent(mq.g.TangentKind) && (qq.tangents = this._toNumberArray(this.getVerticesData(mq.g.TangentKind)), this.isVertexBufferUpdatable(mq.g.TangentKind) && (qq.tangentsUpdatable = !0)), this.isVerticesDataPresent(mq.g.UVKind) && (qq.uvs = this._toNumberArray(this.getVerticesData(mq.g.UVKind)), this.isVertexBufferUpdatable(mq.g.UVKind) && (qq.uvsUpdatable = !0)), this.isVerticesDataPresent(mq.g.UV2Kind) && (qq.uvs2 = this._toNumberArray(this.getVerticesData(mq.g.UV2Kind)), this.isVertexBufferUpdatable(mq.g.UV2Kind) && (qq.uvs2Updatable = !0)), this.isVerticesDataPresent(mq.g.UV3Kind) && (qq.uvs3 = this._toNumberArray(this.getVerticesData(mq.g.UV3Kind)), this.isVertexBufferUpdatable(mq.g.UV3Kind) && (qq.uvs3Updatable = !0)), this.isVerticesDataPresent(mq.g.UV4Kind) && (qq.uvs4 = this._toNumberArray(this.getVerticesData(mq.g.UV4Kind)), this.isVertexBufferUpdatable(mq.g.UV4Kind) && (qq.uvs4Updatable = !0)), this.isVerticesDataPresent(mq.g.UV5Kind) && (qq.uvs5 = this._toNumberArray(this.getVerticesData(mq.g.UV5Kind)), this.isVertexBufferUpdatable(mq.g.UV5Kind) && (qq.uvs5Updatable = !0)), this.isVerticesDataPresent(mq.g.UV6Kind) && (qq.uvs6 = this._toNumberArray(this.getVerticesData(mq.g.UV6Kind)), this.isVertexBufferUpdatable(mq.g.UV6Kind) && (qq.uvs6Updatable = !0)), this.isVerticesDataPresent(mq.g.ColorKind) && (qq.colors = this._toNumberArray(this.getVerticesData(mq.g.ColorKind)), this.isVertexBufferUpdatable(mq.g.ColorKind) && (qq.colorsUpdatable = !0)), this.isVerticesDataPresent(mq.g.MatricesIndicesKind) && (qq.matricesIndices = this._toNumberArray(this.getVerticesData(mq.g.MatricesIndicesKind)), qq.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(mq.g.MatricesIndicesKind) && (qq.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(mq.g.MatricesWeightsKind) && (qq.matricesWeights = this._toNumberArray(this.getVerticesData(mq.g.MatricesWeightsKind)), this.isVertexBufferUpdatable(mq.g.MatricesWeightsKind) && (qq.matricesWeightsUpdatable = !0)), qq.indices = this._toNumberArray(this.iYq()), qq
      }
      static ExtractFromMesh(qq, Eq) {
        const gq = qq._geometry;
        return gq ? gq.copy(Eq) : null
      }
      static RandomId() {
        return uq.f.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(qq, Eq) {
        for (let gq = 0; gq < Eq.geometries.length; gq++)
          if (Eq.geometries[gq]._loadedUniqueId === qq) return Eq.geometries[gq];
        return null
      }
      static _ImportGeometry(qq, Eq) {
        const gq = Eq.ZJ(),
          Yq = qq.geometryUniqueId,
          Oq = qq.geometryId;
        if (Yq || Oq) {
          const qq = Yq ? this._GetGeometryByLoadedUniqueId(Yq, gq) : gq.getGeometryById(Oq);
          qq && qq.applyToMesh(Eq)
        } else if (qq instanceof ArrayBuffer) {
          const gq = Eq._binaryInfo;
          if (gq.positionsAttrDesc && gq.positionsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.positionsAttrDesc.offset, gq.positionsAttrDesc.count);
            Eq.setVerticesData(mq.g.PositionKind, Yq, !1)
          }
          if (gq.normalsAttrDesc && gq.normalsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.normalsAttrDesc.offset, gq.normalsAttrDesc.count);
            Eq.setVerticesData(mq.g.NormalKind, Yq, !1)
          }
          if (gq.tangetsAttrDesc && gq.tangetsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.tangetsAttrDesc.offset, gq.tangetsAttrDesc.count);
            Eq.setVerticesData(mq.g.TangentKind, Yq, !1)
          }
          if (gq.uvsAttrDesc && gq.uvsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvsAttrDesc.offset, gq.uvsAttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UVKind, Yq, !1)
          }
          if (gq.uvs2AttrDesc && gq.uvs2AttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvs2AttrDesc.offset, gq.uvs2AttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UV2Kind, Yq, !1)
          }
          if (gq.uvs3AttrDesc && gq.uvs3AttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvs3AttrDesc.offset, gq.uvs3AttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UV3Kind, Yq, !1)
          }
          if (gq.uvs4AttrDesc && gq.uvs4AttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvs4AttrDesc.offset, gq.uvs4AttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UV4Kind, Yq, !1)
          }
          if (gq.uvs5AttrDesc && gq.uvs5AttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvs5AttrDesc.offset, gq.uvs5AttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UV5Kind, Yq, !1)
          }
          if (gq.uvs6AttrDesc && gq.uvs6AttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.uvs6AttrDesc.offset, gq.uvs6AttrDesc.count);
            if (Vq.b)
              for (let qq = 1; qq < Yq.length; qq += 2) Yq[qq] = 1 - Yq[qq];
            Eq.setVerticesData(mq.g.UV6Kind, Yq, !1)
          }
          if (gq.colorsAttrDesc && gq.colorsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.colorsAttrDesc.offset, gq.colorsAttrDesc.count);
            Eq.setVerticesData(mq.g.ColorKind, Yq, !1, gq.colorsAttrDesc.stride)
          }
          if (gq.matricesIndicesAttrDesc && gq.matricesIndicesAttrDesc.count > 0) {
            const Yq = new Int32Array(qq, gq.matricesIndicesAttrDesc.offset, gq.matricesIndicesAttrDesc.count),
              lq = [];
            for (let qq = 0; qq < Yq.length; qq++) {
              const Eq = Yq[qq];
              lq.push(255 & Eq), lq.push((65280 & Eq) >> 8), lq.push((16711680 & Eq) >> 16), lq.push(Eq >> 24 & 255)
            }
            Eq.setVerticesData(mq.g.MatricesIndicesKind, lq, !1)
          }
          if (gq.matricesIndicesExtraAttrDesc && gq.matricesIndicesExtraAttrDesc.count > 0) {
            const Yq = new Int32Array(qq, gq.matricesIndicesExtraAttrDesc.offset, gq.matricesIndicesExtraAttrDesc.count),
              lq = [];
            for (let qq = 0; qq < Yq.length; qq++) {
              const Eq = Yq[qq];
              lq.push(255 & Eq), lq.push((65280 & Eq) >> 8), lq.push((16711680 & Eq) >> 16), lq.push(Eq >> 24 & 255)
            }
            Eq.setVerticesData(mq.g.MatricesIndicesExtraKind, lq, !1)
          }
          if (gq.matricesWeightsAttrDesc && gq.matricesWeightsAttrDesc.count > 0) {
            const Yq = new Float32Array(qq, gq.matricesWeightsAttrDesc.offset, gq.matricesWeightsAttrDesc.count);
            Eq.setVerticesData(mq.g.MatricesWeightsKind, Yq, !1)
          }
          if (gq.indicesAttrDesc && gq.indicesAttrDesc.count > 0) {
            const Yq = new Int32Array(qq, gq.indicesAttrDesc.offset, gq.indicesAttrDesc.count);
            Eq.setIndices(Yq, null)
          }
          if (gq.subMeshesAttrDesc && gq.subMeshesAttrDesc.count > 0) {
            const Yq = new Int32Array(qq, gq.subMeshesAttrDesc.offset, 5 * gq.subMeshesAttrDesc.count);
            Eq.fn = [];
            for (let qq = 0; qq < gq.subMeshesAttrDesc.count; qq++) {
              const gq = Yq[5 * qq + 0],
                lq = Yq[5 * qq + 1],
                Oq = Yq[5 * qq + 2],
                mq = Yq[5 * qq + 3],
                Aq = Yq[5 * qq + 4];
              xq.c.AddToMesh(gq, lq, Oq, mq, Aq, Eq)
            }
          }
        } else if (qq.positions && qq.normals && qq.indices) {
          if (Eq.setVerticesData(mq.g.PositionKind, qq.positions, qq.positions._updatable || qq.positionsUpdatable), Eq.setVerticesData(mq.g.NormalKind, qq.normals, qq.normals._updatable || qq.normalsUpdatable), qq.tangents && Eq.setVerticesData(mq.g.TangentKind, qq.tangents, qq.tangents._updatable || qq.tangentsUpdatable), qq.uvs && Eq.setVerticesData(mq.g.UVKind, qq.uvs, qq.uvs._updatable || qq.uvsUpdatable), qq.uvs2 && Eq.setVerticesData(mq.g.UV2Kind, qq.uvs2, qq.uvs2._updatable || qq.uvs2Updatable), qq.uvs3 && Eq.setVerticesData(mq.g.UV3Kind, qq.uvs3, qq.uvs3._updatable || qq.uvs3Updatable), qq.uvs4 && Eq.setVerticesData(mq.g.UV4Kind, qq.uvs4, qq.uvs4._updatable || qq.uvs4Updatable), qq.uvs5 && Eq.setVerticesData(mq.g.UV5Kind, qq.uvs5, qq.uvs5._updatable || qq.uvs5Updatable), qq.uvs6 && Eq.setVerticesData(mq.g.UV6Kind, qq.uvs6, qq.uvs6._updatable || qq.uvs6Updatable), qq.colors && Eq.setVerticesData(mq.g.ColorKind, lq.g.CheckColors4(qq.colors, qq.positions.length / 3), qq.colors._updatable), qq.matricesIndices)
            if (qq.matricesIndices._isExpanded || qq.matricesIndicesExpanded) delete qq.matricesIndices._isExpanded, delete qq.matricesIndicesExpanded, Eq.setVerticesData(mq.g.MatricesIndicesKind, qq.matricesIndices, qq.matricesIndices._updatable || qq.matricesIndicesUpdatable);
            else {
              const gq = [];
              for (let Eq = 0; Eq < qq.matricesIndices.length; Eq++) {
                const Yq = qq.matricesIndices[Eq];
                gq.push(255 & Yq), gq.push((65280 & Yq) >> 8), gq.push((16711680 & Yq) >> 16), gq.push(Yq >> 24 & 255)
              }
              Eq.setVerticesData(mq.g.MatricesIndicesKind, gq, qq.matricesIndices._updatable || qq.matricesIndicesUpdatable)
            } if (qq.matricesIndicesExtra)
            if (qq.matricesIndicesExtraExpanded || qq.matricesIndicesExtra._isExpanded) delete qq.matricesIndices._isExpanded, delete qq.matricesIndicesExtraExpanded, Eq.setVerticesData(mq.g.MatricesIndicesExtraKind, qq.matricesIndicesExtra, qq.matricesIndicesExtra._updatable || qq.matricesIndicesExtraUpdatable);
            else {
              const gq = [];
              for (let Eq = 0; Eq < qq.matricesIndicesExtra.length; Eq++) {
                const Yq = qq.matricesIndicesExtra[Eq];
                gq.push(255 & Yq), gq.push((65280 & Yq) >> 8), gq.push((16711680 & Yq) >> 16), gq.push(Yq >> 24 & 255)
              }
              Eq.setVerticesData(mq.g.MatricesIndicesExtraKind, gq, qq.matricesIndicesExtra._updatable || qq.matricesIndicesExtraUpdatable)
            } qq.matricesWeights && (jq._CleanMatricesWeights(qq, Eq), Eq.setVerticesData(mq.g.MatricesWeightsKind, qq.matricesWeights, qq.matricesWeights._updatable)), qq.matricesWeightsExtra && Eq.setVerticesData(mq.g.MatricesWeightsExtraKind, qq.matricesWeightsExtra, qq.matricesWeights._updatable), Eq.setIndices(qq.indices, null)
        }
        if (qq.fn) {
          Eq.fn = [];
          for (let gq = 0; gq < qq.fn.length; gq++) {
            const Yq = qq.fn[gq];
            xq.c.AddToMesh(Yq.materialIndex, Yq.verticesStart, Yq.verticesCount, Yq.indexStart, Yq.indexCount, Eq)
          }
        }
        Eq._shouldGenerateFlatShading && (Eq.convertToFlatShadedMesh(), Eq._shouldGenerateFlatShading = !1), Eq.computeWorldMatrix(!0), gq.onMeshImportedObservable.notifyObservers(Eq)
      }
      static _CleanMatricesWeights(qq, Eq) {
        const gq = .001;
        if (!Aq.e.CleanBoneMatrixWeights) return;
        let Yq;
        if (!(qq.skeletonId > -1)) return;
        {
          const gq = Eq.ZJ().getLastSkeletonById(qq.skeletonId);
          if (!gq) return;
          Yq = gq.bones.length
        }
        const lq = Eq.getVerticesData(mq.g.MatricesIndicesKind),
          Oq = Eq.getVerticesData(mq.g.MatricesIndicesExtraKind),
          xq = qq.matricesWeights,
          cq = qq.matricesWeightsExtra,
          uq = qq.numBoneInfluencer,
          Bq = xq.length;
        for (let mq = 0; mq < Bq; mq += 4) {
          let qq = 0,
            Eq = -1;
          for (let Yq = 0; Yq < 4; Yq++) {
            const lq = xq[mq + Yq];
            qq += lq, lq < gq && Eq < 0 && (Eq = Yq)
          }
          if (cq)
            for (let Yq = 0; Yq < 4; Yq++) {
              const lq = cq[mq + Yq];
              qq += lq, lq < gq && Eq < 0 && (Eq = Yq + 4)
            }
          if ((Eq < 0 || Eq > uq - 1) && (Eq = uq - 1), qq > gq) {
            const Eq = 1 / qq;
            for (let qq = 0; qq < 4; qq++) xq[mq + qq] *= Eq;
            if (cq)
              for (let qq = 0; qq < 4; qq++) cq[mq + qq] *= Eq
          } else Eq >= 4 ? (cq[mq + Eq - 4] = 1 - qq, Oq[mq + Eq - 4] = Yq) : (xq[mq + Eq] = 1 - qq, lq[mq + Eq] = Yq)
        }
        Eq.setVerticesData(mq.g.MatricesIndicesKind, lq), qq.matricesWeightsExtra && Eq.setVerticesData(mq.g.MatricesIndicesExtraKind, Oq)
      }
      static Parse(qq, Eq, gq) {
        const lq = new jq(qq.id, Eq, void 0, qq.updatable);
        return lq._loadedUniqueId = qq.uniqueId, Wq.b && Wq.b.AddTagsTo(lq, qq.tags), qq.delayLoadingFile ? (lq.delayLoadState = 4, lq.delayLoadingFile = gq + qq.delayLoadingFile, lq._boundingInfo = new cq.d(Yq.q.FromArray(qq.boundingBoxMinimum), Yq.q.FromArray(qq.boundingBoxMaximum)), lq._delayInfo = [], qq.hasUVs && lq._delayInfo.push(mq.g.UVKind), qq.hasUVs2 && lq._delayInfo.push(mq.g.UV2Kind), qq.hasUVs3 && lq._delayInfo.push(mq.g.UV3Kind), qq.hasUVs4 && lq._delayInfo.push(mq.g.UV4Kind), qq.hasUVs5 && lq._delayInfo.push(mq.g.UV5Kind), qq.hasUVs6 && lq._delayInfo.push(mq.g.UV6Kind), qq.hasColors && lq._delayInfo.push(mq.g.ColorKind), qq.hasMatricesIndices && lq._delayInfo.push(mq.g.MatricesIndicesKind), qq.hasMatricesWeights && lq._delayInfo.push(mq.g.MatricesWeightsKind), lq._delayLoadingFunction = Oq.d.ImportVertexData) : Oq.d.ImportVertexData(qq, lq), Eq.pushGeometry(lq, !0), lq
      }
    }
  },
  40221: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Bq,
      c: () => aq
    });
    var Yq = gq(37139),
      lq = gq(38653),
      Oq = gq(40197),
      mq = gq(40163),
      xq = gq(38649),
      Aq = gq(40199),
      cq = gq(39879),
      uq = gq(37171);
    class Bq extends Oq.c {
      constructor(qq, Eq) {
        super(qq, Eq.ZJ()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Eq.Z5(this), this._sourceMesh = Eq, this._unIndexed = Eq._unIndexed, this.position.WG(Eq.position), this.rotation.WG(Eq.rotation), this.rc.WG(Eq.rc), Eq.rotationQuaternion && (this.rotationQuaternion = Eq.rotationQuaternion.clone()), this.animations = Eq.animations.slice();
        for (const gq of Eq.getAnimationRanges()) null != gq && this.createAnimationRange(gq.name, gq.from, gq.to);
        if (this.infiniteDistance = Eq.infiniteDistance, this.setPivotMatrix(Eq.getPivotMatrix()), Eq.skeleton || Eq.morphTargetManager || !Eq.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const qq = Eq.yR();
          this.buildBoundingInfo(qq.minimum, qq.maximum)
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
      set receiveShadows(qq) {
        this._sourceMesh?.receiveShadows !== qq && lq.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(qq) {
        this._sourceMesh?.material !== qq && lq.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(qq) {
        this._sourceMesh?.visibility !== qq && lq.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(qq) {
        this._sourceMesh?.skeleton !== qq && lq.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(qq) {
        this._sourceMesh && qq !== this._sourceMesh.renderingGroupId && lq.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(qq) {
        this._sourceMesh && qq !== this._sourceMesh.meshBlendingTag && lq.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get Plq() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(qq) {
        return this._sourceMesh.createInstance(qq)
      }
      isReady() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(qq, !0)
      }
      getVerticesData(qq, Eq, gq) {
        return this._sourceMesh.getVerticesData(qq, Eq, gq)
      }
      copyVerticesData(qq, Eq) {
        this._sourceMesh.copyVerticesData(qq, Eq)
      }
      getVertexBuffer(qq, Eq) {
        return this._sourceMesh.getVertexBuffer(qq, Eq)
      }
      setVerticesData(qq, Eq, gq, Yq) {
        return this.Plq && this.Plq.setVerticesData(qq, Eq, gq, Yq), this.Plq
      }
      updateVerticesData(qq, Eq, gq, Yq) {
        return this.Plq && this.Plq.updateVerticesData(qq, Eq, gq, Yq), this.Plq
      }
      setIndices(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.Plq && this.Plq.setIndices(qq, Eq), this.Plq
      }
      isVerticesDataPresent(qq) {
        return this._sourceMesh.isVerticesDataPresent(qq)
      }
      iYq() {
        return this._sourceMesh.iYq()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.yR().isLocked) return this;
        qq = "object" === typeof Eq ? Eq : {
          applySkeleton: Eq,
          applyMorph: gq
        };
        const Yq = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(qq, null, cq.g.PositionKind), Yq), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(qq, Eq) {
        if (super._activate(qq, Eq), this._sourceMesh.fn || lq.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, qq), Eq) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Aq.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Yq.e);
          const qq = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Yq.o.Na[7].WG(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.WG(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.WG(Yq.o.Na[7]), this._currentLOD._masterMesh = qq, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get GJ() {
        return !0
      }
      getLOD(qq) {
        if (!qq) return this;
        const Eq = this.Plq.getLODLevels();
        if (Eq && 0 !== Eq.length) {
          const Eq = this.yR();
          this._currentLOD = this.Plq.getLOD(qq, Eq.DYq)
        } else this._currentLOD = this.Plq;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(qq) {
        return this.Plq._preActivateForIntermediateRendering(qq)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.fn)
          for (let qq = 0; qq < this._sourceMesh.fn.length; qq++) this._sourceMesh.fn[qq].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.yR().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(qq);
        if (xq.b.DeepCopy(this, Yq, ["name", "fn", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Plq", "GJ", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "olq", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Dmq", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Eq && (Yq.parent = Eq), !gq)
          for (let lq = 0; lq < this.ZJ().meshes.length; lq++) {
            const qq = this.ZJ().meshes[lq];
            qq.parent === this && qq.clone(qq.name, Yq)
          }
        return Yq.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Yq), Yq
      }
      dispose(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.qqq(this), super.dispose(qq, Eq)
      }
      _serializeAsParent(qq) {
        super._serializeAsParent(qq), qq.parentId = this._sourceMesh.uniqueId, qq.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = this.clone("Clone of " + (this.name || this.id), qq || this.parent, !0, Eq && Eq.newSourcedMesh);
        Yq && gq && gq(this, Yq);
        for (const lq of this.getChildTransformNodes(!0)) lq.instantiateHierarchy(Yq, Eq, gq);
        return Yq
      }
    }
    let Wq = !1;

    function Nq(qq, Eq, gq, Yq, lq) {
      for (let Oq = 0; Oq < Eq.length; Oq++) {
        const mq = qq[Eq[Oq]] ?? 0,
          xq = lq + gq[Oq];
        mq.toArray ? mq.toArray(Yq, xq) : mq.copyToArray ? mq.copyToArray(Yq, xq) : Yq[xq] = mq
      }
    }

    function aq() {
      Wq || (Wq = !0, mq.e._instancedMeshFactory = (qq, Eq) => {
        const gq = new Bq(qq, Eq);
        if (Eq.uR) {
          gq.uR = {};
          for (const qq in Eq.uR) gq.uR[qq] = Eq.uR[qq]
        }
        return gq
      }, mq.e.prototype.xR = function(qq, Eq) {
        if (!this.uR) {
          this.uR = {};
          for (const qq of this.instances) qq.uR = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Ba().getCaps().vertexArrayObject ? {} : void 0
        }), this.uR[qq] = null, this._userInstancedBuffersStorage.strides[qq] = Eq;
        const gq = this._userInstancedBuffersStorage;
        gq.interleavedKinds = [], gq.interleavedOffsets = [], gq.interleavedRowStride = 0;
        for (const Yq in gq.strides) gq.interleavedKinds.push(Yq), gq.interleavedOffsets.push(gq.interleavedRowStride), gq.interleavedRowStride += gq.strides[Yq];
        gq.interleavedData = new Float32Array(32 * gq.interleavedRowStride);
        for (const Yq in gq.interleavedBuffers) gq.interleavedBuffers[Yq].buffer.dispose();
        gq.interleavedBuffers = {}, gq.vertexBuffers[qq] = null;
        for (const Yq of this.instances) Yq.uR[qq] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, mq.e.prototype._processInstancedBuffers = function(qq, Eq) {
        const gq = this._userInstancedBuffersStorage,
          Yq = gq.interleavedRowStride;
        if (!Yq) return;
        const lq = qq ? qq.length : 0,
          Oq = (lq + 1) * Yq;
        let mq = gq.interleavedData;
        if (mq.length < Oq) {
          let qq = mq.length;
          for (; qq < Oq;) qq *= 2;
          mq = gq.interleavedData = new Float32Array(qq)
        }
        const xq = gq.interleavedKinds,
          Aq = gq.interleavedOffsets;
        let uq = 0;
        Eq && (Nq(this.uR, xq, Aq, mq, uq), uq += Yq);
        for (let cq = 0; cq < lq; cq++) Nq(qq[cq].uR, xq, Aq, mq, uq), uq += Yq;
        let Bq = "shared",
          Wq = gq.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Bq = this._instanceDataStorage.engine.currentRenderPassId, gq.renderPasses || (gq.renderPasses = {}), gq.renderPasses[Bq] || (gq.renderPasses[Bq] = {}), Wq = gq.renderPasses[Bq]);
        const aq = gq.interleavedBuffers[Bq];
        let Vq = !aq || aq.data !== mq;
        for (let cq = 0; !Vq && cq < xq.length; cq++) Vq = !Wq[xq[cq]];
        if (!Vq) return void aq.buffer.updateDirectly(mq, 0);
        aq?.buffer.dispose();
        const dq = new cq.b(this.Ba(), mq, !0, Yq, !1, !0);
        for (let cq = 0; cq < xq.length; cq++) {
          const qq = xq[cq],
            Eq = dq.createVertexBuffer(qq, Aq[cq], gq.strides[qq]);
          Eq.hashCode += Eq.byteOffset * 2 ** 24, Wq[qq] = Eq
        }
        gq.interleavedBuffers[Bq] = {
          buffer: dq,
          data: mq
        }, this._invalidateInstanceVertexArrayObject()
      }, mq.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const qq in this._userInstancedBuffersStorage.vertexArrayObjects) this.Ba().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[qq]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, mq.e.prototype._disposeInstanceSpecificData = function() {
        for (const Eq in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Eq].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Eq in this.uR) this._userInstancedBuffersStorage.vertexBuffers[Eq] && this._userInstancedBuffersStorage.vertexBuffers[Eq].dispose();
        const qq = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (qq) {
          for (const Eq in qq) qq[Eq].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.uR = {}
      }, (0, uq.g)("BABYLON.InstancedMesh", Bq))
    }
  },
  40163: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Iq,
      i: () => Dq,
      l: () => Uq
    });
    var Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq = gq(37156),
      Hq = gq(39845),
      oq = gq(39799),
      Pq = gq(38649),
      Qq = gq(39786),
      yq = gq(40172),
      tq = gq(39951),
      rq = gq(37139),
      vq = gq(37289),
      hq = gq(39960),
      nq = gq(39879),
      bq = gq(40176),
      iq = gq(40180),
      Zq = gq(40197),
      fq = gq(40040),
      Mq = gq(40037),
      Tq = gq(40127),
      zq = gq(40202),
      Sq = gq(40186),
      pq = gq(39779),
      Gq = gq(38653),
      Lq = gq(37171),
      Jq = gq(39636),
      kq = gq(39911);
    class Rq {
      constructor(qq, Eq) {
        this.distanceOrScreenCoverage = qq, this.mesh = Eq
      }
    }
    class Uq {}
    class Fq {
      constructor() {
        this.batchCache = new Xq(this), this.batchCacheReplacementModeInFrozenMode = new Xq(this), this.instancesBufferSize = 2048
      }
    }
    class sq {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Xq {
      constructor(qq) {
        this.parent = qq, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class wq {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Kq {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Cq = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Iq extends Zq.c {
      static _GetDefaultSideOrientation(qq) {
        return qq || Iq.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(qq) {
        this._internalMeshDataInfo._useLODScreenCoverage = qq, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(qq) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== qq && (qq && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(nq.g.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(nq.g.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = qq, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new jq.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new jq.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new jq.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new jq.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new jq.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(qq) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(qq)
      }
      get olq() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(qq) {
        this._internalMeshDataInfo._forcedInstanceCount = qq
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(qq) {
        this._internalMeshDataInfo._sideOrientation = qq, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === qq || !this._scene.useRightHandedSystem && 0 === qq
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(qq) {
        this.sideOrientation = qq, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(qq) {
        this._internalMeshDataInfo._overrideRenderingFillMode = qq
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(qq) {
        qq && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (qq.sideOrientation = null), this._setMaterial(qq)
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
      set isUnIndexed(qq) {
        this._unIndexed !== qq && (this._unIndexed = qq, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const qq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return qq ? qq.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const qq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return qq ? qq.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(qq) {
        this._instanceDataStorage.manualUpdate = qq
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(qq) {
        this._instanceDataStorage.previousManualUpdate = qq
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(qq) {
        this._instanceDataStorage.forceMatrixUpdates = qq
      }
      _copySource(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lq = this.ZJ();
        if (qq._geometry && qq._geometry.applyToMesh(this), Pq.b.DeepCopy(qq, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "olq", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "GJ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Dmq", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = qq, lq.useClonedMeshMap && (qq._internalMeshDataInfo.meshMap || (qq._internalMeshDataInfo.meshMap = {}), qq._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = qq._originalBuilderSideOrientation, this._creationDataStorage = qq._creationDataStorage, qq._ranges) {
          const Eq = qq._ranges;
          for (const qq in Eq) Object.prototype.hasOwnProperty.call(Eq, qq) && Eq[qq] && this.createAnimationRange(qq, Eq[qq].from, Eq[qq].to)
        }
        if (qq.metadata && qq.metadata.clone ? this.metadata = qq.metadata.clone() : this.metadata = qq.metadata, this._internalMetadata = qq._internalMetadata, this.meshBlendingTag = qq.meshBlendingTag, Qq.b && Qq.b.HasTags(qq) && Qq.b.AddTagsTo(this, Qq.b.GetTags(qq, !0)), this.hG(qq.isEnabled(!1)), this.parent = qq.parent, this.setPivotMatrix(qq.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + qq.id, this.material = qq.material, !Eq) {
          const lq = qq.getDescendants(!0);
          for (let qq = 0; qq < lq.length; qq++) {
            const Oq = lq[qq];
            Oq._isMesh ? (Cq.parent = this, Cq.doNotCloneChildren = Eq, Cq.clonePhysicsImpostor = gq, Cq.cloneThinInstances = Yq, Oq.clone(this.name + "." + Oq.name, Cq)) : Oq.clone && Oq.clone(this.name + "." + Oq.name, this)
          }
        }
        if (qq.morphTargetManager && (this.morphTargetManager = qq.morphTargetManager), (0, Jq.b)(lq.getPhysicsEngine)) {
          const Eq = lq.getPhysicsEngine();
          if (gq && Eq)
            if (1 === Eq.getPluginVersion()) {
              const gq = Eq.getImpostorForPhysicsObject(qq);
              gq && (this.physicsImpostor = gq.clone(this))
            } else 2 === Eq.getPluginVersion() && qq.physicsBody && qq.physicsBody.clone(this)
        }
        for (let Oq = 0; Oq < lq.xZ.length; Oq++) {
          const Eq = lq.xZ[Oq];
          Eq.emitter === qq && Eq.clone(Eq.name, this)
        }
        if (this.skeleton = qq.skeleton, Yq && (qq._thinInstanceDataStorage.matrixData ? (this.cqq("matrix", new Float32Array(qq._thinInstanceDataStorage.matrixData), 16, !qq._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = qq._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = qq._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = qq._thinInstanceDataStorage.matrixBufferSize, qq._userThinInstanceBuffersStorage)) {
          const Eq = qq._userThinInstanceBuffersStorage;
          for (const qq in Eq.data) this.cqq(qq, new Float32Array(Eq.data[qq]), Eq.strides[qq], !Eq.vertexBuffers?.[qq]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[qq] = Eq.sizes[qq]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(qq) {
        let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Oq = arguments.length > 4 ? arguments[4] : void 0,
          mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(qq, gq), this._internalMeshDataInfo = new Kq, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new wq, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Iq.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, gq = this.ZJ(), this._instanceDataStorage = new sq, this._instanceDataStorage.engine = gq.Ba(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Fq), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (qq, Eq, gq) => {
          qq && gq && (this._uniformBuffer ? this.transferToEffect(Eq) : gq.bindOnlyWorldMatrix(Eq))
        };
        let xq = !1;
        if (Yq && void 0 === Yq._addToSceneRootNodes) {
          const qq = Yq;
          Eq = qq.parent ?? null, lq = qq.source ?? null, Oq = qq.doNotCloneChildren ?? !1, mq = qq.clonePhysicsImpostor ?? !0, xq = qq.cloneThinInstances ?? !1
        } else Eq = Yq;
        lq && this._copySource(lq, Oq, mq, xq), null !== Eq && (this.parent = Eq), this._instanceDataStorage.hardwareInstancedRendering = this.Ba().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = qq => {
          qq.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new jq.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), lq && lq.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = 0 === this.getTotalVertices() || Eq && Eq.doNotInstantiate && (!0 === Eq.doNotInstantiate || Eq.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), qq || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Yq.parent = qq || this.parent, Yq.position = this.position.clone(), Yq.rc = this.rc.clone(), this.rotationQuaternion ? Yq.rotationQuaternion = this.rotationQuaternion.clone() : Yq.rotation = this.rotation.clone(), gq && gq(this, Yq);
        for (const lq of this.getChildTransformNodes(!0)) "InstancedMesh" === lq.getClassName() && "Mesh" === Yq.getClassName() && lq.Plq === this ? lq.instantiateHierarchy(Yq, {
          doNotInstantiate: Eq && Eq.doNotInstantiate || !1,
          newSourcedMesh: Yq
        }, gq) : lq.instantiateHierarchy(Yq, Eq, gq);
        return Yq
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(qq) {
        let Eq = super.toString(qq);
        if (Eq += ", n vertices: " + this.getTotalVertices(), Eq += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let gq = 0; gq < this.animations.length; gq++) Eq += ", animation[0]: " + this.animations[gq].toString(qq);
        if (qq)
          if (this._geometry) {
            const qq = this.iYq(),
              gq = this.getVerticesData(nq.g.PositionKind);
            gq && qq && (Eq += ", flat shading: " + (gq.length / 3 === qq.length ? "YES" : "NO"))
          } else Eq += ", flat shading: UNKNOWN";
        return Eq
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const qq of this.instances) qq._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const qq = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Eq, gq) => Eq.distanceOrScreenCoverage < gq.distanceOrScreenCoverage ? qq : Eq.distanceOrScreenCoverage > gq.distanceOrScreenCoverage ? -qq : 0))
      }
      addLODLevel(qq, Eq) {
        if (Eq && Eq._masterMesh) return Gq.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const gq = new Rq(qq, Eq);
        return this._internalMeshDataInfo._LODLevels.push(gq), Eq && (Eq._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(qq) {
        const Eq = this._internalMeshDataInfo;
        for (let gq = 0; gq < Eq._LODLevels.length; gq++) {
          const Yq = Eq._LODLevels[gq];
          if (Yq.distanceOrScreenCoverage === qq) return Yq.mesh
        }
        return null
      }
      removeLODLevel(qq) {
        const Eq = this._internalMeshDataInfo;
        for (let gq = 0; gq < Eq._LODLevels.length; gq++) Eq._LODLevels[gq].mesh === qq && (Eq._LODLevels.splice(gq, 1), qq && (qq._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(qq, Eq) {
        const gq = this._internalMeshDataInfo;
        if (!gq._LODLevels || 0 === gq._LODLevels.length) return this;
        const Yq = Eq || this.yR().DYq,
          lq = qq.mode === tq.e.ORTHOGRAPHIC_CAMERA ? qq.minZ : Yq.centerWorld.subtract(qq.globalPosition).length();
        let Oq = lq,
          mq = 1;
        if (gq._useLODScreenCoverage) {
          const Eq = qq.screenArea;
          let gq = Yq.radiusWorld * qq.minZ / lq;
          gq = gq * gq * Math.PI, Oq = gq / Eq, mq = -1
        }
        if (mq * gq._LODLevels[gq._LODLevels.length - 1].distanceOrScreenCoverage > mq * Oq) return this.onLODLevelSelection && this.onLODLevelSelection(Oq, this, this), this;
        for (let xq = 0; xq < gq._LODLevels.length; xq++) {
          const qq = gq._LODLevels[xq];
          if (mq * qq.distanceOrScreenCoverage < mq * Oq) {
            if (qq.mesh) {
              if (4 === qq.mesh.delayLoadState) return qq.mesh._checkDelayState(), this;
              if (2 === qq.mesh.delayLoadState) return this;
              qq.mesh._preActivate(), qq.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Oq, this, qq.mesh), qq.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Oq, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(qq, Eq, gq, Yq) {
        if (!this._geometry) return null;
        let lq = Yq ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[qq]?.getFloatData(this.instances.length + 1, gq || Eq && 1 !== this._geometry.meshes.length);
        return lq || (lq = this._geometry.getVerticesData(qq, Eq, gq)), lq
      }
      copyVerticesData(qq, Eq) {
        this._geometry && this._geometry.copyVerticesData(qq, Eq)
      }
      getVertexBuffer(qq, Eq) {
        return this._geometry ? (Eq ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[qq]) ?? this._geometry.getVertexBuffer(qq) : null
      }
      isVerticesDataPresent(qq, Eq) {
        return this._geometry ? !Eq && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[qq] || this._geometry.isVerticesDataPresent(qq) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq)
      }
      isVertexBufferUpdatable(qq, Eq) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq);
        if (!Eq) {
          const Eq = this._userInstancedBuffersStorage?.vertexBuffers[qq];
          if (Eq) return Eq.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(qq)
      }
      getVerticesDataKinds(qq) {
        if (!this._geometry) {
          const qq = [];
          if (this._delayInfo)
            for (const Eq of this._delayInfo) qq.push(Eq);
          return qq
        }
        const Eq = this._geometry.getVerticesDataKinds();
        if (!qq && this._userInstancedBuffersStorage)
          for (const gq in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Eq.indexOf(gq) && Eq.push(gq);
        return Eq
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      iYq(qq, Eq) {
        return this._geometry ? this._geometry.iYq(qq, Eq) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(qq)) return !1;
        if (!this.fn || 0 === this.fn.length) return !0;
        if (!qq) return !0;
        const gq = this.Ba(),
          Yq = this.ZJ(),
          lq = Eq || gq.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Oq = this.material || Yq.defaultMaterial;
        if (Oq)
          if (Oq._storeEffectOnSubMeshes)
            for (const xq of this.fn) {
              const qq = xq.da();
              if (qq)
                if (qq._storeEffectOnSubMeshes) {
                  if (!qq.isReadyForSubMesh(this, xq, lq)) return !1
                } else if (!qq.isReady(this, lq)) return !1
            } else if (!Oq.isReady(this, lq)) return !1;
        const mq = gq.currentRenderPassId;
        for (const xq of this.lightSources) {
          const qq = xq.getShadowGenerators();
          if (!qq) continue;
          const Eq = qq.values();
          for (let Yq = Eq.next(); !0 !== Yq.done; Yq = Eq.next()) {
            const qq = Yq.value;
            if (qq && (!qq.getShadowMap()?.renderList || qq.getShadowMap()?.renderList && -1 !== qq.getShadowMap()?.renderList?.indexOf(this))) {
              const Eq = qq.getShadowMap().renderPassIds ?? [gq.currentRenderPassId];
              for (let Yq = 0; Yq < Eq.length; ++Yq) {
                gq.currentRenderPassId = Eq[Yq];
                for (const Eq of this.fn)
                  if (!qq.isReady(Eq, lq, Eq.da()?.needAlphaBlendingForMesh(this) ?? !1)) return gq.currentRenderPassId = mq, !1
              }
              gq.currentRenderPassId = mq
            }
          }
        }
        for (const xq of this._internalMeshDataInfo._LODLevels)
          if (xq.mesh && !xq.mesh.isReady(lq)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      ja() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(qq) {
        this._instanceDataStorage.overridenInstanceCount = qq
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const qq = this._instanceDataStorage.engine.currentRenderPassId;
        let Eq = this._instanceDataStorage.renderPasses[qq];
        return Eq || (Eq = new Fq, this._instanceDataStorage.renderPasses[qq] = Eq), Eq
      }
      _preActivate() {
        const qq = this._internalMeshDataInfo,
          Eq = this.ZJ().getRenderId();
        return qq._preActivateId === Eq || (qq._preActivateId = Eq, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(qq) {
        const Eq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Eq.visibleInstances && (Eq.visibleInstances.intermediateDefaultRenderId = qq), this
      }
      _registerInstanceForRenderId(qq, Eq) {
        const gq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return gq.visibleInstances || (gq.visibleInstances = {
          defaultRenderId: Eq,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), gq.visibleInstances[Eq] || (void 0 === gq.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete gq.visibleInstances[gq.previousRenderId], gq.previousRenderId = Eq, gq.visibleInstances[Eq] = new Array), gq.visibleInstances[Eq].push(qq), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Va || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.yR().isLocked) return this;
        qq = "object" === typeof Eq ? Eq : {
          applySkeleton: Eq,
          applyMorph: gq
        };
        const Yq = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(qq, null, nq.g.PositionKind), Yq), this
      }
      _createGlobalSubMesh(qq) {
        const Eq = this.getTotalVertices();
        if (!Eq || !this.iYq()) return null;
        if (this.fn && this.fn.length > 0) {
          const gq = this.iYq();
          if (!gq) return null;
          const Yq = gq.length;
          let lq = !1;
          if (qq) lq = !0;
          else
            for (const qq of this.fn) {
              if (qq.indexStart + qq.indexCount > Yq) {
                lq = !0;
                break
              }
              if (qq.verticesStart + qq.verticesCount > Eq) {
                lq = !0;
                break
              }
            }
          if (!lq) return this.fn[0]
        }
        return this.releaseSubMeshes(), new fq.c(0, 0, Eq, 0, this.getTotalIndices() || (this.isUnIndexed ? Eq : 0), this)
      }
      subdivide(qq) {
        if (qq < 1) return;
        const Eq = this.getTotalIndices();
        let gq = Eq / qq | 0,
          Yq = 0;
        for (; gq % 3 !== 0;) gq++;
        this.releaseSubMeshes();
        for (let lq = 0; lq < qq && !(Yq >= Eq); lq++) fq.c.CreateFromIndices(0, Yq, Yq + gq >= Eq ? Eq - Yq : gq, this, void 0, !1), Yq += gq;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(qq, Eq, gq, Yq);
        else {
          const Yq = new bq.d;
          Yq.set(Eq, qq);
          const lq = this.ZJ();
          new iq.d(iq.d.RandomId(), lq, Yq, gq, this)
        }
        return this
      }
      removeVerticesData(qq) {
        this._geometry && this._geometry.removeVerticesData(qq)
      }
      markVerticesDataAsUpdatable(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gq = this.getVertexBuffer(qq);
        gq && gq.isUpdatable() !== Eq && this.setVerticesData(qq, this.getVerticesData(qq), Eq)
      }
      setVerticesBuffer(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = iq.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(qq, gq, Eq), this
      }
      updateVerticesData(qq, Eq, gq, Yq) {
        return this._geometry ? (Yq ? (this.makeGeometryUnique(), this.updateVerticesData(qq, Eq, gq, !1)) : this._geometry.updateVerticesData(qq, Eq, gq), this) : this
      }
      updateMeshPositions(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gq = this.getVerticesData(nq.g.PositionKind);
        if (!gq) return this;
        if (qq(gq), this.updateVerticesData(nq.g.PositionKind, gq, !1, !1), Eq) {
          const qq = this.iYq(),
            Eq = this.getVerticesData(nq.g.NormalKind);
          if (!Eq) return this;
          bq.d.ComputeNormals(gq, qq, Eq), this.updateVerticesData(nq.g.NormalKind, Eq, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const qq = this._geometry,
          Eq = this._geometry.copy(iq.d.RandomId());
        return qq.releaseForMesh(this, !0), Eq.applyToMesh(this), this
      }
      setIndexBuffer(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lq = this._geometry;
        lq || (lq = new iq.d(iq.d.RandomId(), this.ZJ(), void 0, void 0, this)), lq.setIndexBuffer(qq, Eq, gq, Yq)
      }
      setIndices(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(qq, Eq, gq, Yq);
        else {
          const Yq = new bq.d;
          Yq.indices = qq;
          const lq = this.ZJ();
          new iq.d(iq.d.RandomId(), lq, Yq, gq, this, Eq)
        }
        return this
      }
      updateIndices(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(qq, Eq, gq), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(qq, Eq, gq) {
        let Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const lq = this.ZJ().Ba();
        let Oq;
        if (this._unIndexed)
          if (this._getRenderingFillMode(gq) === Mq.e.WireFrameFillMode) Oq = qq._getLinesIndexBuffer(this.iYq(), lq);
          else Oq = null;
        else switch (this._getRenderingFillMode(gq)) {
          case Mq.e.PointFillMode:
            Oq = null;
            break;
          case Mq.e.WireFrameFillMode:
            Oq = qq._getLinesIndexBuffer(this.iYq(), lq);
            break;
          default:
          case Mq.e.TriangleFillMode:
            Oq = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Eq, Oq, Yq)
      }
      _bindDirect(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(qq), gq && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const qq = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Eq in qq) this._userInstancedBuffersStorage.vertexBuffers[Eq] = qq[Eq]
          }
          this._geometry._bind(qq, Eq, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(qq, Eq);
        return this
      }
      _draw(qq, Eq, gq) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Yq = this.ZJ().Ba(),
          lq = Yq._currentMaterialContext,
          Oq = lq && lq.useVertexPulling;
        return this._unIndexed && Eq !== Mq.e.WireFrameFillMode || Eq == Mq.e.PointFillMode ? Yq.drawArraysType(Eq, qq.verticesStart, qq.verticesCount, this.forcedInstanceCount || gq) : Eq == Mq.e.WireFrameFillMode ? Yq.drawElementsType(Eq, 0, qq._linesIndexCount, this.forcedInstanceCount || gq) : Oq ? Yq.drawArraysType(Eq, qq.indexStart, qq.indexCount, this.forcedInstanceCount || gq) : Yq.drawElementsType(Eq, qq.indexStart, qq.indexCount, this.forcedInstanceCount || gq), this
      }
      registerBeforeRender(qq) {
        return this.onBeforeRenderObservable.add(qq), this
      }
      unregisterBeforeRender(qq) {
        return this.onBeforeRenderObservable.removeCallback(qq), this
      }
      registerAfterRender(qq) {
        return this.onAfterRenderObservable.add(qq), this
      }
      unregisterAfterRender(qq) {
        return this.onAfterRenderObservable.removeCallback(qq), this
      }
      _getInstancesRenderList(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Eq) return gq.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[qq] = !1, gq.batchCacheReplacementModeInFrozenMode.renderSelf[qq] = !0, gq.batchCacheReplacementModeInFrozenMode;
          if (gq.previousBatch) return gq.previousBatch
        }
        const Yq = this.ZJ(),
          lq = Yq._isInIntermediateRendering(),
          Oq = lq ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          mq = gq.batchCache;
        if (mq.mustReturn = !1, mq.renderSelf[qq] = Eq || !Oq && this.isEnabled() && this.isVisible, mq.visibleInstances[qq] = null, gq.visibleInstances && !Eq) {
          const Eq = gq.visibleInstances,
            Oq = Yq.getRenderId(),
            xq = lq ? Eq.intermediateDefaultRenderId : Eq.defaultRenderId;
          mq.visibleInstances[qq] = Eq[Oq], !mq.visibleInstances[qq] && xq && (mq.visibleInstances[qq] = Eq[xq])
        }
        return mq.hardwareInstancedRendering[qq] = !Eq && this._instanceDataStorage.hardwareInstancedRendering && null !== mq.visibleInstances[qq] && void 0 !== mq.visibleInstances[qq], gq.previousBatch = mq, mq
      }
      _updateInstancedBuffers(qq, Eq, gq, Yq, lq, Oq) {
        const mq = Eq.visibleInstances[qq._id],
          xq = mq ? mq.length : 0,
          Aq = Eq.parent,
          cq = this._instanceDataStorage;
        let uq = Aq.instancesBuffer,
          Bq = Aq.instancesPreviousBuffer,
          Wq = 0,
          Nq = 0;
        const aq = Eq.renderSelf[qq._id],
          Vq = this._scene.floatingOriginOffset,
          dq = !uq || gq !== Aq.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Aq.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || cq.isFrozen && !dq) Nq = (aq ? 1 : 0) + xq;
        else {
          const Eq = this.getWorldMatrix();
          if (aq) {
            this._scene.needsPreviousWorldMatrices && (cq.masterMeshPreviousWorldMatrix ? (cq.masterMeshPreviousWorldMatrix.copyToArray(Aq.instancesPreviousData, Wq), cq.masterMeshPreviousWorldMatrix.WG(Eq)) : (cq.masterMeshPreviousWorldMatrix = Eq.clone(), cq.masterMeshPreviousWorldMatrix.copyToArray(Aq.instancesPreviousData, Wq))), Eq.copyToArray(Aq.instancesData, Wq);
            const qq = Eq.bYq();
            Aq.instancesData[Wq + 12] = qq[12] - Vq.x, Aq.instancesData[Wq + 13] = qq[13] - Vq.y, Aq.instancesData[Wq + 14] = qq[14] - Vq.z, Wq += 16, Nq++
          }
          if (mq) {
            if (Iq.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && qq.da()?.needAlphaBlendingForMesh(qq.getRenderingMesh())) {
              const qq = this._scene.activeCamera.globalPosition;
              for (let Eq = 0; Eq < mq.length; Eq++) {
                const gq = mq[Eq];
                gq._distanceToCamera = rq.q.Distance(gq.yR().DYq.centerWorld, qq)
              }
              mq.sort(((qq, Eq) => qq._distanceToCamera > Eq._distanceToCamera ? -1 : qq._distanceToCamera < Eq._distanceToCamera ? 1 : 0))
            }
            for (let qq = 0; qq < mq.length; qq++) {
              const Eq = mq[qq],
                gq = Eq.getWorldMatrix();
              gq.copyToArray(Aq.instancesData, Wq), this._scene.needsPreviousWorldMatrices && (Eq._previousWorldMatrix ? (Eq._previousWorldMatrix.copyToArray(Aq.instancesPreviousData, Wq), Eq._previousWorldMatrix.WG(gq)) : (Eq._previousWorldMatrix = gq.clone(), Eq._previousWorldMatrix.copyToArray(Aq.instancesPreviousData, Wq)));
              const Yq = gq.bYq();
              Aq.instancesData[Wq + 12] = Yq[12] - Vq.x, Aq.instancesData[Wq + 13] = Yq[13] - Vq.y, Aq.instancesData[Wq + 14] = Yq[14] - Vq.z, Wq += 16, Nq++
            }
          }
        }
        if (dq) {
          let qq;
          if (uq && uq.dispose(), Bq && Bq.dispose(), uq = new nq.b(Yq, Aq.instancesData, !0, 16, !1, !0), Aq.instancesBuffer = uq, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Ba().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) qq = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Eq = this._instanceDataStorage.engine.currentRenderPassId;
            qq = this._userInstancedBuffersStorage.renderPasses[Eq], qq || (this._userInstancedBuffersStorage.renderPasses[Eq] = qq = {})
          }
          qq.world0 = uq.createVertexBuffer("world0", 0, 4), qq.world1 = uq.createVertexBuffer("world1", 4, 4), qq.world2 = uq.createVertexBuffer("world2", 8, 4), qq.world3 = uq.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Bq = new nq.b(Yq, Aq.instancesPreviousData, !0, 16, !1, !0), Aq.instancesPreviousBuffer = Bq, qq.previousWorld0 = Bq.createVertexBuffer("previousWorld0", 0, 4), qq.previousWorld1 = Bq.createVertexBuffer("previousWorld1", 4, 4), qq.previousWorld2 = Bq.createVertexBuffer("previousWorld2", 8, 4), qq.previousWorld3 = Bq.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (uq.updateDirectly(Aq.instancesData, 0, Nq), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Bq.updateDirectly(Aq.instancesPreviousData, 0, Nq));
        this._processInstancedBuffers(mq, aq), Oq && void 0 !== lq && (this.ZJ()._activeIndices.addCount(qq.indexCount * Nq, !1), Yq._currentDrawContext && (Yq._currentDrawContext.useInstancing = !0), this._bind(qq, Oq, lq), this._draw(qq, lq, Nq)), !this._scene.needsPreviousWorldMatrices || dq || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Bq.updateDirectly(Aq.instancesData, 0, Nq)
      }
      _renderWithInstances(qq, Eq, gq, Yq, lq) {
        const Oq = gq.visibleInstances[qq._id],
          mq = Oq ? Oq.length : 0,
          xq = gq.parent,
          Aq = xq.instancesBufferSize,
          cq = 16 * (mq + 1) * 4;
        for (; xq.instancesBufferSize < cq;) xq.instancesBufferSize *= 2;
        return xq.instancesData && Aq == xq.instancesBufferSize || (xq.instancesData = new Float32Array(xq.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !xq.instancesPreviousData || Aq != xq.instancesBufferSize) && (xq.instancesPreviousData = new Float32Array(xq.instancesBufferSize / 4)), this._updateInstancedBuffers(qq, gq, Aq, lq, Eq, Yq), lq.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(qq, Eq, gq, Yq) {
        const lq = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.ZJ()._activeIndices.addCount(qq.indexCount * lq, !1), Yq._currentDrawContext && (Yq._currentDrawContext.useInstancing = !0), this._bind(qq, gq, Eq), this._draw(qq, Eq, lq), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, lq) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Yq.unbindInstanceAttributes()
      }
      _processInstancedBuffers(qq, Eq) {}
      _processRendering(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = this.ZJ(),
          cq = Aq.Ba();
        if (Yq = this._getRenderingFillMode(Yq), Oq && Eq.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Eq, Yq, gq, cq), this;
        if (Oq) this._renderWithInstances(Eq, Yq, lq, gq, cq);
        else {
          cq._currentDrawContext && (cq._currentDrawContext.useInstancing = !1);
          let gq = 0;
          lq.renderSelf[Eq._id] && (mq && mq(!1, qq.getWorldMatrix(), xq), gq++, this._draw(Eq, Yq, this._instanceDataStorage.overridenInstanceCount));
          const Oq = lq.visibleInstances[Eq._id];
          if (Oq) {
            const qq = Oq.length;
            gq += qq;
            for (let gq = 0; gq < qq; gq++) {
              const qq = Oq[gq].getWorldMatrix();
              mq && mq(!0, qq, xq), this._draw(Eq, Yq)
            }
          }
          Aq._activeIndices.addCount(Eq.indexCount * gq, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        qq?.instancesBuffer && (Eq && qq.instancesBuffer.dispose(), qq.instancesBuffer = null), qq?.instancesPreviousBuffer && (Eq && qq.instancesPreviousBuffer.dispose(), qq.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eq in this._instanceDataStorage.renderPasses) {
          const gq = this._instanceDataStorage.renderPasses[Eq];
          this._disposeInstanceDataStorageRenderPass(gq, qq)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, qq), this._userInstancedBuffersStorage) {
          for (const Eq in this._userInstancedBuffersStorage.vertexBuffers) {
            const gq = this._userInstancedBuffersStorage.vertexBuffers[Eq];
            gq && (qq && gq.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Eq] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(qq)
      }
      _releaseRenderPassId(qq) {
        const Eq = this._instanceDataStorage.renderPasses[qq];
        if (Eq && (this._disposeInstanceDataStorageRenderPass(Eq, !0), delete this._instanceDataStorage.renderPasses[qq]), this._userInstancedBuffersStorage?.renderPasses) {
          const Eq = this._userInstancedBuffersStorage.renderPasses[qq];
          if (Eq)
            for (const qq in Eq) Eq[qq]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[qq]
        }
        const gq = this._userInstancedBuffersStorage?.interleavedBuffers;
        gq?.[qq] && (gq[qq].buffer.dispose(), delete gq[qq])
      }
      _freeze() {
        if (this.fn) {
          for (let qq = 0; qq < this.fn.length; qq++) this._getInstancesRenderList(qq);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const qq in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[qq].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Oq = this._scene.Ba(),
          mq = Oq.currentRenderPassId;
        if (void 0 !== qq && (Oq.currentRenderPassId = qq), Yq)(!lq || lq && Yq.isInFrustum(this._scene._frustumPlanes)) && this.render(Yq, !!Eq, gq);
        else
          for (let xq = 0; xq < this.fn.length; xq++) {
            const qq = this.fn[xq];
            (!lq || lq && qq.isInFrustum(this._scene._frustumPlanes)) && this.render(qq, !!Eq, gq)
          }
        return void 0 !== qq && (Oq.currentRenderPassId = mq), this
      }
      directRender() {
        if (!this.fn) return this;
        for (const qq of this.fn) this.render(qq, !1);
        return this
      }
      render(qq, Eq, gq) {
        const Yq = this.ZJ(),
          lq = Yq.Ba();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Oq = Yq.activeCameras?.length ?? 0,
          mq = Oq > 1 && Yq.activeCamera === Yq.activeCameras[0] || Oq <= 1,
          xq = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== lq.currentRenderPassId;
        if (mq && this._checkOcclusionQuery(xq) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Aq = this._getInstancesRenderList(qq._id, !!gq);
        if (Aq.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let cq = 0,
          uq = null;
        this.ignoreCameraMaxZ && Yq.activeCamera && !Yq._isInIntermediateRendering() && (cq = Yq.activeCamera.maxZ, uq = Yq.activeCamera, Yq.activeCamera.maxZ = 0, Yq.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Bq = qq.getRenderingMesh(),
          Wq = Aq.hardwareInstancedRendering[qq._id] || Bq.hasThinInstances || !!this._userInstancedBuffersStorage && !qq.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Nq = this._instanceDataStorage,
          aq = qq.da();
        if (!aq) return uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), this;
        if (Nq.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === aq) {
          if (aq._storeEffectOnSubMeshes && !qq._drawWrapper?._wasPreviouslyReady || !aq._storeEffectOnSubMeshes && !aq._getDrawWrapper()._wasPreviouslyReady) return uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), this
        } else {
          if (aq._storeEffectOnSubMeshes) {
            if (!aq.isReadyForSubMesh(this, qq, Wq)) return uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), this
          } else if (!aq.isReady(this, Wq)) return uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = aq
        }
        if (Eq) {
          const qq = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === qq.alphaModes.length) lq.setAlphaMode(qq.alphaMode);
          else
            for (let Eq = 0; Eq < qq.alphaModes.length; Eq++) {
              const gq = qq.alphaModes[Eq];
              lq.setAlphaMode(void 0 !== gq ? gq : 2, !1, Eq)
            }
        }
        let Vq;
        Vq = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? qq._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const dq = Vq?.effect ?? null;
        for (let tq = 0, rq = Yq._beforeRenderingMeshStage; tq < rq.length; tq++) {
          rq[tq].action(this, qq, Aq, dq)
        }
        if (!Vq || !dq) return uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), this;
        const jq = gq || this;
        let Hq;
        if (!Nq.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const qq = jq._getWorldMatrixDeterminant();
          Hq = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), qq < 0 && (Hq = Hq === Mq.e.ClockWiseSideOrientation ? Mq.e.CounterClockWiseSideOrientation : Mq.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Hq
        }
        const oq = this._internalMeshDataInfo._effectiveMaterial._preBind(Vq, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && lq.setDepthWrite(!0);
        const Pq = this._internalMeshDataInfo._effectiveMaterial,
          Qq = Pq.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Wq || this._bind(qq, dq, Qq, !1);
        const yq = jq.getWorldMatrix();
        Pq._storeEffectOnSubMeshes ? Pq.bindForSubMesh(yq, this, qq) : Pq.bind(yq, this);
        try {
          Tq.e._BindAttachmentsForEffect(lq, dq) && (!Pq.backFaceCulling && Pq.separateCullingPass && (lq.setState(!0, Pq.zOffset, !1, !oq, Pq.cullBackFaces, Pq.stencil, Pq.zOffsetUnits), this._processRendering(this, qq, dq, Qq, Aq, Wq, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), lq.setState(!0, Pq.zOffset, !1, oq, Pq.cullBackFaces, Pq.stencil, Pq.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(qq)), this._processRendering(this, qq, dq, Qq, Aq, Wq, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Tq.e._RestoreAttachments(lq)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let tq = 0, rq = Yq._afterRenderingMeshStage; tq < rq.length; tq++) {
          rq[tq].action(this, qq, Aq, dq)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), uq && (uq.maxZ = cq, Yq.updateTransformMatrix(!0)), 2 !== Yq.performancePriority || Nq.isFrozen || this._freeze(), this
      }
      _renderRunFollower(qq, Eq) {
        const gq = this._scene,
          Yq = gq._engine;
        if (Yq.isWebGPU || qq._mesh !== this || 0 !== this.instances.length || this.render !== Iq.prototype.render) return !1;
        const lq = qq.da();
        if (!lq || lq !== gq._cachedMaterial || void 0 === lq._canBindRunFollower) return !1;
        const Oq = qq._drawWrapper,
          mq = Oq?.effect;
        if (!mq || mq !== gq._cachedEffect || this.visibility !== gq._cachedVisibility || Oq._forceRebindOnNextCall) return !1;
        const xq = this.hasThinInstances;
        if (!xq && this._userInstancedBuffersStorage) return !1;
        if (!Oq._wasPreviouslyReady || Oq._wasPreviouslyUsingInstances !== xq) return !1;
        const Aq = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || gq._isInIntermediateRendering() || 0 !== gq._beforeRenderingMeshStage.length || 0 !== gq._afterRenderingMeshStage.length || Aq._onBeforeRenderObservable?.hasObservers() || Aq._onBeforeBindObservable?.hasObservers() || Aq._onAfterRenderObservable?.hasObservers()) return !1;
        const cq = this.occlusionType;
        if (void 0 !== cq && cq !== Zq.c.OCCLUSION_TYPE_NONE || !lq._canBindRunFollower(gq, Yq, this, qq, mq)) return !1;
        const uq = this._internalAbstractMeshDataInfo,
          Bq = uq._isActiveIntermediate;
        Bq ? uq._isActiveIntermediate = !1 : uq._isActive = !1;
        const Wq = gq.activeCameras?.length ?? 0;
        (Wq > 1 && gq.activeCamera === gq.activeCameras[0] || Wq <= 1) && this._checkOcclusionQuery(!1);
        const Nq = this._getInstancesRenderList(qq._id);
        if (Nq.mustReturn) return !0;
        if (!xq && !Nq.renderSelf[qq._id]) return Bq ? uq._isActiveIntermediate = !0 : uq._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Aq._effectiveMaterial = lq, Eq)
          if (1 === lq.alphaModes.length) Yq.setAlphaMode(lq.alphaMode);
          else
            for (let Vq = 0; Vq < lq.alphaModes.length; Vq++) {
              const qq = lq.alphaModes[Vq];
              Yq.setAlphaMode(void 0 !== qq ? qq : 2, !1, Vq)
            }
        if (lq.backFaceCulling || null !== lq.sideOrientation || lq._twoSidedLighting) {
          const qq = this._getWorldMatrixDeterminant();
          let Eq = lq._getEffectiveOrientation(this);
          qq < 0 && (Eq = Eq === Mq.e.ClockWiseSideOrientation ? Mq.e.CounterClockWiseSideOrientation : Mq.e.ClockWiseSideOrientation), Aq._effectiveSideOrientation = Eq
        }
        lq._preBind(Oq, Aq._effectiveSideOrientation), lq.forceDepthWrite && Yq.setDepthWrite(!0);
        const aq = lq.fillMode;
        return xq || this._bind(qq, mq, aq, !1), lq._bindRunFollower(this.getWorldMatrix(), this, qq, mq), this._processRendering(this, qq, mq, aq, Nq, xq, this._onBeforeDraw, lq), lq.unbind(), 2 === gq.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(nq.g.MatricesWeightsKind) && (this.isVerticesDataPresent(nq.g.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const qq = this.getVerticesData(nq.g.MatricesWeightsKind),
          Eq = qq.length;
        for (let gq = 0; gq < Eq; gq += 4) {
          const Eq = qq[gq] + qq[gq + 1] + qq[gq + 2] + qq[gq + 3];
          if (0 === Eq) qq[gq] = 1;
          else {
            const Yq = 1 / Eq;
            qq[gq] *= Yq, qq[gq + 1] *= Yq, qq[gq + 2] *= Yq, qq[gq + 3] *= Yq
          }
        }
        this.setVerticesData(nq.g.MatricesWeightsKind, qq)
      }
      _normalizeSkinWeightsAndExtra() {
        const qq = this.getVerticesData(nq.g.MatricesWeightsExtraKind),
          Eq = this.getVerticesData(nq.g.MatricesWeightsKind),
          gq = Eq.length;
        for (let Yq = 0; Yq < gq; Yq += 4) {
          let gq = Eq[Yq] + Eq[Yq + 1] + Eq[Yq + 2] + Eq[Yq + 3];
          if (gq += qq[Yq] + qq[Yq + 1] + qq[Yq + 2] + qq[Yq + 3], 0 === gq) Eq[Yq] = 1;
          else {
            const lq = 1 / gq;
            Eq[Yq] *= lq, Eq[Yq + 1] *= lq, Eq[Yq + 2] *= lq, Eq[Yq + 3] *= lq, qq[Yq] *= lq, qq[Yq + 1] *= lq, qq[Yq + 2] *= lq, qq[Yq + 3] *= lq
          }
        }
        this.setVerticesData(nq.g.MatricesWeightsKind, Eq), this.setVerticesData(nq.g.MatricesWeightsKind, qq)
      }
      validateSkinning() {
        const qq = this.getVerticesData(nq.g.MatricesWeightsExtraKind),
          Eq = this.getVerticesData(nq.g.MatricesWeightsKind);
        if (null === Eq || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          SN: "not skinned"
        };
        const gq = Eq.length;
        let Yq = 0,
          lq = 0,
          Oq = 0,
          mq = 0;
        const xq = null === qq ? 4 : 8,
          Aq = [];
        for (let Nq = 0; Nq <= xq; Nq++) Aq[Nq] = 0;
        for (let Nq = 0; Nq < gq; Nq += 4) {
          let gq = Eq[Nq],
            cq = gq,
            uq = 0 === cq ? 0 : 1;
          for (let lq = 1; lq < xq; lq++) {
            const Oq = lq < 4 ? Eq[Nq + lq] : qq[Nq + lq - 4];
            Oq > gq && Yq++, 0 !== Oq && uq++, cq += Oq, gq = Oq
          }
          if (Aq[uq]++, uq > Oq && (Oq = uq), 0 === cq) lq++;
          else {
            const gq = 1 / cq;
            let Yq = 0;
            for (let lq = 0; lq < xq; lq++) Yq += lq < 4 ? Math.abs(Eq[Nq + lq] - Eq[Nq + lq] * gq) : Math.abs(qq[Nq + lq - 4] - qq[Nq + lq - 4] * gq);
            Yq > .001 && mq++
          }
        }
        const cq = this.skeleton.bones.length,
          uq = this.getVerticesData(nq.g.MatricesIndicesKind),
          Bq = this.getVerticesData(nq.g.MatricesIndicesExtraKind);
        let Wq = 0;
        for (let Nq = 0; Nq < gq; Nq += 4)
          for (let qq = 0; qq < xq; qq++) {
            const Eq = qq < 4 ? uq[Nq + qq] : Bq[Nq + qq - 4];
            (Eq >= cq || Eq < 0) && Wq++
          }
        return {
          skinned: !0,
          valid: 0 === lq && 0 === mq && 0 === Wq,
          SN: "Number of Weights = " + gq / 4 + "\nMaximum influences = " + Oq + "\nMissing Weights = " + lq + "\nNot Sorted = " + Yq + "\nNot Normalized = " + mq + "\nWeightCounts = [" + Aq + "]\nNumber of bones = " + cq + "\nBad Bone Indices = " + Wq
        }
      }
      _checkDelayState() {
        const qq = this.ZJ();
        return this._geometry ? this._geometry.load(qq) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(qq)), this
      }
      _queueLoad(qq) {
        qq.addPendingData(this);
        const Eq = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const gq = await qq._loadDelayedFileAsync(this.delayLoadingFile, Eq, !0);
            gq instanceof ArrayBuffer ? this._delayLoadingFunction(gq, this) : this._delayLoadingFunction(JSON.parse(gq), this);
            for (const qq of this.instances) qq.refreshBoundingInfo(), qq._syncSubMeshes();
            this.delayLoadState = 1, qq.removePendingData(this)
          } catch (gq) {
            qq.removePendingData(this), qq.bM || Gq.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${gq}`)
          }
        })(), this
      }
      isInFrustum(qq) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(qq) && (this._checkDelayState(), !0))
      }
      setMaterialById(qq) {
        const Eq = this.ZJ().materials;
        let gq;
        for (gq = Eq.length - 1; gq > -1; gq--)
          if (Eq[gq].id === qq) return this.material = Eq[gq], this;
        const Yq = this.ZJ().multiMaterials;
        for (gq = Yq.length - 1; gq > -1; gq--)
          if (Yq[gq].id === qq) return this.material = Yq[gq], this;
        return this
      }
      getAnimatables() {
        const qq = [];
        return this.material && qq.push(this.material), this.skeleton && qq.push(this.skeleton), qq
      }
      bakeTransformIntoVertices(qq) {
        if (!this.isVerticesDataPresent(nq.g.PositionKind)) return this;
        const Eq = this.fn.splice(0);
        this._resetPointsArrayCache();
        let gq = this.getVerticesData(nq.g.PositionKind);
        const Yq = rq.q.Zero();
        let lq;
        for (lq = 0; lq < gq.length; lq += 3) rq.q.TransformCoordinatesFromFloatsToRef(gq[lq], gq[lq + 1], gq[lq + 2], qq, Yq).toArray(gq, lq);
        if (this.setVerticesData(nq.g.PositionKind, gq, this.getVertexBuffer(nq.g.PositionKind).isUpdatable()), this.isVerticesDataPresent(nq.g.NormalKind)) {
          for (gq = this.getVerticesData(nq.g.NormalKind), lq = 0; lq < gq.length; lq += 3) rq.q.TransformNormalFromFloatsToRef(gq[lq], gq[lq + 1], gq[lq + 2], qq, Yq).normalize().toArray(gq, lq);
          this.setVerticesData(nq.g.NormalKind, gq, this.getVertexBuffer(nq.g.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(nq.g.TangentKind)) {
          for (gq = this.getVerticesData(nq.g.TangentKind), lq = 0; lq < gq.length; lq += 4) rq.q.TransformNormalFromFloatsToRef(gq[lq], gq[lq + 1], gq[lq + 2], qq, Yq).normalize().toArray(gq, lq);
          this.setVerticesData(nq.g.TangentKind, gq, this.getVertexBuffer(nq.g.TangentKind).isUpdatable())
        }
        return qq.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.fn = Eq, this
      }
      bakeCurrentTransformIntoVertices() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(qq), this
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Eq && void 0 === Eq._addToSceneRootNodes) {
          const gq = Eq;
          return Cq.source = this, Cq.doNotCloneChildren = gq.doNotCloneChildren, Cq.clonePhysicsImpostor = gq.clonePhysicsImpostor, Cq.cloneThinInstances = gq.cloneThinInstances, new Iq(qq, this.ZJ(), Cq)
        }
        return new Iq(qq, this.ZJ(), Eq, this, gq, Yq)
      }
      dispose(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const gq = this._internalMeshDataInfo;
        if (gq._onBeforeDrawObservable && gq._onBeforeDrawObservable.clear(), gq._onBeforeBindObservable && gq._onBeforeBindObservable.clear(), gq._onBeforeRenderObservable && gq._onBeforeRenderObservable.clear(), gq._onAfterRenderObservable && gq._onAfterRenderObservable.clear(), gq._onBetweenPassObservable && gq._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (gq.meshMap)
            for (const qq in gq.meshMap) {
              const Eq = gq.meshMap[qq];
              Eq && (Eq._internalMeshDataInfo._source = null, gq.meshMap[qq] = void 0)
            }
          gq._source && gq._source._internalMeshDataInfo.meshMap && (gq._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const qq = this.ZJ().meshes;
          for (const Eq of qq) {
            const qq = Eq;
            qq._internalMeshDataInfo && qq._internalMeshDataInfo._source && qq._internalMeshDataInfo._source === this && (qq._internalMeshDataInfo._source = null)
          }
        }
        gq._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(qq, Eq)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(qq, Eq, gq, Yq, lq, Oq) {
        let mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          xq = arguments.length > 7 ? arguments[7] : void 0;
        const Aq = this.ZJ();
        return (0, oq.x)(qq, (qq => {
          const xq = qq.width,
            Aq = qq.height,
            cq = this.Ba().createCanvas(xq, Aq).getContext("2d");
          cq.drawImage(qq, 0, 0);
          const uq = cq.getImageData(0, 0, xq, Aq).data;
          this.applyDisplacementMapFromBuffer(uq, xq, Aq, Eq, gq, lq, Oq, mq), Yq && Yq(this)
        }), xq || (() => {}), Aq.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(nq.g.PositionKind) || !this.isVerticesDataPresent(nq.g.NormalKind) || !this.isVerticesDataPresent(nq.g.UVKind)) return Gq.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Aq = this.getVerticesData(nq.g.PositionKind, !0, !0),
          cq = this.getVerticesData(nq.g.NormalKind),
          uq = this.getVerticesData(nq.g.UVKind);
        let Bq = rq.q.Zero();
        const Wq = rq.q.Zero(),
          Nq = rq.p.Zero();
        Oq = Oq || rq.p.Zero(), mq = mq || new rq.p(1, 1);
        for (let aq = 0; aq < Aq.length; aq += 3) {
          rq.q.FromArrayToRef(Aq, aq, Bq), rq.q.FromArrayToRef(cq, aq, Wq), rq.p.FromArrayToRef(uq, aq / 3 * 2, Nq);
          const xq = 4 * ((Math.abs(Nq.x * mq.x + Oq.x % 1) * (Eq - 1) % Eq | 0) + (Math.abs(Nq.y * mq.y + Oq.y % 1) * (gq - 1) % gq | 0) * Eq),
            Vq = .3 * (qq[xq] / 255) + .59 * (qq[xq + 1] / 255) + .11 * (qq[xq + 2] / 255);
          Wq.normalize(), Wq.scaleInPlace(Yq + (lq - Yq) * Vq), Bq = Bq.add(Wq), Bq.toArray(Aq, aq)
        }
        return bq.d.ComputeNormals(Aq, this.iYq(), cq), xq ? (this.setVerticesData(nq.g.PositionKind, Aq), this.setVerticesData(nq.g.NormalKind, cq), this.setVerticesData(nq.g.UVKind, uq)) : (this.updateVerticesData(nq.g.PositionKind, Aq), this.updateVerticesData(nq.g.NormalKind, cq)), this
      }
      _getFlattenedNormals(qq, Eq) {
        const gq = new Float32Array(3 * qq.length);
        let Yq = 0;
        const lq = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Oq = 0; Oq < qq.length; Oq += 3) {
          const mq = rq.q.FromArray(Eq, 3 * qq[Oq]),
            xq = rq.q.FromArray(Eq, 3 * qq[Oq + 1]),
            Aq = rq.q.FromArray(Eq, 3 * qq[Oq + 2]),
            cq = mq.subtract(xq),
            uq = Aq.subtract(xq),
            Bq = rq.q.Normalize(rq.q.Cross(cq, uq));
          lq && Bq.scaleInPlace(-1);
          for (let qq = 0; qq < 3; qq++) gq[Yq++] = Bq.x, gq[Yq++] = Bq.y, gq[Yq++] = Bq.z
        }
        return gq
      }
      _convertToUnIndexedMesh() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = this.getVerticesDataKinds().filter((qq => !this.getVertexBuffer(qq)?.getIsInstanced())),
          gq = this.iYq(!1, !0),
          Yq = {},
          lq = (qq, Eq) => {
            const Yq = new Float32Array(gq.length * Eq);
            let lq = 0;
            for (let Oq = 0; Oq < gq.length; Oq++)
              for (let mq = 0; mq < Eq; mq++) Yq[lq++] = qq[gq[Oq] * Eq + mq];
            return Yq
          },
          Oq = this.yR(),
          mq = this.geometry ? this.fn.slice(0) : [];
        for (const xq of Eq) Yq[xq] = this.getVerticesData(xq);
        for (const xq of Eq) {
          const Eq = this.getVertexBuffer(xq),
            Oq = Eq.getSize();
          if (qq && xq === nq.g.NormalKind) {
            const qq = this._getFlattenedNormals(gq, Yq[nq.g.PositionKind]);
            this.setVerticesData(nq.g.NormalKind, qq, Eq.isUpdatable(), Oq)
          } else this.setVerticesData(xq, lq(Yq[xq], Oq), Eq.isUpdatable(), Oq)
        }
        if (this.morphTargetManager) {
          for (let Eq = 0; Eq < this.morphTargetManager.numTargets; Eq++) {
            const Yq = this.morphTargetManager.getTarget(Eq),
              Oq = Yq.getPositions();
            Yq.Kmq(lq(Oq, 3));
            const mq = Yq.getNormals();
            mq && Yq.setNormals(qq ? this._getFlattenedNormals(gq, Oq) : lq(mq, 3));
            const xq = Yq.getTangents();
            xq && Yq.setTangents(lq(xq, 3));
            const Aq = Yq.getUVs();
            Aq && Yq.setUVs(lq(Aq, 2));
            const cq = Yq.getColors();
            cq && Yq.setColors(lq(cq, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let xq = 0; xq < gq.length; xq++) gq[xq] = xq;
        this.setIndices(gq), this._unIndexed = !0, this.releaseSubMeshes();
        for (const xq of mq) {
          const qq = xq.yR();
          fq.c.AddToMesh(xq.materialIndex, xq.indexStart, xq.indexCount, xq.indexStart, xq.indexCount, this).setBoundingInfo(qq)
        }
        return this.setBoundingInfo(Oq), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = bq.d.ExtractFromMesh(this);
        let gq;
        if (qq && this.isVerticesDataPresent(nq.g.NormalKind) && Eq.normals) {
          for (gq = 0; gq < Eq.normals.length; gq++) Eq.normals[gq] *= -1;
          this.setVerticesData(nq.g.NormalKind, Eq.normals, this.isVertexBufferUpdatable(nq.g.NormalKind))
        }
        if (Eq.indices) {
          let qq;
          for (gq = 0; gq < Eq.indices.length; gq += 3) qq = Eq.indices[gq + 1], Eq.indices[gq + 1] = Eq.indices[gq + 2], Eq.indices[gq + 2] = qq;
          this.setIndices(Eq.indices, null, this.isVertexBufferUpdatable(nq.g.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Eq = bq.d.ExtractFromMesh(this),
          gq = Eq.indices && !Array.isArray(Eq.indices) && Array.from ? Array.from(Eq.indices) : Eq.indices,
          Yq = Eq.positions && !Array.isArray(Eq.positions) && Array.from ? Array.from(Eq.positions) : Eq.positions,
          lq = Eq.uvs && !Array.isArray(Eq.uvs) && Array.from ? Array.from(Eq.uvs) : Eq.uvs,
          Oq = Eq.normals && !Array.isArray(Eq.normals) && Array.from ? Array.from(Eq.normals) : Eq.normals;
        if (gq && Yq) {
          Eq.indices = gq, Eq.positions = Yq, lq && (Eq.uvs = lq), Oq && (Eq.normals = Oq);
          const mq = qq + 1,
            xq = [];
          for (let qq = 0; qq < mq + 1; qq++) xq[qq] = [];
          let Aq, cq;
          const uq = new rq.q(0, 0, 0),
            Bq = new rq.q(0, 0, 0),
            Wq = new rq.p(0, 0),
            Nq = [],
            aq = [],
            Vq = [];
          let dq, jq, Hq, oq = Yq.length;
          lq && (jq = lq.length), Oq && (Hq = Oq.length);
          for (let qq = 0; qq < gq.length; qq += 3) {
            aq[0] = gq[qq], aq[1] = gq[qq + 1], aq[2] = gq[qq + 2];
            for (let qq = 0; qq < 3; qq++)
              if (Aq = aq[qq], cq = aq[(qq + 1) % 3], void 0 === Vq[Aq] && void 0 === Vq[cq] ? (Vq[Aq] = [], Vq[cq] = []) : (void 0 === Vq[Aq] && (Vq[Aq] = []), void 0 === Vq[cq] && (Vq[cq] = [])), void 0 === Vq[Aq][cq] && void 0 === Vq[cq][Aq]) {
                Vq[Aq][cq] = [], uq.x = (Yq[3 * cq] - Yq[3 * Aq]) / mq, uq.y = (Yq[3 * cq + 1] - Yq[3 * Aq + 1]) / mq, uq.z = (Yq[3 * cq + 2] - Yq[3 * Aq + 2]) / mq, Oq && (Bq.x = (Oq[3 * cq] - Oq[3 * Aq]) / mq, Bq.y = (Oq[3 * cq + 1] - Oq[3 * Aq + 1]) / mq, Bq.z = (Oq[3 * cq + 2] - Oq[3 * Aq + 2]) / mq), lq && (Wq.x = (lq[2 * cq] - lq[2 * Aq]) / mq, Wq.y = (lq[2 * cq + 1] - lq[2 * Aq + 1]) / mq), Vq[Aq][cq].push(Aq);
                for (let qq = 1; qq < mq; qq++) Vq[Aq][cq].push(Yq.length / 3), Yq[oq++] = Yq[3 * Aq] + qq * uq.x, Yq[oq++] = Yq[3 * Aq + 1] + qq * uq.y, Yq[oq++] = Yq[3 * Aq + 2] + qq * uq.z, Oq && (Oq[Hq++] = Oq[3 * Aq] + qq * Bq.x, Oq[Hq++] = Oq[3 * Aq + 1] + qq * Bq.y, Oq[Hq++] = Oq[3 * Aq + 2] + qq * Bq.z), lq && (lq[jq++] = lq[2 * Aq] + qq * Wq.x, lq[jq++] = lq[2 * Aq + 1] + qq * Wq.y);
                Vq[Aq][cq].push(cq), Vq[cq][Aq] = [], dq = Vq[Aq][cq].length;
                for (let qq = 0; qq < dq; qq++) Vq[cq][Aq][qq] = Vq[Aq][cq][dq - 1 - qq]
              } xq[0][0] = gq[qq], xq[1][0] = Vq[gq[qq]][gq[qq + 1]][1], xq[1][1] = Vq[gq[qq]][gq[qq + 2]][1];
            for (let Eq = 2; Eq < mq; Eq++) {
              xq[Eq][0] = Vq[gq[qq]][gq[qq + 1]][Eq], xq[Eq][Eq] = Vq[gq[qq]][gq[qq + 2]][Eq], uq.x = (Yq[3 * xq[Eq][Eq]] - Yq[3 * xq[Eq][0]]) / Eq, uq.y = (Yq[3 * xq[Eq][Eq] + 1] - Yq[3 * xq[Eq][0] + 1]) / Eq, uq.z = (Yq[3 * xq[Eq][Eq] + 2] - Yq[3 * xq[Eq][0] + 2]) / Eq, Oq && (Bq.x = (Oq[3 * xq[Eq][Eq]] - Oq[3 * xq[Eq][0]]) / Eq, Bq.y = (Oq[3 * xq[Eq][Eq] + 1] - Oq[3 * xq[Eq][0] + 1]) / Eq, Bq.z = (Oq[3 * xq[Eq][Eq] + 2] - Oq[3 * xq[Eq][0] + 2]) / Eq), lq && (Wq.x = (lq[2 * xq[Eq][Eq]] - lq[2 * xq[Eq][0]]) / Eq, Wq.y = (lq[2 * xq[Eq][Eq] + 1] - lq[2 * xq[Eq][0] + 1]) / Eq);
              for (let qq = 1; qq < Eq; qq++) xq[Eq][qq] = Yq.length / 3, Yq[oq++] = Yq[3 * xq[Eq][0]] + qq * uq.x, Yq[oq++] = Yq[3 * xq[Eq][0] + 1] + qq * uq.y, Yq[oq++] = Yq[3 * xq[Eq][0] + 2] + qq * uq.z, Oq && (Oq[Hq++] = Oq[3 * xq[Eq][0]] + qq * Bq.x, Oq[Hq++] = Oq[3 * xq[Eq][0] + 1] + qq * Bq.y, Oq[Hq++] = Oq[3 * xq[Eq][0] + 2] + qq * Bq.z), lq && (lq[jq++] = lq[2 * xq[Eq][0]] + qq * Wq.x, lq[jq++] = lq[2 * xq[Eq][0] + 1] + qq * Wq.y)
            }
            xq[mq] = Vq[gq[qq + 1]][gq[qq + 2]], Nq.push(xq[0][0], xq[1][0], xq[1][1]);
            for (let qq = 1; qq < mq; qq++) {
              let Eq;
              for (Eq = 0; Eq < qq; Eq++) Nq.push(xq[qq][Eq], xq[qq + 1][Eq], xq[qq + 1][Eq + 1]), Nq.push(xq[qq][Eq], xq[qq + 1][Eq + 1], xq[qq][Eq + 1]);
              Nq.push(xq[qq][Eq], xq[qq + 1][Eq], xq[qq + 1][Eq + 1])
            }
          }
          Eq.indices = Nq, Eq.applyToMesh(this, this.isVertexBufferUpdatable(nq.g.PositionKind))
        } else Gq.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const qq = bq.d.ExtractFromMesh(this),
          Eq = qq.uvs,
          gq = qq.indices,
          Yq = qq.positions,
          lq = qq.colors,
          Oq = qq.matricesIndices,
          mq = qq.matricesWeights,
          xq = qq.matricesIndicesExtra,
          Aq = qq.matricesWeightsExtra;
        if (void 0 === gq || void 0 === Yq || null === gq || null === Yq) Gq.b.Warn("VertexData contains empty entries");
        else {
          const cq = [],
            uq = [],
            Bq = [],
            Wq = [],
            Nq = [],
            aq = [],
            Vq = [],
            dq = [];
          let jq, Hq = 0;
          const oq = {};
          let Pq, Qq;
          for (let qq = 0; qq < gq.length; qq += 3) {
            Qq = [gq[qq], gq[qq + 1], gq[qq + 2]], jq = [];
            for (let qq = 0; qq < 3; qq++) {
              jq[qq] = "";
              for (let Eq = 0; Eq < 3; Eq++) Math.abs(Yq[3 * Qq[qq] + Eq]) < 1e-8 && (Yq[3 * Qq[qq] + Eq] = 0), jq[qq] += Yq[3 * Qq[qq] + Eq] + "|"
            }
            if (jq[0] != jq[1] && jq[0] != jq[2] && jq[1] != jq[2])
              for (let qq = 0; qq < 3; qq++) {
                if (Pq = oq[jq[qq]], void 0 === Pq) {
                  oq[jq[qq]] = Hq, Pq = Hq++;
                  for (let Eq = 0; Eq < 3; Eq++) cq.push(Yq[3 * Qq[qq] + Eq]);
                  if (null !== lq && void 0 !== lq)
                    for (let Eq = 0; Eq < 4; Eq++) Wq.push(lq[4 * Qq[qq] + Eq]);
                  if (null !== Eq && void 0 !== Eq)
                    for (let gq = 0; gq < 2; gq++) Bq.push(Eq[2 * Qq[qq] + gq]);
                  if (null !== Oq && void 0 !== Oq)
                    for (let Eq = 0; Eq < 4; Eq++) Nq.push(Oq[4 * Qq[qq] + Eq]);
                  if (null !== mq && void 0 !== mq)
                    for (let Eq = 0; Eq < 4; Eq++) aq.push(mq[4 * Qq[qq] + Eq]);
                  if (null !== xq && void 0 !== xq)
                    for (let Eq = 0; Eq < 4; Eq++) Vq.push(xq[4 * Qq[qq] + Eq]);
                  if (null !== Aq && void 0 !== Aq)
                    for (let Eq = 0; Eq < 4; Eq++) dq.push(Aq[4 * Qq[qq] + Eq])
                }
                uq.push(Pq)
              }
          }
          const yq = [];
          bq.d.ComputeNormals(cq, uq, yq), qq.positions = cq, qq.indices = uq, qq.normals = yq, null !== Eq && void 0 !== Eq && (qq.uvs = Bq), null !== lq && void 0 !== lq && (qq.colors = Wq), null !== Oq && void 0 !== Oq && (qq.matricesIndices = Nq), null !== mq && void 0 !== mq && (qq.matricesWeights = aq), null !== xq && void 0 !== xq && (qq.matricesIndicesExtra = Vq), null !== mq && void 0 !== mq && (qq.matricesWeightsExtra = dq), qq.applyToMesh(this, this.isVertexBufferUpdatable(nq.g.PositionKind))
        }
      }
      static _instancedMeshFactory(qq, Eq) {
        throw (0, Jq.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(qq, Eq, gq) {
        throw (0, Jq.m)("PhysicsImpostor")
      }
      createInstance(qq) {
        const Eq = Iq._instancedMeshFactory(qq, this);
        return Eq.parent = this.parent, Eq
      }
      synchronizeInstances() {
        for (let qq = 0; qq < this.instances.length; qq++) {
          this.instances[qq]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(qq) {
        const Eq = this.iYq(),
          gq = this.getVerticesData(nq.g.PositionKind);
        if (!gq || !Eq) return this;
        const Yq = [];
        for (let Oq = 0; Oq < gq.length; Oq += 3) Yq.push(rq.q.FromArray(gq, Oq));
        const lq = [];
        return Hq.b.SyncAsyncForLoop(Yq.length, 40, (qq => {
          const Eq = Yq.length - 1 - qq,
            gq = Yq[Eq];
          for (let Oq = 0; Oq < Eq; ++Oq) {
            const qq = Yq[Oq];
            if (gq.equals(qq)) {
              lq[Eq] = Oq;
              break
            }
          }
        }), (() => {
          for (let qq = 0; qq < Eq.length; ++qq) Eq[qq] = lq[Eq[qq]] || Eq[qq];
          const gq = this.fn.slice(0);
          this.setIndices(Eq), this.fn = gq, qq && qq(this)
        })), this
      }
      serialize() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        qq.name = this.name, qq.id = this.id, qq.uniqueId = this.uniqueId, qq.type = this.getClassName(), Qq.b && Qq.b.HasTags(this) && (qq.tags = Qq.b.GetTags(this)), qq.position = this.position.bYq(), this.rotationQuaternion ? qq.rotationQuaternion = this.rotationQuaternion.bYq() : this.rotation && (qq.rotation = this.rotation.bYq()), qq.rc = this.rc.bYq(), this._postMultiplyPivotMatrix ? qq.pivotMatrix = this.getPivotMatrix().bYq() : qq.localMatrix = this.getPivotMatrix().bYq(), qq.isEnabled = this.isEnabled(!1), qq.isVisible = this.isVisible, qq.infiniteDistance = this.infiniteDistance, qq.pickable = this.yV, qq.receiveShadows = this.receiveShadows, qq.billboardMode = this.billboardMode, qq.visibility = this.visibility, qq.Wa = this.Wa, qq.checkCollisions = this.checkCollisions, qq.ellipsoid = this.ellipsoid.bYq(), qq.ellipsoidOffset = this.ellipsoidOffset.bYq(), qq.Va = this.Va, qq.isBlocker = this.isBlocker, qq.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (qq.eJ = !0), this.parent && this.parent._serializeAsParent(qq), qq.isUnIndexed = this.isUnIndexed;
        const Eq = this._geometry;
        if (Eq && this.fn) {
          qq.geometryUniqueId = Eq.uniqueId, qq.geometryId = Eq.id, qq.fn = [];
          for (let Eq = 0; Eq < this.fn.length; Eq++) {
            const gq = this.fn[Eq];
            qq.fn.push({
              materialIndex: gq.materialIndex,
              verticesStart: gq.verticesStart,
              verticesCount: gq.verticesCount,
              indexStart: gq.indexStart,
              indexCount: gq.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (qq.materialUniqueId = this.material.uniqueId, qq.materialId = this.material.id) : (this.material = null, qq.materialUniqueId = this._scene.defaultMaterial.uniqueId, qq.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (qq.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (qq.skeletonId = this.skeleton.id, qq.skeletonUniqueId = this.skeleton.uniqueId, qq.numBoneInfluencers = this.numBoneInfluencers), this.ZJ()._getComponent(kq.e.NAME_PHYSICSENGINE)) {
          const Eq = this.getPhysicsImpostor?.();
          Eq && (qq.physicsMass = Eq.getParam("Am"), qq.physicsFriction = Eq.getParam("friction"), qq.physicsRestitution = Eq.getParam("Am"), qq.physicsImpostor = Eq.type)
        }
        this.metadata && (qq.metadata = this.metadata), 0 !== this.meshBlendingTag && (qq.meshBlendingTag = this.meshBlendingTag), qq.instances = [];
        for (let gq = 0; gq < this.instances.length; gq++) {
          const Eq = this.instances[gq];
          if (Eq.doNotSerialize) continue;
          const Yq = {
            name: Eq.name,
            id: Eq.id,
            isEnabled: Eq.isEnabled(!1),
            isVisible: Eq.isVisible,
            yV: Eq.yV,
            checkCollisions: Eq.checkCollisions,
            position: Eq.position.bYq(),
            rc: Eq.rc.bYq()
          };
          if (Eq.parent && Eq.parent._serializeAsParent(Yq), Eq.rotationQuaternion ? Yq.rotationQuaternion = Eq.rotationQuaternion.bYq() : Eq.rotation && (Yq.rotation = Eq.rotation.bYq()), this.ZJ()._getComponent(kq.e.NAME_PHYSICSENGINE)) {
            const qq = Eq.getPhysicsImpostor?.();
            qq && (Yq.physicsMass = qq.getParam("Am"), Yq.physicsFriction = qq.getParam("friction"), Yq.physicsRestitution = qq.getParam("Am"), Yq.physicsImpostor = qq.type)
          }
          Eq.metadata && (Yq.metadata = Eq.metadata), Eq.actionManager && (Yq.actions = Eq.actionManager.serialize(Eq.name)), qq.instances.push(Yq), pq.d.AppendSerializedAnimations(Eq, Yq), Yq.zV = Eq.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (qq.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.eEq
          }, this._userThinInstanceBuffersStorage)) {
          const Eq = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const qq in this._userThinInstanceBuffersStorage.data) Eq.data[qq] = Array.from(this._userThinInstanceBuffersStorage.data[qq]), Eq.sizes[qq] = this._userThinInstanceBuffersStorage.sizes[qq], Eq.strides[qq] = this._userThinInstanceBuffersStorage.strides[qq];
          qq.thinInstances.userThinInstance = Eq
        }
        return pq.d.AppendSerializedAnimations(this, qq), qq.zV = this.serializeAnimationRanges(), qq.layerMask = this.layerMask, qq.alphaIndex = this.alphaIndex, qq.hasVertexAlpha = this.hasVertexAlpha, qq.overlayAlpha = this.overlayAlpha, qq.overlayColor = this.overlayColor.bYq(), qq.renderOverlay = this.renderOverlay, qq.applyFog = this.applyFog, this.actionManager && (qq.actions = this.actionManager.serialize(this.name)), qq
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const qq = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (qq && qq.vertexCount) {
          if (qq.vertexCount !== this.getTotalVertices()) return Gq.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (qq.isUsingTextureForTargets) return;
          for (let Eq = 0; Eq < qq.numInfluencers; Eq++) {
            const gq = qq.getActiveTarget(Eq),
              Yq = gq.getPositions();
            if (!Yq) return void Gq.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(nq.g.PositionKind + Eq, Yq, !1, 3);
            const lq = gq.getNormals();
            lq && this.geometry.setVerticesData(nq.g.NormalKind + Eq, lq, !1, 3);
            const Oq = gq.getTangents();
            Oq && this.geometry.setVerticesData(nq.g.TangentKind + Eq, Oq, !1, 3);
            const mq = gq.getUVs();
            mq && this.geometry.setVerticesData(nq.g.UVKind + "_" + Eq, mq, !1, 2);
            const xq = gq.getUV2s();
            xq && this.geometry.setVerticesData(nq.g.UV2Kind + "_" + Eq, xq, !1, 2);
            const Aq = gq.getColors();
            Aq && this.geometry.setVerticesData(nq.g.ColorKind + Eq, Aq, !1, 4)
          }
        } else {
          let qq = 0;
          for (; this.geometry.isVerticesDataPresent(nq.g.PositionKind + qq);) this.geometry.removeVerticesData(nq.g.PositionKind + qq), this.geometry.isVerticesDataPresent(nq.g.NormalKind + qq) && this.geometry.removeVerticesData(nq.g.NormalKind + qq), this.geometry.isVerticesDataPresent(nq.g.TangentKind + qq) && this.geometry.removeVerticesData(nq.g.TangentKind + qq), this.geometry.isVerticesDataPresent(nq.g.UVKind + "_" + qq) && this.geometry.removeVerticesData(nq.g.UVKind + "_" + qq), this.geometry.isVerticesDataPresent(nq.g.UV2Kind + "_" + qq) && this.geometry.removeVerticesData(nq.g.UV2Kind + "_" + qq), this.geometry.isVerticesDataPresent(nq.g.ColorKind + qq) && this.geometry.removeVerticesData(nq.g.ColorKind + qq), qq++
        }
      }
      static Parse(qq, Eq, gq) {
        let Yq, lq = !1;
        if (qq.type && "LinesMesh" === qq.type ? Yq = Iq._LinesMeshParser(qq, Eq) : qq.type && "GroundMesh" === qq.type ? Yq = Iq._GroundMeshParser(qq, Eq) : qq.type && "GoldbergMesh" === qq.type ? Yq = Iq._GoldbergMeshParser(qq, Eq) : qq.type && "GreasedLineMesh" === qq.type ? Yq = Iq._GreasedLineMeshParser(qq, Eq) : qq.type && "TrailMesh" === qq.type ? Yq = Iq._TrailMeshParser(qq, Eq) : qq.type && "GaussianSplattingMesh" === qq.type ? (Yq = qq._isCompound ? Iq._GaussianSplattingCompoundMeshParser(qq, Eq) : Iq._GaussianSplattingMeshParser(qq, Eq), lq = !0) : qq.type && "GaussianSplattingPartProxyMesh" === qq.type ? (Yq = Iq._GaussianSplattingPartProxyMeshParser(qq, Eq), lq = !0) : Yq = new Iq(qq.name, Eq), Yq.id = qq.id, Yq._waitingParsedUniqueId = qq.uniqueId, Qq.b && Qq.b.AddTagsTo(Yq, qq.tags), Yq.position = rq.q.FromArray(qq.position), void 0 !== qq.metadata && (Yq.metadata = qq.metadata), void 0 !== qq.meshBlendingTag && (Yq.meshBlendingTag = qq.meshBlendingTag), qq.rotationQuaternion ? Yq.rotationQuaternion = rq.h.FromArray(qq.rotationQuaternion) : qq.rotation && (Yq.rotation = rq.q.FromArray(qq.rotation)), Yq.rc = rq.q.FromArray(qq.rc), qq.localMatrix ? Yq.setPreTransformMatrix(rq.e.FromArray(qq.localMatrix)) : qq.pivotMatrix && Yq.setPivotMatrix(rq.e.FromArray(qq.pivotMatrix)), Yq.hG(qq.isEnabled), Yq.isVisible = qq.isVisible, Yq.infiniteDistance = qq.infiniteDistance, Yq.Wa = !!qq.Wa, Yq.showBoundingBox = qq.showBoundingBox, Yq.showSubMeshesBoundingBox = qq.showSubMeshesBoundingBox, void 0 !== qq.applyFog && (Yq.applyFog = qq.applyFog), void 0 !== qq.pickable && (Yq.yV = qq.pickable), void 0 !== qq.alphaIndex && (Yq.alphaIndex = qq.alphaIndex), Yq.receiveShadows = qq.receiveShadows, void 0 !== qq.billboardMode && (Yq.billboardMode = qq.billboardMode), void 0 !== qq.visibility && (Yq.visibility = qq.visibility), Yq.checkCollisions = qq.checkCollisions, Yq.Va = !!qq.Va, qq.ellipsoid && (Yq.ellipsoid = rq.q.FromArray(qq.ellipsoid)), qq.ellipsoidOffset && (Yq.ellipsoidOffset = rq.q.FromArray(qq.ellipsoidOffset)), null != qq.overrideMaterialSideOrientation && (Yq.sideOrientation = qq.overrideMaterialSideOrientation), void 0 !== qq.sideOrientation && (Yq.sideOrientation = qq.sideOrientation), void 0 !== qq.isBlocker && (Yq.isBlocker = qq.isBlocker), Yq._shouldGenerateFlatShading = qq.useFlatShading, qq.eJ && (Yq._waitingData.eJ = qq.eJ), void 0 !== qq.parentId && (Yq._waitingParentId = qq.parentId), void 0 !== qq.parentInstanceIndex && (Yq._waitingParentInstanceIndex = qq.parentInstanceIndex), void 0 !== qq.actions && (Yq._waitingData.actions = qq.actions), void 0 !== qq.overlayAlpha && (Yq.overlayAlpha = qq.overlayAlpha), void 0 !== qq.overlayColor && (Yq.overlayColor = vq.d.FromArray(qq.overlayColor)), void 0 !== qq.renderOverlay && (Yq.renderOverlay = qq.renderOverlay), Yq.isUnIndexed = !!qq.isUnIndexed, Yq.hasVertexAlpha = qq.hasVertexAlpha, qq.delayLoadingFile ? (Yq.delayLoadState = 4, Yq.delayLoadingFile = gq + qq.delayLoadingFile, Yq.buildBoundingInfo(rq.q.FromArray(qq.boundingBoxMinimum), rq.q.FromArray(qq.boundingBoxMaximum)), qq._binaryInfo && (Yq._binaryInfo = qq._binaryInfo), Yq._delayInfo = [], qq.hasUVs && Yq._delayInfo.push(nq.g.UVKind), qq.hasUVs2 && Yq._delayInfo.push(nq.g.UV2Kind), qq.hasUVs3 && Yq._delayInfo.push(nq.g.UV3Kind), qq.hasUVs4 && Yq._delayInfo.push(nq.g.UV4Kind), qq.hasUVs5 && Yq._delayInfo.push(nq.g.UV5Kind), qq.hasUVs6 && Yq._delayInfo.push(nq.g.UV6Kind), qq.hasColors && Yq._delayInfo.push(nq.g.ColorKind), qq.hasMatricesIndices && Yq._delayInfo.push(nq.g.MatricesIndicesKind), qq.hasMatricesWeights && Yq._delayInfo.push(nq.g.MatricesWeightsKind), Yq._delayLoadingFunction = iq.d._ImportGeometry, Sq.e.ForceFullSceneLoadingForIncremental && Yq._checkDelayState()) : lq || iq.d._ImportGeometry(qq, Yq), qq.materialUniqueId ? Yq._waitingMaterialId = qq.materialUniqueId : qq.materialId && (Yq._waitingMaterialId = qq.materialId), qq.morphTargetManagerId > -1 && (Yq._waitingMorphTargetManagerId = qq.morphTargetManagerId), void 0 !== qq.skeletonId && null !== qq.skeletonId && (Yq.skeleton = Eq.getLastSkeletonById(qq.skeletonId), Yq._waitingSkeletonId = qq.skeletonId, qq.numBoneInfluencers && (Yq.numBoneInfluencers = qq.numBoneInfluencers)), void 0 !== qq.skeletonUniqueId && null !== qq.skeletonUniqueId && (Yq._waitingSkeletonUniqueId = qq.skeletonUniqueId), qq.animations) {
          for (let Eq = 0; Eq < qq.animations.length; Eq++) {
            const gq = qq.animations[Eq],
              lq = (0, Lq.e)("BABYLON.Animation");
            lq && Yq.animations.push(lq.Parse(gq))
          }
          hq.c.ParseAnimationRanges(Yq, qq, Eq)
        }
        if (qq.autoAnimate && Eq.beginAnimation(Yq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), qq.layerMask && !isNaN(qq.layerMask) ? Yq.layerMask = Math.abs(parseInt(qq.layerMask)) : Yq.layerMask = 268435455, qq.physicsImpostor && (Yq.physicsImpostor = Iq._PhysicsImpostorParser(Eq, Yq, qq)), qq.lodMeshIds && (Yq._waitingData.lods = {
            ids: qq.lodMeshIds,
            distances: qq.lodDistances ? qq.lodDistances : null,
            coverages: qq.lodCoverages ? qq.lodCoverages : null
          }), qq.instances)
          for (let Oq = 0; Oq < qq.instances.length; Oq++) {
            const gq = qq.instances[Oq],
              lq = Yq.createInstance(gq.name);
            if (gq.id && (lq.id = gq.id), Qq.b && (gq.tags ? Qq.b.AddTagsTo(lq, gq.tags) : Qq.b.AddTagsTo(lq, qq.tags)), lq.position = rq.q.FromArray(gq.position), void 0 !== gq.metadata && (lq.metadata = gq.metadata), void 0 !== gq.parentId && (lq._waitingParentId = gq.parentId), void 0 !== gq.parentInstanceIndex && (lq._waitingParentInstanceIndex = gq.parentInstanceIndex), void 0 !== gq.isEnabled && null !== gq.isEnabled && lq.hG(gq.isEnabled), void 0 !== gq.isVisible && null !== gq.isVisible && (lq.isVisible = gq.isVisible), void 0 !== gq.yV && null !== gq.yV && (lq.yV = gq.yV), gq.rotationQuaternion ? lq.rotationQuaternion = rq.h.FromArray(gq.rotationQuaternion) : gq.rotation && (lq.rotation = rq.q.FromArray(gq.rotation)), lq.rc = rq.q.FromArray(gq.rc), void 0 != gq.checkCollisions && null != gq.checkCollisions && (lq.checkCollisions = gq.checkCollisions), void 0 != gq.pickable && null != gq.pickable && (lq.yV = gq.pickable), void 0 != gq.showBoundingBox && null != gq.showBoundingBox && (lq.showBoundingBox = gq.showBoundingBox), void 0 != gq.showSubMeshesBoundingBox && null != gq.showSubMeshesBoundingBox && (lq.showSubMeshesBoundingBox = gq.showSubMeshesBoundingBox), void 0 != gq.alphaIndex && null != gq.showSubMeshesBoundingBox && (lq.alphaIndex = gq.alphaIndex), gq.physicsImpostor && (lq.physicsImpostor = Iq._PhysicsImpostorParser(Eq, lq, gq)), void 0 !== gq.actions && (lq._waitingData.actions = gq.actions), gq.animations) {
              for (let qq = 0; qq < gq.animations.length; qq++) {
                const Eq = gq.animations[qq],
                  Yq = (0, Lq.e)("BABYLON.Animation");
                Yq && lq.animations.push(Yq.Parse(Eq))
              }
              hq.c.ParseAnimationRanges(lq, gq, Eq), gq.autoAnimate && Eq.beginAnimation(lq, gq.autoAnimateFrom, gq.autoAnimateTo, gq.autoAnimateLoop, gq.autoAnimateSpeed || 1)
            }
          }
        if (qq.thinInstances) {
          const Eq = qq.thinInstances;
          if (Yq.eEq = !!Eq.enablePicking, Eq.matrixData ? (Yq.cqq("matrix", new Float32Array(Eq.matrixData), 16, !1), Yq._thinInstanceDataStorage.matrixBufferSize = Eq.matrixBufferSize, Yq._thinInstanceDataStorage.instancesCount = Eq.instancesCount) : Yq._thinInstanceDataStorage.matrixBufferSize = Eq.matrixBufferSize, qq.thinInstances.userThinInstance) {
            const Eq = qq.thinInstances.userThinInstance;
            for (const qq in Eq.data) Yq.cqq(qq, new Float32Array(Eq.data[qq]), Eq.strides[qq], !1), Yq._userThinInstanceBuffersStorage.sizes[qq] = Eq.sizes[qq]
          }
        }
        return Yq
      }
      setPositionsForCPUSkinning() {
        const qq = this._internalMeshDataInfo;
        if (!qq._sourcePositions) {
          const Eq = this.getVerticesData(nq.g.PositionKind);
          if (!Eq) return qq._sourcePositions;
          qq._sourcePositions = new Float32Array(Eq), this.isVertexBufferUpdatable(nq.g.PositionKind) || this.setVerticesData(nq.g.PositionKind, Eq, !0)
        }
        return qq._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const qq = this._internalMeshDataInfo;
        if (!qq._sourceNormals) {
          const Eq = this.getVerticesData(nq.g.NormalKind);
          if (!Eq) return qq._sourceNormals;
          qq._sourceNormals = new Float32Array(Eq), this.isVertexBufferUpdatable(nq.g.NormalKind) || this.setVerticesData(nq.g.NormalKind, Eq, !0)
        }
        return qq._sourceNormals
      }
      applySkeleton(qq) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.ZJ().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.ZJ().getFrameId(), !this.isVerticesDataPresent(nq.g.PositionKind)) return this;
        if (!this.isVerticesDataPresent(nq.g.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(nq.g.MatricesWeightsKind)) return this;
        const Eq = this.isVerticesDataPresent(nq.g.NormalKind),
          gq = this._internalMeshDataInfo;
        if (!gq._sourcePositions) {
          const qq = this.fn.slice();
          this.setPositionsForCPUSkinning(), this.fn = qq
        }
        Eq && !gq._sourceNormals && this.setNormalsForCPUSkinning();
        let Yq = this.getVerticesData(nq.g.PositionKind);
        if (!Yq) return this;
        Yq instanceof Float32Array || (Yq = new Float32Array(Yq));
        let lq = this.getVerticesData(nq.g.NormalKind);
        if (Eq) {
          if (!lq) return this;
          lq instanceof Float32Array || (lq = new Float32Array(lq))
        }
        const Oq = this.getVerticesData(nq.g.MatricesIndicesKind),
          mq = this.getVerticesData(nq.g.MatricesWeightsKind);
        if (!mq || !Oq) return this;
        const xq = this.numBoneInfluencers > 4,
          Aq = xq ? this.getVerticesData(nq.g.MatricesIndicesExtraKind) : null,
          cq = xq ? this.getVerticesData(nq.g.MatricesWeightsExtraKind) : null,
          uq = qq.getTransformMatrices(this),
          Bq = rq.q.Zero(),
          Wq = new rq.e,
          Nq = new rq.e;
        let aq, Vq = 0;
        for (let dq = 0; dq < Yq.length; dq += 3, Vq += 4) {
          let qq;
          for (aq = 0; aq < 4; aq++) qq = mq[Vq + aq], qq > 0 && (rq.e.FromFloat32ArrayToRefScaled(uq, Math.floor(16 * Oq[Vq + aq]), qq, Nq), Wq.addToSelf(Nq));
          if (xq)
            for (aq = 0; aq < 4; aq++) qq = cq[Vq + aq], qq > 0 && (rq.e.FromFloat32ArrayToRefScaled(uq, Math.floor(16 * Aq[Vq + aq]), qq, Nq), Wq.addToSelf(Nq));
          rq.q.TransformCoordinatesFromFloatsToRef(gq._sourcePositions[dq], gq._sourcePositions[dq + 1], gq._sourcePositions[dq + 2], Wq, Bq), Bq.toArray(Yq, dq), Eq && (rq.q.TransformNormalFromFloatsToRef(gq._sourceNormals[dq], gq._sourceNormals[dq + 1], gq._sourceNormals[dq + 2], Wq, Bq), Bq.toArray(lq, dq)), Wq.reset()
        }
        return this.updateVerticesData(nq.g.PositionKind, Yq), Eq && this.updateVerticesData(nq.g.NormalKind, lq), this
      }
      static MinMax(qq) {
        let Eq = null,
          gq = null;
        for (const Yq of qq) {
          const qq = Yq.yR().boundingBox;
          Eq && gq ? (Eq.minimizeInPlace(qq.minimumWorld), gq.maximizeInPlace(qq.maximumWorld)) : (Eq = qq.minimumWorld.clone(), gq = qq.maximumWorld.clone())
        }
        return Eq && gq ? {
          min: Eq,
          max: gq
        } : {
          min: rq.q.Zero(),
          max: rq.q.Zero()
        }
      }
      static Center(qq) {
        const Eq = qq instanceof Array ? Iq.MinMax(qq) : qq;
        return rq.q.Center(Eq.min, Eq.max)
      }
      static MergeMeshes(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        return (0, yq.o)(Iq._MergeMeshesCoroutine(qq, Eq, gq, Yq, lq, Oq, !1))
      }
      static async MergeMeshesAsync(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, yq.k)(Iq._MergeMeshesCoroutine(qq, Eq, gq, Yq, lq, Oq, !0), (0, yq.d)())
      }
      static * _MergeMeshesCoroutine(qq) {
        let Eq, gq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Yq = arguments.length > 2 ? arguments[2] : void 0,
          lq = arguments.length > 3 ? arguments[3] : void 0,
          Oq = arguments.length > 4 ? arguments[4] : void 0,
          mq = arguments.length > 5 ? arguments[5] : void 0,
          xq = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (qq = qq.filter(Boolean)).length) return null;
        if (!Yq) {
          let gq = 0;
          for (Eq = 0; Eq < qq.length; Eq++)
            if (gq += qq[Eq].getTotalVertices(), gq >= 65536) return Gq.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Aq = qq[0];
        mq && (Oq = !1, qq.sort(((qq, Eq) => (qq.material?.uniqueId ?? -1) - (Eq.material?.uniqueId ?? -1))));
        const cq = new Array,
          uq = new Array,
          Bq = new Array,
          Wq = qq[0].sideOrientation;
        for (Eq = 0; Eq < qq.length; Eq++) {
          const gq = qq[Eq];
          if (gq.GJ) return Gq.b.Warn("Cannot merge instance meshes."), null;
          if (Wq !== gq.sideOrientation) return Gq.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Oq || mq) {
            const qq = Bq.reduce(((qq, Eq) => Math.max(qq, Eq.start + Eq.count)), 0);
            if (mq)
              if (gq.material) {
                const Eq = gq.material;
                if (Eq instanceof zq.b) {
                  for (let qq = 0; qq < Eq.Bqq.length; qq++) cq.indexOf(Eq.Bqq[qq]) < 0 && cq.push(Eq.Bqq[qq]);
                  for (let Yq = 0; Yq < gq.fn.length; Yq++) uq.push(cq.indexOf(Eq.Bqq[gq.fn[Yq].materialIndex])), Bq.push({
                    start: qq + gq.fn[Yq].indexStart,
                    count: gq.fn[Yq].indexCount
                  })
                } else {
                  cq.indexOf(Eq) < 0 && cq.push(Eq);
                  for (let Yq = 0; Yq < gq.fn.length; Yq++) uq.push(cq.indexOf(Eq)), Bq.push({
                    start: qq + gq.fn[Yq].indexStart,
                    count: gq.fn[Yq].indexCount
                  })
                }
              } else
                for (let Eq = 0; Eq < gq.fn.length; Eq++) uq.push(0), Bq.push({
                  start: qq + gq.fn[Eq].indexStart,
                  count: gq.fn[Eq].indexCount
                });
            else Bq.push({
              start: qq,
              count: gq.getTotalIndices()
            })
          }
        }
        if (mq && Bq.length > 1) {
          let qq = 0;
          for (let Eq = 1; Eq < Bq.length; Eq++) {
            const gq = Bq[qq],
              Yq = Bq[Eq];
            uq[Eq] === uq[qq] && gq.start + gq.count === Yq.start ? gq.count += Yq.count : (qq++, Bq[qq] = Yq, uq[qq] = uq[Eq])
          }
          Bq.length = qq + 1, uq.length = qq + 1
        }
        const Nq = qq => {
            const Eq = qq.computeWorldMatrix(!0);
            return {
              vertexData: bq.d.ExtractFromMesh(qq, !1, !1),
              transform: Eq
            }
          },
          {
            vertexData: aq,
            transform: Vq
          } = Nq(qq[0]);
        xq && (yield);
        const dq = new Array(qq.length - 1);
        for (let yq = 1; yq < qq.length; yq++) dq[yq - 1] = Nq(qq[yq]), xq && (yield);
        const jq = aq._mergeCoroutine(Vq, dq, Yq, xq, !gq);
        let Hq = jq.next();
        for (; !Hq.done;) xq && (yield), Hq = jq.next();
        const oq = Hq.value;
        lq || (lq = new Iq(Aq.name + "_merged", Aq.ZJ()));
        const Pq = oq._applyToCoroutine(lq, void 0, xq);
        let Qq = Pq.next();
        for (; !Qq.done;) xq && (yield), Qq = Pq.next();
        if (lq.checkCollisions = Aq.checkCollisions, lq.sideOrientation = Aq.sideOrientation, gq)
          for (Eq = 0; Eq < qq.length; Eq++) qq[Eq].dispose();
        if (Oq || mq) {
          for (lq.releaseSubMeshes(), Eq = 0; Eq < Bq.length;) fq.c.CreateFromIndices(0, Bq[Eq].start, Bq[Eq].count, lq, void 0, !1), Eq++;
          for (const qq of lq.fn) qq.refreshBoundingInfo();
          lq.computeWorldMatrix(!0)
        }
        if (mq) {
          const qq = new zq.b(Aq.name + "_merged", Aq.ZJ());
          qq.Bqq = cq;
          for (let Eq = 0; Eq < lq.fn.length; Eq++) lq.fn[Eq].materialIndex = uq[Eq];
          lq.material = qq
        } else lq.material = Aq.material;
        return lq
      }
      Z5(qq) {
        qq._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(qq)
      }
      qqq(qq) {
        const Eq = qq._indexInSourceMeshInstanceArray;
        if (-1 != Eq) {
          if (Eq !== this.instances.length - 1) {
            const qq = this.instances[this.instances.length - 1];
            this.instances[Eq] = qq, qq._indexInSourceMeshInstanceArray = Eq
          }
          qq._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Mq.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(qq) {
        const Eq = this.ZJ();
        return Eq.forcePointsCloud ? Mq.e.PointFillMode : Eq.forceWireframe ? Mq.e.WireFrameFillMode : this.overrideRenderingFillMode ?? qq
      }
      setMaterialByID(qq) {
        return this.setMaterialById(qq)
      }
      static CreateRibbon(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(qq, Eq, gq, Yq, lq, Oq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(qq, Eq, gq, Yq, lq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(qq, Eq, gq, Yq, lq, Oq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(qq, Eq, gq, Yq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(qq, Eq, gq, Yq, lq, Oq, mq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(qq, Eq, gq, Yq, lq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(qq, Eq, gq, Yq, lq, Oq, mq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(qq, Eq, gq, Yq, lq, Oq, mq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(qq, Eq, gq, Yq, lq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(qq, Eq, gq, Yq, lq, Oq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(qq, Eq, gq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(qq, Eq, gq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(qq, Eq, gq, Yq, lq, Oq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(qq, Eq, gq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(qq) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Iq.FRONTSIDE = bq.d.FRONTSIDE, Iq.BACKSIDE = bq.d.BACKSIDE, Iq.DOUBLESIDE = bq.d.DOUBLESIDE, Iq.DEFAULTSIDE = bq.d.DEFAULTSIDE, Iq.NO_CAP = 0, Iq.CAP_START = 1, Iq.CAP_END = 2, Iq.CAP_ALL = 3, Iq.NO_FLIP = 0, Iq.FLIP_TILE = 1, Iq.ROTATE_TILE = 2, Iq.FLIP_ROW = 3, Iq.ROTATE_ROW = 4, Iq.FLIP_N_ROTATE_TILE = 5, Iq.FLIP_N_ROTATE_ROW = 6, Iq.CENTER = 0, Iq.LEFT = 1, Iq.RIGHT = 2, Iq.TOP = 3, Iq.BOTTOM = 4, Iq.INSTANCEDMESH_SORT_TRANSPARENT = !1, Iq._GroundMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GroundMesh")
    }, Iq._GoldbergMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GoldbergMesh")
    }, Iq._LinesMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("LinesMesh")
    }, Iq._GreasedLineMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GreasedLineMesh")
    }, Iq._GreasedLineRibbonMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GreasedLineRibbonMesh")
    }, Iq._TrailMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("TrailMesh")
    }, Iq._GaussianSplattingMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GaussianSplattingMesh")
    }, Iq._GaussianSplattingPartProxyMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GaussianSplattingPartProxyMesh")
    }, Iq._GaussianSplattingCompoundMeshParser = (qq, Eq) => {
      throw (0, Jq.m)("GaussianSplattingCompoundMesh")
    };
    let eq = !1;

    function Dq() {
      eq || (eq = !0, (0, Lq.g)("BABYLON.Mesh", Iq))
    }(Yq = Iq.prototype).xR ?? (Yq.xR = (0, Jq.i)("Mesh", "xR")), (lq = Iq.prototype).simplify ?? (lq.simplify = (0, Jq.i)("Mesh", "simplify")), (Oq = Iq.prototype).thinInstanceAdd ?? (Oq.thinInstanceAdd = (0, Jq.i)("Mesh", "thinInstanceAdd")), (mq = Iq.prototype).thinInstanceAddSelf ?? (mq.thinInstanceAddSelf = (0, Jq.i)("Mesh", "thinInstanceAddSelf")), (xq = Iq.prototype).thinInstanceRegisterAttribute ?? (xq.thinInstanceRegisterAttribute = (0, Jq.i)("Mesh", "thinInstanceRegisterAttribute")), (Aq = Iq.prototype).thinInstanceSetMatrixAt ?? (Aq.thinInstanceSetMatrixAt = (0, Jq.i)("Mesh", "thinInstanceSetMatrixAt")), (cq = Iq.prototype).thinInstanceSetAttributeAt ?? (cq.thinInstanceSetAttributeAt = (0, Jq.i)("Mesh", "thinInstanceSetAttributeAt")), (uq = Iq.prototype).cqq ?? (uq.cqq = (0, Jq.i)("Mesh", "cqq")), (Bq = Iq.prototype).thinInstanceGetWorldMatrices ?? (Bq.thinInstanceGetWorldMatrices = (0, Jq.i)("Mesh", "thinInstanceGetWorldMatrices")), (Wq = Iq.prototype).lqq ?? (Wq.lqq = (0, Jq.i)("Mesh", "lqq")), (Nq = Iq.prototype).thinInstancePartialBufferUpdate ?? (Nq.thinInstancePartialBufferUpdate = (0, Jq.i)("Mesh", "thinInstancePartialBufferUpdate")), (aq = Iq.prototype).thinInstanceRefreshBoundingInfo ?? (aq.thinInstanceRefreshBoundingInfo = (0, Jq.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (Vq = Iq.prototype).getEmittedParticleSystems ?? (Vq.getEmittedParticleSystems = (0, Jq.i)("Mesh", "getEmittedParticleSystems")), (dq = Iq.prototype).getHierarchyEmittedParticleSystems ?? (dq.getHierarchyEmittedParticleSystems = (0, Jq.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Iq.prototype, "edgesShareWithInstances") || Object.defineProperty(Iq.prototype, "edgesShareWithInstances", (0, Jq.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Iq.prototype, "eEq") || Object.defineProperty(Iq.prototype, "eEq", (0, Jq.e)("Mesh", "eEq")), Object.getOwnPropertyDescriptor(Iq.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Iq.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Jq.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Iq.prototype, "o5") || Object.defineProperty(Iq.prototype, "o5", (0, Jq.e)("Mesh", "o5"))
  },
  40176: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq
    });
    var Yq = gq(39757),
      lq = gq(37139),
      Oq = gq(39879),
      mq = gq(39636),
      xq = gq(37289),
      Aq = gq(38653),
      cq = gq(39759),
      uq = gq(40172),
      Bq = gq(39805),
      Wq = gq(40040);
    class Nq {}
    let aq = (() => {
      var qq;
      let Eq, gq, aq, Vq, dq = [];
      return qq = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, uq.h)(this._applyToCoroutine.bind(this)), this.uniqueId = qq._UniqueIdGenerator, qq._UniqueIdGenerator++
        }
        set(qq, Eq) {
          switch (qq.length || Aq.b.Warn(`Setting vertex data kind '${Eq}' with an empty array`), Eq) {
            case Oq.g.PositionKind:
              this.positions = qq;
              break;
            case Oq.g.NormalKind:
              this.normals = qq;
              break;
            case Oq.g.TangentKind:
              this.tangents = qq;
              break;
            case Oq.g.UVKind:
              this.uvs = qq;
              break;
            case Oq.g.UV2Kind:
              this.uvs2 = qq;
              break;
            case Oq.g.UV3Kind:
              this.uvs3 = qq;
              break;
            case Oq.g.UV4Kind:
              this.uvs4 = qq;
              break;
            case Oq.g.UV5Kind:
              this.uvs5 = qq;
              break;
            case Oq.g.UV6Kind:
              this.uvs6 = qq;
              break;
            case Oq.g.ColorKind:
              this.colors = qq;
              break;
            case Oq.g.MatricesIndicesKind:
              this.matricesIndices = qq;
              break;
            case Oq.g.MatricesWeightsKind:
              this.matricesWeights = qq;
              break;
            case Oq.g.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = qq;
              break;
            case Oq.g.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = qq
          }
        }
        applyToMesh(qq, Eq) {
          return this._applyTo(qq, Eq, !1), this
        }
        applyToGeometry(qq, Eq) {
          return this._applyTo(qq, Eq, !1), this
        }
        updateMesh(qq) {
          return this._update(qq), this
        }
        updateGeometry(qq) {
          return this._update(qq), this
        }* _applyToCoroutine(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gq = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (qq.setVerticesData(Oq.g.PositionKind, this.positions, Eq), gq && (yield)), this.normals && (qq.setVerticesData(Oq.g.NormalKind, this.normals, Eq), gq && (yield)), this.tangents && (qq.setVerticesData(Oq.g.TangentKind, this.tangents, Eq), gq && (yield)), this.uvs && (qq.setVerticesData(Oq.g.UVKind, this.uvs, Eq), gq && (yield)), this.uvs2 && (qq.setVerticesData(Oq.g.UV2Kind, this.uvs2, Eq), gq && (yield)), this.uvs3 && (qq.setVerticesData(Oq.g.UV3Kind, this.uvs3, Eq), gq && (yield)), this.uvs4 && (qq.setVerticesData(Oq.g.UV4Kind, this.uvs4, Eq), gq && (yield)), this.uvs5 && (qq.setVerticesData(Oq.g.UV5Kind, this.uvs5, Eq), gq && (yield)), this.uvs6 && (qq.setVerticesData(Oq.g.UV6Kind, this.uvs6, Eq), gq && (yield)), this.colors) {
            const Yq = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            qq.setVerticesData(Oq.g.ColorKind, this.colors, Eq, Yq), this.hasVertexAlpha && void 0 !== qq.hasVertexAlpha && (qq.hasVertexAlpha = !0), gq && (yield)
          }
          if (this.matricesIndices && (qq.setVerticesData(Oq.g.MatricesIndicesKind, this.matricesIndices, Eq), gq && (yield)), this.matricesWeights && (qq.setVerticesData(Oq.g.MatricesWeightsKind, this.matricesWeights, Eq), gq && (yield)), this.matricesIndicesExtra && (qq.setVerticesData(Oq.g.MatricesIndicesExtraKind, this.matricesIndicesExtra, Eq), gq && (yield)), this.matricesWeightsExtra && (qq.setVerticesData(Oq.g.MatricesWeightsExtraKind, this.matricesWeightsExtra, Eq), gq && (yield)), this.indices ? (qq.setIndices(this.indices, null, Eq), gq && (yield)) : qq.setIndices([], null), qq.fn && this.materialInfos && this.materialInfos.length > 1) {
            const Eq = qq;
            Eq.fn = [];
            for (const qq of this.materialInfos) new Wq.c(qq.materialIndex, qq.verticesStart, qq.verticesCount, qq.indexStart, qq.indexCount, Eq)
          }
          return this
        }
        _update(qq, Eq, gq) {
          return this.positions && qq.updateVerticesData(Oq.g.PositionKind, this.positions, Eq, gq), this.normals && qq.updateVerticesData(Oq.g.NormalKind, this.normals, Eq, gq), this.tangents && qq.updateVerticesData(Oq.g.TangentKind, this.tangents, Eq, gq), this.uvs && qq.updateVerticesData(Oq.g.UVKind, this.uvs, Eq, gq), this.uvs2 && qq.updateVerticesData(Oq.g.UV2Kind, this.uvs2, Eq, gq), this.uvs3 && qq.updateVerticesData(Oq.g.UV3Kind, this.uvs3, Eq, gq), this.uvs4 && qq.updateVerticesData(Oq.g.UV4Kind, this.uvs4, Eq, gq), this.uvs5 && qq.updateVerticesData(Oq.g.UV5Kind, this.uvs5, Eq, gq), this.uvs6 && qq.updateVerticesData(Oq.g.UV6Kind, this.uvs6, Eq, gq), this.colors && qq.updateVerticesData(Oq.g.ColorKind, this.colors, Eq, gq), this.matricesIndices && qq.updateVerticesData(Oq.g.MatricesIndicesKind, this.matricesIndices, Eq, gq), this.matricesWeights && qq.updateVerticesData(Oq.g.MatricesWeightsKind, this.matricesWeights, Eq, gq), this.matricesIndicesExtra && qq.updateVerticesData(Oq.g.MatricesIndicesExtraKind, this.matricesIndicesExtra, Eq, gq), this.matricesWeightsExtra && qq.updateVerticesData(Oq.g.MatricesWeightsExtraKind, this.matricesWeightsExtra, Eq, gq), this.indices && qq.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length;
          const Oq = lq.o.Na[0],
            mq = lq.o.Na[1];
          for (let xq = gq; xq < gq + Yq; xq += 3) lq.q.FromArrayToRef(qq, xq, Oq), lq.q.TransformCoordinatesToRef(Oq, Eq, mq), qq[xq] = mq.x, qq[xq + 1] = mq.y, qq[xq + 2] = mq.z
        }
        static _TransformVector3Normals(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length;
          const Oq = lq.o.Na[0],
            mq = lq.o.Na[1];
          for (let xq = gq; xq < gq + Yq; xq += 3) lq.q.FromArrayToRef(qq, xq, Oq), lq.q.TransformNormalToRef(Oq, Eq, mq), qq[xq] = mq.x, qq[xq + 1] = mq.y, qq[xq + 2] = mq.z
        }
        static _TransformVector4Normals(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length;
          const Oq = lq.o.Vector4[0],
            mq = lq.o.Vector4[1];
          for (let xq = gq; xq < gq + Yq; xq += 4) lq.r.FromArrayToRef(qq, xq, Oq), lq.r.TransformNormalToRef(Oq, Eq, mq), qq[xq] = mq.x, qq[xq + 1] = mq.y, qq[xq + 2] = mq.z, qq[xq + 3] = mq.w
        }
        static _FlipFaces(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq.length;
          for (let Yq = Eq; Yq < Eq + gq; Yq += 3) {
            const Eq = qq[Yq + 1];
            qq[Yq + 1] = qq[Yq + 2], qq[Yq + 2] = Eq
          }
        }
        transform(Eq) {
          const gq = Eq.determinant() < 0;
          return this.positions && qq._TransformVector3Coordinates(this.positions, Eq), this.normals && qq._TransformVector3Normals(this.normals, Eq), this.tangents && qq._TransformVector4Normals(this.tangents, Eq), gq && this.indices && qq._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Eq = [];
          for (const gq of this.materialInfos) {
            const Yq = new qq;
            if (this.positions && (Yq.positions = this.positions.slice(3 * gq.verticesStart, 3 * (gq.verticesCount + gq.verticesStart))), this.normals && (Yq.normals = this.normals.slice(3 * gq.verticesStart, 3 * (gq.verticesCount + gq.verticesStart))), this.tangents && (Yq.tangents = this.tangents.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.colors && (Yq.colors = this.colors.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.uvs && (Yq.uvs = this.uvs.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.uvs2 && (Yq.uvs2 = this.uvs2.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.uvs3 && (Yq.uvs3 = this.uvs3.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.uvs4 && (Yq.uvs4 = this.uvs4.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.uvs5 && (Yq.uvs5 = this.uvs5.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.uvs6 && (Yq.uvs6 = this.uvs6.slice(2 * gq.verticesStart, 2 * (gq.verticesCount + gq.verticesStart))), this.matricesIndices && (Yq.matricesIndices = this.matricesIndices.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.matricesIndicesExtra && (Yq.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.matricesWeights && (Yq.matricesWeights = this.matricesWeights.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.matricesWeightsExtra && (Yq.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * gq.verticesStart, 4 * (gq.verticesCount + gq.verticesStart))), this.indices) {
              Yq.indices = [];
              for (let qq = gq.indexStart; qq < gq.indexStart + gq.indexCount; qq++) Yq.indices.push(this.indices[qq] - gq.verticesStart)
            }
            const lq = new Nq;
            lq.indexStart = 0, lq.indexCount = Yq.indices ? Yq.indices.length : 0, lq.materialIndex = gq.materialIndex, lq.verticesStart = 0, lq.verticesCount = (Yq.positions ? Yq.positions.length : 0) / 3, Yq.materialInfos = [lq], Eq.push(Yq)
          }
          return Eq
        }
        merge(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Oq = Array.isArray(qq) ? qq.map((qq => ({
            vertexData: qq
          }))) : [{
            vertexData: qq
          }];
          return (0, uq.o)(this._mergeCoroutine(void 0, Oq, Eq, !1, gq, Yq, lq))
        }* _mergeCoroutine(Eq, gq) {
          let Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            lq = arguments.length > 3 ? arguments[3] : void 0,
            mq = arguments.length > 4 ? arguments[4] : void 0,
            xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Aq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let cq = gq.map((qq => qq.vertexData)),
            uq = this;
          if (Aq)
            for (const qq of cq) qq && (qq._validate(), !this.normals && qq.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && qq.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && qq.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && qq.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && qq.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && qq.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && qq.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && qq.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && qq.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && qq.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && qq.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && qq.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && qq.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const qq of cq)
            if (qq)
              if (Aq) this.normals && !qq.normals && (qq.normals = new Float32Array(qq.positions.length)), this.tangents && !qq.tangents && (qq.tangents = new Float32Array(qq.positions.length / 3 * 4)), this.uvs && !qq.uvs && (qq.uvs = new Float32Array(qq.positions.length / 3 * 2)), this.uvs2 && !qq.uvs2 && (qq.uvs2 = new Float32Array(qq.positions.length / 3 * 2)), this.uvs3 && !qq.uvs3 && (qq.uvs3 = new Float32Array(qq.positions.length / 3 * 2)), this.uvs4 && !qq.uvs4 && (qq.uvs4 = new Float32Array(qq.positions.length / 3 * 2)), this.uvs5 && !qq.uvs5 && (qq.uvs5 = new Float32Array(qq.positions.length / 3 * 2)), this.uvs6 && !qq.uvs6 && (qq.uvs6 = new Float32Array(qq.positions.length / 3 * 2)), this.colors && !qq.colors && (qq.colors = new Float32Array(qq.positions.length / 3 * 4), qq.colors.fill(1)), this.matricesIndices && !qq.matricesIndices && (qq.matricesIndices = new Float32Array(qq.positions.length / 3 * 4)), this.matricesWeights && !qq.matricesWeights && (qq.matricesWeights = new Float32Array(qq.positions.length / 3 * 4)), this.matricesIndicesExtra && !qq.matricesIndicesExtra && (qq.matricesIndicesExtra = new Float32Array(qq.positions.length / 3 * 4)), this.matricesWeightsExtra && !qq.matricesWeightsExtra && (qq.matricesWeightsExtra = new Float32Array(qq.positions.length / 3 * 4));
              else if (qq._validate(), !this.normals !== !qq.normals || !this.tangents !== !qq.tangents || !this.uvs !== !qq.uvs || !this.uvs2 !== !qq.uvs2 || !this.uvs3 !== !qq.uvs3 || !this.uvs4 !== !qq.uvs4 || !this.uvs5 !== !qq.uvs5 || !this.uvs6 !== !qq.uvs6 || !this.colors !== !qq.colors || !this.matricesIndices !== !qq.matricesIndices || !this.matricesWeights !== !qq.matricesWeights || !this.matricesIndicesExtra !== !qq.matricesIndicesExtra || !this.matricesWeightsExtra !== !qq.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (xq) {
            let qq, Yq = 0,
              lq = 0;
            const Oq = [];
            let mq = null;
            const xq = [];
            for (const gq of this.splitBasedOnMaterialID()) xq.push({
              vertexData: gq,
              transform: Eq
            });
            for (const Eq of gq)
              if (Eq.vertexData)
                for (const qq of Eq.vertexData.splitBasedOnMaterialID()) xq.push({
                  vertexData: qq,
                  transform: Eq.transform
                });
            xq.sort(((qq, Eq) => {
              const gq = qq.vertexData.materialInfos ? qq.vertexData.materialInfos[0].materialIndex : 0,
                Yq = Eq.vertexData.materialInfos ? Eq.vertexData.materialInfos[0].materialIndex : 0;
              return gq > Yq ? 1 : gq === Yq ? 0 : -1
            }));
            for (const Eq of xq) {
              const gq = Eq.vertexData;
              if (qq = gq.materialInfos ? gq.materialInfos[0].materialIndex : 0, mq && mq.materialIndex === qq) mq.indexCount += gq.indices.length, mq.verticesCount += gq.positions.length / 3;
              else {
                const Eq = new Nq;
                Eq.materialIndex = qq, Eq.indexStart = Yq, Eq.indexCount = gq.indices.length, Eq.verticesStart = lq, Eq.verticesCount = gq.positions.length / 3, Oq.push(Eq), mq = Eq
              }
              Yq += gq.indices.length, lq += gq.positions.length / 3
            }
            const Aq = xq.splice(0, 1)[0];
            uq = Aq.vertexData, Eq = Aq.transform, cq = xq.map((qq => qq.vertexData)), gq = xq, this.materialInfos = Oq
          }
          const Bq = cq.reduce(((qq, Eq) => qq + (Eq.indices?.length ?? 0)), uq.indices?.length ?? 0);
          let Wq = mq || cq.some((qq => qq.indices === uq.indices)) ? uq.indices?.slice() : uq.indices;
          if (Bq > 0) {
            let Oq = Wq?.length ?? 0;
            if (Wq || (Wq = new Array(Bq)), Wq.length !== Bq) {
              if (Array.isArray(Wq)) Wq.length = Bq;
              else {
                const qq = Yq || Wq instanceof Uint32Array ? new Uint32Array(Bq) : new Uint16Array(Bq);
                qq.set(Wq), Wq = qq
              }
              Eq && Eq.determinant() < 0 && qq._FlipFaces(Wq, 0, Oq)
            }
            let mq = uq.positions ? uq.positions.length / 3 : 0;
            for (const {
                vertexData: Eq,
                transform: Yq
              }
              of gq)
              if (Eq.indices) {
                for (let qq = 0; qq < Eq.indices.length; qq++) Wq[Oq + qq] = Eq.indices[qq] + mq;
                Yq && Yq.determinant() < 0 && qq._FlipFaces(Wq, Oq, Eq.indices.length), mq += Eq.positions.length / 3, Oq += Eq.indices.length, lq && (yield)
              }
          }
          return this.indices = Wq, this.positions = qq._MergeElement(Oq.g.PositionKind, uq.positions, Eq, gq.map((qq => [qq.vertexData.positions, qq.transform]))), lq && (yield), uq.normals && (this.normals = qq._MergeElement(Oq.g.NormalKind, uq.normals, Eq, gq.map((qq => [qq.vertexData.normals, qq.transform]))), lq && (yield)), uq.tangents && (this.tangents = qq._MergeElement(Oq.g.TangentKind, uq.tangents, Eq, gq.map((qq => [qq.vertexData.tangents, qq.transform]))), lq && (yield)), uq.uvs && (this.uvs = qq._MergeElement(Oq.g.UVKind, uq.uvs, Eq, gq.map((qq => [qq.vertexData.uvs, qq.transform]))), lq && (yield)), uq.uvs2 && (this.uvs2 = qq._MergeElement(Oq.g.UV2Kind, uq.uvs2, Eq, gq.map((qq => [qq.vertexData.uvs2, qq.transform]))), lq && (yield)), uq.uvs3 && (this.uvs3 = qq._MergeElement(Oq.g.UV3Kind, uq.uvs3, Eq, gq.map((qq => [qq.vertexData.uvs3, qq.transform]))), lq && (yield)), uq.uvs4 && (this.uvs4 = qq._MergeElement(Oq.g.UV4Kind, uq.uvs4, Eq, gq.map((qq => [qq.vertexData.uvs4, qq.transform]))), lq && (yield)), uq.uvs5 && (this.uvs5 = qq._MergeElement(Oq.g.UV5Kind, uq.uvs5, Eq, gq.map((qq => [qq.vertexData.uvs5, qq.transform]))), lq && (yield)), uq.uvs6 && (this.uvs6 = qq._MergeElement(Oq.g.UV6Kind, uq.uvs6, Eq, gq.map((qq => [qq.vertexData.uvs6, qq.transform]))), lq && (yield)), uq.colors && (this.colors = qq._MergeElement(Oq.g.ColorKind, uq.colors, Eq, gq.map((qq => [qq.vertexData.colors, qq.transform]))), (void 0 !== uq.hasVertexAlpha || gq.some((qq => void 0 !== qq.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = uq.hasVertexAlpha || gq.some((qq => qq.vertexData.hasVertexAlpha))), lq && (yield)), uq.matricesIndices && (this.matricesIndices = qq._MergeElement(Oq.g.MatricesIndicesKind, uq.matricesIndices, Eq, gq.map((qq => [qq.vertexData.matricesIndices, qq.transform]))), lq && (yield)), uq.matricesWeights && (this.matricesWeights = qq._MergeElement(Oq.g.MatricesWeightsKind, uq.matricesWeights, Eq, gq.map((qq => [qq.vertexData.matricesWeights, qq.transform]))), lq && (yield)), uq.matricesIndicesExtra && (this.matricesIndicesExtra = qq._MergeElement(Oq.g.MatricesIndicesExtraKind, uq.matricesIndicesExtra, Eq, gq.map((qq => [qq.vertexData.matricesIndicesExtra, qq.transform]))), lq && (yield)), uq.matricesWeightsExtra && (this.matricesWeightsExtra = qq._MergeElement(Oq.g.MatricesWeightsExtraKind, uq.matricesWeightsExtra, Eq, gq.map((qq => [qq.vertexData.matricesWeightsExtra, qq.transform])))), this
        }
        static _MergeElement(Eq, gq, Yq, lq) {
          const mq = lq.filter((qq => null !== qq[0] && void 0 !== qq[0]));
          if (!gq && 0 == mq.length) return gq;
          if (!gq) return this._MergeElement(Eq, mq[0][0], mq[0][1], mq.slice(1));
          const xq = mq.reduce(((qq, Eq) => qq + Eq[0].length), gq.length),
            Aq = Eq === Oq.g.PositionKind ? qq._TransformVector3Coordinates : Eq === Oq.g.NormalKind ? qq._TransformVector3Normals : Eq === Oq.g.TangentKind ? qq._TransformVector4Normals : () => {};
          if (gq instanceof Float32Array) {
            const qq = new Float32Array(xq);
            qq.set(gq), Yq && Aq(qq, Yq, 0, gq.length);
            let Eq = gq.length;
            for (const [gq, Yq] of mq) qq.set(gq, Eq), Yq && Aq(qq, Yq, Eq, gq.length), Eq += gq.length;
            return qq
          } {
            const qq = new Array(xq);
            for (let Yq = 0; Yq < gq.length; Yq++) qq[Yq] = gq[Yq];
            Yq && Aq(qq, Yq, 0, gq.length);
            let Eq = gq.length;
            for (const [gq, Yq] of mq) {
              for (let Yq = 0; Yq < gq.length; Yq++) qq[Eq + Yq] = gq[Yq];
              Yq && Aq(qq, Yq, Eq, gq.length), Eq += gq.length
            }
            return qq
          }
        }
        _validate() {
          if (!this.positions) throw new Bq.h("Positions are required", Bq.f.MeshInvalidPositionsError);
          const qq = (qq, Eq) => {
              const gq = (0, Oq.e)(qq);
              if (Eq.length % gq !== 0) throw new Error("The " + qq + "s array count must be a multiple of " + gq);
              return Eq.length / gq
            },
            Eq = qq(Oq.g.PositionKind, this.positions),
            gq = (gq, Yq) => {
              const lq = qq(gq, Yq);
              if (lq !== Eq) throw new Error("The " + gq + "s element count (" + lq + ") does not match the positions count (" + Eq + ")")
            };
          this.normals && gq(Oq.g.NormalKind, this.normals), this.tangents && gq(Oq.g.TangentKind, this.tangents), this.uvs && gq(Oq.g.UVKind, this.uvs), this.uvs2 && gq(Oq.g.UV2Kind, this.uvs2), this.uvs3 && gq(Oq.g.UV3Kind, this.uvs3), this.uvs4 && gq(Oq.g.UV4Kind, this.uvs4), this.uvs5 && gq(Oq.g.UV5Kind, this.uvs5), this.uvs6 && gq(Oq.g.UV6Kind, this.uvs6), this.colors && gq(Oq.g.ColorKind, this.colors), this.matricesIndices && gq(Oq.g.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && gq(Oq.g.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && gq(Oq.g.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && gq(Oq.g.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Eq = this.serialize();
          return qq.Parse(Eq)
        }
        serialize() {
          const qq = {};
          if (this.positions && (qq.positions = Array.from(this.positions)), this.normals && (qq.normals = Array.from(this.normals)), this.tangents && (qq.tangents = Array.from(this.tangents)), this.uvs && (qq.uvs = Array.from(this.uvs)), this.uvs2 && (qq.uvs2 = Array.from(this.uvs2)), this.uvs3 && (qq.uvs3 = Array.from(this.uvs3)), this.uvs4 && (qq.uvs4 = Array.from(this.uvs4)), this.uvs5 && (qq.uvs5 = Array.from(this.uvs5)), this.uvs6 && (qq.uvs6 = Array.from(this.uvs6)), this.colors && (qq.colors = Array.from(this.colors), qq.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (qq.matricesIndices = Array.from(this.matricesIndices), qq.matricesIndicesExpanded = !0), this.matricesWeights && (qq.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (qq.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), qq.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (qq.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), qq.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            qq.materialInfos = [];
            for (const Eq of this.materialInfos) {
              const gq = {
                indexStart: Eq.indexStart,
                indexCount: Eq.indexCount,
                materialIndex: Eq.materialIndex,
                verticesStart: Eq.verticesStart,
                verticesCount: Eq.verticesCount
              };
              qq.materialInfos.push(gq)
            }
          }
          return qq
        }
        static ExtractFromMesh(Eq, gq, Yq) {
          return qq._ExtractFrom(Eq, gq, Yq)
        }
        static ExtractFromGeometry(Eq, gq, Yq) {
          return qq._ExtractFrom(Eq, gq, Yq)
        }
        static _ExtractFrom(Eq, gq, Yq) {
          const lq = new qq;
          if (Eq.isVerticesDataPresent(Oq.g.PositionKind) && (lq.positions = Eq.getVerticesData(Oq.g.PositionKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.NormalKind) && (lq.normals = Eq.getVerticesData(Oq.g.NormalKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.TangentKind) && (lq.tangents = Eq.getVerticesData(Oq.g.TangentKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UVKind) && (lq.uvs = Eq.getVerticesData(Oq.g.UVKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UV2Kind) && (lq.uvs2 = Eq.getVerticesData(Oq.g.UV2Kind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UV3Kind) && (lq.uvs3 = Eq.getVerticesData(Oq.g.UV3Kind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UV4Kind) && (lq.uvs4 = Eq.getVerticesData(Oq.g.UV4Kind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UV5Kind) && (lq.uvs5 = Eq.getVerticesData(Oq.g.UV5Kind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.UV6Kind) && (lq.uvs6 = Eq.getVerticesData(Oq.g.UV6Kind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.ColorKind)) {
            const qq = Eq.geometry || Eq,
              mq = qq.getVertexBuffer(Oq.g.ColorKind),
              xq = qq.getVerticesData(Oq.g.ColorKind, gq, Yq);
            if (3 === mq.getSize()) {
              const qq = new Float32Array(4 * xq.length / 3);
              for (let Eq = 0, gq = 0; Eq < xq.length; Eq += 3, gq += 4) qq[gq] = xq[Eq], qq[gq + 1] = xq[Eq + 1], qq[gq + 2] = xq[Eq + 2], qq[gq + 3] = 1;
              lq.colors = qq
            } else {
              if (4 !== mq.getSize()) throw new Error(`Unexpected number of color components: ${mq.getSize()}`);
              lq.colors = xq
            }
          }
          return Eq.isVerticesDataPresent(Oq.g.MatricesIndicesKind) && (lq.matricesIndices = Eq.getVerticesData(Oq.g.MatricesIndicesKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.MatricesWeightsKind) && (lq.matricesWeights = Eq.getVerticesData(Oq.g.MatricesWeightsKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.MatricesIndicesExtraKind) && (lq.matricesIndicesExtra = Eq.getVerticesData(Oq.g.MatricesIndicesExtraKind, gq, Yq)), Eq.isVerticesDataPresent(Oq.g.MatricesWeightsExtraKind) && (lq.matricesWeightsExtra = Eq.getVerticesData(Oq.g.MatricesWeightsExtraKind, gq, Yq)), lq.indices = Eq.iYq(gq, Yq), lq
        }
        static CreateRibbon(qq) {
          throw (0, mq.m)("ribbonBuilder")
        }
        static CreateBox(qq) {
          throw (0, mq.m)("boxBuilder")
        }
        static CreateTiledBox(qq) {
          throw (0, mq.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(qq) {
          throw (0, mq.m)("tiledPlaneBuilder")
        }
        static CreateSphere(qq) {
          throw (0, mq.m)("sphereBuilder")
        }
        static CreateCylinder(qq) {
          throw (0, mq.m)("cylinderBuilder")
        }
        static CreateTorus(qq) {
          throw (0, mq.m)("torusBuilder")
        }
        static CreateLineSystem(qq) {
          throw (0, mq.m)("linesBuilder")
        }
        static CreateDashedLines(qq) {
          throw (0, mq.m)("linesBuilder")
        }
        static CreateGround(qq) {
          throw (0, mq.m)("groundBuilder")
        }
        static CreateTiledGround(qq) {
          throw (0, mq.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(qq) {
          throw (0, mq.m)("groundBuilder")
        }
        static CreatePlane(qq) {
          throw (0, mq.m)("planeBuilder")
        }
        static CreateDisc(qq) {
          throw (0, mq.m)("discBuilder")
        }
        static CreatePolygon(qq, Eq, gq, Yq, lq, Oq, xq) {
          throw (0, mq.m)("polygonBuilder")
        }
        static CreateIcoSphere(qq) {
          throw (0, mq.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(qq) {
          throw (0, mq.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || lq.q.Up();
          throw (0, mq.m)("capsuleBuilder")
        }
        static CreateTorusKnot(qq) {
          throw (0, mq.m)("torusKnotBuilder")
        }
        static ComputeNormals(qq, Eq, gq, Yq) {
          let Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq = !1,
            hq = !1,
            nq = !1,
            bq = !1,
            iq = 1,
            Zq = 0,
            fq = null;
          Yq && (vq = !!Yq.facetNormals, hq = !!Yq.facetPositions, nq = !!Yq.facetPartitioning, iq = !0 === Yq.useRightHandedSystem ? -1 : 1, Zq = Yq.ratio || 0, bq = !!Yq.depthSort, fq = Yq.distanceTo, bq && void 0 === fq && (fq = lq.q.Zero()));
          let Mq = 0,
            Tq = 0,
            zq = 0,
            Sq = 0;
          for (nq && Yq && Yq.bbSize && (Mq = Yq.subDiv.X * Zq / Yq.bbSize.x, Tq = Yq.subDiv.Y * Zq / Yq.bbSize.y, zq = Yq.subDiv.Z * Zq / Yq.bbSize.z, Sq = Yq.subDiv.max * Yq.subDiv.max, Yq.facetPartitioning.length = 0), Oq = 0; Oq < qq.length; Oq++) gq[Oq] = 0;
          const pq = Eq.length / 3 | 0;
          for (Oq = 0; Oq < pq; Oq++) {
            if (dq = 3 * Eq[3 * Oq], jq = dq + 1, Hq = dq + 2, oq = 3 * Eq[3 * Oq + 1], Pq = oq + 1, Qq = oq + 2, yq = 3 * Eq[3 * Oq + 2], tq = yq + 1, rq = yq + 2, mq = qq[dq] - qq[oq], xq = qq[jq] - qq[Pq], Aq = qq[Hq] - qq[Qq], cq = qq[yq] - qq[oq], uq = qq[tq] - qq[Pq], Bq = qq[rq] - qq[Qq], Wq = iq * (xq * Bq - Aq * uq), Nq = iq * (Aq * cq - mq * Bq), aq = iq * (mq * uq - xq * cq), Vq = Math.sqrt(Wq * Wq + Nq * Nq + aq * aq), Vq = 0 === Vq ? 1 : Vq, Wq /= Vq, Nq /= Vq, aq /= Vq, vq && Yq && (Yq.facetNormals[Oq].x = Wq, Yq.facetNormals[Oq].y = Nq, Yq.facetNormals[Oq].z = aq), hq && Yq && (Yq.facetPositions[Oq].x = (qq[dq] + qq[oq] + qq[yq]) / 3, Yq.facetPositions[Oq].y = (qq[jq] + qq[Pq] + qq[tq]) / 3, Yq.facetPositions[Oq].z = (qq[Hq] + qq[Qq] + qq[rq]) / 3), nq && Yq) {
              const Eq = Math.floor((Yq.facetPositions[Oq].x - Yq.bInfo.minimum.x * Zq) * Mq),
                gq = Math.floor((Yq.facetPositions[Oq].y - Yq.bInfo.minimum.y * Zq) * Tq),
                lq = Math.floor((Yq.facetPositions[Oq].z - Yq.bInfo.minimum.z * Zq) * zq),
                mq = Math.floor((qq[dq] - Yq.bInfo.minimum.x * Zq) * Mq),
                xq = Math.floor((qq[jq] - Yq.bInfo.minimum.y * Zq) * Tq),
                Aq = Math.floor((qq[Hq] - Yq.bInfo.minimum.z * Zq) * zq),
                cq = Math.floor((qq[oq] - Yq.bInfo.minimum.x * Zq) * Mq),
                uq = Math.floor((qq[Pq] - Yq.bInfo.minimum.y * Zq) * Tq),
                Bq = Math.floor((qq[Qq] - Yq.bInfo.minimum.z * Zq) * zq),
                Wq = Math.floor((qq[yq] - Yq.bInfo.minimum.x * Zq) * Mq),
                Nq = Math.floor((qq[tq] - Yq.bInfo.minimum.y * Zq) * Tq),
                aq = Math.floor((qq[rq] - Yq.bInfo.minimum.z * Zq) * zq),
                Vq = mq + Yq.subDiv.max * xq + Sq * Aq,
                vq = cq + Yq.subDiv.max * uq + Sq * Bq,
                hq = Wq + Yq.subDiv.max * Nq + Sq * aq,
                nq = Eq + Yq.subDiv.max * gq + Sq * lq;
              Yq.facetPartitioning[nq] = Yq.facetPartitioning[nq] ? Yq.facetPartitioning[nq] : [], Yq.facetPartitioning[Vq] = Yq.facetPartitioning[Vq] ? Yq.facetPartitioning[Vq] : [], Yq.facetPartitioning[vq] = Yq.facetPartitioning[vq] ? Yq.facetPartitioning[vq] : [], Yq.facetPartitioning[hq] = Yq.facetPartitioning[hq] ? Yq.facetPartitioning[hq] : [], Yq.facetPartitioning[Vq].push(Oq), vq != Vq && Yq.facetPartitioning[vq].push(Oq), hq != vq && hq != Vq && Yq.facetPartitioning[hq].push(Oq), nq != Vq && nq != vq && nq != hq && Yq.facetPartitioning[nq].push(Oq)
            }
            if (bq && Yq && Yq.facetPositions) {
              const qq = Yq.depthSortedFacets[Oq];
              qq.ind = 3 * Oq, qq.sqDistance = lq.q.DistanceSquared(Yq.facetPositions[Oq], fq)
            }
            gq[dq] += Wq, gq[jq] += Nq, gq[Hq] += aq, gq[oq] += Wq, gq[Pq] += Nq, gq[Qq] += aq, gq[yq] += Wq, gq[tq] += Nq, gq[rq] += aq
          }
          for (Oq = 0; Oq < gq.length / 3; Oq++) Wq = gq[3 * Oq], Nq = gq[3 * Oq + 1], aq = gq[3 * Oq + 2], Vq = Math.sqrt(Wq * Wq + Nq * Nq + aq * aq), Vq = 0 === Vq ? 1 : Vq, Wq /= Vq, Nq /= Vq, aq /= Vq, gq[3 * Oq] = Wq, gq[3 * Oq + 1] = Nq, gq[3 * Oq + 2] = aq
        }
        static _ComputeSides(Eq, gq, Yq, Oq, mq, xq, Aq) {
          const cq = Yq.length,
            uq = Oq.length;
          let Bq, Wq;
          switch (Eq = Eq || qq.DEFAULTSIDE) {
            case qq.FRONTSIDE:
              break;
            case qq.BACKSIDE:
              for (Bq = 0; Bq < cq; Bq += 3) {
                const qq = Yq[Bq];
                Yq[Bq] = Yq[Bq + 2], Yq[Bq + 2] = qq
              }
              for (Wq = 0; Wq < uq; Wq++) Oq[Wq] = -Oq[Wq];
              break;
            case qq.DOUBLESIDE: {
              const qq = gq.length,
                Eq = qq / 3;
              for (let Yq = 0; Yq < qq; Yq++) gq[qq + Yq] = gq[Yq];
              for (Bq = 0; Bq < cq; Bq += 3) Yq[Bq + cq] = Yq[Bq + 2] + Eq, Yq[Bq + 1 + cq] = Yq[Bq + 1] + Eq, Yq[Bq + 2 + cq] = Yq[Bq] + Eq;
              for (Wq = 0; Wq < uq; Wq++) Oq[uq + Wq] = -Oq[Wq];
              const Nq = mq.length;
              let aq;
              for (aq = 0; aq < Nq; aq++) mq[aq + Nq] = mq[aq];
              for (xq = xq || new lq.r(0, 0, 1, 1), Aq = Aq || new lq.r(0, 0, 1, 1), aq = 0, Bq = 0; Bq < Nq / 2; Bq++) mq[aq] = xq.x + (xq.z - xq.x) * mq[aq], mq[aq + 1] = xq.y + (xq.w - xq.y) * mq[aq + 1], mq[aq + Nq] = Aq.x + (Aq.z - Aq.x) * mq[aq + Nq], mq[aq + Nq + 1] = Aq.y + (Aq.w - Aq.y) * mq[aq + Nq + 1], aq += 2;
              break
            }
          }
        }
        static Parse(Eq) {
          const gq = new qq,
            Yq = Eq.positions;
          Yq && gq.set(Yq, Oq.g.PositionKind);
          const lq = Eq.normals;
          lq && gq.set(lq, Oq.g.NormalKind);
          const mq = Eq.tangents;
          mq && gq.set(mq, Oq.g.TangentKind);
          const Aq = Eq.uvs;
          Aq && gq.set(Aq, Oq.g.UVKind);
          const cq = Eq.uvs2;
          cq && gq.set(cq, Oq.g.UV2Kind);
          const uq = Eq.uvs3;
          uq && gq.set(uq, Oq.g.UV3Kind);
          const Bq = Eq.uvs4;
          Bq && gq.set(Bq, Oq.g.UV4Kind);
          const Wq = Eq.uvs5;
          Wq && gq.set(Wq, Oq.g.UV5Kind);
          const aq = Eq.uvs6;
          aq && gq.set(aq, Oq.g.UV6Kind);
          const Vq = Eq.colors;
          Vq && (gq.set(xq.g.CheckColors4(Vq, Yq.length / 3), Oq.g.ColorKind), void 0 !== Eq.hasVertexAlpha && (gq.hasVertexAlpha = Eq.hasVertexAlpha));
          const dq = Eq.matricesIndices;
          dq && gq.set(dq, Oq.g.MatricesIndicesKind);
          const jq = Eq.matricesWeights;
          jq && gq.set(jq, Oq.g.MatricesWeightsKind);
          const Hq = Eq.indices;
          Hq && (gq.indices = Hq);
          const oq = Eq.materialInfos;
          if (oq) {
            gq.materialInfos = [];
            for (const qq of oq) {
              const Eq = new Nq;
              Eq.indexCount = qq.indexCount, Eq.indexStart = qq.indexStart, Eq.verticesCount = qq.verticesCount, Eq.verticesStart = qq.verticesStart, Eq.materialIndex = qq.materialIndex, gq.materialInfos.push(Eq)
            }
          }
          return gq
        }
        static ImportVertexData(Eq, gq) {
          const Yq = qq.Parse(Eq);
          gq.setAllVerticesData(Yq, Eq.updatable)
        }
      }, (() => {
        const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [cq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gq = [cq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], aq = [cq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Vq = [cq.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Yq.f)(qq, null, Eq, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: qq => "_TransformVector3Coordinates" in qq,
            get: qq => qq._TransformVector3Coordinates
          },
          metadata: lq
        }, null, dq), (0, Yq.f)(qq, null, gq, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: qq => "_TransformVector3Normals" in qq,
            get: qq => qq._TransformVector3Normals
          },
          metadata: lq
        }, null, dq), (0, Yq.f)(qq, null, aq, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: qq => "_TransformVector4Normals" in qq,
            get: qq => qq._TransformVector4Normals
          },
          metadata: lq
        }, null, dq), (0, Yq.f)(qq, null, Vq, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: qq => "_FlipFaces" in qq,
            get: qq => qq._FlipFaces
          },
          metadata: lq
        }, null, dq), lq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lq
        })
      })(), qq.FRONTSIDE = ((0, Yq.i)(qq, dq), 0), qq.BACKSIDE = 1, qq.DOUBLESIDE = 2, qq.DEFAULTSIDE = 0, qq._UniqueIdGenerator = 0, qq
    })()
  },
  40236: (qq, Eq, gq) => {
    var Yq = gq(37139),
      lq = gq(38653),
      Oq = gq(40055),
      mq = gq(40163),
      xq = gq(39879);
    const Aq = "bakedVertexAnimationSettingsInstanced";

    function cq(qq) {
      const Eq = qq.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Eq instanceof Float32Array || Eq instanceof Uint16Array
    }

    function uq(qq, Eq, gq, Yq) {
      gq.A4(Number.POSITIVE_INFINITY), Yq.A4(Number.NEGATIVE_INFINITY);
      for (let lq = 0; lq < 3 * Eq; lq += 3) {
        const Eq = qq[lq],
          Oq = qq[lq + 1],
          mq = qq[lq + 2];
        Eq < gq.x && (gq.x = Eq), Oq < gq.y && (gq.y = Oq), mq < gq.z && (gq.z = mq), Eq > Yq.x && (Yq.x = Eq), Oq > Yq.y && (Yq.y = Oq), mq > Yq.z && (Yq.z = mq)
      }
    }

    function Bq(qq, Eq, gq) {
      gq && (qq.x -= qq.x * gq.x + gq.y, qq.y -= qq.y * gq.x + gq.y, qq.z -= qq.z * gq.x + gq.y, Eq.x += Eq.x * gq.x + gq.y, Eq.y += Eq.y * gq.x + gq.y, Eq.z += Eq.z * gq.x + gq.y)
    }

    function Wq(qq, Eq, gq, lq, Oq) {
      const mq = Yq.o.Na[7],
        xq = Yq.o.Na[8];
      for (let Aq = 0; Aq < 2; ++Aq)
        for (let cq = 0; cq < 2; ++cq)
          for (let uq = 0; uq < 2; ++uq) mq.set(Aq ? Eq.x : qq.x, cq ? Eq.y : qq.y, uq ? Eq.z : qq.z), Yq.q.TransformCoordinatesToRef(mq, gq, xq), lq.minimizeInPlace(xq), Oq.maximizeInPlace(xq)
    }

    function Nq(qq, Eq, gq, lq, Oq) {
      const mq = Yq.o.Na[7];
      for (let xq = 0; xq < 3 * Eq; xq += 3) Yq.q.TransformCoordinatesFromFloatsToRef(qq[xq], qq[xq + 1], qq[xq + 2], gq, mq), lq.minimizeInPlace(mq), Oq.maximizeInPlace(mq)
    }
    let aq = !1;
    aq || (aq = !0, mq.e.prototype.thinInstanceAdd = function(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.ZJ().Ba().getCaps().instancedArrays) return lq.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(qq) ? qq.length : 1);
      const gq = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(qq))
        for (let Yq = 0; Yq < qq.length; ++Yq) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, qq[Yq], Yq === qq.length - 1 && Eq);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, qq, Eq);
      return gq
    }, mq.e.prototype.thinInstanceAddSelf = function() {
      let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Yq.e.IdentityReadOnly, qq)
    }, mq.e.prototype.thinInstanceRegisterAttribute = function(qq, Eq) {
      qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), this.removeVerticesData(qq), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[qq] = Eq, this._userThinInstanceBuffersStorage.sizes[qq] = Eq * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[qq] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[qq]), this._userThinInstanceBuffersStorage.vertexBuffers[qq] = new xq.g(this.Ba(), this._userThinInstanceBuffersStorage.data[qq], qq, !0, !1, Eq, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[qq])
    }, mq.e.prototype.thinInstanceSetMatrixAt = function(qq, Eq) {
      let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || qq >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Yq = this._thinInstanceDataStorage.matrixData;
      return Eq.copyToArray(Yq, 16 * qq), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[qq] = Eq), gq && (this.lqq("matrix"), this.Va || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, mq.e.prototype.thinInstanceSetAttributeAt = function(qq, Eq, gq) {
      let Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[qq] || Eq >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(qq, 0), this._userThinInstanceBuffersStorage.data[qq].set(gq, Eq * this._userThinInstanceBuffersStorage.strides[qq]), Yq && this.lqq(qq), !0)
    }, Object.defineProperty(mq.e.prototype, "o5", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(qq) {
        const Eq = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        qq <= (Eq ? Eq.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = qq)
      },
      enumerable: !0,
      configurable: !0
    }), mq.e.prototype._thinInstanceCreateMatrixBuffer = function(qq, Eq) {
      let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Yq = new xq.b(this.Ba(), Eq, !gq, 16, !1, !0);
      for (let lq = 0; lq < 4; lq++) this.setVerticesBuffer(Yq.createVertexBuffer(qq + lq, 4 * lq, 4));
      return Yq
    }, mq.e.prototype.cqq = function(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (gq = gq || 16, "matrix" === qq) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Eq ? Eq.length : 32 * gq, this._thinInstanceDataStorage.matrixData = Eq, this._thinInstanceDataStorage.worldMatrices = null, null !== Eq ? (this._thinInstanceDataStorage.instancesCount = Eq.length / gq, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Eq, Yq), this.Va || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Va || this.refreshBoundingInfo());
      else if ("previousMatrix" === qq) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Eq, null !== Eq && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Eq, Yq));
      else if ("splatIndex" === qq && Eq) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Eq.length / gq, this._userThinInstanceBuffersStorage.data[qq] = Eq, this._userThinInstanceBuffersStorage.strides[qq] = gq, this._userThinInstanceBuffersStorage.sizes[qq] = Eq.length;
        const Yq = new xq.b(this.Ba(), Eq, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Yq;
        for (let Eq = 0; Eq < 4; Eq++) this.setVerticesBuffer(Yq.createVertexBuffer(qq + Eq, 4 * Eq, 4))
      } else qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), null === Eq ? this._userThinInstanceBuffersStorage?.data[qq] && (this.removeVerticesData(qq), delete this._userThinInstanceBuffersStorage.data[qq], delete this._userThinInstanceBuffersStorage.strides[qq], delete this._userThinInstanceBuffersStorage.sizes[qq], delete this._userThinInstanceBuffersStorage.vertexBuffers[qq]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[qq] = Eq, this._userThinInstanceBuffersStorage.strides[qq] = gq, this._userThinInstanceBuffersStorage.sizes[qq] = Eq.length, this._userThinInstanceBuffersStorage.vertexBuffers[qq] = new xq.g(this.Ba(), Eq, qq, !Yq, !1, gq, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[qq]))
    }, mq.e.prototype.lqq = function(qq) {
      "matrix" === qq ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(qq), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === qq ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(qq), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === qq ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[qq], 0, this._thinInstanceDataStorage.instancesCount) : (qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[qq] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[qq].isUpdatable() && this._thinInstanceRecreateBuffer(qq), this._userThinInstanceBuffersStorage.vertexBuffers[qq].updateDirectly(this._userThinInstanceBuffersStorage.data[qq], 0)))
    }, mq.e.prototype.thinInstancePartialBufferUpdate = function(qq, Eq, gq) {
      if ("matrix" === qq) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Eq ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * gq * Float32Array.BYTES_PER_ELEMENT, 16 * Eq), 16 * gq) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Eq, gq));
      else if (qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[qq]) {
        const Yq = this._userThinInstanceBuffersStorage.vertexBuffers[qq];
        if ("number" === typeof Eq) {
          const Yq = new Float32Array(this._userThinInstanceBuffersStorage.data[qq].buffer, this._userThinInstanceBuffersStorage.data[qq].byteOffset + gq * this._userThinInstanceBuffersStorage.strides[qq] * Float32Array.BYTES_PER_ELEMENT, Eq * this._userThinInstanceBuffersStorage.strides[qq]);
          this._userThinInstanceBuffersStorage.vertexBuffers[qq].updateDirectly(Yq, gq * this._userThinInstanceBuffersStorage.strides[qq])
        } else Yq.updateDirectly(Eq, gq)
      }
    }, mq.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const qq = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Eq = 0; Eq < this._thinInstanceDataStorage.instancesCount; ++Eq) this._thinInstanceDataStorage.worldMatrices[Eq] = Yq.e.FromArray(qq, 16 * Eq)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, mq.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const mq = this._thinInstanceDataStorage.boundingVectors;
      if (qq || !this.rawBoundingInfo) {
        if (mq.length = 0, lq && function(qq, Eq, gq) {
            const lq = qq._userThinInstanceBuffersStorage,
              mq = lq?.data[Aq],
              aq = lq?.strides[Aq];
            if (!mq || !aq || aq < 4 || !cq(qq)) return !1;
            const Vq = qq._thinInstanceDataStorage.matrixData;
            if (!Vq) return !1;
            const dq = {},
              jq = Yq.o.Vector4[0],
              Hq = Yq.o.Na[1],
              oq = Yq.o.Na[2],
              Pq = Yq.o.Na[3],
              Qq = Yq.o.Na[4],
              yq = Yq.o.Na[5],
              tq = Yq.o.Na[6],
              rq = Yq.o.Matrix[2],
              vq = qq.geometry ? qq.geometry.boundingBias : null,
              hq = qq.getTotalVertices();
            Hq.A4(Number.POSITIVE_INFINITY), oq.A4(Number.NEGATIVE_INFINITY), Pq.A4(Number.POSITIVE_INFINITY), Qq.A4(Number.NEGATIVE_INFINITY);
            for (let Oq = 0; Oq < qq._thinInstanceDataStorage.instancesCount; ++Oq) {
              const Eq = Oq * aq;
              jq.set(mq[Eq], mq[Eq + 1], mq[Eq + 2], mq[Eq + 3]);
              const lq = qq._getData({
                applyMorph: gq,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: jq,
                updatePositionsArray: !1,
                cache: dq
              }, null, xq.g.PositionKind);
              if (!lq) return !1;
              uq(lq, hq, yq, tq), Bq(yq, tq, vq), Hq.minimizeInPlace(yq), oq.maximizeInPlace(tq), Yq.e.FromArrayToRef(Vq, 16 * Oq, rq), vq ? Wq(yq, tq, rq, Pq, Qq) : Nq(lq, hq, rq, Pq, Qq)
            }
            return !(!isFinite(Hq.x) || !isFinite(Pq.x)) && (qq.yR().reConstruct(Pq, Qq), qq.rawBoundingInfo = new Oq.d(Hq, oq), function(qq, Eq) {
              qq.length = 0;
              for (let gq = 0; gq < Eq.boundingBox.vectors.length; ++gq) qq.push(Eq.boundingBox.vectors[gq].clone())
            }(Eq, qq.rawBoundingInfo), qq._updateBoundingInfo(), !0)
          }(this, mq, gq)) return;
        lq && this.bakedVertexAnimationManager?.isEnabled && cq(this) ? this.refreshBoundingInfo({
          applySkeleton: Eq,
          applyMorph: gq,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Eq, gq);
        const qq = this.yR();
        this.rawBoundingInfo = new Oq.d(qq.minimum, qq.maximum)
      }
      const aq = this.yR(),
        Vq = this._thinInstanceDataStorage.matrixData;
      if (0 === mq.length)
        for (let Yq = 0; Yq < aq.boundingBox.vectors.length; ++Yq) mq.push(aq.boundingBox.vectors[Yq].clone());
      Yq.o.Na[0].A4(Number.POSITIVE_INFINITY), Yq.o.Na[1].A4(Number.NEGATIVE_INFINITY);
      for (let Oq = 0; Oq < this._thinInstanceDataStorage.instancesCount; ++Oq) {
        Yq.e.FromArrayToRef(Vq, 16 * Oq, Yq.o.Matrix[0]);
        for (let qq = 0; qq < mq.length; ++qq) Yq.q.TransformCoordinatesToRef(mq[qq], Yq.o.Matrix[0], Yq.o.Na[2]), Yq.o.Na[0].minimizeInPlace(Yq.o.Na[2]), Yq.o.Na[1].maximizeInPlace(Yq.o.Na[2])
      }
      aq.reConstruct(Yq.o.Na[0], Yq.o.Na[1]), this._updateBoundingInfo()
    }, mq.e.prototype._thinInstanceRecreateBuffer = function(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === qq ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Eq)) : "previousMatrix" === qq ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Eq)) : (qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[qq]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[qq] = new xq.g(this.Ba(), this._userThinInstanceBuffersStorage.data[qq], qq, !Eq, !1, this._userThinInstanceBuffersStorage.strides[qq], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[qq]))
    }, mq.e.prototype._thinInstanceUpdateBufferSize = function(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      qq === xq.g.ColorKind && (qq = xq.g.ColorInstanceKind);
      const gq = "matrix" === qq;
      if (!gq && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[qq])) return;
      const Yq = gq ? 16 : this._userThinInstanceBuffersStorage.strides[qq],
        lq = gq ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[qq];
      let Oq = gq ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[qq];
      const mq = (this._thinInstanceDataStorage.instancesCount + Eq) * Yq;
      let Aq = lq;
      for (; Aq < mq;) Aq *= 2;
      if (!Oq || lq != Aq) {
        if (Oq) {
          const qq = new Float32Array(Aq);
          qq.set(Oq, 0), Oq = qq
        } else Oq = new Float32Array(Aq);
        gq ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Oq, !1), this._thinInstanceDataStorage.matrixData = Oq, this._thinInstanceDataStorage.matrixBufferSize = Aq, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Oq, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[qq]?.dispose(), this._userThinInstanceBuffersStorage.data[qq] = Oq, this._userThinInstanceBuffersStorage.sizes[qq] = Aq, this._userThinInstanceBuffersStorage.vertexBuffers[qq] = new xq.g(this.Ba(), Oq, qq, !0, !1, Yq, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[qq]))
      }
    }, mq.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, mq.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40199: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Hq,
      g: () => Vq
    });
    var Yq, lq, Oq, mq, xq = gq(39757),
      Aq = gq(39759),
      cq = gq(39779),
      uq = gq(37156),
      Bq = gq(37139),
      Wq = gq(39960),
      Nq = gq(37171),
      aq = gq(39636);
    let Vq = (() => {
      var qq;
      let Eq, gq, Yq, lq, Oq, mq, Nq, aq, Vq, dq = Wq.c,
        jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        vq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [];
      return qq = class extends dq {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Eq) {
          this._billboardMode !== Eq && (this._billboardMode = Eq, this._cache.useBillboardPosition = 0 !== (this._billboardMode & qq.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(qq) {
          this._infiniteDistance !== qq && (this._infiniteDistance = qq)
        }
        constructor(Eq) {
          let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Eq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Bq.q(0, 0, 1), this._up = new Bq.q(0, 1, 0), this._right = new Bq.q(1, 0, 0), this._position = (0, xq.i)(this, jq, Bq.q.Zero()), this._rotation = ((0, xq.i)(this, Hq), (0, xq.i)(this, oq, Bq.q.Zero())), this._rotationQuaternion = ((0, xq.i)(this, Pq), (0, xq.i)(this, Qq, null)), this._scaling = ((0, xq.i)(this, yq), (0, xq.i)(this, tq, Bq.q.One())), this._transformToBoneReferal = ((0, xq.i)(this, rq), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, xq.i)(this, vq, qq.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, xq.i)(this, hq), (0, xq.i)(this, nq, 1)), this._infiniteDistance = ((0, xq.i)(this, bq), (0, xq.i)(this, iq, !1)), this.ignoreNonUniformScaling = ((0, xq.i)(this, Zq), (0, xq.i)(this, fq, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, xq.i)(this, Mq), (0, xq.i)(this, Tq, !1)), this._poseMatrix = ((0, xq.i)(this, zq), null), this._localMatrix = Bq.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Bq.q.Zero(), this._absoluteScaling = Bq.q.Zero(), this._absoluteRotationQuaternion = Bq.h.Identity(), this._pivotMatrix = Bq.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new uq.d, this._nonUniformScaling = !1, gq && this.ZJ().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(qq) {
          this._position = qq, this._markAsDirtyInternal()
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
        set rotation(qq) {
          this._rotation = qq, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get rc() {
          return this._scaling
        }
        set rc(qq) {
          this._scaling = qq, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(qq) {
          this._rotationQuaternion = qq, qq && this._rotation.A4(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Bq.q.TransformNormalFromFloatsToRef(0, 0, this.ZJ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Bq.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Bq.q.TransformNormalFromFloatsToRef(this.ZJ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(qq) {
          return this._poseMatrix ? (this._poseMatrix.WG(qq), this) : (this._poseMatrix = qq.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Bq.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Eq = this._cache;
          return this._billboardMode === Eq.billboardMode && this._billboardMode === qq.BILLBOARDMODE_NONE && (!Eq.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const qq = this._cache;
          qq.localMatrixUpdated = !1, qq.billboardMode = -1, qq.infiniteDistance = !1, qq.useBillboardPosition = !1
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
        setPreTransformMatrix(qq) {
          return this.setPivotMatrix(qq, !1)
        }
        setPivotMatrix(qq) {
          let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.WG(qq), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Eq, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Bq.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Eq = arguments.length > 1 ? arguments[1] : void 0,
            gq = arguments.length > 2 ? arguments[2] : void 0;
          const Yq = this.clone("Clone of " + (this.name || this.id), qq || this.parent, !0);
          Yq && gq && gq(this, Yq);
          for (const lq of this.getChildTransformNodes(!0)) lq.instantiateHierarchy(Yq, Eq, gq);
          return Yq
        }
        eJ() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return qq ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.A4(0), this._rotationQuaternion = this._rotationQuaternion || Bq.h.Identity(), qq.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = qq, this._absolutePosition.Vqq(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Dmq() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(qq) {
          if (!qq) return this;
          let Eq, gq, Yq;
          if (void 0 === qq.x) {
            if (arguments.length < 3) return this;
            Eq = arguments[0], gq = arguments[1], Yq = arguments[2]
          } else Eq = qq.x, gq = qq.y, Yq = qq.z;
          if (this.parent) {
            const qq = Bq.o.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(qq), Bq.q.TransformCoordinatesFromFloatsToRef(Eq, gq, Yq, qq, this.position)
          } else this.position.x = Eq, this.position.y = gq, this.position.z = Yq;
          return this._absolutePosition.WG(qq), this
        }
        setPositionWithLocalVector(qq) {
          return this.computeWorldMatrix(), this.position = Bq.q.TransformNormal(qq, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const qq = Bq.o.Matrix[0];
          return this._localMatrix.invertToRef(qq), Bq.q.TransformNormal(this.position, qq)
        }
        locallyTranslate(qq) {
          return this.computeWorldMatrix(!0), this.position = Bq.q.TransformCoordinates(qq, this._localMatrix), this
        }
        lookAt(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const mq = qq._LookAtVectorCache,
            xq = 0 === Oq ? this.position : this.getAbsolutePosition();
          if (Eq.subtractToRef(xq, mq), this.setDirection(mq, gq, Yq, lq), 1 === Oq && this.parent)
            if (this.rotationQuaternion) {
              const qq = Bq.o.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(qq);
              const Eq = Bq.o.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Eq), Eq.invert(), qq.multiplyToRef(Eq, qq), this.rotationQuaternion.fromRotationMatrix(qq)
            } else {
              const qq = Bq.o.Quaternion[0];
              Bq.h.FromEulerVectorToRef(this.rotation, qq);
              const Eq = Bq.o.Matrix[0];
              qq.toRotationMatrix(Eq);
              const gq = Bq.o.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(gq), gq.invert(), Eq.multiplyToRef(gq, Eq), qq.fromRotationMatrix(Eq), qq.toEulerAnglesToRef(this.rotation)
            } return this
        }
        RD(qq) {
          const Eq = Bq.q.Zero();
          return this.getDirectionToRef(qq, Eq), Eq
        }
        getDirectionToRef(qq, Eq) {
          return Bq.q.TransformNormalToRef(qq, this.getWorldMatrix(), Eq), this
        }
        setDirection(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const lq = -Math.atan2(qq.z, qq.x) + Math.PI / 2,
            Oq = Math.sqrt(qq.x * qq.x + qq.z * qq.z),
            mq = -Math.atan2(qq.y, Oq);
          return this.rotationQuaternion ? Bq.h.RotationYawPitchRollToRef(lq + Eq, mq + gq, Yq, this.rotationQuaternion) : (this.rotation.x = mq + gq, this.rotation.y = lq + Eq, this.rotation.z = Yq), this
        }
        setPivotPoint(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.ZJ().getRenderId() && this.computeWorldMatrix(!0);
          const gq = this.getWorldMatrix();
          if (1 == Eq) {
            const Eq = Bq.o.Matrix[0];
            gq.invertToRef(Eq), qq = Bq.q.TransformCoordinates(qq, Eq)
          }
          return this.setPivotMatrix(Bq.e.Translation(-qq.x, -qq.y, -qq.z), !0)
        }
        getPivotPoint() {
          const qq = Bq.q.Zero();
          return this.getPivotPointToRef(qq), qq
        }
        getPivotPointToRef(qq) {
          return qq.x = -this._pivotMatrix.m[12], qq.y = -this._pivotMatrix.m[13], qq.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const qq = Bq.q.Zero();
          return this.getAbsolutePivotPointToRef(qq), qq
        }
        getAbsolutePivotPointToRef(qq) {
          return this.getPivotPointToRef(qq), Bq.q.TransformCoordinatesToRef(qq, this.getWorldMatrix(), qq), this
        }
        xgq(qq) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Eq of this._children) Eq.xgq(qq);
          return super.xgq(qq)
        }
        setParent(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Eq && !this.parent) return this;
          const lq = Bq.o.Quaternion[0],
            Oq = Bq.o.Na[0],
            mq = Bq.o.Na[1],
            xq = Bq.o.Matrix[1];
          Bq.e.IdentityToRef(xq);
          const Aq = Bq.o.Matrix[0];
          this.computeWorldMatrix(!0);
          let cq = this.rotationQuaternion;
          return cq || (cq = qq._TmpRotation, Bq.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, cq)), Bq.e.ComposeToRef(this.rc, cq, this.position, Aq), this.parent && Aq.multiplyToRef(this.parent.computeWorldMatrix(!0), Aq), Eq && (Eq.computeWorldMatrix(!0).invertToRef(xq), Aq.multiplyToRef(xq, Aq)), Aq.decompose(mq, lq, Oq, gq ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.WG(lq) : lq.toEulerAnglesToRef(this.rotation), this.rc.WG(mq), this.position.WG(Oq), this.parent = Eq, Yq && this.setPivotMatrix(Bq.e.Identity()), this
        }
        addChild(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return qq.setParent(this, Eq), this
        }
        removeChild(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return qq.parent !== this || qq.setParent(null, Eq), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(qq) {
          return this._nonUniformScaling !== qq && (this._nonUniformScaling = qq, !0)
        }
        attachToBone(qq, Eq) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Eq, this.parent = qq, qq.getSkeleton().prepare(!0), qq.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = qq ? this._currentParentWhenAttachingToBone : null, this) : (qq && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Eq, gq, Yq) {
          let lq;
          if (Eq.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.A4(0)), Yq && 0 !== Yq) {
            if (this.parent) {
              const qq = this.parent.getWorldMatrix(),
                Yq = Bq.o.Matrix[0];
              qq.invertToRef(Yq), Eq = Bq.q.TransformNormal(Eq, Yq), qq.determinant() < 0 && (gq *= -1)
            }
            lq = Bq.h.RotationAxisToRef(Eq, gq, qq._RotationAxisCache), lq.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else lq = Bq.h.RotationAxisToRef(Eq, gq, qq._RotationAxisCache), this.rotationQuaternion.multiplyToRef(lq, this.rotationQuaternion);
          return this
        }
        rotateAround(qq, Eq, gq) {
          Eq.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Bq.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.A4(0));
          const Yq = Bq.o.Na[0],
            lq = Bq.o.Na[1],
            Oq = Bq.o.Na[2],
            mq = Bq.o.Quaternion[0],
            xq = Bq.o.Matrix[0],
            Aq = Bq.o.Matrix[1],
            cq = Bq.o.Matrix[2],
            uq = Bq.o.Matrix[3];
          return qq.subtractToRef(this.position, Yq), Bq.e.TranslationToRef(Yq.x, Yq.y, Yq.z, xq), Bq.e.TranslationToRef(-Yq.x, -Yq.y, -Yq.z, Aq), Bq.e.RotationAxisToRef(Eq, gq, cq), Aq.multiplyToRef(cq, uq), uq.multiplyToRef(xq, uq), uq.decompose(lq, mq, Oq), this.position.addInPlace(Oq), mq.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(qq, Eq, gq) {
          const Yq = qq.scale(Eq);
          if (gq && 0 !== gq) this.setAbsolutePosition(this.getAbsolutePosition().add(Yq));
          else {
            const qq = this.getPositionExpressedInLocalSpace().add(Yq);
            this.setPositionWithLocalVector(qq)
          }
          return this
        }
        addRotation(qq, Eq, gq) {
          let Yq;
          this.rotationQuaternion ? Yq = this.rotationQuaternion : (Yq = Bq.o.Quaternion[1], Bq.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Yq));
          const lq = Bq.o.Quaternion[0];
          return Bq.h.RotationYawPitchRollToRef(Eq, qq, gq, lq), Yq.multiplyInPlace(lq), this.rotationQuaternion || Yq.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== qq.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Yq = this.ZJ().getRenderId();
          if (!this._isDirty && !Eq && (this._currentRenderId === Yq || this.isSynchronized())) return this._currentRenderId = Yq, this._worldMatrix;
          gq = gq || this.ZJ().activeCamera, this._updateCache();
          const lq = this._cache;
          lq.pivotMatrixUpdated = !1, lq.billboardMode = this.billboardMode, lq.infiniteDistance = this.infiniteDistance, lq.parent = this._parentNode, this._currentRenderId = Yq, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Oq = this._getEffectiveParent(),
            mq = qq._TmpScaling;
          let xq, Aq = this._position;
          if (this._infiniteDistance && !this.parent && gq) {
            const Eq = gq.getWorldMatrix().m;
            Aq = qq._TmpTranslation, Aq.Vqq(this._position.x + Eq[12], this._position.y + Eq[13], this._position.z + Eq[14])
          }
          if (mq.Vqq(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, xq = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Bq.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Vqq(0, 0, 0))
            }
          } else xq = qq._TmpRotation, Bq.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, xq);
          if (this._usePivotMatrix) {
            const qq = Bq.o.Matrix[1];
            Bq.e.ScalingToRef(mq.x, mq.y, mq.z, qq);
            const Eq = Bq.o.Matrix[0];
            xq.toRotationMatrix(Eq), this._pivotMatrix.multiplyToRef(qq, Bq.o.Matrix[4]), Bq.o.Matrix[4].multiplyToRef(Eq, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Aq.x, Aq.y, Aq.z)
          } else Bq.e.ComposeToRef(mq, xq, Aq, this._localMatrix);
          if (Oq && Oq.getWorldMatrix) {
            if (Eq && Oq.computeWorldMatrix(Eq), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const qq = this.parent;
                qq.getSkeleton().prepare(), qq.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Bq.o.Matrix[7])
              } else Bq.o.Matrix[7].WG(Oq.getWorldMatrix());
              const Eq = Bq.o.Na[5],
                gq = Bq.o.Na[6],
                Yq = Bq.o.Quaternion[0];
              Bq.o.Matrix[7].decompose(gq, Yq, Eq), Bq.e.ScalingToRef(gq.x, gq.y, gq.z, Bq.o.Matrix[7]), Bq.o.Matrix[7].setTranslation(Eq), qq.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Yq, Eq), this._localMatrix.setTranslation(Eq)), this._localMatrix.multiplyToRef(Bq.o.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const qq = this.parent;
              qq.getSkeleton().prepare(), this._localMatrix.multiplyToRef(qq.getFinalMatrix(), Bq.o.Matrix[6]), Bq.o.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Oq.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.WG(this._localMatrix);
          if (gq && this.billboardMode)
            if (lq.useBillboardPosition) {
              const Eq = Bq.o.Na[0];
              this._worldMatrix.getTranslationToRef(Eq);
              const Yq = gq.globalPosition;
              this._worldMatrix.invertToRef(Bq.o.Matrix[1]);
              const lq = Bq.o.Na[1];
              Bq.q.TransformCoordinatesToRef(Yq, Bq.o.Matrix[1], lq), lq.normalize();
              const Oq = -Math.atan2(lq.z, lq.x) + Math.PI / 2,
                mq = Math.sqrt(lq.x * lq.x + lq.z * lq.z),
                xq = -Math.atan2(lq.y, mq);
              if (Bq.h.RotationYawPitchRollToRef(Oq, xq, 0, Bq.o.Quaternion[0]), (this.billboardMode & qq.BILLBOARDMODE_ALL) !== qq.BILLBOARDMODE_ALL) {
                const Eq = Bq.o.Na[1];
                Bq.o.Quaternion[0].toEulerAnglesToRef(Eq), (this.billboardMode & qq.BILLBOARDMODE_X) !== qq.BILLBOARDMODE_X && (Eq.x = 0), (this.billboardMode & qq.BILLBOARDMODE_Y) !== qq.BILLBOARDMODE_Y && (Eq.y = 0), (this.billboardMode & qq.BILLBOARDMODE_Z) !== qq.BILLBOARDMODE_Z && (Eq.z = 0), Bq.e.RotationYawPitchRollToRef(Eq.y, Eq.x, Eq.z, Bq.o.Matrix[0])
              } else Bq.e.FromQuaternionToRef(Bq.o.Quaternion[0], Bq.o.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Bq.o.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Bq.o.Na[0])
            } else {
              const Eq = Bq.o.Na[0];
              this._worldMatrix.getTranslationToRef(Eq), Bq.o.Matrix[1].WG(gq.getViewMatrix());
              const Yq = this.ZJ().useRightHandedSystem;
              if (Yq && Bq.o.Matrix[1].multiplyToRef(qq._TmpRHRestore, Bq.o.Matrix[1]), Bq.o.Matrix[1].setTranslationFromFloats(0, 0, 0), Bq.o.Matrix[1].invertToRef(Bq.o.Matrix[0]), (this.billboardMode & qq.BILLBOARDMODE_ALL) !== qq.BILLBOARDMODE_ALL) {
                Bq.o.Matrix[0].decompose(void 0, Bq.o.Quaternion[0], void 0);
                const Eq = Bq.o.Na[1];
                Bq.o.Quaternion[0].toEulerAnglesToRef(Eq), (this.billboardMode & qq.BILLBOARDMODE_X) !== qq.BILLBOARDMODE_X && (Eq.x = 0), (this.billboardMode & qq.BILLBOARDMODE_Y) !== qq.BILLBOARDMODE_Y && (Eq.y = 0), (this.billboardMode & qq.BILLBOARDMODE_Z) !== qq.BILLBOARDMODE_Z && (Eq.z = 0), Yq && (Eq.y += Math.PI), Bq.e.RotationYawPitchRollToRef(Eq.y, Eq.x, Eq.z, Bq.o.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Bq.o.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Bq.o.Na[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Oq && Oq._nonUniformScaling ? this._updateNonUniformScalingState(Oq._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.Vqq(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Bq.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), qq) {
            const qq = this.getChildren();
            for (let Eq = 0; Eq < qq.length; ++Eq) {
              const gq = qq[Eq];
              if (gq) {
                gq.computeWorldMatrix();
                const qq = Bq.o.Matrix[0];
                gq._localMatrix.multiplyToRef(this._localMatrix, qq);
                const Eq = Bq.o.Quaternion[0];
                qq.decompose(gq.rc, Eq, gq.position), gq.rotationQuaternion ? gq.rotationQuaternion.WG(Eq) : Eq.toEulerAnglesToRef(gq.rotation)
              }
            }
          }
          this.rc.Vqq(1, 1, 1), this.position.Vqq(0, 0, 0), this.rotation.Vqq(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Bq.h.Identity()), this._worldMatrix = Bq.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(qq) {
          return this.onAfterWorldMatrixUpdateObservable.add(qq), this
        }
        unregisterAfterWorldMatrixUpdate(qq) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(qq), this
        }
        getPositionInCameraSpace() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return qq || (qq = this.ZJ().activeCamera), Bq.q.TransformCoordinates(this.getAbsolutePosition(), qq.getViewMatrix())
        }
        getDistanceToCamera() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return qq || (qq = this.ZJ().activeCamera), this.getAbsolutePosition().subtract(qq.globalPosition).length()
        }
        clone(Eq, gq, Yq) {
          const lq = cq.d.Clone((() => new qq(Eq, this.ZJ())), this);
          if (lq.name = Eq, lq.id = Eq, gq && (lq.parent = gq), !Yq) {
            const qq = this.getDescendants(!0);
            for (let gq = 0; gq < qq.length; gq++) {
              const Yq = qq[gq];
              Yq.clone && Yq.clone(Eq + "." + Yq.name, lq)
            }
          }
          return lq
        }
        serialize(qq) {
          const Eq = cq.d.Serialize(this, qq);
          return Eq.type = this.getClassName(), Eq.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Eq), Eq.localMatrix = this.getPivotMatrix().bYq(), Eq.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Eq.eJ = !0), cq.d.AppendSerializedAnimations(this, Eq), Eq.zV = this.serializeAnimationRanges(), Eq
        }
        getChildTransformNodes(Eq, gq) {
          const Yq = [];
          return this._getDescendants(Yq, Eq, (Eq => (!gq || gq(Eq)) && Eq instanceof qq)), Yq
        }
        dispose(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.ZJ().stopAnimation(this), this.ZJ().removeTransformNode(this), this._parentContainer) {
            const qq = this._parentContainer.transformNodes.indexOf(this);
            qq > -1 && this._parentContainer.transformNodes.splice(qq, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), qq) {
            const qq = this.getChildTransformNodes(!0);
            for (const Eq of qq) Eq.parent = null, Eq.computeWorldMatrix(!0)
          }
          super.dispose(qq, Eq)
        }
        normalizeToUnitCube() {
          let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gq = arguments.length > 2 ? arguments[2] : void 0,
            Yq = null,
            lq = null;
          Eq && (this.rotationQuaternion ? (lq = this.rotationQuaternion.clone(), this.rotationQuaternion.Vqq(0, 0, 0, 1)) : this.rotation && (Yq = this.rotation.clone(), this.rotation.Vqq(0, 0, 0)));
          const Oq = this.getHierarchyBoundingVectors(qq, gq),
            mq = Oq.max.subtract(Oq.min),
            xq = Math.max(mq.x, mq.y, mq.z);
          if (0 === xq) return this;
          const Aq = 1 / xq;
          return this.rc.scaleInPlace(Aq), Eq && (this.rotationQuaternion && lq ? this.rotationQuaternion.WG(lq) : this.rotation && Yq && this.rotation.WG(Yq)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const cq = "function" === typeof Symbol && Symbol.metadata ? Object.create(dq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, Aq.I)("position")], gq = [(0, Aq.I)("rotation")], Yq = [(0, Aq.C)("rotationQuaternion")], lq = [(0, Aq.I)("rc")], Oq = [(0, Aq.M)("billboardMode")], mq = [(0, Aq.M)()], Nq = [(0, Aq.M)("infiniteDistance")], aq = [(0, Aq.M)()], Vq = [(0, Aq.M)()], (0, xq.f)(null, null, Eq, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: qq => "_position" in qq,
            get: qq => qq._position,
            set: (qq, Eq) => {
              qq._position = Eq
            }
          },
          metadata: cq
        }, jq, Hq), (0, xq.f)(null, null, gq, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: qq => "_rotation" in qq,
            get: qq => qq._rotation,
            set: (qq, Eq) => {
              qq._rotation = Eq
            }
          },
          metadata: cq
        }, oq, Pq), (0, xq.f)(null, null, Yq, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: qq => "_rotationQuaternion" in qq,
            get: qq => qq._rotationQuaternion,
            set: (qq, Eq) => {
              qq._rotationQuaternion = Eq
            }
          },
          metadata: cq
        }, Qq, yq), (0, xq.f)(null, null, lq, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: qq => "_scaling" in qq,
            get: qq => qq._scaling,
            set: (qq, Eq) => {
              qq._scaling = Eq
            }
          },
          metadata: cq
        }, tq, rq), (0, xq.f)(null, null, Oq, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "_billboardMode" in qq,
            get: qq => qq._billboardMode,
            set: (qq, Eq) => {
              qq._billboardMode = Eq
            }
          },
          metadata: cq
        }, vq, hq), (0, xq.f)(null, null, mq, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: qq => "scalingDeterminant" in qq,
            get: qq => qq.scalingDeterminant,
            set: (qq, Eq) => {
              qq.scalingDeterminant = Eq
            }
          },
          metadata: cq
        }, nq, bq), (0, xq.f)(null, null, Nq, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: qq => "_infiniteDistance" in qq,
            get: qq => qq._infiniteDistance,
            set: (qq, Eq) => {
              qq._infiniteDistance = Eq
            }
          },
          metadata: cq
        }, iq, Zq), (0, xq.f)(null, null, aq, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: qq => "ignoreNonUniformScaling" in qq,
            get: qq => qq.ignoreNonUniformScaling,
            set: (qq, Eq) => {
              qq.ignoreNonUniformScaling = Eq
            }
          },
          metadata: cq
        }, fq, Mq), (0, xq.f)(null, null, Vq, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: qq => "reIntegrateRotationIntoRotationQuaternion" in qq,
            get: qq => qq.reIntegrateRotationIntoRotationQuaternion,
            set: (qq, Eq) => {
              qq.reIntegrateRotationIntoRotationQuaternion = Eq
            }
          },
          metadata: cq
        }, Tq, zq), cq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cq
        })
      })(), qq.BILLBOARDMODE_NONE = 0, qq.BILLBOARDMODE_X = 1, qq.BILLBOARDMODE_Y = 2, qq.BILLBOARDMODE_Z = 4, qq.BILLBOARDMODE_ALL = 7, qq.BILLBOARDMODE_USE_POSITION = 128, qq.BillboardUseParentOrientation = !1, qq._TmpRotation = Bq.h.Zero(), qq._TmpScaling = Bq.q.Zero(), qq._TmpTranslation = Bq.q.Zero(), qq._TmpRHRestore = Bq.e.Scaling(1, 1, -1), qq._LookAtVectorCache = new Bq.q(0, 0, 0), qq._RotationAxisCache = new Bq.h, qq
    })();

    function dq(qq, Eq, gq) {
      const Yq = cq.d.Parse((() => new Vq(qq.name, Eq)), qq, Eq, gq);
      if (qq.localMatrix ? Yq.setPreTransformMatrix(Bq.e.FromArray(qq.localMatrix)) : qq.pivotMatrix && Yq.setPivotMatrix(Bq.e.FromArray(qq.pivotMatrix)), Yq.hG(qq.isEnabled), Yq._waitingParsedUniqueId = qq.uniqueId, void 0 !== qq.parentId && (Yq._waitingParentId = qq.parentId), void 0 !== qq.parentInstanceIndex && (Yq._waitingParentInstanceIndex = qq.parentInstanceIndex), qq.eJ && (Yq._waitingFreezeWorldMatrix = qq.eJ), qq.animations) {
        for (let Eq = 0; Eq < qq.animations.length; Eq++) {
          const gq = qq.animations[Eq],
            lq = (0, Nq.e)("BABYLON.Animation");
          lq && Yq.animations.push(lq.Parse(gq))
        }
        Wq.c.ParseAnimationRanges(Yq, qq, Eq)
      }
      return qq.autoAnimate && Eq.beginAnimation(Yq, qq.autoAnimateFrom, qq.autoAnimateTo, qq.autoAnimateLoop, qq.autoAnimateSpeed || 1), Yq
    }
    let jq = !1;

    function Hq() {
      jq || (jq = !0, Vq.Parse = dq)
    }(Yq = Vq.prototype).FX ?? (Yq.FX = (0, aq.i)("TransformNode", "FX")), (lq = Vq.prototype).applyImpulse ?? (lq.applyImpulse = (0, aq.i)("TransformNode", "applyImpulse")), (Oq = Vq.prototype).applyAngularImpulse ?? (Oq.applyAngularImpulse = (0, aq.i)("TransformNode", "applyAngularImpulse")), (mq = Vq.prototype).applyTorque ?? (mq.applyTorque = (0, aq.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Vq.prototype, "physicsBody") || Object.defineProperty(Vq.prototype, "physicsBody", (0, aq.e)("TransformNode", "physicsBody"))
  },
  40172: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      try {
        const Yq = qq.next();
        Yq.done ? Eq(Yq) : Yq.value ? Yq.value.then((() => {
          Yq.value = void 0, Eq(Yq)
        }), gq) : Eq(Yq)
      } catch (Yq) {
        gq(Yq)
      }
    }

    function lq() {
      let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (gq, lq, Oq) => {
        const mq = performance.now();
        void 0 === qq || mq - qq > Eq ? (qq = mq, setTimeout((() => {
          Yq(gq, lq, Oq)
        }), 0)) : Yq(gq, lq, Oq)
      }
    }

    function Oq(qq, Eq, gq, Yq, lq) {
      const Oq = () => {
        let mq;
        const xq = qq => {
          qq.done ? gq(qq.value) : void 0 === mq ? mq = !0 : Oq()
        };
        do {
          mq = void 0, lq && lq.aborted ? Yq(new Error("Aborted")) : Eq(qq, xq, Yq), void 0 === mq && (mq = !1)
        } while (mq)
      };
      Oq()
    }

    function mq(qq, Eq) {
      let gq;
      return Oq(qq, Yq, (qq => gq = qq), (qq => {
        throw qq
      }), Eq), gq
    }
    async function xq(qq, Eq, gq) {
      return await new Promise(((Yq, lq) => {
        Oq(qq, Eq, Yq, lq, gq)
      }))
    }

    function Aq(qq, Eq) {
      return function() {
        return mq(qq(...arguments), Eq)
      }
    }
    gq.d(Eq, {
      d: () => lq,
      h: () => Aq,
      k: () => xq,
      o: () => mq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);