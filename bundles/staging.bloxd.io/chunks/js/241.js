export const id = 241;
export const ids = [241];
export const modules = {
  39658: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Qb,
      g: () => Nb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39536),
      Tb = sb(36683),
      Ub = sb(36656),
      Ib = sb(39667),
      Hb = sb(38284),
      fb = sb(36698),
      Mb = sb(39296),
      Xb = sb(37700),
      nb = sb(37365),
      mb = sb(39371),
      lb = sb(39441);
    let Qb = (() => {
      var bb;
      let cb, sb, fb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db = Ib.c,
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        db = [],
        Ab = [],
        wb = [],
        rb = [],
        ob = [],
        Sb = [],
        Rb = [],
        vb = [],
        Fb = [],
        xb = [],
        jb = [],
        pb = [],
        bc = [],
        cc = [],
        sc = [],
        kc = [],
        Wc = [];
      return bb = class extends Db {
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
          let cb, sb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) this.fovMode === bb.FOVMODE_VERTICAL_FIXED ? (sb = 2 * this.minZ * Math.tan(this.fov / 2), cb = this.Sm().getAspectRatio(this) * sb) : (cb = 2 * this.minZ * Math.tan(this.fov / 2), sb = cb / this.Sm().getAspectRatio(this));
          else {
            const bb = this.Sm().getRenderWidth() / 2,
              kb = this.Sm().getRenderHeight() / 2;
            cb = (this.orthoRight ?? bb) - (this.orthoLeft ?? -bb), sb = (this.orthoTop ?? kb) - (this.orthoBottom ?? -kb)
          }
          return cb * sb
        }
        set orthoLeft(bb) {
          this._orthoLeft = bb;
          for (const cb of this._rigCameras) cb.orthoLeft = bb
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(bb) {
          this._orthoRight = bb;
          for (const cb of this._rigCameras) cb.orthoRight = bb
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(bb) {
          this._orthoBottom = bb;
          for (const cb of this._rigCameras) cb.orthoBottom = bb
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(bb) {
          this._orthoTop = bb;
          for (const cb of this._rigCameras) cb.orthoTop = bb
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(cb / (2 * bb))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(bb) {
          this._baseInertia = bb
        }
        set mode(bb) {
          this._mode = bb;
          for (const cb of this._rigCameras) cb.mode = bb
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(cb, sb, Wb) {
          let Ib = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, mb.b)(), super(cb, Wb, !1), this.inputs = (0, kb.m)(this, Eb), this._position = (0, kb.m)(this, ib, Ub.p.Zero()), this._upVector = ((0, kb.m)(this, Ob), (0, kb.m)(this, Gb, Ub.p.Up())), this.oblique = ((0, kb.m)(this, Kb), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, kb.m)(this, Zb, .8), this.projectionPlaneTilt = ((0, kb.m)(this, zb), (0, kb.m)(this, qb, 0)), this.minZ = ((0, kb.m)(this, db), (0, kb.m)(this, Ab, 1)), this.maxZ = ((0, kb.m)(this, wb), (0, kb.m)(this, rb, 1e4)), this._baseInertia = ((0, kb.m)(this, ob), .9), this._mode = bb.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Xb.b(0, 0, 1, 1), this.layerMask = (0, kb.m)(this, Sb, 268435455), this.fovMode = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, bb.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, kb.m)(this, Fb), (0, kb.m)(this, xb, bb.RIG_MODE_NONE)), this.interaxialDistance = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, void 0)), this.isStereoscopicSideBySide = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, void 0)), this.ignoreCameraMaxZ = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, !1)), this.customRenderTargets = ((0, kb.m)(this, Wc), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Tb.c, this.onProjectionMatrixChangedObservable = new Tb.c, this.onAfterCheckInputsObservable = new Tb.c, this.onRestoreStateObservable = new Tb.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Ub.e, this._postProcesses = new Array, this._activeMeshes = new ab.d(256), this._globalPosition = Ub.p.Zero(), this._computedViewMatrix = Ub.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Ub.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Ub.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.EY().defaultCameraLayerMask, this.EY().addCamera(this), Ib && !this.EY().activeCamera && (this.EY().activeCamera = this), this.position = sb, this.renderPassId = this.EY().Sm().createRenderPassId(`Camera ${cb}`)
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
          return "GQ"
        }
        toString(bb) {
          let cb = "Name: " + this.name;
          if (cb += ", type: " + this.getClassName(), this.animations)
            for (let sb = 0; sb < this.animations.length; sb++) cb += ", animation[0]: " + this.animations[sb].toString(bb);
          return cb
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
            for (const cb of this._postProcesses)
              if (cb && !cb.isReady()) return !1;
          return super.isReady(bb)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Ub.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Ub.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(bb) {
          bb || super._updateCache(), this._cache.position.ssb(this.position), this._cache.upVector.ssb(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const cb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let sb = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === cb;
          if (!sb) return !1;
          const kb = this.Sm();
          return this.mode === bb.PERSPECTIVE_CAMERA ? sb = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === kb.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (sb = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === kb.getRenderWidth() && this._cache.renderHeight === kb.getRenderHeight(), this.oblique && (sb = sb && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), sb
        }
        attachControl(bb, cb) {}
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
          for (let cb = 0, sb = this._rigCameras.length; cb < sb; cb++) {
            const bb = this._rigCameras[cb],
              sb = bb._rigPostProcess;
            if (sb) {
              "pass" === sb.getEffectName() && (bb.isIntermediate = 0 === this._postProcesses.length), bb._postProcesses = this._postProcesses.slice(0).concat(sb), sb.markTextureDirty()
            } else bb._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !bb.isReusable() && this._postProcesses.indexOf(bb) > -1 ? (Hb.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == cb || cb < 0 ? this._postProcesses.push(bb) : null === this._postProcesses[cb] ? this._postProcesses[cb] = bb : this._postProcesses.splice(cb, 0, bb), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.Tcb(), this._postProcesses.indexOf(bb))
        }
        detachPostProcess(bb) {
          const cb = this._postProcesses.indexOf(bb); - 1 !== cb && (this._postProcesses[cb] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.Tcb(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Ub.e.Identity()
        }
        getViewMatrix(bb) {
          return !bb && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.EY().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(bb) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== bb && (this._projectionMatrix = bb)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(cb) {
          if (this._doNotComputeProjectionMatrix || !cb && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const sb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = sb, this._refreshFrustumPlanes = !0;
          const kb = this.Sm(),
            Wb = this.EY(),
            ab = kb.Dsb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) {
            let cb;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = kb.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), cb = Wb.useRightHandedSystem ? Ub.e.PerspectiveFovRHToRef : Ub.e.PerspectiveFovLHToRef, cb(this.fov, kb.getAspectRatio(this), ab ? sb : this.minZ, ab ? this.minZ : sb, this._projectionMatrix, this.fovMode === bb.FOVMODE_VERTICAL_FIXED, kb.isNDCHalfZRange, this.projectionPlaneTilt, ab)
          } else {
            const bb = kb.getRenderWidth() / 2,
              cb = kb.getRenderHeight() / 2;
            Wb.useRightHandedSystem ? this.oblique ? Ub.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -cb, this.orthoTop ?? cb, ab ? sb : this.minZ, ab ? this.minZ : sb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, kb.isNDCHalfZRange) : Ub.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -cb, this.orthoTop ?? cb, ab ? sb : this.minZ, ab ? this.minZ : sb, this._projectionMatrix, kb.isNDCHalfZRange) : this.oblique ? Ub.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -cb, this.orthoTop ?? cb, ab ? sb : this.minZ, ab ? this.minZ : sb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, kb.isNDCHalfZRange) : Ub.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -cb, this.orthoTop ?? cb, ab ? sb : this.minZ, ab ? this.minZ : sb, this._projectionMatrix, kb.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = kb.getRenderWidth(), this._cache.renderHeight = kb.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(bb) {
          return (this.radius || (this.target ? Ub.p.Distance(this.position, this.target) : this.position.length())) + bb
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? nb.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = nb.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), cb && this.rigCameras.length > 0) {
            let cb = !1;
            for (const sb of this.rigCameras) sb._updateFrustumPlanes(), cb = cb || bb.isInFrustum(sb._frustumPlanes);
            return cb
          }
          return bb.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(bb) {
          return this._updateFrustumPlanes(), bb.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Mb.i)("Ray")
        }
        getForwardRayToRef(bb) {
          throw (0, Mb.i)("Ray")
        }
        dispose(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.EY().stopAnimation(this), this.EY().removeCamera(this); this._rigCameras.length > 0;) {
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
              const cb = this._postProcesses[bb];
              cb && cb.dispose(this)
            }
          }
          let kb = this.customRenderTargets.length;
          for (; --kb >= 0;) this.customRenderTargets[kb].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.EY().Sm().releaseRenderPassId(this.renderPassId), super.dispose(cb, sb)
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
        setCameraRigMode(cb, sb) {
          if (this.cameraRigMode !== cb) {
            for (; this._rigCameras.length > 0;) {
              const bb = this._rigCameras.pop();
              bb && bb.dispose()
            }
            if (this.cameraRigMode = cb, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = sb.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== bb.RIG_MODE_NONE) {
              const bb = this.createRigCamera(this.name + "_L", 0);
              bb && (bb._isLeftCamera = !0);
              const cb = this.createRigCamera(this.name + "_R", 1);
              cb && (cb._isRightCamera = !0), bb && cb && (this._rigCameras.push(bb), this._rigCameras.push(cb))
            }
            this._setRigMode(sb), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(bb) {}
        _getVRProjectionMatrix() {
          return Ub.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Sm().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(bb, cb) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[bb] = cb, "interaxialDistance" === bb && (this._cameraRigParams.stereoHalfAngle = cb / .0637 * (Math.PI / 180))
        }
        createRigCamera(bb, cb) {
          return null
        }
        _updateRigCameras() {
          for (let bb = 0; bb < this._rigCameras.length; bb++) this._rigCameras[bb].minZ = this.minZ, this._rigCameras[bb].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[bb].fov = this.fov, this._rigCameras[bb].upVector.ssb(this.upVector);
          this.cameraRigMode === bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const bb = lb.d.Serialize(this);
          return bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), this.parent && this.parent._serializeAsParent(bb), this.inputs && this.inputs.serialize(bb), lb.d.AppendSerializedAnimations(this, bb), bb.uQ = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        clone(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const kb = lb.d.Clone(bb.GetConstructorFromName(this.getClassName(), cb, this.EY(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return kb.name = cb, kb.parent = sb, this.onClonedObservable.notifyObservers(kb), kb
        }
        Jq(bb) {
          const cb = Ub.p.Zero();
          return this.getDirectionToRef(bb, cb), cb
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(bb, cb) {
          Ub.p.TransformNormalToRef(bb, this.getWorldMatrix(), cb)
        }
        static GetConstructorFromName(cb, sb, kb) {
          let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Tb = Ib.c.Construct(cb, sb, kb, {
            interaxial_distance: Wb,
            isStereoscopicSideBySide: ab
          });
          return Tb || (() => bb._CreateDefaultParsedCamera(sb, kb))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let bb = this.EY().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (bb *= -1), bb
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Db[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Wb.C)("position")], sb = [(0, Wb.C)("upVector")], fb = [(0, Wb.E)()], Qb = [(0, Wb.E)()], eb = [(0, Wb.E)()], Cb = [(0, Wb.E)()], Nb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], Lb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Yb = [(0, Wb.E)()], hb = [(0, Wb.E)()], Jb = [(0, Wb.E)()], gb = [(0, Wb.E)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], Pb = [(0, Wb.E)()], (0, kb.j)(bb, null, fb, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoLeft" in bb,
            get: bb => bb.orthoLeft
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(bb, null, Qb, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoRight" in bb,
            get: bb => bb.orthoRight
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(bb, null, eb, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoBottom" in bb,
            get: bb => bb.orthoBottom
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(bb, null, Cb, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoTop" in bb,
            get: bb => bb.orthoTop
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(bb, null, Yb, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: bb => "inertia" in bb,
            get: bb => bb.inertia
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(bb, null, hb, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: bb => "mode" in bb,
            get: bb => bb.mode
          },
          metadata: ab
        }, null, Eb), (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, cb) => {
              bb._position = cb
            }
          },
          metadata: ab
        }, ib, Ob), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: bb => "_upVector" in bb,
            get: bb => bb._upVector,
            set: (bb, cb) => {
              bb._upVector = cb
            }
          },
          metadata: ab
        }, Gb, Kb), (0, kb.j)(null, null, Nb, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: bb => "fov" in bb,
            get: bb => bb.fov,
            set: (bb, cb) => {
              bb.fov = cb
            }
          },
          metadata: ab
        }, Zb, zb), (0, kb.j)(null, null, Vb, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: bb => "projectionPlaneTilt" in bb,
            get: bb => bb.projectionPlaneTilt,
            set: (bb, cb) => {
              bb.projectionPlaneTilt = cb
            }
          },
          metadata: ab
        }, qb, db), (0, kb.j)(null, null, Lb, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "minZ" in bb,
            get: bb => bb.minZ,
            set: (bb, cb) => {
              bb.minZ = cb
            }
          },
          metadata: ab
        }, Ab, wb), (0, kb.j)(null, null, ub, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxZ" in bb,
            get: bb => bb.maxZ,
            set: (bb, cb) => {
              bb.maxZ = cb
            }
          },
          metadata: ab
        }, rb, ob), (0, kb.j)(null, null, Jb, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "layerMask" in bb,
            get: bb => bb.layerMask,
            set: (bb, cb) => {
              bb.layerMask = cb
            }
          },
          metadata: ab
        }, Sb, Rb), (0, kb.j)(null, null, gb, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fovMode" in bb,
            get: bb => bb.fovMode,
            set: (bb, cb) => {
              bb.fovMode = cb
            }
          },
          metadata: ab
        }, vb, Fb), (0, kb.j)(null, null, Bb, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraRigMode" in bb,
            get: bb => bb.cameraRigMode,
            set: (bb, cb) => {
              bb.cameraRigMode = cb
            }
          },
          metadata: ab
        }, xb, jb), (0, kb.j)(null, null, tb, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "interaxialDistance" in bb,
            get: bb => bb.interaxialDistance,
            set: (bb, cb) => {
              bb.interaxialDistance = cb
            }
          },
          metadata: ab
        }, pb, bc), (0, kb.j)(null, null, yb, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: bb => "isStereoscopicSideBySide" in bb,
            get: bb => bb.isStereoscopicSideBySide,
            set: (bb, cb) => {
              bb.isStereoscopicSideBySide = cb
            }
          },
          metadata: ab
        }, cc, sc), (0, kb.j)(null, null, Pb, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreCameraMaxZ" in bb,
            get: bb => bb.ignoreCameraMaxZ,
            set: (bb, cb) => {
              bb.ignoreCameraMaxZ = cb
            }
          },
          metadata: ab
        }, kc, Wc), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb._CreateDefaultParsedCamera = (bb, cb) => {
        throw (0, Mb.i)("UniversalCamera")
      }, bb.PERSPECTIVE_CAMERA = 0, bb.ORTHOGRAPHIC_CAMERA = 1, bb.FOVMODE_VERTICAL_FIXED = 0, bb.FOVMODE_HORIZONTAL_FIXED = 1, bb.RIG_MODE_NONE = 0, bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, bb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, bb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, bb.RIG_MODE_VR = 20, bb.RIG_MODE_CUSTOM = 22, bb.ForceAttachControlToAlwaysPreventDefault = !1, bb
    })();

    function eb(bb, cb) {
      const sb = bb.type,
        kb = Qb.GetConstructorFromName(sb, bb.name, cb, bb.interaxial_distance, bb.isStereoscopicSideBySide),
        Wb = lb.d.Parse(kb, bb, cb);
      if (void 0 !== bb.parentId && (Wb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Wb._waitingParentInstanceIndex = bb.parentInstanceIndex), Wb.inputs && (Wb.inputs.parse(bb), Wb._setupInputs()), bb.upVector && (Wb.upVector = Ub.p.FromArray(bb.upVector)), Wb.setPosition && (Wb.position.I5(0, 0, 0), Wb.setPosition(Ub.p.FromArray(bb.position))), bb.target && Wb.setTarget && Wb.setTarget(Ub.p.FromArray(bb.target)), bb.cameraRigMode) {
        const cb = bb.interaxial_distance ? {
          interaxialDistance: bb.interaxial_distance
        } : {};
        Wb.setCameraRigMode(bb.cameraRigMode, cb)
      }
      if (bb.animations) {
        for (let cb = 0; cb < bb.animations.length; cb++) {
          const sb = bb.animations[cb],
            kb = (0, fb.e)("BABYLON.Animation");
          kb && Wb.animations.push(kb.Parse(sb))
        }
        Ib.c.ParseAnimationRanges(Wb, bb, cb)
      }
      return bb.autoAnimate && cb.beginAnimation(Wb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), void 0 !== bb.isEnabled && Wb.GV(bb.isEnabled), Wb
    }
    let Cb = !1;

    function Nb() {
      Cb || (Cb = !0, Qb.Parse = eb)
    }
  },
  39676: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb) {
        this._cameraPosition = cb, this._behavior = sb, this.activeInput = !1, this.speed = 1, this.NK = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new kb.p, this.rotationAccumulatedPixels = new kb.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = kb.p.Zero(), this.rotationDeltaCurrentFrame = kb.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new kb.p, this.referenceFrameRate = 60, this._rotationVelocity = new kb.p, this._prevFrameTimeMs = 0, this._scene = bb
      }
      computeCurrentFrameDeltas() {
        const bb = this._scene.Sm().getDeltaTime(),
          cb = this._getEffectiveDeltaMs(bb);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.I6(0), this.rotationDeltaCurrentFrame.I6(0), this.zoomDeltaCurrentFrame = 0, void(bb > 0 && (this._prevFrameTimeMs = bb));
        this.panDeltaCurrentFrame.I6(0), this.rotationDeltaCurrentFrame.I6(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.I5(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * cb, this.panDeltaCurrentFrame), this._rotationVelocity.I5(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.I5(this._rotationVelocity.x * this.speed * this.rotationXSpeed * cb, this._rotationVelocity.y * this.speed * this.rotationYSpeed * cb, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.NK * this._zoomSpeedMultiplier) * cb, bb > 0 && (this._prevFrameTimeMs = bb), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.I6(0), this.rotationAccumulatedPixels.I6(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.I6(0), this.rotationAccumulatedPixels.I6(0)
      }
      resetPanVelocity() {
        this._panVelocity.I6(0), this.panAccumulatedPixels.I6(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(bb) {
        const cb = this._scene.Sm().getDeltaTime(),
          sb = this._getEffectiveDeltaMs(cb),
          kb = 1e3 / this.referenceFrameRate;
        return Math.pow(bb, sb / kb)
      }
      getFrameIndependentInputScale(bb) {
        const cb = 1 - bb;
        if (cb <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(bb)) / cb
      }
      _getEffectiveDeltaMs(bb) {
        return bb > 0 ? bb : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(bb, cb, sb) {
        let kb = bb;
        const Wb = this._scene.Sm().getDeltaTime(),
          ab = this._getEffectiveDeltaMs(Wb);
        if (0 === ab) return kb;
        const Tb = this.getFrameIndependentDecay(sb);
        if (kb *= Tb, 0 !== cb || this.activeInput) {
          const bb = 1 - sb;
          kb += cb / ab * (bb > 0 ? (1 - Tb) / bb : 1)
        } else Math.abs(kb) < 1e-6 && (kb = 0);
        return kb
      }
    }
  },
  39682: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    class kb {
      constructor(bb, cb) {
        this.inputMap = [], this.handlers = bb, this._createDefaultEntries = cb, this.resetInputMap()
      }
      resolveInteraction(bb, cb) {
        for (const sb of this.inputMap)
          if (sb.source === bb && this._entryMatches(sb, cb)) return sb;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(bb, cb, sb) {
        const kb = this.inputMap;
        for (let Wb = 0; Wb < kb.length; Wb++) {
          const ab = kb[Wb];
          if (ab.source === bb && ab.interaction === cb && this._entryConditionsMatch(ab, sb)) return ab
        }
      }
      getEntries(bb, cb, sb) {
        const kb = [],
          Wb = this.inputMap;
        for (let ab = 0; ab < Wb.length; ab++) {
          const Tb = Wb[ab];
          Tb.source === bb && Tb.interaction === cb && this._entryConditionsMatch(Tb, sb) && kb.push(Tb)
        }
        return kb
      }
      addEntry(bb) {
        const cb = this._entrySpecificity(bb);
        let sb = this.inputMap.length;
        for (let kb = 0; kb < this.inputMap.length; kb++)
          if (this._entrySpecificity(this.inputMap[kb]) < cb) {
            sb = kb;
            break
          } this.inputMap.splice(sb, 0, bb)
      }
      setInteraction(bb, cb, sb) {
        const kb = this.resolveInteraction(bb, cb);
        return kb && this._entryCoversAllConditionsOf(kb, cb) ? (kb.interaction = sb, !0) : (this.addEntry({
          source: bb,
          ...cb ?? {},
          interaction: sb
        }), !0)
      }
      _entryCoversAllConditionsOf(bb, cb) {
        if (!cb) return !0;
        const sb = bb;
        for (const kb of Object.keys(cb)) {
          const bb = cb[kb];
          if (void 0 !== bb)
            if ("modifiers" === kb) {
              const cb = sb.modifiers ?? {};
              for (const sb of Object.keys(bb))
                if (void 0 !== bb[sb] && void 0 === cb[sb]) return !1
            } else if (void 0 === sb[kb]) return !1
        }
        return !0
      }
      setInteractions(bb, cb, sb) {
        let kb = 0;
        const Wb = this.inputMap;
        for (let ab = 0; ab < Wb.length; ab++) {
          const Tb = Wb[ab];
          Tb.source === bb && this._entryMatches(Tb, cb) && (Tb.interaction = sb, kb++)
        }
        return kb
      }
      _entryMatches(bb, cb) {
        switch (bb.source) {
          case "pointer":
            return (void 0 === bb.button || bb.button === cb?.button) && this._matchModifiers(bb.modifiers, cb?.modifiers);
          case "wheel":
            return this._matchModifiers(bb.modifiers, cb?.modifiers);
          case "touch":
            return void 0 === bb.touchCount || bb.touchCount === cb?.touchCount;
          case "keyboard":
            return (void 0 === bb.key || (Array.isArray(bb.key) ? -1 !== bb.key.indexOf(cb?.key ?? -1) : bb.key === cb?.key)) && this._matchModifiers(bb.modifiers, cb?.modifiers)
        }
      }
      _entryConditionsMatch(bb, cb) {
        if (!cb) return !0;
        switch (bb.source) {
          case "pointer":
            return (!("button" in cb) || bb.button === cb.button) && (!("modifiers" in cb) || this._entryModifiersMatch(bb.modifiers, cb.modifiers));
          case "wheel":
            return !("modifiers" in cb) || this._entryModifiersMatch(bb.modifiers, cb.modifiers);
          case "touch":
            return !("touchCount" in cb) || bb.touchCount === cb.touchCount;
          case "keyboard":
            if ("key" in cb) {
              if (void 0 === bb.key) return void 0 === cb.key;
              if (void 0 === cb.key || (Array.isArray(bb.key) ? -1 === bb.key.indexOf(cb.key) : bb.key !== cb.key)) return !1
            }
            return !("modifiers" in cb) || this._entryModifiersMatch(bb.modifiers, cb.modifiers)
        }
      }
      _entrySpecificity(bb) {
        let cb = 0;
        return "button" in bb && void 0 !== bb.button && cb++, "key" in bb && void 0 !== bb.key && cb++, "touchCount" in bb && void 0 !== bb.touchCount && cb++, "modifiers" in bb && bb.modifiers && cb++, cb
      }
      _matchModifiers(bb, cb) {
        return !bb || (void 0 === bb.ctrl || bb.ctrl === (cb?.ctrl ?? !1)) && ((void 0 === bb.shift || bb.shift === (cb?.shift ?? !1)) && (void 0 === bb.alt || bb.alt === (cb?.alt ?? !1)))
      }
      _entryModifiersMatch(bb, cb) {
        if (!cb) return !bb;
        return void 0 !== cb.ctrl || void 0 !== cb.shift || void 0 !== cb.alt ? (void 0 === cb.ctrl || bb?.ctrl === cb.ctrl) && ((void 0 === cb.shift || bb?.shift === cb.shift) && (void 0 === cb.alt || bb?.alt === cb.alt)) : !bb || void 0 === bb.ctrl && void 0 === bb.shift && void 0 === bb.alt
      }
    }
  },
  39653: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => eb,
      f: () => lb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39658),
      Tb = sb(36656),
      Ub = sb(36661),
      Ib = sb(39674),
      Hb = sb(39667),
      fb = sb(39676),
      Mb = sb(39682);
    class Xb extends fb.b {
      constructor(bb, cb, sb) {
        super(bb, cb, sb), this.input = new Mb.d({
          translate: (bb, cb, sb) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += cb, this.panAccumulatedPixels.z += sb
          },
          rotate: (bb, cb) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += cb
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
    const nb = Tb.e.Zero(),
      mb = Tb.f.Identity();
    let lb = (() => {
        var bb;
        let cb, sb, Hb, fb, Mb = ab.c,
          lb = [],
          Qb = [],
          eb = [],
          Cb = [],
          Nb = [],
          Vb = [],
          Lb = [],
          ub = [];
        return bb = class extends Mb {
          get inertia() {
            return this._targetInertia
          }
          set inertia(bb) {
            this._targetInertia = bb, this.movement && (this.movement.panInertia = bb, this.movement.rotationInertia = bb)
          }
          constructor(bb, cb, sb) {
            super(bb, cb, sb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Tb.p(0, 0, 0), this.cameraRotation = new Tb.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, kb.m)(this, lb, !1), this.rotation = ((0, kb.m)(this, Qb), (0, kb.m)(this, eb, void 0)), this.rotationQuaternion = (0, kb.m)(this, Cb), this.speed = (0, kb.m)(this, Nb, 2), this.noRotationConstraint = ((0, kb.m)(this, Vb), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Ub.d, this._rotationEpsilon = Ub.d, this.lockedTarget = (0, kb.m)(this, Lb, null), this._currentTarget = ((0, kb.m)(this, ub), Tb.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Tb.e.Zero(), this._cameraTransformMatrix = Tb.e.Zero(), this._cameraRotationMatrix = Tb.e.Zero(), this._transformedReferencePoint = Tb.p.Zero(), this._deferredPositionUpdate = new Tb.p, this._deferredRotationQuaternionUpdate = new Tb.f, this._deferredRotationUpdate = new Tb.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Tb.p.Forward(this.EY().useRightHandedSystem), this.rotation = new Tb.p(0, this.EY().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Xb(this.EY(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(bb) {
            this.getWorldMatrix();
            const cb = Tb.m.Fm[0],
              sb = Tb.m.Fm[1];
            return sb.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(sb, cb), cb.scaleInPlace(bb), this.globalPosition.add(cb)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.I5(0, 0, 0), this.cameraRotation.I5(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Tb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Tb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Tb.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(bb) {
            bb || super._updateCache();
            const cb = this._getLockedTargetPosition();
            cb ? this._cache.lockedTarget ? this._cache.lockedTarget.ssb(cb) : this._cache.lockedTarget = cb.clone() : this._cache.lockedTarget = null, this._cache.rotation.ssb(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.ssb(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const bb = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(bb) : !bb) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const bb = this.Sm();
            return this.speed * Math.sqrt(bb.getDeltaTime() / (100 * bb.getFps()))
          }
          setTarget(bb) {
            this.upVector.normalize(), this._initialFocalDistance = bb.subtract(this.position).length(), this.position.z === bb.z && (this.position.z += Ub.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.EY().useRightHandedSystem ? Tb.e.LookAtRHToRef(this.position, bb, Tb.p.UpReadOnly, nb) : Tb.e.LookAtLHToRef(this.position, bb, Tb.p.UpReadOnly, nb), nb.invert();
            const cb = this.rotationQuaternion || mb;
            Tb.f.FromRotationMatrixToRef(nb, cb), cb.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Tb.m.Matrix[0]), Tb.p.TransformNormalToRef(this.cameraDirection, Tb.m.Matrix[0], Tb.m.Fm[0]), this._deferredPositionUpdate.addInPlace(Tb.m.Fm[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.ssb(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.ssb(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const bb = this.movement,
              cb = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            bb.panAccumulatedPixels.addInPlace(this.cameraDirection), bb.rotationAccumulatedPixels.x += this.cameraRotation.x, bb.rotationAccumulatedPixels.y += this.cameraRotation.y, bb.computeCurrentFrameDeltas(), this.cameraDirection.ssb(bb.panDeltaCurrentFrame), this.cameraRotation.set(bb.rotationDeltaCurrentFrame.x, bb.rotationDeltaCurrentFrame.y);
            const sb = this.speed * this._panningEpsilon;
            !cb && Math.abs(this.cameraDirection.x) < sb && Math.abs(this.cameraDirection.y) < sb && Math.abs(this.cameraDirection.z) < sb && (this.cameraDirection.I6(0), bb.resetPanVelocity());
            const kb = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Wb = this._decideIfNeedsToMove(),
              ab = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.ssb(this.rotation), this._deferredPositionUpdate.ssb(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.ssb(this.rotationQuaternion), Wb && this._updatePosition(), ab) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * kb, this._deferredRotationUpdate.y += this.cameraRotation.y * kb, !this.noRotationConstraint) {
                const bb = 1.570796;
                this._deferredRotationUpdate.x > bb && (this._deferredRotationUpdate.x = bb), this._deferredRotationUpdate.x < -bb && (this._deferredRotationUpdate.x = -bb)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.ssb(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Tb.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.ssb(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.I6(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Tb.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Tb.p.TransformNormalToRef(Tb.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Tb.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Ib.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Tb.f.FromEulerVectorToRef(this.rotation, mb), Ib.d.Y.rotateByQuaternionToRef(mb, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(bb, cb, sb) {
            if (this.EY().useRightHandedSystem ? Tb.e.LookAtRHToRef(bb, cb, sb, this._viewMatrix) : Tb.e.LookAtLHToRef(bb, cb, sb, this._viewMatrix), this.parent) {
              const bb = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(bb, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(cb, sb) {
            if (this.cameraRigMode !== ab.c.RIG_MODE_NONE) {
              const sb = new bb(cb, this.position.clone(), this.EY());
              return sb.isRigCamera = !0, sb.rigParent = this, this.cameraRigMode === ab.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Tb.f), sb._cameraRigParams = {}, sb.rotationQuaternion = new Tb.f), sb.mode = this.mode, sb.orthoLeft = this.orthoLeft, sb.orthoRight = this.orthoRight, sb.orthoTop = this.orthoTop, sb.orthoBottom = this.orthoBottom, sb
            }
            return null
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              cb = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case ab.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ab.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ab.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case ab.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ab.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const sb = this.cameraRigMode === ab.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  kb = this.cameraRigMode === ab.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * sb, bb), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * kb, cb);
                break
              }
              case ab.c.RIG_MODE_VR:
                bb.rotationQuaternion && cb.rotationQuaternion && this.rotationQuaternion ? (bb.rotationQuaternion.ssb(this.rotationQuaternion), cb.rotationQuaternion.ssb(this.rotationQuaternion)) : (bb.rotation.ssb(this.rotation), cb.rotation.ssb(this.rotation)), bb.position.ssb(this.position), cb.position.ssb(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(cb, sb) {
            this.getTarget().subtractToRef(this.position, bb._TargetFocalPoint), bb._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const kb = bb._TargetFocalPoint.addInPlace(this.position);
            Tb.e.TranslationToRef(-kb.x, -kb.y, -kb.z, bb._TargetTransformMatrix), bb._TargetTransformMatrix.multiplyToRef(Tb.e.RotationAxis(sb.upVector, cb), bb._RigCamTransformMatrix), Tb.e.TranslationToRef(kb.x, kb.y, kb.z, bb._TargetTransformMatrix), bb._RigCamTransformMatrix.multiplyToRef(bb._TargetTransformMatrix, bb._RigCamTransformMatrix), Tb.p.TransformCoordinatesToRef(this.position, bb._RigCamTransformMatrix, sb.position), sb.setTarget(kb)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mb[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.C)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.v)("lockedTargetId")], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "updateUpVectorFromRotation" in bb,
              get: bb => bb.updateUpVectorFromRotation,
              set: (bb, cb) => {
                bb.updateUpVectorFromRotation = cb
              }
            },
            metadata: ab
          }, lb, Qb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotation" in bb,
              get: bb => bb.rotation,
              set: (bb, cb) => {
                bb.rotation = cb
              }
            },
            metadata: ab
          }, eb, Cb), (0, kb.j)(null, null, Hb, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: bb => "speed" in bb,
              get: bb => bb.speed,
              set: (bb, cb) => {
                bb.speed = cb
              }
            },
            metadata: ab
          }, Nb, Vb), (0, kb.j)(null, null, fb, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "lockedTarget" in bb,
              get: bb => bb.lockedTarget,
              set: (bb, cb) => {
                bb.lockedTarget = cb
              }
            },
            metadata: ab
          }, Lb, ub), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb._RigCamTransformMatrix = new Tb.e, bb._TargetTransformMatrix = new Tb.e, bb._TargetFocalPoint = new Tb.p, bb
      })(),
      Qb = !1;

    function eb() {
      Qb || (Qb = !0, Hb.c.AddNodeConstructor("TargetCamera", ((bb, cb) => () => new lb(bb, Tb.p.Zero(), cb))))
    }
  },
  39365: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(39311);
    let Wb = !1;

    function ab() {
      Wb || (Wb = !0, kb.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, kb.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, kb.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, kb.b.prototype.getAspectRatio = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = bb.viewport;
        return this.getRenderWidth(cb) * sb.width / (this.getRenderHeight(cb) * sb.height)
      }, kb.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, kb.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39459: (bb, cb, sb) => {
    var kb = sb(39311),
      Wb = sb(39466);
    let ab = !1;
    ab || (ab = !0, (0, Wb.o)(), kb.b.prototype._loadFileAsync = async function(bb, cb, sb) {
      return await new Promise(((kb, Wb) => {
        this._loadFile(bb, (bb => {
          kb(bb)
        }), void 0, cb, sb, ((bb, cb) => {
          Wb(cb)
        }))
      }))
    })
  },
  39456: (bb, cb, sb) => {
    (0, sb(39371).b)()
  },
  39371: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(39311);
    let Wb = !1;

    function ab() {
      Wb || (Wb = !0, kb.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, kb.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, kb.b.prototype.createRenderPassId = function(bb) {
        const cb = ++kb.b._RenderPassIdCounter;
        return this._renderPassNames[cb] = bb ?? "NONAME", cb
      }, kb.b.prototype.releaseRenderPassId = function(bb) {
        this._renderPassNames[bb] = void 0;
        for (let cb = 0; cb < this.scenes.length; ++cb) {
          const sb = this.scenes[cb];
          for (let cb = 0; cb < sb.meshes.length; ++cb) {
            const kb = sb.meshes[cb];
            if (kb._releaseRenderPassId(bb), kb.XV)
              for (let cb = 0; cb < kb.XV.length; ++cb) {
                kb.XV[cb]._removeDrawWrapper(bb)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(bb)
      })
    }
  },
  39505: (bb, cb, sb) => {
    var kb = sb(39514),
      Wb = sb(39311);
    let ab = !1;
    ab || (ab = !0, Wb.b.GetCompatibleTextureLoader = kb.b)
  },
  39373: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(39251);
    let Wb = !1;

    function ab() {
      Wb || (Wb = !0, kb.ThinEngine.prototype.setAlphaMode = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[sb] === bb) {
          if (!cb) {
            const cb = 0 === bb;
            this.depthCullingState.depthMask !== cb && (this.depthCullingState.depthMask = cb)
          }
          return
        }
        const kb = 0 === bb;
        this._alphaState.setAlphaBlend(!kb, sb), this._alphaState.setAlphaMode(bb, sb), cb || (this.depthCullingState.depthMask = kb), this._alphaMode[sb] = bb
      })
    }
  },
  39386: (bb, cb, sb) => {
    var kb = sb(39241),
      Wb = sb(38284),
      ab = sb(39251),
      Tb = sb(39395),
      Ub = sb(39353);
    class Ib extends Tb.e {
      setDepthStencilTexture(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(bb, cb), !bb) return;
        const sb = this._engine,
          kb = this._context,
          Wb = bb._hardwareTexture;
        if (Wb && bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const cb = sb._currentFramebuffer;
          sb._bindUnboundFramebuffer(this._MSAAFramebuffer), kb.framebufferRenderbuffer(kb.FRAMEBUFFER, (0, Ub.d)(bb.format) ? kb.DEPTH_STENCIL_ATTACHMENT : kb.DEPTH_ATTACHMENT, kb.RENDERBUFFER, Wb.getMSAARenderBuffer()), sb._bindUnboundFramebuffer(cb)
        }
      }
      constructor(bb, cb, sb, kb, Wb) {
        super(bb, cb, sb, kb), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Wb
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
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const bb = this._engine,
            cb = bb._currentFramebuffer,
            sb = this._context;
          bb._bindUnboundFramebuffer(this._framebuffer), sb.framebufferRenderbuffer(sb.FRAMEBUFFER, sb.DEPTH_STENCIL_ATTACHMENT, sb.RENDERBUFFER, null), sb.framebufferRenderbuffer(sb.FRAMEBUFFER, sb.DEPTH_ATTACHMENT, sb.RENDERBUFFER, null), sb.framebufferRenderbuffer(sb.FRAMEBUFFER, sb.STENCIL_ATTACHMENT, sb.RENDERBUFFER, null), bb._bindUnboundFramebuffer(cb), sb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(bb, cb, sb, kb, Wb, ab)
      }
      shareDepth(bb) {
        super.shareDepth(bb);
        const cb = this._context,
          sb = this._depthStencilBuffer,
          kb = bb._MSAAFramebuffer || bb._framebuffer,
          Wb = this._engine;
        bb._depthStencilBuffer && bb._depthStencilBuffer !== sb && cb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = sb;
        const ab = bb._generateStencilBuffer ? cb.DEPTH_STENCIL_ATTACHMENT : cb.DEPTH_ATTACHMENT;
        Wb._bindUnboundFramebuffer(kb), cb.framebufferRenderbuffer(cb.FRAMEBUFFER, ab, cb.RENDERBUFFER, sb), Wb._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wb = bb._hardwareTexture;
        if (!Wb) return;
        const ab = this._framebuffer,
          Tb = this._engine,
          Ub = Tb._currentFramebuffer;
        let Ib;
        if (Tb._bindUnboundFramebuffer(ab), Tb.gl > 1) {
          const ab = this._context;
          Ib = ab["COLOR_ATTACHMENT" + cb], bb.is2DArray || bb.is3D ? (sb = sb ?? this.layerIndices?.[cb] ?? 0, ab.framebufferTextureLayer(ab.FRAMEBUFFER, Ib, Wb.underlyingResource, kb, sb)) : bb.isCube ? (sb = sb ?? this.faceIndices?.[cb] ?? 0, ab.framebufferTexture2D(ab.FRAMEBUFFER, Ib, ab.TEXTURE_CUBE_MAP_POSITIVE_X + sb, Wb.underlyingResource, kb)) : ab.framebufferTexture2D(ab.FRAMEBUFFER, Ib, ab.TEXTURE_2D, Wb.underlyingResource, kb)
        } else {
          const bb = this._context;
          Ib = bb["COLOR_ATTACHMENT" + cb + "_WEBGL"];
          const ab = void 0 !== sb ? bb.TEXTURE_CUBE_MAP_POSITIVE_X + sb : bb.TEXTURE_2D;
          bb.framebufferTexture2D(bb.FRAMEBUFFER, Ib, ab, Wb.underlyingResource, kb)
        }
        if (bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const bb = this._context;
          Tb._bindUnboundFramebuffer(this._MSAAFramebuffer), bb.framebufferRenderbuffer(bb.FRAMEBUFFER, Ib, bb.RENDERBUFFER, Wb.getMSAARenderBuffer())
        }
        Tb._bindUnboundFramebuffer(Ub)
      }
      setTexture(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(bb, cb, sb), this._bindTextureRenderTarget(bb, cb)
      }
      setLayerAndFaceIndices(bb, cb) {
        if (super.setLayerAndFaceIndices(bb, cb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const sb = this._attachments?.length ?? this.textures.length;
        for (let kb = 0; kb < sb; kb++) {
          const bb = this.textures[kb];
          bb && (bb.is2DArray || bb.is3D ? this._bindTextureRenderTarget(bb, kb, this.layerIndices[kb]) : bb.isCube ? this._bindTextureRenderTarget(bb, kb, this.faceIndices[kb]) : this._bindTextureRenderTarget(bb, kb))
        }
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(bb, cb, sb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const kb = this.textures[bb];
        kb.is2DArray || kb.is3D ? this._bindTextureRenderTarget(this.textures[bb], bb, this.layerIndices[bb]) : kb.isCube && this._bindTextureRenderTarget(this.textures[bb], bb, this.faceIndices[bb])
      }
      resolveMSAATextures() {
        const bb = this._engine,
          cb = bb._currentFramebuffer;
        bb._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), bb._bindUnboundFramebuffer(cb)
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const cb = this._context;
        bb || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (cb.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (cb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (cb.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(bb)
      }
    }
    let Hb = !1;
    Hb || (Hb = !0, ab.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(bb, cb, sb) {
      const kb = new Ib(bb, cb, sb, this, this._gl);
      return this._renderTargetWrapperCache.push(kb), kb
    }, ab.ThinEngine.prototype.createRenderTargetTexture = function(bb, cb) {
      const sb = this._createHardwareRenderTargetWrapper(!1, !1, bb);
      let kb, Wb, ab = !0,
        Tb = !1,
        Ub = !1,
        Ib = 1;
      void 0 !== cb && "object" === typeof cb && (ab = cb.generateDepthBuffer ?? !0, Tb = !!cb.generateStencilBuffer, Ub = !!cb.noColorAttachment, kb = cb.colorAttachment, Ib = cb.samples ?? 1, Wb = cb.label);
      const Hb = kb || (Ub ? null : this._createInternalTexture(bb, cb, !0, 5)),
        fb = bb.width || bb,
        Mb = bb.height || bb,
        Xb = this._currentFramebuffer,
        nb = this._gl,
        mb = nb.createFramebuffer();
      if (this._bindUnboundFramebuffer(mb), sb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Tb, ab, fb, Mb), !Hb || Hb.is2DArray || Hb.is3D || nb.framebufferTexture2D(nb.FRAMEBUFFER, nb.COLOR_ATTACHMENT0, nb.TEXTURE_2D, Hb._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Xb), sb.label = Wb ?? "RenderTargetWrapper", sb._framebuffer = mb, sb._generateDepthBuffer = ab, sb._generateStencilBuffer = Tb, sb.setTextures(Hb), kb) {
        if (sb._samples = kb.samples, kb.samples > 1) {
          const bb = kb._hardwareTexture.getMSAARenderBuffer(0);
          sb._MSAAFramebuffer = nb.createFramebuffer(), this._bindUnboundFramebuffer(sb._MSAAFramebuffer), nb.framebufferRenderbuffer(nb.FRAMEBUFFER, nb.COLOR_ATTACHMENT0, nb.RENDERBUFFER, bb), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(sb, Ib);
      return sb
    }, ab.ThinEngine.prototype._createDepthStencilTexture = function(bb, cb, sb) {
      const ab = this._gl,
        Tb = bb.layers || 0,
        Ib = bb.depth || 0;
      let Hb = ab.TEXTURE_2D;
      0 !== Tb ? Hb = ab.TEXTURE_2D_ARRAY : 0 !== Ib && (Hb = ab.TEXTURE_3D);
      const fb = new kb.b(this, 12);
      if (fb.label = cb.label, !this._caps.depthTextureExtension) return Wb.c.Error("Depth texture is not supported by your browser or hardware."), fb;
      const Mb = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...cb
      };
      if (this._bindTextureDirectly(Hb, fb, !0), this._setupDepthStencilTexture(fb, bb, 0 !== Mb.comparisonFunction && Mb.bilinearFiltering, Mb.comparisonFunction, Mb.samples), void 0 !== Mb.depthTextureFormat) {
        if (15 !== Mb.depthTextureFormat && 16 !== Mb.depthTextureFormat && 17 !== Mb.depthTextureFormat && 13 !== Mb.depthTextureFormat && 14 !== Mb.depthTextureFormat && 18 !== Mb.depthTextureFormat) return Wb.c.Error(`Depth texture ${Mb.depthTextureFormat} format is not supported.`), fb;
        fb.format = Mb.depthTextureFormat
      } else fb.format = Mb.generateStencil ? 13 : 16;
      const Xb = (0, Ub.d)(fb.format),
        nb = this._getWebGLTextureTypeFromDepthTextureFormat(fb.format),
        mb = Xb ? ab.DEPTH_STENCIL : ab.DEPTH_COMPONENT,
        lb = this._getInternalFormatFromDepthTextureFormat(fb.format, !0, Xb);
      return fb.is2DArray ? ab.texImage3D(Hb, 0, lb, fb.width, fb.height, Tb, 0, mb, nb, null) : fb.is3D ? ab.texImage3D(Hb, 0, lb, fb.width, fb.height, Ib, 0, mb, nb, null) : ab.texImage2D(Hb, 0, lb, fb.width, fb.height, 0, mb, nb, null), this._bindTextureDirectly(Hb, null), this._internalTexturesCache.push(fb), sb._depthStencilBuffer && (ab.deleteRenderbuffer(sb._depthStencilBuffer), sb._depthStencilBuffer = null), this._bindUnboundFramebuffer(sb._MSAAFramebuffer ?? sb._framebuffer), sb._generateStencilBuffer = Xb, sb._depthStencilTextureWithStencil = Xb, sb._depthStencilBuffer = this._setupFramebufferDepthAttachments(sb._generateStencilBuffer, sb._generateDepthBuffer, sb.width, sb.height, sb.samples, fb.format), this._bindUnboundFramebuffer(null), fb
    }, ab.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(bb, cb) {
      if (this.gl < 2 || !bb) return 1;
      if (bb.samples === cb) return cb;
      const sb = this._gl;
      cb = Math.min(cb, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (sb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (sb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
      const kb = bb.texture?._hardwareTexture;
      if (kb?.releaseMSAARenderBuffers(), bb.texture && cb > 1 && "function" === typeof sb.renderbufferStorageMultisample) {
        const Wb = sb.createFramebuffer();
        if (!Wb) throw new Error("Unable to create multi sampled framebuffer");
        bb._MSAAFramebuffer = Wb, this._bindUnboundFramebuffer(bb._MSAAFramebuffer);
        const ab = this._createRenderBuffer(bb.texture.width, bb.texture.height, cb, -1, this._getRGBABufferInternalSizedFormat(bb.texture.type, bb.texture.format, bb.texture._useSRGBBuffer), sb.COLOR_ATTACHMENT0, !1);
        if (!ab) throw new Error("Unable to create multi sampled framebuffer");
        kb?.addMSAARenderBuffer(ab)
      }
      this._bindUnboundFramebuffer(bb._MSAAFramebuffer ?? bb._framebuffer), bb.texture && (bb.texture.samples = cb), bb._samples = cb;
      const Wb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
      return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, cb, Wb), this._bindUnboundFramebuffer(null), cb
    }, ab.ThinEngine.prototype._setupDepthStencilTexture = function(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const ab = cb.width ?? cb,
        Tb = cb.height ?? cb,
        Ub = cb.layers || 0,
        Ib = cb.depth || 0;
      bb.baseWidth = ab, bb.baseHeight = Tb, bb.width = ab, bb.height = Tb, bb.is2DArray = Ub > 0, bb.depth = Ub || Ib, bb.isReady = !0, bb.samples = Wb, bb.generateMipMaps = !1, bb.samplingMode = sb ? 2 : 1, bb.type = 0, bb._comparisonFunction = kb;
      const Hb = this._gl,
        fb = this._getTextureTarget(bb),
        Mb = this._getSamplingParameters(bb.samplingMode, !1);
      Hb.texParameteri(fb, Hb.TEXTURE_MAG_FILTER, Mb.mag), Hb.texParameteri(fb, Hb.TEXTURE_MIN_FILTER, Mb.min), Hb.texParameteri(fb, Hb.TEXTURE_WRAP_S, Hb.CLAMP_TO_EDGE), Hb.texParameteri(fb, Hb.TEXTURE_WRAP_T, Hb.CLAMP_TO_EDGE), this.gl > 1 && (0 === kb ? (Hb.texParameteri(fb, Hb.TEXTURE_COMPARE_FUNC, 515), Hb.texParameteri(fb, Hb.TEXTURE_COMPARE_MODE, Hb.NONE)) : (Hb.texParameteri(fb, Hb.TEXTURE_COMPARE_FUNC, kb), Hb.texParameteri(fb, Hb.TEXTURE_COMPARE_MODE, Hb.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39232: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c
    });
    var kb = sb(39239);
    (0, sb(39373).b)();
    var Wb = sb(39251);
    let ab = !1;
    ! function() {
      if (ab) return;
      ab = !0;
      const bb = new WeakMap,
        cb = new WeakMap,
        sb = new WeakMap,
        kb = new WeakMap;
      Wb.ThinEngine.prototype.getAlphaToCoverage = function() {
        return bb.get(this) ?? !1
      }, Wb.ThinEngine.prototype.setAlphaToCoverage = function(sb) {
        (bb.get(this) !== sb || this._gl && cb.get(this) !== this._gl) && (bb.set(this, sb), this._gl && (sb ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), cb.set(this, this._gl)))
      }, Object.defineProperty(Wb.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (kb.get(this) !== this._gl && (sb.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), kb.set(this, this._gl)), sb.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Tb = sb(39241),
      Ub = sb(38284),
      Ib = sb(39337);
    let Hb = !1;
    ! function() {
      function bb(bb, cb, sb, kb) {
        let Wb, ab = 1;
        1 === kb ? Wb = new Float32Array(cb * sb * 4) : 2 === kb ? (Wb = new Uint16Array(cb * sb * 4), ab = 15360) : Wb = 7 === kb ? new Uint32Array(cb * sb * 4) : new Uint8Array(cb * sb * 4);
        for (let Tb = 0; Tb < cb; Tb++)
          for (let kb = 0; kb < sb; kb++) {
            const sb = 3 * (kb * cb + Tb),
              Ub = 4 * (kb * cb + Tb);
            Wb[Ub + 0] = bb[sb + 0], Wb[Ub + 1] = bb[sb + 1], Wb[Ub + 2] = bb[sb + 2], Wb[Ub + 3] = ab
          }
        return Wb
      }

      function cb(bb) {
        return function(cb, sb, kb, Wb, ab, Ub, Ib, Hb) {
          let fb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Mb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Xb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            nb = bb ? 10 : 11,
            mb = new Tb.b(this, nb);
          mb.baseWidth = sb, mb.baseHeight = kb, mb.baseDepth = Wb, mb.width = sb, mb.height = kb, mb.depth = Wb, mb.format = ab, mb.type = Mb, mb.generateMipMaps = Ub, mb.samplingMode = Hb, bb ? mb.is3D = !0 : mb.is2DArray = !0, this._doNotHandleContextLost || (mb._bufferView = cb), bb ? this.updateRawTexture3D(mb, cb, ab, Ib, fb, Mb) : this.updateRawTexture2DArray(mb, cb, ab, Ib, fb, Mb), this._bindTextureDirectly(Xb, mb, !0);
          const lb = this._getSamplingParameters(Hb, Ub);
          return this._gl.texParameteri(Xb, this._gl.TEXTURE_MAG_FILTER, lb.mag), this._gl.texParameteri(Xb, this._gl.TEXTURE_MIN_FILTER, lb.min), Ub && this._gl.generateMipmap(Xb), this._bindTextureDirectly(Xb, null), this._internalTexturesCache.push(mb), mb
        }
      }

      function sb(bb) {
        return function(cb, sb, kb, Wb) {
          let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Ub = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Ib = this._getWebGLTextureType(Tb),
            Hb = this._getInternalFormat(kb),
            fb = this._getRGBABufferInternalSizedFormat(Tb, kb);
          this._bindTextureDirectly(Ub, cb, !0), this._unpackFlipY(void 0 === Wb || !!Wb), this._doNotHandleContextLost || (cb._bufferView = sb, cb.format = kb, cb.invertY = Wb, cb._compression = ab), cb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ab && sb ? this._gl.compressedTexImage3D(Ub, 0, this.getCaps().s3tc[ab], cb.width, cb.height, cb.depth, 0, sb) : this._gl.texImage3D(Ub, 0, fb, cb.width, cb.height, cb.depth, 0, Hb, Ib, sb), cb.generateMipMaps && this._gl.generateMipmap(Ub), this._bindTextureDirectly(Ub, null), cb.isReady = !0
        }
      }
      Hb || (Hb = !0, Wb.ThinEngine.prototype.updateRawTexture = function(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!bb) return;
        const Ub = this._getRGBABufferInternalSizedFormat(ab, sb, Tb),
          Ib = this._getInternalFormat(sb),
          Hb = this._getWebGLTextureType(ab);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === kb || !!kb), this._doNotHandleContextLost || (bb._bufferView = cb, bb.format = sb, bb.type = ab, bb.invertY = kb, bb._compression = Wb), bb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Wb && cb ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Wb], bb.width, bb.height, 0, cb) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Ub, bb.width, bb.height, 0, Ib, Hb, cb), bb.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), bb.isReady = !0
      }, Wb.ThinEngine.prototype.createRawTexture = function(bb, cb, sb, kb, Wb, ab, Ub) {
        let Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          fb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Mb = new Tb.b(this, 3);
        Mb.baseWidth = cb, Mb.baseHeight = sb, Mb.width = cb, Mb.height = sb, Mb.format = kb, Mb.generateMipMaps = Wb, Mb.samplingMode = Ub, Mb.invertY = ab, Mb._compression = Ib, Mb.type = Hb, Mb._useSRGBBuffer = this._getUseSRGBBuffer(fb, !Wb), this._doNotHandleContextLost || (Mb._bufferView = bb), this.updateRawTexture(Mb, bb, kb, ab, Ib, Hb, Mb._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Mb, !0);
        const Xb = this._getSamplingParameters(Ub, Wb);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Xb.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Xb.min), Wb && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Mb), Mb
      }, Wb.ThinEngine.prototype.createRawCubeTexture = function(bb, cb, sb, kb, Wb, ab, Hb) {
        let fb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Mb = this._gl,
          Xb = new Tb.b(this, 8);
        Xb.isCube = !0, Xb.format = sb, Xb.type = kb, this._doNotHandleContextLost || (Xb._bufferViewArray = bb);
        const nb = this._getWebGLTextureType(kb);
        let mb = this._getInternalFormat(sb);
        mb === Mb.RGB && (mb = Mb.RGBA), nb !== Mb.FLOAT || this._caps.textureFloatLinearFiltering ? nb !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? nb !== Mb.FLOAT || this._caps.textureFloatRender ? nb !== Mb.HALF_FLOAT || this._caps.colorBufferFloat || (Wb = !1, Ub.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Wb = !1, Ub.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Wb = !1, Hb = 1, Ub.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Wb = !1, Hb = 1, Ub.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const lb = cb,
          Qb = lb;
        Xb.width = lb, Xb.height = Qb, Xb.invertY = ab, Xb._compression = fb;
        if (!this.needPOTTextures || (0, Ib.h)(Xb.width) && (0, Ib.h)(Xb.height) || (Wb = !1), bb) this.updateRawCubeTexture(Xb, bb, sb, kb, ab, fb);
        else {
          const bb = this._getRGBABufferInternalSizedFormat(kb),
            cb = 0;
          this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, Xb, !0);
          for (let sb = 0; sb < 6; sb++) fb ? Mb.compressedTexImage2D(Mb.TEXTURE_CUBE_MAP_POSITIVE_X + sb, cb, this.getCaps().s3tc[fb], Xb.width, Xb.height, 0, void 0) : Mb.texImage2D(Mb.TEXTURE_CUBE_MAP_POSITIVE_X + sb, cb, bb, Xb.width, Xb.height, 0, mb, nb, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Xb, !0), bb && Wb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const eb = this._getSamplingParameters(Hb, Wb);
        return Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_MAG_FILTER, eb.mag), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_MIN_FILTER, eb.min), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_WRAP_S, Mb.CLAMP_TO_EDGE), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_WRAP_T, Mb.CLAMP_TO_EDGE), this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, null), Xb.generateMipMaps = Wb, Xb.samplingMode = Hb, Xb.isReady = !0, Xb
      }, Wb.ThinEngine.prototype.updateRawCubeTexture = function(cb, sb, kb, Wb, ab) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        cb._bufferViewArray = sb, cb.format = kb, cb.type = Wb, cb.invertY = ab, cb._compression = Tb;
        const Hb = this._gl,
          fb = this._getWebGLTextureType(Wb);
        let Mb = this._getInternalFormat(kb);
        const Xb = this._getRGBABufferInternalSizedFormat(Wb);
        let nb = !1;
        Mb === Hb.RGB && (Mb = Hb.RGBA, nb = !0), this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, cb, !0), this._unpackFlipY(void 0 === ab || !!ab), cb.width % 4 !== 0 && Hb.pixelStorei(Hb.UNPACK_ALIGNMENT, 1);
        for (let Ib = 0; Ib < 6; Ib++) {
          let kb = sb[Ib];
          Tb ? Hb.compressedTexImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Ib, Ub, this.getCaps().s3tc[Tb], cb.width, cb.height, 0, kb) : (nb && (kb = bb(kb, cb.width, cb.height, Wb)), Hb.texImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Ib, Ub, Xb, cb.width, cb.height, 0, Mb, fb, kb))
        }(!this.needPOTTextures || (0, Ib.h)(cb.width) && (0, Ib.h)(cb.height)) && cb.generateMipMaps && 0 === Ub && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), cb.isReady = !0
      }, Wb.ThinEngine.prototype.createRawCubeTextureFromUrl = function(cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        let Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          fb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Mb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Xb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const nb = this._gl,
          mb = this.createRawCubeTexture(null, kb, Wb, ab, !Tb, Xb, Mb, null);
        sb?.addPendingData(mb), mb.url = cb, mb.isReady = !1, this._internalTexturesCache.push(mb);
        const lb = (bb, cb) => {
            sb?.removePendingData(mb), fb && fb(bb ? bb.status + " " + bb.statusText : "Failed to parse texture data", cb)
          },
          Qb = async cb => {
            if (!mb._hardwareTexture) return;
            const kb = Ub(cb);
            if (!kb) return;
            const Tb = kb instanceof Promise ? await kb : kb,
              fb = mb.width;
            if (Ib) {
              const cb = this._getWebGLTextureType(ab);
              let sb = this._getInternalFormat(Wb);
              const kb = this._getRGBABufferInternalSizedFormat(ab);
              let Ub = !1;
              sb === nb.RGB && (sb = nb.RGBA, Ub = !0), this._bindTextureDirectly(nb.TEXTURE_CUBE_MAP, mb, !0), this._unpackFlipY(!1);
              const Hb = Ib(Tb);
              for (let Wb = 0; Wb < Hb.length; Wb++) {
                const Tb = fb >> Wb;
                for (let Ib = 0; Ib < 6; Ib++) {
                  let fb = Hb[Wb][Ib];
                  Ub && (fb = bb(fb, Tb, Tb, ab)), nb.texImage2D(Ib, Wb, kb, Tb, Tb, 0, sb, cb, fb)
                }
              }
              this._bindTextureDirectly(nb.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(mb, Tb, Wb, ab, Xb);
            mb.isReady = !0, sb?.removePendingData(mb), mb.onLoadedObservable.notifyObservers(mb), mb.onLoadedObservable.clear(), Hb && Hb()
          };
        return this._loadFile(cb, (bb => {
          Qb(bb).catch((bb => {
            lb(void 0, bb)
          }))
        }), void 0, sb?.offlineProvider, !0, lb), mb
      }, Wb.ThinEngine.prototype.createRawTexture2DArray = cb(!1), Wb.ThinEngine.prototype.createRawTexture3D = cb(!0), Wb.ThinEngine.prototype.updateRawTexture2DArray = sb(!1), Wb.ThinEngine.prototype.updateRawTexture3D = sb(!0))
    }();
    var fb = sb(39287);
    let Mb = !1;
    Mb || (Mb = !0, Wb.ThinEngine.prototype._readTexturePixelsSync = function(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Tb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Mb = this._gl;
      if (!Mb) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const bb = Mb.createFramebuffer();
        if (!bb) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = bb
      }
      Mb.bindFramebuffer(Mb.FRAMEBUFFER, this._dummyFramebuffer), kb > -1 && (bb.is2DArray || bb.is3D) ? Mb.framebufferTextureLayer(Mb.FRAMEBUFFER, Mb.COLOR_ATTACHMENT0, bb._hardwareTexture?.underlyingResource, Wb, kb) : kb > -1 ? Mb.framebufferTexture2D(Mb.FRAMEBUFFER, Mb.COLOR_ATTACHMENT0, Mb.TEXTURE_CUBE_MAP_POSITIVE_X + kb, bb._hardwareTexture?.underlyingResource, Wb) : Mb.framebufferTexture2D(Mb.FRAMEBUFFER, Mb.COLOR_ATTACHMENT0, Mb.TEXTURE_2D, bb._hardwareTexture?.underlyingResource, Wb);
      let Xb = void 0 !== bb.type ? this._getWebGLTextureType(bb.type) : Mb.UNSIGNED_BYTE;
      return Ub ? ab || (ab = (0, fb.q)(bb.type, 4 * cb * sb)) : Xb === Mb.UNSIGNED_BYTE ? (ab || (ab = new Uint8Array(4 * cb * sb)), Xb = Mb.UNSIGNED_BYTE) : (ab || (ab = new Float32Array(4 * cb * sb)), Xb = Mb.FLOAT), Tb && this.flushFramebuffer(), Mb.readPixels(Ib, Hb, cb, sb, Mb.RGBA, Xb, ab), Mb.bindFramebuffer(Mb.FRAMEBUFFER, this._currentFramebuffer), ab
    }, Wb.ThinEngine.prototype._readTexturePixels = function(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Tb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb))
    }), (0, sb(39377).c)();
    let Xb = !1;
    Xb || (Xb = !0, Wb.ThinEngine.prototype._createDepthStencilCubeTexture = function(bb, cb) {
      const sb = new Tb.b(this, 12);
      if (sb.isCube = !0, 1 === this.gl) return Ub.c.Error("Depth cube texture is not supported by WebGL 1."), sb;
      const kb = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...cb
        },
        Wb = this._gl;
      this._bindTextureDirectly(Wb.TEXTURE_CUBE_MAP, sb, !0), this._setupDepthStencilTexture(sb, bb, kb.bilinearFiltering, kb.comparisonFunction);
      for (let ab = 0; ab < 6; ab++) kb.generateStencil ? Wb.texImage2D(Wb.TEXTURE_CUBE_MAP_POSITIVE_X + ab, 0, Wb.DEPTH24_STENCIL8, bb, bb, 0, Wb.DEPTH_STENCIL, Wb.UNSIGNED_INT_24_8, null) : Wb.texImage2D(Wb.TEXTURE_CUBE_MAP_POSITIVE_X + ab, 0, Wb.DEPTH_COMPONENT24, bb, bb, 0, Wb.DEPTH_COMPONENT, Wb.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Wb.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(sb), sb
    }, Wb.ThinEngine.prototype._setCubeMapTextureParams = function(bb, cb, sb) {
      const kb = this._gl;
      kb.texParameteri(kb.TEXTURE_CUBE_MAP, kb.TEXTURE_MAG_FILTER, kb.LINEAR), kb.texParameteri(kb.TEXTURE_CUBE_MAP, kb.TEXTURE_MIN_FILTER, cb ? kb.LINEAR_MIPMAP_LINEAR : kb.LINEAR), kb.texParameteri(kb.TEXTURE_CUBE_MAP, kb.TEXTURE_WRAP_S, kb.CLAMP_TO_EDGE), kb.texParameteri(kb.TEXTURE_CUBE_MAP, kb.TEXTURE_WRAP_T, kb.CLAMP_TO_EDGE), bb.samplingMode = cb ? 3 : 2, cb && this.getCaps().textureMaxLevel && void 0 !== sb && sb > 0 && (kb.texParameteri(kb.TEXTURE_CUBE_MAP, kb.TEXTURE_MAX_LEVEL, sb), bb._maxLodLevel = sb), this._bindTextureDirectly(kb.TEXTURE_CUBE_MAP, null)
    }, Wb.ThinEngine.prototype.createCubeTexture = function(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Tb = arguments.length > 6 ? arguments[6] : void 0,
        Hb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        fb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Mb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Xb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        nb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        mb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        lb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Qb = this._gl;
      return this.createCubeTextureBase(bb, cb, sb, !!kb, Wb, ab, Tb, Hb, fb, Mb, Xb, nb, (bb => this._bindTextureDirectly(Qb.TEXTURE_CUBE_MAP, bb, !0)), ((bb, cb) => {
        const sb = this.needPOTTextures ? (0, Ib.f)(cb[0].width, this._caps.maxCubemapTextureSize) : cb[0].width,
          ab = sb,
          Hb = [Qb.TEXTURE_CUBE_MAP_POSITIVE_X, Qb.TEXTURE_CUBE_MAP_POSITIVE_Y, Qb.TEXTURE_CUBE_MAP_POSITIVE_Z, Qb.TEXTURE_CUBE_MAP_NEGATIVE_X, Qb.TEXTURE_CUBE_MAP_NEGATIVE_Y, Qb.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Qb.TEXTURE_CUBE_MAP, bb, !0), this._unpackFlipY(!1);
        const fb = Tb ? this._getInternalFormat(Tb, bb._useSRGBBuffer) : bb._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Qb.RGBA;
        let Mb = Tb ? this._getInternalFormat(Tb) : Qb.RGBA;
        bb._useSRGBBuffer && 1 === this.gl && (Mb = fb);
        for (let kb = 0; kb < Hb.length; kb++)
          if (cb[kb].width !== sb || cb[kb].height !== ab) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Ub.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = sb, this._workingCanvas.height = ab, this._workingContext.drawImage(cb[kb], 0, 0, cb[kb].width, cb[kb].height, 0, 0, sb, ab), Qb.texImage2D(Hb[kb], 0, fb, Mb, Qb.UNSIGNED_BYTE, this._workingCanvas)
          } else Qb.texImage2D(Hb[kb], 0, fb, Mb, Qb.UNSIGNED_BYTE, cb[kb]);
        kb || Qb.generateMipmap(Qb.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(bb, !kb), bb.width = sb, bb.height = ab, bb.isReady = !0, Tb && (bb.format = Tb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Wb && Wb()
      }), !!mb, lb)
    }, Wb.ThinEngine.prototype.generateMipMapsForCubemap = function(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb.generateMipMaps) {
        const sb = this._gl;
        this._bindTextureDirectly(sb.TEXTURE_CUBE_MAP, bb, !0), sb.generateMipmap(sb.TEXTURE_CUBE_MAP), cb && this._bindTextureDirectly(sb.TEXTURE_CUBE_MAP, null)
      }
    });
    sb(39386);
    let nb = !1;
    nb || (nb = !0, Wb.ThinEngine.prototype.setDepthStencilTexture = function(bb, cb, sb, kb) {
      void 0 !== bb && (cb && (this._boundUniforms[bb] = cb), sb && sb.depthStencilTexture ? this._setTexture(bb, sb, !1, !0, kb) : this._setTexture(bb, null, void 0, void 0, kb))
    });
    let mb = !1;
    mb || (mb = !0, Wb.ThinEngine.prototype.createRenderTargetCubeTexture = function(bb, cb) {
      const sb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
        kb = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...cb
        };
      kb.generateStencilBuffer = kb.generateDepthBuffer && kb.generateStencilBuffer, (1 !== kb.type || this._caps.textureFloatLinearFiltering) && (2 !== kb.type || this._caps.textureHalfFloatLinearFiltering) || (kb.samplingMode = 1);
      const Wb = this._gl,
        ab = new Tb.b(this, 5);
      this._bindTextureDirectly(Wb.TEXTURE_CUBE_MAP, ab, !0);
      const Ib = this._getSamplingParameters(kb.samplingMode, kb.generateMipMaps);
      1 !== kb.type || this._caps.textureFloat || (kb.type = 0, Ub.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Wb.texParameteri(Wb.TEXTURE_CUBE_MAP, Wb.TEXTURE_MAG_FILTER, Ib.mag), Wb.texParameteri(Wb.TEXTURE_CUBE_MAP, Wb.TEXTURE_MIN_FILTER, Ib.min), Wb.texParameteri(Wb.TEXTURE_CUBE_MAP, Wb.TEXTURE_WRAP_S, Wb.CLAMP_TO_EDGE), Wb.texParameteri(Wb.TEXTURE_CUBE_MAP, Wb.TEXTURE_WRAP_T, Wb.CLAMP_TO_EDGE);
      for (let Tb = 0; Tb < 6; Tb++) Wb.texImage2D(Wb.TEXTURE_CUBE_MAP_POSITIVE_X + Tb, 0, this._getRGBABufferInternalSizedFormat(kb.type, kb.format), bb, bb, 0, this._getInternalFormat(kb.format), this._getWebGLTextureType(kb.type), null);
      const Hb = Wb.createFramebuffer();
      return this._bindUnboundFramebuffer(Hb), sb._depthStencilBuffer = this._setupFramebufferDepthAttachments(kb.generateStencilBuffer, kb.generateDepthBuffer, bb, bb), kb.generateMipMaps && Wb.generateMipmap(Wb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Wb.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), sb._framebuffer = Hb, sb._generateDepthBuffer = kb.generateDepthBuffer, sb._generateStencilBuffer = kb.generateStencilBuffer, ab.width = bb, ab.height = bb, ab.isReady = !0, ab.isCube = !0, ab.samples = 1, ab.generateMipMaps = kb.generateMipMaps, ab.samplingMode = kb.samplingMode, ab.type = kb.type, ab.format = kb.format, this._internalTexturesCache.push(ab), sb.setTextures(ab), sb
    });
    var lb = sb(39404),
      Qb = sb(39406);
    let eb = !1;
    eb || (eb = !0, Wb.ThinEngine.prototype.createPrefilteredCubeTexture = function(bb, cb, kb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Ib = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Hb = arguments.length > 6 ? arguments[6] : void 0,
        fb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Mb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Xb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(bb, cb, null, !1, (async bb => {
        if (!bb) return void(ab && ab(null));
        const Ib = bb.texture;
        if (Mb ? bb.info.sphericalPolynomial && (Ib._sphericalPolynomial = bb.info.sphericalPolynomial) : Ib._sphericalPolynomial = Ib._sphericalPolynomial ?? new lb.f, Ib._source = 9, this.getCaps().textureLOD) return void(ab && ab(Ib));
        const Hb = this._gl,
          fb = bb.width;
        if (!fb) return;
        const {
          DDSTools: Xb
        } = await sb.e(296).then((() => sb(41155))), nb = [];
        for (let sb = 0; sb < 3; sb++) {
          const ab = 1 - sb / 2,
            Mb = Wb,
            mb = Math.log2(fb) * kb + Wb,
            lb = Mb + (mb - Mb) * ab,
            eb = Math.round(Math.min(Math.max(lb, 0), mb)),
            Cb = new Tb.b(this, 2);
          if (Cb.type = Ib.type, Cb.format = Ib.format, Cb.width = Math.pow(2, Math.max(Math.log2(fb) - eb, 0)), Cb.height = Cb.width, Cb.isCube = !0, Cb._cachedWrapU = 0, Cb._cachedWrapV = 0, this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, Cb, !0), Cb.samplingMode = 2, Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MAG_FILTER, Hb.LINEAR), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MIN_FILTER, Hb.LINEAR), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_S, Hb.CLAMP_TO_EDGE), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_T, Hb.CLAMP_TO_EDGE), bb.isDDS) {
            const cb = bb.info,
              sb = bb.data;
            this._unpackFlipY(cb.isCompressed), Xb.UploadDDSLevels(this, Cb, sb, cb, !0, 6, eb)
          } else Ub.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, null);
          const Nb = new Qb.e(cb);
          Nb._isCube = !0, Nb._texture = Cb, Cb.isReady = !0, nb.push(Nb)
        }
        Ib._lodTextureHigh = nb[2], Ib._lodTextureMid = nb[1], Ib._lodTextureLow = nb[0], ab && ab(Ib)
      }), Ib, Hb, fb, Mb, kb, Wb, null, void 0, !1, Xb)
    });
    var Cb = sb(39330);
    let Nb = !1;
    Nb || (Nb = !0, Wb.ThinEngine.prototype.createUniformBuffer = function(bb, cb) {
      const sb = this._gl.createBuffer();
      if (!sb) throw new Error("Unable to create uniform buffer");
      const kb = new Cb.d(sb);
      return this.bindUniformBuffer(kb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), kb.references = 1, kb
    }, Wb.ThinEngine.prototype.createDynamicUniformBuffer = function(bb, cb) {
      const sb = this._gl.createBuffer();
      if (!sb) throw new Error("Unable to create dynamic uniform buffer");
      const kb = new Cb.d(sb);
      return this.bindUniformBuffer(kb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), kb.references = 1, kb
    }, Wb.ThinEngine.prototype.updateUniformBuffer = function(bb, cb, sb, kb) {
      this.bindUniformBuffer(bb), void 0 === sb && (sb = 0), void 0 === kb ? cb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, sb, cb) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, sb, new Float32Array(cb)) : cb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, cb.subarray(sb, sb + kb)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(cb).subarray(sb, sb + kb)), this.bindUniformBuffer(null)
    }, Wb.ThinEngine.prototype.bindUniformBuffer = function(bb) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, bb ? bb.underlyingResource : null)
    }, Wb.ThinEngine.prototype.bindUniformBufferBase = function(bb, cb, sb) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, cb, bb ? bb.underlyingResource : null)
    }, Wb.ThinEngine.prototype.bindUniformBlock = function(bb, cb, sb) {
      const kb = bb.program,
        Wb = this._gl.getUniformBlockIndex(kb, cb);
      4294967295 !== Wb && this._gl.uniformBlockBinding(kb, Wb, sb)
    });
    var Vb = sb(39278),
      Lb = sb(39311);
    let ub = !1;
    ub || (ub = !0, Lb.b.prototype.displayLoadingUI = function() {
      if (!(0, Vb.j)()) return;
      const bb = this.loadingScreen;
      bb && bb.displayLoadingUI()
    }, Lb.b.prototype.hideLoadingUI = function() {
      if (!(0, Vb.j)()) return;
      const bb = this._loadingScreen;
      bb && bb.hideLoadingUI()
    }, Object.defineProperty(Lb.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Lb.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(bb) {
        this._loadingScreen = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Lb.b.prototype, "loadingUIText", {
      set: function(bb) {
        this.loadingScreen.loadingUIText = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Lb.b.prototype, "loadingUIBackgroundColor", {
      set: function(bb) {
        this.loadingScreen.loadingUIBackgroundColor = bb
      },
      enumerable: !0,
      configurable: !0
    })), (0, sb(39365).b)();
    let Yb = !1;
    Yb || (Yb = !0, Lb.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Lb.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Lb.b.prototype.setDepthFunction = function(bb) {
      this._depthCullingState.depthFunc = bb
    }, Lb.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Lb.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Lb.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Lb.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Lb.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Lb.b.prototype.setDepthWrite = function(bb) {
      this._depthCullingState.depthMask = bb
    }, Lb.b.prototype.setAlphaConstants = function(bb, cb, sb, kb) {
      this._alphaState.setAlphaBlendConstants(bb, cb, sb, kb)
    }, Lb.b.prototype.getAlphaMode = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[bb]
    }, Lb.b.prototype.getAlphaEquation = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[bb]
    });
    let hb = !1;
    hb || (hb = !0, Lb.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Lb.b.prototype.setStencilBuffer = function(bb) {
      this._stencilState.stencilTest = bb
    }, Lb.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Lb.b.prototype.setStencilMask = function(bb) {
      this._stencilState.stencilMask = bb
    }, Lb.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Lb.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Lb.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Lb.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Lb.b.prototype.setStencilFunction = function(bb) {
      this._stencilState.stencilFunc = bb
    }, Lb.b.prototype.setStencilBackFunction = function(bb) {
      this._stencilState.stencilBackFunc = bb
    }, Lb.b.prototype.setStencilFunctionReference = function(bb) {
      this._stencilState.stencilFuncRef = bb
    }, Lb.b.prototype.setStencilFunctionMask = function(bb) {
      this._stencilState.stencilFuncMask = bb
    }, Lb.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Lb.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Lb.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Lb.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Lb.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Lb.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Lb.b.prototype.setStencilOperationFail = function(bb) {
      this._stencilState.stencilOpStencilFail = bb
    }, Lb.b.prototype.setStencilBackOperationFail = function(bb) {
      this._stencilState.stencilBackOpStencilFail = bb
    }, Lb.b.prototype.setStencilOperationDepthFail = function(bb) {
      this._stencilState.stencilOpDepthFail = bb
    }, Lb.b.prototype.setStencilBackOperationDepthFail = function(bb) {
      this._stencilState.stencilBackOpDepthFail = bb
    }, Lb.b.prototype.setStencilOperationPass = function(bb) {
      this._stencilState.stencilOpStencilDepthPass = bb
    }, Lb.b.prototype.setStencilBackOperationPass = function(bb) {
      this._stencilState.stencilBackOpStencilDepthPass = bb
    }, Lb.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Lb.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    sb(39456);
    let Jb = !1;
    Jb || (Jb = !0, Lb.b.prototype.createDepthStencilTexture = function(bb, cb, sb) {
      if (cb.isCube) {
        const sb = bb.width || bb;
        return this._createDepthStencilCubeTexture(sb, cb)
      }
      return this._createDepthStencilTexture(bb, cb, sb)
    });
    sb(39459), sb(39505);
    let gb = !1;
    gb || (gb = !0, Wb.ThinEngine.prototype.enableScissor = function(bb, cb, sb, kb) {
      const Wb = this._gl;
      Wb.enable(Wb.SCISSOR_TEST), Wb.scissor(bb, cb, sb, kb)
    }, Wb.ThinEngine.prototype.disableScissor = function() {
      const bb = this._gl;
      bb.disable(bb.SCISSOR_TEST)
    })
  },
  39239: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Lb
    });
    var kb = sb(39241),
      Wb = sb(36677),
      ab = sb(39251),
      Tb = sb(39314);
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Ib(bb)
      }
      sampleFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const cb = bb - this._lastFrameTimeMs;
            this._rollingFrameTime.add(cb)
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
    class Ib {
      constructor(bb) {
        this._samples = new Array(bb), this.reset()
      }
      add(bb) {
        let cb;
        if (this.isSaturated()) {
          const bb = this._samples[this._pos];
          cb = bb - this.average, this.average -= cb / (this._sampleCount - 1), this._m2 -= cb * (bb - this.average)
        } else this._sampleCount++;
        cb = bb - this.average, this.average += cb / this._sampleCount, this._m2 += cb * (bb - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = bb, this._pos++, this._pos %= this._samples.length
      }
      history(bb) {
        if (bb >= this._sampleCount || bb >= this._samples.length) return 0;
        const cb = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(cb - bb)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(bb) {
        const cb = this._samples.length;
        return (bb % cb + cb) % cb
      }
    }
    var Hb = sb(39330),
      fb = sb(38284),
      Mb = sb(39346),
      Xb = sb(39311),
      nb = sb(39278);

    function mb(bb) {
      const cb = function(bb) {
        if (!(0, nb.f)() || !document.body) return null;
        const cb = document.createElement("span");
        cb.textContent = "Hg", cb.style.font = bb;
        const sb = document.createElement("div");
        sb.style.display = "inline-block", sb.style.width = "1px", sb.style.height = "0px", sb.style.verticalAlign = "bottom";
        const kb = document.createElement("div");
        let Wb, ab;
        kb.style.whiteSpace = "nowrap", kb.appendChild(cb), kb.appendChild(sb), document.body.appendChild(kb);
        try {
          ab = sb.getBoundingClientRect().top - cb.getBoundingClientRect().top, sb.style.verticalAlign = "baseline", Wb = sb.getBoundingClientRect().top - cb.getBoundingClientRect().top
        } finally {
          document.body.removeChild(kb)
        }
        const Tb = {
          ascent: Wb,
          height: ab,
          descent: ab - Wb
        };
        return lb(Tb) ? Tb : null
      }(bb);
      if (cb) return cb;
      const sb = function(bb) {
        let cb = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? cb = new OffscreenCanvas(64, 64) : (0, nb.f)() && "function" === typeof document.createElement && (cb = document.createElement("canvas"), cb.width = 64, cb.height = 64);
          const sb = cb?.getContext("2d");
          if (!sb) return null;
          sb.font = bb;
          const kb = sb.measureText("Hg"),
            Wb = Number(kb.actualBoundingBoxAscent ?? kb.fontBoundingBoxAscent),
            ab = Number(kb.actualBoundingBoxDescent ?? kb.fontBoundingBoxDescent),
            Tb = {
              ascent: Wb,
              height: Wb + ab,
              descent: ab
            };
          return lb(Tb) ? Tb : null
        } catch {
          return null
        } finally {
          const bb = cb;
          "function" === typeof bb?.dispose && bb.dispose()
        }
      }(bb);
      return sb || function(bb) {
        const cb = Math.max(1, function(bb) {
            const cb = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(bb || ""));
            return cb ? Number(cb[1]) : 16
          }(bb)),
          sb = .8 * cb,
          kb = .2 * cb;
        return {
          ascent: sb,
          height: sb + kb,
          descent: kb
        }
      }(bb)
    }

    function lb(bb) {
      return Number.isFinite(bb.ascent) && Number.isFinite(bb.height) && Number.isFinite(bb.descent) && bb.height > 0
    }

    function Qb(bb) {
      if (bb.requestPointerLock) {
        const cb = bb.requestPointerLock();
        cb instanceof Promise ? cb.then((() => {
          bb.focus()
        })).catch((() => {})) : bb.focus()
      }
    }
    var eb = sb(39356),
      Cb = sb(39307),
      Nb = sb(39365),
      Vb = sb(39371);
    class Lb extends ab.ThinEngine {
      static get NpmPackage() {
        return Xb.b.NpmPackage
      }
      static get Version() {
        return Xb.b.Version
      }
      static get Instances() {
        return Wb.d.Instances
      }
      static get LastCreatedEngine() {
        return Wb.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Wb.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(bb) {
        return Xb.b.DefaultLoadingScreenFactory(bb)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Lb._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Nb.b)(), (0, Vb.b)(), super(bb, cb, sb, kb), this._performanceMonitor = new Ub, this._drawCalls = new eb.b, bb && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(bb) {
        super._sharedInit(bb),
          function(bb, cb, sb) {
            bb._onCanvasFocus = () => {
              bb.onCanvasFocusObservable.notifyObservers(bb)
            }, bb._onCanvasBlur = () => {
              bb.onCanvasBlurObservable.notifyObservers(bb)
            }, bb._onCanvasContextMenu = cb => {
              bb.disableContextMenu && cb.preventDefault()
            }, cb.addEventListener("focus", bb._onCanvasFocus), cb.addEventListener("blur", bb._onCanvasBlur), cb.addEventListener("contextmenu", bb._onCanvasContextMenu), bb._onBlur = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.disable(), bb._windowIsBackground = !0
            }, bb._onFocus = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.enable(), bb._windowIsBackground = !1
            }, bb._onCanvasPointerOut = sb => {
              document.elementFromPoint(sb.clientX, sb.clientY) !== cb && bb.onCanvasPointerOutObservable.notifyObservers(sb)
            };
            const kb = bb.getHostWindow();
            kb && "function" === typeof kb.addEventListener && (kb.addEventListener("blur", bb._onBlur), kb.addEventListener("focus", bb._onFocus)), cb.addEventListener("pointerout", bb._onCanvasPointerOut), sb.doNotHandleTouchAction || function(bb) {
              bb && bb.setAttribute && (bb.setAttribute("touch-action", "none"), bb.style.touchAction = "none", bb.style.webkitTapHighlightColor = "transparent")
            }(cb), !Xb.b.audioEngine && sb.audioEngine && Xb.b.AudioEngineFactory && (Xb.b.audioEngine = Xb.b.AudioEngineFactory(bb.getRenderingCanvas(), bb.getAudioContext(), bb.getAudioDestination())), (0, nb.f)() && (bb._onFullscreenChange = () => {
              bb.isFullscreen = !!document.fullscreenElement, bb.isFullscreen && bb._pointerLockRequested && cb && Qb(cb)
            }, document.addEventListener("fullscreenchange", bb._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", bb._onFullscreenChange, !1), bb._onPointerLockChange = () => {
              bb.isPointerLock = document.pointerLockElement === cb
            }, document.addEventListener("pointerlockchange", bb._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", bb._onPointerLockChange, !1)), bb.enableOfflineSupport = void 0 !== Xb.b.OfflineProviderFactory, bb._deterministicLockstep = !!sb.deterministicLockstep, bb._lockstepMaxSteps = sb.lockstepMaxSteps || 0, bb._timeStep = sb.timeStep || 1 / 60
          }(this, bb, this._creationOptions)
      }
      resizeImageBitmap(bb, cb, sb) {
        return function(bb, cb, sb, kb) {
          const Wb = bb.createCanvas(sb, kb).getContext("2d");
          if (!Wb) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Wb.drawImage(cb, 0, 0), Wb.getImageData(0, 0, sb, kb).data
        }(this, bb, cb, sb)
      }
      async _createImageBitmapFromSource(bb, cb) {
        return await async function(bb, cb, sb) {
          return await new Promise(((kb, Wb) => {
            const ab = new Image;
            ab.onload = () => {
              ab.decode().then((() => {
                bb.createImageBitmap(ab, sb).then((bb => {
                  kb(bb)
                }))
              }))
            }, ab.onerror = () => {
              Wb(`Error loading image ${ab.src}`)
            }, ab.src = cb
          }))
        }(this, bb, cb)
      }
      switchFullscreen(bb) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(bb)
      }
      enterFullscreen(bb) {
        this.isFullscreen || (this._pointerLockRequested = bb, this._renderingCanvas && function(bb) {
          const cb = bb.requestFullscreen || bb.webkitRequestFullscreen;
          cb && cb.call(bb)
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
      setDirectViewport(bb, cb, sb, kb) {
        const Wb = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(bb, cb, sb, kb), Wb
      }
      scissorClear(bb, cb, sb, kb, Wb) {
        this.enableScissor(bb, cb, sb, kb), this.clear(Wb, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(bb) {
        const cb = this._gl.getAttachedShaders(bb);
        return cb ? this._gl.getShaderSource(cb[0]) : null
      }
      getFragmentShaderSource(bb) {
        const cb = this._gl.getAttachedShaders(bb);
        return cb ? this._gl.getShaderSource(cb[1]) : null
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
        return mb(bb)
      }
      enterPointerlock() {
        this._renderingCanvas && Qb(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      vN() {
        this._measureFps(), super.vN()
      }
      _deletePipelineContext(bb) {
        const cb = bb;
        cb && cb.program && cb.transformFeedback && (this.deleteTransformFeedback(cb.transformFeedback), cb.transformFeedback = null), super._deletePipelineContext(bb)
      }
      createShaderProgram(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Wb = Wb || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Tb = super.createShaderProgram(bb, cb, sb, kb, Wb, ab);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Tb
      }
      _createShaderProgram(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ab = kb.createProgram();
        if (bb.program = ab, !ab) throw new Error("Unable to create program");
        if (kb.attachShader(ab, cb), kb.attachShader(ab, sb), this.gl > 1 && Wb) {
          const cb = this.createTransformFeedback();
          this.bindTransformFeedback(cb), this.setTranformFeedbackVaryings(ab, Wb), bb.transformFeedback = cb
        }
        return kb.linkProgram(ab), this.gl > 1 && Wb && this.bindTransformFeedback(null), bb.context = kb, bb.vertexShader = cb, bb.fragmentShader = sb, bb.isParallelCompiled || this._finalizePipelineContext(bb), ab
      }
      _releaseTexture(bb) {
        super._releaseTexture(bb)
      }
      _releaseRenderTargetWrapper(bb) {
        super._releaseRenderTargetWrapper(bb);
        for (const cb of this.scenes) {
          for (const sb of cb.postProcesses) sb._outputTexture === bb && (sb._outputTexture = null);
          for (const sb of cb.cameras)
            for (const cb of sb._postProcesses) cb && cb._outputTexture === bb && (cb._outputTexture = null)
        }
      }
      _rescaleTexture(bb, cb, sb, kb, Wb) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const ab = this.createRenderTargetTexture({
          width: cb.width,
          height: cb.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Lb._RescalePostProcessFactory && (this._rescalePostProcess = Lb._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Tb = () => {
              this._rescalePostProcess.onApply = function(cb) {
                cb._bindTexture("textureSampler", bb)
              };
              let Tb = sb;
              Tb || (Tb = this.scenes[this.scenes.length - 1]), Tb.postProcessManager.directRender([this._rescalePostProcess], ab, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, cb, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, kb, 0, 0, cb.width, cb.height, 0), this.unBindFramebuffer(ab), ab.dispose(), Wb && Wb()
            },
            Ub = this._rescalePostProcess.getEffect();
          Ub ? Ub.executeWhenCompiled(Tb) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((bb => {
            bb.executeWhenCompiled(Tb)
          }))
        }
      }
      wrapWebGLTexture(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Tb = new Mb.e(bb, this._gl),
          Ub = new kb.b(this, 15, !0);
        return Ub._hardwareTexture = Tb, Ub.baseWidth = Wb, Ub.baseHeight = ab, Ub.width = Wb, Ub.height = ab, Ub.isReady = !0, Ub.useMipMaps = cb, this.updateTextureSamplingMode(sb, Ub), Ub
      }
      updateWrappedWebGLTexture(bb, cb) {
        if (15 !== bb.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const kb of this._renderTargetWrapperCache)
          if (kb.textures?.includes(bb)) {
            if (kb.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (kb._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } bb._hardwareTexture = new Mb.e(cb, this._gl), bb.isReady = !0, bb._cachedCoordinatesMode = null, bb._cachedWrapU = null, bb._cachedWrapV = null, bb._cachedWrapR = null, bb._cachedAnisotropicFilteringLevel = null;
        for (const kb in this._boundTexturesCache) this._boundTexturesCache[kb] === bb && (this._boundTexturesCache[kb] = null);
        this.updateTextureSamplingMode(bb.samplingMode, bb);
        const sb = this._gl;
        for (const kb of this._renderTargetWrapperCache) {
          if (kb.texture !== bb) continue;
          const Wb = kb,
            ab = kb.samples,
            Tb = ab > 1;
          Wb._framebuffer && sb.deleteFramebuffer(Wb._framebuffer), !Tb && Wb._depthStencilBuffer && (sb.deleteRenderbuffer(Wb._depthStencilBuffer), Wb._depthStencilBuffer = null);
          const Ub = this._currentFramebuffer,
            Ib = sb.createFramebuffer();
          this._bindUnboundFramebuffer(Ib), sb.framebufferTexture2D(sb.FRAMEBUFFER, sb.COLOR_ATTACHMENT0, sb.TEXTURE_2D, cb, 0), Tb || (Wb._depthStencilBuffer = this._setupFramebufferDepthAttachments(kb._generateStencilBuffer, kb._generateDepthBuffer, kb.width, kb.height)), this._bindUnboundFramebuffer(Ub), Wb._framebuffer = Ib, Tb && (kb._samples = 1, this.updateRenderTargetTextureSampleCount(Wb, ab))
        }
      }
      _uploadImageToTexture(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wb = this._gl,
          ab = this._getWebGLTextureType(bb.type),
          Tb = this._getInternalFormat(bb.format),
          Ub = this._getRGBABufferInternalSizedFormat(bb.type, Tb),
          Ib = bb.isCube ? Wb.TEXTURE_CUBE_MAP : Wb.TEXTURE_2D;
        this._bindTextureDirectly(Ib, bb, !0), this._unpackFlipY(bb.invertY);
        let Hb = Wb.TEXTURE_2D;
        bb.isCube && (Hb = Wb.TEXTURE_CUBE_MAP_POSITIVE_X + sb), Wb.texImage2D(Hb, kb, Ub, Tb, ab, cb), this._bindTextureDirectly(Ib, null, !0)
      }
      updateTextureComparisonFunction(bb, cb) {
        if (1 === this.gl) return void fb.c.Error("WebGL 1 does not support texture comparison.");
        const sb = this._gl;
        bb.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, bb, !0), 0 === cb ? (sb.texParameteri(sb.TEXTURE_CUBE_MAP, sb.TEXTURE_COMPARE_FUNC, 515), sb.texParameteri(sb.TEXTURE_CUBE_MAP, sb.TEXTURE_COMPARE_MODE, sb.NONE)) : (sb.texParameteri(sb.TEXTURE_CUBE_MAP, sb.TEXTURE_COMPARE_FUNC, cb), sb.texParameteri(sb.TEXTURE_CUBE_MAP, sb.TEXTURE_COMPARE_MODE, sb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), 0 === cb ? (sb.texParameteri(sb.TEXTURE_2D, sb.TEXTURE_COMPARE_FUNC, 515), sb.texParameteri(sb.TEXTURE_2D, sb.TEXTURE_COMPARE_MODE, sb.NONE)) : (sb.texParameteri(sb.TEXTURE_2D, sb.TEXTURE_COMPARE_FUNC, cb), sb.texParameteri(sb.TEXTURE_2D, sb.TEXTURE_COMPARE_MODE, sb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), bb._comparisonFunction = cb
      }
      createInstancesBuffer(bb) {
        const cb = this._gl.createBuffer();
        if (!cb) throw new Error("Unable to create instance buffer");
        const sb = new Hb.d(cb);
        return sb.GM = bb, this.bindArrayBuffer(sb), this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, this._gl.DYNAMIC_DRAW), sb.references = 1, sb
      }
      deleteInstancesBuffer(bb) {
        this._gl.deleteBuffer(bb)
      }
      async _clientWaitAsync(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const kb = this._gl;
        return await new Promise(((Wb, ab) => {
          (0, Cb.d)((() => {
            const sb = kb.clientWaitSync(bb, cb, 0);
            if (sb == kb.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return sb != kb.TIMEOUT_EXPIRED
          }), Wb, ab, sb)
        }))
      }
      _readPixelsAsync(bb, cb, sb, kb, Wb, ab, Tb) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Ub = this._gl,
          Ib = Ub.createBuffer();
        Ub.bindBuffer(Ub.PIXEL_PACK_BUFFER, Ib), Ub.bufferData(Ub.PIXEL_PACK_BUFFER, Tb.byteLength, Ub.STREAM_READ), Ub.readPixels(bb, cb, sb, kb, Wb, ab, 0), Ub.bindBuffer(Ub.PIXEL_PACK_BUFFER, null);
        const Hb = Ub.fenceSync(Ub.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Hb ? (Ub.flush(), this._clientWaitAsync(Hb, 0, 10).then((() => (Ub.deleteSync(Hb), Ub.bindBuffer(Ub.PIXEL_PACK_BUFFER, Ib), Ub.getBufferSubData(Ub.PIXEL_PACK_BUFFER, 0, Tb), Ub.bindBuffer(Ub.PIXEL_PACK_BUFFER, null), Ub.deleteBuffer(Ib), Tb)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(bb, cb) {
            1 === Wb.d.Instances.length && Xb.b.audioEngine && (Xb.b.audioEngine.dispose(), Xb.b.audioEngine = null);
            const sb = bb.getHostWindow();
            sb && "function" === typeof sb.removeEventListener && (sb.removeEventListener("blur", bb._onBlur), sb.removeEventListener("focus", bb._onFocus)), cb && (cb.removeEventListener("focus", bb._onCanvasFocus), cb.removeEventListener("blur", bb._onCanvasBlur), cb.removeEventListener("pointerout", bb._onCanvasPointerOut), cb.removeEventListener("contextmenu", bb._onCanvasContextMenu)), (0, nb.f)() && (document.removeEventListener("fullscreenchange", bb._onFullscreenChange), document.removeEventListener("mozfullscreenchange", bb._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", bb._onFullscreenChange), document.removeEventListener("msfullscreenchange", bb._onFullscreenChange), document.removeEventListener("pointerlockchange", bb._onPointerLockChange), document.removeEventListener("mspointerlockchange", bb._onPointerLockChange), document.removeEventListener("mozpointerlockchange", bb._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", bb._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Lb.ALPHA_DISABLE = 0, Lb.ALPHA_ADD = 1, Lb.ALPHA_COMBINE = 2, Lb.ALPHA_SUBTRACT = 3, Lb.ALPHA_MULTIPLY = 4, Lb.ALPHA_MAXIMIZED = 5, Lb.ALPHA_ONEONE = 6, Lb.ALPHA_PREMULTIPLIED = 7, Lb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Lb.ALPHA_INTERPOLATE = 9, Lb.ALPHA_SCREENMODE = 10, Lb.DELAYLOADSTATE_NONE = 0, Lb.DELAYLOADSTATE_LOADED = 1, Lb.DELAYLOADSTATE_LOADING = 2, Lb.DELAYLOADSTATE_NOTLOADED = 4, Lb.NEVER = 512, Lb.ALWAYS = 519, Lb.LESS = 513, Lb.EQUAL = 514, Lb.LEQUAL = 515, Lb.GREATER = 516, Lb.GEQUAL = 518, Lb.NOTEQUAL = 517, Lb.KEEP = 7680, Lb.REPLACE = 7681, Lb.INCR = 7682, Lb.DECR = 7683, Lb.INVERT = 5386, Lb.INCR_WRAP = 34055, Lb.DECR_WRAP = 34056, Lb.TEXTURE_CLAMP_ADDRESSMODE = 0, Lb.TEXTURE_WRAP_ADDRESSMODE = 1, Lb.TEXTURE_MIRROR_ADDRESSMODE = 2, Lb.TEXTUREFORMAT_ALPHA = 0, Lb.TEXTUREFORMAT_LUMINANCE = 1, Lb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Lb.TEXTUREFORMAT_RGB = 4, Lb.TEXTUREFORMAT_RGBA = 5, Lb.TEXTUREFORMAT_RED = 6, Lb.TEXTUREFORMAT_R = 6, Lb.TEXTUREFORMAT_R16_UNORM = 33322, Lb.TEXTUREFORMAT_RG16_UNORM = 33324, Lb.TEXTUREFORMAT_RGB16_UNORM = 32852, Lb.TEXTUREFORMAT_RGBA16_UNORM = 32859, Lb.TEXTUREFORMAT_R16_SNORM = 36760, Lb.TEXTUREFORMAT_RG16_SNORM = 36761, Lb.TEXTUREFORMAT_RGB16_SNORM = 36762, Lb.TEXTUREFORMAT_RGBA16_SNORM = 36763, Lb.TEXTUREFORMAT_RG = 7, Lb.TEXTUREFORMAT_RED_INTEGER = 8, Lb.TEXTUREFORMAT_R_INTEGER = 8, Lb.TEXTUREFORMAT_RG_INTEGER = 9, Lb.TEXTUREFORMAT_RGB_INTEGER = 10, Lb.TEXTUREFORMAT_RGBA_INTEGER = 11, Lb.TEXTURETYPE_UNSIGNED_BYTE = 0, Lb.TEXTURETYPE_UNSIGNED_INT = 0, Lb.TEXTURETYPE_FLOAT = 1, Lb.TEXTURETYPE_HALF_FLOAT = 2, Lb.TEXTURETYPE_BYTE = 3, Lb.TEXTURETYPE_SHORT = 4, Lb.TEXTURETYPE_UNSIGNED_SHORT = 5, Lb.TEXTURETYPE_INT = 6, Lb.TEXTURETYPE_UNSIGNED_INTEGER = 7, Lb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Lb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Lb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Lb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Lb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Lb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Lb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Lb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Lb.TEXTURE_NEAREST_SAMPLINGMODE = 1, Lb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Lb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Lb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Lb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Lb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Lb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Lb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Lb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Lb.TEXTURE_NEAREST_LINEAR = 7, Lb.TEXTURE_NEAREST_NEAREST = 1, Lb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Lb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Lb.TEXTURE_LINEAR_LINEAR = 2, Lb.TEXTURE_LINEAR_NEAREST = 12, Lb.TEXTURE_EXPLICIT_MODE = 0, Lb.TEXTURE_SPHERICAL_MODE = 1, Lb.TEXTURE_PLANAR_MODE = 2, Lb.TEXTURE_CUBIC_MODE = 3, Lb.TEXTURE_PROJECTION_MODE = 4, Lb.TEXTURE_SKYBOX_MODE = 5, Lb.TEXTURE_INVCUBIC_MODE = 6, Lb.TEXTURE_EQUIRECTANGULAR_MODE = 7, Lb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Lb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Lb.SCALEMODE_FLOOR = 1, Lb.SCALEMODE_NEAREST = 2, Lb.SCALEMODE_CEILING = 3
  },
  39395: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(39353);
    class Wb {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = bb, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, bb && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, kb.d)(bb.format))
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
        const cb = this._textures[bb],
          sb = this._layerIndices?.[bb] ?? 0,
          kb = this._faceIndices?.[bb] ?? 0;
        return cb.isCube ? 6 * sb + kb : cb.is3D ? 0 : sb
      }
      get samples() {
        return this._samples
      }
      setSamples(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === bb && !sb) return bb;
        const kb = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, bb, cb) : this._engine.updateRenderTargetTextureSampleCount(this, bb);
        return this._samples = bb, kb
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(bb, cb, sb, kb, Wb) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = bb, this._isCube = cb, this._size = sb, this._engine = kb, this._depthStencilTexture = null, this.label = Wb
      }
      setTextures(bb) {
        Array.isArray(bb) ? this._textures = bb : this._textures = bb ? [bb] : null
      }
      setTexture(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[cb] !== bb && (this._textures[cb] && sb && this._textures[cb].dispose(), this._textures[cb] = bb)
      }
      setLayerAndFaceIndices(bb, cb) {
        this._layerIndices = bb, this._faceIndices = cb
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== cb && cb >= 0 && (this._layerIndices[bb] = cb), void 0 !== sb && sb >= 0 && (this._faceIndices[bb] = sb)
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = sb, this._depthStencilTextureLabel = ab, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: cb,
          comparisonFunction: bb,
          generateStencil: sb,
          isCube: this._isCube,
          samples: kb,
          depthTextureFormat: Wb,
          label: ab
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
          const cb = this.textures;
          if (cb && cb.length > 0) {
            let sb = !1,
              kb = cb.length,
              Wb = -1;
            const ab = cb[cb.length - 1]._source;
            14 !== ab && 12 !== ab || (sb = !0, Wb = cb[cb.length - 1].format, kb--);
            const Tb = [],
              Ub = [],
              Ib = [],
              Hb = [],
              fb = [],
              Mb = [],
              Xb = [],
              nb = {};
            for (let bb = 0; bb < kb; ++bb) {
              const sb = cb[bb];
              Tb.push(sb.samplingMode), Ub.push(sb.type), Ib.push(sb.format);
              void 0 !== nb[sb.uniqueId] ? (Hb.push(-1), Xb.push(0)) : (nb[sb.uniqueId] = bb, sb.is2DArray ? (Hb.push(35866), Xb.push(sb.depth)) : sb.isCube ? (Hb.push(34067), Xb.push(0)) : sb.is3D ? (Hb.push(32879), Xb.push(sb.depth)) : (Hb.push(3553), Xb.push(0))), this._faceIndices && fb.push(this._faceIndices[bb] ?? 0), this._layerIndices && Mb.push(this._layerIndices[bb] ?? 0)
            }
            const mb = {
                samplingModes: Tb,
                generateMipMaps: cb[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: sb,
                depthTextureFormat: Wb,
                types: Ub,
                formats: Ib,
                QTb: kb,
                targetTypes: Hb,
                faceIndex: fb,
                layerIndex: Mb,
                layerCounts: Xb,
                label: this.label
              },
              lb = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            bb = this._engine.createMultipleRenderTarget(lb, mb);
            for (let Qb = 0; Qb < kb; ++Qb) {
              if (-1 !== Hb[Qb]) continue;
              const sb = nb[cb[Qb].uniqueId];
              bb.setTexture(bb.textures[sb], Qb)
            }
          }
        } else {
          const cb = {};
          if (cb.generateDepthBuffer = this._generateDepthBuffer, cb.generateMipMaps = this.texture?.generateMipMaps ?? !1, cb.generateStencilBuffer = this._generateStencilBuffer, cb.samplingMode = this.texture?.samplingMode, cb.type = this.texture?.type, cb.format = this.texture?.format, cb.noColorAttachment = !this._textures, cb.label = this.label, this.isCube) bb = this._engine.createRenderTargetCubeTexture(this.width, cb);
          else {
            const sb = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            bb = this._engine.createRenderTargetTexture(sb, cb)
          }
          bb.texture && (bb.texture.isReady = !0)
        }
        return bb
      }
      _swapRenderTargetWrapper(bb) {
        if (this._textures && bb._textures)
          for (let cb = 0; cb < this._textures.length; ++cb) this._textures[cb]._swapAndDie(bb._textures[cb], !1), bb._textures[cb].isReady = !0;
        this._depthStencilTexture && bb._depthStencilTexture && (this._depthStencilTexture._swapAndDie(bb._depthStencilTexture), bb._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const bb = this._cloneRenderTargetWrapper();
        if (bb) {
          if (this._depthStencilTexture) {
            const cb = this._depthStencilTexture.samplingMode,
              sb = this._depthStencilTexture.format,
              kb = 2 === cb || 3 === cb || 11 === cb;
            bb.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, kb, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, sb, this._depthStencilTextureLabel)
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
  39856: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      static get ForceFullSceneLoadingForIncremental() {
        return kb._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(bb) {
        kb._ForceFullSceneLoadingForIncremental = bb
      }
      static get ShowLoadingScreen() {
        return kb._ShowLoadingScreen
      }
      static set ShowLoadingScreen(bb) {
        kb._ShowLoadingScreen = bb
      }
      static get loggingLevel() {
        return kb._LoggingLevel
      }
      static set loggingLevel(bb) {
        kb._LoggingLevel = bb
      }
      static get CleanBoneMatrixWeights() {
        return kb._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(bb) {
        kb._CleanBoneMatrixWeights = bb
      }
    }
    kb._ForceFullSceneLoadingForIncremental = !1, kb._ShowLoadingScreen = !0, kb._CleanBoneMatrixWeights = !1, kb._LoggingLevel = 0
  },
  39514: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb = sb(38284);
    const Wb = new Map;

    function ab(bb, cb) {
      (function(bb) {
        return Wb.delete(bb)
      })(bb) && kb.c.Warn(`Extension with the name '${bb}' already exists`), Wb.set(bb, cb)
    }

    function Tb(bb, cb) {
      "image/ktx" !== cb && "image/ktx2" !== cb || (bb = ".ktx"), Wb.has(bb) || (bb.endsWith(".ies") && ab(".ies", (async () => await sb.e(299).then((() => sb(41166))).then((bb => new bb._IESTextureLoader)))), bb.endsWith(".dds") && ab(".dds", (async () => await sb.e(297).then((() => sb(41172))).then((bb => new bb._DDSTextureLoader)))), bb.endsWith(".basis") && ab(".basis", (async () => await sb.e(300).then((() => sb(41179))).then((bb => new bb._BasisTextureLoader)))), bb.endsWith(".env") && ab(".env", (async () => await Promise.all([sb.e(301), sb.e(298)]).then((() => sb(41185))).then((bb => new bb._ENVTextureLoader)))), bb.endsWith(".hdr") && ab(".hdr", (async () => await sb.e(302).then((() => sb(41245))).then((bb => new bb._HDRTextureLoader)))), (bb.endsWith(".ktx") || bb.endsWith(".ktx2")) && (ab(".ktx", (async () => await sb.e(303).then((() => sb(41253))).then((bb => new bb._KTXTextureLoader)))), ab(".ktx2", (async () => await sb.e(303).then((() => sb(41253))).then((bb => new bb._KTXTextureLoader))))), bb.endsWith(".tga") && ab(".tga", (async () => await sb.e(304).then((() => sb(41262))).then((bb => new bb._TGATextureLoader)))), bb.endsWith(".exr") && ab(".exr", (async () => await sb.e(305).then((() => sb(41267))).then((bb => new bb._ExrTextureLoader)))));
      const kb = Wb.get(bb);
      return kb ? Promise.resolve(kb(cb)) : null
    }
  },
  39871: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      e: () => Hb
    });
    var kb = sb(39730),
      Wb = sb(39449),
      ab = sb(36698);
    class Tb extends kb.e {
      get X3() {
        return this._subMaterials
      }
      set X3(bb) {
        this._subMaterials = bb, this._hookArray(bb)
      }
      getChildren() {
        return this.X3
      }
      constructor(bb, cb) {
        super(bb, cb, !0), this._waitingSubMaterialsUniqueIds = [], this.EY().addMultiMaterial(this), this.X3 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(bb) {
        var cb = this;
        const sb = bb.push;
        bb.push = function() {
          for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
          const Tb = sb.apply(bb, Wb);
          return cb._markAllSubMeshesAsTexturesDirty(), Tb
        };
        const kb = bb.splice;
        bb.splice = (cb, sb) => {
          const Wb = kb.call(bb, cb, sb ?? bb.length);
          return this._markAllSubMeshesAsTexturesDirty(), Wb
        }
      }
      getSubMaterial(bb) {
        return bb < 0 || bb >= this.X3.length ? this.EY().defaultMaterial : this.X3[bb]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.X3.map((bb => bb ? bb.getActiveTextures() : [])))
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (let cb = 0; cb < this.X3.length; cb++)
          if (this.X3[cb]?.hasTexture(bb)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(bb, cb, sb) {
        for (let kb = 0; kb < this.X3.length; kb++) {
          const Wb = this.X3[kb];
          if (Wb) {
            if (Wb._storeEffectOnSubMeshes) {
              if (!Wb.isReadyForSubMesh(bb, cb, sb)) return !1;
              continue
            }
            if (!Wb.isReady(bb)) return !1
          }
        }
        return !0
      }
      clone(bb, cb) {
        const sb = new Tb(bb, this.EY());
        for (let kb = 0; kb < this.X3.length; kb++) {
          let Wb;
          const ab = this.X3[kb];
          Wb = cb && ab ? ab.clone(bb + "-" + ab.name) : this.X3[kb], sb.X3.push(Wb)
        }
        return sb
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, Wb.c && (bb.tags = Wb.c.GetTags(this)), bb.materialsUniqueIds = [], bb.materials = [];
        for (let cb = 0; cb < this.X3.length; cb++) {
          const sb = this.X3[cb];
          sb ? (bb.materialsUniqueIds.push(sb.uniqueId), bb.materials.push(sb.id)) : (bb.materialsUniqueIds.push(null), bb.materials.push(null))
        }
        return bb
      }
      dispose(bb, cb, sb) {
        const kb = this.EY();
        if (!kb) return;
        if (sb)
          for (let ab = 0; ab < this.X3.length; ab++) {
            const sb = this.X3[ab];
            sb && sb.dispose(bb, cb)
          }
        const Wb = kb.multiMaterials.indexOf(this);
        Wb >= 0 && kb.multiMaterials.splice(Wb, 1), super.dispose(bb, cb)
      }
    }
    let Ub = !1;

    function Ib(bb, cb) {
      const sb = new Tb(bb.name, cb);
      if (sb.id = bb.id, sb._loadedUniqueId = bb.uniqueId, Wb.c && Wb.c.AddTagsTo(sb, bb.tags), bb.materialsUniqueIds) sb._waitingSubMaterialsUniqueIds = bb.materialsUniqueIds;
      else
        for (const kb of bb.materials) sb.X3.push(cb.getLastMaterialById(kb));
      return sb
    }

    function Hb() {
      Ub || (Ub = !0, Tb.ParseMultiMaterial = Ib, (0, ab.h)("BABYLON.MultiMaterial", Tb))
    }
  },
  39674: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb, Wb, ab = sb(36656);
    ! function(bb) {
      bb[bb.LOCAL = 0] = "LOCAL", bb[bb.WORLD = 1] = "WORLD", bb[bb.BONE = 2] = "BONE"
    }(kb || (kb = {}));
    class Tb {}
    Tb.X = new ab.p(1, 0, 0), Tb.Y = new ab.p(0, 1, 0), Tb.Z = new ab.p(0, 0, 1),
      function(bb) {
        bb[bb.X = 0] = "X", bb[bb.Y = 1] = "Y", bb[bb.Z = 2] = "Z"
      }(Wb || (Wb = {}))
  },
  39404: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ib,
      f: () => Hb
    });
    var kb = sb(36656);
    const Wb = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      ab = [() => 1, bb => bb.y, bb => bb.z, bb => bb.x, bb => bb.x * bb.y, bb => bb.y * bb.z, bb => 3 * bb.z * bb.z - 1, bb => bb.x * bb.z, bb => bb.x * bb.x - bb.y * bb.y],
      Tb = (bb, cb) => Wb[bb] * ab[bb](cb),
      Ub = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Ib {
      constructor() {
        this.preScaled = !1, this.l00 = kb.p.Zero(), this.l1_1 = kb.p.Zero(), this.l10 = kb.p.Zero(), this.l11 = kb.p.Zero(), this.l2_2 = kb.p.Zero(), this.l2_1 = kb.p.Zero(), this.l20 = kb.p.Zero(), this.l21 = kb.p.Zero(), this.l22 = kb.p.Zero()
      }
      addLight(bb, cb, sb) {
        kb.m.Fm[0].set(cb.r, cb.g, cb.b);
        const Wb = kb.m.Fm[0],
          ab = kb.m.Fm[1];
        Wb.scaleToRef(sb, ab), ab.scaleToRef(Tb(0, bb), kb.m.Fm[2]), this.l00.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(1, bb), kb.m.Fm[2]), this.l1_1.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(2, bb), kb.m.Fm[2]), this.l10.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(3, bb), kb.m.Fm[2]), this.l11.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(4, bb), kb.m.Fm[2]), this.l2_2.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(5, bb), kb.m.Fm[2]), this.l2_1.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(6, bb), kb.m.Fm[2]), this.l20.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(7, bb), kb.m.Fm[2]), this.l21.addInPlace(kb.m.Fm[2]), ab.scaleToRef(Tb(8, bb), kb.m.Fm[2]), this.l22.addInPlace(kb.m.Fm[2])
      }
      scaleInPlace(bb) {
        this.l00.scaleInPlace(bb), this.l1_1.scaleInPlace(bb), this.l10.scaleInPlace(bb), this.l11.scaleInPlace(bb), this.l2_2.scaleInPlace(bb), this.l2_1.scaleInPlace(bb), this.l20.scaleInPlace(bb), this.l21.scaleInPlace(bb), this.l22.scaleInPlace(bb)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Ub[0]), this.l1_1.scaleInPlace(Ub[1]), this.l10.scaleInPlace(Ub[2]), this.l11.scaleInPlace(Ub[3]), this.l2_2.scaleInPlace(Ub[4]), this.l2_1.scaleInPlace(Ub[5]), this.l20.scaleInPlace(Ub[6]), this.l21.scaleInPlace(Ub[7]), this.l22.scaleInPlace(Ub[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Wb[0]), this.l1_1.scaleInPlace(Wb[1]), this.l10.scaleInPlace(Wb[2]), this.l11.scaleInPlace(Wb[3]), this.l2_2.scaleInPlace(Wb[4]), this.l2_1.scaleInPlace(Wb[5]), this.l20.scaleInPlace(Wb[6]), this.l21.scaleInPlace(Wb[7]), this.l22.scaleInPlace(Wb[8])
      }
      updateFromArray(bb) {
        return kb.p.FromArrayToRef(bb[0], 0, this.l00), kb.p.FromArrayToRef(bb[1], 0, this.l1_1), kb.p.FromArrayToRef(bb[2], 0, this.l10), kb.p.FromArrayToRef(bb[3], 0, this.l11), kb.p.FromArrayToRef(bb[4], 0, this.l2_2), kb.p.FromArrayToRef(bb[5], 0, this.l2_1), kb.p.FromArrayToRef(bb[6], 0, this.l20), kb.p.FromArrayToRef(bb[7], 0, this.l21), kb.p.FromArrayToRef(bb[8], 0, this.l22), this
      }
      updateFromFloatsArray(bb) {
        return kb.p.FromFloatsToRef(bb[0], bb[1], bb[2], this.l00), kb.p.FromFloatsToRef(bb[3], bb[4], bb[5], this.l1_1), kb.p.FromFloatsToRef(bb[6], bb[7], bb[8], this.l10), kb.p.FromFloatsToRef(bb[9], bb[10], bb[11], this.l11), kb.p.FromFloatsToRef(bb[12], bb[13], bb[14], this.l2_2), kb.p.FromFloatsToRef(bb[15], bb[16], bb[17], this.l2_1), kb.p.FromFloatsToRef(bb[18], bb[19], bb[20], this.l20), kb.p.FromFloatsToRef(bb[21], bb[22], bb[23], this.l21), kb.p.FromFloatsToRef(bb[24], bb[25], bb[26], this.l22), this
      }
      static FromArray(bb) {
        return (new Ib).updateFromArray(bb)
      }
      static FromPolynomial(bb) {
        const cb = new Ib;
        return cb.l00 = bb.xx.scale(.376127).add(bb.yy.scale(.376127)).add(bb.zz.scale(.376126)), cb.l1_1 = bb.y.scale(.977204), cb.l10 = bb.z.scale(.977204), cb.l11 = bb.x.scale(.977204), cb.l2_2 = bb.xy.scale(1.16538), cb.l2_1 = bb.yz.scale(1.16538), cb.l20 = bb.zz.scale(1.34567).subtract(bb.xx.scale(.672834)).subtract(bb.yy.scale(.672834)), cb.l21 = bb.zx.scale(1.16538), cb.l22 = bb.xx.scale(1.16538).subtract(bb.yy.scale(1.16538)), cb.l1_1.scaleInPlace(-1), cb.l11.scaleInPlace(-1), cb.l2_1.scaleInPlace(-1), cb.l21.scaleInPlace(-1), cb.scaleInPlace(Math.PI), cb
      }
    }
    class Hb {
      constructor() {
        this.x = kb.p.Zero(), this.y = kb.p.Zero(), this.z = kb.p.Zero(), this.xx = kb.p.Zero(), this.yy = kb.p.Zero(), this.zz = kb.p.Zero(), this.xy = kb.p.Zero(), this.yz = kb.p.Zero(), this.zx = kb.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Ib.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(bb) {
        kb.m.Fm[0].I5(bb.r, bb.g, bb.b);
        const cb = kb.m.Fm[0];
        this.xx.addInPlace(cb), this.yy.addInPlace(cb), this.zz.addInPlace(cb)
      }
      scaleInPlace(bb) {
        this.x.scaleInPlace(bb), this.y.scaleInPlace(bb), this.z.scaleInPlace(bb), this.xx.scaleInPlace(bb), this.yy.scaleInPlace(bb), this.zz.scaleInPlace(bb), this.yz.scaleInPlace(bb), this.zx.scaleInPlace(bb), this.xy.scaleInPlace(bb)
      }
      updateFromHarmonics(bb) {
        return this._harmonics = bb, this.x.ssb(bb.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.ssb(bb.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.ssb(bb.l10), this.z.scaleInPlace(1.02333), this.xx.ssb(bb.l00), kb.m.Fm[0].ssb(bb.l20).scaleInPlace(.247708), kb.m.Fm[1].ssb(bb.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).Wkb(kb.m.Fm[0]).addInPlace(kb.m.Fm[1]), this.yy.ssb(bb.l00), this.yy.scaleInPlace(.886277).Wkb(kb.m.Fm[0]).Wkb(kb.m.Fm[1]), this.zz.ssb(bb.l00), kb.m.Fm[0].ssb(bb.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(kb.m.Fm[0]), this.yz.ssb(bb.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.ssb(bb.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.ssb(bb.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(bb) {
        return (new Hb).updateFromHarmonics(bb)
      }
      static FromArray(bb) {
        const cb = new Hb;
        return kb.p.FromArrayToRef(bb[0], 0, cb.x), kb.p.FromArrayToRef(bb[1], 0, cb.y), kb.p.FromArrayToRef(bb[2], 0, cb.z), kb.p.FromArrayToRef(bb[3], 0, cb.xx), kb.p.FromArrayToRef(bb[4], 0, cb.yy), kb.p.FromArrayToRef(bb[5], 0, cb.zz), kb.p.FromArrayToRef(bb[6], 0, cb.yz), kb.p.FromArrayToRef(bb[7], 0, cb.zx), kb.p.FromArrayToRef(bb[8], 0, cb.xy), cb
      }
    }
  },
  39865: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Db,
      h: () => ib
    });
    var kb = sb(39414),
      Wb = sb(36683),
      ab = sb(36656),
      Tb = sb(39576),
      Ub = sb(39848),
      Ib = sb(39867),
      Hb = sb(39568),
      fb = sb(39745),
      Mb = sb(39563);
    class Xb {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ab.p(0, 0, 0), this._diffPositionForCollisions = new ab.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var nb, mb, lb, Qb = sb(39296),
      eb = sb(39503),
      Cb = sb(39752),
      Nb = sb(36830),
      Vb = sb(36661),
      Lb = sb(39674),
      ub = sb(38284),
      Yb = sb(39418),
      hb = sb(39311),
      Jb = sb(36698);

    function gb(bb, cb) {
      return bb - Math.floor(bb / cb) * cb
    }

    function Bb(bb, cb, sb) {
      bb instanceof Float32Array ? ab.e.FromArrayToRef(bb, cb, sb) : sb.I5((0, eb.d)(bb[cb]), (0, eb.d)(bb[cb + 1]), (0, eb.d)(bb[cb + 2]), (0, eb.d)(bb[cb + 3]), (0, eb.d)(bb[cb + 4]), (0, eb.d)(bb[cb + 5]), (0, eb.d)(bb[cb + 6]), (0, eb.d)(bb[cb + 7]), (0, eb.d)(bb[cb + 8]), (0, eb.d)(bb[cb + 9]), (0, eb.d)(bb[cb + 10]), (0, eb.d)(bb[cb + 11]), (0, eb.d)(bb[cb + 12]), (0, eb.d)(bb[cb + 13]), (0, eb.d)(bb[cb + 14]), (0, eb.d)(bb[cb + 15]))
    }

    function tb(bb, cb, sb, kb, Wb, Ub, Ib, Hb, fb) {
      const Mb = sb.texture,
        Xb = Mb?.getInternalTexture(),
        nb = Xb?._bufferView;
      if (!(nb instanceof Float32Array) && !(nb instanceof Uint16Array)) return ub.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const mb = Mb.getSize(),
        lb = function(bb, cb) {
          const sb = bb.y - bb.x + 1,
            kb = cb * bb.w / sb,
            Wb = kb < 1 ? 0 : 1,
            ab = sb - Wb;
          let Tb = gb(kb - Math.floor(kb), 1) * ab;
          return Tb = gb(Tb + bb.z, ab), Math.floor(Tb) + bb.x + Wb
        }(kb, sb.time);
      if (!isFinite(lb) || lb < 0 || lb >= mb.height) return ub.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Qb = ab.m.Fm[0],
        eb = ab.m.Matrix[0],
        Cb = ab.m.Matrix[1],
        Nb = lb * mb.width * 4,
        Vb = cb === Tb.l.NormalKind ? ab.p.TransformNormalFromFloatsToRef : ab.p.TransformCoordinatesFromFloatsToRef;
      for (let ab = 0, Tb = 0; ab < bb.length; ab += 3, Tb += 4) {
        let cb, sb;
        for (eb.reset(), cb = 0; cb < 4 && cb < fb; cb++) sb = Ub[Tb + cb], sb > 0 && (Bb(nb, Nb + 16 * Math.floor(Wb[Tb + cb]), Cb), Cb.scaleAndAddToRef(sb, eb));
        if (Ib && Hb)
          for (cb = 0; cb < 4 && cb + 4 < fb; cb++) sb = Hb[Tb + cb], sb > 0 && (Bb(nb, Nb + 16 * Math.floor(Ib[Tb + cb]), Cb), Cb.scaleAndAddToRef(sb, eb));
        Vb(bb[ab], bb[ab + 1], bb[ab + 2], eb, Qb), Qb.toArray(bb, ab)
      }
      return !0
    }
    class yb {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ab.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Pb {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new yb, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Xb, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Db = (() => {
        var bb;
        let cb, Xb = Ib.c,
          nb = [];
        return bb = class extends Xb {
          static get BILLBOARDMODE_NONE() {
            return Ib.c.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Ib.c.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Ib.c.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Ib.c.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Ib.c.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Ib.c.BILLBOARDMODE_USE_POSITION
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
          set uX(bb) {
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
            const cb = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = bb, (1 === cb && 1 !== bb || 1 !== cb && 1 === bb) && this._markSubMeshesAsDirty((bb => {
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
            this._internalAbstractMeshDataInfo._material !== bb && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = bb, bb && bb.meshMap && (bb.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.XV && (this.resetDrawCache(void 0, null == bb), this._unBindEffect()))
          }
          getMaterialForRenderPass(bb) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[bb]
          }
          setMaterialForRenderPass(bb, cb) {
            this.resetDrawCache(bb), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const sb = this._internalAbstractMeshDataInfo._materialForRenderPass[bb];
            sb?.meshMap?.[this.uniqueId] && (sb.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[bb] = cb, cb && cb.meshMap && (cb.meshMap[this.uniqueId] = this)
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
            const cb = this._internalAbstractMeshDataInfo._skeleton;
            cb && cb.needInitialSkinMatrix && cb._unregisterMeshWithPoseMatrix(this), bb && bb.needInitialSkinMatrix && bb._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = bb, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(cb) {
            var sb;
            let kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(cb, kb, !1), sb = this, this._internalAbstractMeshDataInfo = new Pb, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Wb.c, this.onCollisionPositionChangeObservable = new Wb.c, this.onMaterialChangedObservable = new Wb.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.UQ = bb.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Nb.e.Red(), this.outlineWidth = .02, this.overlayColor = Nb.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Rm = !1, this.jm = !1, this.actionManager = null, this.ellipsoid = new ab.p(.5, 1, .5), this.ellipsoidOffset = new ab.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Nb.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                RY: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Wb.c, this._onCollisionPositionChange = function(bb, cb) {
                let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                cb.subtractToRef(sb._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, sb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), sb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > hb.b.CollisionsEpsilon && sb.position.addInPlace(sb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), kb && sb.onCollideObservable.notifyObservers(kb), sb.onCollisionPositionChangeObservable.notifyObservers(sb.position)
              }, kb = this.EY(), this.layerMask = kb.defaultRenderableLayerMask, kb.Ksb(this), this._resyncLightSources(), this._uniformBuffer = new Mb.d(this.EY().Sm(), void 0, void 0, cb, !this.EY().Sm().isWebGPU), this._buildUniformLayout(), kb.performancePriority) {
              case 2:
                this.jm = !0;
              case 1:
                this.Rm = !0, this.UQ = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(bb) {
            const cb = this._uniformBuffer;
            cb.O4("world", bb), cb.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), cb.update()
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
            let cb = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            cb += ", # of submeshes: " + (this.XV ? this.XV.length : 0);
            const sb = this._internalAbstractMeshDataInfo._skeleton;
            return sb && (cb += ", skeleton: " + sb.name), bb && (cb += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], cb += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.RY ? "YES" : "NO")), cb
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Ib.c.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(bb) {
            let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (cb || this.actionManager.isRecursive)) {
              if (!bb) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(bb)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(bb, !1) : null
          }
          _releaseRenderPassId(bb) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.XV) {
              for (const bb of this.XV) bb._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const bb of this.EY().lights) bb.isEnabled() && bb.canAffectMesh(this) && this._lightSources.push(bb);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(bb) {
            const cb = bb.isEnabled() && bb.canAffectMesh(this),
              sb = this._lightSources.indexOf(bb);
            let kb = !1;
            if (-1 === sb) {
              if (!cb) return;
              this._lightSources.push(bb)
            } else {
              if (cb) return;
              kb = !0, this._lightSources.splice(sb, 1)
            }
            this._markSubMeshesAsLightDirty(kb)
          }
          _unBindEffect() {
            for (const bb of this.XV) bb.setEffect(null)
          }
          _removeLightSource(bb, cb) {
            const sb = this._lightSources.indexOf(bb); - 1 !== sb && (this._lightSources.splice(sb, 1), this._markSubMeshesAsLightDirty(cb))
          }
          _markSubMeshesAsDirty(bb) {
            if (this.XV)
              for (const cb of this.XV)
                for (let sb = 0; sb < cb._drawWrappers.length; ++sb) {
                  const kb = cb._drawWrappers[sb];
                  kb && kb.defines && kb.defines.markAllAsDirty && bb(kb.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((cb => cb.markAsLightDirty(bb)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsMiscDirty()))
          }
          Tcb(bb) {
            return this._currentRenderId = Number.MAX_VALUE, super.Tcb(bb), this._isDirty = !0, this
          }
          resetDrawCache(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.XV)
              for (const sb of this.XV) sb.resetDrawCache(bb, cb)
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
          Gsb() {
            return null
          }
          getVerticesData(bb) {
            return null
          }
          setVerticesData(bb, cb, sb, kb) {
            return this
          }
          updateVerticesData(bb, cb, sb, kb) {
            return this
          }
          setIndices(bb, cb) {
            return this
          }
          isVerticesDataPresent(bb) {
            return !1
          }
          PJ() {
            return this._masterMesh ? this._masterMesh.PJ() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.PJ()
          }
          setBoundingInfo(bb) {
            return this._boundingInfo = bb, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(bb, cb, sb) {
            return this._boundingInfo = new fb.c(bb, cb, sb), this._boundingInfo
          }
          normalizeToUnitCube() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(bb, cb, sb)
          }
          get useBones() {
            return this.skeleton && this.EY().skeletonsEnabled && this.isVerticesDataPresent(Tb.l.MatricesIndicesKind) && this.isVerticesDataPresent(Tb.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(bb) {}
          _activate(bb, cb) {
            return this._renderId = bb, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Ib.c.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get qY() {
            return !1
          }
          get ykb() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(bb, cb, sb) {
            return this.position.addInPlace(this.calcMovePOV(bb, cb, sb)), this
          }
          calcMovePOV(bb, cb, sb) {
            const kb = new ab.e;
            (this.rotationQuaternion ? this.rotationQuaternion : ab.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(kb);
            const Wb = ab.p.Zero(),
              Tb = this.definedFacingForward ? -1 : 1;
            return ab.p.TransformCoordinatesFromFloatsToRef(bb * Tb, cb, sb * Tb, kb, Wb), Wb
          }
          rotatePOV(bb, cb, sb) {
            return this.rotation.addInPlace(this.calcRotatePOV(bb, cb, sb)), this
          }
          calcRotatePOV(bb, cb, sb) {
            const kb = this.definedFacingForward ? 1 : -1;
            return new ab.p(bb * kb, cb, sb * kb)
          }
          _refreshBoundingInfo(bb, cb) {
            if (bb) {
              const sb = (0, Cb.e)(bb, 0, this.getTotalVertices(), cb);
              this._boundingInfo ? this._boundingInfo.reConstruct(sb.minimum, sb.maximum) : this._boundingInfo = new fb.c(sb.minimum, sb.maximum)
            }
            if (this.XV)
              for (let sb = 0; sb < this.XV.length; sb++) this.XV[sb].refreshBoundingInfo(bb);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(bb) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(bb.minimum, bb.maximum) : this._boundingInfo = new fb.c(bb.minimum, bb.maximum), this.XV)
              for (let cb = 0; cb < this.XV.length; cb++) this.XV[cb].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(bb, cb, sb, kb, Wb, Ub, Ib) {
            ! function(bb, cb, sb, kb, Wb, Ub, Ib) {
              const Hb = ab.m.Fm[0],
                fb = ab.m.Matrix[0],
                Mb = ab.m.Matrix[1],
                Xb = cb === Tb.l.NormalKind ? ab.p.TransformNormalFromFloatsToRef : ab.p.TransformCoordinatesFromFloatsToRef;
              for (let Tb = 0, nb = 0; Tb < bb.length; Tb += 3, nb += 4) {
                let cb, mb;
                for (fb.reset(), cb = 0; cb < 4; cb++) mb = Wb[nb + cb], mb > 0 && (ab.e.FromFloat32ArrayToRefScaled(sb, Math.floor(16 * kb[nb + cb]), mb, Mb), fb.addToSelf(Mb));
                if (Ub && Ib)
                  for (cb = 0; cb < 4; cb++) mb = Ib[nb + cb], mb > 0 && (ab.e.FromFloat32ArrayToRefScaled(sb, Math.floor(16 * Ub[nb + cb]), mb, Mb), fb.addToSelf(Mb));
                Xb(bb[Tb], bb[Tb + 1], bb[Tb + 2], fb, Hb), Hb.toArray(bb, Tb)
              }
            }(bb, cb, sb, kb, Wb, Ub, Ib)
          }
          _getData(cb, sb) {
            let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tb.l.PositionKind;
            const Wb = cb.cache,
              Ub = bb => {
                if (Wb) {
                  const cb = Wb._vertexData || (Wb._vertexData = {});
                  return cb[bb] || this.copyVerticesData(bb, cb), cb[bb]
                }
                return this.getVerticesData(bb)
              };
            if (sb || (sb = Ub(kb)), !sb) return null;
            Wb ? (Wb._outputData ? Wb._outputData.set(sb) : Wb._outputData = new Float32Array(sb), sb = Wb._outputData) : (cb.applyMorph && this.morphTargetManager || cb.applySkeleton && this.skeleton || cb.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (sb = sb.slice()), cb.applyMorph && this.morphTargetManager && function(bb, cb, sb) {
              let kb;
              switch (cb) {
                case Tb.l.PositionKind:
                  kb = bb => bb.getPositions();
                  break;
                case Tb.l.NormalKind:
                  kb = bb => bb.getNormals();
                  break;
                case Tb.l.TangentKind:
                  kb = bb => bb.getTangents();
                  break;
                case Tb.l.UVKind:
                  kb = bb => bb.getUVs();
                  break;
                case Tb.l.UV2Kind:
                  kb = bb => bb.getUV2s();
                  break;
                case Tb.l.ColorKind:
                  kb = bb => bb.getColors();
                  break;
                default:
                  return
              }
              for (let Wb = 0; Wb < bb.length; Wb++) {
                let cb = bb[Wb];
                for (let ab = 0; ab < sb.numTargets; ab++) {
                  const Tb = sb.getTarget(ab),
                    Ub = Tb.influence;
                  if (0 !== Ub) {
                    const sb = kb(Tb);
                    sb && (cb += (sb[Wb] - bb[Wb]) * Ub)
                  }
                }
                bb[Wb] = cb
              }
            }(sb, kb, this.morphTargetManager);
            const Ib = this.bakedVertexAnimationManager;
            let Hb = !1;
            if (cb.applyBakedVertexAnimation && Ib?.isEnabled) {
              const bb = Ub(Tb.l.MatricesIndicesKind),
                Wb = Ub(Tb.l.MatricesWeightsKind);
              if (Wb && bb) {
                const ab = this.numBoneInfluencers > 4,
                  fb = ab ? Ub(Tb.l.MatricesIndicesExtraKind) : null,
                  Mb = ab ? Ub(Tb.l.MatricesWeightsExtraKind) : null;
                Hb = tb(sb, kb, Ib, cb.bakedVertexAnimationSettings ?? Ib.animationParameters, bb, Wb, fb, Mb, this.numBoneInfluencers)
              }
            }
            if (!Hb && cb.applySkeleton && this.skeleton) {
              const cb = Ub(Tb.l.MatricesIndicesKind),
                Wb = Ub(Tb.l.MatricesWeightsKind);
              if (Wb && cb) {
                const ab = this.numBoneInfluencers > 4,
                  Ib = ab ? Ub(Tb.l.MatricesIndicesExtraKind) : null,
                  Hb = ab ? Ub(Tb.l.MatricesWeightsExtraKind) : null,
                  fb = this.skeleton.getTransformMatrices(this);
                bb._ApplySkeleton(sb, kb, fb, cb, Wb, Ib, Hb)
              }
            }
            if (!1 !== cb.updatePositionsArray && kb === Tb.l.PositionKind) {
              const bb = this._internalAbstractMeshDataInfo._positions || [],
                cb = bb.length;
              if (bb.length = sb.length / 3, cb < bb.length)
                for (let sb = cb; sb < bb.length; sb++) bb[sb] = new ab.p;
              for (let kb = 0, Wb = 0; kb < bb.length; kb++, Wb += 3) bb[kb].I5(sb[Wb], sb[Wb + 1], sb[Wb + 2]);
              this._internalAbstractMeshDataInfo._positions = bb
            }
            return sb
          }
          getNormalsData() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: bb,
              applyMorph: cb,
              updatePositionsArray: !1
            }, null, Tb.l.NormalKind)
          }
          iK() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: bb,
              applyMorph: cb,
              updatePositionsArray: !1
            }, sb, Tb.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new fb.c(ab.p.Zero(), ab.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(bb) {
            if (!this.XV) return this;
            const cb = this.XV.length;
            for (let sb = 0; sb < cb; sb++) {
              const kb = this.XV[sb];
              (cb > 1 || !kb.IsGlobal) && kb.updateBoundingInfo(bb)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.jm || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(bb) {
            return this.PJ().isInFrustum(bb, this.cullingStrategy)
          }
          isCompletelyInFrustum(bb) {
            return this.PJ().isCompletelyInFrustum(bb)
          }
          Ykb(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = arguments.length > 2 ? arguments[2] : void 0;
            const kb = this.PJ(),
              Wb = bb.PJ();
            if (kb.intersects(Wb, cb)) return !0;
            if (sb)
              for (const ab of this.getChildMeshes())
                if (ab.Ykb(bb, cb, !0)) return !0;
            return !1
          }
          intersectsPoint(bb) {
            return this.PJ().intersectsPoint(bb)
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
            let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const sb = this.EY().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = sb.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, sb.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, bb, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, cb), this
          }
          _collideForSubMesh(bb, cb, sb) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!bb._lastColliderWorldVertices || !bb._lastColliderTransformMatrix.equals(cb)) {
              bb._lastColliderTransformMatrix = cb.clone(), bb._lastColliderWorldVertices = [], bb._trianglePlanes = [];
              const sb = bb.verticesStart,
                kb = bb.verticesStart + bb.verticesCount;
              for (let Wb = sb; Wb < kb; Wb++) bb._lastColliderWorldVertices.push(ab.p.TransformCoordinates(this._positions[Wb], cb))
            }
            return sb._collide(bb._trianglePlanes, bb._lastColliderWorldVertices, this.Gsb(), bb.indexStart, bb.indexStart + bb.indexCount, bb.verticesStart, !!bb.pm(), this, this._shouldConvertRHS(), 7 === bb.pm()?.fillMode), this
          }
          _processCollisionsForSubMeshes(bb, cb) {
            const sb = this._scene.getCollidingSubMeshCandidates(this, bb),
              kb = sb.length;
            for (let Wb = 0; Wb < kb; Wb++) {
              const ab = sb.data[Wb];
              kb > 1 && !ab._checkCollision(bb) || this._collideForSubMesh(ab, cb, bb)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(bb) {
            if (!this.PJ()._checkCollision(bb)) return this;
            const cb = ab.m.Matrix[0],
              sb = ab.m.Matrix[1];
            return ab.e.ScalingToRef(1 / bb._radius.x, 1 / bb._radius.y, 1 / bb._radius.z, cb), this.worldMatrixFromCache.multiplyToRef(cb, sb), this._processCollisionsForSubMeshes(bb, sb), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(bb, cb, sb) {
            let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wb = arguments.length > 4 ? arguments[4] : void 0,
              Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Ub = new Hb.e,
              Ib = this.getClassName(),
              fb = "InstancedLinesMesh" === Ib || "LinesMesh" === Ib || "GreasedLineMesh" === Ib ? this.intersectionThreshold : 0,
              Mb = this.PJ();
            if (!this.XV) return Ub;
            if (!Tb && (!bb.intersectsSphere(Mb.Ikb, fb) || !bb.intersectsBox(Mb.boundingBox, fb))) return Ub;
            if (kb) return Ub.hit = !Tb, Ub.pickedMesh = Tb ? null : this, Ub.distance = Tb ? 0 : ab.p.Distance(bb.origin, Mb.Ikb.center), Ub.subMeshId = 0, Ub;
            if (!this._generatePointsArray()) return Ub;
            let Xb = null;
            const nb = this._scene.getIntersectingSubMeshCandidates(this, bb),
              mb = nb.length;
            let lb = !1;
            for (let ab = 0; ab < mb; ab++) {
              const bb = nb.data[ab].pm();
              if (bb && (7 == bb.fillMode || 0 == bb.fillMode || 1 == bb.fillMode || 2 == bb.fillMode || 4 == bb.fillMode)) {
                lb = !0;
                break
              }
            }
            if (!lb) return Ub.hit = !0, Ub.pickedMesh = this, Ub.distance = ab.p.Distance(bb.origin, Mb.Ikb.center), Ub.subMeshId = -1, Ub;
            for (let ab = 0; ab < mb; ab++) {
              const kb = nb.data[ab];
              if (mb > 1 && !Tb && !kb.canIntersects(bb)) continue;
              const Wb = kb.intersects(bb, this._positions, this.Gsb(), cb, sb);
              if (Wb && (cb || !Xb || Wb.distance < Xb.distance) && (Xb = Wb, Xb.subMeshId = kb._id, Xb._internalSubMeshId = ab, cb)) break
            }
            if (Xb) {
              const cb = Wb ?? this.getWorldMatrix(),
                sb = ab.m.Fm[0],
                kb = ab.m.Fm[1];
              ab.p.TransformCoordinatesToRef(bb.origin, cb, sb), bb.direction.scaleToRef(Xb.distance, kb);
              const Tb = ab.p.TransformNormal(kb, cb).addInPlace(sb);
              return Ub.hit = !0, Ub.distance = ab.p.Distance(sb, Tb), Ub.pickedPoint = Tb, Ub.pickedMesh = this, Ub.bu = Xb.bu || 0, Ub.bv = Xb.bv || 0, Ub.subMeshFaceId = Xb.faceId, Ub.faceId = Xb.faceId + nb.data[Xb._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Ub.subMeshId = Xb.subMeshId, Ub
            }
            return Ub
          }
          clone(bb, cb, sb) {
            return null
          }
          releaseSubMeshes() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.XV)
              for (; this.XV.length;) this.XV[0].dispose(bb);
            else this.XV = [];
            return this
          }
          dispose(bb) {
            let cb, sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const kb = this.EY();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), kb.freeActiveMeshes(), kb.freeRenderingGroups(), kb.renderingManager.maintainStateBetweenFrames && kb.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((bb => bb !== this && bb.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), cb = 0; cb < this._intersectionsInProgress.length; cb++) {
              const bb = this._intersectionsInProgress[cb],
                sb = bb._intersectionsInProgress.indexOf(this);
              bb._intersectionsInProgress.splice(sb, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Wb = kb.lights;
            for (const Tb of Wb) {
              let bb = Tb.includedOnlyMeshes.indexOf(this); - 1 !== bb && Tb.includedOnlyMeshes.splice(bb, 1), bb = Tb.excludedMeshes.indexOf(this), -1 !== bb && Tb.excludedMeshes.splice(bb, 1);
              const cb = Tb.getShadowGenerators();
              if (cb) {
                const sb = cb.values();
                for (let cb = sb.next(); !0 !== cb.done; cb = sb.next()) {
                  const sb = cb.value.getShadowMap();
                  sb && sb.renderList && (bb = sb.renderList.indexOf(this), -1 !== bb && sb.renderList.splice(bb, 1))
                }
              }
            }
            this.releaseSubMeshes(kb._isDisposing);
            const ab = kb.Sm();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, ab.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), ab.wipeCaches(), kb.pY(this), this._parentContainer) {
              const bb = this._parentContainer.meshes.indexOf(this);
              bb > -1 && this._parentContainer.meshes.splice(bb, 1), this._parentContainer = null
            }
            if (sb && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !bb)
              for (cb = 0; cb < kb.mV.length; cb++) kb.mV[cb].emitter === this && (kb.mV[cb].dispose(), cb--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(bb, sb)
          }
          _initFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetNormals || (bb.facetNormals = []), bb.facetPositions || (bb.facetPositions = []), bb.facetPartitioning || (bb.facetPartitioning = new Array), bb.facetNb = this.Gsb().length / 3 | 0, bb.partitioningSubdivisions = bb.partitioningSubdivisions ? bb.partitioningSubdivisions : 10, bb.partitioningBBoxRatio = bb.partitioningBBoxRatio ? bb.partitioningBBoxRatio : 1.01;
            for (let cb = 0; cb < bb.facetNb; cb++) bb.facetNormals[cb] = ab.p.Zero(), bb.facetPositions[cb] = ab.p.Zero();
            return bb.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetDataEnabled || this._initFacetData();
            const cb = this.getVerticesData(Tb.l.PositionKind),
              sb = this.Gsb(),
              kb = this.getVerticesData(Tb.l.NormalKind)?.slice(),
              Wb = this.PJ();
            if (bb.facetDepthSort && !bb.facetDepthSortEnabled) {
              if (bb.facetDepthSortEnabled = !0, sb instanceof Uint16Array) bb.depthSortedIndices = new Uint16Array(sb);
              else if (sb instanceof Uint32Array) bb.depthSortedIndices = new Uint32Array(sb);
              else {
                let cb = !1;
                for (let bb = 0; bb < sb.length; bb++)
                  if (sb[bb] > 65535) {
                    cb = !0;
                    break
                  } bb.depthSortedIndices = cb ? new Uint32Array(sb) : new Uint16Array(sb)
              }
              if (bb.facetDepthSortFunction = function(bb, cb) {
                  return cb.sqDistance - bb.sqDistance
                }, !bb.facetDepthSortFrom) {
                const cb = this.EY().activeCamera;
                bb.facetDepthSortFrom = cb ? cb.position : ab.p.Zero()
              }
              bb.depthSortedFacets = [];
              for (let cb = 0; cb < bb.facetNb; cb++) {
                const sb = {
                  ind: 3 * cb,
                  sqDistance: 0
                };
                bb.depthSortedFacets.push(sb)
              }
              bb.invertedMatrix = ab.e.Identity(), bb.facetDepthSortOrigin = ab.p.Zero()
            }
            bb.bbSize.x = Wb.maximum.x - Wb.minimum.x > Vb.d ? Wb.maximum.x - Wb.minimum.x : Vb.d, bb.bbSize.y = Wb.maximum.y - Wb.minimum.y > Vb.d ? Wb.maximum.y - Wb.minimum.y : Vb.d, bb.bbSize.z = Wb.maximum.z - Wb.minimum.z > Vb.d ? Wb.maximum.z - Wb.minimum.z : Vb.d;
            let Ib = bb.bbSize.x > bb.bbSize.y ? bb.bbSize.x : bb.bbSize.y;
            if (Ib = Ib > bb.bbSize.z ? Ib : bb.bbSize.z, bb.subDiv.max = bb.partitioningSubdivisions, bb.subDiv.X = Math.floor(bb.subDiv.max * bb.bbSize.x / Ib), bb.subDiv.Y = Math.floor(bb.subDiv.max * bb.bbSize.y / Ib), bb.subDiv.Z = Math.floor(bb.subDiv.max * bb.bbSize.z / Ib), bb.subDiv.X = bb.subDiv.X < 1 ? 1 : bb.subDiv.X, bb.subDiv.Y = bb.subDiv.Y < 1 ? 1 : bb.subDiv.Y, bb.subDiv.Z = bb.subDiv.Z < 1 ? 1 : bb.subDiv.Z, bb.facetParameters.facetNormals = this.getFacetLocalNormals(), bb.facetParameters.facetPositions = this.getFacetLocalPositions(), bb.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), bb.facetParameters.bInfo = Wb, bb.facetParameters.bbSize = bb.bbSize, bb.facetParameters.subDiv = bb.subDiv, bb.facetParameters.ratio = this.partitioningBBoxRatio, bb.facetParameters.depthSort = bb.facetDepthSort, bb.facetDepthSort && bb.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(bb.invertedMatrix), ab.p.TransformCoordinatesToRef(bb.facetDepthSortFrom, bb.invertedMatrix, bb.facetDepthSortOrigin), bb.facetParameters.distanceTo = bb.facetDepthSortOrigin), bb.facetParameters.depthSortedFacets = bb.depthSortedFacets, kb && Ub.e.ComputeNormals(cb, sb, kb, bb.facetParameters), bb.facetDepthSort && bb.facetDepthSortEnabled) {
              bb.depthSortedFacets.sort(bb.facetDepthSortFunction);
              const cb = bb.depthSortedIndices.length / 3 | 0;
              for (let kb = 0; kb < cb; kb++) {
                const cb = bb.depthSortedFacets[kb].ind;
                bb.depthSortedIndices[3 * kb] = sb[cb], bb.depthSortedIndices[3 * kb + 1] = sb[cb + 1], bb.depthSortedIndices[3 * kb + 2] = sb[cb + 2]
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
            const cb = ab.p.Zero();
            return this.getFacetPositionToRef(bb, cb), cb
          }
          getFacetPositionToRef(bb, cb) {
            const sb = this.getFacetLocalPositions()[bb],
              kb = this.getWorldMatrix();
            return ab.p.TransformCoordinatesToRef(sb, kb, cb), this
          }
          getFacetNormal(bb) {
            const cb = ab.p.Zero();
            return this.getFacetNormalToRef(bb, cb), cb
          }
          getFacetNormalToRef(bb, cb) {
            const sb = this.getFacetLocalNormals()[bb];
            return ab.p.TransformNormalToRef(sb, this.getWorldMatrix(), cb), this
          }
          getFacetsAtLocalCoordinates(bb, cb, sb) {
            const kb = this.PJ(),
              Wb = this._internalAbstractMeshDataInfo._facetData,
              ab = Math.floor((bb - kb.minimum.x * Wb.partitioningBBoxRatio) * Wb.subDiv.X * Wb.partitioningBBoxRatio / Wb.bbSize.x),
              Tb = Math.floor((cb - kb.minimum.y * Wb.partitioningBBoxRatio) * Wb.subDiv.Y * Wb.partitioningBBoxRatio / Wb.bbSize.y),
              Ub = Math.floor((sb - kb.minimum.z * Wb.partitioningBBoxRatio) * Wb.subDiv.Z * Wb.partitioningBBoxRatio / Wb.bbSize.z);
            return ab < 0 || ab > Wb.subDiv.max || Tb < 0 || Tb > Wb.subDiv.max || Ub < 0 || Ub > Wb.subDiv.max ? null : Wb.facetPartitioning[ab + Wb.subDiv.max * Tb + Wb.subDiv.max * Wb.subDiv.max * Ub]
          }
          getClosestFacetAtCoordinates(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ub = this.getWorldMatrix(),
              Ib = ab.m.Matrix[5];
            Ub.invertToRef(Ib);
            const Hb = ab.m.Fm[8];
            ab.p.TransformCoordinatesFromFloatsToRef(bb, cb, sb, Ib, Hb);
            const fb = this.getClosestFacetAtLocalCoordinates(Hb.x, Hb.y, Hb.z, kb, Wb, Tb);
            return kb && ab.p.TransformCoordinatesFromFloatsToRef(kb.x, kb.y, kb.z, Ub, kb), fb
          }
          getClosestFacetAtLocalCoordinates(bb, cb, sb, kb) {
            let Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              nb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              mb = null;
            const lb = this.getFacetLocalPositions(),
              Qb = this.getFacetLocalNormals(),
              eb = this.getFacetsAtLocalCoordinates(bb, cb, sb);
            if (!eb) return null;
            let Cb, Nb, Vb, Lb, ub = Number.MAX_VALUE;
            for (let Yb = 0; Yb < eb.length; Yb++) Nb = eb[Yb], Vb = Qb[Nb], Lb = lb[Nb], Ub = (bb - Lb.x) * Vb.x + (cb - Lb.y) * Vb.y + (sb - Lb.z) * Vb.z, (!Xb || Xb && nb && Ub >= 0 || Xb && !nb && Ub <= 0) && (Ub = Vb.x * Lb.x + Vb.y * Lb.y + Vb.z * Lb.z, Ib = -(Vb.x * bb + Vb.y * cb + Vb.z * sb - Ub) / (Vb.x * Vb.x + Vb.y * Vb.y + Vb.z * Vb.z), Hb = bb + Vb.x * Ib, fb = cb + Vb.y * Ib, Mb = sb + Vb.z * Ib, Wb = Hb - bb, ab = fb - cb, Tb = Mb - sb, Cb = Wb * Wb + ab * ab + Tb * Tb, Cb < ub && (ub = Cb, mb = Nb, kb && (kb.x = Hb, kb.y = fb, kb.z = Mb)));
            return mb
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetDataEnabled && (bb.facetDataEnabled = !1, bb.facetPositions = [], bb.facetNormals = [], bb.facetPartitioning = new Array, bb.facetParameters = {}, bb.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(bb, cb) {
            return this
          }
          createNormals(bb) {
            const cb = this.getVerticesData(Tb.l.PositionKind),
              sb = this.Gsb();
            let kb;
            return kb = this.isVerticesDataPresent(Tb.l.NormalKind) ? this.getVerticesData(Tb.l.NormalKind) : [], Ub.e.ComputeNormals(cb, sb, kb, {
              useRightHandedSystem: this.EY().useRightHandedSystem
            }), this.setVerticesData(Tb.l.NormalKind, kb, bb), this
          }
          async optimizeIndicesAsync() {
            const bb = this.Gsb();
            if (!bb) return this;
            const {
              OptimizeIndices: cb
            } = await sb.e(341).then((() => sb(41909)));
            return cb(bb), this.setIndices(bb, this.getTotalVertices()), this
          }
          alignWithNormal(bb, cb) {
            cb || (cb = Lb.d.Y);
            const sb = ab.m.Fm[0],
              kb = ab.m.Fm[1];
            return ab.p.CrossToRef(cb, bb, kb), ab.p.CrossToRef(bb, kb, sb), this.rotationQuaternion ? ab.f.RotationQuaternionFromAxisToRef(sb, bb, kb, this.rotationQuaternion) : ab.p.RotationFromAxisToRef(sb, bb, kb, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Qb.i)("EdgesRenderer")
          }
          enableEdgesRendering(bb, cb, sb) {
            throw (0, Qb.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.mV.filter((bb => bb.emitter === this))
          }
        }, (() => {
          const sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xb[Symbol.metadata] ?? null) : void 0;
          cb = [Yb.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, kb.j)(bb, null, cb, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: bb => "_ApplySkeleton" in bb,
              get: bb => bb._ApplySkeleton
            },
            metadata: sb
          }, null, nb), sb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sb
          })
        })(), bb.OCCLUSION_TYPE_NONE = ((0, kb.m)(bb, nb), 0), bb.OCCLUSION_TYPE_OPTIMISTIC = 1, bb.OCCLUSION_TYPE_STRICT = 2, bb.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, bb.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, bb.CULLINGSTRATEGY_STANDARD = 0, bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, bb.DefaultIsPickable = !0, bb
      })(),
      Eb = !1;

    function ib() {
      Eb || (Eb = !0, (0, Jb.h)("BABYLON.AbstractMesh", Db))
    }(nb = Db.prototype).createOrUpdateSubmeshesOctree ?? (nb.createOrUpdateSubmeshesOctree = (0, Qb.e)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (mb = Db.prototype).getPhysicsImpostor ?? (mb.getPhysicsImpostor = (0, Qb.e)("AbstractMesh", "getPhysicsImpostor")), (lb = Db.prototype).setPhysicsLinkWith ?? (lb.setPhysicsLinkWith = (0, Qb.e)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Db.prototype, "occlusionRetryCount") || Object.defineProperty(Db.prototype, "occlusionRetryCount", (0, Qb.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Db.prototype, "occlusionType") || Object.defineProperty(Db.prototype, "occlusionType", (0, Qb.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Db.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Db.prototype, "occlusionQueryAlgorithmType", (0, Qb.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Db.prototype, "isOccluded") || Object.defineProperty(Db.prototype, "isOccluded", (0, Qb.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Db.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Db.prototype, "isOcclusionQueryInProgress", (0, Qb.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Db.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Db.prototype, "forceRenderingWhenOccluded", (0, Qb.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Db.prototype, "occlusionForRenderPassId") || Object.defineProperty(Db.prototype, "occlusionForRenderPassId", (0, Qb.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Db.prototype, "decalMap") || Object.defineProperty(Db.prototype, "decalMap", (0, Qb.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Db.prototype, "LJ") || Object.defineProperty(Db.prototype, "LJ", (0, Qb.d)("AbstractMesh", "LJ")), Object.getOwnPropertyDescriptor(Db.prototype, "physicsImpostor") || Object.defineProperty(Db.prototype, "physicsImpostor", (0, Qb.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Db.prototype, "showBoundingBox") || Object.defineProperty(Db.prototype, "showBoundingBox", (0, Qb.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Db.prototype, "edgesRenderer") || Object.defineProperty(Db.prototype, "edgesRenderer", (0, Qb.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Db.prototype, "renderOutline") || Object.defineProperty(Db.prototype, "renderOutline", (0, Qb.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Db.prototype, "renderOverlay") || Object.defineProperty(Db.prototype, "renderOverlay", (0, Qb.d)("AbstractMesh", "renderOverlay"))
  },
  39853: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => eb
    });
    var kb = sb(36656),
      Wb = sb(36830),
      ab = sb(39848),
      Tb = sb(39576),
      Ub = sb(39737),
      Ib = sb(39856),
      Hb = sb(39745),
      fb = sb(39531),
      Mb = sb(38284),
      Xb = sb(39449),
      nb = sb(39752),
      mb = sb(36677),
      lb = sb(39861),
      Qb = sb(39495);
    class eb {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(bb) {
        this._boundingBias ? this._boundingBias.ssb(bb) : this._boundingBias = bb.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(bb) {
        const cb = new eb(eb.RandomId(), bb.EY());
        return cb.applyToMesh(bb), cb
      }
      get meshes() {
        return this._meshes
      }
      constructor(bb, cb, sb) {
        let Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new kb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new kb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = cb || mb.d.LastCreatedScene, this._scene && (this.id = bb, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Sm(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Wb, null !== Tb && (this._totalVertices = Tb), sb ? this.setAllVerticesData(sb, Wb) : null === Tb && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), ab && (this.applyToMesh(ab), ab.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      EY() {
        return this._scene
      }
      Sm() {
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
        for (const cb in this._vertexBuffers) bb.add(this._vertexBuffers[cb].getWrapperBuffer());
        bb.forEach((bb => {
          bb._rebuild()
        }))
      }
      setAllVerticesData(bb, cb) {
        bb.applyToGeometry(this, cb), this._notifyUpdate()
      }
      setVerticesData(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0;
        sb && Array.isArray(cb) && (cb = new Float32Array(cb));
        const Wb = new Tb.l(this._engine, cb, bb, {
          updatable: sb,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: kb,
          label: "Geometry_" + this.id + "_" + bb
        });
        this.setVerticesBuffer(Wb)
      }
      removeVerticesData(bb) {
        this._vertexBuffers[bb] && (this._vertexBuffers[bb].dispose(), delete this._vertexBuffers[bb]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Wb = bb.getKind();
        this._vertexBuffers[Wb] && sb && this._vertexBuffers[Wb].dispose(), bb._buffer && bb._ownsBuffer && bb._buffer._increaseReferences(), this._vertexBuffers[Wb] = bb;
        const ab = this._meshes,
          Ub = ab.length;
        if (Wb === Tb.l.PositionKind) {
          this._totalVertices = cb ?? bb._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : bb.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const sb = this._extend && this._extend.minimum || new kb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Wb = this._extend && this._extend.maximum || new kb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let bb = 0; bb < Ub; bb++) {
            const cb = ab[bb];
            cb.buildBoundingInfo(sb, Wb), cb._createGlobalSubMesh(cb.isUnIndexed), cb.computeWorldMatrix(!0), cb.synchronizeInstances()
          }
        }
        this._notifyUpdate(Wb)
      }
      updateVerticesDataDirectly(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wb = this.getVertexBuffer(bb);
        Wb && (Wb.updateDirectly(cb, sb, kb), this._notifyUpdate(bb))
      }
      updateVerticesData(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this.getVertexBuffer(bb);
        kb && (kb.update(cb), bb === Tb.l.PositionKind && this._updateBoundingInfo(sb, cb), this._notifyUpdate(bb))
      }
      _updateBoundingInfo(bb, cb) {
        if (bb && this._updateExtend(cb), this._resetPointsArrayCache(), bb) {
          const bb = this._meshes;
          for (const cb of bb) {
            cb.hasBoundingInfo ? cb.PJ().reConstruct(this._extend.minimum, this._extend.maximum) : cb.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const bb = cb.XV;
            for (const cb of bb) cb.refreshBoundingInfo()
          }
        }
      }
      _bind(bb, cb, sb, kb) {
        if (!bb) return;
        void 0 === cb && (cb = this._indexBuffer);
        const Wb = this.getVertexBuffers();
        if (!Wb) return;
        if (cb != this._indexBuffer || !this._vertexArrayObjects && !kb) return void this._engine.bindBuffers(Wb, cb, bb, sb);
        const ab = kb || this._vertexArrayObjects,
          Tb = this._engine;
        ab[bb.key] || (ab[bb.key] = Tb.recordVertexArrayObject(Wb, cb, bb, sb)), Tb.bindVertexArrayObject(ab[bb.key], cb)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(bb, cb, sb) {
        const kb = this.getVertexBuffer(bb);
        return kb ? kb.getFloatData(this._totalVertices, sb || cb && 1 !== this._meshes.length) : null
      }
      copyVerticesData(bb, cb) {
        const sb = this.getVertexBuffer(bb);
        if (!sb) return;
        cb[bb] || (cb[bb] = new Float32Array(this._totalVertices * sb.getSize()));
        const kb = sb.getData();
        kb && (0, Qb.g)(kb, sb.getSize(), sb.type, sb.byteOffset, sb.byteStride, sb.normalized, this._totalVertices, cb[bb])
      }
      isVertexBufferUpdatable(bb) {
        const cb = this._vertexBuffers[bb];
        return !!cb && cb.isUpdatable()
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
        let cb;
        if (!this._vertexBuffers && this._delayInfo)
          for (cb in this._delayInfo) bb.push(cb);
        else
          for (cb in this._vertexBuffers) bb.push(cb);
        return bb
      }
      updateIndices(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const kb = bb.length !== this._indices.length;
            if (sb || (this._indices = bb.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, bb, cb), kb)
              for (const bb of this._meshes) bb._createGlobalSubMesh(!0)
          } else this.setIndices(bb, null, !0)
      }
      setIndexBuffer(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = bb, this._totalVertices = cb, this._totalIndices = sb, bb.is32Bits = null === kb ? cb > 65535 : kb;
        for (const Wb of this._meshes) Wb._createGlobalSubMesh(!0), Wb.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = bb, this._indexBufferIsUpdatable = sb, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, sb, "Geometry_" + this.id + "_IndexBuffer")), void 0 != cb && (this._totalVertices = cb);
        for (const Wb of this._meshes) Wb._createGlobalSubMesh(!kb), Wb.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Gsb(bb, cb) {
        if (!this.isReady()) return null;
        const sb = this._indices;
        return cb || bb && 1 !== this._meshes.length ? sb.slice() : sb
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        bb && this._vertexArrayObjects && this._vertexArrayObjects[bb.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[bb.key]), delete this._vertexArrayObjects[bb.key])
      }
      releaseForMesh(bb, cb) {
        const sb = this._meshes,
          kb = sb.indexOf(bb); - 1 !== kb && (sb.splice(kb, 1), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject(), bb._geometry = null, 0 === sb.length && cb && this.dispose())
      }
      applyToMesh(bb) {
        if (bb._geometry === this) return;
        const cb = bb._geometry;
        cb && cb.releaseForMesh(bb), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject();
        const sb = this._meshes;
        bb._geometry = this, bb._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), sb.push(bb), this.isReady() ? this._applyToMesh(bb) : this._boundingInfo && bb.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!bb && (bb = this.getVerticesData(Tb.l.PositionKind), !bb)) return;
          this._extend = (0, nb.e)(bb, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(bb) {
        for (const cb in this._vertexBuffers) {
          const sb = this._vertexBuffers[cb];
          sb._buffer.getBuffer() || sb.create(), cb === Tb.l.PositionKind && (this._extend || this._updateExtend(), bb.buildBoundingInfo(this._extend.minimum, this._extend.maximum), bb._createGlobalSubMesh(bb.isUnIndexed), bb._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), bb._syncGeometryWithMorphTargetManager(), bb.synchronizeInstances()
      }
      _notifyUpdate(bb) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, bb), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const cb of this._meshes) cb._markSubMeshesAsAttributesDirty()
      }
      load(bb, cb) {
        2 !== this.delayLoadState && (this.isReady() ? cb && cb() : (this.delayLoadState = 2, this._queueLoad(bb, cb)))
      }
      _queueLoad(bb, cb) {
        this.delayLoadingFile && (bb.addPendingData(this), (async () => {
          try {
            const sb = await bb._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void bb.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(sb), this), this.delayLoadState = 1, this._delayInfo = [], bb.removePendingData(this);
            const kb = this._meshes,
              Wb = kb.length;
            for (let bb = 0; bb < Wb; bb++) this._applyToMesh(kb[bb]);
            cb && cb()
          } catch (sb) {
            bb.removePendingData(this), bb.Scb || Mb.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${sb}`)
          }
        })())
      }
      toLeftHanded() {
        const bb = this.Gsb(!1);
        if (null != bb && bb.length > 0) {
          for (let cb = 0; cb < bb.length; cb += 3) {
            const sb = bb[cb + 0];
            bb[cb + 0] = bb[cb + 2], bb[cb + 2] = sb
          }
          this.setIndices(bb)
        }
        const cb = this.getVerticesData(Tb.l.PositionKind, !1);
        if (null != cb && cb.length > 0) {
          for (let bb = 0; bb < cb.length; bb += 3) cb[bb + 2] = -cb[bb + 2];
          this.setVerticesData(Tb.l.PositionKind, cb, !1)
        }
        const sb = this.getVerticesData(Tb.l.NormalKind, !1);
        if (null != sb && sb.length > 0) {
          for (let bb = 0; bb < sb.length; bb += 3) sb[bb + 2] = -sb[bb + 2];
          this.setVerticesData(Tb.l.NormalKind, sb, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const bb = this.getVerticesData(Tb.l.PositionKind);
        if (!bb || 0 === bb.length) return !1;
        for (let cb = 3 * this._positionsCache.length, sb = this._positionsCache.length; cb < bb.length; cb += 3, ++sb) this._positionsCache[sb] = kb.p.FromArray(bb, cb);
        for (let cb = 0, sb = 0; cb < bb.length; cb += 3, ++sb) this._positionsCache[sb].set(bb[0 + cb], bb[1 + cb], bb[2 + cb]);
        return this._positionsCache.length = bb.length / 3, this._positions = this._positionsCache, !0
      }
      Scb() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const sb in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[sb]);
          this._vertexArrayObjects = {};
          const bb = this._meshes,
            cb = bb.length;
          for (let sb = 0; sb < cb; sb++) bb[sb]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const bb = this._meshes,
          cb = bb.length;
        let sb;
        for (sb = 0; sb < cb; sb++) this.releaseForMesh(bb[sb]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const kb in this._vertexBuffers) this._vertexBuffers[kb].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const bb = this._parentContainer.geometries.indexOf(this);
          bb > -1 && this._parentContainer.geometries.splice(bb, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(bb) {
        const cb = new eb(bb, this._scene),
          sb = this.Gsb(void 0, !0);
        sb && cb.setIndices(sb);
        let kb, Wb = !1;
        for (kb in this._vertexBuffers) {
          const bb = this.getVertexBuffer(kb),
            sb = bb.getData();
          if (!sb) continue;
          const ab = bb.isUpdatable(),
            Ub = bb.getSize(),
            {
              type: Ib,
              byteOffset: Hb,
              byteStride: fb,
              normalized: Mb
            } = bb;
          Wb = Wb || ab;
          let Xb = this._totalVertices;
          if (bb.getIsInstanced()) {
            let bb;
            bb = sb instanceof Array ? 4 * sb.length : sb.byteLength, Xb = bb / fb
          }
          const nb = (0, Qb.t)(sb, Ub, Ib, Hb, fb, Xb, !0),
            mb = new Tb.l(this._engine, nb, kb, {
              updatable: ab,
              useBytes: !1,
              stride: Ub,
              size: Ub,
              offset: 0,
              type: Ib,
              normalized: Mb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            });
          cb.setVerticesBuffer(mb, Xb)
        }
        for (kb in cb._updatable = Wb, cb.delayLoadState = this.delayLoadState, cb.delayLoadingFile = this.delayLoadingFile, cb._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) cb._delayInfo = cb._delayInfo || [], cb._delayInfo.push(kb);
        return cb._boundingInfo = new Hb.c(this._extend.minimum, this._extend.maximum), cb
      }
      serialize() {
        const bb = {};
        return bb.id = this.id, bb.uniqueId = this.uniqueId, bb.updatable = this._updatable, Xb.c && Xb.c.HasTags(this) && (bb.tags = Xb.c.GetTags(this)), bb
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
        return this.isVerticesDataPresent(Tb.l.PositionKind) && (bb.positions = this._toNumberArray(this.getVerticesData(Tb.l.PositionKind)), this.isVertexBufferUpdatable(Tb.l.PositionKind) && (bb.positionsUpdatable = !0)), this.isVerticesDataPresent(Tb.l.NormalKind) && (bb.normals = this._toNumberArray(this.getVerticesData(Tb.l.NormalKind)), this.isVertexBufferUpdatable(Tb.l.NormalKind) && (bb.normalsUpdatable = !0)), this.isVerticesDataPresent(Tb.l.TangentKind) && (bb.tangents = this._toNumberArray(this.getVerticesData(Tb.l.TangentKind)), this.isVertexBufferUpdatable(Tb.l.TangentKind) && (bb.tangentsUpdatable = !0)), this.isVerticesDataPresent(Tb.l.UVKind) && (bb.uvs = this._toNumberArray(this.getVerticesData(Tb.l.UVKind)), this.isVertexBufferUpdatable(Tb.l.UVKind) && (bb.uvsUpdatable = !0)), this.isVerticesDataPresent(Tb.l.UV2Kind) && (bb.uvs2 = this._toNumberArray(this.getVerticesData(Tb.l.UV2Kind)), this.isVertexBufferUpdatable(Tb.l.UV2Kind) && (bb.uvs2Updatable = !0)), this.isVerticesDataPresent(Tb.l.UV3Kind) && (bb.uvs3 = this._toNumberArray(this.getVerticesData(Tb.l.UV3Kind)), this.isVertexBufferUpdatable(Tb.l.UV3Kind) && (bb.uvs3Updatable = !0)), this.isVerticesDataPresent(Tb.l.UV4Kind) && (bb.uvs4 = this._toNumberArray(this.getVerticesData(Tb.l.UV4Kind)), this.isVertexBufferUpdatable(Tb.l.UV4Kind) && (bb.uvs4Updatable = !0)), this.isVerticesDataPresent(Tb.l.UV5Kind) && (bb.uvs5 = this._toNumberArray(this.getVerticesData(Tb.l.UV5Kind)), this.isVertexBufferUpdatable(Tb.l.UV5Kind) && (bb.uvs5Updatable = !0)), this.isVerticesDataPresent(Tb.l.UV6Kind) && (bb.uvs6 = this._toNumberArray(this.getVerticesData(Tb.l.UV6Kind)), this.isVertexBufferUpdatable(Tb.l.UV6Kind) && (bb.uvs6Updatable = !0)), this.isVerticesDataPresent(Tb.l.ColorKind) && (bb.colors = this._toNumberArray(this.getVerticesData(Tb.l.ColorKind)), this.isVertexBufferUpdatable(Tb.l.ColorKind) && (bb.colorsUpdatable = !0)), this.isVerticesDataPresent(Tb.l.MatricesIndicesKind) && (bb.matricesIndices = this._toNumberArray(this.getVerticesData(Tb.l.MatricesIndicesKind)), bb.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Tb.l.MatricesIndicesKind) && (bb.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Tb.l.MatricesWeightsKind) && (bb.matricesWeights = this._toNumberArray(this.getVerticesData(Tb.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(Tb.l.MatricesWeightsKind) && (bb.matricesWeightsUpdatable = !0)), bb.indices = this._toNumberArray(this.Gsb()), bb
      }
      static ExtractFromMesh(bb, cb) {
        const sb = bb._geometry;
        return sb ? sb.copy(cb) : null
      }
      static RandomId() {
        return fb.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(bb, cb) {
        for (let sb = 0; sb < cb.geometries.length; sb++)
          if (cb.geometries[sb]._loadedUniqueId === bb) return cb.geometries[sb];
        return null
      }
      static _ImportGeometry(bb, cb) {
        const sb = cb.EY(),
          kb = bb.geometryUniqueId,
          ab = bb.geometryId;
        if (kb || ab) {
          const bb = kb ? this._GetGeometryByLoadedUniqueId(kb, sb) : sb.getGeometryById(ab);
          bb && bb.applyToMesh(cb)
        } else if (bb instanceof ArrayBuffer) {
          const sb = cb._binaryInfo;
          if (sb.positionsAttrDesc && sb.positionsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.positionsAttrDesc.offset, sb.positionsAttrDesc.count);
            cb.setVerticesData(Tb.l.PositionKind, kb, !1)
          }
          if (sb.normalsAttrDesc && sb.normalsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.normalsAttrDesc.offset, sb.normalsAttrDesc.count);
            cb.setVerticesData(Tb.l.NormalKind, kb, !1)
          }
          if (sb.tangetsAttrDesc && sb.tangetsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.tangetsAttrDesc.offset, sb.tangetsAttrDesc.count);
            cb.setVerticesData(Tb.l.TangentKind, kb, !1)
          }
          if (sb.uvsAttrDesc && sb.uvsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvsAttrDesc.offset, sb.uvsAttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UVKind, kb, !1)
          }
          if (sb.uvs2AttrDesc && sb.uvs2AttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvs2AttrDesc.offset, sb.uvs2AttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UV2Kind, kb, !1)
          }
          if (sb.uvs3AttrDesc && sb.uvs3AttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvs3AttrDesc.offset, sb.uvs3AttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UV3Kind, kb, !1)
          }
          if (sb.uvs4AttrDesc && sb.uvs4AttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvs4AttrDesc.offset, sb.uvs4AttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UV4Kind, kb, !1)
          }
          if (sb.uvs5AttrDesc && sb.uvs5AttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvs5AttrDesc.offset, sb.uvs5AttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UV5Kind, kb, !1)
          }
          if (sb.uvs6AttrDesc && sb.uvs6AttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.uvs6AttrDesc.offset, sb.uvs6AttrDesc.count);
            if (lb.e)
              for (let bb = 1; bb < kb.length; bb += 2) kb[bb] = 1 - kb[bb];
            cb.setVerticesData(Tb.l.UV6Kind, kb, !1)
          }
          if (sb.colorsAttrDesc && sb.colorsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.colorsAttrDesc.offset, sb.colorsAttrDesc.count);
            cb.setVerticesData(Tb.l.ColorKind, kb, !1, sb.colorsAttrDesc.stride)
          }
          if (sb.matricesIndicesAttrDesc && sb.matricesIndicesAttrDesc.count > 0) {
            const kb = new Int32Array(bb, sb.matricesIndicesAttrDesc.offset, sb.matricesIndicesAttrDesc.count),
              Wb = [];
            for (let bb = 0; bb < kb.length; bb++) {
              const cb = kb[bb];
              Wb.push(255 & cb), Wb.push((65280 & cb) >> 8), Wb.push((16711680 & cb) >> 16), Wb.push(cb >> 24 & 255)
            }
            cb.setVerticesData(Tb.l.MatricesIndicesKind, Wb, !1)
          }
          if (sb.matricesIndicesExtraAttrDesc && sb.matricesIndicesExtraAttrDesc.count > 0) {
            const kb = new Int32Array(bb, sb.matricesIndicesExtraAttrDesc.offset, sb.matricesIndicesExtraAttrDesc.count),
              Wb = [];
            for (let bb = 0; bb < kb.length; bb++) {
              const cb = kb[bb];
              Wb.push(255 & cb), Wb.push((65280 & cb) >> 8), Wb.push((16711680 & cb) >> 16), Wb.push(cb >> 24 & 255)
            }
            cb.setVerticesData(Tb.l.MatricesIndicesExtraKind, Wb, !1)
          }
          if (sb.matricesWeightsAttrDesc && sb.matricesWeightsAttrDesc.count > 0) {
            const kb = new Float32Array(bb, sb.matricesWeightsAttrDesc.offset, sb.matricesWeightsAttrDesc.count);
            cb.setVerticesData(Tb.l.MatricesWeightsKind, kb, !1)
          }
          if (sb.indicesAttrDesc && sb.indicesAttrDesc.count > 0) {
            const kb = new Int32Array(bb, sb.indicesAttrDesc.offset, sb.indicesAttrDesc.count);
            cb.setIndices(kb, null)
          }
          if (sb.subMeshesAttrDesc && sb.subMeshesAttrDesc.count > 0) {
            const kb = new Int32Array(bb, sb.subMeshesAttrDesc.offset, 5 * sb.subMeshesAttrDesc.count);
            cb.XV = [];
            for (let bb = 0; bb < sb.subMeshesAttrDesc.count; bb++) {
              const sb = kb[5 * bb + 0],
                Wb = kb[5 * bb + 1],
                ab = kb[5 * bb + 2],
                Tb = kb[5 * bb + 3],
                Ib = kb[5 * bb + 4];
              Ub.b.AddToMesh(sb, Wb, ab, Tb, Ib, cb)
            }
          }
        } else if (bb.positions && bb.normals && bb.indices) {
          if (cb.setVerticesData(Tb.l.PositionKind, bb.positions, bb.positions._updatable || bb.positionsUpdatable), cb.setVerticesData(Tb.l.NormalKind, bb.normals, bb.normals._updatable || bb.normalsUpdatable), bb.tangents && cb.setVerticesData(Tb.l.TangentKind, bb.tangents, bb.tangents._updatable || bb.tangentsUpdatable), bb.uvs && cb.setVerticesData(Tb.l.UVKind, bb.uvs, bb.uvs._updatable || bb.uvsUpdatable), bb.uvs2 && cb.setVerticesData(Tb.l.UV2Kind, bb.uvs2, bb.uvs2._updatable || bb.uvs2Updatable), bb.uvs3 && cb.setVerticesData(Tb.l.UV3Kind, bb.uvs3, bb.uvs3._updatable || bb.uvs3Updatable), bb.uvs4 && cb.setVerticesData(Tb.l.UV4Kind, bb.uvs4, bb.uvs4._updatable || bb.uvs4Updatable), bb.uvs5 && cb.setVerticesData(Tb.l.UV5Kind, bb.uvs5, bb.uvs5._updatable || bb.uvs5Updatable), bb.uvs6 && cb.setVerticesData(Tb.l.UV6Kind, bb.uvs6, bb.uvs6._updatable || bb.uvs6Updatable), bb.colors && cb.setVerticesData(Tb.l.ColorKind, Wb.g.CheckColors4(bb.colors, bb.positions.length / 3), bb.colors._updatable), bb.matricesIndices)
            if (bb.matricesIndices._isExpanded || bb.matricesIndicesExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExpanded, cb.setVerticesData(Tb.l.MatricesIndicesKind, bb.matricesIndices, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable);
            else {
              const sb = [];
              for (let cb = 0; cb < bb.matricesIndices.length; cb++) {
                const kb = bb.matricesIndices[cb];
                sb.push(255 & kb), sb.push((65280 & kb) >> 8), sb.push((16711680 & kb) >> 16), sb.push(kb >> 24 & 255)
              }
              cb.setVerticesData(Tb.l.MatricesIndicesKind, sb, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable)
            } if (bb.matricesIndicesExtra)
            if (bb.matricesIndicesExtraExpanded || bb.matricesIndicesExtra._isExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExtraExpanded, cb.setVerticesData(Tb.l.MatricesIndicesExtraKind, bb.matricesIndicesExtra, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable);
            else {
              const sb = [];
              for (let cb = 0; cb < bb.matricesIndicesExtra.length; cb++) {
                const kb = bb.matricesIndicesExtra[cb];
                sb.push(255 & kb), sb.push((65280 & kb) >> 8), sb.push((16711680 & kb) >> 16), sb.push(kb >> 24 & 255)
              }
              cb.setVerticesData(Tb.l.MatricesIndicesExtraKind, sb, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable)
            } bb.matricesWeights && (eb._CleanMatricesWeights(bb, cb), cb.setVerticesData(Tb.l.MatricesWeightsKind, bb.matricesWeights, bb.matricesWeights._updatable)), bb.matricesWeightsExtra && cb.setVerticesData(Tb.l.MatricesWeightsExtraKind, bb.matricesWeightsExtra, bb.matricesWeights._updatable), cb.setIndices(bb.indices, null)
        }
        if (bb.XV) {
          cb.XV = [];
          for (let sb = 0; sb < bb.XV.length; sb++) {
            const kb = bb.XV[sb];
            Ub.b.AddToMesh(kb.materialIndex, kb.verticesStart, kb.verticesCount, kb.indexStart, kb.indexCount, cb)
          }
        }
        cb._shouldGenerateFlatShading && (cb.convertToFlatShadedMesh(), cb._shouldGenerateFlatShading = !1), cb.computeWorldMatrix(!0), sb.onMeshImportedObservable.notifyObservers(cb)
      }
      static _CleanMatricesWeights(bb, cb) {
        const sb = .001;
        if (!Ib.b.CleanBoneMatrixWeights) return;
        let kb;
        if (!(bb.skeletonId > -1)) return;
        {
          const sb = cb.EY().getLastSkeletonById(bb.skeletonId);
          if (!sb) return;
          kb = sb.bones.length
        }
        const Wb = cb.getVerticesData(Tb.l.MatricesIndicesKind),
          ab = cb.getVerticesData(Tb.l.MatricesIndicesExtraKind),
          Ub = bb.matricesWeights,
          Hb = bb.matricesWeightsExtra,
          fb = bb.numBoneInfluencer,
          Mb = Ub.length;
        for (let Tb = 0; Tb < Mb; Tb += 4) {
          let bb = 0,
            cb = -1;
          for (let kb = 0; kb < 4; kb++) {
            const Wb = Ub[Tb + kb];
            bb += Wb, Wb < sb && cb < 0 && (cb = kb)
          }
          if (Hb)
            for (let kb = 0; kb < 4; kb++) {
              const Wb = Hb[Tb + kb];
              bb += Wb, Wb < sb && cb < 0 && (cb = kb + 4)
            }
          if ((cb < 0 || cb > fb - 1) && (cb = fb - 1), bb > sb) {
            const cb = 1 / bb;
            for (let bb = 0; bb < 4; bb++) Ub[Tb + bb] *= cb;
            if (Hb)
              for (let bb = 0; bb < 4; bb++) Hb[Tb + bb] *= cb
          } else cb >= 4 ? (Hb[Tb + cb - 4] = 1 - bb, ab[Tb + cb - 4] = kb) : (Ub[Tb + cb] = 1 - bb, Wb[Tb + cb] = kb)
        }
        cb.setVerticesData(Tb.l.MatricesIndicesKind, Wb), bb.matricesWeightsExtra && cb.setVerticesData(Tb.l.MatricesIndicesExtraKind, ab)
      }
      static Parse(bb, cb, sb) {
        const Wb = new eb(bb.id, cb, void 0, bb.updatable);
        return Wb._loadedUniqueId = bb.uniqueId, Xb.c && Xb.c.AddTagsTo(Wb, bb.tags), bb.delayLoadingFile ? (Wb.delayLoadState = 4, Wb.delayLoadingFile = sb + bb.delayLoadingFile, Wb._boundingInfo = new Hb.c(kb.p.FromArray(bb.boundingBoxMinimum), kb.p.FromArray(bb.boundingBoxMaximum)), Wb._delayInfo = [], bb.hasUVs && Wb._delayInfo.push(Tb.l.UVKind), bb.hasUVs2 && Wb._delayInfo.push(Tb.l.UV2Kind), bb.hasUVs3 && Wb._delayInfo.push(Tb.l.UV3Kind), bb.hasUVs4 && Wb._delayInfo.push(Tb.l.UV4Kind), bb.hasUVs5 && Wb._delayInfo.push(Tb.l.UV5Kind), bb.hasUVs6 && Wb._delayInfo.push(Tb.l.UV6Kind), bb.hasColors && Wb._delayInfo.push(Tb.l.ColorKind), bb.hasMatricesIndices && Wb._delayInfo.push(Tb.l.MatricesIndicesKind), bb.hasMatricesWeights && Wb._delayInfo.push(Tb.l.MatricesWeightsKind), Wb._delayLoadingFunction = ab.e.ImportVertexData) : ab.e.ImportVertexData(bb, Wb), cb.pushGeometry(Wb, !0), Wb
      }
    }
  },
  39884: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb,
      i: () => mb
    });
    var kb = sb(36656),
      Wb = sb(38284),
      ab = sb(39865),
      Tb = sb(39835),
      Ub = sb(38279),
      Ib = sb(39867),
      Hb = sb(39576),
      fb = sb(36698);
    class Mb extends ab.e {
      constructor(bb, cb) {
        super(bb, cb.EY()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, cb.U1(this), this._sourceMesh = cb, this._unIndexed = cb._unIndexed, this.position.ssb(cb.position), this.rotation.ssb(cb.rotation), this.bl.ssb(cb.bl), cb.rotationQuaternion && (this.rotationQuaternion = cb.rotationQuaternion.clone()), this.animations = cb.animations.slice();
        for (const sb of cb.getAnimationRanges()) null != sb && this.createAnimationRange(sb.name, sb.from, sb.to);
        if (this.infiniteDistance = cb.infiniteDistance, this.setPivotMatrix(cb.getPivotMatrix()), cb.skeleton || cb.morphTargetManager || !cb.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const bb = cb.PJ();
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
        this._sourceMesh?.receiveShadows !== bb && Wb.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(bb) {
        this._sourceMesh?.material !== bb && Wb.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(bb) {
        this._sourceMesh?.visibility !== bb && Wb.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(bb) {
        this._sourceMesh?.skeleton !== bb && Wb.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(bb) {
        this._sourceMesh && bb !== this._sourceMesh.renderingGroupId && Wb.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(bb) {
        this._sourceMesh && bb !== this._sourceMesh.meshBlendingTag && Wb.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get Pkb() {
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
      getVerticesData(bb, cb, sb) {
        return this._sourceMesh.getVerticesData(bb, cb, sb)
      }
      copyVerticesData(bb, cb) {
        this._sourceMesh.copyVerticesData(bb, cb)
      }
      getVertexBuffer(bb, cb) {
        return this._sourceMesh.getVertexBuffer(bb, cb)
      }
      setVerticesData(bb, cb, sb, kb) {
        return this.Pkb && this.Pkb.setVerticesData(bb, cb, sb, kb), this.Pkb
      }
      updateVerticesData(bb, cb, sb, kb) {
        return this.Pkb && this.Pkb.updateVerticesData(bb, cb, sb, kb), this.Pkb
      }
      setIndices(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.Pkb && this.Pkb.setIndices(bb, cb), this.Pkb
      }
      isVerticesDataPresent(bb) {
        return this._sourceMesh.isVerticesDataPresent(bb)
      }
      Gsb() {
        return this._sourceMesh.Gsb()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let bb, cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.PJ().isLocked) return this;
        bb = "object" === typeof cb ? cb : {
          applySkeleton: cb,
          applyMorph: sb
        };
        const kb = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(bb, null, Hb.l.PositionKind), kb), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(bb, cb) {
        if (super._activate(bb, cb), this._sourceMesh.XV || Wb.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, bb), cb) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Ib.c.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new kb.e);
          const bb = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, kb.m.Fm[7].ssb(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.ssb(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.ssb(kb.m.Fm[7]), this._currentLOD._masterMesh = bb, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get qY() {
        return !0
      }
      getLOD(bb) {
        if (!bb) return this;
        const cb = this.Pkb.getLODLevels();
        if (cb && 0 !== cb.length) {
          const cb = this.PJ();
          this._currentLOD = this.Pkb.getLOD(bb, cb.Ikb)
        } else this._currentLOD = this.Pkb;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(bb) {
        return this.Pkb._preActivateForIntermediateRendering(bb)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.XV)
          for (let bb = 0; bb < this._sourceMesh.XV.length; bb++) this._sourceMesh.XV[bb].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.PJ().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(bb);
        if (Ub.c.DeepCopy(this, kb, ["name", "XV", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Pkb", "qY", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ykb", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LTb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), cb && (kb.parent = cb), !sb)
          for (let Wb = 0; Wb < this.EY().meshes.length; Wb++) {
            const bb = this.EY().meshes[Wb];
            bb.parent === this && bb.clone(bb.name, kb)
          }
        return kb.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(kb), kb
      }
      dispose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.W4(this), super.dispose(bb, cb)
      }
      _serializeAsParent(bb) {
        super._serializeAsParent(bb), bb.parentId = this._sourceMesh.uniqueId, bb.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0, cb && cb.newSourcedMesh);
        kb && sb && sb(this, kb);
        for (const Wb of this.getChildTransformNodes(!0)) Wb.instantiateHierarchy(kb, cb, sb);
        return kb
      }
    }
    let Xb = !1;

    function nb(bb, cb, sb, kb, Wb) {
      for (let ab = 0; ab < cb.length; ab++) {
        const Tb = bb[cb[ab]] ?? 0,
          Ub = Wb + sb[ab];
        Tb.toArray ? Tb.toArray(kb, Ub) : Tb.copyToArray ? Tb.copyToArray(kb, Ub) : kb[Ub] = Tb
      }
    }

    function mb() {
      Xb || (Xb = !0, Tb.b._instancedMeshFactory = (bb, cb) => {
        const sb = new Mb(bb, cb);
        if (cb.LJ) {
          sb.LJ = {};
          for (const bb in cb.LJ) sb.LJ[bb] = cb.LJ[bb]
        }
        return sb
      }, Tb.b.prototype.VJ = function(bb, cb) {
        if (!this.LJ) {
          this.LJ = {};
          for (const bb of this.instances) bb.LJ = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Sm().getCaps().vertexArrayObject ? {} : void 0
        }), this.LJ[bb] = null, this._userInstancedBuffersStorage.strides[bb] = cb;
        const sb = this._userInstancedBuffersStorage;
        sb.interleavedKinds = [], sb.interleavedOffsets = [], sb.interleavedRowStride = 0;
        for (const kb in sb.strides) sb.interleavedKinds.push(kb), sb.interleavedOffsets.push(sb.interleavedRowStride), sb.interleavedRowStride += sb.strides[kb];
        sb.interleavedData = new Float32Array(32 * sb.interleavedRowStride);
        for (const kb in sb.interleavedBuffers) sb.interleavedBuffers[kb].buffer.dispose();
        sb.interleavedBuffers = {}, sb.vertexBuffers[bb] = null;
        for (const kb of this.instances) kb.LJ[bb] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Tb.b.prototype._processInstancedBuffers = function(bb, cb) {
        const sb = this._userInstancedBuffersStorage,
          kb = sb.interleavedRowStride;
        if (!kb) return;
        const Wb = bb ? bb.length : 0,
          ab = (Wb + 1) * kb;
        let Tb = sb.interleavedData;
        if (Tb.length < ab) {
          let bb = Tb.length;
          for (; bb < ab;) bb *= 2;
          Tb = sb.interleavedData = new Float32Array(bb)
        }
        const Ub = sb.interleavedKinds,
          Ib = sb.interleavedOffsets;
        let fb = 0;
        cb && (nb(this.LJ, Ub, Ib, Tb, fb), fb += kb);
        for (let Hb = 0; Hb < Wb; Hb++) nb(bb[Hb].LJ, Ub, Ib, Tb, fb), fb += kb;
        let Mb = "shared",
          Xb = sb.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Mb = this._instanceDataStorage.engine.currentRenderPassId, sb.renderPasses || (sb.renderPasses = {}), sb.renderPasses[Mb] || (sb.renderPasses[Mb] = {}), Xb = sb.renderPasses[Mb]);
        const mb = sb.interleavedBuffers[Mb];
        let lb = !mb || mb.data !== Tb;
        for (let Hb = 0; !lb && Hb < Ub.length; Hb++) lb = !Xb[Ub[Hb]];
        if (!lb) return void mb.buffer.updateDirectly(Tb, 0);
        mb?.buffer.dispose();
        const Qb = new Hb.b(this.Sm(), Tb, !0, kb, !1, !0);
        for (let Hb = 0; Hb < Ub.length; Hb++) {
          const bb = Ub[Hb],
            cb = Qb.createVertexBuffer(bb, Ib[Hb], sb.strides[bb]);
          cb.hashCode += cb.byteOffset * 2 ** 24, Xb[bb] = cb
        }
        sb.interleavedBuffers[Mb] = {
          buffer: Qb,
          data: Tb
        }, this._invalidateInstanceVertexArrayObject()
      }, Tb.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const bb in this._userInstancedBuffersStorage.vertexArrayObjects) this.Sm().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[bb]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Tb.b.prototype._disposeInstanceSpecificData = function() {
        for (const cb in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[cb].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const cb in this.LJ) this._userInstancedBuffersStorage.vertexBuffers[cb] && this._userInstancedBuffersStorage.vertexBuffers[cb].dispose();
        const bb = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (bb) {
          for (const cb in bb) bb[cb].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.LJ = {}
      }, (0, fb.h)("BABYLON.InstancedMesh", Mb))
    }
  },
  39835: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => xb,
      d: () => pb,
      h: () => wb
    });
    var kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb = sb(36683),
      Cb = sb(39531),
      Nb = sb(39466),
      Vb = sb(38279),
      Lb = sb(39449),
      ub = sb(39844),
      Yb = sb(39658),
      hb = sb(36656),
      Jb = sb(36830),
      gb = sb(39667),
      Bb = sb(39576),
      tb = sb(39848),
      yb = sb(39853),
      Pb = sb(39865),
      Db = sb(39737),
      Eb = sb(39730),
      ib = sb(39796),
      Ob = sb(39871),
      Gb = sb(39856),
      Kb = sb(39441),
      Zb = sb(38284),
      zb = sb(36698),
      qb = sb(39296),
      db = sb(39608);
    class Ab {
      constructor(bb, cb) {
        this.distanceOrScreenCoverage = bb, this.mesh = cb
      }
    }
    class wb {}
    class rb {
      constructor() {
        this.batchCache = new Sb(this), this.batchCacheReplacementModeInFrozenMode = new Sb(this), this.instancesBufferSize = 2048
      }
    }
    class ob {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Sb {
      constructor(bb) {
        this.parent = bb, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Rb {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class vb {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Fb = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class xb extends Pb.e {
      static _GetDefaultSideOrientation(bb) {
        return bb || xb.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== bb && (bb && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Bb.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Bb.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = bb, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new eb.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new eb.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new eb.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new eb.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new eb.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(bb) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(bb)
      }
      get ykb() {
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
      _copySource(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wb = this.EY();
        if (bb._geometry && bb._geometry.applyToMesh(this), Vb.c.DeepCopy(bb, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ykb", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "qY", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LTb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = bb, Wb.useClonedMeshMap && (bb._internalMeshDataInfo.meshMap || (bb._internalMeshDataInfo.meshMap = {}), bb._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = bb._originalBuilderSideOrientation, this._creationDataStorage = bb._creationDataStorage, bb._ranges) {
          const cb = bb._ranges;
          for (const bb in cb) Object.prototype.hasOwnProperty.call(cb, bb) && cb[bb] && this.createAnimationRange(bb, cb[bb].from, cb[bb].to)
        }
        if (bb.metadata && bb.metadata.clone ? this.metadata = bb.metadata.clone() : this.metadata = bb.metadata, this._internalMetadata = bb._internalMetadata, this.meshBlendingTag = bb.meshBlendingTag, Lb.c && Lb.c.HasTags(bb) && Lb.c.AddTagsTo(this, Lb.c.GetTags(bb, !0)), this.GV(bb.isEnabled(!1)), this.parent = bb.parent, this.setPivotMatrix(bb.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + bb.id, this.material = bb.material, !cb) {
          const Wb = bb.getDescendants(!0);
          for (let bb = 0; bb < Wb.length; bb++) {
            const ab = Wb[bb];
            ab._isMesh ? (Fb.parent = this, Fb.doNotCloneChildren = cb, Fb.clonePhysicsImpostor = sb, Fb.cloneThinInstances = kb, ab.clone(this.name + "." + ab.name, Fb)) : ab.clone && ab.clone(this.name + "." + ab.name, this)
          }
        }
        if (bb.morphTargetManager && (this.morphTargetManager = bb.morphTargetManager), (0, qb.b)(Wb.getPhysicsEngine)) {
          const cb = Wb.getPhysicsEngine();
          if (sb && cb)
            if (1 === cb.getPluginVersion()) {
              const sb = cb.getImpostorForPhysicsObject(bb);
              sb && (this.physicsImpostor = sb.clone(this))
            } else 2 === cb.getPluginVersion() && bb.physicsBody && bb.physicsBody.clone(this)
        }
        for (let ab = 0; ab < Wb.mV.length; ab++) {
          const cb = Wb.mV[ab];
          cb.emitter === bb && cb.clone(cb.name, this)
        }
        if (this.skeleton = bb.skeleton, kb && (bb._thinInstanceDataStorage.matrixData ? (this.U3("matrix", new Float32Array(bb._thinInstanceDataStorage.matrixData), 16, !bb._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = bb._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, bb._userThinInstanceBuffersStorage)) {
          const cb = bb._userThinInstanceBuffersStorage;
          for (const bb in cb.data) this.U3(bb, new Float32Array(cb.data[bb]), cb.strides[bb], !cb.vertexBuffers?.[bb]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[bb] = cb.sizes[bb]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(bb) {
        let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ab = arguments.length > 4 ? arguments[4] : void 0,
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(bb, sb), this._internalMeshDataInfo = new vb, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Rb, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = xb.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, sb = this.EY(), this._instanceDataStorage = new ob, this._instanceDataStorage.engine = sb.Sm(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new rb), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (bb, cb, sb) => {
          bb && sb && (this._uniformBuffer ? this.transferToEffect(cb) : sb.bindOnlyWorldMatrix(cb))
        };
        let Ub = !1;
        if (kb && void 0 === kb._addToSceneRootNodes) {
          const bb = kb;
          cb = bb.parent ?? null, Wb = bb.source ?? null, ab = bb.doNotCloneChildren ?? !1, Tb = bb.clonePhysicsImpostor ?? !0, Ub = bb.cloneThinInstances ?? !1
        } else cb = kb;
        Wb && this._copySource(Wb, ab, Tb, Ub), null !== cb && (this.parent = cb), this._instanceDataStorage.hardwareInstancedRendering = this.Sm().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = bb => {
          bb.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new eb.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Wb && Wb.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = 0 === this.getTotalVertices() || cb && cb.doNotInstantiate && (!0 === cb.doNotInstantiate || cb.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        kb.parent = bb || this.parent, kb.position = this.position.clone(), kb.bl = this.bl.clone(), this.rotationQuaternion ? kb.rotationQuaternion = this.rotationQuaternion.clone() : kb.rotation = this.rotation.clone(), sb && sb(this, kb);
        for (const Wb of this.getChildTransformNodes(!0)) "InstancedMesh" === Wb.getClassName() && "Mesh" === kb.getClassName() && Wb.Pkb === this ? Wb.instantiateHierarchy(kb, {
          doNotInstantiate: cb && cb.doNotInstantiate || !1,
          newSourcedMesh: kb
        }, sb) : Wb.instantiateHierarchy(kb, cb, sb);
        return kb
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(bb) {
        let cb = super.toString(bb);
        if (cb += ", n vertices: " + this.getTotalVertices(), cb += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let sb = 0; sb < this.animations.length; sb++) cb += ", animation[0]: " + this.animations[sb].toString(bb);
        if (bb)
          if (this._geometry) {
            const bb = this.Gsb(),
              sb = this.getVerticesData(Bb.l.PositionKind);
            sb && bb && (cb += ", flat shading: " + (sb.length / 3 === bb.length ? "YES" : "NO"))
          } else cb += ", flat shading: UNKNOWN";
        return cb
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
        this._internalMeshDataInfo._LODLevels.sort(((cb, sb) => cb.distanceOrScreenCoverage < sb.distanceOrScreenCoverage ? bb : cb.distanceOrScreenCoverage > sb.distanceOrScreenCoverage ? -bb : 0))
      }
      addLODLevel(bb, cb) {
        if (cb && cb._masterMesh) return Zb.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const sb = new Ab(bb, cb);
        return this._internalMeshDataInfo._LODLevels.push(sb), cb && (cb._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(bb) {
        const cb = this._internalMeshDataInfo;
        for (let sb = 0; sb < cb._LODLevels.length; sb++) {
          const kb = cb._LODLevels[sb];
          if (kb.distanceOrScreenCoverage === bb) return kb.mesh
        }
        return null
      }
      removeLODLevel(bb) {
        const cb = this._internalMeshDataInfo;
        for (let sb = 0; sb < cb._LODLevels.length; sb++) cb._LODLevels[sb].mesh === bb && (cb._LODLevels.splice(sb, 1), bb && (bb._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(bb, cb) {
        const sb = this._internalMeshDataInfo;
        if (!sb._LODLevels || 0 === sb._LODLevels.length) return this;
        const kb = cb || this.PJ().Ikb,
          Wb = bb.mode === Yb.c.ORTHOGRAPHIC_CAMERA ? bb.minZ : kb.centerWorld.subtract(bb.globalPosition).length();
        let ab = Wb,
          Tb = 1;
        if (sb._useLODScreenCoverage) {
          const cb = bb.screenArea;
          let sb = kb.radiusWorld * bb.minZ / Wb;
          sb = sb * sb * Math.PI, ab = sb / cb, Tb = -1
        }
        if (Tb * sb._LODLevels[sb._LODLevels.length - 1].distanceOrScreenCoverage > Tb * ab) return this.onLODLevelSelection && this.onLODLevelSelection(ab, this, this), this;
        for (let Ub = 0; Ub < sb._LODLevels.length; Ub++) {
          const bb = sb._LODLevels[Ub];
          if (Tb * bb.distanceOrScreenCoverage < Tb * ab) {
            if (bb.mesh) {
              if (4 === bb.mesh.delayLoadState) return bb.mesh._checkDelayState(), this;
              if (2 === bb.mesh.delayLoadState) return this;
              bb.mesh._preActivate(), bb.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(ab, this, bb.mesh), bb.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(ab, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(bb, cb, sb, kb) {
        if (!this._geometry) return null;
        let Wb = kb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]?.getFloatData(this.instances.length + 1, sb || cb && 1 !== this._geometry.meshes.length);
        return Wb || (Wb = this._geometry.getVerticesData(bb, cb, sb)), Wb
      }
      copyVerticesData(bb, cb) {
        this._geometry && this._geometry.copyVerticesData(bb, cb)
      }
      getVertexBuffer(bb, cb) {
        return this._geometry ? (cb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]) ?? this._geometry.getVertexBuffer(bb) : null
      }
      isVerticesDataPresent(bb, cb) {
        return this._geometry ? !cb && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[bb] || this._geometry.isVerticesDataPresent(bb) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb)
      }
      isVertexBufferUpdatable(bb, cb) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb);
        if (!cb) {
          const cb = this._userInstancedBuffersStorage?.vertexBuffers[bb];
          if (cb) return cb.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(bb)
      }
      getVerticesDataKinds(bb) {
        if (!this._geometry) {
          const bb = [];
          if (this._delayInfo)
            for (const cb of this._delayInfo) bb.push(cb);
          return bb
        }
        const cb = this._geometry.getVerticesDataKinds();
        if (!bb && this._userInstancedBuffersStorage)
          for (const sb in this._userInstancedBuffersStorage.vertexBuffers) - 1 === cb.indexOf(sb) && cb.push(sb);
        return cb
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Gsb(bb, cb) {
        return this._geometry ? this._geometry.Gsb(bb, cb) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(bb)) return !1;
        if (!this.XV || 0 === this.XV.length) return !0;
        if (!bb) return !0;
        const sb = this.Sm(),
          kb = this.EY(),
          Wb = cb || sb.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const ab = this.material || kb.defaultMaterial;
        if (ab)
          if (ab._storeEffectOnSubMeshes)
            for (const Ub of this.XV) {
              const bb = Ub.pm();
              if (bb)
                if (bb._storeEffectOnSubMeshes) {
                  if (!bb.isReadyForSubMesh(this, Ub, Wb)) return !1
                } else if (!bb.isReady(this, Wb)) return !1
            } else if (!ab.isReady(this, Wb)) return !1;
        const Tb = sb.currentRenderPassId;
        for (const Ub of this.lightSources) {
          const bb = Ub.getShadowGenerators();
          if (!bb) continue;
          const cb = bb.values();
          for (let kb = cb.next(); !0 !== kb.done; kb = cb.next()) {
            const bb = kb.value;
            if (bb && (!bb.getShadowMap()?.renderList || bb.getShadowMap()?.renderList && -1 !== bb.getShadowMap()?.renderList?.indexOf(this))) {
              const cb = bb.getShadowMap().renderPassIds ?? [sb.currentRenderPassId];
              for (let kb = 0; kb < cb.length; ++kb) {
                sb.currentRenderPassId = cb[kb];
                for (const cb of this.XV)
                  if (!bb.isReady(cb, Wb, cb.pm()?.needAlphaBlendingForMesh(this) ?? !1)) return sb.currentRenderPassId = Tb, !1
              }
              sb.currentRenderPassId = Tb
            }
          }
        }
        for (const Ub of this._internalMeshDataInfo._LODLevels)
          if (Ub.mesh && !Ub.mesh.isReady(Wb)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      cl() {
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
        let cb = this._instanceDataStorage.renderPasses[bb];
        return cb || (cb = new rb, this._instanceDataStorage.renderPasses[bb] = cb), cb
      }
      _preActivate() {
        const bb = this._internalMeshDataInfo,
          cb = this.EY().getRenderId();
        return bb._preActivateId === cb || (bb._preActivateId = cb, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(bb) {
        const cb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return cb.visibleInstances && (cb.visibleInstances.intermediateDefaultRenderId = bb), this
      }
      _registerInstanceForRenderId(bb, cb) {
        const sb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return sb.visibleInstances || (sb.visibleInstances = {
          defaultRenderId: cb,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), sb.visibleInstances[cb] || (void 0 === sb.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete sb.visibleInstances[sb.previousRenderId], sb.previousRenderId = cb, sb.visibleInstances[cb] = new Array), sb.visibleInstances[cb].push(bb), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.jm || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let bb, cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.PJ().isLocked) return this;
        bb = "object" === typeof cb ? cb : {
          applySkeleton: cb,
          applyMorph: sb
        };
        const kb = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(bb, null, Bb.l.PositionKind), kb), this
      }
      _createGlobalSubMesh(bb) {
        const cb = this.getTotalVertices();
        if (!cb || !this.Gsb()) return null;
        if (this.XV && this.XV.length > 0) {
          const sb = this.Gsb();
          if (!sb) return null;
          const kb = sb.length;
          let Wb = !1;
          if (bb) Wb = !0;
          else
            for (const bb of this.XV) {
              if (bb.indexStart + bb.indexCount > kb) {
                Wb = !0;
                break
              }
              if (bb.verticesStart + bb.verticesCount > cb) {
                Wb = !0;
                break
              }
            }
          if (!Wb) return this.XV[0]
        }
        return this.releaseSubMeshes(), new Db.b(0, 0, cb, 0, this.getTotalIndices() || (this.isUnIndexed ? cb : 0), this)
      }
      subdivide(bb) {
        if (bb < 1) return;
        const cb = this.getTotalIndices();
        let sb = cb / bb | 0,
          kb = 0;
        for (; sb % 3 !== 0;) sb++;
        this.releaseSubMeshes();
        for (let Wb = 0; Wb < bb && !(kb >= cb); Wb++) Db.b.CreateFromIndices(0, kb, kb + sb >= cb ? cb - kb : sb, this, void 0, !1), kb += sb;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(bb, cb, sb, kb);
        else {
          const kb = new tb.e;
          kb.set(cb, bb);
          const Wb = this.EY();
          new yb.e(yb.e.RandomId(), Wb, kb, sb, this)
        }
        return this
      }
      removeVerticesData(bb) {
        this._geometry && this._geometry.removeVerticesData(bb)
      }
      markVerticesDataAsUpdatable(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sb = this.getVertexBuffer(bb);
        sb && sb.isUpdatable() !== cb && this.setVerticesData(bb, this.getVerticesData(bb), cb)
      }
      setVerticesBuffer(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = yb.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(bb, sb, cb), this
      }
      updateVerticesData(bb, cb, sb, kb) {
        return this._geometry ? (kb ? (this.makeGeometryUnique(), this.updateVerticesData(bb, cb, sb, !1)) : this._geometry.updateVerticesData(bb, cb, sb), this) : this
      }
      updateMeshPositions(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sb = this.getVerticesData(Bb.l.PositionKind);
        if (!sb) return this;
        if (bb(sb), this.updateVerticesData(Bb.l.PositionKind, sb, !1, !1), cb) {
          const bb = this.Gsb(),
            cb = this.getVerticesData(Bb.l.NormalKind);
          if (!cb) return this;
          tb.e.ComputeNormals(sb, bb, cb), this.updateVerticesData(Bb.l.NormalKind, cb, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const bb = this._geometry,
          cb = this._geometry.copy(yb.e.RandomId());
        return bb.releaseForMesh(this, !0), cb.applyToMesh(this), this
      }
      setIndexBuffer(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wb = this._geometry;
        Wb || (Wb = new yb.e(yb.e.RandomId(), this.EY(), void 0, void 0, this)), Wb.setIndexBuffer(bb, cb, sb, kb)
      }
      setIndices(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(bb, cb, sb, kb);
        else {
          const kb = new tb.e;
          kb.indices = bb;
          const Wb = this.EY();
          new yb.e(yb.e.RandomId(), Wb, kb, sb, this, cb)
        }
        return this
      }
      updateIndices(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(bb, cb, sb), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(bb, cb, sb) {
        let kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Wb = this.EY().Sm();
        let ab;
        if (this._unIndexed)
          if (this._getRenderingFillMode(sb) === Eb.e.WireFrameFillMode) ab = bb._getLinesIndexBuffer(this.Gsb(), Wb);
          else ab = null;
        else switch (this._getRenderingFillMode(sb)) {
          case Eb.e.PointFillMode:
            ab = null;
            break;
          case Eb.e.WireFrameFillMode:
            ab = bb._getLinesIndexBuffer(this.Gsb(), Wb);
            break;
          default:
          case Eb.e.TriangleFillMode:
            ab = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(cb, ab, kb)
      }
      _bindDirect(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(bb), sb && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const bb = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const cb in bb) this._userInstancedBuffersStorage.vertexBuffers[cb] = bb[cb]
          }
          this._geometry._bind(bb, cb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(bb, cb);
        return this
      }
      _draw(bb, cb, sb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const kb = this.EY().Sm(),
          Wb = kb._currentMaterialContext,
          ab = Wb && Wb.useVertexPulling;
        return this._unIndexed && cb !== Eb.e.WireFrameFillMode || cb == Eb.e.PointFillMode ? kb.drawArraysType(cb, bb.verticesStart, bb.verticesCount, this.forcedInstanceCount || sb) : cb == Eb.e.WireFrameFillMode ? kb.drawElementsType(cb, 0, bb._linesIndexCount, this.forcedInstanceCount || sb) : ab ? kb.drawArraysType(cb, bb.indexStart, bb.indexCount, this.forcedInstanceCount || sb) : kb.drawElementsType(cb, bb.indexStart, bb.indexCount, this.forcedInstanceCount || sb), this
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (cb) return sb.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[bb] = !1, sb.batchCacheReplacementModeInFrozenMode.renderSelf[bb] = !0, sb.batchCacheReplacementModeInFrozenMode;
          if (sb.previousBatch) return sb.previousBatch
        }
        const kb = this.EY(),
          Wb = kb._isInIntermediateRendering(),
          ab = Wb ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Tb = sb.batchCache;
        if (Tb.mustReturn = !1, Tb.renderSelf[bb] = cb || !ab && this.isEnabled() && this.isVisible, Tb.visibleInstances[bb] = null, sb.visibleInstances && !cb) {
          const cb = sb.visibleInstances,
            ab = kb.getRenderId(),
            Ub = Wb ? cb.intermediateDefaultRenderId : cb.defaultRenderId;
          Tb.visibleInstances[bb] = cb[ab], !Tb.visibleInstances[bb] && Ub && (Tb.visibleInstances[bb] = cb[Ub])
        }
        return Tb.hardwareInstancedRendering[bb] = !cb && this._instanceDataStorage.hardwareInstancedRendering && null !== Tb.visibleInstances[bb] && void 0 !== Tb.visibleInstances[bb], sb.previousBatch = Tb, Tb
      }
      _updateInstancedBuffers(bb, cb, sb, kb, Wb, ab) {
        const Tb = cb.visibleInstances[bb._id],
          Ub = Tb ? Tb.length : 0,
          Ib = cb.parent,
          Hb = this._instanceDataStorage;
        let fb = Ib.instancesBuffer,
          Mb = Ib.instancesPreviousBuffer,
          Xb = 0,
          nb = 0;
        const mb = cb.renderSelf[bb._id],
          lb = this._scene.floatingOriginOffset,
          Qb = !fb || sb !== Ib.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Ib.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Hb.isFrozen && !Qb) nb = (mb ? 1 : 0) + Ub;
        else {
          const cb = this.getWorldMatrix();
          if (mb) {
            this._scene.needsPreviousWorldMatrices && (Hb.masterMeshPreviousWorldMatrix ? (Hb.masterMeshPreviousWorldMatrix.copyToArray(Ib.instancesPreviousData, Xb), Hb.masterMeshPreviousWorldMatrix.ssb(cb)) : (Hb.masterMeshPreviousWorldMatrix = cb.clone(), Hb.masterMeshPreviousWorldMatrix.copyToArray(Ib.instancesPreviousData, Xb))), cb.copyToArray(Ib.instancesData, Xb);
            const bb = cb.Osb();
            Ib.instancesData[Xb + 12] = bb[12] - lb.x, Ib.instancesData[Xb + 13] = bb[13] - lb.y, Ib.instancesData[Xb + 14] = bb[14] - lb.z, Xb += 16, nb++
          }
          if (Tb) {
            if (xb.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && bb.pm()?.needAlphaBlendingForMesh(bb.getRenderingMesh())) {
              const bb = this._scene.activeCamera.globalPosition;
              for (let cb = 0; cb < Tb.length; cb++) {
                const sb = Tb[cb];
                sb._distanceToCamera = hb.p.Distance(sb.PJ().Ikb.centerWorld, bb)
              }
              Tb.sort(((bb, cb) => bb._distanceToCamera > cb._distanceToCamera ? -1 : bb._distanceToCamera < cb._distanceToCamera ? 1 : 0))
            }
            for (let bb = 0; bb < Tb.length; bb++) {
              const cb = Tb[bb],
                sb = cb.getWorldMatrix();
              sb.copyToArray(Ib.instancesData, Xb), this._scene.needsPreviousWorldMatrices && (cb._previousWorldMatrix ? (cb._previousWorldMatrix.copyToArray(Ib.instancesPreviousData, Xb), cb._previousWorldMatrix.ssb(sb)) : (cb._previousWorldMatrix = sb.clone(), cb._previousWorldMatrix.copyToArray(Ib.instancesPreviousData, Xb)));
              const kb = sb.Osb();
              Ib.instancesData[Xb + 12] = kb[12] - lb.x, Ib.instancesData[Xb + 13] = kb[13] - lb.y, Ib.instancesData[Xb + 14] = kb[14] - lb.z, Xb += 16, nb++
            }
          }
        }
        if (Qb) {
          let bb;
          if (fb && fb.dispose(), Mb && Mb.dispose(), fb = new Bb.b(kb, Ib.instancesData, !0, 16, !1, !0), Ib.instancesBuffer = fb, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Sm().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) bb = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const cb = this._instanceDataStorage.engine.currentRenderPassId;
            bb = this._userInstancedBuffersStorage.renderPasses[cb], bb || (this._userInstancedBuffersStorage.renderPasses[cb] = bb = {})
          }
          bb.world0 = fb.createVertexBuffer("world0", 0, 4), bb.world1 = fb.createVertexBuffer("world1", 4, 4), bb.world2 = fb.createVertexBuffer("world2", 8, 4), bb.world3 = fb.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Mb = new Bb.b(kb, Ib.instancesPreviousData, !0, 16, !1, !0), Ib.instancesPreviousBuffer = Mb, bb.previousWorld0 = Mb.createVertexBuffer("previousWorld0", 0, 4), bb.previousWorld1 = Mb.createVertexBuffer("previousWorld1", 4, 4), bb.previousWorld2 = Mb.createVertexBuffer("previousWorld2", 8, 4), bb.previousWorld3 = Mb.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (fb.updateDirectly(Ib.instancesData, 0, nb), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Mb.updateDirectly(Ib.instancesPreviousData, 0, nb));
        this._processInstancedBuffers(Tb, mb), ab && void 0 !== Wb && (this.EY()._activeIndices.addCount(bb.indexCount * nb, !1), kb._currentDrawContext && (kb._currentDrawContext.useInstancing = !0), this._bind(bb, ab, Wb), this._draw(bb, Wb, nb)), !this._scene.needsPreviousWorldMatrices || Qb || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Mb.updateDirectly(Ib.instancesData, 0, nb)
      }
      _renderWithInstances(bb, cb, sb, kb, Wb) {
        const ab = sb.visibleInstances[bb._id],
          Tb = ab ? ab.length : 0,
          Ub = sb.parent,
          Ib = Ub.instancesBufferSize,
          Hb = 16 * (Tb + 1) * 4;
        for (; Ub.instancesBufferSize < Hb;) Ub.instancesBufferSize *= 2;
        return Ub.instancesData && Ib == Ub.instancesBufferSize || (Ub.instancesData = new Float32Array(Ub.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Ub.instancesPreviousData || Ib != Ub.instancesBufferSize) && (Ub.instancesPreviousData = new Float32Array(Ub.instancesBufferSize / 4)), this._updateInstancedBuffers(bb, sb, Ib, Wb, cb, kb), Wb.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(bb, cb, sb, kb) {
        const Wb = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.EY()._activeIndices.addCount(bb.indexCount * Wb, !1), kb._currentDrawContext && (kb._currentDrawContext.useInstancing = !0), this._bind(bb, sb, cb), this._draw(bb, cb, Wb), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Wb) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), kb.unbindInstanceAttributes()
      }
      _processInstancedBuffers(bb, cb) {}
      _processRendering(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = this.EY(),
          Hb = Ib.Sm();
        if (kb = this._getRenderingFillMode(kb), ab && cb.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(cb, kb, sb, Hb), this;
        if (ab) this._renderWithInstances(cb, kb, Wb, sb, Hb);
        else {
          Hb._currentDrawContext && (Hb._currentDrawContext.useInstancing = !1);
          let sb = 0;
          Wb.renderSelf[cb._id] && (Tb && Tb(!1, bb.getWorldMatrix(), Ub), sb++, this._draw(cb, kb, this._instanceDataStorage.overridenInstanceCount));
          const ab = Wb.visibleInstances[cb._id];
          if (ab) {
            const bb = ab.length;
            sb += bb;
            for (let sb = 0; sb < bb; sb++) {
              const bb = ab[sb].getWorldMatrix();
              Tb && Tb(!0, bb, Ub), this._draw(cb, kb)
            }
          }
          Ib._activeIndices.addCount(cb.indexCount * sb, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb?.instancesBuffer && (cb && bb.instancesBuffer.dispose(), bb.instancesBuffer = null), bb?.instancesPreviousBuffer && (cb && bb.instancesPreviousBuffer.dispose(), bb.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cb in this._instanceDataStorage.renderPasses) {
          const sb = this._instanceDataStorage.renderPasses[cb];
          this._disposeInstanceDataStorageRenderPass(sb, bb)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, bb), this._userInstancedBuffersStorage) {
          for (const cb in this._userInstancedBuffersStorage.vertexBuffers) {
            const sb = this._userInstancedBuffersStorage.vertexBuffers[cb];
            sb && (bb && sb.dispose(), this._userInstancedBuffersStorage.vertexBuffers[cb] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(bb)
      }
      _releaseRenderPassId(bb) {
        const cb = this._instanceDataStorage.renderPasses[bb];
        if (cb && (this._disposeInstanceDataStorageRenderPass(cb, !0), delete this._instanceDataStorage.renderPasses[bb]), this._userInstancedBuffersStorage?.renderPasses) {
          const cb = this._userInstancedBuffersStorage.renderPasses[bb];
          if (cb)
            for (const bb in cb) cb[bb]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[bb]
        }
        const sb = this._userInstancedBuffersStorage?.interleavedBuffers;
        sb?.[bb] && (sb[bb].buffer.dispose(), delete sb[bb])
      }
      _freeze() {
        if (this.XV) {
          for (let bb = 0; bb < this.XV.length; bb++) this._getInstancesRenderList(bb);
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
      renderWithRenderPassId(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ab = this._scene.Sm(),
          Tb = ab.currentRenderPassId;
        if (void 0 !== bb && (ab.currentRenderPassId = bb), kb)(!Wb || Wb && kb.isInFrustum(this._scene._frustumPlanes)) && this.render(kb, !!cb, sb);
        else
          for (let Ub = 0; Ub < this.XV.length; Ub++) {
            const bb = this.XV[Ub];
            (!Wb || Wb && bb.isInFrustum(this._scene._frustumPlanes)) && this.render(bb, !!cb, sb)
          }
        return void 0 !== bb && (ab.currentRenderPassId = Tb), this
      }
      directRender() {
        if (!this.XV) return this;
        for (const bb of this.XV) this.render(bb, !1);
        return this
      }
      render(bb, cb, sb) {
        const kb = this.EY(),
          Wb = kb.Sm();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const ab = kb.activeCameras?.length ?? 0,
          Tb = ab > 1 && kb.activeCamera === kb.activeCameras[0] || ab <= 1,
          Ub = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Wb.currentRenderPassId;
        if (Tb && this._checkOcclusionQuery(Ub) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Ib = this._getInstancesRenderList(bb._id, !!sb);
        if (Ib.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Hb = 0,
          fb = null;
        this.ignoreCameraMaxZ && kb.activeCamera && !kb._isInIntermediateRendering() && (Hb = kb.activeCamera.maxZ, fb = kb.activeCamera, kb.activeCamera.maxZ = 0, kb.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Mb = bb.getRenderingMesh(),
          Xb = Ib.hardwareInstancedRendering[bb._id] || Mb.hasThinInstances || !!this._userInstancedBuffersStorage && !bb.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          nb = this._instanceDataStorage,
          mb = bb.pm();
        if (!mb) return fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), this;
        if (nb.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === mb) {
          if (mb._storeEffectOnSubMeshes && !bb._drawWrapper?._wasPreviouslyReady || !mb._storeEffectOnSubMeshes && !mb._getDrawWrapper()._wasPreviouslyReady) return fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), this
        } else {
          if (mb._storeEffectOnSubMeshes) {
            if (!mb.isReadyForSubMesh(this, bb, Xb)) return fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), this
          } else if (!mb.isReady(this, Xb)) return fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = mb
        }
        if (cb) {
          const bb = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === bb.alphaModes.length) Wb.setAlphaMode(bb.alphaMode);
          else
            for (let cb = 0; cb < bb.alphaModes.length; cb++) {
              const sb = bb.alphaModes[cb];
              Wb.setAlphaMode(void 0 !== sb ? sb : 2, !1, cb)
            }
        }
        let lb;
        lb = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? bb._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Qb = lb?.effect ?? null;
        for (let Yb = 0, hb = kb._beforeRenderingMeshStage; Yb < hb.length; Yb++) {
          hb[Yb].action(this, bb, Ib, Qb)
        }
        if (!lb || !Qb) return fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), this;
        const eb = sb || this;
        let Cb;
        if (!nb.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const bb = eb._getWorldMatrixDeterminant();
          Cb = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), bb < 0 && (Cb = Cb === Eb.e.ClockWiseSideOrientation ? Eb.e.CounterClockWiseSideOrientation : Eb.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Cb
        }
        const Nb = this._internalMeshDataInfo._effectiveMaterial._preBind(lb, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Wb.setDepthWrite(!0);
        const Vb = this._internalMeshDataInfo._effectiveMaterial,
          Lb = Vb.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Xb || this._bind(bb, Qb, Lb, !1);
        const ub = eb.getWorldMatrix();
        Vb._storeEffectOnSubMeshes ? Vb.bindForSubMesh(ub, this, bb) : Vb.bind(ub, this);
        try {
          ib.d._BindAttachmentsForEffect(Wb, Qb) && (!Vb.backFaceCulling && Vb.separateCullingPass && (Wb.setState(!0, Vb.zOffset, !1, !Nb, Vb.cullBackFaces, Vb.stencil, Vb.zOffsetUnits), this._processRendering(this, bb, Qb, Lb, Ib, Xb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Wb.setState(!0, Vb.zOffset, !1, Nb, Vb.cullBackFaces, Vb.stencil, Vb.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(bb)), this._processRendering(this, bb, Qb, Lb, Ib, Xb, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          ib.d._RestoreAttachments(Wb)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Yb = 0, hb = kb._afterRenderingMeshStage; Yb < hb.length; Yb++) {
          hb[Yb].action(this, bb, Ib, Qb)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), fb && (fb.maxZ = Hb, kb.updateTransformMatrix(!0)), 2 !== kb.performancePriority || nb.isFrozen || this._freeze(), this
      }
      _renderRunFollower(bb, cb) {
        const sb = this._scene,
          kb = sb._engine;
        if (kb.isWebGPU || bb._mesh !== this || 0 !== this.instances.length || this.render !== xb.prototype.render) return !1;
        const Wb = bb.pm();
        if (!Wb || Wb !== sb._cachedMaterial || void 0 === Wb._canBindRunFollower) return !1;
        const ab = bb._drawWrapper,
          Tb = ab?.effect;
        if (!Tb || Tb !== sb._cachedEffect || this.visibility !== sb._cachedVisibility || ab._forceRebindOnNextCall) return !1;
        const Ub = this.hasThinInstances;
        if (!Ub && this._userInstancedBuffersStorage) return !1;
        if (!ab._wasPreviouslyReady || ab._wasPreviouslyUsingInstances !== Ub) return !1;
        const Ib = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || sb._isInIntermediateRendering() || 0 !== sb._beforeRenderingMeshStage.length || 0 !== sb._afterRenderingMeshStage.length || Ib._onBeforeRenderObservable?.hasObservers() || Ib._onBeforeBindObservable?.hasObservers() || Ib._onAfterRenderObservable?.hasObservers()) return !1;
        const Hb = this.occlusionType;
        if (void 0 !== Hb && Hb !== Pb.e.OCCLUSION_TYPE_NONE || !Wb._canBindRunFollower(sb, kb, this, bb, Tb)) return !1;
        const fb = this._internalAbstractMeshDataInfo,
          Mb = fb._isActiveIntermediate;
        Mb ? fb._isActiveIntermediate = !1 : fb._isActive = !1;
        const Xb = sb.activeCameras?.length ?? 0;
        (Xb > 1 && sb.activeCamera === sb.activeCameras[0] || Xb <= 1) && this._checkOcclusionQuery(!1);
        const nb = this._getInstancesRenderList(bb._id);
        if (nb.mustReturn) return !0;
        if (!Ub && !nb.renderSelf[bb._id]) return Mb ? fb._isActiveIntermediate = !0 : fb._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Ib._effectiveMaterial = Wb, cb)
          if (1 === Wb.alphaModes.length) kb.setAlphaMode(Wb.alphaMode);
          else
            for (let lb = 0; lb < Wb.alphaModes.length; lb++) {
              const bb = Wb.alphaModes[lb];
              kb.setAlphaMode(void 0 !== bb ? bb : 2, !1, lb)
            }
        if (Wb.backFaceCulling || null !== Wb.sideOrientation || Wb._twoSidedLighting) {
          const bb = this._getWorldMatrixDeterminant();
          let cb = Wb._getEffectiveOrientation(this);
          bb < 0 && (cb = cb === Eb.e.ClockWiseSideOrientation ? Eb.e.CounterClockWiseSideOrientation : Eb.e.ClockWiseSideOrientation), Ib._effectiveSideOrientation = cb
        }
        Wb._preBind(ab, Ib._effectiveSideOrientation), Wb.forceDepthWrite && kb.setDepthWrite(!0);
        const mb = Wb.fillMode;
        return Ub || this._bind(bb, Tb, mb, !1), Wb._bindRunFollower(this.getWorldMatrix(), this, bb, Tb), this._processRendering(this, bb, Tb, mb, nb, Ub, this._onBeforeDraw, Wb), Wb.unbind(), 2 === sb.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Bb.l.MatricesWeightsKind) && (this.isVerticesDataPresent(Bb.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const bb = this.getVerticesData(Bb.l.MatricesWeightsKind),
          cb = bb.length;
        for (let sb = 0; sb < cb; sb += 4) {
          const cb = bb[sb] + bb[sb + 1] + bb[sb + 2] + bb[sb + 3];
          if (0 === cb) bb[sb] = 1;
          else {
            const kb = 1 / cb;
            bb[sb] *= kb, bb[sb + 1] *= kb, bb[sb + 2] *= kb, bb[sb + 3] *= kb
          }
        }
        this.setVerticesData(Bb.l.MatricesWeightsKind, bb)
      }
      _normalizeSkinWeightsAndExtra() {
        const bb = this.getVerticesData(Bb.l.MatricesWeightsExtraKind),
          cb = this.getVerticesData(Bb.l.MatricesWeightsKind),
          sb = cb.length;
        for (let kb = 0; kb < sb; kb += 4) {
          let sb = cb[kb] + cb[kb + 1] + cb[kb + 2] + cb[kb + 3];
          if (sb += bb[kb] + bb[kb + 1] + bb[kb + 2] + bb[kb + 3], 0 === sb) cb[kb] = 1;
          else {
            const Wb = 1 / sb;
            cb[kb] *= Wb, cb[kb + 1] *= Wb, cb[kb + 2] *= Wb, cb[kb + 3] *= Wb, bb[kb] *= Wb, bb[kb + 1] *= Wb, bb[kb + 2] *= Wb, bb[kb + 3] *= Wb
          }
        }
        this.setVerticesData(Bb.l.MatricesWeightsKind, cb), this.setVerticesData(Bb.l.MatricesWeightsKind, bb)
      }
      validateSkinning() {
        const bb = this.getVerticesData(Bb.l.MatricesWeightsExtraKind),
          cb = this.getVerticesData(Bb.l.MatricesWeightsKind);
        if (null === cb || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          lm: "not skinned"
        };
        const sb = cb.length;
        let kb = 0,
          Wb = 0,
          ab = 0,
          Tb = 0;
        const Ub = null === bb ? 4 : 8,
          Ib = [];
        for (let nb = 0; nb <= Ub; nb++) Ib[nb] = 0;
        for (let nb = 0; nb < sb; nb += 4) {
          let sb = cb[nb],
            Hb = sb,
            fb = 0 === Hb ? 0 : 1;
          for (let Wb = 1; Wb < Ub; Wb++) {
            const ab = Wb < 4 ? cb[nb + Wb] : bb[nb + Wb - 4];
            ab > sb && kb++, 0 !== ab && fb++, Hb += ab, sb = ab
          }
          if (Ib[fb]++, fb > ab && (ab = fb), 0 === Hb) Wb++;
          else {
            const sb = 1 / Hb;
            let kb = 0;
            for (let Wb = 0; Wb < Ub; Wb++) kb += Wb < 4 ? Math.abs(cb[nb + Wb] - cb[nb + Wb] * sb) : Math.abs(bb[nb + Wb - 4] - bb[nb + Wb - 4] * sb);
            kb > .001 && Tb++
          }
        }
        const Hb = this.skeleton.bones.length,
          fb = this.getVerticesData(Bb.l.MatricesIndicesKind),
          Mb = this.getVerticesData(Bb.l.MatricesIndicesExtraKind);
        let Xb = 0;
        for (let nb = 0; nb < sb; nb += 4)
          for (let bb = 0; bb < Ub; bb++) {
            const cb = bb < 4 ? fb[nb + bb] : Mb[nb + bb - 4];
            (cb >= Hb || cb < 0) && Xb++
          }
        return {
          skinned: !0,
          valid: 0 === Wb && 0 === Tb && 0 === Xb,
          lm: "Number of Weights = " + sb / 4 + "\nMaximum influences = " + ab + "\nMissing Weights = " + Wb + "\nNot Sorted = " + kb + "\nNot Normalized = " + Tb + "\nWeightCounts = [" + Ib + "]\nNumber of bones = " + Hb + "\nBad Bone Indices = " + Xb
        }
      }
      _checkDelayState() {
        const bb = this.EY();
        return this._geometry ? this._geometry.load(bb) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(bb)), this
      }
      _queueLoad(bb) {
        bb.addPendingData(this);
        const cb = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const sb = await bb._loadDelayedFileAsync(this.delayLoadingFile, cb, !0);
            sb instanceof ArrayBuffer ? this._delayLoadingFunction(sb, this) : this._delayLoadingFunction(JSON.parse(sb), this);
            for (const bb of this.instances) bb.refreshBoundingInfo(), bb._syncSubMeshes();
            this.delayLoadState = 1, bb.removePendingData(this)
          } catch (sb) {
            bb.removePendingData(this), bb.Scb || Zb.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${sb}`)
          }
        })(), this
      }
      isInFrustum(bb) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(bb) && (this._checkDelayState(), !0))
      }
      setMaterialById(bb) {
        const cb = this.EY().materials;
        let sb;
        for (sb = cb.length - 1; sb > -1; sb--)
          if (cb[sb].id === bb) return this.material = cb[sb], this;
        const kb = this.EY().multiMaterials;
        for (sb = kb.length - 1; sb > -1; sb--)
          if (kb[sb].id === bb) return this.material = kb[sb], this;
        return this
      }
      getAnimatables() {
        const bb = [];
        return this.material && bb.push(this.material), this.skeleton && bb.push(this.skeleton), bb
      }
      bakeTransformIntoVertices(bb) {
        if (!this.isVerticesDataPresent(Bb.l.PositionKind)) return this;
        const cb = this.XV.splice(0);
        this._resetPointsArrayCache();
        let sb = this.getVerticesData(Bb.l.PositionKind);
        const kb = hb.p.Zero();
        let Wb;
        for (Wb = 0; Wb < sb.length; Wb += 3) hb.p.TransformCoordinatesFromFloatsToRef(sb[Wb], sb[Wb + 1], sb[Wb + 2], bb, kb).toArray(sb, Wb);
        if (this.setVerticesData(Bb.l.PositionKind, sb, this.getVertexBuffer(Bb.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(Bb.l.NormalKind)) {
          for (sb = this.getVerticesData(Bb.l.NormalKind), Wb = 0; Wb < sb.length; Wb += 3) hb.p.TransformNormalFromFloatsToRef(sb[Wb], sb[Wb + 1], sb[Wb + 2], bb, kb).normalize().toArray(sb, Wb);
          this.setVerticesData(Bb.l.NormalKind, sb, this.getVertexBuffer(Bb.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Bb.l.TangentKind)) {
          for (sb = this.getVerticesData(Bb.l.TangentKind), Wb = 0; Wb < sb.length; Wb += 4) hb.p.TransformNormalFromFloatsToRef(sb[Wb], sb[Wb + 1], sb[Wb + 2], bb, kb).normalize().toArray(sb, Wb);
          this.setVerticesData(Bb.l.TangentKind, sb, this.getVertexBuffer(Bb.l.TangentKind).isUpdatable())
        }
        return bb.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.XV = cb, this
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
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (cb && void 0 === cb._addToSceneRootNodes) {
          const sb = cb;
          return Fb.source = this, Fb.doNotCloneChildren = sb.doNotCloneChildren, Fb.clonePhysicsImpostor = sb.clonePhysicsImpostor, Fb.cloneThinInstances = sb.cloneThinInstances, new xb(bb, this.EY(), Fb)
        }
        return new xb(bb, this.EY(), cb, this, sb, kb)
      }
      dispose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const sb = this._internalMeshDataInfo;
        if (sb._onBeforeDrawObservable && sb._onBeforeDrawObservable.clear(), sb._onBeforeBindObservable && sb._onBeforeBindObservable.clear(), sb._onBeforeRenderObservable && sb._onBeforeRenderObservable.clear(), sb._onAfterRenderObservable && sb._onAfterRenderObservable.clear(), sb._onBetweenPassObservable && sb._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (sb.meshMap)
            for (const bb in sb.meshMap) {
              const cb = sb.meshMap[bb];
              cb && (cb._internalMeshDataInfo._source = null, sb.meshMap[bb] = void 0)
            }
          sb._source && sb._source._internalMeshDataInfo.meshMap && (sb._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const bb = this.EY().meshes;
          for (const cb of bb) {
            const bb = cb;
            bb._internalMeshDataInfo && bb._internalMeshDataInfo._source && bb._internalMeshDataInfo._source === this && (bb._internalMeshDataInfo._source = null)
          }
        }
        sb._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(bb, cb)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(bb, cb, sb, kb, Wb, ab) {
        let Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ub = arguments.length > 7 ? arguments[7] : void 0;
        const Ib = this.EY();
        return (0, Nb.m)(bb, (bb => {
          const Ub = bb.width,
            Ib = bb.height,
            Hb = this.Sm().createCanvas(Ub, Ib).getContext("2d");
          Hb.drawImage(bb, 0, 0);
          const fb = Hb.getImageData(0, 0, Ub, Ib).data;
          this.applyDisplacementMapFromBuffer(fb, Ub, Ib, cb, sb, Wb, ab, Tb), kb && kb(this)
        }), Ub || (() => {}), Ib.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Bb.l.PositionKind) || !this.isVerticesDataPresent(Bb.l.NormalKind) || !this.isVerticesDataPresent(Bb.l.UVKind)) return Zb.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Ib = this.getVerticesData(Bb.l.PositionKind, !0, !0),
          Hb = this.getVerticesData(Bb.l.NormalKind),
          fb = this.getVerticesData(Bb.l.UVKind);
        let Mb = hb.p.Zero();
        const Xb = hb.p.Zero(),
          nb = hb.n.Zero();
        ab = ab || hb.n.Zero(), Tb = Tb || new hb.n(1, 1);
        for (let mb = 0; mb < Ib.length; mb += 3) {
          hb.p.FromArrayToRef(Ib, mb, Mb), hb.p.FromArrayToRef(Hb, mb, Xb), hb.n.FromArrayToRef(fb, mb / 3 * 2, nb);
          const Ub = 4 * ((Math.abs(nb.x * Tb.x + ab.x % 1) * (cb - 1) % cb | 0) + (Math.abs(nb.y * Tb.y + ab.y % 1) * (sb - 1) % sb | 0) * cb),
            lb = .3 * (bb[Ub] / 255) + .59 * (bb[Ub + 1] / 255) + .11 * (bb[Ub + 2] / 255);
          Xb.normalize(), Xb.scaleInPlace(kb + (Wb - kb) * lb), Mb = Mb.add(Xb), Mb.toArray(Ib, mb)
        }
        return tb.e.ComputeNormals(Ib, this.Gsb(), Hb), Ub ? (this.setVerticesData(Bb.l.PositionKind, Ib), this.setVerticesData(Bb.l.NormalKind, Hb), this.setVerticesData(Bb.l.UVKind, fb)) : (this.updateVerticesData(Bb.l.PositionKind, Ib), this.updateVerticesData(Bb.l.NormalKind, Hb)), this
      }
      _getFlattenedNormals(bb, cb) {
        const sb = new Float32Array(3 * bb.length);
        let kb = 0;
        const Wb = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let ab = 0; ab < bb.length; ab += 3) {
          const Tb = hb.p.FromArray(cb, 3 * bb[ab]),
            Ub = hb.p.FromArray(cb, 3 * bb[ab + 1]),
            Ib = hb.p.FromArray(cb, 3 * bb[ab + 2]),
            Hb = Tb.subtract(Ub),
            fb = Ib.subtract(Ub),
            Mb = hb.p.Normalize(hb.p.Cross(Hb, fb));
          Wb && Mb.scaleInPlace(-1);
          for (let bb = 0; bb < 3; bb++) sb[kb++] = Mb.x, sb[kb++] = Mb.y, sb[kb++] = Mb.z
        }
        return sb
      }
      _convertToUnIndexedMesh() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = this.getVerticesDataKinds().filter((bb => !this.getVertexBuffer(bb)?.getIsInstanced())),
          sb = this.Gsb(!1, !0),
          kb = {},
          Wb = (bb, cb) => {
            const kb = new Float32Array(sb.length * cb);
            let Wb = 0;
            for (let ab = 0; ab < sb.length; ab++)
              for (let Tb = 0; Tb < cb; Tb++) kb[Wb++] = bb[sb[ab] * cb + Tb];
            return kb
          },
          ab = this.PJ(),
          Tb = this.geometry ? this.XV.slice(0) : [];
        for (const Ub of cb) kb[Ub] = this.getVerticesData(Ub);
        for (const Ub of cb) {
          const cb = this.getVertexBuffer(Ub),
            ab = cb.getSize();
          if (bb && Ub === Bb.l.NormalKind) {
            const bb = this._getFlattenedNormals(sb, kb[Bb.l.PositionKind]);
            this.setVerticesData(Bb.l.NormalKind, bb, cb.isUpdatable(), ab)
          } else this.setVerticesData(Ub, Wb(kb[Ub], ab), cb.isUpdatable(), ab)
        }
        if (this.morphTargetManager) {
          for (let cb = 0; cb < this.morphTargetManager.numTargets; cb++) {
            const kb = this.morphTargetManager.getTarget(cb),
              ab = kb.getPositions();
            kb.eTb(Wb(ab, 3));
            const Tb = kb.getNormals();
            Tb && kb.setNormals(bb ? this._getFlattenedNormals(sb, ab) : Wb(Tb, 3));
            const Ub = kb.getTangents();
            Ub && kb.setTangents(Wb(Ub, 3));
            const Ib = kb.getUVs();
            Ib && kb.setUVs(Wb(Ib, 2));
            const Hb = kb.getColors();
            Hb && kb.setColors(Wb(Hb, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Ub = 0; Ub < sb.length; Ub++) sb[Ub] = Ub;
        this.setIndices(sb), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Ub of Tb) {
          const bb = Ub.PJ();
          Db.b.AddToMesh(Ub.materialIndex, Ub.indexStart, Ub.indexCount, Ub.indexStart, Ub.indexCount, this).setBoundingInfo(bb)
        }
        return this.setBoundingInfo(ab), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = tb.e.ExtractFromMesh(this);
        let sb;
        if (bb && this.isVerticesDataPresent(Bb.l.NormalKind) && cb.normals) {
          for (sb = 0; sb < cb.normals.length; sb++) cb.normals[sb] *= -1;
          this.setVerticesData(Bb.l.NormalKind, cb.normals, this.isVertexBufferUpdatable(Bb.l.NormalKind))
        }
        if (cb.indices) {
          let bb;
          for (sb = 0; sb < cb.indices.length; sb += 3) bb = cb.indices[sb + 1], cb.indices[sb + 1] = cb.indices[sb + 2], cb.indices[sb + 2] = bb;
          this.setIndices(cb.indices, null, this.isVertexBufferUpdatable(Bb.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const cb = tb.e.ExtractFromMesh(this),
          sb = cb.indices && !Array.isArray(cb.indices) && Array.from ? Array.from(cb.indices) : cb.indices,
          kb = cb.positions && !Array.isArray(cb.positions) && Array.from ? Array.from(cb.positions) : cb.positions,
          Wb = cb.uvs && !Array.isArray(cb.uvs) && Array.from ? Array.from(cb.uvs) : cb.uvs,
          ab = cb.normals && !Array.isArray(cb.normals) && Array.from ? Array.from(cb.normals) : cb.normals;
        if (sb && kb) {
          cb.indices = sb, cb.positions = kb, Wb && (cb.uvs = Wb), ab && (cb.normals = ab);
          const Tb = bb + 1,
            Ub = [];
          for (let bb = 0; bb < Tb + 1; bb++) Ub[bb] = [];
          let Ib, Hb;
          const fb = new hb.p(0, 0, 0),
            Mb = new hb.p(0, 0, 0),
            Xb = new hb.n(0, 0),
            nb = [],
            mb = [],
            lb = [];
          let Qb, eb, Cb, Nb = kb.length;
          Wb && (eb = Wb.length), ab && (Cb = ab.length);
          for (let bb = 0; bb < sb.length; bb += 3) {
            mb[0] = sb[bb], mb[1] = sb[bb + 1], mb[2] = sb[bb + 2];
            for (let bb = 0; bb < 3; bb++)
              if (Ib = mb[bb], Hb = mb[(bb + 1) % 3], void 0 === lb[Ib] && void 0 === lb[Hb] ? (lb[Ib] = [], lb[Hb] = []) : (void 0 === lb[Ib] && (lb[Ib] = []), void 0 === lb[Hb] && (lb[Hb] = [])), void 0 === lb[Ib][Hb] && void 0 === lb[Hb][Ib]) {
                lb[Ib][Hb] = [], fb.x = (kb[3 * Hb] - kb[3 * Ib]) / Tb, fb.y = (kb[3 * Hb + 1] - kb[3 * Ib + 1]) / Tb, fb.z = (kb[3 * Hb + 2] - kb[3 * Ib + 2]) / Tb, ab && (Mb.x = (ab[3 * Hb] - ab[3 * Ib]) / Tb, Mb.y = (ab[3 * Hb + 1] - ab[3 * Ib + 1]) / Tb, Mb.z = (ab[3 * Hb + 2] - ab[3 * Ib + 2]) / Tb), Wb && (Xb.x = (Wb[2 * Hb] - Wb[2 * Ib]) / Tb, Xb.y = (Wb[2 * Hb + 1] - Wb[2 * Ib + 1]) / Tb), lb[Ib][Hb].push(Ib);
                for (let bb = 1; bb < Tb; bb++) lb[Ib][Hb].push(kb.length / 3), kb[Nb++] = kb[3 * Ib] + bb * fb.x, kb[Nb++] = kb[3 * Ib + 1] + bb * fb.y, kb[Nb++] = kb[3 * Ib + 2] + bb * fb.z, ab && (ab[Cb++] = ab[3 * Ib] + bb * Mb.x, ab[Cb++] = ab[3 * Ib + 1] + bb * Mb.y, ab[Cb++] = ab[3 * Ib + 2] + bb * Mb.z), Wb && (Wb[eb++] = Wb[2 * Ib] + bb * Xb.x, Wb[eb++] = Wb[2 * Ib + 1] + bb * Xb.y);
                lb[Ib][Hb].push(Hb), lb[Hb][Ib] = [], Qb = lb[Ib][Hb].length;
                for (let bb = 0; bb < Qb; bb++) lb[Hb][Ib][bb] = lb[Ib][Hb][Qb - 1 - bb]
              } Ub[0][0] = sb[bb], Ub[1][0] = lb[sb[bb]][sb[bb + 1]][1], Ub[1][1] = lb[sb[bb]][sb[bb + 2]][1];
            for (let cb = 2; cb < Tb; cb++) {
              Ub[cb][0] = lb[sb[bb]][sb[bb + 1]][cb], Ub[cb][cb] = lb[sb[bb]][sb[bb + 2]][cb], fb.x = (kb[3 * Ub[cb][cb]] - kb[3 * Ub[cb][0]]) / cb, fb.y = (kb[3 * Ub[cb][cb] + 1] - kb[3 * Ub[cb][0] + 1]) / cb, fb.z = (kb[3 * Ub[cb][cb] + 2] - kb[3 * Ub[cb][0] + 2]) / cb, ab && (Mb.x = (ab[3 * Ub[cb][cb]] - ab[3 * Ub[cb][0]]) / cb, Mb.y = (ab[3 * Ub[cb][cb] + 1] - ab[3 * Ub[cb][0] + 1]) / cb, Mb.z = (ab[3 * Ub[cb][cb] + 2] - ab[3 * Ub[cb][0] + 2]) / cb), Wb && (Xb.x = (Wb[2 * Ub[cb][cb]] - Wb[2 * Ub[cb][0]]) / cb, Xb.y = (Wb[2 * Ub[cb][cb] + 1] - Wb[2 * Ub[cb][0] + 1]) / cb);
              for (let bb = 1; bb < cb; bb++) Ub[cb][bb] = kb.length / 3, kb[Nb++] = kb[3 * Ub[cb][0]] + bb * fb.x, kb[Nb++] = kb[3 * Ub[cb][0] + 1] + bb * fb.y, kb[Nb++] = kb[3 * Ub[cb][0] + 2] + bb * fb.z, ab && (ab[Cb++] = ab[3 * Ub[cb][0]] + bb * Mb.x, ab[Cb++] = ab[3 * Ub[cb][0] + 1] + bb * Mb.y, ab[Cb++] = ab[3 * Ub[cb][0] + 2] + bb * Mb.z), Wb && (Wb[eb++] = Wb[2 * Ub[cb][0]] + bb * Xb.x, Wb[eb++] = Wb[2 * Ub[cb][0] + 1] + bb * Xb.y)
            }
            Ub[Tb] = lb[sb[bb + 1]][sb[bb + 2]], nb.push(Ub[0][0], Ub[1][0], Ub[1][1]);
            for (let bb = 1; bb < Tb; bb++) {
              let cb;
              for (cb = 0; cb < bb; cb++) nb.push(Ub[bb][cb], Ub[bb + 1][cb], Ub[bb + 1][cb + 1]), nb.push(Ub[bb][cb], Ub[bb + 1][cb + 1], Ub[bb][cb + 1]);
              nb.push(Ub[bb][cb], Ub[bb + 1][cb], Ub[bb + 1][cb + 1])
            }
          }
          cb.indices = nb, cb.applyToMesh(this, this.isVertexBufferUpdatable(Bb.l.PositionKind))
        } else Zb.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const bb = tb.e.ExtractFromMesh(this),
          cb = bb.uvs,
          sb = bb.indices,
          kb = bb.positions,
          Wb = bb.colors,
          ab = bb.matricesIndices,
          Tb = bb.matricesWeights,
          Ub = bb.matricesIndicesExtra,
          Ib = bb.matricesWeightsExtra;
        if (void 0 === sb || void 0 === kb || null === sb || null === kb) Zb.c.Warn("VertexData contains empty entries");
        else {
          const Hb = [],
            fb = [],
            Mb = [],
            Xb = [],
            nb = [],
            mb = [],
            lb = [],
            Qb = [];
          let eb, Cb = 0;
          const Nb = {};
          let Vb, Lb;
          for (let bb = 0; bb < sb.length; bb += 3) {
            Lb = [sb[bb], sb[bb + 1], sb[bb + 2]], eb = [];
            for (let bb = 0; bb < 3; bb++) {
              eb[bb] = "";
              for (let cb = 0; cb < 3; cb++) Math.abs(kb[3 * Lb[bb] + cb]) < 1e-8 && (kb[3 * Lb[bb] + cb] = 0), eb[bb] += kb[3 * Lb[bb] + cb] + "|"
            }
            if (eb[0] != eb[1] && eb[0] != eb[2] && eb[1] != eb[2])
              for (let bb = 0; bb < 3; bb++) {
                if (Vb = Nb[eb[bb]], void 0 === Vb) {
                  Nb[eb[bb]] = Cb, Vb = Cb++;
                  for (let cb = 0; cb < 3; cb++) Hb.push(kb[3 * Lb[bb] + cb]);
                  if (null !== Wb && void 0 !== Wb)
                    for (let cb = 0; cb < 4; cb++) Xb.push(Wb[4 * Lb[bb] + cb]);
                  if (null !== cb && void 0 !== cb)
                    for (let sb = 0; sb < 2; sb++) Mb.push(cb[2 * Lb[bb] + sb]);
                  if (null !== ab && void 0 !== ab)
                    for (let cb = 0; cb < 4; cb++) nb.push(ab[4 * Lb[bb] + cb]);
                  if (null !== Tb && void 0 !== Tb)
                    for (let cb = 0; cb < 4; cb++) mb.push(Tb[4 * Lb[bb] + cb]);
                  if (null !== Ub && void 0 !== Ub)
                    for (let cb = 0; cb < 4; cb++) lb.push(Ub[4 * Lb[bb] + cb]);
                  if (null !== Ib && void 0 !== Ib)
                    for (let cb = 0; cb < 4; cb++) Qb.push(Ib[4 * Lb[bb] + cb])
                }
                fb.push(Vb)
              }
          }
          const ub = [];
          tb.e.ComputeNormals(Hb, fb, ub), bb.positions = Hb, bb.indices = fb, bb.normals = ub, null !== cb && void 0 !== cb && (bb.uvs = Mb), null !== Wb && void 0 !== Wb && (bb.colors = Xb), null !== ab && void 0 !== ab && (bb.matricesIndices = nb), null !== Tb && void 0 !== Tb && (bb.matricesWeights = mb), null !== Ub && void 0 !== Ub && (bb.matricesIndicesExtra = lb), null !== Tb && void 0 !== Tb && (bb.matricesWeightsExtra = Qb), bb.applyToMesh(this, this.isVertexBufferUpdatable(Bb.l.PositionKind))
        }
      }
      static _instancedMeshFactory(bb, cb) {
        throw (0, qb.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(bb, cb, sb) {
        throw (0, qb.i)("PhysicsImpostor")
      }
      createInstance(bb) {
        const cb = xb._instancedMeshFactory(bb, this);
        return cb.parent = this.parent, cb
      }
      synchronizeInstances() {
        for (let bb = 0; bb < this.instances.length; bb++) {
          this.instances[bb]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(bb) {
        const cb = this.Gsb(),
          sb = this.getVerticesData(Bb.l.PositionKind);
        if (!sb || !cb) return this;
        const kb = [];
        for (let ab = 0; ab < sb.length; ab += 3) kb.push(hb.p.FromArray(sb, ab));
        const Wb = [];
        return Cb.b.SyncAsyncForLoop(kb.length, 40, (bb => {
          const cb = kb.length - 1 - bb,
            sb = kb[cb];
          for (let ab = 0; ab < cb; ++ab) {
            const bb = kb[ab];
            if (sb.equals(bb)) {
              Wb[cb] = ab;
              break
            }
          }
        }), (() => {
          for (let bb = 0; bb < cb.length; ++bb) cb[bb] = Wb[cb[bb]] || cb[bb];
          const sb = this.XV.slice(0);
          this.setIndices(cb), this.XV = sb, bb && bb(this)
        })), this
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), Lb.c && Lb.c.HasTags(this) && (bb.tags = Lb.c.GetTags(this)), bb.position = this.position.Osb(), this.rotationQuaternion ? bb.rotationQuaternion = this.rotationQuaternion.Osb() : this.rotation && (bb.rotation = this.rotation.Osb()), bb.bl = this.bl.Osb(), this._postMultiplyPivotMatrix ? bb.pivotMatrix = this.getPivotMatrix().Osb() : bb.localMatrix = this.getPivotMatrix().Osb(), bb.isEnabled = this.isEnabled(!1), bb.isVisible = this.isVisible, bb.infiniteDistance = this.infiniteDistance, bb.pickable = this.UQ, bb.receiveShadows = this.receiveShadows, bb.billboardMode = this.billboardMode, bb.visibility = this.visibility, bb.Rm = this.Rm, bb.checkCollisions = this.checkCollisions, bb.ellipsoid = this.ellipsoid.Osb(), bb.ellipsoidOffset = this.ellipsoidOffset.Osb(), bb.jm = this.jm, bb.isBlocker = this.isBlocker, bb.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (bb.RY = !0), this.parent && this.parent._serializeAsParent(bb), bb.isUnIndexed = this.isUnIndexed;
        const cb = this._geometry;
        if (cb && this.XV) {
          bb.geometryUniqueId = cb.uniqueId, bb.geometryId = cb.id, bb.XV = [];
          for (let cb = 0; cb < this.XV.length; cb++) {
            const sb = this.XV[cb];
            bb.XV.push({
              materialIndex: sb.materialIndex,
              verticesStart: sb.verticesStart,
              verticesCount: sb.verticesCount,
              indexStart: sb.indexStart,
              indexCount: sb.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (bb.materialUniqueId = this.material.uniqueId, bb.materialId = this.material.id) : (this.material = null, bb.materialUniqueId = this._scene.defaultMaterial.uniqueId, bb.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (bb.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (bb.skeletonId = this.skeleton.id, bb.skeletonUniqueId = this.skeleton.uniqueId, bb.numBoneInfluencers = this.numBoneInfluencers), this.EY()._getComponent(db.e.NAME_PHYSICSENGINE)) {
          const cb = this.getPhysicsImpostor?.();
          cb && (bb.physicsMass = cb.getParam("nU"), bb.physicsFriction = cb.getParam("friction"), bb.physicsRestitution = cb.getParam("nU"), bb.physicsImpostor = cb.type)
        }
        this.metadata && (bb.metadata = this.metadata), 0 !== this.meshBlendingTag && (bb.meshBlendingTag = this.meshBlendingTag), bb.instances = [];
        for (let sb = 0; sb < this.instances.length; sb++) {
          const cb = this.instances[sb];
          if (cb.doNotSerialize) continue;
          const kb = {
            name: cb.name,
            id: cb.id,
            isEnabled: cb.isEnabled(!1),
            isVisible: cb.isVisible,
            UQ: cb.UQ,
            checkCollisions: cb.checkCollisions,
            position: cb.position.Osb(),
            bl: cb.bl.Osb()
          };
          if (cb.parent && cb.parent._serializeAsParent(kb), cb.rotationQuaternion ? kb.rotationQuaternion = cb.rotationQuaternion.Osb() : cb.rotation && (kb.rotation = cb.rotation.Osb()), this.EY()._getComponent(db.e.NAME_PHYSICSENGINE)) {
            const bb = cb.getPhysicsImpostor?.();
            bb && (kb.physicsMass = bb.getParam("nU"), kb.physicsFriction = bb.getParam("friction"), kb.physicsRestitution = bb.getParam("nU"), kb.physicsImpostor = bb.type)
          }
          cb.metadata && (kb.metadata = cb.metadata), cb.actionManager && (kb.actions = cb.actionManager.serialize(cb.name)), bb.instances.push(kb), Kb.d.AppendSerializedAnimations(cb, kb), kb.uQ = cb.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (bb.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.vbb
          }, this._userThinInstanceBuffersStorage)) {
          const cb = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const bb in this._userThinInstanceBuffersStorage.data) cb.data[bb] = Array.from(this._userThinInstanceBuffersStorage.data[bb]), cb.sizes[bb] = this._userThinInstanceBuffersStorage.sizes[bb], cb.strides[bb] = this._userThinInstanceBuffersStorage.strides[bb];
          bb.thinInstances.userThinInstance = cb
        }
        return Kb.d.AppendSerializedAnimations(this, bb), bb.uQ = this.serializeAnimationRanges(), bb.layerMask = this.layerMask, bb.alphaIndex = this.alphaIndex, bb.hasVertexAlpha = this.hasVertexAlpha, bb.overlayAlpha = this.overlayAlpha, bb.overlayColor = this.overlayColor.Osb(), bb.renderOverlay = this.renderOverlay, bb.applyFog = this.applyFog, this.actionManager && (bb.actions = this.actionManager.serialize(this.name)), bb
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const bb = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (bb && bb.vertexCount) {
          if (bb.vertexCount !== this.getTotalVertices()) return Zb.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (bb.isUsingTextureForTargets) return;
          for (let cb = 0; cb < bb.numInfluencers; cb++) {
            const sb = bb.getActiveTarget(cb),
              kb = sb.getPositions();
            if (!kb) return void Zb.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Bb.l.PositionKind + cb, kb, !1, 3);
            const Wb = sb.getNormals();
            Wb && this.geometry.setVerticesData(Bb.l.NormalKind + cb, Wb, !1, 3);
            const ab = sb.getTangents();
            ab && this.geometry.setVerticesData(Bb.l.TangentKind + cb, ab, !1, 3);
            const Tb = sb.getUVs();
            Tb && this.geometry.setVerticesData(Bb.l.UVKind + "_" + cb, Tb, !1, 2);
            const Ub = sb.getUV2s();
            Ub && this.geometry.setVerticesData(Bb.l.UV2Kind + "_" + cb, Ub, !1, 2);
            const Ib = sb.getColors();
            Ib && this.geometry.setVerticesData(Bb.l.ColorKind + cb, Ib, !1, 4)
          }
        } else {
          let bb = 0;
          for (; this.geometry.isVerticesDataPresent(Bb.l.PositionKind + bb);) this.geometry.removeVerticesData(Bb.l.PositionKind + bb), this.geometry.isVerticesDataPresent(Bb.l.NormalKind + bb) && this.geometry.removeVerticesData(Bb.l.NormalKind + bb), this.geometry.isVerticesDataPresent(Bb.l.TangentKind + bb) && this.geometry.removeVerticesData(Bb.l.TangentKind + bb), this.geometry.isVerticesDataPresent(Bb.l.UVKind + "_" + bb) && this.geometry.removeVerticesData(Bb.l.UVKind + "_" + bb), this.geometry.isVerticesDataPresent(Bb.l.UV2Kind + "_" + bb) && this.geometry.removeVerticesData(Bb.l.UV2Kind + "_" + bb), this.geometry.isVerticesDataPresent(Bb.l.ColorKind + bb) && this.geometry.removeVerticesData(Bb.l.ColorKind + bb), bb++
        }
      }
      static Parse(bb, cb, sb) {
        let kb, Wb = !1;
        if (bb.type && "LinesMesh" === bb.type ? kb = xb._LinesMeshParser(bb, cb) : bb.type && "GroundMesh" === bb.type ? kb = xb._GroundMeshParser(bb, cb) : bb.type && "GoldbergMesh" === bb.type ? kb = xb._GoldbergMeshParser(bb, cb) : bb.type && "GreasedLineMesh" === bb.type ? kb = xb._GreasedLineMeshParser(bb, cb) : bb.type && "TrailMesh" === bb.type ? kb = xb._TrailMeshParser(bb, cb) : bb.type && "GaussianSplattingMesh" === bb.type ? (kb = bb._isCompound ? xb._GaussianSplattingCompoundMeshParser(bb, cb) : xb._GaussianSplattingMeshParser(bb, cb), Wb = !0) : bb.type && "GaussianSplattingPartProxyMesh" === bb.type ? (kb = xb._GaussianSplattingPartProxyMeshParser(bb, cb), Wb = !0) : kb = new xb(bb.name, cb), kb.id = bb.id, kb._waitingParsedUniqueId = bb.uniqueId, Lb.c && Lb.c.AddTagsTo(kb, bb.tags), kb.position = hb.p.FromArray(bb.position), void 0 !== bb.metadata && (kb.metadata = bb.metadata), void 0 !== bb.meshBlendingTag && (kb.meshBlendingTag = bb.meshBlendingTag), bb.rotationQuaternion ? kb.rotationQuaternion = hb.f.FromArray(bb.rotationQuaternion) : bb.rotation && (kb.rotation = hb.p.FromArray(bb.rotation)), kb.bl = hb.p.FromArray(bb.bl), bb.localMatrix ? kb.setPreTransformMatrix(hb.e.FromArray(bb.localMatrix)) : bb.pivotMatrix && kb.setPivotMatrix(hb.e.FromArray(bb.pivotMatrix)), kb.GV(bb.isEnabled), kb.isVisible = bb.isVisible, kb.infiniteDistance = bb.infiniteDistance, kb.Rm = !!bb.Rm, kb.showBoundingBox = bb.showBoundingBox, kb.showSubMeshesBoundingBox = bb.showSubMeshesBoundingBox, void 0 !== bb.applyFog && (kb.applyFog = bb.applyFog), void 0 !== bb.pickable && (kb.UQ = bb.pickable), void 0 !== bb.alphaIndex && (kb.alphaIndex = bb.alphaIndex), kb.receiveShadows = bb.receiveShadows, void 0 !== bb.billboardMode && (kb.billboardMode = bb.billboardMode), void 0 !== bb.visibility && (kb.visibility = bb.visibility), kb.checkCollisions = bb.checkCollisions, kb.jm = !!bb.jm, bb.ellipsoid && (kb.ellipsoid = hb.p.FromArray(bb.ellipsoid)), bb.ellipsoidOffset && (kb.ellipsoidOffset = hb.p.FromArray(bb.ellipsoidOffset)), null != bb.overrideMaterialSideOrientation && (kb.sideOrientation = bb.overrideMaterialSideOrientation), void 0 !== bb.sideOrientation && (kb.sideOrientation = bb.sideOrientation), void 0 !== bb.isBlocker && (kb.isBlocker = bb.isBlocker), kb._shouldGenerateFlatShading = bb.useFlatShading, bb.RY && (kb._waitingData.RY = bb.RY), void 0 !== bb.parentId && (kb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (kb._waitingParentInstanceIndex = bb.parentInstanceIndex), void 0 !== bb.actions && (kb._waitingData.actions = bb.actions), void 0 !== bb.overlayAlpha && (kb.overlayAlpha = bb.overlayAlpha), void 0 !== bb.overlayColor && (kb.overlayColor = Jb.e.FromArray(bb.overlayColor)), void 0 !== bb.renderOverlay && (kb.renderOverlay = bb.renderOverlay), kb.isUnIndexed = !!bb.isUnIndexed, kb.hasVertexAlpha = bb.hasVertexAlpha, bb.delayLoadingFile ? (kb.delayLoadState = 4, kb.delayLoadingFile = sb + bb.delayLoadingFile, kb.buildBoundingInfo(hb.p.FromArray(bb.boundingBoxMinimum), hb.p.FromArray(bb.boundingBoxMaximum)), bb._binaryInfo && (kb._binaryInfo = bb._binaryInfo), kb._delayInfo = [], bb.hasUVs && kb._delayInfo.push(Bb.l.UVKind), bb.hasUVs2 && kb._delayInfo.push(Bb.l.UV2Kind), bb.hasUVs3 && kb._delayInfo.push(Bb.l.UV3Kind), bb.hasUVs4 && kb._delayInfo.push(Bb.l.UV4Kind), bb.hasUVs5 && kb._delayInfo.push(Bb.l.UV5Kind), bb.hasUVs6 && kb._delayInfo.push(Bb.l.UV6Kind), bb.hasColors && kb._delayInfo.push(Bb.l.ColorKind), bb.hasMatricesIndices && kb._delayInfo.push(Bb.l.MatricesIndicesKind), bb.hasMatricesWeights && kb._delayInfo.push(Bb.l.MatricesWeightsKind), kb._delayLoadingFunction = yb.e._ImportGeometry, Gb.b.ForceFullSceneLoadingForIncremental && kb._checkDelayState()) : Wb || yb.e._ImportGeometry(bb, kb), bb.materialUniqueId ? kb._waitingMaterialId = bb.materialUniqueId : bb.materialId && (kb._waitingMaterialId = bb.materialId), bb.morphTargetManagerId > -1 && (kb._waitingMorphTargetManagerId = bb.morphTargetManagerId), void 0 !== bb.skeletonId && null !== bb.skeletonId && (kb.skeleton = cb.getLastSkeletonById(bb.skeletonId), kb._waitingSkeletonId = bb.skeletonId, bb.numBoneInfluencers && (kb.numBoneInfluencers = bb.numBoneInfluencers)), void 0 !== bb.skeletonUniqueId && null !== bb.skeletonUniqueId && (kb._waitingSkeletonUniqueId = bb.skeletonUniqueId), bb.animations) {
          for (let cb = 0; cb < bb.animations.length; cb++) {
            const sb = bb.animations[cb],
              Wb = (0, zb.e)("BABYLON.Animation");
            Wb && kb.animations.push(Wb.Parse(sb))
          }
          gb.c.ParseAnimationRanges(kb, bb, cb)
        }
        if (bb.autoAnimate && cb.beginAnimation(kb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), bb.layerMask && !isNaN(bb.layerMask) ? kb.layerMask = Math.abs(parseInt(bb.layerMask)) : kb.layerMask = 268435455, bb.physicsImpostor && (kb.physicsImpostor = xb._PhysicsImpostorParser(cb, kb, bb)), bb.lodMeshIds && (kb._waitingData.lods = {
            ids: bb.lodMeshIds,
            distances: bb.lodDistances ? bb.lodDistances : null,
            coverages: bb.lodCoverages ? bb.lodCoverages : null
          }), bb.instances)
          for (let ab = 0; ab < bb.instances.length; ab++) {
            const sb = bb.instances[ab],
              Wb = kb.createInstance(sb.name);
            if (sb.id && (Wb.id = sb.id), Lb.c && (sb.tags ? Lb.c.AddTagsTo(Wb, sb.tags) : Lb.c.AddTagsTo(Wb, bb.tags)), Wb.position = hb.p.FromArray(sb.position), void 0 !== sb.metadata && (Wb.metadata = sb.metadata), void 0 !== sb.parentId && (Wb._waitingParentId = sb.parentId), void 0 !== sb.parentInstanceIndex && (Wb._waitingParentInstanceIndex = sb.parentInstanceIndex), void 0 !== sb.isEnabled && null !== sb.isEnabled && Wb.GV(sb.isEnabled), void 0 !== sb.isVisible && null !== sb.isVisible && (Wb.isVisible = sb.isVisible), void 0 !== sb.UQ && null !== sb.UQ && (Wb.UQ = sb.UQ), sb.rotationQuaternion ? Wb.rotationQuaternion = hb.f.FromArray(sb.rotationQuaternion) : sb.rotation && (Wb.rotation = hb.p.FromArray(sb.rotation)), Wb.bl = hb.p.FromArray(sb.bl), void 0 != sb.checkCollisions && null != sb.checkCollisions && (Wb.checkCollisions = sb.checkCollisions), void 0 != sb.pickable && null != sb.pickable && (Wb.UQ = sb.pickable), void 0 != sb.showBoundingBox && null != sb.showBoundingBox && (Wb.showBoundingBox = sb.showBoundingBox), void 0 != sb.showSubMeshesBoundingBox && null != sb.showSubMeshesBoundingBox && (Wb.showSubMeshesBoundingBox = sb.showSubMeshesBoundingBox), void 0 != sb.alphaIndex && null != sb.showSubMeshesBoundingBox && (Wb.alphaIndex = sb.alphaIndex), sb.physicsImpostor && (Wb.physicsImpostor = xb._PhysicsImpostorParser(cb, Wb, sb)), void 0 !== sb.actions && (Wb._waitingData.actions = sb.actions), sb.animations) {
              for (let bb = 0; bb < sb.animations.length; bb++) {
                const cb = sb.animations[bb],
                  kb = (0, zb.e)("BABYLON.Animation");
                kb && Wb.animations.push(kb.Parse(cb))
              }
              gb.c.ParseAnimationRanges(Wb, sb, cb), sb.autoAnimate && cb.beginAnimation(Wb, sb.autoAnimateFrom, sb.autoAnimateTo, sb.autoAnimateLoop, sb.autoAnimateSpeed || 1)
            }
          }
        if (bb.thinInstances) {
          const cb = bb.thinInstances;
          if (kb.vbb = !!cb.enablePicking, cb.matrixData ? (kb.U3("matrix", new Float32Array(cb.matrixData), 16, !1), kb._thinInstanceDataStorage.matrixBufferSize = cb.matrixBufferSize, kb._thinInstanceDataStorage.instancesCount = cb.instancesCount) : kb._thinInstanceDataStorage.matrixBufferSize = cb.matrixBufferSize, bb.thinInstances.userThinInstance) {
            const cb = bb.thinInstances.userThinInstance;
            for (const bb in cb.data) kb.U3(bb, new Float32Array(cb.data[bb]), cb.strides[bb], !1), kb._userThinInstanceBuffersStorage.sizes[bb] = cb.sizes[bb]
          }
        }
        return kb
      }
      setPositionsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourcePositions) {
          const cb = this.getVerticesData(Bb.l.PositionKind);
          if (!cb) return bb._sourcePositions;
          bb._sourcePositions = new Float32Array(cb), this.isVertexBufferUpdatable(Bb.l.PositionKind) || this.setVerticesData(Bb.l.PositionKind, cb, !0)
        }
        return bb._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourceNormals) {
          const cb = this.getVerticesData(Bb.l.NormalKind);
          if (!cb) return bb._sourceNormals;
          bb._sourceNormals = new Float32Array(cb), this.isVertexBufferUpdatable(Bb.l.NormalKind) || this.setVerticesData(Bb.l.NormalKind, cb, !0)
        }
        return bb._sourceNormals
      }
      applySkeleton(bb) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.EY().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.EY().getFrameId(), !this.isVerticesDataPresent(Bb.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Bb.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Bb.l.MatricesWeightsKind)) return this;
        const cb = this.isVerticesDataPresent(Bb.l.NormalKind),
          sb = this._internalMeshDataInfo;
        if (!sb._sourcePositions) {
          const bb = this.XV.slice();
          this.setPositionsForCPUSkinning(), this.XV = bb
        }
        cb && !sb._sourceNormals && this.setNormalsForCPUSkinning();
        let kb = this.getVerticesData(Bb.l.PositionKind);
        if (!kb) return this;
        kb instanceof Float32Array || (kb = new Float32Array(kb));
        let Wb = this.getVerticesData(Bb.l.NormalKind);
        if (cb) {
          if (!Wb) return this;
          Wb instanceof Float32Array || (Wb = new Float32Array(Wb))
        }
        const ab = this.getVerticesData(Bb.l.MatricesIndicesKind),
          Tb = this.getVerticesData(Bb.l.MatricesWeightsKind);
        if (!Tb || !ab) return this;
        const Ub = this.numBoneInfluencers > 4,
          Ib = Ub ? this.getVerticesData(Bb.l.MatricesIndicesExtraKind) : null,
          Hb = Ub ? this.getVerticesData(Bb.l.MatricesWeightsExtraKind) : null,
          fb = bb.getTransformMatrices(this),
          Mb = hb.p.Zero(),
          Xb = new hb.e,
          nb = new hb.e;
        let mb, lb = 0;
        for (let Qb = 0; Qb < kb.length; Qb += 3, lb += 4) {
          let bb;
          for (mb = 0; mb < 4; mb++) bb = Tb[lb + mb], bb > 0 && (hb.e.FromFloat32ArrayToRefScaled(fb, Math.floor(16 * ab[lb + mb]), bb, nb), Xb.addToSelf(nb));
          if (Ub)
            for (mb = 0; mb < 4; mb++) bb = Hb[lb + mb], bb > 0 && (hb.e.FromFloat32ArrayToRefScaled(fb, Math.floor(16 * Ib[lb + mb]), bb, nb), Xb.addToSelf(nb));
          hb.p.TransformCoordinatesFromFloatsToRef(sb._sourcePositions[Qb], sb._sourcePositions[Qb + 1], sb._sourcePositions[Qb + 2], Xb, Mb), Mb.toArray(kb, Qb), cb && (hb.p.TransformNormalFromFloatsToRef(sb._sourceNormals[Qb], sb._sourceNormals[Qb + 1], sb._sourceNormals[Qb + 2], Xb, Mb), Mb.toArray(Wb, Qb)), Xb.reset()
        }
        return this.updateVerticesData(Bb.l.PositionKind, kb), cb && this.updateVerticesData(Bb.l.NormalKind, Wb), this
      }
      static MinMax(bb) {
        let cb = null,
          sb = null;
        for (const kb of bb) {
          const bb = kb.PJ().boundingBox;
          cb && sb ? (cb.minimizeInPlace(bb.minimumWorld), sb.maximizeInPlace(bb.maximumWorld)) : (cb = bb.minimumWorld.clone(), sb = bb.maximumWorld.clone())
        }
        return cb && sb ? {
          min: cb,
          max: sb
        } : {
          min: hb.p.Zero(),
          max: hb.p.Zero()
        }
      }
      static Center(bb) {
        const cb = bb instanceof Array ? xb.MinMax(bb) : bb;
        return hb.p.Center(cb.min, cb.max)
      }
      static MergeMeshes(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        return (0, ub.g)(xb._MergeMeshesCoroutine(bb, cb, sb, kb, Wb, ab, !1))
      }
      static async MergeMeshesAsync(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, ub.f)(xb._MergeMeshesCoroutine(bb, cb, sb, kb, Wb, ab, !0), (0, ub.b)())
      }
      static * _MergeMeshesCoroutine(bb) {
        let cb, sb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kb = arguments.length > 2 ? arguments[2] : void 0,
          Wb = arguments.length > 3 ? arguments[3] : void 0,
          ab = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (bb = bb.filter(Boolean)).length) return null;
        if (!kb) {
          let sb = 0;
          for (cb = 0; cb < bb.length; cb++)
            if (sb += bb[cb].getTotalVertices(), sb >= 65536) return Zb.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Ib = bb[0];
        Tb && (ab = !1, bb.sort(((bb, cb) => (bb.material?.uniqueId ?? -1) - (cb.material?.uniqueId ?? -1))));
        const Hb = new Array,
          fb = new Array,
          Mb = new Array,
          Xb = bb[0].sideOrientation;
        for (cb = 0; cb < bb.length; cb++) {
          const sb = bb[cb];
          if (sb.qY) return Zb.c.Warn("Cannot merge instance meshes."), null;
          if (Xb !== sb.sideOrientation) return Zb.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (ab || Tb) {
            const bb = Mb.reduce(((bb, cb) => Math.max(bb, cb.start + cb.count)), 0);
            if (Tb)
              if (sb.material) {
                const cb = sb.material;
                if (cb instanceof Ob.d) {
                  for (let bb = 0; bb < cb.X3.length; bb++) Hb.indexOf(cb.X3[bb]) < 0 && Hb.push(cb.X3[bb]);
                  for (let kb = 0; kb < sb.XV.length; kb++) fb.push(Hb.indexOf(cb.X3[sb.XV[kb].materialIndex])), Mb.push({
                    start: bb + sb.XV[kb].indexStart,
                    count: sb.XV[kb].indexCount
                  })
                } else {
                  Hb.indexOf(cb) < 0 && Hb.push(cb);
                  for (let kb = 0; kb < sb.XV.length; kb++) fb.push(Hb.indexOf(cb)), Mb.push({
                    start: bb + sb.XV[kb].indexStart,
                    count: sb.XV[kb].indexCount
                  })
                }
              } else
                for (let cb = 0; cb < sb.XV.length; cb++) fb.push(0), Mb.push({
                  start: bb + sb.XV[cb].indexStart,
                  count: sb.XV[cb].indexCount
                });
            else Mb.push({
              start: bb,
              count: sb.getTotalIndices()
            })
          }
        }
        if (Tb && Mb.length > 1) {
          let bb = 0;
          for (let cb = 1; cb < Mb.length; cb++) {
            const sb = Mb[bb],
              kb = Mb[cb];
            fb[cb] === fb[bb] && sb.start + sb.count === kb.start ? sb.count += kb.count : (bb++, Mb[bb] = kb, fb[bb] = fb[cb])
          }
          Mb.length = bb + 1, fb.length = bb + 1
        }
        const nb = bb => {
            const cb = bb.computeWorldMatrix(!0);
            return {
              vertexData: tb.e.ExtractFromMesh(bb, !1, !1),
              transform: cb
            }
          },
          {
            vertexData: mb,
            transform: lb
          } = nb(bb[0]);
        Ub && (yield);
        const Qb = new Array(bb.length - 1);
        for (let ub = 1; ub < bb.length; ub++) Qb[ub - 1] = nb(bb[ub]), Ub && (yield);
        const eb = mb._mergeCoroutine(lb, Qb, kb, Ub, !sb);
        let Cb = eb.next();
        for (; !Cb.done;) Ub && (yield), Cb = eb.next();
        const Nb = Cb.value;
        Wb || (Wb = new xb(Ib.name + "_merged", Ib.EY()));
        const Vb = Nb._applyToCoroutine(Wb, void 0, Ub);
        let Lb = Vb.next();
        for (; !Lb.done;) Ub && (yield), Lb = Vb.next();
        if (Wb.checkCollisions = Ib.checkCollisions, Wb.sideOrientation = Ib.sideOrientation, sb)
          for (cb = 0; cb < bb.length; cb++) bb[cb].dispose();
        if (ab || Tb) {
          for (Wb.releaseSubMeshes(), cb = 0; cb < Mb.length;) Db.b.CreateFromIndices(0, Mb[cb].start, Mb[cb].count, Wb, void 0, !1), cb++;
          for (const bb of Wb.XV) bb.refreshBoundingInfo();
          Wb.computeWorldMatrix(!0)
        }
        if (Tb) {
          const bb = new Ob.d(Ib.name + "_merged", Ib.EY());
          bb.X3 = Hb;
          for (let cb = 0; cb < Wb.XV.length; cb++) Wb.XV[cb].materialIndex = fb[cb];
          Wb.material = bb
        } else Wb.material = Ib.material;
        return Wb
      }
      U1(bb) {
        bb._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(bb)
      }
      W4(bb) {
        const cb = bb._indexInSourceMeshInstanceArray;
        if (-1 != cb) {
          if (cb !== this.instances.length - 1) {
            const bb = this.instances[this.instances.length - 1];
            this.instances[cb] = bb, bb._indexInSourceMeshInstanceArray = cb
          }
          bb._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Eb.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(bb) {
        const cb = this.EY();
        return cb.forcePointsCloud ? Eb.e.PointFillMode : cb.forceWireframe ? Eb.e.WireFrameFillMode : this.overrideRenderingFillMode ?? bb
      }
      setMaterialByID(bb) {
        return this.setMaterialById(bb)
      }
      static CreateRibbon(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(bb, cb, sb, kb, Wb, ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(bb, cb, sb, kb, Wb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(bb, cb, sb, kb, Wb, ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(bb, cb, sb, kb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(bb, cb, sb, kb, Wb, ab, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(bb, cb, sb, kb, Wb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(bb, cb, sb, kb, Wb, ab, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(bb, cb, sb, kb, Wb, ab, Tb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(bb, cb, sb, kb, Wb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(bb, cb, sb, kb, Wb, ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(bb, cb, sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(bb, cb, sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(bb, cb, sb, kb, Wb, ab) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(bb, cb, sb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    xb.FRONTSIDE = tb.e.FRONTSIDE, xb.BACKSIDE = tb.e.BACKSIDE, xb.DOUBLESIDE = tb.e.DOUBLESIDE, xb.DEFAULTSIDE = tb.e.DEFAULTSIDE, xb.NO_CAP = 0, xb.CAP_START = 1, xb.CAP_END = 2, xb.CAP_ALL = 3, xb.NO_FLIP = 0, xb.FLIP_TILE = 1, xb.ROTATE_TILE = 2, xb.FLIP_ROW = 3, xb.ROTATE_ROW = 4, xb.FLIP_N_ROTATE_TILE = 5, xb.FLIP_N_ROTATE_ROW = 6, xb.CENTER = 0, xb.LEFT = 1, xb.RIGHT = 2, xb.TOP = 3, xb.BOTTOM = 4, xb.INSTANCEDMESH_SORT_TRANSPARENT = !1, xb._GroundMeshParser = (bb, cb) => {
      throw (0, qb.i)("GroundMesh")
    }, xb._GoldbergMeshParser = (bb, cb) => {
      throw (0, qb.i)("GoldbergMesh")
    }, xb._LinesMeshParser = (bb, cb) => {
      throw (0, qb.i)("LinesMesh")
    }, xb._GreasedLineMeshParser = (bb, cb) => {
      throw (0, qb.i)("GreasedLineMesh")
    }, xb._GreasedLineRibbonMeshParser = (bb, cb) => {
      throw (0, qb.i)("GreasedLineRibbonMesh")
    }, xb._TrailMeshParser = (bb, cb) => {
      throw (0, qb.i)("TrailMesh")
    }, xb._GaussianSplattingMeshParser = (bb, cb) => {
      throw (0, qb.i)("GaussianSplattingMesh")
    }, xb._GaussianSplattingPartProxyMeshParser = (bb, cb) => {
      throw (0, qb.i)("GaussianSplattingPartProxyMesh")
    }, xb._GaussianSplattingCompoundMeshParser = (bb, cb) => {
      throw (0, qb.i)("GaussianSplattingCompoundMesh")
    };
    let jb = !1;

    function pb() {
      jb || (jb = !0, (0, zb.h)("BABYLON.Mesh", xb))
    }(kb = xb.prototype).VJ ?? (kb.VJ = (0, qb.e)("Mesh", "VJ")), (Wb = xb.prototype).simplify ?? (Wb.simplify = (0, qb.e)("Mesh", "simplify")), (ab = xb.prototype).thinInstanceAdd ?? (ab.thinInstanceAdd = (0, qb.e)("Mesh", "thinInstanceAdd")), (Tb = xb.prototype).thinInstanceAddSelf ?? (Tb.thinInstanceAddSelf = (0, qb.e)("Mesh", "thinInstanceAddSelf")), (Ub = xb.prototype).thinInstanceRegisterAttribute ?? (Ub.thinInstanceRegisterAttribute = (0, qb.e)("Mesh", "thinInstanceRegisterAttribute")), (Ib = xb.prototype).thinInstanceSetMatrixAt ?? (Ib.thinInstanceSetMatrixAt = (0, qb.e)("Mesh", "thinInstanceSetMatrixAt")), (Hb = xb.prototype).thinInstanceSetAttributeAt ?? (Hb.thinInstanceSetAttributeAt = (0, qb.e)("Mesh", "thinInstanceSetAttributeAt")), (fb = xb.prototype).U3 ?? (fb.U3 = (0, qb.e)("Mesh", "U3")), (Mb = xb.prototype).thinInstanceGetWorldMatrices ?? (Mb.thinInstanceGetWorldMatrices = (0, qb.e)("Mesh", "thinInstanceGetWorldMatrices")), (Xb = xb.prototype).A4 ?? (Xb.A4 = (0, qb.e)("Mesh", "A4")), (nb = xb.prototype).thinInstancePartialBufferUpdate ?? (nb.thinInstancePartialBufferUpdate = (0, qb.e)("Mesh", "thinInstancePartialBufferUpdate")), (mb = xb.prototype).thinInstanceRefreshBoundingInfo ?? (mb.thinInstanceRefreshBoundingInfo = (0, qb.e)("Mesh", "thinInstanceRefreshBoundingInfo")), (lb = xb.prototype).getEmittedParticleSystems ?? (lb.getEmittedParticleSystems = (0, qb.e)("Mesh", "getEmittedParticleSystems")), (Qb = xb.prototype).getHierarchyEmittedParticleSystems ?? (Qb.getHierarchyEmittedParticleSystems = (0, qb.e)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(xb.prototype, "edgesShareWithInstances") || Object.defineProperty(xb.prototype, "edgesShareWithInstances", (0, qb.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(xb.prototype, "vbb") || Object.defineProperty(xb.prototype, "vbb", (0, qb.d)("Mesh", "vbb")), Object.getOwnPropertyDescriptor(xb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(xb.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, qb.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(xb.prototype, "W8") || Object.defineProperty(xb.prototype, "W8", (0, qb.d)("Mesh", "W8"))
  },
  39848: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => mb
    });
    var kb = sb(39414),
      Wb = sb(36656),
      ab = sb(39576),
      Tb = sb(39296),
      Ub = sb(36830),
      Ib = sb(38284),
      Hb = sb(39418),
      fb = sb(39844),
      Mb = sb(39482),
      Xb = sb(39737);
    class nb {}
    let mb = (() => {
      var bb;
      let cb, sb, mb, lb, Qb = [];
      return bb = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, fb.c)(this._applyToCoroutine.bind(this)), this.uniqueId = bb._UniqueIdGenerator, bb._UniqueIdGenerator++
        }
        set(bb, cb) {
          switch (bb.length || Ib.c.Warn(`Setting vertex data kind '${cb}' with an empty array`), cb) {
            case ab.l.PositionKind:
              this.positions = bb;
              break;
            case ab.l.NormalKind:
              this.normals = bb;
              break;
            case ab.l.TangentKind:
              this.tangents = bb;
              break;
            case ab.l.UVKind:
              this.uvs = bb;
              break;
            case ab.l.UV2Kind:
              this.uvs2 = bb;
              break;
            case ab.l.UV3Kind:
              this.uvs3 = bb;
              break;
            case ab.l.UV4Kind:
              this.uvs4 = bb;
              break;
            case ab.l.UV5Kind:
              this.uvs5 = bb;
              break;
            case ab.l.UV6Kind:
              this.uvs6 = bb;
              break;
            case ab.l.ColorKind:
              this.colors = bb;
              break;
            case ab.l.MatricesIndicesKind:
              this.matricesIndices = bb;
              break;
            case ab.l.MatricesWeightsKind:
              this.matricesWeights = bb;
              break;
            case ab.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = bb;
              break;
            case ab.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = bb
          }
        }
        applyToMesh(bb, cb) {
          return this._applyTo(bb, cb, !1), this
        }
        applyToGeometry(bb, cb) {
          return this._applyTo(bb, cb, !1), this
        }
        updateMesh(bb) {
          return this._update(bb), this
        }
        updateGeometry(bb) {
          return this._update(bb), this
        }* _applyToCoroutine(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sb = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (bb.setVerticesData(ab.l.PositionKind, this.positions, cb), sb && (yield)), this.normals && (bb.setVerticesData(ab.l.NormalKind, this.normals, cb), sb && (yield)), this.tangents && (bb.setVerticesData(ab.l.TangentKind, this.tangents, cb), sb && (yield)), this.uvs && (bb.setVerticesData(ab.l.UVKind, this.uvs, cb), sb && (yield)), this.uvs2 && (bb.setVerticesData(ab.l.UV2Kind, this.uvs2, cb), sb && (yield)), this.uvs3 && (bb.setVerticesData(ab.l.UV3Kind, this.uvs3, cb), sb && (yield)), this.uvs4 && (bb.setVerticesData(ab.l.UV4Kind, this.uvs4, cb), sb && (yield)), this.uvs5 && (bb.setVerticesData(ab.l.UV5Kind, this.uvs5, cb), sb && (yield)), this.uvs6 && (bb.setVerticesData(ab.l.UV6Kind, this.uvs6, cb), sb && (yield)), this.colors) {
            const kb = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            bb.setVerticesData(ab.l.ColorKind, this.colors, cb, kb), this.hasVertexAlpha && void 0 !== bb.hasVertexAlpha && (bb.hasVertexAlpha = !0), sb && (yield)
          }
          if (this.matricesIndices && (bb.setVerticesData(ab.l.MatricesIndicesKind, this.matricesIndices, cb), sb && (yield)), this.matricesWeights && (bb.setVerticesData(ab.l.MatricesWeightsKind, this.matricesWeights, cb), sb && (yield)), this.matricesIndicesExtra && (bb.setVerticesData(ab.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, cb), sb && (yield)), this.matricesWeightsExtra && (bb.setVerticesData(ab.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, cb), sb && (yield)), this.indices ? (bb.setIndices(this.indices, null, cb), sb && (yield)) : bb.setIndices([], null), bb.XV && this.materialInfos && this.materialInfos.length > 1) {
            const cb = bb;
            cb.XV = [];
            for (const bb of this.materialInfos) new Xb.b(bb.materialIndex, bb.verticesStart, bb.verticesCount, bb.indexStart, bb.indexCount, cb)
          }
          return this
        }
        _update(bb, cb, sb) {
          return this.positions && bb.updateVerticesData(ab.l.PositionKind, this.positions, cb, sb), this.normals && bb.updateVerticesData(ab.l.NormalKind, this.normals, cb, sb), this.tangents && bb.updateVerticesData(ab.l.TangentKind, this.tangents, cb, sb), this.uvs && bb.updateVerticesData(ab.l.UVKind, this.uvs, cb, sb), this.uvs2 && bb.updateVerticesData(ab.l.UV2Kind, this.uvs2, cb, sb), this.uvs3 && bb.updateVerticesData(ab.l.UV3Kind, this.uvs3, cb, sb), this.uvs4 && bb.updateVerticesData(ab.l.UV4Kind, this.uvs4, cb, sb), this.uvs5 && bb.updateVerticesData(ab.l.UV5Kind, this.uvs5, cb, sb), this.uvs6 && bb.updateVerticesData(ab.l.UV6Kind, this.uvs6, cb, sb), this.colors && bb.updateVerticesData(ab.l.ColorKind, this.colors, cb, sb), this.matricesIndices && bb.updateVerticesData(ab.l.MatricesIndicesKind, this.matricesIndices, cb, sb), this.matricesWeights && bb.updateVerticesData(ab.l.MatricesWeightsKind, this.matricesWeights, cb, sb), this.matricesIndicesExtra && bb.updateVerticesData(ab.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, cb, sb), this.matricesWeightsExtra && bb.updateVerticesData(ab.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, cb, sb), this.indices && bb.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const ab = Wb.m.Fm[0],
            Tb = Wb.m.Fm[1];
          for (let Ub = sb; Ub < sb + kb; Ub += 3) Wb.p.FromArrayToRef(bb, Ub, ab), Wb.p.TransformCoordinatesToRef(ab, cb, Tb), bb[Ub] = Tb.x, bb[Ub + 1] = Tb.y, bb[Ub + 2] = Tb.z
        }
        static _TransformVector3Normals(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const ab = Wb.m.Fm[0],
            Tb = Wb.m.Fm[1];
          for (let Ub = sb; Ub < sb + kb; Ub += 3) Wb.p.FromArrayToRef(bb, Ub, ab), Wb.p.TransformNormalToRef(ab, cb, Tb), bb[Ub] = Tb.x, bb[Ub + 1] = Tb.y, bb[Ub + 2] = Tb.z
        }
        static _TransformVector4Normals(bb, cb) {
          let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const ab = Wb.m.Vector4[0],
            Tb = Wb.m.Vector4[1];
          for (let Ub = sb; Ub < sb + kb; Ub += 4) Wb.t.FromArrayToRef(bb, Ub, ab), Wb.t.TransformNormalToRef(ab, cb, Tb), bb[Ub] = Tb.x, bb[Ub + 1] = Tb.y, bb[Ub + 2] = Tb.z, bb[Ub + 3] = Tb.w
        }
        static _FlipFaces(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
          for (let kb = cb; kb < cb + sb; kb += 3) {
            const cb = bb[kb + 1];
            bb[kb + 1] = bb[kb + 2], bb[kb + 2] = cb
          }
        }
        transform(cb) {
          const sb = cb.determinant() < 0;
          return this.positions && bb._TransformVector3Coordinates(this.positions, cb), this.normals && bb._TransformVector3Normals(this.normals, cb), this.tangents && bb._TransformVector4Normals(this.tangents, cb), sb && this.indices && bb._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const cb = [];
          for (const sb of this.materialInfos) {
            const kb = new bb;
            if (this.positions && (kb.positions = this.positions.slice(3 * sb.verticesStart, 3 * (sb.verticesCount + sb.verticesStart))), this.normals && (kb.normals = this.normals.slice(3 * sb.verticesStart, 3 * (sb.verticesCount + sb.verticesStart))), this.tangents && (kb.tangents = this.tangents.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.colors && (kb.colors = this.colors.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.uvs && (kb.uvs = this.uvs.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.uvs2 && (kb.uvs2 = this.uvs2.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.uvs3 && (kb.uvs3 = this.uvs3.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.uvs4 && (kb.uvs4 = this.uvs4.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.uvs5 && (kb.uvs5 = this.uvs5.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.uvs6 && (kb.uvs6 = this.uvs6.slice(2 * sb.verticesStart, 2 * (sb.verticesCount + sb.verticesStart))), this.matricesIndices && (kb.matricesIndices = this.matricesIndices.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.matricesIndicesExtra && (kb.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.matricesWeights && (kb.matricesWeights = this.matricesWeights.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.matricesWeightsExtra && (kb.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * sb.verticesStart, 4 * (sb.verticesCount + sb.verticesStart))), this.indices) {
              kb.indices = [];
              for (let bb = sb.indexStart; bb < sb.indexStart + sb.indexCount; bb++) kb.indices.push(this.indices[bb] - sb.verticesStart)
            }
            const Wb = new nb;
            Wb.indexStart = 0, Wb.indexCount = kb.indices ? kb.indices.length : 0, Wb.materialIndex = sb.materialIndex, Wb.verticesStart = 0, Wb.verticesCount = (kb.positions ? kb.positions.length : 0) / 3, kb.materialInfos = [Wb], cb.push(kb)
          }
          return cb
        }
        merge(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const ab = Array.isArray(bb) ? bb.map((bb => ({
            vertexData: bb
          }))) : [{
            vertexData: bb
          }];
          return (0, fb.g)(this._mergeCoroutine(void 0, ab, cb, !1, sb, kb, Wb))
        }* _mergeCoroutine(cb, sb) {
          let kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Wb = arguments.length > 3 ? arguments[3] : void 0,
            Tb = arguments.length > 4 ? arguments[4] : void 0,
            Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Ib = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Hb = sb.map((bb => bb.vertexData)),
            fb = this;
          if (Ib)
            for (const bb of Hb) bb && (bb._validate(), !this.normals && bb.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && bb.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && bb.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && bb.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && bb.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && bb.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && bb.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && bb.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && bb.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && bb.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && bb.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && bb.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && bb.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const bb of Hb)
            if (bb)
              if (Ib) this.normals && !bb.normals && (bb.normals = new Float32Array(bb.positions.length)), this.tangents && !bb.tangents && (bb.tangents = new Float32Array(bb.positions.length / 3 * 4)), this.uvs && !bb.uvs && (bb.uvs = new Float32Array(bb.positions.length / 3 * 2)), this.uvs2 && !bb.uvs2 && (bb.uvs2 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs3 && !bb.uvs3 && (bb.uvs3 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs4 && !bb.uvs4 && (bb.uvs4 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs5 && !bb.uvs5 && (bb.uvs5 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs6 && !bb.uvs6 && (bb.uvs6 = new Float32Array(bb.positions.length / 3 * 2)), this.colors && !bb.colors && (bb.colors = new Float32Array(bb.positions.length / 3 * 4), bb.colors.fill(1)), this.matricesIndices && !bb.matricesIndices && (bb.matricesIndices = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeights && !bb.matricesWeights && (bb.matricesWeights = new Float32Array(bb.positions.length / 3 * 4)), this.matricesIndicesExtra && !bb.matricesIndicesExtra && (bb.matricesIndicesExtra = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeightsExtra && !bb.matricesWeightsExtra && (bb.matricesWeightsExtra = new Float32Array(bb.positions.length / 3 * 4));
              else if (bb._validate(), !this.normals !== !bb.normals || !this.tangents !== !bb.tangents || !this.uvs !== !bb.uvs || !this.uvs2 !== !bb.uvs2 || !this.uvs3 !== !bb.uvs3 || !this.uvs4 !== !bb.uvs4 || !this.uvs5 !== !bb.uvs5 || !this.uvs6 !== !bb.uvs6 || !this.colors !== !bb.colors || !this.matricesIndices !== !bb.matricesIndices || !this.matricesWeights !== !bb.matricesWeights || !this.matricesIndicesExtra !== !bb.matricesIndicesExtra || !this.matricesWeightsExtra !== !bb.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Ub) {
            let bb, kb = 0,
              Wb = 0;
            const ab = [];
            let Tb = null;
            const Ub = [];
            for (const sb of this.splitBasedOnMaterialID()) Ub.push({
              vertexData: sb,
              transform: cb
            });
            for (const cb of sb)
              if (cb.vertexData)
                for (const bb of cb.vertexData.splitBasedOnMaterialID()) Ub.push({
                  vertexData: bb,
                  transform: cb.transform
                });
            Ub.sort(((bb, cb) => {
              const sb = bb.vertexData.materialInfos ? bb.vertexData.materialInfos[0].materialIndex : 0,
                kb = cb.vertexData.materialInfos ? cb.vertexData.materialInfos[0].materialIndex : 0;
              return sb > kb ? 1 : sb === kb ? 0 : -1
            }));
            for (const cb of Ub) {
              const sb = cb.vertexData;
              if (bb = sb.materialInfos ? sb.materialInfos[0].materialIndex : 0, Tb && Tb.materialIndex === bb) Tb.indexCount += sb.indices.length, Tb.verticesCount += sb.positions.length / 3;
              else {
                const cb = new nb;
                cb.materialIndex = bb, cb.indexStart = kb, cb.indexCount = sb.indices.length, cb.verticesStart = Wb, cb.verticesCount = sb.positions.length / 3, ab.push(cb), Tb = cb
              }
              kb += sb.indices.length, Wb += sb.positions.length / 3
            }
            const Ib = Ub.splice(0, 1)[0];
            fb = Ib.vertexData, cb = Ib.transform, Hb = Ub.map((bb => bb.vertexData)), sb = Ub, this.materialInfos = ab
          }
          const Mb = Hb.reduce(((bb, cb) => bb + (cb.indices?.length ?? 0)), fb.indices?.length ?? 0);
          let Xb = Tb || Hb.some((bb => bb.indices === fb.indices)) ? fb.indices?.slice() : fb.indices;
          if (Mb > 0) {
            let ab = Xb?.length ?? 0;
            if (Xb || (Xb = new Array(Mb)), Xb.length !== Mb) {
              if (Array.isArray(Xb)) Xb.length = Mb;
              else {
                const bb = kb || Xb instanceof Uint32Array ? new Uint32Array(Mb) : new Uint16Array(Mb);
                bb.set(Xb), Xb = bb
              }
              cb && cb.determinant() < 0 && bb._FlipFaces(Xb, 0, ab)
            }
            let Tb = fb.positions ? fb.positions.length / 3 : 0;
            for (const {
                vertexData: cb,
                transform: kb
              }
              of sb)
              if (cb.indices) {
                for (let bb = 0; bb < cb.indices.length; bb++) Xb[ab + bb] = cb.indices[bb] + Tb;
                kb && kb.determinant() < 0 && bb._FlipFaces(Xb, ab, cb.indices.length), Tb += cb.positions.length / 3, ab += cb.indices.length, Wb && (yield)
              }
          }
          return this.indices = Xb, this.positions = bb._MergeElement(ab.l.PositionKind, fb.positions, cb, sb.map((bb => [bb.vertexData.positions, bb.transform]))), Wb && (yield), fb.normals && (this.normals = bb._MergeElement(ab.l.NormalKind, fb.normals, cb, sb.map((bb => [bb.vertexData.normals, bb.transform]))), Wb && (yield)), fb.tangents && (this.tangents = bb._MergeElement(ab.l.TangentKind, fb.tangents, cb, sb.map((bb => [bb.vertexData.tangents, bb.transform]))), Wb && (yield)), fb.uvs && (this.uvs = bb._MergeElement(ab.l.UVKind, fb.uvs, cb, sb.map((bb => [bb.vertexData.uvs, bb.transform]))), Wb && (yield)), fb.uvs2 && (this.uvs2 = bb._MergeElement(ab.l.UV2Kind, fb.uvs2, cb, sb.map((bb => [bb.vertexData.uvs2, bb.transform]))), Wb && (yield)), fb.uvs3 && (this.uvs3 = bb._MergeElement(ab.l.UV3Kind, fb.uvs3, cb, sb.map((bb => [bb.vertexData.uvs3, bb.transform]))), Wb && (yield)), fb.uvs4 && (this.uvs4 = bb._MergeElement(ab.l.UV4Kind, fb.uvs4, cb, sb.map((bb => [bb.vertexData.uvs4, bb.transform]))), Wb && (yield)), fb.uvs5 && (this.uvs5 = bb._MergeElement(ab.l.UV5Kind, fb.uvs5, cb, sb.map((bb => [bb.vertexData.uvs5, bb.transform]))), Wb && (yield)), fb.uvs6 && (this.uvs6 = bb._MergeElement(ab.l.UV6Kind, fb.uvs6, cb, sb.map((bb => [bb.vertexData.uvs6, bb.transform]))), Wb && (yield)), fb.colors && (this.colors = bb._MergeElement(ab.l.ColorKind, fb.colors, cb, sb.map((bb => [bb.vertexData.colors, bb.transform]))), (void 0 !== fb.hasVertexAlpha || sb.some((bb => void 0 !== bb.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = fb.hasVertexAlpha || sb.some((bb => bb.vertexData.hasVertexAlpha))), Wb && (yield)), fb.matricesIndices && (this.matricesIndices = bb._MergeElement(ab.l.MatricesIndicesKind, fb.matricesIndices, cb, sb.map((bb => [bb.vertexData.matricesIndices, bb.transform]))), Wb && (yield)), fb.matricesWeights && (this.matricesWeights = bb._MergeElement(ab.l.MatricesWeightsKind, fb.matricesWeights, cb, sb.map((bb => [bb.vertexData.matricesWeights, bb.transform]))), Wb && (yield)), fb.matricesIndicesExtra && (this.matricesIndicesExtra = bb._MergeElement(ab.l.MatricesIndicesExtraKind, fb.matricesIndicesExtra, cb, sb.map((bb => [bb.vertexData.matricesIndicesExtra, bb.transform]))), Wb && (yield)), fb.matricesWeightsExtra && (this.matricesWeightsExtra = bb._MergeElement(ab.l.MatricesWeightsExtraKind, fb.matricesWeightsExtra, cb, sb.map((bb => [bb.vertexData.matricesWeightsExtra, bb.transform])))), this
        }
        static _MergeElement(cb, sb, kb, Wb) {
          const Tb = Wb.filter((bb => null !== bb[0] && void 0 !== bb[0]));
          if (!sb && 0 == Tb.length) return sb;
          if (!sb) return this._MergeElement(cb, Tb[0][0], Tb[0][1], Tb.slice(1));
          const Ub = Tb.reduce(((bb, cb) => bb + cb[0].length), sb.length),
            Ib = cb === ab.l.PositionKind ? bb._TransformVector3Coordinates : cb === ab.l.NormalKind ? bb._TransformVector3Normals : cb === ab.l.TangentKind ? bb._TransformVector4Normals : () => {};
          if (sb instanceof Float32Array) {
            const bb = new Float32Array(Ub);
            bb.set(sb), kb && Ib(bb, kb, 0, sb.length);
            let cb = sb.length;
            for (const [sb, kb] of Tb) bb.set(sb, cb), kb && Ib(bb, kb, cb, sb.length), cb += sb.length;
            return bb
          } {
            const bb = new Array(Ub);
            for (let kb = 0; kb < sb.length; kb++) bb[kb] = sb[kb];
            kb && Ib(bb, kb, 0, sb.length);
            let cb = sb.length;
            for (const [sb, kb] of Tb) {
              for (let kb = 0; kb < sb.length; kb++) bb[cb + kb] = sb[kb];
              kb && Ib(bb, kb, cb, sb.length), cb += sb.length
            }
            return bb
          }
        }
        _validate() {
          if (!this.positions) throw new Mb.f("Positions are required", Mb.c.MeshInvalidPositionsError);
          const bb = (bb, cb) => {
              const sb = (0, ab.j)(bb);
              if (cb.length % sb !== 0) throw new Error("The " + bb + "s array count must be a multiple of " + sb);
              return cb.length / sb
            },
            cb = bb(ab.l.PositionKind, this.positions),
            sb = (sb, kb) => {
              const Wb = bb(sb, kb);
              if (Wb !== cb) throw new Error("The " + sb + "s element count (" + Wb + ") does not match the positions count (" + cb + ")")
            };
          this.normals && sb(ab.l.NormalKind, this.normals), this.tangents && sb(ab.l.TangentKind, this.tangents), this.uvs && sb(ab.l.UVKind, this.uvs), this.uvs2 && sb(ab.l.UV2Kind, this.uvs2), this.uvs3 && sb(ab.l.UV3Kind, this.uvs3), this.uvs4 && sb(ab.l.UV4Kind, this.uvs4), this.uvs5 && sb(ab.l.UV5Kind, this.uvs5), this.uvs6 && sb(ab.l.UV6Kind, this.uvs6), this.colors && sb(ab.l.ColorKind, this.colors), this.matricesIndices && sb(ab.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && sb(ab.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && sb(ab.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && sb(ab.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const cb = this.serialize();
          return bb.Parse(cb)
        }
        serialize() {
          const bb = {};
          if (this.positions && (bb.positions = Array.from(this.positions)), this.normals && (bb.normals = Array.from(this.normals)), this.tangents && (bb.tangents = Array.from(this.tangents)), this.uvs && (bb.uvs = Array.from(this.uvs)), this.uvs2 && (bb.uvs2 = Array.from(this.uvs2)), this.uvs3 && (bb.uvs3 = Array.from(this.uvs3)), this.uvs4 && (bb.uvs4 = Array.from(this.uvs4)), this.uvs5 && (bb.uvs5 = Array.from(this.uvs5)), this.uvs6 && (bb.uvs6 = Array.from(this.uvs6)), this.colors && (bb.colors = Array.from(this.colors), bb.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (bb.matricesIndices = Array.from(this.matricesIndices), bb.matricesIndicesExpanded = !0), this.matricesWeights && (bb.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (bb.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), bb.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (bb.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), bb.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            bb.materialInfos = [];
            for (const cb of this.materialInfos) {
              const sb = {
                indexStart: cb.indexStart,
                indexCount: cb.indexCount,
                materialIndex: cb.materialIndex,
                verticesStart: cb.verticesStart,
                verticesCount: cb.verticesCount
              };
              bb.materialInfos.push(sb)
            }
          }
          return bb
        }
        static ExtractFromMesh(cb, sb, kb) {
          return bb._ExtractFrom(cb, sb, kb)
        }
        static ExtractFromGeometry(cb, sb, kb) {
          return bb._ExtractFrom(cb, sb, kb)
        }
        static _ExtractFrom(cb, sb, kb) {
          const Wb = new bb;
          if (cb.isVerticesDataPresent(ab.l.PositionKind) && (Wb.positions = cb.getVerticesData(ab.l.PositionKind, sb, kb)), cb.isVerticesDataPresent(ab.l.NormalKind) && (Wb.normals = cb.getVerticesData(ab.l.NormalKind, sb, kb)), cb.isVerticesDataPresent(ab.l.TangentKind) && (Wb.tangents = cb.getVerticesData(ab.l.TangentKind, sb, kb)), cb.isVerticesDataPresent(ab.l.UVKind) && (Wb.uvs = cb.getVerticesData(ab.l.UVKind, sb, kb)), cb.isVerticesDataPresent(ab.l.UV2Kind) && (Wb.uvs2 = cb.getVerticesData(ab.l.UV2Kind, sb, kb)), cb.isVerticesDataPresent(ab.l.UV3Kind) && (Wb.uvs3 = cb.getVerticesData(ab.l.UV3Kind, sb, kb)), cb.isVerticesDataPresent(ab.l.UV4Kind) && (Wb.uvs4 = cb.getVerticesData(ab.l.UV4Kind, sb, kb)), cb.isVerticesDataPresent(ab.l.UV5Kind) && (Wb.uvs5 = cb.getVerticesData(ab.l.UV5Kind, sb, kb)), cb.isVerticesDataPresent(ab.l.UV6Kind) && (Wb.uvs6 = cb.getVerticesData(ab.l.UV6Kind, sb, kb)), cb.isVerticesDataPresent(ab.l.ColorKind)) {
            const bb = cb.geometry || cb,
              Tb = bb.getVertexBuffer(ab.l.ColorKind),
              Ub = bb.getVerticesData(ab.l.ColorKind, sb, kb);
            if (3 === Tb.getSize()) {
              const bb = new Float32Array(4 * Ub.length / 3);
              for (let cb = 0, sb = 0; cb < Ub.length; cb += 3, sb += 4) bb[sb] = Ub[cb], bb[sb + 1] = Ub[cb + 1], bb[sb + 2] = Ub[cb + 2], bb[sb + 3] = 1;
              Wb.colors = bb
            } else {
              if (4 !== Tb.getSize()) throw new Error(`Unexpected number of color components: ${Tb.getSize()}`);
              Wb.colors = Ub
            }
          }
          return cb.isVerticesDataPresent(ab.l.MatricesIndicesKind) && (Wb.matricesIndices = cb.getVerticesData(ab.l.MatricesIndicesKind, sb, kb)), cb.isVerticesDataPresent(ab.l.MatricesWeightsKind) && (Wb.matricesWeights = cb.getVerticesData(ab.l.MatricesWeightsKind, sb, kb)), cb.isVerticesDataPresent(ab.l.MatricesIndicesExtraKind) && (Wb.matricesIndicesExtra = cb.getVerticesData(ab.l.MatricesIndicesExtraKind, sb, kb)), cb.isVerticesDataPresent(ab.l.MatricesWeightsExtraKind) && (Wb.matricesWeightsExtra = cb.getVerticesData(ab.l.MatricesWeightsExtraKind, sb, kb)), Wb.indices = cb.Gsb(sb, kb), Wb
        }
        static CreateRibbon(bb) {
          throw (0, Tb.i)("ribbonBuilder")
        }
        static CreateBox(bb) {
          throw (0, Tb.i)("boxBuilder")
        }
        static CreateTiledBox(bb) {
          throw (0, Tb.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(bb) {
          throw (0, Tb.i)("tiledPlaneBuilder")
        }
        static CreateSphere(bb) {
          throw (0, Tb.i)("sphereBuilder")
        }
        static CreateCylinder(bb) {
          throw (0, Tb.i)("cylinderBuilder")
        }
        static CreateTorus(bb) {
          throw (0, Tb.i)("torusBuilder")
        }
        static CreateLineSystem(bb) {
          throw (0, Tb.i)("linesBuilder")
        }
        static CreateDashedLines(bb) {
          throw (0, Tb.i)("linesBuilder")
        }
        static CreateGround(bb) {
          throw (0, Tb.i)("groundBuilder")
        }
        static CreateTiledGround(bb) {
          throw (0, Tb.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(bb) {
          throw (0, Tb.i)("groundBuilder")
        }
        static CreatePlane(bb) {
          throw (0, Tb.i)("planeBuilder")
        }
        static CreateDisc(bb) {
          throw (0, Tb.i)("discBuilder")
        }
        static CreatePolygon(bb, cb, sb, kb, Wb, ab, Ub) {
          throw (0, Tb.i)("polygonBuilder")
        }
        static CreateIcoSphere(bb) {
          throw (0, Tb.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(bb) {
          throw (0, Tb.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Wb.p.Up();
          throw (0, Tb.i)("capsuleBuilder")
        }
        static CreateTorusKnot(bb) {
          throw (0, Tb.i)("torusKnotBuilder")
        }
        static ComputeNormals(bb, cb, sb, kb) {
          let ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb = !1,
            gb = !1,
            Bb = !1,
            tb = !1,
            yb = 1,
            Pb = 0,
            Db = null;
          kb && (Jb = !!kb.facetNormals, gb = !!kb.facetPositions, Bb = !!kb.facetPartitioning, yb = !0 === kb.useRightHandedSystem ? -1 : 1, Pb = kb.ratio || 0, tb = !!kb.depthSort, Db = kb.distanceTo, tb && void 0 === Db && (Db = Wb.p.Zero()));
          let Eb = 0,
            ib = 0,
            Ob = 0,
            Gb = 0;
          for (Bb && kb && kb.bbSize && (Eb = kb.subDiv.X * Pb / kb.bbSize.x, ib = kb.subDiv.Y * Pb / kb.bbSize.y, Ob = kb.subDiv.Z * Pb / kb.bbSize.z, Gb = kb.subDiv.max * kb.subDiv.max, kb.facetPartitioning.length = 0), ab = 0; ab < bb.length; ab++) sb[ab] = 0;
          const Kb = cb.length / 3 | 0;
          for (ab = 0; ab < Kb; ab++) {
            if (Qb = 3 * cb[3 * ab], eb = Qb + 1, Cb = Qb + 2, Nb = 3 * cb[3 * ab + 1], Vb = Nb + 1, Lb = Nb + 2, ub = 3 * cb[3 * ab + 2], Yb = ub + 1, hb = ub + 2, Tb = bb[Qb] - bb[Nb], Ub = bb[eb] - bb[Vb], Ib = bb[Cb] - bb[Lb], Hb = bb[ub] - bb[Nb], fb = bb[Yb] - bb[Vb], Mb = bb[hb] - bb[Lb], Xb = yb * (Ub * Mb - Ib * fb), nb = yb * (Ib * Hb - Tb * Mb), mb = yb * (Tb * fb - Ub * Hb), lb = Math.sqrt(Xb * Xb + nb * nb + mb * mb), lb = 0 === lb ? 1 : lb, Xb /= lb, nb /= lb, mb /= lb, Jb && kb && (kb.facetNormals[ab].x = Xb, kb.facetNormals[ab].y = nb, kb.facetNormals[ab].z = mb), gb && kb && (kb.facetPositions[ab].x = (bb[Qb] + bb[Nb] + bb[ub]) / 3, kb.facetPositions[ab].y = (bb[eb] + bb[Vb] + bb[Yb]) / 3, kb.facetPositions[ab].z = (bb[Cb] + bb[Lb] + bb[hb]) / 3), Bb && kb) {
              const cb = Math.floor((kb.facetPositions[ab].x - kb.bInfo.minimum.x * Pb) * Eb),
                sb = Math.floor((kb.facetPositions[ab].y - kb.bInfo.minimum.y * Pb) * ib),
                Wb = Math.floor((kb.facetPositions[ab].z - kb.bInfo.minimum.z * Pb) * Ob),
                Tb = Math.floor((bb[Qb] - kb.bInfo.minimum.x * Pb) * Eb),
                Ub = Math.floor((bb[eb] - kb.bInfo.minimum.y * Pb) * ib),
                Ib = Math.floor((bb[Cb] - kb.bInfo.minimum.z * Pb) * Ob),
                Hb = Math.floor((bb[Nb] - kb.bInfo.minimum.x * Pb) * Eb),
                fb = Math.floor((bb[Vb] - kb.bInfo.minimum.y * Pb) * ib),
                Mb = Math.floor((bb[Lb] - kb.bInfo.minimum.z * Pb) * Ob),
                Xb = Math.floor((bb[ub] - kb.bInfo.minimum.x * Pb) * Eb),
                nb = Math.floor((bb[Yb] - kb.bInfo.minimum.y * Pb) * ib),
                mb = Math.floor((bb[hb] - kb.bInfo.minimum.z * Pb) * Ob),
                lb = Tb + kb.subDiv.max * Ub + Gb * Ib,
                Jb = Hb + kb.subDiv.max * fb + Gb * Mb,
                gb = Xb + kb.subDiv.max * nb + Gb * mb,
                Bb = cb + kb.subDiv.max * sb + Gb * Wb;
              kb.facetPartitioning[Bb] = kb.facetPartitioning[Bb] ? kb.facetPartitioning[Bb] : [], kb.facetPartitioning[lb] = kb.facetPartitioning[lb] ? kb.facetPartitioning[lb] : [], kb.facetPartitioning[Jb] = kb.facetPartitioning[Jb] ? kb.facetPartitioning[Jb] : [], kb.facetPartitioning[gb] = kb.facetPartitioning[gb] ? kb.facetPartitioning[gb] : [], kb.facetPartitioning[lb].push(ab), Jb != lb && kb.facetPartitioning[Jb].push(ab), gb != Jb && gb != lb && kb.facetPartitioning[gb].push(ab), Bb != lb && Bb != Jb && Bb != gb && kb.facetPartitioning[Bb].push(ab)
            }
            if (tb && kb && kb.facetPositions) {
              const bb = kb.depthSortedFacets[ab];
              bb.ind = 3 * ab, bb.sqDistance = Wb.p.DistanceSquared(kb.facetPositions[ab], Db)
            }
            sb[Qb] += Xb, sb[eb] += nb, sb[Cb] += mb, sb[Nb] += Xb, sb[Vb] += nb, sb[Lb] += mb, sb[ub] += Xb, sb[Yb] += nb, sb[hb] += mb
          }
          for (ab = 0; ab < sb.length / 3; ab++) Xb = sb[3 * ab], nb = sb[3 * ab + 1], mb = sb[3 * ab + 2], lb = Math.sqrt(Xb * Xb + nb * nb + mb * mb), lb = 0 === lb ? 1 : lb, Xb /= lb, nb /= lb, mb /= lb, sb[3 * ab] = Xb, sb[3 * ab + 1] = nb, sb[3 * ab + 2] = mb
        }
        static _ComputeSides(cb, sb, kb, ab, Tb, Ub, Ib) {
          const Hb = kb.length,
            fb = ab.length;
          let Mb, Xb;
          switch (cb = cb || bb.DEFAULTSIDE) {
            case bb.FRONTSIDE:
              break;
            case bb.BACKSIDE:
              for (Mb = 0; Mb < Hb; Mb += 3) {
                const bb = kb[Mb];
                kb[Mb] = kb[Mb + 2], kb[Mb + 2] = bb
              }
              for (Xb = 0; Xb < fb; Xb++) ab[Xb] = -ab[Xb];
              break;
            case bb.DOUBLESIDE: {
              const bb = sb.length,
                cb = bb / 3;
              for (let kb = 0; kb < bb; kb++) sb[bb + kb] = sb[kb];
              for (Mb = 0; Mb < Hb; Mb += 3) kb[Mb + Hb] = kb[Mb + 2] + cb, kb[Mb + 1 + Hb] = kb[Mb + 1] + cb, kb[Mb + 2 + Hb] = kb[Mb] + cb;
              for (Xb = 0; Xb < fb; Xb++) ab[fb + Xb] = -ab[Xb];
              const nb = Tb.length;
              let mb;
              for (mb = 0; mb < nb; mb++) Tb[mb + nb] = Tb[mb];
              for (Ub = Ub || new Wb.t(0, 0, 1, 1), Ib = Ib || new Wb.t(0, 0, 1, 1), mb = 0, Mb = 0; Mb < nb / 2; Mb++) Tb[mb] = Ub.x + (Ub.z - Ub.x) * Tb[mb], Tb[mb + 1] = Ub.y + (Ub.w - Ub.y) * Tb[mb + 1], Tb[mb + nb] = Ib.x + (Ib.z - Ib.x) * Tb[mb + nb], Tb[mb + nb + 1] = Ib.y + (Ib.w - Ib.y) * Tb[mb + nb + 1], mb += 2;
              break
            }
          }
        }
        static Parse(cb) {
          const sb = new bb,
            kb = cb.positions;
          kb && sb.set(kb, ab.l.PositionKind);
          const Wb = cb.normals;
          Wb && sb.set(Wb, ab.l.NormalKind);
          const Tb = cb.tangents;
          Tb && sb.set(Tb, ab.l.TangentKind);
          const Ib = cb.uvs;
          Ib && sb.set(Ib, ab.l.UVKind);
          const Hb = cb.uvs2;
          Hb && sb.set(Hb, ab.l.UV2Kind);
          const fb = cb.uvs3;
          fb && sb.set(fb, ab.l.UV3Kind);
          const Mb = cb.uvs4;
          Mb && sb.set(Mb, ab.l.UV4Kind);
          const Xb = cb.uvs5;
          Xb && sb.set(Xb, ab.l.UV5Kind);
          const mb = cb.uvs6;
          mb && sb.set(mb, ab.l.UV6Kind);
          const lb = cb.colors;
          lb && (sb.set(Ub.g.CheckColors4(lb, kb.length / 3), ab.l.ColorKind), void 0 !== cb.hasVertexAlpha && (sb.hasVertexAlpha = cb.hasVertexAlpha));
          const Qb = cb.matricesIndices;
          Qb && sb.set(Qb, ab.l.MatricesIndicesKind);
          const eb = cb.matricesWeights;
          eb && sb.set(eb, ab.l.MatricesWeightsKind);
          const Cb = cb.indices;
          Cb && (sb.indices = Cb);
          const Nb = cb.materialInfos;
          if (Nb) {
            sb.materialInfos = [];
            for (const bb of Nb) {
              const cb = new nb;
              cb.indexCount = bb.indexCount, cb.indexStart = bb.indexStart, cb.verticesCount = bb.verticesCount, cb.verticesStart = bb.verticesStart, cb.materialIndex = bb.materialIndex, sb.materialInfos.push(cb)
            }
          }
          return sb
        }
        static ImportVertexData(cb, sb) {
          const kb = bb.Parse(cb);
          sb.setAllVerticesData(kb, cb.updatable)
        }
      }, (() => {
        const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [Hb.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], sb = [Hb.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], mb = [Hb.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], lb = [Hb.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, kb.j)(bb, null, cb, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Coordinates" in bb,
            get: bb => bb._TransformVector3Coordinates
          },
          metadata: Wb
        }, null, Qb), (0, kb.j)(bb, null, sb, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Normals" in bb,
            get: bb => bb._TransformVector3Normals
          },
          metadata: Wb
        }, null, Qb), (0, kb.j)(bb, null, mb, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector4Normals" in bb,
            get: bb => bb._TransformVector4Normals
          },
          metadata: Wb
        }, null, Qb), (0, kb.j)(bb, null, lb, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: bb => "_FlipFaces" in bb,
            get: bb => bb._FlipFaces
          },
          metadata: Wb
        }, null, Qb), Wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wb
        })
      })(), bb.FRONTSIDE = ((0, kb.m)(bb, Qb), 0), bb.BACKSIDE = 1, bb.DOUBLESIDE = 2, bb.DEFAULTSIDE = 0, bb._UniqueIdGenerator = 0, bb
    })()
  },
  39902: (bb, cb, sb) => {
    var kb = sb(36656),
      Wb = sb(38284),
      ab = sb(39745),
      Tb = sb(39835),
      Ub = sb(39576);
    const Ib = "bakedVertexAnimationSettingsInstanced";

    function Hb(bb) {
      const cb = bb.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return cb instanceof Float32Array || cb instanceof Uint16Array
    }

    function fb(bb, cb, sb, kb) {
      sb.I6(Number.POSITIVE_INFINITY), kb.I6(Number.NEGATIVE_INFINITY);
      for (let Wb = 0; Wb < 3 * cb; Wb += 3) {
        const cb = bb[Wb],
          ab = bb[Wb + 1],
          Tb = bb[Wb + 2];
        cb < sb.x && (sb.x = cb), ab < sb.y && (sb.y = ab), Tb < sb.z && (sb.z = Tb), cb > kb.x && (kb.x = cb), ab > kb.y && (kb.y = ab), Tb > kb.z && (kb.z = Tb)
      }
    }

    function Mb(bb, cb, sb) {
      sb && (bb.x -= bb.x * sb.x + sb.y, bb.y -= bb.y * sb.x + sb.y, bb.z -= bb.z * sb.x + sb.y, cb.x += cb.x * sb.x + sb.y, cb.y += cb.y * sb.x + sb.y, cb.z += cb.z * sb.x + sb.y)
    }

    function Xb(bb, cb, sb, Wb, ab) {
      const Tb = kb.m.Fm[7],
        Ub = kb.m.Fm[8];
      for (let Ib = 0; Ib < 2; ++Ib)
        for (let Hb = 0; Hb < 2; ++Hb)
          for (let fb = 0; fb < 2; ++fb) Tb.set(Ib ? cb.x : bb.x, Hb ? cb.y : bb.y, fb ? cb.z : bb.z), kb.p.TransformCoordinatesToRef(Tb, sb, Ub), Wb.minimizeInPlace(Ub), ab.maximizeInPlace(Ub)
    }

    function nb(bb, cb, sb, Wb, ab) {
      const Tb = kb.m.Fm[7];
      for (let Ub = 0; Ub < 3 * cb; Ub += 3) kb.p.TransformCoordinatesFromFloatsToRef(bb[Ub], bb[Ub + 1], bb[Ub + 2], sb, Tb), Wb.minimizeInPlace(Tb), ab.maximizeInPlace(Tb)
    }
    let mb = !1;
    mb || (mb = !0, Tb.b.prototype.thinInstanceAdd = function(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.EY().Sm().getCaps().instancedArrays) return Wb.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(bb) ? bb.length : 1);
      const sb = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(bb))
        for (let kb = 0; kb < bb.length; ++kb) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb[kb], kb === bb.length - 1 && cb);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb, cb);
      return sb
    }, Tb.b.prototype.thinInstanceAddSelf = function() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(kb.e.IdentityReadOnly, bb)
    }, Tb.b.prototype.thinInstanceRegisterAttribute = function(bb, cb) {
      bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), this.removeVerticesData(bb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[bb] = cb, this._userThinInstanceBuffersStorage.sizes[bb] = cb * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[bb] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[bb]), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Ub.l(this.Sm(), this._userThinInstanceBuffersStorage.data[bb], bb, !0, !1, cb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb])
    }, Tb.b.prototype.thinInstanceSetMatrixAt = function(bb, cb) {
      let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || bb >= this._thinInstanceDataStorage.instancesCount) return !1;
      const kb = this._thinInstanceDataStorage.matrixData;
      return cb.copyToArray(kb, 16 * bb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[bb] = cb), sb && (this.A4("matrix"), this.jm || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Tb.b.prototype.thinInstanceSetAttributeAt = function(bb, cb, sb) {
      let kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[bb] || cb >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(bb, 0), this._userThinInstanceBuffersStorage.data[bb].set(sb, cb * this._userThinInstanceBuffersStorage.strides[bb]), kb && this.A4(bb), !0)
    }, Object.defineProperty(Tb.b.prototype, "W8", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(bb) {
        const cb = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        bb <= (cb ? cb.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = bb)
      },
      enumerable: !0,
      configurable: !0
    }), Tb.b.prototype._thinInstanceCreateMatrixBuffer = function(bb, cb) {
      let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const kb = new Ub.b(this.Sm(), cb, !sb, 16, !1, !0);
      for (let Wb = 0; Wb < 4; Wb++) this.setVerticesBuffer(kb.createVertexBuffer(bb + Wb, 4 * Wb, 4));
      return kb
    }, Tb.b.prototype.U3 = function(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (sb = sb || 16, "matrix" === bb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = cb ? cb.length : 32 * sb, this._thinInstanceDataStorage.matrixData = cb, this._thinInstanceDataStorage.worldMatrices = null, null !== cb ? (this._thinInstanceDataStorage.instancesCount = cb.length / sb, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", cb, kb), this.jm || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.jm || this.refreshBoundingInfo());
      else if ("previousMatrix" === bb) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = cb, null !== cb && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", cb, kb));
      else if ("splatIndex" === bb && cb) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = cb.length / sb, this._userThinInstanceBuffersStorage.data[bb] = cb, this._userThinInstanceBuffersStorage.strides[bb] = sb, this._userThinInstanceBuffersStorage.sizes[bb] = cb.length;
        const kb = new Ub.b(this.Sm(), cb, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = kb;
        for (let cb = 0; cb < 4; cb++) this.setVerticesBuffer(kb.createVertexBuffer(bb + cb, 4 * cb, 4))
      } else bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), null === cb ? this._userThinInstanceBuffersStorage?.data[bb] && (this.removeVerticesData(bb), delete this._userThinInstanceBuffersStorage.data[bb], delete this._userThinInstanceBuffersStorage.strides[bb], delete this._userThinInstanceBuffersStorage.sizes[bb], delete this._userThinInstanceBuffersStorage.vertexBuffers[bb]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[bb] = cb, this._userThinInstanceBuffersStorage.strides[bb] = sb, this._userThinInstanceBuffersStorage.sizes[bb] = cb.length, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Ub.l(this.Sm(), cb, bb, !kb, !1, sb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Tb.b.prototype.A4 = function(bb) {
      "matrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === bb ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0, this._thinInstanceDataStorage.instancesCount) : (bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[bb].isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0)))
    }, Tb.b.prototype.thinInstancePartialBufferUpdate = function(bb, cb, sb) {
      if ("matrix" === bb) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof cb ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * sb * Float32Array.BYTES_PER_ELEMENT, 16 * cb), 16 * sb) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(cb, sb));
      else if (bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb]) {
        const kb = this._userThinInstanceBuffersStorage.vertexBuffers[bb];
        if ("number" === typeof cb) {
          const kb = new Float32Array(this._userThinInstanceBuffersStorage.data[bb].buffer, this._userThinInstanceBuffersStorage.data[bb].byteOffset + sb * this._userThinInstanceBuffersStorage.strides[bb] * Float32Array.BYTES_PER_ELEMENT, cb * this._userThinInstanceBuffersStorage.strides[bb]);
          this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(kb, sb * this._userThinInstanceBuffersStorage.strides[bb])
        } else kb.updateDirectly(cb, sb)
      }
    }, Tb.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const bb = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let cb = 0; cb < this._thinInstanceDataStorage.instancesCount; ++cb) this._thinInstanceDataStorage.worldMatrices[cb] = kb.e.FromArray(bb, 16 * cb)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Tb.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Tb = this._thinInstanceDataStorage.boundingVectors;
      if (bb || !this.rawBoundingInfo) {
        if (Tb.length = 0, Wb && function(bb, cb, sb) {
            const Wb = bb._userThinInstanceBuffersStorage,
              Tb = Wb?.data[Ib],
              mb = Wb?.strides[Ib];
            if (!Tb || !mb || mb < 4 || !Hb(bb)) return !1;
            const lb = bb._thinInstanceDataStorage.matrixData;
            if (!lb) return !1;
            const Qb = {},
              eb = kb.m.Vector4[0],
              Cb = kb.m.Fm[1],
              Nb = kb.m.Fm[2],
              Vb = kb.m.Fm[3],
              Lb = kb.m.Fm[4],
              ub = kb.m.Fm[5],
              Yb = kb.m.Fm[6],
              hb = kb.m.Matrix[2],
              Jb = bb.geometry ? bb.geometry.boundingBias : null,
              gb = bb.getTotalVertices();
            Cb.I6(Number.POSITIVE_INFINITY), Nb.I6(Number.NEGATIVE_INFINITY), Vb.I6(Number.POSITIVE_INFINITY), Lb.I6(Number.NEGATIVE_INFINITY);
            for (let ab = 0; ab < bb._thinInstanceDataStorage.instancesCount; ++ab) {
              const cb = ab * mb;
              eb.set(Tb[cb], Tb[cb + 1], Tb[cb + 2], Tb[cb + 3]);
              const Wb = bb._getData({
                applyMorph: sb,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: eb,
                updatePositionsArray: !1,
                cache: Qb
              }, null, Ub.l.PositionKind);
              if (!Wb) return !1;
              fb(Wb, gb, ub, Yb), Mb(ub, Yb, Jb), Cb.minimizeInPlace(ub), Nb.maximizeInPlace(Yb), kb.e.FromArrayToRef(lb, 16 * ab, hb), Jb ? Xb(ub, Yb, hb, Vb, Lb) : nb(Wb, gb, hb, Vb, Lb)
            }
            return !(!isFinite(Cb.x) || !isFinite(Vb.x)) && (bb.PJ().reConstruct(Vb, Lb), bb.rawBoundingInfo = new ab.c(Cb, Nb), function(bb, cb) {
              bb.length = 0;
              for (let sb = 0; sb < cb.boundingBox.vectors.length; ++sb) bb.push(cb.boundingBox.vectors[sb].clone())
            }(cb, bb.rawBoundingInfo), bb._updateBoundingInfo(), !0)
          }(this, Tb, sb)) return;
        Wb && this.bakedVertexAnimationManager?.isEnabled && Hb(this) ? this.refreshBoundingInfo({
          applySkeleton: cb,
          applyMorph: sb,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(cb, sb);
        const bb = this.PJ();
        this.rawBoundingInfo = new ab.c(bb.minimum, bb.maximum)
      }
      const mb = this.PJ(),
        lb = this._thinInstanceDataStorage.matrixData;
      if (0 === Tb.length)
        for (let kb = 0; kb < mb.boundingBox.vectors.length; ++kb) Tb.push(mb.boundingBox.vectors[kb].clone());
      kb.m.Fm[0].I6(Number.POSITIVE_INFINITY), kb.m.Fm[1].I6(Number.NEGATIVE_INFINITY);
      for (let ab = 0; ab < this._thinInstanceDataStorage.instancesCount; ++ab) {
        kb.e.FromArrayToRef(lb, 16 * ab, kb.m.Matrix[0]);
        for (let bb = 0; bb < Tb.length; ++bb) kb.p.TransformCoordinatesToRef(Tb[bb], kb.m.Matrix[0], kb.m.Fm[2]), kb.m.Fm[0].minimizeInPlace(kb.m.Fm[2]), kb.m.Fm[1].maximizeInPlace(kb.m.Fm[2])
      }
      mb.reConstruct(kb.m.Fm[0], kb.m.Fm[1]), this._updateBoundingInfo()
    }, Tb.b.prototype._thinInstanceRecreateBuffer = function(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === bb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, cb)) : "previousMatrix" === bb ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, cb)) : (bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Ub.l(this.Sm(), this._userThinInstanceBuffersStorage.data[bb], bb, !cb, !1, this._userThinInstanceBuffersStorage.strides[bb], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Tb.b.prototype._thinInstanceUpdateBufferSize = function(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      bb === Ub.l.ColorKind && (bb = Ub.l.ColorInstanceKind);
      const sb = "matrix" === bb;
      if (!sb && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[bb])) return;
      const kb = sb ? 16 : this._userThinInstanceBuffersStorage.strides[bb],
        Wb = sb ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[bb];
      let ab = sb ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[bb];
      const Tb = (this._thinInstanceDataStorage.instancesCount + cb) * kb;
      let Ib = Wb;
      for (; Ib < Tb;) Ib *= 2;
      if (!ab || Wb != Ib) {
        if (ab) {
          const bb = new Float32Array(Ib);
          bb.set(ab, 0), ab = bb
        } else ab = new Float32Array(Ib);
        sb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ab, !1), this._thinInstanceDataStorage.matrixData = ab, this._thinInstanceDataStorage.matrixBufferSize = Ib, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ab, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.data[bb] = ab, this._userThinInstanceBuffersStorage.sizes[bb] = Ib, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new Ub.l(this.Sm(), ab, bb, !0, !1, kb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
      }
    }, Tb.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Tb.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39867: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Cb,
      c: () => lb
    });
    var kb, Wb, ab, Tb, Ub = sb(39414),
      Ib = sb(39418),
      Hb = sb(39441),
      fb = sb(36683),
      Mb = sb(36656),
      Xb = sb(39667),
      nb = sb(36698),
      mb = sb(39296);
    let lb = (() => {
      var bb;
      let cb, sb, kb, Wb, ab, Tb, nb, mb, lb, Qb = Xb.c,
        eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Jb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [];
      return bb = class extends Qb {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(cb) {
          this._billboardMode !== cb && (this._billboardMode = cb, this._cache.useBillboardPosition = 0 !== (this._billboardMode & bb.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(bb) {
          this._infiniteDistance !== bb && (this._infiniteDistance = bb)
        }
        constructor(cb) {
          let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(cb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Mb.p(0, 0, 1), this._up = new Mb.p(0, 1, 0), this._right = new Mb.p(1, 0, 0), this._position = (0, Ub.m)(this, eb, Mb.p.Zero()), this._rotation = ((0, Ub.m)(this, Cb), (0, Ub.m)(this, Nb, Mb.p.Zero())), this._rotationQuaternion = ((0, Ub.m)(this, Vb), (0, Ub.m)(this, Lb, null)), this._scaling = ((0, Ub.m)(this, ub), (0, Ub.m)(this, Yb, Mb.p.One())), this._transformToBoneReferal = ((0, Ub.m)(this, hb), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Ub.m)(this, Jb, bb.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Ub.m)(this, gb), (0, Ub.m)(this, Bb, 1)), this._infiniteDistance = ((0, Ub.m)(this, tb), (0, Ub.m)(this, yb, !1)), this.ignoreNonUniformScaling = ((0, Ub.m)(this, Pb), (0, Ub.m)(this, Db, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Ub.m)(this, Eb), (0, Ub.m)(this, ib, !1)), this._poseMatrix = ((0, Ub.m)(this, Ob), null), this._localMatrix = Mb.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Mb.p.Zero(), this._absoluteScaling = Mb.p.Zero(), this._absoluteRotationQuaternion = Mb.f.Identity(), this._pivotMatrix = Mb.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new fb.c, this._nonUniformScaling = !1, sb && this.EY().addTransformNode(this)
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
        get bl() {
          return this._scaling
        }
        set bl(bb) {
          this._scaling = bb, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(bb) {
          this._rotationQuaternion = bb, bb && this._rotation.I6(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Mb.p.TransformNormalFromFloatsToRef(0, 0, this.EY().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Mb.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Mb.p.TransformNormalFromFloatsToRef(this.EY().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(bb) {
          return this._poseMatrix ? (this._poseMatrix.ssb(bb), this) : (this._poseMatrix = bb.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Mb.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const cb = this._cache;
          return this._billboardMode === cb.billboardMode && this._billboardMode === bb.BILLBOARDMODE_NONE && (!cb.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.ssb(bb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = cb, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Mb.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            cb = arguments.length > 1 ? arguments[1] : void 0,
            sb = arguments.length > 2 ? arguments[2] : void 0;
          const kb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0);
          kb && sb && sb(this, kb);
          for (const Wb of this.getChildTransformNodes(!0)) Wb.instantiateHierarchy(kb, cb, sb);
          return kb
        }
        RY() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I6(0), this._rotationQuaternion = this._rotationQuaternion || Mb.f.Identity(), bb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = bb, this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get LTb() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(bb) {
          if (!bb) return this;
          let cb, sb, kb;
          if (void 0 === bb.x) {
            if (arguments.length < 3) return this;
            cb = arguments[0], sb = arguments[1], kb = arguments[2]
          } else cb = bb.x, sb = bb.y, kb = bb.z;
          if (this.parent) {
            const bb = Mb.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(bb), Mb.p.TransformCoordinatesFromFloatsToRef(cb, sb, kb, bb, this.position)
          } else this.position.x = cb, this.position.y = sb, this.position.z = kb;
          return this._absolutePosition.ssb(bb), this
        }
        setPositionWithLocalVector(bb) {
          return this.computeWorldMatrix(), this.position = Mb.p.TransformNormal(bb, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const bb = Mb.m.Matrix[0];
          return this._localMatrix.invertToRef(bb), Mb.p.TransformNormal(this.position, bb)
        }
        locallyTranslate(bb) {
          return this.computeWorldMatrix(!0), this.position = Mb.p.TransformCoordinates(bb, this._localMatrix), this
        }
        lookAt(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Tb = bb._LookAtVectorCache,
            Ub = 0 === ab ? this.position : this.getAbsolutePosition();
          if (cb.subtractToRef(Ub, Tb), this.setDirection(Tb, sb, kb, Wb), 1 === ab && this.parent)
            if (this.rotationQuaternion) {
              const bb = Mb.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(bb);
              const cb = Mb.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(cb), cb.invert(), bb.multiplyToRef(cb, bb), this.rotationQuaternion.fromRotationMatrix(bb)
            } else {
              const bb = Mb.m.Quaternion[0];
              Mb.f.FromEulerVectorToRef(this.rotation, bb);
              const cb = Mb.m.Matrix[0];
              bb.toRotationMatrix(cb);
              const sb = Mb.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(sb), sb.invert(), cb.multiplyToRef(sb, cb), bb.fromRotationMatrix(cb), bb.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Jq(bb) {
          const cb = Mb.p.Zero();
          return this.getDirectionToRef(bb, cb), cb
        }
        getDirectionToRef(bb, cb) {
          return Mb.p.TransformNormalToRef(bb, this.getWorldMatrix(), cb), this
        }
        setDirection(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Wb = -Math.atan2(bb.z, bb.x) + Math.PI / 2,
            ab = Math.sqrt(bb.x * bb.x + bb.z * bb.z),
            Tb = -Math.atan2(bb.y, ab);
          return this.rotationQuaternion ? Mb.f.RotationYawPitchRollToRef(Wb + cb, Tb + sb, kb, this.rotationQuaternion) : (this.rotation.x = Tb + sb, this.rotation.y = Wb + cb, this.rotation.z = kb), this
        }
        setPivotPoint(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.EY().getRenderId() && this.computeWorldMatrix(!0);
          const sb = this.getWorldMatrix();
          if (1 == cb) {
            const cb = Mb.m.Matrix[0];
            sb.invertToRef(cb), bb = Mb.p.TransformCoordinates(bb, cb)
          }
          return this.setPivotMatrix(Mb.e.Translation(-bb.x, -bb.y, -bb.z), !0)
        }
        getPivotPoint() {
          const bb = Mb.p.Zero();
          return this.getPivotPointToRef(bb), bb
        }
        getPivotPointToRef(bb) {
          return bb.x = -this._pivotMatrix.m[12], bb.y = -this._pivotMatrix.m[13], bb.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const bb = Mb.p.Zero();
          return this.getAbsolutePivotPointToRef(bb), bb
        }
        getAbsolutePivotPointToRef(bb) {
          return this.getPivotPointToRef(bb), Mb.p.TransformCoordinatesToRef(bb, this.getWorldMatrix(), bb), this
        }
        Tcb(bb) {
          if (this._isDirty) return this;
          if (this._children)
            for (const cb of this._children) cb.Tcb(bb);
          return super.Tcb(bb)
        }
        setParent(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!cb && !this.parent) return this;
          const Wb = Mb.m.Quaternion[0],
            ab = Mb.m.Fm[0],
            Tb = Mb.m.Fm[1],
            Ub = Mb.m.Matrix[1];
          Mb.e.IdentityToRef(Ub);
          const Ib = Mb.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let Hb = this.rotationQuaternion;
          return Hb || (Hb = bb._TmpRotation, Mb.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Hb)), Mb.e.ComposeToRef(this.bl, Hb, this.position, Ib), this.parent && Ib.multiplyToRef(this.parent.computeWorldMatrix(!0), Ib), cb && (cb.computeWorldMatrix(!0).invertToRef(Ub), Ib.multiplyToRef(Ub, Ib)), Ib.decompose(Tb, Wb, ab, sb ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.ssb(Wb) : Wb.toEulerAnglesToRef(this.rotation), this.bl.ssb(Tb), this.position.ssb(ab), this.parent = cb, kb && this.setPivotMatrix(Mb.e.Identity()), this
        }
        addChild(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.setParent(this, cb), this
        }
        removeChild(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.parent !== this || bb.setParent(null, cb), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(bb) {
          return this._nonUniformScaling !== bb && (this._nonUniformScaling = bb, !0)
        }
        attachToBone(bb, cb) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = cb, this.parent = bb, bb.getSkeleton().prepare(!0), bb.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = bb ? this._currentParentWhenAttachingToBone : null, this) : (bb && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(cb, sb, kb) {
          let Wb;
          if (cb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I6(0)), kb && 0 !== kb) {
            if (this.parent) {
              const bb = this.parent.getWorldMatrix(),
                kb = Mb.m.Matrix[0];
              bb.invertToRef(kb), cb = Mb.p.TransformNormal(cb, kb), bb.determinant() < 0 && (sb *= -1)
            }
            Wb = Mb.f.RotationAxisToRef(cb, sb, bb._RotationAxisCache), Wb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Wb = Mb.f.RotationAxisToRef(cb, sb, bb._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Wb, this.rotationQuaternion);
          return this
        }
        rotateAround(bb, cb, sb) {
          cb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Mb.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I6(0));
          const kb = Mb.m.Fm[0],
            Wb = Mb.m.Fm[1],
            ab = Mb.m.Fm[2],
            Tb = Mb.m.Quaternion[0],
            Ub = Mb.m.Matrix[0],
            Ib = Mb.m.Matrix[1],
            Hb = Mb.m.Matrix[2],
            fb = Mb.m.Matrix[3];
          return bb.subtractToRef(this.position, kb), Mb.e.TranslationToRef(kb.x, kb.y, kb.z, Ub), Mb.e.TranslationToRef(-kb.x, -kb.y, -kb.z, Ib), Mb.e.RotationAxisToRef(cb, sb, Hb), Ib.multiplyToRef(Hb, fb), fb.multiplyToRef(Ub, fb), fb.decompose(Wb, Tb, ab), this.position.addInPlace(ab), Tb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(bb, cb, sb) {
          const kb = bb.scale(cb);
          if (sb && 0 !== sb) this.setAbsolutePosition(this.getAbsolutePosition().add(kb));
          else {
            const bb = this.getPositionExpressedInLocalSpace().add(kb);
            this.setPositionWithLocalVector(bb)
          }
          return this
        }
        addRotation(bb, cb, sb) {
          let kb;
          this.rotationQuaternion ? kb = this.rotationQuaternion : (kb = Mb.m.Quaternion[1], Mb.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, kb));
          const Wb = Mb.m.Quaternion[0];
          return Mb.f.RotationYawPitchRollToRef(cb, bb, sb, Wb), kb.multiplyInPlace(Wb), this.rotationQuaternion || kb.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== bb.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const kb = this.EY().getRenderId();
          if (!this._isDirty && !cb && (this._currentRenderId === kb || this.isSynchronized())) return this._currentRenderId = kb, this._worldMatrix;
          sb = sb || this.EY().activeCamera, this._updateCache();
          const Wb = this._cache;
          Wb.pivotMatrixUpdated = !1, Wb.billboardMode = this.billboardMode, Wb.infiniteDistance = this.infiniteDistance, Wb.parent = this._parentNode, this._currentRenderId = kb, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const ab = this._getEffectiveParent(),
            Tb = bb._TmpScaling;
          let Ub, Ib = this._position;
          if (this._infiniteDistance && !this.parent && sb) {
            const cb = sb.getWorldMatrix().m;
            Ib = bb._TmpTranslation, Ib.I5(this._position.x + cb[12], this._position.y + cb[13], this._position.z + cb[14])
          }
          if (Tb.I5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Ub = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Mb.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.I5(0, 0, 0))
            }
          } else Ub = bb._TmpRotation, Mb.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ub);
          if (this._usePivotMatrix) {
            const bb = Mb.m.Matrix[1];
            Mb.e.ScalingToRef(Tb.x, Tb.y, Tb.z, bb);
            const cb = Mb.m.Matrix[0];
            Ub.toRotationMatrix(cb), this._pivotMatrix.multiplyToRef(bb, Mb.m.Matrix[4]), Mb.m.Matrix[4].multiplyToRef(cb, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Ib.x, Ib.y, Ib.z)
          } else Mb.e.ComposeToRef(Tb, Ub, Ib, this._localMatrix);
          if (ab && ab.getWorldMatrix) {
            if (cb && ab.computeWorldMatrix(cb), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const bb = this.parent;
                bb.getSkeleton().prepare(), bb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Mb.m.Matrix[7])
              } else Mb.m.Matrix[7].ssb(ab.getWorldMatrix());
              const cb = Mb.m.Fm[5],
                sb = Mb.m.Fm[6],
                kb = Mb.m.Quaternion[0];
              Mb.m.Matrix[7].decompose(sb, kb, cb), Mb.e.ScalingToRef(sb.x, sb.y, sb.z, Mb.m.Matrix[7]), Mb.m.Matrix[7].setTranslation(cb), bb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(kb, cb), this._localMatrix.setTranslation(cb)), this._localMatrix.multiplyToRef(Mb.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const bb = this.parent;
              bb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(bb.getFinalMatrix(), Mb.m.Matrix[6]), Mb.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(ab.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.ssb(this._localMatrix);
          if (sb && this.billboardMode)
            if (Wb.useBillboardPosition) {
              const cb = Mb.m.Fm[0];
              this._worldMatrix.getTranslationToRef(cb);
              const kb = sb.globalPosition;
              this._worldMatrix.invertToRef(Mb.m.Matrix[1]);
              const Wb = Mb.m.Fm[1];
              Mb.p.TransformCoordinatesToRef(kb, Mb.m.Matrix[1], Wb), Wb.normalize();
              const ab = -Math.atan2(Wb.z, Wb.x) + Math.PI / 2,
                Tb = Math.sqrt(Wb.x * Wb.x + Wb.z * Wb.z),
                Ub = -Math.atan2(Wb.y, Tb);
              if (Mb.f.RotationYawPitchRollToRef(ab, Ub, 0, Mb.m.Quaternion[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                const cb = Mb.m.Fm[1];
                Mb.m.Quaternion[0].toEulerAnglesToRef(cb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (cb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (cb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (cb.z = 0), Mb.e.RotationYawPitchRollToRef(cb.y, cb.x, cb.z, Mb.m.Matrix[0])
              } else Mb.e.FromQuaternionToRef(Mb.m.Quaternion[0], Mb.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Mb.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Mb.m.Fm[0])
            } else {
              const cb = Mb.m.Fm[0];
              this._worldMatrix.getTranslationToRef(cb), Mb.m.Matrix[1].ssb(sb.getViewMatrix());
              const kb = this.EY().useRightHandedSystem;
              if (kb && Mb.m.Matrix[1].multiplyToRef(bb._TmpRHRestore, Mb.m.Matrix[1]), Mb.m.Matrix[1].setTranslationFromFloats(0, 0, 0), Mb.m.Matrix[1].invertToRef(Mb.m.Matrix[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                Mb.m.Matrix[0].decompose(void 0, Mb.m.Quaternion[0], void 0);
                const cb = Mb.m.Fm[1];
                Mb.m.Quaternion[0].toEulerAnglesToRef(cb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (cb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (cb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (cb.z = 0), kb && (cb.y += Math.PI), Mb.e.RotationYawPitchRollToRef(cb.y, cb.x, cb.z, Mb.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Mb.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Mb.m.Fm[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ab && ab._nonUniformScaling ? this._updateNonUniformScalingState(ab._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.I5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Mb.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), bb) {
            const bb = this.getChildren();
            for (let cb = 0; cb < bb.length; ++cb) {
              const sb = bb[cb];
              if (sb) {
                sb.computeWorldMatrix();
                const bb = Mb.m.Matrix[0];
                sb._localMatrix.multiplyToRef(this._localMatrix, bb);
                const cb = Mb.m.Quaternion[0];
                bb.decompose(sb.bl, cb, sb.position), sb.rotationQuaternion ? sb.rotationQuaternion.ssb(cb) : cb.toEulerAnglesToRef(sb.rotation)
              }
            }
          }
          this.bl.I5(1, 1, 1), this.position.I5(0, 0, 0), this.rotation.I5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Mb.f.Identity()), this._worldMatrix = Mb.e.Identity()
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
          return bb || (bb = this.EY().activeCamera), Mb.p.TransformCoordinates(this.getAbsolutePosition(), bb.getViewMatrix())
        }
        getDistanceToCamera() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb || (bb = this.EY().activeCamera), this.getAbsolutePosition().subtract(bb.globalPosition).length()
        }
        clone(cb, sb, kb) {
          const Wb = Hb.d.Clone((() => new bb(cb, this.EY())), this);
          if (Wb.name = cb, Wb.id = cb, sb && (Wb.parent = sb), !kb) {
            const bb = this.getDescendants(!0);
            for (let sb = 0; sb < bb.length; sb++) {
              const kb = bb[sb];
              kb.clone && kb.clone(cb + "." + kb.name, Wb)
            }
          }
          return Wb
        }
        serialize(bb) {
          const cb = Hb.d.Serialize(this, bb);
          return cb.type = this.getClassName(), cb.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(cb), cb.localMatrix = this.getPivotMatrix().Osb(), cb.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (cb.RY = !0), Hb.d.AppendSerializedAnimations(this, cb), cb.uQ = this.serializeAnimationRanges(), cb
        }
        getChildTransformNodes(cb, sb) {
          const kb = [];
          return this._getDescendants(kb, cb, (cb => (!sb || sb(cb)) && cb instanceof bb)), kb
        }
        dispose(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.EY().stopAnimation(this), this.EY().removeTransformNode(this), this._parentContainer) {
            const bb = this._parentContainer.transformNodes.indexOf(this);
            bb > -1 && this._parentContainer.transformNodes.splice(bb, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), bb) {
            const bb = this.getChildTransformNodes(!0);
            for (const cb of bb) cb.parent = null, cb.computeWorldMatrix(!0)
          }
          super.dispose(bb, cb)
        }
        normalizeToUnitCube() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sb = arguments.length > 2 ? arguments[2] : void 0,
            kb = null,
            Wb = null;
          cb && (this.rotationQuaternion ? (Wb = this.rotationQuaternion.clone(), this.rotationQuaternion.I5(0, 0, 0, 1)) : this.rotation && (kb = this.rotation.clone(), this.rotation.I5(0, 0, 0)));
          const ab = this.getHierarchyBoundingVectors(bb, sb),
            Tb = ab.max.subtract(ab.min),
            Ub = Math.max(Tb.x, Tb.y, Tb.z);
          if (0 === Ub) return this;
          const Ib = 1 / Ub;
          return this.bl.scaleInPlace(Ib), cb && (this.rotationQuaternion && Wb ? this.rotationQuaternion.ssb(Wb) : this.rotation && kb && this.rotation.ssb(kb)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Qb[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Ib.C)("position")], sb = [(0, Ib.C)("rotation")], kb = [(0, Ib.w)("rotationQuaternion")], Wb = [(0, Ib.C)("bl")], ab = [(0, Ib.E)("billboardMode")], Tb = [(0, Ib.E)()], nb = [(0, Ib.E)("infiniteDistance")], mb = [(0, Ib.E)()], lb = [(0, Ib.E)()], (0, Ub.j)(null, null, cb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, cb) => {
              bb._position = cb
            }
          },
          metadata: Hb
        }, eb, Cb), (0, Ub.j)(null, null, sb, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotation" in bb,
            get: bb => bb._rotation,
            set: (bb, cb) => {
              bb._rotation = cb
            }
          },
          metadata: Hb
        }, Nb, Vb), (0, Ub.j)(null, null, kb, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotationQuaternion" in bb,
            get: bb => bb._rotationQuaternion,
            set: (bb, cb) => {
              bb._rotationQuaternion = cb
            }
          },
          metadata: Hb
        }, Lb, ub), (0, Ub.j)(null, null, Wb, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scaling" in bb,
            get: bb => bb._scaling,
            set: (bb, cb) => {
              bb._scaling = cb
            }
          },
          metadata: Hb
        }, Yb, hb), (0, Ub.j)(null, null, ab, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_billboardMode" in bb,
            get: bb => bb._billboardMode,
            set: (bb, cb) => {
              bb._billboardMode = cb
            }
          },
          metadata: Hb
        }, Jb, gb), (0, Ub.j)(null, null, Tb, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: bb => "scalingDeterminant" in bb,
            get: bb => bb.scalingDeterminant,
            set: (bb, cb) => {
              bb.scalingDeterminant = cb
            }
          },
          metadata: Hb
        }, Bb, tb), (0, Ub.j)(null, null, nb, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "_infiniteDistance" in bb,
            get: bb => bb._infiniteDistance,
            set: (bb, cb) => {
              bb._infiniteDistance = cb
            }
          },
          metadata: Hb
        }, yb, Pb), (0, Ub.j)(null, null, mb, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreNonUniformScaling" in bb,
            get: bb => bb.ignoreNonUniformScaling,
            set: (bb, cb) => {
              bb.ignoreNonUniformScaling = cb
            }
          },
          metadata: Hb
        }, Db, Eb), (0, Ub.j)(null, null, lb, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "reIntegrateRotationIntoRotationQuaternion" in bb,
            get: bb => bb.reIntegrateRotationIntoRotationQuaternion,
            set: (bb, cb) => {
              bb.reIntegrateRotationIntoRotationQuaternion = cb
            }
          },
          metadata: Hb
        }, ib, Ob), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })(), bb.BILLBOARDMODE_NONE = 0, bb.BILLBOARDMODE_X = 1, bb.BILLBOARDMODE_Y = 2, bb.BILLBOARDMODE_Z = 4, bb.BILLBOARDMODE_ALL = 7, bb.BILLBOARDMODE_USE_POSITION = 128, bb.BillboardUseParentOrientation = !1, bb._TmpRotation = Mb.f.Zero(), bb._TmpScaling = Mb.p.Zero(), bb._TmpTranslation = Mb.p.Zero(), bb._TmpRHRestore = Mb.e.Scaling(1, 1, -1), bb._LookAtVectorCache = new Mb.p(0, 0, 0), bb._RotationAxisCache = new Mb.f, bb
    })();

    function Qb(bb, cb, sb) {
      const kb = Hb.d.Parse((() => new lb(bb.name, cb)), bb, cb, sb);
      if (bb.localMatrix ? kb.setPreTransformMatrix(Mb.e.FromArray(bb.localMatrix)) : bb.pivotMatrix && kb.setPivotMatrix(Mb.e.FromArray(bb.pivotMatrix)), kb.GV(bb.isEnabled), kb._waitingParsedUniqueId = bb.uniqueId, void 0 !== bb.parentId && (kb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (kb._waitingParentInstanceIndex = bb.parentInstanceIndex), bb.RY && (kb._waitingFreezeWorldMatrix = bb.RY), bb.animations) {
        for (let cb = 0; cb < bb.animations.length; cb++) {
          const sb = bb.animations[cb],
            Wb = (0, nb.e)("BABYLON.Animation");
          Wb && kb.animations.push(Wb.Parse(sb))
        }
        Xb.c.ParseAnimationRanges(kb, bb, cb)
      }
      return bb.autoAnimate && cb.beginAnimation(kb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), kb
    }
    let eb = !1;

    function Cb() {
      eb || (eb = !0, lb.Parse = Qb)
    }(kb = lb.prototype).ZD ?? (kb.ZD = (0, mb.e)("TransformNode", "ZD")), (Wb = lb.prototype).applyImpulse ?? (Wb.applyImpulse = (0, mb.e)("TransformNode", "applyImpulse")), (ab = lb.prototype).applyAngularImpulse ?? (ab.applyAngularImpulse = (0, mb.e)("TransformNode", "applyAngularImpulse")), (Tb = lb.prototype).applyTorque ?? (Tb.applyTorque = (0, mb.e)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(lb.prototype, "physicsBody") || Object.defineProperty(lb.prototype, "physicsBody", (0, mb.d)("TransformNode", "physicsBody"))
  },
  39844: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      try {
        const kb = bb.next();
        kb.done ? cb(kb) : kb.value ? kb.value.then((() => {
          kb.value = void 0, cb(kb)
        }), sb) : cb(kb)
      } catch (kb) {
        sb(kb)
      }
    }

    function Wb() {
      let bb, cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (sb, Wb, ab) => {
        const Tb = performance.now();
        void 0 === bb || Tb - bb > cb ? (bb = Tb, setTimeout((() => {
          kb(sb, Wb, ab)
        }), 0)) : kb(sb, Wb, ab)
      }
    }

    function ab(bb, cb, sb, kb, Wb) {
      const ab = () => {
        let Tb;
        const Ub = bb => {
          bb.done ? sb(bb.value) : void 0 === Tb ? Tb = !0 : ab()
        };
        do {
          Tb = void 0, Wb && Wb.aborted ? kb(new Error("Aborted")) : cb(bb, Ub, kb), void 0 === Tb && (Tb = !1)
        } while (Tb)
      };
      ab()
    }

    function Tb(bb, cb) {
      let sb;
      return ab(bb, kb, (bb => sb = bb), (bb => {
        throw bb
      }), cb), sb
    }
    async function Ub(bb, cb, sb) {
      return await new Promise(((kb, Wb) => {
        ab(bb, cb, kb, Wb, sb)
      }))
    }

    function Ib(bb, cb) {
      return function() {
        return Tb(bb(...arguments), cb)
      }
    }
    sb.d(cb, {
      b: () => Wb,
      c: () => Ib,
      f: () => Ub,
      g: () => Tb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);