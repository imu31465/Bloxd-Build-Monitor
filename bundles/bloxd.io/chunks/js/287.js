export const id = 287;
export const ids = [287];
export const modules = {
  41879: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      e: () => mb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41777),
      Vb = Mb(38318),
      gb = Mb(38285),
      lb = Mb(41886),
      Lb = Mb(39971),
      Ib = Mb(38333),
      Ob = Mb(41554),
      Ub = Mb(39323),
      tb = Mb(38994),
      Cb = Mb(41638),
      Eb = Mb(41697);
    let Fb = (() => {
      var bb;
      let wb, Mb, Ib, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb = lb.d,
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        Gb = [],
        qb = [],
        ab = [],
        ib = [],
        ub = [],
        db = [],
        Pb = [],
        nb = [],
        yb = [],
        ob = [],
        Tb = [],
        kb = [],
        bw = [],
        ww = [],
        Mw = [],
        ew = [],
        Hw = [];
      return bb = class extends Zb {
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
          let wb, Mb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) this.fovMode === bb.FOVMODE_VERTICAL_FIXED ? (Mb = 2 * this.minZ * Math.tan(this.fov / 2), wb = this.DC().getAspectRatio(this) * Mb) : (wb = 2 * this.minZ * Math.tan(this.fov / 2), Mb = wb / this.DC().getAspectRatio(this));
          else {
            const bb = this.DC().getRenderWidth() / 2,
              eb = this.DC().getRenderHeight() / 2;
            wb = (this.orthoRight ?? bb) - (this.orthoLeft ?? -bb), Mb = (this.orthoTop ?? eb) - (this.orthoBottom ?? -eb)
          }
          return wb * Mb
        }
        set orthoLeft(bb) {
          this._orthoLeft = bb;
          for (const wb of this._rigCameras) wb.orthoLeft = bb
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(bb) {
          this._orthoRight = bb;
          for (const wb of this._rigCameras) wb.orthoRight = bb
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(bb) {
          this._orthoBottom = bb;
          for (const wb of this._rigCameras) wb.orthoBottom = bb
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(bb) {
          this._orthoTop = bb;
          for (const wb of this._rigCameras) wb.orthoTop = bb
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(wb / (2 * bb))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(bb) {
          this._baseInertia = bb
        }
        set mode(bb) {
          this._mode = bb;
          for (const wb of this._rigCameras) wb.mode = bb
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(wb, Mb, Hb) {
          let lb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Cb.e)(), super(wb, Hb, !1), this.inputs = (0, eb.m)(this, fb), this._position = (0, eb.m)(this, Ab, gb.o.Zero()), this._upVector = ((0, eb.m)(this, Wb), (0, eb.m)(this, Jb, gb.o.Up())), this.oblique = ((0, eb.m)(this, Sb), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, eb.m)(this, Nb, .8), this.projectionPlaneTilt = ((0, eb.m)(this, vb), (0, eb.m)(this, Qb, 0)), this.minZ = ((0, eb.m)(this, Gb), (0, eb.m)(this, qb, 1)), this.maxZ = ((0, eb.m)(this, ab), (0, eb.m)(this, ib, 1e4)), this._baseInertia = ((0, eb.m)(this, ub), .9), this._mode = bb.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Ub.d(0, 0, 1, 1), this.layerMask = (0, eb.m)(this, db, 268435455), this.fovMode = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, bb.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, eb.m)(this, yb), (0, eb.m)(this, ob, bb.RIG_MODE_NONE)), this.interaxialDistance = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, void 0)), this.isStereoscopicSideBySide = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, void 0)), this.ignoreCameraMaxZ = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, !1)), this.customRenderTargets = ((0, eb.m)(this, Hw), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Vb.b, this.onProjectionMatrixChangedObservable = new Vb.b, this.onAfterCheckInputsObservable = new Vb.b, this.onRestoreStateObservable = new Vb.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new gb.b, this._postProcesses = new Array, this._activeMeshes = new pb.h(256), this._globalPosition = gb.o.Zero(), this._computedViewMatrix = gb.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = gb.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = gb.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.RJ().defaultCameraLayerMask, this.RJ().addCamera(this), lb && !this.RJ().activeCamera && (this.RJ().activeCamera = this), this.position = Mb, this.renderPassId = this.RJ().DC().createRenderPassId(`Camera ${wb}`)
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
          return "iF"
        }
        toString(bb) {
          let wb = "Name: " + this.name;
          if (wb += ", type: " + this.getClassName(), this.animations)
            for (let Mb = 0; Mb < this.animations.length; Mb++) wb += ", animation[0]: " + this.animations[Mb].toString(bb);
          return wb
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
            for (const wb of this._postProcesses)
              if (wb && !wb.isReady()) return !1;
          return super.isReady(bb)
        }
        _initCache() {
          super._initCache(), this._cache.position = new gb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new gb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(bb) {
          bb || super._updateCache(), this._cache.position.eZ(this.position), this._cache.upVector.eZ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const wb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Mb = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === wb;
          if (!Mb) return !1;
          const eb = this.DC();
          return this.mode === bb.PERSPECTIVE_CAMERA ? Mb = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === eb.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Mb = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === eb.getRenderWidth() && this._cache.renderHeight === eb.getRenderHeight(), this.oblique && (Mb = Mb && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Mb
        }
        attachControl(bb, wb) {}
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
          for (let wb = 0, Mb = this._rigCameras.length; wb < Mb; wb++) {
            const bb = this._rigCameras[wb],
              Mb = bb._rigPostProcess;
            if (Mb) {
              "pass" === Mb.getEffectName() && (bb.isIntermediate = 0 === this._postProcesses.length), bb._postProcesses = this._postProcesses.slice(0).concat(Mb), Mb.markTextureDirty()
            } else bb._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !bb.isReusable() && this._postProcesses.indexOf(bb) > -1 ? (Lb.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == wb || wb < 0 ? this._postProcesses.push(bb) : null === this._postProcesses[wb] ? this._postProcesses[wb] = bb : this._postProcesses.splice(wb, 0, bb), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.eeb(), this._postProcesses.indexOf(bb))
        }
        detachPostProcess(bb) {
          const wb = this._postProcesses.indexOf(bb); - 1 !== wb && (this._postProcesses[wb] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.eeb(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return gb.b.Identity()
        }
        getViewMatrix(bb) {
          return !bb && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.RJ().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(bb) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== bb && (this._projectionMatrix = bb)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(wb) {
          if (this._doNotComputeProjectionMatrix || !wb && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Mb = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Mb, this._refreshFrustumPlanes = !0;
          const eb = this.DC(),
            Hb = this.RJ(),
            pb = eb.rHb;
          if (this.mode === bb.PERSPECTIVE_CAMERA) {
            let wb;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = eb.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), wb = Hb.useRightHandedSystem ? gb.b.PerspectiveFovRHToRef : gb.b.PerspectiveFovLHToRef, wb(this.fov, eb.getAspectRatio(this), pb ? Mb : this.minZ, pb ? this.minZ : Mb, this._projectionMatrix, this.fovMode === bb.FOVMODE_VERTICAL_FIXED, eb.isNDCHalfZRange, this.projectionPlaneTilt, pb)
          } else {
            const bb = eb.getRenderWidth() / 2,
              wb = eb.getRenderHeight() / 2;
            Hb.useRightHandedSystem ? this.oblique ? gb.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -wb, this.orthoTop ?? wb, pb ? Mb : this.minZ, pb ? this.minZ : Mb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, eb.isNDCHalfZRange) : gb.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -wb, this.orthoTop ?? wb, pb ? Mb : this.minZ, pb ? this.minZ : Mb, this._projectionMatrix, eb.isNDCHalfZRange) : this.oblique ? gb.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -wb, this.orthoTop ?? wb, pb ? Mb : this.minZ, pb ? this.minZ : Mb, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, eb.isNDCHalfZRange) : gb.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -bb, this.orthoRight ?? bb, this.orthoBottom ?? -wb, this.orthoTop ?? wb, pb ? Mb : this.minZ, pb ? this.minZ : Mb, this._projectionMatrix, eb.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = eb.getRenderWidth(), this._cache.renderHeight = eb.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(bb) {
          return (this.radius || (this.target ? gb.o.Distance(this.position, this.target) : this.position.length())) + bb
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? tb.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = tb.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), wb && this.rigCameras.length > 0) {
            let wb = !1;
            for (const Mb of this.rigCameras) Mb._updateFrustumPlanes(), wb = wb || bb.isInFrustum(Mb._frustumPlanes);
            return wb
          }
          return bb.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(bb) {
          return this._updateFrustumPlanes(), bb.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Ob.k)("Ray")
        }
        getForwardRayToRef(bb) {
          throw (0, Ob.k)("Ray")
        }
        dispose(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.RJ().stopAnimation(this), this.RJ().removeCamera(this); this._rigCameras.length > 0;) {
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
              const wb = this._postProcesses[bb];
              wb && wb.dispose(this)
            }
          }
          let eb = this.customRenderTargets.length;
          for (; --eb >= 0;) this.customRenderTargets[eb].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.RJ().DC().releaseRenderPassId(this.renderPassId), super.dispose(wb, Mb)
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
        setCameraRigMode(wb, Mb) {
          if (this.cameraRigMode !== wb) {
            for (; this._rigCameras.length > 0;) {
              const bb = this._rigCameras.pop();
              bb && bb.dispose()
            }
            if (this.cameraRigMode = wb, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Mb.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== bb.RIG_MODE_NONE) {
              const bb = this.createRigCamera(this.name + "_L", 0);
              bb && (bb._isLeftCamera = !0);
              const wb = this.createRigCamera(this.name + "_R", 1);
              wb && (wb._isRightCamera = !0), bb && wb && (this._rigCameras.push(bb), this._rigCameras.push(wb))
            }
            this._setRigMode(Mb), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(bb) {}
        _getVRProjectionMatrix() {
          return gb.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.DC().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(bb, wb) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[bb] = wb, "interaxialDistance" === bb && (this._cameraRigParams.stereoHalfAngle = wb / .0637 * (Math.PI / 180))
        }
        createRigCamera(bb, wb) {
          return null
        }
        _updateRigCameras() {
          for (let bb = 0; bb < this._rigCameras.length; bb++) this._rigCameras[bb].minZ = this.minZ, this._rigCameras[bb].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[bb].fov = this.fov, this._rigCameras[bb].upVector.eZ(this.upVector);
          this.cameraRigMode === bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const bb = Eb.d.Serialize(this);
          return bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), this.parent && this.parent._serializeAsParent(bb), this.inputs && this.inputs.serialize(bb), Eb.d.AppendSerializedAnimations(this, bb), bb.gF = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        clone(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const eb = Eb.d.Clone(bb.GetConstructorFromName(this.getClassName(), wb, this.RJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return eb.name = wb, eb.parent = Mb, this.onClonedObservable.notifyObservers(eb), eb
        }
        S_(bb) {
          const wb = gb.o.Zero();
          return this.getDirectionToRef(bb, wb), wb
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(bb, wb) {
          gb.o.TransformNormalToRef(bb, this.getWorldMatrix(), wb)
        }
        static GetConstructorFromName(wb, Mb, eb) {
          let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            pb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Vb = lb.d.Construct(wb, Mb, eb, {
            interaxial_distance: Hb,
            isStereoscopicSideBySide: pb
          });
          return Vb || (() => bb._CreateDefaultParsedCamera(Mb, eb))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let bb = this.RJ().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (bb *= -1), bb
        }
      }, (() => {
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, Hb.B)("position")], Mb = [(0, Hb.B)("upVector")], Ib = [(0, Hb.E)()], Fb = [(0, Hb.E)()], Bb = [(0, Hb.E)()], sb = [(0, Hb.E)()], mb = [(0, Hb.E)()], hb = [(0, Hb.E)()], zb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], xb = [(0, Hb.E)()], jb = [(0, Hb.E)()], Kb = [(0, Hb.E)()], rb = [(0, Hb.E)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], Yb = [(0, Hb.E)()], (0, eb.i)(bb, null, Ib, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoLeft" in bb,
            get: bb => bb.orthoLeft
          },
          metadata: pb
        }, null, fb), (0, eb.i)(bb, null, Fb, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoRight" in bb,
            get: bb => bb.orthoRight
          },
          metadata: pb
        }, null, fb), (0, eb.i)(bb, null, Bb, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoBottom" in bb,
            get: bb => bb.orthoBottom
          },
          metadata: pb
        }, null, fb), (0, eb.i)(bb, null, sb, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: bb => "orthoTop" in bb,
            get: bb => bb.orthoTop
          },
          metadata: pb
        }, null, fb), (0, eb.i)(bb, null, xb, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: bb => "inertia" in bb,
            get: bb => bb.inertia
          },
          metadata: pb
        }, null, fb), (0, eb.i)(bb, null, jb, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: bb => "mode" in bb,
            get: bb => bb.mode
          },
          metadata: pb
        }, null, fb), (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, wb) => {
              bb._position = wb
            }
          },
          metadata: pb
        }, Ab, Wb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: bb => "_upVector" in bb,
            get: bb => bb._upVector,
            set: (bb, wb) => {
              bb._upVector = wb
            }
          },
          metadata: pb
        }, Jb, Sb), (0, eb.i)(null, null, mb, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: bb => "fov" in bb,
            get: bb => bb.fov,
            set: (bb, wb) => {
              bb.fov = wb
            }
          },
          metadata: pb
        }, Nb, vb), (0, eb.i)(null, null, hb, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: bb => "projectionPlaneTilt" in bb,
            get: bb => bb.projectionPlaneTilt,
            set: (bb, wb) => {
              bb.projectionPlaneTilt = wb
            }
          },
          metadata: pb
        }, Qb, Gb), (0, eb.i)(null, null, zb, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "minZ" in bb,
            get: bb => bb.minZ,
            set: (bb, wb) => {
              bb.minZ = wb
            }
          },
          metadata: pb
        }, qb, ab), (0, eb.i)(null, null, Xb, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxZ" in bb,
            get: bb => bb.maxZ,
            set: (bb, wb) => {
              bb.maxZ = wb
            }
          },
          metadata: pb
        }, ib, ub), (0, eb.i)(null, null, Kb, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "layerMask" in bb,
            get: bb => bb.layerMask,
            set: (bb, wb) => {
              bb.layerMask = wb
            }
          },
          metadata: pb
        }, db, Pb), (0, eb.i)(null, null, rb, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fovMode" in bb,
            get: bb => bb.fovMode,
            set: (bb, wb) => {
              bb.fovMode = wb
            }
          },
          metadata: pb
        }, nb, yb), (0, eb.i)(null, null, Rb, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraRigMode" in bb,
            get: bb => bb.cameraRigMode,
            set: (bb, wb) => {
              bb.cameraRigMode = wb
            }
          },
          metadata: pb
        }, ob, Tb), (0, eb.i)(null, null, Db, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "interaxialDistance" in bb,
            get: bb => bb.interaxialDistance,
            set: (bb, wb) => {
              bb.interaxialDistance = wb
            }
          },
          metadata: pb
        }, kb, bw), (0, eb.i)(null, null, cb, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: bb => "isStereoscopicSideBySide" in bb,
            get: bb => bb.isStereoscopicSideBySide,
            set: (bb, wb) => {
              bb.isStereoscopicSideBySide = wb
            }
          },
          metadata: pb
        }, ww, Mw), (0, eb.i)(null, null, Yb, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreCameraMaxZ" in bb,
            get: bb => bb.ignoreCameraMaxZ,
            set: (bb, wb) => {
              bb.ignoreCameraMaxZ = wb
            }
          },
          metadata: pb
        }, ew, Hw), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb._CreateDefaultParsedCamera = (bb, wb) => {
        throw (0, Ob.k)("UniversalCamera")
      }, bb.PERSPECTIVE_CAMERA = 0, bb.ORTHOGRAPHIC_CAMERA = 1, bb.FOVMODE_VERTICAL_FIXED = 0, bb.FOVMODE_HORIZONTAL_FIXED = 1, bb.RIG_MODE_NONE = 0, bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, bb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, bb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, bb.RIG_MODE_VR = 20, bb.RIG_MODE_CUSTOM = 22, bb.ForceAttachControlToAlwaysPreventDefault = !1, bb
    })();

    function Bb(bb, wb) {
      const Mb = bb.type,
        eb = Fb.GetConstructorFromName(Mb, bb.name, wb, bb.interaxial_distance, bb.isStereoscopicSideBySide),
        Hb = Eb.d.Parse(eb, bb, wb);
      if (void 0 !== bb.parentId && (Hb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (Hb._waitingParentInstanceIndex = bb.parentInstanceIndex), Hb.inputs && (Hb.inputs.parse(bb), Hb._setupInputs()), bb.upVector && (Hb.upVector = gb.o.FromArray(bb.upVector)), Hb.setPosition && (Hb.position.twb(0, 0, 0), Hb.setPosition(gb.o.FromArray(bb.position))), bb.target && Hb.setTarget && Hb.setTarget(gb.o.FromArray(bb.target)), bb.cameraRigMode) {
        const wb = bb.interaxial_distance ? {
          interaxialDistance: bb.interaxial_distance
        } : {};
        Hb.setCameraRigMode(bb.cameraRigMode, wb)
      }
      if (bb.animations) {
        for (let wb = 0; wb < bb.animations.length; wb++) {
          const Mb = bb.animations[wb],
            eb = (0, Ib.c)("BABYLON.Animation");
          eb && Hb.animations.push(eb.Parse(Mb))
        }
        lb.d.ParseAnimationRanges(Hb, bb, wb)
      }
      return bb.autoAnimate && wb.beginAnimation(Hb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), void 0 !== bb.isEnabled && Hb.Bx(bb.isEnabled), Hb
    }
    let sb = !1;

    function mb() {
      sb || (sb = !0, Fb.Parse = Bb)
    }
  },
  41900: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb) {
        this._cameraPosition = wb, this._behavior = Mb, this.activeInput = !1, this.speed = 1, this.i5 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new eb.o, this.rotationAccumulatedPixels = new eb.o, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = eb.o.Zero(), this.rotationDeltaCurrentFrame = eb.o.Zero(), this._zoomVelocity = 0, this._panVelocity = new eb.o, this.referenceFrameRate = 60, this._rotationVelocity = new eb.o, this._prevFrameTimeMs = 0, this._scene = bb
      }
      computeCurrentFrameDeltas() {
        const bb = this._scene.DC().getDeltaTime(),
          wb = this._getEffectiveDeltaMs(bb);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Jbb(0), this.rotationDeltaCurrentFrame.Jbb(0), this.zoomDeltaCurrentFrame = 0, void(bb > 0 && (this._prevFrameTimeMs = bb));
        this.panDeltaCurrentFrame.Jbb(0), this.rotationDeltaCurrentFrame.Jbb(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.twb(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * wb, this.panDeltaCurrentFrame), this._rotationVelocity.twb(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.twb(this._rotationVelocity.x * this.speed * this.rotationXSpeed * wb, this._rotationVelocity.y * this.speed * this.rotationYSpeed * wb, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.i5 * this._zoomSpeedMultiplier) * wb, bb > 0 && (this._prevFrameTimeMs = bb), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Jbb(0), this.rotationAccumulatedPixels.Jbb(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Jbb(0), this.rotationAccumulatedPixels.Jbb(0)
      }
      resetPanVelocity() {
        this._panVelocity.Jbb(0), this.panAccumulatedPixels.Jbb(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(bb) {
        const wb = this._scene.DC().getDeltaTime(),
          Mb = this._getEffectiveDeltaMs(wb),
          eb = 1e3 / this.referenceFrameRate;
        return Math.pow(bb, Mb / eb)
      }
      getFrameIndependentInputScale(bb) {
        const wb = 1 - bb;
        if (wb <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(bb)) / wb
      }
      _getEffectiveDeltaMs(bb) {
        return bb > 0 ? bb : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(bb, wb, Mb) {
        let eb = bb;
        const Hb = this._scene.DC().getDeltaTime(),
          pb = this._getEffectiveDeltaMs(Hb);
        if (0 === pb) return eb;
        const Vb = this.getFrameIndependentDecay(Mb);
        if (eb *= Vb, 0 !== wb || this.activeInput) {
          const bb = 1 - Mb;
          eb += wb / pb * (bb > 0 ? (1 - Vb) / bb : 1)
        } else Math.abs(eb) < 1e-6 && (eb = 0);
        return eb
      }
    }
  },
  41909: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      constructor(bb, wb) {
        this.inputMap = [], this.handlers = bb, this._createDefaultEntries = wb, this.resetInputMap()
      }
      resolveInteraction(bb, wb) {
        for (const Mb of this.inputMap)
          if (Mb.source === bb && this._entryMatches(Mb, wb)) return Mb;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(bb, wb, Mb) {
        const eb = this.inputMap;
        for (let Hb = 0; Hb < eb.length; Hb++) {
          const pb = eb[Hb];
          if (pb.source === bb && pb.interaction === wb && this._entryConditionsMatch(pb, Mb)) return pb
        }
      }
      getEntries(bb, wb, Mb) {
        const eb = [],
          Hb = this.inputMap;
        for (let pb = 0; pb < Hb.length; pb++) {
          const Vb = Hb[pb];
          Vb.source === bb && Vb.interaction === wb && this._entryConditionsMatch(Vb, Mb) && eb.push(Vb)
        }
        return eb
      }
      addEntry(bb) {
        const wb = this._entrySpecificity(bb);
        let Mb = this.inputMap.length;
        for (let eb = 0; eb < this.inputMap.length; eb++)
          if (this._entrySpecificity(this.inputMap[eb]) < wb) {
            Mb = eb;
            break
          } this.inputMap.splice(Mb, 0, bb)
      }
      setInteraction(bb, wb, Mb) {
        const eb = this.resolveInteraction(bb, wb);
        return eb && this._entryCoversAllConditionsOf(eb, wb) ? (eb.interaction = Mb, !0) : (this.addEntry({
          source: bb,
          ...wb ?? {},
          interaction: Mb
        }), !0)
      }
      _entryCoversAllConditionsOf(bb, wb) {
        if (!wb) return !0;
        const Mb = bb;
        for (const eb of Object.keys(wb)) {
          const bb = wb[eb];
          if (void 0 !== bb)
            if ("modifiers" === eb) {
              const wb = Mb.modifiers ?? {};
              for (const Mb of Object.keys(bb))
                if (void 0 !== bb[Mb] && void 0 === wb[Mb]) return !1
            } else if (void 0 === Mb[eb]) return !1
        }
        return !0
      }
      setInteractions(bb, wb, Mb) {
        let eb = 0;
        const Hb = this.inputMap;
        for (let pb = 0; pb < Hb.length; pb++) {
          const Vb = Hb[pb];
          Vb.source === bb && this._entryMatches(Vb, wb) && (Vb.interaction = Mb, eb++)
        }
        return eb
      }
      _entryMatches(bb, wb) {
        switch (bb.source) {
          case "pointer":
            return (void 0 === bb.button || bb.button === wb?.button) && this._matchModifiers(bb.modifiers, wb?.modifiers);
          case "wheel":
            return this._matchModifiers(bb.modifiers, wb?.modifiers);
          case "touch":
            return void 0 === bb.touchCount || bb.touchCount === wb?.touchCount;
          case "keyboard":
            return (void 0 === bb.key || (Array.isArray(bb.key) ? -1 !== bb.key.indexOf(wb?.key ?? -1) : bb.key === wb?.key)) && this._matchModifiers(bb.modifiers, wb?.modifiers)
        }
      }
      _entryConditionsMatch(bb, wb) {
        if (!wb) return !0;
        switch (bb.source) {
          case "pointer":
            return (!("button" in wb) || bb.button === wb.button) && (!("modifiers" in wb) || this._entryModifiersMatch(bb.modifiers, wb.modifiers));
          case "wheel":
            return !("modifiers" in wb) || this._entryModifiersMatch(bb.modifiers, wb.modifiers);
          case "touch":
            return !("touchCount" in wb) || bb.touchCount === wb.touchCount;
          case "keyboard":
            if ("key" in wb) {
              if (void 0 === bb.key) return void 0 === wb.key;
              if (void 0 === wb.key || (Array.isArray(bb.key) ? -1 === bb.key.indexOf(wb.key) : bb.key !== wb.key)) return !1
            }
            return !("modifiers" in wb) || this._entryModifiersMatch(bb.modifiers, wb.modifiers)
        }
      }
      _entrySpecificity(bb) {
        let wb = 0;
        return "button" in bb && void 0 !== bb.button && wb++, "key" in bb && void 0 !== bb.key && wb++, "touchCount" in bb && void 0 !== bb.touchCount && wb++, "modifiers" in bb && bb.modifiers && wb++, wb
      }
      _matchModifiers(bb, wb) {
        return !bb || (void 0 === bb.ctrl || bb.ctrl === (wb?.ctrl ?? !1)) && ((void 0 === bb.shift || bb.shift === (wb?.shift ?? !1)) && (void 0 === bb.alt || bb.alt === (wb?.alt ?? !1)))
      }
      _entryModifiersMatch(bb, wb) {
        if (!wb) return !bb;
        return void 0 !== wb.ctrl || void 0 !== wb.shift || void 0 !== wb.alt ? (void 0 === wb.ctrl || bb?.ctrl === wb.ctrl) && ((void 0 === wb.shift || bb?.shift === wb.shift) && (void 0 === wb.alt || bb?.alt === wb.alt)) : !bb || void 0 === bb.ctrl && void 0 === bb.shift && void 0 === bb.alt
      }
    }
  },
  41871: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Bb,
      f: () => Eb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41879),
      Vb = Mb(38285),
      gb = Mb(38294),
      lb = Mb(41892),
      Lb = Mb(41886),
      Ib = Mb(41900),
      Ob = Mb(41909);
    class Ub extends Ib.c {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb), this.input = new Ob.e({
          translate: (bb, wb, Mb) => {
            this.panAccumulatedPixels.x += bb, this.panAccumulatedPixels.y += wb, this.panAccumulatedPixels.z += Mb
          },
          rotate: (bb, wb) => {
            this.rotationAccumulatedPixels.x += bb, this.rotationAccumulatedPixels.y += wb
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
    const tb = Vb.b.Zero(),
      Cb = Vb.e.Identity();
    let Eb = (() => {
        var bb;
        let wb, Mb, Lb, Ib, Ob = pb.c,
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [],
          mb = [],
          hb = [],
          zb = [],
          Xb = [];
        return bb = class extends Ob {
          get inertia() {
            return this._targetInertia
          }
          set inertia(bb) {
            this._targetInertia = bb, this.movement && (this.movement.panInertia = bb, this.movement.rotationInertia = bb)
          }
          constructor(bb, wb, Mb) {
            super(bb, wb, Mb, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Vb.o(0, 0, 0), this.cameraRotation = new Vb.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, eb.m)(this, Eb, !1), this.rotation = ((0, eb.m)(this, Fb), (0, eb.m)(this, Bb, void 0)), this.rotationQuaternion = (0, eb.m)(this, sb), this.speed = (0, eb.m)(this, mb, 2), this.noRotationConstraint = ((0, eb.m)(this, hb), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = gb.e, this._rotationEpsilon = gb.e, this.lockedTarget = (0, eb.m)(this, zb, null), this._currentTarget = ((0, eb.m)(this, Xb), Vb.o.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Vb.b.Zero(), this._cameraTransformMatrix = Vb.b.Zero(), this._cameraRotationMatrix = Vb.b.Zero(), this._transformedReferencePoint = Vb.o.Zero(), this._deferredPositionUpdate = new Vb.o, this._deferredRotationQuaternionUpdate = new Vb.e, this._deferredRotationUpdate = new Vb.o, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Vb.o.Forward(this.RJ().useRightHandedSystem), this.rotation = new Vb.o(0, this.RJ().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Ub(this.RJ(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(bb) {
            this.getWorldMatrix();
            const wb = Vb.j.YC[0],
              Mb = Vb.j.YC[1];
            return Mb.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Mb, wb), wb.scaleInPlace(bb), this.globalPosition.add(wb)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.twb(0, 0, 0), this.cameraRotation.twb(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Vb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Vb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Vb.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(bb) {
            bb || super._updateCache();
            const wb = this._getLockedTargetPosition();
            wb ? this._cache.lockedTarget ? this._cache.lockedTarget.eZ(wb) : this._cache.lockedTarget = wb.clone() : this._cache.lockedTarget = null, this._cache.rotation.eZ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.eZ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const bb = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(bb) : !bb) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const bb = this.DC();
            return this.speed * Math.sqrt(bb.getDeltaTime() / (100 * bb.getFps()))
          }
          setTarget(bb) {
            this.upVector.normalize(), this._initialFocalDistance = bb.subtract(this.position).length(), this.position.z === bb.z && (this.position.z += gb.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.RJ().useRightHandedSystem ? Vb.b.LookAtRHToRef(this.position, bb, Vb.o.UpReadOnly, tb) : Vb.b.LookAtLHToRef(this.position, bb, Vb.o.UpReadOnly, tb), tb.invert();
            const wb = this.rotationQuaternion || Cb;
            Vb.e.FromRotationMatrixToRef(tb, wb), wb.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Vb.j.Matrix[0]), Vb.o.TransformNormalToRef(this.cameraDirection, Vb.j.Matrix[0], Vb.j.YC[0]), this._deferredPositionUpdate.addInPlace(Vb.j.YC[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.eZ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.eZ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const bb = this.movement,
              wb = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            bb.panAccumulatedPixels.addInPlace(this.cameraDirection), bb.rotationAccumulatedPixels.x += this.cameraRotation.x, bb.rotationAccumulatedPixels.y += this.cameraRotation.y, bb.computeCurrentFrameDeltas(), this.cameraDirection.eZ(bb.panDeltaCurrentFrame), this.cameraRotation.set(bb.rotationDeltaCurrentFrame.x, bb.rotationDeltaCurrentFrame.y);
            const Mb = this.speed * this._panningEpsilon;
            !wb && Math.abs(this.cameraDirection.x) < Mb && Math.abs(this.cameraDirection.y) < Mb && Math.abs(this.cameraDirection.z) < Mb && (this.cameraDirection.Jbb(0), bb.resetPanVelocity());
            const eb = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Hb = this._decideIfNeedsToMove(),
              pb = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.eZ(this.rotation), this._deferredPositionUpdate.eZ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.eZ(this.rotationQuaternion), Hb && this._updatePosition(), pb) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * eb, this._deferredRotationUpdate.y += this.cameraRotation.y * eb, !this.noRotationConstraint) {
                const bb = 1.570796;
                this._deferredRotationUpdate.x > bb && (this._deferredRotationUpdate.x = bb), this._deferredRotationUpdate.x < -bb && (this._deferredRotationUpdate.x = -bb)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.eZ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Vb.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.eZ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Jbb(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Vb.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Vb.o.TransformNormalToRef(Vb.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Vb.o.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? lb.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Vb.e.FromEulerVectorToRef(this.rotation, Cb), lb.c.Y.rotateByQuaternionToRef(Cb, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(bb, wb, Mb) {
            if (this.RJ().useRightHandedSystem ? Vb.b.LookAtRHToRef(bb, wb, Mb, this._viewMatrix) : Vb.b.LookAtLHToRef(bb, wb, Mb, this._viewMatrix), this.parent) {
              const bb = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(bb, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(wb, Mb) {
            if (this.cameraRigMode !== pb.c.RIG_MODE_NONE) {
              const Mb = new bb(wb, this.position.clone(), this.RJ());
              return Mb.isRigCamera = !0, Mb.rigParent = this, this.cameraRigMode === pb.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Vb.e), Mb._cameraRigParams = {}, Mb.rotationQuaternion = new Vb.e), Mb.mode = this.mode, Mb.orthoLeft = this.orthoLeft, Mb.orthoRight = this.orthoRight, Mb.orthoTop = this.orthoTop, Mb.orthoBottom = this.orthoBottom, Mb
            }
            return null
          }
          _updateRigCameras() {
            const bb = this._rigCameras[0],
              wb = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case pb.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case pb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case pb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case pb.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case pb.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Mb = this.cameraRigMode === pb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  eb = this.cameraRigMode === pb.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Mb, bb), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * eb, wb);
                break
              }
              case pb.c.RIG_MODE_VR:
                bb.rotationQuaternion && wb.rotationQuaternion && this.rotationQuaternion ? (bb.rotationQuaternion.eZ(this.rotationQuaternion), wb.rotationQuaternion.eZ(this.rotationQuaternion)) : (bb.rotation.eZ(this.rotation), wb.rotation.eZ(this.rotation)), bb.position.eZ(this.position), wb.position.eZ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(wb, Mb) {
            this.getTarget().subtractToRef(this.position, bb._TargetFocalPoint), bb._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const eb = bb._TargetFocalPoint.addInPlace(this.position);
            Vb.b.TranslationToRef(-eb.x, -eb.y, -eb.z, bb._TargetTransformMatrix), bb._TargetTransformMatrix.multiplyToRef(Vb.b.RotationAxis(Mb.upVector, wb), bb._RigCamTransformMatrix), Vb.b.TranslationToRef(eb.x, eb.y, eb.z, bb._TargetTransformMatrix), bb._RigCamTransformMatrix.multiplyToRef(bb._TargetTransformMatrix, bb._RigCamTransformMatrix), Vb.o.TransformCoordinatesToRef(this.position, bb._RigCamTransformMatrix, Mb.position), Mb.setTarget(eb)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ob[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.B)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.r)("lockedTargetId")], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "updateUpVectorFromRotation" in bb,
              get: bb => bb.updateUpVectorFromRotation,
              set: (bb, wb) => {
                bb.updateUpVectorFromRotation = wb
              }
            },
            metadata: pb
          }, Eb, Fb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: bb => "rotation" in bb,
              get: bb => bb.rotation,
              set: (bb, wb) => {
                bb.rotation = wb
              }
            },
            metadata: pb
          }, Bb, sb), (0, eb.i)(null, null, Lb, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: bb => "speed" in bb,
              get: bb => bb.speed,
              set: (bb, wb) => {
                bb.speed = wb
              }
            },
            metadata: pb
          }, mb, hb), (0, eb.i)(null, null, Ib, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: bb => "lockedTarget" in bb,
              get: bb => bb.lockedTarget,
              set: (bb, wb) => {
                bb.lockedTarget = wb
              }
            },
            metadata: pb
          }, zb, Xb), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb._RigCamTransformMatrix = new Vb.b, bb._TargetTransformMatrix = new Vb.b, bb._TargetFocalPoint = new Vb.o, bb
      })(),
      Fb = !1;

    function Bb() {
      Fb || (Fb = !0, Lb.d.AddNodeConstructor("TargetCamera", ((bb, wb) => () => new Eb(bb, Vb.o.Zero(), wb))))
    }
  },
  41633: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(41572);
    let Hb = !1;

    function pb() {
      Hb || (Hb = !0, eb.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, eb.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, eb.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, eb.d.prototype.getAspectRatio = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = bb.viewport;
        return this.getRenderWidth(wb) * Mb.width / (this.getRenderHeight(wb) * Mb.height)
      }, eb.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, eb.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41713: (bb, wb, Mb) => {
    var eb = Mb(41572),
      Hb = Mb(41722);
    let pb = !1;
    pb || (pb = !0, (0, Hb.t)(), eb.d.prototype._loadFileAsync = async function(bb, wb, Mb) {
      return await new Promise(((eb, Hb) => {
        this._loadFile(bb, (bb => {
          eb(bb)
        }), void 0, wb, Mb, ((bb, wb) => {
          Hb(wb)
        }))
      }))
    })
  },
  41709: (bb, wb, Mb) => {
    (0, Mb(41638).e)()
  },
  41638: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(41572);
    let Hb = !1;

    function pb() {
      Hb || (Hb = !0, eb.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, eb.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, eb.d.prototype.createRenderPassId = function(bb) {
        const wb = ++eb.d._RenderPassIdCounter;
        return this._renderPassNames[wb] = bb ?? "NONAME", wb
      }, eb.d.prototype.releaseRenderPassId = function(bb) {
        this._renderPassNames[bb] = void 0;
        for (let wb = 0; wb < this.scenes.length; ++wb) {
          const Mb = this.scenes[wb];
          for (let wb = 0; wb < Mb.meshes.length; ++wb) {
            const eb = Mb.meshes[wb];
            if (eb._releaseRenderPassId(bb), eb.oR)
              for (let wb = 0; wb < eb.oR.length; ++wb) {
                eb.oR[wb]._removeDrawWrapper(bb)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(bb)
      })
    }
  },
  41749: (bb, wb, Mb) => {
    var eb = Mb(41755),
      Hb = Mb(41572);
    let pb = !1;
    pb || (pb = !0, Hb.d.GetCompatibleTextureLoader = eb.c)
  },
  41646: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(41511);
    let Hb = !1;

    function pb() {
      Hb || (Hb = !0, eb.ThinEngine.prototype.setAlphaMode = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Mb] === bb) {
          if (!wb) {
            const wb = 0 === bb;
            this.depthCullingState.depthMask !== wb && (this.depthCullingState.depthMask = wb)
          }
          return
        }
        const eb = 0 === bb;
        this._alphaState.setAlphaBlend(!eb, Mb), this._alphaState.setAlphaMode(bb, Mb), wb || (this.depthCullingState.depthMask = eb), this._alphaMode[Mb] = bb
      })
    }
  },
  41653: (bb, wb, Mb) => {
    var eb = Mb(41506),
      Hb = Mb(39971),
      pb = Mb(41511),
      Vb = Mb(41660),
      gb = Mb(41623);
    class lb extends Vb.c {
      setDepthStencilTexture(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(bb, wb), !bb) return;
        const Mb = this._engine,
          eb = this._context,
          Hb = bb._hardwareTexture;
        if (Hb && bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const wb = Mb._currentFramebuffer;
          Mb._bindUnboundFramebuffer(this._MSAAFramebuffer), eb.framebufferRenderbuffer(eb.FRAMEBUFFER, (0, gb.d)(bb.format) ? eb.DEPTH_STENCIL_ATTACHMENT : eb.DEPTH_ATTACHMENT, eb.RENDERBUFFER, Hb.getMSAARenderBuffer()), Mb._bindUnboundFramebuffer(wb)
        }
      }
      constructor(bb, wb, Mb, eb, Hb) {
        super(bb, wb, Mb, eb), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Hb
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
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const bb = this._engine,
            wb = bb._currentFramebuffer,
            Mb = this._context;
          bb._bindUnboundFramebuffer(this._framebuffer), Mb.framebufferRenderbuffer(Mb.FRAMEBUFFER, Mb.DEPTH_STENCIL_ATTACHMENT, Mb.RENDERBUFFER, null), Mb.framebufferRenderbuffer(Mb.FRAMEBUFFER, Mb.DEPTH_ATTACHMENT, Mb.RENDERBUFFER, null), Mb.framebufferRenderbuffer(Mb.FRAMEBUFFER, Mb.STENCIL_ATTACHMENT, Mb.RENDERBUFFER, null), bb._bindUnboundFramebuffer(wb), Mb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(bb, wb, Mb, eb, Hb, pb)
      }
      shareDepth(bb) {
        super.shareDepth(bb);
        const wb = this._context,
          Mb = this._depthStencilBuffer,
          eb = bb._MSAAFramebuffer || bb._framebuffer,
          Hb = this._engine;
        bb._depthStencilBuffer && bb._depthStencilBuffer !== Mb && wb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = Mb;
        const pb = bb._generateStencilBuffer ? wb.DEPTH_STENCIL_ATTACHMENT : wb.DEPTH_ATTACHMENT;
        Hb._bindUnboundFramebuffer(eb), wb.framebufferRenderbuffer(wb.FRAMEBUFFER, pb, wb.RENDERBUFFER, Mb), Hb._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Hb = bb._hardwareTexture;
        if (!Hb) return;
        const pb = this._framebuffer,
          Vb = this._engine,
          gb = Vb._currentFramebuffer;
        let lb;
        if (Vb._bindUnboundFramebuffer(pb), Vb.HE > 1) {
          const pb = this._context;
          lb = pb["COLOR_ATTACHMENT" + wb], bb.is2DArray || bb.is3D ? (Mb = Mb ?? this.layerIndices?.[wb] ?? 0, pb.framebufferTextureLayer(pb.FRAMEBUFFER, lb, Hb.underlyingResource, eb, Mb)) : bb.isCube ? (Mb = Mb ?? this.faceIndices?.[wb] ?? 0, pb.framebufferTexture2D(pb.FRAMEBUFFER, lb, pb.TEXTURE_CUBE_MAP_POSITIVE_X + Mb, Hb.underlyingResource, eb)) : pb.framebufferTexture2D(pb.FRAMEBUFFER, lb, pb.TEXTURE_2D, Hb.underlyingResource, eb)
        } else {
          const bb = this._context;
          lb = bb["COLOR_ATTACHMENT" + wb + "_WEBGL"];
          const pb = void 0 !== Mb ? bb.TEXTURE_CUBE_MAP_POSITIVE_X + Mb : bb.TEXTURE_2D;
          bb.framebufferTexture2D(bb.FRAMEBUFFER, lb, pb, Hb.underlyingResource, eb)
        }
        if (bb._autoMSAAManagement && this._MSAAFramebuffer) {
          const bb = this._context;
          Vb._bindUnboundFramebuffer(this._MSAAFramebuffer), bb.framebufferRenderbuffer(bb.FRAMEBUFFER, lb, bb.RENDERBUFFER, Hb.getMSAARenderBuffer())
        }
        Vb._bindUnboundFramebuffer(gb)
      }
      setTexture(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(bb, wb, Mb), this._bindTextureRenderTarget(bb, wb)
      }
      setLayerAndFaceIndices(bb, wb) {
        if (super.setLayerAndFaceIndices(bb, wb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Mb = this._attachments?.length ?? this.textures.length;
        for (let eb = 0; eb < Mb; eb++) {
          const bb = this.textures[eb];
          bb && (bb.is2DArray || bb.is3D ? this._bindTextureRenderTarget(bb, eb, this.layerIndices[eb]) : bb.isCube ? this._bindTextureRenderTarget(bb, eb, this.faceIndices[eb]) : this._bindTextureRenderTarget(bb, eb))
        }
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(bb, wb, Mb), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const eb = this.textures[bb];
        eb.is2DArray || eb.is3D ? this._bindTextureRenderTarget(this.textures[bb], bb, this.layerIndices[bb]) : eb.isCube && this._bindTextureRenderTarget(this.textures[bb], bb, this.faceIndices[bb])
      }
      resolveMSAATextures() {
        const bb = this._engine,
          wb = bb._currentFramebuffer;
        bb._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), bb._bindUnboundFramebuffer(wb)
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const wb = this._context;
        bb || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (wb.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (wb.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (wb.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(bb)
      }
    }
    let Lb = !1;
    Lb || (Lb = !0, pb.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(bb, wb, Mb) {
      const eb = new lb(bb, wb, Mb, this, this._gl);
      return this._renderTargetWrapperCache.push(eb), eb
    }, pb.ThinEngine.prototype.createRenderTargetTexture = function(bb, wb) {
      const Mb = this._createHardwareRenderTargetWrapper(!1, !1, bb);
      let eb, Hb, pb = !0,
        Vb = !1,
        gb = !1,
        lb = 1;
      void 0 !== wb && "object" === typeof wb && (pb = wb.generateDepthBuffer ?? !0, Vb = !!wb.generateStencilBuffer, gb = !!wb.noColorAttachment, eb = wb.colorAttachment, lb = wb.samples ?? 1, Hb = wb.label);
      const Lb = eb || (gb ? null : this._createInternalTexture(bb, wb, !0, 5)),
        Ib = bb.width || bb,
        Ob = bb.height || bb,
        Ub = this._currentFramebuffer,
        tb = this._gl,
        Cb = tb.createFramebuffer();
      if (this._bindUnboundFramebuffer(Cb), Mb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Vb, pb, Ib, Ob), !Lb || Lb.is2DArray || Lb.is3D || tb.framebufferTexture2D(tb.FRAMEBUFFER, tb.COLOR_ATTACHMENT0, tb.TEXTURE_2D, Lb._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Ub), Mb.label = Hb ?? "RenderTargetWrapper", Mb._framebuffer = Cb, Mb._generateDepthBuffer = pb, Mb._generateStencilBuffer = Vb, Mb.setTextures(Lb), eb) {
        if (Mb._samples = eb.samples, eb.samples > 1) {
          const bb = eb._hardwareTexture.getMSAARenderBuffer(0);
          Mb._MSAAFramebuffer = tb.createFramebuffer(), this._bindUnboundFramebuffer(Mb._MSAAFramebuffer), tb.framebufferRenderbuffer(tb.FRAMEBUFFER, tb.COLOR_ATTACHMENT0, tb.RENDERBUFFER, bb), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Mb, lb);
      return Mb
    }, pb.ThinEngine.prototype._createDepthStencilTexture = function(bb, wb, Mb) {
      const pb = this._gl,
        Vb = bb.layers || 0,
        lb = bb.depth || 0;
      let Lb = pb.TEXTURE_2D;
      0 !== Vb ? Lb = pb.TEXTURE_2D_ARRAY : 0 !== lb && (Lb = pb.TEXTURE_3D);
      const Ib = new eb.e(this, 12);
      if (Ib.label = wb.label, !this._caps.depthTextureExtension) return Hb.b.Error("Depth texture is not supported by your browser or hardware."), Ib;
      const Ob = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...wb
      };
      if (this._bindTextureDirectly(Lb, Ib, !0), this._setupDepthStencilTexture(Ib, bb, 0 !== Ob.comparisonFunction && Ob.bilinearFiltering, Ob.comparisonFunction, Ob.samples), void 0 !== Ob.depthTextureFormat) {
        if (15 !== Ob.depthTextureFormat && 16 !== Ob.depthTextureFormat && 17 !== Ob.depthTextureFormat && 13 !== Ob.depthTextureFormat && 14 !== Ob.depthTextureFormat && 18 !== Ob.depthTextureFormat) return Hb.b.Error(`Depth texture ${Ob.depthTextureFormat} format is not supported.`), Ib;
        Ib.format = Ob.depthTextureFormat
      } else Ib.format = Ob.generateStencil ? 13 : 16;
      const Ub = (0, gb.d)(Ib.format),
        tb = this._getWebGLTextureTypeFromDepthTextureFormat(Ib.format),
        Cb = Ub ? pb.DEPTH_STENCIL : pb.DEPTH_COMPONENT,
        Eb = this._getInternalFormatFromDepthTextureFormat(Ib.format, !0, Ub);
      return Ib.is2DArray ? pb.texImage3D(Lb, 0, Eb, Ib.width, Ib.height, Vb, 0, Cb, tb, null) : Ib.is3D ? pb.texImage3D(Lb, 0, Eb, Ib.width, Ib.height, lb, 0, Cb, tb, null) : pb.texImage2D(Lb, 0, Eb, Ib.width, Ib.height, 0, Cb, tb, null), this._bindTextureDirectly(Lb, null), this._internalTexturesCache.push(Ib), Mb._depthStencilBuffer && (pb.deleteRenderbuffer(Mb._depthStencilBuffer), Mb._depthStencilBuffer = null), this._bindUnboundFramebuffer(Mb._MSAAFramebuffer ?? Mb._framebuffer), Mb._generateStencilBuffer = Ub, Mb._depthStencilTextureWithStencil = Ub, Mb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Mb._generateStencilBuffer, Mb._generateDepthBuffer, Mb.width, Mb.height, Mb.samples, Ib.format), this._bindUnboundFramebuffer(null), Ib
    }, pb.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(bb, wb) {
      if (this.HE < 2 || !bb) return 1;
      if (bb.samples === wb) return wb;
      const Mb = this._gl;
      wb = Math.min(wb, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (Mb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (Mb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
      const eb = bb.texture?._hardwareTexture;
      if (eb?.releaseMSAARenderBuffers(), bb.texture && wb > 1 && "function" === typeof Mb.renderbufferStorageMultisample) {
        const Hb = Mb.createFramebuffer();
        if (!Hb) throw new Error("Unable to create multi sampled framebuffer");
        bb._MSAAFramebuffer = Hb, this._bindUnboundFramebuffer(bb._MSAAFramebuffer);
        const pb = this._createRenderBuffer(bb.texture.width, bb.texture.height, wb, -1, this._getRGBABufferInternalSizedFormat(bb.texture.type, bb.texture.format, bb.texture._useSRGBBuffer), Mb.COLOR_ATTACHMENT0, !1);
        if (!pb) throw new Error("Unable to create multi sampled framebuffer");
        eb?.addMSAARenderBuffer(pb)
      }
      this._bindUnboundFramebuffer(bb._MSAAFramebuffer ?? bb._framebuffer), bb.texture && (bb.texture.samples = wb), bb._samples = wb;
      const Hb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
      return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, wb, Hb), this._bindUnboundFramebuffer(null), wb
    }, pb.ThinEngine.prototype._setupDepthStencilTexture = function(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const pb = wb.width ?? wb,
        Vb = wb.height ?? wb,
        gb = wb.layers || 0,
        lb = wb.depth || 0;
      bb.baseWidth = pb, bb.baseHeight = Vb, bb.width = pb, bb.height = Vb, bb.is2DArray = gb > 0, bb.depth = gb || lb, bb.isReady = !0, bb.samples = Hb, bb.generateMipMaps = !1, bb.samplingMode = Mb ? 2 : 1, bb.type = 0, bb._comparisonFunction = eb;
      const Lb = this._gl,
        Ib = this._getTextureTarget(bb),
        Ob = this._getSamplingParameters(bb.samplingMode, !1);
      Lb.texParameteri(Ib, Lb.TEXTURE_MAG_FILTER, Ob.mag), Lb.texParameteri(Ib, Lb.TEXTURE_MIN_FILTER, Ob.min), Lb.texParameteri(Ib, Lb.TEXTURE_WRAP_S, Lb.CLAMP_TO_EDGE), Lb.texParameteri(Ib, Lb.TEXTURE_WRAP_T, Lb.CLAMP_TO_EDGE), this.HE > 1 && (0 === eb ? (Lb.texParameteri(Ib, Lb.TEXTURE_COMPARE_FUNC, 515), Lb.texParameteri(Ib, Lb.TEXTURE_COMPARE_MODE, Lb.NONE)) : (Lb.texParameteri(Ib, Lb.TEXTURE_COMPARE_FUNC, eb), Lb.texParameteri(Ib, Lb.TEXTURE_COMPARE_MODE, Lb.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41496: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.b
    });
    var eb = Mb(41499);
    (0, Mb(41646).e)();
    var Hb = Mb(41511);
    let pb = !1;
    ! function() {
      if (pb) return;
      pb = !0;
      const bb = new WeakMap,
        wb = new WeakMap,
        Mb = new WeakMap,
        eb = new WeakMap;
      Hb.ThinEngine.prototype.getAlphaToCoverage = function() {
        return bb.get(this) ?? !1
      }, Hb.ThinEngine.prototype.setAlphaToCoverage = function(Mb) {
        (bb.get(this) !== Mb || this._gl && wb.get(this) !== this._gl) && (bb.set(this, Mb), this._gl && (Mb ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), wb.set(this, this._gl)))
      }, Object.defineProperty(Hb.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (eb.get(this) !== this._gl && (Mb.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), eb.set(this, this._gl)), Mb.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Vb = Mb(41506),
      gb = Mb(39971),
      lb = Mb(41611);
    let Lb = !1;
    ! function() {
      function bb(bb, wb, Mb, eb) {
        let Hb, pb = 1;
        1 === eb ? Hb = new Float32Array(wb * Mb * 4) : 2 === eb ? (Hb = new Uint16Array(wb * Mb * 4), pb = 15360) : Hb = 7 === eb ? new Uint32Array(wb * Mb * 4) : new Uint8Array(wb * Mb * 4);
        for (let Vb = 0; Vb < wb; Vb++)
          for (let eb = 0; eb < Mb; eb++) {
            const Mb = 3 * (eb * wb + Vb),
              gb = 4 * (eb * wb + Vb);
            Hb[gb + 0] = bb[Mb + 0], Hb[gb + 1] = bb[Mb + 1], Hb[gb + 2] = bb[Mb + 2], Hb[gb + 3] = pb
          }
        return Hb
      }

      function wb(bb) {
        return function(wb, Mb, eb, Hb, pb, gb, lb, Lb) {
          let Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Ob = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Ub = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            tb = bb ? 10 : 11,
            Cb = new Vb.e(this, tb);
          Cb.baseWidth = Mb, Cb.baseHeight = eb, Cb.baseDepth = Hb, Cb.width = Mb, Cb.height = eb, Cb.depth = Hb, Cb.format = pb, Cb.type = Ob, Cb.generateMipMaps = gb, Cb.samplingMode = Lb, bb ? Cb.is3D = !0 : Cb.is2DArray = !0, this._doNotHandleContextLost || (Cb._bufferView = wb), bb ? this.updateRawTexture3D(Cb, wb, pb, lb, Ib, Ob) : this.updateRawTexture2DArray(Cb, wb, pb, lb, Ib, Ob), this._bindTextureDirectly(Ub, Cb, !0);
          const Eb = this._getSamplingParameters(Lb, gb);
          return this._gl.texParameteri(Ub, this._gl.TEXTURE_MAG_FILTER, Eb.mag), this._gl.texParameteri(Ub, this._gl.TEXTURE_MIN_FILTER, Eb.min), gb && this._gl.generateMipmap(Ub), this._bindTextureDirectly(Ub, null), this._internalTexturesCache.push(Cb), Cb
        }
      }

      function Mb(bb) {
        return function(wb, Mb, eb, Hb) {
          let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const gb = bb ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            lb = this._getWebGLTextureType(Vb),
            Lb = this._getInternalFormat(eb),
            Ib = this._getRGBABufferInternalSizedFormat(Vb, eb);
          this._bindTextureDirectly(gb, wb, !0), this._unpackFlipY(void 0 === Hb || !!Hb), this._doNotHandleContextLost || (wb._bufferView = Mb, wb.format = eb, wb.invertY = Hb, wb._compression = pb), wb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), pb && Mb ? this._gl.compressedTexImage3D(gb, 0, this.getCaps().s3tc[pb], wb.width, wb.height, wb.depth, 0, Mb) : this._gl.texImage3D(gb, 0, Ib, wb.width, wb.height, wb.depth, 0, Lb, lb, Mb), wb.generateMipMaps && this._gl.generateMipmap(gb), this._bindTextureDirectly(gb, null), wb.isReady = !0
        }
      }
      Lb || (Lb = !0, Hb.ThinEngine.prototype.updateRawTexture = function(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!bb) return;
        const gb = this._getRGBABufferInternalSizedFormat(pb, Mb, Vb),
          lb = this._getInternalFormat(Mb),
          Lb = this._getWebGLTextureType(pb);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === eb || !!eb), this._doNotHandleContextLost || (bb._bufferView = wb, bb.format = Mb, bb.type = pb, bb.invertY = eb, bb._compression = Hb), bb.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Hb && wb ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Hb], bb.width, bb.height, 0, wb) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, gb, bb.width, bb.height, 0, lb, Lb, wb), bb.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), bb.isReady = !0
      }, Hb.ThinEngine.prototype.createRawTexture = function(bb, wb, Mb, eb, Hb, pb, gb) {
        let lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Ib = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ob = new Vb.e(this, 3);
        Ob.baseWidth = wb, Ob.baseHeight = Mb, Ob.width = wb, Ob.height = Mb, Ob.format = eb, Ob.generateMipMaps = Hb, Ob.samplingMode = gb, Ob.invertY = pb, Ob._compression = lb, Ob.type = Lb, Ob._useSRGBBuffer = this._getUseSRGBBuffer(Ib, !Hb), this._doNotHandleContextLost || (Ob._bufferView = bb), this.updateRawTexture(Ob, bb, eb, pb, lb, Lb, Ob._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Ob, !0);
        const Ub = this._getSamplingParameters(gb, Hb);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Ub.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Ub.min), Hb && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Ob), Ob
      }, Hb.ThinEngine.prototype.createRawCubeTexture = function(bb, wb, Mb, eb, Hb, pb, Lb) {
        let Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Ob = this._gl,
          Ub = new Vb.e(this, 8);
        Ub.isCube = !0, Ub.format = Mb, Ub.type = eb, this._doNotHandleContextLost || (Ub._bufferViewArray = bb);
        const tb = this._getWebGLTextureType(eb);
        let Cb = this._getInternalFormat(Mb);
        Cb === Ob.RGB && (Cb = Ob.RGBA), tb !== Ob.FLOAT || this._caps.textureFloatLinearFiltering ? tb !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? tb !== Ob.FLOAT || this._caps.textureFloatRender ? tb !== Ob.HALF_FLOAT || this._caps.colorBufferFloat || (Hb = !1, gb.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Hb = !1, gb.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Hb = !1, Lb = 1, gb.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Hb = !1, Lb = 1, gb.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Eb = wb,
          Fb = Eb;
        Ub.width = Eb, Ub.height = Fb, Ub.invertY = pb, Ub._compression = Ib;
        if (!this.needPOTTextures || (0, lb.i)(Ub.width) && (0, lb.i)(Ub.height) || (Hb = !1), bb) this.updateRawCubeTexture(Ub, bb, Mb, eb, pb, Ib);
        else {
          const bb = this._getRGBABufferInternalSizedFormat(eb),
            wb = 0;
          this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, Ub, !0);
          for (let Mb = 0; Mb < 6; Mb++) Ib ? Ob.compressedTexImage2D(Ob.TEXTURE_CUBE_MAP_POSITIVE_X + Mb, wb, this.getCaps().s3tc[Ib], Ub.width, Ub.height, 0, void 0) : Ob.texImage2D(Ob.TEXTURE_CUBE_MAP_POSITIVE_X + Mb, wb, bb, Ub.width, Ub.height, 0, Cb, tb, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Ub, !0), bb && Hb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Bb = this._getSamplingParameters(Lb, Hb);
        return Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_MAG_FILTER, Bb.mag), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_MIN_FILTER, Bb.min), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_WRAP_S, Ob.CLAMP_TO_EDGE), Ob.texParameteri(Ob.TEXTURE_CUBE_MAP, Ob.TEXTURE_WRAP_T, Ob.CLAMP_TO_EDGE), this._bindTextureDirectly(Ob.TEXTURE_CUBE_MAP, null), Ub.generateMipMaps = Hb, Ub.samplingMode = Lb, Ub.isReady = !0, Ub
      }, Hb.ThinEngine.prototype.updateRawCubeTexture = function(wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        wb._bufferViewArray = Mb, wb.format = eb, wb.type = Hb, wb.invertY = pb, wb._compression = Vb;
        const Lb = this._gl,
          Ib = this._getWebGLTextureType(Hb);
        let Ob = this._getInternalFormat(eb);
        const Ub = this._getRGBABufferInternalSizedFormat(Hb);
        let tb = !1;
        Ob === Lb.RGB && (Ob = Lb.RGBA, tb = !0), this._bindTextureDirectly(Lb.TEXTURE_CUBE_MAP, wb, !0), this._unpackFlipY(void 0 === pb || !!pb), wb.width % 4 !== 0 && Lb.pixelStorei(Lb.UNPACK_ALIGNMENT, 1);
        for (let lb = 0; lb < 6; lb++) {
          let eb = Mb[lb];
          Vb ? Lb.compressedTexImage2D(Lb.TEXTURE_CUBE_MAP_POSITIVE_X + lb, gb, this.getCaps().s3tc[Vb], wb.width, wb.height, 0, eb) : (tb && (eb = bb(eb, wb.width, wb.height, Hb)), Lb.texImage2D(Lb.TEXTURE_CUBE_MAP_POSITIVE_X + lb, gb, Ub, wb.width, wb.height, 0, Ob, Ib, eb))
        }(!this.needPOTTextures || (0, lb.i)(wb.width) && (0, lb.i)(wb.height)) && wb.generateMipMaps && 0 === gb && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), wb.isReady = !0
      }, Hb.ThinEngine.prototype.createRawCubeTextureFromUrl = function(wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        let Lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Ib = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Ob = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Ub = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const tb = this._gl,
          Cb = this.createRawCubeTexture(null, eb, Hb, pb, !Vb, Ub, Ob, null);
        Mb?.addPendingData(Cb), Cb.url = wb, Cb.isReady = !1, this._internalTexturesCache.push(Cb);
        const Eb = (bb, wb) => {
            Mb?.removePendingData(Cb), Ib && Ib(bb ? bb.status + " " + bb.statusText : "Failed to parse texture data", wb)
          },
          Fb = async wb => {
            if (!Cb._hardwareTexture) return;
            const eb = gb(wb);
            if (!eb) return;
            const Vb = eb instanceof Promise ? await eb : eb,
              Ib = Cb.width;
            if (lb) {
              const wb = this._getWebGLTextureType(pb);
              let Mb = this._getInternalFormat(Hb);
              const eb = this._getRGBABufferInternalSizedFormat(pb);
              let gb = !1;
              Mb === tb.RGB && (Mb = tb.RGBA, gb = !0), this._bindTextureDirectly(tb.TEXTURE_CUBE_MAP, Cb, !0), this._unpackFlipY(!1);
              const Lb = lb(Vb);
              for (let Hb = 0; Hb < Lb.length; Hb++) {
                const Vb = Ib >> Hb;
                for (let lb = 0; lb < 6; lb++) {
                  let Ib = Lb[Hb][lb];
                  gb && (Ib = bb(Ib, Vb, Vb, pb)), tb.texImage2D(lb, Hb, eb, Vb, Vb, 0, Mb, wb, Ib)
                }
              }
              this._bindTextureDirectly(tb.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Cb, Vb, Hb, pb, Ub);
            Cb.isReady = !0, Mb?.removePendingData(Cb), Cb.onLoadedObservable.notifyObservers(Cb), Cb.onLoadedObservable.clear(), Lb && Lb()
          };
        return this._loadFile(wb, (bb => {
          Fb(bb).catch((bb => {
            Eb(void 0, bb)
          }))
        }), void 0, Mb?.offlineProvider, !0, Eb), Cb
      }, Hb.ThinEngine.prototype.createRawTexture2DArray = wb(!1), Hb.ThinEngine.prototype.createRawTexture3D = wb(!0), Hb.ThinEngine.prototype.updateRawTexture2DArray = Mb(!1), Hb.ThinEngine.prototype.updateRawTexture3D = Mb(!0))
    }();
    var Ib = Mb(41548);
    let Ob = !1;
    Ob || (Ob = !0, Hb.ThinEngine.prototype._readTexturePixelsSync = function(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Ob = this._gl;
      if (!Ob) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const bb = Ob.createFramebuffer();
        if (!bb) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = bb
      }
      Ob.bindFramebuffer(Ob.FRAMEBUFFER, this._dummyFramebuffer), eb > -1 && (bb.is2DArray || bb.is3D) ? Ob.framebufferTextureLayer(Ob.FRAMEBUFFER, Ob.COLOR_ATTACHMENT0, bb._hardwareTexture?.underlyingResource, Hb, eb) : eb > -1 ? Ob.framebufferTexture2D(Ob.FRAMEBUFFER, Ob.COLOR_ATTACHMENT0, Ob.TEXTURE_CUBE_MAP_POSITIVE_X + eb, bb._hardwareTexture?.underlyingResource, Hb) : Ob.framebufferTexture2D(Ob.FRAMEBUFFER, Ob.COLOR_ATTACHMENT0, Ob.TEXTURE_2D, bb._hardwareTexture?.underlyingResource, Hb);
      let Ub = void 0 !== bb.type ? this._getWebGLTextureType(bb.type) : Ob.UNSIGNED_BYTE;
      return gb ? pb || (pb = (0, Ib.m)(bb.type, 4 * wb * Mb)) : Ub === Ob.UNSIGNED_BYTE ? (pb || (pb = new Uint8Array(4 * wb * Mb)), Ub = Ob.UNSIGNED_BYTE) : (pb || (pb = new Float32Array(4 * wb * Mb)), Ub = Ob.FLOAT), Vb && this.flushFramebuffer(), Ob.readPixels(lb, Lb, wb, Mb, Ob.RGBA, Ub, pb), Ob.bindFramebuffer(Ob.FRAMEBUFFER, this._currentFramebuffer), pb
    }, Hb.ThinEngine.prototype._readTexturePixels = function(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb))
    }), (0, Mb(41649).c)();
    let Ub = !1;
    Ub || (Ub = !0, Hb.ThinEngine.prototype._createDepthStencilCubeTexture = function(bb, wb) {
      const Mb = new Vb.e(this, 12);
      if (Mb.isCube = !0, 1 === this.HE) return gb.b.Error("Depth cube texture is not supported by WebGL 1."), Mb;
      const eb = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...wb
        },
        Hb = this._gl;
      this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, Mb, !0), this._setupDepthStencilTexture(Mb, bb, eb.bilinearFiltering, eb.comparisonFunction);
      for (let pb = 0; pb < 6; pb++) eb.generateStencil ? Hb.texImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + pb, 0, Hb.DEPTH24_STENCIL8, bb, bb, 0, Hb.DEPTH_STENCIL, Hb.UNSIGNED_INT_24_8, null) : Hb.texImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + pb, 0, Hb.DEPTH_COMPONENT24, bb, bb, 0, Hb.DEPTH_COMPONENT, Hb.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Mb), Mb
    }, Hb.ThinEngine.prototype._setCubeMapTextureParams = function(bb, wb, Mb) {
      const eb = this._gl;
      eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_MAG_FILTER, eb.LINEAR), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_MIN_FILTER, wb ? eb.LINEAR_MIPMAP_LINEAR : eb.LINEAR), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_WRAP_S, eb.CLAMP_TO_EDGE), eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_WRAP_T, eb.CLAMP_TO_EDGE), bb.samplingMode = wb ? 3 : 2, wb && this.getCaps().textureMaxLevel && void 0 !== Mb && Mb > 0 && (eb.texParameteri(eb.TEXTURE_CUBE_MAP, eb.TEXTURE_MAX_LEVEL, Mb), bb._maxLodLevel = Mb), this._bindTextureDirectly(eb.TEXTURE_CUBE_MAP, null)
    }, Hb.ThinEngine.prototype.createCubeTexture = function(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Vb = arguments.length > 6 ? arguments[6] : void 0,
        Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ob = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Ub = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        tb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Cb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Eb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Fb = this._gl;
      return this.createCubeTextureBase(bb, wb, Mb, !!eb, Hb, pb, Vb, Lb, Ib, Ob, Ub, tb, (bb => this._bindTextureDirectly(Fb.TEXTURE_CUBE_MAP, bb, !0)), ((bb, wb) => {
        const Mb = this.needPOTTextures ? (0, lb.e)(wb[0].width, this._caps.maxCubemapTextureSize) : wb[0].width,
          pb = Mb,
          Lb = [Fb.TEXTURE_CUBE_MAP_POSITIVE_X, Fb.TEXTURE_CUBE_MAP_POSITIVE_Y, Fb.TEXTURE_CUBE_MAP_POSITIVE_Z, Fb.TEXTURE_CUBE_MAP_NEGATIVE_X, Fb.TEXTURE_CUBE_MAP_NEGATIVE_Y, Fb.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Fb.TEXTURE_CUBE_MAP, bb, !0), this._unpackFlipY(!1);
        const Ib = Vb ? this._getInternalFormat(Vb, bb._useSRGBBuffer) : bb._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Fb.RGBA;
        let Ob = Vb ? this._getInternalFormat(Vb) : Fb.RGBA;
        bb._useSRGBBuffer && 1 === this.HE && (Ob = Ib);
        for (let eb = 0; eb < Lb.length; eb++)
          if (wb[eb].width !== Mb || wb[eb].height !== pb) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void gb.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Mb, this._workingCanvas.height = pb, this._workingContext.drawImage(wb[eb], 0, 0, wb[eb].width, wb[eb].height, 0, 0, Mb, pb), Fb.texImage2D(Lb[eb], 0, Ib, Ob, Fb.UNSIGNED_BYTE, this._workingCanvas)
          } else Fb.texImage2D(Lb[eb], 0, Ib, Ob, Fb.UNSIGNED_BYTE, wb[eb]);
        eb || Fb.generateMipmap(Fb.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(bb, !eb), bb.width = Mb, bb.height = pb, bb.isReady = !0, Vb && (bb.format = Vb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear(), Hb && Hb()
      }), !!Cb, Eb)
    }, Hb.ThinEngine.prototype.generateMipMapsForCubemap = function(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb.generateMipMaps) {
        const Mb = this._gl;
        this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, bb, !0), Mb.generateMipmap(Mb.TEXTURE_CUBE_MAP), wb && this._bindTextureDirectly(Mb.TEXTURE_CUBE_MAP, null)
      }
    });
    Mb(41653);
    let tb = !1;
    tb || (tb = !0, Hb.ThinEngine.prototype.setDepthStencilTexture = function(bb, wb, Mb, eb) {
      void 0 !== bb && (wb && (this._boundUniforms[bb] = wb), Mb && Mb.depthStencilTexture ? this._setTexture(bb, Mb, !1, !0, eb) : this._setTexture(bb, null, void 0, void 0, eb))
    });
    let Cb = !1;
    Cb || (Cb = !0, Hb.ThinEngine.prototype.createRenderTargetCubeTexture = function(bb, wb) {
      const Mb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
        eb = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...wb
        };
      eb.generateStencilBuffer = eb.generateDepthBuffer && eb.generateStencilBuffer, (1 !== eb.type || this._caps.textureFloatLinearFiltering) && (2 !== eb.type || this._caps.textureHalfFloatLinearFiltering) || (eb.samplingMode = 1);
      const Hb = this._gl,
        pb = new Vb.e(this, 5);
      this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, pb, !0);
      const lb = this._getSamplingParameters(eb.samplingMode, eb.generateMipMaps);
      1 !== eb.type || this._caps.textureFloat || (eb.type = 0, gb.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MAG_FILTER, lb.mag), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_MIN_FILTER, lb.min), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_S, Hb.CLAMP_TO_EDGE), Hb.texParameteri(Hb.TEXTURE_CUBE_MAP, Hb.TEXTURE_WRAP_T, Hb.CLAMP_TO_EDGE);
      for (let Vb = 0; Vb < 6; Vb++) Hb.texImage2D(Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Vb, 0, this._getRGBABufferInternalSizedFormat(eb.type, eb.format), bb, bb, 0, this._getInternalFormat(eb.format), this._getWebGLTextureType(eb.type), null);
      const Lb = Hb.createFramebuffer();
      return this._bindUnboundFramebuffer(Lb), Mb._depthStencilBuffer = this._setupFramebufferDepthAttachments(eb.generateStencilBuffer, eb.generateDepthBuffer, bb, bb), eb.generateMipMaps && Hb.generateMipmap(Hb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Hb.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Mb._framebuffer = Lb, Mb._generateDepthBuffer = eb.generateDepthBuffer, Mb._generateStencilBuffer = eb.generateStencilBuffer, pb.width = bb, pb.height = bb, pb.isReady = !0, pb.isCube = !0, pb.samples = 1, pb.generateMipMaps = eb.generateMipMaps, pb.samplingMode = eb.samplingMode, pb.type = eb.type, pb.format = eb.format, this._internalTexturesCache.push(pb), Mb.setTextures(pb), Mb
    });
    var Eb = Mb(41662),
      Fb = Mb(41671);
    let Bb = !1;
    Bb || (Bb = !0, Hb.ThinEngine.prototype.createPrefilteredCubeTexture = function(bb, wb, eb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Lb = arguments.length > 6 ? arguments[6] : void 0,
        Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Ob = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Ub = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(bb, wb, null, !1, (async bb => {
        if (!bb) return void(pb && pb(null));
        const lb = bb.texture;
        if (Ob ? bb.info.sphericalPolynomial && (lb._sphericalPolynomial = bb.info.sphericalPolynomial) : lb._sphericalPolynomial = lb._sphericalPolynomial ?? new Eb.i, lb._source = 9, this.getCaps().textureLOD) return void(pb && pb(lb));
        const Lb = this._gl,
          Ib = bb.width;
        if (!Ib) return;
        const {
          DDSTools: Ub
        } = await Mb.e(625).then((() => Mb(53986))), tb = [];
        for (let Mb = 0; Mb < 3; Mb++) {
          const pb = 1 - Mb / 2,
            Ob = Hb,
            Cb = Math.log2(Ib) * eb + Hb,
            Eb = Ob + (Cb - Ob) * pb,
            Bb = Math.round(Math.min(Math.max(Eb, 0), Cb)),
            sb = new Vb.e(this, 2);
          if (sb.type = lb.type, sb.format = lb.format, sb.width = Math.pow(2, Math.max(Math.log2(Ib) - Bb, 0)), sb.height = sb.width, sb.isCube = !0, sb._cachedWrapU = 0, sb._cachedWrapV = 0, this._bindTextureDirectly(Lb.TEXTURE_CUBE_MAP, sb, !0), sb.samplingMode = 2, Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_MAG_FILTER, Lb.LINEAR), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_MIN_FILTER, Lb.LINEAR), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_WRAP_S, Lb.CLAMP_TO_EDGE), Lb.texParameteri(Lb.TEXTURE_CUBE_MAP, Lb.TEXTURE_WRAP_T, Lb.CLAMP_TO_EDGE), bb.isDDS) {
            const wb = bb.info,
              Mb = bb.data;
            this._unpackFlipY(wb.isCompressed), Ub.UploadDDSLevels(this, sb, Mb, wb, !0, 6, Bb)
          } else gb.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Lb.TEXTURE_CUBE_MAP, null);
          const mb = new Fb.b(wb);
          mb._isCube = !0, mb._texture = sb, sb.isReady = !0, tb.push(mb)
        }
        lb._lodTextureHigh = tb[2], lb._lodTextureMid = tb[1], lb._lodTextureLow = tb[0], pb && pb(lb)
      }), lb, Lb, Ib, Ob, eb, Hb, null, void 0, !1, Ub)
    });
    var sb = Mb(41594);
    let mb = !1;
    mb || (mb = !0, Hb.ThinEngine.prototype.createUniformBuffer = function(bb, wb) {
      const Mb = this._gl.createBuffer();
      if (!Mb) throw new Error("Unable to create uniform buffer");
      const eb = new sb.e(Mb);
      return this.bindUniformBuffer(eb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), eb.references = 1, eb
    }, Hb.ThinEngine.prototype.createDynamicUniformBuffer = function(bb, wb) {
      const Mb = this._gl.createBuffer();
      if (!Mb) throw new Error("Unable to create dynamic uniform buffer");
      const eb = new sb.e(Mb);
      return this.bindUniformBuffer(eb), bb instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, bb, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(bb), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), eb.references = 1, eb
    }, Hb.ThinEngine.prototype.updateUniformBuffer = function(bb, wb, Mb, eb) {
      this.bindUniformBuffer(bb), void 0 === Mb && (Mb = 0), void 0 === eb ? wb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Mb, wb) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Mb, new Float32Array(wb)) : wb instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, wb.subarray(Mb, Mb + eb)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(wb).subarray(Mb, Mb + eb)), this.bindUniformBuffer(null)
    }, Hb.ThinEngine.prototype.bindUniformBuffer = function(bb) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, bb ? bb.underlyingResource : null)
    }, Hb.ThinEngine.prototype.bindUniformBufferBase = function(bb, wb, Mb) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, wb, bb ? bb.underlyingResource : null)
    }, Hb.ThinEngine.prototype.bindUniformBlock = function(bb, wb, Mb) {
      const eb = bb.program,
        Hb = this._gl.getUniformBlockIndex(eb, wb);
      4294967295 !== Hb && this._gl.uniformBlockBinding(eb, Hb, Mb)
    });
    var hb = Mb(41535),
      zb = Mb(41572);
    let Xb = !1;
    Xb || (Xb = !0, zb.d.prototype.displayLoadingUI = function() {
      if (!(0, hb.j)()) return;
      const bb = this.loadingScreen;
      bb && bb.displayLoadingUI()
    }, zb.d.prototype.hideLoadingUI = function() {
      if (!(0, hb.j)()) return;
      const bb = this._loadingScreen;
      bb && bb.hideLoadingUI()
    }, Object.defineProperty(zb.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = zb.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(bb) {
        this._loadingScreen = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(zb.d.prototype, "loadingUIText", {
      set: function(bb) {
        this.loadingScreen.loadingUIText = bb
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(zb.d.prototype, "loadingUIBackgroundColor", {
      set: function(bb) {
        this.loadingScreen.loadingUIBackgroundColor = bb
      },
      enumerable: !0,
      configurable: !0
    })), (0, Mb(41633).c)();
    let xb = !1;
    xb || (xb = !0, zb.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, zb.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, zb.d.prototype.setDepthFunction = function(bb) {
      this._depthCullingState.depthFunc = bb
    }, zb.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, zb.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, zb.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, zb.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, zb.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, zb.d.prototype.setDepthWrite = function(bb) {
      this._depthCullingState.depthMask = bb
    }, zb.d.prototype.setAlphaConstants = function(bb, wb, Mb, eb) {
      this._alphaState.setAlphaBlendConstants(bb, wb, Mb, eb)
    }, zb.d.prototype.getAlphaMode = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[bb]
    }, zb.d.prototype.getAlphaEquation = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[bb]
    });
    let jb = !1;
    jb || (jb = !0, zb.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, zb.d.prototype.setStencilBuffer = function(bb) {
      this._stencilState.stencilTest = bb
    }, zb.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, zb.d.prototype.setStencilMask = function(bb) {
      this._stencilState.stencilMask = bb
    }, zb.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, zb.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, zb.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, zb.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, zb.d.prototype.setStencilFunction = function(bb) {
      this._stencilState.stencilFunc = bb
    }, zb.d.prototype.setStencilBackFunction = function(bb) {
      this._stencilState.stencilBackFunc = bb
    }, zb.d.prototype.setStencilFunctionReference = function(bb) {
      this._stencilState.stencilFuncRef = bb
    }, zb.d.prototype.setStencilFunctionMask = function(bb) {
      this._stencilState.stencilFuncMask = bb
    }, zb.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, zb.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, zb.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, zb.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, zb.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, zb.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, zb.d.prototype.setStencilOperationFail = function(bb) {
      this._stencilState.stencilOpStencilFail = bb
    }, zb.d.prototype.setStencilBackOperationFail = function(bb) {
      this._stencilState.stencilBackOpStencilFail = bb
    }, zb.d.prototype.setStencilOperationDepthFail = function(bb) {
      this._stencilState.stencilOpDepthFail = bb
    }, zb.d.prototype.setStencilBackOperationDepthFail = function(bb) {
      this._stencilState.stencilBackOpDepthFail = bb
    }, zb.d.prototype.setStencilOperationPass = function(bb) {
      this._stencilState.stencilOpStencilDepthPass = bb
    }, zb.d.prototype.setStencilBackOperationPass = function(bb) {
      this._stencilState.stencilBackOpStencilDepthPass = bb
    }, zb.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, zb.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Mb(41709);
    let Kb = !1;
    Kb || (Kb = !0, zb.d.prototype.createDepthStencilTexture = function(bb, wb, Mb) {
      if (wb.isCube) {
        const Mb = bb.width || bb;
        return this._createDepthStencilCubeTexture(Mb, wb)
      }
      return this._createDepthStencilTexture(bb, wb, Mb)
    });
    Mb(41713), Mb(41749);
    let rb = !1;
    rb || (rb = !0, Hb.ThinEngine.prototype.enableScissor = function(bb, wb, Mb, eb) {
      const Hb = this._gl;
      Hb.enable(Hb.SCISSOR_TEST), Hb.scissor(bb, wb, Mb, eb)
    }, Hb.ThinEngine.prototype.disableScissor = function() {
      const bb = this._gl;
      bb.disable(bb.SCISSOR_TEST)
    })
  },
  41499: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => zb
    });
    var eb = Mb(41506),
      Hb = Mb(38313),
      pb = Mb(41511),
      Vb = Mb(41581);
    class gb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new lb(bb)
      }
      sampleFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const wb = bb - this._lastFrameTimeMs;
            this._rollingFrameTime.add(wb)
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
    class lb {
      constructor(bb) {
        this._samples = new Array(bb), this.reset()
      }
      add(bb) {
        let wb;
        if (this.isSaturated()) {
          const bb = this._samples[this._pos];
          wb = bb - this.average, this.average -= wb / (this._sampleCount - 1), this._m2 -= wb * (bb - this.average)
        } else this._sampleCount++;
        wb = bb - this.average, this.average += wb / this._sampleCount, this._m2 += wb * (bb - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = bb, this._pos++, this._pos %= this._samples.length
      }
      history(bb) {
        if (bb >= this._sampleCount || bb >= this._samples.length) return 0;
        const wb = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(wb - bb)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(bb) {
        const wb = this._samples.length;
        return (bb % wb + wb) % wb
      }
    }
    var Lb = Mb(41594),
      Ib = Mb(39971),
      Ob = Mb(41618),
      Ub = Mb(41572),
      tb = Mb(41535);

    function Cb(bb) {
      const wb = function(bb) {
        if (!(0, tb.f)() || !document.body) return null;
        const wb = document.createElement("span");
        wb.textContent = "Hg", wb.style.font = bb;
        const Mb = document.createElement("div");
        Mb.style.display = "inline-block", Mb.style.width = "1px", Mb.style.height = "0px", Mb.style.verticalAlign = "bottom";
        const eb = document.createElement("div");
        let Hb, pb;
        eb.style.whiteSpace = "nowrap", eb.appendChild(wb), eb.appendChild(Mb), document.body.appendChild(eb);
        try {
          pb = Mb.getBoundingClientRect().top - wb.getBoundingClientRect().top, Mb.style.verticalAlign = "baseline", Hb = Mb.getBoundingClientRect().top - wb.getBoundingClientRect().top
        } finally {
          document.body.removeChild(eb)
        }
        const Vb = {
          ascent: Hb,
          height: pb,
          descent: pb - Hb
        };
        return Eb(Vb) ? Vb : null
      }(bb);
      if (wb) return wb;
      const Mb = function(bb) {
        let wb = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? wb = new OffscreenCanvas(64, 64) : (0, tb.f)() && "function" === typeof document.createElement && (wb = document.createElement("canvas"), wb.width = 64, wb.height = 64);
          const Mb = wb?.getContext("2d");
          if (!Mb) return null;
          Mb.font = bb;
          const eb = Mb.measureText("Hg"),
            Hb = Number(eb.actualBoundingBoxAscent ?? eb.fontBoundingBoxAscent),
            pb = Number(eb.actualBoundingBoxDescent ?? eb.fontBoundingBoxDescent),
            Vb = {
              ascent: Hb,
              height: Hb + pb,
              descent: pb
            };
          return Eb(Vb) ? Vb : null
        } catch {
          return null
        } finally {
          const bb = wb;
          "function" === typeof bb?.dispose && bb.dispose()
        }
      }(bb);
      return Mb || function(bb) {
        const wb = Math.max(1, function(bb) {
            const wb = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(bb || ""));
            return wb ? Number(wb[1]) : 16
          }(bb)),
          Mb = .8 * wb,
          eb = .2 * wb;
        return {
          ascent: Mb,
          height: Mb + eb,
          descent: eb
        }
      }(bb)
    }

    function Eb(bb) {
      return Number.isFinite(bb.ascent) && Number.isFinite(bb.height) && Number.isFinite(bb.descent) && bb.height > 0
    }

    function Fb(bb) {
      if (bb.requestPointerLock) {
        const wb = bb.requestPointerLock();
        wb instanceof Promise ? wb.then((() => {
          bb.focus()
        })).catch((() => {})) : bb.focus()
      }
    }
    var Bb = Mb(41631),
      sb = Mb(41565),
      mb = Mb(41633),
      hb = Mb(41638);
    class zb extends pb.ThinEngine {
      static get NpmPackage() {
        return Ub.d.NpmPackage
      }
      static get Version() {
        return Ub.d.Version
      }
      static get Instances() {
        return Hb.e.Instances
      }
      static get LastCreatedEngine() {
        return Hb.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Hb.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(bb) {
        return Ub.d.DefaultLoadingScreenFactory(bb)
      }
      get _supportsHardwareTextureRescaling() {
        return !!zb._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, mb.c)(), (0, hb.e)(), super(bb, wb, Mb, eb), this._performanceMonitor = new gb, this._drawCalls = new Bb.d, bb && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(bb) {
        super._sharedInit(bb),
          function(bb, wb, Mb) {
            bb._onCanvasFocus = () => {
              bb.onCanvasFocusObservable.notifyObservers(bb)
            }, bb._onCanvasBlur = () => {
              bb.onCanvasBlurObservable.notifyObservers(bb)
            }, bb._onCanvasContextMenu = wb => {
              bb.disableContextMenu && wb.preventDefault()
            }, wb.addEventListener("focus", bb._onCanvasFocus), wb.addEventListener("blur", bb._onCanvasBlur), wb.addEventListener("contextmenu", bb._onCanvasContextMenu), bb._onBlur = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.disable(), bb._windowIsBackground = !0
            }, bb._onFocus = () => {
              bb.disablePerformanceMonitorInBackground && bb.performanceMonitor.enable(), bb._windowIsBackground = !1
            }, bb._onCanvasPointerOut = Mb => {
              document.elementFromPoint(Mb.clientX, Mb.clientY) !== wb && bb.onCanvasPointerOutObservable.notifyObservers(Mb)
            };
            const eb = bb.getHostWindow();
            eb && "function" === typeof eb.addEventListener && (eb.addEventListener("blur", bb._onBlur), eb.addEventListener("focus", bb._onFocus)), wb.addEventListener("pointerout", bb._onCanvasPointerOut), Mb.doNotHandleTouchAction || function(bb) {
              bb && bb.setAttribute && (bb.setAttribute("touch-action", "none"), bb.style.touchAction = "none", bb.style.webkitTapHighlightColor = "transparent")
            }(wb), !Ub.d.audioEngine && Mb.audioEngine && Ub.d.AudioEngineFactory && (Ub.d.audioEngine = Ub.d.AudioEngineFactory(bb.getRenderingCanvas(), bb.getAudioContext(), bb.getAudioDestination())), (0, tb.f)() && (bb._onFullscreenChange = () => {
              bb.isFullscreen = !!document.fullscreenElement, bb.isFullscreen && bb._pointerLockRequested && wb && Fb(wb)
            }, document.addEventListener("fullscreenchange", bb._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", bb._onFullscreenChange, !1), bb._onPointerLockChange = () => {
              bb.isPointerLock = document.pointerLockElement === wb
            }, document.addEventListener("pointerlockchange", bb._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", bb._onPointerLockChange, !1)), bb.enableOfflineSupport = void 0 !== Ub.d.OfflineProviderFactory, bb._deterministicLockstep = !!Mb.deterministicLockstep, bb._lockstepMaxSteps = Mb.lockstepMaxSteps || 0, bb._timeStep = Mb.timeStep || 1 / 60
          }(this, bb, this._creationOptions)
      }
      resizeImageBitmap(bb, wb, Mb) {
        return function(bb, wb, Mb, eb) {
          const Hb = bb.createCanvas(Mb, eb).getContext("2d");
          if (!Hb) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Hb.drawImage(wb, 0, 0), Hb.getImageData(0, 0, Mb, eb).data
        }(this, bb, wb, Mb)
      }
      async _createImageBitmapFromSource(bb, wb) {
        return await async function(bb, wb, Mb) {
          return await new Promise(((eb, Hb) => {
            const pb = new Image;
            pb.onload = () => {
              pb.decode().then((() => {
                bb.createImageBitmap(pb, Mb).then((bb => {
                  eb(bb)
                }))
              }))
            }, pb.onerror = () => {
              Hb(`Error loading image ${pb.src}`)
            }, pb.src = wb
          }))
        }(this, bb, wb)
      }
      switchFullscreen(bb) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(bb)
      }
      enterFullscreen(bb) {
        this.isFullscreen || (this._pointerLockRequested = bb, this._renderingCanvas && function(bb) {
          const wb = bb.requestFullscreen || bb.webkitRequestFullscreen;
          wb && wb.call(bb)
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
      setDirectViewport(bb, wb, Mb, eb) {
        const Hb = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(bb, wb, Mb, eb), Hb
      }
      scissorClear(bb, wb, Mb, eb, Hb) {
        this.enableScissor(bb, wb, Mb, eb), this.clear(Hb, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(bb) {
        const wb = this._gl.getAttachedShaders(bb);
        return wb ? this._gl.getShaderSource(wb[0]) : null
      }
      getFragmentShaderSource(bb) {
        const wb = this._gl.getAttachedShaders(bb);
        return wb ? this._gl.getShaderSource(wb[1]) : null
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
        return Cb(bb)
      }
      enterPointerlock() {
        this._renderingCanvas && Fb(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      jR() {
        this._measureFps(), super.jR()
      }
      _deletePipelineContext(bb) {
        const wb = bb;
        wb && wb.program && wb.transformFeedback && (this.deleteTransformFeedback(wb.transformFeedback), wb.transformFeedback = null), super._deletePipelineContext(bb)
      }
      createShaderProgram(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Hb = Hb || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Vb = super.createShaderProgram(bb, wb, Mb, eb, Hb, pb);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Vb
      }
      _createShaderProgram(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const pb = eb.createProgram();
        if (bb.program = pb, !pb) throw new Error("Unable to create program");
        if (eb.attachShader(pb, wb), eb.attachShader(pb, Mb), this.HE > 1 && Hb) {
          const wb = this.createTransformFeedback();
          this.bindTransformFeedback(wb), this.setTranformFeedbackVaryings(pb, Hb), bb.transformFeedback = wb
        }
        return eb.linkProgram(pb), this.HE > 1 && Hb && this.bindTransformFeedback(null), bb.context = eb, bb.vertexShader = wb, bb.fragmentShader = Mb, bb.isParallelCompiled || this._finalizePipelineContext(bb), pb
      }
      _releaseTexture(bb) {
        super._releaseTexture(bb)
      }
      _releaseRenderTargetWrapper(bb) {
        super._releaseRenderTargetWrapper(bb);
        for (const wb of this.scenes) {
          for (const Mb of wb.postProcesses) Mb._outputTexture === bb && (Mb._outputTexture = null);
          for (const Mb of wb.cameras)
            for (const wb of Mb._postProcesses) wb && wb._outputTexture === bb && (wb._outputTexture = null)
        }
      }
      _rescaleTexture(bb, wb, Mb, eb, Hb) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const pb = this.createRenderTargetTexture({
          width: wb.width,
          height: wb.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && zb._RescalePostProcessFactory && (this._rescalePostProcess = zb._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Vb = () => {
              this._rescalePostProcess.onApply = function(wb) {
                wb._bindTexture("textureSampler", bb)
              };
              let Vb = Mb;
              Vb || (Vb = this.scenes[this.scenes.length - 1]), Vb.postProcessManager.directRender([this._rescalePostProcess], pb, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, wb, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, eb, 0, 0, wb.width, wb.height, 0), this.unBindFramebuffer(pb), pb.dispose(), Hb && Hb()
            },
            gb = this._rescalePostProcess.getEffect();
          gb ? gb.executeWhenCompiled(Vb) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((bb => {
            bb.executeWhenCompiled(Vb)
          }))
        }
      }
      wrapWebGLTexture(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Vb = new Ob.e(bb, this._gl),
          gb = new eb.e(this, 15, !0);
        return gb._hardwareTexture = Vb, gb.baseWidth = Hb, gb.baseHeight = pb, gb.width = Hb, gb.height = pb, gb.isReady = !0, gb.useMipMaps = wb, this.updateTextureSamplingMode(Mb, gb), gb
      }
      updateWrappedWebGLTexture(bb, wb) {
        if (15 !== bb.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const eb of this._renderTargetWrapperCache)
          if (eb.textures?.includes(bb)) {
            if (eb.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (eb._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } bb._hardwareTexture = new Ob.e(wb, this._gl), bb.isReady = !0, bb._cachedCoordinatesMode = null, bb._cachedWrapU = null, bb._cachedWrapV = null, bb._cachedWrapR = null, bb._cachedAnisotropicFilteringLevel = null;
        for (const eb in this._boundTexturesCache) this._boundTexturesCache[eb] === bb && (this._boundTexturesCache[eb] = null);
        this.updateTextureSamplingMode(bb.samplingMode, bb);
        const Mb = this._gl;
        for (const eb of this._renderTargetWrapperCache) {
          if (eb.texture !== bb) continue;
          const Hb = eb,
            pb = eb.samples,
            Vb = pb > 1;
          Hb._framebuffer && Mb.deleteFramebuffer(Hb._framebuffer), !Vb && Hb._depthStencilBuffer && (Mb.deleteRenderbuffer(Hb._depthStencilBuffer), Hb._depthStencilBuffer = null);
          const gb = this._currentFramebuffer,
            lb = Mb.createFramebuffer();
          this._bindUnboundFramebuffer(lb), Mb.framebufferTexture2D(Mb.FRAMEBUFFER, Mb.COLOR_ATTACHMENT0, Mb.TEXTURE_2D, wb, 0), Vb || (Hb._depthStencilBuffer = this._setupFramebufferDepthAttachments(eb._generateStencilBuffer, eb._generateDepthBuffer, eb.width, eb.height)), this._bindUnboundFramebuffer(gb), Hb._framebuffer = lb, Vb && (eb._samples = 1, this.updateRenderTargetTextureSampleCount(Hb, pb))
        }
      }
      _uploadImageToTexture(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Hb = this._gl,
          pb = this._getWebGLTextureType(bb.type),
          Vb = this._getInternalFormat(bb.format),
          gb = this._getRGBABufferInternalSizedFormat(bb.type, Vb),
          lb = bb.isCube ? Hb.TEXTURE_CUBE_MAP : Hb.TEXTURE_2D;
        this._bindTextureDirectly(lb, bb, !0), this._unpackFlipY(bb.invertY);
        let Lb = Hb.TEXTURE_2D;
        bb.isCube && (Lb = Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Mb), Hb.texImage2D(Lb, eb, gb, Vb, pb, wb), this._bindTextureDirectly(lb, null, !0)
      }
      updateTextureComparisonFunction(bb, wb) {
        if (1 === this.HE) return void Ib.b.Error("WebGL 1 does not support texture comparison.");
        const Mb = this._gl;
        bb.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, bb, !0), 0 === wb ? (Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_COMPARE_FUNC, 515), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_COMPARE_MODE, Mb.NONE)) : (Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_COMPARE_FUNC, wb), Mb.texParameteri(Mb.TEXTURE_CUBE_MAP, Mb.TEXTURE_COMPARE_MODE, Mb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, bb, !0), 0 === wb ? (Mb.texParameteri(Mb.TEXTURE_2D, Mb.TEXTURE_COMPARE_FUNC, 515), Mb.texParameteri(Mb.TEXTURE_2D, Mb.TEXTURE_COMPARE_MODE, Mb.NONE)) : (Mb.texParameteri(Mb.TEXTURE_2D, Mb.TEXTURE_COMPARE_FUNC, wb), Mb.texParameteri(Mb.TEXTURE_2D, Mb.TEXTURE_COMPARE_MODE, Mb.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), bb._comparisonFunction = wb
      }
      createInstancesBuffer(bb) {
        const wb = this._gl.createBuffer();
        if (!wb) throw new Error("Unable to create instance buffer");
        const Mb = new Lb.e(wb);
        return Mb.qO = bb, this.bindArrayBuffer(Mb), this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, this._gl.DYNAMIC_DRAW), Mb.references = 1, Mb
      }
      deleteInstancesBuffer(bb) {
        this._gl.deleteBuffer(bb)
      }
      async _clientWaitAsync(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const eb = this._gl;
        return await new Promise(((Hb, pb) => {
          (0, sb.e)((() => {
            const Mb = eb.clientWaitSync(bb, wb, 0);
            if (Mb == eb.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Mb != eb.TIMEOUT_EXPIRED
          }), Hb, pb, Mb)
        }))
      }
      _readPixelsAsync(bb, wb, Mb, eb, Hb, pb, Vb) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const gb = this._gl,
          lb = gb.createBuffer();
        gb.bindBuffer(gb.PIXEL_PACK_BUFFER, lb), gb.bufferData(gb.PIXEL_PACK_BUFFER, Vb.byteLength, gb.STREAM_READ), gb.readPixels(bb, wb, Mb, eb, Hb, pb, 0), gb.bindBuffer(gb.PIXEL_PACK_BUFFER, null);
        const Lb = gb.fenceSync(gb.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Lb ? (gb.flush(), this._clientWaitAsync(Lb, 0, 10).then((() => (gb.deleteSync(Lb), gb.bindBuffer(gb.PIXEL_PACK_BUFFER, lb), gb.getBufferSubData(gb.PIXEL_PACK_BUFFER, 0, Vb), gb.bindBuffer(gb.PIXEL_PACK_BUFFER, null), gb.deleteBuffer(lb), Vb)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(bb, wb) {
            1 === Hb.e.Instances.length && Ub.d.audioEngine && (Ub.d.audioEngine.dispose(), Ub.d.audioEngine = null);
            const Mb = bb.getHostWindow();
            Mb && "function" === typeof Mb.removeEventListener && (Mb.removeEventListener("blur", bb._onBlur), Mb.removeEventListener("focus", bb._onFocus)), wb && (wb.removeEventListener("focus", bb._onCanvasFocus), wb.removeEventListener("blur", bb._onCanvasBlur), wb.removeEventListener("pointerout", bb._onCanvasPointerOut), wb.removeEventListener("contextmenu", bb._onCanvasContextMenu)), (0, tb.f)() && (document.removeEventListener("fullscreenchange", bb._onFullscreenChange), document.removeEventListener("mozfullscreenchange", bb._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", bb._onFullscreenChange), document.removeEventListener("msfullscreenchange", bb._onFullscreenChange), document.removeEventListener("pointerlockchange", bb._onPointerLockChange), document.removeEventListener("mspointerlockchange", bb._onPointerLockChange), document.removeEventListener("mozpointerlockchange", bb._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", bb._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    zb.ALPHA_DISABLE = 0, zb.ALPHA_ADD = 1, zb.ALPHA_COMBINE = 2, zb.ALPHA_SUBTRACT = 3, zb.ALPHA_MULTIPLY = 4, zb.ALPHA_MAXIMIZED = 5, zb.ALPHA_ONEONE = 6, zb.ALPHA_PREMULTIPLIED = 7, zb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, zb.ALPHA_INTERPOLATE = 9, zb.ALPHA_SCREENMODE = 10, zb.DELAYLOADSTATE_NONE = 0, zb.DELAYLOADSTATE_LOADED = 1, zb.DELAYLOADSTATE_LOADING = 2, zb.DELAYLOADSTATE_NOTLOADED = 4, zb.NEVER = 512, zb.ALWAYS = 519, zb.LESS = 513, zb.EQUAL = 514, zb.LEQUAL = 515, zb.GREATER = 516, zb.GEQUAL = 518, zb.NOTEQUAL = 517, zb.KEEP = 7680, zb.REPLACE = 7681, zb.INCR = 7682, zb.DECR = 7683, zb.INVERT = 5386, zb.INCR_WRAP = 34055, zb.DECR_WRAP = 34056, zb.TEXTURE_CLAMP_ADDRESSMODE = 0, zb.TEXTURE_WRAP_ADDRESSMODE = 1, zb.TEXTURE_MIRROR_ADDRESSMODE = 2, zb.TEXTUREFORMAT_ALPHA = 0, zb.TEXTUREFORMAT_LUMINANCE = 1, zb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, zb.TEXTUREFORMAT_RGB = 4, zb.TEXTUREFORMAT_RGBA = 5, zb.TEXTUREFORMAT_RED = 6, zb.TEXTUREFORMAT_R = 6, zb.TEXTUREFORMAT_R16_UNORM = 33322, zb.TEXTUREFORMAT_RG16_UNORM = 33324, zb.TEXTUREFORMAT_RGB16_UNORM = 32852, zb.TEXTUREFORMAT_RGBA16_UNORM = 32859, zb.TEXTUREFORMAT_R16_SNORM = 36760, zb.TEXTUREFORMAT_RG16_SNORM = 36761, zb.TEXTUREFORMAT_RGB16_SNORM = 36762, zb.TEXTUREFORMAT_RGBA16_SNORM = 36763, zb.TEXTUREFORMAT_RG = 7, zb.TEXTUREFORMAT_RED_INTEGER = 8, zb.TEXTUREFORMAT_R_INTEGER = 8, zb.TEXTUREFORMAT_RG_INTEGER = 9, zb.TEXTUREFORMAT_RGB_INTEGER = 10, zb.TEXTUREFORMAT_RGBA_INTEGER = 11, zb.TEXTURETYPE_UNSIGNED_BYTE = 0, zb.TEXTURETYPE_UNSIGNED_INT = 0, zb.TEXTURETYPE_FLOAT = 1, zb.TEXTURETYPE_HALF_FLOAT = 2, zb.TEXTURETYPE_BYTE = 3, zb.TEXTURETYPE_SHORT = 4, zb.TEXTURETYPE_UNSIGNED_SHORT = 5, zb.TEXTURETYPE_INT = 6, zb.TEXTURETYPE_UNSIGNED_INTEGER = 7, zb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, zb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, zb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, zb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, zb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, zb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, zb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, zb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, zb.TEXTURE_NEAREST_SAMPLINGMODE = 1, zb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, zb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, zb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, zb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, zb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, zb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, zb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, zb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, zb.TEXTURE_NEAREST_LINEAR = 7, zb.TEXTURE_NEAREST_NEAREST = 1, zb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, zb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, zb.TEXTURE_LINEAR_LINEAR = 2, zb.TEXTURE_LINEAR_NEAREST = 12, zb.TEXTURE_EXPLICIT_MODE = 0, zb.TEXTURE_SPHERICAL_MODE = 1, zb.TEXTURE_PLANAR_MODE = 2, zb.TEXTURE_CUBIC_MODE = 3, zb.TEXTURE_PROJECTION_MODE = 4, zb.TEXTURE_SKYBOX_MODE = 5, zb.TEXTURE_INVCUBIC_MODE = 6, zb.TEXTURE_EQUIRECTANGULAR_MODE = 7, zb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, zb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, zb.SCALEMODE_FLOOR = 1, zb.SCALEMODE_NEAREST = 2, zb.SCALEMODE_CEILING = 3
  },
  41660: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(41623);
    class Hb {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = bb, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, bb && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, eb.d)(bb.format))
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
        const wb = this._textures[bb],
          Mb = this._layerIndices?.[bb] ?? 0,
          eb = this._faceIndices?.[bb] ?? 0;
        return wb.isCube ? 6 * Mb + eb : wb.is3D ? 0 : Mb
      }
      get samples() {
        return this._samples
      }
      setSamples(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === bb && !Mb) return bb;
        const eb = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, bb, wb) : this._engine.updateRenderTargetTextureSampleCount(this, bb);
        return this._samples = bb, eb
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(bb, wb, Mb, eb, Hb) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = bb, this._isCube = wb, this._size = Mb, this._engine = eb, this._depthStencilTexture = null, this.label = Hb
      }
      setTextures(bb) {
        Array.isArray(bb) ? this._textures = bb : this._textures = bb ? [bb] : null
      }
      setTexture(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[wb] !== bb && (this._textures[wb] && Mb && this._textures[wb].dispose(), this._textures[wb] = bb)
      }
      setLayerAndFaceIndices(bb, wb) {
        this._layerIndices = bb, this._faceIndices = wb
      }
      setLayerAndFaceIndex() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== wb && wb >= 0 && (this._layerIndices[bb] = wb), void 0 !== Mb && Mb >= 0 && (this._faceIndices[bb] = Mb)
      }
      createDepthStencilTexture() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Mb, this._depthStencilTextureLabel = pb, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: wb,
          comparisonFunction: bb,
          generateStencil: Mb,
          isCube: this._isCube,
          samples: eb,
          depthTextureFormat: Hb,
          label: pb
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
          const wb = this.textures;
          if (wb && wb.length > 0) {
            let Mb = !1,
              eb = wb.length,
              Hb = -1;
            const pb = wb[wb.length - 1]._source;
            14 !== pb && 12 !== pb || (Mb = !0, Hb = wb[wb.length - 1].format, eb--);
            const Vb = [],
              gb = [],
              lb = [],
              Lb = [],
              Ib = [],
              Ob = [],
              Ub = [],
              tb = {};
            for (let bb = 0; bb < eb; ++bb) {
              const Mb = wb[bb];
              Vb.push(Mb.samplingMode), gb.push(Mb.type), lb.push(Mb.format);
              void 0 !== tb[Mb.uniqueId] ? (Lb.push(-1), Ub.push(0)) : (tb[Mb.uniqueId] = bb, Mb.is2DArray ? (Lb.push(35866), Ub.push(Mb.depth)) : Mb.isCube ? (Lb.push(34067), Ub.push(0)) : Mb.is3D ? (Lb.push(32879), Ub.push(Mb.depth)) : (Lb.push(3553), Ub.push(0))), this._faceIndices && Ib.push(this._faceIndices[bb] ?? 0), this._layerIndices && Ob.push(this._layerIndices[bb] ?? 0)
            }
            const Cb = {
                samplingModes: Vb,
                generateMipMaps: wb[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Mb,
                depthTextureFormat: Hb,
                types: gb,
                formats: lb,
                Clb: eb,
                targetTypes: Lb,
                faceIndex: Ib,
                layerIndex: Ob,
                layerCounts: Ub,
                label: this.label
              },
              Eb = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            bb = this._engine.createMultipleRenderTarget(Eb, Cb);
            for (let Fb = 0; Fb < eb; ++Fb) {
              if (-1 !== Lb[Fb]) continue;
              const Mb = tb[wb[Fb].uniqueId];
              bb.setTexture(bb.textures[Mb], Fb)
            }
          }
        } else {
          const wb = {};
          if (wb.generateDepthBuffer = this._generateDepthBuffer, wb.generateMipMaps = this.texture?.generateMipMaps ?? !1, wb.generateStencilBuffer = this._generateStencilBuffer, wb.samplingMode = this.texture?.samplingMode, wb.type = this.texture?.type, wb.format = this.texture?.format, wb.noColorAttachment = !this._textures, wb.label = this.label, this.isCube) bb = this._engine.createRenderTargetCubeTexture(this.width, wb);
          else {
            const Mb = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            bb = this._engine.createRenderTargetTexture(Mb, wb)
          }
          bb.texture && (bb.texture.isReady = !0)
        }
        return bb
      }
      _swapRenderTargetWrapper(bb) {
        if (this._textures && bb._textures)
          for (let wb = 0; wb < this._textures.length; ++wb) this._textures[wb]._swapAndDie(bb._textures[wb], !1), bb._textures[wb].isReady = !0;
        this._depthStencilTexture && bb._depthStencilTexture && (this._depthStencilTexture._swapAndDie(bb._depthStencilTexture), bb._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const bb = this._cloneRenderTargetWrapper();
        if (bb) {
          if (this._depthStencilTexture) {
            const wb = this._depthStencilTexture.samplingMode,
              Mb = this._depthStencilTexture.format,
              eb = 2 === wb || 3 === wb || 11 === wb;
            bb.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, eb, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Mb, this._depthStencilTextureLabel)
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
  42102: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static get ForceFullSceneLoadingForIncremental() {
        return eb._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(bb) {
        eb._ForceFullSceneLoadingForIncremental = bb
      }
      static get ShowLoadingScreen() {
        return eb._ShowLoadingScreen
      }
      static set ShowLoadingScreen(bb) {
        eb._ShowLoadingScreen = bb
      }
      static get loggingLevel() {
        return eb._LoggingLevel
      }
      static set loggingLevel(bb) {
        eb._LoggingLevel = bb
      }
      static get CleanBoneMatrixWeights() {
        return eb._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(bb) {
        eb._CleanBoneMatrixWeights = bb
      }
    }
    eb._ForceFullSceneLoadingForIncremental = !1, eb._ShowLoadingScreen = !0, eb._CleanBoneMatrixWeights = !1, eb._LoggingLevel = 0
  },
  41755: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(39971);
    const Hb = new Map;

    function pb(bb, wb) {
      (function(bb) {
        return Hb.delete(bb)
      })(bb) && eb.b.Warn(`Extension with the name '${bb}' already exists`), Hb.set(bb, wb)
    }

    function Vb(bb, wb) {
      "image/ktx" !== wb && "image/ktx2" !== wb || (bb = ".ktx"), Hb.has(bb) || (bb.endsWith(".ies") && pb(".ies", (async () => await Mb.e(628).then((() => Mb(53994))).then((bb => new bb._IESTextureLoader)))), bb.endsWith(".dds") && pb(".dds", (async () => await Mb.e(626).then((() => Mb(53998))).then((bb => new bb._DDSTextureLoader)))), bb.endsWith(".basis") && pb(".basis", (async () => await Mb.e(629).then((() => Mb(54007))).then((bb => new bb._BasisTextureLoader)))), bb.endsWith(".env") && pb(".env", (async () => await Promise.all([Mb.e(630), Mb.e(627)]).then((() => Mb(54015))).then((bb => new bb._ENVTextureLoader)))), bb.endsWith(".hdr") && pb(".hdr", (async () => await Mb.e(631).then((() => Mb(54072))).then((bb => new bb._HDRTextureLoader)))), (bb.endsWith(".ktx") || bb.endsWith(".ktx2")) && (pb(".ktx", (async () => await Mb.e(632).then((() => Mb(54075))).then((bb => new bb._KTXTextureLoader)))), pb(".ktx2", (async () => await Mb.e(632).then((() => Mb(54075))).then((bb => new bb._KTXTextureLoader))))), bb.endsWith(".tga") && pb(".tga", (async () => await Mb.e(633).then((() => Mb(54086))).then((bb => new bb._TGATextureLoader)))), bb.endsWith(".exr") && pb(".exr", (async () => await Mb.e(634).then((() => Mb(54094))).then((bb => new bb._ExrTextureLoader)))));
      const eb = Hb.get(bb);
      return eb ? Promise.resolve(eb(wb)) : null
    }
  },
  42124: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => Lb
    });
    var eb = Mb(41963),
      Hb = Mb(41705),
      pb = Mb(38333);
    class Vb extends eb.b {
      get Lwb() {
        return this._subMaterials
      }
      set Lwb(bb) {
        this._subMaterials = bb, this._hookArray(bb)
      }
      getChildren() {
        return this.Lwb
      }
      constructor(bb, wb) {
        super(bb, wb, !0), this._waitingSubMaterialsUniqueIds = [], this.RJ().addMultiMaterial(this), this.Lwb = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(bb) {
        var wb = this;
        const Mb = bb.push;
        bb.push = function() {
          for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
          const Vb = Mb.apply(bb, Hb);
          return wb._markAllSubMeshesAsTexturesDirty(), Vb
        };
        const eb = bb.splice;
        bb.splice = (wb, Mb) => {
          const Hb = eb.call(bb, wb, Mb ?? bb.length);
          return this._markAllSubMeshesAsTexturesDirty(), Hb
        }
      }
      getSubMaterial(bb) {
        return bb < 0 || bb >= this.Lwb.length ? this.RJ().defaultMaterial : this.Lwb[bb]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Lwb.map((bb => bb ? bb.getActiveTextures() : [])))
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (let wb = 0; wb < this.Lwb.length; wb++)
          if (this.Lwb[wb]?.hasTexture(bb)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(bb, wb, Mb) {
        for (let eb = 0; eb < this.Lwb.length; eb++) {
          const Hb = this.Lwb[eb];
          if (Hb) {
            if (Hb._storeEffectOnSubMeshes) {
              if (!Hb.isReadyForSubMesh(bb, wb, Mb)) return !1;
              continue
            }
            if (!Hb.isReady(bb)) return !1
          }
        }
        return !0
      }
      clone(bb, wb) {
        const Mb = new Vb(bb, this.RJ());
        for (let eb = 0; eb < this.Lwb.length; eb++) {
          let Hb;
          const pb = this.Lwb[eb];
          Hb = wb && pb ? pb.clone(bb + "-" + pb.name) : this.Lwb[eb], Mb.Lwb.push(Hb)
        }
        return Mb
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, Hb.c && (bb.tags = Hb.c.GetTags(this)), bb.materialsUniqueIds = [], bb.materials = [];
        for (let wb = 0; wb < this.Lwb.length; wb++) {
          const Mb = this.Lwb[wb];
          Mb ? (bb.materialsUniqueIds.push(Mb.uniqueId), bb.materials.push(Mb.id)) : (bb.materialsUniqueIds.push(null), bb.materials.push(null))
        }
        return bb
      }
      dispose(bb, wb, Mb) {
        const eb = this.RJ();
        if (!eb) return;
        if (Mb)
          for (let pb = 0; pb < this.Lwb.length; pb++) {
            const Mb = this.Lwb[pb];
            Mb && Mb.dispose(bb, wb)
          }
        const Hb = eb.multiMaterials.indexOf(this);
        Hb >= 0 && eb.multiMaterials.splice(Hb, 1), super.dispose(bb, wb)
      }
    }
    let gb = !1;

    function lb(bb, wb) {
      const Mb = new Vb(bb.name, wb);
      if (Mb.id = bb.id, Mb._loadedUniqueId = bb.uniqueId, Hb.c && Hb.c.AddTagsTo(Mb, bb.tags), bb.materialsUniqueIds) Mb._waitingSubMaterialsUniqueIds = bb.materialsUniqueIds;
      else
        for (const eb of bb.materials) Mb.Lwb.push(wb.getLastMaterialById(eb));
      return Mb
    }

    function Lb() {
      gb || (gb = !0, Vb.ParseMultiMaterial = lb, (0, pb.e)("BABYLON.MultiMaterial", Vb))
    }
  },
  41892: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb, Hb, pb = Mb(38285);
    ! function(bb) {
      bb[bb.LOCAL = 0] = "LOCAL", bb[bb.WORLD = 1] = "WORLD", bb[bb.BONE = 2] = "BONE"
    }(eb || (eb = {}));
    class Vb {}
    Vb.X = new pb.o(1, 0, 0), Vb.Y = new pb.o(0, 1, 0), Vb.Z = new pb.o(0, 0, 1),
      function(bb) {
        bb[bb.X = 0] = "X", bb[bb.Y = 1] = "Y", bb[bb.Z = 2] = "Z"
      }(Hb || (Hb = {}))
  },
  41662: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      i: () => Lb
    });
    var eb = Mb(38285);
    const Hb = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      pb = [() => 1, bb => bb.y, bb => bb.z, bb => bb.x, bb => bb.x * bb.y, bb => bb.y * bb.z, bb => 3 * bb.z * bb.z - 1, bb => bb.x * bb.z, bb => bb.x * bb.x - bb.y * bb.y],
      Vb = (bb, wb) => Hb[bb] * pb[bb](wb),
      gb = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class lb {
      constructor() {
        this.preScaled = !1, this.l00 = eb.o.Zero(), this.l1_1 = eb.o.Zero(), this.l10 = eb.o.Zero(), this.l11 = eb.o.Zero(), this.l2_2 = eb.o.Zero(), this.l2_1 = eb.o.Zero(), this.l20 = eb.o.Zero(), this.l21 = eb.o.Zero(), this.l22 = eb.o.Zero()
      }
      addLight(bb, wb, Mb) {
        eb.j.YC[0].set(wb.r, wb.g, wb.b);
        const Hb = eb.j.YC[0],
          pb = eb.j.YC[1];
        Hb.scaleToRef(Mb, pb), pb.scaleToRef(Vb(0, bb), eb.j.YC[2]), this.l00.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(1, bb), eb.j.YC[2]), this.l1_1.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(2, bb), eb.j.YC[2]), this.l10.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(3, bb), eb.j.YC[2]), this.l11.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(4, bb), eb.j.YC[2]), this.l2_2.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(5, bb), eb.j.YC[2]), this.l2_1.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(6, bb), eb.j.YC[2]), this.l20.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(7, bb), eb.j.YC[2]), this.l21.addInPlace(eb.j.YC[2]), pb.scaleToRef(Vb(8, bb), eb.j.YC[2]), this.l22.addInPlace(eb.j.YC[2])
      }
      scaleInPlace(bb) {
        this.l00.scaleInPlace(bb), this.l1_1.scaleInPlace(bb), this.l10.scaleInPlace(bb), this.l11.scaleInPlace(bb), this.l2_2.scaleInPlace(bb), this.l2_1.scaleInPlace(bb), this.l20.scaleInPlace(bb), this.l21.scaleInPlace(bb), this.l22.scaleInPlace(bb)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(gb[0]), this.l1_1.scaleInPlace(gb[1]), this.l10.scaleInPlace(gb[2]), this.l11.scaleInPlace(gb[3]), this.l2_2.scaleInPlace(gb[4]), this.l2_1.scaleInPlace(gb[5]), this.l20.scaleInPlace(gb[6]), this.l21.scaleInPlace(gb[7]), this.l22.scaleInPlace(gb[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Hb[0]), this.l1_1.scaleInPlace(Hb[1]), this.l10.scaleInPlace(Hb[2]), this.l11.scaleInPlace(Hb[3]), this.l2_2.scaleInPlace(Hb[4]), this.l2_1.scaleInPlace(Hb[5]), this.l20.scaleInPlace(Hb[6]), this.l21.scaleInPlace(Hb[7]), this.l22.scaleInPlace(Hb[8])
      }
      updateFromArray(bb) {
        return eb.o.FromArrayToRef(bb[0], 0, this.l00), eb.o.FromArrayToRef(bb[1], 0, this.l1_1), eb.o.FromArrayToRef(bb[2], 0, this.l10), eb.o.FromArrayToRef(bb[3], 0, this.l11), eb.o.FromArrayToRef(bb[4], 0, this.l2_2), eb.o.FromArrayToRef(bb[5], 0, this.l2_1), eb.o.FromArrayToRef(bb[6], 0, this.l20), eb.o.FromArrayToRef(bb[7], 0, this.l21), eb.o.FromArrayToRef(bb[8], 0, this.l22), this
      }
      updateFromFloatsArray(bb) {
        return eb.o.FromFloatsToRef(bb[0], bb[1], bb[2], this.l00), eb.o.FromFloatsToRef(bb[3], bb[4], bb[5], this.l1_1), eb.o.FromFloatsToRef(bb[6], bb[7], bb[8], this.l10), eb.o.FromFloatsToRef(bb[9], bb[10], bb[11], this.l11), eb.o.FromFloatsToRef(bb[12], bb[13], bb[14], this.l2_2), eb.o.FromFloatsToRef(bb[15], bb[16], bb[17], this.l2_1), eb.o.FromFloatsToRef(bb[18], bb[19], bb[20], this.l20), eb.o.FromFloatsToRef(bb[21], bb[22], bb[23], this.l21), eb.o.FromFloatsToRef(bb[24], bb[25], bb[26], this.l22), this
      }
      static FromArray(bb) {
        return (new lb).updateFromArray(bb)
      }
      static FromPolynomial(bb) {
        const wb = new lb;
        return wb.l00 = bb.xx.scale(.376127).add(bb.yy.scale(.376127)).add(bb.zz.scale(.376126)), wb.l1_1 = bb.y.scale(.977204), wb.l10 = bb.z.scale(.977204), wb.l11 = bb.x.scale(.977204), wb.l2_2 = bb.xy.scale(1.16538), wb.l2_1 = bb.yz.scale(1.16538), wb.l20 = bb.zz.scale(1.34567).subtract(bb.xx.scale(.672834)).subtract(bb.yy.scale(.672834)), wb.l21 = bb.zx.scale(1.16538), wb.l22 = bb.xx.scale(1.16538).subtract(bb.yy.scale(1.16538)), wb.l1_1.scaleInPlace(-1), wb.l11.scaleInPlace(-1), wb.l2_1.scaleInPlace(-1), wb.l21.scaleInPlace(-1), wb.scaleInPlace(Math.PI), wb
      }
    }
    class Lb {
      constructor() {
        this.x = eb.o.Zero(), this.y = eb.o.Zero(), this.z = eb.o.Zero(), this.xx = eb.o.Zero(), this.yy = eb.o.Zero(), this.zz = eb.o.Zero(), this.xy = eb.o.Zero(), this.yz = eb.o.Zero(), this.zx = eb.o.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = lb.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(bb) {
        eb.j.YC[0].twb(bb.r, bb.g, bb.b);
        const wb = eb.j.YC[0];
        this.xx.addInPlace(wb), this.yy.addInPlace(wb), this.zz.addInPlace(wb)
      }
      scaleInPlace(bb) {
        this.x.scaleInPlace(bb), this.y.scaleInPlace(bb), this.z.scaleInPlace(bb), this.xx.scaleInPlace(bb), this.yy.scaleInPlace(bb), this.zz.scaleInPlace(bb), this.yz.scaleInPlace(bb), this.zx.scaleInPlace(bb), this.xy.scaleInPlace(bb)
      }
      updateFromHarmonics(bb) {
        return this._harmonics = bb, this.x.eZ(bb.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.eZ(bb.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.eZ(bb.l10), this.z.scaleInPlace(1.02333), this.xx.eZ(bb.l00), eb.j.YC[0].eZ(bb.l20).scaleInPlace(.247708), eb.j.YC[1].eZ(bb.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).zpb(eb.j.YC[0]).addInPlace(eb.j.YC[1]), this.yy.eZ(bb.l00), this.yy.scaleInPlace(.886277).zpb(eb.j.YC[0]).zpb(eb.j.YC[1]), this.zz.eZ(bb.l00), eb.j.YC[0].eZ(bb.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(eb.j.YC[0]), this.yz.eZ(bb.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.eZ(bb.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.eZ(bb.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(bb) {
        return (new Lb).updateFromHarmonics(bb)
      }
      static FromArray(bb) {
        const wb = new Lb;
        return eb.o.FromArrayToRef(bb[0], 0, wb.x), eb.o.FromArrayToRef(bb[1], 0, wb.y), eb.o.FromArrayToRef(bb[2], 0, wb.z), eb.o.FromArrayToRef(bb[3], 0, wb.xx), eb.o.FromArrayToRef(bb[4], 0, wb.yy), eb.o.FromArrayToRef(bb[5], 0, wb.zz), eb.o.FromArrayToRef(bb[6], 0, wb.yz), eb.o.FromArrayToRef(bb[7], 0, wb.zx), eb.o.FromArrayToRef(bb[8], 0, wb.xy), wb
      }
    }
  },
  42109: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Zb,
      g: () => Ab
    });
    var eb = Mb(41675),
      Hb = Mb(38318),
      pb = Mb(38285),
      Vb = Mb(41816),
      gb = Mb(42091),
      lb = Mb(42116),
      Lb = Mb(41808),
      Ib = Mb(41984),
      Ob = Mb(41806);
    class Ub {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new pb.o(0, 0, 0), this._diffPositionForCollisions = new pb.o(0, 0, 0), this._collisionResponse = !0
      }
    }
    var tb, Cb, Eb, Fb = Mb(41554),
      Bb = Mb(41742),
      sb = Mb(41993),
      mb = Mb(38406),
      hb = Mb(38294),
      zb = Mb(41892),
      Xb = Mb(39971),
      xb = Mb(41679),
      jb = Mb(41572),
      Kb = Mb(38333);

    function rb(bb, wb) {
      return bb - Math.floor(bb / wb) * wb
    }

    function Rb(bb, wb, Mb) {
      bb instanceof Float32Array ? pb.b.FromArrayToRef(bb, wb, Mb) : Mb.twb((0, Bb.c)(bb[wb]), (0, Bb.c)(bb[wb + 1]), (0, Bb.c)(bb[wb + 2]), (0, Bb.c)(bb[wb + 3]), (0, Bb.c)(bb[wb + 4]), (0, Bb.c)(bb[wb + 5]), (0, Bb.c)(bb[wb + 6]), (0, Bb.c)(bb[wb + 7]), (0, Bb.c)(bb[wb + 8]), (0, Bb.c)(bb[wb + 9]), (0, Bb.c)(bb[wb + 10]), (0, Bb.c)(bb[wb + 11]), (0, Bb.c)(bb[wb + 12]), (0, Bb.c)(bb[wb + 13]), (0, Bb.c)(bb[wb + 14]), (0, Bb.c)(bb[wb + 15]))
    }

    function Db(bb, wb, Mb, eb, Hb, gb, lb, Lb, Ib) {
      const Ob = Mb.texture,
        Ub = Ob?.getInternalTexture(),
        tb = Ub?._bufferView;
      if (!(tb instanceof Float32Array) && !(tb instanceof Uint16Array)) return Xb.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Cb = Ob.getSize(),
        Eb = function(bb, wb) {
          const Mb = bb.y - bb.x + 1,
            eb = wb * bb.w / Mb,
            Hb = eb < 1 ? 0 : 1,
            pb = Mb - Hb;
          let Vb = rb(eb - Math.floor(eb), 1) * pb;
          return Vb = rb(Vb + bb.z, pb), Math.floor(Vb) + bb.x + Hb
        }(eb, Mb.time);
      if (!isFinite(Eb) || Eb < 0 || Eb >= Cb.height) return Xb.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Fb = pb.j.YC[0],
        Bb = pb.j.Matrix[0],
        sb = pb.j.Matrix[1],
        mb = Eb * Cb.width * 4,
        hb = wb === Vb.i.NormalKind ? pb.o.TransformNormalFromFloatsToRef : pb.o.TransformCoordinatesFromFloatsToRef;
      for (let pb = 0, Vb = 0; pb < bb.length; pb += 3, Vb += 4) {
        let wb, Mb;
        for (Bb.reset(), wb = 0; wb < 4 && wb < Ib; wb++) Mb = gb[Vb + wb], Mb > 0 && (Rb(tb, mb + 16 * Math.floor(Hb[Vb + wb]), sb), sb.scaleAndAddToRef(Mb, Bb));
        if (lb && Lb)
          for (wb = 0; wb < 4 && wb + 4 < Ib; wb++) Mb = Lb[Vb + wb], Mb > 0 && (Rb(tb, mb + 16 * Math.floor(lb[Vb + wb]), sb), sb.scaleAndAddToRef(Mb, Bb));
        hb(bb[pb], bb[pb + 1], bb[pb + 2], Bb, Fb), Fb.toArray(bb, pb)
      }
      return !0
    }
    class cb {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = pb.o.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Yb {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new cb, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Ub, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Zb = (() => {
        var bb;
        let wb, Ub = lb.e,
          tb = [];
        return bb = class extends Ub {
          static get BILLBOARDMODE_NONE() {
            return lb.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return lb.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return lb.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return lb.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return lb.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return lb.e.BILLBOARDMODE_USE_POSITION
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
          set KU(bb) {
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
            const wb = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = bb, (1 === wb && 1 !== bb || 1 !== wb && 1 === bb) && this._markSubMeshesAsDirty((bb => {
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
            this._internalAbstractMeshDataInfo._material !== bb && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = bb, bb && bb.meshMap && (bb.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.oR && (this.resetDrawCache(void 0, null == bb), this._unBindEffect()))
          }
          getMaterialForRenderPass(bb) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[bb]
          }
          setMaterialForRenderPass(bb, wb) {
            this.resetDrawCache(bb), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Mb = this._internalAbstractMeshDataInfo._materialForRenderPass[bb];
            Mb?.meshMap?.[this.uniqueId] && (Mb.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[bb] = wb, wb && wb.meshMap && (wb.meshMap[this.uniqueId] = this)
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
            const wb = this._internalAbstractMeshDataInfo._skeleton;
            wb && wb.needInitialSkinMatrix && wb._unregisterMeshWithPoseMatrix(this), bb && bb.needInitialSkinMatrix && bb._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = bb, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(wb) {
            var Mb;
            let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(wb, eb, !1), Mb = this, this._internalAbstractMeshDataInfo = new Yb, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Hb.b, this.onCollisionPositionChangeObservable = new Hb.b, this.onMaterialChangedObservable = new Hb.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.NE = bb.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = mb.e.Red(), this.outlineWidth = .02, this.overlayColor = mb.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.cC = !1, this.fC = !1, this.actionManager = null, this.ellipsoid = new pb.o(.5, 1, .5), this.ellipsoidOffset = new pb.o(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new mb.f(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                aJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Hb.b, this._onCollisionPositionChange = function(bb, wb) {
                let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                wb.subtractToRef(Mb._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Mb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Mb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > jb.d.CollisionsEpsilon && Mb.position.addInPlace(Mb._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), eb && Mb.onCollideObservable.notifyObservers(eb), Mb.onCollisionPositionChangeObservable.notifyObservers(Mb.position)
              }, eb = this.RJ(), this.layerMask = eb.defaultRenderableLayerMask, eb.lpb(this), this._resyncLightSources(), this._uniformBuffer = new Ob.c(this.RJ().DC(), void 0, void 0, wb, !this.RJ().DC().isWebGPU), this._buildUniformLayout(), eb.performancePriority) {
              case 2:
                this.fC = !0;
              case 1:
                this.cC = !0, this.NE = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(bb) {
            const wb = this._uniformBuffer;
            wb.kbb("world", bb), wb.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), wb.update()
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
            let wb = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            wb += ", # of submeshes: " + (this.oR ? this.oR.length : 0);
            const Mb = this._internalAbstractMeshDataInfo._skeleton;
            return Mb && (wb += ", skeleton: " + Mb.name), bb && (wb += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], wb += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.aJ ? "YES" : "NO")), wb
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== lb.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(bb) {
            let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (wb || this.actionManager.isRecursive)) {
              if (!bb) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(bb)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(bb, !1) : null
          }
          _releaseRenderPassId(bb) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.oR) {
              for (const bb of this.oR) bb._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const bb of this.RJ().lights) bb.isEnabled() && bb.canAffectMesh(this) && this._lightSources.push(bb);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(bb) {
            const wb = bb.isEnabled() && bb.canAffectMesh(this),
              Mb = this._lightSources.indexOf(bb);
            let eb = !1;
            if (-1 === Mb) {
              if (!wb) return;
              this._lightSources.push(bb)
            } else {
              if (wb) return;
              eb = !0, this._lightSources.splice(Mb, 1)
            }
            this._markSubMeshesAsLightDirty(eb)
          }
          _unBindEffect() {
            for (const bb of this.oR) bb.setEffect(null)
          }
          _removeLightSource(bb, wb) {
            const Mb = this._lightSources.indexOf(bb); - 1 !== Mb && (this._lightSources.splice(Mb, 1), this._markSubMeshesAsLightDirty(wb))
          }
          _markSubMeshesAsDirty(bb) {
            if (this.oR)
              for (const wb of this.oR)
                for (let Mb = 0; Mb < wb._drawWrappers.length; ++Mb) {
                  const eb = wb._drawWrappers[Mb];
                  eb && eb.defines && eb.defines.markAllAsDirty && bb(eb.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((wb => wb.markAsLightDirty(bb)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((bb => bb.markAsMiscDirty()))
          }
          eeb(bb) {
            return this._currentRenderId = Number.MAX_VALUE, super.eeb(bb), this._isDirty = !0, this
          }
          resetDrawCache(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.oR)
              for (const Mb of this.oR) Mb.resetDrawCache(bb, wb)
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
          ipb() {
            return null
          }
          getVerticesData(bb) {
            return null
          }
          setVerticesData(bb, wb, Mb, eb) {
            return this
          }
          updateVerticesData(bb, wb, Mb, eb) {
            return this
          }
          setIndices(bb, wb) {
            return this
          }
          isVerticesDataPresent(bb) {
            return !1
          }
          XN() {
            return this._masterMesh ? this._masterMesh.XN() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.XN()
          }
          setBoundingInfo(bb) {
            return this._boundingInfo = bb, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(bb, wb, Mb) {
            return this._boundingInfo = new Ib.e(bb, wb, Mb), this._boundingInfo
          }
          normalizeToUnitCube() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(bb, wb, Mb)
          }
          get useBones() {
            return this.skeleton && this.RJ().skeletonsEnabled && this.isVerticesDataPresent(Vb.i.MatricesIndicesKind) && this.isVerticesDataPresent(Vb.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(bb) {}
          _activate(bb, wb) {
            return this._renderId = bb, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === lb.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get QJ() {
            return !1
          }
          get ypb() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(bb, wb, Mb) {
            return this.position.addInPlace(this.calcMovePOV(bb, wb, Mb)), this
          }
          calcMovePOV(bb, wb, Mb) {
            const eb = new pb.b;
            (this.rotationQuaternion ? this.rotationQuaternion : pb.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(eb);
            const Hb = pb.o.Zero(),
              Vb = this.definedFacingForward ? -1 : 1;
            return pb.o.TransformCoordinatesFromFloatsToRef(bb * Vb, wb, Mb * Vb, eb, Hb), Hb
          }
          rotatePOV(bb, wb, Mb) {
            return this.rotation.addInPlace(this.calcRotatePOV(bb, wb, Mb)), this
          }
          calcRotatePOV(bb, wb, Mb) {
            const eb = this.definedFacingForward ? 1 : -1;
            return new pb.o(bb * eb, wb, Mb * eb)
          }
          _refreshBoundingInfo(bb, wb) {
            if (bb) {
              const Mb = (0, sb.g)(bb, 0, this.getTotalVertices(), wb);
              this._boundingInfo ? this._boundingInfo.reConstruct(Mb.minimum, Mb.maximum) : this._boundingInfo = new Ib.e(Mb.minimum, Mb.maximum)
            }
            if (this.oR)
              for (let Mb = 0; Mb < this.oR.length; Mb++) this.oR[Mb].refreshBoundingInfo(bb);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(bb) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(bb.minimum, bb.maximum) : this._boundingInfo = new Ib.e(bb.minimum, bb.maximum), this.oR)
              for (let wb = 0; wb < this.oR.length; wb++) this.oR[wb].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(bb, wb, Mb, eb, Hb, gb, lb) {
            ! function(bb, wb, Mb, eb, Hb, gb, lb) {
              const Lb = pb.j.YC[0],
                Ib = pb.j.Matrix[0],
                Ob = pb.j.Matrix[1],
                Ub = wb === Vb.i.NormalKind ? pb.o.TransformNormalFromFloatsToRef : pb.o.TransformCoordinatesFromFloatsToRef;
              for (let Vb = 0, tb = 0; Vb < bb.length; Vb += 3, tb += 4) {
                let wb, Cb;
                for (Ib.reset(), wb = 0; wb < 4; wb++) Cb = Hb[tb + wb], Cb > 0 && (pb.b.FromFloat32ArrayToRefScaled(Mb, Math.floor(16 * eb[tb + wb]), Cb, Ob), Ib.addToSelf(Ob));
                if (gb && lb)
                  for (wb = 0; wb < 4; wb++) Cb = lb[tb + wb], Cb > 0 && (pb.b.FromFloat32ArrayToRefScaled(Mb, Math.floor(16 * gb[tb + wb]), Cb, Ob), Ib.addToSelf(Ob));
                Ub(bb[Vb], bb[Vb + 1], bb[Vb + 2], Ib, Lb), Lb.toArray(bb, Vb)
              }
            }(bb, wb, Mb, eb, Hb, gb, lb)
          }
          _getData(wb, Mb) {
            let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vb.i.PositionKind;
            const Hb = wb.cache,
              gb = bb => {
                if (Hb) {
                  const wb = Hb._vertexData || (Hb._vertexData = {});
                  return wb[bb] || this.copyVerticesData(bb, wb), wb[bb]
                }
                return this.getVerticesData(bb)
              };
            if (Mb || (Mb = gb(eb)), !Mb) return null;
            Hb ? (Hb._outputData ? Hb._outputData.set(Mb) : Hb._outputData = new Float32Array(Mb), Mb = Hb._outputData) : (wb.applyMorph && this.morphTargetManager || wb.applySkeleton && this.skeleton || wb.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Mb = Mb.slice()), wb.applyMorph && this.morphTargetManager && function(bb, wb, Mb) {
              let eb;
              switch (wb) {
                case Vb.i.PositionKind:
                  eb = bb => bb.getPositions();
                  break;
                case Vb.i.NormalKind:
                  eb = bb => bb.getNormals();
                  break;
                case Vb.i.TangentKind:
                  eb = bb => bb.getTangents();
                  break;
                case Vb.i.UVKind:
                  eb = bb => bb.getUVs();
                  break;
                case Vb.i.UV2Kind:
                  eb = bb => bb.getUV2s();
                  break;
                case Vb.i.ColorKind:
                  eb = bb => bb.getColors();
                  break;
                default:
                  return
              }
              for (let Hb = 0; Hb < bb.length; Hb++) {
                let wb = bb[Hb];
                for (let pb = 0; pb < Mb.numTargets; pb++) {
                  const Vb = Mb.getTarget(pb),
                    gb = Vb.influence;
                  if (0 !== gb) {
                    const Mb = eb(Vb);
                    Mb && (wb += (Mb[Hb] - bb[Hb]) * gb)
                  }
                }
                bb[Hb] = wb
              }
            }(Mb, eb, this.morphTargetManager);
            const lb = this.bakedVertexAnimationManager;
            let Lb = !1;
            if (wb.applyBakedVertexAnimation && lb?.isEnabled) {
              const bb = gb(Vb.i.MatricesIndicesKind),
                Hb = gb(Vb.i.MatricesWeightsKind);
              if (Hb && bb) {
                const pb = this.numBoneInfluencers > 4,
                  Ib = pb ? gb(Vb.i.MatricesIndicesExtraKind) : null,
                  Ob = pb ? gb(Vb.i.MatricesWeightsExtraKind) : null;
                Lb = Db(Mb, eb, lb, wb.bakedVertexAnimationSettings ?? lb.animationParameters, bb, Hb, Ib, Ob, this.numBoneInfluencers)
              }
            }
            if (!Lb && wb.applySkeleton && this.skeleton) {
              const wb = gb(Vb.i.MatricesIndicesKind),
                Hb = gb(Vb.i.MatricesWeightsKind);
              if (Hb && wb) {
                const pb = this.numBoneInfluencers > 4,
                  lb = pb ? gb(Vb.i.MatricesIndicesExtraKind) : null,
                  Lb = pb ? gb(Vb.i.MatricesWeightsExtraKind) : null,
                  Ib = this.skeleton.getTransformMatrices(this);
                bb._ApplySkeleton(Mb, eb, Ib, wb, Hb, lb, Lb)
              }
            }
            if (!1 !== wb.updatePositionsArray && eb === Vb.i.PositionKind) {
              const bb = this._internalAbstractMeshDataInfo._positions || [],
                wb = bb.length;
              if (bb.length = Mb.length / 3, wb < bb.length)
                for (let Mb = wb; Mb < bb.length; Mb++) bb[Mb] = new pb.o;
              for (let eb = 0, Hb = 0; eb < bb.length; eb++, Hb += 3) bb[eb].twb(Mb[Hb], Mb[Hb + 1], Mb[Hb + 2]);
              this._internalAbstractMeshDataInfo._positions = bb
            }
            return Mb
          }
          getNormalsData() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: bb,
              applyMorph: wb,
              updatePositionsArray: !1
            }, null, Vb.i.NormalKind)
          }
          Z2() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: bb,
              applyMorph: wb,
              updatePositionsArray: !1
            }, Mb, Vb.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Ib.e(pb.o.Zero(), pb.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(bb) {
            if (!this.oR) return this;
            const wb = this.oR.length;
            for (let Mb = 0; Mb < wb; Mb++) {
              const eb = this.oR[Mb];
              (wb > 1 || !eb.IsGlobal) && eb.updateBoundingInfo(bb)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.fC || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(bb) {
            return this.XN().isInFrustum(bb, this.cullingStrategy)
          }
          isCompletelyInFrustum(bb) {
            return this.XN().isCompletelyInFrustum(bb)
          }
          Gpb(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            const eb = this.XN(),
              Hb = bb.XN();
            if (eb.intersects(Hb, wb)) return !0;
            if (Mb)
              for (const pb of this.getChildMeshes())
                if (pb.Gpb(bb, wb, !0)) return !0;
            return !1
          }
          intersectsPoint(bb) {
            return this.XN().intersectsPoint(bb)
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
            let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Mb = this.RJ().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Mb.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Mb.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, bb, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, wb), this
          }
          _collideForSubMesh(bb, wb, Mb) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!bb._lastColliderWorldVertices || !bb._lastColliderTransformMatrix.equals(wb)) {
              bb._lastColliderTransformMatrix = wb.clone(), bb._lastColliderWorldVertices = [], bb._trianglePlanes = [];
              const Mb = bb.verticesStart,
                eb = bb.verticesStart + bb.verticesCount;
              for (let Hb = Mb; Hb < eb; Hb++) bb._lastColliderWorldVertices.push(pb.o.TransformCoordinates(this._positions[Hb], wb))
            }
            return Mb._collide(bb._trianglePlanes, bb._lastColliderWorldVertices, this.ipb(), bb.indexStart, bb.indexStart + bb.indexCount, bb.verticesStart, !!bb.AC(), this, this._shouldConvertRHS(), 7 === bb.AC()?.fillMode), this
          }
          _processCollisionsForSubMeshes(bb, wb) {
            const Mb = this._scene.getCollidingSubMeshCandidates(this, bb),
              eb = Mb.length;
            for (let Hb = 0; Hb < eb; Hb++) {
              const pb = Mb.data[Hb];
              eb > 1 && !pb._checkCollision(bb) || this._collideForSubMesh(pb, wb, bb)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(bb) {
            if (!this.XN()._checkCollision(bb)) return this;
            const wb = pb.j.Matrix[0],
              Mb = pb.j.Matrix[1];
            return pb.b.ScalingToRef(1 / bb._radius.x, 1 / bb._radius.y, 1 / bb._radius.z, wb), this.worldMatrixFromCache.multiplyToRef(wb, Mb), this._processCollisionsForSubMeshes(bb, Mb), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(bb, wb, Mb) {
            let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Hb = arguments.length > 4 ? arguments[4] : void 0,
              Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const gb = new Lb.c,
              lb = this.getClassName(),
              Ib = "InstancedLinesMesh" === lb || "LinesMesh" === lb || "GreasedLineMesh" === lb ? this.intersectionThreshold : 0,
              Ob = this.XN();
            if (!this.oR) return gb;
            if (!Vb && (!bb.intersectsSphere(Ob.Kpb, Ib) || !bb.intersectsBox(Ob.boundingBox, Ib))) return gb;
            if (eb) return gb.hit = !Vb, gb.pickedMesh = Vb ? null : this, gb.distance = Vb ? 0 : pb.o.Distance(bb.origin, Ob.Kpb.center), gb.subMeshId = 0, gb;
            if (!this._generatePointsArray()) return gb;
            let Ub = null;
            const tb = this._scene.getIntersectingSubMeshCandidates(this, bb),
              Cb = tb.length;
            let Eb = !1;
            for (let pb = 0; pb < Cb; pb++) {
              const bb = tb.data[pb].AC();
              if (bb && (7 == bb.fillMode || 0 == bb.fillMode || 1 == bb.fillMode || 2 == bb.fillMode || 4 == bb.fillMode)) {
                Eb = !0;
                break
              }
            }
            if (!Eb) return gb.hit = !0, gb.pickedMesh = this, gb.distance = pb.o.Distance(bb.origin, Ob.Kpb.center), gb.subMeshId = -1, gb;
            for (let pb = 0; pb < Cb; pb++) {
              const eb = tb.data[pb];
              if (Cb > 1 && !Vb && !eb.canIntersects(bb)) continue;
              const Hb = eb.intersects(bb, this._positions, this.ipb(), wb, Mb);
              if (Hb && (wb || !Ub || Hb.distance < Ub.distance) && (Ub = Hb, Ub.subMeshId = eb._id, Ub._internalSubMeshId = pb, wb)) break
            }
            if (Ub) {
              const wb = Hb ?? this.getWorldMatrix(),
                Mb = pb.j.YC[0],
                eb = pb.j.YC[1];
              pb.o.TransformCoordinatesToRef(bb.origin, wb, Mb), bb.direction.scaleToRef(Ub.distance, eb);
              const Vb = pb.o.TransformNormal(eb, wb).addInPlace(Mb);
              return gb.hit = !0, gb.distance = pb.o.Distance(Mb, Vb), gb.pickedPoint = Vb, gb.pickedMesh = this, gb.bu = Ub.bu || 0, gb.bv = Ub.bv || 0, gb.subMeshFaceId = Ub.faceId, gb.faceId = Ub.faceId + tb.data[Ub._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), gb.subMeshId = Ub.subMeshId, gb
            }
            return gb
          }
          clone(bb, wb, Mb) {
            return null
          }
          releaseSubMeshes() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.oR)
              for (; this.oR.length;) this.oR[0].dispose(bb);
            else this.oR = [];
            return this
          }
          dispose(bb) {
            let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const eb = this.RJ();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), eb.freeActiveMeshes(), eb.freeRenderingGroups(), eb.renderingManager.maintainStateBetweenFrames && eb.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((bb => bb !== this && bb.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), wb = 0; wb < this._intersectionsInProgress.length; wb++) {
              const bb = this._intersectionsInProgress[wb],
                Mb = bb._intersectionsInProgress.indexOf(this);
              bb._intersectionsInProgress.splice(Mb, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Hb = eb.lights;
            for (const Vb of Hb) {
              let bb = Vb.includedOnlyMeshes.indexOf(this); - 1 !== bb && Vb.includedOnlyMeshes.splice(bb, 1), bb = Vb.excludedMeshes.indexOf(this), -1 !== bb && Vb.excludedMeshes.splice(bb, 1);
              const wb = Vb.getShadowGenerators();
              if (wb) {
                const Mb = wb.values();
                for (let wb = Mb.next(); !0 !== wb.done; wb = Mb.next()) {
                  const Mb = wb.value.getShadowMap();
                  Mb && Mb.renderList && (bb = Mb.renderList.indexOf(this), -1 !== bb && Mb.renderList.splice(bb, 1))
                }
              }
            }
            this.releaseSubMeshes(eb._isDisposing);
            const pb = eb.DC();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, pb.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), pb.wipeCaches(), eb.dJ(this), this._parentContainer) {
              const bb = this._parentContainer.meshes.indexOf(this);
              bb > -1 && this._parentContainer.meshes.splice(bb, 1), this._parentContainer = null
            }
            if (Mb && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !bb)
              for (wb = 0; wb < eb.kR.length; wb++) eb.kR[wb].emitter === this && (eb.kR[wb].dispose(), wb--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(bb, Mb)
          }
          _initFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetNormals || (bb.facetNormals = []), bb.facetPositions || (bb.facetPositions = []), bb.facetPartitioning || (bb.facetPartitioning = new Array), bb.facetNb = this.ipb().length / 3 | 0, bb.partitioningSubdivisions = bb.partitioningSubdivisions ? bb.partitioningSubdivisions : 10, bb.partitioningBBoxRatio = bb.partitioningBBoxRatio ? bb.partitioningBBoxRatio : 1.01;
            for (let wb = 0; wb < bb.facetNb; wb++) bb.facetNormals[wb] = pb.o.Zero(), bb.facetPositions[wb] = pb.o.Zero();
            return bb.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            bb.facetDataEnabled || this._initFacetData();
            const wb = this.getVerticesData(Vb.i.PositionKind),
              Mb = this.ipb(),
              eb = this.getVerticesData(Vb.i.NormalKind)?.slice(),
              Hb = this.XN();
            if (bb.facetDepthSort && !bb.facetDepthSortEnabled) {
              if (bb.facetDepthSortEnabled = !0, Mb instanceof Uint16Array) bb.depthSortedIndices = new Uint16Array(Mb);
              else if (Mb instanceof Uint32Array) bb.depthSortedIndices = new Uint32Array(Mb);
              else {
                let wb = !1;
                for (let bb = 0; bb < Mb.length; bb++)
                  if (Mb[bb] > 65535) {
                    wb = !0;
                    break
                  } bb.depthSortedIndices = wb ? new Uint32Array(Mb) : new Uint16Array(Mb)
              }
              if (bb.facetDepthSortFunction = function(bb, wb) {
                  return wb.sqDistance - bb.sqDistance
                }, !bb.facetDepthSortFrom) {
                const wb = this.RJ().activeCamera;
                bb.facetDepthSortFrom = wb ? wb.position : pb.o.Zero()
              }
              bb.depthSortedFacets = [];
              for (let wb = 0; wb < bb.facetNb; wb++) {
                const Mb = {
                  ind: 3 * wb,
                  sqDistance: 0
                };
                bb.depthSortedFacets.push(Mb)
              }
              bb.invertedMatrix = pb.b.Identity(), bb.facetDepthSortOrigin = pb.o.Zero()
            }
            bb.bbSize.x = Hb.maximum.x - Hb.minimum.x > hb.e ? Hb.maximum.x - Hb.minimum.x : hb.e, bb.bbSize.y = Hb.maximum.y - Hb.minimum.y > hb.e ? Hb.maximum.y - Hb.minimum.y : hb.e, bb.bbSize.z = Hb.maximum.z - Hb.minimum.z > hb.e ? Hb.maximum.z - Hb.minimum.z : hb.e;
            let lb = bb.bbSize.x > bb.bbSize.y ? bb.bbSize.x : bb.bbSize.y;
            if (lb = lb > bb.bbSize.z ? lb : bb.bbSize.z, bb.subDiv.max = bb.partitioningSubdivisions, bb.subDiv.X = Math.floor(bb.subDiv.max * bb.bbSize.x / lb), bb.subDiv.Y = Math.floor(bb.subDiv.max * bb.bbSize.y / lb), bb.subDiv.Z = Math.floor(bb.subDiv.max * bb.bbSize.z / lb), bb.subDiv.X = bb.subDiv.X < 1 ? 1 : bb.subDiv.X, bb.subDiv.Y = bb.subDiv.Y < 1 ? 1 : bb.subDiv.Y, bb.subDiv.Z = bb.subDiv.Z < 1 ? 1 : bb.subDiv.Z, bb.facetParameters.facetNormals = this.getFacetLocalNormals(), bb.facetParameters.facetPositions = this.getFacetLocalPositions(), bb.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), bb.facetParameters.bInfo = Hb, bb.facetParameters.bbSize = bb.bbSize, bb.facetParameters.subDiv = bb.subDiv, bb.facetParameters.ratio = this.partitioningBBoxRatio, bb.facetParameters.depthSort = bb.facetDepthSort, bb.facetDepthSort && bb.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(bb.invertedMatrix), pb.o.TransformCoordinatesToRef(bb.facetDepthSortFrom, bb.invertedMatrix, bb.facetDepthSortOrigin), bb.facetParameters.distanceTo = bb.facetDepthSortOrigin), bb.facetParameters.depthSortedFacets = bb.depthSortedFacets, eb && gb.d.ComputeNormals(wb, Mb, eb, bb.facetParameters), bb.facetDepthSort && bb.facetDepthSortEnabled) {
              bb.depthSortedFacets.sort(bb.facetDepthSortFunction);
              const wb = bb.depthSortedIndices.length / 3 | 0;
              for (let eb = 0; eb < wb; eb++) {
                const wb = bb.depthSortedFacets[eb].ind;
                bb.depthSortedIndices[3 * eb] = Mb[wb], bb.depthSortedIndices[3 * eb + 1] = Mb[wb + 1], bb.depthSortedIndices[3 * eb + 2] = Mb[wb + 2]
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
            const wb = pb.o.Zero();
            return this.getFacetPositionToRef(bb, wb), wb
          }
          getFacetPositionToRef(bb, wb) {
            const Mb = this.getFacetLocalPositions()[bb],
              eb = this.getWorldMatrix();
            return pb.o.TransformCoordinatesToRef(Mb, eb, wb), this
          }
          getFacetNormal(bb) {
            const wb = pb.o.Zero();
            return this.getFacetNormalToRef(bb, wb), wb
          }
          getFacetNormalToRef(bb, wb) {
            const Mb = this.getFacetLocalNormals()[bb];
            return pb.o.TransformNormalToRef(Mb, this.getWorldMatrix(), wb), this
          }
          getFacetsAtLocalCoordinates(bb, wb, Mb) {
            const eb = this.XN(),
              Hb = this._internalAbstractMeshDataInfo._facetData,
              pb = Math.floor((bb - eb.minimum.x * Hb.partitioningBBoxRatio) * Hb.subDiv.X * Hb.partitioningBBoxRatio / Hb.bbSize.x),
              Vb = Math.floor((wb - eb.minimum.y * Hb.partitioningBBoxRatio) * Hb.subDiv.Y * Hb.partitioningBBoxRatio / Hb.bbSize.y),
              gb = Math.floor((Mb - eb.minimum.z * Hb.partitioningBBoxRatio) * Hb.subDiv.Z * Hb.partitioningBBoxRatio / Hb.bbSize.z);
            return pb < 0 || pb > Hb.subDiv.max || Vb < 0 || Vb > Hb.subDiv.max || gb < 0 || gb > Hb.subDiv.max ? null : Hb.facetPartitioning[pb + Hb.subDiv.max * Vb + Hb.subDiv.max * Hb.subDiv.max * gb]
          }
          getClosestFacetAtCoordinates(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const gb = this.getWorldMatrix(),
              lb = pb.j.Matrix[5];
            gb.invertToRef(lb);
            const Lb = pb.j.YC[8];
            pb.o.TransformCoordinatesFromFloatsToRef(bb, wb, Mb, lb, Lb);
            const Ib = this.getClosestFacetAtLocalCoordinates(Lb.x, Lb.y, Lb.z, eb, Hb, Vb);
            return eb && pb.o.TransformCoordinatesFromFloatsToRef(eb.x, eb.y, eb.z, gb, eb), Ib
          }
          getClosestFacetAtLocalCoordinates(bb, wb, Mb, eb) {
            let Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Cb = null;
            const Eb = this.getFacetLocalPositions(),
              Fb = this.getFacetLocalNormals(),
              Bb = this.getFacetsAtLocalCoordinates(bb, wb, Mb);
            if (!Bb) return null;
            let sb, mb, hb, zb, Xb = Number.MAX_VALUE;
            for (let xb = 0; xb < Bb.length; xb++) mb = Bb[xb], hb = Fb[mb], zb = Eb[mb], gb = (bb - zb.x) * hb.x + (wb - zb.y) * hb.y + (Mb - zb.z) * hb.z, (!Ub || Ub && tb && gb >= 0 || Ub && !tb && gb <= 0) && (gb = hb.x * zb.x + hb.y * zb.y + hb.z * zb.z, lb = -(hb.x * bb + hb.y * wb + hb.z * Mb - gb) / (hb.x * hb.x + hb.y * hb.y + hb.z * hb.z), Lb = bb + hb.x * lb, Ib = wb + hb.y * lb, Ob = Mb + hb.z * lb, Hb = Lb - bb, pb = Ib - wb, Vb = Ob - Mb, sb = Hb * Hb + pb * pb + Vb * Vb, sb < Xb && (Xb = sb, Cb = mb, eb && (eb.x = Lb, eb.y = Ib, eb.z = Ob)));
            return Cb
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const bb = this._internalAbstractMeshDataInfo._facetData;
            return bb.facetDataEnabled && (bb.facetDataEnabled = !1, bb.facetPositions = [], bb.facetNormals = [], bb.facetPartitioning = new Array, bb.facetParameters = {}, bb.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(bb, wb) {
            return this
          }
          createNormals(bb) {
            const wb = this.getVerticesData(Vb.i.PositionKind),
              Mb = this.ipb();
            let eb;
            return eb = this.isVerticesDataPresent(Vb.i.NormalKind) ? this.getVerticesData(Vb.i.NormalKind) : [], gb.d.ComputeNormals(wb, Mb, eb, {
              useRightHandedSystem: this.RJ().useRightHandedSystem
            }), this.setVerticesData(Vb.i.NormalKind, eb, bb), this
          }
          async optimizeIndicesAsync() {
            const bb = this.ipb();
            if (!bb) return this;
            const {
              OptimizeIndices: wb
            } = await Mb.e(670).then((() => Mb(54779)));
            return wb(bb), this.setIndices(bb, this.getTotalVertices()), this
          }
          alignWithNormal(bb, wb) {
            wb || (wb = zb.c.Y);
            const Mb = pb.j.YC[0],
              eb = pb.j.YC[1];
            return pb.o.CrossToRef(wb, bb, eb), pb.o.CrossToRef(bb, eb, Mb), this.rotationQuaternion ? pb.e.RotationQuaternionFromAxisToRef(Mb, bb, eb, this.rotationQuaternion) : pb.o.RotationFromAxisToRef(Mb, bb, eb, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Fb.k)("EdgesRenderer")
          }
          enableEdgesRendering(bb, wb, Mb) {
            throw (0, Fb.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.kR.filter((bb => bb.emitter === this))
          }
        }, (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ub[Symbol.metadata] ?? null) : void 0;
          wb = [xb.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, eb.i)(bb, null, wb, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: bb => "_ApplySkeleton" in bb,
              get: bb => bb._ApplySkeleton
            },
            metadata: Mb
          }, null, tb), Mb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          })
        })(), bb.OCCLUSION_TYPE_NONE = ((0, eb.m)(bb, tb), 0), bb.OCCLUSION_TYPE_OPTIMISTIC = 1, bb.OCCLUSION_TYPE_STRICT = 2, bb.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, bb.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, bb.CULLINGSTRATEGY_STANDARD = 0, bb.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, bb.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, bb.DefaultIsPickable = !0, bb
      })(),
      fb = !1;

    function Ab() {
      fb || (fb = !0, (0, Kb.e)("BABYLON.AbstractMesh", Zb))
    }(tb = Zb.prototype).createOrUpdateSubmeshesOctree ?? (tb.createOrUpdateSubmeshesOctree = (0, Fb.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Cb = Zb.prototype).getPhysicsImpostor ?? (Cb.getPhysicsImpostor = (0, Fb.h)("AbstractMesh", "getPhysicsImpostor")), (Eb = Zb.prototype).setPhysicsLinkWith ?? (Eb.setPhysicsLinkWith = (0, Fb.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Zb.prototype, "occlusionRetryCount") || Object.defineProperty(Zb.prototype, "occlusionRetryCount", (0, Fb.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Zb.prototype, "occlusionType") || Object.defineProperty(Zb.prototype, "occlusionType", (0, Fb.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Zb.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Zb.prototype, "occlusionQueryAlgorithmType", (0, Fb.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Zb.prototype, "isOccluded") || Object.defineProperty(Zb.prototype, "isOccluded", (0, Fb.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Zb.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Zb.prototype, "isOcclusionQueryInProgress", (0, Fb.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Zb.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Zb.prototype, "forceRenderingWhenOccluded", (0, Fb.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Zb.prototype, "occlusionForRenderPassId") || Object.defineProperty(Zb.prototype, "occlusionForRenderPassId", (0, Fb.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Zb.prototype, "decalMap") || Object.defineProperty(Zb.prototype, "decalMap", (0, Fb.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Zb.prototype, "hN") || Object.defineProperty(Zb.prototype, "hN", (0, Fb.g)("AbstractMesh", "hN")), Object.getOwnPropertyDescriptor(Zb.prototype, "physicsImpostor") || Object.defineProperty(Zb.prototype, "physicsImpostor", (0, Fb.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Zb.prototype, "showBoundingBox") || Object.defineProperty(Zb.prototype, "showBoundingBox", (0, Fb.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Zb.prototype, "edgesRenderer") || Object.defineProperty(Zb.prototype, "edgesRenderer", (0, Fb.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Zb.prototype, "renderOutline") || Object.defineProperty(Zb.prototype, "renderOutline", (0, Fb.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Zb.prototype, "renderOverlay") || Object.defineProperty(Zb.prototype, "renderOverlay", (0, Fb.g)("AbstractMesh", "renderOverlay"))
  },
  42093: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Bb
    });
    var eb = Mb(38285),
      Hb = Mb(38406),
      pb = Mb(42091),
      Vb = Mb(41816),
      gb = Mb(41972),
      lb = Mb(42102),
      Lb = Mb(41984),
      Ib = Mb(41771),
      Ob = Mb(39971),
      Ub = Mb(41705),
      tb = Mb(41993),
      Cb = Mb(38313),
      Eb = Mb(42107),
      Fb = Mb(41740);
    class Bb {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(bb) {
        this._boundingBias ? this._boundingBias.eZ(bb) : this._boundingBias = bb.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(bb) {
        const wb = new Bb(Bb.RandomId(), bb.RJ());
        return wb.applyToMesh(bb), wb
      }
      get meshes() {
        return this._meshes
      }
      constructor(bb, wb, Mb) {
        let Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new eb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new eb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = wb || Cb.e.LastCreatedScene, this._scene && (this.id = bb, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.DC(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Hb, null !== Vb && (this._totalVertices = Vb), Mb ? this.setAllVerticesData(Mb, Hb) : null === Vb && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), pb && (this.applyToMesh(pb), pb.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      RJ() {
        return this._scene
      }
      DC() {
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
        for (const wb in this._vertexBuffers) bb.add(this._vertexBuffers[wb].getWrapperBuffer());
        bb.forEach((bb => {
          bb._rebuild()
        }))
      }
      setAllVerticesData(bb, wb) {
        bb.applyToGeometry(this, wb), this._notifyUpdate()
      }
      setVerticesData(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0;
        Mb && Array.isArray(wb) && (wb = new Float32Array(wb));
        const Hb = new Vb.i(this._engine, wb, bb, {
          updatable: Mb,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: eb,
          label: "Geometry_" + this.id + "_" + bb
        });
        this.setVerticesBuffer(Hb)
      }
      removeVerticesData(bb) {
        this._vertexBuffers[bb] && (this._vertexBuffers[bb].dispose(), delete this._vertexBuffers[bb]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Hb = bb.getKind();
        this._vertexBuffers[Hb] && Mb && this._vertexBuffers[Hb].dispose(), bb._buffer && bb._ownsBuffer && bb._buffer._increaseReferences(), this._vertexBuffers[Hb] = bb;
        const pb = this._meshes,
          gb = pb.length;
        if (Hb === Vb.i.PositionKind) {
          this._totalVertices = wb ?? bb._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : bb.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Mb = this._extend && this._extend.minimum || new eb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Hb = this._extend && this._extend.maximum || new eb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let bb = 0; bb < gb; bb++) {
            const wb = pb[bb];
            wb.buildBoundingInfo(Mb, Hb), wb._createGlobalSubMesh(wb.isUnIndexed), wb.computeWorldMatrix(!0), wb.synchronizeInstances()
          }
        }
        this._notifyUpdate(Hb)
      }
      updateVerticesDataDirectly(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Hb = this.getVertexBuffer(bb);
        Hb && (Hb.updateDirectly(wb, Mb, eb), this._notifyUpdate(bb))
      }
      updateVerticesData(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this.getVertexBuffer(bb);
        eb && (eb.update(wb), bb === Vb.i.PositionKind && this._updateBoundingInfo(Mb, wb), this._notifyUpdate(bb))
      }
      _updateBoundingInfo(bb, wb) {
        if (bb && this._updateExtend(wb), this._resetPointsArrayCache(), bb) {
          const bb = this._meshes;
          for (const wb of bb) {
            wb.hasBoundingInfo ? wb.XN().reConstruct(this._extend.minimum, this._extend.maximum) : wb.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const bb = wb.oR;
            for (const wb of bb) wb.refreshBoundingInfo()
          }
        }
      }
      _bind(bb, wb, Mb, eb) {
        if (!bb) return;
        void 0 === wb && (wb = this._indexBuffer);
        const Hb = this.getVertexBuffers();
        if (!Hb) return;
        if (wb != this._indexBuffer || !this._vertexArrayObjects && !eb) return void this._engine.bindBuffers(Hb, wb, bb, Mb);
        const pb = eb || this._vertexArrayObjects,
          Vb = this._engine;
        pb[bb.key] || (pb[bb.key] = Vb.recordVertexArrayObject(Hb, wb, bb, Mb)), Vb.bindVertexArrayObject(pb[bb.key], wb)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(bb, wb, Mb) {
        const eb = this.getVertexBuffer(bb);
        return eb ? eb.getFloatData(this._totalVertices, Mb || wb && 1 !== this._meshes.length) : null
      }
      copyVerticesData(bb, wb) {
        const Mb = this.getVertexBuffer(bb);
        if (!Mb) return;
        wb[bb] || (wb[bb] = new Float32Array(this._totalVertices * Mb.getSize()));
        const eb = Mb.getData();
        eb && (0, Fb.g)(eb, Mb.getSize(), Mb.type, Mb.byteOffset, Mb.byteStride, Mb.normalized, this._totalVertices, wb[bb])
      }
      isVertexBufferUpdatable(bb) {
        const wb = this._vertexBuffers[bb];
        return !!wb && wb.isUpdatable()
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
        let wb;
        if (!this._vertexBuffers && this._delayInfo)
          for (wb in this._delayInfo) bb.push(wb);
        else
          for (wb in this._vertexBuffers) bb.push(wb);
        return bb
      }
      updateIndices(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const eb = bb.length !== this._indices.length;
            if (Mb || (this._indices = bb.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, bb, wb), eb)
              for (const bb of this._meshes) bb._createGlobalSubMesh(!0)
          } else this.setIndices(bb, null, !0)
      }
      setIndexBuffer(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = bb, this._totalVertices = wb, this._totalIndices = Mb, bb.is32Bits = null === eb ? wb > 65535 : eb;
        for (const Hb of this._meshes) Hb._createGlobalSubMesh(!0), Hb.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = bb, this._indexBufferIsUpdatable = Mb, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Mb, "Geometry_" + this.id + "_IndexBuffer")), void 0 != wb && (this._totalVertices = wb);
        for (const Hb of this._meshes) Hb._createGlobalSubMesh(!eb), Hb.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      ipb(bb, wb) {
        if (!this.isReady()) return null;
        const Mb = this._indices;
        return wb || bb && 1 !== this._meshes.length ? Mb.slice() : Mb
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        bb && this._vertexArrayObjects && this._vertexArrayObjects[bb.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[bb.key]), delete this._vertexArrayObjects[bb.key])
      }
      releaseForMesh(bb, wb) {
        const Mb = this._meshes,
          eb = Mb.indexOf(bb); - 1 !== eb && (Mb.splice(eb, 1), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject(), bb._geometry = null, 0 === Mb.length && wb && this.dispose())
      }
      applyToMesh(bb) {
        if (bb._geometry === this) return;
        const wb = bb._geometry;
        wb && wb.releaseForMesh(bb), this._vertexArrayObjects && bb._invalidateInstanceVertexArrayObject();
        const Mb = this._meshes;
        bb._geometry = this, bb._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Mb.push(bb), this.isReady() ? this._applyToMesh(bb) : this._boundingInfo && bb.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!bb && (bb = this.getVerticesData(Vb.i.PositionKind), !bb)) return;
          this._extend = (0, tb.g)(bb, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(bb) {
        for (const wb in this._vertexBuffers) {
          const Mb = this._vertexBuffers[wb];
          Mb._buffer.getBuffer() || Mb.create(), wb === Vb.i.PositionKind && (this._extend || this._updateExtend(), bb.buildBoundingInfo(this._extend.minimum, this._extend.maximum), bb._createGlobalSubMesh(bb.isUnIndexed), bb._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), bb._syncGeometryWithMorphTargetManager(), bb.synchronizeInstances()
      }
      _notifyUpdate(bb) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, bb), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const wb of this._meshes) wb._markSubMeshesAsAttributesDirty()
      }
      load(bb, wb) {
        2 !== this.delayLoadState && (this.isReady() ? wb && wb() : (this.delayLoadState = 2, this._queueLoad(bb, wb)))
      }
      _queueLoad(bb, wb) {
        this.delayLoadingFile && (bb.addPendingData(this), (async () => {
          try {
            const Mb = await bb._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void bb.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Mb), this), this.delayLoadState = 1, this._delayInfo = [], bb.removePendingData(this);
            const eb = this._meshes,
              Hb = eb.length;
            for (let bb = 0; bb < Hb; bb++) this._applyToMesh(eb[bb]);
            wb && wb()
          } catch (Mb) {
            bb.removePendingData(this), bb.RD || Ob.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Mb}`)
          }
        })())
      }
      toLeftHanded() {
        const bb = this.ipb(!1);
        if (null != bb && bb.length > 0) {
          for (let wb = 0; wb < bb.length; wb += 3) {
            const Mb = bb[wb + 0];
            bb[wb + 0] = bb[wb + 2], bb[wb + 2] = Mb
          }
          this.setIndices(bb)
        }
        const wb = this.getVerticesData(Vb.i.PositionKind, !1);
        if (null != wb && wb.length > 0) {
          for (let bb = 0; bb < wb.length; bb += 3) wb[bb + 2] = -wb[bb + 2];
          this.setVerticesData(Vb.i.PositionKind, wb, !1)
        }
        const Mb = this.getVerticesData(Vb.i.NormalKind, !1);
        if (null != Mb && Mb.length > 0) {
          for (let bb = 0; bb < Mb.length; bb += 3) Mb[bb + 2] = -Mb[bb + 2];
          this.setVerticesData(Vb.i.NormalKind, Mb, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const bb = this.getVerticesData(Vb.i.PositionKind);
        if (!bb || 0 === bb.length) return !1;
        for (let wb = 3 * this._positionsCache.length, Mb = this._positionsCache.length; wb < bb.length; wb += 3, ++Mb) this._positionsCache[Mb] = eb.o.FromArray(bb, wb);
        for (let wb = 0, Mb = 0; wb < bb.length; wb += 3, ++Mb) this._positionsCache[Mb].set(bb[0 + wb], bb[1 + wb], bb[2 + wb]);
        return this._positionsCache.length = bb.length / 3, this._positions = this._positionsCache, !0
      }
      RD() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Mb in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Mb]);
          this._vertexArrayObjects = {};
          const bb = this._meshes,
            wb = bb.length;
          for (let Mb = 0; Mb < wb; Mb++) bb[Mb]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const bb = this._meshes,
          wb = bb.length;
        let Mb;
        for (Mb = 0; Mb < wb; Mb++) this.releaseForMesh(bb[Mb]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const eb in this._vertexBuffers) this._vertexBuffers[eb].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const bb = this._parentContainer.geometries.indexOf(this);
          bb > -1 && this._parentContainer.geometries.splice(bb, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(bb) {
        const wb = new Bb(bb, this._scene),
          Mb = this.ipb(void 0, !0);
        Mb && wb.setIndices(Mb);
        let eb, Hb = !1;
        for (eb in this._vertexBuffers) {
          const bb = this.getVertexBuffer(eb),
            Mb = bb.getData();
          if (!Mb) continue;
          const pb = bb.isUpdatable(),
            gb = bb.getSize(),
            {
              type: lb,
              byteOffset: Lb,
              byteStride: Ib,
              normalized: Ob
            } = bb;
          Hb = Hb || pb;
          let Ub = this._totalVertices;
          if (bb.getIsInstanced()) {
            let bb;
            bb = Mb instanceof Array ? 4 * Mb.length : Mb.byteLength, Ub = bb / Ib
          }
          const tb = (0, Fb.s)(Mb, gb, lb, Lb, Ib, Ub, !0),
            Cb = new Vb.i(this._engine, tb, eb, {
              updatable: pb,
              useBytes: !1,
              stride: gb,
              size: gb,
              offset: 0,
              type: lb,
              normalized: Ob,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            });
          wb.setVerticesBuffer(Cb, Ub)
        }
        for (eb in wb._updatable = Hb, wb.delayLoadState = this.delayLoadState, wb.delayLoadingFile = this.delayLoadingFile, wb._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) wb._delayInfo = wb._delayInfo || [], wb._delayInfo.push(eb);
        return wb._boundingInfo = new Lb.e(this._extend.minimum, this._extend.maximum), wb
      }
      serialize() {
        const bb = {};
        return bb.id = this.id, bb.uniqueId = this.uniqueId, bb.updatable = this._updatable, Ub.c && Ub.c.HasTags(this) && (bb.tags = Ub.c.GetTags(this)), bb
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
        return this.isVerticesDataPresent(Vb.i.PositionKind) && (bb.positions = this._toNumberArray(this.getVerticesData(Vb.i.PositionKind)), this.isVertexBufferUpdatable(Vb.i.PositionKind) && (bb.positionsUpdatable = !0)), this.isVerticesDataPresent(Vb.i.NormalKind) && (bb.normals = this._toNumberArray(this.getVerticesData(Vb.i.NormalKind)), this.isVertexBufferUpdatable(Vb.i.NormalKind) && (bb.normalsUpdatable = !0)), this.isVerticesDataPresent(Vb.i.TangentKind) && (bb.tangents = this._toNumberArray(this.getVerticesData(Vb.i.TangentKind)), this.isVertexBufferUpdatable(Vb.i.TangentKind) && (bb.tangentsUpdatable = !0)), this.isVerticesDataPresent(Vb.i.UVKind) && (bb.uvs = this._toNumberArray(this.getVerticesData(Vb.i.UVKind)), this.isVertexBufferUpdatable(Vb.i.UVKind) && (bb.uvsUpdatable = !0)), this.isVerticesDataPresent(Vb.i.UV2Kind) && (bb.uvs2 = this._toNumberArray(this.getVerticesData(Vb.i.UV2Kind)), this.isVertexBufferUpdatable(Vb.i.UV2Kind) && (bb.uvs2Updatable = !0)), this.isVerticesDataPresent(Vb.i.UV3Kind) && (bb.uvs3 = this._toNumberArray(this.getVerticesData(Vb.i.UV3Kind)), this.isVertexBufferUpdatable(Vb.i.UV3Kind) && (bb.uvs3Updatable = !0)), this.isVerticesDataPresent(Vb.i.UV4Kind) && (bb.uvs4 = this._toNumberArray(this.getVerticesData(Vb.i.UV4Kind)), this.isVertexBufferUpdatable(Vb.i.UV4Kind) && (bb.uvs4Updatable = !0)), this.isVerticesDataPresent(Vb.i.UV5Kind) && (bb.uvs5 = this._toNumberArray(this.getVerticesData(Vb.i.UV5Kind)), this.isVertexBufferUpdatable(Vb.i.UV5Kind) && (bb.uvs5Updatable = !0)), this.isVerticesDataPresent(Vb.i.UV6Kind) && (bb.uvs6 = this._toNumberArray(this.getVerticesData(Vb.i.UV6Kind)), this.isVertexBufferUpdatable(Vb.i.UV6Kind) && (bb.uvs6Updatable = !0)), this.isVerticesDataPresent(Vb.i.ColorKind) && (bb.colors = this._toNumberArray(this.getVerticesData(Vb.i.ColorKind)), this.isVertexBufferUpdatable(Vb.i.ColorKind) && (bb.colorsUpdatable = !0)), this.isVerticesDataPresent(Vb.i.MatricesIndicesKind) && (bb.matricesIndices = this._toNumberArray(this.getVerticesData(Vb.i.MatricesIndicesKind)), bb.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Vb.i.MatricesIndicesKind) && (bb.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Vb.i.MatricesWeightsKind) && (bb.matricesWeights = this._toNumberArray(this.getVerticesData(Vb.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(Vb.i.MatricesWeightsKind) && (bb.matricesWeightsUpdatable = !0)), bb.indices = this._toNumberArray(this.ipb()), bb
      }
      static ExtractFromMesh(bb, wb) {
        const Mb = bb._geometry;
        return Mb ? Mb.copy(wb) : null
      }
      static RandomId() {
        return Ib.e.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(bb, wb) {
        for (let Mb = 0; Mb < wb.geometries.length; Mb++)
          if (wb.geometries[Mb]._loadedUniqueId === bb) return wb.geometries[Mb];
        return null
      }
      static _ImportGeometry(bb, wb) {
        const Mb = wb.RJ(),
          eb = bb.geometryUniqueId,
          pb = bb.geometryId;
        if (eb || pb) {
          const bb = eb ? this._GetGeometryByLoadedUniqueId(eb, Mb) : Mb.getGeometryById(pb);
          bb && bb.applyToMesh(wb)
        } else if (bb instanceof ArrayBuffer) {
          const Mb = wb._binaryInfo;
          if (Mb.positionsAttrDesc && Mb.positionsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.positionsAttrDesc.offset, Mb.positionsAttrDesc.count);
            wb.setVerticesData(Vb.i.PositionKind, eb, !1)
          }
          if (Mb.normalsAttrDesc && Mb.normalsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.normalsAttrDesc.offset, Mb.normalsAttrDesc.count);
            wb.setVerticesData(Vb.i.NormalKind, eb, !1)
          }
          if (Mb.tangetsAttrDesc && Mb.tangetsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.tangetsAttrDesc.offset, Mb.tangetsAttrDesc.count);
            wb.setVerticesData(Vb.i.TangentKind, eb, !1)
          }
          if (Mb.uvsAttrDesc && Mb.uvsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvsAttrDesc.offset, Mb.uvsAttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UVKind, eb, !1)
          }
          if (Mb.uvs2AttrDesc && Mb.uvs2AttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvs2AttrDesc.offset, Mb.uvs2AttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UV2Kind, eb, !1)
          }
          if (Mb.uvs3AttrDesc && Mb.uvs3AttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvs3AttrDesc.offset, Mb.uvs3AttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UV3Kind, eb, !1)
          }
          if (Mb.uvs4AttrDesc && Mb.uvs4AttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvs4AttrDesc.offset, Mb.uvs4AttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UV4Kind, eb, !1)
          }
          if (Mb.uvs5AttrDesc && Mb.uvs5AttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvs5AttrDesc.offset, Mb.uvs5AttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UV5Kind, eb, !1)
          }
          if (Mb.uvs6AttrDesc && Mb.uvs6AttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.uvs6AttrDesc.offset, Mb.uvs6AttrDesc.count);
            if (Eb.d)
              for (let bb = 1; bb < eb.length; bb += 2) eb[bb] = 1 - eb[bb];
            wb.setVerticesData(Vb.i.UV6Kind, eb, !1)
          }
          if (Mb.colorsAttrDesc && Mb.colorsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.colorsAttrDesc.offset, Mb.colorsAttrDesc.count);
            wb.setVerticesData(Vb.i.ColorKind, eb, !1, Mb.colorsAttrDesc.stride)
          }
          if (Mb.matricesIndicesAttrDesc && Mb.matricesIndicesAttrDesc.count > 0) {
            const eb = new Int32Array(bb, Mb.matricesIndicesAttrDesc.offset, Mb.matricesIndicesAttrDesc.count),
              Hb = [];
            for (let bb = 0; bb < eb.length; bb++) {
              const wb = eb[bb];
              Hb.push(255 & wb), Hb.push((65280 & wb) >> 8), Hb.push((16711680 & wb) >> 16), Hb.push(wb >> 24 & 255)
            }
            wb.setVerticesData(Vb.i.MatricesIndicesKind, Hb, !1)
          }
          if (Mb.matricesIndicesExtraAttrDesc && Mb.matricesIndicesExtraAttrDesc.count > 0) {
            const eb = new Int32Array(bb, Mb.matricesIndicesExtraAttrDesc.offset, Mb.matricesIndicesExtraAttrDesc.count),
              Hb = [];
            for (let bb = 0; bb < eb.length; bb++) {
              const wb = eb[bb];
              Hb.push(255 & wb), Hb.push((65280 & wb) >> 8), Hb.push((16711680 & wb) >> 16), Hb.push(wb >> 24 & 255)
            }
            wb.setVerticesData(Vb.i.MatricesIndicesExtraKind, Hb, !1)
          }
          if (Mb.matricesWeightsAttrDesc && Mb.matricesWeightsAttrDesc.count > 0) {
            const eb = new Float32Array(bb, Mb.matricesWeightsAttrDesc.offset, Mb.matricesWeightsAttrDesc.count);
            wb.setVerticesData(Vb.i.MatricesWeightsKind, eb, !1)
          }
          if (Mb.indicesAttrDesc && Mb.indicesAttrDesc.count > 0) {
            const eb = new Int32Array(bb, Mb.indicesAttrDesc.offset, Mb.indicesAttrDesc.count);
            wb.setIndices(eb, null)
          }
          if (Mb.subMeshesAttrDesc && Mb.subMeshesAttrDesc.count > 0) {
            const eb = new Int32Array(bb, Mb.subMeshesAttrDesc.offset, 5 * Mb.subMeshesAttrDesc.count);
            wb.oR = [];
            for (let bb = 0; bb < Mb.subMeshesAttrDesc.count; bb++) {
              const Mb = eb[5 * bb + 0],
                Hb = eb[5 * bb + 1],
                pb = eb[5 * bb + 2],
                Vb = eb[5 * bb + 3],
                lb = eb[5 * bb + 4];
              gb.d.AddToMesh(Mb, Hb, pb, Vb, lb, wb)
            }
          }
        } else if (bb.positions && bb.normals && bb.indices) {
          if (wb.setVerticesData(Vb.i.PositionKind, bb.positions, bb.positions._updatable || bb.positionsUpdatable), wb.setVerticesData(Vb.i.NormalKind, bb.normals, bb.normals._updatable || bb.normalsUpdatable), bb.tangents && wb.setVerticesData(Vb.i.TangentKind, bb.tangents, bb.tangents._updatable || bb.tangentsUpdatable), bb.uvs && wb.setVerticesData(Vb.i.UVKind, bb.uvs, bb.uvs._updatable || bb.uvsUpdatable), bb.uvs2 && wb.setVerticesData(Vb.i.UV2Kind, bb.uvs2, bb.uvs2._updatable || bb.uvs2Updatable), bb.uvs3 && wb.setVerticesData(Vb.i.UV3Kind, bb.uvs3, bb.uvs3._updatable || bb.uvs3Updatable), bb.uvs4 && wb.setVerticesData(Vb.i.UV4Kind, bb.uvs4, bb.uvs4._updatable || bb.uvs4Updatable), bb.uvs5 && wb.setVerticesData(Vb.i.UV5Kind, bb.uvs5, bb.uvs5._updatable || bb.uvs5Updatable), bb.uvs6 && wb.setVerticesData(Vb.i.UV6Kind, bb.uvs6, bb.uvs6._updatable || bb.uvs6Updatable), bb.colors && wb.setVerticesData(Vb.i.ColorKind, Hb.f.CheckColors4(bb.colors, bb.positions.length / 3), bb.colors._updatable), bb.matricesIndices)
            if (bb.matricesIndices._isExpanded || bb.matricesIndicesExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExpanded, wb.setVerticesData(Vb.i.MatricesIndicesKind, bb.matricesIndices, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable);
            else {
              const Mb = [];
              for (let wb = 0; wb < bb.matricesIndices.length; wb++) {
                const eb = bb.matricesIndices[wb];
                Mb.push(255 & eb), Mb.push((65280 & eb) >> 8), Mb.push((16711680 & eb) >> 16), Mb.push(eb >> 24 & 255)
              }
              wb.setVerticesData(Vb.i.MatricesIndicesKind, Mb, bb.matricesIndices._updatable || bb.matricesIndicesUpdatable)
            } if (bb.matricesIndicesExtra)
            if (bb.matricesIndicesExtraExpanded || bb.matricesIndicesExtra._isExpanded) delete bb.matricesIndices._isExpanded, delete bb.matricesIndicesExtraExpanded, wb.setVerticesData(Vb.i.MatricesIndicesExtraKind, bb.matricesIndicesExtra, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable);
            else {
              const Mb = [];
              for (let wb = 0; wb < bb.matricesIndicesExtra.length; wb++) {
                const eb = bb.matricesIndicesExtra[wb];
                Mb.push(255 & eb), Mb.push((65280 & eb) >> 8), Mb.push((16711680 & eb) >> 16), Mb.push(eb >> 24 & 255)
              }
              wb.setVerticesData(Vb.i.MatricesIndicesExtraKind, Mb, bb.matricesIndicesExtra._updatable || bb.matricesIndicesExtraUpdatable)
            } bb.matricesWeights && (Bb._CleanMatricesWeights(bb, wb), wb.setVerticesData(Vb.i.MatricesWeightsKind, bb.matricesWeights, bb.matricesWeights._updatable)), bb.matricesWeightsExtra && wb.setVerticesData(Vb.i.MatricesWeightsExtraKind, bb.matricesWeightsExtra, bb.matricesWeights._updatable), wb.setIndices(bb.indices, null)
        }
        if (bb.oR) {
          wb.oR = [];
          for (let Mb = 0; Mb < bb.oR.length; Mb++) {
            const eb = bb.oR[Mb];
            gb.d.AddToMesh(eb.materialIndex, eb.verticesStart, eb.verticesCount, eb.indexStart, eb.indexCount, wb)
          }
        }
        wb._shouldGenerateFlatShading && (wb.convertToFlatShadedMesh(), wb._shouldGenerateFlatShading = !1), wb.computeWorldMatrix(!0), Mb.onMeshImportedObservable.notifyObservers(wb)
      }
      static _CleanMatricesWeights(bb, wb) {
        const Mb = .001;
        if (!lb.b.CleanBoneMatrixWeights) return;
        let eb;
        if (!(bb.skeletonId > -1)) return;
        {
          const Mb = wb.RJ().getLastSkeletonById(bb.skeletonId);
          if (!Mb) return;
          eb = Mb.bones.length
        }
        const Hb = wb.getVerticesData(Vb.i.MatricesIndicesKind),
          pb = wb.getVerticesData(Vb.i.MatricesIndicesExtraKind),
          gb = bb.matricesWeights,
          Lb = bb.matricesWeightsExtra,
          Ib = bb.numBoneInfluencer,
          Ob = gb.length;
        for (let Vb = 0; Vb < Ob; Vb += 4) {
          let bb = 0,
            wb = -1;
          for (let eb = 0; eb < 4; eb++) {
            const Hb = gb[Vb + eb];
            bb += Hb, Hb < Mb && wb < 0 && (wb = eb)
          }
          if (Lb)
            for (let eb = 0; eb < 4; eb++) {
              const Hb = Lb[Vb + eb];
              bb += Hb, Hb < Mb && wb < 0 && (wb = eb + 4)
            }
          if ((wb < 0 || wb > Ib - 1) && (wb = Ib - 1), bb > Mb) {
            const wb = 1 / bb;
            for (let bb = 0; bb < 4; bb++) gb[Vb + bb] *= wb;
            if (Lb)
              for (let bb = 0; bb < 4; bb++) Lb[Vb + bb] *= wb
          } else wb >= 4 ? (Lb[Vb + wb - 4] = 1 - bb, pb[Vb + wb - 4] = eb) : (gb[Vb + wb] = 1 - bb, Hb[Vb + wb] = eb)
        }
        wb.setVerticesData(Vb.i.MatricesIndicesKind, Hb), bb.matricesWeightsExtra && wb.setVerticesData(Vb.i.MatricesIndicesExtraKind, pb)
      }
      static Parse(bb, wb, Mb) {
        const Hb = new Bb(bb.id, wb, void 0, bb.updatable);
        return Hb._loadedUniqueId = bb.uniqueId, Ub.c && Ub.c.AddTagsTo(Hb, bb.tags), bb.delayLoadingFile ? (Hb.delayLoadState = 4, Hb.delayLoadingFile = Mb + bb.delayLoadingFile, Hb._boundingInfo = new Lb.e(eb.o.FromArray(bb.boundingBoxMinimum), eb.o.FromArray(bb.boundingBoxMaximum)), Hb._delayInfo = [], bb.hasUVs && Hb._delayInfo.push(Vb.i.UVKind), bb.hasUVs2 && Hb._delayInfo.push(Vb.i.UV2Kind), bb.hasUVs3 && Hb._delayInfo.push(Vb.i.UV3Kind), bb.hasUVs4 && Hb._delayInfo.push(Vb.i.UV4Kind), bb.hasUVs5 && Hb._delayInfo.push(Vb.i.UV5Kind), bb.hasUVs6 && Hb._delayInfo.push(Vb.i.UV6Kind), bb.hasColors && Hb._delayInfo.push(Vb.i.ColorKind), bb.hasMatricesIndices && Hb._delayInfo.push(Vb.i.MatricesIndicesKind), bb.hasMatricesWeights && Hb._delayInfo.push(Vb.i.MatricesWeightsKind), Hb._delayLoadingFunction = pb.d.ImportVertexData) : pb.d.ImportVertexData(bb, Hb), wb.pushGeometry(Hb, !0), Hb
      }
    }
  },
  42140: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob,
      i: () => Cb
    });
    var eb = Mb(38285),
      Hb = Mb(39971),
      pb = Mb(42109),
      Vb = Mb(42078),
      gb = Mb(39966),
      lb = Mb(42116),
      Lb = Mb(41816),
      Ib = Mb(38333);
    class Ob extends pb.c {
      constructor(bb, wb) {
        super(bb, wb.RJ()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, wb.ybb(this), this._sourceMesh = wb, this._unIndexed = wb._unIndexed, this.position.eZ(wb.position), this.rotation.eZ(wb.rotation), this.CO.eZ(wb.CO), wb.rotationQuaternion && (this.rotationQuaternion = wb.rotationQuaternion.clone()), this.animations = wb.animations.slice();
        for (const Mb of wb.getAnimationRanges()) null != Mb && this.createAnimationRange(Mb.name, Mb.from, Mb.to);
        if (this.infiniteDistance = wb.infiniteDistance, this.setPivotMatrix(wb.getPivotMatrix()), wb.skeleton || wb.morphTargetManager || !wb.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const bb = wb.XN();
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
        this._sourceMesh?.receiveShadows !== bb && Hb.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(bb) {
        this._sourceMesh?.material !== bb && Hb.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(bb) {
        this._sourceMesh?.visibility !== bb && Hb.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(bb) {
        this._sourceMesh?.skeleton !== bb && Hb.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(bb) {
        this._sourceMesh && bb !== this._sourceMesh.renderingGroupId && Hb.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(bb) {
        this._sourceMesh && bb !== this._sourceMesh.meshBlendingTag && Hb.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get opb() {
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
      getVerticesData(bb, wb, Mb) {
        return this._sourceMesh.getVerticesData(bb, wb, Mb)
      }
      copyVerticesData(bb, wb) {
        this._sourceMesh.copyVerticesData(bb, wb)
      }
      getVertexBuffer(bb, wb) {
        return this._sourceMesh.getVertexBuffer(bb, wb)
      }
      setVerticesData(bb, wb, Mb, eb) {
        return this.opb && this.opb.setVerticesData(bb, wb, Mb, eb), this.opb
      }
      updateVerticesData(bb, wb, Mb, eb) {
        return this.opb && this.opb.updateVerticesData(bb, wb, Mb, eb), this.opb
      }
      setIndices(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.opb && this.opb.setIndices(bb, wb), this.opb
      }
      isVerticesDataPresent(bb) {
        return this._sourceMesh.isVerticesDataPresent(bb)
      }
      ipb() {
        return this._sourceMesh.ipb()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let bb, wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.XN().isLocked) return this;
        bb = "object" === typeof wb ? wb : {
          applySkeleton: wb,
          applyMorph: Mb
        };
        const eb = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(bb, null, Lb.i.PositionKind), eb), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(bb, wb) {
        if (super._activate(bb, wb), this._sourceMesh.oR || Hb.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, bb), wb) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== lb.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new eb.b);
          const bb = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, eb.j.YC[7].eZ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.eZ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.eZ(eb.j.YC[7]), this._currentLOD._masterMesh = bb, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get QJ() {
        return !0
      }
      getLOD(bb) {
        if (!bb) return this;
        const wb = this.opb.getLODLevels();
        if (wb && 0 !== wb.length) {
          const wb = this.XN();
          this._currentLOD = this.opb.getLOD(bb, wb.Kpb)
        } else this._currentLOD = this.opb;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(bb) {
        return this.opb._preActivateForIntermediateRendering(bb)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.oR)
          for (let bb = 0; bb < this._sourceMesh.oR.length; bb++) this._sourceMesh.oR[bb].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.XN().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(bb);
        if (gb.e.DeepCopy(this, eb, ["name", "oR", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "opb", "QJ", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ypb", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hlb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), wb && (eb.parent = wb), !Mb)
          for (let Hb = 0; Hb < this.RJ().meshes.length; Hb++) {
            const bb = this.RJ().meshes[Hb];
            bb.parent === this && bb.clone(bb.name, eb)
          }
        return eb.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(eb), eb
      }
      dispose(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Tbb(this), super.dispose(bb, wb)
      }
      _serializeAsParent(bb) {
        super._serializeAsParent(bb), bb.parentId = this._sourceMesh.uniqueId, bb.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0, wb && wb.newSourcedMesh);
        eb && Mb && Mb(this, eb);
        for (const Hb of this.getChildTransformNodes(!0)) Hb.instantiateHierarchy(eb, wb, Mb);
        return eb
      }
    }
    let Ub = !1;

    function tb(bb, wb, Mb, eb, Hb) {
      for (let pb = 0; pb < wb.length; pb++) {
        const Vb = bb[wb[pb]] ?? 0,
          gb = Hb + Mb[pb];
        Vb.toArray ? Vb.toArray(eb, gb) : Vb.copyToArray ? Vb.copyToArray(eb, gb) : eb[gb] = Vb
      }
    }

    function Cb() {
      Ub || (Ub = !0, Vb.e._instancedMeshFactory = (bb, wb) => {
        const Mb = new Ob(bb, wb);
        if (wb.hN) {
          Mb.hN = {};
          for (const bb in wb.hN) Mb.hN[bb] = wb.hN[bb]
        }
        return Mb
      }, Vb.e.prototype.mN = function(bb, wb) {
        if (!this.hN) {
          this.hN = {};
          for (const bb of this.instances) bb.hN = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.DC().getCaps().vertexArrayObject ? {} : void 0
        }), this.hN[bb] = null, this._userInstancedBuffersStorage.strides[bb] = wb;
        const Mb = this._userInstancedBuffersStorage;
        Mb.interleavedKinds = [], Mb.interleavedOffsets = [], Mb.interleavedRowStride = 0;
        for (const eb in Mb.strides) Mb.interleavedKinds.push(eb), Mb.interleavedOffsets.push(Mb.interleavedRowStride), Mb.interleavedRowStride += Mb.strides[eb];
        Mb.interleavedData = new Float32Array(32 * Mb.interleavedRowStride);
        for (const eb in Mb.interleavedBuffers) Mb.interleavedBuffers[eb].buffer.dispose();
        Mb.interleavedBuffers = {}, Mb.vertexBuffers[bb] = null;
        for (const eb of this.instances) eb.hN[bb] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Vb.e.prototype._processInstancedBuffers = function(bb, wb) {
        const Mb = this._userInstancedBuffersStorage,
          eb = Mb.interleavedRowStride;
        if (!eb) return;
        const Hb = bb ? bb.length : 0,
          pb = (Hb + 1) * eb;
        let Vb = Mb.interleavedData;
        if (Vb.length < pb) {
          let bb = Vb.length;
          for (; bb < pb;) bb *= 2;
          Vb = Mb.interleavedData = new Float32Array(bb)
        }
        const gb = Mb.interleavedKinds,
          lb = Mb.interleavedOffsets;
        let Ib = 0;
        wb && (tb(this.hN, gb, lb, Vb, Ib), Ib += eb);
        for (let Lb = 0; Lb < Hb; Lb++) tb(bb[Lb].hN, gb, lb, Vb, Ib), Ib += eb;
        let Ob = "shared",
          Ub = Mb.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Ob = this._instanceDataStorage.engine.currentRenderPassId, Mb.renderPasses || (Mb.renderPasses = {}), Mb.renderPasses[Ob] || (Mb.renderPasses[Ob] = {}), Ub = Mb.renderPasses[Ob]);
        const Cb = Mb.interleavedBuffers[Ob];
        let Eb = !Cb || Cb.data !== Vb;
        for (let Lb = 0; !Eb && Lb < gb.length; Lb++) Eb = !Ub[gb[Lb]];
        if (!Eb) return void Cb.buffer.updateDirectly(Vb, 0);
        Cb?.buffer.dispose();
        const Fb = new Lb.d(this.DC(), Vb, !0, eb, !1, !0);
        for (let Lb = 0; Lb < gb.length; Lb++) {
          const bb = gb[Lb],
            wb = Fb.createVertexBuffer(bb, lb[Lb], Mb.strides[bb]);
          wb.hashCode += wb.byteOffset * 2 ** 24, Ub[bb] = wb
        }
        Mb.interleavedBuffers[Ob] = {
          buffer: Fb,
          data: Vb
        }, this._invalidateInstanceVertexArrayObject()
      }, Vb.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const bb in this._userInstancedBuffersStorage.vertexArrayObjects) this.DC().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[bb]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Vb.e.prototype._disposeInstanceSpecificData = function() {
        for (const wb in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[wb].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const wb in this.hN) this._userInstancedBuffersStorage.vertexBuffers[wb] && this._userInstancedBuffersStorage.vertexBuffers[wb].dispose();
        const bb = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (bb) {
          for (const wb in bb) bb[wb].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.hN = {}
      }, (0, Ib.e)("BABYLON.InstancedMesh", Ob))
    }
  },
  42078: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => ob,
      i: () => kb,
      j: () => ab
    });
    var eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb = Mb(38318),
      sb = Mb(41771),
      mb = Mb(41722),
      hb = Mb(39966),
      zb = Mb(41705),
      Xb = Mb(42085),
      xb = Mb(41879),
      jb = Mb(38285),
      Kb = Mb(38406),
      rb = Mb(41886),
      Rb = Mb(41816),
      Db = Mb(42091),
      cb = Mb(42093),
      Yb = Mb(42109),
      Zb = Mb(41972),
      fb = Mb(41963),
      Ab = Mb(42055),
      Wb = Mb(42124),
      Jb = Mb(42102),
      Sb = Mb(41697),
      Nb = Mb(39971),
      vb = Mb(38333),
      Qb = Mb(41554),
      Gb = Mb(41841);
    class qb {
      constructor(bb, wb) {
        this.distanceOrScreenCoverage = bb, this.mesh = wb
      }
    }
    class ab {}
    class ib {
      constructor() {
        this.batchCache = new db(this), this.batchCacheReplacementModeInFrozenMode = new db(this), this.instancesBufferSize = 2048
      }
    }
    class ub {
      constructor() {
        this.renderPasses = {}
      }
    }
    class db {
      constructor(bb) {
        this.parent = bb, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Pb {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class nb {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const yb = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class ob extends Yb.c {
      static _GetDefaultSideOrientation(bb) {
        return bb || ob.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== bb && (bb && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Rb.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Rb.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = bb, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Bb.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Bb.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Bb.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Bb.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Bb.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(bb) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(bb)
      }
      get ypb() {
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
      _copySource(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Hb = this.RJ();
        if (bb._geometry && bb._geometry.applyToMesh(this), hb.e.DeepCopy(bb, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ypb", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "QJ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hlb", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = bb, Hb.useClonedMeshMap && (bb._internalMeshDataInfo.meshMap || (bb._internalMeshDataInfo.meshMap = {}), bb._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = bb._originalBuilderSideOrientation, this._creationDataStorage = bb._creationDataStorage, bb._ranges) {
          const wb = bb._ranges;
          for (const bb in wb) Object.prototype.hasOwnProperty.call(wb, bb) && wb[bb] && this.createAnimationRange(bb, wb[bb].from, wb[bb].to)
        }
        if (bb.metadata && bb.metadata.clone ? this.metadata = bb.metadata.clone() : this.metadata = bb.metadata, this._internalMetadata = bb._internalMetadata, this.meshBlendingTag = bb.meshBlendingTag, zb.c && zb.c.HasTags(bb) && zb.c.AddTagsTo(this, zb.c.GetTags(bb, !0)), this.Bx(bb.isEnabled(!1)), this.parent = bb.parent, this.setPivotMatrix(bb.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + bb.id, this.material = bb.material, !wb) {
          const Hb = bb.getDescendants(!0);
          for (let bb = 0; bb < Hb.length; bb++) {
            const pb = Hb[bb];
            pb._isMesh ? (yb.parent = this, yb.doNotCloneChildren = wb, yb.clonePhysicsImpostor = Mb, yb.cloneThinInstances = eb, pb.clone(this.name + "." + pb.name, yb)) : pb.clone && pb.clone(this.name + "." + pb.name, this)
          }
        }
        if (bb.morphTargetManager && (this.morphTargetManager = bb.morphTargetManager), (0, Qb.e)(Hb.getPhysicsEngine)) {
          const wb = Hb.getPhysicsEngine();
          if (Mb && wb)
            if (1 === wb.getPluginVersion()) {
              const Mb = wb.getImpostorForPhysicsObject(bb);
              Mb && (this.physicsImpostor = Mb.clone(this))
            } else 2 === wb.getPluginVersion() && bb.physicsBody && bb.physicsBody.clone(this)
        }
        for (let pb = 0; pb < Hb.kR.length; pb++) {
          const wb = Hb.kR[pb];
          wb.emitter === bb && wb.clone(wb.name, this)
        }
        if (this.skeleton = bb.skeleton, eb && (bb._thinInstanceDataStorage.matrixData ? (this.gwb("matrix", new Float32Array(bb._thinInstanceDataStorage.matrixData), 16, !bb._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = bb._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = bb._thinInstanceDataStorage.matrixBufferSize, bb._userThinInstanceBuffersStorage)) {
          const wb = bb._userThinInstanceBuffersStorage;
          for (const bb in wb.data) this.gwb(bb, new Float32Array(wb.data[bb]), wb.strides[bb], !wb.vertexBuffers?.[bb]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[bb] = wb.sizes[bb]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(bb) {
        let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pb = arguments.length > 4 ? arguments[4] : void 0,
          Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(bb, Mb), this._internalMeshDataInfo = new nb, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Pb, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = ob.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Mb = this.RJ(), this._instanceDataStorage = new ub, this._instanceDataStorage.engine = Mb.DC(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new ib), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (bb, wb, Mb) => {
          bb && Mb && (this._uniformBuffer ? this.transferToEffect(wb) : Mb.bindOnlyWorldMatrix(wb))
        };
        let gb = !1;
        if (eb && void 0 === eb._addToSceneRootNodes) {
          const bb = eb;
          wb = bb.parent ?? null, Hb = bb.source ?? null, pb = bb.doNotCloneChildren ?? !1, Vb = bb.clonePhysicsImpostor ?? !0, gb = bb.cloneThinInstances ?? !1
        } else wb = eb;
        Hb && this._copySource(Hb, pb, Vb, gb), null !== wb && (this.parent = wb), this._instanceDataStorage.hardwareInstancedRendering = this.DC().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = bb => {
          bb.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Bb.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), Hb && Hb.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = 0 === this.getTotalVertices() || wb && wb.doNotInstantiate && (!0 === wb.doNotInstantiate || wb.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        eb.parent = bb || this.parent, eb.position = this.position.clone(), eb.CO = this.CO.clone(), this.rotationQuaternion ? eb.rotationQuaternion = this.rotationQuaternion.clone() : eb.rotation = this.rotation.clone(), Mb && Mb(this, eb);
        for (const Hb of this.getChildTransformNodes(!0)) "InstancedMesh" === Hb.getClassName() && "Mesh" === eb.getClassName() && Hb.opb === this ? Hb.instantiateHierarchy(eb, {
          doNotInstantiate: wb && wb.doNotInstantiate || !1,
          newSourcedMesh: eb
        }, Mb) : Hb.instantiateHierarchy(eb, wb, Mb);
        return eb
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(bb) {
        let wb = super.toString(bb);
        if (wb += ", n vertices: " + this.getTotalVertices(), wb += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Mb = 0; Mb < this.animations.length; Mb++) wb += ", animation[0]: " + this.animations[Mb].toString(bb);
        if (bb)
          if (this._geometry) {
            const bb = this.ipb(),
              Mb = this.getVerticesData(Rb.i.PositionKind);
            Mb && bb && (wb += ", flat shading: " + (Mb.length / 3 === bb.length ? "YES" : "NO"))
          } else wb += ", flat shading: UNKNOWN";
        return wb
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
        this._internalMeshDataInfo._LODLevels.sort(((wb, Mb) => wb.distanceOrScreenCoverage < Mb.distanceOrScreenCoverage ? bb : wb.distanceOrScreenCoverage > Mb.distanceOrScreenCoverage ? -bb : 0))
      }
      addLODLevel(bb, wb) {
        if (wb && wb._masterMesh) return Nb.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const Mb = new qb(bb, wb);
        return this._internalMeshDataInfo._LODLevels.push(Mb), wb && (wb._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(bb) {
        const wb = this._internalMeshDataInfo;
        for (let Mb = 0; Mb < wb._LODLevels.length; Mb++) {
          const eb = wb._LODLevels[Mb];
          if (eb.distanceOrScreenCoverage === bb) return eb.mesh
        }
        return null
      }
      removeLODLevel(bb) {
        const wb = this._internalMeshDataInfo;
        for (let Mb = 0; Mb < wb._LODLevels.length; Mb++) wb._LODLevels[Mb].mesh === bb && (wb._LODLevels.splice(Mb, 1), bb && (bb._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(bb, wb) {
        const Mb = this._internalMeshDataInfo;
        if (!Mb._LODLevels || 0 === Mb._LODLevels.length) return this;
        const eb = wb || this.XN().Kpb,
          Hb = bb.mode === xb.c.ORTHOGRAPHIC_CAMERA ? bb.minZ : eb.centerWorld.subtract(bb.globalPosition).length();
        let pb = Hb,
          Vb = 1;
        if (Mb._useLODScreenCoverage) {
          const wb = bb.screenArea;
          let Mb = eb.radiusWorld * bb.minZ / Hb;
          Mb = Mb * Mb * Math.PI, pb = Mb / wb, Vb = -1
        }
        if (Vb * Mb._LODLevels[Mb._LODLevels.length - 1].distanceOrScreenCoverage > Vb * pb) return this.onLODLevelSelection && this.onLODLevelSelection(pb, this, this), this;
        for (let gb = 0; gb < Mb._LODLevels.length; gb++) {
          const bb = Mb._LODLevels[gb];
          if (Vb * bb.distanceOrScreenCoverage < Vb * pb) {
            if (bb.mesh) {
              if (4 === bb.mesh.delayLoadState) return bb.mesh._checkDelayState(), this;
              if (2 === bb.mesh.delayLoadState) return this;
              bb.mesh._preActivate(), bb.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(pb, this, bb.mesh), bb.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(pb, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(bb, wb, Mb, eb) {
        if (!this._geometry) return null;
        let Hb = eb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]?.getFloatData(this.instances.length + 1, Mb || wb && 1 !== this._geometry.meshes.length);
        return Hb || (Hb = this._geometry.getVerticesData(bb, wb, Mb)), Hb
      }
      copyVerticesData(bb, wb) {
        this._geometry && this._geometry.copyVerticesData(bb, wb)
      }
      getVertexBuffer(bb, wb) {
        return this._geometry ? (wb ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[bb]) ?? this._geometry.getVertexBuffer(bb) : null
      }
      isVerticesDataPresent(bb, wb) {
        return this._geometry ? !wb && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[bb] || this._geometry.isVerticesDataPresent(bb) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb)
      }
      isVertexBufferUpdatable(bb, wb) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(bb);
        if (!wb) {
          const wb = this._userInstancedBuffersStorage?.vertexBuffers[bb];
          if (wb) return wb.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(bb)
      }
      getVerticesDataKinds(bb) {
        if (!this._geometry) {
          const bb = [];
          if (this._delayInfo)
            for (const wb of this._delayInfo) bb.push(wb);
          return bb
        }
        const wb = this._geometry.getVerticesDataKinds();
        if (!bb && this._userInstancedBuffersStorage)
          for (const Mb in this._userInstancedBuffersStorage.vertexBuffers) - 1 === wb.indexOf(Mb) && wb.push(Mb);
        return wb
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      ipb(bb, wb) {
        return this._geometry ? this._geometry.ipb(bb, wb) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(bb)) return !1;
        if (!this.oR || 0 === this.oR.length) return !0;
        if (!bb) return !0;
        const Mb = this.DC(),
          eb = this.RJ(),
          Hb = wb || Mb.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const pb = this.material || eb.defaultMaterial;
        if (pb)
          if (pb._storeEffectOnSubMeshes)
            for (const gb of this.oR) {
              const bb = gb.AC();
              if (bb)
                if (bb._storeEffectOnSubMeshes) {
                  if (!bb.isReadyForSubMesh(this, gb, Hb)) return !1
                } else if (!bb.isReady(this, Hb)) return !1
            } else if (!pb.isReady(this, Hb)) return !1;
        const Vb = Mb.currentRenderPassId;
        for (const gb of this.lightSources) {
          const bb = gb.getShadowGenerators();
          if (!bb) continue;
          const wb = bb.values();
          for (let eb = wb.next(); !0 !== eb.done; eb = wb.next()) {
            const bb = eb.value;
            if (bb && (!bb.getShadowMap()?.renderList || bb.getShadowMap()?.renderList && -1 !== bb.getShadowMap()?.renderList?.indexOf(this))) {
              const wb = bb.getShadowMap().renderPassIds ?? [Mb.currentRenderPassId];
              for (let eb = 0; eb < wb.length; ++eb) {
                Mb.currentRenderPassId = wb[eb];
                for (const wb of this.oR)
                  if (!bb.isReady(wb, Hb, wb.AC()?.needAlphaBlendingForMesh(this) ?? !1)) return Mb.currentRenderPassId = Vb, !1
              }
              Mb.currentRenderPassId = Vb
            }
          }
        }
        for (const gb of this._internalMeshDataInfo._LODLevels)
          if (gb.mesh && !gb.mesh.isReady(Hb)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      WC() {
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
        let wb = this._instanceDataStorage.renderPasses[bb];
        return wb || (wb = new ib, this._instanceDataStorage.renderPasses[bb] = wb), wb
      }
      _preActivate() {
        const bb = this._internalMeshDataInfo,
          wb = this.RJ().getRenderId();
        return bb._preActivateId === wb || (bb._preActivateId = wb, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(bb) {
        const wb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return wb.visibleInstances && (wb.visibleInstances.intermediateDefaultRenderId = bb), this
      }
      _registerInstanceForRenderId(bb, wb) {
        const Mb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Mb.visibleInstances || (Mb.visibleInstances = {
          defaultRenderId: wb,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Mb.visibleInstances[wb] || (void 0 === Mb.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Mb.visibleInstances[Mb.previousRenderId], Mb.previousRenderId = wb, Mb.visibleInstances[wb] = new Array), Mb.visibleInstances[wb].push(bb), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.fC || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let bb, wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.XN().isLocked) return this;
        bb = "object" === typeof wb ? wb : {
          applySkeleton: wb,
          applyMorph: Mb
        };
        const eb = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(bb, null, Rb.i.PositionKind), eb), this
      }
      _createGlobalSubMesh(bb) {
        const wb = this.getTotalVertices();
        if (!wb || !this.ipb()) return null;
        if (this.oR && this.oR.length > 0) {
          const Mb = this.ipb();
          if (!Mb) return null;
          const eb = Mb.length;
          let Hb = !1;
          if (bb) Hb = !0;
          else
            for (const bb of this.oR) {
              if (bb.indexStart + bb.indexCount > eb) {
                Hb = !0;
                break
              }
              if (bb.verticesStart + bb.verticesCount > wb) {
                Hb = !0;
                break
              }
            }
          if (!Hb) return this.oR[0]
        }
        return this.releaseSubMeshes(), new Zb.d(0, 0, wb, 0, this.getTotalIndices() || (this.isUnIndexed ? wb : 0), this)
      }
      subdivide(bb) {
        if (bb < 1) return;
        const wb = this.getTotalIndices();
        let Mb = wb / bb | 0,
          eb = 0;
        for (; Mb % 3 !== 0;) Mb++;
        this.releaseSubMeshes();
        for (let Hb = 0; Hb < bb && !(eb >= wb); Hb++) Zb.d.CreateFromIndices(0, eb, eb + Mb >= wb ? wb - eb : Mb, this, void 0, !1), eb += Mb;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(bb, wb, Mb, eb);
        else {
          const eb = new Db.d;
          eb.set(wb, bb);
          const Hb = this.RJ();
          new cb.c(cb.c.RandomId(), Hb, eb, Mb, this)
        }
        return this
      }
      removeVerticesData(bb) {
        this._geometry && this._geometry.removeVerticesData(bb)
      }
      markVerticesDataAsUpdatable(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this.getVertexBuffer(bb);
        Mb && Mb.isUpdatable() !== wb && this.setVerticesData(bb, this.getVerticesData(bb), wb)
      }
      setVerticesBuffer(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = cb.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(bb, Mb, wb), this
      }
      updateVerticesData(bb, wb, Mb, eb) {
        return this._geometry ? (eb ? (this.makeGeometryUnique(), this.updateVerticesData(bb, wb, Mb, !1)) : this._geometry.updateVerticesData(bb, wb, Mb), this) : this
      }
      updateMeshPositions(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this.getVerticesData(Rb.i.PositionKind);
        if (!Mb) return this;
        if (bb(Mb), this.updateVerticesData(Rb.i.PositionKind, Mb, !1, !1), wb) {
          const bb = this.ipb(),
            wb = this.getVerticesData(Rb.i.NormalKind);
          if (!wb) return this;
          Db.d.ComputeNormals(Mb, bb, wb), this.updateVerticesData(Rb.i.NormalKind, wb, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const bb = this._geometry,
          wb = this._geometry.copy(cb.c.RandomId());
        return bb.releaseForMesh(this, !0), wb.applyToMesh(this), this
      }
      setIndexBuffer(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Hb = this._geometry;
        Hb || (Hb = new cb.c(cb.c.RandomId(), this.RJ(), void 0, void 0, this)), Hb.setIndexBuffer(bb, wb, Mb, eb)
      }
      setIndices(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(bb, wb, Mb, eb);
        else {
          const eb = new Db.d;
          eb.indices = bb;
          const Hb = this.RJ();
          new cb.c(cb.c.RandomId(), Hb, eb, Mb, this, wb)
        }
        return this
      }
      updateIndices(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(bb, wb, Mb), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(bb, wb, Mb) {
        let eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Hb = this.RJ().DC();
        let pb;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Mb) === fb.b.WireFrameFillMode) pb = bb._getLinesIndexBuffer(this.ipb(), Hb);
          else pb = null;
        else switch (this._getRenderingFillMode(Mb)) {
          case fb.b.PointFillMode:
            pb = null;
            break;
          case fb.b.WireFrameFillMode:
            pb = bb._getLinesIndexBuffer(this.ipb(), Hb);
            break;
          default:
          case fb.b.TriangleFillMode:
            pb = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(wb, pb, eb)
      }
      _bindDirect(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(bb), Mb && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const bb = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const wb in bb) this._userInstancedBuffersStorage.vertexBuffers[wb] = bb[wb]
          }
          this._geometry._bind(bb, wb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(bb, wb);
        return this
      }
      _draw(bb, wb, Mb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const eb = this.RJ().DC(),
          Hb = eb._currentMaterialContext,
          pb = Hb && Hb.useVertexPulling;
        return this._unIndexed && wb !== fb.b.WireFrameFillMode || wb == fb.b.PointFillMode ? eb.drawArraysType(wb, bb.verticesStart, bb.verticesCount, this.forcedInstanceCount || Mb) : wb == fb.b.WireFrameFillMode ? eb.drawElementsType(wb, 0, bb._linesIndexCount, this.forcedInstanceCount || Mb) : pb ? eb.drawArraysType(wb, bb.indexStart, bb.indexCount, this.forcedInstanceCount || Mb) : eb.drawElementsType(wb, bb.indexStart, bb.indexCount, this.forcedInstanceCount || Mb), this
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (wb) return Mb.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[bb] = !1, Mb.batchCacheReplacementModeInFrozenMode.renderSelf[bb] = !0, Mb.batchCacheReplacementModeInFrozenMode;
          if (Mb.previousBatch) return Mb.previousBatch
        }
        const eb = this.RJ(),
          Hb = eb._isInIntermediateRendering(),
          pb = Hb ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Vb = Mb.batchCache;
        if (Vb.mustReturn = !1, Vb.renderSelf[bb] = wb || !pb && this.isEnabled() && this.isVisible, Vb.visibleInstances[bb] = null, Mb.visibleInstances && !wb) {
          const wb = Mb.visibleInstances,
            pb = eb.getRenderId(),
            gb = Hb ? wb.intermediateDefaultRenderId : wb.defaultRenderId;
          Vb.visibleInstances[bb] = wb[pb], !Vb.visibleInstances[bb] && gb && (Vb.visibleInstances[bb] = wb[gb])
        }
        return Vb.hardwareInstancedRendering[bb] = !wb && this._instanceDataStorage.hardwareInstancedRendering && null !== Vb.visibleInstances[bb] && void 0 !== Vb.visibleInstances[bb], Mb.previousBatch = Vb, Vb
      }
      _updateInstancedBuffers(bb, wb, Mb, eb, Hb, pb) {
        const Vb = wb.visibleInstances[bb._id],
          gb = Vb ? Vb.length : 0,
          lb = wb.parent,
          Lb = this._instanceDataStorage;
        let Ib = lb.instancesBuffer,
          Ob = lb.instancesPreviousBuffer,
          Ub = 0,
          tb = 0;
        const Cb = wb.renderSelf[bb._id],
          Eb = this._scene.floatingOriginOffset,
          Fb = !Ib || Mb !== lb.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !lb.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Lb.isFrozen && !Fb) tb = (Cb ? 1 : 0) + gb;
        else {
          const wb = this.getWorldMatrix();
          if (Cb) {
            this._scene.needsPreviousWorldMatrices && (Lb.masterMeshPreviousWorldMatrix ? (Lb.masterMeshPreviousWorldMatrix.copyToArray(lb.instancesPreviousData, Ub), Lb.masterMeshPreviousWorldMatrix.eZ(wb)) : (Lb.masterMeshPreviousWorldMatrix = wb.clone(), Lb.masterMeshPreviousWorldMatrix.copyToArray(lb.instancesPreviousData, Ub))), wb.copyToArray(lb.instancesData, Ub);
            const bb = wb.ppb();
            lb.instancesData[Ub + 12] = bb[12] - Eb.x, lb.instancesData[Ub + 13] = bb[13] - Eb.y, lb.instancesData[Ub + 14] = bb[14] - Eb.z, Ub += 16, tb++
          }
          if (Vb) {
            if (ob.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && bb.AC()?.needAlphaBlendingForMesh(bb.getRenderingMesh())) {
              const bb = this._scene.activeCamera.globalPosition;
              for (let wb = 0; wb < Vb.length; wb++) {
                const Mb = Vb[wb];
                Mb._distanceToCamera = jb.o.Distance(Mb.XN().Kpb.centerWorld, bb)
              }
              Vb.sort(((bb, wb) => bb._distanceToCamera > wb._distanceToCamera ? -1 : bb._distanceToCamera < wb._distanceToCamera ? 1 : 0))
            }
            for (let bb = 0; bb < Vb.length; bb++) {
              const wb = Vb[bb],
                Mb = wb.getWorldMatrix();
              Mb.copyToArray(lb.instancesData, Ub), this._scene.needsPreviousWorldMatrices && (wb._previousWorldMatrix ? (wb._previousWorldMatrix.copyToArray(lb.instancesPreviousData, Ub), wb._previousWorldMatrix.eZ(Mb)) : (wb._previousWorldMatrix = Mb.clone(), wb._previousWorldMatrix.copyToArray(lb.instancesPreviousData, Ub)));
              const eb = Mb.ppb();
              lb.instancesData[Ub + 12] = eb[12] - Eb.x, lb.instancesData[Ub + 13] = eb[13] - Eb.y, lb.instancesData[Ub + 14] = eb[14] - Eb.z, Ub += 16, tb++
            }
          }
        }
        if (Fb) {
          let bb;
          if (Ib && Ib.dispose(), Ob && Ob.dispose(), Ib = new Rb.d(eb, lb.instancesData, !0, 16, !1, !0), lb.instancesBuffer = Ib, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.DC().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) bb = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const wb = this._instanceDataStorage.engine.currentRenderPassId;
            bb = this._userInstancedBuffersStorage.renderPasses[wb], bb || (this._userInstancedBuffersStorage.renderPasses[wb] = bb = {})
          }
          bb.world0 = Ib.createVertexBuffer("world0", 0, 4), bb.world1 = Ib.createVertexBuffer("world1", 4, 4), bb.world2 = Ib.createVertexBuffer("world2", 8, 4), bb.world3 = Ib.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Ob = new Rb.d(eb, lb.instancesPreviousData, !0, 16, !1, !0), lb.instancesPreviousBuffer = Ob, bb.previousWorld0 = Ob.createVertexBuffer("previousWorld0", 0, 4), bb.previousWorld1 = Ob.createVertexBuffer("previousWorld1", 4, 4), bb.previousWorld2 = Ob.createVertexBuffer("previousWorld2", 8, 4), bb.previousWorld3 = Ob.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Ib.updateDirectly(lb.instancesData, 0, tb), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Ob.updateDirectly(lb.instancesPreviousData, 0, tb));
        this._processInstancedBuffers(Vb, Cb), pb && void 0 !== Hb && (this.RJ()._activeIndices.addCount(bb.indexCount * tb, !1), eb._currentDrawContext && (eb._currentDrawContext.useInstancing = !0), this._bind(bb, pb, Hb), this._draw(bb, Hb, tb)), !this._scene.needsPreviousWorldMatrices || Fb || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Ob.updateDirectly(lb.instancesData, 0, tb)
      }
      _renderWithInstances(bb, wb, Mb, eb, Hb) {
        const pb = Mb.visibleInstances[bb._id],
          Vb = pb ? pb.length : 0,
          gb = Mb.parent,
          lb = gb.instancesBufferSize,
          Lb = 16 * (Vb + 1) * 4;
        for (; gb.instancesBufferSize < Lb;) gb.instancesBufferSize *= 2;
        return gb.instancesData && lb == gb.instancesBufferSize || (gb.instancesData = new Float32Array(gb.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !gb.instancesPreviousData || lb != gb.instancesBufferSize) && (gb.instancesPreviousData = new Float32Array(gb.instancesBufferSize / 4)), this._updateInstancedBuffers(bb, Mb, lb, Hb, wb, eb), Hb.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(bb, wb, Mb, eb) {
        const Hb = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.RJ()._activeIndices.addCount(bb.indexCount * Hb, !1), eb._currentDrawContext && (eb._currentDrawContext.useInstancing = !0), this._bind(bb, Mb, wb), this._draw(bb, wb, Hb), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Hb) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), eb.unbindInstanceAttributes()
      }
      _processInstancedBuffers(bb, wb) {}
      _processRendering(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = this.RJ(),
          Lb = lb.DC();
        if (eb = this._getRenderingFillMode(eb), pb && wb.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(wb, eb, Mb, Lb), this;
        if (pb) this._renderWithInstances(wb, eb, Hb, Mb, Lb);
        else {
          Lb._currentDrawContext && (Lb._currentDrawContext.useInstancing = !1);
          let Mb = 0;
          Hb.renderSelf[wb._id] && (Vb && Vb(!1, bb.getWorldMatrix(), gb), Mb++, this._draw(wb, eb, this._instanceDataStorage.overridenInstanceCount));
          const pb = Hb.visibleInstances[wb._id];
          if (pb) {
            const bb = pb.length;
            Mb += bb;
            for (let Mb = 0; Mb < bb; Mb++) {
              const bb = pb[Mb].getWorldMatrix();
              Vb && Vb(!0, bb, gb), this._draw(wb, eb)
            }
          }
          lb._activeIndices.addCount(wb.indexCount * Mb, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb?.instancesBuffer && (wb && bb.instancesBuffer.dispose(), bb.instancesBuffer = null), bb?.instancesPreviousBuffer && (wb && bb.instancesPreviousBuffer.dispose(), bb.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const wb in this._instanceDataStorage.renderPasses) {
          const Mb = this._instanceDataStorage.renderPasses[wb];
          this._disposeInstanceDataStorageRenderPass(Mb, bb)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, bb), this._userInstancedBuffersStorage) {
          for (const wb in this._userInstancedBuffersStorage.vertexBuffers) {
            const Mb = this._userInstancedBuffersStorage.vertexBuffers[wb];
            Mb && (bb && Mb.dispose(), this._userInstancedBuffersStorage.vertexBuffers[wb] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(bb)
      }
      _releaseRenderPassId(bb) {
        const wb = this._instanceDataStorage.renderPasses[bb];
        if (wb && (this._disposeInstanceDataStorageRenderPass(wb, !0), delete this._instanceDataStorage.renderPasses[bb]), this._userInstancedBuffersStorage?.renderPasses) {
          const wb = this._userInstancedBuffersStorage.renderPasses[bb];
          if (wb)
            for (const bb in wb) wb[bb]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[bb]
        }
        const Mb = this._userInstancedBuffersStorage?.interleavedBuffers;
        Mb?.[bb] && (Mb[bb].buffer.dispose(), delete Mb[bb])
      }
      _freeze() {
        if (this.oR) {
          for (let bb = 0; bb < this.oR.length; bb++) this._getInstancesRenderList(bb);
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
      renderWithRenderPassId(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const pb = this._scene.DC(),
          Vb = pb.currentRenderPassId;
        if (void 0 !== bb && (pb.currentRenderPassId = bb), eb)(!Hb || Hb && eb.isInFrustum(this._scene._frustumPlanes)) && this.render(eb, !!wb, Mb);
        else
          for (let gb = 0; gb < this.oR.length; gb++) {
            const bb = this.oR[gb];
            (!Hb || Hb && bb.isInFrustum(this._scene._frustumPlanes)) && this.render(bb, !!wb, Mb)
          }
        return void 0 !== bb && (pb.currentRenderPassId = Vb), this
      }
      directRender() {
        if (!this.oR) return this;
        for (const bb of this.oR) this.render(bb, !1);
        return this
      }
      render(bb, wb, Mb) {
        const eb = this.RJ(),
          Hb = eb.DC();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const pb = eb.activeCameras?.length ?? 0,
          Vb = pb > 1 && eb.activeCamera === eb.activeCameras[0] || pb <= 1,
          gb = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Hb.currentRenderPassId;
        if (Vb && this._checkOcclusionQuery(gb) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const lb = this._getInstancesRenderList(bb._id, !!Mb);
        if (lb.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Lb = 0,
          Ib = null;
        this.ignoreCameraMaxZ && eb.activeCamera && !eb._isInIntermediateRendering() && (Lb = eb.activeCamera.maxZ, Ib = eb.activeCamera, eb.activeCamera.maxZ = 0, eb.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Ob = bb.getRenderingMesh(),
          Ub = lb.hardwareInstancedRendering[bb._id] || Ob.hasThinInstances || !!this._userInstancedBuffersStorage && !bb.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          tb = this._instanceDataStorage,
          Cb = bb.AC();
        if (!Cb) return Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), this;
        if (tb.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Cb) {
          if (Cb._storeEffectOnSubMeshes && !bb._drawWrapper?._wasPreviouslyReady || !Cb._storeEffectOnSubMeshes && !Cb._getDrawWrapper()._wasPreviouslyReady) return Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), this
        } else {
          if (Cb._storeEffectOnSubMeshes) {
            if (!Cb.isReadyForSubMesh(this, bb, Ub)) return Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), this
          } else if (!Cb.isReady(this, Ub)) return Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Cb
        }
        if (wb) {
          const bb = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === bb.alphaModes.length) Hb.setAlphaMode(bb.alphaMode);
          else
            for (let wb = 0; wb < bb.alphaModes.length; wb++) {
              const Mb = bb.alphaModes[wb];
              Hb.setAlphaMode(void 0 !== Mb ? Mb : 2, !1, wb)
            }
        }
        let Eb;
        Eb = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? bb._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Fb = Eb?.effect ?? null;
        for (let xb = 0, jb = eb._beforeRenderingMeshStage; xb < jb.length; xb++) {
          jb[xb].action(this, bb, lb, Fb)
        }
        if (!Eb || !Fb) return Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), this;
        const Bb = Mb || this;
        let sb;
        if (!tb.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const bb = Bb._getWorldMatrixDeterminant();
          sb = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), bb < 0 && (sb = sb === fb.b.ClockWiseSideOrientation ? fb.b.CounterClockWiseSideOrientation : fb.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = sb
        }
        const mb = this._internalMeshDataInfo._effectiveMaterial._preBind(Eb, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Hb.setDepthWrite(!0);
        const hb = this._internalMeshDataInfo._effectiveMaterial,
          zb = hb.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Ub || this._bind(bb, Fb, zb, !1);
        const Xb = Bb.getWorldMatrix();
        hb._storeEffectOnSubMeshes ? hb.bindForSubMesh(Xb, this, bb) : hb.bind(Xb, this);
        try {
          Ab.b._BindAttachmentsForEffect(Hb, Fb) && (!hb.backFaceCulling && hb.separateCullingPass && (Hb.setState(!0, hb.zOffset, !1, !mb, hb.cullBackFaces, hb.stencil, hb.zOffsetUnits), this._processRendering(this, bb, Fb, zb, lb, Ub, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Hb.setState(!0, hb.zOffset, !1, mb, hb.cullBackFaces, hb.stencil, hb.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(bb)), this._processRendering(this, bb, Fb, zb, lb, Ub, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Ab.b._RestoreAttachments(Hb)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let xb = 0, jb = eb._afterRenderingMeshStage; xb < jb.length; xb++) {
          jb[xb].action(this, bb, lb, Fb)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Ib && (Ib.maxZ = Lb, eb.updateTransformMatrix(!0)), 2 !== eb.performancePriority || tb.isFrozen || this._freeze(), this
      }
      _renderRunFollower(bb, wb) {
        const Mb = this._scene,
          eb = Mb._engine;
        if (eb.isWebGPU || bb._mesh !== this || 0 !== this.instances.length || this.render !== ob.prototype.render) return !1;
        const Hb = bb.AC();
        if (!Hb || Hb !== Mb._cachedMaterial || void 0 === Hb._canBindRunFollower) return !1;
        const pb = bb._drawWrapper,
          Vb = pb?.effect;
        if (!Vb || Vb !== Mb._cachedEffect || this.visibility !== Mb._cachedVisibility || pb._forceRebindOnNextCall) return !1;
        const gb = this.hasThinInstances;
        if (!gb && this._userInstancedBuffersStorage) return !1;
        if (!pb._wasPreviouslyReady || pb._wasPreviouslyUsingInstances !== gb) return !1;
        const lb = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Mb._isInIntermediateRendering() || 0 !== Mb._beforeRenderingMeshStage.length || 0 !== Mb._afterRenderingMeshStage.length || lb._onBeforeRenderObservable?.hasObservers() || lb._onBeforeBindObservable?.hasObservers() || lb._onAfterRenderObservable?.hasObservers()) return !1;
        const Lb = this.occlusionType;
        if (void 0 !== Lb && Lb !== Yb.c.OCCLUSION_TYPE_NONE || !Hb._canBindRunFollower(Mb, eb, this, bb, Vb)) return !1;
        const Ib = this._internalAbstractMeshDataInfo,
          Ob = Ib._isActiveIntermediate;
        Ob ? Ib._isActiveIntermediate = !1 : Ib._isActive = !1;
        const Ub = Mb.activeCameras?.length ?? 0;
        (Ub > 1 && Mb.activeCamera === Mb.activeCameras[0] || Ub <= 1) && this._checkOcclusionQuery(!1);
        const tb = this._getInstancesRenderList(bb._id);
        if (tb.mustReturn) return !0;
        if (!gb && !tb.renderSelf[bb._id]) return Ob ? Ib._isActiveIntermediate = !0 : Ib._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (lb._effectiveMaterial = Hb, wb)
          if (1 === Hb.alphaModes.length) eb.setAlphaMode(Hb.alphaMode);
          else
            for (let Eb = 0; Eb < Hb.alphaModes.length; Eb++) {
              const bb = Hb.alphaModes[Eb];
              eb.setAlphaMode(void 0 !== bb ? bb : 2, !1, Eb)
            }
        if (Hb.backFaceCulling || null !== Hb.sideOrientation || Hb._twoSidedLighting) {
          const bb = this._getWorldMatrixDeterminant();
          let wb = Hb._getEffectiveOrientation(this);
          bb < 0 && (wb = wb === fb.b.ClockWiseSideOrientation ? fb.b.CounterClockWiseSideOrientation : fb.b.ClockWiseSideOrientation), lb._effectiveSideOrientation = wb
        }
        Hb._preBind(pb, lb._effectiveSideOrientation), Hb.forceDepthWrite && eb.setDepthWrite(!0);
        const Cb = Hb.fillMode;
        return gb || this._bind(bb, Vb, Cb, !1), Hb._bindRunFollower(this.getWorldMatrix(), this, bb, Vb), this._processRendering(this, bb, Vb, Cb, tb, gb, this._onBeforeDraw, Hb), Hb.unbind(), 2 === Mb.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Rb.i.MatricesWeightsKind) && (this.isVerticesDataPresent(Rb.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const bb = this.getVerticesData(Rb.i.MatricesWeightsKind),
          wb = bb.length;
        for (let Mb = 0; Mb < wb; Mb += 4) {
          const wb = bb[Mb] + bb[Mb + 1] + bb[Mb + 2] + bb[Mb + 3];
          if (0 === wb) bb[Mb] = 1;
          else {
            const eb = 1 / wb;
            bb[Mb] *= eb, bb[Mb + 1] *= eb, bb[Mb + 2] *= eb, bb[Mb + 3] *= eb
          }
        }
        this.setVerticesData(Rb.i.MatricesWeightsKind, bb)
      }
      _normalizeSkinWeightsAndExtra() {
        const bb = this.getVerticesData(Rb.i.MatricesWeightsExtraKind),
          wb = this.getVerticesData(Rb.i.MatricesWeightsKind),
          Mb = wb.length;
        for (let eb = 0; eb < Mb; eb += 4) {
          let Mb = wb[eb] + wb[eb + 1] + wb[eb + 2] + wb[eb + 3];
          if (Mb += bb[eb] + bb[eb + 1] + bb[eb + 2] + bb[eb + 3], 0 === Mb) wb[eb] = 1;
          else {
            const Hb = 1 / Mb;
            wb[eb] *= Hb, wb[eb + 1] *= Hb, wb[eb + 2] *= Hb, wb[eb + 3] *= Hb, bb[eb] *= Hb, bb[eb + 1] *= Hb, bb[eb + 2] *= Hb, bb[eb + 3] *= Hb
          }
        }
        this.setVerticesData(Rb.i.MatricesWeightsKind, wb), this.setVerticesData(Rb.i.MatricesWeightsKind, bb)
      }
      validateSkinning() {
        const bb = this.getVerticesData(Rb.i.MatricesWeightsExtraKind),
          wb = this.getVerticesData(Rb.i.MatricesWeightsKind);
        if (null === wb || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          bO: "not skinned"
        };
        const Mb = wb.length;
        let eb = 0,
          Hb = 0,
          pb = 0,
          Vb = 0;
        const gb = null === bb ? 4 : 8,
          lb = [];
        for (let tb = 0; tb <= gb; tb++) lb[tb] = 0;
        for (let tb = 0; tb < Mb; tb += 4) {
          let Mb = wb[tb],
            Lb = Mb,
            Ib = 0 === Lb ? 0 : 1;
          for (let Hb = 1; Hb < gb; Hb++) {
            const pb = Hb < 4 ? wb[tb + Hb] : bb[tb + Hb - 4];
            pb > Mb && eb++, 0 !== pb && Ib++, Lb += pb, Mb = pb
          }
          if (lb[Ib]++, Ib > pb && (pb = Ib), 0 === Lb) Hb++;
          else {
            const Mb = 1 / Lb;
            let eb = 0;
            for (let Hb = 0; Hb < gb; Hb++) eb += Hb < 4 ? Math.abs(wb[tb + Hb] - wb[tb + Hb] * Mb) : Math.abs(bb[tb + Hb - 4] - bb[tb + Hb - 4] * Mb);
            eb > .001 && Vb++
          }
        }
        const Lb = this.skeleton.bones.length,
          Ib = this.getVerticesData(Rb.i.MatricesIndicesKind),
          Ob = this.getVerticesData(Rb.i.MatricesIndicesExtraKind);
        let Ub = 0;
        for (let tb = 0; tb < Mb; tb += 4)
          for (let bb = 0; bb < gb; bb++) {
            const wb = bb < 4 ? Ib[tb + bb] : Ob[tb + bb - 4];
            (wb >= Lb || wb < 0) && Ub++
          }
        return {
          skinned: !0,
          valid: 0 === Hb && 0 === Vb && 0 === Ub,
          bO: "Number of Weights = " + Mb / 4 + "\nMaximum influences = " + pb + "\nMissing Weights = " + Hb + "\nNot Sorted = " + eb + "\nNot Normalized = " + Vb + "\nWeightCounts = [" + lb + "]\nNumber of bones = " + Lb + "\nBad Bone Indices = " + Ub
        }
      }
      _checkDelayState() {
        const bb = this.RJ();
        return this._geometry ? this._geometry.load(bb) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(bb)), this
      }
      _queueLoad(bb) {
        bb.addPendingData(this);
        const wb = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Mb = await bb._loadDelayedFileAsync(this.delayLoadingFile, wb, !0);
            Mb instanceof ArrayBuffer ? this._delayLoadingFunction(Mb, this) : this._delayLoadingFunction(JSON.parse(Mb), this);
            for (const bb of this.instances) bb.refreshBoundingInfo(), bb._syncSubMeshes();
            this.delayLoadState = 1, bb.removePendingData(this)
          } catch (Mb) {
            bb.removePendingData(this), bb.RD || Nb.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Mb}`)
          }
        })(), this
      }
      isInFrustum(bb) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(bb) && (this._checkDelayState(), !0))
      }
      setMaterialById(bb) {
        const wb = this.RJ().materials;
        let Mb;
        for (Mb = wb.length - 1; Mb > -1; Mb--)
          if (wb[Mb].id === bb) return this.material = wb[Mb], this;
        const eb = this.RJ().multiMaterials;
        for (Mb = eb.length - 1; Mb > -1; Mb--)
          if (eb[Mb].id === bb) return this.material = eb[Mb], this;
        return this
      }
      getAnimatables() {
        const bb = [];
        return this.material && bb.push(this.material), this.skeleton && bb.push(this.skeleton), bb
      }
      bakeTransformIntoVertices(bb) {
        if (!this.isVerticesDataPresent(Rb.i.PositionKind)) return this;
        const wb = this.oR.splice(0);
        this._resetPointsArrayCache();
        let Mb = this.getVerticesData(Rb.i.PositionKind);
        const eb = jb.o.Zero();
        let Hb;
        for (Hb = 0; Hb < Mb.length; Hb += 3) jb.o.TransformCoordinatesFromFloatsToRef(Mb[Hb], Mb[Hb + 1], Mb[Hb + 2], bb, eb).toArray(Mb, Hb);
        if (this.setVerticesData(Rb.i.PositionKind, Mb, this.getVertexBuffer(Rb.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(Rb.i.NormalKind)) {
          for (Mb = this.getVerticesData(Rb.i.NormalKind), Hb = 0; Hb < Mb.length; Hb += 3) jb.o.TransformNormalFromFloatsToRef(Mb[Hb], Mb[Hb + 1], Mb[Hb + 2], bb, eb).normalize().toArray(Mb, Hb);
          this.setVerticesData(Rb.i.NormalKind, Mb, this.getVertexBuffer(Rb.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Rb.i.TangentKind)) {
          for (Mb = this.getVerticesData(Rb.i.TangentKind), Hb = 0; Hb < Mb.length; Hb += 4) jb.o.TransformNormalFromFloatsToRef(Mb[Hb], Mb[Hb + 1], Mb[Hb + 2], bb, eb).normalize().toArray(Mb, Hb);
          this.setVerticesData(Rb.i.TangentKind, Mb, this.getVertexBuffer(Rb.i.TangentKind).isUpdatable())
        }
        return bb.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.oR = wb, this
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
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (wb && void 0 === wb._addToSceneRootNodes) {
          const Mb = wb;
          return yb.source = this, yb.doNotCloneChildren = Mb.doNotCloneChildren, yb.clonePhysicsImpostor = Mb.clonePhysicsImpostor, yb.cloneThinInstances = Mb.cloneThinInstances, new ob(bb, this.RJ(), yb)
        }
        return new ob(bb, this.RJ(), wb, this, Mb, eb)
      }
      dispose(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Mb = this._internalMeshDataInfo;
        if (Mb._onBeforeDrawObservable && Mb._onBeforeDrawObservable.clear(), Mb._onBeforeBindObservable && Mb._onBeforeBindObservable.clear(), Mb._onBeforeRenderObservable && Mb._onBeforeRenderObservable.clear(), Mb._onAfterRenderObservable && Mb._onAfterRenderObservable.clear(), Mb._onBetweenPassObservable && Mb._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Mb.meshMap)
            for (const bb in Mb.meshMap) {
              const wb = Mb.meshMap[bb];
              wb && (wb._internalMeshDataInfo._source = null, Mb.meshMap[bb] = void 0)
            }
          Mb._source && Mb._source._internalMeshDataInfo.meshMap && (Mb._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const bb = this.RJ().meshes;
          for (const wb of bb) {
            const bb = wb;
            bb._internalMeshDataInfo && bb._internalMeshDataInfo._source && bb._internalMeshDataInfo._source === this && (bb._internalMeshDataInfo._source = null)
          }
        }
        Mb._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(bb, wb)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(bb, wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gb = arguments.length > 7 ? arguments[7] : void 0;
        const lb = this.RJ();
        return (0, mb.o)(bb, (bb => {
          const gb = bb.width,
            lb = bb.height,
            Lb = this.DC().createCanvas(gb, lb).getContext("2d");
          Lb.drawImage(bb, 0, 0);
          const Ib = Lb.getImageData(0, 0, gb, lb).data;
          this.applyDisplacementMapFromBuffer(Ib, gb, lb, wb, Mb, Hb, pb, Vb), eb && eb(this)
        }), gb || (() => {}), lb.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Rb.i.PositionKind) || !this.isVerticesDataPresent(Rb.i.NormalKind) || !this.isVerticesDataPresent(Rb.i.UVKind)) return Nb.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const lb = this.getVerticesData(Rb.i.PositionKind, !0, !0),
          Lb = this.getVerticesData(Rb.i.NormalKind),
          Ib = this.getVerticesData(Rb.i.UVKind);
        let Ob = jb.o.Zero();
        const Ub = jb.o.Zero(),
          tb = jb.m.Zero();
        pb = pb || jb.m.Zero(), Vb = Vb || new jb.m(1, 1);
        for (let Cb = 0; Cb < lb.length; Cb += 3) {
          jb.o.FromArrayToRef(lb, Cb, Ob), jb.o.FromArrayToRef(Lb, Cb, Ub), jb.m.FromArrayToRef(Ib, Cb / 3 * 2, tb);
          const gb = 4 * ((Math.abs(tb.x * Vb.x + pb.x % 1) * (wb - 1) % wb | 0) + (Math.abs(tb.y * Vb.y + pb.y % 1) * (Mb - 1) % Mb | 0) * wb),
            Eb = .3 * (bb[gb] / 255) + .59 * (bb[gb + 1] / 255) + .11 * (bb[gb + 2] / 255);
          Ub.normalize(), Ub.scaleInPlace(eb + (Hb - eb) * Eb), Ob = Ob.add(Ub), Ob.toArray(lb, Cb)
        }
        return Db.d.ComputeNormals(lb, this.ipb(), Lb), gb ? (this.setVerticesData(Rb.i.PositionKind, lb), this.setVerticesData(Rb.i.NormalKind, Lb), this.setVerticesData(Rb.i.UVKind, Ib)) : (this.updateVerticesData(Rb.i.PositionKind, lb), this.updateVerticesData(Rb.i.NormalKind, Lb)), this
      }
      _getFlattenedNormals(bb, wb) {
        const Mb = new Float32Array(3 * bb.length);
        let eb = 0;
        const Hb = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let pb = 0; pb < bb.length; pb += 3) {
          const Vb = jb.o.FromArray(wb, 3 * bb[pb]),
            gb = jb.o.FromArray(wb, 3 * bb[pb + 1]),
            lb = jb.o.FromArray(wb, 3 * bb[pb + 2]),
            Lb = Vb.subtract(gb),
            Ib = lb.subtract(gb),
            Ob = jb.o.Normalize(jb.o.Cross(Lb, Ib));
          Hb && Ob.scaleInPlace(-1);
          for (let bb = 0; bb < 3; bb++) Mb[eb++] = Ob.x, Mb[eb++] = Ob.y, Mb[eb++] = Ob.z
        }
        return Mb
      }
      _convertToUnIndexedMesh() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = this.getVerticesDataKinds().filter((bb => !this.getVertexBuffer(bb)?.getIsInstanced())),
          Mb = this.ipb(!1, !0),
          eb = {},
          Hb = (bb, wb) => {
            const eb = new Float32Array(Mb.length * wb);
            let Hb = 0;
            for (let pb = 0; pb < Mb.length; pb++)
              for (let Vb = 0; Vb < wb; Vb++) eb[Hb++] = bb[Mb[pb] * wb + Vb];
            return eb
          },
          pb = this.XN(),
          Vb = this.geometry ? this.oR.slice(0) : [];
        for (const gb of wb) eb[gb] = this.getVerticesData(gb);
        for (const gb of wb) {
          const wb = this.getVertexBuffer(gb),
            pb = wb.getSize();
          if (bb && gb === Rb.i.NormalKind) {
            const bb = this._getFlattenedNormals(Mb, eb[Rb.i.PositionKind]);
            this.setVerticesData(Rb.i.NormalKind, bb, wb.isUpdatable(), pb)
          } else this.setVerticesData(gb, Hb(eb[gb], pb), wb.isUpdatable(), pb)
        }
        if (this.morphTargetManager) {
          for (let wb = 0; wb < this.morphTargetManager.numTargets; wb++) {
            const eb = this.morphTargetManager.getTarget(wb),
              pb = eb.getPositions();
            eb.Elb(Hb(pb, 3));
            const Vb = eb.getNormals();
            Vb && eb.setNormals(bb ? this._getFlattenedNormals(Mb, pb) : Hb(Vb, 3));
            const gb = eb.getTangents();
            gb && eb.setTangents(Hb(gb, 3));
            const lb = eb.getUVs();
            lb && eb.setUVs(Hb(lb, 2));
            const Lb = eb.getColors();
            Lb && eb.setColors(Hb(Lb, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let gb = 0; gb < Mb.length; gb++) Mb[gb] = gb;
        this.setIndices(Mb), this._unIndexed = !0, this.releaseSubMeshes();
        for (const gb of Vb) {
          const bb = gb.XN();
          Zb.d.AddToMesh(gb.materialIndex, gb.indexStart, gb.indexCount, gb.indexStart, gb.indexCount, this).setBoundingInfo(bb)
        }
        return this.setBoundingInfo(pb), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = Db.d.ExtractFromMesh(this);
        let Mb;
        if (bb && this.isVerticesDataPresent(Rb.i.NormalKind) && wb.normals) {
          for (Mb = 0; Mb < wb.normals.length; Mb++) wb.normals[Mb] *= -1;
          this.setVerticesData(Rb.i.NormalKind, wb.normals, this.isVertexBufferUpdatable(Rb.i.NormalKind))
        }
        if (wb.indices) {
          let bb;
          for (Mb = 0; Mb < wb.indices.length; Mb += 3) bb = wb.indices[Mb + 1], wb.indices[Mb + 1] = wb.indices[Mb + 2], wb.indices[Mb + 2] = bb;
          this.setIndices(wb.indices, null, this.isVertexBufferUpdatable(Rb.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const wb = Db.d.ExtractFromMesh(this),
          Mb = wb.indices && !Array.isArray(wb.indices) && Array.from ? Array.from(wb.indices) : wb.indices,
          eb = wb.positions && !Array.isArray(wb.positions) && Array.from ? Array.from(wb.positions) : wb.positions,
          Hb = wb.uvs && !Array.isArray(wb.uvs) && Array.from ? Array.from(wb.uvs) : wb.uvs,
          pb = wb.normals && !Array.isArray(wb.normals) && Array.from ? Array.from(wb.normals) : wb.normals;
        if (Mb && eb) {
          wb.indices = Mb, wb.positions = eb, Hb && (wb.uvs = Hb), pb && (wb.normals = pb);
          const Vb = bb + 1,
            gb = [];
          for (let bb = 0; bb < Vb + 1; bb++) gb[bb] = [];
          let lb, Lb;
          const Ib = new jb.o(0, 0, 0),
            Ob = new jb.o(0, 0, 0),
            Ub = new jb.m(0, 0),
            tb = [],
            Cb = [],
            Eb = [];
          let Fb, Bb, sb, mb = eb.length;
          Hb && (Bb = Hb.length), pb && (sb = pb.length);
          for (let bb = 0; bb < Mb.length; bb += 3) {
            Cb[0] = Mb[bb], Cb[1] = Mb[bb + 1], Cb[2] = Mb[bb + 2];
            for (let bb = 0; bb < 3; bb++)
              if (lb = Cb[bb], Lb = Cb[(bb + 1) % 3], void 0 === Eb[lb] && void 0 === Eb[Lb] ? (Eb[lb] = [], Eb[Lb] = []) : (void 0 === Eb[lb] && (Eb[lb] = []), void 0 === Eb[Lb] && (Eb[Lb] = [])), void 0 === Eb[lb][Lb] && void 0 === Eb[Lb][lb]) {
                Eb[lb][Lb] = [], Ib.x = (eb[3 * Lb] - eb[3 * lb]) / Vb, Ib.y = (eb[3 * Lb + 1] - eb[3 * lb + 1]) / Vb, Ib.z = (eb[3 * Lb + 2] - eb[3 * lb + 2]) / Vb, pb && (Ob.x = (pb[3 * Lb] - pb[3 * lb]) / Vb, Ob.y = (pb[3 * Lb + 1] - pb[3 * lb + 1]) / Vb, Ob.z = (pb[3 * Lb + 2] - pb[3 * lb + 2]) / Vb), Hb && (Ub.x = (Hb[2 * Lb] - Hb[2 * lb]) / Vb, Ub.y = (Hb[2 * Lb + 1] - Hb[2 * lb + 1]) / Vb), Eb[lb][Lb].push(lb);
                for (let bb = 1; bb < Vb; bb++) Eb[lb][Lb].push(eb.length / 3), eb[mb++] = eb[3 * lb] + bb * Ib.x, eb[mb++] = eb[3 * lb + 1] + bb * Ib.y, eb[mb++] = eb[3 * lb + 2] + bb * Ib.z, pb && (pb[sb++] = pb[3 * lb] + bb * Ob.x, pb[sb++] = pb[3 * lb + 1] + bb * Ob.y, pb[sb++] = pb[3 * lb + 2] + bb * Ob.z), Hb && (Hb[Bb++] = Hb[2 * lb] + bb * Ub.x, Hb[Bb++] = Hb[2 * lb + 1] + bb * Ub.y);
                Eb[lb][Lb].push(Lb), Eb[Lb][lb] = [], Fb = Eb[lb][Lb].length;
                for (let bb = 0; bb < Fb; bb++) Eb[Lb][lb][bb] = Eb[lb][Lb][Fb - 1 - bb]
              } gb[0][0] = Mb[bb], gb[1][0] = Eb[Mb[bb]][Mb[bb + 1]][1], gb[1][1] = Eb[Mb[bb]][Mb[bb + 2]][1];
            for (let wb = 2; wb < Vb; wb++) {
              gb[wb][0] = Eb[Mb[bb]][Mb[bb + 1]][wb], gb[wb][wb] = Eb[Mb[bb]][Mb[bb + 2]][wb], Ib.x = (eb[3 * gb[wb][wb]] - eb[3 * gb[wb][0]]) / wb, Ib.y = (eb[3 * gb[wb][wb] + 1] - eb[3 * gb[wb][0] + 1]) / wb, Ib.z = (eb[3 * gb[wb][wb] + 2] - eb[3 * gb[wb][0] + 2]) / wb, pb && (Ob.x = (pb[3 * gb[wb][wb]] - pb[3 * gb[wb][0]]) / wb, Ob.y = (pb[3 * gb[wb][wb] + 1] - pb[3 * gb[wb][0] + 1]) / wb, Ob.z = (pb[3 * gb[wb][wb] + 2] - pb[3 * gb[wb][0] + 2]) / wb), Hb && (Ub.x = (Hb[2 * gb[wb][wb]] - Hb[2 * gb[wb][0]]) / wb, Ub.y = (Hb[2 * gb[wb][wb] + 1] - Hb[2 * gb[wb][0] + 1]) / wb);
              for (let bb = 1; bb < wb; bb++) gb[wb][bb] = eb.length / 3, eb[mb++] = eb[3 * gb[wb][0]] + bb * Ib.x, eb[mb++] = eb[3 * gb[wb][0] + 1] + bb * Ib.y, eb[mb++] = eb[3 * gb[wb][0] + 2] + bb * Ib.z, pb && (pb[sb++] = pb[3 * gb[wb][0]] + bb * Ob.x, pb[sb++] = pb[3 * gb[wb][0] + 1] + bb * Ob.y, pb[sb++] = pb[3 * gb[wb][0] + 2] + bb * Ob.z), Hb && (Hb[Bb++] = Hb[2 * gb[wb][0]] + bb * Ub.x, Hb[Bb++] = Hb[2 * gb[wb][0] + 1] + bb * Ub.y)
            }
            gb[Vb] = Eb[Mb[bb + 1]][Mb[bb + 2]], tb.push(gb[0][0], gb[1][0], gb[1][1]);
            for (let bb = 1; bb < Vb; bb++) {
              let wb;
              for (wb = 0; wb < bb; wb++) tb.push(gb[bb][wb], gb[bb + 1][wb], gb[bb + 1][wb + 1]), tb.push(gb[bb][wb], gb[bb + 1][wb + 1], gb[bb][wb + 1]);
              tb.push(gb[bb][wb], gb[bb + 1][wb], gb[bb + 1][wb + 1])
            }
          }
          wb.indices = tb, wb.applyToMesh(this, this.isVertexBufferUpdatable(Rb.i.PositionKind))
        } else Nb.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const bb = Db.d.ExtractFromMesh(this),
          wb = bb.uvs,
          Mb = bb.indices,
          eb = bb.positions,
          Hb = bb.colors,
          pb = bb.matricesIndices,
          Vb = bb.matricesWeights,
          gb = bb.matricesIndicesExtra,
          lb = bb.matricesWeightsExtra;
        if (void 0 === Mb || void 0 === eb || null === Mb || null === eb) Nb.b.Warn("VertexData contains empty entries");
        else {
          const Lb = [],
            Ib = [],
            Ob = [],
            Ub = [],
            tb = [],
            Cb = [],
            Eb = [],
            Fb = [];
          let Bb, sb = 0;
          const mb = {};
          let hb, zb;
          for (let bb = 0; bb < Mb.length; bb += 3) {
            zb = [Mb[bb], Mb[bb + 1], Mb[bb + 2]], Bb = [];
            for (let bb = 0; bb < 3; bb++) {
              Bb[bb] = "";
              for (let wb = 0; wb < 3; wb++) Math.abs(eb[3 * zb[bb] + wb]) < 1e-8 && (eb[3 * zb[bb] + wb] = 0), Bb[bb] += eb[3 * zb[bb] + wb] + "|"
            }
            if (Bb[0] != Bb[1] && Bb[0] != Bb[2] && Bb[1] != Bb[2])
              for (let bb = 0; bb < 3; bb++) {
                if (hb = mb[Bb[bb]], void 0 === hb) {
                  mb[Bb[bb]] = sb, hb = sb++;
                  for (let wb = 0; wb < 3; wb++) Lb.push(eb[3 * zb[bb] + wb]);
                  if (null !== Hb && void 0 !== Hb)
                    for (let wb = 0; wb < 4; wb++) Ub.push(Hb[4 * zb[bb] + wb]);
                  if (null !== wb && void 0 !== wb)
                    for (let Mb = 0; Mb < 2; Mb++) Ob.push(wb[2 * zb[bb] + Mb]);
                  if (null !== pb && void 0 !== pb)
                    for (let wb = 0; wb < 4; wb++) tb.push(pb[4 * zb[bb] + wb]);
                  if (null !== Vb && void 0 !== Vb)
                    for (let wb = 0; wb < 4; wb++) Cb.push(Vb[4 * zb[bb] + wb]);
                  if (null !== gb && void 0 !== gb)
                    for (let wb = 0; wb < 4; wb++) Eb.push(gb[4 * zb[bb] + wb]);
                  if (null !== lb && void 0 !== lb)
                    for (let wb = 0; wb < 4; wb++) Fb.push(lb[4 * zb[bb] + wb])
                }
                Ib.push(hb)
              }
          }
          const Xb = [];
          Db.d.ComputeNormals(Lb, Ib, Xb), bb.positions = Lb, bb.indices = Ib, bb.normals = Xb, null !== wb && void 0 !== wb && (bb.uvs = Ob), null !== Hb && void 0 !== Hb && (bb.colors = Ub), null !== pb && void 0 !== pb && (bb.matricesIndices = tb), null !== Vb && void 0 !== Vb && (bb.matricesWeights = Cb), null !== gb && void 0 !== gb && (bb.matricesIndicesExtra = Eb), null !== Vb && void 0 !== Vb && (bb.matricesWeightsExtra = Fb), bb.applyToMesh(this, this.isVertexBufferUpdatable(Rb.i.PositionKind))
        }
      }
      static _instancedMeshFactory(bb, wb) {
        throw (0, Qb.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(bb, wb, Mb) {
        throw (0, Qb.k)("PhysicsImpostor")
      }
      createInstance(bb) {
        const wb = ob._instancedMeshFactory(bb, this);
        return wb.parent = this.parent, wb
      }
      synchronizeInstances() {
        for (let bb = 0; bb < this.instances.length; bb++) {
          this.instances[bb]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(bb) {
        const wb = this.ipb(),
          Mb = this.getVerticesData(Rb.i.PositionKind);
        if (!Mb || !wb) return this;
        const eb = [];
        for (let pb = 0; pb < Mb.length; pb += 3) eb.push(jb.o.FromArray(Mb, pb));
        const Hb = [];
        return sb.b.SyncAsyncForLoop(eb.length, 40, (bb => {
          const wb = eb.length - 1 - bb,
            Mb = eb[wb];
          for (let pb = 0; pb < wb; ++pb) {
            const bb = eb[pb];
            if (Mb.equals(bb)) {
              Hb[wb] = pb;
              break
            }
          }
        }), (() => {
          for (let bb = 0; bb < wb.length; ++bb) wb[bb] = Hb[wb[bb]] || wb[bb];
          const Mb = this.oR.slice(0);
          this.setIndices(wb), this.oR = Mb, bb && bb(this)
        })), this
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        bb.name = this.name, bb.id = this.id, bb.uniqueId = this.uniqueId, bb.type = this.getClassName(), zb.c && zb.c.HasTags(this) && (bb.tags = zb.c.GetTags(this)), bb.position = this.position.ppb(), this.rotationQuaternion ? bb.rotationQuaternion = this.rotationQuaternion.ppb() : this.rotation && (bb.rotation = this.rotation.ppb()), bb.CO = this.CO.ppb(), this._postMultiplyPivotMatrix ? bb.pivotMatrix = this.getPivotMatrix().ppb() : bb.localMatrix = this.getPivotMatrix().ppb(), bb.isEnabled = this.isEnabled(!1), bb.isVisible = this.isVisible, bb.infiniteDistance = this.infiniteDistance, bb.pickable = this.NE, bb.receiveShadows = this.receiveShadows, bb.billboardMode = this.billboardMode, bb.visibility = this.visibility, bb.cC = this.cC, bb.checkCollisions = this.checkCollisions, bb.ellipsoid = this.ellipsoid.ppb(), bb.ellipsoidOffset = this.ellipsoidOffset.ppb(), bb.fC = this.fC, bb.isBlocker = this.isBlocker, bb.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (bb.aJ = !0), this.parent && this.parent._serializeAsParent(bb), bb.isUnIndexed = this.isUnIndexed;
        const wb = this._geometry;
        if (wb && this.oR) {
          bb.geometryUniqueId = wb.uniqueId, bb.geometryId = wb.id, bb.oR = [];
          for (let wb = 0; wb < this.oR.length; wb++) {
            const Mb = this.oR[wb];
            bb.oR.push({
              materialIndex: Mb.materialIndex,
              verticesStart: Mb.verticesStart,
              verticesCount: Mb.verticesCount,
              indexStart: Mb.indexStart,
              indexCount: Mb.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (bb.materialUniqueId = this.material.uniqueId, bb.materialId = this.material.id) : (this.material = null, bb.materialUniqueId = this._scene.defaultMaterial.uniqueId, bb.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (bb.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (bb.skeletonId = this.skeleton.id, bb.skeletonUniqueId = this.skeleton.uniqueId, bb.numBoneInfluencers = this.numBoneInfluencers), this.RJ()._getComponent(Gb.b.NAME_PHYSICSENGINE)) {
          const wb = this.getPhysicsImpostor?.();
          wb && (bb.physicsMass = wb.getParam("bg"), bb.physicsFriction = wb.getParam("friction"), bb.physicsRestitution = wb.getParam("bg"), bb.physicsImpostor = wb.type)
        }
        this.metadata && (bb.metadata = this.metadata), 0 !== this.meshBlendingTag && (bb.meshBlendingTag = this.meshBlendingTag), bb.instances = [];
        for (let Mb = 0; Mb < this.instances.length; Mb++) {
          const wb = this.instances[Mb];
          if (wb.doNotSerialize) continue;
          const eb = {
            name: wb.name,
            id: wb.id,
            isEnabled: wb.isEnabled(!1),
            isVisible: wb.isVisible,
            NE: wb.NE,
            checkCollisions: wb.checkCollisions,
            position: wb.position.ppb(),
            CO: wb.CO.ppb()
          };
          if (wb.parent && wb.parent._serializeAsParent(eb), wb.rotationQuaternion ? eb.rotationQuaternion = wb.rotationQuaternion.ppb() : wb.rotation && (eb.rotation = wb.rotation.ppb()), this.RJ()._getComponent(Gb.b.NAME_PHYSICSENGINE)) {
            const bb = wb.getPhysicsImpostor?.();
            bb && (eb.physicsMass = bb.getParam("bg"), eb.physicsFriction = bb.getParam("friction"), eb.physicsRestitution = bb.getParam("bg"), eb.physicsImpostor = bb.type)
          }
          wb.metadata && (eb.metadata = wb.metadata), wb.actionManager && (eb.actions = wb.actionManager.serialize(wb.name)), bb.instances.push(eb), Sb.d.AppendSerializedAnimations(wb, eb), eb.gF = wb.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (bb.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.uMb
          }, this._userThinInstanceBuffersStorage)) {
          const wb = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const bb in this._userThinInstanceBuffersStorage.data) wb.data[bb] = Array.from(this._userThinInstanceBuffersStorage.data[bb]), wb.sizes[bb] = this._userThinInstanceBuffersStorage.sizes[bb], wb.strides[bb] = this._userThinInstanceBuffersStorage.strides[bb];
          bb.thinInstances.userThinInstance = wb
        }
        return Sb.d.AppendSerializedAnimations(this, bb), bb.gF = this.serializeAnimationRanges(), bb.layerMask = this.layerMask, bb.alphaIndex = this.alphaIndex, bb.hasVertexAlpha = this.hasVertexAlpha, bb.overlayAlpha = this.overlayAlpha, bb.overlayColor = this.overlayColor.ppb(), bb.renderOverlay = this.renderOverlay, bb.applyFog = this.applyFog, this.actionManager && (bb.actions = this.actionManager.serialize(this.name)), bb
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const bb = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (bb && bb.vertexCount) {
          if (bb.vertexCount !== this.getTotalVertices()) return Nb.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (bb.isUsingTextureForTargets) return;
          for (let wb = 0; wb < bb.numInfluencers; wb++) {
            const Mb = bb.getActiveTarget(wb),
              eb = Mb.getPositions();
            if (!eb) return void Nb.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Rb.i.PositionKind + wb, eb, !1, 3);
            const Hb = Mb.getNormals();
            Hb && this.geometry.setVerticesData(Rb.i.NormalKind + wb, Hb, !1, 3);
            const pb = Mb.getTangents();
            pb && this.geometry.setVerticesData(Rb.i.TangentKind + wb, pb, !1, 3);
            const Vb = Mb.getUVs();
            Vb && this.geometry.setVerticesData(Rb.i.UVKind + "_" + wb, Vb, !1, 2);
            const gb = Mb.getUV2s();
            gb && this.geometry.setVerticesData(Rb.i.UV2Kind + "_" + wb, gb, !1, 2);
            const lb = Mb.getColors();
            lb && this.geometry.setVerticesData(Rb.i.ColorKind + wb, lb, !1, 4)
          }
        } else {
          let bb = 0;
          for (; this.geometry.isVerticesDataPresent(Rb.i.PositionKind + bb);) this.geometry.removeVerticesData(Rb.i.PositionKind + bb), this.geometry.isVerticesDataPresent(Rb.i.NormalKind + bb) && this.geometry.removeVerticesData(Rb.i.NormalKind + bb), this.geometry.isVerticesDataPresent(Rb.i.TangentKind + bb) && this.geometry.removeVerticesData(Rb.i.TangentKind + bb), this.geometry.isVerticesDataPresent(Rb.i.UVKind + "_" + bb) && this.geometry.removeVerticesData(Rb.i.UVKind + "_" + bb), this.geometry.isVerticesDataPresent(Rb.i.UV2Kind + "_" + bb) && this.geometry.removeVerticesData(Rb.i.UV2Kind + "_" + bb), this.geometry.isVerticesDataPresent(Rb.i.ColorKind + bb) && this.geometry.removeVerticesData(Rb.i.ColorKind + bb), bb++
        }
      }
      static Parse(bb, wb, Mb) {
        let eb, Hb = !1;
        if (bb.type && "LinesMesh" === bb.type ? eb = ob._LinesMeshParser(bb, wb) : bb.type && "GroundMesh" === bb.type ? eb = ob._GroundMeshParser(bb, wb) : bb.type && "GoldbergMesh" === bb.type ? eb = ob._GoldbergMeshParser(bb, wb) : bb.type && "GreasedLineMesh" === bb.type ? eb = ob._GreasedLineMeshParser(bb, wb) : bb.type && "TrailMesh" === bb.type ? eb = ob._TrailMeshParser(bb, wb) : bb.type && "GaussianSplattingMesh" === bb.type ? (eb = bb._isCompound ? ob._GaussianSplattingCompoundMeshParser(bb, wb) : ob._GaussianSplattingMeshParser(bb, wb), Hb = !0) : bb.type && "GaussianSplattingPartProxyMesh" === bb.type ? (eb = ob._GaussianSplattingPartProxyMeshParser(bb, wb), Hb = !0) : eb = new ob(bb.name, wb), eb.id = bb.id, eb._waitingParsedUniqueId = bb.uniqueId, zb.c && zb.c.AddTagsTo(eb, bb.tags), eb.position = jb.o.FromArray(bb.position), void 0 !== bb.metadata && (eb.metadata = bb.metadata), void 0 !== bb.meshBlendingTag && (eb.meshBlendingTag = bb.meshBlendingTag), bb.rotationQuaternion ? eb.rotationQuaternion = jb.e.FromArray(bb.rotationQuaternion) : bb.rotation && (eb.rotation = jb.o.FromArray(bb.rotation)), eb.CO = jb.o.FromArray(bb.CO), bb.localMatrix ? eb.setPreTransformMatrix(jb.b.FromArray(bb.localMatrix)) : bb.pivotMatrix && eb.setPivotMatrix(jb.b.FromArray(bb.pivotMatrix)), eb.Bx(bb.isEnabled), eb.isVisible = bb.isVisible, eb.infiniteDistance = bb.infiniteDistance, eb.cC = !!bb.cC, eb.showBoundingBox = bb.showBoundingBox, eb.showSubMeshesBoundingBox = bb.showSubMeshesBoundingBox, void 0 !== bb.applyFog && (eb.applyFog = bb.applyFog), void 0 !== bb.pickable && (eb.NE = bb.pickable), void 0 !== bb.alphaIndex && (eb.alphaIndex = bb.alphaIndex), eb.receiveShadows = bb.receiveShadows, void 0 !== bb.billboardMode && (eb.billboardMode = bb.billboardMode), void 0 !== bb.visibility && (eb.visibility = bb.visibility), eb.checkCollisions = bb.checkCollisions, eb.fC = !!bb.fC, bb.ellipsoid && (eb.ellipsoid = jb.o.FromArray(bb.ellipsoid)), bb.ellipsoidOffset && (eb.ellipsoidOffset = jb.o.FromArray(bb.ellipsoidOffset)), null != bb.overrideMaterialSideOrientation && (eb.sideOrientation = bb.overrideMaterialSideOrientation), void 0 !== bb.sideOrientation && (eb.sideOrientation = bb.sideOrientation), void 0 !== bb.isBlocker && (eb.isBlocker = bb.isBlocker), eb._shouldGenerateFlatShading = bb.useFlatShading, bb.aJ && (eb._waitingData.aJ = bb.aJ), void 0 !== bb.parentId && (eb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (eb._waitingParentInstanceIndex = bb.parentInstanceIndex), void 0 !== bb.actions && (eb._waitingData.actions = bb.actions), void 0 !== bb.overlayAlpha && (eb.overlayAlpha = bb.overlayAlpha), void 0 !== bb.overlayColor && (eb.overlayColor = Kb.e.FromArray(bb.overlayColor)), void 0 !== bb.renderOverlay && (eb.renderOverlay = bb.renderOverlay), eb.isUnIndexed = !!bb.isUnIndexed, eb.hasVertexAlpha = bb.hasVertexAlpha, bb.delayLoadingFile ? (eb.delayLoadState = 4, eb.delayLoadingFile = Mb + bb.delayLoadingFile, eb.buildBoundingInfo(jb.o.FromArray(bb.boundingBoxMinimum), jb.o.FromArray(bb.boundingBoxMaximum)), bb._binaryInfo && (eb._binaryInfo = bb._binaryInfo), eb._delayInfo = [], bb.hasUVs && eb._delayInfo.push(Rb.i.UVKind), bb.hasUVs2 && eb._delayInfo.push(Rb.i.UV2Kind), bb.hasUVs3 && eb._delayInfo.push(Rb.i.UV3Kind), bb.hasUVs4 && eb._delayInfo.push(Rb.i.UV4Kind), bb.hasUVs5 && eb._delayInfo.push(Rb.i.UV5Kind), bb.hasUVs6 && eb._delayInfo.push(Rb.i.UV6Kind), bb.hasColors && eb._delayInfo.push(Rb.i.ColorKind), bb.hasMatricesIndices && eb._delayInfo.push(Rb.i.MatricesIndicesKind), bb.hasMatricesWeights && eb._delayInfo.push(Rb.i.MatricesWeightsKind), eb._delayLoadingFunction = cb.c._ImportGeometry, Jb.b.ForceFullSceneLoadingForIncremental && eb._checkDelayState()) : Hb || cb.c._ImportGeometry(bb, eb), bb.materialUniqueId ? eb._waitingMaterialId = bb.materialUniqueId : bb.materialId && (eb._waitingMaterialId = bb.materialId), bb.morphTargetManagerId > -1 && (eb._waitingMorphTargetManagerId = bb.morphTargetManagerId), void 0 !== bb.skeletonId && null !== bb.skeletonId && (eb.skeleton = wb.getLastSkeletonById(bb.skeletonId), eb._waitingSkeletonId = bb.skeletonId, bb.numBoneInfluencers && (eb.numBoneInfluencers = bb.numBoneInfluencers)), void 0 !== bb.skeletonUniqueId && null !== bb.skeletonUniqueId && (eb._waitingSkeletonUniqueId = bb.skeletonUniqueId), bb.animations) {
          for (let wb = 0; wb < bb.animations.length; wb++) {
            const Mb = bb.animations[wb],
              Hb = (0, vb.c)("BABYLON.Animation");
            Hb && eb.animations.push(Hb.Parse(Mb))
          }
          rb.d.ParseAnimationRanges(eb, bb, wb)
        }
        if (bb.autoAnimate && wb.beginAnimation(eb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), bb.layerMask && !isNaN(bb.layerMask) ? eb.layerMask = Math.abs(parseInt(bb.layerMask)) : eb.layerMask = 268435455, bb.physicsImpostor && (eb.physicsImpostor = ob._PhysicsImpostorParser(wb, eb, bb)), bb.lodMeshIds && (eb._waitingData.lods = {
            ids: bb.lodMeshIds,
            distances: bb.lodDistances ? bb.lodDistances : null,
            coverages: bb.lodCoverages ? bb.lodCoverages : null
          }), bb.instances)
          for (let pb = 0; pb < bb.instances.length; pb++) {
            const Mb = bb.instances[pb],
              Hb = eb.createInstance(Mb.name);
            if (Mb.id && (Hb.id = Mb.id), zb.c && (Mb.tags ? zb.c.AddTagsTo(Hb, Mb.tags) : zb.c.AddTagsTo(Hb, bb.tags)), Hb.position = jb.o.FromArray(Mb.position), void 0 !== Mb.metadata && (Hb.metadata = Mb.metadata), void 0 !== Mb.parentId && (Hb._waitingParentId = Mb.parentId), void 0 !== Mb.parentInstanceIndex && (Hb._waitingParentInstanceIndex = Mb.parentInstanceIndex), void 0 !== Mb.isEnabled && null !== Mb.isEnabled && Hb.Bx(Mb.isEnabled), void 0 !== Mb.isVisible && null !== Mb.isVisible && (Hb.isVisible = Mb.isVisible), void 0 !== Mb.NE && null !== Mb.NE && (Hb.NE = Mb.NE), Mb.rotationQuaternion ? Hb.rotationQuaternion = jb.e.FromArray(Mb.rotationQuaternion) : Mb.rotation && (Hb.rotation = jb.o.FromArray(Mb.rotation)), Hb.CO = jb.o.FromArray(Mb.CO), void 0 != Mb.checkCollisions && null != Mb.checkCollisions && (Hb.checkCollisions = Mb.checkCollisions), void 0 != Mb.pickable && null != Mb.pickable && (Hb.NE = Mb.pickable), void 0 != Mb.showBoundingBox && null != Mb.showBoundingBox && (Hb.showBoundingBox = Mb.showBoundingBox), void 0 != Mb.showSubMeshesBoundingBox && null != Mb.showSubMeshesBoundingBox && (Hb.showSubMeshesBoundingBox = Mb.showSubMeshesBoundingBox), void 0 != Mb.alphaIndex && null != Mb.showSubMeshesBoundingBox && (Hb.alphaIndex = Mb.alphaIndex), Mb.physicsImpostor && (Hb.physicsImpostor = ob._PhysicsImpostorParser(wb, Hb, Mb)), void 0 !== Mb.actions && (Hb._waitingData.actions = Mb.actions), Mb.animations) {
              for (let bb = 0; bb < Mb.animations.length; bb++) {
                const wb = Mb.animations[bb],
                  eb = (0, vb.c)("BABYLON.Animation");
                eb && Hb.animations.push(eb.Parse(wb))
              }
              rb.d.ParseAnimationRanges(Hb, Mb, wb), Mb.autoAnimate && wb.beginAnimation(Hb, Mb.autoAnimateFrom, Mb.autoAnimateTo, Mb.autoAnimateLoop, Mb.autoAnimateSpeed || 1)
            }
          }
        if (bb.thinInstances) {
          const wb = bb.thinInstances;
          if (eb.uMb = !!wb.enablePicking, wb.matrixData ? (eb.gwb("matrix", new Float32Array(wb.matrixData), 16, !1), eb._thinInstanceDataStorage.matrixBufferSize = wb.matrixBufferSize, eb._thinInstanceDataStorage.instancesCount = wb.instancesCount) : eb._thinInstanceDataStorage.matrixBufferSize = wb.matrixBufferSize, bb.thinInstances.userThinInstance) {
            const wb = bb.thinInstances.userThinInstance;
            for (const bb in wb.data) eb.gwb(bb, new Float32Array(wb.data[bb]), wb.strides[bb], !1), eb._userThinInstanceBuffersStorage.sizes[bb] = wb.sizes[bb]
          }
        }
        return eb
      }
      setPositionsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourcePositions) {
          const wb = this.getVerticesData(Rb.i.PositionKind);
          if (!wb) return bb._sourcePositions;
          bb._sourcePositions = new Float32Array(wb), this.isVertexBufferUpdatable(Rb.i.PositionKind) || this.setVerticesData(Rb.i.PositionKind, wb, !0)
        }
        return bb._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const bb = this._internalMeshDataInfo;
        if (!bb._sourceNormals) {
          const wb = this.getVerticesData(Rb.i.NormalKind);
          if (!wb) return bb._sourceNormals;
          bb._sourceNormals = new Float32Array(wb), this.isVertexBufferUpdatable(Rb.i.NormalKind) || this.setVerticesData(Rb.i.NormalKind, wb, !0)
        }
        return bb._sourceNormals
      }
      applySkeleton(bb) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.RJ().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.RJ().getFrameId(), !this.isVerticesDataPresent(Rb.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Rb.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Rb.i.MatricesWeightsKind)) return this;
        const wb = this.isVerticesDataPresent(Rb.i.NormalKind),
          Mb = this._internalMeshDataInfo;
        if (!Mb._sourcePositions) {
          const bb = this.oR.slice();
          this.setPositionsForCPUSkinning(), this.oR = bb
        }
        wb && !Mb._sourceNormals && this.setNormalsForCPUSkinning();
        let eb = this.getVerticesData(Rb.i.PositionKind);
        if (!eb) return this;
        eb instanceof Float32Array || (eb = new Float32Array(eb));
        let Hb = this.getVerticesData(Rb.i.NormalKind);
        if (wb) {
          if (!Hb) return this;
          Hb instanceof Float32Array || (Hb = new Float32Array(Hb))
        }
        const pb = this.getVerticesData(Rb.i.MatricesIndicesKind),
          Vb = this.getVerticesData(Rb.i.MatricesWeightsKind);
        if (!Vb || !pb) return this;
        const gb = this.numBoneInfluencers > 4,
          lb = gb ? this.getVerticesData(Rb.i.MatricesIndicesExtraKind) : null,
          Lb = gb ? this.getVerticesData(Rb.i.MatricesWeightsExtraKind) : null,
          Ib = bb.getTransformMatrices(this),
          Ob = jb.o.Zero(),
          Ub = new jb.b,
          tb = new jb.b;
        let Cb, Eb = 0;
        for (let Fb = 0; Fb < eb.length; Fb += 3, Eb += 4) {
          let bb;
          for (Cb = 0; Cb < 4; Cb++) bb = Vb[Eb + Cb], bb > 0 && (jb.b.FromFloat32ArrayToRefScaled(Ib, Math.floor(16 * pb[Eb + Cb]), bb, tb), Ub.addToSelf(tb));
          if (gb)
            for (Cb = 0; Cb < 4; Cb++) bb = Lb[Eb + Cb], bb > 0 && (jb.b.FromFloat32ArrayToRefScaled(Ib, Math.floor(16 * lb[Eb + Cb]), bb, tb), Ub.addToSelf(tb));
          jb.o.TransformCoordinatesFromFloatsToRef(Mb._sourcePositions[Fb], Mb._sourcePositions[Fb + 1], Mb._sourcePositions[Fb + 2], Ub, Ob), Ob.toArray(eb, Fb), wb && (jb.o.TransformNormalFromFloatsToRef(Mb._sourceNormals[Fb], Mb._sourceNormals[Fb + 1], Mb._sourceNormals[Fb + 2], Ub, Ob), Ob.toArray(Hb, Fb)), Ub.reset()
        }
        return this.updateVerticesData(Rb.i.PositionKind, eb), wb && this.updateVerticesData(Rb.i.NormalKind, Hb), this
      }
      static MinMax(bb) {
        let wb = null,
          Mb = null;
        for (const eb of bb) {
          const bb = eb.XN().boundingBox;
          wb && Mb ? (wb.minimizeInPlace(bb.minimumWorld), Mb.maximizeInPlace(bb.maximumWorld)) : (wb = bb.minimumWorld.clone(), Mb = bb.maximumWorld.clone())
        }
        return wb && Mb ? {
          min: wb,
          max: Mb
        } : {
          min: jb.o.Zero(),
          max: jb.o.Zero()
        }
      }
      static Center(bb) {
        const wb = bb instanceof Array ? ob.MinMax(bb) : bb;
        return jb.o.Center(wb.min, wb.max)
      }
      static MergeMeshes(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Xb.j)(ob._MergeMeshesCoroutine(bb, wb, Mb, eb, Hb, pb, !1))
      }
      static async MergeMeshesAsync(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Xb.g)(ob._MergeMeshesCoroutine(bb, wb, Mb, eb, Hb, pb, !0), (0, Xb.c)())
      }
      static * _MergeMeshesCoroutine(bb) {
        let wb, Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          eb = arguments.length > 2 ? arguments[2] : void 0,
          Hb = arguments.length > 3 ? arguments[3] : void 0,
          pb = arguments.length > 4 ? arguments[4] : void 0,
          Vb = arguments.length > 5 ? arguments[5] : void 0,
          gb = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (bb = bb.filter(Boolean)).length) return null;
        if (!eb) {
          let Mb = 0;
          for (wb = 0; wb < bb.length; wb++)
            if (Mb += bb[wb].getTotalVertices(), Mb >= 65536) return Nb.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const lb = bb[0];
        Vb && (pb = !1, bb.sort(((bb, wb) => (bb.material?.uniqueId ?? -1) - (wb.material?.uniqueId ?? -1))));
        const Lb = new Array,
          Ib = new Array,
          Ob = new Array,
          Ub = bb[0].sideOrientation;
        for (wb = 0; wb < bb.length; wb++) {
          const Mb = bb[wb];
          if (Mb.QJ) return Nb.b.Warn("Cannot merge instance meshes."), null;
          if (Ub !== Mb.sideOrientation) return Nb.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (pb || Vb) {
            const bb = Ob.reduce(((bb, wb) => Math.max(bb, wb.start + wb.count)), 0);
            if (Vb)
              if (Mb.material) {
                const wb = Mb.material;
                if (wb instanceof Wb.d) {
                  for (let bb = 0; bb < wb.Lwb.length; bb++) Lb.indexOf(wb.Lwb[bb]) < 0 && Lb.push(wb.Lwb[bb]);
                  for (let eb = 0; eb < Mb.oR.length; eb++) Ib.push(Lb.indexOf(wb.Lwb[Mb.oR[eb].materialIndex])), Ob.push({
                    start: bb + Mb.oR[eb].indexStart,
                    count: Mb.oR[eb].indexCount
                  })
                } else {
                  Lb.indexOf(wb) < 0 && Lb.push(wb);
                  for (let eb = 0; eb < Mb.oR.length; eb++) Ib.push(Lb.indexOf(wb)), Ob.push({
                    start: bb + Mb.oR[eb].indexStart,
                    count: Mb.oR[eb].indexCount
                  })
                }
              } else
                for (let wb = 0; wb < Mb.oR.length; wb++) Ib.push(0), Ob.push({
                  start: bb + Mb.oR[wb].indexStart,
                  count: Mb.oR[wb].indexCount
                });
            else Ob.push({
              start: bb,
              count: Mb.getTotalIndices()
            })
          }
        }
        if (Vb && Ob.length > 1) {
          let bb = 0;
          for (let wb = 1; wb < Ob.length; wb++) {
            const Mb = Ob[bb],
              eb = Ob[wb];
            Ib[wb] === Ib[bb] && Mb.start + Mb.count === eb.start ? Mb.count += eb.count : (bb++, Ob[bb] = eb, Ib[bb] = Ib[wb])
          }
          Ob.length = bb + 1, Ib.length = bb + 1
        }
        const tb = bb => {
            const wb = bb.computeWorldMatrix(!0);
            return {
              vertexData: Db.d.ExtractFromMesh(bb, !1, !1),
              transform: wb
            }
          },
          {
            vertexData: Cb,
            transform: Eb
          } = tb(bb[0]);
        gb && (yield);
        const Fb = new Array(bb.length - 1);
        for (let Xb = 1; Xb < bb.length; Xb++) Fb[Xb - 1] = tb(bb[Xb]), gb && (yield);
        const Bb = Cb._mergeCoroutine(Eb, Fb, eb, gb, !Mb);
        let sb = Bb.next();
        for (; !sb.done;) gb && (yield), sb = Bb.next();
        const mb = sb.value;
        Hb || (Hb = new ob(lb.name + "_merged", lb.RJ()));
        const hb = mb._applyToCoroutine(Hb, void 0, gb);
        let zb = hb.next();
        for (; !zb.done;) gb && (yield), zb = hb.next();
        if (Hb.checkCollisions = lb.checkCollisions, Hb.sideOrientation = lb.sideOrientation, Mb)
          for (wb = 0; wb < bb.length; wb++) bb[wb].dispose();
        if (pb || Vb) {
          for (Hb.releaseSubMeshes(), wb = 0; wb < Ob.length;) Zb.d.CreateFromIndices(0, Ob[wb].start, Ob[wb].count, Hb, void 0, !1), wb++;
          for (const bb of Hb.oR) bb.refreshBoundingInfo();
          Hb.computeWorldMatrix(!0)
        }
        if (Vb) {
          const bb = new Wb.d(lb.name + "_merged", lb.RJ());
          bb.Lwb = Lb;
          for (let wb = 0; wb < Hb.oR.length; wb++) Hb.oR[wb].materialIndex = Ib[wb];
          Hb.material = bb
        } else Hb.material = lb.material;
        return Hb
      }
      ybb(bb) {
        bb._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(bb)
      }
      Tbb(bb) {
        const wb = bb._indexInSourceMeshInstanceArray;
        if (-1 != wb) {
          if (wb !== this.instances.length - 1) {
            const bb = this.instances[this.instances.length - 1];
            this.instances[wb] = bb, bb._indexInSourceMeshInstanceArray = wb
          }
          bb._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === fb.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(bb) {
        const wb = this.RJ();
        return wb.forcePointsCloud ? fb.b.PointFillMode : wb.forceWireframe ? fb.b.WireFrameFillMode : this.overrideRenderingFillMode ?? bb
      }
      setMaterialByID(bb) {
        return this.setMaterialById(bb)
      }
      static CreateRibbon(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(bb, wb, Mb, eb, Hb, pb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(bb, wb, Mb, eb, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(bb, wb, Mb, eb, Hb, pb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(bb, wb, Mb, eb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(bb, wb, Mb, eb, Hb, pb, Vb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(bb, wb, Mb, eb, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(bb, wb, Mb, eb, Hb, pb, Vb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(bb, wb, Mb, eb, Hb, pb, Vb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(bb, wb, Mb, eb, Hb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(bb, wb, Mb, eb, Hb, pb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(bb, wb, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(bb, wb, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(bb, wb, Mb, eb, Hb, pb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(bb, wb, Mb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(bb) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    ob.FRONTSIDE = Db.d.FRONTSIDE, ob.BACKSIDE = Db.d.BACKSIDE, ob.DOUBLESIDE = Db.d.DOUBLESIDE, ob.DEFAULTSIDE = Db.d.DEFAULTSIDE, ob.NO_CAP = 0, ob.CAP_START = 1, ob.CAP_END = 2, ob.CAP_ALL = 3, ob.NO_FLIP = 0, ob.FLIP_TILE = 1, ob.ROTATE_TILE = 2, ob.FLIP_ROW = 3, ob.ROTATE_ROW = 4, ob.FLIP_N_ROTATE_TILE = 5, ob.FLIP_N_ROTATE_ROW = 6, ob.CENTER = 0, ob.LEFT = 1, ob.RIGHT = 2, ob.TOP = 3, ob.BOTTOM = 4, ob.INSTANCEDMESH_SORT_TRANSPARENT = !1, ob._GroundMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GroundMesh")
    }, ob._GoldbergMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GoldbergMesh")
    }, ob._LinesMeshParser = (bb, wb) => {
      throw (0, Qb.k)("LinesMesh")
    }, ob._GreasedLineMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GreasedLineMesh")
    }, ob._GreasedLineRibbonMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GreasedLineRibbonMesh")
    }, ob._TrailMeshParser = (bb, wb) => {
      throw (0, Qb.k)("TrailMesh")
    }, ob._GaussianSplattingMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GaussianSplattingMesh")
    }, ob._GaussianSplattingPartProxyMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GaussianSplattingPartProxyMesh")
    }, ob._GaussianSplattingCompoundMeshParser = (bb, wb) => {
      throw (0, Qb.k)("GaussianSplattingCompoundMesh")
    };
    let Tb = !1;

    function kb() {
      Tb || (Tb = !0, (0, vb.e)("BABYLON.Mesh", ob))
    }(eb = ob.prototype).mN ?? (eb.mN = (0, Qb.h)("Mesh", "mN")), (Hb = ob.prototype).simplify ?? (Hb.simplify = (0, Qb.h)("Mesh", "simplify")), (pb = ob.prototype).thinInstanceAdd ?? (pb.thinInstanceAdd = (0, Qb.h)("Mesh", "thinInstanceAdd")), (Vb = ob.prototype).thinInstanceAddSelf ?? (Vb.thinInstanceAddSelf = (0, Qb.h)("Mesh", "thinInstanceAddSelf")), (gb = ob.prototype).thinInstanceRegisterAttribute ?? (gb.thinInstanceRegisterAttribute = (0, Qb.h)("Mesh", "thinInstanceRegisterAttribute")), (lb = ob.prototype).thinInstanceSetMatrixAt ?? (lb.thinInstanceSetMatrixAt = (0, Qb.h)("Mesh", "thinInstanceSetMatrixAt")), (Lb = ob.prototype).thinInstanceSetAttributeAt ?? (Lb.thinInstanceSetAttributeAt = (0, Qb.h)("Mesh", "thinInstanceSetAttributeAt")), (Ib = ob.prototype).gwb ?? (Ib.gwb = (0, Qb.h)("Mesh", "gwb")), (Ob = ob.prototype).thinInstanceGetWorldMatrices ?? (Ob.thinInstanceGetWorldMatrices = (0, Qb.h)("Mesh", "thinInstanceGetWorldMatrices")), (Ub = ob.prototype).Mwb ?? (Ub.Mwb = (0, Qb.h)("Mesh", "Mwb")), (tb = ob.prototype).thinInstancePartialBufferUpdate ?? (tb.thinInstancePartialBufferUpdate = (0, Qb.h)("Mesh", "thinInstancePartialBufferUpdate")), (Cb = ob.prototype).thinInstanceRefreshBoundingInfo ?? (Cb.thinInstanceRefreshBoundingInfo = (0, Qb.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (Eb = ob.prototype).getEmittedParticleSystems ?? (Eb.getEmittedParticleSystems = (0, Qb.h)("Mesh", "getEmittedParticleSystems")), (Fb = ob.prototype).getHierarchyEmittedParticleSystems ?? (Fb.getHierarchyEmittedParticleSystems = (0, Qb.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(ob.prototype, "edgesShareWithInstances") || Object.defineProperty(ob.prototype, "edgesShareWithInstances", (0, Qb.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(ob.prototype, "uMb") || Object.defineProperty(ob.prototype, "uMb", (0, Qb.g)("Mesh", "uMb")), Object.getOwnPropertyDescriptor(ob.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(ob.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Qb.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(ob.prototype, "ibb") || Object.defineProperty(ob.prototype, "ibb", (0, Qb.g)("Mesh", "ibb"))
  },
  42091: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Cb
    });
    var eb = Mb(41675),
      Hb = Mb(38285),
      pb = Mb(41816),
      Vb = Mb(41554),
      gb = Mb(38406),
      lb = Mb(39971),
      Lb = Mb(41679),
      Ib = Mb(42085),
      Ob = Mb(41730),
      Ub = Mb(41972);
    class tb {}
    let Cb = (() => {
      var bb;
      let wb, Mb, Cb, Eb, Fb = [];
      return bb = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Ib.e)(this._applyToCoroutine.bind(this)), this.uniqueId = bb._UniqueIdGenerator, bb._UniqueIdGenerator++
        }
        set(bb, wb) {
          switch (bb.length || lb.b.Warn(`Setting vertex data kind '${wb}' with an empty array`), wb) {
            case pb.i.PositionKind:
              this.positions = bb;
              break;
            case pb.i.NormalKind:
              this.normals = bb;
              break;
            case pb.i.TangentKind:
              this.tangents = bb;
              break;
            case pb.i.UVKind:
              this.uvs = bb;
              break;
            case pb.i.UV2Kind:
              this.uvs2 = bb;
              break;
            case pb.i.UV3Kind:
              this.uvs3 = bb;
              break;
            case pb.i.UV4Kind:
              this.uvs4 = bb;
              break;
            case pb.i.UV5Kind:
              this.uvs5 = bb;
              break;
            case pb.i.UV6Kind:
              this.uvs6 = bb;
              break;
            case pb.i.ColorKind:
              this.colors = bb;
              break;
            case pb.i.MatricesIndicesKind:
              this.matricesIndices = bb;
              break;
            case pb.i.MatricesWeightsKind:
              this.matricesWeights = bb;
              break;
            case pb.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = bb;
              break;
            case pb.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = bb
          }
        }
        applyToMesh(bb, wb) {
          return this._applyTo(bb, wb, !1), this
        }
        applyToGeometry(bb, wb) {
          return this._applyTo(bb, wb, !1), this
        }
        updateMesh(bb) {
          return this._update(bb), this
        }
        updateGeometry(bb) {
          return this._update(bb), this
        }* _applyToCoroutine(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (bb.setVerticesData(pb.i.PositionKind, this.positions, wb), Mb && (yield)), this.normals && (bb.setVerticesData(pb.i.NormalKind, this.normals, wb), Mb && (yield)), this.tangents && (bb.setVerticesData(pb.i.TangentKind, this.tangents, wb), Mb && (yield)), this.uvs && (bb.setVerticesData(pb.i.UVKind, this.uvs, wb), Mb && (yield)), this.uvs2 && (bb.setVerticesData(pb.i.UV2Kind, this.uvs2, wb), Mb && (yield)), this.uvs3 && (bb.setVerticesData(pb.i.UV3Kind, this.uvs3, wb), Mb && (yield)), this.uvs4 && (bb.setVerticesData(pb.i.UV4Kind, this.uvs4, wb), Mb && (yield)), this.uvs5 && (bb.setVerticesData(pb.i.UV5Kind, this.uvs5, wb), Mb && (yield)), this.uvs6 && (bb.setVerticesData(pb.i.UV6Kind, this.uvs6, wb), Mb && (yield)), this.colors) {
            const eb = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            bb.setVerticesData(pb.i.ColorKind, this.colors, wb, eb), this.hasVertexAlpha && void 0 !== bb.hasVertexAlpha && (bb.hasVertexAlpha = !0), Mb && (yield)
          }
          if (this.matricesIndices && (bb.setVerticesData(pb.i.MatricesIndicesKind, this.matricesIndices, wb), Mb && (yield)), this.matricesWeights && (bb.setVerticesData(pb.i.MatricesWeightsKind, this.matricesWeights, wb), Mb && (yield)), this.matricesIndicesExtra && (bb.setVerticesData(pb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, wb), Mb && (yield)), this.matricesWeightsExtra && (bb.setVerticesData(pb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, wb), Mb && (yield)), this.indices ? (bb.setIndices(this.indices, null, wb), Mb && (yield)) : bb.setIndices([], null), bb.oR && this.materialInfos && this.materialInfos.length > 1) {
            const wb = bb;
            wb.oR = [];
            for (const bb of this.materialInfos) new Ub.d(bb.materialIndex, bb.verticesStart, bb.verticesCount, bb.indexStart, bb.indexCount, wb)
          }
          return this
        }
        _update(bb, wb, Mb) {
          return this.positions && bb.updateVerticesData(pb.i.PositionKind, this.positions, wb, Mb), this.normals && bb.updateVerticesData(pb.i.NormalKind, this.normals, wb, Mb), this.tangents && bb.updateVerticesData(pb.i.TangentKind, this.tangents, wb, Mb), this.uvs && bb.updateVerticesData(pb.i.UVKind, this.uvs, wb, Mb), this.uvs2 && bb.updateVerticesData(pb.i.UV2Kind, this.uvs2, wb, Mb), this.uvs3 && bb.updateVerticesData(pb.i.UV3Kind, this.uvs3, wb, Mb), this.uvs4 && bb.updateVerticesData(pb.i.UV4Kind, this.uvs4, wb, Mb), this.uvs5 && bb.updateVerticesData(pb.i.UV5Kind, this.uvs5, wb, Mb), this.uvs6 && bb.updateVerticesData(pb.i.UV6Kind, this.uvs6, wb, Mb), this.colors && bb.updateVerticesData(pb.i.ColorKind, this.colors, wb, Mb), this.matricesIndices && bb.updateVerticesData(pb.i.MatricesIndicesKind, this.matricesIndices, wb, Mb), this.matricesWeights && bb.updateVerticesData(pb.i.MatricesWeightsKind, this.matricesWeights, wb, Mb), this.matricesIndicesExtra && bb.updateVerticesData(pb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, wb, Mb), this.matricesWeightsExtra && bb.updateVerticesData(pb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, wb, Mb), this.indices && bb.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const pb = Hb.j.YC[0],
            Vb = Hb.j.YC[1];
          for (let gb = Mb; gb < Mb + eb; gb += 3) Hb.o.FromArrayToRef(bb, gb, pb), Hb.o.TransformCoordinatesToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z
        }
        static _TransformVector3Normals(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const pb = Hb.j.YC[0],
            Vb = Hb.j.YC[1];
          for (let gb = Mb; gb < Mb + eb; gb += 3) Hb.o.FromArrayToRef(bb, gb, pb), Hb.o.TransformNormalToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z
        }
        static _TransformVector4Normals(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          const pb = Hb.j.Vector4[0],
            Vb = Hb.j.Vector4[1];
          for (let gb = Mb; gb < Mb + eb; gb += 4) Hb.q.FromArrayToRef(bb, gb, pb), Hb.q.TransformNormalToRef(pb, wb, Vb), bb[gb] = Vb.x, bb[gb + 1] = Vb.y, bb[gb + 2] = Vb.z, bb[gb + 3] = Vb.w
        }
        static _FlipFaces(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length;
          for (let eb = wb; eb < wb + Mb; eb += 3) {
            const wb = bb[eb + 1];
            bb[eb + 1] = bb[eb + 2], bb[eb + 2] = wb
          }
        }
        transform(wb) {
          const Mb = wb.determinant() < 0;
          return this.positions && bb._TransformVector3Coordinates(this.positions, wb), this.normals && bb._TransformVector3Normals(this.normals, wb), this.tangents && bb._TransformVector4Normals(this.tangents, wb), Mb && this.indices && bb._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const wb = [];
          for (const Mb of this.materialInfos) {
            const eb = new bb;
            if (this.positions && (eb.positions = this.positions.slice(3 * Mb.verticesStart, 3 * (Mb.verticesCount + Mb.verticesStart))), this.normals && (eb.normals = this.normals.slice(3 * Mb.verticesStart, 3 * (Mb.verticesCount + Mb.verticesStart))), this.tangents && (eb.tangents = this.tangents.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.colors && (eb.colors = this.colors.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.uvs && (eb.uvs = this.uvs.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.uvs2 && (eb.uvs2 = this.uvs2.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.uvs3 && (eb.uvs3 = this.uvs3.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.uvs4 && (eb.uvs4 = this.uvs4.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.uvs5 && (eb.uvs5 = this.uvs5.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.uvs6 && (eb.uvs6 = this.uvs6.slice(2 * Mb.verticesStart, 2 * (Mb.verticesCount + Mb.verticesStart))), this.matricesIndices && (eb.matricesIndices = this.matricesIndices.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.matricesIndicesExtra && (eb.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.matricesWeights && (eb.matricesWeights = this.matricesWeights.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.matricesWeightsExtra && (eb.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Mb.verticesStart, 4 * (Mb.verticesCount + Mb.verticesStart))), this.indices) {
              eb.indices = [];
              for (let bb = Mb.indexStart; bb < Mb.indexStart + Mb.indexCount; bb++) eb.indices.push(this.indices[bb] - Mb.verticesStart)
            }
            const Hb = new tb;
            Hb.indexStart = 0, Hb.indexCount = eb.indices ? eb.indices.length : 0, Hb.materialIndex = Mb.materialIndex, Hb.verticesStart = 0, Hb.verticesCount = (eb.positions ? eb.positions.length : 0) / 3, eb.materialInfos = [Hb], wb.push(eb)
          }
          return wb
        }
        merge(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const pb = Array.isArray(bb) ? bb.map((bb => ({
            vertexData: bb
          }))) : [{
            vertexData: bb
          }];
          return (0, Ib.j)(this._mergeCoroutine(void 0, pb, wb, !1, Mb, eb, Hb))
        }* _mergeCoroutine(wb, Mb) {
          let eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Hb = arguments.length > 3 ? arguments[3] : void 0,
            Vb = arguments.length > 4 ? arguments[4] : void 0,
            gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Lb = Mb.map((bb => bb.vertexData)),
            Ib = this;
          if (lb)
            for (const bb of Lb) bb && (bb._validate(), !this.normals && bb.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && bb.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && bb.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && bb.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && bb.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && bb.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && bb.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && bb.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && bb.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && bb.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && bb.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && bb.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && bb.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const bb of Lb)
            if (bb)
              if (lb) this.normals && !bb.normals && (bb.normals = new Float32Array(bb.positions.length)), this.tangents && !bb.tangents && (bb.tangents = new Float32Array(bb.positions.length / 3 * 4)), this.uvs && !bb.uvs && (bb.uvs = new Float32Array(bb.positions.length / 3 * 2)), this.uvs2 && !bb.uvs2 && (bb.uvs2 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs3 && !bb.uvs3 && (bb.uvs3 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs4 && !bb.uvs4 && (bb.uvs4 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs5 && !bb.uvs5 && (bb.uvs5 = new Float32Array(bb.positions.length / 3 * 2)), this.uvs6 && !bb.uvs6 && (bb.uvs6 = new Float32Array(bb.positions.length / 3 * 2)), this.colors && !bb.colors && (bb.colors = new Float32Array(bb.positions.length / 3 * 4), bb.colors.fill(1)), this.matricesIndices && !bb.matricesIndices && (bb.matricesIndices = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeights && !bb.matricesWeights && (bb.matricesWeights = new Float32Array(bb.positions.length / 3 * 4)), this.matricesIndicesExtra && !bb.matricesIndicesExtra && (bb.matricesIndicesExtra = new Float32Array(bb.positions.length / 3 * 4)), this.matricesWeightsExtra && !bb.matricesWeightsExtra && (bb.matricesWeightsExtra = new Float32Array(bb.positions.length / 3 * 4));
              else if (bb._validate(), !this.normals !== !bb.normals || !this.tangents !== !bb.tangents || !this.uvs !== !bb.uvs || !this.uvs2 !== !bb.uvs2 || !this.uvs3 !== !bb.uvs3 || !this.uvs4 !== !bb.uvs4 || !this.uvs5 !== !bb.uvs5 || !this.uvs6 !== !bb.uvs6 || !this.colors !== !bb.colors || !this.matricesIndices !== !bb.matricesIndices || !this.matricesWeights !== !bb.matricesWeights || !this.matricesIndicesExtra !== !bb.matricesIndicesExtra || !this.matricesWeightsExtra !== !bb.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (gb) {
            let bb, eb = 0,
              Hb = 0;
            const pb = [];
            let Vb = null;
            const gb = [];
            for (const Mb of this.splitBasedOnMaterialID()) gb.push({
              vertexData: Mb,
              transform: wb
            });
            for (const wb of Mb)
              if (wb.vertexData)
                for (const bb of wb.vertexData.splitBasedOnMaterialID()) gb.push({
                  vertexData: bb,
                  transform: wb.transform
                });
            gb.sort(((bb, wb) => {
              const Mb = bb.vertexData.materialInfos ? bb.vertexData.materialInfos[0].materialIndex : 0,
                eb = wb.vertexData.materialInfos ? wb.vertexData.materialInfos[0].materialIndex : 0;
              return Mb > eb ? 1 : Mb === eb ? 0 : -1
            }));
            for (const wb of gb) {
              const Mb = wb.vertexData;
              if (bb = Mb.materialInfos ? Mb.materialInfos[0].materialIndex : 0, Vb && Vb.materialIndex === bb) Vb.indexCount += Mb.indices.length, Vb.verticesCount += Mb.positions.length / 3;
              else {
                const wb = new tb;
                wb.materialIndex = bb, wb.indexStart = eb, wb.indexCount = Mb.indices.length, wb.verticesStart = Hb, wb.verticesCount = Mb.positions.length / 3, pb.push(wb), Vb = wb
              }
              eb += Mb.indices.length, Hb += Mb.positions.length / 3
            }
            const lb = gb.splice(0, 1)[0];
            Ib = lb.vertexData, wb = lb.transform, Lb = gb.map((bb => bb.vertexData)), Mb = gb, this.materialInfos = pb
          }
          const Ob = Lb.reduce(((bb, wb) => bb + (wb.indices?.length ?? 0)), Ib.indices?.length ?? 0);
          let Ub = Vb || Lb.some((bb => bb.indices === Ib.indices)) ? Ib.indices?.slice() : Ib.indices;
          if (Ob > 0) {
            let pb = Ub?.length ?? 0;
            if (Ub || (Ub = new Array(Ob)), Ub.length !== Ob) {
              if (Array.isArray(Ub)) Ub.length = Ob;
              else {
                const bb = eb || Ub instanceof Uint32Array ? new Uint32Array(Ob) : new Uint16Array(Ob);
                bb.set(Ub), Ub = bb
              }
              wb && wb.determinant() < 0 && bb._FlipFaces(Ub, 0, pb)
            }
            let Vb = Ib.positions ? Ib.positions.length / 3 : 0;
            for (const {
                vertexData: wb,
                transform: eb
              }
              of Mb)
              if (wb.indices) {
                for (let bb = 0; bb < wb.indices.length; bb++) Ub[pb + bb] = wb.indices[bb] + Vb;
                eb && eb.determinant() < 0 && bb._FlipFaces(Ub, pb, wb.indices.length), Vb += wb.positions.length / 3, pb += wb.indices.length, Hb && (yield)
              }
          }
          return this.indices = Ub, this.positions = bb._MergeElement(pb.i.PositionKind, Ib.positions, wb, Mb.map((bb => [bb.vertexData.positions, bb.transform]))), Hb && (yield), Ib.normals && (this.normals = bb._MergeElement(pb.i.NormalKind, Ib.normals, wb, Mb.map((bb => [bb.vertexData.normals, bb.transform]))), Hb && (yield)), Ib.tangents && (this.tangents = bb._MergeElement(pb.i.TangentKind, Ib.tangents, wb, Mb.map((bb => [bb.vertexData.tangents, bb.transform]))), Hb && (yield)), Ib.uvs && (this.uvs = bb._MergeElement(pb.i.UVKind, Ib.uvs, wb, Mb.map((bb => [bb.vertexData.uvs, bb.transform]))), Hb && (yield)), Ib.uvs2 && (this.uvs2 = bb._MergeElement(pb.i.UV2Kind, Ib.uvs2, wb, Mb.map((bb => [bb.vertexData.uvs2, bb.transform]))), Hb && (yield)), Ib.uvs3 && (this.uvs3 = bb._MergeElement(pb.i.UV3Kind, Ib.uvs3, wb, Mb.map((bb => [bb.vertexData.uvs3, bb.transform]))), Hb && (yield)), Ib.uvs4 && (this.uvs4 = bb._MergeElement(pb.i.UV4Kind, Ib.uvs4, wb, Mb.map((bb => [bb.vertexData.uvs4, bb.transform]))), Hb && (yield)), Ib.uvs5 && (this.uvs5 = bb._MergeElement(pb.i.UV5Kind, Ib.uvs5, wb, Mb.map((bb => [bb.vertexData.uvs5, bb.transform]))), Hb && (yield)), Ib.uvs6 && (this.uvs6 = bb._MergeElement(pb.i.UV6Kind, Ib.uvs6, wb, Mb.map((bb => [bb.vertexData.uvs6, bb.transform]))), Hb && (yield)), Ib.colors && (this.colors = bb._MergeElement(pb.i.ColorKind, Ib.colors, wb, Mb.map((bb => [bb.vertexData.colors, bb.transform]))), (void 0 !== Ib.hasVertexAlpha || Mb.some((bb => void 0 !== bb.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Ib.hasVertexAlpha || Mb.some((bb => bb.vertexData.hasVertexAlpha))), Hb && (yield)), Ib.matricesIndices && (this.matricesIndices = bb._MergeElement(pb.i.MatricesIndicesKind, Ib.matricesIndices, wb, Mb.map((bb => [bb.vertexData.matricesIndices, bb.transform]))), Hb && (yield)), Ib.matricesWeights && (this.matricesWeights = bb._MergeElement(pb.i.MatricesWeightsKind, Ib.matricesWeights, wb, Mb.map((bb => [bb.vertexData.matricesWeights, bb.transform]))), Hb && (yield)), Ib.matricesIndicesExtra && (this.matricesIndicesExtra = bb._MergeElement(pb.i.MatricesIndicesExtraKind, Ib.matricesIndicesExtra, wb, Mb.map((bb => [bb.vertexData.matricesIndicesExtra, bb.transform]))), Hb && (yield)), Ib.matricesWeightsExtra && (this.matricesWeightsExtra = bb._MergeElement(pb.i.MatricesWeightsExtraKind, Ib.matricesWeightsExtra, wb, Mb.map((bb => [bb.vertexData.matricesWeightsExtra, bb.transform])))), this
        }
        static _MergeElement(wb, Mb, eb, Hb) {
          const Vb = Hb.filter((bb => null !== bb[0] && void 0 !== bb[0]));
          if (!Mb && 0 == Vb.length) return Mb;
          if (!Mb) return this._MergeElement(wb, Vb[0][0], Vb[0][1], Vb.slice(1));
          const gb = Vb.reduce(((bb, wb) => bb + wb[0].length), Mb.length),
            lb = wb === pb.i.PositionKind ? bb._TransformVector3Coordinates : wb === pb.i.NormalKind ? bb._TransformVector3Normals : wb === pb.i.TangentKind ? bb._TransformVector4Normals : () => {};
          if (Mb instanceof Float32Array) {
            const bb = new Float32Array(gb);
            bb.set(Mb), eb && lb(bb, eb, 0, Mb.length);
            let wb = Mb.length;
            for (const [Mb, eb] of Vb) bb.set(Mb, wb), eb && lb(bb, eb, wb, Mb.length), wb += Mb.length;
            return bb
          } {
            const bb = new Array(gb);
            for (let eb = 0; eb < Mb.length; eb++) bb[eb] = Mb[eb];
            eb && lb(bb, eb, 0, Mb.length);
            let wb = Mb.length;
            for (const [Mb, eb] of Vb) {
              for (let eb = 0; eb < Mb.length; eb++) bb[wb + eb] = Mb[eb];
              eb && lb(bb, eb, wb, Mb.length), wb += Mb.length
            }
            return bb
          }
        }
        _validate() {
          if (!this.positions) throw new Ob.j("Positions are required", Ob.g.MeshInvalidPositionsError);
          const bb = (bb, wb) => {
              const Mb = (0, pb.h)(bb);
              if (wb.length % Mb !== 0) throw new Error("The " + bb + "s array count must be a multiple of " + Mb);
              return wb.length / Mb
            },
            wb = bb(pb.i.PositionKind, this.positions),
            Mb = (Mb, eb) => {
              const Hb = bb(Mb, eb);
              if (Hb !== wb) throw new Error("The " + Mb + "s element count (" + Hb + ") does not match the positions count (" + wb + ")")
            };
          this.normals && Mb(pb.i.NormalKind, this.normals), this.tangents && Mb(pb.i.TangentKind, this.tangents), this.uvs && Mb(pb.i.UVKind, this.uvs), this.uvs2 && Mb(pb.i.UV2Kind, this.uvs2), this.uvs3 && Mb(pb.i.UV3Kind, this.uvs3), this.uvs4 && Mb(pb.i.UV4Kind, this.uvs4), this.uvs5 && Mb(pb.i.UV5Kind, this.uvs5), this.uvs6 && Mb(pb.i.UV6Kind, this.uvs6), this.colors && Mb(pb.i.ColorKind, this.colors), this.matricesIndices && Mb(pb.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Mb(pb.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Mb(pb.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Mb(pb.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const wb = this.serialize();
          return bb.Parse(wb)
        }
        serialize() {
          const bb = {};
          if (this.positions && (bb.positions = Array.from(this.positions)), this.normals && (bb.normals = Array.from(this.normals)), this.tangents && (bb.tangents = Array.from(this.tangents)), this.uvs && (bb.uvs = Array.from(this.uvs)), this.uvs2 && (bb.uvs2 = Array.from(this.uvs2)), this.uvs3 && (bb.uvs3 = Array.from(this.uvs3)), this.uvs4 && (bb.uvs4 = Array.from(this.uvs4)), this.uvs5 && (bb.uvs5 = Array.from(this.uvs5)), this.uvs6 && (bb.uvs6 = Array.from(this.uvs6)), this.colors && (bb.colors = Array.from(this.colors), bb.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (bb.matricesIndices = Array.from(this.matricesIndices), bb.matricesIndicesExpanded = !0), this.matricesWeights && (bb.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (bb.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), bb.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (bb.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), bb.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            bb.materialInfos = [];
            for (const wb of this.materialInfos) {
              const Mb = {
                indexStart: wb.indexStart,
                indexCount: wb.indexCount,
                materialIndex: wb.materialIndex,
                verticesStart: wb.verticesStart,
                verticesCount: wb.verticesCount
              };
              bb.materialInfos.push(Mb)
            }
          }
          return bb
        }
        static ExtractFromMesh(wb, Mb, eb) {
          return bb._ExtractFrom(wb, Mb, eb)
        }
        static ExtractFromGeometry(wb, Mb, eb) {
          return bb._ExtractFrom(wb, Mb, eb)
        }
        static _ExtractFrom(wb, Mb, eb) {
          const Hb = new bb;
          if (wb.isVerticesDataPresent(pb.i.PositionKind) && (Hb.positions = wb.getVerticesData(pb.i.PositionKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.NormalKind) && (Hb.normals = wb.getVerticesData(pb.i.NormalKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.TangentKind) && (Hb.tangents = wb.getVerticesData(pb.i.TangentKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UVKind) && (Hb.uvs = wb.getVerticesData(pb.i.UVKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UV2Kind) && (Hb.uvs2 = wb.getVerticesData(pb.i.UV2Kind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UV3Kind) && (Hb.uvs3 = wb.getVerticesData(pb.i.UV3Kind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UV4Kind) && (Hb.uvs4 = wb.getVerticesData(pb.i.UV4Kind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UV5Kind) && (Hb.uvs5 = wb.getVerticesData(pb.i.UV5Kind, Mb, eb)), wb.isVerticesDataPresent(pb.i.UV6Kind) && (Hb.uvs6 = wb.getVerticesData(pb.i.UV6Kind, Mb, eb)), wb.isVerticesDataPresent(pb.i.ColorKind)) {
            const bb = wb.geometry || wb,
              Vb = bb.getVertexBuffer(pb.i.ColorKind),
              gb = bb.getVerticesData(pb.i.ColorKind, Mb, eb);
            if (3 === Vb.getSize()) {
              const bb = new Float32Array(4 * gb.length / 3);
              for (let wb = 0, Mb = 0; wb < gb.length; wb += 3, Mb += 4) bb[Mb] = gb[wb], bb[Mb + 1] = gb[wb + 1], bb[Mb + 2] = gb[wb + 2], bb[Mb + 3] = 1;
              Hb.colors = bb
            } else {
              if (4 !== Vb.getSize()) throw new Error(`Unexpected number of color components: ${Vb.getSize()}`);
              Hb.colors = gb
            }
          }
          return wb.isVerticesDataPresent(pb.i.MatricesIndicesKind) && (Hb.matricesIndices = wb.getVerticesData(pb.i.MatricesIndicesKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.MatricesWeightsKind) && (Hb.matricesWeights = wb.getVerticesData(pb.i.MatricesWeightsKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.MatricesIndicesExtraKind) && (Hb.matricesIndicesExtra = wb.getVerticesData(pb.i.MatricesIndicesExtraKind, Mb, eb)), wb.isVerticesDataPresent(pb.i.MatricesWeightsExtraKind) && (Hb.matricesWeightsExtra = wb.getVerticesData(pb.i.MatricesWeightsExtraKind, Mb, eb)), Hb.indices = wb.ipb(Mb, eb), Hb
        }
        static CreateRibbon(bb) {
          throw (0, Vb.k)("ribbonBuilder")
        }
        static CreateBox(bb) {
          throw (0, Vb.k)("boxBuilder")
        }
        static CreateTiledBox(bb) {
          throw (0, Vb.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(bb) {
          throw (0, Vb.k)("tiledPlaneBuilder")
        }
        static CreateSphere(bb) {
          throw (0, Vb.k)("sphereBuilder")
        }
        static CreateCylinder(bb) {
          throw (0, Vb.k)("cylinderBuilder")
        }
        static CreateTorus(bb) {
          throw (0, Vb.k)("torusBuilder")
        }
        static CreateLineSystem(bb) {
          throw (0, Vb.k)("linesBuilder")
        }
        static CreateDashedLines(bb) {
          throw (0, Vb.k)("linesBuilder")
        }
        static CreateGround(bb) {
          throw (0, Vb.k)("groundBuilder")
        }
        static CreateTiledGround(bb) {
          throw (0, Vb.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(bb) {
          throw (0, Vb.k)("groundBuilder")
        }
        static CreatePlane(bb) {
          throw (0, Vb.k)("planeBuilder")
        }
        static CreateDisc(bb) {
          throw (0, Vb.k)("discBuilder")
        }
        static CreatePolygon(bb, wb, Mb, eb, Hb, pb, gb) {
          throw (0, Vb.k)("polygonBuilder")
        }
        static CreateIcoSphere(bb) {
          throw (0, Vb.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(bb) {
          throw (0, Vb.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Hb.o.Up();
          throw (0, Vb.k)("capsuleBuilder")
        }
        static CreateTorusKnot(bb) {
          throw (0, Vb.k)("torusKnotBuilder")
        }
        static ComputeNormals(bb, wb, Mb, eb) {
          let pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb = !1,
            rb = !1,
            Rb = !1,
            Db = !1,
            cb = 1,
            Yb = 0,
            Zb = null;
          eb && (Kb = !!eb.facetNormals, rb = !!eb.facetPositions, Rb = !!eb.facetPartitioning, cb = !0 === eb.useRightHandedSystem ? -1 : 1, Yb = eb.ratio || 0, Db = !!eb.depthSort, Zb = eb.distanceTo, Db && void 0 === Zb && (Zb = Hb.o.Zero()));
          let fb = 0,
            Ab = 0,
            Wb = 0,
            Jb = 0;
          for (Rb && eb && eb.bbSize && (fb = eb.subDiv.X * Yb / eb.bbSize.x, Ab = eb.subDiv.Y * Yb / eb.bbSize.y, Wb = eb.subDiv.Z * Yb / eb.bbSize.z, Jb = eb.subDiv.max * eb.subDiv.max, eb.facetPartitioning.length = 0), pb = 0; pb < bb.length; pb++) Mb[pb] = 0;
          const Sb = wb.length / 3 | 0;
          for (pb = 0; pb < Sb; pb++) {
            if (Fb = 3 * wb[3 * pb], Bb = Fb + 1, sb = Fb + 2, mb = 3 * wb[3 * pb + 1], hb = mb + 1, zb = mb + 2, Xb = 3 * wb[3 * pb + 2], xb = Xb + 1, jb = Xb + 2, Vb = bb[Fb] - bb[mb], gb = bb[Bb] - bb[hb], lb = bb[sb] - bb[zb], Lb = bb[Xb] - bb[mb], Ib = bb[xb] - bb[hb], Ob = bb[jb] - bb[zb], Ub = cb * (gb * Ob - lb * Ib), tb = cb * (lb * Lb - Vb * Ob), Cb = cb * (Vb * Ib - gb * Lb), Eb = Math.sqrt(Ub * Ub + tb * tb + Cb * Cb), Eb = 0 === Eb ? 1 : Eb, Ub /= Eb, tb /= Eb, Cb /= Eb, Kb && eb && (eb.facetNormals[pb].x = Ub, eb.facetNormals[pb].y = tb, eb.facetNormals[pb].z = Cb), rb && eb && (eb.facetPositions[pb].x = (bb[Fb] + bb[mb] + bb[Xb]) / 3, eb.facetPositions[pb].y = (bb[Bb] + bb[hb] + bb[xb]) / 3, eb.facetPositions[pb].z = (bb[sb] + bb[zb] + bb[jb]) / 3), Rb && eb) {
              const wb = Math.floor((eb.facetPositions[pb].x - eb.bInfo.minimum.x * Yb) * fb),
                Mb = Math.floor((eb.facetPositions[pb].y - eb.bInfo.minimum.y * Yb) * Ab),
                Hb = Math.floor((eb.facetPositions[pb].z - eb.bInfo.minimum.z * Yb) * Wb),
                Vb = Math.floor((bb[Fb] - eb.bInfo.minimum.x * Yb) * fb),
                gb = Math.floor((bb[Bb] - eb.bInfo.minimum.y * Yb) * Ab),
                lb = Math.floor((bb[sb] - eb.bInfo.minimum.z * Yb) * Wb),
                Lb = Math.floor((bb[mb] - eb.bInfo.minimum.x * Yb) * fb),
                Ib = Math.floor((bb[hb] - eb.bInfo.minimum.y * Yb) * Ab),
                Ob = Math.floor((bb[zb] - eb.bInfo.minimum.z * Yb) * Wb),
                Ub = Math.floor((bb[Xb] - eb.bInfo.minimum.x * Yb) * fb),
                tb = Math.floor((bb[xb] - eb.bInfo.minimum.y * Yb) * Ab),
                Cb = Math.floor((bb[jb] - eb.bInfo.minimum.z * Yb) * Wb),
                Eb = Vb + eb.subDiv.max * gb + Jb * lb,
                Kb = Lb + eb.subDiv.max * Ib + Jb * Ob,
                rb = Ub + eb.subDiv.max * tb + Jb * Cb,
                Rb = wb + eb.subDiv.max * Mb + Jb * Hb;
              eb.facetPartitioning[Rb] = eb.facetPartitioning[Rb] ? eb.facetPartitioning[Rb] : [], eb.facetPartitioning[Eb] = eb.facetPartitioning[Eb] ? eb.facetPartitioning[Eb] : [], eb.facetPartitioning[Kb] = eb.facetPartitioning[Kb] ? eb.facetPartitioning[Kb] : [], eb.facetPartitioning[rb] = eb.facetPartitioning[rb] ? eb.facetPartitioning[rb] : [], eb.facetPartitioning[Eb].push(pb), Kb != Eb && eb.facetPartitioning[Kb].push(pb), rb != Kb && rb != Eb && eb.facetPartitioning[rb].push(pb), Rb != Eb && Rb != Kb && Rb != rb && eb.facetPartitioning[Rb].push(pb)
            }
            if (Db && eb && eb.facetPositions) {
              const bb = eb.depthSortedFacets[pb];
              bb.ind = 3 * pb, bb.sqDistance = Hb.o.DistanceSquared(eb.facetPositions[pb], Zb)
            }
            Mb[Fb] += Ub, Mb[Bb] += tb, Mb[sb] += Cb, Mb[mb] += Ub, Mb[hb] += tb, Mb[zb] += Cb, Mb[Xb] += Ub, Mb[xb] += tb, Mb[jb] += Cb
          }
          for (pb = 0; pb < Mb.length / 3; pb++) Ub = Mb[3 * pb], tb = Mb[3 * pb + 1], Cb = Mb[3 * pb + 2], Eb = Math.sqrt(Ub * Ub + tb * tb + Cb * Cb), Eb = 0 === Eb ? 1 : Eb, Ub /= Eb, tb /= Eb, Cb /= Eb, Mb[3 * pb] = Ub, Mb[3 * pb + 1] = tb, Mb[3 * pb + 2] = Cb
        }
        static _ComputeSides(wb, Mb, eb, pb, Vb, gb, lb) {
          const Lb = eb.length,
            Ib = pb.length;
          let Ob, Ub;
          switch (wb = wb || bb.DEFAULTSIDE) {
            case bb.FRONTSIDE:
              break;
            case bb.BACKSIDE:
              for (Ob = 0; Ob < Lb; Ob += 3) {
                const bb = eb[Ob];
                eb[Ob] = eb[Ob + 2], eb[Ob + 2] = bb
              }
              for (Ub = 0; Ub < Ib; Ub++) pb[Ub] = -pb[Ub];
              break;
            case bb.DOUBLESIDE: {
              const bb = Mb.length,
                wb = bb / 3;
              for (let eb = 0; eb < bb; eb++) Mb[bb + eb] = Mb[eb];
              for (Ob = 0; Ob < Lb; Ob += 3) eb[Ob + Lb] = eb[Ob + 2] + wb, eb[Ob + 1 + Lb] = eb[Ob + 1] + wb, eb[Ob + 2 + Lb] = eb[Ob] + wb;
              for (Ub = 0; Ub < Ib; Ub++) pb[Ib + Ub] = -pb[Ub];
              const tb = Vb.length;
              let Cb;
              for (Cb = 0; Cb < tb; Cb++) Vb[Cb + tb] = Vb[Cb];
              for (gb = gb || new Hb.q(0, 0, 1, 1), lb = lb || new Hb.q(0, 0, 1, 1), Cb = 0, Ob = 0; Ob < tb / 2; Ob++) Vb[Cb] = gb.x + (gb.z - gb.x) * Vb[Cb], Vb[Cb + 1] = gb.y + (gb.w - gb.y) * Vb[Cb + 1], Vb[Cb + tb] = lb.x + (lb.z - lb.x) * Vb[Cb + tb], Vb[Cb + tb + 1] = lb.y + (lb.w - lb.y) * Vb[Cb + tb + 1], Cb += 2;
              break
            }
          }
        }
        static Parse(wb) {
          const Mb = new bb,
            eb = wb.positions;
          eb && Mb.set(eb, pb.i.PositionKind);
          const Hb = wb.normals;
          Hb && Mb.set(Hb, pb.i.NormalKind);
          const Vb = wb.tangents;
          Vb && Mb.set(Vb, pb.i.TangentKind);
          const lb = wb.uvs;
          lb && Mb.set(lb, pb.i.UVKind);
          const Lb = wb.uvs2;
          Lb && Mb.set(Lb, pb.i.UV2Kind);
          const Ib = wb.uvs3;
          Ib && Mb.set(Ib, pb.i.UV3Kind);
          const Ob = wb.uvs4;
          Ob && Mb.set(Ob, pb.i.UV4Kind);
          const Ub = wb.uvs5;
          Ub && Mb.set(Ub, pb.i.UV5Kind);
          const Cb = wb.uvs6;
          Cb && Mb.set(Cb, pb.i.UV6Kind);
          const Eb = wb.colors;
          Eb && (Mb.set(gb.f.CheckColors4(Eb, eb.length / 3), pb.i.ColorKind), void 0 !== wb.hasVertexAlpha && (Mb.hasVertexAlpha = wb.hasVertexAlpha));
          const Fb = wb.matricesIndices;
          Fb && Mb.set(Fb, pb.i.MatricesIndicesKind);
          const Bb = wb.matricesWeights;
          Bb && Mb.set(Bb, pb.i.MatricesWeightsKind);
          const sb = wb.indices;
          sb && (Mb.indices = sb);
          const mb = wb.materialInfos;
          if (mb) {
            Mb.materialInfos = [];
            for (const bb of mb) {
              const wb = new tb;
              wb.indexCount = bb.indexCount, wb.indexStart = bb.indexStart, wb.verticesCount = bb.verticesCount, wb.verticesStart = bb.verticesStart, wb.materialIndex = bb.materialIndex, Mb.materialInfos.push(wb)
            }
          }
          return Mb
        }
        static ImportVertexData(wb, Mb) {
          const eb = bb.Parse(wb);
          Mb.setAllVerticesData(eb, wb.updatable)
        }
      }, (() => {
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [Lb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Mb = [Lb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Cb = [Lb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Eb = [Lb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, eb.i)(bb, null, wb, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Coordinates" in bb,
            get: bb => bb._TransformVector3Coordinates
          },
          metadata: Hb
        }, null, Fb), (0, eb.i)(bb, null, Mb, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector3Normals" in bb,
            get: bb => bb._TransformVector3Normals
          },
          metadata: Hb
        }, null, Fb), (0, eb.i)(bb, null, Cb, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: bb => "_TransformVector4Normals" in bb,
            get: bb => bb._TransformVector4Normals
          },
          metadata: Hb
        }, null, Fb), (0, eb.i)(bb, null, Eb, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: bb => "_FlipFaces" in bb,
            get: bb => bb._FlipFaces
          },
          metadata: Hb
        }, null, Fb), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })(), bb.FRONTSIDE = ((0, eb.m)(bb, Fb), 0), bb.BACKSIDE = 1, bb.DOUBLESIDE = 2, bb.DEFAULTSIDE = 0, bb._UniqueIdGenerator = 0, bb
    })()
  },
  42161: (bb, wb, Mb) => {
    var eb = Mb(38285),
      Hb = Mb(39971),
      pb = Mb(41984),
      Vb = Mb(42078),
      gb = Mb(41816);
    const lb = "bakedVertexAnimationSettingsInstanced";

    function Lb(bb) {
      const wb = bb.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return wb instanceof Float32Array || wb instanceof Uint16Array
    }

    function Ib(bb, wb, Mb, eb) {
      Mb.Jbb(Number.POSITIVE_INFINITY), eb.Jbb(Number.NEGATIVE_INFINITY);
      for (let Hb = 0; Hb < 3 * wb; Hb += 3) {
        const wb = bb[Hb],
          pb = bb[Hb + 1],
          Vb = bb[Hb + 2];
        wb < Mb.x && (Mb.x = wb), pb < Mb.y && (Mb.y = pb), Vb < Mb.z && (Mb.z = Vb), wb > eb.x && (eb.x = wb), pb > eb.y && (eb.y = pb), Vb > eb.z && (eb.z = Vb)
      }
    }

    function Ob(bb, wb, Mb) {
      Mb && (bb.x -= bb.x * Mb.x + Mb.y, bb.y -= bb.y * Mb.x + Mb.y, bb.z -= bb.z * Mb.x + Mb.y, wb.x += wb.x * Mb.x + Mb.y, wb.y += wb.y * Mb.x + Mb.y, wb.z += wb.z * Mb.x + Mb.y)
    }

    function Ub(bb, wb, Mb, Hb, pb) {
      const Vb = eb.j.YC[7],
        gb = eb.j.YC[8];
      for (let lb = 0; lb < 2; ++lb)
        for (let Lb = 0; Lb < 2; ++Lb)
          for (let Ib = 0; Ib < 2; ++Ib) Vb.set(lb ? wb.x : bb.x, Lb ? wb.y : bb.y, Ib ? wb.z : bb.z), eb.o.TransformCoordinatesToRef(Vb, Mb, gb), Hb.minimizeInPlace(gb), pb.maximizeInPlace(gb)
    }

    function tb(bb, wb, Mb, Hb, pb) {
      const Vb = eb.j.YC[7];
      for (let gb = 0; gb < 3 * wb; gb += 3) eb.o.TransformCoordinatesFromFloatsToRef(bb[gb], bb[gb + 1], bb[gb + 2], Mb, Vb), Hb.minimizeInPlace(Vb), pb.maximizeInPlace(Vb)
    }
    let Cb = !1;
    Cb || (Cb = !0, Vb.e.prototype.thinInstanceAdd = function(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.RJ().DC().getCaps().instancedArrays) return Hb.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(bb) ? bb.length : 1);
      const Mb = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(bb))
        for (let eb = 0; eb < bb.length; ++eb) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb[eb], eb === bb.length - 1 && wb);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, bb, wb);
      return Mb
    }, Vb.e.prototype.thinInstanceAddSelf = function() {
      let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(eb.b.IdentityReadOnly, bb)
    }, Vb.e.prototype.thinInstanceRegisterAttribute = function(bb, wb) {
      bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this.removeVerticesData(bb), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[bb] = wb, this._userThinInstanceBuffersStorage.sizes[bb] = wb * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[bb] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[bb]), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new gb.i(this.DC(), this._userThinInstanceBuffersStorage.data[bb], bb, !0, !1, wb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb])
    }, Vb.e.prototype.thinInstanceSetMatrixAt = function(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || bb >= this._thinInstanceDataStorage.instancesCount) return !1;
      const eb = this._thinInstanceDataStorage.matrixData;
      return wb.copyToArray(eb, 16 * bb), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[bb] = wb), Mb && (this.Mwb("matrix"), this.fC || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Vb.e.prototype.thinInstanceSetAttributeAt = function(bb, wb, Mb) {
      let eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[bb] || wb >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(bb, 0), this._userThinInstanceBuffersStorage.data[bb].set(Mb, wb * this._userThinInstanceBuffersStorage.strides[bb]), eb && this.Mwb(bb), !0)
    }, Object.defineProperty(Vb.e.prototype, "ibb", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(bb) {
        const wb = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        bb <= (wb ? wb.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = bb)
      },
      enumerable: !0,
      configurable: !0
    }), Vb.e.prototype._thinInstanceCreateMatrixBuffer = function(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const eb = new gb.d(this.DC(), wb, !Mb, 16, !1, !0);
      for (let Hb = 0; Hb < 4; Hb++) this.setVerticesBuffer(eb.createVertexBuffer(bb + Hb, 4 * Hb, 4));
      return eb
    }, Vb.e.prototype.gwb = function(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Mb = Mb || 16, "matrix" === bb) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = wb ? wb.length : 32 * Mb, this._thinInstanceDataStorage.matrixData = wb, this._thinInstanceDataStorage.worldMatrices = null, null !== wb ? (this._thinInstanceDataStorage.instancesCount = wb.length / Mb, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", wb, eb), this.fC || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.fC || this.refreshBoundingInfo());
      else if ("previousMatrix" === bb) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = wb, null !== wb && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", wb, eb));
      else if ("splatIndex" === bb && wb) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = wb.length / Mb, this._userThinInstanceBuffersStorage.data[bb] = wb, this._userThinInstanceBuffersStorage.strides[bb] = Mb, this._userThinInstanceBuffersStorage.sizes[bb] = wb.length;
        const eb = new gb.d(this.DC(), wb, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = eb;
        for (let wb = 0; wb < 4; wb++) this.setVerticesBuffer(eb.createVertexBuffer(bb + wb, 4 * wb, 4))
      } else bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), null === wb ? this._userThinInstanceBuffersStorage?.data[bb] && (this.removeVerticesData(bb), delete this._userThinInstanceBuffersStorage.data[bb], delete this._userThinInstanceBuffersStorage.strides[bb], delete this._userThinInstanceBuffersStorage.sizes[bb], delete this._userThinInstanceBuffersStorage.vertexBuffers[bb]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[bb] = wb, this._userThinInstanceBuffersStorage.strides[bb] = Mb, this._userThinInstanceBuffersStorage.sizes[bb] = wb.length, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new gb.i(this.DC(), wb, bb, !eb, !1, Mb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Vb.e.prototype.Mwb = function(bb) {
      "matrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === bb ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === bb ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0, this._thinInstanceDataStorage.instancesCount) : (bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[bb].isUpdatable() && this._thinInstanceRecreateBuffer(bb), this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(this._userThinInstanceBuffersStorage.data[bb], 0)))
    }, Vb.e.prototype.thinInstancePartialBufferUpdate = function(bb, wb, Mb) {
      if ("matrix" === bb) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof wb ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Mb * Float32Array.BYTES_PER_ELEMENT, 16 * wb), 16 * Mb) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(wb, Mb));
      else if (bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[bb]) {
        const eb = this._userThinInstanceBuffersStorage.vertexBuffers[bb];
        if ("number" === typeof wb) {
          const eb = new Float32Array(this._userThinInstanceBuffersStorage.data[bb].buffer, this._userThinInstanceBuffersStorage.data[bb].byteOffset + Mb * this._userThinInstanceBuffersStorage.strides[bb] * Float32Array.BYTES_PER_ELEMENT, wb * this._userThinInstanceBuffersStorage.strides[bb]);
          this._userThinInstanceBuffersStorage.vertexBuffers[bb].updateDirectly(eb, Mb * this._userThinInstanceBuffersStorage.strides[bb])
        } else eb.updateDirectly(wb, Mb)
      }
    }, Vb.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const bb = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let wb = 0; wb < this._thinInstanceDataStorage.instancesCount; ++wb) this._thinInstanceDataStorage.worldMatrices[wb] = eb.b.FromArray(bb, 16 * wb)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Vb.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Vb = this._thinInstanceDataStorage.boundingVectors;
      if (bb || !this.rawBoundingInfo) {
        if (Vb.length = 0, Hb && function(bb, wb, Mb) {
            const Hb = bb._userThinInstanceBuffersStorage,
              Vb = Hb?.data[lb],
              Cb = Hb?.strides[lb];
            if (!Vb || !Cb || Cb < 4 || !Lb(bb)) return !1;
            const Eb = bb._thinInstanceDataStorage.matrixData;
            if (!Eb) return !1;
            const Fb = {},
              Bb = eb.j.Vector4[0],
              sb = eb.j.YC[1],
              mb = eb.j.YC[2],
              hb = eb.j.YC[3],
              zb = eb.j.YC[4],
              Xb = eb.j.YC[5],
              xb = eb.j.YC[6],
              jb = eb.j.Matrix[2],
              Kb = bb.geometry ? bb.geometry.boundingBias : null,
              rb = bb.getTotalVertices();
            sb.Jbb(Number.POSITIVE_INFINITY), mb.Jbb(Number.NEGATIVE_INFINITY), hb.Jbb(Number.POSITIVE_INFINITY), zb.Jbb(Number.NEGATIVE_INFINITY);
            for (let pb = 0; pb < bb._thinInstanceDataStorage.instancesCount; ++pb) {
              const wb = pb * Cb;
              Bb.set(Vb[wb], Vb[wb + 1], Vb[wb + 2], Vb[wb + 3]);
              const Hb = bb._getData({
                applyMorph: Mb,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Bb,
                updatePositionsArray: !1,
                cache: Fb
              }, null, gb.i.PositionKind);
              if (!Hb) return !1;
              Ib(Hb, rb, Xb, xb), Ob(Xb, xb, Kb), sb.minimizeInPlace(Xb), mb.maximizeInPlace(xb), eb.b.FromArrayToRef(Eb, 16 * pb, jb), Kb ? Ub(Xb, xb, jb, hb, zb) : tb(Hb, rb, jb, hb, zb)
            }
            return !(!isFinite(sb.x) || !isFinite(hb.x)) && (bb.XN().reConstruct(hb, zb), bb.rawBoundingInfo = new pb.e(sb, mb), function(bb, wb) {
              bb.length = 0;
              for (let Mb = 0; Mb < wb.boundingBox.vectors.length; ++Mb) bb.push(wb.boundingBox.vectors[Mb].clone())
            }(wb, bb.rawBoundingInfo), bb._updateBoundingInfo(), !0)
          }(this, Vb, Mb)) return;
        Hb && this.bakedVertexAnimationManager?.isEnabled && Lb(this) ? this.refreshBoundingInfo({
          applySkeleton: wb,
          applyMorph: Mb,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(wb, Mb);
        const bb = this.XN();
        this.rawBoundingInfo = new pb.e(bb.minimum, bb.maximum)
      }
      const Cb = this.XN(),
        Eb = this._thinInstanceDataStorage.matrixData;
      if (0 === Vb.length)
        for (let eb = 0; eb < Cb.boundingBox.vectors.length; ++eb) Vb.push(Cb.boundingBox.vectors[eb].clone());
      eb.j.YC[0].Jbb(Number.POSITIVE_INFINITY), eb.j.YC[1].Jbb(Number.NEGATIVE_INFINITY);
      for (let pb = 0; pb < this._thinInstanceDataStorage.instancesCount; ++pb) {
        eb.b.FromArrayToRef(Eb, 16 * pb, eb.j.Matrix[0]);
        for (let bb = 0; bb < Vb.length; ++bb) eb.o.TransformCoordinatesToRef(Vb[bb], eb.j.Matrix[0], eb.j.YC[2]), eb.j.YC[0].minimizeInPlace(eb.j.YC[2]), eb.j.YC[1].maximizeInPlace(eb.j.YC[2])
      }
      Cb.reConstruct(eb.j.YC[0], eb.j.YC[1]), this._updateBoundingInfo()
    }, Vb.e.prototype._thinInstanceRecreateBuffer = function(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === bb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, wb)) : "previousMatrix" === bb ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, wb)) : (bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new gb.i(this.DC(), this._userThinInstanceBuffersStorage.data[bb], bb, !wb, !1, this._userThinInstanceBuffersStorage.strides[bb], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
    }, Vb.e.prototype._thinInstanceUpdateBufferSize = function(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      bb === gb.i.ColorKind && (bb = gb.i.ColorInstanceKind);
      const Mb = "matrix" === bb;
      if (!Mb && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[bb])) return;
      const eb = Mb ? 16 : this._userThinInstanceBuffersStorage.strides[bb],
        Hb = Mb ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[bb];
      let pb = Mb ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[bb];
      const Vb = (this._thinInstanceDataStorage.instancesCount + wb) * eb;
      let lb = Hb;
      for (; lb < Vb;) lb *= 2;
      if (!pb || Hb != lb) {
        if (pb) {
          const bb = new Float32Array(lb);
          bb.set(pb, 0), pb = bb
        } else pb = new Float32Array(lb);
        Mb ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", pb, !1), this._thinInstanceDataStorage.matrixData = pb, this._thinInstanceDataStorage.matrixBufferSize = lb, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", pb, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[bb]?.dispose(), this._userThinInstanceBuffersStorage.data[bb] = pb, this._userThinInstanceBuffersStorage.sizes[bb] = lb, this._userThinInstanceBuffersStorage.vertexBuffers[bb] = new gb.i(this.DC(), pb, bb, !0, !1, eb, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[bb]))
      }
    }, Vb.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Vb.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  42116: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => sb,
      e: () => Eb
    });
    var eb, Hb, pb, Vb, gb = Mb(41675),
      lb = Mb(41679),
      Lb = Mb(41697),
      Ib = Mb(38318),
      Ob = Mb(38285),
      Ub = Mb(41886),
      tb = Mb(38333),
      Cb = Mb(41554);
    let Eb = (() => {
      var bb;
      let wb, Mb, eb, Hb, pb, Vb, tb, Cb, Eb, Fb = Ub.d,
        Bb = [],
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Kb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [];
      return bb = class extends Fb {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(wb) {
          this._billboardMode !== wb && (this._billboardMode = wb, this._cache.useBillboardPosition = 0 !== (this._billboardMode & bb.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(bb) {
          this._infiniteDistance !== bb && (this._infiniteDistance = bb)
        }
        constructor(wb) {
          let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(wb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Ob.o(0, 0, 1), this._up = new Ob.o(0, 1, 0), this._right = new Ob.o(1, 0, 0), this._position = (0, gb.m)(this, Bb, Ob.o.Zero()), this._rotation = ((0, gb.m)(this, sb), (0, gb.m)(this, mb, Ob.o.Zero())), this._rotationQuaternion = ((0, gb.m)(this, hb), (0, gb.m)(this, zb, null)), this._scaling = ((0, gb.m)(this, Xb), (0, gb.m)(this, xb, Ob.o.One())), this._transformToBoneReferal = ((0, gb.m)(this, jb), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, gb.m)(this, Kb, bb.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, gb.m)(this, rb), (0, gb.m)(this, Rb, 1)), this._infiniteDistance = ((0, gb.m)(this, Db), (0, gb.m)(this, cb, !1)), this.ignoreNonUniformScaling = ((0, gb.m)(this, Yb), (0, gb.m)(this, Zb, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, gb.m)(this, fb), (0, gb.m)(this, Ab, !1)), this._poseMatrix = ((0, gb.m)(this, Wb), null), this._localMatrix = Ob.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Ob.o.Zero(), this._absoluteScaling = Ob.o.Zero(), this._absoluteRotationQuaternion = Ob.e.Identity(), this._pivotMatrix = Ob.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Ib.b, this._nonUniformScaling = !1, Mb && this.RJ().addTransformNode(this)
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
        get CO() {
          return this._scaling
        }
        set CO(bb) {
          this._scaling = bb, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(bb) {
          this._rotationQuaternion = bb, bb && this._rotation.Jbb(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Ob.o.TransformNormalFromFloatsToRef(0, 0, this.RJ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Ob.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Ob.o.TransformNormalFromFloatsToRef(this.RJ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(bb) {
          return this._poseMatrix ? (this._poseMatrix.eZ(bb), this) : (this._poseMatrix = bb.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Ob.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const wb = this._cache;
          return this._billboardMode === wb.billboardMode && this._billboardMode === bb.BILLBOARDMODE_NONE && (!wb.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.eZ(bb), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = wb, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Ob.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            wb = arguments.length > 1 ? arguments[1] : void 0,
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          const eb = this.clone("Clone of " + (this.name || this.id), bb || this.parent, !0);
          eb && Mb && Mb(this, eb);
          for (const Hb of this.getChildTransformNodes(!0)) Hb.instantiateHierarchy(eb, wb, Mb);
          return eb
        }
        aJ() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Jbb(0), this._rotationQuaternion = this._rotationQuaternion || Ob.e.Identity(), bb.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = bb, this._absolutePosition.twb(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get hlb() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(bb) {
          if (!bb) return this;
          let wb, Mb, eb;
          if (void 0 === bb.x) {
            if (arguments.length < 3) return this;
            wb = arguments[0], Mb = arguments[1], eb = arguments[2]
          } else wb = bb.x, Mb = bb.y, eb = bb.z;
          if (this.parent) {
            const bb = Ob.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(bb), Ob.o.TransformCoordinatesFromFloatsToRef(wb, Mb, eb, bb, this.position)
          } else this.position.x = wb, this.position.y = Mb, this.position.z = eb;
          return this._absolutePosition.eZ(bb), this
        }
        setPositionWithLocalVector(bb) {
          return this.computeWorldMatrix(), this.position = Ob.o.TransformNormal(bb, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const bb = Ob.j.Matrix[0];
          return this._localMatrix.invertToRef(bb), Ob.o.TransformNormal(this.position, bb)
        }
        locallyTranslate(bb) {
          return this.computeWorldMatrix(!0), this.position = Ob.o.TransformCoordinates(bb, this._localMatrix), this
        }
        lookAt(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Vb = bb._LookAtVectorCache,
            gb = 0 === pb ? this.position : this.getAbsolutePosition();
          if (wb.subtractToRef(gb, Vb), this.setDirection(Vb, Mb, eb, Hb), 1 === pb && this.parent)
            if (this.rotationQuaternion) {
              const bb = Ob.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(bb);
              const wb = Ob.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(wb), wb.invert(), bb.multiplyToRef(wb, bb), this.rotationQuaternion.fromRotationMatrix(bb)
            } else {
              const bb = Ob.j.Quaternion[0];
              Ob.e.FromEulerVectorToRef(this.rotation, bb);
              const wb = Ob.j.Matrix[0];
              bb.toRotationMatrix(wb);
              const Mb = Ob.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Mb), Mb.invert(), wb.multiplyToRef(Mb, wb), bb.fromRotationMatrix(wb), bb.toEulerAnglesToRef(this.rotation)
            } return this
        }
        S_(bb) {
          const wb = Ob.o.Zero();
          return this.getDirectionToRef(bb, wb), wb
        }
        getDirectionToRef(bb, wb) {
          return Ob.o.TransformNormalToRef(bb, this.getWorldMatrix(), wb), this
        }
        setDirection(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Hb = -Math.atan2(bb.z, bb.x) + Math.PI / 2,
            pb = Math.sqrt(bb.x * bb.x + bb.z * bb.z),
            Vb = -Math.atan2(bb.y, pb);
          return this.rotationQuaternion ? Ob.e.RotationYawPitchRollToRef(Hb + wb, Vb + Mb, eb, this.rotationQuaternion) : (this.rotation.x = Vb + Mb, this.rotation.y = Hb + wb, this.rotation.z = eb), this
        }
        setPivotPoint(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.RJ().getRenderId() && this.computeWorldMatrix(!0);
          const Mb = this.getWorldMatrix();
          if (1 == wb) {
            const wb = Ob.j.Matrix[0];
            Mb.invertToRef(wb), bb = Ob.o.TransformCoordinates(bb, wb)
          }
          return this.setPivotMatrix(Ob.b.Translation(-bb.x, -bb.y, -bb.z), !0)
        }
        getPivotPoint() {
          const bb = Ob.o.Zero();
          return this.getPivotPointToRef(bb), bb
        }
        getPivotPointToRef(bb) {
          return bb.x = -this._pivotMatrix.m[12], bb.y = -this._pivotMatrix.m[13], bb.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const bb = Ob.o.Zero();
          return this.getAbsolutePivotPointToRef(bb), bb
        }
        getAbsolutePivotPointToRef(bb) {
          return this.getPivotPointToRef(bb), Ob.o.TransformCoordinatesToRef(bb, this.getWorldMatrix(), bb), this
        }
        eeb(bb) {
          if (this._isDirty) return this;
          if (this._children)
            for (const wb of this._children) wb.eeb(bb);
          return super.eeb(bb)
        }
        setParent(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!wb && !this.parent) return this;
          const Hb = Ob.j.Quaternion[0],
            pb = Ob.j.YC[0],
            Vb = Ob.j.YC[1],
            gb = Ob.j.Matrix[1];
          Ob.b.IdentityToRef(gb);
          const lb = Ob.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let Lb = this.rotationQuaternion;
          return Lb || (Lb = bb._TmpRotation, Ob.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Lb)), Ob.b.ComposeToRef(this.CO, Lb, this.position, lb), this.parent && lb.multiplyToRef(this.parent.computeWorldMatrix(!0), lb), wb && (wb.computeWorldMatrix(!0).invertToRef(gb), lb.multiplyToRef(gb, lb)), lb.decompose(Vb, Hb, pb, Mb ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.eZ(Hb) : Hb.toEulerAnglesToRef(this.rotation), this.CO.eZ(Vb), this.position.eZ(pb), this.parent = wb, eb && this.setPivotMatrix(Ob.b.Identity()), this
        }
        addChild(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.setParent(this, wb), this
        }
        removeChild(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return bb.parent !== this || bb.setParent(null, wb), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(bb) {
          return this._nonUniformScaling !== bb && (this._nonUniformScaling = bb, !0)
        }
        attachToBone(bb, wb) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = wb, this.parent = bb, bb.getSkeleton().prepare(!0), bb.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = bb ? this._currentParentWhenAttachingToBone : null, this) : (bb && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(wb, Mb, eb) {
          let Hb;
          if (wb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Jbb(0)), eb && 0 !== eb) {
            if (this.parent) {
              const bb = this.parent.getWorldMatrix(),
                eb = Ob.j.Matrix[0];
              bb.invertToRef(eb), wb = Ob.o.TransformNormal(wb, eb), bb.determinant() < 0 && (Mb *= -1)
            }
            Hb = Ob.e.RotationAxisToRef(wb, Mb, bb._RotationAxisCache), Hb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Hb = Ob.e.RotationAxisToRef(wb, Mb, bb._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Hb, this.rotationQuaternion);
          return this
        }
        rotateAround(bb, wb, Mb) {
          wb.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Ob.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Jbb(0));
          const eb = Ob.j.YC[0],
            Hb = Ob.j.YC[1],
            pb = Ob.j.YC[2],
            Vb = Ob.j.Quaternion[0],
            gb = Ob.j.Matrix[0],
            lb = Ob.j.Matrix[1],
            Lb = Ob.j.Matrix[2],
            Ib = Ob.j.Matrix[3];
          return bb.subtractToRef(this.position, eb), Ob.b.TranslationToRef(eb.x, eb.y, eb.z, gb), Ob.b.TranslationToRef(-eb.x, -eb.y, -eb.z, lb), Ob.b.RotationAxisToRef(wb, Mb, Lb), lb.multiplyToRef(Lb, Ib), Ib.multiplyToRef(gb, Ib), Ib.decompose(Hb, Vb, pb), this.position.addInPlace(pb), Vb.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(bb, wb, Mb) {
          const eb = bb.scale(wb);
          if (Mb && 0 !== Mb) this.setAbsolutePosition(this.getAbsolutePosition().add(eb));
          else {
            const bb = this.getPositionExpressedInLocalSpace().add(eb);
            this.setPositionWithLocalVector(bb)
          }
          return this
        }
        addRotation(bb, wb, Mb) {
          let eb;
          this.rotationQuaternion ? eb = this.rotationQuaternion : (eb = Ob.j.Quaternion[1], Ob.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, eb));
          const Hb = Ob.j.Quaternion[0];
          return Ob.e.RotationYawPitchRollToRef(wb, bb, Mb, Hb), eb.multiplyInPlace(Hb), this.rotationQuaternion || eb.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== bb.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const eb = this.RJ().getRenderId();
          if (!this._isDirty && !wb && (this._currentRenderId === eb || this.isSynchronized())) return this._currentRenderId = eb, this._worldMatrix;
          Mb = Mb || this.RJ().activeCamera, this._updateCache();
          const Hb = this._cache;
          Hb.pivotMatrixUpdated = !1, Hb.billboardMode = this.billboardMode, Hb.infiniteDistance = this.infiniteDistance, Hb.parent = this._parentNode, this._currentRenderId = eb, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const pb = this._getEffectiveParent(),
            Vb = bb._TmpScaling;
          let gb, lb = this._position;
          if (this._infiniteDistance && !this.parent && Mb) {
            const wb = Mb.getWorldMatrix().m;
            lb = bb._TmpTranslation, lb.twb(this._position.x + wb[12], this._position.y + wb[13], this._position.z + wb[14])
          }
          if (Vb.twb(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, gb = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Ob.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.twb(0, 0, 0))
            }
          } else gb = bb._TmpRotation, Ob.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, gb);
          if (this._usePivotMatrix) {
            const bb = Ob.j.Matrix[1];
            Ob.b.ScalingToRef(Vb.x, Vb.y, Vb.z, bb);
            const wb = Ob.j.Matrix[0];
            gb.toRotationMatrix(wb), this._pivotMatrix.multiplyToRef(bb, Ob.j.Matrix[4]), Ob.j.Matrix[4].multiplyToRef(wb, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(lb.x, lb.y, lb.z)
          } else Ob.b.ComposeToRef(Vb, gb, lb, this._localMatrix);
          if (pb && pb.getWorldMatrix) {
            if (wb && pb.computeWorldMatrix(wb), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const bb = this.parent;
                bb.getSkeleton().prepare(), bb.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Ob.j.Matrix[7])
              } else Ob.j.Matrix[7].eZ(pb.getWorldMatrix());
              const wb = Ob.j.YC[5],
                Mb = Ob.j.YC[6],
                eb = Ob.j.Quaternion[0];
              Ob.j.Matrix[7].decompose(Mb, eb, wb), Ob.b.ScalingToRef(Mb.x, Mb.y, Mb.z, Ob.j.Matrix[7]), Ob.j.Matrix[7].setTranslation(wb), bb.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(eb, wb), this._localMatrix.setTranslation(wb)), this._localMatrix.multiplyToRef(Ob.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const bb = this.parent;
              bb.getSkeleton().prepare(), this._localMatrix.multiplyToRef(bb.getFinalMatrix(), Ob.j.Matrix[6]), Ob.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(pb.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.eZ(this._localMatrix);
          if (Mb && this.billboardMode)
            if (Hb.useBillboardPosition) {
              const wb = Ob.j.YC[0];
              this._worldMatrix.getTranslationToRef(wb);
              const eb = Mb.globalPosition;
              this._worldMatrix.invertToRef(Ob.j.Matrix[1]);
              const Hb = Ob.j.YC[1];
              Ob.o.TransformCoordinatesToRef(eb, Ob.j.Matrix[1], Hb), Hb.normalize();
              const pb = -Math.atan2(Hb.z, Hb.x) + Math.PI / 2,
                Vb = Math.sqrt(Hb.x * Hb.x + Hb.z * Hb.z),
                gb = -Math.atan2(Hb.y, Vb);
              if (Ob.e.RotationYawPitchRollToRef(pb, gb, 0, Ob.j.Quaternion[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                const wb = Ob.j.YC[1];
                Ob.j.Quaternion[0].toEulerAnglesToRef(wb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (wb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (wb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (wb.z = 0), Ob.b.RotationYawPitchRollToRef(wb.y, wb.x, wb.z, Ob.j.Matrix[0])
              } else Ob.b.FromQuaternionToRef(Ob.j.Quaternion[0], Ob.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ob.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ob.j.YC[0])
            } else {
              const wb = Ob.j.YC[0];
              this._worldMatrix.getTranslationToRef(wb), Ob.j.Matrix[1].eZ(Mb.getViewMatrix());
              const eb = this.RJ().useRightHandedSystem;
              if (eb && Ob.j.Matrix[1].multiplyToRef(bb._TmpRHRestore, Ob.j.Matrix[1]), Ob.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Ob.j.Matrix[1].invertToRef(Ob.j.Matrix[0]), (this.billboardMode & bb.BILLBOARDMODE_ALL) !== bb.BILLBOARDMODE_ALL) {
                Ob.j.Matrix[0].decompose(void 0, Ob.j.Quaternion[0], void 0);
                const wb = Ob.j.YC[1];
                Ob.j.Quaternion[0].toEulerAnglesToRef(wb), (this.billboardMode & bb.BILLBOARDMODE_X) !== bb.BILLBOARDMODE_X && (wb.x = 0), (this.billboardMode & bb.BILLBOARDMODE_Y) !== bb.BILLBOARDMODE_Y && (wb.y = 0), (this.billboardMode & bb.BILLBOARDMODE_Z) !== bb.BILLBOARDMODE_Z && (wb.z = 0), eb && (wb.y += Math.PI), Ob.b.RotationYawPitchRollToRef(wb.y, wb.x, wb.z, Ob.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Ob.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Ob.j.YC[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : pb && pb._nonUniformScaling ? this._updateNonUniformScalingState(pb._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.twb(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Ob.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), bb) {
            const bb = this.getChildren();
            for (let wb = 0; wb < bb.length; ++wb) {
              const Mb = bb[wb];
              if (Mb) {
                Mb.computeWorldMatrix();
                const bb = Ob.j.Matrix[0];
                Mb._localMatrix.multiplyToRef(this._localMatrix, bb);
                const wb = Ob.j.Quaternion[0];
                bb.decompose(Mb.CO, wb, Mb.position), Mb.rotationQuaternion ? Mb.rotationQuaternion.eZ(wb) : wb.toEulerAnglesToRef(Mb.rotation)
              }
            }
          }
          this.CO.twb(1, 1, 1), this.position.twb(0, 0, 0), this.rotation.twb(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ob.e.Identity()), this._worldMatrix = Ob.b.Identity()
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
          return bb || (bb = this.RJ().activeCamera), Ob.o.TransformCoordinates(this.getAbsolutePosition(), bb.getViewMatrix())
        }
        getDistanceToCamera() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return bb || (bb = this.RJ().activeCamera), this.getAbsolutePosition().subtract(bb.globalPosition).length()
        }
        clone(wb, Mb, eb) {
          const Hb = Lb.d.Clone((() => new bb(wb, this.RJ())), this);
          if (Hb.name = wb, Hb.id = wb, Mb && (Hb.parent = Mb), !eb) {
            const bb = this.getDescendants(!0);
            for (let Mb = 0; Mb < bb.length; Mb++) {
              const eb = bb[Mb];
              eb.clone && eb.clone(wb + "." + eb.name, Hb)
            }
          }
          return Hb
        }
        serialize(bb) {
          const wb = Lb.d.Serialize(this, bb);
          return wb.type = this.getClassName(), wb.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(wb), wb.localMatrix = this.getPivotMatrix().ppb(), wb.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (wb.aJ = !0), Lb.d.AppendSerializedAnimations(this, wb), wb.gF = this.serializeAnimationRanges(), wb
        }
        getChildTransformNodes(wb, Mb) {
          const eb = [];
          return this._getDescendants(eb, wb, (wb => (!Mb || Mb(wb)) && wb instanceof bb)), eb
        }
        dispose(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.RJ().stopAnimation(this), this.RJ().removeTransformNode(this), this._parentContainer) {
            const bb = this._parentContainer.transformNodes.indexOf(this);
            bb > -1 && this._parentContainer.transformNodes.splice(bb, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), bb) {
            const bb = this.getChildTransformNodes(!0);
            for (const wb of bb) wb.parent = null, wb.computeWorldMatrix(!0)
          }
          super.dispose(bb, wb)
        }
        normalizeToUnitCube() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0,
            eb = null,
            Hb = null;
          wb && (this.rotationQuaternion ? (Hb = this.rotationQuaternion.clone(), this.rotationQuaternion.twb(0, 0, 0, 1)) : this.rotation && (eb = this.rotation.clone(), this.rotation.twb(0, 0, 0)));
          const pb = this.getHierarchyBoundingVectors(bb, Mb),
            Vb = pb.max.subtract(pb.min),
            gb = Math.max(Vb.x, Vb.y, Vb.z);
          if (0 === gb) return this;
          const lb = 1 / gb;
          return this.CO.scaleInPlace(lb), wb && (this.rotationQuaternion && Hb ? this.rotationQuaternion.eZ(Hb) : this.rotation && eb && this.rotation.eZ(eb)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, lb.B)("position")], Mb = [(0, lb.B)("rotation")], eb = [(0, lb.t)("rotationQuaternion")], Hb = [(0, lb.B)("CO")], pb = [(0, lb.E)("billboardMode")], Vb = [(0, lb.E)()], tb = [(0, lb.E)("infiniteDistance")], Cb = [(0, lb.E)()], Eb = [(0, lb.E)()], (0, gb.i)(null, null, wb, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: bb => "_position" in bb,
            get: bb => bb._position,
            set: (bb, wb) => {
              bb._position = wb
            }
          },
          metadata: Lb
        }, Bb, sb), (0, gb.i)(null, null, Mb, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotation" in bb,
            get: bb => bb._rotation,
            set: (bb, wb) => {
              bb._rotation = wb
            }
          },
          metadata: Lb
        }, mb, hb), (0, gb.i)(null, null, eb, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "_rotationQuaternion" in bb,
            get: bb => bb._rotationQuaternion,
            set: (bb, wb) => {
              bb._rotationQuaternion = wb
            }
          },
          metadata: Lb
        }, zb, Xb), (0, gb.i)(null, null, Hb, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scaling" in bb,
            get: bb => bb._scaling,
            set: (bb, wb) => {
              bb._scaling = wb
            }
          },
          metadata: Lb
        }, xb, jb), (0, gb.i)(null, null, pb, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_billboardMode" in bb,
            get: bb => bb._billboardMode,
            set: (bb, wb) => {
              bb._billboardMode = wb
            }
          },
          metadata: Lb
        }, Kb, rb), (0, gb.i)(null, null, Vb, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: bb => "scalingDeterminant" in bb,
            get: bb => bb.scalingDeterminant,
            set: (bb, wb) => {
              bb.scalingDeterminant = wb
            }
          },
          metadata: Lb
        }, Rb, Db), (0, gb.i)(null, null, tb, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "_infiniteDistance" in bb,
            get: bb => bb._infiniteDistance,
            set: (bb, wb) => {
              bb._infiniteDistance = wb
            }
          },
          metadata: Lb
        }, cb, Yb), (0, gb.i)(null, null, Cb, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "ignoreNonUniformScaling" in bb,
            get: bb => bb.ignoreNonUniformScaling,
            set: (bb, wb) => {
              bb.ignoreNonUniformScaling = wb
            }
          },
          metadata: Lb
        }, Zb, fb), (0, gb.i)(null, null, Eb, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: bb => "reIntegrateRotationIntoRotationQuaternion" in bb,
            get: bb => bb.reIntegrateRotationIntoRotationQuaternion,
            set: (bb, wb) => {
              bb.reIntegrateRotationIntoRotationQuaternion = wb
            }
          },
          metadata: Lb
        }, Ab, Wb), Lb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Lb
        })
      })(), bb.BILLBOARDMODE_NONE = 0, bb.BILLBOARDMODE_X = 1, bb.BILLBOARDMODE_Y = 2, bb.BILLBOARDMODE_Z = 4, bb.BILLBOARDMODE_ALL = 7, bb.BILLBOARDMODE_USE_POSITION = 128, bb.BillboardUseParentOrientation = !1, bb._TmpRotation = Ob.e.Zero(), bb._TmpScaling = Ob.o.Zero(), bb._TmpTranslation = Ob.o.Zero(), bb._TmpRHRestore = Ob.b.Scaling(1, 1, -1), bb._LookAtVectorCache = new Ob.o(0, 0, 0), bb._RotationAxisCache = new Ob.e, bb
    })();

    function Fb(bb, wb, Mb) {
      const eb = Lb.d.Parse((() => new Eb(bb.name, wb)), bb, wb, Mb);
      if (bb.localMatrix ? eb.setPreTransformMatrix(Ob.b.FromArray(bb.localMatrix)) : bb.pivotMatrix && eb.setPivotMatrix(Ob.b.FromArray(bb.pivotMatrix)), eb.Bx(bb.isEnabled), eb._waitingParsedUniqueId = bb.uniqueId, void 0 !== bb.parentId && (eb._waitingParentId = bb.parentId), void 0 !== bb.parentInstanceIndex && (eb._waitingParentInstanceIndex = bb.parentInstanceIndex), bb.aJ && (eb._waitingFreezeWorldMatrix = bb.aJ), bb.animations) {
        for (let wb = 0; wb < bb.animations.length; wb++) {
          const Mb = bb.animations[wb],
            Hb = (0, tb.c)("BABYLON.Animation");
          Hb && eb.animations.push(Hb.Parse(Mb))
        }
        Ub.d.ParseAnimationRanges(eb, bb, wb)
      }
      return bb.autoAnimate && wb.beginAnimation(eb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), eb
    }
    let Bb = !1;

    function sb() {
      Bb || (Bb = !0, Eb.Parse = Fb)
    }(eb = Eb.prototype).fn ?? (eb.fn = (0, Cb.h)("TransformNode", "fn")), (Hb = Eb.prototype).applyImpulse ?? (Hb.applyImpulse = (0, Cb.h)("TransformNode", "applyImpulse")), (pb = Eb.prototype).applyAngularImpulse ?? (pb.applyAngularImpulse = (0, Cb.h)("TransformNode", "applyAngularImpulse")), (Vb = Eb.prototype).applyTorque ?? (Vb.applyTorque = (0, Cb.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Eb.prototype, "physicsBody") || Object.defineProperty(Eb.prototype, "physicsBody", (0, Cb.g)("TransformNode", "physicsBody"))
  },
  42085: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      try {
        const eb = bb.next();
        eb.done ? wb(eb) : eb.value ? eb.value.then((() => {
          eb.value = void 0, wb(eb)
        }), Mb) : wb(eb)
      } catch (eb) {
        Mb(eb)
      }
    }

    function Hb() {
      let bb, wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Mb, Hb, pb) => {
        const Vb = performance.now();
        void 0 === bb || Vb - bb > wb ? (bb = Vb, setTimeout((() => {
          eb(Mb, Hb, pb)
        }), 0)) : eb(Mb, Hb, pb)
      }
    }

    function pb(bb, wb, Mb, eb, Hb) {
      const pb = () => {
        let Vb;
        const gb = bb => {
          bb.done ? Mb(bb.value) : void 0 === Vb ? Vb = !0 : pb()
        };
        do {
          Vb = void 0, Hb && Hb.aborted ? eb(new Error("Aborted")) : wb(bb, gb, eb), void 0 === Vb && (Vb = !1)
        } while (Vb)
      };
      pb()
    }

    function Vb(bb, wb) {
      let Mb;
      return pb(bb, eb, (bb => Mb = bb), (bb => {
        throw bb
      }), wb), Mb
    }
    async function gb(bb, wb, Mb) {
      return await new Promise(((eb, Hb) => {
        pb(bb, wb, eb, Hb, Mb)
      }))
    }

    function lb(bb, wb) {
      return function() {
        return Vb(bb(...arguments), wb)
      }
    }
    Mb.d(wb, {
      c: () => Hb,
      e: () => lb,
      g: () => gb,
      j: () => Vb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);